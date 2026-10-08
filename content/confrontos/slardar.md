---
id: confrontos-slardar
heroi: Slardar
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/slardar.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/{tusk,hoodwink,jakiro,rubick,pangolier,mars,centaur,tidehunter,queenofpain,storm_spirit,terrorblade,tiny,life_stealer,mirana,dark_seer,void_spirit}.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer (lane_role e xp_t de partidas de liga 7.40-7.41)
---

## Como essa lista foi montada

Slardar é jogado quase só de offlane (pos 3) e, secundariamente, de mid (pos 2): 1.525 partidas em pos 3 contra 525 em pos 2 e só 13 em pos 1, em 2.063 partidas de liga 7.40-7.41 (lane_role, OpenDota explorer), com 49,4% de vitória na pos 3. Os 16 oponentes abaixo vêm de quatro critérios: (1) os 6 mais jogados contra ele em pro (Tusk, Hoodwink, Jakiro, Rubick, Pangolier e Mars, todos com 270+ jogos); (2) rivais de mesma posição com mais jogos em pro: offlane (Centaur Warrunner, Tidehunter, Dark Seer) e mid (Queen of Pain, Storm Spirit, Void Spirit); (3) os maiores desvios de win rate com amostra de 30+ jogos, tanto pra cima (Lifestealer 61,9%, Void Spirit 60,0%) quanto pra baixo (Mirana 32,8%, Dark Seer 37,0%, Terrorblade 44,8%); (4) carries mais jogados em pro mesmo sem lane em comum, porque Slardar também é tag Carry e precisa saber o próprio power spike contra o farm alheio (Terrorblade, Tiny, Lifestealer). Várias entradas acumulam mais de um critério.

## Contra Tusk (tusk)

- placar: 170 vitórias em 340 jogos de pro (50,0%), pro_dados/slardar.json
- por que importa: é o oponente mais recorrente de Slardar na base pro inteira (340 jogos, o maior número de qualquer herói). Os dois vivem de abrir combo de stun cedo, Tusk como suporte de baixo farm (300 de gpm mediano, pro_dados/tusk.json), então cruzam muito em gank e contra-gank.
- janelas: até os 10-15 min Tusk já ameaça com Ice Shards (CD 23 a 14s conforme o nível, constants_abilities.json), disponível desde o nível 1. Walrus Kick não entra nessa conta: é uma habilidade que só existe se ele comprar Aghanim's Scepter, e isso quase não acontece em pro, Tusk nem aparece entre os 30 itens mais comprados dele (pro_dados/tusk.json), então na prática o risco inicial é o combo de Ice Shards mais Tag Team. Slardar só responde depois: Power Treads aos 7:18 (mediana de 1975 jogos) e Blink aos 13:18 (1987 jogos, pro_dados/slardar.json). Dos 17 min em diante, com Aghanim's Shard (17:12, n=1852) e principalmente Black King Bar (25:06, n=1366), a vantagem vira: Tusk não carrega item de dano nenhum no build dele (300 de gpm mediano, 6 last hit aos 10 min, pro_dados/tusk.json), então depois dos 20 min ele só ganha se pegar Slardar sozinho e com os dois spells gastos.
- o que ele faz com você: usa Ice Shards pra cortar sua rota de aproximação e Tag Team pra somar dano físico e slow em quem o time dele ataca por 6s; fora desse combo de abertura ele não tem mais nada pra te machucar, Walrus Kick é exclusivo de Scepter e ele quase nunca carrega esse item.
- o que você faz com ele: seu Blink fecha a distância antes que ele monte o combo inteiro, e Bash of the Deep é bkbpierce (constants_abilities.json), então mesmo ele com algum tipo de imunidade ainda toma o stun a cada 3 ataques; Corrosive Haze reduz a armadura dele e revela se ele tentar se esconder no fumacê.
- itens que viram: o Aghanim's Scepter de Tusk não é upgrade de nada que ele já tem, é a única forma dele ter Walrus Kick (aghs_desc: a descrição do Scepter é idêntica à da própria habilidade), só que ele quase nunca compra esse item em pro; do seu lado, o Black King Bar anula Ice Shards, que é mágico, deixando o Bash físico decidir a troca corpo a corpo.
- como jogar: nos primeiros 10 min, não ande sozinho no alcance do Ice Shards e espere o suporte cobrir. Depois do Blink mais o Shard, inverta o papel: inicie você primeiro, ele não aguenta seu Bash sem conseguir revidar.
- fonte: pro_dados/slardar.json; pro_dados/tusk.json; constants_abilities.json; aghs_desc

## Contra Hoodwink (hoodwink)

