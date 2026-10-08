---
id: confrontos-arc_warden
heroi: Arc Warden
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/arc_warden.json
- dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/disruptor.json
- dota-hub-conteudo-novo/pro_dados/pudge.json
- dota-hub-conteudo-novo/pro_dados/queenofpain.json
- dota-hub-conteudo-novo/pro_dados/zuus.json
- dota-hub-conteudo-novo/pro_dados/windrunner.json
- dota-hub-conteudo-novo/pro_dados/shadow_shaman.json
- dota-hub-conteudo-novo/pro_dados/sniper.json
- dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- dota-hub-conteudo-novo/pro_dados/shredder.json
- dota-hub-conteudo-novo/pro_dados/morphling.json
- dota-hub-conteudo-novo/pro_dados/antimage.json
- dota-hub-conteudo-novo/pro_dados/phantom_lancer.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Contra Ogre Magi (ogre_magi)
- placar: 13 vitórias em 30 jogos de pro, 43,3% (fonte: pro_dados/arc_warden.json, matchups do OpenDota)
- por que importa: é o oponente com mais jogos registrados contra o AW em pro, mesmo sem dividir lane (Ogre é 5, AW é mid). Ele aparece em quase todo draft contra um herói item-dependente porque é stun barato e constante.
- janelas: até 10 min, Ogre já ameaça sem precisar de item (Fireblast disponível desde o nível 1, cooldown de 8 a 11s), antes do Midas do AW sair (6,5 min, mediana pro_dados). Dos 12 aos 19 min o AW puxa a frente com Midas e Maelstrom (12,5 min) enquanto Ogre ainda empilha Força pro Multicast. Depois dos 26 min, Ogre pega o Aghanim's Shard (26,1 min, mediana pro_dados/ogre_magi.json), que dá Fire Shield, escudo pra um aliado que devolve bola de fogo a cada ataque recebido (fonte: aghs_desc). É efeito defensivo, não muda a frequência do stun do Fireblast, que só fica mais barato (35% da mana atual em vez de custo fixo) se o Ogre tiver o Scepter, raro nessa posição.
- o que ele faz com você: Fireblast interrompe o farm e pode acertar a Tempest Double antes dela render. Ignite aplica dano ao longo do tempo (20 a 50 por tick conforme o nível) e reduz a velocidade de movimento em 25% por 5 a 8s, difícil de escapar depois de acertado (fonte: constants_abilities.json). Multicast faz o stun ou o Ignite saírem em dobro sem aviso.
- o que você faz com ele: Flux só causa dano com o alvo sozinho, sem inimigo a 225 de raio, e Ogre é lento e frágil, então pegá-lo isolado destrava o DoT inteiro. Depois do Mjollnir (18 a 19 min) o chain lightning (até 12 alvos, 180 de dano) limpa Ogre junto com qualquer ward ou creep perto dele.
- itens que viram: Orchid Malevolence (21,4 min, pro_dados/arc_warden.json) silencia o Ogre isolado antes do Fireblast e devolve 30% do dano recebido. O Scepter do AW dá silêncio ao Flux quando o alvo está sozinho, travando o combo de magia do Ogre por completo (fonte: aghs_desc).
- como jogar: não force troca de dano contra o Fireblast livre antes dos 10 min. Puxe o Ogre pra fora do time com Spark Wraith mais Flux antes dele ter suporte por perto, e guarde o Orchid pra ele depois dos 20 min.
- fonte: pro_dados/arc_warden.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_ignite, arc_warden_flux); aghs_desc (arc_warden scepter, ogre_magi scepter, ogre_magi shard)

