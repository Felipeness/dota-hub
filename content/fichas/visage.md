---
id: ficha-visage
titulo: "Visage"
heroi: Visage
patch: 7.41
posicoes: [2, 3, 4, 5]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_patch.json
- dota-imortal/data/opendota/items.json
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/early_rosh_pro.json
- dota-roshan-solo/data/late_rosh_pro.json
- dota-roshan-solo/data/solos.json
- dota-tier1/data/draft.csv
- dota-tier1/data/jogadores_partida.csv
- dota-tier1/data/partidas.csv
- dota-tier1/data/derivados/itens_chave.parquet
- dota-tier1/data/derivados/compras.parquet
- dota-tier1/data/derivados/objetivos.parquet
- dota-tier1/data/derivados/pre_objetivo.parquet
- https://api.opendota.com/api/heroes/92/itemPopularity
- https://dotacoach.gg/en/heroes/visage (stats by role, patch 7.41f)
- https://dotacoach.gg/en/heroes/visage/builds/mid (patch 7.41f)
- https://dotacoach.gg/en/heroes/visage/builds/offlane (patch 7.41f)
- https://dotacoach.gg/en/heroes/visage/builds/support (patch 7.41f)
- https://liquipedia.net/dota2/Visage/Changelogs (via busca: innate rework 7.41)
- https://www.gosugamers.net/dota2/news/78166-dota-2-patch-7-41-removes-facets-and-adds-nine-new-items
---

