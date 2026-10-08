---
id: confrontos-pugna
heroi: Pugna
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/pugna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shredder.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shadow_demon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/queenofpain.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/skywrath_mage.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/warlock.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/crystal_maiden.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rattletrap.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/sven.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/earthshaker.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
---

Pugna é suporte duro de int (pos 5 quase exclusiva no pro play atual, 427 jogos na amostra, gpm 337, xpm 465, lh10 13, nível final 16). O kit inteiro trava e amplifica dano mágico: Decrepify (80 mana, alcance 550-700, recarga 16-7s) prende o alvo 3,5s sem atacar nem ser atacado e soma 20-50% ao dano mágico que ele recebe; Nether Ward (80 mana, recarga 40s) bate em qualquer herói que lance feitiço perto, 50-110 de dano base mais até 1,6 por ponto de mana gasto; Life Drain (115-205 mana, alcance 700, canal) drena vida do inimigo ou cura aliado, e a passiva Oblivion Savant deixa Pugna lançar outro feitiço ou usar item no meio do canal. Importante pra qualquer leitura de confronto: as 4 habilidades têm bkbpierce: No nas constantes oficiais, então contra um alvo com Black King Bar ativo a kit inteira para de funcionar. Os 15 oponentes abaixo foram escolhidos por 4 critérios: os 6 com mais partidas de pro contra ele; os suportes de pos 4/5 que mais aparecem em pro (mesma função, concorrência direta); os de maior vantagem e maior desvantagem com 30+ jogos; e, mesmo Pugna não sendo carry, três cores que quase nunca compartilham lane com ele (Sven na sua própria safelane, Timbersaw e Mars na offlane) mas que decidem o jogo igual, exatamente o tipo de duelo "sem lane em comum" que mais fica de fora de uma ficha comum.

## Contra Jakiro (jakiro)

- placar: 87 vitórias em 174 partidas de pro (50,0%, fonte: OpenDota /heroes/45/matchups via pro_dados/pugna.json)
- por que importa: é o suporte que mais encontrou Pugna no pro play (174 partidas, o maior volume da lista), mesma função pos 5, rivalidade clássica de controle em área
- janelas: até 11min os dois farmam pouco e ficam perto da wave (gpm 315 dele contra 337 seu); ele fecha Arcane Boots aos 11:42 e você aos 11:06, praticamente empatado; a partir do nível 6 ele ganha o combo Ice Path (até 2s de stun) + Macropyre (até 200 de dano/seg por 10s, não dispelável), que vence qualquer troca em grupo se ele travar seu time primeiro; dos 21 aos 23min os dois compram Glimmer Cape quase junto (você 21:12, ele 22:48), você sai na frente por 1:36
- o que ele faz com você: Ice Path (100 mana, alcance 1100, raio 150) te prende, e com você preso ele lança Macropyre por cima; como Macropyre não é dispelável, uma vez que ela começa a queimar em cima de você não tem item que tire
- o que você faz com ele: Decrepify nele amplia em até 50% o dano mágico que ele recebe, justo porque o kit inteiro dele é mágico; Nether Ward pune cada feitiço que ele lançar perto, e como Macropyre custa até 500 de mana, o Ward sozinho pode bater cerca de 910 de dano nesse cast (110 de base mais 500×1,6)
- itens que viram: seu Nether Ward é o item que mais dói nele porque o kit dele é caro de mana; o Glimmer Cape dele tenta anular seu Decrepify, então feche o seu primeiro (21:12 contra 22:48 dele) pra não perder a corrida de proteção
- como jogar: não lance Decrepify assumindo que ele vai ficar parado, espere ele gastar Ice Path primeiro; plante Nether Ward nos pontos onde ele costuma se posicionar pra Macropyre, não espere o combo dele sair pra reagir
- fonte: pro_dados/pugna.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_macropyre, pugna_decrepify, pugna_nether_ward)

## Contra Snapfire (snapfire)