## Contra Rubick (rubick)
- placar: 11 vitórias em 28 jogos de pro, 39,3%, amostra pequena (fonte: pro_dados/arc_warden.json)
- por que importa: pior winrate do AW entre os confrontos com volume alto de jogos. Rubick entra em quase todo draft como contador universal de magia, e rouba justamente a magia que fecha o 1x1 do AW.
- janelas: Rubick não tem spike de item cedo, só bota aos 4,7 min. O perigo dele é pontual desde o nível 1 (Spell Steal copia a última magia lançada perto), e o alcance e o segundo slot de roubo vêm só com o Scepter (27,4 min, pro_dados/rubick.json).
- o que ele faz com você: Spell Steal copia a última magia lançada pelo AW perto dele (Flux, Spark Wraith ou Magnetic Field) e usa contra o time. Com o próprio Scepter, Rubick rouba 2 magias de uma vez e qualquer uma delas sai na versão Scepter, então um Flux roubado pode virar silêncio mesmo que o AW não tenha o Scepter dele (fonte: aghs_desc).
- o que você faz com ele: Rubick é muito frágil e sem fuga própria fora da Telekinesis nele mesmo. A Tempest Double dobra o DPS de auto-ataque em cima dele antes dele reposicionar, e ele raramente aguenta um Spark Wraith mais um ataque.
- itens que viram: evite castar Flux ou Spark Wraith perto do Rubick sem necessidade, ele rouba a última magia usada no alcance dele. Orchid silencia ele antes do Spell Steal.
- como jogar: controle quando castar suas magias perto do Rubick, feche o pick dele rápido com a Double assim que ele aparecer sozinho, e evite abrir o combo de magia bem na frente dele.
- fonte: pro_dados/arc_warden.json; pro_dados/rubick.json; aghs_desc (rubick scepter); constants_abilities.json (rubick_spell_steal)

## Contra Shadow Fiend (nevermore)
- placar: 12 vitórias em 28 jogos de pro, 42,9%, amostra pequena (fonte: pro_dados/arc_warden.json)
- por que importa: segundo oponente com mais jogos em pro contra o AW. Os dois disputam a posição de mid com frequência, então é um dos poucos confrontos desta lista que também é de lane, além de ser o carry mais escalável contra ele.
- janelas: até 10 min, SF tem o farm mais puro da lista (lh10 de 78, pro_dados/nevermore.json) e Shadowraze pode punir a lane do AW sem precisar de mira fina. Dos 12 aos 19 min os dois correm itens parecidos (SF no Blade of Alacrity aos 12,7 min, AW no Javelin aos 11,6 min). Depois dos 20 min, Requiem of Souls (cooldown de 120 a 100s, dano escala com almas colhidas) ameaça apagar a Tempest Double se ela estiver com vida baixa perto do SF.
- o que ele faz com você: Shadowraze (3 variações, sem precisar de alvo) acerta o AW ou a Double mesmo sem mira. Requiem com muitas almas derruba rápido quem estiver perto do SF, perigoso pra Double, que já perde até 35% de velocidade conforme "fractura" com o tempo.
- o que você faz com ele: Spark Wraith (100 a 310 de dano mágico, slow de até 1s) cobre as rotas de fuga do SF. Depois do Mjollnir o chain lightning acerta SF junto de qualquer wave que ele tente razear.
- itens que viram: BKB segura disable que vier junto de iniciação em cima do SF. Hurricane Pike cria distância de um SF corpo a corpo tentando acertar Raze à queima-roupa.
- como jogar: não deixe a Double parada perto do SF depois dos 20 min com vida baixa, e use Spark Wraith nas rotas de fuga dele no late, já que ele farma rápido demais pra alcançar andando.
- fonte: pro_dados/arc_warden.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_requiem, arc_warden_spark_wraith, arc_warden_tempest_double)

