-- ─────────────────────────────────────────────────────────────────────────
-- Anti-cheat (2026-11-20)
--
-- Aanleiding: account "Frank" had XP/edelstenen/top-3 op 2.147.483.646 (int-max
-- min 1) na 2 vragen. Oorzaak: RLS liet een ingelogde gebruiker ELKE kolom van
-- de eigen user_profiles-rij vrij updaten, en add_xp/add_gems/add_coins
-- accepteerden elk bedrag. buy_avatar_item vertrouwde de prijs van de client.
--
-- Wat dit dichtzet:
--  1. Trigger guard_user_profiles: directe app-writes (rol authenticated/anon)
--     mogen alleen nog "cosmetische" kolommen wijzigen (naam, avatar, opt-ins,
--     dagdoel, studiejaar, hartjes binnen grenzen). Saldo, streaks, skins enz.
--     worden stil teruggezet naar de oude waarde. Server-functies (security
--     definer, eigenaar postgres) en service_role vallen hier niet onder.
--  2. add_xp/add_gems/add_coins/add_freezes: plafond per aanroep + per dag
--     (Amsterdam-tijd), bijgehouden in earn_daily. Admins zijn uitgezonderd.
--  3. buy_avatar_item: prijs en valuta komen van de server, niet de client.
--  4. update_exam_streak: eigenaarscheck (stond open, ook voor anon).
--  5. anon: geen insert/update/delete meer op user_profiles.
-- ─────────────────────────────────────────────────────────────────────────

-- 1 ── Trigger ──────────────────────────────────────────────────────────────
create or replace function public.guard_user_profiles()
returns trigger
language plpgsql
as $$
begin
  -- Alleen directe writes via de API. Security-definer-functies draaien als
  -- postgres, service_role/supabase_auth_admin zijn ook vrij.
  if current_user not in ('authenticated', 'anon') then
    return new;
  end if;

  if tg_op = 'INSERT' then
    -- Nieuwe rij vanuit de app: altijd de startwaarden (zoals handle_new_user).
    new.total_xp           := 0;
    new.total_gems         := 100;
    new.total_coins        := 500;
    new.top3_finishes      := 0;
    new.week_start_xp      := 0;
    new.login_streak       := 0;
    new.last_active_date   := null;
    new.streak_shield_date := null;
    new.streak_frozen_days := 0;
    new.broken_streak      := 0;
    new.broken_streak_date := null;
    new.exam_streak        := 0;
    new.last_exam_date     := null;
    new.goal_streak        := 0;
    new.goal_last_date     := null;
    new.goal_min           := null;
    new.goal_claimed       := '[]'::jsonb;
    new.question_streak    := 0;
    new.max_correct_streak := 0;
    new.flat_line_count    := 0;
    new.night_questions    := 0;
    new.streak_freezes     := 0;
    new.weekend_amulet     := 0;
    new.amulet_weekend     := null;
    new.avatar_skins       := '[]'::jsonb;
    new.last_lb_rank       := null;
    new.student_number     := null;
    new.heart_gift_day     := null;
    new.hearts             := least(greatest(coalesce(new.hearts, 20), 0), 20);
    return new;
  end if;

  -- UPDATE: beschermde kolommen blijven wat ze waren.
  new.total_xp           := old.total_xp;
  new.total_gems         := old.total_gems;
  new.total_coins        := old.total_coins;
  new.top3_finishes      := old.top3_finishes;
  new.login_streak       := old.login_streak;
  new.last_active_date   := old.last_active_date;
  new.streak_shield_date := old.streak_shield_date;
  new.streak_frozen_days := old.streak_frozen_days;
  new.broken_streak      := old.broken_streak;
  new.broken_streak_date := old.broken_streak_date;
  new.exam_streak        := old.exam_streak;
  new.last_exam_date     := old.last_exam_date;
  new.goal_streak        := old.goal_streak;
  new.goal_last_date     := old.goal_last_date;
  new.goal_min           := old.goal_min;
  new.goal_claimed       := old.goal_claimed;
  new.question_streak    := old.question_streak;
  new.max_correct_streak := old.max_correct_streak;
  new.flat_line_count    := old.flat_line_count;
  new.night_questions    := old.night_questions;
  new.streak_freezes     := old.streak_freezes;
  new.weekend_amulet     := old.weekend_amulet;
  new.amulet_weekend     := old.amulet_weekend;
  new.avatar_skins       := old.avatar_skins;
  new.last_lb_rank       := old.last_lb_rank;
  new.student_number     := old.student_number;
  new.heart_gift_day     := old.heart_gift_day;
  new.email_unsub_token  := old.email_unsub_token;

  -- Weekklassement: week_start_xp mag alleen meeschuiven bij een nieuwe week,
  -- en dan altijd naar de echte huidige XP (weekscore begint op 0).
  if new.week_key is distinct from old.week_key then
    new.week_start_xp := old.total_xp;
  else
    new.week_start_xp := old.week_start_xp;
  end if;

  -- Hartjes schrijft de client zelf (verversen, kisten, terugverdienen):
  -- nooit negatief en via een directe write nooit boven 40.
  new.hearts := least(greatest(coalesce(new.hearts, 0), 0),
                      greatest(coalesce(old.hearts, 0), 40));

  return new;
