import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { galeria } from "@/data/site";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — ADEM Manica" },
      {
        name: "description",
        content:
          "Imagens das actividades da ADEM no terreno: agricultura, formações, mercados, mineração e turismo comunitário em Manica.",
      },
      { property: "og:title", content: "Galeria — ADEM Manica" },
      {
        property: "og:description",
        content: "Registo fotográfico das actividades e projectos da ADEM na província de Manica.",
      },
    ],
  }),
  component: Galeria,
});

function Galeria() {
  return (
    <>
      <PageHero
        eyebrow="Multimédia"
        titulo="Galeria"
        descricao="Momentos das actividades da ADEM junto de produtores, empresas e comunidades da província de Manica."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galeria.map((foto) => (
            <li key={foto.src} className="overflow-hidden rounded-xl border border-border bg-card">
              <img
                src={foto.src}
                alt={foto.alt}
                width={1200}
                height={800}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <p className="p-4 text-sm text-muted-foreground">{foto.alt}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
