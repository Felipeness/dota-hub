---
id: confrontos-snapfire
heroi: Snapfire
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/queenofpain.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/earthshaker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tinker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/death_prophet.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/wisp.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/clinkz.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/keeper_of_the_light.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
- C:/Users/felip/Desktop/dota-hub/content/fichas/snapfire.md
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
---
## Como foram escolhidos os 15

Base: pro_dados/snapfire.json, confrontos vêm do OpenDota `/heroes/128/matchups` (só liga pro, 7.40+7.41, 2456 jogos da Snapfire no total). Critério 1, os 6 com mais jogos contra ela (Rubick, Jakiro, Shadow Fiend, Tusk, Hoodwink, Lion). Critério 2, quem joga nas mesmas posições que ela (ficha diz pos 2/3/4/5, suporte-roam e mid) com bastante jogo em pro além dos 6 de cima: Disruptor, Mars, Queen of Pain. Critério 3, maior vantagem e maior desvantagem com 30+ jogos: Earthshaker, Tinker e Death Prophet (ela ganha muito), Io, Clinkz e Keeper of the Light (ela perde muito). Snapfire não é carry fixo (fichas/snapfire.md: 38,4% suporte, 28,9% suporte duro, 23,8% mid, 7,9% offlane, carry é só 0,9% e fora da curva), então o critério 4 (carries sem lane em comum) não se aplica a ela do jeito que se aplicaria a um Alchemist; Shadow Fiend entrou porque é o 3º par mais jogado em pro mesmo sendo carry puro, o equivalente pra ela do exemplo do Alch x Morph.

## Contra Rubick (rubick)

- placar: 268 vitórias em 515 jogos de pro, 52,0% (pro_dados/snapfire.json, confrontos hero_id 86)
- por que importa: o par mais jogado em pro contra ela. Mesma função (suporte/roam) e ele rouba a magia que ela acabou de lançar.
- janelas: até 10-11 min os dois estão comprando Arcane Boots quase junto (ela 10,6 min, ele 10,3 min, medianas de pro). Os dois blincam quase na mesma hora, ela aos 20,7 min, ele aos 21,6 min, então quem blinca primeiro dita o pick. O Scepter dele (27,4 min, presente em só 1119 dos 3990 jogos dele, 28%) chega depois do Shard dela (16,9 min), ou seja, na maior parte do jogo ela tem combo pronto antes dele ter Spell Steal duplo.
- o que ele faz com você: Spell Steal (cd 16/10/4s, 25 de mana) copia a última magia que ela lançou por até 300s (nível 3) e devolve Firesnap Cookie ou Mortimer Kisses pro time dela; Telekinesis (0,9-1,5s de stun, raio 300-375) trava ela sozinha se blincar sem visão; Fade Bolt (100-325 de dano, debuff de 10s) reduz o dano de volta dela na troca.
- o que você faz com ele: Firesnap Cookie (1-2,2s de stun, alcance 650) trava ele antes do Spell Steal valer, e como ele tem HP baixo de suporte, Scatterblast ponto-a-ponto (dano +30%, duração do slow +50% até 450 de distância) ou Mortimer Kisses fecham a conta rápido.
- itens que viram: Aghanim's Shard dela (16,9 min; a Liquipedia/aghs_desc descreve como Firesnap Cookie passando a curar o alvo e soltar uma Mortimer Kisses fraca no pouso) dá um combo rápido demais pro Spell Steal copiar com proveito, porque sai quase tudo de uma vez só; o Scepter dele dobra o número de magias roubáveis e sobe a versão pra scepter, então depois dos 27 min ele pode devolver um combo ainda mais forte se ela ficar descuidada com a ordem de cast.
- como jogar: gaste uma magia de baixo valor perto dele antes de engajar pra não deixar ele roubar o combo de verdade, afunde nele primeiro numa troca (HP baixo) e não blinque sozinha sem ver onde ele está.
- fonte: pro_dados/snapfire.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis, rubick_fade_bolt, snapfire_firesnap_cookie, snapfire_scatterblast); aghs_desc (snapfire, rubick)

