-- Marketing-contentplanner voor admin.html (sectie "Marketing").
-- Alleen admins (public.is_admin()) mogen lezen/schrijven.
create table if not exists public.marketing_content (
  id           uuid primary key default gen_random_uuid(),
  title        text not null check (length(trim(title)) > 0),
  channel      text not null default 'instagram',
  format       text,
  status       text not null default 'idee'
               check (status in ('idee','in_productie','ingepland','gepost')),
  publish_date date,
  link         text,
  notes        text,
  created_by   uuid default auth.uid() references auth.users(id) on delete set null,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index if not exists marketing_content_date_idx on public.marketing_content (publish_date);

alter table public.marketing_content enable row level security;

drop policy if exists "admins manage marketing content" on public.marketing_content;
create policy "admins manage marketing content" on public.marketing_content
  for all to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create or replace function public.marketing_content_touch()
returns trigger language plpgsql set search_path = public as $$
begin new.updated_at := now(); return new; end $$;

drop trigger if exists marketing_content_touch on public.marketing_content;
create trigger marketing_content_touch before update on public.marketing_content
  for each row execute function public.marketing_content_touch();

revoke all on public.marketing_content from anon;
grant select, insert, update, delete on public.marketing_content to authenticated;
