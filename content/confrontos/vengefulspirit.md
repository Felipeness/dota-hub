---
id: confrontos-vengefulspirit
heroi: Vengeful Spirit
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/vengefulspirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/luna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ursa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/juggernaut.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/legion_commander.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/morphling.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lich.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rattletrap.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/beastmaster.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/doom_bringer.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/vengefulspirit.md
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- https://dota2protracker.com/hero/Vengeful+Spirit
- https://dotacoach.gg/en/heroes/vengeful-spirit
- https://liquipedia.net/dota2/Version_7.41e
---

## Contra Shadow Fiend (nevermore)
- placar: 95 vitórias em 187 jogos de pro, 50,8% (OpenDota matchups, patches 7.40 e 7.41)
- por que importa: é o confronto com mais jogos registrados contra ela em todo o dataset de pro, 187 partidas. Não é lane fixa (ela entra como pos1 na safelane, ele costuma circular entre mid e pos1), mas é o herói que mais aparece do lado oposto quando ela joga.
- janelas: até os 7 min os dois só desenvolvem: ela fecha Wraith Band aos 2 min e Power Treads aos 7 (ficha vengefulspirit.md), ele fecha Power Treads aos 5,9 (pro_dados/nevermore.json). Dos 7 aos 14 min ele puxa na frente no farm puro, 78 last hits medianos aos 10 min contra 13 dela no agregado (os 13 dela misturam a amostra antiga de suporte com os jogos novos de pos1, então na prática pos1 ela farma mais perto disso do que esse número sozinho sugere). Dele aos 23-25 min ele fecha Hurricane Pike (23,0) e Black King Bar (25,2), quase no mesmo horário do Scepter dela (22,9), mas sem o pico de dano que vem com Manta e Hydra's Breath só depois dos 28.
- o que ele faz com você: Shadowraze (85 a 280 de dano, recarga de só 3s por raze, constants_abilities.json) fura qualquer posicionamento mal calculado perto dele, e Presence of the Dark Lord reduz sua armadura em -3 a -6 (aura passiva de 1200 de raio) enquanto ele fica perto, piorando o quanto o auto ataque dele dói.
- o que você faz com ele: Magic Missile (85 a 340 de dano, stun de 1,2 a 1,8s) corta o combo de Shadowraze antes dele completar, e Nether Swap atravessa Black King Bar (bkbpierce: yes, constants_abilities.json), então mesmo com BKB ativo dá pra puxar ele pra cima do seu time ou tirar um aliado baixo de perto dele.
- itens que viram: Black King Bar dele bloqueia o stun da Magic Missile (bkbpierce: no), então depois dos 25 min o combo de controle não funciona mais sozinho, precisa vir com Wave of Terror só pra reduzir dano. Do seu lado, Manta (28 min) dispela qualquer silence/root curto que ele jogar antes do Requiem.
- como jogar: antes dos 10 min jogue em cima do farm dele, Wave of Terror reduz o dano que ele bate em você e nos creeps. Depois do BKB dele não tente stunar, use o Nether Swap pra reposicionar e force a luta em grupo, onde a Vengeance Aura ajuda o time a focar ele rápido.
- fonte: pro_dados/vengefulspirit.json; pro_dados/nevermore.json; constants_abilities.json; content/fichas/vengefulspirit.md

