---
id: ficha-elder_titan
titulo: "Elder Titan"
heroi: Elder Titan
patch: 7.41
posicoes: [3, 4, 5]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-tier1/data/derivados/compras.parquet
- dota-roshan-solo/data/solos.json
- https://api.opendota.com/api/heroes/103/itemPopularity
- https://dotacoach.gg/en/heroes/elder-titan
---

## Resumo

Elder Titan é um iniciador e disabler de Força: manda o Astral Spirit pra frente (dano em área, ganha velocidade e dano por herói atravessado), usa o Echo Stomp (ele e o espírito atordoam/dormem tudo num raio de 475) e fecha com o Earth Splitter, uma rachadura que implode em 2,72s causando dano baseado na vida máxima do alvo. O Natural Order (passiva) derruba a armadura e a resistência mágica base de quem chega perto dele e do espírito, o que o torna bom mesmo sem muito item. No draft de Tier 1 analisado (dota-tier1, 16 picks do herói) ele foi pos5 em 14 jogos (87,5%, 5 vitórias), pos3 em 1 e pos4 em 1; amostra pequena, mas direção clara pra hard support. Em dados agregados por papel (dotacoach.gg, patch 7.41f), a distribuição é mais equilibrada entre as três posições: offlane (pos3) 41,0% de seleção com 49,6% de vitória, hard support (pos5) 27,4% com 55,7% e support (pos4) 26,1% com 54,7%; mid e carry somam só 5,5% e ficam abaixo de 46%, fora do escopo desta ficha. (fonte: draft.csv; dotacoach.gg/en/heroes/elder-titan)

## Pos 5 (suporte duro)

- quando pegar: é a posição mais jogada e com melhor retorno dele no recorte de pro analisado (14 de 16 picks, 87,5%, 5 vitórias) e a de maior vitória no agregado por papel (55,7% em dotacoach.gg). Ele não precisa de item pra ser relevante: o combo Astral Spirit → Echo Stomp → Earth Splitter já trava e estoura vida percentual sozinho. (fonte: draft.csv; compras.parquet; dotacoach.gg/en/heroes/elder-titan)
- itens iniciais: tango, ward_observer, ward_sentry, ring_of_regen, flask (observado nos jogos pos4/pos5 do dataset; wards costumam ser compradas ainda na tela de carregamento)

### Build

#### Tranquil Boots (tranquil_boots)
- minuto: 7:02 (mediana, 10 de 14 jogos pos5)
- porque: velocidade e regen baratos pra chegar no raio de 475 do Echo Stomp e no alcance de 1.200 do Astral Spirit sem gastar ouro em item de combate ainda.
- detalhe: +65 de velocidade de movimento e +14 de regen de vida enquanto não ataca nem é atacado (quebra por 13s ao entrar em combate). Pra um herói que vive se metendo no meio do time inimigo pra travar o Echo Stomp, é a bota que paga sustento de graça.
- fonte: compras.parquet (10/14 jogos pos5, mediana 7:02); items.json (tranquil_boots: bonus_movement_speed 65, bonus_health_regen 14); constants_abilities.json (elder_titan_echo_stomp: radius 475; elder_titan_ancestral_spirit: abilitycastrange 1200)

#### Magic Wand (magic_wand)
- minuto: 11:39 (mediana, 6 de 14 jogos pos5)
- porque: cargas baratas de vida e mana pra sobreviver trocas de early game e ainda ter mana pra Echo Stomp (100) e Astral Spirit (80 a 110).
- fonte: compras.parquet (6/14 jogos pos5, mediana 11:39); constants_abilities.json (elder_titan_echo_stomp: mc 100; elder_titan_ancestral_spirit: mc 80/90/100/110)

#### Drum of Endurance (ancient_janggo)
- minuto: 18:14 (mediana, 7 de 14 jogos pos5)
- porque: aura de velocidade pro time todo e um ativo de velocidade de ataque/movimento que ajuda a alcançar quem está fugindo do raio do Echo Stomp.
- detalhe: ativo dá +35 de velocidade de ataque e +13% de movimento por 6s num raio de 1.200; a passiva dá +15 de movimento e +2,5 de regen de vida. É item de setup de gank, não de dano próprio.
- fonte: compras.parquet (7/14 jogos pos5, mediana 18:14); items.json (ancient_janggo: aura_movement_speed 15, aura_health_regen 2.5)

#### Force Staff (force_staff)
- minuto: 29:25 (mediana, 8 de 14 jogos pos5)
- porque: empurra 600 unidades um aliado pra fora de perigo ou um inimigo pra dentro da linha do Earth Splitter antes da rachadura implodir.
- detalhe: a rachadura do Earth Splitter leva 2,72s pra implodir e tem só 315 de largura; forçar um inimigo que tentou se afastar de volta pra dentro dessa faixa garante o dano percentual de vida máxima (34/42/50%) mesmo que ele tenha reagido ao cast.
- fonte: compras.parquet (8/14 jogos pos5, mediana 29:25); items.json (force_staff: push_length 600); constants_abilities.json (elder_titan_earth_splitter: crack_time 2.7182, crack_width 315, damage_pct 34/42/50)

