import { useEffect, useReducer, type Dispatch } from "react";
import { iniciarReproducao, reproduzir, type AcaoReproducao, type Reproducao } from "./reproducao";

const INTERVALO_MS = 200; // redesenha o mapa 5 vezes por segundo: a amostra do replay muda a cada 5 s de jogo

export function useReproducao(fimS: number): [Reproducao, Dispatch<AcaoReproducao>] {
  const [estado, despachar] = useReducer(reproduzir, fimS, iniciarReproducao);
  useEffect(() => {
    if (!estado.tocando) return;
    let anterior = performance.now();
    let quadro = requestAnimationFrame(function passo(agora: number) {
      if (agora - anterior >= INTERVALO_MS) {
        despachar({ tipo: "avancar", dtMs: agora - anterior });
        anterior = agora;
      }
      quadro = requestAnimationFrame(passo);
    });
    return () => cancelAnimationFrame(quadro);
  }, [estado.tocando]);
  return [estado, despachar];
}
