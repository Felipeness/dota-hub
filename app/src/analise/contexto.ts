// Monta o Contexto puro que as regras recebem; quem busca os dados (useData, consultar) fica nos componentes.
import type { Analise } from "../confronto/analise";
import type { DetalheDaPartida } from "../live/partida/detalhe";
import type { Contexto } from "./modelo";
import { proDoHeroi, type ProPorPosicao } from "./pro";

export function construirContexto(detalhe: DetalheDaPartida, pro: Analise | null, proPosicoes: ProPorPosicao | null): Contexto {
  return {
    detalhe,
    pro,
    proDoHeroi: proDoHeroi(proPosicoes, detalhe.heroi.id),
    meuHeroi: detalhe.heroi,
    inimigos: detalhe.inimigos,
  };
}
