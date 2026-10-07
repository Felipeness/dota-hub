import { NOME_DA_TAG, tagsDoHeroi, type Tag } from "./tagsDosHerois";

/**
 * Para que serve cada item comum e contra o quê ele costuma ser comprado. Função do item resumida da descrição
 * oficial (https://www.dota2.com/items, 7.41) e das páginas de item da Liquipedia; `contra` só existe quando a
 * página do item cita o caso como motivo de compra. `minimo` = quantos heróis inimigos com a tag justificam a regra.
 */
type Contra = Readonly<{ tags: readonly Tag[]; minimo: number }>;
type ItemCurado = Readonly<{ funcao: string; contra?: Contra }>;

const contra = (minimo: number, ...tags: Tag[]): Contra => ({ tags, minimo });

export const ITENS_CURADOS: Readonly<Record<string, ItemCurado>> = {
  black_king_bar: { funcao: "imunidade a magia: atravessa controle e dano mágico na luta", contra: contra(2, "controle", "magico") },
  silver_edge: { funcao: "quebra passivas e entra invisível para abrir a luta", contra: contra(1, "passiva") },
  invis_sword: { funcao: "invisibilidade para entrar na luta ou fugir; vira Silver Edge", contra: contra(1, "passiva") },
  monkey_king_bar: { funcao: "acerto garantido: ignora evasão", contra: contra(1, "evasao") },
  spirit_vessel: { funcao: "corta cura e regeneração do alvo", contra: contra(1, "cura") },
  shivas_guard: { funcao: "armadura, aura que reduz ataque e cura dos inimigos perto", contra: contra(1, "cura", "ilusoes") },
  skadi: { funcao: "atributos e ataque que deixa lento e corta cura", contra: contra(1, "cura") },
  dust: { funcao: "revela heróis invisíveis numa área", contra: contra(1, "invisivel") },
  gem: { funcao: "visão verdadeira permanente em volta do portador", contra: contra(1, "invisivel") },
  ward_sentry: { funcao: "ward que revela invisíveis e tira wards inimigas", contra: contra(1, "invisivel") },
  ward_observer: { funcao: "visão de uma área por vários minutos" },
  mjollnir: { funcao: "velocidade de ataque e raio em cadeia que limpa ilusões e creeps", contra: contra(1, "ilusoes") },
  maelstrom: { funcao: "raio em cadeia: farm rápido e dano em grupo", contra: contra(1, "ilusoes") },
  gungir: { funcao: "raio em cadeia e enraizar em área", contra: contra(1, "fuga") },
  radiance: { funcao: "dano em área contínuo e erro de ataque nos inimigos perto", contra: contra(1, "ilusoes") },
  bfury: { funcao: "cleave: farm muito rápido e dano em grupo", contra: contra(1, "ilusoes") },
  pipe: { funcao: "escudo de dano mágico para o time todo", contra: contra(2, "magico") },
  glimmer_cape: { funcao: "invisibilidade e resistência mágica para salvar um aliado", contra: contra(2, "magico") },
  eternal_shroud: { funcao: "resistência mágica e mana de volta ao tomar dano mágico", contra: contra(2, "magico") },
  hood_of_defiance: { funcao: "resistência mágica e escudo contra magia", contra: contra(2, "magico") },
  mage_slayer: { funcao: "resistência mágica e corta o dano mágico de quem você acerta", contra: contra(2, "magico") },
  lotus_orb: { funcao: "devolve magias de alvo único e tira debuffs", contra: contra(2, "controle") },
  sphere: { funcao: "bloqueia uma magia de alvo único", contra: contra(2, "controle") },
  manta: { funcao: "ilusões para farmar e dispel de silence e lentidão", contra: contra(2, "controle") },
  aeon_disk: { funcao: "escudo automático quando a vida cai rápido", contra: contra(2, "controle") },
  orchid: { funcao: "silence no alvo e dano extra", contra: contra(1, "fuga") },
  bloodthorn: { funcao: "silence com acerto crítico garantido", contra: contra(1, "fuga", "evasao") },
  nullifier: { funcao: "tira os buffs do alvo e o impede de usar item de salvar", contra: contra(1, "cura") },
  sheepstick: { funcao: "hex: transforma o alvo e o desliga por segundos", contra: contra(1, "fuga") },
  abyssal_blade: { funcao: "stun que atravessa imunidade e acerto com chance de stun", contra: contra(1, "fuga") },
  basher: { funcao: "chance de stun no ataque" },
  rod_of_atos: { funcao: "enraíza o alvo à distância", contra: contra(1, "fuga") },
  gleipnir: { funcao: "enraíza em área e dá raio em cadeia", contra: contra(1, "fuga") },
  heavens_halberd: { funcao: "desarma o alvo: ele não ataca por segundos", contra: contra(2, "fisico") },
  ghost: { funcao: "forma etérea: imune a ataques físicos", contra: contra(2, "fisico") },
  blade_mail: { funcao: "devolve o dano que você recebe", contra: contra(2, "fisico") },
  assault: { funcao: "armadura para o time e tira armadura dos inimigos", contra: contra(2, "fisico") },
  crimson_guard: { funcao: "bloqueio de dano físico para o time todo", contra: contra(2, "fisico") },
  butterfly: { funcao: "evasão, agilidade e velocidade de ataque", contra: contra(2, "fisico") },
  solar_crest: { funcao: "armadura e velocidade de ataque para um aliado" },
  blink: { funcao: "teleporte curto para iniciar ou fugir" },
  overwhelming_blink: { funcao: "blink com força e dano em área ao chegar" },
  swift_blink: { funcao: "blink com agilidade e velocidade ao chegar" },
  arcane_blink: { funcao: "blink com inteligência e magias mais rápidas" },
  force_staff: { funcao: "empurra você ou um aliado para fora do perigo" },
  hurricane_pike: { funcao: "empurrão e ataques extras à distância" },
  cyclone: { funcao: "Eul's: tira você ou o alvo da luta por alguns segundos" },
  wind_waker: { funcao: "tira um aliado da luta e o move dentro do ciclone" },
  desolator: { funcao: "tira armadura a cada ataque: mais dano físico" },
  greater_crit: { funcao: "Daedalus: acerto crítico grande" },
  satanic: { funcao: "roubo de vida forte ativável para virar a luta" },
  heart: { funcao: "muita vida e regeneração" },
  ultimate_scepter: { funcao: "Aghanim's Scepter: melhora uma habilidade do herói" },
  aghanims_shard: { funcao: "Aghanim's Shard: habilidade nova ou melhorada" },
  sange_and_yasha: { funcao: "atributos, velocidade e resistência a lentidão" },
  kaya_and_sange: { funcao: "dano de magia, vida e resistência a lentidão" },
  yasha_and_kaya: { funcao: "dano de magia, velocidade de ataque e de movimento" },
  echo_sabre: { funcao: "dois ataques seguidos que deixam lento" },
  harpoon: { funcao: "dois ataques seguidos e puxa até o alvo" },
  diffusal_blade: { funcao: "queima mana e deixa o alvo lento", contra: contra(1, "fuga") },
  disperser: { funcao: "queima mana, deixa lento e dá velocidade a um aliado", contra: contra(1, "fuga") },
  hand_of_midas: { funcao: "ouro e experiência extra: acelera o farm" },
  refresher: { funcao: "recarrega todas as habilidades e itens" },
  octarine_core: { funcao: "reduz o tempo de recarga das habilidades" },
  vladmir: { funcao: "aura de roubo de vida e armadura para o time" },
  helm_of_the_overlord: { funcao: "domina um creep forte e dá aura ao time" },
  mekansm: { funcao: "cura em área para o time" },
  guardian_greaves: { funcao: "cura e dispel em área para o time" },
  holy_locket: { funcao: "aumenta a cura e carrega cargas para curar um aliado" },
  ethereal_blade: { funcao: "deixa o alvo etéreo e aumenta o dano mágico nele" },
  dagon: { funcao: "dano mágico alto num alvo" },
  veil_of_discord: { funcao: "aumenta o dano mágico que os inimigos recebem" },
  parasma: { funcao: "dano mágico com ataques e reduz a resistência mágica" },
  khanda: { funcao: "crítico nas magias de alvo único" },
  revenants_brooch: { funcao: "ataques viram dano mágico por um tempo" },
  armlet: { funcao: "força e dano ativáveis gastando vida" },
  power_treads: { funcao: "botas que trocam de atributo" },
  phase_boots: { funcao: "botas com arrancada e dano" },
  arcane_boots: { funcao: "botas que repõem mana do time" },
  travel_boots: { funcao: "botas que teleportam para qualquer creep aliado" },
};

