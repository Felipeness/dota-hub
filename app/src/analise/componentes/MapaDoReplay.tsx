// Camada do mapa do player: um SVG só, em que a câmera é o viewBox; ícones e traços mantêm o tamanho na tela com
// qualquer zoom. Heróis com retrato, rastro, wards, torres, smoke e ✕ das mortes; tocar num herói mostra nome,
// nível e last hits no instante.
import { useEffect, useId, useRef, useState } from "react";
import type { Objetivo } from "../../data/schemas";
import type { Ponto } from "../../map/coords";
import { MORTE_VISIVEL_S, RAIO_DE_VISAO, janelaDaCamera, type Camera, type HeroiNoMapa, type QuadroDoMapa } from "../replayDosLances";

export const retrato = (slug: string) => `/data/retratos/herois/${slug}.webp`;

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

type PropsDoMapa = Readonly<{
  quadro: QuadroDoMapa; camera: Camera; objetivos: readonly Objetivo[]; lado: string;
  /** "Nível 14 · 120 LH" do herói no instante, para o rótulo ao tocar nele. */
  detalheDoHeroi: (slot: number) => string;
  onClicar: () => void;
}>;

export function MapaDoReplay({ quadro, camera, objetivos, lado, detalheDoHeroi, onClicar }: PropsDoMapa) {
  const [escolhido, setEscolhido] = useState<number | null>(null);
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
      aria-label="Minimapa da partida no instante do relógio: heróis, wards, torres de pé e mortes recentes"
      onClick={() => { setEscolhido(null); onClicar(); }}>
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
        <IconeDoHeroi key={h.slot} heroi={h} nosso={h.lado === lado} raio={h.eu ? raioDoHeroi * 1.2 : raioDoHeroi} recorte={recorte}
          onEscolher={() => setEscolhido(h.slot === escolhido ? null : h.slot)} />
      ))}
      {herois.filter((h) => h.eu || h.slot === escolhido).map((h) => (
        <RotuloDoHeroi key={`rotulo-${h.slot}`} heroi={h} px={px} raio={raioDoHeroi * (h.eu ? 1.2 : 1)}
          texto={h.slot === escolhido ? `${h.nome} · ${detalheDoHeroi(h.slot)}` : h.nome} />
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

type PropsDoIcone = Readonly<{ heroi: HeroiNoMapa; nosso: boolean; raio: number; recorte: string; onEscolher: () => void }>;

function IconeDoHeroi({ heroi, nosso, raio, recorte, onEscolher }: PropsDoIcone) {
  const [x, y] = svg(heroi.ponto);
  const anel = heroi.eu ? "eu" : nosso ? "nosso" : "deles";
  return (
    <g className={`heroi heroi-${anel}`} opacity={heroi.escondido ? 0.35 : 1} onClick={(e) => { e.stopPropagation(); onEscolher(); }}>
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

const FONTE_DO_ROTULO_PX = 11;

/** Etiqueta embaixo do herói: o nome do jogador sempre; nome, nível e LH de quem foi tocado. */
function RotuloDoHeroi({ heroi, px, raio, texto }: { heroi: HeroiNoMapa; px: number; raio: number; texto: string }) {
  const [x, y] = svg(heroi.ponto);
  const largura = texto.length * FONTE_DO_ROTULO_PX * 0.58 * px + 10 * px;
  const altura = (FONTE_DO_ROTULO_PX + 6) * px;
  const topo = y + raio + 3 * px;
  return (
    <g className="heroi-rotulo" pointerEvents="none">
      <rect x={x - largura / 2} y={topo} width={largura} height={altura} rx={altura / 2} />
      <text x={x} y={topo + altura / 2} fontSize={FONTE_DO_ROTULO_PX * px} textAnchor="middle" dominantBaseline="central">{texto}</text>
    </g>
  );
}
