---
id: eixo-de-estilo
titulo: eixo
patch: 7.41
categoria: estrategia
fontes:
- dota-tier1/work/sintese/eixos.md (método, seções E1 e E2)
- app/src/times/schemas.ts (eixoSchema: polo_negativo, polo_positivo)
sinonimos:
- eixo
- E1
- E2
- polo negativo
- polo positivo
- PROJEÇÃO TERRITORIAL
- JOGO EM CASA
- FARM DE CAMPS
- CONTATO E KILL
---
## Básico
As 2 dimensões de estilo achadas comparando 38 métricas das 12 equipes; cada eixo tem um polo de cada lado.

## Avançado
O Hub roda uma Análise de Componentes Principais (PCA) sobre 38 métricas de jogo (de 48 candidatas, filtradas por relevância estatística) das 12 equipes, e fica com 2 eixos que passam no teste de significância (análise paralela): E1 explica 24,2% da variação entre equipes e vai de 'Projeção territorial' (polo negativo: joga na metade do mapa inimiga) a 'Jogo em casa' (polo positivo: fica mais na própria base); E2 explica 18,0% e vai de 'Farm de camps' (polo negativo) a 'Contato e kill' (polo positivo: mais lutas e kills cedo). Cada nome de polo é interpretação das cargas de cada métrica no eixo, não um rótulo automático; no Mapa de estilos, a seta de cada eixo aponta do polo negativo para o positivo.
