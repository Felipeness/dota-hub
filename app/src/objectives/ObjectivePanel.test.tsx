import { fireEvent, render, screen } from "@testing-library/react";
import { numerosDoObjetivo, ObjectivePanel, rotuloOrigem } from "./ObjectivePanel";

const camp = { id: "rad_safe_small_1", tipo: "camp", nome: "Pequeno do pull", x: 0.7, y: 0.2, lado: "radiant" as const, detalhes: {} };
const conteudo = [{ id: "camp", titulo: "Camp", patch: "7.41", fontes: ["Liquipedia"], secoes: { basico: "Camps nascem a cada minuto.", avancado: null }, origem: { basico: null, avancado: null }, links: [], extras: {} }];

it("mostra o básico e, sem avançado, avisa que ainda não foi escrito", () => {
  render(<ObjectivePanel objetivo={camp} conteudo={conteudo} onFechar={() => {}} />);
  expect(screen.getByText("Camps nascem a cada minuto.")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("tab", { name: "Avançado" }));
  expect(screen.getByText("Ainda não escrito.")).toBeInTheDocument();
  expect(screen.getByText(/Liquipedia/)).toBeInTheDocument();
});

const rosh = { ...camp, id: "roshan", tipo: "roshan", nome: "Roshan" };
const roshConteudo = [{
  id: "roshan", titulo: "Roshan", patch: "7.41", fontes: ["datamine"], links: [], extras: {},
  secoes: { basico: "Vida 6000.", avancado: "Mediana 23:10." },
  origem: { basico: { tipo: "recomendado" as const, replays: [] }, avancado: { tipo: "replay" as const, replays: ["111", "222"] } },
}];

it("mostra no rodapé a marca de origem da aba aberta", () => {
  render(<ObjectivePanel objetivo={rosh} conteudo={roshConteudo} onFechar={() => {}} />);
  expect(screen.getByText("Recomendado.")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("tab", { name: "Avançado" }));
  expect(screen.getByText("Visto em 2 replays: 111, 222.")).toBeInTheDocument();
});

it.each([
  { marca: null, esperado: null },
  { marca: { tipo: "recomendado" as const, replays: [] }, esperado: "Recomendado." },
  { marca: { tipo: "replay" as const, replays: ["8834466305"] }, esperado: "Visto em replay 8834466305." },
])("rotuloOrigem($marca) devolve $esperado", ({ marca, esperado }) => {
  expect(rotuloOrigem(marca)).toBe(esperado);
});

it.each([
  { detalhes: { lane: "top", tier: 1 }, esperado: [["Lane", "top"], ["Tier", "1"]] },
  { detalhes: { empilhavel: true, anfibio: false }, esperado: [["Dá stack", "sim"], ["Anfíbio", "não"]] },
  { detalhes: { dist_torre_unidades: 1420, regra: "texto longo demais para caber numa célula da grade" }, esperado: [["Distância da torre", "1.420"], ["Regra", "texto longo demais p…"]] },
  { detalhes: { chave_nova: "x" }, esperado: [["chave nova", "x"]] },
  { detalhes: { lista: [1, 2] }, esperado: [] },
])("numerosDoObjetivo($detalhes) devolve $esperado", ({ detalhes, esperado }) => {
  expect(numerosDoObjetivo(detalhes)).toEqual(esperado);
});

it("não esconde o pull só porque a explicação é longa", () => {
  const texto = "sim: safe lane (bot), pull clássico; double pull junto com rad_safe_large_1";
  expect(numerosDoObjetivo({ puxavel: texto })).toEqual([["Dá pull", `${texto.slice(0, 20)}…`]]);
});

it("troca o id de outro objetivo pelo nome dele", () => {
  const nomes = new Map([["rad_bot_t1", "Torre T1 de baixo (Radiant)"]]);
  expect(numerosDoObjetivo({ perto_de: "rad_bot_t1" }, nomes)).toEqual([["Perto de", "Torre T1 de baixo (Radiant)"]]);
});

it("no avançado, cada parágrafo vira um cartão numerado", () => {
  const dois = [{ ...roshConteudo[0], secoes: { basico: "Vida 6000.", avancado: "Primeiro ponto.\n\nSegundo ponto." } }];
  render(<ObjectivePanel objetivo={rosh} conteudo={dois} onFechar={() => {}} />);
  fireEvent.click(screen.getByRole("tab", { name: "Avançado" }));
  const cartoes = screen.getAllByRole("listitem");
  expect(cartoes).toHaveLength(2);
  expect(cartoes[1]).toHaveTextContent("2Segundo ponto.");
});
