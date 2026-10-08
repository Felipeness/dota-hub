---
id: confrontos-windrunner
heroi: Windranger
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/windrunner.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/luna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/necrolyte.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/treant.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/morphling.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/weaver.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/alchemist.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/windrunner.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/rubick.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/snapfire.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/jakiro.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/tusk.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/dragon_knight.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/weaver.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/treant.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/ember_spirit.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/necrolyte.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/alchemist.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/luna.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/morphling.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/templar_assassin.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/tiny.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/shadow_fiend.md
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/confrontos/alchemist.md
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/confrontos/luna.md
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/confrontos/nevermore.md
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/confrontos/tiny.md
---

## Contra Shadow Fiend (nevermore)
- placar: Windranger venceu 211 de 423 partidas pro (49,9%, praticamente equilibrado). Maior volume de jogos pro de toda a base de confrontos dela.
- por que importa: maior volume da lista (423 jogos), e os dois saem como pos 1 no catálogo do projeto, carry físico contra carry físico, mesmo raramente dividindo a mesma lane.
- janelas: até os 9 min as duas correm atrás de item de farm cedo, Windranger fecha Power Treads aos 7,2 e o caminho pro Maelstrom (Javelin) aos 9,3 (pro_dados/windrunner.json). Dos 9 aos 18 min ela monta Maelstrom (13,4) e Mjollnir (18,3) pra bater mais vezes por segundo, enquanto o Shadow Fiend fecha Yasha e Dragon Lance (13,3 a 14,0) e depois Manta por volta de 16 min (pro_dados/nevermore.json). Nessa janela quem acerta o combo primeiro costuma ganhar, porque Windranger depende de controle (Shackleshot) pra abrir, não de burst mágico puro. Depois dos 20 min as duas fecham Black King Bar quase junto (ela 24,4, ele 25,2), dali em diante vira corrida de quem inicia primeiro.
- o que ele faz com você: Shadowraze (cooldown de só 9 s no nível 7) zonea seu farm de longe, sem precisar te ver; Requiem of Souls te executa à distância se sua vida já estiver baixa, com linhas de dano mágico que escalam com as almas que ele já capturou (até 20, constants_abilities.json).
- o que você faz com ele: Shackleshot estuna até 3,25 s se acertar ele junto de uma árvore ou unidade atrás; Focus Fire dá até 500 de velocidade de ataque com acerto garantido num alvo só e atravessa Black King Bar (bkbpierce: yes, constants_abilities.json), o suficiente pra abater o Shadow Fiend rápido se ele não tiver BKB pronto a tempo.
- itens que viram: seu Black King Bar (24,4) bloqueia o Requiem (dano mágico) e chega pouco antes do dele; o Black King Bar dele bloqueia o seu Shackleshot, mas não bloqueia o Focus Fire, que ignora BKB de qualquer lado.
- como jogar: não force a luta antes do seu BKB se ele já tiver Dragon Lance e Manta prontos, o combo de Raze dele recarrega rápido. Depois que os dois tiverem BKB, o jeito de ganhar é acertar o Shackleshot primeiro, não trocar Focus Fire contra o combo dele.
- fonte: pro_dados/windrunner.json; pro_dados/nevermore.json; constants_abilities.json (windrunner_shackleshot, windrunner_focusfire, nevermore_requiem); confrontos/nevermore.md (placar e janelas do lado do Shadow Fiend).

## Contra Rubick (rubick)
- placar: Windranger venceu 177 de 377 partidas pro (46,9%, leve desvantagem). Segundo maior volume de jogos pro da base.
- por que importa: segundo maior volume (377), e é o oponente mais perigoso pro kit dela: Rubick é quase só pos 4/5 no pro, mas rouba a última magia lançada por qualquer inimigo visível, incluindo o Shackleshot ou o Powershot dela.
- janelas: até os 10 min Rubick sobe Ring of Basilius (7,6) e Arcane Boots (10,3), zoneando com Fade Bolt a 440 de raio, enquanto Windranger monta o farm de pos 1 ou pos 4 (pro_dados/windrunner.json, pro_dados/rubick.json). Dos 10 aos 22 min nenhum dos dois tem blink (o dele sai aos 21,6), então o risco real é ela gastar Shackleshot ou Powershot perto demais dele sem precisar. Depois dos 22 min, com blink pronto, ele vira quem inicia o combo do time, rouba a magia que ela acabou de usar e devolve o próprio Shackleshot nela.
- o que ele faz com você: Spell Steal copia a última magia ativa que você lançou, a até 1000 de distância, e atravessa Black King Bar (bkbpierce: yes, constants_abilities.json); se ele roubar seu Shackleshot ou seu Focus Fire, usa exatamente o seu combo contra você. Telekinesis (não atravessa BKB) te levanta por até 1,7 s e estuna ao cair, 0,9 a 1,5 s.
- o que você faz com ele: Rubick tem vida baixa fixa e, sem o blink pronto (mediana 21,6 min), não tem fuga própria; Powershot a 3000 de alcance ameaça matá-lo de longe antes dele chegar perto pra rotear.
- itens que viram: seu Black King Bar bloqueia a Telekinesis dele, mas não o Spell Steal; a defesa real contra o roubo é não gastar Shackleshot ou Focus Fire perto dele sem necessidade, porque o roubo em si não tem contra-item (ignora imunidade a magia). Seu Aghanim's Scepter deixa os ataques renderem Tailwind sem dispel, o que ajuda a fugir de uma troca que ele já roubou a seu favor.
- como jogar: guarde o Shackleshot e o Powershot pra abertura certa, não os gaste perto de um Rubick livre só pra farmar wave. Depois que ele gastar o Spell Steal numa magia fraca, é a sua janela, o roubo recarrega em 16 a 4 s por nível.
- fonte: pro_dados/windrunner.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis, windrunner_shackleshot); aghs_desc (Windranger, Rubick).

