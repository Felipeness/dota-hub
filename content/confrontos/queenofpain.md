---
id: confrontos-queenofpain
heroi: Queen of Pain
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/queenofpain.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/mars.json
- dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- dota-hub-conteudo-novo/pro_dados/invoker.json
- dota-hub-conteudo-novo/pro_dados/phantom_lancer.json
- dota-hub-conteudo-novo/pro_dados/naga_siren.json
- dota-hub-conteudo-novo/pro_dados/medusa.json
- dota-hub-conteudo-novo/pro_dados/keeper_of_the_light.json
- dota-hub-conteudo-novo/pro_dados/morphling.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer (consultas complementares de item/lane_role/ability_uses, partidas pro 7.40-7.41)
---

## Como escolhi esses 14

Queen of Pain é pos 2 quase pura no 7.41: ela jogou mid (lane_role 2) em 88% das partidas pro do período, 1969 de 2228 (partidas pro 7.40-7.41, OpenDota explorer). Os 6 primeiros da lista são os oponentes com mais jogos de pro contra ela no período 7.40+7.41 (OpenDota, matchups do hero_id 39). Os 3 seguintes são os rivais de mid mais jogados contra ela entre os pos 2 puros. Os 3 depois são os 30+ jogos com melhor taxa de vitória dela. Os 2 últimos são os 30+ jogos com pior taxa de vitória dela entre adversários relevantes pro jogador BR (um pos 2 rival direto e um carry sem lane em comum). Todo placar abaixo é taxa de vitória da Queen of Pain, não do oponente.

## Contra Shadow Fiend (nevermore)

- placar: 237 vitórias em 491 jogos (48%), pro, patches 7.40 e 7.41. Fonte: pro_dados/queenofpain.json.
- por que importa: é o oponente com mais jogos de pro contra ela de toda a base (491). Nos dados de pro do período ele joga safelane em 57% das partidas e mid nas outras 43% (2264 e 1715 de 3996, partidas pro 7.40-7.41, OpenDota explorer), o que explica o volume alto de jogos cruzados mesmo sem repetir a mesma lane sempre.
- janelas: até 10 min ela está na frente: Power Treads dela sai aos 8,3 min (mediana) contra Mask of Madness dele só aos 10,2 min (pro_dados/nevermore.json). Dos 10 aos 20 min ele nivela: ele chega aos 10 min com mediana de 78 last hits contra 56 dela (lh10, pro_dados/nevermore.json e pro_dados/queenofpain.json) enquanto ela fecha Kaya aos 13,9 (pro_dados/queenofpain.json). Dos 20 aos 28 min é a corrida de BKB: ele mediana 25,2 min (pro_dados/nevermore.json), ela 29,1 min (partidas pro 7.40-7.41, OpenDota explorer). Depois dos 28, Daedalus dele (greater_crit, mediana 28,3 min, pro_dados/nevermore.json) decide troca prolongada se ninguém morreu antes.
- o que ele faz com você: Shadowraze (85-280 de dano, +3 por alma acumulada, recarga de só 9s) reseta seu posicionamento perto dele sem gastar muito mana. Requiem of Souls (1000 de raio, 1,67s de atraso visível antes de soltar, até 20 almas convertidas) é fear em área: se ele estocou almas matando creep e herói, o fear mais a queda de -5 a -15% de resistência mágica deixam o resto do combo dele ainda mais forte. Fonte: constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, nevermore_necromastery).
- o que você faz com ele: Sonic Wave atravessa o BKB dele (bkbpierce: Yes, confirmado em constants_abilities.json), então o BKB que ele compra pra sobreviver não bloqueia essa parte do seu combo. Seu Shard de Blink solta um estrondo de 125 de dano em 300 de raio e silencia por 1,75s nos dois pontos do blink (início e fim); como o cast dele tem atraso visível (Requiem 1,67s, Shadowraze 0,55s), dá pra silenciar antes de ele soltar. Fonte: aghs_desc (queenofpain shard); constants_abilities.json.
- itens que viram: Aghanim's Shard dela (mediana 32,9 min, pro_dados) pra silenciar o combo dele; BKB dela (29,1 min, partidas pro 7.40-7.41, OpenDota explorer) pra ela poder iniciar sem ser travada primeiro; Hurricane Pike dele (mediana 23,0 min, pro_dados/nevermore.json) é a fuga que ele não tem de outro jeito, então empurrar ela antes disso compensa.
- como jogar: antes dos 10 min, puna a lane dele, Treads sai primeiro pra você. Entre 15 e 25, evite trocar Raze por Raze parado, force ele a gastar mana cedo e recue se ele já tiver Dragon Lance. Depois dos 25, tente matar ele antes do Daedalus: Sonic Wave sempre funciona mesmo com BKB dele, e o Shard silencia o Requiem se ele errar o posicionamento.
- fonte: pro_dados/queenofpain.json; pro_dados/nevermore.json; constants_abilities.json; aghs_desc; OpenDota explorer (partidas pro 7.40-7.41).

