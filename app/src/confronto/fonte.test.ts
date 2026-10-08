import type { z } from "zod";
import * as aoVivo from "../live/fonte/schemas";
import { amostra } from "./amostras/gravadas";
import * as s from "./fonte";

it.each<[string, z.ZodType]>([
  ["herois", s.heroisFonte], ["habilidades-dos-herois", s.habilidadesDosHeroisFonte], ["habilidades", s.habilidadesFonte],
  ["itens", s.itensFonte], ["matchups-93", s.matchupsFonte], ["popularidade-93", s.popularidadeFonte],
])("a resposta real de %s passa no schema e o guardado passa de novo", (nome, schema) => {
  const guardado = schema.parse(amostra(nome));
  expect(schema.parse(guardado)).toEqual(guardado);
});

// As constantes dividem a chave do cache com a tela ao vivo: cada lado precisa aceitar o que o outro guarda,
// ou recusar e buscar de novo, sem as duas telas se sobrescreverem para sempre.
it.each<[string, z.ZodType, z.ZodType]>([
  ["herois", s.heroisFonte, aoVivo.nomesDeHeroisFonte],
  ["habilidades", s.habilidadesFonte, aoVivo.habilidadesFonte],
  ["itens", s.itensFonte, aoVivo.itensFonte],
])("o guardado do confronto (%s) serve para a tela ao vivo, e o podado de lá é recusado aqui", (nome, confronto, vivo) => {
  expect(vivo.safeParse(confronto.parse(amostra(nome))).success).toBe(true);
  expect(confronto.safeParse(vivo.parse(amostra(nome))).success).toBe(false);
});
