---
id: ficha-abaddon
titulo: "Abaddon"
heroi: Abaddon
patch: 7.41
posicoes: [3, 4, 5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/jogadores_partida.csv
- https://dotacoach.gg/en/heroes/abaddon
- https://dotacoach.gg/en/heroes/abaddon/builds/support
- https://dotacoach.gg/en/heroes/abaddon/builds/offlane
- https://winio.ai/wiki/dota2/heroes/abaddon-guide-best-build-skill-order-and-counters
---

## Resumo
Abaddon é um herói "all" (sem atributo fixo) feito pra ficar vivo e proteger o time: Aphotic Shield dispensa e blinda um aliado contra dano, Curse of Avernus agora é um proc passivo no ataque que desacelera o alvo e dá velocidade de ataque pra quem bate nele, e Borrowed Time transforma todo dano recebido em cura por alguns segundos, ativando automático se a vida cair abaixo de 400 (fonte: constants_abilities.json). No 7.41f ele é essencialmente suporte: 37,1% das partidas como pos 5 (hard support, 52,3% de vitórias), 31,3% como pos 3 (offlane, 50,6%) e 23,5% como pos 4 (soft support, 52,9%, a maior taxa de vitória das três). Como pos 1 carry (6,6% das partidas) ou pos 2 mid (1,5%) o winrate cai pra 49,6% e 46,5%, abaixo de 50%, o que marca essas duas posições como fora do meta real (fonte: dotacoach.gg/en/heroes/abaddon, tabela "Stats by Role" do 7.41f). No pro play de alto nível ele não aparece: zero pro_pick no acumulado do OpenDota local e só 1 pick (mais 7 bans) nas equipes do Atlas tier 1 analisadas, um jogo isolado da OG o escalando de pos 1 contra a LGD (fonte: heroStats.json; draft.csv, jogadores_partida.csv).

## Pos 5 (suporte duro)
- quando pegar: é a posição mais pegada do herói (37,1% das partidas, 52,3% de vitórias no 7.41f): o time quer um suporte puro que mantenha o carry vivo com dispel e cura passiva, sem depender de farm (fonte: dotacoach.gg/en/heroes/abaddon).
- itens iniciais: tango, magic_stick, branches, blood_grenade, ward_sentry

### Build
#### Magic Wand (magic_wand)
- porque: ganha carga com cada spell inimigo visível em 1200 de raio, HP/mana de emergência de graça.
- detalhe: substitui o Magic Stick do início assim que acumula cargas suficientes. Custo baixo (460) pra um suporte que não vai ter muito ouro livre cedo.
- fonte: items.json; dotacoach.gg/en/heroes/abaddon/builds/support

#### Ring of Basilius (ring_of_basilius)
- porque: regen de mana em dupla pra sustentar Aphotic Shield e Mist Coil na lane.
- detalhe: dá pro próprio Abaddon e pro aliado perto, então ajuda a lane inteira a ficar lançando feitiço sem voltar pra base.
- fonte: dotacoach.gg/en/heroes/abaddon/builds/support

#### Arcane Boots (arcane_boots)
- porque: devolve mana pro time inteiro, não só pro Abaddon.
- detalhe: a ativa (Replenish) é melhor investimento de ouro de suporte do que status puro de bota nessa fase do jogo. Normalmente vira Guardian Greaves mais tarde.
- combo: ativa antes de engajar pra reabastecer o time e permitir mais um Aphotic Shield/Mist Coil na luta.
- fonte: items.json; dotacoach.gg/en/heroes/abaddon/builds/support

#### Wind Lace (wind_lace)
- porque: velocidade de movimento barata pra fechar distância no gank e puxar Aphotic Shield a tempo.
- detalhe: item de 225 de ouro, geralmente comprado junto com as botas iniciais.
- fonte: dotacoach.gg/en/heroes/abaddon/builds/support

#### Holy Locket (holy_locket)
- porque: amplifica toda cura que o Abaddon aplica (inclusive o Mist Coil defensivo) e ainda estoura uma cura em área quando usado.
- detalhe: item central do kit de suporte dele porque empilha diretamente com o papel do herói (dano convertido em cura, Mist Coil de cura). Dá regen de mana de sobra.
- fonte: items.json; dotacoach.gg/en/heroes/abaddon/builds/support

#### Solar Crest (solar_crest)
- porque: +armadura pro carry quando ele ataca, -armadura pro alvo quando ele defende; ativa compartilha cooldown com Pavise.
- detalhe: dá pra usar tanto ofensivo (no carry, antes de engajar) quanto defensivo (no aliado que vai ser focado, reduzindo o dano que ele toma).
- combo: usar no aliado protegido pelo Aphotic Shield reforça a mesma troca de foco: o inimigo bate mais fraco no escudo e ainda perde armadura se o Abaddon virar a ativa pro ataque.
- fonte: items.json (compartilha cooldown com Pavise); dotacoach.gg/en/heroes/abaddon/builds/support

### Situacionais
#### Glimmer Cape (glimmer_cape)
- porque: invisibilidade curta e resistência mágica pra salvar um aliado focado por nuke.
- contra: resolve contra composições de dano mágico pesado e contra qualquer herói que dependa de vê-lo pra acertar (ex.: skillshots, ultimates com alvo).
- fonte: dotacoach.gg/en/heroes/abaddon/builds/support

#### Vladmir's Offering (vladmir)
- porque: aura de lifesteal, dano e armadura pro time inteiro, de graça pra quem está perto.
- contra: ajuda times que vivem de troca sustentada (Curse of Avernus já reduz a troca do inimigo, o Vladmir's reforça a sua).
- fonte: dotacoach.gg/en/heroes/abaddon/builds/support

#### Aether Lens (aether_lens)
- porque: aumenta o alcance de Aphotic Shield e Mist Coil, então o Abaddon ajuda de mais longe sem se expor.
- fonte: dotacoach.gg/en/heroes/abaddon/builds/support

#### Aghanim's Shard (aghanims_shard)
- porque: upgrade padrão de suporte no late pra reforçar o kit sem gastar num item de 4-5k.
- fonte: dotacoach.gg/en/heroes/abaddon/builds/support

## Pos 4 (suporte de roaming)
- quando pegar: é a segunda posição mais comum (23,5% das partidas) e a de maior taxa de vitória das três reais (52,9% no 7.41f); o time quer o mesmo kit de proteção mas com mais pressão/rotação no mapa em vez de ficar só na lane. Dota Coach usa o mesmo guia de item pra Support e Hard Support, então a build central é a mesma da pos 5, com a diferença estando no timing (sai mais pra ganks) e na priorização de Pavise antes de Holy Locket em alguns drafts (fonte: dotacoach.gg/en/heroes/abaddon, tabela "Stats by Role"; dotacoach.gg/en/heroes/abaddon/builds/support).
- itens iniciais: tango, magic_stick, branches, blood_grenade, ward_sentry

### Build
#### Magic Wand (magic_wand)
- porque: mesma lógica da pos 5, emergência de HP/mana barata pra sobreviver ao roam.
- fonte: dotacoach.gg/en/heroes/abaddon/builds/support

#### Boots of Speed → Arcane Boots (arcane_boots)
- porque: mobilidade pra rotacionar entre lanes cedo, depois convertida em mana pro time quando o roaming já rendeu.
- fonte: dotacoach.gg/en/heroes/abaddon/builds/support

#### Pavise (pavise)
- porque: barreira + velocidade de movimento instantânea, mais barata que Solar Crest, boa pra salvar um aliado no meio de um gank de rotação.
- detalhe: compartilha cooldown com Solar Crest, então o time normalmente não leva os dois ativos ao mesmo tempo no mesmo herói.
- fonte: items.json (compartilha cooldown com Solar Crest); dotacoach.gg/en/heroes/abaddon/builds/support

#### Holy Locket (holy_locket)
- porque: igual à pos 5, amplifica toda a cura do kit; na pos 4 geralmente vem depois do Pavise.
- fonte: items.json; dotacoach.gg/en/heroes/abaddon/builds/support

#### Guardian Greaves (guardian_greaves)
- porque: aura de cura, mana e resistência a status pro time inteiro em teamfight, o item de "virada" que justifica o farm extra de uma pos 4 mais agressiva.
- detalhe: o Mend não acumula com Mekansm Restore ou com outro Mend no mesmo cooldown, então não faz sentido comprar junto de Mekansm.
- fonte: items.json; dotacoach.gg/en/heroes/abaddon/builds/offlane

### Situacionais
#### Force Staff (force_staff)
- porque: empurra um aliado (ou o próprio Abaddon) fora de alcance de um combo, sem interromper a ação dele.
- contra: resolve contra iniciações de curto alcance e contra qualquer um que precise ficar parado perto do alvo pra conectar o combo.
- fonte: items.json; dotacoach.gg/en/heroes/abaddon/builds/support

#### Heaven's Halberd (heavens_halberd)
- porque: evasão + desarma no herói de ataque físico que está matando o seu carry.
- contra: resolve contra carries e core de dano físico sustentado que o Aphotic Shield sozinho não segura.
- fonte: dotacoach.gg/en/heroes/abaddon/builds/offlane

#### Glimmer Cape (glimmer_cape)
- porque: mesma lógica da pos 5, save rápido contra foco de nuke mágico.
- fonte: dotacoach.gg/en/heroes/abaddon/builds/support

## Pos 3 (offlane)
- quando pegar: é a terceira posição real (31,3% das partidas, 50,6% de vitórias no 7.41f). Como Curse of Avernus agora é um proc de ataque (e não mais um feitiço de alvo único), o Abaddon offlane troca mais no corpo a corpo em vez de só defender, com um começo de jogo puxado pra itens de dano/tanque em vez de suporte puro (fonte: dotacoach.gg/en/heroes/abaddon, tabela "Stats by Role"; constants_abilities.json, abaddon_frostmourne).
- itens iniciais: tango, quelling_blade, magic_stick, circlet, branches

### Build
#### Bracer (bracer)
- porque: força e vida extra cedo pra sobreviver à troca na lane de offlane.
- fonte: dotacoach.gg/en/heroes/abaddon/builds/offlane

#### Phase Boots (phase_boots)
- porque: fecha e sai de trocas rápido e ainda dá dano bônus no corpo a corpo, o que ajuda a aplicar Curse of Avernus com mais frequência.
- fonte: dotacoach.gg/en/heroes/abaddon/builds/offlane

#### Orb of Frost (orb_of_frost)
- porque: mais um efeito de lentidão no ataque, empilha com o slow do Curse of Avernus pra prender o alvo da lane.
- detalhe: normalmente evolui pra Eye of Skadi no late como item de dano/tanque, não comprado à parte.
- fonte: dotacoach.gg/en/heroes/abaddon/builds/offlane

#### Perseverance (pers)
- porque: regen de vida e mana junto, segura o offlane sem precisar voltar à base toda hora.
- fonte: dotacoach.gg/en/heroes/abaddon/builds/offlane

#### Solar Crest (solar_crest)
- porque: mesma lógica das posições de suporte, mas aqui o Abaddon costuma usar a ativa em si mesmo ou no aliado que vai liderar o engajamento, já que ele tem o próprio dano pra aproveitar o buff ofensivo.
- fonte: items.json; dotacoach.gg/en/heroes/abaddon/builds/offlane

#### Guardian Greaves (guardian_greaves)
- porque: item de transição padrão de um offlane tanque/suporte, dá sustain em área pro time inteiro nas lutas de grupo.
- fonte: items.json; dotacoach.gg/en/heroes/abaddon/builds/offlane

### Situacionais
#### Lotus Orb (lotus_orb)
- porque: devolve um debuff/ativa direcionada pro lançador, em cima do strong dispel que o Aphotic Shield e o Borrowed Time já dão.
- contra: resolve contra heróis de disable de alvo único que o time inimigo usa pra abrir a luta (hex, stun forte, silence direcionado).
- fonte: items.json; dotacoach.gg/en/heroes/abaddon/builds/offlane

#### Pipe of Insight (pipe)
- porque: barreira mágica em área pro time inteiro antes de uma luta grande.
- contra: resolve contra composições de dano mágico/nuke em área (a mesma lógica do Glimmer Cape, mas pro time inteiro de uma vez).
- fonte: items.json; dotacoach.gg/en/heroes/abaddon/builds/offlane; winio.ai (Pipe como escolha reativa contra magia)

#### Crimson Guard (crimson_guard)
- porque: bloqueio de dano em área pro time, melhor contra nuke físico/dano em rajada do que o Pipe (que é mágico).
- detalhe: múltiplas fontes de bloqueio de dano não empilham, e o buff não reaplica no mesmo aliado dentro do cooldown.
- fonte: items.json; dotacoach.gg/en/heroes/abaddon/builds/offlane

#### Blink Dagger (blink)
- porque: fecha distância pra jogar o Aphotic Shield ou puxar o Borrowed Time pro meio da luta na hora certa.
- fonte: dotacoach.gg/en/heroes/abaddon/builds/offlane

#### Aghanim's Scepter (ultimate_scepter)
- porque: upgrade de ultimate pra quem bancou o offlane até o late, dá mais um motivo pra ele ficar no corpo a corpo em vez de ficar só defendendo.
- fonte: dotacoach.gg/en/heroes/abaddon/builds/offlane

## Interações e contras (Borrowed Time)
O ponto fraco do kit inteiro é a ativação manual do Borrowed Time: ela é bloqueada por silence/hex como qualquer outro feitiço, sobrando só o gatilho automático sob 400 de vida.
- **Silencer** (Global Silence) e **Lion** (Hex) travam a ativação manual no momento exato em que o Abaddon ia se virar; contra Lion, o Finger of Death ainda consegue bater o suficiente pra passar pelo gatilho automático numa cast só.
- **Doom**: o silence do Doom trava a ativação e o dano contínuo da ultimate continua batendo durante a janela do Borrowed Time.
- **Bane**: Nightmare tira o Abaddon da luta antes de reagir, e o canal de Fiend's Grip não é interrompido pelo dispel forte do Borrowed Time.
- **Pugna**: Nether Ward pune cada Mist Coil lançado perto dele, virando a ferramenta de sustain do Abaddon contra ele mesmo.
- **Zeus**: dano mágico global e barato ignora completamente a necessidade de ficar perto do Abaddon pra puni-lo.

Do outro lado, o Abaddon rende mais contra times que dependem de dano sustentado em alvo único ou de burst/foco de curto alcance, porque Aphotic Shield e Withering Mist cortam exatamente esse tipo de dano.
(fonte: winio.ai/wiki/dota2/heroes/abaddon-guide-best-build-skill-order-and-counters)

## Roshan
Sem registro de Roshan solo: nas 6 mortes de Roshan do dataset local de replays em que o Abaddon aparece como um dos heróis envolvidos, nenhuma foi classificada como solo, todas em equipe. A fração de dano que ele contribuiu nessas mortes em grupo variou de 31,2% a 67,6% do total (67,6% numa morte aos 44:35, contra 31,2%, 33,0%, 43,1%, 43,7% e 49,0% nas outras cinco registradas), ou seja, ele participa como mais um atacante no grupo, não como o carro-chefe do dano contra o Roshan.
(fonte: dota-roshan-solo/data/solos.json)
