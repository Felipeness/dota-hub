---
id: porque-itens-spectre
titulo: "Por que cada item: Spectre"
heroi: Spectre
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/spectre.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- https://liquipedia.net/dota2/Radiance
- https://dota2.fandom.com/wiki/Radiance
---

## Urn of Shadows (urn_of_shadows)
- porque: Sustenta a lane com as cargas e ainda causa dano em quem fugir, antes do Dispersion ficar forte o bastante.
- detalhe: Cada carga cura 30 de vida num aliado ou causa 25 de dano por segundo por 8 s em quem leva o debuff (soul_damage_amount/soul_heal_amount do item). Fecha em mediana 3,6 min no 7000+ (D2PT), em 67% dos jogos; nos pros a mediana é 4,2 min. É a sustain que falta porque o Dispersion só chega a 9% no nível 4 (aos 5:00).
- combo: Junto com o Magic Wand cobre a lane até o Power Treads; depois pode virar Spirit Vessel ou ficar puro.
- fonte: spectre.json (itens_core.urn_of_shadows, power_spikes); items.json (urn_of_shadows)

## Magic Wand (magic_wand)
- porque: Carrega vida e mana de graça com o feitiço que o inimigo já ia gastar na lane, sem sair da rota de farm.
- detalhe: Ganha carga quando um feitiço inimigo visível acerta dentro de 1200 de raio (até 20 cargas, restaura 15 de vida e 15 de mana por carga usada). D2PT: mediana 5,1 min, em 78% dos jogos; pros mediana 5,3 min (59 de 70 jogos).
- fonte: spectre.json (itens_core.magic_wand); items.json (magic_wand)

## Power Treads (power_treads)
- porque: Primeiro pico real do herói: sai da lane com o Haunt liberado e entra no ciclo de farm wave, camp, wave.
- detalhe: +10 no atributo escolhido, +25% de velocidade de ataque e bônus de movimento (55 melee, 45 ranged). No nível 6 o Haunt cria uma ilusão em cada herói inimigo por 6 s, com 35% do seu dano e 125 de mana. D2PT mediana 6,8 min; pros mediana 7,0 (69 de 70 jogos). Até 7:00 os pros venceram 56% (20 de 36), depois 39% (13 de 33).
- combo: Treads em Agilidade alimenta de dano de ataque tanto a Spectre quanto as ilusões do Haunt, que herdam o Desolate.
- fonte: spectre.json (itens_core.power_treads, power_spikes); items.json (power_treads)

## Radiance (radiance)
- porque: É o maior salto de farm do herói: os pros aumentam o ritmo de last hit em 50% nos minutos seguintes.
- detalhe: Aura de 650 de raio com 60 de dano por segundo (35 nas ilusões) em creeps e heróis perto, mais um efeito de cegueira que também afeta o Roshan (dano não, só a cegueira, ver "contra"). Depois do Radiance os pros passam de 9,0 para 13,5 LH/min em 5 min; fechando até 17:30 venceram 68% (19 de 28) contra 38% (6 de 20) fechando entre 17:30 e 20:00, e 50% depois de 20:00.
- contra: A aura cega o Roshan, mas a parte de dano por segundo não afeta ele (Liquipedia e Dota 2 Wiki). Serve pra reduzir o quanto ele te acerta durante um Roshan, não pra acelerar a morte dele.
- combo: 5 min de farm puro (3 a 4 camps grandes seguidos) antes de procurar luta; é esse ritmo que separa os 68% dos 38%.
- fonte: spectre.json (itens_core.radiance, power_spikes, erros_comuns); items.json (radiance); liquipedia.net/dota2/Radiance; dota2.fandom.com/wiki/Radiance

## Yasha (yasha)
- porque: É o componente mais barato do Manta e já acelera o ataque antes dele fechar.
- detalhe: +16 Agilidade, +15 de velocidade de ataque, +10% de movimento. D2PT mediana 20,9 min (96% dos jogos); pros mediana 21,4 (62 jogos).
- combo: Vira Manta Style junto com Diadem, receita do 7.41, no lugar do antigo Sange.
- fonte: spectre.json (itens_core.yasha); items.json (yasha, diadem, manta)

