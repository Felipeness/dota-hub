import { useState } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link, useParams } from "react-router";
import { Indisponivel, useData } from "../data/useData";
import { MapView } from "../map/MapView";
import {
  CAMADAS, JANELAS, SETAS_POR_PADRAO, TODAS_AS_INTENCOES, desenhosDoMapa, intencoesDosWards, itensDoMapa, linhasDoPreparo, smokesDaJanela,
  type Camada, type Filtro, type FiltroJanela, type ItemDoMapa, type Preparo,
} from "./camadas";
import { ComoVencer } from "./ComoVencer";
import { LeituraDoMapa } from "./LeituraDoMapa";
import { chavesSchema, timeAtlasSchema, type Confianca, type Secao, type TimeAtlas } from "./schemas";
import { ordenarSecoes } from "./secoes";
import { SeloAmostra, SeloFronteira } from "./TimesPage";

const ROTULO_CAMADA = {
  calor: "Calor", zonas: "Zonas", wards: "Wards", smokes: "Smokes", objetivos: "Objetivos", lutas: "Lutas", farm: "Farm pos 1 e 2",
} as const satisfies Record<Camada, string>;
const ROTULO_CONFIANCA = { alta: "Confiança alta", media: "Confiança média", baixa: "Confiança baixa" } as const satisfies Record<Confianca, string>;
// Ordem do pedido (seção 35); chave nova no arquivo aparece depois, com o nome cru.
const ROTULO_GAMEPLAN: Readonly<Record<string, string>> = {
  draft: "Draft", laning: "Laning", economia: "Economia", mapa: "Mapa", visao: "Visão",
  smoke: "Smoke", objetivos: "Objetivos", lutas: "Lutas", win_condition: "Win condition",
};
const INICIO_PREPARO_S = -180;

// Títulos do Markdown descem dois níveis (a seção já é h2) e tabela ganha rolagem própria em vez de alargar a página.
const MARKDOWN: Components = {
  h1: ({ node: _node, ...props }) => <h3 {...props} />,
  h2: ({ node: _node, ...props }) => <h4 {...props} />,
  h3: ({ node: _node, ...props }) => <h5 {...props} />,
  table: ({ node: _node, ...props }) => <div className="atlas-tabela" role="region" aria-label="Tabela" tabIndex={0}><table {...props} /></div>,
};

type Vista = "2.5d" | "plano";

export function TimeAtlasPage() {
  const { id = "" } = useParams();
  const time = useData(`/data/times_atlas/${encodeURIComponent(id)}.json`, timeAtlasSchema);
  if (time.estado === "carregando") return <p>Carregando o time…</p>;
  if (time.estado === "indisponivel") {
    return (
      <section className="atlas">
        <Link to="/times" className="atlas-voltar">← Times</Link>
        <Indisponivel motivo={time.motivo} />
      </section>
    );
  }
  return <AtlasDoTime key={time.dados.id} time={time.dados} />;
}

