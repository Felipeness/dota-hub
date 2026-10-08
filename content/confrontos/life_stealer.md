---
id: confrontos-life_stealer
heroi: Lifestealer
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/life_stealer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/centaur.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ursa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/phantom_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/doom_bringer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/alchemist.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/morphling.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/terrorblade.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/luna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/slardar.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/confrontos/_heroid_map.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Como os 16 oponentes foram escolhidos

Life Stealer é carry de safelane (posição 1). A lista mistura 4 critérios, sem repetir: (1) os 6 heróis com mais jogos de pro contra ele direto do `pro_dados` (Rubick, Shadow Fiend, Tiny, Centaur, Jakiro, Mars); (2) carries que dividem a mesma função mesmo sem dividir lane (Dragon Knight, Ursa, Phantom Assassin, Luna, Templar Assassin); (3) as maiores vantagens e desvantagens com 30 ou mais jogos (Phantom Assassin e Dragon Knight no topo da vantagem, Doom e Slardar no topo da desvantagem); (4) os carries mais jogados em pro contra ele mesmo sem lane em comum, incluindo os dois exemplos clássicos de "carry contra carry que não se cruzam", Alchemist e Morphling, e o rival de late game Terrorblade. Todos os 16 têm 30 ou mais jogos de pro na amostra, então nenhum bloco carrega aviso de amostra pequena.

## Contra Rubick (rubick)
- placar: 126 vitórias em 266 jogos de pro (47,4%). Amostra grande.
- por que importa: é quem mais jogou contra o Life Stealer em pro (266 partidas) porque o kit dele foi feito pra negar justamente o seu: rouba a última magia que você lançou (geralmente Rage, Open Wounds ou Infest) e pode usá-la contra você ou a favor do time dele.
- janelas: Rubick não tem spike de farm (374 de gpm e 17 last hits aos 10 min, mediana de 3.990 jogos de pro, bem abaixo do seu 601/56). O perigo dele é todo de timing de magia: do nível 6 em diante ele já pode roubar. Antes da sua Radiance (16:12 mediana) ele costuma pegar 1-2 roubos em gank de lane ou de jungle; depois da Radiance, você farma tão espalhado que ele raramente chega perto o bastante pra roubar algo que valha a pena.
- o que ele faz com você: Fade Bolt reduz o dano que você causa em até 24% por 10s; Telekinesis te levanta e atordoa até 1,5s ao cair; a ameaça real é o Spell Steal: se ele rouba seu Rage, ganha imunidade a debuff e resistência mágica própria; se rouba seu Open Wounds, pode te lentificar e curar o time dele com o seu próprio feitiço.
- o que você faz com ele: ele tem só 17 last hits aos 10 min e nível baixo o jogo inteiro; pegando ele isolado, Feast mais Open Wounds encerram rápido, e sua Rage ignora o debuff do Fade Bolt e da Telekinesis enquanto ativa.
- itens que viram: nenhum item seu muda esse duelo direto, porque ele não entra em troca de dano; do lado dele, Blink Dagger (mediana 21,6 min) é o que permite roubar de surpresa sem ser visto chegando.
- como jogar: não gaste Rage ou Open Wounds à toa com um Rubick visível por perto, guarde pro momento que decide a luta. Cace ele cedo quando puder: sem suporte dele, seu time ganha espaço de mapa.
- fonte: pro_dados/life_stealer.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_fade_bolt, rubick_telekinesis, life_stealer_rage).

