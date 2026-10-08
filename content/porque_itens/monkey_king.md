---
id: porque-itens-monkey_king
titulo: "Por que cada item: Monkey King"
heroi: Monkey King
patch: 7.41
fontes:
- app/public/data/herois/monkey_king.json
- dota-imortal/work/hero_monkey_king_corrigido.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- https://dotacoach.gg/en/heroes/monkey-king/builds/carry
---

## Magic Wand (magic_wand)
- porque: Guarda carga do harass da lane e sobra HP/mana pro all-in do Jingu sem gastar regen.
- detalhe: Builda dos 2 Iron Branch iniciais, então não atrasa o Power Treads. Mediana pro 4,4 min, presente em 86% dos jogos pos1 de liga do 7.41.
- combo: com Power Treads forma o 1º power spike do herói (5:42): +55 de velocidade, +25 de AS, +10 de atributo.
- fonte: monkey_king.json (itens_core magic_wand, power_spikes 5:42); items.json (Magic Wand, ganha carga em feitiço inimigo visível)

## Power Treads (power_treads)
- porque: Dá o ataque extra e a troca de atributo que fecham a lane antes do primeiro item grande.
- detalhe: Mediana pro 5,7 min em 94% dos jogos pos1 (Satanic 5,2, Yatoro 5,5). Fica em Agilidade pra farm e DPS, troca pra Força na hora do trade. Phase Boots é alternativa rara (6% dos jogos).
- combo: com Magic Wand e Wraith Band fecha o 1º power spike (5:42); estimativa do projeto é ~99 de DPS aos 6 min com esse trio.
- fonte: monkey_king.json (itens_core power_treads, power_spikes, condicao_para_farmar); items.json (Power Treads, builda de Belt/Band/Robe)

## Echo Sabre (echo_sabre)
- porque: O ataque duplo (Echo Strike) quase dobra a chance de completar o stack de 4 golpes do Jingu Mastery.
- detalhe: 1º item grande mais comum no pos1 pro (53% dos jogos, mediana 12,8 min, 59% de vitória). +20 de dano e ataque duplo com slow de 100% por 0,8 s no 1º golpe. Estimativa do projeto: ~165 de DPS aos 12-13 min, o suficiente pra abrir large depois de cada wave.
- contra: alternativa direta é o Mage Slayer quando o inimigo tem 2 ou mais nukers mágicos (ver seção Mage Slayer abaixo).
- combo: é o componente base do Harpoon (Echo Sabre + Diadem + receita), então o upgrade de mais pra frente não desperdiça o item.
- fonte: monkey_king.json (itens_core echo_sabre, itens_core harpoon, power_spikes 12:30); items.json (Echo Sabre: Echo Strike, componentes)

## Desolator (desolator)
- porque: -6 de armadura por 7 s em cada ataque é o item que realmente fura Roshan, torre e herói tanque.
- detalhe: Mediana pro 18,2 min (68% dos jogos; 73% de vitória comprando antes de 17,5 min). A redução de armadura vale em construção (dado oficial do item) e o Soul Stealer soma +2 de dano por herói morto sob o debuff (até +30). Estimativa do projeto: ~290 de DPS aos 19 min.
- combo: o mesmo shred de armadura também vale nos ataques dos soldados do Wukong's Command e do Aghanim's Scepter contra herói (eles copiam os efeitos de ataque do MK, dica oficial do jogo), então o time inteiro bate mais forte no alvo marcado. Contra Roshan isso não vale pra ataque dos soldados (eles só atacam herói, ver nota oficial em monkey_king_wukongs_command), só pro ataque do próprio MK. Checagem: a página do Dota Coach citada abaixo não confirma esse detalhe de soldados, então a fonte real é a pesquisa oficial do projeto, não o Dota Coach.
- fonte: monkey_king.json (itens_core desolator, power_spikes 17:30, depois_dos_20); items.json (Desolator: Corruption, Soul Stealer); dota-imortal/work/hero_monkey_king_corrigido.json (soldados copiam efeitos de ataque, dado oficial via Dota API hero_id=114); constants_abilities.json (monkey_king_wukongs_command: soldados só atacam heróis)

## Black King Bar (black_king_bar)
- porque: Sem o Avatar você não entra em luta. Os piores confrontos do herói são nukers mágicos em área.
- detalhe: Mediana pro 25,1 min (76% de vitória comprando antes de 23 min). Avatar dá basic dispel, 60% de resistência mágica e ignora dano puro e refletido por 9 s (dado oficial do item). A primeira compra do 7.41 já vem com 9 s de duração.
- contra: Phoenix, Queen of Pain, Venomancer, Techies, Storm Spirit, Keeper of the Light, Invoker, Ancient Apparition, Hoodwink e Clockwerk são os piores confrontos do MK em Divine+ 7.41f; ligue o Avatar antes do primeiro nuke de um desses.
- fonte: monkey_king.json (itens_core black_king_bar, guia.evitar_quando, power_spikes 24:00); items.json (Black King Bar: Avatar)

