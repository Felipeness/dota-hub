import type { Compra } from "../../../live/partida/detalhe";
import type { Contexto } from "../../modelo";
import { itemContraInimigos } from "./itemContraInimigos";
import { listaDeNomes, matchupDePro } from "./matchupDePro";

type ItemPro = Readonly<{ chave: string; n: number; mediana: number }>;

const compra = (chave: string, minuto: number): Compra => ({ t: Math.round(minuto * 60), chave, nome: chave, custo: 4_000, grande: true });

// Fábrica de teste: só os campos que matchupDePro e itemContraInimigos leem.
function contexto(contra: Record<string, { jogos: number; itens: readonly ItemPro[] }>, compras: readonly Compra[], duracaoMin = 50): Contexto {
  const contraInimigo = Object.fromEntries(Object.entries(contra).map(([k, v]) => [k, { ...v, vitorias: 0 }]));
  return {
    detalhe: { compras, duracaoS: duracaoMin * 60 },
    pro: { contra_inimigo: contraInimigo, nomes_dos_itens: { butterfly: "Butterfly" } },
    meuHeroi: { id: 94, chave: "medusa", nome: "Medusa" },
    inimigos: [{ id: 69, chave: "doom_bringer", nome: "Doom" }, { id: 36, chave: "necrolyte", nome: "Necrophos" }],
  } as unknown as Contexto;
}

const DOOM_E_NECRO = {
  doom_bringer: { jogos: 40, itens: [{ chave: "butterfly", n: 34, mediana: 22 }, { chave: "skadi", n: 20, mediana: 28 }, { chave: "sphere", n: 1, mediana: 30 }] },
  necrolyte: { jogos: 20, itens: [{ chave: "butterfly", n: 16, mediana: 24.9 }, { chave: "skadi", n: 12, mediana: 29 }] },
};

describe("matchupDePro", () => {
  it("soma jogos e compras dos inimigos com dado e pesa a mediana pelo número de compras", () => {
    const matchup = matchupDePro(contexto(DOOM_E_NECRO, []));
    expect(matchup?.jogos).toBe(60);
    expect(matchup?.inimigos).toEqual(["Doom", "Necrophos"]);
    const butterfly = matchup?.itens.get("butterfly");
    expect(butterfly?.n).toBe(50);
    expect(butterfly?.fracao).toBeCloseTo(50 / 60);
    expect(butterfly?.mediana).toBeCloseTo((34 * 22 + 16 * 24.9) / 50);
    expect(butterfly?.nome).toBe("Butterfly");
  });

  it("devolve null abaixo da amostra mínima", () => {
    expect(matchupDePro(contexto({ doom_bringer: { jogos: 19, itens: [] } }, []))).toBeNull();
  });

  it.each([
    { nomes: [], esperado: "" },
    { nomes: ["Doom"], esperado: "Doom" },
    { nomes: ["Doom", "Necrophos"], esperado: "Doom e Necrophos" },
    { nomes: ["Doom", "Necrophos", "Ursa"], esperado: "Doom, Necrophos e Ursa" },
  ])("lista $nomes como '$esperado'", ({ nomes, esperado }) => {
    expect(listaDeNomes(nomes)).toBe(esperado);
  });
});

describe("itemContraInimigos", () => {
  it.each([
    { caso: "Butterfly 14 min depois da mediana", compras: [compra("butterfly", 37)], id: "build-matchup-atrasado-butterfly", tipo: "erro", peso: "pesou" },
    { caso: "Butterfly 20 min depois da mediana", compras: [compra("butterfly", 43)], id: "build-matchup-atrasado-butterfly", tipo: "erro", peso: "pesou_muito" },
    { caso: "Butterfly dentro de 8 min da mediana", compras: [compra("butterfly", 28)], id: "build-matchup-no-tempo-butterfly", tipo: "acerto", peso: "leve" },
    { caso: "Butterfly nunca feito (83% dos pros)", compras: [], id: "build-matchup-faltou-butterfly", tipo: "erro", peso: "pesou_muito" },
    { caso: "Skadi (53%) no tempo", compras: [compra("skadi", 24)], id: "build-matchup-no-tempo-skadi", tipo: "acerto", peso: "leve" },
    { caso: "Linken (1 em 60)", compras: [compra("sphere", 41.8)], id: "build-matchup-raro-sphere", tipo: "contexto", peso: "leve" },
  ])("$caso -> $id", ({ compras, id, tipo, peso }) => {
    const achado = itemContraInimigos(contexto(DOOM_E_NECRO, compras)).find((a) => a.id === id);
    expect(achado?.tipo).toBe(tipo);
    expect(achado?.peso).toBe(peso);
  });

  it("cita a amostra e o minuto da compra no texto", () => {
    const [atrasado] = itemContraInimigos(contexto(DOOM_E_NECRO, [compra("butterfly", 36 + 20 / 60)]));
    expect(atrasado?.oQueAconteceu).toBe(
      "Contra Doom e Necrophos, os pros fazem Butterfly em 83% das partidas, mediana 22,9 min (50 de 60 jogos pro contra eles); você fez aos 36:20.",
    );
  });

  it("no item raro, sugere o que os pros fazem no lugar", () => {
    const raro = itemContraInimigos(contexto(DOOM_E_NECRO, [compra("sphere", 41.8)])).find((a) => a.id === "build-matchup-raro-sphere");
    expect(raro?.titulo).toBe("Os pros quase não fazem sphere contra Doom e Necrophos (1 em 60)");
    expect(raro?.oQueFazer).toBe("Contra esse draft, eles respondem com skadi (53%, mediana 28,4 min).");
  });

  it.each([
    { caso: "sem amostra mínima", contra: { doom_bringer: { jogos: 10, itens: [{ chave: "butterfly", n: 10, mediana: 22 }] } }, duracao: 50 },
    { caso: "partida acabou antes do item", contra: DOOM_E_NECRO, duracao: 25 },
  ])("não diz nada quando $caso", ({ contra, duracao }) => {
    expect(itemContraInimigos(contexto(contra, [], duracao))).toEqual([]);
  });
});
