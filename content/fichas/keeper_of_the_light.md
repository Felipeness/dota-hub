---
id: ficha-keeper_of_the_light
titulo: "Keeper of the Light"
heroi: Keeper of the Light
patch: 7.41
posicoes: [4, 2]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-tier1/data/jogadores_partida.csv
- dota-tier1/data/derivados/compras.parquet
- dota-tier1/data/derivados/objetivos.parquet
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/90/itemPopularity
- https://dota2protracker.com/hero/Keeper+of+the+Light
- https://dota2protracker.com/builds/keeper-of-the-light-pos4-1
- https://dota2protracker.com/m/hero/Keeper%20of%20the%20Light
- https://dotacoach.gg/en/heroes/keeper-of-the-light/builds/support
- https://dotacoach.gg/en/heroes/counters/keeper-of-the-light
- https://dota2.fandom.com/wiki/Keeper_of_the_Light
- https://www.dotabuff.com/heroes/keeper-of-the-light/abilities
---
## Resumo
Keeper of the Light é suporte de poke e zoneamento de longo alcance: no Atlas tier 1 ele foi banido 359 vezes contra só 141 vezes pickado em 895 partidas de pro, quase 3 bans pra cada pick (`draft.csv`). Quando é pickado, vai pra posição 4 em 85% dos jogos (120 de 141, 59,2% de vitória) e pra posição 2 (mid) em 11% (16 de 141, 56,2% de vitória); posição 5 é raro demais pra contar (5 jogos) (`draft.csv`, `jogadores_partida.csv`). O motivo do alcance tão grande vem do kit: Illuminate tem 1800 de alcance de cast e atinge até 500 de dano no canal máximo, Blinding Light cega em área e empurra, e Chakra Magic devolve mana de graça pro time, então ele fica fora do corpo a corpo controlando lane e visão em vez de trocar hit (`constants_abilities.json`). No dota2protracker (patch 7.41f), a build pos4 "Holy Locket Support" tem 55% de vitória em 80 partidas (36 jogadores pro distintos usaram ela); de mid em pub alto (7000+ MMR) o herói tem 50% de vitória geral na rota nas últimas 8 semanas, e a build mais jogada nesse MMR soma 4.014 partidas com 53,3% de vitória.

## Pos 4 (suporte de roaming)
- quando pegar: pega quando o time quer poke de longo alcance sem gastar um slot de iniciação, porque Illuminate alcança 1550 a 1800 de distância e Blinding Light cega e empurra em 500 a 725 de alcance de cast, então KotL zoneia lane e limpa visão sem entrar no corpo a corpo (`constants_abilities.json`). É a posição confirmada majoritária no Atlas tier 1 (120 de 141 pickados, 59,2% de vitória) e a única com build publicada e testada no dota2protracker (80 partidas, 36 jogadores pro distintos, 55% de vitória no 7.41f).
- itens iniciais: tango, ward_sentry, flask, branches

### Build
#### Boots of Speed (boots)
- minuto: 5,0 (mediana, 93,3% dos jogos pos4)
- porque: velocidade de movimento pra reposicionar entre lanes sem perder tempo de farm.
- detalhe: sem bônus além da velocidade (`items.json`, boots); como KotL não ataca de perto, a prioridade é chegar antes na lane que precisa de poke, não atacar mais rápido.
- fonte: compras.parquet (Atlas tier 1, pos4, 120 partidas); items.json (boots)

#### Magic Wand (magic_wand)
- minuto: 8,2 (mediana, 96,7% dos jogos pos4)
- porque: carga rápida de HP/mana contra o harass de nuke da fase de lane.
- detalhe: acumula 1 carga por feitiço inimigo visível em 1200 de raio e devolve HP/mana por carga, até 20 cargas (`items.json`, magic_wand). É praticamente unânime nessa posição porque Illuminate e Blinding Light custam mana alta (100 a 175 e 120 a 150) e o wand enche rápido nas trocas de poke.
- fonte: compras.parquet (Atlas tier 1, pos4); items.json (magic_wand)

