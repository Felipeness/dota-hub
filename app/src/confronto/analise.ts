// Análise de confrontos tirada de partidas pro (export/dota_export/confrontos.py): um arquivo por herói, pelo id do app.
import { z } from "zod";

const texto = z.string().min(1);

const oponenteSchema = z.object({ id: z.string(), nome: z.string(), nome_interno: z.string(), hero_id: z.number() });

const blocoSchema = z.object({
  oponente: oponenteSchema,
  vitorias: z.number().int().nonnegative(),
  jogos: z.number().int().positive(),
  placar: texto,
  por_que_importa: texto,
  janelas: texto,
  ele_faz: texto.nullable(),
  voce_faz: texto.nullable(),
  itens: texto,
  como_jogar: texto,
  fontes: z.array(texto),
});

export const spikeSchema = z.object({ item: z.string(), nome: z.string(), minuto: z.number().nonnegative(), n: z.number().int().positive(), chave: z.boolean() });

const itemContraSchema = z.object({ chave: z.string(), n: z.number().int().positive(), mediana: z.number() });

/** Partidas com os mesmos primeiros itens: sequência (40%+ delas) e opções (15-40%), em minuto mediano. */
const buildSchema = z.object({
  /** Os primeiros itens (sem ordem) que definem o grupo: 3, ou 2 quando com 3 a build espalha demais (suporte). */
  chave: z.array(z.string()).min(1),
  jogos: z.number().int().positive(),
  vitorias: z.number().int().nonnegative(),
  sequencia: z.array(itemContraSchema),
  opcoes: z.array(itemContraSchema),
});

/** Nas partidas com os dois itens, quantas tiveram `a` antes de `b` (a = o que vem antes na maioria). */
const ordemSchema = z.object({ a: z.string(), b: z.string(), a_antes: z.number().int().nonnegative(), ambos: z.number().int().positive() });

/** Partidas pro do herói contra um inimigo (content/pro_contra, export/dota_export/pro_contra.py). */
const contraSchema = z.object({
  jogos: z.number().int().positive(),
  vitorias: z.number().int().nonnegative(),
  /** Primeira compra de cada item fechado (1000+ de ouro, sem consumível): em quantas partidas e minuto mediano. */
  itens: z.array(itemContraSchema),
  builds: z.array(buildSchema).default([]),
  ordem: z.array(ordemSchema).default([]),
});

export const analiseSchema = z.object({
  id: z.string(),
  nome: z.string(),
  nome_interno: z.string(),
  hero_id: z.number(),
  patch: z.string(),
  jogos_pro: z.number().int().positive(),
  /** Mediana de last hits aos 10 min nas partidas pro do herói; null quando o pro_dados não tem. */
  lh10: z.number().nonnegative().nullable().default(null),
  spikes: z.array(spikeSchema),
  confrontos: z.array(blocoSchema).min(1),
  /** Nome interno do inimigo (HeroiNaPartida.chave) -> partidas pro contra ele; vazio em arquivo antigo. */
  contra_inimigo: z.record(z.string(), contraSchema).default({}),
  /** Nome de cada item citado em `contra_inimigo`. */
  nomes_dos_itens: z.record(z.string(), z.string()).default({}),
});

/** id do app -> quantos confrontos o herói tem analisados. */
export const indiceDeConfrontosSchema = z.record(z.string(), z.number().int().positive());

export type Analise = z.infer<typeof analiseSchema>;
export type BlocoDeConfronto = z.infer<typeof blocoSchema>;
export type SpikeDePro = z.infer<typeof spikeSchema>;
export type ContraInimigo = z.infer<typeof contraSchema>;

export const caminhoDaAnalise = (idDoApp: string) => `/data/confrontos/${idDoApp}.json`;

export const taxaDeVitoria = (bloco: Pick<BlocoDeConfronto, "vitorias" | "jogos">) => bloco.vitorias / bloco.jogos;

export function blocoContra(analise: Analise, heroId: number): BlocoDeConfronto | null {
  return analise.confrontos.find((b) => b.oponente.hero_id === heroId) ?? null;
}

export type Agrupados = Readonly<{ melhores: readonly BlocoDeConfronto[]; piores: readonly BlocoDeConfronto[] }>;

/** Melhores (vence metade ou mais) do maior para o menor placar; piores do pior para o menos pior. */
export function agruparPorPlacar(confrontos: readonly BlocoDeConfronto[]): Agrupados {
  const porTaxa = [...confrontos].sort((a, b) => taxaDeVitoria(b) - taxaDeVitoria(a));
  return {
    melhores: porTaxa.filter((b) => taxaDeVitoria(b) >= 0.5),
    piores: porTaxa.filter((b) => taxaDeVitoria(b) < 0.5).reverse(),
  };
}

/** Primeira frase de um campo, pra prévia; o resto aparece ao expandir. */
export function primeiraFrase(campo: string): string {
  const fim = campo.search(/[.;:](\s|$)/);
  return fim === -1 ? campo : campo.slice(0, fim + 1);
}

export const porcentagem = (n: number) => `${(100 * n).toLocaleString("pt-BR", { maximumFractionDigits: 1 })}%`;
export const minutos = (n: number) => n.toLocaleString("pt-BR", { maximumFractionDigits: 1 });
