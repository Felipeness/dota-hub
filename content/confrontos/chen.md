---
id: confrontos-chen
heroi: Chen
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/chen.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/shadow_demon.json
- dota-hub-conteudo-novo/pro_dados/centaur.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/warlock.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/bounty_hunter.json
- dota-hub-conteudo-novo/pro_dados/disruptor.json
- dota-hub-conteudo-novo/pro_dados/queenofpain.json
- dota-hub-conteudo-novo/pro_dados/monkey_king.json
- dota-hub-conteudo-novo/pro_dados/terrorblade.json
- dota-hub-conteudo-novo/pro_dados/kez.json
- dota-hub-conteudo-novo/pro_dados/abaddon.json
- dota-hub-conteudo-novo/pro_dados/gyrocopter.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer (lane_role e purchase_log, partidas de liga 7.40-7.41)
---

## Como essa lista foi montada
Chen só joga pos 5 em pro, sem variação relevante de posição nas partidas de pro 7.40-7.41 (lane_role majoritariamente safelane, 422 de 517 partidas, OpenDota explorer). Os 15 oponentes abaixo cobrem os 6 com mais jogos de pro contra ele (Jakiro, Tusk, Shadow Demon, Centaur Warrunner, Snapfire, Warlock), mais dois pos 4/5 de alto volume que não entraram no top 6 (Hoodwink, Bounty Hunter), os 3 confrontos de maior vantagem com 30+ jogos (Queen of Pain, Monkey King, Terrorblade) e os 3 de maior desvantagem com 30+ jogos (Kez, Abaddon, Gyrocopter). Disruptor entra em duas categorias ao mesmo tempo: é pos 4/5 puro como o Chen e também uma das maiores vantagens da lista. Queen of Pain, Monkey King, Terrorblade, Kez, Gyrocopter e boa parte do Centaur Warrunner são o caso "dois heróis que não compartilham lane mas o confronto importa": nenhum deles é suporte, a lane deles fica longe da trilateral do Chen, só que aparecem demais nas mesmas partidas de pro pra ignorar, seja ganqueando a lane dele, seja decidindo quem controla Roshan e mapa no meio-late. Placar sempre do ponto de vista do Chen (fonte: `pro_dados/chen.json`, campo `confrontos`, endpoint `/heroes/66/matchups` do OpenDota filtrado pra partidas de liga 7.40 e 7.41). Aghanim's Scepter e Shard vêm do endpoint `aghs_desc` do OpenDota, que descreve a versão atual de cada upgrade. Um detalhe que vale pra qualquer confronto do late game: o Aghanim's Shard do próprio Chen deixa Holy Persuasion controlar criaturas Ancient, até 3 delas com Hand of God no nível máximo (fonte: aghs_desc), o que é o verdadeiro power spike tardio dele contra qualquer carry desta lista, não um item de build convencional.

## Contra Jakiro (jakiro)
- placar: 71V/140 jogos (50,7%) a favor do Chen, fonte `pro_dados/chen.json`.
- por que importa: oponente mais comum do Chen em pro, 140 jogos. Jakiro é pos 5 em praticamente todas as 2.913 partidas do dataset dele, então é o duelo de suporte contra suporte mais repetido do jogo pro, os dois brigando pela mesma função.
- janelas: até o nível 6 é troca de poke cedo, Dual Breath (cd 10s, slow de até 40%) contra Penitence (cd 20-11s, 50 a 125 de dano e slow de até 30%). Em item os dois saem parecidos: Jakiro fecha Arcane Boots aos 11,7 min (mediana, 2.278 partidas) e Chen aos 10,7 min (470 partidas). O Chen abre vantagem no meio: Mekansm sai aos 15,8 min (407 partidas), o primeiro burst de cura em grupo da dupla, enquanto Jakiro só tem Staff of Wizardry aos 25,1 min (1.928 partidas) e Glimmer Cape aos 22,8 min (894 partidas) pra responder.
- o que ele faz com você: Macropyre (cd 90-70s) é uma linha de fogo de 500 de largura que causa 100 a 200 de dano por segundo por 10s em qualquer unidade inimiga, incluindo os creeps roubados pela Holy Persuasion; se o grupo dele te pega parado curando em cima da linha, o Macropyre apaga o corpo extra do Chen junto com ele. Ice Path (cd 20-11s) estuna até 2s em área e trava o combo.
- o que você faz com ele: Penitence desacelera o Jakiro e dá até 80 de velocidade de ataque bônus pra quem bater nele, e ele não tem blink nem dash no kit, só bota, então perseguir depois do nível 6 vira execução fácil. Holy Persuasion rouba creep perto da lane dele, cortando o gpm mais baixo do grupo de pos 5 desta lista (315, atrás só do Disruptor).
- itens que viram: Guardian Greaves do Chen (21,6 min, 314 partidas) remove a maioria dos debuffs do Ice Path e do slow do Dual Breath; o Aghanim's Scepter do Chen (fonte: aghs_desc) deixa Hand of God canalizável por até 6s com 60% de resistência mágica e imunidade a debuff pros aliados perto, o que anula o Macropyre inteiro se alguém ficar em cima do fogo durante o canal.
- como jogar: não fiquem parados numa Macropyre, ela sozinha mata o creep roubado; puxe a Persuasion pra fora do alcance antes de entrar na área da ultimate dele. Use Penitence cedo pra forçar o Jakiro a gastar Ice Path defensivo em vez de ofensivo.
- fonte: pro_dados/chen.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre, jakiro_ice_path, jakiro_dual_breath, chen_penitence, chen_holy_persuasion); aghs_desc.

