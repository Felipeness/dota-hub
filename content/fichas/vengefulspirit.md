---
id: ficha-vengefulspirit
titulo: "Vengeful Spirit"
heroi: Vengeful Spirit
patch: 7.41
posicoes: [1]
fontes:
- https://api.opendota.com/api/heroes/20/itemPopularity
- https://api.opendota.com/api/heroes/20/matchups
- https://dota2protracker.com/hero/Vengeful%20Spirit
- https://dota2protracker.com/builds/vengeful-spirit-pos1-1
- https://dota2protracker.com/builds/vengeful-spirit-pos4-1
- https://liquipedia.net/dota2/Vengeful_Spirit
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/jogadores_partida.csv
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
---

## Resumo
No 7.41 Vengeful Spirit deixou de ser só suporte: o patch deu Base Attack Time de 1,7 para 1,5, velocidade de movimento 295 para 300 e fez a Retribution contar ela como atacante melee e ranged ao mesmo tempo, então ela virou carry de farm rápido (D2PT: 3.048 partidas em 7000-8500 MMR, 52% de vitória; página específica de pos1, 36 partidas de 23 pros, 50%). No Atlas tier1 (7.41, times top) ela foi pick 12 vezes e ban 4, e em 10 dessas 12 partidas jogou pos1 (6V-4D). Builds de suporte (pos4) existem no D2PT mas com 3 a 5 partidas, amostra pequena pra entrar como posição real; por isso esta ficha cobre só a pos1.

## Pos 1 (carry)
- quando pegar: ela farma rápido na safelane porque Magic Missile já é um nuke/stun forte early (85 a 340 de dano mágico, 1,2 a 1,8s de stun conforme o nível, fonte local constants_abilities.json) e Wave of Terror reduz dano e armadura do inimigo na troca de lane (10% a 25% de dano, -3 a -6 de armadura). No 7.41 ela virou a escolha de pos1 na prática: 10 das 12 partidas do Atlas tier1 e a maior parte da amostra do D2PT (fontes acima).
- itens iniciais: quelling_blade, circlet, slippers, branches, tango

### Build
#### Wraith Band (wraith_band)
- minuto: 2
- porque: Circlet + Slippers virando Wraith Band dá dano e velocidade de ataque baratos pro farm da lane.
- detalhe: Componente direto (circlet + slippers), sem receita. É o primeiro item de stat que todo pos1 do D2PT compra nesse horário.
- fonte: itemPopularity (circlet 50x e slippers 22x no start); D2PT hero page (Wraith Band ~2 min)

#### Magic Wand (magic_wand)
- minuto: 3
- porque: carga de mana/vida de graça pra sobreviver trocas de feitiço na lane sem gastar ouro em Clarity/Flask toda hora.
- detalhe: Magic Stick + 2 Iron Branch. Junta carga com cada feitiço inimigo visível a 1200 de alcance.
- fonte: itemPopularity (magic_stick 45x e branches 159x no start); D2PT hero page (Magic Wand ~3 min)

#### Power Treads (power_treads)
- minuto: 7
- porque: ataque mais rápido com o Retribution dando bônus de melee e ranged ao mesmo tempo (7.41), então cada ponto de velocidade de ataque rende mais que antes do patch.
- detalhe: Boots + Gloves of Haste + Belt of Strength. Alterna Agilidade pra bater e Força/Inteligência conforme a necessidade de vida ou mana.
- fonte: itemPopularity (boots 99x e power_treads 67x no early game); D2PT hero page (Power Treads ~7 min); constants_abilities.json (Retribution: "considered both ranged and melee attacker")

