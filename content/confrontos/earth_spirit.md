---
id: confrontos-earth_spirit
heroi: Earth Spirit
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/earth_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/windrunner.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/centaur.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/drow_ranger.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shredder.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/marci.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/razor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/morphling.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/earth_spirit.md
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/shadow_fiend.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/tiny.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/drow_ranger.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/morphling.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/templar_assassin.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Contra Shadow Fiend (nevermore)
- placar: Earth Spirit venceu 88 de 157 partidas de pro (56,1%). É o oponente com mais jogos contra ES em toda a base de confrontos.
- por que importa: maior volume de jogos pro contra ES (157), rival clássico de mid. Os dois disputam a mesma rota e a mesma prioridade de rotação desde o nível 2, mesmo raramente ficando parados um na frente do outro depois dos 10 min.
- janelas: até os 7:12, SF já tem nível 6 e Power Treads (herois/shadow_fiend.json), com Requiem nível 1 pronto (80 de dano por linha, medo de até 2,15 s) pra assustar quem fica alinhado com ele; seu combo só fecha de verdade com Urn (6:24) e Power Treads (9:18), então 7 a 9 min é sua pior janela, evite ficar em linha reta. Dos 10 aos 16 min o Mask of Madness dele (10:36) acelera o farm mas corta a defesa, boa hora pra rotacionar com Urn+Vessel (12:42) prontos. Depois dos 20, seu Black King Bar (22:36) chega bem antes do dele (26:24): a janela de 23 a 26 min é sua pra iniciar sem medo de Requiem.
- o que ele faz com você: Shadowraze acerta até 280 de dano instantâneo numa de três distâncias fixas (constants_abilities.json: nevermore_shadowraze1), e 3 razes seguidos num só alvo já somam 1.200 de dano mágico antes de redução; Requiem of Souls (raio 1.000) assusta (fear) e reduz velocidade e resistência mágica de quem pega a linha, não é um empurrão.
- o que você faz com ele: Rolling Boulder em cima de um Stone Remnant rola mais rápido e mais longe e aumenta o stun (earth_spirit_rolling_boulder, constants_abilities.json), o suficiente pra fechar em cima do SF antes dele conseguir distância pra acertar o raze de longe; Magnetize atravessa Black King Bar (bkbpierce: yes), então mesmo depois do BKB dele (26:24) seu ult segue ticando.
- itens que viram: seu BKB sai 3,8 min antes do dele, use essa janela (23 a 26 min) pra iniciar sem medo de Requiem/Shadowraze; Spirit Vessel corta 70% da cura que o Mask of Madness dá pra ele.
- como jogar: não force engajamento em linha reta nos primeiros 8 min, raze pune de graça quem fica alinhado. Depois do seu BKB (perto dos 22 min), force a luta antes do dele ficar pronto.
- fonte: pro_dados/earth_spirit.json; app/public/data/herois/shadow_fiend.json (power_spikes); constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, earth_spirit_rolling_boulder, earth_spirit_magnetize); content/fichas/earth_spirit.md.

## Contra Hoodwink (hoodwink)
- placar: Earth Spirit venceu 82 de 138 partidas de pro (59,4%). Empatada em 2º lugar em volume de jogos contra ES.
- por que importa: 2º/3º maior volume de confrontos pro (138), suporte de roaming que disputa literalmente a mesma área do mapa que ES: os dois vivem fora da lane, controlando visão e abrindo gank.
- janelas: Hoodwink sobe Arcane Boots (12:12) e Urn (11:00), sem blink próprio; você já tem Urn (6:24) e Power Treads (9:18) prontos antes disso, janela boa pra cortar a rota de ward dela entre os 9 e 12 min. Depois dos 20, o Force Staff dela (26:06) dá reposicionamento, mas seu BKB (22:36) chega antes e fura o Bushwhack se ela conseguir acertar.
- o que ela faz com você: Bushwhack (265 de alcance de raio, stun de 1,5 a 2,1 s conforme o nível, até 360 de dano total) te prende parado pro resto do combo dela; Scurry dá 20% a 35% de velocidade e evasão dobrada por até 5 s pra ela fugir depois de errar o combo.
- o que você faz com ele: ela tem vida baixa e nenhuma forma de se livrar de silence; Geomagnetic Grip puxa um Stone Remnant em cima dela e ainda silencia quem for atingido no caminho, cortando a fuga da Scurry antes dela ativar.
- itens que viram: seu Black King Bar (22:36) bloqueia o Bushwhack (stun mágico); Magnetize ignora BKB e Scurry não tira você do alcance se você já estiver grudado nela com Boulder Smash.
- como jogar: não force troca sem visão de onde ela está escondida (Decoy cria confusão de alvo); depois do seu BKB, ignore o combo dela e vá direto na vida baixa, Scurry não segura sua rota de dano por muito tempo.
- fonte: pro_dados/earth_spirit.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_scurry, earth_spirit_geomagnetic_grip); content/fichas/earth_spirit.md.

