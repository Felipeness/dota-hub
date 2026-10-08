---
id: confrontos-treant
heroi: Treant Protector
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/treant.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/shredder.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/warlock.json
- dota-hub-conteudo-novo/pro_dados/invoker.json
- dota-hub-conteudo-novo/pro_dados/gyrocopter.json
- dota-hub-conteudo-novo/pro_dados/spirit_breaker.json
- dota-hub-conteudo-novo/pro_dados/huskar.json
- dota-hub-conteudo-novo/pro_dados/enchantress.json
- dota-hub-conteudo-novo/pro_dados/crystal_maiden.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Por que esses 14 oponentes

Treant tem gpm mediano de 301 e lh10 de 7 em partidas pro 7.40-7.41 (pro_dados/treant.json), perfil econômico de suporte de baixa prioridade de farm, não de carry. Isso muda o critério 4 do pedido: ele não é carry, então em vez de "carries que não cruzam lane" eu troquei pelo equivalente do suporte, heróis que também raramente trocam golpe direto com ele na lane mas decidem se o time dele consegue pegar o fight certo. Três dos quatro critérios já cobrem isso naturalmente, porque os carries mais jogados contra ele em pro (Tiny, Shadow Fiend, Gyrocopter) entram pelos critérios 1 e 3, exatamente o caso "dois papéis que não se cruzam mas o power spike de um decide o do outro" que o pedido original deu como exemplo com Alchemist e Morphling.

Critério 1, mais jogos de pro contra ele (pro_dados/treant.json, campo confrontos): Tusk, Shadow Fiend, Tiny, Timbersaw, Hoodwink e Jakiro são os 6 com mais partidas.

Critério 2, mesma função (suporte duro/roamer de área) com volume alto em pro: Rubick e Warlock, além de Hoodwink e Jakiro que já entraram pelo critério 1.

Critério 3, maior vantagem e maior desvantagem medidas, só com 30+ jogos: Invoker (74,0%) e Gyrocopter (73,2%) são as duas maiores vantagens de toda a base de confrontos do Treant; Huskar (44,4%), Enchantress (46,7%) e Crystal Maiden (46,7%) do lado ruim, essas sim as 3 maiores desvantagens com 30+ jogos.

Critério 4 adaptado, carries de pro que não lanam com ele mas definem se o fight dele funciona: Tiny e Shadow Fiend (ambos pos 1/2 de farm rápido, sem trilane com o Treant na maioria dos drafts) já entraram pelo critério 1, e Gyrocopter entra pelo critério 3. Os três aparecem porque o Overgrowth só muda o jogo se pegar o carry certo antes dele crescer, o resto é lane e wave, não confronto direto.

Spirit Breaker entra fora dos quatro critérios numéricos: com 58 jogos de pro ele não está entre os 6 com mais partidas nem entre os 3 de maior vantagem (70,7% é a 7ª maior vantagem com 30+ jogos da base, atrás de quatro heróis fora da lista de 14). A inclusão é por mecânica, não por ranking: as três ferramentas do kit dele (Charge of Darkness, Greater Bash, Nether Strike) são as três coisas exatas que o Overgrowth bloqueia (mover, atacar, usar blink), o que faz dele o confronto mais didático da lista pra explicar o que a ultimate do Treant faz.

