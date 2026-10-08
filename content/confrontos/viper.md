---
id: confrontos-viper
heroi: Viper
patch: 7.41
fontes:
- pro_dados/viper.json (OpenDota explorer, liga pro, 7.40+7.41, 1427 partidas)
- pro_dados/<oponente>.json (mesma fonte, por herói)
- OpenDota /heroes/47/matchups (confrontos em partida profissional)
- constants_abilities.json (kit do Viper 7.41)
- https://dota2protracker.com/builds/viper-pos2-1 e /viper-pos3-1
- https://liquipedia.net/dota2/Viper/Changelogs
- https://liquipedia.net/dota2/Version_7.41f
- https://dotacoach.gg/en/heroes/viper
---

## Como o Viper joga (contexto pra todos os confrontos)

Viper no 7.41 é posição 2 ou 3 (fonte: herois_catalogo.json), um poke farmer lento e sem escape de verdade. O kit: Poison Attack (ataque básico aplica DoT mágico + lentidão + redução de resistência mágica, empilha até 6x), Nethertoxin (zona de dano que cresce com o tempo e reduz velocidade de ataque), Corrosive Skin (passiva: quem bate nele de perto toma dano e fica mais lento, e ele ganha resistência mágica), Predator (dano físico bônus proporcional à vida que falta no alvo, ou seja, acelera o fim de duelo contra quem já está sangrando) e Viper Strike (ultimate: atordoa a passiva do alvo e aplica DoT pesado, atravessa BKB). O Aghanim's Shard turbina o Poison Attack com redução de armadura por stack e dano em construções; o Scepter dá a ele Nosedive, um salto em área que aplica um Corrosive Skin mais forte (fonte: constants_abilities.json; liquipedia.net/dota2/Viper/Changelogs).

Build mediana em pro (1427 partidas, 7.40+7.41): Boots aos 3:54, Magic Wand aos 5:24, Dragon Lance aos 15:36, Ultimate Scepter aos 18:12 (situacional), Force Staff aos 20:48, Hurricane Pike aos 22:18, Aghanim's Shard aos 29:36 (35% dos jogos pro, fonte: pro_dados/viper.json, 496 de 1427 partidas). Isso é o power spike dele em quase todo confronto: fraco e sem contra-iniciação até o Dragon Lance (15-16 min), confortável em kite com Pike (22 min), explosivo contra alvo sangrando a partir do Shard (quase 30 min).

## Contra Windranger (windrunner)

- placar: o time do Viper venceu 83 de 204 partidas pro contra Windranger, 40,7%. É a maior amostra de todos os confrontos e uma das piores taxas da lista (fonte: OpenDota /heroes/47/matchups).
- por que importa: é o oponente mais comum do Viper em pro e também o pior resultado dele, então é o confronto que mais pesa na curva de aprendizado.
- janelas: até 7 min os dois estão perto em item (Power Treads do Windranger aos 7:12), mas o farm dele acelera com Maelstrom aos 13:24, bem antes do Dragon Lance do Viper (15:36). Entre 13 e 20 min o Windranger já limpa onda e luta melhor; o Viper só reequilibra depois do Pike, perto dos 22 min.
- o que ele faz com você: Shackleshot prende o Viper (que não tem disjoint nem blink base) junto de uma árvore ou creep, e o Focus Fire executa alvo de pouca armadura, exatamente o perfil do Viper cedo.
- o que você faz com ele: Poison Attack reduz a resistência mágica dele e acelera o DoT, então trocar poke à distância em vez de ficar parado no alcance do Shackleshot é a única forma de sangrar o Windranger sem dar o gancho de graça.
- itens que viram: Force Staff no Viper desarma o combo Shackleshot, Hurricane Pike dá o alcance pra nunca entrar no raio do gancho.
- como jogar: evite ficar alinhado com árvore ou creep perto do Windranger antes dos 15 min. Jogue a lane com Poison Attack de longe e só force troca depois do Dragon Lance. TP cedo se ele comprar Blink.
- fonte: pro_dados/viper.json; pro_dados/windrunner.json; OpenDota /heroes/47/matchups.

