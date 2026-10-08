---
id: confrontos-ursa
heroi: Ursa
patch: 7.41
fontes:
- content/pro_dados/ursa.json
- content/pro_dados/rubick.json
- content/pro_dados/nevermore.json
- content/pro_dados/jakiro.json
- content/pro_dados/snapfire.json
- content/pro_dados/dragon_knight.json
- content/pro_dados/disruptor.json
- content/pro_dados/templar_assassin.json
- content/pro_dados/windrunner.json
- content/pro_dados/luna.json
- content/pro_dados/tiny.json
- content/pro_dados/morphling.json
- content/pro_dados/abyssal_underlord.json
- content/pro_dados/shredder.json
- content/pro_dados/mirana.json
- content/pro_dados/alchemist.json
- content/pro_dados/chen.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Como essa lista foi montada

16 oponentes. Critério 1 (6 primeiros): mais jogos de pro contra o Ursa na base de confrontos. Critério 2: outros pos 1 (carry) mais jogados contra ele, mesmo sem dividir lane. Critério 3: maiores vantagens e desvantagens do Ursa com 30+ partidas. Critério 4: carries clássicos de farm rápido, incluídos mesmo sem lane em comum (o pedido original citava Alchemist x Morphling como exemplo; aqui o equivalente é o próprio Ursa contra Alchemist e Morphling). Cada bloco abaixo diz o motivo específico.

Nota geral sobre Aghanim's do Ursa (fonte: aghs_desc): o Shard faz o Earthshock aplicar 3 cargas de Fury Swipes em todo mundo atingido no pulo (dano instantâneo de empilhamento, sem precisar acertar de ataque básico). O Scepter reduz a recarga do Enrage e permite usá-lo mesmo atordoado/enlaçado. Enrage é Strong Dispel, não é dispelável de volta e atravessa a própria imunidade mágica do Ursa (constants_abilities.json, ursa_enrage).

## Contra Rubick (rubick)
- placar: Ursa venceu 143 de 323 partidas pro (44,3%). É o oponente com mais jogos registrados contra ele na base inteira.
- por que importa: maior volume de jogos pro contra o Ursa de toda a base (323), mesmo quase nunca dividindo lane (Rubick é 4/5, Ursa é 1). O risco real não é a lane, é o Spell Steal.
- janelas: até os 13:42 (Battle Fury, mediana, pro_dados/ursa.json) você farma enquanto o Rubick sobe Arcane Boots (10:18) e começa a plantar wards (17-19 min). Dos 16:48 (seu Blink) aos 24:24 (seu BKB) é a janela mais perigosa: se você castar Earthshock, Overpower ou Enrage perto dele, ele pode roubar a magia e usar contra você ou o seu time depois.
- o que ele faz com você: Spell Steal copia a última magia que você lançou, a até 1000 de distância, e **atravessa Black King Bar** (bkbpierce: Yes, constants_abilities.json), seu BKB não impede o roubo. Se ele rouba o Enrage, ganha 80% de redução de dano e dispel forte pra si mesmo na pior hora. Telekinesis (stun ao cair, 0,9-1,5s) não atravessa BKB (bkbpierce: No).
- o que você faz com ele: Rubick tem vida baixa fixa e nenhuma mobilidade própria antes de item; pegá-lo sozinho é kill quase garantido, Overpower deleta ele em 3-6 ataques.
- itens que viram: nada impede o roubo em si (Spell Steal ignora imunidade mágica), a defesa é não gastar magia perto dele à toa. Depois do seu BKB, Telekinesis dele não te trava mais, mas o Spell Steal continua funcionando.
- como jogar: não force Earthshock/Enrage com um Rubick livre no raio de visão se não precisar; depois que ele gastar o Spell Steal numa magia fraca, ele fica sem o roubo até lançar de novo, mas o próprio Spell Steal recarrega rápido (16s no nível 1, 10s no 2, 4s no 3, constants_abilities.json), não é uma janela de folga longa, é questão de segundos até ele poder roubar outra coisa. Os 180-300s que aparecem na ficha da magia são o tempo que ele pode guardar a magia roubada antes dela expirar, não a recarga do Spell Steal em si.
- fonte: pro_dados/ursa.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis, ursa_enrage).

