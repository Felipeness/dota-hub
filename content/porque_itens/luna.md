---
id: porque-itens-luna
titulo: "Por que cada item: Luna"
heroi: Luna
patch: 7.41
fontes:
- app/public/data/herois/luna.json
- dota-imortal/data/opendota/items.json
- https://wiki.cs.money/dota/heroes/drow-ranger
- https://dotacoach.gg/en/items/manta-style
- https://esports.net/news/dota/luna-dota-2-guide/
---

## Power Treads (power_treads)
- porque: Primeiro item, sai do recall aos 5-6 min e já corta o custo de farmar camp pela metade.
- detalhe: O item já dá +25 de attack speed e +45 de move speed pra ranged (55 melee) o tempo todo; a troca de atributo só decide se o +10 vai pra força, agilidade ou inteligência. Com Treads, o camp pequeno cai de 44% para 24% do seu HP e o médio de 48% para 27% (modelo do guia): é o que libera o ciclo wave-camp-wave antes do Mask of Madness.
- combo: Base pro Mask of Madness (próximo item) e pro farm de jungle do Yasha em diante.
- fonte: guia local (power_spikes, itens_core); items.json (attrib de attack speed e move speed).

## Morbid Mask (lifesteal)
- porque: Peça do Mask of Madness, mas já entra sozinha pelo lifesteal no nível 6.
- detalhe: Com Eclipse 1/3 (6 raios de 225 de dano, Q 3/4, raio de 675, 150 de mana) dá pra fechar kill garantido ou ganhar luta de torre; não é ferramenta de farm, o Lunar Orbit é.
- fonte: guia local (itens_core, power_spikes).

## Mask of Madness (mask_of_madness)
- porque: Abre o ciclo wave -> camp -> wave que sustenta o farm dela até o Manta.
- detalhe: Berserk dá +100 de attack speed por 6 s (recarga 16 s), mas tira 7 de armadura e te silencia enquanto ativo. Ative só ao entrar no camp, nunca andando, e desligue contra herói de burst. Comprar depois de 10:30 é o erro mais caro do item: pros caem de 55% pra 39% de vitória.
- combo: Entra junto com Power Treads no início do ciclo de farm; perde valor depois do Manta, quando o dano vem do Orbit.
- fonte: guia local (power_spikes, erros_comuns); items.json (duração e redução de armadura do berserk).

## Yasha (yasha)
- porque: Meio caminho pro Manta e já libera o circuito completo da jungle do seu lado.
- detalhe: +15 de attack speed e +10% de move speed (não empilha com outra fonte de Yasha). Com isso o ciclo de 6 camps do seu lado mais o riacho fica redondo; ancient só depois, com HP acima de 70%.
- fonte: guia local (power_spikes, itens_core); items.json.

## Manta Style (manta)
- porque: Dobra o farm com as imagens e dá um dispel básico pra sair de slow/debuff ao ativar.
- detalhe: No 7.41 o item é Yasha + Diadem (receita de 1.550). As imagens causam 25% do dano cada (ranged, caiu de 28% no 7.41f), duram 18 s e recarregam em 34 s; os pros usam 5,4 vezes por 10 min, sempre em recarga, nunca guardado. Use uma pra empurrar a wave e vá pro camp com a outra. Comprar depois de 18:00 derruba a vitória dos pros de 62% pra 29%.
- contra: Drow Ranger: o Frost Arrows dela é um slow dispellable; o dispel básico do Manta ao ativar remove o slow na hora (confirmado como dispellable na wiki do item, não testei contra o Gust). Não serve pra escapar do Flaming Lasso do Batrider, que é strong-dispel-only.
- combo: Craft do Tier 2 neutro (~16:20, 10 Madstone, 5 camps depois de 15:00) cai perto da janela do Manta e os dois juntos liberam o farm de ancient.
- fonte: guia local (power_spikes, erros_comuns); items.json (notas: "Many effects are removed upon using Manta", build Yasha+Diadem, dano das imagens); https://wiki.cs.money/dota/heroes/drow-ranger (Frost Arrows dispellable); https://dotacoach.gg/en/items/manta-style (dispel básico, tipo de dispel).

## Dragon Lance (dragon_lance)
- porque: Alcance maior libera o Lunar Orbit em camp grande sem precisar encostar tanto.
- detalhe: +130 de alcance e +15 agi/+10 for. Com o Orbit em 4/4 (5 glaives, 8 s, recarga de 25 s, 20% de redução de dano) todo camp grande e o tri_ancient viram rotina; a receita subiu pra 550 no 7.41f. Como primeiro item depois do Manta, os pros venceram 57,7% com Lance contra 47,2% com BKB e 39,0% com Scepter.
- fonte: guia local (power_spikes, itens_core, pros); items.json.

