import { tempoDaPartida } from "../../live/partida/detalhe";
import type { Achado, Peso } from "../modelo";

const ROTULO_DO_PESO: Readonly<Record<Peso, string>> = { pesou_muito: "pesou muito", pesou: "pesou", leve: "leve" };

export function AchadoCard({ achado }: { achado: Achado }) {
  return (
    <li className={`achado achado-${achado.tipo}`}>
      <header className="achado-cabeca">
        <span className="achado-tipo">{achado.tipo === "erro" ? "Erro" : achado.tipo === "acerto" ? "Acerto" : "Contexto"}</span>
        {achado.minuto !== null && <span className="achado-minuto">{tempoDaPartida(Math.round(achado.minuto * 60))}</span>}
        <span className={`achado-peso achado-peso-${achado.peso}`}>{ROTULO_DO_PESO[achado.peso]}</span>
      </header>
      <p className="achado-titulo">{achado.titulo}</p>
      <p className="achado-linha"><strong>O que aconteceu:</strong> {achado.oQueAconteceu}</p>
      {achado.oQueFazer && <p className="achado-linha"><strong>O que fazer no lugar:</strong> {achado.oQueFazer}</p>}
      <p className="achado-linha"><strong>Por quê:</strong> {achado.porque}</p>
      {achado.evidencias.numeros && (
        <dl className="achado-numeros">
          {Object.entries(achado.evidencias.numeros).map(([chave, valor]) => (
            <div key={chave}><dt>{chave}</dt><dd>{typeof valor === "number" ? valor.toLocaleString("pt-BR", { maximumFractionDigits: 1 }) : valor}</dd></div>
          ))}
        </dl>
      )}
      <p className="achado-fontes">Fonte: {achado.fontes.join("; ")}</p>
    </li>
  );
}
