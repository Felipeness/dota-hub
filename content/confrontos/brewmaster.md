---
id: confrontos-brewmaster
heroi: Brewmaster
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/brewmaster.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/warlock.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tidehunter.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/abyssal_underlord.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/centaur.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/sven.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dark_willow.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/void_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/bristleback.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/pudge.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rattletrap.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/brewmaster.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/tusk.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/tidehunter.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/mars.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/abyssal_underlord.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/centaur.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/rattletrap.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/bristleback.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/pudge.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/dark_willow.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/void_spirit.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/warlock.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/disruptor.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/ember_spirit.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/sven.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/tiny.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/shadow_fiend.md
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Contra Tusk (tusk)
- placar: 62 vitórias em 124 jogos de pro (50,0%); é o confronto com mais jogos de pro de todos (brewmaster.json, confrontos hero_id 100).
- por que importa: é o herói que mais jogou contra o Brewmaster em pro no recorte (124 partidas). Hoje Tusk é suporte puro: 79 picks pos 4 e 54 pos 5 no draft.csv local, nenhuma vez pos 1, 2 ou 3 (fichas/tusk.md), então o confronto normalmente acontece fora da lane, na rotação e nas lutas.
- janelas: Tusk farma muito pouco (GPM mediano 300, só 6 last hit nos 10 primeiros minutos, pro_dados/tusk.json) e sobe pro Blink cedo (mediana 19,0 min) só pra abrir o Snowball; ele é perigoso do minuto 0 aos 20 em pick-off isolado, não por item. O Brewmaster é devagar no início e só vira ameaça de verdade depois do Scepter (mediana 19,9 min, brewmaster.json). Até os 19-20 min a iniciativa é do Tusk; dali em diante, com Scepter pronto e depois o próprio Blink (23,5 min), o Brewmaster passa a abrir a luta primeiro.
- o que ele faz com você: Snowball (75 de mana, dano base 80 a 260 crescendo com cada aliado dentro, até 1,2s de stun sozinho no nível 4, constants_abilities.json) pega um elemental isolado de surpresa; Walrus Kick (550 de dano fixo, empurra 1200 de distância, constants_abilities.json) te tira da zona de Thunder Clap bem na hora que você ia iniciar.
- o que você faz com ele: Thunder Clap (raio 400, até 60% de redução de velocidade de ataque e movimento por 4s, constants_abilities.json) já quebra o corpo a corpo do Tusk assim que ele aparece perto; Cinder Brew tem 950 de alcance (constants_abilities.json) e acerta o Tusk antes do Snowball se formar.
- itens que viram: o Blink do Tusk (19,0 min) decide se ele consegue abrir o combo primeiro; com Aghanim's Shard (dá Drinking Buddies, puxa um aliado e soma armadura/velocidade pros dois, aghs_desc) ele fica mais difícil de isolar. Do seu lado, o Scepter (soma um nível no Primal Split, scepter_bonus_levels=1, constants_abilities.json) faz os elementais aguentarem um Snowball + Walrus Kick inteiro sem morrer.
- como jogar: até o nível 6 fique perto de creep ou estrutura, porque o Walrus Kick te empurra 1200 de distância e te separa do time; depois dos 20 min, não ande sozinho pelo mapa, force a luta em grupo, onde o Thunder Clap neutraliza o combo do Tusk antes dele chegar perto.
- fonte: pro_dados/brewmaster.json; pro_dados/tusk.json; content/fichas/tusk.md; content/fichas/brewmaster.md; constants_abilities.json (tusk_snowball, tusk_walrus_kick, brewmaster_thunder_clap, brewmaster_cinder_brew, brewmaster_primal_split); aghs_desc (Tusk)

## Contra Shadow Fiend (nevermore)
- placar: 53 vitórias em 107 jogos de pro (49,5%); segundo confronto com mais jogos de pro (brewmaster.json, hero_id 11).
- por que importa: segundo herói que mais jogou contra o Brewmaster em pro. O catálogo do site lista ele como pos 1, mas na prática ele costuma jogar de mid, então o confronto direto é raro na lane; o que importa é quem farma mais rápido e quem vence a troca quando o jogo junta no meio.
- janelas: Shadow Fiend é o mais rápido dos 16 oponentes em farm: 658 de GPM mediano e 78 last hit nos 10 primeiros minutos (pro_dados/nevermore.json), contra 520 de GPM e 45 LH10 do Brewmaster (brewmaster.json). Ele sempre vai estar na frente em farm cru. A compensação do Brewmaster é a sobrevivência: até os 15-19 min, antes do Scepter, um combo bem acertado de Shadowraze + Requiem mata rápido. Depois do Scepter (19,9 min) e do Black King Bar que o próprio Shadow Fiend costuma comprar perto dos 25,2 min (mediana, pro_dados/nevermore.json), o duelo vira troca de quem erra primeiro: Primal Split aguenta o nuke de longe, mas ainda morre pro combo fechado.
- o que ele faz com você: Shadowraze (200 de alcance à frente, dano base 85 a 280 mais bônus por stack de Necromastery, constants_abilities.json) acerta quem fica colado nele sem aviso; Requiem of Souls (raio 1000, medo e até -15% de resistência mágica por linha acertada, até 2,15s, constants_abilities.json) afasta e deixa vulnerável logo depois de um combo.
- o que você faz com ele: Thunder Clap tira até 60 de velocidade de ataque (constants_abilities.json), o suficiente pra ele não conseguir confirmar um combo de autoataque contra os brewlings; Primal Split dá 3 corpos pra absorver Shadowraze em vez de um só, diluindo o dano.
- itens que viram: o item de crítico dele (componentes Mithril Hammer, Demon Edge, Claymore e Crystalys fecham entre 23 e 28 min, pro_dados/nevermore.json, somam num Daedalus) multiplica o burst do Requiem; o Black King Bar dele (25,2 min) libera ele pra ficar parado trocando. Do seu lado, o Scepter (19,9 min) garante que um elemental sozinho não morre pra um combo de Shadowraze + Requiem.
- como jogar: não force a luta sozinho antes do Scepter, porque ele farma mais rápido e chega mais forte num 1x1 cedo; depois do Scepter, jogue o Primal Split em cima dele em vez de reagir ao combo, porque 3 corpos tiram o alvo prioritário que o Requiem precisa pra acertar todo mundo.
- fonte: pro_dados/brewmaster.json; pro_dados/nevermore.json; content/fichas/brewmaster.md; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, brewmaster_thunder_clap, brewmaster_primal_split)

