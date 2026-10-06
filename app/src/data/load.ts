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
  const analise = schema.safeParse(await resposta.json());
  if (!analise.success) return { ok: false, motivo: `formato inesperado em ${path}: ${analise.error.issues[0]?.message ?? ""}` };
  return { ok: true, dados: analise.data };
}
