---
id: confrontos-enigma
heroi: Enigma
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/enigma.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/windrunner.json
- dota-hub-conteudo-novo/pro_dados/centaur.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/mars.json
- dota-hub-conteudo-novo/pro_dados/axe.json
- dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- dota-hub-conteudo-novo/pro_dados/ursa.json
- dota-hub-conteudo-novo/pro_dados/batrider.json
- dota-hub-conteudo-novo/pro_dados/lion.json
- dota-hub-conteudo-novo/pro_dados/rattletrap.json
- dota-hub-conteudo-novo/pro_dados/shadow_demon.json
- dota-hub-conteudo-novo/pro_dados/morphling.json
- dota-hub-conteudo-novo/pro_dados/terrorblade.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer (lane_role, partidas de liga 7.40-7.41)
---

## Contra Hoodwink (hoodwink)
- placar: Enigma venceu 35 de 78 partidas de pro (44,9%). Fonte: pro_dados/enigma.json (confrontos).
- por que importa: é quem mais jogou contra Enigma no banco de pro (78 jogos), mesmo sem dividir lane direto com ele; suporte onipresente nas composições atuais e a desvantagem de Enigma aqui é real, não ruído.
- janelas: até os 6:24 (boots de Enigma, pro_dados/enigma.json) e 5:48 (boots de Hoodwink, pro_dados/hoodwink.json) é farm puro; dos 6 aos 15min Hoodwink já farma de longe com Acorn Shot/Bushwhack enquanto Enigma ainda não tem Blink (mediana 15:48); depois dos 15:48 Enigma passa a ameaçar um blink-in, mas Hoodwink segue com Scurry (recarga 0, phased movement, tree-walking) pra sumir antes do Black Hole fechar; dos 23:48 em diante (Aghanim's Shard dela, pro_dados/hoodwink.json) ela ganha Hunter's Boomerang em arco que atravessa e volta, útil pra poke à distância sem se aproximar do raio de 420 do Black Hole.
- o que ele faz com você: Bushwhack (raio 265, stun de 1,5 a 2,1s, constants_abilities.json) interrompe o channel de 4s do Black Hole se acertar Enigma perto de árvore; Scurry dá fuga instantânea (sem recarga, 2 cargas) pra sair do raio de 420 antes do combo fechar; Sharpshooter acerta até 1350 de dano à distância em 3s de carregamento, suficiente pra matar Enigma de HP fino se ele ficar parado carregando mana.
- o que você faz com ele: Hoodwink tem pouca vida (nível final 18 em média, gpm/xpm baixos típicos de suporte 4/5); se o Black Hole pega ela sem Scurry pronta, os 100 a 200 de dano puro por segundo (bkbpierce: Yes, constants_abilities.json) matam rápido; Malefice com Shard (17:06 de Enigma) trava ela por mais tempo se ela ficar parada plantando Bushwhack.
- itens que viram: Scurry dela (recarga 0) é o item/skill que decide se ela escapa do Black Hole; o Blink de Enigma (15:48) é o que decide se ele chega perto o bastante dela antes da wave de farm terminar.
- como jogar: não force o combo em cima dela perto de árvore isolada, é onde o Bushwhack conecta melhor; espere ela gastar Scurry ou Decoy antes de canalizar o Black Hole, senão ela foge no meio do channel.
- fonte: pro_dados/enigma.json; pro_dados/hoodwink.json; constants_abilities.json (enigma_black_hole, hoodwink_bushwhack, hoodwink_scurry, hoodwink_sharpshooter).

## Contra Shadow Fiend (nevermore)
- placar: Enigma venceu 44 de 67 partidas de pro (65,7%). Fonte: pro_dados/enigma.json.
- por que importa: 2º oponente com mais jogos contra Enigma (67) e a maior vantagem entre os 6 mais comuns; mid frágil que historicamente perde muito pra iniciação de Enigma.
- janelas: até os 5:54 (power treads de SF, pro_dados/nevermore.json) ele já é rápido na lane; dos 12 aos 23min ele empilha Necromastery e fica cada vez mais perigoso com Shadowraze (85 a 280 de dano + bônus por alma, constants_abilities.json), mas ainda sem Black King Bar (25:12); Enigma com Blink pronto aos 15:48 e Aghanim's Shard aos 17:06 consegue isolar ele nessa janela, antes do Hurricane Pike (23:00) dar distância pra fugir; depois dos 25:12/25:42, os dois correm BKB quase junto, e a partir daí quem fecha o combo primeiro ganha a troca.
- o que ele faz com você: Shadowraze acerta até 280 de dano instantâneo numa de três distâncias fixas (constants_abilities.json: nevermore_shadowraze1), suficiente pra matar Enigma de HP baixo antes do combo sair; Requiem of Souls (raio 1000, reduz resistência mágica em até 15%) pune quem ficou agrupado depois de um Black Hole malsucedido.
- o que você faz com ele: SF tem pouca vida própria e Black Hole ignora Black King Bar (bkbpierce: Yes); se ele for pego sem BKB pronto, os 100 a 200 de dano puro por segundo do Black Hole mais o Malefice com Shard (stun estendido) costumam ser kill garantido; Midnight Pulse limpa onda e ainda machuca SF parado atirando Shadowraze de perto.
- itens que viram: o Black King Bar dos dois decide quem fecha o combo primeiro depois dos 25min; se Enigma blinka e canaliza antes do BKB de SF (25:12), o Black Hole conecta sem chance de fuga.
- como jogar: ataque na janela dos 15 aos 23min, antes do Hurricane Pike dele; depois do BKB de SF, só inicie com o seu BKB também pronto, senão um Shadowraze de perto corta o seu channel.
- fonte: pro_dados/enigma.json; pro_dados/nevermore.json; constants_abilities.json (enigma_black_hole, nevermore_shadowraze1, nevermore_requiem).

## Contra Tusk (tusk)
- placar: Enigma venceu 32 de 64 partidas de pro (50,0%). Fonte: pro_dados/enigma.json.
- por que importa: 3º oponente com mais jogos (64) e matchup parelho; os dois vivem da mesma janela de gank com blink e combo de pick-off, então quem chega primeiro no nível do blink domina a fase de roam.
- janelas: antes dos 15:48 (blink de Enigma) nenhum dos dois ameaça gank forte; Tusk só tem o próprio Blink aos 19:00 (pro_dados/tusk.json), cerca de 3min depois de Enigma, então nessa janela Enigma inicia primeiro; Ice Shards (duração 4 a 7s, constants_abilities.json) pode travar território ou cortar a rota de fuga antes disso. Depois dos 19min os dois têm blink e a luta vira quem acerta o combo primeiro: Snowball de Tusk ou Black Hole de Enigma.
- o que ele faz com você: Walrus Kick (ou Punch, dependendo do facet) chuta o alvo mais próximo, empurra até 1200 de distância e deixa 1s no ar; se acertar Enigma durante o channel do Black Hole, o efeito de "não pode agir" interrompe o combo; Ice Shards cria uma barreira de 4 a 7s que pode bloquear a rota de blink-in de Enigma.
- o que você faz com ele: Tusk tem pouca vida de suporte; o Black Hole (100 a 200/s de dano puro) mais Malefice com Shard mata ele rápido se pego isolado antes do combo dele sair; Midnight Pulse ajuda a limpar o Snowball se ele tentar bolar aliados.
- itens que viram: quem chega primeiro no próprio Blink Dagger decide quem inicia a troca; Enigma, em mediana, chega 3 minutos antes (15:48 contra 19:00).
- como jogar: use a vantagem de blink mais cedo pra forçar luta antes dos 19min; depois disso, cuidado com Ice Shards cortando sua rota de aproximação antes do Black Hole.
- fonte: pro_dados/enigma.json; pro_dados/tusk.json; constants_abilities.json (tusk_snowball, tusk_ice_shards, tusk_walrus_kick).

## Contra Windranger (windrunner)
- placar: Enigma venceu 40 de 61 partidas de pro (65,6%). Fonte: pro_dados/enigma.json.
- por que importa: 4º oponente com mais jogos (61) e grande vantagem pra Enigma; carry/suporte híbrido frágil sem disable duro contra o channel do Black Hole.
- janelas: até os 5:18/6:24 (boots dos dois) é farm; Windranger escala rápido com Maelstrom (13:24, pro_dados/windrunner.json) e vira ameaça de clear e poke; Enigma com Blink aos 15:48 e Shard aos 17:06 ainda chega antes do Black King Bar dela (24:24), janela boa pra isolar; depois dos 24:24 ela tem resposta mágica melhor, mas ainda sem disable que trave o channel de longe.
- o que ele faz com você: Shackleshot (stun de 1,75 a 3,25s se prender num alvo ou árvore atrás, constants_abilities.json) interrompe o Black Hole se acertar Enigma; Windrun dá evasão de 100% contra ataque físico e velocidade, útil pra fugir do raio de 420 antes do combo fechar, mas não dispensa stun nem o dano puro do Black Hole.
- o que você faz com ele: Windranger é de HP baixo; o Black Hole (100 a 200/s puro) mais Malefice prolongado pelo Shard mata ela rápido se ela não tiver Windrun pronto pra sair da área antes do fim do channel.
- itens que viram: Black King Bar dela (24:24) é quase simultâneo ao de Enigma (25:42); quem chega primeiro arrisca iniciar sem medo de ser interrompido.
- como jogar: force o combo antes dela ter Shackleshot pronto (recarga 10 a 16s, então ela quase sempre tem); prefira iniciar quando ela já gastou Windrun ou Shackleshot recentemente.
- fonte: pro_dados/enigma.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_windrun).

