import { useEffect, useState } from "react";
import { z } from "zod";
import { loadJson } from "../data/load";
import { heroisSchema } from "../data/schemas";
import { erroAoVivo, type ErroAoVivo } from "../live/erros";
import { registrarNoConsole } from "../live/registro";
import { useServicosAoVivo } from "../live/servicos";
import type { GuiaDraft, HeroId } from "./guia";
import type { HeroiDraft, Matchups, Placar } from "./pontuacao";

// Fronteira com o OpenDota e com os guias: tudo passa pelo zod aqui e sai nos tipos do draft.

const VALIDADE_HEROSTATS_S = 6 * 3_600;
const VALIDADE_MATCHUPS_S = 24 * 3_600;
const PREFIXO_NPC = "npc_dota_hero_";

export const heroStatsSchema = z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  localized_name: z.string(),
  roles: z.array(z.string()).default([]),
  "7_pick": z.number().nullish(),
  "7_win": z.number().nullish(),
}));

export const matchupsSchema = z.array(z.object({ hero_id: z.number().int(), games_played: z.number().int(), wins: z.number().int() }));

const guiaArquivoSchema = z.object({
  hero_id: z.number().int(),
  guia: z.object({
    bom_quando: z.array(z.string()),
    evitar_quando: z.array(z.string()),
    momento_do_draft: z.string(),
    itens_situacionais: z.array(z.object({ nome: z.string(), quando: z.string() })).default([]),
  }),
}).transform((h): GuiaDraft => ({
  heroId: h.hero_id, bom: h.guia.bom_quando, evitar: h.guia.evitar_quando,
  momento: h.guia.momento_do_draft, itensSituacionais: h.guia.itens_situacionais,
}));

export function paraHeroisDraft(stats: z.infer<typeof heroStatsSchema>): HeroiDraft[] {
  return stats
    .map((h) => ({
      id: h.id, nome: h.localized_name, npc: h.name.replace(PREFIXO_NPC, ""), funcoes: h.roles,
      divine: { jogos: h["7_pick"] ?? 0, vitorias: h["7_win"] ?? 0 },
    }))
    .toSorted((a, b) => a.nome.localeCompare(b.nome));
}

export function paraMatchups(heroi: HeroId, linhas: z.infer<typeof matchupsSchema>): [HeroId, ReadonlyMap<HeroId, Placar>] {
  return [heroi, new Map(linhas.map((l) => [l.hero_id, { jogos: l.games_played, vitorias: l.wins }]))];
}

