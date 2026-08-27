import { useEffect, useState } from "react";
import { createFileRoute, useNavigate, useRouter } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Área reservada — ADEM Manica" },
      {
        name: "description",
        content: "Autenticação para a equipa da ADEM gerir conteúdos do sítio institucional.",
      },
      { property: "og:title", content: "Área reservada — ADEM Manica" },
      { property: "og:description", content: "Acesso à área de administração do sítio da ADEM." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Autenticacao,
});

function Autenticacao() {
  const navigate = useNavigate();
  const router = useRouter();
  const [modo, setModo] = useState<"entrar" | "registar">("entrar");
  const [email, setEmail] = useState("");
  const [palavra, setPalavra] = useState("");
  const [nome, setNome] = useState("");
  const [ocupado, setOcupado] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin", replace: true });
    });
  }, [navigate]);

  async function submeter(e: React.FormEvent) {
    e.preventDefault();
    setOcupado(true);
    try {
      if (modo === "entrar") {
        const { error } = await supabase.auth.signInWithPassword({ email, password: palavra });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password: palavra,
          options: {
            emailRedirectTo: `${window.location.origin}/admin`,
            data: { nome },
          },
        });
        if (error) throw error;
        toast.success("Conta criada. Confirme o e-mail, se solicitado.");
      }
      router.invalidate();
      navigate({ to: "/admin", replace: true });
    } catch (erro) {
      toast.error(erro instanceof Error ? erro.message : "Não foi possível autenticar.");
    } finally {
      setOcupado(false);
    }
  }

  async function google() {
    const resultado = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (resultado.error) {
      toast.error("Não foi possível entrar com o Google.");
      return;
    }
    if (resultado.redirected) return;
    navigate({ to: "/admin", replace: true });
  }

  return (
    <section className="mx-auto flex max-w-md flex-col px-4 py-16 sm:px-6">
      <h1 className="text-2xl font-semibold text-foreground">Área reservada</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Acesso à gestão de conteúdos do sítio da ADEM.
      </p>

      <form onSubmit={submeter} className="mt-8 grid gap-4 rounded-xl border border-border bg-card p-6">
        {modo === "registar" && (
          <div className="grid gap-1.5">
            <label htmlFor="nome" className="text-sm font-medium">
              Nome
            </label>
            <input
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              maxLength={100}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
        )}

        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm font-medium">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            required
            maxLength={255}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="palavra" className="text-sm font-medium">
            Palavra-passe
          </label>
          <input
            id="palavra"
            type="password"
            required
            minLength={8}
            maxLength={72}
            value={palavra}
            onChange={(e) => setPalavra(e.target.value)}
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={ocupado}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {ocupado && <Loader2 className="h-4 w-4 animate-spin" />}
          {modo === "entrar" ? "Entrar" : "Criar conta"}
        </button>

        <button
          type="button"
          onClick={google}
          className="rounded-md border border-input px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Continuar com Google
        </button>

        <button
          type="button"
          onClick={() => setModo(modo === "entrar" ? "registar" : "entrar")}
          className="text-sm text-primary underline-offset-4 hover:underline"
        >
          {modo === "entrar" ? "Não tem conta? Registar" : "Já tem conta? Entrar"}
        </button>
      </form>
    </section>
  );
}
