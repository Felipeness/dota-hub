// Helper leve só da família build: agrupa o catálogo de itens de porQueItem.ts por "assinatura" de contra
// (mesmas tags + mínimo) pra avaliar uma vez por grupo, não uma vez por item irmão (manta/lotus_orb/sphere
// são 3 respostas pro mesmo "controle duplo", por exemplo). Reusa porQueItem.ts e tagsDosHerois.ts (já existem
// em live/partida/), não duplica a lista de itens nem a de tags.
import { explicarItem, ITENS_CURADOS, type Explicacao } from "../../../live/partida/porQueItem";

export type InimigoParaRegra = Readonly<{ chave: string; nome: string }>;
export type GrupoDeContra = Readonly<{ assinatura: string; chaves: readonly string[]; explicacao: Explicacao }>;

function assinaturaDoItem(chave: string): string | null {
  const item = ITENS_CURADOS[chave];
  if (!item?.contra) return null;
  return `${item.contra.minimo}:${[...item.contra.tags].sort().join(",")}`;
}

/** Um grupo por assinatura de contra; a explicação é a do primeiro item do grupo (idêntica pros irmãos, mesma regra). */
export function gruposDeContra(inimigos: readonly InimigoParaRegra[]): readonly GrupoDeContra[] {
  const porAssinatura = new Map<string, string[]>();
  for (const chave of Object.keys(ITENS_CURADOS)) {
    const assinatura = assinaturaDoItem(chave);
    if (!assinatura) continue;
    porAssinatura.set(assinatura, [...(porAssinatura.get(assinatura) ?? []), chave]);
  }
  return [...porAssinatura.entries()].flatMap(([assinatura, chaves]): GrupoDeContra[] => {
    const explicacao = explicarItem(chaves[0] ?? "", inimigos);
    return explicacao ? [{ assinatura, chaves, explicacao }] : [];
  });
}

/** Grupos cujo motivo bateu com o draft inimigo (justificados), independente de a pessoa ter comprado algo ou não. */
export const gruposJustificados = (grupos: readonly GrupoDeContra[]): readonly GrupoDeContra[] =>
  grupos.filter((g) => g.explicacao.motivo !== null);

/**
 * Funde grupos cujo motivo (texto renderizado por motivoContra) ficou idêntico. Isso acontece quando um item de
 * tags compostas (ex. Black King Bar = controle+mágico) só bate o mínimo numa das tags nesse draft específico: o
 * motivo reduz pro texto da tag única, igual ao de outro item que só cobre aquela tag (ex. Pipe). Sem essa fusão,
 * o mesmo risco gera dois achados (faltou/acerto) contraditórios ou duplicados.
 */
export function agruparPorMotivo(grupos: readonly GrupoDeContra[]): readonly GrupoDeContra[] {
  const porMotivo = new Map<string, { chaves: string[]; explicacao: Explicacao; assinatura: string }>();
  for (const g of grupos) {
    const motivo = g.explicacao.motivo ?? "";
    const existente = porMotivo.get(motivo);
    if (existente) {
      existente.chaves.push(...g.chaves.filter((c) => !existente.chaves.includes(c)));
    } else {
      porMotivo.set(motivo, { chaves: [...g.chaves], explicacao: g.explicacao, assinatura: g.assinatura });
    }
  }
  return [...porMotivo.values()];
}

export const nomeDoItem = (chave: string): string =>
  chave.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
