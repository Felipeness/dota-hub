import type { Rota } from "../data/schemas";
import type { MapViewProps } from "./MapView";
import { normToPercent } from "./coords";

export function MapFlat({ objetivos, rota, selecionado, onSelecionar }: MapViewProps) {
  return (
    <div className="mapa-plano">
      <img src="/data/mapa_2048.jpg" crossOrigin="anonymous" alt="Mapa do Dota 7.41" />
      <svg viewBox="0 0 1 1" preserveAspectRatio="none" className="mapa-plano-rota">
        {rota?.caminhos.map((c, i) => (
          <polyline key={i} points={c.map(([x, y]) => `${x},${1 - y}`).join(" ")} />
        ))}
        {rota && <Fuga rota={rota} />}
      </svg>
      {objetivos.map((o) => (
        <button key={o.id} aria-label={o.nome} title={o.nome}
          className={`marcador marcador-${o.tipo} lado-${o.lado}${o.id === selecionado ? " ativo" : ""}`}
          style={normToPercent([o.x, o.y])} onClick={() => onSelecionar(o.id)} />
      ))}
      {rota?.passos.map((p) => (
        <span key={p.n} className="passo-no-mapa" style={normToPercent([p.x, p.y])}>
          <span className={`passo passo-${p.risco}`}>{p.n}</span>
          <span className="passo-minuto">{p.minuto}</span>
        </span>
      ))}
      {rota?.fuga && <span className="rotulo-fuga" style={normToPercent([rota.fuga.x, rota.fuga.y])}>{rota.fuga.rotulo}</span>}
    </div>
  );
}

function Fuga({ rota }: { rota: Rota }) {
  const origem = rota.passos.find((p) => p.n === rota.fuga?.de_passo);
  if (!rota.fuga || !origem) return null;
  return <line className="fuga-linha" x1={origem.x} y1={1 - origem.y} x2={rota.fuga.x} y2={1 - rota.fuga.y} />;
}