## Contra Rubick (rubick)
- placar: 74 vitórias em 176 jogos de pro, 42,0% (OpenDota matchups)
- por que importa: segundo maior volume de jogos contra ela (176) e um dos piores números dela em amostra grande.
- janelas: ele é suporte puro, farm quase irrelevante (gpm 374, lh10 não é o foco). O perigo dele cresce com nível e mana, não com itens de dano: Arcane Boots aos 10,3, Blink aos 21,6, e depois Aghanim's Shard (27,0) e Scepter (27,4) quase juntos perto dos 27-28 min (pro_dados/rubick.json). Antes disso o risco dele é pontual (um Telekinesis bem lido), depois dele o risco vira "o que ele roubou de alguém do seu time".
- o que ele faz com você: Spell Steal (rubick_spell_steal, cd 16 a 4s, 1000 de alcance) pode copiar a última magia que você ou um aliado lançou, incluindo o seu próprio Nether Swap, e usar a versão dele contra o seu time. Telekinesis (0,9 a 1,5s de stun, lançado em até 625 de alcance) te tira de posição antes do seu combo sair.
- o que você faz com ele: Magic Missile corta o cast dele a distância, e como ele não tem fuga própria de alto alcance, o Nether Swap funciona bem pra puxar ele pro meio do seu time depois de um Telekinesis errado.
- itens que viram: Black King Bar não resolve Spell Steal (bkbpierce: yes, constants_abilities.json), então o jeito de neutralizar é matar ele rápido ou evitar lançar a sua magia mais forte perto dele sem necessidade. Do lado dela, Orchid/Bloodthorn silenciam antes do cast, mas não é item comum do build dela; na prática o counter real é posicionamento, ficar fora dos 1000 de alcance do Spell Steal quando ele estiver livre pra castar.
- como jogar: evite gastar Nether Swap à toa perto de Rubick livre, assim ele não tem o que roubar. Depois dos 25-28 min, trate ele como prioridade de kill em teamfight antes que o Scepter dele vire um segundo lançamento de feitiço roubado.
- fonte: pro_dados/vengefulspirit.json; pro_dados/rubick.json; constants_abilities.json

## Contra Lion (lion)
- placar: 89 vitórias em 173 jogos de pro, 51,4% (OpenDota matchups)
- por que importa: terceiro maior volume de jogos (173), suporte clássico de burst que historicamente dividiu lane com ela quando ela também era suporte.
- janelas: Lion é parado no farm (lh10 6, gpm 286, pro_dados/lion.json) e só ganha poder com nível e mana: Blink aos 18,2 min, Aghanim's Shard aos 25,8. Antes disso ele é perigoso num único combo por vez (mana limitada), depois do Blink ele inicia de qualquer ângulo.
- o que ele faz com você: Earth Spike (105 a 300 de dano, stun de 1,3 a 2,2s) mais Hex (2 a 3,2s te transformando em um bicho inofensivo) é o combo de 2 cast que te tira da luta inteira; Finger of Death (600 a 850 de dano, cd 110 a 30s) te mata sozinho com Aghanim's Scepter de nível alto, sem Scepter ele é só pra arremate.
- o que você faz com ele: Magic Missile interrompe o Mana Drain dele (canalizado) e o stun seu corta o início do combo antes do Hex sair.
- itens que viram: Black King Bar bloqueia Hex e Earth Spike (os dois com bkbpierce: no, constants_abilities.json), então o combo inteiro dele é anulado por 9s de BKB ativo. É por isso que BKB entra no seu build situacional (ficha vengefulspirit.md) especificamente contra esse tipo de disable em cadeia.
- como jogar: antes dos 18 min jogue perto de visão, o Earth Spike dele precisa de linha reta e alcance de 650. Depois do Blink dele, guarde o BKB pro momento que ele aparecer, não pro resto da luta.
- fonte: pro_dados/vengefulspirit.json; pro_dados/lion.json; constants_abilities.json

