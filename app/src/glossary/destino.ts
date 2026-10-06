import type { ConteudoItem } from "../data/schemas";

// Links do glossário são ids crus: termo do glossário ou tipo de objetivo do mapa.
export function destinoDoLink(link: string, termos: ConteudoItem[]): { to: string; rotulo: string } {
  const termo = termos.find((t) => t.id === link);
  return termo ? { to: `/glossario/${termo.id}`, rotulo: termo.titulo } : { to: `/mapa/${link}`, rotulo: `${link} no mapa` };
}
