---
id: ficha-tusk
titulo: "Tusk"
heroi: Tusk
patch: 7.41
posicoes: [4, 5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_patch.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/partidas.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/100/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=100
---

## Resumo

Tusk é um iniciador str de kit curto: Snowball busca o alvo rolando com aliados dentro, Tag Team soma dano físico em quem o time ataca por 6s e Walrus Kick chuta o alvo 1200 de distância, travando a vítima pro resto do combo. No 7.41 ele é hero quase só de suporte: na base local de pro play (133 picks, mar a out/2026) saiu 79 vezes como pos 4 (43,0% de vitórias) e 54 como pos 5 (48,1%), nenhuma vez em pos 1, 2 ou 3 (draft.csv). É hero de farm baixo mesmo pra padrão de suporte: mediana de 352 de ouro/min e 1,6 last hit/min no OpenDota (todas as posições, todo o histórico), ou seja, ele paga a conta com iniciação e controle, não com dano sustentado.

## Pos 4 (suporte de roaming)

- quando pegar: é a posição mais comum do herói na base local, 59% dos picks (79 de 133) contra 41% em pos 5; compra Observer Ward, Sentry Ward e Observer and Sentry Wards em 100% dessas partidas, ou seja, sai pra roamar e plantar visão cedo, não pra ficar na lane. Fonte: draft.csv + compras.parquet.
- itens iniciais: tango, branches, ward_observer, ward_sentry, ward_dispenser, blood_grenade, boots

### Build

#### Blink Dagger (blink)
- minuto: 19:36
- porque: fecha a distância que o kit curto não cobre: Walrus Kick alcança só 250 e Walrus Punch 150.
- detalhe: sem blink o Tusk precisa correr até o alvo antes de travar qualquer parte do combo, o que dá tempo do inimigo reagir. É o primeiro item grande em quase todo jogo na posição: 76 das 79 partidas (96,2%) compraram, mediana aos 19,6 min.
- combo: blink pro meio do grupo aliado, rola a Snowball puxando os companheiros a até 325 de raio antes de lançar no inimigo-alvo (cada aliado dentro soma dano e duração de stun), ou blinka direto no alvo e ativa Tag Team pra já começar a punir o próximo ataque.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json (abilitycastrange de tusk_walrus_kick e tusk_walrus_punch); C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (96,2% em 79 jogos, mediana 19,6 min)

#### Magic Wand (magic_wand)
- minuto: 9:48
- porque: carrega HP e mana de graça a cada feitiço inimigo visível por perto, sustenta o roam sem voltar pra base.
- detalhe: ganha carga sempre que um inimigo visível a até 1200 de distância usa uma habilidade, então rende mais justamente na lane em que o Tusk está roamando e trocando perto de feitiços. Comprado em 54 de 79 jogos (68,4%).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; compras.parquet (68,4%, mediana 9,8 min)

#### Wind Lace (wind_lace)
- minuto: 6:36
- porque: velocidade de movimento barata pra alcançar o alvo antes de qualquer trava do combo acabar.
- detalhe: Tag Team só dura 6s e o slow de Snowball é breve, então chegar mais rápido no próximo alvo aproveita a janela. Comprado em 53 de 79 jogos (67,1%).
- fonte: items.json; compras.parquet (67,1%, mediana 6,6 min)

#### Phase Boots (phase_boots)
- minuto: 21:06
- porque: atravessa unidades e dá bônus de velocidade maior (melee), ajudando a furar a frente de creeps pra chegar no herói certo.
- detalhe: é o upgrade de bota preferido na posição (49,4% contra 34,2% do Tranquil Boots), porque o Tusk precisa iniciar atravessando a linha de frente, não só sobreviver na lane.
- fonte: items.json; compras.parquet (49,4% vs tranquil_boots 34,2%, mediana phase 21,1 min)

### Situacionais

#### Black King Bar (black_king_bar)
- minuto: 39:06
- porque: dispel básico mais 9s de imunidade mágica pra sobreviver ao burst que travaria a iniciação.
- detalhe: sem o BKB, um silence, stun mágico ou nuke grande no Tusk cancela o combo antes dele começar.
- contra: times com disable mágico duro ou burst de magia que conseguem abater o Tusk antes dele fechar o combo.
- fonte: items.json (texto da habilidade Avatar); compras.parquet (27,8% em 79 jogos, mediana 39,1 min)

#### Eul's Scepter of Divinity (cyclone)
- minuto: 30:42
- porque: tira um alvo da luta por 2,5s pra isolar quem o time precisa focar, ou pra se livrar de burst em cima do próprio Tusk.
- detalhe: o alvo fica invulnerável durante o ciclone e leva 50 de dano mágico ao cair; usado em Tusk mais pra separar o inimigo do grupo antes do combo do que pra proteção própria.
- contra: alvos que precisam ser isolados do resto do time antes de o grupo conseguir focar neles.
- fonte: items.json; compras.parquet (25,3%, mediana 30,7 min)

#### Aghanim's Shard (aghanims_shard)
- minuto: 27:54
- porque: upgrade barato (1400 de ouro) pra continuar escalando o kit no meio de jogo sem gastar o slot do Scepter.
- detalhe: comprado em 16,5% dos jogos da posição, mediana aos 27,9 min. As constantes locais não trazem o texto do efeito específico do Shard no kit do Tusk nesta base, então o efeito mecânico exato fica fora desta ficha por falta de fonte verificada.
- fonte: items.json (custo); compras.parquet (16,5%, mediana 27,9 min)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 42:18
- porque: item de late game pra continuar escalando quando a partida passa dos 40 minutos.
- detalhe: comprado em 19,0% dos jogos da posição, mediana aos 42,3 min. Mesma ressalva do Shard: sem fonte local verificada pro efeito exato no Tusk.
- fonte: items.json (custo); compras.parquet (19,0%, mediana 42,3 min)

## Pos 5 (suporte duro)

- quando pegar: 41% dos picks da base local (54 de 133), com 48,1% de vitórias; compra Observer Ward em 100% e Sentry Ward em 98,1% das partidas, perfil de suporte de visão e presença constante, menos focado em roam agressivo que o pos 4. Fonte: draft.csv + compras.parquet.
- itens iniciais: tango, branches, ward_observer, ward_sentry, ward_dispenser, blood_grenade, boots

### Build

#### Blink Dagger (blink)
- minuto: 21:00
- porque: mesma lógica do pos 4, fecha a distância curta do kit pra iniciar o combo.
- detalhe: ainda mais essencial aqui que no pos 4: 51 de 52 jogos (98,1%) compraram, mediana aos 21,0 min.
- combo: blink no meio do grupo pra rolar a Snowball puxando aliados, ou blink direto no suporte/mid inimigo pra isolar e travar com Walrus Kick antes do resto do time inimigo reagir.
- fonte: compras.parquet (98,1% em 52 jogos, mediana 21,0 min)

#### Tranquil Boots (tranquil_boots)
- minuto: 11:18
- porque: regeneração alta sem gastar ouro em Magic Wand/Clarity, mantendo o Tusk firme na lane de suporte duro.
- detalhe: aqui o Tranquil é a bota preferida (46,2% contra 13,5% do Phase Boots), o inverso do pos 4, porque o pos 5 fica mais tempo perto da própria lane sustentando em vez de roamar atravessando creeps.
- fonte: items.json; compras.parquet (46,2% vs phase_boots 13,5%, mediana tranquil 11,3 min)

#### Magic Wand (magic_wand)
- minuto: 9:48
- porque: sustenta HP/mana de graça contra a troca de feitiços da lane de suporte duro.
- detalhe: comprado em 43 de 52 jogos (82,7%), bem mais presente que no pos 4 porque o pos 5 fica mais exposto ao harass do trilane.
- fonte: items.json; compras.parquet (82,7%, mediana 9,8 min)

#### Wind Lace (wind_lace)
- minuto: 9:12
- porque: velocidade barata pra conseguir chegar no alvo certo durante a iniciação do time.
- detalhe: comprado em 40 de 52 jogos (76,9%).
- fonte: items.json; compras.parquet (76,9%, mediana 9,2 min)

### Situacionais

#### Force Staff (force_staff)
- minuto: 29:30
- porque: empurra um aliado 600 de distância pra fora de perigo ou empurra um inimigo pra dentro do alcance do time.
- detalhe: é o item de utilidade mais comprado no pos 5 (32,7%, bem mais que no pos 4, só 3,8%), porque o suporte duro é quem segura a sobrevivência dos aliados enquanto o pos 4 inicia.
- contra: dive em cima de um aliado baixo de vida, ou inimigo fugindo que precisa ser puxado pro alcance de Walrus Kick/Snowball.
- fonte: items.json; compras.parquet (32,7% pos5 vs 3,8% pos4, mediana 29,5 min)

#### Black King Bar (black_king_bar)
- minuto: 38:42
- porque: mesma lógica do pos 4, dispel e imunidade mágica pra não ter o combo cancelado por burst.
- contra: times com disable mágico duro ou burst de magia.
- fonte: items.json; compras.parquet (26,9%, mediana 38,7 min)

#### Aghanim's Shard (aghanims_shard)
- minuto: 28:24
- porque: upgrade barato pra continuar escalando sem brigar pelo ouro do Scepter.
- detalhe: comprado em 23,1% dos jogos, mediana aos 28,4 min. Mesma ressalva: sem fonte local verificada pro efeito exato no kit do Tusk.
- fonte: items.json (custo); compras.parquet (23,1%, mediana 28,4 min)

#### Eul's Scepter of Divinity (cyclone)
- minuto: 32:30
- porque: isola um alvo por 2,5s ou tira o próprio Tusk de burst mágico.
- contra: alvos que precisam ser isolados do grupo antes do time focar.
- fonte: items.json; compras.parquet (19,2%, mediana 32,5 min)

## Roshan

Sem dado de Roshan solo.
