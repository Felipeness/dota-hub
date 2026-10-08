---
id: ficha-lion
titulo: "Lion"
heroi: Lion
patch: 7.41
posicoes: [4, 5]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/early_rosh_pro.json
- dota-roshan-solo/data/late_rosh_pro.json
- dota-tier1/data/draft.csv
- dota-tier1/data/jogadores_partida.csv
- dota-tier1/data/derivados/itens_chave.parquet
- dota-tier1/data/heroes.json
- https://api.opendota.com/api/heroes/26/itemPopularity
- https://dota2protracker.com/builds/lion-pos5-1
---

## Resumo
Lion é suporte de inteligência, feito pra travar e explodir um alvo: Earth Spike (ex-Impale) atordoa em linha, Hex transforma o inimigo numa fera inofensiva que não lança feitiço nenhum, Mana Drain seca a mana e ainda entrega dano com Finger of Death. No dataset local de pro play (dota-tier1), ele só aparece como suporte: 92 das 115 picks confirmadas são pos 4 (roaming, 80%) e 23 são pos 5 (suporte fixo, 20%); não há nenhuma pick dele como pos 1, 2 ou 3. No D2PT (7.41, recorte de 77 partidas em alto nível, 65 delas de pro) a página de pos 5 mostra 39% de vitória, amostra pequena e abaixo da média, então trate o número com cautela.

## Pos 4 (suporte de roaming)
- quando pegar: é o papel dominante do herói nas partidas pro rastreadas: 92 de 115 picks (80%) tinham Lion confirmado como pos 4 no draft (dota-tier1/draft.csv e jogadores_partida.csv). O combo de stun (Earth Spike) + disable total (Hex) funciona em qualquer lane que ele for roamar, não depende de farm pra funcionar.
- itens iniciais: branches, tango, blood_grenade, ward_dispenser (ward combinado observer+sentry), faerie_fire (itens de abertura mais comprados pelo herói no OpenDota itemPopularity, fase start_game_items; ward_sentry comprado separado aparece em seguida, enchanted_mango e ward_observer isolado são bem mais raros nesse recorte)

### Build
#### Tranquil Boots (tranquil_boots)
- porque: regen de vida sem gastar mana, pra aguentar harass na lane que ele for roamar e sustentar o HP enquanto farma só os pulls.
- detalhe: é a bota avançada mais comum do herói no OpenDota itemPopularity (fase early_game_items: comprada 50 vezes, dez vezes mais que a segunda mais registrada, Power Treads, com 5); o item genérico Boots of Speed aparece 93 vezes nessa fase mas isso é a bota ainda não evoluída, não uma terceira opção de bota final, e o dado não separa por posição.
- fonte: https://api.opendota.com/api/heroes/26/itemPopularity (early_game_items); items.json

#### Blink Dagger (blink)
- minuto: ~19
- porque: fecha os 1.200 de alcance que faltam pra ele entrar no raio de Hex (575-650) e Earth Spike (650) antes do inimigo reagir.
- detalhe: é praticamente universal no pos 4: aparece em 105 das 105 partidas pro locais com dado de item (mediana 19:09, variação de 14:52 a 39:29). Hex não perfura Black King Bar nem spell immunity (bkbpierce: No no constants_abilities.json), então o Blink serve pra garantir ângulo e timing antes do alvo ligar o BKB, não pra furar imunidade.
- combo: Blink + Hex (silencia e transforma o alvo numa fera sem habilidades, "Strong Dispels Only") + Earth Spike (atordoa 1.3-2.2s) trava o alvo o suficiente pra Finger of Death (600-850 de dano) terminar o kill.
- fonte: dota-tier1/derivados/itens_chave.parquet (105/105 partidas pos4 com dado); constants_abilities.json (lion_voodoo, lion_impale: cast range, bkbpierce, dispellable)

#### Force Staff (force_staff)
- minuto: ~29
- porque: reposiciona Lion pra fora do alcance de quem veio pra matá-lo, ou empurra um aliado pro combo antes do Blink recarregar.
- detalhe: comprado em 56 das 105 partidas pos4 (53%), mediana 29:04 (20:59 a 46:18).
- fonte: dota-tier1/derivados/itens_chave.parquet (56/105 partidas pos4)

### Situacionais
#### Shadow Blade (invis_sword)
- quando: comprado em 19 das 105 partidas pos4 (18%), mediana 41:18 (29:49 a 74:38).
- porque: dá a invisibilidade que falta pro roamer entrar no ângulo certo de Hex/Earth Spike sem ser visto chegando.
- contra: times sem detecção (Sentry, Gem, True Sight) na rota que ele costuma roamar; perde o valor contra quem já carrega wards de sentry ou itens de true sight.
- fonte: dota-tier1/derivados/itens_chave.parquet (19/105 partidas pos4); items.json

#### Aeon Disk (aeon_disk)
- quando: comprado em 14 das 105 partidas pos4 (13%), mediana 39:34 (33:45 a 59:58).
- porque: Lion é suporte de inteligência com pouca vida; o barrier automático dá uma segunda chance contra o primeiro burst que normalmente o mataria antes dele fechar o combo.
- contra: lineups de burst single-target (nuke + stun rápido) que tentam abater Lion assim que ele aparece pra iniciar.
- fonte: dota-tier1/derivados/itens_chave.parquet (14/105 partidas pos4); items.json

#### Eul's Scepter of Divinity (cyclone)
- quando: comprado em 9 das 105 partidas pos4 (9%), mediana 33:48 (27:53 a 54:43).
- porque: joga o próprio Lion ou um aliado pro alto por 2.5s, ganhando um respiro de invulnerabilidade pra escapar de um combo inimigo ou pra ganhar os 2.5s de setup antes do time virar.
- fonte: dota-tier1/derivados/itens_chave.parquet (9/105 partidas pos4); items.json

