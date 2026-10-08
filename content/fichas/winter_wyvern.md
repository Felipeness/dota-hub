---
id: ficha-winter_wyvern
titulo: "Winter Wyvern"
heroi: Winter Wyvern
patch: 7.41
posicoes: [5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/early_rosh_pro.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/late_rosh_pro.json
- https://api.opendota.com/api/heroes/112/itemPopularity
- https://dota2protracker.com/hero/Winter%20Wyvern
- https://dotacoach.gg/en/heroes/winter-wyvern/builds/support
- https://dotacoach.gg/en/heroes/counters/winter-wyvern
- https://dotacoach.gg/es/heroes/winter-wyvern
- https://dotacoach.gg/fr/heroes/winter-wyvern
- https://dotacoach.gg/pt-BR/heroes/winter-wyvern
---

## Resumo
Winter Wyvern é suporte de controle e salvamento. Cold Embrace cura e blinda um aliado por 4s, e Winter's Curse congela um inimigo e força quem estiver perto dele a atacá-lo, com só o dano da própria Winter Wyvern (ou de unidade controlada por ela) valendo durante o efeito (`constants_abilities.json`, winter_wyvern_winters_curse). No patch 7.41 os dados de pro do Atlas tier 1 mostram ela quase só de pos 5: 169 dos 181 picks registrados (93%), com 56,8% de vitória; os outros 12 (7%) foram de pos 4 (`dota-tier1/data/draft.csv`). No pub ela é Support/Disabler/Nuker pelo OpenDota (`heroStats.json`), e a build mais jogada tem 52,6% de vitória em 12.724 partidas no dota2protracker, patch 7.41f.

## Pos 5 (suporte duro)
- quando pegar: entra bem contra time com illusion, summon ou split push (Nature's Prophet, Terrorblade, Meepo e Lone Druid aparecem na lista "good against" da dotacoach.gg/counters) e perde força contra right-click sustentado ou burst mágico de longe que a mata antes dela agir (Spectre, Phantom Lancer, Phantom Assassin, Ancient Apparition e Necrophos estão na lista "bad against" da mesma página).
- itens iniciais: branches, branches, magic_stick, ward_sentry, tango, faerie_fire, blood_grenade

### Build
#### Magic Wand (magic_wand)
- minuto: 8
- porque: troca o Magic Stick inicial por cargas maiores pra sustentar o harass de lane sem gastar viagem ao poço.
- detalhe: acumula 1 carga a cada feitiço inimigo lançado num raio de 1200 e devolve 15 de HP e mana por carga, até 20 cargas; dá +3 em todos os atributos.
- fonte: items.json (magic_wand); dota2protracker.com/hero/Winter Wyvern (build pos 5, 52,6% de vitória em 12.724 partidas, patch 7.41f)

#### Arcane Boots (arcane_boots)
- minuto: 12
- porque: Cold Embrace e Splinter Blast custam mana toda hora, e a bota devolve mana pro time também.
- detalhe: a ativa restaura 150 de mana num raio de 1200 (consome a bota, vira Energy Booster); a passiva dá 1 de regen de mana em área enquanto intacta e +45 de velocidade de movimento.
- fonte: items.json (arcane_boots); dota2protracker.com/hero/Winter Wyvern

#### Blink Dagger (blink)
- minuto: 22
- porque: fecha a distância pra encaixar o alcance de 800 do Winter's Curse num alvo isolado sem se expor antes.
- detalhe: teleporta 1200 de distância instantaneamente e não pode ser usado nos 3s depois de levar dano de herói ou de Roshan.
- combo: Blink pra posição, depois Winter's Curse no herói isolado, que trava ele e todo mundo a até 525 de raio por 2 a 6s. Só o dano da própria Winter Wyvern passa nesse tempo, então o combo rende mais com dano nela mesma do que com buff de ataque dado a aliado.
- contra: funciona até contra quem já deu Black King Bar, porque Winter's Curse e Cold Embrace ignoram imunidade a magia (`bkbpierce: Yes` nas duas, `constants_abilities.json`).
- fonte: items.json (blink); constants_abilities.json (winter_wyvern_winters_curse, winter_wyvern_cold_embrace); dota2protracker.com/hero/Winter Wyvern

#### Glimmer Cape (glimmer_cape)
- porque: some com ela (ou com o aliado protegido) bem na hora em que o time inimigo foca o combo que ela acabou de soltar.
- detalhe: depois de 0,5s de atraso, dá invisibilidade, +20 de velocidade de movimento e uma barreira mágica de até 375 de dano por 5s, com +20% de resistência mágica.
- combo: self-cast logo depois do Winter's Curse pra sair viva do contra-ataque; ou no aliado que ela acabou de curar com Cold Embrace, pra esconder ele enquanto o efeito termina.
- fonte: items.json (glimmer_cape); dotacoach.gg/en/heroes/winter-wyvern/builds/support (item core de mid game, patch 7.41f)

#### Aether Lens (aether_lens)
- porque: aumenta o alcance de cast de Winter's Curse e de Cold Embrace, então ela ameaça e salva de mais longe.
- detalhe: dá +225 de alcance de cast, +300 de mana e +2,5 de regen de mana. Winter's Curse tem 800 de alcance e Cold Embrace vai de 850 a 1000 conforme o nível, e os dois sobem com o item.
- fonte: items.json (aether_lens); constants_abilities.json (winter_wyvern_winters_curse, winter_wyvern_cold_embrace); dotacoach.gg/en/heroes/winter-wyvern/builds/support

#### Force Staff (force_staff)
- porque: empurra 600 de distância um aliado que vai morrer, ou ela mesma, pra fora do alcance de quem tá perseguindo.
- detalhe: tem 850 de alcance quando usado num inimigo, não interrompe a ação do alvo e não funciona em unidade dentro de Chronosphere, Duel ou Black Hole.
- contra: não serve de escape nem de combo contra quem já prendeu o alvo em Chronosphere, Duel ou Black Hole, porque o Force não afeta unidade dentro desses efeitos.
- fonte: items.json (force_staff); dotacoach.gg/en/heroes/winter-wyvern/builds/support

#### Aghanim's Shard (aghanims_shard)
- porque: reduz o cooldown de Cold Embrace e ainda deixa o aliado salvo mais forte quando ele sai do casulo.
- detalhe: segundo três páginas da dotacoach.gg (ES, FR e PT-BR, mesmo teor nas três, cada uma na própria língua), o rework de 7.41 corta 4s do cooldown de Cold Embrace e dá 60% de dano de ataque bônus por 6s pro aliado que sai do casulo de gelo. O item em si (`items.json`, aghanims_shard) só confirma o upgrade genérico; a mecânica específica da heroína não aparece em fonte local.
- combo: salva o aliado com Cold Embrace e, no instante em que ele sai do casulo, ele entra na troca com 60% de dano de ataque bônus por 6s.
- fonte: dotacoach.gg/es/heroes/winter-wyvern; dotacoach.gg/fr/heroes/winter-wyvern; dotacoach.gg/pt-BR/heroes/winter-wyvern; items.json (aghanims_shard)

### Situacionais
#### Ghost Scepter (ghost)
- porque: vira etérea e some do dano físico bem na hora em que fica prioridade de kill do time inimigo.
- detalhe: 4s imune a dano físico, sem poder atacar nesse tempo, e 30% mais vulnerável a dano mágico; custa 1500 e não tem componente.
- contra: Spectre (-4,6%), Phantom Lancer (-4,4%) e Phantom Assassin (-3,9%) estão entre os piores matchups dela por queda de winrate na dotacoach.gg/counters; são carries de dano físico que fecham em cima do suporte depois do combo.
- fonte: items.json (ghost); dotacoach.gg/en/heroes/counters/winter-wyvern

#### Lotus Orb (lotus_orb)
- porque: devolve pro próprio caster boa parte dos feitiços de alvo único, incluindo os que tentam travar ela antes do combo.
- detalhe: escudo de 5s que reflete a maioria dos feitiços de alvo único pra quem lançou (a unidade escudada ainda leva o dano do feitiço); dá +10 de armadura e dispel básico ao ativar.
- contra: Ancient Apparition, Necrophos e Nyx Assassin aparecem na lista de piores matchups da dotacoach.gg/counters; os três dependem de um feitiço de alvo único pra abrir a janela nela, e o Lotus devolve isso.
- fonte: items.json (lotus_orb); dotacoach.gg/en/heroes/counters/winter-wyvern

#### Aeon Disk (aeon_disk)
- porque: zera o próximo golpe que a levaria abaixo de 70% de vida e ainda dispela ela, segurando viva pro próximo Cold Embrace.
- detalhe: ao cair abaixo de 70% de vida por dano de jogador, aplica dispel forte e 2,5s de 75% de resistência a status com todo dano zerado nos dois sentidos; o cooldown sobe a cada ativação, de 105 a 165s.
- contra: Outworld Destroyer, Pugna e Leshrac estão na lista de piores matchups da dotacoach.gg/counters; são nukers de burst mágico que tentam explodir ela de uma vez, e o Aeon zera esse golpe.
- fonte: items.json (aeon_disk); dotacoach.gg/en/heroes/counters/winter-wyvern

#### Solar Crest (solar_crest)
- porque: dá barreira de 350 de dano físico e bônus de armadura e velocidade pro aliado que ela quer proteger fora da janela do combo.
- detalhe: 7s de +5 armadura, +60 de velocidade de ataque, +15% de velocidade de movimento e barreira de 350 de dano físico num aliado; usado em si mesma, perde os bônus de armadura, velocidade e ataque, segundo a nota do item.
- fonte: items.json (solar_crest); dotacoach.gg/en/heroes/winter-wyvern/builds/support (item situacional, patch 7.41f)

## Roshan
Winter Wyvern não está entre os 22 heróis com solo de Roshan perfilado (`resumo_por_heroi.json`) e tem zero linhas com o hero_id dela (112) nos datasets de pro de solo (`early_rosh_pro.json`: 0 de 874; `late_rosh_pro.json`: 0 de 4212). Ela aparece, sim, como a suporte presente no fosso durante o solo de outro herói em 18 dos 163 casos catalogados em `resumo_com_suporte.json` (11%), mais vezes ao lado do Ursa (5 de 43 solos dele, 12%). Ou seja, ela acompanha o carry até o Roshan, não solo ele.