## Contra Tusk (tusk)
- placar: 59V/119 jogos (49,6%) a favor do Chen, fonte `pro_dados/chen.json`.
- por que importa: 2º oponente mais comum em pro (119 jogos). Tusk joga pos 4/5 na maioria das partidas, então disputa a mesma vaga de suporte móvel que inicia luta pela trilateral.
- janelas: Tusk fecha Tranquil Boots cedo (8,4 min, 1.618 partidas) pra correr o mapa; Chen fecha Arcane Boots aos 10,7 min. O divisor é o Blink Dagger de Tusk, que sai aos 19,0 min (mediana, 2.655 partidas), dando o primeiro combo de engage garantido antes do Chen ter qualquer resposta além de Mekansm (15,8 min). Chen só fecha Guardian Greaves aos 21,6 min, já depois da janela em que Tusk costuma iniciar.
- o que ele faz com você: Walrus Kick (cd 12s) acerta 550 de dano fixo mais 40% de slow no inimigo mais próximo na direção do chute, suficiente pra matar um Chen sem Mekansm/Greaves ativo em qualquer fase do jogo. Snowball junto do Blink tira o Chen do lugar e estuna o time inteiro ao redor.
- o que você faz com ele: Penitence desacelera o Tusk antes do Blink dele fechar a distância e amplifica o dano físico que os aliados tacam nele durante o combo; Hand of God cura o time inteiro de um Snowball malsucedido num cast só.
- itens que viram: Mekansm/Guardian Greaves do Chen é a diferença entre sobreviver ou não aos 550 de dano fixo do Kick. O Aghanim's Shard de Tusk (fonte: aghs_desc, "Drinking Buddies") puxa um aliado pra perto dando velocidade e armadura em dupla, ferramenta de fuga pro combo que não funcionar.
- como jogar: saia de perto do time assim que o Blink do Tusk sumir de vista; guarde Divine Favor/Mekansm pra depois do combo inicial, não antes, porque o burst dele é instantâneo.
- fonte: pro_dados/chen.json; pro_dados/tusk.json; constants_abilities.json (tusk_walrus_kick, tusk_snowball, tusk_tag_team, chen_penitence, chen_hand_of_god); aghs_desc.

## Contra Shadow Demon (shadow_demon)
- placar: 52V/93 jogos (55,9%) a favor do Chen, fonte `pro_dados/chen.json`.
- por que importa: 3º oponente mais comum (93 jogos). Shadow Demon joga pos 4/5 na maioria das partidas, suporte de controle que também disputa a trilateral do Chen.
- janelas: os dois saem sem bota rápida grande (boots mediano 5,4 min pro Shadow Demon, 6,5 min pro Chen). Chen chega no Mekansm aos 15,8 min; Shadow Demon só fecha item grande tarde, Blink aos 23,9 min (1.318 partidas), Aghanim's Shard aos 25,4 min (788 partidas) e Glimmer Cape aos 24,6 min (559 partidas), dependendo de nível pra virar o jogo, não de item.
- o que ele faz com você: Disruption (cd 26-20s) bane o Chen por 2,75s, tirando ele da luta, e cria 2 ilusões dele com dano bônus de base ao voltar, mas essas ilusões tomam 300% de dano, então servem mais de distração que de ameaça real. Shadow Poison empilha até 5 vezes e estoura até 16x o dano acumulado, o maior burst mágico isolado do confronto.
- o que você faz com ele: Holy Persuasion rouba creep perto da lane dele e aumenta a pressão de wave, forçando o Shadow Demon a gastar Disruption defensivo em vez de ofensivo; Penitence faz os aliados correrem atrás dele, que não tem fuga própria depois de usar o combo.
- itens que viram: o Aghanim's Shard do Shadow Demon (fonte: aghs_desc) limpa debuffs negativos de um aliado, inclusive o slow do Penitence, mesmo se o alvo já estiver sob efeito de Disruption; o Scepter dele dá 2 cargas de Demonic Purge, útil pra travar o Chen à distância em vez de corpo a corpo.
- como jogar: não fique parado perto de árvore nem agrupado quando o Shadow Demon tiver mana pra Disruption; use Hand of God só depois que o banimento passar, não durante.
- fonte: pro_dados/chen.json; pro_dados/shadow_demon.json; constants_abilities.json (shadow_demon_disruption, shadow_demon_shadow_poison); aghs_desc.

