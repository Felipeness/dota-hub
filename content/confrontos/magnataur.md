---
id: confrontos-magnataur
heroi: Magnus
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/magnataur.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/lion.json
- dota-hub-conteudo-novo/pro_dados/windrunner.json
- dota-hub-conteudo-novo/pro_dados/mars.json
- dota-hub-conteudo-novo/pro_dados/pudge.json
- dota-hub-conteudo-novo/pro_dados/axe.json
- dota-hub-conteudo-novo/pro_dados/queenofpain.json
- dota-hub-conteudo-novo/pro_dados/skywrath_mage.json
- dota-hub-conteudo-novo/pro_dados/puck.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/juggernaut.json
- dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- dota-hub-conteudo-novo/pro_dados/invoker.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Contra Shadow Fiend (nevermore)
- placar: Magnus venceu 56 de 121 partidas de pro, 46,3% (pro_dados magnataur.json confrontos).
- por que importa: é o herói que mais aparece contra Magnus em jogo de pro (121 partidas, o maior número de toda a lista). Shadow Fiend é o pick de safelane mais comum do patch, então ele está em quase todo draft em que Magnus também está, mesmo sem dividir rota.
- janelas: até 6 min os dois equipam Power Treads quase junto (Magnus 6,7 min em 397 jogos, SF 5,9 min em 3701 jogos). Dos 6 aos 13 min SF já caça sozinho com Shadowraze no nível 6, enquanto Magnus ainda não tem Blink pra abrir luta. A partir dos 13,6 min (Blink de Magnus, 561 jogos) a iniciativa muda de mão: se Magnus blinca e solta Reverse Polarity em cima do SF, o Requiem of Souls nunca sai, porque o stun quebra o canal. SF tira Black King Bar aos 25,2 min (1554 jogos); depois disso Shockwave e Skewer não acertam mais nele (bkbpierce = No nos dois, constants_abilities.json), mas Reverse Polarity continua acertando o stun (bkbpierce = Yes).
- o que ele faz com você: Requiem of Souls cobre 1000 de raio e causa medo mais dano alto se você estiver perto quando ele soltar; Shadowraze mata rápido quem fica parado no alcance da raze antes do seu Blink sair.
- o que você faz com ele: Blink seguido de Reverse Polarity interrompe o canal do Requiem e estuna o SF mesmo depois do BKB dele, porque a ultimate atravessa imunidade a feitiço (constants_abilities.json, magnataur_reverse_polarity bkbpierce = Yes).
- itens que viram: seu Black King Bar (26,2 min, 175/587 jogos) resolve a raze de perto; depois disso o duelo é sobre quem consegue iniciar primeiro.
- como jogar: evite ficar parado no alcance da raze antes dos 13 min. Depois do Blink, procure pegar o SF isolado: o combo Blink mais RP cancela o Requiem e costuma ser a kill mais fácil da sua rotação.
- fonte: pro_dados/magnataur.json; pro_dados/nevermore.json; constants_abilities.json (magnataur_reverse_polarity, magnataur_shockwave, magnataur_skewer, nevermore_requiem)

## Contra Rubick
- placar: Magnus venceu 38 de 103 partidas de pro, 36,9% (pro_dados magnataur.json confrontos).
- por que importa: segundo herói que mais aparece contra Magnus em jogo de pro (103 partidas) e é o contrapick mais direto do kit dele: Spell Steal rouba a última magia lançada por um inimigo a até 1000 de distância.
- janelas: Magnus tira Blink aos 13,6 min (561/587 jogos), bem antes do Blink do Rubick (21,6 min, 2782/3990 jogos). Isso significa que no early game Magnus consegue iniciar antes de Rubick ter blink próprio pra reagir. O risco não é o blink dele, é o Spell Steal: se Rubick estiver a até 1000 de distância quando você solta Reverse Polarity, ele rouba a sua ultimate pra usar no seu próprio time depois (duração de 180 a 300s por nível, constants_abilities.json rubick_spell_steal). Aghanim's Shard (27,0 min, 1357/3990) e Ultimate Scepter (27,4 min, 1119/3990) chegam tarde, bem depois do seu BKB (26,2 min).
- o que ele faz com você: Fade Bolt silencia e reduz sua resistência mágica; Telekinesis te lança pra fora da posição no meio da luta. E o pior: rouba sua Reverse Polarity se estiver perto quando você solta.
- o que você faz com ele: Rubick tem pouca vida, então o cleave do Empower mata ele rápido depois que a luta abre. E a sua Reverse Polarity segue estunando mesmo que ele tenha BKB, porque bkbpierce = Yes (constants_abilities.json).
- itens que viram: nenhum item seu resolve o Spell Steal. A solução é posicional: gaste uma skill mais barata (Shockwave ou Skewer) pra puxar o Rubick a descoberto antes de soltar a RP, ou cheque se ele está fora dos 1000 de alcance do steal antes de iniciar.
- como jogar: olhe pro minimapa antes de soltar RP. Se não tiver certeza de onde o Rubick está, inicie com Skewer em vez de RP: perder um Skewer roubado dói muito menos que perder a ultimate.
- fonte: pro_dados/magnataur.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, magnataur_reverse_polarity)