## Contra Shadow Fiend (nevermore)
- placar: 95 vitórias em 192 jogos de pro (49,5%). Amostra grande.
- por que importa: segundo em jogos de pro contra você (192). Raramente compartilha lane (ele vai de mid, você de safelane), mas os dois são carries de early-mid cuja curva de item decide o jogo primeiro, então o confronto é indireto: quem fica forte antes pressiona o mapa antes.
- janelas: ele tem o pico mais cedo dos dois. Falcon Blade sai aos 6,2 min (mediana, p25 4,8) e libera o combo de Shadowraze em quase toda troca de lane. Dos 16 aos 20 min, antes da sua Radiance (16:12) e do BKB dele (mediana 25,2), é a fase mais perigosa pra você: 3 Shadowraze custam só 225 de mana e tiram metade da vida de um herói de nível baixo. O Mask of Madness dele (mediana 10,2) silencia o próprio Shadow Fiend por 6s enquanto ativo, então ele não consegue emendar Raze nessa janela. Depois da sua Radiance (16,2) e do Dragon Lance dele (mediana 14,0), o jogo vira farm paralelo.
- o que ele faz com você: Shadowraze bate à queima-roupa (raio 250, sem precisar mirar em você de verdade) e ganha dano extra por alma roubada via Necromastery; Requiem of Souls (ult) causa medo em área, te afastando dele por até 2,15s.
- o que você faz com ele: ele tem pouca vida no nível 1 e nenhuma fuga própria antes do Hurricane Pike (mediana 23,0 min); fechando distância com Phase Boots, Rage mais Open Wounds encerram a troca antes dele emendar 3 Razes.
- itens que viram: Mask of Madness dele te dá 6s livres se você já estiver em cima na hora que ele ativa; BKB dele (25,2 min) bloqueia seu Open Wounds por completo a partir desse ponto, porque a habilidade não atravessa BKB.
- como jogar: ataque antes dos 20 min, de preferência logo depois dele gastar o combo de Raze numa wave (fica sem mana pros 3 hits de novo). Depois do BKB dele, jogue pelo dano bruto do Feast, não pelo Open Wounds.
- fonte: pro_dados/life_stealer.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, life_stealer_open_wounds).

## Contra Tiny (tiny)
- placar: 97 vitórias em 189 jogos de pro (51,3%). Amostra grande.
- por que importa: terceiro em jogos de pro contra você (189) e também carry de posição 1 no catálogo, então aparece ao seu lado em pro mesmo sem dividir lane sempre.
- janelas: Tiny monta o combo de controle mais cedo que você monta sustain: Echo Sabre aos 12,1 min (mediana; dobra o ataque a cada 5s) e Blink aos 15,9, antes da sua Radiance (16,2) firmar. Entre 15 e 20 min é a janela de maior risco pra você, com ele já tendo Blink e Grow crescendo. Depois dos 24 (seu Sange and Yasha aos 23,9, BKB dele aos 26,7), o jogo equilibra, porque ele precisa do BKB pra travar você sem levar Open Wounds de novo.
- o que ele faz com você: Avalanche atordoa em pancadas (até 1,5s somado) e Toss te joga longe da sua rota de farm; Grow aumenta o dano de ambos ao longo da partida, então quanto mais tarde a luta, mais ele bate.
- o que você faz com ele: Rage não bloqueia o dano do combo, mas segura boa parte do controle atrelado a debuff; Open Wounds reduz a cura dele em até 50%, o que pesa porque Tiny não tem sustain própria no kit.
- itens que viram: BKB dele (26,7 min) bloqueia seu Open Wounds a partir desse ponto; Basher seu (30,9 min) trava o Toss dele a distância, porque ele não consegue se afastar depois de bashado.
- como jogar: evite lutar sozinho entre 15 e 20 min sem visão do Blink dele. Depois da sua Radiance, force a troca em área aberta, sem árvore pro Toss dele.
- fonte: pro_dados/life_stealer.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_grow).

## Contra Centaur Warrunner (centaur)
- placar: 89 vitórias em 186 jogos de pro (47,8%). Amostra grande.
- por que importa: quarto em jogos de pro contra você (186) e offlaner clássico da função 3, então divide lane direto com você com bastante frequência no 7.41.
- janelas: Centaur farma rápido de selva com Helm of the Dominator (8,8 min) e Ring of Tarrasque (17,5), ficando tanque antes da sua Radiance fechar. O pico de iniciação dele é o Blink (19,6 min) junto com Stampede: ele pode te prender em 1x1 com Hoof Stomp (até 2,2s de stun) antes de você reagir. Depois dos 20, com Armlet e Sange and Yasha seus prontos, a troca vira sua, porque Open Wounds corta a cura dele na metade.
- o que ele faz com você: Hoof Stomp atordoa em área; Double Edge causa dano alto escalando com a Força dele (sem ele morrer disso); Return devolve parte de todo dano físico recebido, o que pesa justo contra um kit de autoataque como o seu.
- o que você faz com ele: Open Wounds corta a cura do Ring of Tarrasque e do Helm of the Dominator em até 50%, que é a base do sustain dele; Feast te cura enquanto ele tenta te segurar.
- itens que viram: Aghanim's Shard dele (29,1 min, reforma: Double Edge agora lentifica heróis e dá Força por stack acumulado) estica a troca a favor dele depois desse ponto.
- como jogar: não troque golpe a golpe sem Open Wounds já aplicado. Use Rage pra ignorar o Hoof Stomp se precisar terminar a troca ou recuar.
- fonte: pro_dados/life_stealer.json; pro_dados/centaur.json; constants_abilities.json (centaur_hoof_stomp, centaur_double_edge, centaur_return, life_stealer_open_wounds); aghs_desc (centaur, shard).