## Contra Centaur Warrunner (centaur)
- placar: 49V/90 jogos (54,4%) a favor do Chen, fonte `pro_dados/chen.json`.
- por que importa: 4º oponente mais comum (90 jogos). Centaur é pos 3 de offlane, não compartilha lane direta com o Chen, mas é o tanque que mais engaja em cima da trinca de trás em pro, e farma muito mais rápido que qualquer outro nesta lista até aqui (gpm 509, lh10 54 contra 16 do Chen).
- janelas: até os 8-9 min Centaur já fechou Helm of Iron Will (4,8 min) e Vanguard (8,5 min), sustentando a lane sozinho. O divisor é o Blink Dagger dele, mediana 19,6 min (1.741 partidas) contra os 494 de HP e pouca armadura do Chen: a partir daí qualquer Stampede pega o suporte isolado. Chen só tem Guardian Greaves (21,6 min) como resposta de grupo, saindo quase junto do Blink do Centaur.
- o que ele faz com você: Stampede (cd 100-90s) joga o time inteiro em cima de quem estiver isolado, com dano baseado na força do Centaur; Hoof Stomp (cd 18-12s, até 280 de dano) trava o combo com stun de até 2,2s. Double Edge soma dano extra em corpo a corpo, mesmo se machucar o próprio Centaur também.
- o que você faz com ele: Penitence desacelera o Centaur antes do Stampede sair e amplifica o dano dos aliados batendo nele; Holy Persuasion dá um corpo extra pra absorver o Hoof Stomp em vez do Chen.
- itens que viram: o Aghanim's Shard do Centaur (29,1 min, 651 partidas, fonte: aghs_desc) faz Double Edge desacelerar heróis inimigos e empilhar força, deixando ele perseguir o Chen depois de acertar; Pipe of Insight (18,1 min, 863 partidas) no próprio Centaur absorve justamente o tipo de dano mágico em área que o Chen e o time dele aplicam.
- como jogar: não fique isolado puxando creep perto da offlane depois dos 19-20 min, é exatamente quando o Blink + Stampede do Centaur fica pronto; guarde Guardian Greaves pro dispel do Hoof Stomp, não pro dano do Double Edge.
- fonte: pro_dados/chen.json; pro_dados/centaur.json; constants_abilities.json (centaur_stampede, centaur_hoof_stomp, centaur_double_edge, chen_penitence); aghs_desc.

## Contra Snapfire (snapfire)
- placar: 51V/89 jogos (57,3%) a favor do Chen, fonte `pro_dados/chen.json`.
- por que importa: 5º oponente mais comum (89 jogos). Snapfire é flex de pos 2 a 5 mas aparece muito como pos 4/5, cruzando a lane do Chen com frequência; é a maior vantagem entre os seis confrontos de maior volume.
- janelas: cedo, Scatterblast e Firesnap Cookie (cd 18-15s, stun de pulo) ameaçam sem matar. O divisor é o nível 6: Mortimer Kisses, a ultimate dela (cd 120-100s, 8 globos de 180 a 360 de dano em 5,5s), é um nuke de área que o grupo do Chen só evita se achar o combo antes. Em item ela sai na frente: Aghanim's Shard aos 16,9 min (1.919 partidas), bem antes do Guardian Greaves do Chen (21,6 min) virar resposta de grupo.
- o que ele faz com você: Mortimer Kisses em área cobre o grupo inteiro e ainda deixa poça de fogo que continua batendo depois do impacto, exatamente o tipo de dano sustentado que Divine Favor sozinho não acompanha sem Mekansm. Firesnap Cookie com Shard cura e lança outro Mortimer Kiss no pouso, dobrando burst num cast só.
- o que você faz com ele: Holy Persuasion rouba creep da lane e empurra a wave contra ela, forçando Snapfire a gastar Scatterblast defensivo cedo; Penitence amplifica o dano dos aliados em cima dela depois que a ultimate dela estiver em cooldown.
- itens que viram: Guardian Greaves/Mekansm do Chen seguram a poça de fogo da Mortimer Kisses, mas só se vierem antes do primeiro nível 6 dela (ela chega na ultimate bem antes do Chen chegar no Mekansm, 15,8 min); o Scepter dela ("Spit Out", fonte: aghs_desc) deixa ela cuspir a própria unidade engolida causando impacto e stun em área adicional.
- como jogar: não agrupem num raio de 275 (o impacto do globo) quando ela estiver com a ultimate disponível, nível 6+ respeitando o cd de 100-120s; gaste Hand of God só depois que os globos pararem de cair, não durante.
- fonte: pro_dados/chen.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_mortimer_kisses, snapfire_scatterblast, snapfire_firesnap_cookie); aghs_desc.

