---
id: confrontos-winter_wyvern
heroi: Winter Wyvern
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/winter_wyvern.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/windrunner.json
- dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/lion.json
- dota-hub-conteudo-novo/pro_dados/dark_willow.json
- dota-hub-conteudo-novo/pro_dados/abyssal_underlord.json
- dota-hub-conteudo-novo/pro_dados/alchemist.json
- dota-hub-conteudo-novo/pro_dados/zuus.json
- dota-hub-conteudo-novo/pro_dados/night_stalker.json
- dota-hub-conteudo-novo/pro_dados/keeper_of_the_light.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Como foi montada essa lista

Winter Wyvern aparece quase só como suporte de trilane em pro: lh10 mediano de 7 e GPM de 307 no resumo (pro_dados/winter_wyvern.json), perfil baixo pra carry. Os 13 oponentes abaixo vêm de quatro critérios: os 6 com mais jogos de pro contra ela (`winter_wyvern.json`, campo `confrontos`); os suportes de pos 4/5 que mais aparecem contra ela, porque são rivais de função direta; os 2-3 matchups de maior vantagem com 30+ jogos; e os 2-3 de maior desvantagem com 30+ jogos. Um detalhe mecânico corre por trás de quase todo mundo aqui: Winter's Curse deixa o alvo "imune a todo dano de inimigos, com exceção do dano da própria Winter Wyvern" (`constants_abilities.json`, winter_wyvern_winters_curse). Isso quer dizer que forçar todo mundo a bater no alvo não causa dano de verdade, quem mata é só o ataque dela, turbinado por Arctic Burn. Isso aparece em quase todo "o que você faz com ele" abaixo.

## Contra Hoodwink (hoodwink)
- placar: 78 vitórias em 144 jogos de pro, 54,2% (pro_dados/winter_wyvern.json, confrontos).
- por que importa: é o oponente com mais jogos de pro contra ela (144) e joga a mesma função: as duas são suporte de trilane pos 4/5, então entram na mesma lane quase toda partida.
- janelas: até 12 min as duas só fazem setup de lane (Arcane Boots da Hoodwink aos 12:12, mediana de 2.147 jogos; Magic Wand da WW aos 8:30, 812 jogos). Dos 20 aos 26 min as duas ganham o remate de meio de jogo quase junto: Hoodwink fecha o Aghanim's Shard aos 23:48 (1.224 jogos) e o Force Staff aos 26:06 (1.061); WW fecha o Blink aos 23:00 (709) e o Glimmer Cape aos 24:06 (375). Depois dos 26 min, se a Hoodwink ficar livre pra carregar o Sharpshooter por até 3s, ela ameaça matar a WW de até 3.000 de distância.
- o que ele faz com você: Bushwhack trava quem estiver perto de árvore por até 2,1s (CD de 12 a 15s) pra abrir o combo do time dela; Sharpshooter (sem bkbpierce) faz até 1.350 de dano num tiro só, o suficiente pra deletar a WW sozinha se ela ficar isolada e visível.
- o que você faz com ele: Winter's Curse na Hoodwink trava ela no lugar; o dano de quem for forçado a bater nela não conta, só o da própria WW mata, então o combo rende arrastando o Arctic Burn ligado durante a troca. O Scurry (velocidade bônus, movimento fantasma e tree-walking) ainda deixa a Hoodwink escapar do combo se ela reagir rápido, mesmo sem dar evasão.
- itens que viram: Blink da WW fecha a distância antes da Hoodwink conseguir carregar o Sharpshooter; o Aghanim's Shard dela (Hunter's Boomerang, bumerangue que volta e aplica lentidão e vulnerabilidade a dano mágico) dá um poke que a WW só responde kitando com o Arctic Burn.
- como jogar: na lane, não fique parada perto de árvore e force a Hoodwink a gastar o Scurry cedo. No meio de jogo, não deixe ela ficar 3s livre e visível; se o time inimigo abrir espaço pra ela carregar o Sharpshooter em alguém, Cold Embrace nesse aliado bloqueia o dano físico mas não o mágico do tiro, então o importante é negar a visão antes do cast terminar.
- fonte: pro_dados/winter_wyvern.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, hoodwink_scurry, winter_wyvern_winters_curse); aghs_desc (Hoodwink shard)

