/**
 * Tags dos heróis para explicar o "provável motivo" de um item. Classificação manual pelo que as habilidades fazem,
 * conferida nas fontes abaixo no patch 7.41; uma tag só entra quando a habilidade que a justifica é parte do kit
 * principal do herói. Herói sem entrada (os mais novos, sem conferência) não justifica item nenhum.
 */
export const FONTES_DAS_TAGS = [
  "https://www.dota2.com/heroes (descrição oficial das habilidades de cada herói, 7.41)",
  "https://liquipedia.net/dota2/Heroes (página de cada herói: habilidades, dispel, imunidade, quebra de passiva)",
  "https://liquipedia.net/dota2/Black_King_Bar, /Monkey_King_Bar, /Silver_Edge, /Spirit_Vessel, /Gem_of_True_Sight (counters citados na página do item)",
] as const;

export const TAGS = ["controle", "magico", "evasao", "ilusoes", "cura", "invisivel", "passiva", "fuga", "fisico"] as const;
export type Tag = (typeof TAGS)[number];

export const NOME_DA_TAG: Record<Tag, string> = {
  controle: "controle (stun, silence, hex)", magico: "dano mágico", evasao: "evasão", ilusoes: "ilusões",
  cura: "cura", invisivel: "invisibilidade", passiva: "passiva forte", fuga: "fuga rápida", fisico: "dano físico",
};

/** Chave = nome do herói no jogo sem `npc_dota_hero_` (o mesmo do OpenDota). */
export const TAGS_DOS_HEROIS: Readonly<Record<string, readonly Tag[]>> = {
  abaddon: ["cura"], abyssal_underlord: ["controle"], alchemist: ["cura"], ancient_apparition: ["magico"],
  antimage: ["fuga"], arc_warden: ["ilusoes"], axe: ["controle"], bane: ["controle"], batrider: ["controle"],
  beastmaster: ["controle"], bloodseeker: ["controle"], bounty_hunter: ["invisivel"], brewmaster: ["controle"],
  bristleback: ["passiva"], broodmother: ["invisivel"], centaur: ["controle"], chaos_knight: ["ilusoes", "controle"],
  chen: ["cura"], clinkz: ["invisivel"], crystal_maiden: ["controle", "magico"], dark_seer: ["ilusoes", "controle"],
  dark_willow: ["controle", "magico"], dawnbreaker: ["cura"], dazzle: ["cura"], death_prophet: ["magico"],
  disruptor: ["controle", "magico"], doom_bringer: ["controle"], dragon_knight: ["controle"], drow_ranger: ["fisico"],
  earth_spirit: ["controle", "magico"], earthshaker: ["controle", "magico"], elder_titan: ["controle", "magico"],
  ember_spirit: ["fuga", "controle"], enchantress: ["cura", "fisico"], enigma: ["controle"], faceless_void: ["controle"],
  furion: ["fuga"], grimstroke: ["controle", "magico"], gyrocopter: ["magico"], hoodwink: ["controle"],
  huskar: ["cura", "passiva"], invoker: ["magico", "controle"], jakiro: ["magico", "controle"],
  juggernaut: ["cura", "fisico"], keeper_of_the_light: ["magico"], kunkka: ["controle"], legion_commander: ["controle"],
  leshrac: ["magico", "controle"], lich: ["magico"], life_stealer: ["cura", "fisico"], lina: ["magico", "controle"],
  lion: ["controle", "magico"], lone_druid: ["fisico"], luna: ["fisico"], lycan: ["fisico"], magnataur: ["controle"],
  marci: ["fisico", "controle"], mars: ["controle"], medusa: ["fisico"], meepo: ["controle"],
  mirana: ["invisivel", "controle"], monkey_king: ["fisico"], morphling: ["fuga"], muerta: ["magico", "fisico"],
  naga_siren: ["ilusoes", "controle"], necrolyte: ["cura", "magico"], nevermore: ["magico", "fisico"],
  night_stalker: ["controle", "fisico"], nyx_assassin: ["controle", "magico", "invisivel"],
  obsidian_destroyer: ["magico", "controle"], ogre_magi: ["controle", "magico"], omniknight: ["cura"],
  oracle: ["cura", "magico"], pangolier: ["controle", "fuga"], phantom_assassin: ["evasao", "passiva", "fisico"],
  phantom_lancer: ["ilusoes"], phoenix: ["magico", "cura"], primal_beast: ["controle"],
  puck: ["controle", "magico", "fuga"], pudge: ["controle"], pugna: ["magico"], queenofpain: ["magico", "fuga"],
  rattletrap: ["controle"], razor: ["fisico"], riki: ["invisivel"], rubick: ["controle", "magico"],
  sand_king: ["controle", "magico"], shadow_demon: ["controle", "magico"], shadow_shaman: ["controle"],
  shredder: ["magico"], silencer: ["controle", "magico"], skeleton_king: ["controle", "fisico"],
  skywrath_mage: ["magico"], slardar: ["controle", "fisico"], slark: ["fuga"], snapfire: ["controle", "magico"],
  sniper: ["fisico"], spectre: ["passiva", "fisico"], spirit_breaker: ["controle"], storm_spirit: ["fuga", "magico"],
  sven: ["controle", "fisico"], techies: ["magico"], templar_assassin: ["fisico"], terrorblade: ["ilusoes", "fisico"],
  tidehunter: ["controle"], tinker: ["magico"], tiny: ["controle", "fisico"], treant: ["cura", "controle"],
  troll_warlord: ["fisico"], tusk: ["controle"], undying: ["cura"], ursa: ["fisico"], vengefulspirit: ["controle"],
  venomancer: ["magico"], viper: ["magico"], visage: ["magico"], void_spirit: ["fuga", "magico", "controle"],
  warlock: ["controle", "cura"], weaver: ["invisivel", "fuga"], windrunner: ["controle", "evasao"],
  winter_wyvern: ["controle", "cura"], wisp: ["cura"], witch_doctor: ["cura", "controle", "magico"], zuus: ["magico"],
};

export const tagsDoHeroi = (chave: string): readonly Tag[] => TAGS_DOS_HEROIS[chave] ?? [];

/** false = herói ainda sem entrada no dicionário de tags (não conferido), não "sem motivo de counter". */
export const heroiConferido = (chave: string): boolean => Object.hasOwn(TAGS_DOS_HEROIS, chave);
