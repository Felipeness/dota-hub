---
id: ficha-techies
titulo: "Techies"
heroi: Techies
patch: 7.41
posicoes: [4, 5]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-tier1/data/draft.csv
- dota-tier1/data/derivados/jogadores_replay.parquet
- dota-tier1/data/derivados/itens_chave.parquet
- dota-tier1/data/derivados/compras.parquet
- dota-roshan-solo/data/solos.json
- https://api.opendota.com/api/benchmarks?hero_id=105
---

## Resumo

Techies é o nuker/disabler de controle de área do 7.41: planta Proximity Mines invisíveis, poka com Sticky Bomb e Reactive Tazer de longe e se arremessa em cima do inimigo com Blast Off, trocando presença física e farm por zoneamento e burst à distância. No Atlas Tier 1 (124 picks em partidas Tier 1/fronteira, vários patches do 7.41) ele só aparece como suporte: 69 picks de pos 4 (34,8% de vitória) e 53 de pos 5 (45,3%), contra só 2 picks de pos 3 (sem dado real). No OpenDota global ele é raríssimo em pro play (pro_pick 25, pro_win 11), mas respeitado no draft: 53 bans para 124 picks nesse mesmo recorte. O perfil de farm confirma o papel: mediana de GPM de 425 (percentil 50, benchmarks OpenDota), de suporte que vive de mina e visão, não de last hit.

## Pos 4 (suporte de roaming)

- quando pegar: é a posição mais fraca das duas no Atlas Tier 1 (34,8% de vitória em 69 picks), geralmente pego quando o time quer alguém livre pra rodar o mapa minando rota de rotação e controlando visão em vez de ficar numa lane fixa; não espere kill fácil, o valor dele aqui é territorial.
- itens iniciais: tango, ward_sentry, flask, ward_observer, magic_stick, blood_grenade

### Build

#### Arcane Boots (arcane_boots)
- minuto: 13:45
- porque: repõe 150 de mana pro time e sustenta o próprio gasto alto de feitiço do Techies.
- detalhe: Proximity Mines custa 110 a 170 de mana, Sticky Bomb 100 a 145 e Blast Off 100 a 175 (constants_abilities.json); sem essa reposição o Techies fica sem feitiço rápido demais. A Replenish (raio 1200) também enche o time antes de engajar. Tranquil Boots é a alternativa mais barata (900, cura 250 em 20s) quando o time já tem mana resolvida por outro suporte; nesse recorte ela aparece em 22 de 66 jogos (33%).
- fonte: dota-imortal/data/opendota/items.json (arcane_boots); constants_abilities.json (custos de mana das habilidades); dota-tier1/data/derivados/compras.parquet (Atlas Tier1, pos4, 66 jogos, mediana 13:45, 35/66 com Arcane Boots, 22/66 com Tranquil Boots)

#### Glimmer Cape (glimmer_cape)
- minuto: 23:40
- porque: invisibilidade + barreira de até 375 de dano salvam o Techies ou um aliado no instante em que mais precisam, já que o herói não tem nenhuma fuga própria.
- detalhe: 0,5s de delay pra ativar, 5s de invisibilidade e barreira; pode ser lançado durante canalização. Serve também pra desaparecer antes de plantar uma mina sem ser visto chegando.
- contra: nuke de alvo único cedo na partida (a barreira absorve até 375 de dano mágico, mas não impede stun nem root).
- fonte: dota-imortal/data/opendota/items.json (glimmer_cape); dota-tier1/data/derivados/itens_chave.parquet (Atlas Tier1, pos4, 64 jogos, mediana 23:40, 20/64 = 31%)

#### Aether Lens (aether_lens)
- minuto: 25:26
- porque: +225 de alcance de conjuração deixa plantar mina, jogar Sticky Bomb e disparar Tazer de mais longe, fora do alcance de resposta do inimigo.
- detalhe: Sticky Bomb já tem 1000 de alcance de conjuração e Reactive Tazer 600 (constants_abilities.json); com o Lens isso sobe pra 1225 e 825. É o item mais comprado do build de pos 4 nesse recorte (25 de 64 jogos, 39%), na frente de qualquer outro.
- combo: o alcance extra deixa acertar o Sticky Bomb de uma distância em que o inimigo nem viu o cast saindo.
- fonte: dota-imortal/data/opendota/items.json (aether_lens); constants_abilities.json (abilitycastrange de techies_sticky_bomb e techies_reactive_tazer); dota-tier1/data/derivados/itens_chave.parquet (pos4, 64 jogos, mediana 25:26, 25/64 = 39%)

