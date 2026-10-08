import { partidaFonte } from "../fonte/schemas";
import { PARTIDA, YATORO, amostra, consultaGravada } from "../teste/gravados";
import { detalheDaPartida, montarDetalhe, slugDoHeroi, tempoDaPartida } from "./detalhe";

const carregar = async () => {
  const resposta = await detalheDaPartida(consultaGravada(), String(PARTIDA), YATORO);
  if (!resposta.ok) throw new Error(resposta.erro.codigo);
  return resposta.dados;
};

it("partida real gravada vira o detalhe do jogador com herói, lado e adversário de lane", async () => {
  const d = await carregar();
  expect(d).toMatchObject({
    heroi: { nome: "Slark", chave: "slark", retrato: "slark" }, lado: "dire", lane: "safe", venceu: true,
    abates: 13, mortes: 5, assistencias: 12, analisada: true, adversario: { heroi: { nome: "Necrophos" } },
    // A amostra gravada é de antes do OpenDota trazer vantagem do time, eficiência de lane e draft.
    vantagemDoTime: { ouro: [], xp: [] }, eficienciaDeLanePct: null, draft: [],
  });
  expect(d.inimigos.map((i) => i.nome)).toContain("Nature's Prophet");
  expect(d.curvas.ouro.length).toBe(d.curvas.lh.length);
  expect(d.referencia?.lhPorMin).toBeGreaterThan(0);
});

it("só itens montados de 2.000 ou mais contam como grandes; peça cara não", async () => {
  const grandes = (await carregar()).compras.filter((c) => c.grande).map((c) => c.nome);
  expect(grandes).toEqual(expect.arrayContaining(["Diffusal Blade", "Aghanim's Scepter", "Butterfly", "Abyssal Blade"]));
  expect(grandes).not.toContain("Eaglesong");
  expect(grandes).not.toContain("Ultimate Orb");
});

it("eventos saem em ordem de tempo e as mortes citam quem matou", async () => {
  const { eventos } = await carregar();
  expect(eventos.map((e) => e.t)).toEqual([...eventos.map((e) => e.t)].sort((a, b) => a - b));
  expect(eventos.filter((e) => e.tipo === "morte")).toHaveLength(5);
  expect(eventos).toContainEqual(expect.objectContaining({ t: 151, tipo: "abate", texto: "Abate: Necrophos" }));
  expect(eventos).toContainEqual(expect.objectContaining({ t: 1983, tipo: "roshan", texto: "Roshan pelo seu time" }));
});

it("morte dentro de uma luta ganha a posição registrada na luta", async () => {
  const morte = (await carregar()).eventos.find((e) => e.tipo === "morte" && e.t === 878);
  expect(morte?.ponto?.every((v) => v >= 0 && v <= 1)).toBe(true);
});

it("skill build traz o nome de cada nível e marca talentos sem os marcadores do jogo", async () => {
  const { habilidades } = await carregar();
  expect(habilidades[0]).toEqual({ nivel: 1, chave: "slark_saltwater_shiv", nome: expect.any(String), talento: false });
  const talentos = habilidades.filter((h) => h.talento);
  expect(talentos.length).toBeGreaterThan(0);
  expect(talentos.every((t) => t.nome.startsWith("Talento") && !t.nome.includes("{"))).toBe(true);
});

it("itens neutros trazem o tier", async () => {
  const { neutros } = await carregar();
  expect(neutros[0]).toMatchObject({ t: 465, chave: "chipped_vest", tier: 1 });
});

it("conta que não está na partida é não encontrada", async () => {
  expect(await detalheDaPartida(consultaGravada(), String(PARTIDA), 7)).toMatchObject({ ok: false, erro: { codigo: "NAO_ENCONTRADO" } });
});

it("número de partida inválido nem consulta a fonte", async () => {
  expect(await detalheDaPartida(consultaGravada(), "12ab", YATORO)).toMatchObject({ ok: false, erro: { codigo: "ENTRADA_INVALIDA" } });
});

it("partida sem análise passa no schema com as listas vazias", () => {
  const semAnalise = { match_id: 1, duration: 1800, players: [{ player_slot: 0, hero_id: 1, kills: 0, deaths: 0, assists: 0, gold_t: null }] };
  expect(partidaFonte.parse(semAnalise).players[0]).toMatchObject({ gold_t: [], purchase_log: [], obs_log: [] });
  expect(partidaFonte.safeParse(amostra("partida")).success).toBe(true);
});

it.each([
  { nome: "Nature's Prophet", slug: "natures_prophet" }, { nome: "Anti-Mage", slug: "anti_mage" }, { nome: "Queen of Pain", slug: "queen_of_pain" },
])("retrato de $nome é $slug", ({ nome, slug }) => {
  expect(slugDoHeroi(nome)).toBe(slug);
});

it.each([{ s: -89, texto: "-1:29" }, { s: 0, texto: "0:00" }, { s: 848, texto: "14:08" }])("$s s é $texto", ({ s, texto }) => {
  expect(tempoDaPartida(s)).toBe(texto);
});

it("vantagem do time inverte o sinal pro Dire; draft sai na ordem do campo order, não da posição no array", () => {
  const partida = partidaFonte.parse({
    match_id: 2, duration: 600, radiant_win: true,
    radiant_gold_adv: [0, 500, -300], radiant_xp_adv: [0, 200, 100],
    picks_bans: [
      { is_pick: true, hero_id: 1, team: 1, order: 1 },
      { is_pick: false, hero_id: 2, team: 0, order: 0 },
    ],
    players: [{ account_id: 7, player_slot: 128, hero_id: 1, kills: 0, deaths: 0, assists: 0 }],
  });
  const constantes = {
    herois: {
      "1": { id: 1, name: "npc_dota_hero_antimage", localized_name: "Anti-Mage" },
      "2": { id: 2, name: "npc_dota_hero_axe", localized_name: "Axe" },
    },
    itens: {}, idsDeHabilidades: {}, habilidades: {},
  };
  const resposta = montarDetalhe({ partida, conta: 7, constantes, benchmarks: null, frescor: { buscadoEm: 1, vencido: false } });
  if (!resposta.ok) throw new Error("esperava resposta ok");
  expect(resposta.dados.vantagemDoTime).toEqual({ ouro: [-0, -500, 300], xp: [-0, -200, -100] });
  expect(resposta.dados.draft.map((p) => p.heroi.nome)).toEqual(["Axe", "Anti-Mage"]);
  expect(resposta.dados.draft.map((p) => p.seuTime)).toEqual([false, true]);
});
