---
id: confrontos-warlock
heroi: Warlock
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/warlock.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shadow_demon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/phantom_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/drow_ranger.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/sand_king.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/bane.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/keeper_of_the_light.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/treant.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/warlock.md
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/confrontos/jakiro.md
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/confrontos/phantom_assassin.md
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/confrontos/bane.md
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/confrontos/keeper_of_the_light.md
- https://api.opendota.com/api/constants/aghs_desc
- WebSearch (dotafire, Dota 2 Wiki, dota2protracker)
---

## Contra Jakiro (jakiro)
- placar: 231 vitórias em 488 jogos de pro, 47,3% pra Warlock (fonte: pro_dados/warlock.json, confrontos)
- por que importa: é o confronto com mais jogos de pro contra Warlock (488). Os dois são pos 5 clássicos, zoneiam área e vivem de um ultimate de impacto, então é literalmente "golem contra área".
- janelas: até os 11 min não tem vantagem de farm clara (Warlock Arcane Boots 10,7 min contra Jakiro 11,7 min, pro_dados). A partir do nível 6 o risco muda de lado: Chaotic Offering (Rain of Chaos) não tem demora de cast, cai na hora com stun de 0,8s em raio 600 e um golem de até 3000 de vida, então pode interromper o cast de Macropyre do Jakiro do nada. Depois dos 20 min os dois buscam proteção pro time quase junto: você pega Glimmer Cape (20,5) e Solar Crest (22,2) perto do Glimmer Cape dele (22,8) e Force Staff (26,2).
- o que ele faz com você: Macropyre (até 200 de dano por segundo por 10s, fonte: constants_abilities.json) destrói o Golem rápido, porque ele não ganha resistência mágica extra e o dano contínuo acaba com a vida fixa dele em poucos segundos; Dual Breath no nível 4 reduz sua velocidade de ataque em 40%, cortando seu auto-attack enquanto você tenta manter distância pra castar Shadow Word e Fatal Bonds.
- o que você faz com ele: Fatal Bonds (alcance 1000, liga até 6 unidades por 18s) ligada no time dele faz parte do dano que o time dele causa em qualquer aliado ligado também bater nele, então ele sofre dano mesmo fora de foco direto; Shadow Word nele aplica até 45 de dano mágico por tick (total até 450 em 10s) enquanto cura um aliado seu ao mesmo tempo.
- itens que viram: Aeon Disk nele dissipa o stun de 0,8s do seu Golem assim que ele cai (a dissipação forte do item remove o efeito), então ele escapa de ficar travado perto do Macropyre; Glimmer Cape não ajuda nisso, porque o item só dá invisibilidade e uma barreira contra dano mágico, não remove disables. Do seu lado, seu próprio Glimmer Cape (20,5) e Solar Crest (22,2) protegem seu time do dano de área da Macropyre.
- como jogar: não jogue Fatal Bonds mais Golem em cima do time dele parado sem necessidade, porque a Macropyre limpa o Golem rápido; use Shadow Word pra desgastar ele de longe e force ele a gastar Dual Breath antes da luta de verdade.
- fonte: pro_dados/jakiro.json; pro_dados/warlock.json; constants_abilities.json (warlock_fatal_bonds, warlock_shadow_word, warlock_rain_of_chaos, jakiro_macropyre, jakiro_dual_breath); confrontos/jakiro.md (consistência de números)

