---
id: torre-t1
titulo: Torre T1
patch: 7.41
categoria: objetivo
fontes:
- dota-imortal/work/map_features_corrigido.json (posições e regras do mapa 7.41)
- content/glossario/torre-t1.md
- content/objetivos/torre.md
- app/src/times/camadas.ts (nomeDoObjetivo)
sinonimos:
- T1
- T2
- T3
- T4
- torre T2
links:
- torre
- torre-t2
---
## Básico
A primeira torre de cada lane, a mais longe da base. Quando ela cai, a jungle daquele lado fica aberta para o inimigo.

## Avançado
Cada lane tem três torres (T1, T2, T3); além delas, duas T4 defendem diretamente o Ancient sem pertencer a uma lane específica (22 torres no total, 11 por lado). T1 é a primeira a cair, e sua queda abre a jungle daquele lado para o adversário (content/glossario/torre-t1.md; content/objetivos/torre.md). O Hub usa essa contagem no código que nomeia objetivos no mapa (app/src/times/camadas.ts, nomeDoObjetivo) e em telas de rota que mostram a nova rota de farm do carry depois que a T1 cai (docs/design/v1/Main.dc.html). Removida a frase original sobre 'T1' também significar 'Tier 1' em outras telas: não foi encontrada no Hub nenhuma tela que abrevie a classificação de equipe como 'T1' (o texto usado é sempre 'Tier 1' por extenso, ex. app/src/times/TimesPage.tsx), então essa ambiguidade era inventada e foi retirada.