## Contra Snapfire
- placar: Magnus venceu 44 de 93 partidas de pro, 47,3% (pro_dados magnataur.json confrontos).
- por que importa: terceiro herói que mais aparece contra Magnus em jogo de pro (93 partidas). Suporte onipresente no patch, por isso cruza com Magnus em quase toda partida mesmo sem rota em comum.
- janelas: Snapfire sai de Aghanim's Shard muito cedo (16,9 min, 1919/2456 jogos, 78% das partidas), o que upa Mortimer Kisses pra Spit Out: um stun em área grande que sai do zero antes do seu Blink (13,6 min) só se ela reagir rápido. Entre os 10 e 20 min ela consegue travar seu engajamento com Firesnap Cookie (pulo mais stun) ou Mortimer Kisses (8 globs de até 360 de dano, alcance alto). Depois dos 20 min, com seu BKB (26,2 min) e o Blink dela (20,7 min, 1171/2456), o jogo vira sobre quem inicia primeiro.
- o que ele faz com você: Mortimer Kisses engole e carrega um aliado seu pra longe do grupo antes da sua RP alcançar; Firesnap Cookie salva quem estava dentro do raio de 430 da sua Reverse Polarity.
- o que você faz com ele: ela é um suporte com pouca vida, então qualquer pickoff isolado (Shockwave mais auto attack com Empower) resolve rápido.
- itens que viram: seu BKB passa por cima do stun de Mortimer Kisses e Firesnap Cookie, abrindo espaço pra você iniciar sem medo de ser interrompido no meio do cast.
- como jogar: antes do seu BKB saír, não force engajamento se ela estiver com Firesnap Cookie disponível; ela pode puxar um aliado alvo e arruinar sua Reverse Polarity.
- fonte: pro_dados/magnataur.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_mortimer_kisses, snapfire_firesnap_cookie)

## Contra Tusk
- placar: Magnus venceu 31 de 82 partidas de pro, 37,8% (pro_dados magnataur.json confrontos).
- por que importa: quarto herói que mais aparece contra Magnus em jogo de pro (82 partidas) e também concorre direto com ele pela iniciação: Snowball viaja o mapa inteiro sem limite real de alcance.
- janelas: Tusk tira Blink aos 19,0 min (2655/2953 jogos), bem depois do seu (13,6 min), então na maioria das partidas quem abre a luta primeiro é Magnus. Antes disso, dos 0 aos 10 min, Tusk já ameaça engajamento com Snowball mesmo sem blink. Walrus Punch vira crítico de 200% a 300% quando ele tem o alvo em cima do Snowball, dano que cresce bastante depois de Phase Boots (13,6 min, 576/2953).
- o que ele faz com você: Snowball te carrega (ou carrega aliado seu) pra posição ruim antes da sua RP alcançar; Walrus Punch critica em cima disso.
- o que você faz com ele: seu Blink sai antes do dele quase sempre, então na maioria das partidas você escolhe o momento da luta, não ele.
- itens que viram: nenhum item seu neutraliza o Snowball diretamente. BKB (26,2 min) protege contra o stun do Ice Shards, mas não contra o posicionamento forçado do Snowball em si.
- como jogar: use sua vantagem de timing de Blink: inicie você primeiro, antes que ele consiga setar o Snowball no seu time.
- fonte: pro_dados/magnataur.json; pro_dados/tusk.json; constants_abilities.json (tusk_walrus_punch, tusk_ice_shards, magnataur_skewer)