## Contra Warlock (warlock)
- placar: 47V/85 jogos (55,3%) a favor do Chen, fonte `pro_dados/chen.json`.
- por que importa: 6º e último do top de volume (85 jogos). Warlock é pos 5 quase sempre, o espelho mais direto do Chen nesta lista: os dois são suportes puros de sustain em grupo, sem dano de ataque relevante.
- janelas: os dois fecham Arcane Boots quase junto (Warlock 10,7 min, Chen 10,7 min). O meio é onde separam: Chen tem Mekansm aos 15,8 min; Warlock só responde com Shadow Amulet aos 18,0 min (1.244 partidas) e Glimmer Cape aos 20,5 min (1.205 partidas), itens de posicionamento, não de cura em grupo. A ultimate de cada um decide a luta, Hand of God (cd 150-110s) contra Chaotic Offering (cd 165s, 2 Golems com Scepter).
- o que ele faz com você: Shadow Word (cd 15-12s) cura o Warlock e machuca o Chen ao mesmo tempo num raio de 225, então troca de dano direta tende a favorecer quem lançou primeiro; Chaotic Offering estuna 0,8s em área e solta 1 ou 2 Golems (3.000 de vida com Scepter) que perseguem o Chen pelo resto da luta.
- o que você faz com ele: Penitence desacelera o Warlock, que não tem blink nem fuga própria além de teleporte; Holy Persuasion rouba creep perto da lane dele, competindo diretamente pelo mesmo tipo de farm passivo que o Warlock também depende pra sobreviver (gpm 329 dele contra 382 do Chen).
- itens que viram: Guardian Greaves do Chen dispela o que o Shadow Word aplicar; o Aghanim's Scepter do Warlock soma um 2º Golem, dobrando o corpo que precisa ser kitado ou dispelado em vez de só um.
- como jogar: force a troca de Shadow Word cedo, antes do nível 6 dele, pra não enfrentar os Golems junto do spell; depois do nível 6, respeite o cd de 165s da ultimate dele e evite agrupar o time perto de árvore ou creep onde ela pode cair.
- fonte: pro_dados/chen.json; pro_dados/warlock.json; constants_abilities.json (warlock_shadow_word, warlock_rain_of_chaos, chen_penitence, chen_holy_persuasion); aghs_desc.

## Contra Hoodwink (hoodwink)
- placar: 42V/81 jogos (51,9%) a favor do Chen, fonte `pro_dados/chen.json`.
- por que importa: 7º em volume (81 jogos), o maior entre os pos 4/5 que ficaram de fora do top 6. Hoodwink disputa espaço de visão e counter-gank com o Chen na mesma faixa de função.
- janelas: os dois moram perto de árvore cedo, onde Bushwhack funciona melhor; Chen fecha Mekansm aos 15,8 min enquanto Hoodwink só fecha Aghanim's Shard aos 23,8 min (1.224 partidas) e Force Staff aos 26,1 min (1.061 partidas), ambos tarde pra uma ultimate que já ameaça desde o nível 6.
- o que ele faz com você: Bushwhack (cd 15-12s) estuna até 2,1s perto de árvore e puxa o alvo até o tronco mais próximo, prendendo o Chen longe do grupo; Sharpshooter (cd 45s) carrega até 3s e dispara até 1.350 de dano num herói, o maior burst de uma habilidade só desta lista, suficiente pra matar um Chen de vida cheia sem escudo.
- o que você faz com ele: Penitence desacelera a Hoodwink, que depende de kiting por não ter nenhum escape instantâneo além do Scurry (passiva de velocidade); Holy Persuasion dá corpo extra pra absorver o Bushwhack em vez do próprio Chen ficar preso na árvore.
- itens que viram: o Scepter de Hoodwink aumenta a velocidade da flecha e o slow do Sharpshooter (fonte: aghs_desc), reduzindo a janela de reação do Chen pra sair da linha de tiro; Guardian Greaves do Chen não dispela o Sharpshooter em voo, só ajuda depois que o dano já caiu.
- como jogar: não fique parado em linha reta com a Hoodwink depois do nível 6, o Sharpshooter precisa de até 3s carregando, dá pra quebrar linha de visão antes do tiro sair; evite ficar perto de árvore sozinho puxando creep.
- fonte: pro_dados/chen.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, chen_penitence, chen_holy_persuasion); aghs_desc.

