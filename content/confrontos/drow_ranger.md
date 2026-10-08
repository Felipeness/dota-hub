---
id: confrontos-drow_ranger
heroi: Drow Ranger
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/drow_ranger.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/windrunner.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/luna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/kez.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/earth_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/alchemist.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/witch_doctor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/abyssal_underlord.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- OpenDota /heroes/6/matchups (partidas de liga, patches 7.40 e 7.41, embutido em pro_dados/drow_ranger.json)
- OpenDota explorer (SQL: lane_role e vitórias por herói, partidas de liga 7.40 e 7.41)
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Como essa lista foi montada

Drow Ranger joga quase sempre como carry de safelane em pro: 987 das 1.003 partidas de liga do 7.40 e 7.41 (98,4%), contra 13 no meio e 3 na offlane (OpenDota explorer, lane_role). Os 14 oponentes abaixo vêm de quatro critérios, sem repetir: os 6 com mais jogos de pro contra ela (Shadow Fiend, Rubick, Hoodwink, Lion, Windranger, Snapfire), os 3 carries de posição 1 com mais jogos de pro contra ela especificamente (Tiny, Luna, Kez), os 2 piores e 2 melhores confrontos com 30+ jogos (pior: Earth Spirit e Alchemist; melhor: Witch Doctor e Underlord) e 1 carry de meta pesado que não compartilha lane com ela mas entra no mesmo tipo de decisão de farm que o par Alchemist x Morphling (Templar Assassin, 1.681 partidas de liga no patch, um dos maiores volumes de pro entre os carries da lista). Todos os placares são de partidas profissionais via OpenDota matchups (patches 7.40 e 7.41).

## Contra Shadow Fiend (nevermore)
- placar: 96 vitórias em 181 jogos de pro, 53,0% para a Drow (fonte: OpenDota matchups).
- por que importa: é o confronto com mais jogos de pro da lista inteira. Os dois disputam a mesma vaga, carry de safelane de prioridade alta: Shadow Fiend jogou 2.264 das 3.990 partidas de liga do 7.40 e 7.41 na safelane (56,8%) contra 1.715 no meio (43%), então divide a rota com a Drow na maior parte das vezes (OpenDota explorer, lane_role).
- janelas: até os 10 min ele é a ameaça, Shadowraze (3 direções, 9s de recarga por raze, dano base 85 a 280 mais bônus por alma) mata sem precisar de item, alcance curto de 200. Dos 10 aos 15 min os dois estão perto do Dragon Lance (mediana dele 14,0 min em 2.571 jogos de pro; dela 14,2 min em 952), então a troca vira sobre quem força primeiro. Depois do Manta dela (20,2 min) ela ganha mobilidade e dispel que ele não tem resposta direta.
- o que ele faz com você: Shadowraze explode nas 3 direções perto do corpo (alcance 200), fica mais forte a cada alma acumulada; Requiem of Souls (ulti, recarga 120 a 100s, raio 1000, atraso de cast de 1,67s, medo até 2,15s) é zona de controle que ela precisa sair andando assim que ver o cast.
- o que você faz com ele: Gust (Wave of Silence) silencia 3 a 6s e empurra 450, dá pra cortar o cast do Requiem se você tiver visão a tempo do atraso de 1,67s; Frost Arrows desacelera até 45% no nível 4, ajuda a manter distância do alcance curto de 200 do Raze.
- itens que viram: Dragon Lance dá alcance pra evitar entrar nos 200 do Raze; Hurricane Pike (empurrão de 425 mais 5 ataques sem limite de alcance por 6s) responde a qualquer investida dele; BKB se ele estiver fechando Requiem em cima de você com frequência.
- como jogar: nos primeiros 10 min não fique parada sem visão perto dele. Guarde o Gust pra cortar o cast do Requiem assim que ele começar a canalizar. Depois do Manta, puxe a luta com Multishot em cima da wave antes dele crescer de patrimônio.
- fonte: pro_dados/drow_ranger.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem); OpenDota explorer (lane_role, partidas de liga 7.40-7.41).

