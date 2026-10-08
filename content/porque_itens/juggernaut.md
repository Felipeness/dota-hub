---
id: porque-itens-juggernaut
titulo: "Por que cada item: Juggernaut"
heroi: Juggernaut
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/juggernaut.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://dotacoach.gg/items/power-treads
- https://dotacoach.gg/en/items/manta-style
- https://www.strafe.com/articles/read/conquering-dota-2-roshan-essential-tips-and-insights/
---

## Power Treads (power_treads)
- porque: Primeira saída pra selva: +10 de agilidade e +25 de velocidade de ataque fazem o camp cair rápido sem gastar o Q.
- detalhe: Com o Q 3/4 no nível 5, o dano por golpe sai de ~74 pra ~84 e o intervalo de ataque cai de 0,92s pra 0,74s; isso é o que abre o small e o medium camp logo depois da lane (5:30 a 6:10). Fica em Agilidade a maior parte do jogo; o Switch Attribute recalcula a mana pelo percentual do pool, não em valor fixo.
- combo: Trocar pra Inteligência um instante antes de um giro de Blade Fury dá um top up de mana de verdade (a troca recalcula o pool pelo percentual atual), útil quando falta pouco pros 120 de mana do Q.
- fonte: guia local (power_spikes, Power Treads e nível 5); items.json (power_treads); dotacoach.gg/items/power-treads (mecânica de troca de atributo e mana)

## Magic Wand (magic_wand)
- porque: Sustain barato pra lane e pra primeira entrada na selva, sem gastar o Q em vida.
- detalhe: Carrega 1 ponto cada vez que um inimigo visível a até 1200 de distância usa uma habilidade, até 20 cargas, e devolve 15 de vida e mana por carga. Antes da Perseverance é o que paga os giros extras do Blade Fury numa troca ou numa fuga.
- fonte: items.json (magic_wand)

## Perseverance (pers)
- porque: Sobe a regen de mana de ~1,1 pra ~3,4 por segundo: o Q vira de 1 giro a cada 1,5 a 2,5 min pra 1 a cada ~35s.
- detalhe: Também sobe a regen de vida de ~3,5 pra ~9. É o primeiro componente do Battle Fury, não um item pra vender depois: guarde Ring of Health e Void Stone (Secret Shop) pra montar o item maior.
- combo: Perseverance + Q 3/4 (nível 5): o ciclo de giro fica curto o bastante pra bater large e lago sem esperar a regen natural.
- fonte: guia local (power_spikes, Perseverance); items.json (pers)

## Battle Fury (bfury)
- porque: Cleave de 40% em creep libera o farm em anel; sem ele não tem limpeza nenhuma fora do Q.
- detalhe: O dano por golpe sobe de ~93 pra ~150 e o large cai de 16,5s (41% da vida) pra 6,7s (15%) sem gastar o Q. Nos 43 jogos pro do 7.41+, quem fechou o item até 14:00 venceu 14 de 23 (61%); depois disso, só 4 de 16 (25%).
- contra: o cleave é dano físico e passa por spell immunity (nota do item), então ainda limpa creep ou ilusão com imunidade mágica.
- combo: Battle Fury + Blade Fury 4/4 (nível 7, ~9:15): o ancient cai em ~7s com o Q, dentro da janela de 13:00 que decide os 61% de vitória.
- fonte: guia local (power_spikes, Battle Fury; condicao_para_farmar); items.json (bfury)

## Yasha (yasha)
- porque: Depois dele o autoataque já limpa camp mais rápido que o giro, então o Q sobra pra ancient e luta.
- detalhe: +16 de agilidade, +15 de velocidade de ataque e +10% de movimento. É só a metade do caminho: o objetivo real é fechar o Manta em cima dele.
- combo: Yasha vira Manta Style sem perder o investimento, o item é literalmente um componente.
- fonte: guia local (power_spikes, Yasha); items.json (yasha)

## Manta Style (manta)
- porque: 2 imagens (33% de dano cada) aceleram a limpeza e o dispel básico tira silêncio e lentidão no botão.
- detalhe: O large cai pra 3,8s e 5% da vida com as imagens ajudando. O cast tem 0,1s de invulnerabilidade e aplica Basic Dispel (confirmado no items.json), então remove boa parte dos debuffs comuns, mas não os marcados como não dispeláveis. Pros que fecham o Manta até 20:00 venceram 16 de 20 (80%); depois disso, 3 de 15 (20%). Contra o Roshan vale pouco: ele causa 80% menos dano às ilusões (Strength of the Immortal), então ali o dano é sempre do corpo, do Q e do Omnislash.
- combo: Manta + nível 15 (talento de -15s no Omnislash, ainda 2/3): reduz o intervalo entre as fugas e kills grandes.
- fonte: guia local (power_spikes, Manta Style e nível 15); items.json (manta); dotacoach.gg/en/items/manta-style; strafe.com (Roshan, Strength of the Immortal, atualizado pro 7.41b)