## Contra Tiny (tiny)
- placar: 51 vitórias em 102 jogos de pro (50,0%); terceiro confronto com mais jogos de pro (brewmaster.json, hero_id 19).
- por que importa: terceiro em jogos de pro contra o Brewmaster. Catalogado como pos 1 (herois_catalogo.json), outro carry que raramente divide lane com o Brewmaster mas aparece direto nas estatísticas porque os dois saem muito no mesmo draft.
- janelas: Tiny fecha Power Treads cedo (mediana 6,1 min, só farm) e o primeiro spike de luta real dele é o Blink (15,9 min, pro_dados/tiny.json), bem antes do Scepter do Brewmaster (19,9 min). Entre os 14 e os 20 min, Tiny com Blink + Avalanche + Toss consegue isolar e matar um Brewmaster sem Scepter rápido. Depois dos 20 min, com Scepter pronto, o Brewmaster aguenta melhor, mas o Toss (agarra qualquer unidade em 300 de raio) continua perigoso pros dois lados até o Brewmaster também ter Blink (23,5 min).
- o que ele faz com você: Toss (125 de mana, agarra qualquer unidade em 300 de raio e arremessa, dano 90 a 360 mais o bônus de Grow, constants_abilities.json) pode pegar um elemental ou um aliado seu e jogar em cima de um alvo/runa; Avalanche (raio 325 a 370, 5 tiques de stun em 1,5s) prende antes do Toss.
- o que você faz com ele: Thunder Clap no meio do combo dele quebra a sequência Avalanche + Toss, porque reduz a velocidade de ataque dele em até 60; Primal Split dá 3 alvos pro Toss escolher, o que atrasa o combo contra o Brewmaster original.
- itens que viram: o Blink do Tiny (15,9 min) chega bem antes do seu Scepter, então nesse intervalo ele inicia primeiro; depois que você também tem Blink (23,5 min) e Scepter, a luta vira mais sobre quem acerta Thunder Clap/Avalanche primeiro do que sobre item.
- como jogar: entre os 14 e os 20 min, evite ficar sozinho perto de árvore ou estrutura, que é onde o combo Avalanche + Toss rende mais dano; depois que os dois tiverem Blink, inicie com Thunder Clap antes dele formar o combo, porque o cast time de 0,3s do Thunder Clap é mais rápido que a sequência dele.
- fonte: pro_dados/brewmaster.json; pro_dados/tiny.json; content/porque_itens/tiny.md; constants_abilities.json (tiny_toss, tiny_avalanche, brewmaster_thunder_clap, brewmaster_primal_split)

## Contra Ember Spirit (ember_spirit)
- placar: 49 vitórias em 100 jogos de pro (49,0%); quarto confronto com mais jogos de pro (brewmaster.json, hero_id 106).
- por que importa: quarto em jogos de pro contra o Brewmaster, quase sempre mid (202 de 231 partidas no recorte Tier 1, 87%, fichas/ember_spirit.md); o confronto normalmente não é de lane, é de quem consegue iniciar em cima na luta.
- janelas: Ember Spirit farma rápido (558 GPM, 53 LH10, pro_dados/ember_spirit.json) e tem spikes cedo com Phase Boots (9,1 min) e Urn (7,3 min), ainda insuficientes pra incomodar o Brewmaster sem Scepter. O meio de jogo dele é marcado pelo Aghanim's Shard (25,3 min, "item de maior frequência da fase intermediária entre os cores, 85% das partidas do banco Tier 1", fichas/ember_spirit.md), que reabastece Fire Remnant, e o Black King Bar (27,1 min) pra travar o combo sem interrupção. Isso fica logo depois do seu Scepter (19,9 min) e perto do seu Blink (23,5 min), então as janelas se cruzam entre 23 e 27 min: quem fecha o item primeiro inicia a luta.
- o que ele faz com você: Sleight of Fist (raio 250 a 550, dano bônus em herói 50 a 170, ataca tudo e volta pro ponto de partida, constants_abilities.json) acerta todos os elementais de uma vez sem Ember correr risco; Searing Chains (raio 400, prende por até 2,75s) trava um elemental isolado pra queimar com Flame Guard.
- o que você faz com ele: Thunder Clap reduz 60 de velocidade de ataque dele bem na hora que ele entra com Sleight of Fist, cortando o dano físico; Cinder Brew (950 de alcance) acerta antes dele conseguir se aproximar o bastante pra um combo seguro.
- itens que viram: o Shard dele (25,3 min) sustenta repetir Fire Remnant numa luta prolongada contra os 3 elementais; o BKB dele (27,1 min) resolve o Thunder Clap como disable. Do seu lado, Scepter (19,9 min) mais Primal Split cedo tiram o foco de um alvo só, que é o que o Sleight of Fist precisa pra valer a pena.
- como jogar: não entre sozinho no raio de 400 do Searing Chains antes de abrir Primal Split; jogue Thunder Clap assim que ele aparecer, pra cortar a velocidade de ataque antes do Sleight of Fist conectar em todo mundo.
- fonte: pro_dados/brewmaster.json; pro_dados/ember_spirit.json; content/fichas/ember_spirit.md; constants_abilities.json (ember_spirit_sleight_of_fist, ember_spirit_searing_chains, brewmaster_thunder_clap)

