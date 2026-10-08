---
id: ficha-largo
titulo: "Largo"
heroi: Largo
patch: 7.41
posicoes: [3, 4, 5]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-tier1/data/derivados/compras.parquet
- dota-tier1/data/partidas.csv
- dota-roshan-solo/data/solos.json
- https://dota2protracker.com/builds/largo-pos4-1
- https://dota2protracker.com/builds/largo-pos5-1
- https://www.esports.net/wiki/guides/new-dota-hero-largo/
---

## Resumo

Largo é um str melee de controle: puxa e dispela com Catchy Lick, trava área com o stomp do Frogstomp, amplifica dano e barateia mana do aliado com Croak of Genius, e na ulti (Amphibian Rhapsody) troca o kit por 3 "canções" de buff/dano/cura tocadas no ritmo (fonte: constants_abilities.json). No Tier 1 do 7.41 ele é essencialmente herói de offlane: dos 156 picks com posição confirmada por replay, 139 foram pos 3 (89%, 54% de vitória, espalhados por 27 equipes diferentes), contra só 8 no pos 2 (12,5% de vitória, amostra pequena demais pra virar seção própria), 5 no pos 5 e 3 no pos 4 (fonte: draft.csv). Ele é mais banido do que pickado no cenário pro: 305 bans contra 156 picks, contestado (pick ou ban) em 461 das 895 partidas do lote (51,5%) (fonte: draft.csv; partidas.csv). No D2PT (amostra de pro + MMR alto, sem recorte só-Tier-1) ele também aparece com uso relevante como suporte flexível (pos 4, 55% de vitória em 38 jogos, 19 deles de pro) e suporte duro (pos 5, 57% em 37 jogos): esses dois dados vêm de uma população diferente da do Tier 1 analisado aqui, por isso as seções de pos 4 e 5 abaixo não têm minuto de compra, só os itens centrais do build (fonte: dota2protracker.com/builds/largo-pos4-1 e largo-pos5-1).

## Pos 3 (offlane)

- quando pegar: é o pick dominante da posição no lote de Tier 1 analisado (139 dos 156 picks confirmados por replay, 54% de vitória). Sai na 1ª fase do draft em 42 dos 139 jogos pos 3 (30%) e é banido quase o dobro das vezes em que é pickado (305 bans x 156 picks em 895 partidas): time que não responde o draft dele corre risco. (fonte: draft.csv)
- itens iniciais: tango, branches

### Build

#### Boots of Speed (boots) → Phase Boots (phase_boots)
- minuto: 6:55 (mediana, 136 de 139 jogos pos 3, 97,8%)
- porque: velocidade extra pra alcançar o raio 700 do Catchy Lick e o raio 800 do Frogstomp sem ficar preso em creep na lane.
- detalhe: o ativo do Phase remove colisão com unidades por 3s, o que ajuda um melee de 150 de alcance a se posicionar dentro da área antes de puxar ou atordoar.
- fonte: compras.parquet (136/139 = 97,8%, mediana 6:55); constants_abilities.json (largo_catchy_lick abilitycastrange 700; largo_frogstomp abilitycastrange 800)

#### Magic Wand (magic_wand)
- minuto: 4:36 (mediana, 107 de 139 jogos, 77%)
- porque: cargas baratas de vida e mana pra sustentar trocas de lane sem gastar logo o pool de mana base, que é só 75.
- fonte: compras.parquet (107/139 = 77%); heroStats.json (base_mana 75)

#### Chainmail (chainmail)
- minuto: 5:08 (mediana, 136 de 139 jogos, 97,8%)
- porque: armadura barata pra um melee que entra no meio da troca pra puxar e atordoar; eleva o resultado de ataque automático na lane de offlane.
- fonte: compras.parquet (136/139 = 97,8%)

