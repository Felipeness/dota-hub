---
id: confrontos-silencer
heroi: Silencer
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/silencer.json (OpenDota /heroes/75/matchups e /itemTimings, partidas de liga 7.40+7.41, n=1170)
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/{rubick,nevermore,snapfire,lion,ogre_magi,disruptor,hoodwink,tusk,phoenix,skywrath_mage,clinkz,lina,primal_beast,treant,night_stalker,keeper_of_the_light}.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer (consulta lane_role de partidas de liga 7.40+7.41, hero_id 75)
---

## Como foi montada essa lista

Silencer joga quase só de suporte em pro play: das 1.172 partidas de liga 7.40-7.41 com lane_role registrado, 742 (63,3%) foram na safe lane, papel típico do pos 5 que acompanha o carry, e 386 (32,9%) na off lane, papel típico do pos 4 de roaming; só 42 (3,6%) apareceram como mid (fonte: partidas pro 7.40-7.41, OpenDota explorer, lane_role). Os 16 oponentes abaixo vêm de quatro critérios cruzados com o OpenDota (pro_dados/silencer.json, 1170 jogos de liga): os 6 com mais jogos registrados contra ele (Rubick, Shadow Fiend, Snapfire, Lion, Ogre Magi, Disruptor), mais 4 suportes pos 4/5 muito jogados contra ele que não entraram no top 6 (Hoodwink, Tusk, Phoenix, Skywrath Mage), mais os 3 com maior vantagem e os 3 com maior desvantagem pra Silencer com 30+ partidas (Clinkz, Lina, Primal Beast do lado bom; Treant Protector, Night Stalker, Keeper of the Light do lado ruim). Shadow Fiend entra mesmo sendo mid porque é o 2º herói mais jogado contra ele no banco de dados inteiro, e a lógica desse confronto é exatamente a do Alchemist contra Morphling do pedido original: dois heróis que raramente trocam na lane, mas cujo timing de poder um contra o outro define o jogo quando se cruzam.

## Contra Rubick (rubick)

- placar: 168/300 (56,0%) a favor do Rubick em pro, a maior amostra do herói (fonte: pro_dados/silencer.json e pro_dados/rubick.json).
- por que importa: é o confronto mais jogado do Silencer em pro de longe (300 partidas contra o 2º colocado com 216), porque os dois são suportes de roaming/mapa que entram na mesma seleção de meta. Também é o counter mecânico mais direto do kit dele: Spell Steal rouba literalmente o último feitiço que o Silencer usou.
- janelas: até os 10-12 min os dois crescem igual (Arcane Boots do Silencer mediana 11,9 min contra 10,3 min do Rubick, fonte: pro_dados/{silencer,rubick}.json); dos 12 aos 20 min o Rubick ganha espaço porque farma mais rápido de suporte roaming (xpm 538 contra 435 do Silencer, lh10 17 contra 6, fonte: pro_dados resumo); depois dos 20-21 min os dois blinkam/avançam no mesmo minuto (Blink Dagger do Rubick mediana 21,6 min, Force Staff do Silencer 22,3 min), e a luta vira sobre quem rouba o feitiço de quem primeiro.
- o que ele faz com você: Spell Steal é lançada direto no alvo (25 de mana, recarga 16/10/4s, bkb pierce) e copia o último feitiço que o alvo usou, com a mesma duração de recarga reduzida (fonte: constants_abilities.json). Se você castar Last Word ou Global Silence perto de um Rubick com visão, ele pode te acertar logo depois e sair carregando o seu próprio silence pra usar contra o seu time.
- o que você faz com ele: Last Word te dá vantagem indireta porque ele reduz o incentivo do Rubick de ficar perto de você tentando copiar seu enchante (copiar Last Word não ajuda o Rubick, ele quer copiar Global Silence ou Fade Bolt de outro aliado seu). Global Silence também cala o próprio Rubick durante a janela, impedindo ele de ativar a cópia que guardou.
- itens que viram: Aghanim's Scepter do Rubick (27,4 min, n=1119) deixa ele roubar até 2 feitiços ao mesmo tempo com versão Scepter, o que aumenta MUITO o valor de evitar castar perto dele; do seu lado, Glimmer Cape (23,0 min) ajuda a sumir antes que ele consiga confirmar o roubo.
- como jogar: nunca gaste Global Silence ou Last Word com um Rubick inimigo visível e com feitiço disponível perto de você, espere ele gastar Spell Steal nele mesmo ou force ele a usar em outro alvo primeiro. Se ele já roubou seu silence, trate a luta como se seu ultimate estivesse em dobro de recarga até a duração do roubo (180-300s) acabar.
- fonte: pro_dados/silencer.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, silencer_last_word, silencer_global_silence).

## Contra Shadow Fiend (nevermore)

