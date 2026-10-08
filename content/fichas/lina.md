---
id: ficha-lina
titulo: "Lina"
heroi: Lina
patch: 7.41
posicoes: [2, 4]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/1win/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/1win/chaves.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/nigma/hub.json
- https://api.opendota.com/api/heroes/25/itemPopularity
- https://dotacoach.gg/heroes/lina
---

## Resumo

Lina é uma nuker/disabler de inteligência: Light Strike Array atordoa em área, Dragon Slave manda uma onda de dano em linha (turbinada por Slow Burn, que soma 64% do dano como queimadura em 4s) e Laguna Blade fecha com um nuque de alvo único pesado. Fiery Soul empilha velocidade de ataque e de movimento a cada feitiço que acerta, então ela sai rápida de qualquer combo. No 7.41 ela é essencialmente uma mid: 77,0% de seleção e 47,5% de vitória nessa posição, contra 9,9% (45,4%) de suporte e 5,9% (46,5%) de suporte duro; carry (5,4%, 42,4%) e offlane (1,7%, 45,3%) são ruído, não uso real (dotacoach.gg, patch 7.41f). A tag oficial do OpenDota (Support, Carry, Nuker, Disabler) é genérica e não reflete esse predomínio de mid. No Atlas, bzm (1win) e lorenof (Nigma) jogaram ela de pos 2 no 7.41.

## Pos 2 (mid)

- quando pegar: pegue de mid sempre que puder. É a posição real do herói no patch: 77,0% das partidas dela e 47,5% de vitória (dotacoach.gg, 7.41f); dois mids pro do Atlas (bzm na 1win, lorenof na Nigma) a jogaram nessa posição.
- itens iniciais: tango, faerie_fire, branches, circlet

### Build

#### Null Talisman (null_talisman)
- porque: mana e sustento pra espamar Dragon Slave e Light Strike Array na lane sem secar.
- detalhe: +5 Inteligência, +2 Força, +2 Agilidade, +3% de mana máxima, +1 de regeneração de mana. Aparece em 85 partidas na fase early_game_items do OpenDota, o item de build mais visto nessa fase (fora Boots of Speed puro e Bottle, genéricos que quase todo herói compra); some depois, vira outro item ou é vendido, porque não aparece nas fases mid/late.
- fonte: OpenDota itemPopularity hero 25; items.json

#### Boots of Travel (travel_boots)
- porque: TP de unidade sem gastar carga, pra ela puxar lane sozinha e ainda chegar no gank do suporte.
- detalhe: +90 de movimento; upgrade do pergaminho de TP com recarga menor e alvo em unidade. É o único item do núcleo dela presente nas três fases da partida: 31 compras no early, 57 no mid e 19 no late (3 travel_boots mais 16 já em travel_boots_2), pela contagem de popularidade do OpenDota.
- fonte: OpenDota itemPopularity hero 25; items.json

#### Kaya (kaya)
- porque: amplifica o combo inteiro (LSA, Dragon Slave, Laguna) com +10% de amplificação de feitiço.
- detalhe: +16 Inteligência, +10% de amplificação de feitiço, +30% de regeneração de mana. É o item de build mais comprado dela na fase intermediária (73 partidas); normalmente evolui pra Kaya and Sange ou fica puro enquanto o ouro sobe pro Scepter.
- fonte: OpenDota itemPopularity hero 25; items.json

#### Aghanim's Scepter (ultimate_scepter)
- porque: dá Flame Cloak, que turbina o combo com +35% de amplificação de feitiço e ainda serve de fuga voando sobre árvore e penhasco.
- detalhe: Flame Cloak dá movimento irrestrito, +35% de resistência mágica e +35% de amplificação de feitiço por 7s (recarga 25s, custo 50 de mana) e enche o Fiery Soul no máximo ao ativar. Aparece em 51 partidas na fase intermediária (atrás de Kaya e Boots of Travel) e segue no late (13) e numa versão de upgrade adicional (9, scepter_2).
- combo: ativar Flame Cloak antes de lançar Dragon Slave e Laguna Blade empilha os +35% de amplificação em todo o nuque.
- fonte: dotacoach.gg/heroes/lina; OpenDota itemPopularity hero 25