## Manta Style (manta)
- porque: Duas imagens limpam uma wave ou camp inteiro enquanto você farma outro ponto, carregando o Desolate e a aura do Radiance.
- detalhe: 2 imagens por 18 s (recarga 34 s, 125 de mana), com 33% do seu dano em corpo a corpo e 300% de dano recebido: servem pra farmar e empurrar, não pra brigar de frente. Desde o 7.41 o Manta é Yasha + Diadem, então também soma +10 Força e +10 Inteligência de brinde, não só Agilidade. Vencedores pro fecham aos 23,6 min e usam 14 vezes por jogo (perdedores: 26,2 min, 7 usos); nas suas duas derrotas válidas não teve Manta antes dos 30 min.
- combo: Mande as ilusões pra um camp enquanto você farma outro: elas têm Desolate e a aura do Radiance (35 de dano por segundo), então rendem perto do que você faria sozinha.
- fonte: spectre.json (itens_core.manta, power_spikes, erros_comuns); items.json (manta, yasha, diadem)

## Eye of Skadi (skadi)
- porque: Dá slow em todo ataque e corta a cura do alvo pela metade, na hora de puxar pra luta de objetivo.
- detalhe: +35 em todos os atributos, 25% de slow de movimento (50% em alvo ranged) e -20% de velocidade de ataque por 3 s, mais 50% menos cura recebida pelo alvo. D2PT mediana 32,3 min (54% dos jogos, 82% dos inventários finais de jogo longo); pros mediana 33,2 (35 jogos).
- combo: Com o Skadi pronto, comece a lutar por objetivo (Roshan, torre T2) com o time. Os pros deram o último hit em Roshan em 29 de 70 jogos.
- fonte: spectre.json (itens_core.skadi, power_spikes); items.json (skadi)

## Black King Bar (black_king_bar)
- porque: Contra 2 ou mais disables/nukes de alvo, garante o tempo de usar o Haunt e sair vivo da troca.
- detalhe: 9/8/7 s de imunidade a magia por nível do item (4050 de ouro, recarga 95 s). Desolate, Shadow Step e Haunt da Spectre passam por BKB inimigo (marcados "bkbpierce: Yes" nas constantes do jogo).
- contra: Invoker, Lion, Ogre Magi, Leshrac, Earthshaker, Bane: os heróis com 2 ou mais disables/nukes de alvo que mais justificam comprar BKB antes do 5º item.
- combo: No seu histórico, com mortes entre 20 e 30 min, a correção indicada pelo próprio guia é comprar o BKB antes do Skadi.
- fonte: spectre.json (itens_situacionais.black_king_bar, erros_comuns); items.json (black_king_bar); constants_abilities.json (spectre_desolate, spectre_shadow_step, spectre_haunt)

## Abyssal Blade (abyssal_blade)
- porque: Dá o pick-off que falta quando o alvo foge antes do Haunt chegar.
- detalhe: Skull Basher (2875 de ouro) chega por volta de 37 min, o upgrade pra Abyssal Blade (6250) perto de 41. +35 de dano, +26 Força, 30% de resistência a slow e 20% mais regeneração de vida; chance de bash 25% melee / 10% ranged, 1,6 s de stun no upgrade. D2PT: Basher em 41,5% das builds, Abyssal em 29%.
- fonte: spectre.json (itens_situacionais.abyssal_blade); items.json (abyssal_blade, basher)

## Butterfly (butterfly)
- porque: Contra herói de dano físico, a evasão e o dano extra seguram você viva na troca e ainda sobem seu DPS.
- detalhe: +35 Agilidade, +25 de dano, +20% de velocidade de ataque base e 35% de evasão (5450 de ouro). D2PT: 22,4% das builds aos 40 min, 37% dos inventários finais de 6 slots.
- contra: Axe, Ursa, Drow Ranger, Sniper, Gyrocopter: heróis de dano físico direto, onde a evasão de fato reduz o dano que você recebe.
- combo: a mesma evasão também reduz os acertos de Roshan num Roshan de time: ele não tem True Strike nem evasão na lista de habilidades (Spell Block, Bash, Slam, Roar of Retribution, Grab and Throw, Teleport), confirmado em constants_abilities.json e no Liquipedia/Dota 2 Wiki.
- fonte: spectre.json (itens_situacionais.butterfly); items.json (butterfly); dota-roshan-solo/data/abilities.json; https://liquipedia.net/dota2/Evasion

