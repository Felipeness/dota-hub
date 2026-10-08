---
id: confrontos-razor
heroi: Razor
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub/content/pro_dados/razor.json (confrontos, resumo, itens)
- C:/Users/felip/Desktop/dota-hub/content/pro_dados/nevermore.json, queenofpain.json, earth_spirit.json, mars.json, tidehunter.json, beastmaster.json, jakiro.json, tusk.json, warlock.json, alchemist.json, gyrocopter.json, tiny.json, crystal_maiden.json, treant.json, enchantress.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
---

## Contra Shadow Fiend (nevermore)
- placar: 89V-207J em pro, 43,0% de vitória do Razor (OpenDota /heroes/15/matchups via pro_dados/razor.json)
- por que importa: é o oponente com mais jogos de pro contra o Razor (207) e um rival clássico de mid, já que os dois disputam a rota do meio com frequência.
- janelas: até os 15 min o Shadow Fiend farma mais rápido (LH10 78 contra 54 do Razor, pro_dados) e fecha Mask of Madness na mediana de 10,2 min (pro_dados/nevermore.json), trocando auto attack com lifesteal antes do Razor ter qualquer item grande. Dos 15 aos 25 min o Razor fecha Yasha (17,8 min) e BKB (24,7 min, pro_dados/razor.json); o Shadow Fiend por sua vez fecha Dragon Lance na mediana de 14,0 min (pro_dados/nevermore.json) pra bater de mais longe e sair do alcance do Static Link antes mesmo do Razor ter Yasha. Depois dos 25 min o jogo vira corrida: ele quer fechar Requiem com o máximo de almas acumuladas enquanto o Razor sustenta a troca com Manta (21,3 min, pro_dados/razor.json).
- o que ele faz com você: Shadowraze dá dano crescente por alma acumulada (Necromastery) se você ficar parado numa das três posições dele; o Requiem no fim de uma troca ainda assusta porque é automático até na morte dele.
- o que você faz com ele: Static Link (bkbpierce sim, não dispelável) rouba dano fixo do Shadow Fiend durante o link, inclusive atravessando o BKB dele, o que corta justamente o DPS que sustenta o Mask of Madness; Eye of the Storm sempre busca quem está com menos vida.
- itens que viram: seu BKB (24,7 min, pro_dados/razor.json) bloqueia o Shadowraze porque a habilidade não atravessa imunidade mágica (bkbpierce não, constants_abilities.json), tirando a principal fonte de burst dele; um Linken's Sphere no Shadow Fiend bloquearia o cast do seu Static Link, que é de alvo único (items.json).
- como jogar: não troque auto attack parado dentro do alcance do Shadowraze antes do seu BKB; assim que ele avançar pra farmar, feche o Static Link, porque o roubo de dano já pune o DPS dele sozinho. Depois do seu BKB, procure a troca isolada antes dele fechar Dragon Lance.
- fonte: pro_dados/razor.json; pro_dados/nevermore.json; constants_abilities.json (razor_static_link, razor_eye_of_the_storm, nevermore_shadowraze1); items.json (sphere)

## Contra Queen of Pain (queenofpain)
- placar: 71V-141J, 50,4% de vitória do Razor (pro_dados/razor.json)
- por que importa: segundo rival de mid mais comum contra o Razor em pro (141 jogos), outra mage de burst que disputa a mesma rota quando ele joga pos 2.
- janelas: a Queen of Pain fecha Power Treads na mediana de 8,3 min, Kaya aos 13,9 e Veil of Discord aos 23,4 (pro_dados/queenofpain.json); até os 20 min ela vence trocas à distância com Shadow Strike e Scream of Pain. O Razor fecha Yasha aos 17,8 min e BKB aos 24,7 min (pro_dados/razor.json); depois do BKB dele, Shadow Strike e Scream of Pain param de travar nele, e ele pode virar pra trocar auto attack via Static Link.
- o que ela faz com você: Sonic Wave é dano puro que atravessa BKB (bkbpierce sim), então mesmo com imunidade mágica você ainda leva o dano e o empurrão da ult; Shadow Strike e Scream of Pain não atravessam BKB e ficam bloqueadas assim que você tiver o item.
- o que você faz com ela: Static Link, não dispelável, rouba dano do corpo a corpo dela quando ela entra pra bater; Eye of the Storm cai nela quando a vida fica baixa, fechando a troca.
- itens que viram: seu BKB (24,7 min, pro_dados/razor.json) anula Shadow Strike e Scream, mas não o Sonic Wave, que é dano puro (bkbpierce sim, constants_abilities.json); um Linken's Sphere nela bloquearia o cast do seu Static Link, que é de alvo único (items.json).
- como jogar: evite ficar parado no alcance do Scream antes do seu BKB; depois dele, persiga com Static Link, porque Shadow Strike e Scream já não travam mais a sua resposta.
- fonte: pro_dados/razor.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_sonic_wave, queenofpain_shadow_strike, queenofpain_scream_of_pain); items.json (sphere)

