---
id: ficha-meepo
titulo: "Meepo"
heroi: Meepo
patch: 7.41
posicoes: [1]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- https://api.opendota.com/api/heroes/82/itemPopularity
- https://api.opendota.com/api/explorer
- https://liquipedia.net/dota2/Meepo
---

## Resumo

Meepo é um carry de Agilidade que se multiplica em até 5 corpos (Divided We Stand): cada clone soma dano e controle, mas se qualquer um morre, todos morrem junto. No recorte Tier 1 analisado (dota-tier1/draft.csv) ele apareceu 34 vezes no draft e foi banido 26 (76%); nas 8 vezes em que foi liberado e pickado, sempre como pos 1 (confirmado tanto pela heurística do OpenDota quanto pela leitura de lane do replay, 1:00-10:00), com 6 vitórias e 2 derrotas (amostra pequena). Em pub, uma consulta direta ao banco do OpenDota (explorer, hero_id=82, sem filtro de patch) mostra que ele também é muito jogado fisicamente na mid lane (2.032 partidas com lane_role=2 contra 912 em lane_role=1, e só 171 em offlane e 21 em jungle): a posição de draft é pos 1 (prioridade de farm do time), mas a lane física mais comum é a mid, provavelmente pra conseguir o nível 3 (1º clone extra) sozinho e sem depender de outra rota.

## Pos 1 (carry)

- quando pegar: é a única posição com dado real de pro no patch (8/8 picks do Tier 1 analisado, 6V-2D) e também a que mais vence em pub: 54,1% em 912 partidas com lane_role=1 no OpenDota (contra 50,4% em 2.032 partidas de lane_role=2), 663 de ouro por minuto e 800 de XP por minuto em média. Pegue quando quiser transformar 1 pick em 2 a 3 rotas de farm simultâneas a partir do nível 3.
- itens iniciais: tango, slippers (2x, pra montar 2 Wraith Band, um por clone)

### Build

#### Wraith Band (wraith_band)
- minuto: 2:04 (1º Wraith Band completo, mediana, 8 de 8 jogos do Tier 1 analisado) e 4:00 (2º Wraith Band completo, mediana, 6 de 8 jogos; nos outros 2 jogos o time só fechou 1 Wraith Band no total)
- porque: cada clone de Meepo tem inventário próprio; dois Wraith Band baratos nos primeiros minutos dão Agilidade, Armadura e Inteligência cheias (não diluídas) pros dois corpos que já existem antes do nível 3.
- detalhe: no replay de referência (match 8755676521), a sequência é slippers aos 0:49, 1º Wraith Band completo aos 1:59, 2º slippers aos 2:06, 2º Wraith Band completo aos 3:37, só depois disso vêm as botas. Os itens caros (Yasha, Scepter, Shard, Skadi) saem bem mais caros em dobro, então só entram num Meepo só; os baratos (stat items) é que valem duplicar cedo.
- fonte: dota-tier1/data/derivados/compras.parquet (1º Wraith Band completo 8/8, mediana 2:04; 2º Wraith Band completo 6/8, mediana 4:00); constants_abilities.json (meepo_divided_we_stand: "shares items with the main Meepo")

#### Power Treads (power_treads)
- minuto: 6:10 (mediana, 8 de 8 jogos do Tier 1 analisado)
- porque: +10 no atributo escolhido e +25 de velocidade de ataque; sai rápido porque Agilidade/Inteligência de item não dilui entre clones (só dano, velocidade de ataque, regen, mana burn e chance de proc diluem, pela própria descrição da Divided We Stand).
- fonte: dota-tier1/data/derivados/compras.parquet (8/8, mediana 6:10); items.json (power_treads attrib); constants_abilities.json (meepo_divided_we_stand)