- placar: 112/216 (51,9%) a favor do Shadow Fiend em pro (fonte: pro_dados/silencer.json e pro_dados/nevermore.json).
- por que importa: é o 2º confronto mais jogado do Silencer no banco de pro (216 partidas) mesmo os dois quase nunca dividindo lane, porque Shadow Fiend é o mid mais picado da amostra e Silencer rotaciona pra mid com frequência. É o caso mais parecido com Alchemist x Morphling do pedido: duas curvas de poder que raramente se cruzam na lane, mas que decidem ganks e lutas de meio de jogo.
- janelas: até os 10 min o Shadow Fiend já tem lh10 de 78 contra 6 do Silencer (fonte: resumo pro_dados), uma curva de farm brutalmente mais rápida; aos 12-14 min ele já fechou Dragon Lance/Yasha/Mask of Madness (medianas 14,0/13,3/10,2 min) e pode explodir sozinho uma rotação com Shadowraze+Requiem; dos 16 aos 22 min, se o Silencer chegou com Arcane Boots (11,9 min) e consegue te pegar fora de posição antes do combo, a vantagem inverte na hora porque Shadow Fiend não tem fuga nenhuma.
- o que ele faz com você: Requiem of Souls bate em linhas ao redor dele (até 20 almas, raio 1000) e ainda ativa sozinho quando ele morre, então mesmo matando ele numa troca você pode levar o Requiem de despedida (fonte: constants_abilities.json). Shadowraze acumula um amplificador de dano por stack em quem é acertado repetido, então ficar perto da linha de visão dele punido rápido.
- o que você faz com ele: Shadow Fiend não tem nenhuma forma de escapar de silence: sem Raze pra zonear, sem Requiem pra ameaçar à distância, ele vira um herói só de auto-ataque. Last Word nele antes de ele postar no combo cancela o burst inteiro, e Global Silence no momento que ele tenta puxar Requiem apaga a jogada.
- itens que viram: Black King Bar dele (25,2 min, n=1554) é o item que resolve esse duelo: até ele comprar BKB, qualquer silence seu cancela o kit dele por completo; depois do BKB o jogo vira puramente sobre posicionamento, porque Suffer In Silence não ajuda contra alvo imune a magia.
- como jogar: gankar o Shadow Fiend antes dos 10-12 min, antes do BKB, é o único jeito confiável de parar a bola de neve dele; depois disso jogue pelo Force Staff (22,3 min) pra reposicionar aliados pra fora do raio de 1000 do Requiem em vez de tentar silenciar um alvo imune.
- fonte: pro_dados/silencer.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_requiem, nevermore_shadowraze1, nevermore_necromastery).

## Contra Snapfire (snapfire)

- placar: 120/215 (55,8%) a favor da Snapfire em pro (fonte: pro_dados/silencer.json e pro_dados/snapfire.json).
- por que importa: 3º confronto mais jogado do herói (215 partidas), suporte contra suporte na mesma função de roaming/controle, e com desvantagem real pro Silencer.
- janelas: nos primeiros 10 min as duas correm parecido (gpm 413 da Snapfire contra 304 do Silencer, mas ambos de suporte, fonte: resumo); o salto dela vem cedo: Aghanim's Shard mediana 16,9 min (n=1919, a maior contagem de todos os itens dela), bem antes do Force Staff (22,3 min) ou Glimmer Cape (23,0 min) do Silencer; dos 17 aos 23 min a Snapfire ganha a maioria das trocas porque o kit dela tem alcance maior (Mortimer Kisses alcance 3000, Scatterblast 800) e burst mais rápido de castar.
- o que ele faz com você: Mortimer Kisses lança 8 globos num alcance de 3000 ao longo de 5,5s, cada um causando dano de impacto e deixando poça que queima e lentifica (fonte: constants_abilities.json); Scatterblast dá 100% de lentidão de movimento e ataque em cone, o suficiente pra prender você antes do seu Last Word sair.
- o que você faz com ele: ela depende de castar pra fazer qualquer coisa, então acertar Last Word nela e deixar o timer de 4s estourar durante o combo cancela o Firesnap Cookie ou o Mortimer Kisses que ela estava guardando. Global Silence no momento que ela avança com o urso é a única forma de anular o Lil' Shredder também.
- itens que viram: o Aghanim's Shard dela (16,9 min) deixa o Firesnap Cookie curar e lançar um Mortimer Kiss extra, isso some durante o Global Silence; do seu lado, Glimmer Cape (23,0 min) segura o dano em área do Scatterblast e Mortimer Kisses o suficiente pra sair viva do combo inicial.
- como jogar: não entre no alcance de 3000 do Mortimer Kisses sem ward ou sem saber onde ela está; espere ela gastar o combo primeiro (ela costuma iniciar) e devolva com Last Word assim que o Firesnap Cookie sair, cancelando o resto da sequência.
- fonte: pro_dados/silencer.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_mortimer_kisses, snapfire_scatterblast, snapfire_lil_shredder); aghs_desc (snapfire shard).

