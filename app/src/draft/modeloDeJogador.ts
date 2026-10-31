// O que uma conta vale em cada herói, em logit de vitória. Receita e números em docs/design/modelo-draft-10-ids.md:
// beta-binomial encolhendo para a média do próprio jogador, tabela de força dos heróis treinada offline e um termo
// de experiência. Todas as contas ficam na mesma escala, então somar 5 contra 5 dá a chance do draft.
import { z } from "zod";
import type { HeroId } from "./guia";

export const CAMINHO_MODELO_DRAFT = "/data/modelo_draft.json";

const porHeroi = z.record(z.string(), z.number()).transform((valores) => new Map(Object.entries(valores).map(([id, valor]): [HeroId, number] => [Number(id), valor])));

export const modeloDeDraftSchema = z.object({
  gerado_em: z.string(),
  amostra: z.object({ contas: z.number().int().nonnegative(), partidas: z.number().int().nonnegative() }),
  taxaMedia: z.number().min(0).max(1),
  forcaDaBase: z.number().positive(),
  forcaDoHeroi: z.number().positive(),
  pesoDaVantagem: z.number(),
  pesoDaExperiencia: z.number(),
  experienciaMedia: z.number().nonnegative(),
  meiaVidaDoPickJogos: z.number().positive(),
  alfaDoPick: z.number().positive(),
  forcaDoHeroiNoPatch: porHeroi,
  parcelaDePicks: porHeroi,
});
export type ModeloDeDraft = z.infer<typeof modeloDeDraftSchema>;

export type PartidaDoHistorico = Readonly<{ heroi: HeroId; venceu: boolean; inicio: number; deLiga: boolean }>;
/** partidas vazia = sem dados: perfil privado, conta nova ou Immortal Draft, que a Valve fechou acima de 8.500 MMR. */
export type Historico = Readonly<{ conta: number; partidas: readonly PartidaDoHistorico[] }>;

export type ValorDoHeroi = Readonly<{
  heroi: HeroId; jogos: number; vitorias: number;
  /** Chance de a conta pegar o herói se ele estiver livre. */
  chanceDePick: number;
  /** Logit de vitória que a conta acrescenta ao time com este herói, e a incerteza disso. */
  valor: number; variancia: number;
}>;

export type PerfilDoJogador = Readonly<{
  conta: number; jogos: number; temDados: boolean; deLiga: boolean; ultimaPartida: number | null;
  herois: readonly ValorDoHeroi[];
}>;

const logit = (p: number) => Math.log(p / (1 - p));
export const expit = (x: number) => 1 / (1 + Math.exp(-x));
/** Perto de 50%, 1 logit vale 25 pontos percentuais: a escala que a tela mostra. */
export const logitParaPp = (x: number) => x * 25;

type Contagem = Readonly<{ jogos: number; vitorias: number; recencia: number }>;
const CONTAGEM_VAZIA: Contagem = { jogos: 0, vitorias: 0, recencia: 0 };

/** Jogos e vitórias por herói, mais a contagem decaída por jogo: a partida de agora vale 1, a de meia-vida atrás vale 1/2. */
function contarPorHeroi(partidas: readonly PartidaDoHistorico[], meiaVidaJogos: number): ReadonlyMap<HeroId, Contagem> {
  const recentesPrimeiro = partidas.toSorted((a, b) => b.inicio - a.inicio);
  return recentesPrimeiro.reduce((contagens, partida, idade) => {
    const atual = contagens.get(partida.heroi) ?? CONTAGEM_VAZIA;
    return contagens.set(partida.heroi, {
      jogos: atual.jogos + 1,
      vitorias: atual.vitorias + (partida.venceu ? 1 : 0),
      recencia: atual.recencia + 2 ** (-idade / meiaVidaJogos),
    });
  }, new Map<HeroId, Contagem>());
}

/** Variância de quem tem `jogos` no herói: a do beta-binomial levada para logit e pesada como no modelo. */
const varianciaDoValor = (taxa: number, jogos: number, modelo: ModeloDeDraft) =>
  modelo.pesoDaVantagem ** 2 / (taxa * (1 - taxa) * (jogos + modelo.forcaDoHeroi + 1));