- placar: 78 vitórias em 153 partidas de pro (51,0%, fonte: OpenDota /heroes/45/matchups)
- por que importa: 2º maior volume de pro contra Pugna (153 jogos), suporte com iniciação própria que mostra o duelo de "quem abre a luta primeiro"
- janelas: ela sobe de nível bem mais rápido (lh10 21 contra os seus 13, gpm 413 contra 337); ela fecha Aghanim's Shard cedo, mediana 16:54 (item mais comprado dela no meio de jogo), e o Blink aos 20:42; você só fica seguro pra entrar em troca depois do Glimmer Cape (21:12) e do Aether Lens (22:36); entre 17 e 21min ela tem uma janela de 3-4min pra iniciar em cima do seu time antes de você ter proteção pronta
- o que ele faz com você: Firesnap Cookie (105 mana, alcance 650) salta e atordoa 1-2,2s no pouso; com Shard, ainda cura o alvo e solta uma Mortimer Kisses fraca; se ela pousa em cima de você, Decrepify não ajuda porque ela já está colada, não de longe
- o que você faz com ele: Decrepify nela trava os 35% de dano bônus do Boomstick (que só existe quando ela está perto do alvo) e soma ao dano mágico que ela recebe de volta; Nether Ward pune o combo caro dela, Scatterblast (85-100 mana) mais Mortimer Kisses (125-175 mana) passa fácil de 200 de mana somados
- itens que viram: o Shard dela (16:54) chega bem antes do seu Glimmer Cape (21:12), então nessa janela ela ataca primeiro; seu Glimmer Cape é a resposta real a essa janela, vale priorizar antes dos 20min se puder
- como jogar: plante Nether Ward nos pontos cegos onde ela costuma blinkar pra iniciar; não ande sozinho entre os 17 e os 21min, é a janela em que ela tem iniciativa e você não
- fonte: pro_dados/pugna.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_firesnap_cookie, snapfire_scatterblast, snapfire_mortimer_kisses, pugna_nether_ward)

## Contra Timbersaw (shredder)

- placar: 65 vitórias em 127 partidas de pro (51,2%, fonte: OpenDota /heroes/45/matchups)
- por que importa: 3º maior volume de pro contra Pugna, mas quase nunca compartilha lane com ele (Timbersaw é offlane pos 3, Pugna é suporte duro pos 5); mesmo sem lane em comum ele aparece direto nas suas lutas, é o tipo de duelo "sem lane" que mais fica de fora de uma ficha comum
- janelas: ele farma muito mais rápido (lh10 53 contra os seus 13, gpm 587 contra 337, nível final 21 contra 16); fecha Soul Ring aos 7:36 e Kaya aos 13:00, ficando forte em troca de dano mágico puro ainda na metade do jogo; o Blink dele sai aos 22:30 e o BKB aos 26:36, então dos 22 aos 27min ele pode iniciar em cima do seu time sem você conseguir travá-lo de volta
- o que ele faz com você: Whirling Death (100 mana, raio 325) é dano puro, ignora armadura e reduz seu atributo primário por 11-14s; como dano puro não tem mitigação mágica, nenhum item seu segura isso
- o que você faz com ele: Decrepify amplia em até 50% o dano mágico que ele recebe, ajudando seu time a estourar a Reactive Armor dele (que só reduz dano físico, não mágico nem puro); mas se ele já tiver BKB ativo (26:36 em diante), Decrepify e Nether Ward simplesmente não acertam, porque toda a kit do Pugna tem bkbpierce: No nas constantes oficiais
- itens que viram: o BKB dele (26:36) é o item que decide o confronto, porque desliga sua kit inteira; antes disso, Decrepify é sua melhor resposta, porque amplia o dano mágico que ele toma justo enquanto ele ainda não tem a imunidade
- como jogar: tente fechar Decrepify nele antes dos 26min, enquanto ele ainda não tem BKB; depois disso, pare de mirar nele e proteja quem ele for focar, porque sua kit inteira para de funcionar contra ele com BKB ligado
- fonte: pro_dados/pugna.json; pro_dados/shredder.json; constants_abilities.json (shredder_whirling_death, shredder_reactive_armor, pugna_decrepify)