## Contra Rubick (rubick)
- placar: Earth Spirit venceu 82 de 138 partidas de pro (59,4%). Empatado em 2º lugar em volume de jogos contra ES.
- por que importa: mesmo volume alto de Hoodwink (138 jogos), mas o motivo de entrar na lista é mecânico, não de lane: Rubick rouba literalmente o seu combo.
- janelas: Rubick sobe Arcane Boots (10:18) e Blink só perto dos 21:36, sem reposicionamento antes disso; seu Urn (6:24) e Treads (9:18) chegam bem antes, boa janela pra caçar ele sem blink de fuga. Depois dos 21:36 ele ganha Blink e pode acompanhar seu time de perto só pra roubar a última magia que você usar.
- o que ele faz com você: Spell Steal copia a última magia lançada por você (ou por qualquer herói inimigo visível) a até 1.000 de distância e atravessa Black King Bar (bkbpierce: yes, rubick_spell_steal). Se ele vir e roubar seu Magnetize ou Rolling Boulder, ganha a cópia com a recarga dele reduzida (10% a 30% conforme o nível), não a sua.
- o que você faz com ele: Rubick tem vida baixa fixa e nenhum blink antes dos 21 min; Rolling Boulder sobre um remnant fecha de longe (3.000 de alcance de cast) antes dele conseguir reagir, e Geomagnetic Grip silencia quem a pedra atinge no caminho.
- itens que viram: não existe item que bloqueie o roubo em si, a defesa real é não gastar Magnetize ou Rolling Boulder perto de um Rubick livre sem necessidade; seu Aghanim's Shard baixa a recarga de Geomagnetic Grip pra 10s (shard de ES, aghs_desc), então mesmo que ele roube uma vez você recarrega rápido.
- como jogar: evite lançar seu combo caro perto de um Rubick que ainda não gastou o Spell Steal; depois que ele rouba e gasta uma magia fraca, é a sua janela, ele fica sem o roubo até recarregar.
- fonte: pro_dados/earth_spirit.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, earth_spirit_rolling_boulder, earth_spirit_geomagnetic_grip); aghs_desc (Earth Spirit shard).

## Contra Ember Spirit (ember_spirit)
- placar: Earth Spirit venceu 53 de 127 partidas de pro (41,7%). Pior confronto de ES com amostra grande (127 jogos) entre os mids.
- por que importa: mesma posição principal que ES no pro (Ember também concentra os picks em mid) e o pior índice de vitória de ES entre rivais de volume alto, por isso entra tanto pela regra de "mesma posição" quanto pela de "maior desvantagem".
- janelas: até os 9:06, Ember ainda não tem Phase Boots, janela parelha de farm/poke; seu Urn (6:24) já está pronto bem antes disso. Dos 12 aos 19 min os dois têm Spirit Vessel (dele 12:48, seu 12:42), fase mais equilibrada. Depois dos 19:12 o Kaya dele já amplifica o dano das habilidades, e o BKB dele (27:06) sai bem depois do seu (22:36): a janela de 23 a 27 min é sua, mas ele consegue fugir com Fire Remnant mesmo sem BKB.
- o que ele faz com você: Fire Remnant (3 cargas, 1.400 de alcance de cast) deixa ele reposicionar ou escapar do seu Geomagnetic Grip voltando pro remnant; Sleight of Fist (até 170 de dano bônus em herói, raio de até 550) estoura seu combo de perto num piscar de olhos se ele tiver os remnants posicionados certo.
- o que você faz com ele: Rolling Boulder sobre um Stone Remnant alcança mais longe que o Fire Remnant base dele consegue reposicionar em um só cast; Geomagnetic Grip silencia Ember no meio do combo, cortando o Sleight of Fist antes dele ativar.
- itens que viram: Magnetize ignora BKB, então mesmo depois do BKB dele (27:06) seu ult continua ticando; o Black King Bar seu sai 4,5 min antes do dele, use essa janela pra fechar antes dele conseguir virar.
- como jogar: não entre perto demais dos remnants de fogo dele sem saber quantas cargas ele tem, Sleight of Fist some rápido; priorize silenciar ele com Geomagnetic Grip antes de abrir o combo completo.
- fonte: pro_dados/earth_spirit.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_fire_remnant, ember_spirit_sleight_of_fist, earth_spirit_geomagnetic_grip, earth_spirit_magnetize).