## Contra Jakiro (jakiro)

- placar: 90 vitórias em 203, 44,3% pro Viper. Segundo oponente mais comum da lista (fonte: OpenDota /heroes/47/matchups).
- por que importa: é o segundo confronto mais visto em pro contra o Viper e também desfavorável, geralmente como dupla de lane contra ele no mid ou no trio de offlane.
- janelas: Jakiro é um herói de suporte com GPM baixo (315 contra 547 do Viper), então ele não "farma" o duelo, ele controla espaço. O item que define a janela dele é a Arcane Boots aos 11:42, que sustenta mana pra nuke em sequência. O Viper só começa a virar o jogo depois do Dragon Lance, aos 15:36.
- o que ele faz com você: Macropyre cria uma zona de fogo contínua que o Viper, lento e sem dash base, não sai fácil; Dual Breath já entrega metade do stack de lentidão que o próprio Viper usa, então o combo tira mobilidade dobrada.
- o que você faz com ele: Poison Attack à distância evita entrar no raio curto do Dual Breath; Nethertoxin no meio da lane negacia o Jakiro de ficar parado spamando nuke.
- itens que viram: Aghanim's Shard do Viper aumenta o stack de Poison Attack e passa a bater em estrutura, bom pra furar a zona que o Jakiro protege. Force Staff tira o Viper do raio do Macropyre.
- como jogar: jogue a lane em cima do alcance do Dual Breath, não do corpo a corpo. Depois do Dragon Lance, force troca fora da faixa de 500 de largura do Macropyre (fonte: constants_abilities.json).
- fonte: pro_dados/viper.json; pro_dados/jakiro.json; OpenDota /heroes/47/matchups.

## Contra Shadow Fiend (nevermore)

- placar: 94 vitórias em 190, 49,5% pro Viper, praticamente parelho (fonte: OpenDota /heroes/47/matchups).
- por que importa: terceiro oponente mais comum em pro e o mid farmer mais jogado contra o Viper, os dois correndo a mesma corrida de CS.
- janelas: Shadow Fiend sai na frente em farm bruto (GPM 658 contra 547 do Viper, LH aos 10 min de 78 contra 58), com Power Treads aos 5:54 e Dragon Lance aos 14:00, cedo até pros padrões dele. Até os 15 min ele puxa mais XP e CS. Dos 15 aos 22 min o Viper fecha a diferença com o próprio Dragon Lance (15:36) e o Pike (22:18), onde o alcance e o poison shredam a resistência mágica do Requiem.
- o que ele faz com você: Razes de longo alcance poke o Viper sem risco, e o Requiem of Souls pune se o Viper ficar parado trocando dano corpo a corpo com Corrosive Skin.
- o que você faz com ele: o próprio Corrosive Skin pune o Shadow Fiend se ele vier bater de perto, e o Poison Attack reduz a resistência mágica dele bem na hora de levar Requiem, carry inverte dano recebido do combo.
- itens que viram: Hurricane Pike do Viper ganha a troca de alcance contra Raze; Black King Bar no Shadow Fiend não cancela o Viper Strike, que atravessa imunidade a magia por completo, disable e DoT inclusos (fonte: constants_abilities.json, bkbpierce yes).
- como jogar: não force a lane antes do Dragon Lance, é corrida de farm. Depois dos 15 min, jogue pra forçar trocas fora do alcance de Raze e dentro do seu próprio alcance de Pike.
- fonte: pro_dados/viper.json; pro_dados/nevermore.json; OpenDota /heroes/47/matchups.

## Contra Tusk (tusk)

