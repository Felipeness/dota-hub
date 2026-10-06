// Só para testes: respostas reais do OpenDota gravadas em fonte/amostras/ (Task 2).
import { readFileSync } from "node:fs";

export const YATORO = 321580662;
export const SPIRIT = 7119388;
export const PARTIDA = 9028005974;

export const ROTAS_GRAVADAS: Readonly<Record<string, string>> = {
  [`/players/${YATORO}`]: "jogador",
  [`/players/${YATORO}/wl`]: "vitorias",
  [`/players/${YATORO}/heroes`]: "herois-da-conta",
  [`/players/${YATORO}/recentMatches`]: "partidas-recentes",
  "/search?q=yatoro": "busca",
  [`/matches/${PARTIDA}`]: "partida",
  "/teams": "times",
  [`/teams/${SPIRIT}`]: "time",
  [`/teams/${SPIRIT}/players`]: "jogadores-do-time",
  [`/teams/${SPIRIT}/matches`]: "partidas-do-time",
  "/constants/heroes": "nomes-de-herois",
};

export const amostra = (nome: string): unknown => JSON.parse(readFileSync(`src/live/fonte/amostras/${nome}.json`, "utf-8"));
