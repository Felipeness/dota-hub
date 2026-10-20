// app/public/data/pro_posicoes.json: força média do herói (não filtrada por posição, ver modelo.ts O_QUE_NAO_VEMOS).
import { z } from "zod";

const faixa = z.object({ n: z.number().int().nonnegative(), fracao: z.number() });

const forcaSchema = z.object({
  n: z.number().int().nonnegative(),
  gpm_medio: z.number(),
  dano_torre_medio: z.number(),
  dano_heroi_medio: z.number(),
  cura_media: z.number(),
  stuns_medio_s: z.number(),
  duracao_media_vitorias_min: z.number(),
});

const heroiDaPosicaoSchema = z.object({
  hero_id: z.number(),
  slug: z.string(),
  posicoes: z.object({ n_total: z.number().int().nonnegative(), distribuicao: z.record(z.string(), faixa) }),
  forca: forcaSchema,
});

export const proPorPosicaoSchema = z.object({
  gerado_em: z.string(),
  fonte: z.string(),
  metodo: z.string(),
  herois: z.array(heroiDaPosicaoSchema),
});

export type HeroiDaPosicao = z.infer<typeof heroiDaPosicaoSchema>;
export type ProPorPosicao = z.infer<typeof proPorPosicaoSchema>;

export const CAMINHO_PRO_POSICOES = "/data/pro_posicoes.json";

/** Amostra pequena pesa menos como afirmação categórica; ver placarPorArea.ts. */
export const AMOSTRA_MINIMA = 10;

export function proDoHeroi(dados: ProPorPosicao | null, heroId: number): HeroiDaPosicao | null {
  return dados?.herois.find((h) => h.hero_id === heroId) ?? null;
}

/** Na maioria das partidas pro o herói é pos 4 ou 5. O OpenDota não diz a posição jogada; o herói é o melhor sinal. */
const FRACAO_DE_SUPORTE = 0.5;

/** Suporte não disputa farm de lane: ouro e last hits contra o core inimigo não medem o trabalho dele. */
export function jogaDeSuporte(heroi: HeroiDaPosicao | null): boolean {
  const { pos4, pos5 } = heroi?.posicoes.distribuicao ?? {};
  return (pos4?.fracao ?? 0) + (pos5?.fracao ?? 0) >= FRACAO_DE_SUPORTE;
}
