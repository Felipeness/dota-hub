---
id: confrontos-shredder
heroi: Timbersaw
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/shredder.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/mars.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/centaur.json
- dota-hub-conteudo-novo/pro_dados/pangolier.json
- dota-hub-conteudo-novo/pro_dados/axe.json
- dota-hub-conteudo-novo/pro_dados/earthshaker.json
- dota-hub-conteudo-novo/pro_dados/antimage.json
- dota-hub-conteudo-novo/pro_dados/legion_commander.json
- dota-hub-conteudo-novo/pro_dados/bane.json
- dota-hub-conteudo-novo/pro_dados/alchemist.json
- dota-hub-conteudo-novo/pro_dados/gyrocopter.json
- dota-hub-conteudo-novo/pro_dados/ursa.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Como os oponentes foram escolhidos
Timbersaw joga quase só de offlane (pos 3) em pro. A lista mistura: os 6 adversários com mais partidas pro na base de confrontos dele (Snapfire, Jakiro, Mars, Tiny, Hoodwink, Shadow Fiend); 3 rivais da mesma posição principal, offlane, com alto volume (Centaur Warrunner, Pangolier, Axe); os 2 maiores favoritismos com 30+ jogos (Earthshaker, Anti-Mage) e os 3 maiores desfavoritismos com 30+ jogos (Legion Commander, Bane, Alchemist); e mais 2 carries de farm rápido que quase nunca dividem lane com ele mas cujo power spike compete pelo mesmo jogo (Gyrocopter, Ursa). Anti-Mage e Alchemist também cumprem esse último critério: nenhum dos dois é offlaner, mas o ritmo de farm de cada um decide boa parte do confronto, do jeito que Alchemist x Morphling decide mesmo sem lane em comum.

## Contra Snapfire (snapfire)
- placar: Timbersaw venceu 133 de 256 partidas pro (52,0%). Maior volume de jogos de toda a base de confrontos dele.
- por que importa: é o oponente mais visto em pro contra o Timbersaw (256 jogos), quase sempre a suporte do carry que ele enfrenta, sem lane direta mas presença em toda a partida.
- janelas: até os 10 min ele limpa wave com Whirling Death e empurra enquanto ela ainda não tem Aghanim's Shard (mediana 16,9 min, pro_dados/snapfire.json) nem Mortimer Kisses maximizada; dos 10 aos 17 min ela só tem Scatterblast de poke, com Arcane Boots saindo aos 10,6 min, a janela mais segura pra ele iniciar lane ou gank perto. Depois dos 17 min, com Shard e Kisses prontos, ela passa a zonear área com dano mágico que não esbarra na Reactive Armor; o Blink dela sai aos 20,7 min e o dele aos 22,5 (pro_dados/shredder.json), quase juntos, e dali em diante quem inicia primeiro dita a troca.
- o que ele faz com você: Mortimer Kisses lança 8 globs de até 360 de dano mágico cada e deixa poça que queima e reduz velocidade por 3,5 s (constants_abilities.json, snapfire_mortimer_kisses); como o dano é mágico, a Reactive Armor não ajuda em nada. Scatterblast desacelera 100% o movimento e o ataque por 1 s e ainda causa dano antes do Timber Chain completar o cast.
- o que você faz com ele: Whirling Death é dano puro e ainda reduz o atributo primário dela por até 14 s, cortando a regeneração; Timber Chain fecha a distância antes dela carregar os 5,5 s de Mortimer Kisses; Chakram em cima da área nega o canal do combo dela.
- itens que viram: Black King Bar (591 dos 1465 jogos pro do Timbersaw, mediana 26,6 min) segura o Scatterblast e libera o combo sem interrupção; Shiva's Guard soma armadura física contra o resto do time dela.
- como jogar: force a troca antes dos 17 min, quando ela ainda não tem o combo completo; depois disso, gaste o Blink pra matar ela fora do alcance do Mortimer Kisses em vez de ficar parado recebendo o canal.
- fonte: pro_dados/shredder.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_mortimer_kisses, snapfire_scatterblast, shredder_whirling_death).

