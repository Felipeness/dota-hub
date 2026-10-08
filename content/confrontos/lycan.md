---
id: confrontos-lycan
heroi: Lycan
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/lycan.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/mars.json
- dota-hub-conteudo-novo/pro_dados/disruptor.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/pangolier.json
- dota-hub-conteudo-novo/pro_dados/centaur.json
- dota-hub-conteudo-novo/pro_dados/tidehunter.json
- dota-hub-conteudo-novo/pro_dados/abyssal_underlord.json
- dota-hub-conteudo-novo/pro_dados/void_spirit.json
- dota-hub-conteudo-novo/pro_dados/axe.json
- dota-hub-conteudo-novo/pro_dados/naga_siren.json
- dota-hub-conteudo-novo/pro_dados/beastmaster.json
- dota-hub-conteudo-novo/pro_dados/bane.json
- dota-hub-conteudo-novo/pro_dados/terrorblade.json
- dota-hub-conteudo-novo/pro_dados/morphling.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- https://api.opendota.com/api/constants/aghs_desc
- liquipedia.net/dota2/Debuff_Immunity (via busca)
- dotacoach.gg (tabelas de piercing de Ensnare e Song of the Siren, via busca)
---

## Contexto do Lycan antes dos confrontos

Lycan tem 384 partidas de pro nos patches 7.40 e 7.41 (pro_dados/lycan.json), com gpm 596, xpm 644 e nível final médio 19. A curva de itens mediana desses jogos: Helm of Iron Will aos 3:42, Helm of the Dominator aos 8:24, Helm of the Overlord aos 14:30 (junto com Ultimate Orb aos 14:18), Aghanim's Shard aos 16:36, Assault Cuirass aos 24:24 e Black King Bar aos 30:36. O Shard (lobos ganham Hightail, uma ativa de movimento fasado, evasão e velocidade) e o Scepter (Wolf Bite passa as propriedades do Shapeshift pra um aliado) são os dois upgrades, segundo o aghs_desc da OpenDota. Shapeshift dá 40% de chance de crítico, 550 de velocidade e é imune a lentidão, mas não é imune a stun, raiz, silêncio ou sono, isso volta em quase todo confronto abaixo.

## Como os 16 oponentes foram escolhidos
- Os 6 primeiros são os que mais aparecem contra o Lycan nos dados de pro (pro_dados/lycan.json, campo confrontos): Rubick, Mars, Disruptor, Hoodwink, Shadow Fiend e Pangolier.
- Centaur Warrunner e Tidehunter entram porque são os outros dois offlaners (posição 3, mesma função do Lycan) mais comuns contra ele em pro, depois do Mars.
- Underlord, Void Spirit e Axe entram como 3 dos confrontos mais favoráveis ao Lycan com amostra de 30+ jogos (dentro deste conjunto de 16, não necessariamente os 3 melhores do herói contra todo o elenco).
- Naga Siren, Beastmaster e Bane são os 3 confrontos com maior desvantagem do Lycan (30+ jogos).
- Terrorblade e Morphling entram como os dois carries de posição 1 mais relevantes em pro que não tipicamente compartilham lane com o Lycan, o caso descrito no pedido (duas HC comparando power spike e janela de duelo mesmo sem brigar na mesma rota).

## Contra Rubick (rubick)
- placar: 43 vitórias em 74 jogos de pro (58,1%). Fonte: pro_dados/lycan.json.
- por que importa: é o oponente mais comum do Lycan em partidas de pro, mesmo raramente estando na mesma lane (Rubick é suporte de posição 4/5).
- janelas: Rubick sai de Arcane Boots aos 10:18 e só chega no Blink Dagger aos 21:36, Shard aos 27:00 e Scepter aos 27:24 (pro_dados/rubick.json). O Lycan já tem Dominator aos 8:24 e Overlord aos 14:30, então o Rubick passa a primeira metade do jogo sem blink pra acompanhar o split push e sem nenhum disable forte além de Telekinesis.
- o que ele faz com você: Telekinesis (stun em área ao aterrissar, cooldown de 22 a 13s por nível) interrompe uma farmada ou te empurra pra um gank se te acha fora de posição. Fade Bolt reduz seu dano de ataque e de feitiço, incômodo numa troca. Spell Steal rouba a última magia que você lançou, mas não achei confirmação de que Shapeshift (um buff "no target") entra na lista de coisas roubáveis, então não afirmo isso.
- o que você faz com ele: Rubick é squishy e não tem fuga própria antes do Blink (21:36). Os lobos com invisibilidade permanente (Summon Wolves nível 3) pegam ele sem vision de ward. Howl reduz o dano dele se ele tentar lutar.
- itens que viram: Black King Bar (seu, 30:36) anula o Telekinesis dele; Aghanim's Shard seu (16:36) dá aos lobos mobilidade pra fugir de uma Telekinesis mal posicionada.
- como jogar: antes dos 20 minutos, puxe torre longe do range de Telekinesis dele; depois que ele tiver blink, cuidado ao ficar parado puxando uma torre isolada, porque ele te alcança e trava a sua rota de fuga.
- fonte: pro_dados/lycan.json; pro_dados/rubick.json; constants_abilities.json; aghs_desc.

