---
id: ficha-magnataur
titulo: "Magnus"
heroi: Magnus
patch: 7.41
posicoes: [2, 3]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet
- C:/Users/felip/Desktop/dota-tier1/data/derivados/objetivos.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- https://liquipedia.net/dota2/Magnus
- https://api.opendota.com/api/heroes/97/itemPopularity
---

## Resumo
Magnus é universal corpo a corpo, oficialmente Initiator/Disabler/Nuker/Escape: ele fecha a luta sozinho com Blink Dagger seguido de Reverse Polarity, que puxa e atordoa todo mundo num raio de 430 ao redor dele, e usa Shockwave, Empower e Skewer pra farmar e empurrar o grupo pro mesmo lugar antes disso. No Atlas Tier 1 (patch 7.41), das 18 escolhas confirmadas por replay (`posicao_replay`), 13 foram na posição 3 e 2 na posição 2; as outras (2 pos 4, 1 pos 1) são amostra demais pequena pra entrar nesta ficha. Ele também foi banido em 15 das 33 ações de draft registradas na mesma base, sinal de que o cenário pro atual trata ele como pick forte.

## Pos 3 (offlane)
- quando pegar: é a posição real dele hoje: 13 das 18 escolhas pos-replay do Atlas Tier 1 foram pos 3. Pegue quando quiser um offlaner que aguenta troca de dano sozinho (Power Treads resolve o attack speed, Echo Sabre resolve vida e sustain) e abre luta sem precisar de setup de aliado, só Blink e Reverse Polarity.
- itens iniciais: sem kit fixo na amostra. Tango é o único item de início que se repete (6 das 10 partidas pos 3 com compra registrada antes de 1 min); o resto varia entre recipe_bracer, gauntlets ou branches+flask conforme a partida (dota-tier1 compras.parquet)

### Build
#### Power Treads (power_treads)
- minuto: 7
- porque: ataque rápido e +10 no atributo trocado dão o farm de camp e o last hit que faltam sem gastar o slot em botas de suporte.
- detalhe: 1400 de ouro, +25 de velocidade de ataque e +10 em Força, Agilidade ou Inteligência (troca na hora). Comprado em 13 das 13 partidas pos 3 da amostra.
- fonte: items.json (power_treads); dota-tier1 compras.parquet (13/13 partidas pos 3, mediana 6,9 min)

#### Blink Dagger (blink)
- minuto: 14
- porque: é a peça que fecha a iniciação; sem alcance de 1200, a Reverse Polarity não chega no time inimigo de surpresa.
- detalhe: 2250 de ouro. Fica bloqueado por 3s depois de levar dano de herói ou Roshan, então não serve de escape puro sob foco direto.
- combo: Blink pro meio do grupo inimigo e Reverse Polarity na sequência: o atordoamento (2,5 a 3,5s por nível) e o dano em área (100 a 300) pegam todo mundo dentro de 430 de raio, e a ultimate atravessa Black King Bar do inimigo (só dispel forte remove, dispel básico não).
- fonte: items.json (blink); constants_abilities.json (magnataur_reverse_polarity: bkbpierce = Yes, dispellable = Strong Dispels Only); dota-tier1 compras.parquet (13/13 partidas pos 3, mediana 13,6 min)

#### Echo Sabre (echo_sabre)
- minuto: 22
- porque: o ataque duplo com lentidão trava o alvo perto o suficiente pro Empower bater duas vezes com cleave.
- detalhe: 2700 de ouro (ogre_axe + broadsword + void_stone). Echo Strike faz o ataque corpo a corpo acertar duas vezes em sequência, com 100% de lentidão por 0,8s no primeiro golpe; soma +20 de dano e +15 de Força.
- combo: a lentidão do Echo Strike segura o inimigo perto o suficiente pra Reverse Polarity ainda alcançar se o engajamento atrasar um pouco.
- fonte: items.json (echo_sabre); dota-tier1 itens_chave.parquet (9/13 partidas pos 3, mediana 21,8 min)

#### Black King Bar (black_king_bar)
- minuto: 22
- porque: sem ele, qualquer stun ou silence cancela o Blink ou a Reverse Polarity antes de conectar.
- detalhe: 4050 de ouro (mithril_hammer + ogre_axe). Dispel básico, 60% de resistência mágica e imunidade a efeito negativo de feitiço por 9s na primeira vez (cai pra 8s e 7s nos usos seguintes).
- contra: disable de alvo único ou silence que travaria a iniciação antes do Blink conectar.
- fonte: items.json (black_king_bar); dota-tier1 itens_chave.parquet (12/13 partidas pos 3, mediana 21,7 min)

