---
id: porque-itens-medusa
titulo: "Por que cada item: Medusa"
heroi: Medusa
patch: 7.41
fontes:
- app/public/data/herois/medusa.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- https://liquipedia.net/dota2/Version_7.41f
- https://esports.gg/guides/dota-2/dota-2-medusa-guide-for-7-33c-with-slashstrike-indestructible-medusa
---

## Magic Wand (magic_wand)
- porque: Mana Shield faz da mana a vida dela; Magic Wand dá mana e regen de graça pra sobreviver ao trade de lane.
- detalhe: Carrega com qualquer feitiço inimigo visível a 1200 de distância, então enche rápido numa lane com troca de habilidade. Os pros compram antes de qualquer item de dano (31 de 42 jogos) e a mediana é 2:35 min. Não é exclusivo da Medusa, mas pesa mais nela porque cada ponto de mana cobre dano do Mana Shield.
- fonte: medusa.json (lane.itens_iniciais, guia.itens_core); items.json (magic_wand.notes)

## Null Talisman (null_talisman)
- porque: 505 de ouro por +5 Int, 3% de mana máxima e 1 de regen: o primeiro reforço direto da vida real dela, que é mana.
- detalhe: Pros compram em 31 de 42 jogos, mediana 2:30-2:52 min, antes de qualquer item de dano. Com Mana Shield absorvendo 98% do dano recebido em troca de mana, cada ponto de mana extra estende quanto trade ela aguenta na lane sem recuar pra torre.
- fonte: medusa.json (guia.itens_core, item null_talisman); items.json (null_talisman.components)

## Power Treads (power_treads)
- porque: +10 Agi e +25 de AS cortam o intervalo de ataque de 1,23s (nível 4) pra 0,94s (nível 6), o gatilho da selva.
- detalhe: Mediana pro 6:55-6:88 min, junto com o nível 6 e o 2º ponto de Split Shot. O toggle de atributo importa: Inteligência antes de gastar Snake e Stone Gaze (mais mana), Força com burst a caminho. A Undulation (passiva inata) trava a velocidade de movimento da Medusa em 310 e não deixa bônus de MS fazer efeito nela, então o ganho real do Treads é puramente AS/atributo, não mobilidade.
- fonte: medusa.json (guia.itens_core, lane.dicas); constants_abilities.json (medusa_undulation)

## Yasha (yasha)
- porque: Com Split Shot 4/4, Yasha é o item que fecha a selva completa: +3,7 last hits por minuto no mesmo intervalo de jogo.
- detalhe: Mediana pro 11:35-11:58 min. +16 Agi, +15 AS e +10% de MS, mas a mesma Undulation que trava o Treads trava o Yasha: a Medusa não ganha a velocidade de movimento do item, só AS e dano. Nos minutos 11-14 a amostra de 60 jogos mede 14-16 last hits por minuto e 560-665 de GPM.
- combo: Yasha + Split Shot 4/4 libera o ancient (12-17s, consumindo 27-58% da mana no nível 9).
- fonte: medusa.json (guia.itens_core, condicao_para_farmar); items.json (yasha.notes); constants_abilities.json (medusa_undulation)

## Manta Style (manta)
- porque: Segunda frente: 2 ilusões ranged (28% do dano) com Split Shot dobram o farm; dispel básico + 0,1s de invulnerabilidade no cast.
- detalhe: Mediana pro 15:21-16:32 min. Ilusões herdam o Split Shot e batem onda ou camp separado enquanto a Medusa limpa outro. Nos 5 minutos seguintes à compra, LH/min sobe de 14,8 para 17,4 e GPM de 635 para 811 (41 jogos); vencedores usam o ativo 36 vezes por jogo contra 17 nas derrotas. O dispel é do tipo Basic Dispel: não remove tudo. O Berserker's Call do Axe, por exemplo, está marcado como não-dispelável nas constantes do jogo, então Manta não tira a Medusa do Call.
- combo: Manta + Yasha: ilusões ranged com Split Shot cobrem um 2º camp enquanto ela limpa outro, no mesmo minuto de jogo +5,2 LH/min e +222 GPM sobre quem só tem Yasha.
- fonte: medusa.json (guia.itens_core, resumo); items.json (manta.attrib.tooltip_damage_outgoing_ranged, manta.notes); constants_abilities.json (axe_berserkers_call.dispellable)

## Butterfly (butterfly)
- porque: 35% de evasão é a defesa que combina com Mana Shield: ataque que erra não custa mana, diferente de armadura, que só reduz o dano.
- detalhe: Mediana pro 21:53-23,37 min (vencedores compram antes). +35 Agi, +25 de dano, +20% de AS e 35% de evasão. Mana Shield absorve 98% do dano em troca de mana a cada acerto recebido; um ataque evadido não gera esse custo, então o item estica a mana tanto quanto o HP. O dado medido não mostra selva mais rápida com ele (-0,3 LH/min contra quem só tem Manta): é item de luta, não de farm.
- fonte: medusa.json (guia.itens_core); items.json (butterfly.attrib); constants_abilities.json (medusa_mana_shield)

