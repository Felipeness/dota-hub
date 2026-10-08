---
id: confrontos-shadow_shaman
heroi: Shadow Shaman
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shadow_shaman.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/warlock.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shadow_demon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/medusa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/troll_warlord.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/sven.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/beastmaster.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/batrider.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/undying.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/shadow_shaman.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/jakiro.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/rubick.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/lion.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/warlock.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/tusk.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/hoodwink.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/shadow_demon.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/troll_warlord.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/beastmaster.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/batrider.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/undying.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/shadow_fiend.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/tiny.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/medusa.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/sven.md
---

## Como essa página foi montada

Shadow Shaman no 7.41 é quase sempre pos 4 (roaming): 1.862 jogos de pro nos patches 7.40 e 7.41, mediana de 297 de ouro/min, 428 de XP/min e só 6 last hit aos 10 minutos (pro_dados/shadow_shaman.json). O kit é Ether Shock (cone, até 9 alvos), Hex (silence + desarma, 2 a 2,9s, não fura BKB), Shackles (canalizada, 2,4 a 4,2s de dreno) e a ultimate em duas formas, Urnaconda (ward único e massivo) ou Mass Serpent Ward (10 wards físicos), as duas furando Black King Bar ao contrário das outras três (dota-hub/content/fichas/shadow_shaman.md, constants_abilities.json). O Scepter deixa o Shackles emitir pulsos de Ether Shock em quem estiver perto e também prender aliados e wards; o Shard faz o Urnaconda virar Mega Ward (api.opendota.com/constants/aghs_desc).

Os 15 oponentes abaixo vêm de quatro critérios, usando só partidas de liga (pro_dados, fonte OpenDota explorer):
1. Os 6 com mais jogos de pro contra ele: Shadow Fiend, Jakiro, Rubick, Tiny, Lion, Warlock.
2. Os pos 4 mais jogados contra ele (mesma posição principal, catálogo local): Tusk, Hoodwink, Shadow Demon (Rubick e Lion do item 1 também são pos 4 primário).
3. Vantagens e desvantagens de destaque com 30+ jogos: vantagem com Medusa, Troll Warlord e Sven; desvantagem com Beastmaster, Batrider e Undying.
4. Os carries mais jogados em pro mesmo sem lane em comum: Shadow Fiend e Tiny (do item 1) já cobrem isso; Medusa, Troll Warlord e Sven (item 3) são a versão "Alchemist contra Morphling" do próprio Shaman, dois carries de farm que ele não encontra na lane mas decide pelo gank.

## Contra Shadow Fiend (nevermore)

- placar: 148/295, 50,2% em pro (pro_dados/nevermore.json, patches 7.40-7.41)
- por que importa: é o oponente mais comum em pro contra o Shaman (295 jogos), um mid que vira alvo prioritário de rotação porque carrega sozinho com Razes.
- janelas: até 12 min Shadow Fiend só farma mid (Falcon Blade aos 4,8 min, Power Treads aos 5,9 min); dos 12 aos 20 min ele pega Blade of Alacrity (12,7), Yasha (13,3) e Dragon Lance (14,0) e começa a aparecer pra matar sozinho com o combo de Raze, é quando o gank do Shaman custa mais caro; depois dos 20 min ele monta Daedalus (demon edge aos 27,2) e só fica seguro de verdade com o Black King Bar, que sai tarde (mediana 26,4 min, dota-hub/content/porque_itens/shadow_fiend.md).
- o que ele faz com você: sem disable nenhum, mas o Requiem de Souls cobre uma área enorme e mata sozinho se o Shaman estiver perto dele quando ele morre; e três Razes seguidos já tiram boa parte do HP baixo do Shaman se ele for pego no meio da linha.
- o que você faz com ele: antes do BKB (mediana 26,4 min), Hex seguido de Shackles é quase kill garantido, Shadow Fiend não tem disjoint nem disable immunity própria; o problema é alcançar ele, porque ele fica recuado atrás da wave.
- itens que viram: Blink do Shaman (mediana 19,3 min) chega bem antes do BKB do Shadow Fiend (26,4 min), essa janela de 7 minutos é a oportunidade real; depois do BKB, o combo de disable do Shaman não serve pra nada por 9/8/7s, sobra só cercar com ward.
- como jogar: gankar mid antes dos 20 min, de preferência logo depois que ele gastar mana em Raze na wave. Depois do BKB dele, não force o combo sozinho, use Ether Shock (fura menos, mas ainda dá dano) e deixe o resto do time fechar.
- fonte: pro_dados/shadow_shaman.json; pro_dados/nevermore.json; dota-hub/content/porque_itens/shadow_fiend.md

