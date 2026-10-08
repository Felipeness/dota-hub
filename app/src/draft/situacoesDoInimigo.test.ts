import { heroi } from "../confronto/amostras/gravadas";
import { situacoesDosInimigos } from "./situacoesDoInimigo";

const herois = [heroi("slark"), heroi("phantom_lancer"), heroi("life_stealer")];

it("acha a situação de cada inimigo escolhido no draft, com o motivo", () => {
  const detectadas = situacoesDosInimigos([herois[0].id, herois[1].id], herois);
  // Slark (invisível, controle, cura) + Phantom Lancer (ilusões, evasão): mesmas mecânicas do teste do confronto.
  expect(detectadas.map((d) => d.situacao)).toEqual(["invisibilidade", "controle", "cura", "ilusoes", "evasao"]);
  const controleDoSlark = detectadas.find((d) => d.situacao === "controle");
  expect(controleDoSlark).toMatchObject({ heroId: herois[0].id, heroNome: "Slark" });
  expect(controleDoSlark?.motivo).toContain("Pounce");
});

it("ignora inimigo que não traz nenhuma das situações mapeadas", () => {
  expect(situacoesDosInimigos([999], herois)).toEqual([]);
});

it("não repete mecânica sem situação equivalente (silêncio, puro, fuga, passivas ficam de fora)", () => {
  const detectadas = situacoesDosInimigos([herois[2].id], herois);
  expect(detectadas.every((d) => d.situacao !== undefined)).toBe(true);
  expect(detectadas.map((d) => d.situacao)).toEqual(["cura"]);
});
