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

export const contacto = {
  organizacao: "ADEM — Agência de Desenvolvimento Económico de Manica",
  morada: "Av. Samora Machel, Bairro 1º de Maio, Chimoio, Província de Manica, Moçambique",
  telefone: "+258 25 122 800",
  telemovel: "+258 84 000 0000",
  email: "info@adem.org.mz",
  horario: "Segunda a sexta, 07:30 — 15:30",
  redes: [
    { nome: "Facebook", url: "https://www.facebook.com/" },
    { nome: "LinkedIn", url: "https://www.linkedin.com/" },
    { nome: "YouTube", url: "https://www.youtube.com/" },
  ],
};

export const navegacao = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/projectos", label: "Projectos" },
  { to: "/noticias", label: "Notícias" },
  { to: "/publicacoes", label: "Publicações" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contacto", label: "Contacto" },
] as const;

export const impacto = [
  { valor: "25+", rotulo: "Anos ao serviço de Manica" },
  { valor: "12 000+", rotulo: "Produtores e empreendedores apoiados" },
  { valor: "9", rotulo: "Distritos abrangidos" },
  { valor: "40+", rotulo: "Projectos implementados com parceiros" },
];

export const areas = [
  {
    titulo: "Agricultura e cadeias de valor",
    texto:
      "Assistência técnica a produtores, ligação ao mercado e desenvolvimento de cadeias de valor como milho, hortícolas, soja e sésamo.",
  },
  {
    titulo: "Desenvolvimento empresarial (MPME)",
    texto:
      "Formação em gestão, planos de negócio, formalização e acesso a financiamento para micro, pequenas e médias empresas.",
  },
  {
    titulo: "Recursos naturais e mineração",
    texto:
      "Apoio à mineração artesanal responsável, gestão comunitária de recursos e mitigação de impactos ambientais.",
  },
  {
    titulo: "Turismo e economia local",
    texto:
      "Valorização do potencial turístico de Manica, promoção do artesanato e dinamização de mercados locais.",
  },
  {
    titulo: "Género e inclusão",
    texto:
      "Programas dirigidos a mulheres e jovens, com foco em liderança económica, poupança e crédito rotativo.",
  },
  {
    titulo: "Ambiente e resiliência climática",
    texto:
      "Agricultura de conservação, agro-florestas e preparação das comunidades para eventos climáticos extremos.",
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

export const galeria = [
  { src: galMercado, alt: "Mulheres de uma cooperativa vendem hortícolas num mercado local" },
  { src: projAgricultura, alt: "Produtores durante a colheita de milho num campo em Manica" },
  { src: projFormacao, alt: "Sessão de formação para empreendedores numa sala em Chimoio" },
  { src: projMineracao, alt: "Mineradores artesanais a trabalhar num local de extracção" },
  { src: galTurismo, alt: "Paisagem de montanhas verdes e queda de água na região de Chimanimani" },
  { src: galParceria, alt: "Assinatura de um acordo de parceria institucional" },
  { src: galMpme, alt: "Jovem empreendedora a trabalhar numa oficina de carpintaria" },
  { src: heroManica, alt: "Vista aérea de campos agrícolas no vale de Manica" },
];
