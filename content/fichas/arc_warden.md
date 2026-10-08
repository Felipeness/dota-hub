---
id: ficha-arc_warden
titulo: "Arc Warden"
heroi: Arc Warden
patch: 7.41
posicoes: [2]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-tier1/data/partidas.csv
- dota-tier1/data/derivados/compras.parquet
- dota-roshan-solo/data/solos.json
- https://api.opendota.com/api/heroes/113/itemPopularity
- https://dotacoach.gg/en/heroes/arc-warden
- https://dotacoach.gg/en/items/butterfly
---

## Resumo

Arc Warden é um mid de item: Flux isola e desgasta um único alvo, Spark Wraith e Magnetic Field dão farm e sobrevivência de longe, e Tempest Double cria uma cópia completa dele com os itens e magias atuais, cada cooldown contado à parte, o que dobra literalmente o farm e o dano por um tempo. No patch 7.41 ele é quase só pos 2: 91,4% dos picks recentes (pub+pro) vêm do mid, com 53,3% de vitória, contra 5,0% no carry e 3,5% somando as outras posições (fonte: dotacoach.gg/en/heroes/arc-warden). O único jogo de Tier 1 do patch com esse herói no dataset local também foi mid (draft.csv, 1win vs Team Falcons, TI 2026, posicao_replay 2).

## Pos 2 (mid)

- quando pegar: contra lane isolável no early, sem muito gap closer rápido do outro lado (Flux só causa dano se não houver outro inimigo perto do alvo), aceitando abrir mão de presença de lane pra farmar sozinho até a Tempest Double virar o jogo; é a posição de 91,4% dos picks (fonte: dotacoach.gg/en/heroes/arc-warden).
- itens iniciais: tango, circlet, ward_sentry

### Build

#### Hand of Midas (hand_of_midas)
- minuto: 8:20 (replay TI 2026, 1win vs Team Falcons, match 8944695348)
- porque: cada Transmute converte um creep em ouro extra; depois que a Tempest Double existe, a cópia carrega outro Midas com cooldown próprio e dobra a velocidade de farm.
- detalhe: é o item de early game mais comprado do herói no agregado público (88 ocorrências, o maior número de toda a lista de itens iniciais/early). O ouro do Midas não é bounty normal (é "não confiável") e a experiência do Transmute não é compartilhada com o time.
- combo: com a Tempest Double (nível 6+), as duas cópias usam Midas em creeps diferentes ao mesmo tempo, dobrando gold/XP de farm sem gastar mana extra, porque o cooldown é do item, não do herói.
- fonte: compras.parquet (match 8944695348, t=500,1s); api.opendota.com/heroes/113/itemPopularity (early_game_items, hand_of_midas=88); constants_abilities.json (arc_warden_tempest_double: "can use all of Arc Warden's current items and spells... has separate item and ability cooldowns"); items.json (hand_of_midas)

#### Maelstrom (maelstrom)
- minuto: 13:35 (replay 8944695348)
- porque: 25% de chance por ataque de soltar um raio que salta em até 4 alvos num raio de 650, multiplicando o farm de jungle e o poke de lane antes da Mjollnir sair.
- detalhe: é o item mais comprado na fase mid do agregado público (87 ocorrências), na frente do Hyperstone (75), o componente que entra na receita do Mjollnir.
- combo: depois da Tempest Double, cada cópia tem seu próprio Maelstrom com chance de proc independente, então uma luta ou um camp grande recebe o dobro de raios saltando ao mesmo tempo.
- fonte: compras.parquet (match 8944695348, t=815,3s); items.json (maelstrom: chain_chance 25, chain_strikes 4, chain_radius 650, chain_damage 110); api.opendota.com/heroes/113/itemPopularity (mid_game_items, maelstrom=87)

