// Respostas que não são "compre este item": desviar no tempo certo e o Shard ou Scepter do seu herói.
// As curadas vêm de interacoes.ts; as derivadas saem do texto do aghs_desc do OpenDota.
import { INTERACOES, type Interacao } from "./interacoes";
import type { Habilidade, Heroi, Item, MecanicaId } from "./modelo";

type Melhoria = "shard" | "scepter";

export type Recurso = Readonly<{
  /** Uma entrada por coisa: "shard", "scepter" ou "item:manta". A curada cobre a derivada de mesmo id. */
  id: string;
  rotulo: string;
  resumo: string;
  detalhes: readonly string[];
  /** Texto do próprio jogo que sustenta a resposta, quando houver. */
  prova: string | null;
  fontes: readonly string[];
  patch: string | null;
}>;

type Contexto = Readonly<{ mecanica: MecanicaId; achadas: readonly Habilidade[]; meu: Heroi; itens: ReadonlyMap<string, Item> }>;

const NOME: Readonly<Record<Melhoria, string>> = { shard: "Aghanim's Shard", scepter: "Aghanim's Scepter" };
const AGHS_OPENDOTA = "https://api.opendota.com/api/constants/aghs_desc";

/** Frase do aghs_desc que mostra que a melhoria funciona durante a mecânica, e como dizer isso. */
const MELHORIA_RESPONDE: Readonly<Partial<Record<MecanicaId, Readonly<{ texto: RegExp; quando: string }>>>> = {
  controle: { texto: /while (stunned|disabled)/i, quando: "mesmo atordoado" },
  silencio: { texto: /while silenced/i, quando: "mesmo silenciado" },
};

const segundos = (n: number) => `${n.toLocaleString("pt-BR", { maximumFractionDigits: 2 })} s`;
const numero = (texto: string | undefined) => parseFloat(texto ?? "");
const conjuracaoS = (h: Habilidade) => numero(h.atributos.find((a) => a.chave === "abilitycastpoint")?.valores[0]);
const naoNulo = <T,>(v: T | null): v is T => v !== null;

function janela(contra: Habilidade, item: Item): string | null {
  const conjuracao = conjuracaoS(contra);
  const invulneravel = numero(item.valores["invuln_duration"]);
  if (!(conjuracao > 0 && invulneravel > 0)) return null;
  const inicio = Math.max(0, conjuracao - invulneravel);
  return `Janela: os ${segundos(invulneravel)} de invulnerabilidade do ${item.nome} precisam cobrir o fim dos ${segundos(conjuracao)} `
    + `de conjuração do ${contra.nome}. Aperte entre ${segundos(inicio)} e ${segundos(conjuracao)} depois que ele começa a animação, sem contar a sua latência.`;
}

function avisoDeDispel(contra: Habilidade, item: Item): string | null {
  if (contra.dispel !== "nao" || !/dispel/i.test(item.texto)) return null;
  return `Depois que o ${contra.nome} pegou, o dispel do ${item.nome} não tira: ele não sai com dispel.`;
}

function desvio(i: Extract<Interacao, { tipo: "desvio" }>, { achadas, itens }: Contexto): Recurso | null {
  const contra = achadas.find((h) => h.chave === i.contra);
  const item = itens.get(i.item);
  if (!contra || !item) return null;
  return {
    id: `item:${item.chave}`, rotulo: `${item.nome}, no tempo certo`, resumo: i.resumo,
    detalhes: [i.detalhe, janela(contra, item), avisoDeDispel(contra, item)].filter(naoNulo),
    prova: null, fontes: i.fontes, patch: i.patch,
  };
}

function melhoriaCurada(i: Extract<Interacao, { tipo: "melhoria" }>, { achadas, meu }: Contexto): Recurso | null {
  const melhoria = meu.aghanim[i.melhoria];
  if (meu.chave !== i.heroi || !melhoria || !achadas.some((h) => h.chave === i.contra)) return null;
  return {
    id: i.melhoria, rotulo: `Seu ${NOME[i.melhoria]}, no ${melhoria.habilidade}`, resumo: i.resumo,
    detalhes: [i.detalhe], prova: melhoria.descricao, fontes: i.fontes, patch: i.patch,
  };
}

function curados(contexto: Contexto): Recurso[] {
  return INTERACOES
    .filter((i) => i.mecanica === contexto.mecanica)
    .map((i) => (i.tipo === "desvio" ? desvio(i, contexto) : melhoriaCurada(i, contexto)))
    .filter(naoNulo);
}

function derivados({ mecanica, meu }: Contexto): Recurso[] {
  const responde = MELHORIA_RESPONDE[mecanica];
  if (!responde) return [];
  return (["shard", "scepter"] as const).flatMap((tipo) => {
    const melhoria = meu.aghanim[tipo];
    if (!melhoria || !responde.texto.test(melhoria.descricao)) return [];
    return [{
      id: tipo, rotulo: `Seu ${NOME[tipo]}, no ${melhoria.habilidade}`,
      resumo: `Libera ${melhoria.habilidade} ${responde.quando}.`,
      detalhes: [], prova: melhoria.descricao, fontes: [AGHS_OPENDOTA], patch: null,
    }];
  });
}

export function recursosContra(contexto: Contexto): Recurso[] {
  const escolhidos = curados(contexto);
  const cobertos = new Set(escolhidos.map((r) => r.id));
  return [...escolhidos, ...derivados(contexto).filter((r) => !cobertos.has(r.id))];
}
