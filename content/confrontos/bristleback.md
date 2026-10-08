---
id: confrontos-bristleback
heroi: Bristleback
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/bristleback.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/beastmaster.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/pangolier.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tidehunter.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/brewmaster.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/techies.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nyx_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/keeper_of_the_light.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/phoenix.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/bristleback.md
- https://api.opendota.com/api/constants/aghs_desc
- liquipedia.net (mecanica de Evasion, via busca)
- dotacoach.gg/heroes/bristleback (via busca, goo e dispel)
---

## Como ler esta lista

Bristleback é quase mono posição 3 (offlane): 91% das partidas dele são na pos 3 no 7.41f, segundo a ficha já verificada do site (fonte: content/fichas/bristleback.md, dotacoach.gg). O kit dele é fixo: Viscous Nasal Goo reduz armadura e velocidade (dano físico zero, só debuff), Quill Spray é dano físico em área que atravessa BKB (`bkbpierce: Yes` em constants_abilities.json), a passiva Bristleback reduz o dano que ele recebe de lado (até 20%) e de trás (até 40%), e Prickly amplifica o dano e a duração de debuff que ele causa em quem está atrás dele. Ele não tem dispel nem escape no kit base, por isso Lotus Orb, BKB e Aghanim's Shard (mediana de 18,4 min, p25 16,5 min, fonte: pro_dados/bristleback.json) viram prioridade (fonte: content/fichas/bristleback.md).

Os 15 oponentes abaixo cobrem quatro critérios: os 6 com mais jogos de pro contra ele, os 3 pos 3 mais comuns em pro (mesma função dele), os 3 com maior vantagem dele (30+ jogos) e 3 confrontos claramente desfavoráveis a ele (30+ jogos). O "% placar" é sempre a taxa de vitória do Bristleback nesse confronto, calculada a partir de `confrontos` em pro_dados/bristleback.json (fonte: OpenDota `/heroes/99/matchups`, partidas de liga 7.40 e 7.41).

## Contra Rubick (rubick)

- placar: Bristleback venceu 94 de 217 partidas de pro, 43,3% (fonte: pro_dados/bristleback.json).
- por que importa: é o oponente mais comum do Bristleback em pro, de longe. Rubick é suporte roamer (pos 4/5, fonte: herois_catalogo.json), raramente divide lane com ele, mas aparece quase em todo draft porque é utilidade de time, e acaba decidindo a luta onde o Bristleback está.
- janelas: até 10 min o Rubick não ameaça muito sozinho (ele sai de Arcane Boots mediana 10,3 min, fonte: pro_dados/rubick.json), então o Bristleback já está de Treads (mediana 8,7 min) puxando camp. O perigo do Rubick cresce com o Blink Dagger dele, mediana 21,6 min (p25 16,9), que coincide com a janela em que o Bristleback ainda não fechou Lotus Orb (mediana 17,7) nem BKB.
- o que ele faz com você: Telekinesis (cd 22/19/16/13s, constants_abilities.json) te isola do time e te joga de volta no chão com stun em área, perfeito pra te separar antes que o Warpath suba. Fade Bolt reduz seu dano de ataque e de feitiço, cortando o Quill Spray.
- o que você faz com ele: Rubick tem HP baixo (suporte puro) e nenhuma defesa contra dano físico sustentado. Se você chega nele sem ser pego pela Telekinesis primeiro, Quill Spray mais Warpath acumulado mata rápido, porque não atravessa BKB mas o Rubick raramente tem BKB.
- itens que viram: Lotus Orb (constants_abilities.json: Echo Shell devolve a maioria dos feitiços direcionados, incluindo Telekinesis) e BKB pra atravessar o stun; do lado dele, Aghanim's Scepter de Rubick deixa roubar 2 feitiços em vez de 1, o que pode incluir Hairball seu se ele estiver perto quando você lançar (fonte: aghs_desc).
- como jogar: na lane você quase nunca o vê perto, então o foco é farmar rápido e chegar na fase de grupo com Aghs Shard pronto. Em luta, mate as prioridades de dano antes de focar o Rubick, e tenha Lotus Orb ou BKB prontos pra não tomar Telekinesis parado.
- fonte: pro_dados/bristleback.json; pro_dados/rubick.json; constants_abilities.json; herois_catalogo.json; aghs_desc; content/fichas/bristleback.md.

## Contra Tusk (tusk)

