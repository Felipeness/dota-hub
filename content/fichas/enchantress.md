---
id: ficha-enchantress
titulo: "Enchantress"
heroi: Enchantress
patch: 7.41
posicoes: [5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/aurora/chaves.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/parivision/chaves.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/xtreme/chaves.json
- https://api.opendota.com/api/heroes/58/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=58
- https://api.opendota.com/api/scenarios/itemTimings?item=power_treads&hero_id=58
- https://api.opendota.com/api/scenarios/itemTimings?item=force_staff&hero_id=58
- https://api.opendota.com/api/scenarios/itemTimings?item=hurricane_pike&hero_id=58
- https://api.opendota.com/api/scenarios/itemTimings?item=ultimate_scepter&hero_id=58
- https://api.opendota.com/api/scenarios/itemTimings?item=aghanims_shard&hero_id=58
- https://dota2protracker.com/hero/legacy/Enchantress
- https://dev1.dota2protracker.com/hero/Enchantress
- https://dotacoach.gg/heroes/enchantress
---

## Resumo
Enchantress é suporte duro (Support/Pusher/Durable/Disabler no OpenDota), jogada quase só na pos 5: três times de tier 1 (Aurora, Parivision, Xtreme) só têm registro dela como "suporte de lane, pos 5" nos dados do Atlas. Pick rate pro é baixo (6 picks, 4 bans no acumulado do OpenDota), então ela entra como escolha de nicho, não como staple. Em pub ela tem GPM mediano de só 351 (benchmark OpenDota), confirmando perfil de apoio puro que vive de Enchant pra controlar e de Impetus pra converter ataque em dano.

## Pos 5 (suporte duro)
- quando pegar: time de tier 1 só tem registro dela em pos 5 (fonte: chaves.json de Aurora, Parivision e Xtreme, campo "papel"); sem dado de pos 4 nas fontes disponíveis.
- itens iniciais: branches, tango, faerie_fire, ward_dispenser, blood_grenade, circlet

### Build
#### Power Treads (power_treads)
- minuto: maior concentração de compras no corte dos 20min, mas tem gente fechando já no 7-8min (fonte: OpenDota itemTimings hero_id=58)
- porque: Impetus é attack modifier, então mais ataque = mais procs de dano por distância
- detalhe: dá +25 attack speed e +10 no atributo trocável, em cima do bônus de velocidade de Botas de Poder. Como ela ataca à distância (range 575), cada attack speed extra vira mais chances de Impetus bater antes do inimigo reagir.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; constants_abilities.json (enchantress_impetus, behavior Attack Modifier); itemPopularity (4 compras no early-game, 40 no mid-game)

#### Force Staff (force_staff)
- minuto: pico de compra no corte dos 25-30min (50 e 53 jogos nesses cortes, fonte OpenDota itemTimings)
- porque: empurra aliado ou ela mesma 600 unidades pra fora de alcance de combo
- detalhe: item mais comprado no total considerando mid+late (73 ocorrências no itemPopularity). Não interrompe a ação do alvo, então dá pra usar no meio de um Enchant ou de uma fuga sem cancelar nada. Não funciona em unidade dentro de Chronosphere, Duel ou Black Hole (limite documentado no item).
- combo: usar em cima de um aliado que está sendo perseguido junto com o slow do Enchant em quem persegue
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (notes e attrib de force_staff); itemPopularity

#### Hurricane Pike (hurricane_pike)
- minuto: pico de compra no corte dos 30min (30 de 53 jogos registrados, fonte OpenDota itemTimings)
- porque: upgrade do Force Staff que empurra os dois lados (ela e o inimigo) 425 de distância ao mesmo tempo, em vez de só puxar aliado
- detalhe: segundo item mais comprado dela no total (60 ocorrências no itemPopularity, só atrás do próprio Force Staff). Dá +130 de alcance de ataque pra herói ranged, +15 int/15 str/20 agi. Depois do empurrão ela tem 6s pra descarregar até 5 ataques no alvo sem respeitar restrição de alcance, com +100 de attack speed nesse período, então consegue bater um melee mesmo depois de jogá-lo pra longe. Combina com o range já bônus do Enchant pra ela ficar brigando de longe.
- contra: serve pra abrir distância de quem depende de ficar colado (melee que não tem gap closer)
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (attrib e notes de hurricane_pike); itemPopularity; itemTimings

#### Aghanim's Scepter (ultimate_scepter)
- minuto: pico de compra no corte dos 25min (71 de 163 jogos nesse corte, fonte OpenDota itemTimings)
- porque: dá +10 em todos atributos e +175 de vida/mana, sustentando ela em luta prolongada, além de liberar a habilidade Little Friends
- detalhe: terceiro item mais recorrente no late (38 ocorrências somando mid+late no itemPopularity). Little Friends prende um inimigo (raiz mínima de 2s, +0.5s por unidade afetada até 5) e faz todo creep num raio de 1200, aliado ou inimigo, ganhar +70 attack speed e +100% movespeed pra bater no alvo preso por 6s; custa 75 de mana, 20s de recarga, 750 de alcance de cast. Também deixa o Enchant controlar mais de uma creep ao mesmo tempo.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; constants_abilities.json (enchantress_little_friends); constants_hero_abilities.json; itemPopularity; itemTimings; https://dotacoach.gg/heroes/enchantress (controle de múltiplas creeps no Enchant)

### Situacionais
#### Aghanim's Shard (aghanims_shard)
- minuto: pico de compra entre os cortes de 25 e 30min (24 e 20 jogos, fonte OpenDota itemTimings)
- porque: barato (1400g) e dá Sproink, um escape com contra-ataque de graça
- detalhe: Sproink pula 500 de distância pra trás, esquiva de projéteis inimigos em voo e dispara Impetus nos 2 inimigos mais distantes dentro do alcance de ataque dela +100; custa 60 de mana, 10s de recarga. Dois jogos indexados mostram Enchantress pos 5 no 7.41d fechando Scepter Shard (um foi 4/10/15, outro 4/6/18).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json (enchantress_bunny_hop, dname Sproink); https://dotacoach.gg/heroes/enchantress; https://dev1.dota2protracker.com/hero/Enchantress (exemplos de partida); https://api.opendota.com/api/scenarios/itemTimings?item=aghanims_shard&hero_id=58

#### Essence Distiller (essence_distiller)
- minuto: aparece já no early e segue comprado no mid (1 + 17 ocorrências, fonte itemPopularity)
- porque: barato (1775g) e serve dois usos, cura instantânea ou armadilha de visão/dano
- detalhe: usado num aliado dá 40 de regeneração de vida na hora. Jogado no chão, fica latente até 15s e agarra o primeiro inimigo que passar a 400 de distância, causando 25 de dano por segundo com true sight por 8s e compartilhando a visão com o time; não é bloqueado por spell block nem spell reflect. Ganha carga extra quando herói inimigo morre num raio de 1500.
- contra: resolve inimigo que depende de ficar invisível perto da armadilha, porque o true sight revela o alvo além de causar dano
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (attrib e notes de essence_distiller)

#### Drum of Endurance (ancient_janggo)
- minuto: item recorrente no mid (47 ocorrências no itemPopularity)
- porque: aura de +15 movespeed e +2.5 regen de vida pro grupo todo, bom pra iniciar pick ou fugir em grupo
- detalhe: também dá +35% attack speed e +13% movespeed em burst de 6s pra quem usa o charge, em raio de 1200. 8 cargas no item.
- combo: usar antes de entrar em luta junto do Enchant, pra chegar primeiro e já controlar o alvo
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (attrib de ancient_janggo); itemPopularity

#### Solar Crest (solar_crest)
- minuto: ocorrência pontual no mid/late (8 e 2, fonte itemPopularity)
- porque: pode ser usado pra ajudar aliado a sobreviver dive, dando armor e velocidade de ataque de surpresa
- detalhe: +5 armor, +60 attack speed e +15% movespeed em aliado por 7s, com barreira que absorve 350 de dano físico. Só funciona em alvo aliado, não ativa em si mesma e não tem versão pra usar no inimigo. Compartilha cooldown com Pavise.
- contra: resolve diving de torre do time, porque o armor extra segura o dano de torre enquanto o aliado finaliza
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (attrib e notes de solar_crest)

#### Glimmer Cape (glimmer_cape)
- minuto: ocorrência pontual no mid/late (4 e 4, fonte itemPopularity)
- porque: invisibilidade rápida e +20% resistência mágica pra tirar aliado de nuke
- detalhe: 5s de efeito, com barreira que bloqueia 375 de dano mágico ao ativar.
- contra: resolve burst mágico de nuke único (ex. qualquer combo que dependa de acertar o alvo visível pra matar)
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (attrib de glimmer_cape)

#### Pipe of Insight (pipe)
- minuto: ocorrência pontual no late (8 no itemPopularity)
- porque: barreira de 425 em área de 1200 contra nuke em grupo
- detalhe: +20% resistência mágica e 14 de regen de vida pra ela; a barreira em área cobre o time todo numa luta.
- contra: resolve combo de dano mágico em área (ultimates de AoE que dependem de acumular dano no time inteiro)
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (attrib e notes de pipe)

#### Black King Bar (black_king_bar)
- minuto: ocorrência no late (11 no itemPopularity)
- porque: dá 9/8/7s de imunidade a magia conforme o nível, pra ela sobreviver focus
- detalhe: reduz 60% do dano de magia mesmo com a imunidade ativa (spell_reduce).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (attrib de black_king_bar)

#### Scythe of Vyse (sheepstick)
- minuto: ocorrência no late (3 no itemPopularity)
- porque: hex de 2.8s pra finalizar o alvo que sobrou depois do Enchant
- detalhe: +30 int e +8.5 regen de mana, junto do disable.
- combo: Enchant pra fechar a distância e trocar ataque, Scythe no que sobrevive pra travar de vez
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (attrib de sheepstick)

#### Aeon Disk (aeon_disk)
- minuto: ocorrência rara no late (3 no itemPopularity)
- porque: escudo automático quando ela cai pra 70% de vida, cobre erro de posicionamento
- detalhe: +250 vida e +300 mana, com 75% de resistência a status por 2.5s quando ativa, recarga de 105 a 165s conforme o nível.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (attrib de aeon_disk)

#### Moon Shard (moon_shard)
- minuto: ocorrência rara no late (2 no itemPopularity)
- porque: +140 attack speed enquanto estiver com o item, direto pro motor de Impetus
- detalhe: ao consumir o item (uso único), perde o item mas fixa +60 de attack speed pra sempre; serve pra ela ficar relevante em teamfight tardia só com ataque.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (attrib de moon_shard)

## Roshan
Sem dado de Roshan solo.
