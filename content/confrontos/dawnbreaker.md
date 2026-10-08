---
id: confrontos-dawnbreaker
heroi: Dawnbreaker
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dawnbreaker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/axe.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tidehunter.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/medusa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/sven.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/alchemist.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/faceless_void.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/morphling.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Contra Rubick (rubick)
- placar: Dawnbreaker venceu 137 de 290 partidas de pro (47,2%). Fonte: pro_dados/dawnbreaker.json (confrontos).
- por que importa: é o oponente com mais jogos contra ela no banco de pro (290), suporte quase onipresente nas composições atuais, mesmo sem dividir lane com ela na maioria das vezes.
- janelas: até os 10:18 Rubick ainda não tem Arcane Boots (pro_dados/rubick.json) e fica lento pra reposicionar; Dawnbreaker já com Phase Boots aos 8:12 consegue fechar antes disso. Dos 16:54 aos 21:36 ele segue sem Blink Dagger (mediana 21:36, p25 16:54), fase mais vulnerável a gank dela. Depois dos 21:36 ele ganha reposicionamento pra escapar ou pra roubar o último feitiço visível dela ou de um aliado. Com Scepter (27:24) ele guarda duas cópias de feitiço ao mesmo tempo.
- o que ele faz com você: Spell Steal copia o último feitiço lançado por um herói inimigo visível; se ele vir Celestial Hammer ou Solar Guardian saindo, ganha a cópia por 180 a 300s (constants_abilities.json). Telekinesis (stun 0,9 a 1,5s) é bloqueada pelo seu Black King Bar (bkbpierce: No), então o risco real dele é te pegar antes do seu item de 25:00.
- o que você faz com ele: Starbreaker atravessa qualquer Black King Bar dele porque a habilidade tem bkbpierce: Yes em constants_abilities.json, então mesmo que Rubick itemize BKB o combo de stun ainda conecta; Solar Guardian também ignora imunidade mágica pela mesma flag. Pouca vida de suporte, então o combo quase sempre mata.
- itens que viram: seu Black King Bar (25:00) neutraliza o Telekinesis dele antes dele acontecer; o Aghanim's Shard dela (20:48) dá imunidade a debuff, 50% de resistência mágica e movimento livre durante o Starbreaker (ainda com 35% de slow, mínimo 215 de velocidade), dificultando a fuga mesmo com o blink dele pronto.
- como jogar: force o engage antes dos 21:36, enquanto ele ainda não tem blink; depois disso, lembre que seu Starbreaker/Solar Guardian passam pelo BKB dele ou de qualquer aliado que ele proteja, então não precisa esperar o Black King Bar deles caírem pra iniciar com a ult.
- fonte: pro_dados/dawnbreaker.json; pro_dados/rubick.json; constants_abilities.json (dawnbreaker_fire_wreath, dawnbreaker_solar_guardian, rubick_telekinesis, rubick_spell_steal).

## Contra Snapfire (snapfire)
- placar: Dawnbreaker venceu 107 de 250 (42,8%), abaixo da média geral dela contra os suportes do top 6. Fonte: pro_dados/dawnbreaker.json.
- por que importa: 2º oponente com mais jogos contra ela em pro (250) e o único do top 6 em que ela fica claramente abaixo de 50%, sinal de que o kit de Snapfire é um problema real pra ela.
- janelas: o Aghanim's Shard de Snapfire sai aos 16:54 (p25 15:12, pro_dados/snapfire.json) e deixa o Firesnap Cookie curar mais e lançar um Mortimer Kiss a distância com 40% do dano de impacto. Nessa janela de 15 a 25min, antes do Black King Bar de Dawnbreaker (25:00), Snapfire já ameaça com o combo completo de Scatterblast e Mortimer Kisses e Dawnbreaker ainda não tem resposta mágica. Depois do Black King Bar dela (25:00) o quadro muda bastante.
- o que ele faz com você: Scatterblast (dano 100 a 280, cone, até 100% de slow em movimento e ataque à queima-roupa) e Mortimer Kisses (8 globos de até 360 de dano cada em 5,5s) são ambos bkbpierce: No em constants_abilities.json, ou seja, bloqueados pelo Black King Bar dela assim que ele sai; o problema é a janela de 15 aos 25min, antes disso.
- o que você faz com ele: Starbreaker e Solar Guardian ignoram Black King Bar (bkbpierce: Yes), então uma vez que ela consegue fechar em cima de Snapfire, a pouca vida da suporte não aguenta o combo, mesmo que ela tenha itemizado algo contra magia.
- itens que viram: o Black King Bar dela (25:00) apaga Scatterblast e Mortimer Kisses de uma vez; antes disso, o Harpoon (21:36) ajuda a fechar distância rápido demais pra Snapfire montar o combo de Gobble Up com calma.
- como jogar: evite ficar parada no alcance de Scatterblast antes do seu BKB sair; depois dos 25min, pode iniciar em cima dela sem medo, o kit inteiro de Snapfire para no seu Black King Bar.
- fonte: pro_dados/dawnbreaker.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_mortimer_kisses, dawnbreaker_fire_wreath).

