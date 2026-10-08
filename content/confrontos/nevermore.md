---
id: confrontos-nevermore
heroi: Shadow Fiend
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/queenofpain.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/windrunner.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/medusa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/oracle.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/night_stalker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/enigma.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lone_druid.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/alchemist.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer (purchase_log e gold_t, partidas de liga 7.40-7.41)
---

## Contra Rubick (rubick)
- placar: 323V/661 (48,9%) em pro. fonte: pro_dados/nevermore.json (OpenDota matchups, 7.40-7.41)
- por que importa: é o herói que mais aparece no mesmo jogo de pro que o Shadow Fiend (661 partidas), quase sempre como suporte 4/5 que pode roubar o Requiem of Souls antes da luta decisiva
- janelas: até 10 min: SF já tem Power Treads (5,9) e Falcon Blade (6,2) pra sustentar o combo de Raze na lane, enquanto Rubick ainda está só com Arcane Boots (10,3) e sem mana pra usar Spell Steal com frequência; 10-21 min: Rubick chega ao nível 6/7 e fica pronto pra roubar o ulti, mas só ganha mobilidade pra se posicionar certo com o Blink Dagger aos 21,6 min, quando SF já fechou Yasha e Dragon Lance (13,3 e 14,0); depois de 27 min: Rubick finaliza Aghanim's Shard (27,0) e Scepter (27,4), podendo roubar e aplicar 2 feitiços ao mesmo tempo contra o time do SF
- o que ele faz com você: Spell Steal copia o Requiem of Souls se Rubick estiver no alcance de 1000 (o Scepter aumenta esse alcance, sem valor fixo documentado nas constantes) quando o SF lançar o ulti pela primeira vez, e ele guarda a cópia por até 300 s pra usar depois contra o próprio time do SF (constants_abilities.json); Fade Bolt reduz o dano mágico do alvo em até 24% por 10 s, encolhendo o dano dos Raze na troca
- o que você faz com ele: cada Shadowraze causa até 280 de dano mágico no nível máximo (constants_abilities.json: nevermore_shadowraze1, shadowraze_damage), e os 3 Razes emendados juntam dano de sobra pra matar Rubick, que tem pouca vida, antes dele confirmar o Spell Steal; depois disso o Frenzy (+35 a 80 de velocidade de ataque por 8 s) alcança ele se tentar fugir
- itens que viram: Black King Bar do SF (mediana 25,2 min) anula o Fade Bolt; o Blink Dagger de Rubick (21,6 min) é o que decide se ele chega perto pra roubar o Requiem com segurança ou morre tentando
- como jogar: não gaste o combo completo de Raze perto de onde Rubick pode estar espiando. Depois do seu primeiro Requiem numa luta, jogue a próxima como se ele tivesse copiado. Com BKB ativo, feche em cima do Rubick primeiro, ele não aguenta nem metade de um combo
- fonte: pro_dados/nevermore.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_fade_bolt, rubick_telekinesis, nevermore_shadowraze1)

## Contra Ogre Magi (ogre_magi)
- placar: 272V/546 (49,8%) em pro. fonte: pro_dados/nevermore.json
- por que importa: 2º herói com mais jogos no mesmo confronto (546), suporte universal que estuna e acelera quem ataca o SF
- janelas: até 11 min: SF já fechou Treads e Falcon Blade; Ogre Magi só tem Arcane Boots aos 11,2 min e Fireblast com stun de 1,2 s em nível baixo; 11-17 min: Ogre chega no nível 6/7 e ganha Multicast (chance de 2-3 Fireblasts ou Bloodlust seguidos de um cast só), enquanto SF já tem Yasha e Dragon Lance (13,3 e 14,0) pra bater de mais longe do alcance de 525 do Fireblast; depois de 19 min: Ogre só fecha itens de utilidade (Hand of Midas, 18,9 min), sem burst de luta, enquanto SF segue montando o kit de dano
- o que ele faz com você: Fireblast estuna 1,2 s e causa até 250 de dano mágico, e o Multicast pode dobrar ou triplicar isso de surpresa, prendendo o SF tempo suficiente pro time inimigo fechar em cima; Bloodlust acelera quem está perseguindo
- o que você faz com ele: os 3 Razes alcançam até 700 de distância (raze3) e matam Ogre Magi, que tem vida baixa, antes dele reagir; o Frenzy entrega velocidade de ataque suficiente pra não deixar ele fugir depois de errar o Fireblast
- itens que viram: Black King Bar do SF (25,2 min) anula o Fireblast e o Ignite; Ogre Magi não tem resposta boa pra isso, ele depende do stun acertar antes do SF ter BKB
- como jogar: espere o Fireblast ser usado, ou fique fora dos 525 de alcance dele, antes de entrar com o combo completo de Raze. Depois do nível 6 dele, jogue com margem de vida, qualquer Fireblast pode vir dobrado pelo Multicast
- fonte: pro_dados/nevermore.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_multicast, ogre_magi_bloodlust)

