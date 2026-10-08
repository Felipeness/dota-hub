---
id: ficha-sniper
titulo: "Sniper"
heroi: Sniper
patch: 7.41
posicoes: [1, 2, 4]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-roshan-solo/data/solos.json
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-tier1/work/equipes/nigma/hub.json
- dota-tier1/work/equipes/parivision/explore_out.txt
- https://api.opendota.com/api/heroes/35/itemPopularity
- https://dotacoach.gg/heroes/sniper
---

## Resumo

Sniper é um atirador de longa distância: Take Aim estica o alcance de ataque, Headshot dá 40% de chance de dano extra com empurrão, Shrapnel chove dano em área numa zona revelada e Assassinate fecha de longe com um nuque de alvo único que reseta ao matar. No 7.41 ele é essencialmente um mid, 61,0% de seleção e 50,8% de vitória nessa posição, contra 15,1% (48,6%) de carry e 14,6% (46,9%) de suporte de roam. Offlane (3,1%, 47,1%) e suporte duro (6,2%, 46,0%) são ruído, não uso real (dotacoach.gg, patch 7.41f). No Atlas, lorenof jogou ele de mid pela Nigma (4 partidas, 75% de vitória) e a Parivision também usou ele de mid (2 partidas, 50%).

## Pos 2 (mid)

- quando pegar: pegue de mid sempre que puder, é a posição real do herói no 7.41, 61,0% das partidas dele e 50,8% de vitória (dotacoach.gg, 7.41f). lorenof (Nigma) e a Parivision jogaram ele nessa posição no Atlas.
- itens iniciais: tango, faerie_fire, branches, circlet, slippers, ward_observer

### Build

#### Power Treads (power_treads)
- porque: velocidade de ataque e troca de atributo liberam o DPS de auto-ataque sem gastar mana.
- detalhe: +25 de velocidade de ataque, +45 de movimento (herói ranged) e +10 no atributo escolhido. É a bota mais comprada no early game dele (97 partidas), atrás só do Wraith Band como peça solta.
- fonte: OpenDota itemPopularity hero 35; items.json

#### Dragon Lance (dragon_lance)
- porque: mais alcance de ataque mantém ele fora do corpo a corpo e ainda turbina o bônus de dano do Keen Scope.
- detalhe: +130 de alcance de ataque (ranged), +15 Agilidade, +10 Força. Keen Scope dá +1,5% de dano a cada 100 de distância do alvo, então esse alcance extra já é dano puro. 75 partidas na fase intermediária, o 2º item mais comprado nela.
- combo: somado ao alcance passivo de Take Aim (+160 a +400 conforme o nível), o Dragon Lance empurra Sniper ainda mais pra fora do alcance de resposta do inimigo.
- fonte: items.json; constants_abilities.json (sniper_keen_scope, sniper_take_aim)

#### Mjollnir (mjollnir)
- porque: Static Charge espalha dano em área a cada auto-ataque, bom pra limpar wave e empilhar dano em luta.
- detalhe: evolução do Maelstrom. +25 de dano, +90 de velocidade de ataque, 20% de chance de Static Charge causar 225 de dano em até 4 alvos num raio de 600. Maelstrom foi o 4º item mais comprado no mid game (55 partidas) e Mjollnir aparece em 29 (mid) mais 11 (late).
- fonte: items.json; OpenDota itemPopularity hero 35

#### Hurricane Pike (hurricane_pike)
- porque: empurra quem chegou perto 425 de distância e libera 5 ataques sem restrição de alcance com +100 de velocidade.
- detalhe: feito de Dragon Lance mais Force Staff. Apareceu fechado em 34 partidas no mid game e mais 14 no late game (fica atrás de Dragon Lance, Maelstrom e Force Staff em volume de compra nessa fase, que entram como peça de outros itens).
- contra: heróis de iniciação corpo a corpo que dependem de chegar perto pra fazer dano.
- combo: usar o Hurricane Thrust no melee que iniciou cria distância e ainda dá 5 ataques garantidos com bônus de velocidade, o suficiente pra matar quem errou o gap close.
- fonte: items.json (hurricane_pike, componentes force_staff e dragon_lance)

#### Daedalus (greater_crit)
- porque: fecha o combo de auto-ataque com 30% de chance de crítico em 225%, o maior multiplicador de dano reto do inventário dele.
- detalhe: +88 de dano. Demon Edge, o componente, foi o item mais comprado no late game (36 partidas) e o próprio Daedalus aparece em 18.
- fonte: items.json; OpenDota itemPopularity hero 35

### Situacionais

#### Black King Bar (black_king_bar)
- quando: contra times com muito disable de alvo único ou em área que interrompem o DPS dele antes do Hurricane Pike salvar.
- porque: dispel e imunidade a efeitos negativos de feitiço por 9/8/7s segura ele vivo pra continuar atirando.
- contra: stuns, hex, root e silence que impedem o auto-ataque ou o combo de habilidades.
- fonte: items.json; OpenDota itemPopularity hero 35 (29 partidas no late)

