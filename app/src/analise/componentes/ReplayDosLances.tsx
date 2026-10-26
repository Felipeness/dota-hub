// Player dos lances: relógio contínuo (requestAnimationFrame, posições interpoladas entre as amostras de 1 s), 5x
// perto do lance e pausa no segundo exato dele, câmera que fecha suavemente na região do lance. Em volta do mapa, o
// contexto da partida no instante (placar, vantagem de ouro, último evento) e o card do lance. Sem os trajetos do
// replay, o mapa mostra só o que o OpenDota tem.
import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { Link } from "react-router";
import type { Objetivo } from "../../data/schemas";
import { tempoDaPartida, type DetalheDaPartida } from "../../live/partida/detalhe";
import type { Lance } from "../lancesDecisivos";
import {
  MAPA_INTEIRO, PAUSA_NO_LANCE_MS, VELOCIDADE_PADRAO, aproximarCamera, avancar, cameraPara, envolvidosNoLance, eventoEm,
  eventosDoLetreiro, focoDoLance, lanceAtivoEm, placarEm, quadroEm, rotuloDoLance, tituloSemTempo, vantagemEm, velocidadeEm,
  type Camera, type Relogio, type SmokeNoMapa, type TrajetosDoMapa, type Velocidade,
} from "../replayDosLances";
import { GraficoDaVantagem, Letreiro, PlacarDoTopo } from "./ContextoDaPartida";
import { ControlesDoReplay, IconePausa, IconeTocar } from "./ControlesDoReplay";
import { MapaDoReplay, retrato } from "./MapaDoReplay";
import { prefereMenosMovimento, useTextoProgressivo } from "./movimento";

/** Parado, a câmera ainda anima até 1,5 s depois de um salto de tempo; depois o laço para. */
const ANIMACAO_PARADO_MS = 1_500;
/** Um quadro muito longo (aba em segundo plano) não vira um salto grande no relógio. */
const QUADRO_MAXIMO_MS = 100;
/** Placar, gráfico e letreiro andam 4x por segundo, não a cada quadro. */
const ATUALIZACAO_DO_CONTEXTO_MS = 250;
/** Tocando, os controles somem depois de 2,5 s sem mexer o mouse. */
const CONTROLES_SOMEM_MS = 2_500;
const PULO_DO_TECLADO_S = 10;

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
  // Começa parado no primeiro lance, com o card dele aberto: nunca no meio da partida sem nada na tela.
  const [relogio, setRelogio] = useState<Relogio>(relogioParado(lances[0]?.t ?? 0, lances[0]?.t ?? null));
  const [camera, setCamera] = useState<Camera>(MAPA_INTEIRO);
  const alvo = alvoDaCamera(relogio.t);
  const alvoRef = useRef(alvo);
  useEffect(() => { alvoRef.current = alvo; });
  const chaveDoAlvo = `${alvo.centro[0]}:${alvo.centro[1]}:${alvo.zoom}`;
  const reduzir = prefereMenosMovimento();

  // Os lances chegam aos poucos (os dados de pro carregam depois); enquanto a pessoa não mexeu, o player segue o primeiro.
  const primeiro = lances[0]?.t ?? 0;
  const primeiroAnterior = useRef(primeiro);
  useEffect(() => {
    const anterior = primeiroAnterior.current;
    primeiroAnterior.current = primeiro;
    setRelogio((r) => (!r.tocando && r.t === anterior ? relogioParado(primeiro, primeiro) : r));
  }, [primeiro]);

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

/** O tempo do relógio amostrado 4x por segundo, para o que não precisa andar a cada quadro. */
function useTempoLento(t: number): number {
  const ref = useRef(t);
  const [lento, setLento] = useState(t);
  useEffect(() => { ref.current = t; });
  useEffect(() => {
    const intervalo = setInterval(() => setLento(ref.current), ATUALIZACAO_DO_CONTEXTO_MS);
    return () => clearInterval(intervalo);
  }, []);
  return Math.abs(lento - t) > PULO_DO_TECLADO_S ? t : lento;
}

