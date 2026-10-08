---
id: ficha-dark_seer
titulo: "Dark Seer"
heroi: Dark Seer
patch: 7.41
posicoes: [3]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-tier1/data/draft.csv
- dota-tier1/data/derivados/compras.parquet
- dota-tier1/data/derivados/itens_chave.parquet
- dota-tier1/data/derivados/objetivos.parquet
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/solos.json
- https://api.opendota.com/api/heroes/55/itemPopularity
---

## Resumo
Dark Seer é int corpo a corpo, oficialmente Initiator/Escape/Disabler: ele entra na luta puxando o grupo inimigo com Vacuum, acelera aliados com Surge, farma e machuca em área com Ion Shell e fecha com Wall of Replica, que transforma quem atravessa a parede em réplica lutando pro lado dele. No Atlas Tier 1 (patch 7.41), 86 das 87 escolhas registradas por lane real (`posicao_replay`) foram na posição 3: hoje ele é praticamente só offlane no cenário pro, os picks em pos 1/2 que aparecem no rótulo de draft não se confirmam na lane do replay.

## Pos 3 (offlane)
- quando pegar: pegue quando quiser um offlaner que aguenta troca de lane sem gastar ouro em sustain caro (Helm of Iron Will resolve isso por 975g) e que escala só com itens de grupo (Blink, Shiva's, Shard), sem depender de farm de carry. A innate Mental Fortitude trava a Inteligência dele no mínimo igual à média de Força e Agilidade, então ele não fica sem mana mesmo espamando Ion Shell a jogo inteiro.
- itens iniciais: tango (quase 40% das partidas da amostra), branches/circlet/mantle a caminho de Null Talisman (pouco mais de um terço das partidas) e clarity recorrente pra mana

### Build
#### Helm of Iron Will (helm_of_iron_will)
- minuto: 4-6
- porque: segura a troca de dano na lane sem gastar mana, só com item.
- detalhe: 975 de ouro, +4 de armadura e +4 de regeneração de vida. É o primeiro item grande comprado em quase toda partida da amostra (90 compras registradas em 86 partidas).
- fonte: items.json (helm_of_iron_will); tier1 compras.parquet

#### Arcane Boots (arcane_boots)
- minuto: 10-11
- porque: devolve mana pro time inteiro, e Dark Seer vive de spammar Vacuum/Surge/Ion Shell.
- detalhe: componentes boots + ring_of_basilius + wizard_hat; recarrega 150 de mana num raio de 1200 ao ser ativada.
- fonte: items.json (arcane_boots); tier1 compras.parquet

#### Helm of the Dominator (helm_of_the_dominator)
- minuto: 8-9
- porque: domina um creep neutro tanque pra puxar aggro e bater, enquanto o Dark Seer fica livre pra jogar Ion Shell.
- detalhe: 2550 de ouro. Domina uma criatura neutra não-ancião, dando até 1000 de vida mínima, +25 de dano base, +4 de armadura e +12 de regen ao dominado; o Helm não pode ser reusado nos 3s depois que o dominado leva dano de herói ou Roshan. É o item mais universal da build: comprado em 85 das 86 partidas da amostra.
- fonte: items.json (helm_of_the_dominator); tier1 compras.parquet, itens_chave.parquet

#### Shiva's Guard (shivas_guard)
- minuto: 20-22
- porque: a aura mata attack speed do time inimigo inteiro, e o Arctic Blast desacelera e da dano em área bem na hora da iniciação.
- detalhe: 4500 de ouro (platemail + splintmail + chasm_stone). Freezing Aura reduz -45 de attack speed em raio 1200; Arctic Blast causa 260 de dano mágico e -40% de velocidade de movimento por 4s num raio de 825, e a onda segue o próprio Dark Seer enquanto se expande.
- contra: carries de ataque rápido, que dependem de attack speed pro DPS e perdem justamente isso pra Freezing Aura.
- combo: como a Arctic Blast acompanha o Dark Seer, usar ela durante o Surge/Vacuum mantém o grupo inimigo mais lento enquanto ele se move junto do time pra luta.
- fonte: items.json (shivas_guard); tier1 compras.parquet, itens_chave.parquet

#### Blink Dagger (blink)
- minuto: 24
- porque: fecha o combo de iniciação, blinkando pro meio do grupo inimigo antes de puxar todo mundo.
- detalhe: 2250 de ouro, alcance de 1200. Fica bloqueado por 3s depois de levar dano de herói ou Roshan, então não serve como escape puro sob foco direto.
- combo: Blink pro meio do grupo + Vacuum imediato puxa os inimigos pro centro, abrindo a luta pro time.
- fonte: items.json (blink); tier1 compras.parquet, itens_chave.parquet

### Situacionais
#### Black King Bar (black_king_bar)
- minuto: 28-30
- porque: garante que a iniciação (Vacuum + Wall of Replica) não seja cancelada por stun/silence antes de conectar.
- detalhe: 4050 de ouro (mithril_hammer + ogre_axe). Dispel básico e 60% de resistência mágica por 9s, com imunidade a efeitos negativos de feitiço durante a duração.
- contra: times com disable em sequência ou silence/root que travam a iniciação do Dark Seer antes de ele soltar Vacuum.
- fonte: items.json (black_king_bar); tier1 compras.parquet (48 de 86 partidas)

#### Ring of Tarrasque (ring_of_tarrasque)
- minuto: 24-25
- porque: regen de vida de graça, sem precisar gastar ouro em clarity/flask toda viagem à lane.
- detalhe: 1700 de ouro, +12 de regeneração de vida constante.
- contra: lanes de poke físico constante que não dão tempo de recall com HP alto.
- fonte: items.json (ring_of_tarrasque); tier1 compras.parquet (29 de 86 partidas)

#### Pipe of Insight (pipe)
- minuto: 17-18
- porque: a barreira absorve o primeiro estouro de dano mágico da luta, exatamente no momento em que o Dark Seer está exposto puxando todo mundo.
- detalhe: 3725 de ouro (ring_of_tarrasque + cloak + shawl). Barreira de 425 de bloqueio por 8s e aura de 20% de resistência mágica em raio 1200.
- contra: composições de nuke/ultimate em área que ameaçam o time inteiro durante a iniciação (ex.: lutas decididas por um estouro mágico só).
- fonte: items.json (pipe); tier1 compras.parquet, itens_chave.parquet (19 de 86 partidas)

#### Helm of the Overlord (helm_of_the_overlord)
- minuto: upgrade tardio, poucas partidas da amostra chegam nele
- porque: deixa o creep dominado muito mais forte pra lutas mais longas, sem precisar dominar outro.
- detalhe: 5650 de ouro (helm_of_the_dominator + ultimate_orb). Eleva o mínimo de vida do dominado pra 1800, +70 de dano base, +7 de armadura e sobe 1 nível de algumas habilidades da criatura.
- contra: jogos que se arrastam e o creep dominado original começa a morrer fácil pro dano do time inimigo que escalou.
- fonte: items.json (helm_of_the_overlord); tier1 compras.parquet (10 de 86 partidas)

Aghanim's Shard (1400 de ouro) também aparece em 66 das 86 partidas da amostra, com compra mediana por volta dos 23-24 min, mas o efeito exato dele na habilidade do Dark Seer não está documentado nos dados locais nem foi confirmado numa fonte web acessível nesta pesquisa (ver itens sem fonte). Por isso ele entra como item recorrente na build, sem bloco de "porque" específico.

## Roshan
Sem dado de Roshan solo: das 22 fichas de herói em `resumo_por_heroi.json` (base de Roshan solo por replay), nenhuma é do Dark Seer, e em `solos.json` ele aparece só como presença/dano em Roshans de time, nunca com a classificação `solo_puro`, `solo_com_suporte` ou `solo_ajuda_curta`: nenhuma morte de Roshan "solo" credita ele nessa amostra. Em contexto de time, ele deu o golpe final em Roshan em 10 das 86 partidas do Atlas Tier 1 (`objetivos.parquet`, 11 Roshans no total, uma partida com 2), entre os 18 e os 50 minutos de jogo (mediana por volta dos 26 min): participação de time, não estratégia de solo.
