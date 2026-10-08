// Interações que as constantes do OpenDota não descrevem: o que dá para desviar no tempo certo e o que um
// Shard ou Scepter muda contra uma habilidade específica. Só entra o que foi conferido em pelo menos duas fontes,
// e o schema recusa a entrada que não trouxer as duas. Os números que existem nas constantes (conjuração,
// invulnerabilidade do item) a tela tira dos dados; aqui fica só o que os dados não dizem.
import { z } from "zod";
import { MECANICAS } from "./modelo";

const fontes = z.array(z.url({ protocol: /^https$/ })).min(2, "interação curada precisa de pelo menos duas fontes");

const comum = {
  id: z.string().min(1),
  mecanica: z.enum(MECANICAS),
  /** Chave da habilidade do inimigo no OpenDota: "axe_berserkers_call". */
  contra: z.string().min(1),
  /** Frase curta, visível de cara. */
  resumo: z.string().min(1),
  /** O porquê, mostrado ao expandir. */
  detalhe: z.string().min(1),
  /** Patch em que a interação foi conferida. */
  patch: z.string().regex(/^7\.\d+[a-z]?$/),
  fontes,
};

export const interacaoSchema = z.discriminatedUnion("tipo", [
  /** Um item que deixa você invulnerável na hora em que a habilidade dele resolve. */
  z.object({ tipo: z.literal("desvio"), item: z.string().min(1), ...comum }),
  /** O Shard ou Scepter do seu herói contra a habilidade dele. */
  z.object({ tipo: z.literal("melhoria"), heroi: z.string().min(1), melhoria: z.enum(["shard", "scepter"]), ...comum }),
]);

export type Interacao = z.infer<typeof interacaoSchema>;

const FONTE = {
  axeWiki: "https://dota2.fandom.com/wiki/Axe",
  axeJogo: "https://github.com/SteamDatabase/GameTracking-Dota2/blob/master/game/dota/pak01_dir/scripts/npc/heroes/npc_dota_hero_axe.txt",
  mantaWiki: "https://dota2.fandom.com/wiki/Manta_Style",
  itensOpenDota: "https://api.opendota.com/api/constants/items",
  patch740: "https://www.dota2.com/patches/7.40",
  aghsOpenDota: "https://api.opendota.com/api/constants/aghs_desc",
  morphlingJogo: "https://github.com/SteamDatabase/GameTracking-Dota2/blob/master/game/dota/pak01_dir/scripts/npc/heroes/npc_dota_hero_morphling.txt",
  morphlingWiki: "https://dota2.fandom.com/wiki/Morphling",
  tauntLiquipedia: "https://liquipedia.net/dota2/Taunt",
  patch731: "https://www.dota2.com/patches/7.31",
  patch733: "https://www.dota2.com/patches/7.33",
  abilidadesOpenDota: "https://api.opendota.com/api/constants/abilities",
  invulneravelLiquipedia: "https://liquipedia.net/dota2/Invulnerability",
  disjointLiquipedia: "https://liquipedia.net/dota2/Disjoint",
  linaWiki: "https://dota2.fandom.com/wiki/Lina",
  linaJogo: "https://github.com/SteamDatabase/GameTracking-Dota2/blob/master/game/dota/pak01_dir/scripts/npc/heroes/npc_dota_hero_lina.txt",
  sniperWiki: "https://dota2.fandom.com/wiki/Sniper",
  sniperJogo: "https://github.com/SteamDatabase/GameTracking-Dota2/blob/master/game/dota/pak01_dir/scripts/npc/heroes/npc_dota_hero_sniper.txt",
  lionWiki: "https://dota2.fandom.com/wiki/Lion",
  svenWiki: "https://dota2.fandom.com/wiki/Sven",
  svenJogo: "https://github.com/SteamDatabase/GameTracking-Dota2/blob/master/game/dota/pak01_dir/scripts/npc/heroes/npc_dota_hero_sven.txt",
  viperWiki: "https://dota2.fandom.com/wiki/Viper",
  venomancerWiki: "https://dota2.fandom.com/wiki/Venomancer",
} as const;

