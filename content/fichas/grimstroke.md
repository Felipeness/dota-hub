---
id: ficha-grimstroke
titulo: "Grimstroke"
heroi: Grimstroke
patch: 7.41
posicoes: [4, 5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- https://api.opendota.com/api/heroes/121/itemPopularity
- https://dotacoach.gg/heroes/grimstroke
- https://dotacoach.gg/heroes/grimstroke/builds/support
---
## Resumo
Grimstroke é suporte de inteligência focado em prender e calar o alvo certo numa troca, não em farm: Stroke of Fate acerta em linha e desacelera até 80%, Soulbind (ultimate) amarra o pick ao aliado mais próximo num raio de 600, e Phantom's Embrace silencia quem fica preso no fantasma (constants_abilities.json). As roles do OpenDota batem exatamente com o levantamento do pedido: Support, Nuker, Disabler, Escape (heroes.json). No 7.41f a amostra pública do dotacoach.gg mostra 54,8% das partidas como suporte duro (pos 5) e 41,6% como suporte de roaming (pos 4); mid, offlane e carry juntos não passam de 3,7% e ficam fora desta ficha. Os drafts de pro do Atlas tier1 (data/draft.csv, 66 picks) confirmam o quase-empate: 35 picks pos 4 contra 31 pos 5, vitória em 15 dos dois lados.

## Pos 4 (suporte de roaming)
- quando pegar: pegue de roam quando o time quer abrir o mapa cedo e criar pick-off sem depender de farm: Soulbind garante o grab mesmo com pouco item, e essa é a leitura ligeiramente mais comum dos dois lados no pro play do 7.41 (35 de 66 picks, data/draft.csv).
- itens iniciais: tango, blood_grenade, enchanted_mango, branches, branches, smoke_of_deceit, dust, ward_observer, ward_sentry
### Build
#### Boots of Speed -> Arcane Boots (arcane_boots)
- minuto: 12:27
- porque: mana é o limite de quem fica lançando Stroke of Fate e Ink Swell a lane toda; Arcane devolve mana pro time no meio do roam.
- detalhe: +45 de velocidade de movimento e aura de 1 de regen de mana num raio de 1200; o ativo recarrega 150 de mana de uma vez.
- fonte: items.json (arcane_boots); dota-tier1 compras.parquet (N=32 compras de Grimstroke pos4, mediana 12:27)

#### Magic Wand (magic_wand)
- minuto: 8:33
- porque: carrega sozinho com qualquer feitiço trocado na lane e devolve vida e mana sem precisar sair pra base no meio do roam.
- detalhe: até 20 cargas, 15 de vida e mana por carga, +3 em todos os atributos; ganha carga quando inimigo visível usa habilidade num raio de 1200.
- fonte: items.json (magic_wand); dota-tier1 compras.parquet (N=27 pos4, mediana 8:33)

#### Glimmer Cape (glimmer_cape)
- minuto: 27:00
- porque: 5s de invisibilidade e barreira mágica dão espaço pra entrar em alcance de Soulbind ou Ink Swell sem ser visto antes do roam-kill.
- detalhe: barreira de 375 de dano mágico, +20 de velocidade enquanto ativa, +20% de resistência mágica; o fade começa 0,5s depois do cast.
- contra: um nuke mágico único de até 375 de dano a barreira absorve sozinha, mas não resolve dois nukes em sequência.
- combo: Glimmer em si mesmo pra se aproximar invisível e abrir o roam com Soulbind antes do time inimigo notar.
- fonte: items.json (glimmer_cape); dota-tier1 compras.parquet (N=7 pos4, mediana 27:00)

#### Blink Dagger (blink)
- minuto: 22:44
- porque: entra em alcance de Soulbind ou Ink Swell sem correr exposto, essencial pra iniciar o pick-off do roam em vez de só reagir.
- detalhe: 1200 de alcance, trava por 3s depois de levar dano de herói ou Roshan; item recorrente no herói em qualquer posição, 25 compras no meio de jogo e 43 no fim de jogo (OpenDota itemPopularity, hero_id 121).
- combo: Blink pro meio do inimigo isolado, Soulbind amarra o alvo ao aliado mais próximo num raio de 600 (chain_latch_radius, constants_abilities.json), e Stroke of Fate fecha com até 80% de slow; precisa de nível 6 pra ter a ultimate liberada.
- fonte: items.json (blink); constants_abilities.json (grimstroke_soul_chain, grimstroke_dark_artistry); dota-tier1 compras.parquet (N=31 pos4, mediana 22:44); api.opendota.com/api/heroes/121/itemPopularity

#### Aghanim's Shard (aghanims_shard)
- minuto: 31:11
- porque: faz Ink Swell dispelar o aliado na hora de lançar, então segura root, silence ou slow do próprio time, não só aumenta o dano.
- detalhe: +40% de dano em Ink Swell e 40% desse dano virando cura pro aliado, dispel do tipo básico (Basic Dispel), segundo dotacoach.gg/heroes/grimstroke; Ink Swell em si já é dispellable (constants_abilities.json, grimstroke_spirit_walk).
- contra: disable longo travado num aliado chave onde o dispel de Ink Swell solta a correntinha na hora.
- fonte: dotacoach.gg/heroes/grimstroke; items.json (aghanims_shard); constants_abilities.json (grimstroke_spirit_walk); dota-tier1 compras.parquet (N=11 pos4, mediana 31:11)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 32:05
- porque: cria Dark Portrait, uma ilusão de ink do inimigo escolhido, roubando o right-click de dano do carry adversário pro seu time por 25s.
- detalhe: ilusão debuff immune, 95% de resistência mágica, 125% de dano de saída e 275% de dano recebido, 1200 de alcance de cast, 35s de recarga (constants_abilities.json, grimstroke_dark_portrait: immunity_resist 95, mc 200/cd 35, bkbpierce Yes; alcance de cast por dotacoach.gg/heroes/grimstroke). Nota: dotacoach.gg cita 90% por um nerf de patch; a constante local do 7.41 marca 95%, e é ela que vale aqui.
- contra: funciona melhor contra lineup com um right-clicker de dano alto claro pra copiar; sem um alvo óbvio de alto dano o item perde força.
- fonte: items.json (ultimate_scepter); constants_abilities.json (grimstroke_dark_portrait); dota-tier1 compras.parquet (N=13 pos4, mediana 32:05); dotacoach.gg/heroes/grimstroke (alcance de cast)

### Situacionais
#### Ghost Scepter (ghost)
- minuto: 30:51
- porque: fica imune a dano físico por 4s, direto contra carry ou offlaner de right-click que vem focar o suporte primeiro.
- detalhe: +5 em todos os atributos; mas fica 30% mais vulnerável a dano mágico nesses 4s, então não serve contra composição mágica.
- contra: carries físicos puros que fazem dive nele antes do suporte principal do time.
- fonte: items.json (ghost); dota-tier1 compras.parquet (N=14 pos4, mediana 30:51)

#### Force Staff (force_staff)
- minuto: 35:16
- porque: empurra 600 de distância, serve tanto pra se reposicionar antes de acertar Soulbind quanto pra puxar aliado que iniciou mal.
- detalhe: +10 de inteligência e 175 de vida fixos, não interrompe a ação de quem recebe.
- contra: iniciação corpo a corpo que fecha distância rápido demais pra um Force sozinho resolver.
- fonte: items.json (force_staff); dota-tier1 compras.parquet (N=5 pos4, mediana 35:16)

#### Scythe of Vyse (sheepstick)
- minuto: 40:33
- porque: transforma o alvo em critter por 2,8s, silenciado e desarmado, ótimo pra travar quem depende de canal ou de um só ativo pra virar a luta.
- detalhe: +30 de inteligência, +8,5 de regen de mana, destrói ilusões instantaneamente ao acertar.
- contra: heróis cujo poder de luta depende de um canal longo (ultimate de canalização) ou de ativar um item defensivo pra sobreviver ao burst.
- fonte: items.json (sheepstick); dota-tier1 compras.parquet (N=10 pos4, mediana 40:33)

## Pos 5 (suporte duro)
- quando pegar: pegue de suporte duro quando o time já tem outro suporte pra abrir mapa e precisa de alguém segurando a lane e empurrando ward; é a leitura mais comum na amostra pública do 7.41f, 54,8% das partidas (dotacoach.gg/heroes/grimstroke).
- itens iniciais: tango, blood_grenade, magic_stick, enchanted_mango, branches, branches, ward_observer, ward_sentry
### Build
#### Boots of Speed -> Arcane Boots (arcane_boots)
- minuto: 13:13
- porque: mesmo gargalo de mana do pos 4, só que puxando a lane em vez do mapa; Arcane devolve mana pro time todo perto do suporte duro.
- detalhe: +45 de velocidade de movimento e aura de 1 de regen de mana num raio de 1200.
- fonte: items.json (arcane_boots); dota-tier1 compras.parquet (N=29 pos5, mediana 13:13)

#### Magic Wand (magic_wand)
- minuto: 11:36
- porque: carrega com qualquer feitiço de harass na lane e devolve vida e mana no all-in, sem gastar ouro em consumível.
- detalhe: até 20 cargas, 15 de vida e mana por carga, +3 em todos os atributos; ganha carga quando inimigo visível usa habilidade num raio de 1200.
- fonte: items.json (magic_wand); dota-tier1 compras.parquet (N=27 pos5, mediana 11:36)

#### Glimmer Cape (glimmer_cape)
- minuto: 24:50
- porque: invisibilidade e barreira mágica tiram o suporte duro de perigo quando ele é o primeiro foco da composição mágica inimiga.
- detalhe: barreira de 375 de dano mágico, +20 de velocidade enquanto ativa, +20% de resistência mágica.
- contra: nuke mágico único de até 375 de dano a barreira absorve sozinha, mas não cobre burst físico concentrado.
- combo: Glimmer num aliado que vai iniciar pra ele sobreviver ao burst inicial enquanto Grimstroke fecha com Soulbind atrás.
- fonte: items.json (glimmer_cape); dota-tier1 compras.parquet (N=6 pos5, mediana 24:50)

#### Blink Dagger (blink)
- minuto: 25:43
- porque: mesmo papel do pos 4, entrar em alcance de Soulbind ou Ink Swell sem caminhar exposto; item recorrente no herói em qualquer posição (OpenDota itemPopularity, hero_id 121).
- detalhe: 1200 de alcance, trava por 3s depois de levar dano de herói ou Roshan.
- combo: Blink pra dentro do grupo inimigo, Soulbind trava o alvo ao aliado mais próximo (raio 600), Stroke of Fate fecha com slow de até 80%.
- fonte: items.json (blink); constants_abilities.json (grimstroke_soul_chain, grimstroke_dark_artistry); dota-tier1 compras.parquet (N=19 pos5, mediana 25:43); api.opendota.com/api/heroes/121/itemPopularity

#### Aghanim's Shard (aghanims_shard)
- minuto: 27:43
- porque: dá dispel pro aliado junto com Ink Swell, essencial pro suporte duro que precisa limpar debuff do core do time sem gastar outro item.
- detalhe: +40% de dano em Ink Swell e 40% desse dano virando cura pro aliado (dotacoach.gg/heroes/grimstroke).
- contra: disable longo travado num aliado chave onde o dispel de Ink Swell solta a correntinha na hora.
- fonte: dotacoach.gg/heroes/grimstroke; items.json (aghanims_shard); dota-tier1 compras.parquet (N=10 pos5, mediana 27:43)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 38:48
- porque: mesma Dark Portrait do pos 4, só que chega mais tarde porque o suporte duro tem menos farm cedo.
- detalhe: ilusão debuff immune, 95% de resistência mágica, 125% de dano de saída e 275% de dano recebido, 1200 de alcance de cast, 35s de recarga (constants_abilities.json, grimstroke_dark_portrait; alcance de cast por dotacoach.gg/heroes/grimstroke).
- contra: funciona melhor contra lineup com um right-clicker de dano alto claro pra copiar.
- fonte: items.json (ultimate_scepter); constants_abilities.json (grimstroke_dark_portrait); dota-tier1 compras.parquet (N=5 pos5, mediana 38:48); dotacoach.gg/heroes/grimstroke (alcance de cast)

### Situacionais
#### Ghost Scepter (ghost)
- minuto: 29:41
- porque: fica imune a dano físico por 4s, direto contra carry ou offlaner de right-click que vem focar o suporte duro primeiro.
- detalhe: +5 em todos os atributos; mas fica 30% mais vulnerável a dano mágico nesses 4s.
- contra: carries físicos puros que fazem dive nele antes do suporte principal do time.
- fonte: items.json (ghost); dota-tier1 compras.parquet (N=16 pos5, mediana 29:41)

#### Force Staff (force_staff)
- minuto: 30:11
- porque: reposiciona antes de acertar Soulbind ou Ink Swell, e puxa aliado que iniciou mal; mais comum aqui do que no pos 4.
- detalhe: +10 de inteligência e 175 de vida fixos, não interrompe a ação de quem recebe.
- contra: iniciação corpo a corpo que fecha distância rápido demais pra um Force sozinho resolver.
- fonte: items.json (force_staff); dota-tier1 compras.parquet (N=8 pos5, mediana 30:11)

#### Solar Crest (solar_crest)
- minuto: 24:48
- porque: dá +5 de armadura, 60 de velocidade de ataque e barreira física pro carry, papel clássico de suporte duro protegendo quem carrega a luta.
- detalhe: barreira de 350 de dano físico, 7s de duração, compartilha recarga com Pavise; não dá os bônus de atributo se usado em si mesmo.
- contra: composições de poke físico constante tentando abater o carry aliado antes da luta principal.
- fonte: items.json (solar_crest); dota-tier1 compras.parquet (N=8 pos5, mediana 24:48)

#### Scythe of Vyse (sheepstick)
- minuto: 40:20
- porque: trava quem depende de canalização ou de um único ativo pra virar a luta, mesmo raciocínio do pos 4.
- detalhe: +30 de inteligência, +8,5 de regen de mana, destrói ilusões instantaneamente ao acertar.
- contra: heróis cujo poder de luta depende de um canal longo ou de ativar um item defensivo pra sobreviver ao burst.
- fonte: items.json (sheepstick); dota-tier1 compras.parquet (N=5 pos5, mediana 40:20)

## Roshan
Sem dado de Roshan solo. Grimstroke não aparece como autor do abate (campo `heroi`) em nenhuma das 2.720 entradas de `solos.json` (dota-roshan-solo/data, 1.328 partidas), nem em `resumo_por_heroi.json` ou `resumo_com_suporte.json`, que cobrem só heróis que efetivamente solam ou participam ativamente do abate carregando o dano principal. Ele aparece com dano registrado em 72 dessas 2.720 entradas (campo `evidencia.dano_por_heroi`), com mediana de 433 de dano contra uma mediana de 5.254 do matador principal (o próprio Grimstroke varia de 42 a 3.087 nessas entradas, então não é sempre marginal) enquanto outro herói leva o crédito, então o papel dele no Roshan é apoiar com disable e vision, não bater nele.
