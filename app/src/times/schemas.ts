import { z } from "zod";

// Contrato em dota-tier1/work/CONTRATO_HUB.md. Coordenadas de 0 a 1, y para cima, sempre do ponto de vista
// Radiant: a fase 3 já espelha as partidas de Dire, então o app desenha x e y como chegam.

export const CAMINHO_INDICE = "/data/times_atlas/indice.json";

const fracao = z.number().min(0).max(1);
const coordenada = { x: fracao, y: fracao };
// A janela fica texto livre: uma janela fora da lista só some dos filtros, em vez de derrubar a tela inteira.
const janela = z.string();

export const nivelAmostraSchema = z.enum(["ok", "low"]);
export const confiancaSchema = z.enum(["alta", "media", "baixa"]);

export const classificacaoSchema = z.enum(["tier1", "fronteira"]);
// Polos: o que significa cada ponta do eixo (negativo à esquerda ou embaixo, positivo à direita ou em cima).
export const eixoSchema = z.object({
  id: z.string(), rotulo: z.string(), explicacao: z.string(),
  polo_negativo: z.string().optional(), polo_positivo: z.string().optional(),
});
export const clusterSchema = z.object({ id: z.string(), nome: z.string() });
export const timeNoIndiceSchema = z.object({
  id: z.string(), nome: z.string(), tag: z.string(), partidas: z.number().int(), replays: z.number().int(),
  amostra: nivelAmostraSchema, estilo: z.string(), eixos: z.record(z.string(), z.number()),
  cluster: z.string().optional(), classificacao: classificacaoSchema.default("tier1"),
  // Ids do time no OpenDota (rosters.csv): ligam a busca ao vivo à análise do atlas.
  team_ids: z.array(z.number().int()).default([]),
});
export const indiceAtlasSchema = z.object({
  gerado_em: z.string(), periodo: z.string(), patch: z.string(),
  times: z.array(timeNoIndiceSchema), eixos: z.array(eixoSchema), clusters: z.array(clusterSchema).default([]),
});

const zonaSchema = z.object({ zona: z.string(), rotulo: z.string(), ...coordenada, tempo_pct: fracao, janela });
// valores[j][i]: j é a linha a partir de baixo (y) e i a coluna (x), na mesma orientação das coordenadas.
const calorSchema = z.object({ janela, grade: z.number().int().positive(), valores: z.array(z.array(z.number().min(0))) });
// Os campos opcionais vêm do agregado real (dota-tier1/data/ESQUEMA.md); o contrato mínimo não os exige.
const wardSchema = z.object({
  ...coordenada, tipo: z.enum(["obs", "sen"]), janela, peso: z.number().min(0), intencao: z.string(), texto: z.string(),
  n: z.number().int().optional(), intencoes: z.record(z.string(), fracao).optional(),
  destruida_pct: fracao.optional(), duracao_mediana_s: z.number().optional(),
});
const smokeSchema = z.object({
  // Destino nulo: o Smoke não quebrou em nenhum lugar registrado; só a origem vai para o mapa.
  ...coordenada, destino_x: fracao.nullable(), destino_y: fracao.nullable(), janela, n: z.number().int().nonnegative(),
  resultado: z.object({ kill: fracao, objetivo: fracao, farm: fracao.default(0), nada: fracao, falhou: fracao }), texto: z.string(),
  herois_medio: z.number().optional(), origem_zona: z.string().optional(), destino_zona: z.string().optional(),
});
// Presença (heróis perto do objetivo) não tem posição: x e y só vêm em ward e smoke.
const preparoSchema = z.object({
  t_rel_s: z.number().max(0), acao: z.string(), x: fracao.optional(), y: fracao.optional(),
  freq: fracao.optional(), herois_perto_medio: z.number().optional(),
});
const objetivoAtlasSchema = z.object({
  tipo: z.string(), ...coordenada, preparo: z.array(preparoSchema), texto: z.string(),
  grupo: z.string().optional(), n: z.number().int().optional(), minuto_mediano: z.number().optional(),
});
const lutaSchema = z.object({ ...coordenada, janela, n: z.number().int().nonnegative(), vitoria_pct: fracao, texto: z.string(), iniciou_pct: fracao.optional(), zona: z.string().optional() });
const pontoFarmSchema = z.object({
  t: z.string().regex(/^\d+:\d{2}$/), ...coordenada, rotulo: z.string(),
  zona_pct: fracao.optional(), atividade: z.string().optional(), n: z.number().int().optional(),
});

export const mapaAtlasSchema = z.object({
  zonas: z.array(zonaSchema).default([]),
  calor: calorSchema.nullable().default(null),
  calor_por_janela: z.array(calorSchema).default([]),
  wards: z.array(wardSchema).default([]),
  smokes: z.array(smokeSchema).default([]),
  objetivos: z.array(objetivoAtlasSchema).default([]),
  lutas: z.array(lutaSchema).default([]),
  farm: z.object({ pos1: z.array(pontoFarmSchema).default([]), pos2: z.array(pontoFarmSchema).default([]) }).default({ pos1: [], pos2: [] }),
});