### Situacionais

#### Solar Crest (solar_crest, via Pavise)
- porque: dá ao carry do time o empurrão de armadura e dano pra fechar a troca que o Natural Order já abriu, sem gastar ouro num item de dano próprio.
- minuto: 20:09 (Pavise) e 24:26 (upgrade completo), 4 de 14 jogos pos5; nos 4 jogos que compraram Pavise, todos upgradaram pra Solar Crest
- contra: time inimigo com um carry ou pos2 que precisa de empurrão de dano/armadura pra vencer a troca depois que o Natural Order já tirou a resistência do alvo adversário.
- detalhe: o ativo "Shine" dá +5 de armadura, +60 de velocidade de ataque, +15% de movimento e uma barreira de 350 de dano físico por 7s, mas só funciona em aliado (não dá bônus em você mesmo, só a barreira). Use no carry do seu time, não em você.
- fonte: compras.parquet (4/14 jogos pos5, Pavise 20:09 → Solar Crest 24:26); items.json (solar_crest: bonus_armor 7, attrib self_movement nulo pra bônus de combate; pavise components: wizard_hat, fluffy_hat, ring_of_protection; solar_crest components: pavise, chainmail, wind_lace)

#### Glimmer Cape (glimmer_cape)
- porque: barreira de 375 de dano mágico absorve o burst que mataria você ou o aliado, e a invisibilidade te leva até o Echo Stomp sem ser visto.
- minuto: 22:47 (mediana, 3 de 14 jogos pos5)
- contra: combos de burst mágico de alvo único contra você ou contra o aliado que você precisa salvar no meio de uma luta.
- detalhe: invisibilidade + 20 de velocidade de movimento + barreira de 375 de dano mágico por 5s, com 0,5s de atraso. Pode ser usado em você mesmo pra andar invisível até o alcance de 500 do Echo Stomp sem ser visto chegando.
- fonte: compras.parquet (3/14 jogos pos5, mediana 22:47); items.json (glimmer_cape: initial_fade_delay 0.5, duration 5, bonus_magical_armor); constants_abilities.json (elder_titan_echo_stomp: abilitycastrange 500)

#### Aghanim's Shard (aghanims_shard)
- porque: o alt-cast troca sua posição com o espírito no stomp, chega a 1.200 de alcance sem precisar de Blink Dagger contra grupo fora de alcance.
- minuto: 38:25 (mediana, 5 de 14 jogos pos5)
- contra: time que se agrupa longe do alcance de 500 do Echo Stomp ou atrás de visão, onde um blink normal não chegaria.
- detalhe: reduz a recarga do Echo Stomp e habilita o alt-cast: Elder Titan troca de lugar com o Astral Spirit no momento em que o stomp completa. Manda o espírito pra dentro do grupo inimigo (alcance de 1.200, atravessa unidades) e alt-cast o Echo Stomp de lá: você teleporta pro lugar do espírito e estoura o stomp no meio deles, sem precisar de Blink Dagger.
- combo: Astral Spirit (fog/high ground, 1.200 de alcance) → alt-cast Echo Stomp com o Shard (troca de posição) → Earth Splitter na rachadura embaixo de quem ainda está dormindo (sleep de 2 a 4,4s cobre o crack_time de 2,72s do splitter).
- fonte: compras.parquet (5/14 jogos pos5, mediana 38:25); dotacoach.gg/en/heroes/elder-titan (efeito do Shard: reduz recarga do Echo Stomp e habilita troca de posição com o espírito no alt-cast); constants_abilities.json (elder_titan_echo_stomp: sleep_duration 2/2.8/3.6/4.4; elder_titan_earth_splitter: crack_time 2.7182)

#### Rod of Atos (rod_of_atos)
- porque: prende o alvo fujão dentro do raio de 475 do Echo Stomp ou da faixa de 315 do Earth Splitter até o dano estourar.
- minuto: 36:23 (mediana, 4 de 14 jogos pos5)
- contra: herói com fuga rápida (dash, teleporte curto) que escaparia da rachadura do Earth Splitter antes dela implodir.
- detalhe: raiz de 2s em alvo único; trava o inimigo dentro do raio de 475 do Echo Stomp ou dentro da faixa de 315 do Earth Splitter até o dano estourar.
- fonte: compras.parquet (4/14 jogos pos5, mediana 36:23); items.json (rod_of_atos: duration 2.0)