## Contra Disruptor (disruptor)
- placar: 80 vitórias em 149 jogos de pro, 53,7% (OpenDota matchups)
- por que importa: quarto maior volume (149) e a maior vantagem dela entre os suportes clássicos do top 6.
- janelas: suporte de farm quase nulo (lh10 4, pro_dados/disruptor.json), o pico dele é todo em nível e mana: Blink aos 24,0 min, Aghanim's Scepter só aos 34,9 (amostra pequena, 616 jogos de um total de 2521, mas é o padrão de quem fecha). Isso é bem depois do pico dela com Manta e Hydra's Breath (28-30 min).
- o que ele faz com você: Glimpse (te teleporta pra posição de 4s atrás, dano conforme a distância percorrida) anula qualquer avanço que você fez, e Static Storm (200 a 350 de dano em área, silencia por 6s) desliga seu Magic Missile e seu Nether Swap enquanto durar.
- o que você faz com ele: Wave of Terror reduz o dano e a armadura dele antes de focar, e como ele não tem fuga própria além do Blink, o Nether Swap funciona pra tirar ele da Static Storm ou puxar ele pra dentro do seu time.
- itens que viram: Black King Bar bloqueia Glimpse e Static Storm (os dois com bkbpierce: no), então um BKB ativo apaga o combo dele por completo; é o mesmo motivo do BKB situacional da ficha contra silence em geral. Do lado dele, Glimmer Cape (22,7 min) te invisibiliza se ele conseguir o combo primeiro.
- como jogar: fique fora de alcance de Static Storm (raio 550, pro_dados) quando lutar perto dele sem BKB. Depois que você tiver BKB, force a luta em cima dele, o combo dele sem o silence vira só dano de área fraco.
- fonte: pro_dados/vengefulspirit.json; pro_dados/disruptor.json; constants_abilities.json

## Contra Ogre Magi (ogre_magi)
- placar: 72 vitórias em 145 jogos de pro, 49,7% (OpenDota matchups)
- por que importa: quinto maior volume (145), suporte de controle que também compete por aura de dano dentro do time, o que gera disputa indireta de espaço com a sua Vengeance Aura.
- janelas: itens dele chegam cedo pro padrão de suporte, Arcane Boots aos 11,2, e ele puxa Hand of Midas aos 18,9 (farm paralelo incomum pra posição 5, pro_dados/ogre_magi.json). Aghanim's Shard só aos 26,1.
- o que ele faz com você: Fireblast (70 a 250 de dano, stun de 1,2s fixo, cd 11 a 8s) é curto mas repete rápido, e o Multicast dele (ganha chance de castar a mesma magia 2x ou 3x seguidas conforme a Força) pode dobrar ou triplicar esse stun numa luta só.
- o que você faz com ele: Magic Missile interrompe antes do primeiro Fireblast sair, e como ele não tem disable em área além disso, uma luta corpo a corpo tende a favorecer quem tiver mais dano sustentado, e aí entra o seu Retribution dando 20% de dano a mais em quem te matar por último.
- itens que viram: Black King Bar bloqueia Fireblast (bkbpierce: no), apagando o Multicast de stun inteiro. Bloodlust dele (autocast de velocidade de ataque) é o que sustenta o time dele em teamfight prolongado, então lutas curtas favorecem você.
- como jogar: evite trocas longas contra o time dele sem BKB, o Multicast pode empilhar stun. Priorize ele em fight, tirando o Bloodlust do resto do time cedo.
- fonte: pro_dados/vengefulspirit.json; pro_dados/ogre_magi.json; constants_abilities.json

## Contra Jakiro (jakiro)
- placar: 64 vitórias em 129 jogos de pro, 49,6% (OpenDota matchups)
- por que importa: sexto maior volume (129), suporte de dano em área que te limita o farm em grupo justamente no horário em que você quer limpar camp.
- janelas: suporte parado (lh10 8, gpm 315, pro_dados/jakiro.json), chega em Force Staff aos 26,2 e no componente de Aghanim's (Ogre Axe) só aos 32,4. O risco dele cai bastante depois dos 28-30 min, exatamente quando Hydra's Breath termina de montar o seu kit de limpar área.
- o que ele faz com você: Macropyre (100 a 200 de dano por segundo numa faixa de 10s) queima qualquer farm em grupo ou push de torre que você tentar puxar sozinha, e Ice Path (1,25 a 2s de stun em área) trava seu Nether Swap antes de sair.
- o que você faz com ele: Wave of Terror reduz o dano de retorno dele em troca de nuke, e seu Magic Missile interrompe o cast do Dual Breath antes de acertar.
- itens que viram: Black King Bar bloqueia Ice Path e o dano do Macropyre não atravessa imunidade a magia (pierces_magic_immunity: 0, constants_abilities.json), então você pode farmar e lutar dentro da área dele com BKB ativo sem problema.
- como jogar: evite agrupar em creep wave grande sem visão antes dos 20 min, Macropyre pune isso. Depois do seu Scepter e Hydra's Breath, a área dele deixa de ser ameaça real.
- fonte: pro_dados/vengefulspirit.json; pro_dados/jakiro.json; constants_abilities.json

