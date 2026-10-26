// Ponte entre as constantes do OpenDota (habilidades, app/src/confronto) e os eixos do draft (eixos.ts).
// Controle, cura e fuga usam exatamente as mesmas regras do Confronto 1x1 (REGRAS em mecanicas.ts) para não
// ter duas definições do que é "controle" no Hub. Área e alvo único vêm dos campos do próprio OpenDota: o behavior
// ("AOE", "Unit Target"), os atributos de raio/largura (Crypt Swarm e Wild Axes não são marcados AOE, mas têm
// start_radius e radius) e o target_team (Firesnap Cookie mira um aliado, não um inimigo).
// Só o kit base conta: habilidades de Aghanim's e Shard vêm escondidas (Hidden) e atributos scepter_/shard_ são ignorados.
import { provar, REGRAS } from "../confronto/mecanicas";
import { ehPassiva, temValor, type Atributo, type Habilidade, type Heroi } from "../confronto/modelo";
import type { TracosDeHabilidade } from "./eixos";

function regraObrigatoria(id: string) {
  const regra = REGRAS.find((r) => r.id === id);
  if (!regra) throw new Error(`regra "${id}" não existe em mecanicas.ts`);
  return regra;
}

const DETECTOR_CONTROLE = regraObrigatoria("controle").detector;
const DETECTOR_CURA = regraObrigatoria("cura").detector;
const DETECTOR_FUGA = regraObrigatoria("fuga").detector;

const DO_AGHANIM = /scepter|shard/i;
// Raio de visão, de busca ou de aura não diz que a habilidade bate em mais de um.
const RAIO_QUE_NAO_E_AREA = /vision|sight|search|aura|presence|tether|break|grab|cast|max_distance|spawn|placement|bonus_range|speed|pct/i;
const CHAVE_DE_AREA = /radius|aoe|area|width|spread|cone|splash|cleave|bounce|jump|echo|arrow_count/i;
// Chaves de "damage" que não são dano causado: redução, bloqueio, amplificação, barreira.
const DANO_QUE_NAO_E_DANO = /reduc|block|incoming|amp|threshold|reflect|outgoing|absorb|barrier|resist|illusion|per_kill/i;

const ehDaBase = (a: Atributo) => !DO_AGHANIM.test(a.chave) && temValor(a);
const eAtributoDeArea = (a: Atributo) => ehDaBase(a) && CHAVE_DE_AREA.test(a.chave) && !RAIO_QUE_NAO_E_AREA.test(a.chave);
const eAtributoDeDano = (a: Atributo) => ehDaBase(a) && /damage|dmg|dps/i.test(a.chave) && !DANO_QUE_NAO_E_DANO.test(a.chave);

const ativa = (h: Habilidade) => !ehPassiva(h);
// Sacred Arrow, Meat Hook e Pounce têm largura de projétil, mas param no primeiro que acertam.
const paraNoPrimeiro = (h: Habilidade) => /\bfirst (enemy )?(unit|hero)\b|if the hook hits/i.test(h.descricao);
// Terror Wave só tem raio no Scepter; o texto é que diz "in all directions".
const AREA_NO_TEXTO = /in all directions|all (nearby )?enem|nearby enem|enemies (in|around|near|along)|in an area|area of effect|in a (line|cone)/i;
const atingeArea = (h: Habilidade) =>
  h.comportamento.includes("AOE") || (!paraNoPrimeiro(h) && (h.atributos.some(eAtributoDeArea) || AREA_NO_TEXTO.test(h.descricao)));
const soParaAliado = (h: Habilidade) => h.alvo.length === 1 && h.alvo[0] === "Friendly";
/** Mira um inimigo: Unit Target que não seja só para aliados (Firesnap Cookie), ou projétil que para no primeiro que acerta. */
const miraUmInimigo = (h: Habilidade) => (h.comportamento.includes("Unit Target") && !soParaAliado(h)) || paraNoPrimeiro(h);
// Bash, Time Lock e o ensnare do Troll prendem quem o herói está batendo: controle de alvo único sem botão.
const prendeNoAtaque = (h: Habilidade) => ehPassiva(h) && /\bbash|\bstun|ensnare|lock an enemy unit in time/i.test(h.descricao) && /attack/i.test(h.descricao);
/**
 * Dano a inimigo: tipo de dano declarado e um atributo de dano (ou o texto, como Purification, cujo dano é o atributo
 * "heal"). Passivas de cleave como Great Cleave não declaram tipo de dano, então o atributo de cleave basta.
 */
const causaDano = (h: Habilidade) =>
  (h.tipoDeDano !== null && (h.atributos.some(eAtributoDeDano) || /\bdamag(e|es|ing)\b/i.test(h.descricao)))
  || h.atributos.some((a) => ehDaBase(a) && /cleave|splash/.test(a.chave) && /damage/.test(a.chave));
const prende = (h: Habilidade) => provar(h, DETECTOR_CONTROLE) !== null;
// Unidade invocada que fica no mapa batendo: o atributo de vida dela (wolf_hp, ward_health, treant_health, eidelon_max_health).
const VIDA_DE_INVOCACAO = /^(tooltip_)?(wolf|boar|hawk|golem|eidelon|treant|spiderling|bear|familiar|zombie|skeleton|ward|imp)_(base_max_health|max_health|health|hp)(_tooltip)?$/;
// Feitiço comum não acerta construção; quando acerta, o OpenDota diz (structure_damage_mod, affects_buildings, building_damage_pct).
const DANO_EM_CONSTRUCAO = /build|structure/;
const empurraTorre = (h: Habilidade) =>
  h.atributos.some((a) => temValor(a) && (VIDA_DE_INVOCACAO.test(a.chave) || (DANO_EM_CONSTRUCAO.test(a.chave) && !/reduction/.test(a.chave))))
  || /\b(units|enemies) and (structures|buildings)\b/i.test(h.descricao);

/**
 * Onde o dado do OpenDota não diz a verdade, com a habilidade que justifica. Fica pequeno de propósito: cada linha é
 * uma habilidade cujo texto ou atributo não deixa a regra acertar sozinha.
 */
const CORRECOES: Readonly<Record<string, Partial<TracosDeHabilidade>>> = {
  // Shapeshift: "Lycan moves at increased speed and cannot be slowed" (max speed 650) é a fuga dele; o texto não tem salto nem blink.
  lycan: { fuga: true },
  // Windrun: "Increases movement speed and adds evasion", a fuga clássica; velocidade sozinha não conta para mais ninguém.
  windrunner: { fuga: true },
};

export function tracosDoHeroi(heroi: Heroi): TracosDeHabilidade {
  const ativas = heroi.habilidades.filter(ativa);
  const detectados: TracosDeHabilidade = {
    controleEmArea: ativas.some((h) => atingeArea(h) && prende(h)),
    controleAlvoUnico: ativas.some((h) => miraUmInimigo(h) && prende(h)) || heroi.habilidades.some(prendeNoAtaque),
    danoEmArea: heroi.habilidades.some((h) => atingeArea(h) && causaDano(h)),
    cura: heroi.habilidades.some((h) => provar(h, DETECTOR_CURA) !== null),
    fuga: ativas.some((h) => provar(h, DETECTOR_FUGA) !== null),
    empurraTorre: heroi.habilidades.some(empurraTorre),
  };
  return { ...detectados, ...CORRECOES[heroi.chave] };
}