## Contra Bounty Hunter (bounty_hunter)
- placar: 37V/72 jogos (51,4%) a favor do Chen, fonte `pro_dados/chen.json`.
- por que importa: 8º em volume (72 jogos), outro pos 4/5 puro que disputa a mesma função de visão, rotação e caça.
- janelas: Bounty Hunter fecha Tranquil Boots cedo (7,0 min, 305 partidas) pra correr o mapa; Chen fecha Arcane Boots aos 10,7 min. Sem item grande de nenhum dos dois lados na amostra (só 410 partidas no dataset do Bounty Hunter, volume baixo), a janela real é de nível: Jinada (bônus de dano que acumula parado) ameaça lane, Mekansm do Chen (15,8 min) muda o ritmo pra grupo depois disso.
- o que ele faz com você: Track (cd 6-4s) dá true sight e amplifica o dano que o Chen recebe em até 16%, informação que o time dele usa pra caçar; Shuriken Toss (cd 5s) soma até 310 de dano e ainda salta entre alvos marcados, o que inclui o Chen se ele estiver perto de um aliado tracked.
- o que você faz com ele: Chen tem HP e armadura baixos de suporte puro, então Jinada acumulada mata rápido se ele se isolar puxando creep; Holy Persuasion dá velocidade de movimento e até 18% de dano bônus pros creeps dele, que podem escoltar o time até o Bounty Hunter escondido.
- itens que viram: Aghanim's Shard de Bounty Hunter ("Friendly Shadow", fonte: aghs_desc) deixa ele escoltar o carry sem perder a própria invisibilidade quando o Chen tentar iniciar em grupo; Guardian Greaves do Chen (21,6 min) muda o ritmo pra teamfight, então a melhor janela do Bounty Hunter é antes disso.
- como jogar: não puxe camp sozinho fora da visão do time nos primeiros 15-20 min, antes do Mekansm; depois disso jogue perto do grupo, cravando Track no suporte dele assim que ele se comprometer.
- fonte: pro_dados/chen.json; pro_dados/bounty_hunter.json; constants_abilities.json (bounty_hunter_track, bounty_hunter_shuriken_toss, bounty_hunter_jinada, chen_holy_persuasion); aghs_desc.

## Contra Disruptor (disruptor)
- placar: 45V/69 jogos (65,2%) a favor do Chen, fonte `pro_dados/chen.json`.
- por que importa: pos 4/5 puro como o Chen e, ao mesmo tempo, a maior vantagem entre quem compartilha função com ele. Entra na lista duas vezes: mesma posição com alto volume (69 jogos) e um dos melhores saldos com 30+ jogos.
- janelas: os dois têm o gpm mais baixo desta lista inteira (Disruptor 279, Chen 382), farm mínimo, prioridade total em visão e utilidade. Disruptor fecha Arcane Boots aos 11,4 min contra 10,7 do Chen; depois disso o jogo deles é todo de cooldown de ultimate, não de item, já que o Aghanim's Scepter do Disruptor só sai aos 34,9 min numa amostra pequena (616 de 2.521 partidas).
- o que ele faz com você: Static Storm (cd 100-70s) silencia tudo numa área de 550 por 6s, o que trava completamente o Chen porque ele não tem dano de ataque relevante, só spell; sem conseguir castar Penitence, Persuasion ou Hand of God dentro da tempestade, o Chen vira um corpo parado. Glimpse (cd 24-18s) devolve o Chen pra posição de 4s atrás, cancelando qualquer avanço.
- o que você faz com ele: Penitence desacelera o Disruptor e amplifica o dano físico nele, já que ele não tem nenhuma forma de escape rápido fora de item; Holy Persuasion compete pelo mesmo tipo de farm indireto que o Disruptor também depende (ele é o suporte com menor lh10 desta lista, 4).
- itens que viram: o Aghanim's Scepter do Disruptor silencia também os itens ativos do alvo dentro da Static Storm (fonte: aghs_desc), o que bloqueia até um Force Staff de fuga do Chen; Guardian Greaves do Chen (21,6 min) não dispela o silence porque é um debuff que cobre item, não uma stun comum.
- como jogar: não entre em luta sem saber se o Disruptor já tem Static Storm liberada (cd 70-100s); force ele a gastar Glimpse num aliado de menor valor antes de comprometer o combo do time.
- fonte: pro_dados/chen.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm, disruptor_glimpse, chen_penitence, chen_holy_persuasion); aghs_desc.

