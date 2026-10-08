---
id: confrontos-techies
heroi: Techies
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/techies.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/windrunner.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lich.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/chaos_knight.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/viper.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/crystal_maiden.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/axe.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/monkey_king.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/phoenix.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
---

## Como essa lista foi montada

Techies joga como suporte 4/5 em partidas pro: lh10 de apenas 9 e nível final mediano de 17 (pro_dados/techies.json, perfil de farm baixo típico de suporte), então os confrontos de "mesma posição" aqui são contra outros suportes de visão/controle de área, não contra carries de lane. Mesmo assim a lista inclui carries que nunca dividem rota com ele (Chaos Knight, Viper, Axe, Monkey King, Shadow Fiend), porque o que decide esses confrontos não é lane, é quem consegue punir o outro primeiro: Techies minando a rota de farm deles, ou eles caçando o suporte squishy antes da mina virar relevante. Critérios usados: (1) os 6 oponentes com mais jogos pro contra ele; (2) os suportes pos 4/5 mais comuns em pro além desses 6; (3) as 3 maiores vantagens e as 3 maiores desvantagens do Techies com 30+ jogos de amostra. "Placar" sempre no sentido de vitórias do Techies sobre o total de jogos daquele confronto em partidas profissionais (fonte: OpenDota `/heroes/{id}/matchups`, patches 7.40 e 7.41, consolidado em `pro_dados/techies.json`).

## Contra Rubick (rubick)

- placar: Techies vence 115 de 260 (44,2%), oponente mais comum da lista.
- por que importa: oponente mais frequente contra Techies no pro play 7.40/7.41 (260 jogos), mesma função de suporte 4/5, pick de draft clássico contra Techies pela mobilidade de mapa e burst a distância.
- janelas: até 10-12 min os dois seguem o mesmo ritmo de suporte (Arcane Boots: Techies 12:48, Rubick 10:18). Dos 17 aos 21 min fecham o pacote de visão quase junto (sentry/observer/dispenser do Techies entre 18:54 e 21:06, do Rubick entre 17:06 e 19:00), sem vantagem de visão de nenhum dos dois lados. A partir dos 21-27 min o Rubick puxa na frente: Blink Dagger aos 21:36 libera o primeiro all-in seguro, e Aghanim's Shard (27:00) com Ultimate Scepter (27:24) chegam quase juntos: o Shard deixa ele usar Telekinesis nele mesmo ou num aliado pra escapar, e o Scepter faz o Spell Steal guardar 2 feitiços roubados ao mesmo tempo. Techies não tem spike de item equivalente nessa janela, o pico dele é posicional (mina plantada com antecedência), não de item.
- o que ele faz com você: Fade Bolt (até 325 de dano mágico no nível 4, raio 440) e Telekinesis (stun de até 1,5s, alcance até 625) matam o Techies de longe antes dele plantar qualquer mina relevante; Spell Steal (atravessa imunidade a magia) rouba o Sticky Bomb se ele castar perto do Rubick.
- o que você faz com ele: Proximity Mines (sem cooldown, dano até 750 no nível 3) punem a rotação solo dele pra ward ou deward; Reactive Tazer desarma e dá dispel básico no aliado que o Rubick tenta queimar com Fade Bolt; Blast Off (stun 0,8-1,4s, até 500 de dano) mata ele se avançar sozinho, já que não tem fuga própria rápida.
- itens que viram: Aether Lens estende Sticky Bomb (1000 pra 1225 de alcance) e Reactive Tazer (600 pra 825) pra fora do alcance de resposta do Rubick (Fade Bolt+Telekinesis somam até 625); Force Staff empurra um aliado puxado pelo combo dele pra fora, ou empurra o Rubick isolado pra cima de mina já plantada.
- como jogar: minar as rotas que o Rubick costuma andar sozinho de ward/deward antes dos 20 min, não ficar parado no alcance de 625 do combo dele, guardar Reactive Tazer pro aliado que ele focar e usar Force Staff assim que ele iniciar sozinho.
- fonte: pro_dados/techies.json; pro_dados/rubick.json; constants_abilities.json (techies_sticky_bomb, techies_reactive_tazer, techies_suicide, rubick_fade_bolt, rubick_telekinesis, rubick_spell_steal)

