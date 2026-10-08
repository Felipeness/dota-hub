---
id: ficha-axe
titulo: "Axe"
heroi: Axe
patch: 7.41
posicoes: [3]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-tier1/data/derivados/compras.parquet
- dota-roshan-solo/data/solos.json
- https://api.opendota.com/api/heroes/2/itemPopularity
- https://dota2protracker.com/builds/axe-pos3-1
- https://dota2protracker.com/hero/legacy/Axe
- https://dotesports.com/dota-2/news/dota-2-patch-7-41-facets-removed-esl-one-birmingham
- https://liquipedia.net/dota2/Spell_Reflection
- https://dotacoach.gg/en/items/manta-style
- https://dota2.fandom.com/wiki/Axe
---

## Resumo

Axe é um iniciador e tanque de Força: trava todo mundo perto dele com Berserker's Call, pune quem fica batendo nele com Counter Helix (dano puro em área) e fecha o kill com o dano puro de Culling Blade, que reseta a recarga quando mata um herói. No patch 7.41 ele é praticamente só offlane: das 143 vezes que apareceu no draft das equipes de Tier 1 analisadas, 133 foram pos 3 (93%, 51% de vitória em 133 jogos), contra só 2 no mid, 5 no pos 4 e 3 no pos 5, amostra pequena demais pra render build confiável nessas posições (fonte: draft.csv). No geral (todas as posições, dados públicos recentes do D2PT 7000-8500 MMR) ele tem 48% de vitória em 6.376 partidas.

## Pos 3 (offlane)

- quando pegar: como trocador de early game e iniciador de raio curto contra lanes com muito ataque automático (o combo Call + Blade Mail devolve o dano de quem cai no taunt); é o pick dominante da posição no Tier 1 analisado (133/143 picks, 51% de vitória). (fonte: draft.csv; dota2protracker.com/hero/legacy/Axe)
- itens iniciais: tango, circlet, gauntlets (pra 2x Bracer; combinação mais comum nos primeiros 2 minutos, compras.parquet)

### Build

#### Phase Boots (phase_boots)
- minuto: 6:54 (mediana, 133 de 137 jogos pos 3 analisados)
- detalhe: o Phase ativo remove colisão com unidades, então fecha distância sem rota alternativa até o herói que vai receber o taunt. O bônus de velocidade de movimento também ajuda a chegar antes no range de 315 de Berserker's Call.
- fonte: compras.parquet (133/137, mediana 6:54)

#### Magic Wand (magic_wand)
- minuto: 9:06 (mediana, 106 de 137 jogos)
- porque: cargas baratas de vida e mana pra sobreviver trocas na lane e ainda ter mana pra Battle Hunger e Call.
- fonte: compras.parquet (106/137, mediana 9:06)

#### Blade Mail (blade_mail)
- minuto: 12:12 (mediana, 113 de 137 jogos)
- porque: Call força todo mundo próximo a bater nele; Blade Mail devolve 85% desse dano pra quem atacou.
- detalhe: ativo reflete 85% do dano recebido por 5,5s (a passiva já devolve 15% + 10 fixos sem ativar); é o item que dá nome ao build mais popular do herói no dota2protracker ("Standard Blade Mail", 53% de vitória em 43 jogos, 22 pros).
- contra: carries e offlaners de ataque automático que caem no taunt (ex. Phantom Assassin, Troll Warlord, Juggernaut): o Call obriga eles a bater e o Blade Mail devolve.
- combo: Berserker's Call (12 a 15 de armadura, 2,1 a 3s de duração conforme o nível da habilidade, 1 a 4) seguido do ativo de Blade Mail; os ataques que Axe recebe durante o Call também contam pro contador de Counter Helix (7/6/5/4 ataques recebidos por nível), então o helix (100-160 de dano puro em raio 275) costuma disparar no meio do combo.
- fonte: items.json (blade_mail: active_reflection_pct 85, passive_reflection_pct 15); constants_abilities.json (axe_berserkers_call radius 315, bonus_armor, duration; axe_counter_helix damage/trigger_attacks); dota2protracker.com/builds/axe-pos3-1; dota2.fandom.com/wiki/Axe (Counter Helix conta ataques recebidos, não os de Axe)

#### Blink Dagger (blink)
- minuto: 15:30 (mediana, 137 de 137 jogos)
- porque: fecha o alcance curto (315) do Call de forma instantânea, antes que o time inimigo reaja ou se espalhe.
- fonte: compras.parquet (137/137, mediana 15:30)

#### Black King Bar (black_king_bar)
- minuto: 24:48 (mediana, 129 de 137 jogos)
- porque: segura silence e stun de alvo único pra garantir que o Call e o Counter Helix completem o combo sem ser interrompido no meio.
- fonte: compras.parquet (129/137, mediana 24:48); items.json (spell_reduce 60, duration 9/8/7)

#### Aghanim's Shard (aghanims_shard)
- minuto: 27:30 (mediana, 105 de 137 jogos)
- porque: Berserker's Call passa a aplicar Battle Hunger em todo mundo pego no taunt, e cada aplicação nova cria uma instância independente em vez de só renovar a antiga.
- detalhe: num raio de 315, um Call com Shard já deixa todos os alvos sangrando (dano puro contínuo) mesmo que Axe não consiga focar todo mundo com Culling Blade depois.
- combo: Call + Shard numa luta de 3+ inimigos aplica Battle Hunger em todos ao mesmo tempo, sem precisar de mana extra pra lançar a magia em cada um.
- fonte: compras.parquet (109/137, mediana 27:30); liquipedia.net/dota2/Axe (via busca: Shard faz o Call aplicar Battle Hunger em área e empilhar instâncias)