## Contra Windranger (windrunner)
- placar: Earth Spirit venceu 55 de 108 partidas de pro (50,9%, equilibrado). 5º maior volume de jogos contra ES.
- por que importa: alto volume de confrontos (108), flexível entre pos 1 e pos 4 mas frequentemente roaming/mid como ES, com controle de posicionamento (Shackleshot) que rivaliza diretamente o seu.
- janelas: até os 13:24, nenhum dos dois tem o item de burst pronto (Maelstrom dela sai aos 13:24); seu Urn+Treads (6:24/9:18) chegam bem antes, boa janela de rotação. Dos 15 aos 24 min ela farma rápido com Maelstrom e sobe pra Mjollnir (18:18); seu BKB (22:36) chega antes do dela (24:24), janela de 23 a 24 min pra fechar sem medo do Shackleshot.
- o que ela faz com você: Shackleshot prende dois alvos numa árvore ou unidade por 1,75 a 3,25 s, cancelando seu Rolling Boulder no meio se acertar antes do delay de 0,6 s; Windrun dá 100% de evasão e 50% de velocidade por 3 a 6 s, suficiente pra sair do alcance do seu combo físico.
- o que você faz com ela: Windranger tem vida baixa fixa; Rolling Boulder acerta antes dela conseguir ativar Windrun se você antecipar a reação, e Geomagnetic Grip silencia, cortando o Powershot/Focus Fire no meio do cast.
- itens que viram: Black King Bar seu bloqueia o Shackleshot (stun mágico); Magnetize atravessa a evasão do Windrun porque é dano em área, não ataque.
- como jogar: não force o combo de longe perto de árvore ou creep que ela possa usar no Shackleshot; depois do seu BKB (22:36), force a luta antes do Mjollnir dela (18:18) virar DPS sustentado.
- fonte: pro_dados/earth_spirit.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_windrun, earth_spirit_rolling_boulder, earth_spirit_geomagnetic_grip).

## Contra Tiny (tiny)
- placar: Earth Spirit venceu 58 de 106 partidas de pro (54,7%). 6º maior volume de jogos contra ES.
- por que importa: alto volume de confrontos (106) e disputa direta de papel: os dois são iniciadores físicos de stun em área que competem pela mesma janela de pickoff no meio-jogo.
- janelas: Tiny sobe nível 6/Grow aos 7:42 e Echo Sabre aos 11:48 (herois/tiny.json); seu combo completo (Urn 6:24 + Treads 9:18) fica pronto nessa mesma janela, fase parelha de farm. Dos 17 aos 19 min ele ganha Shadow Blade (17:36) e Blink (19:06), reposicionamento que você ainda não tem (seu Blink não é item core de pro); seu BKB (22:36) chega antes do dele (25:30), janela de 23 a 25 min pra iniciar sem medo do combo Avalanche+Toss.
- o que ele faz com você: Avalanche (stun de 0,3 s por tick, 5 ticks, raio crescente até 370) seguido de Toss (até 360 de dano, joga você longe) é o combo clássico de iniciação dele, e com Grow 3 (nível 18) o Toss sozinho já passa de 700 de dano mágico.
- o que você faz com ele: Rolling Boulder sobre remnant chega mais rápido que o alcance de cast do Toss dele (800 a 1.100) se você antecipar; Geomagnetic Grip silencia, cortando o combo Avalanche+Toss no meio se ele não tiver Blink ainda (antes dos 19:06).
- itens que viram: seu Black King Bar sai quase 3 min antes do dele (22:36 contra 25:30), use essa janela; Magnetize ignora BKB e continua ticando mesmo depois do dele pronto.
- como jogar: evite ficar isolado perto de árvore antes do seu BKB, o combo Avalanche+Toss dele pode sair de longe; depois do seu BKB, iniciar primeiro é quase sempre a jogada certa.
- fonte: pro_dados/earth_spirit.json; app/public/data/herois/tiny.json (power_spikes); constants_abilities.json (tiny_avalanche, tiny_toss, earth_spirit_rolling_boulder, earth_spirit_geomagnetic_grip, earth_spirit_magnetize).

