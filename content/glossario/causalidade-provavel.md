---
id: causalidade-provavel
titulo: causalidade provável
patch: 7.41
categoria: estatistica
fontes:
- dota-tier1/work/CONTRATO_CHAVES.md (efeito_dentro_estado_pp, linha 37-38)
- dota-tier1/work/sintese/chaves.md (método Fatores, linha 10)
- app/src/times/ComoVencer.tsx
sinonimos:
- provável causa
- causalidade provável
- efeito dentro do mesmo estado
---
## Básico
O efeito se mantém mesmo só com jogos no mesmo estado de NW aos 15 min: mais provável que seja causa.

## Avançado
Para testar se um fator realmente causa a vitória (e não só acompanha ela), o Hub separa os jogos em três faixas pelo net worth do time aos 15:00 (atrás ≤ -2k, parelho, frente ≥ +2k) e mede o efeito só dentro de cada faixa. Se o efeito 'dentro do mesmo estado' mantém o mesmo sinal e pelo menos metade do tamanho do efeito ajustado, o selo vira 'provável causa' em vez de 'correlação'. Exemplo: 'mesmo em jogos no mesmo estado aos 15 min, o efeito continua em +11 pp' mostra que o fator não é só reflexo de o time já estar na frente.
