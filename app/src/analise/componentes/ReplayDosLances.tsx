// Player do minimapa: toca a partida até cada lance decisivo (rápido entre eles, devagar perto, pausa no lance),
// com a câmera fechando na região do lance e o card do lance embaixo, no mesmo relógio. Desenho em SVG sobre a
// imagem do mapa; nada de 3D aqui. Sem os trajetos do replay, mostra só o que o OpenDota tem.
import { useEffect, useState, type CSSProperties } from "react";
import type { Objetivo } from "../../data/schemas";
import type { Ponto } from "../../map/coords";
import { tempoDaPartida, type DetalheDaPartida } from "../../live/partida/detalhe";
import type { Lance } from "../lancesDecisivos";
import {
  MAPA_INTEIRO, RAIO_DE_VISAO, avancar, cameraPara, focoDoLance, lanceAtivoEm, quadroEm, rotuloDoLance, velocidadeEm,
  type Camera, type QuadroDoMapa, type Relogio, type SmokeNoMapa, type TrajetosDoMapa,
} from "../replayDosLances";
import { prefereMenosMovimento, useTextoProgressivo } from "./movimento";

const PASSO_MS = 100;
const ESTRUTURAS_NO_MAPA = new Set(["torre", "barracks", "ancient"]);

type Props = Readonly<{
  detalhe: DetalheDaPartida;
  lances: readonly Lance[];
  objetivos: readonly Objetivo[];
  trajetos: TrajetosDoMapa | null;
  /** Instante pedido de fora (marcador da linha do tempo, "ver no mapa"); muda a cada pedido. */
  pedido: Readonly<{ t: number; n: number }> | null;
}>;

/** SVG usa y para baixo; o mapa normalizado usa y para cima. */
const svg = ([x, y]: Ponto) => ({ x, y: 1 - y });

export function ReplayDosLances({ detalhe, lances, objetivos, trajetos, pedido }: Props) {
  const fim = detalhe.duracaoS;
  const [relogio, setRelogio] = useState<Relogio>({ t: lances[0] ? Math.max(0, lances[0].t - 40) : 0, tocando: false, pausaRestanteMs: 0, ultimoLance: null });

  useEffect(() => {
    if (!relogio.tocando) return;
    const intervalo = setInterval(() => setRelogio((r) => avancar(r, PASSO_MS, lances, fim)), PASSO_MS);
    return () => clearInterval(intervalo);
  }, [relogio.tocando, lances, fim]);

  useEffect(() => {
    if (pedido) setRelogio({ t: pedido.t, tocando: false, pausaRestanteMs: 0, ultimoLance: pedido.t });
  }, [pedido]);

  const t = Math.round(relogio.t);
  const eu = { lado: detalhe.lado, slot: detalhe.slot };
  const quadro = quadroEm(detalhe.panorama, t, eu, trajetos);
  const ativo = lanceAtivoEm(t, lances);
  const camera = ativo ? cameraPara(focoDoLance(ativo, detalhe.panorama, objetivos, eu, trajetos)) : MAPA_INTEIRO;
  const pausado = relogio.pausaRestanteMs > 0;
  const irPara = (novo: number) => setRelogio({ t: novo, tocando: false, pausaRestanteMs: 0, ultimoLance: null });
  const lanceVizinho = (sentido: 1 | -1) =>
    sentido === 1 ? lances.find((l) => l.t > t) : [...lances].reverse().find((l) => l.t < t);

  return (
    <div className="replay-lances">
      <div className="replay-palco">
        <MapaDoQuadro quadro={quadro} camera={camera} objetivos={objetivos} lado={detalhe.lado} />
        <FeedDeAbates quadro={quadro} />
        <div className="replay-relogio" aria-live="off">
          <span className="replay-relogio-tempo">{tempoDaPartida(t)}</span>
          {relogio.tocando && <span className="replay-velocidade">{pausado ? "❚❚" : `${velocidadeEm(t, lances)}x`}</span>}
        </div>
      </div>
      <div className="replay-controles">
        <button type="button" onClick={() => setRelogio((r) => ({ ...r, tocando: !r.tocando, pausaRestanteMs: 0 }))} aria-pressed={relogio.tocando}>
          {relogio.tocando ? "Pausar" : "Tocar"}
        </button>
        <button type="button" onClick={() => { const l = lanceVizinho(-1); if (l) irPara(l.t); }} disabled={!lanceVizinho(-1)}>Lance anterior</button>
        <button type="button" onClick={() => { const l = lanceVizinho(1); if (l) irPara(l.t); }} disabled={!lanceVizinho(1)}>Próximo lance</button>
      </div>
      <BarraDeTempo t={t} fim={fim} lances={lances} onIr={irPara} />
      {quadro.smokes.map((smoke) => <LegendaDoSmoke key={smoke.t} smoke={smoke} nosso={smoke.lado === detalhe.lado} />)}
      {ativo ? <CardDoLance lance={ativo} /> : <p className="replay-espera">Toque ou escolha um lance na barra: o mapa vai até ele e para.</p>}
      {!trajetos && (
        <p className="replay-aviso">
          Sem os trajetos do replay, o mapa mostra o que o OpenDota registra: wards dos dois times, torres, Roshan e mortes
          dentro de lutas. Mortes fora de luta não têm posição.
        </p>
      )}
    </div>
  );
}

