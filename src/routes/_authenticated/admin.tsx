import { createFileRoute, Link, Outlet, useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useEhAdmin, useSessao } from "@/lib/auth";
import { recursos } from "@/lib/admin-recursos";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Administração — ADEM Manica" },
      { name: "description", content: "Painel de gestão de conteúdos do sítio da ADEM Manica." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminLayout,
});

function AdminLayout() {
  const { utilizador, carregando } = useSessao();
  const { data: ehAdmin, isLoading } = useEhAdmin(utilizador?.id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function sair() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const ligacoes: { to: string; label: string; exact?: boolean; params?: { recurso: string } }[] = [
    { to: "/admin", label: "Painel", exact: true },
    { to: "/admin/utilizadores", label: "Utilizadores" },
    ...Object.values(recursos).map((r) => ({
      to: "/admin/$recurso",
      label: r.titulo,
      params: { recurso: r.tabela },
    })),
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Administração</p>
          <p className="text-sm text-muted-foreground">{utilizador?.email}</p>
        </div>
        <button
          type="button"
          onClick={sair}
          className="inline-flex items-center gap-2 rounded-md border border-input px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
        >
          <LogOut className="h-4 w-4" /> Terminar sessão
        </button>
      </div>

      {(carregando || isLoading) && <p className="py-10 text-sm text-muted-foreground">A verificar permissões…</p>}

      {!carregando && !isLoading && !ehAdmin && (
        <div className="py-10">
          <h1 className="text-xl font-semibold text-foreground">Sem permissões de administrador</h1>
          <p className="mt-2 max-w-prose text-sm text-muted-foreground">
            A sua conta está autenticada mas ainda não tem o perfil de administrador. Peça a um
            administrador da ADEM para lhe atribuir esse perfil na secção Utilizadores.
          </p>
        </div>
      )}

      {ehAdmin && (
        <div className="mt-6 grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
          <nav aria-label="Navegação da administração">
            <ul className="flex flex-wrap gap-1 lg:flex-col">
              {ligacoes.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    {...(l.params ? { params: l.params } : {})}
                    activeOptions={{ exact: Boolean(l.exact) }}
                    activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="min-w-0">
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}