## Contra Tusk (tusk)
- placar: Treant venceu 120 de 178 partidas de pro (67,4%), fonte: pro_dados/treant.json (OpenDota /heroes/83/matchups).
- por que importa: é o confronto com mais jogos de pro contra ele, e os dois disputam o mesmo nicho, suporte que inicia em área (pos 4 ou pos 5) carregando o time pro meio do grupo inimigo.
- janelas: até os 12 min os dois só plantam ward e seguram lane, nenhum tem ameaça de kill isolada (Leech Seed nível 1 só desarma raiz curta, Ice Shards do Tusk já ameaça de longe mas sem o resto do combo). Dos 15 aos 21 min o Tusk chega primeiro: Blink Dagger dele sai mediano em 19:00 (2.655 jogos, pro_dados/tusk.json), contra o Blink do Treant só aos 26:24 (889 jogos, pro_dados/treant.json). Nessa janela o Tusk ataca primeiro se os dois já tiverem nível 6. Depois dos 23-26 min os dois já têm Blink e a luta vira quem pega o grupo inimigo primeiro, com o Overgrowth tendo a vantagem de também travar o próprio combo do Tusk.
- o que ele faz com você: Ice Shards (1.400 de alcance, não atravessa BKB) zona ou separa o Treant antes dele chegar perto; Snowball pega a unidade mais próxima num raio de 325, inclusive o próprio Treant, e pode te lançar direto pro meio do time dele; Walrus Punch (atravessa BKB) é um crítico pesado se o Tusk chegar no corpo a corpo.
- o que você faz com ele: Leech Seed (não atravessa BKB) raiz e desarma o Tusk antes dele rolar a Snowball ou acertar o Walrus Punch; Overgrowth (atravessa BKB, 800 de raio) impede o Tusk de se mover, atacar ou usar blink, ou seja, se ele já estiver dentro do raio ele não consegue nem começar a Snowball nem acertar o Punch, só o Ice Shards continua funcionando porque é feitiço, não movimento nem ataque.
- itens que viram: Eul's Scepter do Tusk (mediano 28:54, pro_dados/tusk.json) isola o Treant antes do combo dele fechar; Blink Dagger dos dois decide quem inicia primeiro; Force Staff do Treant tira ele do raio de pegada da Snowball antes dela sair.
- como jogar: na lane, não ande sozinho perto de árvore sem ward depois que o Tusk tiver nível 6, porque o combo dele fecha mais cedo que o seu; a partir dos 23-26 min, espere o Tusk se comprometer com a Snowball ou o Walrus Punch pra só então travar o grupo com Overgrowth, porque pegá-lo antes dele atacar nega o combo inteiro dele de uma vez.
- fonte: pro_dados/treant.json; pro_dados/tusk.json; constants_abilities.json (tusk_ice_shards, tusk_snowball, tusk_walrus_punch, treant_leech_seed, treant_overgrowth)

## Contra Shadow Fiend (nevermore)
- placar: Treant venceu 93 de 176 partidas de pro (52,8%), fonte: pro_dados/treant.json.
- por que importa: é o 2º confronto com mais jogos de pro contra ele, um mid farmador clássico que o time do Treant precisa travar antes dele crescer, mesmo sem trocar golpe direto de lane com ele.
- janelas: até os 14 min o Shadow Fiend farma livre, sem pressão do Treant: lh10 de 78 (pro_dados/nevermore.json, resumo) contra 7 do Treant. Power Treads sai aos 5:54 e Mask of Madness aos 10:12 (pro_dados/nevermore.json), então ele já está puxando jungle e rota sozinho enquanto o Treant ainda está em Arcane Boots (12:00, pro_dados/treant.json). Dos 18 aos 25 min o Shadow Fiend fecha o Black King Bar (mediano 25:12), e a partir daí o Leech Seed do Treant (não atravessa BKB) para de funcionar nele; o Overgrowth (atravessa BKB) continua valendo. Depois dos 26 min, se o time do Treant pegar o Shadow Fiend isolado com Overgrowth antes do Requiem, ele morre sem conseguir fugir, mas o Requiem ainda sai porque é lançado automaticamente até na morte dele.
- o que ele faz com você: o combo de 3 Shadowraze cobra qualquer um que ande perto da lane sem visão; Requiem of Souls dispara mesmo que o Shadow Fiend morra no meio do Overgrowth, porque a habilidade ativa sozinha na morte dele (constants_abilities.json, nevermore_requiem), então matar ele dentro do raio do Treant ainda machuca quem estiver perto.
- o que você faz com ele: Overgrowth trava o Shadow Fiend pra não fugir nem atacar, mas não impede o Requiem porque é feitiço "No Target", a vantagem real é negar a fuga dele, não o dano; Leech Seed desarma e corta o farm dele em escaramuça, mas só enquanto ele não tiver BKB.
- itens que viram: Black King Bar do Shadow Fiend (25:12) anula o Leech Seed na hora, sem efeito sobre o Overgrowth; Blink Dagger do Treant é o que permite pegar o Shadow Fiend antes do BKB estar pronto, depois disso só o time inteiro junto resolve.
- como jogar: antes dos 20 min, evite engajar sozinho, o farm dele é rápido demais pra punir sem apoio; depois que ele fechar BKB, pegue-o só em grupo com Overgrowth e já espere o Requiem bater em quem estiver perto, não tente kill solo colado nele.
- fonte: pro_dados/treant.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_requiem, treant_overgrowth, treant_leech_seed)

