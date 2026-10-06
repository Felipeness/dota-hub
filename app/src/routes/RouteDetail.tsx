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
  const desvios: Desvio[] = [...rota.interrupcao, ...rota.se];
  return (
    <article className="rota">
      <div className="rota-principal">
        <div className="pilulas">
          <span className="selo selo-destaque">{rota.id}</span>
          <span className="selo">{rota.origem === "real" ? `ROTA REAL · replay ${rota.replay}` : "ROTA RECOMENDADA"}</span>
        </div>
        <h2>{rota.pergunta}</h2>
        <p className="rota-titulo">{rota.titulo}</p>
        <div className="rota-mapa">
          <MapView objetivos={objetivos} rota={rota} selecionado={selecionado} onSelecionar={setSelecionado} />
          {rota.proxima.length > 0 && (
            <nav aria-label="Próximas rotas" className="proximas">
              {rota.proxima.map((id) => <button key={id} className="selo-proxima" onClick={() => onIrPara(id)}>PRÓXIMA → {id}</button>)}
            </nav>
          )}
        </div>
      </div>
      <aside className="rota-lateral">
        <FaixaEstado estado={rota.estado} />
        <ListaPassos rota={rota} />
        <SeOMapaMudar itens={desvios} onIrPara={onIrPara} />
        {rota.porque && <p className="porque">{rota.porque}</p>}
      </aside>
    </article>
  );
}

function FaixaEstado({ estado }: { estado: Rota["estado"] }) {
  if (!estado) return null;
  const itens = CAMPOS_ESTADO.filter(([campo]) => estado[campo] != null);
  return (
    <dl className="grade-numeros grade-3">
      {itens.map(([campo, rotulo]) => (
        <div key={campo}><dt>{rotulo}</dt><dd>{String(estado[campo])}</dd></div>
      ))}
    </dl>
  );
}

function ListaPassos({ rota }: { rota: Rota }) {
  return (
    <ol className="passos" aria-label="Passos da rota">
      {rota.passos.map((p) => (
        <li key={p.n}>
          <span className={`passo passo-${p.risco}`}>{p.n}</span>
          <span className="numero">{p.minuto}</span>
          <span><strong>{p.rotulo}</strong> · {p.acao}</span>
        </li>
      ))}
      {rota.fuga && <li className="fuga"><span className="passo passo-fuga">↩</span><span /><span><strong>{rota.fuga.rotulo}</strong> · a partir do passo {rota.fuga.de_passo}</span></li>}
    </ol>
  );
}

function SeOMapaMudar({ itens, onIrPara }: { itens: Desvio[]; onIrPara: (id: string) => void }) {
  if (itens.length === 0) return null;
  return (
    <section className="caixa-alerta" aria-label="Se o mapa mudar">
      <h3 className="sobretitulo">Se o mapa mudar</h3>
      <ul>
        {itens.map(({ condicao, acao, rota: destino }) => (
          <li key={condicao}>
            {condicao}{acao && ` → ${acao}`}
            {destino && <> · <button className="link" onClick={() => onIrPara(destino)}>{destino}</button></>}
          </li>
        ))}
      </ul>
    </section>
  );
}
