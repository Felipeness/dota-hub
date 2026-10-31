// Entrada da tela de 10 contas: o que o usuário cola vira account_id, e o estado inteiro mora na URL (?a=1,2,3,4,5&e=6,7,8,9,10&b=57).
import { z } from "zod";
import { lerConta } from "../../live/contas";
import type { HeroId } from "../guia";

export const CONTAS_POR_TIME = 5;
export const TOTAL_DE_CAMPOS = CONTAS_POR_TIME * 2;
const MAXIMO_DE_BANS = 14;
const MAIOR_ACCOUNT_ID = 4_294_967_295;
/** Steam64 = 76561197960265728 + account_id. Passa de 2^53, então a conta é feita em BigInt. */
const BASE_DO_STEAM64 = 76_561_197_960_265_728n;
const STEAM64 = /^\d{17}$/;
const SEPARADORES = /[\s,;]+/;

const MENSAGEM = {
  vazio: "Cole o ID da conta.",
  formato: "Use o Friend ID, o Steam64 ou o link do perfil no OpenDota, Dotabuff ou STRATZ.",
  intervalo: "Esse número não é de uma conta do Dota.",
  repetida: "Essa conta já está em outro campo.",
} as const;

function paraAccountId(texto: string): number | null {
  const doLinkOuFriendId = lerConta(texto);
  if (doLinkOuFriendId !== null) return doLinkOuFriendId;
  const limpo = texto.trim();
  return STEAM64.test(limpo) && BigInt(limpo) > BASE_DO_STEAM64 ? Number(BigInt(limpo) - BASE_DO_STEAM64) : null;
}

const contaSchema = z.string().transform((texto, ctx) => {
  if (texto.trim() === "") {
    ctx.addIssue({ code: "custom", message: MENSAGEM.vazio });
    return z.NEVER;
  }
  const conta = paraAccountId(texto);
  if (conta === null) {
    ctx.addIssue({ code: "custom", message: MENSAGEM.formato });
    return z.NEVER;
  }
  if (conta < 1 || conta > MAIOR_ACCOUNT_ID) {
    ctx.addIssue({ code: "custom", message: MENSAGEM.intervalo });
    return z.NEVER;
  }
  return conta;
});

export type LeituraDeConta = { ok: true; conta: number } | { ok: false; mensagem: string };

export function lerContaDoDraft(texto: string): LeituraDeConta {
  const analise = contaSchema.safeParse(texto);
  if (analise.success) return { ok: true, conta: analise.data };
  return { ok: false, mensagem: analise.error.issues[0]?.message ?? MENSAGEM.formato };
}

export type CampoDeConta =
  | { estado: "vazio" }
  | { estado: "valido"; conta: number }
  | { estado: "erro"; mensagem: string };

/** Campo vazio não é erro (ainda está sendo preenchido); conta repetida marca só a segunda ocorrência. */
export function validarCampos(textos: readonly string[]): readonly CampoDeConta[] {
  const vistas = new Set<number>();
  return textos.map((texto): CampoDeConta => {
    if (texto.trim() === "") return { estado: "vazio" };
    const leitura = lerContaDoDraft(texto);
    if (!leitura.ok) return { estado: "erro", mensagem: leitura.mensagem };
    if (vistas.has(leitura.conta)) return { estado: "erro", mensagem: MENSAGEM.repetida };
    vistas.add(leitura.conta);
    return { estado: "valido", conta: leitura.conta };
  });
}

export const contasValidas = (campos: readonly CampoDeConta[]): readonly number[] =>
  campos.flatMap((campo) => (campo.estado === "valido" ? [campo.conta] : []));

export const camposCompletos = (campos: readonly CampoDeConta[]): boolean =>
  campos.length === TOTAL_DE_CAMPOS && campos.every((campo) => campo.estado === "valido");

/** Texto colado com mais de um ID: preenche este campo e os seguintes. Devolve null quando é um ID só, e o campo recebe a colagem normal. */
export function espalharColagem(campos: readonly string[], inicio: number, colado: string): readonly string[] | null {
  const itens = colado.split(SEPARADORES).filter((item) => item !== "");
  if (itens.length < 2) return null;
  return campos.map((atual, i) => itens[i - inicio] ?? atual);
}

export type EstadoDaUrl = Readonly<{ aliados: readonly number[]; inimigos: readonly number[]; bans: readonly HeroId[] }>;
export const URL_VAZIA: EstadoDaUrl = { aliados: [], inimigos: [], bans: [] };

const unicos = <T>(itens: readonly T[]): T[] => [...new Set(itens)];

function lerContas(valor: string | null, jaUsadas: ReadonlySet<number>): number[] {
  const contas = (valor ?? "").split(",").flatMap((texto) => {
    const leitura = lerContaDoDraft(texto);
    return leitura.ok ? [leitura.conta] : [];
  });
  return unicos(contas).filter((conta) => !jaUsadas.has(conta)).slice(0, CONTAS_POR_TIME);
}

function lerBans(valor: string | null): HeroId[] {
  const ids = (valor ?? "").split(",").map(Number).filter((id) => Number.isInteger(id) && id > 0);
  return unicos(ids).slice(0, MAXIMO_DE_BANS);
}

/** Conta que aparece nos dois times fica só no primeiro: o link do seu time ganha. */
export function lerEstadoDaUrl(params: URLSearchParams): EstadoDaUrl {
  const aliados = lerContas(params.get("a"), new Set());
  const inimigos = lerContas(params.get("e"), new Set(aliados));
  return { aliados, inimigos, bans: lerBans(params.get("b")) };
}

export function escreverEstadoDaUrl({ aliados, inimigos, bans }: EstadoDaUrl): URLSearchParams {
  const parametros: [string, readonly number[]][] = [["a", aliados], ["e", inimigos], ["b", bans]];
  return new URLSearchParams(parametros.filter(([, ids]) => ids.length > 0).map(([chave, ids]) => [chave, ids.join(",")]));
}

export const urlCompleta = (estado: EstadoDaUrl): boolean =>
  estado.aliados.length === CONTAS_POR_TIME && estado.inimigos.length === CONTAS_POR_TIME;

/** Os dez campos na ordem aliados, inimigos; vazios onde a URL não trouxe conta. */
export function textosDosCampos({ aliados, inimigos }: EstadoDaUrl): readonly string[] {
  const preencher = (contas: readonly number[]) => Array.from({ length: CONTAS_POR_TIME }, (_, i) => String(contas[i] ?? ""));
  return [...preencher(aliados), ...preencher(inimigos)];
}

export function estadoDosCampos(contas: readonly number[], bans: readonly HeroId[]): EstadoDaUrl {
  return { aliados: contas.slice(0, CONTAS_POR_TIME), inimigos: contas.slice(CONTAS_POR_TIME), bans };
}
