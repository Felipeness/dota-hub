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

export function destaquesDoHeroi({ guia }: Pick<Heroi, "guia">): [string, string][] {
  const { nivel, minuto_tipico } = guia.condicao_para_farmar;
  const selva: [string, string] = ["Selva a partir do", minuto_tipico === null ? `nível ${nivel}` : `nível ${nivel} · ${minutoComoTexto(minuto_tipico)}`];
  const itens = guia.itens_core
    .flatMap((i): [string, string][] => (i.minuto_alvo === null ? [] : [[i.nome, minutoComoTexto(i.minuto_alvo)]]))
    .slice(0, ITENS_EM_DESTAQUE);
  return [selva, ...itens];
}
