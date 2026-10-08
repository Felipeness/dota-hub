---
id: confrontos-oracle
heroi: Oracle
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/oracle.json
- dota-hub-conteudo-novo/pro_dados/disruptor.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/mars.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/pudge.json
- dota-hub-conteudo-novo/pro_dados/batrider.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/puck.json
- dota-hub-conteudo-novo/pro_dados/silencer.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/windrunner.json
- dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- dota-hub-conteudo-novo/confrontos/batrider.md
- dota-hub-conteudo-novo/confrontos/hoodwink.md
- dota-hub-conteudo-novo/confrontos/dragon_knight.md
- dota-hub-conteudo-novo/confrontos/nevermore.md
- https://api.opendota.com/api/constants/aghs_desc
- https://dotacoach.gg/en/heroes/counters/oracle
- https://dotacoach.gg/en/heroes/counters/mars
- https://dotacoach.gg/en/heroes/counters/shadow-fiend
- https://dotacoach.gg/en/heroes/counters/pudge
---

## Como essa lista foi montada

14 oponentes, escolhidos em 3 grupos (Oracle é suporte, não carry, então a regra 4 do pedido original não se aplica):

1. **Mais jogos de pro contra o Oracle** (top 6 de `pro_dados/oracle.json`, campo `confrontos`): Disruptor, Shadow Fiend, Jakiro, Tiny, Mars, Rubick.
2. **Mesma posição principal (suporte 4/5), alto volume em pro**, além dos que já entraram no grupo 1: Pudge, Batrider, Snapfire, Silencer, Hoodwink.
3. **Maior vantagem e maior desvantagem do Oracle (30+ jogos)**: vantagem, Puck (71,4%), Batrider (64,4%, já contado no grupo 2), Silencer (62,5%, já contado no grupo 2); desvantagem, Hoodwink (31,8%, já contado no grupo 2), Windranger (34,1%), Dragon Knight (38,9%).

Puck e Windranger entram mesmo sem dividir lane direta com um suporte de posição 5: Puck é mid puro e Windranger hoje é jogada majoritariamente como carry (pos 1) no pro 7.41, não como a suporte clássica. É o mesmo caso do exemplo do pedido (Alchemist contra Morphling), duas peças que não se cruzam na rota, mas cujo poder relativo (quem caça quem, quem farma mais rápido, que magia vira o duelo) decide o jogo de qualquer forma.

Os placares abaixo são sempre da perspectiva do Oracle (vitórias dele no confronto), fonte `pro_dados/oracle.json`, com os números cruzados contra os arquivos de confronto já publicados de Shadow Fiend, Batrider, Hoodwink e Dragon Knight quando existem (todos batem exatamente com o esperado).

## Contra Disruptor (disruptor)

- placar: 29 vitórias em 59 partidas de pro, 49,2% (fonte pro_dados/oracle.json, matchups do OpenDota, 7.40+7.41).
- por que importa: maior volume de jogos pro de toda a lista (59) e mesma função exata, os dois competem pelo mesmo slot de suporte duro de área no draft.
- janelas: as curvas de item são quase idênticas, Arcane Boots Disruptor 11,4 min (p25 9,8) contra Oracle 11,7 (p25 9,8), e os dois fecham Blink praticamente juntos (Disruptor 24,0, Oracle 25,0). Nenhum dos dois tem spike de dano cedo; o confronto se decide inteiramente em quem forma a própria área de controle primeiro numa luta, não em item.
- o que ele faz com você: Kinetic Field (raio 350, formação de 1s) cria uma parede que você não atravessa andando; Static Storm (raio 550, 6s, 20 pulsos, até 350 de dano no nível 3) silencia todos os inimigos dentro da área pela duração inteira, travando False Promise, Fortune's End, Fate's Edict e Purifying Flames ao mesmo tempo se você estiver presa lá dentro.
- o que você faz com ele: Fortune's End (raio 350, dispel básico) purga buffs do Disruptor e o enraíza por até 2,75s antes dele formar a gaiola; Fate's Edict dá 100% de resistência mágica a um aliado preso na Static Storm, zerando o dano dos 20 pulsos mesmo sem remover o silêncio em si.
- itens que viram: nenhum dos dois pierce BKB nessas duas magias, então Black King Bar de qualquer lado anula a interação principal; Aghanim's Scepter do Disruptor (34,9 min, item muito tardio) faz Static Storm silenciar também uso de item, cortando Glimmer Cape ou Force Staff como saída de quem estiver preso.
- como jogar: não ande perto do raio de 350 da Kinetic Field sem saber se o Disruptor já tem mana pra Static Storm. Se ele formar a gaiola em cima de você, gaste Fortune's End nele antes do silêncio fechar; depois dos 25 min, quem bate o Blink primeiro ganha a troca de posicionamento.
- fonte: pro_dados/oracle.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_kinetic_field, disruptor_static_storm, oracle_fortunes_end, oracle_fates_edict).

