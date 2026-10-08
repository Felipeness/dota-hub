---
id: confrontos-mars
heroi: Mars
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/centaur.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/axe.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tidehunter.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shredder.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/chaos_knight.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/medusa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/treant.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/chen.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Contra Jakiro (jakiro)
- placar: Mars venceu 194 de 438 partidas de pro (44,3%). Fonte: pro_dados/mars.json (confrontos).
- por que importa: é o oponente que mais aparece contra Mars no banco de pro (438 jogos), quase sempre como duo support que tenta travar ele antes de qualquer iniciação.
- janelas: até os 7:30 Mars já fechou Chainmail e Blades of Attack (pro_dados/mars.json) e ganha qualquer troca corpo a corpo, enquanto Jakiro (315 gpm, 8 last hit aos 10min contra 49 do Mars) ainda não tem Arcane Boots (11:42, pro_dados/jakiro.json). Dos 11:42 aos 15:12 Jakiro sustenta mana pra Dual Breath e Ice Path, mas Mars já tem Blink (15:12) pronto pra fechar a distância antes dele upar o nível 6. Depois do 6 (Macropyre, 100 a 200 de dano por 10s numa faixa de 500 de largura), Jakiro vira ameaça de zona, e o TP dele (16:36) ainda chega antes do Shard de Mars (21:30).
- o que ele faz com você: Ice Path (constants_abilities.json: jakiro_ice_path) tem alcance de 1100 e root de 1,25 a 2s, trava Mars antes do Spear sair se ele reagir primeiro; Dual Breath é dano mágico, então ignora o bloqueio físico do Bulwark; Macropyre pune quem fica parado dentro da área por 10s, incluindo a própria Arena of Blood aberta no lugar errado.
- o que você faz com ele: o Spear de Mars (alcance 900 a 1200, cast point de só 0,25s) costuma sair primeiro que o Ice Path (alcance 1100) por causa do cast mais rápido; Jakiro tem pouco HP e zero mobilidade, então Blink seguido de Arena of Blood cerca ele sem chance de fuga.
- itens que viram: Black King Bar de Mars (mediana 26:30) bloqueia Ice Path, Dual Breath e Macropyre, nenhuma das três atravessa imunidade a feitiço (bkbpierce: No nas três, constants_abilities.json); o Aghanim's Shard de Mars (empala até 2 heróis, aghs_desc) ajuda a prender Jakiro junto do parceiro de dupla lane em vez de deixar ele fugir sozinho.
- como jogar: não troque auto-ataque parado dentro do alcance do Dual Breath cedo, o dano mágico passa reto pelo Bulwark; feche a distância certa pra lançar o Spear antes do Ice Path sair; depois do nível 6 dele, puxe a luta pra fora do caminho do Macropyre antes de formar a Arena.
- fonte: pro_dados/mars.json; pro_dados/jakiro.json; constants_abilities.json (mars_spear, mars_bulwark, jakiro_ice_path, jakiro_dual_breath, jakiro_macropyre); aghs_desc.

