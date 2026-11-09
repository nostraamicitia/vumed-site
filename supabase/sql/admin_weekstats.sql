-- Wekelijkse admin-statistiekenmail (edge function admin-weekstats).
-- Al toegepast op project dxhawldqluihhvfeswlc; hier ter documentatie / herbouw.

create or replace function public.get_admin_weekly_stats()
returns jsonb
language sql
security definer
set search_path = public
as $$
with
bounds as (
  select now() as t_end,
         now() - interval '7 days' as t_start,
         now() - interval '14 days' as p_start
),
act as (
  select user_id, created_at as ts from activity_events
  union all
  select user_id, updated_at from exam_progress
  union all
  select user_id, (last_active_date::timestamp at time zone 'Europe/Amsterdam') + interval '12 hours'
    from user_profiles where last_active_date is not null
),
days as (
  select d::date as day
  from generate_series((now() at time zone 'Europe/Amsterdam')::date - 6,
                       (now() at time zone 'Europe/Amsterdam')::date, interval '1 day') d
),
dau as (
  select dd.day,
    (select count(distinct user_id) from act where (ts at time zone 'Europe/Amsterdam')::date = dd.day) as users,
    (select coalesce(sum(answered_delta),0) from activity_events where (created_at at time zone 'Europe/Amsterdam')::date = dd.day) as answered
  from days dd
),
ev as (
  select e.*, case when e.created_at >= b.t_start then 'cur' when e.created_at >= b.p_start then 'prev' end as per
  from activity_events e, bounds b where e.created_at >= b.p_start
),
top_exams as (
  select exam_key, sum(answered_delta) as answered, count(distinct user_id) as users
  from ev where per='cur' and exam_key is not null group by exam_key order by 2 desc limit 5
),
top_users as (
  select coalesce(p.display_name,'(geen naam)') as name, sum(e.answered_delta) as answered,
         round(100.0*sum(e.correct_delta)/nullif(sum(e.answered_delta),0)) as pct, max(p.login_streak) as streak
  from ev e left join user_profiles p using (user_id)
  where e.per='cur' group by 1 order by 2 desc limit 5
),
yr as (
  select coalesce(p.study_year::text,'?') as year, count(distinct a.user_id) as users
  from act a left join user_profiles p using (user_id), bounds b
  where a.ts >= b.t_start group by 1 order by 1
)
select jsonb_build_object(
  'generated_at', now(),
  'period_start', (select t_start from bounds),
  'total_users', (select count(*) from auth.users),
  'new_users', (select count(*) from auth.users, bounds where created_at >= t_start),
  'new_users_prev', (select count(*) from auth.users, bounds where created_at >= p_start and created_at < t_start),
  'active_users', (select count(distinct user_id) from act, bounds where ts >= t_start),
  'active_users_prev', (select count(distinct user_id) from act, bounds where ts >= p_start and ts < t_start),
  'active_30d', (select count(distinct user_id) from act where ts >= now() - interval '30 days'),
  'answered', (select coalesce(sum(answered_delta),0) from ev where per='cur'),
  'answered_prev', (select coalesce(sum(answered_delta),0) from ev where per='prev'),
  'correct', (select coalesce(sum(correct_delta),0) from ev where per='cur'),
  'correct_prev', (select coalesce(sum(correct_delta),0) from ev where per='prev'),
  'saved_questions', (select count(*) from saved_questions, bounds where created_at >= t_start),
  'question_reports', (select count(*) from question_reports, bounds where created_at >= t_start),
  'open_reports', (select count(*) from question_reports where coalesce(status,'open') not in ('resolved','closed','done','afgehandeld')),
  'new_friendships', (select count(*) from friendships, bounds where created_at >= t_start and status = 'accepted'),
  'push_devices', (select count(distinct user_id) from push_tokens),
  'emails_sent', (select count(*) from email_log, bounds where sent_at >= t_start and dry_run = false),
  'streak_3plus', (select count(*) from user_profiles where login_streak >= 3 and last_active_date >= (now() at time zone 'Europe/Amsterdam')::date - 1),
  'longest_streak', (select coalesce(max(login_streak),0) from user_profiles where last_active_date >= (now() at time zone 'Europe/Amsterdam')::date - 1),
  'daily', (select jsonb_agg(jsonb_build_object('day', day, 'users', users, 'answered', answered) order by day) from dau),
  'top_exams', (select coalesce(jsonb_agg(to_jsonb(t)),'[]') from top_exams t),
  'top_users', (select coalesce(jsonb_agg(to_jsonb(t)),'[]') from top_users t),
  'study_years', (select coalesce(jsonb_agg(to_jsonb(y)),'[]') from yr y)
);
$$;

revoke all on function public.get_admin_weekly_stats() from public, anon, authenticated;
grant execute on function public.get_admin_weekly_stats() to service_role;

-- Elke zondag 19:00 UTC (20:00 NL wintertijd / 21:00 zomertijd)
select cron.schedule('admin-weekstats', '0 19 * * 0', $cmd$
  select net.http_post(
    url := 'https://dxhawldqluihhvfeswlc.supabase.co/functions/v1/admin-weekstats',
    headers := jsonb_build_object('Content-Type','application/json',
      'Authorization','Bearer ' || (select decrypted_secret from vault.decrypted_secrets where name='email_cron_key')),
    body := '{"live":true}'::jsonb,
    timeout_milliseconds := 20000);
$cmd$);
