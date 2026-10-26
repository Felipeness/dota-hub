import { extrairMencoes, type GuiaDraft, type Mencao } from "./guia";
import { avaliar, placarContra, sugerir, type Contexto, type HeroiDraft } from "./pontuacao";

const heroi = (id: number, nome: string, funcoes: string[], divine = { jogos: 10_000, vitorias: 5_000 }): HeroiDraft =>
  ({ id, nome, npc: nome.toLowerCase(), funcoes, atributo: "all", divine });

const JUGG = heroi(8, "Juggernaut", ["Carry"]);
const AXE = heroi(2, "Axe", ["Initiator", "Disabler"]);
const LION = heroi(26, "Lion", ["Support", "Disabler"]);
const OMNI = heroi(57, "Omniknight", ["Support"], { jogos: 10_000, vitorias: 5_300 });
const SVEN = heroi(18, "Sven", ["Carry"]);

const contexto = (mencoes: Mencao[] = []): Contexto => ({
  herois: new Map([JUGG, AXE, LION, OMNI, SVEN].map((h) => [h.id, h])),
  // Axe venceu 60 de 200 contra o Lion: o Lion venceu 140 (70%).
  matchups: new Map([[AXE.id, new Map([[LION.id, { jogos: 200, vitorias: 60 }], [SVEN.id, { jogos: 10, vitorias: 2 }]])]]),
  mencoes,
});

describe("placarContra", () => {
  it("inverte o placar quando só o rival tem o matchup carregado", () => {
    expect(placarContra(contexto().matchups, LION.id, AXE.id)).toEqual({ jogos: 200, vitorias: 140 });
  });
});

describe("avaliar", () => {
  const draft = { aliados: [JUGG.id], inimigos: [AXE.id], bans: [] };

  it("explica o matchup com taxa e amostra", () => {
    const { motivos } = avaliar(contexto(), LION, draft, "pick");
    expect(motivos.find((m) => m.tipo === "matchup")?.curto).toBe("Vence 70,0% contra Axe");
  });

  it("ignora matchup com menos de 20 jogos", () => {
    expect(avaliar(contexto(), SVEN, draft, "pick").motivos.some((m) => m.tipo === "matchup")).toBe(false);
  });

  it("aponta a função que falta no time", () => {
    const curtos = avaliar(contexto(), LION, draft, "pick").motivos.map((m) => m.curto);
    expect(curtos).toContain("Seu time ainda precisa de suporte");
  });

  it("usa o guia do aliado que pede o candidato", () => {
    const mencao: Mencao = { dono: JUGG.id, alvo: LION.id, lista: "bom", lado: "aliado", pp: 2.4, texto: "Seu time tem Lion +2,4 pp." };
    const motivo = avaliar(contexto([mencao]), LION, draft, "pick").motivos.find((m) => m.tipo === "guia");
    expect(motivo).toMatchObject({ pp: 2.4, curto: "Guia do Juggernaut: pede Lion no time (+2,4 pp)" });
  });

  it("no ban, conta o que o guia do seu herói teme", () => {
    const mencao: Mencao = { dono: JUGG.id, alvo: OMNI.id, lista: "evitar", lado: "inimigo", pp: -4.4, texto: "O inimigo tem Omniknight (-4,4 pp)." };
    const motivo = avaliar(contexto([mencao]), OMNI, draft, "ban").motivos.find((m) => m.tipo === "guia");
    expect(motivo).toMatchObject({ pp: 4.4, curto: "Guia do Juggernaut: sofre contra Omniknight (−4,4 pp)" });
  });

  it("soma o guia do inimigo uma vez quando ele cita o candidato em vários itens", () => {
    const guiaDoAxe: GuiaDraft = {
      heroId: AXE.id, momento: "", itensSituacionais: [],
      bom: [],
      evitar: ["O inimigo tem counters: Omniknight (-4,5).", "O inimigo tem cura em área: Omniknight, Lion."],
    };
    const mencoes = extrairMencoes(guiaDoAxe, [AXE, LION, OMNI]);
    const doGuia = avaliar(contexto(mencoes), OMNI, draft, "pick").motivos.filter((m) => m.tipo === "guia");
    expect(doGuia).toMatchObject([{ pp: 4.5, curto: "Guia do Axe: sofre contra Omniknight (−4,5 pp)" }]);
  });

  it("dá chave única a cada motivo do cartão", () => {
    const mencao: Mencao = { dono: AXE.id, alvo: LION.id, lista: "evitar", lado: "inimigo", pp: null, texto: "O inimigo tem Lion." };
    const chaves = avaliar(contexto([mencao]), LION, draft, "pick").motivos.map((m) => m.chave);
    expect(new Set(chaves).size).toBe(chaves.length);
  });

  it("aponta o inimigo com a pior taxa de vitória pra linkar o confronto 1x1", () => {
    expect(avaliar(contexto(), LION, draft, "pick").maisPerigoso).toBe(AXE.id);
  });

  it("não aponta inimigo sem amostra suficiente de matchup", () => {
    const soComPoucoJogo = { aliados: [JUGG.id], inimigos: [SVEN.id], bans: [] };
    expect(avaliar(contexto(), AXE, soComPoucoJogo, "pick").maisPerigoso).toBeNull();
  });
});

describe("sugerir", () => {
  it("tira do ranking quem já foi pego ou banido e ordena pela nota", () => {
    const ids = sugerir(contexto(), { aliados: [JUGG.id], inimigos: [AXE.id], bans: [SVEN.id] }, "pick", 5).map((s) => s.heroi.id);
    expect(ids).toEqual([LION.id, OMNI.id]);
  });
});
