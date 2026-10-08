---
id: vs-liga-pp
titulo: vs_liga_pp
patch: 7.41
categoria: estatistica
fontes:
- dota-tier1/work/CONTRATO_CHAVES.md (linhas 32-33)
- dota-tier1/work/sintese/chaves.md (seção Resumo, linha 12)
- app/src/times/ComoVencer.tsx (comparacaoComLiga)
- app/public/data/times_atlas/lgd.chaves.json (fatores_vitoria, BKB do carry antes dos 24 min)
sinonimos:
- vs_liga_pp
- mais forte para eles que para a liga
- mais fraco para eles que para a liga
---
## Básico
Compara o efeito de um fator pra este time com o mesmo efeito nas 12 juntas: pesa mais ou menos pra eles.

## Avançado
efeito_liga_pp é o efeito_pp do mesmo fator calculado com as 12 equipes juntas (o 'padrão geral'); vs_liga_pp é a diferença: efeito_pp do time menos efeito_liga_pp. Em fatores de vitória, positivo quer dizer que o fator ajuda mais esse time do que ajuda a liga em média; em fatores de derrota, é o contrário (negativo pesa mais para eles). O resumo só cita fatores com essa diferença grande o bastante (|vs_liga| ≥ 5 pp): exemplo real é a LGD com 'BKB do carry antes dos 24 min', um fator de vitória com vs_liga_pp de +5,1 (efeito de +14,6 pp para a LGD), ou seja, mais forte para eles que para a liga.
