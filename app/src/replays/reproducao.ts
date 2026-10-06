export const VELOCIDADES = [8, 16, 32] as const;
export type Velocidade = (typeof VELOCIDADES)[number];

export type Reproducao = { readonly t: number; readonly tocando: boolean; readonly velocidade: Velocidade; readonly fimS: number };
export type AcaoReproducao =
  | { tipo: "alternar" }
  | { tipo: "ir"; t: number }
  | { tipo: "velocidade"; v: Velocidade }
  | { tipo: "avancar"; dtMs: number };

export const iniciarReproducao = (fimS: number): Reproducao => ({ t: 0, tocando: false, velocidade: 16, fimS });

const limitar = (t: number, fimS: number) => Math.min(fimS, Math.max(0, t));

export function reproduzir(estado: Reproducao, acao: AcaoReproducao): Reproducao {
  switch (acao.tipo) {
    case "alternar": {
      const noFim = estado.t >= estado.fimS;
      return { ...estado, tocando: !estado.tocando || noFim, t: noFim ? 0 : estado.t };
    }
    case "ir":
      return { ...estado, t: limitar(acao.t, estado.fimS) };
    case "velocidade":
      return { ...estado, velocidade: acao.v };
    case "avancar": {
      if (!estado.tocando) return estado;
      const t = limitar(estado.t + (acao.dtMs / 1000) * estado.velocidade, estado.fimS);
      return { ...estado, t, tocando: t < estado.fimS };
    }
    default:
      return assertNever(acao);
  }
}

function assertNever(valor: never): never {
  throw new Error(`ação desconhecida: ${JSON.stringify(valor)}`);
}

export function formatarTempo(segundos: number): string {
  const total = Math.floor(segundos);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}
