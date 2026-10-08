---
id: ficha-hoodwink
titulo: "Hoodwink"
heroi: Hoodwink
patch: 7.41
posicoes: [4, 5]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-tier1/data/draft.csv
- dota-tier1/data/jogadores_partida.csv
- https://api.opendota.com/api/heroes/123/itemPopularity
- https://dotacoach.gg/heroes/hoodwink
- https://dotacoach.gg/en/heroes/hoodwink/builds/support
- https://dotacoach.gg/en/heroes/hoodwink
---
## Resumo
Hoodwink é suporte à distância de agilidade: todas as roles no OpenDota são Support, Nuker, Escape e Disabler, sem nenhuma tag de core (heroStats.json). No banco público do dotacoach.gg (7.41f, 84.924 partidas) ela aparece 51,9% como suporte de roam (pos4, 47,3% de vitória) e 43,8% como suporte duro (pos5, 47,2%), contra 2,3% ou menos em mid, offlane e carry, picks fora da curva que não entram nesta ficha. No Atlas tier1 (423 picks de pro, data/draft.csv deste projeto) a distribuição pende mais pra pos4: 327 jogos (77%, 44,3% de vitória) contra 96 de pos5 (23%, 52,1% de vitória), ou seja, o pro escolhe roam com mais frequência mas o hard support rende mais vitória na amostra. O motor do kit é prender perto de árvore: Bushwhack estoura num raio de 265 e puxa quem está perto pra árvore mais próxima, zerando a visão do alvo por até 2,1s (constants_abilities.json); Acorn Shot planta a própria árvore se mirado no chão, o que viabiliza o combo em lane sem depender de floresta natural.

## Pos 4 (suporte de roaming)
- quando pegar: é o pick mais comum do herói nos pros, 327 de 423 (77%) no Atlas tier1 local, e também a role mais selecionada no pub 7.41f (51,9%, dotacoach.gg/heroes/hoodwink). Pegue quando o plano é rodar o mapa fazendo pick-off com Bushwhack perto de árvore em vez de ficar plantado numa lane.
- itens iniciais: tango, blood_grenade, magic_stick, faerie_fire, branches, ward_dispenser (observer e sentry)

### Build
#### Boots of Speed -> Arcane Boots (boots / arcane_boots)
- porque: Hoodwink nasce com 75 de mana e 0 de regen (heroStats.json), e Bushwhack mais Acorn Shot em sequência esvaziam a barra rápido; Arcane devolve 150 de mana pra quem estiver perto.
- detalhe: bota genérica em 85,3% das compras de early game da amostra (93 de 109 registros); Arcane Boots é o 2º item mais comum da fase mid (36 de 225, 16,0%), com aura de 1 de regen de mana num raio de 1200.
- fonte: items.json (boots, arcane_boots); heroStats.json; OpenDota itemPopularity hero 123

#### Essence Distiller (essence_distiller)
- porque: é o item mais comprado de toda a fase mid da amostra (61 de 225, 27,1%); dá 6 de armadura, 150 de mana e 1,75 de regen, e ainda cura ou pune.
- detalhe: Soul Release cura 40 de vida num aliado; vazio, pode ficar parado no chão até 15s e se prender ao primeiro inimigo que passar a 400 de distância, causando 25 de dano por segundo com true sight por 8s; ganha carga sempre que um herói inimigo morre a até 1500 de distância, o que casa com o perfil de pos4 correndo o mapa pra pegar abates.
- fonte: items.json (essence_distiller); OpenDota itemPopularity hero 123

