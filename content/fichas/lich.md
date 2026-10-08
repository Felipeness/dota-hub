---
id: ficha-lich
titulo: "Lich"
heroi: Lich
patch: 7.41
posicoes: [5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/jogadores_partida.csv
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/31/itemPopularity
- https://dotacoach.gg/en/heroes/lich/builds/support
- https://dotacoach.gg/en/heroes/counters/lich
---

## Resumo
Lich é hard support puro de alcance longo: no Atlas tier 1, aparece em 104 partidas de pro, sendo 100 na posição 5 e só 4 na posição 4, com 48,1% de vitória no total (`dota-tier1/data/draft.csv`). No OpenDota ele é catalogado como Support/Nuker, mas a amostra de pro no dataset local é baixa demais (2 picks) pra benchmark de fase por minuto (`heroStats.json`). O kit inteiro é lento e sem mobilidade própria (Frost Blast, Frost Shield e Chain Frost não dão dash nem blink), então ele zoneia a lane de longe com Frost Blast, protege o carry com Frost Shield e vira pick-off multi-alvo com Chain Frost quando o time agrupa os inimigos; Sinister Gaze puxa um alvo fora de posição ou cancela canalização.

## Pos 5 (suporte duro)
- quando pegar: pega quando o pos1/pos2 inimigo é illusion ou summon based (Meepo, Chaos Knight, Terrorblade, Beastmaster, Lone Druid), porque Frost Shield reduz o dano que o aliado protegido recebe dos ataques dos clones/summons e Chain Frost ameaça limpar vários de uma vez quando eles se agrupam (dotacoach.gg/en/heroes/counters/lich, seção "Good against" de gameplay do patch 7.41f). Também entra bem quando o time precisa de zoneamento de alcance sem arriscar HP do suporte: Frost Blast tem 575 a 650 de alcance de cast (`constants_abilities.json`, lich_frost_nova).
- itens iniciais: tango, blood_grenade, branches, ward_dispenser, enchanted_mango

### Build
#### Tranquil Boots (tranquil_boots)
- porque: regen rápido fora de combate sem gastar mana, pra sustentar a safe lane sem visitar o poço.
- detalhe: dá 65 de velocidade de movimento e 14 de regen de vida por até 20s enquanto não leva dano nem ataca; quebra por 13s ao primeiro hit recebido (`items.json`, tranquil_boots). Como Lich não precisa de Arcane pra mana (a passiva de int já ajuda), Tranquil é a bota padrão de suporte duro.
- fonte: items.json (tranquil_boots)

#### Magic Wand (magic_wand)
- porque: carga rápida de HP/mana contra o harass de nuke da fase de lane.
- detalhe: acumula 1 carga a cada feitiço usado por inimigo visível em 1200 de raio e devolve 15 de HP/mana por carga, até 20 cargas (`items.json`, magic_wand). Como Lich troca Frost Blast e recebe nuke de volta, o wand enche rápido nas primeiras escaramuças de lane.
- fonte: items.json (magic_wand)

#### Aghanim's Shard (aghanims_shard)
- porque: item de maior volume de compra na fase do meio de jogo pra esse herói, segundo o OpenDota.
- detalhe: no bucket "mid_game" do OpenDota pra Lich (hero_id 31), Aghanim's Shard é o item com mais ocorrências (50), na frente de Blink Dagger (35) e Glimmer Cape (26); o guia de suporte 7.41f da dotacoach.gg também lista Shard junto de Glimmer e Blink como os três itens core. O efeito exato do upgrade não aparece em nenhuma fonte acessada nesta ficha (items.json só traz o item base, sem o bônus por herói): compra confirmada, mecânica do upgrade não confirmada.
- fonte: OpenDota itemPopularity (hero_id 31); dotacoach.gg/en/heroes/lich/builds/support

#### Glimmer Cape (glimmer_cape)
- porque: invisibilidade de 5s e resistência mágica tiram o Lich (ou o aliado) de foco no meio de uma troca.
- detalhe: dá +20% de resistência mágica, bloqueia até 375 de dano e esconde o alvo por 5s com +20 de velocidade de movimento (`items.json`, glimmer_cape). Como toda a kit do Lich é mágica e de longo alcance, ele raramente está no corpo a corpo, então o cape costuma salvar o aliado que está sendo focado, não ele mesmo.
- fonte: items.json (glimmer_cape)

#### Blink Dagger (blink)
- porque: fecha distância pra acertar Frost Blast e Chain Frost em alvos que só chegam perto quando já estão agrupados.
- detalhe: teleporta 1200 de distância instantaneamente (`items.json`, blink). Nenhuma habilidade do Lich dá mobilidade própria, então o blink é o jeito de iniciar o Chain Frost em cima de um grupo ou de se reposicionar antes de uma troca.
- contra: Meepo, Chaos Knight, Terrorblade e Beastmaster, porque Frost Shield reduz o dano físico das illusions/summons deles e o Chain Frost ameaça limpar o clone e o herói original ao mesmo tempo quando estão próximos; Lone Druid entra na mesma lógica porque o bounce pode acertar o Spirit Bear e o Lone Druid juntos (dotacoach.gg/en/heroes/counters/lich, lista "good against").
- combo: Blink + Chain Frost em cima de um grupo de illusions/summons (Meepo, Chaos Knight, Terrorblade, Beastmaster, Lone Druid) limpa várias unidades de uma vez, porque o bounce prioriza unidades próximas umas das outras.
- fonte: items.json (blink); dotacoach.gg/en/heroes/counters/lich

### Situacionais
#### Ghost Scepter (ghost)
- porque: imunidade a dano físico pra sobreviver ao burst de um carry físico focando o suporte.
- detalhe: deixa etéreo por 4s, imune a ataques físicos, mas aumenta em 30% o dano mágico recebido nesse período (`items.json`, ghost). É pânico barato (1500 de ouro) pra um herói sem fuga própria.
- contra: Phantom Lancer, Spectre e Juggernaut aparecem na lista de piores matchups do Lich por win rate na dotacoach.gg; são carries físicos que fecham em cima do suporte, e o Ghost Scepter zera esse dano por 4s.
- fonte: items.json (ghost); dotacoach.gg/en/heroes/counters/lich

#### Solar Crest (solar_crest)
- porque: dá armadura, velocidade de ataque e de movimento pro carry aliado na troca, com um escudo que absorve dano físico.
- detalhe: o ativo (7s), lançado num aliado, dá 5 de armadura, 60 de velocidade de ataque, 15% de velocidade de movimento e um escudo que absorve até 350 de dano físico; não dá esses bônus se usado em si mesmo. O item também dá, de forma passiva pra quem carrega, 7 de armadura, 25 de velocidade de movimento, 200 de mana e 200 de vida (`items.json`, solar_crest). Nos dados oficiais o ativo só tem alvo aliado (`target_team: Friendly`); não existe variante de debuff em inimigo.
- contra: os mesmos carries físicos da lista de piores matchups do Lich por win rate (Phantom Lancer, Spectre, Juggernaut: dotacoach.gg/en/heroes/counters/lich); o escudo físico e o bônus de armadura ajudam o carry aliado a sobreviver ao burst deles até o time conseguir focar esse alvo.
- fonte: items.json (solar_crest); dotacoach.gg/en/heroes/counters/lich

#### Aghanim's Scepter (ultimate_scepter)
- porque: dá a habilidade Ice Spire, uma estrutura de zoneamento que desacelera e explode quando destruída.
- detalhe: no arquivo oficial de habilidades por herói, Lich tem uma habilidade extra fora do kit normal (Frost Blast, Frost Shield, Sinister Gaze, Chain Frost) e do innate Sacrifice: `lich_ice_spire`: o mesmo padrão usado pra identificar a habilidade de scepter de outros heróis, como o `tinker_march_of_the_machines` do Tinker (`constants_hero_abilities.json`). Ice Spire aguenta 4 hits de herói ou 8 de creep, desacelera 25% em 550 de raio por 15s, e quando é destruída solta um Frost Blast na área (`constants_abilities.json`, lich_ice_spire).
- combo: Frost Shield em cima da Ice Spire cura a torre (cada tick recupera o equivalente a 1 ataque de herói de vida pra ela); Chain Frost pode quicar na Spire quando não há outro alvo inimigo por perto, mantendo o combo de slow ativo numa área (`constants_abilities.json`, lich_ice_spire).
- fonte: constants_hero_abilities.json; constants_abilities.json (lich_ice_spire)

#### Black King Bar (black_king_bar)
- porque: imunidade a debuff pra sobreviver a stuns em sequência que travam o Lich antes dele soltar o Chain Frost.
- detalhe: dá imunidade a magia/debuff por 7 a 9s (dependendo do nível) e 60% de redução de dano mágico enquanto ativo (`items.json`, black_king_bar). Lich não tem fuga própria, então contra lockdown pesado ele literalmente não age sem isso.
- contra: Nyx Assassin e Shadow Shaman aparecem na lista de piores matchups do Lich por win rate na dotacoach.gg; os dois dependem de stun de setup (Impale, Hex) que o BKB bloqueia.
- fonte: items.json (black_king_bar); dotacoach.gg/en/heroes/counters/lich

## Roshan
Sem dado de Roshan solo. Lich não aparece como solo killer em nenhum dos resumos curados (`resumo_por_heroi.json`, `resumo_com_suporte.json`); nos dois, a lista de heróis que soloaram Roshan não inclui Lich: ele só aparece de forma incidental em `resumo_com_suporte.json`, citado 1x em algumas listas como suporte presente no fosso durante o solo de outro herói, o que não é um solo kill dele. O dataset bruto de candidatos (`early_rosh_pro.json`) tem só 2 ocorrências do hero_id 31 perto de Roshan sozinho, sem confirmação na curadoria, então não entraram no resumo.
