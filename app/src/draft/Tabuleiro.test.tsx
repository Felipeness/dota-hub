import { fireEvent, render, screen } from "@testing-library/react";
import type { HeroiDraft } from "./pontuacao";
import { Tabuleiro } from "./Tabuleiro";

const heroi = (id: number, nome: string, funcoes: string[], atributo: HeroiDraft["atributo"]): HeroiDraft =>
  ({ id, nome, npc: nome.toLowerCase(), funcoes, atributo, divine: { jogos: 0, vitorias: 0 } });

const HEROIS = [
  heroi(1, "Axe", ["Initiator", "Disabler"], "str"),
  heroi(2, "Lion", ["Support", "Disabler"], "int"),
  heroi(3, "Juggernaut", ["Carry"], "agi"),
];
const draft = { aliados: [], inimigos: [], bans: [] };

it("mostra todos os heróis sem cortar quando não há filtro", () => {
  render(<Tabuleiro herois={HEROIS} porId={new Map()} draft={draft} onMudar={() => {}} />);
  expect(screen.getAllByRole("button", { name: /Axe|Lion|Juggernaut/ })).toHaveLength(3);
});

it("filtra por função", () => {
  render(<Tabuleiro herois={HEROIS} porId={new Map()} draft={draft} onMudar={() => {}} />);
  fireEvent.change(screen.getByLabelText("Filtrar por função"), { target: { value: "Carry" } });
  expect(screen.getByRole("button", { name: "Juggernaut" })).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Axe" })).not.toBeInTheDocument();
});

it("filtra por atributo", () => {
  render(<Tabuleiro herois={HEROIS} porId={new Map()} draft={draft} onMudar={() => {}} />);
  fireEvent.change(screen.getByLabelText("Filtrar por atributo"), { target: { value: "int" } });
  expect(screen.getByRole("button", { name: "Lion" })).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Axe" })).not.toBeInTheDocument();
});