## Contra Warlock (warlock)
- placar: 54 vitórias em 95 jogos de pro (56,8%), vantagem do Brewmaster; quinto confronto com mais jogos de pro (brewmaster.json, hero_id 37).
- por que importa: quinto em jogos de pro contra o Brewmaster e suporte duro puro (100% pos 5 no recorte Tier 1, fichas/warlock.md); entra na lista porque aparece demais em pro no mesmo draft, mesmo sem trocar hit direto.
- janelas: Warlock não tem spike de item de luta, o kit dele é sobre timing de feitiço: Fatal Bonds (1000 de alcance, prende até 6 unidades por 18s, 15 a 24% de dano compartilhado, constants_abilities.json) fica disponível desde o nível 1, e Chaotic Offering (Golem com stun de 0,8s em 600 de raio) a partir do nível 6. O Brewmaster é mais devagar nos primeiros 10 min, mas assim que tem Thunder Clap maxado e depois o Scepter (19,9 min), qualquer luta que o Warlock tenta amarrar com Fatal Bonds acaba beneficiando o Brewmaster, porque o dano em área do Primal Split afeta todo mundo preso no bind.
- o que ele faz com você: Fatal Bonds espalha uma fração do dano causado pros outros amarrados, o que ajuda seu time contra ele, não o contrário; o Golem da ultimate (1500 a 3000 de HP) é o único corpo capaz de segurar um elemental sozinho por mais tempo.
- o que você faz com ele: Thunder Clap em área já pega o Warlock e o Golem juntos; como o Fatal Bonds espalha dano entre alvos amarrados, bater em qualquer um dos presos acelera a morte do grupo inteiro dele.
- itens que viram: o kit do Warlock depende de itens de suporte (Glimmer Cape 20,5 min, Solar Crest 22,2 min, pro_dados/warlock.json) pra proteger o time, não pra duelar; o seu Scepter (19,9 min) é o que faz o Primal Split valer mais que o Golem numa troca de corpo a corpo.
- como jogar: não entre sozinho no alcance de 1000 do Fatal Bonds tentando picar; espere o time dele se amarrar e jogue Thunder Clap em cima do grupo inteiro, porque o dano compartilhado do bind vira a seu favor.
- fonte: pro_dados/brewmaster.json; pro_dados/warlock.json; content/fichas/warlock.md; constants_abilities.json (warlock_fatal_bonds, warlock_rain_of_chaos, brewmaster_thunder_clap)

## Contra Disruptor (disruptor)
- placar: 48 vitórias em 95 jogos de pro (50,5%); sexto confronto com mais jogos de pro (brewmaster.json, hero_id 87).
- por que importa: sexto em jogos de pro contra o Brewmaster, suporte duro sem farm (GPM mediano 279, o mais baixo dos 16 oponentes, pro_dados/disruptor.json); aparece tanto porque é pick/ban de meta em pro, não porque troca direto com o Brewmaster.
- janelas: o combo dele (Kinetic Field + Static Storm) só existe a partir do nível 6, e o item que destrava ele de verdade é o Blink (24,0 min, pro_dados/disruptor.json), bem depois do seu Scepter (19,9 min) e do seu Blink (23,5 min). Na maior parte do jogo o Brewmaster chega pronto pra luta antes do Disruptor ter como fechar a gaiola.
- o que ele faz com você: Kinetic Field (raio 350, formação de 1s, dura até 4,4s, constants_abilities.json) tranca o Brewmaster numa parede que nem Blink atravessa; Static Storm (raio 550, silencia e sobe o dano ao longo de 6s, até 350 de dano por segundo no nível 3) desliga Thunder Clap e Primal Split durante o efeito.
- o que você faz com ele: Primal Split dá 3 corpos, então uma Kinetic Field de raio 350 dificilmente prende os 3 elementais junto com o Brewmaster original, o que limita o quanto a gaiola separa seu lado da luta; Thunder Clap, acertado antes da Static Storm formar, já reduz a velocidade de ataque antes do silêncio começar.
- itens que viram: o Scepter dele (mediana 34,9 min, pro_dados/disruptor.json, item tardio e pouco prioritário) silencia uso de item dentro da Static Storm, neutralizando um Blink de fuga; o seu Scepter (19,9 min) aumenta o número de corpos que o kit dele precisa cobrir ao mesmo tempo.
- como jogar: force a luta antes dos 24 min, quando o Disruptor ainda não tem Blink pra garantir a gaiola; depois disso, abra Primal Split antes de entrar no alcance de 800 da Static Storm, porque 3 corpos espalhados é a melhor defesa contra uma área de 550 de raio.
- fonte: pro_dados/brewmaster.json; pro_dados/disruptor.json; content/fichas/disruptor.md; constants_abilities.json (disruptor_kinetic_field, disruptor_static_storm, brewmaster_thunder_clap, brewmaster_primal_split); aghs_desc (Disruptor)