## Contra Jakiro (jakiro)

- placar: 139/287, 48,4% em pro (pro_dados/jakiro.json)
- por que importa: 2º oponente mais comum em pro (287 jogos), o outro suporte de área do jogo, concorre direto por zona de controle e por quem rotaciona primeiro.
- janelas: Jakiro é devagar pra montar, Arcane Boots só aos 11,7 min; a partir do nível 6 ele tem Ice Path + Dual Breath que travam uma dupla sozinho; depois dos 25 min (Staff of Wizardry aos 25,1, caminho pro Scepter) ele vira ameaça de zona com Macropyre, uma faixa longa de dano contínuo.
- o que ele faz com você: Ice Path estuna na primeira tentativa de aproximação, e Macropyre com Scepter vira dano puro e ainda cria paredes de gelo que atrasam a fuga do Shaman, perigoso se o Shaman estiver parado puxando ward.
- o que você faz com ele: Hex silencia Jakiro antes dele soltar Macropyre ou Ice Path, e Shackles sozinho já mata, Jakiro tem HP baixo pra suporte; a corrida é sempre sobre quem trava o outro primeiro, igual contra qualquer suporte de int.
- itens que viram: Force Staff do Shaman (mediana 31 min, ficha local) tira ele de dentro de um Macropyre já lançado; do lado de Jakiro, o Scepter tardio é o que transforma a ultimate de zona cosmética em zona que mata.
- como jogar: evite plantar ward parado dentro do alcance de Dual Breath. Antes do nível 6 dele, pressione; depois, jogue pelo flanco do Macropyre em vez de atravessar o meio.
- fonte: pro_dados/shadow_shaman.json; pro_dados/jakiro.json; dota-hub/content/fichas/jakiro.md

## Contra Rubick (rubick)

- placar: 127/280, 45,4% em pro (pro_dados/rubick.json)
- por que importa: 3º mais comum em pro (280 jogos) e o pos 4 mais jogado contra o Shaman no recorte local (90% das picks dele são pos 4, dota-hub/content/fichas/rubick.md): é o espelho direto de função.
- janelas: os dois sobem o jogo quase no mesmo ritmo (Arcane Boots 10,3 min dele contra 11,2 do Shaman); o Aether Lens do Shaman sai aos 25,9 min, o de Rubick bem antes, aos 22,9 (pro_dados/rubick.json); a diferença maior é o Blink, o do Shaman sai aos 19,3 min e o do Rubick só aos 21,6, então na maior parte do mid game é o Shaman quem ataca primeiro.
- o que ele faz com você: Telekinesis levanta o Shaman e o joga de volta no chão estunando quem estiver perto; e se Rubick ver o Shaman lançar Hex a até 1000 de distância, ele pode roubar o próprio Hex com Spell Steal e usar contra o Shaman depois.
- o que você faz com ele: Hex nele antes que ele conjure qualquer coisa cancela tanto a Telekinesis quanto a tentativa de Spell Steal; os dois têm HP de suporte puro, então o primeiro disable que acerta geralmente fecha a troca.
- itens que viram: o Blink do Shaman sair primeiro (19,3 contra 21,6 min) é a vantagem real, pega Rubick fora de alcance de resposta antes dele ter o próprio blink pra reagir.
- como jogar: não lance Hex à vista de um Rubick sem necessidade nos primeiros 20 minutos, ele pode devolver. Use o Blink mais cedo pra iniciar antes dele, a janela de 2 minutos existe de verdade.
- fonte: pro_dados/shadow_shaman.json; pro_dados/rubick.json; dota-hub/content/fichas/rubick.md

