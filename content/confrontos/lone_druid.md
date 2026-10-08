---
id: confrontos-lone_druid
heroi: Lone Druid
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/lone_druid.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/pangolier.json
- dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- dota-hub-conteudo-novo/pro_dados/abyssal_underlord.json
- dota-hub-conteudo-novo/pro_dados/windrunner.json
- dota-hub-conteudo-novo/pro_dados/luna.json
- dota-hub-conteudo-novo/pro_dados/monkey_king.json
- dota-hub-conteudo-novo/pro_dados/tidehunter.json
- dota-hub-conteudo-novo/pro_dados/puck.json
- dota-hub-conteudo-novo/pro_dados/keeper_of_the_light.json
- dota-hub-conteudo-novo/pro_dados/necrolyte.json
- dota-hub-conteudo-novo/pro_dados/alchemist.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
- https://dotacoach.gg/en/heroes/lone-druid
- https://dota2protracker.com/patches/7.41c (via busca web)
- https://rdy.gg/en/dota2/news/lon-druid-sent-back-to-hibernation-with-patch-7-41-c
---

## Contra Hoodwink (hoodwink)
- placar: Lone Druid venceu 66 de 108 partidas pro (61,1%). É o oponente com mais jogos de pro contra o Lone Druid de toda a base.
- por que importa: maior volume de jogos pro contra o Lone Druid (108), mesmo sendo 4/5 e quase nunca dividindo lane com ele. Hard support clássico que tenta zonear o camp do urso de longe.
- janelas: até os 12 min (Arcane Boots dela, mediana 12,2 min, pro_dados/hoodwink.json) ela tenta travar o camp do urso com Bushwhack enquanto você ainda não tem Maelstrom (12,1 min, pro_dados/lone_druid.json); dos 12 aos 24 min seu Mjollnir (16,5 min) e Scepter (21,7 min) chegam bem antes do Aghanim's Shard dela (23,8 min), você farma mais rápido do que ela consegue zonear sozinha; depois dos 24 min, com o shard dela pronto, o Hunter's Boomerang reforçado ameaça de longe mesmo sem acertar o Bushwhack.
- o que ela faz com você: Bushwhack (alcance 1100) prende quem está perto de árvore e zera a visão do alvo durante o stun, clássico contra Druid e urso parados em jungle cercada de árvore; Sharpshooter carrega até 3 s (o tiro sai sozinho aos 5 s mesmo sem soltar antes) e acerta a até 3000 de distância com até 1350 de dano, break e slow num herói isolado, risco real pro Druid sozinho (pouca vida própria fora do urso).
- o que você faz com ele: Entangle (90 de dano por segundo, atravessa Black King Bar, constants_abilities.json) e o urso melee fecham a distância rápido contra a vida fixa baixa dela; Savage Roar fere ela pra longe se tentar fugir com Scurry por perto.
- itens que viram: seu Black King Bar (33,0 min) bloqueia o stun do Bushwhack e o break do Sharpshooter; os dois Aghanim's Shard saem quase juntos (dela 23,8 min, seu 24,5 min), então essa janela decide quem controla a próxima troca.
- como jogar: não deixe o Druid sozinho perto de árvore sem o urso por perto antes dos 12 min. Depois do seu Mjollnir, ignore a Hoodwink parada de longe e foque farm, ela não acompanha seu GPM.
- fonte: pro_dados/lone_druid.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, hoodwink_scurry, lone_druid_entangle).

