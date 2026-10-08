import { useEffect, useState } from "react";
import { z } from "zod";
import { loadJson } from "../data/load";
import { heroisCatalogoSchema } from "../data/schemas";
import { erroAoVivo, type ErroAoVivo } from "../live/erros";
import { registrarNoConsole } from "../live/registro";
import { useServicosAoVivo } from "../live/servicos";
import type { GuiaDraft, HeroId } from "./guia";
import { ATRIBUTOS, type HeroiDraft, type Matchups, type Placar } from "./pontuacao";

// Fronteira com o OpenDota e com os guias: tudo passa pelo zod aqui e sai nos tipos do draft.

const VALIDADE_HEROSTATS_S = 6 * 3_600;
const VALIDADE_MATCHUPS_S = 24 * 3_600;
const PREFIXO_NPC = "npc_dota_hero_";

export const heroStatsSchema = z.array(z.object({
  id: z.number().int(),
  name: z.string(),
  localized_name: z.string(),
  roles: z.array(z.string()).default([]),
  primary_attr: z.enum(ATRIBUTOS).default("all"),
  "7_pick": z.number().nullish(),
  "7_win": z.number().nullish(),
}));

export const matchupsSchema = z.array(z.object({ hero_id: z.number().int(), games_played: z.number().int(), wins: z.number().int() }));

const draftGuiasSchema = z.array(z.object({
  id: z.string(),
  hero_id: z.number().int(),
  guia: z.object({
    bom_quando: z.array(z.string()),
    evitar_quando: z.array(z.string()),
    momento_do_draft: z.string(),
    itens_situacionais: z.array(z.object({ nome: z.string(), quando: z.string() })).default([]),
  }),
}));

export function paraHeroisDraft(stats: z.infer<typeof heroStatsSchema>): HeroiDraft[] {
  return stats
    .map((h) => ({
      id: h.id, nome: h.localized_name, npc: h.name.replace(PREFIXO_NPC, ""), funcoes: h.roles, atributo: h.primary_attr,
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

/** paginas: hero_id -> id da página em /herois (guia completo ou ficha por posição, todos os heróis do catálogo). */
export type Guias = Readonly<{ guias: readonly GuiaDraft[]; paginas: ReadonlyMap<HeroId, string>; falhas: number }>;

/** Os 22 guias e a página de cada herói (guia ou ficha, pelo catálogo). Um guia que não carrega só sai dos motivos; o resto segue. */
export function useGuias(): Guias | null {
  const [guias, setGuias] = useState<Guias | null>(null);
  useEffect(() => {
    let vivo = true;
    carregarGuias().then((g) => { if (vivo) setGuias(g); });
    return () => { vivo = false; };
  }, []);
  return guias;
}

/** Um arquivo só com o que o draft usa (~13% do peso dos 22 guias inteiros), em vez de baixar cada ficha de herói. */
async function carregarGuias(): Promise<Guias> {
  const [indice, resumo] = await Promise.all([
    loadJson("/data/herois_catalogo.json", heroisCatalogoSchema), loadJson("/data/draft_guias.json", draftGuiasSchema),
  ]);
  if (!indice.ok) {
    registrarNoConsole({ nivel: "warn", operacao: "draft-guias", codigo: null, detalhe: indice.motivo });
    return { guias: [], paginas: new Map(), falhas: 1 };
  }
  if (!resumo.ok) {
    registrarNoConsole({ nivel: "warn", operacao: "draft-guias", codigo: null, detalhe: resumo.motivo });
    return { guias: [], paginas: new Map(indice.dados.map((h) => [h.hero_id, h.id])), falhas: 1 };
  }
  return {
    guias: resumo.dados.map((h): GuiaDraft => ({
      heroId: h.hero_id, bom: h.guia.bom_quando, evitar: h.guia.evitar_quando,
      momento: h.guia.momento_do_draft, itensSituacionais: h.guia.itens_situacionais,
    })),
    paginas: new Map(indice.dados.map((h) => [h.hero_id, h.id])),
    falhas: 0,
  };
}

export type EstadoDosHerois =
  | { estado: "carregando" }
  | { estado: "ok"; herois: readonly HeroiDraft[] }
  | { estado: "erro"; erro: ErroAoVivo };

export function useHeroStats(): [EstadoDosHerois, () => void] {
  const { consultar } = useServicosAoVivo();
  const [estado, setEstado] = useState<EstadoDosHerois>({ estado: "carregando" });
  const [tentativa, setTentativa] = useState(0);
  useEffect(() => {
    let vivo = true;
    consultar({ caminho: "/heroStats", schema: heroStatsSchema, validadeS: VALIDADE_HEROSTATS_S })
      .then((r) => { if (vivo) setEstado(r.ok ? { estado: "ok", herois: paraHeroisDraft(r.dados.valor) } : { estado: "erro", erro: r.erro }); })
      .catch((causa: unknown) => {
        registrarNoConsole({ nivel: "error", operacao: "draft-herostats", codigo: "INTERNO", detalhe: String(causa) });
        if (vivo) setEstado({ estado: "erro", erro: erroAoVivo("INTERNO") });
      });
    return () => { vivo = false; };
  }, [consultar, tentativa]);
  const tentarDeNovo = () => {
    setEstado({ estado: "carregando" });
    setTentativa((n) => n + 1);
  };
  return [estado, tentarDeNovo];
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

  return { matchups, carregando: faltando !== "" && erro === null, erro, tentarDeNovo: () => {
    setErro(null);
    setTentativa((n) => n + 1);
  } };
}