#### Force Staff (force_staff)
- minuto: 29:52
- porque: empurra 600 de distância pra tirar um aliado de perigo ou pra forçar um inimigo isolado pra cima de uma mina já plantada.
- detalhe: 2200 de ouro, +175 de vida e +10 de inteligência; o efeito funciona em qualquer unidade, inclusive inimiga.
- combo: empurrar um inimigo isolado pra dentro de um campo de Proximity Mines já plantado fecha o combo sem gastar mais feitiço.
- fonte: dota-imortal/data/opendota/items.json (force_staff); dota-tier1/data/derivados/itens_chave.parquet (pos4, 64 jogos, mediana 29:52, 24/64 = 37,5%)

#### Mystic Staff (mystic_staff)
- minuto: 38:47
- porque: +25 de inteligência pura (mais mana e dano mágico) sem travar o build num item caro, ponte natural pro Sheepstick ou Octarine Core.
- detalhe: 2800 de ouro, só atributo, sem habilidade ativa; é um item de passagem pros itens de 4-5k do fim de build.
- fonte: dota-imortal/data/opendota/items.json (mystic_staff); dota-tier1/data/derivados/itens_chave.parquet (pos4, 64 jogos, mediana 38:47, 22/64 = 34%)

### Situacionais

#### Scythe of Vyse (sheepstick)
- minuto: 38:58
- porque: Hex de 2,8s silencia, desarma e trava o alvo em 140 de velocidade bem antes de uma troca decisiva.
- detalhe: destrói ilusões na hora; dá +30 de inteligência e +8,5 de regeneração de mana, que ajuda a sustentar o custo alto das próprias habilidades.
- contra: heróis que dependem de canalizar, atacar ou se mover pra escapar ou curar (o Hex aplica silence, mute, disarm e a raiz dos 140 de velocidade ao mesmo tempo); serve pra travar um blink ou uma canalização antes que ela aconteça.
- fonte: dota-imortal/data/opendota/items.json (sheepstick); dota-tier1/data/derivados/itens_chave.parquet (pos4, 64 jogos, mediana 38:58, 17/64 = 27%)

#### Eul's Scepter of Divinity (cyclone)
- minuto: 22:48
- porque: 2,5s de invulnerabilidade salvam um aliado de um combo ou isolam um inimigo pra detonar mina ou Sticky Bomb nele assim que ele cai.
- detalhe: solta com Dispel básico no alvo e 50 de dano mágico na queda; dá também +10 de inteligência e +20 de velocidade de movimento.
- combo: jogar o Cyclone num inimigo que está sobre um campo de Proximity Mines já plantado: ele cai exatamente ali e ativa a mina na queda.
- fonte: dota-imortal/data/opendota/items.json (cyclone); dota-tier1/data/derivados/itens_chave.parquet (pos4, 64 jogos, mediana 22:48, 16/64 = 25%)

#### Solar Crest (solar_crest)
- minuto: 22:33
- porque: barreira de 350 de dano físico, armadura e velocidade de ataque pro carry do time segurar a troca que o Techies iniciou.
- detalhe: só dá o bônus completo se usado num aliado (não funciona em si mesmo); 2575 de ouro, item de suporte puro sem interação direta com as habilidades do herói, cobrindo a fragilidade dele com sobrevivência pro resto do time.
- fonte: dota-imortal/data/opendota/items.json (solar_crest); dota-tier1/data/derivados/itens_chave.parquet (pos4, 64 jogos, mediana 22:33, 14/64 = 22%)