- placar: 171 vitórias em 328 jogos de pro (52,1%), pro_dados/slardar.json
- por que importa: segundo oponente mais jogado contra Slardar em pro (328 jogos). Hoodwink é suporte de roam que prende perto de árvore (Bushwhack) e revela de longe, então constantemente contesta a ronda que Slardar também faz pela própria lane.
- janelas: o perigo dela é constante e não escala muito: Bushwhack (CD 15-12s) estuna se tiver árvore perto, e ela farma pouco (343 gpm mediano, pro_dados/hoodwink.json), então o nível de ameaça dela nos primeiros 20 min é parecido do início ao fim. Slardar cresce em degraus: Blink aos 13:18 já deixa ele perigoso de engajar, e com Aghanim's Shard aos 17:12 (90% de taxa de compra, n=1852) ele consegue abrir luta sem precisar perseguir dentro do alcance do Bushwhack. O Aghanim's Shard dela (n=1224, 23:48) dá o Hunter's Boomerang, um poke a mais que não muda o resultado de um 1x1 fechado.
- o que ela faz com você: Bushwhack perto de árvore te estuna e zera sua visão por até 2,1s (constants_abilities.json), tempo o suficiente pro time dela reagir ao seu engajamento; Sharpshooter (CD 45s) é a carta que mais dói, ela aplica Break, que desliga passivas, inclusive Bash of the Deep e Seaborn Sentinel enquanto durar.
- o que você faz com ele: Corrosive Haze revela Hoodwink se ela tentar Scurry ou Decoy pra sumir, e o alcance de 900 do Haze te deixa punir ela de longe antes que o Bushwhack tenha árvore no raio certo; seu Bash ignora a maior parte do kit de controle dela fora do Break da ultimate.
- itens que viram: o Scepter dela deixa o Sharpshooter mais rápido e com slow maior (aghs_desc), o que é o maior risco pro seu combo de iniciação depois dos 24 min; fique de olho no cast dele e use Guardian Sprint pra cortar distância assim que ela carregar.
- como jogar: evite ficar parado perto de árvore isolado antes do Blink. Depois do combo pronto, force a luta rápido: o Break do Sharpshooter é curto e seu Bash volta a bashar assim que ele acabar.
- fonte: pro_dados/slardar.json; pro_dados/hoodwink.json; constants_abilities.json; aghs_desc

## Contra Jakiro (jakiro)

- placar: 157 vitórias em 324 jogos de pro (48,5%), pro_dados/slardar.json
- por que importa: terceiro mais jogado contra Slardar (324 jogos), quase sempre suporte duro de baixo farm (315 de gpm mediano, 8 last hit aos 10 min, pro_dados/jakiro.json). O confronto não é de lane direta na maioria dos casos, mas Jakiro aparece demais em pro pra ficar de fora: é a dupla de dano em área que mais atrapalha a aproximação de Slardar.
- janelas: Jakiro não tem power spike de item, o kit dele escala com nível e com Macropyre (CD 90-70s). Dual Breath (CD fixo 10s) já incomoda desde o nível 1. Slardar precisa do Blink (13:18) pra furar o slow de Dual Breath e do BKB (25:06) pra ignorar Ice Path e Macropyre de vez; antes disso, 0 a 13 min, Jakiro tem a vantagem de poke à distância, depois o jogo vira.
- o que ele faz com você: Dual Breath some sua janela de perseguição com slow, Ice Path (CD 20-11s) te prende se você errar o blink pra cima do time dele, e Macropyre com Scepter vira dano puro que seu BKB não bloqueia (aghs_desc: "increases Macropyre duration and causes it to deal Pure damage").
- o que você faz com ele: Corrosive Haze reduz a armadura dele e amplifica o fim de luta do seu time; Bash de 3 ataques mata rápido um herói sem mobilidade nenhuma, Jakiro não tem nenhum escape no kit.
- itens que viram: o Shard dele (constants_hero_abilities.json; aghs_desc) deixa Liquid Frost sem custo de mana e sem CD compartilhado com Liquid Fire, o que aumenta o slow contínuo em cima de você antes do Bash fechar o ciclo de 3 ataques; seu BKB neutraliza isso assim que entra.
- como jogar: force a luta dentro do alcance curto, não espere o Macropyre se formar. Depois do BKB, ande direto pra cima dele, Jakiro não sobrevive ao Bash sem suporte por perto.
- fonte: pro_dados/slardar.json; pro_dados/jakiro.json; constants_abilities.json; aghs_desc

## Contra Rubick (rubick)

