---
id: ficha-legion_commander
titulo: "Legion Commander"
heroi: Legion Commander
patch: 7.41
posicoes: [3]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- https://api.opendota.com/api/heroes/104/itemPopularity
- https://api.opendota.com/api/explorer (SQL: player_matches, hero_id=104, lane_role, match_id>8.7e9)
- https://api.opendota.com/api/explorer (SQL: purchase_log por item, hero_id=104, lane_role=3, match_id>8.7e9: minuto médio e contagem de compra por item no público)
- https://liquipedia.net/dota2/api.php?action=parse&page=Legion_Commander
---

## Resumo

Legion Commander é uma iniciadora e disabler de Força: trava um herói inimigo sozinho com Duel (ninguém mais participa, nenhum dos dois pode usar item e o alvo não pode usar habilidade) e sustenta a troca com o lifesteal de Moment of Courage. No draft das equipes Tier 1 analisadas ela é só pos 3: 7 picks, os 7 marcados como offlane, 6 vitórias e 1 derrota, e 3 bans no mesmo recorte (fonte: draft.csv). Em partidas públicas recentes do mesmo patch o padrão se repete numa amostra bem maior: 95,3% dos registros (366 de 384, consulta SQL no OpenDota Explorer, match_id acima de 8,7 bilhões) são lane_role=3, contra só 10 no mid e 8 na safe lane, com 50% de vitória nos 366 jogos de offlane. O snapshot amplo do heroStats.json mostra pro_pick 0 pra ela, o que só confirma que o recorte específico de Tier 1 (7 jogos) é o retrato mais atual que existe nas fontes locais; não há nenhum registro dela como pos 4 ou pos 5 em nenhuma das duas fontes.

## Pos 3 (offlane)

- quando pegar: ela entra como disabler de alvo único contra times que dependem de um carregador de dano isolado (carry ou mid que ainda não tem BKB): o Duel trava esse herói longe do resto da luta enquanto ela conta com Press the Attack pra limpar debuff e Moment of Courage pra não morrer na troca. No recorte de Tier 1 analisado ela é só offlane, 6 vitórias em 7 jogos (fonte: draft.csv).
- itens iniciais: tango, blades_of_attack, gauntlets, circlet (padrão Tier 1, compras.parquet); no público o início mais comum troca blades_of_attack por quelling_blade (fonte: itemPopularity, start_game_items)

### Build

#### Chainmail (chainmail)
- minuto: 3:26 (mediana, 7 de 7 jogos Tier 1)
- porque: armadura barata cedo pra sobreviver a troca inicial, e já é metade da receita da Blade Mail.
- detalhe: +4 de armadura reduz o dano físico que ela toma na lane; combinado com o Broadsword, o gold vira Blade Mail sem passar por um item "perdido" no meio do caminho.
- fonte: compras.parquet (7/7 jogos Tier 1, mediana 3:26); items.json (chainmail: bonus_armor 4)

#### Phase Boots (phase_boots)
- minuto: 7:12 (mediana, 7 de 7 Tier 1; confere com o público, 336 de 366 ≈ 92%, mesma mediana de 7:12)
- porque: o ativo tira a colisão com unidade pra fechar distância sem desviar de creep antes de travar o Duel.
- detalhe: +20% de velocidade de movimento por 3s no ativo (herói melee), mais o bônus fixo de dano do item; sem isso ela perde a corrida até quem ela quer duelar.
- fonte: compras.parquet (7/7 Tier 1, mediana 7:12); items.json (phase_boots: phase_movement_speed 20, phase_duration 3.0); api.opendota.com/api/explorer (SQL purchase_log, público: phase_boots em 336 de 366 jogos, média 7:11); api.opendota.com/heroes/104/itemPopularity (early_game_items: boots é o item mais comprado da fase)

