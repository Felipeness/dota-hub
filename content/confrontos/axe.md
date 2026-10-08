---
id: confrontos-axe
heroi: Axe
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/axe.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/centaur.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/slardar.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/bane.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/monkey_king.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/abaddon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/faceless_void.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/morphling.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/death_prophet.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Contra Shadow Fiend (nevermore)
- placar: Axe venceu 194 de 386 partidas de pro (50,3%). Fonte: pro_dados/axe.json (confrontos).
- por que importa: é o oponente com mais jogos contra Axe no banco de pro (386), de longe o mais comum entre os 7000+ confrontos listados.
- janelas: até os 7:12 nenhum dos dois tem item de spike (Axe só tem Phase Boots, mediana 7:12, pro_dados/axe.json); dos 7 aos 10min Shadow Fiend ainda sem Mask of Madness (mediana 10:12, pro_dados/nevermore.json), então é a janela em que Axe pode fechar com Blade Mail (12:36) e punir quem bate nele sem resposta; dos 15 aos 23min Axe já tem Blink (15:42) e Shadow Fiend ainda sem Black King Bar (25:12), ótimo pra pegá-lo isolado antes do Hurricane Pike (23:00) dar distância; depois dos 25min os dois correm pra BKB quase junto e Shadow Fiend com Crystalys/Daedalus (24:12 / 28:18) passa a vencer a troca de dano à distância se tiver espaço pra atirar Shadowraze.
- o que ele faz com você: Shadowraze acerta até 280 de dano instantâneo numa das três distâncias (perto/médio/longe); cada raze que acerta o mesmo alvo ainda aplica um amplificador que soma mais dano no próximo acerto (constants_abilities.json: nevermore_shadowraze1, base 85 a 280 + 35 a 80 por stack). Se ele guardou almas, Requiem of Souls (raio 1000) assusta e ainda reduz resistência mágica de quem pega linha.
- o que você faz com ele: Berserker's Call (raio 315, 12 a 15 de armadura) tira o raze de linha reta dele e trava ele pra bater em você; Counter Helix dispara a cada 4 a 7 ataques recebidos e devolve 100 a 160 de dano puro (constants_abilities.json), que corta boa parte da vida fina do SF; Culling Blade (275 a 475 de dano puro) mata ele cedo, antes do BKB.
- itens que viram: Blade Mail (ativo devolve 85% do dano por 5,5s, items.json) anula o Mask of Madness dele; Black King Bar dos dois decide quem fecha o combo primeiro depois dos 25min.
- como jogar: force o engage antes dos 23min, enquanto ele ainda não tem Hurricane Pike pra criar distância. Depois do BKB dele, só inicie com o seu BKB também pronto, senão Shadowraze corta seu combo no meio.
- fonte: pro_dados/axe.json; pro_dados/nevermore.json; constants_abilities.json (axe_berserkers_call, axe_counter_helix, axe_culling_blade, nevermore_shadowraze1, nevermore_requiem); items.json (blade_mail).

## Contra Rubick (rubick)
- placar: Axe venceu 174 de 339 (51,3%). Fonte: pro_dados/axe.json.
- por que importa: 2º oponente com mais jogos contra Axe em pro (339), suporte quase onipresente nas composições atuais.
- janelas: até os 10:18 Rubick ainda não tem Arcane Boots (pro_dados/rubick.json), então é lento pra escapar; Axe já com Phase Boots (7:12) consegue fechar e punir antes disso. Dos 10 aos 21min Rubick segue sem Blink (21:36), fase mais vulnerável a gank; depois dos 21:36 ele ganha reposicionamento e passa a conseguir roubar o último feitiço usado por você ou por um aliado.
- o que ele faz com você: Spell Steal copia o último feitiço lançado por qualquer herói inimigo visível, incluindo Culling Blade se ele vir você usar; se ele rouba a sua ult, ele ganha um Culling Blade com a recarga dele, não a sua (stolen spell cooldown reduction de 10 a 30%, constants_abilities.json).
- o que você faz com ele: Call tira ele do alcance de cast por 2,1 a 3s; como ele tem pouca vida, Culling Blade (275 a 475 de dano puro) ou mesmo o Counter Helix sozinho já ameaça matar.
- itens que viram: Aether Lens dele (22:54) estica o alcance de Spell Steal e Telekinesis; seu Blink (15:42) chega antes disso na maior parte dos jogos.
- como jogar: mate Rubick rápido e sem deixar ele ver sua Culling Blade de perto, se possível use a ult só depois que ele já gastou o blink ou morreu, pra não dar a ele uma cópia sua.
- fonte: pro_dados/axe.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, axe_culling_blade).

