---
id: confrontos-alchemist
heroi: Alchemist
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/alchemist.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/windrunner.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/luna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/life_stealer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ursa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/morphling.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/terrorblade.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/keeper_of_the_light.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/gyrocopter.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Contra Rubick (rubick)
- placar: Alchemist venceu 90 de 163 partidas pro (55,2%). É o oponente que mais aparece na base de confrontos do Alchemist.
- por que importa: maior volume de jogos pro contra Alchemist de toda a base (163), mesmo quase nunca dividindo lane (Rubick é 4/5, Alchemist é 1). O risco real não é a lane, é o Spell Steal.
- janelas: até os 14 min quem dita o ritmo é você puxando camp atrás de camp (Radiance mediana 13,9 min, pro_dados/alchemist.json), enquanto o Rubick sobe Arcane Boots (mediana 10,3 min, pro_dados/rubick.json) e fica de Fade Bolt pra zonear de longe. Dos 14 aos 21 min os dois ainda não têm blink pronto (seu Blink sai perto dos 21,4 min, o dele 21,6 min), então a luta é indireta. Depois disso vira corrida de quem inicia primeiro: seu Unstable Concoction carrega 5 s mas atordoa até 3,2 s a 775 de alcance, contra o Telekinesis dele (próprio ou roubado).
- o que ele faz com você: Spell Steal copia a última magia que você conjurou, lançada em você a até 1000 de distância, e atravessa Black King Bar (bkbpierce: yes, constants_abilities.json). Acid Spray, Unstable Concoction e principalmente Chemical Rage são roubáveis porque são magias ativas, não passivas (constants_abilities.json, campo behavior); se ele rouba a Chemical Rage, ganha seu próprio sustain e BAT contra você.
- o que você faz com ele: Rubick tem vida baixa fixa e nenhum blink inato antes do item (mediana 21,6 min); pegar ele sem Force Staff ou Eul's por perto é quase kill garantido, Unstable Concoction sozinho (até 360 de dano em raio 250) já tira metade da vida dele. Acid Spray reduz a armadura dele em até 6 pontos, o que ajuda o resto do seu time a estourar o resto da vida.
- itens que viram: não existe item que impeça o roubo em si (Spell Steal ignora magic immunity), a defesa real é não conjurar perto dele sem necessidade ou matá-lo antes de abrir a luta. Seu Aghanim's Shard (Berserk Potion) dá dispel básico pro aliado que ele acabou de debuffar com uma magia roubada.
- como jogar: não gaste Unstable Concoction ou Chemical Rage perto de um Rubick livre se não precisar, ele fica rondando pra roubar. Depois que ele gastar o Spell Steal numa magia fraca, é a sua janela, ele fica sem o roubo por 16 a 4 s (cooldown por nível).
- fonte: pro_dados/alchemist.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, alchemist_chemical_rage, alchemist_acid_spray, alchemist_unstable_concoction).

## Contra Hoodwink (hoodwink)
- placar: Alchemist venceu 54 de 102 partidas pro (52,9%). Segundo oponente mais comum da base.
- por que importa: segundo maior volume de jogos pro (102), suporte 4/5 que não briga de lane com o Alchemist mas aparece quase em todo draft por causa do combo de controle Bushwhack + Scurry.
- janelas: Hoodwink sobe Arcane Boots (mediana 12,2 min) e Aghanim's Shard (mediana 23,8 min, melhora o Hunter's Boomerang). Seu Radiance (13,9 min, pro_dados/alchemist.json) já está pronto antes do shard dela; até ali você farma puxando camp enquanto ela zonea com Acorn Shot a distância. Dos 19 aos 24 min, com o shard pronto, ela consegue punir engajamento ruim de longe mesmo sem te acertar o Bushwhack.
- o que ela faz com você: Bushwhack (stun e dano, cooldown de 15 a 12 s conforme o nível, 90 a 120 de mana) te prende parado pro combo do time dela; Scurry dá velocidade, movimento fantasma (atravessa árvores e unidades) e dobra a evasão dela por até 5 s pra fugir ou reposicionar depois do combo, não é invisibilidade (constants_abilities.json, hoodwink_scurry); com o shard, o Hunter's Boomerang volta em arco e ainda amplifica o dano mágico que você recebe.
- o que você faz com ele: Hoodwink tem pouca vida fixa, Acid Spray (25 a 40 de dano por segundo em raio até 500) estoura o sustain dela nas trocas de wave; Unstable Concoction é projétil reto de 775 de alcance, dá pra acertar antes dela conseguir pular pra fora com Scurry se você antecipar.
- itens que viram: seu Black King Bar bloqueia o Bushwhack (stun mágico); seu Aghanim's Shard dá dispel básico se ela te acertar com um debuff antes da luta.
- como jogar: evite ficar parado perto de arbustos sem visão antes dos 10 min, Bushwhack rende gank fácil pro resto do time dela. Depois do seu Blink (21,4 min) e do Black King Bar (25,1 min), ignore a Hoodwink e vá direto no suporte ou carry dela, ela sozinha não seca seu dano.
- fonte: pro_dados/alchemist.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_scurry, hoodwink_sharpshooter).