## Contra Shadow Fiend (nevermore)
- placar: Dawnbreaker venceu 116 de 241 (48,1%). Fonte: pro_dados/dawnbreaker.json.
- por que importa: 3º oponente com mais jogos contra ela em pro (241), mid farmador que raramente divide lane com uma offlaner, mas cujo ritmo de patrimônio e o burst do ulti pesam direto na janela que ela tem pra fechar o combo.
- janelas: Shadow Fiend farma muito mais rápido (gpm 658 contra 542 dela, pro_dados/nevermore.json e pro_dados/dawnbreaker.json), mas só fecha Black King Bar aos 25:12, praticamente no mesmo minuto que ela (25:00). Antes disso, com alma acumulada, Requiem of Souls já ameaça bem cedo (disponível desde o nível 6); dos 15 aos 25min é a janela em que ela pode pegá-lo isolado, já que ele ainda não tem BKB nem Hurricane Pike pra criar distância.
- o que ele faz com você: Shadowraze acerta até 280 de dano instantâneo numa das três distâncias, mais bônus por stack de Necromastery (constants_abilities.json: nevermore_shadowraze1, bkbpierce: No); Requiem of Souls (raio 1000) causa até 160 de dano por linha e reduz resistência mágica e velocidade de quem pega várias linhas, também bloqueado pelo seu Black King Bar assim que ele sai.
- o que você faz com ele: Starbreaker e Solar Guardian ignoram Black King Bar (bkbpierce: Yes), então mesmo que Shadow Fiend feche o BKB dele quase junto com o seu, o seu combo de stun ainda conecta nele; ele é um mid com pouca vida, então o combo completo costuma matar antes dele reagir.
- itens que viram: seu Black King Bar (25:00) bloqueia o Shadowraze e o Requiem assim que sai; o Harpoon (21:36) fecha o alcance de 200 do Shadowraze, forçando o corpo a corpo onde ele é fraco.
- como jogar: pressione nos primeiros 25min, antes dele crescer com Crystalys/Daedalus; depois que os dois tiverem BKB, lembre que o seu combo ainda passa no dele, então não precisa recuar só porque ele ficou imune.
- fonte: pro_dados/dawnbreaker.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, dawnbreaker_fire_wreath).

