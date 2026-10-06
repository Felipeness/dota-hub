import { juntarFrescor, type Consultar } from "./consulta";
import { VALIDADE_S, timeEncontrado } from "./contas";
import { erroAoVivo, falha, ok, type RespostaAoVivo } from "./erros";
import { jogadoresDoTimeFonte, partidasDoTimeFonte, timeOuNadaFonte } from "./fonte/schemas";
import type { ResumoTime } from "./tipos";

const MAXIMO_DE_PARTIDAS = 20;

export async function resumoDoTime(consultar: Consultar, id: number): Promise<RespostaAoVivo<ResumoTime>> {
  const time = await consultar({ caminho: `/teams/${id}`, schema: timeOuNadaFonte, validadeS: VALIDADE_S.time });
  if (!time.ok) return time;
  if (!time.dados.valor) return falha(erroAoVivo("NAO_ENCONTRADO"));
  const [jogadores, partidas] = await Promise.all([
    consultar({ caminho: `/teams/${id}/players`, schema: jogadoresDoTimeFonte, validadeS: VALIDADE_S.time }),
    consultar({ caminho: `/teams/${id}/matches`, schema: partidasDoTimeFonte, validadeS: VALIDADE_S.recentes }),
  ]);
  if (!jogadores.ok) return jogadores;
  if (!partidas.ok) return partidas;
  return ok({
    time: timeEncontrado(time.dados.valor),
    jogadores: jogadores.dados.valor.filter((j) => j.is_current_team_member === true)
      .map((j) => ({ id: j.account_id, nome: j.name ?? `Conta ${j.account_id}`, partidas: j.games_played, vitorias: j.wins })),
    partidas: partidas.dados.valor.slice(0, MAXIMO_DE_PARTIDAS).map((p) => ({
      id: String(p.match_id), venceu: p.radiant_win === null ? null : p.radiant === p.radiant_win,
      adversario: p.opposing_team_name ?? "adversário sem nome", campeonato: p.league_name,
      inicio: p.start_time, duracaoS: p.duration,
    })),
    frescor: juntarFrescor(time.dados.frescor, jogadores.dados.frescor, partidas.dados.frescor),
  });
}
