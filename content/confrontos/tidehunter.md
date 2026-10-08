---
id: confrontos-tidehunter
heroi: Tidehunter
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tidehunter.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/axe.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/centaur.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/slardar.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/faceless_void.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/necrolyte.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lone_druid.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rattletrap.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/huskar.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
---

## Como essa lista foi montada
Tidehunter é offlane (pos 3) em 98,6% das partidas de pro no 7.40-7.41, 2.423 de 2.457 (partidas pro 7.40-7.41, OpenDota). Os 15 oponentes abaixo cobrem quatro critérios: os 6 com mais jogos de pro contra ele (Rubick, Shadow Fiend, Jakiro, Tiny, Tusk, Ember Spirit), os pos 3 mais comuns pra ele enfrentar em pro além desses (Mars, Axe, Centaur Warrunner, Slardar), dois dos matchups mais favoráveis com 30+ jogos (Faceless Void, Necrophos) e os mais desfavoráveis com 30+ jogos (Lone Druid, Clockwerk, Huskar). Faceless Void e Lone Druid não compartilham lane com Tide (são carries pos 1 que farmam sozinhos), mas entram porque são dois dos carries mais jogados em pro no período e porque o confronto de mobilidade e counter-iniciação entre eles decide luta mesmo sem história de lane, do jeito que o Alchemist e o Morphling se afetam sem nunca trocar hit na lane.

## Contra Rubick (rubick)
- placar: 174 vitórias em 366 jogos de pro, 47,5% (pro_dados/tidehunter.json)
- por que importa: é o oponente mais comum de Tide em pro (366 jogos), suporte 4/5 que fica perto de qualquer trilane e pode roubar justamente a ultimate que define o herói
- janelas: Rubick não tem power spike de item, ele vive de mana e nível. Sobe Arcane Boots cedo, mediana de 10,3 min, pra ficar perto da lane esperando chance de Spell Steal. A partir do nível 6 de Tide ele já ameaça roubo de Ravage o jogo inteiro
- o que ele faz com você: fica no alcance de Fade Bolt/Spell Steal esperando Tide castar Ravage, rouba o mesmo stun em 1250 de raio e devolve pro time de Tide depois
- o que você faz com ele: iniciar de ângulo que Rubick não está vendo, ou fechar o combo Blink + Ravage rápido o bastante pra matar ou afastar Rubick antes dele conseguir reagir dentro do alcance de Spell Steal
- itens que viram: Blink Dagger de Tide encurta a janela de reação do Rubick; Aghanim's Shard (Dead in the Water) trava Rubick se ele tentar se afastar depois de ver o cast
- como jogar: checar a posição do Rubick antes de qualquer iniciação marcada, e se ele já estiver plantado perto, esperar ele gastar mana em outra coisa ou perder linha de visão antes de castar Ravage
- fonte: pro_dados/tidehunter.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, tidehunter_ravage); items.json (blink)

## Contra Shadow Fiend (nevermore)
- placar: 141 vitórias em 311 jogos de pro, 45,3% (pro_dados/tidehunter.json)
- por que importa: segundo oponente mais comum em pro (311 jogos), core de dano mágico que aparece em praticamente qualquer draft contra um offlane tanque
- janelas: Shadow Fiend fica perigoso cedo com Power Treads (mediana 5,9 min) e Blade of Alacrity (12,7 min), e o spike real chega com Black King Bar (25,2 min) e Requiem of Souls no nível 6. Tide só fica ameaçador depois do próprio Blink, mediana 21,2 min
- o que ele faz com você: Shadowraze bate em área sem precisar de alvo travado, então chipa Tide antes da luta mesmo sem mira perfeita; Requiem (raio 1000) reduz 20 a 30% de velocidade de movimento e 5 a 15% de resistência mágica de quem está perto, dificultando fuga depois de um Ravage mal sucedido
- o que você faz com ele: Ravage trava Shadow Fiend por até 2,4s, tempo suficiente pro time focar ele antes do BKB ligar ou do Requiem sair
- itens que viram: BKB do Shadow Fiend neutraliza o stun do Ravage se já estiver ligado antes da iniciação; Aghanim's Scepter de Tide (Gush vira onda em linha) ajuda a pegar ele se tentar fugir recuando em linha reta
- como jogar: iniciar antes do Shadow Fiend conseguir ligar BKB é o objetivo, e nos primeiros minutos de rotação respeitar a zona onde ele pode Shadowraze
- fonte: pro_dados/tidehunter.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_requiem, nevermore_shadowraze1, tidehunter_ravage)

