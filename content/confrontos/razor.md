---
id: confrontos-razor
heroi: Razor
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/razor.json (confrontos, resumo, itens)
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json, queenofpain.json, earth_spirit.json, mars.json, tidehunter.json, beastmaster.json, jakiro.json, tusk.json, warlock.json, alchemist.json, gyrocopter.json, tiny.json, crystal_maiden.json, treant.json, enchantress.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/razor.md, mars.md, tiny.md, tusk.md, warlock.md, tidehunter.md, beastmaster.md, queenofpain.md, earth_spirit.md, crystal_maiden.md, treant.md, enchantress.md, gyrocopter.md, jakiro.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/shadow_fiend.md, alchemist.md
---

## Contra Shadow Fiend (nevermore)
- placar: 89V-207J em pro, 43,0% de vitória do Razor (OpenDota /heroes/15/matchups via pro_dados/razor.json)
- por que importa: é o oponente com mais jogos de pro contra o Razor (207) e um rival clássico de mid, já que os dois disputam a rota do meio com frequência.
- janelas: até os 15 min o Shadow Fiend farma mais rápido (LH10 78 contra 54 do Razor, pro_dados) e fecha Mask of Madness na mediana de 10,6 min, trocando auto attack com lifesteal antes do Razor ter qualquer item grande. Dos 15 aos 22 min o Razor emparelha com Yasha (15:38) e BKB (18:52); o Shadow Fiend responde com Manta (16,0 min) e Dragon Lance (16,3 min) pra bater de mais longe e sair do alcance do Static Link. Depois dos 25 min o jogo vira corrida: ele quer fechar Requiem com o máximo de almas acumuladas enquanto o Razor sustenta a troca com Manta (22:01) e depois Satanic.
- o que ele faz com você: Shadowraze dá dano crescente por alma acumulada (Necromastery) se você ficar parado numa das três posições dele; o Requiem no fim de uma troca ainda assusta porque é automático até na morte dele.
- o que você faz com ele: Static Link (bkbpierce sim, não dispelável) rouba dano fixo do Shadow Fiend durante o link, inclusive atravessando o BKB dele, o que corta justamente o DPS que sustenta o Mask of Madness; Eye of the Storm sempre busca quem está com menos vida.
- itens que viram: seu BKB (18:52) bloqueia o Shadowraze porque a habilidade não atravessa imunidade mágica (bkbpierce não, constants_abilities.json), tirando a principal fonte de burst dele; Linken's Sphere no Shadow Fiend bloquearia o cast do seu Static Link (alvo único), mas é raro no build dele (1 de 29 jogos de torneio, porque_itens/shadow_fiend.md).
- como jogar: não troque auto attack parado dentro do alcance do Shadowraze antes do seu BKB; assim que ele avançar pra farmar, feche o Static Link, porque o roubo de dano já pune o DPS dele sozinho. Depois do seu BKB, procure a troca isolada antes dele fechar Manta e Dragon Lance.
- fonte: pro_dados/razor.json; pro_dados/nevermore.json; content/porque_itens/shadow_fiend.md; content/fichas/razor.md; constants_abilities.json (razor_static_link, razor_eye_of_the_storm, nevermore_shadowraze1)

