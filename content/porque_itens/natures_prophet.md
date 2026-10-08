---
id: porque-itens-natures_prophet
titulo: "Por que cada item: Nature's Prophet"
heroi: Nature's Prophet
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/natures_prophet.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- https://liquipedia.net/dota2/Monkey_King_Bar
- https://liquipedia.net/dota2/Butterfly
- https://dota2.fandom.com/wiki/Dispel
- https://liquipedia.net/dota2/Basic_dispel
- https://winio.ai/blog/articles/the-nullifier-item-in-dota-2
- https://www.esports.net/news/dota/what-does-nullifier-do-in-dota-2/
- https://www.dota2protips.com/items/silver_edge
---

## Magic Wand (magic_wand)
- porque: sobrevive ao harass da lane sem gastar mana nem atrasar o Power Treads.
- detalhe: carrega até 20 vezes (raio de 1.200) e devolve vida e mana por carga quando alguém lança feitiço perto. Os pros compram em 17 de 26 jogos, já na abertura ou até os ~5 min.
- fonte: natures_prophet.json (itens_core.magic_wand.base); items.json (magic_wand.attrib)

## Power Treads (power_treads)
- porque: tira você do alcance de harass da lane com mais velocidade e ataque, sem custo de mana.
- detalhe: +45 de velocidade (herói ranged) e +25 de velocidade de ataque, mais +10 no atributo que você travar (STR pra aguentar poke, AGI pra farmar mais rápido). Os pros fecham aos 5,4 min de mediana; você fecha aos 6,3.
- fonte: natures_prophet.json (itens_core.power_treads); items.json (power_treads.attrib)

## Maelstrom (maelstrom)
- porque: a chance de 25% de chain lightning (110 de dano, 4 alvos) acelera o clear de camp sem gastar mana ou cooldown.
- detalhe: vem de Mithril Hammer + Javelin + Gloves sem receita. Mediana dos pros aos 10,7 min; derruba creeps médios em ~15 s e sustenta o ciclo de 60 a 75 s em 3 a 4 camps que o guia pede.
- combo: Manta Style: a chance e o dano do chain lightning valem 100% também nas suas ilusões (illusion_multiplier_pct = 100 no item), então cada ilusão proca Maelstrom como se fosse você.
- fonte: natures_prophet.json (itens_core.maelstrom); items.json (maelstrom.attrib)

## Mjollnir (mjollnir)
- porque: triplica os saltos do chain lightning (de 4 para 12 alvos) e soma +90 de ataque, virando a "segunda marcha" do farm.
- detalhe: upgrade do Maelstrom (+Hyperstone+receita). Mediana dos pros aos 14,5 min; a partir daí você limpa ~19,5 LH por minuto e chega no ancient do triângulo. Também tem uma ativa de escudo refletor, pouco usada porque você prefere o slot de ataque.
- combo: igual ao Maelstrom, o proc vale 100% nas ilusões de Manta Style; é por isso que o item aparece junto com Manta nos jogos mais longos do herói.
- fonte: natures_prophet.json (itens_core.mjollnir); items.json (mjollnir.attrib)

## Dragon Lance (dragon_lance)
- porque: +130 de alcance (730 no total) deixa você bater e empurrar torre sem entrar no raio de heróis corpo a corpo.
- detalhe: +15 AGI e +10 FOR de bônus. Mediana dos pros aos 16,3 min; soma com o nível 12 (Wrath 2, 140 de dano base) no mesmo pico.
- fonte: natures_prophet.json (itens_core.dragon_lance); items.json (dragon_lance.attrib)

## Hurricane Pike (hurricane_pike)
- porque: usado no inimigo, afasta os dois 425 de distância; usado em você mesmo, empurra você 600 na direção que está olhando. É o botão de fuga de quem aparece de TP sozinho.
- detalhe: vira Dragon Lance mais Force Staff mais receita. Nas vitórias dos pros sai aos 19,0 min de mediana; nas derrotas, só aos 30,3. Quando usado no inimigo, ainda dá 5 ataques extras nele por 6 s, sem limite de alcance.
- contra: Ursa, Phantom Assassin, Chaos Knight (carries corpo a corpo que ganham a fase de 10 a 25 min no matchup do herói): o empurrão de 600 te tira do alcance de ataque deles antes que fechem a distância de novo.
- fonte: natures_prophet.json (itens_core.hurricane_pike; guia.evitar_quando); items.json (hurricane_pike.attrib)

## Black King Bar (black_king_bar)
- porque: a partir daqui você entra em luta de TP sem ser desabilitado no meio do caminho.
- detalhe: 9/8/7 s de imunidade mágica (recarga 95 s) e 60% de redução de dano de feitiço. Mediana dos pros aos 21,9 min; ligue antes do cast de Teleportation acabar, não depois.
- fonte: natures_prophet.json (itens_core.black_king_bar); items.json (black_king_bar.attrib)

## Crystalys (lesser_crit)
- porque: primeiro crit (30% de chance, 160% de dano) que acelera o farm e o push depois do Dragon Lance.
- detalhe: mediana dos pros aos 25,6 min, junto com a Wrath of Nature nível 18 (recarga de 65 a 85 s, até 16 alvos). O crit só vale para ataque básico, não para a Wrath.
- fonte: natures_prophet.json (itens_core.lesser_crit); items.json (lesser_crit.attrib)

