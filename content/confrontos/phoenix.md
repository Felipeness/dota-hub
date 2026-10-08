---
id: confrontos-phoenix
heroi: Phoenix
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/phoenix.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/disruptor.json
- dota-hub-conteudo-novo/pro_dados/warlock.json
- dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- dota-hub-conteudo-novo/pro_dados/dark_seer.json
- dota-hub-conteudo-novo/pro_dados/marci.json
- dota-hub-conteudo-novo/pro_dados/death_prophet.json
- dota-hub-conteudo-novo/pro_dados/keeper_of_the_light.json
- dota-hub-conteudo-novo/pro_dados/lone_druid.json
- dota-hub-conteudo-novo/pro_dados/oracle.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer (partidas de liga, patches 7.40-7.41)
---

## Contra Rubick (rubick)
- placar: Phoenix venceu 190 de 351 partidas pro (54,1%). É o oponente que mais aparece na base de confrontos do Phoenix.
- por que importa: maior volume de jogos pro contra Phoenix de toda a base (351), mesmo quase nunca dividindo lane. O risco não é a lane, é o Spell Steal roubando a sua última magia ativa.
- janelas: Rubick sobe Arcane Boots (10,3 min) e Blink Dagger (21,6 min, pro_dados/rubick.json). Seu Aghanim's Shard (23,3 min, pro_dados/phoenix.json) chega antes do Shard dele (27,0) e do Scepter dele (27,4). Antes dos 21 min nenhum dos dois tem blink, a troca é por poke; depois do Blink dele, cuidado com ele fechando de perto só pra roubar uma magia.
- o que ele faz com você: Spell Steal copia a última magia ativa sua lançada a até 1000 de distância e atravessa Black King Bar (bkbpierce: yes, constants_abilities.json). Se você acabou de lançar Supernova, ele pode roubar e usar o Supernova dele mesmo (cura total e stun em área que atravessa BKB); Icarus Dive, Fire Spirits e Sun Ray também são roubáveis por serem ativas.
- o que você faz com ele: Rubick não tem vida alta nem disable instantâneo cedo (Telekinesis custa 110 de mana, cd de 22 a 13s, alcance de só 550 a 625); Fire Spirits (dano de 20 a 80 por segundo, corta até 140 de velocidade de ataque) zoneia ele antes de chegar perto pra roubar; Icarus Dive acerta e foge se ele tentar se aproximar.
- itens que viram: não gaste Supernova perto de um Rubick livre sem necessidade, ele fica rondando pra roubar justo essa magia; seu Aghanim's Shard (23,3) ajuda porque libera o Sun Ray mesmo dentro da Supernova, então mesmo que ele acerte o roubo num momento ruim, você segue curando o time.
- como jogar: gaste as magias fracas (Fire Spirits de zoneamento) perto dele e segure a Supernova fora do alcance de 1000 do Spell Steal até precisar; depois que ele gastar o roubo numa magia fraca, ele fica sem o roubo por 16 a 4s de recarga, essa é sua janela livre.
- fonte: pro_dados/phoenix.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, phoenix_supernova, phoenix_icarus_dive, phoenix_fire_spirits); aghs_desc (Phoenix, Rubick).

