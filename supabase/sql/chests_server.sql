-- ─────────────────────────────────────────────────────────────────────────
-- Kisten server-side (2026-11-20) — STAP 1 (additief, veilig naast oude client)
--
-- De server bepaalt nu óf je een kist mag openen, WAT erin zit en betaalt
-- direct uit. De client toont alleen nog de uitkomst (gift_modal opts.preset).
--
--   open_chest(p_source, p_ref) → { ok, plan[], tier, gems, coins, hearts, balances }
--     daily_gift  ref ''          1× per dag (heart_gift_day)
--     xp          ref '0','1',…   XP-mijlpaal van vandaag, op volgorde; XP komt
--                                 uit earn_daily (geboekt door add_xp)
--     quest       ref q5/q15/q30  vragen vandaag (earn_daily.questions)
--     goal        ref 7/30/100    dagdoel-reeks (zelfde regels als claim_goal_milestone)
--     achievement ref 'key:tier'  1× ooit, altijd legendarisch; carriere checkt XP
--     trophy      ref '0'..'60'   1× ooit, klasse = floor(total_xp / 1000)
--
--   answer_reward(p_correct, p_other, p_wrong) → { gems, balances }
--     2 gems per goed, 1 per open/dnd-vraag; telt vragen voor de quests.
--
-- Stap 2 (chests_lockdown.sql) draait pas bij go-live: dan mogen add_gems /
-- add_coins geen positieve bedragen meer van gewone gebruikers aannemen.
-- Dagen zijn UTC (current_date) — zelfde dagsleutel als de client
-- (new Date().toISOString().slice(0,10)).
-- ─────────────────────────────────────────────────────────────────────────

create table if not exists public.chest_claims (
  user_id    uuid not null references auth.users(id) on delete cascade,
  source     text not null,
  ref        text not null,
  day        date not null,        -- current_date voor dagelijkse bronnen, 2000-01-01 voor eenmalige
  prize      jsonb,
  created_at timestamptz not null default now(),
  primary key (user_id, source, ref, day)
);
alter table public.chest_claims enable row level security;
revoke all on public.chest_claims from anon, authenticated;

alter table public.earn_daily add column if not exists questions int not null default 0;

-- Dagboek nu in UTC, en admins worden ook geboekt (zonder plafond) zodat
-- hun XP-mijlpalen werken.
create or replace function public._earn_allow(
  p_user uuid, p_kind text, p_amount int, p_per_call int, p_per_day int)
returns int
language plpgsql
security definer
set search_path = public
as $$
declare
  v_day   date := current_date;
  v_used  int;
  v_grant int;
begin
  if p_amount is null or p_amount <= 0 then return coalesce(p_amount, 0); end if;
  if p_kind not in ('xp', 'gems', 'coins', 'freezes') then
    raise exception 'invalid kind %', p_kind;
  end if;

  insert into public.earn_daily (user_id, day) values (p_user, v_day)
  on conflict (user_id, day) do nothing;

  execute format('select %I from public.earn_daily where user_id = $1 and day = $2 for update', p_kind)
    into v_used using p_user, v_day;

  if public.is_admin() then
    v_grant := p_amount;
  else
    v_grant := greatest(0, least(p_amount, p_per_call, p_per_day - coalesce(v_used, 0)));
  end if;
  if v_grant > 0 then
    execute format('update public.earn_daily set %1$I = %1$I + $3 where user_id = $1 and day = $2', p_kind)
      using p_user, v_day, v_grant;
  end if;
  return v_grant;
end;
$$;
revoke execute on function public._earn_allow(uuid, text, int, int, int) from public, anon, authenticated;


