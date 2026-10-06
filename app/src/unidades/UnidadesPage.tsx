import { Link, useParams } from "react-router";
import { campsSchema, unidadeSchema, unidadesSchema, type UnidadeResumo } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { agruparUnidades } from "./ficha";
import { FichaUnidade } from "./FichaUnidade";
import "./unidades.css";

// O jogo dá o mesmo nome ao creep dos dois lados ("Criatura Guerreira"); a lista diz qual é qual.
const ROTULO_LADO = { radiant: "Radiant", dire: "Dire", neutro: "Neutro" } as const satisfies Record<UnidadeResumo["lado"], string>;

function FichaCarregada({ id }: { id: string }) {
  const ficha = useData(`/data/unidades/${id}.json`, unidadeSchema);
  if (ficha.estado === "carregando") return <p>Carregando…</p>;
  if (ficha.estado === "indisponivel") return <Indisponivel motivo={ficha.motivo} />;
  return <FichaUnidade unidade={ficha.dados} />;
}

export function UnidadesPage() {
  const { id } = useParams();
  const unidades = useData("/data/unidades.json", unidadesSchema);
  const camps = useData("/data/camps.json", campsSchema);
  if (unidades.estado === "carregando") return <p>Carregando…</p>;
  if (unidades.estado === "indisponivel") return <Indisponivel motivo={unidades.motivo} />;
  const grupos = agruparUnidades(unidades.dados, camps.estado === "ok" ? camps.dados : []);
  return (
    <section className="unidades-pagina">
      <nav className="unidades-lista" aria-label="Unidades">
        <Link className="pilula" to="/glossario">← Termos</Link>
        {grupos.map((g) => (
          <section key={g.titulo} aria-labelledby={`grupo-${g.titulo}`}>
            <h2 id={`grupo-${g.titulo}`} className="sobretitulo">{g.titulo}</h2>
            <ul>
              {g.unidades.map((u) => (
                <li key={u.id}><Link to={`/glossario/unidades/${u.id}`} aria-current={u.id === id ? "page" : undefined}>{u.nome}{u.grupo === "lane" && <span className="nome-en">&nbsp;· {ROTULO_LADO[u.lado]}</span>}</Link></li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
      <div className="unidades-ficha">
        {id ? <FichaCarregada key={id} id={id} /> : <h1>Escolha uma unidade.</h1>}
      </div>
    </section>
  );
}
