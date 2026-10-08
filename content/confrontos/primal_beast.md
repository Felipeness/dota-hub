---
id: confrontos-primal_beast
heroi: Primal Beast
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/primal_beast.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/pangolier.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/warlock.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/axe.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/centaur.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/puck.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tinker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shadow_shaman.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/terrorblade.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/sniper.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/largo.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/razor.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- OpenDota explorer (match_patch + player_matches, patches 7.40-7.41, lane_role)
---

## Contra Jakiro (jakiro)
- placar: Primal Beast venceu 87 de 162 partidas de pro (53,7%). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: é o oponente com mais jogos de pro contra Primal Beast no banco (162), de longe o suporte de área mais comum do outro lado do draft.
- janelas: até os 6:54 nenhum dos dois tem spike (PB só com Phase Boots, mediana 6:54, pro_dados/primal_beast.json); dos 8 aos 13min Jakiro ainda sem Arcane Boots (mediana 11:42) enquanto PB já farmou Soul Ring (8:18) pra spamar Rock Throw e limpar onda com Trample, então PB farma e rotaciona mais rápido nessa janela; dos 13 aos 22min PB tem Blink (13:42) pra pular em cima de Jakiro antes do Macropyre (nível 6, sem item de referência) virar ameaça de área; depois dos 22min, com BKB (22:00) e Aghanim's Shard (23:00) prontos, PB ainda não é imune ao Macropyre com cetro porque ele passa a causar dano puro (constants_abilities.json, jakiro_macropyre com scepter), então a luta de fase tardia depende de Jakiro não ter tempo de canalizar.
- o que ele faz com você: Ice Path estuna em área quem entra na faixa de gelo, o que pode travar o movimento de PB bem no meio da carga de Onslaught e atrasar o dash; Macropyre com Aghanim's Scepter vira dano puro contínuo numa faixa longa e ignora o Black King Bar de PB.
- o que você faz com ele: Onslaught (2000 de alcance de carga) e Rock Throw com Shard (1800 de alcance, 325 de dano, 1,4s de stun) alcançam Jakiro de longe antes dele plantar ward ou recuar; Pulverize (ultimate, grab + stuns de 0,2s por golpe durante 2,3s) mata o combo de feitiços dele se conectar.
- itens que viram: Blink (13:42) é o que decide se PB chega em Jakiro antes do time dele reagir; Aghanim's Shard (23:00) dá o Rock Throw de longo alcance pra acertá-lo sem precisar carregar Onslaught por cima de creep.
- como jogar: force o farm de Jakiro saindo na frente com Phase Boots e Soul Ring, pegue Blink assim que puder pra não deixar o Macropyre virar prioridade dele, e guarde o BKB pra quando ele já tiver Aghanim's Scepter.
- fonte: pro_dados/primal_beast.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre, primal_beast_onslaught, primal_beast_rock_throw, primal_beast_pulverize)

## Contra Pangolier (pangolier)
- placar: Primal Beast venceu 89 de 159 partidas de pro (56,0%). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: 2º oponente com mais jogos de pro contra PB (159) e a principal comparação de rota, porque Pangolier joga 63,9% mid e 35,8% offlane nas partidas pro 7.40-7.41 (OpenDota), ou seja, cruza com PB tanto na pos 2 quanto na pos 3.
- janelas: até os 6min os dois só têm bota (PB 6:54, Pangolier 5:42); dos 10 aos 17min Pangolier sobe Blade of Alacrity (16:54, farm mais rápido, lh10 56 contra 50 de PB) e já consegue abrir o 1x1 com Swashbuckle, que atravessa BKB (pangolier_swashbuckle, bkbpierce: Yes); dos 17 aos 23min PB chega no Blink antes (13:42 contra 19:12 de Pangolier), uma janela de quase 5min pra PB iniciar primeiro; depois dos 23min os dois têm Aghanim's Shard quase junto (PB 23:00, Pangolier 23:12), e Rolling Thunder (bola debuff-immune, 80% de resistência mágica, 1,2s de stun no impacto) vira a resposta de Pangolier pro Pulverize de PB.
- o que ele faz com você: Swashbuckle fura BKB e aplica slow mesmo com você imune a feitiço; Rolling Thunder (Gyroshell) te atropela com dano proporcional ao ataque dele e te estuna por 1,2s se ele rolar por cima.
- o que você faz com ele: Onslaught tem alcance maior (2000 contra o raio de 400 do Rolling Thunder) pra acertar ele antes de rolar; Rock Throw com Shard pega ele de longe antes dele entrar na bola, e como é dano físico, não mágico (constants_abilities.json, primal_beast_rock_throw), a resistência mágica de 80% do Gyroshell nem entra na conta, o que importa é acertar antes dele sair rolando.
- itens que viram: Aghanim's Shard (23:00 em você, 23:12 nele) é quem chega primeiro na troca de iniciação à distância; seu Blink mais cedo (13:42 contra 19:12) é a maior vantagem de janela do confronto.
- como jogar: use a vantagem de Blink mais cedo pra pegar ele fora da bola; depois dos 20min, não gaste Onslaught se ele já estiver com Rolling Thunder pronto, espere ele rolar e puna a saída.
- fonte: pro_dados/primal_beast.json; pro_dados/pangolier.json; constants_abilities.json (pangolier_swashbuckle, pangolier_gyroshell); OpenDota explorer (lane_role, patches 7.40-7.41)