-- Kist-rol: zelfde tabellen als gift_modal.js RARITIES / vumed.html CHEST_RARITIES.
-- KEEP IN SYNC: p (start), pBoth, gems, coins, hearts, HEART_CHANCE 0.10,
-- UPGRADE_CHANCE 0.15, 4 tikken (legendarische start = 1 tik).
create or replace function public._roll_chest(p_start int, p_mult numeric)
returns jsonb
language plpgsql
set search_path = public
as $$
declare
  p_start_w numeric[] := array[0.70, 0.20, 0.09, 0.01];
  p_both    numeric[] := array[0.15, 0.40, 0.70, 1.00];
  g_lo int[] := array[5, 9, 13, 17];   g_hi int[] := array[8, 12, 16, 20];
  c_lo int[] := array[25, 61, 106, 151]; c_hi int[] := array[60, 105, 150, 200];
  h_lo int[] := array[1, 1, 2, 3];     h_hi int[] := array[1, 2, 3, 4];
  v_start int; v_cur int; v_plan int[]; r numeric; acc numeric := 0; i int; t int;
  v_g int; v_c int; v_h int := 0; v_m numeric := coalesce(p_mult, 1);
begin
  if p_start is not null then
    v_start := greatest(0, least(3, p_start));
  else
    r := random(); v_start := 0;
    for i in 1..4 loop
      acc := acc + p_start_w[i];
      if r < acc then v_start := i - 1; exit; end if;
    end loop;
  end if;

  v_plan := array[v_start]; v_cur := v_start;
  if v_start < 3 then
    for t in 2..4 loop
      if v_cur < 3 and random() < 0.15 then v_cur := v_cur + 1; end if;
      v_plan := v_plan || v_cur;
    end loop;
  end if;

  i := v_cur + 1;   -- 1-based index van de eindtier
  v_g := g_lo[i] + floor(random() * (g_hi[i] - g_lo[i] + 1))::int;
  v_c := c_lo[i] + floor(random() * (c_hi[i] - c_lo[i] + 1))::int;
  if random() >= p_both[i] then
    if random() < 0.5 then v_c := 0; else v_g := 0; end if;
  end if;
  if random() < 0.10 then
    v_h := h_lo[i] + floor(random() * (h_hi[i] - h_lo[i] + 1))::int;
  end if;
  if v_m <> 1 then
    v_g := case when v_g > 0 then round(v_g * v_m)::int else 0 end;
    v_c := case when v_c > 0 then round(v_c * v_m)::int else 0 end;
  end if;

  return jsonb_build_object('plan', to_jsonb(v_plan), 'tier', v_cur,
                            'gems', v_g, 'coins', v_c, 'hearts', v_h);
end;
$$;
revoke execute on function public._roll_chest(int, numeric) from public, anon, authenticated;


create or replace function public.open_chest(p_source text, p_ref text default '')
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid   uuid := auth.uid();
  v_today date := current_date;
  v_once  date := date '2000-01-01';
  v_day   date;
  v_ref   text := coalesce(p_ref, '');
  v_start int := null;
  v_mult  numeric := 1;
  v_n     int;
  v_cnt   int;
  v_need  int;
  v_have  int;
  v_key   text;
  v_tiers int;
  v_prof  record;
  v_prize jsonb;
  v_g int; v_c int; v_h int;
