export type RegrasDaFila = Readonly<{
  intervaloMinimoMs: number;
  maximoPorJanela: number;
  janelaMs: number;
  /** Até quanto a consulta espera a vez em silêncio; acima disso falha na hora com o tempo que falta. */
  esperaMaximaMs: number;
}>;

/** 50 por minuto fica 10 abaixo do limite gratuito do OpenDota (60 por minuto, conferido em 06/10/2026). */
export const REGRAS_OPENDOTA: RegrasDaFila = { intervaloMinimoMs: 200, maximoPorJanela: 50, janelaMs: 60_000, esperaMaximaMs: 15_000 };

const PRIMEIRA_PAUSA_MS = 5_000;
const PAUSA_MAXIMA_MS = 60_000;
const DIA_MS = 86_400_000;

export type MotivoDaPausa = "minuto" | "dia";
export type EstadoDaFila = Readonly<{ pausadaAte: number; motivo: MotivoDaPausa | null }>;
export type Espera = Readonly<{ tenteEmS: number; doDia: boolean }>;
export type Relogio = Readonly<{ agora: () => number; dormir: (ms: number) => Promise<void> }>;

export type Fila = {
  /** Espera a vez e reserva a chamada numa operação só (separar consulta e reserva abriria corrida entre consultas). null = pode chamar. */
  aguardarVez(): Promise<Espera | null>;
  limitou(motivo: MotivoDaPausa): void;
  liberou(): void;
  estado(): EstadoDaFila;
  assinar(ouvinte: () => void): () => void;
};

export const relogioReal: Relogio = {
  agora: () => Date.now(),
  dormir: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
};

/** Quando a próxima chamada pode sair: depois da pausa, do intervalo mínimo e de uma vaga na janela. */
export function proximaVez(chamadas: readonly number[], pausadaAte: number, regras: RegrasDaFila): number {
  const ultima = chamadas.at(-1);
  const aposIntervalo = ultima === undefined ? 0 : ultima + regras.intervaloMinimoMs;
  const maisAntigaDasUltimas = chamadas.at(-regras.maximoPorJanela);
  const aposJanela = maisAntigaDasUltimas === undefined ? 0 : maisAntigaDasUltimas + regras.janelaMs;
  return Math.max(pausadaAte, aposIntervalo, aposJanela);
}

export const esperaDoLimite = (pausasSeguidas: number) => Math.min(PAUSA_MAXIMA_MS, PRIMEIRA_PAUSA_MS * 2 ** pausasSeguidas);

/** Presume que o OpenDota conta o dia em UTC; se não contar, o próximo 429 diário renova a pausa. */
export const inicioDoProximoDiaUtc = (agora: number) => (Math.floor(agora / DIA_MS) + 1) * DIA_MS;

export function criarFila(regras: RegrasDaFila = REGRAS_OPENDOTA, relogio: Relogio = relogioReal): Fila {
  let chamadas: readonly number[] = [];
  let pausasSeguidas = 0;
  let estadoAtual: EstadoDaFila = { pausadaAte: 0, motivo: null };
  const ouvintes = new Set<() => void>();

  function pausarAte(pausadaAte: number, motivo: MotivoDaPausa) {
    if (pausadaAte <= estadoAtual.pausadaAte) return;
    estadoAtual = { pausadaAte, motivo };
    ouvintes.forEach((ouvir) => ouvir());
  }

  function esperaLonga(vez: number, agora: number): Espera {
    const doDia = estadoAtual.motivo === "dia" && vez === estadoAtual.pausadaAte;
    return { tenteEmS: Math.ceil((vez - agora) / 1_000), doDia };
  }

  return {
    async aguardarVez() {
      for (;;) {
        const agora = relogio.agora();
        chamadas = chamadas.filter((instante) => instante > agora - regras.janelaMs);
        const vez = proximaVez(chamadas, estadoAtual.pausadaAte, regras);
        if (vez <= agora) {
          chamadas = [...chamadas, agora];
          return null;
        }
        if (vez - agora > regras.esperaMaximaMs) return esperaLonga(vez, agora);
        await relogio.dormir(vez - agora);
      }
    },
    limitou(motivo) {
      const agora = relogio.agora();
      if (motivo === "dia") return pausarAte(inicioDoProximoDiaUtc(agora), "dia");
      pausarAte(agora + esperaDoLimite(pausasSeguidas), "minuto");
      pausasSeguidas += 1;
    },
    liberou() {
      pausasSeguidas = 0;
    },
    estado: () => estadoAtual,
    assinar(ouvinte) {
      ouvintes.add(ouvinte);
      return () => { ouvintes.delete(ouvinte); };
    },
  };
}
