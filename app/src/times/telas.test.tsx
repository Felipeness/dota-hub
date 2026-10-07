import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import indice from "./amostras/indice.json";
import exemploA from "./amostras/time-exemplo-a.json";
import exemploB from "./amostras/time-exemplo-b.json";
import chavesA from "./amostras/time-exemplo-a.chaves.json";
import { TimeAtlasPage } from "./TimeAtlasPage";
import { TimesPage } from "./TimesPage";

const ARQUIVOS: Readonly<Record<string, unknown>> = {
  "/data/times_atlas/indice.json": indice,
  "/data/times_atlas/time-exemplo-a.json": exemploA,
  "/data/times_atlas/time-exemplo-b.json": exemploB,
  "/data/times_atlas/time-exemplo-a.chaves.json": chavesA,
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

it("o mapa de estilos pinta por cluster, mostra os polos e marca a fronteira", async () => {
  abrir("/times");
  const clusters = await screen.findByRole("list", { name: "Clusters" });
  expect(within(clusters).getAllByRole("listitem").map((li) => li.textContent)).toEqual(["C1 EXEMPLO Ritmo", "C2 EXEMPLO Farm"]);
  expect(screen.getByText("← Jogo lento")).toBeInTheDocument();
  expect(screen.getByText("Jogo rápido →")).toBeInTheDocument();
  expect(within(screen.getByRole("link", { name: /Time Exemplo B/ })).getByText("fronteira")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "EXB" })).toHaveClass("atlas-ponto-fronteira");
});