## Contra Mars (mars)
- placar: 41 vitórias em 71 jogos de pro (57,7%). Fonte: pro_dados/lycan.json.
- por que importa: segundo oponente mais comum do Lycan em pro e também o offlaner (posição 3) que mais disputa a mesma função que ele.
- janelas: Mars sai de Phase Boots aos 8:30, Blink aos 15:12, Shard aos 21:30 e BKB aos 26:30 (pro_dados/mars.json). O Lycan chega no Overlord (14:30) praticamente junto com o Blink do Mars, então o meio-jogo é sobre quem fecha a luta primeiro: Mars com blink mais Spear, ou Lycan com os lobos mais Howl.
- o que ele faz com você: Arena of Blood cria uma barreira impassável que bloqueia movimento e ataque de quem está dentro contra quem está fora, então ele consegue te prender (ou te trancar pra fora) do seu próprio camp de farm. Spear of Mars empala e empurra o primeiro herói que acerta, te tirando do meio dos lobos se você exagerar no posicionamento.
- o que você faz com ele: Howl reduz a armadura e o dano de ataque dele, o que ajuda os lobos a vencerem a troca de dano. Apex Predator (18% de dano extra em creep neutro) faz o Lycan puxar torre mais rápido que o Mars consegue defender sozinho em duas rotas.
- itens que viram: BKB seu (30:36) bloqueia o Spear dele como feitiço direcionado; o Shard dele (21:30) empala até 2 heróis com rastro de fogo, perigoso se você estiver lutando ao lado de um aliado.
- como jogar: evite entrar sozinho na Arena of Blood dele; use os lobos invisíveis pra abrir uma segunda rota enquanto ele está ocupado defendendo a primeira.
- fonte: pro_dados/lycan.json; pro_dados/mars.json; constants_abilities.json; aghs_desc.

## Contra Disruptor (disruptor)
- placar: 38 vitórias em 70 jogos de pro (54,3%). Fonte: pro_dados/lycan.json.
- por que importa: terceiro oponente mais comum do Lycan em pro, suporte de ward que historicamente faz dupla com o papel de pos 3 dele.
- janelas: Disruptor sai de Arcane Boots aos 11:24, Glimmer Cape aos 22:42, Blink aos 24:00 e só pega o Scepter aos 34:54 (pro_dados/disruptor.json). O Scepter dele silencia itens do inimigo, mas chega tão tarde que o Lycan já deve ter fechado Assault (24:24) e BKB (30:36) antes disso.
- o que ele faz com você: Glimpse te teleporta pra onde você estava 4 segundos atrás, desfazendo de uma vez uma perseguição ou um push de torre. Kinetic Field prende você (e os lobos) dentro de uma barreira circular. Static Storm silencia a área, te impedindo de lançar Wolf Bite ou Shapeshift durante a duração.
- o que você faz com ele: Shapeshift é imune a lentidão, então o Thunder Strike dele (que é descrito como lentidão de ataque e movimento) não te trava enquanto estiver transformado; mas isso não vale pra Glimpse (teleporte) nem pra Kinetic Field (barreira), que não são slow.
- itens que viram: Glimmer Cape dele (22:42) te esconde do ataque mas não do lobo que já está em cima; seu Aghanim's Shard (16:36) chega bem antes do kit completo dele (Blink só aos 24:00), então a janela de 15 a 22 minutos é sua pra puxar torre sem medo de combo.
- como jogar: não force luta perto de árvores isoladas antes dos 24 minutos, que é quando ele pega o Blink pra acompanhar; depois disso, cuidado com o combo Kinetic Field mais Static Storm em grupo.
- fonte: pro_dados/lycan.json; pro_dados/disruptor.json; constants_abilities.json.