#### Soul Ring (soul_ring)
- minuto: 10:31 (mediana, 6 de 7 Tier 1)
- porque: mana reciclável e barata pra manter Overwhelming Odds e Duel saindo sem secar o pool.
- detalhe: converte vida em 170 de mana por 10s. No público o item é bem mais raro (66 de 366 ≈ 18%, OpenDota Explorer), então o padrão de Tier 1 (86% dos jogos) sugere que no nível alto a mana cedo pesa mais do que no público.
- fonte: compras.parquet (6/7 Tier 1, mediana 10:31); items.json (soul_ring: mana_gain 170, duration 10); api.opendota.com/api/explorer (SQL purchase_log, público: soul_ring em 66 de 366 jogos); api.opendota.com/heroes/104/itemPopularity (early_game_items: soul_ring, contagem baixa)

#### Broadsword (broadsword)
- minuto: 12:47 (mediana, 5 de 7 Tier 1)
- porque: segunda metade da receita da Blade Mail, dano puro enquanto o item não fecha.
- detalhe: +15 de dano parado no inventário até virar Blade Mail junto com o Chainmail.
- fonte: compras.parquet (5/7 Tier 1, mediana 12:47); items.json (broadsword: bonus_damage 15)

#### Blade Mail (blade_mail)
- minuto: 14:05 (mediana, 5 de 7 Tier 1; no público, 13:36, 343 de 366 ≈ 94%)
- porque: devolve pro alvo o próprio dano que ela recebe trocando golpe por golpe durante o Duel.
- detalhe: o ativo devolve o dano recebido por 5,5s com o percentual de retorno aumentado em 85% (texto oficial do item: "return all incoming damage, increasing the percentage by 85%"), somado à passiva de 10 fixo mais 15% de todo ataque sofrido mesmo sem ativar. Como "nenhum dos dois pode usar itens" durante o Duelo (texto oficial da habilidade), o ativo precisa já estar ligado ANTES de apertar Duel, não dá pra ativar no meio.
- combo: ativar Blade Mail e, no clique seguinte, lançar Duel: o alvo é forçado a atacar e recebe o próprio dano de volta, o que empata ou inverte duelos contra quem bate mais forte que ela.
- fonte: items.json (blade_mail: duration 5.5, active_reflection_pct 85, passive_reflection_constant 10, passive_reflection_pct 15, descrição: "return all incoming damage, increasing the percentage by 85%"); constants_abilities.json (legion_commander_duel, desc: "Neither hero can use items"); compras.parquet (5/7 Tier 1, mediana 14:05); api.opendota.com/api/explorer (SQL purchase_log, público: blade_mail em 343 de 366 jogos, média 13:38); api.opendota.com/heroes/104/itemPopularity (mid_game_items: blade_mail, 2º item mais comprado da fase)

#### Blink Dagger (blink)
- minuto: 15:43 (mediana, 7 de 7 Tier 1; no público, 15:18, 353 de 366 ≈ 96%)
- porque: fecha os 200 de alcance de lançamento do Duel de forma instantânea, antes do time inimigo se espalhar.
- detalhe: 1200 de alcance de blink contra só 200 de cast range do Duel: sem ele, ela precisa correr até ficar colada no alvo antes de travar o duelo.
- combo: blinka em cima do alvo que ela já deixou marcado (geralmente o mesmo em que acabou de ativar Blade Mail) e trava o Duel na sequência, sem dar tempo de reação.
- fonte: compras.parquet (7/7 Tier 1, mediana 15:43); items.json (blink: blink_range 1200); constants_abilities.json (legion_commander_duel: abilitycastrange 200); api.opendota.com/api/explorer (SQL purchase_log, público: blink em 353 de 366 jogos, média 15:17)

#### Black King Bar (black_king_bar)
- minuto: 28:27 (mediana, 6 de 7 Tier 1; componentes Ogre Axe e Mithril Hammer medianos em 27:13 e 26:30 nos mesmos jogos)
- porque: segura silence, stun e slow de longe pra ela sobreviver até alcançar e travar o Duel.
- detalhe: 60% de redução de dano mágico e dispel básico por 9/8/7s, dependendo do nível. Mas o próprio Duel dela "atravessa" o BKB do inimigo (bkbpierce: Yes, nos dados oficiais da habilidade): ou seja, o BKB do adversário não impede ser puxado pro duelo, só ajuda ela a sobreviver no caminho até lá.
- fonte: compras.parquet (6/7 Tier 1, mediana 28:27; ogre_axe 9/7 compras e mithril_hammer 6/7 compras nos mesmos jogos); items.json (black_king_bar: spell_reduce 60, duration "9/8/7"); constants_abilities.json (legion_commander_duel: bkbpierce "Yes")

