// Estado da prancheta: passos com ícones (heróis, wards, runas, estruturas) e traços desenhados por cima do mapa.
// Coordenadas em unidades do quadro: 0 a 1000 nos dois eixos, origem em cima à esquerda (o y do minimapa invertido).
// Tudo aqui é puro: o reducer devolve um estado novo e o histórico de desfazer/refazer mora no próprio estado.
import { z } from "zod";

export const LADO_DO_QUADRO = 1000;
/** A grade do minimapa cobre 142 células de 128 unidades do jogo (replay/trajetos.ts). */
const UNIDADES_DO_JOGO_POR_LADO = 142 * 128;
export const unidadesDoJogo = (u: number) => (u * LADO_DO_QUADRO) / UNIDADES_DO_JOGO_POR_LADO;
/** Visão de dia da observer (1600) e true sight da sentry (900), em unidades do quadro. */
export const RAIO_DA_VISAO = { observer: unidadesDoJogo(1600), sentry: unidadesDoJogo(900) } as const;

export const NOMES_DAS_CORES = ["ouro", "branco", "vermelho", "verde", "azul", "roxo", "rosa"] as const;
export type Cor = (typeof NOMES_DAS_CORES)[number];
export const CORES = {
  ouro: "#f2b544", branco: "#e9e4d8", vermelho: "#e0675a", verde: "#5bbf7a", azul: "#4fc3e8", roxo: "#b08cff", rosa: "#ff8fc8",
} as const satisfies Record<Cor, string>;

export const ESPESSURAS = { fina: 3, media: 6, grossa: 11 } as const;
export type Espessura = keyof typeof ESPESSURAS;

export const RUNAS = ["bounty", "agua", "sabedoria", "velocidade", "dano_dobrado", "arcana", "ilusao", "invisibilidade", "regeneracao", "escudo"] as const;
export type Runa = (typeof RUNAS)[number];
export const ESTRUTURAS = ["torre", "barracks", "ancient", "outpost"] as const;
export type Estrutura = (typeof ESTRUTURAS)[number];
export const TIMES = ["radiant", "dire"] as const;
export type Time = (typeof TIMES)[number];

const MAX_PASSOS = 30;
const MAX_HISTORICO = 100;

const ponto = z.tuple([z.number().int().min(0).max(LADO_DO_QUADRO), z.number().int().min(0).max(LADO_DO_QUADRO)]);
const time = z.enum(TIMES);
const cor = z.enum(NOMES_DAS_CORES);
const espessura = z.enum(["fina", "media", "grossa"] satisfies Espessura[]);
const id = z.string().min(1).max(12);

const pecaSchema = z.discriminatedUnion("tipo", [
  z.object({ tipo: z.literal("heroi"), heroi: z.string().regex(/^[a-z_]{1,40}$/), time }),
  z.object({ tipo: z.literal("observer"), time }),
  z.object({ tipo: z.literal("sentry"), time }),
  z.object({ tipo: z.literal("courier"), time }),
  z.object({ tipo: z.literal("runa"), runa: z.enum(RUNAS) }),
  z.object({ tipo: z.literal("estrutura"), estrutura: z.enum(ESTRUTURAS), time }),
]);
const iconeSchema = z.object({ id, peca: pecaSchema, ponto });
const tracoSchema = z.discriminatedUnion("tipo", [
  z.object({ id, tipo: z.enum(["livre", "linha", "seta"]), pontos: z.array(ponto).min(2).max(2000), cor, espessura }),
  z.object({ id, tipo: z.literal("circulo"), centro: ponto, raio: z.number().int().min(1).max(LADO_DO_QUADRO), cor, espessura }),
  z.object({ id, tipo: z.literal("texto"), ponto, texto: z.string().min(1).max(120), cor }),
]);
const passoSchema = z.object({ icones: z.array(iconeSchema).max(200), tracos: z.array(tracoSchema).max(300), nota: z.string().max(2000) });
export const quadroSchema = z.object({ v: z.literal(1), seq: z.number().int().nonnegative(), passos: z.array(passoSchema).min(1).max(MAX_PASSOS) });