## Contra Tiny (tiny)

- placar: 110/234, 47,0% em pro (pro_dados/tiny.json)
- por que importa: 4º mais comum em pro (234 jogos), um core de farm alto (44 last hit aos 10 min contra 6 do Shaman) que vira alvo de rotação porque escala rápido demais pra ignorar.
- janelas: Tiny já tem combo de iniciação desde cedo, Blink dele sai aos 15,9 min, antes do Shaman (19,3); até lá ele é vulnerável porque não tem disable immunity nenhuma. Depois dos 25 min (Black King Bar mediana 26,7 min no pro, 25,5 segundo o guia local) ele fica seguro pra entrar em luta sem medo de disable.
- o que ele faz com você: Toss pega a unidade mais próxima num raio de 300 ao redor do Tiny, inclusive o Shaman, e joga longe; com Grow no nível 4 o Toss sozinho já faz 710 de dano (dota-hub/content/porque_itens/tiny.md), o suficiente pra matar o Shaman puro.
- o que você faz com ele: antes do BKB dele, Hex trava o Tiny no meio do Avalanche+Toss e evita o combo inteiro; Shackles drena ele rápido porque, apesar do HP alto, ele não tem fuga além do Blink.
- itens que viram: o Blink dele sair antes do do Shaman (15,9 contra 19,3 min) é a maior ameaça, ele pode iniciar primeiro nesses 3 minutos de vantagem; depois do BKB (26,7 min), o combo do Shaman não serve, só sobra poke de Ether Shock.
- como jogar: trate Tiny como prioridade de disable assim que ele tiver Blink, não espere ele vir. Depois do BKB dele, mantenha distância e deixe carries do time entrarem primeiro.
- fonte: pro_dados/shadow_shaman.json; pro_dados/tiny.json; dota-hub/content/porque_itens/tiny.md

## Contra Lion (lion)

- placar: 109/232, 47,0% em pro (pro_dados/lion.json)
- por que importa: 5º mais comum (232 jogos) e o único outro herói do jogo com Hex no kit: espelho de ability, literalmente quem hexa primeiro costuma ganhar a troca.
- janelas: o Blink de Lion sai um pouco antes (18,2 min contra 19,3 do Shaman), então nos primeiros 18 minutos ele tende a atacar primeiro; antes do nível 6 (sem Finger of Death) o Shaman ganha a maioria das trocas porque o combo dele não depende de ultimate. Depois do nível 6 dos dois, quem acerta o Hex primeiro decide.
- o que ele faz com você: o próprio Hex de Lion trava o Shaman do mesmo jeito que o do Shaman trava ele; e Finger of Death, depois do nível 6, é dano puro alto o bastante pra matar um suporte com HP baixo num cast só.
- o que você faz com ele: mesma lógica invertida, Hex nele cancela Mana Drain ou qualquer tentativa de setup; Shackles mais Ether Shock mata Lion sem precisar de ultimate, vantagem do Shaman enquanto Lion não tiver nível 6.
- itens que viram: Glimmer Cape ou Force Staff de qualquer um dos dois lados anula o all-in do outro, porque nenhum combo funciona sem alcançar o alvo primeiro.
- como jogar: antes do nível 6 dele, jogue agressivo. Depois, trate o duelo como roleta, quem erra o primeiro Hex geralmente perde a troca inteira.
- fonte: pro_dados/shadow_shaman.json; pro_dados/lion.json; dota-hub/content/fichas/lion.md

## Contra Warlock (warlock)