## Contra Hoodwink (hoodwink)
- placar: Primal Beast venceu 78 de 151 partidas de pro (51,7%). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: 3º oponente com mais jogos de pro contra PB (151); é o suporte de roam mais comum do outro lado nessa lista de confrontos.
- janelas: até os 6min nenhum spike (botas só); dos 10 aos 19min PB já tem Soul Ring (8:18) e Blink chegando (13:42) enquanto Hoodwink ainda sobe Arcane Boots (12:12) pra sustentar mana de suporte, então PB domina rotação e farm nessa janela; dos 19 aos 23min Hoodwink finalmente planta Observer Ward em par (mediana 19:24) e começa a ter visão pra evitar ser pega isolada; depois dos 22min, com BKB (22:00) e Shard (23:00), PB ainda pode ser puxado pro meio do Bushwhack se ela tiver árvore por perto.
- o que ele faz com você: Bushwhack estoura num raio de 265 e te empurra pra árvore mais próxima, zerando sua visão por até 2,1s, o que pode travar o movimento da sua carga de Onslaught se o stun pegar no meio do dash; Scurry dá a ela um dispel e fuga rápida, então ela escapa do seu Pulverize se reagir a tempo.
- o que você faz com ele: Onslaught (2000 de alcance) e Rock Throw com Shard (1800 de alcance) chegam antes dela plantar árvore ou Acorn Shot; Pulverize grab ignora a resistência dela se você conseguir fechar a distância.
- itens que viram: seu Blink (13:42) é o item que define se você pega ela antes da visão dela estar pronta; o Aghanim's Shard dela (Hunter's Boomerang, um bumerangue que causa dano e volta pra ela) não muda o duelo direto com você, só dá mais um fio de poke à distância.
- como jogar: ataque antes dela ter par de wards (antes dos 19min), evite correr perto de árvore isolada quando ela estiver com Bushwhack disponível, e force a troca com Rock Throw de longe antes de se comprometer com Onslaught.
- fonte: pro_dados/primal_beast.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_scurry)

## Contra Mars (mars)
- placar: Primal Beast venceu 81 de 146 partidas de pro (55,5%). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: 4º maior volume de jogos de pro (146) e o confronto de mesma função mais direto da lista: os dois são offlaners str iniciadores (PB joga offlane em 66,7% das partidas pro 7.40-7.41 e Mars em 96,5%, OpenDota), mas como os dois jogam na pos 3 dos próprios times, normalmente não dividem lane (cada um enfrenta o trio de safelane do adversário), exatamente o tipo de confronto que só aparece no draft e no meio de jogo.
- janelas: até os 5min Mars sai na frente de item (boots 4:42 contra 6:54 de PB, porque Mars também farma Bracer rápido); dos 13 aos 15min PB chega no Blink primeiro (13:42 contra 15:12 de Mars), uma folga de quase 2min pra iniciar antes; dos 15 aos 21min os dois já blincam e disputam quem trava o outro primeiro, já que nem Spear of Mars nem Onslaught furam Black King Bar (constants_abilities.json, mars_spear e primal_beast_onslaught: bkbpierce No); depois dos 21min os dois têm Aghanim's Shard quase junto (Mars 21:30, PB 23:00), e a luta de fase tardia se decide por quem consegue estuar o outro antes do BKB virar.
- o que ele faz com você: Spear of Mars (1,3 a 2,2s de stun crescente por nível, 100 a 325 de dano) te empala numa árvore ou parede se acertar, te travando além do stun normal; Bulwark reduz até 70% do dano de ataque básico que ele recebe de frente (constants_abilities.json, mars_bulwark), então ele aguenta mais trocando auto-ataque com você, mas isso não afeta seu Trample, que é dano mágico, não ataque.
- o que você faz com ele: Onslaught tem alcance de carga maior (2000 contra os 900-1200 do Spear) pra fechar primeiro; Pulverize ignora o Bulwark porque é dano mágico em grab, não ataque físico.
- itens que viram: seu Blink (13:42) chega quase 2min antes do dele (15:12), a maior vantagem de janela do confronto; Black King Bar decide o resto, porque nenhum dos dois stuns principais fura o BKB do outro, então quem guarda o próprio BKB pra reagir ao combo do outro tende a sair vivo.
- como jogar: use a folga de Blink pra te antecipar e acertar Onslaught antes dele girar o Bulwark pra te encarar de frente; depois dos 21min, não gaste BKB cedo contra o Spear, guarde pra quando ele já estiver no meio do combo.
- fonte: pro_dados/primal_beast.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_bulwark, primal_beast_onslaught); OpenDota explorer (lane_role, patches 7.40-7.41)