- placar: Bristleback venceu 99 de 203, 48,8% (fonte: pro_dados/bristleback.json).
- por que importa: segundo oponente mais comum em pro. Tusk é suporte roamer/ganker (pos 4/5), não divide lane, mas o kit dele de iniciação combina muito com times que têm follow-up de dano em área, que é exatamente o seu caso.
- janelas: Tusk sai rápido de botas (Tranquil Boots mediana 8,4 min, fonte: pro_dados/tusk.json) pra rotacionar cedo, antes do seu Treads (8,7 min) estar pronto. O risco maior dele vem com o Blink Dagger, mediana 19,0 min, que ainda é antes do seu Lotus Orb (17,7) estar sempre pronto mas depois do Aghs Shard (18,4) já estar perto.
- o que ele faz com você: Snowball te prende e te arrasta pro time dele, Ice Shards cria uma parede que corta sua rota de fuga (que você já não tem), e Walrus Punch é um crítico isolado que machuca mesmo seu pool de HP alto.
- o que você faz com ele: Tusk é tanque de suporte, não morre fácil num 1x1 só, mas também não tem como te segurar sozinho: sem o time dele, Snowball sem aliado dentro vira só um stun fraco. Se ele erra o combo, Quill Spray mais Goo encurtam a vida dele rápido.
- itens que viram: Lotus Orb devolve Snowball e Walrus Punch (alvo único direcionado); BKB atravessa o stun do Snowball e do Walrus Kick. O Aghanim's Scepter dele dá um Walrus Kick com cooldown reduzido pela metade contra creep, então ele some e volta rápido na lane se você estiver sozinho lá.
- como jogar: fique perto de aliados ou de torre nos primeiros 20 minutos pra não virar alvo fácil de Snowball; depois do Lotus Orb, você pode te expor mais, porque qualquer coisa direcionada nele volta pro time dele.
- fonte: pro_dados/bristleback.json; pro_dados/tusk.json; constants_abilities.json; aghs_desc; content/fichas/bristleback.md.

## Contra Jakiro (jakiro)

- placar: Bristleback venceu 104 de 202, 51,5% (fonte: pro_dados/bristleback.json).
- por que importa: terceiro mais comum em pro. Jakiro é suporte de lane com dano em área e slow, o tipo de herói que historicamente incomoda carries melee, mas contra você perde a maior arma dele, que é o burst, porque seu pool de HP absorve o DoT.
- janelas: Jakiro sobe Arcane Boots aos 11,7 min (fonte: pro_dados/jakiro.json) e só fica realmente perigoso com Macropyre no nível 6, geralmente por volta dos 8 a 10 min de jogo. Antes disso você já fechou Treads (8,7) e está puxando camp livre, porque Dual Breath sozinho não reduz seu HP rápido o bastante.
- o que ele faz com você: Dual Breath slow mais dano ao longo do tempo, Ice Path stuna se você pisar na área, e Macropyre (cd 90/80/70s) é uma parede de fogo que machuca muito se você ficar parado nela limpando camp.
- o que você faz com ele: Jakiro tem pouco HP pra suporte e zero mobilidade (sem blink, sem dash no kit base). Se você fecha a distância, Quill Spray mais Goo o matam antes que ele consiga rodar as 4 habilidades de novo, porque o cooldown de Dual Breath (10s) é mais longo que o tempo que você precisa pra matá-lo corpo a corpo.
- itens que viram: BKB ignora boa parte do dano mágico dele (Dual Breath, Macropyre); Heaven's Halberd ou Blade Mail só ajudam indiretamente, já que Jakiro raramente ataca corpo a corpo. O Aghanim's Scepter dele estende Macropyre e troca pra dano puro, que ignora resistência mágica, então vira prioridade de BKB se ele tiver.
- como jogar: evite ficar parado em cima de fogo no chão depois dos 15 minutos de jogo (janela em que ele já tem nível pra Macropyre upada); fora isso, trate como free farm e force ele a gastar mana pra te segurar.
- fonte: pro_dados/bristleback.json; pro_dados/jakiro.json; constants_abilities.json; aghs_desc.

## Contra Shadow Fiend (nevermore)