## Contra Shadow Fiend (nevermore)
- placar: Phoenix venceu 175 de 296 partidas pro (59,1%). Segundo oponente mais comum da base.
- por que importa: segundo maior volume de jogos pro (296), mid clássico que quase nunca divide lane com o pos5 Phoenix, mas os dois têm o combo mais perigoso do kit à distância: o Requiem dele executa de longe, a Supernova sua estuna em área, nenhum precisa se encontrar na lane pra decidir a luta.
- janelas: Shadow Fiend sobe Power Treads (5,9 min), Mask of Madness (10,2 min), Hurricane Pike (23,0 min), Black King Bar (25,2 min) e Daedalus (28,3 min, pro_dados/nevermore.json; partidas pro 7.40-7.41, OpenDota). Seu Tranquil Boots (8,8 min) e Aghanim's Shard (23,3) chegam bem antes do BKB dele; mesmo depois disso, sua Supernova atravessa o BKB dele de qualquer forma (bkbpierce: yes).
- o que ele faz com você: Shadowraze (até 280 de dano base mais bônus por alma acumulada, cd de só 9s) te raspa de longe sem precisar de visão direta; Requiem of Souls (até 20 linhas, reduz até 30% de velocidade e 15% de resistência mágica por linha acertada) executa à distância se sua vida estiver baixa, e reativa automaticamente mesmo se ele morrer.
- o que você faz com ele: sua Supernova atravessa o BKB dele e estuna em área mesmo com ele imune a magia; Fire Spirits corta até 140 de velocidade de ataque dele bem na hora em que ele depende de autoataque com Dragon Lance.
- itens que viram: seu Aghanim's Shard libera o Sun Ray mesmo durante a Supernova, então você se cura e ainda ameaça enquanto ele tenta destruir o sol; o BKB dele não impede seu stun final, a resposta real dele é destruir a Supernova antes da explosão (6 a 10 ataques de herói, conforme seu nível).
- como jogar: não force Supernova sozinho contra o Requiem já carregado, ele reativa automático mesmo morto; use Icarus Dive pra fechar ou fugir do alcance curto do Shadowraze (raio de 250, só 200 de distância na frente dele).
- fonte: pro_dados/phoenix.json; pro_dados/nevermore.json; partidas pro 7.40-7.41 (OpenDota); constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, phoenix_supernova).

## Contra Tusk (tusk)
- placar: Phoenix venceu 171 de 290 partidas pro (59,0%). Terceiro oponente mais comum da base.
- por que importa: terceiro maior volume de jogos pro (290), ganker clássico 4/5 que gira o mapa com Ice Shards e Snowball, perigoso justo na janela em que você está mais frágil e sozinho puxando ward ou farm.
- janelas: Tusk sobe Tranquil Boots (8,4 min) e Blink Dagger por volta dos 19,0 min (pro_dados/tusk.json); seu Aghanim's Shard (23,3) e Shiva's Guard (23,6) chegam pouco depois do Blink dele. Antes dos 19 min ele ganka a pé com Ice Shards e Snowball; depois disso, com blink nos dois (você já tem Icarus Dive desde o nível 1), vira corrida de quem inicia primeiro.
- o que ele faz com você: Ice Shards cria uma parede que te prende se você estiver do lado errado (cd de 23 a 14s); Walrus Kick acerta em linha com 550 de dano fixo e atravessa Black King Bar (bkbpierce: yes), cd de só 12s; Snowball em grupo pode te prender junto com aliados dele.
- o que você faz com ele: Fire Spirits reduz a velocidade de ataque dele bem na hora em que ele tenta puxar o combo de Walrus Punch; sua Supernova estuna em área mesmo que ele tenha BKB, e o cooldown de 120s dela recicla antes da próxima investida dele depois que ele já gastou o blink.
- itens que viram: como o Walrus Kick atravessa BKB, não dá pra confiar só em imunidade, o certo é não ficar isolado sem visão; seu Aghanim's Shard mantém o Sun Ray ativo mesmo dentro da Supernova, então você ainda cura o time se ele tentar focar o sol.
- como jogar: não ande sozinho sem visão nos primeiros 19 min, o gank dele não avisa; depois que ele gastar o Blink numa iniciação ruim, é sua janela livre pelos 15s de recarga do item.
- fonte: pro_dados/phoenix.json; pro_dados/tusk.json; constants_abilities.json (tusk_walrus_kick, tusk_ice_shards, tusk_snowball, phoenix_fire_spirits, phoenix_supernova).