## Contra Tusk (tusk)
- placar: Primal Beast venceu 77 de 140 partidas de pro (55,0%). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: 5º maior volume de jogos de pro (140); é o suporte de roam mais comum do outro lado nessa lista, então o confronto real acontece em rotação e emboscada, não em lane fixa.
- janelas: até os 7min nenhum spike grande; dos 13 aos 19min PB já tem Blink (13:42) antes de Tusk (19:00), vantagem de mais de 5min pra iniciar primeiro em qualquer emboscada; dos 19min em diante os dois têm Blink prontos e a luta vira quem acerta o combo primeiro, já que Walrus Kick fura Black King Bar (tusk_walrus_kick, bkbpierce: Yes), ou seja, PB não escapa do kick nem imune a feitiço.
- o que ele faz com você: Snowball te prende dentro da bola e empurra pro meio do time dele; Walrus Kick te chuta 1200 de distância travando você pro resto do combo, e isso funciona mesmo debaixo do seu BKB porque fura imunidade mágica.
- o que você faz com ele: seu Onslaught (2000 de alcance) alcança ele antes do Snowball (que precisa se aproximar rolando); Pulverize grab ignora a baixa vida dele (gpm 300, baixo até pra padrão de suporte, pro_dados/tusk.json) se você conseguir fechar.
- itens que viram: Blink seu (13:42) contra o dele (19:00) é a maior folga de iniciação da lista entre os suportes; como o Walrus Kick fura BKB, não dá pra contar só com a imunidade mágica contra ele, o ideal é focar ele primeiro antes dele ter mana pro combo.
- como jogar: ataque em cima dele antes dos 19min, quando só você tem Blink; depois disso, trate o Walrus Kick como stun garantido mesmo com BKB ativo e jogue pra matar ele rápido em vez de ignorar o combo.
- fonte: pro_dados/primal_beast.json; pro_dados/tusk.json; constants_abilities.json (tusk_walrus_kick, bkbpierce)

## Contra Warlock (warlock)
- placar: Primal Beast venceu 73 de 132 partidas de pro (55,3%). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: 6º maior volume de jogos de pro (132); é o suporte duro mais comum do outro lado dessa lista.
- janelas: até os 10min nenhum spike; dos 10 aos 13min PB tem Soul Ring (8:18) e já farma mais rápido; dali até os 22min a diferença de farm dele (gpm 329, suporte puro) contra o seu (gpm 504) só cresce; depois do nível 6 de Warlock (Chaotic Offering, sem item de referência pra marcar o minuto) ele passa a ter 1 ou 2 Golems que tankam e estunam na queda, o que pode interromper seu Onslaught se o stun do Golem pegar no meio da carga.
- o que ele faz com você: Fatal Bonds liga até 6 inimigos visíveis e faz parte do dano que um leva ser sentido pelos outros, o que na prática ajuda você, porque seu dano em área (Onslaught, Trample, Pulverize) bate em vários heróis ligados ao mesmo tempo e multiplica o efeito da própria corrente contra o time dele; Chaotic Offering convoca Golems que atordoam na queda e podem travar o movimento da sua carga.
- o que você faz com ele: seu alcance de iniciação (Onslaught 2000, Rock Throw com Shard 1800) chega nele antes de qualquer Golem nascer, já que o golem precisa do cast da ultimate perto do grupo; Pulverize grab ignora a baixa vida dele.
- itens que viram: Aghanim's Scepter de Warlock (2 Golems em vez de 1) é o item que mais muda a luta pro lado dele, porque dobra o risco de um Golem travar sua carga de Onslaught no meio do caminho; o seu BKB (22:00) resolve esse risco se guardado pra entrada dele.
- como jogar: force o pick antes dele soltar Chaotic Offering, e se ele já tiver Scepter, ative seu BKB antes de carregar Onslaught perto do grupo dele pra não ser travado pelo stun do Golem.
- fonte: pro_dados/primal_beast.json; pro_dados/warlock.json; constants_abilities.json (warlock_fatal_bonds); https://api.opendota.com/api/constants/aghs_desc (warlock_chaotic_offering)

