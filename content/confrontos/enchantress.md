---
id: confrontos-enchantress
heroi: Enchantress
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/enchantress.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/beastmaster.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shadow_demon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/phoenix.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/zuus.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/razor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/weaver.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/sniper.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/pugna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/keeper_of_the_light.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/juggernaut.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/enchantress.md
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
---

## Contexto da Enchantress antes dos confrontos
Ela é suporte duro quase só de pos 5 em pro (fonte: herois_catalogo.json; ficha enchantress.md). O motor dela é Impetus (dano puro em cima do ataque, cresce com a distância até +20% aos 1750 de alcance) somado a Untouchable (passiva que atrasa o ataque de quem bate nela, atravessa imunidade a magia). A curva de itens em pro (n=833 partidas 7.40-7.41, fonte pro_dados/enchantress.json): Botas aos 7:00, Power Treads mediana 18:12 (p25 12:48), Aghanim's Scepter mediana 26:54 (p25 23:18) liberando Little Friends, Force Staff 27:00 e Hurricane Pike 32:36 (p25 28:30) fechando o kit de kiting.

## Contra Rubick (rubick)
- placar: 91/170, 53,5% de vitória dela em pro (fonte: pro_dados/enchantress.json, matchups OpenDota)
- por que importa: maior volume de confrontos dela em todo o pro play (170 jogos), mesma função de suporte duro/controle de rota (pos 4/5, catálogo)
- janelas: até os 10min os dois organizam lane com Arcane Boots/Magic Wand; aos 16-22min Rubick fecha Blink (mediana 21,6min, p25 16,9min, n=2782) e passa a iniciar antes dela ter Power Treads (18,2min); só a partir dos 27min ela fecha Scepter (mediana 26,9min) e o 1x1 fica parelho de novo
- o que ele faz com você: Telekinesis (0,9-1,7s de estun) te joga pro ar e abre combo de time; Spell Steal rouba a última magia que você lançou (Enchant, Little Friends ou Sproink) e usa contra você; Fade Bolt reduz seu dano físico e mágico em até 24% por 10s
- o que você faz com ele: Enchant dispensa qualquer buff dele e ainda rouba 40% da XP se ele estiver sozinho perto de creep; Untouchable (atravessa imunidade a magia) pune quem chega perto pra trocar; Nature's Attendants cura o poke de Fade Bolt
- itens que viram: Blink dele define a iniciação; cuidado ao lançar Enchant ou Little Friends perto da morte dele, Spell Steal rouba a magia usada por último
- como jogar: não ficar parada sem visão perto do alcance de Telekinesis; guardar Force Staff/Sproink pro combo inicial, não pro follow-up; variar a ordem de cast pra ele não roubar o Scepter
- fonte: pro_dados/enchantress.json; pro_dados/rubick.json; constants_abilities.json (rubick_telekinesis, rubick_spell_steal, rubick_fade_bolt, enchantress_enchant)

## Contra Tusk (tusk)
- placar: 78/151, 51,7% de vitória dela em pro (fonte: pro_dados/enchantress.json)
- por que importa: segundo maior volume de confrontos em pro (151 jogos), mesma função de suporte roamer (pos 4/5)
- janelas: cedo ele sustenta lane com Tranquil Boots (mediana 8,4min); aos 19min fecha Blink (p25 16,8min) e ganha iniciação de longo alcance com Snowball; ela nivela aos 18,2min com Power Treads e sai na frente dos 27-33min quando fecha Scepter/Force Staff/Pike
- o que ele faz com você: Snowball rola e pega você de longe mesmo sem blink (dano e estun crescem por aliado anexado); Walrus Punch (crítico de 200-300%) te lança pro ar; Ice Shards bloqueia sua fuga numa rota estreita
- o que você faz com ele: Untouchable pune o Walrus Punch porque ele é corpo a corpo, o ataque seguinte dele fica mais lento; Enchant tira 30-60% da velocidade dele antes do combo fechar; Nature's Attendants cura o burst do Snowball em luta de grupo
- itens que viram: Blink dele é o gatilho da iniciação; Force Staff/Hurricane Pike dela sai da rota do Snowball antes dele ganhar velocidade
- como jogar: nunca ficar parada perto de passagem estreita sem wisp de visão; guardar Force Staff pro momento em que o Snowball é lançado, não depois do Walrus Punch já ter acertado
- fonte: pro_dados/enchantress.json; pro_dados/tusk.json; constants_abilities.json (tusk_snowball, tusk_walrus_punch, enchantress_untouchable)