## Contra Rubick (rubick)

- placar: 195 vitórias em 381 jogos (51%), pro, patches 7.40 e 7.41. Fonte: pro_dados/queenofpain.json.
- por que importa: segundo oponente com mais jogos de pro contra ela (381). Como suporte 4/5, ele não disputa a lane dela, mas passa a partida inteira tentando roubar a última magia que ela lançou, o que muda como ela joga até as próprias habilidades.
- janelas: o power spike dele não é de item, é de oportunidade: Spell Steal recarrega em 16/10/4s por nível e ele lança a própria ultimate em média 14,8 vezes por partida (partidas pro 7.40-7.41, OpenDota explorer), então a cada troca ele tem chance de copiar o seu nuke mais recente. Arcane Boots dele sai aos 10,3 min (pro_dados/rubick.json), bem antes de qualquer item ofensivo dela.
- o que ele faz com você: Telekinesis (0,9 a 1,5s de stun ao cair, até 625 de alcance de cast) te pega fora de posição antes de você conseguir dar Blink. Se ele rouba Sonic Wave logo depois que você lança, ele devolve o mesmo dano que atravessa BKB (Spell Steal em si também tem bkbpierce: Yes, então ele pode te roubar a magia mesmo com você de BKB ligado). Com Scepter dele, a magia roubada vira a versão com Scepter, então se ele pegar seu Shadow Strike depois que você tiver o seu próprio Scepter, ele ganha a versão em área de 375 que solta Scream of Pain ao expirar. Fonte: constants_abilities.json (rubick_spell_steal, rubick_telekinesis); aghs_desc (rubick scepter).
- o que você faz com ele: ele é suporte magro, qualquer combo seu de Shadow Strike mais Scream já mata se ele estiver sozinho. O truque é não dar pra ele a magia certa pra roubar: se ele ainda não usou Spell Steal na troca, jogue Shadow Strike ou Scream primeiro pra ele roubar algo menos decisivo e guardar o Sonic Wave pro fechamento.
- itens que viram: nenhum item dele muda o duelo, é posicionamento e ordem de cast. Do seu lado, Linken's Sphere (situacional, 8% dos jogos dela, 168 de 2225, partidas pro 7.40-7.41, OpenDota explorer) bloqueia a Telekinesis dele se ela virar o maior problema.
- como jogar: olhe o indicador de Spell Steal dele antes de abrir combo. Se ele já gastou a magia roubada recentemente, é a brecha pra lançar Sonic Wave sem medo de ver ela voltar.
- fonte: pro_dados/queenofpain.json; pro_dados/rubick.json; constants_abilities.json; aghs_desc; OpenDota explorer (partidas pro 7.40-7.41).

## Contra Jakiro (jakiro)

