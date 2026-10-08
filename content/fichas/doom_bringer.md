---
id: ficha-doom_bringer
titulo: "Doom"
heroi: Doom
patch: 7.41
posicoes: [3, 1]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-tier1/data/derivados/compras.parquet
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/69/itemPopularity
---

## Resumo

Doom é um iniciador e disabler de Força: a ultimate do mesmo nome dispela o alvo, bloqueia magia e cura por até 16s e aplica dano puro contínuo, atravessando até Black King Bar (dmg_type Pure, bkbpierce sim). Attacks ainda carregam a passiva innata "Lvl ? Pain", que marca o herói atingido e estoura dano em área 2,5s depois. No patch 7.41 ele é quase só offlane no Tier 1 analisado: das 171 vezes que foi picado, 145 foram pos 3 (85%, 57,2% de vitória), contra 23 no pos 1 (13%, 47,8% de vitória) e só 1 isolado no pos 2, amostra pequena demais pra virar build (fonte: draft.csv, coluna posicao_replay). Ele também é um dos heróis mais banidos do recorte, 364 bans nas mesmas partidas, o que mostra o quanto o time adversário teme abrir o draft pra ele.

## Pos 3 (offlane)

- quando pegar: é o pick de offlane dominante do herói no Tier 1 analisado, 145/171 picks e 57,2% de vitória (83/145); o kit de Devour (rouba habilidade de creep) + Scorched Earth (regen e velocidade em área 666) sustenta a troca de lane sem precisar de apoio pesado. (fonte: draft.csv)
- itens iniciais: tango, circlet, gauntlets (pra Bracer)

### Build

#### Magic Wand (magic_wand)
- minuto: 6:40 (mediana, 115 de 145 jogos)
- porque: cargas baratas de vida e mana pra sustentar a troca de lane sem gastar Scorched Earth toda hora.
- detalhe: monta de Magic Stick (10 cargas, raio de recarga 1200) mais 2 Branches; é o 2º item mais comum da fase early do herói depois das botas.
- fonte: compras.parquet (115/145, mediana 6:40)

#### Phase Boots (phase_boots)
- minuto: 7:22 (mediana, 142 de 145 jogos)
- porque: atravessa unidades por 3s pra fechar os 400 de alcance da curse Doom e os 200 do Infernal Blade.
- detalhe: dá 20% de velocidade extra em heróis corpo a corpo (Doom é melee) durante a fase, além de dano fixo de ataque; item quase universal na posição (98%).
- fonte: compras.parquet (142/145, mediana 7:22); items.json (phase_boots: phase_movement_speed 20% melee, duration 3s)

#### Drum of Endurance (ancient_janggo)
- minuto: 11:23 (mediana, 96 de 145 jogos)
- porque: aura de velocidade e regen (raio 1200) segura rotação e troca de lane enquanto o combo ainda não tem Blink.
- detalhe: o ativo dá +35 de velocidade de ataque e +13% de movimento por 6s pro grupo, e a passiva soma +15 de movimento e 2,5 de regen de vida constantes; monta de Headdress + Belt of Strength + Wind Lace.
- fonte: compras.parquet (96/145, mediana 11:23); items.json (ancient_janggo: aura_movement_speed 15, bonus_attack_speed_pct 35, radius 1200)

#### Blink Dagger (blink)
- minuto: 19:50 (mediana, 141 de 145 jogos)
- porque: fecha 1200 de distância em 1 cast pra plantar a curse Doom antes do time inimigo se espalhar.
- detalhe: não pode ser usado nos 3s depois de levar dano de herói inimigo ou Roshan, então Doom precisa iniciar sem ter sido tocado antes.
- combo: Blink (1200 de alcance) seguido de Doom (alcance de cast 400) fecha o combo inteiro num só movimento; a curse (dmg_type Pure, bkbpierce sim) conecta mesmo que o alvo já tenha ativado o próprio BKB.
- fonte: compras.parquet (141/145, mediana 19:50); items.json (blink: blink_range 1200); constants_abilities.json (doom_bringer_doom: abilitycastrange 400, dmg_type Pure, bkbpierce Yes)

#### Black King Bar (black_king_bar)
- minuto: 23:27 (mediana, 136 de 145 jogos)
- porque: segura o stun/silence de alvo único que cortaria o combo antes de Doom fechar com Infernal Blade e a curse.
- detalhe: dispel básico ao ativar, 60% de resistência mágica e imunidade a dano refletido e puro por 9s (cai pra 8s e 7s nos usos seguintes); como a própria ultimate de Doom é dano puro e atravessa BKB, o inimigo que tenta se proteger do combo com BKB próprio não bloqueia a curse.
- fonte: compras.parquet (136/145, mediana 23:27); items.json (black_king_bar: spell_reduce 60, duration 9/8/7)

