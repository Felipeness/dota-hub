---
id: confrontos-crystal_maiden
heroi: Crystal Maiden
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/crystal_maiden.json
- dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/disruptor.json
- dota-hub-conteudo-novo/pro_dados/pudge.json
- dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/lion.json
- dota-hub-conteudo-novo/pro_dados/skywrath_mage.json
- dota-hub-conteudo-novo/pro_dados/pugna.json
- dota-hub-conteudo-novo/pro_dados/necrolyte.json
- dota-hub-conteudo-novo/pro_dados/antimage.json
- dota-hub-conteudo-novo/pro_dados/batrider.json
- dota-hub-conteudo-novo/pro_dados/nyx_assassin.json
- dota-hub-conteudo-novo/pro_dados/razor.json
- dota-imortal/data/opendota/constants_abilities.json
---

## Por que esses 15 oponentes

Critério 1, mais jogos de pro contra ela (pro_dados/crystal_maiden.json, campo confrontos): Ogre Magi, Rubick, Shadow Fiend, Disruptor, Pudge e Dragon Knight são os 6 com mais partidas registradas.

Critério 2, mesma função (suporte duro/roamer de controle em área) com volume alto em pro: Jakiro, Lion e Skywrath Mage, além dos que já entraram pelo critério 1 (Ogre Magi, Rubick, Disruptor).

Critério 3, maior vantagem e maior desvantagem medidas, só com 30+ jogos: Pugna (62,8%), Necrophos (62,2%) e Anti-Mage (61,8%) do lado bom; Batrider (27,3%), Nyx Assassin (27,5%) e Razor (28,3%) do lado ruim.

Critério 4 (carry sem lane em comum): Dragon Knight, Necrophos e Anti-Mage cobrem isso mesmo CM sendo suporte, porque nenhum dos três joga a lane dela e ainda assim aparecem no top de jogos ou no top de vantagem/desvantagem, exatamente o caso "dois carries que não se cruzam" que o critério pede, só que aplicado ao suporte: ela nunca troca farm com eles, mas o power spike de cada lado decide se ela consegue travar antes deles virarem ameaça de luta.

## Contra Ogre Magi (ogre_magi)
- placar: Crystal Maiden venceu 194 de 377 partidas de pro (51,5%), fonte: pro_dados/crystal_maiden.json (OpenDota /heroes/5/matchups).
- por que importa: é o confronto com mais jogos de pro registrado contra ela, e os dois disputam a mesma função: suporte duro de controle e buff em área (pro_dados/ogre_magi.json, resumo).
- janelas: até os 8 min os dois abrem bota cedo (CM boots 5,3min, mediana de 1.269 jogos; Ogre boots 5,8min, mediana de 1.854 jogos). Dos 8 aos 17 min CM já está com Tranquil Boots fechadas (8,4min) e mana sobrando pra Frostbite repetido, enquanto o Ogre ainda está montando mana (Ring of Basilius 8,2min, Arcane Boots 11,2min). Aos 17-18 min os dois batem o primeiro item de poder quase junto: Aghanim's Shard de CM (17,7min, Crystal Clone) contra o Hand of Midas do Ogre (18,9min, puro farm, não ajuda ele em luta). Depois dos 20 min, Blink Dagger e item de controle (Scythe) nem aparecem entre os 30 itens mais comprados do Ogre em pro (pro_dados/ogre_magi.json), então o Blink de CM (23,1min) costuma chegar sem resposta de mobilidade do outro lado.
- o que ele faz com você: Fireblast atordoa 1,2s, e o Multicast (chance de repetir o cast cresce 1% a cada 16 de Força) pode repetir o stun ou o Ignite (queima + -25% de velocidade) sem gastar mana extra; contra os 120 de vida de CM, um Multicast de Ignite é o suficiente pra matar sozinho.
- o que você faz com ele: Frostbite trava o Ogre antes dele conseguir fechar o combo de Fireblast, e como ele não tem fuga própria (sem blink até os 26-29min, tarde pros padrões de suporte), qualquer Frostbite bem lançado vira kill garantida pro time que reagir rápido.
- itens que viram: Aghanim's Shard de CM (Crystal Clone com 150 de vida que desvia o Fireblast se o Ogre mirar nela) entra em janela parecida com o Aghs do Ogre (Fire Shield, mas só 26,1min, bem mais tarde); Glimmer Cape de CM protege contra o burst de Ignite+Multicast.
- como jogar: na lane, puna o Ogre quando ele gastar mana num combo que falhou, ele não tem regen própria além do Soul Ring (11-13min); depois dos 17 min, use o Aghs Shard pra abrir Frostbite de ângulos que o Ogre não vê chegando, porque ele só ganha mobilidade de verdade nos 25+ min.
- fonte: pro_dados/crystal_maiden.json; pro_dados/ogre_magi.json