## Contra Jakiro (jakiro)

- placar: 240 vitórias em 472 jogos de pro, 50,8% (pro_dados/snapfire.json, confrontos hero_id 64)
- por que importa: 2º par mais jogado em pro. Mesma função de suporte de roam/poke em dupla de magia.
- janelas: lane phase de 5-15 min é troca de poke duro dos dois lados (Dual Breath dele contra Scatterblast/Firesnap dela). Os dois acham Arcane Boots perto (ela 10,6 min, ele 11,7 min). Macropyre (ultimate dele, 90-70s de cd) fica pronta no nível 6 quase junto com Mortimer Kisses dela, então a partir daí as trocas em grupo ficam sobre quem solta a ultimate primeiro.
- o que ele faz com você: Ice Path (até 2s de stun ao acertar, cd 20-11s) mais Dual Breath (cd fixo de 10s, sem escala) pegam ela no meio do pulo do Firesnap se ela errar o timing; Macropyre (100-200 de dano por segundo, 10s de duração) nega ela ficar parada pra lançar Mortimer Kisses na mesma área.
- o que você faz com ele: Jakiro não tem nenhum escape (zero mobilidade no kit), então Firesnap Cookie (alcance 650) fecha o combo antes dele reagir, e como ele também não tem defesa de burst, Scatterblast ou Mortimer Kisses sozinhos já ganham a troca.
- itens que viram: o Shard dela (16,9 min) dá o combo de cura + mini-explosão antes do Force Staff dele (26,2 min) existir pra puxar ele pra longe, então a janela de 15 a 26 min é dela; depois do Force Staff dele a perseguição fica mais difícil.
- como jogar: evite ficar parada perto de onde ele pode soltar Macropyre, puxe o combo primeiro já que ele não foge, e tome cuidado extra entre os 15 e os 26 min, que é a janela mais favorável pra fechar a conta nele.
- fonte: pro_dados/snapfire.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_dual_breath, jakiro_macropyre, snapfire_firesnap_cookie)

## Contra Shadow Fiend (nevermore)

- placar: 233 vitórias em 456 jogos de pro, 51,1% (pro_dados/snapfire.json, confrontos hero_id 11)
- por que importa: 3º par mais jogado em pro, mesmo sendo carry puro sem lane em comum com ela (equivalente do exemplo Alchemist x Morphling pra Snapfire: os dois aparecem muito juntos nas partidas mesmo sem trocar na mesma lane).
- janelas: até os 10 min ele farma absurdo (lh10 médio de 78 contra 21 dela, pro_dados/nevermore.json) e já tem Power Treads (5,9 min). Com Mask of Madness (10,2 min) ele já consegue puxar combo de Shadowraze em criaturas e heróis fora de posição. O Shard dela (16,9 min) chega bem antes do BKB dele (25,2 min), ou seja, de 15 a 25 min é a janela dela pra travar e matar sem ele conseguir dispelar o stun.
- o que ele faz com você: Shadowraze (cd fixo de 9s, 80 de mana, uma das três direções) ameaça ela à distância antes do Firesnap Cookie alcançar; Requiem of Souls (80-160 de dano por onda, escala com almas guardadas em Necromastery, cd 120-100s) limpa ela se pegar sem visão.
- o que você faz com ele: Firesnap Cookie (1-2,2s de stun) trava ele antes dele enfileirar as três razes; Scatterblast ponto-a-ponto derruba a velocidade de ataque que o Mask of Madness dá pro combo dele.
- itens que viram: Black King Bar dele (25,2 min) é a resposta direta ao combo de stun dela, até ali ela tem vantagem; o Shard dela (16,9 min) garante dano extra rápido pra fechar antes do BKB ficar pronto.
- como jogar: force a luta antes dos 25 min, trave ele com Firesnap assim que achar visão, e depois do BKB dele não feche sozinha, puxe pro time estourar junto porque o stun não vai segurar mais.
- fonte: pro_dados/snapfire.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, snapfire_firesnap_cookie, snapfire_scatterblast)

