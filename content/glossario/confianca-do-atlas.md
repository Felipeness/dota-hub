---
id: confianca-do-atlas
titulo: confiança alta
patch: 7.41
categoria: estatistica
fontes:
- dota-tier1/work/sintese/definicoes.md (seção 6)
- dota-tier1/work/CONTRATO_CHAVES.md (linha 38)
sinonimos:
- confiança alta
- confiança média
- confiança baixa
- confianca
---
## Básico
Critério do Hub pra confiar num número: tamanho da amostra, intervalo de confiança, padrão que se repete.

## Avançado
Não é a confiança estatística pura de um teste isolado: é um critério combinado do Hub. Em geral, alta/🟢 pede o padrão se repetir, n ≥ 30 no recorte e sobreviver ao controle por estado e duração do jogo; média/🟡 é evidência com alguma confusão (fator de contexto não controlado) ou n entre 12 e 29; baixa/🔴 é n menor que 12, resultado instável, ou quando o IC do efeito cruza zero (nos fatores) ou contém o win rate normal do time (em heróis contra). 'n=9 confiança baixa' está dizendo as duas coisas: poucos jogos e o número pode não se sustentar.
