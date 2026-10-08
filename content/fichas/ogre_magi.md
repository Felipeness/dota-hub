---
id: ficha-ogre_magi
titulo: "Ogre Magi"
heroi: Ogre Magi
patch: 7.41
posicoes: [5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/jogadores_partida.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- https://api.opendota.com/api/heroes/84/itemPopularity
- https://dota2protracker.com/m/hero/Ogre%20Magi
- https://www.gosugamers.net/dota2/news/78166-dota-2-patch-7-41-removes-facets-and-adds-nine-new-items
---
## Resumo
Ogre Magi é suporte durão de disable e buff em área: Fireblast atordoa por 1,2s, Ignite queima e atrasa (-25% de velocidade) e Bloodlust acelera o carry; Multicast pode repetir qualquer um desses feitiços de graça, com chance que cresce 1% a cada 16 de Força (innate Dumb Luck: toda a mana e a regen de mana dele vêm de Força, não de Inteligência, que é fixa em 0). No patch 7.41 ele é jogado quase só na posição 5: as 5 picks pro confirmadas no recorte de Tier 1 analisado (Team Yandex e PARIVISION) foram todas pos 5 (draft.csv e jogadores_partida.csv concordando), e o dota2protracker (MMR 7000+, janela rolante de dias recentes, por isso os números mudam a cada consulta) também mostra o papel Hard Support como o de volume: 54,7% das partidas do herói foram pos 5 (1.805 de 3.300), com 48,2% de vitória nessa posição. As facets foram removidas no patch 7.41 (Gosugamers), então hoje o kit dele é fixo: o Scepter troca o Fireblast por "Unrefined Fireblast" (dano escalando com Força, custo em % da mana atual) e o Shard dá o Fire Shield (escudo que devolve bola de fogo).

## Pos 5 (suporte duro)
- quando pegar: é a única posição com dado real no 7.41. As 5 picks pro confirmadas no recorte de Tier 1 (dota-tier1/draft.csv, coluna posicao, e jogadores_partida.csv, posicao_replay) foram todas pos 5. O combo Fireblast (stun) + Ignite (slow em área) + Bloodlust (buff) não depende de farm, e a Força alta do Dumb Luck já dá vida e mana de suporte durão sem item caro de sustain.
- itens iniciais: tango, flask, blood_grenade, ward_observer, ward_sentry, branches

### Build
#### Boots of Speed (boots)
- minuto: 6:24
- porque: mobilidade pra chegar a tempo do Fireblast e acompanhar o pull, sem gastar ouro upando a bota ainda.
- detalhe: comprado em 5 das 5 partidas pro locais com dado de item, mediana 6:24 (5:22 a 7:10). É o único item idêntico nas 5 partidas analisadas.
- fonte: dota-tier1/data/derivados/compras.parquet (5/5 partidas)

#### Soul Ring (soul_ring)
- minuto: 11:23 a 13:03
- porque: converte vida, que o Dumb Luck já enche com Força, em 170 de mana instantânea pra emendar feitiço sem esperar regen.
- detalhe: aparece em pelo menos 3 das 5 partidas pro locais (recipe ou item completo), entre 11:23 e 13:03. Monta de Ring of Protection + 2 Gauntlets of Strength.
- combo: Soul Ring + Bloodlust no carry + Fireblast no alvo: a vida gasta no Soul Ring volta pela regen de vida que a própria Força alta do Ogre já dá (mecânica padrão de atributo, não o Dumb Luck, que só converte Força em mana).
- fonte: dota-tier1/data/derivados/compras.parquet (3/5 partidas); items.json; heroStats.json

#### Hand of Midas (hand_of_midas)
- minuto: 21:14 a 23:19
- porque: transforma tempo gasto plantando ward em ouro e ataque extra, sem roubar last hit do carry.
- detalhe: comprado em 3 das 5 partidas pro locais (mediana 21:35); é o 2º item mais citado do herói na fase mid_game do OpenDota itemPopularity (35 compras).
- fonte: dota-tier1/data/derivados/compras.parquet (3/5 partidas); https://api.opendota.com/api/heroes/84/itemPopularity (mid_game_items)

#### Aghanim's Shard (aghanims_shard)
- minuto: 21:58 a 41:08
- porque: dá o Fire Shield, escudo que absorve 85% dos 3 próximos ataques e devolve uma bola de fogo em quem bateu.
- detalhe: comprado em 2 das 5 partidas pro locais, com variação grande (21:58 e 41:08). constants_abilities.json confirma o efeito (ogre_magi_smash: damage_absorb_pct 85%, damage 160, 3 attacks).
- combo: com Multicast (1% a cada 16 de Força), o mesmo cast de Fire Shield pode cair em mais de um aliado perto (multicast_fireshield_aoe: raio 1000), protegendo dois heróis de um clique só.
- fonte: dota-tier1/data/derivados/compras.parquet (2/5 partidas); constants_abilities.json (ogre_magi_smash); constants_hero_abilities.json

#### Blink Dagger (blink)
- minuto: 25:50 a 28:57
- porque: fecha os 1.200 de alcance que faltam pra travar o Fireblast (alcance 525, stun 1,2s) antes do inimigo reagir.
- detalhe: comprado em 2 das 5 partidas pro locais (25:50 e 28:57); aparece 10 vezes na fase mid_game do OpenDota itemPopularity.
- combo: com Multicast, o mesmo Fireblast pode repetir no mesmo alvo a cada 0,6s (multicast_delay), dobrando dano e reaplicando o stun sem gastar mais mana.
- fonte: dota-tier1/data/derivados/compras.parquet (2/5 partidas); constants_abilities.json (ogre_magi_fireblast, ogre_magi_multicast); https://api.opendota.com/api/heroes/84/itemPopularity (mid_game_items)

#### Scythe of Vyse (sheepstick)
- minuto: 35:50 a 54:38 (mediana 41:11)
- porque: Hex de 2,8s transforma o maior ameaça do time inimigo numa fera que não ataca nem lança feitiço.
- detalhe: comprado em 3 das 5 partidas pro locais; tem 15 citações na fase late_game do OpenDota itemPopularity (atrás do Glimmer Cape, que lidera com 20). Monta de Mystic Staff + Tiara of Selemene.
- combo: Hex é instantâneo e destrói ilusões (bom contra Manta/imagens), travando o alvo enquanto o Multicast de Fireblast/Ignite ainda está caindo no resto do time.
- fonte: dota-tier1/data/derivados/compras.parquet (3/5 partidas); https://api.opendota.com/api/heroes/84/itemPopularity (late_game_items); items.json

### Situacionais
#### Arcane Boots (arcane_boots)
- quando: 2 das 5 partidas pro locais (11:17 e 11:26), como alternativa ao Soul Ring.
- porque: Replenish devolve 150 de mana pra todo mundo perto, sustentando o time em vez de só o próprio Ogre.
- contra: comps que gastam mais mana que vida; perde valor se o Ogre já não tem HP de sobra pra pagar o Soul Ring de qualquer forma.
- fonte: dota-tier1/data/derivados/compras.parquet (2/5 partidas); items.json

#### Aether Lens (aether_lens)
- quando: não apareceu nas 5 partidas pro locais, mas tem 12 citações na fase mid_game do OpenDota itemPopularity; pegue contra iniciação de curto alcance.
- porque: soma alcance de lançamento em toda habilidade unit-target do Ogre, deixando ele acertar o combo de mais longe.
- contra: iniciação em salto curto (gap closer de contato) que só funciona se o Ogre estiver perto; o Aether Lens não ajuda nesse caso.
- fonte: https://api.opendota.com/api/heroes/84/itemPopularity (mid_game_items); constants_abilities.json (abilitycastrange de ogre_magi_fireblast, ogre_magi_ignite, ogre_magi_bloodlust)

#### Glimmer Cape (glimmer_cape)
- quando: não apareceu nas 5 partidas pro locais, mas é o item mais citado da fase late_game do OpenDota itemPopularity (20 compras, o topo da lista).
- porque: depois de 0,5s de delay, dá invisibilidade e uma barreira que absorve até 375 de dano mágico por 5s.
- contra: burst mágico de alvo único em cima do Ogre ou do carry que ele protege; não ajuda contra dano físico nem contra Sentry/Gem/Dust.
- fonte: https://api.opendota.com/api/heroes/84/itemPopularity (late_game_items); items.json

#### Force Staff (force_staff)
- minuto: 36:40
- quando: 1 das 5 partidas pro locais, comprado aos 36:40.
- porque: empurra 600 de distância na direção que o alvo olha, de graça e sem precisar acertar nada.
- contra: perseguição ou canalização de curta distância em cima de um aliado que só precisa de um empurrão pra escapar.
- fonte: dota-tier1/data/derivados/compras.parquet (1/5 partidas); https://api.opendota.com/api/heroes/84/itemPopularity (late_game_items, 9 compras); items.json

#### Lotus Orb (lotus_orb)
- quando: não apareceu nas 5 partidas pro locais, mas tem 6 citações na fase late_game do OpenDota itemPopularity.
- porque: Echo Shell devolve a maioria dos feitiços de alvo único pro próprio lançador e ainda faz dispel básico.
- contra: hex, stun de projétil e outros disables de alvo único jogados no Ogre ou no carry que ele protege; não funciona contra feitiço em área.
- fonte: https://api.opendota.com/api/heroes/84/itemPopularity (late_game_items); items.json

#### Black King Bar (black_king_bar)
- quando: não apareceu nas 5 partidas pro locais e é raro no OpenDota itemPopularity (ausente do mid_game, só 2 citações no late_game).
- porque: dá imunidade a feitiço negativo por 9/8/7s, segurando o Ogre vivo tempo o bastante pra ele lançar os próprios feitiços.
- contra: comps de disable múltiplo focadas em travar o Ogre assim que ele aparece; amostra pequena, item raro na prática pra essa posição.
- fonte: https://api.opendota.com/api/heroes/84/itemPopularity (mid_game_items; late_game_items); items.json

#### Aghanim's Scepter (ultimate_scepter)
- quando: não apareceu nas 5 partidas pro locais, mas tem 10 citações na fase mid_game do OpenDota itemPopularity; pegue em jogo que estica muito e o resto do core já está pronto.
- porque: troca o Fireblast normal por "Unrefined Fireblast", dano escalando com Força em vez de dano fixo.
- detalhe: constants_abilities.json confirma: base_damage 150, str_multiplier 1.5, custo 35% da mana atual (scepter_mana), mesmo stun de 1,2s.
- fonte: https://api.opendota.com/api/heroes/84/itemPopularity (mid_game_items); constants_abilities.json (ogre_magi_unrefined_fireblast)

## Roshan
Sem dado de Roshan solo (Ogre Magi não aparece em nenhuma entrada de resumo_por_heroi.json do dataset local de Roshan solo; suporte durão sem dano físico de ataque não é um perfil esperado de solo no Rosh).