#### Shiva's Guard (shivas_guard)
- minuto: 31:21 (mediana, 109 de 145 jogos)
- porque: reduz 45 de velocidade de ataque em raio 1200 e ainda estoura 260 de dano em área 825 na iniciação.
- detalhe: monta de Platemail + Splintmail + Chasm Stone; a onda (Arctic Blast) segue o próprio Doom e se expande a 400 de velocidade até o raio máximo.
- contra: carries e offlaners de ataque automático (ex. Phantom Assassin, Troll Warlord) que perdem velocidade de ataque pra aura, e grupos que se aproximam juntos e tomam o estouro de área.
- combo: Scorched Earth (regen e velocidade em área, raio 666) mais o slow de 40% por 4s do Arctic Blast travam o alvo perto o suficiente pro autocast do Infernal Blade (stun de 0,66s) emendar.
- fonte: compras.parquet (109/145, mediana 31:21); items.json (shivas_guard: blast_damage 260, blast_radius 825, aura_attack_speed -45, aura_radius 1200)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 38:44 (mediana, 68 de 145 jogos)
- porque: só dá o bônus genérico do item (atributos e vida/mana), já que Doom não tem upgrade próprio de Scepter nesse patch.
- detalhe: +10 em todos os atributos, +175 de vida e +175 de mana; não existe nenhuma habilidade com prefixo doom_bringer ligada a Scepter nos dados locais, e o atributo "scepter_aura_radius" da própria ultimate vem zerado, então o efeito é só estatístico.
- fonte: items.json (ultimate_scepter: bonus_all_stats 10, bonus_health 175, bonus_mana 175); constants_hero_abilities.json (lista de abilities do doom_bringer sem entrada de scepter); constants_abilities.json (doom_bringer_doom: scepter_aura_radius 0); compras.parquet (68/145, mediana 38:44)

### Situacionais

#### Soul Ring (soul_ring)
- porque: mana barata sem flask ou recall, pra manter Devour, Scorched Earth e Infernal Blade ligados em lane dura.
- minuto: 10:33 (mediana, 76 de 145 jogos)
- contra: jogos sem flask/regen suficiente pra manter Devour, Scorched Earth e Infernal Blade ligados sem secar a mana.
- detalhe: ativo consome vida pra gerar 170 de mana por 10s; se não usar a mana a tempo ela se perde.
- fonte: compras.parquet (76/145 = 52%); items.json (soul_ring: mana_gain 170, duration 10)

#### Octarine Core (octarine_core)
- porque: menos recarga bota a curse de volta mais rápido pra travar o próximo iniciador em jogos longos.
- minuto: 34:34 (mediana, 31 de 145 jogos)
- contra: jogos longos (35min+) com vários iniciadores inimigos, quando os 120/130/140s de recarga da ultimate de Doom (e os 35-41s do Scorched Earth) precisam reciclar mais rápido.
- fonte: compras.parquet (31/145 = 21%); items.json (octarine_core: bonus_cooldown 25%); constants_abilities.json (doom_bringer_doom: cd 140/130/120)

#### Overwhelming Blink (overwhelming_blink)
- porque: o estouro de dano em área ao redor do blink pune grupos agrupados que o blink comum não alcança.
- minuto: 40:30 (mediana, 35 de 145 jogos)
- contra: grupos de alvos frágeis agrupados numa última linha, quando só o blink comum não entrega dano.
- detalhe: upgrade do Blink (monta de blink + reaver); depois do teleporte, estoura 100 + 50% da força em raio 800, mais 100% do mesmo dano ao longo do tempo, com 50% de lentidão de movimento e ataque por 6s.
- fonte: compras.parquet (35/145 = 24%); items.json (overwhelming_blink: damage_base 100, radius 800, movement_slow 50%)

## Pos 1 (carry)

- quando pegar: posição secundária dele no Tier 1 analisado, 23/171 picks (13%) e 47,8% de vitória (11/23), amostra pequena mas real (não é 1 jogo isolado como o pos 2); o mesmo Phase Boots sai em 100% desses jogos, então a lane é tratada do mesmo jeito que o offlane, só com prioridade de farm maior depois. (fonte: draft.csv)
- itens iniciais: tango, circlet, gauntlets (pra Bracer)

### Build

#### Phase Boots (phase_boots)
- minuto: 6:47 (mediana, 23 de 23 jogos)
- porque: mesmo motivo do offlane, atravessa unidade pra fechar os 400 de alcance da curse Doom.
- detalhe: universal na amostra (23/23); monta de Boots + Chainmail + Blades of Attack.
- fonte: compras.parquet (23/23, mediana 6:47)

#### Magic Wand (magic_wand)
- minuto: 6:57 (mediana, 14 de 23 jogos)
- porque: cargas baratas de vida e mana no 1v1 de farm antes do Hand of Midas render.
- fonte: compras.parquet (14/23 = 61%, mediana 6:57)