## Contra Disruptor (disruptor)

- placar: 64 vitórias em 125 partidas de pro (51,2%, fonte: OpenDota /heroes/45/matchups)
- por que importa: 4º maior volume de pro contra Pugna, mesma função pos 5, outro suporte de disable em área competindo pelo mesmo espaço no time
- janelas: curva de farm quase idêntica (gpm 279 dele contra 337 seu, lh10 4 contra 13); ele fecha Arcane Boots aos 11:24 (perto do seu 11:06), mas o Blink dele só sai aos 24:00, bem depois do seu Glimmer Cape (21:12); entre 21 e 24min você já pode entrar protegido enquanto ele ainda está exposto sem iniciação própria
- o que ele faz com você: Kinetic Field (70 mana, raio 350, 1s de formação) te prende numa parede que não dá pra atravessar andando; dentro dela, Static Storm (125-225 mana, raio 550) te calar por 6s, cancelando Decrepify e Nether Ward no meio da luta
- o que você faz com ele: Decrepify nele soma 20-50% de dano mágico recebido bem na hora em que o time todo está preso junto dele na própria Kinetic Field; Nether Ward pune o combo dele, que é caro (Static Storm custa até 225 de mana sozinho)
- itens que viram: o Aghanim's Scepter dele (34:54, compra tardia e minoritária) faz Static Storm também silenciar o uso de item de quem estiver preso, incluindo qualquer ativo seu; como ele compra isso só muito tarde, a maior parte do jogo seu kit funciona livre contra ele
- como jogar: não lance seus feitiços perto de onde ele pode formar Kinetic Field cedo; se ele silenciar seu time com Static Storm, recue em vez de tentar lançar Decrepify no meio do silence
- fonte: pro_dados/pugna.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_kinetic_field, disruptor_static_storm)

## Contra Tusk (tusk)

- placar: 70 vitórias em 121 partidas de pro (57,9%, fonte: OpenDota /heroes/45/matchups)
- por que importa: 5º maior volume de pro contra Pugna, iniciador puro pos 4/5, vantagem robusta sua (57,9% em 121 jogos)
- janelas: ele é tão pobre de farm quanto você (gpm 300, lh10 6), mas o kit dele não depende de item; fecha o Blink cedo, mediana 19:00 (o item mais comprado da posição, em 2.655 de 2.953 partidas), quase 2min antes do seu Glimmer Cape (21:12); depois dos 21min a vantagem de proteção vira sua, porque o combo dele não escala tão bem em jogo longo quanto seu Decrepify + Nether Ward
- o que ele faz com você: Walrus Kick (alcance 250) e a Snowball que rola puxando aliados a até 325 de raio; se ele blinka em cima de você e já abre o combo, Decrepify não sai a tempo porque o atordoamento vem primeiro
- o que você faz com ele: Decrepify nele trava o slow que ele daria de volta e amplia o dano mágico que ele recebe; como ele tem pouca vida de suporte, isso mata rápido; Nether Ward rende pouco aqui porque o kit dele é barato (100-130 de mana por feitiço)
- itens que viram: o Blink dele (19:00) decide se ele chega até você primeiro; seu Glimmer Cape (21:12) é a resposta, mas chega 2min depois, então a prioridade antes disso é não ficar isolado
- como jogar: fique perto de aliados até ter o Glimmer Cape pronto, Tusk caça alvo isolado; depois dos 21min, você pode virar o jogo porque seu combo de trava dura mais que o dele
- fonte: pro_dados/pugna.json; pro_dados/tusk.json; constants_abilities.json (tusk_walrus_kick)

## Contra Mars (mars)

