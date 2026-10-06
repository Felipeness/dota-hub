import type { MapViewProps } from "./MapView";
import { normToPercent } from "./coords";

export function MapFlat({ objetivos, rota, selecionado, onSelecionar }: MapViewProps) {
  return (
    <div className="mapa-plano">
      <img src="/data/mapa_2048.jpg" alt="Mapa do Dota 7.41" />
      <svg viewBox="0 0 1 1" preserveAspectRatio="none" className="mapa-plano-rota">
        {rota?.caminhos.map((c, i) => (
          <polyline key={i} points={c.map(([x, y]) => `${x},${1 - y}`).join(" ")} />
        ))}
      </svg>
      {objetivos.map((o) => (
        <button key={o.id} aria-label={o.nome} title={o.nome}
          className={`marcador marcador-${o.tipo}${o.id === selecionado ? " ativo" : ""}`}
          style={normToPercent([o.x, o.y])} onClick={() => onSelecionar(o.id)} />
      ))}
      {rota?.passos.map((p) => (
        <span key={p.n} className={`passo passo-${p.risco}`} style={normToPercent([p.x, p.y])}>{p.n}</span>
      ))}
    </div>
  );
}
