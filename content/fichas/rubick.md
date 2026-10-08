---
id: ficha-rubick
titulo: "Rubick"
heroi: Rubick
patch: 7.41
posicoes: [4, 5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/jogadores_partida.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet
- C:/Users/felip/Desktop/dota-tier1/data/derivados/objetivos.parquet
- C:/Users/felip/Desktop/dota-tier1/data/derivados/usos_ult_bkb.parquet
- C:/Users/felip/Desktop/dota-tier1/data/derivados/teamfight_participantes.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
---

## Resumo
Rubick é suporte de desabilitação e nuke em cadeia: Fade Bolt salta entre inimigos causando dano e reduzindo ataque/dano de magia a cada salto, Telekinesis levanta um alvo e estuna todo mundo ao redor quando ele cai, e Spell Steal rouba a última magia lançada por um inimigo (recarga de 16/10/4s, por isso ele lança a própria ultimate em média 16,6 vezes por partida: 3.976 casts em 239 partidas, fonte: usos_ult_bkb.parquet). A passiva Arcane Supremacy dá alcance de conjuração (+60 a +240 conforme o nível) e spell amp crescentes com o nível, hoje a principal fonte de alcance do herói: o Telekinesis sozinho tem só 550-625 de alcance base. Telekinesis e Fade Bolt não furam Black King Bar (`bkbpierce: No`), mas Spell Steal sim (`bkbpierce: Yes`), então um inimigo de BKB ligado bloqueia o disable, mas não impede o roubo de magia. No recorte Tier 1 do 7.41 (239 picks, 120 bans) ele é quase todo pos4 (215 picks, 90%, 53,5% de vitória) e raramente pos5 (23 picks, 10%, 39,1%); pos2 aparece uma única vez no recorte (1/239, Vici Gaming x Team Liquid, derrota) e pos1/pos3 não aparecem nenhuma vez (fonte: draft.csv, posicao_replay). Por isso esta ficha cobre só pos4 e pos5. Em luta ele entra no meio da ordem do time (3ª de 5 em média) e aplica cerca de 2,7 disables e 7,7 debuffs por luta em que participa (fonte: teamfight_participantes.parquet, 1.276 participações).

## Pos 4 (suporte de roaming)
- quando pegar: é a posição dominante do herói no recorte (215/239 picks, 90%), com 53,5% de vitória; a maioria das picks sai na 2ª fase do draft (157/215, 73%), não no primeiro round. Fonte: draft.csv.
- itens iniciais: tango, flask, ward_sentry, ward_observer, blood_grenade

### Build
#### Urn of Shadows (urn_of_shadows)
- minuto: 11:32
- porque: regen de vida em área pro aliado perto, ou dano fixo em quem está fugindo, por só 825 de ouro.
- detalhe: comprado em 74% dos jogos pos4 (159/215). Dá +2 em todos os atributos e +2 de armadura de cara, e a ativa cura 30 de vida por segundo num aliado ou aplica 25 de dano por segundo e ganha carga ao matar um inimigo perto.
- fonte: items.json; dota-tier1/data/derivados/compras.parquet (pos4, 215 jogos)

#### Arcane Boots (arcane_boots)
- minuto: 12:50
- porque: mana pra espamar Fade Bolt e Telekinesis e ainda devolver mana pro time ao desmontar depois.
- detalhe: upgrade de bota mais comum (35%, 76/215), na frente da Tranquil Boots (14%, 31/215); quase 40% dos jogos não registram upgrade de bota nenhuma vez. Dá +125 de mana e a ativa Replenish cura 150 de mana em 1.200 de raio pros aliados.
- fonte: items.json; dota-tier1/data/derivados/compras.parquet (pos4)

#### Essence Distiller (essence_distiller)
- minuto: 15:49
- porque: armadura e atributos por pouco ouro, e a ativa cura aliado ou revela e tranca um inimigo escondido.
- detalhe: comprado em 67% dos jogos (145/215). Pra um herói sem cura própria, é a forma mais barata (1.775) de manter o time vivo e ainda ganhar visão true sight de 8s sobre quem a ativa prender.
- fonte: items.json; dota-tier1/data/derivados/compras.parquet (pos4)

#### Aether Lens (aether_lens)
- minuto: 24:35
- porque: soma alcance de conjuração ao bônus da própria Arcane Supremacy, puxando o combo de mais longe.
- detalhe: comprado em 38% dos jogos (82/215). O alcance extra do item se soma ao bônus de alcance da passiva Arcane Supremacy (+60 a +240 conforme o nível), que hoje é a principal fonte de alcance do herói.
- fonte: items.json; constants_abilities.json (rubick_arcane_supremacy, rubick_telekinesis); dota-tier1/data/derivados/itens_chave.parquet (pos4)

#### Force Staff (force_staff)
- minuto: 26:07
- porque: empurra 600 de distância, suficiente pra entrar no alcance do combo ou tirar um aliado da morte.
- detalhe: comprado em 36% dos jogos (78/215); serve de mini-blink de emergência quando o Blink Dagger está em recarga.
- combo: usar em si mesmo pra fechar a distância que falta pro Telekinesis, quando o Blink já foi gasto.
- fonte: items.json; dota-tier1/data/derivados/itens_chave.parquet (pos4)

#### Aghanim's Shard (aghanims_shard)
- minuto: 26:36
- porque: é o item de meio de jogo mais comprado depois do combo defensivo e de mobilidade.
- detalhe: comprado em 63% dos jogos (135/215). As fontes consultadas (constants locais, e as tentativas de acesso a dota2.fandom, dota2.com/patches, liquipedia.net e dota2protracker.com, todas bloqueadas no acesso) não confirmam o texto exato do upgrade de Shard do Rubick: o padrão de compra mostra que é prioridade, mas o efeito preciso não pôde ser verificado.
- fonte: dota-tier1/data/derivados/compras.parquet (pos4): efeito do item: sem fonte confirmada

#### Blink Dagger (blink)
- minuto: 28:43
- porque: fecha a distância que falta pro alcance curto do combo sem levar o primeiro golpe antes de iniciar.
- detalhe: item mais comprado da build depois das wards (79%, 170/215), mas normalmente sai só depois do Aghanim's Shard: o combo de alcance (Arcane Supremacy + Aether Lens) já resolve parte das lutas antes de precisar entrar.
- combo: Blink + Telekinesis: entra, levanta o alvo e, quando ele aterrissa, estuna todo mundo num raio de 300 a 375; Fade Bolt no mesmo alvo ou em outro perto emenda o salto de dano e a redução de ataque/dano de magia.
- fonte: constants_abilities.json (rubick_telekinesis, rubick_fade_bolt); dota-tier1/data/derivados/itens_chave.parquet (pos4)

### Situacionais
#### Eul's Scepter of Divinity (cyclone)
- porque: o ciclone de 2,5s abre o combo bem na cara do Fade Bolt ou do Telekinesis.
- detalhe: comprado em 13% dos jogos pos4 (27/215), normalmente perto dos 30:35.
- contra: inimigo que depende de um dispel ou de fugir do primeiro disable pra sobreviver ao resto do combo.
- combo: Eul's no alvo, time entra, Fade Bolt ou Telekinesis no instante em que ele aterrissa.
- fonte: items.json; dota-tier1/data/derivados/itens_chave.parquet (pos4)

#### Glimmer Cape (glimmer_cape)
- porque: invisibilidade curta e uma barreira mágica que absorve o próximo nuke em você ou no aliado-alvo.
- detalhe: comprado em 18% dos jogos (39/215), perto dos 31:07. Dá +20% de resistência mágica passiva; a ativa dá 5s de invisibilidade e barreira de até 375 de dano mágico.
- contra: nukers de burst mágico de alcance que focam o suporte antes da luta.
- fonte: items.json; dota-tier1/data/derivados/itens_chave.parquet (pos4)

#### Spirit Vessel (spirit_vessel)
- porque: corta 70% da regeneração e queima % da vida atual de quem se cura.
- detalhe: raro nesta posição (4%, 9/215), comprado perto dos 17:36.
- contra: heróis de autocura e sustain no time inimigo.
- fonte: items.json; dota-tier1/data/derivados/compras.parquet (pos4)

#### Lotus Orb (lotus_orb)
- porque: devolve a maioria das magias de alvo único pro inimigo que lançou.
- detalhe: raro (5%, 11/215), perto dos 32:40; dá 10 de armadura e bastante regen de vida/mana.
- contra: disables de alvo único que dependem de acertar o Rubick primeiro.
- fonte: items.json; dota-tier1/data/derivados/itens_chave.parquet (pos4)

#### Aghanim's Scepter (ultimate_scepter)
- porque: é o item de late game mais comprado depois do Shard, pra jogo que passa dos 35-40 min.
- detalhe: 25% dos jogos (53/215), perto dos 41:07. Como no Shard, as fontes consultadas não confirmam o texto exato do upgrade de Scepter do Rubick.
- contra: jogos longos, quando a recarga mais curta da Spell Steal vira a peça principal do combo.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos4): efeito do item: sem fonte confirmada