## Contra Lion (lion)
- placar: 276V/533 (51,8%) em pro. fonte: pro_dados/nevermore.json
- por que importa: 3º mais jogos (533), hard support clássico e o único do grupo de maior volume cujo kit nega o Requiem com silêncio de verdade: a Voodoo (Hex)
- janelas: até 7 min: SF já tem Treads (5,9) e Falcon Blade (6,2); Lion ainda só tem Tranquil Boots (7,4) e Ring of Regen, sem mana pra combo completo; 7-18 min: Lion sobe pro nível 6/7 e ganha o Finger of Death (600 a 850 de dano mágico fixo) junto com a Hex (silêncio e lentidão até 3,2 s), enquanto SF fecha Yasha e Dragon Lance (13,3 e 14,0); essa é a janela onde Lion pode matar o SF sozinho se acertar o combo Impale + Hex + Finger; depois de 18 min: Lion só compra wards e Blink (18,2 min) e não cresce muito mais em dano, enquanto SF entra no Manta (18,5 min, partidas pro 7.40-7.41 (OpenDota)) e no Hurricane Pike (23 min)
- o que ele faz com você: Impale estuna até 2,2 s e emenda com Hex (2 a 3,2 s de silêncio + lentidão), travando a sequência de Raze; sem BKB, o Finger of Death mata o SF de uma vez no nível 1 do ulti, já que ele tem só 538 de vida própria no nível 1 (heroStats.json: base_health 120 + base_str 19)
- o que você faz com ele: Finger of Death não atravessa Black King Bar (bkbpierce no, constants_abilities.json), então com BKB ativo o combo de Lion não tira o SF da luta; cada Shadowraze causa até 280 de dano mágico no nível máximo (constants_abilities.json: nevermore_shadowraze1), e os 3 Razes emendados matam Lion de volta antes dele reagir, se o SF chegar primeiro
- itens que viram: Black King Bar do SF (25,2 min) é a resposta direta ao Finger of Death e à Hex; sem ele, qualquer combo de Lion com stun de aliado antes é risco de morte instantânea pro SF
- como jogar: não entre em luta sem BKB se Lion tiver ulti pronto e você estiver com vida baixa. Com BKB, ative antes de qualquer troca onde ele possa estar perto, o combo dele é instantâneo
- fonte: pro_dados/nevermore.json; pro_dados/lion.json; constants_abilities.json (lion_impale, lion_voodoo, lion_finger_of_death, nevermore_shadowraze1); heroStats.json; OpenDota explorer (purchase_log manta, hero_id 11, liga 7.40-7.41)

## Contra Queen of Pain (queenofpain)
- placar: 254V/491 (51,7%) em pro. fonte: pro_dados/nevermore.json
- por que importa: 4º mais jogos (491) e a única dos 6 primeiros que de fato disputa a mesma lane do SF: as duas são mid clássicas de dano mágico alto e pouca vida
- janelas: 0-9 min: as duas abrem parecido (QoP fecha Power Treads aos 8,3, quase junto do SF em 5,9), farm equilibrado; 9-16 min: QoP monta Kaya (13,9) e depois Staff of Wizardry (16,2) pra virar Kaya and Sange (20,8) e ganhar resistência mágica, enquanto SF fecha Yasha e Dragon Lance (13,3 e 14,0) e entra no Manta (18,5 min, partidas pro 7.40-7.41 (OpenDota)): quem acerta o combo primeiro ganha a troca, porque as duas morrem rápido sem ele; depois de 23 min: QoP fecha Aghanim's Scepter (23,5) pra deixar Shadow Strike em área, enquanto SF fecha Hurricane Pike (23) e BKB (25,2), ficando mais resistente a perseguição do que ela
- o que ele faz com você: Sonic Wave causa de 325 a 625 de dano puro e atravessa Black King Bar (bkbpierce yes, constants_abilities.json), então BKB não impede esse hit; Shadow Strike aplica um DoT de até 80 de dano por 3 s junto com até 55% de lentidão
- o que você faz com ele: QoP tem vida baixa e nenhuma forma de bloquear dano físico ou mágico em área: o combo de Raze mata ela tão rápido quanto ela mata o SF, e o cooldown de 3 s por Raze é menor que o do kit dela pra repetir dano
- itens que viram: Black King Bar não resolve o Sonic Wave dela (atravessa), então contra QoP o BKB do SF só trava o Shadow Strike e o Scream of Pain, não o ulti; o Dragon Lance (14,0 min) ajuda a bater de fora do alcance de 450-600 do Shadow Strike
- como jogar: gaste mana com cuidado na lane, as duas secam rápido. Depois dos 16 min, procure abrir a troca você, seu combo de Raze tem cooldown menor pra repetir dano que o kit dela
- fonte: pro_dados/nevermore.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_sonic_wave, queenofpain_shadow_strike); OpenDota explorer (purchase_log manta, hero_id 11, liga 7.40-7.41)

