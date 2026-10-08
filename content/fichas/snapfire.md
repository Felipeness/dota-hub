---
id: ficha-snapfire
titulo: "Snapfire"
heroi: Snapfire
patch: 7.41
posicoes: [2, 3, 4, 5]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_patch.json
- dota-imortal/data/opendota/items.json
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- dota-roshan-solo/data/early_rosh_pro.json
- dota-roshan-solo/data/late_rosh_pro.json
- dota-tier1/work/equipes/betboom/hub.json
- dota-tier1/work/equipes/falcons/hub.json
- dota-tier1/work/equipes/lgd/hub.json
- dota-tier1/work/equipes/team-spirit/hub.json
- dota-tier1/work/equipes/yandex/hub.json
- dota-tier1/work/equipes/nigma/hub.json
- https://api.opendota.com/api/heroes/128/itemPopularity
- https://api.opendota.com/api/scenarios/itemTimings?item=blink
- https://dotacoach.gg/heroes/snapfire
- https://dotacoach.gg/heroes/snapfire/builds/support
- https://dotacoach.gg/heroes/snapfire/builds/offlane
- https://liquipedia.net/dota2/Snapfire
---
## Resumo
No OpenDota ela carrega as tags Support, Nuker, Disabler e Escape (heroes.json), e no dotacoach.gg (7.41f, taxa de seleção por role) isso bate: ela sai como suporte em 38,4% das partidas (48,6% de vitórias) e suporte duro em 28,9% (49,4%), mas também é mid em 23,8% (50,3%, a maior taxa das quatro reais) e offlane em 7,9% (48,6%); carry é 0,9% com 40,1%, fora da curva e fora desta ficha. No Atlas tier1 do patch ela aparece bem mais como mid iniciadora do que como suporte de ward: BetBoom (gpk) pegou 13 vezes na pos 2, Falcons (Malr1ne) 10 (60% de vitórias), Team Spirit (Larl) 5 (80%) e Yandex (CHIRA_JUNIOR) 7 (57%), a própria Yandex ainda a flexa pra pos 4 (5x) e pos 5 (1x), e a LGD (Wisper) joga ela 7 vezes na pos 3 com 71%. A Nigma a bane 17 vezes (quase só no roster B) chamando ela de "herói de roaming e pickoff". O kit é sobre travar perto e empurrar: Boomstick dá até 35% de dano bônus quanto mais perto do inimigo (constants_abilities.json), Firesnap Cookie salta e atordoa quem aterrissa, e a ultimate Mortimer Kisses é uma barragem de 5,5s em que ela fica com o giro reduzido e continua exposta até o fim do combo (constants_abilities.json, snapfire_mortimer_kisses).

## Pos 2 (mid)
- quando pegar: maior taxa de vitória das quatro roles reais no dotacoach.gg (50,3% em 23,8% das partidas do 7.41f). No Atlas tier1 é a posição mais picada pra ela: BetBoom, Falcons, Team Spirit e Yandex a levaram pro meio como iniciadora, não como farmer.
- itens iniciais: tango, blood_grenade, magic_stick, faerie_fire, branches, branches