## Contra Lion
- placar: Magnus venceu 34 de 79 partidas de pro, 43,0% (pro_dados magnataur.json confrontos).
- por que importa: quinto herói que mais aparece contra Magnus em jogo de pro (79 partidas), suporte clássico de lockdown que ameaça o seu combo antes dele sair.
- janelas: Lion sai de Tranquil Boots muito rápido (7,4 min, 2539/2775) pra ficar no lane o tempo todo. O perigo real é o Hex (2 a 3,2s de duração por nível), que pode travar você bem na hora que você for soltar Blink ou RP. O Blink dele (18,2 min, 2412/2775) chega bem depois do seu (13,6 min), então até lá a vantagem de iniciativa é sua. Finger of Death (600 a 850 de dano) executa Magnus com pouca vida antes do seu BKB (26,2 min).
- o que ele faz com você: Hex cancela seu cast de Blink ou RP se ele acertar primeiro; Finger of Death mata você se estiver com vida baixa e sem Linken's ou BKB.
- o que você faz com ele: Lion tem pouca vida e nenhuma forma de escapar da sua RP; se você conseguir estunar ele primeiro, ele morre rápido pro Empower.
- itens que viram: BKB (26,2 min) bloqueia o Hex (não atravessa imunidade a feitiço) e segura o burst do Finger of Death.
- como jogar: respeite o alcance do Hex (575 a 650) antes de engajar sem BKB; depois do BKB, Lion vira presa fácil.
- fonte: pro_dados/magnataur.json; pro_dados/lion.json; constants_abilities.json (lion_voodoo, lion_finger_of_death)

## Contra Windranger (windrunner)
- placar: Magnus venceu 41 de 79 partidas de pro, 51,9% (pro_dados magnataur.json confrontos).
- por que importa: sexto herói que mais aparece contra Magnus em jogo de pro (79 partidas, empatado com Lion), herói flex que tanto joga de carry quanto de suporte no patch.
- janelas: os dois tiram Power Treads em timing parecido (Magnus 6,7 min, Windranger 7,2 min em 1610/2596). Ela monta Maelstrom aos 13,4 min e upa pra Mjollnir aos 18,3 min (979/2596) pra farmar com lightning splash, enquanto você já tem Blink desde os 13,6 min. BKB dela sai aos 24,4 min, pouco antes do seu (26,2 min).
- o que ele faz com você: Shackleshot te trava antes do Blink se ela acertar o ângulo certo contra uma árvore ou unidade; Focus Fire aumenta muito a velocidade de ataque dela pra focar você.
- o que você faz com ele: Windrun dá evasão só contra ataque físico, não contra a sua Reverse Polarity (é dano mágico mais stun, não ataque). Isso explica o placar favorável: ela não tem resposta real pra RP.
- itens que viram: nenhum item dela neutraliza RP; do seu lado, Blink mais RP ainda funciona mesmo se ela ativar Windrun achando que vai esquivar.
- como jogar: ignore o Windrun dela na hora de iniciar, ele não impede sua ultimate. Cuidado só com o Shackleshot antes do seu Blink sair.
- fonte: pro_dados/magnataur.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_windrun, windrunner_shackleshot, magnataur_reverse_polarity)

## Contra Mars
- placar: Magnus venceu 35 de 76 partidas de pro, 46,1% (pro_dados magnataur.json confrontos).
- por que importa: o herói com o farm mais parecido ao de Magnus na lista em partidas de pro (487 gpm contra 466 gpm, pro_dados mars.json e magnataur.json), o que explica o volume alto de jogos na mesma lane.
- janelas: Mars tira Phase Boots aos 8,5 min (2273/2339) e Blink aos 15,2 min (2136/2339), pouco depois do seu Blink (13,6 min). Isso dá a você uma pequena janela, entre 13,6 e 15,2 min, em que só você tem blink pra abrir luta. Spear of Mars (alcance de 900 a 1200, stun de 1,3 a 2,2s) compete direto com sua Reverse Polarity pelo papel de abrir o combate: quem acerta o spear ou a RP primeiro dita a luta.
- o que ele faz com você: Spear te trava antes do seu Blink se ele reagir rápido; Arena of Blood (raio 550) te impede de fugir e ainda cura o time dele se alguém morrer lá dentro.
- o que você faz com ele: sua janela de Blink mais cedo (13,6 vs 15,2 min) deixa você iniciar primeiro na maioria das partidas; Bulwark reduz dano físico frontal, mas não reduz a sua RP (dano mágico).
- itens que viram: seu BKB (26,2 min) passa perto do Aghanim's Shard dele (21,5 min, que dá stun em até 2 heróis no Spear); o BKB também segura o Spear em si, já que ele não atravessa imunidade.
- como jogar: use a vantagem de Blink mais cedo pra iniciar antes dele conseguir setar o Spear; depois do seu BKB, o duelo fica mais a seu favor.
- fonte: pro_dados/magnataur.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_bulwark, mars_arena_of_blood)

