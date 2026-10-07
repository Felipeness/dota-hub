import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { AoVivoPage } from "./AoVivoPage";
import { ContaPage } from "./ContaPage";
import type { Consultar } from "./consulta";
import { ok } from "./erros";
import { jogadorFonte, partidasRecentesFonte, timeFonte } from "./fonte/schemas";
import { ProvedorAoVivo } from "./ProvedorAoVivo";
import type { ServicosAoVivo } from "./servicos";
import { SPIRIT, YATORO, amostra, filaSemIntervalo, servicosGravados } from "./teste/gravados";
import { TimeAoVivoPage } from "./TimeAoVivoPage";

function abrir(caminho: string, servicos: ServicosAoVivo = servicosGravados()) {
  return render(
    <ProvedorAoVivo servicos={servicos}>
      <MemoryRouter initialEntries={[caminho]}>
        <Routes>
          <Route path="/ao-vivo" element={<AoVivoPage />} />
          <Route path="/ao-vivo/contas/:id" element={<ContaPage />} />
          <Route path="/ao-vivo/times/:id" element={<TimeAoVivoPage />} />
        </Routes>
      </MemoryRouter>
    </ProvedorAoVivo>,
  );
}

const servicosCom = (consultar: Consultar): ServicosAoVivo => ({ fila: filaSemIntervalo(), consultar });
const frescor = { buscadoEm: 0, vencido: false };

// vi.fn<Consultar>() perde o genérico de Consultar no tsc; o gravador mantém o tipo e guarda os caminhos pedidos.
function gravador(responder: Consultar = () => new Promise<never>(() => {})) {
  const caminhos: string[] = [];
  const consultar: Consultar = (pedido) => { caminhos.push(pedido.caminho); return responder(pedido); };
  return { consultar, caminhos };
}

it("número de conta vai direto para a conta, sem consultar a fonte na busca", async () => {
  const { consultar, caminhos } = gravador();
  abrir("/ao-vivo", servicosCom(consultar));
  fireEvent.change(screen.getByRole("searchbox"), { target: { value: ` ${YATORO} ` } });
  fireEvent.submit(screen.getByRole("search"));
  expect(await screen.findByText("Buscando a conta no OpenDota…")).toBeInTheDocument();
  expect(caminhos).toContain(`/players/${YATORO}`);
  expect(caminhos.some((c) => c.includes("/search"))).toBe(false);
});

it("texto de uma letra mostra a mensagem de entrada e não consulta", async () => {
  const { consultar, caminhos } = gravador();
  abrir("/ao-vivo?q=a", servicosCom(consultar));
  expect(await screen.findByRole("alert")).toHaveTextContent("Digite pelo menos 2 letras ou o número da conta.");
  expect(caminhos).toHaveLength(0);
});

it("busca sem resultado diz o texto buscado", async () => {
  abrir("/ao-vivo?q=zzzz", servicosCom(async ({ schema }) => ok({ valor: schema.parse([]), frescor })));
  expect(await screen.findByText(/^Nada encontrado para zzzz\. Tente o nome exato do perfil/)).toBeInTheDocument();
});

it("antes de buscar explica a busca e mostra exemplos que preenchem e buscam", async () => {
  const { consultar, caminhos } = gravador();
  abrir("/ao-vivo", servicosCom(consultar));
  expect(screen.getByText(/Consulta o OpenDota agora, sem cadastro/)).toBeInTheDocument();
  expect(screen.getByRole("searchbox")).toHaveAttribute("placeholder", "Nome do jogador, número da conta ou time");
  expect(screen.getByText(/ID de amigo/)).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /^Yatoro/ }));
  expect(await screen.findByText("Buscando a conta no OpenDota…")).toBeInTheDocument();
  expect(caminhos).toContain(`/players/${YATORO}`);
});

it("exemplo de time preenche o campo e busca pelo nome", async () => {
  const { consultar, caminhos } = gravador();
  abrir("/ao-vivo", servicosCom(consultar));
  fireEvent.click(screen.getByRole("button", { name: /^Team Spirit/ }));
  expect(screen.getByRole("searchbox")).toHaveValue("Team Spirit");
  expect(await screen.findByRole("status")).toHaveTextContent("Buscando no OpenDota…");
  expect(caminhos.some((c) => c.includes("Team"))).toBe(true);
  expect(screen.queryByRole("heading", { name: "Experimente" })).toBeNull();
});

