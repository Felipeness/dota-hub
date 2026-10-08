---
id: confrontos-ember_spirit
heroi: Ember Spirit
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/queenofpain.json
- dota-hub-conteudo-novo/pro_dados/puck.json
- dota-hub-conteudo-novo/pro_dados/void_spirit.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/sniper.json
- dota-hub-conteudo-novo/pro_dados/witch_doctor.json
- dota-hub-conteudo-novo/pro_dados/sven.json
- dota-hub-conteudo-novo/pro_dados/wisp.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://dota2.fandom.com/wiki/Ember_Spirit
---

## Contra Storm Spirit (storm_spirit)
- placar: Ember Spirit venceu 222 de 420 partidas pro (52,9%). É o oponente que mais aparece na base de confrontos do Ember.
- por que importa: maior volume de jogos pro contra ele (420) e o espelho mais direto de mid: os dois são mágicos ricos em mobilidade, saem de bottle e vivem de flash farm pra chegar rápido no meio jogo.
- janelas: os dois compram bottle quase junto (Ember 1,5 min, Storm 1,4 min, pro_dados/storm_spirit.json). Até os 10 min Storm tenta zonear com Static Remnant e Overload à distância, mas Flame Guard absorve 70% desse dano mágico até estourar a barreira (60 a 300 de dano conforme o nível, constants_abilities.json), então o poke dele rende menos do que parece. Dos 13 aos 20 min Storm sobe Kaya (13,7 min) e começa a rotear o mapa sozinho com Ball Lightning; Ember só rota depois de plantar um Fire Remnant, então até ter Aghanim's Shard (25,3 min, que recarrega carga de remnant a cada herói inimigo morto perto) ele fica um pouco mais preso ao mapa do que o Storm. Black King Bar sai quase junto pros dois (Ember 27,1 min, Storm 26,1 min): depois disso vira corrida de quem acerta o combo primeiro.
- o que ele faz com você: Ball Lightning ignora dano físico no trajeto mas gasta mana proporcional à distância, então Storm fica vulnerável logo depois de uma viagem longa; Electric Vortex puxa você pra cima dele (tether de 1200) antes do combo. Como o dano dele é quase todo mágico (Static Remnant, Overload), Flame Guard reduz bastante o que ele consegue aplicar numa troca curta.
- o que você faz com ele: Searing Chains prende no lugar, é raiz e não stun (constants_abilities.json descreve o efeito como anchoring them in place), e raiz bloqueia a maior parte das magias de mobilidade, incluindo o Ball Lightning: se você acertar a chain primeiro, ele fica preso no lugar sem conseguir fugir voando. Sleight of Fist atravessa Black King Bar (bkbpierce: yes, constants_abilities.json) e ainda retorna sozinho pro ponto de partida, então mesmo sem Fire Remnant pronto você tem uma saída curta depois do dash.
- itens que viram: seu Black King Bar não impede a raiz da Searing Chains nele (ela é sua, não dele), mas tira o Electric Vortex e o burst mágico do combo dele; o Aghanim's Scepter dele faz a Electric Vortex puxar todo mundo num raio ao redor dele, não só você, então cuidado ao ficar perto de aliados sem BKB (o Shard dele não tem nada a ver com a Vortex, ele dá cargas de Overload pro time, aghs_desc).
- como jogar: force a troca logo depois de acertar a Searing Chains nele, antes dele conseguir carregar mana pra fugir voando; evite ficar parado tomando Static Remnant sem Flame Guard ativa, ela some rápido contra o combo mágico dele.
- fonte: pro_dados/ember_spirit.json; pro_dados/storm_spirit.json; constants_abilities.json (ember_spirit_searing_chains, ember_spirit_sleight_of_fist, ember_spirit_flame_guard, storm_spirit_ball_lightning, storm_spirit_electric_vortex).