## Contra Rubick (rubick)
- placar: Lone Druid venceu 51 de 85 partidas pro (60,0%). Segundo maior volume de jogos pro da base.
- por que importa: segundo oponente mais comum em pro (85 jogos), 4/5 que não briga de lane mas ronda com Spell Steal e Fade Bolt. O risco real não é a lane, é a magia roubada.
- janelas: até o Arcane Boots dele (10,3 min, pro_dados/rubick.json) ele fica de Fade Bolt a distância reduzindo seu dano; seu Maelstrom (12,1 min) chega logo depois e você já farma mais rápido do que ele consegue zonear sozinho; os blinks saem quase juntos (dele 21,6 min, seu Scepter no urso 21,7 min), quem inicia primeiro define a troca; depois dos 24-27 min os dois aghs saem (seu shard 24,5 min, o dele scepter 27,4 min).
- o que ele faz com você: Spell Steal copia a última magia ativa que Entangle ou Savage Roar lançou (nenhuma das duas é passiva, então são roubáveis) e fica com ela até 300 s; Fade Bolt (até 325 de dano, salta entre inimigos num raio de 440) reduz seu dano de ataque e mágico por 10 s, corta parte do DPS do urso; Telekinesis atordoa e desloca, boa abertura de combo contra Druid isolado.
- o que você faz com ele: Rubick tem vida baixa fixa e nenhum blink antes dos 21,6 min; pegá-lo sem Force Staff ou Eul's por perto costuma ser kill garantido, e Entangle (atravessa BKB) prende ele fácil.
- itens que viram: seu Aghanim's Shard (dispel + buff em Savage Roar, 24,5 min) limpa o debuff do Fade Bolt na hora; não existe item que bloqueie o roubo em si, a defesa real é não gastar Entangle ou Savage Roar perto dele à toa.
- como jogar: evite lançar Savage Roar perto de um Rubick livre sem necessidade, ele fica rondando pra roubar. Depois que ele gastar o Spell Steal numa magia fraca, é sua janela.
- fonte: pro_dados/lone_druid.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_fade_bolt, rubick_telekinesis, lone_druid_entangle, lone_druid_savage_roar).

## Contra Shadow Fiend (nevermore)
- placar: Lone Druid venceu 41 de 65 partidas pro (63,1%). Terceiro maior volume de jogos pro, o carry de mid mais comum contra o LD.
- por que importa: terceiro maior volume de jogos pro (65) e o carry farmador mais frequente contra o Lone Druid, mesmo raramente dividindo lane (SF é 1, geralmente mid; LD é 1, geralmente safelane/jungle).
- janelas: até os 9 min SF ainda está empilhando almas (Necromastery) e ameaça pouco; seu Maelstrom (12,1 min) e Mjollnir (16,5 min) chegam bem antes do primeiro item de dano dele (Claymore 24,2 min, Demon Edge 27,2 min, pro_dados/nevermore.json), nessa janela o urso farma e empurra mais rápido; dos 23 aos 27 min, com Black King Bar pronto (25,2 min) e alma empilhada, o Requiem dele ameaça Druid e urso juntos se os dois ficarem colados perto dele; depois dos 29 min (seu Silver Edge, 29,2 min) dá pra pegar ele sozinho antes de soltar o Requiem.
- o que ele faz com você: Shadowraze bate forte em linha e empurra lane ou camp; Requiem of Souls solta linhas de energia num raio de 1000 ao redor dele, cada linha que acerta amedronta e reduz velocidade e resistência mágica por até 2,15 s no total, se Druid e urso estiverem colados quando ele solta, os dois tomam dano múltiplo.
- o que você faz com ele: SF tem vida baixa fixa sempre; Entangle (atravessa BKB, constants_abilities.json: bkbpierce yes) prende ele parado pro resto do time acabar, e ele não tem disable próprio pra impedir isso.
- itens que viram: seu Black King Bar (33,0 min) bloqueia o medo do Requiem (constants_abilities.json: nevermore_requiem bkbpierce no); Silver Edge quebra qualquer buff ativo que ele tenha no momento do break.
- como jogar: não force troca perto de um SF com alma empilhada sem BKB pronto; antes disso, farme separado dele e use o urso pra punir se ele vier sozinho pra última hit.
- fonte: pro_dados/lone_druid.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_requiem, nevermore_shadowraze1).

## Contra Tiny (tiny)
- placar: Lone Druid venceu 36 de 64 partidas pro (56,2%). Carry (posição 1) mais comum contra o Lone Druid no pro.
- por que importa: quarto maior volume de jogos pro (64) e o carry pos. 1 mais frequente contra o LD na base, disputando o mesmo papel de iniciador físico do meio-jogo mesmo sem lane em comum.
- janelas: até o Echo Sabre dele (12,1 min, pro_dados/tiny.json) ele ainda não tem blink; seu Maelstrom (12,1 min, praticamente empatado) libera o jungle no mesmo momento; o Blink dele (15,9 min) e seu Mjollnir (16,5 min) chegam quase juntos, mas o combo Avalanche + Toss dele já ameaça desde o nível 6 (7-8 min); depois do seu Scepter no urso (21,7 min, separa o farm) ele ainda está montando Claymore (21,1 min) e BKB (26,7 min), sua janela de farm dividido é maior que a dele.
- o que ele faz com você: Toss agarra a unidade mais próxima num raio de 300 (pode ser o próprio urso) e arremessa a até 1100 de distância causando dano crescente (90 a 360, constants_abilities.json); combinado com Avalanche (stun picado em área) é um combo de burst que pode te separar do urso à força.
- o que você faz com ele: Tiny não tem fuga própria antes do Blink (15,9 min); Entangle prende ele parado e o urso junto com Savage Roar fecham o combo; Entangle é dano mágico (90/s), então a armadura que ele ganha com Grow não ajuda contra ele.
- itens que viram: seu Black King Bar bloqueia o stun do Avalanche; Aghanim's Scepter no urso evita que um Toss bem lançado quebre a sinergia Druid-urso de vez, já que o urso age independente mesmo jogado longe.
- como jogar: não ande colado demais com o urso perto de um Tiny com Blink pronto, ele pode te separar com um Toss bem lançado. Depois do seu Scepter, divida o farm, ele não acompanha seu GPM se vocês não brigarem.
- fonte: pro_dados/lone_druid.json; pro_dados/tiny.json; constants_abilities.json (tiny_toss, tiny_avalanche, tiny_grow).

