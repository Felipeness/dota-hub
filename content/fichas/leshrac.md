---
id: ficha-leshrac
titulo: "Leshrac"
heroi: Leshrac
patch: 7.41
posicoes: [2, 4]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/jogadores_partida.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet
- C:/Users/felip/Desktop/dota-tier1/data/derivados/jogadores_replay.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- https://api.opendota.com/api/heroes/52/itemPopularity
- https://dota2protracker.com/hero/legacy/Leshrac
- https://dota2protracker.com/hero/Leshrac
- https://dotacoach.gg/heroes/leshrac/builds/mid
- https://dotacoach.gg/heroes/leshrac/builds
---

## Resumo

Leshrac é um int de dano mágico puro: Lightning Storm é barato e recarrega em 4s pra farmar e trocar na lane, Split Earth atordoa em área, e Diabolic Edict explode em dano Puro que ignora Black King Bar e magia (fonte: constants_abilities.json). O ultimate Pulse Nova dreia a própria mana pra queimar área ao redor, e o passivo Defilement aumenta o raio dos feitiços com o Int acumulado, então ele fica mais forte sozinho conforme farma (constants_abilities.json). No Tier 1 analisado ele é quase só mid: 15 das 21 vezes que foi picado (71%, 60% de vitória), com um roam de suporte (pos 4) nas outras 5 (24%, também 60% de vitória); o único pick de pos 1 (1 jogo, derrota) é amostra demais pequena pra virar build (fonte: draft.csv). No D2PT (patch 7.41f, MMR 7000-8500, últimos 8 dias, conferido em 08/10/2026) ele tem 1.687 partidas e 51% de vitória no geral; olhando só por posição, pos 2 carrega quase tudo isso (1.229 partidas, 50% de vitória) e pos 4 é amostra pequena de pub (59 partidas, 31%). Esse número é uma foto do momento, a janela de 8 dias muda a cada visita ao site (fonte: dota2protracker.com/hero/Leshrac). Ele não tem fuga além do Blink: depende de iniciar bem e sair vivo depois do combo.

## Pos 2 (mid)

- quando pegar: é o pick dominante da posição no recorte Tier 1 (15/21 picks do herói, 60% de vitória); funciona como farmador de lane solo que troca com Lightning Storm sem gastar vida e fecha kills com o combo Split Earth + Edict (fonte: draft.csv; jogadores_partida.csv).
- itens iniciais: bottle (15/15 dos jogos de pos 2) e magic stick (12/15); tango e ward observer aparecem em parte dos jogos (fonte: compras.parquet, compras até 2:30 de jogo)

### Build

#### Ring of Basilius (ring_of_basilius)
- minuto: 5:29
- porque: aura de regen de mana pra sustentar Lightning Storm na troca de lane sem secar.
- detalhe: comprado em 14 dos 15 jogos de pos 2 analisados (93%), sempre antes das Arcane Boots.
- fonte: compras.parquet (14/15 = 93%, mediana 5:29)

#### Arcane Boots (arcane_boots)
- minuto: 7:02
- porque: reserva de mana extra pra continuar spamando Lightning Storm sem recall.
- fonte: compras.parquet (14/15 = 93%, mediana 7:02)

#### Blink Dagger (blink)
- minuto: 12:04
- porque: único jeito de fechar distância pro Split Earth; sem ele Leshrac não inicia nada.
- combo: Blink pro meio do grupo, Split Earth (atordoa em raio 150-210), Diabolic Edict (raio 450, ignora BKB) e Pulse Nova fecham o combo padrão de luta.
- fonte: compras.parquet (12/15 = 80%, mediana 12:04); constants_abilities.json (leshrac_split_earth radius, leshrac_diabolic_edict radius/bkbpierce)

#### Kaya (kaya)
- minuto: 15:44
- porque: +10% de amplificação mágica e +30% de regen de mana convertem farm direto em mais dano de feitiço.
- detalhe: comprado em 100% dos 15 jogos de pos 2, sempre o 1º item "grande" depois das botas.
- fonte: compras.parquet (15/15 = 100%, mediana 15:44); items.json (kaya: spell_amp 10, mana_regen_multiplier 30)

#### Veil of Discord (veil_of_discord)
- minuto: 22:31
- porque: ativa um estouro de raio 900 que faz quem for pego levar 10% mais dano de feitiço por 16s, isso amplia a queima do time todo, não só a dele.
- fonte: compras.parquet (13/15 = 87%, mediana 22:31); items.json (veil_of_discord: debuff_radius 900, spell_amp 10, ability "Spell Weakness" +10% dano de feitiço por 16s)

#### Black King Bar (black_king_bar)
- minuto: 24:37
- porque: 60% de redução de dano mágico e imunidade garantem o tempo parado pra terminar o combo.
- contra: travas em cadeia e nuke de burst de alvo único que cortariam o combo antes de sair (stuns longos, hex).
- fonte: compras.parquet (11/15 = 73%, mediana 24:37); items.json (black_king_bar: spell_reduce 60, duration 9/8/7)

#### Bloodstone (bloodstone)
- minuto: 25:57
- porque: 650 de vida e 450 de mana a mais, com roubo de vida por feitiço, seguram ele vivo canalizando Pulse Nova.
- detalhe: monta sobre Veil of Discord + Soul Booster; a aura de vulnerabilidade mágica do Bloodstone não acumula com a do próprio Veil.
- fonte: compras.parquet (13/15 = 87%, mediana 25:57); items.json (bloodstone: componentes veil_of_discord+soul_booster, bonus_health 650, spell_lifesteal 20)