- placar: 63 vitórias em 116 partidas de pro (54,3%, fonte: OpenDota /heroes/45/matchups)
- por que importa: 6º maior volume de pro contra Pugna, offlane iniciador que quase nunca compartilha lane com ele, outro caso de "sem lane mas decide o jogo junto"
- janelas: ele farma rápido pra um offlane (lh10 49, gpm 487); fecha Blink cedo, aos 15:12, bem antes de qualquer proteção sua; o BKB dele sai aos 26:30; dos 15 aos 21min (antes do seu Glimmer Cape) ele pode te pegar isolado com Spear sem resposta sua
- o que ele faz com você: Spear of Mars (alcance 900-1200, empurra o alvo pra trás, 1,3-2,2s de stun) te prende de longe antes de você reagir; dentro da Arena of Blood (raio 550, 5,5s) lanças batem em quem tenta sair, inclusive você fugindo pra lançar Decrepify de fora
- o que você faz com ele: Decrepify nele soma até 50% de dano mágico recebido bem na hora em que o time dele está preso junto na própria Arena; como ele é melee e precisa ficar perto pra bater, isso ajuda seu time a estourá-lo rápido
- itens que viram: o BKB dele (26:30) desliga sua kit inteira (bkbpierce: No em toda ela); antes disso, Decrepify é sua melhor resposta, porque ele precisa ficar perto pra fazer dano
- como jogar: não ande sozinho dentro do alcance de 1200 do Spear depois dele ter nível 4; depois dos 26min, pare de mirar nele com Decrepify e proteja quem ele for focar
- fonte: pro_dados/pugna.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_arena_of_blood, mars_bulwark)

## Contra Shadow Demon (shadow_demon)

- placar: 44 vitórias em 104 partidas de pro (42,3%, fonte: OpenDota /heroes/45/matchups)
- por que importa: mesma função pos 4/5, maior desvantagem de Pugna com amostra grande (104 jogos, 42,3%)
- janelas: os dois são suportes de farm baixo (gpm 314 dele, 337 seu); ele fecha Blink aos 23:54, pouco depois do seu Glimmer Cape (21:12), e o Aghanim's Shard dele (25:24) chega logo atrás, dando Demonic Cleanse pro time dele; entre 21 e 24min você tem uma pequena vantagem de proteção, mas ele reequilibra rápido
- o que ele faz com você: Disruption (120 mana, alcance 675) te bane por 2,75s e, quando volta, cria 2 ilusões suas que tomam 300% de dano e causam só 20-50% do seu dano normal, tirando você da luta sem te matar; Demonic Purge (150-200 mana, alcance 800) fura Black King Bar, remove buff positivo e desacelera até 100%, atravessando até imunidade a feitiço
- o que você faz com ele: Decrepify nele amplia o dano mágico que ele recebe; como ele também tem pouca vida, isso ajuda seu time a focá-lo antes do combo de disable sair
- itens que viram: o Demonic Purge dele fura BKB, então mesmo que você compre um (raro pra Pugna) ele ainda te trava; o que decide é quem acerta o combo de disable primeiro, não o item de defesa
- como jogar: trate o Disruption dele como prioridade de dispel do seu time, porque ele te tira da luta sem gastar o resto do combo; não relaxe achando que Decrepify te protege do Purge, ele atravessa tudo
- fonte: pro_dados/pugna.json; pro_dados/shadow_demon.json; constants_abilities.json (shadow_demon_disruption, shadow_demon_demonic_purge)

## Contra Queen of Pain (queenofpain)

