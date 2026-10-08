---
id: ficha-earth_spirit
titulo: "Earth Spirit"
heroi: Earth Spirit
patch: 7.41
posicoes: [2, 3, 4]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-tier1/data/draft.csv
- dota-tier1/data/derivados/compras.parquet
- dota-tier1/data/derivados/objetivos.parquet
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- https://www.dota2protips.com/heroes/earth_spirit
- https://api.opendota.com/api/heroes/107/itemPopularity
---

## Resumo
Earth Spirit é um disabler/iniciador de Força: usa Stone Remnant pra turbinar Rolling Boulder (rola mais rápido, mais longe e atordoa mais tempo em cima de uma pedra) e Boulder Smash (arrasta e bate dano em linha), fechando troca com Magnetize (dano contínuo em área que detona pedras próximas e reaplica o efeito). No recorte Tier 1 do 7.41 ele entrou em 350 das partidas analisadas (211 bans, 139 picks) e 76 dos 139 picks saíram já na 1ª fase do draft, ou seja, prioridade e não resposta ao time inimigo. Dentro dos picks, 79,9% (111 de 139) foram posição 2 (mid, 62,2% de vitória), 10,1% (14) posição 4 (suporte de roaming, 50,0%) e 9,4% (13) posição 3 (offlane, 53,8%): dota-tier1/data/draft.csv. Em pub Legend+ a distribuição segue parecida: mid concentra 41% dos jogos (51% de vitória), soft support 31% e offlane 16% (dota2protips.com/heroes/earth_spirit).

## Pos 2 (mid)
- quando pegar: pick de prioridade (76 das 139 partidas picks saem na 1ª fase do draft) pra abrir a rota com Rolling Boulder em cima do Stone Remnant contra o mid inimigo e fazer dano sem gastar vida própria: dota-tier1/draft.csv.
- itens iniciais: bottle, tango, magic_stick

### Build
#### Bottle (bottle)
- minuto: 1,4 (1:26)
- porque: enche no rio e sustenta mana/vida na lane sem precisar voltar à base pra comprar.
- detalhe: ES gasta mana o jogo inteiro (Stone Remnant, Rolling Boulder, Magnetize), então o Bottle cobre o buraco até o 1º item de mana. Também guarda a runa de poder do rio a partir das 2:00.
- fonte: dota-tier1/derivados/compras.parquet (117 partidas pos 2, 96% compram)

#### Magic Wand (magic_wand)
- minuto: 3,6 (3:33, receita aos 2:54)
- porque: carga rápida de HP/mana contra poke de lane, sem gastar feitiço.
- detalhe: mais barato e mais rápido que esperar regen; segura trade ruim contra nuke de lane sem precisar recuar.
- fonte: dota-tier1/derivados/compras.parquet (99%)

#### Boots of Speed (boots)
- minuto: 5,4 (5:24)
- porque: mobilidade extra de lane antes de fechar o Power Treads.
- detalhe: item de passagem, sem ativa; todo o valor vem do upgrade pra Treads.
- fonte: dota-tier1/derivados/compras.parquet (100%)

#### Power Treads (power_treads)
- minuto: 8,8 (8:46)
- porque: velocidade de ataque e troca de atributo (Força) pra farmar last hit e aguentar trade físico.
- detalhe: componentes Luvas de Agilidade e Belt of Strength sobre as Boots. Earth Spirit fica em Força pra maximizar vida, já que ele não depende de dano de ataque.
- fonte: dota-tier1/derivados/compras.parquet (99%); dota-imortal/items.json (power_treads)

#### Urn of Shadows (urn_of_shadows)
- minuto: 8,1 (8:08, receita aos 8:00)
- porque: ativa cura 30 HP/s em aliado ou dá 25 de dano/s a cada segundo em alvo inimigo marcado.
- detalhe: Soul Release dura 8s e ganha carga sempre que um herói morre a 1500 de distância. Em lane de 2 contra 2 funciona tanto pra sustentar o parceiro quanto pra acelerar kill.
- fonte: dota-imortal/items.json (urn_of_shadows); dota-tier1/derivados/compras.parquet (92%)

#### Spirit Vessel (spirit_vessel)
- minuto: 13,1 (13:05, receita aos 12:43; Diadem aos 11:06)
- porque: a mesma ativa do Urn, só que contra inimigo reduz a cura dele em 70% e ainda drena 4% da vida atual por segundo.
- detalhe: upgrade de Urn of Shadows + Diadem (1000 de ouro, +6 em todos os atributos). Vira o item de utilidade padrão pra lutas em grupo a partir dos 13 min.
- contra: heróis ou itens que dependem de regeneração/lifesteal alto pra vencer troca (a redução de 70% na restauração de vida anula isso).
- fonte: dota-imortal/items.json (spirit_vessel, urn_of_shadows, diadem); dota-tier1/derivados/compras.parquet (91%)

