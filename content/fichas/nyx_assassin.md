---
id: ficha-nyx_assassin
titulo: "Nyx Assassin"
heroi: Nyx Assassin
patch: 7.41
posicoes: [4, 5]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-tier1/data/draft.csv
- dota-tier1/data/derivados/compras.parquet
- dota-tier1/data/derivados/usos_ult_bkb.parquet
- dota-tier1/data/derivados/teamfight_participantes.parquet
- dota-roshan-solo/data/solos.json
- https://api.opendota.com/api/heroes/88/itemPopularity
- https://dotacoach.gg/heroes/nyx-assassin
- https://liquipedia.net/dota2/7.41b
---

## Resumo

Nyx Assassin é um disabler/iniciador all-stats que vive de Impale (stun em linha, 750 de alcance) e Vendetta (invisibilidade com um ataque de dano bônus que a quebra) pra abrir pick-offs e lutas. No 7.41 ele é quase só suporte: nas 36 partidas do Atlas Tier 1 (equipes de ponta, patch 7.41) foi pos 4 em 28 (77,8%, 17V-11D, 60,7% de vitória) e pos 5 em 8 (22,2%, 3V-5D, 37,5%), fora isso não apareceu em nenhuma partida (fonte: `draft.csv`). Dados públicos de todas as faixas de MMR (dotacoach.gg, 7.41) mostram ele também sendo levado no meio (21,7% das seleções, 53,7% de vitória) e na offlane (8%, 52,8%), mas nenhuma dessas duas posições apareceu nas 36 partidas de Tier 1 analisadas aqui, então esta ficha cobre só pos 4 e pos 5.

Mecânica central do combo: Vendetta deixa Nyx invisível por 45/50/55s (nível, com cooldown de 80/70/60s; ajuste do patch 7.41b) e o 1º ataque que a quebra causa 300/400/500 de dano bônus. O ataque básico dele também carrega um passivo inato (Mana Burn) que queima 12% do dano causado como mana do alvo, e a ativa Mind Flare (nome interno `jolt`) soma dano extra de 15% sobre o dano causado ao mesmo alvo nos últimos 15s antes de resetar o acumulado, então vale mais bater ou Impalar primeiro e só depois gastar o Mind Flare. Spiked Carapace reflete 140% do dano recebido (uma vez por fonte) e atordoa quem acertou; burrowed (enterrado), ela atordoa instantaneamente a área ao ser ativada. Fonte: `constants_abilities.json` (nyx_assassin_impale, nyx_assassin_jolt, nyx_assassin_neuro_sting, nyx_assassin_spiked_carapace, nyx_assassin_vendetta, nyx_assassin_burrow).

Em luta, ele entra primeiro em 57 das 197 teamfights do Tier 1 em que participou (29%, contra ~20% esperado por acaso) e aplica em média 1,54 disable por luta, usando a ultimate em 41% das lutas que entrou (fonte: `teamfight_participantes.parquet`), o que confirma o papel de iniciador e não só de suporte passivo.

## Pos 4 (suporte de roaming)

- quando pegar: é a posição dominante do herói no Tier 1 7.41 (28 de 36 picks, 60,7% de vitória em 28 jogos): leve quando o time quer um disable confiável pra abrir pick-offs enquanto outro suporte cobre visão. Fonte: `draft.csv`.
- itens iniciais: ward_sentry, tango, blood_grenade (16, 15 e 15 de 30 partidas com compras registradas; `compras.parquet`, t < 60s)

### Build

#### Boots of Speed / Arcane Boots (`arcane_boots`)
- minuto: ~6,7 (Boots genérico) evoluindo pra Arcane em 11,9
- porque: o kit gasta muita mana (Impale 90 a 120, Mind Flare 100 a 115, Vendetta até 300) e Nyx não tem regen própria; Arcane devolve 150 de mana pra ele e os aliados perto quando ele entra numa troca.
- detalhe: Replenish restaura 150 de mana em 1200 de raio; a aura passiva dá +1 de regen de mana pros aliados perto. Comprado em 9 de 30 partidas pos4 (contra 6 de Tranquil Boots, ver Situacionais).
- fonte: `items.json` (arcane_boots); `compras.parquet` (9/30, 11,9 min)

