import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import indice from "./amostras/indice.json";
import exemploA from "./amostras/time-exemplo-a.json";
import exemploB from "./amostras/time-exemplo-b.json";
import { TimeAtlasPage } from "./TimeAtlasPage";
import { TimesPage } from "./TimesPage";

const ARQUIVOS: Readonly<Record<string, unknown>> = {
  "/data/times_atlas/indice.json": indice,
  "/data/times_atlas/time-exemplo-a.json": exemploA,
  "/data/times_atlas/time-exemplo-b.json": exemploB,
};

function abrir(caminho: string, arquivos = ARQUIVOS) {
  vi.stubGlobal("fetch", (url: string) => {
    const corpo = arquivos[url];
    return Promise.resolve(corpo === undefined ? new Response("", { status: 404 }) : new Response(JSON.stringify(corpo)));
  });
  return render(
    <MemoryRouter initialEntries={[caminho]}>
      <Routes>
        <Route path="/times" element={<TimesPage />} />
        <Route path="/times/:id" element={<TimeAtlasPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

afterEach(() => vi.unstubAllGlobals());

it("a grade mostra os times com estilo, amostra e o selo LOW SAMPLE só no de amostra pequena", async () => {
  abrir("/times");
  const a = await screen.findByRole("link", { name: /Time Exemplo A/ });
  const b = screen.getByRole("link", { name: /Time Exemplo B/ });
  expect(a).toHaveAttribute("href", "/times/time-exemplo-a");
  expect(within(a).getByText(/40 partidas · 32 replays/)).toBeInTheDocument();
  expect(within(a).queryByText("LOW SAMPLE")).toBeNull();
  expect(within(b).getByText("LOW SAMPLE")).toBeInTheDocument();
});

it("o mapa de estilos usa os eixos do índice e troca de eixo pelo seletor", async () => {
  abrir("/times");
  const plano = await screen.findByRole("group", { name: "Times por Ritmo e Controle de visão" });
  expect(within(plano).getByRole("link", { name: "EXA" })).toHaveAttribute("href", "/times/time-exemplo-a");
  fireEvent.change(screen.getByLabelText("Eixo vertical"), { target: { value: "dependencia_hc" } });
  expect(screen.getByRole("group", { name: "Times por Ritmo e Dependência do carry" })).toBeInTheDocument();
  expect(screen.getByText("EXEMPLO: parte do ouro do time que vai para o pos 1.")).toBeInTheDocument();
});

it("sem o índice a tela explica o que faltou", async () => {
  abrir("/times", {});
  expect(await screen.findByRole("alert")).toHaveTextContent("Dados indisponíveis. arquivo /data/times_atlas/indice.json não encontrado (404)");
});

it("time que não existe mostra o erro e o caminho de volta", async () => {
  abrir("/times/time-que-nao-existe");
  expect(await screen.findByRole("alert")).toHaveTextContent("time-que-nao-existe.json não encontrado (404)");
  expect(screen.getByRole("link", { name: "← Times" })).toHaveAttribute("href", "/times");
});

it("arquivo do time fora do contrato vira erro legível, não tela quebrada", async () => {
  abrir("/times/time-exemplo-a", { "/data/times_atlas/time-exemplo-a.json": { id: "x" } });
  expect(await screen.findByRole("alert")).toHaveTextContent("formato inesperado em /data/times_atlas/time-exemplo-a.json");
});

describe("tela do time", () => {
  it("mostra resumo, como jogar contra, assinatura e seções com o selo de confiança", async () => {
    abrir("/times/time-exemplo-b");
    expect(await screen.findByRole("heading", { level: 1, name: /Time Exemplo B/ })).toHaveTextContent("LOW SAMPLE");
    const contra = screen.getByRole("region", { name: "Como jogar contra" });
    expect(within(contra).getByText("Win condition")).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Assinatura temporal" })).toHaveTextContent("primeira rotação do pos 4");
    const redTeam = screen.getByRole("region", { name: "Red team" });
    expect(within(redTeam).getByText("Confiança baixa")).toBeInTheDocument();
  });

  it("clicar no marcador do smoke abre o painel com o texto e o n", async () => {
    abrir("/times/time-exemplo-a");
    fireEvent.click(await screen.findByRole("button", { name: "Smoke, 7 vezes" }));
    const painel = screen.getByRole("complementary", { name: "Smoke, 7 vezes" });
    expect(within(painel).getByText("EXEMPLO: smoke da selva própria para o triângulo inimigo.")).toBeInTheDocument();
    expect(within(painel).getByText("n").nextSibling).toHaveTextContent("7");
    fireEvent.click(within(painel).getByRole("button", { name: "Fechar" }));
    expect(screen.queryByRole("complementary", { name: "Smoke, 7 vezes" })).toBeNull();
  });

  it("clicar num objetivo mostra a linha do tempo do preparo até T=0", async () => {
    abrir("/times/time-exemplo-a");
    fireEvent.click(await screen.findByRole("button", { name: "Preparo de roshan" }));
    const painel = screen.getByRole("complementary", { name: "Preparo de roshan" });
    const passos = within(painel).getAllByRole("listitem").map((li) => li.textContent);
    expect(passos).toEqual(["T-150 spush", "T-90 sward", "T-45 ssmoke", "T=0objetivo"]);
  });

  it("a janela de tempo tira os marcadores de fora dela", async () => {
    abrir("/times/time-exemplo-a");
    expect(await screen.findByRole("button", { name: "Smoke, 7 vezes" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "0-5" }));
    expect(screen.queryByRole("button", { name: "Smoke, 7 vezes" })).toBeNull();
    expect(screen.getByRole("button", { name: "Preparo de roshan" })).toBeInTheDocument();
  });

  it("ligar a camada de lutas desenha os marcadores dela", async () => {
    abrir("/times/time-exemplo-a");
    const botao = await screen.findByRole("button", { name: "Lutas" });
    expect(botao).toHaveAttribute("aria-pressed", "false");
    fireEvent.click(botao);
    expect(screen.getByRole("button", { name: "Luta, 67% de vitória" })).toBeInTheDocument();
  });
});