## Contra Axe (axe)
- placar: Primal Beast venceu 61 de 118 partidas de pro (51,7%). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: é o offlaner (pos 3) com mais jogos de pro contra PB na lista (118, entre os picks de mesma posição), porque Axe joga offlane em 97,9% das partidas pro 7.40-7.41 (OpenDota); como os dois jogam offlane dos próprios times, o confronto direto é raro em lane e comum em teamfight.
- janelas: até os 7min Axe sai levemente na frente de bota (4:18 contra 6:54 de PB) e farma melhor na lane (lh10 63 contra 50); dos 12 aos 15min Axe fecha Blade Mail (12:36), que devolve dano de quem cai no Berserker's Call; dos 13 aos 16min PB tem Blink (13:42) perto do de Axe (15:42), folga pequena; depois dos 22min os dois correm pra Black King Bar (PB 22:00, Axe 25:54) e pro Shard (PB 23:00, Axe 22:54), e aí a luta se decide pelo fato de nenhum BKB resolver o combo do outro: Berserker's Call e Culling Blade furam imunidade mágica (constants_abilities.json, bkbpierce: Yes nos dois).
- o que ele faz com você: Berserker's Call te força a atacar ele mesmo debaixo do seu BKB, porque fura imunidade mágica; Culling Blade (dano puro, até 475) também ignora seu BKB e reseta se ele te matar.
- o que você faz com ele: Pulverize é grab, não ataque, então não é afetado pelo Berserker's Call enquanto já estiver em curso; seu alcance de Onslaught/Rock Throw permite iniciar antes dele fechar o Call.
- itens que viram: Blade Mail dele (12:36) é o item que mais pune você bater nele sem pensar; seu Shard (23:00) chega antes do dele (22:54) por pouco, então a corrida de Rock Throw à distância é praticamente empatada.
- como jogar: não ataque Axe no corpo a corpo se ele estiver com Blade Mail ativo, prefira Rock Throw de longe; lembre que BKB não te salva do Call nem do Culling Blade, então o plano é matar ele rápido ou evitar o 1x1 corpo a corpo prolongado.
- fonte: pro_dados/primal_beast.json; pro_dados/axe.json; constants_abilities.json (axe_berserkers_call, axe_culling_blade, bkbpierce); OpenDota explorer (lane_role, patches 7.40-7.41)

## Contra Centaur Warrunner (centaur)
- placar: Primal Beast venceu 61 de 113 partidas de pro (54,0%). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: outro offlaner (pos 3) com volume alto contra PB (113 jogos), o par mais parecido da lista: os dois são tanques str, iniciadores de stun em área, e raramente se enfrentam em lane porque jogam a mesma posição em times opostos.
- janelas: até os 9min os dois sobem item de tankar (Centaur Helm of Iron Will 4:48, PB Soul Ring 8:18); dos 13 aos 20min PB chega no Blink bem antes (13:42 contra 19:36 de Centaur), quase 6min de folga pra iniciar primeiro; dos 17 aos 23min Centaur já tem Ring of Tarrasque (17:30) pra sustentar vida em troca prolongada; depois dos 22min os dois têm BKB/Shard rodando e a luta se decide por quem consegue estuar primeiro, já que nem Hoof Stomp nem Onslaught furam BKB.
- o que ele faz com você: Hoof Stomp estuna 1,6 a 2,2s em raio de 325, o suficiente pra travar o movimento da sua carga de Onslaught se pegar você no meio; Retaliate devolve parte do dano físico que ele recebe, o que pune seus ataques básicos, mas não o Trample, que é dano mágico.
- o que você faz com ele: seu Onslaught tem alcance de carga maior pra chegar nele antes do Hoof Stomp (que não tem projétil, mas precisa de windup curto e distância corpo a corpo); Pulverize ignora o Retaliate porque não é ataque básico.
- itens que viram: seu Blink (13:42) contra o dele (19:36) é quase 6min de vantagem, a maior folga de iniciação da lista; o Aghanim's Scepter dele (Work Horse, Stampede permanente) muda o jogo de mapa mais do que o duelo direto.
- como jogar: use a vantagem de Blink pra te antecipar antes dos 19min; evite trocar auto-ataque corpo a corpo prolongado com ele por causa do Retaliate, prefira abrir com Rock Throw e fechar com Pulverize.
- fonte: pro_dados/primal_beast.json; pro_dados/centaur.json; constants_abilities.json (centaur_hoof_stomp); https://api.opendota.com/api/constants/aghs_desc (centaur Work Horse)

