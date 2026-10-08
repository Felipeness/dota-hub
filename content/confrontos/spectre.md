---
id: confrontos-spectre
heroi: Spectre
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/spectre.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/axe.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/windrunner.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/life_stealer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/drow_ranger.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/terrorblade.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/faceless_void.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/morphling.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/spectre.json
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/spectre.md
- C:/Users/felip/Desktop/dota-hub/content/roshan_solo/spectre.md
- https://wiki.cs.money/dota/heroes/faceless-void
- https://rdy.gg/en/dota2/heroes/faceless-void
- https://dotacoach.gg/heroes/counters/terrorblade
---

## Contra Rubick (rubick)
- placar: Spectre venceu 15 de 40 partidas de pro (37,5%). Fonte: pro_dados/spectre.json (confrontos).
- por que importa: o oponente com mais jogos contra Spectre no banco de pro (40). Não existe lane em comum (Rubick é suporte 4/5), mas é pick quase onipresente nas composições atuais, então aparece em praticamente todo draft contra ela.
- janelas: até os 10:18 nenhum dos dois tem item de peso (Rubick só tem Arcane Boots, pro_dados/rubick.json); você puxa Power Treads e o nível 6 (Haunt) aos 7:00/7:56, bem antes do blink dele (21:36). O primeiro pico real é o seu: Radiance aos 18:12, enquanto Rubick ainda está construindo Aghanim's Shard (27:00) ou Scepter (27:24). Seu Manta (24:42) chega antes de qualquer coisa que ele tenha pra te segurar sozinho.
- o que ele faz com você: Fade Bolt causa 100 a 325 de dano conforme o nível, perdendo 6% por salto entre inimigos, e reduz seu dano de feitiço/ataque em até 24% por 10s (constants_abilities.json); Telekinesis te arremessa pro meio do time dele (0,9 a 1,5s de stun na queda, o tempo no ar chega a 1,7s mas isso não é o stun); pela regra geral do Spell Steal (rouba o último feitiço ativo, não pega passiva), se ele flagrar você lançando Haunt pode ficar com uma cópia por até 300s.
- o que você faz com ele: ele não tem fuga própria sem item; qualquer Reality numa ilusão perto dele é quase kill garantido. Desolate liga quase sempre nele, porque ele costuma estar sozinho colocando ward ou fazendo smoke longe do time.
- itens que viram: Aether Lens nele (22:54) estica o alcance do Fade Bolt e Telekinesis; do seu lado, Black King Bar bloqueia o debuff de redução de dano do Fade Bolt (10s, sem marcação de bkbpierce nas constantes do jogo).
- como jogar: não tem lane pra disputar, então o confronto começa nas lutas. Pop o Haunt fora do alcance de 800 do Fade Bolt quando der. Se ele sair sozinho pra ward ou smoke, puna: ele não sobrevive a uma visita de Haunt.
- fonte: pro_dados/spectre.json; pro_dados/rubick.json; constants_abilities.json (rubick_fade_bolt, rubick_telekinesis, rubick_spell_steal, spectre_dispersion, spectre_haunt).

