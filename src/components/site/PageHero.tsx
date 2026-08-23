export function PageHero({
  titulo,
  descricao,
  eyebrow,
}: {
  titulo: string;
  descricao: string;
  eyebrow?: string;
}) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{titulo}</h1>
        <p className="mt-4 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
          {descricao}
        </p>
      </div>
    </section>
  );
}
