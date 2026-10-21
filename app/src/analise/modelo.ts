// Tipos do motor de análise pós-jogo. Ver docs/analise-partida/SPEC.md para o desenho completo.
import type { Analise } from "../confronto/analise";
import type { HeroiNaPartida } from "../live/partida/detalhe";
import type { DetalheDaPartida } from "../live/partida/detalhe";
import type { HeroiDaPosicao } from "./pro";
import type { PorqueDosItens } from "./porqueDosItens";

export type Categoria = "erro" | "acerto" | "contexto";
export type Peso = "leve" | "pesou" | "pesou_muito";
export type Familia = "objetivos-e-aegis" | "mortes-e-visao" | "build" | "economia-e-farm" | "lutas";

export type Evidencia = Readonly<{
  numeros?: Readonly<Record<string, number | string>>;
  /** Normalizado 0-1; null quando a morte caiu fora de uma janela de teamfight (sem posição na fonte). */
  posicaoNoMapa?: { x: number; y: number } | null;
}>;

export type Achado = Readonly<{
  id: string;
  tipo: Categoria;
  /** Minutos (fracionário); null para achados sem instante único, como contagens da partida toda. */
  minuto: number | null;
  titulo: string;
  oQueAconteceu: string;
  oQueFazer: string | null;
  porque: string;
  fontes: readonly string[];
  peso: Peso;
  evidencias: Evidencia;
}>;

/**
 * `itens` fica de fora por enquanto: a família `build` (ver SPEC, fora de escopo nesta fase) é quem precisa do mapa
 * completo de itens do confronto; carregá-lo sem uma regra que o use seria uma chamada de rede sem efeito.
 */
export type Contexto = Readonly<{
  detalhe: DetalheDaPartida;
  /** content/confrontos (export/dota_export/confrontos.py), indexado por `detalhe.heroi.chave`; null sem dado pro do herói. */
  pro: Analise | null;
  /** app/public/data/pro_posicoes.json, casado por `hero_id`; é média do herói todo, não por posição (ver "o que não vemos"). */
  proDoHeroi: HeroiDaPosicao | null;
  meuHeroi: HeroiNaPartida;
  inimigos: readonly HeroiNaPartida[];
  /** Porquê tático de cada item do herói (analise/porqueDosItens.ts); ausente sem guia nem ficha carregados. */
  porqueDosItens?: PorqueDosItens;
}>;

export interface Regra {
  id: string;
  familia: Familia;
  avaliar(ctx: Contexto): readonly Achado[];
}

export const PESO_EM_NUMERO: Readonly<Record<Peso, number>> = { pesou_muito: 3, pesou: 2, leve: 1 };

/** Lista fixa do que os dados do OpenDota não deixam a análise concluir; sempre visível, nunca inferida como achado. */
export const O_QUE_NAO_VEMOS: readonly string[] = [
  "Qual habilidade específica causou cada morte (só o herói matador, não a skill).",
  "Morte fora de uma janela de teamfight não tem posição no mapa (deaths_pos vazio nesse caso).",
  "Vantagem numérica real na luta (5v4, 5v3): o OpenDota não lista quem estava vivo e presente.",
  "Se a luta foi dentro ou fora do high ground (sem zona de mapa marcada na fonte).",
  "Posição de wards inimigas (só as wards do próprio jogador aparecem).",
  "Mortes até 20 minutos comparadas a pro por posição: sem benchmark (ver placar por área).",
  "Comparação de ouro/dano por minuto é com a média do herói inteiro no pro, não filtrada por posição " +
    "(pro_por_posicao.json com p25/p75 por herói+posição ainda não foi gerado, ver SPEC).",
];
