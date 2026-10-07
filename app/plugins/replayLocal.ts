// Plugin só do `npm run dev`: POST /api/local/replay/<match_id> baixa o replay, lê com o leitor Go do projeto
// dota-tier1 e grava public/data/partidas/<match_id>.json com a rota real. No build ele não existe.
import { execFile } from "node:child_process";
import { createWriteStream } from "node:fs";
import { mkdir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import type { ServerResponse } from "node:http";
import { tmpdir } from "node:os";
import path from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { promisify } from "node:util";
import type { Logger, Plugin } from "vite";
import { z } from "zod";
import { converterReplay } from "./converterReplay.ts";

const ROTA = /^\/api\/local\/replay\/(\d{1,15})\/?$/;
const OPENDOTA = "https://api.opendota.com/api/matches";
/** Replay da Valve: http://replay<cluster>.valve.net/570/<match>_<salt>.dem.bz2; qualquer outro endereço é recusado. */
const URL_DO_REPLAY = /^https?:\/\/replay\d+\.valve\.net\/570\/(\d+)_\d+\.dem\.bz2$/;
const TEMPO_DA_FONTE_MS = 10_000;
const TEMPO_DO_DOWNLOAD_MS = 5 * 60_000;
const TEMPO_DO_LEITOR_MS = 3 * 60_000;
/** Replay de verdade tem dezenas de MB; menos que isso é página de erro ou download cortado. */
const TAMANHO_MINIMO = 1_000_000;

const partidaDaFonte = z.object({ replay_url: z.string().nullable().optional() });
const executar = promisify(execFile);

type Opcoes = Readonly<{ raizDoApp: string; leitor: string; pastaDosReplays: string }>;
type Falha = Readonly<{ status: number; erro: string }>;

class FalhaDoReplay extends Error {
  readonly status: number;
  constructor(status: number, mensagem: string) {
    super(mensagem);
    this.status = status;
  }
}

function responder(res: ServerResponse, status: number, corpo: unknown) {
  res.statusCode = status;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.end(JSON.stringify(corpo));
}

async function urlDoReplay(partida: string): Promise<string> {
  const resposta = await fetch(`${OPENDOTA}/${partida}`, { signal: AbortSignal.timeout(TEMPO_DA_FONTE_MS), headers: { accept: "application/json" } });
  if (!resposta.ok) throw new FalhaDoReplay(502, `o OpenDota respondeu ${resposta.status} para a partida`);
  const url = partidaDaFonte.parse(await resposta.json()).replay_url ?? "";
  if (URL_DO_REPLAY.exec(url)?.[1] !== partida) throw new FalhaDoReplay(404, "a partida não tem replay disponível (a Valve apaga depois de algumas semanas)");
  return url;
}

async function existeCompleto(arquivo: string): Promise<boolean> {
  return stat(arquivo).then((s) => s.size >= TAMANHO_MINIMO, () => false);
}

async function baixar(url: string, destino: string): Promise<void> {
  if (await existeCompleto(destino)) return;
  const resposta = await fetch(url, { signal: AbortSignal.timeout(TEMPO_DO_DOWNLOAD_MS) });
  if (!resposta.ok || !resposta.body) throw new FalhaDoReplay(502, `a Valve respondeu ${resposta.status} para o replay`);
  const parcial = `${destino}.part`;
  const falhou = await pipeline(Readable.fromWeb(resposta.body), createWriteStream(parcial)).then(() => null, (causa: unknown) => String(causa));
  if (falhou !== null || !(await existeCompleto(parcial))) {
    await rm(parcial, { force: true });
    throw new FalhaDoReplay(502, `download do replay: ${falhou?.slice(0, 200) ?? "arquivo incompleto"}`);
  }
  await rename(parcial, destino);
}

async function lerReplay(opcoes: Opcoes, partida: string, replay: string): Promise<string> {
  const saida = path.join(tmpdir(), "dota-hub-replay", partida);
  await rm(saida, { recursive: true, force: true });
  // execFile sem shell e com o id já validado como número: nada do pedido vira comando.
  await executar(opcoes.leitor, ["-replay", replay, "-out", saida, "-match", partida], { timeout: TEMPO_DO_LEITOR_MS, windowsHide: true })
    .catch((causa: unknown) => { throw new FalhaDoReplay(502, `o leitor de replay falhou: ${String(causa).slice(0, 200)}`); });
  const [posicoesCsv, eventosJsonl, metaJson] = await Promise.all(
    ["posicoes.csv", "eventos.jsonl", "meta.json"].map((nome) => readFile(path.join(saida, nome), "utf-8")),
  );
  const destino = path.join(opcoes.raizDoApp, "public", "data", "partidas", `${partida}.json`);
  await mkdir(path.dirname(destino), { recursive: true });
  await writeFile(destino, JSON.stringify(converterReplay({ matchId: partida, posicoesCsv: posicoesCsv ?? "", eventosJsonl: eventosJsonl ?? "", metaJson: metaJson ?? "" })));
  await rm(saida, { recursive: true, force: true });
  return destino;
}

async function gerar(opcoes: Opcoes, partida: string, log: Logger): Promise<string> {
  const inicio = Date.now();
  const url = await urlDoReplay(partida);
  await mkdir(opcoes.pastaDosReplays, { recursive: true });
  const replay = path.join(opcoes.pastaDosReplays, `${partida}.dem.bz2`);
  await baixar(url, replay);
  log.info(`[replay-local] ${partida}: replay em ${replay} (${Date.now() - inicio} ms)`, { timestamp: true });
  const destino = await lerReplay(opcoes, partida, replay);
  log.info(`[replay-local] ${partida}: rota gravada em ${destino} (${Date.now() - inicio} ms)`, { timestamp: true });
  return destino;
}

const comoFalha = (causa: unknown): Falha =>
  (causa instanceof FalhaDoReplay ? { status: causa.status, erro: causa.message } : { status: 500, erro: `erro inesperado: ${String(causa).slice(0, 200)}` });

export function replayLocal(opcoes: Opcoes): Plugin {
  const emAndamento = new Set<string>();
  return {
    name: "dota-hub-replay-local",
    apply: "serve",
    config: () => ({ define: { "import.meta.env.VITE_REPLAY_LOCAL": JSON.stringify("1") } }),
    configureServer(server) {
      const log = server.config.logger;
      server.middlewares.use((req, res, next) => {
        const partida = ROTA.exec(req.url ?? "")?.[1];
        if (!partida) return next();
        if (req.method !== "POST") return responder(res, 405, { erro: "use POST" });
        if (emAndamento.has(partida)) return responder(res, 409, { erro: "esta partida já está sendo gerada" });
        emAndamento.add(partida);
        gerar(opcoes, partida, log)
          .then(() => responder(res, 201, { arquivo: `/data/partidas/${partida}.json` }))
          .catch((causa: unknown) => {
            const falha = comoFalha(causa);
            log.error(`[replay-local] ${partida}: ${falha.erro}`, { timestamp: true });
            responder(res, falha.status, { erro: falha.erro });
          })
          .finally(() => emAndamento.delete(partida));
      });
    },
  };
}