## Contra Shadow Fiend (nevermore)
- placar: 66 vitórias em 138 jogos de pro, 47,8%.
- por que importa: 2º oponente com mais jogos de pro contra ela, mesmo sem dividir lane (ele é mid pos 1, ela é suporte de trilane). Aparece no mesmo draft o tempo todo porque toda comp com carry mid forte de burst mágico cria essa dupla.
- janelas: até 10 min Shadow Fiend já está puxando itens de farm rápido (Power Treads aos 5:54, 3.701 jogos; Mask of Madness aos 10:12, 2.340), enquanto a WW ainda está no Magic Wand (8:30). Dos 13 aos 14 min ele fecha Yasha (13:18) e Dragon Lance (14:00) e passa a caçar kill sozinho. A WW só alcança poder de decisão em fight com o Blink aos 23:00, quase 10 minutos depois do primeiro pico dele.
- o que ele faz com você: Requiem of Souls (até 20 almas, sem bkbpierce) causa medo de até 2,15s em quem estiver perto dele quando solta o ult; como a WW não tem disable próprio contra isso, ela só sobrevive se já estiver longe ou com Cold Embrace pronta num aliado.
- o que você faz com ele: Winter's Curse nele trava o Shadow Fiend no lugar, mas ele continua podendo lançar Requiem (é centrado nele mesmo, não precisa se mover), então a curse não impede o ult, só impede ele de fugir depois. O valor real é forçá-lo a ficar parado enquanto o resto do time dela finaliza.
- itens que viram: se ele fechar o BKB (25:12, 1.554 jogos) antes da curse, o bkbpierce da Winter's Curse ainda funciona nela, mas a Cold Embrace não impede o próprio Requiem de acontecer primeiro.
- como jogar: trave ele com vara/ward antes dele puxar o Requiem num grupo; se ele já tiver level 6 e os itens de burst, não entre em visão dele sem reagente de escape. Guarde o Winter's Curse pra quando ele já tiver gastado o ult, não antes.
- fonte: pro_dados/winter_wyvern.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_requiem, winter_wyvern_winters_curse)

## Contra Rubick (rubick)
- placar: 58 vitórias em 126 jogos de pro, 46,0%.
- por que importa: 3º em jogos de pro (126) e mesma função dela na trilane (suporte pos 4/5), só que o kit dele rouba literalmente o dela: Spell Steal copia a última magia que ela lançar perto dele.
- janelas: as duas evoluem parecido até os 20 min (Arcane Boots dele aos 10:18, 3.072 jogos; Blink dele aos 21:36, 2.782). A partir dos 22 min o Rubick junta Aether Lens (22:54, 1.103) e o Scepter (27:24, 1.119, rouba 2 magias em vez de 1 e aumenta o alcance de roubo), enquanto a WW ainda está fechando o próprio Blink (23:00) e Glimmer Cape (24:06).
- o que ele faz com você: se o Rubick tiver visão dela lançando Winter's Curse ou Cold Embrace, ele rouba a magia (Spell Steal tem bkbpierce) e pode usar a mesma curse ou cura contra o time dela nos próximos 3 a 5 min (duração sobe com o nível).
- o que você faz com ele: o combo clássico dela (Blink + Winter's Curse) ainda funciona nele normalmente, e como o Spell Steal só copia a última magia lançada, lançar Cold Embrace num aliado antes de engajar evita deixar a curse disponível pra ele roubar.
- itens que viram: o Scepter do Rubick upgrada a magia roubada pra versão com Scepter, então se ele pegar a Winter's Curse dela com Scepter ativo, a versão dele vem mais forte (mais attack speed no efeito). É um dos poucos matchups onde o próprio ult dela pode virar arma do time inimigo.
- como jogar: não gaste Winter's Curse ou Cold Embrace perto de onde o Rubick consegue ver o cast sem necessidade; se puder, lance a magia decisiva fora do alcance de visão dele e só depois entre na troca.
- fonte: pro_dados/winter_wyvern.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal); aghs_desc (Rubick scepter)

