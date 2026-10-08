---
id: ficha-enigma
titulo: "Enigma"
heroi: Enigma
patch: 7.41
posicoes: [3, 2]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-tier1/data/derivados/objetivos.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
---

## Resumo

Enigma é Disabler/Initiator/Pusher (papéis oficiais do OpenDota, heroes.json): ele abre luta com Black Hole, um channel de 4s que prende todo mundo num raio de 420 e ignora Black King Bar (bkbpierce: Yes, constants_abilities.json), e limpa wave e jungle com Midnight Pulse e os Eidolons de Demonic Summoning (nome atual da habilidade; a chave interna ainda é enigma_demonic_conversion, constants_abilities.json). No 7.41, no dataset pro do Atlas tier1 (draft.csv, 53 partidas com o herói), ele é quase sempre offlane: 46 de 53 picks na pos 3 (86,8%, 65,2% de vitória, 30V-16D) contra 6 na pos 2 (11,3%, 33,3% de vitória, 2V-4D) e 1 na pos 1 (descartado como ruído). A build muda pouco entre as duas posições: Drum de Endurance e Botas Tranquilas cedo, Blink Dagger e Aghanim's Shard por volta dos 15-17 min para abrir o combo, Black King Bar depois, e Aghanim's Scepter mais Octarine Core no meio-fim de jogo para sustentar e repetir o Black Hole.

## Pos 3 (offlane)

- quando pegar: como disable de área que farma sozinho a trio-lane ou a offlane e entra sem precisar de muito ouro para ser relevante; é de longe a posição real do herói no 7.41, 46 das 53 partidas pro do dataset local e 65,2% de vitória (dota-tier1/data/draft.csv).
- itens iniciais: tango, ring_of_regen, branches

### Build

#### Drum of Endurance (ancient_janggo)
- minuto: 6.6
- porque: estoca força e vida de graça e dá o empurrão de velocidade pra fechar o gank antes do inimigo escapar.
- detalhe: 1625 de custo, +8 de força, aura passiva de +15 de velocidade e +2,5 de regeneração num raio de 1200, e um ativo de 8 cargas com +35 de velocidade de ataque e +13% de velocidade de movimento por 6s. Em 42 das 53 partidas pro com Enigma pos3 ele comprou o item (mediana 6,6 min).
- fonte: dota-tier1/data/derivados/compras.parquet (hero=enigma, posicao=3, n=42); items.json

#### Tranquil Boots (tranquil_boots)
- minuto: 7.4
- porque: cura rápido parado na lane sem gastar mana, e troca pra outra bota mais tarde sem perder o investimento.
- detalhe: 900 de custo (sobre Boots of Speed), +65 de velocidade de movimento e +14 de regeneração de vida enquanto não ataca nem é atacado; ao atacar um herói ou ser atacado por qualquer unidade, perde o bônus de regeneração e a velocidade cai de 65 pra 40 por 13s (não zera, só reduz). Boots de Speed saiu em 52 das 53 partidas pro (mediana 6,7 min) e 29 delas evoluíram pra Tranquil (mediana 7,4 min).
- fonte: dota-tier1/data/derivados/compras.parquet (hero=enigma, posicao=3); items.json

#### Blink Dagger (blink)
- minuto: 14.5
- porque: Black Hole só alcança 275 de distância pra lançar; sem Blink você nunca chega perto o bastante pra prender o time inimigo.
- detalhe: 2250 de custo, teleporta até 1200 de distância (cai pra 960 se você tomou dano de herói ou de Roshan nos últimos 3s). Comprado em 47 das 53 partidas pro (mediana 14,5 min).
- combo: Blink pro meio do grupo inimigo e canaliza Black Hole na sequência; como o Black Hole ignora spell immunity (bkbpierce: Yes), ninguém escapa comprando BKB sozinho.
- fonte: dota-tier1/data/derivados/compras.parquet (hero=enigma, posicao=3, n=47); items.json (alcance do blink); constants_abilities.json (alcance e bkbpierce do Black Hole)

#### Aghanim's Shard (aghanims_shard)
- minuto: 17.1
- porque: alonga o stun do Malefice pra travar um pick isolado antes do time chegar.
- detalhe: 1400 de custo. No Malefice, o Shard soma 0,3s de stun por instância (shard_bonus_stun_duration, constants_abilities.json), e o Malefice bate 3 instâncias por padrão, então o Shard adiciona 0,9s de stun total no alvo nessa fase do jogo (o talento de nível 25 soma +4 instâncias, indo pra 7 no total, mas isso é lategame e não afeta o motivo de comprar o Shard aos 17 min). Comprado em 44 das 53 partidas pro (mediana 17,1 min).
- fonte: dota-tier1/data/derivados/compras.parquet (hero=enigma, posicao=3, n=44); constants_abilities.json (enigma_malefice, shard_bonus_stun_duration)