## Contra Snapfire (snapfire)
- placar: Windranger venceu 189 de 357 partidas pro (52,9%, leve vantagem). Terceiro maior volume de jogos pro da base.
- por que importa: terceiro maior volume (357), e hoje Snapfire é jogada mais como mid/iniciadora do que como suporte de ward no pro atual do patch, então mesmo sem dividir lane sempre, ela aparece no mesmo trecho do mapa que uma Windranger pos 1 ou pos 4.
- janelas: até os 10 min Snapfire sobe Ring of Basilius (7,7) e Arcane Boots (10,6), zoneando de perto com Scatterblast (alcance de cast 800, slow de 100% por 1 s); Windranger prefere manter distância e poka com Powershot (alcance 3000), que acerta antes dela entrar no raio do Scatterblast. Dos 15 aos 20 min Snapfire fecha Aghanim's Shard (16,9) e blink (20,7); com o shard, o Firesnap Cookie vira um combo de stun mais forte. Windranger fecha Maelstrom (13,4) nessa mesma janela e já bate mais vezes por segundo com Focus Fire.
- o que ela faz com você: Scatterblast te acerta em cone e te empurra, útil pra abrir o combo do time dela se você ficar perto; Mortimer Kisses é uma barragem canalizada de 5,5 s com globos de até 360 de dano cada, mas cada glob pode ser destruído por right-click antes de acertar.
- o que você faz com ele: Powershot atravessa tudo em linha reta com até 470 de dano e desacelera, acerta antes dela chegar no alcance curto do Scatterblast (800); Shackleshot prende ela numa árvore ou unidade atrás, abrindo o combo do seu time.
- itens que viram: seu Black King Bar bloqueia o Scatterblast e o stun do Firesnap Cookie (ambos mágicos); contra a Mortimer Kisses, a defesa de item nenhum substitui destruir os globos a tempo com right-click.
- como jogar: mantenha distância de 800 ou mais dela antes dos 15 min, o Scatterblast não alcança; depois que ela fechar o shard, respeite o Firesnap Cookie em cima de árvore, o combo de stun fica mais longo.
- fonte: pro_dados/windrunner.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_mortimer_kisses, windrunner_powershot); aghs_desc (Snapfire).

## Contra Jakiro (jakiro)
- placar: Windranger venceu 166 de 345 partidas pro (48,1%, leve desvantagem). Quarto maior volume de jogos pro da base.
- por que importa: quarto maior volume (345), suporte de área clássico que farma pouco (pos 5 quase sempre) mas aparece direto no draft contra carries físicos de farm rápido como a Windranger.
- janelas: até os 12 min Jakiro sobe Ring of Basilius (8,9) e zoneia com Dual Breath (cast range 850, dano 20 a 80 em cone); Windranger foge do alcance com Powershot (3000) e farma puxando wave. Dos 12 aos 20 min, com Arcane Boots pronto (11,7) e nível 6 (Macropyre, cooldown 90 a 70 s), ele pode travar uma rota inteira por 10 s com até 200 de dano total na área. Depois dos 20 min, com o GPM dela normalmente mais alto que o de um suporte puro, Windranger farma mais rápido do que ele consegue zonear.
- o que ele faz com você: Ice Path estuna até 2 s em raio 150, difícil de prever porque não precisa de alvo direto; Macropyre no nível 3 soma até 200 de dano mágico em 10 s pra quem fica parado dentro.
- o que você faz com ele: Powershot acerta a 3000 de distância antes dele chegar no alcance de 850 do Dual Breath; Jakiro tem vida baixa fixa e nenhuma fuga própria, Shackleshot nele quase sempre fecha o combo do seu time.
- itens que viram: seu Black King Bar bloqueia o Ice Path e o dano do Macropyre (ambos mágicos), a resposta padrão contra o combo de área dele. O Aghanim's Shard dela (Gale Force) empurra o grupo dele pra fora da Macropyre que ele mesmo lançou, se o timing bater.
- como jogar: não force troca dentro da Macropyre sem BKB pronto; farme em rota paralela à dele nos primeiros 15 min, ele não te acompanha de GPM depois disso.
- fonte: pro_dados/windrunner.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_macropyre, jakiro_dual_breath); aghs_desc (Windranger).

