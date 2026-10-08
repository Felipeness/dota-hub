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
const draftComAxeAliado = { aliados: [1], inimigos: [], bans: [] };

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

it("mostra a posição e a lane do herói no slot, e deixa trocar manualmente", () => {
  const porId = new Map(HEROIS.map((h) => [h.id, h]));
  const onTrocarPosicao = vi.fn();
  render(
    <Tabuleiro
      herois={HEROIS} porId={porId} draft={draftComAxeAliado} onMudar={() => {}}
      posicoes={{ aliados: [{ heroId: 1, posicao: 1, lane: "safe", fracaoPro: 0.5 }] }}
      onTrocarPosicao={onTrocarPosicao}
    />,
  );
  expect(screen.getByText(/safelane · 50% dos pros/)).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText(/Posição de Pos 1/), { target: { value: "2" } });
  expect(onTrocarPosicao).toHaveBeenCalledWith("aliados", 1, 2);
});

it("não mostra posição nos bans", () => {
  const porId = new Map(HEROIS.map((h) => [h.id, h]));
  render(
    <Tabuleiro
      herois={HEROIS} porId={porId} draft={{ aliados: [], inimigos: [], bans: [1] }} onMudar={() => {}}
      posicoes={{}} onTrocarPosicao={() => {}}
    />,
  );
  expect(screen.queryByLabelText(/Posição de/)).not.toBeInTheDocument();
});