## Eye of Skadi (skadi)
- porque: Primeiro item que dá corpo pra uma Força 0: +35 em tudo vira +770 de vida e +420 de mana.
- detalhe: Mediana pro 30:02 min. Todo ataque dela aplica -25%/-50% de movimento (melee/ranged), -20% de AS e -50% de cura por 3s no alvo. Com HP base de 120 (Força 0), cada ponto de atributo pesa mais nela que num carry de Força normal.
- contra: Lifesteal e regeneração pesada: o slow de cura por 3s a cada ataque corta sustain de quem depende disso pra ficar na luta.
- fonte: medusa.json (guia.itens_core); items.json (skadi.attrib)

## Aghanim's Shard (aghanims_shard)
- porque: Cold Blooded devolve de graça um Snake de alvo único contra quem a mira com feitiço de alvo, virando estátua por 1s.
- detalhe: Passiva, CD de 12s, só dispara contra feitiço de alvo único (não funciona contra área nem atravessa BKB). 1400 de ouro, item praticamente obrigatório no D2PT. Compre antes do Scepter se o time inimigo tiver esse tipo de feitiço.
- contra: Hex, Lasso, Doom, Duel (feitiços de alvo único): o Snake volta e estatua quem lançou, sem gastar mana nem ação dela.
- fonte: medusa.json (guia.itens_core, depois_dos_20); constants_abilities.json (medusa_cold_blooded)

## Daedalus (greater_crit)
- porque: +88 de dano e 30% de chance de crítico (225%), mas o crítico só chega nas flechas extras do Split Shot com o Scepter.
- detalhe: Pros passam por Crystalys (mediana 32,3 min) antes do Daedalus (34,9 min); 5100 de ouro (items.json: lesser_crit 2000 + demon_edge 2200 + recipe 900). Sem Scepter o bônus vale só no alvo principal do Split Shot.
- combo: Daedalus + Aghanim's Scepter: o crítico (e Skadi e MKB) passa a valer nas 4 flechas extras, não só no alvo principal.
- fonte: medusa.json (guia.itens_core); items.json (greater_crit.cost, lesser_crit.cost, demon_edge.cost)

## Aghanim's Scepter (ultimate_scepter)
- porque: Quando o dano em grupo decide: o Split Shot passa a aplicar efeitos de ataque (crítico, Skadi, MKB) nas flechas extras e ganha o 5º alvo.
- detalhe: +10 em tudo, +175 de HP e +175 de mana. D2PT mostra em 26,4% das builds aos 35 min; nos pros, 8 de 42 jogos, mediana 43,4 min (bem mais tarde que o D2PT).
- combo: Scepter + Daedalus/Skadi/MKB: cada efeito de ataque passa a valer nas 4 flechas extras do Split Shot, não só no alvo principal.
- fonte: medusa.json (guia.itens_situacionais)

## Black King Bar (black_king_bar)
- porque: Contra 2 ou mais disables de alvo, nuke pesado ou silêncio global: o Mana Shield não impede stun.
- detalhe: 4050 de ouro, CD de 95s. Pros compram em 8 de 42 jogos, mediana 40,9 min. Vale lembrar: o Mystic Snake dela não atravessa BKB inimigo (bkbpierce: No nas constantes), então o mesmo item que a protege também bloqueia o próprio combo dela contra quem o tiver.
- contra: 2 ou mais disables de alvo em sequência: sem fuga própria (Undulation só trava a velocidade, não dá imunidade), ela precisa do BKB pra sobreviver ao stun-lock.
- fonte: medusa.json (guia.itens_situacionais); constants_abilities.json (medusa_mystic_snake.bkbpierce)

## Monkey King Bar (monkey_king_bar)
- porque: Pierce de 80% ignora evasão: resolve Butterfly, PA, Windranger e qualquer um que esquive os ataques dela.
- detalhe: +50 de dano, +50 de AS e 80% de chance de ignorar evasão com +70 de dano mágico por ataque. D2PT mostra em 23,4% das builds aos 37 min.
- contra: Butterfly, Windranger (Windrun), Phantom Assassin (Blur), Troll Warlord: evasão alta faz boa parte dos ataques dela errar sem o MKB.
- fonte: medusa.json (guia.itens_situacionais); items.json (monkey_king_bar.abilities)