## Contra Queen of Pain (queenofpain)
- placar: 51V/74 jogos (68,9%) a favor do Chen, fonte `pro_dados/chen.json`. Maior vantagem desta lista.
- por que importa: Queen of Pain é mid quase sempre (1.969 de 2.225 partidas, pro 7.40-7.41 OpenDota), não cruza lane com o Chen, mas é o tipo de mid de burst que gankeia a trilateral o jogo inteiro, e é o confronto de maior vantagem do Chen com 30+ jogos. Farma e evolui muito mais rápido (gpm 572, lh10 56, nível final 21 contra 16 do Chen).
- janelas: até o nível 6, Shadow Strike poka e marca; o Chen aguenta de boa com Divine Favor passivo. A partir do nível 6, Sonic Wave (cd 110-80s, 325 a 625 de dano numa onda de longo alcance) é o nuke que mais ameaça, porque ignora a posição do Chen atrás do grupo. QoP fecha Power Treads aos 8,3 min (2.032 partidas) e Kaya aos 13,9 min (1.940 partidas), chegando no pico de burst (Scepter, 23,5 min, 1.396 partidas) bem antes do Chen montar qualquer coisa além de Mekansm.
- o que ele faz com você: Sonic Wave sozinha pode levar o Chen de vida cheia à morte num cast só, já que ele tem HP baixo de suporte puro; com Scepter, Shadow Strike vira spell de 375 de área e ainda solta um "Scream of Pain" em quem estiver perto do alvo principal (fonte: aghs_desc).
- o que você faz com ele: Penitence desacelera a QoP, que depende de Blink pra entrar e sair, então um slow bem cronometrado corta a janela de fuga dela; Hand of God cura o time inteiro depois de um combo mal sucedido dela.
- itens que viram: o Aghanim's Shard de QoP dá um silence de 1,75s nos dois pontos do Blink dela, 125 de dano numa área de 300 (fonte: aghs_desc), o que pode travar um Hand of God de reação se ela acertar o Chen bem no blink; Guardian Greaves do Chen não dispela esse silence, só ajuda a sobreviver ao dano depois.
- como jogar: não force all-in sem saber se a QoP já tem Sonic Wave liberada (nível 6+, cd 80-110s); fique fora de linha reta de visão dela em áreas abertas onde ela pode blinkar de surpresa.
- fonte: pro_dados/chen.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_sonic_wave, queenofpain_blink, chen_penitence, chen_hand_of_god); aghs_desc.

## Contra Monkey King (monkey_king)
- placar: 24V/35 jogos (68,6%) a favor do Chen, fonte `pro_dados/chen.json`. 2ª maior vantagem.
- por que importa: Monkey King é pos 1 praticamente sempre, carry que não compartilha lane com o Chen, mas farma em áreas de árvore e jungle parecidas com onde o Chen rouba camp, e é o 2º confronto de maior vantagem com amostra de 30+. Evolui muito mais rápido (gpm 572, lh10 53, nível final 21).
- janelas: cedo o MK farma sozinho com Jingu Mastery, sem ameaça direta ao Chen. O divisor é o nível 6, Boundless Strike (cd 24-15s) com true strike estuna em linha, e o item que mais muda a luta é o Black King Bar dele, mediana 24,9 min (646 partidas) ou o Aghanim's Shard, 25,9 min (559 partidas); até lá, controle (Penitence, stuns de aliado) ainda funciona nele.
- o que ele faz com você: Boundless Strike acerta em linha e crítico com true strike, dano garantido mesmo contra evasão; com Shard, aplica Primal Spring (um knockup extra) com 35% do poder ao longo do bastão, somando CC em cima do stun principal (fonte: aghs_desc). Wukong's Command cerca o Chen com soldados se ele ficar parado perto demais do carry.
- o que você faz com ele: Holy Persuasion rouba creep da jungle que o MK usaria pra fechar item; Penitence desacelera ele fora do Black King Bar, já que sem BKB ele não entra em luta de jeito nenhum.
- itens que viram: Guardian Greaves do Chen dispela o slow aplicado por Boundless Strike/Primal Spring, mas só se vier antes do Black King Bar dele estar pronto; depois do BKB (24,9 min), nenhum debuff do Chen funciona por 7 a 9s.
- como jogar: controle o MK antes do Black King Bar sair, depois disso jogue só de posicionamento e dano em grupo; cuidado com Wukong's Command perto de torre, os soldados atacam prédio também.
- fonte: pro_dados/chen.json; pro_dados/monkey_king.json; constants_abilities.json (monkey_king_boundless_strike, monkey_king_wukongs_command, chen_holy_persuasion, chen_penitence); aghs_desc.