## Contra Centaur Warrunner (centaur)
- placar: Enigma venceu 28 de 53 partidas de pro (52,8%). Fonte: pro_dados/enigma.json.
- por que importa: 5º mais jogos contra Enigma (53) e mesma rota principal (offlane em 87,7% das partidas de Enigma e 97,6% das de Centaur, partidas pro 7.40-7.41, OpenDota explorer); é o rival direto de rota do patch e o único deste grupo com um stun de curto alcance que interrompe o channel na cara.
- janelas: os dois correm blink quase no mesmo tempo (Centaur 19:36 contra Enigma 15:48, Enigma chega antes); antes disso Centaur farma com Helm of Iron Will (4:48) e Ring of Health rumo a Vanguard (8:30), tankando a lane; dos 15:48 aos 19:36 Enigma tem a janela de blinkar sozinho sem resposta; depois dos 19:36 os dois podem iniciar um no outro, e o combate vira quem consegue cravar o combo primeiro.
- o que ele faz com você: Hoof Stomp (stun de 1,6 a 2,2s após meio segundo de preparação, constants_abilities.json) interrompe o Black Hole se acertar Enigma durante o channel; Stampede dá velocidade de atropelamento pro time dele contra-iniciar em cima de Enigma antes dele conseguir blinkar; Double Edge soma dano extra por força, pode acabar o combate sozinho contra HP baixo.
- o que você faz com ele: Centaur é tanque de muita vida, então o Black Hole sozinho raramente mata; a força real é prender ele e o time junto pro resto do grupo surrar; se ele gastou o Stomp antes, o channel fica seguro.
- itens que viram: Black King Bar de Enigma (25:42) bloqueia o stun do Hoof Stomp dele, então depois desse ponto o combo fica seguro contra a interrupção dele; antes disso, o risco de ser interrompido é real.
- como jogar: cheque se o Hoof Stomp dele está disponível antes de canalizar perto; depois do seu BKB, pode iniciar sem medo da interrupção dele.
- fonte: pro_dados/enigma.json; pro_dados/centaur.json; constants_abilities.json (centaur_hoof_stomp, centaur_stampede, centaur_double_edge); partidas pro 7.40-7.41 (OpenDota explorer, lane_role).