## Contra Hoodwink (hoodwink)
- placar: 40 vitórias em 68 jogos de pro (58,8%). Fonte: pro_dados/lycan.json.
- por que importa: quarto oponente mais comum do Lycan em pro, suporte de armadilha que brinca com o mesmo terreno de árvores que os lobos usam pra caçar.
- janelas: Hoodwink sai de botas aos 5:48, Arcane Boots aos 12:12, Shard aos 23:48 e Force Staff aos 26:06 (pro_dados/hoodwink.json). O Lycan já tem Overlord e Shard prontos (14:30 e 16:36) bem antes do Shard dela, então o início do meio-jogo tende a favorecer o farm do Lycan.
- o que ele faz com você: Bushwhack é um stun (não lentidão) se você estiver perto de árvore, segundo constants_abilities.json, então o Shapeshift não te protege dele. Sharpshooter carrega um tiro com break (remove buffs/efeitos passivos) e quebra parte do bônus de crítico do Shapeshift enquanto durar.
- o que você faz com ele: os lobos cortam árvore livremente puxando torre, reduzindo o valor da armadilha dela; Howl reduz o dano de ataque dela numa troca direta.
- itens que viram: Scurry dela (movimento fasado e tree-walking) é a fuga dela de um Shapeshift em perseguição; seu BKB (30:36) ignora o break do Sharpshooter porque ele é um efeito de feitiço.
- como jogar: evite correr pra cima de bosque fechado perseguindo ela antes dos 23 minutos (antes do Shard, ela tem menos ferramenta de zona); depois disso, puxe torre em área aberta onde a armadilha não alcança.
- fonte: pro_dados/lycan.json; pro_dados/hoodwink.json; constants_abilities.json; aghs_desc.

## Contra Shadow Fiend (nevermore)
- placar: 33 vitórias em 63 jogos de pro (52,4%). Fonte: pro_dados/lycan.json.
- por que importa: quinto oponente mais comum do Lycan em pro e também o carry de posição 1 mais jogado em pro no patch atual (3.990 partidas no pro_dados dele), então entra também como o duelo HC contra HC mais frequente da lista.
- janelas: Shadow Fiend sai de botas aos 3:06 (o item mais rápido entre os 17 heróis desta página), Power Treads aos 5:54 e Blade of Alacrity aos 12:42 (pro_dados/nevermore.json). Ele fica forte muito antes do Lycan: Necromastery empilha alma a cada kill/assist/último hit e amplifica o dano dos Shadowraze, então dos 6 aos 15 minutos ele costuma ganhar qualquer troca de farm direta.
- o que ele faz com você: os três Shadowraze (cooldown de 9s cada) acertam a área em volta do Shadow Fiend sem precisar de mira em alvo, bom pra zonear os lobos e o creep dominado no camp de jungle. Requiem (ult) estoura dano alto em área se você estiver agrupado perto dele sem Shapeshift.
- o que você faz com ele: depois do Overlord e do Shard (14:30 e 16:36), os lobos com Feral Impulse (mais dano e regen) já têm HP e DPS suficiente pra sobreviver às razes e vencer um 1x1 corpo a corpo, porque Shadow Fiend é frágil fora do Frenzy.
- itens que viram: BKB seu (30:36) ignora as três razes e o Requiem; Frenzy dele (velocidade de ataque e movimento por 8s) é a janela de maior risco antes de você fechar BKB.
- como jogar: evite lane de jungle aberta contra ele antes dos 15 minutos; depois do seu Shard, puxe torre e deixe pra lutar só quando tiver Howl mais os lobos cobrindo.
- fonte: pro_dados/lycan.json; pro_dados/nevermore.json; constants_abilities.json.