- placar: 107/223, 48,0% em pro (pro_dados/warlock.json)
- por que importa: 6º mais comum (223 jogos), suporte duro (100% pos 5 no recorte local, dota-hub/content/fichas/warlock.md) que o Shaman tenta isolar antes do Golem virar o jogo.
- janelas: Warlock é quase inofensivo sozinho até o Shadow Amulet (18,0 min) e o Glimmer Cape (20,5 min); a partir do nível 6 ele tem Chaotic Offering, um Golem que estuna e tanka por 60s, e com Scepter (tardio, 30+ min) chama 2 Golems de uma vez.
- o que ele faz com você: Fatal Bonds prende o time do Shaman junto, então dano que um aliado leva também bate nele; se o Golem conseguir estunar o Shaman no meio da luta, o combo dele não sai.
- o que você faz com ele: Warlock sozinho, sem o Golem, tem HP e mobilidade baixos; Hex mais Shackles mata ele rápido antes do nível 6 ou enquanto o Golem está em cooldown (60s de vida do Golem, recarga alta).
- itens que viram: pegar Warlock isolado antes do Shadow Amulet (18 min) é o que importa, depois disso ele some de vista e é mais difícil de fechar o combo.
- como jogar: cace ele nos primeiros 18 minutos, antes dele ter escape. Depois do Golem disponível, não force 1v1, puxe pra perto do time.
- fonte: pro_dados/shadow_shaman.json; pro_dados/warlock.json; dota-hub/content/fichas/warlock.md

## Contra Tusk (tusk)

- placar: 94/184, 51,1% em pro (pro_dados/tusk.json)
- por que importa: mesma posição principal (pos 4 de roaming, catálogo local) e o 3º pos 4 mais jogado contra o Shaman (184 jogos), vantagem leve.
- janelas: os blinks dos dois saem quase no mesmo minuto (19,0 do Tusk contra 19,3 do Shaman), então a partir daí é corrida de quem inicia primeiro; antes disso Tusk depende de Snowball com um aliado, sozinho ele não ameaça muito.
- o que ele faz com você: Walrus Kick chuta o alvo mais próximo numa direção, estunando e derrubando quem for o chutado (e ainda causa dano a qualquer herói perto do ponto de pouso); se o chutado for o Shaman, pode quebrar o canal de Shackles. Snowball com um aliado dentro pega o Shaman mesmo atrás de ward.
- o que você faz com ele: Hex cancela a tentativa de Snowball e de Walrus Kick (ele não pode usar habilidade hexado), e Tusk não tem fuga própria sem Blink, então o combo do Shaman fecha fácil se ele for pego sozinho.
- itens que viram: o Scepter do Tusk (dá área no Walrus Kick) muda o cálculo em luta de time, mas no 1v1 quem blinka primeiro, entre 19,0 e 19,3 min, geralmente ganha.
- como jogar: evite correr na direção de outros aliados dele (risco de Snowball). Hex nele assim que ele tentar fechar distância, antes do Kick sair.
- fonte: pro_dados/shadow_shaman.json; pro_dados/tusk.json; dota-hub/content/fichas/tusk.md

## Contra Hoodwink (hoodwink)

- placar: 59/159, 37,1% em pro (pro_dados/hoodwink.json), a maior desvantagem real do Shaman nesta lista
- por que importa: mesma posição principal (pos 4) e o pior matchup com amostra boa, a própria ficha do Shaman já cita Hoodwink entre os contras de burst mágico.
- janelas: Hoodwink monta rápido pro papel dela, Arcane Boots aos 12,2 min e Wizard Hat aos 12,4; a partir do nível 6 ela tem Sharpshooter, um nuke de longo alcance que ela carrega de longe, sem precisar se expor.
- o que ele faz com você: Bushwhack estuna e zera a visão do alvo por até 2,1s perto de árvore (ficha local), tempo de sobra pra carregar um Sharpshooter inteiro em cima do HP baixo do Shaman; a diferença de alcance (ela ataca de longe, o Shaman precisa chegar perto pro Hex) pesa contra o Shaman.
- o que você faz com ele: a única saída real é hexar ela antes dela começar a carregar o Sharpshooter, porque depois que o cast começa não dá mais tempo; Shackles de longe ainda funciona se ela já estiver presa.
- itens que viram: Glimmer Cape (mediana 27,3 min no build do Shaman) é a resposta direta, a invisibilidade impede o Sharpshooter de mirar nele; Ghost Scepter ajuda menos porque o dano dela é mágico.
- como jogar: não entre no alcance de visão dela perto de árvore sem necessidade. Priorize Glimmer Cape mais cedo nesse matchup especificamente, e jogue pela visão, não pelo confronto direto.
- fonte: pro_dados/shadow_shaman.json; pro_dados/hoodwink.json; dota-hub/content/fichas/shadow_shaman.md; dota-hub/content/fichas/hoodwink.md