## Contra Tiny (tiny)
- placar: Treant venceu 103 de 171 partidas de pro (60,2%), fonte: pro_dados/treant.json.
- por que importa: é o 3º confronto com mais jogos de pro, um carry de força que nunca troca lane com o Treant mas decide o jogo no meio, exatamente o caso "dois papéis sem lane em comum, mas power spike de um contra o outro" que motivou este pedido.
- janelas: Tiny monta Power Treads cedo (6:06, pro_dados/tiny.json) e já ameaça combo Avalanche+Toss desde o nível 6, bem antes do Treant ter Blink (26:24). Echo Sabre fecha aos 12:06 e Shadow Blade aos 17:36, então dos 12 aos 20 min o Tiny já farma e ganka sozinho enquanto o Treant ainda está montando Arcane Boots e Aghanim's Shard (19:00). Depois dos 23-26 min, quando o Treant finalmente tem Blink, o Tiny já está perto do Black King Bar (26:42), e aí a luta vira quem consegue travar o grupo primeiro antes do outro lado reagir.
- o que ele faz com você: Avalanche (AOE, não atravessa BKB) seguido de Toss explode qualquer herói isolado perto; Craggy Exterior empilha um debuff de dano nele a cada ataque recebido, então cada autoataque do Treant (pra procar Leech Seed) deixa o próprio Treant batendo mais fraco no resto da troca.
- o que você faz com ele: Leech Seed desarma o Tiny depois do combo Avalanche+Toss, cortando o autoataque que é boa parte do dano dele pós nível 16; Overgrowth trava o time dele inteiro, mas como Avalanche e Toss são feitiço, não ataque nem movimento, o Tiny ainda consegue soltar o combo mesmo preso, só não foge nem bate depois.
- itens que viram: Black King Bar do Tiny (26:42) anula o Leech Seed; Force Staff do Treant separa ele do alcance corpo a corpo do Tiny antes do Craggy Exterior empilhar; Solar Crest do Treant num aliado carry ajuda a trocar dano físico de volta contra o Grow do Tiny.
- como jogar: evite autoataque prolongado no Tiny por causa do Craggy Exterior, prefira Leech Seed e saia; espere o combo Avalanche+Toss dele acontecer antes de soltar Overgrowth, porque o root não impede o combo, só a fuga depois dele.
- fonte: pro_dados/treant.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_craggy_exterior, treant_overgrowth)

## Contra Timbersaw (shredder)
- placar: Treant venceu 95 de 160 partidas de pro (59,4%), fonte: pro_dados/treant.json.
- por que importa: é o 4º confronto com mais jogos de pro, um offlaner que escala só com atributo e sem item caro, o oposto do perfil de suporte do Treant.
- janelas: Timbersaw sobe rápido com Soul Ring (7:36) e Kaya (13:00), fechando Kaya and Sange aos 18:06 (pro_dados/shredder.json), já tanque e com spell amp antes do Treant ter Aghanim's Shard (19:00). Dos 18 aos 22 min o Timbersaw tá no pico de tankiness relativo pro ouro gasto; depois dos 22-25 min ele busca Platemail (25:30) ou Blink (22:30), enquanto o Treant só fica ameaçador de verdade com o próprio Blink aos 26:24.
- o que ele faz com você: Whirling Death é dano puro, ignora qualquer resistência do Treant, e ainda reduz a força dele por 11 a 14s, o que corta vida máxima e regen; Reactive Armor soma vida e armadura a cada ataque recebido, contando ataque de herói como 4x, então bater nele com Leech Seed o deixa mais tanque, não mais fraco.
- o que você faz com ele: Overgrowth trava o Timbersaw dentro do raio, e como Timber Chain puxa ele até uma árvore (um tipo de deslocamento forçado), fica sem efeito se ele já estiver preso pelo root, cortando o escape dele; Leech Seed desarma e corta parte do dano de ataque básico que ele soma ao Whirling Death.
- itens que viram: Kaya and Sange do Timbersaw (18:06) dá tankiness e dano mágico antes do Treant ter qualquer item de luxo; Blink Dagger do Treant é o que fecha a distância pra pegar o Timbersaw longe de árvore, onde o Timber Chain dele não alcança.
- como jogar: evite bater nele em troca prolongada de autoataque, cada acerto seu alimenta o Reactive Armor; priorize pegá-lo longe de árvore, sem alvo pro Timber Chain ele fica sem ferramenta de fuga depois que o Overgrowth prende.
- fonte: pro_dados/treant.json; pro_dados/shredder.json; constants_abilities.json (shredder_whirling_death, shredder_timber_chain, shredder_reactive_armor, treant_overgrowth)