## Contra Luna (luna)
- placar: 46 vitórias em 99 jogos de pro, 46,5% (OpenDota matchups)
- por que importa: o carry com mais jogos de pro contra ela (99) entre os de mesma função, mesmo raramente dividindo lane: ela é pos1 de dano em área que farma rápido no mesmo horário que você.
- janelas: Luna é a carry mais rápida do grupo em farm bruto, gpm 695 e lh10 69 (pro_dados/luna.json) contra o pico mais lento e mais tardio da sua VS. Ela fecha Yasha componente (Blade of Alacrity) aos 13,8 e Diadem aos 14,9, Manta por volta dos 17-18 (igual ao timing dela). Até os 18 min ela farma mais rápido que você puro; dos 18 aos 26 as duas estão em Manta/boots de agilidade, e depois dos 25 ela puxa na frente de novo com Hurricane Pike (25,4) e Butterfly (26,1), enquanto você só fecha Hydra's Breath aos 30.
- o que ela faz com você: Eclipse (6 a 12 raios aleatórios em quem estiver perto, não estuna) é o que limpa stack e te mata em grupo de monstro ou em teamfight parada; Lucent Beam (75 a 300 de dano, stun de 0,6s) é o poke dela à distância.
- o que você faz com ela: Nether Swap atravessa Black King Bar dela (bkbpierce: yes), então mesmo com BKB ativo dá pra puxar ela pra cima do seu time antes do Eclipse ficar pronto de novo (recarga de 105s fixa). Magic Missile interrompe ela fora de posição.
- itens que viram: Black King Bar dela não bloqueia seu Nether Swap, mas bloqueia sua Magic Missile e seu Wave of Terror (os dois sem bkbpierce). Do seu lado, Butterfly dela cai pra evasão alta, então se o seu time não tiver dano mágico sobrando, considerar Monkey King Bar vira conversa de item situacional pro resto do time, não pra você.
- como jogar: evite parar perto demais de monstros grandes ou creep wave junto do time dela depois dos 20 min, isso é terreno de Eclipse. Use o Nether Swap pra puxar ela antes do Eclipse em vez de depois.
- fonte: pro_dados/vengefulspirit.json; pro_dados/luna.json; constants_abilities.json

## Contra Ursa (ursa)
- placar: 45 vitórias em 84 jogos de pro, 53,6% (OpenDota matchups)
- por que importa: segundo carry com mais jogos de pro contra ela (84), um dos poucos matchups 1x1 puro de burst que ela realmente vence na amostra.
- janelas: Ursa farma rápido no início, Battle Fury aos 13,7 (pro_dados/ursa.json), mas o pico de duelo dele só vem com Aghanim's Shard (26,1) e Black King Bar (24,4) quase juntos perto dos 25 min. Antes disso ele é forte contra creep e fraco contra herói com stun.
- o que ele faz com você: Fury Swipes empilha dano extra a cada ataque seguido no mesmo alvo (12 a 36 por stack, sem limite claro de stack enquanto durar), então se ele ficar grudado em você sem interrupção o dano cresce rápido; Overpower (400% de velocidade de ataque por 3 a 6 hits) é o botão de iniciar duelo dele.
- o que você faz com ele: Magic Missile interrompe o combo antes do Overpower render full stack de Fury Swipes, e Wave of Terror reduz o dano de ataque dele na troca, o que pesa mais nele por ser um herói 100% de auto ataque.
- itens que viram: Black King Bar dele bloqueia a sua Magic Missile e a sua Wave of Terror (nenhuma das duas pierca BKB, constants_abilities.json), então o combo de controle seu precisa vir antes do BKB dele estar ativo. Aghanim's Shard dele dá mais stack de Overpower, o que torna ainda mais importante abrir distância assim que ele usar.
- como jogar: não troque auto ataque parado com ele sem stun disponível, é exatamente isso que ativa Fury Swipes. Use Magic Missile no início da troca, não no meio.
- fonte: pro_dados/vengefulspirit.json; pro_dados/ursa.json; constants_abilities.json

