---
id: porque-itens-lone_druid
titulo: "Por que cada item: Lone Druid"
heroi: Lone Druid
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/lone_druid.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- https://dota2.fandom.com/wiki/Lone_Druid
- https://dota2protracker.com/builds/lone-druid-pos1-1
- https://dota2protracker.com/hero/legacy/Lone+Druid
---

## Power Treads (power_treads)
- porque: Monta mais rápido que qualquer item de combate (~5 min) e dá velocidade pro urso melee.
- detalhe: No urso dá +55 de velocidade em melee, +25 de ataque e +10 no atributo escolhido, com troca instantânea e sem recarga. Fica pronto em 5,2 min nos pros e 5,1 ± 2,5 min nos pubs 7000+, antes de qualquer item de combate real. Escolha o atributo pela necessidade do momento: Força pra tankar lane, Agilidade pra farmar mais rápido.
- combo: Primeira perna do farm. Com Treads e nível 6 (True Form) o urso já limpa camp pequeno e médio junto do Druid.
- fonte: guia local (lone_druid.json, guia.itens_core[0] e power_spikes); items.json (power_treads)

## Maelstrom (maelstrom)
- porque: Chain lightning de 25% libera camp grande e atravessa evasão mesmo quando o ataque básico erra.
- detalhe: O proc de 25% solta um raio em até 4 alvos a 650 de distância, 110 de dano mágico cada. O texto oficial do item confirma que o raio ignora evasão. Mediana de 11,5 min nos pros, com 10,4 min nas vitórias contra 11,9 min nas derrotas: comprar atrasado já correlaciona com derrota.
- contra: Phantom Assassin, Windranger (Windrun): o ataque básico do urso pode errar contra a evasão delas, mas o raio da Chain Lightning acerta do mesmo jeito (texto oficial do item: "Lightning proc pierces evasion").
- combo: É o item que de fato libera o camp grande, ao lado do nível 6. Sem ele, Druid e urso ficam travados em camp pequeno e médio.
- fonte: items.json (maelstrom); guia local (guia.itens_core[1], condicao_para_farmar)

## Mjollnir (mjollnir)
- porque: Upgrade do Maelstrom com 12 alvos, 180 de dano e Static Charge, o item que libera farm de ancient.
- detalhe: O chain lightning agora atinge 12 alvos (180 de dano cada, ainda ignora evasão) e Static Charge aplica um escudo de 15 s que solta um raio de 225 em 5 alvos. Mediana de 15,5 min nos pros. No OpenDota, comprado entre 12 e 15 min tem 66% de vitória (149 jogos), cai pra 46% de 15 a 20 min (395 jogos) e 34% de 20 a 25 min (64 jogos).
- combo: É o único item presente nos 2 solos de Roshan confirmados em replay local do LD. Nos dois, o chain lightning do Mjollnir sozinho fez 1.296 e 1.134 de dano no Roshan (10% a 13% do dano total do LD em cada caso), sem precisar de nada ofensivo além dele e do ataque básico do urso.
- fonte: items.json (mjollnir); guia local (guia.itens_core[2]); dota-roshan-solo/data/solos.json (partidas 8987082716 e 8943364918)

## Aghanim's Scepter, no urso (ultimate_scepter)
- porque: Tira a trava de 1100 do urso: ele ataca de qualquer distância e sobrevive se o Druid morrer.
- detalhe: Dá +10 em todos os atributos e +175 de vida e mana (texto oficial do item) e, só no Lone Druid, remove o limite de 1100 unidades entre Druid e urso. Mediana de 19,9 min nos pros. No OpenDota, comprado de 15 a 20 min tem 77% de vitória (106 jogos), caindo a 49% de 20 a 25 min (377) e 31% de 25 a 30 min (87).
- contra: Times que tentam o combo de matar o Druid pra travar o urso: com o Scepter o urso continua lutando e farmando mesmo com o Druid morto (Liquipedia, via fontes do guia local).
- combo: Com o Scepter dá pra separar o farm (urso em camp grande ou ancient, Druid em outro) e ainda chegar no Tormentor das 20:00 e na 1ª janela de Roshan em time (22 Roshans do time do LD em 20 jogos pro, guia local).
- fonte: items.json (ultimate_scepter); guia local (guia.itens_core[3], depois_dos_20)

## Shadow Blade (invis_sword)
- porque: Entra invisível com o urso pra iniciar a luta ou fugir do camp sem ser visto.
- detalhe: 17 s de invisibilidade, 20% de velocidade a mais e atravessa unidades. Atacar pra sair da invisibilidade dá +175 de dano físico (texto oficial do item). Vai sempre no urso, que é quem luta: não precisa comprar dois. Vira Silver Edge quase sempre, 18 de 20 pros compram e 17 evoluem.
- contra: Slardar: a Corrosive Haze (ex-Amplify Damage) dá visão verdadeira e revela invisibilidade por 18 s, isso é texto oficial da habilidade, e anula o Shadow Walk. Slardar já é um dos counters mais fortes do LD no patch atual (-4,1 a -4,7 pp em 7000+, guia local).
- fonte: items.json (invis_sword); constants_abilities.json (slardar_amplify_damage); guia local (guia.itens_core[4], evitar_quando)

