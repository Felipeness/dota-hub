// Família build: a build comparada com o que os pros do mesmo herói fazem contra os mesmos heróis inimigos
// (matchupDePro.ts). Item que os pros fazem na maioria das partidas e faltou ou atrasou, item que eles quase nunca
// fazem nesse confronto, e item de pro feito no tempo.
import { tempoDaPartida, type Compra } from "../../../live/partida/detalhe";
import type { Achado, Contexto, Peso } from "../../modelo";
import {
  ehComponente, FRACAO_DE_CORE, FRACAO_DE_ESCOLHA, FRACAO_RARA, fracaoNoMatchup, listaDeNomes, matchupDePro,
  type ItemDoMatchup, type Matchup,
} from "./matchupDePro";

const FONTE = "content/pro_contra (export/dota_export/pro_contra.py): partidas de liga dos últimos 18 meses no OpenDota, compras do herói por inimigo";
const ATRASO_TOLERADO_MIN = 8;
const MAXIMO_DE_RESPOSTAS = 2;
/** Alternativa citada quando o jogador fez um item raro: o que os pros fazem com frequência e ele não fez. */
const FRACAO_DE_RESPOSTA = 0.2;

const minutos = (n: number) => n.toLocaleString("pt-BR", { maximumFractionDigits: 1 });
const porcento = (fracao: number) => `${Math.round(fracao * 100)}%`;

type Recorte = Readonly<{ matchup: Matchup; contra: string; heroi: string }>;

const amostra = ({ matchup }: Recorte, item: ItemDoMatchup) => `${item.n} de ${matchup.jogos} jogos pro contra eles`;

const porqueDoRecorte = (r: Recorte) =>
  `É o recorte das partidas pro de ${r.heroi} contra ${r.contra}, não a média do herói; os jogos são somados por ` +
  "inimigo (uma partida contra dois deles conta para os dois).";

function pesoDoAtraso(atrasoMin: number): Peso {
  return atrasoMin > ATRASO_TOLERADO_MIN * 2 ? "pesou_muito" : "pesou";
}

function achadoFaltou(r: Recorte, item: ItemDoMatchup, duracaoS: number): Achado {
  return {
    id: `build-matchup-faltou-${item.chave}`,
    tipo: "erro",
    minuto: null,
    titulo: `Contra ${r.contra}, os pros fazem ${item.nome} em ${porcento(item.fracao)} das partidas; você não fez`,
    oQueAconteceu: `Contra ${r.contra}, os pros fazem ${item.nome} em ${porcento(item.fracao)} das partidas, mediana ` +
      `${minutos(item.mediana)} min (${amostra(r, item)}); a partida acabou aos ${tempoDaPartida(duracaoS)} sem ele.`,
    oQueFazer: `Contra esse draft, encaixar o ${item.nome} na build mirando ${minutos(item.mediana)} min, como os pros.`,
    porque: porqueDoRecorte(r),
    fontes: [FONTE],
    peso: item.fracao >= 0.8 ? "pesou_muito" : "pesou",
    evidencias: { numeros: { fracaoPro: Number(item.fracao.toFixed(2)), minutoMedianoPro: Number(item.mediana.toFixed(1)), amostraPro: item.n, jogosPro: r.matchup.jogos } },
  };
}

function feitosAntes(compras: readonly Compra[], compra: Compra, matchup: Matchup): string {
  const antes = compras.filter((c) => c.grande && c.t < compra.t && c.chave !== compra.chave &&
    (matchup.itens.get(c.chave)?.fracao ?? 0) < FRACAO_DE_CORE);
  return antes.map((c) => `${c.nome} (${tempoDaPartida(c.t)})`).join(", ");
}

function achadoAtrasado(r: Recorte, item: ItemDoMatchup, compra: Compra, compras: readonly Compra[]): Achado {
  const minutoCompra = compra.t / 60;
  const atraso = minutoCompra - item.mediana;
  const antes = feitosAntes(compras, compra, r.matchup);
  return {
    id: `build-matchup-atrasado-${item.chave}`,
    tipo: "erro",
    minuto: minutoCompra,
    titulo: `${item.nome} saiu ${minutos(atraso)} min depois dos pros contra ${r.contra}`,
    oQueAconteceu: `Contra ${r.contra}, os pros fazem ${item.nome} em ${porcento(item.fracao)} das partidas, mediana ` +
      `${minutos(item.mediana)} min (${amostra(r, item)}); você fez aos ${tempoDaPartida(compra.t)}.`,
    oQueFazer: antes
      ? `Fazer o ${item.nome} antes de ${antes}, mirando ${minutos(item.mediana)} min como os pros.`
      : `Puxar o ${item.nome} pra perto de ${minutos(item.mediana)} min: farmar sem rotas sem prioridade até ele sair.`,
    porque: porqueDoRecorte(r),
    fontes: [FONTE],
    peso: pesoDoAtraso(atraso),
    evidencias: { numeros: { minutoCompra: Number(minutoCompra.toFixed(1)), minutoMedianoPro: Number(item.mediana.toFixed(1)), atrasoMin: Number(atraso.toFixed(1)), amostraPro: item.n, jogosPro: r.matchup.jogos } },
  };
}