## Contra Rubick (rubick)
- placar: Crystal Maiden venceu 168 de 331 partidas de pro (50,8%), fonte: pro_dados/crystal_maiden.json.
- por que importa: segundo maior volume de jogos de pro contra ela, e a razão tática é direta: Freezing Field é um alvo óbvio de Spell Steal, então os dois times tendem a jogar em volta disso.
- janelas: Rubick costuma estar com Blink Dagger pronto aos 21,6 min (pro_dados/rubick.json), antes do Blink de CM (23,1min): na prática ele chega primeiro na distância de combo. O Aghanim's Shard dele (27min) e o Scepter (27,4min) vêm bem depois do Shard de CM (17,7min), então o meio de jogo (17-23min) é a janela em que CM tem vantagem de item sobre ele.
- o que ele faz com você: Fade Bolt salta e reduz ataque/dano mágico a cada salto, Telekinesis levanta CM no ar e estuna quem estiver perto quando ela cai, os 120 de vida dela não sobrevivem ao combo se ele pegar primeiro; e se CM lançar Freezing Field visível, Spell Steal rouba a ultimate pro lado dele (recarga de Spell Steal cai pra 4s depois de usar, então ele pode repetir rápido).
- o que você faz com ele: Frostbite trava o Rubick antes dele conseguir levantar Telekinesis, e como nem Telekinesis nem Fade Bolt furam BKB (bkbpierce não, constants_abilities.json), o BKB dela (situacional) anula o combo inteiro dele, exceto o próprio Spell Steal, que fura BKB.
- itens que viram: BKB de CM resolve Telekinesis e Fade Bolt mas não o Spell Steal; a melhor resposta pro Spell Steal é simples, não lançar Freezing Field na cara dele sem plano de abate, porque ele pode devolver a mesma ultimate.
- como jogar: bait o Blink do Rubick antes de se comprometer com o seu, ele costuma chegar primeiro na janela de combo; se ele gastar Telekinesis errado, puna com Frostbite + Crystal Nova antes da recarga dele resetar.
- fonte: pro_dados/crystal_maiden.json; pro_dados/rubick.json; constants_abilities.json

## Contra Shadow Fiend (nevermore)
- placar: Crystal Maiden venceu 150 de 290 partidas de pro (51,7%), fonte: pro_dados/crystal_maiden.json.
- por que importa: terceiro maior volume de jogos de pro contra ela; é o clássico suporte-contra-mid, SF farma rápido (GPM 658, LH aos 10min: 78, pro_dados/nevermore.json) e CM precisa travar ele antes que o Requiem vire ameaça de luta.
- janelas: SF já está com Power Treads (5,9min) e componentes de dano (Blade of Alacrity 12,7min) quando CM ainda está montando a lane; aos 13-19min ele monta Dragon Lance (14min) e Manta (via Yasha, 13,3min), enquanto CM fecha o Aghanim's Shard (17,7min). O primeiro ponto de virada real é por volta dos 22-25min: SF chega no Black King Bar (25,2min) e Hurricane Pike (23min), CM já tem Blink (23,1min) pra escolher o ângulo do Frostbite antes disso.
- o que ele faz com você: Shadowraze (3 nukes instantâneos em área, sem precisar mirar em você) mata os 120 de vida de CM de longe sem risco pra ele; se ele cair perto da morte, Requiem of Souls solta ondas em área que também a alcançam se estiver perto.
- o que você faz com ele: Frostbite trava SF no meio de um combo de Raze, e como ele depende de ficar parado perto da wave pra acertar as 3 razes, qualquer stun bem cravado vira kill fácil pro time antes dele comprar BKB (25,2min).
- itens que viram: Glimmer Cape (invisibilidade) e Force Staff (empurra 600 de distância) de CM ajudam a sair do alcance das razes; BKB dela não ajuda contra raze (dano mágico instantâneo, não é disable), então a resposta certa é distância/invisibilidade, não imunidade.
- como jogar: warde fundo pra negar o roam dele contra sua lane; se SF se expuser antes dos 25min (sem BKB), Frostbite + o time colapsando mata ele rápido, porque ele não tem fuga própria além do Blink/Silver Edge tardios.
- fonte: pro_dados/crystal_maiden.json; pro_dados/nevermore.json