## Contra Hoodwink (hoodwink)
- placar: Dawnbreaker venceu 97 de 193 (50,3%). Fonte: pro_dados/dawnbreaker.json.
- por que importa: 4º oponente com mais jogos contra ela em pro (193), suporte de pick que ameaça de longe, exatamente o tipo de kit que testa uma offlaner corpo a corpo sem gap closer próprio além da Fase.
- janelas: o Aghanim's Shard de Hoodwink sai aos 23:48 (p25 19:12, pro_dados/hoodwink.json), perto do Black King Bar dela (25:00); antes disso ela já tem Harpoon (21:36) pra fechar o alcance de 3000 do Sharpshooter, que carrega até 3s antes de disparar. Dos 8 aos 21min, antes do shard dela, é a janela mais segura pra Dawnbreaker se aproximar sem o boomerang extra de mobilidade.
- o que ele faz com você: Bushwhack perto de árvore estuna 1,5 a 2,1s e causa até 360 de dano total; Sharpshooter carregado no máximo causa até 1350 de dano, break e slow de alvo único, com bkbpierce: No em constants_abilities.json, ou seja, some do radar assim que seu Black King Bar sai.
- o que você faz com ele: Starbreaker e Solar Guardian ignoram Black King Bar (bkbpierce: Yes), mas Hoodwink raramente tem BKB cedo; o problema dela é fechar distância antes do windup do Sharpshooter, por isso o Harpoon importa tanto aqui.
- itens que viram: o Black King Bar dela (25:00) apaga Sharpshooter e o root de Bushwhack de uma vez; o Harpoon (21:36) cancela a fuga em árvore que o Shard e o Scurry dela dão.
- como jogar: respeite o alcance do Sharpshooter até o Black King Bar sair; depois disso, pode avançar reto, Hoodwink não tem resposta de dano físico suficiente pra te segurar sozinha.
- fonte: pro_dados/dawnbreaker.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, dawnbreaker_fire_wreath).

## Contra Disruptor (disruptor)
- placar: Dawnbreaker venceu 95 de 192 (49,5%). Fonte: pro_dados/dawnbreaker.json.
- por que importa: 5º oponente com mais jogos contra ela em pro (192), suporte de controle cujo kit inteiro é desenhado pra travar um iniciador corpo a corpo como ela.
- janelas: Disruptor só fecha Blink aos 24:00 (p25 20:54, pro_dados/disruptor.json) e o Scepter dele sai bem tarde, aos 34:54; o Black King Bar dela (25:00) chega praticamente junto do blink dele. A janela perigosa é a fase de lane e o early-mid, antes dela ter BKB, quando Static Storm (disponível desde o nível 6) já pode silenciar o combo inteiro.
- o que ele faz com você: Static Storm silencia por 6s com dano crescente até 350/s; Kinetic Field cria uma parede de 350 de raio que te prende longe do time; Glimpse te joga de volta 4s no tempo. As três têm bkbpierce: No em constants_abilities.json, então o Black King Bar dela (25:00) apaga o kit inteiro dele de uma vez, inclusive o Glimpse.
- o que você faz com ele: Starbreaker e Solar Guardian ignoram Black King Bar (bkbpierce: Yes), então se Disruptor tentar se esconder atrás de um item de imunidade mágica, não adianta; ele é um suporte com pouca vida e sem fuga própria além do blink tardio.
- itens que viram: o Black King Bar dela (25:00) é a resposta direta ao kit inteiro dele; o Harpoon (21:36) tira ele da distância segura de cast antes mesmo do BKB sair.
- como jogar: não force o combo enquanto ele tem Static Storm disponível e você sem BKB; depois dos 25min, ignore o kit dele e feche o engage.
- fonte: pro_dados/dawnbreaker.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm, disruptor_kinetic_field, disruptor_glimpse, dawnbreaker_fire_wreath).

## Contra Lion (lion)
- placar: Dawnbreaker venceu 100 de 191 (52,4%). Fonte: pro_dados/dawnbreaker.json.
- por que importa: 6º oponente com mais jogos contra ela em pro (191), suporte de burst cujo combo pode matar antes da sustentação da Luminosity entrar em jogo.
- janelas: Lion fecha o Blink aos 18:12 (p25 16:12, pro_dados/lion.json) e o Aghanim's Shard aos 25:48, bem depois do Black King Bar dela (25:00). Dos 8 aos 18min, antes do blink dele, Lion depende de alcance curto de Earth Spike ou Hex pra conectar; é a janela mais segura pra ela se aproximar. Depois dos 18min ele inicia à distância sozinho.
- o que ele faz com você: Earth Spike estuna 1,3 a 2,2s; Finger of Death causa 600 a 850 de dano mágico instantâneo, dano que sozinho mata uma Dawnbreaker sem BKB em boa parte do early/mid. As duas têm bkbpierce: No em constants_abilities.json, então param completamente assim que o Black King Bar dela (25:00) sai.
- o que você faz com ele: Starbreaker e Solar Guardian ignoram Black King Bar (bkbpierce: Yes); Lion tem pouquíssima vida de suporte, então o combo de stun mata ele rápido se ela chegar perto.
- itens que viram: o Black King Bar dela (25:00) é o que permite iniciar em cima de Lion sem medo do Hex ou do Finger of Death; antes disso, cuidado com o combo dele à queima-roupa.
- como jogar: não force engage sem checar se Lion já gastou Hex ou Finger of Death recentemente; depois do seu BKB, o combo dele deixa de ser ameaça e o seu continua funcionando nele.
- fonte: pro_dados/dawnbreaker.json; pro_dados/lion.json; constants_abilities.json (lion_impale, lion_finger_of_death, dawnbreaker_fire_wreath).

