// Formato de app/public/data/partidas/<match_id>.json, gravado pelo plugin de dev (app/plugins/replayLocal.ts)
// a partir do replay. Fica sem import.meta para o plugin (Node) usar o mesmo schema ao gravar.
import { z } from "zod";

const ponto = { t: z.number(), slot: z.number().int(), x: z.number().min(0).max(1), y: z.number().min(0).max(1) };

export const replayDaPartidaSchema = z.object({
  match_id: z.string().regex(/^\d+$/),
  passo_s: z.number().int().positive(),
  inicio_s: z.number().int(),
  herois: z.array(z.object({
    slot: z.number().int(), heroi: z.string(), conta: z.number().nullable(),
    // Milésimos do mapa aos pares por amostra; -1 = morto naquela amostra (mesmo formato das trajetórias do app).
    xy: z.array(z.number().int()).refine((xy) => xy.length % 2 === 0, "xy precisa de pares"),
  })),
  camps: z.array(z.object({ ...ponto, creeps: z.number().int().positive() })),
  smokes: z.array(z.object(ponto)),
  wards: z.array(z.object({ ...ponto, tipo: z.enum(["observer", "sentry"]) })),
  compras: z.array(z.object({ t: z.number(), slot: z.number().int(), item: z.string() })),
});

export type ReplayDaPartida = z.infer<typeof replayDaPartidaSchema>;
