import { useState } from "react";
import { Link } from "react-router";
import type { Objetivo, Passo, Rota } from "../data/schemas";
import { TextoComTermos } from "../glossary/Termo";
import { MapView } from "../map/MapView";
import { ETIQUETA_DA_VIA } from "../map/selos";

type Props = { rota: Rota; objetivos: Objetivo[]; titulos: Map<string, string>; onIrPara: (id: string) => void };
type Desvio = { condicao: string; acao?: string; rota?: string | null };

const CAMPOS_ESTADO = [
  ["minuto", "Minuto"],
  ["nivel", "Nível"],
  ["lane", "Lane"],
  ["cenario", "Situação"],
  ["mapa", "Mapa"],
] as const;

const ROTULO_DO_RISCO: Record<Passo["risco"], string> = { seguro: "Seguro", moderado: "Moderado", perigoso: "Perigoso", objetivo: "Objetivo" };

export function RouteDetail({ rota, objetivos, titulos, onIrPara }: Props) {
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const desvios: Desvio[] = [...rota.interrupcao, ...rota.se];
  return (
    <article className="rota">
      <div className="rota-principal">
        <div className="pilulas">
          <span className="selo selo-destaque">{rota.id}</span>
          <span className="selo"><TextoComTermos texto={rota.origem === "real" ? `ROTA REAL · replay ${rota.replay}` : "ROTA RECOMENDADA"} /></span>
          {rota.heroi ? <Link to={`/herois/${rota.heroi}`} className="selo">{rota.secao}</Link> : rota.secao && <span className="selo">{rota.secao}</span>}
        </div>
        <h2><TextoComTermos texto={rota.pergunta} /></h2>
        <p className="rota-titulo">{rota.titulo}</p>
        <div className="rota-mapa">
          <MapView objetivos={objetivos} rota={rota} selecionado={selecionado} onSelecionar={setSelecionado} />
          <Proximas ids={rota.proxima} titulos={titulos} onIrPara={onIrPara} />
        </div>
      </div>
      <aside className="rota-lateral">
        <FaixaEstado estado={rota.estado} />
        <ListaPassos passos={rota.passos} fuga={rota.fuga} />
        <SeOMapaMudar itens={desvios} titulos={titulos} onIrPara={onIrPara} />
        {rota.porque && (
          <div className="porque">
            <h3 className="sobretitulo">Por quê</h3>
            <p><TextoComTermos texto={rota.porque} /></p>
          </div>
        )}
      </aside>
    </article>
  );
}

// Como no PDF: a primeira é a padrão (a que vai no mapa); as demais são alternativas, menores.
// O código (ex: AL-D-02) não diz nada ao jogador: o título curto da rota de destino vai no lugar, com o código como tooltip.
function Proximas({ ids, titulos, onIrPara }: { ids: readonly string[]; titulos: Map<string, string>; onIrPara: (id: string) => void }) {
  const [padrao, ...outras] = ids;
  if (!padrao) return null;
  return (
    <nav aria-label="Próximas rotas" className="proximas">
      <button className="selo-proxima" title={padrao} onClick={() => onIrPara(padrao)}>PRÓXIMA → {titulos.get(padrao) ?? padrao}</button>
      {outras.length > 0 && (
        <div className="proximas-outras">
          <span>outras:</span>
          {outras.map((id) => <button key={id} className="link" title={id} onClick={() => onIrPara(id)}>{titulos.get(id) ?? id}</button>)}
        </div>
      )}
    </nav>
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

export function ListaPassos({ passos, fuga = null }: { passos: readonly Passo[]; fuga?: Rota["fuga"] }) {
  return (
    <>
      <ol className="passos" aria-label="Passos da rota">
        {passos.map((p) => (
          <li key={p.n}>
            <span className={`passo passo-${p.risco}`} title={ROTULO_DO_RISCO[p.risco]} aria-label={ROTULO_DO_RISCO[p.risco]}>{p.n}</span>
            <span className="numero">{p.minuto}</span>
            <span><strong>{p.via && <><TextoComTermos texto={ETIQUETA_DA_VIA[p.via]} /> </>}{p.rotulo}</strong> · <TextoComTermos texto={p.acao} /></span>
          </li>
        ))}
        {fuga && <li className="fuga"><span className="passo passo-fuga">↩</span><span /><span><strong>{fuga.rotulo}</strong> · a partir do passo {fuga.de_passo}</span></li>}
      </ol>
      <LegendaDoRisco />
    </>
  );
}

function LegendaDoRisco() {
  return (
    <ul className="legenda-risco">
      {Object.entries(ROTULO_DO_RISCO).map(([risco, rotulo]) => (
        <li key={risco}><i className={`passo-ponto passo-${risco}`} aria-hidden="true" />{rotulo}</li>
      ))}
    </ul>
  );
}

function SeOMapaMudar({ itens, titulos, onIrPara }: { itens: Desvio[]; titulos: Map<string, string>; onIrPara: (id: string) => void }) {
  if (itens.length === 0) return null;
  return (
    <section className="caixa-alerta" aria-label="Se o mapa mudar">
      <h3 className="sobretitulo">Se o mapa mudar</h3>
      <ul>
        {itens.map(({ condicao, acao, rota: destino }) => (
          <li key={condicao}>
            <TextoComTermos texto={acao ? `${condicao} → ${acao}` : condicao} />
            {destino && <> · <button className="link" title={destino} onClick={() => onIrPara(destino)}>{titulos.get(destino) ?? destino}</button></>}
          </li>
        ))}
      </ul>
    </section>
  );
}