## Contra Axe (axe)
- placar: Dawnbreaker venceu 100 de 186 (53,8%). Fonte: pro_dados/dawnbreaker.json.
- por que importa: mesma posição principal (offlane, pos 3), o oponente de offlane x offlane mais jogado contra ela em pro (186 jogos) e o único com mesma função que ela vence com folga.
- janelas: os dois correm pro Black King Bar quase no mesmo ritmo (dela 25:00 contra Axe 25:54, p25 23:36, pro_dados/axe.json); antes disso, dos 7 aos 15min, Axe já tem Phase Boots (7:12) e Blade Mail (via chainmail/blades, componentes dele aos 6:54 e 6:36) pra punir quem bate nele, enquanto ela ainda está fechando o Echo Sabre (14:48). Depois dos 15:42 (Blink dele) a luta vira sobre quem inicia primeiro.
- o que ele faz com você: Berserker's Call força você a atacar só ele por 2,1 a 3s e tem bkbpierce: Yes, ou seja, nem o seu Black King Bar te livra da call; Culling Blade causa 275 a 475 de dano puro (bkbpierce: Yes também) e executa quem está com pouca vida, não importa imunidade mágica.
- o que você faz com ele: Starbreaker e Solar Guardian também ignoram Black King Bar (bkbpierce: Yes), então o duelo é simétrico nesse ponto, nenhum BKB impede o combo do outro; quem controla melhor o momento do engage (e chega com mais vida) tende a levar. Harpoon (21:36) te deixa puxar ele pra fora do alcance de reflexo do Blade Mail antes de bater.
- itens que viram: Black King Bar dos dois decide a corrida de patrimônio pra chegar no combo primeiro, mas nenhum item de imunidade mágica resolve sozinho porque Call, Culling Blade, Starbreaker e Solar Guardian atravessam os dois BKBs; o Harpoon dela ajuda a evitar o reflexo do Blade Mail dele.
- como jogar: não dependa do seu BKB pra se sentir segura contra o Call, ele ainda vai te prender; jogue pelo ângulo que evita o cone do Blade Mail refletido e force o combo quando tiver vantagem de vida, já que o duelo de stuns é parelho.
- fonte: pro_dados/dawnbreaker.json; pro_dados/axe.json; constants_abilities.json (axe_berserkers_call, axe_culling_blade, dawnbreaker_fire_wreath).