## Contra Lion (lion)

- placar: 92/178 (51,7%) a favor do Lion em pro, quase parelho (fonte: pro_dados/silencer.json e pro_dados/lion.json).
- por que importa: 4º confronto mais jogado (178 partidas), o espelho mais direto do kit do Silencer: os dois são suportes disabler puro que vivem de acertar o feitiço primeiro.
- janelas: a curva dos dois é quase idêntica até os 20 min (gpm 286 do Lion contra 304 do Silencer, lh10 6 pros dois, fonte: resumo); o Lion costuma blinkar mais cedo (Blink Dagger mediana 18,2 min, n=2412, o item de build mais comprado dele, atrás só de wards e boots) que o Force Staff do Silencer (22,3 min), então ele geralmente inicia primeiro nessa janela; dos 25 aos 27 min os dois têm os mesmos itens situacionais prontos (Aghanim's Shard do Lion 25,8 min, Glimmer Cape dele 25,8 min, quase junto com o seu).
- o que ele faz com você: Hex te transforma por 2-3,2s sem conseguir usar nenhuma habilidade (fonte: constants_abilities.json), e se ele acertar o Hex antes do seu silence, Finger of Death resolve a troca sozinho com 600-850 de dano fixo. Mana Drain é canalizada e rouba seu mana a até 120/s no nível máximo, o que mata seu combo de Last Word se você ficar parado levando o dreno.
- o que você faz com ele: Mana Drain é canal, então Global Silence interrompe na hora. Last Word nele também cancela qualquer plano de Hex ou Finger of Death se ele tentar castar durante o enchante, e Suffer In Silence faz você bater mais forte nele enquanto está calado.
- itens que viram: o Aghanim's Scepter dele dá dano em área no Finger of Death inicial e aumenta o cleave do ataque corpo a corpo depois, então depois desse item a troca fica mais perigosa pro seu time inteiro, não só pra você (fonte: aghs_desc). Glimmer Cape dos dois lados (quase no mesmo minuto) vira corrida de quem ativa primeiro quando o combo começa.
- como jogar: trave o Hex dele com Global Silence antes de engajar, nunca fique parado recebendo Mana Drain sem necessidade. Se ele canalizar o dreno em você, o Global Silence cancela na hora e ainda te dá o bônus de dano de Suffer In Silence pro resto da duração.
- fonte: pro_dados/silencer.json; pro_dados/lion.json; constants_abilities.json (lion_voodoo, lion_finger_of_death, lion_mana_drain); aghs_desc (lion scepter).

## Contra Ogre Magi (ogre_magi)

- placar: 92/175 (52,6%) a favor do Ogre Magi em pro (fonte: pro_dados/silencer.json e pro_dados/ogre_magi.json).
- por que importa: 5º confronto mais jogado (175 partidas), suporte tanque de int contra suporte de int, os dois com mesma função de controle de lane.
- janelas: curva parecida até os 11-12 min (Arcane Boots mediana 11,2 min do Ogre contra 11,9 min do Silencer, fonte: pro_dados); o Ogre ganha a vantagem no meio porque Fireblast tem Multicast (75% de chance de castar 2x, podendo chegar a 3-4x com força alta), o que multiplica o stun e o dano dele sem gastar item a mais; o seu Force Staff (22,3 min) chega perto do Aghanim's Shard dele (26,1 min), então depois dos 22 min as duas builds se equilibram de novo.
- o que ele faz com você: Fireblast atordoa por 1,2s e, com Multicast, pode cair duas ou três vezes seguidas num intervalo de 0,6s entre cada cast, o suficiente pra te travar tempo demais antes do seu próprio silence sair (fonte: constants_abilities.json).
- o que você faz com ele: o Ogre é praticamente indefeso sem magia, ele bate fraco de corpo a corpo. Global Silence nele remove Fireblast, Ignite e qualquer Multicast possível, deixando ele só com os atributos de força que carrega.
- itens que viram: o Aghanim's Shard dele (26,1 min) dá um escudo em aliado que absorve dano e revida bola de fogo no atacante, então depois desse item evite bater no alvo escudado perto dele. O seu Glimmer Cape situacional ajuda a sair do alcance de 525 do Fireblast antes do segundo cast do Multicast.
- como jogar: puna o Ogre antes dos 11 min, quando ele ainda não tem Arcane Boots pra sustentar o mana do combo; depois disso jogue em volta do Multicast, ele é aleatório, então assuma sempre o pior caso (2-3 stuns seguidos) ao decidir engajar.
- fonte: pro_dados/silencer.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_multicast); aghs_desc (ogre magi shard).

## Contra Disruptor (disruptor)