end;
$$;

drop trigger if exists guard_user_profiles on public.user_profiles;
create trigger guard_user_profiles
  before insert or update on public.user_profiles
  for each row execute function public.guard_user_profiles();


-- 2 ── Verdien-plafonds ─────────────────────────────────────────────────────
create table if not exists public.earn_daily (
  user_id uuid not null references auth.users(id) on delete cascade,
  day     date not null,
  xp      int  not null default 0,
  gems    int  not null default 0,
  coins   int  not null default 0,
  freezes int  not null default 0,
  primary key (user_id, day)
);
alter table public.earn_daily enable row level security;   -- geen policies = geen app-toegang
revoke all on public.earn_daily from anon, authenticated;

-- Geeft terug hoeveel van p_amount toegekend mag worden (en boekt dat).
-- Negatieve bedragen (uitgeven) gaan altijd door; admins hebben geen plafond.
create or replace function public._earn_allow(
  p_user uuid, p_kind text, p_amount int, p_per_call int, p_per_day int)
returns int
language plpgsql
security definer
set search_path = public
as $$
declare
  v_day   date := (now() at time zone 'Europe/Amsterdam')::date;
  v_used  int;
  v_grant int;
begin
  if p_amount is null or p_amount <= 0 then return coalesce(p_amount, 0); end if;
  if public.is_admin() then return p_amount; end if;
  if p_kind not in ('xp', 'gems', 'coins', 'freezes') then
    raise exception 'invalid kind %', p_kind;
  end if;

  insert into public.earn_daily (user_id, day) values (p_user, v_day)
  on conflict (user_id, day) do nothing;

  execute format('select %I from public.earn_daily where user_id = $1 and day = $2 for update', p_kind)
    into v_used using p_user, v_day;

  v_grant := greatest(0, least(p_amount, p_per_call, p_per_day - coalesce(v_used, 0)));
  if v_grant > 0 then
    execute format('update public.earn_daily set %1$I = %1$I + $3 where user_id = $1 and day = $2', p_kind)
      using p_user, v_day, v_grant;
  end if;
  return v_grant;
end;
$$;
revoke execute on function public._earn_allow(uuid, text, int, int, int) from public, anon, authenticated;

-- Plafonds (ruim boven echt gebruik):
--   XP     max 200 per keer (zwaarste vraag = 15 pt = 150 XP), 20.000 per dag
--   gems   max 1.000 per keer (trofeeënpad-mijlpaal), 5.000 per dag
--   coins  max 500 per keer (legendarische kist = 200), 5.000 per dag
--   freezes: alleen via buy_streak_item of admin (de app roept add_freezes niet aan)

create or replace function public.add_xp(p_user_id uuid, p_amount integer)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare v int;
begin
  if auth.uid() is null or (p_user_id <> auth.uid() and not public.is_admin()) then
    raise exception 'forbidden: cannot modify another account' using errcode = '42501';
  end if;
  v := public._earn_allow(p_user_id, 'xp', p_amount, 200, 20000);
  if v = 0 then return; end if;
  insert into public.user_profiles (user_id, total_xp) values (p_user_id, greatest(0, v))
  on conflict (user_id) do update
    set total_xp = greatest(0, coalesce(public.user_profiles.total_xp, 0) + v);
end;
$$;

create or replace function public.add_gems(p_user_id uuid, p_amount integer)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare v int; r int;
begin
  if auth.uid() is null or (p_user_id <> auth.uid() and not public.is_admin()) then
    raise exception 'forbidden: cannot modify another account' using errcode = '42501';
  end if;
  v := public._earn_allow(p_user_id, 'gems', p_amount, 1000, 5000);
  insert into public.user_profiles (user_id, total_gems) values (p_user_id, greatest(0, v))
  on conflict (user_id) do update
    set total_gems = greatest(0, coalesce(public.user_profiles.total_gems, 0) + v)
  returning total_gems into r;
  return r;
end;
$$;

create or replace function public.add_coins(p_user_id uuid, p_amount integer)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare v int;
begin
  if auth.uid() is null or (p_user_id <> auth.uid() and not public.is_admin()) then
    raise exception 'forbidden: cannot modify another account' using errcode = '42501';
  end if;
  v := public._earn_allow(p_user_id, 'coins', p_amount, 500, 5000);
  if v = 0 then return; end if;
  insert into public.user_profiles (user_id, total_coins) values (p_user_id, greatest(v, 0))
  on conflict (user_id) do update
    set total_coins = greatest(coalesce(public.user_profiles.total_coins, 0) + v, 0);
