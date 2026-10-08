---
id: ficha-wisp
titulo: "Io"
heroi: Io
patch: 7.41
posicoes: [1, 4, 5]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-roshan-solo/data/heroes.json
- dota-roshan-solo/data/solos.json
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- dota-tier1/data/draft.csv
- dota-tier1/data/jogadores_partida.csv
- dota-tier1/data/heroes.json
- dota-tier1/data/ESQUEMA.md
- https://api.opendota.com/api/heroes/91/itemPopularity
- https://api.opendota.com/api/heroStats
- https://dotacoach.gg/en/heroes/io/builds/carry
- https://liquipedia.net/dota2/api.php?action=parse&page=Io&prop=wikitext&format=json
---
## Resumo
Io é suporte universal (atributo "all"): as roles oficiais no OpenDota são Support, Escape e Nuker (heroes.json), e o kit atual não tem mais os facets antigos (wisp_kritzkrieg e wisp_medigun aparecem como "deprecated" em constants_hero_abilities.json); Equilibrium (dano maior quanto mais cheio de vida, cura maior quanto mais baixo) é passiva de base. O motor é Tether (puxa um aliado, repassa parte de qualquer cura ou mana que Io recebe e desacelera quem toca na corda), Overcharge (velocidade de ataque e amplificação de feitiço, também repassados pro aliado tethered) e Relocate (teleporta os dois, ida e volta em 12s), tudo direto do texto das habilidades (constants_abilities.json). Nos replays de Tier 1 do 7.41 (dota-tier1/data, 62 picks reais, posição tirada do lane_role do próprio replay, não do draft) ele é majoritariamente suporte: pos4 em 23 jogos (65% de vitória) e pos5 em 14 (29%); mas aparece também como pos1 "funil" em 16 jogos com 75% de vitória e GPM de 583 a 988, bem acima do padrão de suporte. O OpenDota (itemPopularity, hero 91) bate com esse segundo perfil: Soul Ring, Black King Bar, itens de crítico, Mjollnir, Satanic e Heart of Tarrasque aparecem do lado dos itens de suporte (Mekansm, Holy Locket, Glimmer Cape) na mesma amostra agregada.

## Pos 4 (suporte de roaming)
- quando pegar: é o perfil mais comum no 7.41 Tier 1, 23 dos 62 picks reais (37%) saem pos4 pelo lane_role do replay, com 65% de vitória (15V-8D). Fonte: dota-tier1/data/draft.csv + jogadores_partida.csv (coluna posicao_replay, fonte_posicao=od_lane_role).
- itens iniciais: branches, tango, blood_grenade, magic_stick, ward_observer, ward_sentry

### Build
#### Magic Wand (magic_stick)
- porque: carrega sozinho com qualquer feitiço inimigo visível perto e devolve vida e mana no all-in de lane.
- detalhe: até 20 cargas, 15 de vida e mana por carga (a versão Wand, upgrade do Magic Stick), ganha carga quando inimigo visível usa habilidade num raio de 1200.
- fonte: items.json (magic_wand, magic_stick); OpenDota itemPopularity hero 91 (Iron Branch é o item inicial mais comprado, 160 de 554, 28,9%, o componente que vira Wand)

#### Ring of Basilius (ring_of_basilius)
- porque: aura de mana pra sustentar Tether (40), Overcharge (40 a 100) e Spirits (90 a 120), que Io gasta o jogo inteiro.
- detalhe: aura de 1 de regen de mana num raio de 1200; é componente de Vladmir's Offering (não de Holy Locket, cujos componentes reais são Magic Wand e Crown).
- fonte: dotacoach.gg/en/heroes/io/builds/carry, carregada como guia "7.41f | Support" (item de early game dessa build); constants_abilities.json (mc de wisp_tether, wisp_overcharge, wisp_spirits); items.json (ring_of_basilius, vladmir, holy_locket)

#### Mekansm (mekansm)
- porque: cura 250 em área e, pelo texto do Tether, parte de qualquer cura que Io recebe passa pro aliado puxado.
- detalhe: +5 de armadura e aura de 2,5 de regen num raio de 1200; é o item de heal em grupo mais comum da amostra.
- combo: Tether no carry antes de usar o Mekansm em si mesmo: parte da cura (60% a 120% conforme o nível do Tether) chega no aliado puxado sem gastar um segundo cast.
- fonte: items.json (mekansm); constants_abilities.json (wisp_tether, "when Io restores health or mana, the tethered unit gains a portion of that amount"); OpenDota itemPopularity hero 91 (31 de 598 compras de meio de jogo, 5,2%, a mais comum entre os itens de cura em área)

