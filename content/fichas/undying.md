---
id: ficha-undying
titulo: "Undying"
heroi: Undying
patch: 7.41
posicoes: [5, 3]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/jogadores_partida.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/early_rosh_pro.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/late_rosh_pro.json
- https://dotacoach.gg/heroes/counters/undying
---

## Resumo
Undying é suporte duro de força: Decay rouba 4 de força por inimigo em área por 35s (e dá o dobro de dano em creep), Soul Rip troca vida entre unidades próximas pra curar aliado ou ferir inimigo, Tombstone trava um ponto com zumbis que perseguem e desaceleram, e o ultimate Flesh Golem o transforma num tanque que amplifica 25 a 35% o dano do time por 3s a cada ataque (`constants_abilities.json`). No Atlas tier 1, ele é majoritariamente pos 5 (81 das 116 partidas com posição confirmada no replay, 53,1% de vitória) e aparece num segundo papel real como pos 3/offlane (24 partidas, 33,3% de vitória); pos 2 e pos 4 somam só 11 partidas e não têm build própria consistente (`draft.csv`, `jogadores_partida.csv`). Os dois papéis compram coisas bem diferentes: pos 5 monta em volta de Aghanim's Shard e Blink Dagger pra proteger o time, pos 3 monta em volta de Soul Ring, Blink e Black King Bar pra entrar na luta e trocar (`derivados/compras.parquet`).

## Pos 5 (suporte duro)
- quando pegar: pegue quando o time precisa de um suporte que trava um ponto do mapa e segura troca de 2 na lane: Tombstone bloqueia o alcance de ataque do que fica perto e os zumbis punem quem não sai da área. Funciona bem contra Batrider, Tiny, Nature's Prophet, Shadow Fiend, Treant Protector e Beastmaster, os matchups mais favoráveis a Undying no patch atual (`dotacoach.gg/heroes/counters/undying`, 7.41f).
- itens iniciais: enchanted_mango, ward_sentry, clarity, ward_observer, tango, blood_grenade, branches

### Build
#### Magic Wand (magic_wand)
- minuto: 9
- porque: carga rápida de HP/mana contra o poke de lane, sem gastar Soul Rip em cada troca.
- detalhe: acumula 1 carga por feitiço inimigo em 1200 de raio e devolve 15 de HP/mana por carga (`items.json`, magic_wand). Comprado em 78% das partidas de pos 5 no dataset, com minuto mediano de compra 9:12 (`derivados/compras.parquet`).
- fonte: derivados/compras.parquet; items.json (magic_wand)

#### Bracer (bracer)
- minuto: 10
- porque: stats baratos de força logo na lane, pra aguentar o corpo a corpo do Tombstone sem morrer primeiro.
- detalhe: dá atributos fixos e bônus de força (`items.json`, bracer). Aparece em 57% das partidas de pos 5, minuto mediano 9:54, geralmente junto com o Magic Wand antes das Arcane Boots (`derivados/compras.parquet`).
- fonte: derivados/compras.parquet; items.json (bracer)

#### Arcane Boots (arcane_boots)
- minuto: 13
- porque: devolve mana em área pro time, então Decay e Soul Rip voltam a sair sem recuar pra base.
- detalhe: dá 150 de mana em 1200 de raio quando usado, com recarga (`items.json`, arcane_boots). Aparece em 34% das partidas de pos 5 (minuto mediano 12:36); boa parte do resto troca por Tranquil ou Phase mais cedo, então não é universal (`derivados/compras.parquet`).
- fonte: derivados/compras.parquet; items.json (arcane_boots)

#### Aghanim's Shard (aghanims_shard)
- minuto: 19
- porque: item mais comprado do kit (81% das partidas de pos 5); dá ao Tombstone o grab que puxa o aliado perto pra dentro, escondendo quem ia morrer.
- detalhe: a sub-habilidade `undying_tombstone_grab` tem raio de puxão de 400 (`constants_abilities.json`). Minuto mediano de compra 19:24 nas partidas de pos 5 (`derivados/compras.parquet`). A partir daí, Soul Rip pode curar quem está dentro do Tombstone (até 16 de heal por tick no rank 4 da habilidade) sem tirar ele da proteção.
- combo: Tombstone + Shard (grab) + Soul Rip no aliado baixo de vida: puxa, protege com os 20 a 32 de HP da tumba e cura por dentro, resolvendo picks de alvo único que já estariam perdidos.
- fonte: derivados/compras.parquet; constants_abilities.json (undying_tombstone_grab, undying_soul_rip)

#### Blink Dagger (blink)
- minuto: 30
- porque: Undying não tem mobilidade própria; o blink fecha a distância até quem sai do raio de 325 do Decay ou do cast de 500 do Tombstone.
- detalhe: teleporta 1200 de distância instantaneamente, com bloqueio de 3s depois de levar dano de herói ou Roshan (`items.json`, blink). Usado em 64% das partidas de pos 5, minuto mediano 30:12 (`derivados/compras.parquet`).
- contra: Riki e Naga Siren aparecem na lista de matchups ruins pra Undying (`dotacoach.gg/heroes/counters/undying`); os dois fogem ou se escondem do alcance curto de Decay/Tombstone, e o blink é o que fecha essa distância a tempo.
- combo: Blink + Tombstone em cima de um grupo que vai lutar: fecha a distância e já planta o ponto de bloqueio antes do time inimigo se posicionar.
- fonte: derivados/compras.parquet; items.json (blink); dotacoach.gg/heroes/counters/undying

