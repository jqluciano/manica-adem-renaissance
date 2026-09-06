import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import {
  fasesProjectos,
  projectosFicha,
  totaisEmCurso,
  totaisProjectos,
  type FaseProjecto,
  type ProjectoFicha,
} from "@/data/site";

export const Route = createFileRoute("/projectos")({
  validateSearch: (search: Record<string, unknown>) => ({
    fase:
      typeof search["fase"] === "string" ? (search["fase"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Projectos — ADEM Manica" },
      {
        name: "description",
        content:
          "Projectos implementados, em curso e futuros da Agência de Desenvolvimento Económico da Província de Manica, com financiadores, orçamentos, locais e resultados.",
      },
      { property: "og:title", content: "Projectos — ADEM Manica" },
      {
        property: "og:description",
        content:
          "Uma visão geral dos projectos da ADEM organizados por fase: implementados, em curso e futuros.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projectos,
});

function Projectos() {
  const { fase } = Route.useSearch();
  const activa: FaseProjecto =
    fasesProjectos.find((f) => f.slug === fase)?.slug ?? "implementados";
  const definicao = fasesProjectos.find((f) => f.slug === activa)!;
  const lista = projectosFicha.filter((p) => p.fase === activa);

  return (
    <>
      <PageHero
        eyebrow="Projectos"
        titulo={definicao.label}
        descricao={definicao.descricao}
      />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <nav aria-label="Fases dos projectos" className="flex flex-wrap gap-3">
          {fasesProjectos.map((f) => (
            <Link
              key={f.slug}
              to="/projectos"
              search={{ fase: f.slug }}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                f.slug === activa
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/80 hover:bg-secondary"
              }`}
            >
              {f.label}
            </Link>
          ))}
        </nav>

        {activa === "implementados" && (
          <dl className="mt-10 grid gap-4 rounded-xl border border-border bg-card p-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { rotulo: "Total de projectos", valor: String(totaisProjectos.total) },
              { rotulo: "Orçamento total", valor: totaisProjectos.orcamento },
              { rotulo: "Financiadores", valor: String(totaisProjectos.financiadores) },
              { rotulo: "Modelos de implementação", valor: String(totaisProjectos.modelos) },
            ].map((item) => (
              <div
                key={item.rotulo}
                className="rounded-lg border border-border bg-secondary/40 p-5 text-center"
              >
                <dt className="text-sm text-muted-foreground">{item.rotulo}</dt>
                <dd className="mt-2 text-2xl font-bold text-brand">{item.valor}</dd>
              </div>
            ))}
          </dl>
        )}

        {lista.length === 0 ? (
          <p className="mt-10 rounded-xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
            Ainda não há projectos publicados nesta categoria.
          </p>
        ) : (
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lista.map((p) => (
              <li
                key={p.slug}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <div className="bg-primary p-5 text-primary-foreground">
                  <h2 className="text-base font-semibold leading-snug text-accent">{p.titulo}</h2>
                  <span className="mt-3 inline-block rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium">
                    {p.modelo}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Financiador:</strong> {p.financiador}
                  </p>
                  <p>
                    <strong className="text-foreground">Orçamento:</strong> {p.orcamento}
                  </p>
                  <p>
                    <strong className="text-foreground">Local:</strong> {p.local}
                  </p>
                  <p>
                    <strong className="text-foreground">Resultados:</strong> {p.resultados}
                  </p>
                  <p className="mt-auto border-t border-border pt-3">
                    <strong className="text-foreground">Parceiros:</strong> {p.parceiros}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