#### Holy Locket (holy_locket)
- porque: amplifica toda cura que Io dá em 15% e ainda devolve vida e mana por carga; de novo, parte disso atravessa o Tether pro aliado puxado.
- detalhe: +7 em todos os atributos; carrega com o tempo e com feitiços inimigos próximos, igual ao Magic Wand.
- combo: Tether + Holy Locket em si mesmo em pleno combate: a carga cura Io e repassa uma fração pro aliado, sem gastar mana extra.
- fonte: items.json (holy_locket); constants_abilities.json (wisp_tether); OpenDota itemPopularity hero 91 (19 de 598 no meio de jogo, 3,2%, e 4 de 394 no fim, 1,0%)

#### Glimmer Cape (glimmer_cape)
- porque: invisibilidade e barreira de 375 de dano mágico pra se aproximar sem ser interceptado antes de puxar o Tether.
- detalhe: +20% de resistência mágica enquanto ativo, 20 de velocidade de movimento, dura 5s; pode usar em si mesmo ou no aliado puxado.
- contra: iniciação com um único nuke ou projétil de até 375 de dano mágico que a barreira cobre sozinha.
- fonte: items.json (glimmer_cape); OpenDota itemPopularity hero 91 (7 de 394 compras de fim de jogo, 1,8%)

### Situacionais
#### Guardian Greaves (guardian_greaves)
- porque: upgrade de Mekansm pra lutas mais longas, cura 325 de vida e 200 de mana em área e ainda dá dispel básico em quem ativa o item.
- detalhe: a cura em área é pros aliados próximos, mas o dispel (remove a maioria dos debuffs) é só em quem usa; aura de 2,5 de regen de vida e 1,5 de mana; se a vida de quem usa cai abaixo de 25%, a regen passiva sobe pra 14,5.
- contra: composições que dependem de poke constante em vez de burst único, porque a aura de regen anula o chip damage.
- fonte: items.json (guardian_greaves); OpenDota itemPopularity hero 91 (1 de 598 no meio, 2 de 394 no fim; amostra pequena)

#### Pipe of Insight (pipe)
- porque: barreira de 425 de dano mágico pra todo o time, contra combos de nuke em área que tentam abrir a luta com burst mágico.
- detalhe: aura de 8% de resistência mágica num raio de 1200, dura 8s.
- contra: time inimigo com dano mágico em área concentrado (ultimates de burst em grupo).
- fonte: items.json (pipe); OpenDota itemPopularity hero 91 (3 de 598 no meio, 2 de 394 no fim; amostra pequena)

#### Lotus Orb (lotus_orb)
- porque: devolve pro inimigo a maioria dos feitiços de alvo único lançados no aliado tethered, protegendo quem Io está puxando.
- detalhe: +10 de armadura e escudo de 5s que reflete spells; dispel básico ao ativar.
- contra: disable de alvo único (hex, stun de single target, silence) que tentaria isolar o carry puxado antes do Relocate estar pronto.
- fonte: items.json (lotus_orb); OpenDota itemPopularity hero 91 (3 de 394 compras de fim de jogo, 0,8%)

#### Solar Crest (solar_crest)
- porque: 5 de armadura, 60 de velocidade de ataque e barreira física de 350 pro carry do time antes de uma troca.
- detalhe: dura 7s, compartilha recarga com Pavise; não dá os bônus se usado em si mesmo.
- contra: carry inimigo de right-click que depende de atacar sem ser interrompido.
- fonte: items.json (solar_crest); OpenDota itemPopularity hero 91 (2 de 394 compras de fim de jogo, 0,5%; amostra pequena)

## Pos 5 (suporte duro)
- quando pegar: segundo perfil mais comum no 7.41 Tier 1, 14 dos 62 picks reais (23%), mas com resultado pior que o pos4, 29% de vitória (4V-10D). Fonte: dota-tier1/data/draft.csv + jogadores_partida.csv (posicao_replay, fonte_posicao=od_lane_role e od_gpm_rank).
- itens iniciais: branches, tango, blood_grenade, magic_stick, ward_observer, ward_sentry

