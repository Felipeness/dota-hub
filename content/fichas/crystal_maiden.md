---
id: ficha-crystal_maiden
titulo: "Crystal Maiden"
heroi: Crystal Maiden
patch: 7.41
posicoes: [5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- https://api.opendota.com/api/heroes/5/itemPopularity
- https://dotacoach.gg/heroes/crystal-maiden/builds/support
- https://dotacoach.gg/heroes/crystal-maiden
- https://dota2protracker.com/hero/Crystal-Maiden
---
## Resumo
Crystal Maiden é suporte duro de int, sem mobilidade própria e com a vida mais baixa do jogo (120 de vida base, 0 de armadura, OpenDota heroStats.json), mas com o pacote de control e aura de mana mais forte da função: Frostbite trava o alvo, Crystal Nova atinge área e Freezing Field (ult) é um canalizado de dano em massa. No dotacoach.gg o guia dela é catalogado só como Hard Support, o que confirma: é jogo de pos 5, não de farm.

## Pos 5 (suporte duro)
- quando pegar: pegue quando seu time precisa de control confiável em área (Frostbite + Crystal Nova) e de aura de mana pro time todo (Arcane Aura); é a posição quase exclusiva da herói, sem registro relevante como pos 4 na fonte consultada (dotacoach.gg/heroes/crystal-maiden).
- itens iniciais: tango, blood_grenade, magic_stick, enchanted_mango, branches, branches, ward_observer, ward_sentry

### Build
#### Tranquil Boots (tranquil_boots)
- porque: bota mais barata com regen alto pra ficar na lane sem gastar clarity toda hora.
- detalhe: dá 65 de velocidade e 14 de regen de vida passiva, mais uma cura ativa de 250 ao longo de 20s. Quebra por 13s (cai pra 40 de bônus) se ela levar dano, então não é bota de luta.
- fonte: items.json (tranquil_boots); dotacoach.gg/heroes/crystal-maiden/builds/support

#### Magic Wand (magic_wand)
- porque: carrega com qualquer feitiço inimigo visível e devolve vida e mana no all-in da lane.
- detalhe: ganha carga quando um inimigo visível lança feitiço num raio de 1200, até 20 cargas guardadas, cada uma devolvendo 15 de bônus (vida ou mana), recarrega sozinho.
- fonte: items.json (magic_wand); dotacoach.gg/heroes/crystal-maiden/builds/support

#### Wind Lace (wind_lace)
- porque: +15 de velocidade de movimento por 225 de ouro pra kitar e fechar Frostbite na lane.
- detalhe: item barato e cedo, vira Drum of Endurance depois. Serve tanto pra perseguir quanto pra fugir.
- fonte: items.json (wind_lace); dotacoach.gg/heroes/crystal-maiden/builds/support

#### Infused Raindrops (infused_raindrop)
- porque: bloqueia até 120 de dano mágico de uma nuke e devolve 0,8 de regen de mana, direto contra poke de lane.
- detalhe: 6 cargas, só ativa contra feitiços de 75+ de dano. É o item certo contra mid ou offlane que fica pokando a lane com nuke.
- contra: nukes de lane tipo as da maioria dos midlaners de int com dano direto.
- fonte: items.json (infused_raindrop)

#### Glimmer Cape (glimmer_cape)
- porque: some por 5s com +20 de armadura mágica, exatamente o tempo de atravessar território aberto pra lançar Frostbite.
- detalhe: dá 375 de bloqueio de dano físico (barreira) e 20 de velocidade enquanto ativa; o fade começa 0,5s depois do cast. Pode usar em si mesma ou em aliado.
- contra: iniciações com burst mágico ou ataques físicos concentrados num único alvo.
- combo: Glimmer em si mesma pra se aproximar sem ser vista e abrir a luta com Frostbite ou Freezing Field.
- fonte: items.json (glimmer_cape); OpenDota itemPopularity hero 5 (14,1% dos itens de meio de jogo, 13,4% de fim de jogo)

#### Aghanim's Shard (aghanims_shard)
- porque: é o item mais comprado no meio de jogo pela herói (27% das partidas, OpenDota) porque dá Crystal Clone, a única mobilidade real dela.
- detalhe: desliza 275 de distância, cria um clone com 150 de vida que desvia projéteis por até 5s; quando o clone morre ou expira, estilhaça e aplica Frostbite num raio de 450. Custa 150 de mana, recarga 10s.
- contra: heróis que dependem de um projétil de alvo único pra abrir a luta nela (o clone desvia o projétil no lugar dela).
- combo: deslizar pra dentro do alcance de um inimigo e deixar o clone estourar: ele aplica Frostbite nele de graça quando morre.
- fonte: constants_abilities.json (crystal_maiden_crystal_clone); OpenDota itemPopularity hero 5 (27,0% mid game)

#### Force Staff (force_staff)
- porque: empurra 600 de distância em 0,5s, dá tempo de reposicionar antes de canalizar Freezing Field com segurança.
- detalhe: +10 de inteligência e 175 de vida fixos; funciona em si mesma ou em aliado, não interrompe as ações de quem recebe.
- combo: usar em aliado que iniciou mal pra puxar ele de volta antes do inimigo fechar o cerco.
- fonte: items.json (force_staff); OpenDota itemPopularity hero 5 (8,1% mid, 9,8% late)

#### Blink Dagger (blink)
- porque: entra em alcance de Frostbite ou já começa a canalizar Freezing Field sem precisar caminhar exposta.
- detalhe: 1200 de alcance, trava por 3s depois de levar dano de herói ou torre (não pode blinkar de novo nesse intervalo).
- combo: blinkar pro meio da luta e abrir Freezing Field direto, sem gastar os 10s de canalização caminhando até lá.
- fonte: items.json (blink); OpenDota itemPopularity hero 5 (13,0% mid, 24,1% late, o item mais comum de fim de jogo)

#### Drum of Endurance (ancient_janggo)
- porque: barato pra suporte duro e dá aura de velocidade de movimento e ataque pro time no push junto com a ult dela.
- detalhe: item de aura em área, cobre o custo de oportunidade de não comprar nada de dano.
- fonte: items.json (ancient_janggo); OpenDota itemPopularity hero 5 (5,9% mid game)

#### Boots of Bearing (boots_of_bearing)
- porque: upgrade da Tranquil que troca a cura individual por aura de velocidade e regen pro time inteiro.
- detalhe: 20 de velocidade e 2,5 de regen de vida em aura de 1200 de raio, mais 50% de velocidade de ataque e 15% de velocidade de movimento por 6s pra quem a ativa.
- fonte: items.json (boots_of_bearing); OpenDota itemPopularity hero 5 (3,6% late game)

#### Aghanim's Scepter (ultimate_scepter)
- porque: deixa ela se mover, atacar e lançar feitiço durante a canalização de Freezing Field, que normalmente a imobiliza por 10s.
- detalhe: ela anda 75% mais lenta durante o canal e o número total de explosões sobe 20%; o canal continua podendo ser interrompido por disable inimigo. +10 em todos os atributos, +175 de vida e mana.
- contra: lutas em que ela precisaria se reposicionar ou fugir no meio dos 10s de ult, o que sem o scepter é suicídio.
- fonte: items.json (ultimate_scepter); dotacoach.gg/heroes/crystal-maiden; OpenDota itemPopularity hero 5 (7,1% late game)

#### Black King Bar (black_king_bar)
- porque: a maioria dos disables de alvo único não atravessa imunidade a feitiço, então o BKB garante entregar a ult sem ser travada antes.
- detalhe: imunidade a feitiço por 9/8/7s conforme o número de BKBs já comprados no time; não protege contra habilidades marcadas como "atravessa BKB".
- contra: times com várias fontes de disable de alvo único tentando focar ela antes da luta.
- fonte: items.json (black_king_bar); constants_abilities.json (crystal_maiden_frostbite, bkbpierce: No); OpenDota itemPopularity hero 5 (11,6% late game)

#### Wind Waker (wind_waker)
- porque: item de fim de jogo pra tirar um aliado-chave (ou ela mesma) de uma iniciação, com dano e um cyclone de resgate.
- detalhe: entra como opção tardia quando o jogo já passou da fase de controle simples e precisa de um save garantido.
- fonte: dotacoach.gg/heroes/crystal-maiden/builds/support; items.json (wind_waker)

### Situacionais
#### Ghost Scepter (ghost)
- porque: vira etérea por 4s, imune a ataque físico, exatamente contra carries de dano físico que a focam pra matar primeiro.
- detalhe: +5 em todos os atributos; durante os 4s ela toma 30% mais dano mágico, então não serve contra equipes de dano mágico.
- contra: carries ou offlaners de right-click que fazem dive nela antes do suporte principal.
- fonte: items.json (ghost)

#### Solar Crest (solar_crest)
- porque: dá +7 de armadura e uma bolha de 350 de absorção de dano pro carry do time, bom contra composições de poke e burst.
- detalhe: compartilha recarga com Pavise (não dá pra ter os dois ativos ao mesmo tempo); também reduz a armadura de um inimigo no ataque seguinte se usado nele.
- contra: times que tentam abater o carry aliado com burst concentrado antes do CM conseguir lançar Frostbite.
- fonte: items.json (solar_crest)

#### Lotus Orb (lotus_orb)
- porque: reflete de volta um feitiço de alvo único lançado nela ou no aliado protegido, contra heróis de disable ou nuke de alvo único.
- detalhe: +10 de armadura e regen de vida e mana fixos; o efeito reflexivo (Echo Shell) não é acionado por itens neutros de alvo único.
- contra: heróis que dependem de um disable ou nuke pontual pra abrir a luta nela (ex: hex, silence de alvo único).
- fonte: items.json (lotus_orb)

#### Eul's Scepter of Divinity (cyclone)
- porque: ciclone de 2,5s pra tirar ela ou um aliado de uma iniciação, ou pra travar um alvo antes de fechar o combo com Frostbite.
- detalhe: dá regen de mana e inteligência fixos fora do uso ativo; também serve pra se dispelar de um debuff.
- contra: heróis de dano físico alto e burst rápido que a matariam antes de ela conseguir reagir de outra forma.
- fonte: items.json (cyclone)

#### Black King Bar (black_king_bar, situacional antes do core, contra disable pesado)
- porque: com 2+ fontes de disable de alvo único no draft inimigo, comprar BKB antes do resto evita que ela seja travada sem lançar nada.
- detalhe: mesma mecânica do item core, só muda o momento da compra conforme o draft inimigo.
- contra: drafts com disable em dobro focado em suporte duro.
- fonte: items.json (black_king_bar)

#### Aeon Disk (aeon_disk)
- porque: ativa sozinho sob 70% de vida, dando 2,5s de imunidade a feitiço e 75% de resistência a status, contra all-in que a matariam de um golpe.
- detalhe: 250 de vida e 300 de mana fixos, recarga de 105 a 165s conforme o nível; não precisa ser acionado manualmente.
- contra: all-ins coordenados (iniciação + burst) contra o suporte duro antes que o time dela consiga reagir.
- fonte: items.json (aeon_disk)

## Roshan
Sem dado de Roshan solo.
