---
id: confrontos-gyrocopter
heroi: Gyrocopter
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/gyrocopter.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/shredder.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/windrunner.json
- dota-hub-conteudo-novo/pro_dados/earthshaker.json
- dota-hub-conteudo-novo/pro_dados/dazzle.json
- dota-hub-conteudo-novo/pro_dados/enchantress.json
- dota-hub-conteudo-novo/pro_dados/treant.json
- dota-hub-conteudo-novo/pro_dados/nyx_assassin.json
- dota-hub-conteudo-novo/pro_dados/alchemist.json
- dota-hub-conteudo-novo/pro_dados/morphling.json
- dota-hub-conteudo-novo/pro_dados/luna.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Como essa lista foi montada

Gyrocopter é carry (pos1) quase sempre, sem lane fixa contra metade dos heróis do jogo. Por isso os 16 oponentes abaixo misturam quatro critérios, citados em cada bloco: os 6 com mais partidas profissionais registradas contra ele (`pro_dados/gyrocopter.json`, confrontos do OpenDota, patches 7.40+7.41), os carries de mesma posição mais jogados contra ele, os 3 melhores e 3 piores placares com amostra de 30+ jogos, e os carries mais jogados em pro no patch mesmo sem dividir lane com ele (caso do Alchemist e do Morphling, o exemplo que deu origem a essa página).

## Contra Jakiro (jakiro)

- placar: 135V/266 (50,8%) a favor do Gyro, em partidas de liga 7.40+7.41 (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: é o oponente com mais jogos profissionais registrados contra o Gyro nesse período, de longe. Suporte de duas cabeças que estuda a lane com Ice Path e Dual Breath.
- janelas: até 10 min, Jakiro trava a lane com Ice Path (stun até 2s) + Dual Breath (slow) enquanto o Gyro ainda não tem Falcon Blade (mediana 5:18, `pro_dados/gyrocopter.json`) pra sustentar mana. 11-18 min, Jakiro fecha Arcane Boots (11:42, `pro_dados/jakiro.json`) e já tem Macropyre no nível 6; o Gyro fecha Treads (7:30) antes disso e começa a virar a lane assim que abre Flak Cannon. Depois de 18 min, o Gyro puxa Aghanim's Scepter (18:30) e o Side Gunner ignora qualquer peel físico do time de Jakiro, que só fecha Staff of Wizardry (25:06) sem burst de alvo único pra te deter.
- o que ele faz com você: Ice Path encaixado com Dual Breath prende e desgasta antes do seu Flak Cannon sair; Macropyre (dano por 10s em linha) nega o espaço onde você quer farmar ou lutar.
- o que você faz com ele: Flak Cannon (raio 1250, bkb-pierce) acerta Jakiro de longe mesmo ele ficando atrás do time; Homing Missile (stun 1,3 a 2,5s conforme o nível) cancela o cast do Macropyre se acertar antes.
- itens que viram: seu Aghanim's Scepter resolve mesmo com peel físico no time dele; seu Black King Bar (24:36) bloqueia o stun do Ice Path e o slow do Dual Breath na hora de entrar.
- como jogar: não force troca antes do nível 6; depois disso, fique dentro do raio de 1250 do Flak Cannon e deixe o dano em área decidir. Guarde o Homing Missile pra interromper o Macropyre antes dele carregar de vez.
- fonte: pro_dados/gyrocopter.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_macropyre, gyrocopter_flak_cannon, gyrocopter_homing_missile)

## Contra Dragon Knight (dragon_knight)