## Contra Shadow Fiend (nevermore)
- placar: Mars venceu 199 de 422 partidas de pro (47,2%). Fonte: pro_dados/mars.json.
- por que importa: segundo oponente mais comum contra Mars em pro (422 jogos) e um carry mid clássico, mostra o duelo típico "iniciador offlane contra carry solo" mesmo sem dividir lane.
- janelas: Shadow Fiend farma muito mais que Mars (658 gpm, 78 last hit aos 10min contra 487/49 do Mars, nível final 21 contra 19), então até os 15min ele já está puxando o jogo pra frente, com Power Treads (5:54) e Yasha (13:18) prontos antes de Mars terminar a Blink (15:12). O risco dele é justamente a lane solo sem suporte fixo: antes do nível 6, Mars consegue isolar ele com o Spear sem revide de Requiem. Dos 23:00 aos 25:12 os dois correm pra item de pico quase junto, Hurricane Pike do SF contra BKB de Mars (26:30), então quem fecha o combo primeiro decide a janela.
- o que ele faz com você: Shadowraze (constants_abilities.json: nevermore_shadowraze1) acerta até 280 de dano instantâneo numa das três distâncias, mais bônus de stack de Necromastery (3 de dano extra por alma guardada), cd de só 3s entre uma raze e outra; Requiem of Souls (raio 1000) é automático até ao morrer, mete medo e reduz resistência mágica em quem pega linha, acumulando 0,6s por linha até o máximo de 2,15s.
- o que você faz com ele: o Spear interrompe o canal de Requiem se acertar durante a janela de cast, e o empurrão tira o SF do alcance de farm por um tempo; Arena of Blood cerca ele sem espaço pra kitar de longe, já que as lanças seguem dentro do raio de 550.
- itens que viram: BKB de Mars segura o medo e a redução de resistência mágica do Requiem; o Aghanim's Shard de Mars (rastro de fogo após o impale) continua batendo nele mesmo se ele sair correndo depois do stun.
- como jogar: cace Shadow Fiend sozinho antes do nível 6, ele não tem como revidar sem suporte por perto; depois do 6, segure BKB pronto pra não tomar o fear da Requiem parado no meio da Arena of Blood.
- fonte: pro_dados/mars.json; pro_dados/nevermore.json; constants_abilities.json (mars_spear, nevermore_shadowraze1, nevermore_requiem); aghs_desc.

## Contra Disruptor (disruptor)
- placar: Mars venceu 195 de 395 partidas de pro (49,4%). Fonte: pro_dados/mars.json.
- por que importa: terceiro oponente mais comum em pro (395 jogos), suporte de controle que aparece em boa parte das composições que enfrentam Mars.
- janelas: Disruptor também não farma (279 gpm, 4 last hit aos 10min) e só fecha Arcane Boots aos 11:24 (pro_dados/disruptor.json). O spike dele é de nível pra Kinetic Field (cd de 20 a 14s, dura até 4,4s) e Static Storm no 6 (silêncio em área por 6s). Mars já tem Blink pronto aos 15:12, bem antes do Disruptor comprar o próprio Blink (24:00), então na maior parte das lutas de meio de jogo é Mars quem decide o engage primeiro.
- o que ele faz com você: Kinetic Field prende Mars numa jaula que ele não pula nem com Blink; Static Storm silencia a Arena of Blood e o Spear ao mesmo tempo, apagando a iniciação inteira se cair em cima do combo; Glimpse devolve Mars pro lugar de 4s atrás (constants_abilities.json: disruptor_glimpse), cancelando a aproximação.
- o que você faz com ele: o Spear de Mars tem mais alcance (900 a 1200) que o cast range do Kinetic Field (900), então dá pra acertar o Disruptor antes dele formar a jaula; Arena of Blood bloqueia ele de fugir pra fora do alcance do próprio Glimpse.
- itens que viram: BKB de Mars é a resposta direta ao combo, porque nem Kinetic Field, nem Static Storm, nem Glimpse atravessam imunidade a feitiço (bkbpierce: No nas três, constants_abilities.json). A corrida real é se o Disruptor acerta antes dos 26:30 medianos de BKB do Mars.
- como jogar: não inicie sem saber se o Disruptor já tem Static Storm (nível 6) ou mana pro combo completo; leve BKB antes de entrar de frente outra vez; use o alcance maior do Spear pra pegar ele primeiro, antes que ele monte a jaula.
- fonte: pro_dados/mars.json; pro_dados/disruptor.json; constants_abilities.json (mars_spear, disruptor_kinetic_field, disruptor_static_storm, disruptor_glimpse).