## Contra Rubick
- placar: 71 vitórias em 139 jogos de pro, 51,1% para a Drow (fonte: OpenDota matchups).
- por que importa: 2º maior volume de jogos contra ela. Joga a offlane, posição típica de suporte 4, em 2.788 das 3.990 partidas de liga do 7.40 e 7.41 (69,9%, OpenDota explorer, lane_role), e o kit dele rouba exatamente as habilidades que ela usa pra abrir ou fechar luta.
- janelas: ele não tem spike de dano de item, cresce com nível. Spell Steal recarrega em 16, 10 ou 4s conforme o rank, e fura BKB. Cedo (antes do nível 6 dela) ele ainda não tem alcance de conjuração suficiente (passiva Arcane Supremacy soma +60 a +240) pra roubar com segurança; depois disso, todo Gust ou Multishot visível perto dele é risco de virar contra ela.
- o que ele faz com você: rouba Gust ou Multishot com Spell Steal e devolve contra o seu time; Fade Bolt salta entre alvos reduzindo ataque e dano mágico; Telekinesis levanta um alvo e estuna o grupo na queda.
- o que você faz com ele: Gust nele antes dele fechar o combo de Fade Bolt ou Telekinesis corta a iniciação; Multishot bate em área, ele não consegue "devolver" sem gastar o próprio Steal; Frost Arrows desacelera se ele tentar chegar perto pra conjurar.
- itens que viram: BKB não impede o Spell Steal, o item fura imunidade; a resposta real é distância, Dragon Lance e Hurricane Pike ajudam a sair do alcance de conjuração dele antes do Steal recarregar.
- como jogar: controle quando usa suas habilidades perto dele, principalmente depois que ele tiver o Spell Steal no rank 3 (recarga de 4s). Gust nele primeiro corta o combo antes que ele roube algo seu.
- fonte: pro_dados/drow_ranger.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal); OpenDota explorer (lane_role, partidas de liga 7.40-7.41).

## Contra Hoodwink
- placar: 54 vitórias em 134 jogos de pro, 40,3% para a Drow, o pior resultado dela contra os 6 mais jogados da lista (fonte: OpenDota matchups).
- por que importa: 3º maior volume de jogos. Joga a offlane, posição típica de suporte 4, em 2.363 das 2.917 partidas de liga do 7.40 e 7.41 (81%, OpenDota explorer, lane_role) e tranca a lane dela perto de árvore desde o nível 1.
- janelas: ela já é ameaça de pick-off cedo com Bushwhack (estoura num raio de 265 perto de árvore) e Acorn Shot (planta a própria árvore, não depende de floresta natural), perigosa antes da Drow ter Falcon Blade (mediana 6,6 min). Depois disso, Scurry (velocidade bônus, atravessa unidades e árvores, dobra de 14% para 28% a chance de redirecionar ataques da passiva Mistwoods Wayfarer, por 3,5 a 5s, 2 cargas) deixa ela fugir do Gust facilmente, e o Sharpshooter (recarga 45s, dano até 1.350 no nível 3, alcance 3.000) ameaça a qualquer momento do jogo, inclusive fora de visão direta.
- o que ele faz com você: Bushwhack estoura perto de árvore e cega a visão do alvo por até 2,1s, abrindo o combo; Sharpshooter acerta de qualquer ponto do mapa dentro de 3.000 de alcance com até 1.350 de dano carregado.
- o que você faz com ele: Gust silencia e corta o combo antes do Bushwhack conectar; seu alcance com Dragon Lance ajuda a bater nela de longe sem entrar no raio de 265 da árvore; Frost Arrows reduz a chance dela escapar depois de errar o Scurry.
- itens que viram: Hurricane Pike ajuda a sair do alcance de 3.000 do Sharpshooter a tempo; Force Staff cedo evita ficar presa perto de árvore isolada quando o combo Bushwhack sai.
- como jogar: trate toda árvore solitária perto da sua lane ou rota de farm como risco de Bushwhack. Se ela sumir do mapa, jogue perto de cobertura ou de um aliado com disable, o Sharpshooter pode estar carregando.
- fonte: pro_dados/drow_ranger.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, hoodwink_scurry); OpenDota explorer (lane_role, partidas de liga 7.40-7.41).

