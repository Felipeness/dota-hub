import { juntarFrescor, type Consultar } from "../live/consulta";
import { ok, type RespostaAoVivo } from "../live/erros";
import type { Frescor } from "../live/tipos";
import {
  habilidadesDosHeroisFonte, habilidadesFonte, heroisFonte, itensFonte, matchupsFonte, popularidadeFonte,
  type MatchupsFonte, type PopularidadeFonte,
} from "./fonte";
import { montarHerois, montarItens, type Heroi, type Item } from "./modelo";

/** Constantes mudam com patch; estatísticas de partidas, todo dia. */
const VALIDADE_S = { constantes: 3 * 24 * 3_600, estatisticas: 24 * 3_600 } as const;

export type Base = Readonly<{ herois: readonly Heroi[]; itens: ReadonlyMap<string, Item>; frescor: Frescor }>;
export type Estatisticas = Readonly<{ matchups: MatchupsFonte; popularidade: PopularidadeFonte; frescor: Frescor }>;

export async function carregarBase(consultar: Consultar): Promise<RespostaAoVivo<Base>> {
  const validadeS = VALIDADE_S.constantes;
  const [herois, doHeroi, habilidades, itens] = await Promise.all([
    consultar({ caminho: "/constants/heroes", schema: heroisFonte, validadeS }),
    consultar({ caminho: "/constants/hero_abilities", schema: habilidadesDosHeroisFonte, validadeS }),
    consultar({ caminho: "/constants/abilities", schema: habilidadesFonte, validadeS }),
    consultar({ caminho: "/constants/items", schema: itensFonte, validadeS }),
  ]);
  if (!herois.ok) return herois;
  if (!doHeroi.ok) return doHeroi;
  if (!habilidades.ok) return habilidades;
  if (!itens.ok) return itens;
  return ok({
    herois: montarHerois(herois.dados.valor, doHeroi.dados.valor, habilidades.dados.valor),
    itens: montarItens(itens.dados.valor),
    frescor: juntarFrescor(herois.dados.frescor, doHeroi.dados.frescor, habilidades.dados.frescor, itens.dados.frescor),
  });
}

export async function carregarEstatisticas(consultar: Consultar, heroiId: number): Promise<RespostaAoVivo<Estatisticas>> {
  const validadeS = VALIDADE_S.estatisticas;
  const [matchups, popularidade] = await Promise.all([
    consultar({ caminho: `/heroes/${heroiId}/matchups`, schema: matchupsFonte, validadeS }),
    consultar({ caminho: `/heroes/${heroiId}/itemPopularity`, schema: popularidadeFonte, validadeS }),
  ]);
  if (!matchups.ok) return matchups;
  if (!popularidade.ok) return popularidade;
  return ok({
    matchups: matchups.dados.valor, popularidade: popularidade.dados.valor,
    frescor: juntarFrescor(matchups.dados.frescor, popularidade.dados.frescor),
  });
}