## Contra Windranger (windrunner)
- placar: 52 vitórias em 113 jogos de pro, 46,0%.
- por que importa: 4º em jogos de pro (113); ela também é utilidade flexível e disputa a mesma janela de poke e pick mágico que a WW.
- janelas: Windranger sai na frente cedo com Power Treads aos 7:12 (1.610 jogos) e Maelstrom aos 13:24 (1.452), period em que ela já ameaça kill com Shackleshot. A WW só fecha Arcane Boots aos 12:18 e ainda não tem combo de kill pronto. Dos 18 aos 24 min a Windranger soma Mjollnir (18:18) e BKB (24:24, 1.059), period que coincide com o Blink da WW (23:00): quem inicia o engajamento primeiro leva vantagem.
- o que ele faz com você: Shackleshot (CD 10-16s) prende a WW numa unidade ou árvore atrás dela, e o Windrun dá evasão total de 100% por até 6s pra ela fugir do combo depois de errar o Shackleshot.
- o que você faz com ele: Winter's Curse na Windranger ignora o Windrun (bkbpierce, e o Windrun não dá imunidade a magia, só evasão contra ataque físico), então mesmo ela correndo a curse ainda prende no lugar.
- itens que viram: Focus Fire (bkbpierce) da Windranger rouba attack speed pra abater alvo único rápido, perigoso se ela focar a WW squishy; o BKB dela aos 24:24 blinda contra o Splinter Blast e a Cold Embrace só continua funcionando porque tem bkbpierce.
- como jogar: evite ficar numa linha reta com árvore ou unidade atrás na frente da Windranger antes dos 16 min (CD baixo do Shackleshot no nível 4). Depois que ela tiver BKB, a única forma de travar ela ainda é a Winter's Curse.
- fonte: pro_dados/winter_wyvern.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_windrun, windrunner_focusfire, winter_wyvern_winters_curse)

## Contra Ember Spirit (ember_spirit)
- placar: 49 vitórias em 108 jogos de pro, 45,4%.
- por que importa: 5º em jogos de pro (108), mid agressivo (pos 2) que não divide lane com ela mas ameaça o time dela inteiro com o Sleight of Fist em área.
- janelas: Ember farma rápido com Bottle (1:30) e sai do laning com Phase Boots aos 9:06 (2.173 jogos); aos 19:12 ele já tem Kaya (1.666) e começa a abrir espaço com Fire Remnant. A WW só ganha resposta real aos 23:00 com o Blink; antes disso, qualquer aliado isolado dela é alvo de Sleight of Fist.
- o que ele faz com você: Sleight of Fist (bkbpierce) ataca tudo num raio que cresce de 250 a 550 com o nível, bate em quem estiver perto da WW mesmo sem ela ser o alvo principal; Searing Chains prende até 2 inimigos por até 2,75s (sem bkbpierce).
- o que você faz com ele: a mobilidade de Fire Remnant dificulta prender ele com o slow de Splinter Blast (28 a 40%), mas Winter's Curse (bkbpierce) ainda trava ele no lugar mesmo depois de um remnant, porque a curse não é um slow, é um freeze.
- itens que viram: o Aghanim's Shard dele (25:18, 1.882 jogos) recarrega uma carga de Fire Remnant quando mata um herói perto, o que o deixa ainda mais difícil de isolar depois de uma kill; a Cold Embrace continua sendo o jeito mais simples de tirar um aliado focado pelo combo dele.
- como jogar: não agrupe o time perto de onde o Ember consegue usar Sleight of Fist; guarde a curse pra pegar ele fora de um remnant de fuga, não durante o dash.
- fonte: pro_dados/winter_wyvern.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_sleight_of_fist, ember_spirit_searing_chains, ember_spirit_fire_remnant, winter_wyvern_winters_curse); aghs_desc (Ember Spirit shard)

