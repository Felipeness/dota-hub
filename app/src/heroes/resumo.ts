import type { Heroi } from "../data/schemas";
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
