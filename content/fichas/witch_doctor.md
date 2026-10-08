---
id: ficha-witch_doctor
titulo: "Witch Doctor"
heroi: Witch Doctor
patch: 7.41
posicoes: [5]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-tier1/work/equipes/liquid/hub.json
- dota-tier1/work/equipes/navi/hub.json
- dota-roshan-solo/data/solos.json
- dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/30/itemPopularity
- https://dota2protracker.com/hero/Witch+Doctor (via busca, conteudo nao carregou direto)
- https://dota2protracker.com/builds/witch-doctor-pos5-1 (via busca, conteudo nao carregou direto)
- https://dotacoach.gg/en/heroes/witch-doctor/builds/support
- https://dota2.fandom.com/wiki/Witch_Doctor/Changelogs (via busca)
- https://www.liquipedia.net/dota2/Witch_Doctor (via busca, conteudo nao carregou direto)
---

## Resumo
Witch Doctor é um suporte de nuke e disable em área: Paralyzing Cask trava um grupo inteiro em bounces, Maledict pune quem perde vida perto dele e Death Ward é o maior dano de ultimate à distância do jogo enquanto ele conseguir canalizar. No Tier 1 do patch 7.41 ele é praticamente só jogado de pos 5: na base local de draft, 53 das 58 vezes em que foi picado por times Tier 1 ele saiu marcado como posição 5 (e só 5 como posição 4). A NAVI usa o Riddys nele (4V-1D nos últimos jogos) e a Liquid também tem ele no pool de pos 5 (12 dos 15 picks dela marcados pos 5, e 3 como pos 4), então o perfil de "suporte duro" é o real no cenário competitivo atual.

## Pos 5 (suporte duro)
- quando pegar: pegue quando precisar de um disable em área barato pra abrir luta e não tiver outro suporte de iniciação no time; é a posição em que ele aparece em praticamente todos os drafts de Tier 1 do patch (53 de 58 picks na base local de draft).
- itens iniciais: tango, magic_stick, branches, blood_grenade, ward_sentry, ward_observer

### Build
#### Magic Wand (magic_wand)
- porque: carga de HP/mana instantânea pra sobreviver ao harass de lane sem gastar Voodoo Restoration.
- detalhe: upgrade do Magic Stick inicial, ganha carga cada vez que um inimigo visível usa habilidade num raio de 1200. Com 20 cargas dá 300 HP/300 mana de recuperação instantânea (15 por carga), essencial antes de ter Arcane Boots.
- fonte: dota-imortal/data/opendota/items.json

#### Arcane Boots (arcane_boots)
- porque: mana pra manter Voodoo Restoration ligada sem secar o pool.
- detalhe: Voodoo Restoration custa 9 a 18 de mana por segundo enquanto ativa (sobe com o nível da habilidade); sem reposição de mana o suporte não consegue manter a cura ligada no meio de uma troca prolongada. O recarregar em área (150 de mana, raio 1200) também dá sustain pro time inteiro perto da fonte. É a bota mais comprada pelo herói na base pública do OpenDota (37,6% dos itens de meio de jogo).
- combo: estoura o item junto com Voodoo Restoration pra sustentar a lane e os aliados do fosso sem precisar voltar à base.
- fonte: dota-imortal/data/opendota/items.json; dota-imortal/data/opendota/constants_abilities.json; https://api.opendota.com/api/heroes/30/itemPopularity

#### Glimmer Cape (glimmer_cape)
- porque: sobrevivência pra jogar perto do inimigo sem morrer antes de usar Cask ou Death Ward.
- detalhe: dá invisibilidade com delay de 0,5s e uma barreira mágica de até 375 de dano por 5s, em si mesmo ou num aliado. É um dos itens mais recorrentes nas compras do herói na base pública do OpenDota, atrás só das Arcane Boots: 9,8% dos itens de meio de jogo e 11,3% dos de fim de jogo.
- contra: nukers de dano mágico de alvo único que tentam abrir a luta matando o WD primeiro (a barreira absorve o burst inicial).
- fonte: https://api.opendota.com/api/heroes/30/itemPopularity; dota-imortal/data/opendota/items.json

#### Aghanim's Shard (aghanims_shard)
- porque: dá um segundo Death Ward (Voodoo Switcheroo) sem gastar a ultimate de novo.
- detalhe: Voodoo Switcheroo transforma o próprio WD num Death Ward por 2,5s, com 45% menos velocidade de ataque e ficando escondido (hidden) durante o efeito. Custa 200 de mana e tem 50s de recarga.
- combo: use quando o Death Ward normal estiver em recarga ou o WD já tiver morrido na luta anterior; ele vira um segundo canal de dano pure sem custar a ultimate outra vez.
- fonte: dota-imortal/data/opendota/constants_abilities.json; dota-imortal/data/opendota/items.json

