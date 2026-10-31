// O que a tela mostra enquanto os dez históricos chegam: esperando, carregando, ou pronta (com as contas que falharam à parte).
import type { ErroAoVivo } from "../../live/erros";
import type { Historico } from "../modeloDeJogador";
import type { CincoContas } from "../recomendacaoDeDraft";
import type { EstadoDaBusca } from "./buscas";
import { TOTAL_DE_CAMPOS, type EstadoDaUrl } from "./contasDoDraft";

export type ContaQueFalhou = Readonly<{ conta: number; erro: ErroAoVivo }>;

export type Situacao =
  | { fase: "aguardando" }
  | { fase: "carregando"; prontas: number; total: number }
  | { fase: "pronta"; aliados: CincoContas; inimigos: CincoContas; falhas: readonly ContaQueFalhou[] };

function cinco(historicos: readonly Historico[]): CincoContas | null {
  const [a, b, c, d, e] = historicos;
  return a && b && c && d && e ? [a, b, c, d, e] : null;
}

const semDados = (conta: number): Historico => ({ conta, partidas: [] });

/** Conta que falhou entra vazia para o modelo e vai na lista de falhas: a tela avisa que não foi falta de dados públicos. */
export function situacaoDaAnalise({ aliados, inimigos }: EstadoDaUrl, estados: ReadonlyMap<number, EstadoDaBusca<Historico>>): Situacao {
  const contas = [...aliados, ...inimigos];
  if (contas.length !== TOTAL_DE_CAMPOS) return { fase: "aguardando" };
  const andamento = contas.map((conta) => estados.get(conta) ?? { estado: "carregando" as const });
  const prontas = andamento.filter((estado) => estado.estado !== "carregando").length;
  if (prontas < TOTAL_DE_CAMPOS) return { fase: "carregando", prontas, total: TOTAL_DE_CAMPOS };

  const historicoDe = (conta: number): Historico => {
    const estado = estados.get(conta);
    return estado?.estado === "ok" ? estado.dados : semDados(conta);
  };
  const falhas = contas.flatMap((conta): ContaQueFalhou[] => {
    const estado = estados.get(conta);
    return estado?.estado === "erro" ? [{ conta, erro: estado.erro }] : [];
  });
  const timeAliado = cinco(aliados.map(historicoDe));
  const timeInimigo = cinco(inimigos.map(historicoDe));
  return timeAliado && timeInimigo ? { fase: "pronta", aliados: timeAliado, inimigos: timeInimigo, falhas } : { fase: "aguardando" };
}
