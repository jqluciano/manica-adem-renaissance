import { useEffect, useState, type FormEvent } from "react";
import { ShieldAlert, X } from "lucide-react";
import { contacto } from "@/data/site";

export function CanalDenuncia() {
  const [aberto, setAberto] = useState(false);
  const [anonimo, setAnonimo] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!aberto) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [aberto]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const assunto = String(d.get("assunto") ?? "").trim().slice(0, 150);
    const relato = String(d.get("relato") ?? "").trim().slice(0, 4000);
    const nome = String(d.get("nome") ?? "").trim().slice(0, 100);
    const contactoUser = String(d.get("contacto") ?? "").trim().slice(0, 150);
    if (!assunto || !relato) {
      setErro("Preencha o assunto e a descrição da denúncia.");
      return;
    }
    if (!anonimo && !nome) {
      setErro("Indique o seu nome ou escolha enviar anonimamente.");
      return;
    }
    const identificacao = anonimo
      ? "Denúncia ANÓNIMA"
      : `Nome: ${nome}\nContacto: ${contactoUser || "—"}`;
    const corpo = `${identificacao}\n\n${relato}`;
    window.location.href = `mailto:${contacto.email}?subject=${encodeURIComponent(
      `[Canal de Denúncia] ${assunto}`,
    )}&body=${encodeURIComponent(corpo)}`;
    setErro("");
    setAberto(false);
  }

  const campo =
    "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring";

  return (
    <>
      <button
        type="button"
        onClick={() => setAberto(true)}
        aria-label="Canal de denúncia"
        title="Canal de denúncia"
        className="inline-flex items-center gap-2 rounded-md px-2 py-1 transition-colors hover:bg-primary-foreground/15 hover:text-accent"
      >
        <ShieldAlert className="h-4 w-4 text-accent" aria-hidden="true" />
        <span className="font-medium">Denúncia</span>
      </button>

      {aberto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 p-4"
          onMouseDown={(e) => e.target === e.currentTarget && setAberto(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="titulo-denuncia"
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-card p-6 text-card-foreground shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="titulo-denuncia" className="flex items-center gap-2 text-xl font-bold">
                  <ShieldAlert className="h-5 w-5 text-brand" aria-hidden="true" />
                  Canal de Denúncia
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  A denúncia será enviada para {contacto.email}. Pode optar por não se identificar.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setAberto(false)}
                aria-label="Fechar"
                className="rounded-md p-1 hover:bg-secondary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form className="mt-5 space-y-4" onSubmit={onSubmit}>
              <label className="flex items-center gap-2 rounded-md border border-border bg-secondary/50 p-3 text-sm font-medium">
                <input
                  type="checkbox"
                  checked={anonimo}
                  onChange={(e) => setAnonimo(e.target.checked)}
                  className="h-4 w-4 accent-primary"
                />
                Enviar anonimamente
              </label>

              {!anonimo && (
                <>
                  <div>
                    <label htmlFor="den-nome" className="block text-sm font-medium">Nome</label>
                    <input id="den-nome" name="nome" maxLength={100} className={campo} />
                  </div>
                  <div>
                    <label htmlFor="den-contacto" className="block text-sm font-medium">
                      Telefone ou e-mail (opcional)
                    </label>
                    <input id="den-contacto" name="contacto" maxLength={150} className={campo} />
                  </div>
                </>
              )}

              <div>
                <label htmlFor="den-assunto" className="block text-sm font-medium">Assunto</label>
                <input id="den-assunto" name="assunto" required maxLength={150} className={campo} />
              </div>
              <div>
                <label htmlFor="den-relato" className="block text-sm font-medium">
                  Descrição da denúncia
                </label>
                <textarea id="den-relato" name="relato" rows={5} required maxLength={4000} className={campo} />
              </div>

              {erro && <p className="text-sm text-destructive" role="alert">{erro}</p>}

              <p className="text-xs text-muted-foreground">
                Ao enviar, abrimos o seu programa de e-mail com a denúncia preenchida.
                {anonimo && " Para total anonimato, use um endereço de e-mail que não o identifique."}
              </p>

              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Enviar denúncia
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
