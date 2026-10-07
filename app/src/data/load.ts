import type { z } from "zod";

export type Resultado<T> = { ok: true; dados: T } | { ok: false; motivo: string };

export async function loadJson<T>(path: string, schema: z.ZodType<T>, fetcher: typeof fetch = fetch): Promise<Resultado<T>> {
  let resposta: Response;
  try {
    resposta = await fetcher(path);
  } catch (erro) {
    return { ok: false, motivo: `falha de rede ao buscar ${path}: ${String(erro)}` };
  }
  if (!resposta.ok) return { ok: false, motivo: `arquivo ${path} não encontrado (${resposta.status})` };
  // O servidor de SPA responde 200 com o index.html para um arquivo que não existe.
  if (resposta.headers.get("content-type")?.includes("text/html")) return { ok: false, motivo: `arquivo ${path} não encontrado` };
  let corpo: unknown;
  try {
    corpo = await resposta.json();
  } catch {
    return { ok: false, motivo: `JSON inválido em ${path}` };
  }
  const analise = schema.safeParse(corpo);
  if (!analise.success) return { ok: false, motivo: `formato inesperado em ${path}: ${analise.error.issues[0]?.message ?? ""}` };
  return { ok: true, dados: analise.data };
}