## Contra Snapfire (snapfire)
- placar: Axe venceu 155 de 306 (50,7%). Fonte: pro_dados/axe.json.
- por que importa: 3º oponente com mais jogos contra Axe (306) e suporte que roda por mais de uma rota nas partidas pro 7.40-7.41 (54,8% na rota de off, 23,9% na rota segura, 21,1% no mid; OpenDota explorer), aparece em boa parte dos trios contra o offlane.
- janelas: fase de lane é troca de poke; aos 16:54 Snapfire já tem o Aghanim's Shard dela (pro_dados/snapfire.json), bem mais cedo que o seu (22:54), então ela ganha alcance extra em Scatterblast/Lil Shredder antes de você ter resposta mágica própria; sua Blade Mail (12:36) já ajuda a segurar esse poke antes disso. Depois dos 20:42 ela tem Blink e Glimmer Cape (21:54) pra salvar aliado do seu Call.
- o que ele faz com você: Mortimer Kisses lança 8 globos de até 360 de dano cada em até 5,5s, com queimadura de 60 a 100 por segundo e redução de giro em Snapfire durante o cast; se você travou o time dela com Call, o ult dela acerta todo mundo parado, inclusive você.
- o que você faz com ele: ela tem pouca vida pra suporte; Culling Blade quase sempre mata, e Call+Counter Helix corta a vida antes dela conseguir se afastar.
- itens que viram: Blade Mail segura o poke de Scatterblast; Glimmer Cape dela (invisibilidade + resistência mágica) pode tirar o alvo do seu Call se ativado a tempo.
- como jogar: feche a call antes dela ter mana pra Mortimer Kisses em você; se ela já tem Shard, respeite o alcance extra na lane.
- fonte: pro_dados/axe.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_mortimer_kisses); partidas pro 7.40-7.41 (OpenDota explorer).

## Contra Jakiro (jakiro)
- placar: Axe venceu 148 de 302 (49,0%). Fonte: pro_dados/axe.json.
- por que importa: 4º oponente com mais jogos (302), suporte de zona que farma de longe e segura lane com dano em área.
- janelas: na lane Jakiro fica parado trocando Dual Breath e guardando mana pro Macropyre; ele só tem Arcane Boots aos 11:42 (pro_dados/jakiro.json), então até lá é lento. Você precisa do seu Blink (15:42) pra fechar distância, já que ele raramente anda até você. Depois dos 22 aos 26min ele ganha Glimmer Cape (22:48) e Force Staff (26:12) pra escapar do Call antes dele conectar.
- o que ele faz com você: Macropyre cobre uma linha larga (500 de largura) por 10s com 100 a 200 de dano por segundo; se ele acerta o Call bem no meio do grupo travado, o dano em área pune todo mundo parado, inclusive você.
- o que você faz com ele: pouca vida e sem disable de escape (fora o slow do Ice Path); Call+Culling Blade mata rápido se você chegar antes do Macropyre estar pronto.
- itens que viram: seu Blink decide se você chega antes do Macropyre; o Force Staff dele decide se ele escapa do raio do seu Call (315).
- como jogar: inicie de ângulo onde ele não consiga alinhar o Macropyre em cima do seu time depois do Call; gaste o blink pra fechar, não espere ele vir.
- fonte: pro_dados/axe.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre).

