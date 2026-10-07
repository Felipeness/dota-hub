import { useState, type ReactNode } from "react";
import { ContextoAoVivo, criarServicos, type ServicosAoVivo } from "./servicos";

/** Cria a fila e o guardado uma vez; o IndexedDB só abre na primeira consulta. Testes passam `servicos` prontos. */
export function ProvedorAoVivo({ servicos, children }: { servicos?: ServicosAoVivo; children: ReactNode }) {
  const [valor] = useState(() => servicos ?? criarServicos());
  return <ContextoAoVivo value={valor}>{children}</ContextoAoVivo>;
}
