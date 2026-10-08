---
id: confrontos-centaur
heroi: Centaur Warrunner
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/centaur.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/windrunner.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/slardar.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/axe.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tidehunter.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/medusa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/faceless_void.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/terrorblade.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/treant.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/bounty_hunter.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shredder.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/centaur.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/faceless_void.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/medusa.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/terrorblade.md
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- https://api.opendota.com/api/constants/aghs_desc
- https://liquipedia.net/dota2/Centaur_Warrunner
---

## Como escolhi os confrontos

Centaur é pos 3 quase exclusivo no 7.41 (ficha verificada do site). A lista abaixo mistura quatro critérios: os 6 heróis que mais jogaram contra ele em pro (Jakiro, Mars, Ember Spirit, Shadow Fiend, Tusk, Windranger), os outros rivais de offlane que mais aparecem em pro além do Mars (Slardar, Axe, Tidehunter), os maiores contrastes de taxa de vitória com amostra de 30+ jogos pra cada lado (Medusa, Faceless Void e Terrorblade favorecem o Centaur; Treant, Bounty Hunter e Timbersaw favorecem o oponente) e os carries mais jogados em pro mesmo sem lane em comum, que é o próprio critério das três vantagens: Medusa, Void e Terrorblade não cruzam lane com Centaur, mas o choque de power spike entre um iniciador de offlane e um hard carry late é exatamente o tipo de confronto que decide o jogo mesmo sem brigar de línea.

## Contra Jakiro (jakiro)

- placar: Centaur venceu 173 de 337 partidas pro, 51,3% (OpenDota matchups via pro_dados/centaur.json).
- por que importa: é o oponente que mais jogou contra Centaur no banco pro, suporte clássico do time adversário na trilane, combo de stun que mais ameaça o all-in do offlane.
- janelas: até os 5 min, Centaur já tem Helm of Iron Will (mediana 4:48, 1522 jogos) sustentando a troca de dano, enquanto Jakiro ainda está comprando Boots (5:36). Entre 10 e 19 min, Jakiro monta o combo de controle: Arcane Boots aos 11:42 pra spammar Dual Breath e Ice Path, enquanto Centaur só fecha o Blink aos 19:36 (p25 16:30). Nessa janela quem inicia a troca é o Jakiro, com Dual Breath (slow 25 a 40%, queima 20 a 80 por segundo) seguido de Ice Path (stun até 2s). Depois dos 20, Centaur já está tanque (Ring of Tarrasque 17:30, Vanguard 8:30) e Jakiro só ameaça em grupo com Macropyre (10s de queima em linha, nível 6+), que exige planejamento de posição, não reação a engajamento solo.
- o que ele faz com você: Dual Breath mais Ice Path tira quase metade da vida de um Centaur nível 6 a 9 se acertar os dois, e o slow de movimento (até 40%) atrapalha a aproximação antes do Blink estar pronto. Macropyre em grupo pune Stampede, porque o time inteiro atravessando uma linha de fogo de 10s perde mais vida do que ganha de velocidade.
- o que você faz com ele: Jakiro tem HP baixo e zero mobilidade real (sem blink, sem dash). Hoof Stomp mais Double Edge mata ele fora da zona de alcance (850) do Dual Breath se Centaur fechar a distância primeiro, e como as duas habilidades do Centaur são dano mágico, Glimmer Cape (22:48 na build dele) ajuda contra feitiço mas não contra o auto-ataque que vem depois.
- itens que viram: Blink Dagger é o que decide quem ataca primeiro; se Centaur blinka antes do combo de Jakiro, a troca é dele. Pipe of Insight (18:06 na build do Centaur) neutraliza o Macropyre em luta de grupo porque a aura de 8% de resistência mágica reduz o DPS da linha de fogo pro time inteiro.
- como jogar: force a luta antes dos 10 min, quando Jakiro ainda não tem Arcane Boots pra spammar o combo. Depois dos 20, não entre reto no Macropyre: rodeie e force Jakiro a recolocar a linha de fogo. Leve Pipe se o time dele tiver outro nuke em área.
- fonte: pro_dados/centaur.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_dual_breath, jakiro_ice_path, jakiro_macropyre, centaur_hoof_stomp).

