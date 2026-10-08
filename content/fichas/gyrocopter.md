---
id: ficha-gyrocopter
titulo: "Gyrocopter"
heroi: Gyrocopter
patch: 7.41
posicoes: [1]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-tier1/data/draft.csv
- dota-tier1/data/jogadores_partida.csv
- dota-tier1/data/derivados/compras.parquet
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/72/itemPopularity
- https://api.opendota.com/api/heroStats
- https://api.opendota.com/api/benchmarks?hero_id=72
---
## Resumo

Gyrocopter é um carry de agilidade à distância que farma com Flak Cannon (área, dano físico que ignora BKB) e Rocket Barrage (área, dano mágico), e explode alvo único com Homing Missile (stun que escala com nível) seguido de Call Down (3 bombardeios em área). No draft do 7.41 ele quase só aparece como pos1: 19 das 24 escolhas no lote de partidas pro analisado (Atlas tier1, `draft.csv`), contra 3 como pos4, 1 como pos3 e 1 como pos5, e nunca foi primeiro pick (só fases 2 e 3 do draft). O OpenDota também o classifica como Carry/Nuker/Disabler, nunca Support (`heroes.json`). Como right-clicker puro ele é mediano em pubs (46,2% em 139.929 partidas, `heroStats.json` local) e, nesse lote pro pequeno, perdeu mais do que ganhou como pos1 (7V-12D, 36,8%); por isso esta ficha cobre só a posição 1, que é a única com volume e dado de item/timing confiável. Pos3/4/5 tiveram 1 a 3 jogos cada no lote, amostra pequena demais para montar build e foram deixadas de fora.

## Pos 1 (carry)
- quando pegar: no lote pro, Gyrocopter nunca foi pick de abertura: dos 19 jogos como pos1, 9 vieram da fase 2 do draft (4V-5D, 44,4%) e 10 da fase 3 (3V-7D, 30%); amostra pequena, mas a direção é clara, ele rende mais quando ainda dá pra reagir ao time inimigo do que como último pick cego (`draft.csv`).
- itens iniciais: tango, branches, faerie_fire (no lote pro, Tango aparece em 11 dos 19 jogos nos primeiros 90s; no público, Iron Branch, Faerie Fire e Tango são os 3 itens de abertura mais comprados pelo herói: `compras.parquet` e `itemPopularity` da OpenDota)

### Build

#### Falcon Blade (falcon_blade)
- minuto: 4:54
- porque: mana e vida extra sem gastar slot de boots; sustenta Flak Cannon e Rocket Barrage, que são caros (50-80 e 85 de mana).
- detalhe: comprado em 17 dos 19 jogos pos1 do lote pro (89%), quase sempre antes do Treads. +200 de vida e +1,8 de regen de mana (`items.json`) evitam voltar à base só por mana no início do farm.
- fonte: compras.parquet (Atlas tier1, 17/19 jogos, mediana 4:54); items.json

#### Power Treads (power_treads)
- minuto: 7:26
- porque: troca de atributo (Força/Agilidade/Inteligência) e +25% de velocidade de ataque aceleram o farm de Flak Cannon desde o início.
- detalhe: presente em 19 dos 19 jogos pos1 (100%), sempre o primeiro item de bota. Comece em Agilidade para bater mais rápido na jungle e na lane; troque para Força ao ser iniciado.
- fonte: compras.parquet (19/19 jogos, mediana 7:26); items.json

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 17:44
- porque: cria um Side Gunner que dispara ataques extras em 2 alvos e ignora BKB, dobrando o DPS físico de Flak Cannon.
- detalhe: comprado em 14 dos 19 jogos (74%). A habilidade do item vem do próprio kit de Gyrocopter (`gyrocopter_side_gunner_spawn_ability`): ataque físico, bkb-pierce sim, 1 alvo extra, cadência 1.3/s. Combinado com Flak Cannon (também bkb-pierce), o Scepter dobra a fatia de dano que nenhum BKB inimigo consegue bloquear.
- contra: time inimigo com Black King Bar ou magic immunity: Flak Cannon e o Side Gunner continuam acertando porque são dano físico, enquanto Rocket Barrage, Homing Missile e Call Down (todos mágicos) são bloqueados.
- combo: Flak Cannon + Scepter em cima de um BKB ativo é a única fonte de dano garantida nessa janela.
- fonte: compras.parquet (14/19 jogos, mediana 17:44); constants_abilities.json (gyrocopter_flak_cannon, gyrocopter_side_gunner_spawn_ability, gyrocopter_rocket_barrage, gyrocopter_homing_missile, gyrocopter_call_down: campos bkbpierce)

#### Black King Bar (black_king_bar)
- minuto: 24:46
- porque: dispel básico + 60% de resistência mágica + imunidade a novos disables por 9/8/7s, pra sobreviver ao burst e manter o Flak Cannon ligado.
- detalhe: comprado em 16 dos 19 jogos (84%), normalmente depois do Scepter. A duração cai para 8s na 2ª compra e 7s na 3ª, então não resolve save repetido contra disable longo.
- contra: silence, stun e hex de curta/média duração que tentam travar o cast de Rocket Barrage/Homing Missile/Call Down; não resolve dano puro nem debuffs que ignoram dispel básico.
- fonte: compras.parquet (16/19 jogos, mediana 24:46); items.json (black_king_bar)

#### Daedalus (greater_crit)
- minuto: 30:06
- porque: 30% de chance de crítico em 225% do dano, multiplicando cada ataque de Flak Cannon e do Side Gunner.
- detalhe: comprado em 14 dos 19 jogos (74%). Critical Strike não funciona contra construções, então não ajuda a puxar torre, só heróis e Roshan.
- fonte: compras.parquet (14/19 jogos, mediana 30:06); items.json (greater_crit)