## Contra Hoodwink (hoodwink)
- placar: Treant venceu 95 de 159 partidas de pro (59,7%), fonte: pro_dados/treant.json.
- por que importa: é o 5º confronto com mais jogos de pro e a mesma função, suporte duro ou roamer que trava com armadilha de área perto de árvore, só que o alcance dela é bem maior que o do Treant.
- janelas: até os 12 min os dois plantam ward e seguram lane com Arcane Boots parecidas (Hoodwink 12:12, Treant 12:00, pro_dados). Dos 16 aos 24 min a Hoodwink já ameaça de 1.100 de distância com Bushwhack perto de qualquer árvore, enquanto o Leech Seed do Treant só alcança 150, ele precisa chegar perto primeiro. O Aghanim's Shard da Hoodwink sai aos 23:48 (Hunter's Boomerang, poke a 1.100 de alcance), quase junto do Shard do Treant (19:00, mas que só dá visão de árvore, sem dano). O Blink do Treant (26:24) é o que finalmente fecha essa diferença de alcance.
- o que ele faz com você: Bushwhack estoura num raio de 265 perto de qualquer árvore e o Treant está sempre perto de uma (é o bioma dele), travando-o de 1.100 de distância antes dele chegar perto de ninguém; Sharpshooter acerta de até 3.000 de distância com dano alto e break, punindo overextend solo.
- o que você faz com ele: Overgrowth prende a Hoodwink e trava Scurry (a fuga dela, que é deslocamento e vira inútil preso) e Acorn Shot (que é ataque, também bloqueado); Leech Seed só funciona depois que o Treant já chegou perto, então é reativo, não trava o combo dela de longe.
- itens que viram: Aghanim's Shard da Hoodwink (Hunter's Boomerang) estende o poke dela além do alcance do Leech Seed; Blink Dagger do Treant é a única forma de fechar os 1.100 de alcance do Bushwhack num pulo só.
- como jogar: não ande perto de árvore sem ward contra Hoodwink depois que ela tiver nível 6, o alcance dela domina até você ter Blink; depois dos 23-26 min, use o Blink pra pegá-la antes dela recuar com Scurry, porque presa ela perde o acesso à própria fuga.
- fonte: pro_dados/treant.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_scurry, hoodwink_sharpshooter, treant_overgrowth)

## Contra Jakiro (jakiro)
- placar: Treant venceu 96 de 151 partidas de pro (63,6%), fonte: pro_dados/treant.json.
- por que importa: é o 6º confronto com mais jogos de pro e a mesma função, suporte duro de controle em área, mas o kit dele depende de ficar parado lançando, o oposto do Treant que precisa chegar perto.
- janelas: os dois abrem Arcane Boots quase junto (Jakiro 11:42, Treant 12:00). Dos 15 aos 22 min o Jakiro já ameaça Ice Path + Macropyre em área, um combo que não depende de alcance curto como o Leech Seed; Glimmer Cape dele sai aos 22:48, logo antes do Blink do Treant (26:24), fase em que o Treant já tem Pavise/Solar Crest prontos (20:30 e 23:42).
- o que ele faz com você: Ice Path estuna em área até 2s no nível 4 e Macropyre aplica 100 a 200 de dano por segundo por 10s, um combo que não é fácil de limpar (Macropyre nem é dispelável) e pode abrir uma luta antes do Treant conseguir chegar perto pra usar Leech Seed.
- o que você faz com ele: Overgrowth trava o time do Jakiro inteiro, inclusive ele, impedindo-o de reposicionar pra lançar Macropyre no ângulo certo; Leech Seed desarma o Jakiro, mas como ele não depende de autoataque pra fazer dano, o impacto real é baixo, o Overgrowth é a ferramenta que decide esse confronto.
- itens que viram: Black King Bar do Jakiro protege o combo Ice Path+Macropyre de ser cancelado, mas não impede o Overgrowth (atravessa BKB); Blink Dagger do Treant é o que permite pegar o Jakiro antes dele decidir onde lançar a ultimate.
- como jogar: não agrupe o time antes do Jakiro gastar Ice Path ou Macropyre, esses dois feitiços em área punem qualquer grupo parado; depois que ele gastar o combo, é a sua janela de entrar com Overgrowth sem medo do contra-combo dele.
- fonte: pro_dados/treant.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_macropyre, treant_overgrowth)