- placar: 81/154 (52,6%) a favor do Disruptor em pro (fonte: pro_dados/silencer.json e pro_dados/disruptor.json).
- por que importa: 6º confronto mais jogado (154 partidas) e o mais parecido com um espelho funcional: os dois são suportes de roaming que dependem do próprio silence em área pra ganhar luta (Static Storm também silencia).
- janelas: curva quase idêntica até os 20 min (gpm 279 do Disruptor contra 304 do Silencer, os dois com lh10 baixo de suporte puro, fonte: resumo); quem ultima primeiro geralmente ganha a troca, porque Static Storm cala todo mundo na área por 6s e Global Silence cala o mapa inteiro por até 6s também; o Aghanim's Scepter do Disruptor (34,9 min) é o item mais tardio dos dois herois nessa lista, então embates depois dos 30 min tendem a favorecer quem segurou mais recursos.
- o que ele faz com você: Glimpse te teleporta de volta pra onde você estava 4s atrás, cancelando qualquer avanço ou blink que você tenha feito, com dano proporcional à distância puxada (até 280, fonte: constants_abilities.json). Static Storm silencia e causa dano crescente em 550 de raio por 6s inteiros, cobrindo praticamente a mesma janela do seu próprio Global Silence.
- o que você faz com ele: se você castar Global Silence primeiro, cancela a chance dele de usar Static Storm ou Glimpse na janela, e ele fica preso sem resposta mágica nenhuma, já que o kit dele é 100% feitiço.
- itens que viram: o Aghanim's Scepter dele silencia itens também (não só feitiços), o que neutraliza seu Force Staff e Glimmer Cape ativo durante a troca (fonte: aghs_desc). O shard dele cria uma parede de Kinetic Field sem precisar da Kinetic Field normal, aumentando a frequência que ele te prende numa área fechada.
- como jogar: trate o confronto como corrida de iniciação, quem silencia primeiro trava o outro. Depois dos 30-35 min, cuidado redobrado com o Scepter dele silenciando seus itens ativos no meio da troca.
- fonte: pro_dados/silencer.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm, disruptor_glimpse, disruptor_kinetic_field); aghs_desc (disruptor scepter e shard).

## Contra Hoodwink (hoodwink)

- placar: 83/144 (57,6%) a favor da Hoodwink em pro, a maior desvantagem entre os suportes pos 4/5 da lista (fonte: pro_dados/silencer.json e pro_dados/hoodwink.json).
- por que importa: suporte pos 4/5 muito jogado contra ele (144 partidas) e a pior amostra dentro do grupo "mesma função", vale entender por quê.
- janelas: até os 12 min a Hoodwink cresce rápido de poke (lh10 8 contra 6 do Silencer, gpm 343 contra 304, fonte: resumo); dos 12 aos 24 min ela abre distância com Arcane Boots (12,2 min) e Aghanim's Shard (23,8 min, n=1224) chegando quase junto do seu Glimmer Cape (23,0 min), só que o kit dela funciona a 3000 de distância (alcance de Sharpshooter) enquanto o seu precisa de 850-900 pra acertar Last Word.
- o que ele faz com você: Sharpshooter carrega até 3s e acerta num alcance de 3000, aplicando quebra (break) e lentidão de até 50% por 5s, dano máximo de 600-1350 (fonte: constants_abilities.json). Bushwhack prende perto de árvore e zera sua visão durante o stun, o que te deixa cego justo na hora que ela prepara o Sharpshooter.
- o que você faz com ele: Global Silence cancela o Sharpshooter no meio do carregamento se você acertar antes dela soltar a flecha, e cala a Scurry também, tirando a mobilidade entre árvores dela. Last Word nela também interrompe se ela decidir castar durante o enchante de 4s.
- itens que viram: o shard dela (bumerangue com dano e debuff de vulnerabilidade a magia) aumenta seu próprio dano mágico contra ela depois de acertado, o que ajuda o Glaives of Wisdom. Seu Glimmer Cape (23,0 min) é a resposta direta ao alcance de 3000 do Sharpshooter: sai de vista antes da flecha carregar.
- como jogar: fique atrás de visão de ward quando ela estiver sem cooldown de Sharpshooter, 3000 de alcance cobre praticamente a lane inteira. Prefira engajar você primeiro, com Last Word a distância, em vez de deixar ela carregar o tiro livre.
- fonte: pro_dados/silencer.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_sharpshooter, hoodwink_bushwhack, hoodwink_scurry); aghs_desc (hoodwink shard).

## Contra Tusk (tusk)

