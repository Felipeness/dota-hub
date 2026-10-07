// Critérios 7 e 8 sem navegador: o mesmo código do app (fila, fonte, consulta e IndexedDB), com o fetch gravado
// contando cada endereço pedido. Não substitui a aba Rede, que também vê o que o navegador busca sozinho.
import "fake-indexeddb/auto";
import { cacheIndexedDb } from "./cache";
import { criarConsulta } from "./consulta";
import { buscar, resumoDaConta } from "./contas";
import { criarFonte } from "./fonte/opendota";
import { rotaDaPartida } from "./rotaAproximada";
import { PARTIDA, SPIRIT, YATORO, filaSemIntervalo, fonteGravada } from "./teste/gravados";
import { resumoDoTime } from "./times";

const NOVE_MINUTOS_MS = 9 * 60_000;
let bancosCriados = 0;

/** Uma "abertura do navegador": fila e fonte novas, o mesmo banco IndexedDB de antes. */
function abrirApp(banco: string, agora: () => number, enderecos: string[]) {
  const gravada = fonteGravada();
  const buscarContando: typeof fetch = (entrada, init) => {
    enderecos.push(String(entrada));
    return gravada(entrada, init);
  };
  const fonte = criarFonte({ fila: filaSemIntervalo(), buscar: buscarContando, estaOnline: () => true, registrar: () => {} });
  return criarConsulta({ fonte, cache: cacheIndexedDb({ nome: banco, agora, registrar: () => {} }), agora });
}

it("critério 7: reabrir e abrir a mesma conta antes de 10 minutos não chama a fonte", async () => {
  const banco = `rede-${(bancosCriados += 1)}`;
  const inicio = Date.now();
  const primeiraVez: string[] = [];
  expect((await resumoDaConta(abrirApp(banco, () => inicio, primeiraVez), YATORO)).ok).toBe(true);
  expect(primeiraVez.length).toBeGreaterThan(0);

  const reaberto: string[] = [];
  const resumo = await resumoDaConta(abrirApp(banco, () => inicio + NOVE_MINUTOS_MS, reaberto), YATORO);
  expect(resumo.ok).toBe(true);
  expect(reaberto).toEqual([]);
});

it("critério 8: a jornada completa só chama api.opendota.com, sem chave", async () => {
  const enderecos: string[] = [];
  const consultar = abrirApp(`rede-${(bancosCriados += 1)}`, Date.now, enderecos);
  await buscar(consultar, "yatoro");
  await resumoDaConta(consultar, YATORO);
  await rotaDaPartida(consultar, String(PARTIDA), YATORO);
  await buscar(consultar, "spirit");
  await resumoDoTime(consultar, SPIRIT);

  expect(enderecos.length).toBeGreaterThan(0);
  expect(new Set(enderecos.map((e) => new URL(e).origin))).toEqual(new Set(["https://api.opendota.com"]));
  expect(enderecos.filter((e) => /api_key=/.test(e))).toEqual([]);
});
