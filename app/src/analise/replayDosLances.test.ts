import { detalheDaAmostraCompleta } from "./amostras/amostraCompleta";
import type { Lance } from "./lancesDecisivos";
import type { Achado } from "./modelo";
import { MAPA_INTEIRO, PAUSA_NO_LANCE_MS, aproximarCamera, avancar, cameraPara, mapaDosTrajetos, quadroEm, velocidadeEm, type Relogio } from "./replayDosLances";

const lance = (t: number): Lance => ({
  t, impacto: 1, relacionados: [],
  achado: { id: `l-${t}`, tipo: "erro", minuto: t / 60, peso: "pesou", titulo: "", oQueAconteceu: "", oQueFazer: null, porque: "", fontes: [], evidencias: {} } satisfies Achado,
});
const LANCES = [lance(600), lance(1200)];
const tocando = (t: number): Relogio => ({ t, tocando: true, pausaRestanteMs: 0, ultimoLance: null });

describe("velocidadeEm", () => {
  it.each([
    { t: 0, escolhida: 30, velocidade: 30 }, { t: 579, escolhida: 30, velocidade: 30 }, { t: 580, escolhida: 30, velocidade: 5 },
    { t: 599, escolhida: 60, velocidade: 5 }, { t: 590, escolhida: 1, velocidade: 1 }, { t: 1300, escolhida: 15, velocidade: 15 },
  ] as const)("a $t s com $escolhida x escolhida, ${velocidade}x", ({ t, escolhida, velocidade }) => {
    expect(velocidadeEm(t, LANCES, escolhida)).toBe(velocidade);
  });
});

describe("avancar", () => {
  it.each([
    { caso: "anda pela velocidade, contínuo", antes: tocando(0), depois: { t: expect.closeTo(3), pausaRestanteMs: 0 } },
    { caso: "para no segundo exato do lance e segura a pausa", antes: tocando(599.9), depois: { t: 600, pausaRestanteMs: PAUSA_NO_LANCE_MS, ultimoLance: 600 } },
    { caso: "na pausa não anda", antes: { ...tocando(600), pausaRestanteMs: 500, ultimoLance: 600 }, depois: { t: 600, pausaRestanteMs: 400 } },
    { caso: "depois da pausa segue a 30x", antes: { ...tocando(600), ultimoLance: 600 }, depois: { t: expect.closeTo(603), pausaRestanteMs: 0 } },
    { caso: "para no fim", antes: tocando(1999.9), depois: { t: 2000, tocando: false } },
    { caso: "parado não muda", antes: { ...tocando(10), tocando: false }, depois: { t: 10 } },
  ])("$caso", ({ antes, depois }) => {
    expect(avancar(antes, { ms: 100, lances: LANCES, fim: 2000, velocidade: 30 })).toMatchObject(depois);
  });
});

describe("aproximarCamera", () => {
  it("anda parte do caminho a cada quadro, sem passar do alvo, e chega", () => {
    const alvo = { centro: [0.2, 0.8] as [number, number], zoom: 2.7 };
    const umQuadro = aproximarCamera(MAPA_INTEIRO, alvo, 16);
    expect(umQuadro.zoom).toBeGreaterThan(1);
    expect(umQuadro.zoom).toBeLessThan(2.7);
    const depoisDeTresSegundos = Array.from({ length: 190 }).reduce<typeof umQuadro>((c) => aproximarCamera(c, alvo, 16), MAPA_INTEIRO);
    expect(depoisDeTresSegundos).toEqual(alvo);
  });
});

describe("cameraPara", () => {
  it.each([
    { foco: null, camera: MAPA_INTEIRO },
    { foco: [0.5, 0.5] as [number, number], camera: { centro: [0.5, 0.5], zoom: 2.7 } },
    { foco: [0.02, 0.99] as [number, number], camera: { centro: [0.5 / 2.7, 1 - 0.5 / 2.7], zoom: 2.7 } },
  ])("foco $foco", ({ foco, camera }) => {
    expect(cameraPara(foco)).toEqual(camera);
  });
});

describe("quadroEm na partida 9046905170", () => {
  const detalhe = detalheDaAmostraCompleta();
  const eu = { lado: detalhe.lado, slot: detalhe.slot };

  it("aos 31:38 mostra a morte da Medusa na luta, o feed e as torres já caídas", () => {
    const quadro = quadroEm(detalhe.panorama, 31 * 60 + 38, eu, null);
    expect(quadro.mortes.some((m) => m.minha)).toBe(true);
    expect(quadro.feed[0]).toMatchObject({ vitima: "Medusa", matador: "Ursa" });
    expect(quadro.feed.length).toBeLessThanOrEqual(4);
    expect(quadro.torresCaidas.has("rad_mid_t2")).toBe(true);
    expect(quadro.torresCaidas.has("rad_mid_t3")).toBe(false);
    expect(quadro.herois).toEqual([]);
  });

  it("só wards ativas no instante", () => {
    const t = 20 * 60;
    expect(quadroEm(detalhe.panorama, t, eu, null).wards.every((w) => w.de <= t && t < w.ate)).toBe(true);
  });

  it("com os trajetos do replay: heróis com rastro, inimigo não visto apagado, morte na posição real e smoke", () => {
    const parado = (x: number, y: number) => [x, y, ...Array.from({ length: 2 * 700 }, () => 0)];
    const heroi = (slot: number, time: 2 | 3, xy: number[], visto: [number, number][]) => ({ slot, heroi: "", time, xy, mortes: [], visto, niveis: [], lh: [] });
    const trajetos = mapaDosTrajetos({
      v: 1, match: 9046905170, build: 6962, escala: 4, t0: 0, duracao: 700,
      herois: [heroi(3, 2, parado(600, 600), []), heroi(128, 3, parado(700, 700), [[0, 100]])],
      wards: [], torres: [],
      smokes: [{ t: 590, slot: 128, time: 3, x: 700, y: 700, herois: [{ slot: 128, ini: 590 }] }],
      mortes: [{ t: 598, vitima: 3, assassino: 128, x: 600, y: 600 }],
      totais: { wards: 0, smokes: 1, mortes: 1 },
    });
    const quadro = quadroEm(detalhe.panorama, 600, eu, trajetos);
    expect(quadro.herois.map((h) => [h.nome, h.eu, h.escondido])).toEqual([["Medusa", true, false], ["Necrophos", false, true]]);
    expect(quadro.herois[0]?.rastro).toHaveLength(22);
    expect(quadro.feed[0]).toMatchObject({ vitima: "Medusa", matador: "Necrophos", t: 598 });
    expect(quadro.mortes).toEqual([{ t: 598, ponto: [(150 - 57) / 142, (150 - 57) / 142], lado: "radiant", minha: true, idade: 2 }]);
    expect(quadro.smokes).toMatchObject([{ t: 590, lado: "dire", nomes: ["Necrophos"] }]);
  });
});
