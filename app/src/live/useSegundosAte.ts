import { useEffect, useState } from "react";

/** Segundos que faltam até `instante` (ms desde a época), atualizado a cada segundo; 0 quando passou. */
export function useSegundosAte(instante: number): number {
  const [tique, setTique] = useState(0);
  const faltam = Math.max(0, Math.ceil((instante - Date.now()) / 1_000));
  useEffect(() => {
    if (faltam <= 0) return;
    const relogio = setTimeout(() => setTique((n) => n + 1), 1_000);
    return () => clearTimeout(relogio);
  }, [faltam, tique]);
  return faltam;
}