## Contra Templar Assassin (templar_assassin)
- placar: 39 vitórias em 77 jogos de pro, 50,6% (OpenDota matchups)
- por que importa: carry de farm rápido, lh10 73 e gpm 680 (pro_dados/templar_assassin.json), atrás só de Luna em gpm (695) e de Shadow Fiend em lh10 (78) entre os confrontos deste levantamento. Ainda assim é o tipo de matchup "quem farma mais rápido" que decide o jogo antes da luta acontecer.
- janelas: ela fecha Desolator aos 14,3, reduzindo armadura de quem ela bate, bem antes do seu Power Treads (7 min) virar relevante em dano. Hurricane Pike (24,5) e Aghanim's Shard (24,6) chegam juntos perto dos 24-25 min, Black King Bar só aos 28,1, mais tarde que o padrão do grupo.
- o que ela faz com você: Psi Blades (dano que vaza pra trás do alvo, escala com nível) faz ela acertar você mesmo que você não seja o alvo direto do ataque dela numa luta em grupo; Refraction (3 a 6 instâncias de escudo e dano bônus) sobrevive ao seu combo de controle já que não pierca BKB dela mas também não é quebrada só por dano mágico sem stack suficiente.
- o que você faz com ela: Meld exige ficar parada pra ficar invisível, então Wave of Terror te dá visão do caminho e já força ela a se mexer ou perder o Meld; com visão (sentry ou detecção), o Nether Swap puxa ela pra cima do seu time antes do combo dela sair.
- itens que viram: Black King Bar dela bloqueia Magic Missile e Wave of Terror, mas não bloqueia Nether Swap (bkbpierce: yes). Do seu lado, se ela estiver com Desolator cedo, considerar Ghost Scepter ou Eul's no time ajuda a sobreviver o burst físico dela até o seu time virar a luta.
- como jogar: evite fight 1x1 parado contra ela depois do Desolator, Psi Blades com armadura reduzida dói muito em pouco tempo. Use o Swap pra puxar ela pro meio antes dela conseguir Refraction up.
- fonte: pro_dados/vengefulspirit.json; pro_dados/templar_assassin.json; constants_abilities.json

## Contra Juggernaut (juggernaut)
- placar: 27 vitórias em 54 jogos de pro, 50,0% (OpenDota matchups)
- por que importa: carry de altíssimo volume em pro no geral (963 jogos na amostra própria dele, pro_dados/juggernaut.json) mesmo sem aparecer tanto direto contra ela, o clássico "dois pos1 que quase não cruzam lane mas competem pelo mesmo papel no draft".
- janelas: ele fecha Battle Fury aos 13,6, puxando farm rápido de jungle e lane ao mesmo tempo, igual ao seu próprio pico de farm com Treads (7 min) mas numa escala maior de gold por minuto (gpm 639 dele). O Omnislash dele só fica realmente forte com Butterfly (26,2) e Aghanim's Scepter (29,9) prontos, quase no mesmo horário do seu Hydra's Breath (30 min).
- o que ele faz com você: Omnislash (dano bônus de 25 a 35 por golpe, 40% de velocidade de ataque extra, dura 3 a 3,5s) ignora Black King Bar (bkbpierce: yes) e pode pular pra cima de você mesmo que você esteja imune a magia perto de aliados.
- o que você faz com ele: Nether Swap também atravessa BKB (bkbpierce: yes de ambos os lados), então mesmo um Juggernaut com BKB ativo pode ser puxado pra longe do time dele no meio do Omnislash, cortando o resto dos pulos.
- itens que viram: Blade Fury dele (80% de resistência mágica por 5s) bloqueia a maior parte do seu Magic Missile e Wave of Terror enquanto está ativo, então não gaste o combo nesse momento. Do lado dele, Manta Style dispela o seu stun se ele sentir o combo vindo.
- como jogar: guarde o Nether Swap especificamente pro momento do Omnislash, puxar ele no meio do pulo anula o resto do combo. Não gaste Magic Missile durante o Blade Fury dele.
- fonte: pro_dados/vengefulspirit.json; pro_dados/juggernaut.json; constants_abilities.json

