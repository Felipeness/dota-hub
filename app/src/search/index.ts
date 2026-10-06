import MiniSearch, { type SearchResult } from "minisearch";
import type { ConteudoItem, HeroiResumo, JogadorResumo, Objetivo, Rota, Time } from "../data/schemas";
import { normalizar } from "../routes/filtros";

const TIPOS = ["rota", "objetivo", "termo", "heroi", "jogador", "time"] as const;
export type Achado = { tipo: (typeof TIPOS)[number]; id: string; titulo: string; link: string };
type Doc = Achado & { chave: string; texto: string };
export type Busca = MiniSearch<Doc>;

type Fontes = {
  rotas: Rota[]; objetivos: Objetivo[]; termos: ConteudoItem[];
  herois?: HeroiResumo[]; jogadores?: JogadorResumo[]; times?: Time[];
};

export function construirIndice({ rotas, objetivos, termos, herois = [], jogadores = [], times = [] }: Fontes): Busca {
  const busca: Busca = new MiniSearch<Doc>({
    idField: "chave", fields: ["titulo", "texto"], storeFields: ["tipo", "id", "titulo", "link"],
    processTerm: normalizar, searchOptions: { prefix: true, boost: { titulo: 3 } },
  });
  busca.addAll([
    ...rotas.map((r) => ({ chave: `rota:${r.id}`, tipo: "rota" as const, id: r.id, titulo: `${r.id} · ${r.pergunta}`, texto: r.titulo, link: `/rotas/${r.id}` })),
    ...objetivos.map((o) => ({ chave: `objetivo:${o.id}`, tipo: "objetivo" as const, id: o.id, titulo: o.nome, texto: o.tipo, link: `/mapa/${o.id}` })),
    ...termos.map((t) => ({ chave: `termo:${t.id}`, tipo: "termo" as const, id: t.id, titulo: t.titulo, texto: t.secoes.basico, link: `/glossario/${t.id}` })),
    ...herois.map((h) => ({ chave: `heroi:${h.id}`, tipo: "heroi" as const, id: h.id, titulo: h.nome, texto: h.resumo, link: `/herois/${h.id}` })),
    ...jogadores.map((j) => ({ chave: `jogador:${j.id}`, tipo: "jogador" as const, id: j.id, titulo: j.nome, texto: `${j.time ?? ""} ${j.amostra}`, link: `/jogadores/${j.id}` })),
    ...times.map((t) => ({ chave: `time:${t.id}`, tipo: "time" as const, id: t.id, titulo: t.nome, texto: t.jogadores.join(" "), link: `/times/${t.id}` })),
  ]);
  return busca;
}

const ehTipo = (valor: unknown): valor is Achado["tipo"] => TIPOS.some((t) => t === valor);
const ehAchado = (r: SearchResult): r is SearchResult & Achado =>
  ehTipo(r.tipo) && typeof r.id === "string" && typeof r.titulo === "string" && typeof r.link === "string";
const comoAchado = ({ tipo, id, titulo, link }: Achado): Achado => ({ tipo, id, titulo, link });

export function buscar(busca: Busca, consulta: string, limite = 20): Achado[] {
  if (!consulta.trim()) return [];
  const alvo = normalizar(consulta.trim());
  // O BM25 quebra "MA-R-01" em tokens e pode ranquear M-R-01 acima; id exato sempre vem primeiro.
  const idExatoPrimeiro = (a: Achado, b: Achado) => Number(normalizar(b.id) === alvo) - Number(normalizar(a.id) === alvo);
  return busca.search(consulta).filter(ehAchado).toSorted(idExatoPrimeiro).slice(0, limite).map(comoAchado);
}

export function sugerir(busca: Busca, consulta: string): string[] {
  if (!consulta.trim()) return [];
  return busca.search(consulta, { fuzzy: 0.3, prefix: false }).slice(0, 3).map((r) => String(r.titulo));
}