function BarraDeTempo({ t, fim, lances, onIr }: { t: number; fim: number; lances: readonly Lance[]; onIr: (t: number) => void }) {
  const posicao = (s: number): CSSProperties => ({ left: `${(Math.max(0, s) / fim) * 100}%` });
  return (
    <div className="replay-barra">
      <input type="range" min={0} max={fim} step={1} value={t} onChange={(e) => onIr(Number(e.target.value))}
        aria-label="Tempo da partida" aria-valuetext={tempoDaPartida(t)} />
      <ol className="replay-marcadores" aria-label="Lances na linha do tempo">
        {lances.map((l) => (
          <li key={l.t} style={posicao(l.t)}>
            <button type="button" className={`replay-marcador replay-marcador-${l.achado.tipo}`} onClick={() => onIr(l.t)}
              aria-label={`${rotuloDoLance(l)} às ${tempoDaPartida(l.t)}: ${l.achado.titulo}`} title={`${tempoDaPartida(l.t)} ${l.achado.titulo}`} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export function CardDoLance({ lance, progressivo = true }: { lance: Lance; progressivo?: boolean }) {
  const fato = useTextoProgressivo(lance.achado.oQueAconteceu, progressivo);
  return (
    <article className={`lance-card lance-${lance.achado.tipo}`} aria-live={progressivo ? "polite" : undefined}>
      <p className="lance-sobretitulo">{rotuloDoLance(lance)} · {tempoDaPartida(lance.t)}</p>
      <h4 className="lance-titulo">{lance.achado.titulo}</h4>
      <p className="lance-fato">{fato}</p>
      <div className="lance-caixas">
        <section className="lance-caixa lance-porque"><h5>Por que</h5><p>{lance.achado.porque}</p></section>
        {lance.achado.oQueFazer && (
          <section className="lance-caixa lance-fazer">
            <h5>{lance.achado.tipo === "acerto" ? "Repetir" : "O que fazer"}</h5><p>{lance.achado.oQueFazer}</p>
          </section>
        )}
      </div>
      {lance.relacionados.length > 0 && (
        <p className="lance-relacionados">Também neste lance: {lance.relacionados.map((a) => a.titulo).join("; ")}.</p>
      )}
    </article>
  );
}

function LegendaDoSmoke({ smoke, nosso }: { smoke: SmokeNoMapa; nosso: boolean }) {
  return (
    <p className="replay-smoke">
      <strong>Smoke {nosso ? "do seu time" : "deles"} · {tempoDaPartida(smoke.t)}</strong>
      {smoke.retratos.map((r, i) => <img key={r} src={`/data/retratos/herois/${r}.webp`} alt={smoke.nomes[i] ?? ""} width={20} height={20} />)}
      <span>{nosso ? "andam escondidos" : "somem do mapa"}.</span>
    </p>
  );
}

function FeedDeAbates({ quadro }: { quadro: QuadroDoMapa }) {
  if (quadro.feed.length === 0 && quadro.roshans.length === 0) return null;
  const ultimoRoshan = quadro.roshans.at(-1);
  return (
    <ol className="replay-feed" aria-label="Últimas mortes">
      {quadro.feed.map((a) => (
        <li key={`${a.t}-${a.vitima}`} className={`replay-abate replay-abate-${a.ladoDaVitima}`}>
          <span>{a.matador ?? "creep/torre"}</span><span aria-hidden="true">✕</span>
          <img src={`/data/retratos/herois/${a.retratoDaVitima}.webp`} alt={a.vitima} width={18} height={18} />
          <span className="replay-abate-tempo">{tempoDaPartida(a.t)}</span>
        </li>
      ))}
      {ultimoRoshan && <li className="replay-abate replay-roshan">Roshan ({quadro.roshans.length}) · {tempoDaPartida(ultimoRoshan.t)}</li>}
    </ol>
  );
}

const corDaWard = (tipo: "observer" | "sentry", ladoDaWard: string, meuLado: string) =>
  ladoDaWard !== meuLado ? "var(--cor-dire)" : tipo === "observer" ? "var(--cor-destaque)" : "var(--cor-info)";

function MapaDoQuadro({ quadro, camera, objetivos, lado }: { quadro: QuadroDoMapa; camera: Camera; objetivos: readonly Objetivo[]; lado: string }) {
  const [cx, cy] = camera.centro;
  const estilo: CSSProperties = { transform: `scale(${camera.zoom}) translate(${(0.5 - cx) * 100}%, ${(cy - 0.5) * 100}%)` };
  const estruturas = objetivos.filter((o) => ESTRUTURAS_NO_MAPA.has(o.tipo) && !quadro.torresCaidas.has(o.id));
  const k = 1 / camera.zoom;
  return (
    <div className="replay-mapa" role="img" aria-label="Minimapa no instante escolhido: wards, torres de pé e mortes recentes">
      <div className={`replay-tabuleiro${prefereMenosMovimento() ? " sem-movimento" : ""}`} style={estilo}>
        <img src="/data/mapa_2048.jpg" alt="" draggable={false} />
        <svg viewBox="0 0 1 1" preserveAspectRatio="none">
          {quadro.wards.map((w) => {
            const { x, y } = svg(w.ponto);
            const cor = corDaWard(w.tipo, w.lado, lado);
            return (
              <g key={`${w.tipo}-${w.de}-${x}-${y}`}>
                <circle cx={x} cy={y} r={RAIO_DE_VISAO[w.tipo]} fill={cor} fillOpacity={0.1} stroke={cor} strokeOpacity={0.6}
                  strokeWidth={1.2} vectorEffect="non-scaling-stroke" strokeDasharray={w.tipo === "sentry" ? "4 3" : undefined} />
                <rect x={x - 0.007 * k} y={y - 0.007 * k} width={0.014 * k} height={0.014 * k} fill={cor} transform={`rotate(45 ${x} ${y})`} />
              </g>
            );
          })}
          {estruturas.map((o) => (
            <rect key={o.id} x={o.x - 0.008 * k} y={1 - o.y - 0.008 * k} width={0.016 * k} height={0.016 * k}
              fill={o.lado === lado ? "var(--cor-radiant)" : "var(--cor-dire)"} stroke="var(--cor-fundo)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
          ))}
          {quadro.smokes.map((s) => {
            const { x, y } = svg(s.centro);
            return <circle key={`smoke-${x}-${y}`} cx={x} cy={y} r={0.05} fill="none" stroke="var(--cor-neutro)" strokeWidth={2} vectorEffect="non-scaling-stroke" />;
          })}
          {quadro.herois.map((h) => (
            <polyline key={`rastro-${h.slot}`} points={h.rastro.map((p) => `${p[0]},${1 - p[1]}`).join(" ")} fill="none"
              stroke={h.lado === lado ? "var(--cor-radiant)" : "var(--cor-dire)"} strokeOpacity={0.7} strokeWidth={2} vectorEffect="non-scaling-stroke" />
          ))}
          {quadro.mortes.map((m) => <MarcaDeMorte key={`${m.t}-${m.ponto[0]}`} ponto={m.ponto} cor={m.minha ? "var(--cor-texto)" : m.lado === lado ? "var(--cor-radiant)" : "var(--cor-dire)"} tamanho={(m.minha ? 0.03 : 0.018) * k} />)}
        </svg>
        {quadro.herois.map((h) => (
          <img key={h.slot} src={`/data/retratos/herois/${h.retrato}.webp`} alt={h.nome} title={h.nome}
            className={`replay-heroi replay-heroi-${h.lado === lado ? "aliado" : "inimigo"}${h.eu ? " eu" : ""}${h.morto ? " morto" : ""}${h.escondido ? " escondido" : ""}`}
            style={{ left: `${h.ponto[0] * 100}%`, top: `${(1 - h.ponto[1]) * 100}%`, width: `${4.5 / camera.zoom}%` }} />
        ))}
      </div>
    </div>
  );
}

function MarcaDeMorte({ ponto, cor, tamanho }: { ponto: Ponto; cor: string; tamanho: number }) {
  const { x, y } = svg(ponto);
  const d = `M${x - tamanho} ${y - tamanho} L${x + tamanho} ${y + tamanho} M${x + tamanho} ${y - tamanho} L${x - tamanho} ${y + tamanho}`;
  return <path d={d} stroke={cor} strokeWidth={3} strokeLinecap="round" vectorEffect="non-scaling-stroke" />;
}
