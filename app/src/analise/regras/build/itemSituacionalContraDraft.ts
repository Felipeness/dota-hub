// Família build: itens situacionais que o draft inimigo pedia (motor de porQueItem.ts/tagsDosHerois.ts, agrupado
// por contraDraft.ts). Acerto quando comprou algo do grupo justificado; erro quando o draft pedia e faltou.
import type { Achado, Contexto } from "../../modelo";
import {
  agruparPorMotivo, fundirSubconjuntos, gruposDeContra, gruposJustificados, nomeDoItem, riscoContidoEm,
  type GrupoDeContra, type InimigoParaRegra,
} from "./contraDraft";
import { ITENS_CURADOS } from "../../../live/partida/porQueItem";
import { FONTES_DAS_TAGS } from "../../../live/partida/tagsDosHerois";
import { FRACAO_RARA, fracaoNoMatchup, matchupDePro } from "./matchupDePro";

const FONTES = FONTES_DAS_TAGS;
const MAXIMO_DE_SUGESTOES = 2;

function sugestoes(chaves: readonly string[]): string {
  return chaves.slice(0, MAXIMO_DE_SUGESTOES)
    .map((chave) => `${nomeDoItem(chave)} (${ITENS_CURADOS[chave]?.funcao ?? ""})`)
    .join(" ou ");
}

function achadoFaltou(grupo: GrupoDeContra): Achado {
  const { chaves, explicacao } = grupo;
  return {
    id: `build-situacional-faltou-${grupo.assinatura}`,
    tipo: "erro",
    minuto: null,
    titulo: `Faltou item contra ${explicacao.motivo?.replace("Provável motivo: o time inimigo tem ", "") ?? "o draft inimigo"}`,
    oQueAconteceu: `O draft inimigo pede resposta e nenhum item da build cobriu isso até o fim da partida.`,
    oQueFazer: `Montar ${sugestoes(chaves)}.`,
    porque: `${explicacao.motivo ?? ""} Sem um item que cubra isso, essa mecânica decide a luta sozinha.`,
    fontes: FONTES,
    peso: "pesou",
    evidencias: {},
  };
}

function achadoAcerto(grupo: GrupoDeContra, chaveComprada: string): Achado {
  const { explicacao } = grupo;
  return {
    id: `build-situacional-acerto-${grupo.assinatura}`,
    tipo: "acerto",
    minuto: null,
    titulo: `${nomeDoItem(chaveComprada)} respondeu ao que o draft inimigo pedia`,
    oQueAconteceu: `A build incluiu ${nomeDoItem(chaveComprada)}, que cobre o que o draft inimigo pede.`,
    oQueFazer: null,
    porque: `${explicacao.motivo ?? ""} ${ITENS_CURADOS[chaveComprada]?.funcao ?? ""}.`,
    fontes: FONTES,
    peso: "leve",
    evidencias: {},
  };
}

export function itemSituacionalContraDraft(ctx: Contexto): Achado[] {
  const inimigos: InimigoParaRegra[] = ctx.inimigos.map((i) => ({ chave: i.chave, nome: i.nome }));
  const grupos = agruparPorMotivo(gruposJustificados(gruposDeContra(inimigos)));
  const chavesCompradas = new Set(ctx.detalhe.compras.map((c) => c.chave));
  const compradoDo = (grupo: GrupoDeContra) => grupo.chaves.find((chave) => chavesCompradas.has(chave));
  const respondidos = fundirSubconjuntos(grupos.filter((g) => compradoDo(g) !== undefined));
  // Risco que um item comprado já cobre inteiro não vira "faltou" ao lado do acerto (ex. comprou BKB, não vira erro
  // por faltar Pipe contra o mesmo dano mágico).
  const faltando = fundirSubconjuntos(grupos.filter((g) =>
    compradoDo(g) === undefined && !respondidos.some((r) => riscoContidoEm(g, r))));
  // O item ainda conta como resposta (não vira "faltou"), mas não é acerto quando os pros quase nunca o fazem contra
  // estes inimigos: itemContraInimigos já comenta a escolha com a amostra do confronto.
  const matchup = matchupDePro(ctx);
  const raroNoMatchup = (chave: string) => {
    const fracao = matchup ? fracaoNoMatchup(matchup, chave) : null;
    return fracao !== null && fracao <= FRACAO_RARA;
  };
  return [
    ...respondidos.flatMap((g) => {
      const comprado = compradoDo(g);
      return comprado === undefined || raroNoMatchup(comprado) ? [] : [achadoAcerto(g, comprado)];
    }),
    ...faltando.map(achadoFaltou),
  ];
}