#### Soul Ring (soul_ring)
- minuto: 8:22 (mediana, 137 de 139 jogos, 98,6%)
- porque: com só 75 de mana base, Largo precisa converter vida em mana pra manter Catchy Lick, Frogstomp e Croak of Genius saindo sem secar o pool.
- fonte: compras.parquet (137/139 = 98,6%); heroStats.json (base_mana 75)

#### Kaya (kaya) → Kaya and Sange (kaya_and_sange)
- minuto: 13:53 (kaya, 119/139 = 85,6%) → 19:11 (kaya and sange completo, 96/139 = 69,1%)
- porque: 12% de amplificação de feitiço multiplica o dano do Catchy Lick, dos tiques do Frogstomp e do reverb de dano do Croak of Genius; a restauração de vida de 20% potencializa o regen de vida que o próprio Catchy Lick já dá ao dispelar ou matar.
- detalhe: o Kaya entra sozinho perto dos 14 min pra sustentar a mana do Croak nos aliados; o upgrade pra Kaya and Sange (perto dos 19 min) fecha com 25% de resistência a lentidão, útil pra chegar vivo no alcance curto do Catchy Lick.
- combo: o dispel do Catchy Lick já dá regen de vida (4 a 13 por nível, por 8s); com os 20% de Health Restoration do Kaya and Sange esse regen devolve ainda mais vida depois de qualquer troca.
- fonte: compras.parquet (kaya 119/139 = 85,6%, mediana 13:53; kaya_and_sange 96/139 = 69,1%, mediana 19:11); items.json (kaya_and_sange: spell_amplification 12%, slow_resistance 25%, health_restoration 20%); constants_abilities.json (largo_catchy_lick dispel_hp_regen 4/7/10/13, buff_duration 8, strong_dispel 0)

#### Aghanim's Shard (aghanims_shard)
- minuto: 24:21 (mediana, 118 de 139 jogos, 84,9%)
- porque: item quase universal nesse lote de pos 3 (85%); vira o upgrade Encore: quando Largo aplica um buff de alvo único num aliado, ele mesmo também recebe esse buff; se o alvo for ele próprio, o buff também é passado pro aliado mais próximo dentro do alcance da habilidade usada. Isso estica o valor de Croak of Genius e do regen de Catchy Lick pro próprio Largo sem gastar uma segunda cast.
- fonte: compras.parquet (118/139 = 84,9%, mediana 24:21); esports.net/wiki/guides/new-dota-hero-largo (descrição do Encore, cobertura do patch 7.40, lançamento do herói; não confirmado se mudou no 7.41: constants locais não têm habilidade dedicada de shard exportada)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 26:45 (mediana, 98 de 139 jogos, 70,5%)
- porque: segundo upgrade de habilidade quase tão comum quanto o Shard; junto formam o "Aghanim duplo" que domina o meio de jogo da posição nesse lote.
- fonte: compras.parquet (98/139 = 70,5%, mediana 26:45)

#### Black King Bar (black_king_bar)
- minuto: 31:24 (mediana, 89 de 139 jogos, 64%)
- porque: segura silence e stun de alvo único pra terminar o combo Catchy Lick → Frogstomp sem ser interrompido, e dá imunidade mágica pra brigar corpo a corpo com só 150 de alcance.
- fonte: compras.parquet (89/139 = 64%, mediana 31:24)

### Situacionais

#### Lotus Orb (lotus_orb)
- minuto: 27:24 (mediana, 39 de 139 jogos, 28,1%)
- porque: Largo puxa o aliado pra luta com Catchy Lick e vira alvo prioritário de disable; a Echo Shell devolve o feitiço que travaria essa iniciação.
- contra: feitiços de alvo único fortes (hex, disables direcionados): o ativo (Echo Shell) devolve o próximo feitiço de alvo único lançado contra Largo pro próprio lançador, embora Largo ainda sofra o efeito original.
- fonte: compras.parquet (39/139 = 28,1%); items.json (lotus_orb: active_duration 5, cd 15); constants_abilities.json (largo_catchy_lick abilitycastrange 700)