## Contra Lion (lion)
- placar: Axe venceu 129 de 283 (45,6%), abaixo da média geral dele (contra os outros 5 do top 6 por jogos ele fica perto de 50%). Fonte: pro_dados/axe.json.
- por que importa: 5º mais jogado contra Axe (283 jogos) e o único do top 6 em que Axe perde mais do que ganha, sinal de que o combo de burst de Lion é um problema real.
- janelas: antes dos 18:12 Lion ainda não tem Blink Dagger (pro_dados/lion.json), então ele depende de acertar Earth Spike ou Hex em alcance curto pra conectar o Finger of Death; é a janela em que Axe, já com Phase Boots (7:12) e Blade Mail (12:36), pode furar a troca se chegar primeiro. Depois dos 18:12 Lion ganha blink próprio e passa a iniciar luta sozinho, inclusive em você.
- o que ele faz com você: Finger of Death causa 600 a 850 de dano mágico instantâneo (constants_abilities.json), dano que sozinho mata Axe sem BKB em boa parte do early/mid game; se Lion acerta Hex antes do Call, você nem consegue iniciar.
- o que você faz com ele: pouquíssima vida e sem fuga própria além de blink comprado; Call+Culling Blade (275 a 475 de dano puro) mata ele em qualquer fase do jogo se você chegar perto.
- itens que viram: seu Black King Bar (25:54) é o que permite iniciar em cima de Lion sem medo do Hex ou do Finger of Death; antes disso, jogue pelo flanco, não de frente.
- como jogar: não force engage sem checar se Lion já gastou Hex ou Finger of Death recentemente; depois do seu BKB o combo vira muito mais seguro.
- fonte: pro_dados/axe.json; pro_dados/lion.json; constants_abilities.json (lion_finger_of_death).

## Contra Hoodwink (hoodwink)
- placar: Axe venceu 130 de 261 (49,8%). Fonte: pro_dados/axe.json.
- por que importa: 6º mais jogado contra Axe (261 jogos), suporte de pick que ameaça de longe com Sharpshooter.
- janelas: Sharpshooter tem até 3s de carga e alcance de 3000, então a ameaça existe assim que ela tem nível 6, normalmente ainda na fase de lane; mas o tempo de carga dá chance de interromper ou fechar distância com Blink (15:42) antes do tiro sair. Dos 23 aos 26min ela ganha Aghanim's Shard (23:48) e Force Staff (26:06), reposicionando melhor e tornando Bushwhack mais punitivo perto de árvore.
- o que ele faz com você: Bushwhack perto de árvore estuna 1,5 a 2,1s e causa até 360 de dano ao longo do efeito; Sharpshooter carregado no máximo causa até 1350 de dano, break e slow de alvo único.
- o que você faz com ele: pouca vida, sem disable de longo alcance além do Bushwhack; se você fecha rápido com Blink, Call trava ela antes do Sharpshooter carregar.
- itens que viram: seu Blade Mail devolve o burst do Sharpshooter se ela mirar em você; o Shard dela dá mobilidade extra pra fugir do seu raio de Call depois dos 24min.
- como jogar: respeite o alcance do Sharpshooter fora da floresta; perto de árvore, assuma que o root vem, não ande sozinho nessas áreas contra ela.
- fonte: pro_dados/axe.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter).

## Contra Mars (mars)
- placar: Axe venceu 134 de 260 (51,5%). Fonte: pro_dados/axe.json.
- por que importa: mesma posição principal, os dois jogam na rota de off em mais de 95% das partidas pro 7.40-7.41 (OpenDota explorer), o oponente de offlane x offlane mais jogado contra Axe em pro (260 jogos).
- janelas: os dois correm pro Blink quase no mesmo ritmo (Axe 15:42 contra Mars 15:12, pro_dados/mars.json), então quem tem o item primeiro dita quem inicia a troca. Dos 18 aos 21min Mars pode usar Arena of Blood pra cercar e travar Axe do lado de fora antes dele conseguir usar o Call; depois dos 21:30 o Aghanim's Shard de Mars reforça ainda mais essa parede.
- o que ele faz com você: Arena of Blood cria uma arena de 550 de raio por 5,5s com lanceiros que batem em quem fica perto da borda, 80 a 240 de dano por lançada (uma a cada segundo, constants_abilities.json: mars_arena_of_blood); se Axe fica preso dentro sem alcançar o alvo, perde o timing do Call.
- o que você faz com ele: Counter Helix pune Mars se ele tentar trocar auto-ataque contra você dentro da arena; Call tira Mars do próprio controle da arena por 2,1 a 3s.
- itens que viram: quem completa o Blink primeiro tende a vencer a abertura da luta; Black King Bar (25:54 Axe x 26:30 Mars) decide quem segura o combo do outro até o fim.
- como jogar: não entre dentro da Arena of Blood sem conseguir alcançar o Mars imediatamente; se ele abrir a arena em cima de você, recue até ela sumir (5,5s) em vez de lutar preso.
- fonte: pro_dados/axe.json; pro_dados/mars.json; constants_abilities.json (mars_arena_of_blood); partidas pro 7.40-7.41 (OpenDota explorer).