## Contra Mars (mars)
- placar: 39 vitórias em 75 jogos de pro (52,0%); o pos 3 com mais jogos de pro contra o Brewmaster (brewmaster.json, hero_id 129).
- por que importa: os dois disputam exatamente o mesmo papel no draft (offlaner de iniciação); no recorte local do Atlas Tier 1 o Mars foi pos 3 em 30 de 30 partidas (fichas/mars.md).
- janelas: Mars sobe Blink cedo (15,2 min, pro_dados/mars.json, "o item mais comprado por ele na fase mid") e com Spear no nível 4 (alcance 1200) já consegue abrir luta de longe antes do Brewmaster ter Scepter (19,9 min). Entre os 15 e os 20 min a iniciativa é do Mars. Depois disso, com Scepter e, aos 23,5 min, Blink também, o Brewmaster passa a competir de igual pra iniciar primeiro; no late, Arena of Blood (5,5s prendendo um grupo inteiro) é mais forte em teamfight fechada, mas perde valor contra 3 elementais espalhados.
- o que ele faz com você: Spear (dano 100 a 325, empurra o primeiro herói atingido e empala se bater em árvore, parede ou penhasco, constants_abilities.json) tira o Brewmaster sozinho do grupo; Arena of Blood (raio 550, lanças batendo quem fica perto da borda) prende o lado de dentro e pune quem tenta sair andando.
- o que você faz com ele: Thunder Clap reduz até 60% a velocidade de movimento dele, dificultando fechar o espaço do Spear a tempo; Primal Split faz a Arena of Blood valer menos, porque ela prende área, não alvo, e 3 corpos espalhados dividem o dano das lanças em vez de concentrar em um só.
- itens que viram: o Blink do Mars (15,2 min) chega 4 a 5 min antes do seu Scepter, essa é a maior vantagem de tempo dele; Black King Bar do Mars (55 contagens somando fase mid e late no OpenDota, fichas/mars.md) libera ele pra canalizar Arena of Blood sem ser travado por Thunder Clap. Do seu lado, Scepter (19,9 min) e depois Blink (23,5 min) equilibram a corrida de iniciação.
- como jogar: antes dos 20 min, não ande perto de árvore ou parede sozinho, porque é ali que o Spear vira stun garantido; depois que os dois tiverem Blink, inicie você primeiro com Thunder Clap, porque o cast time de 0,3s é mais curto que o combo completo dele.
- fonte: pro_dados/brewmaster.json; pro_dados/mars.json; content/fichas/mars.md; constants_abilities.json (mars_spear, mars_arena_of_blood, brewmaster_thunder_clap, brewmaster_primal_split)

## Contra Tidehunter (tidehunter)
- placar: 39 vitórias em 74 jogos de pro (52,7%); segundo pos 3 com mais jogos de pro contra o Brewmaster (brewmaster.json, hero_id 29).
- por que importa: praticamente mono-posição offlane no patch (85 de 86 picks confirmados em pos 3, fichas/tidehunter.md), o clássico "dois iniciadores tanque" competindo pelo mesmo papel.
- janelas: Tidehunter sobe Blink aos 21,2 min (mediana, pro_dados/tidehunter.json) e Ravage só vale a pena a partir do nível 6, então o primeiro combo forte dele (Blink + Ravage) sai perto dos 20-22 min, bem na janela em que o Brewmaster acabou de fechar Scepter (19,9 min) mas ainda não tem Blink (23,5 min). Entre 20 e 23 min o Tidehunter pode iniciar primeiro contra um Brewmaster sem Blink pra reposicionar.
- o que ele faz com você: Ravage (raio 1250, stun de 2 a 2,4s, cast point de 0,3s, constants_abilities.json) pega o Brewmaster e o time inteiro de uma vez, sem alcance mínimo pra escapar; Gush (dano 100 a 280, -40% de velocidade e até -6 de armadura por 4,5s) já corta sua mobilidade antes do Ravage.
- o que você faz com ele: Primal Split dá 3 corpos espalhados fora do raio de 1250 do Ravage, se você já tiver se dividido antes da luta, diluindo o valor do combo dele; Thunder Clap reduz até 60 a velocidade de ataque, cortando o Anchor Smash dele em troca corpo a corpo.
- itens que viram: o Scepter do Tidehunter (22,3 min, vira o Gush numa onda em linha, pro_dados/tidehunter.json e fichas/tidehunter.md) aumenta o alcance de dano dele depois do Ravage; o Shard dele (Dead in the Water, trava quem tenta fugir com uma âncora, aghs_desc) neutraliza a fuga de um elemental isolado. Do seu lado, Blink (23,5 min) é o que fecha a corrida de iniciação com ele.
- como jogar: entre os 20 e os 23 min, não agrupe o time num raio curto, que é a janela em que ele pode abrir Ravage antes de você ter Blink pra reagir; depois disso, tente abrir Primal Split antes da luta começar, porque corpos espalhados cortam o valor do stun em área dele.
- fonte: pro_dados/brewmaster.json; pro_dados/tidehunter.json; content/fichas/tidehunter.md; constants_abilities.json (tidehunter_ravage, tidehunter_gush, brewmaster_thunder_clap, brewmaster_primal_split); aghs_desc (Tidehunter)

