import { fireEvent, render, screen } from "@testing-library/react";
import { ObjectivePanel, rotuloOrigem } from "./ObjectivePanel";

const camp = { id: "rad_safe_small_1", tipo: "camp", nome: "Pequeno do pull", x: 0.7, y: 0.2, lado: "radiant" as const, detalhes: {} };
const conteudo = [{ id: "camp", titulo: "Camp", patch: "7.41", fontes: ["Liquipedia"], secoes: { basico: "Camps nascem a cada minuto.", avancado: null }, origem: { basico: null, avancado: null }, links: [] }];

it("mostra o básico e, sem avançado, avisa que ainda não foi escrito", () => {
  render(<ObjectivePanel objetivo={camp} conteudo={conteudo} onFechar={() => {}} />);
  expect(screen.getByText("Camps nascem a cada minuto.")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("tab", { name: "Avançado" }));
  expect(screen.getByText("Ainda não escrito.")).toBeInTheDocument();
  expect(screen.getByText(/Liquipedia/)).toBeInTheDocument();
});

const rosh = { ...camp, id: "roshan", tipo: "roshan", nome: "Roshan" };
const roshConteudo = [{
  id: "roshan", titulo: "Roshan", patch: "7.41", fontes: ["datamine"], links: [],
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