export type InimigoParaRegra = Readonly<{ chave: string; nome: string }>;
export type Explicacao = Readonly<{ funcao: string; motivo: string | null }>;

const itemCurado = (chave: string): ItemCurado | undefined =>
  (Object.hasOwn(ITENS_CURADOS, chave) ? ITENS_CURADOS[chave] : undefined);

function motivoContra(regra: Contra, inimigos: readonly InimigoParaRegra[]): string | null {
  const porTag = regra.tags
    .map((tag) => ({ tag, herois: inimigos.filter((i) => tagsDoHeroi(i.chave).includes(tag)).map((i) => i.nome) }))
    .filter(({ herois }) => herois.length >= regra.minimo);
  if (porTag.length === 0) return null;
  const partes = porTag.map(({ tag, herois }) => `${NOME_DA_TAG[tag]}: ${herois.join(", ")}`);
  return `Provável motivo: o time inimigo tem ${partes.join("; ")}.`;
}

/** null = item fora do dicionário. `motivo` null = a regra do item não casou com os heróis inimigos. */
export function explicarItem(chave: string, inimigos: readonly InimigoParaRegra[]): Explicacao | null {
  const item = itemCurado(chave);
  if (!item) return null;
  return { funcao: item.funcao, motivo: item.contra ? motivoContra(item.contra, inimigos) : null };
}

export const temExplicacao = (chave: string) => itemCurado(chave) !== undefined;
