---
id: ficha-broodmother
titulo: "Broodmother"
heroi: Broodmother
patch: 7.41
posicoes: [1]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_patch.json
- dota-tier1/data/draft.csv
- dota-tier1/data/partidas/8746313247/meta.json
- dota-tier1/data/partidas/8746313247/eventos.jsonl
- dota-tier1/data/partidas/8769321570/meta.json
- dota-tier1/data/partidas/8769321570/eventos.jsonl
- dota-tier1/data/partidas/8779396380/meta.json
- dota-tier1/data/partidas/8779396380/eventos.jsonl
- dota-tier1/data/partidas/8813650766/meta.json
- dota-tier1/data/partidas/8813650766/eventos.jsonl
- dota-tier1/data/partidas/8885665054/meta.json
- dota-tier1/data/partidas/8885665054/eventos.jsonl
- dota-roshan-solo/data/solos.json
- dota-roshan-solo/data/resumo_por_heroi.json
- https://api.opendota.com/api/heroes/61/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=61
---
## Resumo
Broodmother é carry de agilidade (pos 1) que farma wave e camp rápido com Spawn Spiderlings, sustenta a vida com Insatiable Hunger e Spider's Milk, e usa a rede (Spin Web) pra se mover e escapar no mapa. Nas 5 partidas de pro do 7.41 que o Atlas tier1 tem registradas (Natus Vincere a draftou 3 vezes, PARIVISION e Team Nemesis 1 vez cada), ela só foi draftada como pos1, sempre como 4º ou 5º pick do time, com 3V-2D (draft.csv); não há registro de pick em outra posição nessa amostra. O motor de item muda de patch pra patch: no 7.41 a Manta Style é montada com Yasha e Diadem, não mais pela receita antiga (items.json, components de `manta` = `yasha` + `diadem`).

## Pos 1 (carry)
- quando pegar: time quer farm rápido de jungle e pressão de torre via split push nos webs; nas 5 partidas do Atlas tier1 ela entrou sempre tarde no draft (4º ou 5º pick do time, coluna `n_pick_do_time` do draft.csv), depois do resto da composição já estar fechado.
- itens iniciais: tango, slippers, wraith_band

### Build
#### Wraith Band (wraith_band)
- minuto: 2,3
- porque: stat check barato que dá dano, velocidade de ataque e armadura pra vencer o trade de lane sem gastar muito ouro.
- detalhe: +5 agilidade, +2 força, +2 inteligência, +6 de velocidade de ataque e +1,75 de armadura por 505 de ouro (items.json). É o primeiro item de verdade comprado nas 5 partidas observadas: a recipe entra entre 0:53 e 1:38 (mediana 1,5 min) e o item fica pronto com mediana de 2,3 min (2,2 a 3,3 min).
- fonte: dota-tier1 eventos.jsonl (5 das 5 partidas); items.json

#### Power Treads (power_treads)
- minuto: 7,4
- porque: velocidade de movimento pra last hit e velocidade de ataque, trocando pra força quando precisa aguentar harass na lane.
- detalhe: +10 no atributo selecionado, +25% de velocidade de ataque, 55 de velocidade de movimento pra herói corpo a corpo, por 1400 de ouro. Mediana de compra nas 5 partidas pro: 7,4 min (336,7 a 728,1 segundos).
- fonte: items.json; dota-tier1 eventos.jsonl (5 partidas)

#### Soul Ring (soul_ring)
- minuto: 9,5
- porque: dá mana pra spamar Spawn Spiderlings e Spin Web sem precisar desviar pra um item de inteligência.
- detalhe: sacrifica vida por 170 de mana por 10s, +6 de força e +2 de armadura, por 805 de ouro. Mediana de 9,5 min (396 a 689 segundos) nas 5 partidas.
- fonte: items.json; dota-tier1 eventos.jsonl (5 partidas)

#### Yasha (yasha)
- minuto: 15,5
- porque: é um dos dois componentes da Manta e já dá velocidade de ataque e movimento pra farmar mais rápido enquanto a Manta não sai.
- detalhe: +16 agilidade, +15 velocidade de ataque, +10% de movimento, por 2100 de ouro. Virou pré-requisito oficial da Manta Style no 7.41 (items.json lista `components` de `manta` como `yasha` + `diadem`).
- combo: Yasha sai antes do Diadem em todas as 5 partidas pro observadas, nunca na ordem inversa.
- fonte: items.json; dota-tier1 eventos.jsonl (5 partidas)

#### Diadem (diadem)
- minuto: 15,9
- porque: segundo componente da receita atual de Manta, dá todos os atributos de uma vez por pouco ouro.
- detalhe: +6 em todos os atributos por 1000 de ouro, sem recipe própria. Comprado quase junto com o Yasha nas 5 partidas (mediana 15,9 min, 15,0 a 18,3 min).
- fonte: items.json; dota-tier1 eventos.jsonl (5 partidas)

