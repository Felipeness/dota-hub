---
id: ficha-puck
titulo: "Puck"
heroi: Puck
patch: 7.41
posicoes: [2]
fontes:
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/heroes.json
- dota-tier1/data/draft.csv
- dota-tier1/data/jogadores_partida.csv
- dota-tier1/data/derivados/compras.parquet
- dota-tier1/data/derivados/objetivos.parquet
- dota-roshan-solo/data/resumo_por_heroi.json
- https://api.opendota.com/api/heroes/13/itemPopularity
- https://dotacoach.gg/en/heroes/puck
- https://liquipedia.net/dota2/True_Strike
---

## Resumo

Puck é escape e disable de mid lane: ganha espaço com Illusory Orb, define a troca com Waning Rift (silence em área) e sai de qualquer combo com Phase Shift, que também disjunta ataques e feitiços de alvo. No 7.41 ele é jogado quase só de pos 2: 155 dos 160 picks levantados nas partidas Tier 1 locais foram mid (96,9%), e a base pública do dotacoach bate nisso com 93,9% de seleção como mid lane e 47,2% de vitória nessa posição. As outras posições (1, 3, 4 e 5) somam no máximo 4 partidas cada no recorte Tier 1 e não têm volume pra build própria.

## Pos 2 (mid)

- quando pegar: pos 2 é a posição real do herói. 96,9% dos picks de Puck no Tier 1 local (155 de 160) foram mid, com 45,2% de vitória nessa rota (70 de 155); o dotacoach mede 93,9% de seleção como mid e 47,2% de vitória. Pos 1, 3, 4 e 5 ficam abaixo de 3% dos picks e sem amostra pra ter build própria.
- itens iniciais: branches, tango, faerie_fire, ward_observer

### Build

#### Power Treads (power_treads)
- minuto: 8:14
- porque: dá velocidade de ataque e deixa trocar pro atributo certo: Inteligência pra sustentar o combo, Força se alguém te inicia.
- detalhe: monta com Band of Elvenskin + Gloves of Haste + Boots of Speed (1.400 no total) e dá +10 no atributo selecionado, +25 de velocidade de ataque e +45 de movimento (Puck é ranged; o bônus de 55 é só pra herói melee). Puck fica em Inteligência pra bancar os 90 a 120 de mana do Illusory Orb e os 100 a 130 do Waning Rift, e troca pra Força na hora de levar iniciação, pra não cair líquido de vida no stun.
- fonte: dota-tier1/compras.parquet (mediana de 159 partidas, patch 7.41); dota-imortal/items.json (power_treads)

#### Witch Blade (witch_blade)
- minuto: 13:57
- porque: transforma o próximo ataque em veneno mágico que nunca erra, limpa camp e sangra quem tenta fugir.
- detalhe: monta com Oblivion Staff + Chainmail + Orb of Venom (2.775 no total). O ataque com True Strike aplica 0,75x a Inteligência de Puck em dano mágico por 4s, soma +40 de velocidade de ataque, +12 de Inteligência, +5 de armadura e +300 de velocidade do projétil.
- contra: evasão de feitiço (Windrun da Windranger, Blur da Phantom Assassin): True Strike garante o acerto contra esses efeitos. Evasão de item como a do Butterfly é exceção confirmada e não é negada por True Strike.
- combo: Illusory Orb ou Waning Rift pra travar a posição do alvo, Witch Blade pra sangrar enquanto o slow de 25% do veneno mantém o alcance.
- fonte: dota-imortal/items.json (witch_blade, componentes, True Strike); liquipedia.net/dota2/True_Strike (exceção do Butterfly); dota-tier1/compras.parquet (100% das 159 partidas, mediana)

#### Blink Dagger (blink)
- minuto: 17:50
- porque: fecha a distância pra travar alguém com Dream Coil ou Waning Rift sem gastar o Illusory Orb.
- detalhe: custa 2.250, teleporta até 1200 de distância e trava por 3s depois de levar dano de herói ou Roshan. É o item que vira Puck de poke de longe em iniciador, levando ele pro alcance de 750 do Dream Coil ou 350 do Waning Rift.
- combo: Blink seguido de Dream Coil prende o alvo mais perto; se ele estourar a coleira tentando fugir, leva o dano de quebra e o stun. Blink também serve pra reposicionar no meio da luta, com o Phase Shift cobrindo a recarga.
- fonte: dota-imortal/items.json (blink); dota-imortal/constants_abilities.json (puck_dream_coil, puck_waning_rift, alcances); dota-tier1/compras.parquet (97,5% das 159 partidas, mediana)

