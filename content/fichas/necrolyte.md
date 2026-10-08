---
id: ficha-necrolyte
titulo: "Necrophos"
heroi: Necrophos
patch: 7.41
posicoes: [1, 3, 2]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-tier1/data/jogadores_partida.csv
- dota-tier1/data/derivados/itens_chave.parquet
- dota-tier1/data/derivados/compras.parquet
- dota-tier1/data/derivados/objetivos.parquet
- dota-tier1/data/derivados/pre_objetivo.parquet
- dota-tier1/work/equipes/lgd/analise.md
- dota-tier1/work/equipes/falcons/analise.md
- dota-tier1/work/equipes/aurora/analise.md
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/solos.json
- dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/36/itemPopularity
- https://api.opendota.com/api/scenarios/itemTimings?hero_id=36
- https://api.opendota.com/api/heroes/36/matchups
---
## Resumo
Necrophos é um int ranged que vive de porcentagem de vida: Heartstopper Aura corrói uma fração da vida máxima de quem está perto dele a cada segundo e isso **ignora Black King Bar** (bkbpierce sim), Death Pulse cura o time e fere em área, e Reaper's Scythe executa quem está com pouca vida, mas essa stun/dano é bloqueada pelo BKB do próprio alvo. No Atlas tier1 (108 picks pro no patch 7.41, `draft.csv` + `jogadores_partida.csv`) ele é jogado de verdade em três posições, sem nenhum pick de suporte (pos 4/5): carry (pos 1, 51 jogos, 52,9% V), offlane (pos 3, 44 jogos, 54,5% V) e, numa fatia bem menor, mid (pos 2, 12 jogos, 50% V). Isso casa com os papéis do OpenDota pra ele (Carry/Nuker/Durable/Disabler, sem Support).

## Pos 1 (carry)
- quando pegar: é a posição mais usada do herói no recorte: 51 dos 108 picks pro (52,9% V, 27V-24D). A LGD o jogou de pos 1 com o Yuma (11 jogos, 64% V, "carry de luta e tempo, não de farm puro") e Aurora e Falcons também o tiraram de pos 1 como flex.
- itens iniciais: tango, gauntlets, boots, magic_wand

### Build
#### Sacred Relic (relic)
- minuto: 10:22 (mediana de 51 jogos pos 1)
- porque: +55 de dano (bônus de ataque comum, não é dano puro), o componente mais barato que acelera o Radiance.
- detalhe: sem bônus além do dano; existe só pra virar Radiance rápido.
- fonte: dota-tier1/data/derivados/itens_chave.parquet; dota-imortal/data/opendota/items.json

#### Radiance (radiance)
- minuto: 12:43 (mediana de 51 jogos pos 1)
- porque: queima 60 de dano mágico por segundo em quem fica perto, limpando wave e camp sozinho enquanto farma.
- detalhe: o burn soma com a Heartstopper Aura (os dois batem % e dano fixo ao mesmo tempo em quem fica perto), e as ilusões do Manta/Mirror Image também incendeiam com o Radiance quando ele sai depois.
- fonte: dota-tier1/data/derivados/itens_chave.parquet; dota-imortal/data/opendota/items.json

#### Boots of Travel (travel_boots)
- minuto: 15:23 (recipe mediana 14:58; mediana de 49 dos 51 jogos pos 1)
- porque: teleporte pra trocar de lane/camp farmando e pra chegar em luta ou objetivo sem perder tempo de XP/ouro.
- fonte: dota-tier1/data/derivados/itens_chave.parquet

#### Aghanim's Shard (aghanims_shard)
- minuto: 16:43 (mediana de 51 dos 51 jogos pos 1, ou seja, praticamente todo jogo pos 1 compra)
- porque: é o item mais comprado do herói nessa posição depois das botas, custa só 1400 e sai assim que o Radiance termina.
- detalhe: o efeito exato que o Shard dá pro Necrophos não está confirmado nas fontes consultadas nesta sessão (Liquipedia e Dota 2 Wiki ficaram inacessíveis); o que dá pra afirmar com fonte é o pick rate quase universal e a janela de compra.
- fonte: dota-tier1/data/derivados/compras.parquet; dota-imortal/data/opendota/items.json