## Contra Disruptor (disruptor)
- placar: 252V/461 (54,7%) em pro. fonte: pro_dados/nevermore.json
- por que importa: 5º mais jogos (461), suporte cujo kit é desenhado pra parar justamente o tipo de ameaça que o Requiem representa: Static Storm silencia a área toda
- janelas: até 11 min: SF já fechou Treads e Falcon Blade; Disruptor só tem Arcane Boots aos 11,4 min; 11-24 min: Disruptor sobe pro nível 6 e fica pronto pra usar Static Storm (6 s de silêncio num raio de 550) assim que o SF ficar exposto, enquanto SF fecha Yasha, Dragon Lance e Manta (13-16 min); depois de 24 min: Disruptor só fecha Blink Dagger (24,0 min) e Aghanim's Scepter bem tarde (34,9 min), continua sendo puramente utilidade e não acompanha o crescimento de dano do SF
- o que ele faz com você: Static Storm silencia por 6 s numa área de 550 de raio, cancelando o Requiem antes do cast ou qualquer Raze novo; Kinetic Field cria uma parede que trava o SF num raio de 350 por até 4,4 s, e ele não tem dash próprio pra atravessar isso sem Pike ou Blink
- o que você faz com ele: Disruptor tem vida baixíssima e o combo de 3 Razes mata ele fácil se o SF chegar antes do Static Storm estar pronto (recarga alta); fora da janela do ulti, ele não tem resposta pro burst do SF
- itens que viram: Static Storm não atravessa Black King Bar e não é dispensável (bkbpierce no, dispellable no, constants_abilities.json), então o BKB do SF (25,2 min) anula completamente esse silêncio; sem BKB, é a forma mais segura de qualquer suporte parar o Requiem
- como jogar: sempre que Disruptor tiver ulti disponível, tenha BKB pronto antes de iniciar. Sem BKB, jogue pelo flanco pra Static Storm não pegar você junto do resto do time
- fonte: pro_dados/nevermore.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm, disruptor_kinetic_field)

## Contra Snapfire (snapfire)
- placar: 223V/456 (48,9%) em pro. fonte: pro_dados/nevermore.json
- por que importa: 6º mais jogos (456), suporte/offlane flexível com o maior alcance de stun do grupo (Mortimer Kisses, até 3000 de distância), ameaça mesmo de longe na lane
- janelas: até 11 min: SF fecha Treads e Falcon Blade; Snapfire fecha Arcane Boots aos 10,6 min, e seu Aghanim's Shard costuma sair cedo (16,9 min) porque vem do Tormentor, não comprado; 11-21 min: Snapfire sobe Kaya (18,1) pra sustain mágico e Blink (20,7) pra se posicionar pro Mortimer Kisses, enquanto SF fecha Manta e Dragon Lance na mesma janela (13-16 min): quem acerta o combo primeiro define a troca; depois de 21 min: nenhuma das duas builda muito mais burst, a luta vira sobre quem inicia
- o que ele faz com você: Firesnap Cookie estuna até 2,2 s num raio de 300 e dá velocidade pra fechar distância; Mortimer Kisses acerta de até 3000 de distância com 180 a 360 de dano de impacto mais queima no chão, punindo o SF por farmar sozinho e exposto
- o que você faz com ele: Snapfire tem pouca vida pro tipo de dano que o combo de Raze causa; se o SF chega no alcance de 700 (raze3) antes dela usar o Firesnap, o combo mata ela antes de qualquer resposta
- itens que viram: Black King Bar do SF (25,2 min) segura o stun do Firesnap Cookie e o Scatterblast (bkbpierce no, constants_abilities.json); o Aghanim's Shard dela não é no Lil' Shredder, é no Firesnap Cookie: ele passa a curar o alvo e lançar um Mortimer Kiss com 40% do dano de impacto no lugar onde caiu (aghs_desc), ou seja, mais dano direto no SF, não só sustain de farm
- como jogar: fique fora dos 3000 de alcance do Mortimer Kisses quando estiver farmando sozinho. Depois de Treads e Falcon Blade, force a lane antes dela ter o combo Firesnap + Mortimer pronto
- fonte: pro_dados/nevermore.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_firesnap_cookie, snapfire_mortimer_kisses, snapfire_scatterblast); aghs_desc (snapfire shard)

