import { useState } from "react";
import { Link } from "react-router";
import { Indisponivel, useData } from "../data/useData";
import { CAMINHO_INDICE, indiceAtlasSchema, type Eixo, type IndiceAtlas, type TimeNoIndice } from "./schemas";

export function SeloAmostra({ nivel }: { nivel: TimeNoIndice["amostra"] }) {
  if (nivel !== "low") return null;
  return <span className="selo selo-amostra-baixa" title="Poucas partidas: confiança reduzida">LOW SAMPLE</span>;
}

export function TimesPage() {
  const indice = useData(CAMINHO_INDICE, indiceAtlasSchema);
  if (indice.estado === "carregando") return <p>Carregando times…</p>;
  if (indice.estado === "indisponivel") return <section className="atlas"><Indisponivel motivo={indice.motivo} /></section>;
  const { times, eixos, periodo, patch, gerado_em } = indice.dados;
  return (
    <section className="atlas">
      <header className="rotas-topo">
        <span className="sobretitulo">Atlas operacional Tier 1</span>
        <h1>Times</h1>
        <p className="atlas-sub">Período {periodo} · patch {patch} · gerado em {gerado_em}. Clique num time para ver o mapa dele.</p>
      </header>
      {times.length === 0
        ? <p className="atlas-sub">O índice ainda não tem times.</p>
        : <ul className="atlas-grade">{times.map((t) => <CartaoTime key={t.id} time={t} />)}</ul>}
      <MapaDeEstilos indice={indice.dados} eixos={eixos} />
    </section>
  );
}

function CartaoTime({ time }: { time: TimeNoIndice }) {
  return (
    <li>
      <Link to={`/times/${time.id}`} className="atlas-cartao">
        <span className="atlas-tag">{time.tag}</span>
        <strong>{time.nome}</strong>
        <span className="atlas-estilo">{time.estilo}</span>
        <span className="atlas-amostra numero">{time.partidas} partidas · {time.replays} replays <SeloAmostra nivel={time.amostra} /></span>
      </Link>
    </li>
  );
}

const FOLGA = 0.08;

// Cada eixo é esticado do menor ao maior valor entre os times, para os pontos ocuparem o quadro.
function posicaoNoEixo(valor: number, todos: readonly number[]): number {
  const minimo = Math.min(...todos);
  const maximo = Math.max(...todos);
  if (maximo === minimo) return 0.5;
  return FOLGA + ((valor - minimo) / (maximo - minimo)) * (1 - 2 * FOLGA);
}

function MapaDeEstilos({ indice, eixos }: { indice: IndiceAtlas; eixos: Eixo[] }) {
  const [idX, setIdX] = useState(eixos[0]?.id ?? "");
  const [idY, setIdY] = useState(eixos[1]?.id ?? "");
  if (eixos.length < 2) return <p className="atlas-sub">O mapa de estilos precisa de dois eixos no índice; hoje há {eixos.length}.</p>;
  const eixoX = eixos.find((e) => e.id === idX);
  const eixoY = eixos.find((e) => e.id === idY);
  const comValores = indice.times.flatMap((t) => {
    const x = t.eixos[idX];
    const y = t.eixos[idY];
    return x === undefined || y === undefined ? [] : [{ time: t, x, y }];
  });
  const xs = comValores.map((p) => p.x);
  const ys = comValores.map((p) => p.y);
  return (
    <section className="atlas-estilos" aria-labelledby="titulo-estilos">
      <h2 id="titulo-estilos">Mapa de estilos</h2>
      <div className="atlas-eixos">
        <SeletorDeEixo rotulo="Eixo horizontal" eixos={eixos} valor={idX} onMudar={setIdX} />
        <SeletorDeEixo rotulo="Eixo vertical" eixos={eixos} valor={idY} onMudar={setIdY} />
      </div>
      <div className="atlas-plano" role="group" aria-label={`Times por ${eixoX?.rotulo ?? idX} e ${eixoY?.rotulo ?? idY}`}>
        <span className="atlas-plano-eixo atlas-plano-x">{eixoX?.rotulo} →</span>
        <span className="atlas-plano-eixo atlas-plano-y">{eixoY?.rotulo} →</span>
        {comValores.map(({ time, x, y }) => (
          <Link key={time.id} to={`/times/${time.id}`} className="atlas-ponto" title={`${time.nome}: ${x} × ${y}`}
            style={{ left: `${posicaoNoEixo(x, xs) * 100}%`, top: `${(1 - posicaoNoEixo(y, ys)) * 100}%` }}>
            {time.tag}
          </Link>
        ))}
      </div>
      <dl className="atlas-legenda-eixos">
        {[eixoX, eixoY].map((e) => e && <div key={e.id}><dt>{e.rotulo}</dt><dd>{e.explicacao}</dd></div>)}
      </dl>
    </section>
  );
}

type SeletorProps = { rotulo: string; eixos: Eixo[]; valor: string; onMudar: (id: string) => void };

const SeletorDeEixo = ({ rotulo, eixos, valor, onMudar }: SeletorProps) => (
  <label className="campo">
    {rotulo}
    <select value={valor} onChange={(e) => onMudar(e.target.value)}>
      {eixos.map((e) => <option key={e.id} value={e.id}>{e.rotulo}</option>)}
    </select>
  </label>
);