## Black King Bar (black_king_bar)
- porque: Sem ele você não entra numa luta de 5 contra 5 nem disputa Roshan contra time com disable.
- detalhe: 9/8/7 s de magic immunity (cai com nível do item) e reduz 60% do dano de magia mesmo fora da imunidade, +24 de dano. Sem BKB os pros venceram só 37% (jogos que, em média, acabaram antes dos 29 min por não terem fechado).
- combo: Com Manta pronto, é a dupla que libera Roshan e luta de torre a partir dos 22-26 min.
- fonte: guia local (power_spikes, itens_core); items.json.

## Butterfly (butterfly)
- porque: 35% de evasão blinda seu right-click justo contra os carries que mais perdem pra ela.
- detalhe: +30 agi, +30 de dano, +20% de attack speed junto com a evasão. Evasão reduz a chance de qualquer ataque físico acertar, então pesa mais contra quem depende de auto-attack.
- contra: Medusa (-2,7 pp), Wraith King (-2,2 pp), Troll Warlord (-2,0 pp), Spectre (-1,9 pp), Drow Ranger (-1,6 pp) e Clinkz (-1,9 pp) são os piores matchups dela no Divine+ e todos vivem de right-click; Butterfly é a resposta direta a esse grupo.
- fonte: guia local (evitar_quando, power_spikes); items.json (evasão).

## Aghanim's Shard (aghanims_shard)
- porque: Item de sobrevivência mais barato dela, dá fôlego pra segurar o Orbit em luta prolongada.
- detalhe: +10% de redução de dano e +20% de move speed enquanto o Lunar Orbit está ativo. Pros levam em 41% dos jogos, mediana 34:03; costuma ir pro herói de menor patrimônio depois do Tormentor.
- fonte: guia local (itens_core, depois_dos_20).

## Satanic (satanic)
- porque: Fecha jogo sozinha: lifesteal alto o bastante pra sustentar luta mesmo tomando foco.
- detalhe: Ativo dá 170% de lifesteal total por 6 s (25% passivo + 145% do Unholy Rage), recarga de 40 s. O passivo caiu de 30% pra 25% nas notas oficiais do 7.41 (creep lifesteal de 18% pra 15%); o items.json local ainda está desatualizado nesse campo e mostra o valor antigo (30%, tooltip 175%). Só vale comprar com BKB e Manta já cobertos. Depois de 50 min o D2PT mostra a vitória caindo pra 45,8%: feche o jogo entre 35 e 50 min.
- combo: BKB + Manta + Satanic é o trio que sustenta ela sozinha numa luta de 5.
- fonte: guia local (itens_core, power_spikes; o texto do guia já aponta "lifesteal 25%"); notas oficiais do patch 7.41 (Satanic: Lifesteal bonus decreased from +30% to +25%, creep lifesteal de 18% pra 15%).

## Swift Blink (swift_blink)
- porque: Blink com stats de agi é o que faz ela sair pegando squishy depois que a luta principal já foi.
- detalhe: +25 agi passivo e +40 de move speed, ativo dá +35 agi por 6 s em cima do blink de 1200 de alcance. Chega depois do Satanic, na mesma janela de fechamento (32-37 min); Daedalus é a alternativa de puro dano quando não precisa do blink.
- combo: Com Manta e Orbit prontos, o Blink é o que abre pick-off ou entrada em Roshan escondida.
- fonte: guia local (power_spikes); items.json.

## Hurricane Pike (hurricane_pike)
- porque: Dá distância contra quem fecha em você sem precisar de slot de escape puro.
- detalhe: Empurra você e o inimigo 425 de distância um do outro e libera 5 ataques sem respeitar alcance por 6 s (com +100 de attack speed); em você mesmo ou num aliado, o push vira 600 na direção que a pessoa está de frente. Não é um puxão: separa os dois lados. O Force Staff (peça, 2.200) já resolve resgate de aliado sozinho.
- contra: Kunkka, Batrider, Bounty Hunter e Wraith King são os matchups citados no guia: todos melee ou com gap-closer que precisam fechar distância pra te matar, e o Pike cria esse espaço.
- fonte: guia local (itens_situacionais); items.json (push_length, enemy_length).