## Contra Tusk (tusk)
- placar: Windranger venceu 192 de 343 partidas pro (56,0%, vantagem clara). Quinto maior volume de jogos pro da base.
- por que importa: quinto maior volume (343, empatado com Tiny), ganker 4/5 clássico que gira o mapa, mas é o hero de menor farm da lista (ficha local registra mediana de 300 de ouro/min pra ele, bem abaixo do que ela farma como pos 1).
- janelas: até os 19 min Tusk ganka a pé com Ice Shards (raio 200, dano até 300) e Walrus Kick (550 de dano fixo, cooldown de só 12 s); Windranger já monta Maelstrom (13,4) nessa janela e, se o gank errar, a troca fica livre pra ela. Blink dele sai só aos 19,0 (pro_dados/tusk.json), tarde pro padrão de suporte. Depois disso os dois têm blink (o dela sai perto dos 21 min via Hurricane Pike/Dragon Lance), mas o dano dele continua baixo mesmo com item, Snowball e Walrus Kick não escalam tanto quanto o Focus Fire dela.
- o que ele faz com você: Walrus Kick atravessa Black King Bar (bkbpierce: yes, constants_abilities.json) e te acerta em linha com 550 de dano fixo e slow; Ice Shards cria uma parede que te prende se você estiver do lado errado quando ele lança.
- o que você faz com ele: Tusk tem o menor dano sustentado da lista, Focus Fire nele é quase kill garantido se ele não tiver Snowball pra fugir rolando com o time; Powershot acerta antes dele chegar no alcance de gank.
- itens que viram: Black King Bar não bloqueia o Walrus Kick (ele atravessa BKB por design), a resposta é distância, não imunidade. Seu Windrun (evasão total a ataque físico) não ajuda aqui porque Walrus Kick é dano fixo de habilidade, não ataque básico.
- como jogar: não ande sozinho perto de parede de visão baixa nos primeiros 19 min, o gank dele não avisa. Depois que ele gastar Snowball e Kick sem fechar a kill, a troca é sua, ele não tem segundo combo rápido.
- fonte: pro_dados/windrunner.json; pro_dados/tusk.json; constants_abilities.json (tusk_walrus_kick, tusk_ice_shards, tusk_snowball); content/fichas/tusk.md (GPM/LH do Tusk).

## Contra Tiny (tiny)
- placar: Windranger venceu 177 de 343 partidas pro (51,6%, levemente favorável). Sexto maior volume de jogos pro da base, maior entre os de mesma posição principal (carry pos 1 contra carry pos 1, pelo catálogo).
- por que importa: mesma posição principal no catálogo do projeto (os dois saem pos 1 em pro), e é o carry físico mais comum contra ela na base, mesmo raramente dividindo a mesma lane.
- janelas: Tiny fecha Power Treads aos 6,1 min (1.404 de 3.127 jogos pro) e Echo Sabre por volta de 12,1; Windranger fecha Maelstrom aos 13,4, quase junto. Até o Echo Sabre dele o combo de burst (Avalanche + Toss) é fraco, ela out-poka com Powershot de 3000 de alcance. Dos 12 aos 18 min, com Echo Sabre e depois Shadow Blade (mediana pro de 17,6, pro_dados/tiny.json), o combo dele pode estourar a vida baixa dela antes do Mjollnir (18,3) estar pronto, porque Avalanche e Toss são mágicos e passam direto pela evasão do Windrun. Depois dos 20 min, com Mjollnir e BKB prontos (ela 24,4, ele por volta de 26,7), ela ganha a troca prolongada: Focus Fire atravessa o BKB dele e o combo de burst dele já gastou o blink.
- o que ele faz com você: Avalanche (stun curto, raio até 370) seguido de Toss te joga pra cima do time dele, e os dois são dano mágico, então o Windrun não ajuda; Grow aumenta o alcance de ataque e o dano das árvores jogadas, estica o poke dele.
- o que você faz com ele: Shackleshot prende ele numa árvore ou unidade perto, abrindo o combo do seu time antes do blink dele estar pronto (19,0 a 15,9 min conforme a fonte); Focus Fire ignora o Black King Bar dele numa troca prolongada depois dos 20 min.
- itens que viram: Black King Bar dele bloqueia seu Shackleshot, mas não o seu Focus Fire; seu Black King Bar não ajuda contra Avalanche + Toss (resolve com distância e timing, não com imunidade, já que o combo é rápido e não depende de canal longo).
- como jogar: evite ficar visível e parado antes do blink dele estar pronto (perto dos 16 a 19 min), é quando o combo dele rende mais. Depois dos 20 min, force a troca prolongada, Focus Fire ganha de dano sustentado contra o burst dele já gasto.
- fonte: pro_dados/windrunner.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, windrunner_focusfire, windrunner_windrun); confrontos/tiny.md; content/porque_itens/tiny.md.