export const INTERACOES: readonly Interacao[] = z.array(interacaoSchema).parse([
  {
    tipo: "desvio", id: "manta-berserkers-call", mecanica: "controle", contra: "axe_berserkers_call", item: "manta", patch: "7.41",
    resumo: "Ative o Manta no fim da conjuração do Call: invulnerável e escondido, você não é taunted.",
    detalhe: "O Berserker's Call só pega quem está no raio quando a conjuração termina, e não afeta unidade invulnerável nem escondida. "
      + "Enquanto se divide, o Manta deixa você invulnerável e escondido.",
    fontes: [FONTE.axeWiki, FONTE.mantaWiki, FONTE.itensOpenDota, FONTE.patch740, FONTE.axeJogo],
  },
  {
    tipo: "melhoria", id: "shard-morphling-berserkers-call", mecanica: "controle", contra: "axe_berserkers_call",
    heroi: "morphling", melhoria: "shard", patch: "7.41",
    resumo: "Com o Shard você liga a Força mesmo sob o Call e sai da faixa do Culling Blade.",
    detalhe: "O Culling Blade mata na hora quem está com a vida abaixo do dano dele: 275 / 375 / 475, mais 150 com o talento do nível 25. "
      + "Sem Shard, o Attribute Shift não liga enquanto você está preso, só segue o que já estava ligado antes. "
      + "Com o Shard ele liga mesmo sob taunt ou stun (não sob silêncio nem hex). "
      + "Cada ponto de Força vira 22 de vida atual, e no nível 4 o Shift troca 16 pontos por segundo.",
    fontes: [FONTE.aghsOpenDota, FONTE.morphlingJogo, FONTE.morphlingWiki, FONTE.tauntLiquipedia, FONTE.axeWiki, FONTE.patch731, FONTE.patch733],
  },
  {
    tipo: "desvio", id: "manta-laguna-blade", mecanica: "magico", contra: "lina_laguna_blade", item: "manta", patch: "7.41",
    resumo: "Manta durante o atraso da Laguna Blade: você some e o dano não acontece.",
    detalhe: "A Laguna Blade conjura em 0,3s e só aplica o dano 0,25s depois, quando o debuff que ela coloca no alvo expira; não é um efeito instantâneo nem um projétil. "
      + "Quem está invulnerável ou escondido nesse instante de 0,25s pós-conjuração não recebe o dano, mesmo sem Black King Bar. "
      + "O Manta Style deixa você invulnerável e escondido por 0,1s ao se dividir, então o aperto certo é perto do fim desses 0,25s, não no começo da conjuração.",
    fontes: [FONTE.linaWiki, FONTE.linaJogo, FONTE.abilidadesOpenDota, FONTE.mantaWiki, FONTE.invulneravelLiquipedia],
  },
  {
    tipo: "desvio", id: "manta-finger-of-death", mecanica: "magico", contra: "lion_finger_of_death", item: "manta", patch: "7.41",
    resumo: "Manta durante o atraso do Finger of Death: o dano não chega.",
    detalhe: "O Finger of Death conjura em 0,3s e só aplica o dano 0,25s depois, o mesmo padrão de atraso pós-conjuração da Laguna Blade. "
      + "Ficar invulnerável ou escondido nesse intervalo de 0,25s evita o dano, mesmo sem Black King Bar. "
      + "O Manta Style cobre isso com os 0,1s de invulnerabilidade da divisão, apertando perto do fim do atraso.",
    fontes: [FONTE.lionWiki, FONTE.abilidadesOpenDota, FONTE.mantaWiki, FONTE.invulneravelLiquipedia],
  },
  {
    tipo: "desvio", id: "manta-assassinate", mecanica: "magico", contra: "sniper_assassinate", item: "manta", patch: "7.41",
    resumo: "Manta durante o voo da bala do Assassinate: o tiro perde o alvo.",
    detalhe: "O Assassinate mira por 2s e só depois dispara um projétil de verdade, a 2500 de velocidade, que viaja até acertar; não é um efeito instantâneo. "
      + "O Manta Style disjointa esse projétil quando ativado enquanto a bala ainda está no ar. "
      + "O aperto certo é qualquer momento entre o fim da mira e o tiro chegar, não durante os 2s de mira.",
    fontes: [FONTE.sniperWiki, FONTE.sniperJogo, FONTE.abilidadesOpenDota, FONTE.mantaWiki, FONTE.disjointLiquipedia],
  },
  {
    tipo: "desvio", id: "manta-storm-hammer", mecanica: "controle", contra: "sven_storm_bolt", item: "manta", patch: "7.41",
    resumo: "Manta durante o voo do Storm Hammer: o martelo perde o alvo.",
    detalhe: "O Storm Hammer conjura em 0,2s e depois lança um martelo de verdade a 1000 de velocidade; o stun só pega quem o martelo atinge. "
      + "O Manta Style disjointa esse projétil ao ser ativado durante o voo, e o martelo passa reto por onde você estava.",
    fontes: [FONTE.svenWiki, FONTE.svenJogo, FONTE.abilidadesOpenDota, FONTE.mantaWiki, FONTE.disjointLiquipedia],
  },
  {
    tipo: "desvio", id: "manta-viper-strike", mecanica: "magico", contra: "viper_viper_strike", item: "manta", patch: "7.41",
    resumo: "Manta durante o voo do Viper Strike: o projétil some com você.",
    detalhe: "O Viper Strike conjura em 0,2s e dispara um projétil teleguiado a 1500 de velocidade; o veneno só aplica no impacto. "
      + "O Manta Style disjointa esse projétil durante o voo, antes que ele chegue.",
    fontes: [FONTE.viperWiki, FONTE.abilidadesOpenDota, FONTE.mantaWiki, FONTE.disjointLiquipedia],
  },
  {
    tipo: "desvio", id: "manta-noxious-plague", mecanica: "magico", contra: "venomancer_noxious_plague", item: "manta", patch: "7.41",
    resumo: "Manta durante o voo da Noxious Plague: a praga erra o alvo.",
    detalhe: "A Noxious Plague conjura em 0,15s e lança um projétil a 1200 de velocidade; o efeito inicial só pega no impacto (os respingos soltos depois, quando o "
      + "debuff expira, não valem o mesmo desvio). O Manta Style disjointa o projétil primário durante o voo.",
    fontes: [FONTE.venomancerWiki, FONTE.abilidadesOpenDota, FONTE.mantaWiki, FONTE.disjointLiquipedia],
  },
]);