## Contra Lion (lion)
- placar: Spectre venceu 12 de 36 partidas de pro (33,3%), a pior taxa dela entre os confrontos com amostra de 30 ou mais jogos. Fonte: pro_dados/spectre.json.
- por que importa: 2º mais jogado contra Spectre em pro (36 jogos) e o pior resultado dela com amostra robusta, sinal de que o burst de alvo único é um problema real pra ela.
- janelas: Lion sai de Tranquil Boots aos 7:24 e só tem pico de item de verdade no Blink (18:12, pro_dados/lion.json), bem perto do seu Radiance (18:12). Até lá o perigo dele é puro feitiço: Finger of Death libera no nível 6 e pode te deletar se você estiver sem Dispersion relevante (nível 4 só dá 9%, aos 5:00). Depois do seu Manta (24:42) você ganha mobilidade de sobra pra nunca ficar parada no alcance de 900 do Finger of Death.
- o que ele faz com você: Earth Spike estuna 1,3 a 2,2s e já serve de setup; Hex (Voodoo) vira você crítter por até 3,2s, cancelando Haunt, Reality e o Dispersion ativo; Finger of Death causa 600 a 850 de dano mágico instantâneo (constants_abilities.json) e ganha +30 de dano permanente por herói morto.
- o que você faz com ele: ele não tem fuga nem resistência própria; qualquer Reality nele sem Force Staff ou Glimmer Cape prontos é kill garantido. Fora disso, o Dispersion devolve parte do nuke dele pro time dele se tiver gente perto na hora do combo.
- itens que viram: Black King Bar é citado no seu próprio guia como prioridade contra nukers de alvo único como Lion, antes até do 5º item (herois/spectre.json); Linken's Sphere bloquearia o próximo feitiço dele, mas ele costuma guardar o combo pra depois do Linken estourar com outra coisa.
- como jogar: não force luta sem BKB se o time dele tiver Lion mais outro nuker de alvo único. Depois do Manta, sua mobilidade (duas imagens + Reality) já neutraliza o alcance de 900 do Finger of Death: ele precisa adivinhar qual é a real.
- fonte: pro_dados/spectre.json; pro_dados/lion.json; constants_abilities.json (lion_finger_of_death, lion_impale, lion_voodoo, spectre_dispersion); herois/spectre.json (guia.itens_situacionais black_king_bar, contra nukers de alvo único).

## Contra Snapfire (snapfire)
- placar: Spectre venceu 13 de 35 partidas de pro (37,1%). Fonte: pro_dados/spectre.json.
- por que importa: 3º mais jogado contra Spectre em pro (35 jogos), suporte de zona que mais aparece tentando travar a rota de farm dela com poke em área.
- janelas: Snapfire sai de Arcane Boots aos 10:36 e já tem o Aghanim's Shard dela aos 16:54 (pro_dados/snapfire.json), antes do seu Radiance (18:12): é a janela dela pra atrapalhar seu farm antes do seu maior pico. Depois disso ela não tem outro pico de item até o Blink (20:42) e o Kaya (18:06), enquanto você já está acelerando o last hit com o Radiance puxado.
- o que ele faz com você: Scatterblast desacelera 100% de movimento e ataque por 1s à queima-roupa (dentro de 450 de distância), o suficiente pra te prender perto de creep e desligar o Desolate; Mortimer Kisses cobre área grande com 180 a 360 de dano por glob mais poças de até 100 de dano por segundo, bom pra punir onde você está parada farmando.
- o que você faz com ele: ela não tem fuga rápida (giro reduzido durante a Mortimer Kisses, sem blink no nível 6); uma Reality bem posicionada pega ela parada no meio do cast do ultimate.
- itens que viram: Aghanim's Shard seu (+50% de absorção e reflexo do Dispersion por 5s) ajuda a sobreviver ao burst em área dela justo quando ela inicia em cima de você.
- como jogar: antes do Radiance, evite ficar parada em creep perto da linha de visão dela (Scatterblast tem 800 de alcance, Kisses 3000). Depois do seu nível 6 e do Manta, a presença dela em mapa não segura mais o seu farm.
- fonte: pro_dados/spectre.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_mortimer_kisses, spectre_desolate, spectre_dispersion, spectre_haunt).

