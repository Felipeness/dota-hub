import { describe, expect, it } from "vitest";
import { paraHistorico, historicoDaContaFonte } from "./historicoDaConta";
import { comHeroisFora, expit, modeloDeDraftSchema, perdaSemOHeroi, perfilDoJogador, valorEsperado, type Historico, type ModeloDeDraft, type PartidaDoHistorico } from "./modeloDeJogador";
import { recomendarDraft, type CincoContas, type EntradaDoDraft } from "./recomendacaoDeDraft";
import type { HeroiPro, PosicaoId } from "./posicoesPro";

const HEROIS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
const uniforme = new Map<number, number>(HEROIS.map((h) => [h, 1 / HEROIS.length]));
const MODELO: ModeloDeDraft = {
  gerado_em: "2026-10-31", amostra: { contas: 1, partidas: 1 }, taxaMedia: 0.5, forcaDaBase: 1000, forcaDoHeroi: 80,
  pesoDaVantagem: 0.5, pesoDaExperiencia: 0.05, experienciaMedia: 2.5, meiaVidaDoPickJogos: 25, alfaDoPick: 10,
  forcaDoHeroiNoPatch: new Map<number, number>(HEROIS.map((h) => [h, 0])), parcelaDePicks: uniforme,
};

/** Heróis 1 e 2 são pos 1, 3 e 4 pos 2, 5 e 6 pos 3, 7 e 8 pos 4, 9 e 10 pos 5, 11 e 12 cabem em qualquer uma. */
const posicaoDo = (heroi: number): PosicaoId | null => (heroi > 10 ? null : ((Math.ceil(heroi / 2)) as PosicaoId));

function heroiPro(hero_id: number): HeroiPro {
  const principal = posicaoDo(hero_id);
  const fracao = (p: PosicaoId) => ({ n: 10, fracao: principal === null ? 0.2 : principal === p ? 0.96 : 0.01 });
  const taxa = { n: 10, taxa: 0.5 };
  return {
    hero_id, slug: `heroi-${hero_id}`,
    posicoes: { n_total: 100, distribuicao: { pos1: fracao(1), pos2: fracao(2), pos3: fracao(3), pos4: fracao(4), pos5: fracao(5) } },
    forca: { n: 100, gpm_medio: 1, dano_torre_medio: 1, dano_heroi_medio: 1, cura_media: 1, stuns_medio_s: 1, duracao_media_vitorias_min: 30, vitoria_por_duracao: { menos_30min: taxa, entre_30_40min: taxa, mais_40min: taxa } },
  };
}
const PRO = new Map(HEROIS.map((h) => [h, heroiPro(h)]));

const partidas = (heroi: number, vitorias: number, derrotas: number, inicio = 1_000): PartidaDoHistorico[] => [
  ...Array.from({ length: vitorias }, (_, i) => ({ heroi, venceu: true, inicio: inicio + i, deLiga: false })),
  ...Array.from({ length: derrotas }, (_, i) => ({ heroi, venceu: false, inicio: inicio + vitorias + i, deLiga: false })),
];
const conta = (id: number, ...listas: PartidaDoHistorico[][]): Historico => ({ conta: id, partidas: listas.flat() });
const semDados = (id: number): Historico => ({ conta: id, partidas: [] });
const vazias = (base: number): CincoContas => [semDados(base), semDados(base + 1), semDados(base + 2), semDados(base + 3), semDados(base + 4)];

const entrada = (mudancas: Partial<EntradaDoDraft>): EntradaDoDraft => ({
  aliados: vazias(100), inimigos: vazias(200), modelo: MODELO, posicoesPro: PRO, nomeDoHeroi: (h) => `Herói ${h}`, agoraS: 2_000, ...mudancas,
});

