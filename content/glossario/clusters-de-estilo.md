---
id: clusters-de-estilo
titulo: Estilos de jogo do Atlas (clusters)
patch: 7.41
categoria: estrategia
fontes:
- dota-tier1/work/sintese/eixos.md (método, seções Clusters)
- dota-tier1/work/sintese/eixos.json
- dota-tier1/work/CONTRATO_CHAVES.md (estilos_contra, os 3 clusters oficiais)
- app/public/data/times_atlas/team-spirit.chaves.json (estilos_contra, exemplo Casa e farm n=29)
sinonimos:
- cluster
- estilo do time
---
## Básico
Os 3 estilos de jogo em que o Atlas agrupou os 12 times tier 1: Projeção, Contato e Casa e farm.

## Avançado
O Atlas roda uma análise de componentes principais (PCA) sobre 38 métricas de estilo (farm, mapa, visão, lutas) das 12 equipes e reduz isso a 2 eixos: E1 vai de 'Projeção territorial' a 'Jogo em casa', E2 vai de 'Farm de camps' a 'Contato e kill'. Agrupando as equipes nesses 2 eixos (k=3, método Ward) saem 3 clusters: C1 Projeção (Yandex, PARIVISION: jogam na metade do mapa inimiga, invadem jungle cedo), C2 Contato (Spirit, Liquid, Nigma, Aurora, 1win: mais lutas por 10 min, kills cedo), C3 Casa e farm (Xtreme, NAVI, LGD, BetBoom, Falcons: ficam na própria base, fatia de ouro do pos2 maior). Quando o cartão de um time mostra 'Casa e farm: 48% com 55% esperado (n=29)', significa que contra times do cluster C3 aquele time venceu 48% das vezes, enquanto o Elo previa 55%, um desempenho pior que o esperado contra esse estilo (exemplo real, do próprio Team Spirit).
