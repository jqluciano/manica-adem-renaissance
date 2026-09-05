import { imagensReais, imagensReaisHero } from "@/data/imagens-reais";
import heroManica from "@/assets/hero-manica.jpg";
import projAgricultura from "@/assets/proj-agricultura.jpg";
import projFormacao from "@/assets/proj-formacao.jpg";
import projMineracao from "@/assets/proj-mineracao.jpg";
import galMercado from "@/assets/gal-mercado.jpg";
import galTurismo from "@/assets/gal-turismo.jpg";
import galParceria from "@/assets/gal-parceria.jpg";
import galMpme from "@/assets/gal-mpme.jpg";

export const images = {
  heroManica,
  projAgricultura,
  projFormacao,
  projMineracao,
  galMercado,
  galTurismo,
  galParceria,
  galMpme,
};

const heroSlidesBase = [
  {
    src: heroManica,
    alt: "Vista aérea dos campos agrícolas e colinas da província de Manica",
  },
  {
    src: projAgricultura,
    alt: "Produtores agrícolas da província de Manica",
  },
  {
    src: projFormacao,
    alt: "Formação de empreendedores na província de Manica",
  },
  {
    src: projMineracao,
    alt: "Actividades de mineração artesanal em Manica",
  },
  {
    src: galTurismo,
    alt: "Paisagem turística da região de Manica",
  },
];

export const contacto = {
  organizacao: "ADEM — Agência de Desenvolvimento Económico da Província de Manica",
  morada: "Rua 16 de Junho, nr 217, Chimoio, Manica, Moçambique Província de Manica, Moçambique",
  telefone: "+258 251 22414",
  telemovel: "+258 83 5140347",
  whatsapp: "+258 83 5140347",
  whatsappUrl: "https://wa.me/258835140347",
  email: "ademmanica@ademmanica.org",
  horario: "Segunda a Quinta, 07:30 — 15:30 · Sexta, 07:30 — 13:00",
  redes: [
    { nome: "Facebook", url: "https://www.instagram.com/ademmanica" },
    { nome: "LinkedIn", url: "https://www.linkedin.com/in/adem-manica/" },
    { nome: "YouTube", url: "https://www.youtube.com/@ademmanica73" },
  ],
};

export const navegacao = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/noticias", label: "Notícias" },
  { to: "/publicacoes", label: "Publicações" },
  { to: "/videos", label: "Vídeos" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contacto", label: "Contacto" },
] as const;

export type Video = {
  slug: string;
  titulo: string;
  youtubeId: string;
  descricao: string;
  data: string;
  dataISO: string;
  categoria: string;
};

export const videos: Video[] = [
  {
    slug: "adem-institucional",
    titulo: "ADEM — Agência de Desenvolvimento Económico de Manica",
    youtubeId: "dQw4w9WgXcQ",
    descricao:
      "Vídeo institucional que apresenta a missão, as áreas de actuação e o impacto da ADEM junto das comunidades da província de Manica.",
    data: "15 de Junho de 2026",
    dataISO: "2026-06-15",
    categoria: "Institucional",
  },
  {
    slug: "cadeias-de-valor-agricolas",
    titulo: "Cadeias de valor agrícolas em Manica",
    youtubeId: "dQw4w9WgXcQ",
    descricao:
      "Reportagem sobre o trabalho da ADEM com associações de produtores de milho e hortícolas, da produção à comercialização.",
    data: "2 de Maio de 2026",
    dataISO: "2026-05-02",
    categoria: "Projectos",
  },
  {
    slug: "formacao-mpme",
    titulo: "Formação de pequenas empresas em Gondola",
    youtubeId: "dQw4w9WgXcQ",
    descricao:
      "Acompanhamento de um ciclo de formação em gestão e acesso a crédito para micro, pequenas e médias empresas.",
    data: "20 de Março de 2026",
    dataISO: "2026-03-20",
    categoria: "Formação",
  },
  {
    slug: "mineracao-responsavel",
    titulo: "Mineração artesanal responsável",
    youtubeId: "dQw4w9WgXcQ",
    descricao:
      "Documentário curto sobre a organização de garimpeiros em associações e a introdução de técnicas sem mercúrio.",
    data: "11 de Fevereiro de 2026",
    dataISO: "2026-02-11",
    categoria: "Recursos naturais",
  },
  {
    slug: "grupos-de-poupanca",
    titulo: "Grupos de poupança comunitária",
    youtubeId: "dQw4w9WgXcQ",
    descricao:
      "Testemunhos de mulheres que integram grupos de poupança e crédito rotativo apoiados pela ADEM.",
    data: "8 de Janeiro de 2026",
    dataISO: "2026-01-08",
    categoria: "Comunidade",
  },
  {
    slug: "turismo-comunitario",
    titulo: "Turismo comunitário em Chimanimani",
    youtubeId: "dQw4w9WgXcQ",
    descricao:
      "Circuitos turísticos e artesanato local promovidos pela ADEM na região de Chimanimani.",
    data: "5 de Dezembro de 2025",
    dataISO: "2025-12-05",
    categoria: "Turismo",
  },
];