- placar: 144 vitórias em 284 jogos de pro (50,7%), pro_dados/slardar.json
- por que importa: quarto mais jogado contra Slardar (284 jogos), suporte de roam que aparece na offlane em 69,9% das partidas de liga 7.40-7.41 (2.788 de 3.990, lane_role, OpenDota explorer) e anda pela lane dele em busca de Spell Steal.
- janelas: Rubick é fraco até conseguir roubar alguma coisa útil: Telekinesis (CD 22-13s) tem só 550-625 de alcance base sem a passiva de nível. Slardar fecha Blink aos 13:18 e, se iniciar perto de Rubick, corre o risco real dele roubar Slithereen Crush ou Corrosive Haze com Spell Steal logo depois do primeiro combo. Depois do BKB (25:06), Telekinesis não te afeta mais (bkbpierce: no, constants_abilities.json), só Spell Steal continua furando.
- o que ele faz com você: Telekinesis te levanta e estuna o grupo ao redor quando você cai, mas não atravessa BKB; o real perigo é Spell Steal, que copia a última magia que você lançou, incluindo Slithereen Crush pro próprio uso dele.
- o que você faz com ele: Bash ignora o fato dele não ter disable físico nenhum, e Corrosive Haze te dá alcance de 900 pra puni-lo antes que ele chegue perto o bastante pra Telekinesis.
- itens que viram: o Scepter dele aumenta o roubo pra 2 magias e upa pra versão scepter (aghs_desc), então depois dos 27 min (mediana de compra, n=1119) ele pode sair com duas magias suas roubadas se ficar perto na iniciação; jogue a sequência de combo longe da visão dele quando possível.
- como jogar: não lance Crush ou Haze perto de Rubick sem necessidade antes da luta de verdade, ele precisa ver a magia pra roubar. No resto, trate como qualquer suporte sem disable físico: Bash resolve.
- fonte: pro_dados/slardar.json; pro_dados/rubick.json; constants_abilities.json; aghs_desc; OpenDota explorer (lane_role, partidas de liga 7.40-7.41)

## Contra Pangolier (pangolier)

- placar: 142 vitórias em 270 jogos de pro (52,6%), pro_dados/slardar.json
- por que importa: quinto mais jogado (270 jogos) e a principal sobreposição de posição: Pangolier é majoritariamente mid (63,9% das partidas, 1.169 de 1.830, lane_role, OpenDota explorer, partidas de liga 7.40-7.41), mas também disputa offlane (35,8%) nas mesmas partidas que Slardar, então os dois competem direto por espaço de iniciação.
- janelas: Pangolier farma rápido (561 gpm mediano, 56 last hit aos 10 min, pro_dados/pangolier.json) e fecha Diffusal Blade cedo (12:24, n=1408), ficando perigoso em duelo já aos 12-15 min, antes do Blink de Slardar (13:18). Dos 17-19 min em diante, com os dois tendo Blink (Pangolier 19:12, Slardar 13:18) e Shard prontos, quem engaja primeiro costuma ganhar: Slardar tem o combo mais barato (Crush custa pouca mana, CD de só 7s), Pangolier depende do timing certo do Rolling Thunder (CD 90-80s) pra virar o confronto.
- o que ele faz com você: Swashbuckle desliza e desacelera, Rolling Thunder te deixa fora de controle por alguns segundos dentro da bola, e o Shard dele (Roll Up) dá imunidade a debuff e 80% de resistência mágica justamente na hora que seu combo de stun e armadura ia pegar.
- o que você faz com ele: Roll Up dá imunidade a debuff (aghs_desc), o que deve segurar o stun do seu Bash enquanto durar, então mire o combo antes dele rolar pra dentro da bola, não durante; Corrosive Haze reduz a armadura que o Diffusal dele já corta, e seu Blink chega mais cedo no jogo, então você pode iniciar antes dele ter o combo pronto.
- itens que viram: o Scepter dele faz Shield Crash disparar Swashbuckles extras em volta (aghs_desc), bom pra limpar seu time num engajamento em grupo; o Shard (Roll Up) é a resposta direta ao seu Crush, ele rola pra fora do stun. Seu BKB (25:06) segura o burst mágico dele até você fechar o Bash.
- como jogar: ataque a janela entre o Diffusal dele e o Blink dele, 12 a 19 min, antes que ele tenha o Roll Up pra escapar do seu combo. Depois disso, condicione o engajamento ao Rolling Thunder dele estar em CD.
- fonte: pro_dados/slardar.json; pro_dados/pangolier.json; constants_abilities.json; aghs_desc; OpenDota explorer (lane_role, partidas de liga 7.40-7.41)

## Contra Mars (mars)