#### Satanic (satanic)
- minuto: 33:37
- porque: 30% de lifesteal (sobe pra 175% por 6s na ativa) sustenta Gyrocopter dentro da própria nuvem de Flak Cannon/Rocket Barrage.
- detalhe: comprado em 12 dos 19 jogos (63%). A Unholy Rage aplica dispel básico ao ativar, então também serve pra limpar um slow ou debuff leve antes de entrar na luta.
- combo: ativar Satanic e entrar com Flak Cannon: o lifesteal físico some com o dano em área enquanto a ult do inimigo ainda está em cooldown.
- fonte: compras.parquet (12/19 jogos, mediana 33:37); items.json (satanic)

### Situacionais

#### Manta Style (manta)
- minuto: 17:00
- porque: dispel básico instantâneo (0,1s de invulnerabilidade no cast) tira a maioria dos debuffs de curta duração que travariam o cast das habilidades.
- detalhe: comprado em 6 dos 19 jogos (32%), normalmente como alternativa ao Scepter quando o time já tem outro fonte de burst físico constante. As imagens causam 28% do dano dele (ranged) e servem pra puxar wave/camp em paralelo.
- contra: silence ou root de curta duração lançado antes do burst principal; não ajuda contra stun já aplicado nem contra dano puro.
- fonte: compras.parquet (6/19 jogos, mediana 17:00); items.json (manta)

#### Hurricane Pike (hurricane_pike)
- minuto: 21:05
- porque: empurra Gyrocopter e o alvo 425 de distância e libera 5 ataques sem limite de alcance por 6s, o único jeito de se afastar de um corpo a corpo que chegou perto.
- detalhe: comprado em 6 dos 19 jogos (32%). Não interrompe a ação do alvo (não cancela um dash já em andamento) e não funciona em unidade dentro de Chronosphere, Duelo ou Buraco Negro.
- contra: heróis corpo a corpo que dependem de ficar colado (iniciação a pé, sem blink/gap close próprio): o espaço aberto pelo Pike tira Gyrocopter do alcance de ataque deles.
- fonte: compras.parquet (6/19 jogos, mediana 21:05); items.json (hurricane_pike)

#### Monkey King Bar (monkey_king_bar)
- minuto: 34:43
- porque: 80% de chance de ignorar evasão e ainda causar 70 de dano mágico bônus por ataque.
- detalhe: comprado em 4 dos 19 jogos (21%), sempre depois do core de dano físico (Daedalus/Satanic), nunca no lugar dele.
- contra: heróis ou itens de evasão alta (Butterfly inimigo, Windranger com Windrun, Phantom Assassin): sem o MKB, a maior parte dos ataques de Gyrocopter simplesmente erra.
- fonte: compras.parquet (4/19 jogos, mediana 34:43); items.json (monkey_king_bar)

#### Eye of Skadi (skadi)
- minuto: 43:32
- porque: reduz 50% da cura recebida pelo alvo e lentifica em até 50% (alvo à distância), travando heróis de sustain que sobreviveriam ao burst.
- detalhe: comprado em só 2 dos 19 jogos (11%); amostra pequena, mas o efeito (Cold Attack: -20% velocidade de ataque, -50%/-25% movimento, -50% de regeneração por 3s) é direto do item.
- contra: heróis com lifesteal ou heal alto (Satanic inimigo, Omniknight, Dazzle): a redução de cura some antes que o sustain deles vire a luta.
- fonte: compras.parquet (2/19 jogos, mediana 43:32); items.json (skadi)

#### Swift Blink (swift_blink)
- minuto: 44:40
- porque: reposicionamento tardio (1200 de alcance) que Gyrocopter não tem de outra forma, já que ele não tem blink nem dash no kit base.
- detalhe: comprado em 4 dos 19 jogos (21%). Depois do blink, +35 de Agilidade e 40% de velocidade de movimento fantasma por 6s ajudam a perseguir ou fugir; não pode ser usado nos 3s após tomar dano.
- fonte: compras.parquet (4/19 jogos, mediana 44:40); items.json (swift_blink)

#### Divine Rapier (rapier)
- minuto: 52:39
- porque: all-in de dano quando o jogo já passou de 50 minutos e o time está muito na frente em farm; 250 de dano bônus (ou 25% de amplificação de feitiço) por 5.600 de ouro.
- detalhe: comprado em 8 dos 19 jogos (42%), o item mais comum do late game nesse lote. Cai no chão se Gyrocopter morrer e pode ser roubado pelo time inimigo, então só compensa com vantagem de visão/posição.
- contra: jogo já decidido no farm, sem precisar de survivability extra.
- fonte: compras.parquet (8/19 jogos, mediana 52:39); items.json (rapier)

## Roshan

Gyrocopter soloa Roshan quando está bem hiper-farmado: nos replays locais (`resumo_por_heroi.json`, 6 solos registrados, 1 sem nenhum aliado perto), o início mediano foi 50:51 (faixa 42:25–69:48), no nível mediano 27,5 (26–30) e patrimônio mediano de 39.519 de ouro, com a vida do Roshan em ~11.980 no começo do solo. O inventário nesses 6 solos confirma o core desta ficha: Satanic e Black King Bar em 6 de 6, Daedalus (greater_crit) em 5 de 6, e Butterfly, Divine Rapier e Swift Blink em 3 de 6 cada. Ele ficou com a aegis em 6 de 6 tentativas (nenhuma roubada). Com suporte por perto (`resumo_com_suporte.json`, 3 solos), o início mediano cai para 38:04 (nível 24, patrimônio 26.453): o time cobrindo visão permite soloar mais cedo, com menos itens prontos. Não há dado local sobre Roshan em grupo (com o time inteiro na luta) para este herói.