## Contra Pangolier (pangolier)
- placar: 30 vitórias em 61 jogos de pro (49,2%). Fonte: pro_dados/lycan.json.
- por que importa: sexto oponente mais comum do Lycan em pro, e o placar quase 50/50 mostra que a mobilidade dele neutraliza boa parte da vantagem de farm do Lycan.
- janelas: Pangolier sai de Diffusal Blade aos 12:24, Blink aos 19:12, Shard aos 23:12 e Scepter aos 24:54 (pro_dados/pangolier.json). Antes dos 19 minutos ele não tem blink pra fechar distância rápido, então a rota do Lycan costuma estar livre; depois disso, Swashbuckle mais Rolling Thunder alcançam um split push isolado.
- o que ele faz com você: Rolling Thunder (a forma rolante da ulti, já disponível no nível 6, sem precisar de Shard) nasce imune a debuff e com 80% de resistência mágica, então ele atravessa árvore e ignora Howl ou Wolf Bite enquanto estiver rolando pra interceptar uma rota; o Aghanim's Shard dele (Roll Up) soma a isso virar, frear e recastar Rolling Thunder ou Shield Crash no meio da rolagem.
- o que você faz com ele: Pangolier não tem stun duro no kit básico, só slow (Swashbuckle) e um proc de sorte (Lucky Shot); Shapeshift ignora o slow, então ele raramente te trava de verdade sozinho.
- itens que viram: Diffusal dele (12:24) queima sua mana, mas Shapeshift não usa mana contínua, então o efeito prático é baixo; seu BKB (30:36) não bloqueia Gyroshell porque ele é imune a debuff por conta própria, então a luta se decide no dano puro.
- como jogar: não brigue puxando torre sozinho depois que ele tiver Blink (19:12); antes disso, farme livre e force ele a escolher entre te perseguir ou ficar com o time.
- fonte: pro_dados/lycan.json; pro_dados/pangolier.json; constants_abilities.json; aghs_desc.

## Contra Centaur Warrunner (centaur)
- placar: 22 vitórias em 47 jogos de pro (46,8%), leve desvantagem. Fonte: pro_dados/lycan.json.
- por que importa: segundo offlaner mais comum contra o Lycan em pro (depois do Mars), e os dois disputam a mesma prioridade de farm e de puxar torre.
- janelas: Centaur sai de Helm of Iron Will aos 4:48 (quase junto com o seu, 3:42), Ring of Tarrasque aos 17:30, Pipe aos 18:06 e Blink aos 19:36 (pro_dados/centaur.json). Os dois correm a mesma linha de sustain de força no early; a diferença aparece depois dos 17 minutos, quando o Centaur fica tanque o suficiente pra não morrer pros lobos.
- o que ele faz com você: Return (passiva) devolve dano de quem bate nele corpo a corpo, punindo os lobos e o creep dominado em uma troca direta. Stampede (ult) dá velocidade e atravessa unidade pro time dele, o que desfaz uma perseguição sua ou escapa de um gank.
- o que você faz com ele: Howl reduz o dano dele numa troca; Double Edge causa dano no próprio Centaur também, então forçar ele a usar em HP baixo é jogada de risco pra ele.
- itens que viram: Ring of Tarrasque dele (17:30) empata a corrida de sustain que você tenta ganhar com Helm; Crimson Guard dele (21:30) reduz o dano físico dos lobos numa luta em grupo.
- como jogar: não tente ganhar a troca de farm 1x1 direto, ele tanka tão bem quanto você; use os lobos pra abrir uma segunda rota enquanto ele segura a primeira sozinho.
- fonte: pro_dados/lycan.json; pro_dados/centaur.json; constants_abilities.json.

## Contra Tidehunter (tidehunter)
- placar: 20 vitórias em 43 jogos de pro (46,5%), leve desvantagem. Fonte: pro_dados/lycan.json.
- por que importa: terceiro offlaner mais comum contra o Lycan em pro, outro tanque que compete pela mesma função.
- janelas: Tidehunter sai de Phase Boots aos 7:48, Soul Ring aos 8:30, Scepter aos 22:18, Shard aos 23:06 e Blink aos 21:12 (pro_dados/tidehunter.json). O Scepter dele (Gush em linha, cooldown menor) chega quase junto com seu Assault (24:24), então o fim do early é parelho.
- o que ele faz com você: Ravage (ult) estuna tudo perto dele em área, e é stun, não slow, então o Shapeshift não te protege se você estiver agrupado com os lobos perto de Rosh ou de um objetivo. Anchor Smash reduz o dano de ataque de quem está perto, incluindo os lobos numa troca.
- o que você faz com ele: Kraken Shell (passiva dele) só limpa debuff quando ele cruza um limite de dano tomado, então Howl sozinho não é removido por ela; ainda assim, Howl reduz o dano dele numa luta direta.
- itens que viram: Shard dele (23:06) prende um herói com uma âncora que puxa de volta se afastar demais, perigoso se usado em você no meio de um split push; seu Shard (16:36) chega bem antes e dá fuga aos lobos.
- como jogar: evite agrupar você e os dois lobos num só ponto perto de Rosh depois que ele tiver a ulti (nível 6); prefira puxar torres separadas onde um Ravage não pega todo mundo junto.
- fonte: pro_dados/lycan.json; pro_dados/tidehunter.json; constants_abilities.json; aghs_desc.

