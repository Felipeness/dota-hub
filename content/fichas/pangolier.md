---
id: ficha-pangolier
titulo: "Pangolier"
heroi: Pangolier
patch: 7.41
posicoes: [2, 3]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- https://api.opendota.com/api/heroes/120/itemPopularity
- https://api.opendota.com/api/heroes/120/matchups
- https://api.opendota.com/api/benchmarks?hero_id=120
- https://liquipedia.net/dota2/api.php?action=parse&page=Pangolier&format=json&prop=wikitext
---

## Resumo

Pangolier é um herói corpo a corpo all-around (Carry/Nuker/Disabler/Durable/Escape/Initiator no OpenDota) que vive de iniciar com Swashbuckle e Rolling Thunder e depois limpar a luta com o burst das 3 strikes do dash. No Tier 1 do patch 7.41 ele é quase só mid: 155 das 224 partidas draftadas (69%) foram pos 2, com 52,9% de vitória, contra 65 (29%) de pos 3 offlane, com 55,4% de vitória, e só 4 (1,8%) de pos 1, amostra pequena demais pra contar (dota-tier1, draft.csv). Em partidas públicas recentes a mediana é 525 de ouro por minuto e 613 de dano por minuto (OpenDota benchmarks, hero_id 120).

## Pos 2 (mid)

- quando pegar: é a posição real do herói no patch: 155 de 224 partidas de Tier 1 7.41 (69%), 52,9% de vitória (dota-tier1, draft.csv). Rende bem contra mid sem disable de longo alcance, porque Swashbuckle atravessa Black King Bar (bkbpierce: Yes no dado da habilidade).
- itens iniciais: branches, tango, faerie_fire, bottle

### Build
#### Power Treads (power_treads)
- porque: dá velocidade de ataque pra conectar auto attack e Swashbuckle, e deixa trocar pra Força quando a lane fica dura.
- detalhe: é a bota mais comprada do herói em pub (51 vezes como item de early game e mais 34 no mid game, acima de Phase Boots e Arcane Boots). Sem dado de minuto exato vindo do Tier 1, porque o rastreador de itens do dota-tier1 não cobre botas.
- fonte: OpenDota itemPopularity (hero_id 120, early_game_items e mid_game_items)

#### Diffusal Blade (diffusal_blade)
- minuto: 12:25
- porque: cada strike do Swashbuckle ativa o Manabreak do Diffusal, então uma dash só já queima mana e ainda bate dano extra.
- detalhe: Swashbuckle tem a flag "procs_onhit_effects" no dado da habilidade, ou seja, os 3 golpes contam como ataque pra efeitos on hit. Manabreak queima 40 de mana por acerto e causa 1 de dano físico por mana queimada: 3 strikes dão até 120 de mana queimada e 120 de dano bônus numa dash só, sem contar o dano base do Swashbuckle. É o primeiro item núcleo comprado pelo herói no Tier 1, antes de Blink e Scepter (154 de 168 jogos pos 2 com dado de item rastreado, mediana 12:25).
- contra: heróis que dependem de reserva de mana pra fugir, canalizar ult ou spamar feitiço (o Manabreak não ativa em ilusões, então não ajuda contra heróis de clone).
- combo: Diffusal com Swashbuckle no nível 4 (3/3 strikes) já queima os 120 de mana de uma vez, antes mesmo de trocar golpe no corpo a corpo.
- fonte: itens_chave.parquet (dota-tier1, mediana pos 2); items.json (Diffusal Blade, Manabreak); constants_abilities.json (Swashbuckle, procs_onhit_effects)