## Contra Ember Spirit (ember_spirit)
- placar: Windranger venceu 114 de 283 partidas pro (40,3%, desvantagem grande). Sétimo maior volume de jogos pro da base, e o pior resultado dela entre os oponentes de alto volume.
- por que importa: sétimo maior volume (283) mesmo quase nunca dividindo lane (Ember Spirit é 87% pos 2 puro, Windranger é pos 1/pos 4), escolhido pela amostra grande e por ser o contraste mais claro entre "muitos jogos" e "matchup ruim de verdade".
- janelas: Ember Spirit sobe Phase Boots cedo (9,1) e farma puxando Fire Remnant; Windranger sobe Power Treads (7,2) na mesma faixa. Dos 13 aos 25 min, enquanto ela monta Maelstrom/Mjollnir (13,4 a 18,3), ele já usa Searing Chains (raio 400, dano por segundo, cooldown de 10 a 13 s) pra travar ela em grupo e Flame Guard (raio 500, 20 a 50 de dano por segundo) pra punir quem fica batendo nele de perto, incluindo o Focus Fire dela. Black King Bar dele sai tarde (27,1) comparado ao dela (24,4), então entre 24 e 27 min é a janela em que ela tem BKB e ele não.
- o que ele faz com você: Searing Chains prende e causa dano mágico contínuo em área, não é ataque básico, então o Windrun não ajuda; Flame Guard absorve dano mágico e devolve dano em área pra quem estiver perto dele, incluindo durante o seu Focus Fire a curta distância, o que chipa sua vida enquanto você gasta os 20 s da habilidade.
- o que você faz com ele: Shackleshot prende ele numa árvore antes do Fire Remnant estar pronto pra reposicionar; na janela dos 24 aos 27 min, com BKB só do seu lado, force a luta, Searing Chains é bloqueado pelo seu BKB (bkbpierce: no).
- itens que viram: seu Black King Bar (24,4) bloqueia o Searing Chains dele e chega antes do BKB dele (27,1); contra o Flame Guard, prefira abrir com Shackleshot + Powershot de longe em vez de ficar batendo nele perto o tempo inteiro com Focus Fire, porque o escudo devolve dano enquanto você ataca.
- como jogar: evite trocar Focus Fire corpo a corpo com o Flame Guard dele ativo, puxe pra Powershot de longe. Force a troca entre 24 e 27 min, é a única janela de BKB a seu favor.
- fonte: pro_dados/windrunner.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_searing_chains, ember_spirit_flame_guard, windrunner_focusfire); content/fichas/ember_spirit.md.