## Contra Earth Spirit (earth_spirit)
- placar: 23V-38J, 60,5% de vitória do Razor (pro_dados/razor.json)
- por que importa: mesma função multi-posição (mid/offlane), e o placar de pro já mostra vantagem clara do Razor nesse confronto.
- janelas: o Earth Spirit é disabler cedo mas sem burst de farm (LH10 39, GPM 466 contra LH10 54, GPM 570 do Razor, pro_dados), então o Razor já sai na frente no farm ainda na lane. O BKB dele sai na mediana de 22,6 min (pro_dados/earth_spirit.json), perto do seu (24,7 min, pro_dados/razor.json); de qualquer forma, qualquer combo de Rolling Boulder + Magnetize que ele tente fica travado assim que o Razor tiver BKB, porque nenhuma das duas atravessa imunidade mágica.
- o que ele faz com você: Rolling Boulder stuna mas não atravessa BKB; Magnetize causa dano contínuo em área e atravessa BKB (bkbpierce sim), só que é dano baixo sozinho sem o resto do combo.
- o que você faz com ele: seu BKB, mais cedo que o dele, anula Rolling Boulder, Boulder Smash e Geomagnetic Grip (nenhum atravessa imunidade mágica); Static Link rouba dano físico dele, que não tem fonte própria de sustain.
- itens que viram: seu BKB decide a janela porque bloqueia o combo dele inteiro; um Linken's Sphere nele bloquearia só o cast do seu Static Link, não o resto (items.json).
- como jogar: force a troca assim que seu BKB sair (24,7 min), porque ele bloqueia o combo dele inteiro; depois que os dois tiverem BKB, a luta vira dano físico puro, onde seu DPS leva vantagem.
- fonte: pro_dados/razor.json; pro_dados/earth_spirit.json; constants_abilities.json (earth_spirit_rolling_boulder, earth_spirit_magnetize, earth_spirit_geomagnetic_grip); items.json (sphere)

## Contra Mars (mars)
- placar: 91V-173J, 52,6% de vitória do Razor (pro_dados/razor.json)
- por que importa: maior rival de mesma função (offlane contra offlane) entre os mais jogados, terceiro em número de jogos de pro contra o Razor.
- janelas: o Mars abre com Phase Boots (8,5 min) e Bracer (2,7 min, pro_dados/mars.json), e tem Bulwark desde o nível 1 bloqueando 40-70% do dano físico de frente (constants_abilities.json), o que já reduz o dano de ataque básico do Razor na lane cedo. O Blink dele fecha na mediana de 15,2 min, presente em 91% dos jogos de pro (pro_dados/mars.json); o Razor fecha Yasha aos 17,8 min e BKB aos 24,7 min (pro_dados/razor.json), abrindo a janela em que ele aguenta a iniciação assim que tiver o item.
- o que ele faz com você: Spear te prende e empurra, seguido de God's Rebuke crítico físico; Arena of Blood cerca o grupo e caça quem ficar perto da borda. O Bulwark ativo absorve boa parte do seu dano de ataque básico vindo de frente.
- o que você faz com ele: Static Link rouba dano físico dele mesmo com Bulwark ativo, porque não é um ataque básico e não é bloqueado pelo escudo; Eye of the Storm reduz a armadura dele, abrindo mais o Bulwark pros seus aliados.
- itens que viram: seu BKB (24,7 min, pro_dados/razor.json) bloqueia Spear e Arena of Blood (nenhum dos dois atravessa imunidade mágica, constants_abilities.json), cortando quase toda a iniciação dele de uma vez.
- como jogar: na lane, ataque pelos lados ou por trás pra fugir do Bulwark de frente; depois do seu BKB, ele perde a ferramenta de prender você, então force a troca direta.
- fonte: pro_dados/razor.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_bulwark, mars_arena_of_blood)

