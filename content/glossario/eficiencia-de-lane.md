---
id: eficiencia-de-lane
titulo: Eficiência de lane
patch: 7.41
categoria: estatistica
fontes:
- app/src/live/partida/detalhe.ts (comentário sobre lane_efficiency_pct)
- dota-imortal/src/comparacao/games.py (eficiencia_lane_pct)
sinonimos:
- eficiência de lane
- lane efficiency
- lane_efficiency_pct
---
## Básico
Percentual de ouro e XP que o jogador farmou na lane em relação a um máximo teórico calculado pelo próprio OpenDota.

## Avançado
Campo lane_efficiency_pct pronto do OpenDota, comparando ouro e XP conseguidos na fase de lane com um teto teórico de farm possível (fórmula não documentada publicamente). O valor fica ausente em partidas que o OpenDota não analisou essa fase.

Campo lane_efficiency_pct que o próprio OpenDota calcula e devolve pronto para cada partida; o Hub usa o número mas não reproduz o cálculo (não é documentado publicamente).