## Contra Jakiro (jakiro)
- placar: Timbersaw venceu 130 de 249 partidas pro (52,2%). Segundo maior volume de jogos da base.
- por que importa: segundo oponente mais visto em pro (249 jogos), suporte de dano em área que ameaça o farm de offlane sem precisar de lane direta com ele.
- janelas: Jakiro é o suporte mais lento de farm da lista (gpm 315, lh10 8, pro_dados/jakiro.json); até os 20 min ele só tem Dual Breath e Ice Path de poke, enquanto Timbersaw já fechou Soul Ring (7,6 min) e Kaya and Sange (18,1 min, pro_dados/shredder.json) puxando lane e camp sem medo. Macropyre (nível 6) só vira ameaça séria depois que ele tem mana pra sustentar o combo de 10 s de queima; Force Staff dele sai tarde, mediano aos 26,2 min, então antes disso ele não tem fuga própria contra gank.
- o que ele faz com você: Macropyre causa até 200 de dano/s por 10 s numa faixa de 500 de largura, e com Aghanim's Scepter vira dano puro com paredes de gelo que reduzem 60% de velocidade nas bordas (aghs_desc); Ice Path atordoa em área e trava posicionamento antes da queima.
- o que você faz com ele: Whirling Death e Chakram ignoram a armadura baixa dele; Timber Chain fecha nele antes do Ice Path formar, e sem Force Staff pronto (26,2 min) ele não tem como sair do alcance a tempo.
- itens que viram: Black King Bar segura o Macropyre e o Ice Path (nenhum pierce, constants_abilities.json); Blink seu fecha a distância antes do Force Staff dele salvar.
- como jogar: ataque ele isolado antes dos 15 min, quando ele ainda não tem Force Staff nem Glimmer Cape prontos; depois disso, não fique parado dentro de um Macropyre já formado, saia pela lateral.
- fonte: pro_dados/shredder.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre, jakiro_ice_path); aghs_desc (Jakiro, Macropyre).

## Contra Mars (mars)
- placar: Timbersaw venceu 134 de 245 partidas pro (54,7%). Terceiro maior volume e a maior vantagem entre os três rivais de mesma posição escolhidos.
- por que importa: mesma posição principal, offlane, com o maior volume de confrontos entre os três pos 3 da lista e vantagem clara pro Timbersaw apesar do kit tanque do Mars.
- janelas: os dois sobem Soul Ring cedo (Mars aos 7,9 min, Timbersaw aos 7,6 min, pro_dados/mars.json e pro_dados/shredder.json) e brigam por runa/camp parecido até os 10 min. Mars pega Blink mais cedo (15,2 min, um dos mais rápidos da lista) e pode iniciar com Spear antes do Timbersaw ter o próprio Blink (22,5 min), dando a ele vantagem de iniciação entre os 15 e os 22 min. Depois disso, com Kaya and Sange (18,1) e Blink prontos, Whirling Death e Chakram ignoram o Bulwark dele, e a troca vira do Timbersaw.
- o que ele faz com você: Spear empala no primeiro obstáculo no caminho (árvore, prédio, penhasco) e atordoa até 2,2 s; Arena of Blood prende os dois dentro de uma arena de 5,5 s levando dano de lança repetido.
- o que você faz com ele: Whirling Death e Chakram são dano puro, então o Bulwark dele (reduz até 70% de dano físico frontal e 35% lateral) não ajuda em nada contra eles; Timber Chain sai do raio de 550 da Arena of Blood se tiver árvore por perto.
- itens que viram: Black King Bar seu segura o stun da Spear; o dele (26,5 min) segura o seu combo também, então quem fecha o BKB primeiro consegue punir sem medo.
- como jogar: brigue antes dos 15 min, quando nenhum dos dois tem Blink; depois disso, espere o Bulwark dele estar desativado (ele precisa desligar pra atacar) antes de engajar.
- fonte: pro_dados/shredder.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_arena_of_blood, mars_bulwark).

