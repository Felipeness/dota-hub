---
id: porque-itens-anti_mage
titulo: "Por que cada item: Anti-Mage"
heroi: Anti-Mage
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://liquipedia.net/dota2/Anti-Mage
- https://liquipedia.net/dota2/Spell_Block
- https://www.dotabuff.com/heroes/axe/skills
- https://dota2.fandom.com/wiki/Axe
- https://dota2.fandom.com/wiki/Mana_Break
- https://dotacoach.gg/en/items/bloodthorn
- https://dotacoach.gg/items/disperser
---
## Power Treads (power_treads)
- porque: Bota barata que já dá dano e velocidade de ataque, e troca de atributo de graça para ajustar mana ou last hit.
- detalhe: Troca para Agilidade sobe o dano e o attack speed pro farm de lane e os primeiros camps; trocar pra Inteligência antes de usar o Blink evita ficar sem mana no meio do ciclo wave-camp. A troca não tem custo nem cooldown, então dá pra alternar herói a herói. Os pros trocam de 95 a 147 vezes a cada 10 min porque o hábito vale mais farm do que qualquer status fixo.
- combo: Treads em Inteligência libera o Blink a cada 6 s sem travar de mana entre camps, a partir do nível 8 (Blink 4/4).
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (guia.lane, guia.itens_core, guia.depois_dos_20)

## Magic Wand (magic_wand)
- porque: Carga de vida e mana de graça que paga a troca de golpes na lane sem gastar ouro em Faerie Fire toda hora.
- detalhe: Acumula carga a cada feitiço ou ataque perto, e os pros compram cedo (mediana 4,3 min) porque o Anti-Mage não tem sustain própria antes da Battle Fury. Serve pra aguentar poke do offlane sem puxar o suporte pra lane.
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (guia.lane.itens_iniciais, guia.itens_core)

## Perseverance (pers)
- porque: Peça intermediária da Battle Fury: já dá regen de vida e mana que sustenta o Blink antes de fechar o item grande.
- detalhe: A regen de vida e mana aumentada ajuda a manter o ciclo de Blink entre creep e camp mesmo sem a Battle Fury pronta. Pros compram em mediana 11,7 min, pouco antes do nível 8 (Blink 4/4: alcance 1.100, 45 de mana, recarga 6 s). No 7.41 a Battle Fury é Perseverance + 2 Broadsword + Quelling Blade + 400 de receita.
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (guia.itens_core, skill_build)

## Battle Fury (bfury)
- porque: Maior salto de farm do herói: cleave e +50 de dano dobram o ritmo de last hit, de 10,1 para 17,4 por minuto.
- detalhe: O cleave em cone de 650 atinge 60% do dano em heróis e 40% em creeps, e o bônus de dano do Mana Break entra nesse cleave, no crítico e no lifesteal (confirmado pela Liquipedia). A regen de +7,5 de vida e +2,75 de mana sustenta o Blink entre wave e camp sem precisar voltar à base. Correlação do OpenDota (todas as faixas): comprar entre 10 e 12 min correlaciona com 72% de vitória (117 jogos); depois dos 15 min cai para 40% (258 jogos).
- combo: Ciclo wave, camp, wave com Blink a cada 6 s (nível 8) é o que sustenta o ritmo de 17,4 LH/min; sem o Blink 4/4 o item sozinho não entrega esse farm.
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (power_spikes, itens_core, condicao_para_farmar); https://liquipedia.net/dota2/Anti-Mage (interação Mana Break com cleave/crítico/lifesteal)

## Yasha (yasha)
- porque: Meio caminho pra Manta: já dá attack speed e velocidade de movimento pra chegar e fugir de luta antes do item ficar completo.
- detalhe: No 7.41 o Yasha é a primeira metade da Manta Style (Yasha + Diadem + receita), então comprá-lo não atrasa o combo, só financia em etapas. OpenDota: comprado entre 12 e 15 min correlaciona com 76% de vitória (107 jogos); depois dos 20 min cai pra 33% (126 jogos), o mesmo atraso que prejudica o Manta.
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (itens_core.yasha); C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (receita da manta no 7.41)