## Contra Queen of Pain (queenofpain)
- placar: 71V-141J, 50,4% de vitória do Razor (pro_dados/razor.json)
- por que importa: segundo rival de mid mais comum contra o Razor em pro (141 jogos), outra mage de burst que disputa a mesma rota quando ele joga pos 2.
- janelas: a Queen of Pain fecha Power Treads aos 8,9 min, Kaya aos 14,2 e Veil of Discord aos 15,2 (fichas/queenofpain.md); até os 20 min ela vence trocas à distância com Shadow Strike e Scream of Pain. O Razor no mid chega em BKB aos 20:23 e Yasha aos 22:51 (fichas/razor.md, seção pos 2); depois do BKB dele, ele aguenta o combo dela e pode virar pra trocar auto attack via Static Link, já que o BKB dela sai bem mais tarde (mediana 28:56).
- o que ela faz com você: Sonic Wave é dano puro que atravessa BKB (bkbpierce sim), então mesmo com imunidade mágica você ainda leva o dano e o empurrão da ult; Shadow Strike e Scream of Pain não atravessam BKB e ficam bloqueadas assim que você tiver o item.
- o que você faz com ela: Static Link, não dispelável, rouba dano do corpo a corpo dela quando ela entra pra bater; Eye of the Storm cai nela quando a vida fica baixa, fechando a troca.
- itens que viram: seu BKB (18:52-20:23) anula Shadow Strike e Scream, mas não o Sonic Wave; o Linken's Sphere dela (raro, 10 de 66 jogos) bloquearia o cast do seu Static Link.
- como jogar: evite ficar parado no alcance do Scream antes do seu BKB; depois dele, persiga com Static Link, porque a defesa mágica real dela só chega quando ela fecha o próprio BKB, quase 9 min depois do seu.
- fonte: pro_dados/razor.json; pro_dados/queenofpain.json; content/fichas/queenofpain.md; content/fichas/razor.md; constants_abilities.json (queenofpain_sonic_wave, queenofpain_shadow_strike, queenofpain_scream_of_pain)

## Contra Earth Spirit (earth_spirit)
- placar: 23V-38J, 60,5% de vitória do Razor (pro_dados/razor.json)
- por que importa: mesma função multi-posição (mid/offlane); a própria ficha do Earth Spirit cita Razor entre os piores confrontos dele no Legend+, então o pro play confirma o que o dado público já aponta.
- janelas: o Earth Spirit é disabler cedo mas sem burst de farm (LH10 39, GPM 466 contra LH10 54, GPM 570 do Razor, pro_dados), então o Razor já sai na frente no farm ainda na lane. O BKB dele sai aos 21:54 (mid) ou 22:34 (offlane), pouco depois do do Razor (18:52-20:23): nessa janela de 2 a 4 min, qualquer combo de Rolling Boulder + Magnetize que ele tente fica travado se o Razor já tiver BKB.
- o que ele faz com você: Rolling Boulder stuna mas não atravessa BKB; Magnetize causa dano contínuo em área e atravessa BKB (bkbpierce sim), só que é dano baixo sozinho sem o resto do combo.
- o que você faz com ele: seu BKB, mais cedo que o dele, anula Rolling Boulder, Boulder Smash e Geomagnetic Grip (nenhum atravessa imunidade mágica); Static Link rouba dano físico dele, que não tem fonte própria de sustain.
- itens que viram: a vantagem de timing do seu BKB sobre o dele é o item que decide a janela; o Linken's Sphere dele bloquearia só o cast do seu Static Link, não o resto.
- como jogar: force a troca antes dos 20 min, enquanto seu BKB já está pronto e o dele ainda não; depois que os dois tiverem BKB, a luta vira dano físico puro, onde seu DPS leva vantagem.
- fonte: pro_dados/razor.json; pro_dados/earth_spirit.json; content/fichas/earth_spirit.md; content/fichas/razor.md; constants_abilities.json (earth_spirit_rolling_boulder, earth_spirit_magnetize, earth_spirit_geomagnetic_grip)

## Contra Mars (mars)
- placar: 91V-173J, 52,6% de vitória do Razor (pro_dados/razor.json)
- por que importa: maior rival de mesma função (offlane contra offlane) entre os mais jogados, terceiro em número de jogos de pro contra o Razor.
- janelas: o Mars abre com Phase Boots e Bracer, e tem Bulwark desde o nível 1 bloqueando 40-70% do dano físico de frente, o que já reduz o dano de ataque básico do Razor na lane cedo. O Blink é o item de meio de jogo mais comprado por jogadores de Mars (content/fichas/mars.md); o Razor chega em Yasha (15:38) e BKB (18:52) nesse mesmo intervalo, abrindo a janela em que ele aguenta a iniciação.
- o que ele faz com você: Spear te prende e empurra, seguido de God's Rebuke crítico físico; Arena of Blood cerca o grupo e caça quem ficar perto da borda. O Bulwark ativo absorve boa parte do seu dano de ataque básico vindo de frente.
- o que você faz com ele: Static Link rouba dano físico dele mesmo com Bulwark ativo, porque não é um ataque básico e não é bloqueado pelo escudo; Eye of the Storm reduz a armadura dele, abrindo mais o Bulwark pros seus aliados.
- itens que viram: seu BKB (18:52) bloqueia Spear e Arena of Blood (nenhum dos dois atravessa imunidade mágica), cortando quase toda a iniciação dele de uma vez.
- como jogar: na lane, ataque pelos lados ou por trás pra fugir do Bulwark de frente; depois do seu BKB, ele perde a ferramenta de prender você, então force a troca direta.
- fonte: pro_dados/razor.json; pro_dados/mars.json; content/fichas/mars.md; content/fichas/razor.md; constants_abilities.json (mars_spear, mars_bulwark, mars_arena_of_blood)