## Contra Jakiro (jakiro)
- placar: 159 vitórias em 309 jogos de pro, 51,5% (pro_dados/tidehunter.json)
- por que importa: terceiro oponente mais comum em pro (309 jogos), suporte de controle de área que acompanha quase toda trilane contra offlanes
- janelas: Jakiro sobe Arcane Boots cedo (mediana 11,7 min) pra spamar Dual Breath/Ice Path na lane, e o spike real dele é o Macropyre no nível 6, 10s de dano em área. Tide sobe Soul Ring (8,5 min) e Blink (21,2 min) numa curva parecida, mas sem a zona de negação que o Macropyre dá
- o que ele faz com você: Ice Path pode travar Tide antes dele chegar perto o bastante pro Ravage; Macropyre, se bem posicionado em cima do grupo logo após o Ravage, pune quem ficou preso no stun
- o que você faz com ele: Ravage estoura antes do Jakiro conseguir setar Ice Path ou Macropyre se Tide blinkar de um ângulo inesperado
- itens que viram: o Blink de Tide decide quem inicia primeiro; Force Staff do Jakiro (mediana 26,2 min) ajuda ele a se reposicionar ou tirar aliado do raio do Ravage
- como jogar: vigiar a posição do Jakiro antes de iniciar, e se ele já tiver setado um caminho de Ice Path, mudar o ângulo do Blink em vez de atravessar
- fonte: pro_dados/tidehunter.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_macropyre)

## Contra Tiny (tiny)
- placar: 137 vitórias em 283 jogos de pro, 48,4% (pro_dados/tidehunter.json)
- por que importa: quarto oponente mais comum em pro (283 jogos), outro iniciador físico disputando o mesmo papel de abrir a luta primeiro
- janelas: Tiny já ameaça desde o nível 6 com Toss + Avalanche sem item nenhum. O spike de item vem com Blink (mediana 15,9 min, mais cedo que o de Tide) e Echo Sabre (12,1 min) pro combo de burst. Tide só iguala a mobilidade dele no próprio Blink, aos 21,2 min
- o que ele faz com você: o combo Avalanche no chão seguido de Toss lança Tide pro ar e reaplica todo o dano da Avalanche no pouso. Os dois são dano mágico, então o bloqueio físico do Kraken Shell não ajuda nessa troca
- o que você faz com ele: Ravage pega Tiny junto do resto do time quando ele se agrupa pra combar; Anchor Smash reduz 25 a 40% do dano de ataque dele por 6s, suavizando o autoataque pesado do late game
- itens que viram: o Blink de Tiny sai antes do de Tide (15,9 contra 21,2 min), então em jogo corrido ele tende a iniciar primeiro; BKB de Tide neutraliza o combo Avalanche + Toss se comprado antes da luta
- como jogar: não ficar agrupado perto de creeps quando Tiny tem mana pra Avalanche, e tentar reagir ao Blink dele com o seu antes que ele consiga setar o combo completo
- fonte: pro_dados/tidehunter.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, tidehunter_kraken_shell, tidehunter_anchor_smash)

## Contra Tusk (tusk)
- placar: 123 vitórias em 267 jogos de pro, 46,1% (pro_dados/tidehunter.json)
- por que importa: quinto oponente mais comum em pro (267 jogos), suporte/offlane que também inicia com controle em área, função parecida com a de Tide
- janelas: Tusk já ameaça desde o nível 1 com Ice Shards pra cortar rota de fuga. O combo Snowball vira spike real assim que ele pega Blink, mediana 19,0 min, um pouco antes do Blink de Tide (21,2 min)
- o que ele faz com você: Ice Shards corta a retirada de Tide depois de um Ravage mal sucedido; Snowball pode empurrar um aliado de Tusk até Tide pra iniciar antes dele
- o que você faz com ele: Ravage trava Tusk se ele estiver perto pra setar o combo, interrompendo a sequência antes do Snowball sair
- itens que viram: o Blink de ambos decide a corrida de iniciação, já que Tusk chega primeiro na mediana; Aghanim's Shard de Tide (Dead in the Water) trava Tusk se ele fugir depois de uma iniciação errada
- como jogar: cuidado ao avançar perto de uma parede de gelo já formada, e tentar vencer o alcance de Snowball indo primeiro quando o Blink de Tide já estiver pronto
- fonte: pro_dados/tidehunter.json; pro_dados/tusk.json; constants_abilities.json (tusk_ice_shards, tusk_snowball)