## Contra Tiny (tiny)
- placar: Ember Spirit venceu 233 de 395 partidas pro (59,0%). Segundo oponente mais comum da base, o carry que mais aparece contra ele.
- por que importa: segundo maior volume de jogos pro (395) mesmo raramente dividindo lane (Tiny é catalogado como pos 1), porque os dois competem pelo mesmo papel de iniciador físico explosivo no meio jogo.
- janelas: Tiny sai de Blink Dagger aos 15,9 min (pro_dados/tiny.json) e BKB aos 26,7 min; Ember sai de Phase Boots aos 9,1 min e BKB aos 27,1 min. Até os 16 min você farma mais rápido (LH aos 10 min: 53 contra 44 do Tiny), então chega na janela de blink dele já com Aghanim's Shard quase pronto (25,3 min). Dos 16 aos 26 min, com Grow nível 3 (nível 18, +165 de dano, +300 no Toss, constants_abilities.json) o Toss dele soma até 660 de dano mágico sozinho (360 base mais 300 do Grow): é a pior janela pra você levar o combo parado.
- o que ele faz com você: Avalanche estoura em área de até 370 de raio com até 360 de dano mágico no nível 4, seguido de Toss (grab radius 300) que te lança até 360 de dano base mais o bônus de Grow. O combo é todo mágico, então Flame Guard absorve 70% do impacto se já estiver ativa quando o Avalanche cair.
- o que você faz com ele: Tiny não tem blink próprio antes de comprar Dagger (quase 16 min na mediana), então antes disso ele é parado e fácil de fechar com Sleight of Fist (atravessa BKB, retorna sozinho); Searing Chains o prende no lugar e corta a rota dele até o próximo camp.
- itens que viram: seu Black King Bar anula o combo Avalanche mais Toss (os dois são mágicos, constants_abilities.json); seu Aghanim's Shard garante carga extra de remnant toda vez que ele ou um aliado dele morre perto, ajuda a manter a mobilidade na janela de blink dele.
- como jogar: antes dos 16 min ataque, Tiny não tem como fugir do seu gap close; depois do Dagger dele, não leve o combo parado, ative Flame Guard antes de entrar em alcance de Avalanche.
- fonte: pro_dados/ember_spirit.json; pro_dados/tiny.json; constants_abilities.json (ember_spirit_flame_guard, ember_spirit_sleight_of_fist, tiny_avalanche, tiny_toss, tiny_grow).

## Contra Rubick (rubick)
- placar: Ember Spirit venceu 188 de 371 partidas pro (50,7%, equilibrado). Terceiro oponente mais comum da base.
- por que importa: terceiro maior volume de jogos pro (371), suporte 4/5 que quase nunca divide lane com um mid, mas o risco não é a lane, é o Spell Steal roubando uma das suas magias ativas.
- janelas: Rubick sobe Arcane Boots cedo e sai de Blink Dagger por volta dos 21,6 min (pro_dados/rubick.json), bem depois do seu Phase Boots (9,1 min). Até ele ter visão e blink pra chegar perto, ele não consegue roubar nada seu; a partir dos 21 min, se ele pegar visão de um cast seu, ele carrega a magia robada até você morrer ou ele trocar de alvo.
- o que ele faz com você: Spell Steal copia a última magia que você lançou, dentro de alcance, e atravessa Black King Bar (bkbpierce: yes, constants_abilities.json). Searing Chains, Sleight of Fist e Flame Guard são todas ativas, então todas são roubáveis; se ele roubar a Sleight bem depois de você usar, ele ganha um dash físico que também atravessa BKB.
- o que você faz com ele: Rubick tem vida baixa fixa e nenhuma mobilidade própria antes do item; Searing Chains o prende (raiz, dura até 2,75s no nível 4) e Sleight of Fist entrega até 170 de dano bônus de herói nele sozinho, quase sempre kill garantido se pegar ele isolado antes do Blink Dagger dele.
- itens que viram: não existe item que bloqueie o roubo em si (Spell Steal ignora imunidade mágica), a defesa real é não gastar magia perto dele à toa; seu Aghanim's Shard não ajuda contra o roubo, mas garante carga de remnant se ele morrer perto de você depois de um pick errado.
- como jogar: gaste Searing Chains e Sleight só quando for pra matar, não pra zonear à toa perto de um Rubick livre; depois que ele gastar o roubo numa magia fraca, é a sua janela, Spell Steal recarrega em até 16s no nível 1.
- fonte: pro_dados/ember_spirit.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, ember_spirit_searing_chains, ember_spirit_sleight_of_fist).

