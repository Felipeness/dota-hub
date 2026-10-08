---
id: ficha-chaos_knight
titulo: "Chaos Knight"
heroi: Chaos Knight
patch: 7.41
posicoes: [1, 2]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-roshan-solo/data/solos.json
- dota-tier1/data/draft.csv
- dota-tier1/data/derivados/compras.parquet
- dota-tier1/data/derivados/jogadores_replay.parquet
- https://api.opendota.com/api/heroes/81/itemPopularity
- https://dota2protracker.com/hero/legacy/Chaos+Knight
- https://dotacoach.gg/en/heroes/chaos-knight/builds
- https://dotacoach.gg/en/items/power-treads
- https://dotacoach.gg/en/items/armlet-of-mordiggian
---

## Resumo
Chaos Knight é carry de força corpo a corpo que empurra lane e limpa onda com Chaos Strike (crítico com lifesteal, que também vale pros seus fantasmas) e fecha jogo com Phantasm, ultimate que cria cópias batendo 100% do dano dele. No patch 7.41 ele é pick raro (~1,0 a 1,1% em partidas 7000-8500 MMR, dota2protracker) e quase sempre vai pra pos 1: das 7 partidas de 7.41 no Atlas Tier1 (draft.csv), 6 foram pos 1 e 1 foi pos 2, e em 5 delas ele foi o 4º ou 5º pick do time (último ou penúltimo), o que sugere contra-pick/flex tardio mais do que prioridade de draft.

## Pos 1 (carry)
- quando pegar: carry de safelane que não depende de farm perfeito pra ser relevante, já que empurra torre com ilusões e pode fechar luta sozinho com Phantasm. Nas 6 partidas pro analisadas no 7.41 ele foi pick tardio (4ª/5ª escolha do time) em 5 delas, perfil de contra-pick (Atlas Tier1 draft.csv).
- itens iniciais: tango (nas 6 partidas) e enchanted_mango (em 3 das 6)

### Build
#### Power Treads (power_treads)
- minuto: 6:24
- porque: ataque mais rápido pra puxar camp e wave cedo; trocar pra Força antes da luta soma dano (atributo primário) e vida.
- detalhe: primeira bota em 6 das 6 partidas pro analisadas. O toggle de atributo é copiado pelos fantasmas do Phantasm (ilusões herdam o estado ligado/desligado de itens), então a troca pra Força também vale pras cópias.
- combo: Agilidade pra farmar, Força antes de engajar ou usar Phantasm.
- fonte: compras.parquet; items.json (Power Treads, Switch Attribute); dotacoach.gg/en/items/power-treads (entrada de Chaos Knight: "the movement speed, attributes, and attack speed also affect the Phantasm illusions")

#### Helm of Iron Will (helm_of_iron_will)
- minuto: 9:24
- porque: regen barata segura CK na lane sem precisar recuar pra trocar com Chaos Bolt.
- detalhe: componente de 975 de ouro, sem efeito próprio além do regen; é só a ponte até o Armlet, comprado em sequência nas 6 partidas.
- fonte: compras.parquet; items.json

#### Armlet of Mordiggian (armlet)
- minuto: 11:30
- porque: +35 de dano total e +25 de força sob demanda, sem travar o cast de Reality Rift ou Phantasm.
- detalhe: ativar/desativar não interrompe canalização, e o dreno de vida (45/s) nunca mata o herói sozinho quando o item desliga. O bônus é "dano total", então conta pra cada fantasma do Phantasm também, já que ilusões herdam esse tipo de bônus e o estado ligado/desligado do item.
- contra: burst mágico pesado; desligar antes de levar o nuke, porque o dreno de vida soma ao dano que já vem vindo.
- combo: ligar o Unholy Strength antes do Phantasm: o +35 de dano aparece em cada cópia também.
- fonte: items.json (Armlet of Mordiggian, Unholy Strength); dotacoach.gg/en/items/armlet-of-mordiggian ("cannot die from the health drain when activated, nor from the strength loss when deactivated"; entrada de Chaos Knight: "its active bonus strength is passed to your Phantasm illusions as well")