## Contra Snapfire (snapfire)
- placar: Mars venceu 171 de 370 partidas de pro (46,2%). Fonte: pro_dados/mars.json.
- por que importa: quarto oponente mais comum (370 jogos) e um suporte que também pode ir offlane, então divide papel com Mars em parte das partidas.
- janelas: Snapfire farma mais que os outros suportes da lista (413 gpm, 21 last hit aos 10min) e fecha o próprio Shard aos 16:54 (pro_dados/snapfire.json), bem antes do Blink dela (20:42). Mortimer Kisses (alcance de 3000, cd de 120 a 100s) fica pronto perto do nível 6, antes do Blink de Mars (15:12) virar uma ameaça de verdade pra ela, então essa janela (nível 6 dela até ~15min) é a mais perigosa pro Mars se ele se expor sozinho.
- o que ele faz com você: Mortimer Kisses é a maior ameaça, puxa Mars de até 3000 de distância e aplica impacto antes do Blink dele sair do lugar; Scatterblast não empurra, mas aplica 100% de slow de movimento por 1s (constants_abilities.json: snapfire_scatterblast), o que trava o posicionamento de Mars quase como um stun.
- o que você faz com ele: o alcance do Spear (900 a 1200) acerta Snapfire antes dela terminar de carregar o Mortimer Kisses, já que o cast dela demora mais pra sair; Arena of Blood neutraliza a fuga pela Firesnap Cookie, porque as lanças seguram quem tenta sair pela borda.
- itens que viram: BKB de Mars bloqueia o Mortimer Kisses e o Scatterblast, nenhum dos dois atravessa imunidade a feitiço (bkbpierce: No, constants_abilities.json), então depois dos 26:30 Snapfire perde a principal ferramenta de pick-off contra ele; o Shard dela (16:54), que turbina o Firesnap Cookie com um Mortimer Kiss extra, costuma estar pronto antes do Shard de Mars (21:30).
- como jogar: fique de olho no nível 6 dela antes de se expor sozinho em lane aberta, o Mortimer Kisses alcança o mapa inteiro; depois do seu BKB, pode iniciar em cima dela sem medo do combo mágico.
- fonte: pro_dados/mars.json; pro_dados/snapfire.json; constants_abilities.json (mars_spear, snapfire_mortimer_kisses, snapfire_scatterblast); aghs_desc.

## Contra Tusk (tusk)
- placar: Mars venceu 177 de 370 partidas de pro (47,8%). Fonte: pro_dados/mars.json.
- por que importa: quinto oponente mais comum (370 jogos) e outro iniciador que compete pelo mesmo papel de abrir luta, então os dois times de pro escalam ele contra Mars com frequência.
- janelas: Tusk farma pouco (300 gpm, 6 last hit aos 10min) porque gasta o tempo de lane rolando Snowball em vez de puxar creep, parecido com Mars esperando o Spear acertar. O combo dele (Ice Shards, Snowball, Walrus Punch) fica completo no nível 6, perto da época em que Mars já tem Blink pronto (15:12), mas o próprio Blink de Tusk (19:00) sai depois. Essa janela, do 6 dele até os 19:00, é quando Tusk mais precisa iniciar a pé, o que facilita Mars interromper com o Spear de longe.
- o que ele faz com você: Ice Shards cria uma parede de 7 estilhacos (até 300 de dano cada) que trava o posicionamento de Mars; Snowball empurra e prende contra a parede; Walrus Punch no 6 é crítico físico de 200 a 300% que o Bulwark reduz em até 70% só se vier de frente, mas passa quase inteiro de lado ou de trás.
- o que você faz com ele: Spear empurra o Tusk pra longe do time dele, cortando o combo antes dele rolar a Snowball; se ele impala numa parede, o stun de até 2,2s dá tempo de fechar com Arena of Blood.
- itens que viram: BKB de Mars segura o stun de Ice Shards e Snowball, mas não o Walrus Punch (bkbpierce: Yes, constants_abilities.json), porque o crítico físico dele atravessa imunidade a feitiço; contra esse combo específico, Heaven's Halberd (disarm de 3,5s, items.json) ou Blade Mail ajudam mais do que BKB.
- como jogar: não fique de lado ou de costas pro Tusk perto do nível 6, o Walrus Punch passa quase reto pelo Bulwark fora do ângulo frontal; use o Spear pra separar ele do time antes dele formar o combo de gelo.
- fonte: pro_dados/mars.json; pro_dados/tusk.json; constants_abilities.json (mars_spear, mars_bulwark, tusk_ice_shards, tusk_snowball, tusk_walrus_punch); items.json (heavens_halberd).