#### Blink Dagger (blink)
- minuto: 31:23
- porque: aproxima pra plantar mina ou acertar o Tazer num alvo fora de alcance, mas é arriscado porque Techies tem só 120 de vida base.
- detalhe: 1200 de alcance (clamp efetivo de 960) e trava 3s depois de levar dano de herói; usado mais pra reposicionar o controle de área do que pra entrar em luta corpo a corpo, já que o herói não tem forma própria de sair de novo.
- fonte: dota-imortal/data/opendota/items.json (blink); dota-tier1/data/derivados/itens_chave.parquet (pos4, 64 jogos, mediana 31:23, 13/64 = 20%)

#### Guardian Greaves (guardian_greaves)
- minuto: 25:46
- porque: Mend (Dispel básico + cura em área) limpa debuffs do time inteiro bem na hora de entrar na troca que o Techies armou.
- detalhe: 4450 de ouro, aura de regeneração de vida e mana em raio 1200; rende mais em comps que já têm vários suportes pra aproveitar o raio.
- fonte: dota-imortal/data/opendota/items.json (guardian_greaves); dota-tier1/data/derivados/itens_chave.parquet (pos4, 64 jogos, mediana 25:46, 10/64 = 16%)

#### Octarine Core (octarine_core)
- minuto: 39:50
- porque: 25% de redução de recarga deixa minar e plantar Sticky Bomb de novo bem mais rápido, girando o controle de área.
- detalhe: 4900 de ouro, +450 de vida e mana; só compensa num jogo bem longo, onde o Techies já tem vida e mana de sobra e quer é repetir feitiço mais vezes.
- fonte: dota-imortal/data/opendota/items.json (octarine_core); dota-tier1/data/derivados/itens_chave.parquet (pos4, 64 jogos, mediana 39:50, 10/64 = 16%)

#### Wind Waker (wind_waker)
- minuto: 42:29
- porque: é a única fuga própria real do herói, já que nenhuma skill do kit desloca ele pra longe do perigo (Blast Off empurra PARA DENTRO da luta, não pra fora).
- detalhe: versão do Cyclone que pode ser usada em si mesmo e movida a 300 de velocidade enquanto o alvo fica invulnerável por 2,5s; 6800 de ouro, +35 de inteligência.
- contra: combos de iniciação em cadeia onde o Techies seria a primeira morte (ele se tira da luta por 2,5s de invulnerabilidade).
- fonte: dota-imortal/data/opendota/items.json (wind_waker); constants_hero_abilities.json (lista de habilidades de Techies, sem nenhuma de deslocamento defensivo); dota-tier1/data/derivados/itens_chave.parquet (pos4, 64 jogos, mediana 42:29, 6/64 = 9%)

#### Lotus Orb (lotus_orb)
- minuto: 35:56
- porque: devolve pro inimigo o próprio feitiço de alvo único que seria usado pra matar o Techies primeiro.
- detalhe: Echo Shell dura 5s e reflete a maioria dos feitiços direcionados; 3850 de ouro, +10 de armadura.
- contra: heróis com um disable forte de alvo único (hex, stun de alvo, silence) que costumam abrir a luta matando o suporte antes do resto.
- fonte: dota-imortal/data/opendota/items.json (lotus_orb); dota-tier1/data/derivados/itens_chave.parquet (pos4, 64 jogos, mediana 35:56, 6/64 = 9%)

## Pos 5 (suporte duro)

- quando pegar: é a posição melhor das duas no Atlas Tier 1 (45,3% de vitória em 53 picks, 10,5 pontos acima da pos 4); pegue quando o time não precisa dele pra farmar nada e o plano é só visão e minar áreas-chave (rio, trilhas de rotação, fosso do Roshan), sem a pressão de last hit de um suporte comum.
- itens iniciais: tango, ward_sentry, flask, ward_observer, ward_dispenser, blood_grenade, clarity, magic_stick

### Build

#### Arcane Boots (arcane_boots)
- minuto: 13:36
- porque: sustenta o próprio gasto alto de mana das habilidades e ainda doa mana pro time.
- detalhe: é quase unânime nessa posição (52 de 58 jogos, 90%), muito mais do que na pos 4: sem farm nenhum pra upar as próprias botas, Arcane é o jeito mais barato de não secar de mana plantando mina o jogo inteiro.
- fonte: dota-imortal/data/opendota/items.json (arcane_boots); dota-tier1/data/derivados/compras.parquet (Atlas Tier1, pos5, 58 jogos, mediana 13:36, 52/58 = 90%)