- placar: 86 vitórias em 179, 48,0% pro Viper (fonte: OpenDota /heroes/47/matchups).
- por que importa: quarto oponente mais comum da lista, geralmente um pos 4 que rota pro lane do Viper.
- janelas: Tusk é de suporte (GPM 300), a janela dele é o Blink Dagger, mediana 19:00, quando ele começa a iniciar de verdade. Antes disso ele farma pouco e gira o mapa de TP (15:42). O Viper, sem blink nem disjoint, fica vulnerável a partir do minuto 19 até comprar o próprio Pike aos 22:18.
- o que ele faz com você: Ice Shards corta rota de fuga, cercando o Viper que já é lento por natureza, e o Snowball entrega aliado em cima dele pra iniciação.
- o que você faz com ele: Poison Attack e Nethertoxin punem o Tusk se ele ficar perto tentando setar o gelo, e o Corrosive Skin reduz a velocidade de ataque dele durante o combo.
- itens que viram: Force Staff do Viper atravessa a parede de gelo; Blink do Tusk é o item que decide se o gank acontece ou não.
- como jogar: depois dos 18-19 min, jogue perto de visão própria e evite ficar cercado por árvore antes do Shard ou do Force Staff.
- fonte: pro_dados/viper.json; pro_dados/tusk.json; OpenDota /heroes/47/matchups.

## Contra Queen of Pain (queenofpain)

- placar: 82 vitórias em 170, 48,2% pro Viper (fonte: OpenDota /heroes/47/matchups).
- por que importa: mesma função, as duas são mid farmers de pro play (catálogo do site lista Queen of Pain como pos 2 pura), então é o confronto mais direto de mid contra mid que o Viper tem.
- janelas: Queen of Pain sai mais rápida em nível e farm (XPM 771 contra 696, LH aos 10 de 56 contra 58, parelho), com Power Treads aos 8:18 e Kaya aos 13:54, antes do Dragon Lance do Viper. Entre 10 e 16 min ela ganha trocas de burst se pegar o combo completo. Depois do Dragon Lance (15:36) o Viper reequilibra porque o alcance evita o blink dela, e o Pike (22:18) deixa a troca seguramente favorável.
- o que ele faz com você: Shadow Strike mais Scream of Pain mais Sonic Wave é burst mágico puro, perigoso enquanto o Viper não tem resistência mágica suficiente de Corrosive Skin acumulado.
- o que você faz com ele: Poison Attack reduz a resistência mágica dela, então o próximo nuke que ela der dói mais; Predator acelera a execução se ela já estiver no fio da vida.
- itens que viram: Hurricane Pike nega o blink dela; Black King Bar nela não cancela o Viper Strike, que atravessa imunidade a magia por completo, e a stack de Poison Attack continua batendo do mesmo jeito (fonte: constants_abilities.json, bkbpierce yes).
- como jogar: não troque dano mágico cedo sem stack de Corrosive Skin. Vire farm e empurre, o confronto melhora pro Viper depois dos 15-16 min.
- fonte: pro_dados/viper.json; pro_dados/queenofpain.json; OpenDota /heroes/47/matchups.

## Contra Snapfire (snapfire)

- placar: 83 vitórias em 170, 48,8% pro Viper (fonte: OpenDota /heroes/47/matchups).
- por que importa: quinto/sexto oponente mais comum em pro, suporte que costuma proteger o lane contra o Viper.
- janelas: Snapfire é suporte (GPM 413), a janela dela é o Aghanim's Shard aos 16:54, que dá Spit-Fire Rockets, muito perto do Dragon Lance do Viper (15:36). Antes do minuto 17 os dois jogam pelo poke; depois disso, quem tiver o próprio item-chave pronto domina a troca.
- o que ele faz com você: Firesnap Cookie dá velocidade e cura pra um aliado avançar em cima do Viper, que não tem escape; Mortimer Kisses é execução de longo alcance, perigosa justamente contra um Viper já no fio da vida pelo próprio Predator do confronto anterior virado contra ele.
- o que você faz com ele: Poison Attack e Nethertoxin punem a Snapfire se ela ficar parada perto pra setar Cookie; ela é tão sem mobilidade quanto o Viper fora do Cookie.
- itens que viram: Aghanim's Shard em ambos muda o confronto, o do Viper aumenta range de punição e dano em estrutura, o dela adiciona dano de longo alcance.
- como jogar: fique fora da rota óbvia de Cookie depois dos 15 min, e priorize farmar o próprio Shard antes dela se puder.
- fonte: pro_dados/viper.json; pro_dados/snapfire.json; OpenDota /heroes/47/matchups.

