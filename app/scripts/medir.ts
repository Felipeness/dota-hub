// Critério 1: tempo do resumo de conta sem guardado (20 contas, uma a cada 6 s, para não encostar no teto da fila)
// e com guardado (as mesmas 20 de novo). Roda no Node com o mesmo código do app: npx --yes tsx scripts/medir.ts <20 ids>
import { cacheEmMemoria } from "../src/live/cache";
import { criarConsulta } from "../src/live/consulta";
import { resumoDaConta } from "../src/live/contas";
import { criarFila } from "../src/live/fila";
import { criarFonte } from "../src/live/fonte/opendota";

const PAUSA_ENTRE_CONTAS_MS = 6_000;
const contas = process.argv.slice(2).map(Number);
const fonte = criarFonte({ fila: criarFila(), estaOnline: () => true, registrar: () => {} });
const consultar = criarConsulta({ fonte, cache: cacheEmMemoria(), agora: Date.now });
const dormir = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const p95 = (tempos: readonly number[]) => [...tempos].sort((a, b) => a - b)[Math.ceil(tempos.length * 0.95) - 1] ?? 0;

async function medir(id: number): Promise<number> {
  const inicio = performance.now();
  const resumo = await resumoDaConta(consultar, id);
  if (!resumo.ok) console.warn(`conta ${id}: ${resumo.erro.codigo}`);
  return performance.now() - inicio;
}

// Em sequência de propósito: a medição é de uma busca por vez, como o Felipe usa.
const semGuardado: number[] = [];
for (const id of contas) {
  semGuardado.push(await medir(id));
  await dormir(PAUSA_ENTRE_CONTAS_MS);
}
const comGuardado: number[] = [];
for (const id of contas) comGuardado.push(await medir(id));
console.log(`sem guardado p95 ${Math.round(p95(semGuardado))} ms; com guardado p95 ${Math.round(p95(comGuardado))} ms`);