## Contra Snapfire (snapfire)
- placar: 13 vitórias em 28 jogos de pro, 46,4%, amostra pequena (fonte: pro_dados/arc_warden.json)
- por que importa: terceiro em volume de jogos contra o AW em pro, mas isso reflete popularidade geral do pick, o suporte mais flexível do patch (4 ou 5), mais do que um counter desenhado pro AW.
- janelas: Snapfire pega o Aghanim's Shard cedo pra suporte (16,9 min, pro_dados/snapfire.json), bem perto do Maelstrom do AW (12,5 min). Entre 15 e 20 min ela já tem engajamento com stun e desaceleração em cone enquanto o AW ainda está montando o Mjollnir.
- o que ele faz com você: Scatterblast desacelera em cone (até 100% de lentidão de movimento e ataque por 1s, fonte: constants_abilities.json, snapfire_scatterblast), bom pra separar a Double do AW de verdade numa luta. Firesnap Cookie com Shard faz a vítima saltar e ainda leva um Mortimer Kiss extra no pouso.
- o que você faz com ele: ela é ranged mas sem fuga própria além do movimento normal. Flux isolando ela fora do alcance de suporte do time tira o Scatterblast de jogo rápido.
- itens que viram: Orchid silencia antes do combo Scatterblast mais Cookie. Magnetic Field (100% de evasão de fora do campo) ajuda a segurar o dano físico da troca enquanto o slow do Scatterblast atrasa vocês.
- como jogar: não entre no cone do Scatterblast com a Double e o AW juntos, puxe ela sozinha com Spark Wraith antes de forçar a luta.
- fonte: pro_dados/arc_warden.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast); aghs_desc (snapfire shard)

## Contra Disruptor (disruptor)
- placar: 13 vitórias em 26 jogos de pro, 50,0%, amostra pequena (fonte: pro_dados/arc_warden.json)
- por que importa: suporte de controle mais comum contra o AW em pro depois do Ogre. Static Storm e Kinetic Field são as duas formas mais confiáveis de travar o AW no lugar e cancelar o combo de magia dele.
- janelas: Thunder Strike já incomoda desde o nível 1. O spike real é Static Storm (cooldown de 100 a 70s, disponível no nível 6), que silencia área bem na fase em que o AW ainda depende de castar Flux e Spark Wraith pra fazer dano, antes do Mjollnir (18 a 19 min).
- o que ele faz com você: Kinetic Field (cooldown de 20 a 14s) prende o AW e a Double numa barreira circular que nenhum dos dois atravessa, cancelando split e fuga ao mesmo tempo. Static Storm silencia os dois dentro da área, travando Flux, Spark Wraith e o cast da própria Tempest Double.
- o que você faz com ele: Disruptor não tem HP de sobra. Spark Wraith lançado antes do Kinetic Field formar ainda acerta, por ser um disparo instantâneo e não um cast contínuo.
- itens que viram: BKB segura o silêncio de Static Storm pra continuar castando e atacando. A habilidade não atravessa imunidade a magia (fonte: constants_abilities.json, disruptor_static_storm). O Scepter do AW dá silêncio ao Flux com o alvo sozinho, útil pra isolar o próprio Disruptor fora do time antes dele abrir o combo.
- como jogar: não entre em luta que já tem Kinetic Field formado sem BKB, e priorize matar o Disruptor rápido, já que ele não tem fuga própria depois de usar o combo.
- fonte: pro_dados/arc_warden.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm, disruptor_kinetic_field); aghs_desc (arc_warden scepter)

## Contra Pudge (pudge)
- placar: 12 vitórias em 24 jogos de pro, 50,0%, amostra pequena (fonte: pro_dados/arc_warden.json)
- por que importa: quarto em volume de jogos. Pudge é pick de lane isolada em qualquer posição, e o Hook ameaça pegar o AW sozinho farmando longe do time, que é exatamente como o AW joga.
- janelas: Meat Hook (cooldown de 18 a 12s, 1300 de alcance, fonte: constants_abilities.json) é perigo constante desde o nível 1. O spike de item do Pudge é tardio e secundário (Blink Dagger aos 19,5 min, pro_dados/pudge.json), porque ele vive de HP e magia, não de dano por item.
- o que ele faz com você: Hook pode puxar o AW ou a Double de longe enquanto ele farma sozinho numa lane, cancelando split push. Dismember, um channel que escala com a Força do Pudge, deleta uma Double com vida baixa se ela ficar presa nele.
- o que você faz com ele: Flux isola o Pudge quando ele avança sozinho atrás de um Hook, e Spark Wraith cobre a rota que ele usaria pra fugir depois de errar.
- itens que viram: BKB não segura o channel de Dismember, a habilidade atravessa imunidade a magia (fonte: constants_abilities.json, pudge_dismember). Hurricane Pike empurra 425 de distância assim que o Hook conecta, criando espaço antes do Dismember alcançar.
- como jogar: não farme numa lane isolada sem visão de Pudge depois do nível 6, e use o alcance do Flux (500 a 800) pra punir qualquer Hook errado dele.
- fonte: pro_dados/arc_warden.json; pro_dados/pudge.json; constants_abilities.json (pudge_meat_hook, pudge_dismember)

