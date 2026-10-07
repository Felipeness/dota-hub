import { useState, type CSSProperties } from "react";
import { Link } from "react-router";
import { Indisponivel, useData } from "../data/useData";
import { CAMINHO_INDICE, indiceAtlasSchema, type Classificacao, type Cluster, type Eixo, type IndiceAtlas, type TimeNoIndice } from "./schemas";

export function SeloAmostra({ nivel }: { nivel: TimeNoIndice["amostra"] }) {
  if (nivel !== "low") return null;
  return <span className="selo selo-amostra-baixa" title="Poucas partidas: confiança reduzida">LOW SAMPLE</span>;
}

export function SeloFronteira({ classificacao }: { classificacao: Classificacao }) {
  if (classificacao !== "fronteira") return null;
  return <span className="selo selo-fronteira" title="Entre o Tier 1 e o Tier 2: conclusões com um nível a menos de confiança">fronteira</span>;
}

// Cores dos clusters na ordem do índice; passou de cinco, a paleta recomeça.
const CORES_CLUSTER = ["info", "radiant", "destaque", "neutro", "dire"] as const;
type EstiloCluster = CSSProperties & Record<"--cor-cluster", string>;

function corDoCluster(clusters: readonly Cluster[], id: string | undefined): EstiloCluster | undefined {
  const posicao = clusters.findIndex((c) => c.id === id);
  if (posicao < 0) return undefined;
  return { "--cor-cluster": `var(--cor-${CORES_CLUSTER[posicao % CORES_CLUSTER.length] ?? "destaque"})` };
}

export function TimesPage() {
  const indice = useData(CAMINHO_INDICE, indiceAtlasSchema);
  if (indice.estado === "carregando") return <p>Carregando times…</p>;
  if (indice.estado === "indisponivel") return <section className="atlas"><Indisponivel motivo={indice.motivo} /></section>;
  const { times, eixos, clusters, periodo, patch, gerado_em } = indice.dados;
  return (
    <section className="atlas">
      <header className="rotas-topo">
        <span className="sobretitulo">Atlas operacional Tier 1</span>
        <h1>Times</h1>
        <p className="atlas-sub">Período {periodo} · patch {patch} · gerado em {gerado_em}. Clique num time para ver o mapa dele.</p>
      </header>
      {times.length === 0
        ? <p className="atlas-sub">O índice ainda não tem times.</p>
        : <ul className="atlas-grade">{times.map((t) => <CartaoTime key={t.id} time={t} cor={corDoCluster(clusters, t.cluster)} />)}</ul>}
      <MapaDeEstilos indice={indice.dados} eixos={eixos} />
    </section>
  );
}

function CartaoTime({ time, cor }: { time: TimeNoIndice; cor: EstiloCluster | undefined }) {
  return (
    <li>
      <Link to={`/times/${time.id}`} className="atlas-cartao" style={cor}>
        <span className="atlas-tag">{time.tag}</span>
        <strong>{time.nome}</strong>
        <span className="atlas-estilo">{time.estilo}</span>
        <span className="atlas-amostra numero">
          {time.partidas} partidas · {time.replays} replays <SeloAmostra nivel={time.amostra} /> <SeloFronteira classificacao={time.classificacao} />
        </span>
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
      {indice.clusters.length > 0 && (
        <ul className="atlas-clusters" aria-label="Clusters">
          {indice.clusters.map((c) => <li key={c.id} style={corDoCluster(indice.clusters, c.id)}><i />{c.id} {c.nome}</li>)}
        </ul>
      )}
      <div className="atlas-plano" role="group" aria-label={`Times por ${eixoX?.rotulo ?? idX} e ${eixoY?.rotulo ?? idY}`}>
        <PolosDoEixo eixo={eixoX} direcao="x" />
        <PolosDoEixo eixo={eixoY} direcao="y" />
        {comValores.map(({ time, x, y }) => (
          <Link key={time.id} to={`/times/${time.id}`} className={`atlas-ponto${time.classificacao === "fronteira" ? " atlas-ponto-fronteira" : ""}`}
            title={`${time.nome}: ${x} × ${y}${time.classificacao === "fronteira" ? " (fronteira)" : ""}`}
            style={{ ...corDoCluster(indice.clusters, time.cluster), left: `${posicaoNoEixo(x, xs) * 100}%`, top: `${(1 - posicaoNoEixo(y, ys)) * 100}%` }}>
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

// Com polos, cada ponta do eixo diz o que significa; sem eles, só o nome do eixo na ponta positiva.
function PolosDoEixo({ eixo, direcao }: { eixo: Eixo | undefined; direcao: "x" | "y" }) {
  if (!eixo) return null;
  const [antes, depois] = direcao === "x" ? ["←", "→"] : ["↓", "↑"];
  if (!eixo.polo_negativo || !eixo.polo_positivo) return <span className={`atlas-plano-eixo atlas-polo-${direcao}-mais`}>{eixo.rotulo} {depois}</span>;
  return (
    <>
      <span className={`atlas-plano-eixo atlas-polo-${direcao}-menos`}>{antes} {eixo.polo_negativo}</span>
      <span className={`atlas-plano-eixo atlas-polo-${direcao}-mais`}>{eixo.polo_positivo} {depois}</span>
    </>
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