### Situacionais
#### Pavise (pavise)
- minuto: 20
- porque: escudo físico de 250 barato (1350 de ouro) pra segurar o primeiro hit físico grande numa troca.
- detalhe: "Protect" dá 250 de barreira física por 7s num aliado (`items.json`, pavise). Comprado em 26% das partidas de pos 5, minuto mediano 20:18 (`derivados/compras.parquet`).
- contra: funciona contra combo que dependa de um primeiro hit físico grande pra abrir a luta; na lista de matchups ruins de Undying isso cobre o burst de crit da Phantom Assassin (`dotacoach.gg/heroes/counters/undying`).
- fonte: derivados/compras.parquet; items.json (pavise); dotacoach.gg/heroes/counters/undying

#### Solar Crest (solar_crest)
- minuto: 23
- porque: 5 de armadura, 60 de ataque e barreira física de 350 no aliado que o time inimigo vai focar.
- detalhe: dura 7s e só funciona em aliado, não em quem usa (`items.json`, solar_crest). Comprado em 22% das partidas de pos 5, minuto mediano 22:36 (`derivados/compras.parquet`).
- contra: carries físicos e de illusion da lista de matchups ruins de Undying (Phantom Lancer, Phantom Assassin, Luna, Juggernaut, Anti-Mage) focam o suporte ou o carry aliado no corpo a corpo; o Solar Crest no aliado certo segura essa troca (`dotacoach.gg/heroes/counters/undying`).
- fonte: derivados/compras.parquet; items.json (solar_crest); dotacoach.gg/heroes/counters/undying

#### Force Staff (force_staff)
- minuto: 28
- porque: empurra 600 de distância pra tirar um aliado do alcance de iniciação corpo a corpo.
- detalhe: instantâneo, 850 de alcance de cast, não interrompe a ação do alvo (`items.json`, force_staff). Comprado em 15% das partidas de pos 5, minuto mediano 28:24 (`derivados/compras.parquet`).
- contra: Legion Commander aparece na lista de matchups ruins de Undying; o Force Staff tira o aliado puxado antes do Duel fechar, ou reposiciona o próprio Undying pra lançar Tombstone de novo (`dotacoach.gg/heroes/counters/undying`).
- fonte: derivados/compras.parquet; items.json (force_staff); dotacoach.gg/heroes/counters/undying

#### Glimmer Cape (glimmer_cape)
- minuto: 25
- porque: invisibilidade de 5s e barreira de até 375 de dano mágico pra tirar o suporte (ou o aliado) de foco numa troca.
- detalhe: tem 0,5s de delay antes de aplicar o efeito (`items.json`, glimmer_cape). Comprado em 14% das partidas de pos 5, minuto mediano 25:24 (`derivados/compras.parquet`).
- contra: Ancient Apparition está na lista de matchups ruins de Undying; o Ice Blast dele é de longo alcance e mágico, exatamente o tipo de dano que a barreira do Glimmer absorve (`dotacoach.gg/heroes/counters/undying`).
- fonte: derivados/compras.parquet; items.json (glimmer_cape); dotacoach.gg/heroes/counters/undying

#### Lotus Orb (lotus_orb)
- minuto: 40
- porque: reflete de volta o disable de alvo único que travaria o cast do Tombstone ou o Flesh Golem no momento errado.
- detalhe: aplica um escudo de 5s que recasta a maioria dos feitiços de alvo único de volta em quem lançou (`items.json`, lotus_orb). Comprado em 15% das partidas de pos 5, minuto mediano 40:00 (`derivados/compras.parquet`).
- contra: Nyx Assassin e Legion Commander são matchups ruins de Undying por dependerem de disable de alvo único (Impale, Duel); o Lotus devolve esse cast (`dotacoach.gg/heroes/counters/undying`).
- fonte: derivados/compras.parquet; items.json (lotus_orb); dotacoach.gg/heroes/counters/undying

## Pos 3 (offlane)
- quando pegar: é um papel bem menos comum e pior no agregado (33,3% de vitória em 24 partidas, contra 53,1% do pos 5), então pegue só quando o plano é farmar rápido com Soul Ring e entrar na luta com Blink e Black King Bar prontos, não zonear a lane. O pool de matchups favoráveis se mantém: Tiny, Nature's Prophet, Shadow Fiend, Templar Assassin, Mars e Puck (`dotacoach.gg/heroes/counters/undying`; `draft.csv`).
- itens iniciais: tango, magic_stick, gauntlets, enchanted_mango