#### Heart of Tarrasque (heart)
- minuto: 28:42 (via Reaver aos 27:02; mediana de 44 dos 51 jogos pos 1)
- porque: +40 de força e regenera 1,5% da vida que falta por segundo, o que empilha com o regen fixo do Sadist (ele já ganha regen de HP/mana a cada abate, multiplicado por 6 numa kill de herói).
- detalhe: Reaver (componente) + Ring of Tarrasque. Junto com a Heartstopper Aura drenando o time inimigo, cria um jogo de atrito que ele vence: eles perdem % de vida, ele regenera %.
- combo: Heart + Sadist: a regeneração percentual de um soma com a fixa do outro, deixando o Necrophos muito difícil de derrubar numa luta longa.
- fonte: dota-tier1/data/derivados/itens_chave.parquet; dota-imortal/data/opendota/items.json; dota-imortal/data/opendota/constants_abilities.json

### Situacionais
#### Black King Bar (black_king_bar)
- minuto: 27:09 (mediana de 38 dos 51 jogos pos 1)
- porque: dispel básico + 60% de resistência mágica por 9s, pra sobreviver ao disable que o impede de ficar vivo e conectar Death Pulse/Scythe.
- detalhe: BKB não ajuda a própria Reaper's Scythe a furar o BKB do alvo (ela tem bkbpierce não), então o item é defensivo pra ele, não ofensivo.
- contra: Enchantress, Night Stalker, Shadow Demon, Ancient Apparition, Crystal Maiden: os piores matchups medidos do herói via OpenDota com no mínimo 20 jogos na amostra (33,3% a 37,8% de vitória), todos com disable ou poke que o impede de sobreviver tempo suficiente pra Heartstopper Aura/Death Pulse renderem
- fonte: dota-tier1/data/derivados/itens_chave.parquet; dota-imortal/data/opendota/constants_abilities.json; https://api.opendota.com/api/heroes/36/matchups

