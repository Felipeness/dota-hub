import { useContext, useEffect, useState } from "react";
import { benchmarksFonte } from "../live/fonte/schemas";
import { registrarNoConsole } from "../live/registro";
import { ContextoAoVivo } from "../live/servicos";
import { ritmoEsperado, type RitmoEsperado } from "./benchmark";

const VALIDADE_BENCHMARK_S = 24 * 3_600;

/**
 * Ritmo esperado via OpenDota /benchmarks (fila de limite, cache em IndexedDB e timeout de 20 s já vêm do
 * ServicosAoVivo). Sem ProvedorAoVivo no topo da árvore (como nos testes da ficha), simplesmente não busca.
 */
export function useRitmoEsperado(heroId: number): RitmoEsperado | null {
  const servicos = useContext(ContextoAoVivo);
  const [ritmo, setRitmo] = useState<RitmoEsperado | null>(null);

  useEffect(() => {
    setRitmo(null);
    if (!servicos) return;
    let vivo = true;
    servicos
      .consultar({ caminho: `/benchmarks?hero_id=${heroId}`, schema: benchmarksFonte, validadeS: VALIDADE_BENCHMARK_S })
      .then((resposta) => {
        if (vivo && resposta.ok) setRitmo(ritmoEsperado(resposta.dados.valor));
      })
      .catch((causa: unknown) => {
        // A ficha funciona sem o ritmo esperado; só registra pra não engolir o erro em silêncio.
        registrarNoConsole({ nivel: "error", operacao: "ritmo-esperado", codigo: "INTERNO", detalhe: String(causa) });
      });
    return () => { vivo = false; };
  }, [servicos, heroId]);

  return ritmo;
}