#### Aghanim's Shard (aghanims_shard)
- porque: libera Hunter's Boomerang, um projétil que vai e volta causando 200 de dano fixo e marcando o alvo com +20% de dano de feitiço recebido por 7s.
- detalhe: velocidade 900, raio de impacto 150, alcance de lançamento 1100, mais 25% de slow de movimento no alvo durante a marca (constants_abilities.json, hoodwink_hunters_boomerang); é o único item de ultimate/shard com presença real na amostra mid (11 de 225, 4,9%), já que o Scepter (Decoy) praticamente não aparece (2 de 209 no late).
- combo: Boomerang marca o alvo com +20% de dano de feitiço recebido, então seguir com o próprio Bushwhack ou com o nuke de um aliado dentro dos 7s de marca aumenta o dano final da troca.
- fonte: constants_abilities.json (hoodwink_hunters_boomerang); OpenDota itemPopularity hero 123; dotacoach.gg/en/heroes/hoodwink (confirma que a habilidade do shard é o Hunter's Boomerang)

#### Force Staff (force_staff)
- porque: empurra 600 de distância em 0,5s, serve pra puxar aliado que iniciou mal ou pra se reposicionar antes de plantar Bushwhack perto da árvore certa.
- detalhe: alcance de 850 quando usado no inimigo, não interrompe a ação de quem recebe, não funciona em unidade dentro de Chronosphere, Duel ou Black Hole.
- fonte: items.json (force_staff); OpenDota itemPopularity hero 123 (8,0% das compras de meio de jogo, 12,9% de fim de jogo, o 3º item mais comum dessa fase)

#### Blink Dagger (blink)
- porque: é o item de late game mais comprado da amostra (39 de 209, 18,7%); fecha a distância pra travar Bushwhack perto de árvore antes do inimigo reagir ou fugir do raio de 265.
- detalhe: teleporta até 1200 de distância; trava por 3s depois de levar dano de herói inimigo ou de Roshan, então não serve pra escapar de quem já está em cima de você.
- fonte: items.json (blink); OpenDota itemPopularity hero 123

#### Eul's Scepter of Divinity -> Wind Waker (cyclone / wind_waker)
- porque: dá um disable de 2,5s pra isolar o carry inimigo da luta ou proteger a própria Hoodwink antes de plantar o combo; o Eul's básico só funciona em inimigo ou em si mesma ("you cannot cyclone allies", items.json), o Wind Waker libera o cyclone em aliados e deixa mover o tornado.
- detalhe: 50 de dano mágico quando a unidade aterrissa, dispel básico; Wind Waker custa 6.800 e dá +35 de inteligência e +30 de velocidade de movimento de bônus fixo.
- contra: qualquer alvo único em iniciação ou fuga, mas não entra se o alvo já tiver imunidade mágica.
- fonte: items.json (cyclone, wind_waker); OpenDota itemPopularity hero 123 (Eul's 9,1% do late, Wind Waker 3,8%)

#### Scythe of Vyse (sheepstick)
- porque: hex de 2,8s que silencia, desarma e trava o alvo em 140 de velocidade, tirando o carry ou o disabler inimigo da luta por inteiro.
- detalhe: destrói ilusões na hora; aparece em 18 de 209 registros de late game (8,6%), atrás de Blink (18,7%), Force Staff (12,9%) e Eul's/Wind Waker (9,1% + 3,8%) nessa fase.
- contra: heróis que dependem de canalizar a ultimate ou de atacar pra funcionar, já que o hex desarma e silencia ao mesmo tempo.
- fonte: items.json (sheepstick); OpenDota itemPopularity hero 123

### Situacionais
#### Urn of Shadows (urn_of_shadows)
- quando: lane difícil onde o Essence Distiller ainda não compensa o ouro, mas você já quer o soul de cura/dano.
- porque: mesma mecânica de soul do Essence Distiller, por menos da metade do preço (825 contra 1.775).
- detalhe: cura 30 de vida em aliado ou causa 25 de dano por segundo em inimigo por 8s, ganha carga quando herói morre a até 1500 de distância.
- contra: lane de troca constante, onde o soul de dano fecha o kill antes do inimigo recuar.
- fonte: items.json (urn_of_shadows); OpenDota itemPopularity hero 123 (13 de 109 registros de early game, 11,9%)

#### Glimmer Cape (glimmer_cape)
- quando: contra time com burst mágico concentrado em você ou em quem você protege.
- porque: barreira de até 375 de dano mágico mais invisibilidade por 5s, podendo ser lançado durante canalização.
- detalhe: delay de 0,5s pra ficar invisível, +20 de velocidade e 20% de resistência mágica enquanto ativo.
- contra: nuke mágico único de até 375 de dano; não cobre burst físico.
- combo: Glimmer em si mesma pra se aproximar invisível e abrir com Bushwhack antes do time inimigo notar.
- fonte: items.json (glimmer_cape); OpenDota itemPopularity hero 123 (1,8% do mid, 6,7% do late)

#### Ghost Scepter (ghost)
- quando: contra carry ou offlaner de ataque básico puro, sem fonte de dano mágico relevante.
- porque: vira imune a dano físico por 4s.
- detalhe: não pode atacar enquanto ativo e fica 30% mais vulnerável a dano mágico; é dispelável.
- contra: carries de right-click puro, que não têm como furar o Ghost Form.
- fonte: items.json (ghost); OpenDota itemPopularity hero 123

#### Solar Crest (solar_crest)
- quando: pra proteger o carry aliado numa luta de poke físico constante.
- porque: dá +5 de armadura, 60 de velocidade de ataque e uma barreira de 350 de dano físico pra quem recebe.
- detalhe: compartilha recarga com Pavise, duração de 7s; não dá os bônus de atributo se usado em si mesma.
- contra: composição de dano físico sustentado tentando abater o carry antes da luta principal.
- fonte: items.json (solar_crest); OpenDota itemPopularity hero 123

#### Black King Bar (black_king_bar)
- quando: contra time com dois ou mais disables de feitiço simples (stun, hex, silence) pra conseguir entrar na luta e plantar o combo.
- porque: dispel básico mais 60% de resistência mágica; pela descrição vigente do item, qualquer efeito negativo de feitiço inimigo não tem efeito durante os 9s.
- detalhe: também dá imunidade a dano refletido e puro.
- contra: disable de feitiço enquanto o Black King Bar estiver ativo.
- fonte: items.json (black_king_bar)

#### Aeon Disk (aeon_disk)
- quando: contra combo de burst de alvo único que historicamente derruba a Hoodwink antes dela reagir.
- porque: dispara sozinho quando a vida cai abaixo de 70%, dando dispel forte e zerando dano recebido e causado por 2,5s.
- detalhe: só dispara com dano de jogador (não conta dano de creep ou torre); o cooldown sobe a cada disparo.
- contra: combo de iniciação mais nuke focado nela antes do time reagir.
- fonte: items.json (aeon_disk); OpenDota itemPopularity hero 123 (2,9% das compras de fim de jogo)

## Pos 5 (suporte duro)
- quando pegar: é o 2º pick do herói nos pros, 96 de 423 (23%) no Atlas tier1 local, mas com a maior taxa de vitória das duas posições (52,1% contra 44,3% do pos4, data/draft.csv); no pub 7.41f é quase tão escolhido quanto o pos4 (43,8% das partidas, 47,2% de vitória, dotacoach.gg/heroes/hoodwink). Pegue quando o time já tem iniciação própria e precisa de alguém plantando wards e segurando a lane em vez de rodar o mapa.
- itens iniciais: mesmo kit inicial do pos4 (tango, blood_grenade, magic_stick, faerie_fire, branches, ward_dispenser), mas com investimento maior em visão: no Atlas tier1 local (data/jogadores_partida.csv) o pos5 compra em média 19,5 sentries e 10,3 observers por jogo contra 13,4 e 8,1 do pos4.
- build: nenhuma fonte usada neste levantamento separa a ordem de itens por posição (o OpenDota itemPopularity do hero_id 123 é agregado); o core de Pos 4 (Boots -> Arcane Boots, Essence Distiller, Aghanim's Shard, Force Staff, Blink, Eul's/Wind Waker, Scythe of Vyse) e os situacionais listados ali se aplicam igual ao pos5, com a diferença de ritmo de compra de wards já citada. Não repito os blocos de item aqui pra não duplicar conteúdo sem fonte nova.

## Roshan
Sem dado de Roshan solo. Hoodwink não aparece na lista de heróis de resumo_por_heroi.json (dota-roshan-solo/data), que cobre carries e cores que efetivamente solam ou participam ativamente do abate; o Atlas tier1 local tem só dados de draft e de partida (423 picks), não de replay de Roshan, então não há como afirmar o que ela faz especificamente contra o Roshan.
