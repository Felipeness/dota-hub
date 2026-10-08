---
id: selo-benchmark
titulo: selo
patch: 7.41
categoria: estatistica
fontes:
- app/src/live/ContaPage.tsx (SelosDeBenchmark)
- app/src/live/contas.ts (metricaComparada)
sinonimos:
- selo
- GPM acima
- LH abaixo
---
## Básico
Etiqueta ao lado de GPM/XPM/LH: mostra 'acima' ou 'abaixo' da mediana do herói. Não é um intervalo estatístico de confiança, é comparação simples contra um único valor de referência.

## Avançado
Em cada partida recente, o Hub compara GPM, XPM e LH/min do jogador com a mediana desse herói (via /benchmarks) e mostra 'acima' ou 'abaixo'. Sem benchmark disponível pro herói, o selo simplesmente não aparece.