## Contra Axe (axe)
- placar: Spectre venceu 17 de 34 partidas de pro (50,0%). Fonte: pro_dados/spectre.json.
- por que importa: 4º mais jogado contra Spectre em pro (34 jogos) e o offlaner clássico que bloqueia a safelane dela; no Divine+ ela rende acima do esperado contra ele (+3,7pp, herois/spectre.json).
- janelas: Axe bloqueia a lane dela como offlaner: Chainmail aos 6:54 e Phase Boots aos 7:12 (pro_dados/axe.json), prontos antes do nível 6 dela (7:56). O primeiro pico de luta dele é o Blink (15:42) junto com o Blade Mail (12:36); o dela é o Radiance (18:12). Depois dos 18min vira farm race: ele sobe pra Culling Blade com Ogre Axe e Mithril Hammer (22:48/23:36), ela sobe Manta (24:42) e Skadi (33:06).
- o que ele faz com você: Berserker's Call obriga você a atacar ele por até 3s (nível 4) com +15 de armadura nele; Counter Helix devolve 100 a 160 de dano puro a cada 4 a 7 ataques recebidos, cortando seu DPS de perto; Culling Blade executa com 275 a 475 de dano puro e reseta a recarga se matar, perigoso enquanto o Dispersion ainda está baixo.
- o que você faz com ele: Butterfly é item situacional citado no seu próprio guia direto contra dano físico como o dele; o Dispersion devolve parte do dano de ataque normal dele pro time dele (o reflexo do Blade Mail dele é separado, não empilha no mesmo golpe).
- itens que viram: Butterfly seu (35% de evasão), citado no guia contra Axe/Ursa/Drow/Sniper/Gyrocopter; o Blade Mail dele anula troca física direta, então puna de longe com Spectral Dagger ou feche com Haunt+Reality em vez de trocar soco a soco.
- como jogar: na lane, jogue em volta do Counter Helix, não bata nele sem necessidade antes do nível 4 dele. Depois do Radiance, farme longe do raio de ação do Blink dele (15:42) até ter Manta pra absorver o Culling Blade numa ilusão.
- fonte: pro_dados/spectre.json; pro_dados/axe.json; constants_abilities.json (axe_berserkers_call, axe_counter_helix, axe_culling_blade, spectre_dispersion); herois/spectre.json (guia.itens_situacionais butterfly, contra Axe +3,7pp).

## Contra Windranger (windrunner)
- placar: Spectre venceu 20 de 30 partidas de pro (66,7%), a maior vantagem dela entre os confrontos com amostra de 30 ou mais jogos. Fonte: pro_dados/spectre.json.
- por que importa: 5º mais jogado contra Spectre em pro (30 jogos) e a melhor taxa dela com amostra robusta, apesar do kit de disable parecer perigoso no papel.
- janelas: Windranger tem o pico mais cedo da lista: Power Treads aos 7:12 e Maelstrom aos 13:24 (pro_dados/windrunner.json), bem antes do Radiance dela (18:12). O Mjollnir (18:18) chega quase junto com esse Radiance, mas o pico que importa pra ela é Hyperstone (17:24) + Black King Bar (24:24): depois disso ela quer forçar luta rápida, bem na hora em que a Spectre está entrando no ciclo de farm do Manta (24:42).
- o que ele faz com você: Shackleshot te prende numa árvore ou unidade atrás de você por até 3,25s, setup clássico pra queimar o Haunt antes da hora; Focus Fire dá até 500 de velocidade de ataque bônus com -25% de dano num único alvo por 20s, dano físico que ainda sofre o reflexo do Dispersion.
- o que você faz com ele: o pro_dados mostra 66,7% de vitória pra Spectre nesse confronto, a maior vantagem com amostra robusta da lista: Shackleshot precisa de árvore ou unidade atrás dela pra funcionar bem (senão o stun cai pra 0,6s), e o Focus Fire físico perde valor quando ela está perto de aliados.
- itens que viram: Black King Bar dela (24:24, comum na build) neutraliza o slow do Spectral Dagger e o fear do Scepter da Spectre; do lado dela, Manta absorve o Focus Fire numa ilusão, cortando o DPS pela metade.
- como jogar: cuidado com árvore ou unidade atrás de você perto da linha de visão dela (Shackleshot). Fora isso, os números favorecem a Spectre: jogue o jogo longo, já que ela depende de Hyperstone+BKB pra abrir luta e o alcance global do Haunt sempre chega primeiro.
- fonte: pro_dados/spectre.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_focusfire, spectre_dispersion, spectre_haunt).