#### Holy Locket (holy_locket)
- minuto: 16,5 (mediana, 80,8% dos jogos pos4)
- porque: aumenta a cura recebida pelo time e ainda devolve HP e mana sob demanda.
- detalhe: dá +7 de todos os atributos, +15% de cura passiva recebida pelo portador, e uma ativa que recupera 17 de HP e 15 de mana por carga num raio de 1200, carregando 1 a cada 10s até 25 cargas (`items.json`, holy_locket). Como KotL não tem cura própria no kit base, o Locket é o jeito de ele virar fonte de sustain pro time sem sair da zona de poke.
- fonte: compras.parquet (Atlas tier 1, pos4); items.json (holy_locket); dota2protracker.com/builds/keeper-of-the-light-pos4-1 (65,0% de pick, 63,5% de vitória quando construído, comprado por volta do minuto 16, patch 7.41f)

#### Force Staff (force_staff)
- minuto: 23,4 (mediana, 56,7% dos jogos pos4)
- porque: reposiciona ele mesmo ou um aliado 600 de distância pra escapar ou reengajar.
- detalhe: dá +10 de inteligência, +175 de HP, e empurra a unidade-alvo 600 de distância em 0,5s, com 850 de alcance de cast em inimigos (`items.json`, force_staff). Como nenhuma magia do KotL dá mobilidade própria além da passiva de velocidade (Bright Speed), o Force Staff é a única forma dele sair de uma iniciação ruim.
- combo: Blinding Light empurra o grupo inimigo pra fora de alcance (175 de knockback em 0,6s) e logo depois o Force Staff reaproxima um aliado-chave ou puxa KotL pra fora antes do inimigo recuperar posição (`constants_abilities.json`, keeper_of_the_light_blinding_light; items.json, force_staff).
- fonte: compras.parquet (Atlas tier 1, pos4); items.json (force_staff); constants_abilities.json (keeper_of_the_light_blinding_light)

#### Glimmer Cape (glimmer_cape)
- minuto: 23,2 (mediana, 35,8% dos jogos pos4)
- porque: invisibilidade de 5s e resistência mágica tiram o KotL (ou o aliado) de foco numa troca.
- detalhe: dá +20% de resistência mágica, bloqueia até 375 de dano e esconde o alvo por 5s com +20 de velocidade de movimento (`items.json`, glimmer_cape). Salva o próprio KotL, que é feito de papel (120 de vida base), ou o aliado que está sendo focado enquanto ele ainda está canalizando Illuminate.
- fonte: compras.parquet (Atlas tier 1, pos4); items.json (glimmer_cape)

#### Aghanim's Shard (aghanims_shard)
- minuto: 29,3 (mediana, 35,8% dos jogos pos4)
- porque: item de maior frequência de compra nessa posição depois do core básico, sinal de upgrade padrão no pro play; destrava Recall, um teleporte de aliado que dá mobilidade de time sem gastar um slot de iniciação.
- detalhe: Recall (`keeper_of_the_light_recall`) teleporta o aliado-alvo até o KotL depois de um delay, é interrompido se o aliado tomar dano de jogador nesse meio tempo, e dá uma Chakra Magic de brinde pro aliado quando o teleporte termina (alt-cast teleporta o próprio KotL até o aliado) (`constants_abilities.json`, keeper_of_the_light_recall). A ficha do herói no Dota 2 Wiki confirma que essa magia é destravada pelo Aghanim's Shard (dota2.fandom.com/wiki/Keeper_of_the_Light, `ability7 = Recall;shard`, "Requires Aghanim's Shard to be unlocked").
- fonte: constants_abilities.json (keeper_of_the_light_recall); items.json (aghanims_shard); dota2.fandom.com/wiki/Keeper_of_the_Light; compras.parquet (Atlas tier 1, pos4)

### Situacionais
#### Scythe of Vyse (sheepstick)
- porque: trava um herói-chave por 2,8s quando Solar Bind (só slow) não é suficiente pra garantir o kill.
- detalhe: dá +30 de inteligência, +8,5 de regen de mana, e transforma o alvo numa ovelha por 2,8s, com 140 de velocidade de movimento fixa durante o efeito (`items.json`, sheepstick).
- contra: Weaver e Anti-Mage, que aparecem no "bad against" do KotL por serem difíceis de controlar: Weaver ignora Will-o-Wisp com Shukuchi/Time Lapse, e Anti-Mage fecha a distância com blink antes de qualquer magia pegar (dotacoach.gg/en/heroes/counters/keeper-of-the-light); o Hex garante o controle que falta nos dois casos.
- fonte: items.json (sheepstick); dotacoach.gg/en/heroes/counters/keeper-of-the-light

