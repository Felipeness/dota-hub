import { useState } from "react";
import { Link } from "react-router";
import { heroisSchema } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { filtrarHerois } from "./fases";
import { urlDoRetrato } from "./resumo";

const LIMITE_RESUMO = 120;

// Corta no último espaço antes do limite para não quebrar palavra no meio.
function resumoCurto(texto: string): string {
  if (texto.length <= LIMITE_RESUMO) return texto;
  const cortado = texto.slice(0, LIMITE_RESUMO);
  const ultimoEspaco = cortado.lastIndexOf(" ");
  return `${cortado.slice(0, ultimoEspaco > 0 ? ultimoEspaco : LIMITE_RESUMO).trimEnd()}…`;
}

export function HeroesPage() {
  const herois = useData("/data/herois.json", heroisSchema);
  const [texto, setTexto] = useState("");
  if (herois.estado === "carregando") return <p>Carregando…</p>;
  if (herois.estado === "indisponivel") return <Indisponivel motivo={herois.motivo} />;
  const encontrados = filtrarHerois(herois.dados, texto);
  return (
    <section className="herois">
      <div className="rotas-topo"><span className="sobretitulo">Guias</span><h1>Heróis</h1></div>
      <p className="herois-cobertura">Guias completos para {herois.dados.length} heróis (mais em produção).</p>
      <input type="search" aria-label="Filtrar heróis" placeholder="Filtrar heróis" value={texto} onChange={(e) => setTexto(e.target.value)} />
      <p aria-live="polite" className="herois-contagem">{encontrados.length} {encontrados.length === 1 ? "herói" : "heróis"}</p>
      {encontrados.length === 0 ? (
        <p className="rotas-vazio">Nenhum herói encontrado para “{texto}”. Hoje temos guia para {herois.dados.length} heróis, veja a lista completa limpando o filtro.</p>
      ) : (
        <ul className="grade-herois">
          {encontrados.map((h) => (
            <li key={h.id}>
              <Link to={`/herois/${h.id}`}>
                <img className="retrato" src={urlDoRetrato(h.id)} alt="" width={64} height={36} loading="lazy" />
                <span className="heroi-texto">
                  <strong>{h.nome}</strong>
                  {h.tem_por_minuto && <span className="selo selo-destaque">minuto a minuto</span>}
                  <span>{resumoCurto(h.resumo)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
