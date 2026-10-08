---
id: confrontos-sven
heroi: Sven
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/sven.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/luna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ursa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lina.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/sniper.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/brewmaster.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer (consultas lane_role, partidas de liga 7.40-7.41)
- https://liquipedia.net/dota2/Tiny
---

## Como foi montada esta lista

Sven é carry pos1 puro (714 partidas de pro no 7.40-7.41, 656 de GPM, nível final mediano 22). Os 14 oponentes abaixo vêm de quatro critérios, batidos contra `pro_dados/sven.json` (confrontos de liga pro, endpoint `/heroes/18/matchups` do OpenDota): os 6 pares mais jogados no total (Shadow Fiend, Rubick, Ogre Magi, Jakiro, Snapfire, Hoodwink), os carries pos1 mais comuns no pro mesmo sem lane em comum (Dragon Knight, Luna, Tiny, Ursa), as maiores vantagens da lista com 30 ou mais jogos (Ember Spirit, Lina) e as maiores desvantagens da lista com 30 ou mais jogos (Sniper, Brewmaster). Brewmaster é o único dessa lista que de fato divide lane com o Sven (offlane contra safelane); os outros 13 cruzam o Sven fora da lane, em luta de mid/late.

## Contra Shadow Fiend (nevermore)
- placar: 76 vitórias em 166 partidas de pro (45,8%), Shadow Fiend levemente favorito. Fonte: pro_dados/sven.json (confrontos, hero_id 11).
- por que importa: é o confronto mais jogado do Sven no pro (166 jogos). Shadow Fiend joga na safelane em 56,7% das partidas de pro do período (2.264 de 3.990, partidas pro 7.40-7.41, OpenDota explorer, lane_role), a mesma rota de farm do Sven, o que faz dele o maior rival de farm direto.
- janelas: até os 10 min os dois correm quase junto (Mask of Madness do Sven mediana 10,2 min, do Shadow Fiend também 10,2 min, pro_dados/sven.json; pro_dados/nevermore.json). No nível 7 ele libera Shadowraze com 280 de dano base e raio 250, mas alcance de cast de só 200: só funciona perto. O Sven fecha o Blink aos 17:06 e o BKB aos 22:42, bem antes do Shadow Fiend (BKB mediana 25,2 min, pro_dados/nevermore.json): entre 22:42 e 25:12 o Sven luta livre do Requiem e do Shadowraze (nenhum atravessa BKB) enquanto ele ainda não tem resposta.
- o que ele faz com você: Shadowraze acerta sem alvo num raio de 250 perto dele mesmo (alcance 200: só funciona se você estiver perto); Requiem of Souls (ulti, nível 18, mediana 23-24,5 min) amedronta em área de até 1000, reduz 30% de velocidade e 15% de resistência mágica, mas tem 1,67s de atraso no cast, dá pra ver vindo.
- o que você faz com ele: Storm Hammer (alcance 600) acerta antes dele chegar nos 200 do Shadowraze; Great Cleave atravessa BKB, então mesmo se ele comprar BKB tarde o cleave continua acertando nele.
- itens que viram: BKB do Sven sai 2,5 min antes do dele (22:42 x 25,2, pro_dados/sven.json; pro_dados/nevermore.json): nessa janela Shadowraze e Requiem não fazem nada no Sven. Satanic (34,9 min, pro_dados/sven.json) ainda chega antes do Daedalus dele virar ameaça de verdade em jogo muito longo.
- como jogar: evite trocar perto de árvore ou creep entre 8 e 10 min, é a janela do Shadowraze nível 7. Jogue a luta decisiva entre 22 e 25 min, com BKB ligado e ele ainda sem resposta.
- fonte: pro_dados/sven.json; pro_dados/nevermore.json; OpenDota explorer (lane_role, partidas pro 7.40-7.41); constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, sven_storm_bolt)

