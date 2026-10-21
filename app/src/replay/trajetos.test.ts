import { afterEach, describe, expect, it, vi } from "vitest";
import { decodificarXY, pedirTrajetos, posicaoEm, type TrilhaDoHeroi, type Trajetos } from "./trajetos";

// grade 57 vira 0 e 199 vira 1 no minimapa
const G0 = 57 * 4;
const G1 = 199 * 4;

describe("decodificarXY", () => {
  it.each([
    { nome: "vazio", xy: [], esperado: [] },
    { nome: "primeiro ponto é absoluto", xy: [G0, G1], esperado: [[0, 1]] },
    { nome: "depois soma os deltas", xy: [G0, G0, 142, 284, 142, -284], esperado: [[0, 0], [0.25, 0.5], [0.5, 0]] },
  ])("$nome", ({ xy, esperado }) => {
    expect(decodificarXY(xy, 4)).toEqual(esperado);
  });
});

describe("posicaoEm", () => {
  const trilha: TrilhaDoHeroi = { slot: 3, heroi: "medusa", time: 2, t0: -2, pontos: [[0, 0], [0.5, 0.25], [1, 1]] };

  it.each([
    { t: -2, esperado: [0, 0] },
    { t: 0, esperado: [1, 1] },
    { t: -1.5, esperado: [0.25, 0.125] },
    { t: -3, esperado: null },
    { t: 0.5, esperado: null },
  ])("no segundo $t devolve $esperado", ({ t, esperado }) => {
    expect(posicaoEm(trilha, t)).toEqual(esperado);
  });
});

const trajetosValidos: Trajetos = {
  v: 1, match: 1, build: 6962, escala: 4, t0: -1, duracao: 0,
  herois: [{ slot: 0, heroi: "axe", time: 2, xy: [G0, G0, 1, 1], mortes: [], visto: [[-1, 0]], niveis: [], lh: [0] }],
  wards: [{ t: -1, tipo: "obs", time: 2, x: G0, y: G0 }],
  smokes: [], mortes: [], torres: [], totais: { wards: 1, smokes: 0, mortes: 0 },
};

const resposta = (status: number, corpo: unknown) => Promise.resolve(new Response(JSON.stringify(corpo), { status }));

describe("pedirTrajetos", () => {
  afterEach(() => vi.unstubAllGlobals());

  it.each([
    { nome: "devolve os trajetos", fetch: () => resposta(200, trajetosValidos), esperado: { ok: true, trajetos: trajetosValidos } },
    { nome: "repassa o código do servidor", fetch: () => resposta(404, { code: "replay_indisponivel", message: "expirou" }), esperado: { ok: false, erro: "replay_indisponivel", detalhe: "expirou" } },
    { nome: "código desconhecido vira interno", fetch: () => resposta(500, { code: "novo", message: "x" }), esperado: { ok: false, erro: "interno", detalhe: "x" } },
    { nome: "corpo fora do formato", fetch: () => resposta(200, { v: 2 }), esperado: expect.objectContaining({ ok: false, erro: "formato" }) },
    { nome: "rede caída", fetch: () => Promise.reject(new TypeError("failed to fetch")), esperado: expect.objectContaining({ ok: false, erro: "sem_conexao" }) },
  ])("$nome", async ({ fetch, esperado }) => {
    vi.stubGlobal("fetch", vi.fn(fetch));
    expect(await pedirTrajetos("9046905170")).toEqual(esperado);
  });

  it("recusa id que não é só dígito sem chamar a rede", async () => {
    const fetch = vi.fn();
    vi.stubGlobal("fetch", fetch);
    expect(await pedirTrajetos("12ab")).toEqual(expect.objectContaining({ ok: false, erro: "match_invalido" }));
    expect(fetch).not.toHaveBeenCalled();
  });

  it("chama a function URL com o id", async () => {
    const fetch = vi.fn(() => resposta(200, trajetosValidos));
    vi.stubGlobal("fetch", fetch);
    await pedirTrajetos("9046905170");
    expect(fetch).toHaveBeenCalledWith(expect.stringMatching(/\?match=9046905170$/), expect.objectContaining({ signal: expect.any(AbortSignal) }));
  });
});