#### Sange and Yasha (sange_and_yasha)
- minuto: 14:05 (mediana, 7 de 8 jogos; Yasha sozinho sai aos 10:37)
- porque: +16 Força e Agilidade, 16% de resistência de status e 30% de resistência a slow no Meepo que carrega o item, sem diluir (são atributos e percentuais, não os 5 tipos que a Divided We Stand divide entre clones).
- detalhe: os componentes (Ogre Axe e Blade of Alacrity) também abrem o caminho pro Aghanim's Scepter, que usa exatamente os mesmos dois itens.
- fonte: dota-tier1/data/derivados/compras.parquet (sange_and_yasha 7/8, mediana 14:05; yasha 7/8, 10:37; ogre_axe 8/8, 12:42); items.json (sange_and_yasha attrib)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 19:12 (mediana, 5 de 8 jogos)
- porque: destrava o MegaMeepo e o Fling, o combo que empilha todos os clones no Meepo principal e permite lançar um deles contra um inimigo.
- detalhe: MegaMeepo dura 25s, recarga 60s, dá 40% dos atributos dos outros Meepos pro principal (raio 600 pra montar); enquanto ativo, cada Earthbind solta uma rede extra por Meepo empilhado e o Poof causa 50% mais dano por Meepo empilhado. O Fling em si causa 225 de dano e arrasta o alvo a 900 de velocidade com slow. Scepter também soma +10 em todos os atributos e +175 de vida/mana, cheio em cada clone (não dilui).
- combo: MegaMeepo com 3-4 clones empilhados + Fling no iniciador inimigo, seguido de Earthbind (agora com redes extras) pra travar o resto do time que veio salvar.
- fonte: liquipedia.net/dota2/Meepo (seção Aghanim's: aghname0=MegaMeepo "new"); constants_abilities.json (meepo_megameepo: radius 600, duration 25, cd 60, stats_pct 40, poof_damage_factor 50; meepo_megameepo_fling: fling_damage 225, fling_movespeed 900); items.json (ultimate_scepter attrib); dota-tier1/data/derivados/compras.parquet (5/8, mediana 19:12)

#### Eye of Skadi (skadi)
- minuto: 23:30 (mediana, 7 de 8 jogos)
- porque: +35 em todos os atributos cheios por clone, e o slow do ataque gelado não é "chance de proc" nem dano direto, então não dilui: cada Meepo aplica o slow inteiro em quem ele acerta.
- detalhe: slow de -50% de velocidade de movimento e -20% de ataque em alvo à distância (-25%/-20% em corpo a corpo) por 3s a cada acerto, e -50% na regeneração/cura do alvo.
- fonte: dota-tier1/data/derivados/compras.parquet (skadi 7/8, mediana 23:30; ultimate_orb 7/8, 20:26; orb_of_frost 7/8, 22:00); items.json (skadi attrib); constants_abilities.json (meepo_divided_we_stand)

#### Aghanim's Shard (aghanims_shard)
- minuto: 28:16 (mediana, 7 de 8 jogos)
- porque: destrava Dig, que torna o Meepo principal invulnerável e oculto por 3s enquanto recupera 25% da vida máxima.
- detalhe: Dig é dispel básico (limpa debuffs dispelláveis antes de ficar invulnerável) com 0,3s de cast; serve pra salvar o corpo que mais importa (o principal, dono dos itens caros) quando uma troca vira pro lado errado.
- combo: Dig no Meepo principal assim que um combo de burst começa a acertar, enquanto os clones secundários (mais baratos, mais descartáveis) seguem lutando ou fogem via Poof.
- fonte: liquipedia.net/dota2/Meepo (seção Aghanim's Shard: shdname0=Dig); constants_abilities.json (meepo_petrify: duration 3, hp_restore 25%, DISPEL TYPE Basic Dispel); dota-tier1/data/derivados/compras.parquet (7/8, mediana 28:16)

### Situacionais

#### Blink Dagger (blink)
- minuto: 32:07 (mediana, 4 de 8 jogos)
- contra: linhas inimigas espalhadas ou com fuga rápida, quando o 1,5s de canalização do Poof dá tempo pro alvo escapar ou interromper.
- porque: reposiciona um clone quase instantaneamente (sem canalização), contra o 1,5s que o Poof exige.
- detalhe: pela Divided We Stand ("cooldowns são independentes mas itens compartilham recarga entre os Meepos"), mesmo que todo clone carregue um Blink, só 1 pode ser usado por vez: escolha o clone que vai iniciar antes de comprar.
- fonte: dota-tier1/data/derivados/compras.parquet (4/8, mediana 32:07); constants_abilities.json (meepo_divided_we_stand; meepo_poof cast_duration 1.5); items.json (blink attrib)

#### Disperser (disperser)
- minuto: 25:03 (mediana, 2 de 8 jogos; componente Diffusal Blade aparece sozinho antes, em 2/8, aos 13:15)
- contra: heróis de ilusão (Naga Siren, Terrorblade, Phantom Lancer, Spectre): a queima de 40 de mana por acerto vira dano direto 1 pra 1 em quem não tem mana pra perder, e ilusões geralmente têm o pool zerado.
- detalhe: +40 Agilidade e +10 Inteligência cheios por clone, mais a purga (remove buffs do inimigo/debuffs do próprio Meepo) com 3s de raiz no purge.
- fonte: dota-tier1/data/derivados/compras.parquet (disperser 2/8, mediana 25:03; diffusal_blade 2/8, 13:15); items.json (disperser attrib: mana_burn 40, damage_per_burn 1.0, purge_root_duration 3.0); constants_abilities.json (meepo_divided_we_stand)

#### Butterfly (butterfly)
- minuto: 31:20 (mediana, 3 de 8 jogos)
- contra: carries ou offlaners de ataque físico repetido (ex. Phantom Assassin, Juggernaut, Spectre): 35% de evasão não dilui entre clones (é percentual, não um dos 5 tipos que a Divided We Stand divide), então cada corpo evita 35% dos golpes sozinho.
- porque: morte de 1 clone mata todos (Divided We Stand); evasão barata reduz dano recebido em cada corpo sem diluir.
- fonte: dota-tier1/data/derivados/compras.parquet (3/8, mediana 31:20); items.json (butterfly attrib: bonus_evasion 35); constants_abilities.json (meepo_divided_we_stand: "If any Meepo dies, they all die")

## Roshan

Só 1 solo registrado no dataset local (jogador "yuma", partida tardia): aconteceu aos 35:38, com o Meepo no nível 24, e o inventário era quase idêntico ao build acima montado de forma independente a partir do Tier 1 (Aghanim's Scepter, Sange and Yasha, Eye of Skadi, Power Treads, Wraith Band e Disperser), o que bate com os dois dados concordando sobre o core do herói. O Meepo saiu com a aegis (1/1) e, nos 3 minutos seguintes, o time dele derrubou uma torre (1/1), mas havia um aliado a menos de 2.500 de distância no início do solo (1/1), então não foi um 1v5 isolado longe do time, e sim um solo com apoio próximo enquanto o resto fazia outra coisa no mapa. Amostra de 1 jogo: não dá pra tirar um minuto ou nível medianos confiáveis, só este ponto único.

Fonte: C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