## Contra Underlord (abyssal_underlord)
- placar: 29 vitórias em 43 jogos de pro (67,4%), a segunda maior vantagem do Lycan com amostra de 30+ nesta lista (depois do Void Spirit, abaixo). Fonte: pro_dados/lycan.json.
- por que importa: quarto offlaner mais comum contra o Lycan em pro e o segundo confronto mais favorável da lista: os dois jogam o mesmo plano de abrir duas rotas com unidades extras (lobos e creep dominado contra Firestorm e Dark Portal), e nos dados de pro o Lycan ganha essa corrida na maioria das vezes.
- janelas: Underlord sai de Soul Ring aos 7:12, Power Treads aos 7:42, Pipe aos 17:30, Shard aos 21:48 e Scepter aos 23:54 (pro_dados/abyssal_underlord.json). O Lycan chega no Overlord (14:30) antes do Pipe dele (17:30), então a primeira fase do jogo tende a favorecer o farm do Lycan.
- o que ele faz com você: Pit of Malice cria uma raiz em área (não é slow, então o Shapeshift não te protege dela) que machuca quem ficar dentro a cada 3,6s. Atrophy Aura reduz o dano base de quem está perto dele, incluindo os lobos numa troca.
- o que você faz com ele: Howl reduz o dano dele; Apex Predator faz os lobos e o creep dominado puxarem torre e farmarem jungle mais rápido que o Firestorm dele consegue defender duas rotas ao mesmo tempo.
- itens que viram: Pipe dele (17:30) protege o time dele de nuke mágico em grupo, incluindo Howl; seu Shard (16:36) dá fuga aos lobos antes mesmo do Pipe dele estar pronto.
- como jogar: force a corrida de farm em rotas separadas antes dos 17 minutos, que é a sua janela mais forte; depois disso, cuidado ao ficar parado dentro de um Pit of Malice.
- fonte: pro_dados/lycan.json; pro_dados/abyssal_underlord.json; constants_abilities.json.

## Contra Void Spirit (void_spirit)
- placar: 27 vitórias em 39 jogos de pro (69,2%), a maior vantagem do Lycan com amostra de 30+ nesta lista, acima do Underlord (67,4%). Fonte: pro_dados/lycan.json.
- por que importa: maior vantagem percentual da lista, herói de meio de rota que raramente compartilha lane com o Lycan, mas que o pedido original pede pra comparar mesmo assim.
- janelas: Void Spirit sai de Aghanim's Shard aos 17:00, Staff of Wizardry aos 21:00 e Scepter aos 25:06 (pro_dados/void_spirit.json). O kit dele não ganha disable forte até o Scepter (Resonant Pulse passa a silenciar ao ser lançado), então ele fica praticamente sem ferramenta de travar um split push antes dos 25 minutos.
- o que ele faz com você: Astral Step aplica no alvo uma marca que causa lentidão por 1,25s e então detona em dano, slow que o Shapeshift ignora; Aether Remnant te reposiciona se você atravessar a marca dele, mas não é um disable duro.
- o que você faz com ele: sem stun no kit básico, ele depende de burst e reposicionamento pra lutar; os lobos com Feral Impulse aguentam e revidam enquanto ele não tiver o Scepter.
- itens que viram: Scepter dele (25:06) adiciona o silêncio que faltava, então depois desse item ele passa a conseguir cortar seu Wolf Bite ou Shapeshift no cast; antes disso, seu BKB nem é prioridade contra ele.
- como jogar: farme livre nas duas primeiras fases do jogo, ele não tem ferramenta pra te travar sozinho; só redobre a atenção depois que ele tiver o Scepter.
- fonte: pro_dados/lycan.json; pro_dados/void_spirit.json; constants_abilities.json; aghs_desc.

