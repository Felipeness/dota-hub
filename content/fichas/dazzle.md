---
id: ficha-dazzle
titulo: "Dazzle"
heroi: Dazzle
patch: 7.41
posicoes: [5]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-tier1/data/jogadores_partida.csv
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- dota-roshan-solo/data/solos.json
- https://api.opendota.com/api/heroes/50/itemPopularity
- https://www.dota2.com/datafeed/herodata?language=english&hero_id=50
- https://dota2protracker.com/builds/dazzle-pos5-1 (lido via busca, página bloqueada no fetch direto)
---

## Resumo
Dazzle é suporte puro de cura e de negar morte, não de dano. No Atlas tier 1 (pro 2026) ele aparece em 34 partidas e em 100% delas na posição 5 pela leitura de replay (`posicao_replay`, a coluna mais confiável do dataset), com 58,8% de vitória (20 a 14); a heurística do OpenDota (`posicao`) rotula 2 dessas 34 partidas como pos 4, mas o replay não confirma pick real de pos 4 (`dota-tier1/data/draft.csv`). A mediana do pro nessas partidas é 14.075 de cura em herói contra só 6.811 de dano em herói e 134 de dano em torre, com 8 observers e 17 sentries colocados: é um suporte que cura e dá visão, não que empurra lane (`jogadores_partida.csv`). O kit gira em torno de impedir mortes: Shallow Grave torna um aliado impossível de matar por alguns segundos e amplifica a cura que ele recebe nesse intervalo, Shadow Wave cura em arco e sempre cura o próprio Dazzle, e a passiva inata Weave empilha armadura nos aliados e reduz a dos inimigos toda vez que uma das habilidades acerta alguém (`constants_abilities.json`, `constants_hero_abilities.json`).

## Pos 5 (suporte duro)
- quando pegar: pega quando o time precisa negar uma morte específica em vez de só curar aos poucos. Shallow Grave deixa o aliado protegido impossível de morrer por 4 a 5,5s dependendo do nível e ainda amplifica a cura que ele recebe nesse tempo (`constants_abilities.json`, dazzle_shallow_grave). No Atlas tier 1 ele aparece em pos 5 em 34 de 34 picks pela leitura de replay (em 2 desses jogos a heurística do OpenDota rotula como pos 4, mas o replay não confirma), então não há uso real de pos 4 documentado pra esse patch (`dota-tier1/data/draft.csv`).
- itens iniciais: branches, tango, ward_dispenser, sobi_mask, faerie_fire

### Build
#### Magic Wand (magic_wand)
- porque: carga instantânea de HP e mana contra o harass de lane, sem gastar tempo de canal.
- detalhe: Energy Charge acumula até 20 cargas, ganhando uma toda vez que um inimigo visível em 1200 de raio usa uma habilidade, e devolve 15 de HP e mana por carga (`items.json`, magic_wand).
- fonte: items.json (magic_wand); dota2protracker.com (build pos5, Magic Wand em 100% dos jogos, lido via busca)

#### Arcane Boots (arcane_boots)
- minuto: fase inicial de jogo (bucket "early_game" do OpenDota pra esse herói, que sobe forte no bucket "mid_game" seguinte)
- porque: devolve mana pro time inteiro pra Dazzle poder espamar Shadow Wave na lane sem secar.
- detalhe: Replenish restaura 150 de mana em raio de 1200 e a aura dá regen contínua de mana (`items.json`, arcane_boots). Shadow Wave custa só 90 de mana fixo mas tem cooldown de 7 a 10s, então o gasto de mana da lane é recorrente, e Arcane financia isso pro time todo.
- fonte: items.json (arcane_boots); OpenDota itemPopularity hero_id 50 (item id 180 com 15 ocorrências no bucket early_game e 46 no mid_game); dota2protracker.com (build pos5, Arcane Boots em 67% dos jogos, lido via busca)

