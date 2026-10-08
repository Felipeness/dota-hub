---
id: confrontos-phantom_assassin
heroi: Phantom Assassin
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/phantom_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/skywrath_mage.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/luna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/sniper.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ursa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/life_stealer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/zuus.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/warlock.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/weaver.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/phantom_assassin.md
- https://api.opendota.com/api/constants/aghs_desc
- https://liquipedia.net/dota2/Evasion (via busca: evasão só se aplica a ataques, dano de habilidade sempre acerta)
---

## Como essa lista foi montada

Phantom Assassin é pos1 pura no dataset local (519 partidas pro 7.40+7.41, fonte: pro_dados/phantom_assassin.json). Os 16 oponentes abaixo cobrem quatro critérios: os 6 mais jogados contra ela em pro (Rubick, Ogre Magi, Disruptor, Skywrath Mage, Mars, Shadow Fiend), os 4 carries pos1 com mais partidas contra ela (Luna, Sniper, Ursa, Lifestealer), os 5 matchups medidos mais extremos com 30+ jogos (Dragon Knight e Zeus como vantagem, Hoodwink, Warlock e Ember Spirit como desvantagem) e 1 carry fora dessa lista incluído à parte, Weaver, porque é um dos pos1 mais escolhidos em pro no patch (996 jogos no dataset local) mesmo quase não dividindo lane com ela. O "placar" sempre é da perspectiva da Phantom Assassin (vitórias dela sobre o total de partidas daquele confronto).

## Contra Rubick (rubick)

- placar: 31 vitórias em 84 jogos de pro, 36,9% (fonte: pro_dados/phantom_assassin.json, campo confrontos)
- por que importa: é o oponente mais comum contra ela em todo o dataset pro (84 jogos), o suporte de controle clássico que aparece em quase metade dos drafts dela
- janelas: até 15 min: Rubick é só utilidade de wards e Fade Bolt, PA ainda está nos Treads (6:00, mediana 514 jogos); dos 15 aos 24 min: Rubick ganha Blink Dagger (21:36, mediana 2782 jogos) e passa a conseguir engajar de perto, janela perigosa pra PA que ainda não tem BKB; depois dos 23:30 (BKB dela, mediana 301 jogos): o jogo vira, porque o disable dele some
- o que ele faz com você: Telekinesis é dano mágico e stun puro (0,9-1,5s), não passa pela evasão do Blur porque evasão só bloqueia ataque, não habilidade (fonte: constants_abilities.json; liquipedia.net/dota2/Evasion); Fade Bolt reduz o dano de ataque dela em até 24% por 10s (fonte: constants_abilities.json, campo damage_reduction), o que corta direto a força do crit de Coup de Grace
- o que você faz com ele: Rubick tem pouca vida e zero disable depois que ela liga BKB (Telekinesis não trava mais); Phantom Strike (650-950 de alcance) ignora o blink dele e fecha a distância antes que ele reposicione
- itens que viram: Black King Bar dela anula o Telekinesis; o Aghanim's Shard dele (upgrade de Telekinesis pra também alvejar aliados) não muda nada no 1x1 direto
- como jogar: evite engajar perto de wards sem BKB nos primeiros 20 minutos; depois dos 23:30, ele se torna um alvo fácil pra Phantom Strike porque perdeu a única ferramenta que te travava
- fonte: pro_dados/phantom_assassin.json; pro_dados/rubick.json; constants_abilities.json; liquipedia.net/dota2/Evasion (via busca)

## Contra Ogre Magi (ogre_magi)