## Contra Tusk (tusk)
- placar: Alchemist venceu 48 de 98 partidas pro (49,0%, equilibrado). Terceiro oponente mais comum da base.
- por que importa: terceiro maior volume de jogos pro (98), ganker clássico de 4/5 que gira o mapa com Ice Shards e Snowball, ameaça o Alchemist mesmo sem dividir lane.
- janelas: Tusk sobe Blink Dagger por volta dos 19,0 min (pro_dados/tusk.json); antes disso ele ganka a pé com Ice Shards + Snowball. A partir do nível 6, Chemical Rage já te dá sustain pra sobreviver a um gank dele nesse estágio do jogo. Depois dos 19 min os dois têm blink, vira corrida de quem fecha a distância primeiro.
- o que ele faz com você: Ice Shards cria uma parede que te prende se você estiver do lado errado (cooldown de 23 a 14 s); Walrus Kick te acerta em linha com dano fixo de 550 e stun, cooldown de só 12 s; com Aghanim's Scepter o Kick acerta o inimigo mais próximo na direção escolhida e ainda causa dano em área no ponto de impacto.
- o que você faz com ele: seu Unstable Concoction tem alcance maior (775 contra o range curto do Kick) e stun mais longo no nível 4 (até 3,2 s contra o fixo do Kick); se ele errar a abertura, você vira o gank nele. Acid Spray reduz a armadura dele, que é baixa de base.
- itens que viram: Black King Bar seu não bloqueia o Walrus Kick (atravessa imunidade a magia, bkbpierce yes, constants_abilities.json), mas bloqueia o prendimento do Ice Shards; seu Aghanim's Shard dá dispel pra limpar o slow do gelo em cima de você ou de um aliado.
- como jogar: não ande sozinho sem visão nos primeiros 10 min, o gank dele não avisa. Depois do seu Blink (21,4 min) e do Black King Bar (25,1 min), ele perde a iniciativa e vira presa fácil se pegar sozinho.
- fonte: pro_dados/alchemist.json; pro_dados/tusk.json; constants_abilities.json (tusk_walrus_kick, tusk_ice_shards); aghs_desc (Tusk).

## Contra Jakiro (jakiro)
- placar: Alchemist venceu 56 de 92 partidas pro (60,9%). Quinto oponente mais comum da base.
- por que importa: suporte 5 puro, quinto maior volume de jogos pro contra o Alchemist (92). Controla área com Macropyre e Ice Path, mas tem pouca mobilidade, dá pra evitar farmando em rota paralela.
- janelas: Jakiro sobe Arcane Boots por volta de 11,7 min (pro_dados/jakiro.json); não há dado de pro para o momento em que ele fecha o nível 6 (Macropyre), que tem cooldown de 90 a 70 s conforme o nível (constants_abilities.json). Antes dos 14 min ele tenta zonear camp com Dual Breath (cooldown de 10 s, mana crescente); depois do seu Radiance (13,9 min, pro_dados/alchemist.json) você farma mais rápido do que ele consegue zonear.
- o que ele faz com você: Ice Path (stun de 1,25 a 2 s, cooldown de 20 a 11 s, 50 de dano) junto com Dual Breath (slow e dano em cone) te prendem pro combo do time; Macropyre no 3/3 causa até 200 de dano por segundo, dura 10 s de fogo parado no chão, deleta quem fica dentro sem sustain.
- o que você faz com ele: Acid Spray reduz a armadura dele, que tem pouca vida; Unstable Concoction alcança 775 de distância e atordoa antes do Ice Path dele, que tem cooldown bem maior que o seu.
- itens que viram: Black King Bar seu bloqueia o Ice Path e o stun; dentro da Chemical Rage (120 de regen por segundo no nível 18) você atravessa o Macropyre sem morrer.
- como jogar: não force luta dentro da Macropyre sem BKB pronto; puxe o jogo pra farm, Jakiro não acompanha seu GPM depois do Radiance.
- fonte: pro_dados/alchemist.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre, jakiro_ice_path).