## Contra Dragon Knight (dragon_knight)
- placar: Windranger venceu 116 de 219 partidas pro (53,0%, leve vantagem). Oitavo maior volume de jogos pro da base, carry/mid rival por função.
- por que importa: mesma posição principal com frequência (Dragon Knight sai pos 1 ou pos 2 no pro, Windranger pos 1 ou pos 4), volume relevante (219) e um contraste mecânico direto, boa parte do dano dele vira físico, o que o Windrun anula na hora.
- janelas: até os 6 min Dragon Knight sobe Power Treads e entra no nível 6 (Elder Dragon Form) cedo numa rota mid; Windranger fecha Power Treads aos 7,2 e monta o farm de pos 1. Dos 16 aos 23 min ele soma Blink Dagger (16,2) pra fechar distância em forma de dragão; Windranger já tem Mjollnir (18,3) nessa janela. Black King Bar dele sai aos 23,3, perto do dela (24,4), então a luta decisiva tende a cair bem nessa faixa.
- o que ele faz com você: em Elder Dragon Form, o ataque básico tem splash físico, mas a Breathe Fire (cone de dano mágico que reduz seu dano de ataque) e o bônus de Wyrm's Wrath (10 a 40 de dano mágico extra por acerto) continuam acertando mesmo com o Windrun ativo, porque são mágicos.
- o que você faz com ele: o Windrun anula a parte física do ataque de Dragon Form, incluindo o splash, deixando só a fração mágica (Wyrm's Wrath) acertando você durante a evasão; Shackleshot prende ele numa árvore antes do Blink Dagger estar pronto.
- itens que viram: seu Black King Bar (24,4) chega antes do dele (23,3) por pouca margem, então a corrida de quem fecha BKB primeiro decide boa parte da troca tardia; Crystalys (lesser_crit, 29,9 min no seu build) acelera o dano puro depois que o controle já está resolvido.
- como jogar: evite trocar ataque básico sustentado contra a forma de dragão sem o Windrun ativo, ele ainda te acerta de volta com splash físico; force a luta pouco depois do seu BKB (24,4), antes do dele se tornar irrelevante pela imunidade dela.
- fonte: pro_dados/windrunner.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_breathe_fire, dragon_knight_wyrms_wrath, windrunner_windrun); content/fichas/dragon_knight.md.

## Contra Luna (luna)
- placar: Windranger venceu 113 de 207 partidas pro (54,6%, vantagem clara). Nono maior volume de jogos pro da base, mesma posição principal (carry pos 1 contra carry pos 1).
- por que importa: as duas saem pos 1 no catálogo do projeto, ambas agi ranged que escalam rápido com item, e o Windrun é um contador mecânico direto do win condition dela (autoataque e Moon Glaives).
- janelas: Luna sobe Mask of Madness entre 9,1 e 10,0 e Manta entre 16,1 e 17,2; Windranger fecha Maelstrom aos 13,4 nessa mesma faixa. A janela de maior risco pra ela é dos 18 aos 24 min, quando Luna tem Eclipse maxado (perto do nível 18, cooldown de 105 s) e pode te queimar de longe numa noite, sem precisar vencer o 1x1 de perto. Depois do seu Black King Bar (24,4) e do seu Mjollnir (18,3), o Focus Fire sustentado ganha de qualquer troca de auto-ataque porque o Windrun anula o retorno físico dos Moon Glaives dela.
- o que ela faz com você: Lucent Beam estuna 0,6 s e inicia a troca a 9 a 6 s de cooldown; Eclipse chove raios em área (até 300 de dano por raio) e acerta mesmo com seu Windrun ativo, porque é dano de feitiço, não de ataque.
- o que você faz com ele: Windrun dá evasão total contra o ataque básico dela, incluindo os saltos do Moon Glaive (bkbpierce: yes, mas isso não muda a evasão, que é separada de BKB), ela erra o ataque físico inteiro enquanto a janela estiver ativa; Shackleshot abre o combo antes dela ter Manta pra escapar.
- itens que viram: nenhum item dela remove a evasão do Windrun diretamente, por isso Lucent Beam e Eclipse (dano de feitiço) são a ferramenta real de dano garantido nela, não o autoataque. Seu Black King Bar bloqueia os dois.
- como jogar: force ela a gastar o Windrun antes de comprometer o dano de auto-ataque; evite ficar parado numa noite depois do nível 18 dela, é quando o Eclipse sozinho ameaça te matar.
- fonte: pro_dados/windrunner.json; pro_dados/luna.json; constants_abilities.json (luna_eclipse, luna_lucent_beam, luna_moon_glaive, windrunner_windrun); content/porque_itens/luna.md; confrontos/luna.md.