end;
$$;

create or replace function public.add_freezes(p_user_id uuid, p_amount integer)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare v int; r int;
begin
  if auth.uid() is null or (p_user_id <> auth.uid() and not public.is_admin()) then
    raise exception 'forbidden: cannot modify another account' using errcode = '42501';
  end if;
  v := public._earn_allow(p_user_id, 'freezes', p_amount, 0, 0);
  insert into public.user_profiles (user_id, streak_freezes) values (p_user_id, greatest(0, v))
  on conflict (user_id) do update
    set streak_freezes = greatest(0, coalesce(public.user_profiles.streak_freezes, 0) + v)
  returning streak_freezes into r;
  return r;
end;
$$;


-- 3 ── Shop: prijs van de server ────────────────────────────────────────────
-- p_price/p_currency blijven in de signatuur (de app stuurt ze mee) maar
-- worden genegeerd. Vaste items staan hier; dynamische items in avatar_items.
create or replace function public.buy_avatar_item(p_item_id text, p_price integer, p_currency text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid   uuid := auth.uid();
  v_owned jsonb;
  v_bal   int;
  v_price int;
  v_cur   text;
begin
  if v_uid is null then return jsonb_build_object('ok', false, 'reason', 'login'); end if;

  v_price := case p_item_id
    when 'outfit_doctor'   then 1000
    when 'outfit_surgeon'  then 1000
    when 'outfit_hoodie'   then 500
    when 'stetho_normal'   then 1000
    when 'stetho_gold'     then 5000
    when 'headlamp_normal' then 1000
    when 'headlamp_gold'   then 5000
  end;
  if v_price is not null then
    v_cur := 'coins';
  else
    select coalesce(ai.price, 0), case when ai.currency = 'gems' then 'gems' else 'coins' end
      into v_price, v_cur
      from public.avatar_items ai
     where ai.id::text = p_item_id and coalesce(ai.launched, false);
    if not found then
      return jsonb_build_object('ok', false, 'reason', 'unknown');
    end if;
  end if;

  select avatar_skins,
         case when v_cur = 'gems' then total_gems else total_coins end
    into v_owned, v_bal
    from public.user_profiles where user_id = v_uid for update;
  v_owned := coalesce(v_owned, '[]'::jsonb);
  if v_owned @> to_jsonb(p_item_id) then
    return jsonb_build_object('ok', true, 'owned', v_owned, 'charged', false);
  end if;

  if v_price > 0 then
    if coalesce(v_bal, 0) < v_price then
      return jsonb_build_object('ok', false, 'reason', 'insufficient');
    end if;
    if v_cur = 'gems' then
      update public.user_profiles
         set total_gems = greatest(0, coalesce(total_gems, 0) - v_price),
             avatar_skins = v_owned || to_jsonb(p_item_id)
       where user_id = v_uid;
    else
      update public.user_profiles
         set total_coins = greatest(0, coalesce(total_coins, 0) - v_price),
             avatar_skins = v_owned || to_jsonb(p_item_id)
       where user_id = v_uid;
    end if;
  else
    update public.user_profiles
       set avatar_skins = v_owned || to_jsonb(p_item_id)
     where user_id = v_uid;
  end if;

  select avatar_skins into v_owned from public.user_profiles where user_id = v_uid;
  return jsonb_build_object('ok', true, 'owned', v_owned, 'charged', v_price > 0);
end;
$$;


-- 4 ── update_exam_streak: eigenaarscheck ───────────────────────────────────
create or replace function public.update_exam_streak(p_user_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_today  date := current_date;
  v_last   date;
  v_streak int;
begin
  if auth.uid() is null or (p_user_id <> auth.uid() and not public.is_admin()) then
    raise exception 'forbidden: cannot modify another account' using errcode = '42501';
  end if;
  select last_exam_date, exam_streak into v_last, v_streak
    from public.user_profiles where user_id = p_user_id;
  if not found then return; end if;
  if v_last = v_today then
    return;
  elsif v_last = v_today - 1 then
    update public.user_profiles set exam_streak = v_streak + 1, last_exam_date = v_today
     where user_id = p_user_id;
  else
    update public.user_profiles set exam_streak = 1, last_exam_date = v_today
     where user_id = p_user_id;
  end if;
end;
$$;
revoke execute on function public.update_exam_streak(uuid) from public, anon;
grant  execute on function public.update_exam_streak(uuid) to authenticated;


-- 5 ── anon hoeft niets te schrijven ────────────────────────────────────────
revoke insert, update, delete on public.user_profiles from anon;
