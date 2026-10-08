import { ITENS, heroi } from "./amostras/gravadas";
import { interacaoSchema } from "./interacoes";
import { analisarMecanicas, type MecanicaId } from "./mecanicas";

const recursos = (meu: string, inimigo: string, id: MecanicaId) => {
  const achado = analisarMecanicas(heroi(meu), heroi(inimigo), ITENS).find((a) => a.id === id);
  if (!achado) throw new Error(`${inimigo} sem ${id}`);
  return achado;
};
const ids = (meu: string, inimigo: string, id: MecanicaId) => recursos(meu, inimigo, id).recursos.map((r) => r.id);

it("Morphling contra Axe: Manta no tempo certo e o Shard no cartão do Berserker's Call", () => {
  const controle = recursos("morphling", "axe", "controle");
  expect(controle.evidencias.map((e) => e.habilidade)).toEqual(["Berserker's Call"]);
  expect(controle.recursos.map((r) => r.id)).toEqual(["item:manta", "shard"]);
});

it("dá a janela do Manta com a conjuração do Call e a invulnerabilidade do item, e avisa que o dispel não tira o taunt", () => {
  const manta = recursos("morphling", "axe", "controle").recursos.find((r) => r.id === "item:manta");
  expect(manta?.detalhes).toContain(
    "Janela: os 0,1 s de invulnerabilidade do Manta Style precisam cobrir o fim dos 0,3 s de conjuração do Berserker's Call. "
    + "Aperte entre 0,2 s e 0,3 s depois que ele começa a animação, sem contar a sua latência.",
  );
  expect(manta?.detalhes).toContain("Depois que o Berserker's Call pegou, o dispel do Manta Style não tira: ele não sai com dispel.");
});

it("o Shard do Morphling cita o texto do jogo e explica o Culling Blade", () => {
  const shard = recursos("morphling", "axe", "controle").recursos.find((r) => r.id === "shard");
  expect(shard?.prova).toBe("Morphling can shift attributes while stunned. Reduces mana cost.");
  expect(shard?.detalhes.join(" ")).toMatch(/Culling Blade mata na hora quem está com a vida abaixo do dano/);
  expect(shard?.fontes.length).toBeGreaterThanOrEqual(2);
});

it("não indica BKB contra o Call, que atravessa BKB e não sai com dispel", () => {
  const controle = recursos("morphling", "axe", "controle");
  expect(controle.itens.map((i) => i.item.chave)).toEqual([]);
  expect(controle.observacoes).toEqual(["Atravessa BKB: Berserker's Call.", "Não sai com dispel: Berserker's Call."]);
});

it("herói sem Shard ou Scepter que responda não ganha melhoria", () => {
  expect(ids("antimage", "axe", "controle")).toEqual(["item:manta"]);
  expect(ids("slark", "lion", "controle")).toEqual([]);
});

it("deriva do aghs_desc quando não há interação curada: Shard do Morphling contra o stun do Lion", () => {
  const shard = recursos("morphling", "lion", "controle").recursos;
  expect(shard).toEqual([expect.objectContaining({ id: "shard", resumo: "Libera Attribute Shift (Strength Gain) mesmo atordoado.", patch: null })]);
});

describe("schema das interações curadas", () => {
  const valida = {
    tipo: "desvio", id: "x", mecanica: "controle", contra: "axe_berserkers_call", item: "manta", patch: "7.41",
    resumo: "r", detalhe: "d", fontes: ["https://a.example/1", "https://b.example/2"],
  };

  it.each<[string, Record<string, unknown>]>([
    ["sem fonte", { fontes: [] }],
    ["com uma fonte só", { fontes: ["https://a.example/1"] }],
    ["com fonte que não é link https", { fontes: ["wiki do Dota", "http://a.example/1"] }],
    ["sem o campo de fontes", { fontes: undefined }],
    ["com mecânica que não existe", { mecanica: "teleporte" }],
  ])("recusa a regra %s", (_, mudanca) => {
    expect(interacaoSchema.safeParse({ ...valida, ...mudanca }).success).toBe(false);
  });

  it("aceita a regra com duas fontes", () => {
    expect(interacaoSchema.safeParse(valida).success).toBe(true);
  });
});
