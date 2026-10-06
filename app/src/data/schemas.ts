import { z } from "zod";

export const objetivoSchema = z.object({
  id: z.string(), tipo: z.string(), nome: z.string(),
  x: z.number(), y: z.number(), lado: z.enum(["radiant", "dire", "neutro"]),
  detalhes: z.record(z.string(), z.unknown()),
});
export const objetivosSchema = z.array(objetivoSchema);

export const passoSchema = z.object({
  n: z.number(), alvo: z.string(), x: z.number(), y: z.number(),
  rotulo: z.string(), minuto: z.string(), acao: z.string(), risco: z.string(),
});
export const rotaSchema = z.object({
  id: z.string(), pdf: z.enum(["03", "05", "06"]), lado: z.enum(["radiant", "dire"]),
  pergunta: z.string(), titulo: z.string(), secao: z.string(),
  janela: z.object({ de: z.string().optional(), ate: z.string().optional() }),
  estado: z.record(z.string(), z.unknown()).nullable().optional(),
  origem: z.enum(["recomendada", "real"]), replay: z.string().nullable(),
  passos: z.array(passoSchema), caminhos: z.array(z.array(z.tuple([z.number(), z.number()]))),
  fuga: z.object({ de_passo: z.number(), x: z.number(), y: z.number(), rotulo: z.string() }).nullable(),
  proxima: z.array(z.string()),
  se: z.array(z.object({ condicao: z.string(), rota: z.string().nullable().optional() })),
  interrupcao: z.array(z.object({ condicao: z.string(), acao: z.string(), rota: z.string().nullable().optional() })),
  porque: z.string(),
});
export const rotasSchema = z.array(rotaSchema);

const celula = z.object({ id: z.string().nullable(), nota: z.string().nullable() });
const linha = z.object({ minuto: z.number(), cenarios: z.record(z.string(), celula) });
export const indiceSchema = z.object({ colunas: z.array(z.string()), radiant: z.array(linha), dire: z.array(linha) });

export const conteudoItemSchema = z.object({
  id: z.string(), titulo: z.string(), patch: z.string(), fontes: z.array(z.string()),
  secoes: z.object({ basico: z.string(), avancado: z.string().nullable() }), links: z.array(z.string()).default([]),
});
export const conteudoSchema = z.array(conteudoItemSchema);

export const metaSchema = z.object({
  exportado_em: z.string(), patch: z.string(),
  contagens: z.object({ rotas: z.number(), objetivos: z.number(), termos: z.number() }),
});

export type Objetivo = z.infer<typeof objetivoSchema>;
export type Passo = z.infer<typeof passoSchema>;
export type Rota = z.infer<typeof rotaSchema>;
export type Indice = z.infer<typeof indiceSchema>;
export type ConteudoItem = z.infer<typeof conteudoItemSchema>;
export type Conteudo = z.infer<typeof conteudoSchema>;
export type Meta = z.infer<typeof metaSchema>;
