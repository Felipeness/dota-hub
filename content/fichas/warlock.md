---
id: ficha-warlock
titulo: "Warlock"
heroi: Warlock
patch: 7.41
posicoes: [5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-tier1/data/derivados/objetivos.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- https://api.opendota.com/api/heroes/37/itemPopularity
---

## Resumo

Warlock é suporte de amarração e controle de área: Fatal Bonds prende até 6 inimigos visíveis e faz parte do dano levado por um deles ser sentido pelos outros, Shadow Word cura um aliado ou dilacera um inimigo à distância, Upheaval é um canal que cresce de dano e slow enquanto dura, e o ultimate Chaotic Offering convoca um Golem que atordoa na queda e tanka a luta por 60s. No 7.41 ele só aparece como suporte duro: as 33 partidas do recorte Tier1 local em que foi draftado o colocaram 100% na pos 5, com 16V-17D (48,5% de vitória).

## Pos 5 (suporte duro)

- quando pegar: pos 5 é a única posição real do herói nos dados locais. 33 das 33 partidas Tier1 em que foi draftado (100%) o jogaram de suporte duro, 16V-17D (48,5%).
- itens iniciais: tango, flask, enchanted_mango, clarity, ward_observer, ward_sentry

### Build

#### Ring of Basilius (ring_of_basilius)
- minuto: 10:05
- porque: dá regen de mana em área pro time inteiro desde a lane, sustentando o combo de feitiços do time.
- detalhe: custa 425, monta com Sobi Mask. A Basilius Aura dá 1 de regen de mana a aliados num raio de 1200, além dos 0,25 de regen própria.
- fonte: dota-imortal/items.json (ring_of_basilius); dota-tier1/compras.parquet (100% das 33 partidas pos5, mediana do 1º item)

#### Magic Wand (magic_wand)
- minuto: 10:28
- porque: carrega toda vez que um inimigo visível conjura perto e devolve vida e mana de uma vez num aperto.
- detalhe: custa 460, monta com Magic Stick + 2 Branches. Guarda até 20 cargas, cada uma devolvendo 15 de vida e mana instantaneamente, e soma +3 em todos os atributos.
- fonte: dota-imortal/items.json (magic_wand); dota-tier1/compras.parquet (90,9% das 33 partidas pos5, mediana do 1º item)

#### Arcane Boots (arcane_boots)
- minuto: 12:35
- porque: repõe 150 de mana pro time inteiro em área, em cima da aura de regen que a bota já carrega.
- detalhe: custa 1.500, monta com Boots + Ring of Basilius + Wizard Hat. Replenish cura 150 de mana em raio 1200 com recarga de 55s, e mantém a Basilius Aura de +1 de regen pro time.
- fonte: dota-imortal/items.json (arcane_boots); dota-tier1/compras.parquet (100% das 33 partidas pos5, mediana do 1º item)

#### Wind Lace (wind_lace)
- minuto: 17:54
- porque: 15 de velocidade de movimento por 225 de ouro, barato pra roamar e escapar de gank antes de fechar outro item.
- detalhe: componente de 225 que fica solto no inventário quando não vai pra Solar Crest ainda. Não acumula com outro Wind Lace.
- fonte: dota-imortal/items.json (wind_lace); dota-tier1/compras.parquet (84,8% das 33 partidas pos5, mediana do 1º item)

#### Pavise (pavise)
- minuto: 20:06
- porque: escudo de 250 de dano físico por 7s num aliado, barato e com recarga de 16s pra proteger quem inicia a troca.
- detalhe: custa 1.350, monta com Wizard Hat + Fluffy Hat + Ring of Protection. Soma +3 de armadura, +175 de vida e mana pro Warlock, e o Protect ativo dá o escudo físico no aliado escolhido.
- fonte: dota-imortal/items.json (pavise); dota-tier1/compras.parquet (69,7% das 33 partidas pos5, mediana do 1º item)

#### Solar Crest (solar_crest)
- minuto: 24:14
- porque: escudo de 350 de dano físico, mais armadura, velocidade de ataque e de movimento pro aliado carregar a luta.
- detalhe: custa 2.575, monta com Pavise + Chainmail + Wind Lace (a recarga é compartilhada com a Pavise). O Shine dá +5 de armadura, +60 de velocidade de ataque, +15% de movimento e o escudo de 350 por 7s num aliado; usado em si mesmo só dá o escudo de 350, sem nenhum dos outros três bônus (o item passivamente já soma +7 de armadura pra quem carrega, mas isso não vem do Shine).
- fonte: dota-imortal/items.json (solar_crest); dota-tier1/compras.parquet (69,7% das 33 partidas pos5, mediana do 1º item)

#### Vladmir's Offering (vladmir)
- minuto: 30:22
- porque: aura de lifesteal, dano e armadura pro time inteiro, de graça e sem precisar canalizar nada.
- detalhe: custa 2.200, monta com Buckler + Ring of Basilius + Lifesteal + Blades of Attack. A Vladmir's Aura dá 20% de lifesteal, 18% de dano bônus, 1 de regen de mana e 2 de armadura a aliados num raio de 1200 (o lifesteal em creep cai pra 12%).
- fonte: dota-imortal/items.json (vladmir); dota-tier1/compras.parquet (24,2% das 33 partidas pos5, mediana do 1º item)

### Situacionais

#### Glimmer Cape (glimmer_cape)
- minuto: 27:20
- porque: invisibilidade e escudo de 375 de dano mágico por 5s, pra salvar um aliado de burst mágico ou fugir sem ser visto.
- detalhe: custa 2.150, monta com Shadow Amulet + Shawl. Depois de 0,5s de atraso, dá invisibilidade, +20 de movimento e o escudo de dano mágico de 375 por 5s, em si mesmo ou num aliado.
- contra: burst mágico de alvo único (nuke): o escudo absorve até 375 de dano mágico antes de qualquer outra mitigação, o suficiente pra segurar a maioria dos combos de nuke isolado.
- fonte: dota-imortal/items.json (glimmer_cape); dota-tier1/compras.parquet (30,3% das 33 partidas pos5, mediana do 1º item)

#### Force Staff (force_staff)
- minuto: 26:08
- porque: empurra 600 de distância qualquer unidade, inclusive o próprio Warlock, pra salvar aliado ou fugir de quem colou.
- detalhe: custa 2.200, monta com Staff of Wizardry + Fluffy Hat. O Force empurra o alvo 600 na direção em que está de frente, com 850 de alcance de conjuração em inimigos; não interrompe as ações do alvo.
- contra: iniciação corpo a corpo sem dash próprio (precisa ficar colado pra acertar): o empurrão de 600 tira o alvo do alcance antes do golpe.
- fonte: dota-imortal/items.json (force_staff); dota-tier1/compras.parquet (21,2% das 33 partidas pos5, mediana do 1º item)

#### Blink Dagger (blink)
- minuto: 26:00
- porque: fecha até 1.200 de distância pra entrar no alcance de 1.000 do Fatal Bonds ou 800 do Upheaval sem gastar outro feitiço de mobilidade.
- detalhe: custa 2.250. Teleporta até 1.200 de distância e trava por 3s depois de levar dano de herói ou Roshan.
- contra: times de poke que mantêm distância com silence ou slow de longo alcance: o blink fecha os 1.200 antes do oponente conseguir reagir ao cast do Fatal Bonds.
- combo: blinkar pra dentro do grupo inimigo e abrir com Fatal Bonds ou Upheaval antes que percebam a aproximação.
- fonte: dota-imortal/items.json (blink); dota-imortal/constants_abilities.json (warlock_fatal_bonds, warlock_upheaval, alcances); dota-tier1/compras.parquet (12,1% das 33 partidas pos5, mediana do 1º item)

#### Lotus Orb (lotus_orb)
- minuto: 31:23
- porque: devolve pro lançador o próximo feitiço de alvo único que vier em você ou no aliado protegido.
- detalhe: custa 3.850, monta com Pers + Platemail + Energy Booster. O Echo Shell dura 5s e recasta a maioria dos feitiços direcionados de volta pro conjurador; o alvo protegido ainda leva o dano do próprio feitiço.
- contra: heróis com disable de alvo único direcionado (stun, hex, silence): o Echo Shell devolve o feitiço pro lançador, inclusive o efeito, embora você ainda tome o dano.
- fonte: dota-imortal/items.json (lotus_orb); dota-tier1/compras.parquet (1 das 33 partidas pos5, amostra baixa)

## Roshan

Warlock não é soloer de Roshan: não está entre os 22 heróis do perfil de solo no dataset local (resumo_por_heroi.json), e nas 33 partidas Tier1 em que foi pos 5 ele só deu o golpe final em Roshan 1 vez de 67 abates registrados nessas partidas (1,5%), sempre com o time em volta. No dataset mais amplo de mortes de Roshan por replay (solos.json, 2.720 eventos, partidas diferentes das do recorte Tier1), ele aparece do lado de quem ataca em 55 casos (2,0% do total); em 46 desses (83,6%) o abate é classificado como "em grupo" (time), em 7 ele aparece ajudando o solo de outro herói (solo_com_suporte ou solo_ajuda_curta), e os 2 restantes caem numa categoria separada do dataset (finalizacao). Nesse dataset mais amplo ele chega a dar o golpe final em Roshan 3 vezes (2 delas em abates "em grupo", 1 na categoria "finalizacao"), sempre em partidas diferentes da única vez que fechou Roshan no recorte Tier1. O papel real dele no objetivo é entrar no abate em grupo, não fechar a conta sozinho.