## Contra Shadow Fiend (nevermore)
- placar: 181 vitórias em 386 jogos de pro, 46,9% pra Warlock (fonte: pro_dados/warlock.json, confrontos)
- por que importa: segundo confronto com mais jogos de pro (386) mesmo quase nunca pegando a mesma lane (Shadow Fiend é mid, Warlock é pos 5). Ele é um dos heróis mais pickados do jogo e aparece contra qualquer suporte que tente fazer pressão, inclusive sem contato de lane.
- janelas: até os 10 min Shadow Fiend já está à frente em curva (Power Treads 5,9 min, lh10 de 78 contra o seu lh10 de 9, pro_dados) e fecha Mask of Madness aos 10,2 min, podendo ganksar bot cedo. Do nível 6 em diante, Requiem of Souls (alcance de área 1000, cast delay de 1,67s antes de disparar) ameaça você mesmo fora de visão direta. O ponto de virada é o Black King Bar dele, mediana 25,2 min: antes disso, o stun de 0,8s do seu Golem cancela o Requiem se você reagir a tempo; depois, ele atravessa qualquer disable seu.
- o que ele faz com você: Requiem of Souls acerta em raio 1000 com redução de 20 a 30% de velocidade de movimento e até 15% de resistência mágica a menos, dano o bastante pra matar um suporte com pouca vida se você estiver sozinho e sem reação; Shadowraze (85 a 280 de dano, alcance curto de 200) pune qualquer roam seu perto do rio.
- o que você faz com ele: antes do BKB dele (25,2 min), o stun do Golem cancela o cast de 1,67s do Requiem se você reagir rápido; Fatal Bonds ligada no time dele faz o dano que ele leva voltar pros aliados perto, o que pune justamente o hábito dele de farmar junto do time.
- itens que viram: o Black King Bar dele (25,2 min) tira sua chance de interromper o Requiem com o stun do Golem; antes disso, qualquer disable seu cancela o cast. O Aghanim's Scepter dele faz o Requiem reduzir de recarga e voltar pro próprio Shadow Fiend, mas não aparece no top 30 de itens comprados dele nesse recorte, então trate como situacional de jogo bem longo.
- como jogar: pressione o farm dele antes dos 10 min, quando ele ainda não tem Mask of Madness nem BKB; depois dos 25 min, não force teamfight sozinho contra o BKB dele, seu Golem não derruba ele mais nessa janela.
- fonte: pro_dados/nevermore.json; pro_dados/warlock.json; constants_abilities.json (nevermore_requiem, nevermore_shadowraze1, warlock_rain_of_chaos, warlock_fatal_bonds); aghs_desc (shadow fiend scepter)

## Contra Tusk (tusk)
- placar: 129 vitórias em 297 jogos de pro, 43,4% pra Warlock (fonte: pro_dados/warlock.json, confrontos)
- por que importa: terceiro confronto com mais jogos de pro (297) e o pior placar do Warlock entre os seis mais jogados. Os dois disputam o mesmo papel de suporte que anda fora da lane caçando, então o duelo real é "quem gankeia quem primeiro".
- janelas: antes do Blink Dagger dele (mediana 19,0 min), Tusk depende de Ice Shards (alcance 1400) pra zonear de longe; nesse trecho Warlock já tem Arcane Boots (10,7) e Ring of Basilius (7,5) prontos, mas ainda sem proteção de verdade. Depois do blink, ele fecha em qualquer suporte sozinho; Warlock só responde bem a partir do Glimmer Cape (20,5) e Solar Crest (22,2), quase no mesmo minuto do blink dele, correndo por cima.
- o que ele faz com você: o combo Snowball (stun de 0,6 a 1,2s, dano até 260 mais bônus por aliado carregado) seguido de Walrus Punch (crítico até 300%) é burst instantâneo o bastante pra matar um suporte de vida baixa antes de qualquer resposta, principalmente depois do blink (19 min) quando ele inicia sem aviso.
- o que você faz com ele: Upheaval (slow crescente até 100%, dano por segundo numa área de até 650 de raio) prende o grupo inteiro que ele carrega dentro do Snowball, não só o Tusk; Fatal Bonds em cima do combo dele faz o dano que o time leva no gank também bater nele.
- itens que viram: Force Staff em você é a resposta mais rápida ao Blink Dagger dele (19 min), tira você do alcance do Snowball antes dele formar; o Aghanim's Shard dele (Drinking Buddies, puxa um aliado) significa que mesmo você fugindo, ele pode puxar alguém perto pra continuar o gank.
- como jogar: depois dos 19 min, nunca fique sozinho no fog perto de onde ele sumiu; segure Upheaval especificamente pra quando ele iniciar em grupo, não gaste em reação a um Ice Shards isolado.
- fonte: pro_dados/tusk.json; pro_dados/warlock.json; constants_abilities.json (tusk_snowball, tusk_walrus_punch, tusk_ice_shards, warlock_upheaval, warlock_fatal_bonds); aghs_desc (tusk shard)

