import { createContext, useContext, useSyncExternalStore } from "react";
import { cacheIndexedDb } from "./cache";
import { criarConsulta, type Consultar } from "./consulta";
import { criarFila, type EstadoDaFila, type Fila } from "./fila";
import { criarFonte } from "./fonte/opendota";

export type ServicosAoVivo = Readonly<{ consultar: Consultar; fila: Fila }>;

/** Uma fila por aba: o limite do OpenDota é por endereço de internet, e o app é usado numa aba só. */
export function criarServicos(): ServicosAoVivo {
  const fila = criarFila();
  const consultar = criarConsulta({ fonte: criarFonte({ fila }), cache: cacheIndexedDb(), agora: Date.now });
  return { consultar, fila };
}

export const ContextoAoVivo = createContext<ServicosAoVivo | null>(null);

export function useServicosAoVivo(): ServicosAoVivo {
  const servicos = useContext(ContextoAoVivo);
  if (!servicos) throw new Error("useServicosAoVivo fora do ProvedorAoVivo");
  return servicos;
}

export function useEstadoDaFila(): EstadoDaFila {
  const { fila } = useServicosAoVivo();
  return useSyncExternalStore(fila.assinar, fila.estado);
}
