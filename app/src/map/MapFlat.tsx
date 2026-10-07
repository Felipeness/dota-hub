import { useEffect, useRef, useState, type CSSProperties, type MouseEvent, type PointerEvent } from "react";
import type { MapViewProps } from "./MapView";
import { normToPercent, type Ponto } from "./coords";
import { SeloDaRota } from "./SeloDaRota";
import { caminhoDaFuga, selosDaRota, trechosDaRota } from "./selos";
import {
  VISTA_PLANA_INICIAL, arrastarVista, fatorDaRoda, foiArraste, pontoNoTabuleiro, zoomNoPonto,
  type Ponto2, type VistaPlana,
} from "./navegacao";
import { opacidadeDaMancha } from "./trilhas";

const pontosSvg = (pontos: readonly Ponto[]) => pontos.map(([x, y]) => `${x},${1 - y}`).join(" ");

export function MapFlat({ objetivos, rota, trilhas = [], marcas = [], manchas = [], selecionado, onSelecionar, children }: MapViewProps) {
  const { area, vista, centralizar, gestos } = useNavegacaoPlana();
  const estilo: CSSProperties & Record<"--escala" | "--dx" | "--dy", number | string> = { "--escala": vista.escala, "--dx": `${vista.x}px`, "--dy": `${vista.y}px` };
  return (
    <div className="mapa-plano" ref={area} {...gestos}>
      <div className="mapa-plano-tabuleiro" style={estilo}>
        <img src="/data/mapa_2048.jpg" crossOrigin="anonymous" alt="Mapa do Dota 7.41" draggable={false} />
        <svg viewBox="0 0 1 1" preserveAspectRatio="none" className="mapa-plano-rota">
          {rota && trechosDaRota(rota).map((t, i) => <polyline key={`rota-${i}`} className={t.salto ? "salto" : undefined} points={pontosSvg(t.pontos)} />)}
          {rota && <polyline className="fuga-linha" points={pontosSvg(caminhoDaFuga(rota))} />}
          {trilhas.map((t) => (
            <polyline key={t.id} className={`trilha trilha-${t.lado}${t.destaque ? " destaque" : ""}`} points={pontosSvg(t.rastro)} />
          ))}
        </svg>
        {objetivos.map((o) => (
          <button key={o.id} aria-label={o.nome} title={o.nome}
            className={`marcador marcador-${o.tipo} lado-${o.lado}${o.id === selecionado ? " ativo" : ""}`}
            style={normToPercent([o.x, o.y])} onClick={() => onSelecionar(o.id)} />
        ))}
        {rota && selosDaRota(rota.passos).map((selo) => (
          <span key={selo.chave} className="passo-no-mapa" style={normToPercent([selo.x, selo.y])}><SeloDaRota selo={selo} /></span>
        ))}
        {rota?.fuga && <span className="rotulo-fuga" style={normToPercent([rota.fuga.x, rota.fuga.y])}>{rota.fuga.rotulo}</span>}
        {trilhas.map((t) => t.atual && (
          <span key={t.id} role="img" aria-label={t.rotulo} title={t.rotulo}
            className={`heroi-agora heroi-${t.lado}${t.destaque ? " destaque" : ""}`} style={normToPercent(t.atual)} />
        ))}
        {marcas.map((m) => (
          <span key={m.id} role="img" aria-label={m.rotulo} title={m.rotulo}
            className={`marca marca-${m.tipo} marca-${m.lado}`} style={normToPercent([m.x, m.y])} />
        ))}
        {manchas.length > 0 && (
          <div className="manchas" aria-label="Rota aproximada">
            {manchas.map((m) => (
              <span key={`${m.x}-${m.y}`} className="mancha" style={{ ...normToPercent([m.x, m.y]), opacity: opacidadeDaMancha(m.peso) }} />
            ))}
          </div>
        )}
      </div>
      <button className="botao-centralizar" onClick={centralizar}>Centralizar</button>
      {children}
    </div>
  );
}

