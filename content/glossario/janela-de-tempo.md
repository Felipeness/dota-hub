---
id: janela-de-tempo
titulo: Janela de tempo
patch: 7.41
categoria: estatistica
fontes:
- app/src/times/camadas.ts (JANELAS, janelaDoTempo)
- dota-tier1/work/sintese/definicoes.md (seção 0, convenções gerais: janelas)
sinonimos:
- janela
- 0-5
- 30+
---
## Básico
Faixa de minutos de jogo, contada do início da partida pelo replay, usada pra agrupar e comparar números.

## Avançado
As janelas (0-5, 5-10, 10-15... até 30+) dividem a partida em blocos de 5 minutos de jogo real, medidos pelo tempo do replay, não por data real nem por eventos como mortes, pra comparar o que o time faz em cada fase do jogo. Por exemplo, filtrar a camada de Smokes para a janela '15-20' mostra só os smokes usados entre o minuto 15 e o 20 daquela partida. O corte '30+' agrupa tudo que passa dos 30 minutos num bloco só.