export type Relatorio = {
  slug: string;
  titulo: string;
  ano: string;
  tipo: "Relatório Anual" | "Relatório de Actividades" | "Plano Estratégico" | "Auditoria";
  resumo: string;
  descricao: string;
  estado: "Disponível" | "Em breve";
  paginaDestaque?: string;
};

export const relatorios: Relatorio[] = [
  {
    slug: "relatorio-anual-2025",
    titulo: "Relatório Anual de Actividades 2025",
    ano: "2025",
    tipo: "Relatório Anual",
    resumo:
      "Balanço das actividades, resultados alcançados e demonstrações financeiras da ADEM no exercício de 2025.",
    descricao:
      "O Relatório Anual de Actividades 2025 apresenta os principais resultados da ADEM nas suas áreas de intervenção, incluindo indicadores de impacto, parcerias estabelecidas,execução financeira e perspectivas para o exercício seguinte.",
    estado: "Disponível",
  },
  {
    slug: "relatorio-anual-2024",
    titulo: "Relatório Anual de Actividades 2024",
    ano: "2024",
    tipo: "Relatório Anual",
    resumo:
      "Síntese das actividades e resultados da ADEM em 2024, com enfoque em cadeias de valor e MPME.",
    descricao:
      "Documento de prestação de contas que detalha os projectos implementados, o número de beneficiários, a execução orçamental e as recomendações dos parceiros institucionais.",
    estado: "Disponível",
  },
  {
    slug: "plano-estrategico-2024-2028",
    titulo: "Plano Estratégico 2024—2028",
    ano: "2024",
    tipo: "Plano Estratégico",
    resumo:
      "Prioridades, objectivos e indicadores da agência para o ciclo estratégico de cinco anos.",
    descricao:
      "O Plano Estratégico define a visão e missão da ADEM, as áreas prioritárias, os objectivos estratégicos e os indicadores de desempenho para o período 2024—2028.",
    estado: "Disponível",
  },
  {
    slug: "auditoria-2024",
    titulo: "Relatório de Auditoria Externa 2024",
    ano: "2024",
    tipo: "Auditoria",
    resumo:
      "Parecer da auditoria externa sobre as demonstrações financeiras da ADEM referentes a 2024.",
    descricao:
      "Relatório de auditoria independente que certifica a fiabilidade das demonstrações financeiras e a conformidade dos procedimentos administrativos da agência.",
    estado: "Disponível",
  },
  {
    slug: "relatorio-anual-2023",
    titulo: "Relatório Anual de Actividades 2023",
    ano: "2023",
    tipo: "Relatório Anual",
    resumo:
      "Balanço das actividades e resultados da ADEM em 2023, com destaque para turismo e mercados rurais.",
    descricao:
      "Apresenta a execução dos projectos concluídos e em curso, os indicadores de impacto e os desafios encontrados no terreno durante o exercício de 2023.",
    estado: "Disponível",
  },
  {
    slug: "relatorio-anual-2026",
    titulo: "Relatório Anual de Actividades 2026",
    ano: "2026",
    tipo: "Relatório Anual",
    resumo: "Balanço das actividades e resultados da ADEM no exercício de 2026.",
    descricao:
      "O relatório anual de 2026 estará disponível após o encerramento do exercício, prevendo-se a publicação no primeiro trimestre de 2027.",
    estado: "Em breve",
  },
];

