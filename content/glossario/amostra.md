---
id: amostra
titulo: Amostra
patch: 7.41
categoria: estatistica
fontes:
- Termo de uso comum no jogo (definição, sem número no texto)
- app/public/data/glossario.json (id amostra)
- dota-tier1/work/sintese/definicoes.md (seção 6, cortes de confiança)
- dota-tier1/work/CONTRATO_CHAVES.md (linha 29, banido menos de 8 vezes)
- app/src/confronto/vantagem.ts (JOGOS_MINIMOS = 20)
- dota-tier1/work/sintese/scripts/chaves.py (função confianca)
sinonimos:
- n=
- tamanho da amostra
- número de jogos
- amostra pequena
- amostra boa
- n baixo
- pouco dado
links:
- intervalo-de-confianca
---
## Básico
O conjunto de partidas medido. Com poucos jogos, o número engana.

## Avançado
'n=29' ao lado de um win rate significa que aquele percentual foi calculado em cima de 29 partidas; quanto menor o n, mais a porcentagem pode mudar com só mais um ou dois jogos diferentes. É por isso que o Hub sempre mostra o n junto do número e reduz a confiança para 'baixa' quando ele fica pequeno, por exemplo abaixo de 12 jogos nas lanes perdidas ou quando o herói foi banido menos de 8 vezes contra o time.

Não é um número fixo único no Hub: no confronto 1x1 o corte é 20 jogos; nos fatores de equipe pedem n ≥ 15 ou n ≥ 30 pra subir de confiança; em guias de herói é uma nota qualitativa. O princípio é o mesmo: quanto menor a amostra, maior a chance de o número ser ruído.
