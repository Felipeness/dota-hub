---
id: ficha-death_prophet
titulo: "Death Prophet"
heroi: Death Prophet
patch: 7.41
posicoes: [2, 3]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_patch.json
- dota-roshan-solo/data/solos.json
- dota-roshan-solo/data/patch.json
- dota-tier1/work/equipes/1win/scripts/out/draft_herois.csv
- dota-tier1/work/equipes/1win/hub.json
- dota-tier1/work/equipes/aurora/tmp/draft_pre.csv
- dota-tier1/work/equipes/falcons/saidas/jogadores.txt
- https://dotacoach.gg/heroes/death-prophet
- https://api.opendota.com/api/heroes/43/itemPopularity
- https://api.opendota.com/api/scenarios/itemTimings?item=black_king_bar&hero_id=43
- https://api.opendota.com/api/scenarios/itemTimings?item=kaya_and_sange&hero_id=43
- https://api.opendota.com/api/scenarios/itemTimings?item=shivas_guard&hero_id=43
- https://api.opendota.com/api/scenarios/itemTimings?item=ultimate_scepter&hero_id=43
- https://api.opendota.com/api/benchmarks?hero_id=43
---

## Resumo

Death Prophet é uma nuker/pusher all-stats que limpa wave e lane com Crypt Swarm, sustenta com Silence e Spirit Siphon, e vira pressão de torre e de luta com Exorcism (fantasmas que batem em herói e estrutura e a curam de volta). No 7.41f ela é jogada sobretudo de mid, 50,9% das partidas e 49,5% de vitória, e de offlane, 33,7% e também 49,5%; suporte, suporte duro e carry somados ficam abaixo de 16% de seleção e com vitória pior, de 45% a 47% (dotacoach.gg). No OpenDota ela vence entre 47,6% e 50,0% em todas as faixas de MMR (heroStats.json, brackets 1 a 7). No recorte local de draft de time tier 1, nem 1win nem aurora a pickaram uma vez sequer (picks = 0 nas duas tabelas), mas ela apareceu do lado de fora: foi banida 1x contra o 1win e 2x pela aurora, e o adversário do 1win a pickou 1x (draft_herois.csv, draft_pre.csv). No levantamento de jogadores da Falcons só SumaiL, que joga mid, a jogou, uma vez (jogadores.txt). Hoje ela não é prioridade de pick no cenário pro de ponta, mas segue viável em mid e offlane fora desse recorte.

## Pos 2 (mid)

- quando pegar: lane solo, onde ela consegue ficar sozinha na XP batendo e limpando wave com Crypt Swarm; fonte de posição: 50,9% de seleção e 49,5% de vitória em mid (dotacoach.gg, 7.41f). A assinatura de item inicial do OpenDota (Bottle em 50 das compras do early game e Null Talisman em 47, as duas maiores entre os itens de sustain/mana do early) é o padrão clássico de laner solo que não sai do meio.
- itens iniciais: tango, branches, faerie_fire, bottle

### Build

#### Bottle (bottle)
- porque: enche de novo com rune e dá sustain pra não precisar voltar à loja.
- detalhe: 675 de ouro, reabastece ao usar uma rune de bounty ou de água guardada. É o item de sustain/mana mais comprado no early_game_items de quem joga Death Prophet no OpenDota (50 ocorrências, contando só os itens de build e não botas genéricas), o padrão de quem fica sozinha no meio.
- fonte: items.json (bottle); OpenDota itemPopularity hero 43

#### Power Treads (power_treads)
- porque: velocidade de ataque pra fechar last hit e limpar wave mais rápido junto com o Crypt Swarm; como ela é all-stats, o atributo de troca das Treads não importa muito.
- detalhe: 1.400 de ouro. É a bota mais comprada no levantamento (37 no early + 4 no mid, contra 29+4 do Phase Boots).
- fonte: items.json; OpenDota itemPopularity hero 43

#### Null Talisman (null_talisman)
- porque: mana pra spamar Crypt Swarm (80 a 110 de mana) e Silence (80 a 110) sem secar.
- detalhe: 505 de ouro. Segundo item de sustain/mana mais comprado no early_game_items (47 ocorrências), logo depois do Bottle.
- fonte: items.json; constants_abilities.json (custo de mana de Crypt Swarm e Silence); OpenDota itemPopularity hero 43