## Contra Mars (mars)
- placar: Dawnbreaker venceu 84 de 186 (45,2%), abaixo da média geral dela entre os offlaners. Fonte: pro_dados/dawnbreaker.json.
- por que importa: mesma posição principal (offlane, pos 3), 2º oponente de offlane mais jogado contra ela (186 jogos) e o único da mesma função em que ela perde mais do que ganha.
- janelas: Mars fecha Blink aos 15:12 (p25 13:30, pro_dados/mars.json), mais cedo que o dela (nenhum blink no kit dela), e o Aghanim's Shard dele sai aos 21:30, antes do Black King Bar dela (25:00). Dos 15 aos 25min é a janela mais perigosa: Mars já consegue abrir Arena of Blood (disponível desde o nível 6) e ela ainda não tem imunidade mágica.
- o que ele faz com você: Arena of Blood cria uma arena de 550 de raio por 5,5s com lanceiros que batem em quem fica perto da borda, até 240 de dano total, e tem bkbpierce: No em constants_abilities.json, então para completamente assim que o Black King Bar dela sai; Spear of Mars estuna 1,3 a 2,2s se te encosta numa parede, também bloqueado pelo BKB.
- o que você faz com ele: Starbreaker e Solar Guardian ignoram Black King Bar (bkbpierce: Yes), então mesmo que Mars feche o BKB dele (26:30), o seu combo ainda conecta nele; Harpoon (21:36) te tira de dentro da arena antes do lanceiros renderem o dano total.
- itens que viram: o Black King Bar dela (25:00) sai 1min30 antes do dele (26:30) e apaga a Arena of Blood e o Spear por completo nessa janela; o Harpoon é o jeito de sair de dentro da arena sem esperar os 5,5s.
- como jogar: evite ficar perto da borda da Arena of Blood antes do seu BKB sair; depois dos 25min, a sua janela de vantagem é real já que ela fica imune um minuto e meio antes dele.
- fonte: pro_dados/dawnbreaker.json; pro_dados/mars.json; constants_abilities.json (mars_arena_of_blood, mars_spear, dawnbreaker_fire_wreath).

## Contra Tidehunter (tidehunter)
- placar: Dawnbreaker venceu 86 de 154 (55,8%), a maior vantagem dela entre os offlaners da mesma função com amostra robusta. Fonte: pro_dados/dawnbreaker.json.
- por que importa: mesma posição principal (offlane, pos 3), 3º oponente de offlane mais jogado contra ela (154 jogos) e o que ela mais domina dentro da própria função.
- janelas: Tidehunter fecha Aghanim's Scepter (22:18) e Aghanim's Shard (23:06) quase juntos, um pacote duplo que praticamente todo Tidehunter de pro compra (pro_dados/tidehunter.json, n=1310 e 1652 de 2451 jogos); o Black King Bar dela (25:00) sai pouco depois. A janela de risco é dos 22 aos 25min, quando ele já tem o combo de Gush em linha (upgrade do Scepter) mais a âncora do Shard, e ela ainda não tem imunidade.
- o que ele faz com você: Ravage estuna 2 a 2,4s num raio de 1250, dano em área; Dead in the Water (shard) prende você numa âncora que força a 100 de velocidade se tentar se afastar mais de 350 unidades. As duas têm bkbpierce: No, então o Black King Bar dela bloqueia tanto o Ravage quanto a âncora assim que sai.
- o que você faz com ele: Starbreaker e Solar Guardian ignoram Black King Bar (bkbpierce: Yes), então mesmo que ele tenha os dois Aghanim's prontos, o seu combo de stun ainda conecta; o Shard dela (20:48) ainda dá imunidade a debuff e velocidade livre durante o giro, o que ajuda a sair da âncora mesmo sem o BKB pronto.
- itens que viram: o Black King Bar dela (25:00) apaga o Ravage e a âncora; antes disso, o próprio Shard do Starbreaker (20:48, debuff immune durante o combo) já ajuda a não ficar presa na âncora do Shard dele.
- como jogar: evite ficar no meio do grupo dele antes do seu BKB, o Ravage sozinho já ameaça; depois dos 25min, pode engajar sem medo da âncora nem do Ravage.
- fonte: pro_dados/dawnbreaker.json; pro_dados/tidehunter.json; constants_abilities.json (tidehunter_ravage, dawnbreaker_fire_wreath); https://api.opendota.com/api/constants/aghs_desc (tidehunter shard "Dead in the Water").