## Contra Tidehunter (tidehunter)
- placar: 67V-113J, 59,3% de vitória do Razor, a maior vantagem dele com amostra grande entre os rivais de mesma função (pro_dados/razor.json)
- por que importa: offlane contra offlane, com a maior vantagem medida do Razor dentro do grupo de mesma função e amostra robusta de 113 jogos.
- janelas: o Tidehunter é tanque lento de farm baixo e só fica forte perto dos 21 min, quando fecha Blink pro combo com Ravage (content/fichas/tidehunter.md); até lá ele gasta o early em dois Bracers e Phase Boots, enquanto o Razor sai na frente no DPS. Depois do Blink dele (21 min), que vem depois do BKB do Razor (18:52-20:23), o Razor já aguenta o stun e sobrevive à iniciação.
- o que ele faz com você: Ravage stuna em área e não atravessa BKB; Kraken Shell bloqueia parte do seu dano de ataque básico.
- o que você faz com ele: Static Link e Eye of the Storm não são ataques básicos, então furam o bloqueio do Kraken Shell; o roubo de dano do link corta a sustentação dele numa troca prolongada.
- itens que viram: seu BKB sai antes do Blink+Ravage dele, então você aguenta a iniciação; o Shiva's Guard dele (mediana 33 min, content/fichas/tidehunter.md) responde ao seu DPS cortando sua velocidade de ataque e de movimento.
- como jogar: force a troca antes dos 21 min, na janela em que ele ainda não tem Blink+Ravage; depois disso, cuidado com o momento exato do stun em área e tente já estar com BKB pronto antes de qualquer luta de grupo.
- fonte: pro_dados/razor.json; pro_dados/tidehunter.json; content/fichas/tidehunter.md; content/fichas/razor.md; constants_abilities.json (tidehunter_ravage, tidehunter_kraken_shell)

## Contra Beastmaster (beastmaster)
- placar: 56V-126J, 44,4% de vitória do Razor (pro_dados/razor.json)
- por que importa: mesma função (mid/offlane), confronto de desvantagem com amostra robusta de 126 jogos.
- janelas: o Beastmaster sobe Helm of Iron Will, depois Helm of the Dominator e Blink como item staple de meio de jogo (content/fichas/beastmaster.md); o Primal Roar está disponível desde o nível 6. Diferente da maioria dos rivais do Razor, o stun dele atravessa BKB (bkbpierce sim, constants_abilities.json), então mesmo depois do Razor fechar BKB (18:52), o Roar continua travando.
- o que ele faz com você: Primal Roar te stuna mesmo com BKB ativo, abrindo a luta sem que seu item resolva nada; Inner Beast dá velocidade de ataque pra ele e pros bichos dominados, também atravessando BKB.
- o que você faz com ele: Static Link rouba dano enquanto ele empurra com os bichos dominados; Eye of the Storm reduz a armadura dele e do creep.
- itens que viram: como o BKB sozinho não resolve o Roar, o Linken's Sphere (alvo único) é a resposta real, o mesmo padrão que a ficha do Razor já aponta pra Lion e Shadow Shaman.
- como jogar: compre Linken's Sphere mais cedo que de costume contra ele, porque seu BKB não bloqueia o Primal Roar; link nele assim que ele iniciar pra cortar o dano antes que o time dele converta o Roar em abate.
- fonte: pro_dados/razor.json; pro_dados/beastmaster.json; content/fichas/beastmaster.md; content/fichas/razor.md; constants_abilities.json (beastmaster_primal_roar, beastmaster_inner_beast)