## Contra Ember Spirit (ember_spirit)
- placar: 99 vitórias em 257 jogos de pro, 38,5% (pro_dados/tidehunter.json)
- por que importa: sexto oponente mais comum em pro (257 jogos) e um dos piores matchups de Tide com volume alto de amostra, core que farma rápido e se move pelo mapa com Fire Remnant
- janelas: Ember farma puxado desde cedo (558 gpm, 53 last hits aos 10 min na média geral dele). O spike chega com Aghanim's Shard (mediana 25,3 min, dá Remnant extra) e Ultimate Scepter (31,6 min). Tide só fica forte depois do próprio Blink (21,2 min), já mais devagar que o farm do Ember
- o que ele faz com você: Sleight of Fist é dano físico em área instantâneo que acerta Tide mesmo sob Kraken Shell, já que o bloqueio tira um valor fixo por ataque e não anula o burst inteiro; Searing Chains prende Tide no lugar antes de um gank
- o que você faz com ele: Ravage pega Ember se ele estiver perto de aliados pra combar Sleight of Fist; Gush reduz a velocidade dele o suficiente pra cortar a fuga via Fire Remnant se ele ainda não ativou o remnant
- itens que viram: o Aghanim's Shard do Ember repõe uma carga de Fire Remnant sempre que um herói inimigo morre perto dele, então em luta prolongada ele recupera mobilidade de fuga; Dead in the Water de Tide ajuda a grudar nele antes que escape pelo remnant
- como jogar: Tide não ganha troca 1x1 contra Ember já farmado, então o jogo aqui é fechar o Ravage em grupo cedo, antes do Scepter do Ember sair, evitando duelo individual
- fonte: pro_dados/tidehunter.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_sleight_of_fist, ember_spirit_fire_remnant, tidehunter_kraken_shell)

## Contra Mars (mars)
- placar: 138 vitórias em 252 jogos de pro, 54,8% (pro_dados/tidehunter.json)
- por que importa: o pos 3 mais jogado contra Tide em pro além dos top 6 por volume (252 jogos), rivalidade clássica entre dois iniciadores tanques na mesma posição e função
- janelas: Mars sobe Phase Boots (8,5 min) e Soul Ring (7,9 min) num ritmo parecido com o de Tide, e o spike dele é o Blink (mediana 15,2 min, mais cedo que o de Tide) seguido do Aghanim's Shard (21,5 min, Spear passa a empalar até 2 heróis e deixa um rastro de fogo que causa dano e slow). Tide só alcança o Blink aos 21,2 min
- o que ele faz com você: Arena of Blood prende Tide numa arena de 550 de raio por 5,5s, cortando fuga ou chegada de aliado; Spear empala o primeiro herói atingido e o empurra, podendo interromper o cast point de 0,3s do Ravage se acertado no momento certo
- o que você faz com ele: Ravage não respeita a barreira da Arena, o stun em área passa por cima dela, então Tide ainda consegue estourar o grupo preso lá dentro
- itens que viram: o Blink de Mars sai antes do de Tide (15,2 contra 21,2 min), então ele tende a iniciar primeiro em boa parte dos jogos; BKB em qualquer um dos dois decide quem resiste ao stun do outro
- como jogar: respeitar o alcance da Spear ao se aproximar, e usar a própria Arena do Mars a favor se o time dele ficar preso lá dentro, já que o Ravage limpa tudo igual
- fonte: pro_dados/tidehunter.json; pro_dados/mars.json; constants_abilities.json (mars_arena_of_blood, mars_spear, tidehunter_ravage)

## Contra Axe (axe)
- placar: 95 vitórias em 206 jogos de pro, 46,1% (pro_dados/tidehunter.json)
- por que importa: outro pos 3 clássico (206 jogos), engajador físico que compete pelo mesmo papel de "quem inicia primeiro"
- janelas: Axe sobe Blink (mediana 15,7 min) e Blade Mail (12,6 min) bem antes do Blink de Tide (21,2 min). O spike dele é esse Blink cedo combinado com Culling Blade de execução no nível 6
- o que ele faz com você: Berserker's Call força Tide a atacar Axe por até 3s, perdendo tempo de autoataque; Culling Blade causa dano puro, que ignora o bloqueio do Kraken Shell, e executa quem está com vida baixa
- o que você faz com ele: Anchor Smash reduz o dano de ataque de Axe em até 40% por 6s, cortando parte do retorno físico que ele gera em luta; Ravage pega Axe junto do time dele
- itens que viram: Blade Mail do Axe devolve dano físico, então trocar autoataque com ele sob o efeito é arriscado; BKB de Tide cancela o Call
- como jogar: não ficar trocando autoataque com Axe sob Blade Mail ativo, e como ele costuma Blinkar primeiro (15,7 contra 21,2 min), reagir rápido à Call em vez de tentar vencer a corrida de iniciação
- fonte: pro_dados/tidehunter.json; pro_dados/axe.json; constants_abilities.json (axe_berserkers_call, axe_culling_blade, tidehunter_anchor_smash)