## Contra Ember Spirit (ember_spirit)
- placar: Primal Beast venceu 64 de 122 partidas de pro (52,5%). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: é o mid (pos 2) com mais jogos de pro contra PB na lista (122); Ember Spirit joga mid em 96,5% das partidas pro 7.40-7.41 (OpenDota), a mesma posição secundária de PB, então o cruzamento só acontece quando PB também joga mid ou nas rotações do meio de jogo.
- janelas: até os 9min Ember já farma mais rápido (gpm 558 contra 504 de PB, lh10 53 contra 50); dos 9 aos 14min Ember sobe Phase Boots (9:06) e já consegue Sleight of Fist pra burst de agilidade; dos 13 aos 17min PB tem Blink (13:42) perto do Fire Remnant dele (sem item fixo, vem do nível 6); depois dos 20min Ember já com Staff of Wizardry (23:30) rumo a Aghanim's Scepter, ganhando mais Remnants pra escapar do seu combo.
- o que ele faz com você: Sleight of Fist bate em todos os inimigos perto em sequência rápida, dano que não é bloqueado pela sua imunidade mágica porque é baseado em ataque; Fire Remnant deixa ele sair do alcance do seu Onslaught ou do grab de Pulverize antes de você conectar.
- o que você faz com ele: Onslaught (2000 de alcance) e Rock Throw com Shard (1800) alcançam ele antes de ele plantar um Remnant de fuga; se você fechar o Pulverize, a mobilidade dele não ajuda, porque é grab, não precisa de linha de visão contínua.
- itens que viram: Remnants extras (Aghanim's Scepter dele) são o que mais ameaça seu plano de grab, porque multiplicam as chances de escape; seu Blink (13:42) é a resposta, pra pegar ele antes dele upar o Scepter.
- como jogar: ataque Ember antes dos 20min, quando ele ainda não tem Remnants de sobra; depois disso, puxe Pulverize no primeiro Remnant gasto, não espere ele ter todos de volta.
- fonte: pro_dados/primal_beast.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_sleight_of_fist, ember_spirit_fire_remnant); OpenDota explorer (lane_role, patches 7.40-7.41)

## Contra Puck (puck)
- placar: Primal Beast venceu 69 de 120 partidas de pro (57,5%). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: outro mid recorrente contra PB (120 jogos; 99,4% das partidas pro 7.40-7.41 de Puck são mid, OpenDota); 3º maior farm entre os mids da lista (gpm 585, atrás de Tinker e Sniper), então é o teste de "quem fica rico primeiro e o que isso compra".
- janelas: até os 8min Puck já com Power Treads (8:18) sobe velocidade de ataque; dos 13 aos 17min PB tem Blink (13:42) bem antes de Puck (17:36), 4min de folga; dos 13 aos 17min Puck já tem Witch Blade (13:42) pra poke de longe; depois dos 17min os dois blincam e a luta vira quem consegue fechar o combo primeiro, com Puck preferindo Dream Coil pra travar e PB preferindo Pulverize pra grab.
- o que ele faz com você: Phase Shift deixa Puck intangível e disjunta projéteis, o que inclui desviar do seu Rock Throw se ele shiftar no momento certo; Dream Coil estica um elo que prende em área e estuna quem rompe o elo, o suficiente pra travar o movimento do seu Onslaught no meio do caminho.
- o que você faz com ele: seu Onslaught (2000 de alcance) fecha a distância antes de Puck reagir com Illusory Orb; Pulverize grab não é projétil, então Phase Shift não desvia dele.
- itens que viram: seu Blink (13:42) contra o dele (17:36) é quem inicia primeiro na maior parte das vezes; o Aghanim's Scepter de Puck (ataques extras no Dream Coil) muda a luta em grupo mais do que o 1x1.
- como jogar: evite abrir com Rock Throw solo se ele estiver prestes a Phase Shift, prefira fechar com Onslaught e grab direto; use sua folga de Blink pra pegar ele isolado antes dele upar Witch Blade.
- fonte: pro_dados/primal_beast.json; pro_dados/puck.json; constants_abilities.json (puck_phase_shift, puck_dream_coil); OpenDota explorer (lane_role, patches 7.40-7.41)