## Contra Shadow Fiend (nevermore)
- placar: Ursa venceu 157 de 318 partidas pro (49,4%).
- por que importa: segundo maior volume de jogos pro contra o Ursa (318) e o outro carry pos 1 mais jogado contra ele na base inteira de confrontos.
- janelas: SF sobe Power Treads aos 5:54 e Falcon Blade aos 6:12, e Mask of Madness aos 10:12, dobrando o ritmo de farm dele (pro_dados/nevermore.json). A partir do nível 6, três razes seguidas (Shadowraze) num alvo somam pelo menos 1.080 de dano mágico, 280 da primeira mais 360 e 440 das duas seguintes com o stack empilhando, antes de resistência. Esse é o trecho perigoso: se você entrar em alcance de Raze (200) ou Requiem (raio 1000) sem Black King Bar, o combo dele tira metade da sua vida ou mais. Depois do seu BKB (24:24), Raze e Requiem não fazem nada.
- o que ele faz com você: Shadowraze (dano em área na frente dele, com bônus por stack de alma) e Requiem of Souls (até 20 linhas de dano, medo e redução de resistência mágica) são os dois nukes; nenhum dos dois atravessa imunidade mágica (bkbpierce: No).
- o que você faz com ele: SF não tem disable nem escape de verdade fora do medo do Requiem; uma vez em alcance de ataque corpo a corpo, Overpower e Fury Swipes o deletam antes dele reposicionar.
- itens que viram: Black King Bar é a resposta completa aqui; Blink Dagger fecha a distância antes dele conseguir empilhar Shadowraze.
- como jogar: não inicie nele antes do BKB; depois do BKB, ele não tem nada pra te segurar fora de alcance.
- fonte: pro_dados/ursa.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_requiem, nevermore_shadowraze1).

## Contra Jakiro (jakiro)
- placar: Ursa venceu 139 de 273 partidas pro (50,9%).
- por que importa: terceiro maior volume de jogos pro contra o Ursa (273), suporte puro de pos 5, sem counter direto documentado; aparece tanto por ser pick comum do patch quanto por travar luta em área com Ice Path + Macropyre.
- janelas: Jakiro não tem spike de item, o dele é de nível (ultimate no 6). Dos 16:48 (seu Blink) em diante, se ele tiver Macropyre (linha de 100-200 de dano/s por 10s, alcance 1400) ou Ice Path (stun de até 2s em área) prontos, uma troca sem BKB pode te custar metade da vida parado na chama. Depois do seu BKB (24:24), os dois feitiços não fazem nada.
- o que ele faz com você: Ice Path prende em área (raio 150, stun crescente até 2s) e Macropyre queima quem fica na linha; nenhum dos dois atravessa imunidade mágica (bkbpierce: No).
- o que você faz com ele: Jakiro tem vida baixa e zero mobilidade própria; pego sozinho, Overpower mata em poucos segundos.
- itens que viram: Black King Bar anula o combo inteiro; Blink Dagger pula por cima da área de Ice Path em vez de atravessar andando.
- como jogar: respeite a linha de Macropyre antes do BKB; depois dele, dive livre, ele não tem resposta.
- fonte: pro_dados/ursa.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_macropyre).