- placar: 183 vitórias em 377 jogos (49%), pro, patches 7.40 e 7.41. Fonte: pro_dados/queenofpain.json.
- por que importa: terceiro oponente com mais jogos de pro contra ela (377). Suporte de área que disputa o espaço onde ela quer farmar e iniciar.
- janelas: Jakiro é suporte de zoneamento, não de item de dano: Ice Path sai cedo (stun de até 2s, 1100 de alcance) e Macropyre (ultimate, 10s de duração, 1400 de alcance de cast) fica disponível assim que ele sobe nível 6, muito antes de qualquer power spike dela em item. O primeiro confronto de verdade é por volta dos 14-16 min, quando ela já tem Kaya (13,9 min, pro_dados) pra sustentar o combo e ele já tem Arcane Boots (11,7 min, pro_dados/jakiro.json) pra spammar Dual Breath.
- o que ele faz com você: Macropyre cria uma faixa de 500 de largura que causa 100-200 de dano por segundo por 10s; parada dentro, ela perde a troca rápido. Ice Path estuna em área se ela ficar parada perto de onde o gelo se forma. Nenhuma das duas atravessa magic immunity (bkbpierce: No nas duas, constants_abilities.json), então o BKB dela anula o combo dele por completo.
- o que você faz com ele: Sonic Wave sozinho (325 de dano no nível 1) já mata Jakiro se ele estiver sem vida cheia, porque ele é suporte com pouca vida base. Seu Shadow Strike também aplica dano ao longo de 16s, bom pra zerar a regen dele enquanto ele tenta segurar a wave.
- itens que viram: BKB dela (29,1 min, partidas pro 7.40-7.41, OpenDota explorer) é o item que mais muda esse confronto, já que apaga o Macropyre e o Ice Path por completo; do lado dele, Force Staff ou Glimmer Cape (não estão no top itens dele, mas são padrão de suporte contra burst) seriam a resposta, mas o dado local não confirma a compra.
- como jogar: evite parar dentro de Macropyre mesmo pra last hit. Se ele gastar Ice Path errado, é sua brecha pra blinkar nele e fechar com Scream mais Sonic Wave antes que ele reposicione.
- fonte: pro_dados/queenofpain.json; pro_dados/jakiro.json; constants_abilities.json; OpenDota explorer (partidas pro 7.40-7.41).

## Contra Snapfire (snapfire)

- placar: 166 vitórias em 347 jogos (48%), pro, patches 7.40 e 7.41. Fonte: pro_dados/queenofpain.json.
- por que importa: quarto oponente com mais jogos de pro contra ela (347). Suporte com alcance global que consegue punir ela até fora da lane.
- janelas: o power spike dela chega cedo pro padrão de suporte: Aghanim's Shard mediana 16,9 min (pro_dados/snapfire.json), bem antes do normal pra um item desses. A partir daí, cada Firesnap Cookie lançada solta também um Mortimer Kiss parcial no pouso.
- o que ele faz com você: Mortimer Kisses (ultimate, 3000 de alcance de cast, 8 glóbulos de 180-360 de dano cada, viagem de 0,8 a 2s) alcança a lane dela de qualquer ponto do mapa; se ela ficar parada mais de um segundo nessa faixa, o dano por impacto mais o DoT de queima somam rápido. Firesnap Cookie (stun de 1 a 2,2s, 650 de alcance) é o gancho que trava ela antes do Blink. Nenhuma das duas atravessa BKB (constants_abilities.json).
- o que você faz com ele: os glóbulos do Mortimer Kisses viajam devagar (0,8-2s até o impacto) e dão visão prévia de 500, então dá pra sair do caminho se ela não estiver parada de costas. Snapfire também é suporte magro: Shadow Strike mais Scream já encosta nela.
- itens que viram: o Aghanim's Shard dela (16,9 min) é o item que muda o confronto, porque transforma o save padrão em dano extra. Do seu lado, BKB (29,1 min, partidas pro 7.40-7.41, OpenDota explorer) tira o stun do Firesnap Cookie da equação.
- como jogar: não fique parada olhando pra longe quando ouvir o som de carregamento do Mortimer Kisses. Respeite o alcance de 650 do Firesnap Cookie perto de torres aliadas dela.
- fonte: pro_dados/queenofpain.json; pro_dados/snapfire.json; constants_abilities.json; aghs_desc; OpenDota explorer (partidas pro 7.40-7.41).

## Contra Tusk (tusk)