- placar: 43 vitórias em 77 jogos de pro, 55,8% (fonte: pro_dados/phantom_assassin.json)
- por que importa: 2º oponente mais comum contra ela (77 jogos) e um dos três melhores matchups medidos dela
- janelas: antes dos 19 min: Ogre ainda está em Arcane Boots (11:12, mediana 1926 jogos) e Hand of Midas (18:54, mediana 768 jogos), puro suporte sem grande ameaça; dos 20 aos 27: ele pega Aghanim's Shard (26:06, mediana 498 jogos) pro Fire Shield, mas isso protege aliado, não ele; PA com Battle Fury pronto (14:24) e BKB chegando (23:30) já está ultrapassando qualquer coisa que ele faça sozinho
- o que ele faz com você: Fireblast stuna 1,2s e dá até 250 de dano, é mágico então ignora a evasão do Blur (fonte: constants_abilities.json); Multicast pode proc 2x, 3x ou até 4x o mesmo feitiço (75%/30%/15% de chance, fonte: constants_abilities.json), o que deixa o stun e o burst dele bem inconsistentes
- o que você faz com ele: ele não tem fuga nenhuma e pouca vida pra um herói que passa boa parte do jogo de suporte; uma vez que ela sobrevive ao combo de Fireblast com BKB, um crit fecha a luta
- itens que viram: Black King Bar dela anula o stun; sem ele, o Multicast de 3-4x pode empilhar stun suficiente pra matar ela cedo se pegar sem vida
- como jogar: não entre sozinha no alcance de Fireblast (525) sem saber se o Multicast vai triplicar o stun; depois do BKB o confronto é unilateral a favor dela
- fonte: pro_dados/phantom_assassin.json; pro_dados/ogre_magi.json; constants_abilities.json

## Contra Disruptor (disruptor)