## Contra Centaur Warrunner (centaur)
- placar: Axe venceu 100 de 229 (43,7%), amostra boa (229 jogos) e desvantagem clara. Fonte: pro_dados/axe.json.
- por que importa: 2º offlane mais jogado contra Axe (229 jogos) e uma das piores taxas dele com amostra relevante, ambos tanques de Força que disputam o mesmo espaço de iniciação.
- janelas: Centaur farma rápido com Vanguard (8:30, pro_dados/centaur.json) e assim que tem nível 6 pode vir de Stampede do outro lado do mapa, pegando Axe de surpresa antes dele conseguir iniciar primeiro. Dos 18 aos 21min ele ainda não tem Pipe (18:06) nem Crimson Guard (21:30), a janela em que o combo Call + Blade Mail de Axe rende mais, sem mitigação de time.
- o que ele faz com você: Stampede atropela e desacelera totalmente por área (100% de slow, não é stun) com dano baseado em Força (multiplicador de 2 a 3x a Força dele), um ataque de iniciação que ignora a necessidade de Blink; Hoof Stomp (70 a 280 de dano, 1,6 a 2,2s de stun) interrompe seu Call antes dele sair.
- o que você faz com ele: Counter Helix pune Centaur quando ele bate em você tentando estourar Double Edge/auto-ataque; Culling Blade tira uma boa fatia da vida dele mesmo ele sendo tanque.
- itens que viram: Pipe e Crimson Guard dele neutralizam boa parte do seu Blade Mail e Call em luta de grupo depois dos 18 a 21min; corra pra fechar antes disso.
- como jogar: force a troca antes dos 18min, enquanto ele ainda não tem itens de time; depois disso, prefira lutas isoladas, não de grupo contra o kit dele.
- fonte: pro_dados/axe.json; pro_dados/centaur.json; constants_abilities.json (centaur_stampede, centaur_hoof_stomp).

## Contra Slardar (slardar)
- placar: Axe venceu 121 de 228 (53,1%). Fonte: pro_dados/axe.json.
- por que importa: 3º offlane mais jogado contra Axe (228 jogos) e um dos poucos pos 3 em que Axe tem vantagem clara, bom contraste de como o Counter Helix vira o duelo de ataque automático.
- janelas: Slardar fica forte cedo com o Aghanim's Shard dele (17:12, pro_dados/slardar.json), que amplifica dano físico e revela invisibilidade; mas é exatamente aí que Axe pune, já que Slardar precisa de 3 ataques pra ativar Bash enquanto Counter Helix dispara a cada 4 a 7 ataques recebidos (constants_abilities.json), ou seja, ele apanha de volta tentando acumular o próprio combo.
- o que ele faz com você: Bash of the Deep (3 ataques, até 200 de dano bônus) e Corrosive Haze (reduz armadura e revela invisíveis) tornam a troca de auto-ataque perigosa se ele acertar primeiro.
- o que você faz com ele: Counter Helix devolve dano puro toda vez que ele insiste em bater em você durante o Call, e Culling Blade fecha a troca.
- itens que viram: Blade Mail seu some com a vantagem de ataque automático dele; Black King Bar dos dois (25:54 Axe x 25:06 Slardar) decide quem segura o combo primeiro.
- como jogar: deixe ele bater em você durante o Call, o Counter Helix compensa o Bash; não troque auto-ataque fora do Call sem vantagem de vida.
- fonte: pro_dados/axe.json; pro_dados/slardar.json; constants_abilities.json (axe_counter_helix, slardar_bash).