## Contra Jakiro (jakiro)
- placar: Phoenix venceu 147 de 286 partidas pro (51,4%, equilibrado). Quarto oponente mais comum da base.
- por que importa: quarto maior volume de jogos pro (286) e o suporte pos5 "puro" mais comum contra o Phoenix, mesmo raramente dividindo lane. Controla área em dois raios diferentes, o Macropyre dele contra a Supernova sua.
- janelas: Jakiro sobe Arcane Boots (11,7 min), Shadow Amulet (20,7) e Glimmer Cape (22,8, pro_dados/jakiro.json). Seu Spirit Vessel (15,1) e Aghanim's Shard (23,3) caem no meio dessa janela. Macropyre tem cd de 90 a 70s e causa até 200 de dano por segundo, por até 10s, pra quem fica parado dentro; sua Supernova tem cd de 120s, mas decide a luta inteira numa única troca.
- o que ele faz com você: Ice Path (stun de 1,25 a 2s, cd de 20 a 11s) e Dual Breath (slow de até 40% e dano por segundo em cone, cd de só 10s) te prendem pro Macropyre; ficando parado dentro do Macropyre sem HP de sobra, o dano por segundo soma rápido.
- o que você faz com ele: Fire Spirits reduz a velocidade de ataque dele; Icarus Dive atravessa a área do Macropyre rápido (alcance de até 1400) sem ficar parado tomando o burn; sua Supernova estuna mesmo que ele tenha BKB (ele raramente compra), e a explosão final cura e reseta tudo.
- itens que viram: seu Aghanim's Shard mantém o Sun Ray ligado mesmo dentro da Supernova, então mesmo sob o Macropyre dele você segue curando o time; o Glimmer Cape dele dá invisibilidade curta, cuidado quando ele some antes de iniciar o combo.
- como jogar: não force luta dentro do Macropyre sem HP de sobra; puxe a troca pro momento em que ele já gastou o Ice Path, o cooldown de 20 a 11s é maior que a maioria dos seus combos.
- fonte: pro_dados/phoenix.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre, jakiro_ice_path, jakiro_dual_breath, phoenix_supernova, phoenix_fire_spirits).

## Contra Hoodwink (hoodwink)
- placar: Phoenix perdeu a maioria, 122 de 275 partidas pro vencidas (44,4%). Quinto oponente mais comum da base e o pior resultado entre os seis com mais volume.
- por que importa: quinto maior volume de jogos pro (275) e o único dos seis mais comuns em que o Phoenix perde mais do que ganha. Suporte 4/5 que zoneia à distância com Acorn Shot e pune erro de posicionamento com Bushwhack mais Sharpshooter.
- janelas: Hoodwink sobe Arcane Boots (12,2 min), Aghanim's Shard (23,8) e Force Staff (26,1, pro_dados/hoodwink.json). Seu próprio Aghanim's Shard (23,3) sai pouco antes do dela. Antes disso a ameaça real é o Sharpshooter, que carrega até 3s e acerta de muito longe (alcance 3000, dano de até 1350 no nível 3) se você ficar parado perto de arbustos.
- o que ela faz com você: Bushwhack (estuna perto de árvore, dano total de até 360, cd de 15 a 12s) te prende parado pro combo do time dela; Sharpshooter acerta à distância com break (anula suas passivas) e slow, é o nuke mais perigoso contra seu HP baixo cedo; Scurry dá fuga rápida se você tentar puni-la.
- o que você faz com ele: Fire Spirits corta a velocidade de ataque dela, que depende de autoataque pra valer item; Icarus Dive foge do alcance curto de ataque dela numa troca ruim; sua Supernova atravessa qualquer BKB que ela não tem.
- itens que viram: seu Aghanim's Shard (23,3) chega antes do dela (23,8), então o Sun Ray da sua Supernova já está liberado quando o combo dela estiver pronto; evite ficar parado perto de arbusto sem visão, é onde o Bushwhack rende.
- como jogar: varie a rota perto de arbustos nos primeiros 20 min; depois que ela gastar o Sharpshooter (recarga de 45s) numa magia fraca, force a luta, ela fica sem o maior nuke dela por quase um minuto.
- fonte: pro_dados/phoenix.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, hoodwink_scurry, phoenix_fire_spirits, phoenix_supernova).

