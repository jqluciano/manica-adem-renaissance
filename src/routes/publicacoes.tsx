import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { categoriaDaPublicacao, categoriasPublicacoes, contacto } from "@/data/site";
import { usePublicacoes } from "@/data/conteudo";

export const Route = createFileRoute("/publicacoes")({
  validateSearch: (search: Record<string, unknown>) => ({
    categoria: typeof search.categoria === "string" ? search.categoria : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Publicações — ADEM Manica" },
      {
        name: "description",
        content:
          "Relatórios anuais, planos estratégicos, estudos e manuais publicados pela Agência de Desenvolvimento Económico de Manica.",
      },
      { property: "og:title", content: "Publicações — ADEM Manica" },
      {
        property: "og:description",
        content: "Relatórios, estudos e manuais técnicos produzidos pela ADEM.",
      },
    ],
  }),
  component: Publicacoes,
});

function Publicacoes() {
  const publicacoes = usePublicacoes();
  return (
    <>
      <PageHero
        eyebrow="Conhecimento"
        titulo="Publicações"
        descricao="Relatórios, estudos e manuais produzidos pela ADEM e pelos seus parceiros. Para solicitar uma cópia, contacte-nos."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publicacoes.map((pub) => (
            <li
              key={pub.titulo}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <FileText className="h-8 w-8 text-brand" aria-hidden="true" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {pub.tipo} · {pub.ano}
              </p>
              <h2 className="mt-1 text-base font-bold text-foreground">{pub.titulo}</h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{pub.descricao}</p>
              <a
                href={`mailto:${contacto.email}?subject=${encodeURIComponent(`Pedido de publicação: ${pub.titulo}`)}`}
                className="mt-5 inline-flex w-fit items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Solicitar cópia
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
