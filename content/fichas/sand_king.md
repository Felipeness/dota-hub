---
id: ficha-sand_king
titulo: "Sand King"
heroi: Sand King
patch: 7.41
posicoes: [2, 3]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- https://api.opendota.com/api/heroes/16/itemPopularity
- https://dota2protracker.com/builds/sand-king-pos2-1
- https://dota2protracker.com/builds/sand-king-pos3-1
- https://dota2protracker.com/hero/Sand%20King
- https://dota2protracker.com/patches/7.41d
- https://www.dota2protips.com/heroes/sand_king
---

## Resumo

Sand King é Initiator/Disabler/Support/Nuker/Escape (papéis oficiais do OpenDota, heroes.json) e vive do combo Burrowstrike seguido de Epicenter para abrir luta com stun e dano em área de uma vez. No 7.41 ele é jogado principalmente na mid, pos 2: no dataset de replays pro do Atlas tier1 ele aparece 49 vezes como pos 2 contra 9 como pos 3 offlane e 1 como pos 1 (draft.csv), e o dota2protracker confirma a mesma proporção, 71 partidas pro na build pos 2 contra 16 na pos 3. A build quase não muda entre as duas posições: o objetivo nas duas é o mesmo, chegar rápido no Blink Dagger e no Aghanim's Scepter para abrir teamfight.

## Pos 2 (mid)

- quando pegar: para abrir luta rápido com o combo Blink + Burrowstrike + Epicenter contra times que ficam agrupados e não têm muito disable de longo alcance para te travar antes do channel. Build pro com 48% de vitória em 71 partidas e 38 pros no patch 7.41d (dota2protracker).
- itens iniciais: tango, branches, circlet, bottle

### Build

#### Bottle (bottle)
- porque: sustenta mana para trocar Burrowstrike na lane e ainda guarda carga para correr runa.
- detalhe: bottle padrão, 4 cargas de cura/mana que recarregam na fonte. Burrowstrike custa de 100 a 130 de mana por nível (constants_abilities.json), então o bottle resolve o sustain sem puxar XP da wave.
- fonte: dota2protracker build pos2 (Sand King); constants_abilities.json (custo de mana do Burrowstrike)

#### Magic Wand (magic_wand)
- porque: estoca carga de qualquer feitiço trocado na lane e dá stat geral barato.
- detalhe: 460 de custo, 20 cargas de +15 de HP/mana cada, +3 em todos os atributos enquanto tem carga guardada.
- fonte: dota2protracker build pos2; items.json

#### Phase Boots (phase_boots)
- porque: fecha a distância para o Burrowstrike grudar no corpo a corpo e dá armadura para sobreviver a troca.
- detalhe: 1450 de custo, +50 de velocidade, +20% extra de velocidade durante o Phase (3s), +18 de dano corpo a corpo, +4 de armadura.
- fonte: dota2protracker build pos2; items.json

#### Blink Dagger (blink)
- minuto: 11
- porque: fecha o combo. Blinca atrás do alvo para ele não conseguir fugir do Burrowstrike nem te interromper no channel do Epicenter.
- detalhe: 2250 de custo, alcance de blink 1200 (cai para 960 se você tomou dano nos últimos 3s).
- combo: Blink atrás do alvo, depois Burrowstrike através dele, depois Epicenter protegido. É o combo padrão citado em guias e builds pro do herói.
- fonte: dota2protracker build pos2 (minuto 11, 48% de vitória); items.json

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 20
- porque: o Scepter faz o Epicenter criar ataques de Stinger em pontos aleatórios quando os pulsos começam, multiplicando o dano da ulti sem gastar mana extra.
- detalhe: 4200 de custo, +10 em todos os atributos, +175 de vida e mana. O upgrade faz o Epicenter criar 3 áreas de ataque de Stinger a cada 0,5s, em pontos aleatórios, quando os pulsos começam; cada área tem 35% do raio atual do Epicenter e aplica 40% do dano do Stinger. Em amostra pro do 7.41d apareceu em cerca de 92% dos inventários com 48% de vitória.
- fonte: dota2protracker (build pos2 core; amostra pro 7.41d); items.json (custo); dota2protips.com (mecânica detalhada do upgrade de Epicenter)

### Situacionais

#### Veil of Discord (veil_of_discord)
- contra: lineup em que você precisa amplificar o dano mágico do time inteiro em cima do que o Epicenter e o Stinger acertam.
- detalhe: 1700 de custo, +10 de inteligência, +175 de vida, aura de +10% de dano mágico recebido em quem é atingido por feitiço num raio de 900.
- fonte: dota2protracker build pos2 (situacional); items.json

#### Shiva's Guard (shivas_guard)
- minuto: 33
- contra: carries de dano físico de auto-ataque rápido que furam você depois que o combo já foi gasto. A aura corta 45% da velocidade de ataque deles.
- detalhe: 4500 de custo, +17 de armadura, Arctic Blast (260 de dano e slow de movimento em área). Pick rate de 24% e 35% de vitória na build pro pos2.
- fonte: dota2protracker build pos2 (situacional, minuto 33, 24% pick, 35% WR); items.json

