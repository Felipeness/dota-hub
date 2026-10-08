---
id: confrontos-obsidian_destroyer
heroi: Outworld Destroyer
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub/content/pro_dados/obsidian_destroyer.json
- C:/Users/felip/Desktop/dota-hub/content/pro_dados/{nevermore,rubick,disruptor,snapfire,lion,pudge,invoker,queenofpain,dragon_knight,lich,dark_willow,beastmaster,tusk,templar_assassin,legion_commander}.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
---

Base de comparação: nos 394 jogos de pro do patch 7.40/7.41 (pro_dados/obsidian_destroyer.json), Outworld Destroyer fecha Null Talisman com mediana de 2,5 min, Power Treads aos 7,4 min, Witch Blade (via Oblivion Staff 11,6 + Chainmail 12,1 + Orb of Venom 12,7) aos 13,7 min, Blink Dagger aos 19,3 min, e o componente Mystic Staff da Scythe of Vyse aparece com mediana de 33 min, ou seja, o Sheepstick cravado costuma sair perto dos 35 min. Antes da Witch Blade ele é fraco: o Arcane Orb só causa 10 a 13% do mana atual dele (constants_abilities.json), e no início do jogo esse pool ainda é pequeno.

## Contra Shadow Fiend (nevermore)
- placar: 39/80, 48,75% a seu favor em pro (pro_dados/obsidian_destroyer.json)
- por que importa: o mais enfrentado em pro (80 jogos), mid clássico contra mid clássico, os dois brigando pelo papel de segundo nuker de int do time.
- janelas: até 8 min ele sai na frente (Power Treads dele aos 5,9 min contra os 7,4 min seus); 10-13 min o Mask of Madness dele (10,2 min) abre uma janela de all-in antes da sua Witch Blade (13,7 min) responder; dos 13 aos 19 min o seu combo volta a ganhar a troca; dos 25 min em diante, com BKB (25,2 min) e Daedalus (greater_crit, 28,3 min), o right-click dele passa a decidir.
- o que ele faz com você: Shadowraze recarrega em 3s por instância e empilha um amplificador de dano no alvo (constants_abilities.json); Presence of the Dark Lord reduz sua armadura num raio de 1200 enquanto ele está perto; Requiem of Souls teme por até 2,15s e reduz sua resistência mágica, atrapalhando o follow-up da Sanity's Eclipse.
- o que você faz com ele: Astral Imprisonment prende ele por até 4s e rouba até 25% do mana máximo dele por 60s (constants_abilities.json), cortando o combustível do Shadowraze; Sanity's Eclipse pune mais quando o mana dele já está baixo depois de várias razes.
- itens que viram: Witch Blade dá true strike e segue acertando mesmo contra evasão; o BKB dele (25,2 min) bloqueia Astral Imprisonment e Sanity's Eclipse por inteiro (nenhuma das duas tem bkbpierce, constants_abilities.json), então o combo precisa sair antes disso.
- como jogar: troque dano na lane sem deixar ele puxar Shadowraze de graça; force a luta assim que a Witch Blade fechar, antes do Mask of Madness dele recarregar; depois dos 25 min, mate ele antes do BKB ou segure o combo pra depois da imunidade acabar.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/nevermore.json; constants_abilities.json; items.json

## Contra Rubick (rubick)
- placar: 33/67, 49,25% a seu favor em pro (pro_dados/obsidian_destroyer.json)
- por que importa: segundo mais enfrentado em pro (67 jogos); ele rouba seu último feitiço lançado e pode virar seu próprio combo contra você.
- janelas: até 10 min ele é só suporte, sem ameaça de dano; dos 13 aos 27 min o risco é o Spell Steal copiar Astral Imprisonment ou Sanity's Eclipse por até 300s no nível máximo (constants_abilities.json); a partir dos 21-27 min (Blink dele aos 21,6, Aghs aos 27,4) ele rouba com mais segurança e guarda até 2 feitiços ao mesmo tempo.
- o que ele faz com você: Spell Steal copia a última magia que você lançou e usa contra seu time; Telekinesis te joga pro ar e separa de aliados; Fade Bolt reduz seu dano de ataque por um tempo.
- o que você faz com ele: Astral Imprisonment nele tira ele da luta e rouba até 25% do mana máximo dele; evite lançar seu combo perto dele sem necessidade, pra não facilitar o steal.
- itens que viram: o Aghs Scepter dele (mediana 27,4 min) deixa guardar 2 feitiços roubados e upgrada pra versão de Scepter; seu BKB bloqueia a versão roubada de Astral Imprisonment/Sanity's Eclipse contra você, já que nenhuma das duas tem bkbpierce.
- como jogar: gaste o combo dele (Fade Bolt/Telekinesis) antes de abrir sua própria jogada; inicie fora da visão dele quando puder, pra reduzir a chance de steal.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/rubick.json; constants_abilities.json; aghs_desc (OpenDota API)

