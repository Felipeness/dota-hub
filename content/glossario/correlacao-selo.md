---
id: correlacao-selo
titulo: CORRELAÇÃO
patch: 7.41
categoria: estatistica
fontes:
- dota-tier1/work/sintese/definicoes.md (seção 6)
- app/src/times/ComoVencer.tsx (objeto CAUSALIDADE)
- dota-tier1/work/sintese/scripts/lanes_relatorio.py
sinonimos:
- correlação
- CORRELAÇÃO
---
## Básico
Selo: a diferença é real nos dados, mas pode ser efeito do time já estar ganhando/perdendo, não a causa.

## Avançado
Por padrão, toda relação encontrada nos dados do Hub recebe o selo CORRELAÇÃO: por exemplo, times que recuperam uma lane perdida também passam mais tempo na metade inimiga, mas isso pode ser consequência de já estarem vencendo a partida, não a causa da virada. Vira 'provável causa' só quando o efeito se mantém mesmo comparando jogos no mesmo estado de NW aos 15:00 (ver 'causalidade provável'); sem esse controle, fica CORRELAÇÃO.