## Contra Lion
- placar: 58 vitórias em 121 jogos de pro, 47,9% para a Drow (fonte: OpenDota matchups).
- por que importa: 4º maior volume de jogos. Joga a offlane, posição típica de suporte 4 roamer, em 1.879 das 2.775 partidas de liga do 7.40 e 7.41 (67,7%, OpenDota explorer, lane_role) e o combo dele mata ela sem precisar de farm.
- janelas: o perigo não depende de item, depende de nível. Com Earth Spike (nível 1) e Hex (nível 6) ele já ameaça a lane cedo. A partir do nível 6, Finger of Death (recarga 110 a 30s, dano 600 a 850) fecha sozinho se a vida dela estiver baixa, o que é comum no início do jogo dela. Depois dos 10 min, Mana Drain (seca mana, recarga 15 a 6s) trava o Multishot por falta de mana se ele conseguir canalizar sem ser interrompido.
- o que ele faz com você: Earth Spike atordoa em linha por 1,3 a 2,2s e abre o combo; Hex desliga qualquer resposta por 2 a 3,2s; Finger of Death fecha a luta sozinho a partir do nível 6.
- o que você faz com ele: Gust silencia e empurra antes dele fechar o combo de stun; seu alcance de 900 no Gust e 650 a 900 nas habilidades dele ajuda a manter distância; depois do seu nível 6 (Marksmanship), o proc bônus ajuda a vencer a troca se ele errar o combo.
- itens que viram: Linken's Sphere bloqueia o próximo feitiço de alvo único dele (Hex ou Finger of Death isolado), um dos poucos counters diretos.
- como jogar: trate presença de wards dele perto da sua lane como roam ativo, não ande sem visão. No late, mantenha distância de 900 ou mais pra sair do alcance do Earth Spike e do Finger of Death.
- fonte: pro_dados/drow_ranger.json; pro_dados/lion.json; constants_abilities.json (lion_finger_of_death, lion_impale, lion_mana_drain); OpenDota explorer (lane_role, partidas de liga 7.40-7.41).

## Contra Windranger (windrunner)
- placar: 51 vitórias em 110 jogos de pro, 46,4% para a Drow (fonte: OpenDota matchups).
- por que importa: 5º maior volume de jogos e rival direto de posição boa parte das vezes: joga a safelane em 1.144 das 2.596 partidas de liga do 7.40 e 7.41 (44,1%, OpenDota explorer, lane_role), então é carry contra carry de safelane com frequência, além de aparecer na offlane como pos4 roamer em 46,7% dos picks.
- janelas: como pos1, ela sobe com Magic Stick (mediana 3,3 min) e Power Treads (7,2 min), focada em Focus Fire pra farmar sem gastar mana. Como pos4, já ameaça desde o nível 2 com Shackleshot (recarga 16 a 10s). O momento mais perigoso pra Drow é Focus Fire (recarga 70 a 30s, 350 a 500 de velocidade de ataque bônus por 20s) usado de perto: se ela ficar parada no alcance de 600, toma dano constante alto pelos 20s inteiros.
- o que ele faz com você: Shackleshot prende num ponto, Powershot atravessa a lane inteira batendo em quem estiver no caminho (dano 170 a 470, alcance 3.000), Focus Fire fixa e aplica attack speed alto por 20s se ele chegar perto.
- o que você faz com ele: Gust silencia e empurra antes do Shackleshot conectar; Multishot bate em área, útil porque o Windrun (100% de evasão) só bloqueia ataque básico, não magia; Frost Arrows reduz a velocidade dele tentando te focar.
- itens que viram: Dragon Lance e Hurricane Pike dão distância pra sair do alcance de 600 do Focus Fire antes dele travar o foco; Force Staff cedo evita o combo Shackleshot mais Powershot.
- como jogar: não fique alinhada com ele numa linha reta, o Powershot atravessa tudo no caminho. Depois que ele travar o Focus Fire em você, use Pike ou Manta pra quebrar o foco antes dos 20s acabarem.
- fonte: pro_dados/drow_ranger.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_focusfire, windrunner_powershot); OpenDota explorer (lane_role, partidas de liga 7.40-7.41).

