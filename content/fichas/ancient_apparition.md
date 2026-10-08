---
id: ficha-ancient_apparition
titulo: "Ancient Apparition"
heroi: Ancient Apparition
patch: 7.41
posicoes: [5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-tier1/work/equipes/1win/scripts/out/draft_herois.csv
- C:/Users/felip/Desktop/dota-tier1/work/equipes/aurora/tmp/draft_pre.csv
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/68/itemPopularity
- https://dota2protracker.com/hero/Ancient+Apparition
- https://dota2protracker.com/builds/ancient-apparition-pos5-1
- https://winio.ai/wiki/dota2/heroes/ancient-apparition
- https://dotacoach.gg/en/heroes/ancient-apparition/builds/support
- https://dotacoach.gg/en/heroes/counters/ancient-apparition
---

## Resumo
Ancient Apparition é classificado como Support/Disabler/Nuker no OpenDota (`heroes.json`) e é quase só jogado de suporte duro: 55,7% das partidas como pos 5 e 36,7% como pos 4, segundo winio.ai. No Atlas tier 1, as únicas aparições dele nos dados locais são como pos 5: 14 partidas rastreadas em `compras.parquet`, mais os drafts crus de 1win (1 pick) e Aurora (3 picks, 2 vitórias), ambos marcando posição 5 (`draft_herois.csv`, `draft_pre.csv`). O motor dele é Ice Blast: a explosão passa por BKB, não pode ser dispelada e bloqueia toda cura do alvo por até 12 segundos (`constants_abilities.json`, ancient_apparition_ice_blast). Isso o torna forte contra heróis que vivem de sustain, como Alchemist, Huskar, Leshrac, Necrophos, Bristleback, Io, Morphling, Troll Warlord, Abaddon, Winter Wyvern e Dazzle (dotacoach.gg/en/heroes/counters/ancient-apparition), e fraco contra quem dispella ou escapa do alcance antes do Cold Feet fechar o stun, como Storm Spirit, Anti-Mage, Weaver, Medusa, Night Stalker, Brewmaster, Lycan e Pudge (mesma fonte).

## Pos 5 (suporte duro)
- quando pegar: pega quando o time precisa de um disable de longo alcance barato (Cold Feet tem até 1000 de alcance de cast no nível 4) e de um jeito de fechar kill contra lineup de sustain pesado, já que o Ice Blast anula toda cura do alvo por até 12s. É a posição majoritária do herói na base pública (55,7% pos 5, winio.ai) e a única com amostra real de pro: o build dedicado de pos 5 do D2PT tem 57% de vitória em 58 partidas (dado vivo, conferido em 08/10/2026, tende a mudar com novas partidas), e nos 14 jogos rastreados localmente ele nunca jogou outra posição.
- itens iniciais: ward_sentry, ward_observer, tango, flask, clarity, enchanted_mango, blood_grenade, magic_stick

### Build
#### Magic Wand (magic_wand)
- minuto: 10,8 (mediana, 12 de 14 partidas locais)
- porque: carga rápida de vida e mana contra o harass de nuke da fase de lane, sem gastar viagem no poço.
- detalhe: acumula 1 carga a cada feitiço usado por inimigo visível em 1200 de raio e devolve 15 de HP/mana por carga, até 20 cargas (`items.json`, magic_wand). Como AA troca Cold Feet e leva nuke de volta, o wand enche rápido nas primeiras escaramuças.
- fonte: compras.parquet (12/14, mediana 10,8min); items.json (magic_wand)

#### Arcane Boots (arcane_boots)
- minuto: 12,2 (mediana, 11 de 14)
- porque: pool de mana pra espamar Cold Feet e Ice Vortex sem secar antes da troca acontecer.
- detalhe: dá 125 de mana e recupera 150 de mana da área ao usar a ativa, com 1 de regen de mana em aura de 1200 de raio (`items.json`, arcane_boots). Mana baixa (75 de base) é o maior limite do herói no early game.
- fonte: compras.parquet (11/14, mediana 12,2min); items.json (arcane_boots)

#### Aghanim's Shard (aghanims_shard)
- minuto: 25,1 (mediana, 8 de 14)
- porque: comprado em 8 das 14 partidas locais (atrás de magic wand, arcane boots e blink em volume) e é o item com maior taxa de compra no snapshot hero-wide do D2PT: 85,4% das partidas de pos 5/4, acima de qualquer outro item da lista.
- detalhe: `items.json` só traz a descrição genérica do Shard ("upgrades an existing ability or adds a new ability to your hero"), sem o efeito exato por herói. Compra confirmada em 8 das 14 partidas locais e no build de pos 5 do D2PT; a mecânica exata do upgrade não foi confirmada em nenhuma fonte acessada nesta ficha.
- fonte: compras.parquet (8/14, mediana 25,1min); dota2protracker.com/hero/Ancient+Apparition (aba Item Stats, 08/10/2026: 85,4% buy rate, melhor 2º item); items.json (aghanims_shard)

#### Force Staff (force_staff)
- minuto: 24,4 (mediana, 6 de 14)
- porque: reposiciona o AA pra fora de alcance de um round de burst ou empurra o aliado focado pra fora da luta, sem gastar o Glimmer.
- detalhe: empurra qualquer unidade 600 de distância na direção que ela olha, instantaneamente (`items.json`, force_staff). Comprado em 21,6% das partidas no snapshot hero-wide do D2PT.
- fonte: compras.parquet (6/14, mediana 24,4min); items.json (force_staff); dota2protracker.com/hero/Ancient+Apparition (aba Item Stats, 08/10/2026: 21,6% buy rate)

#### Glimmer Cape (glimmer_cape)
- minuto: 22,4 (mediana, 5 de 14)
- porque: invisibilidade e barreira mágica tiram o AA ou o aliado de foco logo depois que o disable já foi gasto.
- detalhe: dá 20% de resistência mágica, bloqueia até 375 de dano e esconde por 5s com +20 de velocidade de movimento (`items.json`, glimmer_cape). Comprado em 41,5% das partidas no snapshot hero-wide do D2PT, o terceiro item mais comprado da lista, atrás de Aghanim's Shard (85,4%) e Arcane Boots (62,9%).
- fonte: compras.parquet (5/14, mediana 22,4min); items.json (glimmer_cape); dota2protracker.com/hero/Ancient+Apparition (aba Item Stats, 08/10/2026: 41,5% buy rate)

#### Blink Dagger (blink)
- minuto: 29,5 (mediana, 11 de 14, empatado com arcane boots como segundo item mais comprado da amostra local, atrás só do magic wand)
- porque: fecha os 1200 de distância do teleporte pra travar o Cold Feet ou acertar o tracer do Ice Blast antes do inimigo reagir e sair da área.
- detalhe: teleporta instantaneamente até 1200 de distância e entra em cooldown de 3s se o herói levar dano de inimigo ou Roshan (`items.json`, blink). Como nenhuma habilidade do AA dá mobilidade própria, o blink é o jeito dele se posicionar sem andar exposto pelo mapa.
- contra: Anti-Mage, Storm Spirit e Weaver normalmente escapam do alcance de cast do AA antes dele chegar perto; o blink zera essa distância de uma vez (dotacoach.gg/en/heroes/counters/ancient-apparition; items.json, blink_range 1200).
- fonte: compras.parquet (11/14, mediana 29,5min); items.json (blink)

### Situacionais
#### Rod of Atos (rod_of_atos)
- minuto: 21,2 (mediana, só 1 de 14 partidas locais; dotacoach e D2PT listam o item como padrão no caminho mid game, então a amostra local pode ser pequena demais pra pegar o volume real)
- porque: o root de 2s trava o inimigo no lugar enquanto os 4 segundos do Cold Feet se completam.
- detalhe: Rod of Atos enraíza por 2,0 segundos (`items.json`, rod_of_atos). Cold Feet precisa que o alvo fique dentro da distância de quebra, que varia de 725 a 800 (dependendo do nível), durante os 4 segundos da maldição, pra travar o stun de 1,8 a 3 segundos (`constants_abilities.json`, ancient_apparition_cold_feet). O root cobre metade dessa janela e tira a chance de fuga.
- combo: Cold Feet seguido de Rod of Atos trava o inimigo no lugar por 2s logo depois da maldição começar, o que garante que ele ainda esteja dentro da distância de quebra quando os 4s acabarem e o stun ativar.
- contra: qualquer alvo sem dispel ou blink que dependeria só de correr pra escapar da distância de quebra do Cold Feet.
- fonte: items.json (rod_of_atos); constants_abilities.json (ancient_apparition_cold_feet); compras.parquet (1/14); dotacoach.gg/en/heroes/ancient-apparition/builds/support (mid game: Rod of Atos antes de Aghanim's Shard e Glimmer Cape)

#### Scythe of Vyse (sheepstick)
- minuto: 48,7 (mediana, 2 de 14)
- porque: o Hex silencia, muda e desarma por 2,8s, travando a mobilidade que normalmente escapa do AA.
- detalhe: transforma o alvo num critter inofensivo por 2,8s, com 140 de velocidade base, silenciado, mudo e desarmado (`items.json`, sheepstick).
- contra: Storm Spirit (Ball Lightning), Weaver (Shukuchi) e Anti-Mage (Blink), porque o Hex impede o cast dessas fugas durante os 2,8s, segundo a lógica de silêncio do item combinada com o perfil de fuga listado em dotacoach.gg/en/heroes/counters/ancient-apparition.
- fonte: compras.parquet (2/14); items.json (sheepstick); dotacoach.gg/en/heroes/counters/ancient-apparition

#### Ghost Scepter (ghost)
- minuto: 28,8 (mediana, 3 de 14)
- porque: imunidade a dano físico pra sobreviver ao burst de um carry que já escapou ou dispelou o Cold Feet.
- detalhe: deixa etéreo por 4s, imune a ataques físicos, mas 30% mais vulnerável a dano mágico nesse período (`items.json`, ghost). É pânico barato (1500 de ouro) pra um herói sem fuga própria.
- contra: carries físicos que fecham em cima do suporte depois de escapar do disable, perfil parecido com o de Storm Spirit e Anti-Mage na lista "bad against" do dotacoach.gg/en/heroes/counters/ancient-apparition.
- fonte: items.json (ghost); dotacoach.gg/en/heroes/counters/ancient-apparition; compras.parquet (3/14)

#### Aeon Disk (aeon_disk)
- minuto: 53,6 (mediana, 3 de 14)
- porque: dispel forte e zero dano por 2,5s quando o AA cai abaixo de 70% de vida, pra sobreviver ao combo que tenta travar ele antes da luta.
- detalhe: ao levar dano com a vida abaixo de 70%, aplica um dispel forte e 75% de resistência a status por 2,5s, zerando o dano causado e recebido nesse intervalo (`items.json`, aeon_disk).
- contra: lockdown pesado que tenta neutralizar o AA antes dele castar, como Night Stalker (mobilidade e silence) e Brewmaster (Primal Split dodga o Ice Blast e os stuns travam o cast), ambos listados em "bad against" por dotacoach.gg/en/heroes/counters/ancient-apparition.
- fonte: items.json (aeon_disk); dotacoach.gg/en/heroes/counters/ancient-apparition; compras.parquet (3/14)

## Roshan
Sem dado de Roshan solo.