export const impacto = [
  { valor: "25+", rotulo: "Anos ao serviço de Manica" },
  { valor: "12 000+", rotulo: "Produtores e empreendedores apoiados" },
  { valor: "3", rotulo: "Províncias abrangidas (Sofala, Tete e Manica) — em Manica, todos os distritos" },
  { valor: "12+", rotulo: "Projectos implementados com parceiros" },
];

export const areas = [
  {
    titulo: "Promoção e Desenvolvimento Empresarial",
    texto:
      "Agro-negócio, acesso a mercados, incubação de empresas e empoderamento económico de mulheres e jovens.",
    detalhes: [
      "Agro-negócio",
      "Acesso a mercados competitivos e estruturados",
      "Incubação de empresas",
      "Empoderamento económico de mulheres e jovens",
      "Desenvolvimento de capacidades e habilidades de liderança",
      "Desenvolvimento comunitário e modelos de desenvolvimento",
      "Infraestruturas rurais",
      "Plataformas digitais de agro-negócio — Kussaca e Kugulissa",
    ],
  },
  {
    titulo: "Finanças Rurais",
    texto:
      "Alfabetização financeira, grupos de poupança e crédito rotativo e expansão de serviços financeiros nas zonas rurais.",
    detalhes: [
      "Alfabetização financeira",
      "Promoção e consolidação (inovação permanente) de grupos de poupança e crédito rotativo (ASCAS/PER) para desenvolvimento de cadeias de valor",
      "Expansão de serviços financeiros às zonas rurais",
      "Intermediação financeira",
      "Gestão de fundos de crédito e garantia",
    ],
  },
  {
    titulo: "Desenvolvimento Institucional",
    texto:
      "Capacitação do pessoal, controlo interno, negócios sociais e gestão do conhecimento.",
    detalhes: [
      "Capacitação do pessoal",
      "Aprimoramento de sistemas de controlo interno através de auditorias e avaliações",
      "Desenvolvimento e implementação de negócios sociais",
      "Documentação e partilha de boas práticas e lições aprendidas (gestão de conhecimento)",
    ],
  },
  {
    titulo: "Cadeias de Valor",
    texto:
      "A ADEM implementa as suas actividades nas seguintes cadeias de valor.",
    detalhes: [
      "Planificação estratégica, descentralização e governação económica",
      "Empreendedorismo económico e social",
      "Micro-finanças",
      "Agro-negócio",
      "Digitalização do agro-negócio",
      "Associativismo e cooperativismo",
      "Água e saneamento",
    ],
  },
  {
    titulo: "Governação e Descentralização Económica baseada na estratégia do DEL",
    texto:
      "Identificação de potencialidades locais, carteiras de projectos de DEL e diálogo entre actores do território.",
    detalhes: [
      "Identificação de potencialidades e vectores de desenvolvimento económico local",
      "Elaboração de carteira de projectos de DEL",
      "Fóruns de diálogo e concertação locais",
      "Conferências distritais de desenvolvimento",
      "Apoio na elaboração e monitoria dos planos estratégicos de desenvolvimento",
      "Marketing territorial",
    ],
  },
  {
    titulo: "Resiliência e Adaptação Climática para cadeias de valor",
    texto:
      "Gestão de riscos de desastres, planos de adaptação climática e gestão comunitária de recursos naturais.",
    detalhes: [
      "Mapas de riscos de desastres naturais e vulnerabilidade das cadeias de valor",
      "Melhoria da gestão do conhecimento dos actores da cadeia de valor",
      "Planos de adaptação climática para desenvolvimento de cadeias de valor",
      "Comités locais de gestão de recursos naturais",
    ],
  },
];


export type Projecto = {
  slug: string;
  titulo: string;
  resumo: string;
  descricao: string;
  imagem: string;
  estado: "Em curso" | "Concluído";
  local: string;
  periodo: string;
  parceiros: string;
};

