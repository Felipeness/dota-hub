import { readFileSync } from "node:fs";
import { fireEvent, render, screen } from "@testing-library/react";
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

const slider = () => screen.getByRole("slider", { name: "Tempo da partida" });

it("abre parado no primeiro lance, com o card dele, o placar e o tempo de jogo", async () => {
  renderizar();
  const titulo = await screen.findByRole("heading", { level: 2 });
  expect(Number(/^(\d+) lances/.exec(titulo.textContent ?? "")?.[1])).toBeGreaterThan(0);
  const primeiro = Number(slider().getAttribute("value"));
  expect(screen.getAllByRole("article").some((a) => a.textContent?.includes(`· ${Math.floor(primeiro / 60)}:`))).toBe(true);
  expect(screen.getByText("/ 50:46", { exact: false })).toBeInTheDocument();
  expect(screen.getByLabelText(/^Abates: seu time \d+, inimigo \d+$/)).toBeInTheDocument();
});

it("próximo lance (botão ou tecla L) leva o relógio ao lance e mostra o card com o que fazer", async () => {
  renderizar();
  const proximo = await screen.findByRole("button", { name: "Próximo lance (L)" });
  while (Number(slider().getAttribute("value")) < 1713) fireEvent.click(proximo);
  expect(slider()).toHaveValue("1713");
  const card = screen.getAllByRole("article").find((a) => a.textContent?.includes("Erro grave · 28:33"));
  expect(card?.textContent).toContain("Huskar volta às 29:19): recuar para a T2 de cima");
  fireEvent.keyDown(slider().closest(".replay-lances") ?? document.body, { key: "j" });
  expect(Number(slider().getAttribute("value"))).toBeLessThan(1713);
});

it("tocar alterna para pausar, pelo botão e pela barra de espaço", async () => {
  renderizar();
  fireEvent.click(await screen.findByRole("button", { name: "Tocar (K)" }));
  expect(screen.getByRole("button", { name: "Pausar (K)" })).toHaveAttribute("aria-pressed", "true");
  fireEvent.keyDown(slider().closest(".replay-lances") ?? document.body, { key: " " });
  expect(screen.getByRole("button", { name: "Tocar (K)" })).toBeInTheDocument();
});

it("traz o que fez bem e um único treino com a janela de tempo", async () => {
  renderizar();
  expect(await screen.findByRole("heading", { name: "O que treinar na próxima" })).toBeInTheDocument();
  expect(screen.getByText(/^Entre \d+:\d{2} e \d+:\d{2}/)).toBeInTheDocument();
});
