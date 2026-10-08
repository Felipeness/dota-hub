---
id: confrontos-clinkz
heroi: Clinkz
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/clinkz.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/beastmaster.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/windrunner.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- dota-hub-conteudo-novo/pro_dados/ursa.json
- dota-hub-conteudo-novo/pro_dados/morphling.json
- dota-hub-conteudo-novo/pro_dados/rattletrap.json
- dota-hub-conteudo-novo/pro_dados/skywrath_mage.json
- dota-hub-conteudo-novo/pro_dados/ancient_apparition.json
- dota-hub-conteudo-novo/pro_dados/treant.json
- dota-hub-conteudo-novo/pro_dados/spirit_breaker.json
- dota-hub-conteudo-novo/pro_dados/dazzle.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Contra Shadow Fiend (nevermore)
- placar: Clinkz venceu 102 de 200 partidas de pro, 51,0% (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: é o oponente com mais jogos contra Clinkz no banco de pro (200). Os dois raramente dividem lane (Clinkz é pos1 safelane, Shadow Fiend é mid clássico), mas são as duas maiores hipercarries de autoataque/burst do jogo e cruzam o mapa o tempo todo, igual o par alchemist contra morphling que não tem lane em comum mas decide o jogo.
- janelas: Shadow Fiend enche os 20 souls do Necromastery cedo (+27 de dano fixo, constants_abilities.json, nevermore_necromastery) e com lh10 de 78 (pro_dados/nevermore.json) ele já está no teto de souls bem antes dos 10 min, period em que domina qualquer troca crua de Shadowraze. Clinkz só estoura depois: Desolator aos 14:18 (mediana, 1063 de 1137 partidas) e Aghanim's Shard aos 16:42 (990 partidas, pro_dados/clinkz.json). Dos 10 aos 14 min Shadow Fiend bate mais forte; dos 14 aos 25 min, com Desolator e Shard prontos, Clinkz vira favorito porque abre a troca invisível e ainda emenda Burning Barrage, que atravessa Black King Bar (constants_abilities.json, clinkz_burning_barrage, bkbpierce sim). Depois dos 25 min os dois são de vidro, ganha quem conecta o primeiro burst.
- o que ele faz com você: Shadowraze bate até 280 de dano base mais bônus por soul, num raio de 250 na frente dele, com recarga de só 9s entre as três razes (constants_abilities.json). Requiem of Souls assusta e reduz até 30% de velocidade de movimento e até 15% de resistência mágica num raio de 1000, mas não atravessa Black King Bar.
- o que você faz com ele: Black King Bar anula o Requiem inteiro; o dano fixo do Searing Arrows e a Burning Barrage passam mesmo contra o Black King Bar dele (bkbpierce sim nos dois), então o item dele não impede seu DPS em nenhuma das duas formas.
- itens que viram: Desolator multiplica seu autoataque contra um herói sem armadura alta; Aghanim's Shard atravessa o Black King Bar dele e ainda assim conecta. Do lado dele, Black King Bar (mediana 25:12, pro_dados/nevermore.json) é a única resposta real ao seu engajamento de Skeleton Walk.
- como jogar: evite lane fixa, mas dispute os mesmos camps de jungle, porque quem fica mais forte primeiro farma por cima do outro. Antes dos 14 min jogue defensivo contra Shadowraze; depois do Desolator, force a troca você mesmo com Skeleton Walk mais Strafe antes que ele solte Requiem.
- fonte: pro_dados/clinkz.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_necromastery, nevermore_requiem, nevermore_shadowraze1, clinkz_burning_barrage, clinkz_searing_arrows).

