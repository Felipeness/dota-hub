---
id: confrontos-ogre_magi
heroi: Ogre Magi
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/crystal_maiden.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/skywrath_mage.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/medusa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/bristleback.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/winter_wyvern.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/pugna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mirana.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/broodmother.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/heroes/84/matchups
- https://api.opendota.com/api/explorer
---

## Como essa lista foi montada
Ogre Magi joga como suporte no 7.40-7.41: 315 GPM e só 8 last hits aos 10 minutos, média de 2.156 partidas de pro (pro_dados/ogre_magi.json). Por isso os 14 oponentes abaixo misturam rivais diretos de suporte (mais jogos juntos em pro) com os maiores desvios de winrate (30+ jogos), incluindo carries que raramente dividem lane com ele mas cujo power spike entra em rota de colisão com o combo Fireblast, Ignite, Bloodlust e Multicast.

## Contra Shadow Fiend (nevermore)
- placar: 274V em 546 jogos de pro, 50,2% (OpenDota /heroes/84/matchups, via pro_dados/ogre_magi.json)
- por que importa: é o herói com mais jogos de pro ao lado do Ogre Magi de toda a base (546), mid clássico que não compartilha lane com ele mas é alvo prioritário de gank.
- janelas: até 10 min ele farma sozinho no mid empilhando almas com Shadowraze, sem contato direto; Power Treads sai aos 5:54 (mediana de 3.701 jogos de pro, pro_dados/nevermore.json). Dos 10 aos 14 min vem o primeiro all-in dele, com Mask of Madness aos 10:12, é a janela em que o Fireblast do Ogre (1,2s de stun, 525 de alcance, constants_abilities.json) consegue travar ele antes do combo. A partir de uns 25 min a Black King Bar dele (mediana 25:12) fecha a porta: Fireblast e Ignite não furam BKB (bkbpierce: No nos dois, constants_abilities.json).
- o que ele faz com você: Shadowraze limpa visão perto de ward a cada 9s de recarga; quando acumula muitas almas (Necromastery), Requiem of Souls estoura em área enorme e mata suporte agrupado de longe.
- o que você faz com ele: Fireblast mais Ignite travam e atrasam ele antes da BKB ficar pronta; Bloodlust no seu carry acelera o fechamento da luta enquanto ele ainda está sem sustain.
- itens que viram: Black King Bar dele (mediana 25:12) anula o combo inteiro do Ogre; depois desse horário, qualquer iniciação do Ogre que dependa de Fireblast ou Ignite perde valor contra ele.
- como jogar: force a luta antes dos 25 min, de preferência logo depois do Mask of Madness, quando ele gira o combo parado. Depois da BKB, jogue o Fireblast no suporte dele em vez de tentar travar o Shadow Fiend.
- fonte: pro_dados/ogre_magi.json; pro_dados/nevermore.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_ignite); partidas pro 7.40-7.41 (OpenDota)

## Contra Rubick (rubick)
- placar: 212V em 456 jogos de pro, 46,5% (pro_dados/ogre_magi.json)
- por que importa: 2º em jogos de pro junto do Ogre (456); jogado como suporte leve (374 GPM e 17 last hits aos 10 min em 3.990 partidas de pro, pro_dados/rubick.json), disputa a mesma trilane e pode roubar a própria magia do Ogre.
- janelas: até os 21 min nenhum dos dois tem iniciação própria forte, o alcance de Telekinesis base é só 550 a 625 e o de Fireblast é 525, quem acerta o disable primeiro ganha a troca. O Blink dele sai aos 21:36 (mediana, pro_dados/rubick.json) e passa a somar 1.200 de alcance total de iniciação, acima do que o Ogre alcança sem Blink próprio. Depois do Aghanim's Scepter dele (mediana 27:24) o Spell Steal passa a roubar 2 magias e upar a versão roubada.
- o que ele faz com você: Spell Steal copia a última magia que o Ogre lançou; se o Ogre abrir com Fireblast, Rubick fica com um stun de 1,2s pronto pra devolver.
- o que você faz com ele: evite abrir combo com Fireblast perto de um Rubick com Spell Steal disponível (recarga 16/10/4s conforme nível, constants_abilities.json), jogue Ignite ou Bloodlust primeiro pra sujar o roubo dele.
- itens que viram: Aghanim's Scepter do Rubick (mediana 27:24) upa a magia roubada pra versão de Scepter dela, além de aumentar o alcance do Spell Steal (aghs_desc).
- como jogar: baite o Spell Steal com Ignite (dano em área, pouco valor roubado) antes de comprometer o Fireblast de verdade. Depois dos 21 min, respeite o alcance total de iniciação dele com Blink mais Telekinesis.
- fonte: pro_dados/ogre_magi.json; pro_dados/rubick.json; constants_abilities.json (rubick_telekinesis, rubick_spell_steal); constants_hero_abilities.json; https://api.opendota.com/api/constants/aghs_desc