## Contra Templar Assassin (templar_assassin)
- placar: Windranger venceu 107 de 186 partidas pro (57,5%, vantagem grande). Décimo maior volume de jogos pro da base, mesma posição principal (carry pos 1 contra carry pos 1).
- por que importa: as duas saem pos 1 no catálogo, e é um dos melhores resultados da Windranger entre carries de farm rápido, o motivo mecânico é direto: o win condition dela é 100% autoataque (Psi Blades, Meld, Refraction), exatamente o que o Windrun anula.
- janelas: Templar Assassin fecha Power Treads entre 4,0 e 5,5 min (gatilho de nível 4) e Dragon Lance por volta de 14,2 a 14,3, dobrando o alcance de ataque; Windranger fecha Maelstrom aos 13,4, quase na mesma janela. Dos 14 aos 17 min ela soma Desolator (14,3) pra reduzir armadura e abrir tower dive; depois disso vem o Blink Dagger dela (17,4). Windranger tem Mjollnir pronto (18,3) e BKB (24,4) antes do blink dela render troca de verdade, então a janela de maior risco pra Windranger é justamente antes do Mjollnir, quando a TA já tem Desolator e consegue queimar vida rápido de longe com o Meld ativo.
- o que ela faz com você: Psi Blades tem spill a 400 a 700 de alcance e atravessa Black King Bar (bkbpierce: yes); Desolator reduz sua armadura em 6 pontos por 7 s, somando com o Meld (mais até 8 pontos no nível máximo, constants_abilities.json), o que acelera qualquer troca física contra você.
- o que você faz com ele: Windrun dá evasão total contra Psi Blades, Meld e os pulsos de Refraction, que são instâncias de ataque físico (bkbpierce: yes nos três, mas isso não protege contra a evasão, que é separada de BKB), ela erra praticamente todo o DPS dela enquanto a janela estiver ativa; Shackleshot prende ela antes do Blink Dagger estar pronto (17,4).
- itens que viram: nenhum item físico dela compensa o Windrun, só dano mágico (ela não tem) resolveria; o Aghanim's Shard dela (Refraction castável enquanto atordoada) reduz o valor do seu Shackleshot, porque ela ainda ativa a defesa mesmo presa, mas é item raro nessa posição. Seu Black King Bar bloqueia a Trap dela (bkbpierce: no), o que importa principalmente se ela tiver Scepter, que adiciona silêncio ao acerto.
- como jogar: force a troca justamente durante o Windrun, ela não tem resposta de dano mágico pra furar a evasão; evite ficar visível perto de árvore antes do Blink dela (17,4), onde o Shackleshot garante o combo.
- fonte: pro_dados/windrunner.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_psi_blades, templar_assassin_meld, templar_assassin_refraction, windrunner_windrun); aghs_desc (Templar Assassin); content/porque_itens/templar_assassin.md.

## Contra Necrophos (necrolyte)
- placar: Windranger venceu 72 de 120 partidas pro (60,0%, vantagem grande). Um dos dois melhores resultados da base com amostra de 30 jogos ou mais, junto com Morphling.
- por que importa: Necrophos também joga pos 1 (carry) em boa parte dos picks pro, então entra como carry contra carry sem dividir lane; escolhido pela amostra sólida (120 jogos) e por ser a maior vantagem dela fora dos farmers físicos puros.
- janelas: Necrophos sobe Radiance por volta de 13,7 min e Aghanim's Shard aos 17,8; Windranger fecha Maelstrom aos 13,4, praticamente junto. O risco real do Necrophos não é burst, é a Heartstopper Aura (drena HP percentual em raio 700, bkbpierce: yes), que só funciona se ele ficar perto. Como Windranger ataca a distância (Powershot a 3000, Focus Fire a alcance de ataque normal) e tem Windrun pra fugir de perseguição corpo a corpo, ela raramente fica os segundos seguidos dentro do raio de 700 que a aura precisa pra valer.
- o que ele faz com você: Heartstopper Aura dura enquanto você estiver perto (raio 700) e ignora Black King Bar; Reaper's Scythe executa quem está com pouca vida, mas o dano e o stun dela não atravessam Black King Bar (bkbpierce: no, diferente da aura).
- o que você faz com ele: seu Black King Bar (24,4) te deixa imune ao Reaper's Scythe, a única ameaça de execução dele; Shackleshot prende ele antes dele chegar perto o bastante pra aura valer, e Powershot acerta de longe sem entrar no raio 700.
- itens que viram: Black King Bar seu resolve o Scythe mas não a Heartstopper Aura (ela atravessa), a resposta contra a aura é distância, não item; o Aghanim's Shard dele (Death Seeker, pulso de dano que se espalha na chegada) acerta mesmo durante o Windrun, porque não é ataque básico.
- como jogar: mantenha distância de 700 ou mais dele fora de combate, a aura só machuca quem fica perto; depois do seu BKB (24,4), ignore a ameaça do Scythe e force a luta, ele perde a única ferramenta de execução.
- fonte: pro_dados/windrunner.json; pro_dados/necrolyte.json; constants_abilities.json (necrolyte_heartstopper_aura, necrolyte_reapers_scythe, windrunner_shackleshot); aghs_desc (Necrophos).