#### Holy Locket (holy_locket)
- minuto: item de maior volume de compra no meio de jogo pra esse herói no OpenDota (item id 269 com 62 ocorrências no bucket mid_game, o maior da lista)
- porque: amplifica em 15% toda cura que Dazzle já aplica, multiplicando de graça o valor de Shadow Wave e Shallow Grave.
- detalhe: Holy Blessing é passiva e amplifica 15% qualquer cura que o portador dá; a ativa soma mais 10% de amplificação de cura recebida por 4s no alvo e ainda devolve HP e mana por carga, empilhando até 25 cargas (`items.json`, holy_locket). Como a cura de Dazzle já é a maior fonte de sustain dele (mediana de 14.075 de cura em herói no Atlas tier 1, `jogadores_partida.csv`), Locket é o item que mais alavanca o que ele já faz.
- combo: usar a ativa do Locket no mesmo aliado que vai receber Shadow Wave empilha duas amplificações de cura na mesma troca, maximizando o HP que volta no momento certo.
- fonte: items.json (holy_locket); OpenDota itemPopularity hero_id 50 (item id 269); dota2protracker.com (build pos5, Holy Locket em 77% dos jogos, lido via busca)

#### Blink Dagger (blink)
- minuto: item majoritariamente tardio pra esse herói no OpenDota (item id 1 com 33 ocorrências no bucket late_game contra só 9 no mid_game)
- porque: dá o posicionamento que Dazzle não tem de kit pra colocar Shallow Grave no aliado certo antes dele morrer.
- detalhe: teleporta 1200 de distância instantaneamente, mas trava por 3s depois de levar dano de herói ou Roshan inimigo (`items.json`, blink). Nenhuma das quatro habilidades de Dazzle dá dash, salto ou qualquer mobilidade própria, então o Blink é o jeito dele chegar a tempo do outro lado de uma luta.
- combo: Blink seguido de Shallow Grave no aliado que está prestes a morrer é o combo de salvamento clássico, porque o alcance de 900 da Grave soma com o blink de 1200 e cobre praticamente qualquer distância dentro de uma teamfight (`constants_abilities.json`, dazzle_shallow_grave).
- fonte: items.json (blink); constants_abilities.json (dazzle_shallow_grave); dota2protracker.com (build pos5, Blink Dagger em 50% dos jogos, lido via busca)

### Situacionais
#### Pavise (pavise)
- porque: versão barata de barreira física, pode ser usada em si mesmo também.
- detalhe: Protect dá 250 de barreira física por 7s em qualquer aliado (`items.json`, pavise). Compartilha cooldown com Solar Crest, então comprar os dois não dobra o efeito, é um upgrade de custo e não um item adicional.
- contra: poke físico de lane antes do time ter ouro pro Solar Crest completo.
- fonte: items.json (pavise); OpenDota itemPopularity hero_id 50 (item id 1128 com 6 ocorrências no bucket mid_game)

#### Mekansm (mekansm)
- porque: cura em área pra teamfight de atrito em vez de save individual.
- detalhe: Restore cura 250 em raio de 1200 e a aura dá 2,5 de regen contínua pro time (`items.json`, mekansm).
- contra: times de poke e dano em área (Lina, Zeus, Disruptor), onde ninguém está perto de morrer de uma vez, só sangrando devagar, e cura em área rende mais do que gastar Shallow Grave num único alvo.
- fonte: items.json (mekansm); OpenDota itemPopularity hero_id 50 (item id 79 com 14 ocorrências no bucket mid_game)

#### Solar Crest (solar_crest)
- porque: 350 de barreira física, mais attack speed e armadura, pro carry entrar na troca com mais segurança.
- detalhe: Shine dá 5 de armadura, 60 de attack speed, 15% de movimento e 350 de barreira física por 7s num aliado, sem os bônus de atributo se usado em si mesmo. Compartilha cooldown com Pavise (`items.json`, solar_crest).
- contra: trocas contra carries físicos já com BKB, onde a barreira segura o primeiro round de dano enquanto o time foca de volta.
- fonte: items.json (solar_crest); OpenDota itemPopularity hero_id 50 (item id 229, 4 ocorrências no mid_game e 13 no late_game)

