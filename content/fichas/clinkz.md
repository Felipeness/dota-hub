---
id: ficha-clinkz
titulo: "Clinkz"
heroi: Clinkz
patch: 7.41
posicoes: [1]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/falcons/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/nigma/analise.md
- https://api.opendota.com/api/heroes/56/itemPopularity
- https://dotacoach.gg/en/heroes/clinkz/builds/carry
- https://dotacoach.gg/en/heroes/clinkz/builds
- https://dota2protracker.com/hero/Clinkz
- https://dotacoach.gg/en/heroes/clinkz
---
## Resumo
Clinkz é um carry de agilidade ranged que vive de autoataque: Searing Arrows soma dano fixo em cada acerto, Skeleton Walk abre a troca na invisibilidade e Strafe dobra a velocidade de ataque sem quebrar essa invisibilidade. No 7.41 ele só aparece como pos1: a única build publicada (DotaCoach, 7.41f) é de carry, com 50,2% de pick rate dentro dessa função, e nos times de Tier 1 analisados ele só foi pos1 (Skiter, Falcons, 7 jogos; SumaiL, Nigma, 3 jogos). É raro no profissional (5 picks, 6 bans na amostra recente do OpenDota) mas com volume relevante em pub (pub_pick 225.480, ~49,7% de vitória).

## Pos 1 (carry)
- quando pegar: é a única posição em que o herói tem dado real no 7.41. OpenDota marca os papéis dele como Carry/Escape/Pusher (heroes.json) e tanto Falcons (Skiter, 7 jogos) quanto Nigma (SumaiL, 3 jogos) só o usaram de pos1 (Atlas Tier 1, analise.md de cada time); a build de carry do DotaCoach é a única publicada para o patch.
- itens iniciais: magic_wand, branches, faerie_fire, tango

### Build
#### Falcon Blade (falcon_blade)
- minuto: 5
- porque: mana e dano baratos sustentam o farm de Searing Arrows sem atrasar o Treads.
- detalhe: dá +200 de vida, +1,8 de regen de mana e +14 de dano (items.json). Searing Arrows custa só 10 de mana por ataque, mas o pool inicial de Clinkz é de 75: numa troca de harass longa ele seca rápido, e o Falcon Blade tapa esse buraco sem desviar ouro do Treads.
- fonte: items.json (falcon_blade); dota2protracker.com/hero/Clinkz (timing, janela 7000-8500 MMR, 7.41e)

#### Power Treads (power_treads)
- minuto: 7
- porque: velocidade de ataque alimenta tudo que Clinkz faz por autoataque.
- detalhe: +25 de velocidade de ataque e um atributo à escolha, ajustado pra Agilidade (items.json). Como o dano bônus de Searing Arrows é fixo por acerto, mais ataques por minuto é dano puro, e Strafe também escala em cima da velocidade de ataque base.
- fonte: items.json (power_treads); dota2protracker.com/hero/Clinkz

#### Desolator (desolator)
- minuto: 14
- porque: -6 de armadura no alvo multiplica todo autoataque e todo Searing Arrows que vem depois.
- detalhe: dá +55 de dano e aplica -6 de armadura por 7s (sobe +2 por kill e +1 por assist até 30 de dano total), funcionando até contra construção (items.json). Clinkz é 100% dependente de autoataque, então reduzir a armadura do alvo rende mais DPS por ouro gasto do que qualquer outro item dessa faixa de preço na build dele.
- combo: Desolator cedo (14 min) faz o resto da build (Crystalys, Daedalus) acertar mais forte porque o crítico multiplica um dano base já maior contra um alvo com menos armadura.
- fonte: items.json (desolator)

#### Aghanim's Shard (aghanims_shard)
- minuto: 17
- porque: Burning Barrage manda uma linha de flechas que atravessa todos os inimigos no caminho, ótimo pra puxar wave e acertar mais de um herói numa troca.
- detalhe: o shard dá Burning Barrage, uma canalização de 2s que dispara 6 flechas na direção escolhida, cada uma causando 75% do dano de ataque de Clinkz em todo inimigo na linha (alcance 850, atravessa BKB, 40 de mana, recarga 17s) (constants_abilities.json, clinkz_burning_barrage). Custa 1.400, o mais barato item de impacto da build.
- fonte: constants_abilities.json (clinkz_burning_barrage); items.json (aghanims_shard, custo); dotacoach.gg/en/heroes/clinkz (confirma Burning Barrage como o efeito do shard no 7.41); OpenDota itemPopularity hero_id 56 (item aparece 98 vezes na fase mid, empatado em 3º lugar com o Desolator, atrás só de Mithril Hammer-185 e Blade of Alacrity-128, que são componentes e não itens finais)

#### Dragon Lance (dragon_lance)
- minuto: 20
- porque: +130 de alcance deixa Clinkz bater fora do alcance de resposta do alvo.
- detalhe: dá +15 de Agilidade, +10 de Força e +130 de alcance de ataque ranged; bônus de alcance de Dragon Lance e upgrades não acumulam entre si (items.json). É o componente direto do Hurricane Pike quando a luta pede desengate em vez de mais alcance puro.
- combo: saindo de Skeleton Walk já com 730 de alcance de ataque (600 base + 130), Clinkz abre o primeiro Searing Arrows antes de o inimigo conseguir fechar distância pra responder.
- fonte: items.json (dragon_lance)

#### Crystalys (lesser_crit)
- minuto: 25
- porque: primeiro crítico da build, prepara o salto pro Daedalus.
- detalhe: +32 de dano e 30% de chance de crítico com multiplicador de 160% (items.json). Componente direto do Daedalus; como o dano de Searing Arrows é fixo por ataque, ele entra na base que esse crítico multiplica.
- fonte: items.json (lesser_crit); dota2protracker.com/hero/Clinkz