## Contra Rubick (rubick)
- placar: Treant venceu 73 de 140 partidas de pro (52,1%), fonte: pro_dados/treant.json.
- por que importa: é o 8º confronto com mais jogos de pro e a mesma função, suporte de roaming, com o detalhe de que o Rubick pode roubar o próprio Overgrowth do Treant com o Spell Steal.
- janelas: os dois constroem parecido até os 12 min (Arcane Boots: Rubick 10:18, Treant 12:00). O Blink do Rubick sai aos 21:36, antes do Blink do Treant (26:24), então ele costuma ter mobilidade primeiro. O Aghanim's Shard do Rubick (27:00) e o Ultimate Scepter (27:24) chegam bem depois do Shard do Treant (19:00), já perto do Blink do Treant.
- o que ele faz com você: Spell Steal (atravessa BKB) copia a última magia lançada pelo Treant, e como Overgrowth não é passiva nem item, se for o último cast dele o Rubick ganha a mesma trava de área pro time inimigo; Fade Bolt reduz o dano de ataque do Treant antes da troca, cortando o bônus de dano do Leech Seed; Telekinesis (não atravessa BKB) pode puxar o Treant pra fora do próprio time bem na hora que ele tentaria entrar com Overgrowth.
- o que você faz com ele: Overgrowth também trava o Rubick se ele estiver perto tentando puxar o Telekinesis, prendendo quem rouba antes dele reagir; como o Spell Steal tem recarga de 16 a 4s conforme o nível (constants_abilities.json, rubick_spell_steal), gastar Leech Seed ou Living Armor primeiro, e só soltar Overgrowth depois, nega o roubo porque o Rubick vai copiar o feitiço errado.
- itens que viram: Lotus Orb no Treant reflete a Telekinesis do Rubick de volta nele (feitiço de alvo único, não atravessa BKB); Aghanim's Scepter do Rubick deixa ele guardar 2 feitiços roubados ao mesmo tempo em vez de 1, o que aumenta a chance dele ainda ter o Overgrowth copiado guardado mesmo depois de roubar outra coisa.
- como jogar: gaste Leech Seed ou Living Armor antes de entrar na luta pra não deixar o Overgrowth como último cast disponível pro Spell Steal; se o Rubick já tiver copiado o Overgrowth, trate ele como prioridade de kill antes da próxima luta, porque ele carrega a mesma trava de área que você.
- fonte: pro_dados/treant.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis, rubick_fade_bolt, treant_overgrowth); https://api.opendota.com/api/constants/aghs_desc

## Contra Warlock (warlock)
- placar: Treant venceu 73 de 114 partidas de pro (64,0%), fonte: pro_dados/treant.json.
- por que importa: mesma função, suporte duro, e os dois carregam uma ultimate de controle de área que decide o fight de quem lança primeiro.
- janelas: os dois abrem Arcane Boots perto (Warlock 10:42, Treant 12:00). O Warlock monta Pavise (19:00) e Solar Crest (22:12) pra proteger aliado, parecido com o próprio Treant (Pavise 20:30, Solar Crest 23:42). Até o Treant fechar o próprio Blink (26:24), a luta é sobre quem lança a própria ultimate de área primeiro.
- o que ele faz com você: Chaotic Offering (atravessa BKB) estuna em área na chegada do Golem e pode travar o time do Treant antes dele soltar o próprio Overgrowth; Fatal Bonds liga o dano recebido entre vários alvos visíveis, então focar um aliado do Treant também machuca o resto do time dele.
- o que você faz com ele: Overgrowth também prende o Golem do Warlock como qualquer unidade inimiga, impedindo-o de atacar ou se mover por 3 a 5s, anulando o tanque de 60s dele pela duração do root.
- itens que viram: os dois lados correm pro Blink Dagger pra decidir quem lança a própria área primeiro; Force Staff de qualquer um dos lados desloca o alvo antes da ultimate do outro cair no lugar certo.
- como jogar: observe se o Warlock já gastou Chaotic Offering antes de agrupar o time, porque o stun do Golem cancela sua tentativa de Overgrowth; se pegar a luta primeiro, mire o Overgrowth pra prender o Golem junto, ele some da luta tanto quanto um herói.
- fonte: pro_dados/treant.json; pro_dados/warlock.json; constants_abilities.json (warlock_rain_of_chaos, warlock_fatal_bonds, treant_overgrowth)

