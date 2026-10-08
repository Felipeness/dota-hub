---
id: ficha-rattletrap
titulo: "Clockwerk"
heroi: Clockwerk
patch: 7.41
posicoes: [4, 5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/51/itemPopularity
- https://dotacoach.gg/en/heroes/clockwerk
- https://dotacoach.gg/en/heroes/clockwerk/builds/support
- https://dotacoach.gg/en/items/solar-crest
---

## Resumo

Clockwerk é um iniciador e disabler de Força (papéis Initiator/Disabler/Durable/Nuker no OpenDota): mergulha com o Hookshot, que estoura em área ao acertar um alvo, prende quem sobrou na Power Cogs e ainda solta dano mágico aleatório em área com a Battery Assault. No 7.41 ele só é jogado de suporte: no draft de Tier 1 analisado, dos 201 picks dele 199 tiveram posição confirmada por replay, 134 como pos 4 (67,3%, 50,7% de vitória) e 65 como pos 5 (32,7%, 49,2% de vitória): nenhum pick confirmado como mid, offlane ou carry nesse recorte (dota-tier1/data/draft.csv). No público em geral ele tem 47,3% de vitória em 145.088 partidas recentes (heroStats.json).

## Pos 4 (suporte de roaming)

- quando pegar: é a posição mais jogada do herói no recorte de Tier 1 (134 de 199 picks com posição confirmada, 67,3%, 50,7% de vitória); como pos 4 ele sai cedo pra rotacionar e caçar kill isolada, já que a Battery Assault concentra bastante dano num alvo sozinho perto (dota-tier1/data/draft.csv; dotacoach.gg/en/heroes/clockwerk, seção de estratégia: "Play in tree lines and prey on isolated heroes as Battery Assault does all the damage to the single hero").
- itens iniciais: boots, tango, blood_grenade, ward_observer, ward_sentry

### Build

#### Tranquil Boots (tranquil_boots)
- minuto: 7:41 (mediana, 97 de 134 jogos)
- porque: regen rápida de vida pra rotacionar o mapa sem voltar à base, essencial pra quem joga de roaming.
- detalhe: cura 250 de vida ao longo de 20s e dá 65 de velocidade de movimento enquanto não leva dano de herói ou torre; o bônus quebra por 13s ao ser atingido, caindo pra 40 de velocidade até voltar. Monta a partir das Boots of Speed iniciais.
- fonte: compras.parquet (97/134 = 72,4%, mediana 7:41); items.json (heal_amount 250, heal_duration 20, break_time 13)

#### Magic Wand (magic_wand)
- minuto: 10:22 (mediana, 87 de 134 jogos)
- porque: cargas baratas de vida e mana toda vez que alguém perto lança feitiço, pra sobreviver trocas de early game sem gastar ouro em regen.
- detalhe: evolui do Magic Stick inicial (comprado em 91% dos jogos, mediana 5:13); carrega sempre que um inimigo visível perto usa habilidade, comum em qualquer disputa de rune ou gank.
- fonte: compras.parquet (87/134 = 64,9%, mediana 10:22; magic_stick 122/134 = 91,0%, mediana 5:13)

#### Urn of Shadows (urn_of_shadows)
- minuto: 12:51 (mediana, 53 de 134 jogos)
- porque: ganha carga quando um herói morre perto, pra converter isso em cura de aliado ou dano/lentidão em inimigo na sequência.
- detalhe: carrega 2 cargas ao montar e mais 1 a cada morte de herói num raio de 1500; é o primeiro passo construtivo pro Essence Distiller mais pra frente no jogo.
- fonte: items.json (soul_radius 1500, soul_initial_charge 2, soul_additional_charges 1); compras.parquet (53/134 = 39,6%, mediana 12:51)

#### Essence Distiller (essence_distiller)
- minuto: 18:06 (mediana, 49 de 134 jogos)
- porque: vira o Urn em sustento de time maior, com armadura e atributos extra, sem perder a carga por morte de herói.
- detalhe: monta com Urn of Shadows + Chainmail + Wizard Hat. A mesma Chainmail do componente é o item que o Armor Power (passiva inata) consome pra virar armadura permanente (+4 por Chainmail, empilhável); como o Armor Power também converte 0,25% de dano extra por ponto de armadura que Clockwerk tiver, cada Chainmail comprada rende ou o Distiller ou dano a mais, dependendo de ser usada na receita ou autoconsumida.
- fonte: items.json (componentes do essence_distiller: urn_of_shadows, chainmail, wizard_hat; soul_heal_amount 40, soul_damage_amount 25); constants_abilities.json (rattletrap_armor_power: damage_per_armor 0,25, armor_per_chainmail 4, can_consume_chainmail); compras.parquet (49/134 = 36,6%, mediana 18:06)

#### Blink Dagger (blink)
- minuto: 26:35 (mediana, 77 de 134 jogos)
- porque: reposiciona antes de abrir o combo ou escapa depois do Hookshot, sem precisar expor a intenção antes da hora.
- detalhe: 1200 de distância, 3s de bloqueio após levar dano de herói ou Roshan. Como o Hookshot já tem alcance de 2000 a 3000 por nível, o Blink aqui não serve pra "alcançar" o alvo, serve pra ajustar ângulo de ataque ou sair de uma posição ruim depois de mergulhar.
- fonte: items.json (mecânica); constants_abilities.json (rattletrap_hookshot: abilitycastrange 2000/2500/3000); compras.parquet (77/134 = 57,5%, mediana 26:35)

#### Force Staff (force_staff)
- minuto: 29:37 (mediana, 67 de 134 jogos)
- porque: empurra 600 de distância pra reposicionar um aliado antes da luta ou pra ele mesmo fugir depois de iniciar.
- detalhe: também empurra um inimigo isolado de volta pra dentro da Power Cogs já formada, corrigindo o ângulo de fuga dele.
- combo: Hookshot trava o alvo e atordoa em área, Power Cogs prende quem ficou perto, e o Force Staff empurra de volta quem escapou pela borda do anel.
- fonte: items.json (push_length 600, push_time 0.5); constants_abilities.json (rattletrap_power_cogs: cogs_radius 215, trigger_distance 185); compras.parquet (67/134 = 50,0%, mediana 29:37)

#### Aghanim's Shard (aghanims_shard)
- minuto: 31:23 (mediana, 50 de 134 jogos)
- porque: dá o Jetpack, voo com visão aérea pra cruzar rio e terreno alto e aparecer de um ângulo que o inimigo não esperava.
- detalhe: Jetpack dá velocidade de voo e visão aérea por 6s, mas trava o giro do herói e impede atacar enquanto ativo; pode ser ligado e desligado durante o buff e é dissipável por qualquer dispel, não exige um dispel forte.
- combo: Jetpack pra cruzar rio ou penhasco sem ser visto, Hookshot no alvo isolado do outro lado, Power Cogs fecha a armadilha em cima dele.
- fonte: dotacoach.gg/en/heroes/clockwerk (Aghanim's Shard grants Jetpack, cooldown 16s, mana cost 75, duração 6s); constants_abilities.json (rattletrap_jetpack: bonus_speed 20%, duration 6); compras.parquet (50/134 = 37,3%, mediana 31:23)

### Situacionais

#### Eul's Scepter of Divinity (cyclone)
- minuto: 26:57 (mediana, 40 de 134 jogos)
- contra: alvo que precisa ficar isolado no ar até o time chegar, ou que está com lentidão/raiz forte o bastante pra não escapar quando o ciclone acabar perto da Power Cogs.
- detalhe: o ciclone lançado em si mesmo passa por imunidade a feitiço; dá pra usar em si pra reposicionar no ar e cair exatamente quando a Power Cogs ainda está ativa.
- fonte: items.json (cyclone_duration 2.5, bonus_movement_speed 20); constants_abilities.json (rattletrap_power_cogs); compras.parquet (40/134 = 29,9%, mediana 26:57)

#### Ghost Scepter (ghost)
- minuto: 31:29 (mediana, 27 de 134 jogos)
- porque: fica imune a ataque físico bem na hora de se expor pra abrir o Hookshot, sem perder a brecha de iniciar.
- contra: carries de ataque físico que focam ele assim que aparece pra iniciar (ex. um Phantom Assassin ou Spectre já fedido).
- detalhe: vira etéreo por 4s, imune a ataque físico mas levando 30% mais dano mágico nesse tempo; cancela se ele ficar imune a debuff por outro efeito.
- fonte: items.json (extra_spell_damage_percent -30, duration 4.0); compras.parquet (27/134 = 20,1%, mediana 31:29)

#### Pavise (pavise)
- minuto: 20:42 (mediana, 15 de 134 jogos)
- porque: segura o burst físico que mataria ele ou o aliado iniciador antes do combo terminar de sair, por metade do custo do Solar Crest.
- contra: burst de dano físico de alvo único que mataria ele ou o aliado iniciador antes do combo terminar de sair (a barreira do Pavise só bloqueia dano físico, não mágico).
- detalhe: absorve 250 de dano físico por 7s em si ou num aliado; compartilha recarga com Solar Crest, então são escolhas alternativas no mesmo cooldown, não dois buffs ao mesmo tempo.
- fonte: items.json (ability description "physical damage barrier that absorbs 250 damage"; absorb_amount 250, duration 7; cost 1350 vs 2575 do Solar Crest; nota "Shares cooldown with Pavise" no Solar Crest); compras.parquet (15/134 = 11,2%, mediana 20:42)

#### Solar Crest (solar_crest)
- minuto: 26:05 (mediana, 12 de 134 jogos)
- porque: dá armadura e velocidade pro carry estourar quem ficou preso na Power Cogs mais rápido, ou reduz armadura de quem vai levar o Hookshot.
- contra: precisa de mais armadura e velocidade de ataque num aliado carry pra limpar quem ficou preso na Power Cogs, ou de reduzir a armadura de quem vai levar o Hookshot.
- detalhe: dá 5 de armadura e 60 de velocidade de ataque por 7s num aliado (ou reduz armadura e acerto de um inimigo, se usado nele); compartilha recarga com Pavise.
- fonte: items.json (target_armor 5, target_attack_speed 60, duration 7); constants_abilities.json (rattletrap_power_cogs); dotacoach.gg/en/items/solar-crest (cast em inimigo reduz armadura e acerto, patch 7.41e); compras.parquet (12/134 = 9,0%, mediana 26:05)

#### Glimmer Cape (glimmer_cape)
- minuto: 30:46 (mediana, 13 de 134 jogos)
- porque: esconde e bloqueia dano mágico bem no momento de se posicionar pra abrir o Hookshot, quando ele fica mais exposto.
- contra: foco de dano mágico ou projétil bem na hora em que ele se posiciona pra abrir o Hookshot.
- detalhe: invisibilidade com 0,5s de delay pra ativar e barreira de 375 de dano mágico por 5s; dá pra lançar mesmo durante uma canalização (channeling) de outra habilidade.
- fonte: items.json (barrier_block 375, duration 5, initial_fade_delay 0.5); compras.parquet (13/134 = 9,7%, mediana 30:46)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 55:46 (mediana, 9 de 134 jogos)
- porque: aumenta Power Cogs, Hookshot, Battery Assault e Rocket Flare de uma vez, pra lutas de 5 longas onde só uma habilidade isolada não resolve.
- contra: luta de 5 prolongada onde todas as áreas do kit precisam aumentar de uma vez, não só uma habilidade isolada.
- detalhe: libera Overclocking por 18s: Battery Assault e Power Cogs vão pra raio 330, Hookshot ganha 50% de raio e duração extra de stun, e a Rocket Flare dispara 2 rockets extras pros lados; termina com 3s de lentidão própria "a passo de tartaruga" no movimento e ataque.
- fonte: dotacoach.gg/en/heroes/clockwerk (detalhamento do Overclocking); constants_abilities.json (rattletrap_overclocking: buff_duration 18, debuff_duration 3, cogs_radius 330, hookshot_duration_bonus_pct 50%, rocket_flare_rockets 2); compras.parquet (9/134 = 6,7%, mediana 55:46)

## Pos 5 (suporte duro)

- quando pegar: segunda posição mais jogada no mesmo recorte de Tier 1 (65 de 199 picks com posição confirmada, 32,7%, 49,2% de vitória); como suporte duro ele troca farm por ward e usa o mesmo Hookshot pra travar quem ataca o carry ou foge da luta, só que de 1 a 3 min mais atrasado que o pos 4 porque o ouro de suporte duro é menor (dota-tier1/data/draft.csv; dota-tier1/data/derivados/compras.parquet).
- itens iniciais: boots, tango, blood_grenade, ward_sentry, ward_observer

### Build

#### Tranquil Boots (tranquil_boots)
- minuto: 10:25 (mediana, 47 de 65 jogos)
- porque: regen de vida de graça pra segurar a lane de 2x2/3x3 sem gastar flask.
- detalhe: cura 250 de vida ao longo de 20s e dá 65 de velocidade; quebra por 13s ao levar dano de herói/torre, caindo pra 40 de bônus até voltar.
- fonte: compras.parquet (47/65 = 72,3%, mediana 10:25); items.json (heal_amount 250, heal_duration 20, break_time 13)

#### Magic Wand (magic_wand)
- minuto: 10:43 (mediana, 55 de 65 jogos)
- porque: sustenta a troca de golpe na lane sem precisar de ouro extra em regen, o item mais comprado do herói nessa posição.
- detalhe: evolui do Magic Stick inicial (58,5% dos jogos, mediana 5:24); carrega toda vez que um inimigo perto lança feitiço, comum numa lane de trade constante.
- fonte: compras.parquet (55/65 = 84,6%, mediana 10:43; magic_stick 38/65 = 58,5%, mediana 5:24)

#### Urn of Shadows (urn_of_shadows)
- minuto: 13:23 (mediana, 24 de 65 jogos)
- porque: ganha carga em morte de herói perto pra virar cura de aliado ou dano em inimigo depois.
- detalhe: carrega 2 cargas ao montar e mais 1 por morte de herói num raio de 1500; monta no Essence Distiller mais pra frente.
- fonte: items.json (soul_radius 1500, soul_initial_charge 2); compras.parquet (24/65 = 36,9%, mediana 13:23)

#### Essence Distiller (essence_distiller)
- minuto: 18:52 (mediana, 22 de 65 jogos)
- porque: vira o Urn em sustento maior de time sem perder a carga por morte, com o ouro curto de suporte duro.
- detalhe: monta com Urn of Shadows + Chainmail + Wizard Hat; a Chainmail da receita é a mesma que o Armor Power consome pra armadura permanente (+4 cada, empilhável), que também amplia o dano do próprio Clockwerk em 0,25% por ponto de armadura.
- fonte: items.json (componentes: urn_of_shadows, chainmail, wizard_hat); constants_abilities.json (rattletrap_armor_power: damage_per_armor 0,25, armor_per_chainmail 4); compras.parquet (22/65 = 33,8%, mediana 18:52)

#### Force Staff (force_staff)
- minuto: 28:04 (mediana, 37 de 65 jogos)
- porque: empurra 600 de distância pra salvar um aliado antes de levar o combo inimigo, ou pra empurrar alguém de volta pra dentro da Power Cogs.
- combo: Hookshot trava e atordoa em área, Power Cogs prende quem sobrou, Force Staff empurra de volta quem tentou sair pela borda do anel.
- fonte: items.json (push_length 600, push_time 0.5); compras.parquet (37/65 = 56,9%, mediana 28:04)

#### Aghanim's Shard (aghanims_shard)
- minuto: 31:12 (mediana, 28 de 65 jogos)
- porque: dá o Jetpack pra cruzar terreno alto e rio sem ser visto antes de iniciar, mais prioritário aqui do que o Blink por ser mais barato pro orçamento de suporte duro.
- detalhe: 6s de voo com visão aérea, trava o giro e impede atacar enquanto ativo; liga e desliga durante o buff, dissipável por qualquer dispel, não exige um dispel forte.
- fonte: dotacoach.gg/en/heroes/clockwerk (Shard grants Jetpack); constants_abilities.json (rattletrap_jetpack: duration 6); compras.parquet (28/65 = 43,1%, mediana 31:12)

### Situacionais

#### Ghost Scepter (ghost)
- minuto: 36:20 (mediana, 20 de 65 jogos)
- porque: fica imune a físico logo depois de abrir o Hookshot, pra aguentar o foco do carry em cima dele no meio da luta.
- contra: carry de ataque físico que vai focar ele no meio da luta depois do Hookshot sair.
- detalhe: etéreo por 4s, imune a físico mas com 30% mais dano mágico recebido nesse tempo.
- fonte: items.json (extra_spell_damage_percent -30, duration 4.0); compras.parquet (20/65 = 30,8%, mediana 36:20)

#### Blink Dagger (blink)
- minuto: 28:21 (mediana, 18 de 65 jogos)
- porque: entra na luta rápido sem precisar abrir o combo sozinho, pra quando o time já fecha com o que tem.
- contra: jogo em que o time já consegue fechar a luta sozinho e só falta ele se posicionar rápido pra não ficar de fora do combo.
- detalhe: 1200 de distância, 3s de bloqueio após dano de herói/Roshan; chega mais tarde e com menos frequência que no pos 4 porque o ouro de suporte duro prioriza ward e Shard primeiro.
- fonte: compras.parquet (18/65 = 27,7%, mediana 28:21); items.json (mecânica)

#### Glimmer Cape (glimmer_cape)
- minuto: 31:54 (mediana, 14 de 65 jogos)
- porque: esconde e bloqueia dano mágico bem no momento de se posicionar pra abrir o Hookshot, quando ele fica mais exposto.
- contra: foco de dano mágico ou projétil na hora de se posicionar pra abrir o Hookshot.
- detalhe: invisibilidade com 0,5s de delay e barreira de 375 de dano mágico por 5s.
- fonte: items.json (barrier_block 375, duration 5); compras.parquet (14/65 = 21,5%, mediana 31:54)

#### Pavise (pavise)
- minuto: 20:45 (mediana, 14 de 65 jogos)
- porque: segura o burst físico que mataria ele ou o aliado iniciador antes do combo sair, por metade do custo do Solar Crest.
- contra: burst de dano físico de alvo único que mataria ele ou o aliado iniciador antes do combo sair (a barreira do Pavise só bloqueia dano físico, não mágico).
- detalhe: absorve 250 de dano físico por 7s; compartilha recarga com Solar Crest.
- fonte: items.json (ability description "physical damage barrier that absorbs 250 damage"; absorb_amount 250, duration 7; cost 1350 vs 2575 do Solar Crest); compras.parquet (14/65 = 21,5%, mediana 20:45)

#### Solar Crest (solar_crest)
- minuto: 25:42 (mediana, 13 de 65 jogos)
- porque: dá armadura e velocidade pro carry estourar quem ficou preso na Power Cogs mais rápido, ou reduz armadura de quem vai levar o Hookshot.
- contra: precisa de armadura/velocidade extra pro carry limpar quem ficou preso na Power Cogs, ou reduzir armadura de quem vai levar o Hookshot.
- detalhe: 5 de armadura e 60 de velocidade de ataque por 7s num aliado (ou reduz armadura e acerto de um inimigo, se usado nele); compartilha recarga com Pavise.
- fonte: items.json (target_armor 5, target_attack_speed 60); constants_abilities.json (rattletrap_power_cogs); dotacoach.gg/en/items/solar-crest (cast em inimigo reduz armadura e acerto, patch 7.41e); compras.parquet (13/65 = 20,0%, mediana 25:42)

#### Eul's Scepter of Divinity (cyclone)
- minuto: 29:24 (mediana, 12 de 65 jogos)
- contra: alvo que precisa ficar isolado no ar até o time chegar ou até a Power Cogs ainda estar de pé quando ele descer.
- detalhe: ciclone em si passa por imunidade a feitiço; chega mais tarde e menos vezes que no pos 4 pelo ouro mais curto.
- fonte: items.json (cyclone_duration 2.5); constants_abilities.json (rattletrap_power_cogs); compras.parquet (12/65 = 18,5%, mediana 29:24)

## Roshan

Clockwerk não aparece como o herói que finaliza o Roshan sozinho nos replays locais: nenhum dos 2.720 eventos de morte de Roshan processados em solos.json tem ele como herói principal, e ele não entra nos resumos por herói que soloam (resumo_por_heroi.json, 22 heróis, nenhum deles Clockwerk; resumo_com_suporte.json, 29 heróis, idem). Ele aparece contribuindo dano ou presença no fosso em 276 dos 2.720 eventos (10,1%), quase todos classificados como abate em time (223 de 276) ou finalização (27 de 276); em 22 desses eventos ele contribui com dano de fato numa morte classificada como solo (puro ou com ajuda curta/suporte) de outro herói, e nesses casos a fração de dano dele é pequena (ex. 180 de dano num solo_puro do Gyrocopter aos 70:35, onde o Gyrocopter sozinho já tinha 98,8% do dano total). Isso casa com a descrição de matchup do dotacoach: a função dele no Roshan é travar quem está tentando roubar ou escapar do fosso com o Hookshot, já que o stun atravessa imunidade a debuff e a Power Cogs funciona como barreira: não farmar o bicho sozinho.

Fonte: C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json; https://dotacoach.gg/en/heroes/clockwerk
