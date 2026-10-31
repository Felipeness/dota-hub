import { describe, expect, it } from "vitest";
import {
  camposCompletos, escreverEstadoDaUrl, espalharColagem, lerContaDoDraft, lerEstadoDaUrl, textosDosCampos, urlCompleta, validarCampos,
} from "./contasDoDraft";

describe("lerContaDoDraft", () => {
  it.each([
    { entrada: "321580662", conta: 321580662 },
    { entrada: "  321580662  ", conta: 321580662 },
    { entrada: "76561198281846390", conta: 321580662 },
    { entrada: "https://www.opendota.com/players/321580662", conta: 321580662 },
    { entrada: "https://www.dotabuff.com/players/321580662/matches", conta: 321580662 },
    { entrada: "stratz.com/players/321580662?tab=heroes", conta: 321580662 },
  ])("converte $entrada em account_id $conta", ({ entrada, conta }) => {
    expect(lerContaDoDraft(entrada)).toEqual({ ok: true, conta });
  });

  it.each([
    { entrada: "", trecho: "Cole o ID" },
    { entrada: "yatoro", trecho: "Friend ID" },
    { entrada: "https://exemplo.com/players/123", trecho: "Friend ID" },
    { entrada: "0", trecho: "não é de uma conta" },
    { entrada: "5000000000", trecho: "não é de uma conta" },
    { entrada: "12345678901234", trecho: "Friend ID" },
    { entrada: "76561197960265728", trecho: "Friend ID" },
  ])("recusa '$entrada' com mensagem clara", ({ entrada, trecho }) => {
    const leitura = lerContaDoDraft(entrada);
    expect(leitura.ok).toBe(false);
    if (!leitura.ok) expect(leitura.mensagem).toContain(trecho);
  });
});

describe("validarCampos", () => {
  it("deixa vazio sem erro e marca só a segunda ocorrência da mesma conta", () => {
    const campos = validarCampos(["10", "", "x", "76561197960265738", "11"]);
    expect(campos.map((c) => c.estado)).toEqual(["valido", "vazio", "erro", "erro", "valido"]);
    expect(campos[3]).toEqual({ estado: "erro", mensagem: "Essa conta já está em outro campo." });
  });

  it.each([
    { textos: Array.from({ length: 10 }, (_, i) => String(i + 1)), completo: true },
    { textos: [...Array.from({ length: 9 }, (_, i) => String(i + 1)), ""], completo: false },
    { textos: [...Array.from({ length: 9 }, (_, i) => String(i + 1)), "abc"], completo: false },
  ])("camposCompletos exige as 10 contas válidas: $completo", ({ textos, completo }) => {
    expect(camposCompletos(validarCampos(textos))).toBe(completo);
  });
});

describe("espalharColagem", () => {
  const vazios = Array.from({ length: 10 }, () => "");

  it.each([
    { nome: "linhas", colado: "1\n2\n3", inicio: 0, esperado: ["1", "2", "3", "", "", "", "", "", "", ""] },
    { nome: "vírgulas e espaços", colado: "1, 2 ,3", inicio: 0, esperado: ["1", "2", "3", "", "", "", "", "", "", ""] },
    { nome: "começa no campo tocado", colado: "7 8", inicio: 4, esperado: ["", "", "", "", "7", "8", "", "", "", ""] },
    { nome: "atravessa para o time inimigo", colado: "1 2 3", inicio: 3, esperado: ["", "", "", "1", "2", "3", "", "", "", ""] },
    { nome: "descarta o que passa do décimo campo", colado: "1 2 3 4", inicio: 8, esperado: ["", "", "", "", "", "", "", "", "1", "2"] },
  ])("$nome", ({ colado, inicio, esperado }) => {
    expect(espalharColagem(vazios, inicio, colado)).toEqual(esperado);
  });

  it.each(["123", "  123  ", "", "https://www.opendota.com/players/123"])("devolve null para colagem de um item só: '%s'", (colado) => {
    expect(espalharColagem(vazios, 0, colado)).toBeNull();
  });

  it("mantém o que já estava nos campos que a colagem não alcança", () => {
    const antes = ["9", "", "", "", "", "", "", "", "", "8"];
    expect(espalharColagem(antes, 1, "1 2")).toEqual(["9", "1", "2", "", "", "", "", "", "", "8"]);
  });
});

describe("estado na URL", () => {
  it("lê e escreve o mesmo estado", () => {
    const estado = { aliados: [1, 2, 3, 4, 5], inimigos: [6, 7, 8, 9, 10], bans: [57, 2] };
    const url = escreverEstadoDaUrl(estado);
    expect(url.toString()).toBe("a=1%2C2%2C3%2C4%2C5&e=6%2C7%2C8%2C9%2C10&b=57%2C2");
    expect(lerEstadoDaUrl(url)).toEqual(estado);
  });

  it.each([
    { nome: "sem parâmetros", busca: "", esperado: { aliados: [], inimigos: [], bans: [] } },
    { nome: "descarta lixo e repetidas", busca: "a=1,x,1,2&e=,3&b=a,0,-4,57,57", esperado: { aliados: [1, 2], inimigos: [3], bans: [57] } },
    { nome: "conta nos dois times fica com o aliado", busca: "a=1,2&e=2,3", esperado: { aliados: [1, 2], inimigos: [3], bans: [] } },
    { nome: "aceita Steam64 e corta em 5", busca: "a=76561197960265729,2,3,4,5,6", esperado: { aliados: [1, 2, 3, 4, 5], inimigos: [], bans: [] } },
  ])("$nome", ({ busca, esperado }) => {
    expect(lerEstadoDaUrl(new URLSearchParams(busca))).toEqual(esperado);
  });

  it("não escreve parâmetro vazio", () => {
    expect(escreverEstadoDaUrl({ aliados: [], inimigos: [], bans: [] }).toString()).toBe("");
  });

  it("urlCompleta pede 5 contas de cada lado", () => {
    expect(urlCompleta(lerEstadoDaUrl(new URLSearchParams("a=1,2,3,4,5&e=6,7,8,9,10")))).toBe(true);
    expect(urlCompleta(lerEstadoDaUrl(new URLSearchParams("a=1,2,3,4,5&e=6,7,8,9")))).toBe(false);
  });

  it("textosDosCampos preenche os dez campos, vazios onde falta conta", () => {
    expect(textosDosCampos({ aliados: [1, 2], inimigos: [3], bans: [] })).toEqual(["1", "2", "", "", "", "3", "", "", "", ""]);
  });
});
