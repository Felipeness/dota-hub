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

export const nomeDoItem = (chave: string): string =>
  chave.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
