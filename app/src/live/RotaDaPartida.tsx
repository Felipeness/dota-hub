import { objetivosSchema } from "../data/schemas";
import { useData } from "../data/useData";
import { MapView } from "../map/MapView";
import { ErroAoVivoView } from "./ErroAoVivo";
import { nomeDaLane } from "./formato";
import { rotaDaPartida } from "./rotaAproximada";
import { useAoVivo } from "./useAoVivo";

export function RotaDaPartida({ partida, conta }: { partida: string; conta: number }) {
  const rota = useAoVivo(`rota:${partida}:${conta}`, (consultar) => rotaDaPartida(consultar, partida, conta));
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  if (rota.estado === "parado" || rota.estado === "carregando") return <p>Carregando a rota…</p>;
  if (rota.estado === "erro") return <ErroAoVivoView erro={rota.erro} contexto="partida" onTentar={rota.tentarDeNovo} />;
  if (!rota.dados.analisada) return <p>Esta partida não foi analisada pela fonte; a rota não está disponível.</p>;
  return (
    <section className="rota-aproximada">
      <p>
        Lane principal: <strong>{nomeDaLane(rota.dados.laneDasManchas)}</strong>
        {" · "}registrada pela fonte: {nomeDaLane(rota.dados.laneRegistrada)}
      </p>
      <MapView objetivos={objetivos.estado === "ok" ? objetivos.dados : []} manchas={rota.dados.manchas} onSelecionar={() => {}} />
      <p className="aviso">Rota aproximada: posições de lane dos primeiros 10 minutos.</p>
    </section>
  );
}