function AtlasDoTime({ time }: { time: TimeAtlas }) {
  // Abre com uma camada só: Smokes é a que mais conta do time; as outras entram quando a pessoa pede.
  const [camadas, setCamadas] = useState<ReadonlySet<Camada>>(new Set(["smokes"]));
  const [todasAsSetas, setTodasAsSetas] = useState(false);
  const [janela, setJanela] = useState<FiltroJanela>("todas");
  const [intencao, setIntencao] = useState(TODAS_AS_INTENCOES);
  const [aberto, setAberto] = useState<string | null>(null);
  const [vista, setVista] = useState<Vista>("2.5d");
  const filtro: Filtro = { camadas, janela, intencao, maximoDeSetas: todasAsSetas ? null : SETAS_POR_PADRAO };
  const totalDeSmokes = smokesDaJanela(time.mapa, janela).length;
  const itens = itensDoMapa(time.mapa, filtro);
  const item = itens.find((i) => i.id === aberto) ?? null;
  const alternar = (camada: Camada) => setCamadas((atual) => {
    const proximo = new Set(atual);
    if (!proximo.delete(camada)) proximo.add(camada);
    return proximo;
  });
  const { amostra } = time;
  return (
    <section className="atlas atlas-time">
      <header className="atlas-cabecalho">
        <Link to="/times" className="atlas-voltar">← Times</Link>
        <span className="sobretitulo">{time.tag} · atlas operacional</span>
        <h1>{time.nome} <SeloAmostra nivel={amostra.nivel} /> <SeloFronteira classificacao={amostra.classificacao} /></h1>
        <p className="atlas-sub numero">{amostra.partidas} partidas · {amostra.replays} replays · {amostra.vitorias} vitórias</p>
        {amostra.nota && <p className="atlas-nota">{amostra.nota}</p>}
      </header>
      <div className="atlas-corpo">
        <div className="atlas-mapa-coluna">
          <div className="atlas-controles" role="group" aria-label="Camadas do mapa do time">
            <div className="pilulas">
              {CAMADAS.map((c) => (
                <button key={c} className="pilula" aria-pressed={camadas.has(c)} onClick={() => alternar(c)}>{ROTULO_CAMADA[c]}</button>
              ))}
            </div>
            <div className="atlas-janelas" role="group" aria-label="Janela de tempo em minutos">
              <span aria-hidden="true">min</span>
              {(["todas", ...JANELAS] as const).map((j) => (
                <button key={j} aria-pressed={janela === j} onClick={() => setJanela(j)}>{j === "todas" ? "Todas" : j}</button>
              ))}
            </div>
            {camadas.has("smokes") && totalDeSmokes > SETAS_POR_PADRAO && (
              <button className="atlas-setas" aria-pressed={todasAsSetas} onClick={() => setTodasAsSetas((todas) => !todas)}>
                {todasAsSetas ? `Só as ${SETAS_POR_PADRAO} setas mais repetidas` : `Mostrar todas as ${totalDeSmokes} setas`}
              </button>
            )}
            {camadas.has("wards") && (
              <label className="atlas-intencao">
                Intenção dos wards
                <select value={intencao} onChange={(e) => setIntencao(e.target.value)}>
                  <option value={TODAS_AS_INTENCOES}>Todas</option>
                  {intencoesDosWards(time.mapa).map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </label>
            )}
          </div>
          <div className="atlas-mapa">
            <MapView objetivos={[]} desenhos={desenhosDoMapa(time.mapa, filtro, aberto)} selecionado={aberto}
              onSelecionar={(novo) => setAberto((atual) => (atual === novo ? null : novo))} forcarPlano={vista === "plano"}>
              <div className="alternador atlas-vista" role="group" aria-label="Vista">
                <button aria-pressed={vista === "2.5d"} onClick={() => setVista("2.5d")}>2.5D</button>
                <button aria-pressed={vista === "plano"} onClick={() => setVista("plano")}>Plano</button>
              </div>
            </MapView>
            {item
              ? <PainelDoItem item={item} onFechar={() => setAberto(null)} />
              : <p className="atlas-dica">{itens.length} marcadores nesta janela. Clique num deles para ler o padrão.</p>}
          </div>
          <LeituraDoMapa mapa={time.mapa} camadas={camadas} janela={janela} />
        </div>
        <div className="atlas-texto">
          <ChavesDoTime id={time.id} nome={time.nome} />
          <p className="abertura">{time.resumo}</p>
          <ComoJogarContra gameplan={time.gameplan_contra} />
          {ordenarSecoes(time.secoes).map((bloco) => (bloco.tipo === "assinatura"
            ? <AssinaturaTemporal key="assinatura" assinatura={time.assinatura_temporal} />
            : <SecaoDoTime key={bloco.secao.id} secao={bloco.secao} />))}
          {time.roster.length > 0 && <section className="atlas-secao">
            <h2>Roster</h2>
            <ul className="atlas-roster">{time.roster.toSorted((a, b) => a.pos - b.pos).map((j) => (
              <li key={j.account_id}><span className="numero">pos {j.pos}</span> {j.nick}</li>
            ))}</ul>
          </section>}
        </div>
      </div>
    </section>
  );
}

function PainelDoItem({ item, onFechar }: { item: ItemDoMapa; onFechar: () => void }) {
  return (
    <aside className="atlas-painel" aria-label={item.titulo}>
      <div className="painel-topo">
        <div>
          <span className="sobretitulo">{ROTULO_CAMADA[item.camada]}</span>
          <h2>{item.titulo}</h2>
        </div>
        <button className="botao-icone" aria-label="Fechar" onClick={onFechar}>×</button>
      </div>
      <dl className="grade-numeros grade-3">
        {item.numeros.map(([rotulo, valor]) => <div key={rotulo}><dt>{rotulo}</dt><dd>{valor}</dd></div>)}
      </dl>
      {item.preparo && <LinhaDoPreparo preparo={item.preparo} />}
      <p>{item.texto}</p>
    </aside>
  );
}

// Escala fixa de T-180 s até T=0; um passo mais antigo encosta no começo da barra.
const posicaoNoPreparo = (t: number) => `${Math.min(100, Math.max(0, (1 - t / INICIO_PREPARO_S) * 100))}%`;

function LinhaDoPreparo({ preparo }: { preparo: readonly Preparo[] }) {
  return (
    <figure className="atlas-preparo">
      <figcaption>Preparo, de T-180 s até o objetivo</figcaption>
      <div className="atlas-preparo-barra" aria-hidden="true">
        {preparo.map((p, k) => <span key={k} className="atlas-preparo-ponto" style={{ left: posicaoNoPreparo(p.t_rel_s) }} />)}
        <span className="atlas-preparo-fim" />
      </div>
      <ol className="linha-do-tempo">
        {linhasDoPreparo(preparo).map(({ t, texto }) => <li key={t}><span className="tempo">{t === 0 ? "T=0" : `T${t}s`}</span><strong>{texto}</strong></li>)}
      </ol>
    </figure>
  );
}

function ComoJogarContra({ gameplan }: { gameplan: TimeAtlas["gameplan_contra"] }) {
  const conhecidas = Object.keys(ROTULO_GAMEPLAN).filter((k) => gameplan[k]);
  const novas = Object.keys(gameplan).filter((k) => !(k in ROTULO_GAMEPLAN));
  if (conhecidas.length + novas.length === 0) return null;
  return (
    <section className="atlas-contra" aria-labelledby="titulo-contra">
      <h2 id="titulo-contra">Como jogar contra</h2>
      <dl>
        {[...conhecidas, ...novas].map((k) => <div key={k}><dt>{ROTULO_GAMEPLAN[k] ?? k.replaceAll("_", " ")}</dt><dd>{gameplan[k]}</dd></div>)}
      </dl>
    </section>
  );
}

// As chaves vêm num arquivo à parte; sem ele a página segue sem o bloco, com o motivo à vista.
function ChavesDoTime({ id, nome }: { id: string; nome: string }) {
  const chaves = useData(`/data/times_atlas/${encodeURIComponent(id)}.chaves.json`, chavesSchema);
  if (chaves.estado === "carregando") return null;
  if (chaves.estado === "indisponivel") return <p className="chave-ausente">Como vencer: {chaves.motivo}</p>;
  return <ComoVencer chaves={chaves.dados} nome={nome} />;
}

function SecaoDoTime({ secao }: { secao: Secao }) {
  return (
    <section className="atlas-secao" aria-labelledby={`secao-${secao.id}`}>
      <div className="atlas-secao-topo">
        <h2 id={`secao-${secao.id}`}>{secao.titulo}</h2>
        <span className={`selo selo-confianca-${secao.confianca}`}>{ROTULO_CONFIANCA[secao.confianca]}</span>
      </div>
      <div className="painel-texto atlas-md"><ReactMarkdown remarkPlugins={[remarkGfm]} components={MARKDOWN}>{secao.texto_md}</ReactMarkdown></div>
    </section>
  );
}

function AssinaturaTemporal({ assinatura }: { assinatura: TimeAtlas["assinatura_temporal"] }) {
  if (assinatura.length === 0) return null;
  return (
    <section className="atlas-secao" aria-labelledby="titulo-assinatura">
      <h2 id="titulo-assinatura">Assinatura temporal</h2>
      <ol className="linha-do-tempo">
        {assinatura.map((a) => <li key={a.janela}><span className="tempo">{a.janela}</span><p>{a.texto}</p></li>)}
      </ol>
    </section>
  );
}