export const projectos: Projecto[] = [
  {
    slug: "cadeias-de-valor-agricolas",
    titulo: "Cadeias de valor agrícolas em Manica",
    resumo:
      "Aumento da produtividade e da ligação ao mercado de pequenos produtores de milho e hortícolas.",
    descricao:
      "O projecto trabalha com associações de produtores nos distritos de Báruè, Sussundenga e Manica, combinando assistência técnica no campo, acesso a sementes melhoradas e contratos de compra com agro-processadores locais.",
    imagem: projAgricultura,
    estado: "Em curso",
    local: "Báruè, Sussundenga e Manica",
    periodo: "2023 — 2026",
    parceiros: "Governo Provincial de Manica, cooperativas locais",
  },
  {
    slug: "capacitacao-mpme",
    titulo: "Capacitação e formalização de MPME",
    resumo:
      "Formação em gestão, contabilidade simplificada e acesso a crédito para pequenos negócios urbanos e rurais.",
    descricao:
      "Ciclos de formação em Chimoio, Gondola e Manica, seguidos de acompanhamento individual às empresas durante seis meses e ligação a instituições de microfinanças.",
    imagem: projFormacao,
    estado: "Em curso",
    local: "Chimoio, Gondola e Manica",
    periodo: "2024 — 2027",
    parceiros: "Instituições de microfinanças, associações empresariais",
  },
  {
    slug: "mineracao-artesanal-responsavel",
    titulo: "Mineração artesanal responsável",
    resumo:
      "Organização de garimpeiros em associações legalizadas e redução do uso de mercúrio.",
    descricao:
      "Apoio à legalização de associações mineiras, formação em segurança no trabalho, introdução de técnicas de processamento sem mercúrio e diálogo entre comunidades, empresas e autoridades.",
    imagem: projMineracao,
    estado: "Em curso",
    local: "Manica e Sussundenga",
    periodo: "2022 — 2026",
    parceiros: "Direcção Provincial dos Recursos Minerais e Energia",
  },
  {
    slug: "mulheres-empreendedoras",
    titulo: "Mulheres empreendedoras de Manica",
    resumo:
      "Grupos de poupança e crédito rotativo e apoio a negócios liderados por mulheres.",
    descricao:
      "Criação e acompanhamento de grupos de poupança comunitária, formação em literacia financeira e apoio ao arranque de pequenos negócios de transformação alimentar e artesanato.",
    imagem: galMpme,
    estado: "Em curso",
    local: "Toda a província",
    periodo: "2021 — 2025",
    parceiros: "Organizações comunitárias de base",
  },
  {
    slug: "turismo-comunitario",
    titulo: "Turismo comunitário e artesanato",
    resumo:
      "Valorização do potencial turístico da região de Chimanimani e do artesanato local.",
    descricao:
      "Formação de guias comunitários, apoio à criação de circuitos turísticos e promoção de produtos artesanais em feiras nacionais.",
    imagem: galTurismo,
    estado: "Concluído",
    local: "Sussundenga e Chimanimani",
    periodo: "2019 — 2023",
    parceiros: "Autoridades distritais, operadores turísticos",
  },
  {
    slug: "mercados-rurais",
    titulo: "Reabilitação de mercados rurais",
    resumo: "Infra-estruturas de mercado mais seguras e higiénicas para comerciantes locais.",
    descricao:
      "Reabilitação de bancas, sistemas de água e saneamento em mercados rurais, com comités de gestão eleitos pelos próprios comerciantes.",
    imagem: galMercado,
    estado: "Concluído",
    local: "Gondola e Macate",
    periodo: "2018 — 2022",
    parceiros: "Governos distritais",
  },
];

export type Noticia = {
  slug: string;
  titulo: string;
  data: string;
  dataISO: string;
  categoria: string;
  resumo: string;
  corpo: string[];
  imagem: string;
};