- placar: 68/133 (51,1%) a favor do Silencer em pro, pequena vantagem (fonte: pro_dados/silencer.json).
- por que importa: suporte pos 4/5 de roaming muito jogado contra ele (133 partidas), com curva de poder parecida mas kit mais dependente de setup.
- janelas: até os 13 min as curvas batem quase igual (gpm 300 do Tusk contra 304 do Silencer, fonte: resumo); o Blink Dagger dele (19,0 min, n=2655, o item de build mais comprado dele, atrás só de wards e smoke) chega pouco antes do seu Force Staff (22,3 min), que é exatamente a janela onde ele tenta iniciar o combo completo; depois dos 22 min, se você sobrevive à iniciação, a vantagem vira sua porque o combo dele gasta tudo de uma vez e não tem plano B.
- o que ele faz com você: o combo padrão é Ice Shards pra bloquear fuga, Snowball pra te prender rolando, e Walrus PUNCH! fechando com dano crítico de até 300% e empurrão de 1000 de distância (fonte: constants_abilities.json). Cada peça desse combo é um cast.
- o que você faz com ele: Global Silence durante a janela de carregamento do combo cancela Ice Shards, Snowball e Tag Team de uma vez, sobrando só o Walrus PUNCH! físico (que ainda dói, mas sozinho é administrável). Last Word nele antes do combo começar já desarma a sequência inteira se ele tentar castar durante o enchante.
- itens que viram: o Aghanim's Scepter dele (chute em área com stun e dano, reduz recarga 50% contra creep) aumenta a frequência da iniciação, então depois desse item ele ameaça mais vezes por minuto. Sua Glimmer Cape segura o dano do Walrus PUNCH! se o silence falhar.
- como jogar: guarde seu Global Silence pro momento do engajamento dele, não gaste antes. Se perceber o Blink Dagger carregado e visão dele sumindo, assuma que o combo vem e posicione pra reagir com o ultimate, não pra fugir sem reagir.
- fonte: pro_dados/silencer.json; pro_dados/tusk.json; constants_abilities.json (tusk_snowball, tusk_tag_team, tusk_walrus_punch); aghs_desc (tusk scepter).

## Contra Phoenix (phoenix)

- placar: 73/133 (54,9%) a favor do Silencer em pro, a melhor vantagem entre os suportes pos 4/5 da lista (fonte: pro_dados/silencer.json).
- por que importa: suporte global muito jogado contra ele (133 partidas) e um dos confrontos mais favoráveis: o kit da Phoenix é 100% feitiço, então silence nela desliga o herói inteiro.
- janelas: a Phoenix farma mais rápido de suporte (lh10 23 contra 6 do Silencer, gpm 406 contra 304, fonte: resumo), então até os 15 min ela está na frente em recursos; o Aghanim's Shard dela (23,3 min, n=1527) chega quase junto do seu Force Staff e Glimmer Cape (22,3/23,0 min), mas é justamente nessa janela que o seu Global Silence (disponível desde o nível 6) vira o fator decisivo, porque anula Sun Ray, Fire Spirits e Icarus Dive ao mesmo tempo.
- o que ele faz com você: Icarus Dive avança em arco causando dano ao longo do tempo e lentidão, e se ela usar Supernova durante a sua perseguição ela renasce com vida e mana cheias (fonte: constants_abilities.json), então matar a Phoenix exige atenção ao timing da transformação.
- o que você faz com ele: Global Silence durante Icarus Dive ou logo antes da Supernova cancela a sequência inteira, e como a Supernova também é "strong dispel" ela não se livra do seu silence com a própria transformação (o silence continua rodando nela). Sun Ray exige canalização, então Last Word nela no meio do canal também corta a cura ou o dano que ela estava sustentando.
- itens que viram: o Aghanim's Scepter dela permite lançar Supernova em cima de um aliado e renascer junto, então depois desse item um Global Silence bem cronometrado pode negar a ressurreição de dois heróis de uma vez se pegar os dois dentro da janela certa.
- como jogar: priorize silenciar a Phoenix assim que ela tentar Icarus Dive ou Sun Ray, não espere ela confirmar Supernova. Glaives of Wisdom rouba intelecto dela a cada acerto, o que reduz o dano das habilidades dela ao longo da luta.
- fonte: pro_dados/silencer.json; pro_dados/phoenix.json; constants_abilities.json (phoenix_icarus_dive, phoenix_supernova, phoenix_sun_ray); aghs_desc (phoenix scepter).

## Contra Skywrath Mage (skywrath_mage)

