import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { areas, contacto, images, impacto, noticias, projectos } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADEM — Agência de Desenvolvimento Económico da Província de Manica" },
      {
        name: "description",
        content:
          "A ADEM promove o desenvolvimento económico inclusivo da província de Manica, Moçambique: agricultura, MPME, recursos naturais, turismo e inclusão.",
      },
      { property: "og:title", content: "ADEM — Agência de Desenvolvimento Económico da Província de Manica" },
      {
        property: "og:description",
        content:
          "Agência de Desenvolvimento Económico da Província de Manica: projectos, notícias, publicações e contactos.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <img
          src={images.heroManica}
          alt="Vista aérea dos campos agrícolas e colinas verdes da província de Manica"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Província de Manica · Moçambique
          </p>
          <h1 className="mt-3 max-w-3xl text-7xl font-bold leading-tight tracking-tight sm:text-7xl md:text-7xl">
            Agência de Desenvolvimento económico da Província de Manica ao serviço das comunidades de Manica
          </h1>
          <p className="mt-6 max-w-2xl text-base text-primary-foreground/90 sm:text-lg">
            A ADEM apoia produtores, empresas e comunidades a gerar rendimento, criar emprego e
            construir uma economia local mais justa e sustentável.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/projectos"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Ver projectos <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center rounded-md border border-primary-foreground/40 px-5 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Falar connosco
            </Link>
          </div>
        </div>
      </section>

      <section id="missao" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">A nossa missão</h2>
            <p className="mt-4 text-muted-foreground">
              A missão visa contribuir para o Desenvolvimento Económico Local, sustentável e 
              resiliente no corredor de Desenvolvimento da Beira com particular enfoque para 
              província de Manica através de advocacia e governação económica local, provisão de
              serviços de desenvolvimento de negócio (financeiros e não financeiros) para a melhoria do
              ambiente de negócios e da competitividade das micro, pequenas e médias empresas, 
              com enfoque nas zonas rurais e grupos de pessoas vulneráveis e desfavorecidas.
            </p>
            <Link
              to="/sobre"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline"
            >
              Conhecer a ADEM <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <img
            src={images.projAgricultura}
            alt="Produtores locais durante a colheita de milho"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full rounded-xl object-cover shadow-sm"
          />
        </div>
      </section>

      <section id="impacto" className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">O nosso impacto</h2>
          <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {impacto.map((item) => (
              <div key={item.rotulo}>
                <dt className="sr-only">{item.rotulo}</dt>
                <dd>
                  <span className="block text-3xl font-bold text-accent sm:text-4xl">
                    {item.valor}
                  </span>
                  <span className="mt-2 block text-sm text-primary-foreground/85">
                    {item.rotulo}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="areas" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Áreas estratégicas</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Actuamos em seis áreas que se reforçam mutuamente e respondem às prioridades económicas da
          província.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <li
              key={area.titulo}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <span className="block h-1 w-10 rounded-full bg-accent" aria-hidden="true" />
              <h3 className="mt-4 font-semibold text-foreground">{area.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{area.texto}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="projectos" className="bg-secondary/60 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Projectos em destaque</h2>
            <Link
              to="/projectos"
              className="text-sm font-semibold text-brand hover:underline"
            >
              Ver todos os projectos
            </Link>
          </div>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {projectos.slice(0, 3).map((projecto) => (
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
                  className="h-48 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-semibold text-foreground">{projecto.titulo}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{projecto.resumo}</p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-brand">
                    {projecto.local}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="noticias" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Últimas notícias</h2>
          <Link to="/noticias" className="text-sm font-semibold text-brand hover:underline">
            Ver todas as notícias
          </Link>
        </div>
        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {noticias.slice(0, 3).map((noticia) => (
            <li key={noticia.slug} className="flex flex-col">
              <img
                src={noticia.imagem}
                alt={noticia.titulo}
                width={1200}
                height={800}
                loading="lazy"
                className="h-44 w-full rounded-xl object-cover"
              />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand">
                {noticia.categoria}
              </p>
              <h3 className="mt-1 font-semibold text-foreground">{noticia.titulo}</h3>
              <time dateTime={noticia.dataISO} className="mt-1 text-xs text-muted-foreground">
                {noticia.data}
              </time>
              <p className="mt-2 text-sm text-muted-foreground">{noticia.resumo}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="contacto" className="bg-secondary/60 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Entre em contacto</h2>
            <p className="mt-3 text-muted-foreground">
              Quer apoiar, colaborar ou saber mais sobre os nossos programas? A nossa equipa em
              Chimoio está disponível.
            </p>
            <Link
              to="/contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Página de contacto <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="space-y-4 rounded-xl border border-border bg-card p-6">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">{contacto.morada}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <a
                href={`tel:${contacto.telefone.replace(/\s/g, "")}`}
                className="text-sm text-muted-foreground hover:text-brand"
              >
                {contacto.telefone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <a
                href={`mailto:${contacto.email}`}
                className="text-sm text-muted-foreground hover:text-brand"
              >
                {contacto.email}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