## Contra Mars (mars)
- placar: 145 vitórias em 288 jogos de pro, 50,3% pra Warlock (fonte: pro_dados/warlock.json, confrontos)
- por que importa: quarto confronto com mais jogos de pro (288) e o placar mais equilibrado da lista. Mars trava área com Arena of Blood, Warlock trava alvo com Fatal Bonds, então quando se enfrentam nenhum dos dois tem vantagem clara de kit.
- janelas: Mars fica ativo cedo com Phase Boots (8,5 min) e Soul Ring (7,9 min), e o Blink Dagger dele (mediana 15,2 min) já destrava o combo Spear of Mars mais Arena of Blood bem antes do Warlock ter Glimmer Cape (20,5) ou Solar Crest (22,2) prontos. O Aghanim's Shard dele (mediana 21,5) chega quase junto da sua proteção, então dali em diante a luta fica mais equilibrada.
- o que ele faz com você: Spear of Mars (dano até 325, stun até 2,2s, empurra pra trás) te prende contra a Arena of Blood (raio 550, dura 5,5s) se você estiver perto da borda; dentro da arena, lanças cravam de fora pra dentro causando dano repetido enquanto você tenta sair.
- o que você faz com ele: Fatal Bonds ligada no time dele faz o dano que a própria Arena of Blood causa nos aliados dele, se alguém errar a posição, também bater nele; o Golem tanka bem o combo porque toma menos dano de feitiço e o Spear é dano físico, que o Golem resiste melhor com a armadura alta dele.
- itens que viram: o Aghanim's Shard dele (impala até 2 heróis e deixa rastro de fogo) aumenta o risco de ficar perto de aliados depois dos 21,5 min; do seu lado, Force Staff tira você antes do Spear alcançar (alcance até 1200 no nível 4), então ande sempre com ele pronto perto dele.
- como jogar: não tente sair da Arena of Blood pelo mesmo lado que entrou, a lança cobre a borda inteira; use Upheaval pra desacelerar ele quando ele sair da arena, já que o único escape rápido dele é o Blink.
- fonte: pro_dados/mars.json; pro_dados/warlock.json; constants_abilities.json (mars_spear, mars_arena_of_blood, warlock_fatal_bonds, warlock_rain_of_chaos); aghs_desc (mars shard)

## Contra Tiny (tiny)
- placar: 127 vitórias em 283 jogos de pro, 44,9% pra Warlock (fonte: pro_dados/warlock.json, confrontos)
- por que importa: quinto confronto com mais jogos de pro (283) mesmo sendo carry/mid contra pos 5 sem lane fixa em comum. Tiny é um dos combos de burst mais pickados do jogo, e Warlock é justamente o suporte frágil que o combo Toss mais Avalanche deleta de longe.
- janelas: o Blink Dagger de Tiny (mediana 15,9 min) destrava o combo Toss (joga uma unidade, dano até 360) mais Avalanche (raiz curta, dano até 360) à distância; antes disso ele depende só de Avalanche de perto. Warlock nesse ponto já tem Arcane Boots (10,7), mas só pega proteção de verdade em Glimmer Cape (20,5) e Solar Crest (22,2), quase 5 min depois do blink do Tiny, a janela mais perigosa do confronto.
- o que ele faz com você: o combo Toss mais Avalanche junta até 720 de dano mágico em menos de 2s, o bastante pra matar um suporte de vida baixa assim que ele tem blink (15,9 min); Grow no nível 6 ainda soma dano bônus no Toss, piorando o combo.
- o que você faz com ele: depois que ele gasta Toss e Avalanche (recargas de até 20s e 23s), Tiny fica sem disable nenhum por um tempo; é a janela pra Fatal Bonds e Golem, porque ele não tem ferramenta pra impedir o stun do Chaotic Offering nem pra fugir dele.
- itens que viram: o Aghanim's Shard dele aumenta o dano de qualquer unidade ou árvore jogada, piorando o combo depois que ele tiver o item; do seu lado, Glimmer Cape (invisibilidade) é a resposta mais direta, porque ele precisa de alvo visível pra mirar o Toss.
- como jogar: não ande sozinho perto de árvores depois dos 15 min, ele pode te usar de projétil; espere o combo dele gastar (Toss e Avalanche de recarga) antes de engajar de volta com Fatal Bonds e Golem.
- fonte: pro_dados/tiny.json; pro_dados/warlock.json; constants_abilities.json (tiny_toss, tiny_avalanche, tiny_grow, warlock_fatal_bonds, warlock_rain_of_chaos); aghs_desc (tiny shard)

