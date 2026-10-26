// Geometria pura da prancheta: o que está debaixo do ponteiro, a ponta da seta, o zoom da câmera e a
// interpolação dos ícones entre dois passos.
import { ESPESSURAS, LADO_DO_QUADRO, raioDaPeca, type Alca, type Edicao, type Icone, type Passo, type Traco } from "./quadro";

type Xy = readonly [number, number];

export const TAMANHO_DO_TEXTO = 26;
/** Largura média de um caractere em relação à altura da fonte, para a caixa do texto. */
const LARGURA_DO_CARACTERE = 0.58;

const distancia = (a: Xy, b: Xy) => Math.hypot(a[0] - b[0], a[1] - b[1]);

export function distanciaAoSegmento(p: Xy, a: Xy, b: Xy): number {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const comprimento2 = dx * dx + dy * dy;
  if (comprimento2 === 0) return distancia(p, a);
  const f = Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / comprimento2));
  return distancia(p, [a[0] + dx * f, a[1] + dy * f]);
}

const distanciaAoCaminho = (p: Xy, pontos: readonly Xy[]) =>
  pontos.slice(1).reduce((menor, b, i) => Math.min(menor, distanciaAoSegmento(p, pontos[i] ?? b, b)), Infinity);

export function caixaDoTexto(traco: Extract<Traco, { tipo: "texto" }>) {
  const [x, y] = traco.ponto;
  return { x, y: y - TAMANHO_DO_TEXTO / 2, largura: traco.texto.length * TAMANHO_DO_TEXTO * LARGURA_DO_CARACTERE, altura: TAMANHO_DO_TEXTO };
}

export function tocaNoTraco(traco: Traco, p: Xy, tolerancia: number): boolean {
  if (traco.tipo === "texto") {
    const c = caixaDoTexto(traco);
    return p[0] >= c.x - tolerancia && p[0] <= c.x + c.largura + tolerancia && p[1] >= c.y - tolerancia && p[1] <= c.y + c.altura + tolerancia;
  }
  const folga = tolerancia + ESPESSURAS[traco.espessura] / 2;
  if (traco.tipo === "circulo") return Math.abs(distancia(p, traco.centro) - traco.raio) <= folga;
  return distanciaAoCaminho(p, traco.pontos) <= folga;
}

export const tocaNoIcone = (icone: Icone, p: Xy, escala: number) => distancia(p, icone.ponto) <= raioDaPeca(icone.peca, escala);

/** O item de cima primeiro: ícones ficam por cima dos traços e o último desenhado por cima dos anteriores. */
export function itemNoPonto(passo: Passo, p: Xy, opcoes: Readonly<{ tolerancia: number; escala: number; icones: boolean }>): string | null {
  const icone = opcoes.icones ? passo.icones.findLast((i) => tocaNoIcone(i, p, opcoes.escala)) : undefined;
  if (icone) return icone.id;
  return passo.tracos.findLast((t) => tocaNoTraco(t, p, opcoes.tolerancia))?.id ?? null;
}

type Caixa = Readonly<{ x: number; y: number; largura: number; altura: number }>;

export function caixaDoTraco(traco: Traco): Caixa {
  if (traco.tipo === "texto") return caixaDoTexto(traco);
  if (traco.tipo === "circulo") return { x: traco.centro[0] - traco.raio, y: traco.centro[1] - traco.raio, largura: traco.raio * 2, altura: traco.raio * 2 };
  const xs = traco.pontos.map((p) => p[0]);
  const ys = traco.pontos.map((p) => p[1]);
  const [x, y] = [Math.min(...xs), Math.min(...ys)];
  return { x, y, largura: Math.max(...xs) - x, altura: Math.max(...ys) - y };
}

export type AlcaNaTela = Readonly<{ alca: Alca; ponto: Xy }>;

/** Alças do traço selecionado: pontas da linha e da seta, borda do círculo (do lado que cabe no mapa) e, no resto, um pegador no canto. */
export function alcasDoTraco(traco: Traco): readonly AlcaNaTela[] {
  if (traco.tipo === "circulo") {
    const [cx, cy] = traco.centro;
    return [{ alca: "raio", ponto: [cx + traco.raio <= LADO_DO_QUADRO ? cx + traco.raio : cx - traco.raio, cy] }];
  }
  if (traco.tipo === "linha" || traco.tipo === "seta") {
    const [a, b] = [traco.pontos[0], traco.pontos.at(-1)];
    return a && b ? [{ alca: "inicio", ponto: a }, { alca: "fim", ponto: b }] : [];
  }
  const caixa = caixaDoTraco(traco);
  return [{ alca: "mover", ponto: [caixa.x, caixa.y] }];
}

export const alcaNoPonto = (traco: Traco, p: Xy, alcance: number): Alca | null =>
  alcasDoTraco(traco).findLast((a) => distancia(a.ponto, p) <= alcance)?.alca ?? null;

/** Um arrasto em curso: `base` é onde a alça (ou o item) estava, `desde` e `agora` são o ponteiro. */
export type Arrasto = Readonly<{ id: string; alca: Alca; base: Xy; desde: Xy; agora: Xy }>;

/** O gesto inteiro vira uma ação só, para um desfazer por arrasto; sem movimento não há ação. */
export function acaoDoArrasto(arrasto: Arrasto): Edicao | null {
  const dx = arrasto.agora[0] - arrasto.desde[0];
  const dy = arrasto.agora[1] - arrasto.desde[1];
  if (Math.round(dx) === 0 && Math.round(dy) === 0) return null;
  if (arrasto.alca === "mover") return { tipo: "transladar", id: arrasto.id, dx, dy };
  return { tipo: "ajustar", id: arrasto.id, alca: arrasto.alca, ponto: [arrasto.base[0] + dx, arrasto.base[1] + dy] };
}

