import type { Passo, Via } from "../data/schemas";
import type { Ponto } from "./coords";
import type { Tracado } from "./MapView";

export type Selo = { chave: string; x: number; y: number; passos: Passo[] };
export type Trecho = { pontos: Ponto[]; salto: boolean };

// Etiqueta do PDF para o passo que se alcança sem andar.
export const ETIQUETA_DA_VIA: Record<Via, string> = { tp: "TP", portal: "PORTAL", salto: "SALTO" };

const chaveDoLugar = (p: Passo) => (p.lugar === undefined ? `${p.x},${p.y}` : `lugar-${p.lugar}`);
const media = (valores: number[]) => valores.reduce((a, b) => a + b, 0) / valores.length;

// Um selo por lugar, com todas as visitas, no centro dos passos (como o PDF): passo repetido não esconde o outro.
export function selosDaRota(passos: readonly Passo[]): Selo[] {
  const grupos = new Map<string, Passo[]>();
  for (const p of passos) grupos.set(chaveDoLugar(p), [...(grupos.get(chaveDoLugar(p)) ?? []), p]);
  return [...grupos].map(([chave, doLugar]) => ({
    chave, x: media(doLugar.map((p) => p.x)), y: media(doLugar.map((p) => p.y)), passos: doLugar,
  }));
}

// Trechos com pontos para desenhar; o de teleporte é salto (tracejado), não caminho andando.
export function trechosDaRota(rota: Tracado): Trecho[] {
  return rota.caminhos
    .map((pontos, i) => ({ pontos, salto: Boolean(rota.passos[i + 1]?.via) }))
    .filter((t) => t.pontos.length >= 2);
}

// Fuga pelo caminho que o PDF desenha; sem ele, reta do passo de saída até o alvo.
export function caminhoDaFuga(rota: Tracado): Ponto[] {
  const { fuga } = rota;
  const origem = rota.passos.find((p) => p.n === fuga?.de_passo);
  if (!fuga || !origem) return [];
  return fuga.caminho ?? [[origem.x, origem.y], [fuga.x, fuga.y]];
}
