import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { useVideos } from "@/data/conteudo";

export const Route = createFileRoute("/videos")({
  head: () => ({
    meta: [
      { title: "Vídeos — ADEM Manica" },
      {
        name: "description",
        content:
          "Vídeos institucionais e reportagens das actividades da ADEM: projectos, formações, comunidades e parcerias na província de Manica.",
      },
      { property: "og:title", content: "Vídeos — ADEM Manica" },
      {
        property: "og:description",
        content: "Vídeos e reportagens das actividades e projectos da ADEM em Manica.",
      },
    ],
  }),
  component: Videos,
});

function Videos() {
  const videos = useVideos();
  const destaque = videos[0]!;
  const restantes = videos.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Multimédia"
        titulo="Vídeos"
        descricao="Reportagens, documentários e vídeos institucionais sobre o trabalho da ADEM junto das comunidades de Manica."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <article className="overflow-hidden rounded-xl border border-border bg-card">
          <div className="relative aspect-video w-full bg-black">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${destaque.youtubeId}`}
              title={destaque.titulo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <div className="p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand">
              {destaque.categoria}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-foreground">{destaque.titulo}</h2>
            <time dateTime={destaque.dataISO} className="mt-2 block text-sm text-muted-foreground">
              {destaque.data}
            </time>
            <p className="mt-3 text-sm text-muted-foreground">{destaque.descricao}</p>
          </div>
        </article>

        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {restantes.map((video) => (
            <li key={video.slug} className="flex flex-col overflow-hidden rounded-xl border border-border bg-card">
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-video w-full overflow-hidden bg-muted"
                aria-label={`Ver vídeo: ${video.titulo}`}
              >
                <img
                  src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.titulo}
                  width={480}
                  height={360}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/40">
                  <PlayCircle className="h-12 w-12 text-white/90 drop-shadow" aria-hidden="true" />
                </span>
              </a>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                  {video.categoria}
                </p>
                <h2 className="mt-2 text-base font-bold text-foreground">{video.titulo}</h2>
                <time dateTime={video.dataISO} className="mt-1 text-xs text-muted-foreground">
                  {video.data}
                </time>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{video.descricao}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