## Contra Tusk (tusk)
- placar: Ember Spirit venceu 209 de 370 partidas pro (56,5%). Quarto oponente mais comum da base.
- por que importa: quarto maior volume de jogos pro (370), ganker clássico de 4/5 que gira o mapa com Ice Shards e Snowball; ameaça o Ember em rota mesmo sem dividir lane.
- janelas: Tusk sobe Blink Dagger por volta dos 19,0 min (pro_dados/tusk.json), bem depois do seu Phase Boots (9,1 min) e já perto do seu Aghanim's Shard (25,3 min). Até os 19 min ele ganka a pé com Ice Shards mais Snowball; seu Fire Remnant (disponível desde o nível 1) te dá mobilidade de reposicionar antes dele mesmo.
- o que ele faz com você: Ice Shards cria uma parede que corta sua rota de fuga ou de fire remnant se você estiver do lado errado; Walrus PUNCH atravessa Black King Bar (bkbpierce: yes, constants_abilities.json) e dá crítico de até 300% em cima do dano físico dele, o que machuca mesmo com seu BKB ativo.
- o que você faz com ele: Searing Chains prende ele pro combo (raiz, não atravessa BKB dele, então ele escapa se já tiver imunidade); Sleight of Fist atravessa o BKB dele e entrega dano de herói fixo independente da imunidade mágica dele.
- itens que viram: seu Black King Bar bloqueia o Snowball (stun mágico) e o dano do Ice Shards (também mágico, a parede em si não atordoa, só machuca e bloqueia quem atravessa), mas não o Walrus PUNCH, que é físico e atravessa imunidade; contra ele prefira abrir a luta com Sleight em vez de Searing Chains se ele já tiver BKB.
- como jogar: evite ficar parado perto de áreas abertas sem visão antes dos 19 min, o gank dele não avisa; depois do seu BKB (27,1 min) ele ainda machuca com o Walrus PUNCH, não ignore o dano físico dele achando que está imune.
- fonte: pro_dados/ember_spirit.json; pro_dados/tusk.json; constants_abilities.json (tusk_ice_shards, tusk_walrus_punch, ember_spirit_searing_chains, ember_spirit_sleight_of_fist).

## Contra Hoodwink (hoodwink)
- placar: Ember Spirit venceu 219 de 363 partidas pro (60,3%). Quinto oponente mais comum da base.
- por que importa: quinto maior volume de jogos pro (363), suporte com o maior winrate dele nos top 6 por volume: o controle dela depende de árvore por perto, e isso é fácil de evitar pra quem tem mobilidade própria.
- janelas: Hoodwink sobe Aghanim's Shard aos 23,8 min (pro_dados/hoodwink.json, dá um ataque novo de bumerangue que volta pro arco até ela, não é upgrade da Bushwhack, aghs_desc) e Force Staff aos 26,1 min, bem depois do seu Phase Boots (9,1 min) e já perto do seu Aghanim's Shard (25,3 min). Bushwhack sempre só funciona perto de árvore, com ou sem shard; fora de floresta, ela não tem como prender você.
- o que ela faz com você: Bushwhack estuna até 2,1 segundos e reduz sua visão a zero se você estiver perto de árvore, mas o raio é só 265 e precisa de alvo próximo a floresta; Scurry dá movimento phased e velocidade extra pra ela fugir depois, não serve pra iniciar.
- o que você faz com ele: Hoodwink tem vida baixa fixa; Searing Chains prende ela (raiz) fora do alcance de árvore, onde o Bushwhack dela não funciona, e Sleight of Fist fecha a distância rápido o bastante pra ela não conseguir recarregar Scurry a tempo.
- itens que viram: seu Black King Bar bloqueia o Bushwhack (stun mágico); seu Aghanim's Shard ajuda a manter pressão na rota dela repondo carga de remnant se ela ou aliado dela morrer perto.
- como jogar: não ande perto de árvore sem visão antes dos seus 25 min; depois disso, puxe a luta pra fora de floresta, ela perde o controle principal longe de árvore.
- fonte: pro_dados/ember_spirit.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_scurry, ember_spirit_searing_chains).