#### Blink Dagger (blink)
- minuto: 18:21
- porque: fecha os 1200 de distância do blink pra iniciar com Rolling Thunder ou acertar o Swashbuckle certo, sem gastar a dash da própria habilidade pra chegar.
- detalhe: item mais comprado no Tier 1 nessa posição (164 de 168 jogos com dado de item rastreado, mediana 18:21), na frente até do Diffusal (154). Lembrando que o Blink não pode ser usado nos 3 segundos depois de levar dano de herói ou de Roshan.
- contra: lineups sem disable de longo alcance, onde o time inimigo só reage depois que você já iniciou.
- combo: Blink seguido de Rolling Thunder entra na luta já batendo e atordoando quem estiver no caminho da bola.
- fonte: itens_chave.parquet (dota-tier1, mediana pos 2); items.json (Blink Dagger)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 25:37
- porque: com a Scepter, o Shield Crash dispara um Swashbuckle menor atrás de Pangolier, dobrando a área de dano e barreira do mesmo cast.
- detalhe: o texto exato do upgrade vem da wiki da Liquipedia ("With Aghanim's Scepter, it also casts a lesser Swashbuckle behind him"). É o 3º item mais comum do Tier 1 nessa posição (153 de 168 jogos com dado de item rastreado, mediana 25:37) e o único upgrade de habilidade confirmado em fonte de texto, já que o dado local (constants_abilities.json) só tem o número "scepter_damage_outgoing_tooltip: 75" sem a descrição.
- combo: Shield Crash com Scepter cobre a frente e as costas de Pangolier ao mesmo tempo, útil pra limpar duas ondas de inimigos cercando ele numa luta em grupo.
- fonte: itens_chave.parquet (dota-tier1, mediana pos 2); liquipedia.net/dota2/Pangolier (wikitext via api.php)

#### Aghanim's Shard (aghanims_shard)
- porque: libera o Roll Up, a bola com 80% de resistência mágica e imunidade a debuff que deixa Pangolier esperar ou recuar de uma troca ruim.
- detalhe: pela Liquipedia, o Roll Up "Requires the Aghanim's Shard": sem o Shard, essa habilidade nem aparece. Em jogos pub é comprado no meio de jogo quase tanto quanto os itens núcleo (76 ocorrências, atrás de Blink com 92 e Diffusal Blade com 91). O dota-tier1 não rastreia esse item nos itens-chave, então não há minuto de pro pra citar.
- fonte: liquipedia.net/dota2/Pangolier (wikitext via api.php, Roll Up); OpenDota itemPopularity (mid_game_items)

### Situacionais
#### Mage Slayer (mage_slayer)
- minuto: 13:09
- contra: lineups com muito dano mágico e feitiço de controle, porque o debuff do Mage Slayer corta 40% do dano de feitiço do alvo por 3s a cada acerto, em cima do que o Swashbuckle já aplica 3 vezes.
- detalhe: entrou em 29 das 168 partidas de pos 2 do Tier 1 com dado de item rastreado, com mediana de compra bem cedo (13:09), quase junto com o Diffusal, o que mostra que às vezes substitui o Diffusal contra lineup de magos.
- fonte: itens_chave.parquet (dota-tier1, pos 2); items.json (Mage Slayer)

#### Skull Basher / Abyssal Blade (basher)
- minuto: 35:00
- contra: alvos com blink ou boots pra fugir da luta corpo a corpo, porque o Basher trava o alvo no lugar.
- detalhe: com 25% de chance de bash por strike melee, as 3 strikes do Swashbuckle dão cerca de 58% de chance de pelo menos 1 bash numa dash só (cálculo em cima da chance de 25% documentada no item, 1 menos 0,75³; não é número medido em partida real). Comprado em 76 de 168 jogos pos 2 com dado de item rastreado (mediana 35:00); evoluiu pra Abyssal Blade em 15 desses jogos (mediana 50:35).
- combo: Swashbuckle com Basher: a própria dash já trava o alvo antes de fechar com Rolling Thunder.
- fonte: itens_chave.parquet (dota-tier1, pos 2); items.json (Skull Basher, bash_chance_melee)

#### Octarine Core (octarine_core)
- minuto: 37:01
- contra: jogo que vira troca de habilidade contínua, porque a redução de 25% de recarga deixa o Rolling Thunder e o Shield Crash saindo de novo mais rápido.
- detalhe: comprado em 64 de 168 jogos pos 2 com dado de item rastreado (mediana 37:01), geralmente depois do Soul Booster (mediana 34:28, componente do item).
- fonte: itens_chave.parquet (dota-tier1, pos 2); items.json (Octarine Core)