describe("como vencer", () => {
  it("abre a coluna do texto com banir, pickar, estilo, fatores ordenados e o resumo", async () => {
    abrir("/times/time-exemplo-a");
    const bloco = await screen.findByRole("region", { name: "Como vencer a Time Exemplo A" });
    expect(within(bloco).getByText(/banir Lone Druid \(ela cai para 40%/)).toBeInTheDocument();
    const banir = within(bloco).getByRole("region", { name: "Banir" });
    expect(within(banir).getAllByRole("listitem")[0]).toHaveTextContent("Lone Druidcarry, pos 1 (14 jogos)banido: vence 40% (n=20)com 68% · sem 51%+12,5 pp com elen=14 · confiança média");
    const vitoria = within(bloco).getByRole("region", { name: "Aumenta a chance de vitória deles" });
    expect(within(vitoria).getAllByRole("listitem").map((li) => li.querySelector(".chave-fator")?.textContent)).toEqual([
      "EXEMPLO: offlane deles com +1k aos 10:00", "EXEMPLO: 1º Roshan antes dos 20 min · padrão da liga",
    ]);
    expect(within(bloco).getByRole("region", { name: "Aumenta a chance de derrota deles" })).toHaveTextContent("-16 pp");
  });

  it("herói sem retrato no app mostra as iniciais", async () => {
    abrir("/times/time-exemplo-a");
    const banir = await screen.findByRole("region", { name: "Banir" });
    const retratos = banir.querySelectorAll("img");
    expect(retratos[0]).toHaveAttribute("src", "/data/retratos/herois/lone_druid.webp");
    const pangolier = retratos[1];
    if (!pangolier) throw new Error("sem retrato do Pangolier");
    fireEvent.error(pangolier);
    expect(within(banir).getByText("PA")).toBeInTheDocument();
  });

  it("sem o arquivo de chaves a página segue e diz o motivo", async () => {
    abrir("/times/time-exemplo-b");
    expect(await screen.findByText(/Como vencer: arquivo \/data\/times_atlas\/time-exemplo-b.chaves.json não encontrado/)).toBeInTheDocument();
  });
});

describe("tela do time", () => {
  it("abre só com Smokes e a leitura do mapa explica a camada com os dados da janela", async () => {
    abrir("/times/time-exemplo-a");
    expect(await screen.findByRole("button", { name: "Smokes" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "Calor" })).toHaveAttribute("aria-pressed", "false");
    const leitura = screen.getByText("O que este mapa mostra").closest("details");
    if (!leitura) throw new Error("sem o painel de leitura");
    expect(within(leitura).getByRole("heading", { name: "Smokes" })).toBeInTheDocument();
    expect(within(leitura).queryByRole("heading", { name: "Wards" })).toBeNull();
    expect(leitura).toHaveTextContent("Na partida inteira: 10 smokes em 1 trajetos. 70% terminam em kill ou objetivo e 10% falham.");
    fireEvent.click(screen.getByRole("button", { name: "Wards" }));
    expect(within(leitura).getByRole("list", { name: "Símbolos de Wards" })).toHaveTextContent("sentry");
  });

  it("ordena as seções, rebaixa os títulos do Markdown e põe a tabela numa área com rolagem própria", async () => {
    abrir("/times/time-exemplo-a");
    const secoes = await screen.findAllByRole("region");
    const titulos = secoes.map((r) => r.getAttribute("aria-labelledby")).filter((id) => id?.startsWith("secao-"));
    expect(titulos[0]).toBe("secao-dna");
    expect(titulos.at(-1)).toBe("secao-correcoes");
    const dna = screen.getByRole("region", { name: "DNA" });
    expect(within(dna).getByRole("heading", { level: 4, name: "Cadeia" })).toBeInTheDocument();
    expect(within(within(dna).getByRole("region", { name: "Tabela" })).getByRole("columnheader", { name: "Kills" })).toBeInTheDocument();
  });

  it("time de fronteira mostra o selo e a nota da amostra", async () => {
    abrir("/times/time-exemplo-b");
    expect(await screen.findByRole("heading", { level: 1, name: /Time Exemplo B/ })).toHaveTextContent("fronteira");
    expect(screen.getByText("EXEMPLO: roster montado no meio do período.")).toBeInTheDocument();
  });

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
    fireEvent.click(await screen.findByRole("button", { name: "Smoke, 10 vezes" }));
    const painel = screen.getByRole("complementary", { name: "Smoke, 10 vezes" });
    expect(within(painel).getByText("EXEMPLO: agregado de todas as janelas.")).toBeInTheDocument();
    expect(within(painel).getByText("n").nextSibling).toHaveTextContent("10");
    expect(within(painel).getByText("Farm").nextSibling).toHaveTextContent("10%");
    fireEvent.click(within(painel).getByRole("button", { name: "Fechar" }));
    expect(screen.queryByRole("complementary", { name: "Smoke, 10 vezes" })).toBeNull();
  });

  it("clicar num objetivo mostra a linha do tempo do preparo até T=0", async () => {
    abrir("/times/time-exemplo-a");
    fireEvent.click(await screen.findByRole("button", { name: "Objetivos" }));
    fireEvent.click(screen.getByRole("button", { name: "Preparo de Roshan (fosso de cima)" }));
    const painel = screen.getByRole("complementary", { name: "Preparo de Roshan (fosso de cima)" });
    const passos = within(painel).getAllByRole("listitem").map((li) => li.textContent);
    expect(passos).toEqual(["T-150spush", "T-90sward 40% · presença 1,5 heróis", "T-45ssmoke 30%", "T=0objetivo"]);
  });

  it("a janela de tempo tira os marcadores de fora dela", async () => {
    abrir("/times/time-exemplo-a");
    expect(await screen.findByRole("button", { name: "Smoke, 10 vezes" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Objetivos" }));
    fireEvent.click(screen.getByRole("button", { name: "10-15" }));
    expect(screen.queryByRole("button", { name: "Smoke, 10 vezes" })).toBeNull();
    expect(screen.getByRole("button", { name: "Smoke, 7 vezes" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Preparo de Roshan (fosso de cima)" })).toBeInTheDocument();
  });

  it("ligar a camada de lutas desenha os marcadores dela", async () => {
    abrir("/times/time-exemplo-a");
    const botao = await screen.findByRole("button", { name: "Lutas" });
    expect(botao).toHaveAttribute("aria-pressed", "false");
    fireEvent.click(botao);
    expect(screen.getByRole("button", { name: "Luta, 62% de vitória" })).toBeInTheDocument();
  });
});
