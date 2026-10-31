import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { HeroiDraft } from "../pontuacao";
import type { BanRecomendado, Chance, EscolhaDoDraft, PicksDoJogador, RecomendacaoDoDraft } from "../recomendacaoDeDraft";
import { erroAoVivo } from "../../live/erros";
import { Resultado } from "./Resultado";

const heroi = (id: number, nome: string): HeroiDraft => ({
  id, nome, npc: nome.toLowerCase(), funcoes: [], atributo: "str", divine: { jogos: 1, vitorias: 1 },
});
const HEROIS = new Map([heroi(1, "Axe"), heroi(2, "Lion"), heroi(3, "Pudge")].map((h) => [h.id, h]));
const identidade = (conta: number) => ({ nome: `Jogador ${conta}`, avatar: null });

const ban = (id: number, baixo: number, alto: number): BanRecomendado => ({
  heroi: id, jogador: 200, notaPp: (baixo + alto) / 2, intervaloPp: { baixo, alto }, chanceDePick: 0.3, jogos: 40, vitorias: 22, motivo: `Motivo do ban ${id}.`,
});
const picks = (conta: number, decisao: PicksDoJogador["decisao"], lista: PicksDoJogador["picks"] = []): PicksDoJogador => ({ conta, decisao, picks: lista });
const escolha = (conta: number, id: number): EscolhaDoDraft => ({
  conta, posicao: 1, heroi: id, vantagemPp: 1, intervaloPp: { baixo: -2, alto: 4 }, jogos: 12, motivo: `Escolha ${id}.`,
});
const chance = (decisao: Chance["decisao"]): Chance => ({ estimativa: 0.52, baixo: decisao === "decidido" ? 0.505 : 0.44, alto: 0.6, decisao });

function recomendacao(sobrescrever: Partial<RecomendacaoDoDraft> = {}): RecomendacaoDoDraft {
  return {
    bans: { decisao: "nao_da_para_decidir", itens: [ban(1, -0.5, 2), ban(2, -1, 1.5)] },
    picks: [picks(100, "nao_da_para_decidir", [{ heroi: 3, vantagemPp: 2, intervaloPp: { baixo: -3, alto: 7 }, leitura: "indefinido", jogos: 9, vitorias: 6, motivo: "Pudge: 6V-3D." }])],
    melhorDraft: { escolhas: [escolha(100, 3)], chance: chance("nao_da_para_decidir") },
    avisos: [],
    ...sobrescrever,
  };
}

function abrir(rec: RecomendacaoDoDraft, extras: { falhas?: Parameters<typeof Resultado>[0]["falhas"]; bansFeitos?: number[]; onBanir?: (id: number) => void } = {}) {
  const onBanir = extras.onBanir ?? vi.fn();
  render(
    <Resultado
      recomendacao={rec} herois={HEROIS} identidade={identidade} falhas={extras.falhas ?? []}
      bansFeitos={extras.bansFeitos ?? []} onBanir={onBanir} onDesbanir={vi.fn()}
    />,
  );
  return onBanir;
}

describe("Resultado", () => {
  it("diz que não dá para decidir os bans, mostra a faixa e não numera a lista", () => {
    abrir(recomendacao());
    const secao = screen.getByRole("region", { name: "O que banir" });
    expect(within(secao).getByText(/Não dá para decidir entre esses bans/)).toBeInTheDocument();
    expect(within(secao).getByText(/entre −0,5 pp e \+2,0 pp/)).toBeInTheDocument();
    expect(secao.querySelector(".draft-posicao")).toBeNull();
    expect(secao.textContent).not.toMatch(/urgente/i);
  });

  it("numera os bans e afirma a vantagem só quando decidido", () => {
    abrir(recomendacao({ bans: { decisao: "decidido", itens: [ban(1, 1, 3), ban(2, -1, 0.5)] } }));
    const secao = screen.getByRole("region", { name: "O que banir" });
    expect(within(secao).getByText("O primeiro ban tem vantagem clara sobre os outros.")).toBeInTheDocument();
    expect(secao.querySelectorAll(".draft-posicao")).toHaveLength(2);
  });

  it("avisa que nenhum ban é claro quando a lista vem vazia", () => {
    abrir(recomendacao({ bans: { decisao: "nao_da_para_decidir", itens: [] } }));
    expect(screen.getByText(/Nenhum ban mostra efeito claro/)).toBeInTheDocument();
  });

  it.each([
    { nome: "conta sem picks", falhas: [], texto: /Sem dados suficientes/ },
    { nome: "conta que falhou na rede", falhas: [{ conta: 100, erro: erroAoVivo("FONTE_INDISPONIVEL") }], texto: /Não consegui buscar esta conta/ },
  ])("$nome não inventa sinal", ({ falhas, texto }) => {
    abrir(recomendacao({ picks: [picks(100, "nao_da_para_decidir")] }), { falhas });
    const secao = screen.getByRole("region", { name: "Picks de cada aliado" });
    expect(within(secao).getByText(texto)).toBeInTheDocument();
    expect(within(secao).queryByRole("listitem")).toBeNull();
  });

  it("mostra o pick indefinido com o rótulo honesto e a faixa", () => {
    abrir(recomendacao());
    const secao = screen.getByRole("region", { name: "Picks de cada aliado" });
    expect(within(secao).getByText("Não dá para dizer")).toBeInTheDocument();
    expect(within(secao).getByText(/entre −3,0 pp e \+7,0 pp/)).toBeInTheDocument();
    expect(within(secao).getByText(/Nenhum herói se destaca com segurança/)).toBeInTheDocument();
  });

  it.each([
    { decisao: "nao_da_para_decidir" as const, texto: /Sem favorito claro.*44% e 60%.*inclui 50%/ },
    { decisao: "decidido" as const, texto: /Chance estimada de vitória: 52%, entre 51% e 60%/ },
  ])("chance $decisao", ({ decisao, texto }) => {
    abrir(recomendacao({ melhorDraft: { escolhas: [escolha(100, 3)], chance: chance(decisao) } }));
    expect(screen.getByRole("region", { name: "Melhor draft para o seu time" })).toHaveTextContent(texto);
  });

  it("marca a conta sem dados no melhor draft", () => {
    abrir(recomendacao({ avisos: [{ conta: 100, lado: "aliado", tipo: "sem_dados", texto: "Sem partidas públicas." }] }));
    const secao = screen.getByRole("region", { name: "Melhor draft para o seu time" });
    expect(within(secao).getByText(/Sem dados desta conta/)).toBeInTheDocument();
  });

  it("não repete na lista de avisos a conta que falhou na rede", () => {
    const aviso = { conta: 100, lado: "aliado" as const, tipo: "sem_dados" as const, texto: "Texto de sem dados." };
    abrir(recomendacao({ avisos: [aviso] }), { falhas: [{ conta: 100, erro: erroAoVivo("SEM_CONEXAO") }] });
    expect(screen.queryByText(/Texto de sem dados/)).toBeNull();
  });

  it("marca o herói como já banido pelo botão do ban", () => {
    const onBanir = abrir(recomendacao());
    fireEvent.click(screen.getByRole("button", { name: "Marcar Axe como já banido" }));
    expect(onBanir).toHaveBeenCalledWith(1);
  });

  it("marca o herói banido pelo seletor e lista os já banidos", () => {
    const onBanir = abrir(recomendacao(), { bansFeitos: [3] });
    expect(screen.getByRole("button", { name: "Desfazer o ban de Pudge" })).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText("Adicionar herói banido"), { target: { value: "2" } });
    expect(onBanir).toHaveBeenCalledWith(2);
  });
});
