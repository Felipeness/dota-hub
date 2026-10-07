import { Link } from "react-router";
import type { Painel } from "../data/schemas";
import { normalizar } from "../routes/filtros";
import { Grafico } from "./Grafico";
import { formatarValor } from "./grafico-config";

// mesmo slug do export (jogadores.slug): é o id do time em times.json
const idDoTime = (nome: string) => normalizar(nome).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function PainelJogador({ painel }: { painel: Painel }) {
  return (
    <article className="painel-jogador">
      <header>
        <span className="sobretitulo">{painel.tipo === "pro" ? "Profissional" : "Amigo"}</span>
        <h1>{painel.nome}</h1>
        {painel.time && <p><Link to={`/jogadores/times/${idDoTime(painel.time)}`}>{painel.time}</Link></p>}
        <p className="amostra">{painel.amostra}</p>
      </header>
      <dl className="destaques">
        {painel.destaques.map((d) => (
          <div key={d.rotulo} title={`Fonte: ${d.fonte}`}><dt>{d.rotulo}</dt><dd>{formatarValor(d.valor, d.unidade)}</dd></div>
        ))}
      </dl>
      {painel.graficos.map((g) => <Grafico key={g.id} grafico={g} />)}
      {painel.achados.length > 0 && (
        <section><h2>O que a análise achou</h2><ul>{painel.achados.map((a) => <li key={a.texto}>{a.texto}</li>)}</ul></section>
      )}
      {painel.replays.length > 0 && (
        <section><h2>Replays no mapa</h2>
          <ul>{painel.replays.map((r) => <li key={r}><Link to={`/?replay=${r}`}>Ver o replay {r} no mapa</Link></li>)}</ul>
        </section>
      )}
      <details className="recolhivel fonte"><summary>Fontes</summary><p>{painel.fontes.join("; ")}</p></details>
    </article>
  );
}
