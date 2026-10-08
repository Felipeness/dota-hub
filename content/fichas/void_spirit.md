---
id: ficha-void_spirit
titulo: "Void Spirit"
heroi: Void Spirit
patch: 7.41
posicoes: [2]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-tier1/data/draft.csv
- dota-tier1/data/heroes.json
- dota-roshan-solo/data/resumo_por_heroi.json
- https://api.opendota.com/api/heroes/126/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=126
- https://api.opendota.com/api/heroes/126/matchups
- https://dota2protracker.com/builds/void-spirit-pos2-2
- https://dota2protracker.com/hero/legacy/Void+Spirit
---

## Resumo

Void Spirit (atributo universal, ataque corpo a corpo) é jogado quase só de mid (pos 2). No lote de replays pro do Atlas ele saiu como pos2 em 75 das 80 partidas draftadas (93,75%), com 38,7% de vitórias nesse recorte, e a build de pos2 publicada no dota2protracker está assentada em 3.194 partidas de MMR 7000+ com 48,9% de vitória geral do herói. O kit mistura mobilidade (Astral Step, 2 cargas, atravessa imunidade a feitiço) com puxão de área (Aether Remnant), e a passiva Intrinsic Edge converte qualquer atributo ganho, inclusive de item, em mais dano de ataque, o que empurra a build pra itens de stat puro e amplificação mágica em vez de dano bruto de ataque. Ele é fraco contra quem interrompe blink e invisibilidade de perto (Treant Protector, Nyx Assassin, Dark Seer) e contra nukes que ignoram Black King Bar, como a Supernova do Phoenix.

## Pos 2 (mid)

- quando pegar: pick de solo kill e de rotação por mobilidade. Nos drafts pro analisados ele foi pos2 em 75 de 80 partidas (fonte: dota-tier1/data/draft.csv, hero_id 126).
- itens iniciais: branches, tango, faerie_fire, circlet

### Build

#### Bottle (bottle)
- minuto: 1:30
- porque: dá vida e mana pra ficar na lane gastando Aether Remnant e Resonant Pulse sem recall.
- detalhe: enche na fonte, guarda rune quando passa por elas e pode ser compartilhado com o aliado da rota se precisar. Nas duas amostras do d2pt consultadas ele sai perto de 1:00 e de 2:00, por isso o meio-termo.
- fonte: dota2protracker.com/builds/void-spirit-pos2-2; dota2protracker.com/hero/legacy/Void+Spirit

#### Power Treads (power_treads)
- minuto: 8 a 12
- porque: cada atributo trocado nos Treads vale mais nele por causa da passiva Intrinsic Edge.
- detalhe: Intrinsic Edge dá 15% de dano de ataque extra por ponto de qualquer atributo e 30% a mais no bônus secundário do atributo escolhido no swap. Na maior parte do jogo fica em Agilidade (ataque e attack speed); troca pra Força quando vai levar poke pesado ou iniciar sem medo de ficar sem vida.
- fonte: dota-imortal/data/opendota/items.json (power_treads); constants_abilities.json (void_spirit_intrinsic_edge); api.opendota.com/api/heroes/126/itemPopularity (35 compras na fase inicial, 22 na intermediária)

#### Urn of Shadows (urn_of_shadows)
- minuto: 7
- porque: junta carga a cada morte perto e já deixa pronta a troca pra Spirit Vessel.
- detalhe: Soul Release usado no inimigo queima vida por 8 segundos; usado no aliado regenera. Fica pronto pra evoluir assim que junta ouro, geralmente perto dos 15 minutos.
- fonte: items.json (urn_of_shadows); api.opendota.com/api/heroes/126/itemPopularity (79 compras na fase inicial)

#### Spirit Vessel (spirit_vessel)
- minuto: 16
- porque: corta 70% da regeneração de vida do alvo e ainda tira 4% da vida atual por segundo.
- detalhe: é a evolução da Urn of Shadows. Usado no inimigo trava quem depende de lifesteal ou regen pra sobreviver à troca de feitiços do Void; usado no aliado cura 40 de vida por segundo.
- contra: heróis que dependem de sustain pesado na troca (Satanic, Morbid Mask, regen de habilidade).
- fonte: items.json (spirit_vessel); api.opendota.com/api/heroes/126/itemPopularity (75 compras na fase intermediária)

#### Aghanim's Shard (aghanims_shard)
- minuto: 18 a 19
- porque: é a compra de meio-jogo mais repetida da build, antes até do item de dano.
- detalhe: nos dois cortes do dota2protracker consultados ele sai fixo entre 18 e 19 minutos, e no OpenDota é o item completo mais comprado na fase intermediária (76 contagens; só um componente básico, Staff of Wizardry, aparece mais vezes nessa janela, com 105). As fontes consultadas não trazem o texto exato do bônus do Shard pra esse herói neste patch, então não cravamos o efeito aqui.
- fonte: dota2protracker.com/builds/void-spirit-pos2-2; dota2protracker.com/hero/legacy/Void+Spirit; api.opendota.com/api/heroes/126/itemPopularity

