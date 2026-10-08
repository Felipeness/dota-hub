---
id: ficha-bane
titulo: "Bane"
heroi: Bane
patch: 7.41
posicoes: [4, 5]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-tier1/data/jogadores_partida.csv
- dota-tier1/data/derivados/jogadores_replay.parquet
- dota-tier1/data/derivados/itens_chave.parquet
- dota-tier1/data/derivados/compras.parquet
- dota-tier1/data/derivados/usos_ult_bkb.parquet
- dota-tier1/data/derivados/objetivos.parquet
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- dota-roshan-solo/data/solos.json
- https://api.opendota.com/api/heroes/3/itemPopularity
- https://dota2protracker.com/hero/Bane
- https://dotacoach.gg/en/heroes/bane
- https://liquipedia.net/dota2/Bane
---

## Resumo
Bane é suporte de disable de alvo único: Nightmare tira um herói da luta (ou protege um aliado quase morto, o feitiço funciona nos dois lados) e Fiend's Grip canaliza até 5,75s travando e drenando mana de um alvo isolado. No recorte Tier 1 do 7.41 ele é quase só pick de pos5 (121 de 137 picks, 88%, fonte dota-tier1/data/draft.csv) e sobra pra pos4 (16, 12%); não apareceu nenhuma vez como pos1, pos2 ou pos3 nesse recorte. É também um dos heróis mais discutidos no draft do patch: 202 bans contra 137 picks no mesmo recorte. No ladder alto (dota2protracker, 7000+ MMR, últimos 8 dias, consultado em 08/10/2026), tem 48,6% de vitória em 2.633 partidas no geral (48,0% como pos5 puro, 2.029 partidas); entre quem spamma o herói a vitória sobe pra 53% em 345 partidas. É um dado que muda toda semana no site, então trate como retrato do momento, não como média fixa do patch.

## Pos 5 (suporte duro)
- quando pegar: é a posição dominante dele no Tier 1 7.41 (121/137 picks, 52,1% de vitória, 63/121) e o papel natural do kit: Brain Sap cura o próprio Bane e ainda causa dano no alvo, dando sustain pra ele segurar a lane sozinho, Fiend's Grip é o nuke/kill de longo alcance que não depende de item pra funcionar. Fonte: dota-tier1/data/draft.csv e derivados/jogadores_replay.parquet; dota-imortal/data/opendota/constants_abilities.json (Brain Sap cura só Bane, não tem alcance em área).
- itens iniciais: tango, blood_grenade, ward_dispenser, faerie_fire, branches

### Build
#### Boots of Speed (boots)
- minuto: 6:09
- porque: mobilidade cedo pra acompanhar o carry na lane e fugir de troca ruim sem gastar feitiço.
- detalhe: Bane tem só 1 de armadura base e 120 de vida base; sem bota ele perde corrida de qualquer gank. Comprada em 100% dos jogos pos5 do recorte (121/121).
- fonte: dota-tier1/data/derivados/compras.parquet (pos5, mediana local); dota-imortal/data/opendota/heroStats.json (armadura e vida base)

#### Magic Wand (magic_wand)
- minuto: 9:27
- porque: carga instantânea de vida e mana pra sobreviver ao primeiro all-in de lane.
- detalhe: comprada em 88% dos jogos pos5 (107/121), recarregada enquanto ele recebe poke; é a reserva de mana antes da Aether Lens existir.
- fonte: dota-tier1/data/derivados/compras.parquet (pos5)

#### Tranquil Boots (tranquil_boots)
- minuto: 12:36
- porque: regen de vida em movimento, que soma com o regen baixo de base (0,25/s) sem gastar mana em si mesmo.
- detalhe: upgrade mais comum (34%, 41/121) contra Arcane Boots (11%, 13/121); nos outros jogos do recorte não há upgrade de bota registrado. A bota quebra ao tomar dano de herói, então ele troca só quando a lane está parada.
- contra: lane com poke físico constante (farma vida sem voltar à base).
- fonte: dota-tier1/data/derivados/compras.parquet (pos5)