- placar: 157 vitórias em 270 jogos de pro (58,1%), pro_dados/slardar.json
- por que importa: empatado como sexto mais jogado (270 jogos), é o rival direto de posição: Mars é offlane em 96,5% das partidas de liga 7.40-7.41 (2.259 de 2.340, lane_role, OpenDota explorer), disputando a mesma lane e o mesmo papel de iniciador de força que Slardar.
- janelas: os dois sobem no mesmo ritmo porque compartilham itens (Phase Boots/Treads cedo, Blink no meio, BKB depois), mas Slardar chega no Blink primeiro: 13:18 contra 15:12 de Mars (n=2136, pro_dados/mars.json), e ainda tem o combo mais barato e de CD mais curto (Crush a cada 7s contra Spear a cada 14-11s). Dos 21 min em diante, com os dois com Aghanim's Shard (Mars 21:30, Slardar 17:12), o duelo vira sobre quem consegue trancar o outro primeiro: Spear empala e empurra, Crush estuna no lugar.
- o que ele faz com você: Spear te empala e te arremessa pra trás, te deixando fora de posição e sem conseguir reagir no meio do voo; Bulwark bloqueia parte do seu dano físico de frente, inclusive dos seus ataques normais.
- o que você faz com ele: Corrosive Haze reduz a armadura dele e amplifica seu dano físico, inclusive contra o Bulwark (ele bloqueia %, não anula); seu Bash continua funcionando mesmo durante a Arena of Blood, porque é físico e dentro de alcance.
- itens que viram: o 58,1% de vitória de Slardar contra Mars em pro (a maior entre os rivais de mesma posição nesta lista) sugere que o combo Blink+Crush+Haze costuma sair antes do Spear dele; Black King Bar dos dois lados decide quem segura mais magia na troca final, e os dois chegam perto dos 26-27 min (Mars 26:30, Slardar 25:06).
- como jogar: evite lutar de frente pro Bulwark ligado, ataque de lado ou de trás quando possível. Gaste o Spear dele antes de iniciar de verdade, ele fica sem o principal pick-off por 11 a 14s depois de usar.
- fonte: pro_dados/slardar.json; pro_dados/mars.json; constants_abilities.json; aghs_desc; OpenDota explorer (lane_role, partidas de liga 7.40-7.41)

## Contra Queen of Pain (queenofpain)

- placar: 142 vitórias em 266 jogos de pro (53,4%), pro_dados/slardar.json
- por que importa: sétimo mais jogado (266 jogos) e o principal rival de mid: Queen of Pain é mid em 88,5% das partidas de liga 7.40-7.41 (1.969 de 2.225, lane_role, OpenDota explorer), a mesma posição secundária de Slardar.
- janelas: Queen of Pain farma rápido e sai na frente em dano (572 gpm, 56 last hit aos 10 min, pro_dados/queenofpain.json). Ela já ameaça kill no nível 6 com a combinação Blink mais Shadow Strike mais Scream of Pain, bem antes do Power Treads de Slardar (7:18) virar relevante em troca. A partir dos 13-17 min, quando Slardar tem Blink e Shard, ele consegue fechar a distância que ela cria com o próprio Blink (CD 12-6s); depois do BKB dele (25:06) a maior parte do kit dela para de machucar, com uma exceção importante: Sonic Wave é dano puro e atravessa imunidade mágica (dmg_type: pure, bkbpierce: yes, constants_abilities.json).
- o que ela faz com você: Blink entra e sai de alcance de ataque sem parar, Shadow Strike aplica slow de 16s que atrapalha seu Guardian Sprint, e Sonic Wave (ultimate, CD 110-80s) é dano puro e atravessa BKB (dmg_type: pure, bkbpierce: yes, constants_abilities.json).
- o que você faz com ele: seu Blink e seu Bash não dependem de alcance pra funcionar; uma vez que você a alcança, três ataques bastam, e ela não tem HP pra aguentar Bash mais Corrosive Haze reduzindo a armadura.
- itens que viram: o Shard dela (constants_hero_abilities.json; aghs_desc) faz o Blink soltar uma explosão sônica com silêncio de 1,75s nos dois pontos (saída e chegada), o que corta seu combo bem na hora de iniciar; gaste o combo rápido ou espere o Shard dela estar visivelmente em CD.
- como jogar: não force a luta sem Blink pronto, você não alcança ela de outro jeito. Depois do Blink, vá direto: ela não tem HP pra trocar corpo a corpo com você.
- fonte: pro_dados/slardar.json; pro_dados/queenofpain.json; constants_abilities.json; aghs_desc; OpenDota explorer (lane_role, partidas de liga 7.40-7.41)

## Contra Tiny (tiny)

- placar: 130 vitórias em 255 jogos de pro (51,0%), pro_dados/slardar.json
- por que importa: carry de pos 1 mais jogado contra Slardar em pro (255 jogos, acima de Terrorblade e Shadow Fiend), mesmo sem lane fixa em comum: Tiny varia entre safelane (36,8%), mid (33,5%) e offlane (29,6%) nas partidas de liga 7.40-7.41 (lane_role, OpenDota explorer), enquanto Slardar fica quase só na offlane, mas cruzam demais na fase de meio de jogo e em luta, então entender o power spike de carry contra carry importa mais do que o confronto de lane.
- janelas: Tiny escala em degraus de nível por causa do Grow: Power Treads aos 6:06 (mediana, pro_dados/tiny.json) e Tree Grab nível 5 por volta dos 7 min (mediana de 3.123 partidas de liga 7.40-7.41, xp_t contra o limiar de XP do nível 5, OpenDota explorer) já destravam limpeza de jungle rápida. Echo Sabre aos 12:06 (campo pro) e Blink aos 15:54 (n=2546, pro_dados/tiny.json) dão o combo de pick-off em grupo (Toss mais Avalanche). Slardar, que já tem Blink desde os 13:18, costuma chegar no BKB (25:06) antes de Tiny (26:42), ficando imune ao stun do combo um pouco mais cedo na curva.
- o que ele faz com você: Toss te agarra (você ou um aliado) e te arremessa onde ele quiser, Avalanche estuna em área por 1,5s logo depois, e com o Grow avançado cada ataque dele carrega bônus de dano que corta sua vida rápido se você entrar sem BKB.
- o que você faz com ele: Corrosive Haze reduz a armadura dele, que não é alta pra começo de conversa; Bash de 3 ataques estuna mesmo com o bônus de dano do Grow ativo, porque é um debuff físico, não mágico.
- itens que viram: o Shard de Tiny (constants_hero_abilities.json; aghs_desc) aumenta o dano e a área do Toss e das árvores jogadas, tornando o combo de grupo dele mais perigoso em luta cheia; seu BKB (25:06, mais cedo que o dele) é o que decide quem consegue agir primeiro quando os dois têm Blink prontos.
- como jogar: não ofereça o combo Toss mais Avalanche de graça ficando perto de aliados isolados. Depois do seu BKB, iniciar em cima dele é seguro, ele não tem resposta mágica contra o Bash físico.
- fonte: pro_dados/slardar.json; pro_dados/tiny.json; constants_abilities.json; aghs_desc; OpenDota explorer (lane_role e xp_t, partidas de liga 7.40-7.41)

