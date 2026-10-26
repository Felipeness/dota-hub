// Camada "Wards" do mapa: os pontos onde os pros mais colocaram ward, somados das partidas profissionais já lidas
// pelo site (public/data/trajetorias). Ward a menos de ~1 célula de outra cai no mesmo ponto.
import { loadJson } from "../data/load";
import { replaysSchema, trajetoriaSchema } from "../data/schemas";
import { doMinimapa } from "./lance";
import type { Ponto, Time } from "./quadro";

/** Grade de agrupamento: 60 casas por lado do mapa (~300 unidades do jogo). */
const CASAS_POR_LADO = 60;
/** Ponto com menos colocações que isso é ruído de uma partida só. */
const MINIMO_DE_COLOCACOES = 3;
const DOWNLOADS_EM_PARALELO = 4;

type WardDoPro = Readonly<{ x: number; y: number; lado: Time; tipo: string }>;
export type PontoDeWard = Readonly<{ ponto: Ponto; tipo: "observer" | "sentry"; lado: Time; vezes: number }>;

export function pontosDeWard(wards: readonly WardDoPro[]): PontoDeWard[] {
  const grupos = new Map<string, { soma: [number, number]; vezes: number; tipo: "observer" | "sentry"; lado: Time }>();
  for (const w of wards) {
    const tipo = w.tipo === "observer" ? "observer" : "sentry";
    const chave = `${tipo}:${w.lado}:${Math.round(w.x * CASAS_POR_LADO)}:${Math.round(w.y * CASAS_POR_LADO)}`;
    const grupo = grupos.get(chave) ?? { soma: [0, 0], vezes: 0, tipo, lado: w.lado };
    grupos.set(chave, { ...grupo, soma: [grupo.soma[0] + w.x, grupo.soma[1] + w.y], vezes: grupo.vezes + 1 });
  }
  return [...grupos.values()]
    .filter((g) => g.vezes >= MINIMO_DE_COLOCACOES)
    .map((g) => ({ ponto: doMinimapa([g.soma[0] / g.vezes, g.soma[1] / g.vezes]), tipo: g.tipo, lado: g.lado, vezes: g.vezes }))
    .sort((a, b) => b.vezes - a.vezes);
}

/** Baixa as partidas pro em paralelo limitado; partida que falha só fica de fora da soma. */
export async function carregarPontosDeWard(): Promise<PontoDeWard[]> {
  const indice = await loadJson("/data/replays.json", replaysSchema);
  if (!indice.ok) throw new Error(`pontos de ward: ${indice.motivo}`);
  const fila = indice.dados.map((r) => r.match_id);
  const wards: WardDoPro[] = [];
  const trabalhador = async () => {
    for (let id = fila.shift(); id !== undefined; id = fila.shift()) {
      const partida = await loadJson(`/data/trajetorias/${id}.json`, trajetoriaSchema);
      if (partida.ok) wards.push(...partida.dados.wards);
    }
  };
  await Promise.all(Array.from({ length: DOWNLOADS_EM_PARALELO }, trabalhador));
  return pontosDeWard(wards);
}