## Contra Tiny (tiny)
- placar: Alchemist venceu 47 de 97 partidas pro (48,5%, equilibrado). Carry (posição 1) mais comum contra o Alchemist no pro.
- por que importa: o carry pos1 mais frequente contra o Alchemist na base (97 jogos), mesmo raramente dividindo lane (Tiny costuma ir offlane ou mid). Os dois competem pelo mesmo papel de iniciador físico no meio-jogo.
- janelas: Tiny sobe Echo Sabre por volta de 12,1 min e Black King Bar aos 26,7 min (pro_dados/tiny.json); não há dado de pro para o momento em que ele fecha o nível 6 (Grow). Seu Radiance (13,9 min, pro_dados/alchemist.json) chega bem antes do Black King Bar dele; até lá a vantagem de farm é sua. Dos 16 aos 27 min os dois já têm blink (o seu aos 21,4 min, o dele aos 15,9 min, pro_dados/tiny.json) e os BKBs saem perto um do outro (o seu aos 25,1 min, o dele aos 26,7 min), então vira quem acerta o combo primeiro.
- o que ele faz com você: Avalanche (stun curto em área) seguido de Toss te joga pra cima do time dele, combo clássico de abertura; Grow aumenta o dano dele e o dano das árvores jogadas, o que estica o poke dele à distância.
- o que você faz com ele: Unstable Concoction tem raio de 250, maior que o alcance de melee do Tiny, dá pra abrir distância depois de atordoar; Corrosive Weaponry reduz o dano base de ataque dele a cada acerto seu, enfraquece o burst de auto-ataque que vem depois do Avalanche+Toss. Acid Spray reduz a armadura dele.
- itens que viram: Black King Bar seu anula o combo Avalanche + Toss (os dois são mágicos); Blink Dagger seu iguala a mobilidade pra não ser pego isolado.
- como jogar: não dê visão solo antes do seu Blink (21,4 min) e do seu Black King Bar (25,1 min); depois disso, iniciar nele compensa mais que esperar ele iniciar em você, o combo dele depende de pegar alguém parado.
- fonte: pro_dados/alchemist.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_grow).

## Contra Shadow Fiend (nevermore)
- placar: Alchemist venceu 55 de 91 partidas pro (60,4%). GPM médio de 658 no pro (pro_dados/nevermore.json).
- por que importa: outro pos1/mid que raramente divide lane com o Alchemist mas compete pelo mesmo papel de right-click físico de fim de jogo. Alto volume de jogos (91) e GPM alto entre os carries da lista (658, atrás só de Terrorblade e Luna).
- janelas: Shadow Fiend sobe Mask of Madness por volta de 10,2 min, Hurricane Pike aos 23,0 min, Black King Bar aos 25,2 min e Daedalus (greater_crit) aos 28,3 min (pro_dados/nevermore.json); não há dado de pro para Manta Style nesse herói, item incomum nele. Seu Radiance (13,9 min, pro_dados/alchemist.json) chega bem antes do Hurricane Pike dele; até lá você farma e zonea mais rápido, enquanto ele ainda está montando o kit. Dos 16 aos 26 min ele fica perigoso à distância com Shadowraze; seu Black King Bar (25,1 min) chega quase junto do dele (25,2 min), então essa troca é decidida por quem inicia primeiro.
- o que ele faz com você: Shadowraze (280 de dano no nível 7, cooldown de só 9 s, três direções diferentes) zonea seu farm sem nem te ver; Requiem of Souls (ultimate, cooldown 120 a 100 s, até 3 ondas) te executa à distância se você estiver com a vida baixa, sem precisar de visão direta.
- o que você faz com ele: Unstable Concoction (stun de até 3,2 s) encerra o combo dele antes do Requiem carregar de verdade; Acid Spray reduz a armadura baixa dele, que depende de ficar vivo pra bater.
- itens que viram: seu Black King Bar bloqueia o Requiem (dano mágico); Frenzy é buff que ele usa em si mesmo e Dark Lord é aura passiva, nenhum dos dois é debuff que dá pra tirar com dispel.
- como jogar: antes do seu BKB, não fique parado nas três direções possíveis do Shadowraze dele; depois do BKB, force a luta rápido, antes dele fechar o Daedalus (28,3 min, pro_dados/nevermore.json) que dobra o dano físico dele.
- fonte: pro_dados/alchemist.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, nevermore_frenzy, nevermore_dark_lord); aghs_desc (Shadow Fiend).