#### Lotus Orb (lotus_orb)
- porque: dispela e devolve o disable de alvo único que quebraria o canal de 1,3s do Echo Stomp antes dele completar.
- minuto: 44:02 (mediana, 4 de 14 jogos pos5)
- contra: disable de alvo único forte lançado em você (hex, root, silence que corte o canal de 1,3s do Echo Stomp).
- detalhe: dispel básico ao ativar em você mesmo e devolve o próximo feitiço de alvo único contra o lançador; o Echo Stomp é canalizado (1,3s de canal, 1,7s de cast total), então qualquer silence ou stun curto já quebra o combo se não houver uma forma de limpar ou evitar.
- fonte: compras.parquet (4/14 jogos pos5, mediana 44:02); constants_abilities.json (elder_titan_echo_stomp: behavior Channeled, abilitychanneltime 1.3)

#### Gleipnir (gungir)
- porque: rooteia o grupo inteiro enquanto a rachadura do Earth Splitter implode, melhor que o Rod de alvo único contra time que luta agrupado.
- minuto: 49:49 (mediana, 3 de 14 jogos pos5)
- contra: grupo que tenta se espalhar assim que vê o cast do Earth Splitter, antes da rachadura implodir.
- detalhe: raiz em área de 350 de raio por 2s; rooteia o grupo todo no lugar enquanto o crack_time de 2,72s do Earth Splitter passa, garantindo que ninguém saia da faixa de 315 de largura.
- fonte: compras.parquet (3/14 jogos pos5, mediana 49:49); items.json (gungir: radius, components rod_of_atos/point_booster/chasm_stone); constants_abilities.json (elder_titan_earth_splitter: crack_time 2.7182, crack_width 315)

## Pos 4 (suporte de roaming)

- quando pegar: 26,1% dos picks do herói no agregado por papel, com 54,7% de vitória (dotacoach.gg), próximo do pos5. No único jogo pos4 do dataset de Tier 1 analisado, a build muda pra um Blink Dagger (41:26) em vez dos itens de alcance (Force Staff), o que bate com o papel de roam: fechar distância sozinho pra iniciar antes do time, sem depender do time já estar junto. Amostra de 1 jogo: direção plausível, não uma mediana confiável.
- itens iniciais: tango, ward_observer, ward_dispenser, ring_of_regen

### Build

#### Tranquil Boots (tranquil_boots)
- minuto: 8:49 (nesse jogo; n=1)
- porque: mesmo motivo do pos5, sustento barato pra ficar andando de lane em lane no roam sem gastar ouro em combate ainda.
- fonte: compras.parquet (1 jogo pos4, 8:49)

#### Urn of Shadows (urn_of_shadows)
- minuto: 16:40 (nesse jogo; n=1)
- porque: dano constante em alvo que está fugindo de uma gank de roam e regen pro aliado que acabou de levar dano na troca.
- detalhe: 25 de dano por segundo por 8s em inimigo, ganha carga a cada herói que morre num raio de 1.500; sinergiza com o papel de andar matando gente pelo mapa no início do jogo.
- fonte: compras.parquet (1 jogo pos4, 16:40); items.json (urn_of_shadows: duration 8, "Lasts 8 seconds", "Gains charges every time an enemy hero dies within 1500 units")

#### Glimmer Cape (glimmer_cape)
- porque: invisibilidade pra chegar sem ser visto no roam e uma barreira de 375 de dano mágico pra sobreviver ao burst da troca inicial da gank.
- minuto: 23:14 (nesse jogo; n=1)
- fonte: compras.parquet (1 jogo pos4, 23:14); items.json (glimmer_cape: initial_fade_delay 0.5, duration 5, barrier_block 375)

#### Blink Dagger (blink)
- minuto: 41:26 (nesse jogo; n=1)
- porque: iniciação instantânea pra quem já não está no meio da luta (diferente do pos5, que fica perto do time o tempo todo).
- detalhe: alcance de 1.200, mas trava por 3s ao receber dano de herói ou de Roshan; blinkar e canalizar o Echo Stomp (1,7s de cast) ainda deixa uma janela em que você pode ser interrompido se o inimigo reagir rápido.
- fonte: compras.parquet (1 jogo pos4, 41:26); items.json (blink: cast range 1200, "Blink Dagger cannot be used for 3 seconds after taking damage from an enemy hero or Roshan")

### Situacionais

#### Aghanim's Shard (aghanims_shard)
- porque: mesma lógica do pos5 (ver seção Pos 5): o alt-cast troca sua posição com o espírito, útil pra iniciar mesmo fazendo roam longe do time.
- minuto: 54:01 (nesse jogo; n=1)
- contra: mesma lógica do pos5 (ver seção Pos 5), usado aqui bem mais tarde no jogo.
- fonte: compras.parquet (1 jogo pos4, 54:01); constants_abilities.json (elder_titan_echo_stomp: sleep_duration 2/2.8/3.6/4.4)

