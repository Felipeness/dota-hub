---
id: ficha-chen
titulo: "Chen"
heroi: Chen
patch: 7.41
posicoes: [5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/falcons/chaves.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/falcons/hub.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/early_rosh_pro.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/66/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=66
- https://dotacoach.gg/heroes/chen
---

## Resumo
Chen (OpenDota: roles Support, Pusher) é um suporte que vive de buffar e curar, não de bater. Divine Favor dá regen de vida pro time e, lançada num aliado, dá armadura e heal amp; Hand of God cura todo mundo no mapa de uma vez; Holy Persuasion rouba até 4 creeps inimigos ou neutros (HP travado em 400, dá parte do bounty em ouro), virando corpo extra sem precisar que Chen farme. No banco de dados de pro do Atlas (dota-tier1), ele só aparece no Falcons, descrito como "suporte de lane, pos 5 (8 jogos com Sneyking)" (fonte: `falcons/chaves.json`), e a mediana de cura por minuto dele no OpenDota é 258 (percentil 50 de `hero_healing_per_min`, hero_id 66), o que bate com o papel de curador em vez de dano.

## Pos 5 (suporte duro)
- quando pegar: nas vitórias do Sneyking com Chen, 67% foram com o time favorito e 100% com a lane ganha; não há registro dele como pick de última hora ("pickado_por_ultimo": "0-0"). Fonte: `falcons/chaves.json`.
- itens iniciais: branches, tango, blood_grenade, ward_dispenser, smoke_of_deceit, faerie_fire. Fonte: items.json; itemPopularity hero 66 start: branches 154/jogos, tango 96/jogos, blood_grenade 93/jogos, smoke_of_deceit 65/jogos, ward_dispenser 65/jogos, faerie_fire 43/jogos (todos entre os mais comprados do início).

### Build
#### Arcane Boots (arcane_boots)
- porque: repõe 150 de mana pro time e sustenta o próprio Chen, que vive sem mana pra Persuasion e Penitence.
- detalhe: é a bota mais comprada na fase do meio pra Chen no OpenDota (71 jogos), depois de sair com Boots of Speed simples no early (80 jogos, item de bota mais comum dessa fase). Persuasion custa 110 a 170 de mana por cast, Penitence 80 a 110, Divine Favor 75 fixo: sem a aura de mana, o combo seca rápido.
- fonte: items.json (arcane_boots); itemPopularity hero 66 (OpenDota): early boots 80/jogos, mid arcane_boots 71/jogos

#### Drum of Endurance (ancient_janggo)
- porque: dá velocidade de ataque e movimento pra "aliados" em área, não só heróis, então também acelera os creeps da Persuasion.
- detalhe: 2º item mais comum da fase do meio depois do Mekansm (47 jogos). A descrição do item fala em "allies", sem restringir a heróis, o que inclui as unidades que Chen está controlando.
- fonte: items.json (ancient_janggo); itemPopularity hero 66 mid: 47/jogos

#### Mekansm (mekansm)
- porque: cura 250 de vida pro time em área e dá 5 de armadura, o primeiro pico real de sustain em grupo do Chen.
- detalhe: 3º item mais comum da fase do meio (67 jogos). Funciona em conjunto com Divine Favor: a aura de Divine Favor regenera vida continuamente, o Mekansm cura de uma vez antes de uma troca.
- combo: Mekansm (burst de cura) + Divine Favor (regen contínua) cobre tanto o pico de dano de uma troca quanto a recuperação depois dela.
- fonte: items.json (mekansm); itemPopularity hero 66 mid: 67/jogos

#### Guardian Greaves (guardian_greaves)
- porque: upa o Mekansm pra curar 325 de vida e 200 de mana e remover a maioria dos debuffs negativos (dispel básico) no time inteiro.
- detalhe: item mais comprado de Chen na fase tardia, empatado com Pipe (21 jogos cada). A aura passiva de regen de vida sobe pra 14,5 quando um aliado cai abaixo de 25% de vida, o que ajuda Chen a manter um aliado caído em troca viva até o próximo cast.
- contra: combos de dano ao longo do tempo (burn, veneno) e silêncios/lentidões leves que o dispel básico remove.
- fonte: items.json (guardian_greaves); itemPopularity hero 66 mid: 34/jogos, late: 21/jogos

#### Pipe of Insight (pipe)
- porque: dá barreira de 425 de dano mágico pro time em área e 8% de resistência mágica constante.
- detalhe: empatado como item mais comprado do late de Chen (21 jogos). Como Chen não tem dano próprio relevante, ele normalmente é quem compra o item defensivo de grupo em vez de um carry.
- contra: composições de dano mágico em área (nukers, ultis de AoE) na hora de entrar em teamfight ou defender torre.
- fonte: items.json (pipe); itemPopularity hero 66 late: 21/jogos

#### Aghanim's Scepter (ultimate_scepter)
- porque: dá +10 em todos os atributos, +175 de vida e +175 de mana, o que segura Chen vivo no meio da luta e sustenta o custo de mana dos casts.
- detalhe: item mais comprado do late depois do empate Pipe/Guardian Greaves (20 jogos). A Scepter também transforma Hand of God numa habilidade canalizável por até 6s, dando imunidade a debuff (e resistência mágica em área) pros aliados perto de Chen enquanto ele canaliza; os valores exatos de duração e resistência variam entre fontes de patches diferentes, então não entram aqui como número fixo.
- fonte: items.json (ultimate_scepter); itemPopularity hero 66 late: 20/jogos; dotacoach.gg (efeito da Scepter, build de Chen, patch 7.41f)

### Situacionais
#### Pavise (pavise)
- porque: dá escudo de 250 de dano físico por 7s num aliado só, pra proteger quem está sendo focado.
- detalhe: comprado em 18 jogos na fase do meio. É um cast rápido e barato (1.350) comparado ao Solar Crest, então entra quando o time precisa de proteção já.
- contra: foco de dano físico de curto prazo num aliado específico (iniciação de carry inimigo, burst de right-click).
- fonte: items.json (pavise); itemPopularity hero 66 mid: 18/jogos

#### Vladmir's Offering (vladmir)
- porque: dá 20% de lifesteal, 18% de dano bônus e 2 de armadura em área pro time, sem Chen precisar bater em nada.
- detalhe: comprado em 13 jogos do meio e 16 do late. Como o alvo do item é "unidade aliada" (não só herói), a aura também beneficia os creeps roubados pela Persuasion, pelo texto do próprio item.
- contra: lutas longas e de atrito, onde o time precisa de sustain físico constante em vez de um burst de cura.
- fonte: items.json (vladmir); itemPopularity hero 66 mid: 13/jogos, late: 16/jogos

#### Solar Crest (solar_crest)
- porque: dá 5 de armadura, 60 de velocidade de ataque, 15% de velocidade de movimento e 350 de barreira física por 7s, só pra um aliado.
- detalhe: comprado em 11 jogos do meio e 15 do late. O alvo é "unidade aliada", então também pode ser usado num creep roubado pela Persuasion pra ele aguentar mais tempo puxando lane.
- contra: diving conjunto no herói errado (quando o time precisa empurrar um aliado específico pra cima de alguém, com velocidade de ataque e barreira extra).
- fonte: items.json (solar_crest); itemPopularity hero 66 mid: 11/jogos, late: 15/jogos

#### Glimmer Cape (glimmer_cape)
- porque: depois de 0,5s, dá invisibilidade e barreira de 375 de dano mágico por 5s num alvo aliado.
- detalhe: comprado em 3 jogos do meio e 9 do late. É o item clássico de salvar aliado de burst mágico ou de disable seguido de nuke.
- combo: Force Staff empurra o aliado 600 de distância e o Glimmer Cape aplica invisibilidade e barreira em seguida, os dois juntos tiram o aliado do alcance e escondem ele da visão ao mesmo tempo.
- contra: combos de disable + nuke mágico de curto alcance em cima de um aliado específico.
- fonte: items.json (glimmer_cape, force_staff); itemPopularity hero 66 mid: 3/jogos, late: 9/jogos

#### Force Staff (force_staff)
- porque: empurra qualquer unidade (aliada ou inimiga) 600 de distância na direção que ela está olhando.
- detalhe: comprado em 2 jogos do meio e 7 do late. O alvo pode ser "ambos os times", então também serve pra empurrar um inimigo pra dentro do seu time em vez de só salvar aliado.
- contra: iniciação inimiga de curto alcance (gap close de corpo a corpo) em cima de um aliado.
- fonte: items.json (force_staff); itemPopularity hero 66 mid: 2/jogos, late: 7/jogos

#### Holy Locket (holy_locket)
- porque: amplifica toda cura que Chen aplica em 15% de forma passiva, e o cast ativo soma +10% de amplificação por 4s num aliado.
- detalhe: comprado em 1 jogo do meio e 5 do late. Empilha com o heal amp de Divine Favor (5% a 20% conforme o nível), deixando o Hand of God e o próprio Divine Favor curarem mais na hora certa.
- combo: Divine Favor no nível alto (heal amp) + Holy Blessing passiva do Locket (+15%) + cast ativo do Locket (+10% por 4s) somados na hora de usar o Hand of God.
- contra: comps de poke mágico constante, onde o time precisa de mais cura por cast em vez de mais sustain físico.
- fonte: items.json (holy_locket); constants_abilities.json (chen_divine_favor, heal_amp); itemPopularity hero 66 mid: 1/jogo, late: 5/jogos

## Roshan
Sem dado de Roshan solo: Chen nunca aparece como o herói que solou Roshan em nenhum dos 2.720 registros de `solos.json` (campo `heroi`), nem está entre os 22 heróis de `resumo_por_heroi.json` nem entre os 29 de `resumo_com_suporte.json`, que reúnem quem de fato solou Roshan nos replays coletados. Ele aparece de forma indireta em `solos.json`, 56 vezes, só como aliado próximo do fosso contribuindo dano no solo de outro herói (ex.: Morphling, Luna), nunca como o creditado pelo kill. O único registro de Chen e Roshan como evento de time é uma linha de `early_rosh_pro.json`: um Roshan do time dele (não solo) aos 16:35 (t=995s) numa partida (match_id 8778146322), amostra de 1 jogo, insuficiente pra afirmar um padrão.