## Contra Rubick (rubick)
- placar: 65 vitórias em 153 partidas de pro (42,5%), Rubick favorito.
- por que importa: 2º par mais jogado (153 jogos). É o suporte que mais aposta em visão contra o Sven: compra os três wards (observer, sentry, dispenser) em mais de 85% das partidas de pro (pro_dados/rubick.json), perfil de suporte de roam que mais tenta travar o Sven antes do item spike.
- janelas: Rubick não farma, ele ronda. O Blink dele só sai aos 21:36 (mediana, pro_dados/rubick.json), bem depois do Blink do Sven (17:06): até lá, se o Sven achar o Rubick fora de posição, inicia primeiro. Depois do BKB do Sven (22:42), a dupla Telekinesis + Fade Bolt perde o efeito por completo porque nenhuma atravessa BKB; só a Spell Steal sobra (atravessa BKB), e ela só rouba a última magia lançada por alguém, então o Rubick depende de um aliado do Sven ter acertado algo bom primeiro.
- o que ele faz com você: Telekinesis levanta por até 1,7s e estuna até 1,5s num raio de até 375 quando você cai, de 550 a 625 de alcance (cresce com o passivo Arcane Supremacy); Fade Bolt salta entre alvos reduzindo ataque e dano mágico a cada acerto, o que encolhe seu DPS numa luta prolongada.
- o que você faz com ele: Storm Hammer (600 de alcance) já supera o alcance base da Telekinesis dele; o Rubick tem pouco HP e nenhuma defesa própria, então um Storm Hammer mais Great Cleave costuma resolver sozinho.
- itens que viram: Rubick só tem Blink pra iniciar aos 21:36 (pro_dados/rubick.json), pouco mais de 1 min antes do BKB do Sven (22:42): é a única janela em que ele pode te travar com Telekinesis livre; depois dela, o BKB anula Telekinesis e Fade Bolt de vez. Nullifier do Sven (situacional, items.json) limpa o Glimmer Cape se o Rubick comprar pra fugir depois de errar o combo.
- como jogar: antes do seu BKB, cuidado com ganks de Telekinesis perto de árvore ou parede; depois dele, ignore os disables do Rubick e vá direto nele, ele não tem segunda linha de defesa.
- fonte: pro_dados/sven.json; pro_dados/rubick.json; constants_abilities.json (rubick_telekinesis, rubick_fade_bolt, rubick_spell_steal); items.json (nullifier, glimmer_cape)

## Contra Ogre Magi (ogre_magi)
- placar: 59 vitórias em 118 partidas de pro (50,0%), equilibrado.
- por que importa: 3º par mais jogado (118 jogos), suporte duro clássico contra o Sven; mesmo com disable, o confronto fecha exatamente em 50%.
- janelas: Fireblast (alcance 525, stun 1,2s) chega antes do Sven alcançar o Ogre Magi corpo a corpo, mas o Storm Hammer do Sven (600) tem mais alcance que o Fireblast, então numa troca de iniciativa o Sven costuma estourar primeiro. O Ogre Magi não aparece com Blink Dagger entre os itens mais comprados do pro (pro_dados/ogre_magi.json): ele raramente tem iniciação própria, bem diferente do Sven, que fecha o dele aos 17:06.
- o que ele faz com você: Fireblast estuna 1,2s e pode repetir no mesmo alvo a cada 0,6s se o Multicast procar (chance cresce 1% a cada 16 de Força, inata Dumb Luck); Ignite queima e reduz 25% da velocidade de movimento, ruim se você está perseguindo ou fugindo antes do BKB.
- o que você faz com ele: o alcance do Storm Hammer (600) supera o do Fireblast (525): numa troca direta o Sven estuna primeiro. O Ogre Magi não tem fuga própria além do Blink, que ele raramente compra, então Great Cleave mais Echo Sabre fecham a troca rápido.
- itens que viram: o BKB do Sven (22:42) apaga Fireblast e Ignite por completo, já que nenhum atravessa; o Ogre Magi também não aparece com Black King Bar entre os itens mais comprados do pro (pro_dados/ogre_magi.json), então depois dos 22:42 ele fica sem resposta nenhuma pro Storm Hammer.
- como jogar: puxe a troca de longe, você tem mais alcance de stun; depois do seu nível 6-7 (God's Strength mais Great Cleave) ele não aguenta o corpo a corpo.
- fonte: pro_dados/sven.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast)

