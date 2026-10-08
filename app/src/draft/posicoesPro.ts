// Posição (1 a 5) e lane de cada herói, pelo que os pros jogaram de fato: export/dota_export/pro_posicoes.py,
// método em content/pro_posicoes.json ("metodo"). Escolhe a atribuição 1 a 5 que maximiza a probabilidade
// conjunta das frações de posição (busca exaustiva: no máximo 5 heróis, então no máximo 120 permutações).
import { z } from "zod";
import type { HeroId } from "./guia";

export const POSICOES = [1, 2, 3, 4, 5] as const;
export type PosicaoId = (typeof POSICOES)[number];
export const ehPosicaoId = (valor: number): valor is PosicaoId => POSICOES.some((p) => p === valor);

export type Lane = "safe" | "mid" | "off";
/** Pos 1 e 5 ficam na safelane do time (maior e menor gpm dali); pos 2 é sempre mid; pos 3 e 4 ficam na offlane. */
export const LANE_DA_POSICAO: Readonly<Record<PosicaoId, Lane>> = { 1: "safe", 2: "mid", 3: "off", 4: "off", 5: "safe" };
export const ROTULO_DA_POSICAO: Readonly<Record<PosicaoId, string>> = {
  1: "Pos 1 · carry", 2: "Pos 2 · mid", 3: "Pos 3 · offlane", 4: "Pos 4 · suporte", 5: "Pos 5 · suporte duro",
};
export const ROTULO_DA_LANE: Readonly<Record<Lane, string>> = { safe: "safelane", mid: "mid", off: "offlane" };

const fracaoComN = z.object({ n: z.number().int().nonnegative(), fracao: z.number().min(0).max(1) });
const taxaComN = z.object({ n: z.number().int().nonnegative(), taxa: z.number().min(0).max(1) });

export const proPosicoesSchema = z.object({
  gerado_em: z.string(),
  fonte: z.string(),
  metodo: z.string(),
  herois: z.array(z.object({
    hero_id: z.number().int(),
    slug: z.string(),
    posicoes: z.object({
      n_total: z.number().int().nonnegative(),
      distribuicao: z.object({ pos1: fracaoComN, pos2: fracaoComN, pos3: fracaoComN, pos4: fracaoComN, pos5: fracaoComN }),
    }),
    forca: z.object({
      n: z.number().int().nonnegative(),
      gpm_medio: z.number().nonnegative(),
      dano_torre_medio: z.number().nonnegative(),
      dano_heroi_medio: z.number().nonnegative(),
      cura_media: z.number().nonnegative(),
      stuns_medio_s: z.number().nonnegative(),
      duracao_media_vitorias_min: z.number().nonnegative(),
      vitoria_por_duracao: z.object({ menos_30min: taxaComN, entre_30_40min: taxaComN, mais_40min: taxaComN }),
    }),
  })),
});

export type ProPosicoes = z.infer<typeof proPosicoesSchema>;
export type HeroiPro = ProPosicoes["herois"][number];
export type ForcaPro = HeroiPro["forca"];

export const CAMINHO_PRO_POSICOES = "/data/pro_posicoes.json";

export function indexarPorHeroId(dados: ProPosicoes): ReadonlyMap<HeroId, HeroiPro> {
  return new Map(dados.herois.map((h) => [h.hero_id, h]));
}

export type SlotDeHeroi = Readonly<{ heroId: HeroId; posicao: PosicaoId; lane: Lane; fracaoPro: number | null }>;

const fracaoNaPosicao = (heroi: HeroiPro | undefined, posicao: PosicaoId): number | null => {
  if (!heroi || heroi.posicoes.n_total === 0) return null;
  return heroi.posicoes.distribuicao[`pos${posicao}`].fracao;
};

// Sem dados de pro para o herói (fora dos 127 cobertos): neutro em toda posição, não puxa a nota do time pra baixo.
const SEM_DADO_NEUTRO = 1 / POSICOES.length;
const EPSILON = 1e-4;