## Contra Mars (mars)

- placar: Centaur venceu 179 de 330 partidas pro, 54,2%.
- por que importa: é o outro offlane de iniciação com stun garantido que mais aparece em pro contra Centaur, e também o segundo oponente com mais jogos no banco.
- janelas: os dois correm pro Blink: Mars fecha aos 15:12 (p25 mais cedo que o Centaur), Centaur só aos 19:36. Nessa janela de 4 minutos, Mars chega primeiro com a ferramenta de iniciar e ainda tem Spear (900 a 1200 de alcance crescente, stun de até 2,2s contra parede) pra travar Centaur à distância antes dele sequer blinkar. Depois dos 20, os dois ficam parelhos em tankiness: Centaur com Ring of Tarrasque mais Vanguard, Mars com Black King Bar aos 26:30 e Aghanim's Shard aos 21:30 (1743 jogos, quase item core).
- o que ele faz com você: Arena of Blood cria uma parede de 550 de raio que bloqueia a rota de fuga ou de iniciação do Centaur, e as lanças da arena empurram pra fora se ele ficar perto da borda errada. Spear de alcance 900+ acerta Centaur antes dele chegar no range de Hoof Stomp (325), e com o Shard (1743 compras, quase item padrão) a lança pode empalar dois heróis ao mesmo tempo.
- o que você faz com ele: Hoof Stomp é instantâneo e sem projétil, então não existe spear pra desviar, ao contrário de outros confrontos. Double Edge (dano mágico, 120 a 300 mais 60 a 150% da força) ignora a redução de dano físico do Bulwark do Mars (40 a 70% de redução, só contra ataque físico).
- itens que viram: quem blinka primeiro geralmente vence a troca, porque os dois dependem do blink pra entrar em stun garantido. Black King Bar ajuda o Mars a ignorar o Hoof Stomp (bloqueável por imunidade mágica), mas não ajuda contra o Retaliate do Centaur, que atravessa BKB.
- como jogar: não force a troca sozinho entre os 10 e os 19 min, é a janela em que Mars tem blink e você não. Depois do seu Blink, puxe a luta pra fora da Arena of Blood dele, porque lutar dentro da arena dá vantagem pro Mars.
- fonte: pro_dados/centaur.json; pro_dados/mars.json; constants_abilities.json (mars_arena_of_blood, mars_spear, mars_bulwark, centaur_return); https://api.opendota.com/api/constants/aghs_desc.

## Contra Ember Spirit (ember_spirit)

- placar: Centaur venceu 141 de 292 partidas pro, 48,3%.
- por que importa: terceiro oponente com mais jogos no banco, mid roamer que costuma descer pra ganka o offlane e decidir o ritmo da lane do Centaur antes dos 10 min.
- janelas: Ember já chega na lane do Centaur com Bottle (1:30) e Magic Wand (4:12) pronto pra trade. Entre 9 e 13 min ele monta Chainmail mais Blades of Attack (9:36 a 10:00), caminho pro Phase Boots (9:06) que acelera a gank. Centaur só fecha Blink aos 19:36; antes disso, quem inicia a troca é o Ember descendo em cima. Depois dos 20, Ember vira farmer com Diadem (10:36) e Spirit Vessel (12:48) crescendo pro Aghanim's Shard (25:18, 1882 jogos, item quase padrão) e Scepter (31:36).
- o que ele faz com você: Sleight of Fist dá um dash que ataca tudo num raio (250 a 550) e volta pro ponto de origem, difícil de punir porque Ember já não está mais lá quando o dano acontece; Searing Chains prende em área (raio 400) por até 2,75s, interrompendo a janela de blink do Centaur antes da luta começar de verdade.
- o que você faz com ele: Ember tem pouca vida própria antes do Vessel/Diadem, e Hoof Stomp mais Double Edge mata ele rápido se pegar fora da zona de Fire Remnant (ele só escapa se já tiver um Remnant plantado por perto, 1400 de alcance pra plantar).
- itens que viram: Ring of Tarrasque mais Vanguard (8:30 a 17:30 na build do Centaur) dão vida o bastante pra aguentar o combo de Sleight of Fist sem morrer na gank de nível 6. Do lado do Ember, Urn of Shadows (7:18) é sustain de lane, não ferramenta de duelo contra o tankiness que o Centaur já tem nesse ponto.
- como jogar: espere o Ember gastar Fire Remnant antes de levar o all-in dele, porque sem Remnant plantado ele não tem saída rápida do combate corpo a corpo.
- fonte: pro_dados/centaur.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_sleight_of_fist, ember_spirit_fire_remnant, ember_spirit_searing_chains).

