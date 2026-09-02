import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type CartaoExpansivelProps = {
  /** Conteúdo sempre visível. */
  children: ReactNode;
  /** Conteúdo revelado ao expandir. */
  detalhe: ReactNode;
  rotuloAbrir?: string;
  rotuloFechar?: string;
  className?: string;
};

/** Cartão com conteúdo adicional que expande ao clicar. */
export function CartaoExpansivel({
  children,
  detalhe,
  rotuloAbrir = "Ler mais",
  rotuloFechar = "Ver menos",
  className,
}: CartaoExpansivelProps) {
  const [aberto, setAberto] = useState(false);
  const id = useId();

  return (
    <div className={className}>
      {children}
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        aria-controls={id}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:underline"
      >
        {aberto ? rotuloFechar : rotuloAbrir}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-300 ${aberto ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={id}
        className={`grid transition-all duration-300 ease-out ${aberto ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">{detalhe}</div>
      </div>
    </div>
  );
}
