---
id: intervalo-de-confianca
titulo: Intervalo de confiança
patch: 7.41
categoria: estatistica
fontes:
- Termo de uso comum no jogo (definição, sem número no texto)
- app/public/data/glossario.json (id intervalo-de-confianca)
- dota-tier1/work/CONTRATO_CHAVES.md (linha 36: ic_baixo, ic_alto, "IC 95% de Wilson")
sinonimos:
- IC 95%
- IC
links:
- amostra
---
## Básico
A faixa onde o valor real provavelmente está. Quanto menor a amostra, mais larga a faixa.

## Avançado
'IC 95% 45% a 94%' quer dizer que, com os dados que temos, o verdadeiro win rate do time quase certamente está em algum ponto entre 45% e 94%; o percentual único (ex. 78%) é só o meio do caminho mais provável, não um número exato. O Hub calcula esse intervalo pelo método de Wilson em cima do win rate principal de cada item (bans, heróis contra, fatores). Faixas largas avisam que a amostra é pequena e o número central pode mudar bastante com mais jogos.