## Contra Shadow Demon (shadow_demon)
- placar: 109 vitórias em 269 jogos de pro, 40,5% pra Warlock (fonte: pro_dados/warlock.json, confrontos)
- por que importa: sexto confronto com mais jogos de pro (269) e o pior placar do Warlock entre os confrontos mais jogados. Os dois são suportes de controle que disputam o mesmo papel de "virar a luta com um feitiço só", mas Shadow Demon tem mais ferramenta pra anular justamente o que o Warlock depende.
- janelas: os dois sobem Arcane Boots quase junto (Warlock 10,7 min, Shadow Demon 11,3 min, pro_dados), então a diferença não é de farm, é de nível e combo. A partir do nível 6, Disruption (banimento de 2,75s) pode travar o Golem recém-invocado ou o próprio Warlock bem no meio do cast, zerando a janela do ultimate.
- o que ele faz com você: Disruption (alcance 675, banimento 2,75s) te tira da luta no momento exato em que você tentaria lançar Fatal Bonds ou reagir ao combo do time dele; Demonic Purge junta slow com dispel, limpando qualquer buff defensivo seu (Glimmer Cape, Solar Crest) bem na hora que você mais precisa deles.
- o que você faz com ele: Fatal Bonds ligada no time dele faz o próprio combo de Shadow Poison (empilha até 5 vezes, dano crescente) bater nos aliados ligados também, dobrando o efeito contra o time dele; o Golem aguenta boa parte do dano mágico do Shadow Poison por causa do pool de vida alto (até 3000), não por resistência extra a feitiço, já que as constantes do patch não listam esse bônus pro Golem.
- itens que viram: o Aghanim's Scepter dele dá 2 cargas extras de Demonic Purge, então depois que ele tiver o item seu Glimmer Cape vira alvo de dispel duas vezes em vez de uma; Aeon Disk não ajuda contra o Disruption especificamente, porque esse banimento não é dissipável (constants_abilities.json marca a Disruption como "dispellable: No"), então nenhum item de dissipação te tira dele.
- como jogar: não lance Fatal Bonds de forma óbvia, ele vai guardar Disruption pra te interromper; ataque quando a Disruption dele estiver de recarga (20 a 26s), não assim que ele reaparecer no mapa.
- fonte: pro_dados/shadow_demon.json; pro_dados/warlock.json; constants_abilities.json (shadow_demon_disruption, shadow_demon_shadow_poison, warlock_fatal_bonds, warlock_rain_of_chaos); aghs_desc (shadow demon scepter)

## Contra Disruptor (disruptor)
- placar: 134 vitórias em 257 jogos de pro, 52,1% pra Warlock (fonte: pro_dados/warlock.json, confrontos)
- por que importa: mesma posição principal (pos 4/5) e um dos confrontos com mais jogos de pro entre suportes puros (257). Diferente do Shadow Demon, aqui o placar favorece o Warlock: mesmo com Static Storm te silenciando, o combo Fatal Bonds mais Golem dura mais do que o Disruptor consegue segurar.
- janelas: os dois constroem quase igual até Arcane Boots (Warlock 10,7, Disruptor 11,4). A partir do nível 6 o risco muda pro lado do Disruptor: Static Storm (raio 550, 6s, até 350 de dano total no nível 3, recarga de 100 a 70s) te silencia se você estiver perto, mas depois de usada fica de recarga longa, janela em que dá pra forçar a luta com Chaotic Offering sem medo de ser calado de novo.
- o que ele faz com você: Static Storm silencia qualquer um dentro da área (raio 550) por até 6s, cancelando Fatal Bonds ou Chaotic Offering se você estiver dentro quando ela cair; Glimpse (alcance até 1800 no nível 4) te puxa 4s no tempo de volta, desfazendo seu reposicionamento.
- o que você faz com ele: o Golem (até 3000 de vida) aguenta bem os pulsos da Static Storm porque o pool de vida dele é grande, não porque tenha resistência mágica extra, as constantes do patch não listam nenhum bônus de resistência a feitiço pro Golem; Fatal Bonds ligada no time dele faz o dano que ele próprio causa com Thunder Strike voltar pros aliados ligados também.
- itens que viram: o Aghanim's Scepter dele muta itens ativos (seu Glimmer Cape e Force Staff inclusive) durante a Static Storm, então use esses itens antes dele fechar em cima de você, não depois; seu Glimmer Cape também anula o alcance do Glimpse se ele tentar te puxar de volta.
- como jogar: espere a Static Storm dele cair de recarga (100 a 70s) antes de forçar luta de novo; não ande sozinho no alcance de 1800 do Glimpse depois que ele tiver o item que destrava esse alcance maior.
- fonte: pro_dados/disruptor.json; pro_dados/warlock.json; constants_abilities.json (disruptor_static_storm, disruptor_glimpse, warlock_fatal_bonds, warlock_rain_of_chaos); aghs_desc (disruptor scepter)

