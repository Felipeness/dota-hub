---
id: ficha-disruptor
titulo: "Disruptor"
heroi: Disruptor
patch: 7.41
posicoes: [5, 4]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- dota-tier1/work/equipes/1win/scripts/out/draft_herois.csv
- https://api.opendota.com/api/heroes/87/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=87
- https://dotacoach.gg/heroes/disruptor
- https://dotacoach.gg/heroes/disruptor/builds/support
---
## Resumo
Disruptor é suporte puro de int: todas as roles no OpenDota são Support, Disabler, Nuker e Initiator, sem nenhuma tag de core (heroStats.json). No dotacoach.gg ele aparece 69,3% das partidas como suporte duro e 28,8% como suporte (posição 4) no 7.41f, contra menos de 1% em mid, off ou carry, que são picks fora da curva e não entram nesta ficha. Os benchmarks públicos do OpenDota (hero_id 87) batem com isso: a mediana de GPM é 326, com 80% das partidas entre 239 e 396, patamar de suporte e não de core. O kit todo gira em torno de prender e calar: Kinetic Field forma uma parede redonda que inimigo não atravessa (unidades imunes a debuff passam direto, dotacoach.gg) e Static Storm calar em área por 6s; combinar os dois tranca o alvo numa gaiola que ele não sai nem com dispel de movimento.

## Pos 5 (suporte duro)
- quando pegar: pegue quando o time já tem dano ou iniciação e precisa de um disable em área confiável pra fechar lutas, sem depender de farm. É o perfil dominante do herói, 69,3% das partidas no 7.41f (fonte: dotacoach.gg/heroes/disruptor).
- itens iniciais: tango, blood_grenade, magic_stick, enchanted_mango, branches, branches, ward_observer, ward_sentry

### Build
#### Boots of Speed -> Arcane Boots (arcane_boots)
- porque: mana é o gargalo do Disruptor (75 de mana base e 0 de regen inicial, heroStats.json); Arcane devolve 150 de mana pra todo mundo perto.
- detalhe: +45 de velocidade de movimento e aura de 1 de regen de mana num raio de 1200; o ativo de recarga serve pra ligar o time todo antes de uma luta.
- fonte: items.json (arcane_boots); OpenDota itemPopularity hero 87 (bota genérica em 89,6% das compras cedo, arcane_boots em 37,6% das compras de meio de jogo, o item mais comum dessa fase)

#### Magic Wand (magic_stick)
- porque: carrega sozinho com qualquer feitiço inimigo visível por perto e devolve vida e mana no all-in de lane.
- detalhe: até 10 cargas, 15 de vida e mana por carga, ganha carga quando inimigo visível usa habilidade num raio de 1200.
- fonte: items.json (magic_stick); OpenDota itemPopularity hero 87 (5,5% das compras iniciais)

#### Glimmer Cape (glimmer_cape)
- porque: some por 5s e ganha 20% de resistência mágica, tempo suficiente pra atravessar território aberto e acertar Kinetic Field ou Static Storm sem ser interceptado.
- detalhe: barreira de 375 de dano mágico, +20 de velocidade enquanto ativa, pode usar em si mesmo ou em aliado; o fade começa 0,5s depois do cast.
- contra: iniciação com um nuke mágico único de até 375 de dano, ou burst físico concentrado que a barreira não cobre.
- combo: Glimmer em si mesmo pra se aproximar invisível e abrir a luta com Kinetic Field antes do time inimigo notar.
- fonte: items.json (glimmer_cape); OpenDota itemPopularity hero 87 (9,7% das compras de meio de jogo, 8,0% de fim de jogo)

#### Blink Dagger (blink)
- porque: entra em alcance de Kinetic Field (900) ou Static Storm (800) sem precisar caminhar exposto, essencial pra iniciar em vez de só reagir.
- detalhe: 1200 de alcance, trava por 3s depois de levar dano de herói ou Roshan.
- combo: Blink pra dentro do grupo inimigo, Kinetic Field (raio 350, 1s de formação) prende todo mundo que não é imune a debuff, Static Storm (raio 550, alcance de cast 800) fecha com silence; precisa ter nível 6 pra ter a ultimate liberada.
- fonte: items.json (blink); constants_abilities.json (disruptor_kinetic_field, disruptor_static_storm, attrib de raio e alcance); OpenDota itemPopularity hero 87 (18,8% no meio de jogo, 28,7% no fim, o item mais comum de fim de jogo ao lado do Scepter)

#### Aghanim's Scepter (ultimate_scepter)
- porque: faz Static Storm também silenciar o uso de itens dos inimigos pegos, não só feitiços, fonte: dotacoach.gg/heroes/disruptor.
- detalhe: na amostra do OpenDota é o item mais comprado no fim de jogo (43,7% das compras dessa fase), bem na frente do Blink; +10 em todos os atributos, +175 de vida e mana.
- contra: inimigos que dependem de um item ativo (BKB, Lotus, Manta) pra escapar ou reagir dentro da área do Static Storm.
- fonte: dotacoach.gg/heroes/disruptor; items.json (ultimate_scepter); OpenDota itemPopularity hero 87 (43,7% das compras de fim de jogo)

