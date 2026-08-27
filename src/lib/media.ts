import { supabase } from "@/integrations/supabase/client";

const BUCKET = "media";
/** ~10 anos em segundos — o URL assinado é guardado na base de dados. */
const EXPIRA = 60 * 60 * 24 * 365 * 10;

export async function carregarFicheiro(ficheiro: File): Promise<string> {
  const extensao = ficheiro.name.split(".").pop()?.toLowerCase() ?? "bin";
  const caminho = `${crypto.randomUUID()}.${extensao}`;

  const { error } = await supabase.storage.from(BUCKET).upload(caminho, ficheiro, {
    cacheControl: "31536000",
    upsert: false,
  });
  if (error) throw error;

  const { data, error: erroUrl } = await supabase.storage
    .from(BUCKET)
    .createSignedUrl(caminho, EXPIRA);
  if (erroUrl || !data) throw erroUrl ?? new Error("Não foi possível gerar o endereço da imagem.");

  return data.signedUrl;
}