## Contra Tinker (tinker)
- placar: Primal Beast venceu 20 de 31 partidas de pro (64,5%, maior vantagem da lista com amostra de 30+). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: é a maior vantagem de PB com amostra válida (31 jogos); Tinker joga mid solo em 84,6% das partidas pro 7.40-7.41 (OpenDota), e não tem nenhum disable duro, então é o melhor exemplo de "carry/core sem resposta pro seu engage", mesmo raramente dividindo lane com você.
- janelas: até os 10min Tinker já farma muito rápido com Laser e March of the Machines sozinho na mid (lh10 65, 3º maior da lista, atrás de Sniper e Terrorblade); dos 10 aos 14min Tinker sobe Staff of Wizardry (9:54) rumo a mais dano de Laser; dos 11 aos 14min ele tem Blink (11:30) antes do seu (13:42), mas só pra reposicionar, não pra travar você; depois dos 14min, sem nenhum disable no kit (Laser é dano/cegueira, March é dano de área, Rearm só reseta cooldown), ele só sobrevive se conseguir te ver chegando e teleportar embora com a bota (Keen Teleport).
- o que ele faz com você: Laser cega (reduz chance de acerto) e causa dano, mas não impede sua carga de Onslaught; March of the Machines causa dano de área crescente, incômodo mas não letal sozinho contra sua vida de str.
- o que você faz com ele: seu Onslaught de 2000 de alcance fecha a distância antes dele conseguir Rearm e fugir de novo; Rock Throw com Shard (1800 de alcance) já ameaça o teleporte dele à distância.
- itens que viram: nenhum item do Tinker resolve contra você, porque ele não tem disable; o seu Shard (23:00) é o que garante que mesmo um Tinker com visão não escape limpo.
- como jogar: priorize matar Tinker sempre que puder vê-lo, porque ele não tem como te travar; use Rock Throw pra interromper o farm dele de longe antes mesmo de fechar com Onslaught.
- fonte: pro_dados/primal_beast.json; pro_dados/tinker.json; constants_abilities.json (tinker_laser, tinker_march_of_the_machines, tinker_rearm); OpenDota explorer (lane_role, patches 7.40-7.41)

## Contra Shadow Shaman (shadow_shaman)
- placar: Primal Beast venceu 38 de 60 partidas de pro (63,3%, 2ª maior vantagem da lista com amostra de 30+). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: 2ª maior vantagem de PB com amostra válida (60 jogos); Shadow Shaman é o suporte de disable mais comum entre os picks com vantagem grande pra PB, porque o principal lockdown dele (Hex) não fura imunidade mágica.
- janelas: até os 11min nenhum spike grande (Shadow Shaman sobe Arcane Boots aos 11:12); dos 13 aos 19min PB já tem Blink (13:42) antes do dele (19:18), folga de quase 6min; depois dos 19min, com Blink dos dois prontos, o duelo se decide pelo fato de Hex não furar BKB (constants_abilities.json: bkbpierce ausente em shadow_shaman_voodoo), então seu BKB (22:00) resolve o principal disable dele.
- o que ele faz com você: Hex transforma você em criatura inofensiva por 2 a 2,9s, travando ataque e feitiço, mas não funciona se você já estiver com BKB ativo; Ether Shock estoura uma wave inteira em cone, incômodo de farm mas não te trava.
- o que você faz com ele: seu Onslaught (2000 de alcance) chega nele antes de qualquer posicionamento de Shackles; Pulverize grab ignora a baixa vida dele (gpm 297, o mais baixo farm da lista).
- itens que viram: seu BKB (22:00) é o item que mais vira esse confronto a seu favor, porque anula o Hex; a ultimate dele (Mass Serpent Ward) fura BKB, mas é ameaça de mapa, não de 1x1 direto.
- como jogar: ative BKB antes de se aproximar se ele tiver Hex disponível; fora isso, trate ele como qualquer suporte de baixo farm e feche o combo rápido.
- fonte: pro_dados/primal_beast.json; pro_dados/shadow_shaman.json; constants_abilities.json (shadow_shaman_voodoo, shadow_shaman_mass_serpent_ward, bkbpierce)

