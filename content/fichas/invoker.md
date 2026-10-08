---
id: ficha-invoker
titulo: "Invoker"
heroi: Invoker
patch: 7.41
posicoes: [2]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_patch.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/1win/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/betboom/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/liquid/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/navi/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/parivision/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/team-spirit/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/xtreme/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/yandex/hub.json
- https://api.opendota.com/api/heroes/74/itemPopularity
- https://dota2protracker.com/hero/Invoker
---

## Resumo
Invoker é um mago de combo: ele monta o feitiço na hora combinando Quas, Wex e Exort e solta controle (Tornado, EMP, Deafening Blast) e dano em área (Sun Strike, Chaos Meteor) em qualquer ponto do mapa. Nos oito times tier 1 analisados (1win, BetBoom, Liquid, NAVI, PariVision, Team Spirit, Xtreme, Yandex) ele só aparece jogando de pos 2 (mid): PariVision tem ele em 9 dos 27 jogos de pos 2, Yandex em 19 dos 19 picks dele são de pos 2, e na NAVI é descrito como "melhor mid da NAVI" (9 jogos, 78% de vitória). Nenhum time o registra em pos 1, 3, 4 ou 5.

## Pos 2 (mid)
- quando pegar: só de mid. Nos dados dos times tier 1 ele aparece exclusivamente como pick de pos 2, puxando as rotações e os combos de longa distância (`equipes/yandex/hub.json`: "Invoker | 19 | 79% | 5 | pos 2 (19)"; `equipes/navi/hub.json`: "2 Niku | 20 | Invoker 9 (78%)... melhor mid da NAVI").
- itens iniciais: mantle, branches, circlet, faerie_fire, ward_observer

### Build
#### Null Talisman (null_talisman)
- minuto: 2:00
- porque: mana extra e regen logo de saída para spamar Wex e EMP sem secar a mana.
- detalhe: +5 de Inteligência, +3% de mana máxima e regen de mana. É o item mais comprado por Invoker na fase inicial (OpenDota, maior contagem entre os itens de "early game" do herói), e no build de mid mais jogado do D2PT (13 mil jogos, últimos 14 dias) é o 1º item do combo, saindo por volta de 2:00.
- fonte: https://api.opendota.com/api/heroes/74/itemPopularity; dota2protracker.com/hero/Invoker (build pos2)

#### Magic Wand (magic_wand)
- minuto: 4:00
- porque: carga de HP e mana de graça para sobreviver trocas no early sem gastar ouro em poção.
- detalhe: Monta do Magic Stick (que já monta de 2 Iron Branch) mais 1 Iron Branch adicional. No build de mid mais jogado do D2PT sai por volta de 4:00.
- fonte: https://api.opendota.com/api/heroes/74/itemPopularity; dota2protracker.com/hero/Invoker (build pos2)

#### Boots of Speed (boots)
- porque: mobilidade para puxar runa e fugir de gank no mid antes de fechar a bota final.
- detalhe: Base de qualquer bota do herói; depois vira Boots of Travel no meio de jogo. É o item de bota mais comum no early game de Invoker no recorte do OpenDota.
- fonte: https://api.opendota.com/api/heroes/74/itemPopularity

#### Kaya (kaya)
- minuto: 9:00
- porque: metade do caminho para o Meteor Hammer e já entrega 10% de amplificação de dano mágico.
- detalhe: +16 de Inteligência e 10% de spell amp isolado, o que já deixa EMP e Sun Strike mais fortes antes do item final montar. No build de mid mais jogado do D2PT sai por volta de 9:00.
- combo: Kaya sozinho já aumenta o dano de EMP e Sun Strike; o combo completo (stun + burn) só fecha com o Meteor Hammer.
- fonte: https://api.opendota.com/api/heroes/74/itemPopularity; dota2protracker.com/hero/Invoker (build pos2)

