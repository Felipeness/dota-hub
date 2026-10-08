import { Link } from "react-router";
import { heroisSchema } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { urlDoRetrato } from "../heroes/resumo";
import "./checklist.css";

export function ChecklistPage() {
  const herois = useData("/data/herois.json", heroisSchema);
  if (herois.estado === "carregando") return <p>Carregando…</p>;
  if (herois.estado === "indisponivel") return <Indisponivel motivo={herois.motivo} />;
  return (
    <section className="checklist-lista">
      <div className="rotas-topo"><span className="sobretitulo">Antes e depois</span><h1>Checklist</h1></div>
      <p className="herois-cobertura">Checklist de pré e pós jogo pros {herois.dados.length} heróis com guia completo.</p>
      <ul className="grade-herois">
        {herois.dados.map((h) => (
          <li key={h.id}>
            <Link to={`/checklist/${h.id}`}>
              <img className="retrato" src={urlDoRetrato(h.id)} alt="" width={64} height={36} loading="lazy" />
              <span className="heroi-texto"><strong>{h.nome}</strong></span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
