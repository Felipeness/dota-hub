---
id: ficha-treant
titulo: "Treant Protector"
heroi: Treant Protector
patch: 7.41
posicoes: [5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- https://api.opendota.com/api/heroes/83/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=83
- https://www.dota2.com/datafeed/patchnotes?version=7.41&language=english
---
## Resumo
Treant Protector é suporte de controle de área: enraíza e desarma com Leech Seed, blinda e cura com Living Armor, e no ultimate trava todo mundo num raio de 800 com Overgrowth, que atravessa BKB (bkbpierce confirmado nas constantes do patch). No 7.41 ele só existe como suporte na prática: o OpenDota não registra nenhuma partida profissional com ele (pro_pick 0 em heroStats.json) e o ganho de ouro e experiência por minuto do herói fica em faixa de suporte (mediana de 313 de ouro e 498 de XP por minuto no benchmark do OpenDota), bem abaixo de qualquer carry ou mid. Ele é lento (280 de movimento, heroStats.json) e corpo a corpo, então o encaixe real é pos 5: trava o grupo inimigo pra time matar, sem depender de farm.

## Pos 5 (suporte duro)
- quando pegar: quando o time já tem carry e mid garantidos e precisa de alguém que trava várias pessoas de uma vez sem precisar de item nenhum. Leech Seed (raiz + desarma no auto-attack) funciona desde o nível 1, mas não atravessa BKB (bkbpierce: No). Overgrowth (raiz + impede atacar, usar blink e ficar invisível, em 800 de raio) desde o 6 atravessa BKB (fonte: constants_abilities.json, treant_leech_seed e treant_overgrowth).
- itens iniciais: tango, blood_grenade, ward_dispenser, smoke_of_deceit
### Build
#### Iron Branch (branches)
- porque: planta a própria árvore em qualquer lugar pra ativar o passivo do herói fora da floresta.
- detalhe: Iron Branch no 7.41 ganhou a habilidade "Plant Tree": joga no chão e cria uma árvore que dura 20s (items.json). O innate Nature's Guise do Treant dá bônus de velocidade perto de árvore e, depois de 2,75s sem levar dano, libera invisibilidade enquanto ele ficar perto de uma (constants_abilities.json, treant_natures_guise). Em alto, rio ou meio de rota sem árvore nenhuma, uma Branch de 55 de ouro resolve isso.
- combo: planta a Branch, espera os 2,75s sem dano (mesmo gatilho do Tree Walking) e fica invisível pra escapar ou reposicionar antes de engajar.
- fonte: items.json (branches); constants_abilities.json (treant_natures_guise)

#### Arcane Boots (arcane_boots)
- porque: dá mana pra espamar Leech Seed e Living Armor, que ficou mais cara no 7.41.
- detalhe: o patch 7.41 subiu o custo de mana de Living Armor de 40/45/50/55 pra 65/70/75/80 (dota2.com/datafeed, ability_id 5436, hero_id 83). Treant nasce com só 75 de mana e ganha 1,8 de intelecto por nível (heroStats.json), então sem boots de mana ele seca rápido. Foi um dos itens mais comprados no bucket early (8 compras, empatado com Urn of Shadows e atrás só das Boots of Speed genéricas com 11) e o segundo mais comprado no bucket mid (46 compras) do herói, segundo o OpenDota.
- fonte: dota2.com/datafeed/patchnotes (7.41, hero_id 83, ability_id 5436); heroStats.json (base_mana, int_gain); OpenDota itemPopularity hero 83

#### Blink Dagger (blink)
- porque: sem blink o Overgrowth nunca chega perto de ninguém, porque Treant é lento e corpo a corpo.
- detalhe: move speed 280 (heroStats.json), uma das 13 velocidades mais baixas do jogo entre os 127 heróis, e alcance de ataque 150, o padrão de qualquer herói corpo a corpo (não é um número ruim específico do Treant). Overgrowth é "No Target" centrado nele mesmo, com 800 de raio (constants_abilities.json), ou seja, ele precisa estar dentro do grupo inimigo quando solta. É disparado o item mais comprado do herói nos dados do OpenDota: 59 compras no bucket mid e mais 26 no late, a maior contagem de qualquer item dele em qualquer fase.
- combo: blinka pro meio do time inimigo agrupado e solta Overgrowth na sequência, raiz + impede atacar, usar blink ou ficar invisível em 800 de raio por 3/4/5s (nível da skill), atravessando BKB.
- fonte: heroStats.json (move_speed, attack_range); constants_abilities.json (treant_overgrowth); OpenDota itemPopularity hero 83

#### Force Staff (force_staff)
- porque: empurra 600 de distância, serve tanto pra salvar um aliado quanto pra se posicionar antes do Overgrowth.
- detalhe: "Pushes any target unit 600 units in the direction it is facing" (items.json). Dá pra usar em si mesmo pra entrar na luta sem gastar o blink, ou em um aliado perseguido pra tirar ele do alcance de quem tá batendo. Terceiro item mais comprado do herói no late game segundo o OpenDota (21 compras), atrás do blink (26) e do Aghanim's Scepter (23).
- contra: iniciadores corpo a corpo e qualquer combo que depende de ficar colado no alvo: o Force tira o aliado do alcance na hora certa.
- fonte: items.json (force_staff); OpenDota itemPopularity hero 83

#### Essence Distiller (essence_distiller)
- porque: prende um inimigo, dá True Sight dele pro time e ainda causa dano por segundo, bom pra achar quem se esconde e punir rotação.
- detalhe: no inimigo, causa 25 de dano por segundo e dá True Sight (visão compartilhada com o time) por 8s (items.json). Pode ser jogado no chão e esperar até 15s pra prender o primeiro inimigo que passar a 400 de raio, então serve pra travar rotas mesmo sem estar na luta. Terceiro item mais comprado do herói no bucket mid do OpenDota (23 compras).
- contra: heróis que dependem de ficar invisível ou fora de visão pra operar: o True Sight anula isso por 8s.
- fonte: items.json (essence_distiller); OpenDota itemPopularity hero 83

#### Solar Crest (solar_crest)
- porque: dá armadura, velocidade de ataque e uma barreira física pro aliado que vai entrar na luta.
- detalhe: em aliado dá 5 de armadura, 60 de velocidade de ataque, 15% de velocidade de movimento e barreira de 350 de dano físico por 7s; não dá nenhum desses bônus se usado em si mesmo (items.json). Por isso o alvo certo é o carry ou o iniciador do time, não o próprio Treant.
- fonte: items.json (solar_crest); OpenDota itemPopularity hero 83

#### Pavise (pavise)
- porque: barreira física barata de 250 de dano pra absorver o primeiro hit que mataria um aliado.
- detalhe: item de 1350 de ouro, dá barreira de 250 de dano físico por 7s em quem recebe (items.json). Mais barato e mais rápido de ter do que Solar Crest, então entra antes dele em jogos que precisam de proteção já no early-mid. 16 compras no bucket mid do herói segundo o OpenDota.
- fonte: items.json (pavise); OpenDota itemPopularity hero 83

#### Eul's Scepter of Divinity (cyclone)
- porque: remove silence e debuffs de cima do próprio Treant e trava um inimigo por 2,5s antes do Overgrowth.
- detalhe: ciclone deixa o alvo invulnerável por 2,5s e causa 50 de dano mágico ao aterrissar; tem dispel básico (items.json), então limpa qualquer silêncio ou root que esteja impedindo o Treant de blinkar ou castar.
- combo: Eul's no alvo mais perigoso, blinka durante o ciclone e solta Overgrowth no exato momento em que ele aterrissa, prendendo o alvo de novo sem deixar ele reagir.
- fonte: items.json (cyclone); OpenDota itemPopularity hero 83

#### Vladmir's Offering (vladmir)
- porque: aura de lifesteal, dano e armadura pro time, bom pra quem passa a luta inteira perto do grupo.
- detalhe: 20% de lifesteal, 18% de dano bônus, 1 de regeneração de mana e 2 de armadura em 1200 de raio pros aliados próximos (items.json). Encaixa no perfil do herói, que não sai de perto do time (Leech Seed, Living Armor e Overgrowth são todos de curto ou médio alcance).
- fonte: items.json (vladmir); OpenDota itemPopularity hero 83

### Situacionais
#### Lotus Orb (lotus_orb)
- porque: devolve a maioria dos feitiços direcionados pro próprio inimigo que lançou.
- detalhe: aplica um escudo de 5s que recasta a maioria dos spells de alvo único de volta no caster; a unidade escudada ainda leva o dano, mas não o efeito (items.json). Serve de defesa pro próprio Treant e de counter-engage: devolve o disable que ia travar ele ou um aliado.
- contra: heróis cujo combo depende de abrir com um feitiço de alvo único (hex, hooks, stuns direcionados): o disable volta pra quem lançou.
- fonte: items.json (lotus_orb); OpenDota itemPopularity hero 83

#### Pipe of Insight (pipe)
- porque: barreira mágica de 425 em 1200 de raio, resolve engajada de time que é quase só dano mágico.
- detalhe: barreira absorve 425 de dano mágico por 8s em todos os aliados próximos, mais 8% de resistência mágica contínua (items.json).
- contra: lineups com burst mágico em área que tenta estourar o grupo todo junto quando o Treant solta o Overgrowth.
- fonte: items.json (pipe); OpenDota itemPopularity hero 83 (amostra pequena, poucas compras registradas)

#### Blade Mail (blade_mail)
- porque: devolve dano físico, pune quem foca o Treant achando que ele morre fácil.
- detalhe: por 5,5s devolve todo o dano recebido, aumentado em 85% (items.json).
- contra: heróis de burst físico de alvo único que tentam focar o suporte achando que é kill garantida.
- fonte: items.json (blade_mail); OpenDota itemPopularity hero 83 (amostra pequena, poucas compras registradas)

## Roshan
Sem dado de Roshan solo.
