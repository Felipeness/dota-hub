export const CODIGOS = [
  "ENTRADA_INVALIDA", "NAO_ENCONTRADO", "LIMITE_FONTE", "LIMITE_DIA",
  "FONTE_INDISPONIVEL", "FONTE_FORMATO", "SEM_CONEXAO", "INTERNO",
] as const;
export type CodigoAoVivo = (typeof CODIGOS)[number];

/** `detalhe` serve só para o registro no console; a tela nunca mostra. */
export type ErroAoVivo = { readonly codigo: CodigoAoVivo; readonly tenteEmS: number | null; readonly detalhe?: string };
export type RespostaAoVivo<T> = { readonly ok: true; readonly dados: T } | { readonly ok: false; readonly erro: ErroAoVivo };

export const ok = <T>(dados: T): RespostaAoVivo<T> => ({ ok: true, dados });
export const falha = (erro: ErroAoVivo): RespostaAoVivo<never> => ({ ok: false, erro });

export function erroAoVivo(codigo: CodigoAoVivo, tenteEmS: number | null = null, detalhe?: string): ErroAoVivo {
  return detalhe === undefined ? { codigo, tenteEmS } : { codigo, tenteEmS, detalhe };
}

export type ContextoDoErro = "conta" | "time" | "partida";

const NAO_ENCONTRADO: Record<ContextoDoErro, string> = {
  conta: "Conta não encontrada. Tente buscar pelo nome.",
  time: "Time não encontrado.",
  partida: "Esta conta não aparece nessa partida.",
};

const SEGUNDOS_PADRAO = 60;
const horas = (segundos: number) => Math.max(1, Math.ceil(segundos / 3_600));

const MENSAGENS: Record<CodigoAoVivo, (tenteEmS: number | null) => string> = {
  ENTRADA_INVALIDA: () => "Digite pelo menos 2 letras ou o número da conta.",
  NAO_ENCONTRADO: () => "Não encontrado.",
  LIMITE_FONTE: (s) => (s === 0
    ? "A busca ao vivo atingiu o limite da fonte. Já pode tentar de novo."
    : `A busca ao vivo atingiu o limite da fonte. Volta a funcionar em ${s ?? SEGUNDOS_PADRAO} segundos.`),
  LIMITE_DIA: (s) => `A busca ao vivo atingiu o limite do dia da fonte. Volta a funcionar em cerca de ${horas(s ?? 3_600)} h.`,
  FONTE_INDISPONIVEL: () => "A fonte de dados não respondeu. Tente de novo em alguns minutos.",
  FONTE_FORMATO: () => "A fonte respondeu algo inesperado. Tente de novo mais tarde.",
  SEM_CONEXAO: () => "Sem conexão.",
  INTERNO: () => "Algo deu errado na busca ao vivo. Tente de novo.",
};

export function mensagemDoErro(erro: Pick<ErroAoVivo, "codigo" | "tenteEmS">, contexto?: ContextoDoErro): string {
  if (erro.codigo === "NAO_ENCONTRADO" && contexto) return NAO_ENCONTRADO[contexto];
  return MENSAGENS[erro.codigo](erro.tenteEmS);
}