#### Monkey King Bar (monkey_king_bar)
- quando: contra evasão alta que faz o auto-ataque falhar.
- porque: 80% de chance de ignorar evasão, mais 70 de dano mágico extra por acerto.
- contra: Phantom Assassin (Blur), Butterfly e qualquer evasão parecida.
- fonte: items.json; OpenDota itemPopularity hero 35 (8 partidas no late, 2 no mid)

## Pos 1 (carry)

- quando pegar: é uso real, mas secundário: 15,1% das partidas dele no 7.41f foram de carry, com 48,6% de vitória (dotacoach.gg). O kit dele funciona como carry solo, mas o pick rate fica bem atrás do mid.
- itens iniciais: tango, branches, circlet, slippers

### Build

#### Power Treads (power_treads)
- porque: mesmo raciocínio do mid, velocidade de ataque e troca de atributo sem custo de mana.
- detalhe: +25 de velocidade de ataque, +45 de movimento (ranged), +10 no atributo escolhido.
- fonte: OpenDota itemPopularity hero 35; items.json

#### Dragon Lance (dragon_lance)
- porque: alcance extra mantém ele fora de troca e aumenta o bônus de dano do Keen Scope por distância.
- detalhe: +130 de alcance de ataque (ranged), +15 Agilidade, +10 Força.
- fonte: items.json; constants_abilities.json (sniper_keen_scope)

#### Mjollnir (mjollnir)
- porque: dano em área a cada acerto acelera o farm e empilha dano extra em luta.
- detalhe: evolução do Maelstrom. 20% de chance de Static Charge, 225 de dano em até 4 alvos.
- fonte: items.json; OpenDota itemPopularity hero 35

#### Hurricane Pike (hurricane_pike)
- porque: é o jeito dele sobreviver a uma iniciação corpo a corpo sem ter blink ou dash no kit.
- detalhe: empurra o alvo 425 de distância e dá 5 ataques garantidos com +100 de velocidade de ataque por 6s.
- contra: heróis que dependem de chegar perto corpo a corpo pra matar ele.
- fonte: items.json (hurricane_pike)

#### Daedalus (greater_crit)
- porque: maior spike de dano reto pra fechar kill de carry depois que o resto do build já saiu.
- detalhe: +88 de dano, 30% de chance de crítico em 225%.
- fonte: items.json; OpenDota itemPopularity hero 35

### Situacionais

#### Black King Bar (black_king_bar)
- quando: contra disable pesado de alvo único que tira ele do DPS antes da luta decidir.
- porque: dispel e imunidade a efeitos negativos de feitiço por 9/8/7s.
- contra: stuns, hex, root e silence.
- fonte: items.json; OpenDota itemPopularity hero 35 (29 partidas no late)

#### Monkey King Bar (monkey_king_bar)
- quando: contra evasão alta.
- porque: 80% de chance de ignorar evasão, mais 70 de dano mágico extra por acerto.
- contra: Phantom Assassin, Butterfly.
- fonte: items.json; OpenDota itemPopularity hero 35

## Pos 4 (suporte de roaming)

- quando pegar: uso real mas menor, 14,6% das partidas dele no 7.41f foram de suporte, com 46,9% de vitória (dotacoach.gg). O combo Shrapnel mais Concussive Grenade em área favorece gank cedo mesmo sem farm de carry.
- itens iniciais: tango, branches, ward_observer, magic_stick

### Build

#### Magic Wand (magic_wand)
- porque: stats baratos e uma carga de emergência de vida e mana depois de qualquer troca no roam.
- detalhe: evolução do Magic Stick. Os dois aparecem entre os itens iniciais dele (4 Wand, 6 Stick).
- fonte: OpenDota itemPopularity hero 35; items.json

#### Power Treads (power_treads)
- porque: mesmo como suporte, velocidade de ataque ajuda a fechar o Headshot mais vezes no gank.
- detalhe: +25 de velocidade de ataque, +45 de movimento (ranged). Headshot tem 40% de chance de proc.
- fonte: OpenDota itemPopularity hero 35; items.json; constants_abilities.json (sniper_headshot)

#### Hurricane Pike (hurricane_pike)
- porque: puxa o aliado pro gank certo ou afasta quem veio pra cima do suporte no contragank.
- detalhe: feito de Dragon Lance mais Force Staff. Em aliado empurra 600 de distância na direção que já está olhando, em inimigo empurra 425 e dá 5 ataques garantidos.
- combo: Shrapnel pra revelar e lentificar a área, Concussive Grenade pra nocautear e desarmar, Hurricane Pike pra fechar a distância certa do gank.
- fonte: items.json; constants_abilities.json (sniper_shrapnel, sniper_concussive_grenade)

### Situacionais

#### Black King Bar (black_king_bar)
- quando: jogos longos, quando o suporte de roam virou um item relevante em luta e precisa segurar o próprio DPS.
- porque: dispel e imunidade a efeitos negativos de feitiço por 9/8/7s.
- contra: stuns, hex, root e silence que impedem o combo de habilidades.
- fonte: items.json; OpenDota itemPopularity hero 35

## Roshan

Sem dado de Roshan solo.
