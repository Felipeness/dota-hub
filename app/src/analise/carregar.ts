// Busca a partida para análise: GET normal e, se a fonte ainda não analisou, POST /request + polling do GET
// (formato confirmado do POST: {"job":{"jobId":...}}, sem campo de progresso — por isso o polling é por tempo fixo).
import type { Consultar } from "../live/consulta";
import type { RespostaAoVivo } from "../live/erros";
import { BASE_OPENDOTA } from "../live/fonte/opendota";
import { detalheDaPartida, type DetalheDaPartida } from "../live/partida/detalhe";

const INTERVALO_ENTRE_TENTATIVAS_MS = 5_000;
const MAXIMO_DE_TENTATIVAS = 12; // 1 minuto de polling, acima disso a pessoa tenta de novo manualmente
const TEMPO_MAXIMO_DO_PEDIDO_MS = 20_000;

type Esperar = (ms: number) => Promise<void>;
const esperarDeVerdade: Esperar = (ms) => new Promise((resolver) => setTimeout(resolver, ms));

/** POST /request/{id}: pede ao OpenDota para analisar a partida. Não passa pela fila de GET (chamada única, não rajada). */
export async function pedirAnaliseDaPartida(partidaId: string, postar: typeof fetch = fetch): Promise<boolean> {
  try {
    const resposta = await postar(`${BASE_OPENDOTA}/request/${partidaId}`, { method: "POST", signal: AbortSignal.timeout(TEMPO_MAXIMO_DO_PEDIDO_MS) });
    return resposta.ok;
  } catch {
    return false;
  }
}

export type Dependencias = Readonly<{ postar?: typeof fetch; esperar?: Esperar; aoTentarDeNovo?: (tentativa: number) => void }>;

/**
 * Devolve a partida já analisada quando possível; se não estiver, pede a análise e faz polling por até 1 minuto.
 * Se o tempo esgotar, devolve a última resposta (partida sem a análise completa) em vez de travar a tela.
 */
export async function carregarPartidaParaAnalise(
  consultar: Consultar, partidaId: string, conta: number,
  { postar = fetch, esperar = esperarDeVerdade, aoTentarDeNovo }: Dependencias = {},
): Promise<RespostaAoVivo<DetalheDaPartida>> {
  const primeira = await detalheDaPartida(consultar, partidaId, conta);
  if (!primeira.ok || primeira.dados.analisada) return primeira;

  const pedida = await pedirAnaliseDaPartida(partidaId, postar);
  if (!pedida) return primeira;

  for (let tentativa = 1; tentativa <= MAXIMO_DE_TENTATIVAS; tentativa++) {
    await esperar(INTERVALO_ENTRE_TENTATIVAS_MS);
    aoTentarDeNovo?.(tentativa);
    const resposta = await detalheDaPartida(consultar, partidaId, conta, String(tentativa));
    if (resposta.ok && resposta.dados.analisada) return resposta;
  }
  return primeira;
}
