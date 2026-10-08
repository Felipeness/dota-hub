---
id: confianca-do-guia
titulo: Confiança
patch: 7.41
categoria: estatistica
fontes:
- app/src/heroes/FichaHeroi.tsx (componente Fontes, 'Confiança: {heroi.confianca}')
- app/public/data/herois/alchemist.json (campo confianca)
sinonimos:
- confiança
- confiança alta
- confiança média
- confiança baixa
---
## Básico
Quão sólida é a fonte de um dado: alta quando é oficial ou amostra grande, baixa quando é estimativa.

## Avançado
A 'Confiança' que aparece em toda ficha de herói e em cada recomendação de draft (ban, counter, fator) é o julgamento do analista sobre a solidez da fonte e do tamanho da amostra daquele dado específico, não um número calculado por fórmula fixa. Costuma ser alta para dados oficiais (datafeed da Valve) ou amostras grandes do OpenDota (milhares de jogos), e baixa para estimativas próprias ou amostras pequenas, por exemplo o histórico pessoal do Felipe com um herói.