## Contra Tusk (tusk)

- placar: 219 vitórias em 428 jogos de pro, 51,2% (pro_dados/snapfire.json, confrontos hero_id 100)
- por que importa: 4º par mais jogado e mesma função, os dois são iniciadores de roam que caçam o mesmo alvo isolado no mapa.
- janelas: de 6-8 min os dois já estão roamando pra ganks antes de qualquer item core (ela só tem boots, 5,0 min; ele tranquil, 8,4 min). Blink dos dois é quase junto, dela aos 20,7 min, dele aos 19,0 min, ligeiramente antes. Depois dos 19-21 min quem blinca primeiro no gank decide a luta.
- o que ele faz com você: Ice Shards (cd 23-14s) cria uma parede que pode travar ela no meio do pulo do Firesnap Cookie, deixando ela presa pro resto do combo dele; Walrus Punch (16-10s de cd, +60 a 120 de dano no próximo ataque) mata rápido por ser corpo a corpo contra o HP baixo dela.
- o que você faz com ele: Firesnap Cookie (1-2,2s de stun) trava ele antes do Snowball pegar velocidade e juntar o time; Scatterblast ponto-a-ponto (slow 50% mais longo até 450 de distância) impede ele de fechar a distância pro Walrus Punch.
- itens que viram: o Shard dela (16,9 min) sustenta a troca de poke antes do kit dele valer de verdade; o Blink dele sai 1,7 min antes do dela (19,0 contra 20,7), então em visão aberta ele tende a iniciar primeiro.
- como jogar: mantenha visão nos 18-21 min pra não ser pega de surpresa pelo blink dele, trave o Firesnap assim que ele aparecer, e evite ficar isolada perto de árvore/parede onde o Ice Shards cerca.
- fonte: pro_dados/snapfire.json; pro_dados/tusk.json; constants_abilities.json (tusk_ice_shards, tusk_walrus_punch, tusk_snowball, snapfire_firesnap_cookie, snapfire_scatterblast)

## Contra Hoodwink (hoodwink)

- placar: 217 vitórias em 425 jogos de pro, 51,1% (pro_dados/snapfire.json, confrontos hero_id 123)
- por que importa: 5º par mais jogado e mesma função de suporte de roam com poke de longa distância.
- janelas: de 5-15 min os dois trocam poke pesado (Bushwhack e Acorn Shot dela contra Scatterblast e Firesnap da Snapfire). O Shard da Snapfire chega bem antes (16,9 min contra 23,8 min do Shard de Hoodwink), então na janela de 17 a 24 min a Snapfire tem o combo de cura+dano pronto e Hoodwink ainda não.
- o que ela faz com você: Bushwhack (cd 15-12s) prende a Snapfire no meio da animação do pulo do Firesnap, travando o combo de stun dela; Scurry (sem cd, velocidade bônus e passagem livre por árvore/unidades por 3,5-5s, sem invisibilidade) deixa Hoodwink fugir de Scatterblast e Mortimer Kisses sem ser pega.
- o que você faz com ela: Firesnap Cookie trava Hoodwink antes dela conseguir quicar o Bushwhack numa árvore; Scatterblast ponto-a-ponto reduz a janela de reação antes do Scurry.
- itens que viram: o Shard da Snapfire (16,9 min) chega 7 min antes do de Hoodwink (23,8 min, troca Hunter's Boomerang num bumerangue que volta e deixa o alvo mais vulnerável a dano mágico), então entre 17 e 24 min é a melhor janela da Snapfire pra fechar a conta.
- como jogar: force a troca entre 15 e 24 min antes do shard dela ficar pronto, atenção ao raio de árvores perto pro Bushwhack, e não persiga depois que ela usar Scurry, o custo não compensa.
- fonte: pro_dados/snapfire.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_scurry, snapfire_firesnap_cookie, snapfire_scatterblast); aghs_desc (hoodwink)