## Contra Terrorblade (terrorblade)
- placar: Primal Beast venceu 37 de 60 partidas de pro (61,7%, 3ª maior vantagem da lista com amostra de 30+). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: é o exemplo mais claro de "dois heróis que raramente se enfrentam em lane, mas o confronto importa muito": Terrorblade é carry puro de safelane (pos 1) contra o offlane de PB, maior gpm de toda a lista (701, com lh10 66, só atrás do Sniper), e a comparação de power spike entre os dois decide quem vence o jogo se ele chegar inteiro no fim.
- janelas: até os 14min PB está muito na frente (Blink aos 13:42 contra o Terrorblade ainda subindo Diadem aos 14:06 e Yasha aos 12:30, sem nenhum item de luta ainda); dos 14 aos 25min Terrorblade sobe Manta (17:06), ganha ilusões de troca e passa a ter alguma resposta, mas ainda sem Metamorphosis consistente de longo alcance; depois dos 25-30min, se ele tiver tido farm livre, Metamorphosis (ranged attack + bônus de dano crescente por nível) e Sunder (troca uma % da vida atual entre os dois) viram o jogo: Sunder não olha pra vida máxima, então stackar Heart em PB não impede ele de ser puxado pra baixo se estiver com vida atual baixa relativa ao Terrorblade.
- o que ele faz com você: Sunder troca uma porcentagem da vida atual dos dois, o que pune justamente heróis tanques que lutam com a vida raspada; Metamorphosis dá ataque a distância e bônus de dano que cresce por nível, perigoso se ele chegar inteiro na fase tardia.
- o que você faz com ele: antes dos 20-25min, seu Onslaught e Pulverize matam ele rápido, porque ele ainda não tem Metamorphosis estabilizado nem Sunder como seguro de vida; Rock Throw com Shard alcança ele de longe antes dele crescer de item.
- itens que viram: Manta Style dele (17:06) é o item que mais adia o problema, porque dá ilusões pra dividir seu foco; o seu lado da equação é fechar o jogo ou pelo menos abater ele antes dos 25-30min, quando Sunder vira resposta de emergência pra ele.
- como jogar: jogue pra matar Terrorblade cedo, antes dele consolidar Manta e Metamorphosis; se o jogo passar dos 30min com ele rico, não dependa só de vida alta, porque Sunder ignora isso, foque controle (Pulverize) pra tirar ele da luta.
- fonte: pro_dados/primal_beast.json; pro_dados/terrorblade.json; constants_abilities.json (terrorblade_sunder, terrorblade_metamorphosis)

## Contra Sniper (sniper)
- placar: Primal Beast venceu 10 de 31 partidas de pro (32,3%, maior desvantagem da lista com amostra de 30+). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: é a maior desvantagem de PB com amostra válida (31 jogos); Sniper joga mid em 76,7% das partidas pro 7.40-7.41 (OpenDota) e tem o maior alcance de ataque e de nuke da lista, o que ataca justamente o ponto fraco de PB: fechar distância.
- janelas: até os 10min Sniper já farma rápido (lh10 72, o maior da lista) com Power Treads (5:54); dos 10 aos 16min ele sobe Javelin (10:18) e Maelstrom (12:30) pra DPS de auto-ataque de longe; dos 13 aos 16min PB tem Blink (13:42) perto do Dragon Lance dele (16:30), que estica o alcance dele ainda mais; depois dos 16min, com alcance de ataque maior que o seu raio de aproximação seguro, Sniper consegue bater e recuar antes do seu Onslaught conectar, e Assassinate ameaça de muito longe mesmo sem blink.
- o que ele faz com você: Assassinate mira de muito longe e dá um mini-stun no impacto, o suficiente pra interromper sua carga se pegar no início; o alcance de ataque dele (Take Aim + Dragon Lance/Hurricane Pike) deixa ele te bater sem você conseguir chegar perto.
- o que você faz com ele: seu Onslaught (2000 de alcance de carga) ainda é maior que o alcance de ataque dele, então se você não for visto chegando, fecha a distância antes dele reagir; Rock Throw com Shard (1800) ameaça ele de longe também, mas sem o impacto de um grab.
- itens que viram: Dragon Lance/Hurricane Pike dele é o item que mais te afasta, porque aumenta ainda mais a vantagem de alcance; o seu Blink é a resposta direta, mas só funciona se você aparecer sem ele perceber.
- como jogar: evite caminhar em linha reta até ele, use terreno e fumaça pra blincar sem ser visto; se ele tiver Assassinate pronto, não inicie Onslaught de longe, espere ele gastar o nuke em outro alvo.
- fonte: pro_dados/primal_beast.json; pro_dados/sniper.json; constants_abilities.json (sniper_assassinate); OpenDota explorer (lane_role, patches 7.40-7.41)

