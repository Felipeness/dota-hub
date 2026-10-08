---
id: efeito-pp
titulo: efeito ajustado
patch: 7.41
categoria: estatistica
fontes:
- dota-tier1/work/CONTRATO_CHAVES.md (linhas 26, 31 e 37)
- app/src/times/ComoVencer.tsx (CartaoFator)
- dota-tier1/work/sintese/scripts/chaves.py (função encolher)
- dota-tier1/work/CONTRATO_CHAVES.md (efeito_pp é dado em pontos percentuais)
sinonimos:
- efeito ajustado
- efeito_pp
- efeito_bruto_pp
- efeito_dentro_estado_pp
- efeito encolhido
---
## Básico
3 medidas do mesmo efeito: bruto (cru), ajustado (descontando Elo) e dentro do estado (jogos parecidos aos 15).

## Avançado
efeito_bruto_pp é só a diferença simples de win rate com e sem o fator, sem descontar nada. efeito_pp é o efeito 'ajustado': usa regressão logística controlando o Elo pré-jogo dos dois lados (e, para fatores depois dos 15 min, também o net worth aos 15:00), para não confundir 'o time é mais forte' com 'o fator ajuda'. efeito_dentro_estado_pp vai além: mede o mesmo efeito só entre jogos no mesmo patamar de NW aos 15:00, para decidir se a causalidade é provável. O número que aparece em destaque no cartão (a barra e o 'pp' ao lado do fator) é sempre o efeito_pp ajustado, não o bruto.

Com poucos jogos, uma diferença de win rate grande pode ser só acaso; a técnica de 'encolhimento' mistura o valor observado com o esperado pelo Elo, dando mais peso ao observado conforme o número de jogos cresce: (vitórias + K×alvo) / (jogos + K). Atenção: no arquivo de fatores de vitória/derrota de cada equipe, efeito_pp é outro cálculo (ajustado por regressão logística controlando o Elo), não o mesmo encolhimento.