#### Urn of Shadows → Essence Distiller (`essence_distiller`)
- minuto: 10,3 (Urn) → 14,2 (upgrade pra Essence Distiller)
- porque: sustenta a lane de suporte sem gastar ouro em branch e ainda força o trade com 25 de dano por segundo em quem leva o Soul Release.
- detalhe: Urn cura 30/s (aliado) ou causa 25/s (inimigo) por 8s e ganha carga quando um herói inimigo morre a até 1500 de distância; o efeito quebra se o alvo levar dano de herói ou Roshan. O upgrade (1775, de urn_of_shadows + chainmail + wizard_hat) sobe a cura pra 40/s e, ao prender num inimigo, dá true sight e visão compartilhada sobre ele por 8s.
- contra: heróis que dependem de fugir da visão pra escapar ou reposicionar (o true sight do Essence Distiller remove essa saída por 8s).
- fonte: `items.json` (urn_of_shadows, essence_distiller); `compras.parquet` (13/30 cada, 10,3 min e 14,2 min)

#### Blink Dagger (`blink`)
- minuto: 24,9
- porque: o alcance de 750 do Impale não chega sempre no alvo prioritário escondido atrás de creep; Blink fecha a distância sem precisar andar exposto.
- detalhe: item mais comprado do herói nesta amostra (26 de 30 partidas, 86,7%). Blink trava por 3s depois de Nyx tomar dano de herói ou Roshan, então a iniciação precisa começar fora do alcance de poke; alcance nominal 1200, mas cai pra 960 quando o trajeto reto até o ponto tem obstrução de terreno (árvore, relevo) no meio do caminho.
- combo: Vendetta (invisível, ataque de quebra com dano bônus) → Blink pro meio do time → Impale no alvo prioritário → Mind Flare pra fechar com dano/mana. Sequência padrão de pick-off a partir do nível 6, viável a partir da mediana de 24,9 min quando o Blink sai.
- fonte: `items.json` (blink); `constants_abilities.json` (vendetta, impale, jolt); `compras.parquet` (26/30, 24,9 min)

#### Aghanim's Shard (`aghanims_shard`)
- minuto: 27,3 (amostra combinando pos4 e pos5, 14 de 36 partidas)
- porque: estica a janela de Vendetta pra ganks e rotações sem precisar de TP.
- detalhe: segundo dotacoach.gg e as notas da 7.41b (via Liquipedia), o Shard reduz o cooldown de Vendetta e dá passagem livre por unidades mais velocidade extra nos primeiros segundos da invisibilidade. Isso bate com os campos `free_pathing_duration` e `free_pathing_movement_speed_bonus` que aparecem zerados na Vendetta base em `constants_abilities.json`: ficam ativos só com o Shard.
- combo: com o Shard, use Vendetta pra farmar uma runa, trocar de lado do mapa ou escapar de uma rotação inimiga sem gastar o scroll de TP, não só pra iniciar.
- fonte: dotacoach.gg/heroes/nyx-assassin; liquipedia.net/dota2/7.41b; `constants_abilities.json` (nyx_assassin_vendetta); `compras.parquet` (14/36, 27,3 min)

