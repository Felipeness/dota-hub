import type { z } from "zod";
import { GUARDA_MAXIMA_MS, type Cache, type Entrada } from "./cache";
import { ok, type CodigoAoVivo, type RespostaAoVivo } from "./erros";
import type { Fonte } from "./fonte/opendota";
import type { Frescor } from "./tipos";

export type Consultado<T> = Readonly<{ valor: T; frescor: Frescor }>;
export type PedidoDeConsulta<T> = Readonly<{ caminho: string; schema: z.ZodType<T>; validadeS: number }>;
export type Consultar = <T>(pedido: PedidoDeConsulta<T>) => Promise<RespostaAoVivo<Consultado<T>>>;
type Dependencias = Readonly<{ fonte: Fonte; cache: Cache; agora: () => number }>;
type Guardado<T> = Readonly<{ valor: T; buscadoEm: number; validoAte: number }>;

/** Falhas passageiras: vale mostrar o guardado antigo. Conta que sumiu ou resposta estranha, não. */
const PODE_USAR_VENCIDO: ReadonlySet<CodigoAoVivo> = new Set(["LIMITE_FONTE", "LIMITE_DIA", "FONTE_INDISPONIVEL", "SEM_CONEXAO"]);

export function juntarFrescor(...frescores: Frescor[]): Frescor {
  return { buscadoEm: Math.min(...frescores.map((f) => f.buscadoEm)), vencido: frescores.some((f) => f.vencido) };
}

function lerGuardado<T>(entrada: Entrada | null, schema: z.ZodType<T>): Guardado<T> | null {
  if (!entrada) return null;
  const analise = schema.safeParse(entrada.valor);
  return analise.success ? { valor: analise.data, buscadoEm: entrada.buscadoEm, validoAte: entrada.validoAte } : null;
}

export function criarConsulta({ fonte, cache, agora }: Dependencias): Consultar {
  return async <T>(pedido: PedidoDeConsulta<T>) => {
    const guardado = lerGuardado(await cache.ler(pedido.caminho), pedido.schema);
    if (guardado && agora() < guardado.validoAte) {
      return ok({ valor: guardado.valor, frescor: { buscadoEm: guardado.buscadoEm, vencido: false } });
    }
    const instante = agora();
    const resposta = await fonte(pedido.caminho, pedido.schema);
    if (resposta.ok) {
      await cache.gravar(pedido.caminho, {
        valor: resposta.dados, buscadoEm: instante, validoAte: instante + pedido.validadeS * 1_000, apagarEm: instante + GUARDA_MAXIMA_MS,
      });
      return ok({ valor: resposta.dados, frescor: { buscadoEm: instante, vencido: false } });
    }
    if (guardado && PODE_USAR_VENCIDO.has(resposta.erro.codigo)) {
      return ok({ valor: guardado.valor, frescor: { buscadoEm: guardado.buscadoEm, vencido: true } });
    }
    return resposta;
  };
}
