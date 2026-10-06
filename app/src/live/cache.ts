import { z } from "zod";
import { registrarNoConsole, type Registrar } from "./registro";

export const GUARDA_MAXIMA_MS = 7 * 24 * 3_600_000;
const LOJA = "respostas";
const VERSAO_DO_BANCO = 1;

export type Entrada = Readonly<{ valor: unknown; buscadoEm: number; validoAte: number; apagarEm: number }>;
export type Cache = {
  ler(chave: string): Promise<Entrada | null>;
  gravar(chave: string, entrada: Entrada): Promise<void>;
};

/** O que volta do disco pode ser de uma versão antiga do app: confere antes de usar. */
const registroSchema = z.object({ chave: z.string(), valor: z.unknown(), buscadoEm: z.number(), validoAte: z.number(), apagarEm: z.number() });

export function cacheEmMemoria(agora: () => number = Date.now): Cache {
  const entradas = new Map<string, Entrada>();
  return {
    ler: async (chave) => {
      const entrada = entradas.get(chave);
      return entrada && entrada.apagarEm > agora() ? entrada : null;
    },
    gravar: async (chave, entrada) => { entradas.set(chave, entrada); },
  };
}

function promessa<T>(pedido: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, rejeitar) => {
    pedido.onsuccess = () => resolve(pedido.result);
    pedido.onerror = () => rejeitar(pedido.error);
  });
}

function abrirBanco(fabrica: IDBFactory, nome: string): Promise<IDBDatabase> {
  const pedido = fabrica.open(nome, VERSAO_DO_BANCO);
  pedido.onupgradeneeded = () => {
    pedido.result.createObjectStore(LOJA, { keyPath: "chave" }).createIndex("apagarEm", "apagarEm");
  };
  return promessa(pedido);
}

function apagarVencidos(banco: IDBDatabase, agora: number): Promise<void> {
  return new Promise((resolve, rejeitar) => {
    const transacao = banco.transaction(LOJA, "readwrite");
    const cursor = transacao.objectStore(LOJA).index("apagarEm").openCursor(IDBKeyRange.upperBound(agora));
    cursor.onsuccess = () => {
      if (!cursor.result) return;
      cursor.result.delete();
      cursor.result.continue();
    };
    transacao.oncomplete = () => resolve();
    transacao.onerror = () => rejeitar(transacao.error);
  });
}

type OpcoesIndexedDb = Readonly<{ nome?: string; agora?: () => number; fabrica?: () => IDBFactory; registrar?: Registrar }>;

export function cacheIndexedDb({
  nome = "dota-hub-ao-vivo", agora = Date.now, fabrica = () => indexedDB, registrar = registrarNoConsole,
}: OpcoesIndexedDb = {}): Cache {
  let aberto: Promise<IDBDatabase> | null = null;
  function abrir(): Promise<IDBDatabase> {
    aberto ??= abrirBanco(fabrica(), nome).then(async (banco) => {
      await apagarVencidos(banco, agora());
      return banco;
    });
    return aberto;
  }
  const avisar = (operacao: string, causa: unknown) => registrar({ nivel: "warn", operacao, detalhe: String(causa) });

  return {
    async ler(chave) {
      try {
        const banco = await abrir();
        const registro = registroSchema.safeParse(await promessa(banco.transaction(LOJA).objectStore(LOJA).get(chave)));
        return registro.success && registro.data.apagarEm > agora() ? registro.data : null;
      } catch (causa) {
        avisar("cache:ler", causa);
        return null;
      }
    },
    async gravar(chave, entrada) {
      try {
        const banco = await abrir();
        await promessa(banco.transaction(LOJA, "readwrite").objectStore(LOJA).put({ chave, ...entrada }));
      } catch (causa) {
        avisar("cache:gravar", causa);
      }
    },
  };
}