## Contra Hoodwink (hoodwink)

- placar: Techies vence 95 de 208 (45,7%).
- por que importa: 2º oponente mais comum em pro (208 jogos), mesma função 4/5, disputa direta de bosque e visão, já que os dois dependem de árvore e terreno pra jogar.
- janelas: ritmo de item quase idêntico até os 20 min (boots: Techies 5:42, Hoodwink 5:48; Arcane Boots: 12:48 contra 12:12). A diferença é de nível de habilidade: Scurry dá mobilidade em árvore desde o nível 1, então ela já ronda e checa minefield com segurança bem antes do Techies conseguir reagir. O power spike real dela é o Aghanim's Shard (23:48), que dá o Hunter's Boomerang, um bumerangue de alcance longo que ela joga e recebe de volta; no mesmo recorte o Techies só fecha Aether Lens aos 22:06, puramente utilitário, sem ganho de dano.
- o que ele faz com você: Bushwhack (stun de até 2,1s perto de árvore, dano total até 360) e Sharpshooter (até 1350 de dano num tiro de 3000 de alcance) matam o Techies à distância antes de qualquer mina relevante; Scurry deixa ela atravessar árvore com segurança maior que a maioria dos heróis, reduzindo o valor de uma mina isolada.
- o que você faz com ele: Proximity Mines plantadas no meio do bosque punem o roam dela, que depende de atravessar árvore pra escapar; Reactive Tazer desarma ela no meio de um Sharpshooter canalizado por perto.
- itens que viram: Aether Lens aumenta o alcance do Sticky Bomb pra interromper a carga do Sharpshooter de fora do alcance de retaliação dela; Force Staff tira um aliado da linha reta do tiro.
- como jogar: variar o padrão de mina no bosque pra não ficar previsível pro Scurry dela, guardar Reactive Tazer pra interromper o combo dela num aliado isolado, e não ficar parado no raio de Bushwhack perto de árvore.
- fonte: pro_dados/techies.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, hoodwink_scurry)

## Contra Shadow Fiend (nevermore)

- placar: Techies vence 72 de 158 (45,6%).
- por que importa: 3º oponente mais comum em pro (158 jogos), mesmo sem lane em comum na prática (SF é carry de farm solo de mid, Techies é suporte 4/5 de outra rota); os dois se cruzam no resto do mapa e o burst dele é o jeito mais comum de abrir o Techies de longe.
- janelas: até os 6-7 min o SF já fechou Power Treads (5:54) e tem lh10 de 78, quase nove vezes mais last hit que o Techies (lh10=9). Entre 10 e 14 min soma Mask of Madness (10:12), Yasha (13:18) e Dragon Lance (14:00), virando ameaça de kill isolado antes do Techies terminar Arcane Boots (12:48). O primeiro pico de luta dele é por volta dos 18-20 min, com Staff of Wizardry pronta pro ulti (18:54) e BKB logo depois (25:12). O Techies não tem resposta de item nesse intervalo, só posição: a janela dele é forçar troca em cima de mina antes do SF consolidar essa diferença de farm.
- o que ele faz com você: Shadowraze (até 280 de dano por raze, cooldown de só 3s entre as três direções) explode o Techies de longe sem precisar chegar perto; Requiem of Souls (raio 1000, fear) mata e amedronta tudo ao redor se ele estiver perto de um grupo parado.
- o que você faz com ele: Proximity Mines punem o farm solo dele numa rota isolada; Reactive Tazer desarma o auto-attack reforçado do Feast of Souls; Blast Off entrega dano em área suficiente pra matar um SF sem BKB.
- itens que viram: Aether Lens deixa plantar Sticky Bomb fora do alcance de resposta do Raze (só 200 de alcance); Force Staff reposiciona um aliado pra fora do raio da Requiem.
- como jogar: nunca ficar parado perto de árvore no alcance de raze, usar mina pra fechar a rota de farm isolada dele e guardar Blast Off pra quando ele não tiver BKB.
- fonte: pro_dados/techies.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem)

