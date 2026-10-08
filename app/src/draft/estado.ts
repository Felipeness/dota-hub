import type { HeroId } from "./guia";
import type { Draft } from "./pontuacao";

// O draft mora na URL (?a=8,2&e=1&b=57): dá para mandar o link para o amigo e voltar com o botão do navegador.

export type Lado = keyof Draft;
export const LIMITES: Readonly<Record<Lado, number>> = { aliados: 5, inimigos: 5, bans: 14 };
const PARAMETRO: Readonly<Record<Lado, string>> = { aliados: "a", inimigos: "e", bans: "b" };
const LADOS: readonly Lado[] = ["aliados", "inimigos", "bans"];

const lerIds = (valor: string | null, validos: ReadonlySet<HeroId>, limite: number): HeroId[] =>
  [...new Set((valor ?? "").split(",").map(Number).filter((id) => validos.has(id)))].slice(0, limite);

/** Ids fora da lista de heróis ou repetidos em dois lados somem: o primeiro lado (seu time) ganha. */
export function lerDraft(params: URLSearchParams, validos: ReadonlySet<HeroId>): Draft {
  const vistos = new Set<HeroId>();
  const ler = (lado: Lado) => {
    const ids = lerIds(params.get(PARAMETRO[lado]), validos, LIMITES[lado]).filter((id) => !vistos.has(id));
    ids.forEach((id) => vistos.add(id));
    return ids;
  };
  return { aliados: ler("aliados"), inimigos: ler("inimigos"), bans: ler("bans") };
}

export function escreverDraft(draft: Draft): URLSearchParams {
  return new URLSearchParams(LADOS.flatMap((lado) => (draft[lado].length > 0 ? [[PARAMETRO[lado], draft[lado].join(",")]] : [])));
}

export const estaNoDraft = (draft: Draft, id: HeroId) => LADOS.some((lado) => draft[lado].includes(id));
export const ladoCheio = (draft: Draft, lado: Lado) => draft[lado].length >= LIMITES[lado];

export function adicionar(draft: Draft, lado: Lado, id: HeroId): Draft {
  if (estaNoDraft(draft, id) || ladoCheio(draft, lado)) return draft;
  return { ...draft, [lado]: [...draft[lado], id] };
}

export function remover(draft: Draft, id: HeroId): Draft {
  return { aliados: draft.aliados.filter((h) => h !== id), inimigos: draft.inimigos.filter((h) => h !== id), bans: draft.bans.filter((h) => h !== id) };
}