## Contra Tidehunter (tidehunter)
- placar: 67V-113J, 59,3% de vitória do Razor, a maior vantagem dele com amostra grande entre os rivais de mesma função (pro_dados/razor.json)
- por que importa: offlane contra offlane, com a maior vantagem medida do Razor dentro do grupo de mesma função e amostra robusta de 113 jogos.
- janelas: o Tidehunter é tanque lento de farm baixo e só fica forte perto dos 21 min, quando fecha Blink (mediana 21,2 min, pro_dados/tidehunter.json) pro combo com Ravage; até lá ele gasta o early em Bracer e Phase Boots (pro_dados/tidehunter.json), enquanto o Razor sai na frente no DPS. O Blink dele (21,2 min) chega um pouco antes do BKB do Razor (24,7 min, pro_dados/razor.json): nessa janela, evite ficar agrupado perto dele até seu BKB sair.
- o que ele faz com você: Ravage stuna em área e não atravessa BKB; Kraken Shell bloqueia parte do seu dano de ataque básico.
- o que você faz com ele: Static Link e Eye of the Storm não são ataques básicos, então furam o bloqueio do Kraken Shell; o roubo de dano do link corta a sustentação dele numa troca prolongada.
- itens que viram: seu BKB (24,7 min) sai depois do Blink dele (21,2 min), então nessa janela toda cautela é pouca contra o Ravage; depois que seu BKB estiver pronto, você aguenta o stun e sobrevive à iniciação.
- como jogar: force a troca antes dos 21 min (antes do Blink dele), na janela em que ele ainda não tem Blink+Ravage; depois disso, evite lutas em grupo até seu próprio BKB sair aos 24,7 min.
- fonte: pro_dados/razor.json; pro_dados/tidehunter.json; constants_abilities.json (tidehunter_ravage, tidehunter_kraken_shell)

## Contra Beastmaster (beastmaster)
- placar: 56V-126J, 44,4% de vitória do Razor (pro_dados/razor.json)
- por que importa: mesma função (mid/offlane), confronto de desvantagem com amostra robusta de 126 jogos.
- janelas: o Beastmaster sobe Helm of Iron Will (4,4 min), depois Helm of the Dominator (8,8 min) e Blink (18,6 min, pro_dados/beastmaster.json); o Primal Roar está disponível desde o nível 6. Diferente da maioria dos rivais do Razor, o stun dele atravessa BKB (bkbpierce sim, constants_abilities.json), então mesmo depois do Razor fechar BKB (24,7 min, pro_dados/razor.json), o Roar continua travando.
- o que ele faz com você: Primal Roar te stuna mesmo com BKB ativo, abrindo a luta sem que seu item resolva nada; Inner Beast dá velocidade de ataque pra ele e pros bichos dominados, também atravessando BKB.
- o que você faz com ele: Static Link rouba dano enquanto ele empurra com os bichos dominados; Eye of the Storm reduz a armadura dele e do creep.
- itens que viram: como o BKB sozinho não resolve o Roar, um Linken's Sphere é a resposta real, porque bloqueia o cast de alvo único (items.json).
- como jogar: compre Linken's Sphere mais cedo que de costume contra ele, porque seu BKB não bloqueia o Primal Roar; link nele assim que ele iniciar pra cortar o dano antes que o time dele converta o Roar em abate.
- fonte: pro_dados/razor.json; pro_dados/beastmaster.json; constants_abilities.json (beastmaster_primal_roar, beastmaster_inner_beast); items.json (sphere)

