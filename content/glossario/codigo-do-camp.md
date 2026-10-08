---
id: codigo-do-camp
titulo: Código do camp
patch: 7.41
categoria: mapa
fontes:
- dota-imortal/src/maplib.py (função camp_label)
sinonimos:
- R1
- D1
- código do camp
---
## Básico
Numeração própria do Hub pros 14 camps de cada lado; o mesmo número é o mesmo tipo de camp espelhado.

## Avançado
Lista interna que dá a cada um dos 14 camps de jungle de um lado um número de 1 a 14, prefixado com R (Radiant) ou D (Dire); o camp R5 é o espelho exato do D5 no outro lado. Serve pra identificar e comparar camps entre rotas sem escrever o id técnico inteiro.