## Contra Ogre Magi (ogre_magi)
- placar: 121 vitórias em 244 jogos de pro, 49,6% pra Warlock (fonte: pro_dados/warlock.json, confrontos)
- por que importa: outro pos 5 clássico, um dos confrontos de suporte contra suporte com mais jogos de pro (244). O duelo é controle instantâneo contra controle de canal: Fireblast é stun rápido e repetível, Upheaval é canal lento que cresce.
- janelas: os dois sobem Arcane Boots quase junto (Warlock 10,7, Ogre Magi 11,2). A diferença aparece no nível 4, quando Fireblast ganha chance de multicast (repete o cast sem gastar outro), cada disparo com stun de 1,2s, o bastante pra travar você inteiro antes de terminar o canal de Upheaval.
- o que ele faz com você: Fireblast (stun de 1,2s, dano até 250 no nível 4, recarga de 11 a 8s) interrompe Upheaval assim que você começa a canalizar, e com multicast ele pode repetir o stun sem gastar outro cast; Bloodlust num carry aliado aumenta o dano físico que esse carry tira de você enquanto você está preso.
- o que você faz com ele: Fatal Bonds ligada no time dele faz o dano do combo Fireblast mais aliado voltar pro próprio Ogre Magi; o Golem segura melhor a stunlock do que você sozinho porque tem até 3000 de vida pra absorver os disparos, não por alguma resistência mágica especial.
- itens que viram: o Aghanim's Scepter dele troca Fireblast por Unrefined Fireblast (dano de 150 mais 1,5x a força dele, stun em alvo único à distância), que ameaça você mesmo de fora do alcance normal; do seu lado, Aeon Disk anula o primeiro stun da sequência e te dá tempo de terminar o cast.
- como jogar: não canalize Upheaval perto dele sem saber se o Fireblast está disponível; force a luta quando a recarga dele (11 a 8s) acabou de cair, não assim que ele aparecer de novo no mapa.
- fonte: pro_dados/ogre_magi.json; pro_dados/warlock.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_bloodlust, warlock_upheaval, warlock_fatal_bonds); aghs_desc (ogre magi scepter)

## Contra Phantom Assassin (phantom_assassin)
- placar: 23 vitórias em 34 jogos de pro, 67,6% pra Warlock, maior vantagem da lista (amostra de 34 jogos) (fonte: pro_dados/warlock.json, confrontos)
- por que importa: maior vantagem do Warlock entre os confrontos com 30 ou mais jogos de pro, e é o exemplo clássico de "dois heróis sem lane fixa em comum que decidem um pro outro": PA é carry puro que farma sozinho, Warlock é suporte, mas o kit de área dele é o pior pesadelo de uma assassina que depende de chegar perto sem ser vista.
- janelas: Warlock não depende de item pra ser perigoso aqui, o spike dele é por nível de ultimate (6, 11, 16) e por mana pra canalizar Upheaval; PA mesmo com Battle Fury e Black King Bar prontos ainda sofre, porque o problema dela não é vida ou dano, é posicionamento dentro da área dele.
- o que ele faz com você: se PA pegar você isolado sem Golem por perto, ela tem o Coup de Grace dela (até 400% de dano crítico no nível 3) pra resolver rápido, já que você tem pouca vida de suporte.
- o que você faz com ele: Upheaval é canalizado até 16s, desacelera progressivamente até 100% numa área de até 650 de raio, prendendo uma heroína corpo a corpo como ela antes dela chegar no alvo; Fatal Bonds liga até 6 inimigos de forma que 15 a 24% do dano causado num deles é sentido pelos outros, anulando o plano dela de focar um alvo só; com Aghanim's Scepter, Chaotic Offering chama 2 Golems de até 3000 de vida cada, com dano reduzido de feitiço e punho flamejante, que trocam bem corpo a corpo com ela.
- itens que viram: nenhum item anula sozinho o Upheaval porque é desaceleração de área, não debuff de alvo único; o jeito dela responder é matar os Golems primeiro ou evitar a área até o Upheaval cair de recarga (60 a 30s).
- como jogar: jogue Upheaval em área, não em alvo único, pra pegar ela se tentar iniciar em grupo; segure o combo completo (Fatal Bonds mais Golem) pra quando ela já tiver gastado Blur ou Phantom Strike, porque sozinha sem essas cargas ela não sai da área a tempo.
- fonte: pro_dados/phantom_assassin.json; pro_dados/warlock.json; constants_abilities.json (warlock_upheaval, warlock_fatal_bonds, warlock_rain_of_chaos, phantom_assassin_coup_de_grace); aghs_desc (warlock scepter); confrontos/phantom_assassin.md (consistência de números)