- placar: 151 vitórias em 331 jogos (46%), pro, patches 7.40 e 7.41. Fonte: pro_dados/queenofpain.json.
- por que importa: quinto oponente com mais jogos de pro contra ela (331). É o suporte que mais ganka mid no patch, então aparece contra ela mesmo sem dividir lane.
- janelas: Tusk compra Blink Dagger próprio em mediana 19,0 min (pro_dados/tusk.json), quase no mesmo tempo em que ela fecha Kaya mais Kaya and Sange. A partir daí os dois têm blink, e o gank dele depende de pegar ela sem o dela disponível (recarga de 12 a 6s conforme o nível, constants_abilities.json).
- o que ele faz com você: Snowball (1150 de alcance, 3s de carregamento visível antes de lançar, pode juntar até 4 aliados) é o início do gank; se ela não perceber a animação de carregamento, é stun mais dano de combo inteiro. Walrus Punch (crítico de até 300%, atira a vítima pro ar por 1s) atravessa BKB (bkbpierce: Yes, confirmado em constants_abilities.json), então BKB nela não impede esse stun específico.
- o que você faz com ele: o Snowball tem 3s de carregamento visível; sair da rota de colisão invalida o gank inteiro. Tusk também tem pouca vida própria pro tamanho dele (herói de força mas sem sustain no kit), então Shadow Strike mais Scream já ameaça matar se ele errar o combo.
- itens que viram: Blink dele (19,0 min) é o item que viabiliza o gank a distância; do lado dela, wards de sentry ajudam a ver o Snowball chegando antes da animação de 3s terminar.
- como jogar: ao ouvir ou ver o Snowball formar, mude de direção, ele não consegue virar rápido. Se ele acertar o combo mesmo assim, não confie no BKB pra escapar do Walrus Punch, use Blink antes do stun, não depois.
- fonte: pro_dados/queenofpain.json; pro_dados/tusk.json; constants_abilities.json.

## Contra Mars (mars)

- placar: 165 vitórias em 319 jogos (52%), pro, patches 7.40 e 7.41. Fonte: pro_dados/queenofpain.json.
- por que importa: sexto oponente com mais jogos de pro contra ela (319) e o com melhor taxa de vitória dela entre os seis primeiros. É o offlane tanque físico do patch, e o kit dela de dano mágico é justamente o que ele menos consegue bloquear.
- janelas: Mars fecha Blink Dagger aos 15,2 min e Aghanim's Shard aos 21,5 min (pro_dados/mars.json). Ela chega no Kaya aos 13,9 e no Scepter por volta dos 23,5 (pro_dados/queenofpain.json). As janelas quase coincidem, então o confronto se decide mais por quem erra a iniciação do que por diferença de item.
- o que ele faz com você: Spear of Mars (até 1200 de alcance no nível 4, empala contra parede ou árvore por 1,3 a 2,2s de stun) te pega de muito longe se você ficar sem espaço pra trás. Arena of Blood (5,5s, 550 de raio) ataca com lanças quem fica perto da borda de dentro, então entrar e sair repetido machuca.
- o que você faz com ele: Bulwark dele reduz 40-70% do dano físico de frente, 20-35% dos lados, mas só dano físico (constants_abilities.json, mars_bulwark). Seu kit inteiro é mágico: Shadow Strike, Scream e Sonic Wave passam direto, sem redução nenhuma do escudo dele. É por isso que ela tem a melhor taxa de vitória dos seis primeiros contra um herói feito pra tanque físico.
- itens que viram: nenhum item físico dele (ele é majoritariamente itens de iniciação e sustain) muda essa conta, porque o problema é o tipo de dano, não o valor. Do lado dela, nada específico além do combo básico.
- como jogar: não lute dentro da Arena of Blood sem necessidade, a borda machuca sozinha. Fora disso, jogue o combo normal, o Bulwark dele não existe pra você.
- fonte: pro_dados/queenofpain.json; pro_dados/mars.json; constants_abilities.json.

## Contra Ember Spirit (ember_spirit)