begin
  if v_uid is null then return jsonb_build_object('ok', false, 'reason', 'login'); end if;

  -- Eén kist tegelijk per gebruiker (row lock).
  select total_xp, heart_gift_day, goal_streak, goal_min, goal_claimed, daily_goal
    into v_prof
    from public.user_profiles where user_id = v_uid for update;
  if not found then return jsonb_build_object('ok', false, 'reason', 'noprofile'); end if;

  if p_source = 'daily_gift' then
    if v_prof.heart_gift_day = v_today then
      return jsonb_build_object('ok', false, 'reason', 'claimed');
    end if;
    update public.user_profiles set heart_gift_day = v_today where user_id = v_uid;
    v_day := v_today; v_ref := '';

  elsif p_source = 'xp' then
    if v_ref !~ '^\d{1,3}$' then return jsonb_build_object('ok', false, 'reason', 'ref'); end if;
    v_n := v_ref::int;
    select count(*) into v_cnt from public.chest_claims
     where user_id = v_uid and source = 'xp' and day = v_today;
    if v_n <> v_cnt then return jsonb_build_object('ok', false, 'reason', 'order', 'next', v_cnt); end if;
    -- KEEP IN SYNC: dashboard.html / vumed.html XP_MILESTONES (+5000 daarna)
    v_need := case when v_n < 9 then (array[100, 200, 300, 500, 1000, 1500, 2000, 3000, 5000])[v_n + 1]
                   else 5000 + (v_n - 8) * 5000 end;
    select coalesce(xp, 0) into v_have from public.earn_daily where user_id = v_uid and day = v_today;
    if coalesce(v_have, 0) < v_need then
      return jsonb_build_object('ok', false, 'reason', 'notreached', 'have', coalesce(v_have, 0), 'need', v_need);
    end if;
    v_day := v_today;

  elsif p_source = 'quest' then
    v_need := case v_ref when 'q5' then 5 when 'q15' then 15 when 'q30' then 30 end;
    if v_need is null then return jsonb_build_object('ok', false, 'reason', 'ref'); end if;
    select coalesce(questions, 0) into v_have from public.earn_daily where user_id = v_uid and day = v_today;
    if coalesce(v_have, 0) < v_need then
      return jsonb_build_object('ok', false, 'reason', 'notreached', 'have', coalesce(v_have, 0), 'need', v_need);
    end if;
    v_day := v_today;

  elsif p_source = 'goal' then
    if v_ref not in ('7', '30', '100') then return jsonb_build_object('ok', false, 'reason', 'ref'); end if;
    v_n := v_ref::int;
    if coalesce(v_prof.goal_streak, 0) < v_n then
      return jsonb_build_object('ok', false, 'reason', 'notreached');
    end if;
    if coalesce(v_prof.goal_claimed, '[]'::jsonb) @> to_jsonb(v_n) then
      return jsonb_build_object('ok', false, 'reason', 'claimed');
    end if;
    -- KEEP IN SYNC: vumed_stats.js GOAL_TIERS (rarity) × GOAL_MILESTONES (mult)
    v_start := case coalesce(v_prof.goal_min, v_prof.daily_goal, 20)
                 when 10 then 0 when 20 then 1 when 30 then 2 when 50 then 3 else 1 end;
    v_mult  := case v_n when 7 then 1 when 30 then 3 when 100 then 10 end;
    update public.user_profiles
       set goal_claimed = coalesce(goal_claimed, '[]'::jsonb) || to_jsonb(v_n),
           goal_min     = coalesce(daily_goal, 20)
     where user_id = v_uid;
    -- goal_claimed is de echte bewaker (een nieuwe reeks mag 7/30/100 opnieuw
    -- halen), dus hier per dag loggen i.p.v. eenmalig.
    v_day := v_today;

  elsif p_source = 'achievement' then
    if v_ref !~ '^[a-z]+:\d{1,2}$' then return jsonb_build_object('ok', false, 'reason', 'ref'); end if;
    v_key := split_part(v_ref, ':', 1);
    v_n   := split_part(v_ref, ':', 2)::int;
    -- KEEP IN SYNC: progressdots.js Ach BADGES (aantal tiers per badge)
    v_tiers := case v_key
      when 'carriere' then 6 when 'histo' then 5 when 'anatoom' then 5 when 'neuro' then 5
      when 'farma' then 5 when 'micro' then 4 when 'jurist' then 4 when 'opic' then 5
      when 'scherp' then 4 when 'wittejas' then 4 when 'streak' then 4 when 'podium' then 4
      when 'nacht' then 5 when 'flatline' then 5 end;
    if v_tiers is null or v_n >= v_tiers then return jsonb_build_object('ok', false, 'reason', 'ref'); end if;
    if v_key = 'carriere'
       and coalesce(v_prof.total_xp, 0) < (array[0, 10000, 20000, 30000, 40000, 50000])[v_n + 1] then
      return jsonb_build_object('ok', false, 'reason', 'notreached');
    end if;
    v_start := 3;   -- altijd legendarisch
    v_day := v_once;

  elsif p_source = 'trophy' then
    if v_ref !~ '^\d{1,2}$' then return jsonb_build_object('ok', false, 'reason', 'ref'); end if;
    v_n := v_ref::int;
    -- KEEP IN SYNC: trofeeenpad.html XP_PER_CLASS (1000) / CLASS_COUNT (60)
    if v_n > 60 or least(floor(coalesce(v_prof.total_xp, 0) / 1000.0)::int, 60) < v_n then
      return jsonb_build_object('ok', false, 'reason', 'notreached');
    end if;
    v_day := v_once;

  else
    return jsonb_build_object('ok', false, 'reason', 'unknown');
  end if;

  insert into public.chest_claims (user_id, source, ref, day)
  values (v_uid, p_source, v_ref, v_day)
  on conflict do nothing;
  if not found then
    return jsonb_build_object('ok', false, 'reason', 'claimed');
  end if;

  v_prize := public._roll_chest(v_start, v_mult);

  update public.user_profiles
     set total_gems  = coalesce(total_gems, 0)  + (v_prize->>'gems')::int,
         total_coins = coalesce(total_coins, 0) + (v_prize->>'coins')::int,
         hearts      = coalesce(hearts, 0)      + (v_prize->>'hearts')::int,
         hearts_updated_at = case when (v_prize->>'hearts')::int > 0 then now() else hearts_updated_at end
   where user_id = v_uid
   returning total_gems, total_coins, hearts into v_g, v_c, v_h;

  update public.chest_claims set prize = v_prize
   where user_id = v_uid and source = p_source and ref = v_ref and day = v_day;

  return v_prize || jsonb_build_object(
    'ok', true, 'source', p_source, 'ref', v_ref,
    'balances', jsonb_build_object('gems', v_g, 'coins', v_c, 'hearts', v_h));
