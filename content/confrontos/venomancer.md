---
id: confrontos-venomancer
heroi: Venomancer
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/venomancer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rattletrap.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/warlock.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/legion_commander.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/doom_bringer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/viper.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nyx_assassin.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/venomancer.md
- https://api.opendota.com/api/constants/aghs_desc
---

## Como esses 14 foram escolhidos

Os 6 primeiros são os adversários com mais jogos registrados contra o Venomancer em partidas de liga 7.40/7.41 (pro_dados/venomancer.json, matchups do OpenDota): Rubick, Tusk, Jakiro, Hoodwink, Snapfire e Disruptor. Quatro deles (Rubick, Jakiro, Hoodwink, Disruptor) também são a mesma posição principal do Venomancer no catálogo do site (suporte 4/5), então servem duplamente pro critério de "mesma função". Clockwerk e Warlock entram por completarem esse grupo de suporte com volume bom de jogos (57 e 66) e vantagem clara pro Venomancer. Legion Commander, Ember Spirit e Doom são três confrontos muito desfavoráveis com 30+ jogos (taxa de vitória do Venomancer entre 38,5% e 41,7%), todos core de lane adversária que ele encontra via gank, não em lane direta. Viper, Dragon Knight e Nyx Assassin são os três melhores confrontos com 30+ jogos (63,2% a 65,9%). Viper em especial é o caso "dois heróis de veneno que raramente dividem lane": ele é carry/mid (posições 2/3 no catálogo), o Venomancer é suporte, e mesmo assim o choque de kit entre os dois decide boa parte do jogo quando se cruzam.

## Contra Rubick (rubick)

- placar: Venomancer vence 82 de 168 partidas de liga 7.40/7.41 (48,8%). Fonte: pro_dados/venomancer.json.
- por que importa: é o adversário com mais jogos contra o Venomancer na amostra inteira, e os dois são suporte 4/5 no catálogo, então entram na mesma lane ou no mesmo raio de roam quase toda partida.
- janelas: até 10 min os dois seguem a mesma curva de suporte (Boots do Venomancer mediana 5,9; Arcane Boots do Rubick 10,3, do Venomancer 11,8). Dos 15 aos 25 min o jogo é sobre quem acerta o combo primeiro: Rubick carrega Blink Dagger (21,6) pra entrar com Telekinesis, o Venomancer carrega Spirit Vessel (17,2) pra sustentar o poke. Depois dos 25 min o Rubick de pro já tem Ultimate Scepter (27,4) ou Aghanim's Shard (27,0), o que muda o resto da luta.
- o que ele faz com você: Spell Steal copia o último feitiço que você lançou, então se ele rouba Venomous Gale ou Noxious Plague ele usa seu próprio dano contra seu time pelos próximos 180 a 300 segundos. Telekinesis (0,9 a 1,5s de stun ao aterrissar) te tira de posição antes de você conseguir reagir, e Fade Bolt reduz seu dano físico, o que corta o pouco dano de autoataque do Plague Ward também.
- o que você faz com ele: Rubick tem vida baixa pro papel que ele cumpre. Snakebite (20 a 35 de dano por segundo por 6s, repete o dano inicial se ele atacar) mais o Venomous Gale já tiram boa parte da vida dele antes de qualquer Scepter dele entrar em jogo.
- itens que viram: Aghanim's Shard do Venomancer (25% a mais de alcance e velocidade no Gale, cria 2 Plague Wards no impacto) deixa você acertar o combo de longe sem precisar chegar perto o bastante pra ele estudar seu cast final de novo. Pelo lado dele, o Scepter (guarda 2 feitiços roubados e usa a versão com Scepter deles) é o item que faz o Steal doer de verdade no seu time.
- como jogar: evite lançar Noxious Plague perto dele quando ele ainda não gastou o Steal recente; se perceber que ele acabou de roubar sua ulti, segure o combo do seu time até o roubo expirar ou até ele morrer.
- fonte: pro_dados/venomancer.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis); OpenDota aghs_desc.

## Contra Tusk (tusk)