#### Kaya (kaya)
- minuto: 20 a 25
- porque: dá 10% de amplificação mágica em todo o kit de feitiço e o INT extra ainda rende dano de ataque pela Intrinsic Edge.
- detalhe: Kaya puro dá +16 de inteligência, 10% de spell amp e 30% de regen de mana. Vira Yasha and Kaya quando falta mobilidade pra alcançar o alvo, ou Kaya and Sange quando precisa de vida e redução de slow pra sobreviver no meio da luta.
- fonte: items.json (kaya, yasha, sange, kaya_and_sange, yasha_and_kaya); api.opendota.com/api/heroes/126/itemPopularity (58 compras de Kaya na fase intermediária)

#### Black King Bar (black_king_bar)
- minuto: 30 a 32
- porque: a maioria dos disables que travam o combo de Astral Step e Dissimilate é mágica, então o BKB libera o combo de novo.
- detalhe: dá dispel básico, 60% de resistência mágica e imunidade a dano refletido e puro por 9 segundos. Contra Nyx Assassin a vitória do Void cai pra 31,8% em 85 partidas, e contra Dark Seer pra 25% em 28. Os dois têm um disable de alvo único em área (Impale e Vacuum) que o BKB resolve. Não resolve tudo: a Supernova do Phoenix atravessa BKB (flag bkbpierce da própria habilidade), e contra Phoenix a vitória do Void é 36,4% em 165 partidas, a maior amostra entre os matchups ruins.
- contra: Nyx Assassin, Dark Seer. Não funciona contra Phoenix Supernova.
- fonte: items.json (black_king_bar); api.opendota.com/api/heroes/126/matchups; constants_abilities.json (nyx_assassin_impale, dark_seer_vacuum, phoenix_supernova)

### Situacionais

#### Mage Slayer (mage_slayer)
- porque: rouba 40% do dano de feitiço do alvo por 3s e ainda bate 40 de dano físico por segundo nele.
- detalhe: aparece como item central numa das builds pro analisadas pelo dota2protracker, comprado por volta dos 15 minutos.
- contra: heróis que fecham a luta com um nuke ou disable grande que o Void precisa sobreviver pra devolver o combo (mages e disablers em geral).
- fonte: items.json (mage_slayer); dota2protracker.com/builds/void-spirit-pos2-2

#### Witch Blade (witch_blade)
- porque: envenena o próximo ataque com dano mágico baseado na própria inteligência, com true strike.
- detalhe: converte o INT que o Void já acumula em dano de ataque extra e ainda fura evasão por causa do true strike.
- contra: heróis de evasão alta e pick-off em geral (Phantom Assassin, ilusionistas).
- fonte: items.json (witch_blade); api.opendota.com/api/heroes/126/itemPopularity

#### Shiva's Guard (shivas_guard)
- porque: estoura 260 de dano mágico com -40% de movimento e ainda trava -45 de velocidade de ataque em todo mundo perto.
- detalhe: a aura de attack speed fica ligada o jogo inteiro, não só durante a onda.
- contra: ilusionistas e carries de ataque rápido. A vitória do Void contra Naga Siren cai pra 35,5% em 31 partidas; Shiva's Guard trava exatamente o DPS das ilusões dela.
- fonte: items.json (shivas_guard); api.opendota.com/api/heroes/126/matchups (Naga Siren)

#### Nullifier (nullifier)
- porque: dispela o alvo e ainda deixa lento por 4s, sem precisar de silêncio antes.
- detalhe: pode ser lançado em unidade invulnerável, então também serve pra abrir um alvo que acabou de ficar imune.
- contra: heróis que escapam ou se protegem com um buff que pode ser dispelado (Ghost Scepter, Guardian Angel, Euls).
- fonte: items.json (nullifier)

#### Linken's Sphere (sphere)
- porque: bloqueia um feitiço de alvo único a cada 14s, de graça, sem precisar reagir.
- detalhe: também bloqueia a maioria dos itens ativos de alvo único, mas não bloqueia habilidades de alvo único de item neutro, essas não ativam o Spellblock.
- contra: heróis que dependem de um único nuke ou disable de alvo único pra abrir o Void.
- fonte: items.json (sphere)

#### Manta Style (manta)
- porque: ainda dá um basic dispel no usuário ao ativar, e também cria ilusões pra limpar farm e lane ao mesmo tempo.
- detalhe: composto por Yasha e Diadem, dois itens de atributo puro que a Intrinsic Edge amplifica. O self-dispel ao ativar continua valendo no 7.41; o que mudou foi só a composição (saiu de item único pra Yasha+Diadem), e a popularidade caiu bastante com isso: só 5 compras na fase intermediária e 5 na fase final, na amostra do OpenDota.
- contra: útil pra limpar um debuff em cima de si mesmo no meio da troca, ou pra cobrir duas rotas (farm e lane) de uma vez.
- fonte: items.json (manta: componentes yasha + diadem, Dispel Type Basic Dispel); api.opendota.com/api/heroes/126/itemPopularity

#### Octarine Core (octarine_core)
- porque: reduz recarga em 25% pra repetir Astral Step e Aether Remnant mais rápido, além de dar 450 de vida e mana.
- detalhe: compensa bem em lutas longas, tipo cerco de Roshan ou teamfight que se arrasta, porque devolve o combo antes do normal.
- contra: confrontos arrastados em que o cooldown do kit é o limitador, não dano puro.
- fonte: items.json (octarine_core)

## Roshan

Sem dado de Roshan solo.
