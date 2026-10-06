import type { ConteudoItem } from "../data/schemas";
import { textoExtra } from "../glossary/filtros";

/** Solos confirmados do herói (chave `solos` do frontmatter); 0 se faltar. */
export function quantosSolos(solo: ConteudoItem): number {
  const n = Number(textoExtra(solo, "solos"));
  return Number.isInteger(n) ? n : 0;
}

export function replaysDoSolo(solo: ConteudoItem): number {
  return solo.origem.basico?.replays.length ?? 0;
}

export function ordenarSolos(solos: readonly ConteudoItem[]): ConteudoItem[] {
  return [...solos].sort((a, b) => quantosSolos(b) - quantosSolos(a));
}
