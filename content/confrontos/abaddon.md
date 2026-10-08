---
id: confrontos-abaddon
heroi: Abaddon
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/abaddon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/queenofpain.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/axe.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/troll_warlord.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/terrorblade.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/legion_commander.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/skeleton_king.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/keeper_of_the_light.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/treant.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/abaddon.md
- https://api.opendota.com/api/constants/aghs_desc
---

## Como essa lista foi montada
Abaddon joga quase só pos 3, 4 e 5 em pro (fonte: ficha verificada, dotacoach.gg/en/heroes/abaddon, tabela "Stats by Role" do 7.41f). Os 14 oponentes abaixo cobrem: os 6 com mais jogos de pro contra ele, os heróis de offlane/suporte (pos 3/4/5) mais comuns na mesma faixa, os 3 confrontos de maior vantagem com amostra de 30+ jogos e os 3 de maior desvantagem com 30+ jogos. Placar sempre do ponto de vista do Abaddon (fonte: pro_dados/abaddon.json, campo `confrontos`, que vem do endpoint `/heroes/{id}/matchups` do OpenDota filtrado pra partidas de liga 7.40-7.41). O Aghanim's Scepter/Shard de cada herói vem do endpoint `aghs_desc` do OpenDota, que descreve a versão atual.

Uma ressalva sobre os dados de item do próprio Abaddon: no recorte de 720 partidas de liga do `pro_dados/abaddon.json`, uma fatia grande das partidas mostra Radiance, Manta, Orchid/Bloodthorn e Hyperstone, uma build de carry que contradiz o perfil real dele (91,9% das partidas gerais são pos 3/4/5 contra só 6,6% de pos 1, com winrate abaixo de 50% nessa posição, fonte: ficha verificada/dotacoach.gg). Isso sugere que o recorte de liga do OpenDota pega campeonatos de nível misto, não só tier 1. Por isso as janelas de power spike do Abaddon abaixo usam os itens cedo que batem com os dois datasets (Boots, Phase Boots, Blink) e o nível/cooldown de Borrowed Time, que é o relógio real do herói independente da build.

## Contra Jakiro (jakiro)
- placar: 130/244 (53,3%) a favor do Abaddon em partidas de liga 7.40-7.41 (fonte: pro_dados/abaddon.json).
- por que importa: é o oponente mais comum do Abaddon no pro play, 244 jogos. Os dois vivem na trinca de trás, Jakiro é pos 5 em praticamente todas as suas 2.913 partidas do dataset, então é o duelo de suporte contra suporte mais repetido do jogo pro.
- janelas: até o nível 6 é troca de poke, Dual Breath (cd 10s) gela e queima em linha contra Aphotic Shield, que dispensa o debuff e absorve o combo inteiro. A partir do nível 6, Borrowed Time (cd 85s, dura 4s) neutraliza qualquer Macropyre (cd 90/80/70s) que pegue o Abaddon em cima: o DoT em área vira cura. Em itens, Jakiro fecha Arcane Boots aos 11,7 min (mediana, 2.278 partidas) e começa a abrir engajamento com Shadow Amulet aos 20,7 min (954 partidas); o Abaddon já está com Phase Boots prontas aos 6,5 min (609 partidas) pra fechar distância antes disso.
- o que ele faz com você: Dual Breath força o Abaddon a gastar Aphotic Shield cedo só pra não perder a troca de lane, e o Macropyre fecha a rota de fuga numa teamfight, mesmo sem matar.
- o que você faz com ele: Curse of Avernus desacelera e dá velocidade de ataque bônus a quem bate nele. Jakiro não tem blink nem dash no kit, só bota, então perseguir vira execução fácil depois que o escudo cai.
- itens que viram: Aghanim's Shard do Abaddon devolve 75% do dano absorvido pelo Aphotic Shield aos inimigos próximos (fonte: aghs_desc), o que pune o Jakiro parado batendo magia de perto.
- como jogar: estoure o Aphotic Shield assim que o Dual Breath sair, não espere o combo completo acertar. Depois do nível 6, fique dentro da área do Macropyre de propósito: com Borrowed Time ativo, o fogo dele vira sustain seu.
- fonte: pro_dados/abaddon.json; pro_dados/jakiro.json; constants_abilities.json; aghs_desc.

