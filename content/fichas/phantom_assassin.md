---
id: ficha-phantom_assassin
titulo: "Phantom Assassin"
heroi: Phantom Assassin
patch: 7.41
posicoes: [1]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-tier1/data/jogadores_partida.csv
- dota-tier1/data/derivados/compras.parquet
- dota-roshan-solo/data/solos.json
- dota-roshan-solo/data/resumo_por_heroi.json
- https://api.opendota.com/api/heroes/44/itemPopularity
- https://api.opendota.com/api/heroes/44/matchups
- https://liquipedia.net/dota2/Phantom_Assassin/Changelogs (via busca: Scepter vira Fan of Knives)
- https://dotacoach.gg/heroes/phantom-assassin (fetch direto, patch 7.41f: confirma Scepter = Fan of Knives com os mesmos números das constantes locais)
---

## Resumo

Phantom Assassin é carry de agilidade pos1 puro: farma rápido com Battle Fury, evita trocas ruins com Blur e Immaterial, e fecha jogo com crítico garantido de Coup de Grace. No lote de Tier 1 analisado (dota-tier1, 10 aparições no draft entre pick e ban) ela foi pos1 em 100% dos 7 picks (fonte: draft.csv), sempre escolhida na 2ª ou 3ª fase do draft, como 4º ou 5º pick do time, ou seja, pick tardio pra ver a composição inimiga antes de confirmar (3 vitórias em 7, 43%). No pub (OpenDota, hero 44) os piores confrontos medidos são Hoodwink (31,7% em 41 jogos), Ember Spirit (33,3% em 45), Lifestealer (34,0% em 50), Pudge (35,1% em 57), Rubick (36,9% em 84) e Disruptor (37,8% em 74); os melhores são Dragon Knight (57,4% em 61), Ogre Magi (55,8% em 77) e Zeus (53,7% em 41).

## Pos 1 (carry)

- quando pegar: como pick tardio (4º/5º da equipe, fase 2 ou 3 do draft) depois de ver se o inimigo tem disable de alvo único forte ou true sight fácil; nos 7 jogos do lote ela sempre foi escolhida assim (fonte: draft.csv).
- itens iniciais: tango é o mais comum nos primeiros 90s dos 7 jogos pro (3 de 7), seguido de blight_stone e da receita do Wraith Band (2 de 7 cada); branches não aparece nesse recorte (fonte: compras.parquet)

### Build

#### Power Treads (power_treads)
- minuto: 6:20 (mediana dos 7 jogos pro, faixa 3:54-7:00)
- porque: velocidade de ataque cedo pra puxar o ritmo de Coup de Grace e ainda trocar pra Força se precisar de vida numa troca de lane.
- detalhe: Power Treads troca atributo on-the-fly; em Agilidade dá dano e velocidade de ataque, que é o que mais importa pros 17% de chance de crítico por acerto do Coup de Grace. É o primeiro item em 7 de 7 jogos do lote.
- fonte: compras.parquet (mediana 6:20, 7/7 jogos)

#### Battle Fury (bfury)
- minuto: 13:36 (mediana dos 7 jogos pro, faixa 12:48-15:48)
- porque: cleave de 60% em cone 650 limpa wave e camp inteiros com os mesmos ataques que já estão acontecendo.
- detalhe: o cleave ignora spell immunity (notes do items.json) e ainda dá +7,5 de regen de vida e +2,75 de mana, então sustenta a jungle sem precisar voltar à base toda hora. É o segundo item em 7 de 7 jogos, sem variação na ordem.
- fonte: compras.parquet (mediana 13:36, 7/7 jogos); items.json (bfury: cleave_damage_percent 60, cleave_distance 650, bonus_health_regen 7.5)

#### Black King Bar (black_king_bar)
- minuto: 20:19 (mediana dos 7 jogos pro, faixa 17:54-27:36)
- porque: 9/8/7s de imunidade a magia garante que Phantom Strike e Coup de Grace continuem acertando (ambos atravessam BKB) enquanto o inimigo não consegue mais te travar.
- detalhe: Phantom Strike e Coup de Grace têm `bkbpierce: Yes` nas constantes do jogo, ou seja, mesmo com o BKB ativo ela segue teleportando e critando normalmente; é o inimigo que perde a ferramenta de controle, não ela. Terceiro item em 5 dos 7 jogos; nos outros 2 (os que levaram Desolator mais cedo, ver abaixo) o Desolator veio antes do BKB.
- fonte: compras.parquet (mediana 20:19, 7/7 jogos); constants_abilities.json (phantom_assassin_phantom_strike bkbpierce Yes; phantom_assassin_coup_de_grace bkbpierce Yes); items.json (black_king_bar: duration 9/8/7, spell_reduce 60)

