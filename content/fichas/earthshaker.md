---
id: ficha-earthshaker
titulo: "Earthshaker"
heroi: Earthshaker
patch: 7.41
posicoes: [2, 3, 4, 5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/early_rosh_pro.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/late_rosh_pro.json
- https://api.opendota.com/api/heroes/7/itemPopularity
- https://dotacoach.gg/en/heroes/earthshaker
- https://dota2protracker.com/hero/Earthshaker
- https://liquipedia.net/dota2/Fissure
---
## Resumo

Earthshaker é um iniciador/disable duro de Força: trava um grupo com Fissure (parede que bloqueia e atordoa em linha) e detona todo mundo clumped com Echo Slam, cujo dano dobra por herói extra atingido. No 7.41f ele é jogado em quatro posições de verdade e quase nunca como carry: offlane 33,1% de seleção (48,7% de vitória, 37.073 partidas), suporte 28,0% (51,5%, 31.293), mid 25,8% (51,7%, 28.849) e suporte duro 12,2% (49,9%, 13.604), contra só 0,9% como carry (45,7%) (dotacoach.gg, patch 7.41f). O 7.41 geral deu três buffs que empurraram ele pras quatro posições: stun da Fissure de 1,0/1,2/1,4/1,6s (era 0,8 a 1,4), raio do Aftershock de 300 para 350, e velocidade da onda do Echo Slam de 550 para 650 (dotacoach.gg, changelog 7.41).

## Pos 2 (mid)

- quando pegar: é a 3ª posição mais jogada (25,8% de seleção, 51,7% de vitória em 28.849 partidas no 7.41f), atrás de offlane e suporte; no mid ele farma Enchant Totem pra sair da lane com nível e Blink mais rápido que nas outras posições (dotacoach.gg, patch 7.41f).
- itens iniciais: branches, branches, branches, branches, ward_observer, tango, faerie_fire
### Build
#### Bottle (bottle)
- minuto: 2 min
- porque: mana e cura passando no rio pra não voltar à base entre waves.
- detalhe: com 4 Iron Branch abertos, o Bottle é o primeiro item de mana porque ele lança Fissure/Enchant Totem pra disputar last hit desde o minuto 1. Reabastece na fonte ou nas runas do rio.
- fonte: dota2protracker.com/hero/Earthshaker (build mid, 7000+ MMR, 4.760 partidas, 48,9% de vitória)

#### Magic Wand (magic_wand)
- minuto: 6 min
- porque: carga de vida e mana de graça toda vez que o inimigo lança feitiço perto.
- detalhe: dá +3 em todos os atributos e 15 de vida/mana por carga (até 20 cargas), carregando sempre que um inimigo visível a 1200 de distância usa habilidade; numa lane de trade, carrega rápido.
- fonte: dota2protracker.com/hero/Earthshaker (build mid); items.json (mecânica)

#### Power Treads (power_treads)
- minuto: 9 min
- porque: velocidade de ataque e troca de atributo pra Força quando for travar dano.
- detalhe: +25 de velocidade de ataque e +10 no atributo escolhido; em Força soma vida pro trade de lane, em Agilidade acelera o farm de Enchant Totem.
- fonte: dota2protracker.com/hero/Earthshaker (build mid)

#### Blink Dagger (blink)
- minuto: 11 min
- porque: fecha os 1200 de distância pra abrir Fissure no meio do grupo inimigo.
- detalhe: teleporta até 1200 de distância; fica 3s sem poder usar depois de receber dano de herói ou Roshan, então o combo é Blink antes de ser visto, não no meio da troca.
- combo: Blink pra dentro do grupo, Fissure corta a rota de fuga e o grupo clumped, Echo Slam detona todo mundo (cada herói extra atingido soma um eco; é o combo de base do herói em qualquer posição).
- fonte: items.json (mecânica); dota2protracker.com/hero/Earthshaker (build mid); dotacoach.gg/en/heroes/earthshaker (estratégia: "Use Blink Dagger right away, before opponents see it in your inventory")

#### Kaya (kaya)
- minuto: 20 min
- porque: +10% de amplificação mágica em todas as habilidades, inclusive Aftershock e Echo Slam.
- detalhe: +16 de Inteligência e +30% de regeneração de mana; componente do Yasha and Kaya mais pra frente se o jogo passar de 25 min.
- fonte: dota2protracker.com/hero/Earthshaker (build mid)

#### Aghanim's Shard (aghanims_shard)
- minuto: 21 min
- porque: toda habilidade que ele lança depois da Fissure dispara um Aftershock extra ao longo da linha da parede.
- detalhe: o Aftershock extra atordoa por menos tempo que o normal, mas estende o controle pra quem está longe do centro da luta, perto da linha da Fissure.
- combo: Fissure pra criar a linha, depois Enchant Totem ou qualquer outro feitiço emenda um Aftershock extra na mesma linha, prendendo quem tentou contornar a parede pela lateral.
- fonte: liquipedia.net/dota2/Fissure (efeito do Shard); dota2protracker.com/hero/Earthshaker (build mid)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 22 min
- porque: Enchant Totem vira salto com alvo no chão, com cleave na aterrissagem.
- detalhe: em vez de só empoderar o próximo ataque, ele salta até o ponto escolhido (altura 950, duração do salto 0,8s) e o ataque de chegada acerta em área; lançar em si mesmo mantém o efeito antigo sem o salto.
- combo: segunda forma de iniciação além do Blink, pra pular literalmente por cima de terreno ou de uma unidade que bloqueia o caminho até o Echo Slam.
- fonte: items.json (constants_abilities, earthshaker_enchant_totem, atributos scepter_height/scepter_leap_duration); rdy.gg/en/dota2/heroes/earthshaker (leitura do efeito)

#### Black King Bar (black_king_bar)
- minuto: 29 min
- porque: dispel básico e 60% de resistência mágica pra sobreviver até soltar o combo.
- detalhe: 9/8/7s de imunidade a feitiço de alvo conforme o nível do item; como mid ele chega sozinho na frente da luta, então precisa estar vivo pra lançar Fissure/Echo Slam antes de qualquer coisa.
- fonte: dota2protracker.com/hero/Earthshaker (build mid); items.json (mecânica)

### Situacionais
#### Monkey King Bar (monkey_king_bar)
- minuto: build "off-meta" (sem tempo típico de fonte)
- porque: 80% de chance de furar evasão nos ataques.
- detalhe: pra linhas com Phantom Assassin, Butterfly ou Windranger, que dependem de evasão pra sobreviver ao Echo Slam.
- contra: evasão alta (mecânica do item: Pierce, 80% de chance, +70 de dano mágico por acerto)
- fonte: dota2protracker.com/hero/Earthshaker (lista de builds off-meta, papel mid); items.json (mecânica)

#### Shiva's Guard (shivas_guard)
- minuto: build "off-meta" (sem tempo típico de fonte)
- porque: slow em área de 40% mais aura que reduz velocidade de ataque do time inimigo.
- detalhe: ajuda a manter o grupo inimigo dentro do raio do Echo Slam por mais tempo e reduz o DPS de quem bate nele.
- contra: time inimigo de dano físico constante (right-click), pela aura de -45 de velocidade de ataque
- fonte: dota2protracker.com/hero/Earthshaker (lista de builds off-meta, papel mid); items.json (mecânica)

## Pos 3 (offlane)

- quando pegar: é a posição mais jogada do herói (33,1% de seleção, 48,7% de vitória em 37.073 partidas no 7.41f); como offlane ele entra sozinho contra a trilane e segura a lane em vez de ganhar ela, se pagando no meio-jogo com Blink e Echo Slam em grupo (dotacoach.gg, patch 7.41f).
- itens iniciais: gauntlets, gauntlets, branches, branches, magic_stick
### Build
#### Magic Wand (magic_wand)
- minuto: 5 min
- porque: sustenta a troca de golpe na lane de 2x2/3x3 sem gastar Healing Salve.
- detalhe: monta a partir do Magic Stick inicial; carrega toda vez que levar feitiço de perto, comum na trocação de offlane.
- fonte: dota2protracker.com/hero/Earthshaker (build offlane, 2.574 partidas, 51,1% de vitória)

#### Soul Ring (soul_ring)
- minuto: 6 min
- porque: mana pra spamar Fissure/Enchant Totem na lane sem secar.
- detalhe: converte vida em 170 de mana por 10s; dá +6 de Força e +2 de armadura de cara, bom pra quem está sozinho na trocação da offlane.
- fonte: dota2protracker.com/hero/Earthshaker (build offlane); items.json (mecânica)

#### Blink Dagger (blink)
- minuto: 12 min
- porque: entra na troca de 3x3/4x4 de fora do alcance de resposta.
- detalhe: 1200 de alcance, 3s de bloqueio após levar dano de herói; pela offlane ele costuma estar fora de visão antes do Blink, então o combo sai sem ser visto.
- combo: Blink pra dentro do grupo que farma ou empurra a lane, Fissure separa quem está na frente de quem está atrás, Echo Slam na parte que ficou presa.
- fonte: dota2protracker.com/hero/Earthshaker (build offlane); dotacoach.gg/en/heroes/earthshaker ("In fights, use Fissure to split the enemy team or isolate one hero")

#### Kaya (kaya)
- minuto: 20 min
- porque: amplifica o dano de Aftershock e Echo Slam no primeiro item de luta.
- detalhe: +16 de Inteligência, +10% de amplificação mágica, +30% de regeneração de mana.
- fonte: dota2protracker.com/hero/Earthshaker (build offlane)

#### Aghanim's Shard (aghanims_shard)
- minuto: 21 min
- porque: estende o controle da Fissure com um Aftershock extra a cada feitiço seguinte.
- detalhe: mesmo efeito do mid: lançar qualquer habilidade depois da Fissure dispara Aftershock ao longo da linha da parede.
- combo: Fissure na lateral da luta de 5, Enchant Totem imediatamente depois emenda o segundo Aftershock no meio do grupo.
- fonte: liquipedia.net/dota2/Fissure (efeito do Shard); dota2protracker.com/hero/Earthshaker (build offlane)

#### Yasha and Kaya (yasha_and_kaya)
- minuto: 26 min
- porque: soma velocidade de ataque e de lançamento ao amp mágico que já tinha.
- detalhe: +16 de Agilidade, +20 de velocidade de ataque, +12% de velocidade de movimento, +25% de velocidade de lançamento, +40% de regen de mana, +12% de amp mágico; dá mobilidade pra entrar e saltar antes do grupo inimigo reagir.
- fonte: dota2protracker.com/hero/Earthshaker (build offlane, componente mais visto em 58,0% das partidas)

### Situacionais
#### Black King Bar (black_king_bar)
- minuto: build "off-meta" (sem tempo típico de fonte)
- porque: dispel e imunidade a feitiço de alvo pra garantir que o combo saia.
- detalhe: contra time com vários disables de alvo único que travam o Fissure/Echo Slam antes dele lançar.
- contra: disable de alvo único em sequência (mecânica do item: dispel básico, imune a feitiço de alvo por 9/8/7s)
- fonte: dota2protracker.com/hero/Earthshaker (lista de builds off-meta, papel offlane); items.json (mecânica)

#### Linken's Sphere (sphere)
- minuto: build "off-meta" (sem tempo típico de fonte)
- porque: bloqueia o primeiro feitiço de alvo único a cada 14s, protegendo o combo antes dele sair.
- detalhe: Spellblock bloqueia a maioria dos feitiços direcionados a ele uma vez por ciclo; útil pra garantir que o Blink/Fissure não seja cancelado por um disable de alvo.
- contra: iniciação de alvo único (mecânica do item: Spellblock, 14s de recarga)
- fonte: dota2protracker.com/hero/Earthshaker (lista de builds off-meta, papel offlane); items.json (mecânica)

## Pos 4 (suporte de roaming)

- quando pegar: 2ª posição mais jogada (28,0% de seleção, 51,5% de vitória em 31.293 partidas no 7.41f), a de maior taxa de vitória entre as quatro; sem precisar de slot pra farm, ele compra Blink e Shard mais rápido que mid e offlane proporcionalmente ao resto do inventário (dotacoach.gg, patch 7.41f).
- itens iniciais: boots, ward_observer, ward_sentry, blood_grenade
### Build
#### Arcane Boots (arcane_boots)
- minuto: 11 min
- porque: mana pro time inteiro no meio da rotação de suporte.
- detalhe: +125 de mana e, ao usar, devolve 150 de mana num raio de 1200; sustenta ele e os aliados em visão/greed sem precisar voltar à base.
- fonte: dota2protracker.com/hero/Earthshaker (build suporte, 3.083 partidas, 51,9% de vitória)

#### Blink Dagger (blink)
- minuto: 16 min
- porque: iniciação de longe sem precisar caminhar até o grupo.
- detalhe: 1200 de alcance, 3s de bloqueio após dano de herói; chega 5 min depois do offlane porque o suporte gasta ouro em wards antes.
- combo: Blink de fora da visão inimiga pra dentro do grupo parado numa wave ou rune, Fissure trava a rota de fuga, Echo Slam fecha com o time chegando.
- fonte: dota2protracker.com/hero/Earthshaker (build suporte)

#### Aghanim's Shard (aghanims_shard)
- minuto: 22 min
- porque: transforma qualquer feitiço seguinte à Fissure num Aftershock extra na linha.
- detalhe: como suporte ele costuma ter Enchant Totem de reserva pra depois da Fissure, soltando os dois Aftershocks em sequência rápida.
- combo: mesmo da offlane e do mid: Fissure cria a linha, o próximo feitiço emenda o segundo Aftershock.
- fonte: liquipedia.net/dota2/Fissure (efeito do Shard); dota2protracker.com/hero/Earthshaker (build suporte)

#### Kaya (kaya)
- minuto: 27 min
- porque: amplifica o dano das habilidades depois que o controle já está garantido.
- detalhe: +16 de Inteligência, +10% de amp mágico, +30% de regen de mana; chega depois do Shard porque o suporte prioriza controle antes de dano.
- fonte: dota2protracker.com/hero/Earthshaker (build suporte)

### Situacionais
#### Force Staff (force_staff)
- minuto: visto em partida de destaque (sem tempo típico de fonte)
- porque: empurra 600 de distância, pra reposicionar um aliado antes de um disable ou puxar um inimigo pra dentro do grupo.
- detalhe: usado em jogo de destaque do papel de suporte; serve tanto pra salvar aliado quanto pra completar o combo arrastando quem fugiu da Fissure.
- contra: fuga de alvo único (mecânica do item: Force, empurra 600)
- fonte: dota2protracker.com/hero/Earthshaker (match highlights, papel suporte); items.json (mecânica)

#### Glimmer Cape (glimmer_cape)
- minuto: visto em partida de destaque (sem tempo típico de fonte)
- porque: invisibilidade e barreira de 375 de dano mágico pra sobreviver ao foco antes de soltar o combo.
- detalhe: 0,5s de delay antes de ativar; dá pra lançar durante o canalizar de outra habilidade.
- contra: foco de dano mágico ou projétil em cima dele antes da iniciação (mecânica do item: barreira de 375 de dano mágico)
- fonte: dota2protracker.com/hero/Earthshaker (match highlights, papel suporte); items.json (mecânica)

## Pos 5 (suporte duro)

- quando pegar: a menos jogada das quatro posições reais (12,2% de seleção, 49,9% de vitória em 13.604 partidas no 7.41f); o item mais visto no papel (Arcane Boots → Blink → Shard → Kaya) é o mesmo da pos 4, só que até 1 min mais atrasado porque o ouro de suporte duro é menor (dotacoach.gg, patch 7.41f; dota2protracker.com/hero/Earthshaker).
- itens iniciais: boots, ward_sentry, blood_grenade
### Build
#### Arcane Boots (arcane_boots)
- minuto: 11 min
- porque: mana de time cedo, igual ao pos 4.
- detalhe: +125 de mana, devolve 150 de mana num raio de 1200 ao usar; primeiro item porque o resto do ouro de suporte duro vai pra ward.
- fonte: dota2protracker.com/hero/Earthshaker (build suporte duro, 338 partidas, 44,1% de vitória)

#### Blink Dagger (blink)
- minuto: 17 min
- porque: dá iniciação pra quem não tem ouro pra mais nada além de wards e Blink.
- detalhe: 1200 de alcance, 3s de bloqueio após dano de herói; chega 1 min depois do pos 4 por ter menos ouro de farm.
- combo: mesmo combo-base de Blink + Fissure + Echo Slam, mas aqui é literalmente o único jeito do suporte duro iniciar sem depender do time andar até a luta.
- fonte: dota2protracker.com/hero/Earthshaker (build suporte duro)

#### Aghanim's Shard (aghanims_shard)
- minuto: 22 min
- porque: dobra o controle da Fissure sem custar o ouro de um item grande.
- detalhe: barato (1.400) pro orçamento de suporte duro e ainda assim estende o atordoamento pela linha inteira.
- combo: Fissure mais o próximo feitiço (Enchant Totem ou Aftershock já ativo) emendam dois Aftershocks na mesma linha.
- fonte: liquipedia.net/dota2/Fissure (efeito do Shard); dota2protracker.com/hero/Earthshaker (build suporte duro)

#### Kaya (kaya)
- minuto: 28 min
- porque: amp mágico tardio, depois que controle e visão já estão garantidos.
- detalhe: +16 de Inteligência, +10% de amp mágico, +30% de regen de mana; último item do ciclo porque o suporte duro gasta o ouro inicial quase todo em wards.
- fonte: dota2protracker.com/hero/Earthshaker (build suporte duro)

### Situacionais
#### Ethereal Blade (ethereal_blade)
- minuto: visto em partida de destaque (sem tempo típico de fonte)
- porque: tira o carry físico da luta por alguns segundos e amplia o dano mágico que ele vai levar.
- detalhe: alvo fica imune a dano físico mas não pode atacar e leva mais dano mágico; usado em jogo de destaque do papel de suporte duro.
- contra: carry de dano físico puro (mecânica do item: Ether Blast, imunidade física + vulnerabilidade mágica)
- fonte: dota2protracker.com/hero/Earthshaker (match highlights, papel suporte duro); items.json (mecânica)

#### Refresher Orb (refresher)
- minuto: visto em partida de destaque (sem tempo típico de fonte)
- porque: dá um segundo Echo Slam/Fissure na mesma luta, se o jogo já estiver bem avançado.
- detalhe: reseta todas as recargas; só vale a pena em jogo longo, onde o suporte duro já converteu farm de ward em item grande.
- contra: luta longa com o grupo inimigo se reagrupando (mecânica do item: reseta cooldowns)
- fonte: dota2protracker.com/hero/Earthshaker (match highlights, papel suporte duro); items.json (mecânica)

## Roshan

Earthshaker não aparece como herói que soloa Roshan nos replays locais. No conjunto de 2.720 eventos de morte de Roshan processados (dota-roshan-solo/data/solos.json), só 1 teve Earthshaker como maior causador de dano, e esse evento é partida turbo (não pro) e foi classificado como "time", não solo; ele não aparece nas listas de pros que soloam Roshan (early_rosh_pro.json, late_rosh_pro.json) nem no resumo por herói que soloa (resumo_por_heroi.json, 22 heróis, nenhum deles Earthshaker) ou com apoio de suporte (resumo_com_suporte.json, 29 heróis, idem). Ele aparece como aliado contribuindo dano em 30 dos 2.166 eventos classificados como kill em time nesses mesmos replays. Função dele no Roshan é travar a luta pelo poço, não farmar o bicho sozinho: Fissure bloqueia a rota de fuga de quem está perto do Roshan e Echo Slam detona o grupo que ficou preso ali, do mesmo jeito que numa luta em qualquer outro ponto do mapa.
