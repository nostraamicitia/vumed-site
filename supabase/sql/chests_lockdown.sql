-- ─────────────────────────────────────────────────────────────────────────
-- Kisten server-side — STAP 2: LOCKDOWN. Pas draaien BIJ GO-LIVE (nadat de
-- nieuwe frontend op main staat): de oude client betaalt kisten uit via
-- add_gems/add_coins en schrijft kist-hartjes direct; dat werkt hierna niet meer.
--
--  • add_gems / add_coins: gewone gebruikers kunnen geen positieve bedragen
--    meer bijschrijven (uitgeven met een negatief bedrag mag nog). Kisten gaan
--    via open_chest, edelstenen per vraag via answer_reward. Admins blijven vrij.
--  • guard_user_profiles: hartjes via een directe write nooit boven
--    max(oude waarde, 20) — extra hartjes komen alleen nog van de server.
-- ─────────────────────────────────────────────────────────────────────────

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
  v := public._earn_allow(p_user_id, 'gems', p_amount, 0, 0);
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
  v := public._earn_allow(p_user_id, 'coins', p_amount, 0, 0);
  if v = 0 then return; end if;
  insert into public.user_profiles (user_id, total_coins) values (p_user_id, greatest(v, 0))
  on conflict (user_id) do update
    set total_coins = greatest(coalesce(public.user_profiles.total_coins, 0) + v, 0);
end;
$$;

-- Zelfde trigger als anti_cheat.sql, alleen de hartjes-grens is strakker.
create or replace function public.guard_user_profiles()
returns trigger
language plpgsql
as $$
begin
  if current_user not in ('authenticated', 'anon') then
    return new;
  end if;

  if tg_op = 'INSERT' then
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

  if new.week_key is distinct from old.week_key then
    new.week_start_xp := old.total_xp;
  else
    new.week_start_xp := old.week_start_xp;
  end if;

  -- Verversen naar 20 en terugverdienen (+1 tot 20) mag; méér alleen via de server.
  new.hearts := least(greatest(coalesce(new.hearts, 0), 0),
                      greatest(coalesce(old.hearts, 0), 20));

  return new;
end;
$$;