## Contra Snapfire (snapfire)
- placar: 86/181 (47,5%) a favor do Abaddon (fonte: pro_dados/abaddon.json).
- por que importa: segundo oponente mais comum em pro (181 jogos). Snapfire é flex (pos 2 a 5) mas aparece muito como pos 4/5, cruzando lane com o Abaddon suporte com frequência; é o único confronto desta lista em que o Abaddon fica abaixo de 50%.
- janelas: cedo, Scatterblast (cone com knockback) e Firesnap Cookie (cd 18/17/16/15s, stun de pulo) ameaçam o Abaddon tentando salvar o carry, mas o dano isolado é baixo. O divisor é o nível 6: Mortimer Kisses, a ultimate dela (cd 120/110/100s, 8 globos de ~180-360 de dano em 5,5s), é um nuke de área gigante que o Aphotic Shield de Abaddon não segura sozinho se vários globos acertam o mesmo alvo. Em itens, o Aghanim's Shard dela sai aos 16,9 min (mediana, 1.919 partidas), bem antes do Blink do Abaddon (24,9 min, 374 partidas) virar opção de fechar distância.
- o que ele faz com você: Mortimer Kisses em área cobre o raio do Aphotic Shield e ainda deixa poça de fogo que continua batendo depois que o escudo estoura. Firesnap Cookie com Shard cura e lança um Mortimer Kiss reduzido (40% do dano de impacto) no pouso, dando um segundo nuke de cortesia no mesmo cast (fonte: aghs_desc, shard de Firesnap Cookie).
- o que você faz com ele: Curse of Avernus desacelera Snapfire o suficiente pra ela não escapar depois de usar as ativas dela em você; Mist Coil no "Mortimer" (a montaria) corta a janela de cast dela se ela estiver em pouca vida.
- itens que viram: Lotus Orb no Abaddon (situacional, fonte: ficha/abaddon.md) devolve o stun do Firesnap Cookie pra ela; Glimmer Cape salva o alvo marcado antes do Mortimer Kisses cair.
- como jogar: não agrupe o time num raio de 275 (o impacto do globo) quando ela estiver com a ultimate disponível (nível 6+, respeitando o cd de 100-120s). Gaste o Aphotic Shield no aliado mais ameaçado assim que ela começar a canalizar, não depois.
- fonte: pro_dados/abaddon.json; pro_dados/snapfire.json; constants_abilities.json; aghs_desc.

