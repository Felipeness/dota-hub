/// <reference types="node" />
import { fireEvent, render, screen, within } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { MemoryRouter, Route, Routes, useLocation } from "react-router";
import type { Consultar } from "../live/consulta";
import { erroAoVivo, falha, ok } from "../live/erros";
import { filaSemIntervalo } from "../live/teste/gravados";
import { ProvedorAoVivo } from "../live/ProvedorAoVivo";
import { amostra } from "./amostras/gravadas";
import { ConfrontoPage } from "./ConfrontoPage";

const GRAVADAS: Readonly<Record<string, string>> = {
  "/constants/heroes": "herois", "/constants/hero_abilities": "habilidades-dos-herois",
  "/constants/abilities": "habilidades", "/constants/items": "itens",
  "/heroes/93/matchups": "matchups-93", "/heroes/93/itemPopularity": "popularidade-93",
};

const consultar: Consultar = async (pedido) => {
  const nome = GRAVADAS[pedido.caminho];
  if (!nome) return falha(erroAoVivo("NAO_ENCONTRADO"));
  return ok({ valor: pedido.schema.parse(amostra(nome)), frescor: { buscadoEm: 0, vencido: false } });
};

function Endereco() {
  const { pathname, search } = useLocation();
  return <output aria-label="endereço">{pathname + search}</output>;
}

function abrir(caminho: string) {
  vi.stubGlobal("fetch", async (url: string) => new Response(readFileSync(`public${url}`, "utf-8"), { headers: { "content-type": "application/json" } }));
  return render(
    <ProvedorAoVivo servicos={{ fila: filaSemIntervalo(), consultar }}>
      <MemoryRouter initialEntries={[caminho]}>
        <Routes><Route path="/confronto/:meu?/:inimigo?" element={<><ConfrontoPage /><Endereco /></>} /></Routes>
      </MemoryRouter>
    </ProvedorAoVivo>,
  );
}

afterEach(() => vi.unstubAllGlobals());

it("mostra vantagem, mecânicas, itens, dicas e guia do Slark contra o Phantom Lancer", async () => {
  abrir("/confronto/slark/phantom_lancer");
  const vantagem = await screen.findByRole("region", { name: "Quem leva vantagem" });
  expect(await within(vantagem).findByText(/jogos \(\d+ vitórias\)/)).toBeInTheDocument();
  expect(screen.getByRole("region", { name: /Por que/ })).toHaveTextContent("Cria ilusões");
  const itens = screen.getByRole("region", { name: "Itens que viram o confronto" });
  expect(within(itens).getByText("Battle Fury")).toBeInTheDocument();
  expect(screen.getByRole("region", { name: "Na prática" })).toBeInTheDocument();
  expect(await screen.findByRole("heading", { name: "No guia do Slark" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Guia completo do Slark" })).toHaveAttribute("href", "/herois/slark");
});

it("o atalho ?contra= escolhe o inimigo e a troca de lado vai para a URL completa", async () => {
  abrir("/confronto?contra=26");
  expect(await screen.findByRole("combobox", { name: /Inimigo/ })).toHaveValue("Lion");
  expect(await screen.findByRole("link", { name: "Ficha do Lion" })).toHaveAttribute("href", "/herois/lion");
  fireEvent.change(screen.getByRole("combobox", { name: /Seu herói/ }), { target: { value: "slark" } });
  expect(screen.getByLabelText("endereço")).toHaveTextContent("/confronto/slark/lion");
  fireEvent.click(screen.getByRole("button", { name: "Trocar os heróis de lado" }));
  expect(screen.getByLabelText("endereço")).toHaveTextContent("/confronto/lion/slark");
});

it("pede heróis diferentes quando os dois são iguais", async () => {
  abrir("/confronto/slark/slark");
  expect(await screen.findByText("Escolha dois heróis diferentes.")).toBeInTheDocument();
});