## Contra Centaur Warrunner (centaur)
- placar: Mars venceu 151 de 330 partidas de pro (45,8%). Fonte: pro_dados/mars.json.
- por que importa: sexto em volume (330 jogos) e também joga quase sempre pos 3, então é o rival mais direto de posição e de papel (os dois são iniciadores tanques de força).
- janelas: Centaur farma rápido pros padrões de offlane (509 gpm, 54 last hit aos 10min, acima dos 487/49 do Mars) porque Hoof Stomp e Double Edge dão farm e trade juntos desde o nível 1, e já tem Vanguard aos 8:30 (pro_dados/centaur.json). O nível 6 dele (Stampede, 3,5 a 4,5s de corrida pro time inteiro) sai perto da mesma hora que o Blink do Mars (15:12), e ele próprio só pega Blink aos 19:36, então Mars costuma ter a janela de iniciar primeiro entre 15:12 e 19:36.
- o que ele faz com você: Hoof Stomp (stun de até 2,2s em raio de 325) atravessa o Bulwark porque é controle, não dano; Double Edge dá dano aumentado pela força dele e ainda machuca o próprio Centaur, então ele troca mesmo em desvantagem de HP; Stampede faz o time dele chegar em cima de Mars antes dele formar a Arena.
- o que você faz com ele: o Spear tem mais alcance (900 a 1200) que o Hoof Stomp, que é corpo a corpo, então dá pra acertar o stun primeiro; Arena of Blood trava o Centaur dentro do cerco antes dele conseguir ativar o Stampede em cima do time.
- itens que viram: BKB de Mars segura o Hoof Stomp e o Stampede, nenhum dos dois atravessa imunidade a feitiço; o Aghanim's Shard do Centaur (29:06, pro_dados/centaur.json; aghs_desc), que faz o Double Edge acumular força e lentidão por herói acertado, torna a troca de auto-ataque pior pra quem leva vários hits, então Mars quer fechar rápido em vez de ficar trocando corpo a corpo depois disso.
- como jogar: não entre em troca de auto-ataque longa contra um Centaur já com o Shard; prefira acertar o Spear de longe e posicionar a Arena antes do Stampede dele sair.
- fonte: pro_dados/mars.json; pro_dados/centaur.json; constants_abilities.json (mars_spear, mars_bulwark, centaur_hoof_stomp, centaur_double_edge, centaur_stampede); aghs_desc.

## Contra Axe (axe)
- placar: Mars venceu 126 de 260 partidas de pro (48,5%). Fonte: pro_dados/mars.json.
- por que importa: outro pos 3 clássico (offlane tanque de força), parecido com o papel do Centaur, então é mais um confronto direto de função.
- janelas: Axe também farma rápido pra offlane (517 gpm, 63 last hit aos 10min) porque Counter Helix rende gold de creep enquanto ele leva dano, e fecha Phase Boots aos 7:12 (pro_dados/axe.json), perto da mesma hora que Mars fecha Chainmail/Blades (7:30/7:54). O nível 6 dele (Culling Blade, executa alvo com menos de 275 a 475 de HP) é a maior ameaça direta num Mars que já levou dano de luta, e o Shard do Axe (22:54) chega um pouco depois do de Mars (21:30), então Mars costuma ter vantagem de Shard nessa janela.
- o que ele faz com você: Berserker's Call força Mars a atacar o Axe por até 3s e atravessa Black King Bar (bkbpierce: Yes); cada ataque forçado soma pro contador do Counter Helix (4 a 7 hits), que devolve dano puro em área, não reduzido por armadura nem pelo bloqueio físico do Bulwark; Culling Blade também atravessa BKB e executa Mars se o HP cair abaixo do limiar.
- o que você faz com ele: a Arena of Blood cerca o Axe junto do time dele, então mesmo se ele usar o Call lá dentro, Mars pode desativar o Bulwark ou sair do alcance de auto-ataque entre as lanças; o Spear empurra o Axe pra fora de alcance do Call antes dela sair.
- itens que viram: nem BKB nem Bulwark resolvem o combo principal do Axe, Call, Counter Helix e Culling Blade atravessam imunidade a feitiço, e o Counter Helix é dano puro, que ignora armadura. A resposta real é não ficar perto dele com a Call pronta, ou matar rápido o bastante pra não tomar o combo completo.
- como jogar: não troque auto-ataque de perto com um Axe que já tem Berserker's Call pronta, cada hit forçado conta pro Counter Helix; mantenha o HP alto perto do nível 6 dele, a Culling Blade executa sem olhar pra tanque.
- fonte: pro_dados/mars.json; pro_dados/axe.json; constants_abilities.json (mars_bulwark, mars_arena_of_blood, axe_berserkers_call, axe_counter_helix, axe_culling_blade).

