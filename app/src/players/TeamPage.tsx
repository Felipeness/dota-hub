import { Link, useParams } from "react-router";
import { jogadoresSchema, timesSchema } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";

export function TeamPage() {
  const { id = "" } = useParams();
  const times = useData("/data/times.json", timesSchema);
  const jogadores = useData("/data/jogadores.json", jogadoresSchema);
  if (times.estado === "carregando") return <p>Carregando…</p>;
  if (times.estado === "indisponivel") return <Indisponivel motivo={times.motivo} />;
  const time = times.dados.find((t) => t.id === id);
  if (!time) return <Indisponivel motivo={`time ${id} não está nas análises`} />;
  const nomes = new Map(jogadores.estado === "ok" ? jogadores.dados.map((j) => [j.id, j.nome]) : []);
  return (
    <section className="jogadores">
      <div className="rotas-topo"><span className="sobretitulo">Time</span><h1>{time.nome}</h1></div>
      <ul className="cartoes">{time.jogadores.map((j) => <li key={j}><Link to={`/jogadores/${j}`}><strong>{nomes.get(j) ?? j}</strong></Link></li>)}</ul>
      <p className="fonte">Fonte: {time.fonte}</p>
    </section>
  );
}