#### Yasha (yasha)
- minuto: 18
- porque: componente do Manta e já entrega velocidade de ataque e movimento pra ela fechar wave e camp mais rápido sozinha.
- detalhe: Blade of Alacrity + Band of Elvenskin. +16 Agilidade, +15 velocidade de ataque, +10% de movimento.
- fonte: itemPopularity (blade_of_alacrity 132x no mid game); D2PT hero page (Yasha ~18 min)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 23
- porque: ao morrer, cria uma ilusão forte dela que dá e recebe dano cheio e pode usar todos os feitiços; se essa ilusão sobreviver até o respawn, ela assume o lugar da Vengeful Spirit original.
- detalhe: Point Booster + Staff of Wizardry + Ogre Axe + Blade of Alacrity (+10 em todos os atributos, +175 de vida e mana). É o item mais comprado no mid/late da amostra do D2PT (47 vezes no mid + 18 no late).
- combo: Scepter + farm agressivo de ancient/camp grande: se ela morrer tentando, a ilusão de morte continua limpando o camp em vez do jogo simplesmente perder o ciclo de farm.
- fonte: itemPopularity (ultimate_scepter 47x mid + 18x late); D2PT hero page (Aghanim's Scepter ~23 min); liquipedia.net/dota2/Vengeful_Spirit (texto do upgrade de morte)

#### Manta Style (manta)
- minuto: 28
- porque: dispel basico limpa silence/stun que travam a Nether Swap, e as duas imagens (ranged, 28% do dano dela) limpam wave ou camp enquanto ela segue pra outro ponto do mapa.
- detalhe: Yasha + Diadem (7.41: Manta não usa mais Yasha + Manta de Guile, virou Yasha + Diadem). Custo 4.650, +26 Agilidade, +10 Força e Inteligência, 125 de mana, recarga 34s.
- contra: silence/root de curta duração em cima dela: o dispel do cast remove o efeito e libera a Nether Swap de novo.
- fonte: itemPopularity (yasha 36x mid + 19x late, diadem 20x mid, manta 13x mid + 29x late); items.json (componentes e tooltip de Manta); D2PT hero page (cluster Manta/Dragon Lance/Hydra's Breath entre 26 e 30 min)

#### Dragon Lance (dragon_lance)
- minuto: 29
- porque: +130 de alcance de ataque deixa ela bater de mais longe antes de converter em Hydra's Breath, reduzindo o risco de levar iniciação em troca.
- detalhe: Blade of Alacrity + Belt of Strength. +15 Agilidade, +10 Força. É o componente direto do Hydra's Breath.
- fonte: itemPopularity (dragon_lance 10x mid); D2PT hero page (cluster 26-30 min)

#### Hydra's Breath (hydras_breath)
- minuto: 30
- porque: Miasma (2,5% da vida máxima do alvo por segundo, 3s) mais Polycephaly (30% de chance de acertar até 3 alvos extras) limpam wave e camp em área, coisa que Vengeful Spirit não tinha antes desse item.
- detalhe: Specialist's Array + Dragon Lance + Orb of Venom + receita, 5.900 de custo. +15 Força, +30 Agilidade, +25 de dano, +150 de alcance (não acumula com o bônus do Dragon Lance).
- combo: Wave of Terror pra baixar armadura do creep/camp antes do ataque com Polycephaly, limpando mais rápido um grupo inteiro.
- fonte: itemPopularity (hydras_breath 28x no late); items.json (tooltip de Miasma/Polycephaly); D2PT hero page (cluster 26-30 min)

### Situacionais
#### Black King Bar (black_king_bar)
- porque: dispel básico mais 60% de resistência mágica por 9s pra atravessar silence/stun e continuar farmando/lutando.
- detalhe: Mithril Hammer + Ogre Axe, 4.050 de custo.
- contra: Doom, que silencia e desliga passivas (ela cai de 41,5% de vitória contra Doom no agregado do OpenDota, a pior faixa de amostra grande junto com Rubick e Beastmaster); qualquer disable de alvo único que travaria a Nether Swap.
- fonte: itemPopularity (black_king_bar 11x no late); api.opendota.com/api/heroes/20/matchups; items.json (tooltip do BKB)

#### Monkey King Bar (monkey_king_bar)
- porque: Pierce dá 80% de chance por ataque de furar a evasão (mais 70 de dano mágico), então o dano extra do Polycephaly e os autoataques normais erram muito menos contra evasão alta (não é garantia de 100%).
- detalhe: Demon Edge + Blitz Knuckles + Javelin, 5.000 de custo.
- contra: heróis ou itens com evasão alta (Butterfly, Phantom Assassin) que fariam a Hydra's Breath e os autoataques normais errarem sistematicamente.
- fonte: itemPopularity (monkey_king_bar 1x mid + 5x late)

## Roshan
Sem dado de Roshan solo: ela não aparece nos 22 heróis do resumo_por_heroi.json (lista de quem soloa Rosh nos replays locais). No dataset de abates (solos.json), Vengeful Spirit participou de 27 dos 2.720 abates de Roshan registrados, e nos 2 casos em que ela foi o maior dano do abate a classificação ainda foi "time" (grupo), nunca solo. Ou seja: pelo replay local, ela ajuda o time a matar Roshan (dano e stun), mas não é um perfil que soloa.