## Contra Jakiro (jakiro)
- placar: Ember Spirit venceu 183 de 343 partidas pro (53,4%). Sexto oponente mais comum da base, fecha o grupo de maior volume.
- por que importa: sexto maior volume de jogos pro (343), suporte 5 que controla área parada; Macropyre é a única coisa que realmente estoura sua Flame Guard.
- janelas: Jakiro sobe Force Staff aos 26,2 min (pro_dados/jakiro.json), timing próximo do seu Aghanim's Shard (25,3 min) e BKB (27,1 min); Jakiro quase nunca compra Aghanim's Shard nessa amostra, não tem timing de shard pra ele na base. Até lá ele zonea com Dual Breath (cooldown fixo de 10s) e segura engajamento parado; sua mobilidade de remnant evita a zona dele com facilidade.
- o que ele faz com você: Macropyre causa até 200 de dano por segundo durante 10 segundos numa faixa de 500 de largura, dano mágico que passa fácil do teto da sua barreira de Flame Guard (até 300 de dano absorvido no nível 4, constants_abilities.json); ficar parado dentro da chama anula sua barreira em menos de 2 segundos. Dual Breath soma lentidão e dano contínuo antes disso.
- o que você faz com ele: Jakiro não tem mobilidade nenhuma; Searing Chains prende ele no lugar e Sleight of Fist atravessa BKB se ele comprar um, então uma vez que você chega perto ele não tem como fugir da luta.
- itens que viram: seu Black King Bar bloqueia o Dual Breath e reduz o Macropyre, mas não zera o dano dele (é área contínua, não um disable único); prefira entrar com Sleight em vez de ficar parado recebendo o DPS da chama.
- como jogar: não force luta dentro da área de Macropyre mesmo com Flame Guard ativa, ela estoura rápido contra DPS constante; fora disso, feche a distância cedo, Jakiro sozinho não tem resposta pra mobilidade.
- fonte: pro_dados/ember_spirit.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre, jakiro_dual_breath, ember_spirit_flame_guard, ember_spirit_searing_chains).

## Contra Queen of Pain (queenofpain)
- placar: Ember Spirit venceu 168 de 306 partidas pro (54,9%). Mid espelhado mais comum depois do Storm Spirit.
- por que importa: segundo maior volume de jogos pro entre os mids (306), mesma posição principal (2) e o mesmo arquétipo de burst mágico explosivo saindo de bottle.
- janelas: Queen of Pain sobe Power Treads aos 8,3 min e Kaya aos 13,9 min (pro_dados/queenofpain.json), ritmo parecido com o seu (Phase Boots 9,1 min, Kaya 19,2 min). Ela chega no blink próprio (nível 6, sem item) antes de você chegar no Fire Remnant pronto pra combo, então nos primeiros 10 min ela tem mais iniciativa de poke a distância. Dos 20 aos 27 min os BKBs saem perto (ela não costuma comprar, prioriza Scepter aos 23,5 min); essa é a janela em que o Sonic Wave dela pesa mais.
- o que ela faz com você: Sonic Wave é dano Puro (dmg_type: pure, bkbpierce: yes), então nem Black King Bar nem Flame Guard reduzem esse dano, é o único golpe dela que passa direto pelas suas duas defesas principais; Shadow Strike aplica veneno e lentidão a distância antes da troca.
- o que você faz com ele: Queen of Pain tem vida baixa fixa; Searing Chains prende ela antes do Blink dela recarregar (12 a 6s de cooldown) e Sleight of Fist atravessa BKB se ela comprar, então ela não tem defesa física contra o dash.
- itens que viram: seu Black King Bar reduz o Shadow Strike e o Blink dela não é afetado (blink não é magia ofensiva), mas não ajuda contra o Sonic Wave puro; feche a luta rápido antes dela carregar mana pra usar a ultimate duas vezes.
- como jogar: não troque à distância com ela sem vantagem de iniciativa, o Sonic Wave ignora seu BKB; prefira fechar com Sleight assim que ela gastar o Blink pra escapar, o cooldown dela é curto mas não instantâneo.
- fonte: pro_dados/ember_spirit.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_sonic_wave, queenofpain_blink, queenofpain_shadow_strike, ember_spirit_searing_chains, ember_spirit_sleight_of_fist).

