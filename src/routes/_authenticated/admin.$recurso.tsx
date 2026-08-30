import { createFileRoute, notFound } from "@tanstack/react-router";
import { RecursoCRUD } from "@/components/admin/RecursoCRUD";
import { recursos, type Recurso } from "@/lib/admin-recursos";

export const Route = createFileRoute("/_authenticated/admin/$recurso")({
  component: PaginaRecurso,
  notFoundComponent: () => (
    <p className="py-10 text-sm text-muted-foreground">Área de conteúdo não encontrada.</p>
  ),
});

function PaginaRecurso() {
  const { recurso } = Route.useParams();
  const definicao = recursos[recurso as Recurso["tabela"]];
  if (!definicao) throw notFound();
  return <RecursoCRUD recurso={definicao} />;
}
