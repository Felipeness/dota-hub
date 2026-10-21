// Player do minimapa: toca a partida até cada lance decisivo com relógio contínuo (requestAnimationFrame, posições
// interpoladas entre as amostras de 1 s), 5x perto do lance e pausa no segundo exato dele, com a câmera fechando
// suavemente na região do lance. Tudo num SVG só: a câmera é o viewBox, então ícones e traços mantêm o tamanho na
// tela com qualquer zoom. Sem os trajetos do replay, mostra só o que o OpenDota tem.
import { useEffect, useId, useRef, useState } from "react";
import type { Objetivo } from "../../data/schemas";
import type { Ponto } from "../../map/coords";
import { tempoDaPartida, type DetalheDaPartida } from "../../live/partida/detalhe";
import type { Lance } from "../lancesDecisivos";
import {
  MAPA_INTEIRO, MORTE_VISIVEL_S, PAUSA_NO_LANCE_MS, RAIO_DE_VISAO, VELOCIDADES, VELOCIDADE_PADRAO, aproximarCamera, avancar,
  cameraPara, envolvidosNoLance, focoDoLance, janelaDaCamera, lanceAtivoEm, quadroEm, rotuloDoLance, tituloSemTempo, velocidadeEm,
  type Camera, type HeroiNoMapa, type QuadroDoMapa, type Relogio, type SmokeNoMapa, type TrajetosDoMapa, type Velocidade,
} from "../replayDosLances";
import { prefereMenosMovimento, useTextoProgressivo } from "./movimento";

/** Parado, a câmera ainda anima até 1,5 s depois de um salto de tempo; depois o laço para. */
const ANIMACAO_PARADO_MS = 1_500;
/** Um quadro muito longo (aba em segundo plano) não vira um salto grande no relógio. */
const QUADRO_MAXIMO_MS = 100;
const retrato = (slug: string) => `/data/retratos/herois/${slug}.webp`;

type Props = Readonly<{
  detalhe: DetalheDaPartida;
  lances: readonly Lance[];
  objetivos: readonly Objetivo[];
  trajetos: TrajetosDoMapa | null;
  /** Instante pedido de fora (marcador, "ver no mapa"); `n` muda a cada pedido para repetir o mesmo instante. */
  pedido: Readonly<{ t: number; n: number }> | null;
}>;

const NINGUEM: ReadonlySet<number> = new Set();
const relogioParado = (t: number, ultimoLance: number | null = null): Relogio => ({ t, tocando: false, pausaRestanteMs: 0, ultimoLance });

/** Relógio e câmera num laço de requestAnimationFrame; com prefers-reduced-motion, tocar pula de lance em lance. */
function useRelogioECamera(lances: readonly Lance[], fim: number, velocidade: Velocidade, alvoDaCamera: (t: number) => Camera) {
  const [relogio, setRelogio] = useState<Relogio>(relogioParado(lances[0] ? Math.max(0, lances[0].t - 30) : 0));
  const [camera, setCamera] = useState<Camera>(MAPA_INTEIRO);
  const alvo = alvoDaCamera(relogio.t);
  const alvoRef = useRef(alvo);
  useEffect(() => { alvoRef.current = alvo; });
  const chaveDoAlvo = `${alvo.centro[0]}:${alvo.centro[1]}:${alvo.zoom}`;
  const reduzir = prefereMenosMovimento();

  useEffect(() => {
    if (reduzir) return;
    let quadro = 0;
    let antes = performance.now();
    const inicio = antes;
    const passo = (agora: number) => {
      const ms = Math.min(QUADRO_MAXIMO_MS, agora - antes);
      antes = agora;
      setRelogio((r) => avancar(r, { ms, lances, fim, velocidade }));
      setCamera((c) => aproximarCamera(c, alvoRef.current, ms));
      if (relogio.tocando || agora - inicio < ANIMACAO_PARADO_MS) quadro = requestAnimationFrame(passo);
    };
    quadro = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(quadro);
  }, [reduzir, relogio.tocando, chaveDoAlvo, lances, fim, velocidade]);

  useEffect(() => {
    if (!reduzir || !relogio.tocando) return;
    const proximo = lances.find((l) => l.t > relogio.t);
    const salto = setTimeout(() => setRelogio(proximo ? { ...relogioParado(proximo.t, proximo.t), tocando: true } : relogioParado(relogio.t)), PAUSA_NO_LANCE_MS);
    return () => clearTimeout(salto);
  }, [reduzir, relogio, lances]);

  return { relogio, setRelogio, camera: reduzir ? alvo : camera };
}