## Contra Shadow Fiend (nevermore)

- placar: Centaur venceu 128 de 284 partidas pro, 45,1%, a pior taxa entre os 6 oponentes mais comuns.
- por que importa: mid clássico que farma rápido (78 LH aos 10 min, o maior do banco inteiro de oponentes dessa lista) e cujo burst de Shadowraze ameaça Centaur antes dele ficar tanque.
- janelas: até os 10 min, Shadow Fiend já está na frente de farm de qualquer herói dessa lista (lh10 de 78 contra 54 do Centaur). Entre 10 e 14 min ele monta Mask of Madness (10:12) e Dragon Lance (14:00), ritmo de pressão alta cedo. Centaur só fica tanque de verdade perto dos 17 a 19 min (Ring of Tarrasque, Blink). Depois dos 25, Shadow Fiend chega no Black King Bar (25:12) e passa a conseguir entrar em luta de grupo sem medo do Hoof Stomp.
- o que ele faz com você: cada Shadowraze (85 a 280 de dano, mais bônus por Necromastery) que acerta Centaur cedo tira uma fatia grande de uma vida que ainda não escalou; Requiem of Souls em grupo (até 20 linhas, medo de até 2,15s) desorganiza qualquer iniciação de Stampede porque o time foge amedrontado em vez de seguir o Centaur.
- o que você faz com ele: Shadow Fiend não tem disjoint nem blink, só range pra manter distância. Se Centaur fecha o gap com Blink, Hoof Stomp mais Double Edge tira boa parte da vida dele antes de qualquer Shadowraze compensar, porque SF não tem survivability própria além de itens.
- itens que viram: Black King Bar dos dois lados decide a troca: quem tiver BKB ativo ignora o nuke/stun mágico do outro (Hoof Stomp não atravessa BKB, Shadowraze também não), sobrando só o Retaliate físico do Centaur, que sempre atravessa.
- como jogar: não dê flanco livre pro Shadow Fiend antes dos 15 min, é quando ele mais machuca. Depois que seu time tiver itens de detecção de fear/BKB, force luta em cima do Requiem gasto.
- fonte: pro_dados/centaur.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, centaur_hoof_stomp).

## Contra Tusk (tusk)

- placar: Centaur venceu 144 de 282 partidas pro, 51,1%.
- por que importa: outro iniciador que também depende de combo garantido (Ice Shards mais Snowball), geralmente do lado 4/5 cruzando o mapa pra ganks junto do offlane.
- janelas: os dois correm pro Blink quase junto: Tusk aos 19:00, Centaur aos 19:36. Antes disso, Tusk já tem Tranquil Boots (8:24) pra rotacionar rápido pelo mapa. Depois dos 20, os dois têm acesso a engajamento garantido em simultâneo, então a luta normalmente é decidida por quem tem mais aliados perto pra aproveitar o combo.
- o que ele faz com você: Ice Shards (barreira de 4 a 7s que bloqueia path) mais Snowball (stun que cresce com cada aliado dentro da bola, até 1,2s mais bônus por aliado) travam Centaur antes dele soltar Hoof Stomp, e como o combo do Tusk escala com o número de aliados, ele fica mais perigoso em grupo do que o Centaur sozinho.
- o que você faz com ele: Tusk tem pouca vida própria (ele é suporte de combo, não tanque). Double Edge mais os ataques normais do Centaur matam ele rápido fora do combo dele, e Retaliate (atravessa BKB) pune cada vez que Tusk tenta trocar auto-ataque de perto.
- itens que viram: Blink dos dois lados é o que decide quem trava quem primeiro; não existe item que anule Ice Shards além de sair da área antes da barreira fechar.
- como jogar: não ande sozinho perto de árvore ou parede depois dos 15 min, onde o combo Shards mais Snowball do Tusk rende mais. Prefira iniciar você quando estiver em vantagem numérica, porque aí o combo dele vira desperdício.
- fonte: pro_dados/centaur.json; pro_dados/tusk.json; constants_abilities.json (tusk_ice_shards, tusk_snowball, centaur_return).