## Contra Medusa (medusa)
- placar: Dawnbreaker venceu 37 de 54 (68,5%), a maior vantagem dela em toda a amostra com 30+ jogos. Fonte: pro_dados/dawnbreaker.json. Amostra pequena (54 jogos), mas é o maior desequilíbrio do banco.
- por que importa: as duas quase nunca dividem lane (Medusa é farmadora pura, pos 1, e Dawnbreaker é offlane), mas são exatamente o tipo de confronto que importa fora da lane: duas heroínas que vivem de item timing, e quem chega pronta primeiro dita o jogo. Entra na lista porque é o maior desequilíbrio de winrate com amostra decente, e porque ilustra bem a corrida de farm entre duas carries que raramente se cruzam cedo.
- janelas: até os 15:00 Medusa só tem Manta (p25 14:00, pro_dados/medusa.json), enquanto Dawnbreaker já fechou Phase Boots (8:12) e está no meio do Echo Sabre (14:48); nessa fase ela já pode pressionar. O Aghanim's Shard de Dawnbreaker sai aos 20:48, bem antes do Butterfly de Medusa (22:12) e muito antes do Eye of Skadi dela (28:24). Só depois dos 28min Medusa fica de fato perigosa, com Stone Gaze (disponível desde o nível 6, mas sustentada por mana/item só nessa fase) petrificando quem fica olhando pra ela.
- o que ele faz com você: Stone Gaze tem bkbpierce: Yes em constants_abilities.json, ou seja, NÃO é bloqueada pelo Black King Bar dela: se acumular 2s olhando pra Medusa com Stone Gaze ativo, ela vira pedra e toma 35 a 55% a mais de dano físico mesmo com BKB pronto. Mystic Snake (dano 90 a 240 por salto) é bkbpierce: No, essa sim some com o BKB.
- o que você faz com ele: Starbreaker e Solar Guardian ignoram Black King Bar (bkbpierce: Yes), então o combo dela ainda conecta mesmo que Medusa feche um Linken's ou algo do tipo; antes dos 28min, Medusa não tem evasão nem Skadi suficiente pra sobreviver a uma troca corpo a corpo.
- itens que viram: o Aghanim's Shard dela (20:48) deixa o combo rápido o bastante pra matar Medusa antes do Butterfly (22:12); contra Stone Gaze depois dos 28min, a resposta não é BKB, é não ficar olhando pra Medusa, vire a câmera ou recue assim que ela ativar.
- como jogar: pressione forte antes dos 25 a 28min, enquanto Medusa ainda está no Manta/Butterfly; depois do Skadi dela, evite trocar olhando de frente, puxe com Harpoon e já solte o Starbreaker, que atravessa o Black King Bar dela de qualquer forma.
- fonte: pro_dados/dawnbreaker.json; pro_dados/medusa.json; constants_abilities.json (medusa_stone_gaze, medusa_mystic_snake, dawnbreaker_fire_wreath).

## Contra Sven (sven)
- placar: Dawnbreaker venceu 39 de 65 (60,0%). Fonte: pro_dados/dawnbreaker.json. Amostra pequena (65 jogos).
- por que importa: Sven é carry pos 1 e raramente lana contra ela, mas é um farmador physical damage que, como ela, constrói em torno de Black King Bar e Echo Sabre; entra como comparação de power spike entre duas heroínas de item core parecido, e porque é uma das maiores vantagens dela com amostra relevante.
- janelas: Sven fecha o Black King Bar dele aos 22:42 (p25 21:12, pro_dados/sven.json), antes do dela (25:00); nessa janela de 22 aos 25min ele pode iniciar imune enquanto ela ainda não. Por outro lado o God's Strength dele só vem depois disso e o Satanic, item que de fato sustenta ele em troca longa, só fecha aos 34:54, bem mais tarde que o pacote dela (Shard 20:48 + Harpoon 21:36 + BKB 25:00).
- o que ele faz com você: Storm Hammer estuna 1 a 1,6s num raio de até 310, bkbpierce: No, bloqueado assim que o BKB dela sai; God's Strength dá 110 a 190% de dano bônus por 30s, ameaça real em troca prolongada antes dela ter Harpoon pra fechar distância e emendar o combo.
- o que você faz com ele: Starbreaker e Solar Guardian ignoram Black King Bar (bkbpierce: Yes), então mesmo que Sven tenha BKB 2min18s antes dela, o combo de stun dela ainda conecta nele assim que ela chegar perto; a cura da Luminosity (35 a 50% do dano bônus por ataque) ajuda a sustentar a troca até lá.
- itens que viram: o Echo Sabre dela (14:48) ajuda a empatar o ritmo de dano cedo; o Harpoon (21:36) fecha a distância antes dele itemizar Satanic; o Black King Bar dela, mesmo saindo depois do dele, não precisa vir antes porque o combo dela já ignora o dele.
- como jogar: evite trocar auto-ataque parado contra o Storm Hammer dele antes do seu BKB; use o combo de Starbreaker assim que fechar distância, ele passa no BKB do Sven de qualquer jeito.
- fonte: pro_dados/dawnbreaker.json; pro_dados/sven.json; constants_abilities.json (sven_storm_bolt, sven_gods_strength, dawnbreaker_fire_wreath).

