export type CampoTipo = "text" | "textarea" | "number" | "date" | "boolean" | "imagem" | "select";

export type Campo = {
  nome: string;
  rotulo: string;
  tipo: CampoTipo;
  opcoes?: string[];
  obrigatorio?: boolean;
  ajuda?: string;
  /** Mostrar como coluna na tabela de listagem. */
  coluna?: boolean;
};

export type Recurso = {
  tabela: "projectos" | "noticias" | "publicacoes" | "videos" | "relatorios" | "galeria";
  titulo: string;
  singular: string;
  descricao: string;
  ordenarPor: string;
  campos: Campo[];
};

const publicado: Campo = { nome: "publicado", rotulo: "Publicado no site", tipo: "boolean", coluna: true };
const ordem: Campo = { nome: "ordem", rotulo: "Ordem", tipo: "number" };

export const recursos: Record<Recurso["tabela"], Recurso> = {
  projectos: {
    tabela: "projectos",
    titulo: "Projectos",
    singular: "Projecto",
    descricao: "Projectos em curso e concluídos apresentados no site.",
    ordenarPor: "ordem",
    campos: [
      { nome: "titulo", rotulo: "Título", tipo: "text", obrigatorio: true, coluna: true },
      { nome: "slug", rotulo: "Identificador (slug)", tipo: "text", obrigatorio: true },
      { nome: "resumo", rotulo: "Resumo", tipo: "textarea" },
      { nome: "descricao", rotulo: "Descrição", tipo: "textarea" },
      { nome: "imagem_url", rotulo: "Imagem", tipo: "imagem" },
      { nome: "estado", rotulo: "Estado", tipo: "select", opcoes: ["Em curso", "Concluído"], coluna: true },
      { nome: "local", rotulo: "Local", tipo: "text", coluna: true },
      { nome: "periodo", rotulo: "Período", tipo: "text" },
      { nome: "parceiros", rotulo: "Parceiros", tipo: "text" },
      ordem,
      publicado,
    ],
  },
  noticias: {
    tabela: "noticias",
    titulo: "Notícias",
    singular: "Notícia",
    descricao: "Artigos e comunicados publicados na página de notícias.",
    ordenarPor: "data",
    campos: [
      { nome: "titulo", rotulo: "Título", tipo: "text", obrigatorio: true, coluna: true },
      { nome: "slug", rotulo: "Identificador (slug)", tipo: "text", obrigatorio: true },
      { nome: "data", rotulo: "Data", tipo: "date", coluna: true },
      { nome: "categoria", rotulo: "Categoria", tipo: "text", coluna: true },
      { nome: "resumo", rotulo: "Resumo", tipo: "textarea" },
      { nome: "corpo", rotulo: "Texto (um parágrafo por linha)", tipo: "textarea" },
      { nome: "imagem_url", rotulo: "Imagem", tipo: "imagem" },
      ordem,
      publicado,
    ],
  },
  publicacoes: {
    tabela: "publicacoes",
    titulo: "Publicações",
    singular: "Publicação",
    descricao: "Manuais, estudos e outros documentos institucionais.",
    ordenarPor: "ordem",
    campos: [
      { nome: "titulo", rotulo: "Título", tipo: "text", obrigatorio: true, coluna: true },
      {
        nome: "tipo",
        rotulo: "Categoria",
        tipo: "select",
        opcoes: ["Relatório", "Projecto", "Apresentação", "Discurso", "Outro documento"],
        ajuda: "Define em que submenu de Publicações o documento aparece.",
        coluna: true,
      },
      { nome: "ano", rotulo: "Ano", tipo: "text", coluna: true },
      { nome: "descricao", rotulo: "Descrição", tipo: "textarea" },
      { nome: "ficheiro_url", rotulo: "Ficheiro (PDF)", tipo: "imagem", ajuda: "Aceita PDF ou imagem." },
      ordem,
      publicado,
    ],
  },
  videos: {
    tabela: "videos",
    titulo: "Vídeos",
    singular: "Vídeo",
    descricao: "Vídeos apresentados na página de multimédia.",
    ordenarPor: "data",
    campos: [
      { nome: "titulo", rotulo: "Título", tipo: "text", obrigatorio: true, coluna: true },
      { nome: "slug", rotulo: "Identificador (slug)", tipo: "text", obrigatorio: true },
      { nome: "youtube_id", rotulo: "ID do YouTube", tipo: "text", ajuda: "Ex.: dQw4w9WgXcQ", coluna: true },
      { nome: "descricao", rotulo: "Descrição", tipo: "textarea" },
      { nome: "data", rotulo: "Data", tipo: "date", coluna: true },
      { nome: "categoria", rotulo: "Categoria", tipo: "text" },
      ordem,
      publicado,
    ],
  },
  relatorios: {
    tabela: "relatorios",
    titulo: "Relatórios",
    singular: "Relatório",
    descricao: "Relatórios anuais, planos estratégicos e auditorias.",
    ordenarPor: "ano",
    campos: [
      { nome: "titulo", rotulo: "Título", tipo: "text", obrigatorio: true, coluna: true },
      { nome: "slug", rotulo: "Identificador (slug)", tipo: "text", obrigatorio: true },
      { nome: "ano", rotulo: "Ano", tipo: "text", coluna: true },
      {
        nome: "tipo",
        rotulo: "Tipo",
        tipo: "select",
        opcoes: ["Relatório Anual", "Relatório de Actividades", "Plano Estratégico", "Auditoria"],
        coluna: true,
      },
      { nome: "resumo", rotulo: "Resumo", tipo: "textarea" },
      { nome: "descricao", rotulo: "Descrição", tipo: "textarea" },
      { nome: "estado", rotulo: "Estado", tipo: "select", opcoes: ["Disponível", "Em breve"], coluna: true },
      { nome: "ficheiro_url", rotulo: "Ficheiro (PDF)", tipo: "imagem" },
      ordem,
      publicado,
    ],
  },
  galeria: {
    tabela: "galeria",
    titulo: "Galeria",
    singular: "Fotografia",
    descricao: "Fotografias apresentadas na galeria do site.",
    ordenarPor: "ordem",
    campos: [
      { nome: "titulo", rotulo: "Legenda", tipo: "text", coluna: true },
      { nome: "imagem_url", rotulo: "Imagem", tipo: "imagem", obrigatorio: true },
      ordem,
      publicado,
    ],
  },
};

export function valoresIniciais(recurso: Recurso): Record<string, unknown> {
  const base: Record<string, unknown> = {};
  for (const campo of recurso.campos) {
    if (campo.tipo === "boolean") base[campo.nome] = true;
    else if (campo.tipo === "number") base[campo.nome] = 0;
    else if (campo.tipo === "date") base[campo.nome] = new Date().toISOString().slice(0, 10);
    else if (campo.tipo === "select") base[campo.nome] = campo.opcoes?.[0] ?? "";
    else base[campo.nome] = "";
  }
  return base;
}

export function gerarSlug(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}
