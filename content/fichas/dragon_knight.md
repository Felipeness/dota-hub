---
id: ficha-dragon_knight
titulo: "Dragon Knight"
heroi: Dragon Knight
patch: 7.41
posicoes: [2, 1]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/work/equipes/1win/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/nigma/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/xtreme/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/navi/analise.md
- https://api.opendota.com/api/heroes/49/itemPopularity
- https://dotacoach.gg/en/heroes/dragon-knight
---

## Resumo
Dragon Knight é um herói de força corpo a corpo que vira tanque de dano em área ao transformar em dragão (Elder Dragon Form, nível 6), com stun de alcance curto (Dragon Tail) para abrir luta e um passivo que turbina tudo (Wyrm's Wrath). No 7.41 ele é jogado quase só de mid (pos 2): no recorte Tier 1 local são 27 partidas pos 2 contra 9 de pos 1 e 1 de pos 3 (OpenDota lane_role + replay, `draft.csv`). No mid ele teve 44,4% de vitórias (12 de 27) nesse recorte; no pos 1 só 22,2% (2 de 9, amostra pequena). O time 1win usou ele especificamente como resposta de mid quando o Invoker é banido (7 picks pós-TI, ver `work/equipes/1win/analise.md`), e o jogador rincyq (Nigma) o jogou 3 vezes de pos 1 em 28 partidas (`work/equipes/nigma/analise.md`). Não achei fonte que separe a compra de item por posição: a build abaixo é a mesma base usada nas duas posições, com a frequência de compra vindo da API pública do OpenDota (itemPopularity, agregada, não só pro).

## Pos 2 (mid)
- quando pegar: é a posição real do herói no 7.41 Tier 1 (27 de 37 picks, 44,4% de vitória). Serve de counter-pick de mid de controle: quando o time inimigo tem o mid banido ou indisponível, DK entra como mid de contato físico que não depende de combo de magia (fonte: `work/equipes/1win/analise.md`, 1win trocou para Dragon Knight de mid 7 vezes depois de banir o Invoker do adversário).
- itens iniciais: na amostra pública não aparecem branches/tango isolados (itemPopularity só rastreia itens relevantes de loja, não consumíveis baratos); os itens com mais ocorrências na fase inicial são Boots puro (99), Power Treads (94), Bracer (78) e Soul Ring (74) (API OpenDota itemPopularity, early_game_items, hero_id 49)

### Build
#### Power Treads (power_treads)
- porque: alterna Força/Agilidade/Inteligência; dá velocidade de ataque sem gastar slot de boots.
- detalhe: item mais comprado na fase inicial do jogo na amostra pública (94 ocorrências, contra 99 de Boots puro). A troca de atributo ("Switch Attribute") é instantânea, então dá para ficar em Agilidade pra last hit e virar Força antes de levar dano.
- fonte: items.json (ability "Switch Attribute"); OpenDota itemPopularity (api.opendota.com/api/heroes/49/itemPopularity, early_game_items)

#### Blink Dagger (blink)
- porque: fecha a distância pro Dragon Tail, que tem alcance curto (150, de `constants_abilities.json`).
- detalhe: teleporta até 1200 de distância; não pode ser usado nos 3s depois de levar dano de herói ou Roshan (items.json). É o item mais comprado na fase de meio de jogo na amostra (89 ocorrências).
- combo: Blink + Dragon Tail é a iniciação padrão: Blink fecha o espaço, Dragon Tail (stun de 1,8 a 2,4s conforme o nível, `constants_abilities.json`) prende o alvo pro resto do time chegar.
- fonte: items.json; constants_abilities.json (dragon_knight_dragon_tail); OpenDota itemPopularity (mid_game_items)

#### Black King Bar (black_king_bar)
- porque: sem ele, qualquer stun ou silence cancela a iniciação antes do Dragon Tail acertar.
- detalhe: dá debuff immunity (bloqueia dispels negativos, stuns e a maioria dos disables), 60% de resistência mágica, dispel básico no cast e bloqueia completamente dano puro e refletido durante o efeito, por 9/8/7s conforme o nível de uso; não reduz dano físico; +10 Força e +24 de dano (items.json). É o 2º item mais comprado no meio de jogo (60 ocorrências, via os componentes Mithril Hammer e Ogre Axe).
- contra: habilidades marcadas pra atravessar debuff immunity (`bkbpierce: Yes` em constants_abilities.json, caso do Doom, que também dá dano puro) e itens de Break, que removem passivos em vez de aplicar debuff.
- combo: ligar o BKB antes de entrar na forma de dragão garante que o Elder Dragon Form não seja cancelado por silence/hex no meio da luta.
- fonte: items.json (ability "Avatar"); OpenDota itemPopularity (mid_game_items)

#### Aghanim's Scepter (ultimate_scepter)
- porque: soma 1 nível a mais à Elder Dragon Form, então o dragão sobe pra forma seguinte (verde → vermelho → azul, cumulativas) antes do que os pontos de habilidade dariam; com os 3 pontos já no máximo (forma azul), o Scepter ainda libera uma 4ª forma, o "Black Dragon" (pathing livre e resistência mágica extra).
- detalhe: as 3 formas normais e seus bônus (verde: dano contínuo que também atinge construções; vermelho: dano em área nos ataques; azul: slow de ataque e movimento que atravessa debuff immunity) estão em `constants_abilities.json` (dragon_knight_elder_dragon_form); o bônus de nível do Scepter em si não tem campo correspondente nos arquivos locais, então o "+1 nível" e o Black Dragon vêm do guia dotacoach.gg (7.41e), não achei confirmação equivalente em fonte local ou Liquipedia (bloqueada na checagem).
- fonte: constants_abilities.json (dragon_knight_elder_dragon_form); dotacoach.gg/en/heroes/dragon-knight (bônus do Scepter); OpenDota itemPopularity (late_game_items, ultimate_scepter 25 ocorrências)

#### Octarine Core (octarine_core)
- porque: reduz recarga e dá mana pra repetir Breathe Fire e Dragon Tail mais vezes por luta.
- detalhe: item de late game mais comprado na amostra (38 ocorrências) depois do Scepter, que é um dos componentes (Soul Booster, 36 ocorrências, é o outro).
- fonte: items.json (componentes de octarine_core); OpenDota itemPopularity (late_game_items)

### Situacionais
#### Aghanim's Shard (aghanims_shard)
- porque: libera Fireball, a 6ª habilidade do herói (travada sem o Shard): uma área de dano contínuo que serve pra farmar onda e empurrar torre sem precisar do corpo a corpo, além de dano extra em luta.
- detalhe: Fireball tem raio 275, 85 de dano mágico por segundo por 6s (queima a cada 0,5s, com resíduo de 2s depois que a área suja o alvo), alcance de conjuração 600, mas alcance reduzido em forma humana, fora da Elder Dragon Form (`constants_abilities.json`, dragon_knight_fireball). Está na build na maioria dos jogos (74 ocorrências no meio de jogo, quase tanto quanto a BKB).
- fonte: constants_abilities.json (dragon_knight_fireball); constants_hero_abilities.json (lista de abilities do Dragon Knight, confirma Fireball como a 6ª habilidade); dotacoach.gg/en/heroes/dragon-knight (confirma Fireball como a habilidade liberada pelo Shard); OpenDota itemPopularity (mid_game_items, aghanims_shard 74 ocorrências)

#### Heaven's Halberd (heavens_halberd)
- porque: soma armadura, evasão e regeneração que ajudam Dragon Knight, já tanque na forma de dragão, a bancar dano na frente de luta.
- contra: heróis que dependem do ataque corpo a corpo pra fazer dano (Disarm impede atacar por 3,5s).
- detalhe: baixa frequência na amostra (2 ocorrências), ou seja, é escolha pontual, não padrão.
- fonte: items.json (ability "Disarm", attrib bonus_armor/bonus_evasion/bonus_health_regen); OpenDota itemPopularity (late_game_items)

#### Hurricane Pike (hurricane_pike)
- contra: inimigo de iniciação corpo a corpo (empurra os dois 425 de distância e dá 5 ataques sem restrição de alcance por 6s, então serve pra escapar de um gap-closer e ainda bater).
- detalhe: 16 ocorrências no late game da amostra.
- fonte: items.json (ability "Hurricane Thrust", attrib bonus_strength/bonus_agility/bonus_health); OpenDota itemPopularity (late_game_items)

#### Shiva's Guard (shivas_guard)
- porque: a onda (260 de dano mágico, -40% de velocidade em área de 825) e a aura (-45 de velocidade de ataque em 1200 de raio) combinam com a forma de dragão pra travar um grupo inteiro.
- detalhe: 19 ocorrências no late game.
- fonte: items.json (abilities "Arctic Blast" e "Freezing Aura"); OpenDota itemPopularity (late_game_items)

#### Overwhelming Blink (overwhelming_blink)
- porque: upgrade do Blink que soma uma explosão de área (100 + 50% da Força, mais 100% ao longo do tempo) e slow de 50% em quem estiver perto do pouso.
- detalhe: 19 ocorrências no late game; é a opção de upgrade de Blink mais comprada (contra 1 de Swift Blink).
- combo: Blink de iniciação virando Overwhelming no late game transforma a mesma entrada em dano de área, sem mudar o jeito de jogar.
- fonte: items.json (ability "Overwhelming Blink"); OpenDota itemPopularity (late_game_items)

#### Bloodthorn (bloodthorn)
- porque: soma velocidade de ataque e silencia o alvo por 5s, travando disable e cura do inimigo durante a iniciação de Dragon Knight.
- contra: heróis com evasão (garante acerto, "Pierce" 40% de chance de ignorar evasão) ou que dependem de cura/sustain em luta alongada (silencia 5s e devolve 60% do dano recebido no período como dano mágico ao final).
- detalhe: 10 ocorrências no late game.
- fonte: items.json (abilities "Soul Rend" e "Pierce", attrib bonus_attack_speed); OpenDota itemPopularity (late_game_items)

## Pos 1 (carry)
- quando pegar: é a posição secundária e mais rara do herói no 7.41: 9 de 37 picks pro no recorte local, com 22,2% de vitórias (2 de 9), amostra pequena pra confiar na taxa. Ainda assim é pick real: o pos 1 rincyq (Nigma) jogou Dragon Knight 3 vezes em 28 partidas na posição (`work/equipes/nigma/analise.md`).
- itens iniciais: mesma abertura do mid (Boots, Power Treads, Bracer, Soul Ring, nessa ordem de ocorrência), sem fonte que separe por posição.

### Build
Não há fonte local ou pública que separe a compra de item por posição para este herói: a trilha de item verificável (Power Treads, Blink Dagger, Black King Bar, Aghanim's Scepter, Octarine Core) é a mesma listada em "Pos 2", e vale também para o pos 1. A diferença real entre as posições, pelos dados disponíveis, é de prioridade de farm e taxa de vitória, não de itens: ver bloco "Pos 2" para o detalhe de cada item.

### Situacionais
Mesmos itens situacionais do mid (Heaven's Halberd, Hurricane Pike, Shiva's Guard, Overwhelming Blink, Bloodthorn), pela mesma razão: nenhuma fonte separa a compra por posição.

## Roshan
Sem dado de Roshan solo.