## Contra Tiny (tiny)
- placar: 54 vitórias em 102 jogos de pro, 52,9%.
- por que importa: 6º em jogos de pro (102) e um dos poucos matchups do top 6 onde a WW já sai na frente; ele também não divide lane fixa com ela (carry pos 1), mas o combo Toss + Avalanche é um dos poucos stuns que ignoram a voadora dela em pleno ar.
- janelas: Tiny fecha Blink aos 15:54 (2.546 jogos), bem antes da WW (23:00), e já ameaça combo de pick desde o meio do laning. Ele estabiliza o poder com BKB aos 26:42 (1.148), quase na mesma janela em que a WW já tem Blink e Glimmer Cape prontos pra responder.
- o que ele faz com você: Toss (CD 11-20s) agarra a unidade mais perto num raio de 300 e joga em quem ele quiser, e o combo com Avalanche (CD 14-23s) soma até 360+360 de dano e prende por até 1,5s; nenhuma das duas tem bkbpierce.
- o que você faz com ele: Winter's Curse nele ignora o bônus de armadura e dano do Grow, porque é controle, não dano direto; como ele perde 35% de velocidade de ataque no Grow em troca de dano bruto, ele depende de poucos hits certeiros, e travá-lo tira justamente essa janela.
- itens que viram: o Shadow Amulet dele (17:18, 1.122 jogos) dá invisibilidade pra iniciar o combo; a WW não tem detecção própria, então precisa de Sentry/Dust do time pra não ser pega de surpresa.
- como jogar: mantenha distância de unidades soltas perto dela (o Toss precisa agarrar algo a 300 de raio); se o Tiny errar o combo inicial, ele fica sem follow-up rápido e é um bom momento pra fechar a curse nele.
- fonte: pro_dados/winter_wyvern.json; pro_dados/tiny.json; constants_abilities.json (tiny_toss, tiny_avalanche, tiny_grow, winter_wyvern_winters_curse)

## Contra Lion (lion)
- placar: 47 vitórias em 96 jogos de pro, 49,0%.
- por que importa: suporte pos 4/5 com mais jogos de pro contra ela depois de Hoodwink e Rubick (96), e os dois são o exemplo mais direto de "suporte que mata sozinho": Finger of Death contra Winter's Curse.
- janelas: Lion sai da lane com Tranquil Boots aos 7:24 (2.539 jogos) e já tem Finger of Death disponível desde o nível 6, bem mais cedo que o combo completo da WW. Os dois convergem pro Blink quase junto: Lion aos 18:12 (2.412 jogos), WW aos 23:00, uma vantagem de quase 5 minutos pra ele iniciar primeiro.
- o que ele faz com você: Finger of Death faz até 850 de dano num cast só (sem bkbpierce), o suficiente pra matar a WW squishy de uma vez se ela não tiver Cold Embrace ativa ou algum bloqueio nela mesma.
- o que você faz com ele: Winter's Curse nele ignora o Mana Drain (ela não depende de canal pra travar, é instantâneo) e trava ele antes de carregar o Finger of Death, já que o freeze impede o movimento mas ele ainda consegue castar; a corrida é por quem reage primeiro.
- itens que viram: o Aghanim's Shard do Lion (25:48, 723 jogos) dá imunidade a debuff durante o Mana Drain, útil contra o slow da WW; já o Aghanim's Shard da WW reduz o cooldown da Cold Embrace, o que ajuda a sustentar um aliado que o Lion focou primeiro.
- como jogar: trate o Lion como ameaça de kill a partir do nível 6, não só depois dos itens; sempre guarde um dispel ou a Cold Embrace pronta quando ele estiver com Finger of Death disponível (CD de 110 a 30s conforme o nível).
- fonte: pro_dados/winter_wyvern.json; pro_dados/lion.json; constants_abilities.json (lion_finger_of_death, lion_mana_drain, winter_wyvern_winters_curse, winter_wyvern_cold_embrace); aghs_desc (Lion shard, Winter Wyvern shard)