#### Yasha and Kaya (yasha_and_kaya)
- minuto: 28:39
- porque: velocidade de ataque e deslocamento pra perseguir depois do burst, sem perder a amplificação mágica do Kaya.
- fonte: compras.parquet (9/15 = 60%, mediana 28:39); items.json (yasha_and_kaya: spell_amp 12, bonus_attack_speed 20)

### Situacionais

#### Shiva's Guard (shivas_guard)
- minuto: 33:15
- contra: times de ataque rápido (a aura tira 45 de velocidade de ataque em raio 1200) e grupos de ilusão/creep que o estouro de 260 de dano em raio 825 limpa de uma vez.
- fonte: compras.parquet (5/15 = 33%, mediana 33:15); items.json (shivas_guard: bonus_armor 17, aura_attack_speed -45, blast_damage 260, blast_radius 825)

#### Scythe of Vyse (sheepstick)
- minuto: 37:02
- porque: +30 de Intelecto amplia o próprio Defilement, e o Hex de 2,8s garante o pick que o atordoamento curto do Split Earth sozinho não garante.
- contra: um alvo prioritário com fuga própria (blink, dash) que o atordoamento curto (1,7s) do Split Earth não prende sozinho; o hex de 2,8s tira esse alvo da luta por completo.
- fonte: compras.parquet (4/15 = 27%, mediana 37:02); items.json (sheepstick: bonus_intellect 30, sheep_duration 2.8); constants_abilities.json (leshrac_split_earth duration 1.7)

#### Consecrated Wraps (consecrated_wraps)
- minuto: 16:55
- contra: lane de poke/harass pesado, quando Leshrac precisa da barreira (até 360 de escudo) e da resistência mágica pra sobreviver até o Kaya terminar.
- fonte: compras.parquet (3/15 = 20%, mediana 16:55); items.json (consecrated_wraps: barrier_per_stack 120, max_barrier_tooltip 360, bonus_spell_resist 15)

## Pos 4 (suporte de roaming)

- quando pegar: é a 2ª posição mais picada do herói no Tier 1 analisado (5/21 picks, 24%, 60% de vitória); o kit de wards pesadas e Blood Grenade na saída, mais Blink e Rod of Atos no meio de jogo, mostra um roam de garantir pick-off pro time, não um farmador de item (fonte: draft.csv; jogadores_partida.csv; compras.parquet).
- itens iniciais: amostra pequena (5 jogos) e varia bastante; os mais vistos são ward sentry e blood grenade, com tango e clarity aparecendo em parte dos jogos (fonte: compras.parquet, compras até 2:30 de jogo)

### Build

#### Ring of Basilius (ring_of_basilius)
- minuto: 8:09
- porque: aura de mana pra sustentar o roam trocando feitiço sem secar entre uma rotação e outra.
- fonte: compras.parquet (3/5 = 60%, mediana 8:09)

#### Blink Dagger (blink)
- minuto: 22:38
- porque: sem iniciação própria a distância, o Blink é o único jeito de abrir o Split Earth em cima de quem o time quer focar.
- fonte: compras.parquet (5/5 = 100%, mediana 22:38)

#### Rod of Atos (rod_of_atos)
- minuto: 18:17
- porque: raiz de 2s sem precisar acertar o Split Earth primeiro, trava quem tenta correr do combo.
- combo: Rod of Atos (raiz 2s) sobreposto ao Split Earth estica o controle pra garantir Diabolic Edict e Pulse Nova completos num alvo móvel.
- fonte: compras.parquet (3/5 = 60%, mediana 18:17); items.json (rod_of_atos: duration 2.0)

#### Kaya (kaya)
- minuto: 21:11
- porque: amplificação mágica e regen de mana continuam valendo pra um pos 4 que vive de feitiço, não de ataque.
- fonte: compras.parquet (3/5 = 60%, mediana 21:11); items.json (kaya: spell_amp 10)

#### Veil of Discord (veil_of_discord)
- minuto: 25:19
- porque: mesma lógica do pos 2, amplifica o burst de todo o time que chegar na luta junto.
- fonte: compras.parquet (3/5 = 60%, mediana 25:19)

### Situacionais

#### Shiva's Guard (shivas_guard)
- minuto: 32:25
- contra: times de ataque rápido, pela mesma aura de -45 de velocidade de ataque; nesse slot serve mais pra proteger o time do que pra ele carregar dano.
- fonte: compras.parquet (2/5 = 40%, mediana 32:25); items.json (shivas_guard: bonus_armor 17, aura_attack_speed -45)

## Roshan

Sem abate solo registrado: o dataset de replays de Roshan solo (dota-roshan-solo) não tem nenhum kill solo do Leshrac. Em equipe ele aparece em 16 partidas pro do dataset, sempre com 2 a 4 aliados dentro do fosso (nunca sozinho), entre os minutos 13:10 e 62:51 (mediana 25:50). Nelas ele costuma ser quem mais contribui de dano dentro do grupo (fração mediana de 42% do dano total ao Roshan, variando de 29% a 59%) e chega a dar o golpe final em 4 das 16 vezes (25%); nas outras 12 o abate é creditado a um aliado mesmo com Leshrac puxando a maior parte do dano. Isso bate com o papel que o build mostra: ele entra na luta com Blink e empurra dano em área (Edict/Pulse Nova), mas não é um finalizador solo de Roshan.

Fonte: C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