## Contra Queen of Pain (queenofpain)
- placar: 10 vitórias em 23 jogos de pro, 43,5%, amostra pequena (fonte: pro_dados/arc_warden.json)
- por que importa: o mid com mais jogos registrados contra o AW em pro. Os dois disputam a posição 2 com frequência, então é o confronto de lane direto mais comum da lista.
- janelas: até 10 min, Shadow Strike (cooldown de 13 a 4s, dano ao longo do tempo mais slow) pressiona a lane antes do AW ter o Midas pronto (6,5 min). Dos 12 aos 19 min os dois montam o core em ritmos parecidos. Depois dos 23 min, Sonic Wave (cooldown de 110 a 80s, até 625 de dano, fonte: constants_abilities.json) ameaça apagar a Double se ela estiver agrupada.
- o que ele faz com você: Shadow Strike cedo bulinga o AW sozinho na lane antes da Double existir. Blink reposiciona pra acertar Sonic Wave em cima da Double parada.
- o que você faz com ele: QoP é a mais frágil entre os mids da lista. Spark Wraith na rota de Blink dela costuma pegar o reposicionamento, e o Mjollnir acelera a troca antes do Sonic Wave valer a pena pra ela.
- itens que viram: Orchid silencia a QoP isolada antes do combo Shadow Strike mais Sonic Wave. O Scepter no Flux (silêncio com alvo sozinho) fecha a lane contra o harass dela.
- como jogar: na lane, jogue em cima dos cooldowns do Shadow Strike (13s no nível 1) pra farmar sem perder vida à toa, e evite agrupar a Double perto da QoP depois que ela tiver Sonic Wave pronto.
- fonte: pro_dados/arc_warden.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_shadow_strike, queenofpain_sonic_wave); aghs_desc (arc_warden scepter)

## Contra Zeus (zuus)
- placar: 8 vitórias em 18 jogos de pro, 44,4%, amostra pequena (fonte: pro_dados/arc_warden.json)
- por que importa: segundo mid mais comum contra o AW em pro. Thundergod's Wrath é a única magia do jogo que dá True Sight em volta de cada herói inimigo antes do dano, o que anula direto o plano de split push escondido do AW.
- janelas: Zeus tem spike por nível, não por item (gpm de 429, pro_dados/zuus.json, o mais baixo entre os mids desta lista). O primeiro Thundergod's Wrath (cooldown de 130s, custo de mana alto) costuma sair por volta dos 7 a 9 min de jogo em pro, assim que ele junta mana suficiente.
- o que ele faz com você: Thundergod's Wrath dá True Sight ao redor de cada herói inimigo antes do dano, revelando onde o AW e a Double estão splitando o mapa mesmo escondidos. O dano em si é baixo cedo, mas a visão sozinha já tira o valor do split.
- o que você faz com ele: Zeus não tem fuga própria fora de teleporte. Flux isolando ele sozinho numa rota de farm aplica o DoT completo, e ele morre rápido pra qualquer burst físico por ter pouco HP.
- itens que viram: Shadow Blade perde valor direto contra Zeus. O True Sight do ult revela quem está invisível pelo item (fonte: items.json, invis_sword; constants_abilities.json, zuus_thundergods_wrath). Prefira Blink ou Hurricane Pike pra fechar nele.
- como jogar: não deixe a Double sozinha splitando uma lane distante sem visão própria depois que o Zeus tiver o ult pronto, porque o cooldown de 130s não é tão longo assim e ele vai saber onde ela está.
- fonte: pro_dados/arc_warden.json; pro_dados/zuus.json; constants_abilities.json (zuus_thundergods_wrath); items.json (invis_sword)

