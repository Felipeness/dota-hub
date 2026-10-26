// Placar de pro de cada par de heróis (export/dota_export/confrontos.py, pares): um arquivo pequeno com todos os pares,
// para o draft não baixar o arquivo de ~470 KB de cada herói só para ler dois números.
import { z } from "zod";
import { porcentagem } from "../confronto/analise";
import type { HeroId } from "./guia";

export const CAMINHO_PARES = "/data/confrontos_pares.json";
/** Abaixo disso a taxa de vitória ainda oscila muito de uma partida para outra. */
export const AMOSTRA_MINIMA = 30;

const placarSchema = z.union([
  z.tuple([z.number().int().positive(), z.number().int().nonnegative()]),
  z.tuple([z.number().int().positive(), z.number().int().nonnegative(), z.literal(1)]),
]);
/** hero_id -> hero_id do inimigo -> [jogos, vitórias] ou [jogos, vitórias, 1] quando há análise escrita. */
export const paresSchema = z.record(z.string(), z.record(z.string(), placarSchema));
export type Pares = z.infer<typeof paresSchema>;

export type PlacarDoPar = Readonly<{ jogos: number; vitorias: number; analiseEscrita: boolean }>;

export function placarDoPar(pares: Pares, meu: HeroId, oponente: HeroId): PlacarDoPar | null {
  const placar = pares[String(meu)]?.[String(oponente)];
  if (!placar) return null;
  const [jogos, vitorias] = placar;
  return { jogos, vitorias, analiseEscrita: placar.length === 3 };
}

/** "Snapfire vence 55,1% contra Pangolier em 392 partidas pro", com o aviso de amostra pequena abaixo de 30. */
export function frasePlacar(meu: string, oponente: string, placar: PlacarDoPar): string {
  const partidas = placar.jogos === 1 ? "partida" : "partidas";
  const frase = `${meu} vence ${porcentagem(placar.vitorias / placar.jogos)} contra ${oponente} em ${placar.jogos} ${partidas} pro`;
  return placar.jogos < AMOSTRA_MINIMA ? `${frase} (amostra pequena)` : frase;
}