### Build
#### Boots of Travel (travel_boots)
- porque: recarga de TP cai pra 40s, ela chega na rotação pra abrir com Firesnap Cookie antes do inimigo se reposicionar.
- detalhe: +90 de velocidade de movimento, 800 de distância máxima pro teleporte. É o 3º item mais comprado nessa fase da amostra do OpenDota pra ela (34 ocorrências no meio de jogo, atrás de Aghanim's Shard e Blink Dagger, e na frente de Arcane Boots), sinal de que quem joga ela de mid prioriza mapa sobre mana.
- fonte: items.json (travel_boots); OpenDota itemPopularity hero 128 (34 no meio de jogo)

#### Blink Dagger (blink)
- minuto: ~20 (pico da distribuição de compra, pode variar de 15 a 30)
- porque: fecha o gap pra abrir com Firesnap Cookie em quem tá fora de posição, sem precisar caminhar exposta.
- detalhe: 1200 de alcance, trava por 3s depois de levar dano de herói ou Roshan. Na amostra do OpenDota é o 2º item mais comprado do meio de jogo pra ela (65 ocorrências), com o grosso das compras entre 20 e 25 min (404 jogos no bucket de 20 min, 353 no de 25).
- combo: Blink pra dentro do grupo errado, Firesnap Cookie salta e atordoa 1 a 2,2s no pouso (escala com nível), Scatterblast fecha com o cone que dá 30% mais de dano e 50% mais de duração no slow em quem tá a até 450 de distância (point-blank).
- fonte: items.json (blink); constants_abilities.json (snapfire_firesnap_cookie, snapfire_scatterblast); OpenDota itemPopularity hero 128 (65 no meio de jogo); OpenDota scenarios/itemTimings?item=blink (hero_id 128: 600s=59, 720s=113, 900s=242, 1200s=404, 1500s=353, 1800s=170 jogos)

#### Aghanim's Shard (aghanims_shard)
- porque: Firesnap Cookie passa a curar o alvo e lançar uma Mortimer Kisses fraca no pouso, dois efeitos com um cast só.
- detalhe: é o item mais comprado no meio de jogo pra ela na amostra do OpenDota (77 ocorrências, na frente até de Blink). A descrição exata da melhoria vem da Liquipedia: a Shard "upgrades Firesnap Cookie to also heal the affected ally and launch a weaker Mortimer Kisses glob".
- combo: Firesnap Cookie em si mesma ou num aliado puxa o heal e já solta o glob de dano em quem estiver no pouso, sem gastar mana da ultimate de verdade.
- fonte: items.json (aghanims_shard); Liquipedia (Snapfire, seção de upgrades); OpenDota itemPopularity hero 128 (77 no meio de jogo, a mais comprada da fase)

#### Black King Bar (black_king_bar)
- porque: bloqueia o disable de alvo único que a travaria antes ou durante a sequência de iniciação (Blink + Firesnap Cookie + Mortimer Kisses), e o dispel básico ao ativar tira debuffs que já estiverem nela.
- detalhe: 9/8/7s de imunidade a magia, 60% de resistência mágica e dispel básico ao ativar; na amostra do OpenDota aparece 8 vezes no meio e 33 no fim de jogo pra ela, a late item mais comum ao lado de Yasha and Kaya.
- contra: disables de alvo único (hex, stun, silence) que a travariam antes de ela soltar o combo ou impediriam o Blink de iniciação.
- fonte: items.json (black_king_bar); constants_abilities.json (snapfire_mortimer_kisses); OpenDota itemPopularity hero 128 (8 meio, 33 fim de jogo)

#### Yasha and Kaya (yasha_and_kaya)
- porque: 25% de cast speed deixa Scatterblast e Mortimer Kisses saindo mais rápido, e 12% de spell amp aumenta todo o dano mágico do kit.
- detalhe: também dá 40% de amplificação de regen de mana, bom pro gasto alto de Mortimer Kisses e Scatterblast em sequência. É o 2º item mais comum do fim de jogo na amostra (32 ocorrências, Kaya sozinho aparece 53 vezes no meio de jogo como primeiro passo).
- fonte: items.json (yasha_and_kaya, kaya); OpenDota itemPopularity hero 128 (53 Kaya no meio, 32 Yasha and Kaya no fim de jogo)

### Situacionais
#### Shiva's Guard (shivas_guard)
- porque: a aura de -45 de velocidade de ataque desliga carries de hit rápido tipo Troll Warlord ou Phantom Assassin, que dependem de atacar muito pra valer o item.
- detalhe: +17 de armadura, Arctic Blast de 260 de dano mágico e 40% de slow por 4s num raio de 825; 3ª escolha mais comum do fim de jogo na amostra pra ela (27 ocorrências).
- contra: carries ou offlaners de ataque rápido (Troll Warlord, Phantom Assassin, Monkey King) que ela precisa travar em luta parada.
- fonte: items.json (shivas_guard); OpenDota itemPopularity hero 128 (27 no fim de jogo)

#### Refresher Orb (refresher)
- porque: reseta todas as recargas, incluindo a de Mortimer Kisses, pra uma segunda barragem de 5,5s na mesma luta ou no Roshan.
- detalhe: 5000 de ouro, recarga própria de 180s, só funciona com o item no inventário principal; 19 ocorrências no fim de jogo na amostra, a 4ª mais comum dessa fase pra ela.
- contra: lutas longas de atrito ou objetivo que se arrasta (torre alta vida, Roshan com o time), onde o segundo cast da ultimate decide.
- fonte: items.json (refresher); constants_abilities.json (snapfire_mortimer_kisses); OpenDota itemPopularity hero 128 (19 no fim de jogo)

#### Scythe of Vyse (sheepstick)
- porque: hex de 2,8s cala, desarma e deixa o alvo andando devagar (velocidade fixa em 140) de quem seria o maior risco pra ela entrar no meio da luta.
- detalhe: +30 de inteligência e 8,5 de regen de mana fixos; 15 ocorrências no fim de jogo na amostra, pouco atrás de Shiva's e Refresher.
- contra: o carry ou iniciador inimigo que ela precisa tirar da luta antes de soltar Mortimer Kisses.
- fonte: items.json (sheepstick); OpenDota itemPopularity hero 128 (15 no fim de jogo)

## Pos 3 (offlane)
- quando pegar: 7,9% de seleção no dotacoach.gg (7.41f), 48,6% de vitórias. No Atlas tier1 a LGD (Wisper) jogou ela 7 vezes nessa posição com 71% de vitórias, descrita como "iniciador com Blink que também farma".
- itens iniciais: tango, magic_stick, branches, branches, blood_grenade, ward_sentry

### Build
Mesma espinha dorsal do pos 2 (Blink Dagger, Aghanim's Shard), confirmada pelo guia in-game de TORTE DE LINI (patch 7.41e, offlane) no dotacoach.gg, que lista o núcleo como Arcane Boots, Aghanim's Shard e Blink Dagger nessa ordem. Esse guia não lista Black King Bar como core de offlane.

#### Arcane Boots (arcane_boots)
- porque: dá fôlego de mana pra ela e pro resto da lane pra girar Scatterblast e Firesnap Cookie na troca de levels, em vez de só autoatacar.
- detalhe: +45 de velocidade de movimento e 150 de mana devolvida num raio de 1200 ao ativar; é a 2ª bota mais comum do meio de jogo na amostra do OpenDota pra ela (27 ocorrências, atrás de Boots of Travel com 34), e o guia de TORTE DE LINI a lista como 1º item core da offlane.
- fonte: items.json (arcane_boots); dotacoach.gg/heroes/snapfire/builds/offlane (guia TORTE DE LINI, 7.41e); OpenDota itemPopularity hero 128 (27 no meio de jogo)

#### Blink Dagger (blink)
- porque: igual ao pos 2, fecha o gap pra abrir com Firesnap Cookie em quem tá fora de posição, mas aqui também serve pra sair da troca de offlane sem BKB.
- detalhe: 1200 de alcance, trava 3s após dano de herói ou Roshan. Listado como core por TORTE DE LINI.
- fonte: items.json (blink); dotacoach.gg/heroes/snapfire/builds/offlane (guia TORTE DE LINI, 7.41e)

#### Aghanim's Shard (aghanims_shard)
- porque: mesmo combo do pos 2, Firesnap Cookie cura o alvo e solta uma Mortimer Kisses fraca no pouso.
- detalhe: TORTE DE LINI lista como core de offlane, junto com Arcane Boots e Blink.
- combo: Firesnap Cookie no aliado que vai trocar na lane dá o heal certo na hora do all-in.
- fonte: items.json (aghanims_shard); Liquipedia (Snapfire); dotacoach.gg/heroes/snapfire/builds/offlane (guia TORTE DE LINI, 7.41e)

### Situacionais
#### Vladmir's Offering (vladmir)
- porque: lifesteal e aura de dano ajudam ela a sobreviver trocando corpo a corpo na lane de offlane, que é mais hostil que o meio.
- detalhe: item listado como situacional por TORTE DE LINI no guia de offlane (7.41e); sem detalhamento de custo ou efeito exato nesse guia.
- contra: lane dura, com troca de dano físico constante contra ela.
- fonte: dotacoach.gg/heroes/snapfire/builds/offlane (guia TORTE DE LINI, 7.41e)

#### Solar Crest (solar_crest)
- porque: +5 de armadura, 60 de velocidade de ataque e barreira de 350 de dano físico pro carry aliado, bom pra proteger quem ela tá iniciando pra cima do inimigo.
- detalhe: compartilha recarga com Pavise, duração de 7s, sem bônus se usado em si mesma.
- contra: composições de poke físico constante tentando abater o carry do time antes da luta principal.
- fonte: items.json (solar_crest); dotacoach.gg/heroes/snapfire/builds/offlane (guia TORTE DE LINI, 7.41e); OpenDota itemPopularity hero 128 (1 ocorrência no meio, 3 no fim de jogo)

## Pos 4 (suporte de roaming)
- quando pegar: 38,4% de seleção no dotacoach.gg (7.41f), a role mais escolhida pra ela, 48,6% de vitórias. A Yandex a flexou pra essa posição 5 vezes no Atlas tier1.
- itens iniciais: tango, blood_grenade, magic_stick, faerie_fire, branches, branches, ward_observer, ward_sentry

### Build
#### Arcane Boots (arcane_boots)
- porque: devolve mana pra ela e pro time perto, essencial pra girar Firesnap Cookie em cada all-in de roam.
- detalhe: +45 de velocidade, 150 de mana num raio de 1200 ao ativar. Primeiro item core do guia "Doch Coach" pra suporte no dotacoach.gg.
- fonte: items.json (arcane_boots); dotacoach.gg/heroes/snapfire/builds/support (guia Doch Coach, 7.41f)

#### Glimmer Cape (glimmer_cape)
- porque: fica invisível e ganha barreira de 375 de dano mágico por 5s, tempo de atravessar território aberto e acertar Firesnap Cookie sem ser interceptada antes.
- detalhe: +20 de velocidade enquanto ativa, pode usar em si mesma ou em aliado, fade começa 0,5s depois do cast; listado como 1º item de meio de jogo no guia de suporte do dotacoach.gg e aparece 9 vezes no meio e 8 no fim de jogo na amostra do OpenDota.
- contra: iniciação com um nuke mágico único de até 375 de dano, ou burst físico concentrado que a barreira não cobre.
- combo: Glimmer em si mesma pra se aproximar invisível e abrir com Firesnap Cookie antes do time inimigo notar.
- fonte: items.json (glimmer_cape); dotacoach.gg/heroes/snapfire/builds/support (guia Doch Coach, 7.41f); OpenDota itemPopularity hero 128 (9 meio, 8 fim de jogo)

#### Guardian Greaves (guardian_greaves)
- porque: cura 325 de vida e 200 de mana em área e tira a maioria dos efeitos negativos de si mesma ao ativar, bom pra sustentar troca prolongada de suporte.
- detalhe: aura de 2,5 de regen de vida e 1,5 de mana num raio de 1200, sobe pra 14,5 de regen quando a portadora cai abaixo de 25% de vida; listado no guia Doch Coach de suporte do dotacoach.gg.
- fonte: items.json (guardian_greaves); dotacoach.gg/heroes/snapfire/builds/support (guia Doch Coach, 7.41f)

#### Aghanim's Shard (aghanims_shard)
- porque: mesmo combo das outras posições, Firesnap Cookie cura o alvo e lança uma Mortimer Kisses fraca no pouso.
- detalhe: na amostra do OpenDota é o item mais comprado do meio de jogo pra ela (77 ocorrências) e o guia Doch Coach de suporte também lista como core de meio de jogo.
- combo: Firesnap Cookie no aliado que leva dive garante o heal junto do stun no atacante.
- fonte: items.json (aghanims_shard); Liquipedia (Snapfire); dotacoach.gg/heroes/snapfire/builds/support (guia Doch Coach, 7.41f); OpenDota itemPopularity hero 128 (77 no meio de jogo)

#### Force Staff (force_staff)
- porque: empurra 600 de distância em 0,5s, serve pra se reposicionar antes de lançar Firesnap Cookie ou pra puxar aliado que iniciou mal.
- detalhe: +10 de inteligência e 175 de vida fixos, não interrompe a ação de quem recebe; 5 ocorrências no meio e 10 no fim de jogo na amostra.
- contra: iniciação corpo a corpo que fecha distância rápido demais pro Glimmer Cape sozinho resolver.
- fonte: items.json (force_staff); dotacoach.gg/heroes/snapfire/builds/support (guia Doch Coach, 7.41f); OpenDota itemPopularity hero 128 (5 meio, 10 fim de jogo)

### Situacionais
#### Aeon Disk (aeon_disk)
- porque: dispara sozinho quando a vida cai abaixo de 70%, dando dispel forte e 2,5s de dano zerado, contra combo de burst que mataria a suporte antes dela soltar o combo.
- detalhe: +250 de vida e 300 de mana fixos, recarga sobe de 105 pra 165s a cada ativação; listado no guia de suporte do dotacoach.gg.
- contra: all-in coordenado (iniciação + burst) focado nela antes da equipe reagir.
- fonte: items.json (aeon_disk); dotacoach.gg/heroes/snapfire/builds/support (guia Doch Coach, 7.41f); OpenDota itemPopularity hero 128 (3 ocorrências no fim de jogo)

#### Lotus Orb (lotus_orb)
- porque: Echo Shell recasta de volta no conjurador feitiços de alvo único como hex ou Doom; ela ainda leva o efeito, mas pune quem iniciou em cima dela.
- detalhe: +10 de armadura, 250 de mana, escudo de 5s que recasta a maioria dos feitiços de alvo único de volta pro conjurador; o alvo protegido ainda sofre o efeito do feitiço original.
- contra: Lion, Shadow Shaman, Doom e outros disables de alvo único que tentariam travá-la antes do combo.
- fonte: items.json (lotus_orb); dotacoach.gg/heroes/snapfire/builds/support (guia Doch Coach, 7.41f); OpenDota itemPopularity hero 128 (4 ocorrências no fim de jogo)

## Pos 5 (suporte duro)
- quando pegar: 28,9% de seleção no dotacoach.gg (7.41f), 49,4% de vitórias, a 2ª maior taxa de vitória das quatro reais. A Yandex também a levou 1 vez pra essa posição no Atlas tier1.
- itens iniciais: tango, blood_grenade, magic_stick, faerie_fire, branches, branches, ward_observer, ward_sentry

### Build
O dotacoach.gg não separa um guia de item exclusivo pra suporte duro: a mesma build "Doch Coach" cobre Support e Hard Support. É a build do Pos 4 acima (Arcane Boots, Glimmer Cape, Guardian Greaves, Aghanim's Shard, Force Staff), só que aqui ela entra mais pra plantar observadora e sentinela cedo e segurar o farm do time do que pra roamar; a diferença é de jogo, não de item.

### Situacionais
#### Mekansm (mekansm)
- porque: cura 250 de vida em área antes de virar Guardian Greaves, prioridade de quem não tem ouro pra ir direto no item final.
- detalhe: aura de 2,5 de regen de vida num raio de 1200; listado no guia Doch Coach de suporte do dotacoach.gg.
- fonte: items.json (mekansm); dotacoach.gg/heroes/snapfire/builds/support (guia Doch Coach, 7.41f)

#### Spirit Vessel (spirit_vessel)
- porque: corta 70% da regeneração de vida do alvo por 8s, resposta direta contra lifesteal ou heal alto que sustentaria o inimigo em luta.
- detalhe: 4% da vida atual por segundo mais 25 de dano por segundo no modo contra inimigo; carrega com herói inimigo morrendo num raio de 1500.
- contra: heróis de lifesteal ou cura alta (Lifestealer, Dragon Knight com Vladmir's, qualquer composição de sustain).
- fonte: items.json (spirit_vessel); dotacoach.gg/heroes/snapfire/builds/support (guia Doch Coach, 7.41f)

## Roshan
Sem dado de Roshan solo pra ela. Snapfire não aparece como soloista em resumo_por_heroi.json nem nas listas de early_rosh_pro.json e late_rosh_pro.json (dota-roshan-solo/data), que cobrem os carries e cores que efetivamente solam o Roshan. Em resumo_com_suporte.json ela aparece só de forma marginal: 1 ocorrência cada em "suporte_no_fosso" de ursa, meepo, phantom_lancer e faceless_void, ou seja, uma vez por amostra em que ela estava perto do fosso enquanto outro herói fazia o solo, não como quem participa ativamente do abate. Não há base pra montar uma rotina de Roshan pra ela.