## Manta Style (manta)
- porque: Dispel básico tira silêncio e slow pra escapar, e as imagens carregam Mana Break e Persecutor pra empurrar torre sozinho.
- detalhe: As imagens do Manta aplicam o Persecutor com efeito total e o Mana Break a 25% do dano normal (dado do projeto, pros/D2PT), então servem pra farmar e empurrar torre sozinho (split push), não pra abrir luta: o dano principal continua sendo o herói real. No 7.41 o item é Yasha + Diadem + receita (4.650 de ouro). O dispel é básico: remove silêncios e slows comuns, mas NÃO remove a Berserker's Call do Axe, que o próprio kit do Axe marca como não dispelável, nem travas sem alvo como Black Hole ou a Berserker's Rage do Troll Warlord (essas furam até o BKB). A invulnerabilidade durante o cast do Manta é só o tempo de ativação do item, não um dispel documentado contra a Call: discussões de jogador chamam isso de "Manta dodge", mas não é um efeito listado na habilidade.
- contra: Importante corrigir um mito recorrente: "Manta escapa da Call do Axe" não procede, porque a Call não é dispelável e o Manta não a remove.
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (power_spikes.manta, itens_core.manta); C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (receita 7.41); https://www.dotabuff.com/heroes/axe/skills; https://dota2.fandom.com/wiki/Axe

## Eye of Skadi (skadi)
- porque: Dá tankiness e corta a cura do inimigo pela metade, pro Anti-Mage aguentar troca e luta prolongada.
- detalhe: +35 em força, agilidade e inteligência (que sobem vida e mana de lambuja) sustenta o Blink e a mana do Mana Void. O slow é assimétrico por tipo de alvo e, pro Anti-Mage (herói melee), vale como 25% de velocidade de movimento e 20% de velocidade de ataque no alvo (constante do patch: cold_slow_melee -25, cold_attack_slow_melee -20), o que ajuda a perseguir quem tenta fugir depois do Persecutor. A redução de 50% na cura recebida pelo alvo é a razão de escolha contra heróis de sustain, conforme o próprio guia do projeto ("Skadi contra cura e para aguentar luta").
- contra: Heróis que dependem de cura/regen alta: a redução de 50% na cura recebida reduz o que eles conseguem devolver em luta.
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (itens_core.skadi, power_spikes "4º item"); C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

## Butterfly (butterfly)
- porque: Evasão de 35% contra ataque físico, pra sobreviver ao carry inimigo que te pega sem Blink a tempo.
- detalhe: Junto com +30 de agilidade e +30 de dano (o 7.41e trocou 35 Agi/25 dano por 30/30, confirmado em dotacoach.gg/items/butterfly no 7.41f; o items.json local deste projeto ainda está no valor antigo, 35/25), o Butterfly é a escolha de 4º item quando o inimigo bate físico; Skadi quando ele cura ou precisa de tankiness, Scepter quando a mana é o problema, BKB se há 2 ou mais disables que ele bloqueia (regra do projeto por power spike).
- contra: Carries físicos sem true strike (sem Monkey King Bar, Bloodthorn, Mind Breaker): a evasão de 35% erra quase 1 em cada 3 ataques deles.
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (itens_core.butterfly, power_spikes "4º item"); dotacoach.gg/items/butterfly (patch 7.41f, Agility/Damage); C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (valor antigo, 35/25)

## Skull Basher → Abyssal Blade (abyssal_blade)
- porque: O Overwhelm atordoa 1,6 s e fura o Black King Bar, trava o alvo pro Mana Void ou pra fechar a kill.
- detalhe: Vem do Skull Basher (bash passivo) e evolui pro Overwhelm ativo (75 de mana, recarga 35 s). Pros e D2PT compram como 5º item (mediana 36 a 38 min).
- combo: Blink no alvo, 1 golpe com o Mana Break já carregado e Overwhelm na sequência trava o inimigo pelos 1,6 s que faltam pro Mana Void acertar em cheio.
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (itens_core.abyssal_blade; fontes: hd/hero_*.json confirmam a imunidade a BKB)

## Black King Bar (black_king_bar)
- porque: Spell immunity resolve a maioria dos disables de alvo único, liberando o Anti-Mage pra bater sem travar no meio do combo.
- detalhe: Protege contra Hex, Shackles, Fissure, Echo Slam, Slithereen Crush, Gust e Earthbind/Ensnare, entre outros disables de alvo único ou em área comuns. Pros compram em 10 de 24 jogos, mediana 33,4 min; D2PT 7000+ em 27,4% das compras, aos 36 min.
- contra: NÃO protege contra a Berserker's Call do Axe, Culling Blade, Life Break, Duel, Black Hole nem a Berserker's Rage do Troll Warlord: todos furam o BKB.
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (itens_situacionais, confirmado via hd/hero_*.json para a imunidade de cada habilidade)

## Monkey King Bar (monkey_king_bar)
- porque: True Strike garante que o ataque acerta mesmo contra evasão alta, o que o Anti-Mage físico puro perde sem ele.
- detalhe: No 7.41 dá +50 de alcance pra herói melee, +50 de dano e +50 de velocidade de ataque, além do true strike. Entra quando o inimigo tem Butterfly, Windrun, Whirling Axes do Troll, Smoke Screen ou Blinding Light.
- contra: Heróis de evasão/miss: Butterfly inimigo, Windranger (Windrun), Troll Warlord (Whirling Axes), heróis com Smoke Screen, Legion Commander (Blinding Light).
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (itens_situacionais.mkb); C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (stats 7.41)