- placar: Venomancer vence 78 de 125 (62,4%). Fonte: pro_dados/venomancer.json.
- por que importa: 2º adversário com mais jogos contra o Venomancer, e os dois disputam o mesmo espaço de suporte/roam 4/5 em boa parte das draft.
- janelas: até os 13 min o Tusk de pro ainda está sem gap-closer (Phase Boots só aos 13,6). Dos 15 aos 19 min o Venomancer já tem Arcane Boots (11,8) e segue poke, enquanto o Tusk de pro só fecha o Blink Dagger aos 19,0, item que ele precisa pra alcançar um suporte que kita.
- o que ele faz com você: Ice Shard cria uma parede de gelo que bloqueia seu caminho por 4 a 7s e já causa até 300 de dano ao acertar; Walrus Punch é um crítico garantido (200% a 300% de dano) que te lança pro ar; Snowball rouba seu espaço de fuga ao te acertar em linha. O combo clássico dele é te prender no Shard, Snowball até perto do time dele e fechar com Walrus Punch.
- o que você faz com ele: antes do Blink dele (19 min), Tusk não tem nenhuma forma de te alcançar a não ser correndo, e o slow de até -50% do Venomous Gale te dá mais velocidade relativa que ele. Snakebite nele também não tem counter direto no kit do Tusk.
- itens que viram: o Blink Dagger dele (19,0 min) é o item que decide se esse confronto vira; antes disso o Venomancer ganha quase sempre a corrida de distância. Spirit Vessel seu (17,2 min) corta 70% da cura/regen dele bem no momento em que ele ainda está tentando fechar a distância.
- como jogar: mantenha distância de 800+ antes do min 19, puxe o Gale assim que ele iniciar o Snowball (o slow atrasa o giro da bola) e guarde Snakebite pra quando ele já tiver gasto o combo de burst nele mesmo.
- fonte: pro_dados/venomancer.json; pro_dados/tusk.json; constants_abilities.json (tusk_ice_shards, tusk_snowball, tusk_walrus_punch).

## Contra Jakiro (jakiro)

- placar: Venomancer vence 69 de 121 (57,0%). Fonte: pro_dados/venomancer.json.
- por que importa: 3º em volume de jogos contra o Venomancer e mesma posição de suporte no catálogo, os dois vivem de controlar área com dano ao longo do tempo.
- janelas: a fase de lane (até 12 min) é equilibrada, os dois saem de Boots cedo (Venomancer 5,9, Jakiro 5,6) e seguram mana com Ring of Basilius. Dos 15 aos 26 min o Jakiro de pro monta Force Staff (26,2) e Glimmer Cape (22,8) pra sobreviver ao poke, mas não tem nenhum jeito de fechar distância nesse intervalo.
- o que ele faz com você: Ice Path (até 2s de stun em área) trava você pra Dual Breath (slow de até -40% + queimadura) acertar, e se você já estiver no alcance de Macropyre (dano em área por 10s, até 200 por segundo), o DPS dele supera o seu em teamfight parada.
- o que você faz com ele: Jakiro é totalmente parado, sem blink nem dash, então o alcance de 800 do Venomous Gale e os 900 do Noxious Plague acertam ele antes dele conseguir alinhar Dual Breath (alcance 850) ou Macropyre (alcance 1400, mas precisa de posição e setup).
- itens que viram: Spirit Vessel seu entra no mesmo papel de sempre (corta sustain), mas aqui o que decide é controle de distância: Force Staff dele (26,2) é o item que resolve o problema de mobilidade zero e permite ele reposicionar o Macropyre.
- como jogar: ataque antes dos 20 min, quando ele ainda não tem Force Staff nem Glimmer; depois disso, puxe ele com Gale antes de entrar no alcance de Macropyre, não durante.
- fonte: pro_dados/venomancer.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre, jakiro_ice_path, jakiro_dual_breath).

## Contra Hoodwink (hoodwink)