## Contra Disruptor (disruptor)
- placar: 217V em 420 jogos de pro, 51,7% (pro_dados/ogre_magi.json)
- por que importa: 3º em jogos de pro junto do Ogre (420), mesma função de suporte (279 GPM e só 4 last hits aos 10 min em 2.521 partidas de pro, pro_dados/disruptor.json), concorrência direta por ward e por quem trava quem primeiro na troca.
- janelas: nos primeiros 10 min os dois brigam por visão e mana (Arcane Boots do Disruptor aos 11:24, mediana pro_dados/disruptor.json). O Blink dele sai aos 24:00 (mediana) e muda o jogo: até lá, a Static Storm (recarga 100/85/70s) depende de posicionamento manual; depois, ele entra na luta e calar o Ogre fica muito mais fácil.
- o que ele faz com você: Static Storm cala toda a área por até 6s e não fura BKB nem é dispelável (dispellable: No, constants_abilities.json), desliga o kit inteiro do Ogre de uma vez; Kinetic Field forma uma parede redonda que tranca o Ogre dentro antes dele conseguir lançar algo.
- o que você faz com ele: Fireblast trava ele rápido o bastante pra interromper o Glimpse (que devolve ele pra posição de 4s atrás) ou a formação do Kinetic Field; Ignite ajuda a abater ele antes da Static Storm ficar pronta de novo.
- itens que viram: Aghanim's Scepter do Disruptor (mediana 34,9 min) muta itens ativos, perigoso contra Blink Dagger ou Force Staff do Ogre numa troca tardia.
- como jogar: antes dos 24 min, pressione ele fora do raio de 350 de formação da Kinetic Field; depois do Blink dele, jogue em grupo pra não dar o alvo isolado que a Static Storm precisa.
- fonte: pro_dados/ogre_magi.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm, disruptor_kinetic_field); https://api.opendota.com/api/constants/aghs_desc

## Contra Crystal Maiden (crystal_maiden)
- placar: 183V em 377 jogos de pro, 48,5% (pro_dados/ogre_magi.json)
- por que importa: 4º em jogos de pro junto do Ogre (377), mesma função de suporte (297 GPM e 6 last hits aos 10 min em 1.341 partidas de pro, pro_dados/crystal_maiden.json), vida mais baixa do jogo, então qualquer troca de disable é quase sempre fatal pra ela.
- janelas: até os 17 min a Freezing Field dela (ultimate, canalizado) é parada: qualquer stun interrompe o canal, e o Fireblast do Ogre resolve isso sozinho. O Aghanim's Shard dela sai aos 17:42 (mediana, pro_dados/crystal_maiden.json) e dá outra ferramenta de duelo: ela desliza e cria um clone (Crystal Clone) que desarma projétil em voo e, ao quebrar, aplica Frostbite em área de 450 (aghs_desc), não é mais só uma ult parada no lugar.
- o que ele faz com você: Frostbite prende o alvo e impede ataque por 1,5 a 3s dependendo do nível, o suficiente pra matar o Ogre sozinho se ele estiver sem Bloodlust de saída.
- o que você faz com ele: antes dos 17 min, qualquer Fireblast nela durante a ult cancela a Freezing Field de graça; depois do Shard dela, cuidado com o clone, ele ainda desarma um Fireblast em voo e devolve Frostbite se estourar perto do Ogre.
- itens que viram: Aghanim's Shard da Crystal Maiden (mediana 17:42) muda o confronto, dá a ela um escape com Frostbite de brinde em vez de só a ult parada (aghs_desc confirma: Crystal Clone, não upgrade da própria Freezing Field).
- como jogar: antes dos 17 min, puna a Freezing Field com Fireblast assim que ela canalizar. Depois do Shard dela, cuidado pra não travar o clone em vez da Crystal Maiden de verdade.
- fonte: pro_dados/ogre_magi.json; pro_dados/crystal_maiden.json; constants_abilities.json (crystal_maiden_freezing_field, crystal_maiden_frostbite); https://api.opendota.com/api/constants/aghs_desc

