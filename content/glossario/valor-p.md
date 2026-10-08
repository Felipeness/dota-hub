---
id: valor-p
titulo: p = 0,0XX
patch: 7.41
categoria: estatistica
fontes:
- dota-tier1/work/sintese/lanes_perdidas.md (método Recuperação, linha 11)
- dota-tier1/work/sintese/scripts/lanes_relatorio.py (ALFA = 0.05, linha 23 e 244)
sinonimos:
- valor-p
- p-valor
- Mann-Whitney
- p =
---
## Básico
A chance de ver essa diferença só por acaso, sem diferença real. Quanto menor o p, mais ela parece real.

## Avançado
Nas seções de 'recuperação' das lanes perdidas, o Hub compara as vitórias contra as derrotas de um time (ex.: tempo na metade inimiga) usando o teste de Mann-Whitney, que não exige que os números sigam uma distribuição normal. 'p = 0,038' quer dizer 3,8% de chance de a diferença observada ser só ruído; o critério usado é p < 0,05 para marcar CORRELAÇÃO, mas sem correção para os vários sinais testados no mesmo recorte (23 por time), então valores perto de 0,05 devem ser lidos como pista, não prova.
