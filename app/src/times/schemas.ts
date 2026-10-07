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

export const eixoSchema = z.object({ id: z.string(), rotulo: z.string(), explicacao: z.string() });
export const timeNoIndiceSchema = z.object({
  id: z.string(), nome: z.string(), tag: z.string(), partidas: z.number().int(), replays: z.number().int(),
  amostra: nivelAmostraSchema, estilo: z.string(), eixos: z.record(z.string(), z.number()),
});
export const indiceAtlasSchema = z.object({
  gerado_em: z.string(), periodo: z.string(), patch: z.string(),
  times: z.array(timeNoIndiceSchema), eixos: z.array(eixoSchema),
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
  herois_medio: z.number().optional(),
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
const lutaSchema = z.object({ ...coordenada, janela, n: z.number().int().nonnegative(), vitoria_pct: fracao, texto: z.string(), iniciou_pct: fracao.optional() });
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
  amostra: z.object({ partidas: z.number().int(), replays: z.number().int(), vitorias: z.number().int(), nivel: nivelAmostraSchema }),
  resumo: z.string(),
  secoes: z.array(z.object({ id: z.string(), titulo: z.string(), texto_md: z.string(), confianca: confiancaSchema })),
  assinatura_temporal: z.array(z.object({ janela, texto: z.string() })),
  mapa: mapaAtlasSchema,
  gameplan_contra: z.record(z.string(), z.string()),
});

export type IndiceAtlas = z.infer<typeof indiceAtlasSchema>;
export type TimeNoIndice = z.infer<typeof timeNoIndiceSchema>;
export type Eixo = z.infer<typeof eixoSchema>;
export type TimeAtlas = z.infer<typeof timeAtlasSchema>;
export type MapaAtlas = z.infer<typeof mapaAtlasSchema>;
export type Confianca = z.infer<typeof confiancaSchema>;