#### Aghanim's Shard (aghanims_shard)
- contra: jogo em que você precisa manter pressão de área perto de você sem depender de canalizar o Epicenter de novo.
- detalhe: 1400 de custo. Dá um pulso de Epicenter pequeno e passivo ao redor do Sand King a cada 3s, mesmo fora do cast da ulti (shard_interval, constants_abilities.json). Em amostra pro apareceu em cerca de 42% dos jogos com 53% de vitória, mais raro que o Scepter.
- fonte: dota2protracker (patches/7.41d, pick rate de Shard); constants_abilities.json (shard_interval do Epicenter); dota2protips.com (efeito passivo do Shard)

#### Bloodstone (bloodstone)
- contra: jogo que estica e você precisa continuar abrindo luta várias vezes sem voltar para a base.
- detalhe: 4700 de custo, +650 de vida, +450 de mana, 20% de lifesteal de feitiço (60% por alguns segundos ao ativar).
- fonte: dota2protracker build pos2 (situacional); items.json

#### Refresher Orb (refresher)
- combo: reseta o Blink Dagger e o Epicenter para abrir uma segunda rodada de teamfight na mesma luta.
- detalhe: 5000 de custo, recarga de 180s para resetar cooldowns e cargas de item.
- fonte: dota2protracker build pos2 (situacional); items.json

## Pos 3 (offlane)

- quando pegar: mesma lógica de iniciação da mid, saindo da offlane/trio-lane para farmar Blink e Scepter em paralelo, normalmente quando o time já tem outro herói de mid e precisa de um segundo disable rodando. Amostra pro pequena, 16 partidas e 12 pros, 31% de vitória no 7.41d (dota2protracker); tratar com cautela pelo tamanho da amostra.
- itens iniciais: quelling_blade, branches, branches, circlet, tango, faerie_fire

### Build

#### Bracer (bracer)
- porque: statstick barato que segura a lane sem atrasar o caminho até o Blink Dagger.
- detalhe: 505 de custo, +5 de força, +2 de agilidade, +2 de inteligência, +50 de vida, +0,75 de regeneração.
- fonte: dota2protracker build pos3 (core); items.json

#### Null Talisman (null_talisman)
- porque: dá mana para spamar Burrowstrike na lane sem secar.
- detalhe: 505 de custo, +5 de inteligência, +2 de força, +2 de agilidade, +3% de mana máxima, +1 de regeneração de mana.
- fonte: dota2protracker build pos3 (core); items.json

#### Magic Wand (magic_wand)
- porque: mesmo papel da mid, estoca carga de qualquer feitiço trocado na lane.
- detalhe: ver detalhe no bloco de Magic Wand da Pos 2.
- fonte: dota2protracker build pos3 (core)

#### Phase Boots (phase_boots)
- porque: mesmo papel da mid, fecha a distância para o Burrowstrike corpo a corpo.
- detalhe: ver detalhe no bloco de Phase Boots da Pos 2.
- fonte: dota2protracker build pos3 (core)

#### Blink Dagger (blink)
- porque: mesmo combo da mid (Blink atrás do alvo, Burrowstrike, Epicenter), só que sem o farm extra que a mid tem.
- detalhe: ver detalhe no bloco de Blink Dagger da Pos 2.
- combo: Blink atrás do alvo, depois Burrowstrike através dele, depois Epicenter protegido.
- fonte: dota2protracker build pos3 (core)

### Situacionais

#### Shiva's Guard (shivas_guard)
- contra: time inimigo com dano físico de auto-ataque alto.
- detalhe: ver detalhe no bloco de Shiva's Guard da Pos 2.
- fonte: dota2protracker build pos3 (situacional)

#### Force Staff (force_staff)
- contra: disable de alvo único que te pega parado no channel do Epicenter. Te empurra para fora do alcance ou te tira de uma burst.
- detalhe: 2200 de custo, +10 de inteligência, +175 de vida, empurra 600 de distância em 0,5s e não interrompe a ação do alvo.
- fonte: dota2protracker build pos3 (situacional); items.json

#### Boots of Travel (travel_boots)
- contra: jogo que estica e você precisa defender torre ou rotear rápido para o Epicenter chegar em outra lane a tempo.
- detalhe: 2500 de custo, +90 de velocidade de movimento, teleporte com alcance de 800 e recarga de scroll de 40s.
- fonte: dota2protracker build pos3 (situacional); items.json

#### Abyssal Blade (abyssal_blade)
- contra: alvo que te persegue ou foge do seu combo. O bash trava quem está tentando te furar ou escapar.
- detalhe: 6250 de custo, +35 de dano, +26 de força, 25% de chance de bash corpo a corpo com stun de 1,2s.
- fonte: dota2protracker build pos3 (situacional); items.json

## Roshan

Sand King quase não aparece matando Roshan nos replays pro. No dataset local de Roshan solo (solos.json), ele é o herói que finaliza o Roshan em só 3 ocasiões em toda a base de replays, nenhuma classificada como solo (1 kill de time e 2 de finalização dentro de um kill de time), e ele não está entre os 22 heróis cobertos pelo resumo de solo do projeto (resumo_por_heroi.json). Na prática, quando participa de um Roshan é com o time, não é um herói que costuma solar.
