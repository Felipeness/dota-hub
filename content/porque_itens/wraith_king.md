---
id: porque-itens-wraith_king
titulo: "Por que cada item: Wraith King"
heroi: Wraith King
patch: 7.41
fontes:
- app/public/data/herois/wraith_king.json
- https://www.dota2.com/datafeed/patchnotes?version=7.41f&language=english
- https://www.dota2.com/datafeed/herodata?language=english&hero_id=42
- https://www.dota2.com/datafeed/itemdata?language=english&item_id=137
- dota-imortal/data/opendota/items.json
- https://liquipedia.net/dota2/Black_King_Bar
- https://www.oneesports.gg/dota2/black-king-bar-debuff-immunity-7-33/
- https://liquipedia.net/dota2/Monkey_King_Bar
- https://liquipedia.net/dota2/True_Strike
- https://www.dota2protips.com/heroes/skeleton_king
- https://dota2protracker.com/hero/legacy/Wraith+King?role=pos%201
---

## Magic Wand (magic_wand)
- porque: Repõe vida e mana rápido na lane e segura os 220 de mana que o Reincarnation precisa guardado.
- detalhe: 15 de vida e mana por carga, até 20 cargas. No nível 6 você tem ~375 de mana (com Bracer); Q custa 95 a 140 e Bone Guard 70 a 100, então antes do nível 12 o Wand é o que sobra pra gastar um dos dois numa troca sem zerar a mana do R.
- combo: abertura com Bracer (via Circlet) quando a lane exige vida: +3,8% de taxa de lane contra +1,6% das outras aberturas.
- fonte: wraith_king.json (guia.itens_core, guia.lane.itens_iniciais, guia.condicao_para_farmar).

## Phase Boots (phase_boots)
- porque: +50 de velocidade e +18 de dano ligam o ciclo onda, camp, onda que é o motor de farm do WK antes do Radiance.
- detalhe: Sem Phase o Bone Guard não chega nos creeps a tempo de ganhar carga (1 carga a cada 2 que você mata). D2PT: pronto aos 6 min no pub (4 a 8) e 7,0 no pro (13 de 14 builds); Power Treads aparece em só 1 dos 14 jogos pro.
- combo: Phase + Wraithfire Blast num creep manda os esqueletos focarem aquele alvo, o que empurra a wave antes de você entrar na jungle.
- fonte: wraith_king.json (guia.itens_core, power_spikes 5:00-7:00, guia.depois_dos_20).

## Radiance (radiance)
- porque: É o maior pico de farm do herói: 60 de dano/s em 650 de raio some com os esqueletos do Bone Guard pra limpar sozinho.
- detalhe: Sacred Relic sai aos 13-15 min e o Radiance fica pronto aos 16 (D2PT) a 18,2 (pro, 11 de 14 builds). Os 25% de evasão de brinde ajudam a sobreviver enquanto farma. Depois dele, o guia recomenda 5 min de farm puro (large, ancient, stack em :52-:54) antes de entrar em luta.
- combo: Radiance (4.700 de ouro: Sacred Relic + Talisman of Evasion) + Bone Guard com 8 cargas (nível 7+) + vida acima de 1.000 libera o ciclo de ancient do triângulo.
- fonte: wraith_king.json (guia.itens_core, power_spikes 14:00-18:00, guia.condicao_para_farmar).

## Blink Dagger (blink)
- porque: Fecha a distância pra abrir a luta com o Wraithfire Blast garantido no alvo principal, sem precisar que o time inicie primeiro.
- detalhe: Entra, stuna (1,0 a 1,6s conforme o nível de Q), crítico garantido no primeiro golpe e os esqueletos já ativos entram na luta atrás de você. D2PT: pronto aos 20 min no pub (16 a 24) e 21,7 no pro, bem na janela do Tormentor que nasce às 20:00.
- combo: Blink, Wraithfire Blast no alvo, crítico garantido; depois do Aghanim's Shard (26 min) essa mesma entrada já vem com a maldição de dano puro atrás do crítico.
- fonte: wraith_king.json (guia.itens_core, power_spikes 20:00-22:00).

## Aghanim's Shard (aghanims_shard)
- porque: Dobra o burst do crítico sem depender do time: todo Mortal Strike vira um segundo golpe de dano puro 3s depois.
- detalhe: A maldição é 75% do dano do golpe crítico, aplicada como dano puro com atraso de 3s, e o próprio lifesteal do WK conta nela. Com Radiance e Phase prontos (nível ~18, 26 min) um crítico de 280% faz ~530 de dano e a maldição soma mais ~400 de dano puro (estimativa local, antes de armadura e resistências do alvo), fora 1 a 2 golpes normais dentro do stun.
- contra: a maldição já fica aplicada como debuff no alvo no momento do crítico, então o dano puro ainda chega 3s depois mesmo que o alvo fuja do combate logo após ser acertado (a menos que alguém dispelle o debuff antes do tempo acabar).
- combo: Shard (26 min) + Blink + Mortal Strike é o combo de pick-off: derruba suporte ou core frágil sem esperar o resto do time entrar.
- fonte: wraith_king.json (guia.itens_core, power_spikes 24:00-28:00); dota2protips (curse 75% / 3s / lifesteal aplica).