## Contra Windranger (windrunner)

- placar: Centaur venceu 147 de 270 partidas pro, 54,4%.
- por que importa: mid/roam que também depende de pegar o inimigo parado, e Shackleshot é a única ferramenta dessa lista que consegue travar o Blink do Centaur antes mesmo dele chegar perto.
- janelas: Windranger monta Maelstrom aos 13:24 e evolui pro Mjollnir aos 18:18, enquanto Centaur só fecha o Blink aos 19:36. Nessa janela de farm dela, o maior perigo é o Powershot de longo alcance (3000 de range, até 470 de dano) acertando Centaur de fora da luta. Depois dos 20, Black King Bar dela (24:24) neutraliza o Hoof Stomp em troca direta.
- o que ele faz com você: Shackleshot precisa de uma unidade ou árvore atrás do alvo pra prender por até 3,25s; sem isso, o stun cai pra 0,6s só. Se ela conseguir o shackle completo bem no momento que Centaur tenta blinkar pra cima do time dela, a iniciação morre ali.
- o que você faz com ele: Windranger tem pouca vida e nenhuma forma de travar o Retaliate físico, que atravessa o Windrun dela (evasão de 100%, mas Retaliate é proc passivo em quem ataca o Centaur, não um ataque que ela possa evadir).
- itens que viram: Black King Bar do lado dela anula o Hoof Stomp; do lado do Centaur, Lotus Orb (24:00 na build) devolve o Shackleshot se ela mirar nele em vez de num aliado.
- como jogar: force a troca antes dela ter o combo Maelstrom mais Mjollnir pronto (antes dos 18 min). Depois disso, espere o cooldown do Shackleshot antes de iniciar.
- fonte: pro_dados/centaur.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_windrun, centaur_return).

## Contra Slardar (slardar)

- placar: Centaur venceu 109 de 247 partidas pro, 44,1%, a pior taxa entre os rivais diretos de offlane.
- por que importa: outro pos 3/2 de iniciação, e dos rivais de mesma função ele é o que mais castiga a maior fraqueza do Centaur, a armadura, que é justamente onde boa parte do tankiness do herói mora.
- janelas: Slardar monta Blink cedo (13:18) e o Aghanim's Shard logo depois (17:12, 1852 jogos, praticamente item core), enquanto o Blink do Centaur só sai aos 19:36. Entre 13 e 20 min, Slardar tem iniciação garantida e Centaur ainda não. Depois dos 20, os dois têm Black King Bar (Slardar aos 25:06) e a luta vira quem acerta o stun primeiro.
- o que ele faz com você: Slithereen Crush com o Shard aplica Corrosive Haze, reduzindo a armadura do Centaur e amplificando o dano físico que ele recebe justo na fase em que ele mais depende de blocar dano com armadura alta. Bash (a cada 3 ataques, até 200 de dano bônus) pune qualquer troca de auto-ataque direta.
- o que você faz com ele: Double Edge (dano mágico, não reduzido por armadura) ignora a resistência física que Slardar constrói, e Retaliate pune cada ataque físico dele de volta, inclusive o próprio Bash.
- itens que viram: Crimson Guard (21:30 na build do Centaur) ajuda contra o Bash físico dele; Pipe (18:06) não ajuda tanto aqui porque o Slardar não tem dano mágico de área forte, o problema dele é físico e redução de armadura.
- como jogar: evite trocar auto-ataque sem iniciar primeiro, porque o Bash dele compensa o Retaliate seu. Priorize fechar a luta com Hoof Stomp antes que ele use o Shard em você.
- fonte: pro_dados/centaur.json; pro_dados/slardar.json; constants_abilities.json (slardar_slithereen_crush, slardar_bash, centaur_return); https://api.opendota.com/api/constants/aghs_desc.