## Contra Tidehunter (tidehunter)
- placar: Mars venceu 114 de 252 partidas de pro (45,2%). Fonte: pro_dados/mars.json.
- por que importa: offlane comum contra Mars (252 jogos), tanque de iniciação em área que compete pelo mesmo papel de abrir luta.
- janelas: Tidehunter farma rápido (515 gpm, 56 last hit aos 10min) e fecha Phase Boots/Soul Ring aos 7:48/8:30 (pro_dados/tidehunter.json), praticamente junto com Mars. O 6 dele é Ravage, a maior ameaça de iniciação da lista em área (stun de 2 a 2,4s num raio de 1250, lançado à distância zero porque é centrado nele mesmo). Os dois chegam no Blink perto da mesma hora (Mars 15:12, Tidehunter 21:12), então Mars costuma ter a janela de iniciar primeiro entre 15:12 e 21:12.
- o que ele faz com você: Ravage atravessa o time inteiro e stuna Mars onde ele estiver dentro do raio de 1250, cancelando qualquer plano de Arena of Blood; Kraken Shell bloqueia uma fatia do dano físico de Mars (15 a 75 de redução conforme o nível) e ainda limpa debuff quando acumula dano suficiente, o que pode incluir o próprio stun do Spear.
- o que você faz com ele: o Spear interrompe o canal de Ravage se acertar o Tidehunter durante a janela de lançamento; Arena of Blood cerca o Tidehunter antes dele alcançar o time pra centralizar a ult.
- itens que viram: BKB de Mars segura o Ravage e o Gush, os dois são mágicos (bkbpierce: No); a corrida de quem inicia primeiro decide a luta, então o Blink de Mars (15:12) precisa estar pronto antes do nível 6 do Tidehunter virar ameaça de verdade.
- como jogar: jogue perto do alcance do Spear mas fora da distância de reação do Tidehunter antes do nível 6 dele; depois do 6, segure BKB pronto pra não tomar Ravage parado no meio do grupo.
- fonte: pro_dados/mars.json; pro_dados/tidehunter.json; constants_abilities.json (mars_spear, tidehunter_ravage, tidehunter_gush, tidehunter_kraken_shell).

## Contra Timbersaw (shredder)
- placar: Mars venceu 111 de 245 partidas de pro (45,3%). Fonte: pro_dados/mars.json.
- por que importa: offlane comum contra Mars (245 jogos) e um dos maiores counters conceituais de herói de força corpo a corpo, então é o confronto que mais testa a decisão de item de Mars.
- janelas: Timbersaw farma muito rápido pra um offlane (587 gpm, 53 last hit aos 10min, nível final 21) porque Whirling Death dá gold de árvore destruída e Reactive Armor deixa ele sobreviver trocando cedo. O item que define ele é Kaya and Sange (18:06, pro_dados/shredder.json), que soma resistência mágica bem na janela em que Mars costuma iniciar com o Spear (Blink do Mars em 15:12, do Timbersaw em 22:30).
- o que ele faz com você: Whirling Death reduz um atributo primário de Mars por um tempo e destrói árvore em volta, cortando rota de fuga; Reactive Armor conta ataque de herói como 4x, então bater nele sem plano só deixa ele mais tanque; Timber Chain (alcance crescente até 1200) dá mobilidade pra fugir do Spear ou perseguir Mars rápido demais pra reagir.
- o que você faz com ele: o Spear empurra o Timbersaw pra longe de árvore, cortando a rota do Timber Chain; a Arena of Blood tranca o espaço antes dele correntear pra longe de novo.
- itens que viram: Desolator ajuda contra o Reactive Armor porque reduz armadura direto (-6 por 7s, items.json), driblando parte da defesa que ele ganha tomando dano; BKB de Mars segura o dano mágico de Whirling Death, mas não impede o Timber Chain, que é mobilidade do próprio Timbersaw, não um debuff aplicado em Mars.
- como jogar: não troque dano corpo a corpo sem plano contra Reactive Armor, cada hit deixa ele mais forte; corte a rota de fuga cortando árvore perto antes dele usar Timber Chain pra escapar.
- fonte: pro_dados/mars.json; pro_dados/shredder.json; constants_abilities.json (mars_spear, shredder_whirling_death, shredder_reactive_armor, shredder_timber_chain); items.json (desolator).