type Toque = { atual: Ponto2; inicio: Ponto2 };

// Arrastar move, roda e pinça dão zoom no ponto. Um gesto que andou além do limiar não vira clique.
function useNavegacaoPlana() {
  const area = useRef<HTMLDivElement>(null);
  const [vista, setVista] = useState<VistaPlana>(VISTA_PLANA_INICIAL);
  const toques = useRef(new Map<number, Toque>());
  const arrastou = useRef(false);

  const noTabuleiro = (x: number, y: number) => {
    const elemento = area.current;
    return elemento ? pontoNoTabuleiro(x, y, elemento.getBoundingClientRect()) : null;
  };

  // A roda precisa de um ouvinte não passivo para impedir a rolagem da página enquanto dá zoom.
  useEffect(() => {
    const elemento = area.current;
    if (!elemento) return;
    const aoRolar = (e: WheelEvent) => {
      e.preventDefault();
      const ponto = pontoNoTabuleiro(e.clientX, e.clientY, elemento.getBoundingClientRect());
      setVista((v) => zoomNoPonto(v, fatorDaRoda(e.deltaY), ponto, ponto.lado));
    };
    elemento.addEventListener("wheel", aoRolar, { passive: false });
    return () => elemento.removeEventListener("wheel", aoRolar);
  }, []);

  const aoApertar = (e: PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    if (toques.current.size === 0) arrastou.current = false;
    const ponto = { x: e.clientX, y: e.clientY };
    toques.current.set(e.pointerId, { atual: ponto, inicio: ponto });
  };

  const aoMover = (e: PointerEvent<HTMLDivElement>) => {
    const toque = toques.current.get(e.pointerId);
    if (!toque) return;
    const antes = toque.atual;
    const depois = { x: e.clientX, y: e.clientY };
    const outro = [...toques.current.entries()].find(([id]) => id !== e.pointerId)?.[1];
    toque.atual = depois;
    if (!arrastou.current && foiArraste(Math.hypot(depois.x - toque.inicio.x, depois.y - toque.inicio.y))) {
      arrastou.current = true;
      // A captura só entra depois do limiar: antes dela, um toque curto ainda chega ao marcador como clique.
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    if (!arrastou.current) return;
    if (outro) return pincar(antes, depois, outro.atual);
    const lado = noTabuleiro(depois.x, depois.y)?.lado;
    if (lado) setVista((v) => arrastarVista(v, depois.x - antes.x, depois.y - antes.y, lado));
  };

  // Dois dedos: a distância entre eles dá o zoom e o meio deles anda junto com o mapa.
  const pincar = (antes: Ponto2, depois: Ponto2, fixo: Ponto2) => {
    const fator = Math.hypot(depois.x - fixo.x, depois.y - fixo.y) / Math.max(1, Math.hypot(antes.x - fixo.x, antes.y - fixo.y));
    const meioAntes = { x: (antes.x + fixo.x) / 2, y: (antes.y + fixo.y) / 2 };
    const meioDepois = { x: (depois.x + fixo.x) / 2, y: (depois.y + fixo.y) / 2 };
    const ponto = noTabuleiro(meioAntes.x, meioAntes.y);
    if (!ponto) return;
    setVista((v) => arrastarVista(zoomNoPonto(v, fator, ponto, ponto.lado), meioDepois.x - meioAntes.x, meioDepois.y - meioAntes.y, ponto.lado));
  };

  const aoSoltar = (e: PointerEvent<HTMLDivElement>) => { toques.current.delete(e.pointerId); };

  const aoClicar = (e: MouseEvent<HTMLDivElement>) => {
    if (!arrastou.current) return;
    e.stopPropagation();
    e.preventDefault();
    arrastou.current = false;
  };

  return {
    area,
    vista,
    centralizar: () => setVista(VISTA_PLANA_INICIAL),
    gestos: { onPointerDown: aoApertar, onPointerMove: aoMover, onPointerUp: aoSoltar, onPointerCancel: aoSoltar, onClickCapture: aoClicar },
  };
}