## Contra Alchemist (alchemist)
- placar: Dawnbreaker venceu só 20 de 56 (35,7%), uma das piores marcas dela com amostra de 30+ jogos. Fonte: pro_dados/dawnbreaker.json. Amostra pequena (56 jogos); só o confronto com Treant Protector (30,2% em 63 jogos, fora desta lista) é pior no banco.
- por que importa: Alchemist é o carry puro que mais farma rápido do jogo (gpm 768, o maior de toda essa lista) e não divide lane com ela, mas é exatamente o tipo de confronto que o 1x1 de carry precisa mostrar: dois heróis que nunca se cruzam na lane, mas cujo ritmo de item decide quem vence o meio-jogo. Entra porque é uma das maiores desvantagens dela com amostra confiável.
- janelas: aos 13:54 (p25 12:54) Alchemist já fecha Radiance (pro_dados/alchemist.json), quando Dawnbreaker ainda só tem Phase Boots (8:12) e está no meio do Echo Sabre (14:48); o gpm dele (768) é 42% maior que o dela (542) nessa fase, a diferença de patrimônio já é grande aos 15min. Dos 21 aos 25min ele soma Blink (21:24), Aghanim's Scepter (22:24) e Black King Bar (25:06) quase juntos, um pacote que chega praticamente no mesmo minuto do BKB dela (25:00).
- o que ele faz com você: Unstable Concoction carrega até 5s pra atingir o máximo de 360 de dano e 3,2s de stun, bkbpierce: No, bloqueado pelo BKB dela assim que sai; Chemical Rage dá sustentação (60 a 120 de regen de vida, velocidade de ataque maior) que a faz perder a troca prolongada se deixar ele farmar até lá.
- o que você faz com ele: Starbreaker e Solar Guardian ignoram Black King Bar (bkbpierce: Yes), então mesmo que ele feche o BKB dele quase junto com o dela (25:06 contra 25:00), o combo dela ainda conecta; antes do Radiance dele (13:54), ela tem a janela mais segura pra pressionar e atrasar o farm.
- itens que viram: Radiance dele (13:54) é o item que decide a corrida de ouro, se ela não consegue atrasar isso, a diferença de patrimônio vira grande demais; o Black King Bar dela sai quase no mesmo minuto que o dele, então nenhum dos dois ganha a corrida de imunidade, mas o combo dela atravessa o BKB dele de qualquer forma.
- como jogar: gankeie ou pressione antes dos 14min, antes do Radiance fechar; depois disso, não espere ficar mais rica que ele, use o Starbreaker assim que fechar distância, já que ele ignora o BKB do Alchemist.
- fonte: pro_dados/dawnbreaker.json; pro_dados/alchemist.json; constants_abilities.json (alchemist_unstable_concoction, alchemist_chemical_rage, dawnbreaker_fire_wreath).

