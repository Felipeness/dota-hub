import type { Crescimento, Numeros, Objetivo, TipoCamp, UnidadeResumo } from "../data/schemas";

export type CrescimentoPorNivel = Extract<NonNullable<Crescimento>, { tipo: "por_nivel" }>;

// A nova tentativa muda a URL: o carregador guarda em cache o erro da URL anterior.
export const urlDoModelo = (modelo: string, tentativa = 0) => `/data/modelos/${modelo}.glb${tentativa ? `?tentativa=${tentativa}` : ""}`;
export const urlDoPoster = (modelo: string) => `/data/posters/${modelo}.jpg`;
type Linha = [string, string];

const fmt = (n: number) => n.toLocaleString("pt-BR");
const faixa = (min: number, max: number) => (min === max ? fmt(min) : `${fmt(min)} a ${fmt(max)}`);
const linha = (rotulo: string, valor: string | null): Linha[] => (valor === null ? [] : [[rotulo, valor]]);
const seNumero = (n: number | null, formatar: (n: number) => string = fmt) => (n === null ? null : formatar(n));

function textoDaVisao(dia: number, noite: number): string {
  return dia === noite ? fmt(dia) : `${fmt(dia)} de dia, ${fmt(noite)} de noite`;
}

export function gradeDeNumeros(n: Numeros): Linha[] {
  const dano = n.dano_min === null || n.dano_max === null ? null : faixa(n.dano_min, n.dano_max);
  return [
    ...linha("Vida", seNumero(n.vida)),
    ["Regeneração", fmt(n.regeneracao)],
    ...linha("Mana", n.mana > 0 ? fmt(n.mana) : null),
    ["Armadura", fmt(n.armadura)],
    ["Resistência mágica", `${fmt(n.resistencia_magica)}%`],
    ...linha("Dano", dano),
    ...linha("Intervalo de ataque", seNumero(n.intervalo_ataque, (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: 1 }))),
    ...linha("Alcance de ataque", seNumero(n.alcance_ataque)),
    ["Ataque", n.ataque],
    ["Velocidade", fmt(n.velocidade)],
    ...linha("Ouro", n.ouro_max > 0 ? faixa(n.ouro_min, n.ouro_max) : null),
    ...linha("XP", n.xp > 0 ? fmt(n.xp) : null),
    ["Visão", textoDaVisao(n.visao_dia, n.visao_noite)],
  ];
}

const minutos = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

export function textoDoCrescimento(c: CrescimentoPorNivel): string {
  const ganhos = [`+${fmt(c.vida)} de vida`, `+${fmt(c.dano)} de dano`, `+${fmt(c.armadura)} de armadura`,
    `+${fmt(c.vel_ataque)} de velocidade de ataque`, `+${fmt(c.ouro)} de ouro`];
  return `A cada ${minutos(c.a_cada_s)} de jogo: ${ganhos.join(", ")} e +${fmt(c.xp)} de XP, até o nível ${c.nivel_max}.`;
}

// Camp seco sorteia entre os tipos secos do mesmo tamanho; camp anfíbio sorteia entre os sapos do mesmo tamanho.
export function tiposDoCamp(camp: Objetivo, tipos: readonly TipoCamp[]): TipoCamp[] {
  const terreno = camp.detalhes["anfibio"] === true ? "inundado" : "seco";
  return tipos.filter((t) => t.terreno === terreno && t.tamanho === camp.detalhes["tipo"]);
}

const ROTULO_TAMANHO = { small: "pequeno", medium: "médio", large: "grande", ancient: "ancient" } as const satisfies Record<TipoCamp["tamanho"], string>;
const rotuloDoTipo = (t: TipoCamp) => `Selva: ${t.terreno === "inundado" ? "anfíbio" : ROTULO_TAMANHO[t.tamanho]}`;
// Unidade de selva sem camp conhecido aparece num grupo próprio, para o erro do export ficar visível.
const SEM_CAMP = "Selva: sem camp";
const ORDEM_SELVA = ["Selva: pequeno", "Selva: médio", "Selva: grande", "Selva: ancient", "Selva: anfíbio", SEM_CAMP];
const TITULO_GRUPO = { chefe: "Roshan e Tormentor", lane: "Creeps de lane" } as const;

function tituloDe(u: UnidadeResumo, tipos: ReadonlyMap<string, TipoCamp>): string {
  if (u.grupo !== "selva") return TITULO_GRUPO[u.grupo];
  const primeiro = u.camps.map((id) => tipos.get(id)).find((t) => t !== undefined);
  return primeiro ? rotuloDoTipo(primeiro) : SEM_CAMP;
}

export function agruparUnidades(unidades: readonly UnidadeResumo[], tipos: readonly TipoCamp[]): { titulo: string; unidades: UnidadeResumo[] }[] {
  const porId = new Map(tipos.map((t) => [t.id, t]));
  const ordem = [TITULO_GRUPO.chefe, TITULO_GRUPO.lane, ...ORDEM_SELVA];
  return ordem
    .map((titulo) => ({ titulo, unidades: unidades.filter((u) => tituloDe(u, porId) === titulo) }))
    .filter((g) => g.unidades.length > 0);
}
