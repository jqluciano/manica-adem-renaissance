import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Loader2, Pencil, Plus, Trash2, Upload } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { carregarFicheiro } from "@/lib/media";
import { gerarSlug, valoresIniciais, type Campo, type Recurso } from "@/lib/admin-recursos";

type Registo = Record<string, unknown> & { id: string };

export function RecursoCRUD({ recurso }: { recurso: Recurso }) {
  const queryClient = useQueryClient();
  const chave = ["admin", recurso.tabela];
  const [aberto, setAberto] = useState(false);
  const [valores, setValores] = useState<Record<string, unknown>>(valoresIniciais(recurso));
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [aCarregar, setACarregar] = useState<string | null>(null);

  const { data: registos = [], isLoading } = useQuery({
    queryKey: chave,
    queryFn: async () => {
      const { data, error } = await supabase
        .from(recurso.tabela)
        .select("*")
        .order(recurso.ordenarPor, { ascending: recurso.ordenarPor === "ordem" });
      if (error) throw error;
      return (data ?? []) as Registo[];
    },
  });

  const guardar = useMutation({
    mutationFn: async () => {
      const payload: Record<string, unknown> = {};
      for (const campo of recurso.campos) payload[campo.nome] = valores[campo.nome] ?? null;
      if (recurso.campos.some((c) => c.nome === "slug") && !payload["slug"]) {
        payload["slug"] = gerarSlug(String(payload["titulo"] ?? "item"));
      }
      if (editandoId) {
        const { error } = await supabase.from(recurso.tabela).update(payload as never).eq("id", editandoId);
        if (error) throw error;
      } else {
        const { error } = await supabase.from(recurso.tabela).insert(payload as never);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      toast.success(editandoId ? "Registo actualizado." : "Registo criado.");
      queryClient.invalidateQueries({ queryKey: chave });
      queryClient.invalidateQueries({ queryKey: ["conteudo", recurso.tabela] });
      fechar();
    },
    onError: (erro: Error) => toast.error(erro.message),
  });

  const apagar = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from(recurso.tabela).delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success("Registo eliminado.");
      queryClient.invalidateQueries({ queryKey: chave });
      queryClient.invalidateQueries({ queryKey: ["conteudo", recurso.tabela] });
    },
    onError: (erro: Error) => toast.error(erro.message),
  });

  function fechar() {
    setAberto(false);
    setEditandoId(null);
    setValores(valoresIniciais(recurso));
  }

  function editar(registo: Registo) {
    const proximos: Record<string, unknown> = {};
    for (const campo of recurso.campos) proximos[campo.nome] = registo[campo.nome] ?? "";
    setValores(proximos);
    setEditandoId(registo.id);
    setAberto(true);
  }

  async function enviarFicheiro(campo: Campo, ficheiro: File) {
    setACarregar(campo.nome);
    try {
      const url = await carregarFicheiro(ficheiro);
      setValores((v) => ({ ...v, [campo.nome]: url }));
      toast.success("Ficheiro carregado.");
    } catch (erro) {
      toast.error(erro instanceof Error ? erro.message : "Falha ao carregar o ficheiro.");
    } finally {
      setACarregar(null);
    }
  }

  const colunas = recurso.campos.filter((c) => c.coluna);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">{recurso.titulo}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{recurso.descricao}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setValores(valoresIniciais(recurso));
            setEditandoId(null);
            setAberto(true);
          }}
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" /> Adicionar {recurso.singular.toLowerCase()}
        </button>
      </div>

      <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-secondary/40 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              {colunas.map((c) => (
                <th key={c.nome} className="px-4 py-3 font-medium">
                  {c.rotulo}
                </th>
              ))}
              <th className="px-4 py-3 text-right font-medium">Acções</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={colunas.length + 1} className="px-4 py-8 text-center text-muted-foreground">
                  A carregar…
                </td>
              </tr>
            )}
            {!isLoading && registos.length === 0 && (
              <tr>
                <td colSpan={colunas.length + 1} className="px-4 py-8 text-center text-muted-foreground">
                  Ainda não existem registos.
                </td>
              </tr>
            )}
            {registos.map((registo) => (
              <tr key={registo.id} className="border-b border-border/60 last:border-0">
                {colunas.map((c) => (
                  <td key={c.nome} className="px-4 py-3 align-top text-foreground/90">
                    {c.tipo === "boolean"
                      ? registo[c.nome]
                        ? "Sim"
                        : "Não"
                      : String(registo[c.nome] ?? "—")}
                  </td>
                ))}
                <td className="px-4 py-3 text-right">
                  <div className="inline-flex gap-1">
                    <button
                      type="button"
                      onClick={() => editar(registo)}
                      aria-label="Editar"
                      className="rounded-md border border-border p-2 text-foreground transition-colors hover:bg-secondary"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (confirm("Eliminar este registo?")) apagar.mutate(registo.id);
                      }}
                      aria-label="Eliminar"
                      className="rounded-md border border-border p-2 text-destructive transition-colors hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {aberto && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto bg-foreground/50 p-4">
          <div className="my-8 w-full max-w-2xl rounded-xl border border-border bg-background p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-foreground">
              {editandoId ? `Editar ${recurso.singular.toLowerCase()}` : `Novo ${recurso.singular.toLowerCase()}`}
            </h2>

            <form
              className="mt-4 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                guardar.mutate();
              }}
            >
              {recurso.campos.map((campo) => (
                <div key={campo.nome} className="grid gap-1.5">
                  <label htmlFor={campo.nome} className="text-sm font-medium text-foreground">
                    {campo.rotulo}
                  </label>

                  {campo.tipo === "textarea" && (
                    <textarea
                      id={campo.nome}
                      rows={4}
                      required={campo.obrigatorio}
                      value={String(valores[campo.nome] ?? "")}
                      onChange={(e) => setValores((v) => ({ ...v, [campo.nome]: e.target.value }))}
                      className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  )}

                  {campo.tipo === "select" && (
                    <select
                      id={campo.nome}
                      value={String(valores[campo.nome] ?? "")}
                      onChange={(e) => setValores((v) => ({ ...v, [campo.nome]: e.target.value }))}
                      className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      {campo.opcoes?.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  )}

                  {campo.tipo === "boolean" && (
                    <label className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <input
                        id={campo.nome}
                        type="checkbox"
                        checked={Boolean(valores[campo.nome])}
                        onChange={(e) => setValores((v) => ({ ...v, [campo.nome]: e.target.checked }))}
                        className="h-4 w-4 rounded border-input"
                      />
                      Visível no site público
                    </label>
                  )}

                  {campo.tipo === "imagem" && (
                    <div className="grid gap-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <label className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-input px-3 py-2 text-sm transition-colors hover:bg-secondary">
                          {aCarregar === campo.nome ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Upload className="h-4 w-4" />
                          )}
                          Carregar ficheiro
                          <input
                            type="file"
                            accept="image/*,application/pdf"
                            className="hidden"
                            onChange={(e) => {
                              const f = e.target.files?.[0];
                              if (f) void enviarFicheiro(campo, f);
                            }}
                          />
                        </label>
                        {Boolean(valores[campo.nome]) && (
                          <img
                            src={String(valores[campo.nome])}
                            alt=""
                            className="h-12 w-16 rounded border border-border object-cover"
                          />
                        )}
                      </div>
                      <input
                        id={campo.nome}
                        type="url"
                        placeholder="ou colar um endereço"
                        value={String(valores[campo.nome] ?? "")}
                        onChange={(e) => setValores((v) => ({ ...v, [campo.nome]: e.target.value }))}
                        className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                      />
                    </div>
                  )}

                  {(campo.tipo === "text" || campo.tipo === "number" || campo.tipo === "date") && (
                    <input
                      id={campo.nome}
                      type={campo.tipo === "number" ? "number" : campo.tipo === "date" ? "date" : "text"}
                      required={campo.obrigatorio}
                      value={String(valores[campo.nome] ?? "")}
                      onChange={(e) =>
                        setValores((v) => ({
                          ...v,
                          [campo.nome]: campo.tipo === "number" ? Number(e.target.value) : e.target.value,
                        }))
                      }
                      className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  )}

                  {campo.ajuda && <p className="text-xs text-muted-foreground">{campo.ajuda}</p>}
                </div>
              ))}

              <div className="mt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={fechar}
                  className="rounded-md border border-input px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={guardar.isPending}
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                >
                  {guardar.isPending && <Loader2 className="h-4 w-4 animate-spin" />}
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
