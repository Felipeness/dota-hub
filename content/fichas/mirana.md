---
id: ficha-mirana
titulo: "Mirana"
heroi: Mirana
patch: 7.41
posicoes: [4, 5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- https://dota2protracker.com/hero/Mirana
- https://api.opendota.com/api/heroes/9/itemPopularity
- https://dotacoach.gg/en/heroes/mirana
- https://dotacoach.gg/en/heroes/mirana/builds
---

## Resumo

Mirana é a suporte de pick-off: Sacred Arrow acerta de longe, atravessa invisibilidade e instakilla creep não ancient, e o Leap fecha a distância depois do stun. No 7.41f ela só tem base de jogo real em pos4 e pos5 (D2PT, build mais jogada: pos4 50,1% em 9.393 partidas, tier C, D2PT Rating 50/100; pos5 48,9% em 7.288, D2PT Rating 41/100; pos1/2/3 somam menos de 200 partidas cada e ficam todas abaixo de 43% de vitória, ou seja não é jogo real). Nos dados do Atlas tier1 (times analisados) ela foi pos5 em 93 picks (50,5% WR) e pos4 em 66 (47,0% WR), confirmando o mesmo padrão de posição.

## Pos 4 (suporte de roaming)

- quando pegar: time que quer pick-off cedo no mapa inteiro antes do nível 6, já que o Sacred Arrow vai a 3000 de distância e atravessa o fog quando mirado numa unidade vista. É a posição mais jogada da heroína no patch (9.393 partidas D2PT, 50,1% de vitória, tier C).
- itens iniciais: tango, blood_grenade, magic_stick, branches, ward_observer, ward_sentry

### Build

#### Boots of Speed
- minuto: 5,8
- porque: base de mobilidade para rodar lane e já chegar no Leap com velocidade extra.
- detalhe: comprado em 92,4% das partidas pos4 do Atlas tier1, mediana 5:48. Fica cru (sem upgrade) em boa parte dos jogos: só 34,8% evoluem pra Arcane Boots.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (66 partidas pos4)

#### Magic Wand
- minuto: 7,1
- porque: carga de HP/mana barata pra sobreviver ao all-in da lane que ela está roaming pra ajudar.
- detalhe: 92,4% das partidas, mediana 7:08. Recompra ao ficar sem cargas é comum pro resto do early game.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (66 partidas pos4)

#### Urn of Shadows
- minuto: 9,8
- porque: cada herói inimigo que morre perto recarrega o Urn; pick-off de Arrow alimenta sustain pro resto do roam.
- detalhe: dá +2 todos os atributos, +2 armadura e regen de mana. O Soul Release cura 30 em aliado ou causa 25 de dano por segundo em inimigo por 8s, com 2 cargas iniciais mais 1 adicional, recarregando a cada morte de herói num raio de 1500. Comprado em 84,8% das partidas pos4, mediana 9:50.
- combo: Sacred Arrow ou Leap+autos pra fechar o kill, Urn carrega, Urn no aliado ferido na sequência.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (66 partidas pos4)

#### Arcane Boots
- minuto: 15,1
- porque: mana pro ciclo de Arrow e Starstorm sem precisar voltar à fonte toda hora.
- detalhe: +125 de mana fixo e ativa Replenish, que restaura 150 de mana em área (1200 de raio) pro time. Upgrade do Boots em 34,8% das partidas pos4, mediana 15:04; quem não evolui segue de Boots crus ou troca direto por Tranquil em jogo mais parado.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (66 partidas pos4)

#### Chainmail
- minuto: 16,4
- porque: armadura barata pra sobreviver às trocas que ela entra roaming sem ser o alvo principal.
- detalhe: +4 de armadura fixo, sem upgrade embutido nessa build. Comprado em 87,9% das partidas pos4, mediana 16:24.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (66 partidas pos4)

#### Aghanim's Scepter
- minuto: 33,2
- porque: transforma o Sacred Arrow num nuke em área: solta Starstorm no caminho da flecha e mais um Starstorm no alvo atingido.
- detalhe: componentes (Point Booster, Ogre Axe, Staff of Wizardry) aparecem em 92%, 82% e mais de uma vez por partida nas compras pos4, fechando no item em 74,2% dos jogos, mediana 33:12. É o item que faz a Arrow virar iniciação de luta em vez de só pick-off.
- combo: Arrow mirada atravessando o grupo inimigo inteiro antes de uma teamfight, o Starstorm do caminho já tira HP de todo mundo antes do primeiro golpe.
- fonte: https://dotacoach.gg/en/heroes/mirana; C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (66 partidas pos4)

### Situacionais

#### Eul's Scepter of Divinity
- porque: dispel em cima e reposicionamento aéreo para sair de stun longo ou travar um iniciador.
- contra: debuffs comuns dispensáveis por dispel básico, que travam o aliado num stun longo (Eul's não remove Doom nem Fiend's Grip do Bane, os dois são blindados contra esse tipo de dispel); também segura um carry mobile tipo Ursa no ciclone enquanto o time foca.
- detalhe: comprado em 54,5% das partidas pos4, mediana 23:10.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (66 partidas pos4)

#### Essence Distiller
- porque: dá true sight em área e dano ao longo do tempo plantado no inimigo, útil pra achar quem se esconde.
- contra: heróis de invisibilidade (Riki, Bounty Hunter, Clinkz), porque dá true sight e aplica dano fixo por segundo enquanto fica presa no alvo.
- detalhe: item raro de 1775, cura 40 em aliado ou pode ficar dormente no chão e se prender no primeiro inimigo que passar a 400 de raio, causando 25 de dano por segundo por 8s. Comprado em 51,5% das partidas pos4, mediana 15:33.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (66 partidas pos4)

#### Force Staff
- porque: salva aliado de disable em área ou empurra o próprio corpo fora de um combo.
- contra: iniciação de alvo único que precisa de alcance curto (Earthshaker indo pra cima de alguém, Tiny), empurrando o aliado fora do raio antes do segundo hit.
- detalhe: comprado em 25,8% das partidas pos4, mediana 29:17.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (66 partidas pos4)

#### Aghanim's Shard
- porque: dá +1 carga de Leap, então sobra mobilidade pra chase ou fuga dupla antes de recarregar.
- detalhe: comprado em só 9,1% das partidas pos4 (mediana 53:24), item de jogo longo.
- fonte: https://dotacoach.gg/en/heroes/mirana; C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (66 partidas pos4)

## Pos 5 (suporte duro)

- quando pegar: quando o time quer visão e pick-off na lane de baixo (ou de cima no Dire) sem depender de farm, trocando ouro por wards, Gem e utilidade de proteção pro carry. Segunda posição mais jogada no patch (D2PT: 7.288 partidas, 48,9% de vitória, D2PT Rating 41/100).
- itens iniciais: tango, flask, enchanted_mango, magic_stick, infused_raindrop, ward_observer, ward_sentry

### Build

#### Boots of Speed
- minuto: 6,7
- porque: mobilidade pra cobrir as duas lanes e levar ward sem atrasar.
- detalhe: 106,5% das partidas pos5 (às vezes rebuy depois de perder pros Boots), mediana 6:43.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (93 partidas pos5)

#### Magic Wand
- minuto: 8,1
- porque: resposta rápida de HP/mana contra o poke da lane de suporte duro.
- detalhe: 93,5% das partidas, mediana 8:09.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (93 partidas pos5)

#### Urn of Shadows
- minuto: 11,8
- porque: mesma lógica da pos4, só que mais atrasado porque o ouro de pos5 é menor.
- detalhe: dá +2 todos os atributos, +2 armadura, regen de mana, e o Soul Release de 30 de cura ou 25 de dano por segundo por 8s, recarregando a cada morte de herói perto. Comprado em 51,6% das partidas pos5, mediana 11:46.
- combo: Arrow ou Starstorm derruba, Urn recarrega, Urn sustenta o time na próxima troca.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (93 partidas pos5)

#### Arcane Boots
- minuto: 13,3
- porque: mana em área pro time inteiro, não só pra ela, já que pos5 vive gastando feitiço alheio.
- detalhe: 58,1% das partidas evoluem o Boots pra isso, mediana 13:17.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (93 partidas pos5)

#### Chainmail
- minuto: 18,5
- porque: armadura de sobrevivência pro papel de ficar na frente segurando ward e tomando poke.
- detalhe: +4 de armadura fixo. Comprado em 78,5% das partidas pos5, mediana 18:29.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (93 partidas pos5)

#### Gem of True Sight
- minuto: 30,1
- porque: visão contra tudo que é invisível, item mais comprado pelo pos5 depois do Boots nessa amostra.
- detalhe: dá true sight em 900 de raio pra visão aliada próxima, cai no chão quando ela morre e não pode ser destruído. Comprado em 61,3% das partidas pos5, mediana 30:06.
- contra: heróis de invisibilidade (Riki, Clinkz, Weaver, Bounty Hunter) e Rubick roubando ultimates escondido.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (93 partidas pos5)

#### Aghanim's Scepter
- minuto: 35,6
- porque: mesmo motivo da pos4, transforma a Arrow num nuke em área que atinge todo o caminho da flecha.
- detalhe: comprado em 52,7% das partidas pos5, mediana 35:36. Mais lento que na pos4 porque o ouro de suporte duro é menor.
- combo: Arrow atravessando o grupo inimigo antes da luta, Starstorm do caminho já aplica dano em todo mundo.
- fonte: https://dotacoach.gg/en/heroes/mirana; C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (93 partidas pos5)

### Situacionais

#### Pavise
- porque: escudo físico instantâneo (absorve 250 de dano por 7s) num aliado só, pra proteger o carry no engage.
- contra: burst de dano físico concentrado logo na iniciação (Magnus Empower, combo de auto-ataque); não bloqueia dano mágico.
- detalhe: comprado em 19,4% das partidas pos5, mediana 23:17.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (93 partidas pos5)

#### Glimmer Cape
- porque: invisibilidade curta mais um escudo que absorve até 375 de dano mágico, pra tirar o carry de um nuke ou salvar ela mesma de um burst.
- contra: nukers de dano mágico que dependem de um único cast forte (Lina, Lion, Zeus).
- detalhe: comprado em 8,6% das partidas pos5, mediana 23:30.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (93 partidas pos5)

#### Solar Crest
- porque: buff de armadura, velocidade de ataque e de movimento mais um escudo físico (350 de absorção) só em aliado, pro carry entrar na troca com mais sobrevivência e dano.
- contra: trocas de dano físico prolongadas (Dragon Knight, Legion Commander), já que o escudo e a armadura extra seguram esse tipo de troca.
- detalhe: comprado em 16,1% das partidas pos5, mediana 24:35.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (93 partidas pos5)

#### Force Staff
- porque: salva aliado de disable em área ou de iniciação de alvo único.
- contra: combo que depende de alcance curto ou de manter o alvo perto (Earthshaker, Tiny, Beastmaster indo pro meio do time).
- detalhe: comprado em 33,3% das partidas pos5, mediana 24:22.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (93 partidas pos5)

#### Eul's Scepter of Divinity
- porque: dispel e reposicionamento pra escapar de stun longo ou travar um iniciador sozinho no ar.
- contra: iniciadores de alvo único que precisam ficar colados (Legion Commander, Axe).
- detalhe: comprado em 39,8% das partidas pos5, mediana 23:58.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet (93 partidas pos5)

## Roshan

Sem solo: nos replays locais, Mirana nunca aparece com classificação "solo" num Roshan (0 ocorrências). Ela recebe o crédito principal da morte raramente (3 vezes no total, sendo 2 como kill de time e 1 como finalização), mas aparece como uma das heroínas que bateu no Roshan em 189 mortes do dataset, com dano médio de 737 (entre 8 e 4.920) por ocorrência. Leitura: ela entra no poço contribuindo com Sacred Arrow, Starstorm ou autos puxados pelo Leap enquanto o time tanca e fecha, nunca tenta o Roshan sozinha.

Fonte: C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