#### Mjollnir (mjollnir)
- minuto: 15:38 (replay 8944695348, via Hyperstone + Maelstrom + recipe)
- porque: mantém e evolui o chain lightning do Maelstrom (de 4 para 12 alvos, de 110 para 180 de dano por acerto) e soma +90 de velocidade de ataque mais um escudo de 15s com 20% de chance por segundo de descarregar 225 de dano mágico em até 4 alvos a até 900 de distância.
- detalhe: o static charge não dispara mais de uma vez por segundo e ignora alvo invisível ou fora de visão; com +90 de ataque, farm de jungle e DPS em luta sobem juntos.
- contra: grupos de creeps e ondas de ilusão, que o chain lightning (raio 650, agora até 12 alvos) e o static charge acertam em várias unidades de uma vez.
- combo: a Tempest Double com Mjollnir próprio multiplica os dois efeitos (chain lightning do ataque normal e static charge) de forma independente, cada cópia com seu cooldown de 1s pro static e 0,2s pro chain.
- fonte: compras.parquet (match 8944695348, t=938,6s, via item_hyperstone t=896,7s e item_maelstrom t=815,3s); items.json (mjollnir: bonus_attack_speed 90, static_chance 20, static_strikes 4, static_damage 225, static_radius 900, static_cooldown 1.0, chain_chance 25, chain_strikes 12, chain_damage 180, chain_cooldown 0.2)

#### Boots of Travel (travel_boots)
- minuto: 19:30 (replay 8944695348)
- porque: Boots of Travel não é consumível, então a Tempest Double nasce com ele plenamente funcional, dá pra abrir TP em dois pontos do mapa ao mesmo tempo, splitando duas lanes ou fugindo em direções diferentes.
- detalhe: reduz o cooldown do pergaminho de TP e permite teleportar pra unidade/herói aliado, não só pra construção.
- combo: a Tempest Double com Travel Boots splita uma lane sozinha enquanto o Arc Warden de verdade segue com o time (ou o contrário), e qualquer uma das duas pode voltar de TP pra entrar numa luta.
- fonte: compras.parquet (match 8944695348, t=1170,4s); items.json (travel_boots); constants_abilities.json (arc_warden_tempest_double: duplicata não usa "most consumables and items that drop on death"; Boots of Travel não é consumível)

#### Aghanim's Shard (aghanims_shard)
- minuto: 20:02 (replay 8944695348)
- porque: a Tempest Double nasce com os efeitos de runa de Arcano, Invisibilidade e Haste por tempo limitado, saindo do cast já com mana cheia e furtiva, sem precisar pegar runa pra isso.
- detalhe: essas runas emprestadas pelo Shard não dão as cargas de atributo da passiva Runic Infusion, e o efeito vale só pra Tempest Double, não pro Arc Warden original.
- combo: double invisível nos primeiros segundos consegue reposicionar sem ser vista antes de entrar na luta ou de fugir já com a farm feita.
- fonte: compras.parquet (match 8944695348, t=1202,0s); dotacoach.gg/en/heroes/arc-warden (confirma o efeito do Shard no 7.41: runas de Arcano, Invisibilidade e Haste na Tempest Double); constants_hero_abilities.json (facet arc_warden_runed_replica, mesmo texto de runas por nível, reaproveitado hoje como efeito do Shard)

#### Hurricane Pike (hurricane_pike)
- minuto: 23:50 (replay 8944695348, via Dragon Lance + Force Staff + recipe)
- porque: empurra Arc Warden e o alvo 425 de distância um do outro (ou 600 se usado em si mesmo) e dá 5 ataques sem limite de alcance por 6s, servindo tanto pra abrir distância de quem tenta travar ele quanto pra garantir ataques que procam Mjollnir contra alvo fugindo.
- detalhe: não funciona em alvo dentro de Chronosphere, Duel ou Black Hole; o bônus de alcance não acumula com o da Dragon Lance, ele substitui.
- contra: iniciadores corpo a corpo tentando fechar em cima do Arc Warden, que é item-dependente e morre rápido se travado; o empurrão de 425 já cria distância antes do disable chegar.
- fonte: compras.parquet (match 8944695348, t=1430,8s, via item_dragon_lance t=1257,5s e item_force_staff t=1414,4s); items.json (hurricane_pike: push_length 600, enemy_length 425, range_duration 6, max_attacks 5, bonus_attack_speed 100)

