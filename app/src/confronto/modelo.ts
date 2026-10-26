import type { AghanimFonte, HabilidadeFonte, HabilidadesDosHeroisFonte, HabilidadesFonte, HeroisFonte, ItensFonte } from "./fonte";

export const MECANICAS = ["invisibilidade", "silencio", "controle", "magico", "puro", "ilusoes", "cura", "evasao", "fuga", "passivas"] as const;
export type MecanicaId = (typeof MECANICAS)[number];

export type Atributo = Readonly<{ chave: string; rotulo: string; valores: readonly string[] }>;
export type Dispel = "basico" | "so-forte" | "nao" | "desconhecido";

export type Habilidade = Readonly<{
  chave: string;
  nome: string;
  comportamento: readonly string[];
  tipoDeDano: string | null;
  /** target_team do OpenDota: "Enemy", "Friendly", "Both" (vazio quando a habilidade não mira ninguém). */
  alvo: readonly string[];
  /** Habilidade inata (is_innate): vem com o herói, sem ponto de habilidade. */
  inata: boolean;
  /** null quando o OpenDota não informa. */
  atravessaBkb: boolean | null;
  dispel: Dispel;
  descricao: string;
  atributos: readonly Atributo[];
  recargaS: readonly number[];
}>;

/** Texto do Aghanim's Shard ou Scepter de um herói, como o jogo descreve. */
export type Melhoria = Readonly<{ habilidade: string; descricao: string }>;
export type Aghanim = Readonly<{ shard: Melhoria | null; scepter: Melhoria | null }>;
const SEM_AGHANIM: Aghanim = { shard: null, scepter: null };

export type Heroi = Readonly<{
  id: number;
  /** Nome curto do jogo, usado na URL e nos ícones: "slark", "antimage". */
  chave: string;
  nome: string;
  corpoACorpo: boolean;
  alcance: number;
  velocidade: number;
  armadura: number;
  habilidades: readonly Habilidade[];
  aghanim: Aghanim;
}>;

/** `valores` vem do attrib do item: "invuln_duration" -> "0.1". */
export type Item = Readonly<{ id: number; chave: string; nome: string; texto: string; valores: Readonly<Record<string, string>> }>;

const lista = (v: HabilidadeFonte["behavior"]): string[] => (v === null || v === undefined ? [] : [v].flat().map(String));
const primeiro = (v: HabilidadeFonte["behavior"]): string | null => lista(v)[0] ?? null;

const DISPEL: Readonly<Record<string, Dispel>> = { Yes: "basico", "Strong Dispels Only": "so-forte", No: "nao" };
const SIM_NAO: Readonly<Record<string, boolean>> = { Yes: true, No: false };

const numeros = (v: HabilidadeFonte["cd"]): number[] => lista(v).map(Number).filter((n) => Number.isFinite(n));

export function habilidade(chave: string, fonte: HabilidadeFonte): Habilidade {
  return {
    chave,
    nome: fonte.dname ?? chave,
    comportamento: lista(fonte.behavior),
    tipoDeDano: primeiro(fonte.dmg_type),
    alvo: lista(fonte.target_team),
    inata: fonte.is_innate === true,
    atravessaBkb: SIM_NAO[primeiro(fonte.bkbpierce) ?? ""] ?? null,
    dispel: DISPEL[primeiro(fonte.dispellable) ?? ""] ?? "desconhecido",
    descricao: fonte.desc ?? "",
    atributos: [
      ...(fonte.attrib ?? []).map((a) => ({ chave: a.key, rotulo: (a.header ?? a.key).replace(/:$/, ""), valores: lista(a.value) })),
      ...(fonte.dmg == null ? [] : [{ chave: "damage", rotulo: "DAMAGE", valores: lista(fonte.dmg) }]),
    ],
    recargaS: numeros(fonte.cd),
  };
}

/** Escondidas são sub-habilidades (Shard, Scepter, transformações) que nem sempre o herói tem. */
const visivel = (h: Habilidade) => !h.comportamento.includes("Hidden");

export function montarHerois(herois: HeroisFonte, doHeroi: HabilidadesDosHeroisFonte, habilidades: HabilidadesFonte): Heroi[] {
  return Object.values(herois).map((h) => {
    const chaves = (doHeroi[h.name]?.abilities ?? []).flat().filter((c) => !c.startsWith("generic_"));
    return {
      id: h.id,
      chave: h.name.replace(/^npc_dota_hero_/, ""),
      nome: h.localized_name,
      corpoACorpo: h.attack_type === "Melee",
      alcance: h.attack_range,
      velocidade: h.move_speed,
      armadura: h.base_armor,
      habilidades: chaves.flatMap((c) => {
        const fonte = habilidades[c];
        return fonte ? [habilidade(c, fonte)] : [];
      }).filter(visivel),
      aghanim: SEM_AGHANIM,
    };
  }).sort((a, b) => a.nome.localeCompare(b.nome));
}

// Algumas descrições do aghs_desc vêm com <span> do tooltip do jogo.
const semTags = (texto: string) => texto.replace(/<[^>]+>/g, "").trim();
const melhoria = (tem: boolean, habilidade: string | null | undefined, descricao: string | null | undefined): Melhoria | null =>
  tem && descricao ? { habilidade: habilidade ?? "", descricao: semTags(descricao) } : null;

export function comAghanim(herois: readonly Heroi[], aghanim: AghanimFonte): Heroi[] {
  const porNome = new Map(aghanim.map((a) => [a.hero_name.replace(/^npc_dota_hero_/, ""), a]));
  return herois.map((h) => {
    const a = porNome.get(h.chave);
    if (!a) return h;
    return {
      ...h,
      aghanim: {
        shard: melhoria(a.has_shard, a.shard_skill_name, a.shard_desc),
        scepter: melhoria(a.has_scepter, a.scepter_skill_name, a.scepter_desc),
      },
    };
  });
}

export function montarItens(itens: ItensFonte): ReadonlyMap<string, Item> {
  return new Map(Object.entries(itens).map(([chave, i]) => [chave, {
    id: i.id, chave, nome: i.dname ?? chave,
    texto: (i.abilities ?? []).map((a) => a.description ?? "").join("\n"),
    valores: Object.fromEntries((i.attrib ?? []).map((a) => [a.key, lista(a.value).join(" / ")])),
  }]));
}

/** Aceita o nome curto ("slark") ou o número do herói ("93"). */
export function acharHeroi(herois: readonly Heroi[], parametro: string | undefined): Heroi | null {
  if (!parametro) return null;
  return herois.find((h) => h.chave === parametro || String(h.id) === parametro) ?? null;
}

export const ehPassiva = (h: Habilidade) => h.comportamento.includes("Passive");
/** O OpenDota gera atributos zerados ("generated"); esses não provam nada. */
export const temValor = (a: Atributo) => a.valores.some((v) => parseFloat(v) > 0);
export const temDano = (h: Habilidade) => h.atributos.some((a) => /damage/.test(a.chave) && temValor(a));
/** Ultimates têm 3 níveis; as outras, 4. É o que dá para afirmar só com a recarga do OpenDota. */
export const ehUltimate = (h: Habilidade) => !ehPassiva(h) && h.recargaS.length === 3;

export const urlDoRetrato = (h: Pick<Heroi, "chave">) =>
  `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${h.chave}.png`;
export const urlDoItem = (chave: string) =>
  `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/${chave}.png`;