#### Black King Bar (black_king_bar)
- minuto: por volta de 20 a 25 min (OpenDota scenarios/itemTimings hero 43: 22 jogos já tinham aos 20 min, 112 aos 25, 122 aos 30)
- porque: te deixa viva pra soltar Exorcism e Spirit Siphon dentro da troca em vez de cair pro primeiro stun.
- detalhe: +10 Força, +24 de dano, imunidade a magia por 9/8/7s (conforme o nível do item), reduz 60% do dano mágico recebido durante a imunidade. Montado com Mithril Hammer e Ogre Axe, que são o 3º e o 2º item mais comprados do mid_game_items (38 e 68 ocorrências).
- contra: disables de alvo único ou em área que te impediam de castar antes do BKB (stun, hex, root). Não ajuda a atravessar o BKB do inimigo: o Exorcism em si já bkbpierce (ver combo), mas o seu Silence não.
- combo: Exorcism tem bkbpierce = Yes mesmo sendo dano físico (constants_abilities.json), então os fantasmas continuam batendo mesmo se o inimigo ligar o próprio BKB; o seu BKB serve pra você sobreviver até soltar o combo, não pra forçar o dano do Exorcism a passar.
- fonte: items.json (black_king_bar); constants_abilities.json (death_prophet_exorcism, bkbpierce); OpenDota itemTimings hero 43; OpenDota itemPopularity hero 43

#### Kaya and Sange (kaya_and_sange)
- minuto: por volta de 20 a 25 min (OpenDota itemTimings hero 43: 77 jogos aos 20 min, 86 aos 25, caindo pra 39 aos 30, ou seja a maior parte monta antes dos 25 min)
- porque: amplifica o dano mágico do Crypt Swarm e do Spirit Siphon e dá resistência a lentidão pra não travar de novo depois do BKB acabar.
- detalhe: +16 Força, +16 Inteligência, +25% de resistência a lentidão, +12% de amplificação de feitiço, +20% de restauração de vida, +40% de regeneração de mana, +25% de redução de custo de mana.
- fonte: items.json (kaya_and_sange); OpenDota itemTimings hero 43; OpenDota itemPopularity hero 43 (sange sozinho aparece 13 no mid e 13 no late)

#### Shiva's Guard (shivas_guard)
- minuto: por volta de 25 a 30 min (OpenDota itemTimings hero 43: 46 jogos aos 25 min, 88 aos 30)
- porque: a nova gela e desacelera em área pra manter todo mundo dentro do raio de 700 do Exorcism, e a aura de velocidade de ataque reduz o dano físico que você toma de volta.
- detalhe: +17 de armadura; aura Freezing Aura tira 45 de velocidade de ataque num raio de 1.200; Arctic Blast causa 260 de dano mágico e reduz 40% de movimento por 4s num raio de 825. É o item mais comprado no late_game_items (25 ocorrências) depois do BKB.
- contra: carries de auto-ataque rápido (a aura de -45 de velocidade de ataque reduz o DPS deles) e qualquer herói que dependa de kitar você, já que o Arctic Blast te segue.
- fonte: items.json (shivas_guard); OpenDota itemTimings hero 43; OpenDota itemPopularity hero 43

### Situacionais

#### Aghanim's Shard (aghanims_shard)
- quando: jogo que puxa pra troca prolongada, onde um Spirit Siphon extra vale mais que o Scepter inteiro.
- porque: dá uma carga extra de Spirit Siphon e um medo breve (fear) ao acertar siphons consecutivos no mesmo alvo, prendendo quem está fugindo de você.
- contra: heróis que tentam kitar ou fugir logo depois do primeiro Siphon.
- fonte: dotacoach.gg/heroes/death-prophet; OpenDota itemPopularity hero 43 (7 compras no mid_game_items)

