import { replaysSchema, type ReplayResumo } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";

const rotuloDoReplay = (r: ReplayResumo) => {
  const foco = r.focos.map((f) => `${f.jogador ?? "?"} (${f.heroi})`).join(", ");
  return [r.data, foco || "partida inteira", r.liga].filter(Boolean).join(" · ");
};

export function SeletorReplay({ valor, onMudar }: { valor: string | null; onMudar: (id: string | null) => void }) {
  const replays = useData("/data/replays.json", replaysSchema);
  if (replays.estado === "indisponivel") return <Indisponivel motivo={replays.motivo} />;
  const opcoes = replays.estado === "ok" ? replays.dados : [];
  return (
    <label className="seletor-replay">
      Rota real de replay
      <select value={valor ?? ""} onChange={(e) => onMudar(e.target.value || null)}>
        <option value="">Nenhuma</option>
        {opcoes.map((r) => <option key={r.match_id} value={r.match_id}>{rotuloDoReplay(r)}</option>)}
      </select>
    </label>
  );
}
