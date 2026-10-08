---
id: ficha-pudge
titulo: "Pudge"
heroi: Pudge
patch: 7.41
posicoes: [3, 4]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-tier1/data/jogadores_partida.csv
- dota-tier1/data/derivados/compras.parquet
- dota-roshan-solo/data/solos.json
- dota-roshan-solo/data/early_rosh_pro.json
- dota-roshan-solo/data/late_rosh_pro.json
- https://api.opendota.com/api/heroes/14/itemPopularity
- https://dotacoach.gg/en/heroes/pudge
- https://dotacoach.gg/en/heroes/pudge/builds/offlane
- https://dota2.fandom.com/pt/wiki/Pudge
- https://teamsmurf.com/how-to-counter-pudge-lane-items-and-draft-answers/
- https://rdy.gg/en/dota2/heroes/pudge
- https://www.esports.net/news/dota/pudge-dota-2-guide/
---

## Resumo

Pudge é um disabler e iniciador de força que vive do combo Hook mais Dismember pra isolar e matar um herói fora do grupo, com Rot limpando wave e camp sem gastar mana. No 7.41 ele aparece sobretudo como suporte de roaming (pos 4) e como offlane (pos 3): nos times Tier 1 analisados nesse patch, 5 das 7 partidas em que foi escolhido tiveram ele na posição 4 e 2 na posição 3 (dota-tier1 draft.csv). Em ranqueada 7.41f ele é majoritariamente suporte (Support 36,1% de escolha mais Hard Support 27,6%) com a offlane como segunda opção forte (22,0%), enquanto carry e mid são residuais (dotacoach.gg/heroes/pudge).

## Pos 3 (offlane)

- quando pegar: segunda posição real do herói no patch, com 22,0% de escolha e 52,2% de vitória em ranqueada 7.41f (dotacoach.gg/heroes/pudge); apareceu em 2 das 7 partidas de Pudge no lote Tier 1 7.41 (1 vitória, 1 derrota, dota-tier1 draft.csv). Na lane sozinho ele farma com Rot e ameaça o trio adversário com Hook de longe, sem depender de suporte pra sair do 0x0.
- itens iniciais: tango, circlet, enchanted_mango, flask

### Build

#### Magic Wand (magic_wand)
- minuto: 5
- porque: HP e mana de sobra pra ganhar a troca de lane sem gastar carga de recall.
- detalhe: comprado quase junto das botas nas 2 partidas do lote em que Pudge foi offlane. Cobre o burst de dano da lane sem precisar voltar pra base toda hora.
- fonte: dota-tier1 compras.parquet (partidas 8885411801, 8887314193)

#### Phase Boots (phase_boots)
- minuto: 7
- porque: o dash fecha a distância que falta pro Hook acertar e ainda dá dano no corpo a corpo.
- detalhe: trocado a partir de Botas de Velocidade entre 5,8 e 7,5 min nas 2 partidas. O bônus de dano acelera o Rot limpando creep e a velocidade ajuda a perseguir depois do gancho.
- fonte: dota-tier1 compras.parquet (partidas 8885411801, 8887314193)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 15
- porque: deixa o Rot maior e mais forte, virando limpeza de wave em dano de área pra luta.
- detalhe: comprado cedo pros padrões do item, aos 14,4 e 15,6 min nas 2 partidas. O Scepter aumenta o raio do Rot em 200 e o dano em 90, além de cortar 20% da restauração de vida (regen, lifesteal e spell lifesteal) de quem está dentro da nuvem; esports.net confirma o efeito em geral (raio, dano e corte de sustain maiores) mas sem esses números, que vêm do changelog da habilidade (Liquipedia).
- combo: Rot com Scepter em cima de um grupo parado (depois de um Hook) soma dano de área e corte de cura ao mesmo tempo que o Dismember fecha o alvo principal.
- fonte: dota-tier1 compras.parquet (partidas 8885411801, 8887314193); https://www.esports.net/news/dota/pudge-dota-2-guide/ (efeito geral); Liquipedia, changelog de Pudge (números do raio/dano/corte de regen)

#### Blink Dagger (blink)
- minuto: 18
- porque: fecha o ângulo certo pro Hook ou cai de surpresa pra iniciar o Dismember.
- detalhe: comprado entre 17,4 e 19,9 min nas 2 partidas. Serve tanto pra se reposicionar antes do gancho quanto pra sair depois do Dismember acabar.
- fonte: dota-tier1 compras.parquet (partidas 8885411801, 8887314193)