### Situacionais

#### Crystalys (lesser_crit)
- porque: no Duel, as duas só se atacam por tempo fixo; o crit bruto decide a troca antes do alvo de HP alto reverter o placar.
- minuto: 25:26 (1 de 7 Tier 1); no público, 26:31 (76 de 366 ≈ 21%, OpenDota Explorer)
- contra: duelos travados contra alvo com HP alto e pouca armadura, quando falta dano puro pra fechar o Duel dentro dos 4 a 5s de duração.
- detalhe: 30% de chance de bater com 160% de dano. Como o Duel obriga as duas a só se atacar, qualquer stat de ataque puro vale em dobro pro resultado do confronto.
- fonte: compras.parquet (1/7 Tier 1); api.opendota.com/api/explorer (SQL purchase_log, público: lesser_crit em 76 de 366 jogos, média 26:31); api.opendota.com/heroes/104/itemPopularity (mid_game_items: lesser_crit); items.json (lesser_crit: crit_chance 30, crit_multiplier 160); constants_abilities.json (legion_commander_duel: duration 4/4.5/5)

#### Aghanim's Scepter (ultimate_scepter)
- porque: dá atributos e vida/mana pra ela aguentar mais, e os campos team_duel da habilidade sugerem alcance além de um alvo só.
- minuto: 38:50 (mediana, 3 de 7 Tier 1); no público, 29:25 (75 de 366 ≈ 20%, OpenDota Explorer)
- contra: jogos em que só travar um alvo não resolve a luta: quando o time inimigo tem mais de um carregador de dano pra segurar o resto da equipe enquanto ela duela.
- detalhe: dá +10 em todos os atributos e +175 de vida/mana (texto genérico do item, válido pra qualquer herói). Os dados oficiais do Duel já trazem os atributos team_duel, team_duel_damage_pct e team_duel_radius na lista de valores da habilidade (zerados na tabela base), o que indica que o Scepter muda o Duel pra uma versão em grupo: mas o valor exato não está documentado nas fontes locais, então não vai afirmação de número aqui.
- fonte: compras.parquet (3/7 Tier 1, mediana 38:50); api.opendota.com/api/explorer (SQL purchase_log, público: ultimate_scepter em 75 de 366 jogos, média 29:25); items.json (ultimate_scepter: bonus_all_stats 10, bonus_health 175, bonus_mana 175); constants_abilities.json (legion_commander_duel: atributos team_duel / team_duel_damage_pct / team_duel_radius presentes na habilidade)

#### Hand of Midas (hand_of_midas)
- porque: converte farm parado em ouro quando falta alvo seguro pra puxar, acelerando o resto do build sem perder tempo de jogo.
- minuto: 32:18 (1 de 7 Tier 1)
- contra: jogo tranquilo em que ela fica sem alvo seguro pra duelar e precisa converter farm sobrando em ouro pra alcançar o resto do build mais rápido.
- detalhe: mata um creep não-herói por 160 de ouro e dá 35 de velocidade de ataque. Amostra de 1 jogo em 7: é exceção pontual, não padrão de build.
- fonte: compras.parquet (1/7 Tier 1); items.json (hand_of_midas: bonus_gold 160, bonus_attack_speed 35)

