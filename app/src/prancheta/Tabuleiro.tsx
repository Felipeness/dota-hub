// O quadro: um único SVG com o viewBox em unidades do mapa (zoom e arraste mudam só o viewBox), a arte do mapa,
// as camadas, os traços e os ícones. Ponteiro serve para mouse, caneta e toque; dois dedos dão zoom e arrastam.
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent, type RefObject } from "react";
import type { Objetivo } from "../data/schemas";
import { acaoDoArrasto, alcaNoPonto, alcasDoTraco, arrastarCamera, caixaDoTraco, itemNoPonto, zoomNoPonto, type Arrasto, type Camera, type IconeNaTela } from "./geometria";
import { CamadasDoMapa, DefsDoQuadro, IconeSvg, RaioDaWard, TracoSvg, type Camadas } from "./Pecas";
import { editarItem, ESPESSURAS, LADO_DO_QUADRO, raioDaPeca, type Acao, type Cor, type Espessura, type NovoTraco, type Passo, type Peca, type Ponto, type Traco } from "./quadro";
import type { PontoDeWard } from "./wardsDosPros";

export type Ferramenta =
  | { tipo: "selecionar" | "livre" | "linha" | "seta" | "circulo" | "texto" | "borracha" }
  | { tipo: "colocar"; peca: Peca };
export type Opcoes = Readonly<{ raioDasWards: boolean; travarIcones: boolean; escala: number }>;

type Xy = [number, number];
type Gesto =
  | { tipo: "arrastarMapa"; ultimo: Xy }
  | { tipo: "arrastarItem"; arrasto: Arrasto }
  | { tipo: "desenhar" }
  | { tipo: "apagar" }
  | { tipo: "pinca"; distancia: number; meio: Xy };

type Props = Readonly<{
  passo: Passo;
  /** O que aparece: igual aos ícones do passo, ou o quadro intermediário enquanto reproduz. */
  icones: readonly IconeNaTela[];
  ferramenta: Ferramenta;
  cor: Cor;
  espessura: Espessura;
  opcoes: Opcoes;
  camadas: Camadas;
  objetivos: readonly Objetivo[];
  pontosDeWard: readonly PontoDeWard[];
  camera: Camera;
  onCamera: (mudar: (c: Camera) => Camera) => void;
  selecionado: string | null;
  onSelecionar: (id: string | null) => void;
  despachar: (acao: Acao) => void;
  svgRef: RefObject<SVGSVGElement | null>;
  bloqueado: boolean;
}>;

const DISTANCIA_MINIMA_DO_TRACO = 3;
const FATOR_DA_RODA = 1.15;
const TOLERANCIA_EM_PIXELS = 8;
/** O dedo cobre mais que o cursor: no toque a área de acerto dobra. */
const FATOR_DO_TOQUE = 2;
/** Tamanho da alça na tela como fração do lado visível do mapa (acompanha o zoom). */
const ALCA_POR_LADO = 0.009;

const CURSOR: Readonly<Record<Ferramenta["tipo"], string>> = {
  selecionar: "grab", livre: "crosshair", linha: "crosshair", seta: "crosshair", circulo: "crosshair", texto: "text", borracha: "cell", colocar: "copy",
};

function rascunhoNovo(ferramenta: Ferramenta, p: Ponto, cor: Cor, espessura: Espessura): NovoTraco | null {
  switch (ferramenta.tipo) {
    case "livre": case "linha": case "seta": return { tipo: ferramenta.tipo, pontos: [p, p], cor, espessura };
    case "circulo": return { tipo: "circulo", centro: p, raio: 1, cor, espessura };
    default: return null;
  }
}

function esticar(rascunho: NovoTraco, p: Ponto): NovoTraco {
  if (rascunho.tipo === "circulo") return { ...rascunho, raio: Math.hypot(p[0] - rascunho.centro[0], p[1] - rascunho.centro[1]) };
  if (rascunho.tipo === "texto") return rascunho;
  if (rascunho.tipo !== "livre") return { ...rascunho, pontos: [rascunho.pontos[0] ?? p, p] };
  const ultimo = rascunho.pontos.at(-1) ?? p;
  if (Math.hypot(p[0] - ultimo[0], p[1] - ultimo[1]) < DISTANCIA_MINIMA_DO_TRACO) return rascunho;
  return { ...rascunho, pontos: [...rascunho.pontos, p] };
}

