import { filtrarRotas, rotaDaCelula } from "./filtros";
import type { Indice, Rota } from "../data/schemas";

const base = { pdf: "06" as const, titulo: "", secao: "", estado: null, origem: "recomendada" as const, replay: null, passos: [], caminhos: [], fuga: null, proxima: [], se: [], interrupcao: [], porque: "" };
const rotas: Rota[] = [
  { ...base, id: "MA-R-01", lado: "radiant", pergunta: "Onde farmo no minuto 6 se não posso pegar wave?", janela: { de: "6:00", ate: "7:00" } },
  { ...base, id: "MA-D-01", lado: "dire", pergunta: "Onde farmo no minuto 6?", janela: { de: "6:00", ate: "7:00" } },
];

it("filtra por lado, minuto e texto sem acento", () => {
  expect(filtrarRotas(rotas, { lado: "radiant", minuto: 6, texto: "NAO POSSO" }).map((r) => r.id)).toEqual(["MA-R-01"]);
  expect(filtrarRotas(rotas, { minuto: 9 })).toEqual([]);
});

it("acha a rota da célula do índice", () => {
  const indice: Indice = { colunas: ["equilibrado"], radiant: [{ minuto: 6, cenarios: { equilibrado: { id: "MA-R-01", nota: null } } }], dire: [] };
  expect(rotaDaCelula(indice, "radiant", 6, "equilibrado")).toEqual({ id: "MA-R-01", nota: null });
  expect(rotaDaCelula(indice, "radiant", 7, "equilibrado")).toEqual({ id: null, nota: "sem rota para este minuto" });
});