## Contra Lion (lion)

- placar: 233 vitórias em 408 jogos de pro, 57,1% (pro_dados/snapfire.json, confrontos hero_id 26)
- por que importa: 6º par mais jogado e a maior vitória dela entre os suportes que mais jogam contra ela, mesma função de hard lockdown.
- janelas: Lion blinca mais cedo (18,2 min contra 20,7 min dela), então em teoria ele inicia primeiro; mas o farm dele é o mais baixo da lista (gpm 286, lh10 6, pro_dados/lion.json), ele é puro suporte sem dano de auto-ataque, e o Finger of Death (600-850 de dano verdadeiro) só fica forte com talento ou nível alto de ultimate. Isso explica o placar a favor dela: mesmo sendo travada primeiro, ela sobrevive ao combo dele e devolve mais dano bruto.
- o que ele faz com você: Earth Spike (105-300 de dano, 1,3-2,2s de stun) seguido de Hex (2-3,2s de silêncio/transformação) trava por quase 5s somados; Mana Drain (canalização de 5s) seca a mana que ela precisa pro combo de Shard.
- o que você faz com ele: Firesnap Cookie (alcance 650) alcança antes do Impale dele (que precisa de linha reta), e como Lion também tem HP baixo de suporte, Scatterblast ou Mortimer Kisses fecham a troca já que ele não tem nenhum escape no kit, só ofensiva.
- itens que viram: os dois blincam perto um do outro (18,2 contra 20,7 min), então visão nesse intervalo decide quem inicia; o Shard dela cura e ainda solta dano, o Shard dele (Mana Drain afetando 2 alvos extra, imunidade a debuff durante o canal) é mais defensivo e situacional, o que ajuda a explicar o placar.
- como jogar: espere o combo de stun dele passar sem entrar em pânico, ela aguenta o Earth Spike + Hex e ainda devolve dano suficiente pra matar, e priorize visão nos 16-20 min pra não ser pega de surpresa primeiro.
- fonte: pro_dados/snapfire.json; pro_dados/lion.json; constants_abilities.json (lion_impale, lion_voodoo, lion_finger_of_death, lion_mana_drain, snapfire_firesnap_cookie); aghs_desc (lion)

## Contra Disruptor (disruptor)

- placar: 200 vitórias em 391 jogos de pro, 51,2% (pro_dados/snapfire.json, confrontos hero_id 87)
- por que importa: mesma posição (suporte/hard support), grande amostra em pro (391 jogos) mesmo não estando entre os 6 mais jogados.
- janelas: Disruptor é o suporte mais pobre de farm da lista (gpm 279, lh10 4, pro_dados/disruptor.json) e o Scepter dele só sai aos 34,9 min, o mais tardio de toda a lista. Isso significa que a maior parte do jogo é sem o Scepter dele (que silencia o uso de itens em área), então ela pode confiar no Shard (16,9 min) e no Blink (20,7 min) sem medo dessa resposta até bem tarde.
- o que ele faz com você: Kinetic Field (raio 350, 2,6-4,4s) prende ela e o time dele numa jaula no meio do pulo do Firesnap; Static Storm (raio 550, 6s, cd 100-70s) silencia magia em área e apaga o combo inteiro dela se for pega dentro.
- o que você faz com ele: Disruptor não tem nenhuma forma de se esconder ou fugir rápido, então Firesnap Cookie trava ele antes da ultimate sair, e o dano dela (Scatterblast ou Mortimer Kisses) sozinho já fecha a conta porque ele é um suporte imóvel.
- itens que viram: o Scepter dele (34,9 min, muda Static Storm pra silenciar itens também) só entra no jogo tardio; até lá o Shard dela é a vantagem clara.
- como jogar: ataque ele antes da ultimate (cd alto, 100-70s) estar pronta de novo, evite ficar presa dentro de uma Kinetic Field já formada, e não gaste o combo de iniciação se ouvir o grito de Static Storm chegando.
- fonte: pro_dados/snapfire.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_kinetic_field, disruptor_static_storm, snapfire_firesnap_cookie); aghs_desc (disruptor)