describe("perfilDoJogador", () => {
  it.each([
    { nome: "4-2 fica perto da média", vitorias: 4, derrotas: 2, taxaEsperada: (4 + 80 * ((4 + 500) / 1006)) / 86 },
    { nome: "60-40 anda mais que 4-2", vitorias: 60, derrotas: 40, taxaEsperada: (60 + 80 * ((60 + 500) / 1100)) / 180 },
  ])("encolhe para a média da conta: $nome", ({ vitorias, derrotas, taxaEsperada }) => {
    const perfil = perfilDoJogador(conta(1, partidas(1, vitorias, derrotas)), MODELO);
    const heroi = perfil.herois.find((h) => h.heroi === 1);
    const media = (vitorias + 500) / (vitorias + derrotas + 1000);
    const logit = (p: number) => Math.log(p / (1 - p));
    const esperado = 0.5 * (logit(taxaEsperada) - logit(media)) + 0.05 * (Math.log1p(vitorias + derrotas) - 2.5);
    expect(heroi?.valor).toBeCloseTo(esperado, 10);
  });

  it("dá mais chance de pick a quem foi jogado por último", () => {
    const antigo = partidas(1, 10, 10, 1_000);
    const recente = partidas(2, 10, 10, 5_000);
    const perfil = perfilDoJogador(conta(1, antigo, recente), MODELO);
    const chance = (h: number) => perfil.herois.find((x) => x.heroi === h)?.chanceDePick ?? 0;
    expect(chance(2)).toBeGreaterThan(chance(1));
  });

  it("mantém as chances de pick somando 1 depois de tirar heróis", () => {
    const perfil = perfilDoJogador(conta(1, partidas(1, 5, 5), partidas(2, 3, 3)), MODELO);
    const semUm = comHeroisFora(perfil, new Set([1]));
    expect(semUm.herois.reduce((soma, h) => soma + h.chanceDePick, 0)).toBeCloseTo(1, 10);
    expect(semUm.herois.some((h) => h.heroi === 1)).toBe(false);
  });

  it("retira o herói com o cálculo exato da troca", () => {
    const perfil = perfilDoJogador(conta(1, partidas(1, 40, 20), partidas(2, 20, 20)), MODELO);
    const heroi = perfil.herois.find((h) => h.heroi === 1);
    if (!heroi) throw new Error("herói 1 sumiu");
    const depois = valorEsperado(comHeroisFora(perfil, new Set([1])));
    expect(valorEsperado(perfil) - depois).toBeCloseTo(perdaSemOHeroi(perfil, heroi), 10);
  });
});