#### Aether Lens (aether_lens)
- minuto: 22:54
- porque: cast range extra em todos os feitiços de alvo único, pra lançar Nightmare e Fiend's Grip de fora do raio de resposta do inimigo.
- detalhe: item mais comprado da build (64%, 77/121); os componentes (Energy Booster, Void Stone) saem por volta dos 18-19min, a recipe perto de 21:50.
- combo: alcance extra deixa iniciar Fiend's Grip (625 de alcance base) antes do alvo perceber e fugir ou estunar primeiro.
- fonte: dota-tier1/data/derivados/{itens_chave,compras}.parquet (pos5); dota-imortal/data/opendota/constants_abilities.json (alcance base do Brain Sap/Fiend's Grip)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 37:07
- porque: cria 2 ilusões incontroláveis que também canalizam Fiend's Grip no mesmo alvo, e reduz o cooldown da ultimate em 40s (7.41e baixou de 45s pra 40s).
- detalhe: segundo item mais comum da build (53%, 64/121). Sem o Scepter, Fiend's Grip tem 100-120s de recarga; é o item que transforma a ultimate de "trava 1 alvo" em "ameaça o time todo" com mais frequência. As ilusões tomam 225% de dano recebido e morrem na hora se o channel delas for interrompido; o dano delas não soma ao do feitiço principal, então o ganho real é redundância (se cancelarem o grip de Bane, as ilusões ainda podem estar canalizando) e giro de cooldown mais rápido, não dano/dreno multiplicado.
- combo: com o cooldown reduzido, Bane consegue repetir Fiend's Grip em lutas seguidas sem esperar o tempo cheio de recarga.
- contra: alvos tanky ou com muita vida que sobreviveriam a um grip só.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos5); https://dotacoach.gg/en/heroes/bane

#### Blink Dagger (blink)
- minuto: 40:34
- porque: fecha a distância pra travar um alvo isolado antes que ele reaja.
- detalhe: presente em 37% dos jogos pos5 (45/121); normalmente sai depois do Scepter, já que o combo de longo alcance (Aether Lens + Scepter) resolve boa parte das lutas sem precisar entrar.
- contra: alvos móveis ou com blink próprio que fogem antes do grip; usar antes do inimigo ligar BKB, porque Enfeeble e Nightmare não furam imunidade (Brain Sap e Fiend's Grip furam).
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos5); dota-imortal/data/opendota/constants_abilities.json (bkbpierce de cada feitiço)

### Situacionais
#### Arcane Boots (arcane_boots)
- porque: devolve mana pro time inteiro quando ninguém tem Fonte própria de mana cedo.
- detalhe: alternativa à Tranquil Boots, escolhida em 11% dos jogos pos5 (13/121).
- contra: composições sem regen de mana em que Bane vira o "poço" do time.
- fonte: dota-tier1/data/derivados/compras.parquet (pos5)

#### Glimmer Cape (glimmer_cape)
- minuto: 30:36
- porque: invisibilidade curta mais resistência mágica pra escapar depois do combo ou esconder a iniciação.
- detalhe: comprada em 13% dos jogos pos5 (16/121).
- contra: times com dano mágico pesado ou detecção (Dust, Gem) que revelariam a aproximação antes do Fiend's Grip.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos5)

#### Force Staff (force_staff)
- minuto: 28:27
- porque: reposiciona um aliado fora do alcance de um combo inimigo, ou afasta o próprio Bane depois que o channel termina.
- detalhe: comprado em 7% dos jogos pos5 (8/121); Fiend's Grip é canalizado (Bane fica parado 4,75 a 5,75s), então ele não tem saída própria enquanto canaliza.
- contra: lutas em que o time precisa salvar alguém preso perto da linha de frente.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos5); dota-imortal/data/opendota/constants_abilities.json (behavior Channeled do Fiend's Grip)

#### Aeon Disk (aeon_disk)
- minuto: 46:09
- porque: garante sobreviver a um burst de alvo único logo depois do channel, quando ele está sem feitiço de saída.
- detalhe: item tardio, em 6% dos jogos pos5 (7/121).
- contra: combos de nuke/alvo único (ex. feitiços de execução) que matariam Bane no instante em que o Fiend's Grip solta o alvo.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos5)

#### Solar Crest (solar_crest)
- minuto: 22:29
- porque: dá armadura pro carry aliado atacar mais forte, ou tira armadura do alvo pra time fechar a luta.
- detalhe: raro nesta amostra (4%, 5/121).
- contra: linhas que dependem de ataque básico, dos dois lados.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos5)

