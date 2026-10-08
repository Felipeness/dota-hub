---
id: ficha-ursa
titulo: "Ursa"
heroi: Ursa
patch: 7.41
posicoes: [1]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/navi/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/aurora/analise.md
- https://api.opendota.com/api/heroes/70/itemPopularity
---

## Resumo

Ursa é Carry/Durable/Disabler (heroes.json): Overpower dá janela de 3 a 6 ataques com +400% de velocidade de ataque e 25% de resistência a lentidão, Fury Swipes empilha dano a cada acerto no mesmo alvo, Earthshock é o salto de 250 que desacelera (22-40%) e causa dano mágico em área (não é stun) e Enrage é dispel forte com 80% de redução de dano e 50% de resistência a status por 4 a 5s (constants_abilities.json). É um pick exclusivo de pos 1 no 7.41: no draft da NAVI ele sai tarde pra counterpickar o carry adversário (pick médio 4,2 de 5 fases, n=9) e fecha 67% de vitórias nesses jogos; a Aurora também o usa como carry de lane e de tempo médio no pré-draft (navi/analise.md; aurora/analise.md). No público em geral a taxa de vitória do herói é 48,7% (146.312 vitórias em 300.284 partidas, heroStats.json).

## Pos 1 (carry)

- quando pegar: como counterpick tardio de carry de farm rápido e luta de early/mid, puxado pelo cleave do Battle Fury pra fechar a wave e os camps sozinho. Times pro picam ele perto do fim do draft pra reagir ao time adversário (pick médio 4,2, n=9, 67% de vitória: navi/analise.md).
- itens iniciais: quelling_blade, branches, circlet

### Build

#### Phase Boots (phase_boots)
- porque: atravessa unidades por 3s pra fechar a lane e entra na luta sem perder ritmo de ataque.
- detalhe: 1450 de custo, +50 de velocidade de movimento, +18 de dano (corpo a corpo) e +4 de armadura.
- fonte: https://api.opendota.com/api/heroes/70/itemPopularity (early_game_items); items.json

#### Battle Fury (bfury)
- porque: cleave de 60% em heróis e 40% em creep: o motor de farm que limpa wave e camp em poucos hits.
- detalhe: 3900 de custo, +50 de dano, +7,5 de regeneração de vida e +2,75 de mana. O cleave atravessa imunidade mágica, então continua valendo mesmo com BKB ativo.
- fonte: https://api.opendota.com/api/heroes/70/itemPopularity (early/mid_game_items, componentes ring_of_health/void_stone/chainmail/broadsword em alta quantidade); items.json

#### Blink Dagger (blink)
- porque: estende o alcance de iniciação além do salto de 250 do Earthshock, sem depender só da perseguição.
- detalhe: 2250 de custo, 1200 de alcance (cai a 960 se o Ursa tomou dano nos últimos 3s).
- combo: Blink em cima do alvo e Earthshock na sequência trava o slow de 22-40% num raio de 385 antes mesmo do Overpower entrar.
- fonte: https://api.opendota.com/api/heroes/70/itemPopularity (mid_game_items); items.json; constants_abilities.json

#### Black King Bar (black_king_bar)
- porque: imunidade mágica por 9/8/7s conforme o nível, a janela pra Overpower terminar sem ser interrompido por disable.
- detalhe: 4050 de custo, +10 de força, +24 de dano, reduz 60% do dano mágico recebido mesmo durante a imunidade.
- contra: disables e nukes mágicos; não ajuda contra bash físico de outro herói.
- fonte: https://api.opendota.com/api/heroes/70/itemPopularity (mid/late_game_items); items.json

#### Skull Basher (basher)
- porque: 25% de chance de bash por 1,2s: trava o alvo pra Fury Swipes continuar empilhando dano sem ele fugir.
- detalhe: 2875 de custo, +30 de dano, +10 de força. Não acumula com outra fonte de bash no mesmo herói.
- contra: não proca em Spirit Breaker, Faceless Void, Slardar e Kez no modo Sai: nesses confrontos específicos o bash simplesmente não dispara.
- fonte: https://api.opendota.com/api/heroes/70/itemPopularity (mid/late_game_items); items.json

#### Abyssal Blade (abyssal_blade)
- porque: vira um stun ativo de 1,6s a curto alcance, trava o alvo de propósito quando o bash passivo não procou a tempo.
- detalhe: 6250 de custo, +35 de dano, +26 de força, +30% de resistência a lentidão, +20% de cura. Mesma restrição de bash do Skull Basher.
- combo: ativar em cima do alvo junto com Enrage: o inimigo fica travado enquanto Ursa recebe 80% menos dano e tem 50% de resistência a status (não é imunidade total a debuff).
- fonte: https://api.opendota.com/api/heroes/70/itemPopularity (late_game_items, segunda maior contagem isolada da fase, atrás de Sange); items.json

### Situacionais