## Contra Snapfire (snapfire)
- placar: Phoenix venceu 136 de 252 partidas pro (54,0%). Sexto oponente mais comum da base.
- por que importa: sexto maior volume de jogos pro (252), suporte de área com controle duplo (Scatterblast mais Firesnap Cookie) que compete pelo mesmo papel de "suporte que aguenta na frente" que o Phoenix.
- janelas: Snapfire fecha o próprio Aghanim's Shard muito cedo, mediana de 16,9 min (pro_dados/snapfire.json), bem antes do seu (23,3). Até os 17 min ela ameaça mais no combo, com Firesnap Cookie (cd de 18 a 15s) e Scatterblast (cd de 18 a 9s); depois do shard dela, o Mortimer Kisses solta a própria criatura, mais perigoso em grupo do que no 1x1.
- o que ela faz com você: Firesnap Cookie salta e estuna em área (dano de até 300, cd curto); Scatterblast desacelera 100% em ponto de contato (bônus de 30% de dano e 50% na duração do debuff a curta distância); Mortimer Kisses chove dano em área por 5,5s, perigoso se você ficar parado perto da sua própria Supernova nessa janela.
- o que você faz com ele: Fire Spirits reduz a velocidade de ataque dela, que depende de Mortimer pra sustentar dano; sua Supernova estuna em área mesmo com qualquer imunidade que ela compre, e dura mais ataques pra ser destruída do que o cooldown do Scatterblast dela.
- itens que viram: o Aghanim's Shard dela sai bem antes do seu (16,9 contra 23,3), então até por volta dos 20 min ela tem mais ferramenta de combo cedo; depois do seu shard a troca equilibra, o Sun Ray liberado dentro da Supernova vira a sustentação a seu favor.
- como jogar: evite ficar parado perto dela antes dos 17 min, ela tem mais ferramenta de combo cedo; depois do seu Aghanim's Shard (23,3), force a troca em grupo.
- fonte: pro_dados/phoenix.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_firesnap_cookie, snapfire_scatterblast, snapfire_mortimer_kisses, phoenix_supernova); aghs_desc (Snapfire, Phoenix).

## Contra Disruptor (disruptor)
- placar: Phoenix venceu 111 de 192 partidas pro (57,8%).
- por que importa: suporte pos5 "puro" como o Phoenix, de kit totalmente diferente, controle de área com Static Storm silenciando tudo que estiver perto, inclusive a sua própria Supernova se você já estiver preso dentro do raio.
- janelas: Disruptor sobe Arcane Boots (11,4 min), Blink Dagger (24,0) e, bem mais tarde, Aghanim's Scepter (34,9, pro_dados/disruptor.json). Seu Aghanim's Shard (23,3) chega bem antes do Blink dele. Static Storm (cd de 100 a 70s) silencia e causa dano crescente por 6s em raio de 550; Kinetic Field cria uma parede que te prende numa área fechada.
- o que ele faz com você: Static Storm silencia e zera sua capacidade de reagir com magia durante a janela; Kinetic Field prende você e seus aliados numa área fechada; Glimpse te teleporta pra onde você estava 4s atrás, cancela qualquer posicionamento que você tenha feito.
- o que você faz com ele: Fire Spirits reduz a velocidade de ataque dele; Icarus Dive atravessa a parede do Kinetic Field porque você voa por cima, então a prisão não segura o seu escape; sua Supernova, se já lançada antes do silêncio, continua ativa mesmo que ele silencie você depois.
- itens que viram: lance a Supernova antes de entrar no raio de 550 da Static Storm, uma vez no ar ela continua funcionando; seu Aghanim's Shard libera o Sun Ray mesmo dentro da Supernova, então mesmo silenciado por fora você ainda cura.
- como jogar: não entre no raio da Static Storm sem a Supernova já no ar; gaste o Icarus Dive pra furar o Kinetic Field se ele te prender antes do silêncio.
- fonte: pro_dados/phoenix.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm, disruptor_kinetic_field, disruptor_glimpse, phoenix_icarus_dive, phoenix_supernova).

