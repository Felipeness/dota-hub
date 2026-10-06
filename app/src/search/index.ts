import MiniSearch, { type SearchResult } from "minisearch";
import type { ConteudoItem, Objetivo, Rota } from "../data/schemas";
import { normalizar } from "../routes/filtros";

export type Achado = { tipo: "rota" | "objetivo" | "termo"; id: string; titulo: string; link: string };
type Doc = Achado & { chave: string; texto: string };
export type Busca = MiniSearch<Doc>;

type Fontes = { rotas: Rota[]; objetivos: Objetivo[]; termos: ConteudoItem[] };

export function construirIndice({ rotas, objetivos, termos }: Fontes): Busca {
  const busca: Busca = new MiniSearch<Doc>({
    idField: "chave", fields: ["titulo", "texto"], storeFields: ["tipo", "id", "titulo", "link"],
    processTerm: normalizar, searchOptions: { prefix: true, boost: { titulo: 3 } },
  });
  busca.addAll([
    ...rotas.map((r) => ({ chave: `rota:${r.id}`, tipo: "rota" as const, id: r.id, titulo: `${r.id} · ${r.pergunta}`, texto: r.titulo, link: `/rotas/${r.id}` })),
    ...objetivos.map((o) => ({ chave: `objetivo:${o.id}`, tipo: "objetivo" as const, id: o.id, titulo: o.nome, texto: o.tipo, link: `/mapa/${o.id}` })),
    ...termos.map((t) => ({ chave: `termo:${t.id}`, tipo: "termo" as const, id: t.id, titulo: t.titulo, texto: t.secoes.basico, link: `/glossario/${t.id}` })),
  ]);
  return busca;
}

const TIPOS = ["rota", "objetivo", "termo"];
const ehAchado = (r: SearchResult): r is SearchResult & Achado =>
  TIPOS.includes(r.tipo) && typeof r.id === "string" && typeof r.titulo === "string" && typeof r.link === "string";
const comoAchado = ({ tipo, id, titulo, link }: Achado): Achado => ({ tipo, id, titulo, link });

export function buscar(busca: Busca, consulta: string, limite = 20): Achado[] {
  if (!consulta.trim()) return [];
  return busca.search(consulta).filter(ehAchado).slice(0, limite).map(comoAchado);
}

export function sugerir(busca: Busca, consulta: string): string[] {
  if (!consulta.trim()) return [];
  return busca.search(consulta, { fuzzy: 0.3, prefix: false }).slice(0, 3).map((r) => String(r.titulo));
}
