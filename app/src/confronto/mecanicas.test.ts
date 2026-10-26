import { ITENS, heroi } from "./amostras/gravadas";
import { analisarMecanicas, itensDoConfronto, provar, type MecanicaId } from "./mecanicas";
import { habilidade } from "./modelo";

const analisar = (meu: string, inimigo: string) => analisarMecanicas(heroi(meu), heroi(inimigo), ITENS);
const ids = (meu: string, inimigo: string) => analisar(meu, inimigo).map((a) => a.id);
const achado = (meu: string, inimigo: string, id: MecanicaId) => {
  const encontrado = analisar(meu, inimigo).find((a) => a.id === id);
  if (!encontrado) throw new Error(`${inimigo} sem ${id}`);
  return encontrado;
};
const itens = (meu: string, inimigo: string, id: MecanicaId) => achado(meu, inimigo, id).itens.map((i) => i.item.chave);

it.each<[string, MecanicaId[]]>([
  ["slark", ["invisibilidade", "controle", "cura", "fuga"]],
  ["phantom_lancer", ["ilusoes", "evasao", "fuga"]],
  ["phantom_assassin", ["invisibilidade", "evasao", "fuga", "passivas"]],
  ["silencer", ["silencio", "magico"]],
  ["lion", ["controle", "magico"]],
  ["life_stealer", ["cura"]],
])("acha as mecânicas reais de %s", (inimigo, esperadas) => {
  expect(ids("antimage", inimigo)).toEqual(esperadas);
});

it("não confunde revelar invisível com ficar invisível (Chronosphere revela)", () => {
  expect(ids("antimage", "faceless_void")).not.toContain("invisibilidade");
});

it("prova a mecânica com o atributo da habilidade", () => {
  expect(achado("antimage", "slark", "controle").evidencias).toEqual([{ habilidade: "Pounce", trecho: "LEASH DURATION: 2.5 / 2.75 / 3 / 3.25" }]);
});

it("não indica BKB contra o que atravessa BKB e diz isso", () => {
  const chrono = achado("antimage", "faceless_void", "controle");
  expect(chrono.itens).toEqual([]);
  expect(chrono.observacoes).toContain("Atravessa BKB: Chronosphere.");
});

it("indica Linken e Lotus só contra feitiço com alvo", () => {
  expect(itens("antimage", "lion", "controle")).toEqual(["black_king_bar", "sphere", "lotus_orb"]);
  expect(itens("antimage", "slark", "controle")).toEqual(["black_king_bar"]);
});

it("indica Manta só quando o silêncio sai com dispel básico", () => {
  expect(itens("antimage", "silencer", "silencio")).toContain("manta");
  expect(itens("antimage", "riki", "silencio")).not.toContain("manta");
});

it("indica Battle Fury contra ilusões só para herói corpo a corpo", () => {
  expect(itens("antimage", "phantom_lancer", "ilusoes")).toContain("bfury");
  expect(itens("lion", "phantom_lancer", "ilusoes")).not.toContain("bfury");
});

it("cada item indicado traz a frase do próprio item que sustenta o motivo", () => {
  const vessel = achado("antimage", "life_stealer", "cura").itens.find((i) => i.item.chave === "spirit_vessel");
  expect(vessel?.prova).toMatch(/Health Restoration by 70%/);
});

it("item sem a frase que prova o motivo não aparece", () => {
  const semTexto = new Map([...ITENS].map(([chave, item]) => [chave, { ...item, texto: "" }]));
  expect(analisarMecanicas(heroi("antimage"), heroi("slark"), semTexto).flatMap((a) => a.itens)).toEqual([]);
});

it("mostra as suas habilidades que respondem à mecânica", () => {
  expect(achado("antimage", "silencer", "magico").trunfos.map((t) => t.habilidade)).toEqual(["Counterspell"]);
});

it("junta os itens sem repetir, guardando a primeira mecânica", () => {
  const juntos = itensDoConfronto(analisar("antimage", "silencer"));
  expect(juntos.filter((i) => i.item.chave === "black_king_bar")).toHaveLength(1);
  expect(juntos[0]?.mecanica).toBe("Silencia");
});

it("ignora atributo zerado gerado pelo OpenDota", () => {
  const h = habilidade("x", { dname: "X", behavior: "No Target", attrib: [{ key: "stun_duration", header: "STUN:", value: "0" }], desc: "Nothing." });
  expect(provar(h, { atributo: /stun/ })).toBeNull();
});
