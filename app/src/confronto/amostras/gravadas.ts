/// <reference types="node" />
// Só para testes: respostas reais do OpenDota gravadas em 08/10/2026 e podadas para 13 heróis e os itens das regras.
import { readFileSync } from "node:fs";
import { aghanimFonte, habilidadesDosHeroisFonte, habilidadesFonte, heroisFonte, itensFonte } from "../fonte";
import { comAghanim, montarHerois, montarItens, type Heroi } from "../modelo";

export const amostra = (nome: string): unknown => JSON.parse(readFileSync(`src/confronto/amostras/${nome}.json`, "utf-8"));

export const HEROIS = comAghanim(
  montarHerois(
    heroisFonte.parse(amostra("herois")),
    habilidadesDosHeroisFonte.parse(amostra("habilidades-dos-herois")),
    habilidadesFonte.parse(amostra("habilidades")),
  ),
  aghanimFonte.parse(amostra("aghanim")),
);
export const ITENS = montarItens(itensFonte.parse(amostra("itens")));

export function heroi(chave: string): Heroi {
  const achado = HEROIS.find((h) => h.chave === chave);
  if (!achado) throw new Error(`herói ${chave} fora da amostra`);
  return achado;
}