## Contra Snapfire (snapfire)
- placar: Enigma venceu 23 de 51 partidas de pro (45,1%). Fonte: pro_dados/enigma.json.
- por que importa: 6º mais jogos contra Enigma (51) e o pior resultado entre os 6 mais comuns; suporte de zona com disable à distância que atrapalha o blink-in.
- janelas: Snapfire pega Aghanim's Shard muito cedo (16:54, pro_dados/snapfire.json), quase junto do Shard de Enigma (17:06), e o Firesnap Cookie passa a curar o alvo e lançar um Mortimer Kiss extra no ponto de pouso (40% do dano de impacto, aghs_desc); até os 20:42 (Blink dela) ela depende desse pulo reforçado pra defender o grupo; depois dos 20:42 ela também ganha reposicionamento próprio, e com Glimmer Cape aos 21:54 consegue sumir um aliado do raio do Black Hole.
- o que ele faz com você: Firesnap Cookie faz a unidade pousar e atordoar quem está na zona de pouso (constants_abilities.json), pode interromper o channel se pousar perto de Enigma; Mortimer Kisses cobre uma área larga com 8 globos (até 360 de dano cada) em 5,5s, pune muito quem ficou parado dentro de um Black Hole que não matou ninguém.
- o que você faz com ele: Snapfire tem pouca vida de suporte; se pega sem Glimmer Cape pronto, o Black Hole mais Malefice com Shard mata ela antes dela conseguir usar Spit Out ou Mortimer Kisses.
- itens que viram: Glimmer Cape dela (21:54, invisibilidade + resistência mágica) pode tirar um aliado do raio de 420 do Black Hole se ativado a tempo; o Shard dela chega cedo o bastante pra ela ter Spit Out já na fase de combo de Enigma.
- como jogar: inicie antes dela ter mana pra Mortimer Kisses em cima do seu time travado; respeite o alcance do Firesnap Cookie perto de árvores e cantos.
- fonte: pro_dados/enigma.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_firesnap_cookie, snapfire_mortimer_kisses); aghs_desc (snapfire_firesnap_cookie).