## Black King Bar (black_king_bar)
- porque: Desde o rework do 7.33 o BKB virou imunidade a debuff (não mais imunidade total a magia), e é a única defesa de verdade do WK contra stun e silence.
- detalhe: 9/8/7s de duração por carga (recarga de 95s), 60% de resistência mágica e imunidade a dano refletido e puro durante o efeito, com dispel básico ao ativar. Feitiços inimigos ainda acertam (com a resistência), mas o efeito negativo deles (ex.: o stun do Earth Spike do Lion) não pega enquanto o BKB está ligado.
- contra: Tidehunter, Dark Seer, Bristleback, Brewmaster, Beastmaster, Phoenix no offlane e Enchantress, Warlock, Pangolier, Keeper of the Light, Undying, Jakiro: são os piores pares do WK por causa de disable em cima de um herói melee de alvo único (-3,5 a -5,6 pp no Divine+). O BKB resolve direto porque bloqueia justamente o debuff desses heróis.
- fonte: wraith_king.json (guia.itens_core, guia.evitar_quando); Liquipedia Black King Bar; oneesports (rework 7.33, debuff immunity).

## Assault Cuirass (assault)
- porque: Primeiro item de luta depois do BKB: a aura de +5 de armadura aliada e -5 inimiga empurra torre e barracks com o time todo em volta.
- detalhe: +30 de velocidade de ataque, +10 de armadura, raio de 1200 (aura passa por BKB, "bkbpierce"). D2PT: 40,1% das builds aos 31 min; pros 5 de 14, mediana 34,3.
- fonte: wraith_king.json (guia.itens_situacionais); items.json (assault).

## Armlet of Mordiggian (armlet)
- porque: Quando você quer farmar e lutar cedo, dá +35 de dano e +25 de força ligado, e o lifesteal inato do WK cobre parte do dreno.
- detalhe: Dreno de 45 de vida por segundo enquanto ligado; o erro comum é esquecer de desligar embaixo de ~35% de vida. D2PT: 25,9% das builds aos 18 min (via Helm of Iron Will + Gloves of Haste + Blades of Attack); pros 6 de 14, mediana 20,1.
- fonte: wraith_king.json (guia.itens_situacionais, guia.erros_comuns); items.json (armlet).

## Orchid Malevolence (orchid)
- porque: Contra alvo móvel ou com fuga, o silence de 5s trava o escape antes do Blink chegar e ainda soma dano no final.
- detalhe: Orchid (3.275) sai aos 25 min em 36,8% das builds; evolui pra Bloodthorn (6.400) aos 31 min em 28,8%. O Bloodthorn soma True Strike e 40% de chance de furar evasão contra o alvo silenciado, além do próprio dano do silence.
- combo: Orchid/Bloodthorn + Blink + crítico é o combo de pick-off contra suporte ou core com item de escape.
- fonte: wraith_king.json (guia.itens_situacionais); items.json (orchid, bloodthorn).

## Desolator (desolator)
- porque: Pra empurrar estrutura e contra time de armadura alta, os -6 de armadura por 7s somam com o seu crítico e os esqueletos.
- detalhe: +55 de dano; a redução de armadura também funciona em prédio, não só em herói. D2PT: 16,2% das builds aos 24 min; pros 4 de 14, mediana 23,5.
- fonte: wraith_king.json (guia.itens_situacionais); items.json (desolator: "Armor reduction works on buildings").

## Skull Basher / Abyssal Blade (basher)
- porque: Pick-off: trava o alvo que tentaria fugir do seu crítico ou da maldição do Shard.
- detalhe: Skull Basher (2.875) dá 25% de chance de stun de 1,2s em melee. Evolui pra Abyssal Blade (6.250, +30 de força desde o 7.41e) com um stun ativo de 1,6s. D2PT: Basher em 25,4% das builds aos 34 min; Abyssal em 17,3% aos 38.
- contra: contra heróis que ligam o próprio BKB pra escapar do seu combo, o stun ativo do Abyssal Blade fura imunidade a debuff.
- fonte: wraith_king.json (guia.itens_situacionais); items.json (basher, abyssal_blade: "Pierces Debuff Immunity").