## Contra Puck (puck)
- placar: Ember Spirit venceu 114 de 227 partidas pro (50,2%, o mais equilibrado da lista). Mid espelhado de maior amostra depois de Storm e Queen of Pain.
- por que importa: mesma posição principal (2), mesmo arquétipo de mobilidade mágica e o confronto mais parelho entre os mids da base, decidido mais pela execução do combo do que por vantagem de kit.
- janelas: Puck sobe Blink Dagger aos 17,6 min e Aghanim's Shard aos 22,5 min (pro_dados/puck.json), timings próximos do seu Fire Remnant pronto desde o nível 1 e do seu Aghanim's Shard (25,3 min). Antes do Blink dela, Illusory Orb já serve de escape parcial (ela teleporta pro ponto do orb); depois dos 18 min ela consegue fugir de quase qualquer combo com Phase Shift mais Blink juntos.
- o que ela faz com você: Phase Shift dá imunidade total por até 3,25 segundos no nível 4, tempo suficiente pra ela sumir no meio da sua Searing Chains ou do seu Sleight e voltar depois sem levar o resto do combo; Dream Coil, se ela acertar primeiro, prende você e estica o alcance do stun se você tentar fugir.
- o que você faz com ele: Puck tem vida baixa fixa e Dream Coil tem cooldown fixo de 75 segundos, então fora dessa janela ela não tem disable de área; Searing Chains prende ela (raiz) e, se você antecipar o Phase Shift, espera 1 a 3,25s pra soltar o Sleight de verdade.
- itens que viram: seu Black King Bar não bloqueia Phase Shift (é imunidade dela, não um debuff seu em cima dela), então BKB não resolve esse 1x1 sozinho, o que resolve é timing; seu Aghanim's Shard ajuda a reposicionar de novo rápido se o combo falhar na primeira tentativa.
- como jogar: não gaste Searing Chains assim que ela reagir com Phase Shift, espere a invulnerabilidade acabar; use Fire Remnant pra cortar a rota de fuga dela antes de iniciar, não só depois.
- fonte: pro_dados/ember_spirit.json; pro_dados/puck.json; constants_abilities.json (puck_phase_shift, puck_illusory_orb, puck_dream_coil, ember_spirit_searing_chains, ember_spirit_fire_remnant).

## Contra Void Spirit (void_spirit)
- placar: Ember Spirit venceu 101 de 162 partidas pro (62,3%). Maior winrate do Ember entre os mids da base, mesmo com volume menor.
- por que importa: mesma posição principal (2), kit quase espelhado (burst mágico mais dash físico), mas o confronto mais desbalanceado entre os mids por causa do alcance curto do combo dela.
- janelas: Void Spirit sobe Aghanim's Shard aos 17,0 min (melhora o Aether Remnant) e Scepter aos 25,1 min (pro_dados/void_spirit.json), perto do seu próprio Aghanim's Shard (25,3 min) e BKB (27,1 min). Astral Step dela funciona como dash reativo sem precisar pré-plantar nada, então nos primeiros minutos ela reage mais rápido que você; depois que você tem Fire Remnant posicionado de propósito, a iniciativa vira sua.
- o que ela faz com você: Astral Step atravessa Black King Bar (bkbpierce: yes, constants_abilities.json) e aplica uma marca que desacelera e detona dano 1,25s depois; Resonant Pulse cria um escudo que absorve dano físico, não mágico, então ele reduz seu Sleight of Fist mas não reduz Searing Chains nem Fire Remnant.
- o que você faz com ele: Void Spirit tem vida baixa fixa e Astral Step tem alcance curto (800 a 1000); Searing Chains prende ela antes dela conseguir recarregar o dash (carga restaura em 25 a 15s) e Sleight atravessa o escudo físico dela porque o escudo não é imunidade, só absorção parcial.
- itens que viram: seu Black King Bar não bloqueia o Astral Step dela (atravessa BKB também), então a defesa real é distância, não imunidade; prefira iniciar você primeiro, antes dela fechar a rota com o dash dela.
- como jogar: ataque antes dela ter espaço pra usar o Astral Step como fuga; depois que ela gastar o dash pra fugir, ela fica parada até recarregar, sua janela de perseguição com Fire Remnant.
- fonte: pro_dados/ember_spirit.json; pro_dados/void_spirit.json; constants_abilities.json (void_spirit_astral_step, void_spirit_resonant_pulse, ember_spirit_searing_chains, ember_spirit_sleight_of_fist).