## Resumo
Visage é um herói de todos os atributos (all-stats), nuker e disabler com dano mágico: Grave Chill rouba velocidade de movimento e de ataque do alvo e dá esse ganho pra ele e pros Familiares, Soul Assumption acumula carga toda vez que um herói perto leva mais de 100 de dano e estoura em nuke, e os 2 Familiares (com Gravekeeper's Cloak reduzindo dano em camadas) dão corpo e um stun em área via Stone Form. No 7.41 os facets foram removidos do jogo inteiro (GosuGamers) e Silent as the Grave virou innate sem invisibilidade de base (constants_abilities.json: is_innate true, invis 0); a invisibilidade some do kit base e só volta comprando o Aghanim's Scepter (dotacoach.gg/en/heroes/visage). No recorte de papel do Dota Coach pro patch 7.41f ele é jogado sobretudo na lane solo, não como suporte puro: 37,2% das partidas como mid (55,1% de vitória), 38,5% como offlane (52,1%), 13,8% como suporte de roaming (48,0%) e 9,6% como suporte duro (50,1%); como carry é 0,9% (44,4%), prática irrelevante. No dataset local de pro play (dota-tier1/draft.csv) só há 1 partida confirmada com Visage: BetBoom Team na Esports World Cup 2026, vitória, jogado na posição 4 (jogadores_partida.csv), com 0/10/22 de KDA, 153 last hits, 37,5 de stun total e 84,6% de participação em teamfight.

## Pos 2 (mid)
- quando pegar: 37,2% das partidas do herói no 7.41f são mid, com a maior vitória entre as 5 posições (55,1%, dotacoach.gg). Skill build mediano (dotacoach.gg/en/heroes/visage/builds/mid, mesma ordem usada nas páginas de offlane e suporte): Soul Assumption no 1, Grave Chill no 2, Soul Assumption no 3, Gravekeeper's Cloak no 4, Soul Assumption no 5 (maximiza aos 7), Summon Familiars no 6, Grave Chill nos 8/9/10 (maximiza aos 10, depois de Soul Assumption), Gravekeeper's Cloak nos 11/13/14, Summon Familiars em 12/18.
- itens iniciais: branches, circlet, enchanted_mango, tango, faerie_fire (os 5 itens de abertura mais comprados pelo herói no OpenDota itemPopularity, fase start_game_items: 174, 130, 67, 65 e 32 compras; dado agregado de todas as posições, não exclusivo do mid)

### Build
#### Null Talisman (null_talisman)
- porque: mana pra spamar Grave Chill (75 de mana) e Soul Assumption sem secar sozinho na lane, sem depender de suporte.
- detalhe: item mais comprado na fase early_game_items do herói no OpenDota (83 compras, o maior de toda a fase); sobe pra Aghanim's Shard ou Ultimate Scepter depois.
- fonte: https://api.opendota.com/api/heroes/92/itemPopularity (early_game_items)

#### Tranquil Boots (tranquil_boots)
- porque: +65 de velocidade e 250 de vida regenerada em 20s de graça, pra aguentar trade de lane sem gastar mana da Grave Chill.
- detalhe: 2ª bota mais comprada no OpenDota (54 compras na fase early); quebra por 13s ao levar 20+ de dano de herói ou torre (items.json).
- fonte: https://api.opendota.com/api/heroes/92/itemPopularity (early_game_items); items.json

#### Orchid Malevolence (orchid)
- porque: silencia 5s e amplifica 30% o dano que o alvo recebe, a janela certa pra Soul Assumption estourar sem ele conseguir fugir ou curar.
- detalhe: 18 compras na fase mid_game_items do herói no OpenDota; +20 de dano e +35 de velocidade de ataque ajudam a estourar a carga de Soul Assumption mais rápido.
- contra: heróis que dependem de um feitiço de fuga, cura ou canalização pra sobreviver a burst (o Silence bloqueia isso por 5s; items.json).
- combo: Grave Chill rouba a velocidade de fuga do alvo, Orchid trava o feitiço de fuga por 5s, Soul Assumption libera a carga acumulada; os Familiares em Stone Form fecham o cerco.
- fonte: https://api.opendota.com/api/heroes/92/itemPopularity (mid_game_items); items.json

#### Aghanim's Shard (aghanims_shard)
- porque: reforça o Stone Form (stun de 0,8 a 1,2s em 375 de raio, dano 60/100/140, constants_abilities.json) e ajuda a sobreviver a engajadas e ganhar tempo no late, segundo o dotacoach ("indicado pra late game, ajuda a sobreviver a saltos, ganhar tempo e adiciona outro stun").
- detalhe: 38 compras na fase mid_game_items do herói no OpenDota; o dump local de constants não marca qual habilidade cada Shard/Scepter upgrada, então o vínculo exato Shard→Stone Form não tem confirmação local.
- combo: a velocidade roubada pelo Grave Chill fecha distância pro Familiar acertar o Stone Form antes do alvo escapar do raio.
- fonte: https://api.opendota.com/api/heroes/92/itemPopularity (mid_game_items); constants_abilities.json (visage_stone_form_self_cast); https://dotacoach.gg/en/heroes/visage

#### Aghanim's Scepter (ultimate_scepter)
- porque: +10 de todos os atributos e +175 de vida/mana, mais a invisibilidade que a Silent as the Grave perdeu quando virou innate no 7.41.
- detalhe: 14 compras na fase mid e 27 na fase late do herói no OpenDota (3º item late mais comprado, atrás de Assault Cuirass e Hyperstone); o upgrade dá mais mobilidade e potencial de pick-off na Silent as the Grave, incluindo a invisibilidade de volta pra Visage e os Familiares (dotacoach.gg/en/heroes/visage).
- fonte: https://api.opendota.com/api/heroes/92/itemPopularity (mid_game_items, late_game_items); items.json; https://dotacoach.gg/en/heroes/visage

### Situacionais
#### Black King Bar (black_king_bar)
- quando: jogo que vira troca de disable pesado em vez de pick isolado.
- porque: segura Visage vivo pra conectar o combo de Grave Chill + Orchid + Soul Assumption sem ser interrompido por stun/silence de alvo.
- contra: lineups de disable duro em cadeia que tentam travar Visage antes do combo.
- fonte: https://dotacoach.gg/en/heroes/visage/builds/mid (item situacional); items.json (spell_reduce 60, duration 9/8/7)

#### Bloodthorn (bloodthorn)
- quando: inimigo com evasão alta ou que depende de mobilidade pra escapar do combo.
- porque: silence de 5s com acerto garantido (ignora evasão) e +60% de amplificação de dano durante o silence, estoura quem tenta fugir.
- contra: heróis de evasão (Phantom Assassin, Butterfly) ou de fuga rápida que sobreviveriam ao combo normal (items.json: silence_damage_percent 60, "Provides True Strike... against the silenced target").
- fonte: https://dotacoach.gg/en/heroes/visage/builds/mid (item situacional); items.json

## Pos 3 (offlane)
- quando pegar: 38,5% das partidas do herói no 7.41f são offlane, a posição mais jogada no recorte, com 52,1% de vitória (dotacoach.gg). Skill build mediano (dotacoach.gg/en/heroes/visage/builds/offlane, mesma ordem das páginas de mid e suporte): Soul Assumption no 1, Grave Chill no 2, Soul Assumption no 3, Gravekeeper's Cloak no 4, Soul Assumption no 5 (maximiza aos 7), Summon Familiars no 6, Grave Chill nos 8/9/10 (maximiza aos 10, depois de Soul Assumption), Gravekeeper's Cloak nos 11/13/14, Summon Familiars em 12/18.
- itens iniciais: tango, enchanted_mango, circlet, circlet, branches, branches (abertura registrada pelo dotacoach.gg pra offlane, igual à listada pra mid e suporte no mesmo site: tratar como abertura genérica do herói, não exclusiva da lane)

### Build
#### Vladmir's Offering (vladmir)
- porque: +18 de dano e 20% de lifesteal em aura (12% contra creeps) pra ele e o time, sustenta Visage numa lane de troca 2x1 ou 3x2.
- detalhe: no único jogo pro local com o herói (BetBoom, EWC 2026, posição 4) foi o 1º item grande, fechado aos 20:56 (dota-tier1/derivados/itens_chave.parquet e compras.parquet); componentes Buckler, Ring of Basilius, Morbid Mask e Blades of Attack.
- fonte: dota-tier1/derivados/itens_chave.parquet (1/1 partida local com dado de item); items.json

#### Gravekeeper's Cloak (passiva, já no kit)
- porque: reduz dano em camadas (8 a 20% por camada, até 4) sempre que Visage leva dano de herói, absorvendo o início da troca de lane de graça.
- detalhe: recupera 1 camada a cada 7/6/5/4s (quanto mais pontos, mais rápido); protege os Familiares também, dentro de 900 de raio (constants_abilities.json).
- fonte: constants_abilities.json (visage_gravekeepers_cloak)

#### Pipe of Insight (pipe)
- porque: barreira de 425 de dano mágico por 8s num raio de 1200, segura o time contra o primeiro nuke em área de uma iniciação.
- detalhe: também dá +20% de resistência mágica pra Visage e +8% em aura pro time (items.json); baixo volume no OpenDota (5 compras na fase mid) mas confirmado no jogo pro local, fechado aos 34:33.
- contra: lineups de nuke em área (iniciação com dano mágico em zona) que tentam abrir a luta com burst coletivo.
- fonte: dota-tier1/derivados/itens_chave.parquet; items.json

#### Aghanim's Shard (aghanims_shard)
- porque: mesmo papel do mid, reforça o Stone Form (stun 0,8-1,2s em 375 de raio) pra travar quem vier trocar na lane.
- detalhe: no jogo pro local foi comprado aos 24:42, antes do Pipe (dota-tier1/derivados/compras.parquet).
- fonte: dota-tier1/derivados/compras.parquet; constants_abilities.json (visage_stone_form_self_cast)

### Situacionais
#### Crimson Guard (crimson_guard)
- quando: inimigo com dano físico em enxame (summons, ilusões) ou nuke físico repetido na lane.
- porque: o bloqueio de dano físico em área (60% de chance, raio 1200) protege Visage e os Familiares ao mesmo tempo, sem precisar de alvo único (items.json: block_chance 60, block_damage_melee 75, block_damage_ranged 50, bonus_aoe_radius 1200).
- contra: lineups de ataque físico em volume (Phantom Lancer, Broodmother, Lycan) que tentam estourar os Familiares rápido; nota: o dotacoach também lista Crimson Guard como item que o time INIMIGO compra contra o dano físico do próprio Visage e dos Familiares, então é item de mão dupla.
- fonte: https://dotacoach.gg/en/heroes/visage/builds/offlane (item situacional); items.json

#### Guardian Greaves (guardian_greaves)
- quando: jogo que se arrasta e o time precisa de sustain em área além do Pipe.
- porque: a ativa (Mend) cura 325 de vida e 200 de mana num raio de 1200 e remove debuffs do time, mais aura passiva de regen de vida/mana, junto com a sustentação que o Vladmir's já dá (items.json; não dá resistência mágica, isso é papel do Pipe).
- fonte: https://dotacoach.gg/en/heroes/visage/builds/offlane (item situacional); items.json

## Pos 4 (suporte de roaming)
- quando pegar: 13,8% das partidas do herói no 7.41f são suporte de roaming, com 48,0% de vitória (dotacoach.gg); é a única posição com dado de pro play local: 1 jogo confirmado (BetBoom Team, EWC 2026), vitória, 0/10/22 de KDA, 153 last hits, 7 denies, nível 24, 37,5 de stun total e 84,6% de participação em teamfight (dota-tier1/jogadores_partida.csv). O perfil de muitas mortes e poucos abates bate com o papel de iniciador/disable que troca corpo por utilidade, não farm.
- itens iniciais: flask, tango, enchanted_mango, faerie_fire, branches, ward_observer, blood_grenade, ward_sentry (sequência real de compra do único jogo pro local, dota-tier1/derivados/compras.parquet, primeiros 5 minutos)

### Build
#### Magic Wand (magic_wand)
- minuto: ~4,6
- porque: salva de um burst inicial de harass sem gastar a mana que Grave Chill precisa, barato o bastante pra comprar cedo de suporte.
- detalhe: no jogo pro local, montado aos 4:35 (branches + recipe aos 4:03, wand pronto aos 4:35).
- fonte: dota-tier1/derivados/compras.parquet (match 8886576019)

#### Tranquil Boots (tranquil_boots)
- minuto: ~11,4
- porque: regen de vida de graça pra aguentar o roam sem puxar farm da jungle.
- detalhe: no jogo pro local, comprado aos 11:26, depois de um Ring of Regen aos 11:02.
- fonte: dota-tier1/derivados/compras.parquet (match 8886576019); items.json

#### Vladmir's Offering (vladmir)
- minuto: ~20,9
- porque: dá dano e lifesteal em aura pro time inteiro, não só pra Visage, o que rende mais num suporte que já está perto dos aliados.
- detalhe: montado aos 20:56 no jogo pro local, via Buckler (13:07), Ring of Basilius (15:47), Blades of Attack (17:45) e Morbid Mask (20:15).
- fonte: dota-tier1/derivados/itens_chave.parquet e compras.parquet (match 8886576019); items.json

#### Aghanim's Shard (aghanims_shard)
- minuto: ~24,7
- porque: reforça o Stone Form (stun 0,8-1,2s em 375 de raio), essencial pro suporte que inicia a troca; o dotacoach lista o Shard como item de late game pra sobreviver a engajadas e ganhar tempo.
- detalhe: comprado aos 24:42 no jogo pro local, antes do Pipe.
- combo: Grave Chill rouba velocidade do alvo, o Familiar fecha e crava o Stone Form em cima dele antes que ele saia do raio de 375.
- fonte: dota-tier1/derivados/compras.parquet (match 8886576019); constants_abilities.json (visage_stone_form_self_cast); https://dotacoach.gg/en/heroes/visage

#### Pipe of Insight (pipe)
- minuto: ~34,6
- porque: barreira mágica de 425 em área de 1200 de raio, segura o time contra burst em luta de objetivo (torre, Roshan, Tormentor).
- detalhe: montado aos 34:33 no jogo pro local, via Shawl (33:12) e recipe; comprou também um Ring of Tarrasque (34:13) junto, de sustain pessoal.
- fonte: dota-tier1/derivados/itens_chave.parquet e compras.parquet (match 8886576019); items.json

#### Aghanim's Scepter (ultimate_scepter)
- minuto: ~44,8
- porque: fecha o kit tardio com atributos, vida/mana e a invisibilidade que a Silent as the Grave perdeu no 7.41.
- detalhe: montado aos 44:45 no jogo pro local, via Staff of Wizardry, Ogre Axe e Blade of Alacrity.
- fonte: dota-tier1/derivados/itens_chave.parquet e compras.parquet (match 8886576019); constants_abilities.json (visage_silent_as_the_grave); https://dotacoach.gg/en/heroes/visage

### Situacionais
#### Observer Ward / Sentry Ward (ward_observer / ward_sentry)
- quando: durante toda a fase de roam (o jogo pro local tem 4 compras de Observer e 11 de Sentry ao longo da partida).
- porque: visão pra escolher onde roamar e contra-visão pra limpar wards inimigas antes de iniciar.
- fonte: dota-tier1/derivados/compras.parquet (match 8886576019)

#### Smoke of Deceit (smoke_of_deceit)
- quando: antes de cada rotação de roam (3 compras no jogo pro local: 10:26, 24:59 e 34:59).
- porque: esconde a rota até o momento do combo de Grave Chill + Stone Form.
- fonte: dota-tier1/derivados/compras.parquet (match 8886576019)

## Pos 5 (suporte duro)
- quando pegar: 9,6% das partidas do herói no 7.41f são suporte duro, com 50,1% de vitória, a 2ª melhor taxa entre as 5 posições depois do mid (dotacoach.gg). Sem dado de pro play local pra esta posição especificamente (dota-tier1 só confirma 1 jogo, de pos 4).
- itens iniciais: tango, enchanted_mango, branches, ward_observer, ward_sentry (mesma abertura agregada do herói no OpenDota itemPopularity, fase start_game_items, com foco em ward por ser o suporte que fica preso na lane)

### Build
#### Magic Wand (magic_wand)
- porque: sustenta o começo de lane sem gastar o ouro curto de um suporte duro.
- detalhe: 9 compras na fase start_game_items do herói no OpenDota, geralmente precedido pelo Magic Stick (24 compras) que ele upgrada.
- fonte: https://api.opendota.com/api/heroes/92/itemPopularity (start_game_items)

#### Tranquil Boots (tranquil_boots)
- porque: regen de vida de graça, essencial pro suporte duro que não tem ouro pra Ring of Health nem pra sair da lane.
- detalhe: 2ª bota mais comprada do herói no OpenDota.
- fonte: https://api.opendota.com/api/heroes/92/itemPopularity (early_game_items)

#### Drum of Endurance (ancient_janggo)
- porque: +15 de velocidade e +2,5 de regen de vida em aura pro time, barato (1.625) e dá ao suporte duro algo de utilidade sem precisar farmar.
- detalhe: foi o 2º item mais comprado na fase early (38 compras) e o mais comprado na fase mid (51) do herói inteiro no OpenDota.
- fonte: https://api.opendota.com/api/heroes/92/itemPopularity (early_game_items, mid_game_items); items.json

#### Aghanim's Shard (aghanims_shard)
- porque: reforça o stun de Stone Form mesmo pra quem não tem ouro pra itens caros, só 1.400.
- detalhe: 38 compras na fase mid_game_items do herói no OpenDota; é o upgrade de menor custo que afeta o combo do herói.
- fonte: https://api.opendota.com/api/heroes/92/itemPopularity (mid_game_items); constants_abilities.json (visage_stone_form_self_cast)

### Situacionais
#### Lotus Orb (lotus_orb)
- quando: inimigo com um disable ou buff de alvo único que, se refletido, vira o jogo (ex.: um stun/silence caro de recarga longa).
- porque: reflete o feitiço de volta no lançador, defesa barata pro suporte que não pode trocar vida em troca de utilidade.
- contra: disables de alvo único caros ou de recarga longa, onde refletir pune mais do que recarregar.
- fonte: https://dotacoach.gg/en/heroes/visage/builds/support (item situacional); items.json (Echo Shell: re-cast de spells no lançador)

#### Aeon Disk (aeon_disk)
- quando: Visage é o primeiro alvo de burst assim que aparece pra iniciar o combo.
- porque: barreira automática ao cair pra 70% de vida, com 75% de resistência a status por 2,5s, segunda chance contra o primeiro nuke+disable.
- contra: combos de burst que dependem de acertar Visage de primeira pra impedir o Grave Chill/Stone Form.
- fonte: https://dotacoach.gg/en/heroes/visage/builds/support (item situacional); items.json

## Roshan
Sem solo confirmado no dataset dedicado: Visage não aparece em resumo_por_heroi.json nem em early_rosh_pro.json/late_rosh_pro.json do dota-roshan-solo (os arquivos que listam solos confirmados). Ele aparece só em solos.json, como candidato com maior fatia de dano em 2 Roshans que o próprio dataset classifica como "time" (não solo): partida 8751517501 (53,6% do dano, último golpe do Alchemist) e partida 8997391293 (42,7% do dano, último golpe da Luna). Faz sentido, não é farmador solo. No único jogo pro local com o herói (dota-tier1, BetBoom Team x _PowerRangers, EWC 2026), o Roshan foi abatido em time, não solo: aos 25:52 um Familiar de Visage (npc_dota_visage_familiar1) aparece como atacante num Roshan (objetivos.parquet), e o abate seguinte, aos 38:31, foi fechado por Lina do mesmo time, com o time do Visage 4.639 de patrimônio líquido atrás antes do abate (pre_objetivo.parquet). Ou seja, Visage participa do Roshan em grupo, usando o Familiar como corpo extra pra tankar/bater, e não como o herói que dá o último hit.
