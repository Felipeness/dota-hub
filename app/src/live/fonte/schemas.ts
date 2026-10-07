// Só os campos que o app usa. URLs de avatar e logo ficam de fora de propósito (privacidade, ver a decisão técnica).
import { z } from "zod";

const texto = z.string().nullable().optional().transform((v) => v ?? null);

export const jogadorFonte = z.object({
  profile: z.object({ account_id: z.number(), personaname: texto }).nullable().optional(),
  rank_tier: z.number().nullable().optional(),
});
export const vitoriasFonte = z.object({ win: z.number(), lose: z.number() });
export const heroisDaContaFonte = z.array(z.object({ hero_id: z.coerce.number(), games: z.number(), win: z.number() }));
export const partidasRecentesFonte = z.array(z.object({
  match_id: z.number(), player_slot: z.number(), radiant_win: z.boolean().nullable(), hero_id: z.number(),
  start_time: z.number(), duration: z.number(), kills: z.number(), deaths: z.number(), assists: z.number(),
  lane_role: z.number().nullable().optional(), version: z.number().nullable().optional(),
}));
export const buscaFonte = z.array(z.object({ account_id: z.number(), personaname: texto, last_match_time: texto }));

const lanePos = z.record(z.string(), z.record(z.string(), z.number()));
/** Partida sem análise da fonte vem sem as listas por tempo; ausente ou null vira lista vazia. */
const lista = <T extends z.ZodType>(item: T) => z.array(item).nullable().optional().transform((v) => v ?? []);
const noTempo = z.object({ time: z.number(), key: z.coerce.string() });
const wardNoTempo = z.object({ time: z.number(), x: z.number(), y: z.number() });
export const partidaFonte = z.object({
  match_id: z.number(),
  duration: z.number(),
  radiant_win: z.boolean().nullable().optional().transform((v) => v ?? null),
  objectives: lista(z.object({ time: z.number(), type: z.string(), team: z.number().optional() })),
  teamfights: lista(z.object({
    start: z.number(), end: z.number(),
    players: z.array(z.object({ deaths_pos: lanePos.nullable().optional() })),
  })),
  players: z.array(z.object({
    account_id: z.number().nullable().optional(), player_slot: z.number(), hero_id: z.number(),
    lane_pos: lanePos.nullable().optional(), lane_role: z.number().nullable().optional(),
    kills: z.number(), deaths: z.number(), assists: z.number(),
    gold_t: lista(z.number()), xp_t: lista(z.number()), lh_t: lista(z.number()), networth_t: lista(z.number()),
    purchase_log: lista(noTempo), kills_log: lista(noTempo), deaths_log: lista(noTempo), runes_log: lista(noTempo),
    obs_log: lista(wardNoTempo), sen_log: lista(wardNoTempo), buyback_log: lista(z.object({ time: z.number() })),
    ability_upgrades_arr: lista(z.number()),
    // Troca só do encantamento vem sem item_neutral.
    neutral_item_history: lista(z.object({ time: z.number(), item_neutral: z.string().optional() })),
  })),
});

export const itensFonte = z.record(z.string(), z.object({
  id: z.number(), dname: texto, cost: z.number().nullable().optional().transform((v) => v ?? null),
  tier: z.number().nullable().optional().transform((v) => v ?? null),
  // Só o que importa é se o item é montado; a lista de peças fica de fora.
  components: z.array(z.string()).nullable().optional().transform((v) => (v ?? []).length > 0),
}));
export const idsDeHabilidadesFonte = z.record(z.string(), z.string());
export const habilidadesFonte = z.record(z.string(), z.object({ dname: texto }));
const percentis = z.array(z.object({ percentile: z.number(), value: z.number() }));
export const benchmarksFonte = z.object({
  hero_id: z.coerce.number(),
  result: z.object({ gold_per_min: percentis, xp_per_min: percentis, last_hits_per_min: percentis }),
});

export const timeFonte = z.object({
  team_id: z.number(), name: texto, wins: z.number(), losses: z.number(), last_match_time: z.number().nullable().optional(),
});
export const timesFonte = z.array(timeFonte);
/** A fonte responde corpo vazio (o cliente entrega null) ou {} para time que não existe. */
export const timeOuNadaFonte = z.union([timeFonte, z.null(), z.strictObject({}).transform(() => null)]);
export const jogadoresDoTimeFonte = z.array(z.object({
  account_id: z.number(), name: texto, games_played: z.number(), wins: z.number(),
  is_current_team_member: z.boolean().nullable().optional(),
}));
export const partidasDoTimeFonte = z.array(z.object({
  match_id: z.number(), radiant_win: z.boolean().nullable(), radiant: z.boolean(), duration: z.number(),
  start_time: z.number(), league_name: texto, opposing_team_name: texto,
}));
export const nomesDeHeroisFonte = z.record(z.string(), z.object({ id: z.number(), name: z.string(), localized_name: z.string() }));

export type PartidaRecenteFonte = z.infer<typeof partidasRecentesFonte>[number];
export type PartidaFonte = z.infer<typeof partidaFonte>;
export type JogadorDaPartidaFonte = PartidaFonte["players"][number];
export type ItensFonte = z.infer<typeof itensFonte>;
export type BenchmarksFonte = z.infer<typeof benchmarksFonte>;
export type TimeFonte = z.infer<typeof timeFonte>;