## Contra Dark Willow (dark_willow)
- placar: 57 vitórias em 95 jogos de pro, 60,0%.
- por que importa: 2ª maior amostra entre os suportes pos 4/5 dela (95 jogos) e também uma das 3 maiores vantagens da WW com 30+ jogos; as duas competem pelo mesmo papel de pick-off isolado no time.
- janelas: Dark Willow fecha Cyclone aos 21:12 (1.120 jogos) e Blink aos 25:54 (1.023), period parecida com o combo da WW (Blink 23:00, Glimmer Cape 24:06). A diferença é que o combo dela (Cursed Crown) tem 4s de atraso antes do stun, o que dá tempo da WW reagir ou fugir.
- o que ela faz com você: Shadow Realm deixa a Dark Willow untargetable por até 5s; nessa janela ela não pode ser selecionada como alvo de Winter's Curse, então o timing certo pra WW é antes dela ativar ou depois do ataque que encerra o efeito.
- o que você faz com ela: Winter's Curse nela funciona normal fora do Shadow Realm e ignora o Bramble Maze (que é root territorial, não imunidade a magia); como ela é tão ou mais frágil que a WW, a troca de pick tende a favorecer quem iniciar com curse primeiro.
- itens que viram: o Aghanim's Shard da Dark Willow (29:12, 554 jogos) cria brambles extras ao redor do Cursed Crown, bom pra zona de controle, mas não ajuda ela a escapar de uma curse já fechada.
- como jogar: não gaste o combo nela durante o Shadow Realm; espere ela atacar (o que encerra o efeito) ou pegue ela antes de ativar.
- fonte: pro_dados/winter_wyvern.json; pro_dados/dark_willow.json; constants_abilities.json (dark_willow_shadow_realm, dark_willow_cursed_crown, dark_willow_bramble_maze, winter_wyvern_winters_curse); aghs_desc (Dark Willow shard)

## Contra Underlord (abyssal_underlord)
- placar: 44 vitórias em 67 jogos de pro, 65,7%. Maior vantagem da WW entre os matchups com 30+ jogos.
- por que importa: mesmo sem dividir lane (ele é pos 3 offlane/iniciador), é o matchup mais favorável dela com amostra relevante: o kit dele depende de aura e zona, não de burst direto, então ele não tem resposta rápida pro combo dela.
- janelas: Underlord estabiliza com Soul Ring aos 7:12 (1.676 jogos) e junta tankiness com Ring of Tarrasque (16:00) e Pipe (17:30). O Scepter dele só sai aos 23:54 (1.186 jogos), quase no mesmo minuto do Blink da WW (23:00): ela ameaça iniciar antes dele conseguir reposicionar o time com o Fiend's Gate.
- o que ele faz com você: Pit of Malice prende numa área por até 1,8s a cada 3,6s enquanto durar a cova (12s), mas é uma ameaça de zona, não de kill rápido; a Atrophy Aura reduz dano de ataque base ao redor, o que afeta pouco a WW porque ela não depende do auto-attack fora do Arctic Burn.
- o que você faz com ele: o Arctic Burn queima 4 a 10% da vida atual por segundo enquanto ativo, e como o Underlord é construído pra ter HP alto (Ring of Tarrasque, Vanguard), esse percentual rende dano absoluto grande justamente contra ele; Winter's Curse trava ele no lugar antes dele usar o Dark Rift pra fugir pro portal.
- itens que viram: o Aghanim's Shard dele (21:48, 763 jogos) permite mirar o Firestorm em aliado, útil pra sustentar push, mas não ajuda a escapar da curse; já o Blink da WW fecha a distância antes dele terminar os 4 a 6s de atraso do Dark Rift pra teleportar o time embora pelo portal (o CD de verdade da ultimate é de 90 a 110s, então não é algo que ele repete na mesma troca).
- como jogar: force a troca cedo, antes dele ter HP e Pipe suficientes pra tanquear o time todo; puxe o Winter's Curse assim que ele entrar no alcance, porque quanto mais ele crescer em HP, mais o Arctic Burn rende em cima dele.
- fonte: pro_dados/winter_wyvern.json; pro_dados/abyssal_underlord.json; constants_abilities.json (abyssal_underlord_pit_of_malice, abyssal_underlord_atrophy_aura, abyssal_underlord_dark_rift, winter_wyvern_arctic_burn, winter_wyvern_winters_curse); aghs_desc (Underlord shard)

