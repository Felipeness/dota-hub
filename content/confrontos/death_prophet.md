---
id: confrontos-death_prophet
heroi: Death Prophet
patch: 7.41
fontes:
- pro_dados/death_prophet.json (OpenDota explorer, partidas de liga 7.40-7.41, matchups de /heroes/43/matchups)
- pro_dados/<oponente>.json (mesma fonte, resumo e timing de itens dos oponentes)
- constants_abilities.json e constants_hero_abilities.json (OpenDota, numeros de habilidade do patch)
- api.opendota.com/api/constants/aghs_desc (Aghanim's Scepter e Shard da Death Prophet)
- app/public/data/herois_catalogo.json (posicao principal de cada heroi)
- dotacoach.gg/en/heroes/counters/death-prophet (notas de gameplay 7.41f)
---

Death Prophet é mid (posição 2, às vezes 3) com um kit todo sobre pressão de área e sustain: Carrion Swarm pra empurrar wave, Silence pra travar combo, Spirit Siphon pra drenar vida e Exorcism (ulti) pra lutar e pushar sozinha por 40 segundos. Em 572 partidas de liga do patch 7.40/7.41 ela fecha com mediana de 531 GPM, 672 XPM, 54 last hits aos 10 min e nível 19 final (fonte: pro_dados/death_prophet.json). O build típico é bota aos 3.7 min, Magic Wand aos 4.2, Staff of Wizardry aos 14.1 rumo a Ultimate Scepter aos 18.3, Black King Bar aos 26.4 e Shiva's Guard aos 27.7 (mesma fonte).

## Contra Rubick (rubick)
- placar: Death Prophet vence 42,1% dos 121 jogos de pro contra Rubick, o oponente com mais partidas registradas contra ela (fonte: pro_dados/death_prophet.json).
- por que importa: não é lane direta (Rubick é suporte 4/5, DP é mid), mas é o confronto mais frequente em pro e o mais perigoso em teamfight: Spell Steal pode virar o seu próprio Exorcism ou Silence contra o seu time.
- janelas: até 20 min Rubick não tem power spike de item, só o nível de Telekinesis e Spell Steal. Ele fica realmente perigoso com Blink (mediana 21.6 min) e Aether Lens (22.9 min), quando consegue iniciar de longe e copiar o seu último feitiço com segurança. Seu Scepter sai antes disso, aos 18.3 min, mediana de 221 jogos.
- o que ele faz com você: Telekinesis (raio 300-375, alcance de cast 550-625) te isola jogando pro meio do time dele; mas a ameaça real é Spell Steal copiando sua Silence ou seu Exorcism no momento errado.
- o que você faz com ele: Silence (raio 450, alcance 900, até 5s) trava Telekinesis e Spell Steal antes que ele consiga reagir; Spirit Siphon drena rápido porque Rubick tem HP baixo de suporte.
- itens que viram: seu Aghanim's Scepter (fonte: aghs_desc, "sempre que um inimigo é afetado por um feitiço seu ou você ataca, um espírito sai pra bater nele") pune Rubick cada vez que ele erra posicionamento, já que ele não tem como fugir fácil do proc.
- como jogar: não lance Silence ou Exorcism perto dele sem necessidade, só pra evitar dar steal de graça; priorize silenciá-lo primeiro em qualquer teamfight grande antes de ele copiar algo seu.
- fonte: pro_dados/death_prophet.json; aghs_desc; constants_abilities.json.

## Contra Shadow Fiend (nevermore)
- placar: Death Prophet vence 48,1% dos 106 jogos de pro contra Shadow Fiend, praticamente parelho (fonte: pro_dados/death_prophet.json).
- por que importa: é o rival clássico de mid lane, os dois brigam pela mesma faixa de XP e farm desde o minuto 0.
- janelas: até 10 min os dois trocam poke (Shadowraze dele vs Carrion Swarm dela) sem depender de item. Entre 12 e 19 min Shadow Fiend sobe Blade of Alacrity (12.7 min) e Boots of Elves (6.9 min, viram Power Treads), acumula almas de Necromastery e fica mais perigoso a cada kill de creep ou herói. Depois dos 22-25 min o jogo decide pelo Black King Bar: o dele sai em mediana aos 25.2 min, o dela aos 26.4, quase 1 minuto depois, então normalmente é ele quem consegue engajar primeiro com Requiem sem medo da Silence.
- o que ele faz com você: Shadowraze zoneia a lane de graça e escala com as almas; Requiem of Souls estoura dano alto se ele tiver acumulado almas e te pegar perto, mas o cast tem uma brecha curta em que Silence ou um stun ainda interrompem.
- o que você faz com ele: Silence (alcance 900, raio 450) corta Shadowraze e Requiem antes do cast se você reagir rápido; Carrion Swarm acerta bem porque ele tem armadura baixa.
- itens que viram: o BKB de cada um decide quem engaja primeiro (vantagem dele por ~1 min de mediana); depois dos 26 min, com os dois de BKB, a vantagem vira pra você porque Exorcism cura e sustenta trocas longas que ele não aguenta sem lifesteal.
- como jogar: puna o farm dele até os 12 min com Carrion Swarm, não entre em troca direta quando ele já tiver Blade of Alacrity e almas acumuladas; depois dos 26 min, com os BKBs prontos, é a sua janela pra forçar fight.
- fonte: pro_dados/death_prophet.json; pro_dados/nevermore.json; constants_abilities.json.

## Contra Ogre Magi (ogre_magi)
- placar: Death Prophet vence 55,4% dos 83 jogos de pro contra Ogre Magi, boa vantagem com amostra robusta (fonte: pro_dados/death_prophet.json).
- por que importa: é o segundo suporte mais comum contra ela em pro, depois de Rubick, mesmo sem lane em comum, porque o combo de stun dele é a principal ameaça de pick em teamfight.
- janelas: Ogre não tem spike de farm, ele sobe de poder com o nível de Fireblast e Multicast (chance de castar 2-4x o mesmo feitiço). Os itens dele são todos defensivos de suporte: Glimmer Cape (22.5 min) e Aghanim's Shard (26.1 min). Isso é mais tarde que o Scepter dela (18.3 min), então ela chega na fase decisiva de jogo já mais forte.
- o que ele faz com você: Fireblast (alcance 525) stuna e, com Multicast, pode travar duas vezes seguidas; Ignite aplica dano contínuo e lentidão em dois alvos.
- o que você faz com ele: Silence impede Fireblast e Ignite por até 5s se castada antes; Spirit Siphon drena rápido porque ele não tem dano físico relevante pra revidar.
- itens que viram: o Shard dele (26.1 min) dá um Fireblast extra de longo alcance que ela precisa respeitar; mas o Scepter dela já está pronto há 8 minutos quando isso acontece.
- como jogar: pressione quando perceber ele sem mana (ele depende 100% de feitiço); respeite o alcance do Fireblast perto de creep grande; silencie antes de qualquer engajamento de time importante.
- fonte: pro_dados/death_prophet.json; pro_dados/ogre_magi.json; constants_abilities.json.

## Contra Lion (lion)
- placar: Death Prophet vence 41,3% dos 75 jogos de pro contra Lion, desvantagem moderada (fonte: pro_dados/death_prophet.json).
- por que importa: é o 3º suporte com mais jogos contra ela em pro (depois de Rubick e Ogre Magi), e o burst de Finger of Death é uma das poucas coisas no jogo que ameaça matá-la sozinha fora de teamfight.
- janelas: Lion é fraco sem itens até o nível 6, quando Finger of Death já sai em 600 de dano. O salto real vem do Blink dele (mediana 18.2 min), que dá alcance de surpresa pro combo Impale + Finger of Death, e do Aghanim's Shard (25.8 min), que faz Finger of Death ricochetear pra outro alvo.
- o que ele faz com você: Impale (alcance 650, até 300 de dano) prende em linha, seguido de Finger of Death (600 a 850 de dano no nível 3) pode levar boa parte da sua vida se você estiver sem BKB ou Shiva's.
- o que você faz com ele: Silence nele antes do combo anula tanto Impale quanto Finger of Death; Spirit Siphon drena rápido porque Lion é muito frágil.
- itens que viram: BKB dela (26.4 min) bloqueia o stun do Impale, deixando só o dano puro do Finger passar; depois disso o combo dele perde metade do valor porque ele precisa acertar o Finger sem conseguir travar você antes.
- como jogar: evite ficar parada no alcance de 650 do Impale sem visão dele depois do nível 6 dele; depois do Blink dele, jogue com margem extra de vida; priorize o seu próprio BKB se perceber ele comprando Blink.
- fonte: pro_dados/death_prophet.json; pro_dados/lion.json; constants_abilities.json.

## Contra Jakiro (jakiro)
- placar: Death Prophet vence 47,1% dos 68 jogos de pro contra Jakiro, praticamente parelho (fonte: pro_dados/death_prophet.json).
- por que importa: quarto suporte mais comum contra ela em pro; Macropyre é a única área de dano contínuo do jogo que rivaliza com o próprio Exorcism dela em teamfight parado.
- janelas: Jakiro também não tem spike de farm, só ganha poder com o nível de Macropyre (disponível no 6). Os itens dele são defensivos (Glimmer Cape 22.8 min, Force Staff 26.2 min), então ele raramente sai na frente dela em poder de item.
- o que ele faz com você: Ice Path (alcance 1100) estuna em linha, seguido de Macropyre, que queima qualquer um parado na área; se ela ficar parada fazendo push com Exorcism, é fácil de punir.
- o que você faz com ele: Silence trava o combo Ice Path + Macropyre antes do cast; Carrion Swarm empurra bem porque ele não tem como fugir da linha reta.
- itens que viram: nenhum item do Jakiro muda o confronto de forma relevante, é um duelo decidido por posicionamento e reação de Silence.
- como jogar: nunca pare dentro da área do Macropyre mesmo pra terminar um push; silencie antes de teamfights grandes onde ele possa castar os dois feitiços seguidos.
- fonte: pro_dados/death_prophet.json; pro_dados/jakiro.json; constants_abilities.json.

## Contra Snapfire (snapfire)
- placar: Death Prophet vence só 34,3% dos 67 jogos de pro contra Snapfire, uma das piores desvantagens da lista (fonte: pro_dados/death_prophet.json).
- por que importa: quinto suporte mais comum contra ela em pro e a pior desvantagem entre eles, porque o alcance de poke de Snapfire anula a Silence dela.
- janelas: o item mais comprado por Snapfire em pro é o próprio Aghanim's Shard, em mediana 16.9 min, muito cedo pra um item de suporte. Isso significa que aos 17 minutos Snapfire já está no pico de utilidade dela, enquanto o Scepter da Death Prophet só sai 1.4 min depois e não resolve o problema de alcance.
- o que ela faz com você: Mortimer's Kisses tem 3000 de alcance de cast, então ela pode te punir de longe sem nunca entrar no seu raio de resposta; Firesnap Cookie (alcance 650) + Scatterblast (alcance 800, cone) combinam stun com slow pesado se ela te pegar perto.
- o que você faz com ela: Silence (alcance 900) é bem mais curto que o alcance de 3000 do Mortimer's Kisses, então você precisa fechar distância em grupo antes de conseguir usá-la; Spirit Siphon (alcance 500) é arriscado porque entra no cone do Scatterblast.
- itens que viram: o Shard dela, saindo quase 1 minuto antes do seu Scepter, é o que decide essa janela a favor dela.
- como jogar: não fique parada no alcance do Mortimer's Kisses; force o engajamento em grupo com fumaça pra fechar distância de uma vez, nunca sozinha a pé.
- fonte: pro_dados/death_prophet.json; pro_dados/snapfire.json; constants_abilities.json.

## Contra Underlord (abyssal_underlord)
- placar: Death Prophet vence 67,6% dos 37 jogos de pro contra Underlord, a maior vantagem da lista com amostra válida (fonte: pro_dados/death_prophet.json).
- por que importa: é a maior vantagem percentual dela com 30+ jogos, mesmo sendo um offlane sem lane direta com ela.
- janelas: Underlord é devagar pra consolidar: Soul Ring (7.2 min), Pipe of Insight (17.5 min), Aghanim's Scepter (23.9 min), quase 5 minutos e meio depois do Scepter dela (18.3 min).
- o que ele faz com você: Pit of Malice (raio 400, alcance 675) prende em área, Firestorm (raio 425) aplica dano contínuo em quem fica parado.
- o que você faz com ele: Silence trava Pit of Malice e Firestorm antes do cast; Carrion Swarm atravessa bem a área dele.
- itens que viram: o Pipe dele (17.5 min) reduz seu dano mágico em fight de time, mas o Scepter dela já está pronto desde os 18.3 min, então ela ainda sai na frente na corrida de itens.
- como jogar: pressione antes dos 20 min, antes do Pipe e do Scepter dele consolidarem; evite parar dentro do Pit of Malice mesmo pra terminar last hit.
- fonte: pro_dados/death_prophet.json; pro_dados/abyssal_underlord.json; constants_abilities.json.

## Contra Viper (viper)
- placar: Death Prophet vence 61,5% dos 39 jogos de pro contra Viper, vantagem forte com amostra válida (fonte: pro_dados/death_prophet.json).
- por que importa: é o carry/offlane mais jogado em pro com maior vantagem pra ela (depois de Underlord), mesmo não brigando pela mesma lane sempre.
- janelas: Viper é um herói sem mobilidade nativa de escape (Nose Dive é o único dash, curto). Ele sobe Blade of Alacrity (17.0 min) e Ultimate Scepter bem cedo pra um carry (18.2 min), mas sem blink ele não consegue reagir à pressão dela antes disso.
- o que ele faz com você: Viper Strike (alcance 750) aplica slow pesado de movimento e ataque por 6s e remove efeitos passivos seus; Nethertoxin (raio 400) cresce de dano quanto mais tempo você fica dentro.
- o que você faz com ele: Silence trava Viper Strike antes do cast; Carrion Swarm e Spirit Siphon punem ele ficando parado, já que ele não tem como fugir rápido.
- itens que viram: o Scepter dele (18.2 min) melhora Corrosive Skin pra remover debuffs ao ser atacado, mas sai quase no mesmo minuto que o dela, então não muda a corrida.
- como jogar: pressione a lane dele cedo, antes do Scepter; use Carrion Swarm pra zonear creep já que ele não tem resposta de mobilidade.
- fonte: pro_dados/death_prophet.json; pro_dados/viper.json; constants_abilities.json.

## Contra Slardar (slardar)
- placar: Death Prophet vence 61,2% dos 49 jogos de pro contra Slardar, vantagem forte com boa amostra (fonte: pro_dados/death_prophet.json).
- por que importa: é um offlane agressivo com blink nativo, o tipo de herói que deveria pegá-la de surpresa cedo, mas os números de pro mostram ela levando a melhor na maioria das partidas.
- janelas: Slardar builda rápido pra um offlane: Blink (mediana 13.3 min, muito cedo), Aghanim's Shard (17.2 min). Essa é a janela perigosa dele. Depois disso ele desacelera até o BKB (25.1 min) e o Scepter (31.7 min), enquanto ela já consolidou Scepter e começa a sair na frente.
- o que ele faz com você: Slithereen Crush (stun em área, cast curto alcance) seguido de Bash físico (após 3 ataques) pode iniciar e travar você perto da fonte dele; Amplify Damage reduz sua armadura.
- o que você faz com ele: Silence trava o Crush antes da iniciação; Spirit Siphon drena vida à distância seguindo o movimento dele.
- itens que viram: o Blink cedo dele (13.3 min) é a maior ameaça da partida toda; depois dos 15 min, com Scepter e tankiness dela chegando, a vantagem vira.
- como jogar: cuidado redobrado com iniciação de blink antes dos 15 min; depois disso jogue a favor, forçando trocas longas que a sustain dela vence.
- fonte: pro_dados/death_prophet.json; pro_dados/slardar.json; constants_abilities.json.

## Contra Sniper (sniper)
- placar: Death Prophet vence só 24,4% dos 45 jogos de pro contra Sniper, a pior desvantagem da lista (fonte: pro_dados/death_prophet.json).
- por que importa: é a maior desvantagem percentual dela com 30+ jogos; Assassinate ameaça queimar boa parte da vida dela de fora de qualquer alcance de resposta.
- janelas: Sniper farma muito rápido (72 last hits aos 10 min, atrás só de Shadow Fiend na lista) e sobe Maelstrom (12.5 min) e Mjollnir (19.0 min) cedo, chegando no nível 6 de Assassinate já com dano de ataque alto. A partir dos 20-23 min ele soma Hurricane Pike (23.4 min), que cria ainda mais distância se ela tentar se aproximar.
- o que ele faz com você: Assassinate (alcance 3000, 300 a 500 de dano bônus além do ataque dele) pode acertar de fora de qualquer visão sua; Shrapnel (raio 400-475, alcance 1800) zoneia e revela.
- o que você faz com ele: Silence (alcance 900) não chega nem perto do alcance de 3000 do Assassinate, então você precisa fechar distância antes de qualquer resposta; uma vez perto, Carrion Swarm e Spirit Siphon derrubam ele rápido porque Sniper tem pouco HP.
- itens que viram: Hurricane Pike dele (23.4 min) é o item que mais atrapalha, dando separação instantânea assim que você chega perto.
- como jogar: não fique parada e visível em linha de visão longa; feche distância por flanco ou fumaça, nunca em linha reta; depois de chegar perto, priorize matá-lo rápido antes que ele recupere distância.
- fonte: pro_dados/death_prophet.json; pro_dados/sniper.json; constants_abilities.json.

## Contra Clockwerk (rattletrap)
- placar: Death Prophet vence só 27,3% dos 33 jogos de pro contra Clockwerk, segunda pior desvantagem da lista, amostra no limite dos 30 jogos (fonte: pro_dados/death_prophet.json).
- por que importa: segunda maior desvantagem percentual com amostra válida; Hookshot ameaça pegá-la de qualquer parte do mapa sem aviso.
- janelas: Clockwerk também não tem spike de farm clássico, ele é um ganker puro. Os itens dele (Force Staff 26.8 min, Blink 24.8 min, Shard 30.0 min) chegam tarde, então a janela de perigo real dele é durante toda a fase de rotação, não um minuto específico.
- o que ele faz com você: Hookshot (alcance crescente até 3000) te puxa de longe ou ele se joga em cima de você; Power Cogs (raio de prisão) te isola do time pra ele e aliados burstarem.
- o que você faz com ele: Silence nele trava tanto Hookshot quanto Power Cogs antes do cast; Carrion Swarm e Spirit Siphon derrubam ele rápido uma vez que ele está preso no próprio gancho.
- itens que viram: nenhum item dele muda isso cedo, é um confronto de visão e posicionamento mais do que de itens.
- como jogar: fique perto de creep ou aliados pra não virar alvo fácil dos Cogs; respeite o alcance de 3000 do Hookshot, principalmente sem visão de onde ele está.
- fonte: pro_dados/death_prophet.json; pro_dados/rattletrap.json; constants_abilities.json.

## Contra Spirit Breaker (spirit_breaker)
- placar: Death Prophet vence 31,2% dos 48 jogos de pro contra Spirit Breaker, desvantagem forte com boa amostra (fonte: pro_dados/death_prophet.json).
- por que importa: terceira maior desvantagem percentual, com a maior amostra entre os heróis desfavoráveis (48 jogos); Charge of Darkness ameaça pegá-la de qualquer lugar do mapa, igual Clockwerk.
- janelas: Spirit Breaker builda Phase Boots cedo (9.4 min) pra perseguir já na lane, depois Silver Edge (invis_sword, mediana 22.9 min), que dá invisibilidade e quebra passiva pra pegar ela desprevenida. É nesse intervalo, 20-25 min, que ele fica mais perigoso em rotação.
- o que ele faz com você: Charge of Darkness te acerta de qualquer parte do mapa; Greater Bash (25-40% da velocidade de movimento como dano) te atordoa repetidamente travando você pro time dele fechar.
- o que você faz com ele: Silence trava Charge e Nether Strike antes dele ativar o gancho de perseguição; uma vez que ele chega, Carrion Swarm e Spirit Siphon respondem rápido porque ele tem HP e armadura baixos.
- itens que viram: Silver Edge dele (22.9 min) é o item decisivo, deixando ele invisível pra escolher o momento do Charge sem aviso.
- como jogar: tenha Force Staff ou TP sempre prontos, nunca fique sozinha e visível no mapa depois dos 20 min; se ele pegar você, priorize matá-lo rápido, ele não aguenta troca direta.
- fonte: pro_dados/death_prophet.json; pro_dados/spirit_breaker.json; constants_abilities.json.

## Contra Dragon Knight (dragon_knight)
- placar: Death Prophet vence 55,0% dos 60 jogos de pro contra Dragon Knight, boa vantagem com amostra robusta (fonte: pro_dados/death_prophet.json).
- por que importa: é o herói de mid/pos1 com mais jogos contra ela em pro depois de Shadow Fiend, e às vezes disputa a mesma faixa de lane.
- janelas: Dragon Knight sobe Power Treads cedo (6.0 min) e tem sustain de lane forte (Dragon Blood regen), mas não tem burst real até o Blink (16.2 min) e o nível 6 de Elder Dragon Form. O BKB dele sai aos 23.3 min, antes do dela (26.4 min), mas sem o dano mágico pra aproveitar essa janela contra uma mid.
- o que ele faz com você: Breathe Fire (alcance 1000, reduz dano de ataque) e Dragon Tail (alcance 150, curto) incomodam na lane; Elder Dragon Form dá ataque à distância com efeito adicional conforme o nível.
- o que você faz com ele: Silence trava Dragon Tail e Breathe Fire antes da iniciação; Carrion Swarm empurra bem contra um herói de HP alto mas sem escape ou dano mágico pra responder.
- itens que viram: o Blink dele (16.2 min) dá mobilidade de iniciação, mas o Scepter dela já está pronto há 2 minutos quando isso acontece.
- como jogar: puna a lane dele cedo com poke de Carrion Swarm, ele não tem resposta de dano mágico; depois do nível 6 dele, respeite o alcance novo do Elder Dragon Form.
- fonte: pro_dados/death_prophet.json; pro_dados/dragon_knight.json; constants_abilities.json.

## Contra Storm Spirit (storm_spirit)
- placar: Death Prophet vence só 38,2% dos 55 jogos de pro contra Storm Spirit, desvantagem clara (fonte: pro_dados/death_prophet.json).
- por que importa: é o terceiro rival de mid mais comum da lista, depois de Shadow Fiend e Dragon Knight, e o único em que a lógica do site de counters (dotacoach.gg/en/heroes/counters/death-prophet) diz que ela deveria ganhar ("Silence breaks his spell combos, and her mobility helps her avoid his initiation") mas os dados de pro mostram o oposto: ele ganha a maioria das partidas.
- janelas: Storm Spirit corre pra itens de mana e dano mágico: Robe (11.1 min), Staff of Wizardry (13.0 min) e Kaya (13.7 min), bem mais cedo que o Scepter dela (18.3 min). É nessa janela, 13-20 min, que ele consegue spamar Ball Lightning e Static Remnant sem ficar sem mana, enquanto ela ainda está montando o Scepter. O BKB dos dois sai quase junto (ele aos 26.1 min, ela aos 26.4 min).
- o que ele faz com você: Static Remnant seguido de ataque bate forte sem gastar skillshot; Ball Lightning te alcança de qualquer distância, mesmo com o bônus passivo de velocidade da Witchcraft; Electric Vortex te puxa pra perto dele pra fechar o combo.
- o que você faz com ele: Silence (alcance 900, até 5s) é a única forma de travar ele antes do combo, mas precisa ser usada antes do Ball Lightning, não depois, porque Silence não impede o movimento, só o próximo cast.
- itens que viram: Kaya dele (13.7 min) é o item que decide essa janela, dando mana suficiente pra combo repetido antes dela ter qualquer resposta pronta.
- como jogar: guarde a Silence especificamente pro combo dele, não gaste em poke de lane; evite lutar isolada antes dos 20 min; depois dos 26 min, com os dois de BKB, a sustain do Exorcism favorece trocas longas.
- fonte: pro_dados/death_prophet.json; pro_dados/storm_spirit.json; dotacoach.gg/en/heroes/counters/death-prophet; constants_abilities.json.

## Contra Queen of Pain (queenofpain)
- placar: Death Prophet vence 46,3% dos 54 jogos de pro contra Queen of Pain, praticamente parelho (fonte: pro_dados/death_prophet.json).
- por que importa: é o quarto rival de mid mais comum da lista e o site de counters confirma a lógica do confronto ("Silence counters her mobility, and Aghanim's Shard fear can stop her from moving", dotacoach.gg/en/heroes/counters/death-prophet).
- janelas: Queen of Pain também corre pra Robe (9.6 min) e Kaya (13.9 min), parecido com Storm Spirit, mas o Staff of Wizardry dela só sai aos 16.2 min. O spike real dela é o nível 6 com Sonic Wave (625 de dano no nível 3) combinado ao blink nativo. O Scepter dela só sai aos 23.5 min, mais de 5 minutos depois do Scepter da Death Prophet, então na corrida de Aghanim's a Death Prophet sai na frente.
- o que a QoP faz com você: Blink + Sonic Wave permite poke e engajamento de surpresa; Shadow Strike aplica dano contínuo e slow de movimento por 16s.
- o que você faz com ela: Silence trava o cast depois do blink, cortando o combo antes do Sonic Wave sair; seu Aghanim's Shard (charges extras de Spirit Siphon + fear após 3s de siphon contínuo, fonte aghs_desc) prende ela perto o suficiente pra continuar drenando mesmo depois do blink dela.
- itens que viram: seu Scepter (18.3 min) chega mais de 5 minutos antes do dela (23.5 min), dando uma janela de poder sólida pra forçar trocas antes dela upar o Aghanim's.
- como jogar: use a Silence de forma preventiva assim que perceber ela se aproximando pra blinkar; aproveite a janela entre o seu Scepter e o dela pra forçar fights; depois do Shard dela (27.5 min) ela solta um estrondo com dano e Silence nos dois pontos do Blink, na saída e na chegada (fonte: aghs_desc), então não force trade justo depois de ver ela blinkar perto de você.
- fonte: pro_dados/death_prophet.json; pro_dados/queenofpain.json; aghs_desc; dotacoach.gg/en/heroes/counters/death-prophet; constants_abilities.json.