## Contra Storm Spirit (storm_spirit)
- placar: Earth Spirit venceu 49 de 104 partidas de pro (47,1%, levemente desfavorável). 2º mid mais comum contra ES depois do Ember Spirit.
- por que importa: mesma posição principal (mid) e mesmo perfil de rotação por mobilidade; junto com Ember Spirit, mostra o padrão de ES sofrer contra mids itinerantes de escape rápido.
- janelas: até os 13:42, nenhum dos dois tem o item de amplificação pronto (Kaya dele sai aos 13:42); seu Urn+Treads (6:24/9:18) chegam antes, boa janela de ganks. Dos 20 aos 26 min ele junta Kaya and Sange (20:06) e Witch Blade (22:18), aumentando o DPS de Ball Lightning; seu BKB (22:36) sai pouco antes do dele (26:06), mas Ball Lightning não é bloqueada por stun comum, só por silence ou disable antes do cast.
- o que ele faz com você: Ball Lightning (raio de 200, dano por distância percorrida) deixa ele atravessar seu combo e escapar do alcance do seu Geomagnetic Grip; Electric Vortex puxa você pra perto dele e te imobiliza por até 2 s, abrindo pro resto do kit.
- o que você faz com ele: Geomagnetic Grip silencia antes dele conseguir ativar Ball Lightning, a única forma confiável de travar a fuga dele; Rolling Boulder em cima de remnant estende alcance o suficiente pra alcançá-lo antes de ele sumir no mapa.
- itens que viram: Magnetize atravessa BKB e continua ticando mesmo depois do dele pronto; seu Black King Bar bloqueia o Electric Vortex (puxão mágico) mas não impede o Ball Lightning em si.
- como jogar: silencie com Geomagnetic Grip antes de abrir o combo, se ele ligar Ball Lightning primeiro você perde a janela; não persiga sozinho depois que ele girar, a mana dele seca rápido, espere ele gastar.
- fonte: pro_dados/earth_spirit.json; pro_dados/storm_spirit.json; constants_abilities.json (storm_spirit_ball_lightning, storm_spirit_electric_vortex, earth_spirit_geomagnetic_grip, earth_spirit_magnetize).

