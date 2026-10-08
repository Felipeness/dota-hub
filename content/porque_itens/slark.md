---
id: porque-itens-slark
titulo: "Por que cada item: Slark"
heroi: Slark
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/slark.json
- C:/Users/felip/Desktop/dota-imortal/work/hero_slark.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- https://liquipedia.net/dota2/Slark
- https://liquipedia.net/dota2/Aghanim%27s_Shard
- https://liquipedia.net/dota2/Diffusal_Blade_2
- https://liquipedia.net/dota2/Disperser
- https://dotacoach.gg/en/items/diffusal-blade
---

## Magic Wand (magic_wand)
- porque: Cargas rápidas de vida e mana sustentam o combo Pounce + Dark Pact antes do nível 6, quando a mana é curta.
- detalhe: Custa 460, carrega com feitiço inimigo visível a 1.200 de raio (20 cargas de 15 de vida/mana, +3 em tudo). Pros fecham em mediana 4:00 (58 de 70 jogos pro). Use no pico de dano da troca, não de vida cheia: ele é a reserva de mana do combo Pounce (75) + Dark Pact (65) + Shiv (25 a 40), que soma mais que o pool de ~380 de mana do nível 6.
- combo: Junto com Faerie Fire e Tango, cobre o combo de troca sem depender da regen natural (0,8 de mana por segundo no early).
- fonte: dota-hub/slark.json (guia.itens_core, guia.lane.dicas); OpenDota items.json (magic_wand)

## Power Treads (power_treads)
- porque: É o maior spike de lane do Slark. pros com Treads até 5:12 venceram 79% dos jogos, e depois de 6:48 só 19%.
- detalhe: Monta em 1.400 (Boots + Gloves of Haste + Boots of Elvenskin) e dá +25 de velocidade de ataque, +55 de velocidade pra corpo a corpo e +10 no atributo trocado; em Agilidade isso vira dano e AS direto. Mediana pro: 6:00. O toggle pra Inteligência é reserva de mana de emergência fora de combate, não o padrão.
- combo: Com Dark Pact 3/4 (nível 5) e Treads prontos, o pequeno do pull cai em ~11 s de luta.
- fonte: dota-hub/slark.json (guia.itens_core, power_spikes); OpenDota items.json (power_treads)

## Diffusal Blade (diffusal_blade)
- porque: +10 de Inteligência destrava o spam de Dark Pact, e o Inhibit ativo rouba a velocidade de quem você acabou de prender.
- detalhe: Custa 2.500 (Blade of Alacrity + Robe of the Magi + 1.050), dá +15 de Agilidade e +10 de Inteligência (120 de mana, +0,5 de regen), queima 40 de mana por golpe (1 de dano por mana queimada) e o ativo Inhibit: slow de 4 s em 600 de alcance, recarga 15 s, 25 de mana. É dispelável e não é mais um purge no alvo: a versão com purge saiu do Diffusal Blade há anos (virou Diffusal Blade 2, hoje removido) e esse dispel mudou de endereço pro Suppress do Disperser. Pros fecham em mediana 13:3 min; até 11:30 foram 9 vitórias em 11.
- combo: Os 120 de mana extra fecham o combo Pounce + Dark Pact + Shiv sem precisar do Soul Ring até o meio do jogo; o Inhibit soma à prisão do Pounce pra garantir que o alvo não escape antes de morrer.
- fonte: dota-hub/slark.json (guia.itens_core); OpenDota items.json (diffusal_blade); https://liquipedia.net/dota2/Diffusal_Blade_2; https://dotacoach.gg/en/items/diffusal-blade

## Mage Slayer (mage_slayer)
- porque: +20% de resistência mágica e um debuff que corta 40% do dano mágico do alvo por 3 s, item opcional pago só quando o time inimigo é de magia.
- detalhe: Custa 3.100, dá +15 de dano, +20% de resistência mágica, +6 de regen de vida e +2,5 de mana; cada ataque aplica por 3 s um debuff de 40 de dano físico por segundo e 40% menos dano de magia no alvo (que também conta como DPS extra no farm). Pros fecham em mediana 14:3 min, com 49% de vitória nas compras contra 48% sem, ou seja, é opcional, não um spike forte como o Diffusal.
- fonte: dota-hub/slark.json (guia.itens_core); OpenDota items.json (mage_slayer)