## Daedalus (greater_crit)
- porque: troca os 160% de crit do Crystalys por 225%, o pico de dano de ataque básico do late game.
- detalhe: +88 de dano, 30% de chance de crit. Mediana dos pros aos 29,4 min (31,5 no Divine+ parseado; 32 no D2PT, 54,5% de vitória na amostra). Fecha o build de right-click ao lado de Mjollnir, Dragon Lance/Hurricane Pike e BKB.
- fonte: natures_prophet.json (itens_core.greater_crit.base); items.json (greater_crit.attrib)

## Silver Edge (silver_edge)
- porque: quebra a passiva do herói problema e te deixa invisível pra reposicionar sem ser visto.
- detalhe: 17 s de windwalk (+25 de velocidade, +300 de dano no primeiro golpe depois de invisível) e Break no alvo por 5 s. Os pros levam em 5 de 26 jogos, mediana 25,5 min, quando falta iniciação ou o jogo travou.
- contra: Spectre, Bristleback, Phantom Assassin: Break desliga a passiva deles (Dispersion, a redução de dano por trás do Bristleback, Coup de Grace/Blur) pela duração do efeito, então seu right-click conecta com dano cheio, sem retorno nem dodge.
- fonte: natures_prophet.json (itens_situacionais.silver_edge); items.json (silver_edge.attrib); dota2protips.com/items/silver_edge

## Monkey King Bar (monkey_king_bar)
- porque: garante que seu ataque acerte quando a evasão do inimigo começa a te fazer errar.
- detalhe: Pierce (80% de chance, +70 de dano mágico) ignora evasão; soma +50 de dano e +50 de ataque. Os pros levam em 4 de 26 jogos, mediana 32,5 min.
- contra: Phantom Assassin (Coup de Grace/Blur), Butterfly, Windranger (Windrun): evasão alta faz seu ataque básico falhar; o Pierce do MKB garante o golpe na maioria das vezes.
- fonte: natures_prophet.json (itens_situacionais.monkey_king_bar); items.json (monkey_king_bar.attrib); liquipedia.net/dota2/Monkey_King_Bar

## Linken's Sphere (sphere)
- porque: absorve de graça o primeiro feitiço de alvo único antes de te travar numa luta.
- detalhe: bloqueia o próximo cast direcionado a cada ~14 s de recarga, mais 300 de absorção de dano e regen de vida/mana. Os pros levam em 2 de 26 jogos, por volta dos 32 min.
- contra: hex de alvo único (Lion, Shadow Shaman), Dismember (Pudge, Lifestealer): o primeiro cast nesses heróis é bloqueado sem custo, dando tempo pro BKB recarregar.
- fonte: natures_prophet.json (itens_situacionais.sphere); items.json (sphere.attrib)

## Nullifier (nullifier)
- porque: derruba a proteção do inimigo (Force Staff, Ghost Scepter, Eul) antes dele escapar da luta.
- detalhe: Nullify aplica um dispel básico no impacto e um debuff de 4 s que redispela o alvo a cada 0,2 s. Os pros levam em 1 de 26 jogos, aos 38,8 min.
- contra: heróis que se salvam com item de alvo único (Ghost Scepter, Eul's Scepter, Force Staff): Nullify remove a proteção na hora; contra Eul, precisa acertar antes do inimigo subir no ar, senão quem lança primeiro ganha.
- nota: o Nullify não tem mais o mute que bloqueava itens ativos (removido em patch anterior); o que sobrou é só o dispel contínuo.
- fonte: natures_prophet.json (itens_situacionais.nullifier); dota2.fandom.com/wiki/Dispel; liquipedia.net/dota2/Basic_dispel; winio.ai/blog/articles/the-nullifier-item-in-dota-2

## Hydra's Breath (hydras_breath)
- porque: substitui o Dragon Lance quando o jogo passa dos 30 min e você precisa bater em mais de um alvo por vez.
- detalhe: mesmo +150 de alcance (não acumula com Dragon Lance), mas o ataque tem 30% de chance de acertar até 3 alvos secundários num cone de 120°, cada um levando 75% do dano. O veneno (2,5 de dano por segundo, 3 s) ajuda contra quem foge. Os pros levam em 4 de 26 jogos, mediana 31 min.
- fonte: natures_prophet.json (itens_situacionais.hydras_breath); items.json (hydras_breath.attrib)

## Aghanim's Shard (aghanims_shard)
- porque: dá uma habilidade nova de dano em área que também revela quem está na neblina.
- detalhe: Curse of the Oldgrowth atinge todo inimigo a até 900 de você, causando 15 de dano por segundo e 7% de slow por árvore ou treant num raio de 250 do alvo, por 7 s, e mostra o alvo escondido. Os pros levam em 6 de 26 jogos, mediana 40 min, só com ouro sobrando.
- combo: quanto mais Treants de Nature's Call vivos perto da luta, mais forte fica o Curse (cada árvore/treant soma dano e slow), o mesmo bônus que já alimenta o Spirit of the Forest.
- fonte: natures_prophet.json (itens_situacionais.aghanims_shard); constants_abilities.json (furion_curse_of_the_forest)

## Aghanim's Scepter (ultimate_scepter)
- porque: Wrath of Nature passa a prender todo mundo que acerta, não só causar dano.
- detalhe: o guia registra 1,5 a 3 s de prisão por salto acertado (mais saltos, mais tempo). Os pros levam em 5 de 26 jogos, mediana 45,7 min: tarde, porque o Scepter não acelera o farm nem o push, só a prisão em luta de time.
- fonte: natures_prophet.json (itens_situacionais.ultimate_scepter)