## Blink Dagger (blink)
- porque: Resolve pick-off depois dos 25 min, quando você já farmou mas ainda morre isolada.
- detalhe: 1200 de alcance, recarga de 3 s pra dano recebido reiniciar o blink. Vira Swift Blink depois.
- fonte: guia local (itens_situacionais).

## Eye of Skadi (skadi)
- porque: Corta a sustentação do inimigo justo quando sua DPS sozinha não derruba quem cura.
- detalhe: -50% de cura (ranged) e slow de ataque e movimento por 3 s. Pros usam em 6% dos jogos, mas com 65% de vitória quando usam.
- fonte: guia local (itens_situacionais); items.json (restoration_reduction, cold_slow).

## Silver Edge (silver_edge)
- porque: Quebra passiva (Break) de quem depende dela e te deixa invisível pra entrar sem ser vista.
- detalhe: 17 s de invisibilidade com +300 de dano no primeiro ataque pós-windwalk; usado em 13% dos jogos pro.
- fonte: guia local (itens_situacionais); items.json.

## Monkey King Bar (monkey_king_bar)
- porque: Sem ele, seu right-click não acerta quem empilha evasão.
- detalhe: 80% de chance de ignorar evasão com +70 de dano bônus no acerto.
- contra: Butterfly, Radiance, Windranger e Phantom Assassin empilhados no inimigo (citados no guia) tiram tanto do seu DPS quanto do deles; MKB é a resposta direta porque ignora evasão, não reduz ela.
- fonte: guia local (itens_situacionais); items.json (bonus_chance, bonus_chance_damage).

## Linken's Sphere (sphere)
- porque: Absorve o disable de alvo único que te mataria antes de reagir.
- detalhe: Bloqueia o primeiro efeito direcionado (recarga de 14 s), inclusive dano; 300 de absorção de dano junto.
- contra: Bane, Doom, Bloodthorn, Lion e Lasso (citados no guia) são disables de alvo único que a Sphere bloqueia de cara, antes do cast completar.
- fonte: guia local (itens_situacionais); items.json (block_cooldown, damage_absorb).

## Nullifier (nullifier)
- porque: Quebra o jeito do inimigo escapar da sua luta.
- detalhe: Mute de 4 s e slow de movimento, projétil de 1800 de velocidade; pode ser lançado em unidade invulnerável.
- contra: Ghost Scepter, Glimmer Cape, Eul's Scepter e Aeon Disk (citados no guia) são as formas mais comuns de fugir da sua luta; o Nullifier nega todas porque pode ser lançado mesmo em unidade invulnerável.
- fonte: guia local (itens_situacionais); items.json (mute_duration, projectile_speed).

## Aghanim's Scepter (ultimate_scepter)
- porque: Evite como compra padrão: os números dizem que é compra de quem já está atrás.
- detalhe: Dá área no Eclipse (alcance 2.500) e +3/+6 raios sem limite por alvo, mas os pros venceram só 46% com ele (n=70) e 39% quando foi o primeiro item depois do Manta (n=41); caiu de 28% pra 8% dos jogos pro desde o 7.41e.
- fonte: guia local (itens_situacionais).

## Shadow Blade (invis_sword)
- porque: Também evite como compra padrão: os pros que comprovam perdem mais do que ganham.
- detalhe: 17 s de invisibilidade e +175 de dano no ataque pós-windwalk, mas os pros que compraram venceram só 42% (n=48).
- fonte: guia local (itens_situacionais); items.json.

## Hydra's Breath (hydras_breath)
- porque: Dano puro de fechamento quando o jogo já está ganho, não substitui escape nem BKB.
- detalhe: 3 ataques secundários com 75% do dano em área de 150 e 120°, mais poison de 2,5/s por 3 s. Pros usam em 21 jogos (86% de vitória), sempre comprado por quem já está na frente, aos 35:55.
- combo: O Felipe monta Specialist's Array -> Hydra's Breath no lugar do BKB e do Butterfly em 4 de 6 jogos; dá dano, não dá escape nem imunidade a magia, e é o maior desvio de build dele contra os pros.
- fonte: guia local (itens_situacionais, erros_comuns); items.json.

## Divine Rapier (rapier)
- porque: Só com o jogo decidido, quando perder o item pra morte não quebra a partida.
- detalhe: +250 de dano e +25% de spell amplification, mas cai no chão se você morrer e pode ser roubado. Pros usam em 6% dos jogos aos 44:24 (44% de vitória); D2PT 10% aos 45,1 min.
- fonte: guia local (itens_situacionais); items.json.