describe("recomendarDraft", () => {
  it("não inventa sinal quando nenhuma conta tem dados", () => {
    const { bans, picks, melhorDraft, avisos } = recomendarDraft(entrada({}));
    expect(bans.itens).toEqual([]);
    expect(bans.decisao).toBe("nao_da_para_decidir");
    expect(picks.every((p) => p.picks.length === 0)).toBe(true);
    expect(melhorDraft.chance.decisao).toBe("nao_da_para_decidir");
    expect(avisos.filter((a) => a.tipo === "sem_dados")).toHaveLength(10);
  });

  it("não trata 4-2 como ban urgente", () => {
    const inimigos: CincoContas = [conta(200, partidas(5, 4, 2), partidas(6, 20, 20)), semDados(201), semDados(202), semDados(203), semDados(204)];
    const { bans } = recomendarDraft(entrada({ inimigos }));
    expect(bans.decisao).toBe("nao_da_para_decidir");
  });

  it("aponta como ban o herói que a conta inimiga joga e vence, dizendo quem motiva", () => {
    const inimigos: CincoContas = [conta(200, partidas(5, 60, 10), partidas(6, 10, 60)), semDados(201), semDados(202), semDados(203), semDados(204)];
    const { bans } = recomendarDraft(entrada({ inimigos }));
    expect(bans.itens[0]).toMatchObject({ heroi: 5, jogador: 200 });
    expect(bans.itens[0]?.notaPp).toBeGreaterThan(0);
    expect(bans.itens.some((b) => b.heroi === 6)).toBe(false);
  });

  it("não sugere banir o que também é o melhor herói do próprio time", () => {
    const quemJoga = (id: number) => conta(id, partidas(5, 60, 10), partidas(6, 30, 30));
    const inimigos: CincoContas = [quemJoga(200), semDados(201), semDados(202), semDados(203), semDados(204)];
    const aliados: CincoContas = [quemJoga(100), semDados(101), semDados(102), semDados(103), semDados(104)];
    expect(recomendarDraft(entrada({ inimigos, aliados })).bans.itens.some((b) => b.heroi === 5)).toBe(false);
  });

  it("recomenda picks só do pool da conta, com vantagem contra a própria linha de base", () => {
    const aliados: CincoContas = [conta(100, partidas(1, 40, 10), partidas(2, 10, 40), partidas(3, 2, 1)), semDados(101), semDados(102), semDados(103), semDados(104)];
    const [picks] = recomendarDraft(entrada({ aliados })).picks;
    expect(picks?.picks.map((p) => p.heroi)).toEqual([1, 2]);
    expect(picks?.picks[0]?.vantagemPp).toBeGreaterThan(0);
    expect(picks?.picks[1]?.vantagemPp).toBeLessThan(0);
  });

  it("marca a vantagem como indefinida quando o intervalo cruza zero", () => {
    const aliados: CincoContas = [conta(100, partidas(1, 6, 5), partidas(2, 6, 6)), semDados(101), semDados(102), semDados(103), semDados(104)];
    const [picks] = recomendarDraft(entrada({ aliados })).picks;
    expect(picks?.picks.every((p) => p.leitura === "indefinido")).toBe(true);
    expect(picks?.decisao).toBe("nao_da_para_decidir");
  });

  it("monta o melhor draft com cinco heróis distintos, na posição de cada conta, fora dos bans", () => {
    const aliados: CincoContas = [
      conta(100, partidas(1, 30, 10), partidas(2, 20, 10)), conta(101, partidas(3, 30, 10)), conta(102, partidas(5, 30, 10)),
      conta(103, partidas(7, 30, 10)), conta(104, partidas(9, 30, 10)),
    ];
    const { melhorDraft } = recomendarDraft(entrada({ aliados, bansFeitos: [1] }));
    const herois = melhorDraft.escolhas.map((e) => e.heroi);
    expect(new Set(herois).size).toBe(5);
    expect(herois).not.toContain(1);
    expect(melhorDraft.escolhas.map((e) => [e.conta, e.heroi, e.posicao])).toEqual([[100, 2, 1], [101, 3, 2], [102, 5, 3], [103, 7, 4], [104, 9, 5]]);
  });

  it("desempata dois aliados que querem o mesmo herói pelo total do time", () => {
    const aliados: CincoContas = [
      conta(100, partidas(11, 50, 10), partidas(12, 48, 12)), conta(101, partidas(11, 50, 10), partidas(1, 10, 50)),
      semDados(102), semDados(103), semDados(104),
    ];
    const herois = recomendarDraft(entrada({ aliados })).melhorDraft.escolhas.map((e) => e.heroi);
    expect(herois[0]).toBe(12);
    expect(herois[1]).toBe(11);
  });

  it("usa o herói que o inimigo quer como desempate do pick", () => {
    const forte = (id: number, heroi: number) => conta(id, partidas(heroi, 60, 10), partidas(heroi === 1 ? 2 : 1, 5, 20));
    const aliados: CincoContas = [conta(100, partidas(1, 30, 20), partidas(2, 30, 20)), semDados(101), semDados(102), semDados(103), semDados(104)];
    const inimigos: CincoContas = [forte(200, 2), semDados(201), semDados(202), semDados(203), semDados(204)];
    const escolhas = recomendarDraft(entrada({ aliados, inimigos, quantidadeDeBans: 0 })).melhorDraft.escolhas;
    expect(escolhas[0]?.heroi).toBe(2);
  });

  it("dá chance maior a quem tem heróis mais fortes e mantém a estimativa dentro do intervalo", () => {
    const forca = new Map<number, number>(HEROIS.map((h) => [h, h === 11 || h === 12 ? 0.4 : -0.1]));
    const aliados: CincoContas = [conta(100, partidas(11, 30, 30)), conta(101, partidas(12, 30, 30)), semDados(102), semDados(103), semDados(104)];
    const { chance } = recomendarDraft(entrada({ aliados, modelo: { ...MODELO, forcaDoHeroiNoPatch: forca } })).melhorDraft;
    expect(chance.estimativa).toBeGreaterThan(0.5);
    expect(chance.baixo).toBeLessThan(chance.estimativa);
    expect(chance.alto).toBeGreaterThan(chance.estimativa);
  });

  it("não dá crédito de chance ao herói sugerido para conta sem dados", () => {
    const forca = new Map<number, number>(HEROIS.map((h) => [h, h === 11 ? 0.5 : 0]));
    const { chance } = recomendarDraft(entrada({ modelo: { ...MODELO, forcaDoHeroiNoPatch: forca } })).melhorDraft;
    expect(chance.estimativa).toBeLessThan(expit(0.5));
    expect(chance.decisao).toBe("nao_da_para_decidir");
  });

  it.each([
    { nome: "pouca amostra", historico: conta(100, partidas(1, 5, 5, 1_990)), tipo: "amostra_pequena" },
    { nome: "histórico velho", historico: conta(100, partidas(1, 30, 30, 1_000)), tipo: "historico_antigo", agoraS: 1_000 + 200 * 86_400 },
    { nome: "só liga", historico: conta(100, partidas(1, 30, 30, 1_990).map((p) => ({ ...p, deLiga: true }))), tipo: "historico_de_liga" },
  ])("avisa sobre a conta quando há $nome", ({ historico, tipo, agoraS = 2_100 }) => {
    const aliados: CincoContas = [historico, semDados(101), semDados(102), semDados(103), semDados(104)];
    const { avisos } = recomendarDraft(entrada({ aliados, agoraS }));
    expect(avisos.filter((a) => a.conta === 100).map((a) => a.tipo)).toContain(tipo);
  });
});