- placar: Bristleback venceu 83 de 178, 46,6% (fonte: pro_dados/bristleback.json).
- por que importa: quarto mais comum em pro. Shadow Fiend é mid pos 1 clássico (herois_catalogo.json), raramente divide lane com o offlaner, mas é o inimigo que mais rápido sai na frente em ouro: 658 de GPM mediano contra os seus 565 (fonte: pro_dados/nevermore.json e pro_dados/bristleback.json), então o confronto real é quem chega mais forte na primeira luta de grupo.
- janelas: até os 10 min, Shadow Fiend já tem 78 de last hit mediano contra os seus 63 (fonte: resumo de cada json), uma vantagem de farm real. O primeiro pico dele é o Mask of Madness, mediana 10,2 min, que acelera o clear; o seu é o Treads, 8,7 min. Dos 18 aos 25 min ele está fechando Yasha mais Dragon Lance (13 a 14 min) e indo pra BKB (25,2 min), bem na janela em que você fecha Aghs Shard (18,4) e Lotus Orb (17,7).
- o que ele faz com você: Shadowraze (três versões, cd 9s, 85 a 280 de dano base conforme nível, mais bônus por alma, constants_abilities.json) te pune se você chegar perto dele a pé, porque ele raza o chão onde você está parado sem precisar mirar em você. Com almas acumuladas (Necromastery, até 1,35 de dano bônus por alma) o burst dele cresce rápido depois de kills.
- o que você faz com ele: Shadow Fiend é de papel sem Yasha/BKB. Se você entra no alcance de melee dele sem levar um Raze no caminho, Quill Spray mais Goo o derretem antes que ele consiga kitar, porque ele não tem slow nem stun pra te afastar.
- itens que viram: BKB seu atravessa o Requiem of Souls (fear mais slow, área) e os Razes contam como dano direto que o BKB bloqueia; o Aghanim's Shard dele reduz o cooldown do Raze a cada herói acertado, então cada vez que ele acerta você em grupo, ele raza mais rápido.
- como jogar: na rota separada o foco dele vai ser puxar farm, então sua janela de pressão é fazer ele perder XP/ouro com rotações suas no mid. Em luta, não ande reto na linha de Raze; chegue de ângulo ou use Hairball pra aplicar debuff antes de entrar no corpo a corpo.
- fonte: pro_dados/bristleback.json; pro_dados/nevermore.json; constants_abilities.json; herois_catalogo.json; aghs_desc.

## Contra Hoodwink (hoodwink)