## Contra Snapfire
- placar: 50 vitórias em 107 jogos de pro, 46,7% para a Drow (fonte: OpenDota matchups).
- por que importa: 6º maior volume de jogos. Hoje ela é mais mid iniciadora do que suporte de ward em pro: joga o meio em 519 das 2.456 partidas de liga do 7.40 e 7.41, com 56,1% de vitórias nessa lane, a maior taxa das três (OpenDota explorer, lane_role), então costuma estar na lane do meio enquanto a Drow farma do outro lado, cruzando em rotações e no meio-jogo.
- janelas: ela ameaça pick-off desde cedo com Firesnap Cookie (salto mais stun de 1 a 2,2s) e fica mais perigosa com o Aghanim's Shard (mediana 16,9 min nos pros, 1.919 jogos), que soma um glob extra de Mortimer Kiss depois do salto. Depois disso, Mortimer Kisses (ulti, recarga 120 a 100s, 8 globos de até 360 de dano cada em 5,5s) ameaça lutas inteiras se ela acertar vários globos.
- o que ele faz com você: Scatterblast (dano em cone, 100% de lentidão de movimento e ataque por 1s, mais forte a ponto cego) trava o combo; Firesnap Cookie salta nela e aplica stun; Mortimer Kisses engole e cospe um alvo, deixando ele preso e exposto.
- o que você faz com ele: Gust silencia antes do combo de Scatterblast mais Firesnap; Multishot bate em área contra o grupo dela de Spit Creep; o alcance do Dragon Lance ajuda a vencer o poke dela à distância.
- itens que viram: BKB ajuda contra o combo dela inteiro, que é mágico (Scatterblast, Firesnap, Mortimer); Force Staff cedo evita ficar presa no raio de 275 do impacto do Firesnap.
- como jogar: evite lanes e rotações isoladas perto dela sem visão de longe, as habilidades dela chegam de 800 a 3.000 de distância. Depois que ela gastar o Scatterblast, é a janela pra engajar de volta.
- fonte: pro_dados/drow_ranger.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_firesnap_cookie, snapfire_mortimer_kisses); OpenDota explorer (lane_role, partidas de liga 7.40-7.41).

## Contra Tiny
- placar: 54 vitórias em 100 jogos de pro, 54,0% para a Drow (fonte: OpenDota matchups).
- por que importa: maior volume de confronto entre carries de safelane da lista, de longe, quase o dobro do 2º colocado (Luna, 61 jogos). Os dois disputam a mesma função: farm puro de safelane, sem depender de kill pra crescer.
- janelas: Tiny sobe rápido com o Blink Dagger (mediana 15,9 min em 2.546 jogos de pro), junto com Void Stone (15,2 min). Entre os 15 e os 20 min ele tem iniciação garantida se encontrar ela isolada, porque é justamente a janela em que a Drow ainda não tem Manta (20,2 min) nem Pike (22,8 min) pra responder. O combo Avalanche mais Toss (ambos com tempo de cast zero) já é ameaça desde o nível 6, e fica mais pesado com Grow (nível 6, 12 e 18): bônus fixo de dano em cada ataque, mas -35% de velocidade de ataque.
- o que ele faz com você: Avalanche (atordoa 1,5s em área, dano 90 a 360) seguido de Toss (joga um alvo, dano 90 a 360) tira ela de posição e aplica dano alto num único combo; com Grow, cada auto-ataque carrega bônus fixo que ignora a armadura dela.
- o que você faz com ele: Gust silencia e empurra antes dele fechar o combo; Frost Arrows reduz a velocidade dele perseguindo; seu DPS sustentado por Multishot vence a troca fora de combo direto, já que o Grow corta 35% da velocidade de ataque dele.
- itens que viram: BKB é a resposta direta ao combo, Avalanche e Toss são os dois mágicos; Hurricane Pike cria distância do alcance de Toss (800 a 1.100 conforme o nível); Force Staff cedo evita ser pega no raio de 325 a 370 do Avalanche.
- como jogar: não farme perto dele sem visão antes de ter BKB ou Pike, principalmente na janela dos 15 aos 20 min. Depois que ele gastar o combo (recarga de Avalanche 23 a 14s, Toss 20 a 11s), é farm seguro por vários segundos.
- fonte: pro_dados/drow_ranger.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_grow).