#### Black King Bar (black_king_bar)
- minuto: 25.4
- porque: Black Hole é canalizado por 4s; qualquer stun ou silence que pegue em você quebra o channel antes da hora, e o BKB blinda exatamente isso.
- detalhe: 4050 de custo, 60% de resistência mágica e imunidade a efeitos negativos de feitiço inimigo por 9/8/7s (cai 1s por recompra), com dispel básico ao ativar. Comprado em 41 das 53 partidas pro (mediana 25,4 min).
- contra: qualquer time com stun ou silence de longo alcance pronto pra te interromper no meio do Black Hole.
- fonte: dota-tier1/data/derivados/compras.parquet (hero=enigma, posicao=3, n=41); items.json (Black King Bar); constants_abilities.json (Black Hole é Channeled)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 33.7
- porque: +10 em todos os atributos e +175 de vida e mana dão o fôlego pra sobreviver à luta em que você acabou de abrir e ainda ter mana pra outro Malefice ou Midnight Pulse.
- detalhe: 4200 de custo. Não achei upgrade de habilidade específico do Enigma nas constantes locais (constants_abilities.json não lista nenhum atributo com "scepter" nas 4 habilidades dele); o ganho aqui é puramente o stat bônus padrão do item. Comprado em 28 das 53 partidas pro (mediana 33,7 min).
- fonte: dota-tier1/data/derivados/compras.parquet (hero=enigma, posicao=3, n=28); items.json

#### Octarine Core (octarine_core)
- minuto: 34.0
- porque: Black Hole tem recarga de 180/170/160s; 25% de redução de recarga é o item que faz você conseguir usar a ulti de novo ainda dentro do mesmo jogo longo.
- detalhe: 4900 de custo, +25% de redução de recarga, +450 de vida e mana, +6 de regeneração de mana. Comprado em 20 das 53 partidas pro (mediana 34,0 min).
- fonte: dota-tier1/data/derivados/compras.parquet (hero=enigma, posicao=3, n=20); items.json; constants_abilities.json (recarga do Black Hole)

### Situacionais

#### Chasm Stone (chasm_stone)
- minuto: 32.1
- contra: lutas em grupo grande, onde um Black Hole ou Midnight Pulse maior pega mais gente de uma vez.
- detalhe: 800 de custo, +40 de área de efeito somada a qualquer habilidade sua que tenha raio (items.json). O Black Hole tem raio 420 e o Midnight Pulse tem raio 600 (constants_abilities.json); o item não empilha com outro igual ou com upgrade dele.
- fonte: dota-tier1/data/derivados/compras.parquet (hero=enigma, posicao=3, n=23); items.json; constants_abilities.json

#### Ring of Tarrasque (ring_of_tarrasque)
- contra: lane ou pré-luta com harass físico constante, tipo poke de auto-ataque ou nuke repetido que te mantém sangrando antes do combo sair.
- detalhe: 1700 de custo, +12 de regeneração de vida, sem bônus de mana.
- fonte: dota-tier1/data/derivados/compras.parquet (hero=enigma, posicao=3, n=23); items.json

## Pos 2 (mid)

- quando pegar: é raro, 6 das 53 partidas pro do dataset local (11,3%) e 33,3% de vitória (2V-4D); tratar como opção de nicho, não como rota consolidada do herói nesse patch. A build é basicamente a mesma da pos 3, só muda o farm de lane.
- itens iniciais: tango, ward_observer, ring_of_regen

### Build

Mesmos itens-core da Pos 3, em timing um pouco mais adiantado pelo farm de mid: Boots of Speed (mediana 5,8 min) evoluindo pra Tranquil Boots em parte dos jogos (mediana 8,8 min, n=4), Drum of Endurance (mediana 7,2 min, n=5), Blink Dagger (mediana 16,1 min, n=6), Aghanim's Shard (mediana 16,5 min, n=5) e Black King Bar (mediana 26,8 min, n=4). Ver os blocos da Pos 3 pro "porque" e "detalhe" de cada um, que não muda com a posição.

- fonte: dota-tier1/data/derivados/compras.parquet (hero=enigma, posicao=2)

### Situacionais

Mesmos itens situacionais da Pos 3 (Chasm Stone, Ring of Tarrasque); a amostra de 6 partidas é pequena demais pra separar um padrão próprio de compra situacional na mid.

## Roshan

Enigma não está entre os 22 heróis cobertos pelo dataset de Roshan solo do projeto (resumo_por_heroi.json), então não há número de solo pra ele. Cruzando o draft.csv com os abates de Roshan do Atlas tier1 (objetivos.parquet): nas 53 partidas pro em que ele foi picado houve 124 mortes de Roshan no total somando os dois lados, das quais 59 foram do time do Enigma; e quem ficou com o abate foi o próprio Enigma em apenas 1 dessas 59 (por volta dos 46 min, zona roshan_bot). O resto foi pra quem já estava no grupo quando o Rosh caiu, com necrolyte e sven na frente (6 abates cada), seguidos por nevermore, beastmaster, drow_ranger, storm_spirit, lina, clinkz e luna, entre outros. Na prática ele participa da luta de Roshan como disable, mas quase nunca é quem fecha ou leva o item.