#### Harpoon (harpoon)
- minuto: 26
- porque: puxa quem está fugindo pro alcance do próximo golpe, e mantém o Echo Strike ativo.
- detalhe: 4700 de ouro (echo_sabre + diadem). Draw Forth puxa o alvo (ou puxa Magnus) até 35% da distância entre os dois; contra alvo corpo a corpo, sempre fecha pra distância de ataque. Mantém o Echo Strike da Echo Sabre, agora com 1s de lentidão em vez de 0,8s.
- combo: Reverse Polarity puxa e atordoa o grupo, Harpoon busca quem escapou da área antes do stun acabar, Empower cleave bate em todo mundo que ficou perto.
- fonte: items.json (harpoon); dota-tier1 itens_chave.parquet (9/13 partidas pos 3, mediana 26,1 min)

### Situacionais
#### Aghanim's Scepter (ultimate_scepter)
- minuto: 38
- porque: destrava Horn Toss, um controle a mais pra limpar quem sobrou de pé depois da Reverse Polarity.
- detalhe: 4200 de ouro. No kit do Magnus, o Scepter desbloqueia a habilidade Horn Toss no quinto slot (joga os inimigos na frente pro ar e atordoa); sem o item, a habilidade não existe pra ser usada.
- contra: lutas em que o grupo inimigo tem um disable ou herói que sobrevive à Reverse Polarity sem ser pego dentro do raio de 430.
- combo: Reverse Polarity puxa e atordoa o grupo, Horn Toss lança de novo quem ainda está perto quando o stun da RP acaba.
- fonte: liquipedia.net/dota2/Magnus (infobox de habilidades: "ability4 = Horn Toss;aghs"; "aghname0 = Horn Toss"); dota-tier1 itens_chave.parquet (4/13 partidas pos 3, mediana 38,3 min)

#### Linken's Sphere (sphere)
- minuto: 36
- porque: bloqueia o primeiro feitiço de alvo único que tentaria travar o Magnus antes dele iniciar.
- detalhe: 4800 de ouro. Spellblock bloqueia o próximo feitiço de alvo único a cada 14s; dá +16 em todos os atributos.
- contra: hex, stun ou silence de alvo único mirado nele antes do Blink, do tipo que impede o resto do combo de saber.
- fonte: items.json (sphere); dota-tier1 itens_chave.parquet (3/13 partidas pos 3, mediana 36,0 min)

#### Shiva's Guard (shivas_guard)
- minuto: 44
- porque: a aura de attack speed negativa bate no time inimigo inteiro bem na hora em que a Reverse Polarity acabou de puxar todo mundo pro mesmo lugar.
- detalhe: 4500 de ouro (platemail + splintmail + chasm_stone). Freezing Aura reduz -45 de velocidade de ataque em raio 1200; Arctic Blast causa 260 de dano mágico e -40% de velocidade de movimento por 4s num raio de 825, acompanhando o próprio Magnus enquanto se expande.
- contra: time inimigo de ataque rápido ou de ilusão (a aura reduz o DPS de ilusão do mesmo jeito que o de herói).
- combo: usar o Arctic Blast durante ou logo depois da Reverse Polarity mantém o grupo inimigo mais lento enquanto ainda está agrupado pelo puxão.
- fonte: items.json (shivas_guard); dota-tier1 itens_chave.parquet (3/13 partidas pos 3, mediana 43,7 min)

#### Silver Edge (silver_edge)
- minuto: 52
- porque: entra invisível pra um Blink que o inimigo não vê chegando, e quebra a passiva de quem depende dela pra sobreviver ou bater.
- detalhe: 5700 de ouro. Shadow Walk dá invisibilidade por 17s (termina ao atacar ou lançar feitiço); o ataque que termina a invisibilidade causa +300 de dano físico e desativa habilidades passivas do alvo por 5s.
- contra: herói que depende de habilidade passiva pra aguentar ou causar dano (evasão, lifesteal passivo, redução de dano passiva); também serve pra iniciar de dentro do fog sem avisar o inimigo.
- fonte: items.json (silver_edge); dota-tier1 itens_chave.parquet (2/13 partidas pos 3, via item_invis_sword/Shadow Blade completando em Silver Edge, mediana 51,6 min)

Refresher Orb (5000 de ouro) também aparece em 4 das 13 partidas pos 3 da amostra, mediana aos 37 min: reseta o cooldown de tudo, então serve pra repetir Reverse Polarity e Skewer numa luta longa ou tentar Roshan duas vezes rápido. Aghanim's Shard (1400 de ouro) não teve nenhuma compra registrada na amostra local nem foi confirmado numa fonte web acessível nesta pesquisa (ver itens sem fonte); ele existe como upgrade padrão de Aghanim, mas sem dado de uso real do Magnus.