## Contra Terrorblade (terrorblade)
- placar: 23V/34 jogos (67,6%) a favor do Chen, fonte `pro_dados/chen.json`. 3ª maior vantagem.
- por que importa: Terrorblade é pos 1 quase sempre, o carry de farm mais rápido desta lista inteira (gpm 701, lh10 66, nível final 21 com só 887 partidas no dataset). Não compartilha lane com o Chen, mas os dois competem diretamente por quem empurra e controla mapa mais rápido, o Chen com creeps roubados, o Terrorblade com ilusões.
- janelas: cedo é farm puro dos dois lados, sem ameaça direta. O divisor chega com Manta Style, mediana 17,1 min (850 partidas), quando o Terrorblade passa a ter ilusões suficientes pra empurrar 2-3 linhas ao mesmo tempo, competindo com o push que a Holy Persuasion também gera. Metamorfose (ultimate) é o verdadeiro power spike dele em teamfight, disponível desde o nível 6 mas só vira ameaça séria depois do Manta.
- o que ele faz com você: Sunder troca uma % da vida atual dele com a de um herói, incluindo o Chen, o que pode matar o Chen instantaneamente se ele estiver com pouca vida e o Terrorblade com muita; em Metamorfose, o ataque à distância dele alcança o Chen antes que ele chegue perto pra curar.
- o que você faz com ele: Holy Persuasion rouba creep da jungle que ele usaria pra puxar ilusões extras no loop de Conjure Image; Penitence desacelera ele fora da Metamorfose, quando ele não tem nenhuma forma de fuga própria além de Sunder.
- itens que viram: o Aghanim's Shard do Terrorblade custa HP próprio pra dar velocidade e regen às ilusões (fonte: aghs_desc), então um Sunder malfeito contra o Chen pode deixar ele mais vulnerável, não menos; Black King Bar dele sai aos 33,8 min (mediana, 280 partidas, OpenDota explorer liga 7.40-7.41), e é a partir daí que o time do Chen perde a janela de controle em grupo.
- como jogar: não deixe o Chen com vida baixa perto de um Terrorblade carregado, por causa do Sunder; gaste Holy Persuasion nos camps que ele visitaria pra atrasar o Manta Style.
- fonte: pro_dados/chen.json; pro_dados/terrorblade.json; OpenDota explorer (purchase_log black_king_bar, liga 7.40-7.41); constants_abilities.json (terrorblade_sunder, terrorblade_metamorphosis, chen_holy_persuasion, chen_penitence); aghs_desc.

## Contra Kez (kez)
- placar: 17V/37 jogos (45,9%) a favor do Chen, fonte `pro_dados/chen.json`. Maior desvantagem desta lista.
- por que importa: Kez é pos 1 quase sempre e o herói mais novo da lista. É o confronto de maior desvantagem do Chen com 30+ jogos, mesmo sem dividir lane: o pico de poder dele em pro (gpm 638, lh10 60, nível final 22, o mais alto desta lista) ultrapassa qualquer coisa que o Chen sozinho segura.
- janelas: cedo, farm isolado, sem ameaça direta. O divisor chega com Black King Bar, mediana 25,2 min (848 partidas), ou com Aghanim's Scepter, 25,6 min (748 partidas): a partir daí Kez encadeia Echo Slash e Raptor Dance sem gastar o cooldown gêmeo graças ao Switch Discipline, dobrando o DPS numa luta só. Desolator (16,8 min, 1.056 partidas) já é o item que faz ele furar armadura antes disso.
- o que ele faz com você: Grappling Claw fecha a distância num herói fugindo, incluindo o Chen; Raptor Dance (cd 40-30s) soma 4 ataques em área com 100% de lifesteal, dano que cresce com a vida máxima do alvo atingido, então contra um aliado tanque do Chen o Kez cura mais ainda em cima do próprio time.
- o que você faz com ele: Penitence desacelera o Kez, que depende de velocidade de movimento e dash pra alcançar alvo; Holy Persuasion dá um corpo extra pra segurar ataque dele em vez do Chen ou de um aliado de menos vida.
- itens que viram: o Aghanim's Shard do Kez fortalece o Mark do parry do Shodo Sai com stun e crítico extra (fonte: aghs_desc), o que pune qualquer aliado tentando engajar ele sem plano; Guardian Greaves do Chen (21,6 min) chega bem antes do Black King Bar do Kez (25,2 min), então a janela de controle do time existe, só é curta.
- como jogar: controle o Kez antes do Black King Bar, depois disso é fuga e posicionamento, não troca de controle; não deixe o Chen sozinho no alcance do Grappling Claw.
- fonte: pro_dados/chen.json; pro_dados/kez.json; constants_abilities.json (kez_raptor_dance, kez_grappling_claw, kez_echo_slash, chen_penitence, chen_holy_persuasion); aghs_desc.