## Contra Axe (axe)

- placar: Centaur venceu 129 de 229 partidas pro, 56,3%, a melhor taxa entre os rivais de mesma posição.
- por que importa: é o duelo clássico de dois tanques de força que vivem de iniciar e aguentar dano, os dois dependem de força pra escalar dano, o que torna o confronto uma corrida de quem fica mais forte primeiro.
- janelas: até os 12 min, Axe monta Blade Mail (12:36) como resposta defensiva cedo. O Blink dele sai aos 15:42, antes do Centaur (19:36). Depois dos 22, Axe tem Aghanim's Shard (22:54, dá stack de Counter Helix que reduz dano recebido) e Black King Bar (25:54), virando praticamente impossível de matar sozinho.
- o que ele faz com você: Berserker's Call força Centaur a atacar só o Axe por até 3s; cada ataque que o Centaur dá nessa janela conta pro Counter Helix dele (100 a 160 de dano puro em área a cada 4 a 7 ataques).
- o que você faz com ele: cada vez que o Axe ataca o Centaur durante o próprio Call, o Retaliate devolve dano físico que atravessa BKB, incluindo durante o Call. É uma troca de punição mútua: quem tem mais vida e mais força no momento da troca ganha o duelo.
- itens que viram: Heart of Tarrasque (Ring of Tarrasque 17:30 mais Reaver 24:36 na build do Centaur) decide o duelo de atrito, porque os dois lados vivem de HP e regen; quem fecha o Heart primeiro ganha a guerra de desgaste.
- como jogar: não troque dentro do Call sem necessidade, deixe o Counter Helix dele gastar em creep. Se ele chamar, use Double Edge nele assim mesmo, porque dano mágico não é reduzido pelo armor bônus do Call.
- fonte: pro_dados/centaur.json; pro_dados/axe.json; constants_abilities.json (axe_berserkers_call, axe_counter_helix, centaur_return, centaur_double_edge).

## Contra Tidehunter (tidehunter)

- placar: Centaur venceu 118 de 221 partidas pro, 53,4%.
- por que importa: o terceiro pos 3 de iniciação mais comum contra ele em pro, e o único cujo stun em área (Ravage) supera o Hoof Stomp em alcance e em impacto de teamfight.
- janelas: Tidehunter monta Aghanim's Scepter cedo (22:18, transforma Gush numa onda em linha) e o Shard logo depois (23:06). O Blink do Centaur (19:36) chega antes do blink do Tidehunter (21:12), então na janela entre 19 e 21 min é o Centaur que tem iniciação garantida primeiro.
- o que ele faz com você: Ravage (raio 1250, stun de até 2,4s) ganha de qualquer engajamento do Centaur em luta de 5, porque atinge muito mais área que o Hoof Stomp (raio 325); Gush reduz armadura (3 a 6 pontos) e lentidão, abrindo o Centaur pra burst físico do resto do time dele.
- o que você faz com ele: Kraken Shell (passiva, bloqueia dano físico e remove debuff ao cruzar um limiar) dificulta prender o Tidehunter com dano de auto-ataque sozinho, mas Double Edge e Hoof Stomp são mágicos e não são bloqueados pelo block físico do Kraken Shell.
- itens que viram: quem acerta o stun em área primeiro numa luta de 5 decide o resto; Black King Bar ajuda os dois a ignorar o stun do outro, mas o Retaliate do Centaur continua funcionando mesmo assim.
- como jogar: não inicie de frente contra um Tidehunter com Ravage pronto, force ele a gastar a ultimate fora de posição antes. Depois do Ravage gasto dele, Stampede do Centaur limpa o resto da luta.
- fonte: pro_dados/centaur.json; pro_dados/tidehunter.json; constants_abilities.json (tidehunter_ravage, tidehunter_gush, tidehunter_kraken_shell); https://api.opendota.com/api/constants/aghs_desc.

## Contra Medusa (medusa)

