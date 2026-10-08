---
id: ficha-dark_willow
titulo: "Dark Willow"
heroi: Dark Willow
patch: 7.41
posicoes: [4]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/119/itemPopularity
---

## Resumo
Dark Willow é suporte de pick-off: Cursed Crown estuna em área depois de um delay de 4s (dá pra pré-plantar antes da luta estourar), Bramble Maze cria 8 brambles que enraízam quem pisa, e o ultimate (Bedlam ou Terrorize) soca em área ou assusta e manda o alvo correndo pro fountain. No recorte Tier 1 do 7.41 é praticamente só pos4: 159 dos 164 picks (97%), com 49,1% de vitória (78/159), contra só 5 jogos de pos5 (amostra pequena, sem dado suficiente para tratar como posição real). Fonte: dota-tier1/data/draft.csv.

## Pos 4 (suporte de roaming)
- quando pegar: é a posição dela no Tier 1 7.41 (159/164 picks, 97%, 49,1% de vitória). O kit entrega controle de longa distância sem depender de item pra funcionar (Cursed Crown tem só 600-675 de alcance de cast, mas o delay de 4s permite pré-castar antes de entrar na visão do inimigo), o que combina com rotacionar entre lanes e matar sozinha antes dos 10min. Fonte: dota-tier1/data/draft.csv.
- itens iniciais: tango, blood_grenade, clarity, wind_lace, ward_dispenser

### Build
#### Boots of Speed (boots)
- minuto: 5:39
- porque: mobilidade cedo pra puxar a lane e já rotacionar pra outra antes dos 6min.
- detalhe: comprada em 99% dos jogos pos4 (156/158); ela tem só 290 de velocidade de movimento e 0 de armadura base, então sem bota perde corrida de qualquer gank.
- fonte: dota-tier1/data/derivados/compras.parquet (pos4); dota-imortal/data/opendota/heroStats.json (move_speed, base_armor)

#### Magic Wand (magic_wand)
- minuto: 9:24
- porque: carga instantânea de vida e mana pra sobreviver à primeira troca que ela mesma inicia.
- detalhe: comprada em 94% dos jogos pos4 (149/158), normalmente ainda puxando a lane antes da primeira rotação.
- fonte: dota-tier1/data/derivados/compras.parquet (pos4)

#### Tranquil Boots (tranquil_boots)
- minuto: 11:50
- porque: regen de vida andando sem gastar mana, pra sustentar o roaming sem voltar à base.
- detalhe: upgrade de bota mais comum (60%, 95/158) contra Arcane Boots (4%, 6/158, quando o time precisa de mais mana cedo).
- contra: lane com poke físico constante quebra o bônus (regra de Break do item: atacar um herói ou ser atacado por qualquer unidade reduz a velocidade e tira o regen por 13s).
- fonte: dota-tier1/data/derivados/compras.parquet (pos4); dota-imortal/data/opendota/items.json (Tranquil Boots, Break)

#### Essence Distiller (essence_distiller)
- minuto: 17:05
- porque: planta estática que dá true sight e dano ao longo do tempo num inimigo, forçando ele a sair da área ou gastar recurso.
- detalhe: item de meio-jogo mais comum da build (58%, 92/158); monta a partir de Urn of Shadows (mediana 12:15) + Chainmail + Wizard Hat. Ganha carga extra toda vez que um herói inimigo morre num raio de 1500, o que acumula rápido no papel de roaming/pick-off dela.
- contra: invisíveis e heróis que dependem de ficar fora de visão pra setar o próprio gank.
- fonte: dota-tier1/data/derivados/compras.parquet (pos4, urn_of_shadows e essence_distiller); dota-imortal/data/opendota/items.json (componentes e efeito); https://api.opendota.com/api/heroes/119/itemPopularity (item 1852, 65 ocorrências no meio-jogo)

#### Eul's Scepter of Divinity (cyclone)
- minuto: 25:34
- porque: tira um alvo da luta por 2,5s pra isolar antes do combo, ou usa em si mesma pra escapar e limpar debuff.
- detalhe: comprado em 48% dos jogos (76/158); monta a partir de Staff of Wizardry + Void Stone + Wind Lace. O cast tem Dispel Type Basic Dispel, então também serve de saída rápida contra slow/root básico nela mesma.
- contra: usar no alvo antes de plantar Cursed Crown, isolando-o do resto do time até o stun cair; usar em si mesma contra silence básico que travaria o combo dela.
- fonte: dota-tier1/data/derivados/compras.parquet (pos4); dota-imortal/data/opendota/items.json (Cyclone, Dispel Type); https://api.opendota.com/api/heroes/119/itemPopularity (item 100, 31 meio-jogo + 27 final)

