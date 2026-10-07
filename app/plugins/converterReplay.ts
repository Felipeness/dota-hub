// Converte a saída do leitor de replay (Desktop/dota-tier1/tools/replay: posicoes.csv, eventos.jsonl, meta.json)
// no JSON que a página da partida lê. Função pura: o plugin cuida de arquivos e processos.
import { z } from "zod";
import { replayDaPartidaSchema, type ReplayDaPartida } from "../src/live/partida/replaySchema.ts";

export const PASSO_S = 5;
const ORIGEM_DA_GRADE = 57;
const ESCALA_DA_GRADE = 142;
/** Neutros mortos pelo mesmo herói com até 10 s entre um e outro são o mesmo camp. */
const INTERVALO_DO_CAMP_S = 10;
/** Sem amostra no segundo exato do evento, vale a mais perto em até 5 s. */
const DESVIOS_S = [0, -1, 1, -2, 2, -3, 3, -4, 4, -5, 5];

type Entrada = Readonly<{ matchId: string; posicoesCsv: string; eventosJsonl: string; metaJson: string }>;
type Posicao = Readonly<{ gx: number; gy: number; vivo: boolean }>;
const eventoSchema = z.object({
  t: z.number(), tipo: z.string(), slot: z.number().int().optional(), nome: z.string().optional(),
  categoria: z.string().optional(), gx: z.number().optional(), gy: z.number().optional(),
});
type Evento = z.infer<typeof eventoSchema>;
const metaSchema = z.object({ jogadores: z.array(z.object({ slot: z.number().int(), conta: z.number().nullable(), heroi: z.string() })) });

const norm = (g: number) => Math.round(Math.min(1, Math.max(0, (g - ORIGEM_DA_GRADE) / ESCALA_DA_GRADE)) * 1_000) / 1_000;
const milesimo = (g: number) => Math.round(norm(g) * 1_000);

function lerPosicoes(csv: string): Map<number, Map<number, Posicao>> {
  const [cabecalho = "", ...linhas] = csv.trim().split(/\r?\n/);
  const coluna = Object.fromEntries(cabecalho.split(",").map((nome, i) => [nome, i]));
  const porSlot = new Map<number, Map<number, Posicao>>();
  for (const linha of linhas) {
    const campos = linha.split(",");
    const valor = (nome: string) => Number(campos[coluna[nome] ?? -1]);
    const slot = valor("slot");
    const doSlot = porSlot.get(slot) ?? porSlot.set(slot, new Map()).get(slot);
    doSlot?.set(valor("t"), { gx: valor("gx"), gy: valor("gy"), vivo: valor("vivo") === 1 });
  }
  return porSlot;
}

// Linha que não casa com o formato (o leitor mudou) fica de fora em vez de derrubar a conversão inteira.
function lerEventos(jsonl: string): Evento[] {
  return jsonl.split(/\r?\n/).filter((l) => l.trim() !== "").flatMap((l) => {
    const evento = eventoSchema.safeParse(JSON.parse(l));
    return evento.success ? [evento.data] : [];
  });
}

function trilha(posicoes: ReadonlyMap<number, Posicao>, fimS: number): number[] {
  return Array.from({ length: Math.floor(fimS / PASSO_S) + 1 }, (_, i) => posicoes.get(i * PASSO_S)).flatMap((p) =>
    (p?.vivo ? [milesimo(p.gx), milesimo(p.gy)] : [-1, -1]));
}

function campsDoSlot(mortes: readonly Evento[], posicoes: ReadonlyMap<number, Posicao> | undefined, slot: number) {
  const grupos = mortes.reduce<Evento[][]>((acc, m) => {
    const atual = acc.at(-1);
    const ultima = atual?.at(-1);
    if (atual && ultima && m.t - ultima.t <= INTERVALO_DO_CAMP_S) atual.push(m);
    else acc.push([m]);
    return acc;
  }, []);
  return grupos.flatMap((grupo) => {
    const t = Math.round(grupo[0]?.t ?? 0);
    const p = DESVIOS_S.map((d) => posicoes?.get(t + d)).find((q) => q !== undefined);
    return p ? [{ t, slot, x: norm(p.gx), y: norm(p.gy), creeps: grupo.length }] : [];
  });
}

const comPosicao = (e: Evento): e is Evento & { slot: number; gx: number; gy: number } =>
  e.slot !== undefined && e.gx !== undefined && e.gy !== undefined;

export function converterReplay({ matchId, posicoesCsv, eventosJsonl, metaJson }: Entrada): ReplayDaPartida {
  const meta = metaSchema.parse(JSON.parse(metaJson));
  const posicoes = lerPosicoes(posicoesCsv);
  const eventos = lerEventos(eventosJsonl);
  const fimS = Math.max(0, ...[...posicoes.values()].flatMap((p) => [...p.keys()]));
  const neutros = eventos.filter((e) => e.tipo === "morte_creep" && e.categoria === "neutro" && e.slot !== undefined);
  return replayDaPartidaSchema.parse({
    match_id: matchId, passo_s: PASSO_S, inicio_s: 0,
    herois: meta.jogadores.map((j) => ({ slot: j.slot, heroi: j.heroi, conta: j.conta || null, xy: trilha(posicoes.get(j.slot) ?? new Map(), fimS) })),
    camps: meta.jogadores.flatMap((j) => campsDoSlot(neutros.filter((n) => n.slot === j.slot), posicoes.get(j.slot), j.slot)),
    smokes: eventos.filter((e) => e.tipo === "smoke").filter(comPosicao).map((e) => ({ t: e.t, slot: e.slot, x: norm(e.gx), y: norm(e.gy) })),
    wards: eventos.filter((e) => e.tipo === "ward" && (e.nome === "observer" || e.nome === "sentry")).filter(comPosicao)
      .map((e) => ({ t: e.t, slot: e.slot, tipo: e.nome, x: norm(e.gx), y: norm(e.gy) })),
    compras: eventos.filter((e) => e.tipo === "compra" && e.slot !== undefined && e.nome)
      .map((e) => ({ t: e.t, slot: e.slot, item: (e.nome ?? "").replace(/^item_/, "") })),
  });
}