## Contra Jakiro (jakiro)
- placar: 84 vitórias em 170 jogos de pro (49,4%). Amostra grande.
- por que importa: quinto em jogos de pro contra você (170), suporte que controla área e visão e decide boa parte das lutas em grupo mesmo sem brigar 1x1 com você.
- janelas: Jakiro não tem farm de carry (315 de gpm e 8 last hits aos 10 min, bem abaixo do seu); o relevante é o nível de magia dele. Macropyre (ult, liberada no nível 6) cria uma faixa de 10s de dano contínuo (100 a 200 por segundo) que nega território de farm perto da sua Radiance. Ice Path e Dual Breath aparecem desde a lane, então o choque mais perigoso pra você é antes do nível 6, antes de Phase Boots e Feast prontos.
- o que ele faz com você: Macropyre não atravessa resistência mágica, então sua Rage (80% de resistência) reduz bastante o dano, mas ainda queima; Dual Breath reduz sua velocidade de ataque, o que corta o ritmo do seu Feast e Open Wounds.
- o que você faz com ele: ele tem pouquíssima vida e farm; pegando ele isolado, 2-3 autoataques com Feast resolvem antes dele reagir.
- itens que viram: Aghanim's Shard dele libera a Liquid Frost sem gastar mana nem dividir recarga com a Liquid Fire, sustentando o controle de área por mais tempo; sua Rage reduz bastante o dano do Macropyre pela resistência mágica.
- como jogar: evite ficar parado dentro do Macropyre tentando terminar uma wave, o dano por segundo soma rápido mesmo com Rage ativa. Ataque Jakiro fora do alcance das wards dele, ele não aguenta troca direta.
- fonte: pro_dados/life_stealer.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre, jakiro_dual_breath, jakiro_liquid_ice, jakiro_liquid_fire, life_stealer_rage); aghs_desc (jakiro, shard).

## Contra Mars (mars)
- placar: 80 vitórias em 163 jogos de pro (49,1%). Amostra grande.
- por que importa: empatado como sexto mais jogado de pro contra você (163, junto com Hoodwink) e offlaner direto da função 3, briga de lane de verdade contra você no 7.41.
- janelas: Mars tem Blink pronto aos 15,2 min, antes da sua Radiance (16,2). A Spear of Mars (empala contra parede, árvore ou construção) já é perigosa desde o nível 6, e a Arena of Blood (ult, também do nível 6) pode te prender numa arena por 5,5s enquanto lanças batem em você. Depois dos 21-22, com o Aghanim's Shard dele e seu Armlet/Yasha prontos, a troca fica mais sua.
- o que ele faz com você: a Spear te empala numa parede, árvore ou construção perto e atordoa até 2,2s; dentro da Arena of Blood você fica preso pelas paredes de guerreiros, sem conseguir sair andando; Bulwark reduz parte do seu dano físico quando ele vira de frente pra você.
- o que você faz com ele: fora da Arena, Feast e Open Wounds funcionam normal; a Arena bloqueia movimento mas não é um debuff, então Rage não ajuda a sair dela, só blink ou TP ajudam.
- itens que viram: Aghanim's Shard dele (21,5 min) faz a Spear empalar até 2 heróis e deixar rastro de fogo, o que aumenta o risco em luta de grupo; seu Armlet (18,1) ajuda a vencer a troca de dano bruto fora da arena.
- como jogar: cuidado ao lutar perto de parede, árvore ou torre com Mars em alcance de Spear (900 a 1200). Se ele abrir Arena of Blood em cima de você, foque em sair pelo blink ou TP, não em atravessar a parede andando.
- fonte: pro_dados/life_stealer.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_arena_of_blood, mars_bulwark); aghs_desc (mars, scepter/shard).

