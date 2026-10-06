import { faseNoMinuto, filtrarHerois, proximoSpike } from "./fases";

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
