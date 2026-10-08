import MiniSearch, { type SearchResult } from "minisearch";
import type { ConteudoItem, HeroiResumo, JogadorResumo, Objetivo, RotaResumo, Time, UnidadeResumo } from "../data/schemas";
import { textoExtra } from "../glossary/filtros";
import { normalizar } from "../routes/filtros";
import type { TimeNoIndice } from "../times/schemas";

const TIPOS = ["rota", "objetivo", "termo", "heroi", "jogador", "time", "atlas", "unidade", "habilidade"] as const;
export type Achado = { tipo: (typeof TIPOS)[number]; id: string; titulo: string; link: string; icone: string | null };
export type Doc = Achado & { chave: string; texto: string };
export type Busca = MiniSearch<Doc>;

type Fontes = {
  rotas: Pick<RotaResumo, "id" | "pergunta" | "titulo">[]; objetivos: Objetivo[]; termos: ConteudoItem[];
  herois?: HeroiResumo[]; jogadores?: JogadorResumo[]; times?: Time[]; atlas?: readonly TimeNoIndice[];
  unidades?: readonly UnidadeResumo[];
};

export function construirIndice({ rotas, objetivos, termos, herois = [], jogadores = [], times = [], atlas = [], unidades = [] }: Fontes): Busca {
  const busca: Busca = new MiniSearch<Doc>({
    idField: "chave", fields: ["titulo", "texto"], storeFields: ["tipo", "id", "titulo", "link", "icone"],
    processTerm: normalizar, searchOptions: { prefix: true, boost: { titulo: 3 } },
  });
  busca.addAll([
    ...rotas.map((r) => ({ chave: `rota:${r.id}`, tipo: "rota" as const, id: r.id, titulo: `${r.id} · ${r.pergunta}`, texto: r.titulo, link: `/rotas/${r.id}`, icone: null })),
    ...objetivos.map((o) => ({ chave: `objetivo:${o.id}`, tipo: "objetivo" as const, id: o.id, titulo: o.nome, texto: o.tipo, link: `/mapa/${o.id}`, icone: null })),
    ...termos.map((t) => ({
      chave: `termo:${t.id}`, tipo: "termo" as const, id: t.id, titulo: t.titulo, texto: t.secoes.basico, link: `/glossario/${t.id}`,
      icone: iconeDoItem(textoExtra(t, "item")),
    })),
    ...herois.map((h) => ({ chave: `heroi:${h.id}`, tipo: "heroi" as const, id: h.id, titulo: h.nome, texto: h.resumo, link: `/herois/${h.id}`, icone: `/data/retratos/herois/${h.id}.webp` })),
    ...jogadores.map((j) => ({ chave: `jogador:${j.id}`, tipo: "jogador" as const, id: j.id, titulo: j.nome, texto: `${j.time ?? ""} ${j.amostra}`, link: `/jogadores/${j.id}`, icone: null })),
    ...times.map((t) => ({ chave: `time:${t.id}`, tipo: "time" as const, id: t.id, titulo: t.nome, texto: t.jogadores.join(" "), link: `/jogadores/times/${t.id}`, icone: null })),
    ...atlas.map((t) => ({ chave: `atlas:${t.id}`, tipo: "atlas" as const, id: t.id, titulo: `${t.nome} (${t.tag})`, texto: `${t.tag} ${t.estilo}`, link: `/times/${t.id}`, icone: null })),
    ...docsDeUnidades(unidades),
  ]);
  return busca;
}

const iconeDoItem = (item: string | null): string | null => (item ? `/data/retratos/itens/${item}.webp` : null);
const iconeDaHabilidade = (icone: string | null): string | null => (icone ? `/data/icones/${icone}.webp` : null);

// Habilidade repetida (Perfurante está em vários creeps) entra uma vez, ligada à primeira unidade.
export function docsDeUnidades(unidades: readonly UnidadeResumo[]): Doc[] {
  const habilidades = new Map<string, Doc>();
  for (const u of unidades) {
    for (const h of u.habilidades) {
      if (habilidades.has(h.id)) continue;
      const titulo = h.nome_en ? `${h.nome} (${h.nome_en})` : h.nome;
      habilidades.set(h.id, { chave: `habilidade:${h.id}`, tipo: "habilidade", id: h.id, titulo, texto: u.nome, link: `/glossario/unidades/${u.id}#${h.id}`, icone: iconeDaHabilidade(h.icone) });
    }
  }
  const docsUnidade = unidades.map((u): Doc => ({ chave: `unidade:${u.id}`, tipo: "unidade", id: u.id, titulo: u.nome, texto: `${u.papel} ${u.id}`, link: `/glossario/unidades/${u.id}`, icone: null }));
  return [...docsUnidade, ...habilidades.values()];
}

const ehTipo = (valor: unknown): valor is Achado["tipo"] => TIPOS.some((t) => t === valor);
const ehAchado = (r: SearchResult): r is SearchResult & Achado =>
  ehTipo(r.tipo) && typeof r.id === "string" && typeof r.titulo === "string" && typeof r.link === "string" &&
  (r.icone === null || typeof r.icone === "string");
const comoAchado = ({ tipo, id, titulo, link, icone }: Achado): Achado => ({ tipo, id, titulo, link, icone });

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