## Contra Dragon Knight (dragon_knight)
- placar: 83 vitórias em 139 jogos de pro (59,7%). Amostra grande, maior vantagem com volume alto de jogos.
- por que importa: a maior vantagem clara sua entre os confrontos de amostra grande (59,7% em 139 jogos de pro), e os dois disputam a mesma faixa de posição (carry 1/2), inclusive montando o mesmo item de meio-jogo: os dois cravam Armlet.
- janelas: DK tem Blink aos 16,2 e BKB aos 23,3; a Elder Dragon Form libera no nível 6, então ele vira tanque com ataque à distância desde cedo. Até os 16 min, antes da sua Radiance, ele é levemente mais forte em troca direta pela regeneração da Dragon Blood. Dos 16 aos 23, com sua Radiance e Armlet prontos, a troca vira sua, porque Feast te cura mais rápido do que o regen dele sustenta. Depois do BKB dele (23,3), ele passa a ignorar seu Open Wounds por completo.
- o que ele faz com você: Breathe Fire reduz o dano que você causa em até 32% por 11s, direto no seu DPS de Feast e Open Wounds; Dragon Tail atordoa até 2,4s; na Elder Dragon Form nível 3, o ataque dele aplica lentidão por congelamento que atravessa imunidade a debuff, ou seja, passa pela sua Rage.
- o que você faz com ele: Open Wounds reduz a cura da Dragon Blood dele em até 50%, que é justo o que sustenta DK em troca longa; Feast cura mais rápido quanto mais alta a vida máxima dele.
- itens que viram: BKB dele (23,3 min) bloqueia seu Open Wounds a partir desse ponto; sua Radiance (16,2) chega 7 minutos antes, janela boa pra fechar a troca antes do BKB dele ficar pronto.
- como jogar: force a luta antes dos 23 min, de preferência logo depois da sua Radiance. Depois do BKB dele, jogue pelo dano bruto do Feast, não pelo Open Wounds.
- fonte: pro_dados/life_stealer.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_breathe_fire, dragon_knight_elder_dragon_form, dragon_knight_dragon_blood, life_stealer_open_wounds).

## Contra Ursa (ursa)
- placar: 65 vitórias em 125 jogos de pro (52,0%). Amostra grande.
- por que importa: carry pos1 melee com o perfil de 1x1 mais parecido com o seu (os dois vivem de autoataque e sustain), rival direto de farm mesmo quando não dividem lane.
- janelas: Ursa monta Battle Fury aos 13,7 min, quase 2,5 min antes da sua Radiance (16,2): nessa janela ele limpa selva mais rápido que você. O Blink dele sai aos 16,8, perto da sua Radiance; dos 17 aos 24, antes do Aghanim's Shard (26,1) e com o BKB dele só aos 24,4, a troca costuma ser sua, porque Feast cura mais estável que o Overpower dele. Depois do Shard, que faz o Earthshock aplicar 3 Fury Swipes de uma vez, ele vira perigoso de novo em 1x1 prolongado.
- o que ele faz com você: Fury Swipes empilha dano puro a cada ataque seguido no mesmo alvo (até 36 por golpe, atravessa resistência mágica), então quanto mais a troca dura, mais ele acerta; Enrage é dispel forte, remove seu Open Wounds na hora e dá 80% de redução de dano por até 5s.
- o que você faz com ele: Open Wounds lentifica e corta a cura dele, mas o Enrage dele limpa isso instantaneamente ao ativar; Feast cura você conforme ele bate, então troca longa sem o Enrage dele tende a favorecer você.
- itens que viram: o Enrage dele (recarga de 60 a 30s conforme o nível) é o que mais muda o duelo, por remover seu debuff de graça; atacar em rajada curta, sem deixar ele acumular Fury Swipes por mais de 8s, evita o pico de dano dele.
- como jogar: puxe a luta pro início, antes do Battle Fury dele fechar, ou espere o Enrage dele estar em recarga antes de aplicar Open Wounds. Evite trocar ataque por ataque continuamente além de 8s sem pausa.
- fonte: pro_dados/life_stealer.json; pro_dados/ursa.json; constants_abilities.json (ursa_fury_swipes, ursa_enrage, ursa_overpower, life_stealer_open_wounds); aghs_desc (ursa, shard).

