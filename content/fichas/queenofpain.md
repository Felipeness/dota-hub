---
id: ficha-queenofpain
titulo: "Queen of Pain"
heroi: Queen of Pain
patch: 7.41
posicoes: [2]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/partidas/ (compras e golpes em Roshan das 66 partidas pos2 e 71 partidas totais com Queen of Pain, via draft.csv)
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- https://api.opendota.com/api/heroes/39/itemPopularity
- https://dotacoach.gg/en/heroes/queen-of-pain/builds/mid
- https://dotacoach.gg/en/heroes/queen-of-pain
---

## Resumo

Queen of Pain é uma mage de burst mid (pos 2): Blink pra entrar e sair, Shadow Strike e Scream of Pain pra nuke e Sonic Wave (dano puro, atravessa BKB inimigo) pra fechar troca e empurrar gente pra fora da luta. No 7.41 ela é praticamente só mid: no DotaCoach (patch 7.41f) 78,7% das partidas são Mid Lane (47,4% de vitória), e no draft dos times de Tier 1 analisados localmente ela foi pick de pos 2 em 66 das 71 vezes (93%), com 50% de vitória nessas 66; pos 1 e pos 3 somam só 5 picks, amostra pequena demais pra virar seção própria.

## Pos 2 (mid)

- quando pegar: ela é a escolha padrão de mid nuker do patch (78,7% de todas as partidas dela, 7.41f, DotaCoach), mas o próprio guia aponta que debuff immunity e resistência mágica são "bastante bons" contra ela, que um Eul's bem cronometrado evita praticamente todo o burst do Sonic Wave e que o time inimigo precisa ficar de olho no timing do Dagon ou do Orchid dela.
- itens iniciais: bottle, magic_wand, tango, null_talisman, ward_sentry

### Build

#### Power Treads (power_treads)
- minuto: 8.9
- porque: fecha a lane com mais velocidade de ataque e deixa trocar pra Força quando ela é iniciada.
- detalhe: comprada em 65 das 66 partidas pos 2 analisadas (98%). Botas de Velocidade saem com mediana 6:55 e viram Treads com mediana 8:53. Fica em Inteligência pra bater e farmar na lane, vira Força só quando um herói inimigo ameaça iniciar.
- fonte: compras locais (Atlas tier1, 65 de 66 jogos); https://api.opendota.com/api/heroes/39/itemPopularity

#### Kaya (kaya)
- minuto: 14.2
- porque: +10% de amplificação de feitiço e +30% de regen de mana pra spammar Shadow Strike e Scream sem secar.
- detalhe: comprada em 57 das 66 partidas (86%), mediana 14:13. Não é sempre o primeiro item de amplificação: nas 39 partidas que compraram Kaya e Veil of Discord, Kaya veio primeiro em 21 e Veil veio primeiro em 18, praticamente 50/50. Depois dela, em geral vira Kaya and Sange.
- fonte: items.json (kaya); compras locais (57 de 66 jogos)

#### Veil of Discord (veil_of_discord)
- minuto: 15.2
- porque: amplia em 10% todo o dano de magia recebido num raio de 900, e o Sonic Wave dela entra nessa conta.
- detalhe: comprada em 47 das 66 partidas (71%), mediana 15:10. Custa só 1.700, dá 10 de Inteligência e 18% de lifesteal em feitiço pra ela mesma. É ativo, dura 16s, lança antes de abrir a troca.
- combo: Veil of Discord lançado antes do Sonic Wave soma o +10% de dano de feitiço em cima de um dano que já é puro e atravessa BKB inimigo.
- fonte: items.json (veil_of_discord); compras locais (47 de 66 jogos)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 21.3
- porque: upgrade da ultimate dela; é o item mais caro que mais aparece no kit depois das botas.
- detalhe: comprada em 57 das 66 partidas (86%), mediana 21:17. Confirmado que Dotacoach lista o item como core no build de mid dela sem descrever o efeito, e as constantes locais (items.json) só têm o texto genérico do Aghanim's Scepter (upgrade de ultimate, +10 de todos atributos, +175 de vida e mana), sem o efeito específico pra Sonic Wave. Fandom (402) e Liquipedia (429) bloquearam o acesso de novo nesta sessão. Fica confirmado que é item core pela frequência de compra, não o texto exato do efeito no Sonic Wave.
- fonte: compras locais (57 de 66 jogos); https://dotacoach.gg/en/heroes/queen-of-pain/builds/mid (lista o item como core, sem descrever o efeito)

#### Kaya and Sange (kaya_and_sange)
- minuto: 28.5
- porque: soma +12% de amplificação de feitiço com 25% de resistência a slow e 25% de redução de custo de mana.
- detalhe: comprada em 46 das 66 partidas (70%), mediana 28:31. A resistência a slow ajuda a sair viva depois de usar o Blink pra entrar numa troca.
- fonte: items.json (kaya_and_sange); compras locais (46 de 66 jogos)

#### Black King Bar (black_king_bar)
- minuto: 28.9
- porque: dispel e imunidade mágica por 9s pra ela poder usar Blink, Shadow Strike e Scream sem ser travada antes.
- detalhe: comprada em 49 das 66 partidas (74%), mediana 28:56. O próprio Sonic Wave dela é dano puro com bkbpierce: Yes, ou seja, atravessa o BKB do inimigo; o BKB que ela compra é defesa pra ela, não afeta a ofensiva.
- fonte: constants_abilities.json (queenofpain_sonic_wave, bkbpierce); compras locais (49 de 66 jogos)

