import { z } from "zod";
import type { Consultar } from "../live/consulta";
import { lerId } from "../live/contas";
import { erroAoVivo, falha, ok, type RespostaAoVivo } from "../live/erros";
import { partidaFonte, type JogadorDaPartidaFonte } from "../live/fonte/schemas";

const DIGITOS_DA_PARTIDA = 15;
const MINUTO_DA_LANE = 10;
const VALIDADE_PARTIDA_S = 7 * 24 * 3_600;
const VALIDADE_CONSTANTES_S = 24 * 3_600;
const NIVEL_7 = 7;

// https://api.opendota.com/api/constants/xp_level: xp total acumulado pra alcançar cada nível (índice 0 = nível 1).
const xpPorNivelFonte = z.array(z.number());

export type DadosDaPartidaReal = Readonly<{
  lh10: number | null;
  mortesAntesDos10: number;
  nivel7Minuto: number | null;
  /** item (slug do OpenDota, igual ao `item` do guia) -> minuto da primeira compra. */
  itens: ReadonlyMap<string, number>;
}>;

/** Primeiro minuto em que a xp acumulada (xp_t, por minuto) alcança o total exigido pro nível pedido. */
export function minutoDoNivel(xpT: readonly number[], xpPorNivel: readonly number[], nivel: number): number | null {
  const alvo = xpPorNivel[nivel - 1];
  if (alvo === undefined) return null;
  const minuto = xpT.findIndex((xp) => xp >= alvo);
  return minuto === -1 ? null : minuto;
}

function primeiraCompraEmMinutos(jogador: JogadorDaPartidaFonte, item: string): number | null {
  const compra = jogador.purchase_log.find((p) => p.key === item);
  return compra ? compra.time / 60 : null;
}

function itensReais(jogador: JogadorDaPartidaFonte, itensDoGuia: readonly string[]): ReadonlyMap<string, number> {
  return new Map(itensDoGuia.flatMap((item) => {
    const minuto = primeiraCompraEmMinutos(jogador, item);
    return minuto === null ? [] : [[item, minuto] as const];
  }));
}

export async function buscarDadosReais(
  consultar: Consultar, partidaId: string, conta: number, itensDoGuia: readonly string[],
): Promise<RespostaAoVivo<DadosDaPartidaReal>> {
  if (lerId(partidaId, DIGITOS_DA_PARTIDA) === null) return falha(erroAoVivo("ENTRADA_INVALIDA"));
  const partida = await consultar({ caminho: `/matches/${partidaId}`, schema: partidaFonte, validadeS: VALIDADE_PARTIDA_S });
  if (!partida.ok) return partida;
  const jogador = partida.dados.valor.players.find((p) => p.account_id === conta);
  if (!jogador) return falha(erroAoVivo("NAO_ENCONTRADO"));
  const xpPorNivel = await consultar({ caminho: "/constants/xp_level", schema: xpPorNivelFonte, validadeS: VALIDADE_CONSTANTES_S });
  return ok({
    lh10: jogador.lh_t[MINUTO_DA_LANE] ?? null,
    mortesAntesDos10: jogador.deaths_log.filter((d) => d.time < MINUTO_DA_LANE * 60).length,
    nivel7Minuto: xpPorNivel.ok ? minutoDoNivel(jogador.xp_t, xpPorNivel.dados.valor, NIVEL_7) : null,
    itens: itensReais(jogador, itensDoGuia),
  });
}