#### Black King Bar (black_king_bar)
- minuto: 27
- porque: protege o canal do Dismember, que não pode ser cortado por stun contra o próprio Pudge.
- detalhe: comprado entre 23,5 e 31,3 min. O Dismember em si já ignora debuff immunity do alvo (BKB do inimigo não impede o dano nem a canalização), mas é o próprio Pudge que pode ser estunado e perder o canal. O BKB tampa essa brecha.
- contra: lineups com disable de alvo único ou em área que cortariam o canal do Dismember antes de fechar a kill.
- fonte: dota-tier1 compras.parquet (partidas 8885411801, 8887314193); constants_abilities.json (pudge_dismember, bkbpierce: Yes)

### Situacionais

#### Shiva's Guard (shivas_guard)
- minuto: 30
- porque: aura de -45 de velocidade de ataque e slow em área travam um grupo junto com o Rot.
- detalhe: visto em 1 das 2 partidas offlane, comprado depois do BKB. Dá armadura e mana além do controle em área, bom pra segurar uma luta de 5.
- contra: times com dano físico de autoataque sustentado, que dependem de velocidade de ataque pra fazer dano.
- combo: Shiva's Guard mais Rot no mesmo grupo soma slow de movimento com queda de velocidade de ataque na mesma janela.
- fonte: dota-tier1 compras.parquet (partida 8887314193)

#### Overwhelming Blink (upgrade de Blink Dagger) (overwhelming_blink)
- minuto: 34
- porque: transforma o reposicionamento do Blink em dano e slow de área na chegada.
- detalhe: visto em apenas 1 partida, como item de luxo depois do Hammer já ter virado BKB. Amostra de 1 jogo só, tratar como luxo de late game e não como padrão.
- fonte: dota-tier1 compras.parquet (partida 8887314193)

## Pos 4 (suporte de roaming)

- quando pegar: é a posição mais vista do herói no lote Tier 1 7.41 (5 das 7 partidas, 2 vitórias e 3 derrotas, dota-tier1 draft.csv) e também a mais escolhida em ranqueada juntando Support e Hard Support (36,1% mais 27,6% de escolha, 7.41f, dotacoach.gg/heroes/pudge). Pudge vaga puxando pull, cravando ward e procurando ângulo de Hook em vez de ficar numa lane fixa.
- itens iniciais: tango, clarity, enchanted_mango, blood_grenade, ward_observer, ward_sentry, ward_dispenser

### Build

#### Tranquil Boots (tranquil_boots)
- minuto: 8
- porque: regen de vida em movimento sustenta o roam sem gastar ouro em cura.
- detalhe: visto em 1 das 5 partidas pos 4 do lote, comprada duas vezes na mesma partida (aos 7,1 e 8,0 min), sinal de ter quebrado e sido recomprada logo depois. Quebra se Pudge leva dano de herói ou torre, então pede jogo com cuidado na aproximação.
- fonte: dota-tier1 compras.parquet (partida 8838056564)

#### Magic Wand (magic_wand)
- minuto: 10
- porque: carga rápida de HP e mana pra sobreviver ao primeiro gank que dá errado.
- detalhe: apareceu em 4 das 5 partidas pos 4, com compra entre 7,1 e 16,5 min.
- fonte: dota-tier1 compras.parquet (4 de 5 partidas pos 4)

#### Blink Dagger (blink)
- minuto: 17
- porque: fecha a distância pra acertar o Hook num ângulo que a lane sozinha não dá.
- detalhe: comprado em 3 das 5 partidas pos 4, entre 15,9 e 18,8 min. É o item que transforma o Pudge suporte de "fica esperando ângulo" pra "cria o ângulo".
- combo: Blink mais Hook na mesma sequência pega um herói fora de posição mesmo sem ajuda da lane.
- fonte: dota-tier1 compras.parquet (3 de 5 partidas pos 4)

### Situacionais

#### Phase Boots (alternativa às Tranquil) (phase_boots)
- minuto: 11
- porque: dano e dash pra entrar no combo quando o plano é ganhar o confronto, não só sobreviver ao roam.
- detalhe: visto em 2 das 5 partidas pos 4, entre 10,7 e 12,2 min, no lugar das Tranquil.
- contra: lanes em que Pudge consegue trocar dano de corpo a corpo direto, em vez de só vagar e kitar.
- fonte: dota-tier1 compras.parquet (partidas 8943364918, 8955383956)

#### Urn of Shadows (urn_of_shadows)
- minuto: 13
- porque: dano ao longo do tempo sobre o alvo puxado e regen pro aliado que entra na troca.
- detalhe: visto em 2 das 5 partidas pos 4, aos 11,7 e 13,8 min. Dá 25 de dano por segundo por 8s em inimigo ou 30 de regen em aliado, com carga renovada a cada herói que morre perto.
- contra: alvos de pouca vida que Pudge consegue fechar com o Hook, já que o DoT some a vida que falta depois do gancho.
- fonte: dota-tier1 compras.parquet (partidas 9026301227, 9027848100); items.json (urn_of_shadows)