- placar: 128V/246 (52,0%) a favor do Gyro (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: 2º oponente com mais jogos profissionais contra o Gyro. Mesma função: right-clicker que também escala com crit e Black King Bar, com lane em comum frequente.
- janelas: até 6 min, os dois fecham a 1ª bota quase junto (DK Treads 6:00, Gyro Falcon Blade 5:18 + Treads logo depois), farm parelho. 16-20 min, DK fecha Blink Dagger (16:12, `pro_dados/dragon_knight.json`) e já ameaça o gank com Dragon Tail; o Gyro ainda não tem Scepter (18:30), é a janela de risco. Depois de 24 min, o Gyro fecha Black King Bar (24:36) antes do Claymore de DK (24:18, componente de crit): dali o Flak Cannon, que ignora BKB, bate mais rápido que o autoataque simples dele.
- o que ele faz com você: Breathe Fire reduz seu dano de ataque por 11s, cortando o DPS do Flak Cannon; Dragon Tail (stun até 2,4s) abre o combo se ele blinkar em cima de você antes do seu BKB.
- o que você faz com ele: Homing Missile (dano até 360 + stun) interrompe a aproximação de DK antes dele chegar; Flak Cannon continua acertando igual durante a troca, porque DK não tem evasão nem spell immunity própria.
- itens que viram: seu Black King Bar (24:36) nulifica o Dragon Tail; seu Daedalus (28:24) desequilibra o DPS a seu favor, porque DK raramente estende pra itens de crit espelhados tão cedo.
- como jogar: evite trocar corpo a corpo antes do seu Scepter; use o Afterburner (velocidade extra a cada acerto) pra ficar fora do alcance do Dragon Tail até estar pronto pra revidar.
- fonte: pro_dados/gyrocopter.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_breathe_fire, dragon_knight_dragon_tail, gyrocopter_afterburner)

## Contra Tusk (tusk)

