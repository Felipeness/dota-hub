import { useState } from "react";
import type { Objetivo, Rota } from "../data/schemas";
import { MapView } from "../map/MapView";

type Props = { rota: Rota; objetivos: Objetivo[]; onIrPara: (id: string) => void };
type Desvio = { condicao: string; acao?: string; rota?: string | null };

const CAMPOS_ESTADO = [
  ["minuto", "Minuto"],
  ["nivel", "Nível"],
  ["lane", "Lane"],
  ["mapa", "Mapa"],
] as const;

export function RouteDetail({ rota, objetivos, onIrPara }: Props) {
  const [selecionado, setSelecionado] = useState<string | null>(null);
  return (
    <article className="rota">
      <h2>{rota.pergunta}</h2>
      <p className="rota-titulo">{rota.id} · {rota.titulo}</p>
      {rota.origem === "real" && <p className="selo-real">ROTA REAL · replay {rota.replay}</p>}
      <FaixaEstado estado={rota.estado} />
      <MapView objetivos={objetivos} rota={rota} selecionado={selecionado} onSelecionar={setSelecionado} />
      <TabelaPassos rota={rota} />
      {rota.fuga && <p className="fuga">Fuga a partir do passo {rota.fuga.de_passo}: {rota.fuga.rotulo}</p>}
      <ListaDesvios titulo="Interrupções" itens={rota.interrupcao} onIrPara={onIrPara} />
      <ListaDesvios titulo="Se acontecer" itens={rota.se} onIrPara={onIrPara} />
      {rota.porque && <p className="porque">{rota.porque}</p>}
      {rota.proxima.length > 0 && (
        <nav aria-label="Próximas rotas">
          {rota.proxima.map((id) => <button key={id} onClick={() => onIrPara(id)}>Próxima: {id}</button>)}
        </nav>
      )}
    </article>
  );
}

function FaixaEstado({ estado }: { estado: Rota["estado"] }) {
  if (!estado) return null;
  const itens = CAMPOS_ESTADO.filter(([campo]) => estado[campo] != null);
  return (
    <dl className="faixa-estado">
      {itens.map(([campo, rotulo]) => (
        <div key={campo}><dt>{rotulo}</dt><dd>{String(estado[campo])}</dd></div>
      ))}
    </dl>
  );
}

function TabelaPassos({ rota }: { rota: Rota }) {
  return (
    <table className="passos">
      <thead><tr><th>#</th><th>Minuto</th><th>Onde</th><th>O que fazer</th></tr></thead>
      <tbody>
        {rota.passos.map((p) => (
          <tr key={p.n} className={`passo-${p.risco}`}>
            <td>{p.n}</td><td>{p.minuto}</td><td>{p.rotulo}</td><td>{p.acao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ListaDesvios({ titulo, itens, onIrPara }: { titulo: string; itens: Desvio[]; onIrPara: (id: string) => void }) {
  if (itens.length === 0) return null;
  return (
    <section>
      <h3>{titulo}</h3>
      <ul>
        {itens.map(({ condicao, acao, rota: destino }) => (
          <li key={condicao}>
            {condicao}{acao && `: ${acao}`}
            {destino && <> <button onClick={() => onIrPara(destino)}>{destino}</button></>}
          </li>
        ))}
      </ul>
    </section>
  );
}