## Contra Centaur Warrunner (centaur)
- placar: 103 vitórias em 221 jogos de pro, 46,6% (pro_dados/tidehunter.json)
- por que importa: mais um pos 3 tanque disputando o mesmo papel contra Tide (221 jogos), com iniciação em área parecida via Stampede
- janelas: Centaur sobe Vanguard (mediana 8,5 min) e Blink (19,6 min), um pouco antes do Blink de Tide (21,2 min). O spike real dele é o combo Hoof Stomp + Double Edge no nível 6, que já causa dano alto por escalar com força
- o que ele faz com você: Double Edge causa dano baseado em força de ambos os lados, então quanto mais tanque Centaur fica, mais ele próprio aumenta o dano desse golpe; Stampede dá velocidade e dano em carga pro time dele alcançar Tide antes do Ravage sair
- o que você faz com ele: Ravage trava Centaur e o time dele em 1250 de raio antes que o Stampede consiga sair; Anchor Smash reduz o retorno de dano físico dele em luta prolongada
- itens que viram: o Blink de Centaur sai um pouco antes (19,6 contra 21,2 min), apertando a corrida de iniciação; Aghanim's Shard de Centaur (mediana 29,1 min) faz Double Edge também desacelerar quem é atingido e dar força extra pro Centaur por um tempo, item tardio que muda o late game
- como jogar: cuidado ao ficar perto de Centaur com pouca vida por causa do Double Edge, e tentar vencer a corrida de Blink indo primeiro sempre que possível
- fonte: pro_dados/tidehunter.json; pro_dados/centaur.json; constants_abilities.json (centaur_double_edge, centaur_stampede, tidehunter_ravage)

## Contra Slardar (slardar)
- placar: 103 vitórias em 238 jogos de pro, 43,3% (pro_dados/tidehunter.json)
- por que importa: mais um pos 3 comum contra Tide em pro (238 jogos), com uma interação mecânica direta contra o bloqueio de dano do Kraken Shell
- janelas: Slardar sobe Power Treads (7,3 min) e Blink (mediana 13,3 min, bem antes do de Tide) e o spike dele é o Aghanim's Shard (17,2 min), que dá Corrosive Haze (Amplify Damage) em área
- o que ele faz com você: Amplify Damage reduz 10 a 20 de armadura e revela invisibilidade, então mesmo com o bloqueio fixo do Kraken Shell, o dano de ataque que passa fica proporcionalmente maior; Bash dá 35 a 200 de dano bônus garantido a cada 3 ataques, que também soma como instância separada de dano físico além do bloqueio
- o que você faz com ele: Ravage pega Slardar junto do grupo, e Anchor Smash reduz o dano de ataque dele, que é a principal fonte de pressão em luta
- itens que viram: o Aghanim's Shard do Slardar (Corrosive Haze em área) e o Blink dele, que sai quase 8 minutos antes do de Tide (13,3 contra 21,2 min), fazem ele capaz de iniciar sozinho bem mais cedo
- como jogar: não gastar o bloqueio do Kraken Shell contra poke cedo de Slardar, guardando pro burst de Bash somado ao Amplify Damage que costuma vir junto da iniciação dele
- fonte: pro_dados/tidehunter.json; pro_dados/slardar.json; constants_abilities.json (slardar_amplify_damage, slardar_bash, tidehunter_kraken_shell)