## Contra Jakiro (jakiro)
- placar: 53 vitórias em 117 partidas de pro (45,3%), Jakiro levemente favorito.
- por que importa: 4º par mais jogado (117 jogos), é o suporte de área que mais tenta prender o Sven no lugar certo pra queimar com a ulti.
- janelas: o combo dele (Ice Path, até 2s de stun num raio de 150, seguido de Macropyre, 100 a 200 de dano por segundo por 10s) precisa do Sven parado dentro da área; mas nenhum dos dois atravessa BKB, então a partir dos 22:42 o Sven simplesmente anda pra fora e os dois param de machucar. Antes disso é a janela mais perigosa: Macropyre não é dispelável de nenhuma forma, só sair da área resolve.
- o que ele faz com você: Dual Breath soma dano em linha; Ice Path trava numa área pequena (raio 150) mas o stun chega a 2s; Macropyre, lançada por cima, aplica DPS alto por 10s inteiros em quem fica parado dentro.
- o que você faz com ele: o Jakiro não tem fuga própria rápida (sem blink no kit), então depois que o Great Cleave e o God's Strength estiverem prontos, alcançar ele é mais fácil do que ele prender você de novo.
- itens que viram: BKB do Sven (22:42) zera Ice Path e Macropyre por completo enquanto durar (9/8/7s conforme o nível); antes disso, Magic Wand e distância resolvem melhor do que tentar tankar a área.
- como jogar: não fique parado dentro da Macropyre esperando ela acabar, saia assim que ela cair; depois do BKB, a dupla Ice Path mais Macropyre perde o combo principal.
- fonte: pro_dados/sven.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_macropyre)

## Contra Snapfire (snapfire)
- placar: 55 vitórias em 114 partidas de pro (48,2%), quase equilibrado.
- por que importa: 5º par mais jogado (114 jogos, empatado com Hoodwink), é o suporte com mais variação de posição contra o Sven, de suporte duro a mid iniciadora.
- janelas: Firesnap Cookie estuna de 1 a 2,2s conforme o nível, mas o pulo tem alcance curto (650 de cast, 425 de distância de salto): ela precisa estar relativamente perto. Scatterblast dá 30% mais dano e 50% mais duração de slow em quem está a até 450 de distância, raio onde o corpo a corpo do Sven normalmente já está. O Blink dela sai mediana aos 20,7 min (pro_dados/snapfire.json), pouco antes do BKB do Sven (22:42): janela curta em que ela ainda pode iniciar sem resposta.
- o que ele faz com você: Firesnap Cookie salta e estuna no pouso; Scatterblast bate mais forte quanto mais perto (até 450); Mortimer Kisses (ulti) é uma barragem de 5,5s em área, mas ela fica exposta e com giro reduzido o tempo todo que estiver lançando.
- o que você faz com ele: Scatterblast e Mortimer Kisses não atravessam BKB (confirmado em constants_abilities.json); o bkbpierce do Firesnap Cookie, o pulo de iniciação em si, não está confirmado na fonte local, então não dá pra garantir que o BKB bloqueia o salto, só o dano da barragem depois dele.
- itens que viram: BKB do Sven anula Scatterblast e Mortimer Kisses por completo; o Nullifier do Sven (situacional, items.json) ainda limpa o Glimmer Cape se ela comprar pra escapar depois de errar o combo.
- como jogar: fique fora dos 450 de raio da Scatterblast quando puder nos primeiros 20 min; depois do BKB, a barragem da Mortimer Kisses em cima de você é quase inofensiva, pode ignorar e focar nela.
- fonte: pro_dados/sven.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_firesnap_cookie, snapfire_scatterblast, snapfire_mortimer_kisses); items.json (nullifier, glimmer_cape)

## Contra Hoodwink (hoodwink)
- placar: 52 vitórias em 114 partidas de pro (45,6%), Hoodwink levemente favorita.
- por que importa: 6º par mais jogado (empate técnico com Snapfire em jogos), é o suporte que mais aposta em visão contra o Sven: compra ward_sentry em 98,5% das partidas de pro e ward_observer em 97,8% (pro_dados/hoodwink.json), perfil de roaming que mais tenta pegar o Sven sozinho na rota.
- janelas: Bushwhack estoura num raio de 265 perto de árvore, estuna de 1,5 a 2,1s e ainda cega a visão do alvo por até 2,1s, perigoso justamente quando o Sven está sozinho limpando camp. Hoodwink não aparece com Blink Dagger entre os itens mais comprados do pro (pro_dados/hoodwink.json): ela raramente tem iniciação própria à distância, diferente do Sven, que fecha o dele aos 17:06.
- o que ele faz com você: Bushwhack prende perto de árvore e some com sua visão por até 2,1s, tempo o bastante pro time dela chegar; Acorn Shot planta árvore no chão, então ela não depende de floresta natural pra montar o combo.
- o que você faz com ele: ela tem pouco HP e nenhuma fuga própria cedo (sem blink no early), então se você sobreviver ao root inicial, Storm Hammer mais Great Cleave fecham rápido.
- itens que viram: a bkbpierce do Bushwhack não aparece confirmada em constants_abilities.json (campo vazio na fonte local), então não dá pra garantir que o BKB bloqueia o root dela; o que resolve de verdade é visão própria (ward/sentry) pra não ser pego perto de árvore sozinho, e o DPS do Echo Sabre pra fechar rápido se ela errar o combo.
- como jogar: evite farmar perto de árvore isolada sem suporte perto nos primeiros 15 min; depois disso, sua vida e seu dano já superam o que ela consegue sozinha.
- fonte: pro_dados/sven.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack)