- placar: 56 vitórias em 95 partidas de pro (58,9%, fonte: OpenDota /heroes/45/matchups)
- por que importa: mid nuker com o maior volume de pro entre os heróis de dano mágico puro desta lista (95 jogos) e vantagem forte (58,9%); o kit dela é quase feito pro que o Decrepify pune
- janelas: ela farma muito mais rápido (gpm 572, lh10 56, nível final 21); fecha Power Treads aos 8:18 e o Aghanim's Scepter aos 23:30, bem depois do seu Glimmer Cape (21:12); entre 21 e 23:30 você já tem proteção e ela ainda não tem o upgrade que mais muda o kit dela
- o que ele faz com você: Blink (65 mana, alcance 1075-1300) te alcança de longe antes de você reagir; Sonic Wave (250-550 mana, alcance 700, 325-625 de dano) é dano puro que atravessa Black King Bar, então nem um BKB seu ajudaria
- o que você faz com ele: Decrepify nela soma até 50% de dano mágico recebido, útil porque ela tem pouca vida pra uma mid de tanto impacto, e isso ajuda seu time a abatê-la antes dela fechar o combo; Sonic Wave é dano puro, então não entra nessa amplificação, só o que o resto do seu time acerta nela depois conta; Nether Ward pune cada Sonic Wave lançada perto, até 550 de mana, o que rende cerca de 990 de dano do Ward sozinho (110 de base mais 550×1,6)
- itens que viram: o Aghanim's Scepter dela (23:30) transforma Shadow Strike numa área de 375 que, ao expirar ou ser reaplicada num herói, solta um Scream of Pain; isso muda o combo dela de alvo único pra área, então seu Decrepify nela antes dos 23:30 vale mais, porque depois disso o combo acerta todo mundo perto, não só você
- como jogar: force a troca antes dos 23:30, enquanto o combo dela ainda é de alvo único; depois do Scepter dela, espalhe o time em vez de ficar junto
- fonte: pro_dados/pugna.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_blink, queenofpain_sonic_wave); https://api.opendota.com/api/constants/aghs_desc

## Contra Skywrath Mage (skywrath_mage)

- placar: 44 vitórias em 86 partidas de pro (51,2%, fonte: OpenDota /heroes/45/matchups)
- por que importa: mesma função pos 4/5, nuke mágico competidor direto do seu Nether Ward, 51,2% em 86 jogos
- janelas: farma parecido com você (gpm 332, lh10 7); ele não tem blink confirmado como core nos dados locais (Kaya sai aos 17:30 como primeiro item de amplificação), então depende de caminhar até o alcance de 1200 do Mystic Flare; seu Glimmer Cape (21:12) costuma chegar antes do pico de burst dele sair pronto
- o que ele faz com você: Ancient Seal (80-110 mana, alcance 700-850) te silencia e amplia 20-35% todo dano mágico que você recebe enquanto selado, não só o dele; Mystic Flare (300-800 mana, alcance 1200, 2s de canal) faz até 1.600 de dano contínuo se ele canalizar sem ser interrompido
- o que você faz com ele: Decrepify nele soma 20-50% a mais no dano mágico que ele recebe, irônico porque ele é todo de dano mágico; Nether Ward pune cada Mystic Flare lançada perto, até 800 de mana no nível 3, o que rende perto de 1.390 de dano do Ward sozinho (110 de base mais 800×1,6)
- itens que viram: nenhuma das 4 habilidades dele atravessa Black King Bar (bkbpierce: No confirmado nas constantes para Arcane Bolt, Concussive Shot, Ancient Seal e Mystic Flare), então um aliado com BKB perto anula o combo inteiro dele; seu Nether Ward é o contador direto porque o combo dele é caro de mana
- como jogar: plante Nether Ward onde ele costuma se posicionar pra castar Mystic Flare de longe; não deixe ele te silenciar primeiro com Ancient Seal, ou seu Decrepify sai tarde demais pra proteger o time
- fonte: pro_dados/pugna.json; pro_dados/skywrath_mage.json; constants_abilities.json (skywrath_mage_ancient_seal, skywrath_mage_mystic_flare)

## Contra Warlock (warlock)