#### Aghanim's Scepter (ultimate_scepter)
- porque: dá +10 de todos os atributos e destrava Will-O-Wisp, a quinta magia do KotL que só pode ser lançada com o Scepter equipado.
- detalhe: +10 de todos os atributos, +175 de HP e mana (`items.json`, ultimate_scepter); Will-O-Wisp (`keeper_of_the_light_will_o_wisp`) solta um Ignis Fatuus numa área de 725 de raio que pulsa 7 vezes, puxando (sem travar) todo inimigo que estiver no raio pra dentro e causando 85 de dano mágico por pulso, por 150 de mana e 60s de cooldown (`constants_abilities.json`, keeper_of_the_light_will_o_wisp). O Dota 2 Wiki confirma que essa magia exige o Scepter pra ser usada (dota2.fandom.com/wiki/Keeper_of_the_Light, `ability5 = Will-O-Wisp;aghs`); o dotacoach.gg chama o Scepter de item core "pra melhorar muito o controle em área e o dano em teamfight com Will-O-Wisp" (dotacoach.gg/en/heroes/counters/keeper-of-the-light, seção "core items").
- combo: a puxada contínua do Will-O-Wisp agrupa o time inimigo numa área fixa por vários segundos, o que deixa o canal de Illuminate (alcance 1550, até 500 de dano no máximo) acertando o grupo inteiro em vez de um alvo só.
- contra: Wraith King, Broodmother, Gyrocopter, Morphling e Death Prophet, citados pelo dotacoach.gg na seção "Good against" especificamente por Will-O-Wisp conseguir prender ou desorganizar eles em teamfight; já Weaver e Mirana aparecem no "Bad against" do mesmo dotacoach justamente porque escapam da puxada do Will-O-Wisp com mobilidade (Shukuchi, blink/dash), então o Scepter não resolve esses dois matchups.
- fonte: items.json (ultimate_scepter); constants_abilities.json (keeper_of_the_light_will_o_wisp); dota2.fandom.com/wiki/Keeper_of_the_Light; dotacoach.gg/en/heroes/counters/keeper-of-the-light (seções "core items", "Good against" e "Bad against")

#### Eul's Scepter of Divinity (cyclone)
- porque: janela de 2,5s de imunidade a ataques físicos e a skillshots pra sobreviver a um burst de iniciação.
- detalhe: dá +10 de inteligência e +2,5 de regen de mana, e ciclona o alvo por 2,5s (`items.json`, cyclone). Usado em si mesmo, tira KotL do ar durante o delay de Burrowstrike do Sand King ou do pulo do Slardar, dois dos piores matchups listados pra ele.
- contra: Sand King e Slardar, porque ambos aparecem no "bad against" por conseguirem surpreender ou travar o KotL antes dele reagir (Burrowstrike seguido de Epicenter; stun com blink); o Eul's dá o tempo de reagir ou escapar depois.
- fonte: items.json (cyclone); dotacoach.gg/en/heroes/counters/keeper-of-the-light

#### Ghost Scepter (ghost)
- porque: imunidade a dano físico pra sobreviver ao burst de um carry físico fechando em cima do suporte.
- detalhe: deixa etéreo por 4s, imune a ataques físicos, mas aumenta 30% o dano mágico recebido nesse período (`items.json`, ghost). É pânico barato (1.500 de ouro) pra um herói sem fuga própria fora do Force Staff.
- contra: Chaos Knight, Slardar, Anti-Mage e Phantom Lancer, carries/iniciadores físicos que aparecem no "bad against" do KotL (dotacoach.gg/en/heroes/counters/keeper-of-the-light); o Ghost Scepter zera esse dano por 4s.
- fonte: items.json (ghost); dotacoach.gg/en/heroes/counters/keeper-of-the-light