## Contra Shadow Demon (shadow_demon)

- placar: 75/142, 52,8% em pro (pro_dados/shadow_demon.json)
- por que importa: mesma posição principal (pos 4, 48 das 63 picks no recorte local, dota-hub/content/fichas/shadow_demon.md), outro suporte de disable, com vantagem real pro Shaman.
- janelas: o Blink do Shaman sai bem antes (19,3 contra 23,9 min do Shadow Demon), então o Shaman costuma iniciar primeiro boa parte do mid game; Shadow Demon só fica perigoso de verdade depois do Energy Booster e do Shard (25,4 min, Demonic Cleanse).
- o que ele faz com você: Disruption banha o Shaman, tirando ele da luta por 2,75s, nega o combo inteiro se usado na hora certa; Demonic Purge remove buff e desacelera furando BKB, mas o Shaman raramente carrega buff pra perder.
- o que você faz com ele: Hex nele antes do Disruption cancela a tentativa de setup; o combo Shackles mais Ether Shock mata rápido porque Shadow Demon também tem HP de suporte puro.
- itens que viram: a diferença de timing de Blink (quase 5 minutos a favor do Shaman) é a vantagem que mais pesa; depois que os dois têm Blink, vira corrida de reflexo.
- como jogar: pressione cedo, antes do Blink dele sair. Se ele banir o Shaman, espere o efeito passar antes de tentar reengajar, forçar o combo com Disruption ativo não funciona.
- fonte: pro_dados/shadow_shaman.json; pro_dados/shadow_demon.json; dota-hub/content/fichas/shadow_demon.md

## Contra Medusa (medusa)

- placar: 35/53, 66,0% em pro (pro_dados/medusa.json), a maior vantagem real do Shaman com amostra boa
- por que importa: carry que raramente compartilha lane com o Shaman (ela fica na safelane, ele é roaming), exatamente o tipo de confronto que não aparece olhando só pra lane, igual Alchemist contra Morphling: o gank do Shaman decide mais do que qualquer troca direta.
- janelas: antes do Manta (mediana 15,0 min, dota-hub/content/porque_itens/medusa.md) Medusa não tem fuga nenhuma além de Boots, é a janela mais gankável do jogo pra ela; depois do Butterfly (22,2 min no pro, pro_dados/medusa.json) ela já tem evasão o bastante pra sobreviver num pick isolado.
- o que ele faz com você: pouco num gank isolado, Medusa não tem disable de iniciação, só Split Shot e o próprio ataque (a petrificação de Stone Gaze existe, mas depende do inimigo olhar pra ela por 2s seguidos, não é algo que ela usa pra virar uma emboscada); o risco real é só farm rápido se ela ficar livre.
- o que você faz com ele: Mana Shield absorve 98% do dano recebido usando a mana dela (constants_abilities.json), então o combo de dano mágico do Shaman (Ether Shock mais o dreno de Shackles) esvazia o pool de mana dela rápido; antes dela montar itens de mana (Null Talisman aos 2,1 min, Magic Wand aos 4,1), qualquer burst nela sobra pro HP direto, e Hex trava ela sem precisar furar o Mana Shield.
- itens que viram: Blink do Shaman (19,3 min) chega bem antes do Butterfly dela (22,2 min), isso é a janela real de kill; depois do Butterfly, caçar ela sozinho fica ruim.
- como jogar: gankar antes dos 20 minutos, de preferência antes do Manta. Depois do Butterfly, não vale a pena isolar ela sozinho, jogue pra negar território em vez de pick.
- fonte: pro_dados/shadow_shaman.json; pro_dados/medusa.json; dota-hub/content/porque_itens/medusa.md; constants_abilities.json

