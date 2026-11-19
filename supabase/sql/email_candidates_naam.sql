-- get_email_candidates: naam-fallback verbeterd.
-- Was: display_name, anders het stuk vóór de @ (gaf bv. "j.devries" of studentnummers).
-- Nu:  display_name -> full_name uit auth-metadata (Google/aanmelding) -> name -> stuk vóór de @.
-- De edge function email-sender maakt hier vervolgens een voornaam van ("Hoi Jan").
-- Verder ongewijzigd t.o.v. de live versie van 2026-11-19.

CREATE OR REPLACE FUNCTION public.get_email_candidates(p_type text)
 RETURNS TABLE(user_id uuid, email text, display_name text, login_streak integer, streak_freezes integer, unsub_token uuid, xp_week integer, lb_rank integer, badge_key text, badge_tier integer)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare
  today date := (now() at time zone 'utc')::date;
  cur_week text := to_char(date_trunc('week', now()), 'IYYY-"W"IW');
begin
  if p_type = 'streak_saver' then
    return query
    select p.user_id, u.email::text,
           coalesce(nullif(p.display_name,''), nullif(u.raw_user_meta_data->>'full_name',''), nullif(u.raw_user_meta_data->>'name',''), split_part(u.email,'@',1)),
           p.login_streak, p.streak_freezes, p.email_unsub_token,
           null::int, null::int, null::text, null::int
    from user_profiles p join auth.users u on u.id = p.user_id
    where not p.email_opt_out and u.email is not null
      and coalesce(p.login_streak,0) >= 1
      and p.last_active_date = today - 1
      and not exists (select 1 from email_log l where l.user_id = p.user_id
        and l.email_type = 'streak_saver' and l.day_key = today and not l.dry_run);

  elsif p_type = 'winback' then
    return query
    select p.user_id, u.email::text,
           coalesce(nullif(p.display_name,''), nullif(u.raw_user_meta_data->>'full_name',''), nullif(u.raw_user_meta_data->>'name',''), split_part(u.email,'@',1)),
           p.login_streak, p.streak_freezes, p.email_unsub_token,
           null::int, null::int, null::text, null::int
    from user_profiles p join auth.users u on u.id = p.user_id
    where not p.email_opt_out and u.email is not null
      and p.last_active_date = today - 7
      and not exists (select 1 from email_log l where l.user_id = p.user_id
        and l.email_type = 'winback' and l.day_key = today and not l.dry_run);

  elsif p_type = 'weekrecap' then
    return query
    with ranked as (
      select p2.user_id,
             greatest(0, p2.total_xp - coalesce(p2.week_start_xp, p2.total_xp))::int as xp_w,
             rank() over (order by greatest(0, p2.total_xp - coalesce(p2.week_start_xp, p2.total_xp)) desc)::int as rnk
      from user_profiles p2
      where p2.week_key = cur_week
    )
    select p.user_id, u.email::text,
           coalesce(nullif(p.display_name,''), nullif(u.raw_user_meta_data->>'full_name',''), nullif(u.raw_user_meta_data->>'name',''), split_part(u.email,'@',1)),
           p.login_streak, p.streak_freezes, p.email_unsub_token,
           r.xp_w, r.rnk, null::text, null::int
    from ranked r
    join user_profiles p on p.user_id = r.user_id
    join auth.users u on u.id = p.user_id
    where not p.email_opt_out and u.email is not null
      and r.xp_w > 0
      and not exists (select 1 from email_log l where l.user_id = p.user_id
        and l.email_type = 'weekrecap' and l.day_key = today and not l.dry_run);

  elsif p_type = 'welcome' then
    return query
    select p.user_id, u.email::text,
           coalesce(nullif(p.display_name,''), nullif(u.raw_user_meta_data->>'full_name',''), nullif(u.raw_user_meta_data->>'name',''), split_part(u.email,'@',1)),
           p.login_streak, p.streak_freezes, p.email_unsub_token,
           null::int, null::int, null::text, null::int
    from user_profiles p join auth.users u on u.id = p.user_id
    where not p.email_opt_out and u.email is not null
      and u.created_at > now() - interval '3 days'
      and not exists (select 1 from email_log l where l.user_id = p.user_id
        and l.email_type = 'welcome' and not l.dry_run);

  elsif p_type = 'badge' then
    return query
    with claims as (
      select ep.user_id as uid, c.key as bkey, (c.value)::int as tier
      from exam_progress ep,
           jsonb_each_text(coalesce(ep.progress->'claimed', '{}'::jsonb)) as c(key, value)
      where ep.exam_key = 'achievement_claims'
        and (c.value)::int >= 0
        and c.key <> 'flatline'
    ), fresh as (
      select cl.*, row_number() over (partition by cl.uid order by cl.tier desc, cl.bkey) as rn
      from claims cl
      where not exists (select 1 from email_log l where l.user_id = cl.uid
        and l.email_type = 'badge:' || cl.bkey || ':' || cl.tier and not l.dry_run)
    )
    select p.user_id, u.email::text,
           coalesce(nullif(p.display_name,''), nullif(u.raw_user_meta_data->>'full_name',''), nullif(u.raw_user_meta_data->>'name',''), split_part(u.email,'@',1)),
           p.login_streak, p.streak_freezes, p.email_unsub_token,
           null::int, null::int, f.bkey, f.tier
    from fresh f
    join user_profiles p on p.user_id = f.uid
    join auth.users u on u.id = p.user_id
    where f.rn = 1
      and not p.email_opt_out and u.email is not null
      and not exists (select 1 from email_log l where l.user_id = f.uid
        and l.email_type like 'badge:%' and l.day_key = today and not l.dry_run);

  elsif p_type = 'custom' then
    return query
    select p.user_id, u.email::text,
           coalesce(nullif(p.display_name,''), nullif(u.raw_user_meta_data->>'full_name',''), nullif(u.raw_user_meta_data->>'name',''), split_part(u.email,'@',1)),
           p.login_streak, p.streak_freezes, p.email_unsub_token,
           null::int, null::int, null::text, null::int
    from user_profiles p join auth.users u on u.id = p.user_id
    where not p.email_opt_out and u.email is not null;
  end if;
end;
$function$;
