---
id: ficha-beastmaster
titulo: "Beastmaster"
heroi: Beastmaster
patch: 7.41
posicoes: [2, 3]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-tier1/work/equipes/1win/hub.json
- dota-tier1/work/equipes/betboom/hub.json
- dota-tier1/work/equipes/lgd/hub.json
- dota-tier1/work/equipes/nigma/hub.json
- dota-tier1/work/equipes/parivision/hub.json
- dota-tier1/work/equipes/aurora/hub.json
- dota-tier1/work/equipes/xtreme/hub.json
- dota-tier1/work/equipes/navi/hub.json
- dota-tier1/work/equipes/falcons/hub.json
- https://api.opendota.com/api/heroes/38/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=38
---
## Resumo
Beastmaster é um herói de atributo universal (primary_attr "all" em 7.41, fonte heroes.json; não é mais "de força") e iniciador que domestica bichos da jungle (Helm of the Dominator depois Helm of the Overlord) e abre luta com Primal Roar, um stun que atravessa Black King Bar do inimigo (bkbpierce sim, fonte constants_abilities.json) e empurra o alvo por um corredor de dano. No 7.41 dos times tier 1 ele aparece de pos 2 (mid) e de pos 3 (offlane): o No!ob jogou pos 2 com ele 5 vezes na Nigma, enquanto o MieRo da BetBoom (8-3 em 11 jogos recentes), a LGD, a PARIVISION e a Aurora o jogam de pos 3 iniciador (fontes: nigma/hub.json, betboom/hub.json, lgd/hub.json, parivision/hub.json, aurora/hub.json). No ranking público ele é pouco picado no circuito pro agora (pro_pick 4, pro_ban 6, fonte heroStats.json), mas é respeitado quando aparece: contra a BetBoom ele foi banido 53 vezes em 130 jogos (41%, fonte betboom/hub.json), e a NAVI lista Beastmaster num grupo de heróis (com Batrider, Necrophos e Enigma) cujo ban "pune um carry que farma sozinho e um time que perde lane": a própria fonte marca essa leitura como correlação, não causalidade confirmada (fonte navi/hub.json).

## Pos 2 (mid)
- quando pegar: a Nigma jogou o No!ob de pos 2 com Beastmaster em 5 partidas; outros times registram o mesmo flex (1win: pos 2 em 5 de 8 jogos; LGD: pos 2/pos 3). Fonte: nigma/hub.json, 1win/hub.json, lgd/hub.json.
- itens iniciais: branches (277 ocorrências), tango (69), sobi_mask / Sage's Mask (55) e magic_stick (46) são os mais comprados em start_game_items; quelling_blade (21) e faerie_fire (36) aparecem bem menos (fonte: start_game_items, OpenDota hero 38, conferido 08/10/2026)

### Build
#### Helm of Iron Will (helm_of_iron_will)
- porque: +4 de armadura e +4 de regen de vida por 975 de ouro, pra segurar a lane sozinho até fechar o Helm of the Dominator.
- detalhe: é o item de early game mais comprado no hero (85 ocorrências na OpenDota, mais que o próprio Dominator). Sem efeito ativo, só os bônus passivos listados.
- fonte: https://api.opendota.com/api/heroes/38/itemPopularity; items.json

#### Helm of the Dominator (helm_of_the_dominator)
- porque: domestica um creep neutro não-ancião e dá a ele movimento 370, vida mínima 1000, +25 de dano, +4 de armadura, +12 de regen de vida.
- detalhe: o creep dominado ainda recebe o bônus de attack speed do Inner Beast (passivo inato, raio 1200) e cada ataque dele soma pro contador de Drums of Slom. O Helm trava por 3s se o creep dominado levar dano de herói ou Roshan.
- combo: dominar um creep perto da jungle inimiga antes de rotacionar dá um corpo extra pra puxar aggro ou empurrar lane enquanto Beastmaster faz outra coisa no mapa.
- fonte: items.json (texto da habilidade Dominate); constants_abilities.json (beastmaster_inner_beast)