#### Black King Bar (black_king_bar)
- porque: sem ele, qualquer stun de alvo único tira ela do combo antes do Laguna Blade saber.
- detalhe: dispel e imunidade a efeitos negativos de feitiço por 9/8/7s, incluindo dano refletido e puro. Não ajuda o próprio Laguna Blade a atravessar o BKB do inimigo (ele não tem bkbpierce). É o item mais comprado no late game dela (43 partidas); o mesmo padrão aparece nos pros: bzm (1win) compra BKB em 72% das partidas, o maior índice entre os mids do lote medido.
- contra: disables de alvo único ou em área (stun, hex, silence, root) que impedem o combo de saber.
- fonte: items.json; constants_abilities.json (bkbpierce do Laguna Blade); dota-tier1/equipes/1win/hub.json seção 14

### Situacionais

#### Aghanim's Shard (aghanims_shard)
- quando: depois dos primeiros core, pra turbinar a perseguição ou a fuga pós-combo.
- porque: liga a velocidade máxima na hora do Laguna Blade, sem precisar acertar sete feitiços pra empilhar Fiery Soul.
- detalhe: ao acertar o Laguna Blade, dá 12 stacks de Fiery Soul por 5s de supercarga.
- combo: Laguna Blade com o Shard ligado dá Fiery Soul no talo na mesma hora do nuque, bom pra correr atrás de quem sobrou com pouca vida ou pra fugir depois de gastar tudo.
- fonte: dotacoach.gg/heroes/lina (reflete o patch notes do 7.41)

#### Yasha and Kaya (yasha_and_kaya)
- quando: quando o time já iniciou e falta ela acertar o combo rápido e sair correndo em seguida.
- porque: troca parte da resistência a lentidão do caminho Kaya and Sange por velocidade de ataque e de movimento.
- detalhe: +16 Agilidade, +16 Inteligência, +20 de velocidade de ataque, +40% de regeneração de mana, +12% de velocidade de movimento.
- fonte: OpenDota itemPopularity hero 25 (45 partidas no mid, 25 no late); items.json

#### Shiva's Guard (shivas_guard)
- quando: contra carries ou duelistas de dano físico que dependem de velocidade de ataque alta.
- porque: a aura Freezing Aura tira 45 de velocidade de ataque de todo mundo num raio de 1200, e Arctic Blast ainda faz 260 de dano mágico e reduz 40% de movimento por 4s.
- detalhe: +17 de armadura ajuda ela a sobreviver depois de gastar o combo.
- contra: heróis que dependem de velocidade de ataque alta pra fazer dano (ex.: carries de auto-ataque rápido).
- fonte: items.json; OpenDota itemPopularity hero 25 (15 partidas no late)

#### Scythe of Vyse (sheepstick)
- quando: contra um alvo único que decide a luta se escapar (iniciador, carry fed, outro nuker).
- porque: hex de 2,8s que silencia, desarma e transforma o alvo em critter, e ainda destrói ilusão na hora.
- contra: iniciadores ou carries que, soltos, virariam a luta.
- fonte: items.json; OpenDota itemPopularity hero 25 (13 partidas no late)

#### Monkey King Bar (monkey_king_bar)
- quando: contra evasão alta que faz seu auto-ataque falhar.
- porque: 80% de chance de ignorar evasão, mais 70 de dano mágico extra por acerto.
- contra: Phantom Assassin (Blur), Butterfly e qualquer evasão parecida.
- fonte: items.json; OpenDota itemPopularity hero 25 (9 partidas no late)

#### Octarine Core (octarine_core)
- quando: jogos longos, onde vale repetir Dragon Slave, Light Strike Array e Laguna Blade mais vezes dentro da mesma luta.
- porque: 25% de redução de recarga em todo o kit.
- detalhe: também dá +450 de vida e +450 de mana.
- fonte: items.json; OpenDota itemPopularity hero 25 (5 partidas no late)

#### Dagon (dagon)
- quando: como arremate de burst, quando o time já imobilizou o alvo e falta um nuque de dano puro pra fechar o kill.
- porque: Energy Burst é dano mágico de alvo único, upgradable (400 a 800 de dano por tier).
- combo: Light Strike Array (stun) seguido de Dragon Slave, Dagon e Laguna Blade fecha praticamente qualquer suporte ou mid de vida baixa antes dele reagir.
- fonte: items.json; OpenDota itemPopularity hero 25 (dagon e os tiers 2 a 5 somam 69 compras entre mid e late, sinal real de um padrão de empilhar Dagon, não ruído de uma partida isolada)