## Aghanim's Scepter (ultimate_scepter)
- porque: Prepara um Mana Void gigante: o 1º golpe depois do Blink queima 20% da mana máxima e trava a regeneração por 6 s.
- detalhe: Também sobe o Mana Break pra 1,5% da mana máxima por golpe. Pros compram em 10 de 24 jogos, mediana 29,3 min; D2PT 7000+ em 13,6% das compras aos 30 min. Vale contra inimigos de piscina de mana grande ou que dependem de regen de mana.
- combo: Blink seguido de 1 golpe dentro de 5 s queima 20% da mana máxima do alvo e bloqueia a regen dele por 6 s; use isso antes do Mana Void pra garantir dano maior.
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (itens_situacionais.scepter, confirmado via liquipedia.net/dota2/Anti-Mage)

## Orchid Malevolence → Bloodthorn (orchid)
- porque: Silêncio de 5 s trava conjurador e impede ele de usar blink/invis pra escapar do combo de Mana Break.
- detalhe: A Bloodthorn soma true strike contra o alvo silenciado e, ao fim dos 5 s, converte 60% do dano que ele recebeu durante o silêncio em dano mágico extra (Soul Rend). Satanic comprou Orchid aos 29,9 min e evoluiu pra Bloodthorn aos 32,0 no jogo de derrota analisado pelo projeto.
- contra: Heróis que dependem de canalização pra curar ou escapar: o silêncio de 5 s bloqueia qualquer feitiço, incluindo blink de canalização.
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (itens_situacionais.orchid, dados da partida do Satanic); https://dotacoach.gg/en/items/bloodthorn (Soul Rend, true strike)

## Diffusal Blade → Disperser (diffusal_blade)
- porque: Purga dispel do alvo e queima mana a cada golpe, o que facilita acertar o Mana Void em herói móvel ou invocador.
- detalhe: No Disperser, o Suppress é um dispel básico mútuo (lançador e alvo) e desacelera o inimigo por 4 s, ou dá velocidade e 40% de resistência a slow pra aliado; o Manabreak passivo queima 40 de mana por ataque (ataques de ilusão não queimam mana). Pros usam em 5 de 24 jogos, mediana 34,1 min; D2PT 7000+ em 4,1% a 5,3% das compras.
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (itens_situacionais.diffusal); https://dotacoach.gg/items/disperser (Suppress, Manabreak)

## Linken's Sphere (sphere)
- porque: Bloqueia o primeiro feitiço de alvo único em cada 14 s, o que anula um Hex ou um Duel antes de travar o Anti-Mage.
- detalhe: Funciona contra Legion Commander (Duel) e Doom Bringer (Doom): as duas são habilidades de alvo único (Unit Target), o tipo que o Spell Block intercepta. Também bloqueia o Hex e o Shackles do Shadow Shaman, a mesma habilidade de Hex usada pelo Lion.
- contra: NÃO bloqueia a Berserker's Call do Axe: a habilidade é sem alvo único (no_target/em área), então passa direto pelo Spell Block. O guia local do projeto listava o Axe como contra do Linken's; a internet contradiz isso e aqui vale a internet, porque é uma regra de mecânica da habilidade, não um número de patch.
- fonte: https://liquipedia.net/dota2/Spell_Block (Duel e Doom na lista de Spell Block); https://dota2.fandom.com/wiki/Axe (Call não bloqueada por Linken's); https://dotacoach.gg/items/linkens-sphere

## Heaven's Halberd (heavens_halberd)
- porque: Disarm de 3,5 s desativa o ataque físico do carry inimigo, dando tempo pro Anti-Mage reagir ou fugir.
- detalhe: Reformulado no 7.41 (Talisman of Evasion + Splintmail + Ring of Health, 3.300 de ouro): +9 de armadura e +25% de evasão além do Disarm a 750 de alcance, recarga 15 s. Serve pra travar o carry físico inimigo quando o Anti-Mage está mais como contenção do que como iniciador.
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (itens_situacionais.halberd); C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (receita e custo pós-7.41)

## Satanic (satanic)
- porque: Lifesteal de 25% ajuda a sustentar luta prolongada, mas perdeu força no patch e por isso é a última opção.
- detalhe: A recarga caiu pra 40 s e o roubo de vida pra 25% nas letras 7.41e/f, então só 5,9% das compras no D2PT 7000+ escolhem o item; prefira Skadi, Abyssal Blade ou Heart of Tarrasque antes dele.
- fonte: C:/Users/felip/Desktop/dota-hub/app/public/data/herois/anti_mage.json (itens_situacionais.satanic, confirmado via patch notes 7.41e/f)