## Contra Abaddon (abaddon)
- placar: 21V/45 jogos (46,7%) a favor do Chen, fonte `pro_dados/chen.json`. 2ª maior desvantagem.
- por que importa: Abaddon joga pos 3, 4 e 5 em pro, então às vezes cruza lane direta com o Chen e às vezes não; o recorte de liga do dataset dele (gpm 551, lh10 50) mostra uma build de carry/pos 1 mais do que suporte, o que já é um sinal de que esse confronto normalmente nasce de Abaddon puxando farm livre, não de troca de controle.
- janelas: Abaddon fecha Phase Boots cedo (6,5 min, 609 partidas) pra alcançar lane; o nível 6 dá Borrowed Time (cd 85-65s), que neutraliza qualquer combo isolado de Penitence + aliado batendo, porque todo dano recebido vira cura por até 6s. Em item ele chega em Radiance aos 16,3 min (552 partidas) numa fatia das partidas, bem antes do Guardian Greaves do Chen (21,6 min).
- o que ele faz com você: Aphotic Shield (cd 12-6s) dispela o próprio Abaddon ou aliado e absorve até 210 de dano, cobrindo exatamente o tipo de dano mágico de curto alcance que o Chen aplica com Penitence; Death Coil machuca o Chen e cura o Abaddon ao mesmo tempo, com ele perdendo vida também, então em troca de 1x1 ele costuma sair na frente por causa do sustain.
- o que você faz com ele: Penitence ainda desacelera o Abaddon fora do Borrowed Time; Holy Persuasion rouba creep perto da lane dele, cortando o farm que sustenta a build de Radiance.
- itens que viram: o Aghanim's Shard do Abaddon devolve 75% do dano absorvido pelo Aphotic Shield aos inimigos próximos (fonte: aghs_desc), o que pune o Chen parado perto dele tentando curar o grupo; Guardian Greaves do Chen não segura isso porque é dano de retorno instantâneo, não um debuff.
- como jogar: não gaste o combo do time em cima do Abaddon logo depois que ele ativar Borrowed Time (dura até 6s); force ele a gastar Aphotic Shield cedo, antes de precisar realmente, pra reduzir a sobrevida dele na troca seguinte.
- fonte: pro_dados/chen.json; pro_dados/abaddon.json; constants_abilities.json (abaddon_borrowed_time, abaddon_aphotic_shield, abaddon_death_coil, chen_penitence, chen_holy_persuasion); aghs_desc.

## Contra Gyrocopter (gyrocopter)
- placar: 32V/66 jogos (48,5%) a favor do Chen, fonte `pro_dados/chen.json`. 3ª maior desvantagem.
- por que importa: Gyrocopter é pos 1 quase sempre, carry que não compartilha lane com o Chen, mas tem no kit a ferramenta que mais ameaça especificamente a Holy Persuasion: uma AoE de ataque automático. Farma muito rápido (gpm 643, lh10 62, nível final 21).
- janelas: cedo é farm isolado. O divisor chega no nível 6 com Flak Cannon, mas o item que de fato muda a janela é o Aghanim's Scepter, mediana 18,5 min (767 partidas), cedo pra padrão de pos 1, dando o Side Gunner que soma ataque extra em área; Black King Bar só sai depois, aos 24,6 min (535 partidas).
- o que ele faz com você: Flak Cannon (cd 26-20s, até 7 ataques) acerta todas as unidades inimigas num raio de 1.250, o que inclui os creeps roubados pela Holy Persuasion junto com o Chen e os aliados, apagando o corpo extra do suporte em segundos; Call Down (cd 90-60s) soma até 500 de dano em área com slow, cobrindo retirada ou entrada de luta.
- o que você faz com ele: Penitence desacelera o Gyrocopter, que não tem blink nem dash, só velocidade de ataque; Holy Persuasion ainda rouba creep perto da jungle que ele usaria pra farmar, mas o corpo roubado dura pouco debaixo de Flak Cannon.
- itens que viram: o Aghanim's Shard do Gyrocopter faz o Homing Missile disparar Rocket Barrage constante numa área de 700 (fonte: aghs_desc), somando ainda mais dano em área sobre qualquer grupo de unidades, Persuasion incluída; Guardian Greaves do Chen ajuda a sobreviver ao Flak Cannon, mas não evita a perda dos creeps roubados, que morrem rápido de qualquer jeito.
- como jogar: não agrupe os creeps da Persuasion perto do Gyrocopter depois do nível 6, ele apaga o grupo inteiro com Flak Cannon num combo só; jogue a Holy Persuasion mais pra controle de visão e corpo de bloqueio do que pra dano sustentado contra esse confronto especificamente.
- fonte: pro_dados/chen.json; pro_dados/gyrocopter.json; constants_abilities.json (gyrocopter_flak_cannon, gyrocopter_call_down, chen_penitence, chen_holy_persuasion); aghs_desc.