## Contra Snapfire (snapfire)
- placar: Ursa venceu 131 de 271 partidas pro (48,3%).
- por que importa: quarto maior volume de jogos pro contra o Ursa (271), suporte flexível (2/3/4/5) que aparece em quase todo draft do patch; ameaça real em burst mesmo sem brigar de lane.
- janelas: ela sobe Arcane Boots (~10:36) e o Shard (16:54, um dos itens de meio de jogo mais comprados dela na base pro) antes do seu Blink (16:48). Nesse ponto ela já tem Mortimer's Kisses de nível alto. Mortimer's Kisses lança 8 globos (até 360 de dano cada se todos acertarem o mesmo alvo) ao longo de 5,5s: pego sozinho e sem BKB, é quase metade da sua vida. Depois do seu BKB (24:24), o combo dela não encosta.
- o que ela faz com você: Mortimer's Kisses (burst de longo alcance) e Scatterblast (cone com 100% de lentidão à queima-roupa) são os dois riscos; nenhum atravessa imunidade mágica (bkbpierce: No).
- o que você faz com ele: Snapfire tem vida baixa pro tanto de controle que carrega; sem Firesnap Cookie de aliado por perto, ela não escapa de um Overpower.
- itens que viram: Black King Bar neutraliza os dois combos dela; Skull Basher trava ela antes do Scatterblast à queima-roupa sair.
- como jogar: não entre no alcance dos globos sem BKB; depois dele, ela é alvo fácil se estiver isolada.
- fonte: pro_dados/ursa.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_mortimer_kisses, snapfire_scatterblast).

## Contra Dragon Knight (dragon_knight)
- placar: Ursa venceu 135 de 266 partidas pro (50,8%, equilibrado).
- por que importa: quinto maior volume de jogos pro contra o Ursa (266). Sem counter de kit documentado e sem lane fixa em comum; está na lista por ser simplesmente o quinto pick mais emparelhado com Ursa no patch, não por counter real.
- janelas: antes do nível 6 (Elder Dragon Form), DK é só mais um corpo a corpo com Dragon Tail (stun de 1,8-2,4s, alcance curto de 150); Overpower o deleta num confronto direto nessa fase. A partir do nível 6, em forma de dragão ele ganha 350 de alcance extra de ataque e ataque à distância com dano corrosivo, passa a kitar em vez de bater corpo a corpo. Os dois sobem Blink quase junto (dele 16:12, seu 16:48).
- o que ele faz com você: Dragon Tail atordoa e, em forma de dragão, o hálito corrosivo causa dano ao longo do tempo à distância; nenhum dos dois atravessa imunidade mágica (bkbpierce: No).
- o que você faz com ele: Overpower vence qualquer troca corpo a corpo antes do nível 6; depois, você precisa fechar distância (Blink, Earthshock) porque ele ganhou alcance de ataque.
- itens que viram: Black King Bar bloqueia o Dragon Tail e o dano corrosivo da forma de dragão; Blink Dagger compensa o alcance extra dele depois do nível 6.
- como jogar: force a luta antes do nível 6 dele se puder; depois, feche distância rápido em vez de trocar à distância, ele ganha a troca de longe.
- fonte: pro_dados/ursa.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_dragon_tail, dragon_knight_elder_dragon_form).

## Contra Disruptor (disruptor)
- placar: Ursa venceu 123 de 243 partidas pro (50,6%).
- por que importa: sexto maior volume de jogos pro contra o Ursa (243), e o combo Kinetic Field + Static Storm anula o Enrage: Static Storm silencia a área inteira, e sob silêncio você não consegue conjurar nada (constants_abilities.json, disruptor_static_storm).
- janelas: Disruptor não tem spike de item, o dele é o nível 6 (Static Storm). A partir daí, se ele te prender numa Kinetic Field (gaiola que bloqueia movimento) e seguir com Static Storm (silêncio de 6s, até 350 de dano/s), seu Enrage fica inútil, porque você não consegue conjurar sob silêncio. Isso vale em qualquer fase do jogo, inclusive depois do seu Blink e do Basher.
- o que ele faz com você: Kinetic Field prende você numa área; Static Storm silencia e aumenta o dano ao longo da duração. Nenhum dos dois atravessa imunidade mágica (bkbpierce: No, constants_abilities.json), e isso é a chave do matchup.
- o que você faz com ele: Disruptor tem vida baixa fixa e zero mobilidade própria; se você entrar nele antes da gaiola fechar, ele morre rápido pro Overpower.
- itens que viram: Black King Bar **antes** da Static Storm começar a canalizar resolve os dois problemas de uma vez, já que nem a gaiola nem o silêncio atravessam imunidade mágica. A resposta é sincronizar o uso do item com a aproximação dele, não esperar ser pego.
- como jogar: trate todo Disruptor fora de visão como ameaça de gaiola; se o BKB não estiver pronto a tempo, não force a entrada, espere o time abrir primeiro.
- fonte: pro_dados/ursa.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm, disruptor_kinetic_field).