- placar: Centaur venceu 33 de 48 partidas pro, 68,8% (amostra pequena, mas é o maior contraste de vantagem da lista).
- por que importa: hard carry sem lane em comum com o Centaur, mas é exatamente o tipo de confronto que o jogador pediu: dois core que nunca trocam na lane, e o choque de power spike entre o iniciador de offlane e o hiper carry late decide boa parte dos jogos onde cruzam.
- janelas: Medusa é frágil e lenta de montar até o Manta (mediana pro 15:21 a 16:32, fonte porque_itens/medusa.md) e o Butterfly (22:12). O Blink do Centaur fecha aos 19:36, bem no meio dessa janela de fragilidade: ele consegue pegar a Medusa pronta pra morrer antes do Butterfly e da evasão que viria com ele. Depois dos 28 (Eye of Skadi, fonte porque_itens/medusa.md), ela já tem vida e kite o bastante pra virar o duelo.
- o que ele faz com você: Mystic Snake (90 a 240 de dano, tira mana) e Stone Gaze (slow 35%, petrifica depois de 2s olhando pra ela) são as únicas ferramentas de defesa antes do Butterfly; nenhuma das duas impede o blink do Centaur.
- o que você faz com ele: Hoof Stomp e Double Edge são dano mágico, então nem Mana Shield (absorve 98% em troca de mana, mas ainda recebe o dano real) nem o Butterfly tardio (evasão só contra físico) seguram o combo; Mana Shield na real faz Medusa perder mana rápido demais pro nuke do Centaur, acelerando a morte dela em vez de evitar.
- itens que viram: Blink Dagger do Centaur é o item que decide o confronto, porque sem gap closer ela não tem como escapar do alcance de perseguição dele; do lado dela, Butterfly tardio ajuda contra os auto-ataques do Centaur mas não contra o nuke.
- como jogar: cace a Medusa antes dela fechar o Manta (antes dos 16 min), ela não tem disjoint nenhum. Depois do Butterfly, troque só com o combo completo de uma vez, não com auto-ataque.
- fonte: pro_dados/centaur.json; pro_dados/medusa.json; C:/Users/felip/Desktop/dota-hub/content/porque_itens/medusa.md; constants_abilities.json (medusa_mana_shield, medusa_stone_gaze, centaur_hoof_stomp, centaur_double_edge).

## Contra Faceless Void (faceless_void)

- placar: Centaur venceu 32 de 48 partidas pro, 66,7% (amostra pequena).
- por que importa: outro hard carry sem lane em comum, mas com uma ultimate (Chronosphere) que pode virar o resultado se ele sobreviver até lá, então o confronto é literalmente uma corrida contra o tempo de farm dele.
- janelas: Void vive de Battle Fury (mediana pro 14:45, fonte porque_itens/faceless_void.md), que quase dobra o LH por minuto dele (de 7,9 pra 13,5). Antes disso ele é frágil e sem escape real, só Time Walk (recarga 21s no nível 1, cai pra 6s no nível 4). O Blink do Centaur (19:36) chega depois do Battle Fury dele, mas Void ainda não tem Black King Bar (28:12) nem joga Chronosphere com segurança nessa fase.
- o que ele faz com você: Time Walk desfaz o dano recebido nos últimos 2s ao se teleportar, o que pode salvar ele de um combo lento do Centaur, mas não de um Hoof Stomp instantâneo seguido de Double Edge no mesmo golpe. Chronosphere (raio 500, até 4,75s) travaria o time inteiro do Centaur no meio de uma Stampede, mas só fica forte depois que ele tem nível 6 e consegue proteger o cast.
- o que você faz com ele: antes dos 14 min, Void não tem Battle Fury nem vida pra trocar; Hoof Stomp mais Double Edge mata ele de forma direta porque o Time Walk sozinho não desfaz dano mágico em área que já acertou fora da janela de 2s.
- itens que viram: nos jogos pro que entram Battle Fury até 14:00, o Void ganha 76% das vezes (fonte porque_itens/faceless_void.md); depois dos 17:00, só 1 em 8. Ou seja, o Centaur que não deixa o Void chegar no Battle Fury cedo já ganhou boa parte do confronto antes da primeira luta de verdade.
- como jogar: pressione a jungle do Void antes dos 14 min pra atrasar o Battle Fury. Depois que ele tiver Chronosphere, não agrupe o time antes de saber onde ele está.
- fonte: pro_dados/centaur.json; pro_dados/faceless_void.json; C:/Users/felip/Desktop/dota-hub/content/porque_itens/faceless_void.md; constants_abilities.json (faceless_void_time_walk, faceless_void_chronosphere, centaur_hoof_stomp).