## Contra Shadow Fiend (nevermore)

- placar: 23 vitórias em 57 partidas de pro, 40,4% (conferido contra confrontos/nevermore.md: 34V/57, 59,6% pro Shadow Fiend).
- por que importa: 2º maior volume de jogos pro da lista (57) e o pior resultado entre os confrontos de alto volume; dotacoach.gg lista Oracle na seção "Good against" do Shadow Fiend, citando que "Requiem can burst Oracle before he can use Fate's Edict or False Promise in time, especially during a smoke or blink initiation".
- janelas: Shadow Fiend fecha Power Treads aos 5,9 min, Yasha aos 13,3 e Dragon Lance aos 14,0, puxando dano e alcance rápido; Black King Bar dele só fecha aos 25,2. Oracle só tem Arcane Boots pronto aos 11,7 e nenhum item de dano, sua curva é toda em nível de habilidade. Dos 12 aos 25 min o Shadow Fiend cresce em dano muito mais rápido do que Oracle em utilidade; depois dos 25, ele já tem BKB furando disable físico.
- o que ele faz com você: Shadowraze (85 a 280 de dano, raio 250, sem precisar mirar unidade, recarga de 3s por raze individual) acerta a 200 de distância antes de reagir; Requiem of Souls (raio 1000, até 20 linhas de energia conforme almas capturadas) amedronta e reduz resistência mágica e velocidade por até 2,15s, podendo acertar você se aproximando pra curar um aliado.
- o que você faz com ele: Fortune's End tira os buffs do Shadow Fiend (inclusive o bônus de Frenzy) e o enraíza por até 2,75s, interrompendo o avanço; Fate's Edict dá 100% de resistência MÁGICA (não física) num aliado focado, o que anula Shadowraze e Requiem, os dois dano mágico, mas não impede o auto-attack dele turbinado por Frenzy.
- itens que viram: Black King Bar do Shadow Fiend (25,2 min) bloqueia o root de Fortune's End a partir desse ponto (bkbpierce: Não); Fate's Edict continua funcionando normal depois, porque é resistência, não disable. False Promise atravessa BKB (bkbpierce: Sim) e ainda salva um aliado do combo final, mesmo com o item ativo.
- como jogar: gaste Fate's Edict no alvo que o Shadow Fiend está claramente mirando, não em você mesma, o dano dele é quase todo mágico. Depois dos 25 min, trate-o como ameaça de burst instantâneo: guarde False Promise pra quem ele focar primeiro, não pra reagir depois do combo já ter acontecido.
- fonte: pro_dados/oracle.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, nevermore_frenzy, oracle_fortunes_end, oracle_fates_edict, oracle_false_promise); confrontos/nevermore.md; https://dotacoach.gg/en/heroes/counters/shadow-fiend.

## Contra Jakiro (jakiro)