## Contra Lion (lion)
- placar: 182V em 352 jogos de pro, 51,7% (pro_dados/ogre_magi.json)
- por que importa: 5º em jogos de pro junto do Ogre (352), mesma função pos 5, e os dois são heróis de all-in em alvo único, quem trava primeiro costuma fechar a troca.
- janelas: o Blink Dagger dele sai aos 18:12 (mediana, pro_dados/lion.json), bem cedo, ele costuma ter mobilidade pra iniciar antes do Ogre nessa janela. Depois dos 25 min, o Aghanim's Shard dele (mediana 25:48, pro_dados/lion.json) deixa a Mana Drain afetar mais 2 inimigos e dá imunidade a debuff com 60% de resistência mágica enquanto ele canaliza (aghs_desc), enquanto o Shard do Ogre (mediana 26:06, pro_dados/ogre_magi.json) dá só um escudo defensivo.
- o que ele faz com você: Voodoo (Hex) desliga o Ogre inteiro, sem atacar nem lançar magia, cortando até a chance de Multicast proc enquanto durar; Finger of Death tira uma fatia enorme de vida de alvo único, é dano direto instantâneo, não existe debuff pra dispelar.
- o que você faz com ele: Fireblast trava ele antes do blink dele sair, Ignite atrasa a fuga dele se o combo falhar na primeira tentativa.
- itens que viram: Blink Dagger de Lion (mediana 18:12) é o item que decide quem inicia primeiro nesse confronto; se o Ogre não tiver o próprio Blink ainda, está sempre reagindo.
- como jogar: antes dos 18 min, jogue perto de visão aliada, é quando ele ainda não tem blink pra te pegar isolado. Depois disso, trate a presença dele como gank certo e segure a posição perto do time.
- fonte: pro_dados/ogre_magi.json; pro_dados/lion.json; constants_abilities.json (lion_voodoo, lion_finger_of_death); https://api.opendota.com/api/constants/aghs_desc; partidas pro 7.40-7.41 (OpenDota)

## Contra Snapfire (snapfire)
- placar: 157V em 349 jogos de pro, 45,0% (pro_dados/ogre_magi.json)
- por que importa: 6º em jogos de pro junto do Ogre (349), mesma função mas com bem mais espaço de farm que os outros suportes do lote (413 GPM e 21 last hits aos 10 min em 2.456 partidas de pro, pro_dados/snapfire.json), e é um dos confrontos mais desfavoráveis do lote (45,0%).
- janelas: o Aghanim's Shard dela sai aos 16:54 (mediana, pro_dados/snapfire.json), bem antes do Shard do Ogre (mediana 26:06, pro_dados/ogre_magi.json). Nessa janela de 17 a 21 min ela já upou o Firesnap Cookie (cura mais Mortimer Kiss extra) enquanto o Ogre ainda está no kit base.
- o que ele faz com você: Firesnap Cookie salta e atordoa quem aterrissa, abrindo a troca sem que o Ogre consiga reagir a tempo; Scatterblast bate em cone e já sai com bônus de dano e slow quanto mais perto ela estiver.
- o que você faz com ele: Fireblast trava ela antes do cookie saltar; Ignite ajuda a segurar ela perto o bastante pro resto do time limpar, principalmente antes dos 20:42 (mediana do Blink dela, pro_dados/snapfire.json), quando ainda não tem como se reposicionar rápido.
- itens que viram: Aghanim's Shard dela (mediana 16:54) é o item que abre a vantagem de poder nessa janela, chega bem antes do equivalente do Ogre.
- como jogar: de 10 a 17 min, jogue com cautela, ela está na frente na corrida de item; depois que o Ogre pegar o próprio Shard ou o Blink, a troca equilibra.
- fonte: pro_dados/ogre_magi.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_firesnap_cookie, snapfire_scatterblast); https://api.opendota.com/api/constants/aghs_desc