#### Solar Crest (solar_crest)
- minuto: 23:19
- porque: é o item mais comprado da pos 5 nesse recorte (26 de 56, 46%): barato, sem combo pra errar, dá sobrevivência pro carry na hora que o time entra na troca que o Techies armou.
- detalhe: 2575 de ouro; +5 de armadura, +60 de velocidade de ataque, +15% de movimento e barreira de 350 pro aliado alvo por 7s. Não precisa de setup nenhum, só clicar no herói certo.
- fonte: dota-imortal/data/opendota/items.json (solar_crest); dota-tier1/data/derivados/itens_chave.parquet (pos5, 56 jogos, mediana 23:19, 26/56 = 46%)

#### Glimmer Cape (glimmer_cape)
- minuto: 26:56
- porque: invisibilidade + barreira salvam o próprio suporte duro, que não tem nenhuma fuga própria, ou protegem quem vai detonar a mina.
- detalhe: 0,5s de delay, 5s de invisibilidade e barreira de até 375; pode ser lançado durante canalização.
- contra: nuke de alvo único cedo na partida.
- fonte: dota-imortal/data/opendota/items.json (glimmer_cape); dota-tier1/data/derivados/itens_chave.parquet (pos5, 56 jogos, mediana 26:56, 21/56 = 37,5%)

#### Force Staff (force_staff)
- minuto: 29:20
- porque: empurra 600 de distância pra salvar aliado ou empurrar inimigo pra cima de mina já plantada, igual na pos 4.
- detalhe: 2200 de ouro, +175 de vida e +10 de inteligência; funciona em unidade aliada ou inimiga.
- combo: empurrar um inimigo isolado pra dentro de um campo de Proximity Mines fecha o combo sem gastar feitiço extra.
- fonte: dota-imortal/data/opendota/items.json (force_staff); dota-tier1/data/derivados/itens_chave.parquet (pos5, 56 jogos, mediana 29:20, 24/56 = 43%)

#### Guardian Greaves (guardian_greaves)
- minuto: 31:58
- porque: Mend tira debuff do time inteiro e cura em área bem na hora da troca, natural pra quem já segue o time inteiro em vez de farmar sozinho.
- detalhe: 4450 de ouro, aura de regeneração de vida e mana em raio 1200.
- fonte: dota-imortal/data/opendota/items.json (guardian_greaves); dota-tier1/data/derivados/itens_chave.parquet (pos5, 56 jogos, mediana 31:58, 12/56 = 21%)

### Situacionais

#### Mystic Staff (mystic_staff)
- minuto: 39:24
- porque: +25 de inteligência pura, mesma lógica da pos 4, ponte pro Sheepstick ou Aeon Disk.
- detalhe: 2800 de ouro, só atributo, sem habilidade ativa.
- fonte: dota-imortal/data/opendota/items.json (mystic_staff); dota-tier1/data/derivados/itens_chave.parquet (pos5, 56 jogos, mediana 39:24, 10/56 = 18%)

#### Blink Dagger (blink)
- minuto: 36:08
- porque: aproxima pra detonar mina ou Tazer num alvo fora de alcance; mais arriscado ainda na pos 5 porque o herói raramente tem outro item de vida junto.
- detalhe: 1200 de alcance (clamp 960), trava 3s após dano de herói.
- fonte: dota-imortal/data/opendota/items.json (blink); dota-tier1/data/derivados/itens_chave.parquet (pos5, 56 jogos, mediana 36:08, 9/56 = 16%)

#### Scythe of Vyse (sheepstick)
- minuto: 39:40
- porque: Hex trava o alvo mais perigoso do time inimigo antes de uma troca, igual na pos 4, mas chega mais tarde porque o farm de pos 5 é menor.
- detalhe: silencia, desarma e muda o alvo pra 140 de velocidade por 2,8s; destrói ilusões na hora.
- contra: heróis que dependem de canalizar, atacar ou se mover pra escapar ou curar.
- fonte: dota-imortal/data/opendota/items.json (sheepstick); dota-tier1/data/derivados/itens_chave.parquet (pos5, 56 jogos, mediana 39:40, 8/56 = 14%)