## Contra Largo (largo)
- placar: Primal Beast venceu 19 de 55 partidas de pro (34,5%, 2ª maior desvantagem da lista com amostra de 30+). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: 2ª maior desvantagem de PB com amostra válida (55 jogos); Largo joga offlane em 76,8% das partidas pro 7.40-7.41 (OpenDota), o mesmo papel de PB, mas com um kit que neutraliza justamente o Onslaught.
- janelas: até os 9min os dois sobem item de sustentar (PB Soul Ring 8:18, Largo Soul Ring 8:30); dos 13 aos 19min PB tem Blink (13:42) antes de Largo upar Point Booster (16:18) e Kaya (19:12) pra mais dano de feitiço; depois dos 17min Largo já tem Staff of Wizardry (17:12) e Frogstomp vira ameaça de área constante, porque ele tosta froglings que ministunam e reduzem sua velocidade em até 30% por nível.
- o que ele faz com você: Catchy Lick aplica um dispel básico e te puxa 235 a 325 de distância pra perto dele, o que pode te tirar de posição no meio da carga do seu Onslaught, mas não remove suas stacks de Uproar, que não são dispellable (constants_abilities.json, primal_beast_uproar); Frogstomp não te estuna de verdade (ministun de 0,1s), mas o slow de até 30% reduz a distância que seu Onslaught percorre enquanto carrega.
- o que você faz com ele: Onslaught ainda alcança 2000 de distância, mais que o raio de 350 do Frogstomp, então iniciar de fora resolve; Pulverize grab ignora o dispel dele, porque não depende de um buff seu pra funcionar.
- itens que viram: Staff of Wizardry dele (17:12) é o item que vira o Frogstomp em ameaça de dano relevante; seu Blink (13:42) é a resposta, iniciar antes dele montar o combo de área.
- como jogar: evite carregar Onslaught dentro da área de Frogstomp dele, prefira iniciar de fora com o dash já em velocidade máxima; não dependa do dispel de Catchy Lick pra te travar, ele não zera seu Uproar, só te puxa de posição.
- fonte: pro_dados/primal_beast.json; pro_dados/largo.json; constants_abilities.json (largo_catchy_lick, largo_frogstomp); OpenDota explorer (lane_role, patches 7.40-7.41)

## Contra Razor (razor)
- placar: Primal Beast venceu 26 de 67 partidas de pro (38,8%, 3ª maior desvantagem da lista com amostra de 30+). Fonte: pro_dados/primal_beast.json (confrontos).
- por que importa: 3ª maior desvantagem de PB com amostra válida (67 jogos); o kit de Razor ataca os dois pilares da identidade de PB: o dano de auto-ataque do Uproar e a armadura.
- janelas: até os 7min os dois sobem bota rápido (Razor 3:42, PB 6:54); dos 13 aos 18min PB tem Blink (13:42) antes de Razor upar Yasha (17:48); dos 17 aos 20min Razor sobe Mithril Hammer (19:42) rumo a mais dano de ataque; depois dos 22-25min os dois correm pro BKB (PB 22:00, Razor 24:42), mas isso não resolve o confronto, porque Static Link e Eye of the Storm furam imunidade mágica (constants_abilities.json, bkbpierce: Yes nos dois).
- o que ele faz com você: Static Link cria um elo que rouba uma parte do seu dano de ataque pra ele durante a luta, o que corta justamente o bônus de dano do seu Uproar; Eye of the Storm reduz sua armadura por 30s e fura seu BKB, piorando tudo que você toma de dano físico depois.
- o que você faz com ele: seu Onslaught (2000 de alcance) chega nele antes dele conseguir linkar à distância seguro; Pulverize grab ignora o link, porque o link não impede movimento nem feitiço seu.
- itens que viram: Black King Bar dele e seu não resolvem o duelo completo, porque os dois spells centrais dele furam imunidade; Shiva's Guard seu (quando sai, mediana 34:00) ajuda a compensar a redução de armadura do Eye of the Storm com a aura própria.
- como jogar: mate Razor rápido ou evite trocar auto-ataque longo com ele, porque cada segundo de Static Link ativo rouba seu dano; não confie no BKB pra anular o kit dele, jogue pra fechar o grab antes dele linkar.
- fonte: pro_dados/primal_beast.json; pro_dados/razor.json; constants_abilities.json (razor_static_link, razor_eye_of_the_storm, bkbpierce)