## Contra Centaur Warrunner (centaur)
- placar: Earth Spirit venceu 57 de 106 partidas de pro (53,8%). Rival direto de offlane quando ES joga pos 3/4 (10,1% a 9,4% dos picks dele, pro_dados/herois_catalogo.json).
- por que importa: volume alto (106 jogos) e choque direto de papel: os dois são iniciadores de Força que vivem pra travar o inimigo primeiro, a luta vira quem atordoa primeiro.
- janelas: Centaur sobe Vanguard (8:30) e Ring of Tarrasque (17:30) antes do Blink (19:36); seu Urn+Treads (6:24/9:18) chegam na mesma janela de farm inicial. Dos 18 aos 22 min ele junta Pipe (18:06) e Crimson Guard (21:30), itens de time que não ajudam no 1x1; seu BKB (22:36) sai perto do Blink dele (19:36), fase de decisão de quem fecha o combo primeiro.
- o que ele faz com você: Hoof Stomp (325 de raio, stun de 1,6 a 2,2 s, só 0,5 s de preparo) atordoa mais rápido que o delay de 0,6 s do seu Rolling Boulder, então se ele blinka em cima de você primeiro, o stun dele sai antes; Double Edge causa dano em ambos, ruim pra você se já estiver com vida baixa pelo combo.
- o que você faz com ele: Geomagnetic Grip silencia, cortando o Blink+Stampede dele no meio se você antecipar o engajamento; Boulder Smash arrasta ele pra longe do time dele antes do combo completo sair.
- itens que viram: seu Black King Bar (22:36) só sai depois do Blink dele (19:36 é só o blink, não o combo completo), então não conte com ele pra bloquear o Hoof Stomp inicial, só o resto da luta; Magnetize atravessa a Resistência mágica que Pipe/Crimson Guard dão pro time dele.
- como jogar: não deixe ele blinkar em cima do seu time sem resposta, o Hoof Stomp dele sai mais rápido que o seu combo; priorize silenciar ele com Geomagnetic Grip antes dele conseguir iniciar primeiro.
- fonte: pro_dados/earth_spirit.json; pro_dados/centaur.json; constants_abilities.json (centaur_hoof_stomp, centaur_stampede, earth_spirit_geomagnetic_grip, earth_spirit_boulder_smash).

## Contra Drow Ranger (drow_ranger)
- placar: Earth Spirit venceu 33 de 46 partidas de pro (71,7%). Maior vantagem de ES na base inteira (amostra válida, 46 jogos).
- por que importa: carry pos1 que quase nunca divide lane com ES, mas é o oponente mais fácil do kit dele: squishy, sem blink, alvo clássico de pick-off, por isso entra mesmo sem lane em comum (mesma lógica do confronto Alchemist x Morphling).
- janelas: até os 7:18, Drow só tem Multishot e Frost Arrows, sem mobilidade nenhuma (herois/drow_ranger.json); seu Urn (6:24) já está pronto e seu Power Treads (9:18) chega pouco depois, janela perfeita pra caçar ela isolada puxando camp. Dos 12 aos 20 min ela farma com Dragon Lance (12:00), ainda sem escape; sua janela de vantagem fecha quando o Manta dela (19:48) vira defesa real, seu Black King Bar (22:36) chega tarde pra essa decisão, mas segue bem antes do BKB dela (26:48).
- o que ela faz com você: Gust (nome atual de Wave of Silence, 900 de alcance, silence de 3 a 6 s e empurrão) pode cortar seu combo antes de você fechar, se ela acertar primeiro; Frost Arrows reduz sua velocidade em até 45%, dificultando perseguição sem gap closer.
- o que você faz com ela: Rolling Boulder sobre remnant fecha a distância rápido o bastante pra pegá-la antes dela conseguir se afastar com Multishot kitando; Drow tem vida baixa fixa, Geomagnetic Grip silencia e já deixa ela sem resposta pro resto do combo.
- itens que viram: antes do Manta dela (19:48) ela não tem forma nenhuma de sair do seu Grip; seu BKB bloqueia o Gust (stun/silence mágico) caso ela acerte primeiro, mas só fica pronto depois do Manta dela, então a defesa real nessa janela é a vida baixa fixa dela, não o seu BKB.
- como jogar: ataque antes dos 20 min, é a janela de maior vantagem; depois do Manta e do Hurricane Pike dela (20:30) ela ganha distância e kite, prefira focar ela só em grupo com seu time.
- fonte: pro_dados/earth_spirit.json; app/public/data/herois/drow_ranger.json (power_spikes); constants_abilities.json (drow_ranger_wave_of_silence, drow_ranger_frost_arrows, earth_spirit_rolling_boulder, earth_spirit_geomagnetic_grip).