## Contra Phantom Assassin (phantom_assassin)
- placar: 33 vitórias em 50 jogos de pro (66,0%). Amostra média, mas maior vantagem percentual da lista.
- por que importa: maior vantagem percentual sua entre os confrontos com amostra de 30+ jogos (66% em 50), e os dois têm o farm quase idêntico (601 de gpm mediano cada), o retrato mais puro de "quem fica forte primeiro" entre dois carries de autoataque.
- janelas: PA fecha Battle Fury aos 14,4 min, quase 2 min antes da sua Radiance, e limpa selva mais rápido nessa janela. Mas o pico de luta dela (Desolator 20,7, BKB 23,5) chega depois da sua Radiance (16,2) e do seu Armlet (18,1), então na maior parte do meio-jogo você já está na frente em dano sustentado.
- o que ela faz com você: Coup de Grace dá crítico garantido de 200 a 400% de dano via Deadly Focus; Blur deixa ela quase invisível fora de alcance curto e esquiva ataques, o que atrapalha direto seu Feast e Open Wounds, já que os dois dependem de acertar o golpe.
- o que você faz com ela: ela tem pouca vida própria no build padrão; Feast mais Open Wounds encerram rápido se você fechar distância antes do Blur dela, e sua Rage ignora o debuff de lentidão do Stifling Dagger.
- itens que viram: Monkey King Bar é a resposta direta ao Blur (ignora a esquiva dela na maioria dos ataques), mas raramente compensa o slot tão cedo; na prática, fechar a troca rápido, antes dela conseguir Blur de novo (recarga 45s), resolve sem precisar do item.
- como jogar: ataque ela fora de alcance de fuga, sem árvore nem espaço pro Phantom Strike dela, e force o 1x1 cedo, antes do Desolator e do BKB dela ficarem prontos.
- fonte: pro_dados/life_stealer.json; pro_dados/phantom_assassin.json; constants_abilities.json (phantom_assassin_coup_de_grace, phantom_assassin_blur, phantom_assassin_stifling_dagger).

## Contra Doom (doom_bringer)
- placar: 18 vitórias em 61 jogos de pro (29,5%). Amostra grande, pior desvantagem da lista.
- por que importa: pior desvantagem sua com amostra grande (29,5% em 61 jogos de pro), o pior resultado de toda a lista. A causa é mecânica: o Doom dele aplica dispel e bloqueia toda cura com um efeito que atravessa imunidade mágica, inclusive a resistência da sua Rage.
- janelas: Doom tem ult desde o nível 6, então o risco começa cedo, bem antes da sua Radiance. O pico dele é o Blink (19,7 min) combinado com Doom pronto; o Aghanim's Shard dele (mediana 18,7 min) chega quase junto do Blink, então a partir desse ponto ele já tem as duas peças pra abrir a troca de uma vez.
- o que ele faz com você: Doom aplica um dispel básico ao acertar (remove sua Rage se já estiver ativa), te silencia por completo (sem Rage, Open Wounds nem Infest) e bloqueia toda cura, inclusive a do Feast, por 12 a 16s enquanto causa de 25 a 66 de dano por segundo. A habilidade atravessa imunidade mágica, então nem Black King Bar segura, e sua Rage, que não é imunidade de verdade, segura ainda menos.
- o que você faz com ele: ele não tem fuga própria cedo; pegando ele isolado antes do Blink (19,7), Feast e Open Wounds derrubam rápido, porque ele tem pouca mobilidade pra sair da troca.
- itens que viram: Linken's Sphere bloqueia o Doom antes dele completar o cast, mas não aparece entre os itens mais comprados por pros na amostra do Life Stealer, então não é algo pra contar no plano. A defesa real é posicional: não ficar isolado no mapa sem visão de Doom depois do nível 6 dele.
- como jogar: jogue perto de aliados ou com visão a partir do nível 6 dele. Se ele acertar o Doom em você, aceite que a Rage não resolve e gaste o tempo recuando ou dando TP, em vez de tentar lutar sem feitiço.
- fonte: pro_dados/life_stealer.json; pro_dados/doom_bringer.json; constants_abilities.json (doom_bringer_doom, life_stealer_rage).