## Contra Queen of Pain (queenofpain)
- placar: 96/181 (53,0%) a favor do Abaddon (fonte: pro_dados/abaddon.json).
- por que importa: empatada com Snapfire como segundo oponente mais comum (181 jogos). QoP é mid praticamente sempre, então não cruza lane com o Abaddon, mas aparece junto demais em pro pra ignorar: é o tipo de carry/burst mid que gank suportes como ele o jogo inteiro.
- janelas: até o nível 6, QoP tem Shadow Strike (cd 13-4s por nível) pra poke e marcar; o Abaddon aguenta de boa com Aphotic Shield. A partir do nível 6, Sonic Wave (cd 110/95/80s, 325-625 de dano numa onda de longo alcance) é o nuke que mais ameaça Abaddon fora de Borrowed Time, porque ignora a posição dele atrás do time. QoP fecha Power Treads aos 8,3 min (mediana, 2.032 partidas) e Kaya aos 13,9 min (1.940 partidas), chegando no pico de burst (Kaya and Sange + Aghanim's Scepter, 23,5 min, 1.396 partidas) bem antes do Abaddon montar qualquer coisa além de bota e escudo.
- o que ele faz com você: Sonic Wave sozinha pode levar o Abaddon de vida cheia pro gatilho automático de Borrowed Time (abaixo de 400 de vida) num cast só depois que ela tiver Aghanim's Scepter (Shadow Strike vira AoE e ainda causa "Scream of Pain" em quem está perto, fonte: aghs_desc).
- o que você faz com ele: Aphotic Shield no alvo que ela tentar executar anula o burst inicial do combo; Withering Mist corta a cura que ela ganharia de itens de lifesteal se ela cair abaixo de 40% de vida tentando trocar.
- itens que viram: Aghanim's Shard de QoP dá um silence de 1,75s ao redor do blink dela (fonte: aghs_desc), que pode travar a ativação manual de Borrowed Time se pegar o Abaddon no momento certo; sobra o gatilho automático abaixo de 400 de vida, que não é bloqueado por silence.
- como jogar: não force all-in sem saber se ela já tem Sonic Wave liberada (nível 6+, cd 80-110s). Guarde Aphotic Shield pro aliado que ela for focar primeiro, normalmente o de menos vida.
- fonte: pro_dados/abaddon.json; pro_dados/queenofpain.json; constants_abilities.json; aghs_desc; content/fichas/abaddon.md.

## Contra Tusk (tusk)
- placar: 102/177 (57,6%) a favor do Abaddon (fonte: pro_dados/abaddon.json).
- por que importa: quarto em volume (177 jogos) e mesma posição principal, os dois disputam a vaga de suporte 4/5 na mesma lane com frequência.
- janelas: cedo os dois têm ferramenta de iniciação em área: Ice Shards (cd 23-14s, 7 estilhaços de até 300 de dano formando uma parede) trava e o Abaddon responde com Aphotic Shield no aliado preso. A partir do nível 6, Snowball (a ultimate, que rola com aliados dentro) deixa Tusk iniciar de longe; os dois chegam no Blink Dagger quase junto (Tusk mediana 19,0 min em 2.655 partidas, Abaddon 24,9 min em 374), então quem fecha o Blink primeiro dita quem inicia a troca.
- o que ele faz com você: Walrus Punch (cd 16-10s, crítico de 200-300% que arremessa) pode executar um Abaddon fora de Borrowed Time antes dele reagir; Tag Team marca o alvo pra bônus de dano físico do time, o que sozinho o Aphotic Shield segura mas em luta de grupo soma rápido.
- o que você faz com ele: Aphotic Shield no aliado pego pelos Ice Shards anula o lockdown; Curse of Avernus desacelera Tusk o suficiente pra ele não alcançar o Snowball antes de engajar.
- itens que viram: Aghanim's Shard de Tusk puxa um aliado pra perto e dá velocidade/armadura em dupla (fonte: aghs_desc, "Drinking Buddies"), o que ajuda ele a fugir de uma troca que está perdendo contra o Curse of Avernus.
- como jogar: gaste Ice Shards antes de engajar junto, não espere o Tusk fazer o combo completo primeiro. Depois do nível 6, respeite a janela de Snowball: se o time inimigo estiver em bola, não agrupe o seu.
- fonte: pro_dados/abaddon.json; pro_dados/tusk.json; constants_abilities.json; aghs_desc.

## Contra Dragon Knight (dragon_knight)
- placar: 105/175 (60,0%) a favor do Abaddon (fonte: pro_dados/abaddon.json).
- por que importa: quinto em volume (175 jogos) e uma das maiores vantagens com amostra grande; DK costuma jogar mid ou pos 1, então o confronto normalmente nasce em teamfight, não em lane.
- janelas: early game DK é fraco em duelo (farm de LH10 alto, 63, mas sem ameaça real antes do nível 6). A partir do nível 6, Elder Dragon Form dá ataque à distância e dano mágico em área, só que o pico real dele é no late: ele fecha Black King Bar aos 23,3 min (mediana, 814 partidas) e crítico (Lesser/Greater Crit, 23,7 e 27,4 min) logo depois, virando uma máquina de dano sustentado que ignora magic damage com BKB ativo.
- o que ele faz com você: dentro do BKB, Breathe Fire (dano em cone) e os ataques de Elder Dragon Form ignoram o Curse of Avernus e o Withering Mist, porque BKB bloqueia debuff mágico; o dano físico sustentado dele é exatamente o tipo de ameaça que o Aphotic Shield segura melhor, mas só uma vez por 6-12s de cooldown.
- o que você faz com ele: Aphotic Shield absorve a rajada inicial de Breathe Fire; fora do BKB, Curse of Avernus reduz a troca sustentada dele, que é o ponto forte do herói.
- itens que viram: Heaven's Halberd no Abaddon (situacional pos 4, fonte: ficha/abaddon.md) soma evasão contra o ataque físico sustentado de DK por cima do que o escudo já absorve; Aghanim's Scepter de DK adiciona um dragão nível 4 com resistência mágica própria, que não é afetado pelo Withering Mist (fonte: aghs_desc).
- como jogar: gaste os disables fora do BKB dele, não durante. Depois dos 23 min, trate o DK como dano físico puro: Aphotic Shield no alvo focado, Mist Coil só pra cura.
- fonte: pro_dados/abaddon.json; pro_dados/dragon_knight.json; constants_abilities.json; aghs_desc.

## Contra Axe (axe)
- placar: 100/163 (61,3%) a favor do Abaddon (fonte: pro_dados/abaddon.json).
- por que importa: sexto em volume (163 jogos), mesma posição principal (offlane, pos 3) e a maior vantagem da lista com amostra grande, 61,3%. É o clássico confronto de offlane contra offlane quando o Abaddon joga pos 3.
- janelas: cedo os dois trocam bem: Counter Helix (helix a cada 4-7 ataques, sem cooldown próprio) machuca quem bate nele corpo a corpo, mas Curse of Avernus desacelera o Axe antes dele puxar aquela troca. A partir do nível 6, Berserker's Call (cd 18-12s) trava o Abaddon no lugar; os dois fecham Blink Dagger quase junto (Axe mediana 15,7 min em 1.898 partidas, Abaddon 24,9 min em 374), então o Axe costuma iniciar primeiro.
- o que ele faz com você: Berserker's Call força o Abaddon a atacar o Axe (o que alimenta o Counter Helix dele) e Culling Blade (pure damage, 275-475) pode terminar o trabalho se o Abaddon estiver fora da janela de 400 de vida do Borrowed Time.
- o que você faz com ele: Aphotic Shield no Axe assim que o Call pegar reduz o dano que ele recebe dos próprios aliados puxados; se o Abaddon cair abaixo de 400 de vida durante o Call, Borrowed Time ativa sozinho e o dano puro de Culling Blade vira cura em vez de matar.
- itens que viram: Aghanim's Shard de Axe aplica múltiplas instâncias de Battle Hunger no mesmo alvo (fonte: aghs_desc), o que soma com o Withering Mist pra cortar ainda mais a cura do Abaddon; Black King Bar no Axe (25,9 min, 1.037 partidas) tira o Curse of Avernus da equação durante o combo.
- como jogar: não force a troca corpo a corpo sem saber se o Call está disponível (nível 6+, cd 12-18s). Se ele chamar, jogue Aphotic Shield nele mesmo: reduz o burst e ainda ajuda a sobreviver até o Borrowed Time poder entrar.
- fonte: pro_dados/abaddon.json; pro_dados/axe.json; constants_abilities.json; aghs_desc.

## Contra Mars (mars)
- placar: 79/159 (49,7%) a favor do Abaddon (fonte: pro_dados/abaddon.json).
- por que importa: segunda posição principal mais comum na lista (offlane, pos 3) depois do Axe, com mais amostra que Centaur ou Batrider, e o único confronto de offlane-vs-offlane perto de 50/50.
- janelas: cedo, Spear of Mars (impala se acertar numa parede) é o maior risco de morte do Abaddon na lane; sem parede, o dano é menor. A partir do nível 6, Arena of Blood (cd 100-90s) prende os dois dentro de uma arena por 5,5s, onde God's Rebuke (crítico de 150-300%) pune quem tenta sair. Os dois chegam no Blink Dagger quase no mesmo minuto (Mars 15,2 min em 2.136 partidas, Axe-like de offlane), então a troca normalmente decide quem abre a Arena primeiro.
- o que ele faz com você: dentro da Arena, God's Rebuke empurra o Abaddon contra a parede pra receber dano extra, e se o kill acontecer dentro da arena com Aghanim's Scepter, o time dele recupera 35% de vida e mana, um reset gigante caso o Abaddon morra ali (fonte: aghs_desc).
- o que você faz com ele: Aphotic Shield antes da Arena fechar reduz o dano que o Abaddon toma lá dentro; Curse of Avernus desacelera o Mars o suficiente pra ele não conseguir reposicionar pra outro ângulo de Spear.
- itens que viram: Aghanim's Shard de Mars faz o Spear impalar até 2 heróis e deixa rastro de fogo (fonte: aghs_desc), então segurar dois aliados perto da mesma linha vira risco; Blade Mail no Mars (comum em pro, não aparece no top 30 de ambos mas é padrão de offlane tanque) devolve dano se o Abaddon decidir trocar corpo a corpo.
- como jogar: não fique colado em parede quando ele tiver Spear disponível (cd 11-14s). Se for puxado pra dentro da Arena, gaste Aphotic Shield em si mesmo assim que entrar, antes do primeiro God's Rebuke.
- fonte: pro_dados/abaddon.json; pro_dados/mars.json; constants_abilities.json; aghs_desc.

## Contra Disruptor (disruptor)
- placar: 89/147 (60,5%) a favor do Abaddon (fonte: pro_dados/abaddon.json).
- por que importa: mesma posição principal (suporte 4/5), bastante volume (147 jogos) e uma das maiores vantagens da lista com amostra grande; é o confronto mais citado de "como travar o Borrowed Time".
- janelas: cedo os dois são suportes de ward/poke, sem ameaça de kill grande. A partir do nível 6, Static Storm (cd 100-70s, silencia 6s numa área de 550) é o divisor: ela mutila itens e trava a ativação manual de Borrowed Time, mas não impede o gatilho automático abaixo de 400 de vida (fonte: ficha/abaddon.md, seção "Interações e contras"). Disruptor fecha Blink aos 24,0 min (mediana, 1.128 partidas), bem depois do Abaddon já ter Phase Boots havia muito (6,5 min).
- o que ele faz com você: Static Storm silencia o time inteiro numa área, inclusive o Abaddon, então qualquer plano de ativar Borrowed Time precisa ser antes da Storm cair ou depender só do gatilho automático; Kinetic Field prende o Abaddon longe do aliado que ele quer proteger.
- o que você faz com ele: Aphotic Shield dispensa e absorve o Thunder Strike que Disruptor costuma abrir a luta; Curse of Avernus desacelera ele o bastante pra não reposicionar depois de usar as ativas.
- itens que viram: Aghanim's Scepter de Disruptor faz Static Storm silenciar itens (fonte: aghs_desc), o que não afeta diretamente o Borrowed Time (não é item) mas tira qualquer BKB/Lotus Orb de reação do Abaddon durante a janela; Glimmer Cape no Abaddon (situacional) dá resistência mágica contra o dano crescente da própria Static Storm.
- como jogar: se ele tiver Static Storm disponível (nível 6+), ative Borrowed Time manualmente antes dela cair em vez de esperar o gatilho automático, porque depois de silenciado só sobra o automático sob 400 de vida.
- fonte: pro_dados/abaddon.json; pro_dados/disruptor.json; constants_abilities.json; aghs_desc; content/fichas/abaddon.md.

## Contra Troll Warlord (troll_warlord)
- placar: 29/41 (70,7%) a favor do Abaddon (fonte: pro_dados/abaddon.json).
- por que importa: a maior vantagem da lista com 30+ jogos. Os dois quase nunca cruzam lane (Troll é carry pos 1/2), mas é um dos carries mais jogados em pro contra o Abaddon mesmo sem lane em comum, e mostra onde o kit dele falha contra sustain.
- janelas: Troll farma rápido e fecha Battle Fury cedo pro padrão de carry (mediana 13,4 min, 430 partidas), mas o pico de duelo dele é Battle Trance (cd 90-70s, 6,5s de ataque forçado com até 80% de lifesteal e +200 de velocidade de ataque). Ele fecha Black King Bar aos 24,7 min (271 partidas), bem depois do Abaddon já ter Aphotic Shield disponível dezenas de vezes ao longo da partida (cd 6-12s).
- o que ele faz com você: dentro de Battle Trance com BKB, o Troll ataca o alvo mais próximo sem parar e rouba vida alta, ignorando magic damage; é o tipo de dano físico sustentado contra um único alvo que o resto do kit do Abaddon segura bem, mas só com o escudo disponível.
- o que você faz com ele: Aphotic Shield no alvo da Battle Trance anula boa parte do lifesteal porque reduz o dano recebido antes de virar roubo de vida pro Troll; Withering Mist corta ainda mais essa cura se o Troll cair abaixo de 40% de vida no meio da luta.
- itens que viram: Aghanim's Shard do Troll dá chance de ataque adicional à distância mesmo fora de Battle Trance (fonte: aghs_desc, "Fervor"), o que soma dano constante contra escudo cedo; Heaven's Halberd no Abaddon (situacional) desarma o Troll bem no meio da Battle Trance, cortando o combo pela metade.
- como jogar: gaste Aphotic Shield no alvo que ele focar assim que a Battle Trance sair (nível 6+, cd 70-90s), não espere o lifesteal já ter acontecido. Fora da Trance, o Troll é frágil em troca direta.
- fonte: pro_dados/abaddon.json; pro_dados/troll_warlord.json; constants_abilities.json; aghs_desc; content/fichas/abaddon.md.

## Contra Terrorblade (terrorblade)
- placar: 57/86 (66,3%) a favor do Abaddon (fonte: pro_dados/abaddon.json).
- por que importa: segunda maior vantagem com amostra robusta (86 jogos) e um dos carries mais jogados em pro contra o Abaddon mesmo sem lane em comum, exatamente o tipo de confronto "dois perfis diferentes, sem lane, mas que decide jogo" que importa entender.
- janelas: Terrorblade farma muito rápido (lh10 66, o maior gpm da lista com 701) e fecha Manta Style aos 17,1 min (mediana, 850 partidas) e Aghanim's Shard aos 17,4 min (664 partidas), formando ilusões de qualidade cedo. O pico real dele é Metamorphosis (ultimate, dura 35-50s, cd 145-130s), que vira ataque à distância com bônus de dano; antes disso ele é surpreendentemente frágil corpo a corpo.
- o que ele faz com você: Sunder troca uma porcentagem da vida atual entre os dois, o que não é dano e por isso não é convertido em cura pelo Borrowed Time; é a única ferramenta do kit dele que ignora completamente a ultimate do Abaddon. Em Metamorphosis, o ataque à distância dele soma dano constante contra o Aphotic Shield até estourar.
- o que você faz com ele: Curse of Avernus desacelera o Terrorblade e as ilusões dele não sofrem o debuff junto (é por ataque do herói real), então focar o original ainda compensa; Withering Mist corta a regeneração dele se ele cair abaixo de 40% tentando fugir de Metamorphosis fora de hora.
- itens que viram: o Shard dele (Demon Zeal) custa vida própria pra dar velocidade e regen às ilusões (fonte: aghs_desc), o que o deixa mais vulnerável logo depois de usar; Lotus Orb no Abaddon devolve o Sunder pro próprio Terrorblade se ele tentar usar nele.
- como jogar: não ignore o Sunder esperando que o Borrowed Time resolva, ele não resolve. Jogue a troca fora da janela de Metamorphosis (cd 130-145s): sem ela, o Terrorblade perde a maior parte do dano.
- fonte: pro_dados/abaddon.json; pro_dados/terrorblade.json; constants_abilities.json; aghs_desc.

## Contra Legion Commander (legion_commander)
- placar: 25/38 (65,8%) a favor do Abaddon (fonte: pro_dados/abaddon.json).
- por que importa: terceira maior vantagem com amostra válida (38 jogos, igual ou maior que o piso de 30) e o melhor exemplo mecânico de "sua ultimate resolve a dela", mesmo os dois sendo offlane em muitos drafts.
- janelas: cedo, Overwhelming Odds e Moment of Courage (contra-ataque a cada 4-7 acertos, com até 85% de lifesteal) fazem dela uma boa trocadora corpo a corpo. A partir do nível 6, Duel (cd 60-50s) é o divisor absoluto: ela força 1x1 isolado por 4-5s, ninguém pode usar item, mas habilidades continuam liberadas.
- o que ele faz com você: dentro do Duel, cada ataque dela conta, e se ela vencer o 1x1 ganha bônus de dano permanente (10-30 a mais) pro resto da partida; com Aghanim's Scepter, vencer o Duel ainda ativa Press the Attack nela de graça (fonte: aghs_desc).
- o que você faz com ele: como item está bloqueado mas habilidade não, ativar Borrowed Time dentro do Duel transforma todo o dano dela em cura pro Abaddon, o que praticamente garante a vitória no 1x1 se o cooldown estiver disponível (nível 6+, cd 65-85s); fora do Duel, Curse of Avernus corta a troca sustentada dela.
- itens que viram: Black King Bar na Legion Commander (26,4 min, 243 partidas) não ajuda em nada contra Borrowed Time, porque a conversão de dano em cura não é um debuff que o BKB dispense; Blade Mail nela devolve dano físico se o Abaddon decidir atacar durante o Duel sem a ultimate pronta.
- como jogar: só aceite ou force o Duel com Borrowed Time disponível. Se ela chamar o Duel sem o cooldown do Abaddon pronto, recuse reposicionando antes do cast fechar, porque o alcance de Duel é curto (200).
- fonte: pro_dados/abaddon.json; pro_dados/legion_commander.json; constants_abilities.json; aghs_desc.

## Contra Wraith King (skeleton_king)
- placar: 11/34 (32,4%) a favor do Abaddon, ou seja, a maior desvantagem da lista com amostra válida (34 jogos) (fonte: pro_dados/abaddon.json).
- por que importa: pior matchup do Abaddon com 30+ jogos. Ele é carry pos 1 sem lane em comum na maioria dos drafts, mas aparece aqui porque mostra onde o kit de sustain do Abaddon esbarra num herói que também não morre fácil.
- janelas: WK farma de boa (lh10 56) e fecha Radiance/Blink por volta dos 16-20 min (mediana 16,3 e 20,7, respectivamente, 361 e 397 partidas). O pico real dele é nível 6: Reincarnation (cd 180-120s) faz ele voltar à vida uma vez por luta, o que neutraliza qualquer plano de kill do Abaddon que não seja definitivo.
- o que ele faz com você: Wraithfire Blast (stun, cd 14-8s) trava o Abaddon fora de posição pra Mortal Strike (crítico passivo, cd 6-4,5s) bater alto; Vampiric Spirit dá lifesteal fixo e ainda delonga a morte dele como Wraith por ~4,25s depois do golpe fatal, um "Borrowed Time" de pobre, mas as duas mortes não se somam: pela própria descrição da habilidade, WK não reencarna depois de morrer como Wraith, então esse adiamento e a Reincarnation são uma rede de segurança OU a outra, não as duas (fonte: constants_abilities.json, skeleton_king_vampiric_spirit).
- o que você faz com ele: Aphotic Shield no aliado focado anula o stun-into-crit; Withering Mist corta o lifesteal da Vampiric Spirit se ele cair abaixo de 40% de vida, reduzindo exatamente o sustain que faz esse confronto ser ruim pro Abaddon.
- itens que viram: Aghanim's Shard de WK faz Mortal Strike aplicar uma maldição que bate 75% do dano inicial de novo como pure damage 3s depois (fonte: aghs_desc), dano que o Aphotic Shield normal não bloqueia se já tiver estourado antes; Lotus Orb no Abaddon reflete o Wraithfire Blast de volta.
- como jogar: não gaste Aphotic Shield reativo depois do stun, gaste preventivo assim que ele fechar distância. Trate a primeira morte dele como falsa: guarde silence/disable pra depois da Reincarnation, não antes.
- fonte: pro_dados/abaddon.json; pro_dados/skeleton_king.json; constants_abilities.json; aghs_desc.

## Contra Keeper of the Light (keeper_of_the_light)
- placar: 18/47 (38,3%) a favor do Abaddon, segunda maior desvantagem da lista com amostra válida (47 jogos) (fonte: pro_dados/abaddon.json).
- por que importa: segundo pior matchup com 30+ jogos. KOTL é suporte/mid de longo alcance, então mesmo sem trocar soco a soco ele força o Abaddon a jogar reativo o jogo inteiro.
- janelas: cedo, Illuminate (canalizado até 3s, até 500 de dano em linha de 1550 de alcance) ameaça de longe sem o Abaddon conseguir revidar; Chakra Magic devolve mana pro time antes de cada rotação. Ele fecha itens de suporte cedo (Arcane/Travel Boots por volta dos 14-15 min) e não depende de farm pra ser relevante, diferente da maioria dos confrontos acima.
- o que ele faz com você: Illuminate em linha reta pune qualquer agrupamento perto do Abaddon antes mesmo de uma luta começar; Mana Leak (debuff de silêncio parcial) atrasa a resposta do Abaddon numa troca cedo.
- o que você faz com ele: Aphotic Shield absorve o Illuminate inteiro se lançado a tempo, porque é dano mágico instantâneo contra um barreira que dispensa debuff; Curse of Avernus pune qualquer tentativa dele de ficar perto pra confirmar o combo com o time.
- itens que viram: Aghanim's Scepter de KOTL não toca no Illuminate, ele melhora o Will-O-Wisp (já existente no kit): o olho fica alternando aceso/apagado e atrai os inimigos pelo brilho (fonte: aghs_desc), perigoso justamente porque agrupa o time do Abaddon antes de um nuke maior; Glimmer Cape no Abaddon ajuda a cruzar o alcance de 1550 do Illuminate sem ser visto.
- como jogar: não cruze linhas retas longas sem necessidade enquanto ele estiver vivo e com mana. Gaste Aphotic Shield no primeiro aliado que for pego pelo Illuminate, antes do resto da combinação chegar.
- fonte: pro_dados/abaddon.json; pro_dados/keeper_of_the_light.json; constants_abilities.json; aghs_desc.

## Contra Treant Protector (treant)
- placar: 15/39 (38,5%) a favor do Abaddon, terceira maior desvantagem da lista com amostra válida (39 jogos) (fonte: pro_dados/abaddon.json).
- por que importa: terceiro pior matchup com 30+ jogos e mesma posição principal (suporte 5), o que o torna o confronto de suporte-contra-suporte mais desfavorável desta lista.
- janelas: cedo os dois são suportes de ward sem kill power alto; Living Armor (cd 24-15s, cura e bloqueia dano) compete diretamente com o papel de sustain do Abaddon pelo mesmo recurso, manter o carry vivo. A partir do nível 6, Overgrowth (cd 110-90s, prende em área de 800 por 3-5s e impede blink) é o maior risco: se pegar o Abaddon sem Borrowed Time pronto, ele fica preso pra morrer.
- o que ele faz com você: Overgrowth cancela qualquer plano de blink/escape do Abaddon bem na hora que o time inimigo foca; Living Armor no carry dele neutraliza boa parte do dano que o Curse of Avernus tentaria aplicar em cima.
- o que você faz com ele: Aphotic Shield não dispensa o root de Overgrowth (é imobilização, não debuff comum removível), mas absorve o dano por segundo dela; fora disso, Curse of Avernus ainda desacelera o Treant o suficiente pra ele não acompanhar o time depois de engajar.
- itens que viram: Aghanim's Scepter de Treant aumenta o próprio Treant ao lançar Overgrowth (fonte: aghs_desc), dando 100% de força bônus, movimento fixo de 345 e um ataque que estilhaça em área (300 de raio, 60% do dano) por 16s; não é resistência mágica, é tanque bruto e dano em área, o que atrapalha pouco o Withering Mist já que o bônus não é defesa contra magia; Lotus Orb no Abaddon não resolve Overgrowth, porque não é uma ativa direcionada dispensável, é um efeito em área.
- como jogar: guarde o Borrowed Time pronto (cd 65-85s) sempre que o Treant estiver no mapa com a ultimate disponível, porque Overgrowth sem resposta é a forma mais comum de perder o Abaddon nesse confronto. Fora da janela de Overgrowth, o Treant tem pouco pra ameaçar sozinho.
- fonte: pro_dados/abaddon.json; pro_dados/treant.json; constants_abilities.json; aghs_desc.