## Contra Windranger (windrunner)
- placar: 13 vitórias em 19 jogos de pro, 68,4%, amostra pequena (fonte: pro_dados/arc_warden.json)
- por que importa: maior vantagem do AW entre os confrontos com volume de dois dígitos. Windranger não tem gap close confiável contra alguém que vira dois alvos simultâneos.
- janelas: Windranger farma rápido (lh10 de 36, pro_dados/windrunner.json) e chega no Maelstrom (13,4 min) quase junto com o do AW (12,5 min). Mas Focus Fire (cooldown de 70 a 30s) perde força contra dois alvos atacando ao mesmo tempo, porque ela só mira um por vez.
- o que ele faz com você: Shackleshot (cooldown de 16 a 10s) prende o AW ou a Double num inimigo ou árvore atrás, perigoso se pego sozinho. Windrun dá evasão total de ataque físico por alguns segundos, atrapalhando o DPS do Mjollnir.
- o que você faz com ele: Magnetic Field (100% de evasão de fora do campo, mais 30 a 120 de velocidade de ataque) neutraliza o kit majoritariamente físico dela. Com dois alvos ao mesmo tempo, o Focus Fire dela nunca foca os dois, e a Double sozinha já segura metade da luta.
- itens que viram: Mjollnir e Maelstrom dobrados pelas duas cópias superam o DPS de auto-ataque dela mesmo com Focus Fire ativo. MKB fura a evasão do Windrun se ela já tiver o nível alto da habilidade.
- como jogar: force a luta 2 contra 1 sempre que a Double estiver viva, já que Windranger sozinha não resolve dois alvos. Evite ficar enfileirado com uma árvore atrás quando ela tiver linha pro Shackleshot.
- fonte: pro_dados/arc_warden.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_focusfire, arc_warden_magnetic_field)

## Contra Shadow Shaman (shadow_shaman)
- placar: 12 vitórias em 18 jogos de pro, 66,7%, amostra pequena (fonte: pro_dados/arc_warden.json)
- por que importa: segunda maior vantagem do AW na amostra. Shadow Shaman depende de disable de alvo único (Voodoo, Shackles), que não resolve dois corpos ao mesmo tempo, e é um dos suportes mais frágeis do jogo.
- janelas: Shadow Shaman não tem spike de item, só de nível. Voodoo no 6 transforma o alvo em criatura inofensiva por um tempo que cresce com o nível, mas o AW também já tem a Double a partir do 6, então sempre sobra um AW livre mesmo se o outro for hexado.
- o que ele faz com você: Voodoo neutraliza por completo quem for pego, sem atacar nem castar. Shackles (channel) imobiliza e drena vida de um alvo só, enquanto Mass Serpent Ward (10 wards, imunes a magia) empurra lane sozinho.
- o que você faz com ele: ele é extremamente frágil e sem fuga própria fora do Ether Shock de área curta. Com dois AW atacando, mesmo perdendo um pro Voodoo, o outro mata o Shaman antes do combo render.
- itens que viram: BKB segura o combo inteiro, nem Voodoo nem Shackles atravessam imunidade a magia (fonte: constants_abilities.json, shadow_shaman_voodoo, shadow_shaman_shackles). Mjollnir acelera a troca depois que o combo for anulado.
- como jogar: não force 1x1 contra ele sem a Double por perto, porque o combo Voodoo mais Shackles mata um alvo isolado rápido. Com os dois juntos, ele não tem disable pros dois.
- fonte: pro_dados/arc_warden.json; pro_dados/shadow_shaman.json; constants_abilities.json (shadow_shaman_voodoo, shadow_shaman_shackles, shadow_shaman_mass_serpent_ward)