## Contra Legion Commander (legion_commander)
- placar: 22 vitórias em 32 jogos de pro, 68,8% (OpenDota matchups, amostra média, 32 jogos)
- por que importa: a maior vantagem dela na amostra com 30+ jogos. Legion Commander também disputa iniciação de curto alcance, então quando os dois se cruzam é porque um dos dois errou a entrada.
- janelas: ela farma rápido pro padrão de pos3/4, Blade Mail aos 12,7 e Blink aos 15,3 (pro_dados/legion_commander.json), mas o risco real dela só aparece com Black King Bar (26,4) e Aghanim's Shard mais Scepter juntos perto dos 25,8, quase no mesmo horário do seu próprio Scepter (22,9) e Yasha (18).
- o que ela faz com você: Duel (4 a 5s travando os dois num 1x1, sem item, quem bate mais ganha bônus de dano permanente) ignora Black King Bar (bkbpierce: yes) e pode te forçar a lutar sem ajuda do time.
- o que você faz com ela: se ela te der Duel, Wave of Terror reduz o dano de ataque dela antes do confronto citar primeiro golpe, e sua Magic Missile de longo alcance bate antes do Overwhelming Odds dela se ela tentar iniciar à distância.
- itens que viram: Black King Bar dela não impede o Duel de pegar você (bkbpierce: yes em ambas direções), então a defesa real contra Duel é ganhar dano antes da luta, não imunidade a magia. Blade Mail dela devolve seu próprio Magic Missile se você acertar ela com ele ligado.
- como jogar: não aceite trocas de auto ataque perto dela sem saber se o Duel está disponível (cd 50 a 60s). Se ela te pegar no Duel, use Wave of Terror nela antes do primeiro ataque.
- fonte: pro_dados/vengefulspirit.json; pro_dados/legion_commander.json; constants_abilities.json

## Contra Morphling (morphling)
- placar: 28 vitórias em 45 jogos de pro, 62,2% (OpenDota matchups, amostra média, 45 jogos)
- por que importa: carry de altíssimo volume em pro (871 jogos na amostra própria, pro_dados/morphling.json) e o exemplo clássico de duelo entre dois carries que raramente compartilham lane mas competem pelo mesmo espaço no draft, igual Alchemist contra Morphling.
- janelas: Morphling é mais rápido no early, lh10 60 contra o farm mais lento dela, e fecha Manta aos 18,4 (quase igual ao Yasha dela, 18 min). O pico real dele vem depois, Butterfly aos 25,8 e Black King Bar só aos 30,9, bem depois do Scepter dela (22,9).
- o que ele faz com você: Adaptive Strike (50 a 110 de dano base mais bônus por atributo, stun de 0,5 a 2,6s, empurra) te afasta antes de você conseguir Magic Missile nele, e Waveform (ele fica invulnerável durante o dash) atravessa o seu combo de controle inteiro.
- o que você faz com ele: Nether Swap atravessa Black King Bar dele (bkbpierce: yes), então mesmo tarde, com BKB ativo, dá pra puxar ele pra cima do seu time no meio de uma fuga de Waveform.
- itens que viram: Black King Bar dele bloqueia Magic Missile e Wave of Terror, mas não a sua Nether Swap. Do lado dele, Morph (ultimate Morphling, cd 140 a 60s) copia as magias básicas de quem ele mirar, incluindo potencialmente a sua, então evitar ficar sozinha perto dele depois dos 20 min reduz o risco.
- como jogar: não gaste Magic Missile tentando acertar o Waveform, espere ele sair do dash. Use Nether Swap como resposta direta pra fuga dele em vez de tentar stunar primeiro.
- fonte: pro_dados/vengefulspirit.json; pro_dados/morphling.json; constants_abilities.json