## Contra Warlock (warlock)
- placar: Phoenix venceu 108 de 185 partidas pro (58,4%).
- por que importa: outro suporte pos5 "puro", mas de kit de controle de área com golems. O Chaotic Offering (ultimate dele) atravessa BKB igual a sua Supernova, os dois competem pelo estuno de área que decide luta de grupo.
- janelas: Warlock sobe Arcane Boots (10,7 min), Shadow Amulet (18,0), Glimmer Cape (20,5) e Solar Crest (22,2, pro_dados/warlock.json). Seu Aghanim's Shard (23,3) chega logo depois. Chaotic Offering (cd de 165s) estuna 0,8s em área de 600 e atravessa BKB, mas tem recarga bem mais longa que sua Supernova (120s).
- o que ele faz com você: Shadow Word te dá dano contínuo por 10s em área (ou cura ele se usado nele mesmo); Fatal Bonds liga você a aliados seus, parte do dano que você leva é sentido por eles também; Chaotic Offering atravessa BKB e estuna o grupo inteiro pra abrir o combo.
- o que você faz com ele: Fire Spirits reduz a velocidade de ataque dele e dos golems; sua Supernova também atravessa BKB e tem cooldown mais curto que o Chaotic Offering dele (120s contra 165s), então você recicla o estuno de área primeiro.
- itens que viram: nenhum item impede o Chaotic Offering (bkbpierce: yes), a defesa real é posição e timing; seu Aghanim's Shard garante Sun Ray mesmo dentro da Supernova, útil pra sustentar o time contra o dano constante do Shadow Word e dos golems.
- como jogar: cuidado com Fatal Bonds ligando você a um aliado baixo de vida, o dano se espalha; force a luta logo depois que ele gastar o Chaotic Offering, ele fica 165s sem o estuno de área enquanto sua Supernova recarrega bem mais rápido.
- fonte: pro_dados/phoenix.json; pro_dados/warlock.json; constants_abilities.json (warlock_rain_of_chaos, warlock_shadow_word, warlock_fatal_bonds, phoenix_supernova, phoenix_fire_spirits).

## Contra Ogre Magi (ogre_magi)
- placar: Phoenix venceu 94 de 149 partidas pro (63,1%).
- por que importa: outro pos5 puro, mas o kit dele depende do acerto de Fireblast (stun curto de recarga baixa) e não tem escape, enquanto você tem mobilidade com o Icarus Dive pra fugir ou punir.
- janelas: Ogre Magi sobe Arcane Boots (11,2 min) e, incomum pra um suporte, Hand of Midas (18,9, pro_dados/ogre_magi.json) antes do próprio Aghanim's Shard (26,1). Seu Aghanim's Shard (23,3) chega bem antes do dele. Fireblast tem cd baixo (11 a 8s) mas dano que não assusta sozinho (até 250 no nível 4, com chance de multicast de sorte).
- o que ele faz com você: Fireblast estuna 1,2s com recarga curta, pode vir em sequência se o multicast proccar; Ignite queima e lentifica por até 8s, soma dano ao longo do tempo se você ficar perto.
- o que você faz com ele: Fire Spirits reduz a velocidade de ataque dele, que tem baixo dano físico de base; Icarus Dive escapa do alcance curto de 525 do Fireblast; sua Supernova estuna o time dele inteiro numa área muito maior que qualquer coisa que ele tenha.
- itens que viram: ele rushar Hand of Midas (18,9) antes do item de suporte mostra prioridade de farm sobre utilidade de time, isso é uma janela, ele fica mais fraco em combo de grupo até comprar o próprio Aghanim's Shard (26,1); o seu chega 3 min antes.
- como jogar: não fique parado a menos de 525 de distância dele sem necessidade; force luta de grupo entre os 20 e 26 min, você tem mais ferramenta de área que ele nessa janela.
- fonte: pro_dados/phoenix.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_ignite, phoenix_fire_spirits, phoenix_supernova).

