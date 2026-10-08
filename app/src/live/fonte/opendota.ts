import type { z } from "zod";
import { erroAoVivo, falha, ok, type RespostaAoVivo } from "../erros";
import type { Fila } from "../fila";
import { registrarNoConsole, type Registrar, type Registro } from "../registro";

export const BASE_OPENDOTA = "https://api.opendota.com/api";
/** Constantes do jogo só mudam com patch: o deploy publica uma cópia junto do site (scripts/espelhar-constantes.mjs) e a API fica de reserva. Em 08/10/2026 /constants/items passou de 20 s na API. */
const PREFIXO_CONSTANTES = "/constants/";
const BASE_ESPELHO = "/data/opendota";
/** Em 07/10/2026 o /search do OpenDota levou 17 s numa busca nova (os outros endpoints, menos de 1 s); com 4 s a busca por nome falhava. */
const TEMPO_MAXIMO_MS = 20_000;
const MAXIMO_DE_TENTATIVAS = 3;
/** Em 06/10/2026 o 429 por minuto veio com {"error":"minute rate limit exceeded"}; o do dia não foi visto, então casa "day" ou "daily". */
const LIMITE_DO_DIA = /\bday\b|daily/i;

export type Fonte = <T>(caminho: string, schema: z.ZodType<T>) => Promise<RespostaAoVivo<T>>;

type Opcoes = Readonly<{
  fila: Fila;
  buscar?: typeof fetch;
  estaOnline?: () => boolean;
  registrar?: Registrar;
  agora?: () => number;
  tempoMaximoMs?: number;
}>;

type Json = { valido: true; corpo: unknown } | { valido: false };

function lerJson(texto: string): Json {
  if (texto === "") return { valido: true, corpo: null };
  try {
    return { valido: true, corpo: JSON.parse(texto) };
  } catch {
    return { valido: false };
  }
}

async function interpretar<T>(resposta: Response, schema: z.ZodType<T>): Promise<RespostaAoVivo<T>> {
  if (resposta.status === 404) return falha(erroAoVivo("NAO_ENCONTRADO"));
  if (!resposta.ok) return falha(erroAoVivo("FONTE_INDISPONIVEL", null, `status ${resposta.status}`));
  const texto = await resposta.text().catch(() => null);
  if (texto === null) return falha(erroAoVivo("FONTE_INDISPONIVEL", null, "corpo interrompido"));
  const json = lerJson(texto);
  if (!json.valido) return falha(erroAoVivo("FONTE_FORMATO", null, "corpo não é JSON"));
  const analise = schema.safeParse(json.corpo);
  if (analise.success) return ok(analise.data);
  const problema = analise.error.issues[0];
  return falha(erroAoVivo("FONTE_FORMATO", null, problema ? `${problema.path.join(".")}: ${problema.message}` : "corpo inválido"));
}

function registroDaConsulta(caminho: string, resposta: RespostaAoVivo<unknown>, duracaoMs: number): Registro {
  if (resposta.ok) return { nivel: "info", operacao: "fonte", duracaoMs, codigo: null, detalhe: caminho };
  const { codigo, detalhe } = resposta.erro;
  return {
    nivel: codigo === "FONTE_FORMATO" ? "error" : "warn", operacao: "fonte", duracaoMs, codigo,
    detalhe: detalhe ? `${caminho}: ${detalhe}` : caminho,
  };
}

export function criarFonte({
  fila, buscar = fetch, estaOnline = () => navigator.onLine, registrar = registrarNoConsole,
  agora = Date.now, tempoMaximoMs = TEMPO_MAXIMO_MS,
}: Opcoes): Fonte {
  async function chamar(url: string): Promise<RespostaAoVivo<Response>> {
    try {
      const init: RequestInit = { signal: AbortSignal.timeout(tempoMaximoMs), credentials: "omit", headers: { accept: "application/json" } };
      return ok(await buscar(url, init));
    } catch (causa) {
      return falha(erroAoVivo(estaOnline() ? "FONTE_INDISPONIVEL" : "SEM_CONEXAO", null, `GET ${url}: ${String(causa)}`));
    }
  }

  function erroDeLimite(doDia: boolean): RespostaAoVivo<never> {
    const tenteEmS = Math.max(1, Math.ceil((fila.estado().pausadaAte - agora()) / 1_000));
    return falha(erroAoVivo(doDia ? "LIMITE_DIA" : "LIMITE_FONTE", tenteEmS));
  }

  async function pedirNaVez<T>(url: string, schema: z.ZodType<T>, tentativa: number): Promise<RespostaAoVivo<T>> {
    const espera = await fila.aguardarVez();
    if (espera) return falha(erroAoVivo(espera.doDia ? "LIMITE_DIA" : "LIMITE_FONTE", espera.tenteEmS));
    const chamada = await chamar(url);
    if (!chamada.ok) return chamada;
    if (chamada.dados.status !== 429) {
      fila.liberou();
      return interpretar(chamada.dados, schema);
    }
    const doDia = LIMITE_DO_DIA.test(await chamada.dados.text().catch(() => ""));
    fila.limitou(doDia ? "dia" : "minuto");
    if (doDia || tentativa >= MAXIMO_DE_TENTATIVAS) return erroDeLimite(doDia);
    return pedirNaVez(url, schema, tentativa + 1);
  }

  async function doEspelho<T>(caminho: string, schema: z.ZodType<T>): Promise<RespostaAoVivo<T> | null> {
    if (!caminho.startsWith(PREFIXO_CONSTANTES)) return null;
    const chamada = await chamar(`${BASE_ESPELHO}${caminho}.json`);
    if (!chamada.ok || !chamada.dados.ok) return null;
    const resposta = await interpretar(chamada.dados, schema);
    return resposta.ok ? resposta : null;
  }

  return async (caminho, schema) => {
    const inicio = agora();
    const espelho = estaOnline() ? await doEspelho(caminho, schema) : null;
    const resposta = espelho ?? (estaOnline() ? await pedirNaVez(`${BASE_OPENDOTA}${caminho}`, schema, 1) : falha(erroAoVivo("SEM_CONEXAO")));
    registrar(registroDaConsulta(caminho, resposta, agora() - inicio));
    return resposta;
  };
}