export const noticias: Noticia[] = [
  {
    slug: "feira-agricola-chimoio",
    titulo: "ADEM participa na Feira Agrícola de Chimoio",
    data: "12 de Julho de 2026",
    dataISO: "2026-07-12",
    categoria: "Eventos",
    resumo:
      "Mais de 60 produtores apoiados pela ADEM apresentaram os seus produtos na maior feira agrícola da província.",
    corpo: [
      "A ADEM marcou presença na Feira Agrícola de Chimoio com um pavilhão dedicado às associações de produtores apoiadas pela agência.",
      "Durante três dias, produtores de milho, hortícolas e sésamo estabeleceram contactos directos com compradores institucionais e agro-processadores da província.",
      "A agência aproveitou o evento para apresentar os resultados do programa de cadeias de valor e lançar o processo de inscrição para o próximo ciclo de assistência técnica.",
    ],
    imagem: galMercado,
  },
  {
    slug: "nova-formacao-mpme",
    titulo: "Novo ciclo de formação para pequenas empresas arranca em Gondola",
    data: "28 de Maio de 2026",
    dataISO: "2026-05-28",
    categoria: "Formação",
    resumo:
      "Cento e vinte empreendedores iniciam formação em gestão, contabilidade simplificada e acesso a financiamento.",
    corpo: [
      "O novo ciclo de formação decorre ao longo de dez semanas e abrange gestão financeira, marketing local, formalização e preparação de pedidos de crédito.",
      "Após a formação, cada participante recebe seis meses de acompanhamento individual por parte dos técnicos da ADEM.",
    ],
    imagem: projFormacao,
  },
  {
    slug: "acordo-mineracao-responsavel",
    titulo: "Acordo reforça mineração artesanal responsável em Manica",
    data: "14 de Março de 2026",
    dataISO: "2026-03-14",
    categoria: "Parcerias",
    resumo:
      "Novo protocolo prevê formação em segurança e alternativas ao uso de mercúrio para associações mineiras.",
    corpo: [
      "O protocolo assinado em Chimoio estabelece um plano conjunto de formação em segurança no trabalho e de introdução de técnicas de processamento sem mercúrio.",
      "Serão abrangidas quinze associações mineiras dos distritos de Manica e Sussundenga.",
    ],
    imagem: galParceria,
  },
  {
    slug: "grupos-de-poupanca",
    titulo: "Grupos de poupança mobilizam comunidades rurais",
    data: "9 de Janeiro de 2026",
    dataISO: "2026-01-09",
    categoria: "Comunidade",
    resumo:
      "Mais de 300 grupos de poupança e crédito rotativo estão activos nos distritos abrangidos pela ADEM.",
    corpo: [
      "Os grupos, maioritariamente compostos por mulheres, permitem financiar pequenos negócios, despesas escolares e campanhas agrícolas sem recurso a crédito informal caro.",
      "A ADEM assegura formação inicial, material de registo e acompanhamento periódico aos comités de gestão.",
    ],
    imagem: galMpme,
  },
];

export type Publicacao = {
  titulo: string;
  tipo: string;
  ano: string;
  descricao: string;
};

export const publicacoes: Publicacao[] = [
  {
    titulo: "Relatório Anual de Actividades",
    tipo: "Relatório",
    ano: "2025",
    descricao:
      "Balanço das actividades, resultados e demonstrações financeiras da ADEM no exercício de 2025.",
  },
  {
    titulo: "Plano Estratégico 2024—2028",
    tipo: "Estratégia",
    ano: "2024",
    descricao:
      "Prioridades, objectivos e indicadores da agência para o ciclo estratégico de cinco anos.",
  },
  {
    titulo: "Estudo sobre cadeias de valor agrícolas em Manica",
    tipo: "Estudo",
    ano: "2024",
    descricao:
      "Análise das cadeias de milho, hortícolas e sésamo, com recomendações para produtores e compradores.",
  },
  {
    titulo: "Manual do Empreendedor",
    tipo: "Manual",
    ano: "2023",
    descricao:
      "Guia prático de gestão, contabilidade simplificada e formalização para micro e pequenas empresas.",
  },
  {
    titulo: "Boas práticas em mineração artesanal",
    tipo: "Guia técnico",
    ano: "2023",
    descricao:
      "Orientações sobre segurança no trabalho, organização associativa e redução do uso de mercúrio.",
  },
  {
    titulo: "Guia dos Grupos de Poupança Comunitária",
    tipo: "Manual",
    ano: "2022",
    descricao:
      "Metodologia de criação, gestão e acompanhamento de grupos de poupança e crédito rotativo.",
  },
];