## Contra Timbersaw (shredder)
- placar: Earth Spirit venceu 38 de 60 partidas de pro (63,3%). 2ª maior vantagem de ES (amostra válida, 60 jogos).
- por que importa: além da boa vantagem, é rival direto de offlane/pos3 quando ES joga ali, outro herói de Força que depende de picar árvore pra farmar.
- janelas: Timbersaw sobe Kaya (13:00) e Kaya and Sange (18:06) antes do Blink (22:30); seu Urn+Treads (6:24/9:18) chegam bem antes, boa janela de gank enquanto ele ainda farma raiz. Seu Black King Bar (22:36) sai antes do dele (26:36), janela de 23 a 26 min pra fechar sem medo do Chakram.
- o que ele faz com você: Reactive Armor ganha stacks de armadura a cada ataque físico recebido (até 40 stacks), então quanto mais você bate com Boulder Smash/autoataque, mais ele fica resistente; Timber Chain (alcance crescente até 1.200) persegue junto com você se ele tiver floresta por perto.
- o que você faz com ele: Rolling Boulder e Geomagnetic Grip são dano mágico, não sofrem a Reactive Armor física dele; Magnetize atravessa BKB e ainda ignora a armadura, ótimo contra o tankiness dele.
- itens que viram: seu BKB sai 4 min antes do dele; evite focar nele com ataque físico puro, prefira o combo mágico (Rolling Boulder + Magnetize) que ignora a Reactive Armor.
- como jogar: não bata nele corpo a corpo sem necessidade nos primeiros minutos, cada ataque seu alimenta a armadura dele; feche com o combo mágico completo antes dele conseguir fugir pela floresta com Timber Chain.
- fonte: pro_dados/earth_spirit.json; pro_dados/shredder.json; constants_abilities.json (shredder_reactive_armor, shredder_timber_chain, earth_spirit_rolling_boulder, earth_spirit_magnetize).

## Contra Lion (lion)
- placar: Earth Spirit venceu 64 de 105 partidas de pro (61,0%). 4ª maior vantagem da base, mas com o maior volume de jogos (105) entre as vantagens grandes de ES.
- por que importa: suporte de disable puro, volume alto e boa vantagem: os dois competem pelo papel de "quem trava primeiro", mas Lion tem vida muito mais baixa.
- janelas: Lion sobe Tranquil Boots (7:24) e Blink (18:12); seu Urn+Treads (6:24/9:18) chegam na mesma fase de farm. Até os 18:12 ele não tem blink nenhum, janela boa pra caçá-lo isolado; depois disso ele consegue acompanhar seu time pra roubar iniciação com Earth Spike.
- o que ele faz com você: Earth Spike (nome atual do Impale do Lion, 650 de alcance, dano e stun em linha de 1,3 a 2,2 s, não é cone) te prende antes do seu combo sair se ele acertar primeiro; Finger of Death (600 a 850 de dano fixo) mata rápido se você estiver em pouca vida depois de uma troca.
- o que você faz com ele: Lion tem vida fixa muito baixa; Rolling Boulder sobre remnant chega antes do Blink dele estar pronto (antes dos 18 min), e Geomagnetic Grip silencia, cortando o Finger of Death no meio do cast.
- itens que viram: seu Black King Bar (22:36) bloqueia o Earth Spike (stun mágico), mas não bloqueia o dano fixo do Finger of Death; priorize silenciar ele antes dele conseguir fechar o cast do ult.
- como jogar: antes do Blink dele (18:12), ataque de surpresa, ele não tem como fugir; depois disso, mate ele rápido ou evite ficar visível com pouca vida perto do alcance de 900 do Finger of Death.
- fonte: pro_dados/earth_spirit.json; pro_dados/lion.json; constants_abilities.json (lion_impale, lion_finger_of_death, earth_spirit_rolling_boulder, earth_spirit_geomagnetic_grip).