/** Triângulo da ponta da seta no fim do segmento a→b, proporcional à espessura. */
export function pontaDaSeta(a: Xy, b: Xy, espessura: number): [Xy, Xy, Xy] {
  const angulo = Math.atan2(b[1] - a[1], b[0] - a[0]);
  const comprimento = 10 + espessura * 2.4;
  const abertura = Math.PI / 7;
  const lado = (s: number): Xy => [b[0] - comprimento * Math.cos(angulo + s * abertura), b[1] - comprimento * Math.sin(angulo + s * abertura)];
  return [b, lado(1), lado(-1)];
}

/** Recua o fim da linha da seta para a ponta não ficar com a linha aparecendo por baixo. */
export function fimDaHasteDaSeta(a: Xy, b: Xy, espessura: number): Xy {
  const total = distancia(a, b);
  const recuo = Math.min(total, (10 + espessura * 2.4) * 0.7);
  if (total === 0) return b;
  return [b[0] - ((b[0] - a[0]) / total) * recuo, b[1] - ((b[1] - a[1]) / total) * recuo];
}

export type Camera = Readonly<{ x: number; y: number; lado: number }>;
export const CAMERA_INTEIRA: Camera = { x: 0, y: 0, lado: LADO_DO_QUADRO };
const LADO_MINIMO = 125;

function enquadrar(camera: Camera): Camera {
  const lado = Math.min(LADO_DO_QUADRO, Math.max(LADO_MINIMO, camera.lado));
  const limite = LADO_DO_QUADRO - lado;
  return { lado, x: Math.min(limite, Math.max(0, camera.x)), y: Math.min(limite, Math.max(0, camera.y)) };
}

/** Zoom mantendo o ponto `foco` (em unidades do quadro) parado na tela; fator > 1 aproxima. */
export function zoomNoPonto(camera: Camera, fator: number, foco: Xy): Camera {
  const lado = Math.min(LADO_DO_QUADRO, Math.max(LADO_MINIMO, camera.lado / fator));
  const f = lado / camera.lado;
  return enquadrar({ lado, x: foco[0] - (foco[0] - camera.x) * f, y: foco[1] - (foco[1] - camera.y) * f });
}

export const arrastarCamera = (camera: Camera, dx: number, dy: number): Camera => enquadrar({ ...camera, x: camera.x - dx, y: camera.y - dy });

export const centroDaCamera = (camera: Camera): Xy => [camera.x + camera.lado / 2, camera.y + camera.lado / 2];

export type IconeNaTela = Readonly<{ icone: Icone; opacidade: number }>;

/**
 * Quadro intermediário entre dois passos (f de 0 a 1): ícone presente nos dois (mesmo id) anda em linha reta,
 * o que só existe no primeiro some e o que só existe no segundo aparece.
 */
export function interpolarPassos(de: Passo, para: Passo, f: number): IconeNaTela[] {
  const t = Math.min(1, Math.max(0, f));
  const destino = new Map(para.icones.map((i) => [i.id, i]));
  const andando = de.icones.map((icone): IconeNaTela => {
    const fim = destino.get(icone.id);
    if (!fim) return { icone, opacidade: 1 - t };
    const ponto: [number, number] = [icone.ponto[0] + (fim.ponto[0] - icone.ponto[0]) * t, icone.ponto[1] + (fim.ponto[1] - icone.ponto[1]) * t];
    return { icone: { ...fim, ponto }, opacidade: 1 };
  });
  const origem = new Set(de.icones.map((i) => i.id));
  const chegando = para.icones.filter((i) => !origem.has(i.id)).map((icone) => ({ icone, opacidade: t }));
  return [...andando, ...chegando];
}

const misturar = (a: Xy, b: Xy, t: number): [number, number] => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];

function misturarTraco(de: Traco, para: Traco, t: number): Traco {
  if (de.tipo === "circulo" && para.tipo === "circulo") return { ...para, centro: misturar(de.centro, para.centro, t), raio: de.raio + (para.raio - de.raio) * t };
  if (de.tipo === "texto" && para.tipo === "texto") return { ...para, ponto: misturar(de.ponto, para.ponto, t) };
  if (de.tipo === "circulo" || de.tipo === "texto" || para.tipo === "circulo" || para.tipo === "texto" || de.pontos.length !== para.pontos.length) return de;
  return { ...para, pontos: para.pontos.map((p, i) => misturar(de.pontos[i] ?? p, p, t)) };
}

/** Traços do passo de origem a caminho do próximo: o que tem o mesmo id nos dois passos (passo duplicado) anda junto com os ícones. */
export function interpolarTracos(de: Passo, para: Passo, f: number): Traco[] {
  const t = Math.min(1, Math.max(0, f));
  const destino = new Map(para.tracos.map((tr) => [tr.id, tr]));
  return de.tracos.map((traco) => {
    const fim = destino.get(traco.id);
    return fim ? misturarTraco(traco, fim, t) : traco;
  });
}

/** Aceleração e freio suaves (cúbica) para o movimento entre passos. */
export const suavizar = (f: number) => (f < 0.5 ? 4 * f ** 3 : 1 - (-2 * f + 2) ** 3 / 2);
