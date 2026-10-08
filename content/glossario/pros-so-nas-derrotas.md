---
id: pros-so-nas-derrotas
titulo: pros só nas derrotas
patch: 7.41
categoria: estatistica
fontes:
- dota-imortal/src/comparacao/aggregate.py (ROBUSTNESS_GROUP = "satanic_derrotas")
sinonimos:
- pros só nas derrotas
- satanic_derrotas
---
## Básico
Média de Satanic/Yatoro/Watson contando só os jogos em que cada um perdeu, para uma comparação mais justa.

## Avançado
Pros em geral vencem a maioria das partidas e por isso passam mais tempo jogando com vantagem. Para não comparar o Felipe (que perde a maioria dos jogos solo) com pros sempre em vantagem, o Hub soma as partidas que os pros perderam e tira a média só delas: uma régua de 'pro jogando mal ou atrás', mais parecida com o contexto do Felipe. Descrito no código como 'teste de robustez contra o viés de time vencedor'.