#### Power Treads (power_treads)
- porque: mobilidade e troca de atributo (Força pra tankar, Agilidade pra acelerar os próprios ataques e o farm do Beastmaster).
- detalhe: o bônus de attack speed do Treads é só do Beastmaster. O boar (Summon Razorback) e os falcões (Summon Raptors) têm attack speed próprio, não herdado dos Treads.
- fonte: items.json

#### Helm of the Overlord (helm_of_the_overlord)
- porque: upgrade do Dominator que domina qualquer neutro, inclusive ancião, com vida mínima 1800, +70 de dano, e sobe 1 nível de algumas habilidades do bicho dominado.
- detalhe: dominar um ancião (ex. um grande da jungle) vira um segundo corpo de dano real, que também se beneficia do Inner Beast e dispara Drums of Slom nos próprios ataques.
- combo: dominar o ancião pouco antes de uma luta de 5 ou de bater Roshan: o corpo extra ajuda a segurar frente e a tankar o dano do próprio Roshan.
- fonte: items.json (texto da habilidade Dominate, versão Overlord)

#### Blink Dagger (blink)
- porque: fecha os 1200 de distância que faltam pra entrar no alcance de 600 do Primal Roar sem precisar andar exposto até lá.
- detalhe: trava por 3s depois de levar dano de herói ou Roshan, então a iniciação precisa vir de fora da visão do time inimigo.
- combo: Blink (1200 de alcance) + Primal Roar (600 de alcance) = iniciação instantânea de longe; e como o Roar atravessa Black King Bar (bkbpierce sim), mesmo um alvo com BKB ativo é stunado.
- fonte: items.json (blink_range); constants_abilities.json (beastmaster_primal_roar: abilitycastrange, bkbpierce)

#### Black King Bar (black_king_bar)
- porque: dispel básico, 60% de resistência mágica e imunidade a efeito negativo de feitiço por 9/8/7s (cai com o nível do item), pra sobreviver até soltar o Roar.
- detalhe: sem isso, um disable antes do Blink cancela a iniciação inteira.
- fonte: items.json (texto da habilidade Avatar)

### Situacionais
#### Shiva's Guard (shivas_guard)
- porque: Arctic Blast de 260 de dano mágico e -40% de movimento num raio de 825, mais aura de -45 de attack speed num raio de 1200.
- contra: heróis de dano físico que dependem de attack speed pra fazer dano (agilidade pura, ilusionistas) e de velocidade pra fugir de Beastmaster depois do Roar: a aura e o blast tiram as duas coisas.
- fonte: items.json

#### Pipe of Insight (pipe)
- porque: barreira que absorve 425 de dano mágico por aliado durante 8s, mais 8% de resistência mágica em área (raio 1200).
- contra: combos de nuke mágico em área, quando o time adversário depende de estourar várias ultimates mágicas juntas pra abrir a luta.
- fonte: items.json

#### Assault Cuirass (assault)
- porque: +30 de attack speed e +5 de armadura em área pros aliados (raio 1200), -5 de armadura nos inimigos perto.
- detalhe: o attack speed extra acelera o contador de Drums of Slom, que precisa de 20 ataques pra chegar no intervalo mínimo de 0,5s entre tambores; a aura ajuda Beastmaster, o creep dominado e os falcões (Summon Raptors) a baterem mais rápido ao mesmo tempo.
- fonte: items.json; constants_abilities.json (beastmaster_drums_of_slom: max_stacks, min_drum_hit_interval)

#### Orchid Malevolence / Bloodthorn (orchid / bloodthorn)
- porque: silencia 5s e devolve 30% (Orchid) ou 60% (Bloodthorn) do dano recebido durante o silêncio como dano mágico bônus no final.
- contra: heróis que dependem de uma habilidade ativa pra sobreviver ou virar a luta (channel, cura, escape): o silêncio tira essa opção; o Bloodthorn ainda dá acerto verdadeiro contra evasão.
- fonte: items.json

