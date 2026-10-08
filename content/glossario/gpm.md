---
id: gpm
titulo: GPM
patch: 7.41
categoria: estatistica
fontes:
- Termo de uso comum no jogo (definição, sem número no texto)
- app/public/data/glossario.json (id gpm)
- app/public/data/glossario.json (id xpm)
- dota-tier1/work/PLANO.md (linha 56, uso do GPM pra separar posições)
- https://api.opendota.com/api/benchmarks (campo gold_per_min)
- app/public/data/glossario.json (entrada gpm)
sinonimos:
- XPM
- gold per minute
- experience per minute
- ouro por minuto
- XP por minuto
links:
- xpm
- farm
---
## Básico
Gold per minute. Ouro ganho por minuto de jogo. Mede o ritmo de farm.

## Avançado
GPM (gold per minute) é o ouro total do jogador dividido pelos minutos de jogo até aquele ponto; XPM (experience per minute) é o mesmo cálculo para experiência. São usados no Hub como proxy de ritmo (farm rápido ou devagar) nas seções de texto livre de cada time (ex.: fatia de ouro, ritmo de jogo), e também serviram, na etapa de montagem das partidas (fase 1 do Atlas), para separar automaticamente pos 1 de pos 5 e pos 3 de pos 4 quando a lane do OpenDota não deixava claro quem jogava onde.

Média de ouro ganho por minuto na partida inteira, somando creeps, neutros, abates e ouro passivo. O selo 'GPM acima/abaixo' compara com a mediana histórica daquele mesmo herói, vinda do endpoint /benchmarks do OpenDota.