## Contra Snapfire (snapfire)

- placar: Techies vence 74 de 147 (50,3%).
- por que importa: 4º oponente mais comum (147 jogos), mesma função 4/5 (ela também joga pos 2/3 com menos frequência), ambos fazem zoneamento de área e controle de visão.
- janelas: ritmo quase idêntico até Arcane Boots (Techies 12:48, Snapfire 10:36). O primeiro power spike dela é bem cedo: Aghanim's Shard mediana 16:54, um dos itens mais baratos e fortes do pool dela, que turbina o Firesnap Cookie (cura o alvo e dispara um Mortimer Kiss extra junto), dando o mesmo tipo de controle de área que o Techies tem com mina. O Techies só chega no pico de visão completo (sentry+observer+dispenser) perto dos 19-21 min, mesma hora que ela fecha Blink Dagger (20:42).
- o que ele faz com você: Scatterblast (cone, até 280 de dano) e Firesnap Cookie (stun) abrem o combo de longe; Mortimer Kisses (8 globs, até 360 de dano por glob em área) limpa posicionamento em grupo e também detona mina sem querer.
- o que você faz com ele: Proximity Mines punem o posicionamento dela, que também gosta de ficar no meio do grupo pra lançar Scatterblast; Blast Off entrega dano de área parecido com o dela, então é corrida de quem fecha o combo primeiro.
- itens que viram: Aether Lens estende o Sticky Bomb pra fora do alcance de 800 do Scatterblast; Force Staff tira um aliado do cone antes do impacto.
- como jogar: evitar agrupar dentro do alcance de 800 do Scatterblast, minar o ponto onde ela costuma plantar o Firesnap Cookie pra abrir, e guardar Reactive Tazer pro alvo do combo dela.
- fonte: pro_dados/techies.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_mortimer_kisses)

## Contra Lion (lion)

- placar: Techies vence 73 de 139 (52,5%).
- por que importa: 5º oponente mais comum (139 jogos), mesma função 4/5, ambos suportes de pick-off com disable forte de alvo único.
- janelas: ritmo de boots quase igual (Techies 5:42, Lion 5:00). O pico do Lion é cedo e de nível: Hex já desabilita no nível 2 e Finger of Death destrava no 6, igual ao Blast Off do Techies. O item que muda o jogo pra ele é o Blink Dagger (18:12), que libera o combo Hex+ulti de perto; o Techies fecha a visão completa quase junto (19-21 min), então essa janela fica equilibrada. Dos 25 min em diante os dois só reforçam utilidade (Lion: Aghanim's Shard e Glimmer Cape, ambos 25:48; Techies: Aether Lens 22:06 e Force Staff 25:24).
- o que ele faz com você: Hex (silence+desarme+120 de velocidade por até 3,2s) trava o Techies pra morrer; Finger of Death (até 850 de dano no nível 3) mata ele num golpe só se não estiver com vida alta.
- o que você faz com ele: Reactive Tazer desarma quem ataca o aliado protegido, mas o dispel dele é básico e não remove o Hex, que só cai com dispel forte; Proximity Mines punem o blink solo dele pra iniciar; Blast Off entrega o mesmo tipo de burst de alvo único que ele faz, só que em área.
- itens que viram: Aether Lens deixa plantar mina e Sticky Bomb fora do alcance de blink dele; Force Staff dá um pulo de distância que pode tirar o Techies do alcance de Hex (575-650) antes do cast completar.
- como jogar: nunca ficar parado sozinho no alcance de blink dele, guardar Reactive Tazer pro aliado que ele costuma hexar, e minar o ponto onde ele costuma blinkar pra abrir a troca.
- fonte: pro_dados/techies.json; pro_dados/lion.json; constants_abilities.json (lion_voodoo, lion_finger_of_death)

## Contra Windranger (windrunner)

- placar: Techies vence 61 de 124 (49,2%).
- por que importa: 6º oponente mais comum (124 jogos), posição cruzada (ela joga pos 1/4, Techies pos 4/5), costuma farmar rota em vez de brigar de perto, um dos poucos do top 6 que raramente lanam juntos.
- janelas: até os 9 min ela já tem Javelin pronto pra Maelstrom (9:18); o Techies só sai de Arcane Boots aos 12:48. O primeiro pico real dela é o Maelstrom (13:24, proc em área) somado ao nível 6 de Focus Fire, que a deixa rápida o bastante pra caçar um suporte sozinho. Mjollnir fecha aos 18:18, junto da janela em que o Techies termina a visão completa (19-21 min). O BKB dela só chega aos 24:24, então entre 13 e 24 min ela está no pico ofensivo sem imunidade a stun.
- o que ele faz com você: Shackleshot (stun de até 3,25s se prender o Techies numa árvore ou unidade atrás dele) e Powershot (até 470 de dano num tiro de 3000 de alcance que atravessa linha) matam de longe sem precisar chegar perto da mina.
- o que você faz com ele: Proximity Mines no meio de árvore reduzem o valor do Shackleshot (precisa de algo atrás do alvo pra prender); Reactive Tazer limpa o slow do Powershot com o dispel básico.
- itens que viram: Aether Lens aumenta o alcance do Sticky Bomb pra fora do alcance de reação dela antes do BKB (24:24) ficar pronto; depois disso o BKB também bloqueia o dano mágico da mina e o stun do Blast Off, já que nenhum dos dois atravessa imunidade a magia.
- como jogar: evitar lane com árvore ou unidade atrás no alcance do Shackleshot, guardar Reactive Tazer pro aliado focado pelo Powershot, e priorizar mina antes dos 24 min, quando ela ainda não tem BKB pro Blast Off.
- fonte: pro_dados/techies.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_powershot)

