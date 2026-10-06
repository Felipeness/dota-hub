import type { Dispatch } from "react";
import { trajetoriaSchema, type Trajetoria } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { MapView, type MapViewProps } from "../map/MapView";
import { marcasNoTempo, trilhasNoTempo } from "../map/trilhas";
import { VELOCIDADES, formatarTempo, type AcaoReproducao, type Reproducao, type Velocidade } from "./reproducao";
import { useReproducao } from "./useReproducao";

type Props = MapViewProps & { replayId: string | null };

export function MapaComCamadas({ replayId, ...mapa }: Props) {
  if (!replayId) return <MapView {...mapa} />;
  return <MapaComReplay key={replayId} replayId={replayId} {...mapa} />;
}

function MapaComReplay({ replayId, ...mapa }: MapViewProps & { replayId: string }) {
  const dados = useData(`/data/trajetorias/${replayId}.json`, trajetoriaSchema);
  if (dados.estado === "ok") return <ReplayTocando trajetoria={dados.dados} {...mapa} />;
  return (
    <>
      <MapView {...mapa} />
      {dados.estado === "indisponivel" && <Indisponivel motivo={dados.motivo} />}
    </>
  );
}

function ReplayTocando({ trajetoria, ...mapa }: MapViewProps & { trajetoria: Trajetoria }) {
  const [estado, despachar] = useReproducao(trajetoria.fim_s);
  const trilhas = trilhasNoTempo(trajetoria, estado.t);
  return (
    <div className="mapa-com-replay">
      <MapView {...mapa} trilhas={trilhas} marcas={marcasNoTempo(trajetoria, estado.t)} />
      <ControlesReplay estado={estado} passoS={trajetoria.passo_s} despachar={despachar} />
      <ul className="legenda-replay" aria-label="Heróis do replay">
        {trilhas.map((t) => (
          <li key={t.id} className={`heroi-${t.lado}${t.destaque ? " destaque" : ""}`}>{t.rotulo}</li>
        ))}
      </ul>
    </div>
  );
}

const ehVelocidade = (v: number): v is Velocidade => VELOCIDADES.some((opcao) => opcao === v);

export function ControlesReplay({ estado, passoS, despachar }: { estado: Reproducao; passoS: number; despachar: Dispatch<AcaoReproducao> }) {
  return (
    <div className="controles-replay">
      <button onClick={() => despachar({ tipo: "alternar" })} aria-pressed={estado.tocando}>
        {estado.tocando ? "Pausar" : "Tocar"}
      </button>
      <input type="range" aria-label="Minuto do replay" min={0} max={estado.fimS} step={passoS} value={estado.t}
        onChange={(e) => despachar({ tipo: "ir", t: Number(e.target.value) })} />
      <span>{formatarTempo(estado.t)} / {formatarTempo(estado.fimS)}</span>
      <select aria-label="Velocidade" value={estado.velocidade}
        onChange={(e) => {
          const v = Number(e.target.value);
          if (ehVelocidade(v)) despachar({ tipo: "velocidade", v });
        }}>
        {VELOCIDADES.map((v) => <option key={v} value={v}>{v}×</option>)}
      </select>
    </div>
  );
}