#### Essence Distiller (essence_distiller)
- minuto: 19
- porque: pode ficar parado numa rota esperando pra dar true sight e dano em quem passar.
- detalhe: visto em 2 das 5 partidas pos 4, aos 18,3 e 19,7 min. Também cura aliado em 40 de vida quando usado nele, então serve tanto pra setup de gank quanto pra sustain de roam.
- contra: heróis invisíveis passando perto do item plantado no chão, que ganham true sight e revelam vision pro time inteiro.
- fonte: dota-tier1 compras.parquet (partidas 9026301227, 9027848100); items.json (essence_distiller)

#### Black King Bar (black_king_bar)
- minuto: 30
- porque: a mesma lógica do pos 3, protege o canal do Dismember contra stun no próprio Pudge.
- detalhe: visto em 2 das 5 partidas pos 4, aos 28,8 e 30,1 min, timing quase igual ao do offlane.
- contra: lineups com disable de alvo único ou em área que interromperiam o Dismember durante a canalização.
- fonte: dota-tier1 compras.parquet (partidas 8943364918, 8955383956); constants_abilities.json (pudge_dismember, bkbpierce: Yes)

#### Ghost Scepter (ghost)
- minuto: 45
- porque: imunidade a dano físico pra sobreviver ao foco depois de abrir a luta com o gancho.
- detalhe: visto em 2 das 5 partidas pos 4, perto dos 45 min, como item de defesa de late game.
- contra: carries de autoataque físico que viram o alvo em Pudge assim que ele se expõe pra ganchar.
- fonte: dota-tier1 compras.parquet (partidas 8943364918, 9026301227); items.json (ghost)

#### Glimmer Cape (glimmer_cape)
- minuto: 29
- porque: invisibilidade mais barreira mágica pra se aproximar sem ser visto ou escapar depois do combo.
- detalhe: visto em 1 das 5 partidas pos 4, aos 28,9 min.
- contra: lineups com burst mágico que puniriam Pudge no exato instante em que ele se revela pra ganchar.
- fonte: dota-tier1 compras.parquet (partida 8838056564); items.json (glimmer_cape)

#### Pavise (pavise)
- minuto: 25
- porque: dá escudo físico pro aliado que entra na troca junto com o pick-off do Hook.
- detalhe: visto em 1 das 5 partidas pos 4, aos 25,2 min.
- combo: Hook seguido de Pavise no aliado que vai acabar a kill, pra ele sobreviver ao retaliate.
- fonte: dota-tier1 compras.parquet (partida 9027848100); items.json (pavise)

#### Crimson Guard (crimson_guard)
- minuto: 35
- porque: bloqueio de dano físico em área pro time inteiro durante push ou disputa de objetivo.
- detalhe: visto em 1 das 5 partidas pos 4, aos 34,5 min.
- contra: lineups com dano físico em cima do time todo (ilusões, nuke físico em área) durante push de torre.
- fonte: dota-tier1 compras.parquet (partida 9026301227); items.json (crimson_guard)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 40
- porque: mesmo efeito de área maior no Rot que no offlane, só que como item de luxo tardio em vez de core.
- detalhe: visto em 2 das 5 partidas pos 4, aos 37,1 e 43,4 min, bem mais tarde que no pos 3.
- fonte: dota-tier1 compras.parquet (partidas 8943364918, 8955383956); https://www.esports.net/news/dota/pudge-dota-2-guide/

#### Aether Lens (aether_lens)
- minuto: 48
- porque: aumenta o alcance de cast do Hook, deixando o gancho mais seguro de distância.
- detalhe: visto em apenas 1 das 5 partidas, muito tarde (47,7 min), como extensão de inventário cheio. Soma +225 de alcance de cast, que se aplica ao Hook (1300 de alcance base).
- contra: lineups com peel forte ou disable de longo alcance, que punem Pudge se ele precisar chegar perto pra ganchar.
- fonte: dota-tier1 compras.parquet (partida 8838056564); items.json (aether_lens); constants_abilities.json (pudge_meat_hook, abilitycastrange: 1300)

## Roshan

Sem dado de Roshan solo: Pudge não aparece em nenhuma das 1.328 partidas catalogadas no lote de golpes solo em Roshan (dota-roshan-solo/data/solos.json). Com o time também é raro nos dados pro analisados: 1 ocorrência em 874 golpes iniciais catalogados e 0 em 4.212 golpes tardios (dota-roshan-solo/data/early_rosh_pro.json, late_rosh_pro.json). Não há evidência de que Pudge seja um herói usado pra bater Roshan nesse patch, solo ou em time.