#### Lotus Orb (lotus_orb)
- porque: reflete de volta uma magia direcionada, incluindo o Mana Burn que mais machuca o KotL.
- detalhe: dá +10 de armadura, +250 de mana e regen de vida/mana (`items.json`, lotus_orb); a reflexão de magia é o mecanismo padrão do item.
- contra: Nyx Assassin, citado no "bad against" do KotL porque o Mana Burn dele causa muito dano em cima da reserva de mana alta do KotL, escalando com a inteligência (dotacoach.gg/en/heroes/counters/keeper-of-the-light); refletir o Mana Burn de volta no Nyx vira o dano contra quem lançou.
- fonte: items.json (lotus_orb); dotacoach.gg/en/heroes/counters/keeper-of-the-light

#### Aeon Disk (aeon_disk)
- porque: garante um escudo de sobrevivência contra burst de magia puro, sem precisar reagir a tempo.
- detalhe: dá bônus de atributos e HP, com um buff automático ao cair abaixo de um limiar de vida que bloqueia a próxima rodada de dano e debuff (`items.json`, aeon_disk).
- contra: situações de burst mágico concentrado (a própria dotacoach.gg cita Aeon Disk como resposta a "burst de magias e Dagon" contra o KotL, o mesmo raciocínio se aplica a ele carregando o item pra sobreviver a combos de nuke em sequência).
- fonte: items.json (aeon_disk); dotacoach.gg/en/heroes/counters/keeper-of-the-light

## Pos 2 (mid)
- quando pegar: pega quando o time quer o mesmo poke de longo alcance, só que puxando o farm e o XP da lane do meio pra acelerar os itens de cooldown (Octarine Core). É posição real mas pouco usada no Atlas tier 1 (16 de 141 pickados, 11%, 56,2% de vitória); o dota2protracker mostra uma amostra bem maior em pub alto (7000+ MMR), com 50% de vitória geral na rota nas últimas 8 semanas e a build mais jogada somando 4.014 partidas com 53,3% de vitória, mas sem build própria detalhada por item publicada pra esse MMR, então os itens abaixo vêm só dos replays de pro do Atlas.
- itens iniciais: tango, magic_stick, ring_of_protection

### Build
#### Boots of Speed (boots)
- minuto: 2,3 (mediana, 100% dos jogos pos2)
- porque: sai mais rápido que no pos4 porque o farm de mid sustenta a compra cedo.
- detalhe: sem bônus além da velocidade (`items.json`, boots).
- fonte: compras.parquet (Atlas tier 1, pos2, 16 partidas); items.json (boots)

#### Urn of Shadows (urn_of_shadows)
- minuto: 5,0 (mediana, 93,8% dos jogos pos2)
- porque: regen de mana e dano ao longo do tempo pra fechar kill na lane do meio.
- detalhe: dá +2 de todos os atributos, +2 de armadura, +1,25 de regen de mana, e aplica uma alma que causa 25 de dano ou cura 30 de HP por tick em 8s depois de um kill ou assist (`items.json`, urn_of_shadows). É o item que sustenta a mana de Illuminate na troca de lane sem depender do Chakra Magic.
- fonte: compras.parquet (Atlas tier 1, pos2); items.json (urn_of_shadows)

#### Diadem (diadem)
- minuto: 8,0 (mediana, 81,2% dos jogos pos2)
- porque: +6 de todos os atributos por 1.000 de ouro, puro ganho de stat barato pro meio de lane.
- detalhe: sem outro bônus listado alem dos atributos (`items.json`, diadem). No Atlas tier 1 ele aparece como item final, não como componente de Manta Style (nenhuma compra de Manta ou Yasha foi registrada pro KotL nesse dataset).
- fonte: compras.parquet (Atlas tier 1, pos2 e pos4); items.json (diadem)

#### Spirit Vessel (spirit_vessel)
- minuto: 10,1 (mediana, 81,2% dos jogos pos2)
- porque: upgrade do Urn que reduz 70% da regeneração do inimigo marcado, bom contra lane de sustain pesado.
- detalhe: dá +10 de todos os atributos, +2 de armadura, mantém a alma de dano/cura do Urn, e adiciona 70% de redução de recuperação e dreno de HP no alvo marcado por 8s (`items.json`, spirit_vessel).
- contra: heróis de lane com cura ou regen alto que o KotL não consegue vencer só com dano mágico de Illuminate; o dreno de 70% neutraliza esse sustain na troca de lane.
- fonte: compras.parquet (Atlas tier 1, pos2); items.json (spirit_vessel)