## Contra Luna
- placar: 30 vitórias em 61 jogos de pro, 49,2% para a Drow, confronto quase de moeda (fonte: OpenDota matchups).
- por que importa: 2º maior volume de confronto entre carries de safelane da lista. Os dois são farmers de jogo médio, a diferença entre eles costuma vir mais de quem joga melhor a própria rota do que do matchup em si: o confronto fica em 49,2% de vitórias pra Drow, quase moeda, como mostra o placar acima.
- janelas: Luna fecha o Manta aos 17,2 min (mediana de 1.862 jogos de pro), antes do dela (20,2 min), então ela chega na janela de farm turbinado primeiro. O Eclipse (ulti, recarga 105s, 6 a 12 raios de 75 a 300 de dano conforme o nível, intervalo de 0,6s entre raios) é o nuke de pick dela disponível desde o nível 6, perigoso se ela pegar a Drow parada à noite.
- o que ele faz com você: Lucent Beam (recarga 9 a 6s, dano 75 a 300, atordoa 0,6s) poka e abre combo; Eclipse acerta várias vezes seguidas em quem estiver perto, somando dano alto rápido se ela não escapar da área.
- o que você faz com ele: Gust silencia e empurra antes do Lucent Beam conectar; Frost Arrows ajuda a manter distância do alcance de farm dela; a troca de dano sustentado tende a favorecer quem tiver o item de alcance (Dragon Lance) primeiro, já que os dois lutam de longe.
- itens que viram: Black King Bar neutraliza o Eclipse, que é todo mágico; Hurricane Pike ou Force Staff tiram ela da área de efeito (raio 675) antes do pico de raios.
- como jogar: evite lutar perto dela à noite sem saber se a ulti está pronta (recarga de 105s). Durante o dia, a troca de farm decide mais do que a troca de luta direta.
- fonte: pro_dados/drow_ranger.json; pro_dados/luna.json; constants_abilities.json (luna_eclipse, luna_lucent_beam).

## Contra Kez
- placar: 33 vitórias em 58 jogos de pro, 56,9% para a Drow (fonte: OpenDota matchups).
- por que importa: 3º maior volume de confronto entre carries de safelane da lista. É o carry corpo a corpo mais recente do meta de pos1: jogou a safelane em 1.081 das 1.428 partidas de liga do 7.40 e 7.41 (75,7%, OpenDota explorer, lane_role).
- janelas: Kez monta o primeiro power spike fechando o Mage Slayer, mediana de 12,5 min em 658 das 1.428 partidas de pro (partidas pro 7.40-7.41 (OpenDota), pro_dados/kez.json), que corta 40% do dano mágico dela enquanto o debuff durar nele. Antes disso, Echo Slash (recarga 21 a 12s, 2 ataques com delay de 1,2s entre eles) já pune troca corpo a corpo cedo. Depois dos 15 min, Falcon Rush (recarga 21 a 12s, resistência a lentidão de até 60%) dá a ele mobilidade pra fechar distância que a Drow nem sempre consegue negar só com Frost Arrows.
- o que ele faz com você: Echo Slash bate duas vezes com atraso, Grappling Claw (recarga 13 a 7s) puxa ele até você e aplica lentidão de até 100%, Falcon Rush fecha distância resistindo a lentidão.
- o que você faz com ele: ficar fora de 325 de distância desliga a chance de proc e o dano bônus da sua Marksmanship de qualquer corpo a corpo, incluindo ele, então a troca de longe favorece você; Gust silencia e empurra antes do Grappling Claw puxar ele até você; Frost Arrows ajuda a segurar distância mesmo com a resistência à lentidão do Falcon Rush.
- itens que viram: Mage Slayer dele corta 40% do seu dano mágico (Multishot, Gust) enquanto o debuff durar, então gaste o combo antes dele marcar você; Hurricane Pike empurra ele 425 de distância, resposta direta ao alcance curto do kit dele.
- como jogar: não troque corpo a corpo, force a luta a 325 ou mais de distância pra manter a Marksmanship ativa. Depois que ele gastar Grappling Claw e Falcon Rush, você tem janela segura até as recargas voltarem.
- fonte: pro_dados/drow_ranger.json; pro_dados/kez.json; constants_abilities.json (kez_echo_slash, kez_grappling_claw, kez_falcon_rush, drow_ranger_marksmanship); OpenDota explorer (lane_role, partidas de liga 7.40-7.41).