#### Hand of Midas (hand_of_midas)
- minuto: 12:13 (mediana, 13 de 23 jogos)
- porque: converte o farm de pos 1 em ouro extra mais rápido, sem precisar que Devour esteja sempre disponível (recarga de 66s).
- detalhe: o ativo mata um creep neutro por 160 de ouro não confiável (não conta como bounty normal) e dá velocidade de ataque; monta de Gloves of Haste.
- fonte: compras.parquet (13/23 = 57%, mediana 12:13); items.json (hand_of_midas: bonus_gold 160)

#### Radiance (radiance)
- minuto: 17:36 (mediana, 15 de 23 jogos)
- porque: dano em área contínuo (60/s, raio 650) acelera o farm de jungle sem precisar atacar e ainda cobra pedágio em qualquer luta.
- detalhe: monta de Sacred Relic + Talisman of Evasion; o burn ativa mesmo sem Doom encostar no inimigo, então ele continua farmando enquanto a aura trabalha.
- fonte: compras.parquet (15/23 = 65%, mediana 17:36); items.json (radiance: aura_damage 60, aura_radius 650)

#### Black King Bar (black_king_bar)
- minuto: 23:34 (mediana, 19 de 23 jogos)
- porque: mesmo papel do offlane, segura o disable que cortaria o combo antes de Doom plantar a curse.
- detalhe: 9s de imunidade mágica e dano refletido/puro no primeiro uso (cai pra 8s, 7s depois); a curse de Doom (Pure, bkbpierce sim) ainda atravessa o BKB do alvo.
- fonte: compras.parquet (19/23 = 83%, mediana 23:34); constants_abilities.json (doom_bringer_doom: bkbpierce Yes, dmg_type Pure)

#### Blink Dagger (blink)
- minuto: 24:51 (mediana, 20 de 23 jogos)
- porque: fecha os 1200 de distância pra iniciar com a curse antes do time inimigo reagir, igual no offlane.
- combo: Blink (1200) + Doom (alcance 400) crava o combo; o Infernal Blade em autocast ainda rouba um mini-stun de 0,66s nos ataques básicos durante a aproximação final.
- fonte: compras.parquet (20/23 = 87%, mediana 24:51); items.json (blink: blink_range 1200); constants_abilities.json (doom_bringer_infernal_blade: ministun_duration 0.66)

### Situacionais

#### Soul Ring (soul_ring)
- porque: mana barata pro 1v1 de farm, sem gastar ouro em flask, mantendo Scorched Earth e Devour ligados.
- minuto: 8:05 (mediana, 8 de 23 jogos)
- contra: lane sem regen suficiente pra manter Scorched Earth ligado e ainda farmar com Devour.
- fonte: compras.parquet (8/23 = 35%); items.json (soul_ring: mana_gain 170, duration 10)

#### Harpoon (harpoon)
- porque: o puxão do Draw Forth resolve o alcance curto da curse contra quem kita, fechando a distância pro combo.
- minuto: 29:17 (mediana, 12 de 23 jogos)
- contra: heróis móveis e de kite que fogem do alcance curto de Doom (400 na curse, 200 no Infernal Blade); o ativo Draw Forth puxa até 35% da distância, ou até distância de corpo a corpo se o lançador for melee (caso de Doom).
- detalhe: monta de Echo Sabre (65% dos jogos chegam só até aqui, 15/23) + Diadem; a passiva Echo Strike faz o ataque bater 2x com 100% de lentidão por 1s no primeiro golpe.
- fonte: compras.parquet (12/23 = 52% chegam no item final, mediana 29:17; echo_sabre 15/23 = 65%, mediana 26:57); items.json (harpoon: pull_distance_pct 35, min_distance 100)

#### Assault Cuirass (assault)
- porque: aura de armadura segura push de creep/estrutura e ainda rouba armadura do time inimigo em luta.
- minuto: 35:12 (mediana, 6 de 23 jogos)
- contra: composições de dano físico pesado e exércitos de criatura/estrutura, a aura rouba 5 de armadura do inimigo e dá 5 de armadura + 30 de velocidade de ataque pro time, raio 1200.
- fonte: compras.parquet (6/23 = 26%); items.json (assault: aura_attack_speed 30, aura_positive_armor 5, aura_negative_armor -5, aura_radius 1200)

#### Overwhelming Blink (overwhelming_blink)
- porque: mesmo caso do offlane, o estouro de área ao redor do blink pune grupos agrupados que o comum não alcança.
- minuto: 40:50 (mediana, 6 de 23 jogos)
- contra: mesmo caso do offlane, grupos agrupados de alvos frágeis quando o blink comum não entrega dano suficiente pra fechar a luta.
- fonte: compras.parquet (6/23 = 26%); items.json (overwhelming_blink: damage_base 100, radius 800)

## Roshan

Sem dado de Roshan solo: o dataset de replays (dota-roshan-solo) não tem nenhuma entrada pra Doom em `resumo_por_heroi.json` nem em `resumo_com_suporte.json`, nem solo nem em equipe. Não dá pra afirmar nada sobre o papel dele no Roshan com fonte verificável.

Fonte: dota-roshan-solo/data/resumo_por_heroi.json; dota-roshan-solo/data/resumo_com_suporte.json
