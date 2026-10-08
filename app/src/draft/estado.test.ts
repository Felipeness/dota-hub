import { adicionar, escreverDraft, lerDraft, remover } from "./estado";

const VALIDOS = new Set([1, 2, 8, 57, 97]);
const VAZIO = { aliados: [], inimigos: [], bans: [] };

describe("draft na URL", () => {
  it("lê e escreve o mesmo draft", () => {
    const draft = { aliados: [8, 2], inimigos: [1], bans: [57] };
    expect(lerDraft(escreverDraft(draft), VALIDOS)).toEqual(draft);
  });

  it("descarta id desconhecido e herói repetido em outro lado", () => {
    expect(lerDraft(new URLSearchParams("a=8,999&e=8,1&b=x"), VALIDOS)).toEqual({ aliados: [8], inimigos: [1], bans: [] });
  });
});

describe("adicionar e remover", () => {
  it("não deixa o mesmo herói em dois lados", () => {
    const draft = adicionar(VAZIO, "aliados", 8);
    expect(adicionar(draft, "inimigos", 8)).toBe(draft);
  });

  it("respeita o limite de 5 por time", () => {
    const cheio = { ...VAZIO, aliados: [1, 2, 8, 57, 97] };
    expect(adicionar(cheio, "aliados", 3)).toBe(cheio);
  });

  it("remove de qualquer lado", () => {
    expect(remover({ aliados: [8], inimigos: [1], bans: [57] }, 1)).toEqual({ aliados: [8], inimigos: [], bans: [57] });
  });
});
