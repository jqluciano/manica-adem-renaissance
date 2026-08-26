import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CardCarouselItem = {
  titulo: string;
  conteudo: ReactNode;
};

export function CardCarousel({
  items,
  intervalo = 6000,
  ariaLabel,
}: {
  items: CardCarouselItem[];
  intervalo?: number;
  ariaLabel: string;
}) {
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const total = items.length;
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
    <div
      aria-roledescription="carrossel"
      aria-label={ariaLabel}
      className="relative"
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onFocusCapture={() => setPausado(true)}
      onBlurCapture={() => setPausado(false)}
    >
      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${indice * 100}%)` }}
        >
          {items.map((item) => (
            <article
              key={item.titulo}
              className="w-full shrink-0 grow-0 basis-full p-7 sm:p-10"
            >
              <span className="block h-1 w-10 rounded-full bg-accent" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-bold text-foreground sm:text-2xl">
                {item.titulo}
              </h2>
              <div className="mt-3 text-muted-foreground">{item.conteudo}</div>
            </article>
          ))}
        </div>
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={anterior}
            aria-label="Cartão anterior"
            className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={seguinte}
            aria-label="Próximo cartão"
            className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="mt-5 flex items-center justify-center gap-3">
            {items.map((item, i) => (
              <button
                key={item.titulo}
                type="button"
                onClick={() => setIndice(i)}
                aria-label={`Ir para ${item.titulo}`}
                aria-current={i === indice}
                className={`h-3 w-3 rounded-full border border-primary/60 transition-colors ${
                  i === indice ? "bg-accent" : "bg-primary/20 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
