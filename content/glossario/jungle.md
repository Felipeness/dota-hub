---
id: jungle
titulo: Jungle
patch: 7.41
categoria: farm
fontes:
- dota-imortal/work/map_features_corrigido.json (posições e regras do mapa 7.41)
- https://dota2.fandom.com/wiki/Lane
- app/src/live/formato.ts (NOME_DA_LANE)
sinonimos:
- safelane
- lane segura
- selva
links:
- camp
- farm
---
## Básico
A área de camps de neutros entre as lanes. No 7.41 cada lado tem 14 camps. O carry vai para lá entre uma wave e outra ou quando a lane fica perigosa.

## Avançado
Safe lane é mais protegida (perto da própria torre), ocupada pelo pos 1; offlane é mais exposta, ocupada pelo pos 3; selva é a área de mato entre as lanes, farmada com creeps neutros em vez de creeps de lane. A função nomeDaLane traduz o lane_role do OpenDota (1 safe, 2 mid, 3 off, 4 selva).