#### Monkey King Bar (monkey_king_bar)
- porque: garante o acerto dos ataques durante a janela do Overpower, que senão erraria boa parte dos hits contra evasão alta.
- contra: heróis com evasão alta (Phantom Assassin via Imaterial, até 55% de evasão; Windranger com Windrun, 100% de evasão por 3 a 6s), onde o Overpower erraria ataques sem o acerto garantido do MKB.
- detalhe: 5000 de custo, +50 de dano, +50 de velocidade de ataque, 80% de chance de acerto garantido.
- fonte: https://api.opendota.com/api/heroes/70/itemPopularity (late_game_items); items.json; constants_abilities.json

#### Satanic (satanic)
- porque: o lifesteal ativo (até 175%) sustenta a vida de Ursa na troca corpo a corpo prolongada do Overpower, sem depender de cura de outra fonte.
- contra: comps de dano físico alto e burst, onde o lifesteal ativo sustenta Ursa durante a troca.
- detalhe: 5050 de custo, +25 de força, +25 de dano, 30% de lifesteal passivo e até 175% por 6s com o ativo.
- combo: Enrage (dispel forte no cast + 50% de resistência a status, -80% de dano recebido) junto com o ativo de Satanic cria uma janela de 4 a 6s quase impossível de derrubar.
- fonte: https://api.opendota.com/api/heroes/70/itemPopularity (late_game_items); items.json

#### Nullifier (nullifier)
- porque: o ativo trava quem foge do alcance curto de ataque do Ursa mesmo atravessando invulnerabilidade, já que o único gap closer do herói é o salto de 250 do Earthshock.
- contra: spellcaster ou herói de mobilidade que escapa sem BKB: o ativo silencia 4s e desacelera 10%, e pode ser lançado mesmo em unidade invulnerável.
- detalhe: 4350 de custo, +75 de dano, +10 de armadura, projétil de 1800 de velocidade.
- fonte: https://api.opendota.com/api/heroes/70/itemPopularity (late_game_items); items.json; constants_abilities.json

#### Diffusal Blade (diffusal_blade)
- porque: prende e desacelera as cópias de ilusão, dando tempo de separar o herói real antes do Overpower gastar a janela de ataques na cópia errada.
- contra: heróis de clone/ilusão (Naga Siren, Terrorblade, Phantom Lancer, Spectre): cada ataque prende a cópia por 3s e desacelera por 4s (a queima de mana do Manabreak não afeta ilusões, só o herói real).
- detalhe: 2500 de custo, +15 de agilidade, +10 de inteligência, 40 de mana queimada por acerto.
- fonte: https://api.opendota.com/api/heroes/70/itemPopularity (mid_game_items); items.json; constants_abilities.json

#### Sange (sange)
- porque: mantém os 25% de resistência a lentidão que protegem a janela de ataques do Overpower, mesmo contra kite e slow em cadeia do time adversário.
- contra: times de kite e slow em cadeia, onde perder a resistência a lentidão custa a janela de Overpower.
- detalhe: 2100 de custo, +16 de força, 25% de resistência a lentidão, +16% de restauração de vida. Item isolado mais comum na fase final da amostra pública, provavelmente como statstick barato em vez de completar Sange and Yasha.
- fonte: https://api.opendota.com/api/heroes/70/itemPopularity (late_game_items, maior contagem da fase); items.json; constants_abilities.json

## Roshan

Ursa é um dos melhores soloers de Roshan do jogo porque Fury Swipes reseta sempre em 8s contra Roshan, fixo e sem escalar com nível (contra 8 a 20s em qualquer outro alvo): basta manter o ataque sem pausas maiores que 8s pra nunca perder o empilhamento de dano (constants_abilities.json). Nos replays com apoio do time por perto (resumo_com_suporte.json, n=43), o Ursa inicia o Roshan numa mediana de 21:38 (faixa 10:46-52:38) com nível mediano 15, levando Battle Fury em 40 dos 43 casos, Phase Boots em 34, Blink Dagger em 30, Magic Wand em 29 e Black King Bar em 18. No recorte de solo mais restrito (resumo_por_heroi.json, n=8, metade totalmente sem apoio por perto), o início mediano é mais tarde, 35:30 (faixa 23:17-49:40), nível mediano 23, com Battle Fury presente em 100% dos casos (8/8), Blink Dagger e Black King Bar em 6/8 cada, Phase Boots em 6/8 e Abyssal Blade em 5/8; a matança dura uma mediana de 19,35s e a vida do Ursa cai pra 53% mediana no fim. Earthshock e Overpower foram usados em todos os 8 solos e Enrage em 7 dos 8, provavelmente pra limpar qualquer debuff que o Roshan aplique durante a troca. Na prática o combo de Roshan é o próprio build core: Battle Fury pelo DPS, Fury Swipes nunca resetando contra o boss e Enrage como seguro contra qualquer coisa que o Roshan jogue de volta.
