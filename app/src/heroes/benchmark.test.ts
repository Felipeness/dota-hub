import type { BenchmarksFonte } from "../live/fonte/schemas";
import { ritmoEsperado } from "./benchmark";

const percentil = (percentile: number, value: number) => ({ percentile, value });

const benchmarks = (gold: number[], lh: number[]): BenchmarksFonte => ({
  hero_id: 1,
  result: {
    gold_per_min: gold.map((v, i) => percentil([0.1, 0.5, 0.8, 0.9][i], v)),
    xp_per_min: [],
    last_hits_per_min: lh.map((v, i) => percentil([0.1, 0.5, 0.8, 0.9][i], v)),
  },
});

it("lê o GPM e o LH esperados nos percentis 50 e 80", () => {
  expect(ritmoEsperado(benchmarks([300, 550, 700, 850], [2, 5, 8, 11]))).toEqual({
    gpmMediana: 550, gpmTopo: 700, lhMediana: 5, lhTopo: 8,
  });
});

it("sem o percentil 80 nos dados, não inventa o número", () => {
  const sem80 = benchmarks([300, 550, 700, 850], [2, 5, 8, 11]);
  const semP80 = { ...sem80, result: { ...sem80.result, gold_per_min: sem80.result.gold_per_min.filter((p) => p.percentile !== 0.8) } };
  expect(ritmoEsperado(semP80)).toBeNull();
});
