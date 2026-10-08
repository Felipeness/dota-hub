---
id: ficha-skywrath_mage
titulo: "Skywrath Mage"
heroi: Skywrath Mage
patch: 7.41
posicoes: [4, 5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_patch.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/jogadores_partida.csv
- C:/Users/felip/Desktop/dota-tier1/data/partidas/8812041728/eventos.jsonl
- C:/Users/felip/Desktop/dota-tier1/data/partidas/8813051930/eventos.jsonl
- C:/Users/felip/Desktop/dota-tier1/data/partidas/8813707883/eventos.jsonl
- C:/Users/felip/Desktop/dota-tier1/data/partidas/8829882210/eventos.jsonl
- C:/Users/felip/Desktop/dota-tier1/data/partidas/8830280454/eventos.jsonl
- C:/Users/felip/Desktop/dota-tier1/data/partidas/8888489297/eventos.jsonl
- C:/Users/felip/Desktop/dota-tier1/data/partidas/8931183918/eventos.jsonl
- C:/Users/felip/Desktop/dota-tier1/data/partidas/9022165217/eventos.jsonl
- C:/Users/felip/Desktop/dota-tier1/data/partidas/9023104480/eventos.jsonl
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/101/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=101
- https://dota2protracker.com/hero/Skywrath+Mage
---
## Resumo

Skywrath Mage é suporte de dano mágico puro (papéis Support/Nuker/Disabler no OpenDota): pokea de longe com Arcane Bolt e Concussive Shot, trava o alvo com o silence do Ancient Seal e fecha o combo com o nuke canalizado Mystic Flare. No patch 7.41 ele é jogado quase só de suporte: nas 9 partidas de nível pro encontradas localmente (Atlas tier1), 7 foram pos 4 (roaming) e 2 pos 5 (suporte duro), nenhuma mid ou carry. No 7.41e o dota2protracker registra 138 partidas e 57% de vitórias para o herói. Ponto fraco verificável nas constantes do jogo: nenhuma das 4 habilidades dele atravessa Black King Bar (`bkbpierce: No` em Arcane Bolt, Concussive Shot, Ancient Seal e no próprio Mystic Flare), ou seja, um BKB ativo no alvo anula o combo inteiro, não só o silence.

## Pos 4 (suporte de roaming)

- quando pegar: é o papel padrão dele no 7.41, 7 das 9 partidas de pro analisadas localmente foram pos 4 (fonte: `jogadores_partida.csv`). Ele entra pra ganhar bote cedo no mapa com o alcance de 1600 do Concussive Shot (atinge o herói mais próximo, sem precisar mirar) e o silence de 700 a 850 de distância do Ancient Seal, sem depender de last hit.
- itens iniciais: tango, blood_grenade, ward_observer, ward_sentry, branches

### Build

#### Boots of Speed (boots)
- minuto: 10
- porque: dá a mobilidade pra reposicionar no mapa e conectar Concussive Shot/Ancient Seal antes do inimigo reagir.
- detalhe: +45 de velocidade de movimento (items.json). Mediana real de 10 min em 7 partidas de pro pos 4 (fonte: replays locais); ele atrasa a bota porque gasta o early game comprando wards e consumíveis em vez de voltar pra loja.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/*/eventos.jsonl (7 jogos pos 4); C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Null Talisman (null_talisman)
- minuto: 8
- porque: resolve a fome de mana do combo (Ancient Seal custa até 110, Mystic Flare até 800) sem gastar o slot numa bota cara.
- detalhe: +5 intelecto, +3% de mana máxima, +1 de regen de mana (items.json). Comprado em 4 das 7 partidas pos 4 analisadas; nas outras 3 ele pulou direto pra wards e pro item de amplificação.
- contra: lane de troca de dano cedo, onde morrer por falta de stats é o maior risco antes dos 10 min.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/*/eventos.jsonl (4/7 jogos pos 4); items.json

#### Kaya (kaya)
- minuto: 19
- porque: amplifica em 10% todo o dano mágico do kit, incluindo os até 1600 do Mystic Flare no nível 3.
- detalhe: +16 intelecto, +10% de amplificação de dano mágico, +30% de regeneração de mana (items.json), montado a partir de Staff of Wizardry (o outro componente é Robe of the Magi). Das 6 partidas pos 4 que passaram por Staff of Wizardry, a Kaya ficou como item final em 2 (8829882210, 8830280454); numa terceira (8888489297) ela foi comprada mas upgradada pra Meteor Hammer menos de 3 min depois, então não contou como build final ali (ver Meteor Hammer abaixo).
- combo: 10% de amp em cima do Mystic Flare (800/1200/1600 de dano) é dano real a mais sem ocupar outro slot, porque o amp entra em qualquer habilidade do combo.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/8829882210, 8830280454 (eventos.jsonl); items.json; constants_abilities.json

#### Blink Dagger (blink)
- minuto: 27
- porque: fecha a distância pro cast de 1200 do Mystic Flare sem andar exposto no meio da luta.
- detalhe: alcance de blink de 1200 (items.json) bate exatamente com o alcance de lançamento de 1200 do Mystic Flare (constants_abilities.json). Comprado em 4 das 7 partidas pos 4, entre os 21 e os 34 minutos dependendo do ritmo do jogo.
- combo: blinka pro alcance máximo do Mystic Flare (1200), canaliza os 2s do nuke sem precisar caminhar até o corpo a corpo.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/*/eventos.jsonl (4/7 jogos pos 4); items.json; constants_abilities.json

### Situacionais

#### Eul's Scepter of Divinity (cyclone)
- minuto: 30
- porque: prende o alvo no ar por 2,5s, tempo suficiente pros 2s cheios de canal do Mystic Flare.
- detalhe: ciclone de 2,5s (items.json) contra os 2s de duração do Mystic Flare (constants_abilities.json): o alvo não consegue agir enquanto o nuke bate. Visto em 1 das 7 partidas pos 4.
- contra: alvos com blink, Force Staff ou outro dash de fuga, porque o ciclone trava qualquer ação por 2,5s.
- combo: Eul's (2,5s travado) + Mystic Flare (2s de canal) = combo garantido, mesmo em alvo com escape rápido.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/8812041728/eventos.jsonl; items.json; constants_abilities.json

#### Ghost Scepter (ghost)
- minuto: 27
- porque: vira etéreo, ataques físicos não acertam, sobrevive no corpo a corpo contra right-click puro.
- detalhe: +5 de todos os atributos e 4s de etéreo (items.json). Visto em 1 das 7 partidas pos 4, nesse jogo seguiu direto pra Aghanim's Shard.
- contra: carries ou iniciadores de dano físico puro que tentam te matar perto da wave, sem nuke mágico no combo.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/8888489297/eventos.jsonl; items.json

#### Glimmer Cape (glimmer_cape)
- minuto: 22
- porque: dá 20 de armadura mágica e 5s de invisibilidade pra entrar ou sair da luta sem ser alvo fácil.
- detalhe: +20 de armadura mágica, 5s de invisibilidade com barreira de 375 de bloqueio (items.json). Visto em 2 das 7 partidas pos 4, entre 20 e 24 min.
- contra: burst de dano mágico em você ou no aliado que recebe o cast, e contra visão inimiga na hora de reposicionar.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/8812041728, 9023104480 (eventos.jsonl); items.json

#### Force Staff (force_staff)
- minuto: 24
- porque: empurra 600 de distância e dá 175 de vida, serve de escape ou pra reposicionar um aliado puxado.
- detalhe: push de 600 unidades em 0,5s, +175 de vida (items.json). Visto em 2 das 7 partidas pos 4, entre 18 e 30 min.
- contra: ganchos e iniciações corpo a corpo em cima de você ou de um aliado que precisa saltar fora da linha de frente.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/8813707883, 9023104480 (eventos.jsonl); items.json

#### Scythe of Vyse (sheepstick)
- minuto: 28
- porque: hex de 2,8s desarma e silencia o alvo mais perigoso e ainda cobre o canal de 2s do Mystic Flare.
- detalhe: hex de 2,8s de duração, +30 intelecto (items.json). O recipe (Mystic Staff + Tiara of Selemene) foi comprado em 3 das 7 partidas pos 4: duas por volta dos 27-28 min (8813707883, 8829882210) e uma bem mais tarde, aos 45,8 min, num jogo longo (8931183918). O item só saiu pronto numa delas (8829882210), aos 33-34 min; nas outras duas o Skywrath comprou o recipe mas não fechou o Scythe of Vyse na partida.
- contra: o alvo mais prioritário ou mais móvel do time inimigo, pra garantir o Mystic Flare ou travar antes de ele agir.
- combo: hex (2,8s) + Mystic Flare (2s de canal) trava o alvo parado e sem ação durante o nuke inteiro.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/8813707883, 8829882210, 8931183918 (eventos.jsonl); items.json; constants_abilities.json

#### Rod of Atos (rod_of_atos)
- porque: raiz de 2s que quase cobre o canal do Mystic Flare sem precisar de ciclone nem de blink pra conectar.
- detalhe: +12 intelecto, +275 de vida, raiz de 2,0s no ativo (items.json). Não apareceu em nenhuma das 9 partidas de pro analisadas localmente, mas é o 4º item mais comprado em mid game no agregado do OpenDota (itemPopularity) pra esse herói, logo atrás de Staff of Wizardry, Arcane Boots e Vitality Booster.
- contra: heróis sem blink ou dash de fuga, que dependem só de velocidade de movimento pra sair do alcance de 1200 do Mystic Flare.
- fonte: https://api.opendota.com/api/heroes/101/itemPopularity; items.json; constants_abilities.json

#### Meteor Hammer (meteor_hammer)
- minuto: 23
- porque: soma dano em área com slow e um stun de impacto, ajuda a abrir visão e a empurrar torre.
- detalhe: dano de impacto de 130 em heróis, burn de 50 de dano por segundo por 6s, slow de 20% e stun de impacto de 0,75s (items.json). Visto em 1 das 7 partidas pos 4.
- contra: linhas de creep e estrutura que precisam de dano de área pra abrir caminho sem gastar mana do combo principal.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/8888489297/eventos.jsonl; items.json

#### Aether Lens (aether_lens)
- minuto: 45
- porque: os +225 de alcance deixam Ancient Seal e Mystic Flare fora da resposta de corpo a corpo.
- detalhe: +300 de mana, +2,5 de regen de mana, +225 de alcance de cast (items.json). Visto em 1 das 7 partidas pos 4, numa partida longa.
- contra: comps que fecham a distância rápido (iniciadores corpo a corpo), porque estende o alcance de todo o combo.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/8931183918/eventos.jsonl; items.json

## Pos 5 (suporte duro)

- quando pegar: papel secundário dele no 7.41, 2 das 9 partidas de pro analisadas localmente foram pos 5 (fonte: `jogadores_partida.csv`). O core de item é o mesmo da pos 4 (bota + Blink pro combo), só que com menos ouro pra farmar porque fica mais tempo cuidando de ward/deward.
- itens iniciais: tango, blood_grenade, branches, ward_observer, ward_sentry

### Build

#### Boots of Speed (boots)
- minuto: 8
- porque: dá a mobilidade pra reposicionar no mapa e conectar Concussive Shot/Ancient Seal antes do inimigo reagir.
- detalhe: +45 de velocidade de movimento (items.json). Comprado nas 2 partidas pos 5 analisadas, aos 5 e aos 10 min.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/8813051930, 9022165217 (eventos.jsonl); items.json

#### Blink Dagger (blink)
- minuto: 23
- porque: fecha a distância pro cast de 1200 do Mystic Flare sem andar exposto no meio da luta.
- detalhe: alcance de blink de 1200 (items.json) bate com o alcance de lançamento de 1200 do Mystic Flare (constants_abilities.json). Comprado nas 2 partidas pos 5, mas com intervalo grande: aos 14 min numa (prioridade de pick cedo) e aos 31 min na outra.
- combo: blinka pro alcance máximo do Mystic Flare (1200), canaliza os 2s do nuke sem precisar caminhar até o corpo a corpo.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/8813051930, 9022165217 (eventos.jsonl); items.json; constants_abilities.json

### Situacionais

#### Null Talisman (null_talisman)
- minuto: 8
- porque: resolve a fome de mana do combo sem gastar o slot numa bota cara.
- detalhe: +5 intelecto, +3% de mana máxima, +1 de regen de mana (items.json). Visto em 1 das 2 partidas pos 5.
- contra: lane onde perder stats cedo significa morrer pro gank, mesmo com menos pressão de farm que o pos 4.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/9022165217/eventos.jsonl; items.json

#### Ghost Scepter (ghost)
- minuto: 20
- porque: vira etéreo, ataques físicos não acertam, sobrevive no corpo a corpo contra right-click puro.
- detalhe: +5 de todos os atributos e 4s de etéreo (items.json). Visto em 1 das 2 partidas pos 5.
- contra: carries ou iniciadores de dano físico puro que tentam te matar perto da wave, sem nuke mágico no combo.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/9022165217/eventos.jsonl; items.json

#### Eul's Scepter of Divinity (cyclone)
- porque: prende o alvo no ar por 2,5s, tempo suficiente pros 2s cheios de canal do Mystic Flare.
- detalhe: ciclone de 2,5s (items.json) contra os 2s de duração do Mystic Flare (constants_abilities.json). Na única tentativa pos 5 nos dados locais (8813051930), o recipe (`item_recipe_cyclone`) foi comprado aos 25,6 min, mas o item nunca saiu: o jogador mudou de plano e foi de Aghanim's Scepter em vez de fechar o Eul's. Sem partida pos 5 com o item completo nos dados locais; entra como situacional pela mecânica (mesma lógica da versão pos 4), não por uso confirmado em replay.
- contra: alvos com blink, Force Staff ou outro dash de fuga, porque o ciclone trava qualquer ação por 2,5s.
- combo: Eul's (2,5s travado) + Mystic Flare (2s de canal) = combo garantido, mesmo em alvo com escape rápido.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/8813051930/eventos.jsonl; items.json; constants_abilities.json

#### Mystic Staff (mystic_staff)
- minuto: 42
- porque: componente puro de intelecto que leva pro Scythe of Vyse ou pro Octarine Core sem perder stats pelo caminho.
- detalhe: +25 intelecto (items.json), é um dos dois componentes do Scythe of Vyse (o outro é Tiara of Selemene). Visto em 1 das 2 partidas pos 5, numa partida que já passava de 40 min.
- contra: jogos longos (40+ min) onde o lockdown principal (Scythe of Vyse) ainda não fechou e a prioridade é não perder relevância de dano mágico.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/partidas/8813051930/eventos.jsonl; items.json

## Roshan

Sem dado de Roshan solo.
