// Lê os guias dos 22 heróis (texto com números do D2PT e dos pros) e tira dali o que o draft usa:
// menções a outros heróis (bom/evitar, aliado/inimigo) e as frases de situação ("contra ilusões…").

export type HeroId = number;
export type Lista = "bom" | "evitar";
export type Lado = "aliado" | "inimigo";

export type GuiaDraft = Readonly<{
  heroId: HeroId;
  bom: readonly string[];
  evitar: readonly string[];
  momento: string;
  itensSituacionais: readonly Readonly<{ nome: string; quando: string }>[];
}>;

export type NomeDeHeroi = Readonly<{ id: HeroId; nome: string }>;

/** Um item do guia do `dono` cita o `alvo`: "bom" quando o alvo está no `lado` indicado, ou "evitar". */
export type Mencao = Readonly<{ dono: HeroId; alvo: HeroId; lista: Lista; lado: Lado; pp: number | null; texto: string }>;

const LADO_INIMIGO = /inimig/i;
const LADO_ALIADO = /\b(?:seu|sua|seus|suas) (?:time|pos ?\d|suporte|offlaner|lane)\b|aliad|sinergi|como suporte/i;
// "O inimigo não tem os counters (Slark…)" num item de "bom": o Slark é ruim para o dono, então a lista vira.
// "Sem" só conta quando abre uma lista de heróis: "farmar sem ser pego" não nega nada. Sem flag i: com ela \p{Lu} casa minúscula.
const NEGACAO = /[Nn]ão tem\b|\btem poucos?\b|\btem poucas?\b|[Nn]enhum\b|\b[Ss]em (?=\p{Lu})/u;
// Número logo depois do nome: "Magnus +3,5 pp", "Riki (-2,6)".
const PP_DEPOIS_DO_NOME = /^\s*\(?\s*([+\-−]\s?\d+(?:,\d+)?)/u;

function ladoDaFrase(frase: string): Lado | null {
  const inimigo = LADO_INIMIGO.test(frase);
  const aliado = LADO_ALIADO.test(frase);
  if (inimigo === aliado) return null;
  return inimigo ? "inimigo" : "aliado";
}

const escapar = (texto: string) => texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const padraoDoNome = (nome: string) => new RegExp(`(?<![\\p{L}'])${escapar(nome)}(?![\\p{L}])`, "u");

function lerPp(depois: string): number | null {
  const achado = PP_DEPOIS_DO_NOME.exec(depois);
  if (!achado?.[1]) return null;
  return Number(achado[1].replace(/\s/g, "").replace("−", "-").replace(",", "."));
}

/**
 * Até o primeiro ";" ou fim de frase fora de parênteses: "Batrider (-2,6 pp; 1.000 jogos), Undying" é uma oração só.
 * Depois disso o guia costuma fazer apartes ("troque por Sven", "Kunkka saiu da lista") que não são o mesmo lado.
 */
function primeiraOracao(item: string): string {
  const letras = [...item];
  let profundidade = 0;
  for (const [i, letra] of letras.entries()) {
    if (letra === "(") profundidade += 1;
    if (letra === ")") profundidade = Math.max(0, profundidade - 1);
    if (profundidade > 0) continue;
    const fimDeFrase = letra === "." && letras[i + 1] === " " && /\p{Lu}/u.test(letras[i + 2] ?? "");
    if (letra === ";" || fimDeFrase) return letras.slice(0, i).join("");
  }
  return item;
}

// "bom" com número negativo (ou "evitar" com positivo) é um aparte do guia ("não aparece contra Puck (-1,2 pp)").
const contradizALista = (lista: Lista, pp: number | null) => pp !== null && (lista === "bom" ? pp < 0 : pp > 0);

function mencoesDoItem(dono: HeroId, item: string, lista: Lista, nomes: readonly NomeDeHeroi[]): Mencao[] {
  const oracao = primeiraOracao(item);
  const lado = ladoDaFrase(oracao);
  if (!lado) return [];
  return nomes.flatMap(({ id, nome }) => {
    if (id === dono) return [];
    const achado = padraoDoNome(nome).exec(oracao);
    if (!achado) return [];
    const negado = NEGACAO.test(oracao.slice(0, achado.index));
    const listaFinal: Lista = negado ? (lista === "bom" ? "evitar" : "bom") : lista;
    const pp = negado ? null : lerPp(oracao.slice(achado.index + nome.length));
    if (contradizALista(listaFinal, pp)) return [];
    return [{ dono, alvo: id, lista: listaFinal, lado, pp, texto: item }];
  });
}

export function extrairMencoes(guia: GuiaDraft, nomes: readonly NomeDeHeroi[]): Mencao[] {
  return [
    ...guia.bom.flatMap((item) => mencoesDoItem(guia.heroId, item, "bom", nomes)),
    ...guia.evitar.flatMap((item) => mencoesDoItem(guia.heroId, item, "evitar", nomes)),
  ];
}

// Situações: o que o inimigo tem. Só aparece a situação que algum guia cita, com a frase do guia como motivo.
export const SITUACOES = [
  { id: "controle", rotulo: "Muito controle", padrao: /\bstuns?\b|controle|\broots?\b|raiz|silênc|hex\b/i },
  { id: "ilusoes", rotulo: "Ilusões e invocações", padrao: /ilus|summons?|invoca/i },
  { id: "cura", rotulo: "Cura", padrao: /\bcura|regenera/i },
  { id: "invisibilidade", rotulo: "Invisibilidade", padrao: /invis/i },
  { id: "evasao", rotulo: "Evasão", padrao: /evas|\bmiss\b/i },
  { id: "magia", rotulo: "Dano mágico", padrao: /dano mágico|burst mágico|magia/i },
  { id: "mana", rotulo: "Queima de mana", padrao: /queima\w* de mana|mana break|queimador/i },
] as const;
export type SituacaoId = (typeof SITUACOES)[number]["id"];

/** `trecho` é a frase do guia que fala da situação; `texto`, o item inteiro. */
export type Conselho = Readonly<
  | { tipo: "pegar" | "evitar"; heroId: HeroId; trecho: string; texto: string }
  | { tipo: "item"; heroId: HeroId; item: string; trecho: string; texto: string }
>;

// "contra 48,3%" é comparação de números, não fala do inimigo.
const FALA_DO_INIMIGO = /inimig|contra(?! \d)/i;
const frases = (texto: string) => texto.split(/(?<=[.;])\s+(?=\p{Lu})/u);
const trechoDaSituacao = (texto: string, padrao: RegExp) => frases(texto).find((f) => FALA_DO_INIMIGO.test(f) && padrao.test(f));

function conselhosDaLista(guia: GuiaDraft, tipo: "pegar" | "evitar", padrao: RegExp): Conselho[] {
  return (tipo === "pegar" ? guia.bom : guia.evitar).flatMap((texto) => {
    const trecho = trechoDaSituacao(texto, padrao);
    return trecho ? [{ tipo, heroId: guia.heroId, trecho, texto }] : [];
  });
}

export function conselhosDaSituacao(id: SituacaoId, guias: readonly GuiaDraft[]): Conselho[] {
  const situacao = SITUACOES.find((s) => s.id === id);
  if (!situacao) return [];
  const { padrao } = situacao;
  return guias.flatMap((guia): Conselho[] => [
    ...conselhosDaLista(guia, "pegar", padrao),
    ...conselhosDaLista(guia, "evitar", padrao),
    ...guia.itensSituacionais
      .filter((i) => padrao.test(i.quando))
      .map((i) => ({ tipo: "item" as const, heroId: guia.heroId, item: i.nome, trecho: i.quando, texto: i.quando })),
  ]);
}

export function situacoesComConselho(guias: readonly GuiaDraft[]): SituacaoId[] {
  return SITUACOES.filter((s) => conselhosDaSituacao(s.id, guias).length > 0).map((s) => s.id);
}
