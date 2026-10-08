---
id: amostra-baixa
titulo: AMOSTRA BAIXA
patch: 7.41
categoria: estatistica
fontes:
- dota-tier1/work/CONTRATO_HUB.md (campo amostra.nivel)
- dota-tier1/work/equipes/xtreme/scripts/hub.py (linha 261, "nivel": "low")
- app/public/data/times_atlas/indice.json
sinonimos:
- AMOSTRA BAIXA
- amostra baixa
- nivel low
- amostra.nivel
---
## Básico
Aviso de poucos jogos/replays medidos (ou time instável): os números merecem menos confiança.

## Avançado
O nivel vem de 'ok' ou 'low' no arquivo do time, decidido por quem montou o atlas, não é uma fórmula fixa no código. Leva em conta o número de replays (Nigma com 71 replays, a menor amostra das 12, ficou 'low') e também a situação do time (Xtreme ficou 'low' por ser fronteira, mesmo com 112 replays, enquanto LGD, também fronteira, ficou 'ok' com 107 replays). Quando aparece 'low', o cartão do time mostra o selo AMOSTRA BAIXA com o aviso 'Poucas partidas: confiança reduzida'.