## Aghanim's Shard, no Druid (aghanims_shard)
- porque: Savage Roar passa a dar velocidade e ataque pro time e a dispelar Druid e urso.
- detalhe: Aliados a até 700 ganham +10% de velocidade e +40 de ataque por 4 s quando o Savage Roar é lançado, e o próprio Druid e o urso se limpam de debuff dispelável na hora. Mediana de 24,6 min nos pros.
- combo: Vai sempre no Druid porque o urso não pode guardar ou consumir Shard, o item não entra no inventário dele. É o único upgrade de habilidade do LD que não passa pelo urso.
- fonte: guia local (guia.itens_core[5]); https://dota2.fandom.com/wiki/Lone_Druid (seção Spirit Bear, Item Interactions: "Cannot and does not consume Aghanim's Shard")

## Silver Edge (silver_edge)
- porque: Mesmo invis do Shadow Blade, mas quem recebe o ataque fica com as passivas desligadas por 5 s.
- detalhe: 300 de dano físico bônus ao atacar pra sair da invisibilidade, e break: desativa as habilidades passivas do alvo por 5 s e trava a velocidade dele em 200 (texto oficial do item). No OpenDota, comprado de 20 a 25 min tem 83% de vitória (30 jogos) contra 67% de 25 a 30 min (220).
- contra: Mesma ressalva do Shadow Blade. Slardar revela invisibilidade com a Corrosive Haze, então o plano de entrar escondido falha especificamente contra ele.
- fonte: items.json (silver_edge); guia local (guia.itens_core[6]); constants_abilities.json (slardar_amplify_damage)

## Black King Bar (black_king_bar)
- porque: 9 s de imunidade mágica no Druid pra ele sobreviver até a luta valer a pena.
- detalhe: Dispel básico, +60% de resistência mágica e imunidade a dano refletido e puro por 9/8/7 s, recarga de 95 s (texto oficial do item). O Entangle do seu próprio kit atravessa BKB inimigo (o alvo não escapa), mas o Savage Roar (fear) não.
- contra: O BKB do urso é um item separado, com recarga e duração próprias, não ligadas ao BKB do Druid (Dota 2 Wiki: "Spirit Bear's Avatar duration works completely independently"). Se quiser os dois imunes ao mesmo tempo, precisa comprar e usar dois.
- combo: Mediana de 30,0 min nos pros (17 de 20 jogos), sempre antes do Butterfly. 58% das mortes do seu carry acontecem depois dos 20 min, então não adianta farmar bem e morrer sem imunidade na primeira luta grande.
- fonte: items.json (black_king_bar); https://dota2.fandom.com/wiki/Lone_Druid (Item Interactions); guia local (guia.itens_core[7], depois_dos_20)

## Butterfly (butterfly)
- porque: Evasão de 35% pra sobreviver a autoataque inimigo e ainda ganhar dano e velocidade.
- detalhe: +35 de agilidade, +35% de evasão (empilha com diminuição contra outras fontes), +20% de velocidade de ataque base e +25 de dano (texto oficial do item). Mediana de 35,7 min nos pros. Depois dele vem MKB, Basher/Abyssal ou Swift Blink conforme o inimigo.
- fonte: items.json (butterfly); guia local (guia.itens_core[8])

## Monkey King Bar (monkey_king_bar)
- porque: Contra evasão alta (Butterfly, Phantom Assassin, Windranger, Anti-Mage), pra garantir que o ataque acerte.
- detalhe: 80% de chance de atravessar evasão e soma 70 de dano mágico por ataque (texto oficial do item). Pros compram em 36,7 min (7 de 20 jogos); no D2PT aparece em 25,8% dos inventários aos 37 min.
- fonte: items.json (monkey_king_bar); guia local (guia.itens_situacionais[0])

## Skull Basher (basher)
- porque: O urso é melee, 25% de chance de bash contra só 10% do Druid ranged, trava o alvo pra fechar o combo.
- detalhe: 25% de chance (herói melee, 10% ranged) de atordoar 1,2 s e somar 100 de dano físico. O bash atravessa BKB (bkbpierce, texto oficial), mas só é removido por dispel forte. Pros compram em 39,5 min (6 de 20) e evoluem pra Abyssal Blade com Sange em 41,8 min (4 de 20).
- fonte: items.json (basher); guia local (guia.itens_situacionais[1])