#### Scythe of Vyse (sheepstick)
- porque: hex de 2,8s que desarma, silencia e muta o alvo, e destrói ilusões na hora.
- contra: heróis de ilusão (Naga Siren, Phantom Lancer, Terrorblade) ou qualquer herói com um único botão de pânico que precisa ser cortado.
- fonte: items.json

#### Nullifier (nullifier)
- porque: dispel básico no alvo e um debuff de 4s que continua dispelando e desacelerando (10% de lentidão).
- contra: heróis que sobrevivem ou escapam do Roar com um buff dispelável (invisibilidade básica, boost de velocidade, invulnerabilidade básica).
- fonte: items.json

## Pos 3 (offlane)
- quando pegar: é a posição mais citada entre os times tier 1: MieRo (BetBoom) 8-3 em 11 jogos recentes de pos 3, dentro do pool que a própria BetBoom descreve como "offlane de aura e iniciação"; a PARIVISION lista Beastmaster entre os "iniciadores e linha de frente" de pos 3 (13 jogos na tabela principal, 9 na janela "Era Noticed"); a LGD joga o herói como flex 3/2 (Beastmaster e Batrider são do offlaner Wisper); a Aurora cita Beastmaster entre os flexes 3/1/2. Fontes: betboom/hub.json, lgd/hub.json, parivision/hub.json, aurora/hub.json.
- itens iniciais: mesmos da pos 2 (branches, tango, sobi_mask, magic_stick como mais comprados): a OpenDota não separa item por posição para este herói.

### Build
A sequência de itens é a mesma da pos 2 (Helm of Iron Will → Helm of the Dominator → Power Treads → Helm of the Overlord → Blink Dagger → Black King Bar): a fonte de compras (OpenDota itemPopularity) não distingue por posição, e o papel em jogo é o mesmo nas duas: dominar um bicho grande e abrir luta com o Roar. A diferença real está na rota, não no item:
- porque (rota): de pos 3 ele farma no triângulo do lado inimigo e entra na jungle neutra mais devagar que o pos 2, que joga a lane sozinho e tende a nivelar mais rápido.
- detalhe: a Falcons lista Slardar e Beastmaster como os heróis cujo ban provavelmente "punem um offlaner que farma sozinho no lado do inimigo" (a própria fonte marca isso como causalidade provável, intenção não demonstrável); a NAVI inclui Beastmaster num grupo maior (com Batrider, Necrophos e Enigma) que "punem um carry que farma sozinho e um time que perde lane", também como correlação, não causalidade confirmada. Ou seja, de pos 3 ele é lido pelos analistas dos times como ganker da rota de farm isolado do adversário, não só como tanque de luta. Mas é leitura dos times, não um fato mecânico do herói.
- fonte: navi/hub.json; falcons/hub.json

### Situacionais
Mesmas opções da pos 2 (Shiva's Guard, Pipe of Insight, Assault Cuirass, Orchid/Bloodthorn, Scythe of Vyse, Nullifier), pelos mesmos motivos e "contra" listados ali: a fonte de itens não separa por posição.

## Roshan
Nos replays de solo de Roshan há 5 partidas de Beastmaster, todas de jogadores pro, mas só 2 foram solo puro: nas outras 3 havia um aliado a menos de 2500 de distância no início (fonte: resumo_por_heroi.json). Nível mediano ao abater: 13 (faixa 13 a 23). Minuto mediano de início do solo: 18:22 (faixa 15:25 a 27:34), levando uma mediana de 38,8s pra terminar. Fica com vida mínima mediana de 1.177 (47% da vida máxima no fim) e patrimônio mediano de 9.707 de ouro no momento. Fecha com a Aegis em 4 das 5 vezes. Os itens mais vistos nesses solos são Branches, Ultimate Scepter, Power Treads e Magic Wand (4 de 5 cada); nas habilidades usadas durante o solo, Wild Axes e Summon Razorback aparecem nas 5 partidas e Summon Raptor em 4: ele limpa o Roshan com os bichos e os machados, não de auto-attack puro. A maioria dos solos (4 de 5) começa na jungle da própria rota segura (2 Dire, 2 Radiant), e não na jungle inimiga.