## Contra Centaur Warrunner (centaur)

- placar: 138 vitórias em 247 jogos de pro (55,9%), pro_dados/slardar.json
- por que importa: rival direto de posição, quase sempre offlane (97,7% das partidas, 1.923 de 1.968, lane_role, OpenDota explorer, partidas de liga 7.40-7.41) assim como Slardar, e 247 jogos de amostra é alto o bastante pra confiar no número.
- janelas: Centaur farma rápido pra um tanque (509 gpm, 54 last hit aos 10 min, pro_dados/centaur.json) com Vanguard ou Helm of the Dominator aos 8:30-8:48, ficando difícil de matar cedo. O duelo de verdade começa com os dois blinks prontos (Centaur 19:36, Slardar 13:18, Slardar chega bem antes), e o 55,9% de vitória de Slardar em pro sugere que chegar primeiro no Blink pesa mais do que o tankiness inicial de Centaur.
- o que ele faz com você: Hoof Stomp estuna em área depois de um pequeno delay, e Retaliate devolve dano toda vez que você acerta ele de perto, inclusive através do seu BKB (bkbpierce: yes, constants_abilities.json), então bater nele sem planejar machuca os dois lados.
- o que você faz com ele: Corrosive Haze reduz a armadura dele e amplifica o dano físico do seu time, que é como seu grupo normalmente fura um tanque; Bash continua estunando mesmo que ele tente usar Double Edge em você.
- itens que viram: o Shard de Centaur (aghs_desc) faz Double Edge desacelerar e empilhar força por herói atingido, até 5 vezes, então ele fica mais perigoso quanto mais longa a troca; prefira trocas curtas com ele, feche o Bash rápido em vez de ficar brigando corpo a corpo.
- como jogar: use Corrosive Haze antes de engajar, a redução de armadura importa mais contra um tanque do que contra um herói frágil. Evite bater nele sem necessidade fora de luta, o Retaliate soma dano desnecessário mesmo com BKB.
- fonte: pro_dados/slardar.json; pro_dados/centaur.json; constants_abilities.json; aghs_desc; OpenDota explorer (lane_role, partidas de liga 7.40-7.41)

## Contra Tidehunter (tidehunter)

- placar: 135 vitórias em 238 jogos de pro (56,7%), pro_dados/slardar.json
- por que importa: outro rival direto de offlane, 98,9% das partidas em pos 3 (2.423 de 2.451, lane_role, OpenDota explorer, partidas de liga 7.40-7.41), e o segundo maior número de jogos entre os rivais de mesma posição.
- janelas: Tidehunter chega em Phase Boots aos 7:48 e Soul Ring aos 8:30 (pro_dados/tidehunter.json), rápido pra um tanque, mas o Blink dele só sai aos 21:12, bem depois do de Slardar (13:18). Nessa janela de 13 a 21 min, Slardar consegue iniciar primeiro quase sempre; depois dos 21-23 min, quando os dois têm Blink e Aghanim's Shard (Tide 23:06, Slardar 17:12), o risco principal passa a ser o Ravage dele (ultimate, CD 150-140s), que estuna todo mundo perto se ele conseguir fechar o blink em cima do seu time.
- o que ele faz com você: Gush reduz sua velocidade e sua armadura à distância, Anchor Smash reduz seu dano de ataque em área (o que esfria seu ciclo de Bash indiretamente), e Ravage estuna e tira uma fatia grande de vida se pegar o grupo.
- o que você faz com ele: Corrosive Haze soma com o corte de armadura do Gush dele, deixando-o ainda mais exposto a dano físico; Bash continua funcionando mesmo com o Kraken Shell dele bloqueando parte do dano de ataque, porque o bash não é cancelado por bloqueio de dano.
- itens que viram: o Shard dele (Dead in the Water, aghs_desc) ancora um herói e limita o quanto ele se afasta, perigoso se usado em você logo depois de um blink de engajamento, porque te prende perto do time dele; o Scepter vira o Gush numa onda em linha com CD menor, mais fácil de acertar o seu time inteiro na frente de luta.
- como jogar: não inicie você primeiro se o Ravage dele estiver disponível e o time inimigo agrupado, prefira forçar ele a gastar o ultimate fora de posição. Depois do Ravage gasto, o seu combo decide a troca sozinho.
- fonte: pro_dados/slardar.json; pro_dados/tidehunter.json; constants_abilities.json; aghs_desc; OpenDota explorer (lane_role, partidas de liga 7.40-7.41)