## Contra Mars (mars)
- placar: Spectre venceu 18 de 29 partidas de pro (62,1%), amostra pequena (29 jogos, abaixo do corte de 30). Fonte: pro_dados/spectre.json.
- por que importa: 6º mais jogado contra Spectre em pro (29 jogos), outro offlaner que disputa a lane dela e a 2ª maior vantagem da lista.
- janelas: Mars bloqueia a lane dela como offlaner: Chainmail e Phase Boots prontos aos 7:30/8:30 (pro_dados/mars.json). O primeiro pico de luta dele é o Blink (15:12), antes do Radiance dela (18:12). Depois disso ele sobe Aghanim's Shard (21:30) pra reforçar a Arena of Blood, enquanto ela está no ciclo pré-Manta.
- o que ele faz com você: Spear of Mars empala em parede, árvore ou penhasco com até 2,2s de stun; Arena of Blood prende um grupo numa arena de 550 de raio por 5,5s, bloqueando movimento e ataque de quem tenta sair pelo limite dela.
- o que você faz com ele: fora da arena, Desolate liga quase sempre nele quando se afasta sozinho dos creeps; Haunt ignora a parede física da Arena of Blood porque é presença global, não movimento no chão.
- itens que viram: Aghanim's Shard dele (21:30) deixa a Arena mais perigosa; do lado dela, Black King Bar não resolve a parede física (ela bloqueia movimento, não é debuff), então a resposta real é não ficar presa dentro quando ela abre.
- como jogar: na lane, jogue em volta do Bulwark dele (reduz 40 a 70% do dano de ataque de frente): ataque pelos lados ou evite trade direto. Em grupo, nunca entre na Arena of Blood sem conseguir sair: ela prende por 5,5s inteiros.
- fonte: pro_dados/spectre.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_arena_of_blood, mars_bulwark, spectre_desolate, spectre_haunt).

## Contra Shadow Fiend (nevermore)
- placar: Spectre venceu 16 de 28 partidas de pro (57,1%), amostra pequena (28 jogos). Fonte: pro_dados/spectre.json.
- por que importa: carry pos1 mais jogado em pro no recorte geral (3.990 partidas, pro_dados/nevermore.json). Quase sempre vai de mid, não divide lane com a Spectre, mas é o comparativo de power spike de carry que mais aparece entre jogadores de pos1.
- janelas: Shadow Fiend é rápido cedo: Boots of Elves aos 6:54, Blade of Alacrity aos 12:42, Mask of Madness aos 10:12 (pro_dados/nevermore.json). Com Requiem (ult) ele pode deletar uma Spectre isolada entre os 8 e os 15min se tiver 6 ou mais almas de Necromastery. O pico dela (Radiance, 18:12) chega bem depois: até lá, ele está na frente.
- o que ele faz com você: Shadowraze causa 85 a 280 de dano direto em área curta na frente dele, com bônus por alma acumulada (até 80 de bônus por stack via Necromastery, constants_abilities.json); Requiem of Souls libera linhas de energia num raio de 1000, com medo e redução de resistência mágica cumulativa (até 2,15s) em quem pega várias linhas.
- o que você faz com ele: ele não tem fuga própria além de mobilidade comprada; Desolate liga quase sempre nele porque costuma estar sozinho fazendo Shadowraze de rota. Antes do nível 20 dele (Necromastery maxado), o Requiem ainda não é letal sozinho.
- itens que viram: farme longe do alcance de 1000 do Requiem quando ele estiver com 6 ou mais almas visíveis no ícone; do lado dela, o próprio guia cita que o Spectre perde em jogos curtos (48% entre 12 e 35min, 7000+ D2PT) justamente contra carries que fecham item rápido como ele.
- como jogar: não dividem lane, então o confronto é indireto: quem farma mais rápido cedo (ele) empurra o jogo pra terminar antes dos 30min, onde a Spectre ainda está atrás. Se o time dela segura até os 35+, o jogo vira a favor dela.
- fonte: pro_dados/spectre.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, spectre_desolate); herois/spectre.json (guia.evitar_quando, janela 12-35min).