## Contra Templar Assassin (templar_assassin)
- placar: Ursa venceu 91 de 203 partidas pro (44,8%).
- por que importa: o carry pos 1 com mais jogos de pro contra o Ursa depois do Shadow Fiend (203), mesmo quase nunca dividindo lane (TA é mid/safelane, Ursa é farm de jungle).
- janelas: ela fecha Power Treads aos 6:00 (pro_dados/templar_assassin.json) e já sai pra farm fora da lane; aos 13:18 tem Mithril Hammer (componente do Basher dela) e aos 14:12-14:18 fecha Desolator e Dragon Lance. Nesse ponto a armadura reduzida pelo Desolator (ela tira armadura de quem ataca) machuca qualquer troca física. Seu Battle Fury sai perto (13:42), então até ali é corrida de farm paralela, não confronto direto.
- o que ela faz com você: Meld (invisível parado, ataque surpresa com até 200 de dano bônus e -8 de armadura) e o spill de Psi Blades poke à distância; Refraction dá até 6 instâncias de barreira (30 de dano cada) que absorvem seus primeiros golpes de Overpower.
- o que você faz com ele: a barreira da Refraction é só 30 de dano por instância, seu dano de ataque itemizado passa disso fácil depois do meio de jogo; Fury Swipes continua empilhando atrás da barreira. Skull Basher trava ela antes dela sumir de novo no Meld.
- itens que viram: Basher/Abyssal Blade (trava ela assim que ela aparece do Meld); seu próprio dano cru resolve a barreira da Refraction depois que você tem Battle Fury + Basher.
- como jogar: ataque ela assim que ela revelar do Meld, antes dela recarregar; não espere a Refraction esvaziar sozinha, ela recarrega barreira enquanto a instância anterior não é gasta.
- fonte: pro_dados/ursa.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_refraction, templar_assassin_meld).

## Contra Windranger (windrunner)
- placar: Ursa venceu 80 de 183 partidas pro (43,7%, uma das piores marcas do Ursa com amostra grande).
- por que importa: terceiro carry pos 1 mais jogado contra o Ursa (183); o kit dela já aponta o item certo: Windrun dá 100% de evasão, e Monkey King Bar tem 80% de chance de ignorar evasão por ataque (items.json, monkey_king_bar).
- janelas: ela sobe Treads aos 7:12, Javelin (componente de MKB) aos 9:18 e Maelstrom aos 13:24, ela mesma está construindo itens de farm/crit nessa janela, correndo em paralelo com seu Battle Fury (13:42). Windrun (100% de evasão, 3-6s conforme nível) é o maior risco: usada no momento certo, anula um Overpower inteiro se você não tem MKB.
- o que ela faz com você: Windrun evita 100% dos seus ataques físicos por até 6s; Shackleshot prende você num alvo ou árvore atrás (até 3,25s de stun), que não atravessa imunidade mágica (bkbpierce: No).
- o que você faz com ele: seu Earthshock com Shard aplica as 3 cargas de Fury Swipes nela mesmo durante a Windrun, porque é dano de feitiço, não ataque, a evasão não bloqueia isso. Monkey King Bar (80% de acerto garantido) resolve o resto.
- itens que viram: Monkey King Bar é a resposta direta à Windrun; Skull Basher trava ela antes dela conseguir ativar a evasão de novo.
- como jogar: force ela a gastar a Windrun antes de comprometer o Overpower de verdade, ou abra com Earthshock pra já sair com stacks de Fury Swipes rodando independente da evasão dela.
- fonte: pro_dados/ursa.json; pro_dados/windrunner.json; items.json (monkey_king_bar); constants_abilities.json (windrunner_windrun, ursa_overpower, ursa_earthshock).

