---
id: ficha-ember_spirit
titulo: "Ember Spirit"
heroi: Ember Spirit
patch: 7.41
posicoes: [2]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/jogadores_partida.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-tier1/data/derivados/objetivos.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/1win/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/aurora/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/betboom/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/falcons/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/lgd/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/liquid/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/navi/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/nigma/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/parivision/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/team-spirit/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/xtreme/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/yandex/hub.json
- https://api.opendota.com/api/heroes/106/itemPopularity
- https://dotacoach.gg/heroes/ember-spirit/builds/mid
---
## Resumo

Ember Spirit é carry/iniciador de agilidade que vive de mid. Nas 231 partidas dele no banco Tier 1 local, 202 foram de pos 2 (87%, 52,5% de vitórias) contra só 24 de offlane (10%, 50% de vitórias) e uma sobra irrelevante em pos 1 e pos 4 (`jogadores_partida.csv`). Os 12 times Tier 1 auditados (1win, Aurora, BetBoom, Falcons, LGD, Liquid, Navi, Nigma, PARIVISION, Team Spirit, Xtreme, Yandex) descrevem o mesmo arquétipo nos próprios relatórios: mid de mobilidade e iniciação física, não farmador passivo. O kit entrega troca de lane com Sleight of Fist e Flame Guard, prende com Searing Chains e usa Fire Remnant pra reposicionar rápido e puxar fazenda ou abrir luta. Na LGD, no Liquid e na Nigma ele aparece como ban de meta quase constante (LGD: "Ember Spirit é constante contra quase todos"; Liquid: 12 de 19 bans dele são de 3ª fase, protegendo pick já feito).

## Pos 2 (mid)

- quando pegar: prioridade de pick/ban quase universal no Tier 1 atual. A 1win o bane 40 vezes e pica 20 (50% de vitórias); a Liquid o pica 23 vezes com Nisha (57%); a Yandex 14 vezes (57%). Entra quando o time quer abrir luta cedo via Sleight of Fist/Fire Remnant e tem outro core físico pra converter o espaço criado, não como resposta a um matchup específico (fonte: hub.json de 1win, liquid, yandex, lgd).
- itens iniciais: tango, quelling_blade, faerie_fire, branches, branches, branches, ward_observer

### Build

#### Bottle (bottle)
- minuto: 1,5
- porque: mana e vida pra trocar Sleight of Fist na lane sem voltar à base.
- detalhe: custa 675 de ouro e enche com runa da lane mid. Está em praticamente toda partida dele no banco Tier 1 (229 compras em 226 partidas, contando reposições).
- combo: enche com runa de haste ou dupla dano pra forçar uma troca ou fugir de gank.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Magic Wand (magic_wand)
- minuto: 3,8
- porque: carga rápida de vida e mana contra poke de nuke no early, sem gastar mana própria.
- detalhe: ganha carga quando o inimigo visível lança feitiço a até 1200 de distância; dá +3 em todos os atributos quando cheio.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Urn of Shadows (urn_of_shadows)
- minuto: 8,5
- porque: dano e cura garantidos numa morte perto, antecipa o upgrade pra Spirit Vessel.
- detalhe: raio de 1500, carrega 2 cargas iniciais e ganha mais 1 por kill/assist perto.
- contra: perde o efeito se a unidade marcada for atacada por herói ou Roshan antes de morrer.
- combo: sobe direto pra Spirit Vessel quando o time enfrenta sustain.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Phase Boots (phase_boots)
- minuto: 8,7
- porque: a fase atravessa unidades pra acertar o primeiro hit do combo sem rodear a wave.
- detalhe: +50 de velocidade por 3s ao ativar, +18 de dano corpo a corpo e +4 de armadura permanentes.
- contra: ajuda a alcançar heróis sem blink/dash próprio no início do jogo.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Diadem (diadem)
- minuto: 11,2
- porque: +6 em todos os atributos por 1000 de ouro, o item mais barato que sobe status geral.
- detalhe: no 7.41 o Manta Style passou a ser montado com Yasha + Diadem (não mais Yasha + Yasha). No banco Tier 1, porém, ele quase nunca completa essa rota com Ember: 163 compras de Diadem em 226 partidas contra só 2 de Yasha e 0 de Manta Style. Na prática o Diadem fica como item de stat avulso, não como meio-caminho do Manta.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Spirit Vessel (spirit_vessel)
- minuto: 13,5
- porque: corta a cura do alvo e devolve vida/dano pro time, útil contra lineup de sustain.
- detalhe: reduz regeneração do inimigo em 70% por 8s e drena vida dele por tick; upgrade direto do Urn of Shadows.
- contra: heróis de lifesteal e regeneração alta (Troll Warlord, Huskar e afins).
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Mage Slayer (mage_slayer)
- minuto: 17,6
- porque: reduz a amplificação mágica do time inimigo e dá +20 de armadura mágica pro próprio Ember.
- detalhe: aplica debuff de -40% de amplificação de feitiço por 3s a cada ataque; bom quando o time toma luta contra composição de nuke pesado.
- contra: nukers e carries mágicos (Lina, Zeus, Queen of Pain e afins).
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Kaya (kaya)
- minuto: 22,0
- porque: amplifica os 10% de dano mágico do combo (Searing Chains, Fire Remnant, Immolation) por 2100 de ouro.
- detalhe: +16 de inteligência e +30% de regeneração de mana, barato e some direto em Kaya and Sange depois.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Aghanim's Shard (aghanims_shard)
- minuto: 25,9
- porque: é o item de maior frequência da fase intermediária entre os cores (85% das partidas do banco Tier 1, 191 de 226), sinal de prioridade alta no kit desse patch.
- detalhe: custa 1400 de ouro. As fontes consultadas aqui não trazem o texto específico de como a melhoria altera uma habilidade do Ember; o dado confirmado é frequência e timing de compra, não o efeito exato.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Black King Bar (black_king_bar)
- minuto: 26,2
- porque: dá a imunidade a magia pra completar o combo sem ser interrompido no meio da entrada.
- detalhe: 9/8/7s de imunidade conforme a compra (não reseta ao comprar outra), reduz 60% do dano mágico recebido mesmo assim. Searing Chains dele não atravessa BKB inimigo (bkbpierce: não), mas Sleight of Fist atravessa (bkbpierce: sim): contra herói com BKB, ele ainda consegue bater com o Sleight, só não consegue prender com a chain.
- contra: sequência de disable múltiplo (silêncio + stun + root em cadeia).
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 32,5
- porque: é o item de late mais comprado por ele no banco Tier 1 (67% das partidas, 152 de 226), dando corpo (vida/mana) pra sobreviver ao corpo a corpo que ele mesmo cria ao iniciar.
- detalhe: +10 em todos os atributos, +175 de vida e +175 de mana confirmados no item. Como no Shard, as fontes consultadas não trazem o texto específico do upgrade de habilidade pro Ember nesse patch.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