end;
$$;
revoke execute on function public.open_chest(text, text) from public, anon;
grant  execute on function public.open_chest(text, text) to authenticated;


-- Edelstenen per beantwoorde vraag + vragenteller voor de quests.
-- Max 10 vragen per aanroep, gems via de gewone dagplafonds (max 2.000/dag).
create or replace function public.answer_reward(p_correct int, p_other int default 0, p_wrong int default 0)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_c int := greatest(0, least(coalesce(p_correct, 0), 10));
  v_o int := greatest(0, least(coalesce(p_other, 0), 10));
  v_w int := greatest(0, least(coalesce(p_wrong, 0), 10));
  v_q int; v_gems int; v_bal int;
begin
  if v_uid is null then return jsonb_build_object('ok', false, 'reason', 'login'); end if;
  v_q := least(v_c + v_o + v_w, 10);

  insert into public.earn_daily (user_id, day, questions) values (v_uid, current_date, v_q)
  on conflict (user_id, day) do update set questions = public.earn_daily.questions + v_q;

  v_gems := public._earn_allow(v_uid, 'gems', least(2 * v_c + v_o, 20), 20, 2000);
  update public.user_profiles set total_gems = coalesce(total_gems, 0) + v_gems
   where user_id = v_uid
   returning total_gems into v_bal;

  return jsonb_build_object('ok', true, 'gems', v_gems, 'questions', v_q,
                            'balances', jsonb_build_object('gems', v_bal));
end;
$$;
revoke execute on function public.answer_reward(int, int, int) from public, anon;
grant  execute on function public.answer_reward(int, int, int) to authenticated;


-- Bestaande claims overnemen, zodat al geopende prestatie- en trofeeënkisten
-- niet nóg een keer via de server geclaimd kunnen worden.
insert into public.chest_claims (user_id, source, ref, day)
select ep.user_id, 'trophy', n.value, date '2000-01-01'
  from public.exam_progress ep
  cross join lateral jsonb_array_elements_text(
    case when jsonb_typeof(ep.progress->'claimed') = 'array' then ep.progress->'claimed' else '[]'::jsonb end) n(value)
 where ep.exam_key = 'trophy_road_claims' and n.value ~ '^\d{1,2}$'
on conflict do nothing;

insert into public.chest_claims (user_id, source, ref, day)
select ep.user_id, 'achievement', kv.key || ':' || t, date '2000-01-01'
  from public.exam_progress ep
  cross join lateral jsonb_each_text(
    case when jsonb_typeof(ep.progress->'claimed') = 'object' then ep.progress->'claimed' else '{}'::jsonb end) kv
  cross join lateral generate_series(0, least(case when kv.value ~ '^-?\d+$' then kv.value::int else -1 end, 9)) t
 where ep.exam_key = 'achievement_claims'
on conflict do nothing;