## Contra Dragon Knight (dragon_knight)
- placar: 48 vitórias em 88 partidas de pro (54,5%), Sven favorito.
- por que importa: é um carry melee de alto volume no pro, que joga safelane em 41% das partidas (707 de 1.710) e mid em 37% (634), partidas pro 7.40-7.41 (OpenDota explorer, lane_role): quando pega safelane, está do lado oposto do mapa em relação ao Sven, então raramente cruza lane cedo; entra na lista porque todo carry muito jogado conta, mesmo sem lane em comum. Os dois são duelistas corpo a corpo, então o confronto é sobre quem trava primeiro.
- janelas: Power Treads sai quase junto dos dois (Dragon Knight 6,0 min, Sven 5,9 min). O Blink dele (16,2 min) sai pouco antes do Blink do Sven (17,1 min): quem notar o outro fora de posição primeiro inicia. O BKB do Sven (22,7 min) chega 0,6 min antes do dele (23,3 min, pro_dados/dragon_knight.json): nessa janela curta o Dragon Tail não tem resposta se o Sven iniciar primeiro.
- o que ele faz com você: Dragon Tail estuna de 1,8 a 2,4s, mas o alcance de cast é só 150, praticamente corpo a corpo; a partir do nível 6 ele vira Elder Dragon Form, um tanque de dano em área que aguenta muito corpo a corpo.
- o que você faz com ele: Storm Hammer (alcance 600) acerta de 450 de distância a mais do que o Dragon Tail dele consegue responder; se você inicia primeiro, ele não trava você antes de levar o combo inteiro.
- itens que viram: o Dragon Tail não atravessa BKB de nenhum dos dois lados, então quem tiver BKB primeiro domina a troca de disable; o Sven sai na frente (22,7 x 23,3 min).
- como jogar: não deixe ele chegar nos 150 de distância pra lançar Dragon Tail sem você já ter estuado ele primeiro com o alcance maior do Storm Hammer; os blinks saem perto um do outro, então visão decide quem inicia.
- fonte: pro_dados/sven.json; pro_dados/dragon_knight.json; OpenDota explorer (lane_role, partidas pro 7.40-7.41); constants_abilities.json (dragon_knight_dragon_tail, sven_storm_bolt)

## Contra Luna (luna)
- placar: 47 vitórias em 99 partidas de pro (47,5%), levemente desfavorável.
- por que importa: é o carry pos1 "puro" mais jogado em pro depois do Shadow Fiend (99 jogos), dois farmers de early/mid comparáveis em GPM (Luna 695 x Sven 656 no pro), incluído pelo critério de mesma posição.
- janelas: os dois sobem Mask of Madness quase no mesmo minuto (Luna 10,0, Sven 10,2). Ela chega no Manta aos 17,2 min, perto do Blink do Sven (17,1). O BKB do Sven sai aos 22,7 min, o dela aos 25,5 min (pro_dados/luna.json): quase 3 min de vantagem em que a Eclipse dela (não atravessa BKB) não funciona nele.
- o que ele faz com você: Eclipse (ulti) solta de 6 a 12 raios num raio de 675 ao redor dela mesma, sem alcance de conjuração (ela precisa estar perto de você), mais forte de noite (10s de "noite" artificial); Moon Glaives faz os ataques dela saltarem em até 6 alvos, bom pra farmar mas não ajuda no 1x1 direto.
- o que você faz com ele: no confronto direto o Storm Hammer trava ela antes da Eclipse ligar, e ela não tem fuga própria cedo, só o Manta (17,2 min).
- itens que viram: BKB do Sven (22,7 min) anula a Eclipse por quase 3 min antes do BKB dela sair; se ela comprar Butterfly (26,1 min) pra evadir, o Monkey King Bar situacional do Sven garante 80% de acerto contra a evasão (items.json).
- como jogar: force a troca entre 22:42 e 25:30, janela em que você tem BKB e ela não; fora disso, evite trocar durante a janela de "noite" da Eclipse dela.
- fonte: pro_dados/sven.json; pro_dados/luna.json; constants_abilities.json (luna_eclipse); items.json (monkey_king_bar)