#### Aeon Disk (aeon_disk)
- porque: garante sobreviver a um burst de alvo único logo depois do combo, quando ele está exposto.
- detalhe: item tardio, 15% dos jogos (32/215), perto dos 43:08.
- contra: combos de nuke/execução de alvo único que matariam o Rubick no instante em que ele solta o próprio combo.
- fonte: items.json; dota-tier1/data/derivados/itens_chave.parquet (pos4)

#### Black King Bar (black_king_bar)
- porque: dispel básico e imunidade a magia por alguns segundos, pra quando o Rubick vira o alvo principal.
- detalhe: raríssimo nesta posição (3%, 6/215), perto dos 57:01.
- contra: combo de disable em cadeia que mataria o Rubick antes dele soltar o próprio; Spell Steal continua funcionando com o BKB ligado, porque fura imunidade a magia.
- fonte: items.json; constants_abilities.json (rubick_spell_steal); dota-tier1/data/derivados/itens_chave.parquet (pos4)

## Pos 5 (suporte duro)
- quando pegar: é o flex raro do herói no recorte (23/239 picks, 10%), com 39,1% de vitória (9/23, amostra pequena); a build muda de alcance pra iniciar sozinho pra visão e proteção do aliado: tem Gem of True Sight em 61% dos jogos (14/23) e quase não compra Aether Lens (17%, 4/23, contra 38% no pos4). Fonte: draft.csv; dota-tier1/data/derivados/compras.parquet.
- itens iniciais: tango, flask, ward_sentry, ward_observer, blood_grenade

