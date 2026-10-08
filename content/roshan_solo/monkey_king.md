---
id: roshan-solo-monkey_king
titulo: "Solo de Roshan: Monkey King"
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/work/solo_roshan.md
- C:/Users/felip/Desktop/dota-imortal/work/hero_monkey_king_corrigido.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/monkey_king.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- https://dotacoach.gg/en/heroes/monkey-king/builds/carry
heroi: Monkey King
solos: 0
origem: replay
replay: 8745377746, 8746052384, 8747354565, 8748080084, 8748268838, 8749533801, 8750066183, 8750122085, 8750259236, 8752050349, 8760207510, 8767001429, 8769341364, 8772012963, 8774484901, 8775954888, 8776432038, 8778045350, 8780164509, 8782527726, 8782723524, 8782750796, 8783810675, 8783919534, 8784047386, 8787553356, 8796740852, 8800536923, 8810894235, 8813745846, 8821039753, 8830423116, 8860067580, 8885633666, 8892923329, 8896731473, 8902431810, 8922444358, 8944525313, 8944841068, 8946337070, 9013571077, 9021762797, 9023462170, 9024383111
---
## Básico
No 7.41, o Monkey King não sola Roshan. Nos dados do projeto (replay quadro a quadro, sem Turbo nem Ability Draft):

0 solos confirmados (puro ou com ajuda curta) em 60 participações dele numa morte de Roshan, espalhadas em 45 partidas
(22 de liga pro, 23 do acervo yuma; em participações, 28 pro e 32 yuma) e 30 jogadores diferentes. Ele nem entra na lista de "amostra pequena" (1 a 2 solos)
que o projeto usa pra outros heróis raros nisso (Alchemist, Phantom Assassin, Morphling e mais 12).

Quase sempre ele participa como time (55 de 60):
- Contribuição de dano: mediana 48,9% do total no Roshan (faixa de 29,7% a 81,9%).
- Minuto: mediana 34:30 (faixa 17:09 a 66:30). É jogo já avançado, nunca early.
- Lado: Radiant um pouco mais comum (38 contra 17 de Dire).
- Fosso: quase empatado (28 vezes bot, 27 top).

As outras 5 foram finalização (o Roshan já tinha levado dano de outra fonte antes dele chegar), por exemplo o match
8944525313 às 37:57, com 37,7% do dano vindo do MK.

Um resultado isolado de partida de Turbo (match 9032126213, nível 30, build de Rapier e Satanic) fez 100% do dano
sozinho em 15,8 s, mas o próprio critério do projeto descarta Turbo dessa contagem (o Roshan nasce com mais vida e o
relógio corre diferente), então não conta como solo real.

## Avançado
Por que ele não sola: as duas ferramentas de dano extra e sustain do kit são restritas a herói, por dado oficial do
jogo (`constants_abilities.json`):
- Jingu Mastery só carrega "no quarto golpe no mesmo herói inimigo". Bater no Roshan não acumula stack, então nunca
  libera os 4 ataques bônus nem o roubo de vida de até 80% que ele dá contra herói.
- Wukong's Command é pior ainda: os soldados "só atacam heróis inimigos" (dado oficial da habilidade). Eles
  simplesmente não conseguem bater no Roshan.

Sobra o ataque básico e o Boundless Strike (que dá dano e crit em qualquer alvo, Roshan incluso) pra ele fazer dano
sozinho, e isso não é DPS suficiente contra o HP e a armadura do Roshan sem ajuda. É por isso que ele aparece 55 vezes
como time e nenhuma como solo confirmado nos dados.

O que ele faz no lugar: mata Roshan com o time, quase sempre depois dos 20 min, perto de uma torre pra aproveitar o
embalo (o guia do herói trata Roshan e Tormentor como "objetivos de time", nunca solo). O Desolator ajuda a furar a
armadura de 38,4 do Roshan aos 20 min, que corta quase 70% do dano físico; a nota do próprio guia é clara: "o
Desolator tira 6 e ajuda, mas não use o MK sozinho nisso". Esse shred não se estende aos soldados do Wukong's Command
ou do Aghanim's Scepter contra o Roshan, porque eles não o alcançam (só atacam herói, mesma restrição de cima);
contra herói inimigo durante a mesma luta, o shred do Desolator nos ataques dos soldados vale normalmente (build de
carry da Dota Coach).

Combo prático de time (não de solo): Power Treads em Força pra aguentar o troca-troca, Desolator pronto pelo shred,
BKB se o lado inimigo também for pro Roshan, e o Boundless Strike gasto em cima do Roshan só quando o grupo já está
dentro do fosso. Guardar o Wukong's Command pra luta com herói, não pro Roshan.

Risco: a amostra zero de solo do MK nos dados do projeto também significa zero linha sobre roubo de Aegis ou morte
dele especificamente num Roshan; vale o cuidado geral do herói (não andar sozinho depois dos 20 min, Observer em
terreno alto revela o Tree Dance).