## Contra Hoodwink (hoodwink)
- placar: 77/140, 55,0% de vitória dela em pro (fonte: pro_dados/enchantress.json)
- por que importa: terceiro maior volume em pro (140 jogos), troca de poke direta entre dois suportes ranged (pos 4/5)
- janelas: troca de poke com Acorn Shot/Enchant até os 12min; dos 19 aos 24min Hoodwink fecha Shard (23,8min, p25 19,2min) e Sharpshooter vira ameaça de até 1350 de dano num canal de 3s; ela responde fechando Scepter/Pike entre 23 e 33min
- o que ele faz com você: Bushwhack perto de árvore prende e puxa (estun 1,5-2,1s); Sharpshooter ameaça te matar de até 3000 de distância, fora do seu alcance de 575, se você ficar parada durante o canal
- o que você faz com ele: Impetus bate mais forte quanto mais longe (até 20% a mais aos 1750 de distância), então se ele errar o Sharpshooter de longe o troco dói; Untouchable pune o autoataque dele perto de árvore
- itens que viram: Scurry dele (habilidade base, não é upgrade de Aghanim's) deixa ele andar por árvore e fugir do Pike; Force Staff dela quebra a mira do Sharpshooter se usado durante o canal, mas o slow do Enchant sozinho não interrompe o canal
- como jogar: usar wisp pra ver área de árvore antes de se expor 3s; na janela do Sharpshooter, deslocar com Force Staff em vez de tentar atordoar, porque Enchant não cancela canal
- fonte: pro_dados/enchantress.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, hoodwink_scurry, enchantress_impetus)

## Contra Beastmaster (beastmaster)
- placar: 66/126, 52,4% de vitória dela em pro (fonte: pro_dados/enchantress.json)
- por que importa: maior volume de confronto dela fora da própria posição (126 jogos), ele é core pos 2/3 (catálogo), não divide lane com ela mas disputa controle de creep/rotação igual ela
- janelas: ele rusha Aghanim's Scepter muito cedo (mediana 14,6min, p25 13,5min, n=1466), bem antes dela ter Power Treads (18,2min); aos 18-19min soma Blink; ela só empata o 1x1 depois dos 23-27min quando fecha Scepter/Force Staff/Pike
- o que ele faz com você: Primal Roar (300-375 de dano e 3-4s de estun em até 2 alvos alinhados, atravessa imunidade a magia) pode te pegar numa rotação; Wild Axes acerta duas vezes e amplifica o próximo dano; aves do Scepter dão visão global contínua se você não tiver smoke
- o que você faz com ele: Enchant controla uma creep dele e rouba 40% da XP dela; Nature's Attendants cura o dano contínuo dos axes; Untouchable pune se ele tentar trocar perto, corpo a corpo
- itens que viram: Scepter rushado dele (~14-15min) é o maior perigo porque chega antes de qualquer item dela; BKB dele (23,6min) ignora o slow do Enchant durante a imunidade
- como jogar: smokar antes de rotacionar pra tirar a visão das aves; nunca ficar alinhada com aliado pro Primal Roar pegar os dois de uma vez; o 1x1 só fica favorável a partir dos 23min
- fonte: pro_dados/enchantress.json; pro_dados/beastmaster.json; herois_catalogo.json; constants_abilities.json (beastmaster_primal_roar, beastmaster_wild_axes, enchantress_enchant)

