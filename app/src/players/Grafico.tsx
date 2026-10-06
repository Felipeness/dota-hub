import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale, LineController, LineElement, PointElement, Tooltip } from "chart.js";
import { useEffect, useRef } from "react";
import type { GraficoDados } from "../data/schemas";
import { configDoGrafico } from "./grafico-config";

Chart.register(LineController, LineElement, PointElement, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function TabelaDoGrafico({ grafico }: { grafico: GraficoDados }) {
  return (
    <details className="grafico-numeros">
      <summary>Ver os números</summary>
      <div className="rolagem">
        <table>
          <thead><tr><th>{grafico.x.rotulo || "item"}</th>{grafico.series.map((s) => <th key={s.nome}>{s.nome}</th>)}</tr></thead>
          <tbody>{grafico.x.valores.map((x, i) => (
            <tr key={String(x)}><td>{x}</td>{grafico.series.map((s) => <td key={s.nome}>{s.valores[i]?.toLocaleString("pt-BR") ?? "sem dado"}</td>)}</tr>
          ))}</tbody>
        </table>
      </div>
    </details>
  );
}

export function Grafico({ grafico }: { grafico: GraficoDados }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const contexto = canvas.current?.getContext("2d");
    if (!contexto) return;
    const grafico2d = new Chart(contexto, configDoGrafico(grafico));
    return () => grafico2d.destroy();
  }, [grafico]);
  const descricao = `${grafico.titulo}: ${grafico.series.map((s) => s.nome).join(", ")} por ${grafico.x.rotulo || "item"}`;
  return (
    <figure className="grafico">
      <figcaption>{grafico.titulo}</figcaption>
      <div className="grafico-area"><canvas ref={canvas} role="img" aria-label={descricao} /></div>
      <TabelaDoGrafico grafico={grafico} />
      <p className="grafico-fonte">Fonte: {grafico.fonte}{grafico.nota ? `. ${grafico.nota}` : ""}</p>
    </figure>
  );
}