- placar: 25 vitórias em 57 partidas de pro, 43,9%.
- por que importa: 3º maior volume de jogos pro (57) e mesma função exata, os dois disputam o mesmo papel de suporte de controle em área.
- janelas: as curvas de boot são quase idênticas, Arcane Boots Jakiro 11,7 min contra Oracle 11,7, e os dois compram Glimmer Cape perto (Jakiro 22,8, Oracle 24,6). Nenhum tem spike de item cedo; o confronto se decide em nível de habilidade, sobretudo a partir do nível 6 quando Macropyre (10s de duração, 100 a 200 de dano por segundo) entra em jogo.
- o que ele faz com você: Dual Breath queima e desacelera em linha (slow de movimento e ataque); Ice Path cria um trilho de gelo que estuna e dói em quem toca; Macropyre persegue uma faixa longa e pode acertar você tentando curar um aliado preso ali dentro.
- o que você faz com ele: Fortune's End (raio 350) purga buffs de Jakiro e o enraíza antes dele reposicionar Ice Path; Fate's Edict dá resistência mágica total contra o próprio Macropyre (dano mágico) num aliado pego na faixa de fogo.
- itens que viram: Aghanim's Shard de Jakiro troca Liquid Frost pra custo zero de mana e sem cooldown compartilhado com Liquid Fire, deixando ele spammar controle sem gastar mana, o que aumenta a pressão constante contra Oracle gastando mana pra curar.
- como jogar: não fique parada perto do trilho de Ice Path esperando pra curar, o stun de até 2s te prende se a Macropyre vier logo depois. Gaste Fortune's End em Jakiro assim que ele começar a canalizar Macropyre perto do seu time.
- fonte: pro_dados/oracle.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre, jakiro_ice_path, jakiro_dual_breath, oracle_fortunes_end, oracle_fates_edict); aghs_desc (jakiro shard).

## Contra Tiny (tiny)

- placar: 27 vitórias em 53 partidas de pro, 50,9%, praticamente 50/50.
- por que importa: 4º maior volume de jogos pro (53); Tiny é carry puro que raramente compartilha lane com um suporte pos5, mas aparece tanto no banco de confrontos que vale saber o power spike dele mesmo sem duelo direto, o mesmo tipo de caso citado no pedido original (dois heróis que não se cruzam na rota, mas cujo poder relativo decide o jogo).
- janelas: Tiny sobe Blink muito cedo pra um core, 15,9 min (p25 13,6), bem antes de Oracle terminar Arcane Boots e wards; Grow é passivo e escala em marcos de nível (10, 16, 22, 25), tornando ele cada vez mais perigoso em dano e armadura sem precisar de item. Black King Bar dele só fecha aos 26,7, então até lá suas magias de proteção ainda furam.
- o que ele faz com você: Toss (pega a unidade mais próxima num raio de 300, ally ou inimiga, e lança) seguido de Avalanche (estoura rochas na área de aterrissagem, dano e stun contínuos) é o combo clássico de abate; se ele jogar um aliado seu, ele vira o próprio projétil do combo.
- o que você faz com ele: False Promise salva o alvo lançado do combo inteiro, atrasando o dano e curando depois (dispel forte no cast inicial, remove a maior parte dos disables no momento em que você lança); Fortune's End enraíza Tiny de volta, cancelando o seguimento dele depois do combo.
- itens que viram: o Blink antecipado de Tiny (15,9 min) ameaça de longe muito antes de Oracle ter Blink próprio (25,0 min); até lá, a única resposta real é reativa, não proativa.
- como jogar: trate todo Tiny com Blink como ameaça de pick-off instantâneo em qualquer aliado isolado a partir dos 15 min. Guarde False Promise pro alvo mais provável do combo, não gaste cedo em harass de lane.
- fonte: pro_dados/oracle.json; pro_dados/tiny.json; constants_abilities.json (tiny_toss, tiny_avalanche, tiny_grow, oracle_false_promise, oracle_fortunes_end).

## Contra Mars (mars)

