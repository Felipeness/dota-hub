---
id: ficha-storm_spirit
titulo: "Storm Spirit"
heroi: Storm Spirit
patch: 7.41
posicoes: [2]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/1win/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/aurora/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/betboom/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/falcons/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/lgd/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/liquid/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/nigma/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/parivision/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/team-spirit/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/xtreme/hub.json
- https://api.opendota.com/api/heroes/17/itemPopularity
- https://dota2protracker.com/hero/Storm+Spirit
- https://dota2protracker.com/hero/legacy/Storm+Spirit
- https://dotacoach.gg/en/heroes/storm-spirit/builds/mid
- https://liquipedia.net/dota2/Storm_Spirit
---

## Resumo
Storm Spirit é um mid de mobilidade e iniciação: usa Ball Lightning pra farmar rápido e entrar na luta sozinho, Electric Vortex pra puxar o alvo e Static Remnant mais o ataque carregado de Overload pra abrir dano antes de o resto do time chegar. A tag oficial do OpenDota inclui Carry, mas no profissional do 7.41 ele joga quase só de pos 2: aparece como mid em pelo menos 10 times do Atlas (1win, Aurora, BetBoom, Falcons, LGD, Liquid, Nigma, PARIVISION, Team Spirit e Xtreme), sempre no mesmo grupo de mids móveis e iniciadores como Ember Spirit, Puck e Earth Spirit. No D2PT (7000-8500 MMR, 7.41e) ele fica perto de 47% de win rate com pick rate de cerca de 8%, perfil de herói tático de counter-pick, não de pick às cegas.

## Pos 2 (mid)
- quando pegar: como counter-pick de mid, quando o time inimigo não tem silêncio longo nem root pronto pra travar o Ball Lightning e dá pra confirmar o resto do draft antes (pos2 em 10 dos times do Atlas, de 1win a Xtreme).
- itens iniciais: tango, faerie_fire, branches, ward_observer

### Build
#### Bottle (bottle)
- minuto: ~1
- porque: sustenta vida e mana na lane sem voltar na base e ainda guarda uma rune pra ganks ou fuga.
- detalhe: enche nas runes do rio no early game. É a base de mana pro combo Electric Vortex mais ataque desde o nível 1, quando o Overload ainda não compensa gastar Soul Ring.
- fonte: items.json; OpenDota itemPopularity hero 17 (94 ocorrências em early_game_items); dota2protracker

#### Soul Ring (soul_ring)
- minuto: ~6
- porque: converte vida em mana pra spammar Static Remnant e Electric Vortex sem secar o pool.
- detalhe: junto com a Bottle, segura o mid sem precisar voltar na base nos primeiros minutos, que é quando o Ball Lightning ainda não compensa como fonte de farm.
- fonte: items.json; OpenDota itemPopularity (74 em early_game_items); dota2protracker

#### Power Treads (power_treads)
- minuto: ~8
- porque: ataque mais rápido pra descarregar a carga de Overload assim que ela sobe, sem esperar o próximo swing.
- detalhe: troca o atributo primário pra força fora de combate (mais vida pra sobreviver em harass) e pra inteligência puxando a luta (mais mana pro combo).
- fonte: items.json; OpenDota itemPopularity (70 em early_game_items); dota2protracker

#### Kaya (kaya)
- minuto: ~16
- porque: amplifica o dano das magias e acelera a regeneração de mana, então o pool enche de volta mais rápido entre uma corrida de Ball Lightning e outra.
- detalhe: +10% de amplificação de magia e +30% de regeneração de mana (items.json). Não reduz custo de mana, isso só chega com o Sange no Kaya and Sange.
- fonte: items.json (attrib spell_amp 10%, mana_regen_multiplier 30%); OpenDota itemPopularity (87 em mid_game_items); dota2protracker

#### Witch Blade (witch_blade)
- minuto: ~20
- porque: o próximo ataque sai com true strike e slow, então o alvo não escapa depois do combo de vortex e overload.
- detalhe: a passiva do item e a carga de Overload se somam no mesmo ataque: dano extra, slow e garantia de acerto mesmo contra evasão.
- contra: heróis que dependem de evasão ou de errar o ataque alheio pra sobreviver (ex.: Phantom Assassin, Windranger em Windrun).
- combo: Overload acumulado + Witch Blade no mesmo hit: dano de magia (overload) somado a dano de agilidade com slow e true strike (witch blade) no alvo que acabou de ser puxado pelo Electric Vortex.
- fonte: items.json (abilities Witch Blade: true strike, slow 25%/4s); OpenDota itemPopularity (54 em mid_game_items, 30 em late_game_items)

#### Kaya and Sange (kaya_and_sange)
- minuto: ~24
- porque: soma redução de custo de mana com resistência a lentidão, fica barato engajar e ainda sair se o Ball Lightning for preciso pra fugir.
- detalhe: +25% de redução de custo/perda de mana e +25% de resistência a lentidão (items.json), além do spell amp e mana regen que já vinham do Kaya.
- combo: com o custo de mana reduzido, dá pra fechar Electric Vortex, ataque, Static Remnant e ainda sobrar mana pra um Ball Lightning de fuga sem secar o pool no meio da sequência.
- fonte: items.json (attrib manacost_reduction 25%, slow_resistance 25%); OpenDota itemPopularity (44 em mid_game_items, 33 em late_game_items); dota2protracker

