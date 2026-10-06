import { REGRAS_OPENDOTA, criarFila, esperaDoLimite, inicioDoProximoDiaUtc, proximaVez, type Relogio } from "./fila";

const MEIO_DIA = Date.UTC(2026, 9, 6, 12, 0, 0);

function relogioDeTeste(inicio = MEIO_DIA): Relogio {
  let agora = inicio;
  return { agora: () => agora, dormir: async (ms) => { agora += ms; } };
}

afterEach(() => { vi.useRealTimers(); });

it.each([
  { nome: "fila vazia sai na hora", chamadas: [], pausadaAte: 0, vez: 0 },
  { nome: "espera o intervalo mínimo", chamadas: [1_000], pausadaAte: 0, vez: 1_200 },
  { nome: "pausa manda mais que o intervalo", chamadas: [1_000], pausadaAte: 9_000, vez: 9_000 },
  { nome: "janela cheia espera a mais antiga sair", chamadas: Array.from({ length: 50 }, (_, i) => 1_000 + i * 200), pausadaAte: 0, vez: 61_000 },
])("$nome", ({ chamadas, pausadaAte, vez }) => {
  expect(proximaVez(chamadas, pausadaAte, REGRAS_OPENDOTA)).toBe(vez);
});

it.each([[0, 5_000], [1, 10_000], [2, 20_000], [3, 40_000], [4, 60_000], [9, 60_000]])(
  "%i pausas seguidas: próxima espera de %i ms", (seguidas, ms) => {
    expect(esperaDoLimite(seguidas)).toBe(ms);
  },
);

it("virada do dia é a meia-noite UTC seguinte", () => {
  expect(inicioDoProximoDiaUtc(MEIO_DIA)).toBe(Date.UTC(2026, 9, 7));
});

it("a pausa por minuto cresce a cada 429 seguido e volta ao começo depois de uma resposta boa", async () => {
  const relogio = relogioDeTeste();
  const fila = criarFila(REGRAS_OPENDOTA, relogio);
  fila.limitou("minuto");
  expect(fila.estado()).toEqual({ pausadaAte: MEIO_DIA + 5_000, motivo: "minuto" });
  expect(await fila.aguardarVez()).toBeNull();
  fila.limitou("minuto");
  expect(fila.estado().pausadaAte).toBe(MEIO_DIA + 15_000);
  expect(await fila.aguardarVez()).toBeNull();
  expect(relogio.agora()).toBe(MEIO_DIA + 15_000);
  fila.liberou();
  fila.limitou("minuto");
  expect(fila.estado().pausadaAte).toBe(relogio.agora() + 5_000);
});

it("espera maior que o máximo devolve o tempo que falta, sem dormir", async () => {
  const relogio = relogioDeTeste();
  const fila = criarFila(REGRAS_OPENDOTA, relogio);
  fila.limitou("minuto");
  fila.limitou("minuto");
  fila.limitou("minuto");
  expect(await fila.aguardarVez()).toEqual({ tenteEmS: 20, doDia: false });
  expect(relogio.agora()).toBe(MEIO_DIA);
});

it("limite do dia pausa até a meia-noite UTC e diz que é do dia", async () => {
  const fila = criarFila(REGRAS_OPENDOTA, relogioDeTeste());
  fila.limitou("dia");
  expect(fila.estado()).toEqual({ pausadaAte: Date.UTC(2026, 9, 7), motivo: "dia" });
  expect(await fila.aguardarVez()).toEqual({ tenteEmS: 43_200, doDia: true });
});

it("pausa menor não encurta a que já existe", () => {
  const fila = criarFila(REGRAS_OPENDOTA, relogioDeTeste());
  fila.limitou("dia");
  fila.limitou("minuto");
  expect(fila.estado()).toEqual({ pausadaAte: Date.UTC(2026, 9, 7), motivo: "dia" });
});

it("avisa quem assina só quando a pausa muda e mantém o mesmo estado entre mudanças", () => {
  const fila = criarFila(REGRAS_OPENDOTA, relogioDeTeste());
  const ouvinte = vi.fn();
  const parar = fila.assinar(ouvinte);
  expect(fila.estado()).toBe(fila.estado());
  fila.limitou("minuto");
  expect(ouvinte).toHaveBeenCalledTimes(1);
  parar();
  fila.limitou("minuto");
  expect(ouvinte).toHaveBeenCalledTimes(1);
});

it("em sequência, nenhuma janela de 60 s passa de 50 chamadas", async () => {
  const relogio = relogioDeTeste();
  const fila = criarFila({ ...REGRAS_OPENDOTA, esperaMaximaMs: Number.POSITIVE_INFINITY }, relogio);
  const saidas: number[] = [];
  for (let i = 0; i < 120; i++) {
    expect(await fila.aguardarVez()).toBeNull();
    saidas.push(relogio.agora());
  }
  saidas.slice(50).forEach((instante, i) => expect(instante - (saidas[i] ?? 0)).toBeGreaterThanOrEqual(60_000));
});

it("200 consultas de uma vez: 50 saem com 200 ms entre elas e as outras 150 recebem o tempo de espera", async () => {
  vi.useFakeTimers({ now: MEIO_DIA });
  const fila = criarFila();
  const saidas: number[] = [];
  const pedidos = Array.from({ length: 200 }, () => fila.aguardarVez().then((espera) => {
    if (espera === null) saidas.push(Date.now());
    return espera;
  }));
  await vi.advanceTimersByTimeAsync(120_000);
  const esperas = await Promise.all(pedidos);
  expect(saidas).toHaveLength(50);
  saidas.slice(1).forEach((instante, i) => expect(instante - (saidas[i] ?? 0)).toBeGreaterThanOrEqual(200));
  const recusadas = esperas.filter((espera) => espera !== null);
  expect(recusadas).toHaveLength(150);
  expect(recusadas.every((espera) => espera.tenteEmS > 15 && !espera.doDia)).toBe(true);
});