#### Manta Style (manta)
- minuto: 18,5
- porque: as imagens limpam wave e camp em paralelo nos webs e o dispel básico tira um silence ou slow leve que travaria a Insatiable Hunger.
- detalhe: cria 2 imagens que valem 33% do dano corpo a corpo cada (28% à distância, tomam 300% de dano), dá +10 força, +26 agilidade, +10 inteligência, +15% de velocidade de ataque e +10% de movimento, com dispel básico e 0,1s de invulnerabilidade no cast. Por 4650 de ouro, montada só com Yasha + Diadem no 7.41, sem mais componentes (items.json). Nas 5 partidas pro saiu com mediana de 18,5 min, sempre logo depois do Diadem.
- contra: qualquer debuff de dispel básico ativo no momento do cast (root leve, alguns slows e silences fracos); não remove stun forte, hex, nem efeitos imunes a dispel básico.
- combo: Manta + Spin Web, pra separar a Broodmother real e as 2 imagens em webs diferentes e farmar 2 a 3 camps ao mesmo tempo, ou empurrar duas linhas junto.
- fonte: items.json; dota-tier1 eventos.jsonl (5 partidas)

### Situacionais
#### Orchid Malevolence (orchid)
- porque: silencia por 5s pra travar um herói com escape ou canalização, e ainda converte 30% do dano recebido durante o silence em dano mágico bônus no fim.
- detalhe: 3275 de ouro. Comprado em 4 das 5 partidas pro, mas com minuto bem variável (12,5 a 33,5 min, mediana 18,5), às vezes antes do Yasha e às vezes bem depois da Manta: entra quando falta um pick-off específico, não numa ordem fixa.
- contra: heróis que dependem de um cast pra fugir, curar ou canalizar um efeito (o silence trava a saída ou a canalização).
- fonte: dota-tier1 eventos.jsonl (4 partidas); items.json

#### Black King Bar (black_king_bar)
- minuto: 25,1
- porque: dispel básico mais 60% de resistência mágica pra entrar numa luta sem morrer pra disable mágico ou burst.
- detalhe: 4050 de ouro, 9s de avatar, imune a dano puro e reflexo durante o efeito; qualquer debuff mágico recebido durante o avatar não tem efeito.
- contra: times com disable mágico em sequência (hex, stun mágico, root) que travariam o farm ou o engage sem o BKB.
- fonte: items.json; dota-tier1 eventos.jsonl (5 partidas)

#### Butterfly (butterfly)
- minuto: 29,5
- porque: evasão de 35% mais dano e velocidade de ataque fazem dela a principal fonte de dano físico do time no final de jogo.
- detalhe: 5450 de ouro, +35 agilidade, +35% evasão, +20% de velocidade de ataque base, +25 de dano.
- contra: times sem True Strike do lado inimigo (sem Monkey King Bar ou Bloodthorn) ficam travados na evasão alta.
- fonte: items.json; dota-tier1 eventos.jsonl (4 das 5 partidas)

#### Skull Basher (basher)
- porque: trava o alvo com stun físico pra garantir o kill depois que o silence do Orchid acaba.
- detalhe: 2875 de ouro, 25% de chance de stunar por 1,2s em ataques corpo a corpo. Visto em 2 das 5 partidas pro, em 31,0 e 34,9 min.
- contra: heróis fujões sem dispel básico disponível no momento do bash.
- fonte: dota-tier1 eventos.jsonl (2 partidas); items.json

#### Aghanim's Shard (aghanims_shard)
- porque: upgrade de habilidade barato (1400 de ouro) pra comprar de passagem quando já tem o resto do build encaminhado.
- detalhe: item passivo, sem custo de slot de uso ativo. Visto em 1 das 5 partidas pro, aos 27,8 min.
- fonte: dota-tier1 eventos.jsonl (1 partida); items.json

#### Monkey King Bar (monkey_king_bar)
- porque: perfura evasão quando o time inimigo tem Butterfly, evasão de herói (ex: Phantom Assassin) ou outro check de esquiva.
- detalhe: 5000 de ouro, 80% de chance de perfurar evasão e causar 70 de dano mágico bônus por ataque.
- contra: heróis ou itens com evasão alta do lado inimigo, que fariam a Broodmother errar ataque sem esse item.
- fonte: OpenDota itemPopularity (hero_id 61, partidas públicas); items.json

#### Nullifier (nullifier)
- porque: dispel básico contínuo mais slow, pra tirar o buff de blink ou fuga de quem depende de dispel básico pra escapar da luta.
- detalhe: 4350 de ouro, dispel básico contínuo e mute de 4s, +75 de dano, +10 de armadura.
- contra: heróis que dependem de um buff com dispel básico (ex: upgrade de blink, alguns escapes) pra fugir da luta.
- fonte: OpenDota itemPopularity (hero_id 61, partidas públicas); items.json

## Roshan
Não há registro de Roshan solo com Broodmother: ela não aparece na lista de heróis solistas do dataset (resumo_por_heroi.json) e os únicos 2 abates de Roshan do dataset com ela presente no fosso são classificados como "time" (solos.json, match 8855814502, partida pública/ranqueada), com ela puxando 73,9% e 81,8% do dano principal do abate (7.565 e 9.072 de dano) ao lado de Doom Bringer, Grimstroke e Bane. Sem dado de Roshan solo.