## Contra Disruptor (disruptor)
- placar: Crystal Maiden venceu 109 de 223 partidas de pro (48,9%), fonte: pro_dados/crystal_maiden.json.
- por que importa: quarto maior volume de jogos de pro, e mesma função de suporte duro de controle em área: os dois competem pelo mesmo espaço de draft e de luta.
- janelas: GPM e XPM quase idênticos (CM 297/454, Disruptor 279/431, pro_dados). CM fecha Tranquil Boots aos 8,4min contra Arcane Boots do Disruptor aos 11,4min; os dois chegam no Blink quase junto (CM 23,1min, Disruptor 24min). A diferença real está no late: o Aghanim's Scepter do Disruptor é muito tardio (34,9min, pro_dados/disruptor.json) contra o BKB/Blink de CM, que já estão prontos bem antes disso.
- o que ele faz com você: Kinetic Field prende CM numa área pequena que ela não atravessa sem blink, e Static Storm silencia em área, cortando Frostbite e Freezing Field completamente enquanto ela está presa.
- o que você faz com ele: Frostbite trava o Disruptor antes dele conseguir formar o Kinetic Field (precisa estar a até 900 de distância pra lançar), e como ele não tem blink cedo (24min, tarde pros padrões de iniciação), um Frostbite bem cronometrado nega o combo inteiro dele.
- itens que viram: o Aghanim's Shard do Disruptor (Kinetic Fence, parede que bloqueia rota de fuga) é perigoso contra o Blink de CM como única saída; o Aghs Shard dela (Crystal Clone) pode ser sacrificado dentro do Kinetic Field dele pra aplicar Frostbite de graça quando o clone estilhaça.
- como jogar: nunca seja a primeira a se posicionar quando o Disruptor já tem Kinetic Field disponível; puna o pouco de mobilidade dele antes dos 24min, porque depois disso ele consegue iniciar sozinho.
- fonte: pro_dados/crystal_maiden.json; pro_dados/disruptor.json

## Contra Pudge (pudge)
- placar: Crystal Maiden venceu 98 de 207 partidas de pro (47,3%, leve desvantagem), fonte: pro_dados/crystal_maiden.json.
- por que importa: quinto maior volume de jogos de pro, e é o counter de pick-off clássico: Hook de longo alcance ameaça diretamente a herói com menos vida do jogo.
- janelas: o Pudge pro costuma fechar Aghanim's Scepter muito cedo pros padrões do item (mediana 17,2min, pro_dados/pudge.json), quase no mesmo momento do Aghanim's Shard de CM (17,7min): é a janela mais perigosa da partida, os dois estão no pico de poder juntos. O Blink dele (19,5min) chega pouco antes do dela (23,1min), então entre os 17 e os 23min o Pudge costuma ter mais iniciativa de posicionamento que CM.
- o que ele faz com você: Hook acerta de longe e sozinho já ameaça matar os 120 de vida dela; Dismember canaliza dano real que fecha o kill se ninguém interromper, e Rot pune qualquer um que fique perto dele tentando salvar o aliado puxado.
- o que você faz com ele: Frostbite trava o Pudge logo depois de um Hook errado, abrindo a punição do time; Crystal Nova desacelera a perseguição dele, que depende de velocidade de movimento pra fechar o kill depois do gancho.
- itens que viram: Glimmer Cape de CM nega a visão que o Pudge precisa pra mirar o Hook à distância; Force Staff dela escapa do alcance antes que o gancho acerte, mas só funciona se ela reagir no primeiro sinal de mira.
- como jogar: nunca fique parada em lane aberta sem visão contra um Pudge roamando; mantenha Wind Lace e wards cedo, porque a janela de maior risco (17-23min) é justamente quando os dois estão terminando os itens de poder.
- fonte: pro_dados/crystal_maiden.json; pro_dados/pudge.json