#### Eul's Scepter of Divinity (`cyclone`)
- minuto: 24,3 (Void Stone) → 27,7 (Eul's completo)
- porque: dispel básico em si mesmo pra sair de um silence/root que travaria o combo antes dele iniciar, e trava o alvo no ar por 2,5s pra preparar o próximo golpe.
- detalhe: Cyclone é "Basic Dispel", limpa debuffs básicos nele mesmo e atravessa até spell immunity quando lançado em si mesmo; no alvo inimigo causa 50 de dano mágico na queda. Void Stone (componente) dá +1,75 de regen de mana.
- contra: silence ou root removível por dispel básico que tentaria travar Nyx antes da iniciação.
- combo: Cyclone no alvo prioritário deixa ele invulnerável por 2,5s (sem stun); o combo real é cravar o Impale no instante exato em que ele aterrissa, pra não dar nenhuma janela de reação.
- fonte: `items.json` (cyclone, void_stone); `compras.parquet` (18/30 void_stone em 24,3 min; 17/30 cyclone em 27,7 min)

#### Aeon Disk (`aeon_disk`)
- minuto: 33,9 (Vitality Booster) → 37,8 (Aeon Disk completo)
- porque: Spiked Carapace só reflete uma vez por fonte de dano, então contra burst de várias fontes ou dano mágico puro o seguro é o Aeon Disk.
- detalhe: "Combo Breaker" dispara quando a vida cai abaixo de 70% por dano de jogador, aplica dispel forte, dá +75% de resistência a status e zera todo dano causado e recebido por 2,5s; o cooldown sobe a cada ativação (105 a 165s conforme o nível do item).
- contra: combos de burst ou kill instantâneo que tentam abrir em cima do Nyx antes dele conseguir reagir.
- fonte: `items.json` (aeon_disk); `compras.parquet` (17/30 vitality_booster em 33,9 min; 15/30 aeon_disk em 37,8 min)

### Situacionais

#### Tranquil Boots (`tranquil_boots`)
- minuto: 10,2
- porque: mais barato que Arcane e devolve vida rápido numa lane parada, mas quebra ao atacar, então só serve quando sobra mana.
- detalhe: alternativa ao Arcane Boots quando a lane está mais tranquila e sobra mana; dá 65 de velocidade e 250 de cura em 20s, mas quebra (perde a cura e cai pra +40 de velocidade por 13s) ao atacar ou ser atacado.
- contra: lanes sem troca de dano constante, onde o regen de vida pesa mais que o de mana.
- fonte: `items.json` (tranquil_boots); `compras.parquet` (6/30, 10,2 min)

#### Force Staff (`force_staff`)
- minuto: 35,3
- porque: abre a distância certa pro combo de Impale antes do inimigo colar no Nyx, ou puxa um aliado pra fora do alcance de kill.
- detalhe: empurra qualquer unidade (aliada ou inimiga) 600 de distância; não interrompe as ações do alvo nem funciona dentro de Chronosphere, Duel ou Black Hole.
- contra: melee que precisa ficar colado no Nyx pra acertar o próprio combo, ou pra puxar um aliado fora de uma luta perdida.
- fonte: `items.json` (force_staff); `compras.parquet` (6/30, 35,3 min)

#### Solar Crest (`solar_crest`)
- minuto: 26,1
- detalhe: em aliado dá 5 de armadura, 60 de velocidade de ataque, 15% de velocidade de movimento e barreira de 350 de dano físico por 7s.
- contra: confrontos de dano físico em que o time precisa de uma janela extra de armadura e velocidade de ataque pra vencer a troca.
- fonte: `items.json` (solar_crest); `compras.parquet` (3/30, 26,1 min)

#### Pavise (`pavise`)
- minuto: 20,1
- porque: versão barata de proteger o iniciador ou o carry num pick-off, quando o suporte ainda não tem ouro pro Solar Crest.
- detalhe: versão mais barata do Solar Crest: barreira de 250 de dano físico por 7s num aliado, sem os bônus de atributo.
- contra: burst físico pontual que o time precisa amortecer antes de uma luta, com menos ouro disponível que o Solar Crest.
- fonte: `items.json` (pavise); `compras.parquet` (3/30, 20,1 min)

#### Ghost Scepter (`ghost`)
- minuto: 37,2
- porque: deixa Nyx imune a ataque básico por 4s pra sobreviver ao burst físico de um carry, mesmo abrindo mão de atacar nesse tempo.
- detalhe: 4s de imunidade a dano físico, mas sem poder atacar e 30% mais vulnerável a dano mágico nesse tempo; amostra pequena (1 de 30 partidas).
- contra: carries de ataque básico puro (ex.: Phantom Assassin, Juggernaut) que dependem de dano físico constante pra fechar o kill.
- fonte: `items.json` (ghost); `compras.parquet` (1/30, 37,2 min)

#### Glimmer Cape (`glimmer_cape`)
- minuto: 47,0
- porque: a barreira mágica e a invisibilidade dão folga pra sobreviver a um nuke de abertura ou escapar depois de iniciar a luta.
- detalhe: depois de 0,5s dá invisibilidade, +20 de velocidade e uma barreira de até 375 de dano mágico por 5s; pode ser lançado em si mesmo ou num aliado, inclusive canalizando outra coisa. Amostra pequena (1 de 30 partidas).
- contra: nuke mágico de alvo único que tentaria abrir a luta matando o Nyx primeiro.
- fonte: `items.json` (glimmer_cape); `compras.parquet` (1/30, 47,0 min)

## Pos 5 (suporte duro)

- quando pegar: aparece em 8 das 36 partidas do Tier 1 (22,2%), com 3V-5D (37,5%): bem menos comum e com resultado pior que pos4. Normalmente quando o time já tem outro iniciador/disable e quer o Nyx sustentando a lane e dando visão em vez de abrir luta sozinho. Fonte: `draft.csv`. Amostra pequena: trate os números abaixo com cautela.
- itens iniciais: ward_sentry, tango, enchanted_mango (5, 3 e 2 de 6 partidas com compras registradas; `compras.parquet`)

### Build

#### Ring of Basilius (`ring_of_basilius`)
- minuto: 9,1
- porque: regen de mana barato pra sustentar o Impale na lane; a aura ajuda o carry que compartilha a lane.
- detalhe: comprado em 4 de 6 partidas com dados.
- fonte: `items.json` (ring_of_basilius); `compras.parquet` (4/6, 9,1 min)

#### Arcane Boots (`arcane_boots`)
- minuto: 11,2
- porque: mesmo raciocínio do pos4, o kit depende de mana e Nyx não tem regen própria sem item.
- detalhe: comprado em 4 de 6 partidas.
- fonte: `items.json` (arcane_boots); `compras.parquet` (4/6, 11,2 min)

#### Eul's Scepter of Divinity (`cyclone`)
- minuto: ~26,9 (Void Stone) → ~29,4 (Eul's completo)
- porque: mesmo uso do pos4, dispel em si mesmo e trava o alvo no ar pra preparar o combo.
- detalhe: comprado em 3 de 6 partidas cada etapa; amostra pequena.
- contra: silence/root removível por dispel básico.
- fonte: `items.json` (cyclone, void_stone); `compras.parquet` (3/6 void_stone em 26,9 min; 3/6 cyclone em 29,4 min)

### Situacionais

#### Blink Dagger (`blink`)
- minuto: 23,2
- porque: mesmo raciocínio do pos4, fecha a distância até o Impale; aqui é opcional porque o pos5 tende a ficar junto do time.
- detalhe: muito menos comum que no pos4 (2 de 6 partidas): o suporte duro costuma ficar perto do time em vez de iniciar sozinho, deixando o blink pro pos4.
- contra: alvo prioritário fora do alcance de 750 do Impale que precisa ser alcançado rápido.
- fonte: `items.json` (blink); `compras.parquet` (2/6, 23,2 min)

#### Aghanim's Shard (`aghanims_shard`)
- porque: mesmo efeito do pos4, estica a invisibilidade da Vendetta pra escapar, farmar runa ou rotacionar sem gastar TP.
- detalhe: mesmo efeito do pos4 (cooldown menor e passagem livre no início da Vendetta); parte da amostra combinada de 14/36 partidas do herói, sem separação clara por posição com volume suficiente.
- fonte: dotacoach.gg/heroes/nyx-assassin; liquipedia.net/dota2/7.41b; `compras.parquet`

## Roshan

Sem dado de Roshan solo. Nas 2.720 linhas de abates de Roshan analisadas em `solos.json` (Atlas, replays pro), nenhuma tem Nyx Assassin como herói creditado pelo abate: nem como solo nem como time.