## Contra Mars (mars)

- placar: 81 vitórias em 164, 49,4% pro Viper, confronto quase parelho (fonte: OpenDota /heroes/47/matchups).
- por que importa: offlaner mais jogado em pro contra o Viper e também a mesma função principal dele no catálogo (os dois aparecem como pos 3 em partidas de liga), então é o confronto direto de função de offlane farmer.
- janelas: Mars sai na frente em nível cedo (LH aos 10 de 49, GPM 487) com Phase Boots aos 8:30 e Blink aos 15:12, pouco antes do Dragon Lance do Viper (15:36). Entre 8 e 15 min ele inicia com Spear de longe; depois dos 15-16 min o Viper tem alcance pra responder.
- o que ele faz com você: Spear of Mars em linha reta prende o Viper (sem disjoint) e Arena of Blood zona a luta, impedindo fuga pelas bordas.
- o que você faz com ele: Poison Attack reduz resistência mágica dele pra quando o time fechar burst, e o alcance do Viper evita o corpo a corpo onde o God's Rebuke do Mars dói mais.
- itens que viram: Hurricane Pike do Viper dá o alcance pra nunca ficar na linha reta do Spear; Aghanim's Shard do Mars dá uma segunda Spear, o que aumenta o risco de ficar preso duas vezes.
- como jogar: não fique alinhado com o Mars em corredor estreito. Jogue de lado, puxando Poison Attack, e só force perto depois do Pike.
- fonte: pro_dados/viper.json; pro_dados/mars.json; OpenDota /heroes/47/matchups.

## Contra Tidehunter (tidehunter)

- placar: 94 vitórias em 161, 58,4% pro Viper, a maior vantagem da lista entre os confrontos com 100+ partidas (fonte: OpenDota /heroes/47/matchups; nenhum outro oponente com 100+ partidas tem taxa melhor pro Viper).
- por que importa: offlaner mais jogado contra o Viper depois do Mars, mesma função dele no catálogo, e o melhor confronto de amostra grande da lista, o Viper historicamente bate o Tidehunter em pro.
- janelas: Tidehunter é lento e corpo a corpo, exatamente o perfil que o Poison Attack mais machuca. Ele sai com Phase Boots aos 7:48 e Blink só aos 21:12, tarde. O Viper já tem Dragon Lance aos 15:36 e consegue kitar o Tide por quase 6 minutos antes do Blink dele existir.
- o que ele faz com você: fora do Blink, o alcance dele é curto demais, Kraken Shell só ajuda a sustentar, não a alcançar o Viper; o perigo real é só depois dos 21 min, quando o Ravage pode pegar o time todo se o Viper estiver mal posicionado.
- o que você faz com ele: Poison Attack reduz a resistência mágica do Tide bem na hora de levar o burst do time; Corrosive Skin pune qualquer tentativa de all-in corpo a corpo antes do Blink.
- itens que viram: Hurricane Pike do Viper fecha a janela de kite; Aghanim's Shard do Tide dá uma barreira de armadura ao time que reduz o dano físico, mas não o DoT mágico do Poison Attack.
- como jogar: jogue agressivo antes dos 21 min, farme a lane sem medo de all-in dele. Depois do Blink, respeite posicionamento de Ravage.
- fonte: pro_dados/viper.json; pro_dados/tidehunter.json; OpenDota /heroes/47/matchups.

## Contra Invoker (invoker)