/** "Nature's Prophet" vira natures_prophet: o nome do retrato que o export grava. */
export const slugDoHeroi = (nome: string) => nome.toLowerCase().replace(/'/g, "").replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
export const retratoLocal = (nome: string) => `/data/retratos/herois/${slugDoHeroi(nome)}.webp`;
export const retratoDoCdn = (npc: string) => `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${npc}.png`;

export type Guias = Readonly<{ guias: readonly GuiaDraft[]; paginas: ReadonlyMap<HeroId, string>; falhas: number }>;

/** Os 22 guias (herois.json lista quais existem). Um guia que não carrega só sai dos motivos; o resto segue. */
export function useGuias(): Guias | null {
  const [guias, setGuias] = useState<Guias | null>(null);
  useEffect(() => {
    let vivo = true;
    carregarGuias().then((g) => { if (vivo) setGuias(g); });
    return () => { vivo = false; };
  }, []);
  return guias;
}

async function carregarGuias(): Promise<Guias> {
  const indice = await loadJson("/data/herois.json", heroisSchema);
  if (!indice.ok) {
    registrarNoConsole({ nivel: "warn", operacao: "draft-guias", codigo: null, detalhe: indice.motivo });
    return { guias: [], paginas: new Map(), falhas: 1 };
  }
  // São 22 arquivos estáticos do próprio site: o paralelismo é limitado pela lista.
  const resultados = await Promise.all(indice.dados.map((h) => loadJson(`/data/herois/${h.id}.json`, guiaArquivoSchema)));
  const falhas = resultados.flatMap((r) => (r.ok ? [] : [r.motivo]));
  falhas.forEach((detalhe) => registrarNoConsole({ nivel: "warn", operacao: "draft-guias", codigo: null, detalhe }));
  return {
    guias: resultados.flatMap((r) => (r.ok ? [r.dados] : [])),
    paginas: new Map(indice.dados.map((h) => [h.hero_id, h.id])),
    falhas: falhas.length,
  };
}

export type EstadoDosHerois =
  | { estado: "carregando" }
  | { estado: "ok"; herois: readonly HeroiDraft[] }
  | { estado: "erro"; erro: ErroAoVivo };

export function useHeroStats(tentativa: number): EstadoDosHerois {
  const { consultar } = useServicosAoVivo();
  const [estado, setEstado] = useState<EstadoDosHerois>({ estado: "carregando" });
  useEffect(() => {
    let vivo = true;
    setEstado({ estado: "carregando" });
    consultar({ caminho: "/heroStats", schema: heroStatsSchema, validadeS: VALIDADE_HEROSTATS_S })
      .then((r) => { if (vivo) setEstado(r.ok ? { estado: "ok", herois: paraHeroisDraft(r.dados.valor) } : { estado: "erro", erro: r.erro }); })
      .catch((causa: unknown) => {
        registrarNoConsole({ nivel: "error", operacao: "draft-herostats", codigo: "INTERNO", detalhe: String(causa) });
        if (vivo) setEstado({ estado: "erro", erro: erroAoVivo("INTERNO") });
      });
    return () => { vivo = false; };
  }, [consultar, tentativa]);
  return estado;
}

export type EstadoDosMatchups = Readonly<{ matchups: Matchups; carregando: boolean; erro: ErroAoVivo | null; tentarDeNovo: () => void }>;

/** Busca só os matchups que faltam e soma ao que já veio: escolher o 3º herói não apaga os motivos dos dois primeiros. */
export function useMatchups(ids: readonly HeroId[]): EstadoDosMatchups {
  const { consultar } = useServicosAoVivo();
  const [matchups, setMatchups] = useState<Matchups>(new Map());
  const [erro, setErro] = useState<ErroAoVivo | null>(null);
  const [tentativa, setTentativa] = useState(0);
  const faltando = ids.filter((id) => !matchups.has(id)).toSorted((a, b) => a - b).join(",");

  useEffect(() => {
    if (faltando === "") return;
    let vivo = true;
    setErro(null);
    // No máximo 10 heróis no draft; a fila do OpenDota já espaça as chamadas.
    const pedidos = faltando.split(",").map(Number).map(async (id) => {
      const r = await consultar({ caminho: `/heroes/${id}/matchups`, schema: matchupsSchema, validadeS: VALIDADE_MATCHUPS_S });
      return r.ok ? { ok: true as const, par: paraMatchups(id, r.dados.valor) } : { ok: false as const, erro: r.erro };
    });
    Promise.all(pedidos)
      .then((respostas) => {
        if (!vivo) return;
        const novos = respostas.flatMap((r) => (r.ok ? [r.par] : []));
        if (novos.length > 0) setMatchups((antes) => new Map([...antes, ...novos]));
        setErro(respostas.find((r) => !r.ok)?.erro ?? null);
      })
      .catch((causa: unknown) => {
        registrarNoConsole({ nivel: "error", operacao: "draft-matchups", codigo: "INTERNO", detalhe: String(causa) });
        if (vivo) setErro(erroAoVivo("INTERNO"));
      });
    return () => { vivo = false; };
  }, [faltando, consultar, tentativa]);

  return { matchups, carregando: faltando !== "" && erro === null, erro, tentarDeNovo: () => setTentativa((n) => n + 1) };
}