## Contra Jakiro (jakiro)
- placar: 61/118, 51,7% de vitória dela em pro (fonte: pro_dados/enchantress.json)
- por que importa: pos 5 puro igual ela (catálogo), clássico duelo de poke e limpeza de onda entre suportes
- janelas: lane de poke até os 12min com Arcane Boots; dos 18 aos 22min Macropyre no nível alto zonea a rota; ela equilibra e supera a partir dos 22-26min quando fecha Power Treads e Scepter, ganhando alcance maior que o dele
- o que ele faz com você: Ice Path (estun de até 2s em área) trava pra puxar pro Macropyre (10s de queimadura, 100-200 de dano por segundo); Dual Breath desacelera num corredor de até 850 de alcance
- o que você faz com ele: Impetus acerta de uma distância maior do que o alcance de fuga que o Dual Breath permite; Untouchable pune se ele reduzir o espaço pra trocar; Nature's Attendants cura a queimadura do Macropyre
- itens que viram: Glimmer Cape dele escapa da zona do Pike; Force Staff dela sai do raio do Macropyre antes do dano acumular
- como jogar: nunca atravessar a faixa de gelo formada pelo Ice Path; sair do Macropyre assim que ele acender, o delay de formação dá tempo; guardar Nature's Attendants pro DoT contínuo, não pro burst isolado
- fonte: pro_dados/enchantress.json; pro_dados/jakiro.json; herois_catalogo.json; constants_abilities.json (jakiro_ice_path, jakiro_macropyre, jakiro_dual_breath)

## Contra Snapfire (snapfire)
- placar: 63/114, 55,3% de vitória dela em pro (fonte: pro_dados/enchantress.json)
- por que importa: suporte flex (pos 2-5) muito escolhido em pro, cria a mesma pressão de poke e controle de rota que ela faz
- janelas: Snapfire fecha Aghanim's Shard cedo (mediana 16,9min, p25 15,2min); ela só alcança nível de item perto dos 18-20min com Power Treads; dos 20 aos 27min as duas trocam burst, Firesnap Cookie contra Impetus
- o que ele faz com você: Firesnap Cookie salta e atordoa quem estiver no pouso; Scatterblast desacelera num cone de até 800 de alcance; Gobble Up pode engolir a creep que você controla com Enchant
- o que você faz com ele: Untouchable pune aproximação corpo a corpo do Mortimer (o pet); Nature's Attendants cura a queimadura do Mortimer Kisses; Impetus de longe pune o alcance curto do Scatterblast
- itens que viram: Aghanim's Shard dele acelera o Mortimer e muda o combo; Force Staff/Hurricane Pike dela sai do cone do Scatterblast e da área do Mortimer Kisses
- como jogar: manter mais de 800 de distância do Scatterblast; não deixar a creep controlada sozinha perto do Gobble Up; usar Pike assim que a animação do Firesnap Cookie começar a carregar
- fonte: pro_dados/enchantress.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_firesnap_cookie, snapfire_scatterblast, snapfire_gobble_up)

## Contra Disruptor (disruptor)
- placar: 54/97, 55,7% de vitória dela em pro (fonte: pro_dados/enchantress.json)
- por que importa: pos 5 puro igual ela (catálogo), e o único suporte da lista cujo kit anula diretamente o reposicionamento dela
- janelas: até os 20min é farm e poke parelho; dos 20 aos 24min ele fecha Blink e passa a iniciar com Glimpse e Kinetic Field; ela só tem reposicionamento de verdade depois dos 27-32min com Force Staff/Pike, mas é exatamente isso que o Glimpse desfaz
- o que ele faz com você: Glimpse teleporta você de volta pra onde estava há 4 segundos, desfazendo Force Staff, Pike ou Sproink recém-usados, e ainda causa até 280 de dano; Kinetic Field prende você e aliados numa jaula de 350 de raio; Static Storm silencia e o dano cresce ao longo de 6s, travando Enchant, Scepter e Shard
- o que você faz com ele: se você não usou nenhum deslocamento nos últimos 4s, o Glimpse não desfaz nada; Untouchable pune aliados corpo a corpo dele; Nature's Attendants cura o dano crescente do Static Storm se você sair a tempo
- itens que viram: Blink dele é o gatilho do combo inteiro; seu Force Staff/Pike só funciona se usado antes do combo dele começar, não depois
- como jogar: gastar o reposicionamento antes de ele engajar, nunca como reação, porque Glimpse cancela os últimos 4s de movimento; sair da Static Storm nos primeiros ticks, antes do dano escalar
- fonte: pro_dados/enchantress.json; pro_dados/disruptor.json; herois_catalogo.json; constants_abilities.json (disruptor_glimpse, disruptor_static_storm, disruptor_kinetic_field)