## Contra Drow Ranger (drow_ranger)
- placar: 26 vitórias em 41 jogos de pro, 63,4% pra Warlock, segunda maior vantagem da lista (amostra de 41 jogos) (fonte: pro_dados/warlock.json, confrontos)
- por que importa: segunda maior vantagem do Warlock entre os confrontos com 30 ou mais jogos de pro. Drow é carry à distância que depende de Marksmanship (não é crit, é chance de dano bônus ignorando armadura), habilidade que desliga sozinha quando um herói inimigo chega perto, e o kit do Warlock é construído em cima de manter o time agrupado, exatamente o que desliga essa habilidade.
- janelas: antes dos 14 min as curvas não se cruzam muito, Drow sobe Power Treads (6,6) e Dragon Lance (14,2). O ponto que importa é de nível, não de item: Marksmanship dá até 40% de chance (nível 3) de bônus de dano ignorando armadura, mas a habilidade é desativada por completo se tiver um herói inimigo a até 325 de distância (constants_abilities.json, drow_ranger_marksmanship), então toda vez que o Warlock chega perto do grupo dela com Fatal Bonds ativo, ela perde o bônus inteiro, não só uma fração dele.
- o que ele faz com você: Gust (Wave of Silence, silêncio de 3 a 6s, empurra até 450) pode te calar antes de lançar Fatal Bonds ou interromper o canal do Upheaval, te deixando exposto pro resto do combo dela.
- o que você faz com ele: Fatal Bonds ligada no time dela obriga ela a ficar perto do grupo pra ser útil, e isso desliga a Marksmanship dela por completo enquanto durar; o Golem tanka bem o dano físico dela e ainda obriga ela a ficar perto pra focar outro alvo, o que de novo mantém a Marksmanship desativada.
- itens que viram: o Aghanim's Scepter dela aplica stacks de Hypothermia nos Frost Arrows, aumentando o dano acumulado se ela te mantiver na mira várias vezes seguidas; seu Glimmer Cape some com o alvo bem na hora que ela for confirmar o Gust.
- como jogar: fique perto do seu time sempre que for engajar nela, isso já derruba a chance de crit dela sozinho; guarde Fatal Bonds pra quando o time dela estiver agrupado perto de você, não solte de longe sem necessidade.
- fonte: pro_dados/drow_ranger.json; pro_dados/warlock.json; constants_abilities.json (drow_ranger_marksmanship, drow_ranger_wave_of_silence, warlock_fatal_bonds, warlock_rain_of_chaos); aghs_desc (drow ranger scepter)

## Contra Sand King (sand_king)
- placar: 32 vitórias em 53 jogos de pro, 60,4% pra Warlock, terceira maior vantagem da lista (amostra de 53 jogos) (fonte: pro_dados/warlock.json, confrontos)
- por que importa: terceira maior vantagem do Warlock entre os confrontos com 30 ou mais jogos de pro. Sand King quer iniciar em grupo com Epicenter, e é justamente o cenário onde Fatal Bonds e Golem rendem mais, porque todo mundo já está junto.
- janelas: Sand King fecha Blink Dagger aos 11,7 min, bem antes do Warlock ter qualquer proteção, o trecho mais perigoso do confronto. A partir do Ultimate Scepter dele (mediana 20,5), Epicenter ganha ataques extras aleatórios na área, mas é quase o mesmo minuto do Glimmer Cape (20,5) e Solar Crest (22,2) do Warlock, então a corrida de proteção empata dali em diante.
- o que ele faz com você: Burrowstrike (stun até 1,8s, alcance até 775) te pega de surpresa saindo do chão; Epicenter (até 20 pulsos, até 80 de dano por pulso, slow de movimento até 50%) castiga qualquer grupo parado, incluindo o próprio time dele se não se espalharem.
- o que você faz com ele: Fatal Bonds ligada no time dele faz o próprio Epicenter bater nos aliados ligados de novo através do compartilhamento de dano, multiplicando o auto-dano que ele já causa no próprio grupo; o Golem aguenta bem os pulsos por causa do pool de vida alto (até 3000), não por resistência mágica especial, então sobra pro Sand King quando o time dele focar o Golem em vez de focar você.
- itens que viram: o Aghanim's Scepter dele (ataques extras aleatórios durante Epicenter) aumenta o dano de área depois dos 20,5 min, perigoso se seu time já estiver agrupado por causa do Fatal Bonds; do seu lado, Glimmer Cape protege um aliado isolado do pulso inicial enquanto o resto do time se espalha.
- como jogar: não agrupe demais perto dele depois que ele tiver Blink (11,7 min) e Epicenter disponível (nível 6); espalhe o time assim que ele começar a canalizar Epicenter, ficar perto do Golem sozinho não impede o slow de alcançar todo mundo.
- fonte: pro_dados/sand_king.json; pro_dados/warlock.json; constants_abilities.json (sandking_epicenter, sandking_burrowstrike, warlock_fatal_bonds, warlock_rain_of_chaos); aghs_desc (sand king scepter)

