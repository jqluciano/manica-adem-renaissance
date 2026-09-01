import { createFileRoute } from "@tanstack/react-router";
import { FileText, Download } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { contacto } from "@/data/site";
import { useRelatorios } from "@/data/conteudo";

export const Route = createFileRoute("/relatorios")({
  head: () => ({
    meta: [
      { title: "Relatórios — ADEM Manica" },
      {
        name: "description",
        content:
          "Relatórios anuais de actividades, planos estratégicos e relatórios de auditoria da Agência de Desenvolvimento Económico de Manica.",
      },
      { property: "og:title", content: "Relatórios — ADEM Manica" },
      {
        property: "og:description",
        content: "Relatórios anuais, planos estratégicos e auditorias da ADEM.",
      },
    ],
  }),
  component: Relatorios,
});

function Relatorios() {
  const relatorios = useRelatorios();
  const disponiveis = relatorios.filter((r) => r.estado === "Disponível");
  const emBreve = relatorios.filter((r) => r.estado === "Em breve");

  return (
    <>
      <PageHero
        eyebrow="Transparência"
        titulo="Relatórios"
        descricao="Relatórios anuais de actividades, planos estratégicos e auditorias externas da ADEM. Para solicitar um documento, contacte-nos."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {disponiveis.map((relatorio) => (
            <li
              key={relatorio.slug}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <FileText className="h-8 w-8 text-brand" aria-hidden="true" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {relatorio.tipo} · {relatorio.ano}
              </p>
              <h2 className="mt-1 text-base font-bold text-foreground">{relatorio.titulo}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{relatorio.resumo}</p>
              <a
                href={`mailto:${contacto.email}?subject=${encodeURIComponent(`Pedido de relatório: ${relatorio.titulo}`)}`}
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Solicitar relatório
              </a>
            </li>
          ))}
        </ul>

        {emBreve.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-bold text-foreground">Próximas publicações</h2>
            <ul className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {emBreve.map((relatorio) => (
                <li
                  key={relatorio.slug}
                  className="flex flex-col rounded-xl border border-dashed border-border bg-secondary/40 p-6"
                >
                  <FileText className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {relatorio.tipo} · {relatorio.ano}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-foreground">{relatorio.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{relatorio.resumo}</p>
                  <span className="mt-4 inline-flex w-fit items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Em breve
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}
