---
id: ficha-night_stalker
titulo: "Night Stalker"
heroi: Night Stalker
patch: 7.41
posicoes: [3, 2]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-tier1/data/draft.csv
- dota-roshan-solo/data/solos.json
- dota-roshan-solo/data/resumo_por_heroi.json
- https://dota2protracker.com/builds/night-stalker-pos3-1
- https://dota2protracker.com/builds/night-stalker-pos2-1
- https://dota2protracker.com/hero/Night+Stalker
- https://api.opendota.com/api/heroes/60/itemPopularity
- https://api.opendota.com/api/heroes/60/matchups
---

## Resumo

Night Stalker é Carry/Initiator/Durable/Disabler/Nuker de força, corpo a corpo (heroes.json), e todo o kit gira em volta do relógio: Hunter in the Night (innata) dá +24% de velocidade de movimento e +38 de velocidade de ataque de noite, Void atordoa e dura mais à noite, Crippling Fear silencia mais tempo à noite, e a ultimate Dark Ascension (nome antigo: Darkness) força escuridão instantânea por 30s com voo e dano bônus quando ele quer essa vantagem de dia (constants_abilities.json, constants_hero_abilities.json). No draft pro de 2026 ele é majoritariamente offlane: 26 dos 38 picks viraram pos 3 contra 10 pos 2 e só 2 fora dessas duas (draft.csv). No dota2protracker a build de pos 3 (pacote "Blink/BKB/Echo") tem 44% de vitória em 80 partidas e a de pos 2 (mid, pacote "Core Mid") tem 68% em 22: a diferença de item entre as duas é real: a offlane puxa pra Echo Sabre/Harpoon e Soul Ring, a mid pra Hand of Midas e Swift Blink.

## Pos 3 (offlane)

- quando pegar: offlane é de longe a posição mais jogada dele no draft pro atual (26 de 38 picks em 2026, draft.csv). Pegue quando não tiver que segurar a lane sozinho contra silêncio/stun pesado logo de saída, porque de dia o Void não atordoa e a Crippling Fear dura só 3s: o herói precisa sobreviver até a noite ou até o nível 6 pra virar o jogo com Dark Ascension.
- itens iniciais: gauntlets, branches, tango, circlet (os 4 itens iniciais mais comprados pelo herói no agregado público do OpenDota, sem corte por posição: fonte: itemPopularity, start_game_items)

### Build

#### Bracer (bracer)
- minuto: 3
- porque: vida e regen baratos pra sobreviver ao trade de dia na offlane sem gastar meia-build num item.
- detalhe: 505 de custo, +5 força, +2 agilidade, +2 inteligência, +50 de vida, +0,75 de regeneração.
- fonte: dota2protracker.com/builds/night-stalker-pos3-1; items.json

#### Magic Wand (magic_wand)
- minuto: 6
- porque: reserva de vida e mana que carrega com os feitiços que o inimigo gasta tentando te empurrar da lane.
- detalhe: carrega até 20 cargas conforme feitiços são lançados perto; ativa pra um burst sem esperar regen natural.
- fonte: dota2protracker.com/builds/night-stalker-pos3-1; items.json

#### Phase Boots (phase_boots)
- minuto: 7
- porque: atravessa unidade pra alcançar quem recua do Void e dá dano pra ganhar o 1x1.
- detalhe: 1450 de custo, +50 de velocidade permanente; ativar dá +20 extra (10 se for ranged) e atravessa unidade por 3s; +18 de dano corpo a corpo, +4 de armadura. De noite o Hunter in the Night já dá +24% de velocidade; o Phase serve mais pra furar a frente do inimigo do que pra correr.
- fonte: dota2protracker.com/builds/night-stalker-pos3-1; items.json

#### Soul Ring (soul_ring)
- porque: converte vida (que o herói tem de sobra, sendo força) em mana pra espamar Void e manter a Crippling Fear ligada sem recall.
- detalhe: 805 de custo, +6 força, +2 armadura, 170 de mana por 10s. Faz parte do pacote "Blink/BKB/Echo" listado pra pos 3.
- fonte: dota2protracker.com/builds/night-stalker-pos3-1

#### Echo Sabre (echo_sabre)
- minuto: 15
- porque: dano, força e regen de mana, e o Echo Strike ataca duas vezes com 100% de lentidão no primeiro golpe.
- detalhe: 2700 de custo (Ogre Axe + Broadsword + Void Stone). Vira Harpoon mais pra frente da build.
- combo: Echo Strike (100% de lentidão por 0,8s) trava o alvo dentro do raio de 375 da Crippling Fear, mantendo o DoT/silêncio em área batendo nele.
- fonte: dota2protracker.com/builds/night-stalker-pos3-1; items.json