## Contra Luna (luna)
- placar: Ursa venceu 84 de 173 partidas pro (48,6%).
- por que importa: quarto carry pos 1 mais jogado contra o Ursa (173); os dois competem pelo mesmo papel de farmar jungle rápido e fechar o jogo sozinho, mesmo raramente na mesma lane.
- janelas: Luna sai um pouco na frente no farm bruto (GPM de pro 695 contra 624 do Ursa, LH aos 10 min 69 contra 59, pro_dados). Ela fecha Treads aos 5:36 e Mask of Madness aos 10:00, abrindo o ciclo onda-camp-onda cedo; Yasha (13:42) e Diadem (14:54) chegam pouco antes do seu Battle Fury (13:42), é corrida de farm, não troca direta até aí. A partir do nível 6, Eclipse é burst real só se ela te pegar agrupado à noite.
- o que ela faz com você: Moon Glaive salta entre alvos próximos (cleave de farm, não burst de duelo); Lucent Beam atordoa 0,6s à distância; Eclipse chove feixes em área, perigoso em grupo.
- o que você faz com ele: Luna é frágil sem item, sem disable de verdade além do stun curto do Lucent Beam; uma vez em alcance de ataque, Fury Swipes e Overpower acabam com ela rápido.
- itens que viram: Skull Basher/Abyssal Blade travam ela antes do Moon Glaive virar fuga; nenhum item dela ignora imunidade mágica, então o BKB cobre o Lucent Beam e o Eclipse.
- como jogar: não dispute o mesmo camp cara a cara antes dos 13-14 min, as velocidades de clear são parecidas e é desperdício de tempo; depois do Basher, isole ela, ela não tem escape.
- fonte: pro_dados/ursa.json; pro_dados/luna.json; constants_abilities.json (luna_eclipse, luna_lucent_beam).

## Contra Tiny (tiny)
- placar: Ursa venceu 78 de 165 partidas pro (47,3%).
- por que importa: quinto carry pos 1 mais jogado contra o Ursa (165); o combo de controle dele pune qualquer entrada sem BKB, mesmo com o Ursa um pouco atrás no confronto direto (47,3% de vitórias).
- janelas: Tiny sobe Power Treads aos 6:06 e Echo Sabre aos 12:06 (pro_dados/tiny.json). A partir do nível 6 (Grow), o combo Avalanche + Toss vira ameaça de pick-off real. Seu BKB (24:24) chega bem depois da janela de pico dele (6-12 min); até lá, cuidado redobrado.
- o que ele faz com você: Avalanche (stun em área, até 1,5s em 5 tiques) seguido de Toss (agarra a unidade mais próxima num raio de 300, inclusive você, e te arremessa) é o combo de kill dele; nenhum dos dois atravessa imunidade mágica (bkbpierce: No/None).
- o que você faz com ele: sem sustain nem escape de verdade fora do próprio Toss, Tiny perde qualquer troca direta depois que o combo inicial falha ou é bloqueado.
- itens que viram: Black King Bar anula Avalanche + Toss por completo; antes dele, a resposta é posição, não ficar parado perto de árvore/raio de 300 dele sem necessidade.
- como jogar: trate Tiny nível 6+ sem BKB como ameaça de combo instantâneo; depois do seu BKB, ele não tem resposta pro seu Overpower.
- fonte: pro_dados/ursa.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss).