### Build
#### Arcane Boots (arcane_boots)
- minuto: 13:18
- porque: mana pro time inteiro, prioridade maior aqui do que no pos4.
- detalhe: upgrade de bota dominante nesta posição (70%, 16/23, contra 35% no pos4).
- fonte: items.json; dota-tier1/data/derivados/compras.parquet (pos5, 23 jogos)

#### Pavise (pavise)
- minuto: 19:57
- porque: barreira de 250 de dano físico num aliado, barata (1.350), pra proteger o carry na troca.
- detalhe: comprado em 39% dos jogos (9/23); normalmente vira Solar Crest depois.
- fonte: items.json; dota-tier1/data/derivados/compras.parquet (pos5)

#### Solar Crest (solar_crest)
- minuto: 23:38
- porque: upgrade do Pavise, dá armadura e velocidade de ataque pro carry bater mais forte na troca.
- detalhe: comprado em 39% dos jogos (9/23); quase não aparece no pos4 (2%, 4/215).
- contra: linhas que dependem de ataque básico, dos dois lados.
- fonte: items.json; dota-tier1/data/derivados/compras.parquet (pos5)

#### Essence Distiller (essence_distiller)
- minuto: 16:44
- porque: armadura e atributos por pouco ouro, e a ativa cura aliado ou tranca inimigo escondido.
- detalhe: comprado em 48% dos jogos (11/23), menos comum aqui do que no pos4 (67%).
- fonte: items.json; dota-tier1/data/derivados/compras.parquet (pos5)