## Contra Jakiro (jakiro)
- placar: 148V em 292 jogos de pro, 50,7% (pro_dados/ogre_magi.json)
- por que importa: 8º em jogos de pro junto do Ogre (292, o Pudge fica entre Snapfire e Jakiro nesse ranking mas não entra no recorte), mesma função de suporte (315 GPM e 8 last hits aos 10 min em 2.913 partidas de pro, pro_dados/jakiro.json), e os dois são suportes durões de dano em área, quase sem vantagem de um lado.
- janelas: o jogo é parelho na rota de item, Arcane Boots dele sai aos 11:42 (mediana, pro_dados/jakiro.json), quase junto do Ogre (11:12, pro_dados/ogre_magi.json). A diferença aparece depois dos 20 min: o Aghanim's Scepter dele upa a Macropyre pra dano puro e cria paredes de gelo, uma ult de área muito mais forte que qualquer coisa que o Ogre tenha em alcance.
- o que ele faz com você: Ice Path estuna em área ao longo de um caminho, pode pegar o Ogre junto do time dele numa única magia; Macropyre entrega dano contínuo numa faixa longa, perigoso se o Ogre ficar parado controlando.
- o que você faz com ele: Fireblast mais Ignite abatem ele rápido, já que ele não tem fuga própria; Bloodlust acelera o seu carry pra fechar antes da Macropyre render o dano total dela.
- itens que viram: Aghanim's Scepter do Jakiro upa a ultimate pra dano puro mais paredes de gelo, item que vira o teamfight mais do que qualquer item do Ogre nesse confronto específico.
- como jogar: evite ficar parado perto de cegrebo em área depois dos 20 min, é quando o scepter dele costuma sair. Na troca direta de poke, Fireblast geralmente ganha por ser instantâneo contra o Dual Breath dele, que é mais lento de acertar.
- fonte: pro_dados/ogre_magi.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_macropyre); https://api.opendota.com/api/constants/aghs_desc

## Contra Skywrath Mage (skywrath_mage)
- placar: 108V em 214 jogos de pro, 50,5% (pro_dados/ogre_magi.json)
- por que importa: 214 jogos de pro registrados junto do Ogre, mesma função de suporte de dano mágico (332 GPM e 7 last hits aos 10 min em 1.877 partidas de pro, pro_dados/skywrath_mage.json), e é um confronto de quem estoura o combo primeiro, já que os dois são frágeis.
- janelas: até os 12 min ele poka de longe com Arcane Bolt (recarga só 5/4/3/2s) sem entrar no alcance do Fireblast; o Kaya dele sai aos 17:30 (mediana, pro_dados/skywrath_mage.json) e aumenta o dano mágico de tudo que ele lança. O Aghanim's Shard dele (mediana 22,3 min) triplica o Arcane Bolt, um power spike isolado que chega perto do horário do Shard do Ogre.
- o que ele faz com você: Ancient Seal sela e silencia, cortando o Fireblast do Ogre antes de ele conseguir lançar; Mystic Flare distribui dano massivo entre 170 de raio ao longo de 2s, mas é cast instantâneo (sem canalização nas constantes do patch), então ele segue livre pra agir enquanto o dano resolve.
- o que você faz com ele: Fireblast trava ele antes do Ancient Seal sair, já que ele é o herói com menos vida do jogo nessa faixa; nenhuma magia dele fura Black King Bar (bkbpierce: No em Arcane Bolt, Concussive Shot, Ancient Seal e Mystic Flare, constants_abilities.json), então o combo inteiro dele é parado por um BKB aliado.
- itens que viram: Aghanim's Shard do Skywrath (mediana 22,3 min) triplica o Arcane Bolt e muda o trade de poke de longe.
- como jogar: force a troca antes do silence dele sair, o Fireblast ganha a corrida de quem trava primeiro; se o seu time tiver BKB em outro herói, use pra anular o combo mágico dele em cheio.
- fonte: pro_dados/ogre_magi.json; pro_dados/skywrath_mage.json; constants_abilities.json (skywrath_mage_ancient_seal, skywrath_mage_mystic_flare); https://api.opendota.com/api/constants/aghs_desc