## Contra Disruptor (disruptor)
- placar: 25/53, 47,17% a seu favor em pro (pro_dados/obsidian_destroyer.json)
- por que importa: terceiro mais enfrentado (53 jogos); Glimpse e Static Storm interagem direto com sua rota de blink e seu combo.
- janelas: até 11 min ele é fraco em dano; dos 15 aos 24 min a Static Storm (6s, até 350 de dano por segundo em área de 550, constants_abilities.json) pode silenciar seu combo inteiro numa troca em grupo; dos 24 min em diante o blink dele (24,0 min) facilita acertar a silence à distância.
- o que ele faz com você: Glimpse te puxa 4s no tempo (até 280 de dano no nível 4), podendo te afastar do alvo que você prendeu; Static Storm silencia por 6s inteiros; Kinetic Field cria uma parede que separa você do resto da luta.
- o que você faz com ele: Astral Imprisonment nele some com o suporte mais perigoso da equipe antes da Static Storm sair; seu Arcane Orb (dano puro) não é afetado pelo kit de controle dele.
- itens que viram: seu BKB segura a Static Storm (sem bkbpierce, constants_abilities.json); Linken's Sphere bloqueia o Glimpse, que é de alvo único.
- como jogar: priorize matar ou afastar o Disruptor antes da luta grande; se a Static já está pronta, segure o BKB pra abrir a troca só depois.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/disruptor.json; constants_abilities.json

## Contra Snapfire (snapfire)
- placar: 22/52, 42,31% a seu favor em pro (pro_dados/obsidian_destroyer.json)
- por que importa: quarto mais enfrentado (52 jogos), função flexível (também joga 3 e 4); Lil' Shredder reduz sua armadura e Mortimer Kisses te desloca do seu farm.
- janelas: dos 10 aos 17 min ela já tem o Aghanim's Shard pronto (mediana 16,9 min, bem cedo pro padrão de suporte), que faz o Firesnap Cookie curar e lançar um Mortimer Kiss junto; dos 17 aos 21 min o Lil' Shredder (5 tiros, reduz armadura a cada acerto) prepara o alvo pro Mortimer Kisses de 8 globos.
- o que ela faz com você: Mortimer Kisses lança 8 globos de até 360 de dano de impacto cada, deixando poças que atrasam; Lil' Shredder reduz sua armadura a cada tiro; Scatterblast acerta em cone e reduz sua velocidade de movimento e de ataque, dificultando fugir ou perseguir.
- o que você faz com ela: Astral Imprisonment nela corta o combo de controle antes dele abrir; seu dano é puro, então a redução de armadura que ela aplica em você não muda o seu próprio output nela.
- itens que viram: o Aghs Shard cedo dela (16,9 min) antecipa o combo de controle; seu BKB segura Mortimer Kisses e Scatterblast por completo, os dois são dano mágico sem bkbpierce (constants_abilities.json).
- como jogar: não fique parado nas poças do Mortimer Kisses; Astral Imprisonment nela assim que ela abrir o Scatterblast, antes do combo completo sair.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/snapfire.json; constants_abilities.json; aghs_desc (OpenDota API)

