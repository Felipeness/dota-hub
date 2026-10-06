import { z } from "zod";
import { cacheEmMemoria } from "./cache";
import { criarConsulta, juntarFrescor } from "./consulta";
import { erroAoVivo, falha, ok, type CodigoAoVivo, type RespostaAoVivo } from "./erros";
import type { Fonte } from "./fonte/opendota";
import { vitoriasFonte } from "./fonte/schemas";
import { YATORO, consultaGravada } from "./teste/gravados";

const schema = z.object({ win: z.number() });
const pedido = { caminho: "/players/1/wl", schema, validadeS: 60 };
const INICIO = 1_000_000;

function montar(respostas: Array<RespostaAoVivo<unknown>>) {
  let agora = INICIO;
  const caminhos: string[] = [];
  const fonte: Fonte = async (caminho, schemaDaConsulta) => {
    caminhos.push(caminho);
    const proxima = respostas.shift();
    if (proxima === undefined) throw new Error("fonte chamada mais vezes que o esperado");
    return proxima.ok ? ok(schemaDaConsulta.parse(proxima.dados)) : proxima;
  };
  const cache = cacheEmMemoria(() => agora);
  const consultar = criarConsulta({ fonte, cache, agora: () => agora });
  return { consultar, cache, caminhos, avancar: (ms: number) => { agora += ms; } };
}

it("dentro da validade responde do guardado sem chamar a fonte", async () => {
  const { consultar, caminhos, avancar } = montar([ok({ win: 3 })]);
  expect(await consultar(pedido)).toEqual({ ok: true, dados: { valor: { win: 3 }, frescor: { buscadoEm: INICIO, vencido: false } } });
  avancar(30_000);
  expect(await consultar(pedido)).toMatchObject({ ok: true, dados: { valor: { win: 3 } } });
  expect(caminhos).toHaveLength(1);
});

it.each<CodigoAoVivo>(["LIMITE_FONTE", "LIMITE_DIA", "FONTE_INDISPONIVEL", "SEM_CONEXAO"])(
  "vencido e fonte com %s: serve o vencido marcado", async (codigo) => {
    const { consultar, avancar } = montar([ok({ win: 3 }), falha(erroAoVivo(codigo, 30))]);
    await consultar(pedido);
    avancar(120_000);
    expect(await consultar(pedido)).toEqual({ ok: true, dados: { valor: { win: 3 }, frescor: { buscadoEm: INICIO, vencido: true } } });
  },
);

it.each<CodigoAoVivo>(["NAO_ENCONTRADO", "FONTE_FORMATO"])("vencido e fonte com %s: não serve o vencido", async (codigo) => {
  const { consultar, avancar } = montar([ok({ win: 3 }), falha(erroAoVivo(codigo))]);
  await consultar(pedido);
  avancar(120_000);
  expect(await consultar(pedido)).toMatchObject({ ok: false, erro: { codigo } });
});

it("sem guardado, o erro da fonte passa direto", async () => {
  const { consultar } = montar([falha(erroAoVivo("FONTE_INDISPONIVEL"))]);
  expect(await consultar(pedido)).toMatchObject({ ok: false, erro: { codigo: "FONTE_INDISPONIVEL" } });
});

it("guardado de outra versão do app (fora do schema) é ignorado e a fonte é chamada", async () => {
  const { consultar, cache, caminhos } = montar([ok({ win: 4 })]);
  await cache.gravar(pedido.caminho, { valor: { vitorias: 4 }, buscadoEm: INICIO, validoAte: INICIO + 60_000, apagarEm: INICIO + 1e9 });
  expect(await consultar(pedido)).toMatchObject({ ok: true, dados: { valor: { win: 4 } } });
  expect(caminhos).toHaveLength(1);
});

it("juntar frescor pega o mais antigo e qualquer vencido", () => {
  expect(juntarFrescor({ buscadoEm: 5, vencido: false }, { buscadoEm: 3, vencido: true })).toEqual({ buscadoEm: 3, vencido: true });
});

it("a consulta montada sobre as respostas gravadas devolve as vitórias reais", async () => {
  const r = await consultaGravada()({ caminho: `/players/${YATORO}/wl`, schema: vitoriasFonte, validadeS: 3_600 });
  expect(r.ok && r.dados.valor.win).toBeGreaterThan(0);
});
