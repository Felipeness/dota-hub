import type { Achado, Contexto, Regra } from "./modelo";

/** Concatena os achados de todas as regras; cada regra só lê o Contexto, nunca o resultado de outra. */
export function avaliarRegras(ctx: Contexto, regras: readonly Regra[]): readonly Achado[] {
  return regras.flatMap((regra) => regra.avaliar(ctx));
}