## Contra Troll Warlord (troll_warlord)

- placar: 28/43, 65,1% em pro (pro_dados/troll_warlord.json), amostra de 43 jogos
- por que importa: outro carry sem lane fixa em comum com o Shaman, 2ª maior vantagem da lista, a mesma lógica do Alchemist contra Morphling, farm rápido sem fuga sofre muito com rotação.
- janelas: Troll monta cedo (Battle Fury mediana 13,4 min, pro_dados/troll_warlord.json) e vira máquina de farm, mas sem Blink nem dash nenhum; a única defesa real sai com o BKB (24,7 min).
- o que ele faz com você: em forma corpo a corpo, Berserker's Rage pode prender o Shaman no meio de uma tentativa de fuga (ensnare, trava mobilidade incluindo Blink), só que isso depende dele já estar batendo nele primeiro.
- o que você faz com ele: Troll não tem disable immunity nem escape, então Hex antes dele trocar pra forma melee cancela o Fervor e o Berserker's Rage por completo; Shackles mais Ether Shock fecha o kill quase sozinho antes do BKB.
- itens que viram: o Blink do Shaman (19,3 min) chega antes do BKB dele (24,7 min), é a janela de 5 minutos onde o gank quase sempre compensa.
- como jogar: cace ele enquanto ele estiver sozinho na jungle ou na lane, antes do BKB. Depois do BKB, deixe pra luta de time, 1v1 não compensa mais.
- fonte: pro_dados/shadow_shaman.json; pro_dados/troll_warlord.json; dota-hub/content/fichas/troll_warlord.md

## Contra Sven (sven)

- placar: 37/60, 61,7% em pro (pro_dados/sven.json)
- por que importa: 3ª maior vantagem da lista, e o único matchup confirmado direto pela própria base do site: o guia de itens do Sven lista Hex do Shadow Shaman entre os disables que o BKB dele bloqueia (dota-hub/content/porque_itens/sven.md).
- janelas: até o BKB (mediana 21,8 min no guia local, 22,7 no pro_dados), Sven não tem disable immunity nenhuma; até os 20 min os pros venceram 100% dos jogos com Sven nesse recorte (sven.md), mas isso é sobre o jogo geral, não sobre o matchup específico. Depois do Black King Bar, ele vira imune ao combo inteiro do Shaman por 9/8/7s.
- o que ele faz com você: nada de disable antes de Warcry/God's Strength, só dano físico cru; o perigo é indireto, se ele conseguir sobreviver até o Daedalus (28,5 min) ou o Satanic (35,7 min, bem tardio) ele mata rápido quem for pego sozinho.
- o que você faz com ele: Hex, Shackles e Ether Shock não furam BKB (constants_abilities.json), então contra o Sven pós-BKB o combo inteiro vira inútil por 9 segundos; antes do BKB, é praticamente kill garantido, Sven não tem fuga.
- itens que viram: o próprio guia do Sven recomenda comprar BKB antes do Crystalys especificamente contra 2+ disables de alvo único, prova de que o time dele já itemiza pensando no Hex do Shaman.
- como jogar: gankar Sven o quanto antes, antes dos 22 minutos. Depois do BKB dele, não entre sozinho, espere o time pra focar durante os 9 segundos de imunidade ou depois que ela cair.
- fonte: pro_dados/shadow_shaman.json; pro_dados/sven.json; dota-hub/content/porque_itens/sven.md; constants_abilities.json

## Contra Beastmaster (beastmaster)