#### Meteor Hammer (meteor_hammer)
- minuto: 11:00
- porque: stun em área de 0,75s com queima contínua: trava o grupo e abre o combo de Tornado-EMP.
- detalhe: +24 de Inteligência, 10% de spell amp e 35% de amplificação de regen de mana, além do impacto que atordoa por 0,75s e queima por 6s (50 de dano por segundo em unidades e em estruturas, o que também ajuda a empurrar torre sozinho). No build de mid mais jogado do D2PT sai por volta de 11:00.
- combo: Meteor Hammer (stun 0,75s) seguido de Tornado (levanta no ar pelo tempo de Quas) e EMP no mesmo ponto: o alvo fica preso e sem mana antes de conseguir reagir.
- fonte: https://api.opendota.com/api/heroes/74/itemPopularity; dota2protracker.com/hero/Invoker (build pos2); C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (stun_duration 0.75, burn_dps_units 50); C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json (invoker_tornado, invoker_emp)

#### Boots of Travel (travel_boots)
- porque: troca de lane sem perder tempo de farm e reforça o papel de Invoker como ganker de mapa inteiro.
- detalhe: É o item mais comprado por Invoker durante o mid game no recorte do OpenDota (90 ocorrências, o maior de todos os itens dessa fase), bem acima de Power Treads. Combina com o alcance global do Sun Strike: ele pode ficar puxando lane e ainda participar de troca em qualquer ponto do mapa.
- fonte: https://api.opendota.com/api/heroes/74/itemPopularity

#### Black King Bar (black_king_bar)
- porque: spell immunity de 7 a 9s para ficar parado e fechar o combo sem ser interrompido primeiro.
- detalhe: +10 de Força, +24 de dano e 60% de redução de dano mágico recebido durante a imunidade. Como cada feitiço do Invoker tem um instante de cast, o BKB garante que o primeiro disable do inimigo não quebre o combo antes do Meteor Hammer ou do Tornado saírem. Entre os itens de BKB do mid game do herói no OpenDota (componentes Mithril Hammer e Ogre Axe), é o 2º e o 3º mais comprados dessa fase.
- contra: a maioria dos disables de feitiço de herói comuns (stun, hex, silence), que ficam sem efeito enquanto a imunidade estiver ativa; não protege de dano puro nem de dano refletido, que continuam passando.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (spell_reduce 60, duration 9/8/7, notes, "immunity to reflected and pure damage... any negative effect from enemy spells has no effect"); https://api.opendota.com/api/heroes/74/itemPopularity

#### Aghanim's Shard (aghanims_shard)
- porque: entra como mais uma opção de feitiço aprimorado dentro do próprio Invoke, sem gastar o slot do Scepter.
- detalhe: A descrição oficial do Invoke diz que o herói "pode escolher entre múltiplas opções de Aghanim's Scepter e Shard"; o item precisa ser ativado antes de poder ser usado e a escolha não pode ser trocada depois. É um dos itens de mid game mais comprados por Invoker no OpenDota (42 ocorrências, empatado com Black King Bar).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json (invoker_invoke); https://api.opendota.com/api/heroes/74/itemPopularity

#### Octarine Core (octarine_core)
- porque: 25% de redução de recarga fecha o ciclo Meteor Hammer -> Tornado -> EMP -> Sun Strike mais rápido entre uma luta e outra.
- detalhe: +450 de vida, +450 de mana e 25% de cooldown reduction. É o item mais comprado por Invoker no late game do recorte do OpenDota (42 ocorrências, o maior entre todos os itens dessa fase).
- fonte: https://api.opendota.com/api/heroes/74/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (bonus_cooldown 25%)

### Situacionais
#### Scythe of Vyse (sheepstick)
- porque: transforma o alvo em ovelha por 2,8s, sem casting e com a velocidade travada em 140.
- detalhe: +30 de Inteligência e 8,5 de regen de mana, além do hex. Está entre os itens mais comprados no late game do herói no recorte do OpenDota (35 ocorrências, só atrás do Octarine Core).
- contra: heróis de fuga ou mobilidade (blink, dash, invisibilidade) que escapariam do Tornado-EMP antes do combo terminar; o hex trava movimento e cast ao mesmo tempo.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (sheep_duration 2.8, sheep_movement_speed 140); https://api.opendota.com/api/heroes/74/itemPopularity