export type Ponto = z.infer<typeof ponto>;
export type Peca = z.infer<typeof pecaSchema>;
export type Icone = z.infer<typeof iconeSchema>;
export type Traco = z.infer<typeof tracoSchema>;
export type Passo = z.infer<typeof passoSchema>;
export type Quadro = z.infer<typeof quadroSchema>;
type SemId<T> = T extends unknown ? Omit<T, "id"> : never;
export type NovoTraco = SemId<Traco>;
export type NovoIcone = Omit<Icone, "id">;
export type AlvoDaLimpeza = "tracos" | "icones" | "tudo";

export type Estado = Readonly<{ passado: readonly Quadro[]; presente: Quadro; futuro: readonly Quadro[]; atual: number }>;

export type Acao =
  | { tipo: "colocar"; peca: Peca; ponto: Ponto }
  | { tipo: "mover"; id: string; ponto: Ponto }
  | { tipo: "desenhar"; traco: NovoTraco }
  | { tipo: "remover"; id: string }
  | { tipo: "limpar"; alvo: AlvoDaLimpeza }
  | { tipo: "novoPasso" }
  | { tipo: "duplicarPasso" }
  | { tipo: "removerPasso" }
  | { tipo: "irAoPasso"; indice: number }
  | { tipo: "anotar"; nota: string }
  | { tipo: "carregarLance"; icones: readonly NovoIcone[]; nota: string }
  | { tipo: "abrir"; quadro: Quadro }
  | { tipo: "desfazer" }
  | { tipo: "refazer" };

export const PASSO_VAZIO: Passo = { icones: [], tracos: [], nota: "" };
export const QUADRO_VAZIO: Quadro = { v: 1, seq: 0, passos: [PASSO_VAZIO] };
export const estadoInicial = (quadro: Quadro = QUADRO_VAZIO): Estado => ({ passado: [], presente: quadro, futuro: [], atual: 0 });

const limitar = (v: number) => Math.min(LADO_DO_QUADRO, Math.max(0, Math.round(v)));
export const arredondar = ([x, y]: readonly [number, number]): Ponto => [limitar(x), limitar(y)];

function arredondarTraco(traco: NovoTraco): NovoTraco {
  if (traco.tipo === "circulo") return { ...traco, centro: arredondar(traco.centro), raio: Math.max(1, limitar(traco.raio)) };
  if (traco.tipo === "texto") return { ...traco, ponto: arredondar(traco.ponto) };
  return { ...traco, pontos: traco.pontos.map(arredondar) };
}

export const passoAtual = (estado: Estado): Passo => estado.presente.passos[indiceAtual(estado)] ?? PASSO_VAZIO;
export const indiceAtual = (estado: Estado) => Math.min(estado.atual, estado.presente.passos.length - 1);

const novoId = (quadro: Quadro) => `i${quadro.seq.toString(36)}`;

function editarPasso(quadro: Quadro, indice: number, editar: (passo: Passo, quadro: Quadro) => Passo): Quadro {
  return { ...quadro, passos: quadro.passos.map((p, i) => (i === indice ? editar(p, quadro) : p)) };
}

const LIMPEZA: Readonly<Record<AlvoDaLimpeza, (p: Passo) => Passo>> = {
  tracos: (p) => ({ ...p, tracos: [] }),
  icones: (p) => ({ ...p, icones: [] }),
  tudo: (p) => ({ ...p, icones: [], tracos: [] }),
};