- placar: 31 vitórias em 53 partidas de pro, 58,5%.
- por que importa: maior vantagem da lista com volume alto (53 jogos) e confirmado por fonte externa: dotacoach.gg lista Oracle na seção "Bad against" do próprio Mars, com o texto "Oracle can save allies from lethal damage inside Arena of Blood using False Promise, negating Mars' burst potential. Additionally, Fate's Edict can disarm Mars, lowering his threat in fights, or grant magic immunity to teammates against Spear of Mars and Arena of Blood."
- janelas: Mars sobe Blink aos 15,2 min, Aghanim's Shard aos 21,5 (Spear passa a empalar 2 heróis) e Black King Bar aos 26,5. Até os 15 min ele não tem Spear fácil de acertar de longe; depois disso, toda luta que ele fechar com Arena of Blood (raio 550, 5,5s) é quando False Promise decide quem sobrevive lá dentro.
- o que ele faz com você: Spear of Mars (dano 100 a 325, empala e estuna 1,3 a 2,2s) te prende contra parede, árvore ou prédio se acertar; Arena of Blood cria uma arena que bloqueia movimento e ataque de quem está preso dentro, com guerreiros batendo em quem fica na borda.
- o que você faz com ele: False Promise no alvo preso na Arena anula o burst inteiro de Mars enquanto durar, atrasando o dano e curando depois; Fate's Edict desarma Mars (zera o auto-attack dele) e dá imunidade mágica total contra o dano do Spear e dos guerreiros da Arena.
- itens que viram: Aghanim's Shard de Mars (21,5 min) deixa Spear empalar 2 heróis ao mesmo tempo, dobrando o risco de uma iniciação em grupo; Fate's Edict num dos dois alvos ainda bloqueia o dano mágico residual, mas não desfaz o stun físico do empalamento (Spear exige dispel forte, Fate's Edict é resistência, não remoção).
- como jogar: não force troca dentro da Arena of Blood sem já ter Fate's Edict ou False Promise de prontidão em alguém. Trate o Blink de Mars (15,2 min) como o gatilho real da ameaça dele, antes disso ele só ameaça com Spear de alcance fixo.
- fonte: pro_dados/oracle.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_arena_of_blood, oracle_false_promise, oracle_fates_edict); aghs_desc (mars shard); https://dotacoach.gg/en/heroes/counters/mars.

## Contra Rubick (rubick)

- placar: 22 vitórias em 51 partidas de pro, 43,1%.
- por que importa: fecha o grupo dos 6 com mais jogos de pro (51) e é a interação mecânica mais rara da lista: Rubick pode roubar a sua própria magia e usá-la contra você.
- janelas: Rubick sobe Arcane Boots aos 10,3 min (perto de Oracle, 11,7), Blink aos 21,6 (antes do de Oracle, 25,0) e Aghanim's Scepter aos 27,4 (Spell Steal passa a roubar 2 magias de uma vez e ganha mais alcance). A diferença real não é de item, é de iniciativa: quem lança a própria magia perto do outro primeiro corre risco.
- o que ele faz com você: Spell Steal aprende a última magia lançada por um herói inimigo e Rubick pode usá-la por 180 a 300s ou até morrer; se ele estiver perto quando você lançar False Promise ou Fortune's End, ele rouba exatamente essa magia e pode se salvar com ela depois.
- o que você faz com ele: Fortune's End em Rubick (raio 350) purga qualquer buff que ele tenha ativo e o enraíza por até 2,75s, interrompendo o avanço antes dele fechar Telekinesis (levanta e estuna área ao cair); se ele acabou de roubar uma magia sua, Fate's Edict continua funcionando normal nele, o roubo não dá proteção contra as outras.
- itens que viram: Aghanim's Scepter de Rubick (27,4 min) aumenta o alcance de Spell Steal e deixa roubar 2 magias ao mesmo tempo, dobrando o risco de perder justo a magia que você mais precisa numa luta.
- como jogar: lance suas magias de longe quando ele estiver visível, pra evitar o roubo. Se perceber que ele já guardou uma magia sua, mude o plano de luta pra não depender dela.
- fonte: pro_dados/oracle.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis, rubick_fade_bolt, oracle_fortunes_end, oracle_fates_edict); aghs_desc (rubick scepter).

## Contra Pudge (pudge)