#### Shiva's Guard (shivas_guard)
- porque: aura de -45% de velocidade de ataque em área mais um estouro que reduz 40% do movimento, parando quem depende de autoataque.
- detalhe: +17 de armadura e 260 de dano em área no estouro (Arctic Blast), que persegue o alvo e se estende até 825 de raio. Está no mesmo nível do Sheepstick entre os itens mais comprados no late game do herói (35 ocorrências cada, só atrás do Octarine Core).
- contra: carries ou heróis de dano físico contínuo (autoataque) e builds de ilusão, porque a aura de velocidade de ataque e o estouro afetam toda a área, ilusões incluídas.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (aura_attack_speed -45, blast_movement_speed -40, blast_damage 260, notes); https://api.opendota.com/api/heroes/74/itemPopularity

#### Refresher Orb (refresher)
- porque: repete o combo inteiro de nuke (Meteor Hammer, Tornado, EMP, Sun Strike) na mesma luta.
- detalhe: Recarga própria de 180s; só compensa em luta longa, contra Roshan ou torre, onde dois ciclos de dano em área decidem o resultado.
- combo: Meteor Hammer -> Tornado -> EMP -> Sun Strike, Refresher, e repete os quatro na mesma luta.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (cooldown_duration 180); https://api.opendota.com/api/heroes/74/itemPopularity

#### Aghanim's Scepter (ultimate_scepter)
- porque: libera outra opção de feitiço aprimorado pelo Invoke, igual ao Shard mas num slot próprio.
- detalhe: Mesma regra oficial do Invoke vale aqui: a escolha precisa ser ativada antes do uso e não pode ser trocada depois de feita. Aparece no late game do herói no recorte do OpenDota (13 ocorrências).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json (invoker_invoke); https://api.opendota.com/api/heroes/74/itemPopularity

#### Blink Dagger (blink)
- porque: fecha 1200 de distância para abrir Meteor Hammer ou Tornado-EMP de perto, sem andar até o alvo.
- detalhe: Alcance de 1200, com cooldown de dano de 3s caso o Invoker tome dano durante o blink. É o item de iniciação mais comprado no late game do herói no recorte do OpenDota (15 ocorrências).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (blink_range 1200); https://api.opendota.com/api/heroes/74/itemPopularity

#### Linken's Sphere (sphere)
- porque: bloqueia o primeiro feitiço de alvo único antes que ele te desative e corte o combo.
- detalhe: Absorve 300 de dano/efeito de uma habilidade direcionada, com recarga de 14s. A nota oficial do item diz que habilidades de itens neutros não acionam o Spellblock, então ele não protege desse tipo de ataque.
- contra: disable de alvo único vindo de habilidade de herói (não de item neutro, que ignora o Spellblock).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (damage_absorb 300, block_cooldown 14, notes)

#### Gleipnir (gungir)
- porque: raiz em área que trava o grupo inimigo antes do Sun Strike cair.
- detalhe: Raiz de 2s em área (275 de raio, 350 com a amplificação de área de efeito do item).
- combo: Gleipnir (raiz de 2s) seguido de Sun Strike (atraso de 1,7s para o dano cair): o grupo preso não sai da área antes do impacto.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (duration 2.0); C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json (invoker_sun_strike, delay 1.7)

#### Aeon Disk (aeon_disk)
- porque: amortece um burst que te deixaria abaixo de 70% de vida, dando um brevê para você soltar o combo de volta.
- detalhe: Ativa sozinho quando a vida cai abaixo de 70%, dando 75% de resistência a status e um escudo por 2,5s; recarga entre 105 e 165s conforme o nível.
- contra: combos de burst de herói único que dependem de acertar o primeiro disable para abrir a sequência inteira.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (health_threshold_pct 70, status_resistance 75, buff_duration 2.5, cooldown_duration)

## Roshan
Sem dado de Roshan solo.