describe("fronteira com o OpenDota", () => {
  const partida = { player_slot: 0, radiant_win: true, hero_id: 1, start_time: 10, lobby_type: 7, game_mode: 22, leaver_status: 0 };

  it.each([
    { nome: "ranqueada vencida no radiant", linha: partida, esperado: [{ heroi: 1, venceu: true, inicio: 10, deLiga: false }] },
    { nome: "derrota no dire", linha: { ...partida, player_slot: 128 }, esperado: [{ heroi: 1, venceu: false, inicio: 10, deLiga: false }] },
    { nome: "liga", linha: { ...partida, lobby_type: 1, game_mode: 2 }, esperado: [{ heroi: 1, venceu: true, inicio: 10, deLiga: true }] },
    { nome: "turbo", linha: { ...partida, game_mode: 23 }, esperado: [] },
    { nome: "quem abandonou", linha: { ...partida, leaver_status: 2 }, esperado: [] },
    { nome: "partida sem resultado", linha: { ...partida, radiant_win: null }, esperado: [] },
  ])("traduz $nome com os filtros do backtest", ({ linha, esperado }) => {
    expect(paraHistorico(9, historicoDaContaFonte.parse([linha])).partidas).toEqual(esperado);
  });
});

describe("modeloDeDraftSchema", () => {
  it("lê as tabelas do JSON como mapas por herói", () => {
    const lido = modeloDeDraftSchema.parse({ ...MODELO, forcaDoHeroiNoPatch: { 1: 0.1 }, parcelaDePicks: { 1: 1 } });
    expect(lido.forcaDoHeroiNoPatch.get(1)).toBe(0.1);
  });
});