#### Black King Bar (black_king_bar)
- minuto: ~27
- porque: 9 segundos de imunidade mágica pra entrar na luta sem ser travado antes de soltar o combo.
- detalhe: aplica dispel básico ao ativar e dá 60% de resistência mágica. Mas o próprio Overload do Storm não atravessa a imunidade de ninguém (bkbpierce "No" em constants_abilities.json), então usar BKB não ajuda o combo a acertar um inimigo que também esteja de BKB.
- contra: times com disable mágico pesado e silêncio em área que travariam o cast de Ball Lightning e Electric Vortex antes do combo saber.
- fonte: items.json; constants_abilities.json (storm_spirit_overload, bkbpierce: No); OpenDota itemPopularity (36 em mid_game_items, 39 em late_game_items); dota2protracker

#### Parasma (devastator)
- porque: carrega o dano de inteligência pro late e ainda reduz 20% da resistência mágica do alvo, furando até BKB.
- detalhe: evolução de Witch Blade com Mystic Staff, mantém o true strike e o slow e soma +40 de inteligência e +40 de attack speed (items.json).
- combo: o debuff de resistência mágica (bkbpierce "Yes") abre o alvo pra o nuke mágico do time logo depois do ataque do Storm, mesmo que ele esteja de BKB.
- fonte: items.json (abilities Magic Corruption, attrib active_mres_reduction 20, bkbpierce Yes); OpenDota itemPopularity (57 em late_game_items)

### Situacionais
#### Null Talisman (null_talisman)
- minuto: ~4
- contra: lane tranquila sem harass pesado, quando dá pra abrir mão de Bottle/Soul Ring e chegar mais rápido no nível 6 com mana sobrando.
- fonte: OpenDota itemPopularity (19 em early_game_items); dota2protracker (rota citada em ~2,8% a 3,9% dos jogos)

#### Linken's Sphere (sphere)
- porque: bloqueia o primeiro feitiço de alvo único que vier em cima do Storm a cada 14 segundos.
- contra: heróis com um disable de alvo único que mata se conectar (Lion, Doom, Shadow Shaman, Nyx Assassin).
- fonte: items.json (abilities Spellblock); OpenDota itemPopularity (6 em mid_game_items, 19 em late_game_items)

#### Orchid Malevolence / Bloodthorn (orchid / bloodthorn)
- porque: silencia o alvo por 5 segundos e, no Bloodthorn, garante true strike; trava a fuga e ainda causa dano bônus quando o silêncio acaba.
- contra: heróis difíceis de fechar o kill (evasão, cura alta, blink de fuga) ou que precisam da própria magia pra sobreviver.
- fonte: items.json (abilities Soul Burn, Soul Rend, Pierce); OpenDota itemPopularity (orchid: 5 em mid_game_items e 5 em late_game_items; bloodthorn: 5 em late_game_items)

#### Shiva's Guard (shivas_guard)
- porque: onda de área com slow e aura que reduz a velocidade de ataque de todo mundo perto, compensando a falta de controle em área do Storm.
- contra: carries de ataque físico rápido e heróis de evasão ou ilusão.
- fonte: items.json (abilities Arctic Blast, Freezing Aura); OpenDota itemPopularity (16 em late_game_items)

#### Scythe of Vyse (sheepstick)
- porque: desliga por 2,8 segundos o alvo mais perigoso antes que ele reaja, virando crítter silenciado e desarmado.
- contra: heróis de ultimate de resposta rápida que o time precisa travar antes de acontecer (ex.: Enigma antes do Black Hole, Lion antes do Finger of Death).
- fonte: items.json (abilities Hex); OpenDota itemPopularity (14 em late_game_items)

#### Eul's Scepter of Divinity (cyclone)
- porque: aplica dispel básico em si mesmo pra sair de um silêncio ou stun curto antes de entrar na luta.
- detalhe: os 2,5 segundos de invulnerabilidade também servem pra isolar o alvo antes do combo ou esperar um cooldown importante baixar.
- fonte: items.json (abilities Cyclone, dispel básico); dotacoach (listado como item situacional no build de mid)

#### Aghanim's Scepter (ultimate_scepter)
- porque: o Electric Vortex passa a puxar todos os inimigos num raio ao redor do Storm, uma versão barata de Black Hole pra abrir luta em grupo.
- fonte: liquipedia.net/dota2/Storm_Spirit (upgrade de Electric Vortex); OpenDota itemPopularity (25 em late_game_items)

#### Aghanim's Shard (aghanims_shard)
- porque: dá 3 cargas de Overload pro Storm e pros aliados num raio de 750, com bônus de velocidade de ataque, pra lutas em grupo e pushes de torre.
- fonte: constants_abilities.json (storm_spirit_electric_rave: radius 750, charges 3, duration 12); dotacoach (listado no build de mid)

## Roshan
Sem dado de Roshan solo.