## Contra Mars (mars)
- placar: Enigma venceu 29 de 51 partidas de pro (56,9%). Fonte: pro_dados/enigma.json.
- por que importa: maior número de jogos entre os heróis de offlane fora do top 6 geral (51); Mars joga off em 96,3% das partidas de pro, mesma rota de Centaur (97,6%) e Axe (97,7%), partidas pro 7.40-7.41, OpenDota explorer.
- janelas: Mars chega no próprio Blink aos 15:12, pouco antes de Enigma (15:48), então na primeira janela de roam ele tem leve vantagem de iniciação; Enigma pega Shard aos 17:06 e passa a ameaçar Malefice prolongado; Black King Bar dos dois é parecido (Mars 26:30, Enigma 25:42), então Enigma costuma chegar primeiro; Aghanim's Shard de Mars (21:30) dá a Spear de Mars a chance de empalar 2 heróis, o que pode acertar Enigma no meio do combo dele.
- o que ele faz com você: Arena of Blood (raio 550, duração 5,5s, constants_abilities.json) cria uma parede que bloqueia movimento, pode te prender dentro ou fora de uma luta antes do Black Hole; Spear of Mars empala o primeiro herói atingido e empurra, interrompendo o channel se acertar Enigma.
- o que você faz com ele: Mars tem bastante vida e Bulwark reduz dano físico recebido, mas não reduz o dano puro do Black Hole; se ele for pego sem Enrage (não tem, isso é do Ursa) ou sem escapar da arena própria, o Black Hole mais Midnight Pulse machuca bastante.
- itens que viram: o Blink de Mars chega cerca de 30s antes do de Enigma, então ele costuma iniciar primeiro em disputas de rota; Black King Bar de Enigma neutraliza o risco da Spear interromper o channel.
- como jogar: cuidado ao entrar na Arena of Blood dele sem BKB, ela pode te prender junto com os aliados dele; prefira iniciar você quando ele já gastou a Spear ou a Arena.
- fonte: pro_dados/enigma.json; pro_dados/mars.json; constants_abilities.json (mars_arena_of_blood, mars_spear, mars_bulwark); partidas pro 7.40-7.41 (OpenDota explorer, lane_role).

## Contra Axe (axe)
- placar: Enigma venceu 25 de 43 partidas de pro (58,1%). Fonte: pro_dados/enigma.json.
- por que importa: 2º herói de offlane mais comum contra Enigma (43 jogos; Axe joga off em 97,7% das partidas de pro, 7.40-7.41, OpenDota explorer), outro rival direto de rota com iniciação própria.
- janelas: Axe tem Phase Boots cedo (7:12, pro_dados/axe.json) e Blade Mail aos 12:36, bom pra segurar lane; Enigma chega no Blink aos 15:48, perto do de Axe (15:42, praticamente empatado); dos 15 aos 22min é a janela de troca de iniciação; depois dos 22:54 (Shard de Axe) Battle Hunger pode empilhar em um só alvo, e o Black King Bar de Axe (25:54) fica quase junto do de Enigma (25:42).
- o que ele faz com você: Berserker's Call (raio 315, constants_abilities.json) obriga Enigma a atacar Axe, mas não é stun nem silence, então não interrompe o channel do Black Hole; Counter Helix dispara a cada 4 a 7 ataques recebidos e devolve 100 a 160 de dano puro, pouco relevante já que Enigma raramente ataca; Culling Blade (275 a 475 de dano puro) mata Enigma de HP baixo e reseta a recarga se conseguir o abate.
- o que você faz com ele: como a Call não interrompe o channel, Enigma pode blinkar e canalizar Black Hole mesmo sendo chamado; o Black Hole (100 a 200/s puro) soma com Midnight Pulse pra queimar a vida de Axe, que costuma ser de força bruta mas sem fuga própria além do blink.
- itens que viram: Black King Bar de Enigma (25:42) chega antes do de Axe (25:54), então Enigma tende a iniciar seguro primeiro nessa janela; Blade Mail de Axe (12:36) devolve dano físico, mas não afeta o Black Hole, que é puro.
- como jogar: não tenha medo de canalizar Black Hole mesmo sendo "chamado" pelo Call, ele não quebra o channel; cuidado só com Culling Blade se estiver com pouca vida.
- fonte: pro_dados/enigma.json; pro_dados/axe.json; constants_abilities.json (axe_berserkers_call, axe_counter_helix, axe_culling_blade, enigma_black_hole); partidas pro 7.40-7.41 (OpenDota explorer, lane_role).