## Contra Windranger (windrunner)
- placar: Alchemist venceu 40 de 71 partidas pro (56,3%). Carry físico de farm rápido mais comum depois de Tiny e Shadow Fiend.
- por que importa: no heroes.json ela carrega os papéis de Carry, Support, Disabler, Escape e Nuker, ou seja, entra tanto como carry físico de farm rápido (492 de GPM médio, pro_dados/windrunner.json) quanto como suporte roam. Entra na lista pelo volume de jogos (71) e por competir pelo mesmo espaço de dano físico rápido que o Alchemist.
- janelas: Windranger fecha Maelstrom por volta de 13,4 min e Hyperstone aos 17,4 min (pro_dados/windrunner.json). Seu Radiance (13,9 min, pro_dados/alchemist.json) sai quase junto do Maelstrom dela; dos 17 aos 24 min ela ataca rápido fisicamente com o Hyperstone pronto e some com Windrun quando a luta vira contra ela. Seu Black King Bar (25,1 min) chega quase junto do dela (24,4 min), diferença pequena mas real a favor dela.
- o que ela faz com você: Shackleshot prende duas unidades (ou você e uma árvore) com stun de 1,75 a 3,25 s, cooldown de 16 a 10 s, abre o combo do time dela; Powershot atravessa tudo em linha reta com dano alto; Windrun dá evasão total aos ataques básicos por 3 a 6 s, ela foge de troca de auto-ataque mas não de magia.
- o que você faz com ele: Unstable Concoction não é esquivável pelo Windrun porque não é ataque básico, acerta ela mesmo durante a evasão; Acid Spray reduz a armadura dela, que é baixa de base.
- itens que viram: Black King Bar seu bloqueia o Shackleshot (stun mágico); contra o Windrun ativo, prefira nuke ao invés de auto-ataque, ela evade 100% dos ataques básicos durante a janela.
- como jogar: não ande perto de árvores sozinho antes do seu BKB, Shackleshot com árvore é stun instantâneo sem telegraph; depois do BKB, force a luta antes dela fechar o Hyperstone.
- fonte: pro_dados/alchemist.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_windrun); heroes.json (roles).