## Contra Jakiro (jakiro)
- placar: 94V-191J, 49,2% de vitória do Razor (pro_dados/razor.json)
- por que importa: suporte mais comum contra o Razor em pro (191 jogos, 2º lugar geral), controle de área direto na lane.
- janelas: o Jakiro é pos 5 puro, sai de wards e fecha Arcane Boots aos 11,7 min (pro_dados/jakiro.json); a ameaça dele vem toda do combo Ice Path + Macropyre a partir do nível 6. O Razor fecha BKB aos 24,7 min (pro_dados/razor.json), e esse BKB anula o kit inteiro: nenhuma habilidade do Jakiro atravessa imunidade mágica (constants_abilities.json).
- o que ele faz com você: Ice Path estuna quem entra na área; Macropyre aplica dano contínuo e não é dispelável, mas também não atravessa BKB.
- o que você faz com ele: Static Link rouba dano se ele tentar bater (raro, já que ele é suporte puro); Eye of the Storm busca ele quando a vida cai, e ele é squishy (GPM 315, sem itens de sobrevivência cedo).
- itens que viram: seu BKB resolve 100% do kit dele, já que nenhuma das habilidades listadas em constants_abilities.json atravessa imunidade mágica.
- como jogar: cuidado com o combo Dual Breath + Ice Path antes do seu nível 6; depois do seu BKB, ele vira alvo fácil pro Eye of the Storm numa troca de grupo.
- fonte: pro_dados/razor.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_macropyre, jakiro_dual_breath)

## Contra Tusk (tusk)
- placar: 78V-153J, 51,0% de vitória do Razor (pro_dados/razor.json)
- por que importa: 5º oponente com mais jogos de pro contra o Razor, iniciador que compartilha lane com frequência quando joga de roaming.
- janelas: o Tusk tem kit de alcance curto (Walrus Kick 250, Walrus Punch 150, constants_abilities.json) e depende de Blink pra chegar perto, fechado na mediana de 19,0 min (pro_dados/tusk.json). O Yasha do Razor (17,8 min, pro_dados/razor.json) já dá velocidade suficiente pra ficar fora desse alcance curto assim que fechar o item; depois que ele tem o Blink, ele caça em grupo via Snowball.
- o que ele faz com você: Walrus Kick stuna e atravessa BKB (bkbpierce sim), então mesmo com imunidade mágica você é stunado; Snowball desloca e desacelera, mas esse não atravessa BKB.
- o que você faz com ele: Static Link enquanto ele tenta chegar perto; Eye of the Storm busca ele se ficar exposto depois do próprio combo.
- itens que viram: como o Walrus Kick fura BKB, o Linken's Sphere resolve melhor esse disable específico (items.json).
- como jogar: mantenha distância do alcance curto dele antes de ele ter Blink (19 min); depois disso, ele só ameaça dentro do grupo, então evite ficar isolado perto de aliados.
- fonte: pro_dados/razor.json; pro_dados/tusk.json; constants_abilities.json (tusk_walrus_kick, tusk_snowball); items.json (sphere)

## Contra Warlock (warlock)
- placar: 87V-149J, 58,4% de vitória do Razor (pro_dados/razor.json)
- por que importa: 6º oponente com mais jogos de pro, suporte mais comum dentro do grupo que o Razor mais vence.
- janelas: o Warlock é suporte puro e lento: até os 20 min ele só tem Ring of Basilius (7,5 min), Magic Wand (9,4 min) e Arcane Boots (10,7 min, pro_dados/warlock.json), sem ameaça de luta real. O Razor domina a lane com Yasha (17,8 min, pro_dados/razor.json) e farm superior nessa janela inteira.
- o que ele faz com você: Fatal Bonds amarra e compartilha dano, mas é dispelável e não atravessa BKB; o golem da ultimate (Chaotic Offering) tanka mas não ameaça o DPS do Razor diretamente.
- o que você faz com ele: Static Link ignora o golem e rouba dano do próprio Warlock; Eye of the Storm busca ele se ficar exposto parado canalizando.
- itens que viram: seu BKB cancela Fatal Bonds e qualquer combo de iniciação dele; um Lotus Orb nele devolveria o seu Static Link, se o alvo estivesse protegido por ele (items.json).
- como jogar: pressione a lane cedo, antes dele ter Arcane Boots (10,7 min, pro_dados/warlock.json) pra sustentar mana; ele não tem resposta de burst, então troque auto attack sem medo até ele fechar o primeiro item de utilidade.
- fonte: pro_dados/razor.json; pro_dados/warlock.json; constants_abilities.json (warlock_fatal_bonds); items.json (lotus_orb)