## Contra Shadow Fiend (nevermore)
- placar: Ember Spirit venceu 150 de 298 partidas pro (50,3%, equilibrado). O carry/mid de maior volume contra ele na base.
- por que importa: maior volume de jogos pro entre os cores que raramente dividem lane com o Ember (Shadow Fiend costuma ir offlane ou mid rival), porque os dois competem pelo mesmo papel de core físico mágico que decide jogo sozinho no meio game, o mesmo tipo de confronto do Alchemist contra Morphling: dois cores fortes que se cruzam fora da lane.
- janelas: Shadow Fiend farma muito mais rápido que você (LH aos 10 min: 78 contra 53 seus, GPM 658 contra 558). Ele sobe Mask of Madness aos 10,2 min (pro_dados/nevermore.json); três Shadowraze seguidos num alvo com alma suficiente já passam de 1.200 de dano mágico antes de resistência. O Black King Bar dele sai aos 25,2 min (pro_dados/nevermore.json), antes do seu Aghanim's Shard (25,3 min) e bem antes do seu próprio BKB (27,1 min); force a luta antes dos 25 min, enquanto nenhum dos dois tem imunidade mágica.
- o que ele faz com você: Shadowraze é dano mágico de curto alcance (200) na frente dele, então Flame Guard absorve parte se já estiver ativa; Requiem of Souls tem raio de 1000 e amedronta, reduzindo sua velocidade de movimento e resistência mágica por até 2,15 segundos, perigoso se ele já tiver almas suficientes acumuladas.
- o que você faz com ele: Shadow Fiend precisa ficar parado perto de você pra acertar Shadowraze (alcance de só 200); Searing Chains prende ele antes dele conseguir distância, e Sleight of Fist atravessa BKB se ele comprar, fechando o combo mesmo contra a imunidade dele.
- itens que viram: seu Black King Bar bloqueia o Requiem of Souls (dano mágico) e reduz o Shadowraze; antecipe o BKB dele, sai perto dos 25 min, force a luta um pouco antes se puder.
- como jogar: não dê flanco de perto sem susto antes do seu BKB, as três direções de Shadowraze zoneiam fácil; depois do seu combo pronto, feche nele antes dele completar 20 almas pro Requiem valer a pena.
- fonte: pro_dados/ember_spirit.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, ember_spirit_searing_chains, ember_spirit_sleight_of_fist, ember_spirit_flame_guard).