## Contra Terrorblade (terrorblade)

- placar: Centaur venceu 58 de 89 partidas pro, 65,2%.
- por que importa: terceiro hard carry sem lane em comum na lista, com o maior volume de jogos entre os três (89), hiper carry que depende quase totalmente de chegar vivo até o late pra valer o pick.
- janelas: Terrorblade monta Power Treads cedo (5:00, fonte porque_itens/terrorblade.md) e entra na mini jungle com Falcon Blade no nível 6 (7:00 a 8:00), mas o core de verdade, Manta Style, só fecha aos 17:06. O Blink do Centaur (19:36) chega logo depois disso, numa janela em que o TB ainda não tem Metamorphosis sustentada em luta nem Skadi (28:12).
- o que ele faz com você: Sunder troca uma % da vida atual dos dois (mínimo 25 a 35% pro próprio TB fica), ferramenta de sobrevivência, não de dano; fora da Metamorphosis, as ilusões dele batem fraco (25 a 40% do dano) e não ameaçam o tankiness do Centaur sozinhas.
- o que você faz com ele: Terrorblade tem força base baixa (18, com ganho de 2 por nível) e nenhum escape fora da Metamorphosis, então Double Edge (que escala com a força do próprio Centaur, não a dele) mata rápido antes da Metamorphosis virar sustentável em luta prolongada; Hoof Stomp trava ele pro resto do time acabar o combo.
- itens que viram: Manta Style é o divisor real, antes dele TB não tem DPS nem farm de duas frentes; se o Centaur impede esse item (pressão na jungle antes dos 17 min), o resto do jogo já fica a favor do offlane.
- como jogar: pressione a jungle dele antes do Manta. Se ele sunder pra fugir, não persiga, ele já pagou o preço em vida; gaste o tempo reorganizando o resto da luta.
- fonte: pro_dados/centaur.json; pro_dados/terrorblade.json; C:/Users/felip/Desktop/dota-hub/content/porque_itens/terrorblade.md; constants_abilities.json (terrorblade_sunder, terrorblade_metamorphosis, centaur_double_edge).

## Contra Treant Protector (treant)