## Pos 4 (suporte de roaming)

- quando pegar: é uso real, mas secundário: 9,9% das partidas dela no 7.41f foram de suporte, com 45,4% de vitória (dotacoach.gg). O combo LSA + Dragon Slave em área favorece roam de gank cedo, mas a amostra de build por posição é muito mais fina que a de mid.
- itens iniciais: tango, branches, ward_observer, ward_sentry

### Build

#### Observer Ward / Sentry Ward (ward_observer / ward_sentry)
- porque: suporte de roam vive de visão pra fechar o gank com Light Strike Array antes do inimigo sair do raio de 250.
- detalhe: Observer Ward (76 compras) e Sentry Ward (2) aparecem entre os itens iniciais dela no OpenDota, sinal dos jogos em que ela saiu de suporte.
- fonte: OpenDota itemPopularity hero 25

#### Magic Wand (magic_wand)
- porque: stats baratos e uma carga de vida e mana de emergência depois de qualquer troca na lane.
- detalhe: evolução do Magic Stick; os dois aparecem junto dos itens iniciais dela (5 Wand, 3 Stick).
- fonte: OpenDota itemPopularity hero 25; items.json

#### Aether Lens (aether_lens)
- porque: +225 de alcance de conjuração deixa ela acertar Dragon Slave e Light Strike Array de uma distância mais segura no gank.
- detalhe: também dá +300 de mana e +2,5 de regeneração de mana.
- fonte: items.json; OpenDota itemPopularity hero 25 (2 partidas no mid, amostra pequena)

### Situacionais

#### Force Staff (force_staff)
- quando: pra puxar um aliado fora do alcance de perigo ou empurrar o próprio corpo pro alcance certo do combo.
- porque: empurra 600 de distância com 850 de alcance de conjuração.
- fonte: items.json; OpenDota itemPopularity hero 25 (25 partidas no mid, 9 no late, amostra agregada entre todas as posições)

#### Rod of Atos (rod_of_atos)
- quando: contra herói móvel que escapa antes do combo completo.
- contra: heróis de fuga rápida (blink, dash) que normalmente saem do raio da Light Strike Array.
- porque: Cripple prende o alvo por 2s, tempo pra encaixar Dragon Slave e Laguna Blade.
- fonte: items.json; OpenDota itemPopularity hero 25 (1 partida, amostra mínima, usar com cautela)

#### Ghost Scepter (ghost)
- quando: contra lane ou composição de dano físico pesado.
- porque: 4s de imunidade a dano físico.
- contra: carries de auto-ataque físico que focam ela antes da ulti sair.
- detalhe: dá +30% de dano mágico recebido durante o efeito; não compre contra composição mágica.
- fonte: items.json; OpenDota itemPopularity hero 25 (1 partida, amostra mínima)

## Roshan

Lina raramente solta Roshan sozinha. Em solos.json ela aparece em 39 mortes de Roshan no total, quase todas em time: 30 classificadas "time", 6 "finalização", 2 "solo com suporte" e 1 "solo puro" (essa única solo puro é de partida turbo, não pro: 100% do dano, 99 golpes em 24,5s, então não serve de evidência de padrão em jogo competitivo). No exemplo mais comum, de partida pro e classificação "time", ela fez 46,3% do dano total e o último golpe foi de Phantom Assassin, sinal de que ela ajuda a abrir o Rosh mas normalmente não fecha sozinha. Em resumo_com_suporte.json (solo com suporte por perto, não solo puro) há 2 partidas dela: morte do Roshan no minuto mediano 32:28 (faixa 25:44 a 39:13), nível mediano 22,5, patrimônio mediano de 22.554 de ouro. Os itens mais vistos no inventário na hora eram Hurricane Pike e Boots of Travel (2 das 2 partidas cada) e Mjollnir (2 das 2), com Satanic, Black King Bar, Monkey King Bar e Mithril Hammer aparecendo em uma das duas. Leia como indício fraco (n=2): não é um padrão de "Lina solo Rosh", é uma Lina tardia com item check alto limpando o Roshan com apoio por perto.