## Contra Jakiro (jakiro)
- placar: 94V-191J, 49,2% de vitória do Razor (pro_dados/razor.json)
- por que importa: suporte mais comum contra o Razor em pro (191 jogos, 2º lugar geral), controle de área direto na lane.
- janelas: o Jakiro é pos 5 puro, sai de wards e fecha Arcane Boots aos 11,7 min (pro_dados/jakiro.json); a ameaça dele vem toda do combo Ice Path + Macropyre a partir do nível 6. O Razor fecha BKB aos 18:52, bem antes do Aghanim's Scepter dele (que não tem efeito confirmado localmente nas fichas), e esse BKB anula o kit inteiro: nenhuma habilidade do Jakiro atravessa imunidade mágica.
- o que ele faz com você: Ice Path estuna quem entra na área; Macropyre aplica dano contínuo e não é dispelável, mas também não atravessa BKB.
- o que você faz com ele: Static Link rouba dano se ele tentar bater (raro, já que ele é suporte puro); Eye of the Storm busca ele quando a vida cai, e ele é squishy (GPM 315, sem itens de sobrevivência cedo).
- itens que viram: seu BKB resolve 100% do kit dele, já que nenhuma das habilidades listadas em constants_abilities.json atravessa imunidade mágica.
- como jogar: cuidado com o combo Dual Breath + Ice Path antes do seu nível 6; depois do seu BKB, ele vira alvo fácil pro Eye of the Storm numa troca de grupo.
- fonte: pro_dados/razor.json; pro_dados/jakiro.json; content/fichas/jakiro.md; content/fichas/razor.md; constants_abilities.json (jakiro_ice_path, jakiro_macropyre, jakiro_dual_breath)

## Contra Tusk (tusk)
- placar: 78V-153J, 51,0% de vitória do Razor (pro_dados/razor.json)
- por que importa: 5º oponente com mais jogos de pro contra o Razor, iniciador que compartilha lane com frequência quando joga de roaming.
- janelas: o Tusk tem kit de alcance curto (Walrus Kick 250, Walrus Punch 150) e depende de Blink pra chegar perto, fechado na mediana de 19:36 (pos 4) ou 21:00 (pos 5, content/fichas/tusk.md). O Yasha do Razor (15:38) já dá velocidade suficiente pra ficar fora desse alcance curto antes do Blink dele; depois que ele tem o item, ele caça em grupo via Snowball.
- o que ele faz com você: Walrus Kick stuna e atravessa BKB (bkbpierce sim), então mesmo com imunidade mágica você é stunado; Snowball desloca e desacelera, mas esse não atravessa BKB.
- o que você faz com ele: Static Link enquanto ele tenta chegar perto; Eye of the Storm busca ele se ficar exposto depois do próprio combo.
- itens que viram: como o Walrus Kick fura BKB, o Linken's Sphere resolve melhor esse disable específico, o mesmo padrão do Beastmaster.
- como jogar: mantenha distância do alcance curto dele antes de ele ter Blink (19-21 min); depois disso, ele só ameaça dentro do grupo, então evite ficar isolado perto de aliados.
- fonte: pro_dados/razor.json; pro_dados/tusk.json; content/fichas/tusk.md; content/fichas/razor.md; constants_abilities.json (tusk_walrus_kick, tusk_snowball)