## Contra Invoker (invoker)
- placar: Treant venceu 54 de 73 partidas de pro (74,0%), a maior vantagem da lista com 30+ jogos, fonte: pro_dados/treant.json.
- por que importa: é o confronto de maior vantagem do Treant com amostra confiável, um mid que nunca troca lane com ele mas cujo kit frágil combina mal com ser pego pelo time inteiro.
- janelas: Invoker já tem Null Talisman aos 2:24 e Meteor Hammer aos 10:36 (pro_dados/invoker.json), então ele domina o mapa com poke e controle de longa distância antes do Treant ter qualquer item. O Aghanim's Scepter dele sai aos 20:12 e o Shard aos 22:00 (pro_dados/invoker.json), bem antes do Blink do Treant (26:24). Isso significa que até os 26 min o Invoker ataca de longe sem risco real; depois disso, se o time do Treant conseguir fechar a distância com Overgrowth, o Invoker fica preso sem conseguir sair.
- o que ele faz com você: Sun Strike (atravessa BKB, dano puro, alcance global) pode acertar o Treant isolado puxando lane sem aviso; Deafening Blast desarma e empurra, negando o autoataque que procaria Leech Seed; o combo Tornado+EMP drena mana e estoura dano em quem for pego sozinho antes dos 20 min.
- o que você faz com ele: Overgrowth trava o Invoker e especificamente anula o Ghost Walk (a única fuga própria dele, porque é invisibilidade, e Overgrowth impede ficar invisível), então mesmo que ele continue lançando feitiço preso (nenhum deles é bloqueado pelo root), ele não tem como sair vivo sem ajuda do time.
- itens que viram: Linken's Sphere no Invoker bloqueia o Leech Seed de cara, porque é feitiço de alvo único; Black King Bar do Invoker não resolve o Overgrowth (atravessa BKB), só segura os outros disables do time do Treant; o Blink do Treant é o que permite alcançar um herói que normalmente luta à distância.
- como jogar: não force troca contra o Invoker isolado antes dos 20 min, o combo de longo alcance dele punga demais; depois que o time dele agrupar, use Overgrowth pra prender especificamente o Invoker, sem Ghost Walk ele não tem como escapar do resto do time.
- fonte: pro_dados/treant.json; pro_dados/invoker.json; constants_abilities.json (invoker_sun_strike, invoker_ghost_walk, invoker_deafening_blast, treant_overgrowth)

## Contra Gyrocopter (gyrocopter)
- placar: Treant venceu 52 de 71 partidas de pro (73,2%), 2ª maior vantagem com 30+ jogos, fonte: pro_dados/treant.json.
- por que importa: é o carry pos1 mais jogado contra o Treant dentro dos critérios de vantagem, sem lane em comum com ele, o caso clássico citado no pedido original, só que do lado do suporte.
- janelas: Gyrocopter monta rápido, Falcon Blade aos 5:18 e Power Treads aos 7:30 (pro_dados/gyrocopter.json), e já ameaça com Flak Cannon e Rocket Barrage desde cedo. O Aghanim's Scepter dele sai aos 18:30, dando o Side Gunner (ataque que atravessa BKB), bem antes do Blink do Treant (26:24). Depois dos 24 min ele já tem Black King Bar (24:36) pra proteger o combo de feitiço; o Daedalus sai aos 28:24 e o Satanic aos 30:42, então o pico de DPS físico dele chega quase junto do Blink do Treant.
- o que ele faz com você: Call Down bombardeia 3 vezes num raio de 400 com slow de 50%, machucando qualquer suporte agrupado tentando se posicionar pro Overgrowth; Homing Missile estuna de longe antes do Treant conseguir chegar perto.
- o que você faz com ele: Overgrowth impede o Gyrocopter de atacar, e como o dano físico principal dele (Flak Cannon e o Side Gunner do Scepter) depende de atacar, o carro-chefe de DPS dele desliga inteiro enquanto ele estiver preso, mesmo que Rocket Barrage e Call Down (feitiço, não ataque) ainda saiam.
- itens que viram: o Aghanim's Scepter do Gyrocopter (Side Gunner) também conta como ataque, então é silenciado pelo Overgrowth junto com o resto do kit físico dele; Blink Dagger do Treant é o que permite pegar o Gyrocopter numa luta antes dele descarregar Flak Cannon no grupo.
- como jogar: evite lutar contra Gyrocopter agrupado sem Overgrowth pronto, o Flak Cannon dele acerta todo mundo perto; priorize travá-lo especificamente com Overgrowth assim que ele entrar na luta, porque preso ele perde o próprio right-click, que é a maior parte do dano dele.
- fonte: pro_dados/treant.json; pro_dados/gyrocopter.json; constants_abilities.json (gyrocopter_flak_cannon, gyrocopter_call_down, treant_overgrowth)