## Contra Lion (lion)
- placar: 29/52, 55,77% a seu favor em pro (pro_dados/obsidian_destroyer.json)
- por que importa: empatado em volume de jogos com Snapfire (52); Hex e Finger of Death são o counter de controle clássico pro seu combo, mas o placar geral favorece você.
- janelas: até 7 min ele farma pouco; a partir do nível 6 (Finger of Death, até 850 de dano mágico no alvo) ele ameaça te matar de longe; dos 18 min em diante o blink dele (18,2 min) aproxima o combo de Earth Spike + Hex.
- o que ele faz com você: Hex desabilita todas as suas magias por até 3,2s no nível 4 (dispellable só por strong dispel, constants_abilities.json), cortando seu combo inteiro; Finger of Death causa até 850 de dano mágico; Earth Spike stuna em linha pra abrir a sequência.
- o que você faz com ele: Astral Imprisonment nele elimina a maior ameaça de kill isolado antes dele acertar o Hex; ele tem pouca vida, então seu Arcane Orb sozinho já ajuda a fechar a troca.
- itens que viram: seu BKB bloqueia tanto o Hex quanto o Finger of Death (nenhum tem bkbpierce, constants_abilities.json); Linken's Sphere bloqueia o primeiro dos dois que te acertar, já que os dois são de alvo único.
- como jogar: trate Lion como prioridade de kill ou de Astral Imprisonment antes da luta grande, porque o Hex dele anula seu combo se sair primeiro.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/lion.json; constants_abilities.json

## Contra Pudge (pudge)
- placar: 21/48, 43,75% a seu favor em pro (pro_dados/obsidian_destroyer.json)
- por que importa: sexto mais enfrentado (48 jogos); Meat Hook ameaça seu farm sozinho na lane e o Dismember te pega isolado depois.
- janelas: até 10 min o hook de 1300 de alcance já pune você se empurrar a lane sozinho; aos 17 min ele costuma ter Aghanim's Scepter pronto (bem antes do seu), que aumenta o raio e o dano do Rot; dos 19 min em diante o blink dele (19,5 min) facilita hooks à distância.
- o que ele faz com você: Meat Hook puxa você de até 1300 de distância (bkbpierce: sim, constants_abilities.json); Dismember desabilita e causa dano ao longo do tempo baseado na força dele, curando o total (também bkbpierce: sim); Rot causa dano constante em área perto dele.
- o que você faz com ele: Astral Imprisonment nele some com o maior risco de gank antes do próximo Hook; seu Arcane Orb ignora a resistência que ele ganha com itens de força.
- itens que viram: seu BKB não bloqueia Hook nem Dismember, os dois têm bkbpierce (constants_abilities.json), a defesa real é distância e visão, não imunidade mágica; Linken's Sphere bloqueia um Hook, por ser de alvo único.
- como jogar: não empurre a lane sozinho contra Pudge; se ele hookar um aliado, use Astral Imprisonment nele pra reduzir o dano em área do Rot na troca seguinte.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/pudge.json; constants_abilities.json; aghs_desc (OpenDota API)

## Contra Invoker (invoker)
- placar: 17/46, 36,96% a seu favor em pro (pro_dados/obsidian_destroyer.json)
- por que importa: mid rival mais enfrentado entre heróis de posição 2 (46 jogos); outro int que disputa o mesmo farm e mana no mid, e o E.M.P. ataca justamente seu pool de mana.
- janelas: até 10 min os dois brigam pelo mesmo recurso na lane; dos 10 aos 17 min, com Quas-Wex, o E.M.P. já castiga seu mana; dos 20 min (Aghs dele, 20,2 min) aos 22 min (Shard, 22,0 min) o combo Sun Strike + Forge Spirit escala; aos 28,9 min o Octarine Core dele reduz cooldown de tudo.
- o que ele faz com você: E.M.P. drena até 850 de mana num raio de 675 e causa dano baseado no que drenou (constants_abilities.json), tira o combustível do seu Arcane Orb/Sanity's Eclipse; Cold Snap trava seu cast em congelamentos repetidos; Sun Strike (com Shard, cria um Forge Spirit) ataca sem aviso à distância.
- o que você faz com ele: Astral Imprisonment nele rouba mana também, cortando o próprio combo Quas-Wex dele; seu Arcane Orb continua procando mesmo se ele escalar Exort pro dano em si, já que é dano puro à parte.
- itens que viram: seu BKB segura E.M.P. e Cold Snap (nenhum tem bkbpierce, constants_abilities.json); Linken's Sphere pouco ajuda contra o E.M.P. porque é em área.
- como jogar: não force all-in logo depois de levar E.M.P., seu mana já era; busque a troca com os dois pools cheios, não vazios.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/invoker.json; constants_abilities.json