## Contra Mars (mars)

- placar: 199 vitórias em 370 jogos de pro, 53,8% (pro_dados/snapfire.json, confrontos hero_id 129)
- por que importa: mesma posição no offlane (ela joga pos 3 em 7,9% das partidas por role, fichas/snapfire.md), grande amostra em pro.
- janelas: Mars blinca muito cedo, aos 15,2 min, quase 5,5 min antes dela (20,7 min), então na janela de 15 a 20 min ele pode iniciar sozinho sem resposta de blink dela. O Shard dela (16,9 min) cai bem nessa janela e ajuda a segurar; depois dos 21,5 min o Shard dele (Spear acerta 2 heróis e deixa rastro de fogo) deixa o combo dele ainda mais perigoso.
- o que ele faz com você: Spear of Mars (325 de dano, 1,3-2,2s de stun, atinge o primeiro herói ou parede no caminho) te prende contra qualquer parede perto; Arena of Blood (raio 550, 5,5s) cria uma arena que bloqueia ataques à distância vindos de fora, prendendo ela lá dentro longe do time.
- o que você faz com ele: Firesnap Cookie trava ele antes da lança sair, já que o Spear precisa de linha reta; se ele errar a lança ele fica sem nenhum outro CC, e Scatterblast ou Mortimer Kisses fecham a troca.
- itens que viram: o Blink dele sai bem antes (15,2 contra 20,7 min), então até ela ter o próprio blink pronto, ele dita quando a luta começa; o BKB dele (26,5 min) chega depois do Shard dela, dando uma janela de 17 a 26 min favorável a ela.
- como jogar: ande perto de parede com cautela nos primeiros 20 min (facilita a lança dele), responda o combo dele com o seu assim que tiver Shard, e depois do BKB dele não confie só no stun, puxe o time pro dano bruto.
- fonte: pro_dados/snapfire.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_arena_of_blood, snapfire_firesnap_cookie); aghs_desc (mars)

## Contra Queen of Pain (queenofpain)

- placar: 181 vitórias em 347 jogos de pro, 52,2% (pro_dados/snapfire.json, confrontos hero_id 39)
- por que importa: mesma posição de mid (23,8% das partidas dela no dotacoach 7.41f é a maior taxa de vitória das quatro roles reais, fichas/snapfire.md), grande amostra em pro.
- janelas: QoP farma muito mais rápido no meio (lh10 56 contra 21 dela, pro_dados/queenofpain.json) e tende a bater nível 6 primeiro com Sonic Wave pronto. De 8 a 17 min, antes do Shard da Snapfire (16,9 min), QoP tem vantagem clara de burst à distância. Depois dos 17 min a Snapfire já tem combo de volta.
- o que ela faz com você: Blink (cd 12-6s, recarga rápida) reposiciona pra bater de qualquer ângulo; Sonic Wave (325-625 de dano em linha) ou Scream of Pain (90-345 de dano em área) podem matar a Snapfire sozinha se ela for pega sem o combo pronto.
- o que você faz com ela: Firesnap Cookie (1-2,2s de stun) trava QoP antes do Blink dela salvar, e como ela é extremamente frágil, Scatterblast ponto-a-ponto ou Mortimer Kisses fecham rápido.
- itens que viram: o Shard da Snapfire (16,9 min) chega bem antes do Scepter (23,5 min) e do Shard (27,5 min) da QoP, dando a ela a vantagem de item na janela de 17 a 23 min.
- como jogar: evite lane sozinha contra ela antes dos 17 min sem suporte, puxe a troca pro território onde há visão pra travar o Blink dela, e depois dos 17 min force a luta já que o combo dela está pronto.
- fonte: pro_dados/snapfire.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_blink, queenofpain_sonic_wave, queenofpain_scream_of_pain, snapfire_firesnap_cookie)

## Contra Earthshaker (earthshaker)