## Contra Earth Spirit
- placar: 13 vitórias em 46 jogos de pro, 28,3% para a Drow, o pior confronto da lista com 30 ou mais jogos (fonte: OpenDota matchups).
- por que importa: é a maior desvantagem confirmada com amostra relevante (28,3% de vitórias em 46 jogos). Ele joga o meio em 690 das 1.021 partidas de liga do 7.40 e 7.41 (67,6%, OpenDota explorer, lane_role), então aparece do outro lado do mapa, mas o alcance longo do kit dele cobre a rota dela com facilidade.
- janelas: ele não depende do item dela crescer, ele caça com Stone Remnant mais Rolling Boulder (recarga 16 a 4s, alcance de lançamento até 3.000) desde o nível 1. Cedo, antes da Drow ter Falcon Blade (6,6 min) e vida pra aguentar a troca, qualquer gank dele é favorito. Depois dos 10 min, Magnetize (recarga 100 a 80s, dano contínuo em área, silencia por 5s se ele estiver nela) tranca a Drow inteira: sem Gust pra abrir espaço, ela não sai.
- o que ele faz com você: Rolling Boulder (dano 60 a 90, atordoa 0,3 a 0,9s) caça de até 3.000 de distância usando o próprio corpo como remnant; Geomagnetic Grip (recarga 13s) puxa ela até ele e silencia 2,3 a 3,5s; Magnetize some com o espaço pra escapar, silenciando enquanto dura.
- o que você faz com ele: Gust silencia e empurra antes dele fechar o combo de Grip mais Magnetize; Frost Arrows desacelera ele tentando perseguir de perto; manter 325 ou mais de distância desliga o counter dele à sua Marksmanship de corpo a corpo.
- itens que viram: Black King Bar é a resposta mais direta, o combo inteiro dele é mágico (stun, silêncio, dano em área); Force Staff ou Hurricane Pike cedo ajudam a sair do raio de 350 do Magnetize antes do silêncio prender.
- como jogar: não ande sozinha perto de áreas com pedra ou visão dele até ter BKB ou Pike. Se ele abrir o combo de Grip, gaste o Gust imediatamente, o silêncio dele cancela sua resposta.
- fonte: pro_dados/drow_ranger.json; pro_dados/earth_spirit.json; constants_abilities.json (earth_spirit_rolling_boulder, earth_spirit_magnetize, earth_spirit_geomagnetic_grip); OpenDota explorer (lane_role, partidas de liga 7.40-7.41).

