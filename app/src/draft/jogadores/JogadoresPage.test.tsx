import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { Consultar } from "../../live/consulta";
import { erroAoVivo, falha, ok } from "../../live/erros";
import { ProvedorAoVivo } from "../../live/ProvedorAoVivo";
import { filaSemIntervalo } from "../../live/teste/gravados";
import { JogadoresPage } from "./JogadoresPage";

const HEROIS = Array.from({ length: 12 }, (_, i) => i + 1);
const HEROSTATS = HEROIS.map((id) => ({ id, name: `npc_dota_hero_h${id}`, localized_name: `Herói ${id}`, roles: [], "7_pick": 100, "7_win": 50 }));
const taxa = { n: 10, taxa: 0.5 };
const PRO = {
  gerado_em: "2026-10-31", fonte: "teste", metodo: "teste",
  herois: HEROIS.map((hero_id) => {
    const principal = Math.min(5, Math.ceil(hero_id / 2));
    const fracao = (p: number) => ({ n: 10, fracao: p === principal ? 0.96 : 0.01 });
    return {
      hero_id, slug: `h${hero_id}`,
      posicoes: { n_total: 100, distribuicao: { pos1: fracao(1), pos2: fracao(2), pos3: fracao(3), pos4: fracao(4), pos5: fracao(5) } },
      forca: { n: 100, gpm_medio: 1, dano_torre_medio: 1, dano_heroi_medio: 1, cura_media: 1, stuns_medio_s: 1, duracao_media_vitorias_min: 30, vitoria_por_duracao: { menos_30min: taxa, entre_30_40min: taxa, mais_40min: taxa } },
    };
  }),
};
const MODELO = {
  gerado_em: "2026-10-31", amostra: { contas: 1, partidas: 1 }, taxaMedia: 0.5, forcaDaBase: 1000, forcaDoHeroi: 80,
  pesoDaVantagem: 0.5, pesoDaExperiencia: 0.05, experienciaMedia: 2.5, meiaVidaDoPickJogos: 25, alfaDoPick: 10,
  forcaDoHeroiNoPatch: Object.fromEntries(HEROIS.map((h) => [h, 0.1])), parcelaDePicks: Object.fromEntries(HEROIS.map((h) => [h, 1 / HEROIS.length])),
};

const frescor = { buscadoEm: 0, vencido: false };
const partida = (hero_id: number, i: number) => ({ player_slot: 0, radiant_win: i % 2 === 0, hero_id, start_time: 1_000 + i, lobby_type: 7, game_mode: 22, leaver_status: 0 });
const historicoCom = (heroi: number, jogos: number) => Array.from({ length: jogos }, (_, i) => partida(heroi, i));

const ALIADOS = "1,2,3,4,5";
const INIMIGOS = "6,7,8,9,10";
const URL_COMPLETA = `/draft/jogadores?a=${ALIADOS}&e=${INIMIGOS}`;

type Respostas = Record<string, unknown | "erro">;

function consultarCom(respostas: Respostas): Consultar {
  return async (pedido) => {
    const resposta = respostas[pedido.caminho];
    if (resposta === "erro") return falha(erroAoVivo("FONTE_INDISPONIVEL"));
    if (resposta === undefined) return falha(erroAoVivo("NAO_ENCONTRADO"));
    return ok({ valor: pedido.schema.parse(resposta), frescor });
  };
}

const respostasBase = (historicoDe: (conta: number) => unknown | "erro"): Respostas => {
  const contas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return {
    "/heroStats": HEROSTATS,
    ...Object.fromEntries(contas.map((c) => [`/players/${c}`, { profile: { account_id: c, personaname: `Jogador ${c}`, avatarfull: null }, rank_tier: 60 }])),
    ...Object.fromEntries(contas.map((c) => [`/players/${c}/matches?limit=1000&significant=0&project=hero_id&project=start_time&project=lobby_type&project=game_mode&project=leaver_status`, historicoDe(c)])),
  };
};

function Local() {
  return <output data-testid="local">{useLocation().search}</output>;
}

function abrir(entrada: string, respostas: Respostas) {
  return render(
    <ProvedorAoVivo servicos={{ fila: filaSemIntervalo(), consultar: consultarCom(respostas) }}>
      <MemoryRouter initialEntries={[entrada]}><JogadoresPage /><Local /></MemoryRouter>
    </ProvedorAoVivo>,
  );
}