## Contra Underlord (abyssal_underlord)
- placar: 36 vitórias em 70 jogos de pro (51,4%); terceiro pos 3 com mais jogos de pro contra o Brewmaster (brewmaster.json, hero_id 108).
- por que importa: toda amostra de pro consultada mostra ele só como offlane nesse patch (fichas/abyssal_underlord.md), outro tanque iniciador de área disputando o mesmo papel.
- janelas: Underlord tem farm parecido com o do Brewmaster entre os pos 3 (525 GPM, 58 LH10, pro_dados/abyssal_underlord.json, contra 520 GPM e 45 LH10 do Brewmaster; o Tidehunter também fica perto, com 515 GPM), então os dois chegam no meio-jogo em ritmo parecido. O primeiro item de poder dele é Pipe (17,5 min) ou Scepter (23,9 min, pro_dados/abyssal_underlord.json), pouco depois do seu Scepter (19,9 min); a diferença é pequena, então essa janela costuma ser decidida por quem erra a posição primeiro, não por item.
- o que ele faz com você: Pit of Malice (raio 400, prende e causa dano a cada 3,6s por até 12s, constants_abilities.json) tranca um elemental isolado numa área que ele não sai andando; Firestorm (raio 425, 6 ondas de dano ao longo de 7s, queima % do HP máximo) limpa os brewlings mais fracos (Storm e Fire) rápido por causa do dano baseado em HP máximo.
- o que você faz com ele: Thunder Clap reduz até 60% a velocidade de ataque e movimento dele, dificultando perseguir quem foge da Pit of Malice; Primal Split com 3 corpos divide o alvo que a Atrophy Aura dele (reduz dano base em área) precisa focar pra valer a pena.
- itens que viram: o Rod of Atos dele (15,2 min, pro_dados/abyssal_underlord.json) prende por 2s antes da Pit of Malice cair embaixo do alvo preso, combo que mata um elemental isolado rápido; o Scepter dele (23,9 min, dobra a Pit of Malice nos dois portais da ulti) é item de teamfight de 5, não de duelo direto. Do seu lado, Scepter (19,9 min) chega primeiro e dá a vantagem de nível no Primal Split antes do combo dele estar pronto.
- como jogar: não fique parado dentro da Firestorm perto do fim da duração, porque o dano baseado em % do HP máximo pune justamente os brewlings de menos vida; abra Primal Split antes de entrar no alcance do Rod of Atos, porque um elemental preso sozinho é o alvo fácil da Pit of Malice.
- fonte: pro_dados/brewmaster.json; pro_dados/abyssal_underlord.json; content/fichas/abyssal_underlord.md; constants_abilities.json (abyssal_underlord_pit_of_malice, abyssal_underlord_firestorm, abyssal_underlord_atrophy_aura, brewmaster_thunder_clap, brewmaster_primal_split); aghs_desc (Underlord)

## Contra Centaur Warrunner (centaur)
- placar: 40 vitórias em 69 jogos de pro (58,0%); quarto pos 3 em jogos de pro contra o Brewmaster e o de maior vantagem do Brewmaster entre eles (brewmaster.json, hero_id 96).
- por que importa: quase mono-posição offlane no patch (15 de 16 picks na Yandex, fichas/centaur.md), outro iniciador de força competindo pela mesma vaga.
- janelas: Centaur não tem alcance nenhum: Blink (19,6 min, pro_dados/centaur.json) é o único jeito dele chegar perto pra travar o Hoof Stomp, e esse Blink sai quase junto com o seu Scepter (19,9 min). Antes disso ele é um offlaner fraco de iniciação; depois dos 20 min os dois correm junto, mas o Brewmaster chega com Blink próprio aos 23,5 min, pouco depois do Centaur, então a corrida de iniciação fica apertada.
- o que ele faz com você: Hoof Stomp (0,5s de vento antes do stun, 1,6 a 2,2s de stun, 70 a 280 de dano, constants_abilities.json) trava um elemental ou o Brewmaster original pra abrir espaço; Double Edge (60 a 150% da força dele como dano extra, mas também causa esse dano nele mesmo, constants_abilities.json) soma dano alto sem custo de mana.
- o que você faz com ele: Thunder Clap reduz a velocidade de ataque dele, cortando quantos ataques ativam a passiva Return (que devolve dano fixo mais % da força e já atravessa BKB por conta própria); Primal Split dá 3 alvos pro Hoof Stomp (raio só 325) não travar todo mundo de uma vez.
- itens que viram: o Heart of Tarrasque dele (ring_of_tarrasque aparece aos 17,5 min no pro_dados/centaur.json, caminho pro Heart) é o que faz Double Edge e Stampede baterem mais forte, porque a força vira dano direto nas duas habilidades (fichas/centaur.md); seu Scepter (19,9 min) chega praticamente junto com o Blink dele, então essa troca de item costuma empatar.
- como jogar: evite lutar num corredor estreito antes dos 20 min, que é onde o Hoof Stomp dele mais compensa a falta de alcance; depois que os dois tiverem Blink, jogue Thunder Clap assim que ele aparecer, porque o cast time de 0,3s é mais rápido que o windup de 0,5s do Hoof Stomp.
- fonte: pro_dados/brewmaster.json; pro_dados/centaur.json; content/fichas/centaur.md; constants_abilities.json (centaur_hoof_stomp, centaur_double_edge, centaur_return, brewmaster_thunder_clap, brewmaster_primal_split)

