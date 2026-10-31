// Fronteira do modelo de draft com o OpenDota: uma chamada por conta, com os mesmos filtros do backtest
// (export/modelo_draft/dados.py). Quem busca é a tela; aqui só o caminho, o schema e a tradução pura.
import { z } from "zod";
import type { HeroId } from "./guia";
import type { Historico, PartidaDoHistorico } from "./modeloDeJogador";

const PARTIDAS_DE_HISTORICO = 1000;
const LOBBY_DE_LIGA = 1;
const MODOS_VALIDOS: ReadonlySet<number> = new Set([1, 2, 3, 4, 5, 16, 22]);
const LOBBIES_VALIDOS: ReadonlySet<number> = new Set([0, LOBBY_DE_LIGA, 2, 5, 6, 7]);
const ULTIMO_LEAVER_ACEITO = 1;
const SLOTS_DO_RADIANT = 128;

/** significant=0 porque o filtro padrão do OpenDota joga fora as partidas de liga, as únicas públicas de quem está no Immortal Draft. */
export const caminhoDoHistorico = (conta: number): string =>
  `/players/${conta}/matches?limit=${PARTIDAS_DE_HISTORICO}&significant=0&project=hero_id&project=start_time&project=lobby_type&project=game_mode&project=leaver_status`;

export const historicoDaContaFonte = z.array(z.object({
  player_slot: z.number(),
  radiant_win: z.boolean().nullable(),
  hero_id: z.number(),
  start_time: z.number(),
  lobby_type: z.number().nullable().optional(),
  game_mode: z.number().nullable().optional(),
  leaver_status: z.number().nullable().optional(),
}));

type PartidaFonte = z.infer<typeof historicoDaContaFonte>[number];
type PartidaComResultado = PartidaFonte & { radiant_win: boolean };

const temResultado = (p: PartidaFonte): p is PartidaComResultado => p.radiant_win !== null;

const contaNoModelo = (p: PartidaFonte): boolean =>
  MODOS_VALIDOS.has(p.game_mode ?? -1) && LOBBIES_VALIDOS.has(p.lobby_type ?? -1) && (p.leaver_status ?? 0) <= ULTIMO_LEAVER_ACEITO && p.hero_id > 0;

const paraPartida = (p: PartidaComResultado): PartidaDoHistorico => ({
  heroi: p.hero_id satisfies HeroId, venceu: (p.player_slot < SLOTS_DO_RADIANT) === p.radiant_win, inicio: p.start_time, deLiga: p.lobby_type === LOBBY_DE_LIGA,
});

export function paraHistorico(conta: number, partidas: z.infer<typeof historicoDaContaFonte>): Historico {
  return { conta, partidas: partidas.filter(temResultado).filter(contaNoModelo).map(paraPartida) };
}
