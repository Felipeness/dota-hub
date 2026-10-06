import type { ConteudoItem } from "../data/schemas";
import { normalizar } from "../routes/filtros";

export const CATEGORIAS = {
  mecanica: "Mecânica", lane: "Lane", farm: "Farm", mapa: "Mapa", objetivo: "Objetivo", runa: "Runa", item: "Item",
  combate: "Combate", visao: "Visão", economia: "Economia", papel: "Papel", estrategia: "Estratégia",
  partida: "Partida e draft", giria: "Gíria", estatistica: "Estatística",
} as const satisfies Record<string, string>;


export function textoExtra(item: ConteudoItem, chave: string): string | null {
  const valor = item.extras[chave];
  return typeof valor === "string" ? valor : null;
}

export function filtrarTermos(termos: readonly ConteudoItem[], { texto, categoria }: { texto: string; categoria: string | null }): ConteudoItem[] {
  const alvo = normalizar(texto.trim());
  return termos.filter((t) =>
    (categoria === null || textoExtra(t, "categoria") === categoria) &&
    normalizar(`${t.titulo} ${t.id}`).includes(alvo));
}