## Contra Tusk (tusk)

- placar: Techies vence 57 de 117 (48,7%).
- por que importa: oponente pos 4/5 mais jogado em pro fora do top 6 (117 jogos), ambos suportes de iniciação/zoneamento que costumam blinkar pra abrir a troca.
- janelas: ritmo de visão quase idêntico (sentry/observer/dispenser do Tusk entre 18:48 e 20:30, do Techies entre 18:54 e 21:06). O power spike dele é o Blink Dagger (19:00), que destrava Snowball+Walrus Kick de perto; o Techies fecha Aether Lens só aos 22:06, então entre 19 e 22 min o Tusk tem iniciação garantida e o Techies ainda não tem o alcance extra pra responder de longe.
- o que ele faz com você: Walrus Kick (550 de dano, atravessa imunidade a magia, empurra 1200 de distância) chuta o Techies pra cima da própria mina ou pra fora de posição; Snowball, junto com um aliado, rola em cima dele com stun.
- o que você faz com ele: Proximity Mines no ponto de aterrissagem do blink dele punem a iniciação; Reactive Tazer dá dispel básico que limpa o slow do Ice Shards se usado rápido.
- itens que viram: Force Staff cancela a trajetória de um Snowball que já pegou um aliado, puxando ele pra fora antes do impacto; Aether Lens estende o Sticky Bomb pra bater nele antes do alcance de 1200 do blink dele.
- como jogar: não ficar parado perto de parede ou terreno onde ele costuma blinkar, guardar Force Staff pro aliado pego no Snowball, e minar o ponto de pouso clássico do blink dele.
- fonte: pro_dados/techies.json; pro_dados/tusk.json; constants_abilities.json (tusk_walrus_kick, tusk_snowball)

## Contra Lich (lich)