- placar: 42 vitórias em 79 partidas de pro (53,2%, fonte: OpenDota /heroes/45/matchups)
- por que importa: mesma função pos 5 pura, igual Pugna, rivalidade direta de "quem segura o time"
- janelas: farmam quase igual (gpm 329 dele, 337 seu); ele fecha Arcane Boots aos 10:42 (perto do seu, 11:06) e o Solar Crest dele só sai aos 22:12, depois do seu Glimmer Cape (21:12), dando a você uma pequena janela de iniciativa entre 21 e 22min
- o que ele faz com você: Fatal Bonds (120-150 mana, alcance 1000, raio 700) amarra seu time, fazendo parte do dano que um leva ser sentido pelos outros, péssimo se o time dele focar você já amarrado; Upheaval (100 mana, alcance 800) é um canal que cresce de slow (até 100%) e dano enquanto ele mantiver
- o que você faz com ele: Decrepify nele soma até 50% de dano mágico recebido; como o dano próprio dele é baixo, isso ajuda seu time a abatê-lo antes do Chaotic Offering (golem de 1.500-3.000 HP) virar o jogo
- itens que viram: o golem dele muda a luta inteira se ele conseguir lançar sem interrupção; Nether Ward pune o cast, porque o ultimate custa até 600 de mana, o que rende cerca de 1.070 de dano do Ward sozinho (110 de base mais 600×1,6)
- como jogar: mire Nether Ward ou Decrepify nele antes dele conseguir canalizar o golem; se o golem já caiu, foque o golem ou se afaste, prender o Warlock depois não resolve mais nada
- fonte: pro_dados/pugna.json; pro_dados/warlock.json; constants_abilities.json (warlock_fatal_bonds, warlock_upheaval, warlock_rain_of_chaos)

## Contra Ogre Magi (ogre_magi)

- placar: 50 vitórias em 73 partidas de pro (68,5%, fonte: OpenDota /heroes/45/matchups; a maior vantagem de Pugna nesta lista)
- por que importa: maior vantagem de Pugna no pro play com amostra confiável (73 jogos, 68,5%), mesma função pos 5
- janelas: ele é ainda mais devagar que você no início (gpm 315, lh10 8), mas o innate Dumb Luck (mana vindo de Força) dá sustain de graça; fecha Hand of Midas aos 18:54 (farm, não luta); Blink e Scythe of Vyse nem aparecem entre os 30 itens mais comprados da posição nos dados de pro, então ele costuma ficar sem mobilidade própria enquanto você já tem Glimmer Cape (21:12)
- o que ele faz com você: Fireblast (70-115 mana, alcance 525) te atordoa 1,2s; com Multicast (chance que cresce 1% a cada 16 de Força, innate Dumb Luck) ele pode repetir o stun no mesmo alvo a cada 0,6s, perigoso se cair duas vezes seguidas em você
- o que você faz com ele: Decrepify nele soma até 50% de dano mágico recebido; como ele depende de Força pra tudo (mana, vida, chance de Multicast), isso ajuda seu time a estourá-lo antes do combo repetir
- itens que viram: nos dados de pro, Blink e Scythe of Vyse nem aparecem entre os itens mais comprados da posição, ou seja, a falta de mobilidade dele é estrutural, não um timing específico; seu Glimmer Cape (21:12) já resolve a parte dele que você mais teme, que é ficar isolado
- como jogar: force a troca sempre que puder, ele raramente tem resposta de mobilidade própria nos dados de pro; fique atento ao combo de Multicast Fireblast se ele estourar duas vezes seguidas, mas não espere um Blink dele salvar a posição
- fonte: pro_dados/pugna.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_multicast)

## Contra Sven (sven)