## Pos 3 (offlane)

- quando pegar: é a posição mais escolhida pra ele no agregado por papel (41,0% dos picks, dotacoach.gg), mas com a pior vitória das três (49,6%). O Natural Order (derruba armadura e resistência mágica base de quem chega perto) e o Momentum (armadura por velocidade de movimento bônus, passiva inata) dão sustento de lane sem precisar de item cedo, o que explica o volume de picks apesar do resultado pior.
- itens iniciais: tango, mantle_of_intelligence, recipe_null_talisman (observado no único jogo pos3 do dataset analisado)

### Build

#### Phase Boots (phase_boots)
- minuto: 7:16 (nesse jogo; n=1)
- porque: fechar distância rápido pra entrar no raio de 475 do Echo Stomp contra quem está atacando a lane.
- fonte: compras.parquet (1 jogo pos3, 7:16)

#### Null Talisman (null_talisman)
- porque: atributos baratos de lane; o mana regen e o bônus de mana ajudam a manter o Astral Spirit (80 a 110 de mana) saindo sem secar o pool cedo.
- minuto: 2:23 (nesse jogo; n=1)
- fonte: compras.parquet (1 jogo pos3, 2:23); items.json (null_talisman: bonus_mana_regen 1.0, bonus_max_mana_percentage 3); constants_abilities.json (elder_titan_ancestral_spirit: mc 80/90/100/110)

#### Chainmail (chainmail)
- minuto: 6:41 (nesse jogo; n=1)
- porque: armadura barata pra segurar troca de ataque automático na lane de offlane, complementando o Momentum (armadura por velocidade bônus).
- fonte: compras.parquet (1 jogo pos3, 6:41); constants_abilities.json (elder_titan_momentum: armor_from_movespeed 3.6%, is_innate true)

### Situacionais

#### Aghanim's Scepter (ultimate_scepter)
- porque: fica imune a debuff e ganha resistência mágica ao retorno do espírito, evitando ser desarmado pelo disable do time antes do combo.
- minuto: 17:25 (nesse jogo; n=1)
- contra: time que empilha debuff/stun em cima de você antes de você conseguir travar o Echo Stomp.
- detalhe: ao retornar, o Astral Spirit torna Elder Titan imune a debuff e dá 50% de resistência mágica por 2s para cada herói inimigo afetado, facilitando entrar na luta sem ser imediatamente desarmado.
- fonte: compras.parquet (1 jogo pos3, 17:25); dotacoach.gg/en/heroes/elder-titan (efeito do Scepter: "debuff immune and gain 50% magic resistance" por herói inimigo afetado no retorno do espírito)

#### Aghanim's Shard (aghanims_shard)
- porque: mesma lógica do pos5 (ver seção Pos 5): reduz a recarga do Echo Stomp e habilita o alt-cast de troca de posição com o espírito.
- minuto: 21:32 (nesse jogo; n=1)
- contra: mesma lógica do pos5 (ver seção Pos 5); raro ter os dois upgrades (Scepter e Shard) no mesmo jogo, mas foi o que esse jogo comprou.
- fonte: compras.parquet (1 jogo pos3, 21:32); constants_abilities.json (elder_titan_echo_stomp: sleep_duration 2/2.8/3.6/4.4)

#### Orb of Blight (blight_stone)
- porque: empilha redução de armadura com o Natural Order, um flat e outro percentual, pra acelerar o abate em luta contra alvo tanque.
- minuto: 24:10 (nesse jogo; n=1)
- contra: alvo que precisa de redução de armadura extra em cima do que o Natural Order já tira, pra acelerar o abate em luta.
- detalhe: -2 de armadura por 3s a cada ataque; empilha com a redução percentual do Natural Order em vez de competir com ela (um é flat, o outro é percentual sobre a base).
- fonte: compras.parquet (1 jogo pos3, 24:10); items.json (blight_stone: corruption_armor -2); constants_abilities.json (elder_titan_natural_order: armor_reduction_pct 40/60/80/100%, radius 350)

## Roshan

Sem abate solo registrado: no dataset de replays de Roshan solo (dota-roshan-solo, 1.328 partidas, 2.720 abates de Roshan registrados), Elder Titan nunca aparece como o herói que deu o abate, solo ou em dupla. Ele aparece em 4 desses registros como aliado presente perto do fosso durante o abate de outro herói (nunca como a maior fonte de dano), sempre em abates classificados como "time" de outro herói (nenhum caso de "solo com suporte"). Não há evidência de que ele costume ir sozinho no Roshan; o padrão observado é só acompanhar.

Fonte: dota-roshan-solo/data/solos.json
