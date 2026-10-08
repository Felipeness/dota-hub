---
id: confrontos-kez
heroi: Kez
patch: 7.41
fontes:
- OpenDota /heroes/{id}/matchups (partidas de liga, patches 7.40 e 7.41), via pro_dados/*.json
- OpenDota /heroes/{id}/itemTimings agregados de partidas pro, via pro_dados/*.json
- dota2.com datafeed herodata (hero_id 145, Kez)
- api.opendota.com/api/constants/aghs_desc (textos de Aghanim's Scepter e Shard)
- OpenDota constants_abilities.json e constants_hero_abilities.json (textos de habilidade do patch local)
---

## Contra Shadow Fiend (nevermore)

- placar: 131V/244J, 53,7% para o Kez em partidas de liga 7.40 e 7.41 (fonte: pro_dados/kez.json, matchups OpenDota)
- por que importa: é o confronto mais jogado de todos (244 partidas) e o exemplo clássico que você pediu: os dois são carries de patrimônio alto que raramente dividem lane (Kez vai pra safelane, Shadow Fiend geralmente pro mid), mas um power spike bate direto no outro no meio de jogo
- janelas: até 5 min, Shadow Fiend sai na frente em XP de lane com Shadowraze e Necromastery se pegar abate; dos 5 aos 9 min o Kez vira a chave, nível 6 com Raptor Dance e Katana logo depois no máximo, sangramento de 12% por segundo; Shadow Fiend responde com Dragon Lance mediano aos 14,0 min pra kitar de longe e Eye of Skadi fechando perto dos 24 min (Claymore 24,2 min); dos 16 aos 25 min o Kez tem a vantagem física com Desolator (mediana 16,8 min) e BKB (25,2 min) batendo antes do Skadi completo do Fiend
- o que ele faz com você: Shadowraze em linha reta punha engajamentos previsíveis, cada raze seguido empilha um amplificador de dano no Kez; se ele já tem muitas almas guardadas (kill em lane), o combo de 3 razes mais Requiem of Souls no nível 6 mata rápido quem não tem BKB
- o que você faz com ele: Grappling Claw fecha a distância por até 950 de alcance no nível máximo antes que ele consiga posicionar as razes; Raven's Veil te deixa invisível pra iniciar fora do alcance de visão dele, e Talon Toss silencia pra cortar o Requiem of Souls ou qualquer raze reativa
- itens que viram: Desolator e BKB do Kez neutralizam a vantagem de dano mágico do Fiend; do lado dele, Eye of Skadi (lifesteal via staff_of_wizardry 18,9 min + claymore 24,2 min) é o que estabiliza a vida baixa que ele carrega a vida toda
- como jogar: evite trocar perto de árvores ou paredes onde ele consegue alinhar raze; depois do nível 6 force luta antes dele completar o Skadi, porque sua curva de Katana sobe mais rápido que a sustentação dele nessa janela
- fonte: pro_dados/kez.json; pro_dados/nevermore.json; constants_abilities.json (kez_kazurai_katana, kez_grappling_claw, kez_ravens_veil, kez_talon_toss, nevermore_shadowraze1, nevermore_necromastery, nevermore_requiem).

## Contra Hoodwink (hoodwink)

- placar: 110V/208J, 52,9% para o Kez (fonte: pro_dados/kez.json)
- por que importa: segundo confronto mais comum do Kez no pro play (208 jogos). Ela não é carry, mas aparece tanto como pos 4 quanto pos 5 na linha do Kez e é um dos heróis mais escolhidos do patch, então o confronto decide boa parte das trocas da safelane
- janelas: nos primeiros 10 min ela farma rápido com Acorn Shot em árvores e põe Bushwhack perto de madeira pra travar o engajamento; Arcane Boots dela sai mediano aos 12,2 min, dando mana pra spamar; depois dos 13 min, quando o Kez já tem Mage Slayer (12,5 min) e Mithril Hammer rumo ao Desolator (16,6 min), o 1x1 physical dele passa a pesar mais que o poke dela
- o que ele faz com você: Bushwhack perto de árvore te stuna e tira a visão; se você estiver marcado e ela tiver o Aghanim's Shard (mediano 23,8 min), o boomerang de retorno aumenta sua vulnerabilidade a feitiço bem na hora que ela puxa pro Sharpshooter
- o que você faz com ele: Grappling Claw ignora a Scurry dela se você pegar o cast antes da fase de invisibilidade/tree-walk; Talon Toss silencia antes do canalizar do Sharpshooter, que é a única ameaça de kill real que ela tem solo
- itens que viram: Mage Slayer do Kez (-40% no dano de feitiço do alvo) reduz bastante o Sharpshooter e o Bushwhack mágico; o Shard dela (boomerang com slow e vulnerabilidade a feitiço) é o item que mais machuca se você não tiver magic resist
- como jogar: não fique parado perto de árvore na fase de laning; depois do nível 7 do Kez, pressione antes dela conseguir o Shard, porque sem ele ela não tem resposta pro seu burst corpo a corpo
- fonte: pro_dados/kez.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_scurry, hoodwink_sharpshooter, hoodwink_hunters_boomerang, kez_grappling_claw, kez_talon_toss); aghs_desc (Hoodwink).

## Contra Jakiro (jakiro)

- placar: 93V/197J, 47,2% para o Kez (fonte: pro_dados/kez.json)
- por que importa: terceiro confronto mais comum (197 jogos) e um dos poucos supports que deixam o Kez ligeiramente abaixo de 50%, porque a dupla Ice Path/Dual Breath trava a lane e nega o farm de neutro que o Kez precisa pros itens caros
- janelas: até os 12 min ele controla a lane com Dual Breath (slow+dano) e Ice Path (stun em linha); Arcane Boots dele sai mediano aos 11,7 min pra sustentar o spam; a partir dos 16-17 min, quando o Kez tem Desolator, o 1x1 vira favorável pro Kez porque Jakiro não tem fuga; Macropyre dele (nível 6) ainda nega área de luta e farm de camp grande até o fim de jogo
- o que ele faz com você: Ice Path interrompe seu Grappling Claw ou Raptor Dance se você estiver no caminho da parede de gelo; Macropyre em cima de um camp nega sua limpeza e, se você entrar nele numa troca, o dano contínuo soma rápido com seu HP baixo
- o que você faz com ele: Talon Toss silencia antes do Macropyre ou do combo Dual Breath+Ice Path; Raven's Veil deixa você invisível pra flanquear por fora do alcance de Dual Breath (que é em linha reta)
- itens que viram: Mage Slayer do Kez corta o dano mágico do combo dele quase pela metade; BKB do Kez (25,2 min) torna o combo dele inútil em luta, já que nada do kit dele atravessa imunidade mágica
- como jogar: na lane, jogue de longe do caminho reto do Dual Breath e force a troca só depois do nível 7 do Kez; depois do BKB, Jakiro deixa de ser ameaça individual
- fonte: pro_dados/kez.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_dual_breath, jakiro_macropyre, kez_talon_toss, kez_ravens_veil).

## Contra Windranger (windrunner)

- placar: 85V/193J, 44,0% para o Kez, abaixo de 50% (fonte: pro_dados/kez.json)
- por que importa: é o pior matchup do Kez entre os mais jogados (193 jogos) e também aparece como herói "all" que vai de pos 1 a pos 4, então encontra o Kez tanto na lane quanto em matchups de carry
- janelas: do início até os 9-10 min ela farma rápido com Maelstrom (mediana 13,4 min) e Desolator via Mithril Hammer (15,6 min); dos 13 aos 21 min ela entra na janela mais perigosa, Focus Fire com attack speed somado a Desolator; o Kez só reequilibra depois do BKB (25,2 min), porque antes disso o combo Shackleshot+Powershot+Focus Fire mata sem ele conseguir reagir
- o que ele faz com você: Shackleshot te prende numa árvore ou unidade atrás de você, Powershot cruza o mapa com slow, e Focus Fire ignora evasão e dá attack speed fixo nela contra você, isso destrói sua vida rápido se pego fora de posição
- o que você faz com ele: Windrun dá evasão física por alguns segundos, então gaste Talon Toss (silêncio) ou Echo Slash (dano em área, não depende de acerto físico) nessa janela em vez de autoataque puro; Grappling Claw fecha a distância antes do Shackleshot land
- itens que viram: BKB do Kez neutraliza Shackleshot e o slow do Powershot; pelo lado dela, o Desolator reduz sua armadura justamente quando o Mage Slayer do Kez já cortou o dano de feitiço, então a luta vira física dos dois lados depois dos 20 min
- como jogar: evite ficar perto de árvore sem visão antes do seu BKB; depois dele, o duelo físico favorece quem tiver o Desolator primeiro, geralmente você, porque sua mediana (16,8 min) é mais cedo que a dela (15,6 min só do hammer, acabado depois)
- fonte: pro_dados/kez.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_powershot, windrunner_focusfire, windrunner_windrun, kez_talon_toss, kez_echo_slash, kez_grappling_claw).

## Contra Rubick (rubick)

- placar: 98V/191J, 51,3% para o Kez (fonte: pro_dados/kez.json)
- por que importa: quarto confronto mais jogado (191 jogos); mesmo sem dividir lane direto, Rubick é escolhido quase sempre que o time vê Kez no draft porque Spell Steal rouba Raptor Dance ou Falcon Rush se for o último feitiço que você lançou
- janelas: até os 10 min Rubick farma barato (Arcane Boots 10,3 min, Wizard Hat também aos 10,3 min, componente do Aether Lens que fecha mediano aos 22,9 min pro alcance de cast); dos 15 aos 22 min ele ganha Blink (mediano 21,6 min), que é quando o combo Telekinesis vira ameaça de kill; depois dos 25 min, se ele tiver Aghanim's Scepter (mediano 27,4 min) ou Shard (27,0 min), ele rouba e usa seu próprio feitiço (versão Scepter, inclusive) contra você
- o que ele faz com você: Telekinesis te joga no ar e no chão de novo, stunando quem está perto, geralmente combinado com Fade Bolt pra reduzir seu dano de ataque antes da troca; se ele rouba Raptor Dance logo depois que você lança, ele cura a si mesmo com o seu próprio feitiço
- o que você faz com ele: lance Raptor Dance ou Falcon Rush só quando ele não estiver por perto pra evitar o Spell Steal; Grappling Claw ignora o posicionamento dele a distância e Talon Toss silencia antes do Blink dele completar o combo
- itens que viram: o Aghanim's Scepter dele (rouba 2 feitiços e upgrade pra versão Scepter) é o item que mais muda o confronto, porque ele pode guardar Echo Slash ou Talon Toss junto de outro roubo; BKB seu neutraliza o Telekinesis
- como jogar: controle a ordem de cast em luta, gaste primeiro o feitiço que você não quer ver roubado ou segure até ter certeza que ele não vai ter chance de reagir
- fonte: pro_dados/kez.json; pro_dados/rubick.json; constants_abilities.json (rubick_telekinesis, rubick_fade_bolt, rubick_spell_steal, kez_raptor_dance, kez_falcon_rush, kez_grappling_claw, kez_talon_toss); aghs_desc (Rubick).

## Contra Mars (mars)

- placar: 105V/188J, 55,9% para o Kez (fonte: pro_dados/kez.json)
- por que importa: quinto mais jogado (188 jogos) e o offlaner mais comum contra a safelane do Kez; é um confronto direto de lane que decide o ritmo dos primeiros 10 min
- janelas: nos primeiros 8 min, antes do nível 6 do Kez, Mars controla com Spear of Mars e Bulwark bloqueando parte do dano físico; dos 7 aos 9 min o Kez vira com Raptor Dance e Katana no máximo; Mars responde com Blink (mediano 15,2 min) pra engajar melhor e Aghanim's Shard (21,5 min, impala até 2 heróis e deixa rastro de fogo); mas como o Kez chega no BKB (25,2 min) pouco depois da Arena of Blood dele (ultimate, perto do nível 6-7 dele também), o offlaner perde força relativa depois dos 20 min, refletido no 55,9% a favor do Kez
- o que ele faz com você: Spear empala você numa árvore ou prédio se acertar a trajetória certa, parando seu combo por completo; dentro da Arena of Blood, lanças batem em quem está perto da borda, então ficar encostado na parede da arena custa caro
- o que você faz com ele: Grappling Claw pega ele de surpresa antes do Spear carregar; depois do nível 7, seu sangramento de Katana mais Raptor Dance (dano baseado em HP máximo) ignora boa parte do Bulwark, que só bloqueia ataque básico, não habilidade
- itens que viram: BKB seu cancela o stun do Spear contra parede; o Shard dele (Spear impala 2 heróis + rastro de fogo) é o item que mais perigo traz depois dos 20 min, enquanto seu Desolator reduz a armadura que o Bulwark tenta compensar
- como jogar: na lane, jogue longe de árvore e prédio pra negar o combo de Spear; força troca assim que pegar nível 6, porque sua curva sobe mais rápido que a dele nesse intervalo
- fonte: pro_dados/kez.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_bulwark, mars_arena_of_blood, kez_grappling_claw, kez_kazurai_katana, kez_raptor_dance); aghs_desc (Mars).

## Contra Tiny (tiny)

- placar: 110V/176J, 62,5% para o Kez (fonte: pro_dados/kez.json)
- por que importa: é o carry mais jogado contra o Kez entre os que dividem a mesma função principal (176 jogos) e também uma das maiores vantagens do Kez com amostra grande; exatamente o tipo de confronto "dois hard carry" que você pediu, mesmo raramente na mesma lane (Tiny costuma ir mid ou offlane)
- janelas: até os 15 min Tiny ameaça kill isolado com Avalanche+Toss (burst alto e barato), item chave Blink mediano aos 15,9 min; dos 7 aos 9 min, antes mesmo do Blink dele, o Kez já tem Raptor Dance e Katana no máximo, então a corrida de nível favorece o Kez; depois dos 18 min o combo de Tiny perde força relativa porque é burst de pico único, enquanto o Kez sustenta dano contínuo com sangramento de Katana e lifesteal de Raptor Dance
- o que ele faz com você: Avalanche trava você no chão e Toss te joga pra fora da posição (ou te joga em cima de aliado perigoso); combo de burst mata rápido se acertar em cheio antes do seu nível 6
- o que você faz com ele: depois do seu nível 6, Raptor Dance cura você de parte do dano de burst dele; Grappling Claw cancela o combo antes dele carregar o Blink; Talon Toss silencia o Toss/Avalanche combo
- itens que viram: BKB seu (25,2 min) neutraliza o stun de Avalanche; o combo dele depende de magia, então Mage Slayer já corta uma fatia relevante
- como jogar: respeite o combo isolado antes do seu nível 6 e evite ficar sozinho visível; depois disso, a troca sustentada é sua, force a luta ao invés de recuar
- fonte: pro_dados/kez.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, kez_raptor_dance, kez_grappling_claw, kez_talon_toss, kez_kazurai_katana).

## Contra Templar Assassin (templar_assassin)

- placar: 61V/102J, 59,8% para o Kez (fonte: pro_dados/kez.json)
- por que importa: outro carry que raramente divide lane com o Kez (ela geralmente vai mid), mas é um dos carries mais comuns do patch, por isso entra entre os confrontos de mesma função que mais aparecem no pro play, com vantagem grande pro Kez
- janelas: Templar Assassin tem a curva de farm mais rápida do jogo, Power Treads mediano aos 6,0 min e Desolator aos 14,3 min (via Mithril Hammer 13,3 min), bem antes do Desolator do Kez (16,8 min); dos 6 aos 14 min ela fica à frente em dano bruto; mas o Kez pega Raptor Dance e Katana máximo entre os 7 e 9 min, então o duelo direto já favorece ele antes dela completar o item, o que explica o 59,8%
- o que ele faz com você: Refraction bloqueia seus ataques e dá dano bônus nela, Meld te revela se você atacar ela parada e perde invisibilidade com dano aumentado; se você focar atacar sem pensar nas cargas de Refraction, perde a troca
- o que você faz com ele: Grappling Claw revela o Meld dela (interrompe a invisibilidade); espere as cargas de Refraction acabarem antes de engajar com autoataque, ou abra com Echo Slash, que acerta duas vezes num cast só e gasta duas cargas da barreira de uma vez, mais rápido que picar com autoataque isolado
- itens que viram: o Aghanim's Scepter dela (traps passam a silenciar) muda a lane, mas não aparece tanto em pro (apenas Shard, mediano 24,6 min, que aumenta o dano bônus e permite usar Refraction enquanto desabilitada); seu Mage Slayer reduz o retorno de feitiço dela e seu Desolator cancela parte da armadura que o Meld reduz do seu lado
- como jogar: conte as cargas de Refraction antes de engajar; depois do seu nível 7, force troca prolongada, porque o sustain do Katana vence o burst dela numa luta mais longa
- fonte: pro_dados/kez.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_refraction, templar_assassin_meld, kez_grappling_claw, kez_echo_slash); aghs_desc (Templar Assassin).

## Contra Ursa (ursa)

- placar: 54V/102J, 52,9% para o Kez (fonte: pro_dados/kez.json)
- por que importa: outro duelo de carry corpo a corpo que raramente compartilha lane (Ursa geralmente joga jungle ou safelane própria), mas aparece muito em pro porque os dois são hard carries de pique curto com combo de burst
- janelas: Ursa farma rápido com Battle Fury (bfury) mediano aos 13,7 min, bem antes do Desolator do Kez (16,8 min), então até os 14 min ela tem vantagem de patrimônio; dos 7 aos 9 min, já com Raptor Dance e Katana máximo, o Kez consegue abrir combo nela mesmo sem o item grande; depois dos 16-17 min os dois chegam pertos em dano, mas o lifesteal de Raptor Dance do Kez (cura 100% do dano causado) empata o duelo de troca de hit melhor que o Enrage isolado de Ursa
- o que ele faz com você: Earthshock pula, atordoa e dá slow em área, Overpower dá attack speed e resistência a slow por alguns ataques, e Fury Swipes empilha dano extra se ela bater em você repetidamente sem parar
- o que você faz com ele: Grappling Claw interrompe o posicionamento antes do Earthshock; Talon Toss silencia o combo de iniciação; Raptor Dance cura você durante a troca, o que neutraliza parte do Fury Swipes acumulado
- itens que viram: Enrage dela (dispel forte + redução de dano) cancela boa parte do seu burst mágico de habilidade, mas não impede dano físico contínuo; o Shard dela (Earthshock aplica 3 stacks de Fury Swipes de cara) acelera o acúmulo de dano se você ficar parado durante o pulo
- como jogar: não fique parado no alcance do Earthshock; abra você a troca em vez de esperar, porque sua cura do Raptor Dance compensa melhor numa luta que você inicia
- fonte: pro_dados/kez.json; pro_dados/ursa.json; constants_abilities.json (ursa_earthshock, ursa_overpower, ursa_fury_swipes, ursa_enrage, kez_grappling_claw, kez_talon_toss, kez_raptor_dance); aghs_desc (Ursa).

## Contra Muerta (muerta)

- placar: 65V/117J, 55,6% para o Kez (fonte: pro_dados/kez.json)
- por que importa: é a carry à distância mais jogada contra o Kez (117 jogos); diferente dos outros carries corpo a corpo da lista, aqui o confronto é de perseguição, melee contra ranged, o que muda bastante a lógica do duelo
- janelas: até os 10 min Muerta farma com Dead Shot à distância e kita bem, Javelin mediano aos 10,9 min (Maelstrom aos 13,8); dos 7 aos 9 min o Kez já tem Raptor Dance e Katana máximo, mas sem alcance pra fechar sozinho; a virada real acontece quando o Kez tem Grappling Claw no nível máximo (950 de alcance) e Desolator (16,8 min), o que neutraliza boa parte da distância que ela mantém; Pierce the Veil, ult dela, dá alcance e velocidade extra e pode reabrir distância depois dos 20 min se ela tiver farm
- o que ele faz com você: Dead Shot acerta em linha à distância com dano alto; The Calling solta espectros que perseguem e, ao alcançar, enraízam e silenciam, cortando justamente seu Grappling Claw e Talon Toss se você for pego
- o que você faz com ele: Raven's Veil te deixa invisível pra fechar a distância sem ela perceber; Grappling Claw no nível máximo cobre praticamente todo o alcance de kite dela; depois de fechar, seu combo corpo a corpo não dá tempo dela reposicionar
- itens que viram: Mage Slayer do Kez reduz o dano mágico de Dead Shot; BKB cancela a raiz/silêncio de The Calling assim que ativado; do lado dela, Pierce the Veil é o item que mais reabre distância se ela sobreviver ao engajamento inicial
- como jogar: não gaste Grapple de longe sem certeza de conexão, porque sem ele você não alcança; depois de pegar o Desolator, iniciar antes dela ver você é o que garante a troca
- fonte: pro_dados/kez.json; pro_dados/muerta.json; constants_abilities.json (muerta_dead_shot, muerta_the_calling, muerta_pierce_the_veil, kez_ravens_veil, kez_grappling_claw).

## Contra Sand King (sand_king)

- placar: 28V/38J, 73,7% para o Kez, a maior vantagem da lista (fonte: pro_dados/kez.json; amostra média, 38 jogos)
- por que importa: maior vantagem do Kez com pelo menos 30 jogos de pro; Sand King é offlaner de iniciação frágil, e o combo de burst do Kez some com ele rápido antes do Epicenter virar relevante
- janelas: até os 11-12 min, antes do Blink dele (mediano 11,7 min), Sand King depende de Burrowstrike puro pra engajar; o Kez já tem nível 6 por volta dos 7-9 min, então consegue responder ou matar antes dele conseguir blink seguro; Sand King só fica perigoso em grupo depois do Ultimate Scepter (mediano 20,5 min, que adiciona ataques de Stinger em área durante o Epicenter), mas até lá o Kez já tem Desolator (16,8 min) pra fechar o 1x1
- o que ele faz com você: Burrowstrike atordoa na linha e aplica veneno de Caustic Finale, que explode se você morrer com o debuff ativo; Epicenter em área, com o Scepter, ganha ataques de Stinger extras espalhados
- o que você faz com ele: Grappling Claw alcança ele antes do Blink dele ficar pronto; seu burst de nível 6 em diante mata rápido um herói sem fuga própria e com vida baixa
- itens que viram: BKB seu cancela o stun do Burrowstrike e o slow do Epicenter; o Scepter dele (Stingers em área) só vira ameaça real depois dos 20 min, quando a luta já costuma estar decidida a seu favor
- como jogar: pressione antes do Blink dele sair, e depois disso jogue em grupo pra não dar o combo isolado de Burrowstrike nele
- fonte: pro_dados/kez.json; pro_dados/sand_king.json; constants_abilities.json (sandking_burrowstrike, sandking_caustic_finale, sandking_epicenter, kez_grappling_claw); aghs_desc (Sand King).

## Contra Troll Warlord (troll_warlord)

- placar: 24V/34J, 70,6% para o Kez (fonte: pro_dados/kez.json; amostra média, 34 jogos)
- por que importa: segunda maior vantagem da lista e também um carry corpo a corpo de patrimônio por ataque, do mesmo tipo de função que o Kez, mesmo raramente na mesma lane
- janelas: até os 13 min Troll farma rápido, Battle Fury mediano aos 13,4 min, mas o Kez já está com nível 6-7 feito nessa hora; dos 13 aos 21 min os dois sobem patrimônio junto (Desolator do Kez 16,8 min contra Yasha dele 17,2 min), só que o Kez tem mais ferramenta de controle (silêncio, slow de Grapple) pra abrir a luta primeiro
- o que ele faz com você: Berserker's Rage em forma corpo a corpo tem chance de prender você sem poder se mover ou usar mobilidade; Battle Trance força ele a atacar o alvo mais próximo com lifesteal e velocidade bônus, perigoso se ele focar você sem suporte por perto
- o que você faz com ele: Talon Toss silencia antes do Battle Trance ou da troca de stance; Grappling Claw inicia antes dele conseguir alinhar Whirling Axes
- itens que viram: BKB seu cancela o prendimento do Berserker's Rage; o Shard dele (chance de tiro extra com Fervor, mediano 31,2 min) é tardio demais pra mudar o resultado na maioria das partidas dessa amostra
- como jogar: abra a troca você, de preferência com silêncio antes do Battle Trance, porque deixar ele escolher o momento é o que vira o jogo a favor dele
- fonte: pro_dados/kez.json; pro_dados/troll_warlord.json; constants_abilities.json (troll_warlord_berserkers_rage, troll_warlord_battle_trance, troll_warlord_whirling_axes_melee, kez_talon_toss, kez_grappling_claw); aghs_desc (Troll Warlord).

## Contra Lifestealer (life_stealer)

- placar: 45V/70J, 64,3% para o Kez (fonte: pro_dados/kez.json)
- por que importa: terceiro maior vantagem com amostra relevante (70 jogos); outro hard carry str que raramente compartilha lane com o Kez, mas aparece bastante em pro como safelane ou offlane, e o confronto de sustain contra burst favorece muito o Kez
- janelas: até os 16 min Lifestealer farma Radiance (mediano 16,2 min) via Relic (13,4 min), o que dá sustain e split-push, mas pouco controle; o Kez chega no nível 6-7 antes disso e já ameaça burst isolado; dos 16 aos 25 min os dois ficam fortes, mas o silêncio do Kez corta justamente a resposta dele (Rage), o que inclina o duelo direto
- o que ele faz com você: Open Wounds reduz sua velocidade e cura os aliados dele pelo dano causado em você; Feast cura ele por uma fração da sua vida máxima a cada ataque, o que estende a vida dele em troca prolongada
- o que você faz com ele: Talon Toss silencia e impede Rage (imunidade a debuff) bem na hora que você quer aplicar slow ou stun; sem Rage ativo, seus stuns de Katana e Grapple grudam normal
- itens que viram: o silêncio é o item que mais vira esse confronto, porque sem Rage ele não tem resposta pro seu controle; o Scepter dele (mediano 29,9 min, Infest em herói inimigo com regeneração) é tardio e raro nessa amostra
- como jogar: guarde o Talon Toss pra abrir a troca, não pra reagir, porque o objetivo é impedir o Rage antes dele ativar, não depois
- fonte: pro_dados/kez.json; pro_dados/life_stealer.json; constants_abilities.json (life_stealer_open_wounds, life_stealer_feast, life_stealer_rage, kez_talon_toss); aghs_desc (Lifestealer).

## Contra Lone Druid (lone_druid)

- placar: 12V/35J, 34,3% para o Kez, a maior desvantagem da lista (fonte: pro_dados/kez.json; amostra média, 35 jogos)
- por que importa: pior resultado do Kez entre os confrontos com pelo menos 30 jogos de pro; Lone Druid farma com o Urso em paralelo e empurra lane enquanto o Kez ainda está fazendo itens, o que nega justamente a janela de poder do Kez
- janelas: desde o nível 1 o Urso (Spirit Bear) farma e empurra lane junto com Lone Druid, dobrando o ouro e dividindo a atenção do Kez; o Urso completa Mjollnir mediano aos 16,5 min (via Maelstrom 12,1 min), ficando como uma segunda ameaça de dano enquanto o Lone Druid em si também farma; mesmo com o Kez no nível 6-7 forte (7-9 min), ele precisa escolher entre focar o herói ou o Urso, e nenhuma escolha resolve o problema de ser two-for-one
- o que ele faz com você: Entangle do Urso prende você, Savage Roar assusta e desacelera em área, e o próprio Urso bate forte desde cedo com itens de attack speed (Maelstrom, Mjollnir); enquanto isso Lone Druid continua farmando em outra parte do mapa
- o que você faz com ele: foque sempre o Urso primeiro em luta (ele cai, Lone Druid perde metade do dano do time); Grappling Claw e Talon Toss funcionam nos dois, mas priorize matar o Urso antes dele reaparecer (cooldown de Spirit Bear é longo, 120s/nível menor)
- itens que viram: o Scepter dele (mediano 21,7 min, Entangle com mais stacks e raio maior) e o Shard (24,5 min, dispel + velocidade compartilhada entre os dois) seguram ainda mais a dupla; seu BKB ajuda a ignorar o Entangle, mas não resolve o problema de ser pego em dois lugares
- como jogar: jogue em grupo contra essa dupla, nunca sozinho; priorize abater o Urso e force o jogo antes dele ter Mjollnir pronto
- fonte: pro_dados/kez.json; pro_dados/lone_druid.json; constants_abilities.json (lone_druid_entangle, lone_druid_savage_roar, lone_druid_spirit_bear, kez_grappling_claw, kez_talon_toss); aghs_desc (Lone Druid).

## Contra Keeper of the Light (keeper_of_the_light)

- placar: 21V/58J, 36,2% para o Kez, segunda maior desvantagem (fonte: pro_dados/kez.json)
- por que importa: Keeper of the Light controla a lane do Kez com Illuminate e depois nega o farm de neutro que ele precisa pros itens caros, o oposto do que o Kez quer fazer no início de jogo
- janelas: até os 13 min ele farma com Illuminate canalizado (dano crescente com o tempo de canalização) e zera camps rápido com a ajuda do herói aliado; Ward Observer/Sentry medianos entre 15,3 e 16,2 min mostram que ele também joga de visão, dificultando flanco do Kez; o combo Blinding Light (cega em área) junto de Illuminate consegue punir engajamentos antes do BKB do Kez (25,2 min); Spirit Form (ultimate) dá alcance global de Illuminate, perigoso mesmo longe do mapa
- o que ele faz com você: Blinding Light te cega e empurra pra fora da área, cancelando seu combo de autoataque; Illuminate em linha reta, se você estiver atrás de creep, dá dano alto; em Spirit Form, ele ameaça de longe sem estar perto fisicamente
- o que você faz com ele: Raven's Veil (invisibilidade) ignora boa parte do controle de visão dele; Grappling Claw fecha rápido antes do Illuminate carregar; Talon Toss silencia antes da canalização
- itens que viram: Mage Slayer do Kez reduz o retorno mágico de Illuminate e Blinding Light; BKB cancela a cegueira; mas como boa parte do dano dele é farm/zoneamento e não burst isolado, o problema real não é item único, é o atraso que ele causa no seu farm
- como jogar: priorize silenciar antes de engajar, pra cortar Illuminate no cast, e não dependa só de autoataque pra limpar camp perto da visão dele
- fonte: pro_dados/kez.json; pro_dados/keeper_of_the_light.json; constants_abilities.json (keeper_of_the_light_illuminate, keeper_of_the_light_blinding_light, keeper_of_the_light_spirit_form, kez_ravens_veil, kez_grappling_claw, kez_talon_toss).

## Contra Treant Protector (treant)

- placar: 28V/72J, 38,9% para o Kez, terceira maior desvantagem (fonte: pro_dados/kez.json)
- por que importa: é o support que mais trava o kit do Kez, porque Leech Seed desarma, e quase tudo que o Kez faz depende de autoataque ou de ativar habilidade em sequência rápida
- janelas: até os 12 min Treant Protector joga protegendo o carry aliado com Leech Seed (raiz + desarme) e Living Armor, segurando a lane contra o Kez; Aghanim's Shard dele sai cedo, mediano aos 19,0 min (encanta árvore pra dar visão), ajudando a controlar engajamento vindo da selva; do nível 6 em diante, Overgrowth (ultimate) prende em área e impede atacar, mover, ficar invisível ou dar blink, justamente os seus três recursos de mobilidade (Grapple, Veil, Falcon Rush)
- o que ele faz com você: Leech Seed te desarma, cortando seu dano de autoataque e o combo de Kazurai Katana que depende de atacar; Overgrowth prende em área e bloqueia sua invisibilidade e seu blink junto, deixando você exposto pro time dele
- o que você faz com ele: ataque ele primeiro pra consumir o Leech Seed antes de engajar o carry protegido; Talon Toss silencia antes do Overgrowth, e se o silêncio pegar o cast, ele não consegue prender ninguém
- itens que viram: BKB seu dá imunidade mágica, mas o desarme de Leech Seed não é mágico puro (é efeito de ataque), então BKB ajuda menos aqui do que nos outros confrontos da lista; o melhor item é mesmo o silêncio pra negar o cast do Overgrowth antes dele sair
- como jogar: não dependa só de autoataque quando ele estiver perto, tenha Talon Toss sempre de prontidão pra cortar o Overgrowth, e foque ele primeiro se puder, porque sem Leech Seed ativo o resto do kit do Treant é bem mais fraco
- fonte: pro_dados/kez.json; pro_dados/treant.json; constants_abilities.json (treant_leech_seed, treant_living_armor, treant_overgrowth, kez_talon_toss); aghs_desc (Treant Protector).