## Contra Dragon Knight (dragon_knight)
- placar: Crystal Maiden venceu 94 de 182 partidas de pro (51,6%), fonte: pro_dados/crystal_maiden.json.
- por que importa: sexto maior volume de jogos de pro contra ela, apesar de nunca dividir lane com ela: é o caso puro de "duas funções que não se cruzam, mas o power spike de cada um decide a luta".
- janelas: DK farma sozinho e rápido (LH aos 10min: 63, GPM 583, pro_dados/dragon_knight.json) enquanto CM não compete por farm (LH aos 10min: 6). O nível 6 dele (Elder Dragon Form) já muda o jogo bem antes de qualquer item grande; o primeiro item relevante em luta é o Blink (16,2min), seguido do BKB (23,3min), quase junto com o Blink de CM (23,1min). O Aghanim's Scepter dele nem aparece entre os 30 itens mais comprados em pro (pro_dados/dragon_knight.json), sinal de que é raro e tardio quando sai, então a janela 16-23min é onde CM ainda tem iniciativa.
- o que ele faz com você: uma vez em forma de dragão, o autoataque dele sozinho mata os 120 de vida de CM em 2-3 golpes; Dragon Tail estuna antes do corpo a corpo fechar o combo, e depois dos 23min o BKB dele bloqueia o Frostbite dela completamente (bkbpierce não, constants_abilities.json).
- o que você faz com ele: antes do nível 6 (sem forma de dragão) e antes dos 23min (sem BKB), Frostbite trava o DK normalmente e o time pode punir, já que ele não tem fuga própria além do próprio Blink.
- itens que viram: o BKB dele (23,3min) é o divisor exato do confronto, Frostbite para de funcionar a partir daí; o BKB dela (situacional) segura a canalização de Freezing Field contra o Dragon Tail dele.
- como jogar: pressione o DK antes do nível 6 e antes dos 23min, é a única janela real; depois disso, trate o confronto como "ele tanka, você controla o resto do time", não tente travar o DK sozinha.
- fonte: pro_dados/crystal_maiden.json; pro_dados/dragon_knight.json; constants_abilities.json