export function ReplayDosLances({ detalhe, lances, objetivos, trajetos, pedido }: Props) {
  const [velocidade, setVelocidade] = useState<Velocidade>(VELOCIDADE_PADRAO);
  const eu = { lado: detalhe.lado, slot: detalhe.slot };
  const alvoDaCamera = (t: number) => {
    const ativo = lanceAtivoEm(t, lances);
    return ativo ? cameraPara(focoDoLance(ativo, detalhe.panorama, objetivos, eu, trajetos)) : MAPA_INTEIRO;
  };
  const { relogio, setRelogio, camera } = useRelogioECamera(lances, detalhe.duracaoS, velocidade, alvoDaCamera);

  useEffect(() => {
    if (pedido) setRelogio(relogioParado(pedido.t, pedido.t));
  }, [pedido, setRelogio]);

  const t = relogio.t;
  const parado = !relogio.tocando || relogio.pausaRestanteMs > 0;
  // Parado em cima do lance, quem participou dele aparece inteiro mesmo sem o seu time ver (o apagado é só tocando).
  const lanceNaTela = parado ? lances.find((l) => Math.abs(l.t - t) < 0.5) : undefined;
  const envolvidos = lanceNaTela && trajetos ? envolvidosNoLance(lanceNaTela, detalhe.panorama, trajetos, eu) : NINGUEM;
  const quadro = quadroEm(detalhe.panorama, t, { eu, trajetos, envolvidos });
  const ativo = lanceAtivoEm(t, lances);
  const irPara = (novo: number) => setRelogio(relogioParado(novo, novo));
  const anterior = [...lances].reverse().find((l) => l.t < Math.floor(t));
  const proximo = lances.find((l) => l.t > Math.ceil(t));

  return (
    <div className="replay-lances">
      <div className="replay-palco">
        <MapaDoQuadro quadro={quadro} camera={camera} objetivos={objetivos} lado={detalhe.lado} />
        <div className="replay-vinheta" aria-hidden="true" />
        <FeedDeAbates quadro={quadro} />
        <div className="replay-relogio">
          <span className="replay-relogio-tempo">{tempoDaPartida(Math.floor(t))}</span>
          <span className="replay-velocidade">{parado ? "❚❚" : `▶▶ ${velocidadeEm(t, lances, velocidade)}x`}</span>
        </div>
      </div>
      <div className="replay-controles">
        <button type="button" className="replay-tocar" onClick={() => setRelogio((r) => ({ ...r, tocando: !r.tocando, pausaRestanteMs: 0 }))} aria-pressed={relogio.tocando}>
          {relogio.tocando ? "Pausar" : "Tocar"}
        </button>
        <button type="button" onClick={() => anterior && irPara(anterior.t)} disabled={!anterior}>Lance anterior</button>
        <button type="button" onClick={() => proximo && irPara(proximo.t)} disabled={!proximo}>Próximo lance</button>
        <div className="replay-velocidades" role="group" aria-label="Velocidade">
          {VELOCIDADES.map((v) => (
            <button key={v} type="button" aria-pressed={velocidade === v} onClick={() => setVelocidade(v)}>{v}x</button>
          ))}
        </div>
      </div>
      <BarraDeTempo t={Math.round(t)} fim={detalhe.duracaoS} lances={lances} onIr={irPara} />
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
  return (
    <div className="replay-barra">
      <input type="range" min={0} max={fim} step={1} value={t} onChange={(e) => onIr(Number(e.target.value))}
        aria-label="Tempo da partida" aria-valuetext={tempoDaPartida(t)} />
      <ol className="replay-marcadores" aria-label="Lances na linha do tempo">
        {lances.map((l) => (
          <li key={l.t} style={{ left: `${(Math.max(0, l.t) / fim) * 100}%` }}>
            <button type="button" className={`replay-marcador replay-marcador-${l.achado.tipo}`} onClick={() => onIr(l.t)}
              aria-label={`${rotuloDoLance(l)} às ${tempoDaPartida(l.t)}: ${tituloSemTempo(l.achado.titulo)}`} title={`${tempoDaPartida(l.t)} ${tituloSemTempo(l.achado.titulo)}`} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export function CardDoLance({ lance, progressivo = true }: { lance: Lance; progressivo?: boolean }) {
  const fato = useTextoProgressivo(lance.achado.oQueAconteceu, progressivo);
  return (
    <article className={`lance-card lance-${lance.achado.tipo}`}>
      <p className="lance-sobretitulo">{rotuloDoLance(lance)} · {tempoDaPartida(lance.t)}</p>
      <h4 className="lance-titulo">{tituloSemTempo(lance.achado.titulo)}</h4>
      <p className="lance-fato" aria-label={lance.achado.oQueAconteceu}>{fato}</p>
      <div className="lance-caixas">
        <section className="lance-caixa lance-porque"><h5>Por que</h5><p>{lance.achado.porque}</p></section>
        {lance.achado.oQueFazer && (
          <section className="lance-caixa lance-fazer">
            <h5>{lance.achado.tipo === "acerto" ? "Repetir" : "O que fazer"}</h5><p>{lance.achado.oQueFazer}</p>
          </section>
        )}
      </div>
      {lance.relacionados.length > 0 && (
        <p className="lance-relacionados">Também neste lance: {lance.relacionados.map((a) => tituloSemTempo(a.titulo)).join("; ")}.</p>
      )}
    </article>
  );
}

function LegendaDoSmoke({ smoke, nosso }: { smoke: SmokeNoMapa; nosso: boolean }) {
  return (
    <p className="replay-smoke">
      <strong>Smoke {nosso ? "do seu time" : "deles"} · {tempoDaPartida(smoke.t)}</strong>
      {smoke.retratos.map((r, i) => <img key={r} src={retrato(r)} alt={smoke.nomes[i] ?? ""} width={22} height={22} />)}
      <span>{nosso ? "andam escondidos" : "somem do mapa"}.</span>
    </p>
  );
}

function FeedDeAbates({ quadro }: { quadro: QuadroDoMapa }) {
  if (quadro.feed.length === 0) return null;
  return (
    <ol className="replay-feed" aria-label="Últimas mortes">
      {quadro.feed.map((a) => (
        <li key={`${a.t}-${a.vitima}`} className={`replay-abate replay-abate-${a.ladoDaVitima}`}>
          {a.retratoDoMatador
            ? <img src={retrato(a.retratoDoMatador)} alt={a.matador ?? ""} />
            : <span className="replay-abate-sem">{a.matador ?? "creep/torre"}</span>}
          <span aria-label="matou">✕</span>
          <img src={retrato(a.retratoDaVitima)} alt={a.vitima} />
          <span className="replay-abate-tempo">{tempoDaPartida(a.t)}</span>
        </li>
      ))}
    </ol>
  );
}

const svg = ([x, y]: Ponto): Ponto => [x, 1 - y];
const TORRES = new Set(["torre", "ancient"]);

/** Largura do mapa na tela, medida só quando ela muda (não a cada quadro). */
function useLargura() {
  const ref = useRef<SVGSVGElement>(null);
  const [largura, setLargura] = useState(700);
  useEffect(() => {
    const elemento = ref.current;
    if (!elemento || typeof ResizeObserver === "undefined") return;
    const observador = new ResizeObserver(([entrada]) => { if (entrada) setLargura(entrada.contentRect.width); });
    observador.observe(elemento);
    return () => observador.disconnect();
  }, []);
  return { ref, largura };
}

/** Retrato: ~30 px no mapa inteiro, ~40 px no zoom do lance, nunca menos de 26 px; o do jogador 1,2x. */
const DIAMETRO_GERAL_PX = 30;
const DIAMETRO_NO_ZOOM_PX = 40;
const DIAMETRO_MINIMO_PX = 26;
const ZOOM_DO_LANCE = 2.7;
/** Largura do mapa no desktop (coluna de 760 px); abaixo dela o retrato encolhe junto, até o mínimo. */
const LARGURA_DE_REFERENCIA_PX = 660;
const diametroDoRetrato = (zoom: number, largura: number) => {
  const desktop = DIAMETRO_GERAL_PX + ((DIAMETRO_NO_ZOOM_PX - DIAMETRO_GERAL_PX) * (zoom - 1)) / (ZOOM_DO_LANCE - 1);
  return Math.max(DIAMETRO_MINIMO_PX, desktop * Math.min(1, largura / LARGURA_DE_REFERENCIA_PX));
};
const LOSANGO_DA_WARD_PX = 11;

type Janela = ReturnType<typeof janelaDaCamera>;
/** Só desenha a visão da ward que cruza o que a câmera mostra. */
const cruzaAJanela = ([x, y]: Ponto, raio: number, j: Janela) =>
  x + raio >= j.x && x - raio <= j.x + j.lado && y + raio >= j.y && y - raio <= j.y + j.lado;

function MapaDoQuadro({ quadro, camera, objetivos, lado }: { quadro: QuadroDoMapa; camera: Camera; objetivos: readonly Objetivo[]; lado: string }) {
  const { ref, largura } = useLargura();
  // useId traz caracteres que não valem dentro de url(#...); fica só o que é seguro.
  const recorte = `recorte-heroi-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const janela = janelaDaCamera(camera);
  /** Um pixel da tela em unidades do viewBox: tamanhos de ícone ficam fixos na tela com qualquer zoom. */
  const px = janela.lado / largura;
  const deQuem = (l: string) => (l === lado ? "nosso" : "deles");
  const torres = objetivos.filter((o) => TORRES.has(o.tipo) && !quadro.torresCaidas.has(o.id));
  const herois = [...quadro.herois].sort((a, b) => Number(a.eu) - Number(b.eu) || Number(!a.escondido) - Number(!b.escondido));
  const wards = quadro.wards.filter((w) => cruzaAJanela(svg(w.ponto), RAIO_DE_VISAO[w.tipo], janela));
  const raioDoHeroi = (diametroDoRetrato(camera.zoom, largura) / 2) * px;
  // Losango da ward e quadrado da torre encolhem junto no celular, sem sumir.
  const escala = Math.max(0.65, Math.min(1, largura / LARGURA_DE_REFERENCIA_PX));
  return (
    <svg ref={ref} className="replay-mapa" viewBox={`${janela.x} ${janela.y} ${janela.lado} ${janela.lado}`} role="img"
      aria-label="Minimapa da partida no instante do relógio: heróis, wards, torres de pé e mortes recentes">
      <defs>
        <clipPath id={recorte} clipPathUnits="objectBoundingBox"><circle cx={0.5} cy={0.5} r={0.5} /></clipPath>
      </defs>
      <image className="replay-arte" href="/data/mapa_2048.jpg" x={0} y={0} width={1} height={1} preserveAspectRatio="none" />
      {wards.map((w) => {
        const [x, y] = svg(w.ponto);
        const meio = (LOSANGO_DA_WARD_PX / 2) * escala * px;
        return (
          <g key={`${w.tipo}-${w.de}-${x}-${y}`} className={`ward ward-${w.tipo} ward-${deQuem(w.lado)}`} opacity={w.opacidade}>
            <circle cx={x} cy={y} r={RAIO_DE_VISAO[w.tipo]} className="ward-visao" vectorEffect="non-scaling-stroke" />
            {w.tipo === "observer"
              ? <rect x={x - meio} y={y - meio} width={meio * 2} height={meio * 2} transform={`rotate(45 ${x} ${y})`} className="ward-icone" vectorEffect="non-scaling-stroke" />
              : <circle cx={x} cy={y} r={meio * 0.8} className="ward-icone" vectorEffect="non-scaling-stroke" />}
          </g>
        );
      })}
      {torres.map((o) => (
        <rect key={o.id} x={o.x - 5 * escala * px} y={1 - o.y - 5 * escala * px} width={10 * escala * px} height={10 * escala * px}
          className={`torre torre-${deQuem(o.lado)}`} vectorEffect="non-scaling-stroke" />
      ))}
      {quadro.herois.map((h) => <Rastro key={`rastro-${h.slot}`} heroi={h} nosso={h.lado === lado} />)}
      {quadro.smokes.map((s) => {
        const [x, y] = svg(s.centro);
        return (
          <g key={`smoke-${s.t}`} className="smoke">
            <circle cx={x} cy={y} r={s.raio} className="smoke-brilho" vectorEffect="non-scaling-stroke" />
            <circle cx={x} cy={y} r={s.raio} className="smoke-anel" vectorEffect="non-scaling-stroke" />
          </g>
        );
      })}
      {/* O ✕ fica por baixo dos heróis: quem matou continua visível em cima do ponto da morte. */}
      {quadro.mortes.map((m) => (
        <MarcaDeMorte key={`${m.t}-${m.ponto[0]}`} ponto={m.ponto} tamanho={(m.minha ? 20 : 8) * px}
          opacidade={1 - m.idade / MORTE_VISIVEL_S} grossa={m.minha} />
      ))}
      {herois.map((h) => (
        <IconeDoHeroi key={h.slot} heroi={h} nosso={h.lado === lado} raio={h.eu ? raioDoHeroi * 1.2 : raioDoHeroi} recorte={recorte} />
      ))}
    </svg>
  );
}

/** Rastro de 20 s em segmentos, do transparente (mais antigo) a 70% (agora). */
function Rastro({ heroi, nosso }: { heroi: HeroiNoMapa; nosso: boolean }) {
  const pontos = heroi.rastro.map(svg);
  return (
    <g className={`rastro rastro-${nosso ? "nosso" : "deles"}`} opacity={heroi.escondido ? 0.35 : 1}>
      {pontos.slice(1).map((p, i) => {
        const de = pontos[i] ?? p;
        return <line key={i} x1={de[0]} y1={de[1]} x2={p[0]} y2={p[1]} strokeOpacity={(0.7 * (i + 1)) / pontos.length} vectorEffect="non-scaling-stroke" />;
      })}
    </g>
  );
}

function IconeDoHeroi({ heroi, nosso, raio, recorte }: { heroi: HeroiNoMapa; nosso: boolean; raio: number; recorte: string }) {
  const [x, y] = svg(heroi.ponto);
  const anel = heroi.eu ? "eu" : nosso ? "nosso" : "deles";
  return (
    <g className={`heroi heroi-${anel}`} opacity={heroi.escondido ? 0.35 : 1}>
      <title>{heroi.nome}{heroi.escondido ? " (o seu time não via)" : ""}</title>
      {heroi.eu && <circle cx={x} cy={y} r={raio * 1.5} className="heroi-brilho" />}
      <image href={retrato(heroi.retrato)} x={x - raio} y={y - raio} width={raio * 2} height={raio * 2}
        preserveAspectRatio="xMidYMid slice" clipPath={`url(#${recorte})`} />
      <circle cx={x} cy={y} r={raio} className="heroi-anel" vectorEffect="non-scaling-stroke" />
    </g>
  );
}

function MarcaDeMorte({ ponto, tamanho, opacidade, grossa }: { ponto: Ponto; tamanho: number; opacidade: number; grossa: boolean }) {
  const [x, y] = svg(ponto);
  const d = `M${x - tamanho} ${y - tamanho} L${x + tamanho} ${y + tamanho} M${x + tamanho} ${y - tamanho} L${x - tamanho} ${y + tamanho}`;
  return <path d={d} className={`morte${grossa ? " morte-minha" : ""}`} opacity={opacidade} vectorEffect="non-scaling-stroke" />;
}
