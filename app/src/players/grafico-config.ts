import type { ChartConfiguration, ChartType } from "chart.js";
import type { GraficoDados } from "../data/schemas";

// O canvas não lê variáveis CSS: estes valores repetem os de styles/tokens.css.
export const CORES_SERIE = ["#f2b544", "#4fc3e8", "#e0675a", "#5bbf7a", "#b08cff", "#e9e4d8"] as const;
const TEXTO = "#e9e4d8";
const TEXTO_FRACO = "#8b968f";
const GRADE = "rgba(233, 228, 216, 0.08)";
const TIPO: Record<GraficoDados["tipo"], ChartType> = { linha: "line", barra: "bar" };

const cor = (i: number) => CORES_SERIE[i % CORES_SERIE.length] ?? TEXTO;

export function formatarValor(valor: number, unidade: string): string {
  const numero = valor.toLocaleString("pt-BR", { maximumFractionDigits: 1 });
  return unidade === "%" ? `${numero}%` : `${numero} ${unidade}`;
}

export function configDoGrafico(g: GraficoDados): ChartConfiguration {
  return {
    type: TIPO[g.tipo],
    data: {
      labels: g.x.valores.map(String),
      datasets: g.series.map((s, i) => ({
        label: s.nome, data: s.valores, borderColor: cor(i), backgroundColor: cor(i), pointRadius: 0, spanGaps: true, borderWidth: 2,
      })),
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { labels: { color: TEXTO } },
        tooltip: { callbacks: { label: (c) => `${c.dataset.label ?? ""}: ${c.formattedValue} ${g.unidade}` } },
      },
      scales: {
        x: { title: { display: Boolean(g.x.rotulo), text: g.x.rotulo, color: TEXTO_FRACO }, ticks: { color: TEXTO_FRACO, autoSkip: true, maxRotation: 45 }, grid: { color: GRADE } },
        y: { title: { display: true, text: g.unidade, color: TEXTO_FRACO }, ticks: { color: TEXTO_FRACO }, grid: { color: GRADE } },
      },
    },
  };
}
