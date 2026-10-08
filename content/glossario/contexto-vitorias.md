---
id: contexto-vitorias
titulo: vs counter
patch: 7.41
categoria: partida
fontes:
- dota-tier1/work/CONTRATO_CHAVES.md (linha 48)
- app/src/times/ComoVencer.tsx (ROTULO_CONTEXTO)
sinonimos:
- vs counter
- sem counter
- como azarão
- como favorito
- lane perdida
- atrás aos 15
- último pick
- contexto_vitorias
---
## Básico
Chips com a situação de cada jogo do herói banido: vs counter, azarão, lane perdida, atrás aos 15 etc.

## Avançado
Cada jogo do herói sugerido para banir é classificado por 6 situações: vs_counter/sem_counter (o adversário tinha ou não um herói contra o qual o nosso vence ≤45% em 30+ jogos pro, segundo o OpenDota); como_azarao/como_favorito (Elo pré-jogo < 45% ou > 55%); lane_perdida (NW da dupla do jogador < 0 aos 10:00); atras_15 (NW do time < 0 aos 15:00); pickado_por_ultimo (foi o 5º pick da equipe). Cada chip mostra o placar V-D do herói naquela situação, por exemplo 'como azarão 2-2', para mostrar se ele ajuda até quando o time já está em desvantagem.