## Contra Lifestealer (life_stealer)
- placar: Spectre venceu 15 de 27 partidas de pro (55,6%), amostra pequena (27 jogos). Fonte: pro_dados/spectre.json.
- por que importa: rival direto de posição (pos1) e o único contra-pick citado tanto no recorte pro quanto no Divine+ público (-3,1pp pra Spectre em 10.291 jogos, herois/spectre.json), mesmo o placar pro aqui favorecendo ela.
- janelas: Lifestealer é mais rápido: Phase Boots aos 6:00 e Radiance dele aos 16:12 (pro_dados/life_stealer.json), antes do dela (18:12). Talisman of Evasion dele sai aos 15:42. Ele puxa o Radiance primeiro e farma mais rápido no início do meio-jogo se a lane dele ficar livre.
- o que ele faz com você: Open Wounds reduz sua velocidade de movimento em até 50% por 7s e cura o time dele por até 50% do dano causado em você; Rage te ignora como alvo de debuff por até 6s (imunidade a debuff e 80% de resistência mágica), então controle do seu time não segura ele durante a janela.
- o que você faz com ele: ele não tem alcance global como o Haunt; se farmar sozinho longe do time, uma Reality bem calculada pega ele sem Rage disponível.
- itens que viram: a corrida de Radiance decide o ritmo (16:12 dele contra 18:12 dela): se perder essa corrida, priorize pressão de torre ou neutro grande antes dos 16min. Butterfly reduz o DPS físico dele em troca direta.
- como jogar: é farm race de Radiance; quem fecha primeiro dita o meio-jogo. Se perder a corrida, use o alcance global do Haunt pra punir onde ele não está em vez de brigar farm por farm.
- fonte: pro_dados/spectre.json; pro_dados/life_stealer.json; constants_abilities.json (life_stealer_open_wounds, life_stealer_rage); herois/spectre.json (guia.evitar_quando, Lifestealer -3,1pp).

## Contra Drow Ranger (drow_ranger)
- placar: Spectre venceu 10 de 26 partidas de pro (38,5%), amostra pequena (26 jogos). Fonte: pro_dados/spectre.json.
- por que importa: carry pos1 popular (1.003 jogos pro, pro_dados/drow_ranger.json). O Divine+ mostra a Spectre favorita (+3,7pp, herois/spectre.json), mas o recorte pro mostra o oposto: vale registrar a divergência entre os dois públicos.
- janelas: Drow tem pico de farm parecido: Power Treads aos 6:36, Dragon Lance aos 14:12 (pro_dados/drow_ranger.json). Até os 18:12 (Radiance da Spectre) é corrida de last hit; Hurricane Pike (22:48) e Force Staff (22:12) chegam depois, já no período em que a Spectre está puxando o Manta (24:42).
- o que ele faz com você: Marksmanship dá 30 a 40% de chance de dano True (ignora armadura base) quando não tem herói inimigo a 325 de distância, perigoso se a Spectre se isolar pra farmar sozinha; Frost Arrows desacelera até 45% e soma dano por ataque, dificultando sair do alcance dela.
- o que você faz com ele: ela precisa ficar sem herói inimigo perto pra manter o Marksmanship ativo; forçar o 1x1 perto de aliados dela desliga o proc. Desolate liga nela do mesmo jeito que o Marksmanship liga na Spectre: as duas condições são espelhadas.
- itens que viram: Butterfly é citado no próprio guia da Spectre direto contra Drow Ranger (dano físico direto); Hurricane Pike e Force Staff do lado dela servem pra manter distância do Spectral Dagger.
- como jogar: não brigue de longe parada com ela; force o 1x1 perto de creep ou do time dela pra cancelar o Marksmanship. Depois do Manta, as ilusões absorvem flecha enquanto a real fecha distância.
- fonte: pro_dados/spectre.json; pro_dados/drow_ranger.json; constants_abilities.json (drow_ranger_marksmanship, drow_ranger_frost_arrows); herois/spectre.json (guia.bom_quando, Drow Ranger +3,7pp).