## Contra Morphling (morphling)
- placar: Ursa venceu 52 de 93 partidas pro (55,9%), uma das suas melhores marcas com amostra relevante.
- por que importa: é o par carry contra carry sem lane em comum mais direto da lista, os dois são farmistas de pos 1 que raramente se cruzam cedo, mas competem pelo papel de "quem fecha o jogo sozinho" no final. Exatamente o tipo de confronto que passa batido quando se olha só pra lane, mas decide luta tardia.
- janelas: Morphling fecha Power Treads aos 6:00 e Morbid Mask aos 7:54, o primeiro pico real de farm (pro_dados/morphling.json). Waveform maxada dá um dash invulnerável com até 300 de dano. Seu Battle Fury (13:42) chega bem antes do Manta dele (18:24), nessa janela de farm paralela, ninguém força a barra. Depois dos 18-19 min, com Manta, ele ganha mobilidade e ilusões.
- o que ele faz com você: Waveform é invulnerável durante o dash (escape que seu Earthshock de 250 de alcance não alcança se ele já começou a sair); Adaptive Strike empurra e atordoa (0,5-2,6s conforme a força/agilidade dele) à distância.
- o que você faz com ele: Morphling tem vida base baixa e nenhuma mitigação própria fora de item; Earthshock atinge ele mesmo se ele tentar andar pra longe normal (só o Waveform em si é invulnerável, não o resto do kit), e Fury Swipes o mata rápido uma vez pego.
- itens que viram: Diffusal Blade prende as cópias do Manta dele por 3-4s (items.json, diffusal_blade: 3s de raiz em ilusão, 4s de lentidão em herói), evitando que você gaste o Overpower numa ilusão; Skull Basher o trava antes dele conseguir iniciar o Waveform de novo.
- como jogar: ataque antes dele começar a animação do Waveform (depois de iniciado, ele já saiu); depois de Basher, ele não tem saída.
- fonte: pro_dados/ursa.json; pro_dados/morphling.json; constants_abilities.json (morphling_waveform, morphling_adaptive_strike_agi); items.json (diffusal_blade).

## Contra Underlord (abyssal_underlord)
- placar: Ursa venceu 98 de 152 partidas pro (64,5%), uma das suas melhores marcas da lista com amostra grande.
- por que importa: maior amostra de vantagem relevante da lista (152 jogos): o kit dele não trava o Fury Swipes nem o Enrage. Entra mesmo sem counter de lane direto, pelo volume de confrontos registrados mesmo sem dividir rota.
- janelas: Underlord sobe Soul Ring aos 7:12 e passa a lane trocando Firestorm/Pit of Malice; não tem spike de item marcante depois disso, o dele é posicionamento e aura. Seu Battle Fury (13:42) e Blink (16:48) chegam no meio dessa fase de farm dele.
- o que ele faz com você: Pit of Malice (raiz em área de 400, retoca a cada 3,6s) prende se você pisar nela perseguindo alguém; Atrophy Aura (raio 900) reduz seu dano base em até 32% enquanto você fica perto, mesmo sem ser atingido por feitiço nenhum.
- o que você faz com ele: Atrophy Aura reduz especificamente o dano base de quem está perto (até 32%, constants_abilities.json), mas o bônus empilhado do Fury Swipes não é dano base, é adicional por ataque consecutivo; e o Enrage anula o dano e a raiz tanto do Pit of Malice quanto a queimada do Firestorm de uma vez (ambos bkbpierce: No, então também caem pro BKB).
- itens que viram: Black King Bar + Enrage junto cobre Firestorm e Pit of Malice ao mesmo tempo; o problema não é o item, é a aura passiva de longo alcance, que não some com imunidade mágica.
- como jogar: não fique parado dentro do raio de 900 da aura trocando ataque à toa, isso já corta seu dano antes da luta começar; salve o Enrage especificamente pro momento em que a Pit ou o Firestorm começam a ticar, não antes. O kit e a amostra de pro concordam aqui: o Enrage literalmente desliga o combo do Underlord, e isso aparece direto no placar.
- fonte: pro_dados/ursa.json; pro_dados/abyssal_underlord.json; constants_abilities.json (abyssal_underlord_pit_of_malice, abyssal_underlord_atrophy_aura, ursa_enrage, ursa_fury_swipes).