- placar: 21 vitórias em 34 partidas de pro (61,8%, fonte: OpenDota /heroes/45/matchups)
- por que importa: carry puro, raramente cruza lane com Pugna (ele fica na própria safelane, Pugna protege a dele do outro lado do mapa), mas tem forte vantagem registrada em pro (61,8% em 34 jogos); é o caso mais claro da lista de dois heróis que quase não se enfrentam na lane, mas decidem o jogo juntos
- janelas: Sven farma muito mais rápido que qualquer suporte (gpm 656, lh10 71, nível final 22 contra os seus 16); fecha Mask of Madness aos 10:12 e já limpa ancient camp rápido com Great Cleave; o Echo Sabre sai aos 14:30 e o Blink dele aos 17:06, bem antes do seu Glimmer Cape (21:12); entre 17 e 21min ele já pode iniciar com Blink + Storm Hammer + God's Strength enquanto você ainda não tem proteção; o BKB dele fecha com mediana de 22:42 (p25 21:12, partidas pro 7.40-7.41, OpenDota), e é aí que a vantagem de item muda de mãos
- o que ele faz com você: Storm Hammer (110-125 mana, alcance 600) te atordoa 1-1,6s de longe; depois do Blink, ele fecha com God's Strength (até 190% de dano bônus por 30s) e um crit de Crystalys/Daedalus que mata suporte de pouca vida em 1-2 golpes
- o que você faz com ele: Decrepify nele soma até 50% de dano mágico recebido, mas o dano dele é quase todo físico (crit, Great Cleave), então o efeito prático maior é travar ele 3,5s sem atacar nem ser atacado, cortando o right-click que é a arma real dele; Nether Ward rende pouco, porque Storm Hammer custa só 110-125 de mana
- itens que viram: o BKB dele (mediana 22:42, partidas pro 7.40-7.41) decide o confronto: Decrepify, Nether Ward e Life Drain têm bkbpierce: No, então uma vez ligado ele ignora sua kit inteira; antes do BKB, Decrepify é o jeito mais barato de parar o autoataque dele no meio de uma troca
- como jogar: force troca com ele antes dos 21min, quando ele ainda não tem BKB; depois disso, não perca tempo tentando Decrepify nele, proteja quem ele for focar
- fonte: pro_dados/pugna.json; pro_dados/sven.json; constants_abilities.json (sven_storm_bolt, sven_gods_strength, pugna_decrepify)

## Contra Earthshaker (earthshaker)

- placar: 11 vitórias em 32 partidas de pro (34,4%, fonte: OpenDota /heroes/45/matchups; a maior desvantagem de Pugna nesta lista)
- por que importa: pior desvantagem de Pugna no pro play com amostra válida (32 jogos, 34,4%), iniciador que mata num combo só antes de você reagir
- janelas: ele farma bem mais rápido mesmo jogado em 4 posições diferentes (gpm 503, lh10 48); nos dados de pro ele fecha Blink muito cedo, mediana 12:12, antes de qualquer item de proteção seu; o Aghanim's Shard dele sai aos 20:30, perto do seu Glimmer Cape (21:12); na janela de 12 a 21min ele pode iniciar Blink + Fissure + Echo Slam sem você ter resposta de sobrevivência pronta
- o que ele faz com você: Fissure (115-130 mana, alcance 1600) corta sua rota de fuga e te atordoa 1-1,6s; se você estiver perto de aliados, Echo Slam (150-250 mana, raio 700) multiplica o dano por herói atingido, 70-110 de eco por cada um, o que mata suporte de pouca vida quase instantâneo numa luta de 4-5
- o que você faz com ele: Decrepify nele soma até 50% de dano mágico recebido, útil porque o combo dele é todo mágico; o problema é que você precisa estar vivo e no alcance de 550-700 pra acertar, e o combo dele costuma matar primeiro
- itens que viram: o Blink dele (12:12) chega cedo demais pra qualquer resposta sua; seu melhor "item" contra ele não é ofensivo, é não ficar agrupado com o próprio time, porque Echo Slam escala com quantos heróis ele acerta
- como jogar: não fique colado nos aliados quando ele tiver nível 6; se ele Fissurar, corra lateral em vez de reto, a parede bloqueia movimento e Echo Slam vem logo depois
- fonte: pro_dados/pugna.json; pro_dados/earthshaker.json; constants_abilities.json (earthshaker_fissure, earthshaker_echo_slam)

## Contra Crystal Maiden (crystal_maiden)