## Contra Tiny (tiny)
- placar: Timbersaw venceu 121 de 236 partidas pro (51,3%). Quarto maior volume e o carry (pos 1) que mais aparece na base dele.
- por que importa: maior volume entre os carries puros da lista; farmer tão rápido quanto o Timbersaw, sem dividir lane com ele, no mesmo tipo de comparação de power spike pedida.
- janelas: Tiny tem lh10 de 44 e gpm 514 (pro_dados/tiny.json), bem perto do próprio Timbersaw (lh10 53, gpm 587); os dois correm em paralelo até os 15 min, cada um puxando o próprio lado do mapa. Grow nível 6 sai em mediana aos 7,9 min (partidas pro 7.40-7.41, OpenDota explorer) e já libera o primeiro combo de pick; Echo Sabre dele sai mediano aos 12,1 min. Timber Chain e Kaya and Sange do Timbersaw saem perto dos 18 min, dando a ele uma iniciação concorrente quase no mesmo tempo que o Blink/Shadow Blade do Tiny.
- o que ele faz com você: Toss agarra qualquer unidade num raio de 300 (incluindo você) e joga em cima de outro alvo causando dano de impacto; combinado com Avalanche (5 tiques, até 360 de dano total em área), o combo atordoa e esmaga em rajada curta, antes da Reactive Armor conseguir empilhar o suficiente.
- o que você faz com ele: Whirling Death reduz a força dele, cortando o dano bruto do combo Toss+Avalanche; Timber Chain sai do raio de 300 do agarrão antes que ele consiga te pegar.
- itens que viram: Black King Bar seu nega o stun do combo inteiro; Heaven's Halberd desarma o autoataque dele depois que o combo mágico passa.
- como jogar: não fique parado perto de árvore ou estrutura dentro do alcance de 300 do Toss; use Timber Chain pra abrir distância assim que ele aparecer sem o combo pronto (ambas as magias têm recarga, puna a janela vazia).
- fonte: pro_dados/shredder.json; pro_dados/tiny.json; constants_abilities.json (tiny_toss, tiny_avalanche, tiny_grow); partidas pro 7.40-7.41 (OpenDota explorer).

## Contra Hoodwink (hoodwink)
- placar: Timbersaw venceu 125 de 235 partidas pro (53,2%). Quinto maior volume de jogos da base.
- por que importa: suporte/mid flexível com alto volume de jogos cuja ferramenta principal (árvores) colide direto com a do Timbersaw.
- janelas: até ela ter Aghanim's Shard (mediana 23,8 min, pro_dados/hoodwink.json), o combo dela é só Acorn Shot de poke; dos 15 aos 24 min Sharpshooter já carrega até 1.350 de dano em até 3 s, então ela pune de longe mesmo sem blink. Depois dos 24 min, o Shard transforma o Hunter's Boomerang num retorno de área, ampliando o alcance do combo dela.
- o que ele faz com você: Sharpshooter causa dano pesado e ainda aplica Break, que desliga passivas; enquanto o debuff dura, a Reactive Armor para de acumular armadura e regen justamente na hora do burst (constants_abilities.json, hoodwink_sharpshooter). Bushwhack atordoa perto de árvore e puxa o alvo pra ela, cortando a visão.
- o que você faz com ele: Whirling Death destrói as árvores da área, reduzindo os pontos onde Bushwhack consegue atordoar; se ela estiver perto o bastante, Timber Chain fecha a distância antes dos 3 s de carga do Sharpshooter completarem.
- itens que viram: Black King Bar bloqueia o Break e o slow do Sharpshooter por completo (bkbpierce: no, constants_abilities.json), deixando a Reactive Armor empilhar normal; sem BKB, a resposta é fechar com Timber Chain antes da carga completar.
- como jogar: não fique parado no alcance de 3.000 do Sharpshooter sem BKB depois dos 15 min; limpe as árvores perto de você em lane pra tirar o gatilho do Bushwhack.
- fonte: pro_dados/shredder.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_sharpshooter, hoodwink_bushwhack, shredder_reactive_armor).

## Contra Shadow Fiend (nevermore)
- placar: Timbersaw venceu 116 de 231 partidas pro (50,2%). Sexto maior volume, praticamente equilibrado.
- por que importa: maior volume entre os mids da lista; outro farmer que raramente divide lane com o Timbersaw (ele é mid, Timbersaw offlane) mas cujo ritmo de last hit é o mais agressivo da base inteira.
- janelas: Shadow Fiend tem lh10 de 78 e gpm 658 (pro_dados/nevermore.json), os maiores números de farm cedo entre os oponentes escolhidos; Mask of Madness sai mediano aos 10,2 min pra empurrar e rotacionar cedo. Dos 13 aos 20 min ele soma Yasha (13,3) e Dragon Lance (14,0) a caminho de Manta ou Hurricane Pike, enquanto o Timbersaw ainda está fechando Kaya and Sange (18,1). Depois dos 24-25 min, o Black King Bar dele (25,2 min) chega quase junto do seu (26,6), e a partir daí vira corrida de quem fecha o combo primeiro.
- o que ele faz com você: Shadowraze bate na área em frente dele e empilha um amplificador de dano a cada acerto no mesmo alvo; Requiem of Souls causa dano mágico pesado em área e medo, escalando com até 20 almas capturadas por Necromastery, perigoso contra grupo.
- o que você faz com ele: Whirling Death e Chakram ignoram a armadura baixa dele; Whirling Death ainda reduz a agilidade dele, cortando dano de ataque; Timber Chain fecha nele antes da primeira rotação de gank se formar.
- itens que viram: Black King Bar segura Shadowraze e Requiem dos dois lados (nenhum pierce, constants_abilities.json); quem fecha o BKB primeiro consegue executar sem medo da resposta mágica do outro.
- como jogar: evite ficar no alcance de Shadowraze perto de árvores cedo; depois dos 20 min, não agrupe perto dele sem BKB, porque o Requiem pune time inteiro de uma vez.
- fonte: pro_dados/shredder.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem).

