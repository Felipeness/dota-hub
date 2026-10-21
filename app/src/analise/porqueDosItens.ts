// Porquê tático de cada item do herói (content/porque_itens via guia completo, ou a ficha da posição jogada), pra
// explicar no card por que o item importa, em vez de como o número dos pros foi calculado.
import type { Ficha, Heroi } from "../data/schemas";

export type PorqueDosItens = Readonly<Record<string, string>>;

const doGuia = (guia: Heroi): [string, string][] =>
  [...guia.guia.itens_core, ...guia.guia.itens_situacionais].flatMap((i) => (i.porque ? [[i.item, i.porque.texto]] : []));

function daFicha(ficha: Ficha, posicao: number | null): [string, string][] {
  const daPosicao = ficha.posicoes.find((p) => p.posicao === posicao) ?? ficha.posicoes[0];
  return [...(daPosicao?.build ?? []), ...(daPosicao?.situacionais ?? [])]
    .flatMap((i) => (i.item && i.porque ? [[i.item, i.porque]] : []));
}

/** Guia completo vence a ficha; o primeiro porquê de cada item vale (core antes de situacional). */
export function porqueDosItens(guia: Heroi | null, ficha: Ficha | null, posicao: number | null): PorqueDosItens {
  const pares = guia ? doGuia(guia) : ficha ? daFicha(ficha, posicao) : [];
  return Object.fromEntries([...pares].reverse());
}