## Contra Treant Protector (treant)
- placar: Windranger venceu 34 de 109 partidas pro (31,2%, pior resultado da base com amostra de 30 jogos ou mais). Suporte 5 puro, sem nenhum pick pro como carry.
- por que importa: pior matchup registrado da Windranger com amostra grande o bastante pra confiar (109 jogos), mesmo ele sendo um suporte sem farm nenhum; o motivo mecânico é específico e vale citar justamente porque mostra o teto do kit dela.
- janelas: Treant Protector quase não sobe item de dano, farma puxando wave e sobe Aghanim's Shard (19,0) e Blink Dagger (26,4) tarde, pro padrão de suporte; Windranger segue o próprio timing de pos 1 (Maelstrom 13,4, Mjollnir 18,3, BKB 24,4) sem travar nele diretamente até a luta em grupo acontecer. A janela de risco real não é uma janela de minuto, é qualquer teamfight em que ele consiga lançar Overgrowth (cooldown de 110 a 90 s, raio 800) com ela dentro.
- o que ele faz com você: Overgrowth prende todo mundo num raio de 800 por até 5 s e atravessa Black King Bar (bkbpierce: yes, constants_abilities.json), o seu BKB não resolve esse prendimento, diferente de quase todo outro disable da lista; Leech Seed, no acerto do ataque básico dele, enraíza e desarma por um instante, cortando seu Focus Fire inteiro se ele conseguir acertar o combo.
- o que você faz com ele: Powershot acerta a 3000 de distância, bem além do alcance de melee dele; se ele ficar isolado sem o time perto, Shackleshot mais o seu dano físico fecha ele rápido, porque ele tem pouco HP e nenhuma fuga própria além do Blink Dagger tardio.
- itens que viram: Black King Bar não resolve o Overgrowth (ele atravessa por design), a única resposta é posição, ficar fora do raio de 800 antes dele lançar; Linken's Sphere bloqueia o próximo feitiço "unit target" dele, mas o Overgrowth é em área, não unit target, então não resolve.
- como jogar: evite agrupar sua equipe perto de árvore alta quando o Overgrowth dele estiver disponível; fora de teamfight, ele não ameaça seu 1x1 em nada, farme longe dele e deixe o impacto dele só pra quando o time já estiver junto.
- fonte: pro_dados/windrunner.json; pro_dados/treant.json; constants_abilities.json (treant_overgrowth, treant_leech_seed, windrunner_powershot); content/fichas/treant.md.

## Contra Morphling (morphling)
- placar: Windranger venceu 54 de 90 partidas pro (60,0%, vantagem grande). O exemplo clássico de dois carries pos 1 que quase nunca dividem lane mas cujo confronto direto importa de verdade.
- por que importa: os dois saem pos 1 no catálogo do projeto, raramente se enfrentam em lane, mas competem pelo mesmo papel de hard-carry físico de fim de jogo; é também o melhor resultado dela entre os oponentes de alto winrate com amostra de 30 jogos ou mais, empatado com Necrophos.
- janelas: Morphling fecha Power Treads aos 6,0 (mediana de 63 de 63 jogos, content/porque_itens/morphling.md), Morbid Mask por volta de 8,1 a 8,2, Vladmir's Offering perto de 10,7 e Manta Style por volta de 18,4; Windranger fecha Maelstrom aos 13,4 e Mjollnir aos 18,3, quase junto do Manta dele. Até os 18 min Morphling é frágil fora de item, sem nenhum disable ou burst, só Waveform (dash reto com dano) e Adaptive Strike (empurrão à distância). A partir dos 18 min, com Manta pronto, ele ganha mobilidade, mas o dano dele continua sendo quase 100% autoataque escalado pela Attribute Shift.
- o que ele faz com você: Waveform atravessa em linha reta com dano e slow, serve tanto pra engajar quanto pra fugir; Adaptive Strike empurra e causa dano mágico à distância, ignora o Windrun porque não é ataque básico.
- o que você faz com ele: Windrun dá evasão total contra o autoataque dele, que é praticamente todo o dano que ele tem fora dos dois feitiços de utilidade; Shackleshot prende ele antes do Manta estar pronto (18,4), quando ele ainda não tem fuga própria de verdade.
- itens que viram: nenhum item físico dele resolve o Windrun, a janela dela de evasão simplesmente nega o win condition dele por 3 a 6 s; seu Black King Bar (24,4) bloqueia o Adaptive Strike, a única fonte de dano mágico garantido dele.
- como jogar: force a troca antes dos 18 min, quando ele ainda não tem Manta nem mobilidade real; se ele já tiver Manta, ative Windrun antes de engajar, o autoataque dele simplesmente erra durante a janela.
- fonte: pro_dados/windrunner.json; pro_dados/morphling.json; constants_abilities.json (morphling_waveform, morphling_adaptive_strike_agi, windrunner_windrun); content/porque_itens/morphling.md.