## Contra Terrorblade (terrorblade)
- placar: Spectre venceu 10 de 16 partidas de pro (62,5%), amostra pequena (16 jogos). Fonte: pro_dados/spectre.json.
- por que importa: o duelo de carry tardio mais citado do jogo. Os dois raramente dividem lane, mas escalam pra ganhar o jogo sozinhos depois dos 30min e aparecem juntos em qualquer discussão de "quem ganha o late".
- janelas: Terrorblade farma mais rápido no início: Manta dele sai aos 17:06 (pro_dados/terrorblade.json), antes do Manta da Spectre (24:42), e o Metamorphosis já está disponível desde o nível 6. Depois do Aghanim's Shard dele (17:24) ele vira atirador de alcance, enquanto ela ainda está puxando o Radiance (18:12).
- o que ele faz com você: Sunder troca a porcentagem de vida atual entre os dois, com mínimo garantido de 25 a 35% dependendo do nível (constants_abilities.json). Se ele estiver quase morrendo e a Spectre estiver com a vida cheia depois de empilhar Skadi e talento de HP, ele rouba a vida dela de graça.
- o que você faz com ele: Metamorphosis dele tem alcance de ataque curto no início (450 a 600) e ele é frágil fisicamente sem Manta ativa; Desolate liga nele quando sai sozinho pra puxar ilusão.
- itens que viram: Sunder é bloqueado tanto por Black King Bar quanto por Linken's Sphere (dotacoach.gg/heroes/counters/terrorblade; confirma com bkbpierce: No em constants_abilities.json). BKB já é item situacional comum da build dela contra nukers de alvo único, então tê-lo pronto também anula o Sunder, não só o combo mágico do resto do time dele.
- como jogar: cuidado ao empilhar vida alta (Skadi, talento de 325 de HP) perto de um Terrorblade baixo sem BKB ativo: ele pode sugar a vida de graça com o Sunder. Com BKB pronto o Sunder não pega, então é a resposta mais direta. Fora isso, é farm race: quem puxa o item de poder primeiro dita o ritmo.
- fonte: pro_dados/spectre.json; pro_dados/terrorblade.json; constants_abilities.json (terrorblade_sunder bkbpierce: No, terrorblade_metamorphosis); dotacoach.gg/heroes/counters/terrorblade (Sunder bloqueado por Black King Bar e por Linken's Sphere).

## Contra Faceless Void (faceless_void)
- placar: Spectre venceu 8 de 11 partidas de pro (72,7%), amostra pequena (11 jogos). Fonte: pro_dados/spectre.json.
- por que importa: outro farmer tardio com ult que trava lutas inteiras. O "Chronosphere trava o Haunt?" é pergunta clássica de quem joga Spectre, mesmo sem lane em comum.
- janelas: o pico de item de Void é mais lento: Maelstrom aos 16:18 e Mjollnir, via Hyperstone, aos 21:06 (pro_dados/faceless_void.json), depois do Radiance da Spectre (18:12). O Blink dele não aparece entre os itens mais comprados no recorte, sinal de que o padrão de pro é farmar primeiro e só depois caçar com Chronosphere.
- o que ele faz com você: Chronosphere prende tudo num raio de 500 por 3,75 a 4,75s e ignora imunidade a feitiço (wiki.cs.money e rdy.gg confirmam "pierces spell immunity"): Black King Bar não tira a Spectre de dentro. Se ele acertar a Chrono em cima dela fora de posição, o time dele tem até quase 5s livres pra focar.
- o que você faz com ele: ele não tem fuga além do Time Walk (resgata o dano dos últimos 2s); Desolate liga nele do mesmo jeito, sozinho puxando camp. A vantagem da Spectre é alcance: o Haunt chega nele em qualquer parte do mapa, então ele não tem onde se esconder pra farmar em paz tarde no jogo.
- itens que viram: BKB não ajuda dentro da Chronosphere, já que ela ignora imunidade a feitiço; a resposta real é não lutar perto dele quando a ult estiver pronta, ou garantir vida suficiente pra aguentar os segundos presa.
- como jogar: trate a recarga da Chronosphere como um relógio, não force luta de grupo perto dele quando ela estiver disponível. Fora da janela da ult, ele não tem resposta pra presença global do Haunt.
- fonte: pro_dados/spectre.json; pro_dados/faceless_void.json; constants_abilities.json (faceless_void_chronosphere, faceless_void_time_walk); wiki.cs.money/dota/heroes/faceless-void; rdy.gg/en/dota2/heroes/faceless-void.

## Contra Templar Assassin (templar_assassin)
- placar: Spectre venceu 8 de 11 partidas de pro (72,7%), amostra pequena (11 jogos). Fonte: pro_dados/spectre.json.
- por que importa: a maior vantagem da Spectre no jogo inteiro segundo o Divine+ (+4,8pp, herois/spectre.json), e o recorte pro confirma na mesma direção. Carry pos1/2 de power spike oposto ao dela: cedo contra tarde.
- janelas: Templar Assassin é o carry mais rápido da lista: Mithril Hammer aos 13:18, Desolator aos 14:18, Blink aos 17:24 (pro_dados/templar_assassin.json), tudo antes do Radiance dela (18:12). É nessa janela cedo que ela precisa cuidado; depois disso o jogo vira, porque Templar não tem outro pico de item além do early.
- o que ele faz com você: Psi Blades fazem o ataque dela atravessar e acertar quem estiver atrás do alvo, com alcance extra; Meld dá invisibilidade parada e, ao sair, 50 a 200 de dano bônus mais -2 a -8 de armadura por 6s. Se ela pegar a Spectre isolada antes do nível 6 (Haunt), o Desolator (14:18) já reduz armadura em cima do burst.
- o que você faz com ele: Refraction dá 3 a 6 cargas de barreira contra dano normal, mas não filtra dano puro; o Desolate da Spectre (dano puro) passa direto pela Refraction, e o alcance do Haunt pune ela tarde no jogo, quando já gastou o pico cedo.
- itens que viram: o Desolate (dano puro) ignora a barreira de Refraction, que só absorve dano normal; depois do Manta e do Skadi da Spectre, o jogo vira a favor dela porque Templar não tem outro pico de item.
- como jogar: ela é perigosa nos primeiros 13 a 17min, jogue defensivo até o nível 6 e evite ficar sozinha na visão dela. Depois disso, os números (72,7% em pro, +4,8pp no Divine+) mostram que o jogo vira: estique pro jogo longo.
- fonte: pro_dados/spectre.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_refraction, templar_assassin_meld, templar_assassin_psi_blades, spectre_desolate); herois/spectre.json (guia.bom_quando, Templar Assassin +4,8pp).

