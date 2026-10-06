import type { Indice, RotaResumo } from "../data/schemas";
import { faseNoMinuto, filtrarHerois, objetivosDosPassos, proximoSpike, variacoesDaFase } from "./fases";

const fase = (de: number, ate: number | null) => ({ de, ate, janela: `${de}-${ate}`, objetivo: "", passos: [], caminhos: [] });
const spike = (minuto: number | null, marco: string) => ({ minuto, faixa: "", marco, o_que_fazer: "" });

it.each([
  { minuto: 0, esperado: "0-7.5" },
  { minuto: 7.5, esperado: "7.5-12" },
  { minuto: 40, esperado: null },
])("fase do minuto $minuto", ({ minuto, esperado }) => {
  expect(faseNoMinuto([fase(0, 7.5), fase(7.5, 12)], minuto)?.janela ?? null).toBe(esperado);
});

it("fase sem fim vale até o fim do jogo", () => {
  expect(faseNoMinuto([fase(0, 7.5), fase(7.5, null)], 40)?.janela).toBe("7.5-null");
});

it("próximo spike ignora os sem minuto e os que já passaram", () => {
  const spikes = [spike(2.5, "Wand"), spike(null, "Tardio"), spike(7.9, "Nível 6")];
  expect(proximoSpike(spikes, 5)?.marco).toBe("Nível 6");
  expect(proximoSpike(spikes, 10)).toBeNull();
});

it("filtra heróis sem acento e sem caixa", () => {
  const herois = [{ id: "natures_prophet", nome: "Nature's Prophet", hero_id: 53, patch: "", resumo: "", tem_por_minuto: true }];
  expect(filtrarHerois(herois, "NATURE")).toHaveLength(1);
  expect(filtrarHerois(herois, "medusa")).toHaveLength(0);
});

const torre = { id: "rad_bot_t1", tipo: "torre", nome: "T1 de baixo", x: 0.8, y: 0.2, lado: "radiant" as const, detalhes: {} };
const camp = { ...torre, id: "rad_safe_small_1", tipo: "camp", nome: "Pequeno do pull" };

it("mantém no mapa só os objetivos que são alvo de algum passo", () => {
  expect(objetivosDosPassos([{ alvo: "rad_bot_t1" }, { alvo: "eq_rad_safe" }], [torre, camp])).toEqual([torre]);
});

const indice: Indice = {
  colunas: ["equilibrado", "atrás", "lane impossível"],
  radiant: [{ minuto: 4, cenarios: {
    equilibrado: { id: "ML-R-01", nota: null }, "atrás": { id: "ML-R-01", nota: "jogue colado" }, "lane impossível": { id: "ML-R-02", nota: null },
  } }],
  dire: [],
};
const resumo = (id: string, heroi: string | null, de: string): RotaResumo =>
  ({ id, pdf: "05", lado: "radiant", pergunta: `p ${id}`, titulo: `t ${id}`, janela: { de, ate: "" }, heroi });

it("junta as rotas do guia que caem na fase e a rota de cada situação, sem repetir", () => {
  const rotas = [resumo("AM-R-01", "anti_mage", "00:00"), resumo("AM-R-11", "anti_mage", "03:00"),
    resumo("AM-R-05", "anti_mage", "11:00"), resumo("JG-R-01", "juggernaut", "01:00")];
  expect(variacoesDaFase({ de: 0, ate: 8 }, "radiant", { indice, rotas, heroi: "anti_mage" })).toEqual([
    { id: "AM-R-01", rotulo: "t AM-R-01" }, { id: "AM-R-11", rotulo: "t AM-R-11" },
    { id: "ML-R-01", rotulo: "equilibrado, atrás" }, { id: "ML-R-02", rotulo: "lane impossível" },
  ]);
});

it("fase que começa num minuto sem linha no índice não tem rota de situação", () => {
  expect(variacoesDaFase({ de: 31, ate: null }, "radiant", { indice, rotas: [], heroi: "anti_mage" })).toEqual([]);
});