## Pos 2 (mid)
- quando pegar: amostra pequena (2 das 18 escolhas pos-replay do Atlas Tier 1), mas real e consistente: mesmo kit de pos 3, só que com Bottle pra runa e itens core mais rápidos por farmar lane sozinho em vez de dividir offlane.
- itens iniciais: sem kit fixo na amostra (só 2 partidas). Tango aparece nas 2; uma delas segue pra bottle, a outra pra gauntlets/bracer (dota-tier1 compras.parquet)

### Build
#### Power Treads (power_treads)
- minuto: 12
- porque: mesma função do pos 3 (ataque e atributo), só que chega um pouco depois porque o ouro inicial vai pro Bottle.
- detalhe: 1400 de ouro, +25 de velocidade de ataque e +10 no atributo trocado.
- fonte: items.json (power_treads); dota-tier1 compras.parquet (2/2 partidas pos 2, mediana 12,2 min)

#### Blink Dagger (blink)
- minuto: 13
- porque: mesmo papel do pos 3, fechar a Reverse Polarity; no mid ele chega quase junto com o Treads por ter farm de lane garantido.
- detalhe: 2250 de ouro, alcance de 1200, bloqueado por 3s após dano de herói ou Roshan.
- combo: Blink + Reverse Polarity imediato, atravessando Black King Bar do alvo (bkbpierce = Yes na habilidade).
- fonte: items.json (blink); dota-tier1 compras.parquet (2/2 partidas pos 2, mediana 12,7 min)

#### Black King Bar (black_king_bar)
- minuto: 21
- porque: mesma proteção de iniciação do pos 3, pra Blink e Reverse Polarity não serem canceladas antes de conectar.
- detalhe: 4050 de ouro. Dispel básico, 60% de resistência mágica, imunidade a efeito negativo de feitiço por 9s.
- contra: disable de alvo único ou silence que travaria a iniciação antes do Blink conectar.
- fonte: items.json (black_king_bar); dota-tier1 itens_chave.parquet (2/2 partidas pos 2, mediana 21,1 min)

#### Harpoon (harpoon)
- minuto: 34
- porque: mesmo papel de puxar quem fugiu e manter o Echo Strike; chega mais tarde no mid porque o farm de lane custeia o BKB primeiro.
- detalhe: 4700 de ouro (echo_sabre, comprado sozinho primeiro aos 28 min, + diadem).
- combo: Harpoon busca quem escapou da área da Reverse Polarity, Empower cleave bate em quem ficou perto.
- fonte: items.json (harpoon); dota-tier1 itens_chave.parquet (1/2 partidas pos 2, echo_sabre aos 28,3 min e harpoon aos 34,3 min)

### Situacionais
#### Silver Edge (silver_edge)
- minuto: 38
- porque: entra invisível pra um engajamento que o inimigo não vê vindo do mid, e quebra passiva de quem depende dela.
- detalhe: 5700 de ouro. Invisibilidade de 17s, ataque que a termina causa +300 de dano físico e desativa passivas do alvo por 5s.
- contra: herói que depende de habilidade passiva pra aguentar ou causar dano.
- fonte: items.json (silver_edge); dota-tier1 itens_chave.parquet (1/2 partidas pos 2, via invis_sword/Shadow Blade completando em Silver Edge, aos 38,3 min)

#### Desolator (desolator)
- minuto: 44
- porque: reduz a armadura do alvo, então o cleave do Empower e os ataques duplos do Echo Sabre causam mais dano real.
- detalhe: 3500 de ouro. Causa -6 de armadura no alvo atacado por 7s (Corruption).
- contra: herói ou criatura com armadura alta que neutraliza o dano físico do Magnus (tartaruga, tanque de armadura).
- fonte: items.json (desolator); dota-tier1 itens_chave.parquet (1/2 partidas pos 2, mediana 44,5 min)

Assault Cuirass e Refresher Orb também aparecem uma vez cada na amostra pos 2 (aos 31,6 e 42,1 min), mas com uma partida só cada, não dá pra tratar como padrão.

## Roshan
Sem dado de Roshan solo: Magnus não aparece em nenhuma das 22 fichas de `resumo_por_heroi.json` (base de Roshan solo por replay). Em contexto de time, ele é creditado com o abate de Roshan (`atacante = npc_dota_hero_magnataur`) em 3 ocasiões dentro de 2 das 18 partidas do Atlas Tier 1 em que foi escolhido, aos 25, 48 e 66 minutos, sempre pela LGD Gaming (`objetivos.parquet`): participação de time, não estratégia de solo.
