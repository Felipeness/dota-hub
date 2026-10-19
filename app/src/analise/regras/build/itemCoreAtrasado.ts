// Família build: item core do herói (content/confrontos/<slug>.json, spikes com chave=true) ausente ou atrasado
// contra a mediana de pro do mesmo herói. Ver SPEC §"build".
import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { SpikeDePro } from "../../../confronto/analise";
import type { Achado, Contexto } from "../../modelo";
import { ITEM_FINAL_DO_COMPONENTE } from "./componentesDeItem";

const FONTE_PRO = "content/confrontos (export/dota_export/confrontos.py): spikes do herói em partidas de liga 7.40/7.41";

// Atraso tolerado: o maior entre um piso fixo (jogo tem variância normal) e uma fração do próprio tempo mediano
// (item que o pro monta aos 30min tem mais variância absoluta que um de 6min).
const MARGEM_MINIMA_MIN = 3;
const MARGEM_PROPORCIONAL = 0.3;
const limiteDeAtrasoMin = (minutoMediano: number) => Math.max(MARGEM_MINIMA_MIN, minutoMediano * MARGEM_PROPORCIONAL);

/** A partir desta fração das partidas pro dá pra dizer que o herói monta o item "na maioria das partidas". */
const FRACAO_DA_MAIORIA = 0.5;

function frequenciaNoPro(item: SpikeDePro, jogosPro: number): Readonly<{ texto: string; ehMaioria: boolean }> {
  const fracao = item.n / jogosPro;
  const ehMaioria = fracao >= FRACAO_DA_MAIORIA;
  const parcela = ehMaioria ? "na maioria das partidas" : `em ${Math.round(fracao * 100)}% das partidas`;
  return { texto: `${parcela} (${item.n} de ${jogosPro})`, ehMaioria };
}

function achadoAusente(ctx: Contexto, item: SpikeDePro, jogosPro: number): Achado {
  const frequencia = frequenciaNoPro(item, jogosPro);
  return {
    id: `build-core-ausente-${item.item}`,
    tipo: "erro",
    minuto: null,
    titulo: `Nunca montou ${item.nome}, item core do ${ctx.meuHeroi.nome} no pro`,
    oQueAconteceu: `A partida acabou aos ${tempoDaPartida(ctx.detalhe.duracaoS)} min sem o ${item.nome} na build; ` +
      `a mediana de pro pra ele é ${minutos(item.minuto)} min.`,
    oQueFazer: `Considerar o ${item.nome} na build: mediana de ${minutos(item.minuto)} min em ${item.n} partidas de pro.`,
    porque: `No pro, ${ctx.meuHeroi.nome} monta ${item.nome} ${frequencia.texto}` +
      (frequencia.ehMaioria
        ? ": é parte do que faz o herói funcionar na metade do jogo, não um item de situação."
        : ": é escolha comum, mas não obrigatória, então a falta dele pesa menos."),
    fontes: [FONTE_PRO],
    peso: frequencia.ehMaioria ? "pesou_muito" : "pesou",
    evidencias: { numeros: { minutoMedianoPro: item.minuto, amostraPro: item.n, jogosPro } },
  };
}

function achadoAtrasado(item: SpikeDePro, minutoCompra: number, limite: number): Achado {
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

function achadoNoTempo(item: SpikeDePro, minutoCompra: number): Achado {
  const adiantado = minutoCompra <= item.minuto;
  return {
    id: `build-core-no-tempo-${item.item}`,
    tipo: "acerto",
    minuto: minutoCompra,
    titulo: adiantado
      ? `${item.nome} no tempo certo (ou antes) do pro`
      : `${item.nome} saiu depois da mediana do pro, mas dentro da margem aceitável`,
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
  const pro = ctx.pro;
  if (!pro) return [];
  const todosOsSpikesChave = new Set(pro.spikes.filter((s) => s.chave).map((s) => s.item));
  // Componente cujo item final também é spike chave deste herói: avaliar só o item final, senão o mesmo gap de
  // build (nunca chegou no item tardio) conta duas vezes (ex. Crystalys + Daedalus pra quem nunca montou nenhum).
  const itensCore = pro.spikes.filter((s) => {
    if (!s.chave) return false;
    const itemFinal = ITEM_FINAL_DO_COMPONENTE[s.item];
    return !(itemFinal && todosOsSpikesChave.has(itemFinal));
  });
  const duracaoMin = ctx.detalhe.duracaoS / 60;
  return itensCore.flatMap((item): Achado[] => {
    const compra = ctx.detalhe.compras.find((c) => c.chave === item.item);
    if (!compra) {
      // Jogo acabou antes do tempo típico desse item: ausência não é culpa, é partida curta.
      return duracaoMin < item.minuto ? [] : [achadoAusente(ctx, item, pro.jogos_pro)];
    }
    const minutoCompra = compra.t / 60;
    const limite = limiteDeAtrasoMin(item.minuto);
    const atraso = minutoCompra - item.minuto;
    if (atraso > limite) return [achadoAtrasado(item, minutoCompra, limite)];
    return [achadoNoTempo(item, minutoCompra)];
  });
}