- placar: Techies vence 51 de 107 (47,7%).
- por que importa: pos 5 mais jogado em pro fora do top 6 (107 jogos), mesmo arquétipo de suporte de dano mágico a distância com pouca mobilidade própria.
- janelas: ritmo igual até Tranquil/Arcane Boots (ambos por volta dos 8 min). O pico do Lich é de nível, não de item: Frost Blast (dano em área, slow) já é forte desde o nível 1-2, então ele troca dano a distância cedo contra o Techies, que só fica realmente perigoso depois do nível 6 (Blast Off). O item que muda o jogo pra ele é o Aghanim's Shard (22:54), que planta uma Ice Spire fixa pra zonear área (quem destrói ela sofre um Frost Blast); o Techies fecha Aether Lens praticamente junto (22:06).
- o que ele faz com você: Frost Blast (até 160 de dano direto mais até 200 de dano em área ao redor, slow de ataque até -60) acerta o Techies de 575-650 de distância sem ele conseguir revidar; Chain Frost (até 550 por salto, 10 saltos) limpa o grupo inteiro se o Techies ficar perto de aliados.
- o que você faz com ele: Proximity Mines punem o posicionamento estático dele perto de ward; Reactive Tazer desarma o auto-attack caso ele precise finalizar last hit.
- itens que viram: Aether Lens deixa o Techies responder o Frost Blast com Sticky Bomb de uma distância que ele não alcança de volta.
- como jogar: não trocar Frost Blast parado, usar mina pra punir ele quando for sozinho revisitar ward, e guardar Reactive Tazer pro aliado que ele focar com Frost Blast.
- fonte: pro_dados/techies.json; pro_dados/lich.json; constants_abilities.json (lich_frost_nova, lich_chain_frost)

## Contra Ogre Magi (ogre_magi)

- placar: Techies vence 57 de 103 (55,3%), vantagem clara.
- por que importa: pos 5 recorrente em pro (103 jogos) e uma das maiores vantagens do Techies com amostra relevante (30+ jogos).
- janelas: os dois fecham Arcane Boots quase junto (Techies 12:48, Ogre 11:12). O Techies passa na frente na janela de visão (19-21 min) enquanto o Ogre só fecha Hand of Midas aos 18:54, item de farm que não ajuda em luta. O primeiro power spike real dele é mais de nível (Multicast passivo escala com força) do que de item, e o Aghanim's Shard dele só chega tarde, mediana 26:06.
- o que ele faz com você: Fireblast (stun de 1,2s, até 250 de dano, pode multicast) interrompe um cast de Techies no meio do combo; Ignite (dano ao longo do tempo em até 2 alvos) aplica pressão constante.
- o que você faz com ele: Proximity Mines punem o farm de Hand of Midas dele numa rota isolada; o dispel do Reactive Tazer é básico e não remove o stun do Fireblast (precisa de dispel forte), mas ainda desarma quem ataca o aliado protegido; sem fuga própria, o Ogre morre fácil pra um Blast Off bem posicionado.
- itens que viram: Aether Lens aumenta o alcance do Sticky Bomb pra fora do alcance de 525 do Fireblast; Force Staff joga o Ogre isolado pra cima de mina já plantada.
- como jogar: punir a rota de farm do Midas dele com mina, não ficar parado no alcance curto do Fireblast, e fechar Aether Lens antes dele pra manter distância de cast.
- fonte: pro_dados/techies.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_multicast)

## Contra Disruptor (disruptor)

- placar: Techies vence 52 de 87 (59,8%), uma das maiores vantagens com amostra boa (87 jogos).
- por que importa: pos 4/5 recorrente em pro e vantagem grande do Techies; os dois são suportes imóveis que vivem de controle de área, então quem inicia primeiro costuma ganhar a troca.
- janelas: ritmo de visão quase igual (sentry/observer/dispenser dele entre 17:30 e 19:12, do Techies entre 18:54 e 21:06). O power spike do Disruptor é tardio: Blink Dagger só aos 24:00 e Ultimate Scepter aos 34:54, bem depois do Techies já ter Aether Lens (22:06) e Force Staff (25:24) prontos. O Techies chega na janela de utilidade de meio-jogo bem antes.
- o que ele faz com você: Static Storm (silence em área, até 350 de dps) cala o Techies no meio de um combo; Kinetic Field prende o Techies dentro de uma parede junto com aliados.
- o que você faz com ele: Proximity Mines punem o Disruptor parado perto de ward (ele quase não se move pra lutar); Reactive Tazer dá dispel básico que limpa o Thunder Strike (slow de ataque de 100%); Blast Off mata ele fácil, sem vida alta nem fuga.
- itens que viram: Aether Lens deixa plantar Sticky Bomb fora do alcance de 800 do Static Storm; o Techies chega na janela de utilidade (22-25 min) bem antes do Disruptor (34 min+), então domina as trocas de meio-jogo.
- como jogar: iniciar antes dele ficar parado perto de ward com Static Storm pronto, e minar a área onde ele costuma segurar posição de visão.
- fonte: pro_dados/techies.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm, disruptor_thunder_strike)