## Contra Dark Seer (dark_seer)
- placar: Phoenix venceu 37 de 52 partidas pro (71,2%). Melhor confronto registrado da base com 30 ou mais jogos.
- por que importa: melhor resultado de toda a base com amostra relevante (71,2% em 52 jogos). Dark Seer farma rápido com Ion Shell e inicia em grupo com Vacuum, mas não tem nenhuma ferramenta boa contra uma Supernova que atravessa BKB.
- janelas: Dark Seer sobe Arcane Boots (8,0 min), Mekansm (12,2) e Shiva's Guard (23,7, pro_dados/dark_seer.json), bem parecido com o seu próprio Shiva's Guard (23,6). Vacuum (cd de 60 a 30s, dano de até 250) puxa unidades numa área, perigoso em grupo mas não mata sozinho; Surge dá velocidade mas não é disable.
- o que ele faz com você: Vacuum te puxa pra dentro de uma área fechada, abre pro combo do time dele; Ion Shell soma dano se você ficar perto da unidade afetada por tempo longo.
- o que você faz com ele: Fire Spirits reduz a velocidade de ataque dele; sua Supernova atravessa qualquer BKB que ele compre (ele raramente tem disable duro pra evitar), e o stun em área de até 1200 de raio é maior que o Vacuum dele.
- itens que viram: os dois fecham Shiva's Guard quase no mesmo minuto (23,6 contra 23,7), a corrida de redução de armadura e slow em área empata; seu Aghanim's Shard (23,3) chega pouco antes do shard dele (24,3), pequena vantagem de timing.
- como jogar: não entre em grupo dentro do raio do Vacuum sem HP de sobra; force a luta com sua Supernova assim que ele gastar a iniciação, o dano dele sozinho não compete com seu stun em área.
- fonte: pro_dados/phoenix.json; pro_dados/dark_seer.json; constants_abilities.json (dark_seer_vacuum, dark_seer_ion_shell, phoenix_supernova, phoenix_fire_spirits).

## Contra Marci (marci)
- placar: Phoenix venceu 76 de 114 partidas pro (66,7%). Segundo melhor confronto da base com 30 ou mais jogos.
- por que importa: segundo melhor resultado com amostra relevante (66,7% em 114 jogos). Suporte/core 4/5 de iniciação corpo a corpo que depende de ficar colado no alvo, exatamente o que o Fire Spirits e a Supernova punem.
- janelas: Marci sobe Phase Boots (10,9 min), Black King Bar (24,3) e Skull Basher (29,7, pro_dados/marci.json). Seu Aghanim's Shard (23,3) chega antes do BKB dela; até lá ela ameaça com o combo de Dispose (Grapple) mais Unleash corpo a corpo.
- o que ela faz com você: Dispose te joga atrás dela e desacelera até 50%; Unleash dá rajadas de ataque rápido com pulso de dano em área ao final de cada combo, perigoso em troca prolongada.
- o que você faz com ele: sua Supernova atravessa o BKB dela (bkbpierce: yes) e estuna em área bem maior que o alcance curto dos combos dela; Fire Spirits corta a velocidade de ataque dela justo quando ela depende de autoataque rápido do Unleash.
- itens que viram: o BKB dela (24,3) não impede sua Supernova; seu Aghanim's Shard libera Sun Ray mesmo dentro da Supernova, então mesmo que ela entre no combo corpo a corpo você segue curando o time.
- como jogar: não aceite troca isolada corpo a corpo com ela sem seu Icarus Dive disponível pra abrir distância; force a luta em grupo, onde a Supernova neutraliza o BKB dela.
- fonte: pro_dados/phoenix.json; pro_dados/marci.json; constants_abilities.json (marci_grapple, marci_unleash, phoenix_supernova, phoenix_fire_spirits); aghs_desc (Marci).