#### Shiva's Guard (shivas_guard)
- minuto: 36:06
- contra: lineup de dano físico contínuo (right click), porque a Freezing Aura reduz 45 de velocidade de ataque de quem está perto e o Arctic Blast ainda desacelera 40% em área por 4s (não atordoa, só slow).
- detalhe: comprado em 29 de 168 jogos pos 2 com dado de item rastreado (mediana 36:06).
- fonte: itens_chave.parquet (dota-tier1, pos 2); items.json (Shiva's Guard)

#### Disperser (disperser, via Eaglesong)
- minuto: 39:12
- contra: debuffs que travam Pangolier antes dele entrar em Rolling Thunder ou Roll Up, porque o Suppress dispela o próprio Pangolier e ainda queima mana do inimigo no corpo a corpo.
- detalhe: Eaglesong sozinho (puro dano em agilidade) aparece em 52 de 168 jogos pos 2 com dado de item rastreado (mediana 38:59) e evolui pra Disperser, que junta o Manabreak do Diffusal com um dispel ativo, em outros 52 jogos (mediana 39:12).
- fonte: itens_chave.parquet (dota-tier1, pos 2); items.json (Disperser)

#### Linken's Sphere (sphere)
- minuto: 33:28
- contra: feitiço de alvo único forte, como o Sharpshooter do Hoodwink: Hoodwink é o pior matchup de Pangolier entre os heróis com mais jogos no dado de matchup (45,7% de vitória em 416 partidas), e o Spellblock do Linken's bloqueia a maioria dos feitiços de alvo único a cada 14s.
- detalhe: comprado em 20 de 168 jogos pos 2 com dado de item rastreado (mediana 33:28).
- fonte: itens_chave.parquet (dota-tier1, pos 2); items.json (Linken's Sphere, Spellblock); OpenDota matchups (hero_id 120)

#### Nullifier (nullifier)
- minuto: 35:25
- contra: buffs de fuga ou de dano que podem ser dispelados, porque o Nullify dispela e ainda deixa o alvo mais lento por 4s.
- detalhe: comprado em 23 de 168 jogos pos 2 com dado de item rastreado (mediana 35:25).
- fonte: itens_chave.parquet (dota-tier1, pos 2); items.json (Nullifier)

## Pos 3 (offlane)

- quando pegar: segunda posição real do herói: 65 de 224 partidas de Tier 1 7.41 (29%), 55,4% de vitória, mas com menos da metade da amostra do pos 2 (dota-tier1, draft.csv).
- itens iniciais: branches, tango, quelling_blade, faerie_fire

### Build
#### Diffusal Blade (diffusal_blade)
- minuto: 13:14
- porque: mesma lógica do pos 2 (Manabreak em 3 instâncias por Swashbuckle), só que chega cerca de 1 minuto depois porque a lane de offlane farma mais devagar.
- detalhe: comprado em 36 de 54 jogos pos 3 com dado de item rastreado.
- fonte: itens_chave.parquet (dota-tier1, mediana pos 3)

#### Blink Dagger (blink)
- minuto: 18:38
- porque: mesmo papel do pos 2, fechar distância pra iniciar.
- detalhe: comprado em 54 de 54 jogos pos 3 com dado de item rastreado, item mais comum nessa posição (praticamente todo jogo tem Blink).
- fonte: itens_chave.parquet (dota-tier1, mediana pos 3)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 26:34
- porque: mesmo upgrade do Shield Crash do pos 2 (lesser Swashbuckle atrás dele), só que chega quase 1 minuto depois.
- detalhe: comprado em 46 de 54 jogos pos 3 com dado de item rastreado.
- fonte: itens_chave.parquet (dota-tier1, mediana pos 3); liquipedia.net/dota2/Pangolier (wikitext via api.php)

### Situacionais
#### Mage Slayer (mage_slayer)
- minuto: 11:38
- contra: offlane contra lineup de magia pesada, onde o debuff de -40% de dano de feitiço ajuda a aguentar a lane 2x1 ou 2x2.
- detalhe: comprado em 25 de 54 jogos pos 3 com dado de item rastreado (46%, proporção maior que no pos 2), com mediana bem mais cedo que no pos 2 (11:38 contra 13:09), o que indica que no offlane ele entra como resposta de lane e não só de meio de jogo.
- fonte: itens_chave.parquet (dota-tier1, mediana pos 3)

#### Skull Basher (basher)
- minuto: 36:53
- contra: mesmo uso do pos 2, travar quem tenta fugir da luta corpo a corpo.
- detalhe: comprado em 20 de 54 jogos pos 3 com dado de item rastreado.
- fonte: itens_chave.parquet (dota-tier1, mediana pos 3)

#### Octarine Core (octarine_core)
- minuto: 35:41
- contra: mesmo uso do pos 2, luta longa de troca contínua de habilidade.
- detalhe: comprado em 21 de 54 jogos pos 3 com dado de item rastreado.
- fonte: itens_chave.parquet (dota-tier1, mediana pos 3)

## Roshan

Sem dado de Roshan solo.