## Monkey King Bar (monkey_king_bar)
- porque: Contra evasão pesada (Phantom Assassin, Butterfly), sem ele o seu Mortal Strike pode simplesmente errar e o combo todo falha.
- detalhe: Pierce dá 80% de chance por golpe de furar a evasão e somar 70 de dano mágico; no 7.41 o item ainda ganhou +50 de alcance de ataque melee. D2PT: 11,3% das builds aos 34 min.
- contra: Phantom Assassin, Butterfly e qualquer fonte de evasão alta: o MKB garante que o crítico conecte.
- fonte: wraith_king.json (guia.itens_situacionais); items.json (monkey_king_bar); Liquipedia Monkey King Bar / True Strike.

## Silver Edge (silver_edge)
- porque: Contra heróis passivos (Bristleback, Spectre, Troll), o break desliga a defesa deles antes do seu crítico bater.
- detalhe: 17s de invisibilidade e +25% de velocidade; o ataque que termina a invisibilidade soma 300 de dano bônus e desliga as passivas do alvo por 5s. D2PT: 5,2% das builds aos 34 min.
- contra: Bristleback (a redução de dano dele corta parte do seu lifesteal desde o 7.41), Spectre e Troll Warlord: o break derruba a passiva deles antes da troca de golpes.
- fonte: wraith_king.json (guia.itens_situacionais, guia.erros_comuns); items.json (silver_edge).

## Soul Ring (soul_ring)
- porque: Se a mana não fecha pra manter o Bone Guard ativo e ainda guardar 220 pro Reincarnation, o Soul Ring resolve antes de um item de mana maior.
- detalhe: 805 de ouro, +6 de força; converte 170 de vida em 170 de mana por 10s. D2PT: 11,3% das builds aos 9 min; pros 4 de 14.
- fonte: wraith_king.json (guia.itens_situacionais, guia.lane.dicas); items.json (soul_ring).

## Harpoon (harpoon)
- porque: Gap closer contra quem tenta manter distância do seu crítico.
- detalhe: +25 de força; o Draw Forth puxa você e o alvo a até 35% da distância entre os dois, e sendo melee sempre te deixa dentro do alcance de ataque. D2PT: 8,7% das builds aos 27 min, evoluindo pra Swift Blink (6.800, 12,3% aos 43) ou Overwhelming Blink (6.800, 7,5% aos 41).
- fonte: wraith_king.json (guia.itens_situacionais); items.json (harpoon, swift_blink, overwhelming_blink).

## Aghanim's Scepter (ultimate_scepter)
- porque: Quando o time luta em grupo, encurta o Reincarnation em até 10s e dá a forma Wraith pros aliados perto de você.
- detalhe: 4.200 de ouro, +10 em todos os atributos e +175 de vida e mana; a recarga do Reincarnation cai de 180/150/120s pra 170/140/110s. D2PT: 8,3% das builds aos 37 min.
- fonte: wraith_king.json (guia.itens_situacionais); items.json (ultimate_scepter).

## Eye of Skadi (skadi)
- porque: Só vale contra time de muita sustentação: a redução de 50% na cura inimiga complementa o corte de cura que você já tem no kit.
- detalhe: Usado em só 1,7% das builds do 7000+ (D2PT); o guia marca como item de nicho, não padrão pro WK.
- fonte: wraith_king.json (guia.itens_situacionais, entrada "skadi_e_shivas").

## Shiva's Guard (shivas_guard)
- porque: Só vale contra time de muita velocidade de ataque: a aura de -45 de velocidade de ataque em 1200 de raio neutraliza o DPS inimigo em grupo.
- detalhe: Usado em só 2,0% das builds (D2PT); o Arctic Blast ainda soma 260 de dano em área e 40% de slow por 4s pra abrir luta. Satanic não entra na lista: no 7.41e/f a recarga subiu de 30 pra 40s e o lifesteal caiu de 30% pra 25%, e o WK já tem lifesteal inato de 20% a 35% (não compre).
- fonte: wraith_king.json (guia.itens_situacionais "skadi_e_shivas", guia.erros_comuns); items.json (shivas_guard).

## Itens neutros (vários, sem slug único)
- porque: No 7000+ os mais escolhidos dão sobrevida e dano consistente pro farm e pra luta, sem depender de um único item caro.
- detalhe: Tier 1 Chipped Vest (22,6% das builds, 55,0% de vitória) ou Possessed Mask (12,0%; 55,9%); Tier 2 Defiant Shell (27,2%; 54,3%) ou Crippling Crossbow (9,0%; 58,7%, slow de 50% e -40% de cura); Tier 3 Gunpowder Gauntlet (27,3%; 53,1%); Tier 4 Flayer's Boot (17,6%; 50,0%; evite o Giant's Maul, 31,9% das builds e só 44,5% de vitória); Tier 5 Stygian Desolator (37,5%; 66,7%, amostra pequena). Encantamento Tough na maioria dos tiers.
- fonte: wraith_king.json (guia.itens_situacionais "neutros", dados D2PT).