## Contra Bane (bane)
- placar: Axe venceu 25 de 88 (28,4%), pior taxa de vitória dele entre os oponentes com 30 ou mais jogos. Fonte: pro_dados/axe.json.
- por que importa: a pior desvantagem registrada de Axe em pro com amostra confiável (88 jogos), e o motivo é mecânico, não coincidência.
- janelas: a fase de lane decide o confronto. Bane pode usar Nightmare a qualquer momento que tenha mana, sem depender de item; só depois dos 22:36 ele ganha Aether Lens (pro_dados/bane.json) pra lançar Fiend's Grip de mais longe. Axe quer resolver o confronto antes disso, mas o problema é justamente o Call.
- o que ele faz com você: Nightmare põe um alvo pra dormir por 3,5 a 6,5s; se outra unidade bate nesse alvo dormindo, o sono passa pra quem bateu. Como Berserker's Call obriga todo mundo perto a atacar Axe, se Bane dormir a si mesmo ou um aliado dentro do raio do Call, o sono passa pra você no meio do combo, te tirando da luta. Fiend's Grip (channel de 4,75 a 5,75s, 70 a 150 de dano por tick, 5% de mana drenada por segundo) te prende de vez se o Nightmare já tiver te travado antes.
- o que você faz com ele: pouca vida, Culling Blade mata rápido se você chegar nele antes do combo dele sair.
- itens que viram: Black King Bar seu (25:54) não limpa o Nightmare que já passou pra você antes de ativar (o dispel do BKB remove debuffs no cast, então ativar antes de ser alvo do repasse ajuda); o Aether Lens de Bane (22:36) é o item que mais aumenta o alcance da ameaça dele.
- como jogar: nunca use o Call perto de um aliado dormindo pelo Nightmare; se Bane está em jogo, segure o combo pra depois que ele usar Nightmare em outra coisa, ou ligue o BKB antes de iniciar.
- fonte: pro_dados/axe.json; pro_dados/bane.json; constants_abilities.json (bane_nightmare, bane_fiends_grip).

## Contra Monkey King (monkey_king)
- placar: Axe venceu 34 de 96 (35,4%), 3ª pior taxa entre os com 30 ou mais jogos. Fonte: pro_dados/axe.json.
- por que importa: carry com burst e mobilidade que escapa do raio curto do Call, um dos piores resultados de Axe com amostra relevante (96 jogos).
- janelas: Monkey King fica rápido muito cedo (Power Treads aos 6:00, pro_dados/monkey_king.json) e Boundless Strike já ameaça abrir a luta de 1100 de distância antes de Axe chegar perto; dos 13 aos 18min ele tem Echo Sabre (13:30) e Desolator (18:18), ganhando a troca de dano corpo a corpo mesmo com o Counter Helix de Axe batendo nele.
- o que ele faz com você: Boundless Strike tem Acerto Garantido (não erra, não é esquivado) e estuna 0,7 a 1,3s a até 1100 de distância, abrindo a luta nos termos dele antes do seu Call conectar; Jingu Mastery dá até 180 de dano bônus e 80% de roubo de vida nos 4 ataques seguintes ao 4º acerto no mesmo alvo, recuperando boa parte do que o Counter Helix tira.
- o que você faz com ele: Call ainda trava ele pra bater em você, e o Counter Helix pune o auto-ataque que ele depende pra ativar Jingu; Culling Blade mata se você chegar antes dele estar com o combo pronto.
- itens que viram: seu Black King Bar (25:54) segura o stun de longo alcance do Boundless Strike; o Aghanim's Shard dele (25:54) dá disfarce extra pra escapar ou flanquear.
- como jogar: não force a troca de auto-ataque sem checar se ele já empilhou Jingu Mastery; prefira iniciar você primeiro, antes do alcance de 1100 dele entrar em jogo.
- fonte: pro_dados/axe.json; pro_dados/monkey_king.json; constants_abilities.json (monkey_king_boundless_strike, monkey_king_jingu_mastery).