## Contra Pudge
- placar: Magnus venceu 45 de 74 partidas de pro, 60,8% (pro_dados magnataur.json confrontos).
- por que importa: décimo em volume de jogos contra Magnus (74 partidas); o lh10 dele é baixo pra um core em pro (32, pro_dados pudge.json), sinal de que ele passa parte do early game rotacionando em vez de puxar lane sozinho, cruzando caminho com Magnus com frequência.
- janelas: Pudge sai de Phase Boots aos 6,9 min (861/1764) e Blink aos 19,5 min (1085/1764), bem depois do seu (13,6 min). O combo clássico dele é Meat Hook (1300 de alcance, 150 a 360 de dano) seguido de Dismember (canal de 2,75s, 80 a 120 de dano por tick multiplicado por Força). O problema pra ele é que esse mesmo hook agrupa o time inimigo pra você: se ele hookar alguém do seu time perto do resto, sua RP de 430 de raio pega o grupo formado por ele.
- o que ele faz com você: Dismember trava e drena você por quase 3 segundos se ele te hookar, e nem BKB livra você disso: Meat Hook e Dismember atravessam imunidade a feitiço (bkbpierce = Yes nos dois, constants_abilities.json), então a única defesa real é não ficar sozinho no alcance do hook.
- o que você faz com ele: Blink até onde ele hookou e solte RP: o agrupamento que ele criou se vira contra o time dele. Flesh Heap (bloqueio de dano) ajuda a sobreviver, mas não reduz a duração do stun.
- itens que viram: nenhum item seu neutraliza o Dismember em si, já que ele ignora BKB. Aghanim's Scepter do Pudge (17,2 min, 809/1764) aumenta o raio e o dano do Rot, perigoso se você ficar perto demais em corpo a corpo sem sustain.
- como jogar: puna qualquer hook que ele acerte em aliado seu: é basicamente um convite pra RP. Evite ficar sozinho no alcance de 1300 do hook antes do BKB.
- fonte: pro_dados/magnataur.json; pro_dados/pudge.json; constants_abilities.json (pudge_meat_hook bkbpierce, pudge_dismember bkbpierce); aghs_desc (pudge_rot scepter)

## Contra Axe
- placar: Magnus venceu 32 de 61 partidas de pro, 52,5% (pro_dados magnataur.json confrontos).
- por que importa: outro herói de farm e timing parecidos aos de Magnus em pro (517 gpm, pro_dados axe.json), o que explica os 61 jogos de cruzamento direto de lane.
- janelas: os dois saem de Phase Boots e Blink em timing parecido (Axe: Phase Boots 7,2 min, Blink 15,7 min contra 2273/2339 do Mars como referência de offlane; aqui 1786/2015 e 1898/2015). O Blink de Axe (15,7 min) sai pouco depois do seu (13,6 min), outra pequena janela a seu favor. Berserker's Call (raio 315, 2,1 a 3s) força você a atacar ele em vez do time dele, o que desperdiça o cleave do Empower em um alvo errado se você não cancelar a autoatacar.
- o que ele faz com você: Culling Blade executa com até 475 de dano se sua vida cair abaixo do corte, e BKB não ajuda aqui: a execução atravessa imunidade a feitiço (bkbpierce = Yes, constants_abilities.json). A única defesa é não deixar sua vida cair abaixo do corte dele.
- o que você faz com ele: sua Reverse Polarity não é ataque, então o Berserker's Call não te impede de castar ela; você pode RP o time dele mesmo forçado a atacar o Axe.
- itens que viram: Blade Mail dele (12,6 min, 1652/2015) reflete dano se você atacar ele sob Call; prefira castar Shockwave ou RP em vez de autoatacar enquanto estiver chamado.
- como jogar: ignore o impulso de autoatacar o Axe durante o Call, use suas skills no resto do time dele enquanto isso.
- fonte: pro_dados/magnataur.json; pro_dados/axe.json; constants_abilities.json (axe_berserkers_call, axe_culling_blade)

