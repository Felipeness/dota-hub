import { conselhosDaSituacao, extrairMencoes, situacoesComConselho, type GuiaDraft } from "./guia";

const NOMES = [
  { id: 8, nome: "Juggernaut" }, { id: 97, nome: "Magnus" }, { id: 57, nome: "Omniknight" }, { id: 15, nome: "Razor" },
  { id: 18, nome: "Sven" }, { id: 66, nome: "Clinkz" }, { id: 93, nome: "Slark" }, { id: 73, nome: "Alchemist" },
];

// Frases reais dos guias (Juggernaut e Alchemist, 7.41f), cortadas.
const JUGGERNAUT: GuiaDraft = {
  heroId: 8,
  bom: ["Seu time tem iniciação em área ou controle de grupo e quer decidir entre 25 e 50 min: Magnus +3,5 pp (15.499 jogos)."],
  evitar: [
    "O inimigo tem Omniknight (-4,4 pp), Razor (-3,7) no Divine+; com dois deles troque por Sven, que fica neutro.",
    "Seus aliados dividem o farm ou a selva: Clinkz -5,6 pp (1.083 jogos).",
  ],
  momento: "Pode sair cedo sem perder taxa.",
  itensSituacionais: [{ nome: "Monkey King Bar", quando: "Contra evasão e miss (Butterfly inimigo)." }],
};
const ALCHEMIST: GuiaDraft = {
  heroId: 73,
  bom: ["O inimigo não tem os counters diretos (Slark, Monkey King) e a offlane dele não pune."],
  evitar: [],
  momento: "",
  itensSituacionais: [],
};

describe("extrairMencoes", () => {
  it("lê lado, lista e número de cada herói citado na primeira oração", () => {
    const mencoes = extrairMencoes(JUGGERNAUT, NOMES);
    expect(mencoes.map(({ alvo, lista, lado, pp }) => ({ alvo, lista, lado, pp }))).toEqual([
      { alvo: 97, lista: "bom", lado: "aliado", pp: 3.5 },
      { alvo: 57, lista: "evitar", lado: "inimigo", pp: -4.4 },
      { alvo: 15, lista: "evitar", lado: "inimigo", pp: -3.7 },
      { alvo: 66, lista: "evitar", lado: "aliado", pp: -5.6 },
    ]);
  });

  it("ignora a troca sugerida depois do ponto e vírgula", () => {
    expect(extrairMencoes(JUGGERNAUT, NOMES).some((m) => m.alvo === 18)).toBe(false);
  });

  it("vira a lista quando a frase nega o herói", () => {
    const [slark] = extrairMencoes(ALCHEMIST, NOMES);
    expect(slark).toMatchObject({ alvo: 93, lista: "evitar", lado: "inimigo", pp: null });
  });

  it("não trata como negação um \"sem\" que não abre lista de heróis", () => {
    const guia = { ...JUGGERNAUT, bom: ["Seu time tem controle para você farmar sem ser pego: Magnus (+2,1 pp; 9.869 jogos)."], evitar: [] };
    expect(extrairMencoes(guia, NOMES)).toMatchObject([{ alvo: 97, lista: "bom", pp: 2.1 }]);
  });

  it("corta o aparte depois do fim da frase", () => {
    const guia = { ...JUGGERNAUT, bom: ["O inimigo tem Razor. A fama não aparece contra Slark (-1,2 pp)."], evitar: [] };
    expect(extrairMencoes(guia, NOMES).map((m) => m.alvo)).toEqual([15]);
  });

  it("ignora frase sem lado claro", () => {
    const guia = { ...JUGGERNAUT, bom: ["Há um carry livre que você domina mais (Sven)."], evitar: [] };
    expect(extrairMencoes(guia, NOMES)).toEqual([]);
  });
});

describe("situações", () => {
  it("acha o item do guia para a situação", () => {
    expect(conselhosDaSituacao("evasao", [JUGGERNAUT])).toEqual([
      { tipo: "item", heroId: 8, item: "Monkey King Bar", texto: "Contra evasão e miss (Butterfly inimigo)." },
    ]);
  });

  it("só lista situações que algum guia cita", () => {
    expect(situacoesComConselho([JUGGERNAUT])).toEqual(["evasao"]);
  });
});