- placar: 26 vitórias em 48 partidas de pro, 54,2%.
- por que importa: 7º em volume de jogos pro (48) e função próxima (suporte de roaming ou offlane de controle), disputando espaço parecido no draft mesmo sem ser idêntico.
- janelas: Pudge sobe Aghanim's Scepter muito cedo pra um item lendário, mediana 17,2 min (Rot passa a ter mais raio e dano e reduz 20% da regeneração de vida de quem está perto). Oracle só termina Arcane Boots aos 11,7 e não tem item de dano; dos 10 aos 20 min é a janela de maior risco, Pudge já ameaça Hook de longe enquanto Oracle ainda está comprando wards.
- o que ele faz com você: Meat Hook (dano 150 a 360, alcance longo) puxa você de qualquer lugar visível; Dismember (canalizado, dano escalando com a Força dele mesmo, cura ele pelo total causado) te prende enquanto come; Rot (dano constante em área, também machuca o próprio Pudge) pune quem fica perto tentando curar.
- o que você faz com ele: False Promise, que é dispel forte no cast inicial, pode quebrar o canal de Dismember se lançada em cima do alvo preso bem no começo (Dismember pede dispel forte pra ser removido, Fortune's End sozinha não dá conta); Fate's Edict dá 100% de resistência mágica num aliado hookado, zerando o dano de Rot (que é mágico) enquanto ele ainda está sendo puxado.
- itens que viram: Aghanim's Scepter de Pudge (17,2 min, muito antecipado) aumenta o raio e o dano de Rot e corta 20% da regeneração de vida de quem está perto, tornando ficar parada perto dele bem mais caro pra Oracle do que o normal.
- como jogar: não ande no alcance de Hook sem visão do Pudge. Se ele hookar um aliado, decida rápido entre False Promise (pra quebrar o Dismember logo no início) ou Fate's Edict (pra anular o Rot durante o puxão), não dá pra fazer os dois no mesmo segundo.
- fonte: pro_dados/oracle.json; pro_dados/pudge.json; constants_abilities.json (pudge_meat_hook, pudge_dismember, pudge_rot, oracle_false_promise, oracle_fortunes_end, oracle_fates_edict); aghs_desc (pudge scepter); https://dotacoach.gg/en/heroes/counters/pudge.

## Contra Batrider (batrider)

- placar: 29 vitórias em 45 partidas de pro, 64,4% (conferido contra confrontos/batrider.md: 16V/45, 35,6% pro Batrider, 2ª maior desvantagem dele na própria lista).
- por que importa: maior vantagem confirmada entre os confrontos de mesma função (suporte ou roaming, pos 3/4), e o próprio arquivo de confrontos do Batrider já cita Oracle como um dos piores matchups dele.
- janelas: Oracle não depende de item pra ameaçar Batrider, Fate's Edict e False Promise estão disponíveis desde o nível 1 e não escalam com ouro. A curva do confronto é toda sobre nível de habilidade, não sobre power spike de item.
- o que ele faz com você: Flaming Lasso (alcance de cast curto, só 200 unidades) arrasta o alvo preso, que não pode se mover, atacar ou usar habilidades enquanto durar; só teleporte ou blink do próprio alvo quebra o laço, o que raramente está disponível a tempo.
- o que você faz com ele: False Promise represa todo o dano do alvo lassado por até 10s e atravessa Black King Bar (bkbpierce: Sim), segurando até o laço (2,25 a 3,25s) acabar sem o aliado morrer; Fate's Edict dá 100% de resistência mágica num aliado em risco, anulando quase todo o dano do kit dele, que é praticamente todo mágico (Firefly, Sticky Napalm, Flaming Lasso). Flaming Lasso em si só sai com dispel forte (dispellable: Strong Dispels Only), então Fortune's End sozinha não remove o laço.
- itens que viram: nenhum item resolve isso, é puramente as duas magias (False Promise e Fate's Edict) anulando o combo do Batrider no momento exato da troca.
- como jogar: confira se já gastou False Promise e Fate's Edict antes de se expor perto do Batrider. Se ele lassar alguém, solte False Promise no alvo preso assim que possível, não espere o combo terminar.
- fonte: pro_dados/oracle.json; pro_dados/batrider.json; constants_abilities.json (batrider_flaming_lasso, oracle_false_promise, oracle_fates_edict); confrontos/batrider.md (bloco "Contra Oracle").

## Contra Snapfire (snapfire)

- placar: 23 vitórias em 45 partidas de pro, 51,1%, praticamente 50/50.
- por que importa: função parecida (suporte ou iniciadora de pickoff) e volume relevante (45 jogos).
- janelas: Snapfire sobe Aghanim's Shard muito cedo pra um shard, mediana 16,9 min (Firesnap Cookie passa a curar o alvo e lançar um Mortimer Kiss extra), antes até do próprio Blink dela (20,7). Oracle só fecha Arcane Boots aos 11,7 e não tem spike de dano; dos 15 aos 20 min, Snapfire já ameaça pickoff enquanto Oracle ainda está em rotação de suporte puro.
- o que ele faz com você: Scatterblast (dano em cone, desacelera movimento e ataque) seguido de Firesnap Cookie (stun na área de aterrissagem) é o combo de abertura; Mortimer Kisses (barragem de 5,5s, 180 a 360 de dano por impacto, ela fica com giro reduzido e exposta o tempo todo) pode acertar você tentando curar de longe.
- o que você faz com ele: False Promise, dispel forte no cast inicial, cleana o stun de Firesnap Cookie se lançada a tempo no aliado atingido (a própria Firesnap exige dispel forte pra sair, Fortune's End sozinha não remove); Fate's Edict dá resistência mágica total contra Scatterblast e Mortimer Kisses, os dois mágicos.
- itens que viram: Aghanim's Shard dela (16,9 min) faz Firesnap Cookie curar o alvo e lançar um Mortimer Kiss extra na queda; interromper o combo com Fortune's End nela antes do cast tira esse bônus de cura e dano da jogada.
- como jogar: ataque Snapfire durante os 5,5s de Mortimer Kisses, ela fica praticamente parada e exposta. Guarde Fate's Edict pro aliado que ela já acertou com Scatterblast, o dano residual é mágico.
- fonte: pro_dados/oracle.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_firesnap_cookie, snapfire_mortimer_kisses, oracle_false_promise, oracle_fortunes_end, oracle_fates_edict); aghs_desc (snapfire shard).

## Contra Puck (puck)

- placar: 25 vitórias em 35 partidas de pro, 71,4%, maior vantagem de toda a lista.
- por que importa: maior vantagem percentual entre os confrontos com 30 ou mais jogos (71,4%), mesmo Puck sendo mid e não dividindo lane direta com o suporte.
- janelas: Puck sobe Blink aos 17,6 min (mediana baixa pra um mid) e Aghanim's Shard aos 22,5 (Phase Shift passa a atacar todo mundo no alcance). Black King Bar não aparece nos 30 itens mais comprados dela, ela depende de Phase Shift pra escapar, não de imunidade. Até os 17 min ela ainda não tem alcance total de Illusory Orb pra fugir de longe; depois disso é praticamente impossível prendê-la num 1x1.
- o que ele faz com você: Dream Coil (leash que estuna se o alvo esticar demais a corda, até 400 de dano ao romper) te prende perto de Puck; Waning Rift silencia em área ao redor dela, podendo te calar se você estiver perto tentando curar.
- o que você faz com ele: Fortune's End em Puck purga buffs dela e a enraíza, mas se ela já estiver canalizando Phase Shift (fica brevemente "immune from harm" pelo desc da própria habilidade) a magia simplesmente erra; Dream Coil em si é efeito indispelável (nem Fortune's End nem False Promise removem o leash de um aliado preso nele), a saída real é romper distância ou esperar passar.
- itens que viram: nenhum item seu força a saída de Phase Shift; o contador real é timing, gastar Fortune's End fora da janela do Phase Shift dela, não durante.
- como jogar: não gaste Fortune's End assim que ela agir, espere o Phase Shift ou o Illusory Orb acabar pra garantir que a magia conecta. Como ela depende do kit pra escapar, sua pressão é constante do nível 6 em diante.
- fonte: pro_dados/oracle.json; pro_dados/puck.json; constants_abilities.json (puck_dream_coil, puck_phase_shift, puck_waning_rift, oracle_fortunes_end); aghs_desc (puck shard).

## Contra Silencer (silencer)

- placar: 20 vitórias em 32 partidas de pro, 62,5%, amostra menor mas acima do piso de 30 jogos.
- por que importa: mesma função exata (suporte 4/5) e a interação mais perigosa da lista pro Oracle, Global Silence desliga o kit inteiro dela de uma vez.
- janelas: Silencer fecha Arcane Boots aos 11,9 min (quase igual a Oracle, 11,7). Nenhum dos dois tem spike de dano; o confronto é todo sobre nível de ultimate e timing de silêncio. A partir do nível 6, cada vez que Silencer acerta Global Silence no grupo é uma janela de 4,5 a 6s em que Oracle não existe como suporte ativo.
- o que ele faz com você: Global Silence não tem alvo, é mapa inteiro, "preventing enemy heroes and units on the map from casting spells" pelo próprio desc da habilidade, e desliga False Promise, Fortune's End, Fate's Edict e Purifying Flames ao mesmo tempo, em qualquer lugar do mapa; Last Word te cala e te marca se você castar qualquer coisa enquanto o efeito estiver ativo.
- o que você faz com ele: fora da janela da ultimate dele, Fortune's End purga buffs de Silencer e o enraíza; Fate's Edict desarma ele (tira o auto-attack) e dá resistência mágica total contra o próprio Last Word.
- itens que viram: Global Silence atravessa Black King Bar (bkbpierce: sim), então BKB não te salva do silêncio; e enquanto ela dura, você mesma não consegue se limpar sozinha, porque está impedida de castar qualquer coisa, só um dispel vindo de um aliado ajuda.
- como jogar: trate o cooldown da ultimate dele como o relógio real da luta, depois que ele gasta Global Silence sem te travar você tem uma janela livre pra jogar agressivo. Nunca guarde False Promise ou Fortune's End pra "depois" se ele está prestes a ultar, gaste antes.
- fonte: pro_dados/oracle.json; pro_dados/silencer.json; constants_abilities.json (silencer_global_silence, silencer_last_word, oracle_false_promise, oracle_fortunes_end, oracle_fates_edict).

## Contra Hoodwink (hoodwink)

- placar: 14 vitórias em 44 partidas de pro, 31,8%, maior desvantagem de toda a lista (conferido contra confrontos/hoodwink.md: 30V/44, 68,2% pra Hoodwink).
- por que importa: pior resultado de toda a amostra com volume grande (44 jogos) e mesma função exata (suporte 4/5), concorrendo pelo mesmo slot de pick.
- janelas: as curvas de item são quase idênticas, boots 5,8 min nos dois lados, Arcane Boots Hoodwink 12,2 contra Oracle 11,7. Como Oracle não tem disable de verdade (False Promise e Fate's Edict só protegem, não travam ninguém), o confronto é decidido inteiramente por quem lança o controle primeiro, e isso é quase sempre Hoodwink.
- o que ele faz com você: Bushwhack estoura perto de árvore e puxa quem está perto pra árvore mais próxima, zerando a visão do alvo por até 2,1s, sem resposta de disable da sua parte; Sharpshooter (alcance longo, dano crescente até o máximo, aplica Break) pune você tentando proteger um aliado de longe sem ter como fugir sozinha.
- o que você faz com ele: False Promise, dispel forte no cast inicial, remove o root e a cegueira de Bushwhack se lançada a tempo no aliado preso (Bushwhack pede dispel forte, Fortune's End sozinha não dá conta); Fate's Edict dá resistência mágica total contra o dano de Bushwhack e Sharpshooter, os dois mágicos, mas não remove o Break de Sharpshooter, que desativa itens e habilidades ativas por conta própria.
- itens que viram: se você se auto-castar Fate's Edict antes do Bushwhack dela, o componente de dano mágico é anulado, mas o stun físico da armadilha continua valendo normalmente.
- como jogar: ataque ou se proteja antes dela conseguir se posicionar perto de árvore com Bushwhack pronto. Como você não tem disable nenhum, qualquer troca direta 1x1 tende a ser dela, jogue em volta da árvore mais próxima, não do meio do mapa.
- fonte: pro_dados/oracle.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, oracle_false_promise, oracle_fates_edict); confrontos/hoodwink.md (bloco "Contra Oracle").

## Contra Windranger (windrunner)

- placar: 14 vitórias em 41 partidas de pro, 34,1%, 2ª maior desvantagem da lista.
- por que importa: no 7.41, em pro ela tem perfil de carry, 492 gpm e 36 last hits aos 10 minutos na mediana (partidas pro 7.40-7.41, OpenDota), bem acima do padrão de suporte, então o confronto real é suporte contra right-clicker puro, não suporte contra suporte.
- janelas: Windranger sobe itens de ataque cedo pra right-click, Hyperstone aos 17,4 min, Mjollnir aos 18,3, Black King Bar aos 24,4. Oracle não tem item de dano pra competir, a curva dela de carry supera a de utilidade do Oracle a partir dos 18 min.
- o que ele faz com você: Windrun dá 100% de evasão a ataques físicos por 3 a 6s (não bloqueia dano mágico, pelo próprio desc "adds evasion from all physical attacks"), te deixa sem como puni-la com auto-attack, mas não protege contra Fortune's End nem Purifying Flames, os dois mágicos; Shackleshot prende um aliado numa árvore ou unidade próxima, abrindo o combo de Focus Fire.
- o que você faz com ele: Fortune's End dispela Windrun (dispellable: Sim, pelas constantes do patch) e enraíza Windranger, cortando o escape dela; Fate's Edict dá resistência mágica total contra Powershot, mas o próprio Focus Fire é dano físico de ataque, então a resistência mágica sozinha não segura o right-click dela.
- itens que viram: Black King Bar de Windranger (24,4 min) bloqueia o root de Fortune's End a partir desse ponto; antes disso, qualquer dispel seu em cima dela ainda funciona normal.
- como jogar: pressione Windranger antes dos 24 min, antes do BKB fechar. Depois disso, trate-a como right-clicker puro e jogue em volta de Focus Fire, não tente disable direto nela.
- fonte: pro_dados/oracle.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_windrun, windrunner_shackleshot, windrunner_focusfire, oracle_fortunes_end, oracle_fates_edict).

## Contra Dragon Knight (dragon_knight)

- placar: 14 vitórias em 36 partidas de pro, 38,9%, 3ª maior desvantagem da lista (conferido contra confrontos/dragon_knight.md: 22V/36, 61,1% pro Dragon Knight, amostra pequena, levar com cautela).
- por que importa: carry ou mid forte que raramente compartilha lane com um suporte pos5, mas aparece tanto no banco de pro que vale a comparação direta, e é um dos confrontos de maior vantagem do próprio Dragon Knight.
- janelas: Dragon Knight sobe Blink aos 16,2 min (item incomum pra ele, mas aparece na amostra), Black King Bar aos 23,3, e Elder Dragon Form fica disponível a partir do nível 6 (60s de duração, +350 de alcance de ataque). Oracle não tem spike de item nenhum pra competir com a transformação, o kit dela é puramente defensivo, não ameaça o 1x1 físico de Dragon Knight.
- o que ele faz com você: Dragon Tail estuna e machuca Oracle e quem estiver perto; Breathe Fire queima em área e reduz o dano de ataque de quem for atingido, tirando valor de qualquer aliado right-clicker que Oracle esteja protegendo; em Elder Dragon Form (nível 6+) ele ganha alcance e dano em área que alcança Oracle tentando curar de uma distância antes segura.
- o que você faz com ele: False Promise salva o aliado perto da morte por até 10s e atravessa Black King Bar (bkbpierce: sim), o save é um buff prévio no seu aliado, não um disable nele; Fate's Edict dá resistência mágica total contra Breathe Fire e o dano corrosivo da forma verde do dragão (os dois mágicos), mas não reduz o dano físico do ataque base dele.
- itens que viram: nenhum item seu bloqueia a entrada de Dragon Knight; o valor real está em focar o alvo protegido pela False Promise primeiro ou esperar os 10s passarem, já que o dano retido explode de uma vez no final.
- como jogar: amostra de 36 jogos, trate o número com cautela, mas o padrão mecânico sustenta, Dragon Knight não tem resposta pro seu 1x1 defensivo. Jogue em volta da False Promise esperando o timer, não force atravessar com BKB.
- fonte: pro_dados/oracle.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_dragon_tail, dragon_knight_breathe_fire, dragon_knight_elder_dragon_form, oracle_false_promise, oracle_fates_edict); confrontos/dragon_knight.md (bloco "Contra Oracle").
