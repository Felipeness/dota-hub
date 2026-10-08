---
id: mid
titulo: Mid
patch: 7.41
categoria: lane
fontes:
- dota-imortal/work/map_features_corrigido.json (posições e regras do mapa 7.41)
- app/src/times/LanesPerdidas.tsx
- dota-tier1/work/sintese/definicoes.md (seção 1)
- content/glossario/dual-lane.md
sinonimos:
- safe lane
- offlane
- off lane
- lane segura
links:
- pos2
- runa
---
## Básico
A lane do meio, que cruza o rio no centro do mapa. Joga lá a posição 2.

## Avançado
Safe lane é a lane perto da própria torre, mais fácil de defender, onde jogam pos1 e pos5; mid é a lane central, disputada 1 contra 1 pelos pos2; offlane é a lane perto da torre do adversário, mais hostil, de pos3 e pos4 (ROTULO_LANE em app/src/times/LanesPerdidas.tsx; mapeamento por posição em dota-tier1/work/sintese/definicoes.md, seção 1, linha 'lane aos 10' — corrigido: era citado como seção 0). Ex.: 'Mid do Niku' identifica a lane pela posição que aquele jogador ocupou na partida, não pelo herói escolhido (confirmado pelo template de título em LanesPerdidas.tsx: `${ROTULO_LANE[lane.lane]} do ${lane.jogador}`).
