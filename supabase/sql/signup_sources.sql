-- Campagnemeting: bron van aanmelding (?src=… in de link). Toegepast 2026-11-16.
create table if not exists public.signup_sources (
  user_id uuid primary key references auth.users(id) on delete cascade,
  src text not null,
  first_seen_at timestamptz,
  created_at timestamptz not null default now()
);
alter table public.signup_sources enable row level security;

create or replace function public.set_signup_source(p_src text, p_seen_at timestamptz default null)
returns void language plpgsql security definer set search_path = public as $$
declare v_uid uuid := auth.uid(); v_created timestamptz;
begin
  if v_uid is null then return; end if;
  p_src := lower(trim(coalesce(p_src, '')));
  if p_src !~ '^[a-z0-9_-]{1,40}$' then return; end if;
  select created_at into v_created from auth.users where id = v_uid;
  if v_created is null or v_created < now() - interval '3 days' then return; end if;
  insert into public.signup_sources(user_id, src, first_seen_at) values (v_uid, p_src, p_seen_at)
  on conflict (user_id) do nothing;
end; $$;
revoke all on function public.set_signup_source(text, timestamptz) from public, anon;
grant execute on function public.set_signup_source(text, timestamptz) to authenticated;

-- Rapport: aanmeldingen per bron
-- select src, count(*) from public.signup_sources group by src order by 2 desc;
