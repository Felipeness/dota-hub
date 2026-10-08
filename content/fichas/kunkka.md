---
id: ficha-kunkka
titulo: "Kunkka"
heroi: Kunkka
patch: 7.41
posicoes: [2, 3]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- https://dota2protracker.com/hero/legacy/Kunkka
- https://dota2protracker.com/builds/kunkka-pos2-1
- https://dota2protracker.com/builds/kunkka-pos3-1
---

## Resumo

Kunkka é Carry/Support/Disabler/Initiator/Durable/Nuker (papéis oficiais do OpenDota, heroes.json) e vive de um combo com delay: Torrent empurra pra cima e atordoa, Ghostship chega 3,1s depois e estoura em quem ainda está travado. No 7.41 ele é pro pick raro (heroStats.json mostra só 1 pick pro nesse snapshot, amostra baixa pra conclusão isolada), mas no dataset de replays pro do Atlas tier1 (draft.csv) ele aparece 18 vezes como pos 2 mid e 9 como pos 3 offlane, nunca como pos 1 carry puro, então esta ficha cobre só essas duas. A amostra de cada posição é pequena (18 e 9 partidas), então os winrates abaixo são indicativos, não prova.

## Pos 2 (mid)

- quando pegar: é a posição mais comum dele no dataset pro (18 de 27 picks, 67%, draft.csv), montando Shadow Blade + Silver Edge pra sumir, chegar perto e abrir o combo sem o inimigo ver vir. Winrate de 33,3% na amostra local (6 de 18, draft.csv) e 57% numa amostra parecida do dota2protracker (37 partidas, 16 pros); os dois números são de poucos jogos, trate com cautela.
- itens iniciais: tango, bracer (gauntlets + circlet), bottle

### Build

#### Bracer (bracer)
- minuto: 2
- porque: segura a lane de troca com HP e os três atributos sem gastar recipe cara.
- detalhe: vira item em 17 de 18 partidas (compras.parquet). 505 de custo, +5 de força, +2 de agilidade, +2 de inteligência, +50 de vida.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Bottle (bottle)
- minuto: 3
- porque: sustenta HP/mana pra trocar Torrent na lane sem puxar XP da wave pra base.
- detalhe: comprado em 15 de 18 partidas (83%, compras.parquet). 3 cargas que recarregam na fonte, também guarda runa.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Magic Wand (magic_wand)
- minuto: 5
- porque: estoca carga de qualquer feitiço trocado na lane, resolve o all-in de spell damage barato.
- detalhe: 17 de 18 partidas (compras.parquet). 460 de custo, 20 cargas de +15 HP/mana cada, +3 em todos os atributos enquanto guarda carga.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Phase Boots (phase_boots)
- minuto: 7
- porque: fecha distância pra iniciar com Torrent no alcance certo e ainda cleava mais forte com Tidebringer.
- detalhe: comprado em todas as 18 partidas (100%, compras.parquet). 1450 de custo, +50 de velocidade (+20 extra em phase por 3s), +18 de dano corpo a corpo, +4 de armadura.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Black King Bar (black_king_bar)
- minuto: 17
- porque: dispel + 60% de resistência mágica por até 9s pra sobreviver ao burst enquanto o Torrent (1,6s de delay) e o Ghostship (3,1s de delay) ainda não acertaram.
- detalhe: 17 de 18 partidas (94%, compras.parquet), bem perto do minuto 17 de 97% de pick citado na build pro do dota2protracker. 4050 de custo (mithril_hammer + ogre_axe), +10 força, +24 de dano, dispel básico ao ativar.
- combo: ativa o BKB antes de entrar na luta pra atravessar o meio do time inimigo sem ser travado antes do Ghostship cair.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; https://dota2protracker.com/builds/kunkka-pos2-1; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Shadow Blade (invis_sword)
- minuto: 23
- porque: fica invisível pra se posicionar sem ser visto e o ataque que quebra a invisibilidade já entra com 175 de dano bônus (o break de passiva só vem depois, no upgrade pra Silver Edge).
- detalhe: 16 de 18 partidas (89%, compras.parquet), perto do minuto ~21 citado pelo dota2protracker. 3250 de custo (claymore + blitz_knuckles + shadow_amulet), 17s de invisibilidade, +20% de velocidade de movimento andando invisível.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; https://dota2protracker.com/builds/kunkka-pos2-1; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Silver Edge (silver_edge)
- minuto: 27
- porque: upgrade do Shadow Blade; o ataque que sai da invisibilidade quebra a passiva do alvo por 5s, então resolve contra herói que depende de passiva (evasão, lifesteal, resistência) pra sobreviver ao combo.
- detalhe: 14 de 18 partidas (78%, compras.parquet), perto do minuto ~24 citado pelo dota2protracker (76% pick na amostra pro deles). 5700 de custo, +70 de dano, +35 de velocidade de ataque.
- contra: herói com passiva forte (evasão, lifesteal, armadura/resistência que ativa sozinha) porque o Break desliga a passiva por 5s depois do golpe.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; https://dota2protracker.com/builds/kunkka-pos2-1; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