beforeEach(() => {
  vi.stubGlobal("fetch", async (url: string) => {
    const corpo = url.includes("modelo_draft") ? MODELO : url.includes("pro_posicoes") ? PRO : null;
    return new Response(JSON.stringify(corpo), { status: corpo ? 200 : 404, headers: { "content-type": "application/json" } });
  });
});
afterEach(() => vi.unstubAllGlobals());

describe("JogadoresPage", () => {
  it("sem contas na URL mostra os 10 campos e mantém o botão desligado", () => {
    abrir("/draft/jogadores", {});
    expect(screen.getAllByRole("textbox")).toHaveLength(10);
    expect(screen.getByRole("button", { name: "Analisar o draft" })).toBeDisabled();
  });

  it("mostra o erro do campo inválido e a confirmação do nome da conta válida", async () => {
    abrir("/draft/jogadores", respostasBase(() => []));
    fireEvent.change(screen.getByLabelText("Aliado 1"), { target: { value: "yatoro" } });
    expect(screen.getByText(/Use o Friend ID/)).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Aliado 2"), { target: { value: "2" } });
    expect(await screen.findByText("Jogador 2")).toBeInTheDocument();
  });

  it("colar vários IDs de uma vez preenche os campos seguintes", () => {
    abrir("/draft/jogadores", respostasBase(() => []));
    fireEvent.paste(screen.getByLabelText("Aliado 4"), { clipboardData: { getData: () => "1 2 3\n4" } });
    const valores = screen.getAllByRole<HTMLInputElement>("textbox").map((i) => i.value);
    expect(valores.slice(0, 8)).toEqual(["", "", "", "1", "2", "3", "4", ""]);
  });

  it("analisar escreve as contas na URL", async () => {
    abrir("/draft/jogadores", respostasBase(() => []));
    const textos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(String);
    fireEvent.paste(screen.getByLabelText("Aliado 1"), { clipboardData: { getData: () => textos.join(" ") } });
    fireEvent.click(screen.getByRole("button", { name: "Analisar o draft" }));
    await waitFor(() => expect(screen.getByTestId("local")).toHaveTextContent(`a=${encodeURIComponent(ALIADOS)}&e=${encodeURIComponent(INIMIGOS)}`));
  });

  it("todas as contas sem partidas públicas: diz que não dá para decidir e que falta dado", async () => {
    abrir(URL_COMPLETA, respostasBase(() => []));
    expect(await screen.findByRole("region", { name: "O que banir" })).toHaveTextContent("Nenhum ban mostra efeito claro");
    const picks = screen.getByRole("region", { name: "Picks de cada aliado" });
    expect(within(picks).getAllByText(/Sem dados suficientes/)).toHaveLength(5);
    expect(screen.getByRole("region", { name: "Melhor draft para o seu time" })).toHaveTextContent("Sem favorito claro");
    expect(screen.getAllByText(/Sem partidas públicas: perfil privado/).length).toBeGreaterThan(0);
  });

  it("uma conta que falha não derruba as outras e oferece tentar de novo", async () => {
    abrir(URL_COMPLETA, respostasBase((c) => (c === 7 ? "erro" : historicoCom(c, 40))));
    const alerta = await screen.findByRole("alert");
    expect(alerta).toHaveTextContent("Uma conta não foi buscada");
    expect(alerta).toHaveTextContent("Jogador 7");
    expect(within(alerta).getByRole("button", { name: "Tentar de novo" })).toBeInTheDocument();
    expect(screen.getByRole("region", { name: "Picks de cada aliado" })).toBeInTheDocument();
  });

  it("marcar um herói como banido grava na URL e o herói some das sugestões", async () => {
    abrir(URL_COMPLETA, respostasBase((c) => historicoCom(c <= 5 ? c : c - 5, 40)));
    const picks = await screen.findByRole("region", { name: "Picks de cada aliado" });
    const botao = within(picks).getAllByRole("button", { name: /Marcar .* como já banido/ })[0];
    expect(botao).toBeDefined();
    if (!botao) return;
    const rotulo = botao.getAttribute("aria-label") ?? "";
    fireEvent.click(botao);
    await waitFor(() => expect(screen.getByTestId("local")).toHaveTextContent(/b=\d+/));
    const nome = /Marcar (.*) como já banido/.exec(rotulo)?.[1] ?? "";
    expect(await screen.findByRole("button", { name: `Desfazer o ban de ${nome}` })).toBeInTheDocument();
    expect(within(screen.getByRole("region", { name: "Picks de cada aliado" })).queryByRole("button", { name: rotulo })).toBeNull();
  });
});
