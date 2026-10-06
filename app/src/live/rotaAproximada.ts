import type { Mancha } from "../map/trilhas";
import type { Consultar } from "./consulta";
import { LANE_POR_PAPEL, VALIDADE_S, lerId } from "./contas";
import { erroAoVivo, falha, ok, type RespostaAoVivo } from "./erros";
import { partidaFonte, type JogadorDaPartidaFonte } from "./fonte/schemas";
import type { Lane, RotaAproximada } from "./tipos";

const ORIGEM_DA_GRADE = 57;
const ESCALA_DA_GRADE = 142;
const LARGURA_DO_MEIO = 0.15;
const DIGITOS_DA_PARTIDA = 15;
type Regiao = "cima" | "meio" | "baixo";
type Lado = "radiant" | "dire";

const LANE_DA_REGIAO: Record<Lado, Record<Regiao, Lane>> = {
  radiant: { baixo: "safe", meio: "mid", cima: "off" },
  dire: { cima: "safe", meio: "mid", baixo: "off" },
};

const arredondar = (v: number) => Math.round(v * 1_000) / 1_000;
const limitar = (v: number) => Math.min(1, Math.max(0, v));

export const celulaParaNorm = (celula: number) => limitar((celula + 0.5 - ORIGEM_DA_GRADE) / ESCALA_DA_GRADE);

export function manchasDaLane(lanePos: Readonly<Record<string, Readonly<Record<string, number>>>>): Mancha[] {
  const brutas = Object.entries(lanePos).flatMap(([x, colunas]) =>
    Object.entries(colunas).map(([y, vezes]) => ({ x: celulaParaNorm(Number(x)), y: celulaParaNorm(Number(y)), vezes })));
  const maior = brutas.reduce((max, m) => Math.max(max, m.vezes), 1);
  return brutas.map(({ x, y, vezes }) => ({ x: arredondar(x), y: arredondar(y), peso: arredondar(vezes / maior) }));
}

// Limite conhecido: divide o mapa pela diagonal; não separa selva de lane e tempo na base conta como mid.
export function regiaoDoPonto({ x, y }: Readonly<{ x: number; y: number }>): Regiao {
  if (Math.abs(x - y) < LARGURA_DO_MEIO) return "meio";
  return y > x ? "cima" : "baixo";
}

export function laneDasManchas(manchas: readonly Mancha[], lado: Lado): Lane | null {
  const pesos = manchas.reduce((soma, m) => {
    const regiao = regiaoDoPonto(m);
    return soma.set(regiao, (soma.get(regiao) ?? 0) + m.peso);
  }, new Map<Regiao, number>());
  const [regiao] = [...pesos.entries()].sort((a, b) => b[1] - a[1])[0] ?? [];
  return regiao ? LANE_DA_REGIAO[lado][regiao] : null;
}

function rotaDoJogador(jogador: JogadorDaPartidaFonte, partida: string, conta: number): Omit<RotaAproximada, "frescor"> {
  const manchas = jogador.lane_pos ? manchasDaLane(jogador.lane_pos) : [];
  const lado: Lado = jogador.player_slot < 128 ? "radiant" : "dire";
  return {
    partida, conta, analisada: manchas.length > 0, manchas, laneDasManchas: laneDasManchas(manchas, lado),
    laneRegistrada: jogador.lane_role == null ? null : LANE_POR_PAPEL[jogador.lane_role] ?? null,
  };
}

export async function rotaDaPartida(consultar: Consultar, partidaId: string, contaId: number): Promise<RespostaAoVivo<RotaAproximada>> {
  if (lerId(partidaId, DIGITOS_DA_PARTIDA) === null) return falha(erroAoVivo("ENTRADA_INVALIDA"));
  const partida = await consultar({ caminho: `/matches/${partidaId}`, schema: partidaFonte, validadeS: VALIDADE_S.partida });
  if (!partida.ok) return partida;
  const jogador = partida.dados.valor.players.find((p) => p.account_id === contaId);
  if (!jogador) return falha(erroAoVivo("NAO_ENCONTRADO"));
  return ok({ ...rotaDoJogador(jogador, partidaId, contaId), frescor: partida.dados.frescor });
}
