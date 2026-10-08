import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Confianca, Lanes } from "./schemas";

type Lane = Lanes["lanes"][number];

const ROTULO_LANE: Readonly<Record<string, string>> = { safe: "Safe lane", mid: "Mid", offlane: "Offlane" };
const ROTULO_CONFIANCA = { alta: "Confiança alta", media: "Confiança média", baixa: "Confiança baixa" } as const satisfies Record<Confianca, string>;
// "Listas curtas": as três primeiras linhas à vista, o resto num recolhido.
const ITENS_A_VISTA = 3;

const pct = (v: number) => `${Math.round(v * 100)}%`;
const pp = (v: number) => `${v > 0 ? "+" : ""}${v.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} pp`;
const iniciais = (nome: string) => nome.replace(/[^\p{L}\p{N}]/gu, "").slice(0, 2).toUpperCase();

// O app não tem foto de jogador; o "retrato" é um monograma com as iniciais do nick.
const RetratoDoJogador = ({ nome }: { nome: string }) => <span className="lane-avatar" aria-hidden="true">{iniciais(nome)}</span>;

function BarraDeVitoria({ rotulo, valor, n, classe }: { rotulo: string; valor: number; n: number; classe: string }) {
  return (
    <div className={`lane-barra ${classe}`}>
      <span>{rotulo}</span>
      <span className="lane-trilho"><i style={{ width: pct(valor) }} /></span>
      <span className="numero">{pct(valor)} <small>n={n}</small></span>
    </div>
  );
}

function ListaCurta({ titulo, itens }: { titulo: string; itens: readonly string[] }) {
  if (itens.length === 0) return null;
  const [visiveis, resto] = [itens.slice(0, ITENS_A_VISTA), itens.slice(ITENS_A_VISTA)];
  return (
    <div className="lane-lista">
      <h4>{titulo}</h4>
      <ul>{visiveis.map((item) => <li key={item}>{item}</li>)}</ul>
      {resto.length > 0 && (
        <details>
          <summary>mais {resto.length}</summary>
          <ul>{resto.map((item) => <li key={item}>{item}</li>)}</ul>
        </details>
      )}
    </div>
  );
}

function CartaoDaLane({ lane }: { lane: Lane }) {
  const titulo = `${ROTULO_LANE[lane.lane] ?? lane.lane} do ${lane.jogador}`;
  return (
    <li className={`lane-cartao${lane.jogador_atual ? "" : " lane-historico"}`}>
      <section aria-label={titulo}>
        <header className="lane-topo">
          <RetratoDoJogador nome={lane.jogador} />
          <div>
            <h3>{titulo}</h3>
            <span className="lane-selos">
              {!lane.jogador_atual && <span className="selo">histórico</span>}
              <span className={`selo selo-confianca-${lane.confianca}`}>{ROTULO_CONFIANCA[lane.confianca]}</span>
            </span>
          </div>
        </header>
        <div className="lane-barras">
          <BarraDeVitoria rotulo="Lane ganha" valor={lane.wr_ganha} n={lane.n_ganha} classe="lane-ganha" />
          <BarraDeVitoria rotulo="Lane perdida" valor={lane.wr_perdida} n={lane.n_perdida} classe="lane-perdida" />
          {lane.liga_wr_perdida !== null && lane.liga_wr_perdida !== undefined && (
            <p className="lane-liga">Liga com a lane perdida: {pct(lane.liga_wr_perdida)}{lane.ic ? ` · IC 95% deles ${pct(lane.ic[0])} a ${pct(lane.ic[1])}` : ""}</p>
          )}
          {lane.efeito_ajustado_pp !== null && lane.efeito_ajustado_pp !== undefined && (
            <p className="lane-liga">Perder essa lane custa cerca de {pp(lane.efeito_ajustado_pp)} de chance de vitória, isolando outros fatores.</p>
          )}
        </div>
        <p className="lane-contra"><strong>O que fazer contra:</strong> {lane.o_que_fazer_contra}</p>
        <ListaCurta titulo="O que acontece" itens={lane.o_que_acontece} />
        <ListaCurta titulo="Como eles se recuperam" itens={lane.recuperacao} />
        {lane.matchups.length > 0 && (
          <div className="lane-lista">
            <h4>Matchups que se repetem</h4>
            <ul className="lane-matchups">{lane.matchups.map((m) => <li key={m}>{m}</li>)}</ul>
          </div>
        )}
        {lane.texto_md && (
          <details className="lane-detalhe">
            <summary>Leitura completa</summary>
            <div className="painel-texto atlas-md"><ReactMarkdown remarkPlugins={[remarkGfm]}>{lane.texto_md}</ReactMarkdown></div>
          </details>
        )}
      </section>
    </li>
  );
}

export function LanesPerdidas({ lanes, nome }: { lanes: Lanes; nome: string }) {
  if (lanes.lanes.length === 0) return null;
  return (
    <section className="lanes" aria-labelledby="titulo-lanes">
      <h2 id="titulo-lanes">Quando a {nome} perde uma lane</h2>
      <ul className="lanes-lista">{lanes.lanes.map((l) => <CartaoDaLane key={`${l.lane}:${l.jogador}`} lane={l} />)}</ul>
    </section>
  );
}
