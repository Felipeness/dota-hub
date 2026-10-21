import type { Achado, Peso } from "./modelo";
import { resumoGeral, type AchadosDaRegra } from "./resumoGeral";

const achado = (titulo: string, peso: Peso, minuto: number | null, tipo: Achado["tipo"] = "erro"): Achado =>
  ({ id: titulo, tipo, minuto, titulo, oQueAconteceu: "", oQueFazer: null, porque: "", fontes: [], peso, evidencias: {} });

const POR_REGRA: AchadosDaRegra[] = [
  { regra: { id: "mortes-repetidas", familia: "mortes-e-visao" }, achados: [achado("3x morte para ursa", "pesou", 16)] },
  { regra: { id: "mapa-de-mortes", familia: "mortes-e-visao" }, achados: [achado("4 mortes entre 8 e 20 minutos", "pesou_muito", 8.6)] },
  { regra: { id: "morte-em-inferioridade", familia: "lutas" }, achados: [achado("Morreu com o time em 4 contra 5, 28:33", "pesou_muito", 28.6)] },
  { regra: { id: "wards-colocadas", familia: "mortes-e-visao" }, achados: [achado("0 wards colocadas", "pesou", null)] },
  { regra: { id: "aegis", familia: "objetivos-e-aegis" }, achados: [achado("Torre caiu 0:37 depois de uma morte, 11:01", "leve", 11)] },
  { regra: { id: "gpm", familia: "economia-e-farm" }, achados: [achado("GPM bom", "pesou", null, "acerto")] },
  { regra: { id: "core", familia: "build" }, achados: [achado("Nunca montou Daedalus", "pesou", null)] },
];

it.each([
  {
    nome: "com veredito da build, ele abre o resumo; visão entra em objetivos; acerto não entra",
    veredito: { id: "v", peso: "pesou_muito" as const, minuto: 36, texto: "Butterfly saiu 36:20", porque: null },
    esperado: [["build", "Butterfly saiu 36:20"], ["mortes", "4 mortes entre 8 e 20 minutos"], ["objetivos", "0 wards colocadas"]],
  },
  {
    nome: "sem veredito, a build usa o erro mais pesado das regras de build",
    veredito: null,
    esperado: [["build", "Nunca montou Daedalus"], ["mortes", "4 mortes entre 8 e 20 minutos"], ["objetivos", "0 wards colocadas"]],
  },
])("$nome", ({ veredito, esperado }) => {
  expect(resumoGeral(POR_REGRA, veredito).map((l) => [l.area, l.texto])).toEqual(esperado);
});