- placar: Venomancer vence 52 de 111 (46,8%, levemente desfavorável). Fonte: pro_dados/venomancer.json.
- por que importa: 4º em volume de jogos, mesma posição de suporte 4/5, e é um dos poucos do grupo de mais jogos onde o Venomancer não é favorito.
- janelas: até 12 min a troca é parecida (Arcane Boots dela 12,2 vs 11,8 sua). Dos 16 aos 24 min ela ganha a janela: Aghanim's Shard dela sai aos 23,8, bem antes do seu Spirit Vessel completo estar relevante em teamfight, e Scurry (2 cargas, tree-walking) já está disponível desde o nível básico pra ela escapar pela floresta onde você normalmente luta.
- o que ela faz com você: Bushwhack estuna 1,5 a 2,1s se você estiver perto de árvore, o que acontece com frequência já que seu combo de emboscada costuma ser na selva ou no rio; Sharpshooter acerta até 1350 de dano puro com slow e break num alvo lento como você, de até 3000 de distância, fora do alcance de qualquer coisa sua.
- o que você faz com ela: ela tem pouca vida e nenhum disable em você além do Bushwhack perto de árvore; se você fecha o combo (Gale + Snakebite) antes dela montar Sharpshooter, ela não tem resposta.
- itens que viram: o Aghanim's Shard dela (23,8 min, upgrade do Hunter's Boomerang que volta acertando e aplica vulnerabilidade a dano mágico) é o item que vira o confronto a favor dela, porque amplifica exatamente seu tipo de dano contra ela antes de você conseguir usar. Sentry sua (item que você já compra cedo, p25 13,1 min) ajuda pouco aqui porque Scurry não é invisibilidade, é tree-walking.
- como jogar: lute longe de árvore sempre que possível, e force o confronto antes dos 20 min, antes do Shard dela ficar pronto.
- fonte: pro_dados/venomancer.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, hoodwink_scurry); OpenDota aghs_desc.

## Contra Snapfire (snapfire)

- placar: Venomancer vence 55 de 110 (50,0%, parelho). Fonte: pro_dados/venomancer.json.
- por que importa: 5º em volume de jogos, mesma posição de suporte na maioria das partidas de pro.
- janelas: até 10 min o Venomancer sai na frente em utilidade (Urn aos 9,0). Mas a Snapfire de pro já fecha Aghanim's Shard aos 16,9 min, o item mais cedo entre todos os suportes desse levantamento, o que dá a ela um stun extra de Firesnap Cookie bem na janela em que você ainda está montando Arcane Boots (11,8) e Spirit Vessel.
- o que ela faz com você: Mortimer Kisses cobre uma área grande com 8 globos (até 360 de dano cada, mais poça que continua queimando), dano maior que o seu poke num confronto parado; Firesnap Cookie com Shard faz ela ou um aliado pular, estuar e ainda lançar um beijo que causa 40% do impacto extra, ou seja, vira engajamento e disable ao mesmo tempo.
- o que você faz com ela: ela é frágil fora do Mortimer e sem Shard não tem gap-closer de verdade; Venomous Gale já reduz a velocidade dela o bastante pra seu time alcançar antes dela reposicionar o Mortimer.
- itens que viram: Aghanim's Shard dela (16,9 min) é o que decide quem inicia a troca primeiro; se ela pegar isso antes do seu Spirit Vessel (mediana 17,2), ela ganha a janela de iniciação.
- como jogar: pressione a lane antes dos 15 min, antes do Shard dela ficar pronto; depois disso jogue mais reativo, deixando ela gastar Cookie antes de avançar.
- fonte: pro_dados/venomancer.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_mortimer_kisses, snapfire_firesnap_cookie); OpenDota aghs_desc.

## Contra Disruptor (disruptor)

- placar: Venomancer vence 55 de 109 (50,5%, parelho). Fonte: pro_dados/venomancer.json.
- por que importa: 6º em volume de jogos e mesma posição de suporte, um confronto clássico de suporte contra suporte em pro.
- janelas: a fase de lane é simétrica (Boots e Arcane Boots quase no mesmo minuto dos dois lados). Entre 18 e 25 min o jogo gira em torno de Static Storm (silence de 6s), que o Disruptor de pro só tem disponível em nível alto da ulti; antes disso, o confronto é decidido por quem acerta Glimpse ou Gale primeiro.
- o que ele faz com você: Glimpse te teleporta de volta pra onde você estava 4s atrás e já causa até 280 de dano, cancelando qualquer avanço seu (inclusive interrompe seu caminho até o alcance de Snakebite); Static Storm silencia e causa até 350 de dano por segundo num raio de 550, te deixando sem conseguir lançar Gale, Snakebite ou Plague Ward durante a luta inteira.
- o que você faz com ele: ele é tão frágil quanto você e sem iniciação própria forte; Venomous Gale de 800 de alcance chega nele antes de ele conseguir fechar os 800 de alcance do próprio Static Storm, então quem poka primeiro geralmente vence a troca.
- itens que viram: Blink Dagger dele (24,0 min) muda o papel dele de defensivo pra iniciador; antes disso, Kinetic Field (parede que prende por até 4,4s) é a ferramenta dele pra te prender perto do time dele, não o contrário.
- como jogar: poka de fora do alcance de 800 do Static Storm sempre que puder, e não entre sozinho em área onde ele já tem visão, porque é aí que o Glimpse cancela seu avanço.
- fonte: pro_dados/venomancer.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_glimpse, disruptor_static_storm, disruptor_kinetic_field).

