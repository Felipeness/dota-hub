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

const marcaSchema = z.object({ tipo: z.enum(["recomendado", "replay"]), replays: z.array(z.string()) }).nullable();
export const conteudoItemSchema = z.object({
  id: z.string(), titulo: z.string(), patch: z.string(), fontes: z.array(z.string()),
  secoes: z.object({ basico: z.string(), avancado: z.string().nullable() }),
  origem: z.object({ basico: marcaSchema, avancado: marcaSchema }),
  links: z.array(z.string()).default([]),
  extras: z.record(z.string(), z.union([z.string(), z.array(z.string())])).default({}),
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
export type Marca = z.infer<typeof marcaSchema>;
export type ConteudoItem = z.infer<typeof conteudoItemSchema>;
export type Conteudo = z.infer<typeof conteudoSchema>;
export type Meta = z.infer<typeof metaSchema>;

const textos = z.array(z.string());
const caminhos = z.array(z.array(z.tuple([z.number(), z.number()])));

export function minutoComoTexto(minutos: number): string {
  const segundos = Math.round(Math.abs(minutos) * 60);
  const sinal = minutos < 0 ? "-" : "";
  return `${sinal}${Math.floor(segundos / 60)}:${String(segundos % 60).padStart(2, "0")}`;
}

// As fichas de herói trazem o minuto do passo às vezes como número de minutos; o mapa espera texto.
const passoHeroiSchema = passoSchema.extend({ minuto: z.union([z.string(), z.number().transform(minutoComoTexto)]) });
export const faseSchema = z.object({
  de: z.number(), ate: z.number().nullable(), janela: z.string(), objetivo: z.string(), passos: z.array(passoHeroiSchema), caminhos,
});
export const spikeSchema = z.object({ minuto: z.number().nullable(), faixa: z.string(), marco: z.string(), o_que_fazer: z.string() });
const porMinutoSchema = z.object({
  minuto: z.number(), nivel: z.string(), habilidade: z.string(), item: z.string(), proximo_spike: z.string(), objetivo_farm: z.string(),
});
const linhaProSchema = z.object({ jogador: z.string(), jogos: z.number(), vitorias: z.number().nullable(), lh10: z.number().nullable() });

export const heroiResumoSchema = z.object({
  id: z.string(), nome: z.string(), hero_id: z.number(), patch: z.string(), resumo: z.string(), tem_por_minuto: z.boolean(),
});
export const heroisSchema = z.array(heroiResumoSchema);
export const heroiSchema = heroiResumoSchema.omit({ tem_por_minuto: true }).extend({
  // Phantom Lancer traz a confiança detalhada por tema; a ficha mostra só o nível geral.
  confianca: z.union([z.string(), z.object({ geral: z.string() }).transform((c) => c.geral)]),
  guia: z.object({
    bom_quando: textos, evitar_quando: textos, momento_do_draft: z.string(),
    lane: z.object({ objetivo: z.string(), itens_iniciais: textos, dicas: textos }),
    skill_build: z.array(z.object({ nivel: z.union([z.number(), z.string()]), skill: z.string() })),
    itens_core: z.array(z.object({ nome: z.string(), minuto_alvo: z.number().nullable(), base: z.string() })),
    itens_situacionais: z.array(z.object({ nome: z.string(), quando: z.string() })),
    condicao_para_farmar: z.object({ nivel: z.union([z.number(), z.string()]), minuto_tipico: z.number().nullable(), explicacao: z.string() }),
    depois_dos_20: textos, erros_comuns: textos,
  }),
  power_spikes: z.array(spikeSchema),
  por_minuto: z.array(porMinutoSchema).nullable(),
  rotas: z.object({ radiant: z.array(faseSchema), dire: z.array(faseSchema) }),
  rotas_relacionadas: z.array(z.string()),
  pros: z.object({ linhas: z.array(linhaProSchema), leitura: z.string().nullable() }),
  fontes: textos,
});

export const graficoSchema = z.object({
  id: z.string(), titulo: z.string(), tipo: z.enum(["linha", "barra"]),
  x: z.object({ rotulo: z.string(), valores: z.array(z.union([z.string(), z.number()])).min(1) }),
  series: z.array(z.object({ nome: z.string(), valores: z.array(z.number().nullable()) })).min(1),
  unidade: z.string(), fonte: z.string(), nota: z.string().nullable(),
}).refine((g) => g.series.every((s) => s.valores.length === g.x.valores.length), "série com tamanho diferente do eixo");

const tipoJogador = z.enum(["amigo", "pro"]);
export const painelSchema = z.object({
  id: z.string(), nome: z.string(), tipo: tipoJogador, time: z.string().nullable(), amostra: z.string(), fontes: textos,
  destaques: z.array(z.object({ rotulo: z.string(), valor: z.number(), unidade: z.string(), fonte: z.string() })),
  graficos: z.array(graficoSchema),
  achados: z.array(z.object({ texto: z.string(), fonte: z.string() })),
  replays: z.array(z.string()),
});
export const jogadorResumoSchema = z.object({ id: z.string(), nome: z.string(), tipo: tipoJogador, time: z.string().nullable(), amostra: z.string() });
export const jogadoresSchema = z.array(jogadorResumoSchema);
export const timeSchema = z.object({ id: z.string(), nome: z.string(), jogadores: z.array(z.string()), fonte: z.string() });
export const timesSchema = z.array(timeSchema);

const lado = z.enum(["radiant", "dire"]);
export const trajetoriaSchema = z.object({
  match_id: z.string(), passo_s: z.number().int().positive(), fim_s: z.number().int().nonnegative(), focos: z.array(z.number()),
  herois: z.array(z.object({
    slot: z.number(), heroi: z.string(), lado, jogador: z.string().nullable(),
    xy: z.array(z.number().int()).refine((xy) => xy.length % 2 === 0, "xy precisa de pares"),
  })),
  wards: z.array(z.object({ t: z.number(), ate: z.number(), x: z.number(), y: z.number(), lado, tipo: z.string() })),
  mortes: z.array(z.object({ t: z.number(), x: z.number(), y: z.number(), heroi: z.string(), lado })),
});
export const replaysSchema = z.array(z.object({
  match_id: z.string(), fim_s: z.number(), data: z.string().nullable(), liga: z.string().nullable(),
  focos: z.array(z.object({ slot: z.number(), heroi: z.string(), jogador: z.string().nullable() })),
}));

export const relevoSchema = z.object({ tamanho: z.number().int().min(2), alturas: z.array(z.number()) })
  .refine((r) => r.alturas.length === r.tamanho ** 2, "alturas não batem com o tamanho");

export const roshanReplaysSchema = z.array(z.object({
  match_id: z.string(), minuto: z.number(), heroi: z.string(), lado, aliados_perto: z.number().nullable(), solo: z.boolean(),
}));

export type Fase = z.infer<typeof faseSchema>;
export type Spike = z.infer<typeof spikeSchema>;
export type HeroiResumo = z.infer<typeof heroiResumoSchema>;
export type Heroi = z.infer<typeof heroiSchema>;
export type GraficoDados = z.infer<typeof graficoSchema>;
export type Painel = z.infer<typeof painelSchema>;
export type JogadorResumo = z.infer<typeof jogadorResumoSchema>;
export type Time = z.infer<typeof timeSchema>;
export type Trajetoria = z.infer<typeof trajetoriaSchema>;
export type ReplayResumo = z.infer<typeof replaysSchema>[number];
export type Relevo = z.infer<typeof relevoSchema>;
export type RoshanReplay = z.infer<typeof roshanReplaysSchema>[number];
