import type { z } from "zod";
import { amostra } from "../teste/gravados";
import * as s from "./schemas";

it.each<[string, z.ZodType]>([
  ["jogador", s.jogadorFonte], ["vitorias", s.vitoriasFonte], ["herois-da-conta", s.heroisDaContaFonte],
  ["partidas-recentes", s.partidasRecentesFonte], ["busca", s.buscaFonte], ["partida", s.partidaFonte],
  ["times", s.timesFonte], ["time", s.timeOuNadaFonte], ["jogadores-do-time", s.jogadoresDoTimeFonte],
  ["partidas-do-time", s.partidasDoTimeFonte], ["nomes-de-herois", s.nomesDeHeroisFonte],
  ["itens", s.itensFonte], ["ids-de-habilidades", s.idsDeHabilidadesFonte], ["habilidades", s.habilidadesFonte],
  ["benchmarks", s.benchmarksFonte],
])("a resposta real de %s passa no schema", (nome, schema) => {
  const analise = schema.safeParse(amostra(nome));
  expect(analise.success ? "ok" : analise.error.issues[0]).toBe("ok");
});

it.each([
  { nome: "corpo vazio", corpo: null, esperado: null },
  { nome: "objeto vazio", corpo: {}, esperado: null },
])("time inexistente ($nome) vira null", ({ corpo, esperado }) => {
  expect(s.timeOuNadaFonte.parse(corpo)).toBe(esperado);
});

it("time com campo trocado não vira 'não encontrado'", () => {
  expect(s.timeOuNadaFonte.safeParse({ team_id: "x" }).success).toBe(false);
});