## Contra Bane (bane)
- placar: 20 vitórias em 64 jogos de pro, 31,2% pra Warlock, maior desvantagem da lista (amostra de 64 jogos) (fonte: pro_dados/warlock.json, confrontos)
- por que importa: maior desvantagem do Warlock entre os confrontos com 30 ou mais jogos de pro, e mesma posição (os dois aparecem quase só como pos 5). O duelo é literalmente lock contra lock, mas Bane tem a ferramenta certa pra cancelar justamente o canal que o Warlock depende.
- janelas: os dois sobem devagar e parecido; seu Glimmer Cape (20,5) e Force Staff (27,1) saem perto do Aether Lens dele (22,6 min). O momento que decide não é item, é nível 6: assim que o Warlock bate XP pro Chaotic Offering, qualquer Upheaval canalizado perto do Bane vira risco, porque Fiend's Grip travando você no meio do canal cancela a ameaça inteira de uma vez.
- o que ele faz com você: Fiend's Grip (canal até 5,75s, drena 5% da sua mana por segundo, dano até 150) travando você no meio do Upheaval cancela o efeito inteiro, já que você fica parado pra manter o canal; Enfeeble reduz seu dano físico em até 70% e seu alcance de conjuração em 30%, mas rende pouco porque você já não depende de ataque básico.
- o que você faz com ele: Upheaval é canalizado e cresce com o tempo, pode punir Bane se ele ficar parado perto demais tentando posicionar o Fiend's Grip; Fatal Bonds ligada nos aliados dele espalha o dano que o time dele leva, perigoso se o time do Bane estiver agrupado perto de você.
- itens que viram: nenhum item isolado decide esse confronto, é mais sobre quem cancela o canal do outro primeiro; Aeon Disk em você pode quebrar o Fiend's Grip, já que esse canal é dissipável por dissipação forte (constants_abilities.json), mas o gatilho do item é abaixo de 70% de vida, não de 50%, e o efeito real é zerar o dano recebido por 2,5s, não virar invulnerabilidade total.
- como jogar: fique de olho no nível 6 dele também, porque o Fiend's Grip só existe a partir daí; não comece Upheaval sem saber onde o Bane está, um Fiend's Grip no meio do canal zera sua ultimate inteira de graça.
- fonte: pro_dados/bane.json; pro_dados/warlock.json; constants_abilities.json (bane_fiends_grip, bane_enfeeble, warlock_upheaval, warlock_fatal_bonds); confrontos/bane.md (consistência de números)