## Contra Faceless Void (faceless_void)
- placar: Dawnbreaker venceu 33 de 91 (36,3%), uma das piores marcas do banco com amostra robusta (91 jogos). Fonte: pro_dados/dawnbreaker.json.
- por que importa: Faceless Void é carry pos 1 e raramente lana com ela, mas tem uma das poucas habilidades do banco que ignoram completamente o Black King Bar dela (Chronosphere, bkbpierce: Yes), o que faz esse confronto valer mesmo sem lane em comum.
- janelas: Faceless Void fecha Mjollnir aos 21:48 (p25 19:18, pro_dados/faceless_void.json) e Manta aos 23:24, chegando ao meio-jogo com ataque rápido antes do Black King Bar dele (28:12), que sai bem depois do dela (25:00). Isso dá pra ela uma janela de 3min de imunidade que ele não tem.
- o que ele faz com você: Chronosphere prende tudo dentro de um raio de 500 por 3,75 a 4,75s e tem bkbpierce: Yes em constants_abilities.json, ou seja, NÃO existe item de imunidade que resolva, nem o dela, nem o de ninguém; Time Dilation (bkbpierce: No) desacelera cooldown e ataque, essa sim bloqueada pelo BKB dela.
- o que você faz com ele: Starbreaker e Solar Guardian também ignoram Black King Bar (bkbpierce: Yes), então na janela dos 25 aos 28min, antes do BKB dele, ela pode iniciar imune enquanto ele ainda não tem resposta; depois disso o jogo vira sobre não ficar presa sozinha numa Chronosphere.
- itens que viram: contra o Chronosphere não existe item, a resposta é posicionamento, nunca entre no raio de 500 sem saber se ele tem a ult pronta; o Black King Bar dela (25:00), 3min antes do dele (28:12), dá uma janela real pra ela iniciar sem medo do Time Dilation.
- como jogar: mate ou pressione ele antes dos 21min, antes do Mjollnir; nunca fique agrupada perto dele depois do nível 6 sem saber se a ult está pronta, Chronosphere é uma das poucas coisas do banco que o BKB dela não resolve.
- fonte: pro_dados/dawnbreaker.json; pro_dados/faceless_void.json; constants_abilities.json (faceless_void_chronosphere, faceless_void_time_dilation, dawnbreaker_fire_wreath).

## Contra Morphling (morphling)
- placar: Dawnbreaker venceu 26 de 66 (39,4%). Fonte: pro_dados/dawnbreaker.json. Amostra pequena (66 jogos).
- por que importa: Morphling é o carry que o pedido original citou como exemplo de confronto que falta nas páginas (ele e Alchemist raramente dividem lane, mas os dois são hiper carries de item timing), e Dawnbreaker tem um dos piores números do banco contra ele, o que faz o duelo valer mesmo sem lane em comum.
- janelas: Morphling fecha Manta aos 18:24 (p25 17:18, pro_dados/morphling.json), bem antes do Aghanim's Shard dela (20:48); nessa fase ele já ganha evasão e mobilidade pra kitar. O Black King Bar dela (25:00) sai 5min54s antes do dele (30:54), uma janela grande de imunidade que ele não tem; mas o Butterfly dele fecha aos 25:48, quase junto com o BKB dela, e os 35% de evasão cortam boa parte dos procs de Luminosity (que depende de contar ataques).
- o que ele faz com você: Adaptive Strike empurra e estuna até 2,6s, com dano baseado em Agilidade; é bkbpierce: No em constants_abilities.json, bloqueado pelo BKB dela assim que sai. Waveform dá um dash invulnerável que ele usa pra entrar e sair da luta mais rápido do que ela consegue perseguir mesmo com Phase Boots.
- o que você faz com ele: Starbreaker e Solar Guardian ignoram Black King Bar (bkbpierce: Yes), então mesmo que Morphling feche o BKB dele quase 6min depois do dela, o combo dela já conecta bem antes disso; o problema real é alcançar ele, já que Waveform o tira do alcance do Starbreaker.
- itens que viram: o Butterfly dele (25:48) é o item que mais atrapalha, 35% de evasão corta os procs de Luminosity que sustentam ela na troca; o Harpoon (21:36) é a resposta direta ao Waveform, puxa ele de volta pro corpo a corpo antes dele reposicionar.
- como jogar: force o engage antes dos 18min, antes do Manta dele dar mobilidade; depois do Butterfly, não dependa só do auto-ataque pra sustentar, feche o combo completo de uma vez com o Harpoon puxando primeiro.
- fonte: pro_dados/dawnbreaker.json; pro_dados/morphling.json; constants_abilities.json (morphling_adaptive_strike_agi, morphling_waveform, dawnbreaker_fire_wreath); items.json (butterfly).