- placar: 138 vitórias em 306 jogos (45%), pro, patches 7.40 e 7.41. Fonte: pro_dados/queenofpain.json.
- por que importa: é o pos 2 puro com mais jogos de pro contra ela (306), o maior volume de confronto de mid contra mid da lista.
- janelas: as botas saem quase juntas (dela 8,3 min, dele 9,1 min em Phase Boots, pro_dados). A diferença aparece depois: ele fecha urna aos 7,3 pra sustain de lane, e se o time dele draftar em cima dela, Mage Slayer sai aos 15,8 min (partidas pro 7.40-7.41, OpenDota explorer), reduzindo 40% da amplificação de feitiço dela por 3s a cada ataque dele.
- o que ele faz com você: Sleight of Fist (até 170 de dano bônus em herói, atravessa BKB, recarga de 7 a 13s por carga) ameaça ela mesmo depois dela comprar BKB. Flame Guard absorve até 70% do dano mágico recebido num valor fixo que sobe com o nível; um combo isolado dela pode não furar o escudo se ele ligar antes.
- o que você faz com ele: Sonic Wave atravessa o BKB dele do mesmo jeito que o Sleight de Fist atravessa o dela, então nenhum dos dois BKBs resolve sozinho. Shadow Strike aplica dano ao longo de 16s em vez de instantâneo, o que ajuda a estourar o Flame Guard aos poucos em vez de de uma vez.
- itens que viram: Mage Slayer dele (15,8 min, comprado em 1086 das 2699 partidas pro do herói no período, 40%, OpenDota explorer) é o item feito especificamente contra nukers como ela. Se o time dele comprar isso, o combo dela rende bem menos depois desse ponto.
- como jogar: force a troca antes dele fechar Mage Slayer sempre que possível. Depois que ele tiver o item, prefira abrir com Shadow Strike (dano ao longo do tempo) pra gastar o Flame Guard antes do Scream e do Sonic Wave.
- fonte: pro_dados/queenofpain.json; pro_dados/ember_spirit.json; constants_abilities.json; OpenDota explorer (partidas pro 7.40-7.41).

## Contra Storm Spirit (storm_spirit)

- placar: 109 vitórias em 255 jogos (43%), pro, patches 7.40 e 7.41. Fonte: pro_dados/queenofpain.json.
- por que importa: segundo pos 2 puro com mais jogos de pro contra ela (255) e a pior taxa de vitória dela entre os rivais diretos de mid.
- janelas: os dois saem de lane parecido (botas dela 8,3, dele 8,5 em Power Treads, pro_dados). A diferença é velocidade de farm: ele tem Ball Lightning desde o nível 1 de ultimate pra cruzar o mapa gastando mana em vez de tempo, e fecha Kaya aos 13,7 (quase junto com ela, 13,9), mas o dele já é usado desde muito antes pra reposicionar.
- o que ele faz com você: Ball Lightning deixa ele atravessar o trajeto dos seus projéteis (Shadow Strike e Sonic Wave viajam a 900 de velocidade) sem ser pego no meio do caminho, porque ele vira eletricidade em movimento. Electric Vortex (300 de alcance, puxa 180-300 de distância) te traz pra perto dele pra iniciar a troca nos termos dele.
- o que você faz com ele: seu Blink tem a mesma lógica de entra e sai dele, então o confronto vira quem erra a leitura primeiro. Overload dele (passivo, dano bônus no próximo ataque após lançar magia) só ativa se ele gastar mana com você perto, então forçar ele a reagir rápido sem deixar ele premeditar o combo ajuda.
- itens que viram: nenhum item muda o padrão aqui, é 100% sobre quem inicia com vantagem de posição. Aghanim's Shard dela (silêncio de 1,75s no Blink) pode travar ele no meio de uma rotação se o timing bater.
- como jogar: não force a troca se ele tiver mana cheia pra Ball Lightning de fuga. Prefira pegar ele logo depois de ele gastar mana em farm ou rotação, quando a reserva pra escapar está mais baixa.
- fonte: pro_dados/queenofpain.json; pro_dados/storm_spirit.json; constants_abilities.json.

## Contra Invoker (invoker)