## Contra Lich (lich)
- placar: 42 vitórias em 68 jogos de pro, 61,8% (OpenDota matchups)
- por que importa: a segunda maior vantagem dela entre suportes com amostra relevante (68 jogos), um clássico "suporte de burst contra carry" que ela historicamente ganha.
- janelas: Lich é parado no farm (lh10 6, gpm 306, pro_dados/lich.json), ganha poder só com Aghanim's Shard aos 22,9, o item que melhora Frost Shield e Ice Spire. Chain Frost (ultimate) é o único risco real dele em teamfight, e não depende de item.
- o que ele faz com você: Chain Frost (250 a 550 de dano, salta até 10 vezes entre alvos próximos, aumenta de dano a cada salto) pode te pegar em grupo e continuar saltando pro resto do seu time; Frost Blast (40 a 160 de dano direto mais área) é o poke dele à distância.
- o que você faz com ele: Magic Missile interrompe o cast do Chain Frost antes de sair (ele precisa ficar parado pra lançar), e Wave of Terror reduz o dano de volta na troca.
- itens que viram: Black King Bar bloqueia Frost Blast e Chain Frost (os dois sem bkbpierce, constants_abilities.json), então farmar ou lutar perto dele com BKB ativo apaga o kit inteiro dele.
- como jogar: priorize matar ou afastar o Lich antes de parar em grupo perto de creep ou Roshan, Chain Frost pune isso. Depois do seu BKB, ele vira suporte sem botão de impacto.
- fonte: pro_dados/vengefulspirit.json; pro_dados/lich.json; constants_abilities.json

## Contra Clockwerk (rattletrap)
- placar: 11 vitórias em 35 jogos de pro, 31,4% (OpenDota matchups, amostra média, 35 jogos)
- por que importa: a maior desvantagem dela com amostra de 30+ jogos. É o tipo de herói que isola ela do time antes de qualquer item fazer diferença.
- janelas: Clockwerk é suporte parado em farm (lh10 7, pro_dados/rattletrap.json), o risco dele não depende de item, depende de nível. Mesmo assim ele fecha Blink aos 24,8 e Aghanim's Shard tarde, aos 30,0, o que amplia o Power Cogs.
- o que ele faz com você: Hookshot (75 a 275 de dano, prende e puxa você até ele a até 3000 de alcance) te isola do time, e Power Cogs (50 a 275 de dano, queima mana) prende você dentro de um anel enquanto o time dele chega.
- o que você faz com ele: Magic Missile interrompe a aproximação dele antes do Hookshot sair, e se ele já acertou o gancho, Nether Swap troca de posição com um aliado em vez de ficar presa dentro do anel.
- itens que viram: Black King Bar dela não bloqueia o Hookshot dele (bkbpierce: yes), então a defesa real é distância e visão, não imunidade a magia. Force Staff ou um item de mobilidade no seu time ajuda a tirar você do anel de cogs antes do time dele chegar.
- como jogar: não ande sozinha perto de arbustos sem visão depois dos 10 min, é exatamente o raio de ataque do Hookshot (2000 a 3000). Se ele te prender, gaste o Swap pra trocar de lugar com alguém do seu time em vez de tentar fugir correndo.
- fonte: pro_dados/vengefulspirit.json; pro_dados/rattletrap.json; constants_abilities.json