## Nullifier (nullifier)
- porque: O mute de 4 s cancela o item ou feitiço de fuga do alvo antes dele escapar do seu Haunt.
- detalhe: 4350 de ouro, +75 de dano, +10 de armadura, projétil de 1800 de velocidade com leve slow; pode ser lançado até numa unidade invulnerável.
- contra: Ghost Scepter, Glimmer Cape, Eul's Scepter, Aeon Disk: o mute e o slow anulam a fuga por esses itens no alvo.
- fonte: spectre.json (itens_situacionais.nullifier); items.json (nullifier)

## Orchid Malevolence / Bloodthorn (orchid)
- porque: Contra alvo móvel ou com fuga própria, o silence garante o pick-off sem precisar acertar primeiro com o Haunt.
- detalhe: Orchid (3275 de ouro, silence de 5 s) evolui pra Bloodthorn (6400) perto de 38 min: +25 Inteligência, +70 de velocidade de ataque, crítico garantido no próximo ataque contra o alvo silenciado e -35% de resistência mágica nele.
- fonte: spectre.json (itens_situacionais.orchid); items.json (orchid, bloodthorn)

## Aghanim's Scepter (ultimate_scepter)
- porque: Quando o Haunt é sua entrada principal, o Scepter devolve ele 20 s mais rápido e ainda assusta o alvo.
- detalhe: 4200 de ouro; corta a recarga do Haunt de 160/150/140 para 140/130/120 s e dá fear de 2 s mais 50% de slow numa área de 400 na primeira Reality usada numa ilusão de cada Haunt.
- fonte: spectre.json (itens_situacionais.ultimate_scepter); items.json (ultimate_scepter); constants_abilities.json (spectre_haunt)

## Aghanim's Shard (aghanims_shard)
- porque: Deixa o Dispersion ativo, com mais devolução de dano justo quando o inimigo inicia em cima de você.
- detalhe: 1400 de ouro; +50% de absorção e reflexo do Dispersion por 5 s, custando 50 de mana, recarga de 25 s.
- fonte: spectre.json (itens_situacionais.aghanims_shard); items.json (aghanims_shard)

## Refresher Orb (refresher)
- porque: Em jogo de 45+ minutos, reinicia o Haunt na mesma luta e dobra a entrada que costuma decidir o resultado.
- detalhe: 5000 de ouro, recarga própria de 180 s; reseta todos os itens e habilidades ativas, inclusive o Haunt.
- fonte: spectre.json (itens_situacionais.refresher); items.json (refresher)

## Monkey King Bar (monkey_king_bar)
- porque: Contra evasão pesada, garante que seu ataque acerte em vez de errar.
- detalhe: 5000 de ouro, +50 de dano, 80% de chance de aplicar True Strike (ignora evasão) por ataque.
- contra: Butterfly inimigo, Phantom Assassin: alvo com evasão alta, onde errar o ataque custa o combo inteiro.
- fonte: spectre.json (itens_situacionais.monkey_king_bar); items.json (monkey_king_bar)

## Itens neutros
- porque: Reforçam o que a build já faz: dano puro no T5 com Stygian Desolator, resistência mágica no T3 com Cloak of Flames.
- detalhe: T1 Chipped Vest ou Possessed Mask (56,6% de vitória), T2 Poor Man's Shield ou Mana Draught, T3 Cloak of Flames (56,2%), T4 Giant's Maul ou Prophet's Pendulum (60,6%), T5 Stygian Desolator (65,4%, com viés de jogo longo). Encantamento Alert em 54% a 89% dos tiers.
- fonte: spectre.json (itens_situacionais.neutros)

## Cuidado na build
- porque: Hand of Midas no meio do caminho atrasa o Radiance, que é o item que decide a janela de farm do herói.
- detalhe: Os 11 pros que compraram Midas fizeram Radiance aos 21,3 min, contra 17,4 min de quem não comprou: 4 minutos de atraso justo na parte da build que mais pesa no resultado (68% de vitória fechando até 17:30, 38% fechando entre 17:30 e 20:00).
- fonte: spectre.json (erros_comuns)