## Contra Spirit Breaker (spirit_breaker)
- placar: Treant venceu 41 de 58 partidas de pro (70,7%), fonte: pro_dados/treant.json.
- por que importa: é o confronto mecanicamente mais limpo da lista, porque o Overgrowth bloqueia literalmente as três ferramentas do kit do Spirit Breaker ao mesmo tempo.
- janelas: Spirit Breaker monta Phase Boots aos 9:24 e já ameaça Charge of Darkness do mapa inteiro desde cedo. Drum of Endurance sai aos 17:24 (mais velocidade de movimento, que vira mais dano no Greater Bash, constants_abilities.json: spirit_breaker_greater_bash) e Shadow Blade aos 22:54, bem antes do Blink do Treant (26:24). Até os 26 min o Spirit Breaker ameaça iniciar de qualquer ponto do mapa; depois disso, se o Treant conseguir prendê-lo primeiro, o confronto vira praticamente só dele.
- o que ele faz com você: Charge of Darkness vem de qualquer distância do mapa e já causa um Greater Bash na chegada (dano como % da velocidade de movimento dele), pegando o Treant se ele for o alvo mais isolado; Greater Bash (atravessa BKB) estuna em cada ataque se o Spirit Breaker chegar primeiro no corpo a corpo.
- o que você faz com ele: Overgrowth bloqueia as três coisas que o Spirit Breaker precisa pra funcionar, Charge of Darkness é deslocamento, Greater Bash precisa de ataque, e Nether Strike é um blink, as três estão na lista exata do que o Overgrowth impede (mover, atacar, usar blink), então um Spirit Breaker pego dentro do raio fica sem nenhuma ferramenta.
- itens que viram: Phase Boots e Drum do Spirit Breaker só valem alguma coisa se ele puder se mover, perdem o efeito todo depois de preso; Black King Bar dele não resolve nada contra o Overgrowth (atravessa BKB); Blink Dagger do Treant é o que permite prender o Spirit Breaker antes da Charge dele conectar.
- como jogar: fique perto do time quando o Spirit Breaker estiver em jogo, Charge pega quem estiver isolado; se ele vier com Charge, segure o Overgrowth pra soltar assim que ele chegar perto, porque aí ele trava sem conseguir reagir de nenhuma forma.
- fonte: pro_dados/treant.json; pro_dados/spirit_breaker.json; constants_abilities.json (spirit_breaker_charge_of_darkness, spirit_breaker_greater_bash, spirit_breaker_nether_strike, treant_overgrowth)

## Contra Huskar (huskar)
- placar: Treant venceu só 16 de 36 partidas de pro (44,4%), a maior desvantagem da lista com 30+ jogos, fonte: pro_dados/treant.json.
- por que importa: é o confronto de maior desvantagem do Treant com amostra confiável, e o motivo é bem específico, Inner Fire do Huskar silencia, o que anula justamente o plano de jogo do Treant.
- janelas: Huskar já liga Armlet aos 9:06 (pro_dados/huskar.json), destravando o Berserker's Blood e virando ameaça de mid-lane antes mesmo do Treant sair do Arcane Boots (12:00). Sange and Yasha fecha aos 20:00 e Black King Bar aos 23:12, então pelos 23-26 min o Huskar já é um bruiser consolidado enquanto o Treant só está terminando de montar o próprio Blink (26:24).
- o que ele faz com você: Inner Fire empurra os inimigos próximos e silencia por um tempo curto, e como Overgrowth é feitiço, um Huskar que silencia o Treant antes dele soltar a ultimate nega o plano de jogo inteiro do suporte; Berserker's Blood dá até 30% de resistência mágica quanto mais baixa a vida dele, cortando parte do dano do Leech Seed e do Overgrowth bem na hora que ele mais precisa aguentar.
- o que você faz com ele: Overgrowth, se conseguir sair antes do silence, trava o Huskar de atacar (Burning Spear some) e de se mover, mas Life Break tem imunidade a debuff durante o salto, então se ele já estiver no meio do combo o root não interrompe a execução.
- itens que viram: Lotus Orb no Treant não ajuda aqui, Inner Fire é "No Target", não um feitiço direcionado nele, não tem o que refletir; o Black King Bar do Huskar (23:12) anula o Leech Seed, mas nada do kit dele resolve o Overgrowth.
- como jogar: trate o Inner Fire como prioridade de posicionamento, fique fora dos 500 de raio dele antes de tentar iniciar, porque um silence bem a tempo cancela o seu plano inteiro; se ele já gastou o Inner Fire, essa é a sua janela de soltar Overgrowth sem medo do contra.
- fonte: pro_dados/treant.json; pro_dados/huskar.json; constants_abilities.json (huskar_inner_fire, huskar_berserkers_blood, huskar_life_break, treant_overgrowth)