- placar: 62/121 (51,2%) a favor do Silencer em pro, vantagem pequena mas consistente (fonte: pro_dados/silencer.json).
- por que importa: o outro suporte com ultimate global da lista (121 partidas), bom contraste porque os dois têm ultimates que dependem só de castar, não de posicionamento físico.
- janelas: curva parecida até os 17-18 min (gpm 332 contra 304, ambos suportes de int puro, fonte: resumo); Kaya dele (17,5 min, n=1020) e seu Arcane Boots/Force Staff chegam em janelas próximas; a partir dos 20-22 min, quem tiver visão e silenciar primeiro ganha a troca, porque os dois são 100% dependentes de feitiço e nenhum tem fuga física de verdade.
- o que ele faz com você: Mystic Flare distribui até 1600 de dano entre heróis numa área de 170 ao longo de 2s, dano suficiente pra matar um suporte sozinho se ele conseguir confirmar o cast (fonte: constants_abilities.json). Ancient Seal silencia e aumenta o dano mágico que você recebe em até 35%, o que combina muito mal com o burst dele.
- o que você faz com ele: Global Silence nele antes do Mystic Flare sair cancela o maior dano burst do kit dele inteiro, e como ele não tem nenhum jeito de dispelar ou escapar, uma vez calado ele fica parado esperando a duração acabar. Suffer In Silence aumenta seu dano nele enquanto ele está preso.
- itens que viram: o Aghanim's Scepter dele faz o Mystic Flare disparar um segundo em outro alvo aleatório num raio de 500, dobrando o perigo em luta de grupo depois desse item, então priorize silenciá-lo antes que ele consiga confirmar o combo nessa fase.
- como jogar: trate ele como prioridade de silence em qualquer luta que ele tenha mana pra Mystic Flare; Last Word funciona bem porque ele não tem motivo pra não castar algo dentro dos 4s do enchante.
- fonte: pro_dados/silencer.json; pro_dados/skywrath_mage.json; constants_abilities.json (skywrath_mage_mystic_flare, skywrath_mage_ancient_seal); aghs_desc (skywrath mage scepter).

## Contra Clinkz (clinkz)

- placar: 28/44 (63,6%) a favor do Silencer em pro, a maior vantagem da lista, mas amostra pequena (44 jogos, fonte: pro_dados/silencer.json).
- por que importa: maior vantagem percentual do Silencer com volume mínimo de 30+ jogos, e um bom exemplo de counter que não depende de lane: Clinkz é carry que vive de invisibilidade, e Last Word dá visão do alvo enchantado.
- janelas: Clinkz tem a curva de farm mais agressiva da lista inteira (lh10 62, gpm 628, fonte: resumo), então até os 14 min ele já fechou Power Treads (6,6 min) e está a caminho do Desolator (14,3 min, n=1063); mas é justamente nessa fase, enquanto ele ainda não tem Black King Bar, que o silence do Silencer anula o Skeleton Walk que ele depende pra escapar ou iniciar.
- o que ele faz com você: Skeleton Walk te deixa invisível até atacar ou usar item, com bônus de velocidade de até 45% (fonte: constants_abilities.json); Searing Arrows e Strafe dão o burst de auto-ataque que mata suportes rápido se ele conseguir engajar sem ser visto.
- o que você faz com ele: Last Word dá visão do alvo enchantado durante a duração, o que ajuda a revelar a posição dele mesmo que ele tente sumir em Skeleton Walk logo depois; e Global Silence cancela o próprio Skeleton Walk se ele tentar usá-lo pra escapar durante o ultimate.
- itens que viram: o Aghanim's Shard dele (canal de flechas perfurantes em linha) é uma exceção, porque é uma habilidade canalizada: Global Silence interrompe esse canal na hora se você acertar o timing. Black King Bar dele (não aparece no top itens do herói nesta amostra, ele raramente vive até comprar) muda tudo se ele chegar lá, porque aí o silence para de funcionar nele.
- como jogar: gankar o Clinkz antes dele upar Desolator (14 min) é o momento ideal, ele ainda não tem BKB e o silence resolve o duelo sozinho. Depois disso jogue pelo Force Staff pra reposicionar o time pra fora do alcance de Strafe em vez de tentar silenciar um Clinkz já com BKB.
- fonte: pro_dados/silencer.json; pro_dados/clinkz.json; constants_abilities.json (clinkz_wind_walk, silencer_last_word, silencer_global_silence); aghs_desc (clinkz shard).

## Contra Lina (lina)

- placar: 58/96 (60,4%) a favor do Silencer em pro, segunda maior vantagem e com boa amostra (96 jogos, fonte: pro_dados/silencer.json).
- por que importa: outro carry/mid de burst mágico muito jogado contra ele (96 partidas) sem lane em comum, escolhido pelo mesmo critério do Shadow Fiend: curva de poder que colide fora da lane.
- janelas: Lina farma rápido de burst (lh10 75, gpm 628, fonte: resumo), e chega em Blade of Alacrity/Boots of Travel por volta dos 12-18 min; mas Laguna Blade (o combo que mata) depende de castar sem interrupção, e isso é exatamente a janela do seu Global Silence, disponível desde o nível 6 do Silencer, bem antes da maioria dos picos de item dela.
- o que ele faz com você: Laguna Blade causa até 750 de dano fixo num único alvo, dano que sozinho mata a maioria dos suportes (fonte: constants_abilities.json); Fiery Soul acumula velocidade de ataque e movimento a cada feitiço acertado, então uma Lina que já combou fica rápida demais pra perseguir ou fugir normalmente.
- o que você faz com ele: Global Silence cancela Laguna Blade, Dragon Slave e Light Strike Array de uma vez, e como nenhum deles tem versão instantânea sem cast, uma Lina silenciada fica sem absolutamente nada além de atacar com item.
- itens que viram: o Aghanim's Scepter dela dá movimento sem obstáculo e acúmulo máximo de Fiery Soul ao ativar, então depois desse item ela fica muito mais difícil de fechar o alcance pra silenciar a tempo; priorize silenciá-la antes desse item ficar disponível (mediana 19,2 min).
- como jogar: trate toda aproximação dela como ameaça de Laguna Blade a partir do nível 6 dela, e tenha Global Silence pronto pra responder. Antes dos 19 min (antes do Scepter dela), um silence bem cronometrado praticamente neutraliza o turno dela sozinho.
- fonte: pro_dados/silencer.json; pro_dados/lina.json; constants_abilities.json (lina_laguna_blade, lina_fiery_soul); aghs_desc (lina scepter).

