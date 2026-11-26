-- Voortgang van de anatomie-flashcards (flashcards.html).
-- Eén rij per gebruiker per deck; `progress` = { cardId: { b: bak 0-5, d: due ms, t: gewijzigd ms } }.
-- Bewust een aparte tabel: exam_progress wordt door stats, kisten en admin-rapportages gelezen.

create table if not exists public.flashcard_progress (
  user_id    uuid        not null references auth.users(id) on delete cascade,
  deck       text        not null check (deck ~ '^[a-z0-9_]{1,60}$'),
  progress   jsonb       not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, deck),
  constraint flashcard_progress_size check (pg_column_size(progress) < 262144)
);

alter table public.flashcard_progress enable row level security;

drop policy if exists "flashcard_progress select own" on public.flashcard_progress;
create policy "flashcard_progress select own" on public.flashcard_progress
  for select to authenticated using (auth.uid() = user_id);

drop policy if exists "flashcard_progress insert own" on public.flashcard_progress;
create policy "flashcard_progress insert own" on public.flashcard_progress
  for insert to authenticated with check (auth.uid() = user_id);

drop policy if exists "flashcard_progress update own" on public.flashcard_progress;
create policy "flashcard_progress update own" on public.flashcard_progress
  for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "flashcard_progress delete own" on public.flashcard_progress;
create policy "flashcard_progress delete own" on public.flashcard_progress
  for delete to authenticated using (auth.uid() = user_id);

grant select, insert, update, delete on public.flashcard_progress to authenticated;