## Contra Shadow Demon (shadow_demon)
- placar: 50/93, 53,8% de vitória dela em pro (fonte: pro_dados/enchantress.json)
- por que importa: mesma função pos 4/5 (catálogo), com um banimento que tira você da luta sem dar chance de reagir
- janelas: parelho até os 19-20min; ele fecha Blink aos 23,9min, um pouco antes dela fechar o Scepter (mediana 26,9min); dos 24 aos 27min a luta vira sobre quem inicia o banimento primeiro
- o que ele faz com você: Disruption te tira da luta por 2,75s, sem poder atacar nem ser atacada, e ao voltar cria 2 clones fracos seus sob o controle dele; Demonic Purge (atravessa imunidade a magia) remove o buff de cura ativo da Nature's Attendants e desacelera até 100%
- o que você faz com ele: as ilusões criadas pelo Disruption tomam o dobro de dano recebido, então Impetus nelas mata rápido; Untouchable pune quem tenta acertar você de perto; Enchant já dispensa o debuff do Demonic Purge se castado antes dele gastar mana
- itens que viram: Aghanim's Shard dele (Demonic Purge) e seu Scepter (Little Friends) competem pra ver quem trava a luta primeiro; seu Force Staff/Pike sai dos 800 de alcance de cast do Disruption antes dele travar você
- como jogar: focar as ilusões criadas pelo banimento, elas morrem rápido; não gastar Nature's Attendants logo antes dele ter mana pra Demonic Purge, porque ele reseta sua cura
- fonte: pro_dados/enchantress.json; pro_dados/shadow_demon.json; herois_catalogo.json; constants_abilities.json (shadow_demon_disruption, shadow_demon_demonic_purge)

## Contra Phoenix (phoenix)
- placar: 38/85, 44,7% de vitória dela em pro (fonte: pro_dados/enchantress.json; amostra de 85 jogos)
- por que importa: pos 5 puro igual ela (catálogo), e um dos dois piores confrontos de função com amostra grande, útil pra entender onde o perfil dela falha contra outro suporte "tanque"
- janelas: cedo os dois sustentam lane (Tranquil Boots dele vs tango/wisps dela); aos 15,1min ele já tem Spirit Vessel reduzindo toda cura que ela recebe em 70% por 8s; aos 23,6min ele fecha Shiva's Guard, antes dela fechar o Scepter (mediana 26,9min)
- o que ele faz com você: Icarus Dive atravessa e desacelera com dano ao longo do tempo; Supernova (atravessa imunidade a magia, 60-120 de dano por segundo em raio de 1200, estun de 1,6-2,4s se destruída) ameaça o time inteiro; Spirit Vessel corta quase toda a cura da Nature's Attendants por 8s
- o que você faz com ele: Enchant tira a velocidade dele e atrapalha o reposicionamento do Sun Ray; Untouchable pune quem chega perto demais da Supernova pra te atacar corpo a corpo depois
- itens que viram: Spirit Vessel dele é o item que mais dói, zera quase toda cura recebida; Shiva's Guard dele reduz 45 de velocidade de ataque em área, cortando o motor do Impetus
- como jogar: evitar depender de cura quando ele já tiver Spirit Vessel; fechar Power Treads antes dele fechar Shiva's Guard pra não perder o motor de ataque; fugir da Supernova em vez de brigar dentro dela
- fonte: pro_dados/enchantress.json; pro_dados/phoenix.json; herois_catalogo.json; items.json (spirit_vessel, shivas_guard); constants_abilities.json (phoenix_supernova, phoenix_icarus_dive)

