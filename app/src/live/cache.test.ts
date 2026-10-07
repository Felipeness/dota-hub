import "fake-indexeddb/auto";
import type { Registro } from "./registro";
import { cacheEmMemoria, cacheIndexedDb, type Cache } from "./cache";

const entrada = (apagarEm: number) => ({ valor: { win: 3 }, buscadoEm: 1, validoAte: 2, apagarEm });
let bancosCriados = 0;
const bancoNovo = () => `teste-${(bancosCriados += 1)}`;

describe.each<[string, (agora: () => number) => Cache]>([
  ["memória", (agora) => cacheEmMemoria(agora)],
  ["IndexedDB", (agora) => cacheIndexedDb({ nome: bancoNovo(), agora, registrar: () => {} })],
])("guardado em %s", (_nome, criar) => {
  it("grava e lê de volta", async () => {
    const cache = criar(() => 10);
    await cache.gravar("/players/1/wl", entrada(100));
    expect(await cache.ler("/players/1/wl")).toMatchObject(entrada(100));
  });

  it("chave que nunca foi gravada é null", async () => {
    expect(await criar(() => 10).ler("/nada")).toBeNull();
  });

  it("passou do prazo de apagar é null", async () => {
    let agora = 10;
    const cache = criar(() => agora);
    await cache.gravar("/a", entrada(100));
    agora = 100;
    expect(await cache.ler("/a")).toBeNull();
  });
});

async function contarRegistros(nome: string): Promise<number> {
  const banco = await new Promise<IDBDatabase>((resolve, rejeitar) => {
    const pedido = indexedDB.open(nome);
    pedido.onsuccess = () => resolve(pedido.result);
    pedido.onerror = () => rejeitar(pedido.error);
  });
  return new Promise((resolve, rejeitar) => {
    const pedido = banco.transaction("respostas").objectStore("respostas").count();
    pedido.onsuccess = () => resolve(pedido.result);
    pedido.onerror = () => rejeitar(pedido.error);
  });
}

it("o guardado do IndexedDB continua lá ao abrir de novo (fechar e abrir o navegador)", async () => {
  const nome = bancoNovo();
  await cacheIndexedDb({ nome, agora: () => 10, registrar: () => {} }).gravar("/a", entrada(100));
  expect(await cacheIndexedDb({ nome, agora: () => 20, registrar: () => {} }).ler("/a")).toMatchObject(entrada(100));
});

it("ao abrir, o IndexedDB apaga o que passou do prazo", async () => {
  const nome = bancoNovo();
  await cacheIndexedDb({ nome, agora: () => 10, registrar: () => {} }).gravar("/velha", entrada(50));
  await cacheIndexedDb({ nome, agora: () => 60, registrar: () => {} }).ler("/outra");
  expect(await contarRegistros(nome)).toBe(0);
});

it("navegador bloqueando o banco: lê null, grava sem erro e registra o motivo", async () => {
  const registros: Registro[] = [];
  const cache = cacheIndexedDb({
    nome: bancoNovo(),
    fabrica: () => { throw new DOMException("bloqueado", "SecurityError"); },
    registrar: (r) => registros.push(r),
  });
  await expect(cache.gravar("/a", entrada(100))).resolves.toBeUndefined();
  expect(await cache.ler("/a")).toBeNull();
  expect(registros).toEqual([
    expect.objectContaining({ nivel: "warn", operacao: "cache:gravar" }),
    expect.objectContaining({ nivel: "warn", operacao: "cache:ler" }),
  ]);
});
