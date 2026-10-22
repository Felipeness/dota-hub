import { useState, type ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link, useParams, useSearchParams } from "react-router";
import { Indisponivel, useData, type EstadoDados } from "../data/useData";
import { TextoComTermos } from "../glossary/Termo";
import { MapView } from "../map/MapView";
import {
  CAMADAS, JANELAS, SETAS_POR_PADRAO, TODAS_AS_INTENCOES, desenhosDoMapa, intencoesDosWards, itensDoMapa, linhasDoPreparo, smokesDaJanela,
  type Camada, type Filtro, type FiltroJanela, type ItemDoMapa, type Preparo,
} from "./camadas";
import { CartaoContra } from "./CartaoContra";
import { ComoVencer } from "./ComoVencer";
import { LanesPerdidas } from "./LanesPerdidas";
import { MAPA_VAZIO, SeletorDeLado, escolhaDoLado, notaDoLado, useMapaDoLado, type EscolhaDeLado } from "./LadoDoMapa";
import { LeituraDoMapa } from "./LeituraDoMapa";
import { chavesSchema, lanesSchema, timeAtlasSchema, type Chaves, type Confianca, type Secao, type TimeAtlas } from "./schemas";
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
// Seção curta fica toda à vista; a partir daqui, só o primeiro parágrafo aparece e o resto some num "ver mais".
const LIMIAR_RESUMO_SECAO = 500;

// Corta no primeiro parágrafo em branco; sem um parágrafo curto por perto, corta na frase mais próxima do limiar.
function dividirSecao(md: string): { resumo: string; resto: string } | null {
  if (md.length <= LIMIAR_RESUMO_SECAO) return null;
  const paragrafo = md.indexOf("\n\n");
  if (paragrafo > 0 && paragrafo <= LIMIAR_RESUMO_SECAO * 2) return { resumo: md.slice(0, paragrafo), resto: md.slice(paragrafo) };
  const fimDaFrase = md.indexOf(". ", LIMIAR_RESUMO_SECAO);
  const corte = fimDaFrase > 0 && fimDaFrase <= LIMIAR_RESUMO_SECAO * 1.5 ? fimDaFrase + 1 : LIMIAR_RESUMO_SECAO;
  return { resumo: md.slice(0, corte), resto: md.slice(corte) };
}

// Parágrafo/item sem formatação aninhada (só texto corrido) ganha os termos marcados; com links/negrito dentro, fica como está.
const comTermosSeForTextoPuro = (children: ReactNode): ReactNode => (typeof children === "string" ? <TextoComTermos texto={children} /> : children);

// Títulos do Markdown descem dois níveis (a seção já é h2) e tabela ganha rolagem própria em vez de alargar a página.
const MARKDOWN: Components = {
  h1: ({ node: _node, ...props }) => <h3 {...props} />,
  h2: ({ node: _node, ...props }) => <h4 {...props} />,
  h3: ({ node: _node, ...props }) => <h5 {...props} />,
  table: ({ node: _node, ...props }) => <div className="atlas-tabela" role="region" aria-label="Tabela" tabIndex={0}><table {...props} /></div>,
  p: ({ node: _node, children, ...props }) => <p {...props}>{comTermosSeForTextoPuro(children)}</p>,
  li: ({ node: _node, children, ...props }) => <li {...props}>{comTermosSeForTextoPuro(children)}</li>,
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
  const [parametros, setParametros] = useSearchParams();
  const lado = escolhaDoLado(parametros.get("lado"));
  const mapaDoLado = useMapaDoLado(time.id, lado);
  const mapa = mapaDoLado === null ? time.mapa : mapaDoLado.estado === "ok" ? mapaDoLado.dados.mapa : MAPA_VAZIO;
  // Os ids dos marcadores são posições no arquivo: ao trocar de lado, o marcador aberto deixa de existir.
  const escolherLado = (novo: EscolhaDeLado) => {
    setAberto(null);
    setParametros((atual) => {
      const proximo = new URLSearchParams(atual);
      if (novo === "ambos") proximo.delete("lado");
      else proximo.set("lado", novo);
      return proximo;
    }, { replace: true });
  };
  const filtro: Filtro = { camadas, janela, intencao, maximoDeSetas: todasAsSetas ? null : SETAS_POR_PADRAO };
  const totalDeSmokes = smokesDaJanela(mapa, janela).length;
  const itens = itensDoMapa(mapa, filtro);
  const item = itens.find((i) => i.id === aberto) ?? null;
  const alternar = (camada: Camada) => setCamadas((atual) => {
    const proximo = new Set(atual);
    if (!proximo.delete(camada)) proximo.add(camada);
    return proximo;
  });
  const { amostra } = time;
  const chaves = useData(`/data/times_atlas/${encodeURIComponent(time.id)}.chaves.json`, chavesSchema);
  return (
    <section className="atlas atlas-time">
      <header className="atlas-cabecalho">
        <Link to="/times" className="atlas-voltar">← Times</Link>
        <span className="sobretitulo">{time.tag} · atlas operacional</span>
        <h1>{time.nome} <SeloAmostra nivel={amostra.nivel} /> <SeloFronteira classificacao={amostra.classificacao} /></h1>
        <p className="atlas-sub numero">{amostra.partidas} partidas · {amostra.replays} replays · {amostra.vitorias} vitórias</p>
        {amostra.nota && <p className="atlas-nota">{amostra.nota}</p>}
      </header>
      {chaves.estado === "ok" && <CartaoContra chaves={chaves.dados} nome={time.nome} />}
      <div className="atlas-corpo">
        <div className="atlas-mapa-coluna">
          <SeletorDeLado lado={lado} nota={notaDoLado(lado, mapaDoLado, amostra.replays)} onEscolher={escolherLado} />
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
                  {intencoesDosWards(mapa).map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </label>
            )}
          </div>
          <div className="atlas-mapa">
            <MapView objetivos={[]} desenhos={desenhosDoMapa(mapa, filtro, aberto)} selecionado={aberto}
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
          <LeituraDoMapa mapa={mapa} camadas={camadas} janela={janela} />
        </div>
        <div className="atlas-texto">
          <h2 id="detalhes" className="atlas-detalhes-titulo">Detalhes</h2>
          <ChavesDoTime chaves={chaves} nome={time.nome} />
          <LanesDoTime id={time.id} nome={time.nome} />
          <p className="abertura"><TextoComTermos texto={time.resumo} /></p>
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
        {item.numeros.map(([rotulo, valor]) => <div key={rotulo}><dt><TextoComTermos texto={rotulo} /></dt><dd>{valor}</dd></div>)}
      </dl>
      {item.preparo && <LinhaDoPreparo preparo={item.preparo} />}
      {item.texto && <p><TextoComTermos texto={item.texto} /></p>}
    </aside>
  );
}

