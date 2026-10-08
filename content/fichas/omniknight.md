---
id: ficha-omniknight
titulo: "Omniknight"
heroi: Omniknight
patch: 7.41
posicoes: [3, 4, 5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/heroes/57/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=57
- https://dota2protracker.com/hero/Omniknight
- https://dota2.fandom.com/wiki/Omniknight
---

## Resumo
Omniknight é suporte tanque e curador (roles Support/Durable/Nuker no OpenDota heroes.json), com Degen Aura passiva que já deixa quem se aproxima dele mais lento. No 7.41f, em partidas 7000+ MMR dos últimos 8 dias (dota2protracker), ele é jogado de verdade em três posições: pos 5 em 50,6% dos picks (576 de 1.138 jogos, 55,2% de vitória), pos 3 em 33,1% (377 jogos, 51,7%) e pos 4 em 10,8% (123 jogos, 53,7%); pos 1 e pos 2 somam o restante, cerca de 5,5% dos picks (62 jogos juntos, sem quebra por posição individual disponível) e ficam fora desta ficha. O benchmark de GPM do OpenDota (mediana 337 de ouro por minuto) confirma o perfil: ele não farma, vive de curar com Purification e proteger com Repel e Guardian Angel.

A build de itens que aparece no pool de partidas pro recentes do OpenDota (itemPopularity, sem separação por posição) tem dois perfis bem diferentes: um bruiser corpo a corpo com Echo Sabre, Diadem, Harpoon, Black King Bar e Blink Dagger (perfil de pos 3) e um de suporte clássico com Mekansm, Solar Crest, Glimmer Cape, Pipe of Insight e Holy Locket (perfil de pos 4 e pos 5). Como a API não separa por posição, a divisão de itens por pos 4 e pos 5 nesta ficha segue a função de cada item (mobilidade e save para o suporte que rotaciona, aura e sustain para quem segura a lane), não uma contagem exclusiva daquela posição.

## Pos 3 (offlane)
- quando pegar: Como bruiser tanque de offlane. É a 2ª posição mais jogada (33,1% dos picks, 377 jogos, 7000+ MMR, patch 7.41f, dota2protracker) e o resultado da lane pesa muito no jogo nesse perfil, mas a quebra de vitória por resultado de lane (venceu/empatou/perdeu) que constava aqui não fechava com o total de 377 jogos da amostra (somava 579) e foi removida por falta de uma fonte que reconcilie os dois números.
- itens iniciais: tango, ward_dispenser, magic_stick

### Build
#### Phase Boots (phase_boots)
- porque: dá dano e fase pra colar no herói que você quer acertar com Hammer of Purity.
- detalhe: +18 de dano corpo a corpo, +4 de armadura e fase por 3s. No pool de compras iniciais/early de partidas pro recentes do Omniknight (OpenDota itemPopularity), foi a bota mais vista: 51 de 334 registros da fase early, contra 4 de Arcane Boots e 2 de Tranquil Boots.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Soul Ring (soul_ring)
- porque: mana pra espamar Purification e Repel sem secar, sem depender de aliado.
- detalhe: 805 de ouro, +6 de Força, +2 de armadura e 170 de mana extra por 10s (perde o que não usar). Apareceu em 31 dos 334 registros da fase early do pool pro, atrás das botas (boots/phase_boots), do Chainmail e do Bracer (componentes de outros itens do build), mas ainda um item recorrente nessa fase.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Echo Sabre (echo_sabre)
- porque: dano, Força e lentidão no ataque pra ficar colado no alvo e manter o Healing Hammer curando.
- detalhe: 2.700 de ouro (Ogre Axe + Broadsword + Void Stone), +20 de dano, +15 de Força, +1,75 de regen de mana e 100% de lentidão por 0,8s no ataque. Componente do Harpoon. 2º item mais comprado da fase mid do pool pro (43 de 442 registros).
- combo: a passiva innate Healing Hammer cura 20% do dano de habilidade ao longo de 5s; o slow de 100% por 0,8s do ataque duplicado do Echo Sabre (passiva Echo Strike do próprio item, não o gancho) ajuda a manter o alvo no alcance pra repetir o Hammer of Purity e sustentar essa cura.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Diadem (diadem)
- porque: +6 em todos os atributos por só 1.000 de ouro, sem ativo: completa o Harpoon por pouco custo.
- detalhe: item puro de estatística (sem habilidade ativa ou passiva própria). 40 compras na fase mid do pool pro, quase empatado com o Echo Sabre (43, a outra peça direta da receita do Harpoon) e o Broadsword (41, que é componente do próprio Echo Sabre, não do Harpoon).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Harpoon (harpoon)
- porque: puxa o inimigo pra dentro do alcance de 150 do seu ataque corpo a corpo e do Hammer of Purity.
- detalhe: 4.700 de ouro (Echo Sabre + Diadem), +25 de dano, +25 de Força, +10 de Agilidade e Inteligência. O gancho (ativo, Draw Forth) puxa 35% da distância (até 1.000 de alcance); a passiva Echo Strike do item aplica 100% de lentidão por 1s no primeiro golpe do ataque corpo a corpo duplicado. Apareceu em 38 dos 442 registros da fase mid do pool pro, atrás do Ogre Axe, do Echo Sabre, do Broadsword (todos componentes de outros itens do build) e do Diadem.
- contra: herói que depende de kitar ou de um dash curto para escapar: o puxão cancela o reposicionamento antes de a troca começar.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Black King Bar (black_king_bar)
- porque: entra na troca sem travar em stun ou silence enquanto o combo de ataque e Repel fazem o resto.
- detalhe: 4.050 de ouro, +10 de Força, +24 de dano, imunidade a magia e 60% de resistência mágica por 9/8/7s (cai a cada uso, os dois efeitos acabam junto com o Avatar). Foi o item de late game mais comprado do pool pro (25 de 178 registros).
- contra: disable mágico de alvo único ou em área (stun, hex, silence) que travaria o combo antes dele sair.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Blink Dagger (blink)
- porque: fecha a distância pra abrir o Guardian Angel em cima do time antes do inimigo iniciar a luta.
- detalhe: 2.250 de ouro, 1.200 de alcance, bloqueia por 3s depois de levar dano de herói ou Roshan. 2º item de late game mais comprado do pool pro (19 de 178 registros).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Aghanim's Scepter (ultimate_scepter)
- porque: Guardian Angel ganha 1 carga extra, alcance global e também protege você mesmo ao usar no aliado.
- detalhe: 4.200 de ouro. 3º item de late game mais comprado do pool pro (12 de 178 registros). O upgrade do Aghanim's (carga extra, alcance global e Guardian Angel também em si mesmo ao lançar num aliado) não está no constants_abilities.json local, que só tem a versão base da habilidade; vem do Dota 2 Wiki ("Grants one extra charge and global cast range. Always casts a Guardian Angel on self as well as the selected target.").
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity; https://dota2.fandom.com/wiki/Omniknight

#### Octarine Core (octarine_core)
- porque: 25% menos recarga bota Purification, Repel, Hammer of Purity e Guardian Angel pra girar mais rápido.
- detalhe: 4.900 de ouro, +450 de vida, +450 de mana, +6 de regen de mana. Apareceu 9 vezes nos 178 registros de late game do pool pro.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

### Situacionais
#### Lotus Orb (lotus_orb)
- porque: devolve pra quem lançou a maioria dos feitiços de alvo único, incluindo os que vêm em você.
- detalhe: 3.850 de ouro, +10 de armadura, +250 de mana. A ativa (Echo Shell) coloca um escudo de 5s que recasta a maioria dos feitiços de alvo de volta no lançador; o alvo escudado ainda recebe o dano da primeira vez.
- contra: nuke ou disável de alvo único (hex, silence de alvo, a maioria dos stuns de herói único).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Aghanim's Shard (aghanims_shard)
- porque: Hammer of Purity passa a disparar sozinho (a cada 6s de recarga, no próximo ataque) sem gastar o ativo nem mana.
- detalhe: 1.400 de ouro. 6 compras na fase mid do pool pro. O efeito do Shard não está no constants_abilities.json local (que só cobre a habilidade base); pelo Dota 2 Wiki, a cada 6s o próximo ataque dispara Hammer of Purity automaticamente, sem custar mana nem acionar o cooldown do ativo.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity; https://dota2.fandom.com/wiki/Omniknight

## Pos 4 (suporte de roaming)
- quando pegar: Como suporte que rotaciona a mapa, usando Hammer of Purity pra poke e Repel pra tirar o aliado de uma troca ruim na rotação. É a posição menos comum das três reais (10,8% dos picks, 123 jogos, 7000+ MMR, patch 7.41f), mas com a 2ª melhor vitória no recorte "build mais usada" do D2PT: 55,6% em 187 jogos.
- itens iniciais: tango, ward_dispenser, enchanted_mango

### Build
#### Boots of Speed (boots)
- porque: mobilidade crua pra chegar na rotação e no gank antes da janela fechar.
- detalhe: item mais comum da fase early do pool pro do herói (101 de 334 registros). Vira Phase Boots, Arcane Boots ou Tranquil Boots conforme a necessidade de mana ou de regen do time.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Magic Wand (magic_wand)
- porque: carga de vida e mana instantânea pra sobreviver ao poke enquanto rotaciona sem suporte do time.
- detalhe: 460 de ouro, +3 em todos os atributos, até 20 cargas que recarregam quando um inimigo visível lança feitiço perto.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Solar Crest (solar_crest)
- porque: um ponto de save ou de iniciação rápida que não depende de mana nem de recarga do Repel.
- detalhe: 2.575 de ouro. Em aliado dá +5 de armadura, 60 de velocidade de ataque, 15% de movimento e um escudo de 350 de dano físico por 7s; compartilha recarga com o Pavise de item neutro. Apareceu no pool pro em contagem baixa (1 no mid, 4 no late de 178 registros), coerente com ser mais raro que os itens do perfil bruiser de pos 3.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Force Staff (force_staff)
- porque: empurra o aliado pra fora de uma troca ou puxa o inimigo pra dentro do alcance de Hammer of Purity.
- detalhe: 2.200 de ouro, +10 de Inteligência, +175 de vida, empurra 600 de distância e não interrompe as ações do alvo. 5 compras no late game do pool pro.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Glimmer Cape (glimmer_cape)
- porque: invisibilidade mais um escudo mágico pra sair de uma rotação que deu errado ou salvar quem está sendo focado.
- detalhe: 2.150 de ouro. Depois de 0,5s dá invisibilidade, +20 de movimento e um escudo que absorve até 375 de dano mágico por 5s, em si mesmo ou num aliado. 2 compras no mid game e 5 no late do pool pro.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Aghanim's Shard (aghanims_shard)
- porque: Hammer of Purity automático em quem você está atacando, bom pra poke contínuo na rotação.
- detalhe: 1.400 de ouro. 6 compras na fase mid do pool pro. Pelo Dota 2 Wiki, dispara a cada 6s sem gastar mana nem acionar o cooldown do ativo (mesmo efeito da versão de pos 3).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity; https://dota2.fandom.com/wiki/Omniknight

### Situacionais
#### Holy Locket (holy_locket)
- porque: mais um ponto de cura instantânea e amplifica toda a cura que você já dá com Purification.
- detalhe: 2.250 de ouro. A passiva Holy Blessing amplifica em 15% toda cura que você aplica; a ativa Energy Charge restaura vida e mana e aumenta por 4s a amplificação de cura recebida pelo alvo em mais 10%. 6 compras na fase mid do pool pro.
- combo: os dois bônus de amplificação de cura (Holy Blessing +15% e Energy Charge +10% no alvo) somam em cima do heal fixo de Purification, que já cura 90 a 300 de vida conforme o nível.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Lotus Orb (lotus_orb)
- porque: devolve o nuke ou disable de alvo único que tentaram jogar no aliado que você está salvando.
- detalhe: mesmo item e mesma lógica da versão de pos 3: escudo de 5s (Echo Shell) que recasta a maioria dos feitiços de alvo de volta no lançador.
- contra: nuke ou disável de alvo único em quem você está protegendo na rotação.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

## Pos 5 (suporte duro)
- quando pegar: Como suporte que segura a lane e ancora o time com aura e cura em área. É a posição mais jogada do herói (50,6% dos picks, 576 jogos, 7000+ MMR, patch 7.41f) e o resultado da lane pesa até mais que no pos 3: 71,9% de vitória vencendo a lane, 56,4% empatando e 36% perdendo (153, 273 e 150 jogos). O jogo rende melhor até os 35 min: 57% de vitória de 12 a 35 min (279 jogos), 55,1% de 35 a 50 (247) e cai pra 48,1% acima de 50 min (52 jogos).
- itens iniciais: tango, ward_dispenser, enchanted_mango

### Build
#### Tranquil Boots (tranquil_boots)
- porque: regen de vida alta fora de combate pra segurar a lane sem gastar mana com Purification toda hora.
- detalhe: 900 de ouro, +65 de movimento e +14 de regen de vida por 20s; quebra por 13s ao levar dano de herói, torre ou Roshan (20+ de dano). Apareceu em contagem baixa no pool pro (2 de 334 registros early), o que é esperado: o pool pro do herói hoje é dominado pelo perfil bruiser de pos 3, que prefere Phase Boots.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Magic Wand (magic_wand)
- porque: resposta rápida de vida e mana contra o poke da lane inimiga, sem gastar recarga das suas habilidades.
- detalhe: 460 de ouro, +3 em todos os atributos, até 20 cargas.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Mekansm (mekansm)
- porque: cura em área pra toda a lane e pro time nas lutas iniciais, o primeiro item de aura clássico do suporte.
- detalhe: 1.775 de ouro (Headdress + Chainmail), +5 de armadura e aura de 2,5 de regen de vida em 1.200 de raio; a ativa Restore cura 250 de vida em área, mas não acumula com outra Restore ou com o Mend da Guardian Greaves dentro do mesmo cooldown. 1 compra na fase mid do pool pro (amostra pequena, mesma ressalva do item acima).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Guardian Greaves (guardian_greaves)
- porque: upgrade do Mekansm que também dá mana em área pro time e, de brinde, um basic dispel em você mesmo.
- detalhe: 4.450 de ouro (Arcane Boots + Mekansm), +50 de movimento, +5 de armadura, +150 de mana e aura de regen de vida e mana em 1.200 de raio. A ativa Mend restaura 325 de vida e 200 de mana pros aliados próximos, mas o basic dispel ("removes most negative effects from the caster") só limpa quem lança o item, ou seja, o próprio Omniknight, não o time inteiro. 3 compras no late game do pool pro.
- combo: o dispel do Mend é só em você; pra limpar um aliado debuffado use o Repel (que aceita qualquer alvo aliado) e deixe o Mend pra se limpar e sustentar a si mesmo enquanto segura a linha de frente.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Pipe of Insight (pipe)
- porque: escudo mágico em área pra todo o time, feito pra travar bursts de magia nas lutas por objetivo.
- detalhe: 3.725 de ouro, +14 de regen de vida, 20% de resistência mágica e aura de 8% de resistência mágica em 1.200 de raio; a ativa Barrier dá um escudo de 425 de dano mágico por 8s pra todos os aliados perto. Foi o item de late game mais comum do perfil suporte no pool pro (5 de 178 registros, empatado com Force Staff e Glimmer Cape).
- contra: time inimigo com dano mágico em área (nuke de ultimate, DoT em área) nas lutas por Roshan ou torre.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Aghanim's Scepter (ultimate_scepter)
- porque: mesmo upgrade do Guardian Angel da versão de pos 3, aqui pra salvar o time de longe sem precisar estar na luta.
- detalhe: mesmos 4.200 de ouro e mesmo efeito (1 carga extra, alcance global, Guardian Angel também em si mesmo; efeito confirmado no Dota 2 Wiki, não no constants_abilities.json local). 3º item de late game mais comprado do pool pro (12 de 178 registros).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity; https://dota2.fandom.com/wiki/Omniknight

### Situacionais
#### Vladmir's Offering (vladmir)
- porque: mais dano, lifesteal e armadura em aura pro time inteiro, bom quando a luta vira de atrito.
- detalhe: 2.200 de ouro, aura de 1.200 de raio com 20% de lifesteal (12% contra creep), 18% de dano bônus, 2 de armadura e 1 de regen de mana. 3 compras no late game do pool pro.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Lotus Orb (lotus_orb)
- porque: devolve pra quem lançou o nuke ou disable de alvo único que tentaram no seu carry.
- detalhe: mesmo item das outras posições: escudo de 5s (Echo Shell) que recasta a maioria dos feitiços de alvo de volta no lançador.
- contra: nuke ou disável de alvo único no carry ou em você.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

#### Glimmer Cape (glimmer_cape)
- porque: invisibilidade e escudo mágico rápidos pra tirar o carry de uma iniciação antes do Guardian Angel estar pronto.
- detalhe: mesmo item da versão de pos 4: 2.150 de ouro, invisibilidade após 0,5s e escudo de até 375 de dano mágico por 5s.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/57/itemPopularity

## Roshan
Sem dado de Roshan solo.