## Butterfly (butterfly)
- porque: 35% de evasão e +25 de dano no pico de luta, junto do crítico de 215% do talento do nível 20.
- detalhe: +35 de agilidade, +25 de dano, 35% de evasão, +20% de velocidade de ataque base. É o pico de dano de luta do herói, somado ao Yasha que já está na mochila.
- contra: contra autoataque físico de quem não carrega Monkey King Bar (ex. Axe, Spirit Breaker sem MKB), 35% de evasão falha um terço dos golpes deles, porque evasão só é furada por chance de true strike.
- fonte: guia local (power_spikes, Butterfly e nível 20); items.json (butterfly)

## Blink Dagger (blink)
- porque: Alcance de 1200 pra entrar, contra só 450 do Omnislash: sem ele você precisa chegar andando.
- detalhe: Custa 2.250 e não tem outro efeito. O combo de entrada é Blink no alvo mais perigoso, Omnislash, Q se sobrar mana.
- combo: Blink + Omnislash + Blade Fury: entra de 1200, trava 3 a 3,5s invulnerável no herói certo e sai girando se a luta virar.
- fonte: guia local (power_spikes, Blink Dagger); items.json (blink)

## Aghanim's Scepter (ultimate_scepter)
- porque: O Swiftslash dá 1s de Omnislash numa recarga de 25s, pra fechar kill sem gastar a ulti grande.
- detalhe: +10 em todos os atributos e +175 de vida e mana, além do Swiftslash (150 de mana). É o jeito de perseguir ou garantir abate sem esperar os 120 a 105s do Omnislash normal.
- combo: Scepter + Omnislash grande em recarga: usa o Swiftslash pra não ficar sem nenhuma versão da ulti disponível.
- fonte: guia local (power_spikes, Aghanim's Scepter); items.json (ultimate_scepter)

## Swift Blink (swift_blink)
- porque: +25 de agilidade e, depois do blink, +40% de velocidade e +35 de agilidade por 6s: entra e já sai caçando.
- detalhe: Custa 6.800 (Blink + Eaglesong) e chega perto do nível 25, quando o talento de +40% de roubo de vida do Blade Dance ou +1s de Omnislash abre.
- combo: Swift Blink + talento do nível 25 (lifesteal do Blade Dance): sustenta a entrada numa luta de 6 slots.
- fonte: guia local (power_spikes, Swift Blink e nível 25); items.json (swift_blink)

## Monkey King Bar (monkey_king_bar)
- porque: Garante 80% de chance de acertar contra evasão e miss: serve contra Butterfly inimigo, Windranger, PA e Riki.
- detalhe: +50 de dano, +50 de velocidade de ataque e 80% de chance de furar evasão com 70 de dano mágico extra. Sem ele, o autoataque do Juggernaut erra demais contra quem tem evasão alta.
- contra: Butterfly inimigo, Windranger (Windrun), Phantom Assassin (Blur) e Riki: todos vivem de evasão ou miss, e o MKB é a resposta direta.
- fonte: guia local (itens_situacionais.monkey_king_bar); items.json (monkey_king_bar)

## Eye of Skadi (skadi)
- porque: Em jogo longo contra time de cura ou poke, o slow no ataque e o corte de 50% na restauração ajudam a fechar.
- detalhe: +35 em todos os atributos e, no ataque, 25% de lentidão no movimento (melee) ou 50% (ranged) por 3s, com -50% na restauração de vida do alvo atingido.
- contra: times que dependem de autocura ou lifesteal pra sobreviver em troca: o corte de 50% na restauração reduz o que eles recuperam enquanto você bate.
- fonte: guia local (itens_situacionais.skadi); items.json (skadi)

## Abyssal Blade (abyssal_blade)
- porque: Pick off em jogo de 35+ min: o Basher passivo (25% de chance, melee) trava o alvo pro resto do combo.
- detalhe: Skull Basher primeiro (25% de bash, 1,2s), depois o Abyssal completo: +35 de dano, +26 de força e um stun ativo de 1,6s (recarga 35s) que pierce debuff immunity.
- contra: não ativa o bash passivo contra Spirit Breaker, Faceless Void, Slardar e Kez em modo Sai (nota oficial do item), então nesses confrontos ele vale só pelo stun ativo e pelos atributos.
- fonte: guia local (itens_situacionais.abyssal_blade); items.json (abyssal_blade)

## Nullifier (nullifier)
- porque: Contra Ghost Scepter, Glimmer, Eul, Force Staff ou Aeon Disk: dispela, cega e atrasa o alvo por 4s.
- detalhe: +75 de dano e +10 de armadura, com um Nullify que aplica Basic Dispel, muta por 4s e desacelera continuamente; pode ser lançado até em unidade invulnerável.
- contra: Ghost Scepter, Glimmer Cape, Eul's Scepter, Force Staff e Aeon Disk: o Nullifier remove ou ignora a camada de defesa que esses itens dão antes de você fechar o alvo.
- fonte: guia local (itens_situacionais.nullifier); items.json (nullifier)

## Black King Bar (black_king_bar)
- porque: Só entra com 3 ou mais disables de alvo ou nuke em área: o Blade Fury já cobre o resto.
- detalhe: 9s de Avatar (60% de resistência mágica, imunidade a dano refletido e puro, Basic Dispel na ativação). O Juggernaut raramente precisa, porque o Blade Fury já dá 5s de imunidade a debuff a cada giro.
- contra: Bane, Shadow Shaman, Lion, Doom, Necrophos: múltiplos disables de alvo ou burst mágico em área que o Blade Fury sozinho não cobre o jogo inteiro.
- fonte: guia local (itens_situacionais.black_king_bar); items.json (black_king_bar)

## Diffusal Blade (diffusal_blade)
- porque: Serve pra perseguir e purgar: contra herói de muita mana, contra ilusão e pra fechar fuga.
- detalhe: Inhibit desacelera por 4s; o Manabreak queima 40 de mana por ataque e converte em dano físico, mas não funciona em ilusões (nota do item: illusions do not burn mana).
- contra: contra heróis de ilusão (Naga Siren, Phantom Lancer, Terrorblade), o mana burn não pega nos clones, mas o Inhibit ainda desacelera e ajuda a separar o real do resto.
- fonte: guia local (itens_situacionais.diffusal_blade); items.json (diffusal_blade)

## Aghanim's Shard (aghanims_shard)
- porque: Time que precisa de cura numa luta longa: o Shard deixa a Healing Ward curar mais e aguentar golpe.
- detalhe: 1.400 de ouro. Soma 1,5% de cura por segundo à Healing Ward (6,5%/s no nível 4) e faz a ward aguentar 2 golpes antes de morrer, em vez de 1.
- fonte: guia local (itens_situacionais.aghanims_shard)

## Wraith Band (wraith_band)
- porque: Lane difícil que pede atributo e armadura cedo e barato, sem travar o caminho pro Battle Fury.
- detalhe: +5 de agilidade, +2 de força e inteligência, +6 de ataque, +1,75 de armadura por 505 de ouro. Nos pros: 9 de 43 jogos, comprado perto dos 2:13.
- fonte: guia local (itens_situacionais.wraith_band); items.json (wraith_band)

## Phase Boots (phase_boots)
- porque: Alternativa às Treads quando a lane pede perseguição ou fuga em vez de dano de ataque.
- detalhe: +50 de velocidade e +18 de dano (melee) com o Phase de 3s pra atravessar unidades; em troca perde os +10 de agilidade e +25 de velocidade de ataque das Treads.
- fonte: guia local (itens_situacionais.phase_boots); items.json (phase_boots)

## Itens neutros
- porque: Os de ataque (Serrated Shiv, Gunpowder Gauntlet, Stygian Desolator) encaixam no que o herói já faz: bater.
- detalhe: Pros pegam o 1º por volta de 8:29 (Possessed Mask, Duelist Gloves, Weighted Dice), o 2º aos 16:48 (Defiant Shell, Tumbler's Toy), o 3º aos 26:43 (Serrated Shiv, Gunpowder Gauntlet) e o 4º aos 37:31.
- fonte: guia local (itens_situacionais.neutros)

## O que não comprar
- porque: Mask of Madness, Maelstrom, Mjollnir e Hand of Midas competem com o Yasha/Manta sem ganho real aqui.
- detalhe: No OpenDota (todas as faixas) só 42% de vitória com Maelstrom e 47% com Mjollnir: o cleave do Battle Fury e o crítico do Blade Dance já cobrem a limpeza que esses itens dariam. Boots of Travel só depois de 6 slots cheios (3 de 43 pros, aos 67:47).
- fonte: guia local (itens_situacionais.nao_comprar)