#### Shiva's Guard (shivas_guard)
- minuto: 38:22 (mediana, 27 de 139 jogos, 19,4%)
- porque: Largo é melee de 150 de alcance; a Freezing Aura reduz o DPS de carries rápidos e o Arctic Blast em área acerta ilusão/creep de uma vez.
- contra: carries de ataque rápido e grupos de ilusão/creep: a aura reduz 45 de velocidade de ataque em raio 1200 e o estouro de 260 de dano em área (raio 825) limpa várias unidades de uma vez.
- fonte: compras.parquet (27/139 = 19,4%); items.json (shivas_guard: aura_attack_speed -45, blast_damage 260, aura_radius 1200); heroStats.json (attack_range 150)

#### Linken's Sphere (sphere)
- minuto: 40:11 (mediana, 28 de 139 jogos, 20,1%)
- porque: garante que a iniciação do Catchy Lick não seja cancelada por um disable isolado mirado em Largo antes de ele puxar o aliado pra luta.
- contra: nuke ou disable de alvo único isolado e forte: bloqueia o próximo feitiço de alvo único a cada 14s.
- fonte: compras.parquet (28/139 = 20,1%); items.json (sphere: block_cooldown 14.0); constants_abilities.json (largo_catchy_lick abilitycastrange 700)

## Pos 4 (suporte de roaming)

- quando pegar: no D2PT (pro + MMR alto) é classificado como suporte flexível, 55% de vitória em 38 partidas (19 delas de pro). No recorte só-Tier-1 analisado aqui a amostra é de apenas 3 jogos (1 vitória): não dá pra tratar como padrão consolidado de pro, é sobretudo um dado de MMR alto. Ordem de habilidades nesse build: Catchy Lick no nível 1, Frogstomp no nível 2, Amphibian Rhapsody no nível 6. (fonte: dota2protracker.com/builds/largo-pos4-1; draft.csv)
- itens iniciais: fetch direto da página retorna 403; tentativas de extrair o dado por busca indireta trouxeram números inconsistentes entre si (combos e taxas diferentes pra "Boots + Tango" em duas consultas), então não há número confiável pra citar aqui

### Build

#### Magic Wand (magic_wand)
- porque: cargas baratas de vida e mana pra sustentar a rotação de suporte sem gastar o pool de mana base de 75.
- fonte: dota2protracker.com/builds/largo-pos4-1; heroStats.json (base_mana 75)

#### Arcane Boots (arcane_boots)
- porque: devolve 150 de mana pros aliados num raio de 1200, essencial pra Largo manter Catchy Lick, Frogstomp e Croak saindo sem depender só de regen própria.
- fonte: dota2protracker.com/builds/largo-pos4-1; items.json (arcane_boots: replenish_amount 150, replenish_radius 1200)

#### Pavise (pavise)
- porque: barreira física de 250 de dano por 7s pra proteger o aliado que Largo acabou de puxar pra dentro da luta com o Catchy Lick.
- fonte: dota2protracker.com/builds/largo-pos4-1; items.json (pavise: absorb_amount 250, duration 7)

#### Aghanim's Shard (aghanims_shard)
- porque: mesmo Encore da versão pos 3 (recebe o próprio buff que aplica, ou passa pro aliado mais próximo se o alvo for ele mesmo); nesse build de suporte amplifica o valor de Croak of Genius e Pavise lançados nos aliados.
- fonte: dota2protracker.com/builds/largo-pos4-1; esports.net/wiki/guides/new-dota-hero-largo (descrição do Encore, patch 7.40)

#### Glimmer Cape (glimmer_cape)
- porque: invisibilidade, barreira mágica de 375 por 5s e 20% de resistência mágica pra sair vivo depois de fechar o combo e ficar exposto no meio dos inimigos.
- fonte: dota2protracker.com/builds/largo-pos4-1; items.json (glimmer_cape: barrier_block 375, duration 5, bonus_magical_armor 20%)