## Contra Warlock (warlock)
- placar: 87V-149J, 58,4% de vitória do Razor (pro_dados/razor.json)
- por que importa: 6º oponente com mais jogos de pro, suporte mais comum dentro do grupo que o Razor mais vence.
- janelas: o Warlock é 100% pos 5 nos dados locais (content/fichas/warlock.md) e lento: até os 20 min ele só tem Ring of Basilius, Magic Wand e Arcane Boots, sem ameaça de luta real. O Razor domina a lane com Yasha (15:38) e farm superior nessa janela inteira.
- o que ele faz com você: Fatal Bonds amarra e compartilha dano, mas é dispelável e não atravessa BKB; o golem da ultimate (Chaotic Offering) tanka mas não ameaça o DPS do Razor diretamente.
- o que você faz com ele: Static Link ignora o golem e rouba dano do próprio Warlock; Eye of the Storm busca ele se ficar exposto parado canalizando.
- itens que viram: seu BKB cancela Fatal Bonds e qualquer combo de iniciação dele; o Lotus Orb dele (raro, 1 de 33 jogos) devolveria um Static Link se o alvo fosse protegido por ele.
- como jogar: pressione a lane cedo, antes dele ter Arcane Boots (12:35) pra sustentar mana; ele não tem resposta de burst, então troque auto attack sem medo até ele fechar o primeiro item de utilidade.
- fonte: pro_dados/razor.json; pro_dados/warlock.json; content/fichas/warlock.md; content/fichas/razor.md; constants_abilities.json (warlock_fatal_bonds)

## Contra Alchemist (alchemist)
- placar: 12V-32J, 37,5% de vitória do Razor (pro_dados/razor.json)
- por que importa: dois carries de pos 1 que raramente se enfrentam na lane (Alchemist geralmente safelane, Razor offlane), mas foi pedido explicitamente como exemplo de confronto que importa mesmo sem lane em comum; os power spikes de farm e o 1x1 corpo a corpo decidem o jogo quando se cruzam no mapa.
- janelas: o Alchemist tem o maior GPM da lista inteira de oponentes (768, pro_dados/alchemist.json) e fecha Radiance na mediana de 14,3 min (content/porque_itens/alchemist.md), com Chemical Rage dando até 120 de regeneração por segundo desde o nível 18. Até os 14 min o Razor (ainda sem item grande, Yasha só aos 15:38) está mais fraco em farm bruto que o Alchemist pós-Radiance; dos 15 aos 22 min o Alchemist já está queimando camp com a Radiance enquanto o Razor só fecha BKB aos 18:52 e Manta aos 22:01. Depois disso, se o Razor tiver fechado Manta e Satanic, o duelo de DPS sustentado pode virar, mas o Alchemist costuma já ter aberto vantagem de patrimônio pelo ouro extra do Greevil's Greed.
- o que ele faz com você: o Unstable Concoction carregado até 5 s dá stun de até 3,2 s e 360 de dano, seguido de Blink (mediana 22:51) pra fechar o combo; nenhum dos dois atravessa BKB.
- o que você faz com ele: Static Link rouba dano físico dele durante o farm ou no meio do combo, cortando justamente o DPS que sustenta o Chemical Rage; Eye of the Storm busca ele se a vida cair.
- itens que viram: seu BKB (18:52) anula o Unstable Concoction, a única ferramenta de iniciação que ele tem; mas o Radiance dele (14,3 min) já está pronto bem antes, então a corrida de farm nesses 15 min é dele.
- como jogar: evite trocar farm 1x1 com ele antes do seu BKB, porque o combo Concoction + Blink é decisivo até lá; depois do BKB, você neutraliza a única iniciação dele e pode caçar ele puro no corpo a corpo.
- fonte: pro_dados/razor.json; pro_dados/alchemist.json; content/porque_itens/alchemist.md; content/fichas/razor.md; constants_abilities.json (alchemist_unstable_concoction)