## Contra Abaddon (abaddon)
- placar: Axe venceu 63 de 163 (38,7%), 5ª pior taxa com amostra boa (163 jogos). Fonte: pro_dados/axe.json.
- por que importa: nas partidas pro 7.40-7.41 Abaddon joga mais na rota segura (65,4%) do que na de off (34,1%, OpenDota explorer), mas o motivo de importar é mecânico: o counter mais direto do kit de Axe, Abaddon neutraliza exatamente o combo Call + Counter Helix + Culling Blade.
- janelas: Radiance dele sai aos 16:18 (pro_dados/abaddon.json) e já pulsa dano enquanto ele tanka a lane; mas o perigo real começa antes disso, assim que ele tem mana pra Aphotic Shield. Axe precisa decidir o confronto rápido ou já chegar com Basher/Aghanim's pronto, porque depois dos 23 a 25min Abaddon tem Manta (23:36) e Blink (24:54) pra reposicionar.
- o que ele faz com você: Aphotic Shield cria uma barreira que absorve 120 a 210 de dano antes de estourar (constants_abilities.json), segurando sozinha boa parte do seu Counter Helix (100 a 160) ou parte do Culling Blade; Borrowed Time ativa sozinho quando a vida dele cai abaixo de 400, convertendo TODO dano recebido em cura por 4 a 6s, inclusive o dano puro do seu Culling Blade.
- o que você faz com ele: Call ainda trava ele e o time dele pra bater em você; se você conseguir matar antes dele acumular mana pro Shield ou enquanto o Borrowed Time está de recarga, o combo funciona normal.
- itens que viram: Black King Bar seu não ajuda aqui, o problema não é disable, é o Shield/Borrowed Time absorvendo seu dano; Basher/Abyssal (via os componentes Ogre Axe e Mithril Hammer, medianas 22:48 e 23:36 em pro_dados/axe.json) ajuda a prender ele fora do alcance do próprio Shield recém-lançado.
- como jogar: cheque se o Aphotic Shield dele está de recarga antes de abrir o combo; Culling Blade gasta melhor em cima de outro alvo quando Abaddon está com o Borrowed Time disponível.
- fonte: pro_dados/axe.json; pro_dados/abaddon.json; constants_abilities.json (abaddon_aphotic_shield, abaddon_borrowed_time, axe_culling_blade); partidas pro 7.40-7.41 (OpenDota explorer).

## Contra Faceless Void (faceless_void)
- placar: Axe venceu 36 de 58 (62,1%), uma das melhores taxas dele com amostra ok (58 jogos). Fonte: pro_dados/axe.json.
- por que importa: os dois quase nunca dividem lane (Void é pos 1, Axe é pos 3), mas são o tipo de matchup que decide jogo fora da lane: Void sem Chronosphere é um dos carries mais fracos pra se ganhar sozinho do mapa.
- janelas: até o nível 6 (early/mid da fase de lane) Void não tem Chronosphere e nenhum disable, só Time Walk (um blink curto, não um stun); é a janela de ouro pro Axe. Power Treads dele saem aos 6:18 (pro_dados/faceless_void.json), então ele ganha mobilidade de farm cedo, mas sem espaço pra lutar. Dos 15 a 16min ele tem Battle Fury/Maelstrom e passa a empurrar farm rápido, então Axe quer resolver antes disso.
- o que ele faz com você: nada de disable antes do nível 6; depois disso, Chronosphere (raio 500, 3,75 a 4,75s) te prende junto com o time, mas só se ele sobreviver até lá puro right-click.
- o que você faz com ele: Counter Helix pune Void toda vez que ele tenta jungle farmar ou trocar auto-ataque perto de você; Culling Blade mata rápido, já que ele é frágil cedo.
- itens que viram: nenhum item seu específico, é puramente timing, mate antes do nível 6/Chronosphere ou antes do Battle Fury dar sustain.
- como jogar: gankeie a jungle dele cedo; se o jogo passar dos 20min sem Void morrer, a vantagem derrete.
- fonte: pro_dados/axe.json; pro_dados/faceless_void.json; constants_abilities.json (faceless_void_chronosphere, faceless_void_time_dilation).