## Contra Luna (luna)
- placar: Alchemist venceu 27 de 65 partidas pro (41,5%). Segundo pior confronto entre os carries pos1 da lista com 30 ou mais jogos, atrás só do Terrorblade (33,3%).
- por que importa: mesma posição (1), confronto perdido com bom volume de jogos entre os carries pos1 (65) e o motivo é visível no kit: ela farma mais rápido nas lanes com Moon Glaives e tem uma das janelas de 1x1 mais fortes do jogo entre os 18 e 24 min.
- janelas: Luna sobe Mask of Madness aos 10,0 min, Manta Style aos 17,2 min e Butterfly aos 26,1 min (pro_dados/luna.json); não há dado de pro para o momento em que ela fecha a Eclipse no nível 18. Seu Radiance (13,9 min, pro_dados/alchemist.json) ainda chega antes do Manta dela, mas o Moon Glaives dela recupera a diferença de farm rápido. Depois do Manta dela (17,2 min) ela ganha o 1x1: Lucent Beam abre, Moon Glaives multiplicam em grupo, e a Eclipse pesa cada vez mais conforme ela sobe de nível. Depois do seu Assault Cuirass (30,0 min, pro_dados/alchemist.json) e da Chemical Rage 3/3 (120 de regen por segundo no nível 18), seu sustain segura melhor o Eclipse dela.
- o que ela faz com você: Lucent Beam (0,6 s de stun, cooldown de 9 a 6 s, dano crescente por nível) inicia a troca; Moon Glaives acertam alvos próximos ao alvo principal, multiplicando o dano dela em grupo; Eclipse (ultimate) chove raios em área e pode te matar sozinho se você ficar parado nela.
- o que você faz com ele: Corrosive Weaponry reduz o dano base de ataque dela, que depende 100% de auto-ataque pra valer o pick; Acid Spray reduz a armadura dela, que é baixa fora de item.
- itens que viram: Black King Bar bloqueia Lucent Beam e Eclipse (ambos mágicos); Eye of Skadi reduz a restauração de vida dela em 50% (restoration_reduction, items.json), cortando o sustain se ela comprar lifesteal pra sustentar a troca.
- como jogar: evite lutar sozinho entre os 14 e os 24 min, é a janela dela; puxe a luta pra depois do seu Assault Cuirass, aí seu sustain em grupo compensa o Eclipse.
- fonte: pro_dados/alchemist.json; pro_dados/luna.json; constants_abilities.json (luna_eclipse, luna_lucent_beam); items.json (skadi, restoration_reduction).

## Contra Lifestealer (life_stealer)
- placar: Alchemist venceu 38 de 59 partidas pro (64,4%).
- por que importa: o espelho mais direto da lista: os dois constroem Radiance no pro (o seu cerca de 2 min antes do dele, pro_dados/alchemist.json; pro_dados/life_stealer.json) e competem pelo mesmo papel de carry sustain que farma rápido e força troca prolongada.
- janelas: Lifestealer sobe Phase Boots aos 6,0 min, Radiance aos 16,2 min, Armlet aos 18,1 min e Aghanim's Scepter aos 29,9 min (pro_dados/life_stealer.json); não há dado de pro para o momento em que ele fecha o nível 6 (Infest). Seu Radiance (13,9 min, pro_dados/alchemist.json) chega cerca de 2,3 minutos antes do dele, vantagem pequena mas real de farm. Dos 18 aos 27 min ele vira o 1x1 com Armlet (alterna ligado, dá dano e regen) e Open Wounds, que sangra e aumenta o dano físico que você recebe.
- o que ele faz com você: Rage dá imunidade a debuff e 80% de resistência mágica por 3 a 6 s, cooldown de 20 a 17 s (constants_abilities.json, life_stealer_rage; não reflete magia, nenhum efeito de reflexo no kit), anula o stun do seu Unstable Concoction e corta boa parte do dano da sua Acid Spray durante a janela; Open Wounds (7 s de sangramento) deixa o time dele te puxar de longe; Feast morde uma porcentagem da sua vida atual, perigoso justo quando você está no topo de vida da Chemical Rage.
- o que você faz com ele: ele não tem disable nenhum, então pegando ele fora da janela de Rage (até 20 s de cooldown no nível 1), seu stun de 3,2 s praticamente garante a troca; Acid Spray reduz a armadura dele, que é baixa.
- itens que viram: Rage dele dá imunidade a debuff e 80% de resistência mágica (não é imunidade a magia completa), Black King Bar seu não fura isso, o certo é esperar o cooldown cair ou focar com dano físico puro; Eye of Skadi reduz a restauração de vida dele em 50% (restoration_reduction, items.json), cortando o sustain do Feast e do Rage.
- como jogar: ataque quando o ícone do Rage estiver de cooldown, nunca gaste Unstable Concoction nele durante o Rage, é magia jogada fora.
- fonte: pro_dados/alchemist.json; pro_dados/life_stealer.json; constants_abilities.json (life_stealer_rage, life_stealer_open_wounds); items.json (skadi, restoration_reduction).