## Contra Jakiro (jakiro)
- placar: Crystal Maiden venceu 88 de 180 partidas de pro (48,9%), fonte: pro_dados/crystal_maiden.json.
- por que importa: sétimo maior volume de jogos de pro, mesma função (suporte duro de área): os dois disputam o mesmo espaço de draft.
- janelas: nenhum dos dois prioriza Blink Dagger (Jakiro nem aparece com blink no top 30 de itens comprados, pro_dados/jakiro.json), então o confronto não é uma corrida de mobilidade, é de posicionamento pré-luta. Os dois chegam em Arcane Boots perto (CM Tranquil 8,4min, Jakiro Arcane 11,7min) e em Glimmer Cape no mesmo intervalo (CM 21,1min, Jakiro 22,8min). O item de luxo do Jakiro (Aghanim's Scepter, item mais comprado no fim de jogo dele) chega tarde, sem prazo fixo nos dados.
- o que ele faz com você: Ice Path pode prender CM antes dela conseguir abrir Frostbite, e Macropyre aplica dano contínuo alto numa faixa longa que os 120 de vida dela não aguentam parada dentro.
- o que você faz com ele: Frostbite trava o Jakiro no meio do cast de Macropyre, cortando o canal antes dele render o dano todo; Crystal Nova troca dano de área igual, sem desvantagem de alcance.
- itens que viram: como nenhum dos dois tem blink prioritário, quem tem Force Staff pronto primeiro decide quem desengaja a troca malsucedida; nenhum item individual vira o confronto sozinho aqui.
- como jogar: evite lutar na linha reta que o Macropyre cobre; bait o Ice Path antes de se comprometer com o seu Frostbite, porque nenhum dos dois persegue bem fora da área já formada.
- fonte: pro_dados/crystal_maiden.json; pro_dados/jakiro.json

## Contra Lion (lion)
- placar: Crystal Maiden venceu 90 de 173 partidas de pro (52,0%), fonte: pro_dados/crystal_maiden.json.
- por que importa: suporte pos4 mais jogado contra ela em pro (173 jogos), mesma categoria funcional (control/disable int), mas Lion é muito mais agressivo desde cedo.
- janelas: o Blink do Lion aparece em 2.412 das 2.775 partidas de pro dele (87%), mediana 18,2min (pro_dados/lion.json), chegando bem antes do Blink de CM (23,1min). Isso significa que, na maior parte do jogo entre os 18 e os 23min, o Lion tem iniciativa de posicionamento que ela ainda não tem.
- o que ele faz com você: Hex desliga CM completamente (não ataca, não lança feitiço, não usa item) e não fura BKB; combinado com Earth Spike (stun em linha) e Finger of Death (600-850 de dano), é mais que o suficiente pra matar os 120 de vida dela num só combo.
- o que você faz com ele: Frostbite pune o baixo HP e a falta de fuga própria do Lion (sem blink depois do nível 6 dele não tem saída além de Force Staff), então se ele errar o Hex, o time punindo rápido costuma fechar o abate.
- itens que viram: o Aghanim's Shard dela (Crystal Clone) pode absorver o Hex ou o Earth Spike dele se o clone estiver visível no momento certo; BKB dela bloqueia o Hex inteiro (não fura), mas como ela normalmente não prioriza BKB cedo, a melhor defesa real é não se posicionar sozinha antes dos 18min.
- como jogar: trate o Lion como a ameaça de roam mais rápida do jogo (blink dele chega primeiro que o seu); mantenha visão de rotas de gank e não se isole antes dos 18-19min; depois que os dois têm blink, quem iniciar primeiro geralmente ganha a troca.
- fonte: pro_dados/crystal_maiden.json; pro_dados/lion.json

## Contra Skywrath Mage (skywrath_mage)
- placar: Crystal Maiden venceu 79 de 159 partidas de pro (49,7%), fonte: pro_dados/crystal_maiden.json.
- por que importa: terceiro suporte de dano mágico/controle mais jogado contra ela em pro (159 jogos), competindo pelo mesmo nicho de poke e disable à distância.
- janelas: Blink Dagger nem aparece entre os 30 itens mais comprados do Skywrath em pro (pro_dados/skywrath_mage.json), então nenhum dos dois tem mobilidade cedo. O item de amplificação dele (Kaya, 17,5min) chega perto do Aghanim's Shard dela (17,7min), então os dois sobem de poder juntos no meio do jogo.
- o que ele faz com você: Ancient Seal silencia CM, cortando Frostbite e Freezing Field por completo, e Mystic Flare (canalizado, até 1600 de dano no nível 3) mata os 120 de vida dela sozinho se conectar sem resposta.
- o que você faz com ele: nenhum dos dois tem mobilidade cedo, então quem crava o disable primeiro ganha a troca; Frostbite trava o Skywrath antes do Mystic Flare, e ele é tão frágil quanto ela, então o combo inverso também mata rápido.
- itens que viram: nenhuma das quatro habilidades dele fura BKB (bkbpierce não em todas, constants_abilities.json), então o BKB dela anula o combo inteiro; como ela normalmente não prioriza BKB, a resposta mais comum é ganhar a corrida de disable, não a de item.
- como jogar: nunca dê um ângulo limpo de silêncio pro Skywrath; se o Frostbite dela acertar primeiro, o time deve fechar o abate na hora, porque ele não tem sustain nem fuga própria antes do nível 6.
- fonte: pro_dados/crystal_maiden.json; pro_dados/skywrath_mage.json; constants_abilities.json

## Contra Pugna (pugna)
- placar: Crystal Maiden venceu 27 de 43 partidas de pro (62,8%), amostra moderada mas acima do corte de 30; fonte: pro_dados/crystal_maiden.json.
- por que importa: um dos melhores confrontos medidos pra ela em pro, e os dois disputam a mesma função (suporte duro de controle), decidindo a lane por quem trava primeiro.
- janelas: o Pugna raramente aparece com Blink Dagger entre os 30 itens mais comprados em pro (pro_dados/pugna.json), então na maior parte do jogo CM tem a vantagem de mobilidade com o Blink dela (23,1min). O Glimmer Cape aparece em 267 das 427 partidas de pro do Pugna (63%), mediana 21,2min (pro_dados/pugna.json), item quase idêntico ao core dela no mesmo intervalo (21,1min).
- o que ele faz com você: Decrepify trava CM (não ataca, não é atacada por ataque básico) e amplia o dano mágico que ela recebe em 20-50%; combinado com Life Drain, pode matá-la rápido se estiver isolada e sem resposta.
- o que você faz com ele: Frostbite não depende de ataque básico, então ainda funciona sob a lógica do kit dele; Crystal Nova em área ignora o gimmick de trava corpo a corpo do Pugna e pune a mobilidade quase nula dele.
- itens que viram: como o Pugna raramente prioriza Blink Dagger, o Aghanim's Shard dela (mobilidade aos 17,7min) é uma vantagem limpa por boa parte do jogo.
- como jogar: evite ficar isolada perto do Nether Ward dele; use sua mobilidade mais cedo pra pegar o Pugna fora de posição antes dos itens dele emparelharem.
- fonte: pro_dados/crystal_maiden.json; pro_dados/pugna.json

## Contra Necrophos (necrolyte)
- placar: Crystal Maiden venceu 51 de 82 partidas de pro (62,2%), fonte: pro_dados/crystal_maiden.json. Confirmado do outro lado: no confrontos de pro_dados/necrolyte.json, Crystal Maiden é o 5º pior matchup medido dele com mínimo de 20 jogos, 37,8% de vitória pra ele (31 de 82), numa faixa de 33,3% a 37,8% entre os 5 piores.
- por que importa: um dos melhores confrontos pra ela em pro, com confirmação cruzada nos dois lados do dado; apesar de nunca dividirem lane (ele é carry/offlane, ela é suporte duro), é o cross-role que mais pesa: ele precisa ficar vivo perto do time pra render a Heartstopper Aura, e ela trava justamente isso.
- janelas: o power spike dele é Radiance (13,7min) seguido do Aghanim's Shard (17,8min, pro_dados/necrolyte.json); a tankiness de verdade só vem com o Heart of Tarrasque, mediana 30,5min. O Aghanim's Shard dela (17,7min) e o Blink (23,1min) chegam bem antes desse pico de resistência dele.
- o que ele faz com você: Heartstopper Aura corrói % da vida máxima de quem fica perto, e isso ignora BKB (bkbpierce sim, constants_abilities.json); Reaper's Scythe executa quem está com pouca vida, mas o stun/dano dessa habilidade é bloqueado pelo BKB do próprio alvo (bkbpierce não, constants_abilities.json).
- o que você faz com ele: Frostbite trava o Necrophos antes dele conseguir render a Heartstopper Aura numa perseguição, e como ele não tem blink nem dash, Crystal Nova em área nega a fuga dele; se ela tiver BKB, a Reaper's Scythe dele simplesmente não funciona.
- itens que viram: o BKB dela bloqueia o Scythe por completo; sem BKB, o Necrophos fica alvo fácil assim que travado.
- como jogar: agrupe com o time e puna qualquer Necrophos pego sem BKB; se ele comprar BKB, seu Frostbite vira controle posicional pro resto do time fechar o abate.
- fonte: pro_dados/crystal_maiden.json; pro_dados/necrolyte.json; constants_abilities.json

## Contra Anti-Mage (antimage)
- placar: Crystal Maiden venceu 21 de 34 partidas de pro (61,8%, amostra moderada acima do corte de 30), fonte: pro_dados/crystal_maiden.json.
- por que importa: um dos melhores confrontos medidos pra ela com amostra válida, e é o caso clássico de "carry que não compartilha lane com suporte": Anti-Mage farma longe dela a partida inteira, mas se ela o pega fora de posição, ele morre fácil pros 120 de vida que ele próprio não tem resposta de disable contra.
- janelas: o power spike clássico do AM é a Battle Fury (14,1min, pro_dados/antimage.json) e depois o Manta (20,9min); o Blink 4/4 dele já está disponível desde o nível 8. O Aghanim's Shard de CM (17,7min) e o Blink dela (23,1min) caem bem na janela entre a Battle Fury dele e o Manta, quando ele ainda está farmando sozinho e sem resposta de disable.
- o que ele faz com você: nada diretamente cedo, lanes diferentes; mas depois do spike dele (Manta 20,9min, pro_dados/antimage.json), um blink-in seguido de Mana Break mata os 120 de vida de CM num combo só se ela estiver isolada.
- o que você faz com ele: Frostbite é exatamente o que o AM teme enquanto farma, ele não tem imunidade a disable antes do BKB; um Frostbite bem cronometrado (mais um gank do time) corta o farm dele antes da Battle Fury completar.
- itens que viram: o Manta dele (Basic Dispel) limpa a maioria dos roots comuns, incluindo o Frostbite dela, então depois dos 20,9min a trava deixa de ser garantida; o BKB dele bloqueia Frostbite completamente a partir de quando ele o compra.
- como jogar: gankeie o AM antes da Battle Fury completar (antes dos ~14min), quando ele ainda não tem item nenhum pra responder ao Frostbite; depois que ele tem Manta ou BKB, a trava sozinha não resolve, precisa vir com o time inteiro.
- fonte: pro_dados/crystal_maiden.json; pro_dados/antimage.json

## Contra Batrider (batrider)
- placar: Crystal Maiden venceu só 9 de 33 partidas de pro (27,3%, amostra moderada acima do corte de 30, um dos piores confrontos medidos pra ela), fonte: pro_dados/crystal_maiden.json.
- por que importa: pior confronto medido entre os 15 escolhidos; Batrider é iniciador puro, e o kit dele (Blink + Flaming Lasso, que atravessa BKB) é desenhado exatamente contra suporte de 120 de vida sem fuga própria.
- janelas: o Blink do Batrider aparece em 1.139 das 1.336 partidas de pro dele (85%), mediana 17,7min (pro_dados/batrider.json), tipicamente online bem antes do Blink dela (23,1min). Isso dá a ele a iniciativa de posicionamento na maior parte do jogo.
- o que ele faz com você: Blink fecha a distância e Flaming Lasso prende o alvo atravessando BKB (bkbpierce sim, constants_abilities.json); são 2,25s de lockdown no mínimo (3,25s com a ultimate no nível máximo, até 4s com o talento de nível 25, constants_abilities.json), tempo mais que suficiente pra matar 120 de vida mesmo com BKB ativo do lado dela.
- o que você faz com ele: Frostbite ainda trava o Batrider antes do Lasso dele (a habilidade dela não fura BKB do lado dele), então se CM reagir primeiro consegue negar a iniciação por completo.
- itens que viram: como o Lasso dele fura o BKB dela, o BKB não resolve esse confronto; a resposta real é Glimmer Cape (invisibilidade, ele precisa te ver pra blinkar) e nunca ficar isolada fora de visão do time.
- como jogar: jogue sempre perto do time ou com TP pronto contra um Batrider vivo; se ele errar o Blink ou o Lasso, puna com Frostbite e o burst do time antes da recarga dele resetar.
- fonte: pro_dados/crystal_maiden.json; pro_dados/batrider.json; constants_abilities.json

## Contra Nyx Assassin (nyx_assassin)
- placar: Crystal Maiden venceu 11 de 40 partidas de pro (27,5%, segundo pior confronto medido entre os 15), fonte: pro_dados/crystal_maiden.json.
- por que importa: mesma categoria funcional (suporte duro/roamer de controle), mas o kit do Nyx é desenhado pra caçar justamente heróis frágeis e parados como ela.
- janelas: o Blink do Nyx aparece em 346 das 919 partidas de pro dele (38%), mediana 23,4min (pro_dados/nyx_assassin.json), bem perto do dela (23,1min); mas a Vendetta (invisibilidade desde o nível 6) já dá presença de mapa e surpresa muito antes de qualquer corrida de item.
- o que ele faz com você: Vendetta esconde a aproximação, o primeiro ataque que quebra a invisibilidade soma 300-500 de dano bônus, Impale (stun em linha, 750 de alcance) trava CM antes dela reagir, e Mind Flare soma mais 15% em cima do dano já causado nela nos últimos 15s.
- o que você faz com ele: Frostbite ainda funciona normalmente (Nyx não tem imunidade a feitiço própria, só Spiked Carapace, que reflete uma vez e depois acaba); Crystal Nova em área pune ele se errar o pick-off e precisar recuar.
- itens que viram: Spiked Carapace dele reflete 140% do primeiro dano recebido e atordoa quem acertou, então não crave Frostbite nele logo depois dele usar essa habilidade; o Aghanim's Shard dele estica a invisibilidade da Vendetta, deixando o roam ainda mais imprevisível.
- como jogar: plante sentry em rotas de gank previsíveis e não ande sozinha fora da visão do time antes do nível 6 dele; se ele errar o combo, o time precisa punir na hora, porque ele não tem segunda chance sem o Aeon Disk (item tardio).
- fonte: pro_dados/crystal_maiden.json; pro_dados/nyx_assassin.json

## Contra Razor (razor)
- placar: Crystal Maiden venceu 13 de 46 partidas de pro (28,3%, terceiro pior confronto medido entre os 15), fonte: pro_dados/crystal_maiden.json.
- por que importa: Razor é um right-clicker de longo alcance que farma rápido e cujo kit (Static Link, rouba dano do alvo) ignora completamente o controle mágico que ela depende pra vencer.
- janelas: Razor fecha Yasha aos 17,8min (pro_dados/razor.json), bem antes do Blink dela (23,1min); o Black King Bar dele chega depois, mediana 24,7min, perto do Blink dela e de qualquer BKB que ela compre (item situacional, sem prioridade fixa). Isso significa que a vantagem de mobilidade do Razor aparece cedo (Yasha), mas a janela de imunidade a disable só fecha perto dos 24-25min, não antes.
- o que ele faz com você: Static Link rouba dano de ataque dela continuamente (ela não depende de dano físico, mas perde o pouco que tem), e Storm Surge dispara um raio sozinho quando ele é alvo de qualquer feitiço, inclusive o Frostbite dela, causando dano mágico e reduzindo a velocidade de movimento de quem for atingido (constants_abilities.json: razor_storm_surge).
- o que você faz com ele: Frostbite ainda trava ele fisicamente antes do BKB dele (mesmo ativando o Storm Surge), e Crystal Nova reduz a velocidade de ataque, que é literalmente o motor de dano do Razor.
- itens que viram: Razor compra BKB com mediana de 24,7min (pro_dados/razor.json), reação direta ao disable de alvo único que mais o ameaça; a partir daí, Frostbite não trava mais (bkbpierce não do lado dela, constants_abilities.json), então a janela real do combo dela fecha por volta dos 24-25min.
- como jogar: pressione a lane ou a rota dele antes do BKB fechar (mediana 24,7min); depois disso, trate o Frostbite como controle posicional e deixe o carry de dano do time decidir a troca.
- fonte: pro_dados/crystal_maiden.json; pro_dados/razor.json; constants_abilities.json