const galeriaBase = [
  { src: galMercado, alt: "Mulheres de uma cooperativa vendem hortícolas num mercado local" },
  { src: projAgricultura, alt: "Produtores durante a colheita de milho num campo em Manica" },
  { src: projFormacao, alt: "Sessão de formação para empreendedores numa sala em Chimoio" },
  { src: projMineracao, alt: "Mineradores artesanais a trabalhar num local de extracção" },
  { src: galTurismo, alt: "Paisagem de montanhas verdes e queda de água na região de Chimanimani" },
  { src: galParceria, alt: "Assinatura de um acordo de parceria institucional" },
  { src: galMpme, alt: "Jovem empreendedora a trabalhar numa oficina de carpintaria" },
  { src: heroManica, alt: "Vista aérea de campos agrícolas no vale de Manica" },
];

/** Imagens reais colocadas em src/assets/reais/ são usadas automaticamente. */
export const heroSlides = imagensReaisHero.length
  ? imagensReaisHero.map((i) => ({ src: i.src, alt: i.alt }))
  : heroSlidesBase;

export const galeria = [
  ...imagensReais.map((i) => ({ src: i.src, alt: i.alt })),
  ...galeriaBase,
];

export type CategoriaPublicacao = { slug: string; label: string; tipos: string[] };

/** Subcategorias apresentadas no submenu "Publicações". */
export const categoriasPublicacoes: CategoriaPublicacao[] = [
  { slug: "relatorios", label: "Relatórios", tipos: ["Relatório", "Relatório Anual", "Relatório de Actividades", "Auditoria"] },
  { slug: "projectos", label: "Projectos", tipos: ["Projecto", "Projectos"] },
  { slug: "apresentacoes", label: "Apresentações", tipos: ["Apresentação", "Apresentações"] },
  { slug: "discursos", label: "Discursos", tipos: ["Discurso", "Discursos"] },
  { slug: "outros", label: "Outros documentos", tipos: [] },
];

export function categoriaDaPublicacao(tipo: string): string {
  const t = (tipo ?? "").trim().toLowerCase();
  const encontrada = categoriasPublicacoes.find((c) =>
    c.tipos.some((x) => x.toLowerCase() === t),
  );
  return encontrada?.slug ?? "outros";
}

export type FaseProjecto = "implementados" | "em-curso" | "futuros";

export const fasesProjectos: { slug: FaseProjecto; label: string; descricao: string }[] = [
  { slug: "implementados", label: "Projectos Implementados", descricao: "Projectos já executados pela ADEM com parceiros e financiadores." },
  { slug: "em-curso", label: "Projectos Em Curso", descricao: "Projectos actualmente em implementação na província de Manica e no Corredor da Beira." },
  { slug: "futuros", label: "Projectos Futuros", descricao: "Projectos previstos e em fase de mobilização de recursos." },
];

export type ProjectoFicha = {
  slug: string;
  titulo: string;
  fase: FaseProjecto;
  modelo: "Consórcio" | "Individual" | "N/A";
  financiador: string;
  orcamento: string;
  local: string;
  resultados: string;
  parceiros: string;
};