## Contra Ursa (ursa)
- placar: Alchemist venceu 28 de 43 partidas pro (65,1%).
- por que importa: outro pos1 clássico de farm rápido e solo Roshan, os dois raramente dividem lane mas competem pelo papel de "quem fecha o jogo sozinho" e pelo controle do Roshan.
- janelas: Ursa fecha Battlefury por volta de 13,7 min (pro_dados/ursa.json), Blink Dagger aos 16,8 min, Basher aos 22,5 min (vira Abyssal Blade perto de 32,9 min) e Aghanim's Shard aos 26,1 min. Seu Radiance (13,9 min, pro_dados/alchemist.json) sai quase junto do Battlefury dele; até os 16 min nenhum dos dois quer 1x1 isolado, é corrida de farm. Dos 16 aos 24 min, com Enrage pronto, ele consegue vencer troca 1x1 se te pegar sozinho; depois do seu Black King Bar (25,1 min, pro_dados/alchemist.json) você anula o Overpower dele numa troca justa.
- o que ele faz com você: Overpower dá +400% de velocidade de ataque e resistência a slow por 3 a 6 ataques seguidos (constants_abilities.json, ursa_overpower; não existe acerto garantido nessa habilidade); Fury Swipes é quem empilha o dano, +12 a +36 por ataque consecutivo no mesmo alvo, perdido se ele não te acertar de novo em 8 s, e é essa combinação que te deleta em poucos segundos se você ficar parado; Enrage reduz o dano recebido e, com Aghanim's Scepter (aghs_desc, Ursa), pode ser usado mesmo enquanto atordoado.
- o que você faz com ele: Acid Spray reduz a armadura dele; Unstable Concoction (raio de 250, stun de até 3,2 s) interrompe os ataques dele antes que o Fury Swipes empilhe o dano.
- itens que viram: Black King Bar seu não bloqueia Overpower, Fury Swipes nem Enrage, são buffs dele e não disables mágicos; a resposta é controle e dano antes dele fechar distância. Blink Dagger seu iguala a mobilidade dele pra abrir vantagem de posição.
- como jogar: não aceite 1x1 parado contra ele, a dupla Overpower + Fury Swipes ganha troca prolongada; use Unstable Concoction assim que ele começar a acumular ataques, cada acerto a menos nele é um stack de Fury Swipes a menos em você.
- fonte: pro_dados/alchemist.json; pro_dados/ursa.json; constants_abilities.json (ursa_overpower, ursa_enrage); aghs_desc (Ursa).

## Contra Morphling (morphling)
- placar: Alchemist venceu 22 de 31 partidas pro (71,0%). Melhor matchup registrado entre os carries pos1 da lista com 30 jogos ou mais.
- por que importa: os dois são carries pos1 que raramente dividem lane, mas o Alchemist vence 71% das partidas pro da amostra, e o motivo mecânico está no kit: Morphling depende de autoataque sustentado pra valer o pick, e Corrosive Weaponry junto com Acid Spray corta exatamente isso.
- janelas: Morphling fecha Power Treads numa mediana de 6,0 min, Vladmir's Offering aos 10,7 min, Manta Style aos 18,4 min e Black King Bar tardio, mediana de 30,9 min (pro_dados/morphling.json); não há dado de pro para o momento em que ele fecha o nível 7 (Waveform 4/4) nem o nível 18 (Morph 3/3). Seu Radiance (13,9 min, pro_dados/alchemist.json) chega cerca de 4,5 minutos antes do Manta dele; até lá você farma mais rápido e com mais segurança, Morphling é frágil sem itens. Dos 18 aos 25 min ele ganha mobilidade com Manta e Waveform (cooldown de 12 s no 4/4), mas continua dependendo de autoataque pra fazer dano de verdade.
- o que ele faz com você: Waveform atravessa em linha reta com dano, Morphling fica invulnerável durante a dash (constants_abilities.json), usado tanto pra engajar quanto pra fugir; Adaptive Strike (4/4, cooldown de 8 s) empurra e causa dano à distância; Replicate cria uma cópia de um herói, raro afetar diretamente um duelo 1x1.
- o que você faz com ele: Corrosive Weaponry (até 16 stacks, 4% de slow e 4% de redução do dano base por stack no nível máximo) destrói a dependência dele em autoataque; Acid Spray reduz a armadura dele, que é baixa fora da Attribute Shift maxada em força. Unstable Concoction (raio 250) acerta mesmo durante o Waveform, que é um dash reto e previsível.
- itens que viram: seu Black King Bar (25,1 min, pro_dados/alchemist.json) chega quase 6 minutos antes do dele (mediana de 30,9 min, pro_dados/morphling.json), janela de força imune ao Adaptive Strike (dano mágico).
- como jogar: force a luta antes dos 18 min, antes do Manta dele estar pronto; depois disso, ataque enquanto ele ainda não tem BKB (só fecha perto dos 31 min no pro), seu stun garante o combo.
- fonte: pro_dados/alchemist.json; pro_dados/morphling.json; constants_abilities.json (morphling_waveform, morphling_adaptive_strike_agi, alchemist_corrosive_weaponry).