## Contra Jakiro
- placar: Clinkz venceu 78 de 132 partidas de pro, 59,1% (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: suporte de lane mais jogado contra Clinkz em pro. Dual Breath e Ice Path formam o poke clássico contra um herói ranged frágil no early.
- janelas: Jakiro é 100% suporte (gpm 315, lh10 8, pro_dados/jakiro.json), o pico dele é por nível de habilidade, não por item. Clinkz segue perigoso só a partir do Desolator (14:18) e do Shard (16:42); antes disso o jogo é sobreviver ao poke de Dual Breath mais Ice Path sem trocar à toa.
- o que ele faz com você: Ice Path estuna até 2s no nível máximo num caminho de gelo que atravessa a lane (constants_abilities.json, jakiro_ice_path), cancelando o Skeleton Walk assim que Clinkz é pego parado nele. Macropyre (ult) cobre até 10s de área com 200 de dano por segundo, e com Aghanim's Scepter dele dura mais e vira dano puro (aghs_desc).
- o que você faz com ele: Jakiro tem lh10 de só 8, então Clinkz farma livre fora do alcance do poke e, assim que tem Desolator, mata ele num Strafe só, já que Jakiro não tem nenhuma mobilidade própria.
- itens que viram: Aghanim's Shard do Clinkz (Burning Barrage) atravessa a Macropyre sem precisar entrar nela; Black King Bar anula Ice Path e Macropyre por completo.
- como jogar: no early, não force troca dentro do raio de Ice Path, deixe o suporte gastar mana no poke e farme por fora. Depois do Desolator, ataque Jakiro isolado antes que ele consiga setar a Macropyre numa teamfight.
- fonte: pro_dados/clinkz.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_macropyre); https://api.opendota.com/api/constants/aghs_desc (Jakiro).