- placar: 16 vitórias em 43 partidas de pro (37,2%, fonte: OpenDota /heroes/45/matchups; 2ª maior desvantagem de Pugna nesta lista)
- por que importa: mesma função pos 5, 2ª pior desvantagem registrada (37,2% em 43 jogos), concorrência direta pelo mesmo papel de "suporte parado de área"
- janelas: curvas de farm quase idênticas (gpm 297 dela, 337 seu, lh10 6 dela, 13 seu); ela fecha o Aghanim's Shard aos 17:42 (item mais comprado dela no meio de jogo, dá a única mobilidade real dela), bem antes do seu Glimmer Cape (21:12); o Blink dela só sai aos 23:06, tarde pros padrões da lista
- o que ele faz com você: Frostbite (125-155 mana, alcance 600) trava você 1,5-3s sem atacar nem ser atacado, quase um espelho do seu Decrepify; se ela canalizar Freezing Field (200-600 mana, raio 810, 10s) perto de você, o dano de explosão (110-250) soma rápido num alvo de pouca vida
- o que você faz com ele: Decrepify nela soma até 50% de dano mágico recebido, mas ela já tem pouquíssima vida própria; o que mais decide é quem trava quem primeiro, e seu Decrepify recarrega em 16-7s contra os 9-6s do Frostbite dela, então em sequência direta você reage mais rápido
- itens que viram: o Aghanim's Shard dela (17:42, Crystal Clone) é o item que mais muda o duelo, porque dá a ela mobilidade pra escapar do seu alcance de 550-700; antes disso ela não tem fuga própria nenhuma
- como jogar: force a troca antes dos 17:42, quando ela ainda não tem o Shard; depois disso, mire Nether Ward nela em vez de perseguir, perseguir só ajuda ela a abrir distância com o Crystal Clone
- fonte: pro_dados/pugna.json; pro_dados/crystal_maiden.json; constants_abilities.json (crystal_maiden_frostbite)

## Contra Clockwerk (rattletrap)

- placar: 17 vitórias em 43 partidas de pro (39,5%, fonte: OpenDota /heroes/45/matchups; 3ª maior desvantagem de Pugna nesta lista)
- por que importa: mesma função pos 4/5, 3ª pior desvantagem registrada (39,5% em 43 jogos), iniciador que ignora distância de forma única na lista
- janelas: ele farma um pouco mais rápido (gpm 300, lh10 7, nível final 17); fecha Tranquil Boots aos 8:30 (perto do seu Arcane Boots, 11:06) e o Blink dele só aos 24:48, depois do seu Glimmer Cape (21:12); mas o Hookshot dele já alcança 2.000-3.000 de distância assim que ele tem o ultimate (nível 6 em diante), ou seja, ele não depende de Blink pra te alcançar, diferente da maioria dos iniciadores desta lista
- o que ele faz com você: Hookshot (100-150 mana, alcance 2.000-3.000) te prende de uma distância maior que qualquer outro herói desta lista; ao acertar, estoura em raio 175, e a Power Cogs (60-75 mana, raio 215) fecha o anel que não deixa ninguém sair andando
- o que você faz com ele: Decrepify nele soma até 50% de dano mágico recebido; como ele é tanque de Força com pouco dano de ataque próprio, isso ajuda mais seu time a abatê-lo do que te protege da iniciação em si, porque não existe alcance seu maior que o Hookshot dele
- itens que viram: o alcance do Hookshot (2.000-3.000) anula a vantagem de alcance que o Aether Lens te daria contra a maioria dos outros iniciadores da lista; a resposta real é Nether Ward plantado onde ele costuma se posicionar, porque Power Cogs e Battery Assault (75-90 mana) ainda gastam mana que o Ward pune
- como jogar: não fique isolado nunca, nem a 3.000 de distância dele; se ele te prender na Power Cogs, gaste o item de escape primeiro, Decrepify não quebra o anel
- fonte: pro_dados/pugna.json; pro_dados/rattletrap.json; constants_abilities.json (rattletrap_hookshot, rattletrap_power_cogs)
