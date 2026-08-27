create type public.app_role as enum ('admin', 'editor', 'user');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  nome text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update on public.profiles to authenticated;
grant all on public.profiles to service_role;
alter table public.profiles enable row level security;

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
grant select, insert, update, delete on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create policy "profiles_select_own" on public.profiles for select to authenticated
  using (id = auth.uid() or public.has_role(auth.uid(), 'admin'));
create policy "profiles_insert_own" on public.profiles for insert to authenticated
  with check (id = auth.uid());
create policy "profiles_update_own" on public.profiles for update to authenticated
  using (id = auth.uid() or public.has_role(auth.uid(), 'admin'))
  with check (id = auth.uid() or public.has_role(auth.uid(), 'admin'));

create policy "user_roles_select" on public.user_roles for select to authenticated
  using (user_id = auth.uid() or public.has_role(auth.uid(), 'admin'));
create policy "user_roles_admin_write" on public.user_roles for all to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = public as $$
begin new.updated_at = now(); return new; end; $$;

create trigger profiles_updated_at before update on public.profiles
  for each row execute function public.set_updated_at();

create table public.projectos (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  titulo text not null,
  resumo text not null default '',
  descricao text not null default '',
  imagem_url text,
  estado text not null default 'Em curso',
  local text not null default '',
  periodo text not null default '',
  parceiros text not null default '',
  ordem int not null default 0,
  publicado boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.noticias (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  titulo text not null,
  data date not null default current_date,
  categoria text not null default 'Notícia',
  resumo text not null default '',
  corpo text not null default '',
  imagem_url text,
  ordem int not null default 0,
  publicado boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.publicacoes (
  id uuid primary key default gen_random_uuid(),
  titulo text not null,
  tipo text not null default 'Relatório',
  ano text not null default '',
  descricao text not null default '',
  ficheiro_url text,
  ordem int not null default 0,
  publicado boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.videos (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  titulo text not null,
  youtube_id text not null default '',
  descricao text not null default '',
  data date not null default current_date,
  categoria text not null default 'Institucional',
  ordem int not null default 0,
  publicado boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.relatorios (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  titulo text not null,
  ano text not null default '',
  tipo text not null default 'Relatório Anual',
  resumo text not null default '',
  descricao text not null default '',
  estado text not null default 'Disponível',
  ficheiro_url text,
  ordem int not null default 0,
  publicado boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.galeria (
  id uuid primary key default gen_random_uuid(),
  titulo text not null default '',
  imagem_url text not null,
  ordem int not null default 0,
  publicado boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

do $$
declare t text;
begin
  foreach t in array array['projectos','noticias','publicacoes','videos','relatorios','galeria'] loop
    execute format('grant select on public.%I to anon', t);
    execute format('grant select, insert, update, delete on public.%I to authenticated', t);
    execute format('grant all on public.%I to service_role', t);
    execute format('alter table public.%I enable row level security', t);
    execute format('create policy "%1$s_public_read" on public.%1$I for select to anon, authenticated using (publicado = true or public.has_role(auth.uid(), ''admin''))', t);
    execute format('create policy "%1$s_admin_write" on public.%1$I for all to authenticated using (public.has_role(auth.uid(), ''admin'')) with check (public.has_role(auth.uid(), ''admin''))', t);
    execute format('create trigger %1$s_updated_at before update on public.%1$I for each row execute function public.set_updated_at()', t);
  end loop;
end $$;

create policy "media_read" on storage.objects for select to anon, authenticated
  using (bucket_id = 'media');
create policy "media_admin_insert" on storage.objects for insert to authenticated
  with check (bucket_id = 'media' and public.has_role(auth.uid(), 'admin'));
create policy "media_admin_update" on storage.objects for update to authenticated
  using (bucket_id = 'media' and public.has_role(auth.uid(), 'admin'));
create policy "media_admin_delete" on storage.objects for delete to authenticated
  using (bucket_id = 'media' and public.has_role(auth.uid(), 'admin'));