#### Daedalus (greater_crit)
- minuto: 30
- porque: crítico de 225% transforma Searing Arrows e o Desolator em burst de verdade.
- detalhe: +88 de dano e 30% de chance de crítico com multiplicador de 225% (items.json), mas o crítico não funciona contra construção. Combinado com o Desolator ativo (-6 de armadura no alvo), um crítico de Daedalus é o maior pico de dano de autoataque que a build alcança no mid/late.
- fonte: items.json (greater_crit); dota2protracker.com/hero/Clinkz

### Situacionais
#### Black King Bar (black_king_bar)
- porque: imunidade a magia pra sair de Skeleton Walk sem ser travado antes de atacar.
- detalhe: dá 9/8/7s de imunidade a magia (não reseta a duração se comprar outra) e reduz em 60% o dano mágico que ainda passa (items.json). Sem BKB, qualquer disable em área que pegue Clinkz fora da invisibilidade cancela a troca antes de ele soltar um Strafe.
- contra: disables em área ou silence longo que Clinkz não evita só correndo (Enigma, Tidehunter, Axe, Faceless Void).
- fonte: items.json (black_king_bar)

#### Orchid Malevolence (orchid)
- porque: silencia o alvo e ainda devolve 30% do dano recebido nesse tempo como mágico.
- detalhe: Soul Burn silencia por 5s e, no fim, inflige 30% do dano que o alvo recebeu nesse intervalo como dano mágico bônus (items.json); +35 de velocidade de ataque ajuda a empilhar ataques antes do silence acabar.
- contra: heróis que dependem de uma habilidade pra fugir ou curar no meio da troca (suportes de heal single-target, heróis sem escape físico).
- fonte: items.json (orchid)

#### Hurricane Pike (hurricane_pike)
- porque: empurra o corpo a corpo pra longe e libera 5 ataques sem limite de alcance.
- detalhe: Hurricane Thrust empurra Clinkz e o alvo 425 de distância um do outro e, por 6s, permite 5 ataques sem restrição de alcance e com +100 de velocidade de ataque; não funciona em alvo dentro de Chronosphere, Duel ou Black Hole (items.json).
- contra: carries e iniciadores corpo a corpo que precisam ficar colados em Clinkz pra fazer dano (Phantom Assassin, Troll Warlord, Axe).
- combo: empurra o melee, solta o Strafe no mesmo instante e os 5 ataques saem com alcance e velocidade de ataque dobrados antes de ele conseguir voltar a se aproximar.
- fonte: items.json (hurricane_pike)

#### Monkey King Bar (monkey_king_bar)
- porque: 80% de chance de furar evasão a cada ataque, com dano mágico extra.
- detalhe: "Grants each attack a 80% chance to pierce through evasion and deal 70 bonus magical damage" (items.json), além de +50 de dano e +50 de velocidade de ataque.
- contra: heróis de evasão alta (Phantom Assassin, Windranger com Windrun, Butterfly do inimigo).
- fonte: items.json (monkey_king_bar)

#### Linken's Sphere (sphere)
- porque: bloqueia a primeira habilidade de alvo único que viria travar Clinkz.
- detalhe: Spellblock absorve a próxima spell direcionada a cada 14s; spells direcionadas de itens neutros não disparam o bloqueio (items.json).
- contra: disables de alvo único e burst de um cast só (Lion, Doom, Shadow Shaman, Viper).
- fonte: items.json (sphere)

#### Eye of Skadi (skadi)
- porque: +35 em todos os atributos e ainda corta 50% da cura do alvo atingido.
- detalhe: Cold Attack reduz 50% da velocidade de movimento em alvo ranged (25% em melee), -20% de velocidade de ataque e -50% de restauração de vida do alvo por 3s (items.json).
- contra: heróis que dependem de lifesteal ou regen alto para sobreviver ao dano sustentado (Lifestealer, Dragon Knight, Bristleback).
- fonte: items.json (skadi)

#### Nullifier (nullifier)
- porque: dispel básico contínuo que tira o buff de fuga do alvo e ainda aplica slow.
- detalhe: Nullify aplica um dispel básico contínuo e um slow por 4s, e pode ser lançado até em unidade invulnerável (items.json).
- contra: heróis com buff de fuga ou defesa ativa que Clinkz precisa quebrar pra fechar a troca (Windranger com Windrun, Troll Warlord com Berserker's Rage).
- fonte: items.json (nullifier)

## Roshan
Sem dado de early kill: os dois registros locais de Clinkz em Roshan são tardios e com amostra de 1 partida cada (dota-roshan-solo). Solo puro: nível 27, 53:38 de jogo, patrimônio 31.441, usando Death Pact/Skeleton Walk/Strafe do kit e inventário com Hurricane Pike, Desolator, Black King Bar, Daedalus, Linken's Sphere e Monkey King Bar (resumo_por_heroi.json / solos.json, n=1). Kill com aliados perto do fosso (Earth Spirit, Brewmaster, Spirit Breaker, Hoodwink): nível 27, 58:14 de jogo, patrimônio 35.919, usando Strafe e Burning Army, inventário com Bloodthorn, Desolator, Power Treads, Daedalus, Black King Bar e Linken's Sphere (resumo_com_suporte.json, n=1). Os dois casos tiraram uma torre dentro de 3 min do kill. Padrão (amostra pequena, não generalizar): Clinkz só aparece em Roshan depois dos 50 min e sempre com o Black King Bar já pronto.
