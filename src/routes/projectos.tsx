import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { projectos } from "@/data/site";

export const Route = createFileRoute("/projectos")({
  head: () => ({
    meta: [
      { title: "Projectos — ADEM Manica" },
      {
        name: "description",
        content:
          "Projectos da ADEM em agricultura, MPME, mineração artesanal responsável, turismo comunitário e inclusão de mulheres em Manica.",
      },
      { property: "og:title", content: "Projectos — ADEM Manica" },
      {
        property: "og:description",
        content: "Conheça os projectos em curso e concluídos da ADEM na província de Manica.",
      },
    ],
  }),
  component: Projectos,
});

function Projectos() {
  return (
    <>
      <PageHero
        eyebrow="O que fazemos"
        titulo="Projectos"
        descricao="Intervenções concretas no terreno, desenhadas com as comunidades e implementadas em parceria com instituições públicas e privadas."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ul className="grid gap-8 md:grid-cols-2">
          {projectos.map((projecto) => (
            <li
              key={projecto.slug}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
            >
              <img
                src={projecto.imagem}
                alt={projecto.titulo}
                width={1200}
                height={800}
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    projecto.estado === "Em curso"
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {projecto.estado}
                </span>
                <h2 className="mt-3 text-lg font-bold text-foreground">{projecto.titulo}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{projecto.descricao}</p>
                <dl className="mt-5 grid gap-2 border-t border-border pt-4 text-sm">
                  <div className="flex gap-2">
                    <dt className="font-medium text-foreground">Local:</dt>
                    <dd className="text-muted-foreground">{projecto.local}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium text-foreground">Período:</dt>
                    <dd className="text-muted-foreground">{projecto.periodo}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-medium text-foreground">Parceiros:</dt>
                    <dd className="text-muted-foreground">{projecto.parceiros}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