## Contra Storm Spirit (storm_spirit)

- placar: 110 vitórias em 229 jogos de pro (48,0%), pro_dados/slardar.json
- por que importa: rival de mid com 229 jogos de amostra e um dos poucos matchups desta lista em que Slardar fica abaixo de 50% de vitória, o que justifica estar aqui mesmo não sendo top 6 geral.
- janelas: Storm Spirit farma rápido mesmo pra um mid, atrás só de Terrorblade e Lifestealer entre os oponentes desta lista (581 gpm, 67 last hit aos 10 min, pro_dados/storm_spirit.json), e usa Ball Lightning pra chegar em qualquer ponto do mapa com mana de sobra. Ele ameaça pick-off já com Electric Vortex (CD 20-14s) desde cedo, e a curva dele sobe rápido até o Kaya and Sange (20:06). Slardar precisa do BKB (25:06) pra conseguir segurar o combo de Storm sem ser puxado e queimado antes de chegar perto; antes disso, a janela é dele.
- o que ele faz com você: Electric Vortex te puxa pra cima dele, Static Remnant mais o ataque carregado de Overload abrem dano à distância, e ele escapa de qualquer troca ruim voando embora com Ball Lightning, que você não consegue perseguir sem Guardian Sprint.
- o que você faz com ele: Corrosive Haze reduz a armadura e revela ele se tentar se esconder depois do Ball Lightning; uma vez que você entra no alcance, Bash estuna rápido o bastante pra impedir o próximo Ball Lightning de fuga, porque ele precisa estar parado pra reagir.
- itens que viram: o Scepter de Storm (aghs_desc) faz Electric Vortex puxar todo mundo num raio, perigoso se ele pegar seu time agrupado; seu BKB nega Electric Vortex, Static Remnant e o Overload mágico, sobrando só o dano físico do auto-ataque dele pra te machucar.
- como jogar: evite ficar sozinho e visível no mapa aberto antes do seu BKB, Storm alcança qualquer ponto com Ball Lightning. Depois do BKB, force a luta perto de torre ou em espaço fechado, onde ele não consegue voar embora fácil.
- fonte: pro_dados/slardar.json; pro_dados/storm_spirit.json; constants_abilities.json; aghs_desc

## Contra Terrorblade (terrorblade)

- placar: 99 vitórias em 221 jogos de pro (44,8%), pro_dados/slardar.json
- por que importa: o maior desvio pra baixo entre os carries puros, e um exemplo claro de confronto sem lane em comum (Terrorblade é safelane, Slardar é offlane) que ainda assim importa muito: 221 jogos de amostra e Slardar perde a maioria deles, então vale entender por quê.
- janelas: Terrorblade é o herói de farm mais rápido desta lista (701 gpm mediano, pro_dados/terrorblade.json) e usa a mini-jungle entre waves desde o nível 6 (~7:30) pra acelerar ainda mais. Power Treads sai aos 5:48, Manta aos 17:06 e Aghanim's Shard aos 17:24: a partir dos 15-17 min ele já farma em dobro com Manta e tem Metamorphosis (CD 145-130s) pra virar ranged de longo alcance. O problema pra Slardar é estrutural: ele não tem como acelerar o próprio farm pra acompanhar, seu jogo é sobre fechar o combo de iniciação antes que o jogo chegue nos 30-35 min, onde Terrorblade puro-carry já descolou.
- o que ele faz com você: Metamorphosis te ataca de longe e Reflection te prende numa área junto de ilusões lentas; depois do Shard, Demon Zeal acelera ele e as ilusões ainda mais, aumentando o DPS total contra você em luta prolongada.
- o que você faz com ele: ele não tem disable de verdade no kit, só slow em área (Reflection), então seu Blink mais Crush fecha o combo sem muita resistência se você chegar antes dele crescer; Bash e Corrosive Haze cortam rápido a vida dele, que não é tão alta fora de Metamorphosis.
- itens que viram: o 44,8% de vitória de Slardar aqui é, em boa parte, sinal de jogo que já foi longe demais sem decisão, Terrorblade com Manta mais Skadi (28:12) vira o maior ameaça de farm desta lista; seu BKB (25:06) nega o burst de Metamorphosis, mas não ajuda contra o Sunder, que troca o percentual de vida atual dos dois (piso de 25% a 35% pro lado dele, conforme o nível, constants_abilities.json), então mesmo com BKB você pode acabar entregando vida se estiver mais cheio que ele na hora do cast.
- como jogar: force decisão antes dos 25-30 min, não deixe o jogo esticar até ele ter Manta mais Skadi. Se a luta for tarde, entre com a vida baixa, não cheia: Sunder troca percentual de vida atual, quanto mais cheio você estiver na hora do cast, mais vida entrega pra ele sobreviver.
- fonte: pro_dados/slardar.json; pro_dados/terrorblade.json; constants_abilities.json; aghs_desc

