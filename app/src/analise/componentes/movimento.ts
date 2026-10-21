// Movimento do player dos lances: texto que aparece aos poucos e contagem que sobe. Com prefers-reduced-motion,
// tudo aparece pronto de uma vez.
import { useEffect, useState } from "react";

export const prefereMenosMovimento = (): boolean =>
  typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const LETRAS_POR_PASSO = 3;
const PASSO_DO_TEXTO_MS = 16;

/** Devolve o texto crescendo a cada passo; reinicia quando o texto muda. */
export function useTextoProgressivo(texto: string, ativo: boolean): string {
  const animar = ativo && !prefereMenosMovimento();
  const [mostrado, setMostrado] = useState(animar ? 0 : texto.length);
  useEffect(() => {
    if (!animar) return setMostrado(texto.length);
    setMostrado(0);
    const intervalo = setInterval(() => setMostrado((n) => {
      if (n + LETRAS_POR_PASSO >= texto.length) clearInterval(intervalo);
      return Math.min(texto.length, n + LETRAS_POR_PASSO);
    }), PASSO_DO_TEXTO_MS);
    return () => clearInterval(intervalo);
  }, [texto, animar]);
  return texto.slice(0, mostrado);
}

const DURACAO_DA_CONTAGEM_MS = 900;

/** Número que sobe de 0 até o valor em ~1 s ao aparecer. */
export function useContagem(valor: number): number {
  const [atual, setAtual] = useState(prefereMenosMovimento() ? valor : 0);
  useEffect(() => {
    if (prefereMenosMovimento()) return setAtual(valor);
    const inicio = performance.now();
    let quadro = 0;
    const passo = (agora: number) => {
      const fracao = Math.min(1, (agora - inicio) / DURACAO_DA_CONTAGEM_MS);
      setAtual(Math.round(valor * fracao));
      if (fracao < 1) quadro = requestAnimationFrame(passo);
    };
    quadro = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(quadro);
  }, [valor]);
  return atual;
}
