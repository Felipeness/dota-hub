---
id: ficha-shadow_demon
titulo: "Shadow Demon"
heroi: Shadow Demon
patch: 7.41
posicoes: [4, 5]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-tier1/data/draft.csv
- dota-tier1/data/derivados/compras.parquet
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/79/itemPopularity
- https://dotacoach.gg/en/heroes/shadow-demon/builds/support
---

## Resumo
Shadow Demon é suporte de disable e setup: Disruption bane o alvo por 2,75s e cria 2 ilusões dele quando volta, Shadow Poison empilha dano que estoura depois (até 5 cargas multiplicadas), e a ultimate Demonic Purge remove buff positivo e desacelera até 100%, furando Black King Bar (constants_abilities.json, campo `bkbpierce: Yes`). No Tier 1 do 7.41 ele saiu quase sempre pos 4: 48 das 63 vezes que foi picado na base local de draft (dota-tier1/draft.csv), com 54,2% de vitórias (26V-22D); as outras 15 saíram pos 5, com 53,3% (8V-7D). A amostra pro na API pública está baixa neste patch (heroStats.json local: `pro_pick=1`), então os números de posição e de build desta ficha vêm do recorte Tier 1 local (replays lidos, não só draft), não da API.

## Pos 4 (suporte de roaming)
- quando pegar: pegue quando o time quer abrir rotação com disable em área e dano mágico a distância em vez de puro peel; foi a posição majoritária do herói no Tier 1 7.41 (48 das 63 vezes picado, 54,2% de vitórias; dota-tier1/draft.csv).
- itens iniciais: tango, blood_grenade, clarity, flask

### Build
#### Ring of Basilius (ring_of_basilius)
- minuto: 10
- porque: sustenta a mana do combo Disruption (120) + Shadow Poison (45 por cast) sem gastar Clarity toda hora.
- detalhe: dá 1 de regeneração de mana em área de 1200 (items.json). Comprado em 75% das partidas pos 4 (36 de 48, mediana no minuto 10,2).
- fonte: dota-tier1/data/derivados/compras.parquet; dota-imortal/data/opendota/items.json

#### Magic Wand (magic_wand)
- minuto: 9
- porque: carga de HP/mana de graça contra o poke de lane, sem gastar recurso próprio.
- detalhe: ganha carga sempre que um inimigo visível a 1200 de raio usa habilidade, até 20 cargas de 15 HP/mana cada (items.json). Comprado em 75% das partidas pos 4 (36/48, mediana 9,1min).
- fonte: compras.parquet; items.json

#### Arcane Boots (arcane_boots)
- minuto: 12
- porque: devolve mana em área pro time inteiro, igual importante pro próprio combo do Shadow Demon.
- detalhe: +45 de movimento e 150 de mana num raio de 1200 (items.json). 75% das partidas pos 4 (36/48, mediana 12,2min).
- fonte: compras.parquet; items.json

#### Observer and Sentry Wards (ward_dispenser)
- porque: visão de fosso e trilha pra achar o alvo certo do combo antes dele reagir.
- detalhe: Observer dá 1600 de visão por 6min, Sentry dá true sight de 1050 de alcance por 7min (items.json). Compra contínua, presente em 100% das partidas pos 4 (48/48).
- fonte: compras.parquet; items.json

#### Blink Dagger (blink)
- minuto: 24
- porque: fecha os 800 de alcance do Demonic Purge/Cleanse sem andar exposto até o alvo.
- detalhe: 1200 de alcance, trava por 3s depois de levar dano de herói ou Roshan (items.json). É o item mais comprado do kit: 85,4% das partidas pos 4 (41/48, mediana 23,9min).
- combo: blinka pro alcance de 800 do Demonic Purge; a ultimate fura Black King Bar (`bkbpierce: Yes`, constants_abilities.json), então o alvo é puxado, perde o buff positivo e desacelera até 100% mesmo com BKB ativo.
- fonte: compras.parquet; items.json; constants_abilities.json

#### Aghanim's Shard (aghanims_shard)
- minuto: 25
- porque: segundo item mais comprado depois do Blink, upgrade barato (1400) que dá o Demonic Cleanse, versão de Demonic Purge pra usar em aliado: limpa debuff negativo do aliado e cura ele no final, furando BKB.
- detalhe: dá a habilidade Demonic Cleanse (alvo só aliado): remove debuffs negativos por 5s e cura 450 ao fim da duração, 800 de alcance, 150 de mana, 60s de recarga, fura Black King Bar/imunidade a feitiço e não pode ser dispelada; aliado sob efeito de Disruption ainda pode receber o Cleanse (constants_abilities.json, entrada `shadow_demon_demonic_cleanse`: `bkbpierce: Yes`, `dispellable: No`, `target_team: Friendly`). Comprado em 47,9% das partidas pos 4 (23/48, mediana 24,9min).
- fonte: compras.parquet; dota-imortal/data/opendota/constants_abilities.json; dotacoach.gg/en/heroes/shadow-demon (confirma o mesmo efeito e os mesmos números: cura 450, alcance 800, mana 150, recarga 60s)

