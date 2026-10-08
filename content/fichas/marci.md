---
id: ficha-marci
titulo: "Marci"
heroi: Marci
patch: 7.41
posicoes: [4, 5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- https://api.opendota.com/api/heroes/136/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=136
- https://dotacoach.gg/pt-BR/heroes/marci/builds/support
- https://dotacoach.gg/en/heroes/marci
- https://liquipedia.net/dota2/Marci/Changelogs
- https://liquipedia.net/dota2/Black_King_Bar
- https://dotacoach.gg/en/items/black-king-bar
---

## Resumo

Marci é um suporte all-around de iniciação (papéis oficiais: Support, Carry, Initiator, Disabler, Escape; fonte: `heroes.json`). O combo do kit é simples: Dispose agarra e arranca um inimigo (ou puxa um aliado) para fora da formação com dano e slow, Rebound avança nele com dano e stun, Guardian/Bodyguard rouba vida e dano para proteger um aliado e Unleash transforma Marci numa sequência de golpes rápidos que desacelera ataque e movimento do alvo (fonte: `constants_abilities.json`). Não existe mais escolha de facet ativa nela no 7.41, só esse kit único (fonte: `constants_hero_abilities.json`, campo `facets` todo marcado como `deprecated`).

Na prática ela não é carry nem mid no competitivo atual: nos 11 picks dela em partidas de pro registradas no Atlas (`dota-tier1/data/draft.csv`), foi draftada 7 vezes como pos4 e 4 vezes como pos5, nunca pos1, pos2 ou pos3. A Dota Coach mede 18,4% de seleção e 46,0% de vitória nela como suporte e 16,6% e 44,6% como suporte duro no patch 7.41f (fonte: dotacoach.gg/en/heroes/marci). O perfil de farm bate com isso: mediana de 3,3 last hits por minuto e 412 de ouro por minuto nos benchmarks do OpenDota (fonte: api.opendota.com/api/benchmarks?hero_id=136; esse número é recalculado pela OpenDota conforme chegam partidas novas, então varia um pouco dia a dia).

## Pos 4 (suporte de roaming)

- quando pegar: ela não depende de item pra ganhar troca (Dispose já desacelera, Rebound já atordoa), então sai pra rotacionar e abrir kill a qualquer momento depois do nível 2. Foi a posição mais comum dela nos picks de pro do Atlas, 7 das 11 partidas (fonte: `dota-tier1/data/draft.csv`).
- itens iniciais: tango, branches, ward_observer, ward_sentry, blood_grenade, faerie_fire

### Build

#### Phase Boots (phase_boots)
- porque: fecha distância de gank cedo e o dano bônus corpo a corpo ajuda o combo de auto ataque do Unleash.
- detalhe: +50 de velocidade de movimento, +18 de dano corpo a corpo, +4 de armadura. A ativa (Fase) deixa atravessar unidades por um tempo curto.
- fonte: items.json; api.opendota.com/api/heroes/136/itemPopularity (boots aparece em 81 dos inventários iniciais registrados, phase_boots em 34 dos early game items); dotacoach.gg/pt-BR/heroes/marci/builds/support

#### Magic Wand (magic_wand)
- porque: carga barata de vida e mana pra sobreviver a troca na lane de roam sem gastar regen.
- detalhe: +3 em todos os atributos de forma passiva (não precisa ativar pra isso); a ativa gasta as cargas pra restaurar 15 de vida e 15 de mana por carga armazenada, e ganha carga quando um inimigo visível lança feitiço a até 1200 de distância.
- fonte: items.json; api.opendota.com/api/heroes/136/itemPopularity (magic_stick em 39 dos inventários iniciais)

#### Blink Dagger (blink)
- porque: dá o alcance pra fechar o Dispose em quem já fugiu, ou arrancar o suporte inimigo do meio do grupo antes da luta.
- detalhe: teleporte de curto alcance, sem dano, usado pra posicionar antes do combo.
- combo: Blink perto do alvo → Dispose (puxa e desacelera) → Rebound (dano e stun) → Unleash (sequência de golpes que também desacelera).
- fonte: items.json; dotacoach.gg/pt-BR/heroes/marci/builds/support (listado como item de late game do suporte); api.opendota.com/api/heroes/136/itemPopularity (blink é o item com mais contagem no late game, 32)

#### Aghanim's Shard (aghanims_shard)
- porque: upgrade barato (1.400) que mantém ela relevante sem travar o slot de um item grande.
- detalhe: aparece na fase de meio de jogo da build de suporte da Dota Coach, mas não como "Core Item" (essa categoria ali é só Botas de Fase, BKB e Basher; Shard entra como "Extension item"); não encontrei o texto oficial do efeito nas fontes acessíveis hoje (Liquipedia e a página normal do dota2protracker bloquearam o fetch), então não vou inventar o que ele muda.
- fonte: dotacoach.gg/pt-BR/heroes/marci/builds/support; api.opendota.com/api/heroes/136/itemPopularity (aghanims_shard em 9 dos inventários de mid game)

#### Black King Bar (black_king_bar)
- porque: sem ele, qualquer stun ou silence do inimigo cancela o combo de Dispose e Rebound antes dela terminar.
- detalhe: imunidade a debuff decrescente por uso (9s na primeira vez, caindo até 7s), +10 de força e +24 de dano; comprar outro BKB não reseta a duração.
- contra: não segura dano puro nem físico, e não bloqueia magias específicas como Fiend's Grip (Bane), Reverse Polarity (Magnus), Duel (Legion Commander), Primal Roar (Beastmaster) e Black Hole (Enigma).
- fonte: items.json; liquipedia.net/dota2/Black_King_Bar; dotacoach.gg/en/items/black-king-bar

#### Skull Basher (basher) → Abyssal Blade (abyssal_blade)
- porque: trava o alvo depois do Rebound pra ele não escapar enquanto o Unleash bate.
- detalhe: Basher dá +30 de dano e +10 de força; o upgrade pra Abyssal soma +35 de dano, +26 de força e +30% de resistência a slow. Nenhum bash deste item acumula com outro.
- contra: Spirit Breaker, Faceless Void, Slardar e Kez (no modo Sai) não recebem o bash deste item.
- combo: Rebound atordoa → auto ataque com bash prende de novo → Unleash fecha a sequência sem o alvo sair do lugar.
- fonte: items.json (inclui a nota sobre quais heróis não recebem o bash); api.opendota.com/api/heroes/136/itemPopularity (basher em 26 e abyssal_blade em 13 dos inventários de late game)

### Situacionais

#### Solar Crest (solar_crest)
- contra: time que precisa proteger um carry squishy em troca, ou pra tirar armadura de um tank inimigo bem antes de engajar.
- detalhe: +7 de armadura, +25 de velocidade de movimento, +200 de vida e mana quando usado num aliado (ou o inverso num inimigo); compartilha recarga com Pavise.
- fonte: items.json; api.opendota.com/api/heroes/136/itemPopularity (16 no mid game, 8 no late game)

#### Pavise (pavise)
- contra: lane dura onde o aliado de farm precisa de escudo e vida cedo pra não perder a troca.
- detalhe: +3 de armadura, +175 de vida e mana; escudo que absorve dano por um tempo.
- fonte: items.json; api.opendota.com/api/heroes/136/itemPopularity (23 no mid game, bem mais presente que a maioria dos itens dessa fase)

#### Glimmer Cape (glimmer_cape)
- contra: time inimigo com muito poke mágico ou foco de magia numa troca.
- detalhe: +20% de resistência mágica, mais invisibilidade curta pra escapar ou reposicionar antes do combo.
- fonte: items.json; api.opendota.com/api/heroes/136/itemPopularity (8 no late game)

#### Vladmir's Offering (vladmir)
- contra: lane de roam onde o grupo precisa de sustain extra pra ficar brigando sem voltar na fonte.
- detalhe: aura (1200 de raio) dá 20% de lifesteal e +18 de dano pros aliados perto, mais +2 de armadura e +1 de regeneração de mana aura; pra quem carrega, soma +1 de armadura e +0,75 de regeneração de mana próprios. Lifesteal da aura cai pra 12% contra creep.
- fonte: items.json; api.opendota.com/api/heroes/136/itemPopularity (6 no late game)

#### Aghanim's Scepter (ultimate_scepter)
- contra: jogo que já passou da fase de roam e precisa de mais poder de luta no time todo, não só em Marci.
- detalhe: comprado em parte dos inventários de mid e late game consultados; mesma ressalva do Shard, não achei o texto do efeito nas fontes acessíveis hoje.
- fonte: api.opendota.com/api/heroes/136/itemPopularity (7 no mid game, 5 no late game); dotacoach.gg/pt-BR/heroes/marci/builds/support (listado na fase de meio de jogo da build, não na categoria "Core Item" do site)

## Pos 5 (suporte duro)

- quando pegar: quando o time já tem outro herói de iniciação ou de farm rápido e precisa de alguém perto do carry pra ward, proteger e só então procurar o combo. Foi a posição em 4 das 11 partidas de pro do Atlas (fonte: `dota-tier1/data/draft.csv`), e a Dota Coach mede 16,6% de seleção e 44,6% de vitória nela como suporte duro no 7.41f (fonte: dotacoach.gg/en/heroes/marci).
- itens iniciais: tango, branches, ward_observer, ward_sentry, blood_grenade

### Build

#### Phase Boots (phase_boots)
- porque: mesma lógica da pos4, fecha distância pra entrar na troca puxando um aliado ou um inimigo.
- detalhe: +50 de velocidade de movimento, +18 de dano corpo a corpo, +4 de armadura.
- fonte: items.json; api.opendota.com/api/heroes/136/itemPopularity (boots em 81 dos early game items)

#### Magic Wand (magic_wand)
- porque: sustento barato de vida e mana pra ficar na lane sem gastar regen que o carry precisa mais.
- detalhe: +3 em todos os atributos quando ativado.
- fonte: items.json; api.opendota.com/api/heroes/136/itemPopularity (magic_stick em 39 dos inventários iniciais)

#### Pavise (pavise)
- porque: como pos5 ela compra proteção pro carry antes de qualquer item pessoal de dano.
- detalhe: +3 de armadura, +175 de vida e mana, escudo que absorve dano por um tempo.
- fonte: items.json; api.opendota.com/api/heroes/136/itemPopularity (23 no mid game)

#### Aghanim's Shard (aghanims_shard)
- porque: mesmo custo baixo da pos4, mantém ela útil em luta de grupo sem tirar ouro do carry.
- detalhe: aparece na fase de meio de jogo da build de suporte, mas não é "Core Item" nessa fonte (mesma ressalva da pos4); efeito exato não confirmado nas fontes acessíveis hoje.
- fonte: dotacoach.gg/pt-BR/heroes/marci/builds/support; api.opendota.com/api/heroes/136/itemPopularity (9 no mid game)

#### Blink Dagger (blink)
- porque: entra depois, como pos5 ela só força o combo quando o time já está pronto pra seguir o engajamento.
- detalhe: teleporte de curto alcance pra posicionar antes de Dispose e Rebound.
- combo: mesmo combo da pos4 (Blink → Dispose → Rebound → Unleash), só que puxado pelo time em vez de solo.
- fonte: items.json; api.opendota.com/api/heroes/136/itemPopularity (blink em 32 dos inventários de late game)

#### Black King Bar (black_king_bar)
- porque: protege o combo do mesmo jeito que na pos4, mas aqui costuma sair mais tarde por farmar menos.
- detalhe: imunidade a debuff decrescente por uso (9s caindo até 7s), +10 de força e +24 de dano.
- contra: não bloqueia dano puro, físico, nem magias como Fiend's Grip, Reverse Polarity, Duel, Primal Roar e Black Hole.
- fonte: items.json; liquipedia.net/dota2/Black_King_Bar; dotacoach.gg/en/items/black-king-bar

### Situacionais

#### Solar Crest (solar_crest)
- contra: carry do próprio time que precisa de armadura extra pra sustentar troca, ou pra tirar armadura de quem o carry está batendo.
- detalhe: +7 de armadura, +25 de velocidade de movimento, +200 de vida e mana quando usado num aliado.
- fonte: items.json; api.opendota.com/api/heroes/136/itemPopularity (16 no mid game, 8 no late game)

#### Glimmer Cape (glimmer_cape)
- contra: time inimigo com poke mágico focado no carry que ela está protegendo.
- detalhe: +20% de resistência mágica e invisibilidade curta.
- fonte: items.json; api.opendota.com/api/heroes/136/itemPopularity (8 no late game)

#### Skull Basher (basher) → Abyssal Blade (abyssal_blade)
- contra: alvo que depende de fugir depois do stun do Rebound (iniciador ou carry mobile). Heróis que não recebem o bash: Spirit Breaker, Faceless Void, Slardar e Kez (modo Sai).
- detalhe: Basher +30 de dano e +10 de força; Abyssal soma +35 de dano, +26 de força e +30% de resistência a slow.
- fonte: items.json; api.opendota.com/api/heroes/136/itemPopularity (basher em 26 e abyssal_blade em 13 dos inventários de late game)

#### Vladmir's Offering (vladmir)
- contra: lane em grupo que precisa de sustain extra sem gastar recurso em cura individual.
- detalhe: aura (1200 de raio) dá 20% de lifesteal e +18 de dano pros aliados perto, mais +2 de armadura e +1 de regeneração de mana aura; lifesteal cai pra 12% contra creep.
- fonte: items.json; api.opendota.com/api/heroes/136/itemPopularity (6 no late game)

## Roshan

Sem dado de Roshan solo.