## Contra Tiny (tiny)
- placar: 28 vitórias em 78 partidas de pro (35,9%), grande desvantagem.
- por que importa: é o pior confronto do Sven entre os carries com amostra grande (78 jogos), encaixa tanto no critério de mesma posição quanto no de maior desvantagem com 30+ jogos.
- janelas: antes do BKB, o Tiny tem o combo Avalanche + Toss pronto desde o nível 6-7 (Echo Sabre dele aos 12,1 min, Blink aos 15,9 min), fase em que o Sven também está montando Echo Sabre (14,5) e Blink (17,1): os dois chegam juntos nessa janela, mas o combo dele é instantâneo e à distância, o que pesa mais. O BKB do Sven sai aos 22,7 min, o do Tiny só aos 26,7 min (pro_dados/tiny.json): quase 4 min de vantagem em que o combo dele (não atravessa BKB) para de funcionar.
- o que ele faz com você: Avalanche cobre um raio de até 370, trava em ticks de 0,3s por 1,5s no total; se ele jogar você de volta (Toss) pra dentro da própria Avalanche nos primeiros 0,75s, você toma o dobro do dano de cada tick, até 720 de dano mágico sem contar o Grow (liquipedia.net/dota2/Tiny, mecânica do combo Avalanche + Toss). É combo instantâneo, sem tempo de reação.
- o que você faz com ele: depois que o combo dele gasta, o Tiny fica sem outro disable; Storm Hammer mais Great Cleave ganham o corpo a corpo direto porque o Sven tem mais sustain, do Mask of Madness cedo ao Satanic mais tarde.
- itens que viram: BKB do Sven chega quase 4 min antes do dele (22,7 x 26,7 min): depois disso, Avalanche + Toss não causa dano nem stun no Sven, e a troca vira disputa de auto-ataque que o Sven ganha.
- como jogar: evite ficar isolado perto dele antes dos 22:42, é a janela do combo; depois do seu BKB, pode cobrar o farm dele sem medo do combo.
- fonte: pro_dados/sven.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss); liquipedia.net/dota2/Tiny (mecânica do combo Avalanche + Toss)

## Contra Ursa (ursa)
- placar: 39 vitórias em 76 partidas de pro (51,3%), Sven levemente favorito.
- por que importa: é o duelista melee mais parecido com o Sven entre os carries (os dois ganham por burst corpo a corpo), com volume de jogos relevante (76), critério de mesma posição.
- janelas: os dois sobem Blink quase juntos (Sven 17,1, Ursa 16,8). BKB: Sven 22,7, Ursa 24,4 min (pro_dados/ursa.json), 1,7 min de vantagem pro Sven. Battle Fury da Ursa (13,7) e Echo Sabre do Sven (14,5) saem na mesma fase de farm (GPM pro: Ursa 624 x Sven 656).
- o que ele faz com você: Overpower dá de 3 a 6 ataques com +400% de velocidade por 20s; combinado com Fury Swipes empilhando dano a cada acerto, é uma janela de burst que pode te matar rápido se você não travar ela primeiro. Enrage (defensivo) atravessa BKB, dá dispel forte e -80% de dano recebido por alguns segundos, então ela pode usar mesmo com o Sven imune.
- o que você faz com ele: Earthshock dela não é stun, só slow (22-40%) e dano mágico, e não atravessa BKB: depois dos 22:42 ela perde esse pedaço do kit contra o Sven. Storm Hammer trava ela antes do Overpower ligar, se você iniciar primeiro.
- itens que viram: Butterfly (situacional do Sven) dá 35% de evasão (items.json) contra o dano físico puro da Ursa.
- como jogar: trave ela com Storm Hammer antes dela ligar o Overpower; se ela usar Enrage, lembre que é resistência (50%) e redução de dano (80%), não imunidade total, então o stun ainda pega, só mais curto.
- fonte: pro_dados/sven.json; pro_dados/ursa.json; constants_abilities.json (ursa_overpower, ursa_earthshock, ursa_enrage); items.json (butterfly)