## Swift Blink (swift_blink)
- porque: Jogo longo, pra chegar com o urso na luta ou no Roshan sem perder tempo correndo.
- detalhe: Teleporta até 1200 de distância e dá 40% de velocidade de fase e +35 de agilidade por 6 s (texto oficial do item). Fica bloqueado por 3 s depois de levar dano de herói ou do Roshan, então não serve pra escapar no meio de uma luta ou de um solo que já tomou dano.
- combo: Pros evoluem de Blink Dagger (42,0 min, 8 de 20) pra Swift Blink (41,5 min, 7 de 20).
- fonte: items.json (swift_blink); guia local (guia.itens_situacionais[2])

## Aghanim's Blessing (ultimate_scepter_2)
- porque: Dá um 2º Scepter sem gastar slot, liberando espaço de inventário pro resto do jogo.
- detalhe: Comprado por 5.800 e consumido na hora, não ocupa slot fixo. Nos 12 jogos dos pros em que apareceu, o Scepter sumiu do inventário do urso logo depois (inferido pelo guia local), liberando um espaço. Mediana de 38,9 min (12 de 20 jogos).
- combo: O Tormentor (a partir dos 20:00) já dá 1 Shard de graça pra quem está com menos ouro no time, então o Blessing some junto com esse ganho de slot na mesma janela de jogo.
- fonte: guia local (guia.itens_situacionais[2]); sem slug correspondente em items.json, é item consumível de Tormentor, não vendido na loja

## Refresher Orb (refresher)
- porque: Jogo de 50+ min: reseta Entangle, Savage Roar, True Form e Summon de uma vez.
- detalhe: Reseta a recarga de todas as habilidades, não mais itens desde o 7.40/7.41 (texto oficial do item); compartilha recarga com o Refresher Shard. Vai no Druid porque é lá que estão as 4 habilidades. Pros compram em 51,5 min (4 de 20 jogos), coerente com o LD vencendo 60,7% dos jogos que passam de 50 min no 7000+.
- fonte: items.json (refresher); guia local (guia.itens_situacionais[3], depois_dos_20)

## Nullifier (nullifier)
- porque: Contra Force Staff, Eul, Glimmer, Ghost Scepter e Lotus Orb, pra não deixar o inimigo escapar ou virar éter.
- detalhe: Dispel básico mais um debuff de 4 s que continua dispelando e desacelerando. Pode ser lançado até em unidade invulnerável (texto oficial do item), então funciona mesmo contra quem acabou de usar um efeito de invulnerabilidade curto. D2PT mostra em 5,3% dos jogos aos 39 min e 10% dos inventários finais.
- fonte: items.json (nullifier); guia local (guia.itens_situacionais[5])

## Assault Cuirass (assault)
- porque: Contra time com armadura alta e pra empurrar torre com o time todo.
- detalhe: Aura de +30 de ataque e +5 de armadura pros aliados, -5 de armadura pros inimigos em 1200 de raio. A redução de armadura nos inimigos atravessa BKB (bkbpierce, texto oficial). Pros compram em 44,6 min (3 de 20); D2PT mostra em 5,4% dos inventários.
- fonte: items.json (assault); guia local (guia.itens_situacionais[6])

## Diffusal Blade (diffusal_blade)
- porque: Dispel e desaceleração em jogo longo, sem gastar mana própria, o urso puxa a mana do alvo.
- detalhe: Inhibit desacelera 4 s (dispelável, texto oficial) e Manabreak queima 40 de mana por ataque, virando 1 de dano físico por mana queimada. Evolui pra Disperser. Pros: Diffusal em 42,8 min (3 de 20), Disperser em 45,5 min (2 de 20).
- fonte: items.json (diffusal_blade); guia local (guia.itens_situacionais[7])

## Magic Wand (magic_wand)
- porque: Opcional barato no começo, pra repor vida e mana sem gastar tempo na base.
- detalhe: Carrega até 20 cargas, ganha 1 cada vez que um inimigo visível a 1200 lança uma habilidade; cada carga restaura 15 de vida e mana (texto oficial do item). D2PT mostra 14,7% dos jogos com Wand aos 3 min, 65% de vitória quando comprado.
- fonte: items.json (magic_wand); guia local (guia.itens_situacionais[8])

## Satanic (satanic)
- porque: Raro no patch atual, lifesteal de 175% por 6 s, mas foi nerfado e os pros não compraram em nenhum dos 20 jogos.
- detalhe: Unholy Rage sobe o roubo de vida pra 175% por 6 s (dispel básico), empilhando com o Spirit Link, que repassa parte do lifesteal do urso pro Druid. D2PT mostra em só 2,1% dos inventários finais no 7000+.
- fonte: items.json (satanic); guia local (guia.itens_situacionais[9])