### Build
#### Soul Ring (soul_ring)
- minuto: 6
- porque: mana instantânea trocando HP, pra não parar de castar Decay/Soul Rip puxando ouro de creep.
- detalhe: consome HP pra dar 170 de mana por 10s (`items.json`, soul_ring). Comprado em 100% das partidas de pos 3 do dataset, minuto mediano 6:24; nenhuma outra posição de Undying usa Soul Ring nesse volume (`derivados/compras.parquet`).
- fonte: derivados/compras.parquet; items.json (soul_ring)

#### Magic Wand (magic_wand)
- minuto: 8
- porque: mesma lógica do pos 5, carga rápida contra o harass de lane de offlane.
- detalhe: acumula 1 carga por feitiço inimigo em 1200 de raio e devolve 15 de HP/mana por carga (`items.json`, magic_wand). Comprado em 83% das partidas de pos 3, minuto mediano 8:24 (`derivados/compras.parquet`).
- fonte: derivados/compras.parquet; items.json (magic_wand)

#### Blink Dagger (blink)
- minuto: 19
- porque: fecha distância bem mais cedo que no pos 5, porque o plano aqui é procurar troca, não só defender um ponto.
- detalhe: teleporta 1200 de distância instantaneamente (`items.json`, blink). Comprado em 91% das partidas de pos 3, minuto mediano 19:18, quase 11 minutos antes do blink mediano do pos 5 (`derivados/compras.parquet`).
- fonte: derivados/compras.parquet; items.json (blink)

#### Black King Bar (black_king_bar)
- minuto: 26
- porque: spell immunity pra entrar na troca e manter o Flesh Golem ativo sem ser travado por disable mágico em sequência.
- detalhe: dá imunidade a magia/debuff por 7 a 9s e reduz 60% do dano mágico recebido enquanto ativo (`items.json`, black_king_bar). Comprado em 83% das partidas de pos 3, minuto mediano 26:18, contra só 7% no pos 5 (`derivados/compras.parquet`).
- contra: Legion Commander e Nyx Assassin são matchups ruins de Undying por travarem com disable de alvo único (Duel, Impale/Mana Burn); o BKB bloqueia os dois (`dotacoach.gg/heroes/counters/undying`).
- fonte: derivados/compras.parquet; items.json (black_king_bar); dotacoach.gg/heroes/counters/undying

#### Aghanim's Shard (aghanims_shard)
- minuto: 29
- porque: o mesmo grab do Tombstone, mas aqui pra puxar quem o pos 3 está tentando matar perto da tumba, não só pra salvar aliado.
- detalhe: raio de puxão de 400 (`constants_abilities.json`, undying_tombstone_grab). Comprado em 52% das partidas de pos 3, minuto mediano 28:54, mais tarde que no pos 5 porque o Soul Ring e o Blink vêm primeiro (`derivados/compras.parquet`).
- fonte: derivados/compras.parquet; constants_abilities.json (undying_tombstone_grab)

### Situacionais
#### Ultimate Scepter (ultimate_scepter)
- minuto: 41
- porque: item de luxo de fim de jogo pra quando a partida passa dos 40 minutos e o pos 3 já converteu o farm inicial em algo maior.
- detalhe: comprado em 39% das partidas de pos 3, minuto mediano 41:12; no pos 5 isso cai pra 2% (`derivados/compras.parquet`). O efeito exato do upgrade de Undying não aparece em nenhuma fonte acessada nesta ficha (`items.json` só traz o item base): a compra está confirmada, a mecânica do upgrade não.
- contra: jogos longos e travados, sem matchup específico confirmado.
- fonte: derivados/compras.parquet; items.json (ultimate_scepter)

#### Lotus Orb (lotus_orb)
- minuto: 17
- porque: mesma lógica do pos 5 (reflete disable de alvo único), só que comprado bem mais cedo porque o pos 3 entra em luta antes.
- detalhe: comprado em 35% das partidas de pos 3, minuto mediano 16:30, 23 minutos antes da mediana do pos 5 (`derivados/compras.parquet`).
- contra: Nyx Assassin e Legion Commander, mesmos matchups ruins de Undying por disable de alvo único (`dotacoach.gg/heroes/counters/undying`).
- fonte: derivados/compras.parquet; items.json (lotus_orb); dotacoach.gg/heroes/counters/undying

#### Infused Raindrops (infused_raindrop)
- porque: escudo mágico passivo contra poke de lane, barato e ativa sozinho.
- detalhe: comprado em 22% das partidas de pos 3, minuto mediano 6:18, só na fase de lane (`derivados/compras.parquet`).
- contra: lanes de poke mágico constante, sem matchup único confirmado na lista de counters.
- fonte: derivados/compras.parquet; items.json (infused_raindrop)

## Roshan
Sem dado de Roshan solo. Undying não aparece em nenhum dos resumos curados de solo kill (`resumo_por_heroi.json`, `resumo_com_suporte.json`, que cobrem 22 carries/mids que soloram Roshan no dataset), e não tem nenhuma ocorrência nos arquivos de candidatos pro (`early_rosh_pro.json`, `late_rosh_pro.json`). Faz sentido com o kit: nenhuma das 4 habilidades ajuda a tankar ou acelerar dano único em Roshan, e os dois papéis reais do herói (pos 5 e pos 3) nunca aparecem com perfil de farm suficiente pra solo no dataset.