## Contra Zeus (zuus)
- placar: 22/31, 71,0% de vitória dela em pro (fonte: pro_dados/enchantress.json; amostra de 31 jogos, maior vantagem da lista com 30+ jogos)
- por que importa: ele é mid pos 2 (catálogo), não divide lane com ela, mas é o maior confronto favorável dela com amostra válida, útil pra entender como ela lida com um nuker sem fuga
- janelas: lane de poke/farm até os 16min; aos 16,1min ele já tem Shard; ela fecha Power Treads perto dos 18min e passa a pressionar porque ele não tem nenhum deslocamento; dos 21-23min ele fecha Scepter, mas sem disable real continua morrendo pra qualquer gank com Enchant
- o que ele faz com você: Static Field soma 3,45% do seu HP atual a cada ataque ou feitiço que ele acerta em você; Lightning Bolt (140-380 de dano + mini-estun) te mata de longe se você ficar parada à vista dele; Thundergod's Wrath acerta o mapa inteiro sem precisar te ver
- o que você faz com ele: Enchant (-30 a -60% de velocidade) numa rota sem fuga é sentença de morte pra ele; Nature's Attendants cura o poke de Arc Lightning e Static Field
- itens que viram: Aghanim's Shard dela (Sproink) dá uma saída instantânea com contra-ataque assim que ele tenta se aproximar pra nukar; Force Staff dela sai do raio de salto de 450 do Arc Lightning
- como jogar: forçar a troca fora da visão dele, porque ele depende de ver pra acertar os nukes; nunca andar sozinha numa rota aberta, o Enchant nele já garante o abate do resto do time
- fonte: pro_dados/enchantress.json; pro_dados/zuus.json; herois_catalogo.json; constants_abilities.json (zuus_static_field, zuus_lightning_bolt, zuus_thundergods_wrath)

## Contra Razor (razor)
- placar: 22/32, 68,8% de vitória dela em pro (fonte: pro_dados/enchantress.json; amostra de 32 jogos)
- por que importa: core pos 3/2/1 (catálogo), não divide lane com ela, segunda maior vantagem da lista com amostra válida, mostra o que acontece contra um carry sem nenhuma fuga
- janelas: cedo ele zonea com Plasma Field até os 14min quando fecha Guardian Greaves; ela sobe o nível com Power Treads (18,2min) e já pode trocar; sem blink nem disable, ele só fica seguro depois do BKB aos 24,7min
- o que ele faz com você: Plasma Field acerta duas vezes (ida e volta) e desacelera mais na distância máxima; Static Link (atravessa imunidade a magia) rouba dano seu enquanto o vínculo durar; Eye of the Storm (ult) ataca quem estiver com menos vida dentro de 500 de raio, reduzindo armadura
- o que você faz com ele: sem blink nem disable, Enchant nele é garantia de abate numa rotação; Untouchable pune o autoataque dele se tentar farmar perto; Nature's Attendants cura o dano contínuo do Eye of the Storm e do Plasma Field
- itens que viram: BKB dele (24,7min) é o único jeito de sobreviver ao combo de controle dela e dos aliados; Force Staff/Pike dela sai do alcance do Static Link, que precisa de proximidade pra puxar o dano
- como jogar: fechar o confronto antes do BKB dele (antes dos 22-24min), porque depois disso ele ignora o Enchant; nunca ficar parada perto dele sem visão, porque Static Link rouba dano em troca direta
- fonte: pro_dados/enchantress.json; pro_dados/razor.json; herois_catalogo.json; constants_abilities.json (razor_static_link, razor_plasma_field, razor_eye_of_the_storm)

## Contra Weaver (weaver)
- placar: 20/31, 64,5% de vitória dela em pro (fonte: pro_dados/enchantress.json; amostra de 31 jogos)
- por que importa: carry pos 1 (catálogo), não divide lane com ela, é o exemplo direto do pedido do dono: dois heróis que não se enfrentam na lane mas o power spike de um define o confronto do outro
- janelas: até os 18min Weaver é extremamente frágil, com fuga só no cooldown de Shukuchi; ela fecha Power Treads aos 18,2min e qualquer Enchant encontrado nessa janela mata ele, explicando os 64,5%; dele aos 18-20min ele fecha Shard e Dragon Lance pra brigar de longe; só aos 27,6min ele tem BKB pra ignorar o Enchant
- o que ele faz com você: Geminate Attack dobra o dano de ataque, inclusive contra a creep controlada por você; The Swarm reduz armadura e soma dano ao longo de 16s; Shukuchi dá invisibilidade curta (não dispensável) pra fugir ou reposicionar
- o que você faz com ele: Enchant reduz a velocidade dele mesmo durante o Shukuchi, porque o slow não é dispensado pela invisibilidade dele, só reduz o ganho de velocidade; Untouchable pune qualquer autoataque dele perto; Impetus bate mais forte quanto mais longe, então perseguir Weaver fugindo ainda causa dano
- itens que viram: BKB dele (27,6min, bem depois do seu Scepter/Force Staff dos 23-27min) é o ponto em que ele passa a ignorar o Enchant; antes disso ele está sempre a um slow de ser pego
- como jogar: gankar Weaver antes dos 20min, enquanto ele não tem BKB nem Time Lapse disponível com frequência; mirar o Enchant assim que ele ativar o Shukuchi, não depois
- fonte: pro_dados/enchantress.json; pro_dados/weaver.json; herois_catalogo.json; constants_abilities.json (weaver_shukuchi, weaver_geminate_attack, weaver_the_swarm)