#### Pavise (pavise)
- porque: barreira física barata pra jogar o carry ou o iniciador na frente da luta.
- detalhe: dá 250 de dano em barreira física por 7s num aliado. 7,2% dos itens de meio de jogo do herói na base pública do OpenDota.
- fonte: https://api.opendota.com/api/heroes/30/itemPopularity; dota-imortal/data/opendota/items.json

#### Solar Crest (solar_crest)
- porque: pacote de armadura e ataque num aliado, bom pra empurrar a luta pro lado do carry ou enfraquecer um torre-pusher inimigo.
- detalhe: em aliado dá 5 de armadura, 60 de velocidade de ataque, 15% de movimento e 350 de barreira física por 7s; usado em si mesmo não dá os bônus de atributo, só a barreira. 3,6% dos itens de meio de jogo e 5,0% dos de fim de jogo do herói no OpenDota.
- fonte: https://api.opendota.com/api/heroes/30/itemPopularity; dota-imortal/data/opendota/items.json

### Situacionais
#### Spirit Vessel (spirit_vessel)
- porque: corta a cura/regen do alvo e soma dano por segundo.
- detalhe: em cima de inimigo reduz a vida atual em 4%/s, corta 70% da restauração de vida e aplica 25 de dano/s por 8s. Ganha cargas a cada herói inimigo que morre perto.
- contra: heróis que dependem de lifesteal, regen de HP alto ou cura própria pesada (ex.: carries de lifesteal, heróis com habilidade de auto-cura forte), já que o corte de 70% de restauração neutraliza o sustain deles na luta.
- fonte: dota-imortal/data/opendota/items.json; dotacoach.gg/en/heroes/witch-doctor/builds/support (confirmado via fetch direto: listado em Situational)

#### Aeon Disk (aeon_disk)
- porque: salva o WD de um combo de burst/stun que normalmente o mataria antes dele conseguir canalizar Death Ward.
- detalhe: quando o WD cai abaixo de 70% de vida, aplica um dispel forte e dá 2,5s de +75% de resistência a status com dano recebido e causado zerado (só contra dano de jogador). A recarga aumenta a cada vez que dispara.
- contra: composições de iniciação com combo de stun + nuke alto focado no WD, que tentam matá-lo antes da luta engajar de verdade.
- fonte: dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/30/itemPopularity; dotacoach.gg/en/heroes/witch-doctor/builds/support (confirmado via fetch direto: listado em Late Game)

#### Force Staff (force_staff)
- porque: reposiciona o WD (fugir de gank) ou empurra um aliado pra fora de perigo, incluindo puxar companheiro que ficou isolado perto da fossa do Roshan.
- detalhe: empurra qualquer unidade alvo 600 unidades na direção que ela está de frente. 4,6% dos itens de meio de jogo e 11,3% dos de fim de jogo do herói no OpenDota.
- contra: ganks de 1 ou 2 heróis que tentam isolar o WD fora da visão do time antes da luta principal.
- fonte: https://api.opendota.com/api/heroes/30/itemPopularity; dota-imortal/data/opendota/items.json; dotacoach.gg/en/heroes/witch-doctor/builds/support (confirmado via fetch direto: listado em Situational e em Mid Game)

#### Eul's Scepter of Divinity (cyclone)
- porque: autocyclone pra sobreviver a burst corpo a corpo isolado e voltar pra luta a tempo do próximo Death Ward.
- detalhe: suspende o alvo (ou o próprio WD) em ciclone por 2,5s de invulnerabilidade, com 50 de dano mágico ao aterrissar. Listado como item situacional do herói na build de suporte.
- contra: heróis de burst corpo a corpo (iniciadores melee) que focam o WD sozinho fora de posição.
- fonte: dota-imortal/data/opendota/items.json; dotacoach.gg/en/heroes/witch-doctor/builds/support (confirmado via fetch direto: listado em Situational)

#### Scythe of Vyse (sheepstick)
- porque: trava de 2,8s (silence, mute, disarm) pra garantir que o alvo não escape nem interrompa o Death Ward.
- detalhe: vira o alvo num bicho inofensivo, com 140 de velocidade de movimento, silenciado, mudo e desarmado; destrói ilusões na hora. Item caro, de luxo, não faz parte do core de pos 5.
- contra: carries mobile e difíceis de travar que fogem de cask/stun comum (o disarm+silence tira tanto a fuga por skill quanto o ataque básico).
- fonte: dotacoach.gg/en/heroes/witch-doctor/builds/support (confirmado via fetch direto: listado em Situational); dota-imortal/data/opendota/items.json

## Roshan
Sem dado de Roshan solo: na base local de 2.720 abates de Roshan classificados (solo ou em grupo, pro+pub), Witch Doctor nunca aparece como o herói creditado pelo abate. Ele aparece só duas vezes como suporte presente na fossa apoiando o solo de outro herói (Spectre e Lina), nunca como quem bate no Roshan sozinho. Não há evidência local de que o time dele priorize buscar Roshan com o WD por perto como parte de um padrão; o dado só mostra que ele não é o herói usado pra bater.