- placar: 114V/239 (47,7%) a favor do Gyro (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: 3º oponente com mais jogos profissionais contra o Gyro. Suporte de gank clássico (Ice Shards + Snowball + Walrus Punch) que caça carries isolados antes do nível 6.
- janelas: até 10 min, Tusk já tem o combo pronto desde o nível 1 (Snowball é a 1ª skill), e o Gyro sem Flak Cannon (nível 6) não tem resposta em área pra limpar o gank. 10-19 min, o ritmo equilibra: o Gyro farma rápido (gpm 643) e abre distância; Tusk fecha Blink Dagger (19:00, `pro_dados/tusk.json`) pra voltar a ameaçar. Depois de 19 min, Tusk sozinho não tem DPS sustentado pra vencer uma troca direta contra o Flak Cannon.
- o que ele faz com você: Snowball (um aliado vira bola de neve e te atordoa 0,6 a 1,2s no impacto) seguido de Walrus Punch (crítico bkb-pierce) é o combo de pickoff; Ice Shards pode te prender contra terreno.
- o que você faz com ele: Flak Cannon (área, bkb-pierce) acerta Tusk e qualquer aliado perto durante o combo; Homing Missile interrompe o Snowball antes dele pegar embalo.
- itens que viram: seu Black King Bar (24:36) não bloqueia o Walrus Punch (é bkb-pierce), então a saída real é distância: Hurricane Pike situacional empurra Tusk 425 de você antes do soco.
- como jogar: evite farmar sozinho nos cantos do mapa antes do nível 6; depois disso, o Flak Cannon limpa o combo de perto. Guarde o TP pra fugir do Snowball em vez de tentar sobreviver dentro dele.
- fonte: pro_dados/gyrocopter.json; pro_dados/tusk.json; constants_abilities.json (tusk_walrus_punch, tusk_snowball)

## Contra Shadow Fiend (nevermore)

- placar: 113V/235 (48,1%) a favor do Gyro (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: 4º oponente com mais jogos profissionais contra o Gyro e mesma função: carry de agilidade que também fecha Falcon Blade e Treads cedo, com muita lane em comum na fase 1.
- janelas: até 6 min, os dois abrem perto (SF Falcon Blade 6:12, Gyro 5:18, partidas pro 7.40-7.41 (OpenDota)); quem acerta mais Shadowraze ou Rocket Barrage puxa a lane. 10-16 min, SF fecha Mask of Madness (10:12) e dobra o ritmo de farm; o Gyro ainda está montando o crit. Depois de 18 min, o Gyro fecha Scepter (18:30) e o Side Gunner (bkb-pierce) resolve contra um BKB que SF só fecha bem mais tarde (25:12).
- o que ele faz com você: Shadowraze (3 posições, sem stun, mas escala com Necromastery) chunka seu HP de longe se você ficar parado perto da linha de creep; Requiem of Souls (até 20 almas, dano em área ao redor do próprio SF) pune quem entra perto dele depois do nível 6.
- o que você faz com ele: SF não tem stun nem escape no kit; Homing Missile (stun até 2,5s) trava ele parado pro resto do combo, e Flak Cannon ignora o Manta Style que ele compra (16:00), porque as imagens dele tomam 300% de dano de qualquer jeito.
- itens que viram: seu Black King Bar (24:36) fecha pouco antes do dele (25:12): nessa janela você pode iniciar sem medo do combo de Raze.
- como jogar: na lane, respeite o alcance do Shadowraze e não fique parado em cima de creep morto; depois do seu Scepter, cace SF isolado, porque ele não tem como fugir do Homing Missile.
- fonte: pro_dados/gyrocopter.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem)

## Contra Snapfire (snapfire)

- placar: 113V/228 (49,6%) a favor do Gyro (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: 5º oponente com mais jogos profissionais contra o Gyro. Suporte de poke e zonamento a longa distância, bem comum nesse confronto.
- janelas: até 10 min, Snapfire farma pouco (gpm 413) mas poka a lane com Scatterblast; o Gyro sustenta com Falcon Blade. 15-17 min, Snapfire fecha o Aghanim's Shard (16:54, `pro_dados/snapfire.json`), que turbina o Firesnap Cookie com um Mortimer Kiss extra (40% do dano de impacto) e cura o alvo; o Gyro ainda não tem Scepter (18:30). Depois de 18 min, o dano em área do Gyro supera o poke pontual dela, e o Scatterblast (slow) não impede o cast do Flak Cannon.
- o que ela faz com você: Mortimer Kisses (barragem de 5,5s a longa distância) chunka seu HP antes de você chegar perto; Scatterblast (cone, slow) atrasa sua aproximação.
- o que você faz com ele: seu alcance de Flak Cannon (raio 1250) alcança ela de volta mesmo sob o poke dela; Homing Missile interrompe o Firesnap Cookie se acertar durante o cast.
- itens que viram: o Shard dela (16:54) turbina o combo do Firesnap Cookie, não o alcance; seu Scepter (18:30) chega pouco depois e devolve em dano de área que não depende de mirar ninguém específico.
- como jogar: não troque à distância contra o Mortimer Kisses sem sustain; depois do Flak Cannon pronto, feche a distância rápido, porque o DPS sustentado dela é mais fraco que o seu crit, mesmo com o Lil' Shredder (que já é um buff de ataque à distância, não corpo a corpo).
- fonte: pro_dados/gyrocopter.json; pro_dados/snapfire.json; api.opendota.com/api/constants/aghs_desc (shard/scepter de Snapfire)

## Contra Timbersaw (shredder)

- placar: 108V/216 (50,0%), equilibrado (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: 6º oponente com mais jogos profissionais contra o Gyro. Offlaner tanque que reduz atributos físicos e disputa o mesmo espaço de farm na selva.
- janelas: até 13 min, Timbersaw fecha Kaya (13:00, `pro_dados/shredder.json`) e já sustenta mana na lane; o Gyro ainda monta o crit (Blade of Alacrity, 13:12). 18-20 min, Timbersaw fecha Kaya and Sange (18:06), que dá resistência a lentidão e amplificação de feitiço (não resistência mágica); o Gyro fecha Scepter (18:30) na mesma janela, e o Side Gunner (dano físico) não é afetado por nenhum dos dois bônus do item. Depois de 24 min, o Gyro fecha BKB (24:36) e o Whirling Death (redução de atributo, sem stun) deixa de assustar.
- o que ele faz com você: Whirling Death reduz sua Agilidade (seu atributo primário, -13%) continuamente enquanto ele fica perto, cortando seu dano de ataque; Chakram zoneia a área onde você quer ficar parado batendo Flak Cannon.
- o que você faz com ele: Flak Cannon (físico, bkb-pierce) acerta igual, porque o Kaya and Sange dele não dá nenhuma resistência contra dano físico; Homing Missile (mágico) ainda acerta, porque ele não tem spell immunity própria.
- itens que viram: seu Daedalus (28:24) soma crítico em cima do seu dano físico, que nenhum item dele reduz; o BKB dele, se comprar, não resolve contra dano físico em área.
- como jogar: não fique parado dentro do raio do Whirling Death por muito tempo; prefira hit-and-run com o Afterburner até ter o Flak Cannon pronto pra sustentar a troca.
- fonte: pro_dados/gyrocopter.json; pro_dados/shredder.json; constants_abilities.json (shredder_whirling_death, shredder_chakram)

## Contra Tiny (tiny)

- placar: 107V/211 (50,7%) a favor do Gyro (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: carry pos1 clássico, com 211 jogos profissionais contra o Gyro; mesma função, os dois são carries de item rápido que também conseguem iniciar sozinhos.
- janelas: até 6 min, Tiny fecha Treads (6:06, partidas pro 7.40-7.41 (OpenDota)) perto do Gyro (7:30), mas o Gyro tem sustain de mana com Falcon Blade (5:18). 12-18 min, Tiny fecha Echo Sabre (12:06) e ameaça o combo Avalanche+Toss; o Gyro ainda não tem Scepter. Depois de 18 min, o Gyro puxa Scepter (18:30) e o Flak Cannon ignora o Shadow Blade (17:36) de Tiny assim que ele sai da invisibilidade, porque o dano em área já está ligado.
- o que ele faz com você: Avalanche (stun em área) seguido de Toss (te agarra e te joga) é o combo clássico de pickoff; sem fuga própria, quem é pego nesse combo raramente sai.
- o que você faz com ele: Homing Missile (stun 1,3 a 2,5s) interrompe o Toss antes dele agarrar; Flak Cannon bate nele mesmo corpo a corpo, porque o raio de 1250 cobre a distância toda.
- itens que viram: seu BKB (24:36) bloqueia o Avalanche; mesmo sem upgrade, o Shadow Blade (17:36) já deixa Tiny reentrar invisível, então vale visão contra invisível nessa fase.
- como jogar: não ande sozinho perto de árvores (Toss precisa de alvo próximo pra jogar); depois do seu BKB, o combo dele deixa de te travar e o Flak Cannon resolve a troca.
- fonte: pro_dados/gyrocopter.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss)

## Contra Windranger (windrunner)

- placar: 78V/154 (50,6%) a favor do Gyro (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: carry/flex pos1 com mais jogos profissionais contra o Gyro depois do Tiny (154); mesma função, com troca de poke à distância em comum.
- janelas: até 7 min, os dois fecham a 1ª bota quase junto (WR 7:12, Gyro 7:30); a troca de Powershot por Rocket Barrage define a lane. 13-16 min, Windranger fecha Maelstrom (13:24, `pro_dados/windrunner.json`), mais DPS de proc; o Gyro ainda monta o crit. Depois de 18 min, o Gyro fecha Scepter (18:30) e o dano em área do Flak Cannon ultrapassa o single-target dela, mesmo sob Windrun.
- o que ela faz com você: Shackleshot (se tiver árvore ou unidade atrás de você) prende por mais tempo que o normal; Windrun dá evasão, que reduz seus acertos físicos, incluindo o Flak Cannon.
- o que você faz com ele: Homing Missile ignora a evasão do Windrun, porque é dano mágico de impacto, não ataque; Flak Cannon continua acertando sob evasão, só com chance de errar por acerto individual.
- itens que viram: seu BKB (24:36) bloqueia o Shackleshot; o Scepter dela faz o Tailwind durar mais e ficar undispellable, então não vale perseguir sem o Homing Missile pronto.
- como jogar: cuidado ao lutar perto de árvore ou unidade (abre um Shackleshot mais longo); espere o Windrun acabar (14s de recarga) antes de engajar só no autoataque.
- fonte: pro_dados/gyrocopter.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_windrun)

## Contra Earthshaker (earthshaker)

- placar: 31V/45 (68,9%) a favor do Gyro (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: maior vantagem do Gyro entre os confrontos com 30+ jogos registrados.
- janelas: até 12 min, Earthshaker fecha Blink Dagger cedo (12:12, `pro_dados/earthshaker.json`), mas sozinho, sem o time por perto, o combo dele não existe. 18-21 min, ele fecha o Shard (20:30, reduz a recarga da Fissure e libera um Aftershock no caminho) e o Staff (18:54); o Gyro já tem Scepter (18:30) e o DPS em área supera o pouco farm dele (gpm 503, função de iniciador, não de carry puro). Depois de 21 min, o Echo Slam dele depende de inimigos agrupados pra valer; o Gyro farmando sozinho simplesmente não dá o alvo que ele precisa.
- o que ele faz com você: Fissure (stun até 1,6s) seguido de Echo Slam multiplica o dano se você estiver perto de aliados; sozinho na lane, o combo dele vale muito menos.
- o que você faz com ele: Flak Cannon (raio 1250) acerta Earthshaker de longe antes dele cravar o blink; Homing Missile interrompe o cast da Fissure se acertar durante a aproximação.
- itens que viram: nenhum item seu precisa neutralizar o Echo Slam diretamente, porque o combo dele raramente acontece sem o time inimigo agrupado; seu Scepter já resolve a maior parte da troca isolada.
- como jogar: evite ficar agrupado com o seu time quando Earthshaker está por perto; se ele blinkar isolado, puna com Flak Cannon antes do Echo Slam valer a pena pra ele.
- fonte: pro_dados/gyrocopter.json; pro_dados/earthshaker.json; constants_abilities.json (earthshaker_fissure, earthshaker_echo_slam); api.opendota.com/api/constants/aghs_desc

## Contra Dazzle (dazzle)

- placar: 30V/47 (63,8%) a favor do Gyro (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: 2ª maior vantagem do Gyro entre os confrontos com 30+ jogos.
- janelas: até 6 min, Dazzle fecha a 1ª bota (5:30, `pro_dados/dazzle.json`) e já troca Shadow Wave por cura ou dano na lane; o Gyro sustenta com Falcon Blade (5:18) quase junto. 12-14 min, Dazzle fecha Arcane Boots (11:54) e Crown (14:12), ainda sem disable duro. Depois de 18 min, o Gyro fecha Scepter (18:30) e o burst em área do Flak Cannon/Call Down supera a cura pontual do Shadow Wave.
- o que ele faz com você: Poison Touch (dano ao longo do tempo + slow em cone) atrasa sua perseguição; Shallow Grave nega uma morte sua por até 5,5s, atrasando o combo de abate.
- o que você faz com ele: Homing Missile (stun) te dá tempo de reaplicar dano depois que o Shallow Grave acaba; Flak Cannon ignora qualquer resistência física que o time dele tenha.
- itens que viram: nenhum item seu resolve o Shallow Grave em si (ele nega a morte, não o dano); o combo certo é esperar os 4 a 5,5s de duração passarem antes de confirmar o abate.
- como jogar: depois de abrir dano em Dazzle, não gaste o combo final achando que ele vai morrer na hora; espere o Shallow Grave acabar.
- fonte: pro_dados/gyrocopter.json; pro_dados/dazzle.json; constants_abilities.json (dazzle_shallow_grave, dazzle_poison_touch)

## Contra Enchantress (enchantress)

- placar: 35V/58 (60,3%) a favor do Gyro (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: uma das maiores vantagens do Gyro entre os confrontos com 30+ jogos (5ª, atrás de Earthshaker, Dazzle, Templar Assassin e Sven).
- janelas: até 7 min, Enchantress fecha a 1ª bota (7:00, `pro_dados/enchantress.json`) e farma puxando creep da selva pra lane com Enchant; o Gyro sustenta com Falcon Blade. 15-16 min, ela fecha Belt of Strength (15:54), rumo a mais HP, ainda sem disable duro. Depois de 18 min, o Gyro fecha Scepter (18:30) e o DPS em área ultrapassa a dela, que é frágil e, fora o Shard (Sproink, raro em pro), não tem fuga própria.
- o que ela faz com você: Impetus causa mais dano quanto mais longe o alvo está, então ela pode poka de longe; Untouchable (passiva, bkb-pierce) desacelera quem a ataca sem precisar mirar.
- o que você faz com ele: Flak Cannon (área) acerta ela e o creep dela encantado junto; Homing Missile trava ela parada, e sem stun ou root ela não tem resposta de volta.
- itens que viram: nenhum item especial é necessário além do Scepter: a diferença de HP e a falta de disable duro dela já decidem a maioria das trocas.
- como jogar: não deixe ela kitar com o creep enfeitiçado por perto; feche a distância rápido, porque o HP dela é baixo pro estágio do jogo em que ela aparece.
- fonte: pro_dados/gyrocopter.json; pro_dados/enchantress.json; constants_abilities.json (enchantress_impetus, enchantress_untouchable)

## Contra Treant Protector (treant)

- placar: 19V/71 (26,8%) contra o Gyro, a maior desvantagem entre os confrontos com 30+ jogos (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: pior placar do Gyro com amostra confiável nessa lista.
- janelas: até 12 min, Treant fecha Arcane Boots (12:00, `pro_dados/treant.json`), item defensivo, farmando pouco (gpm 301); o problema não é farm, é controle. Depois de 18-24 min, mesmo com Scepter (18:30) e BKB (24:36) prontos, o Overgrowth dele (bkb-pierce, trava movimento, blink e TP por até 5s) te ancora pro resto do time fechar o combo, porque o seu BKB não resolve isso.
- o que ele faz com você: Overgrowth impede você de se mover, blinkar ou usar TP por até 5s mesmo com BKB ativo, o que anula seu único jeito de abrir distância (Hurricane Pike ou Blink); Leech Seed (root curto + desarma) corta seu autoataque na troca.
- o que você faz com ele: Flak Cannon ainda acerta Treant normalmente, área e bkb-pierce; o problema não é matar Treant, é sobreviver ao time dele enquanto o Overgrowth te segura parado.
- itens que viram: nenhum item seu neutraliza o Overgrowth em si, porque ele é bkb-pierce por desenho; a defesa real é posicional, não de inventário.
- como jogar: trate Treant visível como sinal de luta em grupo: mantenha distância de segurança até saber se o time dele está junto, e não entre em troca corpo a corpo perto dele sem rota de fuga já aberta.
- fonte: pro_dados/gyrocopter.json; pro_dados/treant.json; constants_abilities.json (treant_overgrowth, treant_leech_seed)

## Contra Nyx Assassin (nyx_assassin)

- placar: 11V/38 (28,9%) contra o Gyro (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: 2ª maior desvantagem do Gyro entre os confrontos com 30+ jogos.
- janelas: até 16 min, Nyx farma pouco (gpm 322) e o perigo é a emboscada, não a troca de farm. Depois de 22 min, Nyx fecha o Staff of Wizardry (22:42, `pro_dados/nyx_assassin.json`) rumo a mais burst; a Vendetta (invisibilidade, bkb-pierce) ainda entra mesmo com o seu BKB pronto (24:36), porque a invisibilidade da ultimate atravessa a imunidade.
- o que ele faz com você: Impale (stun, não atravessa BKB) te trava se o seu BKB não estiver ativo; Spiked Carapace reflete 140% do dano do seu próximo golpe (ataque ou feitiço) e te atordoa, punindo quem ataca sem checar.
- o que você faz com ele: seu BKB (24:36) bloqueia o Impale; o Flak Cannon, por ser instantâneo e em área, evita ativar o Spiked Carapace de propósito, já que ele reage a um ataque específico, não a todos de uma vez.
- itens que viram: seu BKB resolve o Impale, mas não a aproximação da Vendetta (bkb-pierce); a defesa real contra ela é visão, Sentry ou Gem, não inventário ofensivo.
- como jogar: compre Sentry quando Nyx estiver na partida; evite farmar isolado sem visão, porque o combo dele é todo emboscada, não troca direta.
- fonte: pro_dados/gyrocopter.json; pro_dados/nyx_assassin.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_vendetta, nyx_assassin_spiked_carapace)

## Contra Alchemist (alchemist)

- placar: 11V/34 (32,4%) contra o Gyro (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: 3ª maior desvantagem do Gyro entre os confrontos com 30+ jogos, e o exemplo clássico de dois hard carries sem lane em comum: os dois são quase sempre pos1, raramente na mesma rota, mas disputam o mesmo espaço de farm e o mesmo horário de luta.
- janelas: até 14 min, Alchemist puxa Radiance (13:54, `pro_dados/alchemist.json`) e já farma 2 camps ao mesmo tempo; o Gyro, mesmo com Falcon Blade (5:18) e Treads (7:30) prontos, ainda está montando o crit (13:12) e perde a corrida de farm nessa janela. 18-23 min, Alchemist fecha o Scepter (22:24) e segue pro Blink Dagger, montando o combo Unstable Concoction; o Gyro fecha o Scepter dele antes disso (18:30), mas ainda sem BKB. Depois de 24 min, o Gyro fecha BKB (24:36), que bloqueia o stun do Unstable Concoction, e o Flak Cannon ignora a evasão do Talisman of Evasion que o Alchemist carrega; a partir daí a troca pende pro Gyro.
- o que ele faz com você: Unstable Concoction carregado seguido de Blink é o combo de all-in: até 360 de dano físico e um stun que, sem BKB, te tira da luta antes dela começar; Chemical Rage (mais regen e velocidade de ataque) deixa ele sustentar a troca por mais tempo que você.
- o que você faz com ele: Flak Cannon (bkb-pierce) acerta mesmo que ele feche o BKB próprio; Homing Missile (stun) interrompe a aproximação dele antes do Unstable Concoction detonar.
- itens que viram: seu BKB (24:36) bloqueia o stun do Unstable Concoction; antes disso, a janela 14-24 min é a pior pra te engajar sozinho contra ele.
- como jogar: não dispute farm de jungle direto com Alchemist antes do seu BKB, porque ele vence essa corrida; depois do seu BKB, vire caçador, porque ele perde o único disable que tinha.
- fonte: pro_dados/gyrocopter.json; pro_dados/alchemist.json; constants_abilities.json (alchemist_unstable_concoction, alchemist_chemical_rage)

## Contra Morphling (morphling)

- placar: 51V/105 (48,6%), equilibrado (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: carry clássico de mid, com 871 partidas profissionais no patch 7.40+7.41 (`pro_dados/morphling.json`, resumo), mesmo raramente dividindo lane com o Gyro; os dois brigam pelo mesmo horário de farm e pelo mesmo papel de carry que fecha o jogo sozinho.
- janelas: até 8 min, Morphling fecha Treads (6:00) e Morbid Mask (7:54, `pro_dados/morphling.json`) rumo à jungle sustentada; o Gyro sustenta a lane com Falcon Blade (5:18). 14-18 min, Morphling fecha Yasha (14:36) e Manta Style (18:24); o Gyro fecha Scepter (18:30) quase no mesmo minuto, mas o dele é dano, o do Morphling é farm e fuga. Depois de 24 min, Morphling só fecha BKB perto dos 32 min no próprio build dele, bem depois do Gyro (24:36): nessa janela o Gyro ataca primeiro.
- o que ele faz com você: Waveform (invulnerável durante o cast) escapa de quase tudo que não seja um stun já aplicado antes do cast começar; Adaptive Strike (stun + knockback) te afasta e abre distância pra ele fugir.
- o que você faz com ele: Homing Missile tem 2,5s de pré-voo e pode ser abatido, então raramente pega um Morphling atento; Flak Cannon (bkb-pierce) continua acertando mesmo que ele feche BKB, e ele não tem spell immunity própria fora do item.
- itens que viram: seu Scepter (18:30) chega praticamente junto do Manta dele (18:24), mas o seu dano em área não perde valor contra imagem, porque as dele tomam 300% de dano; seu BKB (24:36) fecha bem antes do dele.
- como jogar: não gaste o Homing Missile de longe esperando acerto garantido, porque ele destrói o míssil ou sai da rota; na troca direta, o Flak Cannon ganha a corrida de DPS enquanto ele ainda não tem BKB.
- fonte: pro_dados/gyrocopter.json; pro_dados/morphling.json; constants_abilities.json (morphling_waveform, morphling_adaptive_strike_agi, gyrocopter_homing_missile)

## Contra Luna (luna)

- placar: 53V/89 (59,6%) a favor do Gyro (`pro_dados/gyrocopter.json`, confrontos).
- por que importa: carry ranged com 1970 partidas profissionais no patch (`pro_dados/luna.json`, resumo), mesmo quase nunca dividindo lane com o Gyro; mesma função de carry ranged que escala com os mesmos itens de velocidade de ataque.
- janelas: até 10 min, Luna fecha Treads (5:36) e Mask of Madness (10:00, `pro_dados/luna.json`) pro ciclo de farm wave-camp-wave; o Gyro sustenta com Falcon Blade e fecha Treads (7:30) um pouco depois. 14-18 min, Luna fecha Yasha (13:42), Diadem (14:54) e Manta Style (17:12); o Gyro fecha Scepter (18:30) quase junto. Depois de 25 min, Luna fecha BKB (25:30) e Butterfly (26:06), mas o Gyro já fechou o dele (24:36) quase 1 minuto antes.
- o que ela faz com você: Eclipse (feixes em área, sem stun) pune se você estiver parado perto dela em grupo; a noite de 10s que ela cria ao ativar deixa a Lunar Blessing dela (passiva, bônus de dano de ataque) global pro time inteiro, não só pra ela; Lucent Beam (stun curto, dano) abre o combo a distância.
- o que você faz com ele: Flak Cannon ignora o BKB dela quando ela finalmente fechar; Homing Missile (stun) te dá a primeira palavra no 1x1, já que nenhum dos dois tem fuga própria.
- itens que viram: seu BKB (24:36) fecha antes do dela (25:30): na janela entre esses dois minutos, você pode iniciar sem medo do Lucent Beam.
- como jogar: evite lutar de noite perto dela sem BKB pronto, porque a Lunar Blessing dela fica global nesse período e todo o time dela bate mais forte; depois do seu BKB, inicie você, porque a diferença de 1 minuto no fechamento costuma decidir quem bate primeiro.
- fonte: pro_dados/gyrocopter.json; pro_dados/luna.json; constants_abilities.json (luna_eclipse, luna_lucent_beam)
