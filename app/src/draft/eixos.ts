// Pontos de força do draft: cada eixo é a média de 1 a 3 números reais (0 a 1), não nota inventada.
// Metade vem da ficha de pro (export/dota_export/pro_posicoes.py, médias por partida-jogador em percentil
// entre os 127 heróis do patch) e metade das habilidades do herói no OpenDota (comportamento "AOE"/"Unit
// Target" e as mesmas regras de controle/cura/fuga do Confronto 1x1, app/src/confronto/mecanicas.ts), para
// não repetir o mesmo número de pro em dois eixos que deveriam significar coisas diferentes.
import type { ForcaPro, PosicaoId } from "./posicoesPro";

export const EIXO_IDS = ["luta", "farm", "push", "pickoff", "early", "sustain"] as const;
export type EixoId = (typeof EIXO_IDS)[number];

/** Peso de cada posição nos eixos que dependem de quem tem o farm: o core decide o late, o suporte quase não. */
export const PESO_DA_POSICAO: Readonly<Record<PosicaoId, number>> = { 1: 0.35, 2: 0.25, 3: 0.2, 4: 0.1, 5: 0.1 };

const PERCENTIL = "percentil entre os 127 heróis do patch (0 = o menor, 100 = o maior)";
const PONDERADO = "média ponderada pela posição (pos 1 35%, pos 2 25%, pos 3 20%, pos 4 e 5 10% cada)";

export const EIXOS: Readonly<Record<EixoId, { titulo: string; comoCalcular: string }>> = {
  luta: { titulo: "Luta em grupo", comoCalcular: `Média de: fração do time com controle ou dano em área (habilidades AOE ou com raio, largura e cone no OpenDota), e os stuns médios por partida de pro de cada herói, em ${PERCENTIL}, média simples do time.` },
  farm: { titulo: "Farm e late", comoCalcular: `Por herói: 60% gold por minuto de pro e 40% a duração média das vitórias de pro (herói que vence tarde), cada um em ${PERCENTIL}. O time é a ${PONDERADO}: o carry pesa mais que o suporte.` },
  push: { titulo: "Push e limpar wave", comoCalcular: `Média de três números: dano a torre de pro de cada herói, em ${PERCENTIL}, média simples do time (suporte de push como Pugna e Shadow Shaman conta igual); a fração do time que derruba torre pelas habilidades no OpenDota (invoca unidades que ficam batendo, como lobos, wards, treants e eidolons, ou tem feitiço que acerta construção, como Nether Blast e Exorcism); e a fração do time com dano em área, que limpa wave.` },
  pickoff: { titulo: "Pickoff e caça", comoCalcular: `Média de: fração do time com controle de alvo único (stun, hex, raiz) ou fuga/blink no OpenDota, e o dano a heróis por partida de pro de cada herói, em ${PERCENTIL}, média simples do time.` },
  early: { titulo: "Ritmo no early", comoCalcular: `Taxa de vitória de pro em partidas que terminaram antes dos 30 minutos, em ${PERCENTIL}, média simples do time.` },
  sustain: { titulo: "Sobrevivência e sustain", comoCalcular: `Média de: cura/lifesteal de pro por partida de cada herói, em ${PERCENTIL}, média simples do time, e a fração do time com habilidade de cura no OpenDota.` },
};

/** Flags de habilidade por herói, tiradas do OpenDota pelas mesmas regras do Confronto 1x1 (ver tracosDeHabilidade.ts). */
export type TracosDeHabilidade = Readonly<{
  controleEmArea: boolean; controleAlvoUnico: boolean; danoEmArea: boolean; cura: boolean; fuga: boolean;
  /** Invoca unidades que batem em torre ou tem feitiço que acerta construção. */
  empurraTorre: boolean;
}>;
export const SEM_TRACOS: TracosDeHabilidade = {
  controleEmArea: false, controleAlvoUnico: false, danoEmArea: false, cura: false, fuga: false, empurraTorre: false,
};

export type HeroiNoTime = Readonly<{ forca: ForcaPro; tracos: TracosDeHabilidade; posicao: PosicaoId }>;

