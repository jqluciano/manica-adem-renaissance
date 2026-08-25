/**
 * Imagens reais da ADEM — actualização automática.
 *
 * Basta colocar ficheiros de imagem (.jpg, .jpeg, .png, .webp, .avif)
 * na pasta `src/assets/reais/` que eles aparecem automaticamente
 * na Galeria e no carrossel da página inicial.
 *
 * Convenções úteis para o nome do ficheiro:
 *  - "01-formacao-de-produtores.jpg"  → ordena primeiro e gera a legenda
 *    "Formação de produtores"
 *  - use "hero-" no início do nome para incluir também no carrossel do hero
 *    (ex.: "hero-vale-de-manica.jpg")
 */

export type ImagemReal = {
  src: string;
  alt: string;
  nome: string;
  hero: boolean;
};

const modulos = import.meta.glob<string>(
  "../assets/reais/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true, import: "default" },
);

function legendaDoFicheiro(caminho: string) {
  const ficheiro = caminho.split("/").pop() ?? caminho;
  const base = ficheiro
    .replace(/\.[^.]+$/, "")
    .replace(/^\d+[-_\s]*/, "")
    .replace(/^hero[-_\s]*/i, "")
    .replace(/[-_]+/g, " ")
    .trim();
  if (!base) return "Actividade da ADEM na província de Manica";
  return base.charAt(0).toUpperCase() + base.slice(1);
}

export const imagensReais: ImagemReal[] = Object.entries(modulos)
  .sort(([a], [b]) => a.localeCompare(b, "pt", { numeric: true }))
  .map(([caminho, src]) => {
    const nome = caminho.split("/").pop() ?? caminho;
    return {
      src,
      nome,
      alt: legendaDoFicheiro(caminho),
      hero: /^hero[-_]/i.test(nome),
    };
  });

export const imagensReaisHero = imagensReais.filter((i) => i.hero);

export const temImagensReais = imagensReais.length > 0;