## Contra Axe (axe)
- placar: 24 vitórias em 39 jogos de pro (61,5%), a terceira maior vantagem do Lycan com amostra de 30+ nesta lista. Fonte: pro_dados/lycan.json.
- por que importa: quinto offlaner mais comum contra o Lycan em pro, e o terceiro confronto mais favorável da lista.
- janelas: Axe sai de Phase Boots aos 7:12, Blink aos 15:42, Shard aos 22:54 e BKB aos 25:54 (pro_dados/axe.json). Ele costuma blincar pra cima de um herói isolado já aos 15 minutos, mas o kit dele quer ser atacado (Berserker's Call mais Counter Helix), o que não combina bem com lutar contra um Lycan que pode simplesmente recusar a troca e puxar outra torre.
- o que ele faz com você: Berserker's Call força você (e os lobos, se estiverem perto) a atacar o Axe, alimentando o Counter Helix dele (dano puro em área a cada X ataques recebidos); Culling Blade, nos dados atuais do patch, é dano puro fixo por nível (275/375/475) que reseta o cooldown se matar o herói, sem limiar de vida percentual, então o HP extra do Shapeshift não muda se ele te executa ou não.
- o que você faz com ele: Howl reduz o dano de ataque dele; se você não entrar no raio do Berserker's Call, Counter Helix não tem o que acertar, e os lobos conseguem bater de fora enquanto o creep dominado puxa torre.
- itens que viram: Berserker's Call atravessa debuff immunity (não é bloqueado nem pelo seu BKB), então a única forma de evitar é não estar no raio quando ele lança; seu BKB (30:36) já bloqueia o Battle Hunger (slow e DoT) dele.
- como jogar: evite entrar no raio do Call com o grupo de lobos, prefira bater de longe ou simplesmente ignorar a briga e farmar outra rota.
- fonte: pro_dados/lycan.json; pro_dados/axe.json; constants_abilities.json; aghs_desc.

## Contra Naga Siren (naga_siren)
- placar: 13 vitórias em 35 jogos de pro (37,1%), a maior desvantagem do Lycan com amostra de 30+. Fonte: pro_dados/lycan.json.
- por que importa: é o confronto de HC contra HC mais relevante da lista, duas carries que raramente compartilham lane mas que competem pelo mesmo plano de jogo, farmar rápido com unidades extras (lobos e creep dominado contra Mirror Image) e fechar o jogo puxando torre ou protegendo o time. É também o pior resultado estatístico do Lycan contra qualquer herói com amostra de 30+ partidas de pro.
- janelas: Naga sai de Power Treads aos 6:06, Manta aos 14:36 (quase junto com o seu Overlord, 14:30), Orchid aos 18:12, Heart aos 24:48, Butterfly aos 28:06 e Bloodthorn aos 28:42 (pro_dados/naga_siren.json). Os dois chegam no item de "multiplicar unidades" quase no mesmo minuto (14:30/14:36), mas a Naga sai na frente depois dos 18 minutos com Orchid e segue escalando puro DPS e evasão até os 28 minutos, enquanto o Lycan só fecha BKB aos 30:36.
- o que ele faz com você: Song of the Siren (ult) coloca tudo num raio grande em estase completa; segundo as tabelas de piercing consultadas (dotacoach, via busca), ela não atravessa debuff immunity (BKB), então sem BKB ativo ela anula totalmente uma perseguição ou um push seu por até 160s de cooldown no nível 1. Com Scepter, Ensnare passa a afetar unidades imunes a debuff e aplica Break, ou seja, no late game ela consegue travar você mesmo com BKB de pé e ainda remove o bônus de crítico do Shapeshift enquanto durar.
- o que você faz com ele: Howl reduz o dano dela e das ilusões; antes dos 18 minutos (Orchid), ela não tem silêncio nem controle forte, então essa é a sua janela real pra vencer a corrida de farm.
- itens que viram: seu BKB (30:36) anula a Song of the Siren básica (sem Scepter nela); o Scepter dela (não listado nos 30 itens mais comprados do pro_dados, então sem minuto mediano confirmado) muda essa conta por completo.
- como jogar: pressione a lane e a jungle antes dos 18 minutos, que é quando ela ainda não tem Orchid; depois disso, não dependa só do BKB pra ignorar a ult dela, porque o Scepter muda a regra.
- fonte: pro_dados/lycan.json; pro_dados/naga_siren.json; constants_abilities.json; dotacoach.gg (via busca).

## Contra Beastmaster (beastmaster)
- placar: 12 vitórias em 31 jogos de pro (38,7%), a segunda maior desvantagem do Lycan com amostra de 30+. Fonte: pro_dados/lycan.json.
- por que importa: outro herói de unidades controladas que disputa literalmente o mesmo recurso do Lycan, os camps de creep neutro, e o segundo pior resultado do Lycan na lista.
- janelas: Beastmaster sai do Scepter já aos 14:36, muito adiantado pra um item caro (pro_dados/beastmaster.json), Blink aos 18:36 e BKB aos 23:36. O Scepter dele (Drums of Slom: ataque cura e causa dano em área pra ele e as unidades controladas) chega praticamente no mesmo minuto do seu Overlord (14:30), transformando o meio-jogo numa corrida direta de qual conjunto de unidades bate mais forte.
- o que ele faz com você: os Hawks (Summon Raptor) mergulham e aplicam raiz periodicamente, e têm alcance de visão que pode revelar os lobos mesmo com a invisibilidade permanente do nível 3 de Summon Wolves. Primal Roar (ult) estuna em linha e empurra, não é slow, então o Shapeshift não bloqueia.
- o que você faz com ele: Howl reduz o dano de ataque dele e das unidades dele; Apex Predator (18% extra em creep neutro) ainda dá uma vantagem de clear que o kit dele não tem equivalente direto.
- itens que viram: o Scepter dele (14:36) é o item que decide a primeira metade do jogo, saindo quase junto com o seu Overlord; o Primal Roar atravessa debuff immunity, então nem seu BKB (30:36) bloqueia o stun dele.
- como jogar: dispute os camps grandes de perto, ele também depende deles pra alimentar Wild Axes e Inner Beast; depois dos 15 minutos, cuidado redobrado com o Scepter dele em qualquer camp compartilhado.
- fonte: pro_dados/lycan.json; pro_dados/beastmaster.json; constants_abilities.json.

## Contra Bane (bane)
- placar: 19 vitórias em 47 jogos de pro (40,4%), a terceira maior desvantagem do Lycan com amostra de 30+. Fonte: pro_dados/lycan.json.
- por que importa: suporte de posição 4/5, mas entra na lista porque o Sono do kit dele é um dos poucos disables que ignoram completamente a imunidade a slow do Shapeshift, e porque é o terceiro pior resultado estatístico do Lycan na lista.
- janelas: o poder do Bane é mais de nível do que de item: Nightmare e Brain Sap já fazem efeito completo desde o nível em que forem aprendidos. Nos itens, ele só pega Arcane Boots aos 12:00, Blink aos 33:48 e Scepter aos 35:48 (pro_dados/bane.json), bem atrás do seu Assault (24:24) e BKB (30:36), então o perigo dele vem do nível, não do inventário.
- o que ele faz com você: Nightmare coloca você pra dormir, andando sozinho e vulnerável; não é slow, então o Shapeshift não te protege dele, mas o BKB padrão bloqueia (Nightmare não atravessa debuff immunity, segundo constants_abilities.json e confirmado em fontes da comunidade). Se alguém te ataca dormindo, o Nightmare passa pro atacante, o que pode virar uma armadilha se seu time reagir sem saber. Ichor of Nyctasha empilha um debuff de status depois de uma morte sob efeito dele, deixando o próximo Nightmare ou Fiend's Grip mais difícil de resistir.
- o que você faz com ele: Howl reduz o dano dele numa troca direta; fora da lane, ele é frágil e morre rápido pros lobos se pego sem Nightmare pronto (cooldown de 25 a 16s por nível).
- itens que viram: Aghanim's Scepter dele (35:48, bem tarde) faz Fiend's Grip spawnar duas ilusões canalizando junto, perigoso se você split-pushar sozinho depois dos 35 minutos; seu BKB resolve o Nightmare (ele não atravessa debuff immunity), então chegar com BKB de pé é a defesa real, além de vision e não ficar isolado no fim de jogo.
- como jogar: evite farmar sozinho e isolado depois do nível 6 dele; agrupe com um aliado perto pra que, se você dormir, o time consiga proteger ou reagir ao combo.
- fonte: pro_dados/lycan.json; pro_dados/bane.json; constants_abilities.json; aghs_desc.

## Contra Terrorblade (terrorblade)
- placar: 29 vitórias em 61 jogos de pro (47,5%), leve desvantagem. Fonte: pro_dados/lycan.json.
- por que importa: o carry de posição 1 com mais jogos empatados no topo da lista de confrontos do Lycan (61, empatado com o Pangolier) e um dos dois exemplos diretos do pedido original, duas HC que raramente estão na mesma lane mas que competem pelo mesmo plano de farm multiplicado (lobos e creep dominado contra Conjure Image).
- janelas: Terrorblade sai de Power Treads aos 5:48, Manta aos 17:06 e Shard aos 17:24 (pro_dados/terrorblade.json), chegando no pacote de "multiplicar unidades mais stats" cerca de 2 a 3 minutos depois do Overlord e do Shard do Lycan (14:30/16:36). Essa diferença pequena no early tende a sobrar pro Lycan, mas o placar quase parelho (47,5%) sugere que a escala de Metamorphosis no late compensa.
- o que ele faz com você: Sunder troca uma porcentagem da vida atual entre Terrorblade e o alvo; como o Shapeshift te dá até 425 de HP bônus, você fica com mais vida absoluta pra perder nessa troca percentual se ele usar em você com a vida dele baixa, o que faz dele um recurso de sobrevivência ou de kill contra justamente heróis grandes de HP como você. Reflection cria cópias que reduzem sua velocidade de ataque e movimento, mas isso é slow, então o Shapeshift ignora.
- o que você faz com ele: Howl reduz o dano dele e das ilusões; antes do Manta dele (17:06), ele ainda não tem o número de corpos no mapa pra disputar duas rotas, então essa é a sua janela de puxar torre livre.
- itens que viram: Shard dele (17:24, custa vida atual dele mesmo) acelera ele e as ilusões, perigoso numa perseguição; seu BKB (30:36) não resolve Sunder porque é uma troca de vida, não dano ou debuff direto.
- como jogar: force a decisão antes dos 17 minutos, quando ele ainda não multiplicou o farm dele; depois da Metamorphosis dele (disponível desde o nível 6), evite ficar no topo de vida absoluta puxando torre perto dele sem backup.
- fonte: pro_dados/lycan.json; pro_dados/terrorblade.json; constants_abilities.json.

## Contra Morphling (morphling)
- placar: 10 vitórias em 19 jogos de pro (52,6%), amostra pequena. Fonte: pro_dados/lycan.json.
- por que importa: o segundo exemplo direto do pedido original de duas HC comparadas sem lane em comum; mesmo com amostra pequena, é o carry de posição 1 que completa o grupo dos dois outros carries já citados (Shadow Fiend e Terrorblade, Naga e Terrorblade já cobertos por outro critério).
- janelas: Morphling sai de Power Treads aos 6:00, Yasha aos 14:36 (quase junto do seu Overlord, 14:30), Manta aos 18:24, Butterfly aos 25:48 e BKB aos 30:54 (pro_dados/morphling.json), uma curva de itens quase idêntica em timing à sua própria (Shard 16:36, Assault 24:24, BKB 30:36).
- o que ele faz com você: Adaptive Strike estuna (com knockback) escalando com a diferença de agilidade, e por ser stun, não lentidão, o Shapeshift não te protege dele; Waveform deixa o Morphling invulnerável durante o dash, então ele atravessa os lobos sem sofrer dano no meio de uma fuga ou engajada.
- o que você faz com ele: Howl reduz o dano dele; se ele usar Replicate em você, o clone só copia as habilidades básicas (Summon Wolves, Howl, Feral Impulse), nunca o Shapeshift, então replicar o Lycan rende pouco pra ele comparado a replicar outro carry.
- itens que viram: Butterfly dele (25:48) dá evasão alta contra o dano de ataque e crítico do seu Shapeshift, um contador direto ao seu dano físico; seu BKB (30:36) ignora o stun do Adaptive Strike.
- como jogar: antes do Butterfly dele (25:48), seu dano físico com Shapeshift ainda conecta bem; depois desse item, prefira focar outro alvo ou usar Howl pra compensar a evasão reduzindo a armadura e o dano dele primeiro.
- fonte: pro_dados/lycan.json; pro_dados/morphling.json; constants_abilities.json.