## Contra Chaos Knight (chaos_knight)

- placar: Techies vence 24 de 36 (66,7%), a maior vantagem da lista (amostra de 36 jogos, mínima aceitável acima de 30).
- por que importa: maior vantagem do Techies no recorte com 30+ jogos; não dividem lane (CK é carry de farm solo, Techies suporte 4/5), mas o choque de power spike entre os dois é didático: CK farma rápido e sem mobilidade própria pra evitar mina.
- janelas: CK sai na frente em farm bruto (lh10=55 contra 9 do Techies) e fecha Power Treads+Armlet cedo (6:06 e 11:42). O pico ofensivo dele chega com Orchid Malevolence (19:18) e Echo Sabre (16:36), que destravam kill isolado. O problema é que até ali ele não tem fuga nenhuma: Blink só chega aos 21:12, depois do Techies já ter fechado a visão inteira (19-21 min) e já estar minando a rota de farm dele havia tempo.
- o que ele faz com você: Reality Rift (puxa o Techies pra perto e reduz armadura) seguido de Chaos Strike (crítico até 260%) mata rápido se pegar o Techies desprevenido; Chaos Bolt (stun de até 3,25s) tranca o combo.
- o que você faz com ele: Proximity Mines plantadas na rota de farm (ele não tem detecção nem fuga antes do Blink) cobram caro cada ciclo de creep; Blast Off aproveita a falta de BKB dele pra garantir o stun.
- itens que viram: Reactive Tazer desarma o CK no meio de um Chaos Strike; Force Staff tira o aliado puxado pelo Reality Rift antes do Chaos Strike conectar.
- como jogar: minar a rota de farm dele sem pena antes dos 21 min (ele não tem blink nem detecção ainda), e guardar Reactive Tazer pro instante que ele entrar no corpo a corpo.
- fonte: pro_dados/techies.json; pro_dados/chaos_knight.json; constants_abilities.json (chaos_knight_reality_rift, chaos_knight_chaos_strike)

## Contra Viper (viper)

- placar: Techies vence 33 de 54 (61,1%).
- por que importa: uma das maiores vantagens do Techies com amostra boa (54 jogos); outro carry/offlane de farm que raramente divide lane fixa com um pos 4/5, mas sofre do mesmo problema do CK: sem fuga nem detecção própria cedo.
- janelas: Viper fecha Ultimate Scepter cedo pra um carry, mediana 18:12 (é um dos poucos heróis com Aghs Scepter como item core e barato), junto de Dragon Lance (15:36) pro alcance de ataque. O pico dele é esse: alcance de ataque esticado com dano constante de Poison Attack e Nethertoxin. O problema é que Hurricane Pike, a fuga dele, só fecha aos 22:18, depois do Techies já ter terminado a visão completa e começado a minar.
- o que ele faz com você: Nethertoxin (dano crescente em área até 125 dps, slow de ataque) e Viper Strike (atravessa imunidade a magia, slow pesado) derretem o Techies de longe sem ele conseguir fugir.
- o que você faz com ele: Proximity Mines punem o farm lento dele numa rota isolada (sem Hurricane Pike ele não escapa de mina); Reactive Tazer limpa o slow do Poison Attack/Nethertoxin com o dispel básico.
- itens que viram: Aether Lens coloca o Sticky Bomb fora do alcance de resposta antes do Hurricane Pike (22:18) ficar pronto; depois disso o Viper ganha mobilidade e essa janela fecha.
- como jogar: minar a rota de farm dele antes dos 22 min, quando ainda não tem Hurricane Pike pra escapar, e guardar Reactive Tazer pro aliado pego no Nethertoxin.
- fonte: pro_dados/techies.json; pro_dados/viper.json; constants_abilities.json (viper_nethertoxin, viper_viper_strike)

