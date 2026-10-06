import {
  ESCALA_MAXIMA, LIMIAR_ARRASTE_PX, arrastarVista, caixaDoFoco, distanciaParaEnquadrar, foiArraste,
  pontoNoTabuleiro, posicaoDaCamera, prenderAlvo, prenderVistaPlana, zoomNoPonto,
} from "./navegacao";

describe("enquadramento da câmera 3D", () => {
  it("bate com a vista calibrada antes no quadro quadrado (uns 150 de distância)", () => {
    expect(distanciaParaEnquadrar({ tamanho: 100, fovVerticalGraus: 42, aspecto: 1 })).toBeCloseTo(150, -1);
  });

  it.each([
    { aspecto: 16 / 9, descricao: "quadro largo usa a altura" },
    { aspecto: 390 / 600, descricao: "quadro em pé usa a largura" },
  ])("$descricao: a borda de baixo e os cantos cabem no quadro", ({ aspecto }) => {
    const fov = 42;
    const inclinacao = (14 * Math.PI) / 180;
    const d = distanciaParaEnquadrar({ tamanho: 100, fovVerticalGraus: fov, aspecto, inclinacao });
    const tanV = Math.tan((fov * Math.PI) / 360);
    const profundidade = d - 50 * Math.sin(inclinacao);
    expect((50 * Math.cos(inclinacao)) / profundidade).toBeLessThanOrEqual(tanV);
    expect(50 / profundidade).toBeLessThanOrEqual(tanV * aspecto);
  });

  it("quadro em pé afasta mais que o quadrado", () => {
    const quadrado = distanciaParaEnquadrar({ tamanho: 100, fovVerticalGraus: 42, aspecto: 1 });
    expect(distanciaParaEnquadrar({ tamanho: 100, fovVerticalGraus: 42, aspecto: 0.5 })).toBeGreaterThan(quadrado);
  });

  it("posiciona a câmera atrás e acima do alvo, na distância pedida", () => {
    const [x, y, z] = posicaoDaCamera({ x: 10, y: -5 }, 100);
    expect(x).toBe(10);
    expect(Math.hypot(y, z + 5)).toBeCloseTo(100);
    expect(z).toBeGreaterThan(-5);
  });

  it.each([
    { alvo: { x: 0, y: 0 }, esperado: { x: 0, y: 0 } },
    { alvo: { x: 80, y: -10 }, esperado: { x: 50, y: -10 } },
    { alvo: { x: -70, y: 60 }, esperado: { x: -50, y: 50 } },
  ])("prende o alvo $alvo dentro do tabuleiro", ({ alvo, esperado }) => {
    expect(prenderAlvo(alvo, 50)).toEqual(esperado);
  });

  it("caixa do foco cobre a rota com folga e cai no tabuleiro inteiro sem pontos", () => {
    expect(caixaDoFoco([], 100)).toEqual({ centro: { x: 0, y: 0 }, lado: 100 });
    const caixa = caixaDoFoco([[0.7, 0.2], [0.8, 0.3]], 100);
    expect(caixa.centro.x).toBeCloseTo(25);
    expect(caixa.centro.y).toBeCloseTo(25);
    expect(caixa.lado).toBe(40);
  });
});

describe("navegação do mapa plano", () => {
  const lado = 800;

  it("zoom na roda mantém o ponto sob o cursor", () => {
    const ponto = { x: 260, y: 290 };
    const antes = { escala: 1, x: 0, y: 0 };
    const depois = zoomNoPonto(antes, 2, ponto, lado);
    const noMapaAntes = { x: (ponto.x - antes.x) / antes.escala, y: (ponto.y - antes.y) / antes.escala };
    const noMapaDepois = { x: (ponto.x - depois.x) / depois.escala, y: (ponto.y - depois.y) / depois.escala };
    expect(depois.escala).toBe(2);
    expect(noMapaDepois.x).toBeCloseTo(noMapaAntes.x);
    expect(noMapaDepois.y).toBeCloseTo(noMapaAntes.y);
  });

  it("limita a escala entre 1 e o máximo", () => {
    expect(zoomNoPonto({ escala: 1, x: 0, y: 0 }, 0.3, { x: 0, y: 0 }, lado).escala).toBe(1);
    expect(zoomNoPonto({ escala: 6, x: 0, y: 0 }, 4, { x: 0, y: 0 }, lado).escala).toBe(ESCALA_MAXIMA);
  });

  it("arraste não deixa o centro da área sair de cima do tabuleiro", () => {
    expect(arrastarVista({ escala: 1, x: 0, y: 0 }, 5000, -5000, lado)).toEqual({ escala: 1, x: 400, y: -400 });
    expect(prenderVistaPlana({ escala: 2, x: -5000, y: 0 }, lado).x).toBe(400 - 1600);
  });

  it("converte o ponto da tela para o canto do tabuleiro centralizado", () => {
    const ponto = pontoNoTabuleiro(700, 150, { left: 100, top: 50, width: 1200, height: 800 });
    expect(ponto).toEqual({ x: 400, y: 100, lado: 800 });
  });

  it.each([
    { deslocamento: 0, arraste: false },
    { deslocamento: LIMIAR_ARRASTE_PX, arraste: false },
    { deslocamento: LIMIAR_ARRASTE_PX + 1, arraste: true },
  ])("deslocamento de $deslocamento px conta como arraste: $arraste", ({ deslocamento, arraste }) => {
    expect(foiArraste(deslocamento)).toBe(arraste);
  });
});
