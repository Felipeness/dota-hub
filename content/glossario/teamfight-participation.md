---
id: teamfight-participation
titulo: Teamfight participation
patch: 7.41
categoria: estatistica
fontes:
- dota-imortal/src/comparacao/games.py (participacao_abates, participacao_lutas)
sinonimos:
- teamfight participation
- participação em abates
- kill participation
---
## Básico
Duas métricas parecidas mas calculadas diferente: uma é fórmula simples do Hub, a outra vem pronta e opaca do OpenDota.

## Avançado
'Participação em abates do time' é calculada pelo Hub: (abates + assistências do jogador) ÷ abates totais do time. 'Teamfight participation (OpenDota)' vem pronto da API (fórmula não documentada). Costumam ficar próximas, mas não são garantidamente a mesma conta, por isso aparecem lado a lado em vez de uma substituir a outra.