## Contra Alchemist (alchemist)
- placar: 21 vitórias em 59 jogos de pro (35,6%). Amostra grande.
- por que importa: é o exemplo clássico de confronto que não vem de disputa de lane direta, já que os dois raramente se enfrentam de perto (Alchemist costuma ir pra offlane ou mid-farm, você pra safelane), mas são os carries com o motor de farm mais parecido do jogo: os dois fecham Radiance. 35,6% é desvantagem clara em 59 jogos de pro.
- janelas: Alchemist tem o maior gpm da lista inteira (768 de mediana, acima até do seu) e fecha a Radiance dele aos 13,9 min, cerca de 2,3 min antes da sua (16,2). Na corrida de quem fica livre pra farmar sozinho primeiro, ele costuma vencer. Depois dos 22 (Scepter dele aos 22,4, fundido num aliado, e Blink aos 21,4), ele vira ameaça de gank com o Unstable Concoction carregado.
- o que ele faz com você: Unstable Concoction, carregado e combinado com Blink, aplica até 3,2s de stun e 360 de dano de surpresa; Chemical Rage (ult) aplica dispel básico ao ativar, removendo seu Open Wounds na hora, além de dar até 120 de regeneração de vida por segundo no nível máximo.
- o que você faz com ele: Open Wounds reduz a cura dele até a Chemical Rage estar pronta de novo (recarga de 60s); pegando ele sem o combo de stun pronto, Feast resolve rápido porque ele não tem fuga própria cedo.
- itens que viram: a Chemical Rage dele anula seu Open Wounds na hora que ativa, pelo dispel básico; do seu lado, não adianta aplicar o debuff muito antes da luta, melhor esperar o cooldown da Chemical Rage girado ou fechar a troca rápido o bastante pra matar antes dele ativar.
- como jogar: na corrida de farm, priorize fechar sua Radiance rápido e cace ele enquanto ainda não tem Blink (antes dos 21 min). Depois disso, prefira luta de grupo a 1x1, onde o Unstable Concoction dele rende menos.
- fonte: pro_dados/life_stealer.json; pro_dados/alchemist.json; constants_abilities.json (alchemist_chemical_rage, alchemist_unstable_concoction, life_stealer_open_wounds); aghs_desc (alchemist, scepter).

## Contra Morphling (morphling)
- placar: 19 vitórias em 52 jogos de pro (36,5%). Amostra grande.
- por que importa: o outro exemplo citado de carry que raramente divide lane com você, mas que todo jogador de Life Stealer sente no late porque ele estica a vida e vira o duelo de 1x1 mais puro do jogo.
- janelas: Morphling fecha o motor de farm dele cedo, Morbid Mask por volta dos 7,9 min e Vladmir's Offering aos 10,7, bem antes da sua Radiance. O Manta dele (18,4) chega logo depois da sua (16,2), e o Attribute Shift (troca Força/Agilidade) deixa ele decidir, no meio da troca, se quer ficar tanque ou bater mais forte, justo quando você solta Feast e Open Wounds.
- o que ele faz com você: Waveform avança com dano e Adaptive Strike pode atordoar e empurrar; o Attribute Shift pra Força no meio da sua troca aumenta a vida dele na hora, esticando o tempo que ele aguenta seu Feast.
- o que você faz com ele: Open Wounds não é bloqueado por nada do kit base dele (só por BKB, mediana 30,9 min, ou pelo dispel do próprio Manta ao ativar), então antes disso a lentidão e o corte de cura pesam bastante nele, que depende de atributo alto pra tankar.
- itens que viram: o Manta dele (18,4) aplica dispel básico ao ativar e remove seu Open Wounds; antes desse item, ou fora da recarga dele (34s), o debuff gruda. O BKB dele (30,9) é o ponto em que ele passa a ignorar o debuff por completo.
- como jogar: force a troca antes dos 18 min, quando ele ainda não tem Manta pra se livrar do seu Open Wounds. Depois disso, jogue pelo Feast, que atravessa imunidade mágica, em vez de depender do debuff.
- fonte: pro_dados/life_stealer.json; pro_dados/morphling.json; constants_abilities.json (morphling_morph_agi, life_stealer_feast, life_stealer_open_wounds).