## Contra Sniper (sniper)
- placar: 11/32, 34,4% de vitória dela em pro (fonte: pro_dados/enchantress.json; amostra de 32 jogos, pior confronto da lista com 30+ jogos)
- por que importa: core pos 1/2/4 (catálogo), não divide lane fixa com ela, é a maior desvantagem da lista com amostra válida
- janelas: ele fecha Power Treads aos 5,9min e já aos 16,5min tem Dragon Lance, alongando o alcance de ataque; ela só fecha Power Treads aos 18,2min; dos 19 aos 24min ele soma Mjollnir e Hurricane Pike, abrindo ainda mais a distância, enquanto o kit dela (Scepter 26,9min, Pike 32,6min) chega tarde demais pra fechar essa diferença de alcance
- o que ele faz com você: Assassinate (300-500 de dano) te mata de até 3000 de distância, fora de qualquer alcance de resposta sua; Headshot tem 40% de chance de te dar um tranco e desacelerar seu ataque a cada acerto; Keen Scope soma 1,5% de dano a mais pra cada 100 de distância, te punindo justamente por ele ficar longe
- o que você faz com ele: Impetus também cresce com a distância, mas o alcance dele (3000 no Assassinate, mais Dragon Lance/Pike no corpo a corpo) sempre supera o seu (575 base); Untouchable só funciona se ele chegar perto, e ele nunca precisa chegar
- itens que viram: Dragon Lance e Hurricane Pike dele ampliam o alcance justamente pra nunca entrar no raio do seu Untouchable; seu Aghanim's Shard (Sproink) é a única forma de sair do alcance dele depois de focada
- como jogar: nunca ficar parada à vista dele por mais de 1-2s; jogar em grupo, forçando ele a dividir atenção, porque 1x1 aberto ele sempre ganha de longe
- fonte: pro_dados/enchantress.json; pro_dados/sniper.json; herois_catalogo.json; constants_abilities.json (sniper_assassinate, sniper_headshot, sniper_keen_scope, enchantress_bunny_hop)

## Contra Pugna (pugna)
- placar: 12/32, 37,5% de vitória dela em pro (fonte: pro_dados/enchantress.json; amostra de 32 jogos)
- por que importa: pos 5 puro igual ela (catálogo), mas um dos piores confrontos de função: ele desliga o motor de ataque dela por completo
- janelas: lane de poke até os 11min com Arcane Boots; dos 11 aos 21min Decrepify e Nether Blast zoneiam qualquer tentativa de atacar; ela só ganha espaço depois dos 23-27min quando o kit de deslocamento fecha, mas até lá o Nether Ward pune cada Enchant ou Little Friends lançado
- o que ele faz com você: Decrepify te deixa incapaz de atacar e de ser atacada por 3,5s, desligando Impetus e Untouchable ao mesmo tempo; Nether Ward causa 50-110 de dano mais um bônus por mana gasta sempre que você lança Enchant, Little Friends ou Sproink; Life Drain (até 350 de dano por segundo) sustenta ele em troca prolongada
- o que você faz com ele: Enchant nele ainda funciona fora da janela de Decrepify; Untouchable pune se ele tentar farmar perto, corpo a corpo; Nature's Attendants cura o Nether Blast se você sair da área a tempo
- itens que viram: Nether Ward dele muda o jeito de você usar magia, prefira autoatacar com Impetus quando o ward estiver ativo; seu Scepter/Shard servem mais pra fugir do que pra iniciar enquanto ele tiver mana pro ward
- como jogar: evitar lançar feitiço perto do Nether Ward dele; não tentar autoatacar durante o Decrepify, ele simplesmente não deixa; usar o jogo de posicionamento (Force Staff/Pike) em vez de magia quando ele estiver por perto
- fonte: pro_dados/enchantress.json; pro_dados/pugna.json; herois_catalogo.json; constants_abilities.json (pugna_decrepify, pugna_nether_ward, pugna_life_drain)