## Pos 4 (suporte de roaming)
- quando pegar: 16 dos 137 picks Tier 1 (12%) são pos4, com 56,2% de vitória (9/16, amostra pequena); ele entra nessa posição pra rotacionar antes dos 6min e isolar um alvo com Nightmare fora da própria lane, em vez de ficar plantado puxando creep. Fonte: dota-tier1/data/draft.csv e derivados/jogadores_replay.parquet.
- itens iniciais: branches, tango, blood_grenade, smoke_of_deceit, ward_dispenser

### Build
#### Boots of Speed (boots)
- minuto: 5:36
- porque: mobilidade pra rotacionar entre lanes antes do nível 6.
- detalhe: comprada em 100% dos jogos pos4 (16/16); nesta amostra não há upgrade de bota (Tranquil/Arcane/Phase) registrado em nenhum dos 16 jogos.
- fonte: dota-tier1/data/derivados/compras.parquet (pos4)

#### Magic Wand (magic_wand)
- minuto: 9:12
- porque: reserva de vida e mana pra sobreviver ao gank que ele mesmo inicia.
- detalhe: comprada em 88% dos jogos pos4 (14/16).
- fonte: dota-tier1/data/derivados/compras.parquet (pos4)

#### Aether Lens (aether_lens)
- minuto: 21:53
- porque: alcance extra pra iniciar Nightmare ou Fiend's Grip numa rotação sem precisar entrar no meio do grupo inimigo.
- detalhe: segundo item mais comum da build pos4, atrás do Scepter (62%, 10/16).
- combo: junto com Nightmare, trava um alvo isolado de longe antes que o resto do time dele chegue.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos4)

#### Blink Dagger (blink)
- minuto: 34:07
- porque: substitui a falta de bota upgradada como mobilidade, fechando o gank antes que o alvo reaja.
- detalhe: presente em 56% dos jogos pos4 (9/16); sai antes do Scepter nessa posição (34:07 contra 37:35), o oposto do pos5, porque o pos4 depende mais de iniciar do que de sustentar de longe.
- contra: alvos móveis ou que ficam atrás do time; usar antes do BKB do inimigo subir, já que Enfeeble e Nightmare não furam imunidade.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos4); dota-imortal/data/opendota/constants_abilities.json (bkbpierce)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 37:35
- porque: cria ilusões que também canalizam Fiend's Grip (dano delas não soma ao do feitiço principal, mas dão redundância se o grip principal for interrompido), e reduz o cooldown da ultimate em 40s.
- detalhe: item mais comum da build pos4 depois das botas e do Magic Wand (69%, 11/16, à frente da Aether Lens).
- combo: depois de uma rotação bem-sucedida, o Scepter deixa o mesmo Fiend's Grip decidir a luta seguinte sem esperar o cooldown cheio.
- contra: alvos tanky que sobreviveriam a um grip só.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos4); https://dotacoach.gg/en/heroes/bane

### Situacionais
#### Glimmer Cape (glimmer_cape)
- minuto: 26:32
- porque: resistência mágica e invisibilidade curta pra entrar e sair da rotação sem ser visto.
- detalhe: comprado em 25% dos jogos pos4 (4/16).
- contra: times com visão de ward boa nas rotas de rotação ou dano mágico pesado.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos4)

#### Force Staff (force_staff)
- minuto: 30:27
- porque: reposiciona um aliado puxado pra fora da lane dele, ou escapa depois do channel.
- detalhe: comprado em 12% dos jogos pos4 (2/16).
- contra: ganks que vão mal e precisam de uma saída rápida pro aliado mais avançado.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos4)

## Roshan
Bane quase não participa do abate final do Roshan: no recorte Tier 1 7.41, deu o golpe final em apenas 1 das 137 partidas em que foi pego (fonte: dota-tier1/data/derivados/objetivos.parquet). Ele também não aparece em nenhum dos dois datasets de Roshan solo locais (nem como solista, nem citado entre os heróis cobertos pelo dataset "com suporte", que lista carries de farm rápido como Ursa, Huskar e Spectre). O motivo é o kit: Brain Sap e Fiend's Grip causam dano fixo pequeno pra um boss com dezenas de milhares de vida, e o dreno de mana do Fiend's Grip não serve contra Roshan. O papel dele numa luta de Roshan é de utilidade, travando com Nightmare ou Fiend's Grip quem reage, não de dano no próprio Roshan.