## Contra Terrorblade (terrorblade)
- placar: 40 vitórias em 79 jogos de pro (50,6%). Amostra grande.
- por que importa: o rival de late game mais puro da lista, carry contra carry quase sem interação de lane, incluído porque o 7.41 o deixa entre os carries mais jogados em pro contra você mesmo sem convívio direto cedo.
- janelas: Terrorblade farma rápido com Conjure Image desde cedo e fecha Manta aos 17,1, perto da sua Radiance (16,2). O divisor de águas é o Sunder: a partir do nível 6, ele pode trocar de vida com você sempre que estiver com 25 a 35% menos vida que você (dependendo do nível), mesmo perto da morte.
- o que ele faz com você: Sunder troca a vida atual dele pela sua quando ele está abaixo do limiar de vida mínima, o que vira qualquer troca perdida numa vitória instantânea pra ele; Reflection cria uma ilusão que reflete parte do seu dano de volta e te lentifica.
- o que você faz com ele: mantendo sua vida alta (Feast ajuda, curando a cada ataque), o Sunder dele rende menos porque a troca de vida vale menos quanto menor a diferença; Open Wounds reduz a cura dele caso ele tente sustentar com item.
- itens que viram: nenhum item seu bloqueia o Sunder direto, porque não é um feitiço de alvo único convencional; a defesa real é controlar sua própria vida máxima e não entrar em troca prolongada com a vida baixa perto dele.
- como jogar: não force a troca final com a vida abaixo de 50% se ele estiver por perto, é a faixa onde o Sunder dele rende mais. Prefira terminar a luta rápido, antes dele acumular Metamorphosis (nível 6, até 50s de forma à distância) pra te kitar.
- fonte: pro_dados/life_stealer.json; pro_dados/terrorblade.json; constants_abilities.json (terrorblade_sunder, terrorblade_reflection, terrorblade_metamorphosis).

## Contra Luna (luna)
- placar: 70 vitórias em 125 jogos de pro (56,0%). Amostra grande.
- por que importa: carry pos1 ranged com volume de farm parecido com o seu (695 de gpm), um dos carries mais jogados contra você em pro mesmo sem dividir lane com frequência; vantagem clara sua.
- janelas: Luna farma rápido com Moon Glaive desde cedo e fecha Manta aos 17,2, perto da sua Radiance (16,2); a Eclipse (ult) só rende de verdade à noite, chovendo vários raios sobre quem estiver perto dela. Até os 16-17 min, antes da sua Radiance firmar, ela te alcança em gpm; depois disso, seu sustain de combate (Feast, Open Wounds) pesa mais que o DPS simples dela, e ela não tem controle de verdade pra te travar.
- o que ela faz com você: Lucent Beam causa dano direto de uma vez, o suficiente pra abrir qualquer troca; a Eclipse, se você estiver perto dela à noite sem conseguir se afastar, concentra vários raios em você e tira uma fatia grande da sua vida de uma vez.
- o que você faz com ela: ela não tem debuff nem controle pra travar você em troca corpo a corpo; Feast e Open Wounds resolvem rápido se você chegar nela antes da Eclipse estar pronta (recarga de 105s).
- itens que viram: Eye of Skadi dela corta sua cura quando aparece; sua Rage reduz bastante o dano da Eclipse pelos 80% de resistência mágica, o que muda muito o resultado de ficar pego numa Eclipse.
- como jogar: evite ficar parado perto dela à noite sem saber se a ult está disponível; a recarga é alta, então depois de usada ela fica exposta por bastante tempo. Busque o 1x1 direto, ela não tem ferramenta pra fugir nem pra travar você.
- fonte: pro_dados/life_stealer.json; pro_dados/luna.json; constants_abilities.json (luna_eclipse, luna_lucent_beam, life_stealer_rage).

