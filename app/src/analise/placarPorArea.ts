// Placar por área vs. pro. Hoje só a área Farm tem benchmark real (gpm_medio do herói no pro_posicoes.json);
// as outras mostram o número da partida com o motivo explícito da ausência de benchmark (ver SPEC, fora de
// escopo nesta fase: pro_por_posicao.json com p25/p75 por herói+posição não foi gerado).
import type { EventoDaPartida } from "../live/partida/detalhe";
import { AMOSTRA_MINIMA } from "./pro";
import type { Contexto } from "./modelo";

export type Selo = "ponto_forte" | "dentro_da_faixa" | "abaixo_do_pro" | "sem_benchmark";

export type AreaDoPlacar = Readonly<{
  area: string;
  valor: number | null;
  unidade: string;
  selo: Selo;
  comparacao: string;
}>;

/** ±10% da média do pro: dado só a média (não p25/p75), uma faixa frouxa evita afirmação categórica em cima de pouca precisão. */
const MARGEM_DA_MEDIA = 0.1;

function contar(eventos: readonly EventoDaPartida[], tipo: EventoDaPartida["tipo"]) {
  return eventos.filter((e) => e.tipo === tipo).length;
}

function seloContraMedia(valor: number, media: number): Selo {
  if (valor >= media * (1 + MARGEM_DA_MEDIA)) return "ponto_forte";
  if (valor >= media * (1 - MARGEM_DA_MEDIA)) return "dentro_da_faixa";
  return "abaixo_do_pro";
}

function areaFarm(ctx: Contexto): AreaDoPlacar {
  const minutos = ctx.detalhe.duracaoS / 60;
  const ouroFinal = ctx.detalhe.curvas.ouro.at(-1) ?? null;
  const gpm = ouroFinal !== null && minutos > 0 ? ouroFinal / minutos : null;
  const proDoHeroi = ctx.proDoHeroi;
  if (gpm === null || !proDoHeroi || proDoHeroi.forca.n < AMOSTRA_MINIMA) {
    return { area: "Farm", valor: gpm, unidade: "ouro/min", selo: "sem_benchmark", comparacao: "sem dado de pro suficiente para comparar (amostra pequena ou partida sem análise completa)." };
  }
  const media = proDoHeroi.forca.gpm_medio;
  return {
    area: "Farm", valor: Math.round(gpm), unidade: "ouro/min", selo: seloContraMedia(gpm, media),
    comparacao: `pro com este herói (n=${proDoHeroi.forca.n}, qualquer posição): média ${Math.round(media)} ouro/min. ` +
      "Comparação é com a média do herói inteiro no pro, não filtrada por posição.",
  };
}

const areaSemBenchmark = (area: string, valor: number, unidade: string, motivo: string): AreaDoPlacar =>
  ({ area, valor, unidade, selo: "sem_benchmark", comparacao: motivo });

function areaVisao(ctx: Contexto): AreaDoPlacar {
  const wards = contar(ctx.detalhe.eventos, "observer") + contar(ctx.detalhe.eventos, "sentry");
  return areaSemBenchmark("Visão", wards, "wards colocadas", "o explorer do OpenDota não tem wards por herói+posição para comparar.");
}

function areaObjetivos(ctx: Contexto): AreaDoPlacar {
  const roshansDoSeuTime = ctx.detalhe.eventos.filter((e) => e.tipo === "roshan" && e.texto.includes("seu time")).length;
  return areaSemBenchmark("Objetivos", roshansDoSeuTime, "Roshan do seu time", "o OpenDota não guarda quem participou da luta do Roshan, só quem recebeu o abate.");
}

function areaSobrevivencia(ctx: Contexto): AreaDoPlacar {
  return areaSemBenchmark("Sobrevivência", ctx.detalhe.mortes, "mortes na partida", "mortes até X min por herói+posição não é um campo agregado no explorer do OpenDota.");
}

export function placarPorArea(ctx: Contexto): readonly AreaDoPlacar[] {
  return [areaFarm(ctx), areaVisao(ctx), areaObjetivos(ctx), areaSobrevivencia(ctx)];
}