## Contra Beastmaster (beastmaster)
- placar: 19 vitórias em 53 jogos de pro, 35,8% (OpenDota matchups)
- por que importa: uma das piores faixas dela em amostra grande, junto com Doom e Rubick (conteúdo já verificado na ficha dela, seção Black King Bar). Visão e controle em área dele atrapalham justamente o farm rápido que define o perfil pos1 dela em 7.41.
- janelas: Beastmaster é o que mais puxa Aghanim's Scepter cedo do grupo inteiro, mediana de 14,6 min (pro_dados/beastmaster.json), um item central do kit dele, não situacional. Black King Bar vem só aos 23,6, bem depois.
- o que ele faz com você: Primal Roar (150 a 300 de dano, empurra e stuna por 3 a 4s, atinge quem estiver no caminho também) ignora Black King Bar (bkbpierce: yes) e pode te tirar da luta mesmo imune a magia; os bichos dele (Boar e falcões) dão visão constante em cima de você mesmo com Smoke ou fumaça.
- o que você faz com ele: Wave of Terror reduz o dano dele e dos bichos dele na troca, mas o seu stun de Magic Missile não passa por BKB dele, então o combo de controle precisa vir antes do BKB dele estar ativo.
- itens que viram: Black King Bar dele não bloqueia o Primal Roar, logo a defesa contra o combo dele depende de distância e de matar ele rápido, não de imunidade a magia. Sentry/Dust no seu lado ajudam contra a visão constante dos bichos dele quando você tenta farmar escondida.
- como jogar: evite ficar visível em áreas que os falcões dele cobrem, principalmente depois do Call of the Wild up. Guarde Nether Swap pra tirar um aliado da trajetória do Primal Roar, não só pra você mesma.
- fonte: pro_dados/vengefulspirit.json; pro_dados/beastmaster.json; constants_abilities.json; content/fichas/vengefulspirit.md

## Contra Doom (doom_bringer)
- placar: 27 vitórias em 65 jogos de pro, 41,5% (OpenDota matchups; já citado na ficha dela como justificativa do Black King Bar situacional)
- por que importa: é o contra-exemplo direto do seu próprio Black King Bar, a ficha vengefulspirit.md cita Doom nominalmente como o motivo de levar BKB: "cai de 41,5% de vitória contra Doom... a pior faixa de amostra grande junto com Rubick e Beastmaster".
- janelas: Doom é um herói tanque de farm médio, gpm 606, e o item central dele é o Aghanim's Shard cedo, mediana de 18,7 min (pro_dados/doom_bringer.json), que melhora o Devour. Black King Bar dele só aos 24,0, Shiva's Guard tarde, 31,2.
- o que ele faz com você: Doom (ultimate, 25 a 66 de dano por segundo por 12 a 16s) "dispela o alvo e impede lançar feitiços ou qualquer cura enquanto durar" (descrição oficial, constants_abilities.json) e ignora Black King Bar (bkbpierce: yes), então nem o seu BKB impede ele de te travar sem magia nem cura por até 16s.
- o que você faz com ele: antes do Doom sair nele mesmo, Magic Missile interrompe a aproximação, e Wave of Terror reduz o dano de Infernal Blade (stun de 0,66s mais queima) na troca corpo a corpo.
- itens que viram: o Doom ignora o seu BKB e o efeito não é dispelável por nada, nem forte nem fraco (dispellable: no, constants_abilities.json), então não existe item que tire o Doom de quem já foi pego. A única resposta real é evitar o cast, silenciar ou matar ele antes de chegar perto. Black King Bar dele, por outro lado, sim bloqueia a sua Magic Missile e Wave of Terror.
- como jogar: trate o Doom como prioridade de kill ou de silence antes dele fechar em você, porque depois que ele aplica a ultimate em alguém do seu time não tem dispel nem item que resolva, só esperar os 12 a 16s passarem. Gaste o seu controle nele antes do cast, não depois.
- fonte: pro_dados/vengefulspirit.json; pro_dados/doom_bringer.json; constants_abilities.json; content/fichas/vengefulspirit.md
