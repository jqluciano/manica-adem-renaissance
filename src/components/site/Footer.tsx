import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { contacto, navegacao } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-bold">ADEM</h2>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Agência de Desenvolvimento Económico da Província de Manica — promovendo uma economia local
            inclusiva, competitiva e sustentável.
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {contacto.redes.map((rede) => (
              <li key={rede.nome}>
                <a
                  href={rede.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-primary-foreground/30 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-primary-foreground/10"
                >
                  {rede.nome}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">Navegação</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navegacao.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/85 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">Contactos</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{contacto.morada}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`tel:${contacto.telefone.replace(/\s/g, "")}`} className="hover:text-accent">
                {contacto.telefone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${contacto.email}`} className="hover:text-accent">
                {contacto.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{contacto.horario}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/70 sm:px-6">
          <p>
            © {new Date().getFullYear()} ADEM — Agência de Desenvolvimento Económico Província de Manica.
            Todos os direitos reservados.
          </p>
          <Link to="/auth" className="hover:text-accent">
            Área reservada
          </Link>
        </div>
      </div>

    </footer>
  );
}