#### Echo Sabre (echo_sabre)
- minuto: 15:54
- porque: ataque duplo com 100% de lentidão na primeira batida, prende quem o Reality Rift acabou de puxar.
- detalhe: presente em 4 das 6 partidas pro. No 7.41 o item é "ataque duas vezes" (Echo Strike), diferente do mana burn de patches antigos.
- combo: Reality Rift puxa e reduz armadura, o ataque duplo do Echo Sabre trava o alvo antes do time chegar.
- fonte: compras.parquet; items.json (Echo Sabre, Echo Strike)

#### Blink Dagger (blink)
- minuto: 19:36
- porque: fecha distância pra iniciar antes do alcance do Reality Rift, ou reposiciona pra soltar o Phantasm.
- detalhe: comprado em 5 das 6 partidas, perto do nível 6 (Phantasm). Nenhuma outra ferramenta do CK fecha distância tão rápido no early-mid.
- combo: blink em cima do alvo, Phantasm no nível 6+, time entra já com 2 a 4 corpos batendo.
- fonte: compras.parquet; items.json (Blink Dagger)

#### Black King Bar (black_king_bar)
- minuto: 27:18
- porque: sem imunidade, Chaos Bolt e Reality Rift são anulados por BKB inimigo e qualquer stun trava o combo antes de ele sair.
- detalhe: comprado em 4 das 6 partidas. Chaos Strike (o crítico passivo) já atravessa imunidade a magia por conta própria, então o BKB do CK é pra ele sobreviver e acertar o combo, não pro dano em si.
- contra: lineups com silence/stun em cadeia que impediriam Phantasm ou Reality Rift de saírem.
- fonte: compras.parquet; constants_abilities.json (chaos_knight_chaos_bolt e chaos_knight_reality_rift com bkbpierce "No"; chaos_knight_chaos_strike com bkbpierce "Yes")

#### Harpoon (harpoon)
- minuto: 31:24
- porque: segundo gancho de aproximação (puxa pra distância de ataque corpo a corpo) pra quando o Reality Rift já foi gasto.
- detalhe: combina Echo Sabre + Diadem (presente em 5 das 6 partidas) e dá status gerais junto com o puxão "Draw Forth".
- combo: Reality Rift abre a luta, Harpoon busca quem fugiu depois.
- fonte: compras.parquet; items.json (Harpoon, Draw Forth)

