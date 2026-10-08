import type { BenchmarksFonte } from "../live/fonte/schemas";

export type RitmoEsperado = Readonly<{ gpmMediana: number; gpmTopo: number; lhMediana: number; lhTopo: number }>;

const MEDIANA = 0.5;
const TOPO = 0.8;

type Percentis = BenchmarksFonte["result"]["gold_per_min"];
const valorNoPercentil = (percentis: Percentis, alvo: number): number | null =>
  percentis.find((p) => p.percentile === alvo)?.value ?? null;

/**
 * Ritmo esperado de ouro e last hits por minuto nos percentis 50 (mediano) e 80 (bom) do /benchmarks do OpenDota
 * (partidas públicas de todos os ranks, não só pro). null quando algum dos quatro números não veio: não inventa.
 */
export function ritmoEsperado(benchmarks: BenchmarksFonte): RitmoEsperado | null {
  const { gold_per_min, last_hits_per_min } = benchmarks.result;
  const gpmMediana = valorNoPercentil(gold_per_min, MEDIANA);
  const gpmTopo = valorNoPercentil(gold_per_min, TOPO);
  const lhMediana = valorNoPercentil(last_hits_per_min, MEDIANA);
  const lhTopo = valorNoPercentil(last_hits_per_min, TOPO);
  if (gpmMediana === null || gpmTopo === null || lhMediana === null || lhTopo === null) return null;
  return { gpmMediana, gpmTopo, lhMediana, lhTopo };
}