const METRICAS = {
  gpm: (f: ForcaPro) => f.gpm_medio,
  danoTorre: (f: ForcaPro) => f.dano_torre_medio,
  danoHeroi: (f: ForcaPro) => f.dano_heroi_medio,
  stuns: (f: ForcaPro) => f.stuns_medio_s,
  cura: (f: ForcaPro) => f.cura_media,
  duracaoDasVitorias: (f: ForcaPro) => f.duracao_media_vitorias_min,
  vitoriaCedo: (f: ForcaPro) => f.vitoria_por_duracao.menos_30min.taxa,
} as const satisfies Record<string, (f: ForcaPro) => number>;
type Metrica = keyof typeof METRICAS;

/**
 * Cada estatística de força dos 127 heróis do patch, em ordem: a régua que normaliza qualquer time. Percentil e não
 * min/máx porque cura, dano a torre e stuns têm cauda longa (um herói com 12 mil de cura deixava todo o resto perto de 0).
 */
export type LimitesDeNormalizacao = Readonly<Record<Metrica, readonly number[]>>;

export function calcularLimites(todasAsForcas: readonly ForcaPro[]): LimitesDeNormalizacao {
  const ordenar = (ler: (f: ForcaPro) => number) => todasAsForcas.map(ler).toSorted((a, b) => a - b);
  return {
    gpm: ordenar(METRICAS.gpm), danoTorre: ordenar(METRICAS.danoTorre), danoHeroi: ordenar(METRICAS.danoHeroi),
    stuns: ordenar(METRICAS.stuns), cura: ordenar(METRICAS.cura), duracaoDasVitorias: ordenar(METRICAS.duracaoDasVitorias),
    vitoriaCedo: ordenar(METRICAS.vitoriaCedo),
  };
}

/** Fração dos heróis do patch abaixo do valor (empate conta meio): 0 a 1. Régua vazia vira neutro. */
export function percentil(valor: number, ordenados: readonly number[]): number {
  if (ordenados.length === 0) return 0.5;
  const abaixo = ordenados.filter((v) => v < valor).length;
  const iguais = ordenados.filter((v) => v === valor).length;
  return (abaixo + iguais / 2) / ordenados.length;
}

const media = (valores: readonly number[]): number => (valores.length === 0 ? 0 : valores.reduce((soma, v) => soma + v, 0) / valores.length);

/** Média pelo peso da posição; com time incompleto, só os pesos de quem já foi escolhido entram na divisão. */
function mediaPorPosicao(time: readonly HeroiNoTime[], valor: (h: HeroiNoTime) => number): number {
  const pesoTotal = time.reduce((soma, h) => soma + PESO_DA_POSICAO[h.posicao], 0);
  return pesoTotal === 0 ? 0 : time.reduce((soma, h) => soma + PESO_DA_POSICAO[h.posicao] * valor(h), 0) / pesoTotal;
}

const fracaoComTraco = (time: readonly HeroiNoTime[], tem: (t: TracosDeHabilidade) => boolean): number => media(time.map((h) => (tem(h.tracos) ? 1 : 0)));

/**
 * Força de late de um herói: quanto farma (60%) e quando costuma vencer (40%). A taxa de vitória depois dos 40 min
 * ficou de fora: ela mistura a força geral do herói com o tempo de jogo (Templar Assassin vence 54% depois dos 40
 * apesar de vencer cedo, na média aos 33 min).
 */
function forcaDeLate(forca: ForcaPro, limites: LimitesDeNormalizacao): number {
  return 0.6 * percentil(forca.gpm_medio, limites.gpm) + 0.4 * percentil(forca.duracao_media_vitorias_min, limites.duracaoDasVitorias);
}

/** Um eixo por time, cada um de 0 (abaixo de qualquer herói do patch nessas métricas) a 1 (acima). Time vazio = 0 em tudo. */
export function pontuarEixos(time: readonly HeroiNoTime[], limites: LimitesDeNormalizacao): Readonly<Record<EixoId, number>> {
  if (time.length === 0) return { luta: 0, farm: 0, push: 0, pickoff: 0, early: 0, sustain: 0 };
  const noTime = (m: Metrica) => media(time.map((h) => percentil(METRICAS[m](h.forca), limites[m])));
  return {
    luta: media([fracaoComTraco(time, (t) => t.controleEmArea || t.danoEmArea), noTime("stuns")]),
    farm: mediaPorPosicao(time, (h) => forcaDeLate(h.forca, limites)),
    push: media([noTime("danoTorre"), fracaoComTraco(time, (t) => t.empurraTorre), fracaoComTraco(time, (t) => t.danoEmArea)]),
    pickoff: media([fracaoComTraco(time, (t) => t.controleAlvoUnico || t.fuga), noTime("danoHeroi")]),
    early: noTime("vitoriaCedo"),
    sustain: media([noTime("cura"), fracaoComTraco(time, (t) => t.cura)]),
  };
}