#### Silver Edge (silver_edge)
- porque: o break desliga a passiva que sustenta o alvo antes do Duel, tirando a defesa que decidiria a troca.
- minuto: 31:13 (23 de 366 ≈ 6%, público, OpenDota Explorer; não aparece na amostra Tier 1 de 7 jogos)
- contra: heróis cuja defesa depende de uma passiva (ex.: evasão, regeneração ou dano passivo): o golpe que revela a invisibilidade desliga a passiva do alvo por 5s.
- detalhe: 17s de invisibilidade pra escolher o ângulo de entrada, e o ataque que termina a invisibilidade ainda soma 300 de dano físico bônus.
- fonte: api.opendota.com/api/explorer (SQL purchase_log, público: silver_edge em 23 de 366 jogos, média 31:13); api.opendota.com/heroes/104/itemPopularity (late_game_items: silver_edge); items.json (silver_edge: windwalk_duration 17.0, windwalk_bonus_damage 300, backstab_duration 5, texto do item: "disable their passive abilities for 5 seconds")

#### Assault Cuirass (assault)
- porque: depois que o Duel termina, a aura segura o resto da luta em grupo, dando armadura pro time e tirando do inimigo.
- minuto: 34:50 (50 de 366 ≈ 14%, público, OpenDota Explorer; não aparece na amostra Tier 1 de 7 jogos)
- contra: times que seguram com dano físico sustentado em grupo depois que o Duel já terminou: a aura dá 5 de armadura pros aliados e tira 5 dos inimigos num raio de 1200.
- fonte: api.opendota.com/api/explorer (SQL purchase_log, público: assault em 50 de 366 jogos, média 34:50); api.opendota.com/heroes/104/itemPopularity (late_game_items: assault); items.json (assault: aura_positive_armor 5, aura_negative_armor -5, aura_radius 1200)

#### Nullifier (nullifier)
- porque: o dispel tira o buff de fuga do alvo marcado antes dela travar o Duel, então ele não escapa do raio de cast.
- minuto: 63:27 (1 de 7 Tier 1, jogo de mais de 1h); no público, 42:42 (13 de 366 ≈ 4%, OpenDota Explorer)
- contra: heróis com buff de fuga dispelável ou resistência a lentidão tentando escapar do raio do Duel antes dela travar.
- detalhe: o Nullify aplica dispel básico no alvo e segue dispelando e lentificando por 4s. Item raro pra ela nas duas fontes: só compensa em jogos muito longos, com o resto do build já fechado.
- fonte: compras.parquet (1/7 Tier 1, 63:27); api.opendota.com/api/explorer (SQL purchase_log, público: nullifier em 13 de 366 jogos, média 42:42); api.opendota.com/heroes/104/itemPopularity (late_game_items: nullifier); items.json (nullifier: mute_duration 4.0, slow_pct 10)

#### Diffusal Blade (diffusal_blade)
- porque: o Manabreak seca a mana de quem depende de feitiço pra fugir, então o alvo não escapa antes dela puxar o Duel.
- minuto: 37:15 (1 de 7 Tier 1); no público, 40:34 (8 de 366 ≈ 2%, OpenDota Explorer)
- contra: heróis que dependem de mana pra lançar o próprio feitiço de fuga: o Manabreak queima 40 de mana por ataque e vira dano físico extra.
- detalhe: amostra mínima nas duas fontes (1 jogo Tier 1, 8 jogos no público): tratar como escolha pontual, não como padrão de build.
- fonte: compras.parquet (1/7 Tier 1); api.opendota.com/api/explorer (SQL purchase_log, público: diffusal_blade em 8 de 366 jogos, média 40:34); api.opendota.com/heroes/104/itemPopularity (late_game_items: diffusal_blade); items.json (diffusal_blade: feedback_mana_burn 40)

## Roshan

Sem solo registrado: o dataset de replays de Roshan solo (dota-roshan-solo) não tem nenhum abate solo da Legion Commander, e ela nem aparece entre os 22 a 29 heróis resumidos nos arquivos de resumo (resumo_por_heroi.json, resumo_com_suporte.json). Em equipe ela aparece em só 1 partida de todo o dataset (pro, match 8742718833): deu o último golpe aos 29:32, mas só 36,5% do dano total: Huskar (15s) e Nevermore (8s) também estavam no fosso. Amostra de 1 jogo: não dá pra tirar padrão de minuto, nível ou item.

Fonte: C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json; C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