#### Black King Bar (black_king_bar)
- minuto: 21,9 (21:54, receita aos 21:31)
- porque: Avatar dá 60% de resistência mágica e anula efeito negativo de feitiço (exceto dano puro/refletido) por até 9s, com dispel básico ao ativar.
- detalhe: componentes Mithril Hammer (19:32) e Ogre Axe. Earth Spirit entra numa luta ligando o BKB antes de Rolling Boulder ou Magnetize, pra não ser travado por stun/silence no meio do combo.
- contra: comps de disable de alvo único ou silence: os piores confrontos do próprio ES no Legend+ são justamente Enigma, Marci, Razor, Ember Spirit e Templar Assassin, perfil que o Avatar neutraliza (dota2protips.com/heroes/earth_spirit).
- combo: BKB ativo + Rolling Boulder/Magnetize em cima do time inimigo agrupado: inicia a troca imune a stun/hex de retaliação pelos 9s de duração.
- fonte: dota-imortal/items.json (black_king_bar); dota-tier1/derivados/compras.parquet (93%); dota2protips.com/heroes/earth_spirit

#### Kaya and Sange (kaya_and_sange)
- minuto: 30,3 (30:16; Kaya aos 23:00, Sange aos 29:51)
- porque: +12% de amplificação mágica, +20% de restauração de vida e +25% de resistência a redução de mana, além de 25% de resistência a lentidão.
- detalhe: junta dano mágico (Rolling Boulder, Magnetize, Boulder Smash) com sobrevivência; a resistência a slow ajuda a não ser pego parado pra levar o combo completo.
- fonte: dota-imortal/items.json (kaya_and_sange); dota-tier1/derivados/compras.parquet (62%)

### Situacionais
#### Shiva's Guard (shivas_guard)
- minuto: 31,5 (31:30, receita aos 31:08)
- porque: Arctic Blast tira -40% de movimento em área e a aura Freezing reduz -45 de velocidade de ataque dos inimigos perto.
- detalhe: ativo de 260 de dano mágico em 825 de raio, serve como segunda iniciação ou pra travar quem está fugindo depois do combo de Remnant.
- contra: carries de hit rápido ou kiters que dependem de velocidade de ataque/movimento pra te bater ou escapar.
- fonte: dota-imortal/items.json (shivas_guard); dota-tier1/derivados/compras.parquet (70% completam, amostra de 117 partidas pos 2)

#### Octarine Core (octarine_core)
- minuto: 38,5 (38:33)
- porque: +25% de redução de recarga pra ligar Stone Remnant, Rolling Boulder e Magnetize com mais frequência.
- combo: menos recarga em Stone Remnant (base 18s pra recarregar carga) deixa mais pedra no mapa pra detonar em sequência com Magnetize.
- fonte: dota-imortal/items.json (octarine_core, constants_abilities.json); dota-tier1/derivados/compras.parquet (21% completam; componentes em 46-55% das partidas)

## Pos 3 (offlane)
- quando pegar: é a posição menos usada das três reais (13 de 139 picks, 9,4%; só 6 dessas partidas têm replay com dados de item). ES na offlane troca farm por trade: Rolling Boulder abre contra a dupla da safelane inimiga e o Soul Ring sustenta sem depender do suporte: dota-tier1/draft.csv e derivados/compras.parquet (amostra pequena, tratar como indicativo).
- itens iniciais: tango, branches, gauntlets, flask

### Build
#### Urn of Shadows (urn_of_shadows)
- minuto: 4,6 (4:34, receita aos 4:19)
- porque: mesma ativa da versão mid (cura 30 HP/s ou 25 de dano/s), comprado mais rápido aqui por não ter Bottle antes.
- detalhe: sustenta a troca de 2 contra 1 ou 2 contra 2 da offlane sem gastar viagem à base.
- fonte: dota-imortal/items.json (urn_of_shadows); dota-tier1/derivados/compras.parquet (100% das 6 partidas)

#### Boots of Speed (boots)
- minuto: 6,7 (6:44)
- porque: mobilidade pra sair de gank de 2x1 na offlane.
- fonte: dota-tier1/derivados/compras.parquet (100%)

#### Power Treads (power_treads)
- minuto: 10,9 (10:55)
- porque: velocidade de ataque e Força extra pra aguentar trade físico sem suporte por perto.
- fonte: dota-tier1/derivados/compras.parquet (100%)

#### Soul Ring (soul_ring)
- minuto: 11,4 (11:26, receita aos 11:01)
- porque: converte vida em mana (ativo), sustenta feitiço sem depender do suporte puxar o lado.
- detalhe: componentes Ring of Protection + 2 Gauntlets. É a diferença entre a offlane e a mid: aqui ES não tem Bottle, então precisa de fonte própria de mana.
- fonte: dota-imortal/items.json (soul_ring); dota-tier1/derivados/compras.parquet (100%)

#### Spirit Vessel (spirit_vessel)
- minuto: 15,1 (15:08; Diadem aos 12:39)
- porque: mesmo efeito da versão mid, 70% menos cura e 4% de drenagem de vida atual por segundo no alvo.
- contra: heróis ou itens de regeneração/lifesteal alto.
- fonte: dota-imortal/items.json (spirit_vessel); dota-tier1/derivados/compras.parquet (67%)