#### Desolator (desolator)
- minuto: 24:53 (mediana de 4 dos 7 jogos pro; a alternativa nos outros 3 foi Yasha/Manta, ver Situacionais)
- porque: -6 de armadura por 7s em quem ela bate deixa o próximo crítico de Coup de Grace (200-400% de dano) acertando um alvo mais fraco.
- detalhe: a redução de armadura também funciona contra estrutura (notes do items.json), então ajuda a abrir torre depois de uma luta vencida. Desolator ainda ganha +2 de dano por abate e +1 por assistência enquanto o Corruption está ativo no morto, até +30 fixo.
- combo: Stifling Dagger (34% de chance de crítico, o dobro do ataque normal) seguida de um auto-ataque com Desolator já aplicado: a dagger entra fácil à distância, o crítico vem no próximo acerto e a armadura já está -6 no alvo.
- fonte: compras.parquet (mediana 24:53, 4/7 jogos); items.json (desolator: corruption_armor -6, corruption_duration 7.0, bonus_damage_per_kill 2); constants_abilities.json (phantom_assassin_coup_de_grace crit_bonus 200/300/400%, dagger_crit_chance 34)

#### Satanic (satanic)
- minuto: 33:10 (mediana de 4 dos 7 jogos pro)
- porque: o ativo sobe o lifesteal pra 175% por 6s e ainda aplica dispel básico, então ela sai de silence/root curto e enche a vida batendo.
- detalhe: sem o ativo já vem com 30% de lifesteal passivo; em alvo grande (torre não entra) o Unholy Rage praticamente garante que uma troca de 1x1 termine com ela maior do que entrou. Empata com o Desolator como item mais comum entre os situacionais do lote (4 de 7 jogos cada).
- contra: Lifestealer é um dos piores confrontos medidos no pub (34,0% em 50 jogos, OpenDota matchups); Satanic devolve parte dessa troca de lifesteal porque o dispel do ativo limpa Open Wounds (o slow de sangramento) antes que ele puxe a troca.
- fonte: compras.parquet (mediana 33:10, 4/7 jogos); items.json (satanic: lifesteal_percent 30, unholy_lifesteal_total_tooltip 175, unholy_duration 6.0); api.opendota.com/heroes/44/matchups (Lifestealer 34,0% em 50 jogos)

### Situacionais

#### Manta Style (manta)
- porque: o dispel ativo limpa controle curto e as imagens dobram a farm quando a luta não compensa pra ela entrar sozinha.
- minuto: 22:06 (mediana de 3 dos 7 jogos pro, via Yasha ~19:21; alternativa ao Desolator na mesma janela)
- contra: silence, hex e root de curta duração, e também pra farmar mais rápido num mapa sem contato (as imagens limpam wave ou camp enquanto ela limpa outro).
- detalhe: o ativo tem 0,1s de invulnerabilidade e aplica dispel básico; as imagens melee causam 33% do dano dela e tomam 300% de volta, então servem pra farm e pra puxar torre, não pra entrar em luta sozinhas. Escolhido em vez do Desolator quando o inimigo tem mais disable de curta duração do que dano físico pesado pra punir a troca de item defensivo por item de farm.
- fonte: compras.parquet (mediana Yasha 19:21 / Manta 22:06, 3/7 jogos); items.json (manta: invuln_duration 0.1, tooltip_damage_outgoing_melee 33, tooltip_damage_incoming_total_pct 300)

#### Monkey King Bar (monkey_king_bar)
- minuto: 33:00 (1 dos 7 jogos pro; dado de 1 partida só, baixa confiança)
- contra: heróis com evasão alta de verdade (Butterfly no inimigo, outra Phantom Assassin, Phantom Lancer tardio, Windranger com Windrun): 80% de chance de ignorar a evasão e ainda somar 70 de dano mágico por acerto.
- detalhe: sem o MKB, evasão alta faz os ataques simplesmente errarem e nenhum deles pode virar crítico de Coup de Grace; com ele, 4 de cada 5 ataques continuam valendo.
- fonte: compras.parquet (1/7 jogos pro, 33:00); items.json (monkey_king_bar: bonus_chance 80, bonus_chance_damage 70)

#### Linken's Sphere (sphere)
- porque: bloqueia o disable de alvo único que a travaria antes de chegar perto pra bater, sem gastar o BKB nisso.
- minuto: 33:18 (1 dos 7 jogos pro; dado de 1 partida só, baixa confiança)
- contra: disable forte de alvo único que a travaria antes de ela chegar perto pra bater (hex, laguna blade, finger of death e afins).
- detalhe: o Spellblock bloqueia o próximo feitiço de alvo único a cada 14s; não ajuda contra área (Static Storm do Disruptor, por exemplo, que é em raio e também revela invisível).
- fonte: compras.parquet (1/7 jogos pro, 33:18); items.json (sphere: block_cooldown 14.0)

