// Pontos de força do draft: cada eixo é a média de 1 a 3 números reais (0 a 1), não nota inventada.
// Metade vem da ficha de pro (export/dota_export/pro_posicoes.py, médias por partida-jogador normalizadas
// contra os 127 heróis do patch) e metade das habilidades do herói no OpenDota (comportamento "AOE"/"Unit
// Target" e as mesmas regras de controle/cura/fuga do Confronto 1x1, app/src/confronto/mecanicas.ts), para
// não repetir o mesmo número de pro em dois eixos que deveriam significar coisas diferentes.
import type { ForcaPro, PosicaoId } from "./posicoesPro";

export const EIXO_IDS = ["luta", "farm", "push", "pickoff", "early", "sustain"] as const;
export type EixoId = (typeof EIXO_IDS)[number];

export const EIXOS: Readonly<Record<EixoId, { titulo: string; comoCalcular: string }>> = {
  luta: { titulo: "Luta em grupo", comoCalcular: "Média de: controle ou dano em área (habilidades marcadas AOE no OpenDota), e os stuns médios por partida de pro (normalizado contra os 127 heróis do patch)." },
  farm: { titulo: "Farm e late", comoCalcular: "Média de: gold por minuto de pro dos heróis nas posições 1 a 3 (os cores do time), e a taxa de vitória de pro em partidas que passaram de 40 minutos." },
  push: { titulo: "Push e limpar wave", comoCalcular: "Média de: dano a torre de pro, e a fração do time com habilidade de dano em área (AOE) no OpenDota." },
  pickoff: { titulo: "Pickoff e caça", comoCalcular: "Média de: fração do time com controle de alvo único (stun, hex, raiz) no OpenDota, e fração com habilidade de fuga/blink (mobilidade para chegar no alvo)." },
  early: { titulo: "Ritmo no early", comoCalcular: "Taxa de vitória de pro em partidas que terminaram antes dos 30 minutos." },
  sustain: { titulo: "Sobrevivência e sustain", comoCalcular: "Média de: cura/lifesteal médio de pro por partida, e a fração do time com habilidade de cura no OpenDota." },
};

/** Flags de habilidade por herói, tiradas do OpenDota pelas mesmas regras do Confronto 1x1 (ver tracosDeHabilidade.ts). */
export type TracosDeHabilidade = Readonly<{
  controleEmArea: boolean; controleAlvoUnico: boolean; danoEmArea: boolean; cura: boolean; fuga: boolean;
}>;
export const SEM_TRACOS: TracosDeHabilidade = { controleEmArea: false, controleAlvoUnico: false, danoEmArea: false, cura: false, fuga: false };

export type HeroiNoTime = Readonly<{ forca: ForcaPro; tracos: TracosDeHabilidade; posicao: PosicaoId }>;

export type Limites = Readonly<{ min: number; max: number }>;
/** Min e máx de cada estatística de força entre os 127 heróis do patch: a régua que normaliza qualquer time. */
export type LimitesDeNormalizacao = Readonly<{ gpm: Limites; danoTorre: Limites; stuns: Limites; cura: Limites }>;

const metricas = (fs: readonly ForcaPro[], ler: (f: ForcaPro) => number): Limites => {
  const valores = fs.map(ler);
  return { min: Math.min(...valores), max: Math.max(...valores) };
};

export function calcularLimites(todasAsForcas: readonly ForcaPro[]): LimitesDeNormalizacao {
  return {
    gpm: metricas(todasAsForcas, (f) => f.gpm_medio),
    danoTorre: metricas(todasAsForcas, (f) => f.dano_torre_medio),
    stuns: metricas(todasAsForcas, (f) => f.stuns_medio_s),
    cura: metricas(todasAsForcas, (f) => f.cura_media),
  };
}

/** 0 no pior herói do patch nesta métrica, 1 no melhor; min === max (um só herói na amostra) vira neutro. */
const normalizar = (valor: number, limite: Limites): number => (limite.max === limite.min ? 0.5 : (valor - limite.min) / (limite.max - limite.min));

const media = (valores: readonly number[]): number => (valores.length === 0 ? 0 : valores.reduce((soma, v) => soma + v, 0) / valores.length);
const fracaoComTraco = (time: readonly HeroiNoTime[], tem: (t: TracosDeHabilidade) => boolean): number => media(time.map((h) => (tem(h.tracos) ? 1 : 0)));