#### Aeon Disk (aeon_disk)
- porque: dispara sozinho quando a vida cai abaixo de 70%, dando dispel forte, 75% de resistência a status e 2,5s com todo dano causado e recebido zerado, contra combo de burst que mataria o suporte antes dele fazer o que quer que seja.
- detalhe: +250 de vida e 300 de mana fixos; recarga sobe de 105 pra 165s a cada vez que ativa.
- contra: all-in coordenado (iniciação + burst) focado nele antes da equipe reagir.
- fonte: items.json (aeon_disk); OpenDota itemPopularity hero 87 (6,9% das compras de fim de jogo)

### Situacionais
#### Force Staff (force_staff)
- porque: empurra 600 de distância em 0,5s, serve tanto pra se reposicionar antes de lançar Static Storm quanto pra puxar aliado que iniciou mal.
- detalhe: +10 de inteligência e 175 de vida fixos, não interrompe a ação de quem recebe.
- contra: iniciação corpo a corpo que fecha distância rápido demais pra Glimmer Cape sozinho resolver.
- fonte: items.json (force_staff); OpenDota itemPopularity hero 87 (3,6% meio de jogo, 6,9% fim de jogo)

#### Ghost Scepter (ghost)
- porque: fica imune a dano físico por 4s, direto contra carry ou offlaner de right-click que vem focar o suporte primeiro.
- detalhe: +5 em todos os atributos; mas fica 30% mais vulnerável a dano mágico nesses 4s, então não serve contra composição mágica.
- contra: carries físicos puros que fazem dive nele antes do suporte principal do time.
- fonte: items.json (ghost); OpenDota itemPopularity hero 87 (5,5% das compras de meio de jogo)

#### Solar Crest (solar_crest)
- porque: dá +5 de armadura, 60 de velocidade de ataque e uma barreira de 350 de dano físico pro carry do time, bom pra proteger quem carrega a luta.
- detalhe: compartilha recarga com Pavise, duração de 7s; não dá os bônus de atributo se usado em si mesmo.
- contra: composições de poke físico constante tentando abater o carry aliado antes da luta principal.
- fonte: items.json (solar_crest); OpenDota itemPopularity hero 87 (compra residual no meio e fim de jogo, 3 e 1 ocorrências na amostra)

#### Aghanim's Shard (aghanims_shard)
- porque: dá Kinetic Fence, uma versão parede de Kinetic Field, pra travar rota de fuga em corredor estreito onde o círculo normal não cobre.
- detalhe: 1200 de comprimento, 1s de formação, 4,4s de duração, 70 de mana, 1200 de alcance de cast (constants_abilities.json, disruptor_kinetic_fence); a mesma fonte não lista uma recarga própria pra essa versão shard, então nenhum número de recarga entra aqui.
- combo: Kinetic Fence atrás de um inimigo fugindo mais Static Storm na frente fecha a rota dos dois lados.
- fonte: dotacoach.gg/heroes/disruptor; constants_abilities.json (disruptor_kinetic_fence)

## Pos 4 (suporte de roaming)
- quando pegar: é a segunda posição real do herói, 28,8% das partidas no 7.41f (fonte: dotacoach.gg/heroes/disruptor), contra menos de 1% em mid, off ou carry. Pegue quando o time já tem um suporte duro de visão e precisa de outro disable de área pra rotacionar a lane e fechar pick-off cedo com Kinetic Field.
- build: nenhuma fonte usada neste levantamento separa o build por posição para este herói. No recorte de Tier 1 local (dota-tier1/draft.csv) o Disruptor teve 25 picks no total, mas só 21 com posição confirmada por replay, e os 21 foram todos pos 5 (zero pos 4 confirmado); o dotacoach.gg trata pos 4 e pos 5 como o mesmo build "Support", sem separar por posição, e o dota2protracker recusou a conexão nesta consulta (HTTP 403). Sem um replay confirmado de pos 4 nem uma fonte que separe os dois, o core de Pos 5 (Arcane Boots, Magic Wand, Glimmer Cape, Blink Dagger, Aghanim's Scepter, Aeon Disk) e os situacionais listados ali se aplicam igual ao pos4; a diferença real entre as duas posições é de rota e timing de rotação, não de item. Não repito os blocos de item aqui pra não duplicar conteúdo sem fonte nova.

## Roshan
Sem dado de Roshan solo. Disruptor não aparece em nenhum dos heróis listados em resumo_por_heroi.json nem resumo_com_suporte.json (dota-roshan-solo/data), que cobrem só carries e cores que efetivamente solam ou participam ativamente do abate; a amostra de Atlas tier1 pra ele também é de só 1 pick em 1 time (1win, posição 5, draft_herois.csv), insuficiente pra qualquer afirmação sobre o que ele faz no Roshan.
