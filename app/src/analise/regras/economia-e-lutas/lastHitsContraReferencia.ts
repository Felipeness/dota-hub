// Regra: last hits aos 10 e 20 min. Aos 10 min a referência é a mediana real dos pros com o herói (content/pro_dados,
// resumo.lh10); sem ela, e aos 20 min, cai na mediana pública do OpenDota (/benchmarks), que é só uma estimativa:
// last_hits_per_min × minuto assume ritmo constante e mistura todo tipo de partida. Mostra o erro (farm atrasado) e o
// acerto (farm que passou a referência). Ver SPEC §economia-e-lutas.
import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { Achado, Contexto, Peso, Regra } from "../../modelo";
import { jogaDeSuporte } from "../../pro";

const CHECKPOINTS: readonly number[] = [10, 20];
const MINUTO_DO_PRO = 10;
/** Mesma margem de ±10% usada em placarPorArea.ts (seloContraMedia) pra não afirmar categórico em cima de pouca folga. */
const LIMIAR_ACERTO = 1.1;
const LIMIAR_ERRO = 0.9;
const LIMIAR_ERRO_GRAVE = 0.6;
const FONTE_PRO = "content/pro_dados (mediana de last hits aos 10 min nas partidas pro 7.40/7.41 do herói, OpenDota)";
const FONTE_PUBLICA =
  "OpenDota /benchmarks (mediana pública de last_hits_per_min do herói × minutos; estimativa aproximada, não pro)";

type Referencia = Readonly<{ esperado: number; rotulo: string; detalhe: string; fonte: string; pesoMaximo: Peso }>;

function referenciaNoMinuto(ctx: Contexto, minuto: number): Referencia | null {
  const pro = ctx.pro;
  if (minuto === MINUTO_DO_PRO && pro && pro.lh10 !== null) {
    return {
      esperado: pro.lh10, rotulo: "mediana do pro", detalhe: `nas ${pro.jogos_pro} partidas pro do herói`,
      fonte: FONTE_PRO, pesoMaximo: "pesou_muito",
    };
  }
  const publica = ctx.detalhe.referencia;
  if (!publica) return null;
  return {
    esperado: publica.lhPorMin * minuto, rotulo: "estimativa pública aproximada",
    detalhe: `${publica.lhPorMin.toFixed(1)}/min da mediana pública do herói, não de pro`, fonte: FONTE_PUBLICA, pesoMaximo: "pesou",
  };
}

const pesoDoErro = (razao: number, maximo: Peso): Peso => (razao < LIMIAR_ERRO_GRAVE ? maximo : "pesou");

function achadoNoMinuto(ctx: Contexto, minuto: number): Achado[] {
  const referencia = referenciaNoMinuto(ctx, minuto);
  const lh = ctx.detalhe.curvas.lh[minuto];
  if (!referencia || lh === undefined || referencia.esperado <= 0) return [];
  const razao = lh / referencia.esperado;
  const tempo = tempoDaPartida(minuto * 60);
  const esperado = Math.round(referencia.esperado);
  const numeros = { lastHits: lh, esperado, razao: Number(razao.toFixed(2)) };
  const id = `lh${minuto}-contra-referencia`;
  const comparacao = `${referencia.rotulo}: ${esperado} (${referencia.detalhe})`;

  if (razao >= LIMIAR_ACERTO) {
    return [{
      id, tipo: "acerto", minuto,
      titulo: `${lh} last hits aos ${minuto} min, acima da ${referencia.rotulo} (${esperado})`,
      oQueAconteceu: `${ctx.meuHeroi.nome} tinha ${lh} last hits em ${tempo}; ${comparacao}.`,
      oQueFazer: "Manter essa rotina de last hit: é ela que paga os itens na janela certa, mesmo numa partida difícil.",
      porque: "Last hits acima da referência do próprio herói nesse tempo é sinal direto de boa eficiência de farm, " +
        "isolado de sorte de abate.",
      fontes: [referencia.fonte], peso: "leve", evidencias: { numeros },
    }];
  }
  if (razao < LIMIAR_ERRO) {
    return [{
      id, tipo: "erro", minuto,
      titulo: `${lh} last hits aos ${minuto} min, abaixo da ${referencia.rotulo} (${esperado})`,
      oQueAconteceu: `${ctx.meuHeroi.nome} tinha ${lh} last hits em ${tempo}; ${comparacao}.`,
      oQueFazer: minuto <= MINUTO_DO_PRO
        ? "Se a função era farmar, priorizar last hit sobre troca ou rotação nos primeiros minutos: um creep " +
          "perdido não volta. Se a lane foi de pressão ou suporte, o número pesa menos que o espaço criado."
        : "Entre rotações, puxar a jungle ou a lane livre em vez de andar pelo mapa sem objetivo, na medida em " +
          "que a função na partida pedia farm.",
      porque: "Last hits é o indicador mais direto de eficiência de farm; ficar abaixo da referência do próprio " +
        "herói nesse tempo atrasa os itens que o herói depende.",
      fontes: [referencia.fonte], peso: pesoDoErro(razao, referencia.pesoMaximo), evidencias: { numeros },
    }];
  }
  return [];
}

function lastHitsContraReferencia(ctx: Contexto): Achado[] {
  if (jogaDeSuporte(ctx.detalhe.posicao, ctx.proDoHeroi)) return [];
  return CHECKPOINTS.flatMap((minuto) => achadoNoMinuto(ctx, minuto));
}

export const REGRA: Regra = { id: "last-hits-contra-referencia", familia: "economia-e-farm", avaliar: lastHitsContraReferencia };
