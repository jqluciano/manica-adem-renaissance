import { createFileRoute } from "@tanstack/react-router";
import { CardCarousel } from "@/components/site/CardCarousel";
import { PageHero } from "@/components/site/PageHero";
import { areas, images, impacto } from "@/data/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre nós — ADEM Manica" },
      {
        name: "description",
        content:
          "Conheça a ADEM: missão, visão, valores e história da Agência de Desenvolvimento Económico da Província de Manica, em Moçambique.",
      },
      { property: "og:title", content: "Sobre nós — ADEM Manica" },
      {
        property: "og:description",
        content: "Missão, visão, valores e áreas de actuação da ADEM na província de Manica.",
      },
    ],
  }),
  component: Sobre,
});

const valores = [
  { titulo: "Proximidade", texto: "Trabalhamos no terreno, com as comunidades e para elas." },
  { titulo: "Transparência", texto: "Prestamos contas dos recursos e dos resultados alcançados." },
  { titulo: "Inclusão", texto: "Damos prioridade a mulheres, jovens e zonas rurais mais remotas." },
  { titulo: "Sustentabilidade", texto: "Soluções que perduram para além da duração dos projectos." },
];

const objectivosEspecificos = [
  "Promover o melhoramento do ambiente de negócio a nível micro através da inserção da estratégia de DEL – Desenvolvimento Económico Local na planificação distrital.",
  "Promover e expandir serviços e produtos financeiros inclusivos, sustentáveis e acessíveis para micro, pequenas e médias empresas engajadas em cadeias produtivas.",
  "Fortalecer e expandir o desenvolvimento de agro-negócios na lógica de cadeia de valor capaz de dinamizar a economia, a segurança alimentar e criar empregos decentes.",
  "Fortalecer práticas sustentáveis de adaptação climática para reduzir a exposição e vulnerabilidade dos projectos de desenvolvimento das comunidades.",
  "Aumentar a competitividade e sustentabilidade da agência.",
];

function Sobre() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        titulo="Sobre a ADEM"
        descricao="A Agência de Desenvolvimento Económico da Província de Manica é uma instituição sem fins lucrativos dedicada à promoção do desenvolvimento económico local e Sustentável na província de Manica, Moçambique."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:grid-cols-2 md:gap-10 md:p-2">
          <img
            src={images.galParceria}
            alt="Representantes institucionais assinam um acordo de parceria"
            width={1200}
            height={800}
            loading="lazy"
            className="h-full w-full rounded-xl object-cover"
          />
          <div className="px-6 pb-6 md:py-8 md:pl-0 md:pr-8">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Quem somos
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              A nossa história
            </h2>
            <p className="mt-4 text-muted-foreground">
              A ADEM, foi constituída legal e juridicamente em novembro de 2000 como
              uma associação nacional de direito privado, com personalidade jurídica própria,
              sem fins lucrativos, autonomia administrativa, financeira, patrimonial. 
              A publicação oficial no Boletim da Republica foi feita no dia 04 de 
              Abril de 2001 III Série Numero 14 pagina 417. Actualmente a ADEM possui 22 membros dos
              quais instituições públicas e privadas. A estrutura da ADEM é composta por uma Assembleia Geral,
              um Conselho de Direcção, um Conselho Fiscal e uma direcção executiva composta por técnicos e 
              pessoal administrativo com diferentes áreas de saber. A ADEM é uma instituição facilitadora e
              de prestação de serviços de desenvolvimento.
            </p>
            <p className="mt-4 text-muted-foreground">
              ADEM é um mecanismo que viabiliza o combate à pobreza e a exclusão social na medida em que põem à 
              disposição dos grupos vulneráveis tradicionalmente excluídos dos processos de desenvolvimento, 
              os instrumentos técnicos e organizativos para, progressivamente, transformarem-se em sujeitos activos 
              do próprio desenvolvimento. Mediante os serviços prestados a ADEM proporciona aos grupos alvo, 
              (apoio à organização, capacitação, assistência técnica, estudos de viabilidade dos projectos, apoio ao
              financiamento dos projectos, apoio à comercialização, melhoria do ambiente de negócios) estes constroem 
              as próprias capacidades de competitividade no território e no mercado, numa lógica de cadeia de valor e 
              de inclusão nos processos de desenvolvimento.
            </p>
            <p className="mt-4 text-muted-foreground">
              Criada para responder aos desafios económicos das comunidades de Manica, a ADEM
              começou por apoiar pequenos produtores agrícolas e associações rurais. Ao longo dos
              anos, alargou a sua actuação ao desenvolvimento empresarial, aos recursos naturais, ao
              turismo e à inclusão de mulheres e jovens na economia local.
            </p>
            <p className="mt-4 text-muted-foreground">
              Hoje a agência actua em três Províncias do País (Manica, Sofala e Tete), na Província de Manica a ADEM actua todos distritos, em parceria com o Governo Provincial,
              autoridades distritais, organizações comunitárias, sector privado e parceiros
              internacionais.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Missão, visão e objectivos
          </h2>
          <div className="mt-8">
            <CardCarousel
              ariaLabel="Missão, visão e objectivos da ADEM"
              items={[
                {
                  titulo: "Missão",
                  conteudo: (
                    <p>
                      A missão visa contribuir para o Desenvolvimento Económico Local, sustentável
                      e resiliente no corredor de Desenvolvimento da Beira com particular enfoque
                      para província de Manica através de advocacia e governação económica local,
                      provisão de serviços de desenvolvimento de negócio (financeiros e não
                      financeiros) para a melhoria do ambiente de negócios e da competitividade das
                      micro, pequenas e médias empresas, com enfoque nas zonas rurais e grupos de
                      pessoas vulneráveis e desfavorecidas.
                    </p>
                  ),
                },
                {
                  titulo: "Visão",
                  conteudo: (
                    <p>
                      Ser uma instituição acreditada ao nível nacional na provisão de serviços de
                      qualidade para o desenvolvimento económico local.
                    </p>
                  ),
                },
                {
                  titulo: "Objectivo Geral",
                  conteudo: (
                    <p>
                      Desenvolver e consolidar intervenções inovadoras e modelos de desenvolvimento
                      que promovam o aumento da produção e produtividade e fortaleçam a economia
                      local através de um tecido produtivo e empresarial sólido, competitivo e que
                      preserve os ecossistemas das paisagens ao nível local.
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Objectivos específicos</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {objectivosEspecificos.map((objectivo, i) => (
            <li key={objectivo} className="rounded-xl border border-border bg-card p-6">
              <span className="text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-2 text-sm text-muted-foreground">{objectivo}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Os nossos valores</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((valor) => (
            <li key={valor.titulo} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">{valor.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{valor.texto}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-primary py-14 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {impacto.map((item) => (
            <div key={item.rotulo}>
              <p className="text-3xl font-bold text-accent sm:text-4xl">{item.valor}</p>
              <p className="mt-2 text-sm text-primary-foreground/85">{item.rotulo}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Áreas estratégicas</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <li key={area.titulo} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">{area.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{area.texto}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