## Contra Centaur Warrunner (centaur)
- placar: Timbersaw venceu 89 de 151 partidas pro (58,9%). Maior vantagem entre os três rivais de mesma posição escolhidos.
- por que importa: mesma posição principal, offlane, com a maior vantagem entre os pos 3 da lista: um tanque de força que, no papel, deveria aguentar dano puro bem, mas na prática não aguenta.
- janelas: Centaur depende de Blink (mediano 19,6 min, pro_dados/centaur.json) e de vida alta via Vanguard e Ring of Health (8,5/12,8 min) pra sobreviver antes de poder iniciar; até lá, o Timbersaw com Kaya and Sange (18,1) e Blink chegando perto (22,5) consegue puxar lane e farm sem medo de Hoof Stomp de surpresa. Depois dos 19 min, quem iniciar primeiro decide: se for o Centaur com Hoof Stomp seguido de Double Edge, ele perde vida com o próprio golpe e ainda recebe dano puro que ignora a armadura dele.
- o que ele faz com você: Hoof Stomp atordoa em área por até 2,2 s e abre o combo; Stampede carrega o time dele por cima de você, atropelando e arrastando todo mundo perto.
- o que você faz com ele: Whirling Death e Chakram ignoram a força e a armadura dele; Double Edge dele causa dano baseado na própria força, então HP alto não livra ele do dano puro de volta, e ele ainda se machuca sozinho ao usar.
- itens que viram: Black King Bar seu segura o Hoof Stomp (nenhum pierce); Heaven's Halberd desarma o autoataque dele no corpo a corpo.
- como jogar: puna antes do Blink dele (19,6 min); depois disso, não troque golpe perto de árvore onde ele consiga setar Hoof Stomp seguido de Double Edge, prefira bater de longe com os feitiços.
- fonte: pro_dados/shredder.json; pro_dados/centaur.json; constants_abilities.json (centaur_hoof_stomp, centaur_double_edge).

## Contra Pangolier (pangolier)
- placar: Timbersaw venceu 84 de 160 partidas pro (52,5%).
- por que importa: mesma posição principal, offlane/mid híbrido, com alto volume de jogos; herói extremamente móvel que testa a falta de disable confiável do Timbersaw.
- janelas: Pangolier farma rápido (Diffusal Blade 12,4 min, Power Treads 12,2 min, Ultimate Scepter 24,9 min, pro_dados/pangolier.json) e já ameaça com Swashbuckle antes dos 10 min, sem nada do Timbersaw pra travar a mobilidade dele cedo. Dos 16 aos 20 min, quando ele costuma usar o Gyroshell, ele ganha 80% de resistência mágica por até 12 s, janela em que Whirling Death e Chakram perdem força; fora dessa bolha, o dano puro dele ainda passa limpo.
- o que ele faz com você: Swashbuckle atravessa Black King Bar (bkbpierce: yes, constants_abilities.json) e pode ativar Lucky Shot, reduzindo sua velocidade de ataque e armadura; Gyroshell dá 80% de resistência mágica, cortando quase todo o dano das suas três magias por até 12 s.
- o que você faz com ele: Whirling Death e Chakram continuam puros e ignoram a armadura dele fora da bolha de Gyroshell; Timber Chain acompanha a mobilidade dele pra alcançar antes do Swashbuckle voltar.
- itens que viram: Black King Bar não resolve o Swashbuckle (pierce confirmado), a resposta real é Timber Chain pra sair do alcance de dash (575 a 800) antes dele decidir a entrada.
- como jogar: não troque golpe parado durante a bolha dele; puna no intervalo entre Swashbuckle e Gyroshell, quando ele fica sem recurso de fuga.
- fonte: pro_dados/shredder.json; pro_dados/pangolier.json; constants_abilities.json (pangolier_swashbuckle, pangolier_gyroshell).