#### Blink Dagger (blink)
- minuto: 16
- porque: fecha a distância pro Void (alvo único, curto alcance) sem expor o corpo correndo até o inimigo.
- detalhe: 2250 de custo, alcance 1200 (960 se tomou dano de herói ou Roshan nos últimos 3s).
- combo: Blink em cima do alvo e Dark Ascension na sequência (nível 6+) força escuridão instantânea, com voo e dano bônus, mesmo de dia: não depende do relógio do jogo.
- fonte: dota2protracker.com/builds/night-stalker-pos3-1; items.json; constants_abilities.json

#### Black King Bar (black_king_bar)
- minuto: 27
- porque: imunidade a feitiço pra sobreviver ao hard disable que desliga o combo antes dele começar.
- detalhe: 4050 de custo (Mithril Hammer + Ogre Axe), +10 força, +24 dano, 9/8/7s de imunidade conforme o nível, dispel básico ao ativar, 60% de redução de dano mágico mesmo durante a imunidade.
- contra: na amostra pública do OpenDota, confrontos com disable que desliga o combo de Void/Crippling Fear antes dele acontecer batem contra o herói: Rubick (43,4% de vitória em 122 partidas), Shadow Shaman (44,6% em 56), Lion (48,1% em 104) e Doom (47,1% em 51). Não são os piores matchups do herói na amostra (Batrider e Undying, por exemplo, ficam piores), mas a lógica de counter por disable/silêncio aparece nos quatro.
- fonte: api.opendota.com/heroes/60/matchups; items.json

### Situacionais

#### Harpoon (harpoon)
- porque: resgata o combo quando o alvo foge do Void de dia, puxando de volta pro alcance de ataque e da Crippling Fear.
- contra: herói que tenta abrir distância depois de levar o Void (que só dá 50% de lentidão, sem atordoar de dia) em vez de ficar pra trocar.
- detalhe: 4700 de custo (Echo Sabre + Diadem). Active "Draw Forth" puxa até 35% da distância entre os dois, alcance de 700 contra herói; mantém o Echo Strike (duas batidas, agora com 1s de lentidão).
- combo: Harpoon puxa, Void atordoa (de noite) e reduz velocidade (de dia), Crippling Fear silencia em área: a sequência tranca quem tentou fugir do combo.
- nota: upgrade natural do Echo Sabre pelo custo/mecânica (items.json); não apareceu nas partidas amostradas pelo build pos3-1 do dota2protracker, então é inferência de item e não pick empírico confirmado.
- fonte: items.json

#### Skull Basher (basher)
- porque: garante o atordoamento físico que falta de dia, prendendo quem escaparia do simples slow do Void.
- contra: inimigo com mobilidade/dispel que escapa ou limpa o Void de dia, quando ele não atordoa.
- detalhe: 2875 de custo, 25% de chance corpo a corpo de atordoar 1,2s e causar 100 de dano extra.
- combo: o stun físico do Basher tapa de dia o buraco que o Void só preenche de noite (mini-stun só em horário noturno, constants_abilities.json).
- fonte: dota2protracker.com/builds/night-stalker-pos3-1; items.json; constants_abilities.json

#### Assault Cuirass (assault)
- porque: a aura de -5 de armadura no inimigo multiplica o dano físico do time todo, compensando a falta de burst do herói.
- contra: times que fecham com dano físico de auto-ataque sustentado em vez de burst mágico: a armadura e a aura negativa no inimigo pagam mais contra ataque básico repetido.
- detalhe: 5125 de custo, +30 de velocidade de ataque e +10 de armadura pra você, aura de +5/-5 de armadura em 1200 de raio.
- fonte: dota2protracker.com/builds/night-stalker-pos3-1; items.json

#### Hand of Midas (hand_of_midas)
- porque: acelera farm e nível pra chegar na primeira janela de Dark Ascension com vantagem, convertendo folga de lane em power spike.
- contra: jogos sem contato na offlane (lane sem trade, sem pressão do inimigo): nessas janelas farm e nível valem mais que item de combate imediato.
- detalhe: 2200 de custo, mata creep neutro ou de lane por 160 de ouro bônus, +35 de velocidade de ataque.
- fonte: dota2protracker.com/builds/night-stalker-pos3-1; items.json; constants_abilities.json

## Pos 2 (mid)