## Contra Death Prophet (death_prophet)
- placar: Phoenix venceu 30 de 46 partidas pro (65,2%). Terceiro melhor confronto da base com 30 ou mais jogos.
- por que importa: terceiro melhor resultado com amostra relevante (65,2% em 46 jogos). Mid ou carry que farma rápido com Witchcraft e tem no Exorcism um dano físico que atravessa BKB, mas sem nenhum disable duro contra a Supernova.
- janelas: Death Prophet fecha Aghanim's Scepter cedo, mediana de 18,3 min (pro_dados/death_prophet.json), depois do Eul's Scepter (14,9), que fecha primeiro, e bem antes do próprio BKB (26,4). Seu Aghanim's Shard (23,3) chega antes do BKB dela. Exorcism (cd de 150s) solta espíritos que voltam pra ela em 40s, dano físico que atravessa BKB (bkbpierce: yes) mas precisa ficar perto do alvo.
- o que ela faz com você: Silence impede qualquer magia sua por até 5s em área de 450, cancela sua Supernova se usado antes do cast; Carrion Swarm (mágico) e Exorcism (físico, atravessa BKB) somam dano contínuo de longe.
- o que você faz com ele: Fire Spirits reduz a velocidade de ataque dela; sua Supernova atravessa o BKB dela, e como o Silence dela tem cd de 15 a 12s, ela não consegue te silenciar toda a luta.
- itens que viram: lance a Supernova antes dela conseguir o Silence, uma vez no ar ela continua funcionando mesmo que você seja silenciado depois; seu Aghanim's Shard garante Sun Ray mesmo durante a Supernova, sustenta contra o dano contínuo do Exorcism.
- como jogar: observe o cooldown do Silence dela (15 a 12s) antes de abrir com Supernova; depois que ela gastar, é sua janela livre de conjurar.
- fonte: pro_dados/phoenix.json; pro_dados/death_prophet.json; constants_abilities.json (death_prophet_silence, death_prophet_exorcism, phoenix_supernova, phoenix_fire_spirits).

## Contra Keeper of the Light (keeper_of_the_light)
- placar: Phoenix perdeu a maioria, 29 de 85 partidas pro vencidas (34,1%). Pior confronto de toda a base do Phoenix no pro com 30 ou mais jogos.
- por que importa: pior resultado registrado com amostra relevante (34,1% em 85 jogos). Controla mapa e farm com Illuminate à distância, sem precisar chegar perto pra punir o Phoenix.
- janelas: Keeper of the Light sobe Boots of Travel (14,8 min, incomum pra um suporte) e Holy Locket (15,3, pro_dados/keeper_of_the_light.json), mostra prioridade de farm e utilidade em vez de confronto direto. Illuminate (canalizado até 3s, dano de até 500) zoneia qualquer rota sem telegraph real; quando ele pega Spirit Form, estende o alcance de tudo pro mapa inteiro.
- o que ele faz com você: Illuminate detona de longe (alcance 1800) antes de você conseguir reagir; Solar Bind reduz sua resistência mágica em até 40% e lentifica quanto mais você se move, amplificando o resto do combo dele; Spirit Form permite ele punir seu farm solo de qualquer lugar do mapa.
- o que você faz com ele: Fire Spirits reduz a velocidade de ataque dele, mas o problema real não é dano, é visão e posicionamento; sua Supernova, se você conseguir fechar distância com Icarus Dive, estuna em área mesmo que ele tenha BKB (ele raramente compra).
- itens que viram: nenhum item seu neutraliza o alcance do Illuminate à distância; a resposta é visão de ward nas rotas e nunca repetir a mesma rota no mesmo minuto.
- como jogar: varie a rota de farm e mantenha visão nos pontos de canalização dele; gaste Icarus Dive pra fechar distância rápido se ele tentar punir de longe, ele não tem disable pra te segurar no meio do dive.
- fonte: pro_dados/phoenix.json; pro_dados/keeper_of_the_light.json; constants_abilities.json (keeper_of_the_light_illuminate, keeper_of_the_light_radiant_bind, keeper_of_the_light_spirit_form, phoenix_icarus_dive).