## Aghanim's Scepter (ultimate_scepter)
- porque: Dá 2 cargas de Pounce com 900 de alcance, duas prisões em sequência sem esperar os 12 a 24 s de recarga normal.
- detalhe: Custa 4.200, dá +10 em tudo e +175 de vida/mana; o Pounce passa a restaurar carga em 12 s em vez de ter recarga única, e o alcance do salto sobe de 700 pra 900. A Liquipedia confirma: o upgrade "increases leap distance, and replaces its cooldown with a charge restore time". Pros fecham em mediana 22:2 min; até 19:30 foram 6 de 6.
- combo: 2 cargas dá pra perseguir quem tem Blink Dagger ou dash em dois saltos seguidos, sem precisar guardar o segundo Pounce só pra fuga.
- fonte: dota-hub/slark.json (guia.itens_core, power_spikes); OpenDota items.json (ultimate_scepter); OpenDota constants_abilities.json (slark_pounce); https://liquipedia.net/dota2/Slark

## Aghanim's Shard (aghanims_shard)
- porque: Dá Depth Shroud, uma área que esconde você e os aliados dentro como se estivessem no seu Shadow Dance.
- detalhe: Custa 1.400; cria uma nuvem de 225 de raio por 2 s (75 de mana, recarga 75 s, alcance 400) que aplica o efeito do Shadow Dance do seu nível a quem estiver dentro. A Liquipedia confirma o texto: "all allied units within the radius are affected by Shadow Dance of its corresponding level". Pros fecham em mediana 31:4 min.
- combo: Lance antes de entrar numa luta ou de fugir em grupo: o time ganha a invisibilidade e a regen do Shadow Dance sem precisar ficar perto de você o jogo todo.
- fonte: dota-hub/slark.json (guia.itens_core); OpenDota constants_abilities.json (slark_depth_shroud); https://liquipedia.net/dota2/Aghanim%27s_Shard; https://liquipedia.net/dota2/Slark

## Soul Ring (soul_ring)
- porque: Converte vida em mana pra rodar camps com o Dark Pact sem esvaziar o pool de mana de combate.
- detalhe: Custa 805, dá +6 de força e +2 de armadura; consome 170 de vida pra ganhar 170 de mana por 10 s (recarga 25 s; a mana não usada se perde). Nos 7 jogos pro que compraram, o Slark matou 4,25 neutros por minuto contra 2,51 dos outros 63.
- combo: Soul Ring + Dark Pact é o motor da volta de jungle; sem ele, o pool de mana aos 9:30 dura só 1,3 volta longa de 6 camps.
- fonte: dota-hub/slark.json (guia.itens_situacionais, guia.condicao_para_farmar); OpenDota items.json (soul_ring)

## Infused Raindrops (infused_raindrop)
- porque: Bloqueia o primeiro nuke da lane e devolve o dano em mana, sem gastar slot de verdade.
- detalhe: Custa 225, dá +0,8 de regen de mana e bloqueia até 120 de dano mágico por carga em instâncias de dano acima de 75 (6 cargas, recarga 7 s). 21 dos 70 pros compram, mediana aos 4,7 min.
- contra: Offlaner ou suporte de magia na sua lane (ex. Dark Willow, Grimstroke, Lich): o primeiro nuke deles vira mana em vez de vida perdida.
- fonte: dota-hub/slark.json (guia.itens_situacionais); OpenDota items.json (infused_raindrop)

## Wraith Band (wraith_band)
- porque: +5 de Agilidade e +6 de AS por 505 de ouro, comprado antes do Magic Wand pra chegar mais rápido no Treads.
- detalhe: Dá +5 de Agilidade, +6 de AS e +1,75 de armadura; a alternativa é o Bracer (+50 de vida), se a lane estiver mais dura e faltar fôlego. D2PT: 10,7% e 16,3% das builds, aos 2,8 min.
- fonte: dota-hub/slark.json (guia.itens_situacionais); OpenDota items.json (wraith_band, bracer)

