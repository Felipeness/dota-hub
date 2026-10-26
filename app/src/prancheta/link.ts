// O quadro inteiro (passos, ícones, traços e notas) cabe no link: JSON comprimido com deflate (CompressionStream,
// nativo do navegador) e escrito em base64url no hash. Quadro grande demais para um link vai para os salvos
// (localStorage) ou para um arquivo .json.
import { quadroSchema, type Quadro } from "./quadro";

/** Acima disso o link quebra em apps de mensagem e encurtadores. */
export const TAMANHO_MAXIMO_DO_LINK = 8_000;
const PREFIXO_DO_HASH = "#q=";

export type Leitura = { readonly ok: true; readonly quadro: Quadro } | { readonly ok: false; readonly motivo: string };

async function transformar(bytes: Uint8Array<ArrayBuffer>, fluxo: CompressionStream | DecompressionStream): Promise<Uint8Array<ArrayBuffer>> {
  const saida = new Blob([bytes]).stream().pipeThrough(fluxo);
  return new Uint8Array(await new Response(saida).arrayBuffer());
}

const paraBase64Url = (bytes: Uint8Array) =>
  btoa(Array.from(bytes, (b) => String.fromCharCode(b)).join("")).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");

function deBase64Url(texto: string): Uint8Array<ArrayBuffer> {
  const base64 = texto.replaceAll("-", "+").replaceAll("_", "/");
  return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
}

export async function codificar(quadro: Quadro): Promise<string> {
  const json = new TextEncoder().encode(JSON.stringify(quadro));
  return paraBase64Url(await transformar(json, new CompressionStream("deflate-raw")));
}

export async function decodificar(codigo: string): Promise<Leitura> {
  let texto: string;
  try {
    texto = new TextDecoder().decode(await transformar(deBase64Url(codigo), new DecompressionStream("deflate-raw")));
  } catch (causa) {
    return { ok: false, motivo: `link corrompido: ${String(causa)}` };
  }
  return lerJson(texto);
}

/** Fronteira de entrada (link, arquivo, localStorage): só passa o que o schema aceita. */
export function lerJson(texto: string): Leitura {
  let bruto: unknown;
  try {
    bruto = JSON.parse(texto);
  } catch {
    return { ok: false, motivo: "não é um JSON válido" };
  }
  const quadro = quadroSchema.safeParse(bruto);
  return quadro.success ? { ok: true, quadro: quadro.data } : { ok: false, motivo: "formato de prancheta inválido" };
}

export const hashDoQuadro = (codigo: string) => `${PREFIXO_DO_HASH}${codigo}`;
export const codigoDoHash = (hash: string): string | null => (hash.startsWith(PREFIXO_DO_HASH) ? hash.slice(PREFIXO_DO_HASH.length) : null);

// Salvos no navegador: lista de quadros com nome. Leitura e escrita toleram storage bloqueado (aba anônima).
const CHAVE_DOS_SALVOS = "prancheta:salvos";
export type Salvo = Readonly<{ nome: string; em: string; quadro: Quadro }>;

export function lerSalvos(): Salvo[] {
  let texto: string | null;
  try {
    texto = localStorage.getItem(CHAVE_DOS_SALVOS);
  } catch {
    return [];
  }
  if (!texto) return [];
  const bruto: unknown = (() => { try { return JSON.parse(texto); } catch { return []; } })();
  if (!Array.isArray(bruto)) return [];
  return bruto.flatMap((item: unknown) => {
    if (typeof item !== "object" || item === null || !("nome" in item) || !("em" in item) || !("quadro" in item)) return [];
    const quadro = quadroSchema.safeParse(item.quadro);
    return quadro.success && typeof item.nome === "string" && typeof item.em === "string" ? [{ nome: item.nome, em: item.em, quadro: quadro.data }] : [];
  });
}

/** Grava a lista inteira; devolve false se o navegador recusou (cota cheia ou storage bloqueado). */
export function gravarSalvos(salvos: readonly Salvo[]): boolean {
  try {
    localStorage.setItem(CHAVE_DOS_SALVOS, JSON.stringify(salvos));
    return true;
  } catch {
    return false;
  }
}

export const comSalvo = (salvos: readonly Salvo[], novo: Salvo): Salvo[] => [novo, ...salvos.filter((s) => s.nome !== novo.nome)];