- placar: 43/107, 40,2% em pro (pro_dados/beastmaster.json), maior desvantagem com amostra grande
- por que importa: offlane iniciador cujo stun fura Black King Bar igual a ultimate do próprio Shaman, amostra de 107 jogos é a mais confiável entre as desvantagens.
- janelas: Beastmaster monta rápido pro papel de iniciador, Scepter já sai aos 14,6 min (pro_dados/beastmaster.json) alimentando Drums of Slom, Blink aos 18,6; antes disso ele depende só de Wild Axes pra poke à distância.
- o que ele faz com você: Primal Roar estuna e empurra atravessando BKB (dota-hub/content/fichas/beastmaster.md), encadeia com o time antes do Shaman reagir; Wild Axes zona o Shaman pra longe de pontos de ward.
- o que você faz com ele: Hex funciona se vier antes do Primal Roar, mas a janela é curta porque o Roar não precisa de setup longo; o jeito mais seguro é nunca ficar na linha reta de visão dele perto de iniciação.
- itens que viram: como o stun dele fura BKB igual as wards do Shaman furam, nenhum dos dois tem resposta de item puro contra o disable do outro, o confronto é mais de posicionamento do que de build.
- como jogar: plante ward fora da rota de iniciação dele. Em luta de time, puxe a ward ou o Hex pra abrir nele antes do Roar, não depois.
- fonte: pro_dados/shadow_shaman.json; pro_dados/beastmaster.json; dota-hub/content/fichas/beastmaster.md

## Contra Batrider (batrider)

- placar: 34/85, 40,0% em pro (pro_dados/batrider.json)
- por que importa: 2ª maior desvantagem da lista, e o único matchup que a própria ficha do Shaman cita como motivo direto de comprar Glimmer Cape (dota-hub/content/fichas/shadow_shaman.md).
- janelas: Batrider blinka antes do Shaman (17,7 contra 19,3 min), então na maior parte do mid game ele ataca primeiro; o BKB dele sai tarde (26,7 min), até lá ele depende só da mobilidade pra sobreviver.
- o que ele faz com você: Flaming Lasso prende o alvo furando BKB e arrasta ele pro meio do time dele, cast range curto (só 200) mas Firefly e Sticky Napalm fecham essa distância rápido; uma vez laçado, o Shaman não se move nem ataca até o lasso quebrar.
- o que você faz com ele: Hex nele antes do Napalm empilhar cancela a tentativa de iniciação; o problema é alcançar ele primeiro, já que ele costuma blinkar antes.
- itens que viram: Glimmer Cape (mediana 27,3 min no build do próprio Shaman) é a resposta direta contra o burst mágico dele, a invisibilidade também impede o Lasso de mirar certo.
- como jogar: não ande sozinho perto do alcance de Firefly dele. Se tiver Glimmer Cape pronto, use antes dele chegar perto, não depois do Lasso já ter saído.
- fonte: pro_dados/shadow_shaman.json; pro_dados/batrider.json; dota-hub/content/fichas/shadow_shaman.md; dota-hub/content/fichas/batrider.md

## Contra Undying (undying)

- placar: 17/47, 36,2% em pro (pro_dados/undying.json)
- por que importa: maior desvantagem percentual com amostra válida (47 jogos, acima do corte de 30), espelho de suporte duro que ganha a disputa de zona contra o Shaman.
- janelas: Undying monta devagar, Chainmail aos 12,3 min, Arcane Boots aos 11,0; o Shard (24,4 min) deixa o Tombstone virar bunker pra um aliado, poder de zona que cresce bastante no meio do jogo.
- o que ele faz com você: Tombstone cria zumbis que perseguem e desaceleram todo mundo perto, inclusive o Shaman tentando plantar ward ou se posicionar pro combo; Decay rouba força (e dá o dobro de dano em creep, então também limpa ward e Serpent Ward mais rápido).
- o que você faz com ele: Shackles e Hex ainda funcionam nele normalmente, ele não tem disable immunity, mas chegar perto o bastante geralmente significa atravessar a zona de zumbis primeiro, o que já custa HP antes da troca nem começar.
- itens que viram: nenhum item do Shaman neutraliza a zona do Tombstone diretamente, a saída prática é evitar lutar em cima dele, não tentar atravessar.
- como jogar: não force o combo dentro do raio do Tombstone. Prefira isolar o Undying longe da zona antes de abrir o Hex, ou ignore ele e foque outro alvo na luta.
- fonte: pro_dados/shadow_shaman.json; pro_dados/undying.json; dota-hub/content/fichas/undying.md