#### Aether Lens (aether_lens)
- minuto: 35:19
- porque: mesmo ganho de alcance de conjuração da pos 4, mas menos prioritário aqui porque o Solar Crest/Force Staff cobrem a sobrevivência primeiro.
- detalhe: +225 de alcance de cast; some com Sticky Bomb (1000 de alcance) e Reactive Tazer (600).
- fonte: dota-imortal/data/opendota/items.json (aether_lens); constants_abilities.json; dota-tier1/data/derivados/itens_chave.parquet (pos5, 56 jogos, mediana 35:19, 7/56 = 12,5%)

#### Eul's Scepter of Divinity (cyclone)
- minuto: 36:45
- porque: isola um inimigo pra cair sobre uma mina, ou salva um aliado, igual na pos 4.
- detalhe: 2,5s de invulnerabilidade, Dispel básico ao soltar, 50 de dano mágico na queda.
- combo: inimigo ciclonado cai sobre Proximity Mines já plantadas e ativa a mina na queda.
- fonte: dota-imortal/data/opendota/items.json (cyclone); dota-tier1/data/derivados/itens_chave.parquet (pos5, 56 jogos, mediana 36:45, 6/56 = 10,7%)

#### Vladmir's Offering (vladmir)
- minuto: 31:47
- porque: aura de lifesteal, dano e armadura pro time inteiro, item mais fácil de justificar quando o Techies não está gastando ouro em sobrevivência própria.
- detalhe: 2200 de ouro, 20% de lifesteal, +18% de dano, +2 de armadura e +1 de regeneração de mana em raio 1200.
- fonte: dota-imortal/data/opendota/items.json (vladmir); dota-tier1/data/derivados/itens_chave.parquet (pos5, 56 jogos, mediana 31:47, 6/56 = 10,7%)

#### Aeon Disk (aeon_disk)
- minuto: 50:18
- porque: dispel forte automático quando o Techies cai abaixo de 70% de vida, exatamente o perfil de herói que morre primeiro num combo com 1 golpe certo.
- detalhe: 3000 de ouro; +250 de vida e +300 de mana; o Combo Breaker zera dano recebido e dado por 2,5s e dá 75% de resistência a efeitos de status, mas só contra dano causado por jogador.
- contra: combos de burst de um único herói (não ajuda contra dano de torre, Roshan ou DoT contínuo).
- fonte: dota-imortal/data/opendota/items.json (aeon_disk); dota-tier1/data/derivados/itens_chave.parquet (pos5, 56 jogos, mediana 50:18, 4/56 = 7%)

## Roshan

Techies nunca é o herói creditado por um abate solo nos replays locais (zero vezes como protagonista de solo_puro, solo_ajuda_curta ou solo_com_suporte): ele aparece em 144 mortes de Roshan desse recorte, mas a maior parte (122) é só presença num abate classificado como "time"; nas outras 22 ele contribui com dano residual de mina num abate creditado a outro herói, classificado como finalização (11), solo com suporte (8) ou solo com ajuda curta (3): nunca como o herói principal dessas categorias. Quando presente, fica no fosso uma mediana de só 7s (contra os 15-40s de quem fica trocando corpo a corpo), e a fatia de dano dele no abate tem mediana de só 4,6% (o dano concentrado costuma vir do herói que fica junto trocando). Em compensação, nos 2 jogos em que ele foi o maior contribuinte de dano, o resultado foi desproporcional ao tempo parado ali: aos 27:00 (match 8746835631) ele fez 3.757 dos 9.847 de dano total do grupo (38,2%) e aos 57:54 (match 9008436237) fez 6.723 dos 14.251 (47,2%), em ambos os casos sem nem aparecer na lista de quem ficou "no fosso" contando segundos. Isso é consistente com o próprio kit: Sticky Bomb (1000 de alcance) e Proximity Mines plantadas de antemão causam dano grande ao Roshan sem o Techies precisar entrar no corpo a corpo. Função dele no objetivo é setup a distância (minar a rota de chegada do inimigo ou o próprio fosso, ou entrar só no fim pra garantir o abate), não tanque nem dueler.