### Situacionais
#### Heart of Tarrasque (heart)
- minuto: 38:54
- porque: pool de vida grande sustenta CK em lutas longas de atrito, onde o lifesteal do Chaos Strike já cobre o resto.
- detalhe: comprado em 3 das 6 partidas, sempre depois dos 30 minutos, quando o jogo já tinha virado teamfight repetido.
- contra: lineups de dano mágico sustentado/DoT em vez de burst, onde a regen por % de vida perdida compensa melhor.
- fonte: compras.parquet; items.json (Heart of Tarrasque, Behemoth's Blood)

#### Overwhelming Blink (overwhelming_blink)
- minuto: 42:30
- porque: segundo blink com dano em área e lentidão pós-teleporte, pra re-engajar quem sobrou do primeiro Blink Dagger.
- detalhe: comprado (via Reaver) em 2 das 6 partidas: a mais longa da amostra (68:59) e uma de 38:47. O Reaver aparece em 3 das 6 (as 3 mais longas, incluindo uma de 40:30), mas na partida de 40:30 ele nunca virou Overwhelming Blink, ficando só no componente, provavelmente pelos atributos.
- combo: segundo blink em quem sobreviveu ao primeiro engajamento; a explosão de 100 + 50% da força ainda soma com o Chaos Strike.
- fonte: compras.parquet; partidas.csv (duracao_s); items.json (Overwhelming Blink)

#### Manta Style (manta)
- minuto: 22:00
- porque: dispel básico mais 2 imagens extras pra empurrar ou dar visão, não pra dano: imagem corpo a corpo do Manta bate só 33%, bem menos que o 100% do Phantasm.
- detalhe: comprado em só 1 das 6 partidas; essa foi uma das duas partidas da amostra sem BKB (a outra também não levou Manta). Serve pra limpar debuff/silence e multiplicar presença no mapa, mas não substitui o Phantasm como fonte de dano.
- contra: silences ou debuffs que travariam o combo antes da luta; o Manta limpa e ainda sobra uma imagem de scout.
- fonte: compras.parquet; items.json (Manta Style, Mirror Image: "Melee images deal 33% damage... Illusions take 300% damage")

#### Khanda (angels_demise)
- minuto: 62:24
- porque: o próximo Chaos Bolt ou Reality Rift (ambos "unit target") sai com +250 de dano, quebra passiva do alvo e desacelera 30% por 4s.
- detalhe: só apareceu na partida mais longa da amostra (68 min), quando o jogo já era puro atrito e o time precisava de mais um efeito de utilidade por luta.
- combo: Empower Spell ligado, acerta o Chaos Bolt: stun, +250 de dano e quebra de passiva (evasão, lifesteal etc.) num cast só.
- fonte: compras.parquet; items.json (Khanda, Empower Spell)

#### Linken's Sphere (sphere)
- minuto: 52:12
- porque: bloqueia a próxima magia de alvo único a cada 14s, segura o primeiro disable forte de iniciação antes de entrar na luta.
- detalhe: só apareceu na mesma partida de 68 min do Khanda.
- contra: heróis que abrem com uma magia de alvo único só (hex, gancho, Doom e afins); não bloqueia itens neutros direcionados.
- fonte: compras.parquet; items.json (Linken's Sphere, Spellblock)

## Pos 2 (mid)
- quando pegar: amostra de 1 partida pro no 7.41 (Team Liquid x Yakult Brothers, draft.csv). O início muda pra kit de lane solo com visão (ward observer/sentry) em vez de Enchanted Mango, mas o corpo do build é o mesmo da rota pos 1.
- itens iniciais: tango, faerie_fire, quelling_blade, ward_observer

### Build
A base é a mesma do pos 1 (Power Treads aos 6:35, Helm of Iron Will aos 13:35, Armlet aos 13:55, Blink aos 30:44), com um item de mana extra por jogar solo sem suporte do lado:

#### Soul Ring (soul_ring)
- minuto: 15:39
- porque: mana a troco de vida pra manter Chaos Bolt saindo sempre que abre, além do Helm of Iron Will (que essa partida manteve, não trocou).
- detalhe: comprado logo depois do Armlet, como item extra de mana, porque o mid solo gasta Chaos Bolt pra zonear sem back-up do lado.
- fonte: compras.parquet; items.json (Soul Ring, Sacrifice)

#### Heart of Tarrasque (heart)
- minuto: 24:32
- porque: antecipa a sustentação de vida que no pos 1 só chega depois dos 30 min, compensando não ter saído da lane com stack de regen.
- detalhe: veio direto depois do Reaver, bem mais cedo que nas partidas pos 1 que levaram Heart.
- fonte: compras.parquet

### Situacionais
Amostra de 1 partida não mostra item exclusivo de pos 2; o padrão situacional é o mesmo do pos 1.

## Roshan
Chaos Knight não tem Roshan solo nos dados locais: não aparece em resumo_por_heroi.json, e nenhuma das 7 mortes de Roshan com CK em solos.json foi classificada como solo_puro, solo_com_suporte ou solo_ajuda_curta. Em 6 das 7 ele mata "em time" e em 1 como "finalização" (só o golpe final). Nas 7, o último golpe foi dele (ultimo_golpe=chaos_knight), e o dano dele sozinho foi de 42% a 71% do total gasto no Roshan (mediana ~53%), entre os minutos 12:36 e 33:32. Ou seja: ele carrega boa parte do dano em Roshan de grupo e costuma fechar o golpe, mas a amostra não mostra ele solando.