## Contra Terrorblade (terrorblade)
- placar: Alchemist perdeu a maioria, 11 de 33 partidas pro vencidas (33,3%). Um dos dois piores confrontos da lista com 30 jogos ou mais.
- por que importa: mesmo papel de carry físico que escala pra hard-carry, mas a Metamorfose dele neutraliza o plano de jogo físico do Alchemist justamente na janela em que o Alchemist normalmente domina.
- janelas: Terrorblade fecha Power Treads aos 5,8 min, Aghanim's Shard aos 17,4 min (Demon Zeal) e Dragon Lance aos 19,6 min (pro_dados/terrorblade.json); Eye of Skadi aparece numa mediana de 28,2 min. Não há dado de pro para o momento em que ele fecha Black King Bar nesse confronto, item pouco comum nessa amostra. Seu Radiance (13,9 min, pro_dados/alchemist.json) chega antes do Shard dele, mas o Demon Zeal (buff de velocidade de movimento, regen de vida e velocidade de ataque pra ele e as ilusões, aghs_desc) neutraliza sua vantagem de farm cedo. Dos 20 aos 30 min, Metamorphosis (forma à distância, +20 a +80 de dano) vira qualquer troca a favor dele, independentemente do seu Black King Bar.
- o que ele faz com você: Sunder troca a vida dele pela sua (cooldown de 110 a 40 s), anula completamente o dano que você acumulou numa troca trocando a vida baixa dele pela sua alta; Metamorphosis vira ele uma unidade à distância com dano e ataque maiores, foge do seu alcance de melee.
- o que você faz com ele: Unstable Concoction tem 775 de alcance e acerta ele mesmo em Metamorfose à distância; Acid Spray reduz a armadura dele; Corrosive Weaponry reduz o dano base dele, mas seus ataques físicos custam mais pra conectar nele à distância.
- itens que viram: Eye of Skadi corta o sustain dele e ainda lentifica; Nullifier estoura qualquer Ghost ou Force Staff de fuga depois do Sunder. Sunder no nível 1 tem 110 s de cooldown, no nível 3 cai pra 40 s, então olhar o cooldown dele antes de forçar troca prolongada muda o resultado da luta.
- como jogar: não entre numa troca prolongada sem abater ele rápido, o Sunder desfaz seu progresso de dano. Priorize ele fora da Metamorfose (antes do nível 6) ou espere o Sunder estar de cooldown pra forçar.
- fonte: pro_dados/alchemist.json; pro_dados/terrorblade.json; constants_abilities.json (terrorblade_metamorphosis, terrorblade_sunder); aghs_desc (Terrorblade).