## Contra Queen of Pain (queenofpain)
- placar: 17/41, 41,46% a seu favor em pro (pro_dados/obsidian_destroyer.json)
- por que importa: segunda mid mais enfrentada entre heróis de posição 2 (41 jogos); burst rival direto na troca de lane, mesmo papel de nuker de int.
- janelas: até 8 min ela farma mais rápido (bottle) e tem mais burst numa troca curta; dos 13 aos 14 min o Kaya dela (13,9 min) chega quase junto da sua Witch Blade (13,7 min), janela parelha; dos 23,5 min em diante o Aghs dela faz Shadow Strike virar área, aumentando o burst em grupo.
- o que ela faz com você: Sonic Wave causa até 625 de dano numa linha de 900 de distância, o maior nuke de linha única do jogo (tem bkbpierce, constants_abilities.json); Shadow Strike aplica dano ao longo do tempo e reduz sua velocidade de movimento por até 16s; o Blink dela entra e sai antes de você revidar.
- o que você faz com ela: Astral Imprisonment nela cancela o Blink de fuga antes do Sonic Wave sair; seu dano puro sobe junto com a resistência mágica que ela empilha, então ignora esse ganho dela.
- itens que viram: seu BKB segura Scream of Pain (sem bkbpierce) mas não o Sonic Wave, que tem bkbpierce e passa direto; Linken's Sphere bloqueia só a Shadow Strike, de alvo único.
- como jogar: evite trocar com pouca vida contra ela, o Sonic Wave pune queda rápida de vida mesmo com BKB; prenda ela com Astral antes do Blink de fuga.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/queenofpain.json; constants_abilities.json; aghs_desc (OpenDota API)

## Contra Dragon Knight (dragon_knight)
- placar: 22/35, 62,86% a seu favor em pro (pro_dados/obsidian_destroyer.json)
- por que importa: terceira mid mais enfrentada entre heróis de posição 2 (35 jogos) e a maior vantagem sua entre rivais de mesma função (62,9%).
- janelas: até 11 min ele é mais forte no corpo a corpo direto; dos 11 aos 16 min Mask of Madness (11,2 min) + Armlet (13,3 min) dão a ele uma janela de all-in curta; dos 16 min em diante (Blink dele, 16,2 min) ele engaja mais fácil, mas depender do corpo a corpo pro Breathe Fire/Dragon Tail acaba pesando contra seu kit à distância.
- o que ele faz com você: Dragon Tail stuna e abre o combo físico (sem bkbpierce, só strong dispel, constants_abilities.json); Breathe Fire reduz seu dano de ataque; Elder Dragon Form (nível 6 do ulti) dá alcance e ataque à distância por 60s.
- o que você faz com ele: Astral Imprisonment nele interrompe o all-in antes do Dragon Tail acertar; seu Arcane Orb (dano puro) ignora a resistência que o Dragon Blood dele dá.
- itens que viram: seu BKB segura o Dragon Tail; seu Hurricane Pike (23,3 min) te dá distância extra mesmo contra o Elder Dragon Form.
- como jogar: evite ficar no alcance curto de Dragon Tail; kite com Arcane Orb à distância, é o padrão que explica a vantagem de 62,9% no placar.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/dragon_knight.json; constants_abilities.json

## Contra Lich (lich)
- placar: 21/33, 63,64% a seu favor em pro (pro_dados/obsidian_destroyer.json)
- por que importa: sua maior vantagem com amostra robusta (63,6% em 33 jogos), ele é jogado contra você como pick de controle, mas o resultado não confirma isso 1x1.
- janelas: até 8 min ele farma devagar, suporte puro; dos 16 (shadow amulet) aos 23 min (Shard) ele ganha mobilidade e utilidade, mas o dano dele sozinho contra você continua baixo.
- o que ele faz com você: Frost Nova causa dano em área e reduz sua velocidade de ataque; Chain Frost (até 10 saltos, dano crescente a cada salto, constants_abilities.json) desacelera você em até -65%, mas os dois são fracos 1x1; Sinister Gaze canaliza e drena 20% do seu mana por segundo se acertar.
- o que você faz com ele: Astral Imprisonment nele interrompe a Sinister Gaze no meio da canalização; seu Arcane Orb ignora o Frost Shield, que só reduz dano de ataque, não dano mágico puro.
- itens que viram: seu BKB segura a Sinister Gaze (sem bkbpierce, constants_abilities.json); sua vantagem já é grande, então o foco é não deixar ele canalizar livre em cima de você.
- como jogar: interrompa a Sinister Gaze assim que ele começar; fora disso, ele raramente ganha a troca direta sozinho.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/lich.json; constants_abilities.json