#### Nullifier (nullifier)
- porque: o dispel contínuo com silence e slow impede o alvo de fugir ou dispellar o combo antes dela fechar a janela de crítico.
- minuto: 24:42 (1 dos 7 jogos pro; dado de 1 partida só, baixa confiança)
- contra: alvo que foge ou se protege com buff/dispel bem na hora que ela ia fechar o combo (BKB, Ghost Scepter, haste, invisibilidade de item).
- detalhe: a ativa aplica dispel básico contínuo por 4s e ainda silencia e desacelera o alvo, então mesmo um inimigo que já ligou BKB fica preso pra ela chegar e bater.
- fonte: compras.parquet (1/7 jogos pro, 24:42); items.json (nullifier: mute_duration 4.0, slow_pct 10)

#### Abyssal Blade (abyssal_blade)
- porque: o stun garantido do Overwhelm trava o alvo corpo a corpo na hora certa pro crítico de Coup de Grace, sem depender só do bash.
- contra: alvos móveis e esguios que ela precisa travar no corpo a corpo pra garantir a janela de crítico; o stun do Overwhelm atravessa imunidade a debuff.
- detalhe: o bash passivo (25% de chance melee) não funciona contra Spirit Breaker, Faceless Void e Slardar (lista oficial do item); contra o resto, dá 1,6s de stun garantido com o ativo Overwhelm mais 25% de chance de bash melee a cada acerto depois disso. Não apareceu nos 7 jogos pro do lote local (amostra pequena), mas é item late comum no pub: aparece junto de Skull Basher e Sange nas compras tardias registradas pelo OpenDota (hero 44).
- fonte: items.json (abyssal_blade: stun_duration 1.6, bash_chance_melee 25, "cannot trigger Bash" em Spirit Breaker/Faceless Void/Slardar); api.opendota.com/heroes/44/itemPopularity (late_game_items: basher 32, sange 18, abyssal_blade 15 compras)

#### Aghanim's Scepter (ultimate_scepter, concede Fan of Knives)
- porque: Fan of Knives dá dano em área com Break, abrindo sozinha quem ela não fura no 1x1 e lidando com grupos de ilusão ou invocação.
- contra: backline de lifesteal, armadura alta ou regeneração passiva que ela não consegue abrir sozinha batendo, e grupos de ilusão/invocação que precisam de dano em área.
- detalhe: o Scepter de Phantom Assassin concede Fan of Knives: dano em área igual a 30% da vida máxima de cada vítima mais 4s de Break (desliga habilidade e item ativo/passivo). Confirmado direto no patch atual (dotacoach.gg, 7.41f) com os mesmos números das constantes locais (30% de dano inicial, 4s de Break, raio 550, 14s de cooldown, 80 de mana). Isso é exatamente a resposta pro pior matchup dela no pub, Lifestealer (34,0% de vitória, OpenDota matchups), porque o Break tira o Open Wounds e a sustentação dele antes da troca.
- fonte: compras.parquet (2/7 jogos pro, usado como item late); constants_abilities.json (phantom_assassin_fan_of_knives: pct_health_damage_initial 30%, duration 4, radius 550, mc 80, cd 14); dotacoach.gg/heroes/phantom-assassin (fetch direto, 7.41f: confirma que é o Scepter que concede a habilidade, mesmos números); liquipedia.net/dota2/Phantom_Assassin/Changelogs (via busca, corrobora); api.opendota.com/heroes/44/matchups (Lifestealer 34,0% em 50 jogos)

## Roshan

Ela soloa Roshan de verdade: os 2 replays pro do dataset local (dota-roshan-solo) são os únicos abates de Roshan do Phantom Assassin registrados, e os dois são dela sozinha. No primeiro (match 8763921209), classificado como "solo com ajuda curta", ela fez 97,3% do dano total (9772 de 10044) com um Lion do lado dela só 6s no fosso sem quase bater; matou no minuto 27:30, 66 golpes, nível 21, com diffusal_blade, power_treads, bfury, desolator e satanic já prontos, vida mínima 2119/2320 (91%) durante o solo. No segundo (match 8778466035), "solo puro", 100% do dano dela, matou no minuto 27:50, 53 golpes, nível 19, com bfury, black_king_bar, desolator, power_treads e lifesteal (Morbid Mask, ainda não virou Satanic), vida mínima 1568/1792 (87%). Os dois jogos foram no fosso de baixo do mapa. O resumo agregado do mesmo dataset (resumo_por_heroi.json) bate com isso: mediana de início 27:08 (faixa 27:03-27:14), nível mediano 20, net worth mediano 17.274, e ela saiu com a aegis nas duas vezes (2/2), sem o time inimigo ver a morte (0/2), fechando torre e abate de herói em até 3 minutos depois do Roshan nas duas partidas (2/2). Amostra pequena (2 jogos), mas os dois concordam: ela soloa sozinha, com o kit básico pronto (Treads + Bfury + BKB + Desolator), sem precisar de Satanic completo pra isso.

Fonte: dota-roshan-solo/data/solos.json; dota-roshan-solo/data/resumo_por_heroi.json
