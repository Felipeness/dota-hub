type ComId = { id: string };

export type Catalogo = {
  termos: ReadonlySet<string>;
  herois: ReadonlySet<string>;
  rotas: ReadonlySet<string>;
  objetivos: ReadonlyMap<string, string>;
};

export function montarCatalogo(dados: { termos: ComId[]; herois: ComId[]; rotas: ComId[]; objetivos: (ComId & { tipo: string })[] }): Catalogo {
  return {
    termos: new Set(dados.termos.map((t) => t.id)),
    herois: new Set(dados.herois.map((h) => h.id)),
    rotas: new Set(dados.rotas.map((r) => r.id)),
    // Links do glossário citam o objetivo pelo tipo ("roshan") ou pelo id exato.
    objetivos: new Map(dados.objetivos.flatMap((o) => [[o.tipo, o.id], [o.id, o.id]] as const)),
  };
}

export function destinoDoLink(id: string, catalogo: Catalogo): string | null {
  if (catalogo.termos.has(id)) return `/glossario/${id}`;
  if (catalogo.herois.has(id)) return `/herois/${id}`;
  if (catalogo.rotas.has(id)) return `/rotas/${id}`;
  const objetivo = catalogo.objetivos.get(id);
  return objetivo ? `/mapa/${objetivo}` : null;
}

// Links do glossário citam o objetivo pelo tipo ("camp" marca todos os camps) ou pelo id exato.
export function lugaresDoTermo<T extends { id: string; tipo: string }>(links: readonly string[], objetivos: readonly T[]): T[] {
  const alvos = new Set(links);
  return objetivos.filter((o) => alvos.has(o.id) || alvos.has(o.tipo));
}