## Contra Dark Willow (dark_willow)
- placar: 21/34, 61,76% a seu favor em pro (pro_dados/obsidian_destroyer.json)
- por que importa: sua terceira maior vantagem com amostra boa (61,8% em 34 jogos), atrás só de Lich e Dragon Knight; controle mágico que na teoria trava seu combo, mas o resultado em pro pende pra você.
- janelas: até 11 min ela é frágil no corpo a corpo; dos 17 aos 21 min ela ganha o Eul's Scepter (cyclone, 21,2 min) pra se proteger ou abrir combo; aos 29,2 min o Aghs Shard melhora o Cursed Crown.
- o que ela faz com você: Cursed Crown stuna em área depois de um delay de 4s; Bramble Maze te enraíza se você pisar num galho, até 2,5s no nível 4; Shadow Realm deixa ela te atacar com bônus de dano enquanto fica invisível pra você.
- o que você faz com ela: Astral Imprisonment nela antes do Cursed Crown saído evita a curse inteira, porque ela fica presa e não consegue castar; depois da curse já lançada no alvo, prender ela não cancela mais o estouro, o delay roda sozinho; o Shadow Realm dela não é evasão, é untargetable (constants_abilities.json), então nem seu Arcane Orb acerta nela enquanto durar, o que resolve é matar ela antes ou depois da janela, não durante.
- itens que viram: seu BKB bloqueia tanto o Cursed Crown quanto a raiz do Bramble Maze (nenhum dos dois tem bkbpierce, constants_abilities.json).
- como jogar: ande fora dos galhos plantados; puna ela assim que gastar o Cyclone de defesa, antes de recarregar.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/dark_willow.json; constants_abilities.json; aghs_desc (OpenDota API)

## Contra Beastmaster (beastmaster)
- placar: 8/31, 25,81% a seu favor em pro (pro_dados/obsidian_destroyer.json)
- por que importa: sua maior desvantagem com amostra robusta (25,8% em 31 jogos), ele quebra sua rota de farm cedo e stuna em área antes do seu combo sair.
- janelas: aos 8,8 min ele já tem Helm of the Dominator, acelerando o farm e empurrando lane contra você; aos 14,6 min ele costuma ter Aghanim's Scepter pronto (bem antes do seu) e aos 15,2 min o upgrade pro Helm of the Overlord, virando praticamente um segundo iniciador com visão e stun em área; aos 18,6 min o blink dele fecha a iniciação.
- o que ele faz com você: Primal Roar stuna por até 4s e empurra todo mundo no caminho, mesmo que você tenha imunidade mágica (tem bkbpierce, constants_abilities.json); Wild Axes acerta em linha e empilha um amplificador de dano no alvo, não reduz armadura (constants_abilities.json); Drums of Slom cura ele e os controlados a cada ataque perto de você.
- o que você faz com ele: Astral Imprisonment nele some com a iniciação antes do Primal Roar sair; seu Arcane Orb ignora a cura passiva do Drums, por ser dano puro.
- itens que viram: o Aghs cedo dele (14,6 min) é bem antes do seu, o jogo pode virar antes de você ter resposta; como o Primal Roar tem bkbpierce, BKB seu não resolve o stun, o que resolve é visão e distância antes da iniciação.
- como jogar: respeite o nível de visão/stun dele desde cedo; não force luta de grupo sem saber se ele já tem o Scepter pronto.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/beastmaster.json; constants_abilities.json

## Contra Tusk (tusk)
- placar: 18/43, 41,86% a seu favor em pro (pro_dados/obsidian_destroyer.json)
- por que importa: desvantagem relevante com bom volume de amostra (41,9% em 43 jogos); combo de controle em corrente que te isola do seu time.
- janelas: até 8 min ele farma devagar, ameaça pontual com Ice Shards na lane; dos 13,6 min (Phase Boots) aos 19,0 min (Blink) ele ganha mobilidade pra isolar você com Snowball; dos 19 min em diante o combo completo (Snowball + Ice Shards + Walrus Punch) já está disponível.
- o que ele faz com você: Ice Shards cria uma parede que te prende; Snowball te carrega até um aliado dele; Walrus Punch é um crítico de até 300% que te nocauteia no ar por 1s e tem bkbpierce (constants_abilities.json).
- o que você faz com ele: Astral Imprisonment nele cancela o Snowball em andamento, porque o disable interrompe o carregamento; seu Arcane Orb ignora a redução de velocidade que ele te aplica.
- itens que viram: seu BKB segura Ice Shards e Snowball (sem bkbpierce), cortando metade do combo antes do Walrus Punch, que passa direto mesmo com imunidade.
- como jogar: fique de olho em onde ele planta Ice Shards perto de você; se ele iniciar o Snowball, use Astral Imprisonment nele antes do impacto.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/tusk.json; constants_abilities.json