## Contra Alchemist (alchemist)
- placar: 12V-32J, 37,5% de vitória do Razor (pro_dados/razor.json)
- por que importa: dois carries de pos 1 que raramente se enfrentam na lane (Alchemist geralmente safelane, Razor offlane), mas foi pedido explicitamente como exemplo de confronto que importa mesmo sem lane em comum; os power spikes de farm e o 1x1 corpo a corpo decidem o jogo quando se cruzam no mapa.
- janelas: o Alchemist tem o maior GPM da lista inteira de oponentes (768, pro_dados/alchemist.json) e fecha Radiance na mediana de 13,9 min (pro_dados/alchemist.json), com Chemical Rage dando até 120 de regeneração por segundo desde o nível 18 (constants_abilities.json). Até os 14 min o Razor (ainda sem item grande, Yasha só aos 17,8 min) está mais fraco em farm bruto que o Alchemist pós-Radiance; dos 15 aos 22 min o Alchemist já está queimando camp com a Radiance enquanto o Razor ainda está fechando Manta (21,3 min) e só chega no BKB aos 24,7 min (pro_dados/razor.json). Depois disso, se o Razor tiver fechado BKB e Manta, o duelo de DPS sustentado pode virar, mas o Alchemist costuma já ter aberto vantagem de patrimônio pelo ouro extra do Goblin's Greed (constants_abilities.json).
- o que ele faz com você: o Unstable Concoction carregado até 5 s dá stun de até 3,2 s e 360 de dano, seguido de Blink pra fechar o combo; nenhum dos dois atravessa BKB.
- o que você faz com ele: Static Link rouba dano físico dele durante o farm ou no meio do combo, cortando justamente o DPS que sustenta o Chemical Rage; Eye of the Storm busca ele se a vida cair.
- itens que viram: seu BKB (24,7 min, pro_dados/razor.json) anula o Unstable Concoction, a única ferramenta de iniciação que ele tem; mas o Radiance dele (13,9 min, pro_dados/alchemist.json) já está pronto bem antes, então a corrida de farm até lá é dele.
- como jogar: evite trocar farm 1x1 com ele antes do seu BKB, porque o combo Concoction + Blink é decisivo até lá; depois do BKB, você neutraliza a única iniciação dele e pode caçar ele puro no corpo a corpo.
- fonte: pro_dados/razor.json; pro_dados/alchemist.json; constants_abilities.json (alchemist_unstable_concoction, alchemist_chemical_rage, alchemist_goblins_greed)

## Contra Gyrocopter (gyrocopter)
- placar: 40V-62J, 64,5% de vitória do Razor (pro_dados/razor.json)
- por que importa: outro carry de pos 1 sem lane em comum (Gyrocopter é farmador de safelane), e a maior vantagem do Razor entre os carries com amostra válida (62 jogos), o exemplo direto do "dois carries que não se cruzam na lane mas o confronto importa".
- janelas: o Gyrocopter escala devagar: Falcon Blade aos 5,3 min, Power Treads aos 7,5 min, Aghanim's Scepter aos 18,5 min (dá o Side Gunner, que atravessa BKB), BKB próprio aos 24,6 min e Daedalus (greater_crit) só aos 28,4 min (pro_dados/gyrocopter.json). Até os 18 min nenhum dos dois ameaça o outro de verdade. Dos 18 aos 24 min o Razor já fechou Manta (21,3 min, pro_dados/razor.json) e está perto do próprio BKB (24,7 min) enquanto o Gyrocopter ainda está só no Scepter; depois dos 28 min, com o Daedalus dele pronto, o Flak Cannon vira ameaça de área que ignora BKB.
- o que ele faz com você: Flak Cannon é dano físico em área que atravessa BKB, e com o Scepter o Side Gunner soma mais dano que também atravessa; Rocket Barrage, Homing Missile e Call Down são mágicos e ficam bloqueados pelo seu BKB.
- o que você faz com ele: Static Link rouba dano dele, inclusive quando o Flak Cannon está ligado; Eye of the Storm busca ele quando a vida cai.
- itens que viram: seu BKB bloqueia 3 das 5 habilidades dele (Rocket Barrage, Homing Missile, Call Down), mas não o Flak Cannon físico; um Manta Style nele limparia debuffs antes de uma troca decisiva (items.json).
- como jogar: force a luta entre 18 e 24 min, antes do seu BKB mas também antes do Daedalus dele (28,4 min); depois dos 24,7 min, com seu BKB pronto, você ainda evita 3 das 5 habilidades, mas o Flak Cannon final, já com Daedalus, dói de verdade.
- fonte: pro_dados/razor.json; pro_dados/gyrocopter.json; constants_abilities.json (gyrocopter_flak_cannon, gyrocopter_rocket_barrage); items.json (greater_crit, manta)