const pesoDaPosicao = (heroi: HeroiPro | undefined, posicao: PosicaoId): number => {
  const fracao = fracaoNaPosicao(heroi, posicao);
  return fracao === null ? SEM_DADO_NEUTRO : Math.max(fracao, EPSILON);
};

function permutacoes<T>(itens: readonly T[]): T[][] {
  if (itens.length <= 1) return [[...itens]];
  return itens.flatMap((item, i) => {
    const resto = [...itens.slice(0, i), ...itens.slice(i + 1)];
    return permutacoes(resto).map((p) => [item, ...p]);
  });
}

/** Todas as formas de escolher `tamanho` posições das 5, mantendo a ordem original. */
function combinacoes<T>(itens: readonly T[], tamanho: number): T[][] {
  if (tamanho === 0) return [[]];
  if (itens.length < tamanho) return [];
  const [primeiro, ...resto] = itens;
  const comPrimeiro = combinacoes(resto, tamanho - 1).map((c) => [primeiro, ...c]);
  const semPrimeiro = combinacoes(resto, tamanho);
  return [...comPrimeiro, ...semPrimeiro];
}

/**
 * Atribui 1 a 5 aos heróis escolhidos maximizando a probabilidade conjunta das frações de posição de pro
 * (soma dos log das frações, mesmo ranking que o produto, sem risco de underflow). Até 5 heróis: busca
 * exaustiva em todas as combinações de posições e suas permutações (no máximo 120 casos), não precisa de
 * um algoritmo de emparelhamento ótimo para um problema deste tamanho. Com menos de 5 heróis, usa só as
 * posições escolhidas na melhor permutação.
 */
export function atribuirPosicoes(heroIds: readonly HeroId[], porHeroId: ReadonlyMap<HeroId, HeroiPro>): SlotDeHeroi[] {
  if (heroIds.length === 0) return [];
  const pontuar = (posicoesEscolhidas: readonly PosicaoId[]): number =>
    heroIds.reduce((soma, heroId, i) => soma + Math.log(pesoDaPosicao(porHeroId.get(heroId), posicoesEscolhidas[i])), 0);

  let melhor: { posicoes: readonly PosicaoId[]; pontuacao: number } | null = null;
  for (const combinacao of combinacoes(POSICOES, heroIds.length)) {
    for (const posicoes of permutacoes(combinacao)) {
      const pontuacao = pontuar(posicoes);
      if (!melhor || pontuacao > melhor.pontuacao) melhor = { posicoes, pontuacao };
    }
  }
  const posicoesEscolhidas: readonly PosicaoId[] = melhor?.posicoes ?? [];
  return heroIds.map((heroId, i) => {
    const posicao = posicoesEscolhidas[i];
    return { heroId, posicao, lane: LANE_DA_POSICAO[posicao], fracaoPro: fracaoNaPosicao(porHeroId.get(heroId), posicao) };
  });
}

/**
 * Troca manual: o jogador escolhe outra posição para um herói do slot. Se a posição já era de outro herói do
 * mesmo time, os dois trocam de lugar; senão só o escolhido muda. Ids fora da atribuição atual não fazem nada.
 */
export function trocarPosicao(
  atribuicao: readonly SlotDeHeroi[], heroId: HeroId, novaPosicao: PosicaoId, porHeroId: ReadonlyMap<HeroId, HeroiPro>,
): SlotDeHeroi[] {
  const atual = atribuicao.find((s) => s.heroId === heroId);
  if (!atual || atual.posicao === novaPosicao) return [...atribuicao];
  const ocupante = atribuicao.find((s) => s.posicao === novaPosicao);
  const slotPara = (id: HeroId, posicao: PosicaoId): SlotDeHeroi =>
    ({ heroId: id, posicao, lane: LANE_DA_POSICAO[posicao], fracaoPro: fracaoNaPosicao(porHeroId.get(id), posicao) });
  return atribuicao.map((s) => {
    if (s.heroId === heroId) return slotPara(heroId, novaPosicao);
    if (ocupante && s.heroId === ocupante.heroId) return slotPara(ocupante.heroId, atual.posicao);
    return s;
  });
}