## Contra Marci (marci)
- placar: Earth Spirit venceu 13 de 36 partidas de pro (36,1%). Pior confronto de ES na base com amostra válida (36 jogos).
- por que importa: pior winrate de ES com amostra confiável, e o motivo é mecânico: Marci é outra iniciadora de Força mobile que compete pelo mesmo papel, com dispel embutido que limpa o combo de ES. A ficha do site (dota2protips.com) já lista Marci entre os piores confrontos dele no Legend+.
- janelas: Marci sobe Phase Boots (10:54) e Black King Bar (24:18); seu Urn+Treads (6:24/9:18) chegam antes, fase parelha de farm. O BKB dela (24:18) sai quase 2 min depois do seu (22:36), mas Unleash dela já tem dispel básico embutido, então o timing de item importa menos do que a ordem do combo.
- o que ela faz com você: Unleash dá pulsos que reduzem sua velocidade de movimento e de ataque num raio de 800 enquanto ativa, não é silence, então não corta o cast do seu Rolling Boulder/Geomagnetic Grip, só dificulta fugir ou reagir depois; Sidekick/Bodyguard dá dispel básico pro aliado que ela protege, limpando parte do seu combo de controle.
- o que você faz com ele: Geomagnetic Grip silencia antes dela conseguir ativar Unleash, mas o cast dela é rápido (0,2 s), então a ordem de quem abre primeiro decide a troca; Rolling Boulder em remnant chega rápido o bastante pra interromper o Dispose (nome atual do Grapple) dela se você antecipar.
- itens que viram: seu BKB sai antes do dela (22:36 contra 24:18), use essa janela; depois que ela tiver BKB, seu Boulder Smash (dano mágico, não é stun) não a afasta nela, prefira Magnetize, que atravessa.
- como jogar: não abra o combo perto dela sem saber se o Unleash está pronto, o slow em área dificulta sua fuga; depois do seu BKB, priorize ela primeiro, antes que o dela saia.
- fonte: pro_dados/earth_spirit.json; pro_dados/marci.json; constants_abilities.json (marci_unleash, marci_grapple, earth_spirit_geomagnetic_grip, earth_spirit_magnetize); content/fichas/earth_spirit.md (confrontos citados por dota2protips.com).

## Contra Razor (razor)
- placar: Earth Spirit venceu 15 de 38 partidas de pro (39,5%). 2º pior confronto de ES com amostra válida (38 jogos).
- por que importa: outro dos piores confrontos de ES citados na ficha do site (dota2protips.com), carry/mid que drena e kita o combo dele à distância.
- janelas: Razor sobe Power Treads (6:54) e Guardian Greaves (14:12) antes do BKB (24:42); seu Urn+Treads (6:24/9:18) chegam na mesma fase. Dos 17 aos 21 min ele ganha Yasha (17:48) e Manta (21:18), mobilidade pra kitar o combo físico seu; seu BKB (22:36) chega quase junto do Manta dele, fase de decisão.
- o que ele faz com você: Static Link drena seu dano de ataque pra ele por até 18 s de link no nível 4 (até 24 de dano por segundo) e o link não quebra correndo, só reduz o quanto ele puxa com a distância; Plasma Field (raio 700) desacelera e dilui seu time antes do seu combo, sem empurrão, é slow e dano em onda.
- o que você faz com ele: Razor tem pouco controle de perto; Rolling Boulder fecha a distância antes dele conseguir linkar e kitar, e Geomagnetic Grip silencia, cortando o Static Link no meio do cast.
- itens que viram: Magnetize atravessa BKB dele, então mesmo depois do 24:42 seu ult continua ticando enquanto ele tenta kitar; Black King Bar seu bloqueia o Plasma Field (slow mágico) mas não a drenagem do Static Link, que não é considerada debuff mágico puro.
- como jogar: feche a distância antes dele conseguir te linkar e se afastar; depois do Manta dele (21:18), priorize silenciar com Geomagnetic Grip antes de qualquer outra coisa, senão ele kita o resto da luta.
- fonte: pro_dados/earth_spirit.json; pro_dados/razor.json; constants_abilities.json (razor_static_link, razor_plasma_field, earth_spirit_rolling_boulder, earth_spirit_geomagnetic_grip, earth_spirit_magnetize); content/fichas/earth_spirit.md (confrontos citados por dota2protips.com).