## Contra Sniper (sniper)
- placar: 11 vitórias em 17 jogos de pro, 64,7%, amostra pequena (fonte: pro_dados/arc_warden.json)
- por que importa: terceira maior vantagem do AW na amostra. Sniper também disputa farm por item, carry ou mid conforme o draft, e tem o maior alcance de ataque do jogo, mas pouquíssima mobilidade e vida.
- janelas: Sniper tem lh10 alto (72, pro_dados/sniper.json) e spike de item cedo, Maelstrom aos 12,5 min, igual ao do AW. O problema dele aparece depois: contra dois alvos vindo rápido, o alcance não compensa a falta de escape, já que Shrapnel e Assassinate são as únicas ferramentas de controle que ele tem.
- o que ele faz com você: Assassinate (cooldown de 20 a 10s, mira travada) pode executar a Double com vida baixa à distância. Shrapnel zona uma área e desacelera quem tenta fechar nele.
- o que você faz com ele: Magnetic Field dá velocidade e evasão pra fechar a distância que o alcance dele compensaria. Com dois corpos simultâneos, um puxando o foco de Assassinate e outro fechando, Sniper raramente sobrevive ao engajamento.
- itens que viram: Hurricane Pike ajuda a fechar ainda mais rápido ou, na defensiva, a empurrar o Sniper pra fora do alcance confortável dele. Mjollnir deleta ele em poucos ataques por ter pouco HP.
- como jogar: inicie a troca com Spark Wraith na rota de fuga dele e feche com a Double simultânea, já que ele não aguenta DPS dobrado de perto.
- fonte: pro_dados/arc_warden.json; pro_dados/sniper.json; constants_abilities.json (sniper_assassinate, sniper_shrapnel, arc_warden_magnetic_field)

## Contra Dragon Knight (dragon_knight)
- placar: 5 vitórias em 17 jogos de pro, 29,4%, amostra pequena (fonte: pro_dados/arc_warden.json)
- por que importa: maior desvantagem do AW com volume de jogos relevante (17). DK tanka o dano físico dobrado das duas cópias melhor que qualquer outro oponente da lista.
- janelas: até 15 min, os dois correm Power Treads e componentes de dano num ritmo parecido. Dos 16 aos 20 min, DK chega no Blink (16,2 min, pro_dados/dragon_knight.json) antes do AW ter o Mjollnir pronto (18 a 19 min), abrindo a iniciação. Depois dos 20 min, Breathe Fire (cooldown de 14 a 11s, dano em percentual da vida máxima) já está disponível há muito tempo e pune os dois AW igual, por ser dano percentual.
- o que ele faz com você: Breathe Fire é dano baseado em percentual da vida máxima em área, então acerta o AW e a Double igualzinho, clonar não dilui esse tipo de dano. Dragon Tail (stun de 1,8 a 2,4s conforme o nível, fonte: constants_abilities.json, dragon_knight_dragon_tail) prende um dos dois pro resto do combo. Elder Dragon Form dá alcance, splash e resistência mágica que seguram o burst de Flux e Spark Wraith.
- o que você faz com ele: Flux isolando ele sozinho ainda aplica o DoT completo, mas o HP alto do Dragon Knight segura bem. O jeito real de ganhar é evitar a troca direta e focar farm, deixando a luta pro resto do time.
- itens que viram: MKB não ajuda aqui, DK não depende de evasão. O que importa é Skadi pra travar a mobilidade dele depois do Blink. O item aplica slow de movimento e de ataque em quem leva o hit (fonte: items.json, skadi), já que sem isso ele entra e sai livre.
- como jogar: evite trocar Flux mais auto-ataque corpo a corpo com Dragon Knight sozinho, porque Breathe Fire devolve o dano em cima dos dois AW ao mesmo tempo. Jogue pelo farm e pela vantagem de split, não pelo confronto direto.
- fonte: pro_dados/arc_warden.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_breathe_fire, dragon_knight_dragon_tail); items.json (skadi)