## Contra Primal Beast (primal_beast)

- placar: 27/45 (60,0%) a favor do Silencer em pro, terceira maior vantagem, amostra no limite dos 30+ (45 jogos, fonte: pro_dados/silencer.json).
- por que importa: offlane/carry de iniciação com dois cooldowns que dependem de tempo de preparo (charge-up e canal), bom exemplo de como um ultimate global anula heróis que normalmente não se preocupam com silence.
- janelas: Primal Beast farma rápido pra offlane (lh10 50, gpm 504, fonte: resumo) e fecha Phase Boots (6,9 min) e Blink Dagger (13,7 min, n=803) cedo pra iniciar; Onslaught precisa de até 2,2s de carregamento antes de soltar, e Pulverize canaliza por 2,3s (fonte: constants_abilities.json), duas janelas que cabem inteiras dentro dos 4,5-6s do seu Global Silence.
- o que ele faz com você: Onslaught empurra e atordoa todo mundo no caminho com até 360 de dano; Pulverize agarra um alvo e bate repetido por 2,3s com dano crescente a cada acerto, o combo que mais mata suporte sozinho quando ele pega alguém.
- o que você faz com ele: Global Silence durante o carregamento do Onslaught cancela o dash inteiro antes dele sair do lugar, e se ele já estiver no meio do canal de Pulverize, o silence interrompe na hora e solta quem ele tinha agarrado.
- itens que viram: o Aghanim's Scepter dele (ao ativar Uproar, libera ondas de projéteis em círculo) aumenta o alcance de ameaça dele em luta de grupo, então depois desse item não basta silenciar: ainda sobra o dano físico dos stacks de Uproar acumulados.
- como jogar: guarde o Global Silence pro momento exato do Onslaught ou Pulverize, não antes; Black King Bar dele (22,0 min, n=708) é o ponto de virada, porque depois disso o silence não impede mais o combo.
- fonte: pro_dados/silencer.json; pro_dados/primal_beast.json; constants_abilities.json (primal_beast_onslaught, primal_beast_pulverize); aghs_desc (primal beast scepter e shard).

## Contra Treant Protector (treant)