#### Black King Bar (black_king_bar)
- minuto: 27:47 (replay 8944695348)
- porque: segura silence ou stun de alvo único por 9/8/7s pra garantir que o farm de Midas e os procs de Mjollnir continuem rolando numa luta, já que ele não tem nenhum dispel ou imunidade própria no kit.
- contra: silences e disables de alvo único que travariam o cast da Tempest Double ou o uso de item no meio da luta.
- fonte: compras.parquet (match 8944695348, t=1667,3s); items.json (black_king_bar: duration "9 / 8 / 7", spell_reduce 60)

#### Eye of Skadi (skadi)
- minuto: 31:49 (replay 8944695348, via 2x Ultimate Orb + Orb of Frost)
- porque: todo ataque (do Arc Warden e, depois, de cada Tempest Double) passa a reduzir 50% de velocidade de movimento em alvo ranged (25% em melee) e 20% de velocidade de ataque por 3s, travando quem tentaria fugir do combo de Flux + Spark Wraith + raios.
- contra: carries e escapistas de hit-and-run, porque o slow de ataque somado ao Mjollnir/Maelstrom já em cima dificulta a fuga depois do primeiro acerto.
- fonte: compras.parquet (match 8944695348, t=1909,6s); items.json (skadi: cold_slow_ranged -50, cold_slow_melee -25, cold_attack_slow_ranged -20, cold_duration 3.0)

#### Orchid Malevolence (orchid)
- minuto: 35:38 (replay 8944695348)
- porque: silencia o alvo isolado por 5s e devolve 30% do dano que ele tomar durante o silence como dano mágico bônus, fechando o combo com o Flux, que só causa dano se o alvo já estiver sozinho.
- combo: Flux isola o alvo (dano zerado se outro inimigo estiver perto) e o Orchid completa o isolamento impedindo heal, disable ou fuga por 5s, enquanto o próprio dano do Flux conta pro bônus de 30%.
- fonte: compras.parquet (match 8944695348, t=2138,3s); items.json (orchid: silence_duration 5, silence_damage_percent 30); constants_abilities.json (arc_warden_flux: "the damage is not applied if another enemy unit is near the target")

#### Bloodthorn (bloodthorn)
- minuto: 37:18 (replay 8944695348)
- porque: upgrade do Orchid com True Strike (ignora evasão) durante o silence e mais dano bônus por ataque (50 contra herói), fechando o mesmo combo de isolamento contra alvo com evasão alta, que escaparia do dano físico do Mjollnir/Maelstrom.
- contra: carries de evasão (Butterfly, Phantom Assassin, Windranger), que sobreviveriam ao resto do dano físico sem o True Strike.
- fonte: compras.parquet (match 8944695348, t=2238,3s, via item_recipe_bloodthorn); items.json (bloodthorn: silence_duration 5, spell_amp_debuff 35, proc_damage_heroes 50, passive_proc_damage 60)

#### Boots of Travel 2 (travel_boots_2)
- minuto: 44:10 (replay 8944695348)
- porque: upgrade tardio de puro valor (mais velocidade de movimento, cooldown e canal de TP menores); não muda decisão tática, só estica o mapa que ele e a Tempest Double conseguem splitar.
- fonte: compras.parquet (match 8944695348, t=2650,6s); items.json (travel_boots_2)

### Situacionais

