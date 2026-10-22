import { resumirContra } from "./resumoContra";
import { chavesSchema, type Chaves, type FatorChave } from "./schemas";

const fator = (fator: string, campos: Partial<FatorChave> = {}): FatorChave => ({
  fator, wr_com: 0.3, n_com: 50, wr_sem: 0.6, n_sem: 80, efeito_pp: -30, confianca: "alta", texto: "", ...campos,
});
const chaves = (campos: Partial<Chaves> = {}): Chaves => ({ ...chavesSchema.parse({ resumo_para_vencer: "" }), ...campos });
const ban = (heroi: string, campos: Partial<Chaves["banir"][number]> = {}): Chaves["banir"][number] => ({
  heroi, wr_com: 0.8, n_com: 20, wr_sem: 0.5, n_sem: 100, efeito_pp: 20, confianca: "baixa", texto: "", ...campos,
});
const contra = (heroi: string, campos: Partial<Chaves["herois_contra"][number]> = {}): Chaves["herois_contra"][number] => ({
  heroi, wr_equipe_contra: 0.25, n: 20, efeito_pp: -10, confianca: "media", texto: "", ...campos,
});

it.each([
  { fator: "perde a troca de kills até 10 min", texto: "Ganhe a troca de kills nos 10 primeiros min" },
  { fator: "pos 4 morre 3+ vezes até 15 min", texto: "Mate o pos 4 deles 3+ vezes até os 15 min" },
  { fator: "safe lane perdida às 10:00", texto: "Vença a safe lane deles com a sua offlane até os 10 min" },
  { fator: "mid perdido às 10:00", texto: "Ganhe o mid até os 10 min" },
  { fator: "offlane perdida às 10:00", texto: "Vença a offlane deles com a sua safe lane até os 10 min" },
  { fator: "adversário faz a 1ª torre", texto: "Derrube a primeira torre do jogo" },
  { fator: "fator novo do pipeline", texto: "Busque: fator novo do pipeline" },
])("traduz o fator de derrota '$fator' em ação", ({ fator: nome, texto }) => {
  const [linha] = resumirContra(chaves({ fatores_derrota: [fator(nome, { wr_com: 0.268, n_com: 56 })] })).facaIsso;
  expect(linha).toEqual({ texto, tag: "vencem só 27% · n=56", ancora: "chaves-derrota" });
});

it.each([
  { fator: "mid ganho às 10:00", texto: "Segure o mid nos 10 primeiros min" },
  { fator: "offlane ganha às 10:00", texto: "Não perca a sua safe lane para a offlane deles" },
  { fator: "vence a troca de kills até 10 min", texto: "Não perca a troca de kills nos 10 primeiros min" },
  { fator: "faz a 1ª torre do jogo", texto: "Não entregue a primeira torre do jogo" },
  { fator: "BKB do carry antes dos 24 min", texto: "Atrase a BKB do carry deles para depois dos 24 min" },
  { fator: "Smoke antes dos 10 min", texto: "Vigie smoke deles antes dos 10 min" },
  { fator: "outro fator", texto: "Impeça: outro fator" },
])("traduz o fator de vitória '$fator' no que impedir", ({ fator: nome, texto }) => {
  const [linha] = resumirContra(chaves({ fatores_vitoria: [fator(nome, { wr_com: 0.636, n_com: 66, efeito_pp: 24 })] })).preocupe;
  expect(linha).toEqual({ texto, tag: "vencem 64% · n=66", ancora: "chaves-vitoria" });
});

it.each([
  { wr_com: 0.268, tag: "vencem só 27% · n=50" },
  { wr_com: 0.48, tag: "vencem só 48% · n=50" },
  { wr_com: 0.52, tag: "vencem 52% · n=50" },
])("usa 'só' apenas com o time perdendo a maioria ($wr_com)", ({ wr_com, tag }) => {
  expect(resumirContra(chaves({ fatores_derrota: [fator("mid perdido às 10:00", { wr_com })] })).facaIsso[0]?.tag).toBe(tag);
});

it("deixa fora os fatores de confiança baixa e ordena por efeito pesado pela amostra", () => {
  const resumo = resumirContra(chaves({
    fatores_derrota: [
      fator("pos 1 morre 3+ vezes até 15 min", { efeito_pp: -45, confianca: "baixa" }),
      fator("pos 5 morre 3+ vezes até 15 min", { efeito_pp: -35, n_com: 8, confianca: "media" }),
      fator("perde a troca de kills até 10 min", { efeito_pp: -30 }),
      fator("adversário faz a 1ª torre", { efeito_pp: -25 }),
      fator("safe lane perdida às 10:00", { efeito_pp: -20 }),
    ],
  }));
  expect(resumo.facaIsso.map((l) => l.texto)).toEqual([
    "Ganhe a troca de kills nos 10 primeiros min", "Derrube a primeira torre do jogo", "Vença a safe lane deles com a sua offlane até os 10 min",
  ]);
});

it.each([
  { caso: "sem ban nem pick confirmado", dados: { banir: [ban("Largo")], herois_contra: [contra("Doom", { confianca: "baixa" })] },
    draft: ["Nenhum ban ou pick confirmado pelos dados"] },
  { caso: "só pick confirmado", dados: { banir: [ban("Largo")], herois_contra: [contra("Lone Druid")] },
    draft: ["Nenhum ban confirmado pelos dados", "Pegue Lone Druid"] },
  { caso: "ban confirmado", dados: { banir: [ban("Largo", { ban_confirma: true, quem_joga: "33" })], herois_contra: [] },
    draft: ["Bana Largo do 33"] },
])("monta o draft: $caso", ({ dados, draft }) => {
  expect(resumirContra(chaves(dados)).draft.map((l) => l.texto)).toEqual(draft);
});

it("diz que não há fator confirmado com listas vazias e marca o histórico", () => {
  const resumo = resumirContra(chaves({ historico: true }));
  expect(resumo).toMatchObject({ facaIsso: [], preocupe: [], historico: true });
});

it("mantém cada linha com até 15 palavras", () => {
  const todos = [
    "perde a troca de kills até 10 min", "pos 4 morre 3+ vezes até 15 min", "safe lane perdida às 10:00", "mid perdido às 10:00",
    "offlane perdida às 10:00", "adversário faz a 1ª torre",
  ].map((nome) => fator(nome));
  const resumo = resumirContra(chaves({ fatores_derrota: todos, fatores_vitoria: [fator("BKB do carry antes dos 24 min")] }));
  for (const linha of [...resumo.facaIsso, ...resumo.preocupe]) expect(linha.texto.split(" ").length).toBeLessThanOrEqual(15);
});