- quando pegar: segunda posição mais jogada no draft pro atual, mas com amostra bem menor que a offlane (10 de 38 picks em 2026, draft.csv). A build de mid do dota2protracker (pacote "Core Mid") tem 68% de vitória em 22 partidas, puxando pra Hand of Midas e farm rápido em vez do combo de silêncio que a offlane monta primeiro.
- itens iniciais: gauntlets, gauntlets, branches, branches, branches, circlet, tango (mais Observer Ward opcional). Abertura mais escolhida pela amostra de pos 2 do dota2protracker, 83% de vitória em 6 partidas.

### Build

#### Bracer (bracer)
- minuto: 2
- porque: primeiro item de quase toda partida de mid: vida e regen baratos pra sobreviver ao trade inicial.
- detalhe: comprado em 91% das partidas da amostra de pos 2, com 70% de vitória.
- fonte: dota2protracker.com/builds/night-stalker-pos2-1

#### Magic Wand (magic_wand)
- porque: reserva de vida/mana de emergência contra o poke do mid rival.
- detalhe: mesma lógica da offlane, carrega com os feitiços gastos tentando te tirar da lane.
- fonte: dota2protracker.com/builds/night-stalker-pos2-1

#### Phase Boots (phase_boots)
- porque: fecha distância pro Void e dá dano pra ganhar o 1x1 do meio.
- detalhe: 1450 de custo, atravessa unidade, ajuda a alcançar quem recua.
- fonte: dota2protracker.com/builds/night-stalker-pos2-1

#### Hand of Midas (hand_of_midas)
- porque: puxa farm e nível rápido pra chegar na janela de noite com Dark Ascension pronto antes do inimigo se organizar.
- detalhe: 2200 de custo, mata creep por 160 de ouro bônus, +35 de velocidade de ataque; sem recarga alta, então farma enquanto limpa a lane.
- combo: Midas cedo mais Dark Ascension no nível 6: nível e ouro adiantados fazem a primeira janela de escuridão forçada valer um gank, não só uma troca de lane.
- fonte: dota2protracker.com/builds/night-stalker-pos2-1

#### Blink Dagger (blink)
- minuto: 17
- porque: mesma lógica da offlane: fecha o Void sem expor o corpo antes do combo.
- detalhe: 2250 de custo, alcance 1200, recarga 15s.
- combo: Blink mais Dark Ascension no mesmo pacote de ações, útil pra ganks de mid antes da luta de 5 formar.
- fonte: dota2protracker.com/builds/night-stalker-pos2-1; items.json

### Situacionais

#### Power Treads (power_treads)
- porque: troca a mobilidade do Phase por ataque puro quando a lane não exige perseguir nem fugir.
- contra: jogos sem necessidade de fechar distância (lane fácil, inimigo não fugindo): nessas partidas o Treads dá mais ataque do que o Phase daria de mobilidade.
- detalhe: 1400 de custo, +25 de velocidade de ataque e +10 no atributo trocado, sem o utility de atravessar unidade.
- fonte: dota2protracker.com/builds/night-stalker-pos2-1; items.json

#### Soul Ring (soul_ring)
- porque: converte vida em mana barata pra manter Void e Crippling Fear ativos sem depender de recall.
- contra: jogos em que o time inimigo obriga recast seguido de Void e Crippling Fear sem tempo de recall pra mana.
- detalhe: 805 de custo, converte vida em 170 de mana por 10s. Mesma lógica da versão offlane.
- fonte: dota2protracker.com/builds/night-stalker-pos2-1; items.json

#### Skull Basher (basher)
- porque: garante o atordoamento físico que falta de dia, tapando o buraco de controle que o Void só cobre à noite.
- contra: inimigo com mobilidade alta que escapa do slow do Void de dia (sem o mini-stun noturno).
- detalhe: 2875 de custo, 25% de chance corpo a corpo de atordoar 1,2s. Mesmo papel da versão offlane: tapa o buraco de controle que falta de dia.
- fonte: dota2protracker.com/builds/night-stalker-pos2-1; items.json; constants_abilities.json

#### Swift Blink (swift_blink)
- contra: jogos que passam dos 35-40 min, quando o Blink Dagger comum (recarga de 15s, sem bônus) já não garante reengajar contra time organizado.
- detalhe: 6800 de custo, mesmo alcance do Blink Dagger (1200), +25 de agilidade fixo e +35 temporário por 6s após usar.
- fonte: dota2protracker.com/builds/night-stalker-pos2-1; items.json

## Roshan

Sem dado de Roshan solo. Nos replays locais (solos.json) Night Stalker aparece uma única vez matando Roshan em toda a base, classificado como kill de time, não solo, e ele não está entre os heróis cobertos pelo resumo de solo do projeto (resumo_por_heroi.json).