## Contra Weaver (weaver)
- placar: Windranger venceu 51 de 86 partidas pro (59,3%, vantagem grande). Amostra de 30 jogos ou mais, um dos melhores resultados da base.
- por que importa: Weaver é quase só pos 1 no pro atual (farmer ranged solo), raramente divide lane com a Windranger, mas entra pela amostra e por ser outro carry físico que ela domina de longe; bom contraste com Morphling e Necrophos porque mostra o mesmo padrão, carry frágil que depende de ficar vivo pra farmar.
- janelas: Weaver fecha Boots of Elves cedo (5,4) e Power Treads aos 7,8, farmando sozinho com Shukuchi (invisibilidade e velocidade); Windranger fecha Maelstrom aos 13,4 nessa janela e já ameaça de longe com Powershot. Weaver só soma Aghanim's Shard por volta de 18,5 e Dragon Lance aos 19,8; até lá ele é muito frágil pra entrar em troca direta, prefere farmar e fugir.
- o que ele faz com você: Shukuchi dá invisibilidade e velocidade máxima por 4 s, com dano ao saltar fora dela; Time Lapse desfaz os últimos 5 s de vida e mana e limpa debuff como dispel forte, o que inclui desfazer um Shackleshot bem-sucedido se ele ativar a tempo.
- o que você faz com ele: Powershot ameaça metade da vida dele de longe desde o nível 4, muito antes de qualquer item de sobrevivência dele estar pronto; Shackleshot precisa acertar antes do Time Lapse, senão ele desfaz o próprio stun.
- itens que viram: não existe item seu que impeça o Time Lapse (é passivo do kit dele, recarrega em 70 a 40 s por nível), a resposta é atacar quando o cooldown já foi gasto; seu Mjollnir (Chain Lightning atravessa evasão) ajuda a acertar mesmo se ele tentar se esconder com Shukuchi em área.
- como jogar: force o combo logo que avistar o Shukuchi dele ativo, cada segundo de invisibilidade gasto sem ele fugir de verdade é cooldown que não volta; depois que ele gastar o Time Lapse uma vez, a janela seguinte de 40 a 70 s é livre de dispel forte.
- fonte: pro_dados/windrunner.json; pro_dados/weaver.json; constants_abilities.json (weaver_shukuchi, weaver_time_lapse, windrunner_powershot, windrunner_shackleshot); content/fichas/weaver.md.

## Contra Alchemist (alchemist)
- placar: Windranger venceu 31 de 71 partidas pro (43,7%, desvantagem clara). Amostra de 30 jogos ou mais, um dos piores resultados da base.
- por que importa: o exemplo citado pelo dono do site, dois carries pos 1 que quase nunca dividem lane (Alchemist puxa camp sozinho desde o cedo), mas o confronto de poder entre os dois importa porque competem pelo mesmo papel de farmer físico de fim de jogo.
- janelas: Alchemist fecha Soul Ring aos 6,0 e Radiance por volta de 13,9, puxando camp atrás de camp com Acid Spray; Windranger fecha Maelstrom aos 13,4 quase na mesma janela. Até ali os dois só farmam, sem ameaça direta. Dos 14 aos 24 min o Alchemist liga Chemical Rage (duração 30 s, até 120 de regen por segundo no nível 18) sempre que entra em troca, o que sustenta ele contra o Focus Fire dela; o Black King Bar dela sai aos 24,4, perto do Aghanim's Scepter dele (22,4) ou do Blink dele (21,4). Depois dos 24 min, com BKB pronto, Windranger consegue furar o sustain dele em burst rápido antes do Chemical Rage reaplicar.
- o que ele faz com você: Radiance causa dano mágico contínuo em área (650 de raio) que não é ataque básico, então o Windrun não bloqueia; Chemical Rage dá regeneração alta por segundo, o suficiente pra ele sobreviver a uma janela de Focus Fire inteira se já estiver com vida alta.
- o que você faz com ele: Shackleshot prende ele antes do Blink Dagger estar pronto (21,4); Powershot acerta de longe sem entrar na área do Radiance dele.
- itens que viram: seu Black King Bar (24,4) não bloqueia o burn do Radiance (é dano de aura, não feitiço direto, mas o Chemical Rage em si não é mágico nem físico, é um buff, então BKB nenhum lado resolve o sustain dele); a resposta de verdade é burst rápido, matar ele antes da regeneração compensar o dano, não troca prolongada.
- como jogar: evite ficar dentro da área do Radiance dele parada; force o combo de burst (Shackleshot + Powershot carregado + Focus Fire) de uma vez, troca longa favorece o sustain da Chemical Rage dele.
- fonte: pro_dados/windrunner.json; pro_dados/alchemist.json; constants_abilities.json (alchemist_chemical_rage, windrunner_shackleshot, windrunner_powershot); confrontos/alchemist.md (seção Windranger, placar espelho); content/porque_itens/alchemist.md.