#### Blink Dagger (blink)
- porque: blinka até 1200 de distância na hora, cobrindo o reposicionamento que falta sem Hurricane Pike: fecha em alvo isolado pro Flux ou foge.
- contra: jogos sem Hurricane Pike pronto a tempo, quando falta um jeito rápido de reposicionar antes de uma iniciação inimiga ou de fechar em cima de um alvo isolado pro Flux.
- fonte: api.opendota.com/heroes/113/itemPopularity (mid_game_items, blink=15); items.json (blink: blink_range 1200)

#### Shadow Blade (invis_sword)
- porque: 17s de invisibilidade, que só quebra ao atacar ou lançar magia, deixa chegar perto de um alvo isolado sem ser visto antes do Flux.
- contra: linhas de visão inimigas carregadas (wards, Observer) que impedem o Arc Warden de se aproximar sem ser visto pra isolar um alvo com Flux; os 17s de invisibilidade também servem pra puxar Roshan ou fugir sem ser perseguido.
- fonte: api.opendota.com/heroes/113/itemPopularity (mid_game_items invis_sword=6, late_game_items invis_sword=3); items.json (invis_sword: windwalk_duration 17.0)

#### Monkey King Bar (monkey_king_bar)
- porque: fura evasão alta (80% de chance, +70 de dano mágico por ataque) antes do Bloodthorn sair, mantendo os procs de Mjollnir/Maelstrom relevantes.
- contra: carries de evasão alta quando o Arc Warden ainda não tem Bloodthorn no inventário; 80% de chance de ignorar a evasão e somar 70 de dano mágico por ataque.
- fonte: api.opendota.com/heroes/113/itemPopularity (mid_game_items monkey_king_bar=7, late_game_items=3); items.json (monkey_king_bar: bonus_chance 80, bonus_chance_damage 70)

#### Butterfly (butterfly)
- porque: +30 Agilidade, +30 de dano e 35% de evasão (valor 7.41f) dão a sobrevivência que falta pro Arc Warden enquanto ele ainda monta o resto do build.
- contra: composições de dano físico pesado tentando focar o Arc Warden, que é item-dependente e sem fuga própria fora do Blink/Hurricane Pike; no patch 7.41f dá +30 de Agilidade, +30 de dano e 35% de evasão (valor vigente, o items.json local ainda traz o número antigo de +35 Agi/+25 dano).
- fonte: dotacoach.gg/en/items/butterfly (valor 7.41f: +30 Agi/+30 dano/35% evasão); api.opendota.com/heroes/113/itemPopularity (late_game_items, butterfly=4)

#### Scythe of Vyse (sheepstick)
- porque: os 2,8s de Hex travam esse herói específico na hora certa, da iniciação ou da channel da Tempest Double, e resistem a dispel fraco.
- contra: o único herói do time inimigo capaz de fugir ou cancelar a Tempest Double antes dela render (transforma em critter por 2,8s, mudo e desarmado, e destrói ilusões na hora).
- fonte: api.opendota.com/heroes/113/itemPopularity (late_game_items, sheepstick=14); items.json (sheepstick: sheep_duration 2.8, dispellable "Strong Dispels Only")

## Roshan

Sem solo confirmado nos replays locais. O dataset (dota-roshan-solo) tem só 2 aparições do Arc Warden no fosso: uma classificada "time" (partida pro, morte aos 13:16, Arc Warden com 54,7% do dano entre 4 aliados no fosso, nenhum solo) e uma "solo_com_suporte" em turbo (morte aos 26:22, nível 29, 85,1% do dano em 18,4s, inventário Bloodthorn + Mjollnir + Travel Boots 2 + Eye of Skadi + Hydra's Breath + Daedalus), mas com Dark Willow, Monkey King e Pudge por perto do fosso (Monkey King inclusive levou o acerto final), então não conta como solo isolado. Amostra pequena (2 jogos, nenhum deles solo puro) não dá pra tirar minuto ou nível medianos confiáveis.

Fonte: dota-roshan-solo/data/solos.json