## Aghanim's Shard (aghanims_shard)
- porque: Deixa o Boundless Strike alcançar à distância e ainda aplica um pedaço do slow do Primal Spring no impacto.
- detalhe: Mediana pro 26,8 min (52% dos jogos). O alt-cast manda o staff até a ponta do alcance e aplica 35% do efeito do Primal Spring, sem precisar estar em árvore pra isso.
- combo: com Harpoon, o puxão traz o alvo pra dentro do alcance do Boundless Strike remoto; pro, 69% de vitória com Harpoon contra 49% sem (correlação).
- fonte: monkey_king.json (itens_core aghanims_shard, power_spikes 27:00)

## Harpoon (harpoon)
- porque: Puxa o alvo pra distância de melee (Draw Forth) e ainda ganha Echo Strike, mantendo viva a ameaça do Jingu.
- detalhe: Upgrade do Echo Sabre (+ Diadem + receita, 4700 no total). Mediana pro 27,0 min em 33% dos jogos pos1, com 69% de vitória contra 49% sem o item (correlação, não causa). Puxa herói e alvo a até 35% da distância entre eles; se o caster é melee, sempre traz pra distância de ataque.
- combo: com Aghanim's Shard, o Boundless Strike de longe fecha o combo completo (puxa e stuna).
- fonte: monkey_king.json (itens_core harpoon, power_spikes 27:00); items.json (Harpoon: Draw Forth, Echo Strike)

## Mage Slayer (mage_slayer)
- porque: Troca o Echo Sabre quando o inimigo tem 2 ou mais nukers mágicos, porque corta 40% do dano de spell do alvo.
- detalhe: +20% de resistência mágica, +15 de dano, 40 de dano físico por segundo no alvo marcado e -40% no dano de spell dele por 3 s (dado oficial do item; o guia local trazia 18%/12, desatualizado em relação ao items.json do patch). Pro: 20% dos jogos, 53,6% de vitória; no 7000+ pub só 6,3% das builds.
- contra: Queen of Pain, Storm Spirit, Invoker, Venomancer, Phoenix e Keeper of the Light, quando 2 ou mais aparecem no draft inimigo.
- fonte: monkey_king.json (itens_situacionais mage_slayer); items.json (Mage Slayer)

## Battle Fury (bfury)
- porque: Cleave de 60% (40% em creep) resolve lane fácil ou jungle grande, mas é item de farm, não de luta.
- detalhe: Pro: 13% dos jogos, 54,4% de vitória, comprado por volta de 14 min quando a lane permite. Desde o 7.41d é o 1º item grande mais comum no pos1 de liga (13 de 43 jogos), seguido pela rota Battle Fury, Aghanim's Scepter, BKB, Eye of Skadi.
- combo: sem o shred do Desolator, então farma mais rápido mas bate menos forte; o time costuma seguir pro Scepter depois pra compensar em luta.
- fonte: monkey_king.json (itens_situacionais battle_fury e "Caminho recente dos pos1 de tier 1"); items.json (Battle Fury: Cleave, Quell)

## Diffusal Blade (diffusal_blade)
- porque: Manabreak seca a mana de herói dependente de spell e o Inhibit ainda entrega um slow de 4 s pra perseguir.
- detalhe: Cada ataque queima 40 de mana e converte 1 de dano físico por mana queimada (dado oficial do item). Pro: 12% dos jogos aos 20,8 min, 66% de vitória.
- contra: heróis que vivem de mana pra lutar; o guia local não especifica nomes, é situacional.
- fonte: monkey_king.json (itens_situacionais diffusal_blade); items.json (Diffusal Blade: Manabreak, Inhibit)

## Manta Style (manta)
- porque: As imagens dividem o foco do inimigo, e o cast tem basic dispel mais 0,1 s de invulnerabilidade, bom pra escapar de AoE.
- detalhe: Builda do Yasha (+16 Agi, +15% AS, +10% MS). Mirror Image cria 2 imagens (melee bate 33% do dano, ranged 28%) com Basic Dispel no cast e 0,1 s de invulnerabilidade (dado oficial do item). Pro: Yasha em 25% dos jogos (21,0 min), Manta completo em 15% (22,9 min, 60% de vitória).
- fonte: monkey_king.json (itens_situacionais "Yasha para Manta Style"); items.json (Manta Style: Mirror Image, notas de invulnerabilidade e dispel)