## Contra Medusa (medusa)
- placar: maior vantagem do lote em 30+ jogos, 63,5% em 104 jogos de pro (pro_dados/ogre_magi.json)
- por que importa: carry pos 1 que quase nunca divide lane com um pos 5, mas o combo mágico do Ogre ataca diretamente o que sustenta ela viva: a mana.
- janelas: até os 11 min ela só farma, Power Treads aos 6:30 e Blade of Alacrity aos 10:06 (medianas, pro_dados/medusa.json). O Manta dela sai aos 15:00, o Butterfly aos 22:12, é a janela de 15 a 22 min em que ela começa a jogar fights de verdade. Antes disso, qualquer gank certeiro do Ogre fecha ela fácil.
- o que ele faz com você: Mystic Snake pula entre alvos causando dano crescente, pode acertar o Ogre de surpresa enquanto ele está posicionando o combo.
- o que você faz com ele: Mana Shield absorve 98% do dano trocando por mana dela (constants_abilities.json), então cada cast de Fireblast, Ignite e proc de Multicast gasta a mana que ela precisa pra ligar Stone Gaze (custo 250) e pra manter o shield ativo; drenada a mana, ela fica exposta igual qualquer outro herói. E o stun do Fireblast é "Strong Dispels Only" (constants_abilities.json), ou seja, Manta Style NÃO remove esse stun, ela não escapa dele só ativando a ilusão.
- itens que viram: Manta Style dela (mediana 15:00) purga a maioria dos debuffs básicos, mas não o stun do Fireblast; Butterfly (mediana 22:12) dá evasão alta contra o time físico, não ajuda contra o combo mágico do Ogre.
- como jogar: gankar ela antes dos 15 min enquanto ela só tem Treads e Blade; depois disso, mire o combo nela em cheio, o custo de mana da Stone Gaze some rápido e ela some do teamfight sem o shield.
- fonte: pro_dados/ogre_magi.json; pro_dados/medusa.json; constants_abilities.json (medusa_mana_shield, medusa_stone_gaze, ogre_magi_fireblast)

## Contra Bristleback (bristleback)
- placar: 2ª maior vantagem do lote, 62,7% em 118 jogos de pro (pro_dados/ogre_magi.json)
- por que importa: offlaner tanque de força (565 GPM e 63 last hits aos 10 min em 1.380 partidas de pro, pro_dados/bristleback.json) cuja passiva central depende de virar as costas, exatamente o que o combo do Ogre impede.
- janelas: Power Treads dele saem aos 8:42 e o Aghanim's Shard aos 18:24 (medianas, pro_dados/bristleback.json), dando o primeiro power spike real de luta. O Lotus Orb dele aparece por volta dos 17:42, é a resposta dele contra disable de alvo único.
- o que ele faz com você: a passiva Bristleback reduz até 40% do dano recebido pelas costas e até 20% pelo lado (constants_abilities.json), mas só funciona se ele conseguir girar o corpo; Quill Spray em área ainda machuca o Ogre se ele ficar perto.
- o que você faz com ele: Fireblast e Ignite acertam ele de frente, onde a redução de dano não se aplica; Ignite ainda tira 25% da velocidade dele, dificultando virar as costas pra ativar a passiva.
- itens que viram: Lotus Orb dele (mediana 17:42) reflete o Fireblast de volta no Ogre se ativado a tempo, é o único jeito dele neutralizar o stun em vez de só tankar.
- como jogar: force ele a lutar de frente, nunca persiga ele de costas; se ele tiver Lotus Orb ativo, jogue Ignite primeiro pra gastar o reflect antes do Fireblast de verdade.
- fonte: pro_dados/ogre_magi.json; pro_dados/bristleback.json; constants_abilities.json (bristleback_bristleback, bristleback_prickly)

