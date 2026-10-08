// Só para testes: respostas reais do OpenDota gravadas em fonte/amostras/ (Task 2).
import { readFileSync } from "node:fs";
import { cacheEmMemoria } from "../cache";
import { criarConsulta, type Consultar } from "../consulta";
import { REGRAS_OPENDOTA, criarFila, type Fila } from "../fila";
import { BASE_OPENDOTA, criarFonte } from "../fonte/opendota";
import type { ServicosAoVivo } from "../servicos";

export const YATORO = 321580662;
export const SPIRIT = 7119388;
export const PARTIDA = 9028005974;

export const ROTAS_GRAVADAS: Readonly<Record<string, string>> = {
  [`/players/${YATORO}`]: "jogador",
  [`/players/${YATORO}/wl`]: "vitorias",
  [`/players/${YATORO}/heroes`]: "herois-da-conta",
  [`/players/${YATORO}/recentMatches`]: "partidas-recentes",
  [`/players/${YATORO}/rankings`]: "rankings",
  "/search?q=yatoro": "busca",
  [`/matches/${PARTIDA}`]: "partida",
  "/teams": "times",
  [`/teams/${SPIRIT}`]: "time",
  [`/teams/${SPIRIT}/players`]: "jogadores-do-time",
  [`/teams/${SPIRIT}/matches`]: "partidas-do-time",
  "/constants/heroes": "nomes-de-herois",
  // Constantes gravadas em 03/10/2026 e podadas para os itens e habilidades desta partida.
  "/constants/items": "itens",
  "/constants/ability_ids": "ids-de-habilidades",
  "/constants/abilities": "habilidades",
  "/benchmarks?hero_id=93": "benchmarks",
  // Heróis únicos das partidas-recentes gravadas do Yatoro, além do 93 (gravados em 08/10/2026 para o comparativo de benchmark).
  "/benchmarks?hero_id=1": "benchmarks-1",
  "/benchmarks?hero_id=11": "benchmarks-11",
  "/benchmarks?hero_id=12": "benchmarks-12",
  "/benchmarks?hero_id=18": "benchmarks-18",
  "/benchmarks?hero_id=19": "benchmarks-19",
  "/benchmarks?hero_id=46": "benchmarks-46",
  "/benchmarks?hero_id=47": "benchmarks-47",
  "/benchmarks?hero_id=53": "benchmarks-53",
  "/benchmarks?hero_id=54": "benchmarks-54",
  "/benchmarks?hero_id=70": "benchmarks-70",
  "/benchmarks?hero_id=109": "benchmarks-109",
  "/benchmarks?hero_id=145": "benchmarks-145",
};

export const amostra = (nome: string): unknown => JSON.parse(readFileSync(`src/live/fonte/amostras/${nome}.json`, "utf-8"));

/** fetch falso que responde com as amostras; `substituicoes` troca a resposta de um caminho (por exemplo, conta privada). */
export function fonteGravada(substituicoes: Readonly<Record<string, unknown>> = {}): typeof fetch {
  return async (entrada) => {
    const caminho = String(entrada).replace(BASE_OPENDOTA, "");
    if (caminho in substituicoes) return new Response(JSON.stringify(substituicoes[caminho]));
    const nome = ROTAS_GRAVADAS[caminho];
    return nome ? new Response(JSON.stringify(amostra(nome))) : new Response('{"error":"Not Found"}', { status: 404 });
  };
}

export const filaSemIntervalo = (): Fila => criarFila({ ...REGRAS_OPENDOTA, intervaloMinimoMs: 0 });

export function consultaGravada(fila: Fila = filaSemIntervalo(), substituicoes: Readonly<Record<string, unknown>> = {}): Consultar {
  const fonte = criarFonte({ fila, buscar: fonteGravada(substituicoes), estaOnline: () => true, registrar: () => {} });
  return criarConsulta({ fonte, cache: cacheEmMemoria(), agora: Date.now });
}

export function servicosGravados(substituicoes: Readonly<Record<string, unknown>> = {}): ServicosAoVivo {
  const fila = filaSemIntervalo();
  return { fila, consultar: consultaGravada(fila, substituicoes) };
}