/** Controles visíveis parado, com foco dentro ou com mexida recente do mouse; somem tocando depois de 2,5 s. */
function useControlesVisiveis(tocando: boolean) {
  const [mexeuAgora, setMexeuAgora] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mexeu = () => {
    setMexeuAgora(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setMexeuAgora(false), CONTROLES_SOMEM_MS);
  };
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  return { visiveis: !tocando || mexeuAgora, mexeu };
}

const ehCampo = (alvo: EventTarget) => alvo instanceof HTMLInputElement || alvo instanceof HTMLTextAreaElement;

export function ReplayDosLances({ detalhe, lances, objetivos, trajetos, pedido }: Props) {
  const [velocidade, setVelocidade] = useState<Velocidade>(VELOCIDADE_PADRAO);
  const [lampejo, setLampejo] = useState<{ tocando: boolean; n: number } | null>(null);
  const container = useRef<HTMLDivElement>(null);
  const eu = { lado: detalhe.lado, slot: detalhe.slot };
  const alvoDaCamera = (t: number) => {
    const ativo = lanceAtivoEm(t, lances);
    return ativo ? cameraPara(focoDoLance(ativo, detalhe.panorama, objetivos, eu, trajetos)) : MAPA_INTEIRO;
  };
  const { relogio, setRelogio, camera } = useRelogioECamera(lances, detalhe.duracaoS, velocidade, alvoDaCamera);
  const controles = useControlesVisiveis(relogio.tocando);
  // Sem o React Compiler no projeto, o memo é o que evita refazer isto a cada quadro do relógio.
  const eventos = useMemo(() => eventosDoLetreiro(detalhe, eu, trajetos), [detalhe, trajetos]);

  useEffect(() => {
    if (pedido) setRelogio(relogioParado(pedido.t, pedido.t));
  }, [pedido, setRelogio]);

  const t = relogio.t;
  const tLento = useTempoLento(t);
  const placar = useMemo(() => placarEm(detalhe.panorama, tLento, eu, trajetos), [detalhe, tLento, trajetos]);
  const parado = !relogio.tocando || relogio.pausaRestanteMs > 0;
  // Parado em cima do lance, quem participou dele aparece inteiro mesmo sem o seu time ver (o apagado é só tocando).
  const lanceNaTela = parado ? lances.find((l) => Math.abs(l.t - t) < 0.5) : undefined;
  const envolvidos = lanceNaTela && trajetos ? envolvidosNoLance(lanceNaTela, detalhe.panorama, trajetos, eu) : NINGUEM;
  const quadro = quadroEm(detalhe.panorama, t, { eu, trajetos, envolvidos });
  const ativo = lanceAtivoEm(t, lances);

  const fim = detalhe.duracaoS;
  const irPara = useCallback((novo: number) => setRelogio(relogioParado(Math.min(fim, Math.max(0, novo)), novo)), [fim, setRelogio]);
  const tocarOuPausar = () => {
    setRelogio((r) => ({ ...r, tocando: !r.tocando, pausaRestanteMs: 0 }));
    setLampejo((l) => ({ tocando: !relogio.tocando, n: (l?.n ?? 0) + 1 }));
  };
  const irAoLance = (sentido: -1 | 1) => {
    const lance = sentido === 1 ? lances.find((l) => l.t > Math.ceil(t)) : [...lances].reverse().find((l) => l.t < Math.floor(t));
    if (lance) irPara(lance.t);
  };
  const telaCheia = () => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void container.current?.requestFullscreen?.();
  };
  const teclas: Readonly<Record<string, () => void>> = {
    " ": tocarOuPausar, k: tocarOuPausar, ArrowLeft: () => irPara(t - PULO_DO_TECLADO_S), ArrowRight: () => irPara(t + PULO_DO_TECLADO_S),
    j: () => irAoLance(-1), l: () => irAoLance(1), f: telaCheia,
  };
  const aoTeclar = (e: KeyboardEvent<HTMLDivElement>) => {
    if (ehCampo(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.target instanceof HTMLButtonElement && (e.key === " " || e.key === "Enter")) return;
    const acao = teclas[e.key.length === 1 ? e.key.toLowerCase() : e.key];
    if (!acao) return;
    e.preventDefault();
    acao();
  };

  return (
    <div className="replay-lances" ref={container} tabIndex={-1} onKeyDown={aoTeclar}>
      <PlacarDoTopo placar={placar} vantagem={vantagemEm(detalhe.vantagemDoTime.ouro, tLento)} />
      <div className={`replay-palco${controles.visiveis ? "" : " sem-cursor"}`} onPointerMove={controles.mexeu} onFocus={controles.mexeu}>
        <MapaDoReplay quadro={quadro} camera={camera} objetivos={objetivos} lado={detalhe.lado} onClicar={tocarOuPausar}
          detalheDoHeroi={(slot) => detalheDoHeroi(trajetos, slot, t)} />
        <div className="replay-vinheta" aria-hidden="true" />
        <FeedDeAbates feed={quadro.feed} />
        <div className="replay-relogio">
          <span className="replay-relogio-tempo">{tempoDaPartida(Math.floor(t))}</span>
          <span className="replay-velocidade">{parado ? "❚❚" : `▶▶ ${velocidadeEm(t, lances, velocidade)}x`}</span>
        </div>
        {lampejo && <span key={lampejo.n} className="replay-lampejo" aria-hidden="true">{lampejo.tocando ? <IconeTocar /> : <IconePausa />}</span>}
        <ControlesDoReplay t={t} fim={detalhe.duracaoS} tocando={relogio.tocando} velocidade={velocidade} lances={lances}
          visivel={controles.visiveis} onTocar={tocarOuPausar} onIr={irPara} onLance={irAoLance} onVelocidade={setVelocidade} onTelaCheia={telaCheia} />
      </div>
      <Letreiro evento={eventoEm(eventos, tLento)} />
      <Link className="pilula replay-prancheta" to={`/prancheta?partida=${detalhe.partida}&t=${Math.floor(t)}`}>
        Abrir na prancheta ({tempoDaPartida(Math.floor(t))})
      </Link>
      <GraficoDaVantagem ouro={detalhe.vantagemDoTime.ouro} duracaoS={detalhe.duracaoS} t={tLento} lances={lances} onIr={irPara} />
      {quadro.smokes.map((smoke) => <LegendaDoSmoke key={smoke.t} smoke={smoke} nosso={smoke.lado === detalhe.lado} />)}
      {ativo ? <CardDoLance lance={ativo} /> : <p className="replay-espera">Próximo lance: {proximoLance(lances, t)}</p>}
      {!trajetos && (
        <p className="replay-aviso">
          Sem os trajetos do replay, o mapa mostra o que o OpenDota registra: wards dos dois times, torres, Roshan e mortes
          dentro de lutas. Mortes fora de luta não têm posição.
        </p>
      )}
    </div>
  );
}

function detalheDoHeroi(trajetos: TrajetosDoMapa | null, slot: number, t: number): string {
  const nivel = trajetos?.nivelEm(slot, t);
  const lh = trajetos?.lhEm(slot, t);
  return [nivel ? `nível ${nivel}` : null, lh !== null && lh !== undefined ? `${lh} LH` : null].filter(Boolean).join(" · ");
}

function proximoLance(lances: readonly Lance[], t: number): string {
  const proximo = lances.find((l) => l.t > t);
  return proximo ? `${tempoDaPartida(proximo.t)} · ${tituloSemTempo(proximo.achado.titulo)}` : "nenhum, a partida acabou.";
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

function FeedDeAbates({ feed }: { feed: ReturnType<typeof quadroEm>["feed"] }) {
  if (feed.length === 0) return null;
  return (
    <ol className="replay-feed" aria-label="Últimas mortes">
      {feed.map((a) => (
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
