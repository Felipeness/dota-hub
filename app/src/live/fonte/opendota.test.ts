import { z } from "zod";
import { REGRAS_OPENDOTA, criarFila, type Relogio } from "../fila";
import type { Registro } from "../registro";
import { BASE_OPENDOTA, criarFonte } from "./opendota";

const MEIO_DIA = Date.UTC(2026, 9, 6, 12, 0, 0);
const schema = z.object({ win: z.number() });
const resposta = (status: number, corpo: string) => new Response(corpo, { status });
const LIMITE_MINUTO = () => resposta(429, '{"error":"minute rate limit exceeded"}');

function montar(respostas: Array<Response | Error>, { online = true } = {}) {
  let agora = MEIO_DIA;
  const relogio: Relogio = { agora: () => agora, dormir: async (ms) => { agora += ms; } };
  const fila = criarFila(REGRAS_OPENDOTA, relogio);
  const pedidos: Array<{ url: string; init: RequestInit | undefined }> = [];
  const buscar: typeof fetch = async (url, init) => {
    pedidos.push({ url: String(url), init });
    const proxima = respostas.shift();
    if (proxima === undefined) throw new Error("fonte chamada mais vezes que o esperado");
    if (proxima instanceof Error) throw proxima;
    return proxima;
  };
  const registros: Registro[] = [];
  const fonte = criarFonte({ fila, buscar, estaOnline: () => online, registrar: (r) => registros.push(r), agora: () => agora });
  return { fonte, fila, pedidos, registros, decorrido: () => agora - MEIO_DIA };
}

it.each([
  { nome: "200 no formato", r: resposta(200, '{"win":3}'), esperado: { ok: true, dados: { win: 3 } } },
  { nome: "404", r: resposta(404, '{"error":"Not Found"}'), esperado: { ok: false, erro: { codigo: "NAO_ENCONTRADO", tenteEmS: null } } },
  { nome: "500", r: resposta(500, ""), esperado: { ok: false, erro: { codigo: "FONTE_INDISPONIVEL", tenteEmS: null, detalhe: "status 500" } } },
])("$nome", async ({ r, esperado }) => {
  expect(await montar([r]).fonte("/players/1/wl", schema)).toEqual(esperado);
});

it("pede GET na URL da fonte, sem cookie, com accept e tempo máximo", async () => {
  const { fonte, pedidos } = montar([resposta(200, '{"win":1}')]);
  await fonte("/players/1/wl", schema);
  expect(pedidos[0]?.url).toBe(`${BASE_OPENDOTA}/players/1/wl`);
  expect(pedidos[0]?.init).toMatchObject({ credentials: "omit", headers: { accept: "application/json" } });
  expect(pedidos[0]?.init?.signal).toBeInstanceOf(AbortSignal);
});

it("corpo vazio chega ao schema como null", async () => {
  expect(await montar([resposta(200, "")]).fonte("/teams/1", z.null())).toEqual({ ok: true, dados: null });
});

it.each([["fora do schema", '{"win":"três"}'], ["que não é JSON", "<html>"]])(
  "corpo %s vira erro de formato registrado como erro", async (_nome, corpo) => {
    const { fonte, registros } = montar([resposta(200, corpo)]);
    expect(await fonte("/x", schema)).toMatchObject({ ok: false, erro: { codigo: "FONTE_FORMATO" } });
    expect(registros[0]).toMatchObject({ nivel: "error", operacao: "fonte", codigo: "FONTE_FORMATO" });
  },
);

it("estoura o tempo máximo e vira fonte indisponível", async () => {
  const lenta: typeof fetch = (_url, init) =>
    new Promise((_resolve, rejeitar) => init?.signal?.addEventListener("abort", () => rejeitar(init.signal?.reason)));
  const fonte = criarFonte({ fila: criarFila(), buscar: lenta, estaOnline: () => true, registrar: () => {}, tempoMaximoMs: 20 });
  expect(await fonte("/x", schema)).toMatchObject({ ok: false, erro: { codigo: "FONTE_INDISPONIVEL" } });
});

it("erro de rede com internet é fonte fora do ar", async () => {
  const { fonte } = montar([new TypeError("Failed to fetch")]);
  expect(await fonte("/x", schema)).toMatchObject({ ok: false, erro: { codigo: "FONTE_INDISPONIVEL" } });
});

it("sem internet responde sem conexão e nem chama a fonte", async () => {
  const { fonte, pedidos } = montar([], { online: false });
  expect(await fonte("/x", schema)).toEqual({ ok: false, erro: { codigo: "SEM_CONEXAO", tenteEmS: null } });
  expect(pedidos).toHaveLength(0);
});

it("429 por minuto: espera 5 s, tenta de novo e devolve o dado", async () => {
  const { fonte, pedidos, decorrido } = montar([LIMITE_MINUTO(), resposta(200, '{"win":2}')]);
  expect(await fonte("/x", schema)).toEqual({ ok: true, dados: { win: 2 } });
  expect(pedidos).toHaveLength(2);
  expect(decorrido()).toBe(5_000);
});

it("três 429 seguidos: esperas de 5 e 10 s e a terceira vira limite com 20 s", async () => {
  const { fonte, pedidos, decorrido } = montar([LIMITE_MINUTO(), LIMITE_MINUTO(), LIMITE_MINUTO()]);
  expect(await fonte("/x", schema)).toEqual({ ok: false, erro: { codigo: "LIMITE_FONTE", tenteEmS: 20 } });
  expect(pedidos).toHaveLength(3);
  expect(decorrido()).toBe(15_000);
});

it("429 do dia não tenta de novo e as consultas seguintes nem chamam a fonte até a virada do dia", async () => {
  const { fonte, fila, pedidos } = montar([resposta(429, '{"error":"daily rate limit exceeded"}')]);
  expect(await fonte("/x", schema)).toEqual({ ok: false, erro: { codigo: "LIMITE_DIA", tenteEmS: 43_200 } });
  expect(fila.estado().motivo).toBe("dia");
  expect(await fonte("/y", schema)).toEqual({ ok: false, erro: { codigo: "LIMITE_DIA", tenteEmS: 43_200 } });
  expect(pedidos).toHaveLength(1);
});