## Contra Pangolier (pangolier)
- placar: Lone Druid venceu 39 de 62 partidas pro (62,9%). Quinto maior volume de jogos pro da base.
- por que importa: quinto maior volume de jogos pro (62), 2/3 de alta mobilidade que não divide lane mas aparece o jogo todo por causa de Rolling Thunder.
- janelas: desde o nível 6 (Rolling Thunder, mesma janela do seu True Form, 7-8 min) ele já tem uma bola imune a debuff que atravessa o mapa; seu Maelstrom (12,1 min) chega antes do Blink dele (19,2 min), você farma mais rápido nessa janela; o Aghanim's Shard dele (23,2 min) e o seu (24,5 min) saem quase juntos, logo depois do Ultimate Scepter dele (24,9 min) e do seu (21,7 min no urso).
- o que ele faz com você: Rolling Thunder dá 80% de resistência mágica e imunidade a debuff por até 12 s rolando pelo mapa, atropelando quem estiver no caminho com stun de 1,2 s; Swashbuckle dá um dash com dano em linha que soma com Lucky Shot. Com o shard dele, Rolling Thunder ainda consegue lançar Shield Crash e o próprio Rolling Thunder durante a rolagem.
- o que você faz com ele: fora da bola, Pangolier tem vida de agilidade comum; Entangle (atravessa BKB) e o dano fixo do urso punem ele se parar pra atacar fora do Rolling Thunder, já que a imunidade a debuff e a resistência mágica só valem durante a rolagem.
- itens que viram: seu Black King Bar bloqueia o stun do Rolling Thunder quando a bola te atropela, porque a habilidade não atravessa imunidade a debuff; mesmo assim, o foco real continua sendo evitar ficar no caminho da rolagem e punir ele fora dela, já que dentro da bola ele tem 80% de resistência mágica.
- como jogar: não brigue contra a bola, ela é imune a debuff; espere ele saltar fora do Rolling Thunder pra puxar Entangle e fechar com o urso.
- fonte: pro_dados/lone_druid.json; pro_dados/pangolier.json; constants_abilities.json (pangolier_gyroshell, pangolier_swashbuckle); aghs_desc (Pangolier).

## Contra Ember Spirit (ember_spirit)
- placar: Lone Druid venceu 35 de 60 partidas pro (58,3%). Sexto maior volume de jogos pro da base, empatado com Underlord.
- por que importa: mid de alta mobilidade com maior volume de jogos pro empatado na base (60), ameaça matar o Druid isolado rápido com Sleight of Fist.
- janelas: desde o nível 6 (Sleight of Fist, 7-8 min) ele já tem um combo de burst que ataca tudo num raio ao redor; seu Maelstrom (12,1 min) chega bem antes do Black King Bar dele (27,1 min, pro_dados/ember_spirit.json), você farma e empurra livre nessa janela; depois dos 25-31 min os dois aghs saem (seu shard 24,5 min, dele 25,3 min, scepter dele 31,6 min), aí o jogo vira corrida de farm porque ele melhora o próprio clear com o remnant.
- o que ele faz com você: Sleight of Fist teleporta e ataca todos os inimigos num raio (até 550 no nível 4) voltando ao ponto de partida, dano extra contra heróis; pego sozinho, o Druid (pouca vida fixa) morre rápido nesse combo; Searing Chains prende em área por até 2,75 s enquanto o combo acontece.
- o que você faz com ele: Ember Spirit tem vida de agilidade baixa; Entangle (atravessa BKB) prende ele parado, e sem o Fire Remnant pronto (recarga alta sem itens) ele não escapa fácil do urso.
- itens que viram: seu Black King Bar (33,0 min) bloqueia o Searing Chains; Aghanim's Shard dele (remnant extra a cada herói que morre perto) estica o jogo tardio dele, então fechar antes dos 30 min favorece você.
- como jogar: não deixe o Druid andar sozinho sem visão perto de um Ember Spirit com Remnant pronto. Depois do seu Mjollnir, puxe ele pra perto do urso com Entangle antes que ele combine o Sleight of Fist.
- fonte: pro_dados/lone_druid.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_sleight_of_fist, ember_spirit_searing_chains); aghs_desc (Ember Spirit).