## Contra Axe (axe)
- placar: Timbersaw venceu 81 de 176 partidas pro (46,0%). Levemente desfavorável, duelo mais parelho do que a imagem de contra-pick costuma sugerir.
- por que importa: mesma posição, offlane; o alcance de Timber Chain (750 a 1200, constants_abilities.json) passa longe do alcance corpo a corpo do Axe (150) e do raio do Berserker's Call (315), mas o banco de pro mostra um duelo mais parelho do que esse alcance maior sugere.
- janelas: os dois sobem Soul Ring e Bracer cedo e entram parecidos até os 15 min; o Blink do Axe sai aos 15,7 min, um pouco antes do seu (22,5), dando a ele a primeira janela de Berserker's Call seguido de Culling Blade. Dos 15 aos 23 min ele costuma ter Blade Mail ativo (12,6 min de mediana geral da compra), então bater nele sem cuidado devolve dano; depois do seu Kaya and Sange (18,1) e do BKB dele (25,9), vira corrida de quem acerta o combo primeiro.
- o que ele faz com você: Berserker's Call força você a atacar só ele, mas não bloqueia magia, então dá pra Timber Chain pra fora do raio de 315 assim que ele perder o alvo; Culling Blade é dano puro e atravessa Black King Bar (bkbpierce: yes), ficando mais perigoso com você abaixo de 475/375/275 de vida; Counter Helix também é dano puro em área a cada 4 a 7 ataques recebidos.
- o que você faz com ele: Whirling Death e Chakram ignoram a armadura dele, e o Blade Mail não reflete o dano de área deles do jeito que reflete autoataque; Timber Chain sai do raio do Call assim que ele perde o alvo, porque Call não impede cast.
- itens que viram: Black King Bar não resolve o Culling Blade nem o Counter Helix (os dois atravessam), a defesa real é manter a vida acima do threshold de execução e não autoatacar um Blade Mail ligado.
- como jogar: não autoatque ele com Blade Mail ativo; gaste o combo de longe e cuide da vida abaixo de 475 (nível 6+), porque aí o Culling Blade vira execução garantida.
- fonte: pro_dados/shredder.json; pro_dados/axe.json; constants_abilities.json (axe_berserkers_call, axe_culling_blade, axe_counter_helix).

## Contra Earthshaker (earthshaker)
- placar: Timbersaw venceu 35 de 53 partidas pro (66,0%). Maior vantagem da lista.
- por que importa: maior percentual de vitória do Timbersaw entre os adversários com 30 ou mais jogos.
- janelas: Earthshaker sobe Blink cedo (12,2 min, pro_dados/earthshaker.json), antes do Timbersaw, e pode tentar iniciar primeiro; mas o combo dele (Fissure seguido de Echo Slam) é todo mágico, então a Reactive Armor não ajuda a se defender, só não lutar agrupado ajuda. Dos 18 aos 20 min, com Kaya and Sange e Blink prontos, o Timbersaw alcança ele antes que consiga posicionar um Echo Slam em vários heróis de uma vez.
- o que ele faz com você: Fissure atordoa em linha e bloqueia caminho por até 8 s; Echo Slam causa dano por herói próximo atingido, e cada herói real gera 2 ecos, então o combo só compensa contra grupo.
- o que você faz com ele: Whirling Death e Chakram passam limpo pela armadura baixa dele; Timber Chain foge da linha da Fissure se tiver árvore por perto; em 1x1, sem aliados pro Echo Slam ecoar, ele não tem resposta pro seu dano sustentado.
- itens que viram: Black King Bar seu segura Fissure e Echo Slam (nenhum pierce); contra ele, o combo é quase todo mágico, então BKB sozinho já resolve a maior parte da ameaça.
- como jogar: isole ele 1x1 sempre que possível, já que o Echo Slam sem outros heróis perto vale muito menos; evite lutas em grupo cedo, onde o combo dele rende mais.
- fonte: pro_dados/shredder.json; pro_dados/earthshaker.json; constants_abilities.json (earthshaker_echo_slam, earthshaker_fissure).