/** Sem histórico não há linha de base: fica só a força do herói, com a incerteza de quem nunca foi visto no herói. */
function heroisSemDados(modelo: ModeloDeDraft): ValorDoHeroi[] {
  return [...modelo.forcaDoHeroiNoPatch].map(([heroi, forca]) => ({
    heroi, jogos: 0, vitorias: 0, chanceDePick: modelo.parcelaDePicks.get(heroi) ?? 0, valor: forca, variancia: varianciaDoValor(modelo.taxaMedia, 0, modelo),
  }));
}

function heroisComDados(contagens: ReadonlyMap<HeroId, Contagem>, totalDeJogos: number, modelo: ModeloDeDraft): ValorDoHeroi[] {
  const contagensPorHeroi = [...contagens.values()];
  const vitoriasDaConta = contagensPorHeroi.reduce((soma, c) => soma + c.vitorias, 0);
  const massaRecente = contagensPorHeroi.reduce((soma, c) => soma + c.recencia, 0);
  const media = (vitoriasDaConta + modelo.forcaDaBase * modelo.taxaMedia) / (totalDeJogos + modelo.forcaDaBase);
  return [...modelo.forcaDoHeroiNoPatch].map(([heroi, forca]) => {
    const { jogos, vitorias, recencia } = contagens.get(heroi) ?? CONTAGEM_VAZIA;
    const taxa = (vitorias + modelo.forcaDoHeroi * media) / (jogos + modelo.forcaDoHeroi);
    const vantagem = logit(taxa) - logit(media);
    const experiencia = Math.log1p(jogos) - modelo.experienciaMedia;
    return {
      heroi, jogos, vitorias,
      chanceDePick: (recencia + modelo.alfaDoPick * (modelo.parcelaDePicks.get(heroi) ?? 0)) / (massaRecente + modelo.alfaDoPick),
      valor: modelo.pesoDaVantagem * vantagem + modelo.pesoDaExperiencia * experiencia + forca,
      variancia: varianciaDoValor(taxa, jogos, modelo),
    };
  });
}

export function perfilDoJogador(historico: Historico, modelo: ModeloDeDraft): PerfilDoJogador {
  const { conta, partidas } = historico;
  const base = { conta, jogos: partidas.length };
  if (partidas.length === 0) return { ...base, temDados: false, deLiga: false, ultimaPartida: null, herois: heroisSemDados(modelo) };
  const dasLigas = partidas.filter((p) => p.deLiga).length;
  return {
    ...base, temDados: true, deLiga: dasLigas > partidas.length / 2,
    ultimaPartida: Math.max(...partidas.map((p) => p.inicio)),
    herois: heroisComDados(contarPorHeroi(partidas, modelo.meiaVidaDoPickJogos), partidas.length, modelo),
  };
}

/** Tira os heróis fora do draft e redistribui a chance de pick entre os que sobram. */
export function comHeroisFora(perfil: PerfilDoJogador, fora: ReadonlySet<HeroId>): PerfilDoJogador {
  const livres = perfil.herois.filter((h) => !fora.has(h.heroi));
  const massa = livres.reduce((soma, h) => soma + h.chanceDePick, 0);
  if (massa === 0) return { ...perfil, herois: livres };
  return { ...perfil, herois: livres.map((h) => ({ ...h, chanceDePick: h.chanceDePick / massa })) };
}

/** Quanto a conta acrescenta ao time quando escolhe pelo próprio costume, entre os heróis livres: a linha de base. */
export const valorEsperado = (perfil: PerfilDoJogador): number => perfil.herois.reduce((soma, h) => soma + h.chanceDePick * h.valor, 0);

/** Variância do que a conta acrescenta: incerteza da estimativa mais a dúvida sobre qual herói ela vai pegar. */
export function varianciaEsperada(perfil: PerfilDoJogador): number {
  const media = valorEsperado(perfil);
  return perfil.herois.reduce((soma, h) => soma + h.chanceDePick * (h.variancia + (h.valor - media) ** 2), 0);
}

/**
 * Quanto a conta perde se o herói sair do draft: chance de pick × (valor dele − o que ela faria sem ele).
 * Sem dados vale 0, nunca a força do herói disfarçada de ameaça daquele jogador.
 */
export function perdaSemOHeroi(perfil: PerfilDoJogador, heroi: ValorDoHeroi): number {
  if (!perfil.temDados || heroi.chanceDePick >= 1) return 0;
  const semEle = (valorEsperado(perfil) - heroi.chanceDePick * heroi.valor) / (1 - heroi.chanceDePick);
  return heroi.chanceDePick * (heroi.valor - semEle);
}
