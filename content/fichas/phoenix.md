---
id: ficha-phoenix
titulo: "Phoenix"
heroi: Phoenix
patch: 7.41
posicoes: [5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/1win/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/aurora/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/falcons/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/navi/analise.md
- https://api.opendota.com/api/heroes/110/itemPopularity
---

## Resumo
Phoenix é suporte de área, não suporte de save: ele cura e dá dano em zona (Sun Ray), limpa wave e corta attack speed com Fire Spirits, inicia ou escapa com Icarus Dive e fecha luta com Supernova, que estuna em área mesmo contra quem está de BKB (Supernova tem `bkbpierce: Yes` nos dados oficiais, diferente de Icarus Dive e Fire Spirits, que não atravessam BKB). Nos times pro analisados ele é quase só pos 5: 28 dos 31 picks na Aurora (kaori), 17 picks a 59% na Falcons (Sneyking), 8 a 75% na NAVI (Riddys) e 14 a 50% no 1win (Whitemon) (fontes: dota-tier1, analise.md de cada time). O herói base tem 120 de vida e crescimento alto de Força (+3,3/nível), por isso aguenta ficar na frente usando o próprio HP como recurso de feitiço.

## Pos 5 (suporte duro)
- quando pegar: é pos 5 dedicado em pelo menos 4 dos times analisados (Aurora, Falcons, NAVI, 1win), sempre nessa posição e com volume alto de picks (ver Resumo). A classificação de função varia por time: a Aurora separa Phoenix como "suporte de área", diferente de save (fonte: dota-tier1, aurora/analise.md: "o pos 5 joga suportes de área (Phoenix, Jakiro, Warlock), não de save"), mas a NAVI agrupa Phoenix entre os "suportes de save e de luta" do pool do Riddys (fonte: dota-tier1, navi/analise.md: "Pos 5: suportes de save e de luta (Bane, Phoenix, Winter Wyvern, Venomancer)"). Não dá pra generalizar um rótulo único de função pros 4 times.
- itens iniciais: tango, branches, faerie_fire, ward_sentry, ward_observer, smoke_of_deceit, blood_grenade
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (slugs e custos dos itens iniciais)

### Build
#### Tranquil Boots (tranquil_boots)
- porque: mobilidade de suporte e a maior regen de vida fora de combate das botas baratas.
- detalhe: 900 de ouro, +65 de velocidade de movimento e 250 de vida regenerada em 20s; quebra ao atacar ou ser atingido por qualquer unidade (volta ao normal depois de parar de lutar por um tempo). É a bota completa mais comprada por Phoenix no early game nos dados agregados do herói (50 compras na amostra), atrás só do item genérico Boots of Speed (84), que é a base antes de qualquer upgrade.
- fonte: https://api.opendota.com/api/heroes/110/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Urn of Shadows (urn_of_shadows)
- porque: mata-lance barato que gera carga para curar aliado ou queimar inimigo que morre perto.
- detalhe: 825 de ouro, +2 todos os atributos, +2 armadura. Junta 2 cargas quando esvazia; cada morte de herói perto dela (1500 de raio) dá carga nova, que cura 30 em aliado ou causa 25 de dano mágico em inimigo por 8s. É componente da Spirit Vessel.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/110/itemPopularity

#### Spirit Vessel (spirit_vessel)
- porque: upa a Urn em item de meio de jogo: mais stats e ainda corta cura do time inimigo.
- detalhe: 2.725 de ouro (Urn of Shadows + Diadem), +10 todos os atributos, +1,75 regen de mana, +2 armadura. É o item de "charge" mais comprado por Phoenix no meio de jogo segundo o agregado do herói (29 compras na amostra), bem perto da Diadem avulsa (23) que entra como componente dele.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/110/itemPopularity

#### Pavise (pavise)
- porque: escudo barato de 250 de dano pra salvar o core numa troca de nuke.
- detalhe: 1.350 de ouro, +3 armadura, +175 de vida e mana; a ativa dá barreira de 250 de dano físico por 7s num aliado. Vira Solar Crest depois.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Solar Crest (solar_crest)
- porque: blinda o seu carry pra fight com armadura, attack speed e uma barreira de dano físico.
- detalhe: 2.575 de ouro (Pavise + Chainmail + Wind Lace), ativa dá +5 armadura/+60 attack speed/+15% de velocidade em aliado, com barreira de 350 de dano físico. Nos dados locais o item só pode ser usado em aliado (`target_team: Friendly`); não há mais efeito de redução de armadura em inimigo nessa versão. Partilha recarga com a Pavise.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Aghanim's Shard (aghanims_shard)
- porque: upgrade barato (1.400) que é a compra mais comum do herói no meio de jogo entre todos os itens do agregado.
- detalhe: foi o item de maior contagem na faixa "mid game" dos dados públicos do herói (42 compras na amostra, mais que qualquer outro item dessa fase). O efeito específico em cada habilidade de Phoenix não está confirmado nas fontes consultadas (a Dota 2 Wiki e o Liquipedia bloquearam o acesso durante a pesquisa), então aqui só entra o dado de frequência de compra.
- fonte: https://api.opendota.com/api/heroes/110/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Shiva's Guard (shivas_guard)
- porque: armadura em área pro time todo mais um nuke/slow que ajuda a fechar quem está fugindo da Supernova.
- detalhe: 4.500 de ouro (Platemail + Splintmail + Chasm Stone), +17 armadura e aura de -45 attack speed em inimigos num raio de 1200; a ativa (Arctic Blast) é uma onda que desacelera e causa 260 de dano em área. Platemail (componente) foi o terceiro item mais comprado no meio de jogo do herói (28 compras), atrás de Aghanim's Shard (42) e Spirit Vessel (29).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/110/itemPopularity

#### Aghanim's Scepter (ultimate_scepter)
- porque: +10 em todos os atributos e upgrade da ultimate, item comum de late game do herói nos dados agregados.
- detalhe: 4.200 de ouro, +10 todos os atributos, +175 vida e mana. Teve 6 compras na faixa "late game" do agregado do herói, empatado com Blink Dagger e Black King Bar; Shiva's Guard (18), Refresher Orb (15), Aeon Disk (13), Mystic Staff (12), Sheepstick (11) e Force Staff (8) aparecem na frente nessa fase. Efeito específico na Supernova não confirmado nas fontes consultadas.
- fonte: https://api.opendota.com/api/heroes/110/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

### Situacionais
#### Black King Bar (black_king_bar)
- porque: deixa Phoenix sobreviver pra terminar o canal da Sun Ray ou do dive sem ser interrompido por disable de alvo.
- detalhe: 4.050 de ouro, 9/8/7s de imunidade a feitiço conforme a carga, +10 Força e +24 de dano.
- contra: não ajuda Icarus Dive nem Fire Spirits a baterem em quem está com BKB (as duas têm `bkbpierce: No` nos dados oficiais de habilidade), mas não precisa: a explosão final da Supernova atravessa BKB (`bkbpierce: Yes`), então o estuar final da ultimate funciona mesmo contra alvo imune a feitiço.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json

#### Force Staff (force_staff)
- porque: empurra aliado pra fora de alcance de combo ou reposiciona Phoenix pra entrar/sair da luta.
- detalhe: 2.200 de ouro, +10 Inteligência e +175 de vida; o empurrão tem 850 de alcance quando usado em inimigo (os dados locais não especificam teto de alcance pra uso em aliado).
- contra: útil contra combos de dano único ou de alcance curto que precisam ficar perto do alvo pra funcionar.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Glimmer Cape (glimmer_cape)
- porque: some aliado do foco e corta 20% do dano mágico que ele vai receber na troca.
- detalhe: 2.150 de ouro, invisibilidade de 5s com atraso de 0,5s pra sair de combate, +20% de resistência mágica durante o efeito.
- contra: serve contra time inimigo com dano mágico pesado ou que depende de ver o alvo pra acertar skillshot/alvo único.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Scythe of Vyse (sheepstick)
- porque: remove o core inimigo da luta por quase 3s (silence, desarma e lentidão) enquanto Phoenix limpa o resto.
- detalhe: 5.200 de ouro, Hex transforma o alvo em critter inofensivo por 2,8s, com velocidade reduzida a 140, silenciado, mudo e desarmado; destrói ilusões na hora.
- contra: serve contra o core de maior dano do time inimigo, principalmente ilusionistas (destrói a ilusão) e heróis que dependem de autoataque (fica desarmado).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Wind Waker (wind_waker)
- porque: tira o alvo (aliado ou inimigo) da luta por 2,5s de invulnerabilidade, inclusive pra isolar quem está sendo focado.
- detalhe: 6.800 de ouro, Cyclone deixa o alvo invulnerável por 2,5s; em inimigo, causa 50 de dano mágico ao aterrissar. Dispel básico.
- contra: serve contra combo de burst de alvo único, porque tira a janela em que o inimigo ia terminar o combo.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

## Roshan
Sem dado de Roshan solo: as fontes locais de replay solo (C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json) cobrem só 22 heróis, nenhum deles Phoenix, e nenhuma fonte web consultada confirmou um padrão de Roshan específico do herói nesta pesquisa.