#### Glimmer Cape (glimmer_cape)
- minuto: 29
- porque: invisibilidade e barreira de 375 de dano mágico pra sobreviver ao burst que cerca o suporte depois do banish.
- detalhe: 20% de resistência mágica e até 375 de dano bloqueado por 5s, com 0,5s de delay pra ficar invisível (items.json). 22,9% das partidas pos 4 (11/48, mediana 29min).
- contra: burst de magia concentrado em cima do Shadow Demon, que tem só 120 de HP base (heroStats.json), antes dele conseguir soltar o combo.
- fonte: compras.parquet; items.json; heroStats.json

#### Force Staff (force_staff)
- minuto: 29
- porque: empurra 600 de distância pra salvar aliado preso ou sair de quem fechou em cima do Shadow Demon.
- detalhe: empurra 600 unidades na direção que a unidade olha, 850 de alcance em inimigo, não interrompe a ação do alvo (items.json). 31,2% das partidas pos 4 (15/48, mediana 28,5min).
- fonte: compras.parquet; items.json

#### Aether Lens (aether_lens)
- minuto: 32
- porque: +225 de alcance de conjuração estica Disruption (675) e Demonic Purge/Cleanse (800) pra fora do alcance de resposta do alvo.
- detalhe: 27,1% das partidas pos 4 (13/48, mediana 32,1min). O bônus de alcance (items.json) soma direto nos valores de `abilitycastrange` do kit (constants_abilities.json).
- fonte: compras.parquet; items.json; constants_abilities.json

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 37
- porque: compra tardia e minoritária, mas quando entra é porque a partida já passou dos 35min e o time quer o upgrade de ultimate.
- detalhe: dá +10 de todos os atributos e +175 de vida/mana (items.json). 25% das partidas pos 4 (12/48, mediana 37,5min).
- fonte: compras.parquet; items.json

### Situacionais
#### Pavise (pavise)
- porque: barreira física de 250 de dano, bem mais barata (1350) que Solar Crest, dá pra abrir trade antes de ter ouro pro item completo.
- detalhe: 250 de dano físico absorvido por 7s num aliado (items.json). 18,8% das partidas pos 4 (9/48, mediana 18,2min).
- contra: pico de dano físico isolado numa troca pontual, quando o time ainda não tem ouro pro Solar Crest.
- fonte: compras.parquet; items.json

#### Solar Crest (solar_crest)
- porque: barreira de 350 mais attack speed e armadura pra um aliado ganhar uma troca de ataque básico.
- detalhe: dá 5 de armadura, 60 de attack speed, 15% de movimento e barreira de 350 por 7s; só funciona em aliado, não tem efeito negativo em inimigo nesta versão (items.json, `target_team: Friendly`). 16,7% das partidas pos 4 (8/48, mediana 22,1min).
- contra: trocas de ataque básico em que o aliado buffado precisa sobreviver ao burst físico pra render o DPS extra.
- fonte: compras.parquet; items.json

#### Ghost Scepter (ghost)
- porque: imunidade a dano físico por 4s pra sobreviver a um combo de ataque básico isolado.
- detalhe: entra em ghost form por 4s, não ataca, fica 30% mais vulnerável a dano mágico nesse tempo (items.json). 16,7% das partidas pos 4 (8/48, mediana 33,5min).
- contra: composição com dano concentrado em ataque básico (carries de right-click); é a escolha errada contra nuke mágico pesado, o próprio item já avisa esse trade-off.
- fonte: compras.parquet; items.json

#### Aeon Disk (aeon_disk)
- minuto: 45
- porque: dispel forte automático quando a vida cai abaixo de 70%, segura o burst de kill que o suporte não vê chegando.
- detalhe: ao tomar dano de jogador e cair abaixo de 70% de vida, zera dano recebido e causado por 2,5s com 75% de resistência a status (items.json). 12,5% das partidas pos 4 (6/48, mediana 45,1min), item de jogo bem esticado.
- fonte: compras.parquet; items.json

#### Urn of Shadows (urn_of_shadows)
- porque: compra barata (825) de early/mid que já soma dano de queima em cima do poke.
- detalhe: dá 30 de regen quando usado em aliado e 25 de dano por segundo por 8s quando usado em inimigo, carregando toda vez que um herói inimigo morre a 1500 de raio (items.json). 10,4% das partidas pos 4 (5/48, mediana 12,9min).
- contra: pressão de poke na lane antes do suporte ter ouro pro combo completo.
- fonte: compras.parquet; items.json

## Pos 5 (suporte duro)
- quando pegar: pegue como suporte duro quando o time já tem outro suporte rotativo puxando farm e só precisa do disable em área do Shadow Demon pra zonear, sem competir por ouro; foi a posição minoritária no Tier 1 7.41 (15 das 63 vezes picado, 53,3% de vitórias; dota-tier1/draft.csv), com o mesmo núcleo de item do pos 4 mas prioridade maior em Enchanted Mango e Aeon Disk.
- itens iniciais: clarity, enchanted_mango, blood_grenade, tango