- placar: 72 vitórias em 113 jogos de pro, 63,7% (pro_dados/snapfire.json, confrontos hero_id 7; amostra pequena, 113 jogos)
- por que importa: maior vantagem dela entre os oponentes com 30+ jogos que também blincam pra iniciar luta em grupo, um espelho de playstyle (os dois são iniciadores de stun com ultimate de área) que ajuda a entender por que ela ganha esse tipo de confronto.
- janelas: Earthshaker blinca muito cedo (12,2 min) pra abrir com Fissure e puxar Echo Slam; a Snapfire blinca só aos 20,7 min, bem depois. Mas o Shard dela (16,9 min) fica pronto no meio desse intervalo, dando resposta rápida antes dele reforçar o combo com Shard (20,5 min) ou Scepter (20,6 min).
- o que ele faz com você: Fissure (até 1,6s de stun, cria uma parede que bloqueia movimento) pode cortar o caminho do pulo do Firesnap Cookie; Echo Slam (ultimate, cd 130-110s) multiplica dano por herói inimigo perto, mas só vale muito se o time dela estiver agrupado.
- o que você faz com ele: Firesnap Cookie (alcance 650, maior que o de Fissure) ameaça primeiro à distância; Mortimer Kisses causa dano fixo por glob (180-360 por impacto) que não depende de quantos inimigos estão perto, diferente do Echo Slam dele, então numa troca 1x1 ou sem o time todo junto o dano dela rende mais.
- itens que viram: o Shard dela (16,9 min) chega antes do dele (20,5 min) e do Scepter dele (20,6 min, vira Enchant Totem num salto com área), então entre 17 e 20 min ela tem vantagem de item.
- como jogar: não se agrupe demais perto dele no início de luta pra não potencializar o Echo Slam, responda o blink cedo dele com visão de ward, e lembre que em troca direta o dano fixo dela tende a ganhar.
- fonte: pro_dados/snapfire.json; pro_dados/earthshaker.json; constants_abilities.json (earthshaker_fissure, earthshaker_echo_slam, snapfire_mortimer_kisses, snapfire_firesnap_cookie); aghs_desc (earthshaker)

## Contra Tinker (tinker)

- placar: 35 vitórias em 51 jogos de pro, 68,6% (pro_dados/snapfire.json, confrontos hero_id 34; amostra pequena, 51 jogos, e o próprio Tinker tem só 441 jogos de pro no total, raramente picado)
- por que importa: a maior vantagem dela em toda a lista com 30+ jogos. Serve de exemplo do padrão que se repete nos outros confrontos fáceis dela: mago sem fuga de verdade.
- janelas: Tinker quer ficar sempre fora de alcance, poke com Laser e March of the Machines e nunca brigar corpo a corpo; ele blinca cedo (11,5 min) só pra reposicionar o combo de dano, não pra iniciar em cima de ninguém. A Snapfire não precisa correr atrás da timeline dele, ela só precisa achar ele parado.
- o que ele faz com você: Laser (3-4,5s de cegueira, cd 19-16s) faz os ataques dela errarem; March of the Machines (raio 900, 6s, dano por segundo que escala) nega ela ficar numa área parada.
- o que você faz com ele: Firesnap Cookie (alcance 650) e Scatterblast (alcance 800, bônus de 30% de dano até 450 de distância) alcançam mais longe do que o pouco espaço que ele tem pra fugir; fora o Rearm (reseta cooldowns, cd 5,5-4,5s) ele não tem nenhum escape de verdade, então uma vez que ela fecha com o Firesnap, ele morre antes de poder reagir.
- itens que viram: Shard dele (24,5 min, Warp Flare: joga o alvo pra longe e prende por um tempo) é a única resposta de controle que ele ganha, e chega bem depois do Shard dela (16,9 min).
- como jogar: caça ele fora da visão do time dele, não entre em troca de poke à distância (ela perde essa troca), feche a distância de uma vez com Firesnap Cookie em vez de se aproximar andando.
- fonte: pro_dados/snapfire.json; pro_dados/tinker.json; constants_abilities.json (tinker_laser, tinker_march_of_the_machines, tinker_rearm, snapfire_firesnap_cookie, snapfire_scatterblast); aghs_desc (tinker)

