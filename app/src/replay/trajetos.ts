import { z } from "zod";
import type { Ponto } from "../map/coords";

/** Rota do CloudFront para a Lambda que lê o replay sob demanda (código e formato em replay/README.md na raiz do repo). */
export const URL_TRAJETOS = "/api/replay";
/** Partida nova leva ~10 s (baixar + ler); o servidor desiste em 120 s. */
const TEMPO_MAXIMO_MS = 120_000;
const ID_DA_PARTIDA = /^[0-9]{1,12}$/;
// Grade do OpenDota para o minimapa normalizado: (g - 57) / 142.
const ORIGEM_DA_GRADE = 57;
const LADO_DA_GRADE = 142;

const intervalo = z.tuple([z.number().int(), z.number().int()]);
const slot = z.number().int();
const time = z.union([z.literal(2), z.literal(3)]);

export const TrajetosSchema = z.object({
  v: z.literal(1),
  match: z.number().int(),
  build: z.number().int(),
  escala: z.number().int().positive(),
  t0: z.number().int(),
  duracao: z.number().int(),
  herois: z.array(z.object({
    slot, heroi: z.string(), time,
    xy: z.array(z.number().int()).refine((xy) => xy.length % 2 === 0, "xy precisa de pares"),
    mortes: z.array(intervalo),
    visto: z.array(intervalo),
    niveis: z.array(z.number().int()),
    lh: z.array(z.number().int()),
  })),
  wards: z.array(z.object({
    t: z.number().int(), fim: z.number().int().optional(), tipo: z.enum(["obs", "sen"]), time,
    x: z.number().int(), y: z.number().int(), slot: slot.optional(),
    destruida: z.boolean().optional(), por: slot.optional(),
  })),
  smokes: z.array(z.object({
    t: z.number().int(), slot, time, x: z.number().int(), y: z.number().int(),
    herois: z.array(z.object({ slot, ini: z.number().int(), fim: z.number().int().optional() })),
  })),
  mortes: z.array(z.object({
    t: z.number().int(), vitima: slot, assassino: slot.optional(), por: z.string().optional(),
    x: z.number().int(), y: z.number().int(), aegis: z.boolean().optional(),
  })),
  torres: z.array(z.object({ t: z.number().int(), nome: z.string() })),
  totais: z.object({ wards: z.number().int(), smokes: z.number().int(), mortes: z.number().int() }),
});
export type Trajetos = z.infer<typeof TrajetosSchema>;

/** Posições de um herói, uma por segundo a partir de `t0`, já normalizadas para o minimapa. */
export type TrilhaDoHeroi = Readonly<{ slot: number; heroi: string; time: 2 | 3; t0: number; pontos: readonly Ponto[] }>;

/** Converte coordenada da grade × escala (x, y de wards, smokes e mortes) para o minimapa. */
export const pontoDaGrade = (x: number, y: number, escala: number): Ponto => [
  (x / escala - ORIGEM_DA_GRADE) / LADO_DA_GRADE,
  (y / escala - ORIGEM_DA_GRADE) / LADO_DA_GRADE,
];

/** Desfaz o delta: xy = x0, y0, dx1, dy1… */
export function decodificarXY(xy: readonly number[], escala: number): Ponto[] {
  const pontos: Ponto[] = [];
  let x = 0;
  let y = 0;
  for (let i = 0; i + 1 < xy.length; i += 2) {
    x += xy[i] ?? 0;
    y += xy[i + 1] ?? 0;
    pontos.push(pontoDaGrade(x, y, escala));
  }
  return pontos;
}

export const trilhas = (trajetos: Trajetos): TrilhaDoHeroi[] =>
  trajetos.herois.map((h) => ({ slot: h.slot, heroi: h.heroi, time: h.time, t0: trajetos.t0, pontos: decodificarXY(h.xy, trajetos.escala) }));

/** Posição no segundo `t` (fracionário interpola); null fora do trecho gravado. */
export function posicaoEm(trilha: TrilhaDoHeroi, t: number): Ponto | null {
  const i = t - trilha.t0;
  const antes = trilha.pontos[Math.floor(i)];
  const depois = trilha.pontos[Math.ceil(i)];
  if (!antes || !depois) return null;
  const f = i - Math.floor(i);
  return [antes[0] + (depois[0] - antes[0]) * f, antes[1] + (depois[1] - antes[1]) * f];
}

export const CODIGOS_DE_ERRO = ["match_invalido", "replay_indisponivel", "upstream", "interno", "tempo_esgotado", "sem_conexao", "formato"] as const;
export type CodigoDeErro = (typeof CODIGOS_DE_ERRO)[number];
export type ResultadoDosTrajetos =
  | { readonly ok: true; readonly trajetos: Trajetos }
  | { readonly ok: false; readonly erro: CodigoDeErro; readonly detalhe: string };

const erroDoServidor = z.object({ code: z.string(), message: z.string() });
const ehCodigo = (codigo: string): codigo is CodigoDeErro => CODIGOS_DE_ERRO.some((c) => c === codigo);
const falha = (erro: CodigoDeErro, detalhe: string): ResultadoDosTrajetos => ({ ok: false, erro, detalhe });

/** Pede os trajetos de uma partida; a primeira vez gera a partir do replay, depois vem do cache no S3. */
export async function pedirTrajetos(matchId: string, sinal?: AbortSignal): Promise<ResultadoDosTrajetos> {
  if (!ID_DA_PARTIDA.test(matchId)) return falha("match_invalido", `id ${matchId}`);
  const tempo = AbortSignal.timeout(TEMPO_MAXIMO_MS);
  let resposta: Response;
  try {
    resposta = await fetch(`${URL_TRAJETOS}?match=${matchId}`, { signal: sinal ? AbortSignal.any([sinal, tempo]) : tempo });
  } catch (causa) {
    return falha(tempo.aborted ? "tempo_esgotado" : "sem_conexao", String(causa));
  }
  const corpo: unknown = await resposta.json().catch(() => null);
  if (!resposta.ok) return erroDaResposta(resposta.status, corpo);
  const trajetos = TrajetosSchema.safeParse(corpo);
  return trajetos.success ? { ok: true, trajetos: trajetos.data } : falha("formato", trajetos.error.message);
}

function erroDaResposta(status: number, corpo: unknown): ResultadoDosTrajetos {
  const erro = erroDoServidor.safeParse(corpo);
  if (!erro.success) return falha("interno", `status ${status}`);
  return falha(ehCodigo(erro.data.code) ? erro.data.code : "interno", erro.data.message);
}