#### Shiva's Guard (shivas_guard)
- minuto: 31:43 (mediana de 38 dos 51 jogos pos 1)
- porque: Arctic Blast agrupa e atrasa o time inimigo (260 de dano + -40% de movimento por 4s) e a Freezing Aura corta -45 de velocidade de ataque de quem chega perto.
- detalhe: +17 de armadura também ajuda a sustentar enquanto a Heartstopper Aura segue drenando (o item não dá regen de vida: o bônus de regen do Shiva's é 0 no items.json).
- contra: times de ataque básico em grupo (a Freezing Aura reduz o dano deles por segundo)
- combo: Arctic Blast trava o time agrupado, a Heartstopper Aura drena % de vida enquanto eles ficam lentos, e a Reaper's Scythe executa quem sobrar com menos vida.
- fonte: dota-tier1/data/derivados/itens_chave.parquet; dota-imortal/data/opendota/items.json

#### Yasha (yasha) → Manta Style (manta)
- minuto: Yasha 20:11, Manta 22:46 (mediana de 15 dos 51 jogos pos 1)
- porque: Manta dá Basic Dispel (limpa silence/hex/root dispelável) e 2 imagens que ajudam a empurrar torre ou limpar camp enquanto ele segue vivo na luta.
- detalhe: no 7.41 o Manta sai de Yasha + Diadem (não mais de Yasha puro); imagem ranged causa 28% do dano e toma 300%, então serve pra empurrar/confundir, não pra lutar de frente.
- contra: disable dispelável (stun, silence, hex comuns) que senão o tira da luta antes de render a Heartstopper Aura
- fonte: dota-tier1/data/derivados/itens_chave.parquet; dota-imortal/data/opendota/items.json

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 39:31 (mediana de 28 dos 51 jogos pos 1; o item mais comum depois do núcleo)
- porque: +10 de todos os atributos e +175 de vida/mana, e upa a ultimate (efeito específico em Necrophos não confirmado nas fontes consultadas).
- detalhe: compra tardia, de jogo que já se estendeu; não é prioridade sobre Heart/BKB/Shiva's.
- contra: nenhum alvo específico: é item de estatística geral pra jogo que passou dos 35-40min e sobra ouro sem um problema pontual pra resolver
- fonte: dota-tier1/data/derivados/itens_chave.parquet; dota-imortal/data/opendota/items.json

#### Eul's Scepter of Divinity (cyclone)
- minuto: 44:38 (mediana de 14 dos 51 jogos pos 1)
- porque: dispel em si mesmo (Basic Dispel) ou trava um inimigo 2,5s pra garantir que a Reaper's Scythe acerte sem reação.
- contra: iniciação ou disable do inimigo que precisa ser atrasado 2,5s pra ele reagir ou fugir, ou pra garantir o acerto do Scythe
- combo: usar o Cyclone no inimigo e soltar a Reaper's Scythe no instante em que ele aterrissa, sem chance de ele reagir ou fugir.
- fonte: dota-tier1/data/derivados/itens_chave.parquet; dota-imortal/data/opendota/items.json

#### Crella's Crozier (crellas_crozier)
- minuto: 28:29 (1 dos 51 jogos pos 1)
- porque: Rite of Rumusque dá 4s de imunidade a dano físico (igual ao Ghost Shroud) e rouba 5% de velocidade de movimento de quem está perto, além de turbinar a própria Putrefaction Aura do item.
- detalhe: o nome ("Rumusque") é o mesmo da lore do Death Seeker de Necrophos ("The Rumusque Faithful consider Necrophos to be more plague than person"), então o item tem ligação temática direta com o herói, ainda que não seja exclusivo dele.
- contra: luta prolongada de troca de ataque básico, onde a janela extra de imunidade a dano físico decide quem fica de pé
- combo: ligar o Ghost Shroud e, quando ele acabar, ativar o Crella's Crozier pra esticar a janela de imunidade a dano físico.
- fonte: dota-tier1/data/derivados/itens_chave.parquet; dota-imortal/data/opendota/items.json; dota-imortal/data/opendota/constants_abilities.json

## Pos 3 (offlane)
- quando pegar: segunda posição mais usada: 44 jogos, 54,5% V (24V-20D), a maior taxa de vitória das três. A Falcons o tirou de pos 3 em 13 dos 14 picks do herói no período com o AMMAR_THE_F (46% V, "offlane que farma"), e Aurora, Nigma, PARIVISION e Yandex também o jogam de offlane.
- itens iniciais: tango, wind_lace, magic_wand, boots

### Build
#### Sacred Relic (relic)
- minuto: 13:23 (mediana de 42 dos 44 jogos pos 3)
- porque: mesmo motivo do pos 1, dano barato (não é dano puro) que acelera o Radiance.
- fonte: dota-tier1/data/derivados/itens_chave.parquet

#### Radiance (radiance)
- minuto: 15:31 (mediana de 42 dos 44 jogos pos 3)
- porque: queima a área e limpa wave/camp sozinho, igual no pos 1, só que farmando no lado do mapa do adversário.
- fonte: dota-tier1/data/derivados/itens_chave.parquet; dota-imortal/data/opendota/items.json

#### Boots of Travel (travel_boots)
- minuto: 14:17 (recipe mediana 13:25; mediana de 43 dos 44 jogos pos 3)
- porque: mesmo motivo do pos 1, mobilidade pra farmar e chegar em luta.
- fonte: dota-tier1/data/derivados/itens_chave.parquet

#### Aghanim's Shard (aghanims_shard)
- minuto: 18:48 (mediana de 43 dos 44 jogos pos 3)
- porque: mesmo pick rate quase universal do pos 1, só ~2min mais tarde (lane de offlane farma um pouco mais devagar que o pos 1).
- detalhe: efeito exato em Necrophos não confirmado nas fontes consultadas.
- fonte: dota-tier1/data/derivados/compras.parquet

### Situacionais
#### Spirit Vessel (spirit_vessel)
- minuto: 8:52 (2 dos 44 jogos pos 3, compra bem precoce)
- porque: Soul Release reduz a Restauração de Vida do alvo em 70% e queima 4% da vida atual por segundo por 8s, direto contra lane com muito heal/regen.
- detalhe: componentes Urn of Shadows + Diadem.
- contra: lane com heróis ou criação de sustain alto (heal, lifesteal, regen passivo) que senão ganham a troca de dano
- combo: usar o Soul Release no mesmo alvo que está sob a Heartstopper Aura empilha dois efeitos de %HP ao mesmo tempo.
- fonte: dota-tier1/data/derivados/itens_chave.parquet; dota-imortal/data/opendota/items.json

#### Heart of Tarrasque (heart)
- minuto: 33:05 (via Reaver aos 30:52; mediana de 29 dos 44 jogos pos 3)
- porque: mesma lógica do pos 1, regen percentual somando com o Sadist.
- fonte: dota-tier1/data/derivados/itens_chave.parquet

#### Black King Bar (black_king_bar)
- minuto: 27:53 (mediana de 29 dos 44 jogos pos 3)
- porque: mesmo motivo do pos 1, dispel + resistência mágica contra quem o interrompe antes de render a aura.
- contra: Enchantress, Night Stalker, Shadow Demon, Ancient Apparition, Crystal Maiden (os piores matchups medidos do herói via OpenDota, min. 20 jogos, 33,3% a 37,8% de vitória)
- fonte: dota-tier1/data/derivados/itens_chave.parquet; https://api.opendota.com/api/heroes/36/matchups

#### Yasha (yasha) → Manta Style (manta)
- minuto: Yasha 21:52, Manta 25:02 (mediana de 21 dos 44 jogos pos 3)
- porque: dispel e split push, igual no pos 1.
- contra: disable dispelável
- fonte: dota-tier1/data/derivados/itens_chave.parquet

#### Lotus Orb (lotus_orb)
- minuto: 23:02 (8 dos 44 jogos pos 3)
- porque: Echo Shell devolve a maioria dos feitiços de alvo único pro próprio inimigo que lançou, bom contra quem tenta nukar/disable o Necrophos de longe.
- contra: heróis de dano/disable de alvo único à distância (o feitiço volta pra quem lançou)
- fonte: dota-tier1/data/derivados/itens_chave.parquet; dota-imortal/data/opendota/items.json

#### Shiva's Guard (shivas_guard)
- minuto: 36:50 (mediana de 18 dos 44 jogos pos 3)
- porque: mesmo motivo do pos 1, agrupa e atrasa quem quer trocar ataque básico.
- contra: times de ataque básico em grupo
- fonte: dota-tier1/data/derivados/itens_chave.parquet

#### Linken's Sphere (sphere)
- minuto: 33:23 (5 dos 44 jogos pos 3)
- porque: Spellblock bloqueia de graça o primeiro feitiço de alvo único a cada 14s, protegendo o combo Death Pulse → Scythe de ser cortado antes de começar.
- contra: heróis com 1 disable de alvo único decisivo (hex, stun único)
- fonte: dota-tier1/data/derivados/itens_chave.parquet; dota-imortal/data/opendota/items.json

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 45:11 (8 dos 44 jogos pos 3)
- porque: mesmo motivo do pos 1, compra tardia de jogo estendido.
- detalhe: efeito específico em Necrophos não confirmado nas fontes consultadas.
- contra: nenhum alvo específico: item de estatística geral pra jogo estendido
- fonte: dota-tier1/data/derivados/itens_chave.parquet

## Pos 2 (mid)
- quando pegar: fatia bem menor no recorte: 12 jogos, 50% V (6V-6D), contra 51 de pos 1 e 44 de pos 3. Aparece como flex de meio em times como LGD, Nigma e Yandex, sem jogador fixo nele no período coberto.
- itens iniciais: tango, magic_wand, boots

### Build
#### Sacred Relic (relic)
- minuto: 13:09 (mediana de 12 dos 12 jogos pos 2)
- porque: mesmo motivo das outras posições.
- fonte: dota-tier1/data/derivados/itens_chave.parquet

#### Radiance (radiance)
- minuto: 15:58 (mediana de 12 dos 12 jogos pos 2)
- porque: mesmo motivo das outras posições, farma rápido ganhando a wave do meio.
- fonte: dota-tier1/data/derivados/itens_chave.parquet

#### Boots of Travel (travel_boots)
- minuto: 10:10 (recipe mediana 9:53; mediana de 11 dos 12 jogos pos 2)
- porque: mesmo motivo das outras posições; no mid sai mais cedo porque a lane do meio costuma render farm mais rápido nos primeiros minutos.
- fonte: dota-tier1/data/derivados/itens_chave.parquet

#### Aghanim's Shard (aghanims_shard)
- minuto: 19:04 (mediana de 12 jogos pos 2, amostra pequena)
- porque: mesmo pick rate quase universal das outras posições.
- fonte: dota-tier1/data/derivados/compras.parquet

### Situacionais
#### Black King Bar (black_king_bar)
- minuto: 23:50 (mediana de 8 dos 12 jogos pos 2)
- porque: mesmo motivo das outras posições; no mid ele costuma estar mais exposto a gank antes do nível 6.
- contra: Enchantress, Night Stalker, Shadow Demon, Ancient Apparition, Crystal Maiden (piores matchups medidos do herói via OpenDota, min. 20 jogos, 33,3% a 37,8% de vitória)
- fonte: dota-tier1/data/derivados/itens_chave.parquet; https://api.opendota.com/api/heroes/36/matchups

#### Heart of Tarrasque (heart)
- minuto: 30:53 (mediana de 7 dos 12 jogos pos 2)
- porque: mesmo motivo das outras posições.
- fonte: dota-tier1/data/derivados/itens_chave.parquet

#### Shiva's Guard (shivas_guard)
- minuto: 32:10 (mediana de 6 dos 12 jogos pos 2)
- porque: mesmo motivo das outras posições.
- contra: times de ataque básico em grupo
- fonte: dota-tier1/data/derivados/itens_chave.parquet

#### Yasha (yasha) → Manta Style (manta)
- minuto: Yasha 25:04, Manta 28:20 (mediana de 4-5 dos 12 jogos pos 2)
- porque: mesmo motivo das outras posições.
- contra: disable dispelável
- fonte: dota-tier1/data/derivados/itens_chave.parquet

## Roshan
Sem registro de Roshan solo: Necrophos não aparece em nenhum dos três arquivos do dota-roshan-solo (`resumo_por_heroi.json`, `solos.json`, `resumo_com_suporte.json`), que só cobrem heróis carry específicos (22 no `resumo_por_heroi.json`) e ele não é um deles. Nos replays do Atlas tier1, porém, ele fecha o Roshan (último golpe) 21 vezes em partidas pro: 15 jogando pos 1 (mediana aos 32:32), 4 jogando pos 3 (mediana aos 24:18) e 2 jogando pos 2. Checando `pre_objetivo.parquet` pra essas mortes do lado do time que de fato fechou o Roshan (`fez` = true): nas 21, pelo menos 1 aliado já estava perto do Roshan antes do abate (`dt_chegada_1_heroi` negativo em todas, de 18 a 97s antes): ou seja, nunca é um solo dele. Em 17 das 21 havia 3 ou mais heróis perto (`dt_chegada_3_herois` negativo, de 10 a 77s antes do abate); nas outras 4, só 1 ou 2 aliados foram detectados perto antes do golpe final, então o time inteiro nem sempre está junto, mas Necrophos nunca fecha sozinho.