## Contra Beastmaster
- placar: Clinkz venceu 69 de 129 partidas de pro, 53,5% (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: o iniciador mais jogado contra Clinkz em pro. Primal Roar é um dos poucos stuns que fecham o jogo mesmo quando Clinkz está invisível, desde que Beastmaster já tenha visão dele no instante do cast.
- janelas: Beastmaster farma quase igual a Clinkz (gpm 616, lh10 63, pro_dados/beastmaster.json) e o marco dele é um Aghanim's Scepter cedíssimo, mediana de 14:36 em 1466 de 1974 partidas, o que mostra que ele empurra lane e jungle desde o early. Isso cai quase em cima do Desolator do Clinkz (14:18). Dos 14 aos 20 min os dois estão no pico: Beastmaster tem o Roar, Clinkz tem o burst de autoataque.
- o que ele faz com você: Primal Roar estuna 3 a 4s e empurra numa linha de 300 de largura (constants_abilities.json, beastmaster_primal_roar), cancelando Skeleton Walk e qualquer tentativa de fuga. Primal Roar atravessa Black King Bar, então nem a imunidade a magia do Clinkz anula o stun. O shard dele aplica o debuff de Wild Axes a cada autoataque, uma amplificação de dano recebido que soma com a redução de armadura do próprio Desolator do Clinkz.
- o que você faz com ele: Beastmaster não tem escape nem evasão. Um burst de Strafe mais Desolator mata ele rápido se for pego fora da visão do Boar e do Hawk dele; fora disso, Clinkz farma mais rápido porque não depende de levar hit de creep pra ter dano.
- itens que viram: nenhum item de Clinkz anula o Primal Roar, já que ele atravessa Black King Bar; a defesa real é não ser visto. Do lado dele, Blink (mediana 18:36) é o item que faz o Roar conectar em quem tentou fugir.
- como jogar: evite ficar parado perto de arbustos onde o Boar ou o Hawk dele conseguem visão, é assim que o Roar acerta Clinkz mesmo sem ele perceber. Black King Bar não impede o stun do Roar, então a prioridade é não dar visão, não guardar o BKB pra isso.
- fonte: pro_dados/clinkz.json; pro_dados/beastmaster.json; constants_abilities.json (beastmaster_primal_roar, beastmaster_wild_axes); https://api.opendota.com/api/constants/aghs_desc (Beastmaster).

## Contra Rubick
- placar: Clinkz venceu 57 de 118 partidas de pro, 48,3% (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: 4º herói mais jogado contra Clinkz em pro, suporte que ameaça virar qualquer troca copiando a última magia do time inimigo, mesmo tendo pouco pra roubar do próprio kit do Clinkz.
- janelas: Rubick é suporte puro (gpm 374, lh10 17, pro_dados/rubick.json), sem power spike de item, escala por nível e pelo que rouba. Clinkz tem a janela livre até o time dele achar um disable; a partir do Desolator (14:18) mais Shard (16:42) ele vence qualquer 1x1 contra um Rubick isolado.
- o que ele faz com você: Fade Bolt reduz até 24% do dano de ataque e de magia por 10s no nível máximo (constants_abilities.json, rubick_fade_bolt), cortando parte do DPS numa troca. Telekinesis levanta e estuna em área por até 1,5s, ótimo pra travar Clinkz saindo do Skeleton Walk. Spell Steal tem pouco valor contra Clinkz porque Strafe é sem alvo, mas se ele usar Death Pact perto de Rubick, dá pra copiar.
- o que você faz com ele: Rubick não tem HP nem mobilidade própria. Um Strafe com Desolator ativo mata ele em dois ou três ataques se for pego sem o time por perto.
- itens que viram: Black King Bar ignora a Telekinesis e qualquer stun mágico que Rubick roube de outro herói. Linken's Sphere costuma ser dispensável contra ele, já que Rubick raramente guarda um nuke de alvo único que valha o bloqueio.
- como jogar: evite lutar perto de onde Rubick pode ter acabado de roubar um disable forte do resto do time inimigo. Fora isso, ele é o suporte mais fácil de isolar e matar depois do Desolator.
- fonte: pro_dados/clinkz.json; pro_dados/rubick.json; constants_abilities.json (rubick_fade_bolt, rubick_telekinesis, rubick_spell_steal).

## Contra Windranger (windrunner)
- placar: Clinkz venceu 60 de 115 partidas de pro, 52,2% (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: carry da mesma posição, com curva de dano por autoataque parecida (as duas agilidade dependem de attack speed) e um dos mais jogados contra Clinkz em pro, mesmo sem lane fixa em comum.
- janelas: Windranger sai de Power Treads aos 7:12 e passa pelo Maelstrom aos 13:24 (mediana, 1452 de 2596 partidas, pro_dados/windrunner.json), dando attack speed e um proc mágico em área antes do Desolator do Clinkz (14:18). Dos 13 aos 17 min ela bate mais forte na troca de poke; depois do Desolator mais Shard (16:42), Clinkz assume o 1x1 corpo a corpo porque o dano dela não escala tão rápido.
- o que ele faz com você: Windrun dá 100% de evasão por até 6s no nível máximo (constants_abilities.json, windrunner_windrun), durante a janela o autoataque normal de Clinkz simplesmente erra. Shackleshot estuna até 3,25s se prender Clinkz numa árvore ou unidade atrás dele. Focus Fire (ult) não é reduzido por evasão, então se ela ultar Clinkz a troca vira quem tem mais vida.
- o que você faz com ele: Searing Arrows aplicado antes do Windrun garante que o dano fixo (bkbpierce sim) ainda conecta. Fora da janela de evasão, Clinkz tem mais burst de crítico (Crystalys 24:24, Daedalus 30:00) do que ela.
- itens que viram: Desolator reduz a armadura dela e deixa seu crítico bater mais forte depois. Do lado dela, Hyperstone (mediana 17:24) acelera o Focus Fire e o farm antes do pico do Clinkz.
- como jogar: não gaste Strafe contra uma Windrun ativa, é desperdício, espere ela acabar (6s no máximo) e puna os 11 a 14s de recarga vazia. Depois do Desolator, force o 1x1 fora da visão do time dela.
- fonte: pro_dados/clinkz.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_windrun, windrunner_shackleshot, windrunner_focusfire).

## Contra Tiny
- placar: Clinkz venceu 59 de 112 partidas de pro, 52,7% (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: um dos carries mais jogados contra Clinkz em pro, com um combo de dano mágico que ignora toda a build de attack speed dele.
- janelas: Tiny sai de Blink aos 15:54 (mediana, 2546 de 3127 partidas, pro_dados/tiny.json), quase junto do Desolator do Clinkz (14:18). É a janela mais perigosa pros dois lados, porque o combo Avalanche mais Toss pode abrir a luta antes do Clinkz reagir. Depois dos 20 min, Tiny ainda ganha dano bruto com Grow, uma passiva sem item, então segue relevante mesmo atrás em ouro; Clinkz precisa do pacote Shard mais Dragon Lance (19:48) pra não ser pego parado.
- o que ele faz com você: Avalanche causa até 360 de dano em 5 tiques, e o combo clássico é encadear com Toss pra jogar o alvo de volta na própria Avalanche, um nuke que não depende de ver Clinkz invisível, só de pegá-lo no raio de 300 do Toss (constants_abilities.json, tiny_avalanche, tiny_toss). Grow aumenta o dano do Toss, então Tiny fica mais perigoso mesmo sem gold.
- o que você faz com ele: fora do combo Avalanche mais Toss, Tiny é lento e sem escape. Skeleton Walk mais Strafe mata ele isolado assim que o combo falha ou está em recarga (23s e 20s no nível 1, respectivamente).
- itens que viram: Black King Bar bloqueia o stun do Avalanche e, por imunidade a magia, nem deixa Tiny escolher Clinkz como alvo do Toss. Linken's Sphere bloqueia o Toss sozinho, já que é alvo único, útil se Clinkz não quiser gastar o Black King Bar cedo.
- como jogar: nunca fique parado perto de árvores ou aliados que Tiny possa agarrar pro Toss. Jogue a troca só depois de saber onde está o combo dele, a recarga é alta no early. Depois do Desolator, force a luta fora do alcance de 1000 a 1100 do Toss.
- fonte: pro_dados/clinkz.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_grow).

## Contra Dragon Knight
- placar: Clinkz venceu 59 de 100 partidas de pro, 59,0% (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: carry da mesma posição e resiliente, um dos mais escolhidos em pro contra Clinkz mesmo raramente dividindo lane com ele.
- janelas: Dragon Knight sai de Power Treads aos 6:00 e Blink aos 16:12 (mediana, 1304 de 1708 partidas, pro_dados/dragon_knight.json), um timing incomum de blink pra um carry tanque, usado pra iniciar e não pra fugir. Isso cai pouco depois do Desolator do Clinkz (14:18): dos 14 aos 20 min Clinkz já bate mais forte, mas Dragon Blood dá armadura e regeneração fixas sem precisar de item, então ele aguenta. Depois dos 23 a 27 min, com Black King Bar (23:18) e Elder Dragon Form, Dragon Knight fica tanque demais pro burst puro sem Desolator reaplicado.
- o que ele faz com você: Elder Dragon Form dá ataque à distância com até 100% de dano em splash num raio de 350 no nível máximo (constants_abilities.json, dragon_knight_elder_dragon_form), acertando os Skeleton Archers de Clinkz junto com ele de graça. Dragon Tail estuna e trava o Skeleton Walk na cara.
- o que você faz com ele: Desolator reduz a armadura dele numa curva que o Dragon Blood não acompanha, e o burst de crítico (Daedalus 30:00) ainda fura a vida alta de Dragon Knight. Sem Elder Dragon Form ativa, ele não tem resposta de dano à distância pro Strafe.
- itens que viram: Desolator é o item que faz a troca parecer justa apesar da vida alta dele. Do lado dele, Blink (16:12) é o que garante que ele inicie antes do Clinkz abrir com Skeleton Walk.
- como jogar: não troque autoataque parado contra a Elder Dragon Form ativa (60s de duração, recarga de 100s), espere ela cair. Fora da forma, Clinkz ganha qualquer 1x1 depois do Desolator.
- fonte: pro_dados/clinkz.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_elder_dragon_form, dragon_knight_dragon_blood, dragon_knight_dragon_tail).

## Contra Templar Assassin
- placar: Clinkz venceu 28 de 64 partidas de pro, 43,8% (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: o carry mais parecido tecnicamente com Clinkz em pro, os dois rusham Desolator no mesmo minuto exato, um confronto de quem creta primeiro entre dois right-clickers de invisibilidade e burst.
- janelas: espelho quase perfeito, Templar Assassin tira Desolator aos 14:18 (mediana, 1609 de 1681 partidas), o mesmo minuto do Clinkz (14:18, pro_dados/clinkz.json). A diferença é o farm: ela tem lh10 de 73 contra 62 do Clinkz (pro_dados), geralmente um passo à frente em ouro. Psionic Trap com Aghanim's Scepter dela muda o jogo a partir do momento em que ela compra o item, sem timing mediano confiável no banco de pro pra esse item específico nela.
- o que ele faz com você: Meld ataca invisível com até 200 de dano bônus e até -8 de armadura por 6s no nível máximo (constants_abilities.json, templar_assassin_meld). Psionic Trap espalha armadilhas que revelam e atrasam qualquer movimento, slow de 20% a 50%, numa área de 400 de raio; com scepter, ainda silencia ao disparar (aghs_desc). Refraction dá até 6 instâncias de barreira mais dano bônus, reduzindo o quanto o autoataque de Clinkz machuca ela.
- o que você faz com ele: Clinkz tem mais alcance de ataque com Dragon Lance ou Hurricane Pike e consegue vencer a troca de longe antes que Refraction gaste todas as instâncias nele. Burning Barrage (shard) atravessa Meld e acerta ela mesmo invisível, porque é ponto alvo, não precisa enxergar.
- itens que viram: Desolator dos dois cancela a vantagem de armadura um do outro, então quem crítica primeiro decide. Psionic Trap com scepter é o item que mais assusta Clinkz, porque silencia o Burning Barrage.
- como jogar: evite pisar em grama alta ou áreas onde ela pode ter espalhado trap. Na troca direta, use Burning Barrage antes dela empilhar Refraction. Depois que ela tiver scepter, carregue Sentry ou jogue ainda mais pelo alcance.
- fonte: pro_dados/clinkz.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_meld, templar_assassin_psionic_trap, templar_assassin_refraction); https://api.opendota.com/api/constants/aghs_desc (Templar Assassin).

## Contra Ursa
- placar: Clinkz venceu 34 de 61 partidas de pro, 55,7% (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: duelista puro da mesma posição, o clássico quem vence o 1x1, com builds bem diferentes mas o mesmo objetivo de matar isolado.
- janelas: Ursa sai de Battle Fury aos 13:42 e Blink aos 16:48 (mediana, 1596 e 1565 de 1641 partidas, pro_dados/ursa.json). Ela farma rapidíssimo, mas o pico de duelo dela depende de ficar vários segundos colada no alvo, porque Fury Swipes empilha a cada ataque. Clinkz com Desolator (14:18) ainda vence trocas curtas, mas se a luta passar de 3 a 4 segundos, Fury Swipes vira o jogo a favor dela.
- o que ele faz com você: Fury Swipes soma até 36 de dano por ataque consecutivo no mesmo alvo no nível máximo, resetando só se Ursa parar de bater por 20s nesse nível (constants_abilities.json, ursa_fury_swipes), numa troca longa isso ultrapassa o DPS do Clinkz. Overpower dá 400% de bônus de attack speed por alguns ataques, e o shard dela aplica Fury Swipes instantâneo via Earthshock.
- o que você faz com ele: Clinkz vence se a troca for curta, Strafe mais Desolator mais crítico mata rápido antes de Fury Swipes empilhar. Skeleton Walk também permite escolher o momento do engajamento, coisa que Ursa, sem invisibilidade, não tem.
- itens que viram: Hurricane Pike é o item que mais rouba o jogo dela, porque empurra Ursa pra longe e reseta o timer de Fury Swipes. Do lado dela, Enrage dá 80% de redução de dano e é dispel forte, limpando qualquer debuff antes do burst.
- como jogar: não entre em troca de atrito contra Ursa, decida em 2 a 3 segundos. Se ela usar Enrage, recue e espere os 4 a 5s passarem antes de voltar a atacar.
- fonte: pro_dados/clinkz.json; pro_dados/ursa.json; constants_abilities.json (ursa_fury_swipes, ursa_overpower, ursa_enrage); https://api.opendota.com/api/constants/aghs_desc (Ursa).

## Contra Morphling
- placar: Clinkz venceu 17 de 28 partidas de pro, 60,7%, amostra pequena (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: o par clássico de dois carries que raramente cruzam lane mas moldam o jogo um pelo outro, os dois agilidade ranged que vivem de autoataque e mobilidade.
- janelas: Morphling sai de Yasha aos 14:36 e Manta aos 18:24 (mediana, 761 e 716 de 871 partidas, pro_dados/morphling.json), pouco atrás do Desolator do Clinkz (14:18). Dos 14 aos 18 min Clinkz tem a vantagem de dano puro; depois do Manta, Morphling ganha ilusões pra dividir farm e esquiva de boa parte do burst, porque Waveform é invulnerável durante o dash. Late game ele troca atributo pra Força via Attribute Shift e fica quase impossível de burstar, enquanto Clinkz segue 100% dependente de um pico de crítico.
- o que ele faz com você: Waveform é um dash invulnerável que escapa de qualquer combo, inclusive do Burning Barrage (constants_abilities.json, morphling_waveform). Se ele der Replicate no próprio Clinkz, ganha Strafe e Searing Arrows por 24s, raro mas possível.
- o que você faz com ele: antes do Manta (18:24), Morphling não tem como esquivar fisicamente do Strafe mais Desolator. Burning Barrage ainda acerta mesmo que ele tente recuar, porque cobre uma linha inteira.
- itens que viram: Desolator é decisivo antes do Manta dele. Depois, Eye of Skadi corta 50% da cura e da regeneração do alvo (items.json, skadi), a resposta certa ao Attribute Shift pra Força porque reduz o quanto ele sustenta a troca.
- como jogar: pressione antes dos 18 min, quando ele ainda não tem Manta nem Waveform de recarga curta. Depois disso, jogue pelo pick isolado em vez de 1x1 direto, porque ele escapa fácil.
- fonte: pro_dados/clinkz.json; pro_dados/morphling.json; constants_abilities.json (morphling_waveform, morphling_replicate, morphling_morph_str); items.json (skadi).

## Contra Clockwerk (rattletrap)
- placar: Clinkz venceu 41 de 62 partidas de pro, 66,1%, maior % de vitória entre os oponentes com 30 ou mais jogos (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: iniciador que na teoria deveria caçar Clinkz, mas na prática não segura o farm dele, por isso é o oponente com a maior vantagem pro Clinkz com amostra robusta.
- janelas: Clockwerk é suporte roamer (gpm 300, lh10 7, pro_dados/rattletrap.json), sem power spike de item, escala por nível e Aghanim's Scepter situacional. Clinkz tem a janela livre do início ao fim: com lh10 de 62 contra os 7 dele, está sempre à frente em farm, e a partir do Desolator (14:18) já mata Clockwerk em qualquer engajamento isolado.
- o que ele faz com você: Hookshot estuna até 1,6s e puxa Clockwerk pra junto do alvo com dano em área (constants_abilities.json, rattletrap_hookshot), é o único jeito dele abrir a troca sozinho. Power Cogs prende em área por até 8s, mas só funciona se ele já estiver perto do Clinkz.
- o que você faz com ele: Clinkz vê ou sente o engajamento chegando e já tem Strafe pronto pra matar ele antes que o resto do time dele apareça. Skeleton Walk evita o gancho porque Clockwerk precisa de visão do alvo pra mirar o Hookshot.
- itens que viram: Black King Bar não resolve, Hookshot e Power Cogs atravessam Black King Bar (constants_abilities.json), então nenhum item de imunidade a magia da build de Clinkz anula o gancho. A defesa real é não dar visão pro Hookshot ter o que travar.
- como jogar: jogue perto de árvores e estruturas que bloqueiam a mira do Hookshot nos primeiros minutos. Depois do Desolator, Clinkz ainda precisa respeitar o gancho, mesmo com Black King Bar pronto, e pode ignorar o resto da ameaça dele sozinho.
- fonte: pro_dados/clinkz.json; pro_dados/rattletrap.json; constants_abilities.json (rattletrap_hookshot, rattletrap_power_cogs).

## Contra Skywrath Mage
- placar: Clinkz venceu 64 de 97 partidas de pro, 66,0%, 2ª maior % de vitória entre os oponentes com 30 ou mais jogos (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: suporte mágico puro, sem resposta física nenhuma, e também um dos mais jogados contra Clinkz em pro.
- janelas: Skywrath é 100% suporte (gpm 332, lh10 7, pro_dados/skywrath_mage.json), com pico por nível desde cedo (Concussive Shot e Ancient Seal já fazem dano relevante do nível 1 ao 6), mas sem mobilidade nem HP pra segurar depois disso. Clinkz, mesmo sem item nenhum, já mata Skywrath num Strafe só a partir do nível 6; com Desolator (14:18) é instantâneo.
- o que ele faz com você: Ancient Seal silencia 3 a 6s e amplifica até 35% o dano mágico recebido (constants_abilities.json, skywrath_mage_ancient_seal), mas Clinkz é quase 100% físico, então o efeito principal mal pega nele. Mystic Flare causa até 1600 de dano somado, mas exige 2s de canalização parado, tempo de sobra pra Clinkz matar ele antes.
- o que você faz com ele: Searing Arrows mais Strafe mata Skywrath em menos de 2 segundos assim que ele é pego fora de posição. Skeleton Walk ignora o Ancient Seal porque o silence não impede autoataque nem Strafe, que é sem alvo.
- itens que viram: nenhum item de Clinkz muda muito isso, a vantagem é estrutural, físico contra mágico frágil. Do lado dele, Force Staff ou Glimmer Cape, fora da build nativa dele, são a única forma real de sobreviver ao engajamento.
- como jogar: cace Skywrath sempre que ele aparecer sem o time por perto. Não precisa gastar Strafe cedo, ele morre de autoataque puro depois do nível 6.
- fonte: pro_dados/clinkz.json; pro_dados/skywrath_mage.json; constants_abilities.json (skywrath_mage_ancient_seal, skywrath_mage_mystic_flare).

## Contra Ancient Apparition
- placar: Clinkz venceu 28 de 43 partidas de pro, 65,1%, 3ª maior % de vitória entre os oponentes com 30 ou mais jogos (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: outro suporte mágico sem resposta física nem mobilidade, parte do mesmo padrão de Skywrath Mage e Clockwerk nessa lista.
- janelas: Ancient Apparition é suporte de farm mínimo (gpm 312, lh10 6, pro_dados/ancient_apparition.json), com pico por nível e um Aghanim's Scepter tardio que aumenta a redução de Força do Bone Chill. Clinkz domina a janela inteira: do nível 6 em diante já mata ele isolado, e o Desolator (14:18) só confirma.
- o que ele faz com você: Cold Feet estuna 1,8 a 3s se Clinkz não sair do raio dentro de 4s (constants_abilities.json, ancient_apparition_cold_feet), útil pra travar um Skeleton Walk mal posicionado. Ice Blast causa até 36 de dano por segundo numa área crescente e impede regeneração de vida, mas tem cast lento e Clinkz raramente fica parado tempo suficiente pra tomar o blast cheio.
- o que você faz com ele: ele não tem fuga nenhuma. Um Strafe isolado mata ele rápido mesmo sem Desolator; cuidado só pra não ficar parado 4s dentro do raio do Cold Feet.
- itens que viram: nenhum item muda o padrão, a vantagem é de função, carry físico contra suporte sem HP. Do lado dele, só Force Staff ou Glimmer ajudam a sobreviver.
- como jogar: sempre que ver Ancient Apparition sozinho, puna, ele não tem resposta. Só cuidado pra não ficar parado dentro do raio do Cold Feet quando ele estiver vivo.
- fonte: pro_dados/clinkz.json; pro_dados/ancient_apparition.json; constants_abilities.json (ancient_apparition_cold_feet, ancient_apparition_ice_blast, ancient_apparition_bone_chill); https://api.opendota.com/api/constants/aghs_desc (Ancient Apparition).

## Contra Treant Protector (treant)
- placar: Clinkz venceu 15 de 46 partidas de pro, 32,6%, pior % de vitória entre todos os oponentes com 30 ou mais jogos (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: Living Armor é a resposta direta ao plano de jogo do Clinkz, que é quase 100% autoataque, por isso é a maior desvantagem da lista.
- janelas: Treant é suporte (gpm 301, lh10 7, pro_dados/treant.json), sem power spike de item, mas o impacto dele independe de farm, porque Living Armor e Overgrowth escalam só com nível de habilidade. A partir do momento em que ele tem Living Armor em qualquer aliado ou em si mesmo, parte do autoataque de Searing Arrows simplesmente não conta, do early ao late.
- o que ele faz com você: Living Armor bloqueia até 120 de dano físico por aplicação no nível máximo, decrescendo 20 por hit bloqueado, e ainda cura 13 de vida por segundo (constants_abilities.json, treant_living_armor). Como Searing Arrows soma dano fixo por ataque, esse é o contador exato do kit do Clinkz: cada autoataque esvazia o escudo em vez de tirar vida de verdade. Overgrowth impede invisibilidade, movimento e ataque por até 5s num raio de 800, cancelando Skeleton Walk e Strafe ao mesmo tempo.
- o que você faz com ele: Desolator reduz armadura mas não ajuda contra o bloqueio fixo da Living Armor. A resposta real é ignorar quem está com o escudo ativo e focar outro alvo, ou acumular Infernal Shred, que soma 3% de penetração de armadura por ataque de Clinkz (1% por esqueleto) até um teto de 20% no total, pra pelo menos manter algum dano passando.
- itens que viram: Orchid ou Bloodthorn silenciam Treant antes dele reaplicar Living Armor ou soltar Overgrowth, o item que mais muda essa troca a favor do Clinkz. Black King Bar não ajuda contra o Overgrowth, porque ele atravessa Black King Bar (constants_abilities.json), e também não resolve o bloqueio de dano fixo da Living Armor, que é passivo.
- como jogar: não troque autoataque contra um alvo com Living Armor ativa, mude de alvo. Guarde Orchid ou Bloodthorn pra abrir em cima do Treant antes dele reaplicar o escudo ou soltar Overgrowth numa teamfight.
- fonte: pro_dados/clinkz.json; pro_dados/treant.json; constants_abilities.json (treant_living_armor, treant_overgrowth, clinkz_infernal_shred); items.json (orchid, bloodthorn).

## Contra Spirit Breaker
- placar: Clinkz venceu 18 de 55 partidas de pro, 32,7%, 2ª pior % de vitória entre os oponentes com 30 ou mais jogos (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: o counter mais direto contra o plano de invisibilidade do Clinkz, Charge of Darkness ignora completamente o Skeleton Walk assim que é lançado.
- janelas: Spirit Breaker é suporte iniciador (gpm 355, lh10 14, pro_dados/spirit_breaker.json), com pico por nível desde o 1 ao 6, não por item. Uma vez que Charge está disponível, recarga de 13 a 22s, a ameaça é constante o jogo inteiro, inclusive depois do Desolator (14:18) do Clinkz, porque o Charge não depende de ver o alvo o tempo todo, só precisa ter visão no momento de lançar.
- o que ele faz com você: Charge of Darkness mira um alvo e persegue por qualquer distância, acelerando até 425 de bônus de velocidade e terminando em Greater Bash, até 2,2s de stun no nível máximo (constants_abilities.json, spirit_breaker_charge_of_darkness, spirit_breaker_greater_bash). Como o Charge ignora unidades no caminho e Clinkz costuma estar sozinho farmando, é um dos poucos engajamentos que realmente furam o Skeleton Walk. Greater Bash também procca em qualquer autoataque normal, então mesmo fora do Charge ele bash e empurra Clinkz pra longe do próprio Strafe.
- o que você faz com ele: Searing Arrows mais Desolator ainda mata Spirit Breaker rápido se Clinkz conseguir o primeiro Strafe antes do Charge conectar. A melhor defesa é não ficar visível em linha aberta de visão quando ele está sem o time por perto.
- itens que viram: Force Staff ou Hurricane Pike ajudam a quebrar a distância depois do Bash, mas não evitam o Charge. O item que realmente muda o duelo é Linken's Sphere, porque Charge of Darkness é unit target e é bloqueado pelo Spellblock.
- como jogar: jogue perto de visão de aliados ou wards pra não dar o alvo fácil de Charge. Se for pego, gaste o combo de burst imediatamente em vez de tentar fugir, porque Bulldoze dá resistência a status e ele não solta fácil.
- fonte: pro_dados/clinkz.json; pro_dados/spirit_breaker.json; constants_abilities.json (spirit_breaker_charge_of_darkness, spirit_breaker_greater_bash, spirit_breaker_bulldoze).

## Contra Dazzle
- placar: Clinkz venceu 13 de 37 partidas de pro, 35,1%, 3ª pior % de vitória entre os oponentes com 30 ou mais jogos (fonte: pro_dados/clinkz.json, confrontos).
- por que importa: a resposta direta ao plano de um burst mata do Clinkz, Shallow Grave nega literalmente a única coisa que ele sabe fazer.
- janelas: Dazzle é suporte puro (gpm 303, lh10 11, pro_dados/dazzle.json), com pico por nível desde o early. Ele não precisa de item pra neutralizar Clinkz, só precisa estar vivo e com mana pra Shallow Grave. Mesmo depois do Desolator mais Shard (14:18 e 16:42) do Clinkz, se o alvo carrega Shallow Grave ativo, o burst inteiro vira tempo perdido por até 5,5s no nível máximo.
- o que ele faz com você: Shallow Grave impede a morte do alvo por até 5,5s e ainda amplifica a cura recebida (constants_abilities.json, dazzle_shallow_grave), a contrapartida exata do game plan do Clinkz, que depende de matar num burst só. Poison Touch aplica slow crescente, até -22% mais -3,5% por hit, atrapalhando Clinkz a fugir ou reposicionar depois de um engajamento ruim.
- o que você faz com ele: Dazzle não tem fuga própria nem muito HP. Se Clinkz conseguir isolar ele sem o alvo do Shallow Grave por perto, mata rápido.
- itens que viram: Orchid ou Bloodthorn silenciam Dazzle antes dele reagir com Shallow Grave no aliado alvo, o item que resolve a troca. Sem silence, o burst esbarra direto no Shallow Grave e a luta vira atrito, que favorece o time com suporte vivo.
- como jogar: identifique quem é o alvo prioritário do Dazzle antes de abrir o combo e, se possível, mate ele primeiro ou silencie no cast do Shallow Grave. Nunca gaste o burst inteiro achando que vai executar um alvo com Shallow Grave ativo.
- fonte: pro_dados/clinkz.json; pro_dados/dazzle.json; constants_abilities.json (dazzle_shallow_grave, dazzle_poison_touch); items.json (orchid, bloodthorn).
