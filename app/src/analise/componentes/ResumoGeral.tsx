import type { LinhaDoResumo } from "../resumoGeral";

/** Topo da análise: o erro mais pesado de cada área, antes dos lances decisivos. */
export function ResumoGeral({ linhas }: { linhas: readonly LinhaDoResumo[] }) {
  if (linhas.length === 0) return null;
  return (
    <section className="resumo-geral" aria-labelledby="titulo-resumo-geral">
      <h2 id="titulo-resumo-geral">O que você devia ter feito no geral</h2>
      <ul>
        {linhas.map((l) => (
          <li key={l.area} className={`resumo-geral-${l.area}`}>
            <span className="resumo-geral-area">{l.rotulo}</span>
            <span>{l.texto}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