## Contra Tiny (tiny)
- placar: 85V-163J, 52,1% de vitória do Razor (pro_dados/razor.json)
- por que importa: 4º oponente com mais jogos de pro contra o Razor, rival clássico de carry/offlane com trade físico direto.
- janelas: o Tiny cresce com Grow (passiva que soma dano, armadura e força do Toss conforme o nível, constants_abilities.json) e fecha Blink na mediana de 15,9 min, perto do Yasha do Razor (17,8 min, pro_dados/razor.json). O trade físico dos dois cedo é parelho; a partir dos 16-18 min, quando o Tiny sobe de nível, ele bate mais forte, mas o Static Link do Razor rouba justamente esse dano extra do Grow.
- o que ele faz com você: o combo Avalanche + Toss (stun em área seguido de lançamento) não atravessa BKB; Craggy Exterior aplica um debuff crescente em quem ataca ele no corpo a corpo, reduzindo o dano de quem insiste em trocar auto attack.
- o que você faz com ele: Static Link rouba o dano bônus do Grow durante o link, sem sofrer a penalidade do Craggy Exterior porque não é um ataque básico; Eye of the Storm busca ele com a vida baixa.
- itens que viram: seu BKB (24,7 min, pro_dados/razor.json) bloqueia o combo Avalanche + Toss inteiro, já que nenhuma das duas atravessa imunidade mágica (constants_abilities.json).
- como jogar: puxe ele pro Static Link em vez de trocar auto attack parado, porque o Craggy Exterior penaliza quem bate nele corpo a corpo; feche BKB antes de qualquer troca perto do nível 6 dele.
- fonte: pro_dados/razor.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_craggy_exterior, tiny_grow)

## Contra Crystal Maiden (crystal_maiden)
- placar: 33V-46J, 71,7% de vitória do Razor, a maior vantagem dele no kit inteiro com amostra válida (pro_dados/razor.json)
- por que importa: suporte duro com a maior vantagem medida do Razor entre todos os oponentes com 30+ jogos.
- janelas: a Crystal Maiden não tem mobilidade própria até o Aghanim's Shard (54% dos jogos, mediana 17,7 min) ou o Blink (33% dos jogos, mediana 23,1 min, pro_dados/crystal_maiden.json), e farma pouco pra se armar (GPM 297, pro_dados/crystal_maiden.json). O Yasha do Razor (17,8 min, pro_dados/razor.json) já dá mobilidade suficiente pra caçar ela fora de qualquer zona segura antes desses itens, já que chega quase junto do Shard dela.
- o que ela faz com você: Frostbite te trava parado, mas não atravessa BKB; Crystal Nova desacelera em área.
- o que você faz com ela: Static Link nela é quase um combo garantido, porque ela não tem fuga própria antes do Shard ou do Blink; Eye of the Storm busca ela sempre que exposta.
- itens que viram: seu BKB cancela o Frostbite (constants_abilities.json); o Glimmer Cape dela (invisibilidade por 5 s, items.json), que fecha na mediana de 21,1 min em 56% dos jogos de pro (pro_dados/crystal_maiden.json), é a resposta real contra o seu Static Link, já que esconde ela do alvo do link.
- como jogar: ataque ela isolada sempre que possível antes dela ter Blink ou Shard; seu farm (GPM 570) já supera o dela (297) com folga, então a lane sozinha já constrói a vantagem.
- fonte: pro_dados/razor.json; pro_dados/crystal_maiden.json; constants_abilities.json (crystal_maiden_frostbite); items.json (glimmer_cape)