### Situacionais

#### Kaya and Sange (kaya_and_sange)
- minuto: 30,8
- porque: 25% de resistência a lentidão reduz o quanto ele é freado ao entrar na troca. É resistência a slow especificamente (slow_resistance no item), não a stun, silêncio ou raiz: não ajuda a sair de um disable.
- detalhe: comprado em 35% das partidas do banco (78 de 226); some do Kaya já comprado antes.
- contra: builds que dependem de lentidão pesada pra acertar o combo antes do disable (ex.: orbe de veneno, Spirit Vessel, nova de slow).
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Shiva's Guard (shivas_guard)
- minuto: 38,3
- porque: a nova de -40% de velocidade de movimento junto com a aura de -45 de velocidade de ataque garante que os hits do Sleight of Fist conectem em quem tenta fugir ou kitar.
- detalhe: comprado em 30% das partidas (67 de 226); também dá +17 de armadura pra aguentar o corpo a corpo.
- contra: carries de ataque rápido que fogem em linha reta (Phantom Assassin, Juggernaut e afins).
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Linken's Sphere (sphere)
- minuto: 31,7
- porque: bloqueia o primeiro feitiço de alvo único contra ele, protegendo a entrada de um stun ou hex decisivo.
- detalhe: absorve 300 de dano ou um feitiço alvo-único, recarrega em 14s; comprado em 11% das partidas (25 de 226).
- contra: disable de alvo único forte (Lion, Doom, Shadow Shaman).
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Octarine Core (octarine_core)
- minuto: 44,0
- porque: 25% de redução de recarga deixa Fire Remnant e Sleight of Fist disponíveis de novo mais rápido pra repetir o combo em luta longa ou acelerar fazenda.
- detalhe: comprado em 11% das partidas (25 de 226), geralmente em jogos que travam.
- combo: com a carga do Fire Remnant restaurando mais rápido, ele reposiciona em luta mais vezes por minuto.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Refresher Orb (refresher)
- minuto: 46,5
- porque: dobra Fire Remnant e Sleight of Fist na mesma luta longa, item de deathball tardio.
- detalhe: comprado em 11% das partidas (24 de 226); cooldown próprio de 180s pra usar de novo.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Bloodstone (bloodstone)
- minuto: 27,7
- porque: converte o próprio dano de feitiço (Searing Chains, Fire Remnant) em vida, sustentando em troca longa.
- detalhe: 20% de spell lifesteal (60% enquanto o buff de carga estiver ativo) e +650 de vida; comprado em 14% das partidas (32 de 226).
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Veil of Discord (veil_of_discord)
- minuto: 20,7
- porque: amplifica em 10% o dano mágico de todo o time num raio de 900, não só o dele, pra abrir luta em grupo.
- detalhe: comprado em 19% das partidas (42 de 226); mais item de combo em time de nuke do que de kit individual.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Eul's Scepter / Wind Waker (cyclone)
- minuto: 23,9
- porque: dispela debuff duro sobre ele mesmo (silêncio, raiz) antes de entrar com Sleight of Fist, ou guarda o próprio corpo por 2,5s.
- detalhe: "Cyclone pode dispelar alguns buffs e debuffs" (nota oficial do item); comprado em 8% das partidas (18 de 226), quase sempre como Eul's base, raramente upgradado pra Wind Waker.
- contra: silêncio e root fortes que travam o combo antes de ele sair.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Power Treads (power_treads)
- minuto: 10,9
- porque: alternativa à Phase Boots quando o jogo pede mais velocidade de ataque e troca de atributo em vez de atravessar unidades.
- detalhe: comprado em 8% das partidas (17 de 226), bem menos que Phase Boots (206 de 226).
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

## Roshan

Ember Spirit participa do Roshan com o time, não sozinho. Nos replays do banco Tier 1 ele fica com o último golpe em 38 das 226 partidas em que jogou pos 2 (17%), com minuto mediano 34,4 (variando de 19,2 a 60,0). No banco dedicado de Roshan solo (dota-roshan-solo), as únicas 4 ocorrências dele no Roshan foram classificadas como kill de time, nenhuma solo: ele entra no Roshan junto do grupo, não isolado.