export const projectosFicha: ProjectoFicha[] = [
  {
    slug: "fortalecimento-producao-sementes",
    titulo: "Fortalecimento da produção de sementes e adopção de variedades melhoradas",
    fase: "implementados",
    modelo: "Consórcio",
    financiador: "AGRA",
    orcamento: "356 093,00 US$",
    local: "Macate, Sussundenga, Manica, Guro e Nhamatanda",
    resultados:
      "205 VBA (Village Based Advisor), 84 163 produtores envolvidos, 33 PMEs envolvidas no processo de comercialização, 46 279 ton de milho e soja vendidas.",
    parceiros: "SDAE, DPIC, IIAM, ISPM, Emilia Comercial, Sementes Nzara Yapera e Companhia de Zembe",
  },
  {
    slug: "hortas-caseiras-nutricao",
    titulo: "Promoção de Hortas Caseiras e educação Nutricional",
    fase: "implementados",
    modelo: "Individual",
    financiador: "FAO",
    orcamento: "90 693,00 US$",
    local: "Sussundenga",
    resultados:
      "4 400 mulheres, 4 400 hortas caseiras, 400 kits de demonstração culinária, 3 feiras de demonstração culinária, 137 viveiros comunitários e escolares.",
    parceiros: "SDAE, SDTEJ, SETSAN, SDSMAS",
  },
  {
    slug: "scaling-up-sweetpotatoes",
    titulo: "Scaling up sweetpotatoes through agriculture and nutrition",
    fase: "implementados",
    modelo: "N/A",
    financiador: "CIP — Centro Internacional da Batata",
    orcamento: "24 000,00 US$",
    local: "Beira, Dondo, Gondola, Macate, Sussundenga e Manica",
    resultados:
      "60 ha de batata-doce plantados, 9 840 famílias, 78 720 kg de rama distribuídos e 95 multiplicadores de rama (66 em Manica e 29 em Sofala).",
    parceiros: "SDAE, IIAM",
  },
  {
    slug: "agronegocios-mercados-inclusivos-1",
    titulo: "Fortalecimento de agronegócios e sistema de mercados inclusivos",
    fase: "implementados",
    modelo: "Consórcio",
    financiador: "AGRA",
    orcamento: "1 599 476,00 US$",
    local: "Gondola, Vanduzi, Báruè, Macanga, Tsangano e Angónia",
    resultados:
      "409 VBA, 160 085 pequenos produtores assistidos, 203 MPMEs estabelecidas e fortalecidas para a venda de insumos, 1 963 ton de fertilizantes vendidas.",
    parceiros: "SDAE, DPIC, Fundação MICAIA, UPCT, CED, DPAP, ICM, SPAE, Agrimerc, Novo Mundo Comércio e Serviços",
  },
  {
    slug: "reducao-perdas-pos-colheita",
    titulo: "Aceleração da absorção da tecnologia de redução de perdas pós-colheita",
    fase: "implementados",
    modelo: "Individual",
    financiador: "AGRA",
    orcamento: "185 000,00 US$",
    local: "Corredor da Beira",
    resultados:
      "15 empresas de debulha mecanizada, promovida a produção local de debulhadoras na metalúrgica de Chimoio e estabelecida uma linha de crédito no Paulino Micro Crédito.",
    parceiros: "SDAE, Metalúrgica, DPIC, Paulino Micro Crédito, Casa do Agricultor, ICM, Nyumba ya Zigaio de Malawi",
  },
  {
    slug: "empoderamento-mulheres-jovens",
    titulo: "Empoderamento Económico das Mulheres e Jovens adolescentes",
    fase: "implementados",
    modelo: "Consórcio",
    financiador: "PMA",
    orcamento: "100 000,00 US$",
    local: "Gondola",
    resultados:
      "3 grupos de PCR estabelecidos, com 80 mulheres beneficiárias, 56 750,00 MT de volume de crédito e 80 mulheres e jovens beneficiárias de formações vocacionais.",
    parceiros: "SDSMAS, CNCS, CPCS, DPGMAS, North Star Alliance",
  },
  {
    slug: "recuperacao-economica-resiliente",
    titulo: "Recuperação económica e resiliente dos meios de subsistência",
    fase: "implementados",
    modelo: "Individual",
    financiador: "PNUD/MRF",
    orcamento: "217 122,00 US$",
    local: "Machanga e Chibabava",
    resultados: "Apresentado o projecto ao governo distrital.",
    parceiros: "SDAE, Comités de gestão de riscos e desastres, MRF",
  },
  {
    slug: "sistemas-alimentares-seguranca",
    titulo: "Fortalecimento de Sistemas Alimentares e de Segurança Alimentar",
    fase: "implementados",
    modelo: "Individual",
    financiador: "Embaixada do Reino dos Países Baixos (Holanda)",
    orcamento: "1 883 779,00 US$",
    local:
      "Província de Manica (Báruè, Vanduzi, Manica, Sussundenga, Chimoio, Macate e Gondola) e Província de Sofala (Beira, Dondo, Nhamatanda, Búzi e Gorongosa)",
    resultados:
      "O projecto iniciou em Setembro de 2023 e decorre até Agosto de 2027; foi feita a mobilização do pessoal e a elaboração de manuais e brochuras de treinamento.",
    parceiros: "Direcção Provincial de Indústria e Comércio, de Agricultura e Pescas, SDAE, Sector Privado (DECA, EC)",
  },
];

export const totaisProjectos = {
  total: 10,
  orcamento: "4 947 233,00 US$",
  financiadores: 7,
  modelos: 2,
};
