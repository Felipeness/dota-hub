---
id: ficha-shadow_shaman
titulo: "Shadow Shaman"
heroi: Shadow Shaman
patch: 7.41
posicoes: [4]
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
- https://api.opendota.com/api/heroes/27/itemPopularity
- https://api.opendota.com/api/heroes/27/matchups
- https://api.opendota.com/api/benchmarks?hero_id=27
---

## Resumo
Shadow Shaman é um suporte de disable e cerco: Hex trava o alvo (silence e desarma, 2 a 2,9s, não fura BKB) pra emendar com Shackles (canalizada, 2,4 a 4,2s, dreno de vida), e Ether Shock estoura uma wave inteira em cone (até 9 alvos, 320 de dano no nível 4). No Tier 1 do patch 7.41 ele é quase só pos 4: 21 das 24 vezes que foi picado na base local de draft ele saiu marcado pos 4 (3 saíram pos 5, amostra pequena demais pra virar seção própria), com 14V-10D (58,3%) no total. A ultimate tem duas formas no kit atual, Urnaconda (ward único e massivo com dano de impacto imediato) ou Mass Serpent Ward (10 wards físicos), e as duas furam Black King Bar, ao contrário de Hex, Shackles e Ether Shock, que não furam (fonte: constants_abilities.json, campo bkbpierce). Nos benchmarks públicos do OpenDota ele fica em faixa de suporte puro: mediana de 358 de ouro/min, 540 de XP/min e 1,84 last hit/min. Os piores matchups por winrate (OpenDota, mínimo 15 jogos) são Lone Druid (11,1% em 18 jogos), Oracle (28,0% em 25) e Arc Warden (33,3% em 18); os melhores são Tinker (66,7%), Medusa (66,0%) e Troll Warlord (65,1%).

## Pos 4 (suporte de roaming)
- quando pegar: pegue quando o time já tiver outro suporte puxando farm e precisar de um lockdown de alvo único (Hex+Shackles trava por mais de 4s seguidos) somado a limpeza de wave em cone; ele saiu pos 4 em 21 das 24 vezes que foi picado no Tier 1 do 7.41 (dota-tier1/draft.csv), com 57,1% de vitórias nessas 21 partidas especificamente pos 4 (12V-9D; o total do herói em qualquer posição é 58,3%, 14V-10D em 24 partidas).
- itens iniciais: tango, blood_grenade, branches, flask, enchanted_mango

### Build
#### Magic Wand (magic_wand)
- minuto: 9
- porque: carga instantânea de HP/mana pra sobreviver ao trade de lane sem gastar mana do combo Hex+Shackles.
- detalhe: ganha carga sempre que um inimigo visível em 1200 de raio usa habilidade (até 20 cargas, 15 HP/mana cada). É o primeiro upgrade de item em quase toda partida: apareceu em 15 das 20 partidas pos 4 com registro de compras no replay (1 das 21 partidas pos 4 não tem dado de compra parseado).
- fonte: dota-imortal/data/opendota/items.json; dota-tier1/data/derivados/compras.parquet

#### Tranquil Boots (tranquil_boots)
- minuto: 11
- porque: regen de vida alta sem gastar ouro em cura, já que o suporte não last-hita o suficiente pra sustentar sozinho.
- detalhe: monta Boots + Wind Lace + Ring of Regen. Dá 65 de movimento e 14 de regen de vida extra enquanto não ataca nem é atacado; quebra (Break) por 13s ao entrar em combate. Presente em 15 das 20 partidas pos 4 com dado de compra.
- fonte: dota-imortal/data/opendota/items.json; dota-tier1/data/derivados/compras.parquet

#### Observer and Sentry Wards (ward_dispenser)
- porque: visão de fosso e trilha é o que garante achar o alvo certo pra abrir o combo Hex+Shackles antes dele reagir.
- detalhe: Observer dá 1600 de alcance de visão por 6min; Sentry dá detecção verdadeira (1050 de alcance) por 8min. Compra contínua desde antes do nível 1 (primeira compra mediana ainda no pré-jogo), presente em todas as 20 partidas pos 4 com dado de compra disponível.
- fonte: dota-imortal/data/opendota/items.json; dota-tier1/data/derivados/compras.parquet

#### Blink Dagger (blink)
- minuto: 21
- porque: fecha os 1200 de distância pra entrar no alcance de 550 do Hex sem andar exposto até o combo.
- detalhe: Blink tem 1200 de alcance e trava por 3s depois de tomar dano de herói ou Roshan. Presente em 17 das 20 partidas pos 4 com dado de compra.
- combo: Blink seguido de Hex (cast time 0, alcance 550) é a rotina de pick-off; como o Hex tem cast instantâneo e já prende o alvo, a trava de dano do Blink raramente importa pra sair da jogada.
- fonte: dota-imortal/data/opendota/items.json; dota-imortal/data/opendota/constants_abilities.json; dota-tier1/data/derivados/compras.parquet