## Contra Queen of Pain (queenofpain)
- placar: Magnus venceu 34 de 66 partidas de pro, 51,5% (pro_dados magnataur.json confrontos).
- por que importa: a mid mais jogada em pro contra Magnus, com 66 partidas, mesmo com rotas de lane diferentes entre os dois.
- janelas: QoP sai de Power Treads aos 8,3 min (2032/2225) e Kaya aos 13,9 min (1940/2225) pra amplificar o burst mágico. Sonic Wave (325 a 625 de dano) mais Scream of Pain formam um combo de kill rápido contra você antes do seu BKB (26,2 min). O Blink dela (65 de mana, cooldown de 6 a 12s conforme o nível, alcance de até 1300) é bem mais barato e mais rápido de recarregar que o seu: ela reposiciona bem mais vezes por luta em volta da sua RP.
- o que ele faz com você: se ela reagir rápido, o Blink dela consegue tirar ela de dentro do raio de 430 da sua RP antes do stun aplicar, já que o blink dela não tem canal.
- o que você faz com ele: ela tem pouca vida; se a RP conectar antes do blink de reação dela, ela morre fácil pro Empower.
- itens que viram: Ultimate Scepter dela (23,5 min, 1396/2225) aumenta o dano do Sonic Wave, o que torna o trade mais perigoso pra você perto dos 24 min se ela chegar antes com o combo.
- como jogar: solte a RP o quanto antes puder depois do Blink: qualquer hesitação dá tempo pra ela reagir com o próprio blink.
- fonte: pro_dados/magnataur.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_blink, queenofpain_sonic_wave)

## Contra Skywrath Mage (skywrath_mage)
- placar: Magnus venceu 36 de 55 partidas de pro, 65,5%: a maior vantagem de Magnus na lista, com amostra de 55 jogos (pro_dados magnataur.json confrontos).
- por que importa: maior taxa de vitória de Magnus contra qualquer herói com 30 ou mais jogos de pro na base.
- janelas: Skywrath sai de Arcane Boots aos 12,8 min (848/1877) e Aghanim's Shard aos 22,3 min (818/1877). Mystic Flare (canal de 2s, 800 a 1600 de dano em área de 170) é o burst dele, mas é um canal: se sua RP estunar ele antes ou durante o cast, o Mystic Flare é cancelado.
- o que ele faz com você: Ancient Seal silencia e aumenta o dano mágico que você recebe em 20% a 35%, perigoso se vier antes da sua RP.
- o que você faz com ele: Skywrath não tem escape nem durabilidade; depois que sua RP conecta, o Empower cleave mata ele rápido, e o canal do Mystic Flare quebra no primeiro stun. Isso explica boa parte dos 65,5%.
- itens que viram: seu BKB (26,2 min) imuniza contra o Ancient Seal; sua RP (bkbpierce = Yes) cancela o Mystic Flare mesmo que ele tenha BKB.
- como jogar: priorize ele no combo se estiver no alcance: ele morre rápido e some com qualquer burst de time que estivesse planejando soltar.
- fonte: pro_dados/magnataur.json; pro_dados/skywrath_mage.json; constants_abilities.json (skywrath_mage_ancient_seal, skywrath_mage_mystic_flare, magnataur_reverse_polarity)

## Contra Puck
- placar: Magnus venceu 26 de 41 partidas de pro, 63,4%: segunda maior vantagem de Magnus na lista, amostra de 41 jogos (pro_dados magnataur.json confrontos).
- por que importa: é o contrapick teórico mais citado pra Reverse Polarity (Phase Shift deixa Puck intocável por 1 a 3,25s), mas o placar de pro mostra Magnus ganhando mesmo assim, o que vale explicar.
- janelas: Puck sai de Power Treads aos 8,3 min (1751/1790) e Blink aos 17,6 min (1710/1790), bem depois do seu Blink (13,6 min). Witch Blade (13,7 min, 1758/1790) dá o burst mágico dela em ataque.
- o que ele faz com você: Phase Shift (0 de mana, cooldown de 6,5 a 8s conforme o nível) deixa Puck intocável durante o canal; se ela reagir no exato momento da sua RP, consegue dodgear o stun ficando etérea.
- o que você faz com ele: na prática, Puck raramente reage rápido o bastante contra uma RP que já pegou o grupo, e ela tem pouca vida pra aguentar o resto da luta sem o resto do time junto. Isso explica o placar a seu favor mesmo com a ferramenta de escape dela existindo.
- itens que viram: Dream Coil dela pode virar contra-engajamento se ela tiver setup, mas sem isso ela só adia a morte com o Phase Shift.
- como jogar: não gaste a RP só porque ela está perto; espere ela gastar o Phase Shift primeiro ou pegue ela fora de alcance de reação.
- fonte: pro_dados/magnataur.json; pro_dados/puck.json; constants_abilities.json (puck_phase_shift, puck_dream_coil, magnataur_reverse_polarity)