## Contra Anti-Mage (antimage)
- placar: Timbersaw venceu 25 de 41 partidas pro (61,0%). Segunda maior vantagem da lista.
- por que importa: é o tipo de comparação pedida direto, dois farmers que raramente trocam golpe (Anti-Mage é pos 1, Timbersaw pos 3) mas cujo ritmo de item decide boa parte do jogo.
- janelas: Anti-Mage tem o salto de farm mais forte da lista: a Battle Fury sai em mediana aos 14,1 min (pro_dados/antimage.json, item bfury). O ritmo de last hit dele sobe de cerca de 6 pra 14 por minuto depois da Battle Fury (partidas pro 7.40-7.41, OpenDota explorer). Até ali, Timbersaw já tem Soul Ring (7,6) e Kaya (13,0), puxando o próprio lado do mapa no mesmo ritmo. Dos 14 aos 20 min o Anti-Mage puxa à frente em patrimônio, mas só fecha Blink nível 4 perto dos 11 min e Manta aos 20,9 min, então antes disso ele não tem fuga pronta contra gank. Depois dos 20 min, o Blink do Timbersaw (22,5) e o BKB dele (26,6) chegam perto do Mana Void nível 3 do Anti-Mage, e quem fecha o combo primeiro decide a luta.
- o que ele faz com você: Mana Void causa 1 de dano por ponto de mana que falta no alvo principal, em área; como Timbersaw gasta mana toda hora com os três feitiços, ele costuma estar com a reserva baixa e vira alvo perfeito; Mana Break queima mana a cada ataque e ainda causa dano proporcional ao que foi queimado.
- o que você faz com ele: Whirling Death reduz a agilidade dele, cortando dano e velocidade de ataque; Timber Chain fecha nele antes do Blink dele resetar (recarga de 6 s no nível 4); seus três feitiços de dano puro não dependem de acerto físico, então a esquiva que o build dele não tem de qualquer forma não muda nada.
- itens que viram: manter a mana cheia antes de entrar em luta reduz o dano do Mana Void contra você; Black King Bar segura o stun final do Mana Void dos dois lados, mas não impede a queima de mana em si.
- como jogar: não entre em luta com mana baixa perto de um Anti-Mage de nível alto; gank ele antes do Battle Fury (14 min), quando ainda está fraco em luta de verdade.
- fonte: pro_dados/shredder.json; pro_dados/antimage.json; constants_abilities.json (antimage_mana_void, antimage_mana_break); partidas pro 7.40-7.41 (OpenDota explorer).

## Contra Legion Commander (legion_commander)
- placar: Timbersaw venceu 12 de 38 partidas pro (31,6%). Maior desvantagem da lista.
- por que importa: contra-pick clássico com mecânica confirmada nas constantes oficiais: Duel atravessa Black King Bar.
- janelas: os dois sobem Blink parecido (dela 15,3 min, pro_dados/legion_commander.json, contra 22,5 do Timbersaw), então ela costuma chegar na fase de iniciação primeiro. A partir do nível 6, o relógio muda de vez: ela só precisa pegar o Timbersaw sozinho pra decidir o 1x1, sem depender do resto do combo do time dela.
- o que ele faz com você: Duel força os dois a só se atacarem por 4 a 5 s, nenhum pode usar item e o alvo não pode lançar magia, então Whirling Death, Chakram e Timber Chain ficam todos bloqueados; o Duel atravessa Black King Bar (bkbpierce: yes, constants_abilities.json), então nem BKB tira o Timbersaw de dentro. Moment of Courage ainda dá contra-ataque com 55% a 85% de roubo de vida a cada 4 a 7 ataques recebidos, sustentando ela durante o Duel.
- o que você faz com ele: fora do Duel, Whirling Death e Chakram ignoram a armadura dela; a defesa real contra o Duel em si é matar ela antes que consiga fechar (ela tem vida baixa cedo) ou nunca ficar sozinho no mapa depois do nível 6 dela.
- itens que viram: nenhum item de imunidade a feitiço salva do Duel em si (pierce confirmado); Force Staff ou Eul's de um aliado também não tiram o Timbersaw do Duel, porque ele força o movimento dos dois. A resposta de time é focar ela primeiro ou nunca deixar o Timbersaw andando sozinho quando ela tem Duel disponível.
- como jogar: não dê visão de você sozinho depois do nível 6 dela; se for pego em Duel, continue atacando de volta, porque o Duel é vencido por quem mata o outro primeiro ou sobra com mais vida ao fim, fugir não funciona.
- fonte: pro_dados/shredder.json; pro_dados/legion_commander.json; constants_abilities.json (legion_commander_duel, legion_commander_moment_of_courage).