#### Glimmer Cape (glimmer_cape)
- porque: invisibilidade e barreira mágica tiram Dazzle ou o aliado salvo do foco de um burst mágico.
- detalhe: depois de 0,5s de atraso, dá invisibilidade, 20 de movimento e uma barreira mágica de até 375 de dano por 5s, e pode ser lançado durante uma canalização (`items.json`, glimmer_cape).
- contra: nukers mágicos de burst em alvo único (Lina, Zeus, Lion), cujo combo depende de conseguir ver e acertar o alvo primeiro.
- fonte: items.json (glimmer_cape); OpenDota itemPopularity hero_id 50 (item id 254, 11 ocorrências no mid_game e 10 no late_game)

#### Force Staff (force_staff)
- porque: empurra 600 de distância um aliado fora de alcance de disable, ou tira o próprio Dazzle de perigo.
- detalhe: Force não interrompe a ação do alvo e empurra na direção que ele já está olhando, com 850 de alcance quando usado em inimigo pra puxar alguém pra fora de posição (`items.json`, force_staff).
- contra: ganchos e disables de curto alcance (Pudge, Earthshaker), onde 600 de distância já tira o aliado da zona de perigo antes do combo completar.
- fonte: items.json (force_staff); OpenDota itemPopularity hero_id 50 (item id 102, 5 ocorrências no mid_game e 13 no late_game)

#### Aether Lens (aether_lens)
- porque: +225 de alcance de cast deixa Shadow Wave (800) e Shallow Grave (900) alcançando mais longe sem Dazzle se expor.
- detalhe: também soma 300 de mana e 2,5 de regen de mana (`items.json`, aether_lens). Prioridade quando o time luta espalhado e Dazzle precisa curar ou salvar sem entrar no meio da luta.
- fonte: items.json (aether_lens); OpenDota itemPopularity hero_id 50 (item id 232, 2 ocorrências no mid_game e 11 no late_game)

#### Guardian Greaves (guardian_greaves)
- porque: upgrade de Mekansm que cura mais em área e ainda dispela o próprio Dazzle ao usar.
- detalhe: Mend cura 325 de HP e 200 de mana em raio de 1200 e remove a maioria dos debuffs do portador; a regen do portador sobe pra 14,5 quando ele está abaixo de 25% de vida (`items.json`, guardian_greaves).
- contra: times com dano contínuo em área (DoT, canalização), onde cura em grupo segura melhor do que save individual.
- fonte: items.json (guardian_greaves); OpenDota itemPopularity hero_id 50 (item id 231, 3 ocorrências no mid_game e 9 no late_game)

#### Lotus Orb (lotus_orb)
- porque: devolve pro conjurador um disable ou nuke de alvo único mandado em Dazzle ou num aliado.
- detalhe: Echo Shell recasta a maioria das magias de alvo único de volta em quem lançou, por 5s, com dispel básico (`items.json`, lotus_orb).
- contra: disables de alvo único fortes (Lion, Doom, Silencer), cujo cast fica arriscado de usar contra o time de Dazzle.
- fonte: items.json (lotus_orb); OpenDota itemPopularity hero_id 50 (item id 226, 3 ocorrências no late_game)

#### Aeon Disk (aeon_disk)
- porque: segunda rede de segurança pessoal quando Shallow Grave já está em cooldown.
- detalhe: ao cair abaixo de 70% de vida, aplica dispel forte e zera todo dano por 2,5s, com o cooldown subindo a cada vez que ativa (`items.json`, aeon_disk). Diferente da Shallow Grave, que leva de 18 a 30s de cooldown e só funciona em aliado, esse item protege o próprio Dazzle sem precisar reagir a tempo.
- fonte: items.json (aeon_disk); OpenDota itemPopularity hero_id 50 (item id 256, 7 ocorrências no late_game)

## Roshan
Sem dado de Roshan solo.