## Contra Chaos Knight (chaos_knight)
- placar: Mars venceu 30 de 47 partidas de pro (63,8%), amostra pequena mas acima do corte de 30 jogos. Fonte: pro_dados/mars.json.
- por que importa: maior vantagem de Mars em pro com volume mínimo de jogos, e um hard carry clássico que raramente divide lane com ele. É o caso que mais se parece com o exemplo de Alchemist contra Morphling, os dois quase não se enfrentam direto na lane, mas o duelo de poder entre eles decide luta em grupo.
- janelas: Chaos Knight farma bem (541 gpm, 55 last hit aos 10min) e passa pelo Armlet cedo (11:42, pro_dados/chaos_knight.json), mas o spike de verdade dele é todo em volta de Phantasm (1 a 3 ilusões que causam 100% de dano mas tomam 350%), que costuma sair perto do Blink de Mars (15:12) ou um pouco depois. O Blink do próprio CK (21:12) sai bem mais tarde, então até lá Mars tem a janela pra caçar ele isolado, igual faz com Shadow Fiend.
- o que ele faz com você: Chaos Bolt (dano de 90 a 410, variando aleatório, mais stun) interrompe a aproximação de Mars de 600 de distância; Reality Rift puxa Mars pra perto dele e reduz a armadura em até 7 por 6s, facilitando o resto do combo físico; Phantasm multiplica o número de corpos físicos batendo em Mars ao mesmo tempo.
- o que você faz com ele: a Arena of Blood ajuda a identificar o Chaos Knight real, porque as lanças causam dano consistente e o alvo errado (ilusão) morre muito mais rápido tomando 350% de dano; o Bulwark reduz o dano físico de cada cópia individualmente, o que vale mais contra Phantasm do que contra um carry de ataque único.
- itens que viram: BKB de Mars segura o Chaos Bolt (bkbpierce: No); Heaven's Halberd desarma o Chaos Knight real e ajuda a separar ele das ilusões, já que o disarm não se aplica igual às cópias sem alvo definido na troca.
- como jogar: cace o Chaos Knight sozinho antes do nível 6, sem Phantasm ele é só um carry físico qualquer contra o tanque do Mars; depois do 6, use a Arena of Blood pra forçar as ilusões a tomar dano extra e descobrir o corpo real mais rápido.
- fonte: pro_dados/mars.json; pro_dados/chaos_knight.json; constants_abilities.json (mars_bulwark, mars_arena_of_blood, chaos_knight_chaos_bolt, chaos_knight_reality_rift, chaos_knight_phantasm); items.json (heavens_halberd).