- placar: 109 vitórias em 246 jogos (44%), pro, patches 7.40 e 7.41. Fonte: pro_dados/queenofpain.json.
- por que importa: terceiro pos 2 puro com mais jogos de pro contra ela (246). Combo de controle de longo alcance contra o burst de blink dela.
- janelas: ele costuma puxar a frente em item de nível: Aghanim's Scepter dele sai aos 20,2 min (pro_dados/invoker.json) contra o dela por volta de 23,5 (pro_dados/queenofpain.json), quase 3 min de diferença.
- o que ele faz com você: Sun Strike (até 675 de dano no Exort máximo, sem limite de alcance de mapa, atravessa BKB, 1,7s de atraso antes de cair) te mata de qualquer lugar do mapa se ele tiver visão, mesmo com seu BKB ativo. EMP (675 de raio, 2,9s de atraso) drena seu mana pool inteiro, o que te impede de montar o combo de Shadow Strike mais Scream mais Sonic Wave (custo total de 470 a 800 de mana conforme o nível).
- o que você faz com ele: seu Sonic Wave também atravessa o BKB dele (os dois ultimates ignoram imunidade mágica), então nenhum dos dois BKBs protege contra o ultimate do outro. Blinkar nele antes de ele terminar de invocar o combo (ele precisa trocar orbes antes de cada feitiço) é sua melhor janela.
- itens que viram: Aghanim's Scepter dele sai mais cedo que o dela (20,2 contra 23,5), então nos primeiros minutos depois dos 20 ele costuma estar um passo à frente em poder de combo.
- como jogar: fique fora de linha de visão quando ele estiver parado sem gastar mana, pode ser setup de Sun Strike. Pressione ele entre as trocas de orbe, é quando ele está mais vulnerável.
- fonte: pro_dados/queenofpain.json; pro_dados/invoker.json; constants_abilities.json.

## Contra Phantom Lancer (phantom_lancer)

- placar: 41 vitórias em 61 jogos (67%), pro, patches 7.40 e 7.41. Fonte: pro_dados/queenofpain.json.
- por que importa: maior taxa de vitória dela entre os confrontos com 30+ jogos. Não tem lane em comum com ela (ele é pos 1, ela pos 2), mas é o exemplo clássico de duas hc que se cruzam fora da lane: ela decide o jogo antes dele conseguir se multiplicar.
- janelas: até os 16 min ele é um corpo só: Yasha dele sai aos 11,7, Manta Style aos 16,5 (pro_dados/phantom_lancer.json). Antes disso ela já tem Treads (8,3) e Kaya (13,9), então o 1x1 nessa janela é dela. Depois do Manta ele passa a farmar em duas rotas ao mesmo tempo e o jogo vira sobre ela conseguir fechar antes disso virar bola de neve.
- o que ele faz com você: Juxtapose (passivo, até 40-50% de chance por ataque, até 10 ilusões) e Doppelwalk (desaparece e reaparece com mais 2 clones) fazem ele virar enxame de corpos difícil de identificar; sem nenhuma forma de revelar o corpo real no kit dela, ela não consegue mirar com certeza se ele já tiver vários clones ativos.
- o que você faz com ele: seu Scream of Pain é área ao redor dela, então acerta todos os clones igual, sem custo extra pra limpar os falsos; o corpo real também toma o dano cheio do combo, então mesmo sem saber qual é o real, o Sonic Wave bate em todos que estiverem na frente dela.
- itens que viram: Manta Style dele (16,5 min) é o divisor de águas: antes disso é 1x1 justo pra ela, depois ele farma rápido demais pra ela segurar sozinha.
- como jogar: pressione a lane e a jungle dele antes dos 16 min com tudo que tiver. Depois do Manta, evite 1x1 isolado e jogue pra abater ele em grupo, onde o Scream em área compensa não saber qual corpo é o real.
- fonte: pro_dados/queenofpain.json; pro_dados/phantom_lancer.json; constants_abilities.json.

## Contra Naga Siren (naga_siren)