### Situacionais

#### Aghanim's Shard (aghanims_shard)
- minuto: 29
- contra: lineup espalhado, onde falta um jeito de arrastar todo mundo pro mesmo ponto antes do Ghostship.
- detalhe: comprado em 6 de 18 partidas (33%, compras.parquet). 1400 de custo, dá a habilidade Tidal Wave: onda que nasce atrás do Kunkka, 180 de dano e arrasta inimigos por 1s, não deixando atacar durante o arrasto.
- combo: usa o Tidal Wave pra puxar quem está disperso pra dentro da área do Torrent/Ghostship antes de abrir o resto do combo.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json

#### Sange and Yasha (sange_and_yasha)
- minuto: 30
- contra: jogo que precisa de mais sustain e status resistance pra engajar de novo sem recall, quando o time inimigo tem muito disable de curta duração.
- detalhe: comprado em 7 de 18 partidas (39%, compras.parquet). 4200 de custo, +16 força, +16 agilidade, +16% de status resistance, +20% de velocidade de ataque.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 47
- contra: jogo que estica, pra ganhar stats brutos (atributos e HP/mana) num slot que já ia ser gasto de qualquer forma.
- detalhe: comprado em 6 de 18 partidas (33%, compras.parquet), bem tarde na amostra. 4200 de custo, +10 em todos os atributos, +175 de vida e mana. Não achei fonte confiável nesta sessão pro efeito exato do upgrade de Aghanim no Ghostship (dota2protracker e Liquipedia fora do ar na checagem), então a ficha não afirma nada sobre o navio virar dois.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Satanic (satanic)
- minuto: 43
- contra: jogo tanque, onde o Tidebringer sozinho não mata e falta sustain pra ficar trocando golpe de perto.
- detalhe: comprado em 5 de 18 partidas (28%, compras.parquet). 5050 de custo, lifesteal passivo e Unholy Rage ativo (175% de lifesteal por 6s, dispel básico ao ativar).
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Reaver (reaver)
- minuto: 44
- contra: sem interação específica, é statstick de força puro pra quando o jogo passa dos 40min e não tem outro item melhor pra comprar.
- detalhe: comprado em 7 de 18 partidas (39%, compras.parquet). 2800 de custo, +25 de força, sem habilidade.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

## Pos 3 (offlane)

- quando pegar: menos frequente que a mid no dataset pro (9 de 27 picks, 33%, draft.csv), montando Platemail pra aguentar a trade de lane e decidindo depois entre Shiva's, Pipe ou Lotus Orb conforme o que o inimigo está fazendo. Winrate de 77,8% na amostra local (7 de 9, draft.csv), amostra pequena mas melhor que a da mid.
- itens iniciais: tango, bracer (gauntlets + circlet)

### Build

#### Bracer (bracer)
- minuto: 2
- porque: mesmo papel da mid, segura a lane com HP e os três atributos.
- detalhe: comprado nas 9 partidas da amostra (100%, compras.parquet).
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet

#### Magic Wand (magic_wand)
- minuto: 7
- porque: mesmo papel da mid, estoca carga de feitiço trocado na lane.
- detalhe: comprado nas 9 partidas da amostra (100%, compras.parquet). Ver detalhe no bloco de Magic Wand da Pos 2.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet

#### Phase Boots (phase_boots)
- minuto: 7
- porque: mesmo papel da mid, fecha distância pro combo.
- detalhe: comprado nas 9 partidas da amostra (100%, compras.parquet). Ver detalhe no bloco de Phase Boots da Pos 2.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet

#### Platemail (platemail)
- minuto: 21
- porque: armadura crua e barata pra sobreviver no offlane antes de decidir o item grande, sem comprometer o slot final.
- detalhe: comprado nas 9 partidas da amostra (100%, compras.parquet), próximo do minuto ~22 que o dota2protracker cita na build pro pos 3. 1400 de custo, +10 de armadura. Vira componente de Shiva's Guard, Pipe of Insight ou Lotus Orb.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; https://dota2protracker.com/builds/kunkka-pos3-1; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Black King Bar (black_king_bar)
- minuto: 26
- porque: mesma lógica da mid, sobreviver ao burst enquanto o combo com delay ainda não caiu, mas aqui também segura o offlane sem precisar sumir.
- detalhe: comprado em 7 de 9 partidas (78%, compras.parquet), perto do minuto ~27 (72% pick) citado pelo dota2protracker pos 3.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; https://dota2protracker.com/builds/kunkka-pos3-1

### Situacionais

#### Shiva's Guard (shivas_guard)
- minuto: 27
- contra: carry de dano físico de ataque rápido; a aura corta 45 de velocidade de ataque de quem está perto, travando o DPS deles.
- detalhe: comprado em 5 de 9 partidas (56%, compras.parquet), bem perto do minuto ~22 e dos 55% de pick citados pelo dota2protracker pos 3. 4500 de custo, +17 de armadura, Arctic Blast (260 de dano e -40% de movimento em área).
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; https://dota2protracker.com/builds/kunkka-pos3-1; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Aghanim's Shard (aghanims_shard)
- minuto: 26
- contra: lineup espalhado, mesma lógica da mid: usa o Tidal Wave pra arrastar quem está disperso pra dentro do combo.
- detalhe: comprado em 6 de 9 partidas (67%, compras.parquet). Ver mecânica no bloco de Aghanim's Shard da Pos 2.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json

#### Lotus Orb (lotus_orb)
- minuto: 15
- contra: disable de alvo único em cima de você ou de aliado antes do combo começar; o Echo Shell devolve o feitiço pro lançador.
- detalhe: comprado em 4 de 9 partidas (44%, compras.parquet), e nessas partidas o item saiu bem rápido (13 a 25min, mediana 15min), cedo pra um item de 3850g, o que sugere compra reativa contra disable específico ainda na fase de lane em vez de item de late game. 3850 de custo, +10 de armadura, Echo Shell dispelável que recasta o feitiço no lançador por 5s.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Pipe of Insight (pipe)
- minuto: 25
- contra: time inimigo com nuke mágico em área (ulti de burst coordenado); a Barrier absorve 425 de dano mágico pra linha toda.
- detalhe: comprado em 3 de 9 partidas (33%, compras.parquet). 3725 de custo, Barrier (425 de dano mágico absorvido, raio 1200, 8s), aura de 8% de resistência mágica pro time.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 37
- contra: mesma lógica da mid, jogo que estica e falta stat bruto no slot final.
- detalhe: comprado em 3 de 9 partidas (33%, compras.parquet), amostra pequena. Ver stats no bloco de Aghanim's Scepter da Pos 2.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

## Roshan

Sem dado de Roshan solo. Kunkka não tem entrada própria em resumo_por_heroi.json nem em resumo_com_suporte.json, as duas listas de heróis com padrão de solo/solo-com-suporte do dataset de Roshan (ele só é citado dentro do perfil de outros heróis, como suporte no fosso de spectre e gyrocopter). Em solos.json ele só aparece como finalizador em 3 mortes de Roshan em toda a base de replays, e as 3 estão classificadas como "time" (classificacao: time), nunca como solo. Na prática, quando participa de um Roshan é puxando o time, não solando.