#### Aghanim's Shard (aghanims_shard)
- minuto: 21:24
- porque: cada Phase Shift passa a ser também um ataque em área grátis em quem está colado em você.
- detalhe: custa 1.400. O efeito confirmado no patch 7.41f é "Puck's attacks deal bonus magic damage. Puck attacks all enemies within its attack range every time it phase shifts": todo inimigo no alcance de ataque leva um acerto com dano mágico bônus sempre que Puck usa Phase Shift.
- combo: usar Phase Shift pra escapar de um gank em grupo já devolve dano pra quem colou em você, sem gastar outro feitiço; o dotacoach lista justamente Parasma como item de dano que rende mais a cada Phase Shift por causa desse ataque extra.
- fonte: dotacoach.gg/en/heroes/puck (texto do Shard, patch 7.41f, e nota de estratégia sobre Parasma); dota-imortal/items.json (aghanims_shard, custo); dota-tier1/compras.parquet (91,8% das 159 partidas, mediana)

#### Parasma (devastator)
- minuto: 28:52
- porque: upgrade da Witch Blade que também baixa a resistência mágica de quem você acerta, pro resto do time bater mais forte em cima.
- detalhe: monta com Witch Blade + Mystic Staff (5.975 no total). Mantém o ataque true strike envenenado, soma Magic Corruption (-20% de resistência mágica por 4s a cada acerto) e passa a furar Black King Bar.
- combo: tagueia o alvo pro nuke mágico do time estourar em cima da resistência reduzida; como fura BKB, continua valendo contra quem já ligou o item.
- fonte: dota-imortal/items.json (devastator, componentes, bkbpierce); dota-tier1/compras.parquet (83,0% das 159 partidas, mediana)

#### Octarine Core (octarine_core)
- minuto: 35:44
- porque: corta 25% da recarga de Illusory Orb, Waning Rift e Dream Coil pra repetir o combo sem esperar.
- detalhe: custa 4.900 e soma +450 de vida, +450 de mana e +6 de regeneração de mana por cima da redução de recarga, o que também segura o combo de mana mais vezes numa luta longa.
- fonte: dota-imortal/items.json (octarine_core); dota-tier1/compras.parquet (56,0% das 159 partidas, mediana)

### Situacionais

#### Linken's Sphere (sphere)
- porque: bloqueia a primeira habilidade de alvo único que viria pra travar seu blink ou seu combo.
- detalhe: custa 4.800, o Spellblock recarrega em 14s e bloqueia a maioria dos feitiços direcionados (não bloqueia os de item neutro).
- contra: iniciação de alvo único (hex, stun ou silence direcionados): a primeira tentativa é anulada pelo Spellblock antes de você precisar do Phase Shift ou do Blink.
- fonte: dota-imortal/items.json (sphere); dota-tier1/compras.parquet (19,5% das 159 partidas, situacional)

#### Black King Bar (black_king_bar)
- porque: dá imunidade a feitiço por 9s pra aguentar o lockdown do time inimigo e ainda ter o Dream Coil e o Phase Shift disponíveis.
- detalhe: custa 4.050, aplica dispel básico ao ligar e dá 60% de resistência mágica durante a janela de 9s.
- contra: times com disable em sequência (silence, hex, stun somados): como a maioria vira sem efeito sob o Avatar, você mantém acesso aos próprios feitiços pra lutar ou fugir.
- fonte: dota-imortal/items.json (black_king_bar); dota-tier1/compras.parquet (18,9% das 159 partidas, situacional)

#### Aeon Disk (aeon_disk)
- porque: dá um dispel forte e zera o dano quando sua vida cai de 70%, o que cobre o combo de burst que te mataria de um golpe.
- detalhe: custa 3.000 e monta com Vitality Booster + Energy Booster. O gatilho só dispara em dano de jogador e a recarga aumenta a cada vez que ativa.
- contra: combos de burst de iniciação (nuke seguido de físico) que tentam te matar antes do Phase Shift sair do cast de 0,01s: o Combo Breaker ativa sozinho e dá 2,5s de dano zerado pra decidir Blink ou Phase Shift.
- fonte: dota-imortal/items.json (aeon_disk)

#### Overwhelming Blink (overwhelming_blink)
- porque: o upgrade do Blink também estoura dano e lentidão em área no pouso, então a iniciação já machuca quem está colado no alvo.
- detalhe: custa 6.800 (Blink + Reaver + receita), mantém a trava de 3s por dano recebido e soma +25 de Força.
- contra: alvos com fuga própria depois do blink inicial (dash, blink ou flash de mobilidade): o dano em área (100 + 50% da Força, mais 100% ao longo do tempo) e a lentidão de 50% de movimento e ataque por 6s dificultam a saída de quem estava perto do pouso.
- fonte: dota-imortal/items.json (overwhelming_blink); dota-tier1/compras.parquet (25,2% das 159 partidas, situacional)

## Roshan

Puck não é hero de solo em Roshan: não está entre os 22 carries do dataset local de Roshan solo (nenhum registro de minuto, nível ou itens de solo pra ele), e sem Parasma o teto de dano por ataque é baixo pra furar o bicho sozinho. Nas partidas Tier 1 mapeadas com dados de compra (159), Puck deu o golpe final em Roshan em 16 delas (10,1%, 21 golpes finais no total porque o Rosh pode renascer de novo na mesma partida), sempre em grupo. O papel real dele no objetivo é travar quem tenta contestar ou fugir da área com Dream Coil, abrindo e mantendo a luta pro time, não bater sozinho no Roshan.