### Build
O caminho de itens é o mesmo do pos4 (Magic Wand, Ring of Basilius, Mekansm, Holy Locket, Glimmer Cape): a diferença real entre as duas posições, pelos dados do replay, não é o item e sim a rotina, pos5 fica preso na lane junto do carry em vez de rodar o mapa com o Tether. Ver os blocos de item na seção "Pos 4" acima; aqui vão só os ajustes específicos de suporte duro.

#### Observer e Sentry Ward (ward_dispenser)
- porque: suporte duro segura a visão da lane e das rotações inimigas; sem isso o resto do kit não tem pra onde reagir a tempo.
- detalhe: Observer Ward (23 de 554 compras iniciais, 4,2%) e Sentry Ward (13, 2,3%) aparecem separados na amostra inicial, mais que o pacote junto (ward_dispenser, 28, 5,1%).
- fonte: OpenDota itemPopularity hero 91 (itens iniciais); items.json (ward_observer, ward_sentry, ward_dispenser)

### Situacionais
Mesmas opções do pos4 (Guardian Greaves, Pipe of Insight, Lotus Orb, Solar Crest), pela mesma amostra de compras; não há item situacional específico de pos5 com fonte própria nos dados consultados.

## Pos 1 (carry "funil")
- quando pegar: achado raro mas real nos replays Tier 1: 16 dos 62 picks (26%) são classificados pos1 pelo próprio OpenDota (lane_role em 13 desses 16), com 75% de vitória (12V-4D) e GPM entre 583 e 988, bem acima do pos4 e pos5 no mesmo recorte (mediana 376 e 298, teto em 587 e 571). Fonte: dota-tier1/data/jogadores_partida.csv (colunas posicao_replay, fonte_posicao, gold_per_min, hero_id=91). A lógica por trás, pelo texto das habilidades: o custo de mana de Io é baixo e fixo (Tether 40, Overcharge 40 a 100, Relocate 175, constants_abilities.json) comparado a um nuker de int, e ele tem fuga embutida (Relocate) e cura passiva quando fica baixo (Equilibrium), então o time pode funilar ouro nele e ainda assim ele sobrevive sozinho enquanto farma.
- itens iniciais: branches, tango, magic_stick

### Build
#### Soul Ring (soul_ring)
- porque: sustenta o cast de Tether e Relocate sem depender de regen de mana da lane, liberando o Io pra rotacionar e farmar sem voltar à base.
- detalhe: converte vida em mana ao ativar; é o item de early game mais comprado de Io na amostra, de longe.
- fonte: items.json (soul_ring); OpenDota itemPopularity hero 91 (41 de 209 compras de early game, 19,6%, a mais comum da fase)

#### Black King Bar (black_king_bar)
- porque: Tether, Overcharge e Relocate são buffs que o BKB não bloqueia, então a imunidade a disable sai de graça pro farm e pra lutas.
- detalhe: 60% de resistência mágica e imunidade a disable por 9/8/7s conforme o nível; dispel básico ao ativar.
- contra: composições com disable de alvo único ou hex que tentariam isolar o Io funil antes de ele puxar o Tether.
- fonte: items.json (black_king_bar); OpenDota itemPopularity hero 91 (componentes Ogre Axe 109/598 = 18,2% e Mithril Hammer 71/598 = 11,9% no meio de jogo; o BKB pronto aparece em 45/598 = 7,5% no meio e 18/394 = 4,6% no fim)

#### Mjollnir (mjollnir)
- porque: Overcharge dá até 110 de velocidade de ataque; mais ataques por segundo dão mais chances de proc da Chain Lightning.
- detalhe: 25% de chance de bolt em cadeia (12 alvos, 180 de dano mágico), +90 de velocidade de ataque; evolução do Maelstrom (10/598 = 1,7% no meio).
- fonte: items.json (mjollnir, maelstrom); constants_abilities.json (wisp_overcharge, bônus de velocidade de ataque 35 a 110); OpenDota itemPopularity hero 91 (Mjollnir 3/598 = 0,5% no meio e 23/394 = 5,8% no fim)

