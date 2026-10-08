import { Link } from "react-router";
import { jogadoresSchema, timesSchema, type JogadorResumo } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";

const Grupo = ({ titulo, jogadores }: { titulo: string; jogadores: JogadorResumo[] }) => (
  <section><h2>{titulo}</h2>
    <ul className="cartoes">{jogadores.map((j) => (
      <li key={j.id}><Link to={`/jogadores/${j.id}`}><strong>{j.nome}</strong><span>{j.time ?? j.amostra}</span></Link></li>
    ))}</ul>
  </section>
);

export function PlayersPage() {
  const jogadores = useData("/data/jogadores.json", jogadoresSchema);
  const times = useData("/data/times.json", timesSchema);
  if (jogadores.estado === "carregando") return <p>Carregando…</p>;
  if (jogadores.estado === "indisponivel") return <Indisponivel motivo={jogadores.motivo} />;
  return (
    <section className="jogadores">
      <div className="rotas-topo"><span className="sobretitulo">Análises</span><h1>Jogadores e times</h1></div>
      <Grupo titulo="Amigos" jogadores={jogadores.dados.filter((j) => j.tipo === "amigo")} />
      <Grupo titulo="Profissionais" jogadores={jogadores.dados.filter((j) => j.tipo === "pro")} />
      <section><h2>Times</h2>
        {times.estado === "indisponivel" && <Indisponivel motivo={times.motivo} />}
        {times.estado === "ok" && <ul className="cartoes">{times.dados.map((t) => (
          <li key={t.id}><Link to={`/jogadores/times/${t.id}`}><strong>{t.nome}</strong><span>{t.jogadores.length === 1 ? "1 jogador nas análises" : `${t.jogadores.length} jogadores nas análises`}</span></Link></li>
        ))}</ul>}
      </section>
    </section>
  );
}