## Contra Sniper (sniper)
- placar: Ember Spirit venceu 34 de 50 partidas pro (68,0%). Maior vantagem do Ember entre os oponentes com 30 ou mais jogos.
- por que importa: maior winrate do Ember na base inteira (30+ jogos), porque Sniper farma rápido e bate forte à distância mas não tem nenhuma forma própria de fugir de um gap close.
- janelas: Sniper sobe Power Treads aos 5,9 min e Maelstrom aos 12,5 min (pro_dados/sniper.json), bem antes do seu Phase Boots (9,1 min); até os 12 min ele farma e poka de longe com vantagem. A partir do momento que você fecha a distância pela primeira vez, a vantagem vira sua: ele não tem blink, dash nem invisibilidade própria, só Shrapnel (slow em área) e o alcance de Headshot pra tentar afastar.
- o que ele faz com você: Headshot tem 40% de chance de dar 20 a 110 de dano extra e empurrar você pra trás, mas é passivo de auto ataque, não disable; Assassinate causa até 500 de dano em alvo travado, perigoso à distância mas com tempo de mira visível antes de disparar.
- o que você faz com ele: Sniper não tem nenhuma mobilidade própria no kit base; Searing Chains prende ele sem chance de fuga, e Sleight of Fist, com o dash atravessando a distância inicial, fecha o 1x1 antes dele conseguir reposicionar de novo.
- itens que viram: seu Black King Bar não é nem necessário contra o kit dele, o problema dele é mobilidade zero, não disable; prefira guardar o BKB pro resto do time dele e usar Fire Remnant pra alcançar ele de surpresa.
- como jogar: ataque assim que tiver visão dele fora de posição, ele não tem resposta de fuga; depois de fechar a distância uma vez, pressione de novo rápido, ele demora pra recuperar posição sem dash.
- fonte: pro_dados/ember_spirit.json; pro_dados/sniper.json; constants_abilities.json (sniper_headshot, sniper_assassinate, sniper_shrapnel, ember_spirit_searing_chains, ember_spirit_sleight_of_fist).

## Contra Witch Doctor (witch_doctor)
- placar: Ember Spirit venceu 40 de 59 partidas pro (67,8%). Segunda maior vantagem do Ember com 30 ou mais jogos.
- por que importa: segundo maior winrate do Ember na base, suporte com disável fraco de curta duração e nenhuma fuga própria além do Aghanim's Shard, que só chega perto dos 24 min.
- janelas: Witch Doctor sobe Aghanim's Shard aos 24,2 min (pro_dados/witch_doctor.json, vira um Death Ward disfarçado por um tempo) e raramente compra blink (só 211 jogos de 763, mediana 27,3 min); até lá, se ele for pego fora de posição, não tem fuga. Seu Phase Boots (9,1 min) e Fire Remnant já disponíveis desde o nível 1 te dão iniciativa de mapa muito antes do shard dele.
- o que ele faz com você: Paralyzing Cask atordoa só 0,8 segundo fixo e ricocheteia entre unidades perto, dano baixo pra uma ultimate de suporte; Death Ward é canalizado (8 segundos), dano Puro (bkbpierce: yes) mas exige ele parado, fácil de interromper fechando a distância durante o canal.
- o que você faz com ele: Witch Doctor tem vida baixa fixa e zero mobilidade antes do shard; Searing Chains prende ele e Sleight of Fist interrompe o canal do Death Ward se você chegar durante a ultimate dele, mesmo que o dano da ward em si seja puro.
- itens que viram: seu Black King Bar não resolve o Death Ward (dano puro, atravessa), a defesa real é interromper o canal fechando distância, não ficar de BKB esperando passar; seu Aghanim's Shard garante carga extra de remnant se o combo render kill perto dele.
- como jogar: não deixe ele canalizar Death Ward livre, feche nele assim que ouvir o cast; fora disso, ele não tem nada que impeça você de iniciar, é quase sempre vantagem sua.
- fonte: pro_dados/ember_spirit.json; pro_dados/witch_doctor.json; constants_abilities.json (witch_doctor_death_ward, witch_doctor_paralyzing_cask, ember_spirit_searing_chains, ember_spirit_sleight_of_fist).