## Contra Timbersaw (shredder)
- placar: Ursa venceu 109 de 184 partidas pro (59,2%), segunda maior vantagem do Ursa da lista com amostra grande, atrás só do Underlord.
- por que importa: segunda maior amostra de vantagem da lista (184 jogos). O kit dele (Whirling Death, Chakram, Reactive Armor) não atravessa imunidade mágica, o que facilita a virada pro Ursa depois do BKB.
- janelas: Timbersaw sobe Soul Ring aos 7:36 e Kaya aos 13:00, período em que ele ainda está craving mana pro combo Whirling Death + Timber Chain. Seu Battle Fury (13:42) chega quase junto.
- o que ele faz com você: Whirling Death e Chakram são dano puro, ignoram armadura; Reactive Armor empilha armadura e regen a cada ataque que ele recebe (ataque de herói conta 4x). Nenhuma das magias dele atravessa imunidade mágica (bkbpierce: No, constants_abilities.json).
- o que você faz com ele: sem disable que atravesse imunidade mágica, Timbersaw perde qualquer troca direta depois do seu BKB; Overpower decide antes da Reactive Armor empilhar o suficiente pra importar.
- itens que viram: Black King Bar bloqueia o kit inteiro dele (nada é bkbpierce); se ele tiver Heaven's Halberd, seu Earthshock com Shard ainda aplica as 3 cargas de Fury Swipes durante o Disarm, porque é feitiço, não ataque básico.
- como jogar: puna ele cedo, antes da Reactive Armor empilhar; depois do seu BKB, ele fica sem resposta nenhuma.
- fonte: pro_dados/ursa.json; pro_dados/shredder.json; constants_abilities.json (shredder_reactive_armor, shredder_whirling_death).

## Contra Mirana (mirana)
- placar: Ursa venceu só 10 de 40 partidas pro (25,0%), a pior marca do Ursa contra qualquer oponente com 30+ jogos na base. Amostra ainda é pequena (40), mas a margem é grande demais pra ignorar.
- por que importa: maior desvantagem percentual de toda a base com amostra de 30+. Mirana não divide lane com o Ursa, ela te pega de longe.
- janelas: ela não tem spike de farm, o dela é o próprio Sacred Arrow e, depois dos 22:18 (mediana, pro_dados/mirana.json), o Eul's Scepter of Divinity. Esse é o combo decisivo: ela te prende no ciclone e o time foca.
- o que ela faz com você: Sacred Arrow (alcance 3000, até 5s de stun e 180 de dano bônus na distância máxima) te prende de longe antes de você chegar perto; Eul's Scepter te joga pro alto, imóvel, enquanto o time bate. O stun do Arrow é só dispelável por Strong Dispel (seu Enrage serve, mas só se você já tiver Scepter pra castar atordoado).
- o que você faz com ele: Mirana é frágil e sem escape de verdade além da velocidade do Leap; uma vez perto dela, Overpower e Earthshock acabam rápido.
- itens que viram: Black King Bar bloqueia os dois se já estiver ativo quando ela castar: nem o Eul's nem o Sacred Arrow atravessam imunidade mágica (bkbpierce: No, constants_abilities.json). O problema é o tempo de reação, a flecha vem de até 3000 de distância, então é questão de visão e posicionamento pra não dar o ângulo de tiro limpo antes de conseguir ativar o BKB.
- como jogar: trate toda Mirana fora de visão como ameaça de flecha; não ande em linha reta por lane aberta sem necessidade antes do BKB. Depois do BKB, ela sozinha não te segura.
- fonte: pro_dados/ursa.json; pro_dados/mirana.json; constants_abilities.json (mirana_arrow, ursa_enrage).