export const timeAtlasSchema = z.object({
  id: z.string(), nome: z.string(), tag: z.string(),
  roster: z.array(z.object({ nick: z.string(), account_id: z.number().int(), pos: z.number().int().min(1).max(5) })),
  amostra: z.object({
    partidas: z.number().int(), replays: z.number().int(), vitorias: z.number().int(), nivel: nivelAmostraSchema,
    classificacao: classificacaoSchema.default("tier1"), nota: z.string().optional(),
  }),
  resumo: z.string(),
  secoes: z.array(z.object({ id: z.string(), titulo: z.string(), texto_md: z.string(), confianca: confiancaSchema })),
  assinatura_temporal: z.array(z.object({ janela, texto: z.string() })),
  mapa: mapaAtlasSchema,
  gameplan_contra: z.record(z.string(), z.string()),
});

export type IndiceAtlas = z.infer<typeof indiceAtlasSchema>;
export type TimeNoIndice = z.infer<typeof timeNoIndiceSchema>;
export type Eixo = z.infer<typeof eixoSchema>;
export type Cluster = z.infer<typeof clusterSchema>;
export type Classificacao = z.infer<typeof classificacaoSchema>;
export type Secao = TimeAtlas["secoes"][number];
export type TimeAtlas = z.infer<typeof timeAtlasSchema>;
export type MapaAtlas = z.infer<typeof mapaAtlasSchema>;
export type Confianca = z.infer<typeof confiancaSchema>;

// chaves.json: o que fazer para vencer o time (contrato em dota-tier1/work/CONTRATO_CHAVES.md).
const textoComConfianca = { confianca: confiancaSchema, texto: z.string() };
// IC 95% de Wilson do win rate principal do item; pode faltar.
const intervalo = { ic_baixo: fracao.nullable().optional(), ic_alto: fracao.nullable().optional() };
const fatorSchema = z.object({
  fator: z.string(), wr_com: fracao, n_com: z.number().int(), wr_sem: fracao, n_sem: z.number().int(), efeito_pp: z.number(),
  causalidade: z.string().optional(), padrao_da_liga: z.boolean().optional(), ...textoComConfianca, ...intervalo,
  efeito_bruto_pp: z.number().nullable().optional(), efeito_liga_pp: z.number().nullable().optional(),
  vs_liga_pp: z.number().nullable().optional(), efeito_dentro_estado_pp: z.number().nullable().optional(),
});
export const chavesSchema = z.object({
  resumo_para_vencer: z.string(),
  historico: z.boolean().optional(),
  contexto_liga: z.string().nullable().optional(),
  recorte: z.string().nullable().optional(),
  banir: z.array(z.object({
    heroi: z.string(), papel: z.string().optional(), wr_com: fracao, n_com: z.number().int(), wr_sem: fracao, n_sem: z.number().int(),
    efeito_pp: z.number(), quando_banido_pelo_adv_wr: fracao.nullable().optional(), n_banido: z.number().int().nullable().optional(),
    ban_confirma: z.boolean().nullable().optional(), quem_joga: z.string().optional(), placar_60d: z.string().optional(),
    // Por herói × jogador (CONTRATO_CHAVES.md): placar dele com o herói, último pick e por que sumiu (bans por mês).
    placar_jogador: z.string().optional(), ultimo_pick: z.string().optional(),
    bans_contra_por_mes: z.record(z.string(), z.object({ n: z.number().int(), jogos: z.number().int(), pct: fracao })).optional(),
    contexto_vitorias: z.record(z.string(), z.string()).optional(), leitura_contexto: z.string().optional(),
    forca_contexto: z.enum(["resiste", "favoravel", "indefinido"]).optional(),
    ...textoComConfianca, ...intervalo,
  })).default([]),
  herois_contra: z.array(z.object({
    heroi: z.string(), wr_equipe_contra: fracao, n: z.number().int(), esperado: fracao.nullable().optional(), efeito_pp: z.number(),
    ...textoComConfianca, ...intervalo,
  })).default([]),
  estilos_contra: z.array(z.object({
    cluster: z.string(), wr: fracao, esperado_elo: fracao.nullable(), n: z.number().int(), excesso_pp: z.number().nullable().optional(), texto: z.string(),
  })).max(3).default([]),
  fatores_vitoria: z.array(fatorSchema).max(8).default([]),
  fatores_derrota: z.array(fatorSchema).max(8).default([]),
});
export type Chaves = z.infer<typeof chavesSchema>;
export type FatorChave = z.infer<typeof fatorSchema>;

// lanes_perdidas.json: o que acontece quando o time perde cada lane (publicado como <id>.lanes.json).
// A confiança chega como o semáforo do pedido (🟢 🟡 🔴); vira a mesma escala das seções.
const SEMAFORO = { "🟢": "alta", "🟡": "media", "🔴": "baixa" } as const;
const confiancaDaLane = z.union([confiancaSchema, z.enum(["🟢", "🟡", "🔴"]).transform((cor) => SEMAFORO[cor])]);
export const lanesSchema = z.object({
  lanes: z.array(z.object({
    lane: z.string(), jogador: z.string(), jogador_atual: z.boolean(),
    n_perdida: z.number().int(), wr_perdida: fracao, ic: z.tuple([fracao, fracao]).nullable().optional(),
    n_ganha: z.number().int(), wr_ganha: fracao, efeito_ajustado_pp: z.number().nullable().optional(), liga_wr_perdida: fracao.nullable().optional(),
    o_que_acontece: z.array(z.string()).default([]), recuperacao: z.array(z.string()).default([]), matchups: z.array(z.string()).default([]),
    o_que_fazer_contra: z.string(), confianca: confiancaDaLane, texto_md: z.string().default(""),
  })),
});
export type Lanes = z.infer<typeof lanesSchema>;