## Contra Templar Assassin (templar_assassin)
- placar: 55 vitórias em 114 jogos de pro (48,2%). Amostra grande, o confronto mais equilibrado da lista.
- por que importa: carry pos1 mais equilibrado da lista (48,2% em 114 jogos, quase 50/50) e o maior xpm (871) de todo o grupo, prova de que farma rápido, inclusive mais que você.
- janelas: TA fecha Desolator aos 14,3 min e Dragon Lance aos 14,2, antes da sua Radiance (16,2): até os 16-17 min ela farma e ataca de mais longe do que você consegue responder, com o alcance extra do Psi Blades maxado. Depois da sua Radiance e do seu Armlet (18,1), a corrida de dano sustentado passa a ser mais sua, mas ela segue perigosa em emboscada por causa do Meld.
- o que ela faz com você: Meld (invisível, bônus de dano de até 200 e redução de até 8 de armadura) emboscada antes de você ver ela chegando; Refraction cria até 6 instâncias que bloqueiam ataques e aumentam o dano do próximo golpe dela, neutralizando vários dos seus autoataques de Feast sem você perceber; Psi Blades é dano físico de respingo que atravessa qualquer imunidade mágica.
- o que você faz com ela: ela tem vida relativamente baixa pro que farma; fechando a troca rápido, antes dela completar o Refraction de novo (recarga 14s) ou sair do Meld, Feast e Open Wounds resolvem.
- itens que viram: o Desolator dela (-6 de armadura) somado ao Meld (-2 a -8) te deixa muito mais vulnerável a dano físico do time dela inteiro, não só dela; do seu lado não há resposta direta de item, a defesa é posicional.
- como jogar: ande com visão (wards ou Observer perto da sua rota de farm) depois que ela tiver Meld. Se ela abrir Meld em cima de você, gaste Rage pra reduzir o burst e tente emendar Open Wounds antes dela recarregar o Refraction.
- fonte: pro_dados/life_stealer.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_meld, templar_assassin_refraction, templar_assassin_psi_blades).

## Contra Slardar (slardar)
- placar: 37 vitórias em 97 jogos de pro (38,1%). Amostra grande, segunda pior desvantagem da lista.
- por que importa: segunda maior desvantagem com amostra grande (38,1% em 97 jogos de pro), offlaner/mid de função 3-2 que divide lane com você com frequência, e um dos poucos heróis com ferramenta pra expor um alvo escondido.
- janelas: Slardar tem Blink pronto aos 13,3 min, bem antes da sua Radiance (16,2); o Aghanim's Shard dele (mediana 17,2, faz a Slithereen Crush também reduzir armadura) sai só um minuto depois da sua Radiance. O pico de iniciação dele é cedo: Slithereen Crush (atordoa e lentifica, recarga de 7s no nível máximo) seguido de Bash of the Deep (a cada 3º ataque) trava você numa sequência de controle barata.
- o que ele faz com você: Corrosive Haze (ult) reduz sua armadura em até 20 e dá visão verdadeira do alvo marcado, o que revela qualquer unidade invisível que ele conseguir atingir; Bash of the Deep atordoa a cada 3 ataques.
- o que você faz com ele: ele não tem cura própria de kit (a Guardian Sprint nova é mobilidade, não sustain), então Feast e Open Wounds aplicados cedo pesam bastante antes dele conseguir fugir.
- itens que viram: a redução de armadura do Shard somada à Corrosive Haze abre caminho pro resto do time dele numa troca de grupo; do seu lado, não há item que bloqueie a Corrosive Haze, porque ela atravessa imunidade mágica.
- como jogar: evite usar Infest pra escapar perto de um Slardar que já está suspeitando de você, a Corrosive Haze pode confirmar e revelar o creep certo. Na troca direta, ataque primeiro: ele depende do Bash acumulado, então matar rápido corta o ciclo dele antes de render.
- fonte: pro_dados/life_stealer.json; pro_dados/slardar.json; constants_abilities.json (slardar_amplify_damage, slardar_bash, slardar_slithereen_crush); aghs_desc (slardar, shard).