## Contra Tiny (tiny)
- placar: 200V/432 (46,3%) em pro. fonte: pro_dados/nevermore.json
- por que importa: o carry com mais jogos de pro no mesmo confronto do SF (432), mesmo raramente compartilhando lane. Entra pelo critério do projeto: sempre incluir os carries mais jogados contra você, com ou sem lane em comum
- janelas: até 6 min: SF fecha Treads e Falcon Blade (5,9 e 6,2); Tiny fecha Power Treads um pouco antes (6,1) e já tem Soul Ring (6,0) pra spamar Avalanche/Toss; 6-16 min: Tiny monta Blink (15,9) e Void Stone (15,2) pro combo de iniciação, enquanto SF fecha Yasha, Dragon Lance (13,3-14,0) e entra no Manta (18,5 min, partidas pro 7.40-7.41 (OpenDota)). É a janela onde quem inicia primeiro ganha: Avalanche + Toss tira muita vida de uma vez, mas o Raze abre de mais longe; depois de 20 min: SF fecha Hurricane Pike (23) e BKB (25,2) e passa a vencer a troca 1x1, enquanto Tiny só cresce via Grow (ulti) e TP scroll
- o que ele faz com você: Avalanche (até 360 de dano em área) seguido de Toss (até 360 de dano, jogando o SF pra longe, até em cima do próprio time dele) tira a maior parte da vida do SF de uma vez só
- o que você faz com ele: o combo de 3 Razes alcança 700 de distância e mata Tiny antes dele chegar perto pra iniciar, já que o alcance de cast do Toss (800-1100) é maior, mas precisa que ele chegue no alvo primeiro; se o SF fica fora do alcance do combo dele, farma mais rápido cedo e vence depois com o Hurricane Pike
- itens que viram: Hurricane Pike do SF (23 min) empurra Tiny pra longe antes do Toss, ou dá escape depois do Avalanche; Black King Bar (25,2) anula o stun do Avalanche/Toss em luta
- como jogar: não fique parado no alcance de 800-1100 do Toss quando ele tiver o combo pronto. Com Pike, afaste ele primeiro e force o combo de Raze antes dele reiniciar
- fonte: pro_dados/nevermore.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_grow); OpenDota explorer (purchase_log manta, hero_id 11, liga 7.40-7.41)

## Contra Templar Assassin (templar_assassin)
- placar: 219V/431 (50,8%) em pro. fonte: pro_dados/nevermore.json
- por que importa: 2º carry com mais jogos de pro contra o SF (431), outro agi carry que snowballa rápido com kills cedo, mesmo sem lane em comum na maioria das partidas
- janelas: até 7 min: as duas fecham Treads rápido (SF 5,9, TA 6,0); TA já tem Desolator reduzindo armadura aos 14,3 min; 7-17 min: TA monta Blink (17,4) e Desolator (14,3) pra ficar invisível com Meld e emboscar, enquanto SF fecha Yasha, Dragon Lance (13,3-14,0) e Manta (18,5 min, partidas pro 7.40-7.41 (OpenDota)). TA é mais perigosa se conseguir o primeiro ataque surpresa com Meld; SF ganha se acertar o combo de Raze antes, porque ela tem vida baixa; depois de 24 min: TA fecha Hurricane Pike (24,5) e BKB (28,1), enquanto SF já tem BKB antes (25,2) e Daedalus (28,3), chegando no burst de luta mais rápido
- o que ele faz com você: Meld dá +50 a 200 de dano físico e -8 de armadura no próximo ataque saindo da invisibilidade, um burst que ignora boa parte da resistência do SF; Refraction bloqueia até 6 ataques físicos por 17 s e devolve dano (constants_abilities.json), então trocar auto-attack prolongado com ela é ruim
- o que você faz com ele: o combo de Raze é dano mágico, então o Refraction dela (só bloqueia físico) não ajuda em nada contra ele; cada Shadowraze causa até 280 de dano mágico no nível máximo (constants_abilities.json: nevermore_shadowraze1), e os 3 Razes emendados matam TA antes dela conseguir se meldar de novo, a recarga do Meld é alta
- itens que viram: Black King Bar do SF (25,2) anula o burst físico do Meld; o Refraction e o Meld de TA atravessam o próprio BKB dela (bkbpierce yes, constants_abilities.json), o que só importa pra ela usar o kit sob disable, não pra furar o BKB do SF
- como jogar: evite troca de auto-attack longa com ela ativa. Vença com o combo mágico de Raze à distância, onde o Refraction dela não serve
- fonte: pro_dados/nevermore.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_meld, templar_assassin_refraction, nevermore_shadowraze1); OpenDota explorer (purchase_log manta, hero_id 11, liga 7.40-7.41)

