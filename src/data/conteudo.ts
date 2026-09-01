import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  galeria as galeriaEstatica,
  noticias as noticiasEstaticas,
  projectos as projectosEstaticos,
  publicacoes as publicacoesEstaticas,
  relatorios as relatoriosEstaticos,
  videos as videosEstaticos,
  images,
  type Noticia,
  type Projecto,
  type Publicacao,
  type Relatorio,
  type Video,
} from "@/data/site";

function formatarData(iso: string) {
  try {
    return new Intl.DateTimeFormat("pt-PT", { day: "numeric", month: "long", year: "numeric" }).format(
      new Date(iso),
    );
  } catch {
    return iso;
  }
}

/** Usa os registos da base de dados quando existem; caso contrário mantém o conteúdo estático. */
function usarConteudo<T>(tabela: string, ordenarPor: string, mapear: (linhas: any[]) => T[], fallback: T[]) {
  const { data } = useQuery({
    queryKey: ["conteudo", tabela],
    queryFn: async () => {
      const { data, error } = await supabase
        .from(tabela as never)
        .select("*")
        .eq("publicado", true)
        .order(ordenarPor, { ascending: ordenarPor === "ordem" });
      if (error) throw error;
      return (data ?? []) as any[];
    },
  });

  if (!data || data.length === 0) return fallback;
  return mapear(data);
}

export function useProjectos(): Projecto[] {
  return usarConteudo<Projecto>(
    "projectos",
    "ordem",
    (linhas) =>
      linhas.map((l) => ({
        slug: l.slug,
        titulo: l.titulo,
        resumo: l.resumo,
        descricao: l.descricao,
        imagem: l.imagem_url || images.projAgricultura,
        estado: l.estado === "Concluído" ? "Concluído" : "Em curso",
        local: l.local,
        periodo: l.periodo,
        parceiros: l.parceiros,
      })),
    projectosEstaticos,
  );
}

export function useNoticias(): Noticia[] {
  return usarConteudo<Noticia>(
    "noticias",
    "data",
    (linhas) =>
      linhas.map((l) => ({
        slug: l.slug,
        titulo: l.titulo,
        data: formatarData(l.data),
        dataISO: l.data,
        categoria: l.categoria,
        resumo: l.resumo,
        corpo: String(l.corpo || "")
          .split("\n")
          .map((p: string) => p.trim())
          .filter(Boolean),
        imagem: l.imagem_url || images.galMercado,
      })),
    noticiasEstaticas,
  );
}

export function usePublicacoes(): Publicacao[] {
  return usarConteudo<Publicacao>(
    "publicacoes",
    "ordem",
    (linhas) =>
      linhas.map((l) => ({
        titulo: l.titulo,
        tipo: l.tipo,
        ano: l.ano,
        descricao: l.descricao,
      })),
    publicacoesEstaticas,
  );
}

export function useVideos(): Video[] {
  return usarConteudo<Video>(
    "videos",
    "data",
    (linhas) =>
      linhas.map((l) => ({
        slug: l.slug,
        titulo: l.titulo,
        youtubeId: l.youtube_id,
        descricao: l.descricao,
        data: formatarData(l.data),
        dataISO: l.data,
        categoria: l.categoria,
      })),
    videosEstaticos,
  );
}

export function useRelatorios(): Relatorio[] {
  return usarConteudo<Relatorio>(
    "relatorios",
    "ano",
    (linhas) =>
      linhas.map((l) => ({
        slug: l.slug,
        titulo: l.titulo,
        ano: l.ano,
        tipo: l.tipo,
        resumo: l.resumo,
        descricao: l.descricao,
        estado: l.estado === "Em breve" ? "Em breve" : "Disponível",
      })),
    relatoriosEstaticos,
  );
}

export function useGaleria(): { src: string; alt: string }[] {
  return usarConteudo(
    "galeria",
    "ordem",
    (linhas) => linhas.map((l) => ({ src: l.imagem_url as string, alt: (l.titulo as string) || "Fotografia da ADEM" })),
    galeriaEstatica,
  );
}