## Contra Templar Assassin (templar_assassin)
- placar: Earth Spirit venceu 20 de 47 partidas de pro (42,6%). 4º pior confronto de ES com amostra válida (47 jogos).
- por que importa: carry pos1 raramente na mesma lane, mas quarto pior confronto citado na ficha do site (dota2protips.com), e a razão é clara: Refraction anula boa parte do dano do combo de ES.
- janelas: TA sobe Power Treads (5:00) e Meld nível 3 (6:00-8:00); seu Urn+Treads (6:24/9:18) chegam na mesma fase, mas ela já tem Refraction (nível 10, 11:00-13:00) antes do seu BKB ficar pronto. Dos 15 aos 20 min ela ganha Blink (15:30-19:30) e Hurricane Pike (17:00-22:00), reposicionamento que complica a perseguição; o Black King Bar dela sai na mesma janela do seu (20:00-26:00, mediana 21:24, contra 22:36 do seu), sem vantagem clara de timing pra nenhum dos dois.
- o que ela faz com você: Refraction dá 3 a 6 instâncias que absorvem dano e devolvem dano bônus (até 60 por instância) por 17 s, então boa parte do seu dano de autoataque e Boulder Smash é desperdiçada nas instâncias antes de chegar na vida dela; Meld (até 200 de dano e -8 de armadura) é burst alto se ela pegar você parado.
- o que você faz com ela: Rolling Boulder e Magnetize são dano mágico; a descrição oficial de Refraction não restringe o bloqueio a dano físico, mas gastar seu combo mágico evita depender de autoataque contra o burst dela de qualquer forma; TA tem vida relativamente baixa, silenciar com Geomagnetic Grip corta o Meld/Psi Blades no meio.
- itens que viram: prefira o combo mágico completo (Rolling Boulder + Magnetize) em vez de ficar trocando autoataque contra o Refraction dela; o BKB dela sai perto do seu, não dá pra contar com essa janela pra iniciar sem medo do Psionic Trap silenciando.
- como jogar: não troque autoataque contra ela com Refraction ativa, é desperdício; feche com o combo mágico e silencie antes dela conseguir se meldar em cima de alguém do seu time.
- fonte: pro_dados/earth_spirit.json; app/public/data/herois/templar_assassin.json (power_spikes); constants_abilities.json (templar_assassin_refraction, templar_assassin_meld, earth_spirit_rolling_boulder, earth_spirit_magnetize, earth_spirit_geomagnetic_grip); content/fichas/earth_spirit.md (confrontos citados por dota2protips.com).

## Contra Morphling (morphling)
- placar: Earth Spirit venceu 25 de 41 partidas de pro (61,0%). Boa vantagem (amostra válida, 41 jogos), mesmo sem lane em comum.
- por que importa: carry pos1 que quase nunca divide lane com ES, mas é alvo clássico de pick-off antes do farm dele decolar, igual à lógica do confronto Alchemist x Morphling citado como referência: dois heróis que raramente se cruzam na lane, mas o que um pode fazer com o outro define a partida.
- janelas: até os 6:00, Morphling só tem Waveform nível 1 (115 de mana, recarga 21 s) e nenhuma defesa real (herois/morphling.json); seu Urn+Treads (6:24/9:18) chegam logo depois, janela perfeita pra pegá-lo isolado puxando camp antes dos 15 min. O Manta dele só sai aos 18:35 e o BKB dele vem muito tarde (31:55, quase 10 min depois do seu); a janela de 9 a 18 min é toda sua.
- o que ele faz com você: Adaptive Strike (até 110 + 2,5x Agilidade de dano, stun de até 2,6 s) é o único disable dele, e ele precisa estar perto pra acertar; Waveform é escape, não dano, então em troca direta ele depende de attack damage puro depois do nível 7.
- o que você faz com ele: Morphling tem vida baixa nos primeiros 15 min e nenhum blink; Rolling Boulder sobre remnant fecha a distância rápido o bastante pra pegá-lo antes do Waveform dele recarregar (21 s), e Geomagnetic Grip silencia, cortando o Adaptive Strike no meio.
- itens que viram: antes do Manta (18:35) ele não tem forma nenhuma de sair do seu Grip além do Waveform, que tem recarga alta no começo; Magnetize atravessa BKB dele (31:55), então mesmo tarde no jogo seu ult continua ticando.
- como jogar: cace ele isolado antes dos 15 min, é a sua melhor janela do confronto inteiro; depois do Manta e do Butterfly dele (25:45), evite o 1x1 sozinho e foque ele só com o time.
- fonte: pro_dados/earth_spirit.json; app/public/data/herois/morphling.json (power_spikes); constants_abilities.json (morphling_waveform, morphling_adaptive_strike_agi, earth_spirit_rolling_boulder, earth_spirit_geomagnetic_grip, earth_spirit_magnetize).