## Contra Sven (sven)
- placar: 32 vitórias em 45 jogos de pro (71,1%); a maior vantagem do Brewmaster entre os confrontos com 30+ jogos (brewmaster.json, hero_id 18).
- por que importa: é o oponente com a maior vantagem de vitórias do Brewmaster em pro na amostra qualificada; outro carry forte em 1x1 que raramente divide lane com ele, mas o confronto mostra onde o kit do Brewmaster realmente neutraliza um right-clicker puro.
- janelas: Sven é o mais rápido em XPM dos 16 oponentes (847, pro_dados/sven.json) e sobe Blink cedo (17,1 min) pra abrir o combo Storm Bolt + God's Strength + Warcry, mas o combo dele depende 100% de autoataque sustentado, exatamente o que Thunder Clap neutraliza. Até os 19-20 min, antes do seu Scepter, um Sven com Blink + Great Cleave já consegue abrir e vencer uma troca rápida. Depois disso, mesmo com God's Strength (+110 a 190% de dano por 30s, disponível a partir do nível 6, constants_abilities.json), o combo dele perde força porque Thunder Clap já reduz a velocidade de ataque antes do burst de autoataque render.
- o que ele faz com você: Storm Bolt (600 de alcance, stun de 1 a 1,6s, constants_abilities.json) trava um elemental isolado pra abrir o combo; God's Strength (+110 a 190% de dano por 30s) transforma qualquer troca de autoataque em favor dele, mas só se ele conseguir bater muitas vezes.
- o que você faz com ele: Thunder Clap (até 60 de redução de attack speed e 60% de movimento) é o contador direto de um herói que só faz dano via autoataque; Primal Split tira o foco de alvo único que o Storm Bolt precisa pra render o combo todo.
- itens que viram: o Blink dele (17,1 min, usado cerca de 8 vezes por 10 min em jogos pro, porque entra em cooldown de 3s após levar dano de herói) é o item que abre o combo; o Black King Bar dele (22,7 min, pro_dados/sven.json) libera ele de qualquer disable mágico, inclusive Thunder Clap. Do seu lado, o Scepter (19,9 min) chega quase junto com o BKB dele, então quem tiver o item pronto primeiro define quem inicia.
- como jogar: jogue Thunder Clap assim que ele aparecer, antes dele empilhar autoataques com God's Strength; se ele já tiver Black King Bar, afaste os elementais em vez de bater nele de perto, porque o Great Cleave dele acerta tudo que estiver próximo.
- fonte: pro_dados/brewmaster.json; pro_dados/sven.json; content/porque_itens/sven.md; constants_abilities.json (sven_storm_bolt, sven_gods_strength, sven_great_cleave, brewmaster_thunder_clap, brewmaster_primal_split)

## Contra Dark Willow (dark_willow)
- placar: 37 vitórias em 58 jogos de pro (63,8%); segunda maior vantagem do Brewmaster com 30+ jogos (brewmaster.json, hero_id 119).
- por que importa: suporte de pick-off quase mono pos 4 (159 de 164 picks, fichas/dark_willow.md); entra porque o kit dela depende de travar um alvo só, e o Primal Split tira justamente isso dela.
- janelas: o combo dela (Blink + Cursed Crown pré-castada, com 4s de delay antes do stun estourar, fichas/dark_willow.md) só funciona bem contra alvo único ou grupo fechado; ela sobe Blink aos 25,9 min (pro_dados/dark_willow.json), bem depois do seu Scepter (19,9 min) e do seu Blink (23,5 min). Na maior parte do jogo o Brewmaster já está pronto pra abrir a luta antes dela ter o combo completo.
- o que ele faz com você: Cursed Crown (delay de 4s, depois estuna 1,5 a 2,4s num raio de 360, constants_abilities.json) trava um elemental se ela conseguir prever onde o time vai se juntar; Bramble Maze (8 brambles, raiz de 1 a 2,5s cada, dura até 16s com o Shard) segura quem pisa em cima.
- o que você faz com ele: nenhuma das habilidades de controle dela atravessa imunidade a feitiço, nem fura o físico do Thunder Clap; Primal Split dá 3 alvos pro Cursed Crown escolher, e o raio de 360 do stun dificilmente pega todos de uma vez.
- itens que viram: o Aeon Disk, que a salvaria de um burst, não aparece no top 30 do pro_dados dela, ou seja, não é item core nesse patch; seu Scepter (19,9 min) chega bem antes do Blink dela (25,9 min), te dando vantagem de iniciativa na maior parte da partida.
- como jogar: não agrupe o time parado esperando iniciação, que é onde o delay de 4s do Cursed Crown mais compensa; jogue Primal Split cedo na luta, antes dela conseguir prever onde vai acertar a maldição.
- fonte: pro_dados/brewmaster.json; pro_dados/dark_willow.json; content/fichas/dark_willow.md; constants_abilities.json (dark_willow_cursed_crown, dark_willow_bramble_maze, brewmaster_thunder_clap, brewmaster_primal_split)