## Contra Gyrocopter (gyrocopter)
- placar: 40V-62J, 64,5% de vitória do Razor (pro_dados/razor.json)
- por que importa: outro carry de pos 1 sem lane em comum (Gyrocopter é farmador de safelane), e a maior vantagem do Razor entre os carries com amostra válida (62 jogos), o exemplo direto do "dois carries que não se cruzam na lane mas o confronto importa".
- janelas: o Gyrocopter escala devagar: Falcon Blade aos 4:54, Power Treads aos 7:26, Aghanim's Scepter aos 17:44 (dá o Side Gunner, que atravessa BKB), BKB aos 24:46 e Daedalus só aos 30:06 (content/fichas/gyrocopter.md). Até os 17 min nenhum dos dois ameaça o outro de verdade. Dos 18 aos 25 min o Razor (BKB 18:52, Manta 22:01) já está pronto pra lutar enquanto o Gyrocopter ainda está montando o Scepter; depois dos 30 min, com o Daedalus dele pronto, o Flak Cannon vira ameaça de área que ignora BKB.
- o que ele faz com você: Flak Cannon é dano físico em área que atravessa BKB, e com o Scepter o Side Gunner soma mais dano que também atravessa; Rocket Barrage, Homing Missile e Call Down são mágicos e ficam bloqueados pelo seu BKB.
- o que você faz com ele: Static Link rouba dano dele, inclusive quando o Flak Cannon está ligado; Eye of the Storm busca ele quando a vida cai.
- itens que viram: seu BKB bloqueia 3 das 5 habilidades dele (Rocket Barrage, Homing Missile, Call Down), mas não o Flak Cannon físico; o Manta dele (32% dos jogos, dispel rápido) limpa debuffs antes de uma troca decisiva.
- como jogar: force a luta entre 18 e 28 min, na janela em que você já tem BKB e ele ainda não fechou Daedalus nem o DPS físico do Flak Cannon.
- fonte: pro_dados/razor.json; pro_dados/gyrocopter.json; content/fichas/gyrocopter.md; content/fichas/razor.md; constants_abilities.json (gyrocopter_flak_cannon, gyrocopter_rocket_barrage)

## Contra Tiny (tiny)
- placar: 85V-163J, 52,1% de vitória do Razor (pro_dados/razor.json)
- por que importa: 4º oponente com mais jogos de pro contra o Razor, rival clássico de carry/offlane com trade físico direto.
- janelas: o Tiny cresce com Grow (passiva que soma dano, armadura e força do Toss conforme o nível) e fecha Blink na mediana de 15,9 min, perto do Yasha do Razor (15:38, pro_dados/tiny.json). O trade físico dos dois cedo é parelho; a partir dos 16-18 min, quando o Tiny sobe de nível, ele bate mais forte, mas o Static Link do Razor rouba justamente esse dano extra do Grow.
- o que ele faz com você: o combo Avalanche + Toss (stun em área seguido de lançamento) não atravessa BKB; Craggy Exterior aplica um debuff crescente em quem ataca ele no corpo a corpo, reduzindo o dano de quem insiste em trocar auto attack.
- o que você faz com ele: Static Link rouba o dano bônus do Grow durante o link, sem sofrer a penalidade do Craggy Exterior porque não é um ataque básico; Eye of the Storm busca ele com a vida baixa.
- itens que viram: seu BKB (18:52) bloqueia o combo Avalanche + Toss inteiro, já que nenhuma das duas atravessa imunidade mágica.
- como jogar: puxe ele pro Static Link em vez de trocar auto attack parado, porque o Craggy Exterior penaliza quem bate nele corpo a corpo; feche BKB antes de qualquer troca perto do nível 6 dele.
- fonte: pro_dados/razor.json; pro_dados/tiny.json; content/fichas/razor.md; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_craggy_exterior, tiny_grow)

## Contra Crystal Maiden (crystal_maiden)
- placar: 33V-46J, 71,7% de vitória do Razor, a maior vantagem dele no kit inteiro com amostra válida (pro_dados/razor.json)
- por que importa: suporte duro com a maior vantagem medida do Razor entre todos os oponentes com 30+ jogos.
- janelas: a Crystal Maiden não tem mobilidade própria até o Aghanim's Shard (27% dos jogos no meio de jogo) ou o Blink (24,1% no fim, content/fichas/crystal_maiden.md), e tem a vida mais baixa do jogo (120 base, 0 armadura). O Yasha do Razor (15:38) já dá mobilidade suficiente pra caçar ela fora de qualquer zona segura antes desses itens.
- o que ela faz com você: Frostbite te trava parado, mas não atravessa BKB; Crystal Nova desacelera em área.
- o que você faz com ela: Static Link nela é quase um combo garantido, porque ela não tem fuga própria antes do Shard ou do Blink; Eye of the Storm busca ela sempre que exposta.
- itens que viram: seu BKB cancela o Frostbite; o Glimmer Cape dela (invisibilidade por 5 s) é a resposta real contra o seu Static Link, já que esconde ela do alvo do link.
- como jogar: ataque ela isolada sempre que possível antes dela ter Blink ou Shard; seu farm (GPM 570) já supera o dela (297) com folga, então a lane sozinha já constrói a vantagem.
- fonte: pro_dados/razor.json; pro_dados/crystal_maiden.json; content/fichas/crystal_maiden.md; content/fichas/razor.md; constants_abilities.json (crystal_maiden_frostbite)