- placar: 23 vitórias em 37 jogos (62%), pro, patches 7.40 e 7.41. Amostra pequena (37 jogos). Fonte: pro_dados/queenofpain.json.
- por que importa: segunda maior taxa de vitória dela com 30+ jogos. Outro exemplo de duas hc sem lane (ela pos 1 farm, ela pos 2 mid) onde o que importa é quem farma mais rápido e quem trava quem primeiro.
- janelas: Naga só começa a aparecer como ameaça depois do Manta (14,6 min, pro_dados/naga_siren.json), puxado por Yasha aos 10,8. Até lá ela já passou pela própria Kaya (13,9) e está pronta pra pressionar antes do spike dela.
- o que ele faz com você: Ensnare (500-575 de alcance, prende e impede movimento ou blink) é a única habilidade da lista que diz explicitamente "impede blink" na descrição (constants_abilities.json), ou seja, anula sua principal ferramenta de entra e sai se acertar. A versão base não pega quem está com magic immune (can_target_magic_immune: 0), mas com Aghanim's Scepter dela isso muda: o Ensnare passa a atingir até quem está de BKB, aplicando Break. Song of the Siren (900-1400 de raio, stasis de 7s mais regen) pode salvar ela ou aliado do seu combo inteiro.
- o que você faz com ele: antes do Manta dela, ela é squishy e sem iniciação própria contra blink, então ela perde praticamente todo 1x1 isolado nessa fase.
- itens que viram: Ensnare dela sem Scepter não pega você de BKB, então BKB ligado antes de engajar neutraliza a ameaça principal até ela montar o Scepter. Manta Style dela (14,6 min) é o item que te avisa pra não tentar mais o 1x1 fácil.
- como jogar: ataque antes do Manta dela com tudo. Se ela já tiver Scepter próprio, não confie no BKB pra blincar livre perto dela, cheque se o Ensnare já foi gasto antes de entrar.
- fonte: pro_dados/queenofpain.json; pro_dados/naga_siren.json; constants_abilities.json; aghs_desc.

## Contra Medusa (medusa)

- placar: 52 vitórias em 84 jogos (62%), pro, patches 7.40 e 7.41. Fonte: pro_dados/queenofpain.json.
- por que importa: terceira maior taxa de vitória dela com amostra boa (84 jogos). Clássico "duas hc sem lane": ela precisa matar Medusa antes do Split Shot escalar, exatamente o tipo de confronto que o jogador quer entender mesmo sem dividir lane.
- janelas: Medusa precisa de muito farm pra assustar: Manta sai aos 15,0 min, Crystalys aos 29,8 e Daedalus só aos 33,3 (lesser_crit e greater_crit, pro_dados/medusa.json). Ela, em comparação, já tem o combo inteiro pronto desde os 14 min (Kaya) e segue evoluindo com Scepter por volta dos 23,5.
- o que ele faz com você: Stone Gaze (ultimate, petrifica quem olha pra ela por 2s acumulados, atravessa BKB) estuna mesmo com você de BKB se ficar de frente pra ela numa troca parada. Mystic Snake (90-240 de dano por salto, rouba mana) não atravessa BKB (bkbpierce: No, confirmado em constants_abilities.json), então seu BKB anula essa parte do combo dela.
- o que você faz com ele: cuidado com o Shard dela: Cold Blooded devolve qualquer magia de alvo único lançada nela como um Mystic Snake de volta no lançador, petrificando por 1s (aghs_desc). Shadow Strike é alvo único, então se ela tiver o Shard, lançar nela devolve o efeito pra você. Sonic Wave (ponto no chão, não alvo único) e Scream (área ao redor de você, não alvo único) não são afetados por esse reflexo.
- itens que viram: o Shard dela (Cold Blooded) muda a ordem de cast do seu combo; antes do farm dela decolar (pré-Manta, 15 min), ela não tem HP nem mana pra sobreviver ao combo completo de qualquer forma.
- como jogar: antes dos 15 min, pressione sem dó, ela não tem defesa própria ainda. Depois que ela tiver o Shard, abra com Sonic Wave ou Scream em vez de Shadow Strike, e deixe Stone Gaze dela fora de visão direta se possível.
- fonte: pro_dados/queenofpain.json; pro_dados/medusa.json; constants_abilities.json; aghs_desc.