const EH_CORE = (posicao: PosicaoId) => posicao <= 3;

/** Um eixo por time, cada um de 0 (pior do que qualquer herói do patch nessas métricas) a 1 (melhor). Time vazio = 0 em tudo. */
export function pontuarEixos(time: readonly HeroiNoTime[], limites: LimitesDeNormalizacao): Readonly<Record<EixoId, number>> {
  if (time.length === 0) return { luta: 0, farm: 0, push: 0, pickoff: 0, early: 0, sustain: 0 };
  const cores = time.filter((h) => EH_CORE(h.posicao));
  const gpmDosCores = cores.length > 0 ? media(cores.map((h) => normalizar(h.forca.gpm_medio, limites.gpm))) : 0;
  return {
    luta: media([
      fracaoComTraco(time, (t) => t.controleEmArea || t.danoEmArea),
      media(time.map((h) => normalizar(h.forca.stuns_medio_s, limites.stuns))),
    ]),
    farm: media([gpmDosCores, media(time.map((h) => h.forca.vitoria_por_duracao.mais_40min.taxa))]),
    push: media([
      media(time.map((h) => normalizar(h.forca.dano_torre_medio, limites.danoTorre))),
      fracaoComTraco(time, (t) => t.danoEmArea),
    ]),
    pickoff: media([fracaoComTraco(time, (t) => t.controleAlvoUnico), fracaoComTraco(time, (t) => t.fuga)]),
    early: media(time.map((h) => h.forca.vitoria_por_duracao.menos_30min.taxa)),
    sustain: media([media(time.map((h) => normalizar(h.forca.cura_media, limites.cura))), fracaoComTraco(time, (t) => t.cura)]),
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

export type Comparacao = Readonly<{ eixo: EixoId; meu: number; deles: number; diferenca: number }>;

/** Diferença positiva = seu draft na frente nesse eixo. */
export function comparar(meu: Readonly<Record<EixoId, number>>, deles: Readonly<Record<EixoId, number>>): Comparacao[] {
  return EIXO_IDS.map((eixo) => ({ eixo, meu: meu[eixo], deles: deles[eixo], diferenca: meu[eixo] - deles[eixo] }));
}

const titulo = (eixo: EixoId) => EIXOS[eixo].titulo.toLowerCase();
/** "a", "a e b", "a, b e c". */
const listar = (itens: readonly string[]) => (itens.length < 2 ? itens.join("") : `${itens.slice(0, -1).join(", ")} e ${itens.at(-1)}`);
const porDiferenca = (comparacoes: readonly Comparacao[]) => comparacoes.toSorted((a, b) => Math.abs(b.diferenca) - Math.abs(a.diferenca));
const diferencaEm = (comparacoes: readonly Comparacao[], eixo: EixoId) => comparacoes.find((c) => c.eixo === eixo)?.diferenca ?? 0;

/** O tempo de jogo decide o plano antes de qualquer outro eixo: forte cedo contra forte no late. */
function planoDeJogo(comparacoes: readonly Comparacao[], meusEixos: readonly Comparacao[]): string | null {
  const early = diferencaEm(comparacoes, "early");
  const late = diferencaEm(comparacoes, "farm");
  if (early > 0 && late < 0) return "Seu draft é mais forte cedo e o deles no late: lute e pressione antes dos 30 min.";
  if (early < 0 && late > 0) return "O deles é mais forte cedo e o seu no late: evite lutas antes dos 30 min, farme e jogue para depois.";
  const principal = meusEixos[0];
  return principal ? `Jogue para ${CONSELHO_DO_EIXO[principal.eixo]}.` : null;
}

/** "Seu draft está na frente em X e Y. O adversário está na frente em Z. <plano>". Null sem diferença em nenhum eixo. */
export function resumoComparativo(comparacoes: readonly Comparacao[]): string | null {
  const meus = porDiferenca(comparacoes.filter((c) => c.diferenca > 0));
  const deles = porDiferenca(comparacoes.filter((c) => c.diferenca < 0));
  if (meus.length + deles.length === 0) return null;

  const frases = [
    meus.length > 0 ? `Seu draft está na frente em ${listar(meus.map((c) => titulo(c.eixo)))}.` : null,
    deles.length > 0 ? `O adversário está na frente em ${listar(deles.map((c) => titulo(c.eixo)))}.` : null,
    planoDeJogo(comparacoes, meus),
  ];
  return frases.filter((frase) => frase !== null).join(" ");
}