## Contra Timbersaw (shredder)
- placar: 1 vitória em 14 jogos de pro, 7,1%, amostra muito pequena, abaixo de 15 jogos (fonte: pro_dados/arc_warden.json). O resultado é extremo o bastante pra merecer atenção mesmo com poucos jogos.
- por que importa: pior winrate de toda a lista de confrontos do AW em pro. O kit de Timbersaw ataca justamente os pontos fracos do AW, mobilidade curta e pouco HP real.
- janelas: Timber Chain (cooldown fixo de 4s, puxa ele até a árvore mais próxima no caminho) está disponível desde o nível 1, dando mobilidade que o AW não responde rápido. O core dele sai cedo (Kaya and Sange por volta de 13 a 18 min, pro_dados/shredder.json), reforçando dano mágico bem na janela em que o AW ainda depende de Flux e Spark Wraith pra ferir.
- o que ele faz com você: Timber Chain fecha distância instantânea onde tiver árvore por perto, e o mapa de Dota tem árvore quase em todo canto, negando o pouco espaço que o Magnetic Field cria. Whirling Death reduz o atributo primário de quem for pego por um tempo curto e ainda causa dano bônus por árvore destruída perto dele (fonte: constants_abilities.json, shredder_whirling_death).
- o que você faz com ele: Flux e Spark Wraith são dano mágico e não dependem de armadura, então ainda funcionam normalmente. O problema real é chegar numa posição de castar sem levar o gap close do Timber Chain primeiro.
- itens que viram: Hurricane Pike ajuda a recriar distância depois do Timber Chain, já que ele não tem outro dash. Orchid silencia pra impedir um segundo Timber Chain de fuga.
- como jogar: trate como matchup de respeito mesmo com amostra pequena, mantenha distância de árvores quando ele estiver por perto e não dependa só do Magnetic Field pra escapar, porque o Timber Chain ignora distância normal.
- fonte: pro_dados/arc_warden.json; pro_dados/shredder.json; constants_abilities.json (shredder_timber_chain, shredder_whirling_death)

## Contra Morphling (morphling)
- placar: 0 vitórias em 5 jogos de pro, 0%, amostra muito pequena, não dá pra tratar como estatística confiável (fonte: pro_dados/arc_warden.json)
- por que importa: é o exemplo mais direto do confronto "duas carries que raramente dividem lane". Morphling é o carry de farm puro mais parecido com o AW em filosofia (sobrevive sozinho, escala com item, não precisa de time pra crescer), e os dois decidem o jogo no mesmo minuto 25 a 35, só que em pontos diferentes do mapa.
- janelas: até 15 min, Morphling farma rápido (lh10 de 60, pro_dados/morphling.json) e já tem Waveform desde o nível 1. Dos 16 aos 20 min, os dois chegam perto do mesmo marco de item, Morphling no Manta (18,4 min) e o AW no Mjollnir (18 a 19 min). Depois dos 25 min, Morphling pega Butterfly (25,8 min) e vira muito difícil de acertar com dano físico sem True Strike.
- o que ele faz com você: Waveform deixa Morphling invulnerável durante o dash, então ele atravessa Spark Wraith e foge limpo. Adaptive Strike, um stun com dano que escala com a própria Agilidade dele (que ele infla via Morph), ameaça matar a Double de uma vez quando ela está sozinha. O roubo de atributo via Morph deixa ele cada vez mais tanque e com mais dano quanto mais a luta dura.
- o que você faz com ele: Flux aplica um DoT que o Waveform não cancela, só a invulnerabilidade durante o cast em si protege, então acertar antes ou depois dessa janela curta funciona. Mjollnir e Maelstrom dobrados pelas duas cópias superam a regeneração dele se o combate durar o suficiente.
- itens que viram: MKB ou Bloodthorn (28,2 min, pro_dados/arc_warden.json) são praticamente obrigatórios contra o Butterfly dele (35% de evasão, fonte: items.json, butterfly), porque sem True Strike o dano físico simplesmente erra. Skadi trava a velocidade dele fora da invulnerabilidade do Waveform.
- como jogar: não brigue contra o Waveform sem controle de área já aplicado (Flux no alvo antes dele ativar), e priorize montar MKB ou Bloodthorn assim que ele aproximar do Butterfly, porque depois disso o Mjollnir sozinho não resolve mais.
- fonte: pro_dados/arc_warden.json; pro_dados/morphling.json; constants_abilities.json (morphling_waveform, morphling_adaptive_strike_agi); items.json (butterfly)