## Contra Crystal Maiden (crystal_maiden)

- placar: Techies vence 48 de 80 (60,0%).
- por que importa: vantagem grande do Techies com amostra boa (80 jogos), mesma posição 5 e o mesmo perfil de suporte squishy e parado que depende de posicionamento perfeito, bom espelho de quem pune quem primeiro.
- janelas: ritmo de boots e visão quase idêntico (Tranquil 8:24 dela contra Arcane 12:48 do Techies; visão completa dela 16:36-17:54, do Techies 18:54-21:06). O item que muda o jogo pra ela é o Aghanim's Shard, mediana 17:42, que invoca um clone que, ao morrer ou expirar, aplica Frostbite em 450 de área ao redor, bem mais cedo que qualquer spike do Techies (Aether Lens só aos 22:06).
- o que ele faz com você: Frostbite (encasula, impede ataque e movimento) prende o Techies parado pra ser finalizado; Freezing Field (até 10s de dano em área massiva) limpa o grupo inteiro se ela canalizar perto.
- o que você faz com ele: Proximity Mines punem o posicionamento estático dela perto de ward ou do próprio grupo; Reactive Tazer desarma e dispela o Frostbite se usado rápido; Blast Off mata ela num golpe só, sem vida alta.
- itens que viram: Aether Lens estende o Sticky Bomb pra fora do alcance de 600 do Frostbite; Force Staff tira um aliado antes do Freezing Field terminar de canalizar.
- como jogar: nunca ficar parado perto dela esperando engajar, minar o ponto onde ela costuma segurar posição pra canalizar o ulti, e guardar Reactive Tazer pra limpar o Frostbite do aliado alvo.
- fonte: pro_dados/techies.json; pro_dados/crystal_maiden.json; constants_abilities.json (crystal_maiden_frostbite, crystal_maiden_freezing_field)

## Contra Axe (axe)

- placar: Techies vence 48 de 120 (40,0%), a maior desvantagem da lista com amostra grande (120 jogos).
- por que importa: maior desvantagem do Techies num confronto com volume real de jogos pro; Axe não divide lane fixa com um pos 4/5, mas é citado em qualquer discussão sobre contra-pick de Techies por travar o 1x1 sem chance de fuga.
- janelas: Axe fecha Blink Dagger cedo pra um herói de iniciação, mediana 15:42, junto de Phase Boots (7:12) pra fechar distância rápido. Esse é o pico dele: antes do Techies sequer terminar Arcane Boots (12:48), ele já tem blink pronto pra iniciar. O segundo spike vem com Blade Mail (12:36) e BKB (25:54), que travam o combo mesmo contra o stun do Blast Off.
- o que ele faz com você: Berserker's Call (atravessa imunidade a magia, força o Techies a atacar ele) tranca o combo mesmo que o Techies tente fugir; Culling Blade (dano puro, atravessa imunidade a magia, reseta se matar) finaliza fácil um herói com pouco mais de 100 de vida.
- o que você faz com ele: Proximity Mines no ponto de pouso do blink dele cobram caro cada iniciação, já que ele precisa ficar parado pra confirmar o Call; Reactive Tazer desarma ele no meio do Counter Helix.
- itens que viram: nenhum item do Techies neutraliza bem o Berserker's Call (atravessa imunidade a magia); a resposta real é nunca ficar sozinho no alcance de blink dele e minar a rota que ele costuma usar pra iniciar.
- como jogar: nunca farmar ou plantar mina sozinho perto do alcance de blink do Axe, avisar o time antes de qualquer mina que deixe alguém isolado, e usar Reactive Tazer no aliado puxado pelo Call pra ao menos cortar o dano de ataque dele.
- fonte: pro_dados/techies.json; pro_dados/axe.json; constants_abilities.json (axe_berserkers_call, axe_culling_blade)