## Contra Morphling (morphling)
- placar: Spectre venceu 2 de 11 partidas de pro (18,2%), amostra pequena (11 jogos) e a pior taxa dela na lista inteira.
- por que importa: pior porcentagem de vitória da Spectre contra qualquer carry do levantamento, mesmo com amostra pequena. Merece atenção porque é um aviso recorrente em pro play apesar do baixo volume de jogos.
- janelas: o pico de item de Morphling é parecido em minuto com o da Spectre (Diadem aos 15:42, Yasha aos 14:36, Manta aos 18:24, pro_dados/morphling.json), mas ele tem Waveform pra escapar e Attribute Shift pra trocar perfil no meio da luta, algo que a Spectre não tem resposta direta.
- o que ele faz com você: Waveform atravessa com invulnerabilidade durante a animação, ótimo pra escapar do Spectral Dagger ou fechar distância rápido pro Adaptive Strike; Adaptive Strike escala com a Agilidade dele (até 2,5x em dano, mais stun de até 2,6s escalando com Força), então ele ajusta dano e controle no meio da luta via Morph.
- o que você faz com ele: ele não tem alcance global; se farmar sozinho, uma Reality bem calculada pega ele sem Waveform disponível. Desolate liga quando ele se isola, igual qualquer outro carry sem suporte perto.
- itens que viram: ele não tem resposta direta ao Haunt global; do lado dela, Black King Bar segura o stun do Adaptive Strike (feitiço comum, sem marcação de bkbpierce) e abre a janela pra fechar o combo.
- como jogar: o confronto direto é raro, mas quando acontece em luta ele pode trocar forma no meio pra virar tanque e sobreviver ao burst dela. Não gaste tudo achando kill rápida: tenha BKB pronto pra segurar o Adaptive Strike e force o combo com Haunt em vez de brigar 1x1 direto.
- fonte: pro_dados/spectre.json; pro_dados/morphling.json; constants_abilities.json (morphling_waveform, morphling_adaptive_strike_agi, morphling_morph_agi, spectre_desolate, spectre_haunt).
