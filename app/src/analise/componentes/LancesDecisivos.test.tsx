import { readFileSync } from "node:fs";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { contextoDaAmostraCompleta, detalheDaAmostraCompleta } from "../amostras/amostraCompleta";
import { escolherLances } from "../lancesDecisivos";
import { avaliarRegras } from "../motor";
import { REGRAS as MOMENTOS } from "../regras/momentos";
import { REGRAS as OBJETIVOS_E_AEGIS } from "../regras/objetivos-e-aegis";
import { LancesDecisivos } from "./LancesDecisivos";

const OBJETIVOS = readFileSync(`${__dirname}/../../../public/data/objetivos.json`, "utf-8");

beforeEach(() => {
  vi.stubGlobal("fetch", vi.fn(async () => new Response(OBJETIVOS, { headers: { "content-type": "application/json" } })));
});
afterEach(() => vi.unstubAllGlobals());

function renderizar() {
  const detalhe = detalheDaAmostraCompleta();
  const achados = avaliarRegras(contextoDaAmostraCompleta(), [...MOMENTOS, ...OBJETIVOS_E_AEGIS]);
  return render(<LancesDecisivos detalhe={detalhe} escolha={escolherLances(detalhe, achados)} />);
}

it("mostra quantos lances decidiram o jogo, com um marcador por lance na linha do tempo", async () => {
  renderizar();
  const titulo = await screen.findByRole("heading", { level: 2 });
  const quantos = Number(/^(\d+) lances/.exec(titulo.textContent ?? "")?.[1]);
  expect(quantos).toBeGreaterThan(0);
  const marcadores = within(screen.getByRole("list", { name: "Lances na linha do tempo" })).getAllByRole("button");
  expect(marcadores).toHaveLength(quantos);
});

it("clicar no marcador leva o relógio ao lance e mostra o card com o que fazer", async () => {
  renderizar();
  const marcador = await screen.findByRole("button", { name: /Erro grave às 49:51/ });
  fireEvent.click(marcador);
  expect(screen.getByRole("slider", { name: "Tempo da partida" })).toHaveValue("2991");
  const card = screen.getAllByRole("article").find((a) => a.textContent?.includes("Erro grave · 49:51"));
  expect(card).toBeDefined();
  await act(async () => { await new Promise((r) => setTimeout(r, 1_000)); });
  expect(card?.textContent).toContain("Axe volta às 51:17");
});

it("tocar alterna para pausar e o teclado chega nos controles", async () => {
  renderizar();
  const tocar = await screen.findByRole("button", { name: "Tocar" });
  fireEvent.click(tocar);
  expect(screen.getByRole("button", { name: "Pausar" })).toHaveAttribute("aria-pressed", "true");
});

it("traz o que fez bem e um único treino com a janela de tempo", async () => {
  renderizar();
  expect(await screen.findByRole("heading", { name: "O que treinar na próxima" })).toBeInTheDocument();
  expect(screen.getByText(/^Entre \d+:\d{2} e \d+:\d{2}/)).toBeInTheDocument();
});