- placar: Bristleback venceu 79 de 177, 44,6% (fonte: pro_dados/bristleback.json).
- por que importa: quinto mais comum em pro. Hoodwink é suporte 4/5 de armadilha e poke à distância; não divide lane fixa com você, mas ela e você compartilham o mesmo item, Aghanim's Shard, e chegam nele quase no mesmo minuto (18,4 vs 23,8, fonte: ambos pro_dados), o que muda quem ganha a troca à distância.
- janelas: antes dos 15 min ela está com Arcane Boots (12,2 min, pro_dados/hoodwink.json) kitando de longe com Acorn Shot; você já tem Treads (8,7). A virada é por volta dos 18 a 24 min, quando o Shard dela (Hunter's Boomerang com slow e vulnerabilidade a mágico) e o seu (Hairball à distância) ficam prontos quase juntos.
- o que ele faz com você: Bushwhack (cd 15 a 12s conforme nível) te stuna perto de árvore e aplica dano ao longo do tempo; Sharpshooter (cd 45s) é um nuke de longo alcance com break, que desliga sua passiva Bristleback e o Prickly durante a janela de debuff.
- o que você faz com ele: Hoodwink tem pouco HP e nenhuma defesa contra engajamento corpo a corpo direto. Se você fecha a distância sem levar um Sharpshooter cheio, ela morre rápido pro seu Quill Spray, porque Scurry só dá fuga breve, não imunidade.
- itens que viram: BKB seu limpa o Break do Sharpshooter (dispel básico ao ativar, mesmo efeito já citado na ficha contra Silver Edge); Lotus Orb devolve Bushwhack, que é direcionado em área mas ainda conta como feitiço lançado nela. O Aghanim's Scepter dela deixa o Sharpshooter mais rápido e o slow mais forte, então ele fica mais difícil de escapar.
- como jogar: não force engajamento quando ela estiver carregando Sharpshooter (ela fica parada e visível por 0,75s antes do tiro, use essa janela pra fechar distância); depois disso ela fica sem resposta corpo a corpo.
- fonte: pro_dados/bristleback.json; pro_dados/hoodwink.json; constants_abilities.json; aghs_desc; content/fichas/bristleback.md.

## Contra Beastmaster (beastmaster)

- placar: Bristleback venceu 91 de 174, 52,3% (fonte: pro_dados/bristleback.json).
- por que importa: sexto mais comum em pro, e também o pos 3 mais jogado contra ele (herois_catalogo.json lista Beastmaster como 2/3). É o duelo clássico de offlane tanque contra offlane tanque, e o mais frequente dos dois na amostra.
- janelas: os dois saem de Treads praticamente juntos, 6,8 min dele contra 8,7 seu (pro_dados/beastmaster.json). O pico dele chega cedo: Aghanim's Scepter mediano em 14,6 min, muito antes do seu Aghs Shard (18,4). Entre 14 e 19 min ele tem vantagem clara, porque o Scepter dele faz os ataques dele e dos bichos dele baterem um tambor que cura e machuca em área. Depois dos 20 min, com seu Shard e Lotus Orb prontos, a luta equilibra de novo.
- o que ele faz com você: Primal Roar (cd 90/75/60s) te stuna de 3 a 4s e empurra o caminho, te deixando parado pro time dele acabar o combo, e seu kit não tem nenhuma resposta a isso além de BKB. Wild Axes amplifica o dano que ele e os bichos causam em você (5% a 8% por acerto).
- o que você faz com ele: você ataca de volta, no sentido literal: Beastmaster também depende de ficar perto da luta com os bichos dele, então Quill Spray acerta ele e os summons juntos. Se ele gastar o Primal Roar e errar, ele fica sem resposta pro seu sustain.
- itens que viram: BKB atravessa o stun do Primal Roar; Lotus Orb não ajuda aqui porque Primal Roar é em área, não alvo único. Heaven's Halberd desarma ele e reduz o dano dos ataques que viram parte do dano do Drums of Slom.
- como jogar: guarde BKB pra iniciação dele, não pra farm; se ele jogar Primal Roar fora de posição, é a sua deixa pra entrar e punir com Quill Spray em cima dele e dos bichos.
- fonte: pro_dados/bristleback.json; pro_dados/beastmaster.json; herois_catalogo.json; constants_abilities.json; aghs_desc.

## Contra Pangolier (pangolier)

- placar: Bristleback venceu 64 de 146, 43,8% (fonte: pro_dados/bristleback.json).
- por que importa: é o pos 2/3 mais jogado contra você depois do Beastmaster (herois_catalogo.json). Pangolier é flex mid/offlane e costuma te enfrentar como oponente direto de rota, com um kit de mobilidade que você não tem resposta nenhuma pra alcançar.
- janelas: Pangolier farma rápido com Swashbuckle desde cedo e sai num Diffusal Blade mediano de 12,4 min (pro_dados/pangolier.json), bem antes do seu primeiro item grande. O pico de luta dele é o Blink Dagger, mediana 19,2 min, janela em que você ainda está sem Lotus Orb pronto (17,7 só na mediana, muitos jogos ainda não têm).
- o que ele faz com você: Rolling Thunder (cd 90/85/80s) te stuna ao colidir durante o rolamento e dá a ele imunidade a debuff mais 80% de resistência mágica enquanto rola, então seu Goo não gruda nele nessa janela. Swashbuckle entra e sai da sua range de Quill rápido demais pra você alcançar sozinho.
- o que você faz com ele: Pangolier é esquiva, não é tanque. Se ele erra o timing do Roll Up ou gasta Rolling Thunder fora de hora, ele fica parado no alcance do seu Quill Spray, que é dano físico constante, e ele não tem HP pra aguentar.
- itens que viram: BKB não ajuda muito aqui porque Rolling Thunder tem dispel básico próprio; Heaven's Halberd desarma e reduz o dano dele quando ele tenta trocar no corpo a corpo fora do rolamento. O Aghanim's Scepter dele faz o Shield Crash lançar Swashbuckle em volta, então a luta de perto fica pior pra você se ele upar isso.
- como jogar: evite trade isolado antes dele gastar Rolling Thunder; force ele a rolar em cima de creeps ou de uma zona ruim, porque fora da bola ele não tem defesa contra seu dano sustentado.
- fonte: pro_dados/bristleback.json; pro_dados/pangolier.json; herois_catalogo.json; constants_abilities.json; aghs_desc.

## Contra Mars (mars)

- placar: Bristleback venceu 67 de 144, 46,5% (fonte: pro_dados/bristleback.json).
- por que importa: pos 3 puro mais clássico contra você na amostra (herois_catalogo.json marca Mars só como pos 3). É o confronto de offlane direto mais frequente: dois tanques de força que vivem de ficar de frente, ou de costas, pro inimigo.
- janelas: os dois saem de botas quase juntos, Phase Boots dele aos 8,5 min contra seu Treads aos 8,7 (pro_dados/mars.json). O pico dele é o Blink Dagger, mediana 15,2 min, bem antes do seu Aghs Shard (18,4), uma janela em que ele pode te pegar isolado com Spear antes de você ter resposta.
- o que ele faz com você: Spear of Mars (cd 14 a 11s) te empala numa árvore ou parede se acertar, te travando no lugar; Arena of Blood (cd 100/95/90s) cria uma arena que te prende dentro por 5,5s sem dispel nativo seu, enquanto lanceiros batem em quem está perto da borda.
- o que você faz com ele: a ironia é que os dois jogam igual, de costas pro perigo: Bulwark dele bloqueia 40% a 70% do dano de ataque pela frente e 20% a 35% pelo lado (constants_abilities.json), mas isso é só contra ataque básico, não contra o seu Quill Spray, que é dano de habilidade mesmo sendo físico. Então o escudo dele não reduz seu principal dano.
- itens que viram: BKB atravessa o stun do Spear e te tira da Arena of Blood se você ativar antes de ficar preso; Lotus Orb devolve o Spear, que é alvo único direcionado. O Aghanim's Shard dele faz o Spear empalar até 2 heróis e deixar rastro de fogo, então fica mais perigoso em luta de grupo.
- como jogar: não ande em linha reta perto de árvore ou parede quando ele estiver com Spear disponível; se ele abrir Arena of Blood em cima de você, gaste BKB ou Lotus na hora, porque ficar preso lá dentro sem resposta é onde você perde a luta.
- fonte: pro_dados/bristleback.json; pro_dados/mars.json; herois_catalogo.json; constants_abilities.json; aghs_desc.

## Contra Tidehunter (tidehunter)

- placar: Bristleback venceu 65 de 125, 52,0% (fonte: pro_dados/bristleback.json).
- por que importa: terceiro pos 3 puro mais comum contra você (herois_catalogo.json). Outro tanque de força que disputa a mesma lane e o mesmo papel de iniciador/sustain do time.
- janelas: Tidehunter sai de Phase Boots aos 7,8 min (pro_dados/tidehunter.json), levemente antes do seu Treads (8,7). Farm dos dois é parecido (515 GPM dele contra 565 seu, fonte: resumo de cada json), então a corrida é equilibrada até o Blink Dagger dele, mediana 21,2 min, perto do seu Lotus Orb (17,7) e Aghs Shard (18,4) já prontos.
- o que ele faz com você: Kraken Shell (cd 30s) bloqueia parte do seu dano de ataque físico e, ao cruzar um limiar de dano recebido (600 a 450 conforme nível, constants_abilities.json), remove debuffs negativos nele, incluindo o Goo, que a ficha do site já lista como removível por dispel (fonte: dotacoach.gg via busca). Anchor Smash reduz seu dano de ataque em até 40% por 6s.
- o que você faz com ele: Tidehunter também não tem fuga própria sem Blink, e Ravage (cd 150/145/140s) exige ele ficar no meio da luta pra acertar, te dando a chance de aplicar Quill Spray nele e nos aliados dele ao mesmo tempo. Kraken Shell bloqueia uma fração fixa de dano por ataque, não o dano em área do Quill.
- itens que viram: Heaven's Halberd reduz o dano de ataque básico dele, que é a arma principal do Kraken Shell pra ele sobreviver na troca corpo a corpo; BKB seu atravessa o stun do Ravage. O Aghanim's Shard dele transforma Gush numa onda que acerta todo mundo numa linha, então vira prioridade pra Lotus Orb só se for lançado em alvo único.
- como jogar: na troca de lane, poupe o Quill Spray pra depois que o Kraken Shell dele já estiver em cooldown (ativo ele reduz 40% de velocidade, então dá pra identificar quando ele gastou); em luta de grupo, não deixe ele cruzar o Ravage sem ter BKB de prontidão.
- fonte: pro_dados/bristleback.json; pro_dados/tidehunter.json; herois_catalogo.json; constants_abilities.json; aghs_desc; dotacoach.gg (via busca).

## Contra Brewmaster (brewmaster)

- placar: Bristleback venceu 34 de 52, 65,4%, a maior vantagem da lista com amostra de 30+ (fonte: pro_dados/bristleback.json).
- por que importa: maior vantagem do Bristleback com amostra confiável. Brewmaster é outro offlane/tanque de força (pos 3), então é um confronto direto de rota, só que um dos poucos onde ele perde feio.
- janelas: Brewmaster sai de Hand of Midas mediano aos 11,5 min (pro_dados/brewmaster.json), indicando build de farm, não de pressão de lane cedo. O pico dele é Aghanim's Scepter, mediana 19,9 min, logo depois do seu (18,4), então a diferença não é timing, é mecânica de kit.
- o que ele faz com você: Thunder Clap (cd 18 a 12s, 80 a 320 de dano, constants_abilities.json) desacelera seu ataque e movimento em área; Primal Split te divide o foco em três Brewlings simultâneos.
- o que você faz com ele: aqui está o motivo mecânico da vantagem. Drunken Brawler, a passiva de Brewmaster, dá evasão (15% a 30% conforme fase) só contra ataques básicos: evasão no Dota só é checada quando um ataque acerta, não se aplica a dano de habilidade (fonte: mecânica de Evasion, Liquipedia, via busca). Seu Quill Spray é um "no target, autocast", dano de habilidade mesmo sendo do tipo físico, então ele atravessa a evasão da fase Storm Brawler por completo. Ele não tem defesa própria contra sua principal fonte de dano.
- itens que viram: BKB seu atravessa o Thunder Clap; do lado dele, só itens de vida pura (Heart, Vanguard) ajudam a segurar o Quill Spray, porque evasão e resistência mágica (as duas coisas que a Drunken Brawler dá) não bloqueiam dano físico de habilidade.
- como jogar: não hesite em trocar Quill Spray direto nele mesmo sabendo que ele "deveria" ter evasão; na prática ela não funciona contra seu dano principal, então a lane tende a favorecer você se você simplesmente ficar no alcance dele.
- fonte: pro_dados/bristleback.json; pro_dados/brewmaster.json; constants_abilities.json; liquipedia.net (mecânica de evasion, via busca).

## Contra Templar Assassin (templar_assassin)

- placar: Bristleback venceu 56 de 90, 62,2% (fonte: pro_dados/bristleback.json).
- por que importa: segunda maior vantagem com amostra de 30+. Templar Assassin é pos 1 hard carry (herois_catalogo.json), raramente divide lane com você, mas é um dos carries mais jogados em pro no geral, e perde boa parte do tempo pra você mesmo sem lane em comum.
- janelas: TA sai muito rápido: Desolator mediano aos 14,3 min e Blink aos 17,4 (pro_dados/templar_assassin.json), um pico de farm e mobilidade cedo. Só que seu Aghs Shard (18,4) e Lotus Orb (17,7) chegam praticamente junto, então a partir dos 18 min a vantagem de burst dela esbarra na sua sobrevivência.
- o que ele faz com você: Refraction dá a ela barreira e bônus de dano por um número de instâncias (3 a 6 conforme nível, constants_abilities.json), além de Meld pra emboscar com invisibilidade e bônus de dano. Psi Blades atravessam você e acertam quem está atrás.
- o que você faz com ele: cada acerto do seu Quill Spray consome uma instância separada da Refraction dela, porque Quill dispara várias vezes em sequência contra alvo fixo. Em vez de ela absorver um ataque grande, o Quill Spray gasta as 3 a 6 cargas rápido, e depois disso ela fica exposta ao seu dano normal sem a camada de proteção. Refraction também tem cooldown de 14s, então se a luta dura mais que isso, ela fica sem resposta de novo.
- itens que viram: BKB seu atravessa o Meld e o burst dela; Heaven's Halberd desarma, cortando o dano de ataque que é a arma principal dela fora do Refraction. O Aghanim's Shard dela aumenta o bônus de dano do Refraction e deixa ela lançar mesmo desabilitada, o que ajuda ela a reagir ao seu stun se você tiver algum aliado com disable.
- como jogar: provoque o gasto da Refraction antes da luta principal (um Quill Spray de longe já consome cargas); depois disso ela precisa esperar o cooldown, e é sua janela pra fechar e matar.
- fonte: pro_dados/bristleback.json; pro_dados/templar_assassin.json; herois_catalogo.json; constants_abilities.json; aghs_desc.

## Contra Techies (techies)

- placar: Bristleback venceu 44 de 73, 60,3% (fonte: pro_dados/bristleback.json).
- por que importa: terceira maior vantagem com amostra de 30+. Techies é suporte de armadilha pos 4/5, quase nunca luta 1x1 de propósito, mas quando o Bristleback chega perto dele sem detectar as armadilhas a tempo, o resultado histórico ainda favorece você.
- janelas: Techies gasta o início inteiro plantando (primeiro item relevante, Arcane Boots, só aos 12,8 min, fonte: pro_dados/techies.json), enquanto você já está com Treads (8,7) puxando farm. A ameaça real dele só aparece quando ele tem mapa coberto de minas pronto pra te pegar no caminho.
- o que ele faz com você: Sticky Bomb (cd 16 a 7s conforme nível, constants_abilities.json) cola em você e explode depois de alguns segundos, com dano em área mais um slow secundário de movimento; Proximity Mines detonam em área se você fica parado nelas por 1s; Blast Off é um gap-close suicida que te stuna e causa dano alto em área.
- o que você faz com ele: Techies tem o menor HP da lista entre os 15, e nenhuma defesa corpo a corpo além das armadilhas. Se você sobrevive ao combo inicial (que normalmente é tudo que ele tem) e chega nele, Quill Spray mais Goo encerram a luta em poucos segundos, porque ele não tem segunda resposta.
- itens que viram: Boots com movimento, Wind Lace inclusive, ajudam a atravessar campo minado mais rápido com menos tempo parado em cada mina; BKB atravessa o stun do Blast Off. Sentry/dust (que você já carrega como offlaner) resolvem a invisibilidade das minas antes de entrar numa área suspeita.
- como jogar: nunca ande sozinho e devagar perto de áreas marcadas por Techies; se ele gastar Blast Off e sobreviver, ele fica sem resposta por um tempo, e essa é a hora de fechar.
- fonte: pro_dados/bristleback.json; pro_dados/techies.json; constants_abilities.json.

## Contra Nyx Assassin (nyx_assassin)

- placar: Bristleback venceu só 16 de 50, 32,0%, a maior desvantagem da lista (fonte: pro_dados/bristleback.json).
- por que importa: pior matchup do Bristleback na amostra inteira (30+ jogos). Nyx Assassin é suporte ganker 4/5, não divide lane fixa com ele, mas o kit dele é quase desenhado pra punir exatamente o que o Bristleback faz: ficar perto batendo Quill Spray.
- janelas: Nyx farma pouco (322 GPM mediano, fonte: pro_dados/nyx_assassin.json) e vive de emboscada, não de item. A primeira janela de perigo é assim que ele tem nível pra Burrow mais Spiked Carapace, geralmente por volta dos 6 a 8 min, bem dentro da sua fase de lane.
- o que ele faz com você: Spiked Carapace (cd 20 a 8s conforme nível) reflete e anula o próximo dano recebido de cada fonte, uma vez por fonte, e stuna quem causou o dano (140% refletido, 0,7 a 1,6s de stun, constants_abilities.json). Isso pune literalmente o seu Quill Spray: cada vez que um quill acerta ele com Carapace ativa, o dano volta pra você e você fica stunado. Impale interrompe sua aproximação e Vendetta te pega isolado na lane com burst de até 500 de dano bônus.
- o que você faz com ele: Nyx tem HP médio pra suporte e depende do timing certo da Carapace. Se ele erra a ativação ou gasta antes de você chegar, ele fica sem resposta corpo a corpo, porque Mind Flare e Impale têm cooldown alto (11 a 6,5s e 17 a 11s) pra segurar você sozinho.
- itens que viram: contra ele, evite ativar Quill Spray em autocast perto de uma Carapace suspeita, porque é exatamente o gatilho que ele quer. BKB não ajuda aqui, já que Spiked Carapace reflete qualquer dano, inclusive físico puro; Lotus Orb também não resolve, porque a Carapace não é um feitiço direcionado em você, é uma reação passiva dele.
- como jogar: na lane, pare de atacar quando perceber Nyx parado perto de árvore ou buraco (sinal de Burrow); force ele a gastar Carapace cedo com dano de creep ou de outro aliado antes de se engajar você mesmo.
- fonte: pro_dados/bristleback.json; pro_dados/nyx_assassin.json; constants_abilities.json.

## Contra Keeper of the Light (keeper_of_the_light)

- placar: Bristleback venceu 19 de 55, 34,5%, a segunda maior desvantagem da lista (fonte: pro_dados/bristleback.json).
- por que importa: matchup claramente desfavorável ao Bristleback na amostra (34,5%, bem abaixo dos 50%). Keeper of the Light é suporte 4/5 (às vezes pos 2) de longo alcance, não compartilha lane com ele na maioria dos drafts, mas o poke dele à distância anula justamente o plano de jogo do Bristleback, que depende de fechar distância.
- janelas: Keeper sai de Diadem aos 7,8 min (pro_dados/keeper_of_the_light.json) e já está pokando de longe desde o nível 1 com Illuminate. Enquanto você caminha até os 8,7 min pra fechar Treads, ele já castigou várias vezes de longe sem risco.
- o que ele faz com você: Illuminate (cd 13s, canalizado até 3s, dano máximo de 500, alcance de lançamento de 1800, constants_abilities.json) acerta de muito longe e escala com o tempo de canalização, te forçando a andar em zigue-zague ou tomar dano cheio. Solar Bind reduz sua resistência mágica e te deixa mais lento quanto mais você se move, abrindo caminho pro resto do time acabar o combo.
- o que você faz com ele: Keeper tem HP baixo e zero defesa corpo a corpo. Se você entra no alcance de ataque dele, ele não tem resposta nenhuma, porque todas as habilidades dele são de longo alcance ou suporte, nada pra te afastar de perto.
- itens que viram: BKB seu atravessa Illuminate e Solar Bind, mas a questão real é alcance, não resistência: você precisa fechar distância antes de levar dois ou três Illuminate. Blink (se você tiver algum aliado com iniciação) resolve melhor que item seu, já que Bristleback não tem mobilidade própria.
- como jogar: na lane, jogue por trás dos creeps pra quebrar a linha de visão do Illuminate; peça iniciação do seu time em vez de andar reto até ele, porque cada segundo exposto de longe é dano garantido pra ele e zero risco.
- fonte: pro_dados/bristleback.json; pro_dados/keeper_of_the_light.json; constants_abilities.json.

## Contra Phoenix (phoenix)

- placar: Bristleback venceu 49 de 135, 36,3% (fonte: pro_dados/bristleback.json).
- por que importa: matchup desfavorável ao Bristleback (36,3%) e também um dos oponentes com mais jogos registrados da lista (135), então é desvantagem relevante e frequente ao mesmo tempo. Phoenix é suporte flexível (4/5, às vezes pos 2), não divide lane fixa, mas o kit dele quebra justamente a vantagem de sustain que o Bristleback normalmente tem.
- janelas: Phoenix sobe Wind Lace cedo (9,5 min, pro_dados/phoenix.json) pra perseguir, e o Aghanim's Shard dele sai mediano aos 23,3 min, quase igual ao seu Lotus Orb mais S&Y (17,7 e 24,2). A partir dos 20 min a luta vira sobre quem força o Supernova primeiro.
- o que ele faz com você: Icarus Dive (cd 40 a 25s) persegue e aplica dano ao longo do tempo mais slow, justamente contra quem não tem escape. Sun Ray é dano sustentado em linha que anula parte do seu regen natural. Supernova (cd 120s) força a luta nos termos dele: 6s de dano em área mais stun final, e se ninguém destrói o ovo a tempo, ele volta com vida e mana cheias.
- o que você faz com ele: Phoenix tem HP baixo fora da forma de Supernova, e se você fecha nele antes do ovo, Quill Spray acaba com ele rápido. O problema é justamente chegar lá, porque Icarus Dive e Sun Ray dão a ele controle de quando a luta acontece.
- itens que viram: BKB atravessa o dano de Icarus Dive e de Sun Ray (ambos são spell damage contínuo); destruir o ovo do Supernova rápido (ele precisa de 6 a 10 ataques conforme nível, constants_abilities.json) evita ele voltar com recursos cheios no meio da sua luta.
- como jogar: foque o ovo do Supernova assim que ele ativar, em vez de continuar brigando com o resto do time dele; fora da forma de ovo, Phoenix é um alvo fácil pro seu dano sustentado se você conseguir fechar a distância.
- fonte: pro_dados/bristleback.json; pro_dados/phoenix.json; constants_abilities.json; aghs_desc.