## Contra Enchantress (enchantress)
- placar: Treant venceu 28 de 60 partidas de pro (46,7%), 2ª maior desvantagem com 30+ jogos, fonte: pro_dados/treant.json.
- por que importa: é a mesma função (suporte duro, pos 5) mas o kit dela pune exatamente o que o Treant precisa fazer pra funcionar, chegar perto e autoatacar.
- janelas: até os 18 min os dois seguram lane, a Enchantress sem pressão de farm (benchmark GPM 341, pro_dados/enchantress.json). Power Treads dela sai por volta dos 18:12 e o Aghanim's Scepter aos 26:54, quase junto do Blink do Treant (26:24). Hurricane Pike dela (32:36) é tardio, mas confirma o padrão do herói, ficar longe e punir quem se aproxima.
- o que ele faz com você: Impetus dá dano bônus crescente com a distância do alvo, e como o Treant é lento (280 de movimento) e precisa caminhar até o corpo a corpo, ele absorve o Impetus mais forte justo na aproximação; Untouchable desacelera o ataque de quem bate nela, então cada autoataque do Treant pra procar Leech Seed deixa ele mais lento pro resto da troca.
- o que você faz com ele: Overgrowth trava qualquer creep que ela tenha enfeitiçado com Enchant, cortando o exército dela de uma vez; Leech Seed desarma a Enchantress e corta o Impetus, que é attack modifier, se o root for aplicado antes da troca.
- itens que viram: Force Staff e Hurricane Pike dela mantêm distância pra maximizar o Impetus; Blink Dagger do Treant é a única forma de fechar essa distância rápido o bastante pra não tomar o Impetus máximo antes de engajar.
- como jogar: não ande reto na direção dela, cada segundo de aproximação é mais dano de Impetus; depois que fechar a distância com Blink, evite trocar autoataque longo, o Untouchable te deixa mais lento a cada golpe que você dá nela.
- fonte: pro_dados/treant.json; pro_dados/enchantress.json; constants_abilities.json (enchantress_impetus, enchantress_untouchable, enchantress_enchant, treant_overgrowth)

## Contra Crystal Maiden (crystal_maiden)
- placar: Treant venceu 14 de 30 partidas de pro (46,7%), 3ª maior desvantagem, amostra no limite mínimo de 30 jogos usado neste levantamento, fonte: pro_dados/treant.json.
- por que importa: mesma função (suporte duro, pos 5), mas o Frostbite dela alcança 600 de distância contra os 150 do Leech Seed, o que inverte quem trava quem primeiro.
- janelas: Tranquil Boots da CM sai aos 8:24, perto do Arcane Boots do Treant (12:00). O Aghanim's Shard dela (Crystal Clone) fecha aos 17:42, dando a única mobilidade real do kit dela, bem antes do Blink do Treant (26:24). Até lá, ela não tem fuga própria contra quem a pegar de perto; depois dos 17-18 min, com o Shard pronto, ela ganha um dash de 275 de distância pra escapar de engajadas ruins.
- o que ele faz com você: Frostbite trava e causa dano ao longo do tempo de 600 de distância, alcance bem maior que o Leech Seed, travando o Treant antes dele sequer chegar no corpo a corpo; Arcane Aura acelera a regeneração de mana do time dela, deixando a CM spamar Frostbite com mais frequência do que o Treant consegue reposicionar.
- o que você faz com ele: Overgrowth prende o time dela inteiro se estiverem agrupados, e como a CM não tem mobilidade própria além do Shard, uma vez presa ela fica parada esperando o foco do time; Freezing Field (canalizado) continua saindo mesmo com ela presa, porque é feitiço, não movimento, então interromper o canal exige dano ou disable, não só o root.
- itens que viram: o Aghanim's Shard da CM (Crystal Clone) é o que nega o engajamento fácil do Treant depois dos 17-18 min, sem ele a CM é alvo livre pra qualquer um que chegue perto; Blink Dagger do Treant neutraliza a vantagem de alcance do Frostbite pulando direto pra dentro dos 600 de distância.
- como jogar: antes dos 17 min, ela não tem escape, puna qualquer posicionamento ruim com cuidado pro Frostbite que chega de mais longe que o seu próprio root; depois do Shard dela, trate o Crystal Clone como o alvo prioritário antes de tentar prender ela, porque sem ele a CM não tem pra onde fugir.
- fonte: pro_dados/treant.json; pro_dados/crystal_maiden.json; constants_abilities.json (crystal_maiden_frostbite, crystal_maiden_freezing_field, treant_overgrowth, treant_leech_seed); https://api.opendota.com/api/constants/aghs_desc