function valeGuardar(traco: NovoTraco): boolean {
  if (traco.tipo === "circulo") return traco.raio >= 4;
  if (traco.tipo === "texto") return true;
  const [a, b] = [traco.pontos[0], traco.pontos.at(-1)];
  return traco.tipo === "livre" ? traco.pontos.length > 2 : !!a && !!b && Math.hypot(b[0] - a[0], b[1] - a[1]) >= 4;
}

const meioEDistancia = (a: Xy, b: Xy) => ({ meio: [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2] as Xy, distancia: Math.hypot(a[0] - b[0], a[1] - b[1]) });

export function Tabuleiro(props: Props) {
  const { passo, icones, ferramenta, cor, espessura, opcoes, camadas, objetivos, pontosDeWard, camera, onCamera, selecionado, onSelecionar, despachar, svgRef, bloqueado } = props;
  const [rascunho, setRascunho] = useState<NovoTraco | null>(null);
  const [arrasto, setArrasto] = useState<Arrasto | null>(null);
  const [texto, setTexto] = useState<{ ponto: Ponto; esquerda: number; topo: number } | null>(null);
  const toques = useRef(new Map<number, Xy>());
  const gesto = useRef<Gesto | null>(null);

  const noQuadro = (x: number, y: number): Ponto | null => {
    const matriz = svgRef.current?.getScreenCTM();
    if (!matriz) return null;
    const p = new DOMPoint(x, y).matrixTransform(matriz.inverse());
    return [p.x, p.y];
  };
  const unidadesPorPixel = () => {
    const caixa = svgRef.current?.getBoundingClientRect();
    return caixa ? camera.lado / Math.max(1, Math.min(caixa.width, caixa.height)) : 1;
  };

  // A roda precisa de ouvinte não passivo para dar zoom sem rolar a página.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const aoRolar = (e: WheelEvent) => {
      e.preventDefault();
      const matriz = svg.getScreenCTM();
      if (!matriz) return;
      const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(matriz.inverse());
      onCamera((c) => zoomNoPonto(c, e.deltaY < 0 ? FATOR_DA_RODA : 1 / FATOR_DA_RODA, [p.x, p.y]));
    };
    svg.addEventListener("wheel", aoRolar, { passive: false });
    return () => svg.removeEventListener("wheel", aoRolar);
  }, [svgRef, onCamera]);

  const tolerancia = (tipoDoPonteiro: string) => TOLERANCIA_EM_PIXELS * unidadesPorPixel() * (tipoDoPonteiro === "touch" ? FATOR_DO_TOQUE : 1);
  const itemEm = (p: Ponto, tipoDoPonteiro: string) =>
    itemNoPonto(passo, p, { tolerancia: tolerancia(tipoDoPonteiro), escala: opcoes.escala, icones: !opcoes.travarIcones });

  const apagarEm = (p: Ponto, tipoDoPonteiro: string) => {
    const id = itemEm(p, tipoDoPonteiro);
    if (id) despachar({ tipo: "remover", id });
  };

  const comecarPinca = () => {
    const [a, b] = [...toques.current.values()];
    if (!a || !b) return;
    setRascunho(null);
    setArrasto(null);
    gesto.current = { tipo: "pinca", ...meioEDistancia(a, b) };
  };

  const aoApertar = (e: PointerEvent<SVGSVGElement>) => {
    if (bloqueado || (e.pointerType === "mouse" && e.button !== 0)) return;
    // Sem o mousedown de compatibilidade: não seleciona texto ao arrastar e não tira o foco do campo de texto que abre.
    e.preventDefault();
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    toques.current.set(e.pointerId, [e.clientX, e.clientY]);
    e.currentTarget.setPointerCapture(e.pointerId);
    if (toques.current.size === 2) return comecarPinca();
    const p = noQuadro(e.clientX, e.clientY);
    if (!p) return;
    comecarGesto(p, e);
  };

  const comecarGesto = (p: Ponto, e: PointerEvent<SVGSVGElement>) => {
    if (ferramenta.tipo === "colocar") return despachar({ tipo: "colocar", peca: ferramenta.peca, ponto: p });
    if (ferramenta.tipo === "texto") {
      const caixa = e.currentTarget.getBoundingClientRect();
      return setTexto({ ponto: p, esquerda: e.clientX - caixa.left, topo: e.clientY - caixa.top });
    }
    if (ferramenta.tipo === "borracha") {
      gesto.current = { tipo: "apagar" };
      return apagarEm(p, e.pointerType);
    }
    if (ferramenta.tipo === "selecionar") return comecarSelecao(p, [e.clientX, e.clientY], e.pointerType);
    const novo = rascunhoNovo(ferramenta, p, cor, espessura);
    if (novo) {
      gesto.current = { tipo: "desenhar" };
      setRascunho(novo);
    }
  };

  const arrastar = (novo: Arrasto) => {
    gesto.current = { tipo: "arrastarItem", arrasto: novo };
    setArrasto(novo);
  };

  /** Alça do traço já selecionado primeiro; depois o item debaixo do ponteiro; o mapa só anda no vazio. */
  const comecarSelecao = (p: Ponto, tela: Xy, tipoDoPonteiro: string) => {
    const jaSelecionado = passo.tracos.find((t) => t.id === selecionado);
    const alcance = tolerancia(tipoDoPonteiro) + camera.lado * ALCA_POR_LADO;
    const pegador = jaSelecionado ? alcasDoTraco(jaSelecionado).find((a) => a.alca === alcaNoPonto(jaSelecionado, p, alcance)) : undefined;
    if (jaSelecionado && pegador) return arrastar({ id: jaSelecionado.id, alca: pegador.alca, base: pegador.ponto, desde: p, agora: p });
    const id = itemEm(p, tipoDoPonteiro);
    onSelecionar(id);
    if (id) return arrastar({ id, alca: "mover", base: p, desde: p, agora: p });
    gesto.current = { tipo: "arrastarMapa", ultimo: tela };
  };

  const aoMover = (e: PointerEvent<SVGSVGElement>) => {
    if (!toques.current.has(e.pointerId)) return;
    toques.current.set(e.pointerId, [e.clientX, e.clientY]);
    const atual = gesto.current;
    if (!atual) return;
    if (atual.tipo === "pinca") return pincar(atual);
    if (atual.tipo === "arrastarMapa") {
      const upp = unidadesPorPixel();
      onCamera((c) => arrastarCamera(c, (e.clientX - atual.ultimo[0]) * upp, (e.clientY - atual.ultimo[1]) * upp));
      gesto.current = { ...atual, ultimo: [e.clientX, e.clientY] };
      return;
    }
    const p = noQuadro(e.clientX, e.clientY);
    if (!p) return;
    if (atual.tipo === "apagar") return apagarEm(p, e.pointerType);
    if (atual.tipo === "desenhar") return setRascunho((r) => (r ? esticar(r, p) : r));
    arrastar({ ...atual.arrasto, agora: p });
  };

  const pincar = (atual: Extract<Gesto, { tipo: "pinca" }>) => {
    const [a, b] = [...toques.current.values()];
    if (!a || !b) return;
    const agora = meioEDistancia(a, b);
    const foco = noQuadro(atual.meio[0], atual.meio[1]);
    const upp = unidadesPorPixel();
    if (foco) onCamera((c) => arrastarCamera(zoomNoPonto(c, agora.distancia / Math.max(1, atual.distancia), foco), (agora.meio[0] - atual.meio[0]) * upp, (agora.meio[1] - atual.meio[1]) * upp));
    gesto.current = { tipo: "pinca", ...agora };
  };

  const aoSoltar = (e: PointerEvent<SVGSVGElement>) => {
    toques.current.delete(e.pointerId);
    const atual = gesto.current;
    gesto.current = null;
    const edicao = atual?.tipo === "arrastarItem" ? acaoDoArrasto(atual.arrasto) : null;
    if (edicao) despachar(edicao);
    if (atual?.tipo === "desenhar" && rascunho && valeGuardar(rascunho)) despachar({ tipo: "desenhar", traco: rascunho });
    setRascunho(null);
    setArrasto(null);
  };

  const guardarTexto = (valor: string) => {
    const limpo = valor.trim().slice(0, 120);
    if (texto && limpo) despachar({ tipo: "desenhar", traco: { tipo: "texto", ponto: texto.ponto, texto: limpo, cor } });
    setTexto(null);
  };
  const teclaNoTexto = (e: KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    // Quem guarda é o blur, para Enter e clique fora não guardarem duas vezes.
    if (e.key === "Escape") e.currentTarget.value = "";
    if (e.key === "Enter" || e.key === "Escape") e.currentTarget.blur();
  };

  // A prévia do arrasto passa pela mesma edição pura que o reducer aplica ao soltar.
  const edicaoEmCurso = arrasto ? acaoDoArrasto(arrasto) : null;
  const passoNaTela = edicaoEmCurso ? editarItem(passo, edicaoEmCurso) : passo;
  const iconeSelecionado = passoNaTela.icones.find((i) => i.id === selecionado);
  const tracoSelecionado = passoNaTela.tracos.find((t) => t.id === selecionado);
  const iconeArrastado = edicaoEmCurso ? passoNaTela.icones.find((i) => i.id === edicaoEmCurso.id) : undefined;
  const naTela = iconeArrastado ? icones.map((i) => (i.icone.id === iconeArrastado.id ? { ...i, icone: iconeArrastado } : i)) : icones;

  return (
    <div className="pr-tabuleiro">
      <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox={`${camera.x} ${camera.y} ${camera.lado} ${camera.lado}`}
        role="application" aria-label="Prancheta: mapa para desenhar a jogada" aria-roledescription="prancheta"
        style={{ cursor: bloqueado ? "default" : CURSOR[ferramenta.tipo] }}
        onPointerDown={aoApertar} onPointerMove={aoMover} onPointerUp={aoSoltar} onPointerCancel={aoSoltar}>
        <DefsDoQuadro />
        <image href="/data/mapa_2048.jpg" x={0} y={0} width={LADO_DO_QUADRO} height={LADO_DO_QUADRO} preserveAspectRatio="none" />
        <CamadasDoMapa camadas={camadas} objetivos={objetivos} pontosDeWard={pontosDeWard} />
        {opcoes.raioDasWards && naTela.map(({ icone }) => <RaioDaWard key={`raio-${icone.id}`} icone={icone} />)}
        {passoNaTela.tracos.map((t) => <TracoSvg key={t.id} traco={t} />)}
        {tracoSelecionado && <SelecaoDoTraco traco={tracoSelecionado} tamanho={camera.lado * ALCA_POR_LADO} />}
        {rascunho && <TracoSvg traco={rascunho} opacidade={0.8} />}
        {naTela.map(({ icone, opacidade }) => <IconeSvg key={icone.id} icone={icone} escala={opcoes.escala} opacidade={opacidade} />)}
        {iconeSelecionado && (
          <circle data-exportar="nao" cx={iconeSelecionado.ponto[0]} cy={iconeSelecionado.ponto[1]}
            r={raioDaPeca(iconeSelecionado.peca, opcoes.escala) + 8} fill="none" stroke="#ffd27a" strokeWidth={2.5} strokeDasharray="5 4" pointerEvents="none" />
        )}
      </svg>
      {texto && (
        <input className="pr-texto-no-mapa" style={{ left: texto.esquerda, top: texto.topo }} aria-label="Texto no mapa (Enter guarda, Esc cancela)"
          placeholder="Escreva e Enter" maxLength={120} autoFocus onKeyDown={teclaNoTexto} onBlur={(e) => guardarTexto(e.currentTarget.value)} />
      )}
    </div>
  );
}

const COR_DA_SELECAO = "#ffd27a";

/** Caixa tracejada em volta do traço selecionado e as alças para mover ou redimensionar; não vai para o PNG. */
function SelecaoDoTraco({ traco, tamanho }: { traco: Traco; tamanho: number }) {
  const caixa = caixaDoTraco(traco);
  const folga = (traco.tipo === "texto" ? 5 : ESPESSURAS[traco.espessura] / 2) + tamanho;
  return (
    <g data-exportar="nao" pointerEvents="none">
      <rect x={caixa.x - folga} y={caixa.y - folga} width={caixa.largura + folga * 2} height={caixa.altura + folga * 2}
        fill="none" stroke={COR_DA_SELECAO} strokeWidth={1.5} strokeDasharray="6 4" vectorEffect="non-scaling-stroke" />
      {alcasDoTraco(traco).map(({ alca, ponto }) => (
        <rect key={alca} x={ponto[0] - tamanho} y={ponto[1] - tamanho} width={tamanho * 2} height={tamanho * 2} rx={tamanho * 0.3}
          fill={COR_DA_SELECAO} stroke="#1a1408" strokeWidth={1.5} vectorEffect="non-scaling-stroke" />
      ))}
    </g>
  );
}