#### Solar Crest (solar_crest)
- porque: 5 de armadura, 60 de velocidade de ataque, 15% de movimento e barreira de 350 pro aliado que vai iniciar a luta junto com o puxão do Catchy Lick.
- fonte: dota2protracker.com/builds/largo-pos4-1; items.json (solar_crest: bonus_armor 7 no self, shine com os bônus no aliado)

### Situacionais

#### Lotus Orb (lotus_orb)
- porque: no roaming, Largo é o primeiro alvo de disable ao puxar o aliado pro gank com Catchy Lick; a Echo Shell devolve esse feitiço pro inimigo.
- contra: feitiços de alvo único fortes: mesmo mecanismo da versão pos 3 (devolve o próximo feitiço de alvo único pro lançador).
- fonte: dota2protracker.com/builds/largo-pos4-1; items.json (lotus_orb); constants_abilities.json (largo_catchy_lick abilitycastrange 700)

#### Holy Locket (holy_locket)
- contra: jogos de troca de cura constante: amplifica em 15% toda cura que o próprio Largo aplica (passiva Holy Blessing); a ativa Energy Charge ainda dá +10% de cura recebida por 4s a um aliado e devolve vida/mana por carga, ganhando carga a cada 10s ou sempre que um inimigo visível em 1200 de raio usa uma habilidade.
- fonte: dota2protracker.com/builds/largo-pos4-1; items.json (holy_locket: heal_increase_passive 15, incoming_heal_increase_active 10, active_buff_duration 4, charge_gain_timer 10, charge_radius 1200); constants_abilities.json (largo_catchy_lick dispel_hp_regen 4/7/10/13, buff_duration 8)

#### Force Staff (force_staff)
- porque: compensa o alcance curto de Largo (150) pra fechar distância até o Catchy Lick ou puxar um aliado pra fora de perigo no meio do gank.
- contra: necessidade de reposicionamento rápido: empurra um aliado 600 unidades pra fora de perigo ou o próprio Largo 600 unidades pra dentro do raio 700 do Catchy Lick.
- fonte: dota2protracker.com/builds/largo-pos4-1; items.json (force_staff: push_length 600); heroStats.json (attack_range 150)

## Pos 5 (suporte duro)

- quando pegar: no D2PT (pro + MMR alto) é classificado como suporte padrão, 57% de vitória em 37 partidas. No recorte só-Tier-1 analisado aqui a amostra é de só 5 jogos (2 vitórias, 40%): mesma ressalva da pos 4, é sobretudo um dado de MMR alto, não um padrão consolidado de Tier 1. (fonte: dota2protracker.com/builds/largo-pos5-1; draft.csv)
- itens iniciais: fetch direto da página retorna 403, sem como confirmar; não citado pra não arriscar número inventado

### Build

#### Magic Wand (magic_wand)
- porque: mesmo papel da versão pos 4, sustento barato de vida e mana pra lane de suporte.
- fonte: dota2protracker.com/builds/largo-pos5-1

#### Arcane Boots (arcane_boots)
- porque: pool extra de mana pro time, igual na pos 4, pra manter o ritmo de Catchy Lick/Frogstomp/Croak.
- fonte: dota2protracker.com/builds/largo-pos5-1

#### Glimmer Cape (glimmer_cape)
- porque: nesse build o item entra antes do que na versão pos 4, priorizando a fuga e a resistência mágica cedo pra um suporte que fica mais tempo perto da linha de frente sem farm.
- fonte: dota2protracker.com/builds/largo-pos5-1; items.json (glimmer_cape)

#### Pavise (pavise)
- porque: barreira física pro aliado puxado pelo Catchy Lick, mesmo papel da versão pos 4.
- fonte: dota2protracker.com/builds/largo-pos5-1; items.json (pavise)

#### Solar Crest (solar_crest)
- porque: pacote de armadura, velocidade de ataque e movimento pro aliado que inicia a luta.
- fonte: dota2protracker.com/builds/largo-pos5-1; items.json (solar_crest)

## Roshan

Sem dado de Roshan solo.