function achadoNoTempo(r: Recorte, item: ItemDoMatchup, compra: Compra): Achado {
  return {
    id: `build-matchup-no-tempo-${item.chave}`,
    tipo: "acerto",
    minuto: compra.t / 60,
    titulo: `${item.nome} contra ${r.contra}, no tempo dos pros`,
    oQueAconteceu: `Os pros fazem ${item.nome} em ${porcento(item.fracao)} das partidas contra ${r.contra}, mediana ` +
      `${minutos(item.mediana)} min (${amostra(r, item)}); você fez aos ${tempoDaPartida(compra.t)}.`,
    oQueFazer: null,
    porque: porqueDoRecorte(r),
    fontes: [FONTE],
    peso: "leve",
    evidencias: { numeros: { minutoMedianoPro: Number(item.mediana.toFixed(1)), amostraPro: item.n, jogosPro: r.matchup.jogos } },
  };
}

function respostasDosPros(matchup: Matchup, compradas: ReadonlySet<string>): string {
  return [...matchup.itens.values()]
    .filter((i) => i.fracao >= FRACAO_DE_RESPOSTA && i.fracao < FRACAO_DE_CORE && !compradas.has(i.chave) && !ehComponente(i.chave))
    .sort((a, b) => b.fracao - a.fracao)
    .slice(0, MAXIMO_DE_RESPOSTAS)
    .map((i) => `${i.nome} (${porcento(i.fracao)}, mediana ${minutos(i.mediana)} min)`)
    .join(" e ");
}

function achadoRaro(r: Recorte, compra: Compra, fracao: number, compradas: ReadonlySet<string>): Achado {
  const n = r.matchup.itens.get(compra.chave)?.n ?? 0;
  const respostas = respostasDosPros(r.matchup, compradas);
  return {
    id: `build-matchup-raro-${compra.chave}`,
    tipo: "contexto",
    minuto: compra.t / 60,
    titulo: `Os pros quase não fazem ${compra.nome} contra ${r.contra} (${n} em ${r.matchup.jogos})`,
    oQueAconteceu: `Você fez ${compra.nome} aos ${tempoDaPartida(compra.t)}; os pros de ${r.heroi} fizeram em ${n} de ` +
      `${r.matchup.jogos} jogos contra ${r.contra} (${porcento(fracao)}).`,
    oQueFazer: respostas ? `Contra esse draft, eles respondem com ${respostas}.` : null,
    porque: porqueDoRecorte(r),
    fontes: [FONTE],
    peso: "leve",
    evidencias: { numeros: { amostraPro: n, jogosPro: r.matchup.jogos } },
  };
}

function avaliarItemDePro(r: Recorte, item: ItemDoMatchup, ctx: Contexto): Achado[] {
  const compra = ctx.detalhe.compras.find((c) => c.chave === item.chave);
  const ehCore = item.fracao >= FRACAO_DE_CORE;
  if (!compra) {
    // Jogo acabou antes do tempo típico do item: ausência não é escolha, é partida curta.
    const acabouAntes = ctx.detalhe.duracaoS / 60 < item.mediana + ATRASO_TOLERADO_MIN;
    return ehCore && !acabouAntes ? [achadoFaltou(r, item, ctx.detalhe.duracaoS)] : [];
  }
  const atrasado = compra.t / 60 - item.mediana > ATRASO_TOLERADO_MIN;
  if (!atrasado) return [achadoNoTempo(r, item, compra)];
  return ehCore ? [achadoAtrasado(r, item, compra, ctx.detalhe.compras)] : [];
}

const primeiraDeCada = (compras: readonly Compra[]): readonly Compra[] =>
  compras.filter((c, i) => compras.findIndex((outra) => outra.chave === c.chave) === i);

export function itemContraInimigos(ctx: Contexto): Achado[] {
  const matchup = matchupDePro(ctx);
  if (!matchup) return [];
  const r: Recorte = { matchup, contra: listaDeNomes(matchup.inimigos), heroi: ctx.meuHeroi.nome };
  const compradas = new Set(ctx.detalhe.compras.map((c) => c.chave));

  const dePro = [...matchup.itens.values()]
    .filter((i) => i.fracao >= FRACAO_DE_ESCOLHA && !ehComponente(i.chave))
    .flatMap((item) => avaliarItemDePro(r, item, ctx));
  const raros = primeiraDeCada(ctx.detalhe.compras).flatMap((compra): Achado[] => {
    if (ehComponente(compra.chave)) return [];
    const fracao = fracaoNoMatchup(matchup, compra.chave);
    return fracao !== null && fracao <= FRACAO_RARA ? [achadoRaro(r, compra, fracao, compradas)] : [];
  });
  return [...dePro, ...raros];
}