## Contra Monkey King (monkey_king)

- placar: Techies vence 19 de 54 (35,2%), segunda maior desvantagem com amostra boa (54 jogos).
- por que importa: uma das piores janelas do Techies no recorte; MK não divide lane fixa com um pos 4/5, mas Boundless Strike resolve de forma simples o pouco controle que o Techies tem pra impedir o all-in.
- janelas: MK farma rápido (lh10=53) e fecha Power Treads aos 6:00; o pico dele é de burst, com Diffusal Blade (14:06) e Desolator (18:18) chegando bem antes do Techies fechar Aether Lens (22:06). Mischief disfarça ele de objeto do cenário, dificultando notar a aproximação visualmente, mas não evita a Proximity Mine: a mina detona pela presença do inimigo na área, não pela visão dele, então dispara igual em MK disfarçado ou não.
- o que ele faz com você: Mischief disfarça ele de objeto do cenário, mas isso é só visual (quebra com qualquer ataque, dano recebido ou uso de item/habilidade), não dá imunidade a detecção por mina; Boundless Strike (stun em linha, true strike, 1100 de alcance) garante o acerto mesmo contra o pouco controle que o Techies tem; Jingu Mastery dá lifesteal alto depois de 4 acertos seguidos.
- o que você faz com ele: Reactive Tazer desarma ele depois que se revelar pra atacar; Proximity Mines detonam nele do mesmo jeito que em qualquer herói, disfarçado ou não, porque a mina reage à presença na área.
- itens que viram: nenhum item do Techies precisa detectar Mischief, já que a mina já pega ele de qualquer forma; Aether Lens estende o alcance do Sticky Bomb pra acertar ele assim que o disfarce quebrar por ataque ou dano.
- como jogar: não depender de identificar o disfarce pra minar, já que a Proximity Mine detona nele igual; ficar atento ao momento em que ele se revelar pra atacar e guardar Reactive Tazer pra esse instante.
- fonte: pro_dados/techies.json; pro_dados/monkey_king.json; constants_abilities.json (monkey_king_mischief, monkey_king_boundless_strike)

## Contra Phoenix (phoenix)

- placar: Techies vence 25 de 69 (36,2%).
- por que importa: terceira pior janela do Techies no recorte, mesma posição 5 (as duas disputam visão direto), mas Phoenix tem ferramenta específica contra setup de área que o Techies não neutraliza bem.
- janelas: ritmo de visão quase igual até os 20 min (Phoenix entre 20:06 e 21:54, Techies entre 18:54 e 21:06). O power spike dela é o Aghanim's Shard, mediana 23:18, que libera o Sun Ray mesmo durante o Supernova, somando dano de canalização ao burst da ultimate; o Techies só fecha Aether Lens aos 22:06 e Force Staff aos 25:24 no mesmo intervalo, sem ganho de dano correspondente.
- o que ele faz com você: Supernova (até 120 dps em raio 1200, atravessa imunidade a magia) limpa um campo minado inteiro e qualquer agrupamento de heróis de uma vez, incluindo o próprio Techies se estiver perto; Icarus Dive atravessa o campo de batalha ignorando terreno, fugindo do alcance de mina terrestre.
- o que você faz com ele: Proximity Mines ainda acertam o entorno do Supernova se ela ficar parada perto; focar o alvo do Sun Ray em vez de tentar interromper o canal, que não é dispellable nem quebra por desarme.
- itens que viram: nenhum item do Techies impede bem o Supernova (atravessa imunidade a magia); a resposta prática é focar o ovo (ela morre se destruída antes do tempo) em vez de confiar só em mina.
- como jogar: não agrupar mina nem heróis num raio de 1200 quando ela tiver a ultimate pronta (nível 6+), e focar o ovo assim que ela usar Supernova em vez de recuar pro meio de mais mina.
- fonte: pro_dados/techies.json; pro_dados/phoenix.json; constants_abilities.json (phoenix_supernova, phoenix_icarus_dive)
