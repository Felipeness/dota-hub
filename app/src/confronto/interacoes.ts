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
]);