## Contra Underlord (abyssal_underlord)
- placar: Lone Druid venceu 40 de 60 partidas pro (66,7%). Maior vantagem do Lone Druid entre os oponentes com alto volume de jogos (empatado em jogos com Ember Spirit).
- por que importa: offlane 3 com empate no maior volume de jogos pro da base (60) e, apesar de ter uma habilidade pensada contra right-click pesado (Atrophy Aura), é onde o LD mais vence em volume alto.
- janelas: Underlord farma devagar no começo (Soul Ring 7,2 min, Vanguard 13,4 min, pro_dados/abyssal_underlord.json) enquanto seu Maelstrom (12,1 min) já libera o jungle; dos 17 aos 24 min ele monta Pipe (17,5 min) e Scepter (23,9 min) pra fase de grupo, mas seu Scepter no urso (21,7 min) já separa o farm antes disso; depois dos 24 min o Shard dele (21,8 min) e o seu (24,5 min) saem quase juntos.
- o que ele faz com você: Atrophy Aura reduz o dano base de quem está a até 900 de distância em até 32% no nível 4, mira direto no ataque básico do urso, que é a maior fatia do seu DPS; Pit of Malice prende e dá dano de intervalo em quem entra na área, raio 400; Firestorm empurra lane e camp de longe.
- o que você faz com ele: Underlord tem pouca mobilidade própria sem o Scepter (Fiend's Gate); Entangle (atravessa BKB) prende ele e o urso fecha mesmo com a aura ligada, porque o Entangle é dano mágico fixo (90/s), não afetado pela redução de dano base física da aura.
- itens que viram: seu Black King Bar não remove a Atrophy Aura (ela não é um debuff dispelável no sentido de disable, é redução de dano passiva por proximidade); a resposta real é não ficar dentro do raio de 900 em fights longas, se afastar reduz o impacto da aura no urso.
- como jogar: não force troca parado dentro da Atrophy Aura por muito tempo; prefira entrar, bater rápido com Entangle + Savage Roar e saltar fora do raio.
- fonte: pro_dados/lone_druid.json; pro_dados/abyssal_underlord.json; constants_abilities.json (abyssal_underlord_atrophy_aura, abyssal_underlord_pit_of_malice); aghs_desc (Underlord).

## Contra Windranger (windrunner)
- placar: Lone Druid venceu 35 de 56 partidas pro (62,5%). Carry/suporte mais comum contra o Lone Druid depois de Tiny.
- por que importa: segundo carry mais jogado em pro contra o LD (56 jogos) e o único da lista que compete pelo mesmo item de clear (Maelstrom/Mjollnir), mesmo quase nunca dividindo lane.
- janelas: os dois sobem o mesmo item de farm quase junto (Maelstrom dela 13,4 min contra o seu 12,1 min, Mjollnir dela 18,3 min contra o seu 16,5 min, pro_dados/windrunner.json e pro_dados/lone_druid.json), então até os 18 min é corrida de clear pura; Black King Bar dela (24,4 min) chega antes do seu (33,0 min), dando uma janela dela pra forçar troca sem medo do seu disable entre 24 e 33 min.
- o que ela faz com você: Shackleshot prende em árvore ou unidade numa linha, cast range 800, boa pra travar o urso ou o Druid numa emboscada; Windrun dá evasão total a ataques físicos por até 6 s, mas não impede dano mágico; Focus Fire dá velocidade de ataque alta contra um alvo único, útil pra tentar derrubar o urso rápido se ela tiver o item certo.
- o que você faz com ele: a evasão do Windrun não segura o chain lightning do seu Maelstrom/Mjollnir, que ignora evasão (items.json: maelstrom/mjollnir, "lightning proc pierces evasion"); Entangle (atravessa BKB) prende ela parado, e ela tem vida baixa fixa.
- itens que viram: seu Black King Bar bloqueia o Shackleshot; o Aghanim's Scepter dela (Tailwind dura mais e fica não dispelável) sobe a velocidade de movimento dela no jogo tardio, mas não resolve o problema do chain lightning atravessar a evasão.
- como jogar: não conte com o Windrun pra sobreviver ao seu Mjollnir, ele acerta igual; cuidado com Shackleshot perto de árvore antes dos 10 min, é a abertura clássica dela pra gank.
- fonte: pro_dados/lone_druid.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_windrun, windrunner_focusfire); items.json (maelstrom/mjollnir); aghs_desc (Windranger).