const CONSELHO_DO_EIXO: Readonly<Record<EixoId, string>> = {
  luta: "lutar em grupo antes do meio de jogo",
  farm: "evitar lutas até o seu core estar bem armado",
  push: "forçar troca de torre quando abrir espaço",
  pickoff: "isolar quem sair de posição, não entrar na luta de 5",
  early: "impor ritmo nos primeiros minutos",
  sustain: "estender lutas: o outro lado murcha com o tempo",
};

/** O eixo como a tela mostra: de 0 a 100, inteiro. */
export const pontos = (valor: number): number => Math.round(valor * 100);
/** Diferença mínima, em pontos de 0 a 100, para um lado estar na frente: abaixo disso é ruído das médias de pro. */
export const LIMIAR_DE_VANTAGEM = 5;

export type Vantagem = "meu" | "deles" | "parelho";
/** diferenca: pontos do seu time menos os do adversário, nos mesmos números que a tela mostra (positiva = você na frente). */
export type Comparacao = Readonly<{ eixo: EixoId; meu: number; deles: number; diferenca: number; vantagem: Vantagem }>;

const vantagemPela = (diferenca: number): Vantagem => {
  if (diferenca >= LIMIAR_DE_VANTAGEM) return "meu";
  if (diferenca <= -LIMIAR_DE_VANTAGEM) return "deles";
  return "parelho";
};

export function comparar(meu: Readonly<Record<EixoId, number>>, deles: Readonly<Record<EixoId, number>>): Comparacao[] {
  return EIXO_IDS.map((eixo) => {
    const diferenca = pontos(meu[eixo]) - pontos(deles[eixo]);
    return { eixo, meu: meu[eixo], deles: deles[eixo], diferenca, vantagem: vantagemPela(diferenca) };
  });
}

const titulo = (eixo: EixoId) => EIXOS[eixo].titulo.toLowerCase();
/** "a", "a e b", "a, b e c". */
const listar = (itens: readonly string[]) => (itens.length < 2 ? itens.join("") : `${itens.slice(0, -1).join(", ")} e ${itens.at(-1)}`);
const porDiferenca = (comparacoes: readonly Comparacao[]) => comparacoes.toSorted((a, b) => Math.abs(b.diferenca) - Math.abs(a.diferenca));
const vantagemEm = (comparacoes: readonly Comparacao[], eixo: EixoId): Vantagem => comparacoes.find((c) => c.eixo === eixo)?.vantagem ?? "parelho";

/** O tempo de jogo decide o plano antes de qualquer outro eixo: forte cedo contra forte no late. */
function planoDeJogo(comparacoes: readonly Comparacao[], meusEixos: readonly Comparacao[]): string | null {
  const early = vantagemEm(comparacoes, "early");
  const late = vantagemEm(comparacoes, "farm");
  if (early === "meu" && late === "deles") return "Seu draft é mais forte cedo e o deles no late: lute e pressione antes dos 30 min.";
  if (early === "deles" && late === "meu") return "O deles é mais forte cedo e o seu no late: evite lutas antes dos 30 min, farme e jogue para depois.";
  const principal = meusEixos[0];
  return principal ? `Jogue para ${CONSELHO_DO_EIXO[principal.eixo]}.` : null;
}

/** "Seu draft está na frente em X e Y. O adversário está na frente em Z. <plano>". Null com tudo parelho. */
export function resumoComparativo(comparacoes: readonly Comparacao[]): string | null {
  const meus = porDiferenca(comparacoes.filter((c) => c.vantagem === "meu"));
  const deles = porDiferenca(comparacoes.filter((c) => c.vantagem === "deles"));
  if (meus.length + deles.length === 0) return null;

  const frases = [
    meus.length > 0 ? `Seu draft está na frente em ${listar(meus.map((c) => titulo(c.eixo)))}.` : null,
    deles.length > 0 ? `O adversário está na frente em ${listar(deles.map((c) => titulo(c.eixo)))}.` : null,
    planoDeJogo(comparacoes, meus),
  ];
  return frases.filter((frase) => frase !== null).join(" ");
}