## Monkey King Bar (monkey_king_bar)
- porque: Pierce de 80% fura evasão alta e ainda soma 70 de dano mágico por ataque acertado.
- detalhe: +50 de dano, +50 de AS e +50 de alcance pra herói melee no 7.41 (dado oficial do item). Pro: 10% dos jogos aos 36,9 min, 67% de vitória.
- contra: Phantom Assassin e Butterfly, evasão alta que sem MKB faz a maioria dos ataques do MK errar.
- fonte: monkey_king.json (itens_situacionais monkey_king_bar); items.json (Monkey King Bar: Pierce)

## Skull Basher (basher)
- porque: Segundo stun de alvo único pra travar quem fugiu do Boundless Strike, em jogo já longo.
- detalhe: 25% de chance de stunar 1,2 s e somar 100 de dano físico em ataque de herói melee (seria 10% se o MK fosse ranged, mas ele é melee). Pro: 10% dos jogos, 73% de vitória, item de 3º ou 4º slot em jogos de 38 a 45 min.
- contra: não funciona contra Spirit Breaker, Faceless Void e Slardar (imunes ao proc, dado oficial do item), e os soldados do Wukong's Command não ganham o Bash.
- fonte: monkey_king.json (itens_situacionais "Skull Basher e Abyssal Blade", depois_dos_20); items.json (Skull Basher)

## Abyssal Blade (abyssal_blade)
- porque: Upgrade do Basher com stun ativo que atravessa debuff immunity, pra garantir o kill numa fuga com BKB.
- detalhe: Overwhelm stuna 1,6 s e ignora imunidade a debuff (dado oficial do item); a parte passiva de Bash mantém a mesma chance (25% melee) e duração de stun (1,2 s) do Basher, só o dano bônus do proc sobe de 100 para 120. Pro: 7% dos jogos, 76% de vitória.
- contra: os mesmos 3 heróis imunes a Bash do Basher (Spirit Breaker, Faceless Void, Slardar), e os soldados do Wukong's Command não ganham o efeito.
- fonte: monkey_king.json (itens_situacionais "Skull Basher e Abyssal Blade"); items.json (Abyssal Blade: Overwhelm)

## Aghanim's Scepter (ultimate_scepter)
- porque: Faz o Wukong's Command virar um army contínuo (1 soldado novo a cada 4 s) em vez de uma rajada só, pra siege ou jogo longo.
- detalhe: Pro: 9% dos jogos, 76% de vitória, comprado por volta de 32,7 min. Com o Scepter os soldados ganham Jingu Mastery próprio, a recarga do R cai (90/70/50 s) e o alcance de cast sobe pra 1550 (dado do guia local sobre a habilidade oficial).
- combo: o shred de armadura do Desolator também vale nos ataques dos soldados do Scepter contra heróis (eles só atacam herói, não Roshan nem construção), então o time concentra dano no mesmo alvo mais rápido.
- fonte: monkey_king.json (itens_situacionais ultimate_scepter e "Caminho recente dos pos1 de tier 1", depois_dos_20); items.json (Aghanim's Scepter); constants_abilities.json (monkey_king_wukongs_command)

## Nullifier (nullifier)
- porque: Dispela e trava o alvo quando ele tem alguma fuga ou buff que o Boundless Strike sozinho não resolve.
- detalhe: Nullify aplica Basic Dispel e um debuff de slow contínuo por 4 s, e pode ser lançado até em alvo invulnerável (dado oficial do item). Pro: 8% dos jogos, 53,7% de vitória; só compra com necessidade clara, não é padrão.
- fonte: monkey_king.json (itens_situacionais nullifier); items.json (Nullifier: Nullify)

## Linken's Sphere (sphere)
- porque: Bloqueia a primeira habilidade de alvo único que pegaria você sozinho.
- detalhe: Spellblock bloqueia a maioria dos feitiços de alvo único a cada 14 s (dado oficial do item). Item de nicho: só 3% dos jogos pos1, contra ameaça clara de alvo único.
- contra: Doom, Bane e Sleep, citados no guia local como as ameaças de alvo único que justificam o item.
- fonte: monkey_king.json (itens_situacionais "Nullifier ou Linken's Sphere"); items.json (Linken's Sphere: Spellblock)

## Silver Edge (silver_edge)
- porque: Invisibilidade pra entrar com o Mischief e o break de 5 s na passiva do alvo tiram o maior perigo antes da luta.
- detalhe: Shadow Walk dá 17 s de invisibilidade (quebra ao atacar ou conjurar); atacar pra sair da invisibilidade aplica 300 de dano físico bônus e desliga as passivas do alvo por 5 s (dado oficial do item). Pro: 10% dos jogos; Yatoro comprou em 5 de 6 jogos dele, entre 28,6 e 40,9 min.
- combo: combina com o disfarce do Mischief (inato do herói) pra emboscar sem ser visto duas vezes.
- fonte: monkey_king.json (itens_situacionais silver_edge, guia.dicas sobre Mischief); items.json (Silver Edge: Shadow Walk)