## Contra Luna (luna)
- placar: Lone Druid venceu 27 de 44 partidas pro (61,4%). Segundo carry (posição 1) mais jogado em pro contra o Lone Druid.
- por que importa: segundo carry puro mais comum contra o LD em pro (44 jogos), exatamente o tipo de duelo "carry contra carry sem lane em comum" que importa de verdade: os dois são farmadores de right-click que raramente se cruzam antes do meio-jogo.
- janelas: Luna tem GPM alto (695 contra os seus 685, pro_dados/luna.json e pro_dados/lone_druid.json) e sobe Manta Style aos 17,2 min, pouco depois do seu Scepter no urso (21,7 min, mas seu Mjollnir já está pronto aos 16,5); até os 17 min o farm é bem parelho, dos 17 aos 26 min (Butterfly dela, 26,1 min) ela ganha evasão, mas seu chain lightning ignora isso; depois dos 26 min a corrida de farm final decide, e seu Shard (24,5 min) dá velocidade de ataque extra pro time nessa fase.
- o que ela faz com você: Lucent Beam atordoa 0,6 s e dá dano de longe, boa pra abrir combo contra o Druid isolado; Moon Glaives faz o ataque dela ricochetear entre inimigos próximos, útil se Druid e urso estiverem colados numa luta de grupo; Eclipse à noite chove feixes aleatórios e pode acertar os dois ao mesmo tempo.
- o que você faz com ele: Entangle (atravessa BKB) prende ela parada; a evasão do Butterfly dela (35%) não segura o chain lightning do seu Maelstrom/Mjollnir, que ignora evasão (texto oficial do item).
- itens que viram: Butterfly dela entra tarde (26,1 min) especificamente pra tentar escapar de ataque físico, mas não resolve contra o chain lightning; o Black King Bar dela (25,5 min, em 42% dos jogos pro, pro_dados/luna.json) costuma sair antes do seu (33,0 min), então ela consegue abrir luta sem medo do seu Entangle nessa janela.
- como jogar: trate como corrida de farm até os 20 min, não gaste recurso tentando forçar fight antes disso; depois, puxe ela com Entangle antes que o Eclipse dela caia de noite.
- fonte: pro_dados/lone_druid.json; pro_dados/luna.json; constants_abilities.json (luna_lucent_beam, luna_moon_glaive, luna_eclipse); items.json (maelstrom/mjollnir, chain lightning ignora evasão).

## Contra Monkey King (monkey_king)
- placar: Lone Druid venceu 31 de 40 partidas pro (77,5%). Maior vantagem do Lone Druid em toda a base com volume relevante (40 jogos, acima do corte de 30).
- por que importa: o carry pos. 1 com a maior vantagem pro do Lone Druid (77,5%) mesmo sem lane em comum; os dois são carries de farm rápido e splitpush, então o motivo de aparecer tanto em pro contra o LD é o estilo parecido, não a lane.
- janelas: Monkey King sobe Power Treads rápido (6,0 min, pro_dados/monkey_king.json) e Mithril Hammer (18,8 min) antes do Black King Bar (24,9 min); seu Maelstrom (12,1 min) e Mjollnir (16,5 min) chegam bem antes do primeiro item de dano fechado dele (Desolator, 18,3 min), você sai na frente na corrida de clear; depois dos 21-25 min (seu Scepter 21,7 min contra o BKB dele 24,9 min) você já consegue separar o urso pra farmar em dois lugares enquanto ele ainda está montando o combo.
- o que ele faz com você: Boundless Strike atordoa em linha (cast range 1100, True Strike, então não erra nem com evasão) e dá dano crítico bônus baseado no ataque dele; Wukong's Command cria soldados que só atacam heróis e dão armadura bônus pra ele, forte em teamfight de grupo contra Druid e urso juntos.
- o que você faz com ele: Entangle (atravessa BKB) prende ele parado antes do combo dele sair; Monkey King tem pouca sobrevivência própria fora do Wukong's Command e do Aghanim's Shard (Primal Spring no fim do Boundless Strike), então ele depende de pegar vocês primeiro.
- itens que viram: seu Black King Bar bloqueia o stun do Boundless Strike; Aghanim's Scepter no urso ajuda a dividir farm contra o estilo de splitpush dele, que é parecido com o seu.
- como jogar: trate como duelo de farm, não de lane; puxe ele pro combate só quando tiver Entangle e Mjollnir prontos, porque o Boundless Strike dele acerta igual mesmo com evasão.
- fonte: pro_dados/lone_druid.json; pro_dados/monkey_king.json; constants_abilities.json (monkey_king_boundless_strike, monkey_king_wukongs_command); aghs_desc (Monkey King).