## Contra Templar Assassin (templar_assassin)
- placar: 10/24, 41,67% a seu favor em pro, amostra pequena (pro_dados/obsidian_destroyer.json)
- por que importa: counter clássico de mecânica, a Refraction bloqueia boa parte do Arcane Orb e da Sanity's Eclipse (constants_abilities.json); mesmo com amostra pequena, é um confronto que todo OD precisa saber jogar.
- janelas: até 7 min a troca de lane é parelha, os dois são frágeis cedo; aos 14,3 min o Desolator dela chega quase junto da sua Witch Blade (13,7 min); quem bate primeiro leva vantagem. Dos 17,4 min (Blink) aos 28,1 min (BKB) ela fecha o kit de right-click.
- o que ela faz com você: Refraction dá até 6 instâncias de barreira (30 de absorção cada) e até 60 de dano bônus por instância (tem bkbpierce, constants_abilities.json), absorvendo boa parte do seu Arcane Orb hit a hit; Meld (invisível, dano bônus fixo no ataque que sai da invisibilidade, não é crítico) ameaça seu corpo a corpo frágil.
- o que você faz com ela: Astral Imprisonment nela não gasta carga de Refraction (é disable, não dano, constants_abilities.json) e cancela o Meld; Sanity's Eclipse é um dano único em área grande, então o excesso que passa de cada instância da barreira ainda soma.
- itens que viram: com o Aghanim's Scepter dela (não o Shard, aghs_desc OpenDota API), as Psionic Trap passam a silenciar quem pisar nelas; seu BKB segura essa silence (sem bkbpierce); contra a Refraction, prefira abrir com Astral Imprisonment em vez de gastar Arcane Orb repetido nas barreiras dela.
- como jogar: não gaste Arcane Orb tentando estourar a Refraction, é ineficiente; abra com Astral Imprisonment e feche com Sanity's Eclipse de uma vez.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/templar_assassin.json; constants_abilities.json; aghs_desc (OpenDota API)

## Contra Legion Commander (legion_commander)
- placar: 11/24, 45,83% a seu favor em pro, amostra pequena (pro_dados/obsidian_destroyer.json)
- por que importa: counter de mecânica pelo Duel, já que Astral Imprisonment num aliado salva ele do Duel (constants_abilities.json), mas a amostra de pro, pequena, mostra um resultado parelho, levemente a favor dela.
- janelas: até 7 min ela farma rápido em trilane; dos 12,7 min (Blade Mail) aos 15,3 min (Blink) ela monta a janela de all-in isolado via Duel; depois dos 15 min o Duel decide boa parte das trocas 1x1.
- o que ela faz com você: Duel força vocês dois a só se atacar por até 5s, sem itens pra nenhum dos dois e sem magias pra você (só o alvo do Duel perde acesso às habilidades, quem conjura mantém as próprias, constants_abilities.json), e tem bkbpierce, ela costuma vencer essa troca de ataque básico por ter mais força e o Moment of Courage, contra-ataque com até 85% de lifesteal; Overwhelming Odds causa dano crescente por inimigo adjacente.
- o que você faz com ele: Astral Imprisonment num aliado tira ele do Duel se ela puxar nele; se o Duel sair em você, seu Arcane Orb continua procando, porque ataques básicos não são bloqueados pelo Duel, então a mana que sobrar ainda vira dano.
- itens que viram: seu BKB bloqueia a Astral Imprisonment que ela poderia sofrer de você, mas não bloqueia o próprio Duel (bkbpierce: sim); Linken's Sphere seu bloqueia o Duel inicial, por ser de alvo único.
- como jogar: evite ficar sozinho e com pouca vida perto dela depois do nível 6; se ela te Duelar, lute, porque seu Arcane Orb segue acertando mesmo sem magia disponível.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/legion_commander.json; constants_abilities.json
