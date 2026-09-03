import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CartaoExpansivel } from "@/components/site/CartaoExpansivel";
import { useNoticias } from "@/data/conteudo";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — ADEM Manica" },
      {
        name: "description",
        content:
          "Actualidade da ADEM: eventos, formações, parcerias e resultados dos programas de desenvolvimento económico em Manica.",
      },
      { property: "og:title", content: "Notícias — ADEM Manica" },
      {
        property: "og:description",
        content: "Últimas notícias e actividades da Agência de Desenvolvimento Económico de Manica.",
      },
    ],
  }),
  component: Noticias,
});

function Noticias() {
  const noticias = useNoticias();
  const destaque = noticias[0]!;
  const restantes = noticias.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Actualidade"
        titulo="Notícias"
        descricao="Acompanhe as actividades, eventos e resultados da ADEM na província de Manica."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <article className="grid gap-8 overflow-hidden rounded-xl border border-border bg-card md:grid-cols-2">
          <img
            src={destaque.imagem}
            alt={destaque.titulo}
            width={1200}
            height={800}
            loading="lazy"
            className="h-full max-h-80 w-full object-cover"
          />
          <div className="p-6 md:py-8 md:pr-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">
              {destaque.categoria}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground">{destaque.titulo}</h2>
            <time dateTime={destaque.dataISO} className="mt-2 block text-sm text-muted-foreground">
              {destaque.data}
            </time>
            {destaque.corpo.map((paragrafo) => (
              <p key={paragrafo} className="mt-3 text-sm text-muted-foreground">
                {paragrafo}
              </p>
            ))}
          </div>
        </article>

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {restantes.map((noticia) => (
            <li
              key={noticia.slug}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
            >
              <img
                src={noticia.imagem}
                alt={noticia.titulo}
                width={1200}
                height={800}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {noticia.categoria}
                </p>
                <h2 className="mt-2 text-base font-bold text-foreground">{noticia.titulo}</h2>
                <time dateTime={noticia.dataISO} className="mt-1 text-xs text-muted-foreground">
                  {noticia.data}
                </time>
                <p className="mt-3 text-sm text-muted-foreground">{noticia.resumo}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