## Contra Faceless Void (faceless_void)
- placar: 30 vitórias em 47 jogos de pro, 63,8% (pro_dados/tidehunter.json)
- por que importa: não compartilha lane com Tide, é um carry pos 1 que farma sozinho, mas é um dos oponentes mais favoráveis pra Tide com amostra válida e um dos carries mais jogados em pro no período. O duelo de mobilidade e counter-iniciação entre os dois decide luta mesmo sem história de lane, do jeito que Alchemist e Morphling se afetam sem nunca trocar hit
- janelas: Void é devagar cedo e só ganha corpo com Maelstrom (mediana 16,3 min), virando ameaça real em luta com Mjollnir (21,8 min) ou builds alternativas de Battle Fury. Antes disso ele é farmador puro. Tide, já forte desde o Blink (21,2 min), costuma chegar no próprio spike antes do Void se tornar relevante em teamfight
- o que ele faz com você: Chronosphere congela tudo em 500 de raio por até 4,75s, podendo travar Tide no meio do cast de Ravage se pego despreparado, zerando a iniciação dele
- o que você faz com ele: se Tide inicia primeiro com Blink + Ravage, Void fica preso no stun de 1250 de raio antes de conseguir setar a própria Chronosphere
- itens que viram: Aghanim's Shard de Tide (Dead in the Water) atrapalha o reposicionamento via Time Walk de Void; BKB de Void, se comprado antes de entrar na luta, segura o stun do Ravage
- como jogar: o objetivo contra Void é nunca deixar ele juntar o time inteiro numa área fechada sem Tide ter iniciado primeiro, e represar o farm dele sempre que possível antes dele fechar os 6 slots
- fonte: pro_dados/tidehunter.json; pro_dados/faceless_void.json; constants_abilities.json (faceless_void_chronosphere, tidehunter_ravage, tidehunter_dead_in_the_water)

## Contra Necrophos (necrolyte)
- placar: 58 vitórias em 101 jogos de pro, 57,4% (pro_dados/tidehunter.json)
- por que importa: um dos matchups mais favoráveis pra Tide com amostra robusta (101 jogos), interessante porque o dano principal de Necrophos ignora o bloqueio físico de Tide e mesmo assim Tide ganha a maioria dos confrontos
- janelas: Necrophos sobe rápido com Radiance (mediana 13,7 min, item atípico pra um pos 2/3 mas comum nesse recorte de pro) e o spike real dele é o Reaper's Scythe no nível 6, que executa baseado em vida perdida. Tide chega no Blink (21,2 min) depois do Radiance de Necro, mas o pool de vida alto de Tide compensa a pressão da aura
- o que ele faz com você: Heartstopper Aura tira uma porcentagem da vida máxima por segundo em área, dano mágico que passa direto pelo Kraken Shell já que o bloqueio só cobre ataque físico; Reaper's Scythe é stun seguido de dano baseado na vida que falta, mais perigoso quando Tide já está ferido
- o que você faz com ele: o pool de vida alto de Tide (base de força) dilui o efeito percentual da aura, e Ravage trava Necrophos antes dele conseguir acertar o Reaper's Scythe em alguém crítico
- itens que viram: Aghanim's Shard de Necrophos (mediana 17,8 min) transforma o Death Pulse em Death Seeker, que avança até o alvo antes de espalhar; o Kraken Shell de Tide, mesmo não bloqueando a aura, ainda limpa debuffs físicos que vierem junto dela
- como jogar: não ficar parado dentro da aura em luta longa, e priorizar focar ou interromper Necrophos antes do Reaper's Scythe sair em alguém com pouca vida
- fonte: pro_dados/tidehunter.json; pro_dados/necrolyte.json; constants_abilities.json (necrolyte_heartstopper_aura, necrolyte_reapers_scythe, tidehunter_kraken_shell)

## Contra Lone Druid (lone_druid)
- placar: 12 vitórias em 51 jogos de pro, 23,5%, o pior matchup de Tide com amostra válida (pro_dados/tidehunter.json)
- por que importa: não compartilha lane com Tide, é carry pos 1 que farma sozinho, mas entra na lista por ser um dos piores números de Tide no recorte todo e um teste direto de poder entre duas unidades (Lone Druid + Spirit Bear) contra o pacote de iniciação de um herói só
- janelas: Lone Druid tem duas curvas de poder, a dele e a do Bear. O grande spike vem do pacote Maelstrom (12,1 min) seguido de Mjollnir (16,5 min) no Bear. True Form é a própria ultimate do herói, disponível desde o nível 6 sem precisar de Scepter, e no facet Unbearable transforma o Bear em vez do próprio Lone Druid; o Aghanim's Scepter (mediana 21,7 min) na verdade reforça o Entangle, que passa a empilhar nos heróis inimigos na área e ganha mais raio. Tide só iguala presença em luta no próprio Blink (21,2 min), quando o Bear já costuma estar equipado
- o que ele faz com você: True Form dá até 1500 de vida bônus e 130 de dano bônus pro Bear, que vira um segundo corpo tanque capaz de absorver o stun do Ravage sem morrer; Savage Roar ainda dá fear que atrapalha o reposicionamento de Tide
- o que você faz com ele: Ravage pega as duas unidades se estiverem próximas, mas como são duas vidas separadas o stun sozinho raramente abre o kill nesse matchup
- itens que viram: Aghanim's Scepter do Lone Druid (True Form no Bear) é o item que mais muda essa luta; BKB de Tide ajuda pouco aqui porque o problema não é controle, é volume de dano vindo de duas fontes ao mesmo tempo
- como jogar: focar o jogador real (Lone Druid) em qualquer troca, não o Bear, e evitar lutas isoladas contra as duas unidades sem o time completo de Tide por perto
- fonte: pro_dados/tidehunter.json; pro_dados/lone_druid.json; constants_abilities.json (lone_druid_true_form, lone_druid_spirit_bear, tidehunter_ravage)

