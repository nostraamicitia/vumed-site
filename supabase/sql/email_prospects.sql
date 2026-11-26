-- Prospects: (nog) niet-geregistreerde VU-studenten die een (promo)mail moeten krijgen.
-- Data staat buiten de repo (persoonsgegevens): Desktop/vumed_prospects_data.sql. Alleen admins.
create table if not exists public.email_prospects (
  id            uuid primary key default gen_random_uuid(),
  email         text not null unique check (email = lower(trim(email)) and email like '%@%'),
  full_name     text,
  first_name    text,
  instagram     text,
  phone         text,
  source        text not null default 'vumed_emailkandidaten',
  status        text not null default 'pending'
                check (status in ('pending','sent','bounced','opted_out','registered')),
  sent_at       timestamptz,
  unsub_token   uuid not null default gen_random_uuid(),
  notes         text,
  created_at    timestamptz not null default now()
);
alter table public.email_prospects enable row level security;
drop policy if exists "admins manage email prospects" on public.email_prospects;
create policy "admins manage email prospects" on public.email_prospects
  for all to authenticated using (public.is_admin()) with check (public.is_admin());
revoke all on public.email_prospects from anon;
grant select, insert, update, delete on public.email_prospects to authenticated;

-- Admin-overzicht: prospect + of er al een account met dat e-mailadres bestaat.
create or replace function public.admin_email_prospects()
returns table(id uuid, email text, full_name text, first_name text, instagram text, phone text,
              status text, sent_at timestamptz, notes text, has_account boolean, account_created timestamptz)
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  return query
  select p.id, p.email, p.full_name, p.first_name, p.instagram, p.phone, p.status, p.sent_at, p.notes,
         (u.id is not null), u.created_at
  from public.email_prospects p
  left join auth.users u on lower(u.email) = p.email
  order by p.full_name;
end $$;
revoke all on function public.admin_email_prospects() from public, anon;
grant execute on function public.admin_email_prospects() to authenticated;


-- 2026-11-24: loting-inschrijvingen (naam + nummer + groep, vaak zonder e-mail).
alter table public.email_prospects alter column email drop not null;
alter table public.email_prospects add column if not exists lot_group text;
create unique index if not exists email_prospects_phone_key on public.email_prospects (phone) where phone is not null;

drop function if exists public.admin_email_prospects();
create function public.admin_email_prospects()
returns table(id uuid, email text, full_name text, first_name text, instagram text, phone text,
              status text, sent_at timestamptz, notes text, source text, lot_group text,
              has_account boolean, account_created timestamptz)
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  return query
  select p.id, p.email, p.full_name, p.first_name, p.instagram, p.phone, p.status, p.sent_at, p.notes,
         p.source, p.lot_group,
         (u.id is not null), u.created_at
  from public.email_prospects p
  left join auth.users u on p.email is not null and lower(u.email) = p.email
  order by p.full_name nulls last;
end $$;
revoke all on function public.admin_email_prospects() from public, anon;
grant execute on function public.admin_email_prospects() to authenticated;


-- 2026-11-26: iedereen met een account hoort ook in de lijst. De admin-RPC voegt
-- accounthouders die nog ontbreken toe (bron 'account', status 'registered').
create or replace function public.admin_email_prospects()
returns table(id uuid, email text, full_name text, first_name text, instagram text, phone text,
              status text, sent_at timestamptz, notes text, source text, lot_group text,
              has_account boolean, account_created timestamptz)
language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() then raise exception 'not allowed'; end if;
  insert into public.email_prospects (email, full_name, first_name, source, status)
  select lower(trim(u.email)), n.nm, nullif(split_part(n.nm, ' ', 1), ''), 'account', 'registered'
  from auth.users u
  cross join lateral (select nullif(trim(coalesce(u.raw_user_meta_data->>'full_name', u.raw_user_meta_data->>'name',
                                                  u.raw_user_meta_data->>'display_name', '')), '') as nm) n
  where u.email is not null and u.email like '%@%'
  on conflict (email) do nothing;
  return query
  select p.id, p.email, p.full_name, p.first_name, p.instagram, p.phone, p.status, p.sent_at, p.notes,
         p.source, p.lot_group,
         (u.id is not null), u.created_at
  from public.email_prospects p
  left join auth.users u on p.email is not null and lower(u.email) = p.email
  order by p.full_name nulls last;
end $$;
revoke all on function public.admin_email_prospects() from public, anon;
grant execute on function public.admin_email_prospects() to authenticated;