## Contra Tidehunter (tidehunter)
- placar: Lone Druid venceu 39 de 51 partidas pro (76,5%). Segunda maior vantagem do Lone Druid com volume relevante.
- por que importa: offlane 3 clássico, segunda maior vantagem pro do LD (76,5% em 51 jogos) mesmo tendo duas ferramentas pensadas contra ele: Ravage (stun de grupo) e Kraken Shell (dispel forte).
- janelas: Tidehunter sobe devagar (Soul Ring 8,5 min, Blink 21,2 min, pro_dados/tidehunter.json) enquanto seu Maelstrom (12,1 min) e Mjollnir (16,5 min) já estão liberando jungle e ancient; o Ravage dele (nível 6, 7-8 min) é uma ameaça de grupo desde cedo, mas sem Blink ele precisa chegar a pé até os 21,2 min; depois dos 22-24 min (Scepter dele 22,3 min contra o seu 21,7 min) os dois já conseguem agir mais livres, só que você chega primeiro.
- o que ele faz com você: Ravage atordoa em raio de 1250 ao redor dele por até 2,4 s, pode travar Druid e urso juntos numa luta de grupo; Kraken Shell dispela (dispel forte) qualquer debuff dispelável quando ele leva 450 a 600 de dano acumulado em 7 s, isso remove o medo do seu Savage Roar (dispellable: yes) dele, mas não remove o Entangle (dispellable: no, constants_abilities.json).
- o que você faz com ele: Entangle atravessa BKB e não é removido pelo Kraken Shell dele, então ele fica preso mesmo que o Kraken limpe o resto; o urso melee bate forte nele porque Kraken Shell bloqueia valor fixo de dano por ataque, não percentual, então dano maior por hit (crítico, Mjollnir) ainda passa a maior parte.
- itens que viram: seu Mjollnir (crítico de dano por ataque em 12 alvos) reduz o valor relativo do bloqueio fixo do Kraken Shell; Aghanim's Shard dele (Dead in the Water) ameaça perseguir o Druid isolado se ele se afastar do urso.
- como jogar: não gaste Savage Roar nele achando que o medo vai durar, o Kraken Shell dispela; prenda com Entangle, que ele não limpa, e deixe o urso bater.
- fonte: pro_dados/lone_druid.json; pro_dados/tidehunter.json; constants_abilities.json (tidehunter_ravage, tidehunter_kraken_shell, lone_druid_entangle, lone_druid_savage_roar); aghs_desc (Tidehunter).