## Contra Hoodwink
- placar: Magnus venceu 41 de 66 partidas de pro, 62,1%: terceira maior vantagem de Magnus na lista, amostra de 66 jogos (pro_dados magnataur.json confrontos).
- por que importa: tem ferramentas de disable e fuga contra o combo de Magnus (Bushwhack e Scurry), mas o placar de pro mostra desvantagem pra ela.
- janelas: Hoodwink sai de Arcane Boots aos 12,2 min (2147/2917) e Aghanim's Shard aos 23,8 min (1224/2917). Sharpshooter (canal de até 3s, até 1350 de dano) é o burst de longo alcance dela, perigoso antes do seu BKB (26,2 min).
- o que ele faz com você: Bushwhack (alcance 1100, stun de 1,5 a 2,1s) trava você antes do Blink se ela acertar primeiro; Scurry dá velocidade e evasão pra sair do raio da sua RP saltando entre árvores.
- o que você faz com ele: Hoodwink tem pouca vida e nenhuma forma de tanque; mesmo com Scurry, se a RP conectar no primeiro raio ela morre rápido pro Empower. O placar de 62,1% sugere que, em jogo de pro, Magnus costuma chegar nela antes dela conseguir escapar.
- itens que viram: BKB (26,2 min) bloqueia o Bushwhack (não atravessa imunidade); sem BKB, respeite o alcance de 1100 dela antes de se expor.
- como jogar: antes do BKB, não entre reto no alcance do Bushwhack; depois do BKB, force a luta, porque a vida baixa dela não aguenta o combo.
- fonte: pro_dados/magnataur.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_scurry, hoodwink_sharpshooter)

## Contra Juggernaut
- placar: Magnus venceu só 11 de 42 partidas de pro, 26,2%: a maior desvantagem de Magnus na lista, amostra de 42 jogos (pro_dados magnataur.json confrontos).
- por que importa: os dois são heróis de farm prioritário, mas com volumes bem diferentes em pro (639 gpm do Juggernaut contra 466 gpm do Magnus, pro_dados juggernaut.json e magnataur.json), o que raramente deixa os dois na mesma lane. Ainda assim é o confronto que mais pesa no winrate de Magnus entre os carries mais jogados em pro.
- janelas: Juggernaut sai de Power Treads muito cedo (5,5 min, 876/963) e Battle Fury aos 13,6 min (881/963), quase no mesmo minuto do seu Blink. Dali em diante ele já farma rápido com Blade Fury limpando onda e dando imunidade a feitiço por 5s. Yasha (17,2 min) e Manta Style (20,7 min, 719/963) chegam bem antes do seu BKB (26,2 min) e do seu Harpoon (22,0 min).
- o que ele faz com você: Blade Fury dá imunidade a feitiço, e tanto Shockwave quanto Skewer não atravessam imunidade (bkbpierce = No nos dois, constants_abilities.json). Na prática, ele gira pra fora do seu combo de engajamento em vez de levar o controle.
- o que você faz com ele: sua Reverse Polarity atravessa Blade Fury (bkbpierce = Yes), então se ele estiver girando dentro do raio de 430 quando você soltar, ainda estuna. O problema é chegar até lá: ele já saiu na frente em farm e em item antes do seu combo ficar pronto.
- itens que viram: nenhum item seu neutraliza o Blade Fury em si; a única resposta é forçar o engajamento quando ele não tiver o Blade Fury disponível (cooldown de 18 a 36s, dependendo do nível, constants_abilities.json) ou focar ele com RP mesmo girando, já que o stun ainda acerta.
- como jogar: não gaste Shockwave ou Skewer em cima de Blade Fury ativo, é desperdício. Espere o cooldown dele cair ou vá direto de Blink mais RP, que ainda funciona através da imunidade.
- fonte: pro_dados/magnataur.json; pro_dados/juggernaut.json; constants_abilities.json (juggernaut_blade_fury, magnataur_shockwave, magnataur_skewer, magnataur_reverse_polarity)

