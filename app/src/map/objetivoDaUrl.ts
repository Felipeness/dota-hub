import type { Objetivo } from "../data/schemas";

// /mapa/:id aceita o id do objeto ou o tipo (ex.: /mapa/roshan abre o primeiro poço).
export function objetivoDaUrl(id: string, objetivos: Objetivo[]): Objetivo | undefined {
  return objetivos.find((o) => o.id === id) ?? objetivos.find((o) => o.tipo === id);
}