## Contra Ember Spirit (ember_spirit)
- placar: 39 vitórias em 66 partidas de pro (59,1%), maior vantagem da lista.
- por que importa: é a maior vantagem da lista com amostra de 30+ jogos (66), mesmo sem cruzar lane (Ember joga mid em 96,2% das partidas de pro, 2.605 de 2.709, partidas pro 7.40-7.41, OpenDota explorer, lane_role): dois cores físicos de iniciação, mas o kit dele depende de magia que o BKB do Sven apaga.
- janelas: o BKB do Sven (22,7 min) sai 4,4 min antes do dele (27,1 min, pro_dados/ember_spirit.json). Nessa janela, Searing Chains (o root dele) e Flame Guard (escudo) não atravessam BKB e param de funcionar nele; só Sleight of Fist (o dano físico de iniciação) continua acertando, mas sozinho não prende ninguém.
- o que ele faz com você: Searing Chains prende em correntes por até 2,75s num raio de 400; Sleight of Fist teleporta e ataca todo mundo perto numa rajada rápida, inclusive atravessa BKB; Fire Remnant serve pra ele reposicionar e voltar rápido pra farm ou pra luta.
- o que você faz com ele: o Ember tem pouco HP e nenhuma forma própria de travar o Sven fora da chain; depois do seu BKB, ele só tem o Sleight físico, que o Great Cleave e a vida alta do Sven aguentam melhor do que ele aguenta um Storm Hammer mais crit.
- itens que viram: o Aghanim's Shard do Ember (25,3 min, pro_dados/ember_spirit.json) repõe uma carga de Fire Remnant sempre que um herói inimigo morre perto dele (constants/aghs_desc, OpenDota), útil pra ele se reposicionar rápido de novo depois de uma luta, mas não ajuda a travar o Sven no 1x1.
- como jogar: fique de olho no Fire Remnant posicionado perto de você antes da luta, é o aviso de onde ele vai reaparecer; depois do seu BKB, ignore o Searing Chains e vá direto nele.
- fonte: pro_dados/sven.json; pro_dados/ember_spirit.json; OpenDota explorer (lane_role, partidas pro 7.40-7.41); constants_abilities.json (ember_spirit_searing_chains, ember_spirit_sleight_of_fist); constants/aghs_desc (OpenDota)

## Contra Lina (lina)
- placar: 43 vitórias em 75 partidas de pro (57,3%), 2ª maior vantagem da lista.
- por que importa: segunda maior vantagem da lista, com amostra boa (75 jogos), mesmo sendo majoritariamente mid (85,3% das partidas de pro, 1.264 de 1.481, partidas pro 7.40-7.41, OpenDota explorer, lane_role): ela é nuker de burst, e o Sven é quem mais apaga nuker de burst com BKB cedo.
- janelas: a Lina nem sempre compra BKB (o item não aparece na lista de compras dela nos dados de pro locais): ela depende de matar antes de ser alcançada. O BKB do Sven sai aos 22:42; a partir daí, Laguna Blade (até 750 de dano mágico no nível 3), Dragon Slave e Light Strike Array simplesmente não têm efeito nele.
- o que ele faz com você: Laguna Blade é um nuque de alvo único de até 750 de dano com só 0,25s de atraso; Light Strike Array estuna de 1,2 a 2,4s num raio de 250, alcance de cast 700. Antes do seu BKB, esse combo pode te matar rápido se você estiver sozinho e sem vida de sobra.
- o que você faz com ele: o Storm Hammer (600) chega perto do alcance da Light Strike Array dela (700), e ela não tem fuga própria cedo, o Scepter com Flame Cloak só sai perto dos 19,2 min; com BKB ligado, ela não tem resposta nenhuma pro corpo a corpo do Sven.
- itens que viram: BKB do Sven (22:42) é literalmente o item que decide esse confronto, já que nenhuma das três habilidades principais dela atravessa.
- como jogar: antes do seu BKB, não dê a chance de ela acertar Light Strike Array mais Laguna Blade parado; depois dele, pode ignorar o combo dela por completo e focar matar.
- fonte: pro_dados/sven.json; pro_dados/lina.json; OpenDota explorer (lane_role, partidas pro 7.40-7.41); constants_abilities.json (lina_laguna_blade, lina_light_strike_array)

