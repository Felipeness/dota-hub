import { detalheDaAmostraCompleta } from "./amostras/amostraCompleta";
import type { Lance } from "./lancesDecisivos";
import type { Achado } from "./modelo";
import { MAPA_INTEIRO, PAUSA_NO_LANCE_MS, avancar, cameraPara, quadroEm, velocidadeEm, type Relogio } from "./replayDosLances";

const lance = (t: number): Lance => ({
  t, impacto: 1, relacionados: [],
  achado: { id: `l-${t}`, tipo: "erro", minuto: t / 60, peso: "pesou", titulo: "", oQueAconteceu: "", oQueFazer: null, porque: "", fontes: [], evidencias: {} } satisfies Achado,
});
const LANCES = [lance(600), lance(1200)];
const tocando = (t: number): Relogio => ({ t, tocando: true, pausaRestanteMs: 0, ultimoLance: null });

describe("velocidadeEm", () => {
  it.each([
    { t: 0, velocidade: 48 }, { t: 500, velocidade: 24 }, { t: 560, velocidade: 12 }, { t: 585, velocidade: 5 },
    { t: 595, velocidade: 2 }, { t: 1300, velocidade: 48 },
  ])("a $t s, ${velocidade}x", ({ t, velocidade }) => {
    expect(velocidadeEm(t, LANCES)).toBe(velocidade);
  });
});

describe("avancar", () => {
  it.each([
    { caso: "anda pela velocidade", antes: tocando(0), depois: { t: expect.closeTo(4.8), pausaRestanteMs: 0 } },
    { caso: "para em cima do lance e segura a pausa", antes: tocando(599.9), depois: { t: 600, pausaRestanteMs: PAUSA_NO_LANCE_MS, ultimoLance: 600 } },
    { caso: "na pausa não anda", antes: { ...tocando(600), pausaRestanteMs: 500, ultimoLance: 600 }, depois: { t: 600, pausaRestanteMs: 400 } },
    { caso: "depois da pausa segue para o próximo", antes: { ...tocando(600), ultimoLance: 600 }, depois: { t: expect.closeTo(600.2), pausaRestanteMs: 0 } },
    { caso: "para no fim", antes: tocando(1999.9), depois: { t: 2000, tocando: false } },
    { caso: "parado não muda", antes: { ...tocando(10), tocando: false }, depois: { t: 10 } },
  ])("$caso", ({ antes, depois }) => {
    expect(avancar(antes, 100, LANCES, 2000)).toMatchObject(depois);
  });
});

describe("cameraPara", () => {
  it.each([
    { foco: null, camera: MAPA_INTEIRO },
    { foco: [0.5, 0.5] as [number, number], camera: { centro: [0.5, 0.5], zoom: 2.6 } },
    { foco: [0.02, 0.99] as [number, number], camera: { centro: [0.5 / 2.6, 1 - 0.5 / 2.6], zoom: 2.6 } },
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

  it("com trajetos, desenha os heróis com rastro e marca o próprio", () => {
    const quadro = quadroEm(detalhe.panorama, 600, eu, { posicaoEm: (slot, t) => [slot / 200, t / 3000] });
    expect(quadro.herois).toHaveLength(10);
    expect(quadro.herois.filter((h) => h.eu).map((h) => h.nome)).toEqual(["Medusa"]);
    expect(quadro.herois[0]?.rastro.length).toBe(25);
  });
});
