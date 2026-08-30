import { createFileRoute, Link } from "@tanstack/react-router";
import { recursos } from "@/lib/admin-recursos";

export const Route = createFileRoute("/_authenticated/admin/")({
  component: Painel,
});

function Painel() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground">Painel de gestão</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Escolha uma área para adicionar, editar ou remover conteúdos do sítio.
      </p>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        <li>
          <Link
            to="/admin/utilizadores"
            className="block h-full rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
          >
            <h2 className="font-semibold text-foreground">Utilizadores</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Ver contas registadas e atribuir ou retirar o perfil de administrador.
            </p>
          </Link>
        </li>
        {Object.values(recursos).map((r) => (
          <li key={r.tabela}>
            <Link
              to={`/admin/${r.tabela}`}
              className="block h-full rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
            >
              <h2 className="font-semibold text-foreground">{r.titulo}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{r.descricao}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