## Contra Void Spirit (void_spirit)
- placar: 38 vitórias em 60 jogos de pro (63,3%); terceira maior vantagem do Brewmaster com 30+ jogos (brewmaster.json, hero_id 126).
- por que importa: mid quase puro (93,75% pos 2 no recorte Atlas, fichas/void_spirit.md); entra porque é um herói de burst mágico rápido, exatamente o tipo que a resistência mágica do Primal Split neutraliza.
- janelas: Void Spirit farma rápido (535 GPM, 50 LH10, pro_dados/void_spirit.json), e o Aghanim's Shard dele (17,0 min, pro_dados/void_spirit.json, "a compra de meio-jogo mais repetida da build", fichas/void_spirit.md) chega antes do seu Scepter (19,9 min), dando silêncio em Resonant Pulse cedo. Mas o burst dele é todo mágico, e cada brewling do Primal Split já nasce com a passiva Drunken Brawler, incluindo resistência mágica extra pro Earth Brewling (8 a 20%, constants_abilities.json), então mesmo chegando primeiro no item o dano dele rende menos contra o Brewmaster dividido.
- o que ele faz com você: Astral Step (170 de raio de ataque, aplica uma marca que detona depois de 1,25s, dano 130 a 330, constants_abilities.json) ataca pelo caminho e ainda estoura dano mágico; Aether Remnant (puxa quem atravessa o caminho dele) reposiciona um elemental pra fora da formação.
- o que você faz com ele: Thunder Clap reduz até 60% a velocidade de movimento dele, dificultando a sequência Astral Step + Dissimilate pra reposicionar; Primal Split espalha o burst mágico entre 3 corpos em vez de concentrar num só, e o Earth Brewling aguenta melhor magia por causa da resistência mágica da passiva.
- itens que viram: o Black King Bar dele resolve contra a maioria dos disables de alvo único, mas "não funciona contra Phoenix Supernova" nem contra magia já conectada (fichas/void_spirit.md), e libera ele pra entrar sem medo de Thunder Clap; seu Scepter (19,9 min) garante que mesmo sem BKB os brewlings aguentam o combo mágico dele.
- como jogar: não fique parado no caminho de um Aether Remnant visível, que puxa você pro meio do grupo dele; abra Primal Split antes da troca pra diluir o burst mágico entre os 3 elementais, já que nenhum sozinho aguenta o combo completo tão bem quanto os 3 juntos.
- fonte: pro_dados/brewmaster.json; pro_dados/void_spirit.json; content/fichas/void_spirit.md; constants_abilities.json (void_spirit_astral_step, void_spirit_aether_remnant, brewmaster_thunder_clap, brewmaster_drunken_brawler, brewmaster_primal_split)

## Contra Bristleback (bristleback)
- placar: 18 vitórias em 52 jogos de pro (34,6%); a maior desvantagem do Brewmaster entre os confrontos com 30+ jogos (brewmaster.json, hero_id 99).
- por que importa: o pior confronto do Brewmaster na amostra qualificada e também um pos 3 direto (91% das partidas dele na offlane, fichas/bristleback.md); os dois disputam a mesma lane e o mesmo papel de tanque de frente de luta.
- janelas: Bristleback farma rápido pra um offlaner (565 GPM, 63 LH10, pro_dados/bristleback.json, bem acima dos 520 GPM e 45 LH10 do Brewmaster) porque Quill Spray limpa onda em área sem gastar mana corpo a corpo. O primeiro item de poder dele é o Aghanim's Shard (18,4 min, pro_dados/bristleback.json), que dá Hairball pra aplicar Goo e Quill à distância, chegando pouco antes do seu Scepter (19,9 min); a partir dos 20 min ele soma Sange and Yasha (24,2 min) pra ficar difícil de travar e difícil de fugir ao mesmo tempo.
- o que ele faz com você: a passiva Bristleback (reduz até 40% do dano recebido pelas costas, constants_abilities.json) faz ele virar de costas pro Primal Split e tomar menos dano enquanto solta Quill Spray (raio 700, dano crescente por stack até 500 de teto) em todos os elementais ao mesmo tempo; Viscous Nasal Goo empilha até -3,5 de armadura e -12% de movimento por stack.
- o que você faz com ele: Thunder Clap reduz até 60 a velocidade de ataque dele, cortando o acúmulo de stack do Quill Spray; Cinder Brew (950 de alcance) acerta de longe, de um ângulo em que a redução de dano pelas costas não vale, já que ela só conta pro lado ou fundo físico dele.
- itens que viram: o Black King Bar dele segura 9s de imunidade mágica exatamente contra o Thunder Clap (fichas/bristleback.md); a resposta real do kit dele a Break (que desliga a passiva Bristleback e o Warpath) é Eul's/Wind Waker, então uma fonte de Break no seu time ajuda mais do que qualquer item que o Brewmaster sozinho carrega.
- como jogar: não bata nele de perto parado, porque é exatamente pra isso que a passiva dele foi feita; jogue Thunder Clap de longe, antes dele virar de costas, e puxe a luta pra fora do raio de 700 do Quill Spray sempre que possível.
- fonte: pro_dados/brewmaster.json; pro_dados/bristleback.json; content/fichas/bristleback.md; constants_abilities.json (bristleback_quill_spray, bristleback_bristleback, bristleback_viscous_nasal_goo, brewmaster_thunder_clap)