it("time do resultado que está no atlas ganha o atalho para a análise", async () => {
  const indice = { gerado_em: "", periodo: "", patch: "7.41", eixos: [], times: [
    { id: "team-spirit", nome: "Team Spirit", tag: "TS", partidas: 1, replays: 1, amostra: "ok", estilo: "Contato", eixos: {}, team_ids: [SPIRIT] },
  ] };
  vi.stubGlobal("fetch", () => Promise.resolve(new Response(JSON.stringify(indice))));
  abrir("/ao-vivo?q=spirit", servicosGravados({ "/search?q=spirit": [] }));
  const times = await screen.findByRole("list", { name: "Times" });
  expect(await within(times).findByRole("link", { name: "Ver análise do time" })).toHaveAttribute("href", "/times/team-spirit");
  vi.unstubAllGlobals();
});

it("link do perfil no Dotabuff vai direto para a conta", async () => {
  const { consultar, caminhos } = gravador();
  abrir("/ao-vivo", servicosCom(consultar));
  fireEvent.change(screen.getByRole("searchbox"), { target: { value: `https://www.dotabuff.com/players/${YATORO}` } });
  fireEvent.submit(screen.getByRole("search"));
  expect(await screen.findByText("Buscando a conta no OpenDota…")).toBeInTheDocument();
  expect(caminhos).toContain(`/players/${YATORO}`);
});

it("busca real gravada lista contas com link para a conta", async () => {
  abrir("/ao-vivo?q=yatoro");
  const contas = await screen.findByRole("list", { name: "Contas" });
  expect(within(contas).getAllByRole("link").length).toBeGreaterThan(0);
});

it("conta pública mostra nome, medalha, 10 heróis e as partidas das respostas gravadas", async () => {
  const { container } = abrir(`/ao-vivo/contas/${YATORO}`);
  const nome = jogadorFonte.parse(amostra("jogador")).profile?.personaname ?? "";
  expect(await screen.findByRole("heading", { level: 1, name: nome })).toBeInTheDocument();
  expect(within(screen.getByRole("table")).getAllByRole("row")).toHaveLength(11);
  const recentes = partidasRecentesFonte.parse(amostra("partidas-recentes"));
  const partidas = within(screen.getByRole("list", { name: "Últimas partidas" }));
  expect(partidas.getAllByRole("listitem")).toHaveLength(recentes.length);
  expect(partidas.getAllByRole("link")[0]).toHaveAttribute("href", `/ao-vivo/partidas/${recentes[0]?.match_id}?conta=${YATORO}`);
  expect(container.querySelector("img")).toBeNull();
});

it("conta privada mostra o perfil e o aviso no lugar das partidas", async () => {
  abrir(`/ao-vivo/contas/${YATORO}`, servicosGravados({ [`/players/${YATORO}/recentMatches`]: [] }));
  expect(await screen.findByText(/Esta conta não mostra partidas públicas\. No Dota, ative "Expor dados públicos de partidas"\./)).toBeInTheDocument();
});

it("conta que não existe sugere buscar pelo nome", async () => {
  abrir("/ao-vivo/contas/4294967200");
  expect(await screen.findByRole("alert")).toHaveTextContent("Conta não encontrada. Tente buscar pelo nome.");
});

it("time real gravado mostra nome, jogadores com link e partidas", async () => {
  abrir(`/ao-vivo/times/${SPIRIT}`);
  const nome = timeFonte.parse(amostra("time")).name ?? "";
  expect(await screen.findByRole("heading", { level: 1, name: nome })).toBeInTheDocument();
  expect(within(screen.getByRole("list", { name: "Jogadores atuais" })).getAllByRole("link").length).toBeGreaterThan(0);
});

it("time que não existe diz que não encontrou", async () => {
  abrir("/ao-vivo/times/1");
  expect(await screen.findByRole("alert")).toHaveTextContent("Time não encontrado.");
});
