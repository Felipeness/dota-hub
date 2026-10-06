import { useState } from "react";
import { Link } from "react-router";
import { heroisSchema } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { filtrarHerois } from "./fases";
import { urlDoRetrato } from "./resumo";

const LIMITE_RESUMO = 120;
const resumoCurto = (texto: string) => (texto.length > LIMITE_RESUMO ? `${texto.slice(0, LIMITE_RESUMO).trimEnd()}…` : texto);

export function HeroesPage() {
  const herois = useData("/data/herois.json", heroisSchema);
  const [texto, setTexto] = useState("");
  if (herois.estado === "carregando") return <p>Carregando…</p>;
  if (herois.estado === "indisponivel") return <Indisponivel motivo={herois.motivo} />;
  return (
    <section className="herois">
      <div className="rotas-topo"><span className="sobretitulo">Guias</span><h1>Heróis</h1></div>
      <input type="search" aria-label="Filtrar heróis" placeholder="Filtrar heróis" value={texto} onChange={(e) => setTexto(e.target.value)} />
      <ul className="grade-herois">
        {filtrarHerois(herois.dados, texto).map((h) => (
          <li key={h.id}>
            <Link to={`/herois/${h.id}`}>
              <img className="retrato" src={urlDoRetrato(h.id)} alt="" width={64} height={36} loading="lazy" />
              <span className="heroi-texto"><strong>{h.nome}</strong><span>{resumoCurto(h.resumo)}</span></span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
