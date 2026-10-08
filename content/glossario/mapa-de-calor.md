---
id: mapa-de-calor
titulo: Calor
patch: 7.41
categoria: mapa
fontes:
- app/src/times/camadas.ts (LIMIAR_CALOR = 0.08, desenhosDoCalor, normalização pelo máximo da grade)
- app/src/times/leitura.ts (LEITORES.calor, que lê zonasDaJanela, não a grade de calor)
- dota-tier1/tools/mapa_equipes.py (comentário 'calor.valores[j][i] ... normalizado pelo máximo'; groupby de posições vivas por célula)
- dota-tier1/work/CONTRATO_HUB.md (mapa.calor: grade, valores; mapa.zonas: tempo_pct)
sinonimos:
- calor
- mapa de calor
---
## Básico
Mapa de quanto o time fica vivo em cada célula de uma grade sobre o mapa, por intensidade relativa à célula mais quente; células fracas somem.

## Avançado
A camada 'Calor' divide o mapa numa grade de 32x32 e colore cada célula pela contagem de segundos em que os heróis do time estavam vivos ali, dividida pelo valor da célula mais quente da mesma janela (a célula mais quente fica no máximo e as outras ficam proporcionais a ela); por isso não é literalmente uma fração do tempo total, é uma intensidade relativa ao pico. Células abaixo de 8% desse pico não aparecem, pra não poluir o mapa com ruído. É diferente da camada 'Zonas', que lista áreas nomeadas (lane, jungle, base) com o tempo_pct real de cada uma; o calor mostra a distribuição crua, sem nomes de lugar. A frase que acompanha a camada, 'Mais quente em X (62% do tempo)', na verdade não lê a grade de calor: ela reaproveita a zona nomeada com mais tempo_pct na mesma janela, o mesmo dado que a camada 'Zonas' usa, porque a grade de calor em si não tem rótulo de lugar.