## Contra Keeper of the Light (keeper_of_the_light)

- placar: 38 vitórias em 111 jogos (34%), pro, patches 7.40 e 7.41. Fonte: pro_dados/queenofpain.json.
- por que importa: pior taxa de vitória dela entre os adversários com amostra boa (111 jogos) que ainda cruzam lane ou zona com ela. É o pos 2/4 de poke que mais atrapalha o farm dela especificamente.
- janelas: KotL não tem power spike de item, é zoneamento constante desde o nível 1: Illuminate já machuca em qualquer ponto depois dos primeiros minutos, enquanto ela só fica confortável pra avançar depois do Kaya (13,9 min). Até lá, ela está jogando no território dele.
- o que ele faz com você: Illuminate (canalizado até 3s, até 500 de dano no nível 4, 1550 de alcance, 400 de largura) castiga qualquer momento parado dela na lane; Spirit Form deixa ele lançar de qualquer lugar do mapa com alcance bônus, então mesmo fora da lane ele ainda te alcança.
- o que você faz com ele: Illuminate começa a canalizar na hora (cast point 0, constants_abilities.json), mas o canal de carga leva até 3s pra render o dano máximo, o que dá uma janela real pra fechar distância com Blink e punir antes dele soltar o dano cheio. Ele não tem nenhuma forma própria de fuga rápida uma vez que você chega perto.
- itens que viram: nenhum item muda esse confronto, o problema é zoneamento de habilidade, não equipamento. Ward de sentry ajuda a reduzir a vantagem de visão dele.
- como jogar: não fique parada no range de 1550 dele sem necessidade. Se perceber ele canalizando Illuminate contra outra coisa ou isolado, é a hora de fechar com Blink, ele não aguenta o combo de perto.
- fonte: pro_dados/queenofpain.json; pro_dados/keeper_of_the_light.json; constants_abilities.json.

## Contra Morphling (morphling)

- placar: 40 vitórias em 99 jogos (40%), pro, patches 7.40 e 7.41. Fonte: pro_dados/queenofpain.json.
- por que importa: o confronto que motivou essa página inteira. Duas hc sem lane em comum (ele pos 1, ela pos 2), mas power spike e habilidade de caçar um ao outro importam muito mais do que lane.
- janelas: antes dos 15 min ela está na frente: ela já tem Kaya (13,9 min) e ele ainda está sem Manta (18,4 min, pro_dados/morphling.json), com Diadem só aos 15,7. Dos 15 aos 18, ele fecha Diadem e sobe GPM rápido (614 de mediana contra 572 dela, pro_dados). Depois dos 18, com Manta fechado, ele passa a ganhar a maioria das trocas prolongadas.
- o que ele faz com você: Waveform (dano em linha, invulnerável durante o dash) deixa ele atravessar o seu Shadow Strike e Sonic Wave sem ser pego no meio do caminho (os dois viajam a 900 de velocidade). Adaptive Strike (0,5 a 2,6s de stun, duração e empurrão escalam com a força dele, dano escala com a agilidade) trava você antes de dar tempo de blinkar pra fora.
- o que você faz com ele: ele é famoso por evasão alta via atributo de agilidade, mas evasão só bloqueia ataque físico; seu kit inteiro é dano mágico (Shadow Strike, Scream, Sonic Wave), então a defesa que ele monta contra a maioria dos carries físicos não serve pra nada contra você. É por isso que ela ainda vence boa parte desses 99 jogos apesar dele ser um hard carry de fato.
- itens que viram: Manta Style dele (18,4 min) é o divisor: antes disso ele é frágil e sem sustain contra magia, depois ele escala rápido demais pra ela segurar sozinha em jogo longo.
- como jogar: ataque com tudo antes dos 18 min, ele não tem resposta de verdade pro seu burst mágico nessa fase. Depois do Manta dele, evite 1x1 prolongado sem ajuda do time, ele te supera em sustain e farm a partir daí.
- fonte: pro_dados/queenofpain.json; pro_dados/morphling.json; constants_abilities.json.