#### Black King Bar (black_king_bar)
- quando: comprado em 2 das 105 partidas pos4 (2%), mediana 50:34 (41:58 a 59:10).
- porque: segura Lion vivo contra dano físico enquanto ele tenta conectar Hex e Earth Spike num jogo mais longo, quando ele já não é só hit-and-run.
- contra: lineups de carry de ataque físico que focam Lion em luta aberta no late.
- fonte: dota-tier1/derivados/itens_chave.parquet (2/105 partidas pos4); items.json

## Pos 5 (suporte duro)
- quando pegar: 23 das 115 picks pro confirmadas (20%) foram pos 5 (dota-tier1/draft.csv e jogadores_partida.csv). No D2PT, a build "lion-pos5-1" tem 77 partidas de alto nível (65 de pro), 39% de vitória, 278 GPM e 388 XPM: amostra pequena e abaixo da média, então ele não é um pos 5 com taxa de vitória forte nesse recorte, mas é jogado.
- itens iniciais: branches, tango, blood_grenade, ward_dispenser (ward combinado observer+sentry), faerie_fire (mesma abertura agregada do herói, OpenDota itemPopularity)

### Build
#### Magic Wand (magic_wand)
- minuto: ~7
- porque: bloqueia o primeiro burst de dano baixo da lane sem gastar a mana que o Mana Drain não precisa mas o Hex e o Earth Spike precisam.
- detalhe: item mais comprado da build pos5 do D2PT (68,8% das partidas, 43,4% de vitória), timing mediano aos 7 min.
- fonte: https://dota2protracker.com/builds/lion-pos5-1

#### Tranquil Boots (tranquil_boots)
- minuto: ~8
- porque: regen de vida de graça pra aguentar a lane de suporte duro sem puxar farm da jungle.
- detalhe: 83,1% das partidas da build pos5 do D2PT, 35,9% de vitória, timing mediano aos 8 min.
- fonte: https://dota2protracker.com/builds/lion-pos5-1

#### Blink Dagger (blink)
- minuto: ~19
- porque: mesmo papel do pos 4, fechar distância pro combo Hex + Earth Spike antes do alvo reagir.
- detalhe: 76,6% das partidas da build pos5 do D2PT (49,1% de vitória, ~19 min); nas 7 partidas pro locais com dado de item como pos5, mediana 19:25 (15:28 a 29:58).
- combo: Blink + Hex (disable total, não perfura BKB) + Earth Spike (1.3-2.2s de stun) abre a janela pro Finger of Death.
- fonte: https://dota2protracker.com/builds/lion-pos5-1; dota-tier1/derivados/itens_chave.parquet (7/7 partidas pos5 com dado)

#### Glimmer Cape (glimmer_cape)
- minuto: ~26
- porque: invisibilidade curta mais resistência mágica, pra entrar no combo sem ser visto chegando e sair vivo se a luta virar.
- detalhe: 36,4% das partidas da build pos5 do D2PT (60,7% de vitória, ~27 min); nas partidas pro locais, 5 das 7 pos5 compraram, mediana 25:54 (21:00 a 33:24).
- fonte: https://dota2protracker.com/builds/lion-pos5-1; dota-tier1/derivados/itens_chave.parquet (5/7 partidas pos5)

### Situacionais
#### Aether Lens (aether_lens)
- quando: 10% das partidas da build pos5 do D2PT (50% de vitória, ~40 min); nas partidas pro locais, 3 das 7 pos5 compraram, mediana 41:37.
- porque: soma alcance de lançamento em todas as habilidades (Hex, Earth Spike, Mana Drain, Finger of Death já tem 900 de alcance base), deixando Lion acertar o combo de mais longe e mais seguro.
- fonte: https://dota2protracker.com/builds/lion-pos5-1; dota-tier1/derivados/itens_chave.parquet (3/7 partidas pos5); constants_abilities.json (cast range de cada habilidade)

#### Force Staff (force_staff)
- quando: 30% das partidas da build pos5 do D2PT (52% de vitória, ~31 min); nas partidas pro locais, 2 das 7 pos5 compraram, mediana 37:38.
- porque: reposiciona Lion ou um aliado pra fora de alcance, ou empurra alguém pro combo.
- fonte: https://dota2protracker.com/builds/lion-pos5-1; dota-tier1/derivados/itens_chave.parquet (2/7 partidas pos5)

#### Aghanim's Shard (aghanims_shard)
- quando: 8% das partidas da build pos5 do D2PT, mas com 83% de vitória (amostra pequena).
- porque: dado só pelo D2PT nesse recorte; sem detalhe oficial local sobre o efeito exato do Shard em Lion no 7.41, então trato só como item comprado, não como mecânica confirmada.
- fonte: https://dota2protracker.com/builds/lion-pos5-1

#### Eul's Scepter of Divinity (cyclone)
- quando: 8% das partidas da build pos5 do D2PT, 67% de vitória (amostra pequena).
- porque: mesmo uso do pos 4, ciclone em si mesmo pra sobreviver a um combo ou em um aliado pra ganhar os 2.5s de setup.
- fonte: https://dota2protracker.com/builds/lion-pos5-1; items.json

## Roshan
Sem dado de Roshan solo (Lion não aparece em nenhuma entrada de resumo_por_heroi.json, early_rosh_pro.json nem late_rosh_pro.json do dataset local de Roshan solo; como suporte de iniciação e não farmador, não é um perfil esperado de solo no Rosh).
