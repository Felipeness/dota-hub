// Regra: last hits aos 10 e 20 min comparados à mediana pública do próprio herói (OpenDota /benchmarks). Mostra
// tanto o erro (farm atrasado) quanto o acerto (farm que alcançou ou passou a mediana). Ver SPEC §economia-e-lutas.
import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { Achado, Contexto, Peso, Regra } from "../../modelo";

const CHECKPOINTS: readonly number[] = [10, 20];
/** Mesma margem de ±10% usada em placarPorArea.ts (seloContraMedia) pra não afirmar categórico em cima de pouca folga. */
const LIMIAR_ACERTO = 1.1;
const LIMIAR_ERRO = 0.9;
const LIMIAR_ERRO_GRAVE = 0.6;
const FONTE = "OpenDota /benchmarks (mediana pública de last_hits_per_min do herói, partidas analisadas)";

const pesoDoErro = (razao: number): Peso => (razao < LIMIAR_ERRO_GRAVE ? "pesou_muito" : "pesou");

function achadoNoMinuto(ctx: Contexto, minuto: number): Achado[] {
  const referencia = ctx.detalhe.referencia;
  const lh = ctx.detalhe.curvas.lh[minuto];
  if (!referencia || lh === undefined) return [];
  const esperado = referencia.lhPorMin * minuto;
  if (esperado <= 0) return [];
  const razao = lh / esperado;
  const tempo = tempoDaPartida(minuto * 60);
  const numeros = { lastHits: lh, esperado: Math.round(esperado), razao: Number(razao.toFixed(2)) };
  const id = `lh${minuto}-contra-referencia`;

  if (razao >= LIMIAR_ACERTO) {
    return [{
      id, tipo: "acerto", minuto,
      titulo: `${lh} last hits aos ${minuto} min, acima da mediana pública do herói`,
      oQueAconteceu: `${ctx.meuHeroi.nome} tinha ${lh} last hits em ${tempo}, contra uma mediana pública de ` +
        `${numeros.esperado} (${referencia.lhPorMin.toFixed(1)}/min) para o herói.`,
      oQueFazer: "Manter essa rotina de farm: ela paga os itens core na janela certa, mesmo numa partida difícil.",
      porque: "Last hits acima da mediana do próprio herói nesse tempo é sinal direto de boa eficiência de farm, " +
        "isolado de sorte de abate.",
      fontes: [FONTE], peso: "leve", evidencias: { numeros },
    }];
  }
  if (razao < LIMIAR_ERRO) {
    return [{
      id, tipo: "erro", minuto,
      titulo: `${lh} last hits aos ${minuto} min, abaixo da mediana pública do herói (${numeros.esperado})`,
      oQueAconteceu: `${ctx.meuHeroi.nome} tinha ${lh} last hits em ${tempo}; a mediana pública do herói nesse ` +
        `tempo é ${numeros.esperado} (${referencia.lhPorMin.toFixed(1)}/min).`,
      oQueFazer: minuto <= 10
        ? "Priorizar last hit sobre troca ou rotação nos primeiros minutos: um creep perdido não volta, e o farm " +
          "de lane define o resto do jogo de um carry."
        : "Farmar a jungle ou a lane livre entre rotações em vez de rodar o mapa sem objetivo: um carry atrasado " +
          "em last hit não alcança o timing do item core.",
      porque: "Last hits é o indicador mais direto de eficiência de farm; ficar abaixo da mediana do próprio " +
        "herói nesse tempo atrasa o primeiro item core.",
      fontes: [FONTE], peso: pesoDoErro(razao), evidencias: { numeros },
    }];
  }
  return [];
}

function lastHitsContraReferencia(ctx: Contexto): Achado[] {
  return CHECKPOINTS.flatMap((minuto) => achadoNoMinuto(ctx, minuto));
}

export const REGRA: Regra = { id: "last-hits-contra-referencia", familia: "economia-e-farm", avaliar: lastHitsContraReferencia };