## Contra Windranger (windrunner)
- placar: 212V/423 (50,1%) em pro. fonte: pro_dados/nevermore.json
- por que importa: 3º carry/mid flexível com mais jogos contra o SF (423); quando ela vai de pos 2, disputa a mesma lane direto
- janelas: até 9 min: as duas correm pra itens de farm cedo; Windranger fecha Power Treads aos 7,2 e Javelin (caminho do Maelstrom) aos 9,3; 9-18 min: Windranger monta Maelstrom (13,4) e Mjollnir (18,3) pra farmar rápido com proc de raio, enquanto SF fecha Yasha, Dragon Lance (13,3-14,0) e Manta (18,5 min, partidas pro 7.40-7.41 (OpenDota)). SF tende a ganhar a troca direta se acertar o combo primeiro, porque Windranger depende de controle (Shackleshot), não de burst mágico; depois de 20 min: as duas fecham Black King Bar perto (Windranger 24,4, SF 25,2), dali pra frente é sobre quem inicia primeiro
- o que ele faz com você: Shackleshot estuna até 3,25 s se acertar o SF junto de uma árvore ou outro herói atrás dele; Focus Fire dá até 500 de velocidade de ataque com acerto garantido contra um único alvo e atravessa Black King Bar (bkbpierce yes, constants_abilities.json), o suficiente pra abater o SF rápido se ele não tiver BKB pronto a tempo
- o que você faz com ele: o combo de Raze (dano mágico, cooldown de 3 s por Raze) repete mais rápido que o combo dela; se o Shackleshot errar, o SF tem a troca livre
- itens que viram: Black King Bar do SF (25,2) segura o Shackleshot mas não o Focus Fire; contra ela, BKB ajuda a entrar na troca, não a sair do Focus Fire depois
- como jogar: não fique alinhado com árvore ou aliado no alcance de 800 do Shackleshot. Se ela já tiver o Focus Fire ligado em você, corra em vez de lutar, BKB não bloqueia isso
- fonte: pro_dados/nevermore.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_focusfire); OpenDota explorer (purchase_log manta, hero_id 11, liga 7.40-7.41)