// Escala fixa de T-180 s até T=0; um passo mais antigo encosta no começo da barra.
const posicaoNoPreparo = (t: number) => `${Math.min(100, Math.max(0, (1 - t / INICIO_PREPARO_S) * 100))}%`;

function LinhaDoPreparo({ preparo }: { preparo: readonly Preparo[] }) {
  return (
    <figure className="atlas-preparo">
      <figcaption><TextoComTermos texto="Preparo, de T-180s até o objetivo" /></figcaption>
      <div className="atlas-preparo-barra" aria-hidden="true">
        {preparo.map((p, k) => <span key={k} className="atlas-preparo-ponto" style={{ left: posicaoNoPreparo(p.t_rel_s) }} />)}
        <span className="atlas-preparo-fim" />
      </div>
      <ol className="linha-do-tempo">
        {linhasDoPreparo(preparo).map(({ t, texto }) => <li key={t}><span className="tempo">{t === 0 ? "T=0" : `T${t}s`}</span><strong><TextoComTermos texto={texto} /></strong></li>)}
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
        {[...conhecidas, ...novas].map((k) => (
          <div key={k}><dt><TextoComTermos texto={ROTULO_GAMEPLAN[k] ?? k.replaceAll("_", " ")} /></dt><dd><TextoComTermos texto={gameplan[k]} /></dd></div>
        ))}
      </dl>
    </section>
  );
}

// As chaves vêm num arquivo à parte; sem ele a página segue sem o bloco, com o motivo à vista.
function ChavesDoTime({ chaves, nome }: { chaves: EstadoDados<Chaves>; nome: string }) {
  if (chaves.estado === "carregando") return null;
  if (chaves.estado === "indisponivel") return <p className="chave-ausente">Como vencer: {chaves.motivo}</p>;
  return <ComoVencer chaves={chaves.dados} nome={nome} />;
}

// Lanes perdidas também vêm à parte; sem o arquivo a página diz o motivo, como nas chaves.
function LanesDoTime({ id, nome }: { id: string; nome: string }) {
  const lanes = useData(`/data/times_atlas/${encodeURIComponent(id)}.lanes.json`, lanesSchema);
  if (lanes.estado === "carregando") return null;
  if (lanes.estado === "indisponivel") return <p className="chave-ausente">Lanes perdidas: {lanes.motivo}</p>;
  return <LanesPerdidas lanes={lanes.dados} nome={nome} />;
}

function SecaoDoTime({ secao }: { secao: Secao }) {
  const divisao = dividirSecao(secao.texto_md);
  return (
    <section className="atlas-secao" aria-labelledby={`secao-${secao.id}`}>
      <div className="atlas-secao-topo">
        <h2 id={`secao-${secao.id}`}>{secao.titulo}</h2>
        <span className={`selo selo-confianca-${secao.confianca}`}>{ROTULO_CONFIANCA[secao.confianca]}</span>
      </div>
      <div className="painel-texto atlas-md"><ReactMarkdown remarkPlugins={[remarkGfm]} components={MARKDOWN}>{divisao ? divisao.resumo : secao.texto_md}</ReactMarkdown></div>
      {divisao && (
        <details className="atlas-detalhe">
          <summary>Leitura completa</summary>
          <div className="painel-texto atlas-md"><ReactMarkdown remarkPlugins={[remarkGfm]} components={MARKDOWN}>{divisao.resto}</ReactMarkdown></div>
        </details>
      )}
    </section>
  );
}

function AssinaturaTemporal({ assinatura }: { assinatura: TimeAtlas["assinatura_temporal"] }) {
  if (assinatura.length === 0) return null;
  return (
    <section className="atlas-secao" aria-labelledby="titulo-assinatura">
      <h2 id="titulo-assinatura">Assinatura temporal</h2>
      <ol className="linha-do-tempo">
        {assinatura.map((a) => <li key={a.janela}><span className="tempo">{a.janela}</span><p><TextoComTermos texto={a.texto} /></p></li>)}
      </ol>
    </section>
  );
}