## Black King Bar (black_king_bar)
- porque: Bloqueia o disable de alvo único que o Dark Pact não resolve a tempo, antes de você entrar na luta.
- detalhe: Custa 4.050, dá +10 de força e +24 de dano; 9/8/7 s de imunidade a magia (não empilha com outro BKB). Pros: 26 de 70 jogos, mediana 28:9 min.
- contra: Disruptor (Static Storm e Glimpse) e Night Stalker (Void): lockdown de alvo único que o Dark Pact não resolve, porque ele dispela o que já está em você, não bloqueia o que vem a seguir. Segundo a pesquisa local, o Black Hole do Enigma atravessa o BKB; contra ele a resposta é não ficar perto do Enigma quando o combo dele estiver pronto, não comprar BKB achando que resolve.
- fonte: dota-hub/slark.json (guia.itens_situacionais); OpenDota items.json (black_king_bar)

## Shadow Blade (invis_sword)
- porque: Reentra invisível pra pegar quem fugiu do Pounce; o upgrade Silver Edge ainda desliga a passiva do alvo no primeiro golpe.
- detalhe: Shadow Blade (3.250): 17 s de invisibilidade, +175 de dano bônus no ataque que termina o windwalk, +25 de dano e +35 de AS fixos. Silver Edge (5.700, +70 de dano e +35 de AS): o ataque que sai da invisibilidade dá 300 de dano bônus e desliga as passivas do alvo por 5 s. Pros: Shadow Blade em 22 de 70 jogos (mediana 25:2 min), Silver Edge em 14 de 70 (29:9 min).
- contra: Alvos que vivem de passiva (evasão, roubo de vida passivo, auto-buff): o Silver Edge desliga isso por 5 s no primeiro golpe que sai da invisibilidade.
- combo: Pra quem já tem Shadow Dance, só compensa se precisar de duas fugas ao mesmo tempo ou do break do Silver Edge.
- fonte: dota-hub/slark.json (guia.itens_situacionais); OpenDota items.json (invis_sword, silver_edge)

## Blink Dagger (blink)
- porque: Fecha a distância quando o Pounce está em recarga e o inimigo já tem o próprio blink ou dash de fuga.
- detalhe: Custa 2.250, 1.200 de alcance, 3 s de recarga de dano. O Scepter já dá 2 cargas de Pounce, então o Blink é reserva extra, não substituto.
- fonte: dota-hub/slark.json (guia.itens_situacionais); OpenDota items.json (blink)

## Echo Sabre (echo_sabre)
- porque: Dois golpes seguidos com 100% de slow no primeiro, no lugar do Mage Slayer contra time sem dano mágico.
- detalhe: Custa 2.700, dá +20 de dano, +15 de força e +1,75 de regen de mana (ajuda o spam de Dark Pact); a passiva Echo Strike dobra o ataque com 100% de slow por 0,8 s no primeiro golpe. Pros: 4 de 70 jogos, mediana 16:6 min.
- fonte: dota-hub/slark.json (guia.itens_situacionais); OpenDota items.json (echo_sabre)

## Eye of Skadi (skadi)
- porque: +35 em tudo e um slow de 25% a 50% que também corta a cura do alvo pela metade.
- detalhe: Custa 5.900; a passiva Cold Attack reduz 25% (corpo a corpo) ou 50% (à distância) da velocidade do alvo, -20% de velocidade de ataque e -50% de restauração de vida por 3 s. D2PT: 26,5% das builds, aos 35 min.
- contra: Times de cura ou regen pesado: o corte de 50% na restauração reduz o que o alvo recupera durante a luta.
- fonte: dota-hub/slark.json (guia.itens_situacionais); OpenDota items.json (skadi)

## Disperser (disperser)
- porque: Upgrade do Diffusal que ganha um dispel de verdade (Suppress) em vez de só o slow do Inhibit.
- detalhe: Custa 6.100 (Diffusal + Eagle Song + 800), +40 de Agilidade; o Suppress dispela você e o alvo ao mesmo tempo (basic dispel), desacelera o inimigo por 5 s ou dá velocidade e 40% de resistência a slow pro aliado por 5 s, decaindo. D2PT: 40,6% das builds, aos 35 min.
- contra: Luta longa em que você mesmo pegou um debuff leve (slow, silêncio): o Suppress tira isso de você também, não só do alvo.
- fonte: dota-hub/slark.json (guia.itens_situacionais); OpenDota items.json (disperser); https://liquipedia.net/dota2/Disperser