## Contra Puck (puck)
- placar: Lone Druid venceu 27 de 36 partidas pro (75,0%). Terceira maior vantagem do Lone Druid com volume relevante.
- por que importa: mid de controle e reposicionamento, terceira maior vantagem pro do LD (75% em 36 jogos); Dream Coil ameaça prender Druid e urso juntos numa luta de grupo.
- janelas: Puck sobe Blink inato desde o início (Phase Shift) e o Blink Dagger item sai aos 17,6 min (pro_dados/puck.json), perto do seu Mjollnir (16,5 min); até aí o farm é parelho, mas o Dream Coil dele já ameaça desde o nível 6; depois dos 22-25 min, com Aghanim's Shard dele (22,5 min) e o seu Shadow Blade (26,2 min), a visão voadora que a Illusory Orb deixa no rastro ajuda ele a localizar a rota de ataque, mesmo sem detectar invisibilidade.
- o que ele faz com você: Dream Coil prende heróis próximos num raio de 375 com stun inicial de 0,5 s e até 325 de dano; se o alvo tentar se afastar e estourar o elo, leva stun extra de até 2,5 s e mais até 400 de dano, forte se pegar Druid e urso esticados juntos; Illusory Orb viaja em linha e dá visão voadora no caminho, mas não tem detecção verdadeira, então não enxerga o urso se ele estiver invisível; Phase Shift dá imunidade total por até 3,25 s pra ele escapar de qualquer combo seu.
- o que você faz com ele: Entangle (atravessa BKB) prende ele parado, já que ele não tem disable de longo alcance contra o urso fora do Dream Coil; Puck tem vida de inteligência baixa, então o dano fixo do urso rende bem se ele ficar perto.
- itens que viram: seu Black King Bar bloqueia o stun do Dream Coil quando ele estica; a Illusory Orb não detecta invisibilidade, então Shadow Blade e Silver Edge no urso continuam funcionando contra ele, o risco real é só cruzar a rota visível da orb.
- como jogar: evite cruzar a rota da Illusory Orb enquanto ela ainda dá visão, não por causa de invisibilidade; prenda ele com Entangle antes que o Dream Coil feche em você e no urso juntos.
- fonte: pro_dados/lone_druid.json; pro_dados/puck.json; constants_abilities.json (puck_dream_coil, puck_illusory_orb, puck_phase_shift).

## Contra Keeper of the Light (keeper_of_the_light)
- placar: Lone Druid venceu 23 de 47 partidas pro (48,9%). Pior resultado do Lone Druid entre todos os oponentes com volume relevante (30+ jogos) da base.
- por que importa: é o único oponente com volume alto (47 jogos) onde o LD não tem vantagem clara, fica praticamente 50/50; Illuminate de longo alcance ameaça Druid e urso justamente porque os dois costumam ficar colados.
- janelas: Keeper of the Light sobe devagar em item (Travel Boots 14,8 min, Force Staff 22,4 min, pro_dados/keeper_of_the_light.json), mas o poder dele é de nível e mana, não de item; o Spirit Form (nível 6, 7-8 min) já estende o alcance do Illuminate e permite canalizar por um espírito separado; dos 14 aos 22 min, mesmo com seu Mjollnir (16,5 min) e Scepter (21,7 min) prontos, um Illuminate bem carregado ainda ameaça acertar os dois se vocês ficarem na mesma linha.
- o que ele faz com você: Illuminate é canalizado, quanto mais tempo carrega mais dano faz numa faixa de 400 de largura até 1800 de alcance, e com Spirit Form o alcance de conjuração aumenta e um espírito separado pode canalizar por ele; se Druid e urso estiverem alinhados, o dano dobra de impacto.
- o que você faz com ele: Illuminate é canalizado, então qualquer disável interrompe; Entangle (cast range 700) alcança ele a distância e cancela o canal antes do estouro; Keeper tem vida de inteligência baixa e nenhuma fuga própria rápida fora do Blink Dagger de item.
- itens que viram: seu Black King Bar não ajuda aqui (Illuminate não é disable, é dano), a resposta é posicionamento: não ficar alinhado com o urso numa faixa reta quando ele estiver carregando; Entangle interrompe o canal, então é a ferramenta real contra ele.
- como jogar: separe Druid e urso em lane quando ele estiver de Illuminate pronto, não dê o alvo de dois-por-um; se ele começar a carregar, use Entangle pra cancelar antes do estouro.
- fonte: pro_dados/lone_druid.json; pro_dados/keeper_of_the_light.json; constants_abilities.json (keeper_of_the_light_illuminate, keeper_of_the_light_spirit_form, lone_druid_entangle).

