import type { ConteudoItem } from "../data/schemas";

export type Trecho = { texto: string; termo: ConteudoItem | null };

const normaliza = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const escapaRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const SOMENTE_NUMERO = /^[\d.,%+-]+$/;

function sinonimosDoTermo(termo: ConteudoItem): string[] {
  const extra = termo.extras.sinonimos;
  return [termo.titulo, ...(Array.isArray(extra) ? extra : [])];
}

type Candidato = { termo: ConteudoItem; sinonimo: string };

// Sinônimo mais longo primeiro: "stack duplo" precisa ganhar de "stack" quando os dois aparecem no texto.
function candidatos(termos: readonly ConteudoItem[]): Candidato[] {
  return termos
    .flatMap((termo) => sinonimosDoTermo(termo).map((sinonimo) => ({ termo, sinonimo })))
    .filter(({ sinonimo }) => sinonimo.trim().length > 1 && !SOMENTE_NUMERO.test(sinonimo.trim()))
    .toSorted((a, b) => b.sinonimo.length - a.sinonimo.length);
}

// Spans de link markdown ("[texto](url)") para nunca marcar um termo dentro de um link.
function spansDeLink(texto: string): Array<[number, number]> {
  return [...texto.matchAll(/\[[^\]]+\]\([^)]+\)/g)].map((m) => [m.index, m.index + m[0].length]);
}

const sobrepoe = (spans: ReadonlyArray<[number, number]>, inicio: number, fim: number) =>
  spans.some(([a, b]) => inicio < b && fim > a);

/**
 * Marca a 1ª ocorrência de cada termo do glossário (por título ou sinônimo) num bloco de texto.
 * Não marca dentro de links markdown nem sinônimos puramente numéricos. Cada termo é marcado no máximo
 * uma vez por chamada: passar cada "bloco" de texto (parágrafo, item de lista) em chamadas separadas
 * é o que garante "só a 1ª ocorrência por bloco" pedido no requisito.
 */
export function marcarTermos(texto: string, termos: readonly ConteudoItem[]): Trecho[] {
  const normalizado = normaliza(texto);
  const linksSpans = spansDeLink(texto);
  const achados: Array<{ inicio: number; fim: number; termo: ConteudoItem }> = [];
  const idsMarcados = new Set<string>();

  for (const { termo, sinonimo } of candidatos(termos)) {
    if (idsMarcados.has(termo.id)) continue;
    const alvo = normaliza(sinonimo);
    if (!normalizado.includes(alvo)) continue;
    const regex = new RegExp(`(?<![\\p{L}\\p{N}])${escapaRegex(alvo)}(?![\\p{L}\\p{N}])`, "u");
    const match = regex.exec(normalizado);
    if (!match) continue;
    const inicio = match.index;
    const fim = inicio + match[0].length;
    if (sobrepoe(linksSpans, inicio, fim)) continue;
    if (achados.some((a) => inicio < a.fim && fim > a.inicio)) continue;
    achados.push({ inicio, fim, termo });
    idsMarcados.add(termo.id);
  }
  achados.sort((a, b) => a.inicio - b.inicio);

  const trechos: Trecho[] = [];
  let cursor = 0;
  for (const { inicio, fim, termo } of achados) {
    if (inicio > cursor) trechos.push({ texto: texto.slice(cursor, inicio), termo: null });
    trechos.push({ texto: texto.slice(inicio, fim), termo });
    cursor = fim;
  }
  if (cursor < texto.length || trechos.length === 0) trechos.push({ texto: texto.slice(cursor), termo: null });
  return trechos;
}