## Contra Morphling (morphling)
- placar: Axe venceu 40 de 65 (61,5%), 3ª melhor taxa dele com amostra ok (65 jogos). Fonte: pro_dados/axe.json.
- por que importa: o exemplo clássico de "dois carries que não se enfrentam na lane": Axe é offlane, Morphling é safelane, mas o power spike de cada um decide se Morphling consegue chegar são e salvo ao late game.
- janelas: antes dos 10min Morphling é extremamente frágil, sem disable próprio, só Waveform pra fugir (invulnerável durante o dash, mas é uma linha reta e tem recarga); dos 10 aos 18min ele só tem Vladmir's Offering (10:42, pro_dados/morphling.json), pouca vida extra; só depois de Manta (18:24) ele dispela e ganha ilusões pra confundir o Call, e só com Butterfly (25:48) ele de fato vira a troca de 1x1 a favor dele.
- o que ele faz com você: Waveform avança em linha, dano no caminho e invulnerabilidade durante o dash; Adaptive Strike causa dano mágico com stun e knockback que crescem com a Força dele, e o Morph (troca de pontos entre Força e Agilidade) deixa ele escolher entre ficar mais tanque ou bater mais forte no auto-ataque.
- o que você faz com ele: Call trava ele mesmo durante boa parte da fase squishy; Counter Helix pune o right-click de Morphling tentando atacar de volta; Culling Blade (275 a 475 de dano puro) mata ele fácil antes do Manta.
- itens que viram: seu Blink (15:42) chega antes do Manta dele (18:24) na maioria dos jogos, é a janela certa pra pegar ele isolado; depois do Butterfly ele ganha evasão alta e a troca vira contra você.
- como jogar: gankeie Morphling antes dos 18min; se ele já tem Manta e Butterfly, evite o 1x1 sem ajuda, prefira focar ele em grupo onde ele não escolhe o alvo do dano.
- fonte: pro_dados/axe.json; pro_dados/morphling.json.

## Contra Death Prophet (death_prophet)
- placar: Axe venceu 32 de 49 (65,3%), a melhor taxa de vitória dele entre todos os oponentes com 30 ou mais jogos. Fonte: pro_dados/axe.json.
- por que importa: a vida baixa dela encaixa perfeitamente no dano puro de Axe, e mesmo os itens dela não resolvem isso, bom contraste pra entender por que dano puro é tão forte.
- janelas: Death Prophet constrói rápido pro Aghanim's Scepter dela, completando aos 18:18 (pro_dados/death_prophet.json), bem antes da média de outros suportes/mids; mesmo assim ela segue com pouca vida. Shiva's Guard (27:42) e Black King Bar (26:24) chegam tarde e não resolvem o problema real.
- o que ele faz com você: Exorcism solta espíritos que perseguem alvos próximos (raio 700) enquanto ela ficar parada ou perto da área; Silence (3,5 a 5s) pode travar seu cast de Call ou Battle Hunger se ela acertar primeiro; Carrion Swarm poka de longe.
- o que você faz com ele: Culling Blade sozinho (275 a 475 de dano puro) já é quase o HP total dela em boa parte do jogo; o dano puro ignora resistência mágica, então nem o Shiva's dela filtra.
- itens que viram: nenhum item específico dela resolve, o problema é a vida baixa; do seu lado, Culling Blade é suficiente mesmo sem Blade Mail ou Call completos.
- como jogar: priorize ela primeiro em qualquer luta de grupo; não precisa gastar o combo inteiro, só feche com Culling Blade.
- fonte: pro_dados/axe.json; pro_dados/death_prophet.json; constants_abilities.json (death_prophet_exorcism, death_prophet_silence, axe_culling_blade).