## Contra Clockwerk (rattletrap)

- placar: Venomancer vence 36 de 57 (63,2%). Fonte: pro_dados/venomancer.json.
- por que importa: mesma posição de suporte/iniciador, amostra boa (57 jogos) e uma das vantagens mais claras do Venomancer contra outro herói do mesmo papel.
- janelas: até 15 min os dois seguem curva de suporte parecida. O Clockwerk de pro só fecha Blink Dagger ou Force Staff perto dos 25 min (24,8 e 26,8), bem depois do seu Spirit Vessel (17,2), então a janela de 15 a 25 min é sua.
- o que ele faz com você: Hookshot (2000 a 3000 de alcance) é a ameaça real, te puxa e estuna em área; Power Cogs te prende numa jaula por até 8s e queima mana enquanto causa dano.
- o que você faz com ele: Power Cogs não remove debuff que já está em você, então Venomous Gale e Poison Sting continuam ticando nele mesmo que você esteja preso; como ele é corpo a corpo e você não, boa parte do dano das Cogs vem de ele mesmo precisar chegar perto, e Snakebite nele dentro da jaula já é dano garantido pros próximos segundos.
- itens que viram: Aghanim's Shard dele (30,0 min, dá Jetpack com voo) só fica pronto bem tarde, o que explica por que a vantagem sua é maior justamente na fase do jogo entre 15 e 25 min.
- como jogar: não ande sozinho em rota aberta antes dele ter Blink/Hookshot nível 3 (nível 9+); se ele hookar você, gaste Snakebite nele imediatamente, o Cogs não impede o cast se você ainda não foi desarmado por outra coisa.
- fonte: pro_dados/venomancer.json; pro_dados/rattletrap.json; constants_abilities.json (rattletrap_hookshot, rattletrap_power_cogs); OpenDota aghs_desc.

## Contra Warlock (warlock)

- placar: Venomancer vence 41 de 66 (62,1%). Fonte: pro_dados/venomancer.json.
- por que importa: mesma posição de suporte, amostra boa (66 jogos), outra vantagem clara dentro do próprio grupo de suportes.
- janelas: a lane é sobre cura: Shadow Word dele compete direto com seu DPS de poison. Dos 18 aos 22 min ele monta Pavise ou Solar Crest (19,0 e 22,2) pra proteger o time, enquanto seu Spirit Vessel (17,2) já está ativo cortando a cura que ele oferece.
- o que ele faz com você: Shadow Word cura um aliado 15 a 45 por tick por 10s, o suficiente pra anular boa parte do seu DPS de poke num 1x1; Fatal Bonds liga até 6 unidades e espalha 15% a 24% do dano entre elas, o que em teoria ajuda o time dele a dividir dano, mas também significa que se ele amarrar alvos que você já envenenou, o dano do seu poison se multiplica entre os amarrados.
- o que você faz com ele: Spirit Vessel reduz a cura e regen do alvo em 70% por 8s, o que anula quase toda a cura do Shadow Word nesse alvo; como Warlock não tem disable rápido em você, ele raramente consegue punir seu avanço antes de você aplicar o Vessel.
- itens que viram: Spirit Vessel seu é o item decisivo aqui, porque ataca direto a única coisa que o kit dele oferece (cura). Glimmer Cape dele (20,5 min) é a resposta dele, mas só salva de burst mágico pontual, não resolve o corte de cura contínuo.
- como jogar: priorize Vessel antes de Vessel completo (Diadem primeiro, 14,4 min) quando pegar Warlock do lado inimigo, e force fights depois que ele já gastou Fatal Bonds, não antes.
- fonte: pro_dados/venomancer.json; pro_dados/warlock.json; constants_abilities.json (warlock_shadow_word, warlock_fatal_bonds).