#### Black King Bar (black_king_bar)
- minuto: 22,6 (22:34)
- porque: Avatar dá imunidade a efeito negativo de feitiço por até 9s, pra iniciar sem ser travado primeiro.
- combo: BKB ativo antes de Rolling Boulder/Magnetize numa luta de grupo, igual na mid.
- fonte: dota-imortal/items.json (black_king_bar); dota-tier1/derivados/compras.parquet (83%)

### Situacionais
#### Aghanim's Shard (aghanims_shard)
- minuto: 32,2 (32:13)
- porque: baixa a recarga de Geomagnetic Grip pra 3s e aumenta a velocidade de puxão e o alcance em aliado.
- combo: Grip com recarga baixa vira ferramenta de salvamento repetida, não só um puxão por luta.
- fonte: dota2protips.com/heroes/earth_spirit; dota-tier1/derivados/compras.parquet (50% das 6 partidas)

#### Shiva's Guard (shivas_guard)
- minuto: 29,9 (29:54)
- porque: -40% de movimento em área e -45 de velocidade de ataque dos inimigos perto, mesmo efeito da versão mid.
- contra: carries de hit rápido ou que dependem de kite.
- fonte: dota-imortal/items.json (shivas_guard); dota-tier1/derivados/compras.parquet (33%)

## Pos 4 (suporte de roaming)
- quando pegar: 14 das 139 partidas picks (10,1%). Aqui ES troca item de carry por ward, Smoke e detecção, e vira ferramenta de save/iniciação: Geomagnetic Grip pra puxar aliado em risco ou arrastar um Remnant por cima do time inimigo agrupado: dota-tier1/draft.csv e derivados/compras.parquet; dota2protips.com/heroes/earth_spirit (combo de Grip).
- itens iniciais: flask, tango, ward_sentry, blood_grenade

### Build
#### Boots of Speed (boots)
- minuto: 8,4 (8:23)
- porque: mobilidade pra roam cedo entre lanes.
- fonte: dota-tier1/derivados/compras.parquet (80% das 15 partidas)

#### Urn of Shadows (urn_of_shadows)
- minuto: 9,9 (9:54, receita aos 9:19)
- porque: cura 30 HP/s em aliado ferido no gank ou dá 25 de dano/s em alvo pra fechar kill.
- fonte: dota-imortal/items.json (urn_of_shadows); dota-tier1/derivados/compras.parquet (80%)

#### Essence Distiller (essence_distiller)
- minuto: 19,8 (19:48, receita aos 18:56)
- porque: além da cura/dano do Urn, pode ficar parado no chão até 15s e agarrar o 1º inimigo que passar, dando True Sight e visão compartilhada dele.
- detalhe: componentes Urn of Shadows + Chainmail + Wizard Hat. É detecção passiva pra flanco de gank, não só sustain.
- fonte: dota-imortal/items.json (essence_distiller); dota-tier1/derivados/compras.parquet (73%)

#### Blink Dagger (blink)
- minuto: 23,5 (23:29)
- porque: 1200 de alcance de teleporte pra entrar na luta ou puxar aliado perto o bastante pro Geomagnetic Grip.
- detalhe: fica 3s travado depois de levar dano de herói ou Roshan.
- combo: Blink pra perto do grupo inimigo + Geomagnetic Grip puxando um Remnant por cima deles: dano e silence em quem for atingido no caminho, ou puxa um aliado pra fora do cerco: dota2protips.com/heroes/earth_spirit.
- fonte: dota-imortal/items.json (blink); dota-tier1/derivados/compras.parquet (87%)

### Situacionais
#### Aether Lens (aether_lens)
- minuto: 31,6 (31:38, receita aos 30:52)
- porque: +225 de alcance de feitiço, pra lançar Geomagnetic Grip ou Boulder Smash de mais longe sem entrar no alcance de retaliação.
- detalhe: componentes Void Stone + Energy Booster; também soma com o alcance do Shard.
- fonte: dota-imortal/items.json (aether_lens); dota-tier1/derivados/compras.parquet (67%)

#### Aghanim's Shard (aghanims_shard)
- minuto: 28,1 (28:07)
- porque: baixa a recarga de Geomagnetic Grip pra 3s e aumenta velocidade de puxão e alcance em aliado.
- combo: Grip de recarga baixa junto com o roam vira save repetido pra qualquer lane que estiver sendo pressionada.
- fonte: dota2protips.com/heroes/earth_spirit; dota-tier1/derivados/compras.parquet (40% das 15 partidas)

## Roshan
Earth Spirit não aparece no dataset de Roshan solo (resumo_por_heroi.json e resumo_com_suporte.json só cobrem carries de farm puro, como Medusa, Alchemist e Phantom Assassin): não há minuto, nível ou item de solo registrado pra ele. Nos replays Tier 1 do 7.41 (objetivos.parquet) ele deu o golpe final no Roshan em 15 das 139 partidas picks (11%), minuto mediano 27:10, sempre em cenário de grupo e não de pick isolado: o kit (Magnetize é dano contínuo em área, não um nuke de alvo único) não indica solo e os dados confirmam que ele não costuma fazer.