## Contra Keeper of the Light (keeper_of_the_light)
- placar: 27 vitórias em 85 jogos de pro, 31,8% pra Warlock, segunda maior desvantagem da lista (amostra de 85 jogos) (fonte: pro_dados/warlock.json, confrontos)
- por que importa: segunda maior desvantagem do Warlock entre os confrontos com 30 ou mais jogos de pro. KotL é outro suporte de longo alcance, mas o alcance de Illuminate é tão maior que o de Fatal Bonds ou Shadow Word que ele nega a lane do Warlock antes mesmo dele chegar no nível 6.
- janelas: até os 10 min pouco dano direto rola; o Arcane Boots do Warlock sai aos 10,7 min. O combo de Chaotic Offering (2 Golems com Aghanim's) fica disponível desde o nível 6, mas a ameaça real do lado do Warlock só cresce com Glimmer Cape (20,5) e Solar Crest (22,2), bem depois do KotL já ter construído a vantagem de poke que ele tem com Illuminate desde cedo.
- o que ele faz com você: Illuminate (alcance 1550, dano até 500 no nível 4) alcança muito mais longe que qualquer feitiço seu, então ele nega sua lane com folga antes do nível 6; Chakra Magic sustenta a mana da guerra de poke que você, sem fonte de sustain rápida, perde.
- o que você faz com ele: Fatal Bonds espalha uma fração do dano recebido entre os alvos ligados, então se ele for amarrado com aliados mais tanques sofre menos dano líquido, mas se for amarrado sozinho com outro suporte frágil o combo mata os dois juntos; o Golem stuna e bate forte com Flaming Fists, e o pool de vida alto (até 3000) segura mais tempo contra o Illuminate do que um herói comum, mesmo sem resistência mágica especial.
- itens que viram: seu Aghanim's Scepter (2 Golems em vez de 1) muda seu impacto em teamfight de grupo, não no 1x1; seu Glimmer Cape e Solar Crest aumentam a sobrevivência do seu time contra o poke de Illuminate, então ele precisa de burst em alvo isolado pra compensar.
- como jogar: evite a guerra de poke antes do nível 6, você perde ela; agrupe seu time só depois de ter Glimmer Cape ou Solar Crest prontos, antes disso o Illuminate dele ainda castiga demais.
- fonte: pro_dados/keeper_of_the_light.json; pro_dados/warlock.json; constants_abilities.json (warlock_fatal_bonds, warlock_rain_of_chaos, keeper_of_the_light_illuminate, keeper_of_the_light_chakra_magic); aghs_desc (warlock scepter); confrontos/keeper_of_the_light.md (consistência de números)

## Contra Treant Protector (treant)
- placar: 41 vitórias em 114 jogos de pro, 36,0% pra Warlock, terceira maior desvantagem da lista (amostra de 114 jogos) (fonte: pro_dados/warlock.json, confrontos)
- por que importa: terceira maior desvantagem do Warlock entre os confrontos com 30 ou mais jogos de pro, e mesma posição exata (os dois aparecem quase só como pos 5). É o duelo "suporte tanque com silêncio em área" contra "suporte de controle com canal", e quem segura o canal do outro primeiro ganha.
- janelas: os dois sobem Arcane Boots parecido (Warlock 10,7 min, Treant 12,0 min) e chegam nas wards quase junto (19 a 21 min). A partir do nível 6, Overgrowth (silencia e prende em raio 800, dura de 3 a 5s) é a ameaça real, porque cobre área maior e dura mais do que qualquer coisa que o Warlock tem pra responder.
- o que ele faz com você: Overgrowth (raio 800, 3 a 5s, silencia e prende) te cala antes de lançar Fatal Bonds ou no meio do canal de Upheaval, e cobre área grande o bastante pra pegar seu time inteiro de uma vez; Leech Seed (cura aliado, dano no inimigo) sustenta a luta enquanto você tenta fazer dano de área.
- o que você faz com ele: Fatal Bonds ligada no time dele faz o dano que o time leva voltar pro Treant também, útil porque ele costuma ficar na frente tankando; o Golem segura bem o Leech Seed porque o dano dele é baixo por tick e ele tem até 3000 de vida, não por alguma resistência a feitiço extra, então sobrevive mais tempo que um herói pra absorver a troca.
- itens que viram: o Aghanim's Scepter dele reduz a recarga do Overgrowth pra 85s, o que significa silêncios mais frequentes contra o seu combo depois que ele tiver o item; do seu lado, Aeon Disk anula o silêncio do Overgrowth bem na hora que ele cai.
- como jogar: não agrupe o time perto de árvores (onde o Overgrowth tem alcance total) sem saber se a recarga dele (110 a 90s) já caiu; jogue Upheaval antes dele conseguir reagir, porque depois do silêncio dele você perde a janela inteira.
- fonte: pro_dados/treant.json; pro_dados/warlock.json; constants_abilities.json (treant_overgrowth, treant_leech_seed, warlock_fatal_bonds, warlock_rain_of_chaos); aghs_desc (treant protector scepter)