## Contra Void Spirit (void_spirit)

- placar: 96 vitórias em 160 jogos de pro (60,0%), pro_dados/slardar.json
- por que importa: rival de mid (91,6% das partidas em pos 2, 1.475 de 1.610, lane_role, OpenDota explorer, partidas de liga 7.40-7.41) com a maior vantagem de Slardar entre os matchups de mesma posição, 60% de vitória numa amostra de 160 jogos.
- janelas: Void Spirit sai rápido no Aghanim's Shard, 17:00 (n=1270, 79% de taxa de compra, pro_dados/void_spirit.json), mas isso é cedo até pro padrão dele: o resto do build dele é todo de stat puro (Yasha aos 24:24, Scepter aos 25:06), sem um item de burst isolado que marque uma virada clara. Slardar, por outro lado, tem o Blink pronto desde os 13:18, mais cedo que o Astral Step dele virar realmente ameaçador em combo com Aether Remnant.
- o que ele faz com você: Aether Remnant te puxa se você cruzar o caminho do fantasma dele, e Astral Step te ataca de surpresa vindo de um ponto que você não vê chegar; Dissimilate te sacode de perto se você estiver prestes a fechar o Bash.
- o que você faz com ele: Corrosive Haze dá visão verdadeira e revela ele se tentar sumir com Dissimilate; Bash interrompe o combo dele assim que você conecta 3 ataques, e ele não tem HP alto pra aguentar Crush mais Bash mais Haze.
- itens que viram: o Scepter dele (Resonant Pulse vira silêncio com 2 cargas, aghs_desc) é a resposta dele ao seu combo de iniciação, atrapalha você logo depois do Blink; seu BKB (25:06) nega esse silêncio e o dano mágico de Astral Step e Aether Remnant.
- como jogar: não dê o primeiro movimento perto de passagem estreita, onde o Aether Remnant dele rende mais. Depois do seu BKB, iniciar em cima dele é bem seguro, ele depende de magia que você vai estar imune.
- fonte: pro_dados/slardar.json; pro_dados/void_spirit.json; constants_abilities.json; aghs_desc; OpenDota explorer (lane_role, partidas de liga 7.40-7.41)

## Contra Lifestealer (life_stealer)

- placar: 60 vitórias em 97 jogos de pro (61,9%), pro_dados/slardar.json
- por que importa: a maior vantagem de Slardar entre as amostras de 30+ jogos desta lista (61,9%), e outro exemplo de carry sem lane em comum: Lifestealer é safelane puro (pos 1), Slardar é offlane, mas os dois aparecem demais juntos na base pro pra ignorar.
- janelas: Lifestealer sobe rápido até a Radiance, mediana de 16:12 (n=1088, pro_dados/life_stealer.json). O problema dele é o kit: Rage (CD 20-17s) só dá imunidade a debuff, não a Doom, Black Hole ou silêncio real, que não são debuffs dispensáveis por isso (desc: "Debuff Immune", constants_abilities.json), e contra Slardar isso importa porque Corrosive Haze não é um debuff dispensável, é dano amplificado direto. Slardar com Blink (13:18) e Shard (17:12) consegue fechar o combo quase no mesmo tempo que a Radiance dele sai, roubando a janela que deveria ser dele.
- o que ele faz com você: Open Wounds reduz sua velocidade e cura o time dele com o dano que causarem em você; Feast cura ele a cada ataque, o que estica a troca a favor dele se ele já estiver com a Radiance pronta.
- o que você faz com ele: Corrosive Haze reduz a armadura dele e amplifica o dano físico que seu time já está causando; Rage dá imunidade a debuff (constants_abilities.json), então deve segurar o stun do seu Bash enquanto durar, mas são só 3 a 6s de duração com CD 20 a 17s, espere passar pra travar o combo.
- itens que viram: o Scepter de Lifestealer (Infest pode infestar heróis inimigos, aghs_desc) é mais uma ferramenta de escape de luta ruim do que de duelo direto contra você; seu BKB nega qualquer disable mágico que o time dele tente usar pra proteger ele, deixando o duelo físico decidir, onde Bash leva vantagem.
- como jogar: ataque antes da Radiance dele sair (16:12 de mediana), nessa janela ele depende só de Phase Boots e Feast. Depois da Radiance, ainda assim priorize ele primeiro numa luta de grupo, 97 jogos de amostra com 61,9% de vitória mostram que Slardar ganha esse duelo na maioria das vezes.
- fonte: pro_dados/slardar.json; pro_dados/life_stealer.json; constants_abilities.json; aghs_desc