## Swift Blink (swift_blink)
- porque: Blink de 1200 de distância com +25 de Agilidade e velocidade de movimento bônus por 6s depois de usar, pra entrar ou fugir de quem tem mais alcance ou te prende de longe.
- detalhe: 6800 de ouro. D2PT mostra em 20,3% das builds aos 46 min (34,9% dos inventários finais); pros 5 de 42 jogos, mediana 42,98 min. Autocast se joga na direção da fonte do time, útil como fuga de emergência.
- contra: Sniper, Drow Ranger, Windranger: alcance maior que o dela, o blink fecha a distância pra atacar ou escapa do kite.
- fonte: medusa.json (guia.itens_situacionais)

## Disperser (disperser)
- porque: Suppress dispela os dois lados e aplica slow que decai de 100% pra 0% em 5s: resolve quem fica fugindo ou invocando contra ela.
- detalhe: Evolução do Diffusal, 6100 de ouro. Cada ataque ainda queima 40 de mana do alvo e causa 1 de dano físico por mana queimada (ilusões não queimam mana). D2PT mostra em 20,8% das builds aos 39 min.
- contra: Alvos que fogem ou dependem de invocação/mana pra sustain: o burn de mana corta o combustível e o slow prende o alvo por 5s.
- fonte: medusa.json (guia.itens_situacionais); items.json (disperser.abilities)

## Diffusal Blade (diffusal_blade)
- porque: Base do Disperser: 40 de mana queimada e um purge por ataque já corta sustain e dispel de quem está fugindo.
- detalhe: 2500 de ouro. Pros compram em 9 de 42 jogos, mediana 33,6 min, geralmente seguido do Disperser.
- fonte: medusa.json (guia.itens_situacionais); items.json (diffusal_blade.notes)

## Dragon Lance / Hurricane Pike (dragon_lance)
- porque: +130 de alcance (ou o Pike, com empurrão de 425 pra cada lado) compensa o corpo a corpo que ela não tem pra trocar de longe.
- detalhe: Dragon Lance custa 1900 de ouro (items.json: blade_of_alacrity 1000 + belt_of_strength 450 + recipe 450). O Hurricane Pike ativo empurra ela e o alvo 425 de distância um do outro e dá 5 ataques sem limite de alcance com +100 de AS por 6s; não funciona em quem está dentro de Chronosphere, Duel ou Black Hole.
- contra: Iniciadores corpo a corpo que fecham distância pra trocar: o Pike empurra os dois 425 de volta e ainda dá 6s de ataque livre nela.
- fonte: medusa.json (guia.itens_situacionais); items.json (dragon_lance.cost, hurricane_pike.abilities)

## Mjollnir (mjollnir)
- porque: Farm de camp com cadeia de raio, mas só compensa com a selva inteira livre pra ela limpar rápido.
- detalhe: Evolui do Maelstrom (2950 de ouro, comprado 19-22 min). D2PT mostra pouco uso (Maelstrom 7,1%, Mjollnir 7,6% das builds): a Static Charge só dispara 1 vez por segundo e não alcança mais de 900 de distância do portador.
- fonte: medusa.json (guia.itens_situacionais); items.json (mjollnir.notes)

## Linken's Sphere (sphere)
- porque: Bloqueia 1 feitiço de alvo a cada 14s, de graça: cobre o que o Shard (Cold Blooded, CD de 12s) ainda não alcançou.
- detalhe: 4800 de ouro. D2PT mostra em só 2,5% das builds aos 38 min. Itens neutros com feitiço de alvo ignoram o Spellblock, então o Sphere não é escudo universal.
- contra: Hex e Lasso que chegam fora da janela do Cold Blooded, ou vindos de item neutro (que ignora o Sphere).
- fonte: medusa.json (guia.itens_situacionais); items.json (sphere.abilities)

## Divine Rapier (rapier)
- porque: Jogo de 45+ minutos já ganho: Rapier é all-in de dano puro, nunca pra tentar virar uma partida perdendo.
- detalhe: D2PT mostra em 9,6% das builds aos 53 min; pros 4 de 42 jogos, mediana 41,7 min. Cai no chão se ela morrer, e um inimigo pode pegar.
- fonte: medusa.json (guia.itens_situacionais); items.json (rapier.notes)

## Itens neutros
- porque: Tiers altos (Giant's Maul, Stygian Desolator) rendem mais farm e dano; os baratos (Weighted Dice, Occult Bracelet) cobrem a lane.
- detalhe: D2PT 7000+ mostra T1 Weighted Dice (21,2% das builds) e Occult Bracelet (18,9%, 52,6% de vitória); T3 Serrated Shiv (36,2%); T4 Giant's Maul (26,7%, 62,2% de vitória); T5 Stygian Desolator (50% das builds, 60% de vitória). Encantamento Alert aparece em 52-86% dos tiers.
- fonte: medusa.json (guia.itens_situacionais, item "neutros")
