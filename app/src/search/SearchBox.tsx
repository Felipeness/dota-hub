import { useMemo, useState } from "react";
import { Link } from "react-router";
import { Indisponivel, useData } from "../data/useData";
import { conteudoSchema, objetivosSchema, rotasSchema } from "../data/schemas";
import { buscar, construirIndice, sugerir } from "./index";

const ETIQUETA = { rota: "Rota", objetivo: "Objetivo", termo: "Termo" } as const;

export function SearchBox() {
  const rotas = useData("/data/rotas.json", rotasSchema);
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  const termos = useData("/data/glossario.json", conteudoSchema);
  const [consulta, setConsulta] = useState("");

  const busca = useMemo(
    () => rotas.estado === "ok" && objetivos.estado === "ok" && termos.estado === "ok"
      ? construirIndice({ rotas: rotas.dados, objetivos: objetivos.dados, termos: termos.dados })
      : null,
    [rotas, objetivos, termos],
  );

  const indisponivel = [rotas, objetivos, termos].find((e) => e.estado === "indisponivel");
  if (indisponivel) return <Indisponivel motivo={indisponivel.motivo} />;

  const achados = busca ? buscar(busca, consulta) : [];
  const parecidos = busca && consulta.trim() && achados.length === 0 ? sugerir(busca, consulta) : [];

  return (
    <div className="busca">
      <input
        type="search" role="searchbox" value={consulta} disabled={!busca}
        aria-label="Buscar herói, rota, objetivo ou termo" placeholder="Buscar herói, rota, objetivo ou termo"
        onChange={(e) => setConsulta(e.target.value)}
      />
      {achados.length > 0 && (
        <ul>
          {achados.map((a) => (
            <li key={`${a.tipo}:${a.id}`}>
              <span className="etiqueta">{ETIQUETA[a.tipo]}</span>{" "}
              <Link to={a.link} onClick={() => setConsulta("")}>{a.titulo}</Link>
            </li>
          ))}
        </ul>
      )}
      {consulta.trim() && busca && achados.length === 0 && (
        <p>Nada encontrado.{parecidos.length > 0 && ` Você quis dizer: ${parecidos.join(", ")}?`}</p>
      )}
    </div>
  );
}