## Contra Death Prophet (death_prophet)

- placar: 44 vitórias em 67 jogos de pro, 65,7% (pro_dados/snapfire.json, confrontos hero_id 43; amostra pequena, 67 jogos)
- por que importa: 2ª maior vantagem dela com 30+ jogos, outro mago sem fuga de verdade.
- janelas: o forte de Death Prophet é a ultimate Exorcism (fantasmas que atacam sozinhos perto dela, cd 150s), que só compensa se ela sobreviver perto do alvo; o único jeito dela se afastar de luta é o Eul's Scepter (cyclone, mediana de 14,9 min). Antes e depois disso ela não tem nenhum dash ou blink.
- o que ela faz com você: Silence (raio 450, cd 15-12s) pode cortar o combo de magia da Snapfire se ela for pega no meio do cast; Carrion Swarm (alcance 900, 100-325 de dano) chipa de longe antes do combo dela chegar perto.
- o que você faz com ela: como Death Prophet não tem fuga de verdade fora do Eul's, Firesnap Cookie trava ela e Scatterblast ou Mortimer Kisses fecham antes dos fantasmas da Exorcism valerem a pena, já que eles batem corpo a corpo e precisam dela viva perto do alvo.
- itens que viram: nenhum item dela muda isso de verdade, ela depende do próprio kit; o Shard dela (Spirit Siphon ganha 1 carga extra e assusta o alvo depois de 3s canalizado seguidos) é defensivo, não dá fuga.
- como jogar: vigie se ela tem o Eul's pronto antes de all-in (mediana 14,9 min), trave o combo assim que ela aparecer sem o cyclone, e não deixe ela ficar viva perto de criaturas ou do seu time pra Exorcism valer.
- fonte: pro_dados/snapfire.json; pro_dados/death_prophet.json; constants_abilities.json (death_prophet_silence, death_prophet_exorcism, death_prophet_carrion_swarm, snapfire_firesnap_cookie); aghs_desc (death_prophet)

## Contra Io (wisp)

- placar: 25 vitórias em 66 jogos de pro, 37,9% (pro_dados/snapfire.json, confrontos hero_id 91; amostra pequena, 66 jogos)
- por que importa: a maior desvantagem dela em toda a lista com 30+ jogos.
- janelas: o confronto não é bem um 1x1, é a Snapfire tentando roamear em cima da dupla Io + carry grudado no Tether. Overcharge (bônus de velocidade de ataque, amplificação de magia e regeneração de vida por 8s, cd 25-16s) deixa o carry da dupla mais forte na hora da troca, e Relocate (cd 90-70s) pode tirar os dois do mapa antes do gank dela terminar.
- o que ele faz com você: Tether (alcance máximo 1000, slow de 15-60% em quem é atingido) estica pro carry chegar rápido na luta; Relocate salva a dupla inteira do gank mesmo depois da Snapfire já ter travado o combo.
- o que você faz com ele: Firesnap Cookie e Scatterblast ainda travam e atrasam, mas o problema real é que, mesmo acertando o stun, o Relocate anula o gank antes do time dela chegar pra fechar.
- itens que viram: nenhum item da Snapfire resolve isso de frente, o problema é o kit do Io, não gold; prestar atenção no cooldown do Relocate (90-70s) é a única forma de saber quando a janela de gank é segura de verdade.
- como jogar: evite gankar a dupla Io+carry sem o time todo pronto pra fechar rápido, cheque se o Relocate já foi usado recentemente antes de all-in, e prefira focar outros alvos do mapa nessa fase.
- fonte: pro_dados/snapfire.json; pro_dados/wisp.json; constants_abilities.json (wisp_tether, wisp_relocate, wisp_overcharge, snapfire_firesnap_cookie); aghs_desc (wisp)