#### Heart of Tarrasque (heart)
- porque: Equilibrium amplifica o dano de saída conforme a vida de Io fica mais cheia (até 5%); um pool de vida gigante maximiza esse bônus.
- detalhe: +40 de força e regen de 1,5% da vida que falta por segundo; com a vida alta, Io raramente fica na faixa baixa onde a passiva troca dano por cura.
- fonte: items.json (heart); constants_abilities.json (wisp_equilibrium, "Io gains outgoing damage amplification the closer it is to full health"); OpenDota itemPopularity hero 91 (19/394 = 4,8% no fim de jogo)

### Situacionais
#### Satanic (satanic)
- porque: lifesteal de 175% por 6s com dispel básico, pra sair de focos de dano físico e voltar pro farm sem precisar recuar à base.
- detalhe: +25 de força e dano fixos; lifesteal passivo normal fora do ativo.
- contra: times com dano físico concentrado tentando abater o Io funil antes do time principal reagir.
- fonte: items.json (satanic); OpenDota itemPopularity hero 91 (23/394 = 5,8% no fim de jogo)

#### Eye of Skadi (skadi)
- porque: reduz a restauração de vida do alvo em 50% e desacelera seu movimento, contra quem vive de lifesteal ou regen na luta.
- detalhe: +35 em todos os atributos; o slow de ataque (-20%) também ajuda Io a não ser alcançado; o slow de movimento sobe pra -50% contra alvo ranged (-25% em melee).
- contra: carries ou offlaners com lifesteal alto (a redução de 50% na restauração de vida anula o sustain deles).
- fonte: items.json (skadi); OpenDota itemPopularity hero 91 (2/394 = 0,5% no fim de jogo; amostra pequena)

#### Daedalus (greater_crit)
- porque: 30% de chance de crítico a 225% de dano, burst físico extra pra quem já tem BKB e Mjollnir prontos.
- detalhe: os componentes reais (items.json) são Lesser Crit (18/394 = 4,6% no fim) e Demon Edge (20/394 = 5,1% no fim), aparecendo na amostra antes do item final. Blade of Alacrity (64/598 = 10,7% no meio) também é comprado por quem joga Io, mas não é componente de Daedalus nem de Lesser Crit em items.json, então não faz parte confirmada deste caminho de item.
- fonte: items.json (greater_crit: componentes lesser_crit + demon_edge); OpenDota itemPopularity hero 91 (demon_edge 20/394 = 5,1%, lesser_crit 18/394 = 4,6%, greater_crit 15/394 = 3,8% no fim de jogo; blade_of_alacrity 64/598 = 10,7% no meio)

#### Assault Cuirass (assault)
- porque: aura de velocidade de ataque e armadura pro time inteiro, bom porque Io de qualquer forma fica perto do grupo pra manter o Tether.
- detalhe: +30 de velocidade de ataque e 5 de armadura num raio de 1200, e reduz a armadura inimiga em 5.
- contra: times inimigos que dependem de armadura alta ou de formação em grupo pra sobreviver ao DPS sustentado.
- fonte: items.json (assault); OpenDota itemPopularity hero 91 (1/394 = 0,3% no fim de jogo; amostra pequena)

## Roshan
Io não tem nenhum abate solo de Roshan nos replays catalogados: zero linhas com heroi="wisp" e classificacao="solo" em solos.json (dota-roshan-solo/data), e ele não tem entrada própria em resumo_por_heroi.json nem em resumo_com_suporte.json, que só cobrem heróis com amostra suficiente de solo ou de solo com suporte (em resumo_com_suporte.json o nome "wisp" aparece de passagem, listado 1 vez como suporte no fosso de Muerta e 1 vez como suporte no fosso de Troll Warlord, nunca como herói principal do abate). Ele aparece 13 vezes em abates de Roshan feitos em grupo (classificacao="time" em solos.json) como o herói de maior fatia de dano no abate, sempre em times do lado Yuma (origem="yuma", o recorte de partidas desse projeto), mas sem dado de minuto ou nível mediano porque esse agregado não existe para heróis fora do corte do resumo. Pelo texto das habilidades, Io não tem nenhum nuke de dano alto contra Roshan (Spirits foi descrito pra explodir em herói inimigo, não há confirmação de que funcione em Roshan) e depende do próprio ataque básico mais a amplificação de Equilibrium, então o padrão esperado (abate em grupo, não solo) é consistente com o kit, mesmo sem mais replays pra confirmar.