## Contra Alchemist (alchemist)
- placar: 21 vitórias em 33 jogos de pro, 63,6%. Amostra ainda enxuta (33 jogos), mas é a 2ª maior vantagem dela entre matchups com 30+.
- por que importa: é o caso clássico de dois heróis que raramente se enfrentam direto na lane (Alchemist é pos 1 solo, WW é suporte de trilane) mas que importam muito um pro outro, porque o ult dela é uma das poucas respostas rápidas pra um Alchemist que já farmou Radiance e Scepter.
- janelas: Alchemist farma absurdamente rápido (maior GPM da lista, 768) e fecha Radiance aos 13:54 (672 jogos de 796) e Scepter aos 22:24 (612), quase junto com o Blink da WW (23:00). Antes dos 14 min ele já pode estar puxando creeps do jungle com Chemical Rage; depois dos 22, ele já tem o Scepter pra abrir pra aliado também.
- o que ele faz com você: Unstable Concoction faz até 360 de dano em área e até 3,2s de stun se carregado o máximo (5s), suficiente pra abrir um gank rápido contra uma WW sem escape pronto.
- o que você faz com ele: Winter's Curse tem bkbpierce, então mesmo com o BKB dele (25:06, 443 jogos) ela ainda trava o Alchemist; como ele depende de ficar vivo e batendo pra valer o investimento em itens, travá-lo no meio de um push ou farm resolve a luta sem o time dela precisar vencer ele no dano bruto.
- itens que viram: o Scepter dele (Greevil's Greed) passa os upgrades de Scepter pra um aliado, o que pode fortalecer outro herói do time inimigo de surpresa; a Cold Embrace continua sendo o jeito mais direto de tirar um aliado focado pelo Unstable Concoction.
- como jogar: não deixe o Alchemist cair livre numa lane/jungle sem visão por muito tempo; assim que ele tiver Radiance e Scepter, trate ele como prioridade de curse antes que o time dela precise trocar dano direto com ele.
- fonte: pro_dados/winter_wyvern.json; pro_dados/alchemist.json; constants_abilities.json (alchemist_unstable_concoction, winter_wyvern_winters_curse); aghs_desc (Alchemist scepter)

## Contra Zeus (zuus)
- placar: 13 vitórias em 42 jogos de pro, 31,0%. Maior desvantagem da WW entre os matchups com 30+ jogos.
- por que importa: não divide lane fixa com ela (mid pos 2), mas é o pior matchup dela no banco de dados inteiro: o kit dele é poke e burst global, exatamente o que uma suporte squishy sem spell immunity própria mais teme.
- janelas: Zeus sai do laning com Arcane Boots aos 9:42 (1.073 jogos) e já ameaça poke em área com Arc Lightning. Aos 23:18 (687 jogos) ele fecha o Scepter, mas o perigo real dele não depende de item: o Thundergod's Wrath (CD 130s) acerta todos os heróis inimigos no mapa, visíveis ou não, e cresce de 300 pra 650 de dano com o nível.
- o que ele faz com você: cada ataque ou magia dele queima 3,45% da vida atual do alvo (Static Field), e o Lightning Bolt pode ser lançado no chão pra acertar o inimigo mais próximo mesmo sem vê-lo, o que anula o esconderijo que o Glimmer Cape daria contra outros nukers.
- o que você faz com ele: Winter's Curse nele ainda funciona (bkbpierce) e trava o combo dele a tempo do time fechar, mas como ela não alcança ele de longe antes do Blink (23:00), o Zeus tem quase 10 minutos de poke livre antes dela conseguir responder de verdade.
- itens que viram: o Aghanim's Shard dele (16:06, 472 jogos) dá ataques com Arc Lightning embutido, aumentando ainda mais o poke passivo; não existe item single-target que pare o Thundergod's Wrath, porque ele ignora posição e visibilidade.
- como jogar: jogue mais recuada contra um Zeus com ult pronta, TP fica mais valioso que de costume; o foco deve ser matar ele rápido assim que ele aparecer isolado, porque esperar só deixa ele poker o time à distância.
- fonte: pro_dados/winter_wyvern.json; pro_dados/zuus.json; constants_abilities.json (zuus_static_field, zuus_thundergods_wrath, zuus_lightning_bolt, winter_wyvern_winters_curse); aghs_desc (Zeus shard)

## Contra Night Stalker (night_stalker)
- placar: 11 vitórias em 32 jogos de pro, 34,4%. 2ª maior desvantagem dela com 30+ jogos (amostra ainda justa, 32 jogos).
- por que importa: é o exemplo mais parecido com "Alchemist x Morphling" nessa lista: Night Stalker é pos 3 offlane/jungle e quase nunca divide lane com a WW, mas ele é feito pra caçar suporte isolado à noite, exatamente o papel dela no mapa.
- janelas: Night Stalker junta Phase Boots aos 7:18 (642 jogos) e Blink aos 17:06 (578), bem antes do combo da WW (23:00). O pico real dele não é de item, é de relógio: a cada ciclo de noite ele pode castar Darkness (CD 130-140s, 30s de duração) e virar praticamente outro herói, com Void durando até 3,4s de stun/slow contra 1,25s de dia.
- o que ele faz com você: Crippling Fear silencia por até 6s à noite (CD 15-30s), o que tira justamente a Winter's Curse e a Cold Embrace da WW bem na hora do gank; sem as duas, ela não tem resposta mágica nenhuma contra o kit dele.
- o que você faz com ele: fora da janela de silêncio, Winter's Curse trava ele (bkbpierce) mesmo com o bônus de dano e velocidade da Darkness; o problema é que ela raramente consegue reagir antes do silêncio acertar primeiro, já que o Void tem CD de só 8 a 11s.
- itens que viram: o Aghanim's Shard dele (20:48, 243 jogos) faz o Void afetar área, dificultando ainda mais escapar em grupo; o item mais relevante do lado da WW é Glimmer Cape, pra sumir antes do silêncio alcançar, não depois.
- como jogar: evite ficar sozinha ao anoitecer sem visão de onde o Night Stalker está; sempre tenha TP ou Force Staff de aliado pronto quando o relógio virar noite perto do meio de jogo.
- fonte: pro_dados/winter_wyvern.json; pro_dados/night_stalker.json; constants_abilities.json (night_stalker_void, night_stalker_darkness, night_stalker_crippling_fear, winter_wyvern_winters_curse); aghs_desc (Night Stalker shard)

## Contra Keeper of the Light (keeper_of_the_light)
- placar: 17 vitórias em 47 jogos de pro, 36,2%. 3ª maior desvantagem dela com 30+ jogos.
- por que importa: às vezes divide lane com ela e às vezes não, mas em qualquer um dos dois casos ele poka de mais longe do que ela consegue responder, o que explica o placar ruim.
- janelas: Keeper of the Light sai cedo com Urn of Shadows aos 4:54 (483 jogos) e Diadem aos 7:48 (454), e já farma rápido por causa do Illuminate em linha. Ele junta Holy Locket aos 15:18 (629) pra sustentar o carry, enquanto a WW ainda está fechando o Arcane Boots (12:18). Até os 23 min, quando a WW finalmente tem Blink, o KotL já pokou o laning inteiro sem precisar chegar perto.
- o que ele faz com você: Illuminate (canalizado até 3s) causa até 500 de dano numa linha de 1.550 de alcance, e o Blinding Light dá 45% de chance de errar ataque por 4s, o que corta justamente o dano de auto-attack que sustenta o Arctic Burn da WW.
- o que você faz com ele: Winter's Curse nele funciona normal (ele não tem spell immunity própria), mas como o alcance de Illuminate é maior que qualquer coisa que a WW consiga alcançar sem Blink, ela precisa fechar a distância primeiro pra ameaçar ele de volta.
- itens que viram: o Aghanim's Shard dele aumenta a cura do Illuminate quando usado em Spirit Form remoto, o que mantém o time dele saudável à distância sem precisar arriscar perto da curse da WW.
- como jogar: evite trocar poke direto com um KotL que já tem Diadem; o jeito de vencer esse matchup é fechar a distância rápido com o Blink e focar ele antes dele conseguir kitar com o alcance de 1.550 do Illuminate.
- fonte: pro_dados/winter_wyvern.json; pro_dados/keeper_of_the_light.json; constants_abilities.json (keeper_of_the_light_illuminate, keeper_of_the_light_blinding_light, winter_wyvern_winters_curse); aghs_desc (Keeper of the Light shard)
