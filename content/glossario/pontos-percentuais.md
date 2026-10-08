---
id: pontos-percentuais
titulo: Pontos percentuais
patch: 7.41
categoria: estatistica
fontes:
- Termo de uso comum no jogo (definição, sem número no texto)
- app/public/data/glossario.json (id pontos-percentuais)
- dota-tier1/work/CONTRATO_CHAVES.md (convenção efeito_pp)
- app/public/data/herois/alchemist.json (guia.bom_quando)
- dota-tier1/work/CONTRATO_CHAVES.md (campo efeito_pp)
sinonimos:
- pp
- +X pp
- -X pp
links:
- winrate
---
## Básico
A diferença entre duas porcentagens. De 50% para 55% são 5 pontos percentuais (pp).

## Avançado
pp mede quanto um percentual subiu ou desceu em relação a outro, direto na mesma escala de 0 a 100: se o win rate vai de 50% para 55%, a diferença é +5 pp, não +10% (que seria a variação relativa). No Hub aparece tanto em efeitos simples (venceu 48% com o fator, 55% sem, efeito de -7 pp) quanto em comparações contra o esperado pelo Elo (ex.: time vencendo 9,6 pp acima do esperado contra um estilo).

No contexto de sinergia entre dois heróis, o valor compara o win rate real da dupla com o 'esperado' (o que cada herói teria sozinho); é o mesmo conceito do 'efeito_pp' das análises de time, só que comparando com um modelo de expectativa em vez de com e sem um fator.