## Contra Clinkz (clinkz)

- placar: 38 vitórias em 97 jogos de pro, 39,2% (pro_dados/snapfire.json, confrontos hero_id 56; amostra pequena, 97 jogos)
- por que importa: 2ª maior desvantagem dela com 30+ jogos.
- janelas: Clinkz farma rápido (lh10 62, pro_dados/clinkz.json) e tem Desolator e Shard prontos entre 14 e 17 min, bem na hora em que a Snapfire ainda está terminando o próprio Shard (16,9 min). Wind Walk (invisibilidade por 35-45s, cd 24-18s) deixa ele escolher quando a luta começa, não ela.
- o que ele faz com você: Wind Walk esconde ele pra escanear e abrir ataque com Searing Arrows antes dela ver; Strafe (3,5s de bônus de velocidade e alcance de ataque) vence trocas longas; o Shard dele (Burning Barrage, canalizado, atravessa unidades) bate de longe antes do Firesnap dela alcançar.
- o que você faz com ele: se ela tiver visão (ward, Sentry) antes dele entrar invisível, Firesnap Cookie ainda trava ele, mas o problema é justamente não ter essa visão na maioria das trocas.
- itens que viram: Sentry Ward e Dust (os dois já fazem parte do build padrão dela, pro_dados/snapfire.json: sentry mediana 17,9 min, dust mediana 22,7 min) são a resposta direta ao Wind Walk, não um item ofensivo novo.
- como jogar: priorize sentry cedo quando pegar esse confronto, não ande sozinha em área sem visão depois dos 15 min, e puxe a luta pra perto de ward em vez de perseguir ele no escuro.
- fonte: pro_dados/snapfire.json; pro_dados/clinkz.json; constants_abilities.json (clinkz_wind_walk, clinkz_strafe, snapfire_firesnap_cookie); aghs_desc (clinkz)

## Contra Keeper of the Light (keeper_of_the_light)

- placar: 42 vitórias em 104 jogos de pro, 40,4% (pro_dados/snapfire.json, confrontos hero_id 90; amostra pequena, 104 jogos)
- por que importa: 3ª maior desvantagem dela com 30+ jogos, e o oposto do padrão Tinker/Death Prophet: em vez de ficar parado, ele farma o mapa inteiro de longe.
- janelas: KotL já tem Boots of Travel aos 14,8 min, bem antes do blink dela (20,7 min), rotacionando lane e pressionando torres enquanto ela ainda está montando o combo. Illuminate (alcance 1550) e Radiant Bind (6s de duração, cd 14s) alcançam muito mais longe do que qualquer coisa no kit dela (Scatterblast 800, Firesnap Cookie 650).
- o que ele faz com você: Illuminate pune ela por ficar parada tentando acertar o Firesnap Cookie; Radiant Bind prende de longe antes dela chegar perto pra retaliar; Spirit Form deixa ele lançar magia de alcance absurdo e farmar lane remota, sem nunca dar o corpo pra ela caçar.
- o que você faz com ele: o pulo do Firesnap Cookie fecha distância instantânea, então se ela conseguir visão e pegar ele fora da zona segura, o combo dela ainda funciona; o problema é raramente ter essa abertura.
- itens que viram: nenhum item do lado dela resolve o alcance, é questão de visão e de pegar ele rotacionando sozinho em vez de na base; Holy Locket dele (15,3 min) só reforça a cura do time, não muda o padrão de fuga por distância.
- como jogar: não tente caçar ele parado no meio do mapa à toa, use rotação própria da equipe pra cortar ele enquanto ele rotaciona fora de posição, e evite ficar parada no alcance de 1550 do Illuminate sem motivo.
- fonte: pro_dados/snapfire.json; pro_dados/keeper_of_the_light.json; constants_abilities.json (keeper_of_the_light_illuminate, keeper_of_the_light_radiant_bind, keeper_of_the_light_spirit_form, snapfire_firesnap_cookie)