- placar: 34/48 (70,8%) a favor do Treant em pro, a maior desvantagem da lista (fonte: pro_dados/silencer.json e pro_dados/treant.json).
- por que importa: maior desvantagem percentual do Silencer com 30+ jogos, suporte tanque que simplesmente aguenta a pressão que o Silencer depende de causar.
- janelas: as curvas de recurso são parecidas (gpm 301 do Treant contra 304 do Silencer, os dois suportes puros, fonte: resumo), então essa desvantagem não vem de farm, vem do kit: o Treant tem vida alta de base e Living Armor cura e bloqueia dano fixo por 12s mesmo sem poder recastar durante um silence, o que anula boa parte do dano que Glaives of Wisdom e Arcane Curse causariam nele.
- o que ele faz com você: Overgrowth prende em 800 de raio por até 5s, impedindo mover, blincar, ficar invisível ou atacar, é um silence/root de área que funciona mesmo contra o seu próprio Global Silence porque não depende de cast no momento do efeito já ativo (fonte: constants_abilities.json); Nature's Guise dá invisibilidade perto de árvore depois de 2,75s parado, dificultando sua visão pra confirmar o Last Word.
- o que você faz com ele: Global Silence nele cancela Living Armor e Leech Seed antes de serem usados, mas não remove o que já está ativo; o problema real é que o HP alto dele significa que Glaives of Wisdom sozinho demora demais pra matar, mesmo com Suffer In Silence ativo.
- itens que viram: o Aghanim's Shard dele (visão permanente numa árvore encantada por 360s) aumenta o controle de mapa dele contra o seu roaming, dificultando flanquear sem ser visto primeiro.
- como jogar: não tente ganhar esse confronto sozinho no 1x1, Treant é feito pra aguentar, não pra morrer rápido; foque em negar o farm dele e evitar ficar perto de árvore quando ele estiver parado (risco de Nature's Guise), deixando o dano pro resto do time.
- fonte: pro_dados/silencer.json; pro_dados/treant.json; constants_abilities.json (treant_overgrowth, treant_living_armor, treant_natures_guise); aghs_desc (treant shard).

## Contra Night Stalker (night_stalker)

- placar: 30/43 (69,8%) a favor do Night Stalker em pro, segunda maior desvantagem (fonte: pro_dados/silencer.json e pro_dados/night_stalker.json).
- por que importa: offlane/carry caçador que normalmente não divide lane com um pos 4/5 de roaming, mas que literalmente caça suportes isolados à noite, o exemplo mais direto do "quem caça quem" pedido: dois heróis que raramente se cruzam na lane, mas cuja curva de poder decide o confronto quando se encontram.
- janelas: Night Stalker farma rápido pra offlane (lh10 49, gpm 489, fonte: resumo) e fecha Phase Boots (7,3 min) e Blink Dagger (17,1 min, n=578) relativamente cedo; a partir do nível 6 dele (Dark Ascension, voo e bônus de dano por 30s) e à noite, ele caça exatamente o perfil do Silencer: suporte sem fuga e com pouca vida. De dia a ameaça cai bastante, porque Void e Crippling Fear duram menos e ele não voa.
- o que ele faz com você: Crippling Fear silencia todo mundo num raio de 375 por até 6s à noite, ou seja, ele te cala antes que você consiga usar o seu próprio silence (fonte: constants_abilities.json); Void mini-atordoa à noite, interrompendo qualquer canal que você tente dar; com Dark Ascension ativo ele voa e ganha até 150 de dano bônus, suficiente pra matar um suporte em poucos golpes.
- o que você faz com ele: de dia, sem o bônus de duração noturna, Global Silence nele cancela Void, Crippling Fear e Darkness antes de ele conseguir iniciar, e sem ultimate ativo ele perde o voo e o dano bônus.
- itens que viram: o Aghanim's Scepter dele reseta a recarga de todas as habilidades básicas ao matar um herói, então se ele já abriu a luta matando alguém, o kit dele volta inteiro pra cima de você na sequência; o shard faz Void acertar todo mundo num raio ao redor do alvo, ampliando o alcance da lentidão em luta de grupo.
- como jogar: evite ficar isolado à noite sem visão perto do território dele; se ele vier com Darkness ativo, prioridade total em fugir ou contra-iniciar com Global Silence antes dele acertar Crippling Fear em você.
- fonte: pro_dados/silencer.json; pro_dados/night_stalker.json; constants_abilities.json (night_stalker_darkness, night_stalker_void, night_stalker_crippling_fear); aghs_desc (night stalker scepter e shard).

## Contra Keeper of the Light (keeper_of_the_light)

- placar: 40/61 (65,6%) a favor do Keeper of the Light em pro, terceira maior desvantagem (fonte: pro_dados/silencer.json e pro_dados/keeper_of_the_light.json).
- por que importa: o outro suporte/roamer de int da lista com ultimate de longo alcance, bom contraste de "dois suportes que raramente trocam dano direto, mas competem pelo mesmo espaço de controle de mapa".
- janelas: Keeper of the Light farma bem mais rápido que um suporte comum (lh10 34, gpm 444, fonte: resumo), puxado pelo próprio Illuminate pegando creep de lane; ele costuma estar à frente do seu Arcane Boots (11,9 min) já com Holy Locket (15,3 min, n=629) ou caminho pra Boots of Travel (14,8 min); o alcance de 1550-1800 do Illuminate e o bônus de alcance de cast do Spirit Form (até +300) superam o seu alcance de 850-900 no Last Word e Fade... ou seja, ele ameaça de mais longe do que você consegue responder na maior parte da partida.
- o que ele faz com você: Illuminate é canalizado até 3s e causa até 500 de dano numa linha de 400 de largura e 1550 de alcance (fonte: constants_abilities.json); Chakra Magic devolve mana e reduz recarga de habilidades do time dele, o que combate exatamente a pressão de recurso que você tenta aplicar.
- o que você faz com ele: Illuminate é canal, então Global Silence interrompe o dano se você acertar durante o cast; mas o alcance dele dificulta chegar perto o suficiente pra confirmar o silence antes do dano sair.
- itens que viram: o Aghanim's Scepter dele invoca o Ignis Fatuus, um ponto que pisca e puxa inimigos pra si causando dano em área, lançado a distância e sem precisar da presença física dele junto do efeito, o que reduz ainda mais a exposição dele ao seu alcance de silence.
- como jogar: use visão de ward pra prever onde o Illuminate vai vir e saia da linha antes do canal completar; não tente vencer o duelo de alcance, jogue pelo flanco ou espere ele gastar mana em creep antes de se expor.
- fonte: pro_dados/silencer.json; pro_dados/keeper_of_the_light.json; constants_abilities.json (keeper_of_the_light_illuminate, keeper_of_the_light_chakra_magic); aghs_desc (keeper of the light scepter).