- placar: 65 vitórias em 136, 47,8% pro Viper (fonte: OpenDota /heroes/47/matchups).
- por que importa: mid farmer mais jogado contra o Viper depois da Queen of Pain, mesma função de mid no catálogo, segundo confronto direto de farm no meio.
- janelas: Invoker tem GPM 564 contra 547 do Viper, bem parelho, mas o nível dele importa mais que o item. Ele sai de Null Talisman aos 2:24 e só fecha Scepter aos 20:12, tarde pros padrões de mid. Até os 15 min (Dragon Lance do Viper) é corrida de farm quieta; depois disso o Viper tem alcance pra negar o combo QW do Invoker.
- o que ele faz com você: Sun Strike de qualquer lugar do mapa, e o combo Tornado mais EMP tira mana e atordoa o Viper, que não tem disjoint pra escapar da sequência.
- o que você faz com ele: Poison Attack reduz a resistência mágica dele, fazendo o próprio combo mágico dele custar mais HP depois; o alcance do Viper evita o Deafening Blast de curto raio.
- itens que viram: Aghanim's Shard do Viper empurra dano em estrutura, bom pra puxar o jogo pro lado de farm; Black King Bar no Invoker não cancela o Viper Strike, que atravessa imunidade a magia por completo (fonte: constants_abilities.json, bkbpierce yes).
- como jogar: fique espalhado em visão própria pra não tomar Sun Strike às cegas. Depois do Dragon Lance, pressione farm, o Viper ganha a troca de alcance puro.
- fonte: pro_dados/viper.json; pro_dados/invoker.json; OpenDota /heroes/47/matchups.

## Contra Skywrath Mage (skywrath_mage)

- placar: 59 vitórias em 99, 59,6% pro Viper, uma das maiores vantagens da lista com amostra de 30+ jogos (fonte: OpenDota /heroes/47/matchups; Bristleback, Ancient Apparition, Night Stalker e Faceless Void têm taxa ainda mais alta com amostra parecida, mas Skywrath é o mais comum entre eles).
- por que importa: é um dos confrontos mais favoráveis ao Viper com amostra confiável, um suporte extremamente frágil contra o Predator do Viper, que acelera dano conforme a vida cai.
- janelas: Skywrath tem GPM 332 e nível baixo, a janela dele depende mais de nível de ultimate (Mystic Flare) do que de item: fecha Null Talisman cedo (4:24) e só chega no Aghanim's Shard tarde, aos 22:18, que já é tarde pros padrões de suporte (fonte: pro_dados/skywrath_mage.json). O Viper só precisa chegar no Dragon Lance (15:36) pra já conseguir punir o Skywrath de longe sem levar nuke de volta.
- o que ele faz com você: Concussive Shot reduz a velocidade de ataque e movimento do Viper, perigoso só se ele já tiver aliados pra fechar o combo, porque o Skywrath sozinho não sobrevive a troca corpo a corpo nem a distância contra o DoT.
- o que você faz com ele: o Skywrath tem uma das menores vidas do jogo, então Predator (dano bônus por vida que falta) e o stack de Poison Attack matam ele rápido assim que o combo começa; Corrosive Skin reduz a janela de qualquer all-in dele.
- itens que viram: Aghanim's Shard do Viper (29:36 em média, mas prioridade antecipada nesse confronto) aumenta o stack que já é fatal contra HP baixo; Glimmer Cape ou Force Staff no Skywrath é a única forma dele sobreviver ao poke.
- como jogar: pressione a lane sem medo, force trocas, o Skywrath perde praticamente qualquer 1x1 corpo a corpo e a maioria dos trocas à distância depois de 2-3 stacks de poison.
- fonte: pro_dados/viper.json; pro_dados/skywrath_mage.json; OpenDota /heroes/47/matchups.

## Contra Bristleback (bristleback)