## Contra Sven (sven)
- placar: Ember Spirit venceu 27 de 66 partidas pro (40,9%). Segunda maior desvantagem do Ember com 30 ou mais jogos.
- por que importa: segundo pior confronto da base, carry físico que farma quase tão rápido quanto você (GPM 656 contra 558 seu) e vira a luta numa corrida de dano físico puro que sua Flame Guard não ajuda a segurar.
- janelas: Sven sobe Blink Dagger aos 17,1 min (pro_dados/sven.json); o God's Strength no nível máximo soma até 190% de dano bônus (constants_abilities.json). Antes dos 17 min ele farma rápido com Great Cleave, limpando camp e wave junto; depois do Blink mais Black King Bar dele (22,7 min, antes do seu), ele inicia primeiro com Storm Hammer e já com God's Strength ativo, dano físico bruto que você não tem como absorver com magia.
- o que ele faz com você: Storm Hammer atordoa até 1,6 segundo em área antes do combo; Great Cleave atravessa Black King Bar (bkbpierce: yes, constants_abilities.json) e acerta tudo que está perto em linha, então mesmo com seu BKB ativo você ainda recebe o cleave físico dele; God's Strength no nível 18 dá até 190% de dano base por 30 segundos, suficiente pra matar rápido em troca direta.
- o que você faz com ele: Searing Chains prende ele (raiz, não atravessa BKB dele) e Sleight of Fist atravessa o BKB dele, então o ataque físico ainda funciona mesmo contra a imunidade; Flame Guard não ajuda muito aqui, o dano dele é quase todo físico.
- itens que viram: seu Black King Bar bloqueia o Storm Hammer, mas não o Great Cleave; prefira armadura e vida (Shiva's Guard, Assault Cuirass situacionais) em vez de confiar só na Flame Guard contra ele.
- como jogar: não aceite troca prolongada parada perto dele depois do Blink mais BKB dele (perto dos 22 min), o cleave dele soma rápido; prefira pegar ele isolado antes do God's Strength carregar, ou leve a luta pra longe de onde o cleave acerta aliados junto.
- fonte: pro_dados/ember_spirit.json; pro_dados/sven.json; constants_abilities.json (sven_storm_bolt, sven_great_cleave, sven_gods_strength, ember_spirit_searing_chains, ember_spirit_sleight_of_fist, ember_spirit_flame_guard).

## Contra Io (wisp)
- placar: Ember Spirit venceu 19 de 51 partidas pro (37,3%). Pior confronto do Ember na base inteira com 30 ou mais jogos.
- por que importa: pior winrate do Ember contra qualquer oponente com amostra relevante; Io não briga de kit, ele anula a vantagem inteira do Ember, que é fechar um alvo isolado e matar rápido.
- janelas: Io tem gpm baixo (364) e lh10 baixo (20), ele não compete em farm; a ameaça dele é Relocate, disponível desde cedo e sem depender de item. Seu Fire Remnant (nível 1) e Phase Boots (9,1 min) dão iniciativa de mapa, mas de nada adianta pegar um alvo se Io está por perto com Tether ativo.
- o que ele faz com você: Relocate teleporta Io e o aliado tetherado pra qualquer ponto do mapa e depois os traz de volta, cancelando seu kill quase pronto sem nenhum disable em você; Tether dá velocidade extra ao aliado pra fugir do seu alcance de perseguição mesmo sem o Relocate pronto.
- o que você faz com ele: Io tem vida baixíssima fixa e nenhum dano direto relevante; se você pegar ele sozinho, sem o aliado tetherado por perto, Searing Chains mais Sleight matam rápido, mas isso raramente acontece porque ele sempre anda grudado em alguém.
- itens que viram: não existe item seu que impeça o Relocate (é teleporte, não magia direcionada em você); a resposta real é timing, matar o alvo antes do Relocate completar o cast (3,5 a 3 segundos) ou focar o próprio Io quando ele aparecer desprotegido.
- como jogar: não gaste o combo inteiro achando que o kill está fechado se tiver um Io por perto, espere o Relocate dele estar em cooldown (70 a 90 segundos); prefira focar o Io direto quando ele estiver sem o aliado tetherado, ele morre rápido e sozinho não aguenta nada.
- fonte: pro_dados/ember_spirit.json; pro_dados/wisp.json; constants_abilities.json (wisp_relocate, wisp_tether, ember_spirit_searing_chains, ember_spirit_sleight_of_fist).