## Contra Treant Protector (treant)
- placar: 19V-65J, 29,2% de vitória do Razor, a maior desvantagem dele no kit inteiro com amostra válida (pro_dados/razor.json)
- por que importa: maior desvantagem do Razor em todo o recorte de confrontos com amostra válida.
- janelas: o Treant é lento e sem farm (301 de ouro por minuto, pro_dados/treant.json), mas o Overgrowth já é ameaça desde o nível 6: raiz, impede atacar, usar blink e ficar invisível num raio de 800, e atravessa BKB (constants_abilities.json). Isso anula a resposta padrão do Razor em qualquer fase do jogo em que o Treant tiver Blink Dagger pra chegar perto, item que ele fecha na mediana de 26,4 min em 63% dos jogos de pro (pro_dados/treant.json).
- o que ele faz com você: Overgrowth te prende mesmo com BKB ativo, cancelando Static Link e Eye of the Storm no meio da troca; Leech Seed desarma no auto attack, cortando seu DPS físico enquanto ativo (esse não atravessa BKB).
- o que você faz com ele: Static Link nele rouba dano, mas o Treant não depende de DPS pra ganhar a troca, então o roubo pesa pouco; a prioridade real é nunca ficar perto do raio de 800 dele.
- itens que viram: o Overgrowth é "No Target" (não é alvo único, constants_abilities.json), então nem BKB nem Linken's Sphere resolvem (items.json).
- como jogar: jogue sempre fora do raio de 800 do Overgrowth depois do nível 6 do Treant; force a troca antes disso, ou isolado, longe do grupo onde o combo dele rende mais.
- fonte: pro_dados/razor.json; pro_dados/treant.json; constants_abilities.json (treant_overgrowth, treant_leech_seed); items.json (sphere)

## Contra Enchantress (enchantress)
- placar: 10V-32J, 31,2% de vitória do Razor, a segunda maior desvantagem dele no kit, no limite da amostra mínima de 30 jogos
- por que importa: segunda maior desvantagem medida do Razor com amostra válida.
- janelas: a Enchantress escala devagar (GPM 341, pro_dados/enchantress.json), mas o Impetus (dano que cresce com a distância do alvo, autocast, constants_abilities.json) pune justamente quem se afasta dela, o que é exatamente o que o Static Link força o Razor a fazer pra manter o link. O Hurricane Pike dela, presente em 37% dos jogos de pro com mediana de 32,6 min (pro_dados/enchantress.json), empurra os dois 425 de distância (items.json), abrindo o espaço ideal pro Impetus bater mais forte.
- o que ela faz com você: Impetus causa mais dano quanto mais longe o alvo está, punindo o Razor sempre que ele kita ou quando o Static Link o afasta dela puxando o alvo; Enchant dispela e desacelera.
- o que você faz com ela: Static Link rouba dano dela, mas ela não depende de auto attack sustentado de perto pra ganhar a troca, então o roubo pesa menos do que em outros matchups.
- itens que viram: o Hurricane Pike dela separa os dois pela distância ideal pro Impetus; seu BKB (24,7 min, pro_dados/razor.json) bloqueia o Enchant, mas não existe resposta direta contra o Impetus, que é passivo de ataque (constants_abilities.json).
- como jogar: feche distância rápido em vez de kitar, porque o Impetus escala com a distância; o próprio Static Link ajuda a grudar nela e negar o dano de longo alcance.
- fonte: pro_dados/razor.json; pro_dados/enchantress.json; constants_abilities.json (enchantress_impetus, enchantress_enchant); items.json (hurricane_pike)