#### Blink Dagger (blink)
- minuto: 26:35
- porque: fecha distância pra plantar Cursed Crown ou Bramble Maze antes do inimigo perceber, já que ela não tem nenhuma mobilidade própria no kit base.
- detalhe: item mais comprado depois das botas (79%, 125/158).
- combo: Blink + Cursed Crown pré-castada: como o stun tem 4s de delay antes de estourar em área (360 de raio), dá pra piscar perto do grupo, acertar a maldição e só depois iniciar de verdade, fazendo o stun cair na hora exata em que o time se encontra.
- contra: usar antes do BKB do alvo, porque nenhuma das habilidades de controle dela (Bramble Maze, Cursed Crown, Terrorize) fura imunidade a feitiço.
- fonte: dota-tier1/data/derivados/compras.parquet (pos4); dota-imortal/data/opendota/constants_abilities.json (delay de 4s do Cursed Crown; bkbpierce=No em Bramble Maze, Cursed Crown, Shadow Realm, Bedlam e Terrorize)

#### Aghanim's Shard (aghanims_shard)
- minuto: 30:35
- porque: upgrade de habilidade que fortalece o kit de utilidade no meio-jogo depois que o combo básico (Blink + Cyclone + Cursed Crown) já está montado.
- detalhe: comprado em 42% dos jogos pos4 (67/158); o efeito exato dele em Dark Willow não foi confirmado nas fontes consultadas nesta sessão (o item em si só está documentado como "upgrade genérico" em items.json e os sites externos consultados bloquearam o acesso).
- fonte: dota-tier1/data/derivados/compras.parquet (pos4); dota-imortal/data/opendota/items.json (Aghanim's Shard, descrição genérica)

### Situacionais
#### Force Staff (force_staff)
- minuto: 29:57
- porque: empurra um aliado puxado pra fora da zona de perigo, ou ela mesma escapa depois de iniciar.
- detalhe: comprado em 23% dos jogos pos4 (36/158).
- contra: gank que vira contra o time e precisa tirar um aliado avançado rápido.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos4)

#### Glimmer Cape (glimmer_cape)
- minuto: 28:53
- porque: invisibilidade curta mais resistência mágica pra entrar e sair de uma rotação sem ser vista.
- detalhe: comprado em 10% dos jogos pos4 (16/158).
- contra: times com dano mágico pesado ou boa visão nas rotas de gank, que revelariam a aproximação antes do combo.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos4)

#### Aeon Disk (aeon_disk)
- minuto: 41:32
- porque: garante sobreviver a um burst de execução logo depois que ela aparece pra iniciar, quando ainda não tem saída própria.
- detalhe: item tardio, em 17% dos jogos pos4 (27/158).
- contra: combos de alvo único que a matariam no instante em que sai do Shadow Realm ou pisca pra perto do grupo inimigo.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos4)

#### Scythe of Vyse (sheepstick)
- minuto: 51:25
- porque: trava um alvo prioritário sozinha quando o resto do controle dela (que não fura BKB) já foi gasto ou bloqueado.
- detalhe: item tardio e raro nesta amostra (11%, 18/158); monta a partir de Mystic Staff + Tiara of Selemene.
- contra: só sai com dispel forte (não é limpo por Basic Dispel, ao contrário de Bramble Maze, Cursed Crown e Terrorize dela mesma).
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos4); dota-imortal/data/opendota/items.json (Scythe of Vyse, dispellable)

#### Wind Waker (wind_waker)
- minuto: 44:48
- porque: upgrade do Eul's em que o cyclone sobre o próprio corpo pode ser movido (300-360 de velocidade), virando reposicionamento aéreo pra ela ou pra salvar um aliado puxado.
- detalhe: raro nesta amostra (6%, 9/158); item caro (6800), só em jogo bem longo.
- contra: lutas longas em que precisa fechar espaço ou tirar um aliado do meio do grupo inimigo.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (pos4); dota-imortal/data/opendota/items.json (Wind Waker, componentes e efeito)

## Roshan
Sem dado de Roshan solo: Dark Willow não aparece nem no dataset de solos (dota-roshan-solo/data/resumo_por_heroi.json, 22 heróis cobertos, nenhum suporte puro) nem no dataset "com suporte" (dota-roshan-solo/data/resumo_com_suporte.json, que cobre acompanhamento de carries de farm rápido como Ursa, Huskar e Spectre). O motivo é o kit: nenhuma habilidade dela aplica dano relevante num boss com dezenas de milhares de vida, e nenhuma fura imunidade a feitiço, então o papel dela num Roshan de time é travar quem reage, não bater no próprio Roshan.