- placar: 49 vitórias em 79, 62,0% pro Viper, uma das maiores vantagens da lista com amostra de 30+ jogos (fonte: OpenDota /heroes/47/matchups; só Faceless Void, Night Stalker e Ancient Apparition têm taxa maior com amostra parecida).
- por que importa: é um dos melhores confrontos do Viper com amostra relevante, vale a pena o jogador saber por quê.
- janelas: Bristleback é tanque de farm (GPM 565) com Power Treads aos 8:42 e Aghanim's Shard aos 18:24. Ele quer ficar de costas tomando dano pra reduzir o impacto por instância, mas isso não funciona contra DoT mágico repetido. O Viper já incomoda desde o nível 2-3 de Poison Attack, bem antes de qualquer item.
- o que ele faz com você: Quill Spray em área machuca se o Viper ficar agrupado com aliados, e Viscous Nasal Goo reduz a armadura e lentifica, abrindo pra aliados dele.
- o que você faz com ele: a redução de dano por instância do Bristleback não neutraliza bem o DoT de Poison Attack nem o Nethertoxin, que tickam separado; Corrosive Skin ainda desacelera o ataque básico dele se ele vier bater de perto.
- itens que viram: Aghanim's Shard do Viper aumenta o stack de poison e passa a bater estrutura, útil pra forçar o jogo mesmo se o Bristleback empurrar; Hood of Defiance nele reduz o DoT mágico, é a resposta real do lado dele.
- como jogar: poke à distância sem parar, nunca entre no alcance de Quill Spray agrupado. O Viper ganha o duelo de atrito quase sempre.
- fonte: pro_dados/viper.json; pro_dados/bristleback.json; OpenDota /heroes/47/matchups.

## Contra Beastmaster (beastmaster)

- placar: 36 vitórias em 85, 42,4% pro Viper, uma das piores taxas da lista com amostra de 30+ jogos (fonte: OpenDota /heroes/47/matchups).
- por que importa: mais uma desvantagem relevante da lista, importante saber o porquê já que o Viper costuma achar que poke resolve tudo.
- janelas: Beastmaster é um dos GPM mais altos da lista (616) com Blink aos 18:36 e Ultimate Scepter aos 14:36, cedo pros padrões dele. O combo de iniciação dele fica pronto antes do Hurricane Pike do Viper (22:18), ou seja, a janela de risco pro Viper é justamente entre 15 e 22 min.
- o que ele faz com você: Primal Roar é um disable longo que ignora blink e corta a fuga do Viper, que não tem disjoint; Wild Axes negam a lane e empurram o Viper pra fora de posição.
- o que você faz com ele: Poison Attack reduz a resistência mágica dele, útil se o time tiver burst mágico pra aproveitar a abertura logo após o Roar passar.
- itens que viram: BKB no Viper (não aparece entre os itens mais comprados, mas é a resposta padrão) cancela o Primal Roar; Hurricane Pike ajuda a nunca ficar perto o bastante pro combo começar.
- como jogar: evite ficar perto de creep neutro ou do Beastmaster sem visão entre os 15 e 22 min, é a janela mais perigosa do confronto.
- fonte: pro_dados/viper.json; pro_dados/beastmaster.json; OpenDota /heroes/47/matchups.

## Contra Slardar (slardar)

- placar: 46 vitórias em 113, 40,7% pro Viper, empatado com Windranger como pior taxa da lista entre os confrontos com 100+ partidas (fonte: OpenDota /heroes/47/matchups).
- por que importa: é o pior confronto do Viper junto com o Windranger, e o motivo é direto: Slardar ataca exatamente a defesa mágica que o Viper mais depende.
- janelas: Slardar sai com Phase Boots-like (Power Treads 7:18 pelo pro_dados, Blink aos 13:18) bem cedo. Entre 13 e 18 min ele já inicia; o Dragon Lance do Viper (15:36) ajuda a kitar, mas não resolve o problema de fundo.
- o que ele faz com você: Corrosive Haze reduz a armadura do alvo pra amplificar dano físico e ainda dá true sight, revelando o Viper mesmo invisível (não mexe na resistência mágica, fonte: constants_abilities.json); Bash de Slardar soma dano físico consistente em cima disso, e Guardian Sprint fecha a distância rápido contra um herói sem disjoint.
- o que você faz com ele: Poison Attack reduz a resistência mágica dele, útil se o time tiver burst mágico, mas isso é independente do Corrosive Haze, que só mexe em armadura e visão.
- itens que viram: Aghanim's Shard em Slardar (17:12 em média) dá bash em área, piorando ainda mais o problema; Hurricane Pike do Viper é a resposta de alcance, mas não resolve o Corrosive Haze.
- como jogar: evite parar pra trocar Poison Attack sob Corrosive Haze, kite puro com o Pike assim que possível, e jogue pelo mapa em vez de 1x1 direto.
- fonte: pro_dados/viper.json; pro_dados/slardar.json; OpenDota /heroes/47/matchups.