### Situacionais

#### Soul Ring (soul_ring)
- minuto: 16:24 (mediana, 79 de 137 jogos)
- porque: devolve 170 de mana por 10s trocando vida que sobra, dando combustível barato pro combo sem gastar ouro de carry.
- contra: lane ou jogo sem flask/regen suficiente pra manter o combo Call + Battle Hunger + Counter Helix sem secar de mana.
- fonte: compras.parquet (79/137 = 58%); items.json (soul_ring: mana_gain 170, duration 10)

#### Lotus Orb (lotus_orb)
- minuto: 32:36 (mediana, 36 de 137 jogos)
- porque: dá a Axe uma forma de virar o combo contra quem tenta neutralizá-lo primeiro, sem gastar o slot num item só ofensivo.
- contra: ultimates e disables de alvo único fortes (ex. Doom, hex): o ativo (Echo Shell) devolve o próximo feitiço de alvo único lançado contra Axe pro próprio lançador, embora o Axe ainda sofra o efeito original.
- detalhe: a reflexão só vale pra feitiços lançados depois do ativo; não bloqueia, só devolve.
- fonte: compras.parquet (36/137 = 26%); liquipedia.net/dota2/Spell_Reflection

#### Shiva's Guard (shivas_guard)
- minuto: 38:06 (mediana, 44 de 137 jogos)
- porque: a aura de -45 de velocidade de ataque reduz o dano que Axe toma segurando o Call, e o estouro limpa onda de creep rápido.
- contra: carries de ataque rápido (a aura reduz 45 de velocidade de ataque em raio 1200) e grupos de ilusão/creep, que o estouro de 260 de dano em área (raio 825) e mais a mana pra Counter Helix/Battle Hunger limpam de uma vez.
- fonte: compras.parquet (44/137 = 32%); items.json (shivas_guard: aura_attack_speed -45, blast_damage 260, blast_radius 825)

#### Crimson Guard (crimson_guard)
- minuto: 24:54 (mediana, 5 de 137 jogos)
- porque: dá sobrevivência em área pro time logo na fase de luta de grupo, quando Axe tanka mas os aliados ainda não têm item defensivo.
- contra: composições de dano físico pesado e cedo (vários atacantes rápidos): bloqueia 75 de dano melee / 50 ranged com 60% de chance passiva (100% e 70 no ativo por 7s) pra toda a equipe num raio de 1200.
- fonte: compras.parquet (5/137 = 4%); items.json (crimson_guard: block_damage_melee 75, block_damage_ranged 50, block_chance 60, duration 7)

#### Pipe of Insight (pipe)
- minuto: 35:48 (mediana, 14 de 137 jogos)
- porque: barreira e resistência mágica em área protegem o time inteiro no momento em que Axe trava todo mundo com o Call.
- contra: equipes de dano mágico pesado: aura de 8% de resistência mágica (o +20% do item é só pra quem carrega) e barreira de 425 de dano mágico por 8s pra equipe toda em raio 1200.
- fonte: compras.parquet (14/137 = 10%); items.json (pipe: magic_resistance_aura 8, barrier_block 425, barrier_duration 8.0, aura_radius 1200)

#### Manta Style (manta)
- minuto: 32:12 (mediana, 14 de 137 jogos)
- porque: o dispel básico limpa o debuff que travaria Axe antes de iniciar ou de usar Culling Blade na hora certa.
- contra: silence, hex e lentidão de alvo único: o dispel básico do ativo limpa a maioria dos debuffs negativos (mas não impede o efeito original de algo como Doom se já estiver ativo).
- fonte: compras.parquet (14/137 = 10%); dotacoach.gg/en/items/manta-style (dispel básico confirmado no 7.41f)

#### Octarine Core (octarine_core)
- minuto: 39:06 (mediana, 16 de 137 jogos)
- contra: jogos que passam de 35-40 min, quando 25% de redução de recarga devolve o Culling Blade e deixa o Counter Helix disponível com mais frequência numa luta longa.
- fonte: compras.parquet (16/137 = 12%); items.json (octarine_core: bonus_cooldown 25, bonus_health 450, bonus_mana 450)

#### Heart of Tarrasque (heart)
- minuto: 38:30 (mediana, 14 de 137 jogos)
- porque: a vida e regen extra deixam Axe tankar sozinho por mais tempo quando não há suporte pra sustentá-lo em lutas longas.
- contra: jogos longos em que Axe precisa segurar sozinho ou splitar sem apoio: 40 de Força e 1% de regen sobre a vida máxima seguram ele de pé enquanto o One Man Army (passivo oculto: metade da armadura em Força, só sem aliado em raio 700) soma vida extra longe do time.
- fonte: compras.parquet (14/137 = 10%); items.json (heart: bonus_strength 40, hp_regen 1%); constants_abilities.json (axe_one_man_army: armor_pct_as_strength 50, radius 700)

## Roshan

Sem solo registrado: o dataset de replays de Roshan solo (dota-roshan-solo) não tem nenhum abate solo do Axe. Em equipe ele aparece em só 4 partidas do dataset (3 pro, 1 turbo), entre os minutos 16 e 47, sempre classificado como abate em dupla/equipe, nunca solo. Em 2 dessas 3 partidas pro, Axe foi responsável por mais da metade do dano total só com +1 aliado no fosso (55,3% aos 28:55, com Life Stealer; 51,7% aos 26:00, com Viper), o que sugere que ele participa como dano extra numa dupla quando sobra força de lane, não como time inteiro parado esperando. Amostra pequena (4 jogos): não dá pra tirar minuto ou nível medianos confiáveis.

Fonte: dota-roshan-solo/data/solos.json