## Contra Medusa (medusa)
- placar: Mars venceu 49 de 83 partidas de pro (59,0%). Fonte: pro_dados/mars.json.
- por que importa: segunda maior vantagem com amostra válida (83 jogos) e o carry que melhor ilustra o pedido original, ela é safelane e ele é offlane, quase nunca compartilham lane, mas o duelo de poder entre os dois aparece direto em luta de grupo.
- janelas: Medusa tem o farm mais alto da lista inteira (684 gpm, 65 last hit aos 10min), mas o spike dela demora porque precisa de Manta (15:00, pro_dados/medusa.json) e depois Butterfly (22:12) ou Skadi (28:24) pra virar ameaça de verdade. Mars já tem Blink pronto aos 15:12, praticamente a mesma hora do Manta dela, então essa janela de 15 aos 22min é onde Mars ainda consegue isolar ela antes do resto da curva de item fechar.
- o que ele faz com você: Mystic Snake (80 a 140 de mana, dano cresce a cada pulo e devolve mana pra ela) drena a mana de Mars entre trocas; Stone Gaze (ult) petrifica Mars se ele acumular 2s olhando pra ela dentro de 1200 de distância, cancelando Bulwark e qualquer ataque em andamento, e esse efeito atravessa Black King Bar (bkbpierce: Yes, constants_abilities.json).
- o que você faz com ele: o Spear empurra a Medusa pra longe do time antes dela conseguir ativar a Stone Gaze protegida; a Arena of Blood cerca ela sem rota de fuga, já que ela depende de posicionamento pra sobreviver e tem pouca mobilidade própria.
- itens que viram: BKB de Mars não impede a Stone Gaze de petrificar, o efeito foi desenhado pra atravessar imunidade a feitiço, então a resposta real é não encarar ela de perto quando a ult estiver ativa, não um item; Desolator ajuda a furar o Mana Shield dela (2 de dano reduzido por ponto de mana) com dano físico maior por hit.
- como jogar: não troque auto-ataque de frente quando a Stone Gaze estiver ativa, vire de costas ou saia do raio de 1200; cace a Medusa antes do Manta dela ficar pronto, ela não tem Blink nem fuga própria.
- fonte: pro_dados/mars.json; pro_dados/medusa.json; constants_abilities.json (mars_spear, mars_bulwark, medusa_mystic_snake, medusa_stone_gaze, medusa_mana_shield); items.json (desolator).

## Contra Treant Protector (treant)
- placar: Mars venceu 39 de 109 partidas de pro (35,8%), a maior desvantagem de Mars em pro com amostra válida. Fonte: pro_dados/mars.json.
- por que importa: pior matchup registrado (109 jogos) e o contrário direto do estilo de Mars, é o único da lista que desliga o combo físico inteiro com root e disarm ao mesmo tempo.
- janelas: Treant não farma (301 gpm, 7 last hit aos 10min), só fecha Arcane Boots aos 12:00 (pro_dados/treant.json), e nem precisa de mais que isso, o impacto dele é todo em controle desde o nível 1 (Leech Seed) e consolida no 6 (Overgrowth, root em área por 3 a 5s, cd de 90 a 110s). A janela ruim pra Mars é justamente depois do nível 6 dele, quando qualquer tentativa de Arena of Blood pode ser respondida com um root que trava o time inteiro, e ele só ganha Blink próprio bem mais tarde (26:24).
- o que ele faz com você: Leech Seed desarma Mars no auto-ataque, apagando o dano físico que é a principal fonte de dano dele além do Spear; Overgrowth root em área de 800 cancela a iniciação de Mars e ainda cura os aliados perto do Treant.
- o que você faz com ele: o Spear interrompe o Overgrowth se acertar o Treant durante a janela de lançamento; a Arena of Blood cerca ele antes de ele ter alcance de área pra plantar o Leech Seed em alguém.
- itens que viram: BKB de Mars não segura o Overgrowth, essa ult foi desenhada pra atravessar imunidade a feitiço (bkbpierce: Yes, constants_abilities.json), então BKB não é a resposta aqui; o root é dispelável (dispellable: Yes), então um item de dispel básico ou simplesmente iniciar antes do nível 6 do Treant estar pronto ajuda mais do que BKB.
- como jogar: não dependa só de auto-ataque contra um Treant com Leech Seed, ele desarma; force a luta antes do nível 6 dele sempre que possível, depois disso o Overgrowth muda o resultado da luta inteira e BKB não resolve.
- fonte: pro_dados/mars.json; pro_dados/treant.json; constants_abilities.json (mars_spear, treant_leech_seed, treant_overgrowth).