## Contra Bane (bane)
- placar: Timbersaw venceu 21 de 64 partidas pro (32,8%). Segunda maior desvantagem da lista.
- por que importa: disabler clássico cuja ameaça real, Fiend's Grip, também atravessa Black King Bar.
- janelas: Bane é o suporte mais lento de farm da lista (gpm 290, pro_dados/bane.json), então raramente ameaça o ritmo de item do Timbersaw antes do nível 6; a partir daí, o combo Nightmare seguido de Fiend's Grip não depende de farm, só de mana e posicionamento. Staff of Wizardry dele sai tarde (31,9 min de mediana), ou seja, ele não tem blink nem mobilidade própria cedo, o que facilita evitar ele em lane aberta.
- o que ele faz com você: Nightmare bota o alvo pra dormir e passa pro próximo que atacar; se ele mesmo atacar o alvo dormindo, ninguém mais acorda, abrindo caminho pro Fiend's Grip livre. Fiend's Grip é canalizado, dano puro e atravessa Black King Bar (bkbpierce: yes, constants_abilities.json), então BKB não impede o canal nem o roubo de mana.
- o que você faz com ele: Whirling Death e Chakram ignoram a armadura baixa dele; interromper o canal do Fiend's Grip (stun, silence de time ou matar o Bane) é a única forma de cortar o combo, já que BKB não resolve.
- itens que viram: Force Staff ou Glimmer Cape de um aliado tiram o Timbersaw do alcance de 625 do Fiend's Grip antes do cast terminar; BKB atravessa o Nightmare dele (que não tem pierce) se já estiver dormindo, mas não resolve o Grip.
- como jogar: jogue perto de aliados que consigam interromper canal; não fique isolado na visão dele depois do nível 6, porque o Nightmare sozinho já abre a brecha pro resto do combo.
- fonte: pro_dados/shredder.json; pro_dados/bane.json; constants_abilities.json (bane_nightmare, bane_fiends_grip).

## Contra Alchemist (alchemist)
- placar: Timbersaw venceu 23 de 61 partidas pro (37,7%). Terceira maior desvantagem da lista.
- por que importa: é o exemplo mais direto do tipo de comparação pedida, como Alchemist contra Morphling: Alchemist é pos 1, Timbersaw pos 3, quase nunca na mesma lane, mas os dois são hiper-farmers e quem estoura o item primeiro dita o jogo.
- janelas: Alchemist tem o farm mais rápido de toda a base de 127 heróis levantada (gpm 768, lh10 63, pro_dados/alchemist.json); Radiance sai mediano aos 13,9 min (pro_dados/alchemist.json), bem antes do Blink e do Kaya and Sange do Timbersaw fecharem. Dos 14 aos 20 min o Alchemist já limpa 2 camps por vez com Radiance e Chemical Rage, puxando patrimônio muito à frente; nesse intervalo o Timbersaw só tem Soul Ring e Kaya, sem resposta de farm equivalente. A única janela real dele é antes dos 14 min, enquanto o Alchemist ainda só tem Soul Ring e Phase Boots.
- o que ele faz com você: Chemical Rage dá velocidade de ataque e 120 de regen por segundo por 30 s, sustain que sozinho já aguenta a Reactive Armor numa troca prolongada; Unstable Concoction carrega até 5 s e atordoa até 3,2 s a 775 de alcance, abrindo a troca à distância.
- o que você faz com ele: Whirling Death reduz a força dele, que é a base de boa parte do dano e da vida do Alchemist; Timber Chain fecha a distância antes do Unstable Concoction terminar de carregar.
- itens que viram: Black King Bar segura o stun do Unstable Concoction (nenhum pierce); mas o problema real não é a luta, é o farm, então Smoke ou gank antes dos 14 min vale mais do que qualquer item depois.
- como jogar: pressione o Alchemist antes do Radiance (14 min); depois disso, evite luta de atrito prolongada, porque o Chemical Rage sustenta ele, e busque pick rápido com Timber Chain mais Chakram.
- fonte: pro_dados/shredder.json; pro_dados/alchemist.json; constants_abilities.json (alchemist_chemical_rage, alchemist_unstable_concoction).