## Contra Clockwerk (rattletrap)
- placar: 35 vitórias em 109 jogos de pro, 32,1% (pro_dados/tidehunter.json)
- por que importa: segundo pior matchup de Tide com volume relevante de amostra (109 jogos), suporte feito especificamente pra isolar e punir iniciadores físicos como Tide antes deles agirem
- janelas: Clockwerk já é ameaça desde o nível 1 com Hookshot pra puxar e Power Cogs pra prender, não depende de item pra isso. O spike dele é todo de nível, o combo Hookshot + Cogs + Battery Assault já funciona completo no 6. Tide só fica forte no próprio Blink (21,2 min), bem depois do Clockwerk já estar pronto pra isolar
- o que ele faz com você: Power Cogs prende Tide sozinho numa gaiola de madeira por até 8s, isolando ele do time antes de qualquer Ravage; Battery Assault dá dano em área e ministun repetido enquanto Tide tenta sair
- o que você faz com ele: Kraken Shell bloqueia parte do dano físico que vem junto da gaiola, e o Blubber inato de Tide ainda limpa debuffs se o dano acumulado passar do limiar
- itens que viram: o Blink de Clockwerk (mediana 24,8 min) ou mesmo só o Hookshot sem item já bastam pra isolar Tide; Dead in the Water de Tide não ajuda contra a gaiola em si, mas trava Clockwerk depois se ele tentar fugir de uma luta perdida
- como jogar: nunca iniciar isolado perto de Clockwerk sem visão confirmada dele, e tentar forçar ele a gastar Cogs ou Hookshot em outro alvo antes de avançar
- fonte: pro_dados/tidehunter.json; pro_dados/rattletrap.json; constants_abilities.json (rattletrap_power_cogs, rattletrap_battery_assault, tidehunter_kraken_shell)

## Contra Huskar (huskar)
- placar: 26 vitórias em 67 jogos de pro, 38,8% (pro_dados/tidehunter.json)
- por que importa: outro matchup desfavorável com amostra válida (67 jogos), relevante porque o dano principal dele ignora completamente o bloqueio físico de Tide
- janelas: Huskar sobe Armlet cedo (mediana 9,1 min) e já fica perigoso em autoataque puro desde então. O spike real chega com Sange and Yasha (20,0 min) ou BKB (23,2 min), quando Burning Spear somado ao Berserker's Blood (attack speed sobe conforme ele perde vida) viram DPS alto em cima de quem está com pouca vida
- o que ele faz com você: Burning Spear é dano mágico por ataque que empilha e ignora o bloqueio físico do Kraken Shell por completo; Life Break dá um dash que causa dano baseado em porcentagem da vida atual de quem é atingido, custando a Huskar a mesma porcentagem da própria vida, e ainda reduz a velocidade de movimento e de ataque do alvo
- o que você faz com ele: Anchor Smash reduz o dano de ataque dele na parte física do combo; Ravage trava Huskar antes dele conseguir empilhar Burning Spear numa troca prolongada
- itens que viram: Armlet acelera a curva de vida perdida de Huskar, que alimenta Berserker's Blood e Life Break, deixando ele mais perigoso justamente quando está "ferido"; BKB de Huskar neutraliza o Ravage se já estiver ligado antes
- como jogar: evitar troca de autoataque prolongada contra Huskar com Armlet ligado, e tentar fechar a luta rápido em grupo antes dele empilhar Burning Spear em vários hits
- fonte: pro_dados/tidehunter.json; pro_dados/huskar.json; constants_abilities.json (huskar_burning_spear, huskar_life_break, tidehunter_kraken_shell, tidehunter_anchor_smash)