## Contra Alchemist (alchemist)
- placar: Ursa venceu só 15 de 43 partidas pro (34,9%), terceira maior desvantagem do Ursa com 30+ jogos.
- por que importa: é o outro par carry contra carry sem lane em comum da lista, igual ao exemplo original do Alchemist contra Morphling, os dois disputam o papel de farmista solo de jungle, e aqui o Alchemist ganha essa corrida de forma clara. Os números se confirmam dos dois lados: dos 43 jogos, 15 vitórias do Ursa e 28 do Alchemist (65,1%), mesma base de partidas pro (pro_dados/ursa.json).
- janelas: Alchemist tem GPM de pro mediano de 768 contra 624 do Ursa, a maior diferença de farm de toda essa lista (pro_dados). A partir do nível 6 ele tem Chemical Rage (BAT 1,2 no primeiro ponto, +20 de velocidade, +60 de regen/s), e Acid Spray maxado é raio 500, 40 de dano/s e -6 de armadura por 15s (constants_abilities.json); isso já limpa camp inteiro antes do seu Battle Fury (13:42) sequer fechar. Radiance dele sai aos 13:54 (pro_dados/alchemist.json), quase junto do seu BF.
- o que ele faz com você: Chemical Rage faz ele clarear jungle mais rápido que você na janela 8-13 min; Acid Spray reduz sua armadura em combate; Unstable Concoction (carrega até 5s, até 3,2s de stun e 360 de dano em raio 250) pode te iniciar sozinho, mas é telegrafado.
- o que você faz com ele: sem disable de verdade fora do Unstable Concoction (que é visível carregando), Alchemist perde qualquer troca direta pro seu Fury Swipes empilhado e pro Enrage (80% de redução) uma vez que você fecha a distância.
- itens que viram: Black King Bar bloqueia o stun do Unstable Concoction; Sange (25% de resistência a lentidão, items.json) ajuda contra o raio do Acid Spray.
- como jogar: não dispute o mesmo camp de jungle que ele antes do seu Battle Fury, você perde a corrida de clear nessa janela; depois do BF, puxe pra um 1x1 direto, aí o seu empilhamento de dano e o Enrage decidem a seu favor.
- fonte: pro_dados/ursa.json; pro_dados/alchemist.json; constants_abilities.json (alchemist_chemical_rage, alchemist_acid_spray, alchemist_unstable_concoction); items.json (sange).

## Contra Chen (chen)
- placar: Ursa venceu só 19 de 57 partidas pro (33,3%), segunda maior desvantagem do Ursa com 30+ jogos.
- por que importa: maior amostra entre os suportes puros com desvantagem relevante (57 jogos). Chen não briga de lane nem de luta com você, ele nega seu farm de jungle de um jeito que nenhum outro oponente da lista faz.
- janelas: Chen sobe Ring of Basilius aos 8:36 e passa o jogo convertendo creeps neutros (Holy Persuasion, até 4 unidades, HP travado em 400) em vez de farmar pra si mesmo. Não existe uma janela de "pico" dele no sentido de item ou nível, o efeito dele é contínuo: cada creep que ele converte é um creep a menos no seu ciclo de jungle antes do Battle Fury (13:42).
- o que ele faz com você: Holy Persuasion rouba os camps que você ia limpar, atrasando seu Battle Fury; Penitence desacelera e amplifica dano recebido num alvo pro time dele focar; Hand of God cura o time todo de uma vez numa luta prolongada.
- o que você faz com ele: o exército de creeps dele é fraco individualmente (400 de HP cada, dano baixo); matar o próprio Chen (frágil, sem defesa pessoal) resolve o problema de uma vez, os creeps convertidos não aguentam sozinhos.
- itens que viram: nenhum item específico resolve a negação de camp. A resposta é rota: farme um camp diferente do que ele está de olho, ou mande visão pra saber que camp ele vai converter antes de perder tempo indo lá.
- como jogar: cheque qual camp o Chen está perseguindo antes de puxar sua própria rota de farm; se ele aparecer sozinho perto do seu jungle, é kill livre, não é motivo pra fugir.
- fonte: pro_dados/ursa.json; pro_dados/chen.json; constants_abilities.json (chen_holy_persuasion, chen_penitence).