- placar: Centaur venceu só 25 de 79 partidas pro, 31,6%, a pior taxa de toda a lista.
- por que importa: é o contra-exemplo direto do padrão desse herói, suporte sem lane obrigatória com o Centaur, mas com uma habilidade que desliga por completo o plano de jogo dele.
- janelas: Treant joga Arcane Boots cedo (12:00) pra manter mana de giro de Living Armor e Leech Seed na lane alheia. O Blink dele (26:24) é tardio e serve só pra entrar na Overgrowth, não pra escapar. O problema pro Centaur não é de timing de item, é de mecânica de habilidade disponível desde o nível 6.
- o que ele faz com você: Overgrowth (raio 800, até 5s) impede explicitamente mover, blinkar, ficar invisível ou atacar enquanto durar, e nas constantes do jogo ela tem bkbpierce confirmado (atravessa imunidade mágica), ou seja, nem Black King Bar livra o Centaur de ficar preso. É a única habilidade dessa lista inteira que desliga o Blink Dagger por completo e ainda ignora BKB, não só atrasa ou pune.
- o que você faz com ele: Treant tem pouca vida e depende de ficar perto de árvore (Nature's Guise) pra se esconder; fora disso, Hoof Stomp mais Double Edge mata ele rápido se Centaur chegar sem precisar do Blink (a pé, ou puxado por iniciação de aliado).
- itens que viram: contra Overgrowth não existe item de blink nem BKB que resolva, porque o efeito trava movimento e blink e ainda atravessa imunidade mágica; a saída real é um item de dispel que remova o debuff (ela está marcada como dispellable nas constantes do jogo) antes do tempo acabar.
- como jogar: nunca inicie com Blink perto de árvore sabendo que o Treant tem Overgrowth disponível, inicie a pé ou espere ele gastar a ultimate em outro alvo. Se cair preso, não perca tempo tentando blinkar ou ativar BKB, espere o efeito passar e jogue a luta em volta disso.
- fonte: pro_dados/centaur.json; pro_dados/treant.json; constants_abilities.json (treant_overgrowth, centaur_hoof_stomp).

## Contra Bounty Hunter (bounty_hunter)

- placar: Centaur venceu só 20 de 56 partidas pro, 35,7%.
- por que importa: segunda pior taxa da lista, suporte roamer que ataca justamente o que faz o Centaur funcionar, a surpresa da iniciação.
- janelas: Bounty Hunter monta Tranquil Boots cedo (7:00) pra rodar o mapa antes do Centaur sequer ter Blink. Track (25s de duração, dá true sight e amplifica dano) costuma cair no Centaur assim que ele aparece no mapa, revelando a posição dele pro time adversário reagir antes da iniciação.
- o que ele faz com você: Windwalk (invisibilidade mais velocidade) deixa o Bounty Hunter se posicionar sem ser visto, e Track amplifica o dano que o Centaur recebe em 8 a 16% durante a luta inteira que ele mesmo tentou iniciar.
- o que você faz com ele: Bounty Hunter tem pouca vida e nenhum disjoint real contra dano em área; se Centaur consegue flagrar ele fora da invisibilidade (Dust, Gem, ou Sentry), Hoof Stomp mais Double Edge resolve rápido.
- itens que viram: Sentry Ward e Dust do lado do Centaur contrariam a vantagem de invisibilidade do Bounty Hunter, tirando a arma principal dele do jogo; sem isso, ele sempre vê o Centaur chegar primeiro.
- como jogar: carregue detecção sempre que esse herói estiver no time adversário, antes de iniciar qualquer coisa. Não ande sozinho em rota sem visão de wards, porque é assim que ele pega o pick cedo que vira o jogo todo.
- fonte: pro_dados/centaur.json; pro_dados/bounty_hunter.json; constants_abilities.json (bounty_hunter_track, bounty_hunter_wind_walk).

## Contra Timbersaw (shredder)

- placar: Centaur venceu só 62 de 151 partidas pro, 41,1%.
- por que importa: terceiro pior confronto da lista e o de maior amostra entre os desfavoráveis (151 jogos), o único oponente cuja habilidade ataca direto o atributo que sustenta todo o kit do Centaur.
- janelas: Timbersaw monta Staff of Wizardry cedo (14:24) e Kaya and Sange (18:06), ritmo de mid/offlane que farma rápido com Whirling Death limpando árvore. O Blink do Centaur (19:36) chega depois desse pico, mas de pouco adianta se a força dele já estiver reduzida pela Whirling Death antes da troca.
- o que ele faz com você: Whirling Death reduz o atributo primário do alvo em 13%, e como força é o atributo que escala Double Edge, Stampede e Retaliate ao mesmo tempo, é a única habilidade da lista que enfraquece as três ferramentas do Centaur de uma vez só. Reactive Armor (armadura e regen que sobem a cada ataque recebido, até 40 stacks) faz o Timbersaw ficar mais tanque justamente quando o Centaur tenta trocar auto-ataque ou Retaliate nele.
- o que você faz com ele: Timbersaw tem range de ataque curto fora da Chakram e pouca mobilidade real além do Timber Chain (que precisa de árvore por perto); se Centaur blinka em cima dele longe de árvore, ele não tem fuga fácil.
- itens que viram: contra a redução de atributo da Whirling Death, mais força bruta (Heart of Tarrasque) ainda compensa em termos absolutos, porque 13% de uma base maior continua sendo mais força final que ele reduzir uma base pequena.
- como jogar: evite ficar perto de árvores lutando contra ele, é onde ele usa Timber Chain pra reposicionar e Whirling Death derruba a árvore pra dano bônus. Priorize iniciar longe de floresta.
- fonte: pro_dados/centaur.json; pro_dados/shredder.json; constants_abilities.json (shredder_whirling_death, shredder_reactive_armor, shredder_timber_chain, centaur_double_edge, centaur_stampede, centaur_return).