## Contra Necrophos (necrolyte)
- placar: Lone Druid venceu 18 de 36 partidas pro (50,0%, equilibrado). Segundo pior resultado do Lone Druid com volume relevante da base.
- por que importa: segundo oponente mais equilibrado da lista (exatos 50% em 36 jogos); a Heartstopper Aura cobra percentual da vida máxima do urso, que é justamente a maior vida fixa da base, então o que deveria ser vantagem do LD (HP alto) vira alvo maior pra aura.
- janelas: Necrophos sobe Radiance rápido (13,7 min, pro_dados/necrolyte.json), quase junto do seu Maelstrom (12,1 min); dos 13 aos 18 min os dois têm dano de área passivo ligado (Radiance dele, chain lightning seu), vira troca de quem aguenta mais a queima; o Aghanim's Shard dele sai cedo pra esse tipo de item (17,8 min) e melhora o Death Seeker; depois dos 25-27 min (seu Shadow Blade 26,2 min contra o Black King Bar dele 27,5 min) a corrida de burst final decide.
- o que ele faz com você: Heartstopper Aura (raio 700) tira de 0,8% a 2,3% da vida máxima por tick de quem está perto, e como o urso tem a maior vida fixa da base (1500 de base mais crescimento por nível), sofre em termos absolutos mais do que qualquer outro alvo da aura; Reaper's Scythe atordoa e depois soma dano proporcional à vida que falta no alvo, ameaça executar o Druid se a vida dele estiver baixa.
- o que você faz com ele: Necrophos tem vida de inteligência baixa; Entangle (atravessa BKB) prende ele parado antes do combo de Reaper's Scythe saber; Spirit Link (lifesteal compartilhado) ajuda a repor parte do dano da Heartstopper Aura enquanto o urso ataca.
- itens que viram: seu Black King Bar bloqueia o stun do Reaper's Scythe; a Heartstopper Aura não é bloqueada por BKB (é dano contínuo, não disable), então a resposta real é não ficar parado dentro do raio de 700 por muito tempo.
- como jogar: não brigue parado dentro da aura dele por tempo demais, o percentual pesa mais no urso do que em qualquer outro herói; prenda ele com Entangle antes que a vida do Druid caia o bastante pro Reaper's Scythe executar.
- fonte: pro_dados/lone_druid.json; pro_dados/necrolyte.json; constants_abilities.json (necrolyte_heartstopper_aura, necrolyte_reapers_scythe, lone_druid_spirit_link).

## Contra Alchemist (alchemist)
- placar: Lone Druid venceu 20 de 32 partidas pro (62,5%). Carry de farm puro escolhido mesmo sem dividir lane, porque é exatamente o tipo de confronto que decide no GPM, não na lane.
- por que importa: Alchemist e Lone Druid raramente se cruzam na lane (Alchemist joga jungle com Chemical Rage, LD joga safelane com o urso), mas os dois são dos maiores farmadores entre os oponentes desta lista: Alchemist tem o maior GPM (768) e o LD vem logo atrás de Luna, em terceiro (685 contra 695 dela, pro_dados/alchemist.json e pro_dados/lone_druid.json). É o duelo "carry contra carry sem lane em comum" que decide pelo item, não pela habilidade.
- janelas: até o nível 6 (Chemical Rage, 7-8 min dos dois lados) o farm é parecido; dali até o Radiance dele (13,9 min) ele dispara na frente em GPM puro, mas seu Maelstrom (12,1 min) e Mjollnir (16,5 min) liberam camps grandes e ancient antes do Scepter dele (22,4 min); dos 22 aos 25 min os dois Scepters saem quase juntos (seu no urso 21,7 min, o dele 22,4 min) e o jogo vira corrida de quem fecha a vantagem de farm em dano de luta primeiro.
- o que ele faz com você: Unstable Concoction carrega até 5 s e acerta a até 775 de distância com até 360 de dano e stun crescente, ameaça abrir luta contra o Druid isolado; Acid Spray reduz a armadura física do urso em área, o que ajuda o resto do time dele a estourar o pouco de resistência física que falta.
- o que você faz com ele: Entangle (atravessa BKB) prende ele parado antes do combo de time fechar; Alchemist tem vida de força alta, mas sem Chemical Rage ativo ele não tem fuga própria, então pego sem o buff ligado ele morre rápido pro urso.
- itens que viram: Aghanim's Shard dele (Berserk Potion, dispel + buffs pra um aliado) sai tarde no build (31,7 min), então não entra na janela decisiva do meio-jogo; seu Black King Bar (33,0 min) chega antes, dando imunidade antes de qualquer combo dele em grupo.
- como jogar: trate como corrida de farm até os 20 min, não gaste recurso tentando iniciar luta cedo; depois do seu Mjollnir, puxe ele com Entangle se ele aparecer sem o Chemical Rage pronto.
- fonte: pro_dados/lone_druid.json; pro_dados/alchemist.json; constants_abilities.json (alchemist_unstable_concoction, alchemist_acid_spray, alchemist_chemical_rage); aghs_desc (Alchemist).
