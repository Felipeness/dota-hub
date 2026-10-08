---
id: excesso-pp
titulo: excesso_pp
patch: 7.41
categoria: estatistica
fontes:
- dota-tier1/work/CONTRATO_CHAVES.md (linha 30, campo excesso_pp)
- app/src/times/ComoVencer.tsx (ordenação de estilos_contra)
- app/public/data/times_atlas/team-spirit.chaves.json (estilos_contra, cluster C2 Contato)
sinonimos:
- excesso_pp
- excesso
---
## Básico
Win rate contra um estilo menos o esperado pelo Elo, em pp. Positivo = joga melhor que o esperado ali.

## Avançado
É o campo excesso_pp em estilos_contra: win rate contra um cluster de estilo menos o esperado pelo Elo contra aquele cluster. Exemplo real: o Team Spirit venceu 65% contra o cluster C2 Contato com 55% esperado pelo Elo, um excesso_pp de +9,6 (n=34). É a mesma conta do 'esperado pelo Elo' (win rate menos esperado), só que aplicada a um cluster de estilo em vez de a um herói ou fator específico, e usada para ordenar do estilo que mais derruba o time para o que menos derruba.