#### Aghanim's Scepter (ultimate_scepter)
- quando: jogo que chega no late e o time precisa de mais pressão de torre/Roshan.
- porque: sempre que você acerta um inimigo com habilidade ou ataque, sai um fantasma extra que bate nele com dano bônus e volta te curando; isso empilha com a pressão do Exorcism sem depender só dele.
- detalhe: +10 de todos os atributos, +175 de vida, +175 de mana (bônus genérico do Aghanim's Scepter); o fantasma extra é o bônus específico de herói, mas a página não informa o valor exato do dano dele.
- fonte: dotacoach.gg/heroes/death-prophet; items.json (ultimate_scepter, atributos genéricos); OpenDota itemTimings hero 43

#### Scythe of Vyse (sheepstick)
- quando: contra um alvo único que decide a luta se escapar antes do seu combo acabar.
- porque: hex de 2,8s que desarma, silencia e transforma o alvo em critter, travando a fuga.
- contra: iniciadores ou carries que, soltos, virariam a luta.
- fonte: items.json (sheepstick)

#### Lotus Orb (lotus_orb)
- quando: contra um Silence, hex ou root de alvo único vindo em você.
- porque: devolve a maioria das magias de alvo único direcionadas a você pra quem lançou (nota do items.json: itens neutros de habilidade dirigida não acionam o efeito).
- contra: silences e disables de alvo único que tentam te tirar do combo antes do Exorcism sair.
- fonte: items.json (lotus_orb, notes)

## Pos 3 (offlane)

- quando pegar: lane de 3 contra 2, onde ela aguenta trocar golpe com Crypt Swarm e Silence sem precisar da rune do meio; fonte de posição: 33,7% de seleção e 49,5% de vitória em offlane, praticamente empatada com o mid (dotacoach.gg, 7.41f). Diferente do mid, o item inicial de mana dela muda: Soul Ring (9 ocorrências) e Urn of Shadows (8) aparecem no early_game_items do OpenDota junto do Bottle/Null Talisman, e são os itens clássicos de quem não tem bottle de rune garantida porque está na trilateral.
- itens iniciais: tango, branches, soul_ring

### Build

#### Soul Ring (soul_ring)
- porque: mana pra spamar Crypt Swarm e Silence na lane de 3 sem depender de voltar pra base ou de rune.
- detalhe: 805 de ouro; troca uma fração da vida por mana ao ativar. Aparece no early_game_items do OpenDota (9 ocorrências) junto do Urn of Shadows (8), sinal de jogos de offlane.
- fonte: items.json (soul_ring); OpenDota itemPopularity hero 43

#### Phase Boots (phase_boots)
- porque: dano fixo e velocidade de fase pra iniciar ou sair de uma troca de 3x2 na lane, ao contrário das Treads que servem mais pro solo do mid.
- detalhe: 1.450 de ouro. Segunda bota mais comprada no levantamento (29 no early + 4 no mid, contra 37+4 do Power Treads).
- fonte: items.json (phase_boots); OpenDota itemPopularity hero 43

#### Black King Bar (black_king_bar)
- minuto: por volta de 20 a 25 min (OpenDota scenarios/itemTimings hero 43, mesmo dado agregado do mid: 22 jogos aos 20 min, 112 aos 25, 122 aos 30)
- porque: mesmo motivo do mid, sobreviver pra soltar Exorcism e Spirit Siphon dentro da troca.
- detalhe: ver bloco do BKB na seção de mid; o item não muda entre as duas posições.
- contra: disables de alvo único ou em área que te impediam de castar.
- fonte: items.json; constants_abilities.json (death_prophet_exorcism, bkbpierce); OpenDota itemTimings hero 43

#### Shiva's Guard (shivas_guard)
- minuto: por volta de 25 a 30 min (OpenDota itemTimings hero 43: 46 jogos aos 25 min, 88 aos 30)
- porque: offlaner recebe mais dano físico de carry e de jungle; a armadura e a aura de -45 de velocidade de ataque compensam isso, e a nova mantém o alvo dentro do raio do Exorcism.
- detalhe: ver atributos no bloco do mid; mesmo item, mesma fonte.
- contra: carries de auto-ataque rápido e qualquer herói que dependa de kitar você.
- fonte: items.json; OpenDota itemTimings hero 43; OpenDota itemPopularity hero 43

### Situacionais

Mesmos itens situacionais do mid (Aghanim's Shard, Aghanim's Scepter, Scythe of Vyse, Lotus Orb): o OpenDota não separa a compra por posição, e a função de cada item (travar fuga, turbinar push, refletir disable) não muda se ela saiu de mid ou de offlane.
- fonte: OpenDota itemPopularity hero 43; dotacoach.gg/heroes/death-prophet

## Roshan

Nos replays de Roshan solo do patch atual (solos.json), Death Prophet aparece em 15 mortes de Roshan: 14 classificadas como abate em grupo ("time") e 1 como "finalização" (ela ficou com 56,1% do dano mas o último golpe foi de outro herói); nenhuma caiu nas categorias solo_puro, solo_com_suporte ou solo_ajuda_curta. Pelos dados locais, ela não costuma soltar Roshan sozinha: participa do abate em grupo, ou contribui com a maior parte do dano sem fechar o último golpe, provavelmente com o Exorcism ativo somando dano, mas sem registro de solo neste patch.