## Contra Pudge (pudge)
- placar: 11 vitórias em 30 jogos de pro (36,7%), amostra pequena, exatamente no corte de 30; segunda maior desvantagem do Brewmaster entre os confrontos qualificados (brewmaster.json, hero_id 14).
- por que importa: frequentemente aparece na mesma lane do Brewmaster (2 de 7 partidas em pos 3 no recorte Tier 1, mais 5 em pos 4, fichas/pudge.md).
- janelas: Pudge quase não farma pra padrão de core (GPM mediano 413, abaixo dos 520 do Brewmaster, pro_dados/pudge.json) porque o jogo dele é todo sobre acertar o Hook. Ele não tem spike de item fixo: o que importa é o nível do combo (Hook e Dismember liberam desde cedo) e o Aghanim's Scepter dele (17,2 min, pro_dados/pudge.json, aumenta o raio do Rot e corta cura em área), que costuma sair antes do seu próprio Scepter (19,9 min).
- o que ele faz com você: Meat Hook (1300 de alcance, dano 150 a 360, constants_abilities.json) fisga um elemental isolado e traz ele pra perto do time dele; Dismember (canal de até 6 ticks, 80 a 120 de dano por segundo multiplicado pela força dele, cura o Pudge pelo total, constants_abilities.json) é um canal que, uma vez conectado, mata rápido quem não tem Black King Bar.
- o que você faz com ele: Thunder Clap em área corta a velocidade de ataque e movimento dele, dificultando perseguir depois de um Hook errado; Primal Split dá 3 alvos pro Hook escolher, e perder um elemental pro Hook custa muito menos que perder o Brewmaster original.
- itens que viram: o Scepter dele (17,2 min) transforma o Rot numa arma de área que limpa brewlings de menos vida (Storm e Fire) rápido; o Blink dele (19,5 min, pro_dados/pudge.json) entra praticamente junto com o seu Scepter, dando mais um ângulo de Hook. Black King Bar protegeria do Dismember, mas não é item core do Brewmaster (não aparece no top itens dele), então a defesa real é não ficar isolado no alcance de 1300 do Hook.
- como jogar: nunca ande sozinho fora do raio de visão do time dentro do alcance de 1300 do Hook; se um elemental for fisgado, não tente resgatar sozinho, porque o Dismember cura o Pudge pelo dano total causado e vira o combo a favor dele rápido.
- fonte: pro_dados/brewmaster.json; pro_dados/pudge.json; content/fichas/pudge.md; constants_abilities.json (pudge_meat_hook, pudge_dismember, pudge_rot, brewmaster_thunder_clap, brewmaster_primal_split)

## Contra Clockwerk (rattletrap)
- placar: 18 vitórias em 45 jogos de pro (40,0%); terceira maior desvantagem do Brewmaster entre os confrontos com 30+ jogos (brewmaster.json, hero_id 51).
- por que importa: suporte de roaming puro (134 de 199 picks confirmados pos 4, fichas/rattletrap.md), o confronto mais desfavorável da lista fora dos pos 3 diretos.
- janelas: Clockwerk não farma (GPM mediano 300, igual ao Tusk, pro_dados/rattletrap.json) e o item que destrava o combo dele de verdade é o Blink (24,8 min, pro_dados/rattletrap.json) ou o Aghanim's Shard (30,0 min, dá Jetpack pra cruzar terreno sem ser visto), os dois bem depois do seu Scepter (19,9 min) e do seu Blink (23,5 min). Na maior parte do jogo o Brewmaster já está pronto pra luta quando o Clockwerk finalmente consegue se posicionar pro Hookshot.
- o que ele faz com você: Hookshot (mira rápida, estuna em 175 de raio ao acertar, constants_abilities.json) fisga um elemental isolado e já atordoa todo mundo perto dele; Power Cogs (anel que prende e, se destruído, empurra até 300 de distância, dano 50 a 275 mais queima de mana, constants_abilities.json) separa o grupo do Brewmaster em dois.
- o que você faz com ele: Primal Split dá 3 corpos pro Hookshot escolher, então ele raramente consegue puxar de propósito o alvo mais importante; Thunder Clap reduz a velocidade de movimento dele, dificultando reposicionar depois de um Hookshot que erra.
- itens que viram: o Blink dele (24,8 min) permite reposicionar antes de abrir o combo sem expor a intenção, segundo a própria ficha do herói; antes disso ele depende só do alcance do Hookshot. Seu Scepter (19,9 min) e Blink (23,5 min) chegam primeiro na maioria das partidas, te dando vantagem de iniciativa na maior parte do jogo.
- como jogar: evite ficar isolado do grupo mesmo perto da sua própria frente de batalha, porque o Hookshot não precisa de setup, só de alcance; se um elemental for puxado pra dentro da Power Cogs, jogue Thunder Clap em cima do anel em vez de tentar resgatar o elemental sozinho.
- fonte: pro_dados/brewmaster.json; pro_dados/rattletrap.json; content/fichas/rattletrap.md; constants_abilities.json (rattletrap_hookshot, rattletrap_power_cogs, brewmaster_thunder_clap, brewmaster_primal_split); aghs_desc (Clockwerk)