## Contra Winter Wyvern (winter_wyvern)
- placar: 3ª maior vantagem do lote, 59,6% em 47 jogos de pro (pro_dados/ogre_magi.json)
- por que importa: mesma função de suporte (307 GPM e 7 last hits aos 10 min em 950 partidas de pro, pro_dados/winter_wyvern.json), mas o kit dela depende de canalização e posicionamento, mais lento que o all-in instantâneo do Ogre.
- janelas: o Blink dela sai aos 23:00 (mediana, pro_dados/winter_wyvern.json), antes do Shard do Ogre (mediana 26:06, pro_dados/ogre_magi.json) mas bem depois do kit básico dele estar pronto. Antes dos 23 min, ela depende só de Splinter Blast e Arctic Burn pra sobreviver em troca, o que perde fácil pro Fireblast travando o alvo dela primeiro.
- o que ele faz com você: Winter's Curse congela um alvo e força quem estiver perto a atacar ele, inclusive atravessando BKB (bkbpierce: Yes, constants_abilities.json), perigoso se o Ogre for o alvo amaldiçoado perto do time inimigo.
- o que você faz com ele: Fireblast trava ela antes dela conseguir lançar Cold Embrace de resgate num aliado; Ignite corta a mobilidade da Arctic Burn dela em troca direta.
- itens que viram: Blink Dagger dela (mediana 23:00) chega depois do pico de poder do Ogre, dá a ele vantagem de iniciação na maior parte do early e mid game.
- como jogar: pressione antes dos 23 min, quando ela ainda não tem blink pra se posicionar; cuidado ao ficar perto de aliados isolados depois disso, é quando a Winter's Curse vira ameaça de verdade.
- fonte: pro_dados/ogre_magi.json; pro_dados/winter_wyvern.json; constants_abilities.json (winter_wyvern_winters_curse)

## Contra Pugna (pugna)
- placar: maior desvantagem do lote, 31,5% em 73 jogos de pro (pro_dados/ogre_magi.json)
- por que importa: mesma função de suporte (337 GPM e 13 last hits aos 10 min em 427 partidas de pro, pro_dados/pugna.json), e é o pior confronto medido do Ogre Magi no lote inteiro.
- janelas: os dois saem de lane parecidos, Arcane Boots dele aos 11:06 (mediana, pro_dados/pugna.json) contra 11:12 do Ogre. O problema aparece em qualquer troca de magia: ele planta Nether Ward (recarga 40s) perto de onde o time dele costuma lutar, e cada cast do Ogre vira dano extra de graça pro Pugna.
- o que ele faz com você: Nether Ward pune cada magia lançada perto dele com dano base mais uma fração do custo de mana gasto (constants_abilities.json), e o Ogre lança até 4 coisas por combo contando Multicast, cada uma alimenta o ward; Decrepify trava o alvo, impede ataque físico e ainda amplia o dano mágico que ele recebe em 20 a 50%.
- o que você faz com ele: o Fireblast ainda estuna e abate ele rápido se vier sem ward por perto; Bloodlust ajuda o seu carry a limpar ele achado isolado, já que ele não tem fuga própria rápida.
- itens que viram: Nether Ward dele é o item que mais pune o estilo de jogo do Ogre nesse confronto, cada Multicast vira dano extra; destruir o ward (ele tem vida baixa e fica visível) muda a troca por completo.
- como jogar: ache e destrua o Nether Ward antes de comprometer o combo completo; se não der, troque fora do raio dele, perto de outro ângulo, em vez de forçar o fight onde ele já colocou o ward.
- fonte: pro_dados/ogre_magi.json; pro_dados/pugna.json; constants_abilities.json (pugna_nether_ward, pugna_decrepify)

