import type { Clausula } from "../../../live/partida/porQueItem";
import { fundirSubconjuntos, type GrupoDeContra } from "./contraDraft";

const grupo = (assinatura: string, chaves: string[], clausulas: Clausula[]): GrupoDeContra => ({
  assinatura, chaves, explicacao: { funcao: "", motivo: assinatura, clausulas, semDadoDe: [] },
});
const MAGICO: Clausula = { tag: "magico", herois: ["Ancient Apparition", "Necrophos"] };
const CONTROLE: Clausula = { tag: "controle", herois: ["Doom", "Ancient Apparition"] };
const FUGA: Clausula = { tag: "fuga", herois: ["Ursa"] };

describe("fundirSubconjuntos", () => {
  it("funde o grupo cujo risco está contido no de outro (Pipe dentro do BKB) num grupo só, com os itens dos dois", () => {
    const bkb = grupo("2:controle,magico", ["black_king_bar"], [CONTROLE, MAGICO]);
    const pipe = grupo("2:magico", ["pipe", "glimmer_cape"], [MAGICO]);
    expect(fundirSubconjuntos([pipe, bkb])).toEqual([{ ...bkb, chaves: ["black_king_bar", "pipe", "glimmer_cape"] }]);
  });

  it("mantém separado o grupo de tag disjunta (fuga)", () => {
    const bkb = grupo("2:controle,magico", ["black_king_bar"], [CONTROLE, MAGICO]);
    const orchid = grupo("1:fuga", ["orchid"], [FUGA]);
    expect(fundirSubconjuntos([bkb, orchid])).toEqual([bkb, orchid]);
  });

  it("não funde quando a mesma tag cita heróis diferentes: o risco não é o mesmo", () => {
    const bkb = grupo("2:controle,magico", ["black_king_bar"], [CONTROLE, MAGICO]);
    const outroMagico = grupo("2:magico", ["pipe"], [{ tag: "magico", herois: ["Lion", "Lina"] }]);
    expect(fundirSubconjuntos([bkb, outroMagico])).toHaveLength(2);
  });

  it("manda o subconjunto pro superconjunto com mais cláusulas quando há mais de um", () => {
    const controle = grupo("2:controle", ["lotus_orb"], [CONTROLE]);
    const bkb = grupo("2:controle,magico", ["black_king_bar"], [CONTROLE, MAGICO]);
    const tres = grupo("x", ["x"], [CONTROLE, MAGICO, FUGA]);
    expect(fundirSubconjuntos([controle, bkb, tres]).map((g) => g.chaves)).toEqual([["x", "lotus_orb", "black_king_bar"]]);
  });
});