## Contra Chen (chen)
- placar: Mars venceu 27 de 72 partidas de pro (37,5%), segunda maior desvantagem com amostra válida. Fonte: pro_dados/mars.json.
- por que importa: outro resultado ruim pra Mars em pro (72 jogos), suporte de controle de criatura que ataca a lane dele de um ângulo sem resposta direta.
- janelas: Chen tem o menor farm pessoal da lista entre os suportes (382 gpm, 16 last hit aos 10min, mas isso já conta parte do farm das criaturas dele), e o spike é todo de composição de exército: Holy Persuasion (controla até 4 criaturas) desde cedo, Mekansm aos 15:48 (pro_dados/chen.json) pra sustentar o grupo, e Hand of God no nível 6, que cura todos os aliados do mapa.
- o que ele faz com você: Penitence marca Mars pra tomar mais dano físico e reduz a velocidade dele, facilitando o gank do exército de criaturas controladas; Hand of God apaga o dano que Mars conseguiu fazer na luta, curando o time todo de volta de uma vez.
- o que você faz com ele: o Spear separa o Chen das criaturas controladas, que ficam perto dele pra manter o controle; a Arena of Blood cerca ele e corta o alcance que ele precisa pra reforçar o grupo.
- itens que viram: BKB de Mars segura Penitence (bkbpierce: No); não existe item que anule Hand of God (bkbpierce: Yes, ou seja atravessa qualquer imunidade), a resposta real é matar o time inimigo rápido o bastante pra que o heal não compense, ou guardar o combo de iniciação pra depois da ult dele já ter sido gasta.
- como jogar: identifique se o Chen já gastou Hand of God antes de comprometer o combo completo de Mars numa luta; separe ele do exército de criaturas com o Spear antes de focar o resto do time.
- fonte: pro_dados/mars.json; pro_dados/chen.json; constants_abilities.json (mars_spear, chen_penitence, chen_holy_persuasion, chen_hand_of_god).

## Contra Tiny (tiny)
- placar: Mars venceu 137 de 314 partidas de pro (43,6%). Fonte: pro_dados/mars.json.
- por que importa: aparece bastante no banco de pro contra Mars (314 jogos) e é outro hard carry que raramente compartilha lane com ele (Tiny costuma ir mid ou safelane), mas surge demais em partida contra Mars pra ficar de fora, então entra na lista mesmo sem confronto de lane direto.
- janelas: Tiny farma bem (514 gpm, 44 last hit aos 10min, nível final 20) e o combo clássico dele (Avalanche seguido de Toss) já funciona desde cedo. O spike de verdade vem do nível 6 (Grow, sem cooldown, aumenta dano, armadura e o poder do Toss) somado ao próprio Blink (15:54), que sai praticamente junto do de Mars (15:12). Como os dois chegam no Blink quase na mesma hora, o confronto costuma ser decidido por quem inicia o combo primeiro.
- o que ele faz com você: Avalanche (raio de até 370, stun de 0,3s por pedra) seguido de Toss (desloca Mars pra longe, 90 a 360 de dano) tira Mars da luta fisicamente, arremessando ele pra outro lugar do mapa; depois do Grow, o auto-ataque de Tiny fica pesado o bastante pra furar parte do bloqueio do Bulwark mesmo de frente.
- o que você faz com ele: o Spear interrompe o cast de Avalanche se acertar o Tiny durante a janela de lançamento; a Arena of Blood cerca ele antes do combo Avalanche+Toss sair, e mesmo que ele use o Toss pra jogar um aliado de Mars pra dentro da arena, isso ainda deixa o alvo cercado pelas lanças.
- itens que viram: BKB de Mars segura o stun do Avalanche, mas não impede o Toss de empurrar fisicamente, é deslocamento forçado, não um debuff clássico, então ainda acontece mesmo com BKB ativo (bkbpierce: None/forçado, constants_abilities.json); o Aghanim's Shard de Mars (rastro de fogo) continua causando dano em Tiny mesmo depois dele ser jogado pra longe pelo próprio combo.
- como jogar: não force a luta sem saber se o Tiny já tem o combo Avalanche+Toss pronto, ser jogado pra fora da luta custa caro pro plano de Mars; depois do próprio Blink, tente iniciar primeiro, Mars ganha a corrida de iniciação com o Spear a distância antes do Tiny chegar perto.
- fonte: pro_dados/mars.json; pro_dados/tiny.json; constants_abilities.json (mars_spear, mars_bulwark, tiny_avalanche, tiny_toss, tiny_grow); aghs_desc.