/** Mudanças que entram no histórico: devolvem o quadro novo e o passo que fica na tela. */
function aplicar(quadro: Quadro, atual: number, acao: Acao): { quadro: Quadro; atual: number } | null {
  const mesmo = (q: Quadro) => ({ quadro: q, atual });
  const usarId = (q: Quadro) => ({ ...q, seq: q.seq + 1 });
  switch (acao.tipo) {
    case "colocar":
      return mesmo(usarId(editarPasso(quadro, atual, (p, q) => ({ ...p, icones: [...p.icones, { id: novoId(q), peca: acao.peca, ponto: arredondar(acao.ponto) }] }))));
    case "mover":
      return mesmo(editarPasso(quadro, atual, (p) => ({ ...p, icones: p.icones.map((i) => (i.id === acao.id ? { ...i, ponto: arredondar(acao.ponto) } : i)) })));
    case "desenhar":
      return mesmo(usarId(editarPasso(quadro, atual, (p, q) => ({ ...p, tracos: [...p.tracos, { ...arredondarTraco(acao.traco), id: novoId(q) }] }))));
    case "remover":
      return mesmo(editarPasso(quadro, atual, (p) => ({ ...p, icones: p.icones.filter((i) => i.id !== acao.id), tracos: p.tracos.filter((t) => t.id !== acao.id) })));
    case "limpar":
      return mesmo(editarPasso(quadro, atual, LIMPEZA[acao.alvo]));
    case "novoPasso":
    case "duplicarPasso":
      return inserirPasso(quadro, atual, acao.tipo === "duplicarPasso");
    case "removerPasso":
      if (quadro.passos.length === 1) return mesmo(editarPasso(quadro, 0, () => PASSO_VAZIO));
      return { quadro: { ...quadro, passos: quadro.passos.filter((_, i) => i !== atual) }, atual: Math.max(0, atual - 1) };
    case "carregarLance":
      return mesmo(carregarLance(quadro, atual, acao.icones, acao.nota));
    default:
      return null;
  }
}

/** Passo novo logo depois do atual: com os mesmos ícones (os ids iguais deixam "Reproduzir" animar) e, duplicando, os traços e a nota. */
function inserirPasso(quadro: Quadro, atual: number, duplicar: boolean): { quadro: Quadro; atual: number } | null {
  const base = quadro.passos[atual];
  if (!base || quadro.passos.length >= MAX_PASSOS) return null;
  const novo: Passo = duplicar ? base : { icones: base.icones, tracos: [], nota: "" };
  return { quadro: { ...quadro, passos: [...quadro.passos.slice(0, atual + 1), novo, ...quadro.passos.slice(atual + 1)] }, atual: atual + 1 };
}

function carregarLance(quadro: Quadro, atual: number, icones: readonly NovoIcone[], nota: string): Quadro {
  const comIds = icones.map((icone, i) => ({ ...icone, ponto: arredondar(icone.ponto), id: novoId({ ...quadro, seq: quadro.seq + i }) }));
  return { ...editarPasso(quadro, atual, (p) => ({ ...p, icones: comIds, nota })), seq: quadro.seq + icones.length };
}

function registrar(estado: Estado, quadro: Quadro, atual: number): Estado {
  return { passado: [...estado.passado, estado.presente].slice(-MAX_HISTORICO), presente: quadro, futuro: [], atual };
}

export function reduzir(estado: Estado, acao: Acao): Estado {
  const atual = indiceAtual(estado);
  switch (acao.tipo) {
    case "irAoPasso":
      return { ...estado, atual: Math.min(Math.max(0, acao.indice), estado.presente.passos.length - 1) };
    // A nota muda a cada tecla: editar no lugar evita um desfazer por letra.
    case "anotar":
      return { ...estado, presente: editarPasso(estado.presente, atual, (p) => ({ ...p, nota: acao.nota.slice(0, 2000) })) };
    case "abrir":
      return estadoInicial(acao.quadro);
    case "desfazer":
      return desfazer(estado);
    case "refazer":
      return refazer(estado);
    default: {
      const resultado = aplicar(estado.presente, atual, acao);
      return resultado ? registrar(estado, resultado.quadro, resultado.atual) : estado;
    }
  }
}

function desfazer(estado: Estado): Estado {
  const anterior = estado.passado.at(-1);
  if (!anterior) return estado;
  return { passado: estado.passado.slice(0, -1), presente: anterior, futuro: [estado.presente, ...estado.futuro], atual: estado.atual };
}

function refazer(estado: Estado): Estado {
  const [proximo, ...resto] = estado.futuro;
  if (!proximo) return estado;
  return { passado: [...estado.passado, estado.presente], presente: proximo, futuro: resto, atual: estado.atual };
}

/** Raio do ícone em unidades do quadro; `escala` vem do controle de tamanho dos heróis. */
export function raioDaPeca(peca: Peca, escala: number): number {
  if (peca.tipo === "heroi") return Math.round(22 * escala);
  if (peca.tipo === "runa") return 13;
  return 15;
}
