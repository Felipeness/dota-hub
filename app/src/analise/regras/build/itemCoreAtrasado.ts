// Família build: item core do herói (content/confrontos/<slug>.json, spikes com chave=true) ausente ou atrasado
// contra a mediana de pro do mesmo herói. Ver SPEC §"build".
import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { Achado, Contexto } from "../../modelo";

const FONTE_PRO = "content/confrontos (export/dota_export/confrontos.py): spikes do herói em partidas de liga 7.40/7.41";

// Atraso tolerado: o maior entre um piso fixo (jogo tem variância normal) e uma fração do próprio tempo mediano
// (item que o pro monta aos 30min tem mais variância absoluta que um de 6min).
const MARGEM_MINIMA_MIN = 3;
const MARGEM_PROPORCIONAL = 0.3;
const limiteDeAtrasoMin = (minutoMediano: number) => Math.max(MARGEM_MINIMA_MIN, minutoMediano * MARGEM_PROPORCIONAL);

function achadoAusente(ctx: Contexto, item: { item: string; nome: string; minuto: number; n: number }): Achado {
  return {
    id: `build-core-ausente-${item.item}`,
    tipo: "erro",
    minuto: null,
    titulo: `Nunca montou ${item.nome}, item core do ${ctx.meuHeroi.nome} no pro`,
    oQueAconteceu: `A partida acabou (${tempoDaPartida(ctx.detalhe.duracaoS)}) sem o ${item.nome} na build.`,
    oQueFazer: `Priorizar o ${item.nome} na build: é core, mediana de ${minutos(item.minuto)} em ${item.n} partidas de pro.`,
    porque: `No pro, ${ctx.meuHeroi.nome} monta ${item.nome} na maioria das partidas (${item.n} amostras): é parte do que faz o herói funcionar na metade do jogo, não um item de situação.`,
    fontes: [FONTE_PRO],
    peso: "pesou_muito",
    evidencias: { numeros: { minutoMedianoPro: item.minuto, amostraPro: item.n } },
  };
}

function achadoAtrasado(item: { item: string; nome: string; minuto: number; n: number }, minutoCompra: number, limite: number): Achado {
  const atraso = minutoCompra - item.minuto;
  return {
    id: `build-core-atrasado-${item.item}`,
    tipo: "erro",
    minuto: minutoCompra,
    titulo: `${item.nome} saiu ${minutos(atraso)} min depois do normal no pro`,
    oQueAconteceu: `Montou o ${item.nome} aos ${minutos(minutoCompra)} min; a mediana de pro (${item.n} partidas) é ${minutos(item.minuto)} min.`,
    oQueFazer: `Puxar o ${item.nome} pra mais cedo: farmar linear sem perder tempo em rotas sem prioridade até ele sair.`,
    porque: `Cada minuto de atraso num item core é um minuto a menos do poder dele na partida; o pro mira ${minutos(item.minuto)} min porque é o ponto em que o item já paga o investimento.`,
    fontes: [FONTE_PRO],
    peso: atraso > limite * 2 ? "pesou_muito" : "pesou",
    evidencias: { numeros: { minutoCompra, minutoMedianoPro: item.minuto, atrasoMin: Number(atraso.toFixed(1)), amostraPro: item.n } },
  };
}

function achadoNoTempo(item: { item: string; nome: string; minuto: number; n: number }, minutoCompra: number): Achado {
  return {
    id: `build-core-no-tempo-${item.item}`,
    tipo: "acerto",
    minuto: minutoCompra,
    titulo: `${item.nome} no tempo certo (ou antes) do pro`,
    oQueAconteceu: `Montou o ${item.nome} aos ${minutos(minutoCompra)} min; a mediana de pro (${item.n} partidas) é ${minutos(item.minuto)} min.`,
    oQueFazer: null,
    porque: `Fechar o item core dentro do que o pro leva mantém o power spike do herói no tempo esperado da partida.`,
    fontes: [FONTE_PRO],
    peso: "leve",
    evidencias: { numeros: { minutoCompra, minutoMedianoPro: item.minuto, amostraPro: item.n } },
  };
}

const minutos = (n: number) => n.toLocaleString("pt-BR", { maximumFractionDigits: 1 });

export function itemCoreAtrasado(ctx: Contexto): Achado[] {
  const itensCore = (ctx.pro?.spikes ?? []).filter((s) => s.chave);
  const duracaoMin = ctx.detalhe.duracaoS / 60;
  return itensCore.flatMap((item): Achado[] => {
    const compra = ctx.detalhe.compras.find((c) => c.chave === item.item);
    if (!compra) {
      // Jogo acabou antes do tempo típico desse item: ausência não é culpa, é partida curta.
      return duracaoMin < item.minuto ? [] : [achadoAusente(ctx, item)];
    }
    const minutoCompra = compra.t / 60;
    const limite = limiteDeAtrasoMin(item.minuto);
    const atraso = minutoCompra - item.minuto;
    if (atraso > limite) return [achadoAtrasado(item, minutoCompra, limite)];
    return [achadoNoTempo(item, minutoCompra)];
  });
}