## Contra Gyrocopter (gyrocopter)

- placar: 35 vitórias em 81, 43,2% pro Viper, uma das piores taxas da lista com amostra de 30+ jogos (fonte: OpenDota /heroes/47/matchups).
- por que importa: é um hard carry que quase nunca divide lane com o Viper mid ou offlane, mas aparece com frequência relevante em pro contra ele (81 partidas) e é uma das maiores desvantagens, então vale entender o porquê sem depender de lane.
- janelas: Gyrocopter é um dos farmers mais rápidos da lista (GPM 643, LH aos 10 de 62) com Power Treads aos 7:30. O poder dele não depende de item único, é escala pura de Rocket Barrage conforme sobe de nível, então o spike dele é constante a partir do nível 6.
- o que ele faz com você: Rocket Barrage é dano físico em área que ignora toda a resistência mágica que o Corrosive Skin do Viper constrói, e o Flak Cannon no late limpa onda e ilusões mais rápido que o Viper consegue empurrar sozinho.
- o que você faz com ele: Poison Attack ainda reduz resistência mágica, útil se o time jogar burst mágico, mas o Viper sozinho não vence a corrida de farm nem o trade de dano físico direto.
- itens que viram: Black King Bar no Viper (fora da lista dos 30 mais comprados, mas padrão contra Flak Cannon) segura o clear; Aghanim's Shard do Gyrocopter dá míssil guiado, que soma ainda mais dano físico.
- como jogar: não vire a corrida de farm numa briga de dano físico direto. Jogue pelo mapa, pressione estrutura com Aghanim's Shard próprio antes dele puxar a vantagem.
- fonte: pro_dados/viper.json; pro_dados/gyrocopter.json; OpenDota /heroes/47/matchups.

## Contra Terrorblade (terrorblade)

- placar: 38 vitórias em 81, 46,9% pro Viper, amostra de 30+ jogos (fonte: OpenDota /heroes/47/matchups).
- por que importa: é o par clássico de "dois carries sem lane em comum" pedido pelo dono do site, Terrorblade farma a safelane e o Viper o mid ou offlane, mas os dois competem pelo mesmo papel de farmer late que fecha jogo sozinho, e aparece com frequência relevante em pro contra o Viper.
- janelas: Terrorblade constrói rápido pro padrão dele (Power Treads 5:48, Manta Style 17:06), e a forma Metamorphosis dá alcance e crítico que mudam o jogo assim que ele tem nível 6 e um pouco de farm, normalmente entre 17 e 20 min. O Viper já tem Dragon Lance (15:36) nessa janela, mas ainda não o Pike, então é o ponto mais perigoso do confronto.
- o que ele faz com você: em Metamorphosis, Terrorblade ataca à distância com crítico e Reflection cria ilusões que dividem a atenção do Viper, enquanto Sunder deixa ele trocar de vida com um aliado pra escapar de qualquer execução.
- o que você faz com ele: antes do nível 6 e fora da forma, Terrorblade é frágil e corpo a corpo, exatamente onde o Poison Attack e o Corrosive Skin do Viper mais doem; Predator acelera a execução se ele errar o Sunder.
- itens que viram: Hurricane Pike do Viper ajuda a manter distância da forma crítica; Manta Style do Terrorblade turbina o clear e a confusão de ilusões, é o item que decide se ele consegue sair da lane dele e pressionar o mapa antes do Viper fechar o próprio build.
- como jogar: pressione antes do nível 6 dele. Depois que ele tiver Manta e Metamorphosis, evite troca direta e jogue pelo mapa puxando farm e estrutura em paralelo.
- fonte: pro_dados/viper.json; pro_dados/terrorblade.json; OpenDota /heroes/47/matchups.