## Contra Mirana (mirana)
- placar: 2ª maior desvantagem do lote, 33,3% em 36 jogos de pro (pro_dados/ogre_magi.json)
- por que importa: suporte de pick-off com bastante espaço pra farmar (375 GPM e 16 last hits aos 10 min em 800 partidas de pro, pro_dados/mirana.json) cujo Arrow de longo alcance inicia antes do Ogre conseguir reagir, e é o 2º pior confronto medido do lote.
- janelas: Urn of Shadows dela sai aos 9:24 e o Magic Wand aos 7:36 (medianas, pro_dados/mirana.json), ela já tem sustain de lane cedo. A Sacred Arrow pode ser lançada da fog em qualquer momento do jogo, o Leap logo depois fecha a distância pra confirmar a kill.
- o que ele faz com você: Sacred Arrow atravessa invisibilidade e estuna de 0,01 a 2,6s dependendo da distância percorrida (constants_abilities.json), num mapa aberto ela pode acertar o Ogre de longe antes dele perceber; Leap dá velocidade extra pra fechar o 1x1 logo depois.
- o que você faz com ele: se o Fireblast acertar primeiro, o combo do Ogre fecha rápido, ela não tem muita vida pra aguentar Fireblast mais Ignite; o problema é alcançar ela antes da arrow sair.
- itens que viram: Aghanim's Scepter dela (mediana 31,8 min) faz a Sacred Arrow soltar uma Starstorm pelo caminho, aumenta o alcance de dano da iniciação dela ainda mais.
- como jogar: evite caminhar em linha reta por grama alta sem visão, é onde a arrow dela mais acerta; ao ver o tiro vindo, use o próprio Fireblast nela assim que ela aparecer pra puxar antes do Leap.
- fonte: pro_dados/ogre_magi.json; pro_dados/mirana.json; constants_abilities.json (mirana_arrow, mirana_leap); https://api.opendota.com/api/constants/aghs_desc

## Contra Broodmother (broodmother)
- placar: 3ª maior desvantagem do lote, 35,3% em 34 jogos de pro (pro_dados/ogre_magi.json)
- por que importa: carry pos 1 puro (642 GPM e 60 last hits aos 10 min em 328 partidas de pro, pro_dados/broodmother.json) que nunca divide lane com um pos 5, mas é o exemplo clássico de matchup sem lane em comum que decide jogo: ela isola e mata suportes que andam sozinhos pra ward.
- janelas: até os 13 min ela monta a rede e farma rápido, Power Treads aos 6:36 e Soul Ring aos 7:36 (medianas, pro_dados/broodmother.json). O Manta dela sai aos 17:36, dando evasão e permitindo dividir presença em duas rotas da rede ao mesmo tempo. A Black King Bar dela (mediana 24:06) fecha a janela de travar ela com magia.
- o que ele faz com você: dentro da própria rede (Spin Web) ela ganha velocidade e giro extra e o Ogre, sem blink nem fuga própria, costuma morrer antes do time chegar se for pego sozinho plantando ward perto dela.
- o que você faz com ele: Fireblast trava ela e Ignite corta a velocidade de fuga dela pra rede, suficiente pra segurar até o time limpar, já que ela é frágil fora da própria teia; Bloodlust no seu carry ajuda a caçar ela no mapa.
- itens que viram: Black King Bar dela (mediana 24:06) bloqueia Fireblast e Ignite por completo depois desse horário; antes disso, qualquer stun do Ogre nela costuma ser kill garantida se o time chegar a tempo.
- como jogar: nunca plante ward sozinho perto da rede dela sem visão de apoio; se achar ela isolada antes dos 24 min, o combo completo do Ogre fecha a kill sem precisar de ajuda.
- fonte: pro_dados/ogre_magi.json; pro_dados/broodmother.json; constants_abilities.json (broodmother_spin_web)