## Contra Legion Commander (legion_commander)

- placar: Venomancer vence só 15 de 39 (38,5%), pior confronto da lista com amostra de 30+. Fonte: pro_dados/venomancer.json.
- por que importa: maior desvantagem do Venomancer com amostra confiável, e mostra exatamente o tipo de duelo "sem lane em comum" que importa: Legion Commander é offlane/carry, não suporte, mas o gank dela em cima de você decide jogo.
- janelas: ela farma rápido pra uma offlaner (gpm 489, lh10 53 de mediana), e monta Blade Mail aos 12,7 min e Blink Dagger aos 15,3. Isso é bem antes do seu Spirit Vessel (17,2) e do seu Aghanim's Scepter (39,5, segundo a ficha verificada). Entre 12 e 20 min ela já pode duelar e matar você sozinha, você ainda não tem resposta pronta.
- o que ela faz com você: Press the Attack (dispel forte) remove qualquer debuff seu nela e ainda dá velocidade e regen, zerando o efeito do seu Gale/Plague antes da luta; Duel trava vocês dois só no corpo a corpo por 4 a 5s, ninguém pode usar item nem você pode usar magia nenhuma durante esse tempo, e Blade Mail reflete seu pouco dano físico de volta.
- o que você faz com ele: muito pouco depois que o Duel começa. Seu único recurso real é não deixar ela chegar perto o bastante (alcance de cast do Duel é só 200) e gastar seu combo de longe antes disso.
- itens que viram: o Blade Mail dela (12,7 min) e o Blink Dagger (15,3 min) são os dois itens que abrem a janela de solo kill; não existe item seu que resolva Duel depois que ele já começou, porque ele bloqueia uso de item dos dois lados.
- como jogar: não ande sozinho perto da linha de visão dela depois dos 10 min; se for forçado a lutar, gaste Gale e Snakebite antes dela chegar a 200 de distância, nunca durante o Duel.
- fonte: pro_dados/venomancer.json; pro_dados/legion_commander.json; constants_abilities.json (legion_commander_duel, legion_commander_press_the_attack); content/fichas/venomancer.md (timing do Aghanim's Scepter).

## Contra Ember Spirit (ember_spirit)

- placar: Venomancer vence 32 de 82 (39,0%). Fonte: pro_dados/venomancer.json.
- por que importa: segundo pior confronto com amostra grande (82 jogos), outro core (mid/offlane) que o Venomancer só encontra fora da lane, via gank ou teamfight.
- janelas: ele tem o segundo maior gpm do grupo (558) e lh10 de 53. Monta Spirit Vessel próprio cedo (12,8 min, mais rápido que o seu em 17,2) e Kaya aos 19,2. Até os 12 min ele ainda está vulnerável a gank; depois disso, com Flame Guard disponível e farm alto, ele já escapa e troca a seu favor.
- o que ele faz com você: Flame Guard absorve 70% do dano mágico recebido (até um teto de 60 a 300) enquanto causa dano em área ao redor dele, ou seja, filtra boa parte do seu Gale/Plague/Snakebite; Sleight of Fist ataca tudo ao redor num raio de até 550 e volta pro ponto de partida, então ele entra, bate em você e sai antes do seu Snakebite alcançar; Fire Remnant dá mobilidade que você não tem resposta pra alcançar.
- o que você faz com ele: a janela real é antes dos 10-12 min, quando ele ainda não tem Flame Guard nem remnant pronto pra fugir; gank cedo com visão de Plague Ward nega o farm que sustenta o resto da curva dele.
- itens que viram: Flame Guard dele é o item/habilidade que mais neutraliza seu kit (seu dano é majoritariamente mágico); do seu lado, Spirit Vessel ainda corta a sustain dele, mas chega tarde demais (17,2 contra o Vessel dele próprio aos 12,8).
- como jogar: gankeie antes dos 10 min ou evite o confronto solo depois disso; se ele ativar Flame Guard, troque pra Snakebite (dano físico misto via ataque) em vez de insistir só em magia.
- fonte: pro_dados/venomancer.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_flame_guard, ember_spirit_sleight_of_fist, ember_spirit_fire_remnant).

