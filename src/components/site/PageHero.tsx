import { useEffect, useState } from "react";
import { galeria as galeriaEstatica } from "@/data/site";
import { useGaleria } from "@/data/conteudo";

type Imagem = { src: string; alt: string };

export function PageHero({
  titulo,
  descricao,
  eyebrow,
  slides,
  intervalo = 5000,
}: {
  titulo: string;
  descricao: string;
  eyebrow?: string;
  /** Imagens de fundo do carrossel. Por omissão usa a galeria. */
  slides?: Imagem[];
  intervalo?: number;
}) {
  const galeria = useGaleria();
  const imagens: Imagem[] =
    slides && slides.length > 0 ? slides : galeria.length > 0 ? galeria : galeriaEstatica;
  const total = imagens.length;

  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const [movimentoReduzido, setMovimentoReduzido] = useState(false);

  useEffect(() => {
    setIndice(0);
  }, [total]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMovimentoReduzido(mq.matches);
    const mudar = () => setMovimentoReduzido(mq.matches);
    mq.addEventListener("change", mudar);
    return () => mq.removeEventListener("change", mudar);
  }, []);

  useEffect(() => {
    if (pausado || movimentoReduzido || total < 2) return;
    const timer = setInterval(() => setIndice((i) => (i + 1) % total), intervalo);
    return () => clearInterval(timer);
  }, [pausado, movimentoReduzido, total, intervalo]);

  return (
    <section
      className="relative isolate overflow-hidden border-b border-border bg-primary text-primary-foreground"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocusCapture={() => setPausado(true)}
      onBlurCapture={() => setPausado(false)}
    >
      {total > 0 && (
        <div aria-hidden="true" className="absolute inset-0 -z-20">
          {imagens.map((img, i) => (
            <img
              key={`${img.src}-${i}`}
              src={img.src}
              alt=""
              loading={i === 0 ? "eager" : "lazy"}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-out ${
                i === indice ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{titulo}</h1>
        <p className="mt-4 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
          {descricao}
        </p>
      </div>

      {total > 1 && (
        <div className="absolute bottom-4 right-5 z-10 flex items-center gap-2">
          {imagens.map((img, i) => (
            <button
              key={`${img.src}-dot-${i}`}
              type="button"
              onClick={() => setIndice(i)}
              aria-label={`Ver imagem de fundo ${i + 1}`}
              aria-current={i === indice}
              className={`h-2 w-2 rounded-full border border-primary-foreground/60 transition-colors ${
                i === indice ? "bg-accent" : "bg-primary-foreground/25 hover:bg-primary-foreground/50"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