#### Gem of True Sight (gem)
- minuto: 32:00
- porque: visão verdadeira de 900 de raio pra qualquer aliado perto, contra quem joga escondido.
- detalhe: comprado em 61% dos jogos (14/23), quase ausente no pos4; cai no chão se o Rubick morrer e não pode ser destruído.
- contra: invisibilidade do time inimigo e wards inimigas perto do Roshan/Tormentor.
- fonte: items.json; dota-tier1/data/derivados/compras.parquet (pos5)

#### Force Staff (force_staff)
- minuto: 23:11
- porque: empurra 600 de distância pra tirar um aliado da morte ou entrar no alcance do combo.
- detalhe: comprado em 43% dos jogos (10/23).
- fonte: items.json; dota-tier1/data/derivados/itens_chave.parquet (pos5)

#### Aghanim's Shard (aghanims_shard)
- minuto: 35:47
- porque: mesma prioridade do pos4, só que mais tarde, porque esta posição recebe menos ouro do time.
- detalhe: comprado em 43% dos jogos (10/23); efeito exato não confirmado nas fontes consultadas (ver Pos 4).
- fonte: dota-tier1/data/derivados/compras.parquet (pos5): efeito do item: sem fonte confirmada

#### Blink Dagger (blink)
- minuto: 32:34
- porque: fecha a distância pro combo sem levar o primeiro golpe, mesmo papel do pos4.
- detalhe: comprado em 70% dos jogos (16/23), mas sai bem mais tarde que no pos4 (32:34 contra 28:43).
- combo: Blink + Telekinesis, igual ao pos4.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos5)

### Situacionais
#### Glimmer Cape (glimmer_cape)
- porque: invisibilidade e barreira mágica pra sair depois de proteger o carry ou de iniciar.
- detalhe: comprado em 26% dos jogos (6/23), perto dos 26:29.
- contra: times com dano mágico pesado ou detecção que revelariam a aproximação.
- fonte: items.json; dota-tier1/data/derivados/compras.parquet (pos5)

#### Aghanim's Scepter (ultimate_scepter)
- porque: mesma lógica do pos4, pra quando o jogo passa dos 45 min.
- detalhe: raro (13%, 3/23), perto dos 47:25.
- contra: jogos muito longos, em que o resto do time já carrega o custo de itens de suporte baratos.
- fonte: dota-tier1/data/derivados/compras.parquet (pos5): efeito do item: sem fonte confirmada

## Roshan
Rubick quase não dá o golpe final no Roshan: nas 239 partidas do recorte em que foi pego, as duas equipes juntas mataram o Roshan 548 vezes, mas só 238 desses abates foram do time do Rubick (a maior parte do resto ficou com o adversário, uma fração pequena sem time identificável no dado; fonte: objetivos.parquet cruzado com draft.csv). Dentro desses 238, o próprio Rubick deu o golpe final em só 4 (1,7%): nenhuma claramente solo (duas por volta dos 18-30 min, uma aos 29:47, uma bem tardia aos 104:33 numa partida muito longa). Ele também não aparece em nenhum dos dois datasets de Roshan solo locais, nem como solista nem entre os heróis cobertos pelo dataset "com suporte" (que lista carries de farm rápido como Ursa, Huskar e Spectre). O papel dele numa luta de Roshan é travar quem reage com Telekinesis/Fade Bolt ou roubar a magia certa com Spell Steal antes do abate, não dar dano no próprio Roshan.