## Contra Doom (doom_bringer)

- placar: Venomancer vence 30 de 72 (41,7%). Fonte: pro_dados/venomancer.json.
- por que importa: terceiro pior confronto com amostra de 30+, offlaner puro que o Venomancer cruza fora de lane, mas que neutraliza seu kit inteiro quando pega.
- janelas: Doom tem o maior gpm do grupo (606) e lh10 de 52, puro farm de offlane. O Aghanim's Shard dele sai muito cedo (18,7 min) e o Hand of Midas aos 11,6. Entre 10 e 20 min ele já tem o combo pronto pra isolar e matar um suporte, exatamente a janela em que você ainda está montando Spirit Vessel.
- o que ele faz com você: Doom (a habilidade) te impede de lançar qualquer feitiço e de usar qualquer cura por 12 a 16s, enquanto causa 25 a 66 de dano por segundo; nesse tempo você não consegue usar Gale, Snakebite, Plague Ward nem Tango. O Aghanim's Scepter espalha esse efeito pra aliados a 350 de raio do alvo doomado (e ainda deixa ele lançar Doom em si mesmo, afetando quem estiver perto).
- o que você faz com ele: pouco, uma vez que o Doom já caiu em você. A única defesa real é nunca ficar sozinho dentro do alcance de cast dele (400) sem visão prévia.
- itens que viram: o Aghanim's Shard dele (18,7 min) é cedo demais pro seu próprio Spirit Vessel (17,2) competir, e o Devour (rouba habilidade de creep) pode dar ferramentas extras dependendo do que ele consumir no jungle.
- como jogar: ganhe visão antes de entrar em áreas onde ele pode flanquear, e se ele vier pra cima sozinho, gaste seu combo nele antes dele chegar a 400 de distância, não depois.
- fonte: pro_dados/venomancer.json; pro_dados/doom_bringer.json; constants_abilities.json (doom_bringer_doom, doom_bringer_devour).

## Contra Viper (viper)

- placar: Venomancer vence 29 de 44 (65,9%), melhor confronto da lista. Fonte: pro_dados/venomancer.json.
- por que importa: é o caso clássico de dois heróis de veneno que quase nunca dividem lane (Viper é carry/mid, posições 2/3 no catálogo; Venomancer é suporte 4/5), mas cujo choque de kit decide o 1x1 quando se encontram, o mesmo tipo de interação que Alchemist tem contra Morphling.
- janelas: até os 18 min Viper não tem nenhuma ferramenta de fuga, só o range do próprio ataque. O Ultimate Scepter dele sai muito cedo pros padrões de pro (18,2 min), dando Nosedive (um gap-closer em área que antes não existia). Antes disso, qualquer gank seu com Gale (slow de até -50%) o pega sem saída; depois do Scepter, ele ganha mobilidade e o confronto fica mais parelho.
- o que ele faz com você: Poison Attack empilha até 6 vezes, reduzindo sua resistência mágica e te deixando mais lento a cada ataque; Nethertoxin cresce de dano quanto mais tempo você fica na área (até 125 de dano por segundo depois de 4s); Viper Strike reduz sua velocidade de ataque e movimento e quebra qualquer passiva sua (inclusive reduz a eficácia do Poison Sting como fonte de dano extra).
- o que você faz com ele: ele não tem absolutamente nenhum escape antes do Scepter (18,2 min). Venomous Gale tira a única vantagem dele, que é a distância de ataque, e deixa ele preso no alcance do seu time.
- itens que viram: o Ultimate Scepter dele (18,2 min, dá o Nosedive) é o item que muda o jogo inteiro; antes disso ele é um alvo fácil pra qualquer suporte com slow. Corrosive Skin (resistência mágica + dano de retorno quando atacado) ajuda ele a mitigar parte do seu dano mágico, mas não resolve a falta de mobilidade.
- como jogar: gankeie ele antes dos 18 min sempre que puder, essa é a janela real de vantagem; depois do Scepter dele, jogue mais com Plague Ward e visão, sem se expor ao Nethertoxin.
- fonte: pro_dados/venomancer.json; pro_dados/viper.json; constants_abilities.json (viper_poison_attack, viper_nethertoxin, viper_viper_strike, viper_corrosive_skin); OpenDota aghs_desc.

