---
id: lane-impossivel
titulo: lane impossível
patch: 7.41
categoria: mapa
fontes:
- dota-imortal/src/minuto/montar_cadeia.py (estado.lane)
sinonimos:
- lane impossível
- lane perdida de vez
---
## Básico
Sua lane está perdida a ponto de nem valer ficar: a rota manda ir pra jungle ou pro triângulo.

## Avançado
Quando o jogador não consegue mais disputar a wave (vários inimigos em cima, ou nível muito atrás). O estado.lane tem 5 valores possíveis ('ganhando', 'equilibrada', 'perdendo', 'impossível', 'sem lane'); as rotas desse cenário levam pra jungle própria, riacho, triângulo ou camps perto da torre.