## Contra Ember Spirit (ember_spirit)
- placar: Magnus venceu 15 de 45 partidas de pro, 33,3%: segunda maior desvantagem de Magnus na lista, amostra de 45 jogos (pro_dados magnataur.json confrontos).
- por que importa: outro core de farm rápido que raramente compartilha lane com Magnus, com farm bem acima do dele em pro (558 gpm contra 466 gpm, pro_dados ember_spirit.json e magnataur.json), mas tem resposta direta pra engajamento de área.
- janelas: Ember sai de Phase Boots aos 9,1 min (2173/2699) e Flame Guard logo seguida, dando um escudo que absorve 70% do dano mágico recebido até um teto de 60 a 300 por nível. Isso reduz boa parte do dano da sua Shockwave e da sua Reverse Polarity (as duas são mágicas). Fire Remnant (0 de mana, alcance 1400, recarrega em 35s por carga) dá reposicionamento rápido antes ou depois de qualquer engajamento seu.
- o que ele faz com você: Sleight of Fist (bônus de até 170 de dano contra herói) ataca e some rápido no early game, antes do seu Blink (13,6 min) sequer sair; Flame Guard reduz o quanto sua RP e Shockwave realmente tiram dele.
- o que você faz com ele: sem Flame Guard ativo (recarrega a cada uso), ele perde o escudo e vira alvo normal pro seu combo; sua RP ainda estuna mesmo com o escudo, só o dano que fica reduzido.
- itens que viram: seu BKB (26,2 min) chega bem antes do dele (27,1 min, 1130/2699), então na janela entre 26 e 27 min você tem vantagem de iniciação que ele ainda não tem resposta de imunidade.
- como jogar: cheque se o Flame Guard dele está de cooldown antes de abrir a luta: sem o escudo, sua RP mais Empower tira dano cheio.
- fonte: pro_dados/magnataur.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_flame_guard, ember_spirit_fire_remnant, ember_spirit_sleight_of_fist)

## Contra Invoker
- placar: Magnus venceu 21 de 58 partidas de pro, 36,2%: terceira maior desvantagem de Magnus na lista, amostra de 58 jogos (pro_dados magnataur.json confrontos).
- por que importa: terceiro core de farm que não compartilha lane com Magnus, com farm acima do dele em pro (564 gpm contra 466 gpm, pro_dados invoker.json e magnataur.json), mas o alcance do kit dele é o problema real pra quem depende de blink corpo a corpo.
- janelas: Invoker sai de Boots of Travel aos 18,7 min (1447/2026) e Ultimate Scepter aos 20,2 min (1310/2026), bem antes do seu BKB (26,2 min). Sun Strike (175 a 675 de dano, alcance global com 1,7s de delay) e o combo Tornado mais EMP (lift de 1,2 a 3,2s e queima de até 850 de mana convertida em dano) acontecem a uma distância que seu kit corpo a corpo não alcança sem Blink.
- o que ele faz com você: Cold Snap trava você em stuns curtos repetidos toda vez que ele lança uma skill durante a janela; Tornado mais EMP desabilita e queima mana antes de você chegar perto o suficiente pra usar Skewer ou RP.
- o que você faz com ele: uma vez que seu Blink te coloca dentro de 1200 de distância, a Reverse Polarity ainda cancela o combo dele e estuna mesmo sob BKB (bkbpierce = Yes). O problema é sobreviver até chegar lá.
- itens que viram: seu BKB (26,2 min) é a resposta direta pro Cold Snap e pro EMP; antes dele, respeite o alcance de Invoker e não force engajamento sozinho.
- como jogar: espere o BKB antes de forçar a luta contra um Invoker com itens prontos; depois dele, o Blink mais RP ainda neutraliza o combo de longo alcance.
- fonte: pro_dados/magnataur.json; pro_dados/invoker.json; constants_abilities.json (invoker_sun_strike, invoker_tornado, invoker_emp, invoker_cold_snap, magnataur_reverse_polarity)