## Contra Mirana (mirana)

- placar: 22 vitórias em 67 jogos de pro (32,8%), pro_dados/slardar.json; amostra abaixo de 100 jogos, trate como sinal forte mas não como certeza estatística
- por que importa: o maior desvio pra baixo de toda a lista, 32,8% de vitória contra uma suporte de baixo farm (375 de gpm mediano, 16 last hit aos 10 min, pro_dados/mirana.json). Não é confronto de lane principal, mas é o número mais extremo da base inteira de confrontos de Slardar, por isso entra mesmo com amostra menor.
- janelas: Mirana não escala em item, ela escala em Sacred Arrow (CD 19-16s, alcance total do mapa). O risco dela é constante do minuto 0 ao fim de jogo: uma Arrow bem lançada já é um stun longo o bastante pra abrir espaço pro time dela matar Slardar antes dele chegar perto. Não existe uma janela em que Slardar "vence" esse confronto de forma estrutural, o número de 32,8% sugere que o problema é mais de composição de time (Mirana costuma vir com times que sabem punir iniciação exposta) do que de item específico.
- o que ela faz com você: Sacred Arrow acerta de qualquer distância do mapa e atravessa invisibilidade, interrompendo sua iniciação antes mesmo dela começar; Leap fecha distância rápido pra ela ou pro time dela chegar em cima de você logo depois do stun.
- o que você faz com ele: uma vez que você sobrevive à Arrow e chega perto, Mirana não tem HP nem disable corpo a corpo pra te segurar, Bash resolve em 3 ataques; Corrosive Haze revela ela se tentar usar Moonlight Shadow (CD 120-100s) pra sumir o time dela inteiro.
- itens que viram: o Scepter dela (Sacred Arrow solta Starstorm no caminho e no impacto, aghs_desc) aumenta o dano de longe sem mudar o padrão do confronto; não há item seu que anule a Arrow em si, só posicionamento evita a linha de tiro.
- como jogar: ande fora da linha reta de visão dela sempre que possível, a Arrow precisa de linha livre pra acertar. Se ela errar a Arrow, o resto do kit dela não segura você, feche o combo sem hesitar.
- fonte: pro_dados/slardar.json; pro_dados/mirana.json; constants_abilities.json; aghs_desc

## Contra Dark Seer (dark_seer)

- placar: 20 vitórias em 54 jogos de pro (37,0%), pro_dados/slardar.json; amostra abaixo de 100 jogos
- por que importa: rival direto de offlane (98,1% das partidas, 611 de 623, lane_role, OpenDota explorer, partidas de liga 7.40-7.41) e o segundo maior desvio pra baixo da lista. É um dos dois únicos oponentes desta lista que disputam a mesma lane de Slardar e ainda assim batem ele na maioria das vezes, o outro é Storm Spirit no mid (48,0%).
- janelas: Dark Seer farma rápido com Ion Shell (CD 9s, dano em área constante) desde o nível 1, chegando a 569 gpm e 64 last hit aos 10 min (pro_dados/dark_seer.json), acima do próprio Slardar. O kit dele ataca justamente o ponto fraco do combo de Slardar: Vacuum (CD 60-30s) puxa o grupo todo pra dentro de uma área, cancelando blink parcial e agrupando pra Wall of Replica, que transforma quem atravessa em réplica lutando do lado dele, incluindo o próprio Slardar se ele for pego. Slardar só reequilibra o duelo depois do Blink (13:18) e principalmente do BKB (25:06), que nega Vacuum e Ion Shell.
- o que ele faz com você: Vacuum te puxa pra dentro de uma área ruim antes que você consiga reagir, Wall of Replica te transforma em cópia lutando contra o seu próprio time por um tempo se você cruzar, e Ion Shell corrói sua vida o jogo inteiro em lane.
- o que você faz com ele: Corrosive Haze reduz a armadura dele, que não é alta; Bash estuna rápido e ele não tem disable de escape além de Surge, que só dá velocidade, não imunidade.
- itens que viram: o Shard dele (Surge deixa rastro de dano e slow, aghs_desc) atrapalha sua perseguição se ele fugir; seu BKB é o item que mais muda esse confronto, nega Vacuum e Wall of Replica de uma vez, os dois pilares do kit dele contra você.
- como jogar: evite engajar perto de onde ele pode formar a Wall of Replica, vire réplica é o pior cenário possível aqui. Depois do seu BKB, o duelo volta a favorecer Bash, ele não tem resposta física pra isso.
- fonte: pro_dados/slardar.json; pro_dados/dark_seer.json; constants_abilities.json; aghs_desc; OpenDota explorer (lane_role, partidas de liga 7.40-7.41)
