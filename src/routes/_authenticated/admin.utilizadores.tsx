import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin/utilizadores")({
  component: Utilizadores,
});

type Perfil = { id: string; email: string | null; nome: string | null; created_at: string };
type Funcao = { user_id: string; role: string };

function Utilizadores() {
  const queryClient = useQueryClient();

  const { data: perfis = [], isLoading } = useQuery({
    queryKey: ["admin", "perfis"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, email, nome, created_at")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Perfil[];
    },
  });

  const { data: funcoes = [] } = useQuery({
    queryKey: ["admin", "funcoes"],
    queryFn: async () => {
      const { data, error } = await supabase.from("user_roles").select("user_id, role");
      if (error) throw error;
      return (data ?? []) as Funcao[];
    },
  });

  const alternar = useMutation({
    mutationFn: async ({ userId, tornarAdmin }: { userId: string; tornarAdmin: boolean }) => {
      if (tornarAdmin) {
        const { error } = await supabase.from("user_roles").insert({ user_id: userId, role: "admin" });
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("user_roles")
          .delete()
          .eq("user_id", userId)
          .eq("role", "admin");
        if (error) throw error;
      }
    },
    onSuccess: () => {
      toast.success("Permissões actualizadas.");
      queryClient.invalidateQueries({ queryKey: ["admin", "funcoes"] });
      queryClient.invalidateQueries({ queryKey: ["ehAdmin"] });
    },
    onError: (erro: Error) => toast.error(erro.message),
  });

  const ehAdmin = (id: string) => funcoes.some((f) => f.user_id === id && f.role === "admin");

  return (
    <div>
      <h1 className="text-2xl font-semibold text-foreground">Utilizadores</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Contas registadas no sítio. Atribua o perfil de administrador a quem deve gerir conteúdos.
      </p>

      <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-card">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-border bg-secondary/40 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Nome</th>
              <th className="px-4 py-3 font-medium">E-mail</th>
              <th className="px-4 py-3 font-medium">Perfil</th>
              <th className="px-4 py-3 text-right font-medium">Acções</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                  A carregar…
                </td>
              </tr>
            )}
            {!isLoading && perfis.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                  Ainda não existem contas registadas.
                </td>
              </tr>
            )}
            {perfis.map((p) => (
              <tr key={p.id} className="border-b border-border/60 last:border-0">
                <td className="px-4 py-3">{p.nome || "—"}</td>
                <td className="px-4 py-3">{p.email || "—"}</td>
                <td className="px-4 py-3">{ehAdmin(p.id) ? "Administrador" : "Utilizador"}</td>
                <td className="px-4 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => alternar.mutate({ userId: p.id, tornarAdmin: !ehAdmin(p.id) })}
                    className="rounded-md border border-input px-3 py-1.5 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    {ehAdmin(p.id) ? "Retirar administrador" : "Tornar administrador"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
