import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import type { ConteudoItem } from "../data/schemas";
import { MarcarTexto } from "./Termo";

const BKB: ConteudoItem = {
  id: "bkb", titulo: "BKB", patch: "7.41", fontes: [],
  secoes: { basico: "Imunidade a magias por alguns segundos.", avancado: null },
  origem: { basico: null, avancado: null }, links: [], extras: {},
};

function renderizar(texto: string, termos: ConteudoItem[]) {
  return render(<MemoryRouter><MarcarTexto texto={texto} termos={termos} /></MemoryRouter>);
}

it("mostraOTextoSemMarcacaoQuandoNaoHaTermos", () => {
  renderizar("Comprar BKB cedo ajuda.", []);
  expect(screen.getByText(/Comprar BKB cedo ajuda\./)).toBeInTheDocument();
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
});

it("abreOBalaoAoReceberFoco", () => {
  renderizar("Comprar BKB cedo ajuda.", [BKB]);
  const botao = screen.getByRole("button", { name: "BKB" });
  expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  fireEvent.focus(botao);
  expect(screen.getByRole("tooltip")).toHaveTextContent("Imunidade a magias");
  expect(botao).toHaveAttribute("aria-describedby", screen.getByRole("tooltip").id);
});

it("fechaOBalaoComEsc", () => {
  renderizar("Comprar BKB cedo ajuda.", [BKB]);
  const botao = screen.getByRole("button", { name: "BKB" });
  fireEvent.focus(botao);
  expect(screen.getByRole("tooltip")).toBeInTheDocument();
  fireEvent.keyDown(botao, { key: "Escape" });
  expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
});

it("oBalaoLinkaParaAPaginaDoTermoNoGlossario", () => {
  renderizar("Comprar BKB cedo ajuda.", [BKB]);
  fireEvent.focus(screen.getByRole("button", { name: "BKB" }));
  expect(screen.getByRole("link", { name: "ver no glossário" })).toHaveAttribute("href", "/glossario/bkb");
});