#### Boots of Travel (travel_boots)
- minuto: 14,0 (mediana, 93,8% dos jogos pos2)
- porque: mobilidade de mapa pra puxar farm de jungle e ainda chegar nas lutas, já que KotL de mid sofre com a falta de dash própria.
- detalhe: teleporte global de longo alcance (`items.json`, travel_boots); typical pra mid que farma rápido e precisa aparecer em várias rotas.
- fonte: compras.parquet (Atlas tier 1, pos2)

#### Octarine Core (octarine_core)
- minuto: 27,6 (mediana, 87,5% dos jogos pos2)
- porque: 25% de redução de cooldown baixa o ciclo de Illuminate e Solar Bind, deixando o poke quase constante.
- detalhe: dá +25% de redução de cooldown, +450 de HP, +450 de mana e +6 de regen de mana (`items.json`, octarine_core).
- combo: Illuminate tem 13s de cooldown base (`constants_abilities.json`); com 25% de redução o ciclo cai pra cerca de 9,75s, então em troca de creep wave contínua o KotL solta o nuke quase toda vez que a wave chega, sem esperar o cooldown cheio.
- fonte: compras.parquet (Atlas tier 1, pos2); items.json (octarine_core); constants_abilities.json (keeper_of_the_light_illuminate)

### Situacionais
#### Black King Bar (black_king_bar)
- porque: imunidade a debuff pra sobreviver ao combo de stun que o mid sofre antes de conseguir reagir.
- detalhe: dá +10 de força, +24 de dano, e 7 a 9s de imunidade a magia com 60% de redução de dano mágico, dependendo do nível (`items.json`, black_king_bar).
- contra: Sand King, Chaos Knight e Earth Spirit, listados no "bad against" do KotL por conseguirem travar e explodir ele antes de qualquer reação (Burrowstrike+Epicenter, Chaos Bolt+Phantasm, silence+burst) (dotacoach.gg/en/heroes/counters/keeper-of-the-light).
- fonte: items.json (black_king_bar); dotacoach.gg/en/heroes/counters/keeper-of-the-light

#### Scythe of Vyse (sheepstick)
- porque: mesma lógica do pos4, trava o alvo que o Solar Bind sozinho não segura.
- detalhe: +30 de inteligência, +8,5 de regen de mana, hex de 2,8s (`items.json`, sheepstick).
- contra: Weaver e Anti-Mage, que aparecem no "bad against" do KotL por serem difíceis de controlar: Weaver ignora Will-o-Wisp com Shukuchi/Time Lapse, e Anti-Mage fecha a distância com blink antes de qualquer magia pegar (dotacoach.gg/en/heroes/counters/keeper-of-the-light).
- fonte: items.json (sheepstick); dotacoach.gg/en/heroes/counters/keeper-of-the-light

#### Orchid Malevolence (orchid)
- porque: silencia e amplifica dano num alvo mobile antes dele usar a fuga.
- detalhe: dá +35% de velocidade de ataque, +20 de dano, +12 de inteligência, e silencia o alvo por 5s com 30% de dano amplificado (`items.json`, orchid).
- contra: Mirana, citada no "bad against" por evitar Will-o-Wisp e Blinding Light com a mobilidade alta, e Weaver, que ignora Will-o-Wisp com Shukuchi (dotacoach.gg/en/heroes/counters/keeper-of-the-light); o silêncio de 5s não dá chance de usar a fuga antes do combo.
- fonte: items.json (orchid); dotacoach.gg/en/heroes/counters/keeper-of-the-light

## Roshan
Sem dado de Roshan solo: KotL não aparece em nenhum dos resumos curados de kill solo (`resumo_por_heroi.json`, `resumo_com_suporte.json`), o que faz sentido pra um suporte de 120 de vida base sem dano físico sustentado. Com o time, ele aparece como o herói creditado no kill em 8 dos 1.988 kills de Roshan registrados no dataset de pro (`objetivos.parquet`; o dado identifica quem fica com o kill, não especificamente quem pega o item aegis), em minutos 22,4 / 26,8 / 27,0 / 27,3 / 28,0 / 34,8 / 52,6 / 60,5 (mediana 27,65 min), ou seja, em kills de time no começo/meio de jogo, não solo.