## Contra Ember Spirit (ember_spirit)
- placar: Enigma venceu 18 de 43 partidas de pro (41,9%). Fonte: pro_dados/enigma.json.
- por que importa: herói de mid mais comum contra Enigma (43 jogos, empatado em volume com Axe; Ember joga mid em 96,2% das partidas de pro, 7.40-7.41, OpenDota explorer) e o pior resultado entre todos os matchups com 30+ jogos; Ember reposiciona e sai do raio do Black Hole com facilidade.
- janelas: Ember farma rápido com bottle (1:30) e sobe pra Urn of Shadows (7:18) e Spirit Vessel (12:48), ficando relevante cedo; ele carrega Fire Remnant com recarga curta (meio segundo pra lançar, 0,5s) desde o nível 1 da skill, então tem reposicionamento disponível praticamente o jogo inteiro; Enigma só chega no Blink aos 15:48, bem depois do pico de mobilidade de Ember; dos 19:12 (Kaya) em diante Ember também cura mana rápido pra manter Sleight of Fist, que farma e poka sem se aproximar.
- o que ele faz com você: Fire Remnant (recarga de carga de 35s, dano de 100 a 300, constants_abilities.json) deixa Ember plantar um ponto de fuga fora do raio de 420 do Black Hole antes da luta, e escapar instantaneamente quando o channel começa; Sleight of Fist ataca tudo numa área sem ficar parado no alcance de Malefice.
- o que você faz com ele: se Enigma conseguir isolar Ember sem Fire Remnant plantado (carga gasta ou em recarga), o Black Hole mais Malefice prolongado pelo Shard mata ele rápido, já que tem pouca vida própria; Midnight Pulse ajuda a queimar ele se ele ficar perto demais batendo com Sleight of Fist.
- itens que viram: a carga de Fire Remnant de Ember é o item/skill real que decide o duelo, não um item comprado; Black King Bar de Enigma (25:42) contra o de Ember (27:06) chega primeiro, mas isso só importa se Ember já gastou o remnant.
- como jogar: cheque se o Fire Remnant dele está disponível antes de iniciar; se ele já usou o remnant recentemente (recarga de 35s), é a janela certa pra blinkar em cima dele.
- fonte: pro_dados/enigma.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_fire_remnant, ember_spirit_sleight_of_fist); partidas pro 7.40-7.41 (OpenDota explorer, lane_role).