### Build
#### Magic Wand (magic_wand)
- minuto: 8
- porque: carga de HP/mana de graça contra poke de lane, sem gastar recurso próprio.
- detalhe: mesma mecânica do pos 4 (items.json). 80% das partidas pos 5 (12/15, mediana 8,2min); prioridade ainda maior que no pos 4 porque o suporte duro não tem outra fonte de sustain.
- fonte: compras.parquet; items.json

#### Observer and Sentry Wards (ward_dispenser)
- porque: visão de fosso e trilha é a função primária do suporte duro antes mesmo do combo.
- detalhe: presente em 100% das partidas pos 5 (15/15), igual ao pos 4.
- fonte: compras.parquet; items.json

#### Ring of Basilius (ring_of_basilius)
- minuto: 10
- porque: sustenta a mana do combo sem gastar Clarity.
- detalhe: 60% das partidas pos 5 (9/15, mediana 10,0min), um pouco menos frequente que no pos 4 porque o suporte duro às vezes prioriza wards em vez do ring.
- fonte: compras.parquet; items.json

#### Arcane Boots (arcane_boots)
- minuto: 13
- porque: devolve mana em área pro time inteiro.
- detalhe: 53,3% das partidas pos 5 (8/15, mediana 12,5min).
- fonte: compras.parquet; items.json

#### Blink Dagger (blink)
- minuto: 22
- porque: fecha o alcance do Demonic Purge/Cleanse sem andar exposto até o alvo.
- detalhe: mesma mecânica do pos 4. 80% das partidas pos 5 (12/15, mediana 22,2min), confirmando que o Blink é core independente da posição.
- combo: igual ao pos 4, Demonic Purge fura BKB (`bkbpierce: Yes`, constants_abilities.json) depois do blink.
- fonte: compras.parquet; items.json; constants_abilities.json

#### Aghanim's Shard (aghanims_shard)
- minuto: 28
- porque: segunda prioridade de item depois do Blink, igual ao pos 4; dá o Demonic Cleanse pra limpar debuff do aliado puxado pelo Disruption ou pego de burst.
- detalhe: mesmo efeito do pos 4 (Demonic Cleanse, só aliado, fura BKB, constants_abilities.json). 40% das partidas pos 5 (6/15, mediana 28,3min).
- fonte: compras.parquet; constants_abilities.json; dotacoach.gg/en/heroes/shadow-demon

#### Glimmer Cape (glimmer_cape)
- minuto: 27
- porque: invisibilidade e barreira de 375 pra sobreviver ao foco de burst, prioridade um pouco maior que no pos 4 porque o suporte duro tem menos HP de item.
- detalhe: 26,7% das partidas pos 5 (4/15, mediana 26,9min).
- contra: burst de magia concentrado no Shadow Demon.
- fonte: compras.parquet; items.json

#### Solar Crest (solar_crest)
- porque: barreira e attack speed pra um aliado ganhar troca de ataque básico.
- detalhe: 26,7% das partidas pos 5 (4/15, mediana 29,8min).
- contra: trocas de ataque básico onde o aliado buffado precisa sobreviver ao burst físico.
- fonte: compras.parquet; items.json

#### Aeon Disk (aeon_disk)
- minuto: 38
- porque: dispel forte automático sob 70% de vida, prioridade maior que no pos 4 (26,7% contra 12,5%) porque o suporte duro é o alvo mais squishy do time.
- detalhe: 26,7% das partidas pos 5 (4/15, mediana 37,8min).
- fonte: compras.parquet; items.json

### Situacionais
#### Aghanim's Scepter (ultimate_scepter)
- minuto: 37
- porque: compra tardia e rara, só quando a partida passa dos 35 minutos e já tem ouro de reserva.
- detalhe: 20% das partidas pos 5 (3/15, mediana 36,9min).
- contra: jogos esticados em que o time precisa do upgrade de ultimate pra fechar.
- fonte: compras.parquet; items.json

#### Force Staff (force_staff)
- porque: empurra aliado preso ou escapa de quem fechou em cima, mesma lógica do pos 4.
- detalhe: 20% das partidas pos 5 (3/15, mediana 37,5min), menos frequente que no pos 4 (31,2%) porque o suporte duro tem menos ouro livre nessa janela.
- fonte: compras.parquet; items.json

## Roshan
Sem dado de Roshan solo. Shadow Demon não aparece em `resumo_por_heroi.json` (nenhum registro dele como herói que bate sozinho em nenhum dos 1.328 kills de Roshan da base local) nem com um padrão de apoio reconhecível em `resumo_com_suporte.json` (apareceu no fosso durante o solo de outro herói em só 2 dos eventos registrados, Ursa e Drow Ranger, amostra baixa demais pra afirmar um padrão).