## Contra Keeper of the Light (keeper_of_the_light)
- placar: Alchemist perdeu a maioria, 11 de 36 partidas pro vencidas (30,6%). Pior confronto de toda a base de Alchemist no pro.
- por que importa: pior matchup registrado entre todos os heróis com 30 ou mais jogos, apesar de raramente dividir lane com o Alchemist (no heroes.json seus papéis são Support, Nuker e Disabler, não carry de lane). O problema não é o 1x1, é controle de mapa.
- janelas: Keeper of the Light sobe Travel Boots por volta de 14,8 min (incomum pra um suporte, mostra que ele farma puxando lane rápido) e Holy Locket aos 15,3 min (pro_dados/keeper_of_the_light.json). Não existe uma janela em que ele te ameace de perto; o problema é constante desde a lane: Illuminate (cooldown de só 13 s, raio 400) zonea sua jungle o jogo inteiro, e assim que ele pega o ultimate (Spirit Form), ele aparece em qualquer lugar do mapa pra punir seu farm solo.
- o que ele faz com você: Illuminate (largura 400, até 500 de dano no 4/4) detona o camp que você está limpando a qualquer momento, sem telegraph; Radiant Bind reduz a resistência mágica e lentifica por 6 s, o slow cresce quanto mais você se move, não é raiz nem stun; Spirit Form estende o alcance de tudo isso pro mapa inteiro, ele não precisa estar perto pra punir.
- o que você faz com ele: Acid Spray reduz a armadura dele, mas o problema real é de posicionamento e visão, não de dano; sua vantagem é o sustain da Chemical Rage pra sobreviver ao poke de longe enquanto continua farmando.
- itens que viram: Magic Wand ou Magic Stick absorve o chip damage do Illuminate nas trocas de farm; seu Black King Bar ajuda pouco aqui, ele raramente entra em alcance de melee pra você furar com imunidade.
- como jogar: varie a rota de farm, não repita o mesmo camp no mesmo minuto toda vez. Mantenha visão de ward nas rotas de jungle pra ver o Spirit Form chegando antes do Illuminate acertar.
- fonte: pro_dados/alchemist.json; pro_dados/keeper_of_the_light.json; constants_abilities.json (keeper_of_the_light_illuminate, keeper_of_the_light_radiant_bind, keeper_of_the_light_spirit_form); heroes.json (roles).

## Contra Gyrocopter (gyrocopter)
- placar: Alchemist venceu 23 de 34 partidas pro (67,6%).
- por que importa: carry físico popular no pro mesmo sem lane em comum, bom contraste porque ele costuma rushar item de time (Aghanim's Scepter cedo) em vez de dano puro, e o kit do Alchemist de redução de armadura e dano base neutraliza o DPS dele.
- janelas: Gyrocopter fecha Aghanim's Scepter numa mediana de 18,5 min (pro_dados/gyrocopter.json), um rush incomum que mostra a meta de usar o Side Gunner cedo pra empurrar lane. Black King Bar sai por volta de 24,6 min e Satanic perto de 30,7 min. Seu Radiance (13,9 min, pro_dados/alchemist.json) chega bem antes do Scepter dele; até os 18 min você farma mais rápido e pressiona mais dano em área (Acid Spray junto com o Radiance) do que o Flak Cannon dele sozinho, que tem cooldown de 26 a 20 s.
- o que ele faz com você: Flak Cannon acerta todo mundo num raio de 1250, perigoso em grupo, não no 1x1; Rocket Barrage (não é canalizado, ele continua livre pra andar e atacar, cooldown de 7 a 5,5 s) soma dano alto se você ficar perto por tempo demais; Homing Missile persegue e atordoa no impacto à distância, o Shard faz o míssil disparar o Rocket Barrage sozinho ao acertar (constants_abilities.json, gyrocopter_homing_missile; aghs_desc, Gyrocopter; não é silêncio).
- o que você faz com ele: Corrosive Weaponry reduz o dano base de ataque dele; Acid Spray reduz a armadura dele.
- itens que viram: Unstable Concoction atordoa ele antes dele chegar perto o bastante pro Rocket Barrage acertar; Black King Bar seu não segura o Flak Cannon dele (dano físico, atravessa imunidade a magia, bkbpierce yes), a resposta é abrir distância, não imunidade.
- como jogar: não fique parado perto dele no alcance do Rocket Barrage (raio 400), ele continua se movendo e atacando durante o efeito; depois do seu Blink (21,4 min) e do Black King Bar (25,1 min), force a luta antes do Side Gunner dele render o Scepter completo.
- fonte: pro_dados/alchemist.json; pro_dados/gyrocopter.json; constants_abilities.json (gyrocopter_flak_cannon, gyrocopter_rocket_barrage, gyrocopter_homing_missile); aghs_desc (Gyrocopter).
