import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { contacto } from "@/data/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — ADEM Manica" },
      {
        name: "description",
        content:
          "Contacte a ADEM em Chimoio: morada, telefone, e-mail, horário de atendimento e formulário de mensagem.",
      },
      { property: "og:title", content: "Contacto — ADEM Manica" },
      {
        property: "og:description",
        content: "Fale com a Agência de Desenvolvimento Económico da Província de Manica, em Chimoio.",
      },
    ],
  }),
  component: Contacto,
});

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const dados = new FormData(event.currentTarget);
    const corpo = `Nome: ${dados.get("nome")}\nE-mail: ${dados.get("email")}\n\n${dados.get("mensagem")}`;
    window.location.href = `mailto:${contacto.email}?subject=${encodeURIComponent(
      String(dados.get("assunto") ?? "Contacto pelo site"),
    )}&body=${encodeURIComponent(corpo)}`;
    setEnviado(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Fale connosco"
        titulo="Contacto"
        descricao="Estamos disponíveis para responder a pedidos de informação, propostas de parceria e apoio a produtores e empresas."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Informações</h2>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <p className="font-medium text-foreground">Morada</p>
                <p className="text-sm text-muted-foreground">{contacto.morada}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <p className="font-medium text-foreground">Telefone</p>
                <a
                  href={`tel:${contacto.telefone.replace(/\s/g, "")}`}
                  className="text-sm text-muted-foreground hover:text-brand"
                >
                  {contacto.telefone}
                </a>
                <br />
                <a
                  href={`tel:${contacto.telemovel.replace(/\s/g, "")}`}
                  className="text-sm text-muted-foreground hover:text-brand"
                >
                  {contacto.telemovel}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <p className="font-medium text-foreground">WhatsApp</p>
                <a
                  href={contacto.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-3 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {contacto.whatsapp}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <p className="font-medium text-foreground">E-mail</p>
                <a
                  href={`mailto:${contacto.email}`}
                  className="text-sm text-muted-foreground hover:text-brand"
                >
                  {contacto.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <p className="font-medium text-foreground">Horário</p>
                <p className="text-sm text-muted-foreground">{contacto.horario}</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <iframe
              title="Mapa de localização da ADEM em Chimoio"
              src="https://www.openstreetmap.org/export/embed.html?bbox=33.44%2C-19.14%2C33.52%2C-19.09&layer=mapnik"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-foreground">Envie-nos uma mensagem</h2>
          <form className="mt-6 space-y-5" onSubmit={onSubmit}>
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-foreground">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                required
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="assunto" className="block text-sm font-medium text-foreground">
                Assunto
              </label>
              <input
                id="assunto"
                name="assunto"
                required
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-foreground">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                required
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Enviar mensagem
            </button>
            <p aria-live="polite" className="text-sm text-muted-foreground">
              {enviado
                ? "Abrimos o seu programa de e-mail com a mensagem preenchida."
                : "A mensagem é enviada através do seu programa de e-mail."}
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
