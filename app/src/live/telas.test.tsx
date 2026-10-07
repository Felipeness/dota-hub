import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { AoVivoPage } from "./AoVivoPage";
import { ContaPage } from "./ContaPage";
import type { Consultar } from "./consulta";
import { ok } from "./erros";
import { jogadorFonte, partidaFonte, partidasRecentesFonte, timeFonte } from "./fonte/schemas";
import { ProvedorAoVivo } from "./ProvedorAoVivo";
import { RotaDaPartida } from "./RotaDaPartida";
import type { ServicosAoVivo } from "./servicos";
import { PARTIDA, SPIRIT, YATORO, amostra, filaSemIntervalo, servicosGravados } from "./teste/gravados";
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
  expect(await screen.findByText("Nada encontrado para zzzz.")).toBeInTheDocument();
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
  expect(within(screen.getByRole("list", { name: "Últimas partidas" })).getAllByRole("listitem")).toHaveLength(recentes.length);
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

it("rota da partida gravada desenha manchas no mapa e mostra o aviso de aproximação", async () => {
  const jogador = partidaFonte.parse(amostra("partida")).players.find((p) => p.account_id && p.lane_pos);
  const { container } = render(
    <ProvedorAoVivo servicos={servicosGravados()}>
      <RotaDaPartida partida={String(PARTIDA)} conta={jogador?.account_id ?? 0} />
    </ProvedorAoVivo>,
  );
  expect(await screen.findByText("Rota aproximada: posições de lane dos primeiros 10 minutos.")).toBeInTheDocument();
  expect(container.querySelectorAll(".mancha").length).toBeGreaterThan(0);
});

it("partida sem análise mostra a mensagem no lugar do mapa", async () => {
  const semAnalise = { match_id: PARTIDA, players: [{ account_id: 7, player_slot: 0, hero_id: 1, lane_pos: null, lane_role: null }] };
  render(
    <ProvedorAoVivo servicos={servicosGravados({ [`/matches/${PARTIDA}`]: semAnalise })}>
      <RotaDaPartida partida={String(PARTIDA)} conta={7} />
    </ProvedorAoVivo>,
  );
  expect(await screen.findByText("Esta partida não foi analisada pela fonte; a rota não está disponível.")).toBeInTheDocument();
});