## Contra Anti-Mage (antimage)
- placar: 4 vitórias em 5 jogos de pro, 80%, amostra muito pequena, não dá pra tirar conclusão de vantagem real (fonte: pro_dados/arc_warden.json)
- por que importa: outro clássico de "duas carries que não se enfrentam na lane mas decidem o jogo pelo relógio de farm". Anti-Mage é o carry mais dependente de ouro puro do jogo, então comparar o ritmo de item dos dois mostra quem chega na fase de poder primeiro.
- janelas: até 14 min, Anti-Mage com Battle Fury (14,1 min, pro_dados/antimage.json) já farma camp duplo, enquanto o AW ainda está no Maelstrom (12,5 min). Dos 15 aos 20 min, AM corre pro Manta (20,9 min) enquanto o AW segue pro Mjollnir (18 a 19 min). Depois dos 25 min, AM chega no Butterfly (27,7 min) e vira difícil de acertar sem True Strike.
- o que ele faz com você: Blink (cooldown de 10,5 a 6s) fecha distância instantânea até o AW ou a Double isolada splitando lane, território onde o AM historicamente também é forte por farmar sozinho e sem presença de visão. Mana Break queima mana a cada ataque, cortando o combo de magia do AW rápido se ele não tiver reserva.
- o que você faz com ele: Flux isolando o AM sozinho numa jungle (ele farma sozinho boa parte do jogo) aplica o DoT completo sem interrupção. Spark Wraith nas rotas de jungle dele avisa e já dá o primeiro tick de dano antes dele perceber.
- itens que viram: MKB ou Bloodthorn contra o Butterfly dele, igual no caso do Morphling. Orchid silencia antes do Blink reposicionar.
- como jogar: use Spark Wraith pra vigiar as rotas de jungle que ele mais usa e puna o farm isolado dele, já que ele é tão item-dependente quanto o AW mas sem nenhuma magia de longo alcance pra responder ao Flux.
- fonte: pro_dados/arc_warden.json; pro_dados/antimage.json; constants_abilities.json (antimage_blink, antimage_mana_break)

## Contra Phantom Lancer (phantom_lancer)
- placar: 5 vitórias em 9 jogos de pro, 55,6%, amostra pequena (fonte: pro_dados/arc_warden.json)
- por que importa: o carry mais jogado em pro entre os que decidem o jogo pelo farm sem dividir lane com o AW. O confronto é literalmente sobre identidade, AW com a Tempest Double, PL com as ilusões, quem engana quem primeiro.
- janelas: até 12 min, PL já farma rápido com Spirit Lance disponível desde o 1, gerando ilusão em cima de quem acerta. Dos 13 aos 20 min os dois correm Yasha praticamente junto, PL aos 11,7 min indo pro Manta aos 16,5 min. Depois dos 20 min, PL pega Ultimate Scepter (21,9 min, pro_dados/phantom_lancer.json), que turbina o Phantom Rush e gera ainda mais ilusões em luta.
- o que ele faz com você: Spirit Lance desacelera e soma uma ilusão de ataque extra em cima do alvo. Em grupo, o enxame de ilusões dele confunde qual AW é o real tanto quanto a Double confunde qual PL é o real, luta de espelho onde quem erra o foco primeiro perde.
- o que você faz com ele: Mjollnir e Maelstrom com chain lightning (até 12 alvos) acertam várias ilusões de PL ao mesmo tempo, o que mata o dano dele mais rápido do que ele mata a Double. Flux só funciona isolando o PL real, então puxar ele sozinho antes da luta vale mais que lutar no meio do enxame.
- itens que viram: MKB ou Bloodthorn também valem aqui porque o Phantom Rush dá evasão (20% a 50% conforme o nível, fonte: constants_abilities.json) pra quem carrega nele, incluindo as ilusões. Skadi reduz a velocidade do PL real quando ele tenta fugir.
- como jogar: evite lutar dentro do enxame de ilusões sem Mjollnir pronto, o chain lightning é o que resolve o número de alvos. Use Spark Wraith ou Flux pra confirmar qual é o PL real antes de comprometer o combo.
- fonte: pro_dados/arc_warden.json; pro_dados/phantom_lancer.json; constants_abilities.json (phantom_lancer_spirit_lance, phantom_lancer_phantom_edge, arc_warden_tempest_double); aghs_desc (phantom_lancer scepter)
