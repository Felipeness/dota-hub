import { minutoComoTexto, POSICOES, type AtributoDeHeroi, type HeroiDoCatalogo, type Posicao } from "../data/schemas";
import { normalizar } from "../routes/filtros";

export const ROTULO_DA_POSICAO: Readonly<Record<Posicao, string>> = {
  1: "Pos 1 · Carry", 2: "Pos 2 · Mid", 3: "Pos 3 · Offlane", 4: "Pos 4 · Suporte", 5: "Pos 5 · Suporte duro",
};

export const ROTULO_DO_ATRIBUTO: Readonly<Record<AtributoDeHeroi, string>> = {
  str: "Força", agi: "Agilidade", int: "Inteligência", all: "Universal",
};

export type FiltroDoCatalogo = Readonly<{ texto: string; posicao: Posicao | null; atributo: AtributoDeHeroi | null }>;
export type GrupoDePosicao = Readonly<{ posicao: Posicao; herois: readonly HeroiDoCatalogo[] }>;

const ehPosicao = (n: number): n is Posicao => POSICOES.some((p) => p === n);

/** "?pos=3" da URL vira a posição; qualquer outra coisa vira null (todas). */
export function posicaoDoParametro(valor: string | null): Posicao | null {
  const numero = Number(valor);
  return valor !== null && ehPosicao(numero) ? numero : null;
}

/** O nome interno do jogo entra na busca: "zuus" acha o Zeus, "rattletrap" acha o Clockwerk. */
export function filtrarCatalogo(herois: readonly HeroiDoCatalogo[], { texto, posicao, atributo }: FiltroDoCatalogo): HeroiDoCatalogo[] {
  const alvo = normalizar(texto.trim());
  return herois.filter((h) =>
    (atributo === null || h.atributo === atributo)
    && (posicao === null || h.posicoes.includes(posicao))
    && normalizar(`${h.nome} ${h.id} ${h.nome_interno}`).includes(alvo));
}

/** Um grupo por posição, na ordem 1 a 5; o herói de várias posições aparece em cada uma. Grupo vazio some. */
export function agruparPorPosicao(herois: readonly HeroiDoCatalogo[], posicao: Posicao | null): GrupoDePosicao[] {
  const posicoes = posicao === null ? POSICOES : [posicao];
  return posicoes
    .map((p) => ({ posicao: p, herois: herois.filter((h) => h.posicoes.includes(p)).toSorted((a, b) => a.nome.localeCompare(b.nome)) }))
    .filter((g) => g.herois.length > 0);
}

/** O herói da URL pelo id do app (zeus) ou pelo nome interno do jogo (zuus), pra quem chega com o slug do OpenDota. */
export function acharNoCatalogo(herois: readonly HeroiDoCatalogo[], id: string): HeroiDoCatalogo | null {
  return herois.find((h) => h.id === id) ?? herois.find((h) => h.nome_interno === id) ?? null;
}

const MINUTO_DECIMAL = /^\d+(?:[.,]\d+)?$/;
const COM_BASE = /^(.+?)\s*\((.+)\)$/;

/**
 * O minuto da ficha é texto livre: "12:12 (mediana, 113 de 137 jogos)", "5,8", "13" ou "por volta de 25 a 30 min".
 * Separa o horário da base do número e põe o minuto decimal no formato m:ss do resto do site.
 */
export function minutoDoItem(texto: string): { tempo: string; base: string | null } {
  const achado = COM_BASE.exec(texto);
  const tempo = achado?.[1] ?? texto;
  const base = achado?.[2] ?? null;
  return { tempo: MINUTO_DECIMAL.test(tempo) ? minutoComoTexto(Number(tempo.replace(",", "."))) : tempo, base };
}