## Contra Dragon Knight (dragon_knight)

- placar: Venomancer vence 50 de 78 (64,1%). Fonte: pro_dados/venomancer.json.
- por que importa: segundo melhor confronto com amostra grande (78 jogos), outro core (carry/offlane) sem lane fixa em comum com o Venomancer, mas que o Venomancer castiga bem em gank.
- janelas: Dragon Knight é lento e sem fuga até ter Blink Dagger (16,2 min) ou Black King Bar (23,3 min). No meio do caminho ele passa por Armlet (13,3) ou Mask of Madness (11,2) pra bully de lane, mas nenhum dos dois ajuda contra um gank de fora. Até os 16 min, é a melhor janela do Venomancer pra pegar ele sozinho.
- o que ele faz com você: Dragon Tail estuna 1,8 a 2,4s e causa dano em área pequena, perigoso se ele te alcançar; em Elder Dragon Form (ulti) ele ganha ataque à distância com dano em área e, dependendo do nível, slow ou dano extra, mas isso só é ameaça real depois dos 25-30 min com XP suficiente.
- o que você faz com ele: Noxious Plague causa dano baseado em % da vida máxima (2% a 4% por aplicação), o que pune justamente a estratégia dele de empilhar força e vida; sem blink ou BKB, ele não tem como fugir do seu Gale nem entrar no seu alcance sem ser visto primeiro pelo seu Plague Ward.
- itens que viram: Blink Dagger dele (16,2 min) é o item que fecha a janela de vantagem sua; depois disso ele consegue iniciar em vez de só reagir. BKB dele (23,3 min) remove boa parte do seu controle também.
- como jogar: gankeie ele antes dos 16 min com visão de rio/selva; depois do Blink e do BKB dele, jogue a luta pelo time, não sozinho.
- fonte: pro_dados/venomancer.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_dragon_tail, dragon_knight_elder_dragon_form).

## Contra Nyx Assassin (nyx_assassin)

- placar: Venomancer vence 24 de 38 (63,2%, amostra de 38 jogos, ainda confiável mas a mais justa do grupo "amostra pequena" permitido). Fonte: pro_dados/venomancer.json.
- por que importa: terceiro melhor confronto, e um espelho interessante: os dois são roamers de emboscada que vivem de pegar o inimigo desprevenido, mas o Venomancer carrega detecção própria no kit inicial, o que neutraliza boa parte do plano do Nyx.
- janelas: Nyx monta Eul's Scepter (Cyclone, 20,5 min) como principal ferramenta de setup/fuga e Diadem (14,1 min) pra alimentar o Mana Burn. Antes dos 14 min, ele só tem Impale e Vendetta, e qualquer sentry sua (p25 de 13,1 min pros seus wards, dado de pro_dados/venomancer.json) já reduz o valor da invisibilidade dele.
- o que ele faz com você: Vendetta te pega de surpresa, invisível por até 60s, com até 500 de dano bônus no primeiro ataque depois de sair da invisibilidade; Neuro Sting queima 12% do dano causado como mana extra, o que seca seu pool rápido já que você depende de mana pra tudo; Impale estuna em linha reta até 2s.
- o que você faz com ele: ele tem pouca vida e nenhuma fuga própria forte fora da invisibilidade e da velocidade de Vendetta; uma vez revelado (por sentry ou dano), Venomous Gale e Snakebite matam ele rápido porque ele não tem blink nem disable em você além do Impale.
- itens que viram: a sentry que você já compra cedo por padrão (item presente em 788 de 853 jogos de pro, p25 13,1 min) é o item que mais pesa aqui, porque ataca direto o plano dele de te pegar escondido. Eul's Scepter dele (20,5 min) é a resposta, dando reposicionamento e um pouco de fuga.
- como jogar: plugue sentry nas rotas de flanco de leste a oeste do seu lado do mapa antes dos 15 min, e puna qualquer Vendetta que ele gastar errado, o cooldown dela é longo (80s no nível básico, caindo pra 60s no máximo).
- fonte: pro_dados/venomancer.json; pro_dados/nyx_assassin.json; constants_abilities.json (nyx_assassin_vendetta, nyx_assassin_neuro_sting, nyx_assassin_impale); pro_dados/venomancer.json (item ward_sentry).