## Contra Lone Druid (lone_druid)
- placar: Phoenix perdeu a maioria, 13 de 38 partidas pro vencidas (34,2%). Segundo pior confronto da base com 30 ou mais jogos.
- por que importa: segundo pior resultado com amostra relevante (34,2% em 38 jogos), carry físico que raramente divide lane com um pos5, mas farma em dobro (ele e o Urso) e trava quem ficar perto demais com Entangle, ainda mais depois do Aghanim's Scepter.
- janelas: Lone Druid sobe Power Treads (5,4 min) e o Urso fecha Maelstrom (12,1), virando Mjollnir (16,5), além do Aghanim's Scepter (21,7, pro_dados/lone_druid.json), que aumenta o alcance e as pilhas do Entangle e remove a proteção contra ganhar novas pilhas enquanto já está entangled. Seu Aghanim's Shard (23,3) sai antes do shard dele (24,5).
- o que ele faz com você: True Form transforma o próprio Lone Druid num urso por 25s (10 a 20 de armadura, 500 a 1500 de vida e 50 a 130 de dano, conforme o nível), usado pra abrir troca corpo a corpo; Entangle precisa de 5 pilhas pra travar (2 pilhas por cast numa área de 350, depois 1 pilha por ataque dele durante 10s), com raiz de 1,2 a 2,4s e 90 de dano por segundo; o Aghanim's Scepter aumenta as pilhas e o alcance e tira a janela de imunidade entre travas.
- o que você faz com ele: Fire Spirits reduz a velocidade de ataque de quem estiver na área, incluindo o Urso; sua Supernova estuna numa área bem maior que o raio de 350 do Entangle dele, e atravessa qualquer imunidade que ele compre.
- itens que viram: o Aghanim's Scepter dele (21,7) é sobre travar você em sequência com o Entangle, não sobre o Urso virar independente do Druid; seu próprio Aghanim's Shard sustenta o time contra o DPS alto do Urso com Mjollnir.
- como jogar: não fique parado perto dele sem contar as pilhas de Entangle; abra a troca você primeiro com Icarus Dive ou Supernova antes que ele consiga as 5 pilhas pra travar.
- fonte: pro_dados/phoenix.json; pro_dados/lone_druid.json; constants_abilities.json (lone_druid_entangle, lone_druid_true_form, lone_druid_spirit_bear, phoenix_supernova); aghs_desc (Lone Druid).

## Contra Oracle (oracle)
- placar: Phoenix perdeu a maioria, 12 de 32 partidas pro vencidas (37,5%, amostra pequena). Terceiro pior confronto da base com 30 ou mais jogos.
- por que importa: terceiro pior resultado com amostra relevante (37,5% em 32 jogos, no limite mínimo). Suporte pos5/4 de cura garantida que anula justo o que sua Supernova faz, remove debuff e atrasa dano com False Promise.
- janelas: Oracle sobe Arcane Boots (11,7 min) e Aether Lens (25,4, pro_dados/oracle.json), suporte de utilidade pura sem item de dano cedo. False Promise (cd de 110 a 60s) atrasa qualquer dano ou cura por até 10s e remove a maioria dos debuffs no cast, chega quase a salvar um aliado prestes a morrer pro stun da sua Supernova.
- o que ele faz com você: False Promise em um aliado dele anula o timing do seu combo de dano, o dano fica represado e só conta depois; Fortune's End dispela buffs, raiz e ainda causa dano, cancela qualquer vantagem de Sun Ray ativo; Purifying Flames cura rápido um aliado dele, compete direto com a cura que você dá.
- o que você faz com ele: Fire Spirits reduz a velocidade de ataque dele; sua Supernova estuna em área e a explosão te restaura por completo, mas se ele usar False Promise num alvo antes dela, o efeito é adiado.
- itens que viram: False Promise dele é dispel forte (Strong Dispel) e atravessa BKB (bkbpierce: yes), nenhum item seu cancela isso; a resposta é focar matar antes dele conseguir reagir ou esperar o cooldown de 110 a 60s dele cair.
- como jogar: observe quando ele já gastou o False Promise, é sua janela de executar; não dependa só da Supernova pra fechar o kill se um alvo dele estiver protegido, ela atrasa o dano em vez de negar.
- fonte: pro_dados/phoenix.json; pro_dados/oracle.json; constants_abilities.json (oracle_false_promise, oracle_fortunes_end, oracle_purifying_flames, phoenix_supernova, phoenix_fire_spirits).
