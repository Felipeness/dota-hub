import type { Heroi, Spike } from "../data/schemas";
import { minutoComoTexto } from "../data/schemas";

// Fim de frase: ponto, exclamação ou interrogação, espaço e letra maiúscula. "4.171" e "6,9" não quebram.
const FIM_DA_PRIMEIRA_FRASE = /^(.+?[.!?])\s+(?=\p{Lu})/su;
const ITENS_EM_DESTAQUE = 3;

export const urlDoRetrato = (id: string) => `/data/retratos/herois/${id}.webp`;

export function dividirResumo(texto: string): { abertura: string; resto: string } {
  const achado = FIM_DA_PRIMEIRA_FRASE.exec(texto);
  if (!achado?.[1]) return { abertura: texto, resto: "" };
  return { abertura: achado[1], resto: texto.slice(achado[0].length) };
}

type ItemCore = Heroi["guia"]["itens_core"][number];

/** Linha do tempo da build: itens com minuto_alvo primeiro (do mais cedo ao mais tarde), sem minuto por último. */
export function itensCoreNaLinhaDoTempo(itens: readonly ItemCore[]): ItemCore[] {
  return [...itens].sort((a, b) => (a.minuto_alvo ?? Infinity) - (b.minuto_alvo ?? Infinity));
}

export type EventoDaBuild =
  | Readonly<{ tipo: "item"; minuto: number | null; item: ItemCore }>
  | Readonly<{ tipo: "spike"; minuto: number | null; spike: Spike }>;

const fonteDoSpike = (s: Pick<Spike, "marco" | "faixa">) => `Power spike: ${s.marco} (${s.faixa})`;

/**
 * Linha do tempo da build e dos power spikes juntos, por minuto. Spikes já citados como fonte do "porquê" de algum
 * item core (ex.: o spike "Null Talisman e Magic Wand" que explica o item Null Talisman) não repetem na lista.
 */
export function linhaDoTempoDaBuild(itens: readonly ItemCore[], spikes: readonly Spike[]): EventoDaBuild[] {
  const itensOrdenados = itensCoreNaLinhaDoTempo(itens);
  const fontesJaMostradas = new Set(itensOrdenados.flatMap((i) => (i.porque ? [i.porque.fonte] : [])));
  const eventos: EventoDaBuild[] = [
    ...itensOrdenados.map((item): EventoDaBuild => ({ tipo: "item", minuto: item.minuto_alvo, item })),
    ...spikes.filter((s) => !fontesJaMostradas.has(fonteDoSpike(s))).map((spike): EventoDaBuild => ({ tipo: "spike", minuto: spike.minuto, spike })),
  ];
  return eventos.toSorted((a, b) => (a.minuto ?? Infinity) - (b.minuto ?? Infinity));
}

export function destaquesDoHeroi({ guia }: Pick<Heroi, "guia">): [string, string][] {
  const { nivel, minuto_tipico } = guia.condicao_para_farmar;
  const selva: [string, string] = ["Selva a partir do", minuto_tipico === null ? `nível ${nivel}` : `nível ${nivel} · ${minutoComoTexto(minuto_tipico)}`];
  const comMinuto = guia.itens_core.flatMap((i): [string, string][] =>
    i.minuto_alvo === null ? [] : [[i.nome_curto, minutoComoTexto(i.minuto_alvo)]]);
  // Alguns heróis não têm minuto_alvo em nenhum item core (sem dado de timing); mostra os itens sem horário em vez de sumir.
  const itens = comMinuto.length > 0
    ? comMinuto
    : guia.itens_core.map((i): [string, string] => [i.nome_curto, "sem minuto"]);
  return [selva, ...itens.slice(0, ITENS_EM_DESTAQUE)];
}