- placar: 28 vitórias em 74 jogos de pro, 37,8% (fonte: pro_dados/phantom_assassin.json)
- por que importa: 3º oponente mais comum contra ela em pro (74 jogos), a mesma dupla de suporte de controle que aparece ao lado de Rubick em quase todo draft
- janelas: Disruptor não tem power spike de item, o dele é por nível de ultimate (6, 11, 16); o perigo real é situacional, sempre que ele tem mana pra Kinetic Field + Static Storm prontos, não importa o minuto; PA só está segura depois do BKB (23:30) porque Static Storm silencia habilidade, não ataque
- o que ele faz com você: Kinetic Field cria um anel de 350 de raio que ela não atravessa por 2,6 a 4,4s (fonte: constants_abilities.json); Static Storm silencia tudo numa área de 550 de raio por 6s e causa até 350 de dano por segundo no pico (fonte: constants_abilities.json), travando Stifling Dagger e Phantom Strike ao mesmo tempo; Glimpse pode puxar ela de volta 4 segundos no tempo se tentar fugir
- o que você faz com ele: fora do combo de controle, Disruptor não tem nenhum dano real pra te punir sozinho; se ela entra com BKB, a Static Storm vira só dano de área, sem travar suas habilidades
- itens que viram: Black King Bar é a resposta direta ao silence da Static Storm (o Aghanim's Scepter dele só muta item, não afeta o BKB)
- como jogar: não force a luta se ele tem Kinetic Field e Static Storm prontos ao mesmo tempo sem BKB; com BKB ativo, ignore a silence e feche nele direto
- fonte: pro_dados/phantom_assassin.json; pro_dados/disruptor.json; constants_abilities.json

## Contra Skywrath Mage (skywrath_mage)

- placar: 37 vitórias em 71 jogos de pro, 52,1% (fonte: pro_dados/phantom_assassin.json)
- por que importa: 4º oponente mais comum contra ela em pro (71 jogos)
- janelas: dos 17 aos 22 min, Skywrath pega Kaya (17:30, mediana 1020 jogos) e o Aghanim's Shard (22:18, mediana 818 jogos), que triplica o Arcane Bolt; isso é exatamente a janela em que PA ainda está terminando Battle Fury (14:24) e não tem BKB (23:30); depois disso ela ultrapassa ele rápido porque ele é extremamente frágil
- o que ele faz com você: Ancient Seal silencia por 3 a 6s e aumenta o dano mágico recebido em até 35% (fonte: constants_abilities.json); Mystic Flare (ultimate) causa de 800 a 1600 de dano em 2s numa área de 170 de raio, dano mágico que ignora a evasão do Blur (fonte: constants_abilities.json) e pode te matar isolada se pegar cheio
- o que você faz com ele: ele não tem fuga nenhuma além de botas; Phantom Strike (650-950 de alcance) chega nele antes que a Mystic Flare esteja de novo disponível, e um crit o mata de uma vez
- itens que viram: Black King Bar bloqueia a silence da Ancient Seal (não bloqueia o dano da Mystic Flare, que é instantâneo e já vem antes do silence terminar, então vigilância de visão importa mais que item aqui)
- como jogar: evite ficar isolada no alcance de 700-850 da Ancient Seal sem saber se a ultimate dele está pronta; depois que ela fecha com Phantom Strike, a luta acaba rápido pro lado dela
- fonte: pro_dados/phantom_assassin.json; pro_dados/skywrath_mage.json; constants_abilities.json

## Contra Mars (mars)

- placar: 34 vitórias em 65 jogos de pro, 52,3% (fonte: pro_dados/phantom_assassin.json)
- por que importa: 5º oponente mais comum contra ela em pro (65 jogos) e também um dos melhores matchups medidos dela
- janelas: até 15:12 (Blink Dagger dele, mediana 2136 jogos) ele ainda está montando o kit; dos 15 aos 21 (Aghanim's Shard, 21:30, mediana 1743 jogos, melhora o Spear) é quando ele consegue iniciar lutas de verdade; PA com Battle Fury (14:24) já está pronta pra essa janela, e o BKB dela (23:30) chega quase junto com o dele (26:30)
- o que ele faz com você: Arena of Blood cria uma parede de 550 de raio por 5,5s que ninguém atravessa (fonte: constants_abilities.json), travando ela dentro da luta; God's Rebuke tem True Strike confirmado na própria descrição do jogo (fonte: constants_abilities.json), ou seja, ignora a evasão do Blur de propósito, além de dar crítico de 150 a 300% e empurrar
- o que você faz com ele: Spear of Mars exige acerto preciso a longa distância (900-1200) e erra fácil contra alguém que se move; depois que ela tem Desolator (20:42) ou BKB, o dano sustentado de crit dela supera o dele numa troca prolongada, mesmo dentro da Arena
- itens que viram: nenhum item especial dela anula a Arena (é imunidade de movimento, não debuff), então o jeito é vencer a troca de dano dentro dela, não escapar
- como jogar: não deixe ele acertar a Spear de longe; se a Arena fechar com você dentro, foque matar ele rápido em vez de tentar sair, porque sair não é possível
- fonte: pro_dados/phantom_assassin.json; pro_dados/mars.json; constants_abilities.json

## Contra Shadow Fiend (nevermore)

- placar: 29 vitórias em 63 jogos de pro, 46,0% (fonte: pro_dados/phantom_assassin.json)
- por que importa: 6º oponente mais comum em pro (63 jogos) e o carry com mais partidas registradas contra ela, catálogo marca Shadow Fiend como pos1 neste patch (fonte: herois_catalogo.json)
- janelas: até 10 min, Shadow Fiend com Mask of Madness (10:12, mediana 2340 jogos) já farma e troca com Shadowraze de burst puro, enquanto PA ainda está nos Treads (6:00); dos 14 aos 23 (Dragon Lance 14:00 e Hurricane Pike 23:00, medianas 2571 e 1385 jogos) ele ganha alcance pra kitar; depois dos 23:30 (BKB dela) a vantagem muda de lado porque ele não tem nenhum disable
- o que ele faz com você: Shadowraze causa de 85 a 280 de dano instantâneo em 3 direções diferentes, sem precisar de mira em unidade (fonte: constants_abilities.json), o que pune muito uma PA de nível baixo que ainda não tem vida; Requiem of Souls é um burst de execução em área que pode fechar a luta se ela estiver perto demais
- o que você faz com ele: Shadow Fiend não tem nenhum stun ou root, só dano e kite com itens de alcance; depois que ela tem Battle Fury e níveis, ela sobrevive ao raze e fecha com Phantom Strike antes do Requiem estar pronto de novo
- itens que viram: Black King Bar dela segura o burst de Requiem o suficiente pra ela fechar a troca; Hurricane Pike dele é a resposta pra ela chegar perto, então ela precisa fechar antes dele comprar (23:00)
- como jogar: evite trocar com ele antes do nível 6-7 (raze chunka demais); depois de Battle Fury e BKB, force a luta de perto onde ele não tem resposta
- fonte: pro_dados/phantom_assassin.json; pro_dados/nevermore.json; constants_abilities.json; herois_catalogo.json

## Contra Luna (luna)

- placar: 26 vitórias em 60 jogos de pro, 43,3% (fonte: pro_dados/phantom_assassin.json)
- por que importa: carry pos1 com 2º mais partidas contra ela entre os heróis da mesma função principal (60 jogos), mesmo raramente dividindo lane porque os dois puxam farm pra lanes opostas
- janelas: Luna tem o maior gpm medido desta lista (695, fonte: pro_dados/luna.json, contra 601 dela); com Manta pronto (17:12, mediana 1862 jogos) ela já ameaça com Eclipse em qualquer luta de grupo; o Butterfly dela (26:06, mediana 1053 jogos) é o item de pico seguinte; no 1x1 isolado, quem chega primeiro no outro geralmente ganha
- o que ela faz com você: Eclipse solta de 6 a 12 feixes numa área de 675 de raio, cada feixe é dano mágico (ignora o Blur) e com Aghanim's Scepter o intervalo cai pra 0,3s, virando um burst quase instantâneo em qualquer um parado perto (fonte: constants_abilities.json)
- o que você faz com ela: Luna não tem fuga além de botas; Phantom Strike (650-950) chega nela antes que ela consiga reposicionar, e ela tem pouca vida base pra aguentar um crit de Coup de Grace sozinha fora de grupo
- itens que viram: Black King Bar dela segura o burst da Eclipse o suficiente pra fechar o 1x1; pra ela, ficar fora do raio de 675 da Eclipse em teamfight é mais importante que qualquer item
- como jogar: evite ficar parada perto de aliados quando Luna tem a ultimate pronta; busque o 1x1 isolado, onde ela não tem resposta pra Phantom Strike
- fonte: pro_dados/phantom_assassin.json; pro_dados/luna.json; constants_abilities.json

## Contra Sniper (sniper)

- placar: 27 vitórias em 58 jogos de pro, 46,6% (fonte: pro_dados/phantom_assassin.json)
- por que importa: 3º carry pos1 mais jogado contra ela em pro (58 jogos)
- janelas: Sniper fecha Maelstrom aos 12:30 (mediana 944 jogos) ou já evolui pra Mjollnir aos 19:00 (763 jogos); o Hurricane Pike dele (23:24, mediana 577 jogos) é a resposta direta pro alcance curto dela; PA com Battle Fury (14:24) e BKB (23:30) está numa corrida de quem fecha o próprio spike primeiro
- o que ele faz com você: Assassinate causa de 300 a 500 de dano a até 3000 de distância depois de uma mira de 2s; é dano de habilidade, não ataque, então a evasão do Blur não se aplica de qualquer forma (evasão só bloqueia ataque, fonte: liquipedia.net/dota2/Evasion); Shrapnel ilumina a área e desacelera, negando a abordagem furtiva do Blur
- o que você faz com ele: Phantom Strike (650-950 de alcance) ignora o jogo de distância dele por completo; uma vez corpo a corpo, Sniper tem pouca vida e armadura baixa e morre rápido num crit
- itens que viram: nenhum item anula a mira do Assassinate; o jeito é negar visão (sem wards dele vendo você chegar) e fechar antes que ele complete os 2s de mira
- como jogar: não ande em linha reta no alcance dele sem saber se a Assassinate está pronta; feche com Phantom Strike de um ângulo sem visão e o resto é rápido
- fonte: pro_dados/phantom_assassin.json; pro_dados/sniper.json; constants_abilities.json; liquipedia.net/dota2/Evasion (via busca)

## Contra Ursa (ursa)

- placar: 25 vitórias em 55 jogos de pro, 45,5% (fonte: pro_dados/phantom_assassin.json)
- por que importa: 4º carry pos1 mais jogado contra ela em pro (55 jogos) e o duelo mais parecido no estilo: os dois são carries corpo a corpo que fecham o jogo com burst no 1x1
- janelas: os perfis de farm quase empatam (Ursa gpm 624 contra 601 dela); Battle Fury dos dois sai perto (dele 13:42, dela 14:24); o Blink Dagger dele (16:48, mediana 1565 jogos) chega antes do primeiro item de engajamento forte dela; o BKB de ambos sai quase junto (24:24 dele, 23:30 dela)
- o que ele faz com você: Overpower dá +400% de velocidade de ataque por até 6 ataques (20s de duração), mas continuam sendo ataques normais, então a evasão do Blur pode sim esquivar deles (evasão só não funciona contra habilidade, fonte: constants_abilities.json; liquipedia.net/dota2/Evasion); Fury Swipes empilha até +36 de dano por acerto consecutivo no mesmo alvo; Enrage dá 80% de redução de dano e dispel forte, limpando o slow do Stifling Dagger
- o que você faz com ele: Stifling Dagger desacelera -50% antes dele alcançar; se ele não tiver Enrage pronto, o slow mais o crit de Coup de Grace fecham a troca primeiro
- itens que viram: Black King Bar de ambos neutraliza o controle do outro, então o confronto vira puro dano; pra ela, o Blur realmente ajuda aqui porque o Overpower dele é ataque, não feitiço
- como jogar: não entre no alcance dele sem saber se o Enrage está pronto; se os dois estiverem sem defensivo, quem acerta o primeiro combo geralmente fecha a luta
- fonte: pro_dados/phantom_assassin.json; pro_dados/ursa.json; constants_abilities.json; liquipedia.net/dota2/Evasion (via busca)

## Contra Lifestealer (life_stealer)

- placar: 17 vitórias em 50 jogos de pro, 34,0% (fonte: pro_dados/phantom_assassin.json)
- por que importa: 5º carry pos1 mais jogado contra ela em pro (50 jogos) e o pior matchup medido dela entre os carries, já confirmado na ficha dela
- janelas: Radiance dele sai aos 16:12 (mediana 1088 jogos), quase junto do Battle Fury dela (14:24); a partir desse ponto ele já está queimando e curando perto de qualquer um; o Armlet (18:06, mediana 773 jogos) acelera o dano dele; ela só equilibra com Satanic pronto (31:48, fonte: ficha de porquê de itens)
- o que ele faz com você: Open Wounds desacelera em até -50%, dura 7s e cura todos os aliados que baterem no alvo em 20 a 50% do dano causado, sem poder ser removido por qualquer coisa, só dispel (fonte: constants_abilities.json, já citado na ficha dela); Feast cura ele em 1,45 a 3,25% da vida máxima do alvo por acerto, o que escala justamente com a vida alta dela
- o que você faz com ele: Satanic dispela o Open Wounds antes da troca terminar (já confirmado na ficha dela com a fonte do matchup); sem Satanic, evite trocar corpo a corpo prolongado com ele
- itens que viram: Satanic é o item que realmente vira esse confronto, porque o dispel do ativo limpa o Open Wounds; antes disso, Black King Bar não ajuda porque Open Wounds não é mágico nem é a fonte real do problema (é o lifesteal dele, não o controle)
- como jogar: evite 1x1 prolongado com ele antes do Satanic pronto; depois disso, o dispel ativo vira a troca a seu favor
- fonte: pro_dados/phantom_assassin.json; pro_dados/life_stealer.json; constants_abilities.json; content/fichas/phantom_assassin.md

## Contra Dragon Knight (dragon_knight)

- placar: 35 vitórias em 61 jogos de pro, 57,4% (fonte: pro_dados/phantom_assassin.json)
- por que importa: melhor matchup medido dela com amostra grande (61 jogos, 57,4%)
- janelas: até 16:12 (Blink Dagger dele, mediana 1304 jogos) ele não tem nenhum gap-closer; dos 16 aos 23 ele ganha mobilidade de blink mas ainda sem fuga nenhuma; PA com Battle Fury pronto (14:24) já farma mais rápido que ele nessa janela e com BKB (23:30) ignora o único disable relevante dele
- o que ele faz com você: Breath Fire causa de 80 a 320 de dano ao longo do tempo e ainda reduz o dano que o alvo causa em 20 a 32% por 11s (fonte: constants_abilities.json), dano mágico que ignora o Blur; Dragon Tail stuna 1,8 a 2,4s mas só a 150 de distância, corpo a corpo
- o que você faz com ele: ele não tem fuga nenhuma fora do Blink; Phantom Strike chega nele de 650-950 de distância antes que ele reposicione, e a resistência física dele não importa contra um crítico de 200 a 400%
- itens que viram: o perigo real é o debuff de -32% de dano da Breath Fire, então o ideal é matar ele rápido com Stifling Dagger seguido de Phantom Strike antes que ele tenha chance de aplicar o debuff de novo
- como jogar: force a troca cedo, antes dele conseguir Blink Dagger; depois do seu BKB, ele não tem nenhuma resposta
- fonte: pro_dados/phantom_assassin.json; pro_dados/dragon_knight.json; constants_abilities.json

## Contra Zeus (zuus)

- placar: 22 vitórias em 41 jogos de pro, 53,7% (fonte: pro_dados/phantom_assassin.json)
- por que importa: 3º melhor matchup medido dela com 30+ jogos (41 jogos, 53,7%)
- janelas: Zeus é midlaner clássico, pega Aghanim's Shard bem cedo (16:06, mediana 472 jogos) pra virar Lightning Hands; o Aghanim's Scepter dele (23:18, mediana 687 jogos, Nimbus) sai quase junto do BKB dela (23:30); antes disso, ele é puro risco de burst isolado
- o que ele faz com você: Static Field é passivo e causa 3,45% da vida ATUAL do alvo como dano mágico extra em cada feitiço ou ataque dele (fonte: constants_abilities.json), o que escala contra a vida alta dela conforme ela compra itens; Lightning Bolt dá true sight de 600 de raio por 5s no alvo, revelando ela mesmo escondida pelo Blur
- o que você faz com ele: Zeus não tem disable forte nem fuga além de um mini-stun de 0,35s; Phantom Strike chega nele antes do cooldown da ultimate renovar, e ele morre num crit só
- itens que viram: nenhum item anula o true sight da Lightning Bolt, então o cuidado é evitar dives isolados quando ele tem mana pra te revelar pro time dele
- como jogar: evite ficar visível sozinha perto dele quando a Lightning Bolt está pronta; se fechar rápido com Phantom Strike, a luta acaba antes do Static Field somar dano relevante
- fonte: pro_dados/phantom_assassin.json; pro_dados/zuus.json; constants_abilities.json

## Contra Hoodwink (hoodwink)

- placar: 13 vitórias em 41 jogos de pro, 31,7% (fonte: pro_dados/phantom_assassin.json)
- por que importa: pior matchup medido dela com amostra grande (41 jogos, 31,7%)
- janelas: Hoodwink é suporte de controle, pega Urn of Shadows cedo (11:00, mediana 943 jogos) e o Aghanim's Shard (23:48, mediana 1224 jogos) pro Hunter's Boomerang; o perigo dela não é por minuto, é sempre que há árvore perto e as habilidades estão prontas, incluindo contra uma PA já com Battle Fury e BKB
- o que ela faz com você: Bushwhack stuna 1,5 a 2,1s e causa até 360 de dano se a PA estiver perto de uma árvore, além de zerar a visão do alvo (fonte: constants_abilities.json); Sharpshooter é canalizada até 3s, causa até 1350 de dano, aplica Break (desliga passivas, incluindo a evasão do Blur) e desacelera, disparando automaticamente no fim da carga (fonte: constants_abilities.json); Scurry dá movimento fasado e evasão dobrada por até 5s, deixando ela fugir por dentro de árvores que PA não atravessa
- o que você faz com ela: Phantom Strike (0,25s de tempo de lançamento) é mais rápido que os 3s de canalização do Sharpshooter, então interromper a distância virando a luta antes da carga completa é a única saída real
- itens que viram: nenhum item dela segura bem o Break da Sharpshooter porque ele desliga justamente a passiva que ela mais depende; o jeito é nunca deixar a carga completar
- como jogar: evite lutar perto de árvores contra ela; feche a distância com Phantom Strike assim que ela começar a canalizar o Sharpshooter, antes dos 3s passarem
- fonte: pro_dados/phantom_assassin.json; pro_dados/hoodwink.json; constants_abilities.json

## Contra Warlock (warlock)

- placar: 11 vitórias em 34 jogos de pro, 32,4% (fonte: pro_dados/phantom_assassin.json)
- por que importa: 2º pior matchup medido dela com 30+ jogos (34 jogos, 32,4%)
- janelas: Warlock é suporte de controle puro, sem spike de item relevante pra esse confronto; o risco dele é todo por nível de ultimate (6, 11, 16) e por mana pra canalizar Upheaval; PA com Battle Fury e BKB ainda sofre, porque o problema dele não é dano, é posicionamento
- o que ele faz com você: Upheaval é canalizado até 16s, desacelera progressivamente até 100% numa área de até 650 de raio (fonte: constants_abilities.json), prendendo um herói corpo a corpo como ela antes que chegue no alvo; Fatal Bonds liga até 6 inimigos de forma que 15 a 24% do dano causado num deles é sentido pelos outros, anulando o plano de focar um alvo só; Rain of Chaos com Aghanim's Scepter chama 2 Golems de até 3000 de vida cada, com dano reduzido de feitiço e punho flamejante, que trocam bem corpo a corpo com ela
- o que você faz com ele: Warlock tem pouca vida própria; se ela chega nele isolado, sem Golem por perto, um crit resolve
- itens que viram: nenhum item anula sozinho o Upheaval porque é desaceleração de área, não debuff único; o plano tem que ser matar os Golems primeiro ou evitar a área dele até Upheaval estar em cooldown
- como jogar: nunca brigue com ele sozinha dentro do Upheaval; espere os Golems caírem ou o cooldown do Upheaval passar antes de engajar
- fonte: pro_dados/phantom_assassin.json; pro_dados/warlock.json; constants_abilities.json

## Contra Ember Spirit (ember_spirit)

- placar: 15 vitórias em 45 jogos de pro, 33,3% (fonte: pro_dados/phantom_assassin.json)
- por que importa: 3º pior matchup medido dela com 30+ jogos (45 jogos, 33,3%)
- janelas: Ember farma rápido (gpm 558) e pega Kaya aos 19:12 (mediana 1666 jogos); o Aghanim's Shard dele (25:18, mediana 1882 jogos) recarrega Fire Remnant quando mata herói perto; o Aghanim's Scepter (31:36, mediana 1372 jogos) aumenta alcance e cargas dos Remnants; antes dele comprar esses dois itens (ou seja, antes dos 25-31 min) ele tem menos mobilidade pra fugir do engajamento dela
- o que ele faz com você: Sleight of Fist ataca todos os inimigos numa área de 250 a 550 de raio e volta pro lugar original, com até 170 de dano bônus contra herói; Searing Chains prende 2 unidades por até 2,75s com 100 de dano por segundo, travando o lançamento de Phantom Strike se acertar primeiro; Fire Remnant deixa ele se teleportar até 3 vezes pra posições pré-plantadas, esquivando do gap-close dela
- o que você faz com ele: ele não tem muita vida fora do Flame Guard (absorve 70% de dano mágico, irrelevante contra o dano físico dela); pegando ele sem os dois Remnants disponíveis, ele não tem pra onde fugir
- itens que viram: nenhum item dela resolve a mobilidade dele; o jeito é cronometrar o ataque pra quando as cargas de Fire Remnant estiverem gastas
- como jogar: observe se ele já usou os Remnants antes de engajar; se Searing Chains acertar primeiro, não force Phantom Strike, espere o root passar
- fonte: pro_dados/phantom_assassin.json; pro_dados/ember_spirit.json; constants_abilities.json

## Contra Weaver (weaver)

- placar: 8 vitórias em 16 jogos de pro, 50,0%, amostra pequena (fonte: pro_dados/phantom_assassin.json)
- por que importa: um dos carries pos1 mais escolhidos em pro no patch (996 jogos no dataset local, fonte: pro_dados/weaver.json), incluído mesmo com poucas partidas medidas contra ela porque os dois quase nunca dividem lane, mas competem pelo mesmo papel de fechar jogo no late
- janelas: os dois têm perfil de farm parecido (Weaver gpm 558 contra 601 dela) e chegam a comprar o mesmo item, Desolator (dele aos 15:36, mediana 379 jogos; dela aos 20:42); o Aghanim's Shard dele (18:30, mediana 597 jogos) marca inimigos atingidos pelo Shukuchi pra um ataque geminado extra; é uma corrida de power spike mais do que uma troca de lane
- o que ele faz com você: Shukuchi dá invisibilidade e velocidade máxima por 4s, atravessando inimigos com até 190 de dano, deixando ele esquivar do Phantom Strike dela e reposicionar; Time Lapse volta a vida e mana dele pro estado de 5 segundos atrás com dispel forte, podendo desfazer um crítico inteiro de Coup de Grace
- o que você faz com ele: se ela conseguir um combo que ele não consiga prever (Stifling Dagger seguido de Phantom Strike e crit num único momento), o Time Lapse só se usado a tempo salva ele; qualquer segunda troca sem o Time Lapse pronto de novo (ele não tem cooldown fixo documentado localmente) tende a favorecer quem bateu primeiro
- itens que viram: nenhum item dela anula o Time Lapse; o jeito é forçar duas trocas seguidas, uma pra gastar o Time Lapse e outra pra fechar
- como jogar: não gaste o combo todo na primeira troca, ele provavelmente tem Time Lapse pronto; depois que ele usa, a segunda tentativa de crit costuma fechar
- fonte: pro_dados/phantom_assassin.json; pro_dados/weaver.json; constants_abilities.json
