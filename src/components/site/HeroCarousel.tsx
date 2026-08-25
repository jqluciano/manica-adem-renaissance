import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HeroSlide } from "./HeroSlide";

export type HeroSlideItem = { src: string; alt: string };

export function HeroCarousel({
  slides,
  intervalo = 5000,
  children,
}: {
  slides: HeroSlideItem[];
  intervalo?: number;
  children?: ReactNode;
}) {
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const total = slides.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const seguinte = useCallback(() => setIndice((i) => (i + 1) % total), [total]);
  const anterior = useCallback(() => setIndice((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (pausado || total < 2) return;
    timer.current = setInterval(seguinte, intervalo);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [pausado, seguinte, intervalo, total]);

  return (
    <section
      aria-roledescription="carrossel"
      aria-label="Imagens da província de Manica"
      className="relative isolate h-[520px] overflow-hidden bg-primary text-primary-foreground sm:h-[580px] lg:h-[620px]"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocusCapture={() => setPausado(true)}
      onBlurCapture={() => setPausado(false)}
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${indice * 100}%)` }}
        >
          {slides.map((s, i) => (
            <HeroSlide key={s.src} src={s.src} alt={s.alt} priority={i === 0} />
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/45"
      />

      <div className="mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6">
        <div className="max-w-3xl">{children}</div>
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={anterior}
            aria-label="Imagem anterior"
            className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-primary-foreground/40 bg-background/20 text-primary-foreground backdrop-blur transition-colors hover:bg-background/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={seguinte}
            aria-label="Próxima imagem"
            className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-primary-foreground/40 bg-background/20 text-primary-foreground backdrop-blur transition-colors hover:bg-background/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:right-6"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setIndice(i)}
                aria-label={`Ir para a imagem ${i + 1}`}
                aria-current={i === indice}
                className={`h-3 w-3 rounded-full border border-primary-foreground/70 transition-colors ${
                  i === indice ? "bg-accent" : "bg-primary-foreground/25 hover:bg-primary-foreground/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