## Contra Gyrocopter (gyrocopter)
- placar: Timbersaw venceu 108 de 216 partidas pro (50,0%). Oitavo maior volume geral.
- por que importa: outro carry de farm rápido que raramente divide lane com o Timbersaw e ameaça de longe com magia em vez de corpo a corpo, um perfil diferente da maioria dos offlaners físicos da lista.
- janelas: os dois sobem item de atributo parecido até os 13 min; Gyrocopter fecha Ultimate Scepter mediano aos 18,5 min (pro_dados/gyrocopter.json, 65% dos pros) e passa a ter Side Gunner, quase no mesmo tempo que o Timbersaw fecha Kaya and Sange (18,1). Depois dos 18 min, o Call Down dele ameaça de longe sem exposição.
- o que ele faz com você: Call Down causa até 500 de dano mágico por míssil em área, sem precisar chegar perto; Homing Missile atordoa e ainda dá 400% de bônus de velocidade de ataque pro autoataque seguinte dele.
- o que você faz com ele: Whirling Death e Chakram ignoram a armadura dele; e o Flak Cannon dele na verdade ajuda o Timbersaw, porque cada disparo conta como um ataque de herói completo contra ele, e cada ataque de herói vale 4 stacks de Reactive Armor (constants_abilities.json, shredder_reactive_armor), então o Flak Cannon alimenta a armadura dele em vez de puni-lo no longo prazo.
- itens que viram: Black King Bar segura o Call Down e o Homing Missile (nenhum pierce); Shiva's Guard reduz ainda mais a velocidade de ataque dele num lineup físico.
- como jogar: não fique parado tomando Call Down à toa, mas num corpo a corpo prolongado com Flak Cannon ligado, fique, porque cada disparo dele te deixa mais tanque, não menos.
- fonte: pro_dados/shredder.json; pro_dados/gyrocopter.json; constants_abilities.json (gyrocopter_call_down, gyrocopter_flak_cannon, shredder_reactive_armor).

## Contra Ursa (ursa)
- placar: Timbersaw venceu 75 de 184 partidas pro (40,8%). Décimo segundo maior volume entre os adversários da lista.
- por que importa: maior volume entre os adversários desfavoráveis da lista; o burst de Fury Swipes e Overpower (constants_abilities.json) mata antes da Reactive Armor compensar.
- janelas: Ursa é o carry de burst mais rápido da lista pra uma troca isolada: Fury Swipes soma dano a cada ataque seguido no mesmo alvo (some se ele não bater em você por 8 a 20 s) e Overpower dá até 400% de velocidade de ataque por 3 a 6 ataques, então os primeiros 2-3 s de uma troca concentram quase todo o dano dele. Blink dele sai mediano aos 16,8 min (pro_dados/ursa.json), dando a ele iniciação à distância cedo.
- o que ele faz com você: Overpower somado a Fury Swipes empilha dano físico rápido o bastante pra matar antes da Reactive Armor acumular stack suficiente, já que ela sobe com ataques repetidos e a primeira leva de hits chega quase de uma vez; Maul ainda soma 1,25% da vida atual dele como dano bônus por ataque; Enrage dá 80% de redução de dano, dispel forte e atravessa Black King Bar (bkbpierce: yes, constants_abilities.json), então nem o seu BKB impede ele de limpar o debuff de atributo que o Whirling Death aplicou.
- o que você faz com ele: depois que a Reactive Armor empilha, os ataques seguintes dele rendem cada vez menos, e ela sobe rápido justamente porque cada ataque de herói conta 4x pra stack; Whirling Death ainda reduz a força dele direto.
- itens que viram: Heaven's Halberd desarma o autoataque dele por 3,5 s (items.json); Shiva's Guard soma armadura e ainda reduz a velocidade de ataque dele em aura.
- como jogar: não inicie a troca sozinho contra um Ursa com Overpower pronto, deixe ele gastar o burst numa stack baixa de Reactive Armor primeiro ou leve Heaven's Halberd antes de aceitar o 1x1.
- fonte: pro_dados/shredder.json; pro_dados/ursa.json; constants_abilities.json (ursa_fury_swipes, ursa_overpower, ursa_enrage, shredder_reactive_armor); items.json (heavens_halberd).
