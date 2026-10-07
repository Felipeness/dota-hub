import type { Mancha } from "../map/trilhas";
import type { Lane } from "./tipos";

const ORIGEM_DA_GRADE = 57;
const ESCALA_DA_GRADE = 142;
const LARGURA_DO_MEIO = 0.15;
type Regiao = "cima" | "meio" | "baixo";
export type Lado = "radiant" | "dire";

const LANE_DA_REGIAO: Record<Lado, Record<Regiao, Lane>> = {
  radiant: { baixo: "safe", meio: "mid", cima: "off" },
  dire: { cima: "safe", meio: "mid", baixo: "off" },
};

const arredondar = (v: number) => Math.round(v * 1_000) / 1_000;
const limitar = (v: number) => Math.min(1, Math.max(0, v));

export const celulaParaNorm = (celula: number) => limitar((celula + 0.5 - ORIGEM_DA_GRADE) / ESCALA_DA_GRADE);

export function manchasDaLane(lanePos: Readonly<Record<string, Readonly<Record<string, number>>>>): Mancha[] {
  const brutas = Object.entries(lanePos).flatMap(([x, colunas]) =>
    Object.entries(colunas).map(([y, vezes]) => ({ x: celulaParaNorm(Number(x)), y: celulaParaNorm(Number(y)), vezes })));
  const maior = brutas.reduce((max, m) => Math.max(max, m.vezes), 1);
  return brutas.map(({ x, y, vezes }) => ({ x: arredondar(x), y: arredondar(y), peso: arredondar(vezes / maior) }));
}

// Limite conhecido: divide o mapa pela diagonal; não separa selva de lane e tempo na base conta como mid.
export function regiaoDoPonto({ x, y }: Readonly<{ x: number; y: number }>): Regiao {
  if (Math.abs(x - y) < LARGURA_DO_MEIO) return "meio";
  return y > x ? "cima" : "baixo";
}

export function laneDasManchas(manchas: readonly Mancha[], lado: Lado): Lane | null {
  const pesos = manchas.reduce((soma, m) => {
    const regiao = regiaoDoPonto(m);
    return soma.set(regiao, (soma.get(regiao) ?? 0) + m.peso);
  }, new Map<Regiao, number>());
  const [regiao] = [...pesos.entries()].sort((a, b) => b[1] - a[1])[0] ?? [];
  return regiao ? LANE_DA_REGIAO[lado][regiao] : null;
}
