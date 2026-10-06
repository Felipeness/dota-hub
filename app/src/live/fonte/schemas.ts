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
export const partidaFonte = z.object({
  match_id: z.number(),
  players: z.array(z.object({
    account_id: z.number().nullable().optional(), player_slot: z.number(), hero_id: z.number(),
    lane_pos: lanePos.nullable().optional(), lane_role: z.number().nullable().optional(),
  })),
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
export const nomesDeHeroisFonte = z.record(z.string(), z.object({ id: z.number(), localized_name: z.string() }));

export type PartidaRecenteFonte = z.infer<typeof partidasRecentesFonte>[number];
export type JogadorDaPartidaFonte = z.infer<typeof partidaFonte>["players"][number];
export type TimeFonte = z.infer<typeof timeFonte>;
