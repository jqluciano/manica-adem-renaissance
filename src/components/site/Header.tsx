import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Plus,
  X,
  Youtube,
} from "lucide-react";
import { categoriasPublicacoes, contacto, navegacao } from "@/data/site";
import ademLogo from "@/assets/adem-logo.png.asset.json";

const iconesRedes: Record<string, typeof Globe> = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
  YouTube: Youtube,
};

function BarraTopo() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2 text-xs sm:px-6">
        <ul className="flex items-center gap-1">
          {contacto.redes.map((rede) => {
            const Icone = iconesRedes[rede.nome] ?? Globe;
            return (
              <li key={rede.nome}>
                <a
                  href={rede.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={rede.nome}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-primary-foreground/15"
                >
                  <Icone className="h-4 w-4 sm:h-[18px] sm:w-[18px]" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a
            href={`tel:${contacto.telefone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
            <span className="font-medium">{contacto.telefone}</span>
          </a>
          <a
            href={`mailto:${contacto.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
            <span className="font-medium break-all">{contacto.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [aberto, setAberto] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [submenuMovel, setSubmenuMovel] = useState(false);
  const submenuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!submenu) return;
    function fora(e: MouseEvent) {
      if (!submenuRef.current?.contains(e.target as Node)) setSubmenu(false);
    }
    document.addEventListener("mousedown", fora);
    return () => document.removeEventListener("mousedown", fora);
  }, [submenu]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <BarraTopo />
      <div className="mx-auto grid h-20 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center" onClick={() => setAberto(false)}>
          <img
            src={ademLogo.url}
            alt="ADEM — Agência de Desenvolvimento Económico da Província de Manica"
            className="h-12 w-auto max-w-[190px] object-contain sm:h-14 sm:max-w-[230px]"
          />
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navegacao.map((item) =>
              item.to === "/publicacoes" ? (
                <li
                  key={item.to}
                  ref={submenuRef}
                  className="relative"
                  onMouseEnter={() => setSubmenu(true)}
                  onMouseLeave={() => setSubmenu(false)}
                >
                  <Link
                    to="/publicacoes"
                    search={{ categoria: undefined }}
                    aria-haspopup="true"
                    aria-expanded={submenu}
                    activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                    className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-secondary-foreground"
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  </Link>

                  {submenu && (
                    <ul className="absolute left-0 top-full min-w-56 rounded-md border border-border bg-primary p-2 shadow-lg">
                      {categoriasPublicacoes.map((cat) => (
                        <li key={cat.slug}>
                          <Link
                            to="/publicacoes"
                            search={{ categoria: cat.slug }}
                            onClick={() => setSubmenu(false)}
                            className="flex items-center gap-2 rounded px-3 py-2 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                          >
                            <Plus className="h-4 w-4" aria-hidden="true" />
                            {cat.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "bg-secondary text-secondary-foreground" }}
                    className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-secondary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-controls="menu-movel"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
        >
          {aberto ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {aberto && (
        <nav
          id="menu-movel"
          aria-label="Navegação móvel"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {navegacao.map((item) => (
              <li key={item.to}>
                {item.to === "/publicacoes" ? (
                  <>
                    <div className="flex items-center justify-between gap-2">
                      <Link
                        to="/publicacoes"
                        search={{ categoria: undefined }}
                        activeProps={{ className: "text-primary" }}
                        onClick={() => setAberto(false)}
                        className="block flex-1 rounded-md px-2 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-secondary"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setSubmenuMovel((v) => !v)}
                        aria-expanded={submenuMovel}
                        aria-label="Mostrar categorias de publicações"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${submenuMovel ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {submenuMovel && (
                      <ul className="mb-2 ml-2 border-l border-border pl-3">
                        {categoriasPublicacoes.map((cat) => (
                          <li key={cat.slug}>
                            <Link
                              to="/publicacoes"
                              search={{ categoria: cat.slug }}
                              onClick={() => setAberto(false)}
                              className="flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary"
                            >
                              <Plus className="h-4 w-4" aria-hidden="true" />
                              {cat.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "text-primary" }}
                    onClick={() => setAberto(false)}
                    className="block rounded-md px-2 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
