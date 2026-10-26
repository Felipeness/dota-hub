// Formato das constantes e estatísticas do OpenDota usadas no confronto. Sem transform: o cache guarda a saída
// e lê de novo com o mesmo schema. As constantes dividem a chave do cache com a tela ao vivo (mesmo caminho),
// então cada schema aqui é um superconjunto do de lá e recusa a versão podada que ela guarda.
import { z } from "zod";

const escalar = z.union([z.string(), z.number()]);
const escalarOuLista = z.union([escalar, z.array(escalar)]).nullable().optional();

const habilidadeFonte = z.object({
  dname: z.string().nullable().optional(),
  behavior: escalarOuLista,
  dmg_type: escalarOuLista,
  bkbpierce: escalarOuLista,
  dispellable: escalarOuLista,
  target_team: escalarOuLista,
  is_innate: z.boolean().nullable().optional(),
  desc: z.string().nullable().optional(),
  attrib: z.array(z.object({ key: z.string(), header: z.string().nullable().optional(), value: escalarOuLista })).nullable().optional(),
  cd: escalarOuLista,
  /** Dano base de algumas habilidades (Ravage, Death Pulse, Storm Bolt) que não aparece no attrib. */
  dmg: escalarOuLista,
});
export const habilidadesFonte = z.record(z.string(), habilidadeFonte)
  .refine((r) => Object.values(r).some((h) => typeof h.desc === "string"), "habilidades sem descrição (versão podada do cache)")
  // Cache gravado antes do dmg entrar no schema: recusa para buscar de novo, senão Ravage e Death Pulse ficam sem dano.
  .refine((r) => Object.values(r).some((h) => h.dmg != null), "habilidades sem dmg (cache antigo)");

export const habilidadesDosHeroisFonte = z.record(z.string(), z.object({
  abilities: z.array(z.union([z.string(), z.array(z.string())])),
}));

export const heroisFonte = z.record(z.string(), z.object({
  id: z.number(), name: z.string(), localized_name: z.string(),
  attack_type: z.string(), attack_range: z.number(), move_speed: z.number(), base_armor: z.number(),
}));

const textoOuNada = z.string().nullable().optional();
export const itensFonte = z.record(z.string(), z.object({
  id: z.number(), dname: textoOuNada,
  cost: z.number().nullable().optional(), tier: z.number().nullable().optional(),
  // Campo exigido pelo schema da tela ao vivo, que divide este cache: precisa continuar aqui.
  components: z.union([z.boolean(), z.array(z.string()).nullable().optional()]),
  abilities: z.array(z.object({ title: textoOuNada, description: textoOuNada })).nullable().optional(),
  attrib: z.array(z.object({ key: z.string(), value: escalarOuLista })).nullable().optional(),
})).refine((r) => Object.values(r).some((i) => Array.isArray(i.abilities)), "itens sem descrição (versão podada do cache)")
  // Cache gravado antes do attrib entrar no schema: recusa para buscar de novo, senão a janela do Manta some.
  .refine((r) => Object.values(r).some((i) => Array.isArray(i.attrib)), "itens sem atributos (cache antigo)");

export const aghanimFonte = z.array(z.object({
  hero_name: z.string(),
  has_shard: z.boolean(), shard_desc: textoOuNada, shard_skill_name: textoOuNada,
  has_scepter: z.boolean(), scepter_desc: textoOuNada, scepter_skill_name: textoOuNada,
}));

export const matchupsFonte = z.array(z.object({ hero_id: z.number(), games_played: z.number(), wins: z.number() }));

const contagem = z.record(z.string(), z.number());
export const popularidadeFonte = z.object({
  start_game_items: contagem, early_game_items: contagem, mid_game_items: contagem, late_game_items: contagem,
}).partial();

export type HabilidadeFonte = z.infer<typeof habilidadeFonte>;
export type HabilidadesFonte = z.infer<typeof habilidadesFonte>;
export type HabilidadesDosHeroisFonte = z.infer<typeof habilidadesDosHeroisFonte>;
export type HeroisFonte = z.infer<typeof heroisFonte>;
export type ItensFonte = z.infer<typeof itensFonte>;
export type AghanimFonte = z.infer<typeof aghanimFonte>;
export type MatchupsFonte = z.infer<typeof matchupsFonte>;
export type PopularidadeFonte = z.infer<typeof popularidadeFonte>;