#### Aghanim's Shard (aghanims_shard)
- minuto: 32.9
- porque: item barato (1.400) que chega em mais da metade dos jogos que passam dos 30 minutos.
- detalhe: comprada em 36 das 66 partidas (55%), mediana 32:53. Não achei nesta sessão uma fonte confiável e atualizada pro 7.41 que descrevesse o efeito exato do upgrade (Fandom deu 402, Liquipedia deu 429 ao tentar de novo); fica registrada como compra confirmada, sem o texto do efeito.
- fonte: compras locais (36 de 66 jogos)

### Situacionais

#### Bloodstone (bloodstone)
- minuto: 33.6
- porque: +650 de vida e lifesteal em feitiço dão sustain pra ela segurar troca longa, e a aura de dano de feitiço recebido ajuda todo o time de magos, não só ela.
- quando: jogo que estica e ela precisa ficar na frente da troca sem morrer, trocando burst isolado por sustain.
- detalhe: +650 de vida, 20% de lifesteal em feitiço (60% por 5s quando ativado) e aura de +12% de dano de feitiço recebido pelo time inimigo num raio de 1.200, que ajuda todo o time de magos, não só ela.
- contra: times sem burst de alvo único forte o bastante pra furar 650 de vida extra numa troca só.
- fonte: items.json (bloodstone); compras locais (36 de 66 jogos, 55%)

#### Shiva's Guard (shivas_guard)
- minuto: 36.1
- porque: Arctic Blast desacelera e a aura passiva reduz velocidade de ataque do time inimigo, neutralizando carry físico que depende de attack speed alto.
- contra: carries de ataque físico que dependem de velocidade de ataque alta pra fazer dano (crit, ataque rápido em sequência).
- detalhe: Arctic Blast causa 260 de dano mágico e -40% de velocidade de movimento num raio de 825; a aura passiva reduz -45 de velocidade de ataque de todo inimigo em 1.200 de raio.
- fonte: items.json (shivas_guard); compras locais (25 de 66 jogos, 38%)

#### Linken's Sphere (sphere)
- minuto: 35.5
- porque: bloqueia o primeiro feitiço de alvo único a cada 14s, barrando o disable que mais a mata antes de ela conseguir usar o Blink pra entrar ou sair da troca.
- contra: disable de alvo único forte apontado direto nela (hex, stun ou silence de alvo), porque bloqueia o primeiro feitiço desse tipo a cada 14s.
- detalhe: também dá 16 de todos os atributos. Item raro nesse recorte, só aparece quando o time inimigo tem um disable específico demais pra ignorar.
- fonte: items.json (sphere); compras locais (10 de 66 jogos, 15%)

#### Octarine Core (octarine_core)
- minuto: 41.9
- porque: -25% de recarga em todas as habilidades deixa Blink, Shadow Strike e Scream voltando mais rápido pra ela aguentar troca prolongada de jogo longo.
- quando: jogo muito longo, pra recarregar Blink, Shadow Strike e Scream mais rápido e aguentar troca prolongada.
- detalhe: -25% de recarga em todas as habilidades, +450 de vida e +450 de mana. Item claramente de late game nesse recorte.
- fonte: items.json (octarine_core); compras locais (26 de 66 jogos, 39%)

#### Eul's Scepter of Divinity (cyclone)
- minuto: 50.7
- porque: dispel básico em si mesma e 2,5s de invulnerabilidade dão uma saída segura quando ela já levou um debuff antes de entrar na troca.
- quando: precisa se dispelar de um debuff ou ficar invulnerável por 2,5s antes de entrar na troca.
- detalhe: Cyclone em si mesma é dispel básico; usada nela, não no inimigo, quando ela precisa de uma saída rápida de um disable que já pegou.
- fonte: items.json (cyclone); compras locais (6 de 66 jogos, 9%)

#### Scythe of Vyse (sheepstick)
- minuto: 50.6
- porque: trava a maior ameaça do time inimigo por 2,8s sem atacar, usar magia ou se mover rápido, abrindo o Hex into Sonic Wave pra fechar o kill sem reação.
- contra: a maior ameaça do time inimigo (carry ou iniciador), travando por 2,8s sem atacar, usar magia ou se mover rápido.
- detalhe: item raro nesse recorte, só em jogo que passa dos 45-50 minutos.
- combo: Hex no alvo prioritário e Sonic Wave em seguida fecha o kill sem ele conseguir reagir.
- fonte: items.json (sheepstick); compras locais (8 de 66 jogos, 12%)

## Roshan

Não é farmadora de Roshan: ela não aparece no dataset local de Roshan solo (que cobre 22 carries de pos 1; Queen of Pain não é um deles). Nos replays locais de pro (71 partidas com ela no draft), ela leva o golpe final do Roshan em 16 jogos (23%). O dado local só registra quem deu o golpe final, não quem mais bateu no Roshan antes, então não dá pra confirmar se algum desses 16 abates foi solo dela.