## Contra Keeper of the Light (keeper_of_the_light)
- placar: 22/57, 38,6% de vitória dela em pro (fonte: pro_dados/enchantress.json; amostra de 57 jogos, a maior desvantagem da lista entre confrontos com amostra grande, n≥50)
- por que importa: soft support/mid pos 4/2 (catálogo), não divide lane fixa com ela, maior desvantagem da lista em número de jogos, útil pra mostrar onde o alcance dela perde
- janelas: ele fecha Diadem aos 7,8min e Tranquil Boots aos 6,1min, chegando cedo num perfil de poke sustentável; aos 14,8min soma Botas de Viagem, ganhando mobilidade de mapa; ela só fecha Power Treads aos 18,2min, e o Illuminate dele já ameaça de 1550 de distância antes disso
- o que ele faz com você: Illuminate (canalizado até 3s, até 500 de dano, alcance de 1550) te acerta de fora do seu alcance de resposta; Blinding Light te cega com 45% de chance de errar ataque por 4s, desligando o Impetus; Radiant Bind reduz sua resistência mágica em até 40% e desacelera mais quanto mais você se move
- o que você faz com ele: Enchant nele funciona normal, sem fuga própria dele além da velocidade da Spirit Form; Untouchable pune se ele tentar trocar de perto, o que raramente acontece; Nature's Attendants cura o poke de Illuminate se você sair da linha de tiro
- itens que viram: Força Staff dele (quando compra) e a Spirit Form dão mobilidade de longa distância pra fugir do seu reposicionamento; seu Force Staff/Pike sai da linha de 400 de largura do Illuminate
- como jogar: nunca ficar alinhada em linha reta com ele por mais de 1-2s; atacar fora do alcance de 1550 do Illuminate sempre que possível; aproveitar a Blinding Light pra reposicionar em vez de tentar atacar durante o cegamento
- fonte: pro_dados/enchantress.json; pro_dados/keeper_of_the_light.json; herois_catalogo.json; constants_abilities.json (keeper_of_the_light_illuminate, keeper_of_the_light_blinding_light, keeper_of_the_light_radiant_bind)

## Contra Juggernaut (juggernaut)
- placar: 15/38, 39,5% de vitória dela em pro (fonte: pro_dados/enchantress.json; amostra de 38 jogos)
- por que importa: carry pos 1 (catálogo), divide a rota segura com ela com frequência como suporte x carry, mas vira desvantagem por causa da imunidade a debuff do próprio kit dele
- janelas: ele fecha Battle Fury aos 13,6min e Power Treads aos 5,5min, puxando a fazenda rápido; ela fecha Power Treads só aos 18,2min; dos 18 aos 21min ele soma Diadem e Manta, ganhando velocidade de ataque e saída; o Scepter dela (23-27min) chega perto do Omnislash dele, disponível desde o nível 6
- o que ele faz com você: Blade Fury (5s, imune a debuff e com 80% de resistência mágica, não atravessa imunidade a magia) limpa qualquer creep controlada por você e ignora o Untouchable enquanto está girando; Omnislash (atravessa imunidade a magia, invulnerável durante o uso) pula em você e em aliados perto assim que ele tiver nível 6
- o que você faz com ele: Impetus é dano puro, não é reduzido pela resistência mágica do Blade Fury, então ainda machuca ele durante o giro; Untouchable volta a valer assim que o giro termina; Enchant trava o avanço dele fora da janela do Blade Fury
- itens que viram: Battle Fury dele (13,6min) dá fazenda rápida e limpa a creep que você controla; seu Scepter (Little Friends) tenta travar ele, mas falha se ele estiver girando o Blade Fury no momento
- como jogar: brigar com ele fora da janela do Blade Fury, ele fica vulnerável a slow e estun nos 5s seguintes ao giro; mirar o Enchant assim que o giro acabar, nunca durante
- fonte: pro_dados/enchantress.json; pro_dados/juggernaut.json; herois_catalogo.json; constants_abilities.json (juggernaut_blade_fury, juggernaut_omni_slash, enchantress_impetus)