## Contra Sniper (sniper)
- placar: 28 vitórias em 75 partidas de pro (37,3%), grande desvantagem, 3ª pior da lista (Brewmaster é a pior, Tiny a 2ª).
- por que importa: é o carry/mid de longo alcance mais jogado do pro entre as maiores desvantagens da lista com 30+ jogos (75), mostra o problema clássico do Sven contra quem kita.
- janelas: o Sniper sobe Power Treads praticamente junto com o Sven (ambos aos 5,9 min, pro_dados/sven.json; pro_dados/sniper.json). O Hurricane Pike dele sai perto dos 23,4 min (pro_dados/sniper.json), pouco depois do BKB do Sven (22,7 min): é a resposta dele contra o Sven ter acabado de ficar imune a disable, empurrando o Sven 425 de distância e dando 5 ataques garantidos.
- o que ele faz com você: Assassinate (ulti) acerta de até 3000 de distância, de 300 a 500 de dano, com 2s de mira visível antes de disparar; Take Aim soma alcance de ataque que, com Dragon Lance, passa dos 700, acima dos 600 do seu Storm Hammer.
- o que você faz com ele: sem Blink, você não alcança o Sniper antes dele recuar atirando; com Blink (17:06) você fecha a distância de uma vez, mas se ele tiver Hurricane Pike pronto ele te empurra de volta pra fora do alcance corpo a corpo.
- itens que viram: Blink Dagger do Sven é o item que decide esse confronto, sem ele você não alcança quem kita no alcance maior; o BKB (22:42) ainda apaga Assassinate e Shrapnel por completo quando ligado.
- como jogar: force o engajamento antes dele ter Dragon Lance (16,5 min dele) pronto, senão o alcance vira jogo dele; depois que tiver Blink mais BKB, pule nele assim que ele errar a mira do Assassinate.
- fonte: pro_dados/sven.json; pro_dados/sniper.json; constants_abilities.json (sniper_assassinate)

## Contra Brewmaster (brewmaster)
- placar: 13 vitórias em 45 partidas de pro (28,9%), maior desvantagem da lista.
- por que importa: é a maior desvantagem do Sven com 30+ jogos (45) e, diferente dos outros carries da lista, é também lane de verdade: joga offlane em 95,9% das partidas de pro (818 de 853, partidas pro 7.40-7.41, OpenDota explorer, lane_role), exatamente quem o Sven (safelane) encontra do outro lado da lane.
- janelas: desde a lane, Thunder Clap (raio 400, -60% de velocidade de movimento e -60 de velocidade de ataque por 4s no nível 4) já pune o Sven tentando puxar camp ou segurar wave sozinho. O Scepter do Brewmaster sai aos 19,9 min (pro_dados/brewmaster.json), antes do BKB do Sven (22:42): o Primal Split dele (nível 6, com Scepter ganha um elemental a mais) já está no pico de poder antes do Sven ter resposta.
- o que ele faz com você: Thunder Clap não é stun, é um slow pesado em área que trava sua rota de farm; Primal Split divide ele em 3 (ou 4 com Scepter) elementais independentes, cada um com o próprio disable, difícil de resolver com um BKB só, já que cada elemental age por conta própria.
- o que você faz com ele: o Brewmaster é tanque de Força, então Storm Hammer mais Great Cleave sozinhos demoram a matar ele; o jogo real é farmar rápido o bastante pra que seu item spike (Echo Sabre, Blink, BKB) ultrapasse o dele antes dos 25-30 min.
- itens que viram: nenhum item isolado resolve rápido, o Scepter dele sai antes do seu BKB (19,9 x 22,7); a melhor resposta é Magic Wand cedo pra sobreviver ao Thunder Clap na lane e puxar camps longe da visão dele até você estar na frente.
- como jogar: não dispute troca direta na lane contra o Thunder Clap, puxe camp fora da visão dele; seu poder real só aparece depois dos 22-25 min, quando Echo Sabre e BKB já estão prontos.
- fonte: pro_dados/sven.json; pro_dados/brewmaster.json; OpenDota explorer (lane_role, partidas pro 7.40-7.41); constants_abilities.json (brewmaster_thunder_clap, brewmaster_primal_split)