#### Aether Lens (aether_lens)
- minuto: 26
- porque: +225 de alcance de conjuração estica o Hex e o Shackles pra fora do alcance de resposta do alvo.
- detalhe: monta Energy Booster (+250 de mana) e Void Stone (+1,75 de regen de mana). O bônus de alcance vale pra Hex (550 para 775), Shackles (450 para 675) e Ether Shock (600 para 825). Presente em 16 das 20 partidas pos 4 com dado de compra.
- fonte: dota-imortal/data/opendota/items.json; dota-imortal/data/opendota/constants_abilities.json; dota-tier1/data/derivados/compras.parquet

#### Force Staff (force_staff)
- minuto: 31
- porque: empurra o próprio Shaman fora de um combo físico ou puxa um aliado isolado antes do kill inimigo.
- detalhe: monta Staff of Wizardry e Fluffy Hat. Empurra 600 unidades na direção que a unidade está de frente, com 850 de alcance em inimigo, e não interrompe a ação do alvo (então não cancela Shackles aliado nem efeitos próprios). Presente em 10 das 20 partidas pos 4 com dado de compra.
- fonte: dota-imortal/data/opendota/items.json; dota-tier1/data/derivados/compras.parquet

#### Glimmer Cape (glimmer_cape)
- minuto: 34
- porque: invisibilidade e barreira de 375 de dano mágico pra sobreviver ao burst que tenta matar o Shaman antes da luta render.
- detalhe: monta Shadow Amulet e Shawl. Depois de 0,5s de delay dá invisibilidade, 20 de movimento e 20 de armadura mágica por 5s, lançado em si ou num aliado. Presente em 4 das 20 partidas pos 4 com dado de compra.
- contra: Batrider, Outworld Destroyer e Hoodwink, heróis de burst mágico pesado que estão entre os piores matchups do herói por winrate (fonte: matchups API); a barreira de 375 absorve boa parte desse burst inicial.
- fonte: dota-imortal/data/opendota/items.json; dota-tier1/data/derivados/compras.parquet; https://api.opendota.com/api/heroes/27/matchups

### Situacionais
#### Ghost Scepter (ghost)
- porque: imunidade a dano físico por 4s pra sobreviver a um combo de ataque básico ou físico isolado.
- detalhe: entra em Ghost Form, 4s imune a dano físico, mas não pode atacar e fica 30% mais vulnerável a dano mágico nesse tempo. Comprado em 4 das 20 partidas pos 4 com dado de compra, mediana 30 min.
- contra: Lone Druid, Primal Beast e Marci, cujo dano vem majoritariamente de ataque básico e combo físico e estão entre os piores matchups do herói por winrate (fonte: matchups API).
- fonte: dota-imortal/data/opendota/items.json; dota-tier1/data/derivados/compras.parquet; https://api.opendota.com/api/heroes/27/matchups

#### Black King Bar (black_king_bar)
- porque: 9s de imunidade mágica e dispel básico pra terminar o combo de lockdown sem ser interrompido antes.
- detalhe: monta Mithril Hammer e Ogre Axe. Dá 60% de redução de dano mágico, imunidade a dano refletido e puro, +10 de força e +24 de dano por 9/8/7s (3 cargas). Comprado em 8 das 20 partidas pos 4 com dado de compra (40%, quase a metade), mediana 44 min.
- contra: Batrider, Marci e Primal Beast, que dependem de disable em cadeia pra abrir em cima do Shaman e estão entre os piores matchups do herói por winrate; é a mesma lógica do bkbpierce:No de Hex/Shackles/Ether Shock, só que usada a favor do Shaman contra o disable do inimigo (fonte: constants_abilities.json e matchups API).
- fonte: dota-imortal/data/opendota/items.json; dota-imortal/data/opendota/constants_abilities.json; dota-tier1/data/derivados/compras.parquet; https://api.opendota.com/api/heroes/27/matchups

## Roshan
Sem dado de Roshan solo pelo próprio Shadow Shaman: ele não aparece em `resumo_por_heroi.json`, que só lista os heróis com padrão de solo observado em replay, e ele não é um deles (faz sentido, Shadow Shaman não tem dano de herói pra isso). Ele aparece, mas de forma marginal, em `resumo_com_suporte.json`: foi o suporte perto do fosso em 1 das 16 vezes que Huskar solou Roshan e em 1 das 9 vezes que Beastmaster solou, empatado com a maioria dos suportes que só aparecem 1 vez nessas listas. Amostra pequena demais pra virar recomendação tática, ele não tem um papel de apoio de Roshan documentado localmente.