## Contra Alchemist
- placar: 11 vitórias em 35 jogos de pro, 31,4% para a Drow, 2º pior confronto da lista com 30 ou mais jogos (fonte: OpenDota matchups).
- por que importa: é o exemplo clássico de dois carries que raramente dividem lane (Alchemist é farmer de jungle desde cedo, Drow é safelane) mas que entram na mesma decisão de prioridade: os dois só crescem farmando, e quem fecha o item-chave primeiro dita o jogo.
- janelas: Alchemist sai na frente em patrimônio cedo: mediana de 768 de GPM em partidas de liga do 7.40 e 7.41, contra 623 da Drow (pro_dados/alchemist.json; pro_dados/drow_ranger.json), puxado também pela inata Greevil's Greed, que dá ouro bônus a cada abate e um bônus extra se ele matar de novo dentro de 40s (constants_abilities.json, alchemist_goblins_greed). O Radiance dele fecha aos 13,9 min (mediana de 672 jogos de pro), e a partir daí ele limpa 2 camps por vez e abre vantagem de farm que a Drow não alcança só com Dragon Lance (14,2 min). O Chemical Rage (ulti, recarga 60s, 120 de regen de vida por segundo no nível 3) dá sustento pra ele nunca precisar voltar à base.
- o que ele faz com você: Unstable Concoction (recarga 17s, atordoa até 3,2s, dano até 360) é o único disable real do kit, geralmente usado pra abrir combo de gank; Acid Spray (dano em área contínuo, reduz armadura em 3 a 6) corrói a defesa dela em troca prolongada.
- o que você faz com ele: Gust silencia e empurra antes do Unstable Concoction terminar de "cozinhar" (5s de preparo); fora disso, ele não tem resposta a kite, então Frost Arrows mais distância tende a vencer a troca direta; seu DPS de Multishot ajuda a negar o farm dele em camp disputado.
- itens que viram: o Scepter dele (Greevil's Greed) derrete pra dar upgrade de Aghanim's pra um aliado, raramente pra ele mesmo, então o risco maior dele é o patrimônio alto virando itens pro time inteiro; Black King Bar cobre o combo de Unstable Concoction.
- como jogar: não deixe ele farmar livre, pressione os camps dele cedo antes do Radiance (13,9 min) fechar. Se ele crescer de patrimônio sem resposta, o jogo vira sobre o time dele, não sobre o 1x1.
- fonte: pro_dados/drow_ranger.json; pro_dados/alchemist.json; constants_abilities.json (alchemist_unstable_concoction, alchemist_acid_spray, alchemist_chemical_rage, alchemist_goblins_greed).

## Contra Witch Doctor
- placar: 23 vitórias em 33 jogos de pro, 69,7% para a Drow, a maior vantagem da lista, mas com amostra pequena (fonte: OpenDota matchups).
- por que importa: é o melhor confronto dela com volume mínimo pra considerar (33 jogos). Witch Doctor joga a safelane, lane padrão de suporte, em 642 das 763 partidas de liga do 7.40 e 7.41 (84,1%, OpenDota explorer, lane_role), parado perto do time, e depende de canalizar a ulti pra fazer dano real.
- janelas: ele ameaça com Paralyzing Cask (recarga 20 a 14s, atordoa 0,8s em bounces) desde cedo, mas o perigo de verdade é Death Ward (ulti, recarga 100 a 80s, canal de 8s, 60 a 120 de dano por tiro com bônus de precisão). Fora do canal da ulti, ele não tem resposta de mobilidade, Voodoo Restoration é só cura em área, sem escape.
- o que ele faz com você: Paralyzing Cask trava um grupo em bounces; Death Ward, se ele conseguir canalizar os 8s inteiros sem ser interrompido, aplica dano constante alto à distância.
- o que você faz com ele: Gust silencia e corta o canal do Death Ward assim que ele começar; Frost Arrows e Multishot acabam com ele rápido, ele tem pouca vida e nenhuma defesa de perto; seu alcance deixa punir qualquer poke de Paralyzing Cask sem entrar no raio dele.
- itens que viram: nenhum item dele muda o confronto 1x1 de verdade, o counter é posicional, cortar o canal da ulti com Gust ou simplesmente focar ele primeiro em luta.
- como jogar: trate o Death Ward como o único risco real. Guarde o Gust pra ele, não pra outro alvo, e feche a troca rápido, ele não aguenta DPS sustentado.
- fonte: pro_dados/drow_ranger.json; pro_dados/witch_doctor.json; constants_abilities.json (witch_doctor_death_ward, witch_doctor_paralyzing_cask); OpenDota explorer (lane_role, partidas de liga 7.40-7.41).

## Contra Underlord
- placar: 44 vitórias em 66 jogos de pro, 66,7% para a Drow, 2ª maior vantagem da lista, com amostra boa (fonte: OpenDota matchups).
- por que importa: é a 2ª maior vantagem com volume relevante (66 jogos). Underlord joga a offlane em 1.848 das 1.889 partidas de liga do 7.40 e 7.41 (97,8%, OpenDota explorer, lane_role), feito pra travar área, não pra caçar um carry de longo alcance.
- janelas: ele ameaça perto, Pit of Malice (recarga 30 a 15s, prende e aplica dano periódico por até 12s) é o disable principal, mas de curto alcance (675). A Atrophy Aura (passiva, raio 900, reduz o dano de quem estiver perto em 8 a 32%) corta o DPS da Drow se ela lutar colada nele, o efeito mais relevante do confronto. Firestorm limpa onda mas não ameaça à distância.
- o que ele faz com você: Pit of Malice prende num raio de 400 e aplica dano a cada 3,6s; Atrophy Aura reduz seu dano de ataque enquanto você estiver a 900 ou menos dele.
- o que você faz com ele: lute fora do raio de 900 da Atrophy Aura pra manter seu DPS cheio, seu alcance natural já ajuda nisso; Gust silencia e empurra antes dele fechar a Pit of Malice; Frost Arrows e Multishot acertam ele de longe sem entrar no alcance curto do kit dele.
- itens que viram: Dragon Lance e Hurricane Pike reforçam a vantagem de alcance que já existe, mantendo distância da aura e do Pit.
- como jogar: não entre no corpo a corpo com ele, é onde o kit dele funciona. Bata de longe com Multishot e deixe ele gastar mana em Firestorm sem alcançar você.
- fonte: pro_dados/drow_ranger.json; pro_dados/abyssal_underlord.json; constants_abilities.json (abyssal_underlord_pit_of_malice, abyssal_underlord_atrophy_aura); OpenDota explorer (lane_role, partidas de liga 7.40-7.41).

## Contra Templar Assassin
- placar: 23 vitórias em 46 jogos de pro, 50,0% para a Drow, confronto de moeda (fonte: OpenDota matchups).
- por que importa: joga a safelane em 1.412 das 1.681 partidas de liga do patch (84%, OpenDota explorer, lane_role), um dos maiores volumes de pro entre os carries desta lista, então entra mesmo sem dividir lane com frequência, pelo mesmo motivo que Alchemist contra Morphling importa: os dois só crescem farmando e o confronto é sobre quem fecha o item-chave primeiro.
- janelas: os dois disputam literalmente o mesmo item no mesmo minuto, o Dragon Lance da Drow sai mediana de 14,2 min (952 jogos) e o da Templar Assassin sai 14,2 min também (1.517 jogos), quem farma mais rápido fecha primeiro e abre a diferença de alcance. Antes disso, TA já tem o power spike de nível 4 (Meld 2 mais Psi Blades 2), e fecha o Power Treads com mediana de 6,0 min nos pros (os 25% mais rápidos saem aos 5,2 min), o que acelera o farm de jungle dela. O Desolator dela (14,3 min) soma com o Meld (redução de armadura de -2 a -8, -12 com o talento de nível 20) pra até -18 de armadura total num alvo, dano explosivo em troca corpo a corpo.
- o que ele faz com você: Meld (recarga 11 a 5s) empilha redução de armadura e bônus de dano no próximo ataque; Refraction (recarga 14s, barreiras de dano mais bônus por instância) sustenta ela em troca prolongada; Psi Blades faz o ataque dela "vazar" em linha, útil contra unidade atrás da Drow.
- o que você faz com ele: ficar fora de 325 de distância desliga a sua Marksmanship contra o corpo a corpo dela, mas também tira você do alcance de ataque dela (até 580 com Psi Blades 4/4), então a troca à distância favorece quem tiver mais alcance de item; Gust silencia antes dela fechar o Meld; Frost Arrows ajuda a negar o farm de jungle dela.
- itens que viram: Desolator dela soma com o Meld (com o talento de nível 20) pra até -18 de armadura, perigoso em troca direta; Hurricane Pike ajuda a sair do alcance curto do kit dela (Meld é melee).
- como jogar: dispute os mesmos camps de prioridade cedo, antes dela fechar o Power Treads (mediana 6,0 min). Depois disso, evite corpo a corpo sem BKB, o combo de Meld mais Refraction dela é melee puro.
- fonte: pro_dados/drow_ranger.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_meld, templar_assassin_refraction, templar_assassin_psi_blades); OpenDota explorer (lane_role, partidas de liga 7.40-7.41).