## Contra Treant Protector (treant)
- placar: 19V-65J, 29,2% de vitória do Razor, a maior desvantagem dele no kit inteiro; a própria ficha do Razor já lista Treant como o pior confronto medido (29%)
- por que importa: maior desvantagem do Razor em todo o recorte de confrontos, confirmada de forma independente na ficha do próprio Razor.
- janelas: o Treant é lento (280 de movimento) e sem farm (313 de ouro por minuto, content/fichas/treant.md), mas o Overgrowth já é ameaça desde o nível 6: raiz, impede atacar, usar blink e ficar invisível num raio de 800, e atravessa BKB. Isso anula a resposta padrão do Razor em qualquer fase do jogo em que o Treant tiver Blink Dagger pra chegar perto (comprado em quase todo jogo do herói segundo o item mais recorrente dele).
- o que ele faz com você: Overgrowth te prende mesmo com BKB ativo, cancelando Static Link e Eye of the Storm no meio da troca; Leech Seed desarma no auto attack, cortando seu DPS físico enquanto ativo (esse não atravessa BKB).
- o que você faz com ele: Static Link nele rouba dano, mas o Treant não depende de DPS pra ganhar a troca, então o roubo pesa pouco; a prioridade real é nunca ficar perto do raio de 800 dele.
- itens que viram: o Overgrowth é "No Target" (não é alvo único), então nem BKB nem Linken's Sphere resolvem, exatamente o padrão que a própria ficha do Razor já identifica como os piores matchups dele.
- como jogar: jogue sempre fora do raio de 800 do Overgrowth depois do nível 6 do Treant; force a troca antes disso, ou isolado, longe do grupo onde o combo dele rende mais.
- fonte: pro_dados/razor.json; content/fichas/treant.md; content/fichas/razor.md (seção Black King Bar, lista dos 5 piores matchups); constants_abilities.json (treant_overgrowth, treant_leech_seed)

## Contra Enchantress (enchantress)
- placar: 10V-32J, 31,2% de vitória do Razor, a segunda maior desvantagem dele no kit, no limite da amostra mínima de 30 jogos
- por que importa: segunda maior desvantagem medida do Razor com amostra válida.
- janelas: a Enchantress escala devagar (GPM 341), mas o Impetus (dano que cresce com a distância do alvo, autocast) pune justamente quem se afasta dela, o que é exatamente o que o Static Link força o Razor a fazer pra manter o link. O Hurricane Pike dela (pico de compra aos 30 min, segundo item mais comprado no total, content/fichas/enchantress.md) empurra os dois 425 de distância, abrindo o espaço ideal pro Impetus bater mais forte.
- o que ela faz com você: Impetus causa mais dano quanto mais longe o alvo está, punindo o Razor sempre que ele kita ou quando o Static Link o afasta dela puxando o alvo; Enchant dispela e desacelera.
- o que você faz com ela: Static Link rouba dano dela, mas ela não depende de auto attack sustentado de perto pra ganhar a troca, então o roubo pesa menos do que em outros matchups.
- itens que viram: o Hurricane Pike dela separa os dois pela distância ideal pro Impetus; seu BKB bloqueia o Enchant, mas não existe resposta direta contra o Impetus, que é passivo de ataque.
- como jogar: feche distância rápido em vez de kitar, porque o Impetus escala com a distância; o próprio Static Link ajuda a grudar nela e negar o dano de longo alcance.
- fonte: pro_dados/razor.json; pro_dados/enchantress.json; content/fichas/enchantress.md; content/fichas/razor.md; constants_abilities.json (enchantress_impetus, enchantress_enchant)
