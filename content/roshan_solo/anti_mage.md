---
id: roshan-solo-anti_mage
titulo: "Solo de Roshan: Anti-Mage"
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-roshan-solo/work/solo_roshan.md
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- replay 8743016533
- replay 8856921723
- replay 9021556632
- https://dota2.fandom.com/wiki/Mana_Break
- https://www.dotabuff.com/heroes/axe/skills (confirma que o mecanismo de dano do Mana Break depende da mana do alvo)
heroi: Anti-Mage
solos: 0
origem: replay
replay: 8743016533, 8856921723, 9021556632
---
## Básico
Nos dados do projeto (1.245 partidas válidas do 7.41, 2.577 mortes de Roshan lidas), o Anti-Mage tem **0 solos confirmados** (nem solo puro, nem solo com ajuda curta). Ele não entra nem na lista de amostra pequena do projeto (heróis com 1 ou 2 solos confirmados): dos 22 heróis que aparecem nessa lista, o Anti-Mage não é um deles.

Ele aparece 4 vezes no dataset como o herói que fez a maior parte do dano numa morte de Roshan, mas as 4 vezes foram classificadas como **"time"**, nunca como solo, porque aliados ficaram no fosso junto com ele:

| partida | minuto | fração do dano do Anti-Mage | aliados no fosso |
|---|---|---|---|
| 8743016533 | 37:52 | 77,2% | invoker 22s, legion_commander 12s, venomancer 18s |
| 8856921723 | 38:36 | 62,4% | ember_spirit 14s, winter_wyvern 11s, lion 30s, axe 50s |
| 8856921723 | 49:58 | 64,3% | winter_wyvern 18s, lion 35s, axe 41s |
| 9021556632 | 28:48 | 51,8% | sand_king 27s, doom_bringer 28s |

Ele pegou a Aegis (último golpe) em 3 dessas 4 (todas exceto a de 8743016533, em que o Legion Commander finalizou). A partida 9021556632 é do Yatoro, o único caso de jogador pro nessa amostra.

**Por que o Anti-Mage quase não sola**: o Mana Break drena mana por golpe e converte 50% do que queimou em dano físico extra (constante do patch: antimage_mana_break, 50% de dano por mana queimada); sem mana no alvo, não há o que queimar, então esse bônus não existe. O Roshan não tem mana (não lança feitiços), então não há mana pra o Mana Break nem pro Mana Void, que também escala pela mana que falta ao alvo, converterem em dano. Sobra só o dano de ataque base do herói. Sem lifesteal nativo (o Satanic, única fonte de lifesteal do kit, é raro, 5,9% das compras no D2PT 7000+, e foi enfraquecido nas letras 7.41e/f), o Anti-Mage não tem como repor vida sozinho numa luta longa contra o Roshan, do jeito que Huskar (Life Break cura) ou Troll Warlord (lifesteal + evasão) fazem.

## Avançado
O que o Anti-Mage faz no lugar do solo: entra no Roshan com o time, geralmente ao lado de um herói com controle ou tankiness (Legion Commander, Axe, Sand King, Doom Bringer nos 4 casos acima), e contribui dano de ataque puro em vez de qualquer combo de habilidade.

Exemplo, 8856921723 (minuto 38:36): Anti-Mage fez 62,4% do dano (6.796 de 10.888) ao lado de Ember Spirit, Axe, Abaddon, Rubick, Lion, Skywrath Mage e Winter Wyvern; Axe e Lion ficaram mais tempo no fosso (50s e 30s), prováveis responsáveis por segurar o Roshan enquanto o Anti-Mage batia. Na mesma partida, aos 49:58, o time voltou pro segundo Roshan e o padrão se repetiu (64,3% do dano do Anti-Mage, Axe e Lion de novo no fosso).

Exemplo, 9021556632, Yatoro (minuto 28:48): Anti-Mage fez 51,8% do dano (5.161 de 9.954) com Sand King e Doom Bringer dividindo o resto quase igualmente (27s e 28s no fosso cada); não há dado de itens ou nível nesse registro porque o dataset só guarda inventário completo pra tentativas classificadas como solo.

Combo típico: como não há solo confirmado, não dá pra isolar um "itens + nível + minuto" próprio do herói. O que os 4 casos têm em comum é o minuto tardio (28 a 50 min, todos depois do Manta/4º item do guia) e a presença de pelo menos 2 aliados no fosso; trate o Roshan como evento de time pra esse herói, não como tentativa solo, e use a build padrão do guia (Battle Fury até os 14 min, Manta aos 20) só pra chegar com dano de ataque alto quando o time decidir ir.

**Por quê, do lado da internet**: o próprio mecanismo que faz do Anti-Mage um bom farmer e duelista (Mana Break, Mana Void) depende de mana no alvo (Dota 2 Wiki, página do Mana Break), e esse bônus não existe contra o Roshan. Isso explica, por fora dos replays, por que ele não aparece como hero de solo: falta tanto o dano bônus do kit quanto o lifesteal/sustain que outros soladores de Roshan têm.
