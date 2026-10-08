---
id: percentil
titulo: percentil
patch: 7.41
categoria: estatistica
fontes:
- https://api.opendota.com/api/players/{account_id}/rankings
- dota-imortal/src/comparacao/games.py (campo benchmarks, pct_*)
sinonimos:
- percentil
- ranking por herói
- percentil OpenDota
- pct_
---
## Básico
Sua posição relativa entre jogadores daquele herói: percentil 83 = melhor desempenho que 83% deles.

## Avançado
Posição do jogador numa classificação de desempenho de um herói específico, entre todos os jogadores que o OpenDota rastreou jogando ele, via /players/{id}/rankings. É uma régua relativa àquele herói, não ao jogo inteiro nem ao MMR geral.

O OpenDota diz em que posição relativa um jogo ficou em cada estatística (LH/min, GPM, dano/min) dentro da base de partidas públicas daquele herói. Usado pra comparar jogadores de pools de herói diferentes sem o viés de 'esse herói farma mais por natureza'.