## Contra Medusa (medusa)
- placar: 81V/133 (60,9%) em pro, a maior vantagem do SF entre confrontos com 30+ jogos. fonte: pro_dados/nevermore.json
- por que importa: é o duelo carry x carry que o pedido original citou como modelo, mesmo sem lane em comum: duas crescem puramente por farm e item, sem controle de verdade uma na outra antes dos 20 min
- janelas: 0-11 min: Medusa farma rápido no early, fecha Power Treads aos 6,5 e Yasha aos 11,0, pouco mais devagar que o combo Treads + Falcon Blade do SF (5,9-6,2), mas sem pressão de Raze; 11-16 min: Medusa fecha Manta Style aos 15,0, quase junto com o SF (18,5 min, partidas pro 7.40-7.41 (OpenDota)), as duas crescem em paralelo sem brigar de verdade; 16-22 min: SF fecha Hurricane Pike (23) e BKB (25,2) antes de Medusa montar o resto do kit de luta (Butterfly 22,2, Skadi 28,4, Aghanim's Shard 32,0): essa diferença de timing explica o 60,9%, o SF fecha o kit primeiro
- o que ele faz com você: Mystic Snake rouba mana e causa até 240 de dano mágico quicando entre alvos; Stone Gaze (ulti) petrifica por até 2,4 s quem olhar pra ela e atravessa Black King Bar (bkbpierce yes, constants_abilities.json), então BKB não livra o SF de virar pedra se encarar ela de frente
- o que você faz com ele: o SF fecha o kit de luta (Pike, BKB, Daedalus) antes de Medusa fechar o dela, então na maioria das lutas entre 20 e 30 min o SF ganha o burst primeiro; a Mana Shield dela absorve 98% de qualquer dano, incluindo o Shadowraze, enquanto ela tiver mana (constants_abilities.json), então o Raze só machuca de verdade depois que a mana dela esgota
- itens que viram: a Mana Shield de Medusa segura o Shadowraze normalmente enquanto ela tiver mana, não é furada por dano mágico; Stone Gaze obriga o SF a atacar de lado ou de trás, fora do cone de visão dela, pra não virar pedra, mesmo com BKB
- como jogar: não encare o rosto da Medusa em luta, nem com BKB, ataque de lado. Force a troca entre 20 e 28 min, janela onde seu kit de luta já está pronto e o dela ainda não
- fonte: pro_dados/nevermore.json; pro_dados/medusa.json; constants_abilities.json (medusa_stone_gaze, medusa_mystic_snake, medusa_mana_shield); OpenDota explorer (purchase_log manta, hero_id 11, liga 7.40-7.41)

## Contra Oracle (oracle)
- placar: 34V/57 (59,6%) em pro, 2º melhor winrate do SF entre confrontos com 30+ jogos (amostra menor que a dos outros, mas acima do piso de 30). fonte: pro_dados/nevermore.json
- por que importa: mostra o contraste com Lion e Disruptor: Oracle é suporte de cura e escudo, sem silêncio ou stun hard, e por isso não tem resposta pro Requiem
- janelas: até 12 min: SF fecha Treads e Falcon Blade; Oracle só tem Arcane Boots aos 11,7 min, sem pressão de lane; 12-25 min: Oracle sobe pro ulti (False Promise) perto do nível 6, e SF fecha Yasha, Dragon Lance e Manta (13-16 min): dali até 25 min o SF cresce muito mais rápido em dano do que Oracle em utilidade, o kit dela não escala em dano; depois de 25 min: Oracle só fecha Blink (25,0) e Aether Lens (25,4) tarde, continua sem forma de travar ou reduzir o burst do SF
- o que ele faz com você: Fortune's End tira todos os buffs do SF (Frenzy incluso) e causa até 280 de dano mágico; Fate's Edict desarma o SF e dá 100% de resistência a dano mágico (constants_abilities.json), travando o auto-attack dele sem reduzir o dano que o próprio SF causa com o Raze em quem está do outro lado
- o que você faz com ele: Oracle não tem stun nem silêncio, o combo de Raze acerta sem interrupção; False Promise (o único jeito de salvar um aliado) só adia a morte por 7-10 s, não impede o SF de simplesmente trocar de alvo ou esperar acabar
- itens que viram: False Promise atravessa Black King Bar (bkbpierce yes, constants_abilities.json) e pode salvar alguém do combo final do SF por alguns segundos; fora isso, o kit dela não interage com os itens principais do SF
- como jogar: contra Oracle, jogue agressivo, ela não tem ferramenta pra parar seu combo. Guarde o Requiem pra depois do False Promise expirar no alvo que ela salvou
- fonte: pro_dados/nevermore.json; pro_dados/oracle.json; constants_abilities.json (oracle_fortunes_end, oracle_fates_edict, oracle_false_promise)

## Contra Night Stalker (night_stalker)
- placar: 53V/90 (58,9%) em pro, 3º melhor winrate do SF entre confrontos com 30+ jogos. fonte: pro_dados/nevermore.json
- por que importa: offlane/semi-carry agressivo cujo kit depende do ciclo dia/noite do jogo, criando uma janela de poder cíclica, não só por minuto
- janelas: até 7 min: Night Stalker fecha Boots (3,8) e Phase Boots (7,3) rápido pra ganks cedo, geralmente em outra lane; SF fecha Treads/Falcon Blade na mesma faixa (5,9-6,2); qualquer luta durante a noite no jogo (ciclo automático, não minuto fixo) favorece ele, com Crippling Fear e Void bem mais fortes; 17-26 min: Night Stalker fecha Blink (17,1) e BKB (25,8), podendo iniciar de surpresa, enquanto SF no mesmo período já tem Manta (18,5 min, partidas pro 7.40-7.41 (OpenDota)) e Pike (23) pra escapar ou devolver o combo
- o que ele faz com você: de noite, Void estuna até 3,4 s e reduz 50% de velocidade de ataque e movimento; Crippling Fear silencia até 6 s numa área de 375, cancelando qualquer Raze ou Requiem se pegar o SF sem BKB durante a noite
- o que você faz com ele: de dia, o kit dele é bem mais fraco (Void cai pra 1,25 s de stun, Crippling Fear pra 3 s), então o combo de Raze tem muito mais chance de matar ele numa troca diurna do que ele de prender o SF
- itens que viram: Black King Bar do SF (25,2 min, pouco antes do dele, 25,8) anula o Void e o Crippling Fear; com BKB pronto antes de qualquer luta noturna, o maior perigo dele desaparece
- como jogar: evite farmar sozinho de noite sem wards de olho. Force trocas de dia, onde o stun e o silêncio dele são bem mais curtos; depois do seu BKB, a noite deixa de ser problema
- fonte: pro_dados/nevermore.json; pro_dados/night_stalker.json; constants_abilities.json (night_stalker_void, night_stalker_crippling_fear); OpenDota explorer (purchase_log manta, hero_id 11, liga 7.40-7.41)

## Contra Enigma (enigma)
- placar: 23V/67 (34,3%) em pro, o pior confronto do SF entre os que têm 30+ jogos. fonte: pro_dados/nevermore.json
- por que importa: Enigma é offlane/jungle e normalmente não disputa a lane do SF, mas o Black Hole decide teamfight sozinho contra um herói sem fuga própria como ele
- janelas: 0-8 min: Enigma farma sozinho na selva com Demonic Conversion (Eidolons), sem pressão na lane do SF; o combo de Raze limpa os Eidolons fácil, por ser dano em área; 8-18 min: Enigma sobe pro nível 6 e já pode abrir luta com Black Hole, enquanto SF fecha Yasha, Dragon Lance e Manta (13-16 min), itens que não ajudam contra o ulti dele; depois de 25 min: Enigma fecha BKB (25,7, quase junto do SF em 25,2) e, bem mais tarde, Aghanim's Scepter (32,8) pro Black Hole causar mais dano; SF já fechou Pike, BKB e Daedalus antes disso, mas se a luta abrir com o Black Hole primeiro, o kit dele não importa
- o que ele faz com você: Black Hole atravessa Black King Bar (bkbpierce yes, constants_abilities.json) e puxa + estuna por até 4 s causando dano puro, uma das poucas ultimates do jogo que o BKB do SF não resolve; Midnight Pulse causa dano baseado em % da vida atual e também atravessa BKB, então ficar parado na área dela ainda dói mesmo com BKB ativo
- o que você faz com ele: Enigma tem vida baixa e nenhuma fuga própria; se o SF chega no alcance do combo de Raze (até 700) antes do Black Hole carregar (canal de até 4 s, dá tempo de interromper com stun de aliado), ele morre antes de puxar ninguém
- itens que viram: nenhum item do SF segura o Black Hole em si, nem BKB; a única solução é não deixar Enigma viver até o nível 6 que ele precisa pro ulti, ou interromper o canal com stun externo, já que o próprio SF não tem disable nos outros heróis
- como jogar: priorize o kill em Enigma antes dele conseguir abrir Black Hole numa teamfight. Se o Black Hole já começou, saia do raio de 420 correndo em vez de usar BKB, que não ajuda aqui
- fonte: pro_dados/nevermore.json; pro_dados/enigma.json; constants_abilities.json (enigma_black_hole, enigma_midnight_pulse)

## Contra Lone Druid (lone_druid)
- placar: 24V/65 (36,9%) em pro, 2º pior confronto do SF entre os que têm 30+ jogos. fonte: pro_dados/nevermore.json
- por que importa: outro carry que entra pelo critério do projeto mesmo sem lane em comum; farma com 2 unidades ao mesmo tempo e isola o SF na corrida de patrimônio
- janelas: 0-12 min: Lone Druid farma duas lanes com o Spirit Bear (unidade própria, itens e XP separados); o Urso fecha Maelstrom por volta de 12,1 min, enquanto o SF ainda está montando Yasha (13,3); 12-21 min: o Urso fecha Mjollnir (16,5) e vira uma máquina de farm e dano em área, enquanto SF fecha Manta (18,5 min, partidas pro 7.40-7.41 (OpenDota)) e Pike (23) no mesmo período, mas sozinho não acompanha o ouro de duas unidades farmando; depois de 21 min: Lone Druid fecha Aghanim's Scepter (21,7, Entangle maior) e sobe pro True Form, virando corpo a corpo grande, enquanto SF só fecha BKB e Daedalus depois disso (25,2 e 28,3), já atrás em patrimônio
- o que ele faz com você: o Urso bate cedo com Maelstrom/Mjollnir (proc de raio em área) e o Savage Roar assusta o SF, forçando ele a fugir na direção da própria base com 20% de velocidade extra: serve pra tirar o SF da luta à força, não pra alcançar ele fugindo; True Form torna o próprio Lone Druid um lutador corpo a corpo com +50 a 130 de dano, difícil de kitar com o alcance curto do SF
- o que você faz com ele: o Urso tem vida baixa e nenhuma resistência mágica própria; o combo de Raze foca o Urso primeiro, que é o DPS real, e o mata rápido, deixando Lone Druid sem metade do kit até ele voltar, recarga alta no respawn
- itens que viram: Hurricane Pike do SF (23 min) ajuda a manter distância do Urso corpo a corpo; não existe item que neutralize o farm das 2 unidades, a única resposta é matar o Urso em luta e pressionar antes dele voltar
- como jogar: em qualquer troca, mate o Urso antes de focar o Lone Druid, sem ele o combo inteiro perde a maior parte do dano. Evite correr pra longe depois do True Form, o alcance curto dele só funciona se ele te alcançar
- fonte: pro_dados/nevermore.json; pro_dados/lone_druid.json; constants_abilities.json (lone_druid_spirit_bear, lone_druid_true_form, lone_druid_savage_roar); OpenDota explorer (purchase_log manta, hero_id 11, liga 7.40-7.41)

## Contra Alchemist (alchemist)
- placar: 36V/91 (39,6%) em pro, 3º pior confronto do SF entre os que têm 30+ jogos. fonte: pro_dados/nevermore.json
- por que importa: é o confronto citado como exemplo no próprio pedido: dois carries que raramente compartilham lane (Alchemist costuma farmar a selva/safelane isolado), mas cuja diferença de power spike decide quem fecha o jogo primeiro
- janelas: 0-6 min: Alchemist fecha Boots (2,7) e Soul Ring (6,0) bem antes do SF (Treads 5,9), porque farma solo direto pro Radiance; SF ainda está montando Falcon Blade (6,2); 6-14 min: Alchemist fecha Radiance aos 13,9 min, e o bônus de ouro por abate do Greevil's Greed ajuda a levar ele a 768 de ouro por minuto na mediana pro (resumo, pro_dados/alchemist.json), bem acima do Shadow Fiend; SF só fecha Yasha e Dragon Lance na mesma janela (13,3-14,0), ainda sem o Manta; depois de 20 min: Alchemist fecha Aghanim's Scepter (22,4) e BKB (25,1), chegando perto do patrimônio de pico (23,2 mil de ouro aos 30 min, mediana de pos1 em partidas pro 7.40-7.41 (OpenDota)) antes do SF fechar Daedalus (28,3) e Satanic (36,0 min, partidas pro 7.40-7.41 (OpenDota)): essa diferença de ritmo de farm explica o 39,6%
- o que ele faz com você: Chemical Rage (ulti) dá regeneração alta e velocidade de movimento, permitindo caçar o SF fugindo mesmo depois de levar Raze; Acid Spray reduz armadura em até 6 e causa dano em área, bom pra forçar o SF a sair da lane ou da selva dele
- o que você faz com ele: Alchemist tem vida alta de farm safelane, mas pouco burst próprio fora do Unstable Concoction (até 360 de dano se detonado no tempo certo); o combo de Raze machuca ele, mas raramente mata sozinho depois do Radiance, porque ele regenera rápido com Chemical Rage
- itens que viram: Black King Bar do SF (25,2) segura o Unstable Concoction, mas chega quase 4 min depois do BKB do Alchemist (25,1) e bem depois do Radiance dele (13,9): o SF está sempre um passo atrás no timing de itens de sobrevivência nesse confronto
- como jogar: não brigue com ele depois do Radiance sem ter BKB e Pike prontos, ele regenera mais rápido do que o SF causa dano sem o combo completo. Pressione antes dos 14 min, antes do Radiance fechar
- fonte: pro_dados/nevermore.json; pro_dados/alchemist.json; constants_abilities.json (alchemist_chemical_rage, alchemist_unstable_concoction, alchemist_acid_spray); OpenDota explorer (purchase_log satanic hero_id 11, gold_t aos 30 min hero_id 73 lane_role pos1, liga 7.40-7.41)