## Contra Ursa (ursa)
- placar: Enigma venceu 27 de 40 partidas de pro (67,5%). Fonte: pro_dados/enigma.json.
- por que importa: maior vantagem de Enigma entre os carries com amostra boa (40 jogos); os dois raramente dividem lane (Ursa joga safe lane em 98,7% das partidas de pro, Enigma offlane em 87,7%, partidas pro 7.40-7.41, OpenDota explorer), mas é o tipo de confronto que o dono pediu: dois cores que não se cruzam na lane mas decidem o jogo um contra o outro mais tarde.
- janelas: Ursa farma rápido, Battle Fury pronto aos 13:42 (pro_dados/ursa.json) já clareia jungle e ganha gold; até os 16:48 (Blink de Ursa) ele é puramente um duelista cronometrado de 1x1, sem fuga; Enigma com Blink aos 15:48 chega primeiro nessa corrida; dos 21:30 aos 24:24 Ursa ganha Mithril Hammer rumo a Basher (22:30) e cresce em dano de duelo, mas só tem Black King Bar aos 24:24, perto do de Enigma (25:42); depois dos 26:06 (Aghanim's Shard de Ursa) Earthshock aplica Fury Swipes em área.
- o que ele faz com você: Overpower dá 400% de velocidade de ataque por 3 a 6 ataques, ótimo pra explodir Enigma de perto se ele ficar exposto depois de canalizar; Enrage dá 80% de redução de dano e 50% de resistência a status com dispel forte por 4 a 5s, o que reduz bastante (mas não zera) o dano do Black Hole se ele estiver preso dentro.
- o que você faz com ele: Black Hole prende Ursa por 4s sem poder atacar nem usar Enrage antes do efeito começar a valer (ele só ajuda se já estiver ativo quando o channel pega); 100 a 200 de dano puro por segundo soma até 800 no total, dano que ameaça matar Ursa sozinho se ele não tiver BKB nem Enrage prontos; como Ursa depende de alcance curto pra lutar, prendê-lo tira o jogo dele por completo.
- itens que viram: Enrage de Ursa (recarga de 30 a 60s) é o único jeito dele reduzir o estrago do Black Hole; se ele já gastou Enrage antes da luta, a janela de 4s do channel é quase garantia de abate.
- como jogar: espere Ursa gastar Enrage recentemente antes de iniciar; se ele tiver o Enrage pronto, prefira focar outro alvo primeiro ou garantir que o time ajude a queimar ele durante o channel.
- fonte: pro_dados/enigma.json; pro_dados/ursa.json; constants_abilities.json (ursa_overpower, ursa_enrage, enigma_black_hole); partidas pro 7.40-7.41 (OpenDota explorer, lane_role).

## Contra Batrider (batrider)
- placar: Enigma venceu 23 de 34 partidas de pro (67,6%). Fonte: pro_dados/enigma.json.
- por que importa: maior vantagem percentual de Enigma entre os matchups com 30+ jogos fora do top 6 geral (67,6%); Batrider tem a única habilidade do grupo que literalmente sequestra Enigma pra longe do time, mas na prática perde a corrida de iniciação.
- janelas: os dois correm Blink Dagger quase juntos (Batrider 17:42, Enigma 15:48, Enigma chega 2min antes); Batrider com Sticky Napalm empilha dano de passagem cedo, útil pra zonear lane; dos 15:48 aos 17:42 Enigma tem a janela de blinkar sem risco de ser laçado de volta; depois dos 17:42 os dois podem se engajar, e Flaming Lasso (recarga de 60 a 90s) vira ameaça real se ele pegar Enigma isolado.
- o que ele faz com você: Flaming Lasso (duração de 2,25 a 3,25s, constants_abilities.json) agarra Enigma e arrasta ele pra longe do time, interrompendo qualquer coisa que ele esteja fazendo e isolando pro resto do time dele matar; quebra se Enigma blinkar durante o laço.
- o que você faz com ele: Batrider tem pouca vida; se Enigma consegue blinkar e canalizar antes dele reagir, o Black Hole (100 a 200/s puro) mais Malefice prolongado pelo Shard mata rápido; como Enigma chega no Blink Dagger primeiro, a iniciativa geralmente é dele.
- itens que viram: Blink Dagger de Enigma (15:48) contra o de Batrider (17:42) é a vantagem real aqui; se Enigma tiver blink dagger disponível e Batrider não, a corrida de iniciação é unilateral.
- como jogar: evite ficar isolado e sem aliados por perto quando Batrider tiver a Flaming Lasso pronta; prefira abrir a luta você, antes dele ter blink e ulti disponíveis ao mesmo tempo.
- fonte: pro_dados/enigma.json; pro_dados/batrider.json; constants_abilities.json (batrider_flaming_lasso).

## Contra Lion (lion)
- placar: Enigma venceu 26 de 37 partidas de pro (70,3%). Fonte: pro_dados/enigma.json.
- por que importa: maior vantagem percentual de Enigma em todo o banco com amostra confiável (70,3%, 37 jogos); suporte quase sempre presente no pro play, mas o combo de burst dele depende de alcance curto que Enigma evita com farm de jungle.
- janelas: Lion farma Tranquil Boots cedo (7:24) e passa boa parte do early/mid parado empurrando wave de longe; ele só tem Blink próprio aos 18:12 (pro_dados/lion.json), mais de 2min depois do de Enigma (15:48), então até lá ele depende de acertar Earth Spike ou Hex em alcance curto pra conectar o combo; depois dos 18:12 ele pode iniciar sozinho, mas o Aghanim's Shard dele só chega aos 25:48, quando Enigma já tem BKB (25:42) havia alguns segundos.
- o que ele faz com você: Hex (2 a 3,2s de desativação total, constants_abilities.json) silencia e desarma Enigma, podendo impedir o cast do Black Hole se vier antes do channel começar; Finger of Death causa até 850 de dano mágico instantâneo, o suficiente pra matar Enigma de HP fino fora de combate.
- o que você faz com ele: Lion tem pouquíssima vida e nenhuma fuga própria além do blink comprado; se Enigma chega perto antes dele reagir, Black Hole mais Midnight Pulse mata fácil, e o Blink de Enigma chegando 2min antes do dele garante essa vantagem de iniciativa na maior parte do jogo.
- itens que viram: Black King Bar de Enigma (25:42) anula o Hex dele a partir desse ponto; antes disso, o risco real é ser hexado no meio da aproximação, não durante o channel em si (Hex, assim como qualquer disable, tem que vir antes do cast começar pra impedir o Black Hole).
- como jogar: na pré-luta, cheque se o Hex dele está disponível antes de se expor pra iniciar; depois do seu BKB, o combo fica seguro contra o kit dele.
- fonte: pro_dados/enigma.json; pro_dados/lion.json; constants_abilities.json (lion_voodoo, lion_finger_of_death).

## Contra Clockwerk (rattletrap)
- placar: Enigma venceu 16 de 36 partidas de pro (44,4%). Fonte: pro_dados/enigma.json.
- por que importa: um dos piores resultados de Enigma com amostra boa (30+ jogos); suporte com dois jeitos de interromper o channel do Black Hole à distância, algo raro no banco dele.
- janelas: Clockwerk farma Tranquil Boots aos 8:30 e segue como roamer puro até Blink (24:48) e Aghanim's Shard (30:00); como ele raramente precisa de item pra ser perigoso (o kit dele funciona com pouco ouro), a ameaça de Power Cogs e Battery Assault está presente desde cedo, bem antes do próprio blink dele; Enigma com Blink aos 15:48 pode blinkar em cima dele, mas corre o risco de cair numa armadilha.
- o que ele faz com você: Power Cogs (recarga de 15 a 21s, constants_abilities.json) forma um anel que prende Enigma por 5 a 8s se ele blinkar perto demais, cancelando qualquer combo; Battery Assault atira dano mágico e ministun aleatório num raio de 275 a cada 0,7s por 10,5s, pode interromper o channel do Black Hole se um dos tiros acertar Enigma durante os 4s de canalização; Hookshot (quando ele acerta um herói) estuna numa área de 175 ao redor do impacto.
- o que você faz com ele: Clockwerk tem pouca vida; se Enigma consegue blinkar sem cair nos Cogs e canalizar antes do Battery Assault acertar, o Black Hole mata ele rápido; Midnight Pulse também ajuda a limpar ele se tentar ficar perto com Rocket Flare.
- itens que viram: Aghanim's Shard de Enigma (17:06) ajuda a fechar o Malefice antes dele reagir com Cogs; o próprio Blink Dagger de Enigma é arriscado perto de árvores ou cantos, onde Power Cogs rende mais.
- como jogar: evite blinkar perto de formações fechadas de árvore, onde os Cogs prendem melhor; prefira iniciar de ângulo aberto, onde ele não consegue te cercar antes do Black Hole sair.
- fonte: pro_dados/enigma.json; pro_dados/rattletrap.json; constants_abilities.json (rattletrap_power_cogs, rattletrap_battery_assault, rattletrap_hookshot).

## Contra Shadow Demon (shadow_demon)
- placar: Enigma venceu 17 de 38 partidas de pro (44,7%). Fonte: pro_dados/enigma.json.
- por que importa: outro dos piores resultados de Enigma com amostra boa (38 jogos); Disruption bane o alvo preso no Black Hole antes do dano terminar de valer, roubando o abate.
- janelas: Shadow Demon segue roamer típico, Arcane Boots aos 11:18 e Blink próprio só aos 23:54, bem depois do de Enigma (15:48); até lá ele depende de Disruption/Shadow Poison em alcance de cast normal pra interferir; Enigma com Shard aos 17:06 já ameaça Malefice prolongado nessa janela; dos 24:36 (Glimmer Cape dele) em diante ele ganha mais uma ferramenta de salvar aliado do raio do Black Hole.
- o que ele faz com você: Disruption (banimento de 2,75s, constants_abilities.json) pode banir um aliado prestes a morrer dentro do Black Hole, tirando ele do alcance de dano por tempo suficiente pra sobreviver e ainda spawnar duas ilusões ao retornar; Shadow Poison empilha dano em quem ficar perto repetidamente.
- o que você faz com ele: Shadow Demon tem pouca vida própria; se Enigma isola ele antes dele conseguir banir um aliado, o Black Hole mais Malefice com Shard mata rápido; a resposta real pro Disruption não é no Enigma, é no time dele focar outro alvo que não possa ser banido a tempo.
- itens que viram: Glimmer Cape dele (24:36) e o próprio Disruption são as duas ferramentas que salvam aliados do Black Hole; não existe item de Enigma que anule isso diretamente, o ajuste é de alvo e timing de luta.
- como jogar: ao canalizar Black Hole em grupo com Shadow Demon vivo, não dependa só do dano da ulti pra fechar o abate, o time precisa ajudar a focar quem ele não consegue banir a tempo.
- fonte: pro_dados/enigma.json; pro_dados/shadow_demon.json; constants_abilities.json (shadow_demon_disruption, shadow_demon_shadow_poison).

## Contra Morphling (morphling)
- placar: Enigma venceu 9 de 15 partidas de pro (60,0%); amostra pequena. Fonte: pro_dados/enigma.json.
- por que importa: o carry mais jogado em pro no patch 7.40/7.41 entre os considerados aqui (871 partidas no dataset, pro_dados/morphling.json), mesmo não cruzando lane com Enigma (Morphling joga safe lane em 88,1% das partidas de pro, Enigma offlane em 87,7%, partidas pro 7.40-7.41, OpenDota explorer); é exatamente o tipo de confronto carry-contra-carry sem lane em comum que decide jogos de late, só que com amostra direta pequena.
- janelas: Morphling escala puramente por farm, Power Treads aos 6:00 e Manta Style aos 18:24 (pro_dados/morphling.json); até Manta ele não tem jeito confiável de dodgear o Black Hole fora do Waveform, que fica invulnerável durante o cast mas tem recarga de 12 a 21s; Enigma com Blink aos 15:48 geralmente chega antes do Manta dele; dos 25:48 (Butterfly) em diante ele ganha evasão alta contra fisico, irrelevante contra o dano puro do Black Hole; Black King Bar dele só sai aos 30:54, bem depois do de Enigma (25:42).
- o que ele faz com você: Waveform (invulnerável durante o uso, constants_abilities.json) pode atravessar o raio de 420 do Black Hole sem tomar o dano, mas só se já estiver em recarga disponível quando o channel começa; Adaptive Strike estuna e empurra, pode interromper Enigma se vier antes do cast.
- o que você faz com ele: Morphling tem HP alto mas pouca resistência mágica própria cedo; os 100 a 200 de dano puro por segundo do Black Hole (bkbpierce: Yes) ignoram qualquer forma dele estiver (força ou agilidade) e qualquer resistência física que ele tenha empilhado; se pego sem Waveform disponível, o combo soma rápido.
- itens que viram: Waveform disponível é o fator real, não um item comprado; Black King Bar de Enigma (25:42) chega 5min antes do de Morphling (30:54), então a janela de iniciar com segurança é longa.
- como jogar: cheque a recarga do Waveform dele antes de iniciar, 12 a 21s dependendo do nível; se ele acabou de usar pra farmar ou escapar, é a hora de blinkar em cima.
- fonte: pro_dados/enigma.json; pro_dados/morphling.json; constants_abilities.json (morphling_waveform, morphling_adaptive_strike_agi, enigma_black_hole); partidas pro 7.40-7.41 (OpenDota explorer, lane_role).

## Contra Terrorblade (terrorblade)
- placar: Enigma venceu 5 de 20 partidas de pro (25,0%); amostra pequena, mas a maior queda de taxa de vitória entre os 16 confrontos deste arquivo. Fonte: pro_dados/enigma.json.
- por que importa: 2º carry mais jogado em pro no patch (887 partidas, pro_dados/terrorblade.json), escolhido pelo mesmo motivo do Morphling: carry puro de late sem lane em comum, e aqui o número chama atenção mesmo sendo amostra pequena, porque mostra o risco real de Enigma contra farm descontrolado de late.
- janelas: Terrorblade escala rápido de item, Manta aos 17:06 e Aghanim's Shard aos 17:24 (pro_dados/terrorblade.json), quase no mesmo minuto do Shard de Enigma (17:06); Reflection (recarga de 14 a 23s) já está disponível desde o nível 1 da skill, então ele tem reposicionamento de ilusão cedo; dos 28:12 (Skadi) em diante ele fica difícil de abater em combate corpo a corpo; Metamorphosis (recarga de 130 a 145s) dá alcance e dano de ataque bônus por até 50s quando ele decide lutar.
- o que ele faz com você: Reflection (raio 400, constants_abilities.json) cria reflexos invulneráveis de todos os heróis inimigos numa área, incluindo Enigma, e o reflexo ataca de volta; Sunder troca uma porcentagem da vida atual dos dois (mínimo 25 a 35%), ferramenta que pode salvar Terrorblade de dentro do Black Hole roubando vida de outro aliado à distância, sem precisar sair do raio.
- o que você faz com ele: o Black Hole prende Terrorblade sem poder usar Reflection ou Metamorphosis durante os 4s de channel (não pode castar feitiço), mas Sunder é a exceção perigosa porque rouba vida de um aliado fora do raio, então o combo sozinho raramente garante o abate contra ele tarde no jogo.
- itens que viram: Aghanim's Shard de Terrorblade (17:24) dá Demon Zeal, que custa vida própria mas dá velocidade de movimento e regeneração extra pra ele e ilusões, ajudando a sobreviver ao dano do Black Hole; Sunder é o item/skill que decide se ele sobrevive preso.
- como jogar: contra Terrorblade tarde no jogo, não dependa só do Black Hole pra matar, ele pode sunderar vida de um aliado de fora e sobreviver; priorize pegar ele cedo, antes do Manta e do Shard, quando o Sunder dele ainda tem recarga alta (110s no nível 1, cai pra 40s no nível 3) e ele não teve tempo de usar e recarregar de novo.
- fonte: pro_dados/enigma.json; pro_dados/terrorblade.json; constants_abilities.json (terrorblade_reflection, terrorblade_sunder, terrorblade_metamorphosis, enigma_black_hole); aghs_desc (terrorblade_demon_zeal).
