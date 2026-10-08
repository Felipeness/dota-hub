---
id: confrontos-storm_spirit
heroi: Storm Spirit
patch: 7.41
fontes:
- OpenDota /heroes/17/matchups (partidas de liga, patches 7.40 e 7.41) via pro_dados/storm_spirit.json e dos 15 oponentes
- OpenDota itemPopularity (timings medianos e p25) via pro_dados/*.json
- OpenDota explorer (consulta direta via API, partidas de liga por leagueid e start_time, patches 7.40 e 7.41): timing de Manta Style do Shadow Fiend e distribuição por lane_role e winrate de Snapfire, Queen of Pain, Void Spirit, Pangolier e Death Prophet
- dota-imortal/data/opendota/constants_abilities.json (patch 7.41)
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Como escolhi os 15 confrontos

Os 6 primeiros são os adversários com mais jogos contra o Storm em pro (OpenDota matchups): Ember Spirit, Shadow Fiend, Tusk, Snapfire, Rubick e Jakiro. Queen of Pain, Void Spirit e Pangolier entram porque são, depois do Ember, os mids (pos 2) mais jogados contra ele em pro, o mesmo papel do Storm. Templar Assassin, Alchemist e Death Prophet são as maiores vantagens dele com amostra de 30+ jogos; Mirana, Treant Protector e Huskar são as maiores desvantagens com amostra de 30+ jogos. Alchemist entra também porque é o exemplo clássico de "dois core que raramente dividem lane mas cujo power spike um do outro importa muito": Storm é mid, Alchemist costuma ser pos 1 ou jungle, mas o que cada um pode fazer no mapa no minuto 15 decide a partida.

## Contra Ember Spirit (ember_spirit)
- placar: Storm venceu 198 de 420 partidas de liga (47,1%) contra Ember Spirit, 7.40-7.41 (fonte: OpenDota matchups). Amostra grande, é o confronto mais jogado do Storm no período.
- por que importa: os dois são mids de mobilidade física/mágica que se contestam na primeira fase do draft, o par mais repetido do Storm em pro.
- janelas: até os 10 min farmam quase sem se tocar (Soul Ring do Storm aos 6,1 min; Spirit Vessel do Ember já sai cedo, mediano 12,8 min, fonte: pro_dados). Dos 12 aos 20 min o Ember troca de perto com Sleight of Fist protegido por Flame Guard; o Storm responde com Kaya (13,7 min) e o combo Vortex+Overload. Depois dos 20, Witch Blade do Storm (22,3 min) dá true strike e o Flame Guard do Ember (absorção que satura em 300 de dano mágico por ciclo) passa a filtrar cada vez menos o combo mágico dele.
- o que ele faz com você: Sleight of Fist atravessa Black King Bar (`bkbpierce: Yes`, constants_abilities.json) e acerta 3-4 vezes de dano físico bônus mesmo com você imune a magia; Searing Chains prende por até 2,75s no nível 4 (não atravessa BKB, então seu BKB resolve o root).
- o que você faz com ele: Electric Vortex puxa o Ember antes de ele preparar o Flame Guard ou logo após o Fire Remnant, cortando a rota de fuga dele; Static Remnant mais o ataque com carga de Overload empilham dano mágico que o Flame Guard (absorção máxima 300, constants_abilities.json) não segura além de um ciclo.
- itens que viram: Witch Blade (22,3 min) pune a falta de evasão do Ember e garante o slow depois do puxão; seu BKB (26,1 min) nega Searing Chains, mas não a sequência física do Sleight of Fist, então a troca ainda exige posicionamento.
- como jogar: na lane, jogue pelo poke de Static Remnant e não force all-in antes do Soul Ring. No meio de jogo, puxe o Ember pra longe do time dele com Vortex antes de ele soltar Sleight of Fist; depois do Witch Blade, o 1x1 vira seu.
- fonte: pro_dados/storm_spirit.json e pro_dados/ember_spirit.json (OpenDota matchups e itemPopularity); constants_abilities.json (storm_spirit_overload, ember_spirit_sleight_of_fist, ember_spirit_searing_chains, ember_spirit_flame_guard)

## Contra Shadow Fiend (nevermore)
- placar: Storm venceu 153 de 326 (46,9%) contra Shadow Fiend em pro, 7.40-7.41 (OpenDota matchups). Praticamente par.
- por que importa: segundo confronto mais jogado do Storm, e os dois competem pela mesma mid.
- janelas: até os 8 min o Shadow Fiend sai na frente em farm bruto (LH10 de 78 contra 67 do Storm, pro_dados resumo), então ele tende a vencer a troca de last hit cedo. Dos 13 aos 20 min o Storm já tem Kaya (13,7 min) e consegue punir o Shadow Fiend parado puxando as almas do Necromastery; o Requiem dele (ultimate) fica realmente perigoso a partir do nível 6, com cast delay de 1,67s antes de acertar. Depois dos 25, BKB dos dois sai quase junto (Storm 26,1 min, Shadow Fiend 25,2 min, pro_dados), então a luta vira sobre quem inicia primeiro.
- o que ele faz com você: Requiem of Souls amedronta e reduz seu movimento e resistência mágica (-20% a -30% MS, -5% a -15% de resistência mágica por nível, constants_abilities.json), mas não atravessa BKB (`bkbpierce: No`); Shadowraze empilha dano crescente pela proximidade (85 a 280 de base) com só 3s de recarga, então ele pode te revelar e punir mesmo sem te ver.
- o que você faz com ele: seu BKB apaga o Requiem por inteiro, e sua mobilidade com Ball Lightning evita entrar no raio de 1000 da ultimate dele; Electric Vortex te deixa castar o combo antes que ele reposicione pra acertar Shadowraze.
- itens que viram: Shadow Fiend costuma fechar Manta Style mediano aos 18,5 min (partidas pro 7.40-7.41, OpenDota, n=1023) pra limpar e empurrar sozinho; isso soma com Force Staff (22,5 min) como escape. Seu Witch Blade (22,3 min) neutraliza a fuga em linha reta do Force Staff se você já tiver o slow aplicado antes dele usar.
- como jogar: evite trocar auto-attack cru contra o Necromastery dele depois do nível 6; prefira puxar com Vortex e sair com Ball Lightning. Seu BKB é a resposta direta ao Requiem, então segure ele pra esse momento específico da luta.
- fonte: pro_dados/storm_spirit.json e pro_dados/nevermore.json; constants_abilities.json (nevermore_requiem, nevermore_shadowraze1, nevermore_necromastery); OpenDota explorer (consulta direta, partidas de liga 7.40-7.41, timing de Manta Style)

## Contra Tusk (tusk)
- placar: Storm venceu 161 de 320 (50,3%) contra Tusk em pro, 7.40-7.41 (OpenDota matchups).
- por que importa: terceiro confronto mais jogado; Tusk é suporte roamer que caça mid, então aparece contra o Storm o jogo todo, não só na lane.
- janelas: Tusk é hero de farm baixíssimo (300 de ouro/min, 6 last hits aos 10 min de mediana, pro_dados), então até os 15 min a ameaça dele é puramente de combo em grupo, não de item. O Blink dele sai mediano aos 19,0 min (pro_dados) e é o ponto em que ele começa a abrir rota de gank de verdade. Seu Kaya (13,7 min) e BKB (26,1 min) chegam bem antes do Cyclone dele (28,9 min, amostra pequena), então na maior parte do jogo médio você está com mais itens que ele.
- o que ele faz com você: Walrus Kick atordoa, empurra 1200 de distância e causa 550 de dano fixo e atravessa Black King Bar (`bkbpierce: Yes`, constants_abilities.json), então seu BKB não neutraliza esse golpe específico; Snowball soma dano por aliado dentro da bola (até +115 por aliado no nível 4) e Ice Shards cria uma parede que trava seu reposicionamento a pé por até 7s no nível 4 (não atravessa BKB).
- o que você faz com ele: Tusk tem pouquíssima vida e zero itens de sustain além de Ring of Regen cedo, então Static Remnant mais um ataque de Overload já tira boa fatia da vida dele; seu Ball Lightning foge do raio de 1150 do Snowball antes de ele conseguir engatar o combo.
- itens que viram: o Witch Blade (22,3 min) te deixa fechar o kill antes do time dele chegar, já que Tusk sozinho não sustenta a troca; Linken's Sphere (situacional) ainda bloqueia a Walrus Kick, porque ela é alvo único (constants_abilities.json) e o Spellblock do item intercepta a primeira magia de alvo único a cada 14s (items.json).
- como jogar: trate o Tusk como ameaça de iniciação em grupo, não de lane. Fique de olho no Blink dele perto dos 19 min; se ele errar o combo sozinho, é praticamente kill garantido pra você.
- fonte: pro_dados/storm_spirit.json e pro_dados/tusk.json; constants_abilities.json (tusk_walrus_kick, tusk_snowball, tusk_ice_shards); items.json (sphere)

## Contra Snapfire (snapfire)
- placar: Storm venceu 158 de 319 (49,5%) contra Snapfire em pro, 7.40-7.41 (OpenDota matchups).
- por que importa: quarto confronto mais jogado; em pro ela também joga bastante de mid, 519 das 2.461 partidas de liga 7.40-7.41 (21,1%), com a maior taxa de vitória entre as rotas dela nesse recorte, 56,1% (partidas pro 7.40-7.41, OpenDota), então o cruzamento de lane acontece com frequência real, não só em luta.
- janelas: ela sai de Aghanim's Shard cedo pro padrão de suporte (mediana 16,9 min, pro_dados), que turbina Firesnap Cookie. Seu Kaya (13,7 min) chega antes, então na janela dos 14 aos 20 min você tem mais dano burst que ela tem de utilidade. O Blink dela só sai aos 20,7 min de mediana, bem depois do seu Power Treads (8,5 min) e Kaya.
- o que ela faz com você: Firesnap Cookie atordoa até 2,2s no nível 4 (impact_stun_duration, constants_abilities.json) e só é removível por dispel forte, não pelo dispel básico do seu Eul's; Mortimer Kisses, a ultimate, cobre uma área de 275 de raio por 5,5s e te queima enquanto você estiver dentro, perigosa se você entrar sozinho sem BKB.
- o que você faz com ele: Mortimer Kisses é um canal, e qualquer disable seu (inclusive o puxão do Electric Vortex) interrompe o cast dela antes de acertar; ela não tem fonte própria de magic resist ou blink rápido, então o combo completo de Vortex, Remnant e ataque com Overload costuma matar antes dela reagir.
- itens que viram: seu Witch Blade (22,3 min) garante que o slow conecte mesmo se ela tentar correr com o Scatterblast; o Shard dela (16,9 min) é o item que você precisa respeitar antes dos 17 min, porque turbina o stun do Cookie.
- como jogar: gankue ela antes do Shard sair se possível; depois dele, não entre no combo sem iniciar você primeiro com Vortex pra travar o cast da ultimate dela.
- fonte: pro_dados/storm_spirit.json e pro_dados/snapfire.json; constants_abilities.json (snapfire_firesnap_cookie, snapfire_mortimer_kisses); OpenDota explorer (consulta direta, partidas de liga 7.40-7.41, distribuição por lane_role)

## Contra Rubick (rubick)
- placar: Storm venceu 145 de 315 (46,0%) contra Rubick em pro, 7.40-7.41 (OpenDota matchups).
- por que importa: quinto confronto mais jogado; Rubick é o suporte que mais rouba valor do seu combo, já que Spell Steal pega literalmente uma das suas magias.
- janelas: ele sai de Blink cedo pro padrão de suporte (mediana 21,6 min) e chega a Aghanim's Scepter aos 27,4 min, bem depois do seu BKB (26,1 min). Na prática, a janela perigosa dele é entre o nível 6 (Spell Steal liberado) e o seu BKB: depois disso, o disable principal dele para de funcionar em você.
- o que ele faz com você: Spell Steal rouba sua última magia lançada com alcance de 1000 e atravessa Black King Bar (`bkbpierce: Yes`), então ele pode roubar Ball Lightning, Electric Vortex ou Static Remnant mesmo que você esteja imune a magia na hora; Telekinesis levanta e atordoa em área (até 1,5s no nível 4) mas não atravessa BKB.
- o que você faz com ele: seu BKB apaga a ameaça de Telekinesis, e como o alcance de conjuração dele depende da passiva Arcane Supremacy (só 550-625 de Telekinesis sem ela), ele precisa ficar perto pra te travar, dentro do seu próprio alcance de combo; o Ball Lightning fecha a distância antes de ele conseguir reposicionar.
- itens que viram: cuidado com o que você lança perto dele sem necessidade, porque o Spell Steal é o item/skill dele que mais "vira" o confronto; se ele acabou de roubar seu Ball Lightning, ele ganha a mesma mobilidade que você por até 5 minutos (duration 180-300s, constants_abilities.json).
- como jogar: na dúvida, gaste a magia "errada" primeiro (ex. Static Remnant antes de engajar) pra deixar só isso disponível pro roubo dele, guardando Vortex e Ball Lightning pra depois.
- fonte: pro_dados/storm_spirit.json e pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis)

## Contra Jakiro (jakiro)
- placar: Storm venceu 159 de 310 (51,3%) contra Jakiro em pro, 7.40-7.41 (OpenDota matchups).
- por que importa: sexto confronto mais jogado; dupla de disable (Ice Path + Dual Breath) é o tipo de pick que teoricamente deveria travar o combo do Storm.
- janelas: até os 20 min ele ainda está comprando wards e Arcane Boots (11,7 min, pro_dados), sem item de impacto; sua Kaya (13,7 min) e Witch Blade (22,3 min) chegam bem antes do Force Staff dele (26,2 min, amostra pequena), então na maior parte do jogo você tem mais poder de queima que ele de controle.
- o que ele faz com você: Ice Path atordoa até 2s no nível 4 e Dual Breath reduz 40% de velocidade de ataque e movimento por 5s (constants_abilities.json), nenhum dos dois atravessa Black King Bar; Macropyre cobre uma faixa de 500 de largura por 10s com até 200 de dano por segundo, perigoso se você ficar parado nela puxando luta.
- o que você faz com ele: seu BKB apaga Ice Path e Dual Breath inteiros, o que é a razão central da vantagem: ele perde praticamente todo o kit de controle contra um alvo imune a magia; e como ele é lento e sem escape, Ball Lightning fecha o gank antes de ele reagir.
- itens que viram: depois do seu BKB (26,1 min), a única coisa que ainda te afeta é a área de Macropyre, então o jogo vira sobre não brigar dentro da faixa dela.
- como jogar: gankeie Jakiro sem medo depois do nível 6 (seu Overload já compensa a lane), e guarde o BKB pra qualquer luta em grupo onde ele tenha os dois disables disponíveis.
- fonte: pro_dados/storm_spirit.json e pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_dual_breath, jakiro_macropyre)

## Contra Queen of Pain (queenofpain)
- placar: Storm venceu 146 de 255 (57,3%) contra Queen of Pain em pro, 7.40-7.41 (OpenDota matchups). Amostra grande, vantagem clara.
- por que importa: ela é quase só mid em pro, 1.969 das 2.228 partidas de liga 7.40-7.41 (88,4%, OpenDota), o segundo mid mais jogado contra o Storm depois do Ember, e o confronto mais "espelhado" da lista: duas mages de burst e blink que vivem de pegar sozinhas.
- janelas: os itens saem quase no mesmo minuto (Kaya dela 13,9 min contra 13,7 do seu; Kaya and Sange dela 20,8 min contra o seu 20,1), então até os 20 min é 1x1 puro de combo. Depois disso a diferença é mobilidade: seu Ball Lightning não tem cooldown fixo (só custo de mana crescente por distância), enquanto o Blink dela tem recarga normal de blink, então em troca repetida você reinicia o combo mais rápido que ela foge ou volta.
- o que ela faz com você: Sonic Wave causa dano puro e atravessa Black King Bar (`bkbpierce: Yes`, até 625 no nível 3), a única coisa dela que ainda te machuca de BKB ligado; Shadow Strike reduz seu movimento em até 55% por 16s, perigoso se você estiver sem Ball Lightning disponível pra fugir.
- o que você faz com ele: seu combo de Vortex, Remnant e ataque com Overload sai mais rápido que o dela (ela depende do Blink pra iniciar, você não precisa), então em confronto direto quem puxa primeiro costuma vencer, e historicamente é você (57,3%); Witch Blade garante que o slow conecte antes dela conseguir se afastar de novo.
- itens que viram: Sonic Wave dela é o único item/skill que fura seu BKB, então o jogo de luta em grupo é sobre gastar o blink/posicionamento dela antes de ela alinhar a ultimate; o seu Witch Blade (22,3 min) chega praticamente junto com o Aghanim's Scepter dela (23,5 min), que transforma a Shadow Strike dela em área.
- como jogar: evite ficar parado no alcance de 700 do Sonic Wave sem BKB depois dos 23 min; na troca direta, inicie você primeiro, porque o seu combo conecta mais rápido que o dela.
- fonte: pro_dados/storm_spirit.json e pro_dados/queenofpain.json; constants_abilities.json (queenofpain_sonic_wave, queenofpain_shadow_strike); OpenDota explorer (consulta direta, partidas de liga 7.40-7.41, distribuição por lane_role)

## Contra Void Spirit (void_spirit)
- placar: Storm venceu 97 de 168 (57,7%) contra Void Spirit em pro, 7.40-7.41 (OpenDota matchups). Vantagem clara.
- por que importa: ele é mid na maior parte das partidas em pro, 1.475 das 1.618 de liga 7.40-7.41 (91,2%, OpenDota), o terceiro mid mais comum contra o Storm; os dois são mages de mobilidade que vivem de pegar isolado, então quem inicia primeiro geralmente ganha.
- janelas: o Aghanim's Shard dele sai cedo pro papel dele (mediano 17,0 min) e dá True Sight no caminho do Aether Remnant, útil pra te achar em Ball Lightning; mas seu Kaya (13,7 min) e Witch Blade (22,3 min) chegam num ritmo parecido, e você tem mais dano sustentado no combo. O Scepter dele (25,1 min) dá silêncio e 2 cargas de Resonant Pulse, perto do seu BKB (26,1 min).
- o que ele faz com você: Astral Step teleporta ele até perto de você e marca com um "void mark" que só detona 1,25s depois, então o dano (130-330, constants_abilities.json) vem com atraso, dando tempo de reagir; Resonant Pulse causa dano e, com Scepter, silencia e ganha 2 cargas (aghs_desc), mas não atravessa BKB.
- o que você faz com ele: Electric Vortex puxa ele antes de completar o Astral Step de fuga (2 cargas, recarga de 15-25s por carga), e como ele não tem disable duro fora do Scepter, seu combo de Remnant mais ataque com Overload geralmente conecta primeiro.
- itens que viram: o Shard dele (True Sight no caminho do remnant) é o item que mais atrapalha você tentando fugir em Ball Lightning perto dele; seu BKB nega o silêncio do Scepter dele assim que ele tiver.
- como jogar: ataque ele antes do nível 6 (Scepter), já que o kit dele sem silêncio não trava seu combo; depois disso, puxe com Vortex assim que ele usar a primeira carga de Astral Step.
- fonte: pro_dados/storm_spirit.json e pro_dados/void_spirit.json; constants_abilities.json (void_spirit_astral_step, void_spirit_resonant_pulse); https://api.opendota.com/api/constants/aghs_desc; OpenDota explorer (consulta direta, partidas de liga 7.40-7.41, distribuição por lane_role)

## Contra Pangolier (pangolier)
- placar: Storm venceu 99 de 207 (47,8%) contra Pangolier em pro, 7.40-7.41 (OpenDota matchups). Praticamente par, abaixo do padrão dos outros mids da lista.
- por que importa: em pro ele joga mais de mid que de qualquer outra rota, 1.169 das 1.836 partidas de liga 7.40-7.41 (63,7%, OpenDota), o quarto mid mais comum contra o Storm; é o único mid da lista que tem resposta direta ao seu combo todo mágico.
- janelas: o Blink dele sai aos 19,2 min e o Aghanim's Shard aos 23,2, quase junto com o seu Witch Blade (22,3) e BKB (26,1). A ultimate Gyroshell dá 80% de resistência mágica e imunidade a debuff por até 12s (constants_abilities.json), então entre os 20 e os 30 min, se ele ligar a ultimate no meio do seu combo, quase todo seu dano mágico é cortado.
- o que ele faz com você: Swashbuckle, o dash de 3 golpes, atravessa Black King Bar (`bkbpierce: Yes`) e causa dano físico bônus mesmo com você imune; Gyroshell dá 80% de resistência mágica por até 12s, reduzindo Overload, Static Remnant e o dano do seu combo quase inteiro.
- o que você faz com ele: ele não tem escape fora do dash de combate, então Electric Vortex te deixa alcançar ele antes de ele ligar a ultimate; se ele já estiver em Gyroshell, é melhor recuar e guardar o combo pra depois, porque atacar nessa janela desperdiça mana.
- itens que viram: seu Witch Blade garante slow e true strike contra as ilusões/esquiva que vêm de itens de crítico dele; o Diffusal Blade dele (12,4 min, pro_dados) seca seu mana pool cedo, o que atrasa seu combo completo antes do Soul Ring compensar.
- como jogar: não force a luta quando ele acabou de ligar Gyroshell; espere passar e puna a janela de recarga, já que fora da ultimate ele não tem resposta pro seu burst.
- fonte: pro_dados/storm_spirit.json e pro_dados/pangolier.json; constants_abilities.json (pangolier_swashbuckle, pangolier_gyroshell); OpenDota explorer (consulta direta, partidas de liga 7.40-7.41, distribuição por lane_role)

## Contra Templar Assassin (templar_assassin)
- placar: Storm venceu 87 de 139 (62,6%) contra Templar Assassin em pro, 7.40-7.41 (OpenDota matchups). A maior vantagem da lista com amostra de peso (139 jogos).
- por que importa: TA é um carry que farma sozinho e precisa de tempo parado pra escalar; é exatamente o que o Storm, hero de pressão e gank global, mais interrompe.
- janelas: ela sai de Desolator aos 14,3 min e Blink aos 17,4, mas seu Kaya (13,7) e sua presença no mapa com Ball Lightning já estão ativos antes disso. Refraction dá só 3 instâncias de bloqueio no nível 1 (sobe pra 6 no nível 4, constants_abilities.json), e como seu combo soma vários instantes de dano separados (ataque com Overload, explosão de Static Remnant, ataques seguintes), ela gasta as cargas rápido num gank bem puxado.
- o que ela faz com você: Psi Blades espalha o dano do ataque dela em cone (até 700 de alcance e 100% do dano no nível 4) e atravessa BKB; Meld reduz sua armadura em até 8 por 6s antes do primeiro golpe, também atravessando BKB. Nenhuma das duas trava seu movimento, então ela precisa te acertar fisicamente pra doer.
- o que você faz com ele: Refraction é limitada em instâncias (3 a 6 conforme o nível), e Electric Vortex mais Static Remnant mais o ataque de Overload já consomem 2 a 3 dessas cargas numa única aproximação; como ela não tem disable nem silêncio fora do Scepter dela (que silencia via Psionic Trap), você geralmente consegue puxar e voltar antes dela reagir.
- itens que viram: o Aghanim's Shard dela (24,6 min, pro_dados) deixa Refraction ser castada mesmo disabled, então depois desse item ela aguenta mais um gank seu; seu Witch Blade (22,3 min) te dá true strike, irrelevante aqui porque Refraction é bloqueio de dano e não esquiva, mas o slow ainda prende ela no combo.
- como jogar: gankeie TA antes dos 15 min, quando ela ainda não tem Desolator nem Blink pra reagir; depois do Shard dela, puxe o combo todo de uma vez, já que ela não consegue mais ser desabilitada no meio da Refraction.
- fonte: pro_dados/storm_spirit.json e pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_refraction, templar_assassin_psi_blades, templar_assassin_meld); https://api.opendota.com/api/constants/aghs_desc

## Contra Alchemist (alchemist)
- placar: Storm venceu 35 de 60 (58,3%) contra Alchemist em pro, 7.40-7.41 (OpenDota matchups). Amostra de 60 jogos, acima do corte de 30 mas menor que os outros confrontos de vantagem.
- por que importa: é o par clássico de "dois core sem lane em comum": Storm é mid (pos 2), Alchemist é farmador solo (pos 1 ou jungle) que raramente cruza com o mid antes dos 15-20 min. O que decide o confronto é o power spike de cada um no mapa, não troca de lane.
- janelas: até os 15 min o Alchemist é só uma fazenda andando: Soul Ring aos 6,0 min e nada de ameaça de kill além do Unstable Concoction (stun de até 3,2s, mas com 5s de preparo fácil de perceber). Nesse período o Storm já está rodando o mapa com Soul Ring (6,1) e Power Treads (8,5), ganking lanes livremente. O Radiance do Alchemist sai mediano aos 13,9 min (672 de 796 jogos, 84% de taxa de compra, pro_dados), e é aí que ele começa a virar ameaça de verdade, limpando camps e pressionando torre; mas seu Kaya (13,7) e Witch Blade (22,3) continuam na frente da timeline dele, cujo Scepter só sai aos 22,4 e o BKB aos 25,1.
- o que ele faz com você: Radiance causa 60 de dano por segundo num raio de 650, e esse dano é constante mesmo contra evasão ou fuga parcial; se você ficar perto dele brigando corpo a corpo por mais de 2-3 segundos, o burn sozinho já tira uma fatia grande da sua vida baixa. Unstable Concoction, o stun dele, tem 5s de preparo e raio de 250, fácil de evitar se você estiver de olho, mas se acertar trava seu combo por até 3,2s no nível 4.
- o que você faz com ele: antes do Radiance (13,9 min), Alchemist não tem resposta nenhuma pro seu gank: sem disable confiável, sem mobilidade própria, só Chemical Rage dando velocidade de movimento. Seu combo de Vortex, Remnant e ataque com Overload mata ele fácil se você pegar ele sozinho na jungle antes dos 15 min.
- itens que viram: o Black King Bar dele (25,1 min) é o item que muda o confronto, porque até lá ele não tem resposta a disable nenhuma; depois do BKB dele, a luta vira sobre o Radiance (dano de área que seu BKB não impede) contra o seu Witch Blade e slow.
- como jogar: gankeie Alchemist cedo, de preferência antes dos 15 min, quando ele ainda não tem Radiance nem BKB. Depois dos 20 min, não brigue parado dentro do raio do Radiance; use Ball Lightning pra entrar, aplicar o combo rápido e sair.
- fonte: pro_dados/storm_spirit.json e pro_dados/alchemist.json; constants_abilities.json (alchemist_unstable_concoction)

## Contra Death Prophet (death_prophet)
- placar: Storm venceu 34 de 55 (61,8%) contra Death Prophet em pro, 7.40-7.41 (OpenDota matchups). Amostra pequena pro padrão da lista (55 jogos, mas acima do corte de 30).
- por que importa: ela joga quase metade das partidas de mid em pro, 268 de 573 partidas de liga 7.40-7.41 (46,8%, OpenDota), então divide lane com o Storm com frequência, e tem a única magia da lista capaz de desligar o combo inteiro dele de uma vez (Silence).
- janelas: ela não tem mobilidade nenhuma além do andar, então até os 15 min, se você sair na frente em nível, já consegue ganks limpos. O Staff of Wizardry dela sai aos 14,1 min e o primeiro item de impacto real (Cyclone aos 14,9, Scepter aos 18,3 ou BKB aos 26,4, amostra pequena, pro_dados) chega bem perto ou depois do seu Kaya (13,7), e o BKB dela só sai bem depois do seu Witch Blade (22,3).
- o que ela faz com você: Silence tem 450 de raio e dura de 3,5 a 5s, bloqueando as 4 magias do seu kit inteiro se acertar; Spirit Siphon dura até 4 cargas e drena vida e velocidade enquanto você ficar perto dela, mas exige proximidade que você controla.
- o que você faz com ele: ela é parada e sem fuga, então seu Ball Lightning fecha a distância antes dela conseguir alinhar o Silence; mesmo se ela silenciar, você ainda ataca normal, e Witch Blade garante que esse ataque tenha true strike e slow.
- itens que viram: o raio de 450 do Silence dela é curto perto do seu alcance de engajar com Ball Lightning, então o risco real é ela acertar o Silence antes de você começar o combo, não durante; depois disso ela não tem outra forma de te travar.
- como jogar: ataque ela de surpresa, vindo de fora do campo de visão, pra evitar o Silence a tempo; se ela silenciar primeiro, recue e espere passar em vez de insistir no combo quebrado.
- fonte: pro_dados/storm_spirit.json e pro_dados/death_prophet.json; constants_abilities.json (death_prophet_silence, death_prophet_spirit_siphon); OpenDota explorer (consulta direta, partidas de liga 7.40-7.41, distribuição por lane_role)

## Contra Mirana (mirana)
- placar: Storm venceu só 21 de 72 (29,2%) contra Mirana em pro, 7.40-7.41 (OpenDota matchups). A maior desvantagem da lista, com amostra grande (72 jogos).
- por que importa: Sacred Arrow é a única magia da lista que ameaça matar o Storm de longe, antes de qualquer combo começar, e Mirana é suporte de pickoff puro, feita pra isso.
- janelas: ela não tem item de impacto cedo (só botas simples aos 5,8 min, pro_dados; as wards dela saem tarde, 19-21 min), então o perigo dela não é de build, é de nível: Sacred Arrow sobe de 2,6 pra 5s de stun do nível 1 ao 4 (constants_abilities.json), e com qualquer item de alcance ela já ameaça o mapa inteiro. Seu Kaya (13,7) e Witch Blade (22,3) não ajudam muito aqui, porque o problema dela não é resistir ao seu combo, é te acertar antes dele acontecer.
- o que ela faz com você: Sacred Arrow viaja 3000 de distância a 900 de velocidade e, acertando em cheio (sem reduzir por distância, 1500+ de alcance máximo de stun), prende por até 5s no nível 4; como você tem vida baixa pro nível do jogo, um Arrow bem lançado seguido do time dela costuma ser kill garantido, mesmo com BKB (a Arrow em si não atravessa BKB, mas o tempo parado te deixa exposto a todo o resto do time).
- o que você faz com ele: Mirana é squishy e sem fuga rápida fora do Leap (650 de distância, 2 cargas), então se você sobreviver ao primeiro Arrow ou evitar, seu combo completo mata ela rápido; Ball Lightning em zigue-zague dificulta a mira do Arrow, já que ele é em linha reta.
- itens que viram: não existe item seu que apague o Arrow (ele não é mágico pra BKB bloquear o stun); o melhor é jogar posição, nunca andar sozinho em linha reta no campo de visão dela depois do nível 6.
- como jogar: use Ball Lightning em trajetos curtos e imprevisíveis perto dela, nunca em linha reta visível; se ela gastar o Arrow e errar, é a sua janela livre pra iniciar.
- fonte: pro_dados/storm_spirit.json e pro_dados/mirana.json; constants_abilities.json (mirana_arrow, mirana_leap)

## Contra Treant Protector (treant)
- placar: Storm venceu só 43 de 118 (36,4%) contra Treant Protector em pro, 7.40-7.41 (OpenDota matchups). Segunda maior desvantagem, com amostra grande (118 jogos).
- por que importa: Overgrowth é a única magia da lista inteira que atravessa Black King Bar, o item que resolve praticamente todo o resto dos confrontos do Storm.
- janelas: ele não tem build de impacto cedo (farm de suporte, 301 de ouro/min de mediana em pro, pro_dados), então o perigo dele não muda muito com o tempo de jogo: é sempre sobre pegar o momento certo de travar o grupo. O Aghanim's Shard dele sai mediano aos 19,0 min, dando visão permanente em árvores que ajuda o time dele a prever sua rota de Ball Lightning.
- o que ele faz com você: Overgrowth enraíza todo mundo num raio de 800 por até 5s no nível 3 e atravessa Black King Bar (`bkbpierce: Yes`, constants_abilities.json), então seu item de resposta padrão não resolve esse disable específico; Leech Seed desarma e rouba vida se você ficar perto por 1,5s.
- o que você faz com ele: ele é lento (280 de movimento) e sem fuga além de Nature's Guise, então se você conseguir puxar ele com Electric Vortex antes de ele castar Overgrowth, a troca é sua; fora do raio de 800 da ultimate, ele não tem nenhuma forma de te segurar.
- itens que viram: não existe resposta de item pro Overgrowth em si (nem BKB nem dispel forte tiram o root); o jogo é todo sobre nunca entrar em luta de grupo perto dele sem saber se a ultimate está disponível, já que a recarga é de 110 a 90s conforme o nível (constants_abilities.json), alta mesmo no nível 3.
- como jogar: cheque a ultimate dele antes de iniciar qualquer luta em grupo; se Overgrowth estiver pronta, prefira pegar ele isolado fora do alcance dela em vez de forçar o 5x5.
- fonte: pro_dados/storm_spirit.json e pro_dados/treant.json; constants_abilities.json (treant_overgrowth, treant_leech_seed)

## Contra Huskar (huskar)
- placar: Storm venceu só 26 de 71 (36,6%) contra Huskar em pro, 7.40-7.41 (OpenDota matchups). Terceira maior desvantagem, amostra boa (71 jogos).
- por que importa: Huskar é o único carry da lista cujo kit é desenhado pra matar exatamente o tipo de dano que o Storm faz (mágico, em rajada), e tem uma magia que ignora BKB e tira uma fatia fixa da sua vida.
- janelas: ele sai de Armlet muito cedo (mediano 9,1 min, pro_dados), e esse item sozinho já dá vida e dano suficiente pra ele vencer troca de lane contra qualquer squishy. Seu Kaya (13,7) chega antes do Sange dele (14,8) e do Black King Bar dele (23,2), então até os 20 min você ainda tem vantagem de burst; depois disso, o Berserker's Blood dele (resistência mágica de até 30% com vida baixa, constants_abilities.json) começa a cortar seu dano justamente quando a luta mais importa.
- o que ele faz com você: Life Break força ele a avançar até você, custa 32-44% da vida atual dele e causa o mesmo tanto em dano fixo no alvo, atravessando Black King Bar (`bkbpierce: Yes`); como você tem pouca vida, esse golpe sozinho costuma matar ou deixar você a um hit de morrer. Berserker's Blood ainda dá até 320 de velocidade de ataque e 30% de resistência mágica quando ele está com pouca vida, reduzindo seu combo mágico bem na hora que ele mais precisa sobreviver.
- o que você faz com ele: antes do Life Break (ultimate, nível 6) e do Armlet, ele é só um herói de força sem ameaça; Electric Vortex te deixa manter distância do alcance curto do Burning Spear (450) enquanto ainda bate nele à distância com Static Remnant.
- itens que viram: o Armlet dele (9,1 min) é o primeiro ponto de virada, porque já dá sustain e dano pra lane; seu Witch Blade (22,3 min) ajuda pouco aqui, já que o problema não é esquiva dele, é resistência mágica crescente com vida baixa, então focar burst físico rende mais que insistir em magia depois dos 50% de vida dele.
- como jogar: gankeie Huskar antes do Armlet (9 min) ou antes do nível 6 (Life Break); depois disso, evite trocar corpo a corpo e jogue pelo poke à distância, já que Berserker's Blood faz seu dano mágico cair de valor conforme a vida dele baixa.
- fonte: pro_dados/storm_spirit.json e pro_dados/huskar.json; constants_abilities.json (huskar_life_break, huskar_berserkers_blood, huskar_burning_spear)