## Skull Basher (basher)
- porque: Trava o alvo no lugar pra fechar o abate, em vez de depender só da prisão do Pounce.
- detalhe: Custa 2.875, +30 de dano e +10 de força; 25% de chance (corpo a corpo) de atordoar 1,2 s a cada golpe. O upgrade Abyssal Blade (6.250) soma um stun ativo de alcance curto. Pros: 4 de 70 (Basher) e 1 de 70 (Abyssal).
- contra: Faceless Void, Slardar, Spirit Breaker e Kez em modo Sai: o Bash do Basher e do Abyssal Blade não ativa nesses quatro heróis, então não conte com ele pra travar esses alvos específicos.
- fonte: dota-hub/slark.json (guia.itens_situacionais); OpenDota items.json (basher, abyssal_blade)

## Butterfly (butterfly)
- porque: +35% de evasão transforma o Slark num alvo difícil de acertar numa luta de dano físico.
- detalhe: Custa 5.450, dá +35 de Agilidade, +25 de dano e +20% de velocidade de ataque base, além dos 35% de evasão (empilha com rendimento decrescente com outra evasão). D2PT: 2,9% das builds, aos 38,5 min.
- contra: Times de dano físico sem perfurador de evasão: o Butterfly some com boa parte dos ataques recebidos. Se o inimigo já tiver muita evasão própria, a resposta do guia é o Monkey King Bar (5.000, 80% de chance de atravessar e +70 de dano mágico por golpe), não o Butterfly.
- fonte: dota-hub/slark.json (guia.itens_situacionais); OpenDota items.json (butterfly, monkey_king_bar)

## Orchid Malevolence (orchid)
- porque: Silencia por 5 s quem foge ou depende de feitiço pra escapar, antes do abate.
- detalhe: Custa 3.275, dá +35 de AS, +20 de dano e +12 de Inteligência; a Soul Burn silencia por 5 s e devolve 30% do dano recebido no período como dano mágico extra. O upgrade Bloodthorn (6.400) soma True Strike (atravessa evasão) e dano fixo adicional por ataque durante o silêncio. Pros: Orchid em 9,8% das builds (aos 26 min), Bloodthorn em 5,7% (aos 36 min).
- contra: Alvos de fuga por feitiço (Force Staff, blinks, dashes) ou, com o Bloodthorn, alvos de evasão pesada, porque o True Strike garante o golpe. Contra alvo único travado como o Doom, a resposta do guia é o Linken's Sphere (4.800), não o Orchid.
- fonte: dota-hub/slark.json (guia.itens_situacionais); OpenDota items.json (orchid, bloodthorn)

## Hand of Midas (hand_of_midas)
- porque: Evite. É a pior linha de compra do Slark no 7000+: builds com Midas venceram só 34,7%.
- detalhe: Custa 2.200, dá +35 de AS e 160 de ouro não confiável por Transmute (não soma XP do time). Builds com Battle Fury venceram 43,4%, a segunda pior linha. Pros usaram Midas em 7 de 70 jogos, mediana aos 11,6 min. O farm do Slark é o Dark Pact em área, não o Transmute num alvo só.
- fonte: dota-hub/slark.json (guia.itens_situacionais, guia.erros_comuns); OpenDota items.json (hand_of_midas)

## Itens neutros (sem slug único em items.json)
- porque: Tokens de tier baixo e médio pagam o gargalo de mana e o custo de vida do farm no jungle que o Dark Pact exige.
- detalhe: T1 Duelist Gloves é o mais usado (22,6% no D2PT) ao lado do Possessed Mask (5 de cura por golpe, aguenta o jungle) e do Chipped Vest; T2 Mana Draught é a escolha lógica pelo gargalo de mana (26,1% no D2PT, 54,6% de vitória); T3 Cloak of Flames queima camps em área, o que combina com o jungle. Os pros montam o T1 aos 9,3 min e o T2 aos 18,5.
- fonte: dota-hub/slark.json (guia.itens_situacionais)
