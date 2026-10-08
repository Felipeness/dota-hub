---
id: confrontos-mirana
heroi: Mirana
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mirana.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dark_willow.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/centaur.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/winter_wyvern.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rattletrap.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ursa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/slardar.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/sniper.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/zuus.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tidehunter.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer
- https://liquipedia.net/dota2/Storm_Spirit
---

Mirana é suporte móvel de pick-off em pro. Nos patches 7.40 e 7.41, ela jogou em safelane em 424 partidas, na offlane em 293, no meio em só 80 e na jungle em 3 (partidas pro 7.40-7.41, OpenDota explorer). Ela não compartilha lane fixa com quase ninguém dessa lista: o trabalho dela é correr o mapa com Sacred Arrow, achar quem está exposto e decidir a luta antes dela começar. Por isso boa parte dos confrontos abaixo são contra heróis que ela nunca encontra "na lane", mas que ela ou caça (carries e meias-lanes móveis como Ursa e Storm Spirit) ou disputa a mesma função de roaming (Hoodwink, Rubick, Dark Willow, Winter Wyvern, Clockwerk).

## Contra Hoodwink (hoodwink)

- placar: 93 vitórias em 163 partidas de Mirana contra Hoodwink, 57,1% (fonte: `pro_dados/mirana.json`, matchups OpenDota pro 7.40+7.41)
- por que importa: é o oponente mais comum da Mirana em pro de longe (163 jogos), porque as duas competem pela mesma função, pos4/5 de pick-off e visão
- janelas: até os 12 min as duas ainda estão de Boots cru (Mirana 5,8 min, Hoodwink 5,8 min, medianas iguais) brigando por pull e ward; dos 12 aos 24 min Hoodwink tende a estar um pouco na frente em utilidade porque a Arcane Boots dela sai perto da de Mirana (12,2 min contra 12,6 min) mas o Sharpshooter (nível 6, 45s de CD) já está liberado e ameaça à distância; depois dos 23-24 min quem fecha o Aghanim's primeiro assume a luta, e isso costuma ser a Hoodwink (Shard mediana 23,8 min, n=1224) contra o Scepter raro de Mirana (31,8 min, só 43% das partidas)
- o que ele faz com você: Bushwhack (CD 15 a 12s conforme nível) só stuna perto de árvore, então ele empurra a rota de roam de Mirana pra fora da mata; Sharpshooter (45s de CD) acerta de longe e aplica break, cortando a resposta de Starstorm dela
- o que você faz com ele: Sacred Arrow (stun de 0,01 a 2,6s crescendo com a distância, CD 19-16s) acerta antes do alcance do Bushwhack, que precisa de árvore perto; Leap fecha a distância depois do stun antes da Scurry dele kickar
- itens que viram: Aghanim's Shard da Hoodwink dá Hunter's Boomerang, poke em arco que atravessa e aplica lentidão com mais dano mágico recebido, útil pra ela vencer a troca de poke; o Scepter da Mirana faz a Sacred Arrow soltar Starstorm no caminho inteiro da flecha, virando iniciação de grupo em vez de só pick-off único
- como jogar: nos primeiros 10 min, jogue a briga de ward e pull sem se expor perto de árvore; ao nível 6, não force Arrow sem ver onde ela está, porque o Sharpshooter dela pune o cast longo; depois dos 24 min, priorize o Aghanim's Scepter se a partida estiver parada, porque ele muda quem inicia a próxima troca
- fonte: pro_dados/mirana.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, mirana_arrow); api.opendota.com/api/constants/aghs_desc (Hoodwink shard, Mirana scepter)

## Contra Rubick (rubick)

- placar: 68 vitórias em 126 partidas de Mirana contra Rubick, 54,0% (fonte: `pro_dados/mirana.json`)
- por que importa: segundo oponente mais comum em pro (126 jogos) e o outro grande rival de função pos4/5; os dois competem pelo mesmo papel de suporte móvel com disable à distância
- janelas: as Arcane Boots de Rubick saem antes (10,3 min contra 12,6 min de Mirana), então ele tem mana pra brigar primeiro; o Blink Dagger dele (21,6 min) é o verdadeiro divisor de águas, porque a partir daí ele inicia com Telekinesis em vez de só reagir; o Aghanim's Scepter dele (27,4 min, upgrada Spell Steal pra 2 cargas com alcance maior) chega bem antes do Scepter raro de Mirana (31,8 min)
- o que ele faz com você: Telekinesis (CD 22-13s) levanta e arremessa de volta no chão, stunando quem está perto, boa resposta pro Leap de Mirana que a aproxima demais; se Mirana usar Moonlight Shadow perto dele, Spell Steal pode roubar o ultimate e dar invisibilidade pro time dele também
- o que você faz com ele: Sacred Arrow tem alcance de 3000 contra o alcance bem menor da Telekinesis, então Mirana pode punir o posicionamento de Rubick antes dele chegar perto; nunca usar Moonlight Shadow com Rubick vivo e por perto sem antes checar se ele guardou a Fade Bolt ou outra magia pra roubar
- itens que viram: o Scepter de Rubick upgrada o Spell Steal pra guardar 2 magias e usa a versão com Scepter de cada uma, o que inclui potencialmente roubar o Scepter da própria Mirana se ela tiver o dela; Blink Dagger é o item que decide quem inicia a troca primeiro
- como jogar: controle a visão perto de onde Rubick anda sozinho, porque ele é tão frágil quanto Mirana; depois do Blink dele (21-22 min), jogue mais em grupo e evite ultar perto dele; priorize abater Rubick antes de grandes lutas pra não perder o próprio kit roubado
- fonte: pro_dados/mirana.json; pro_dados/rubick.json; constants_abilities.json (rubick_telekinesis, rubick_spell_steal, mirana_invis); api.opendota.com/api/constants/aghs_desc (Rubick scepter)

## Contra Shadow Fiend (nevermore)

- placar: 64 vitórias em 107 partidas de Mirana contra Shadow Fiend, 59,8% (fonte: `pro_dados/mirana.json`)
- por que importa: terceiro mais comum em pro (107 jogos); não tem lane em comum com Mirana (ele é mid puro, gpm de 658 e lh10 de 78, muito acima do suporte dela), mas é justamente o tipo de alvo que ela caça com roam, porque ele é frágil sem Black King Bar
- janelas: até os 10 min Shadow Fiend já tem Power Treads (5,9 min) e está puro farm/raze; dos 10 aos 20 min ele passa por Mask of Madness (10,2 min) e Yasha (13,3 min), ganhando mobilidade e dano pra snowball sozinho, janela perigosa pra Mirana tentar pegá-lo sem apoio; depois dos 23-25 min, se ele fechar Black King Bar (25,2 min), a Sacred Arrow para de stunar porque não atravessa imunidade a magia
- o que ele faz com você: Requiem of Souls (ultimate, CD 120-100s) explode todas as almas acumuladas num raio e stuna quem for atingido pela segunda onda, dano que mata Mirana de perto sem itens de vida; Shadowraze (CD 9s) ganha dano extra com as almas de Necromastery, então ele acumula poder só farmando
- o que você faz com ele: antes do Black King Bar, Sacred Arrow seguida de Leap mata Shadow Fiend sozinho na maior parte das vezes, porque ele não tem escape nenhum no kit; depois do BKB (25,2 min), a jogada muda pra isolar ele fora da imunidade ou esperar ela acabar
- itens que viram: Black King Bar de Shadow Fiend é o item que neutraliza o stun da Arrow; o Aghanim's Scepter dele (não presente na amostra de 30 itens mais comprados, item situacional) faz o Requiem voltar e curar ele, então depois dele a troca de perto fica ainda mais arriscada pra Mirana
- como jogar: antes dos 10 min, puna todo momento que ele ficar parado farmando raze sem TP perto; não force luta depois do Black King Bar sem silence ou disable que atravesse imunidade; use Moonlight Shadow pra reposicionar o time antes do Requiem explodir
- fonte: pro_dados/mirana.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_requiem, nevermore_shadowraze1)

## Contra Dark Willow (dark_willow)

- placar: 45 vitórias em 97 partidas de Mirana contra Dark Willow, 46,4% (fonte: `pro_dados/mirana.json`)
- por que importa: quarto mais comum em pro (97 jogos) e rival direto de posição, pos4 de pick-off assim como Mirana, as duas competem pelo mesmo papel de achar o kill antes do nível 6 do time inimigo
- janelas: os dois saem de Boots parecido (Mirana 5,8 min, Dark Willow 5,4 min); dos 17 aos 22 min as itemizações colidem de novo, Eul's Scepter de Dark Willow sai aos 21,2 min contra o Eul's de Mirana aos 22,3 min, quase empatado, então quem pega o próprio item primeiro ganha o dispel/reposicionamento na próxima troca; o Aghanim's Shard dela (29,2 min, mediana tardia) é mais raro de acontecer que o jogo já estar decidido
- o que ele faz com você: Cursed Crown (CD 17-11s) stuna com atraso a área ao redor do alvo, então ela pode contra-stunar Mirana no meio do Leap; Bramble Maze cria uma zona de raízes que prende quem entrar, útil pra travar a fuga de Mirana depois de um Arrow errado
- o que você faz com ele: Sacred Arrow tem alcance (3000) bem maior que o de Cursed Crown, então Mirana pode abrir a troca de mais longe; o stun instantâneo da Arrow costuma vencer o delay do Cursed Crown se ela mirar primeiro
- itens que viram: Eul's Scepter dos dois lados define quem dispensa o stun do outro primeiro, item espelhado nessa dupla; o Aghanim's Shard de Dark Willow faz o Cursed Crown criar brambles ao redor do alvo mesmo com dispel, então depois dele a fuga de Mirana fica mais difícil mesmo com o Eul's
- como jogar: antes do nível 6, jogue o duelo de visão e pull como contra qualquer outro pos4 espelhado; ao decidir engajar, mire a Arrow fora do alcance do Cursed Crown; depois dos 20 min, não gaste o Eul's cedo demais, porque ele é o item que decide quem sai limpo da troca
- fonte: pro_dados/mirana.json; pro_dados/dark_willow.json; constants_abilities.json (dark_willow_cursed_crown, dark_willow_bramble_maze, mirana_arrow); api.opendota.com/api/constants/aghs_desc (Dark Willow shard)

## Contra Ember Spirit (ember_spirit)

- placar: 43 vitórias em 95 partidas de Mirana contra Ember Spirit, 45,3% (fonte: `pro_dados/mirana.json`)
- por que importa: quinto mais comum em pro (95 jogos) e um dos confrontos com desvantagem real pra Mirana; não tem lane em comum (ele é mid, gpm 558), mas é um alvo que ela tenta caçar e geralmente não consegue prender
- janelas: dos 9 aos 13 min Ember já tem Phase Boots (9,1 min) e Spirit Vessel (12,8 min), rodando rápido pelo mapa; o Fire Remnant não tem cooldown de verdade (0,5s por carga) desde cedo, então ele sempre tem uma saída pronta contra a Arrow; depois dos 25-31 min, com Aghanim's Shard (25,3 min) e Scepter (31,6 min), ele ganha mais cargas e alcance de remnant, ficando ainda mais difícil de prender numa luta cara a cara
- o que ele faz com você: Sleight of Fist (CD 13-7s) ataca todo mundo numa área e volta pro ponto de partida, dano rápido que já acontece antes de Mirana conseguir reagir com Starstorm; Fire Remnant permite reposicionar fora da linha da Arrow no meio do cast dela
- o que você faz com ele: a melhor janela é pegá-lo sem remnant disponível, logo depois de ele gastar uma carga pra escapar de outra luta; Starstorm ainda acerta ele em área mesmo que ele se desloque com o remnant, porque bate ao redor de Mirana
- itens que viram: o Aghanim's Scepter de Ember aumenta alcance, velocidade inicial e cargas máximas do Fire Remnant, o item que faz ele nunca ficar sem saída contra o pick-off de Mirana; Black King Bar dele (27,1 min) fecha a janela de stun da Arrow de vez
- como jogar: não gaste a Arrow sem saber quantos remnants ele tem plantados; procure pegá-lo logo após uma rotação, quando ele ainda não recarregou carga; depois do Black King Bar, trate ele como alvo de zonear, não de matar sozinha
- fonte: pro_dados/mirana.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_sleight_of_fist, ember_spirit_fire_remnant); api.opendota.com/api/constants/aghs_desc (Ember Spirit scepter)

## Contra Centaur Warrunner (centaur)

- placar: 44 vitórias em 93 partidas de Mirana contra Centaur Warrunner, 47,3% (fonte: `pro_dados/mirana.json`)
- por que importa: sexto mais comum em pro (93 jogos); Centaur é offlane (pos3), então a lane raramente é a mesma, mas ele é um dos iniciadores que mais cruza com uma Mirana roaming porque o Blink dele transforma qualquer gank dela em risco de virar pra cima do próprio time
- janelas: até os 12 min Centaur só tem Helm of Iron Will (4,8 min) e está fraco em HP, a melhor janela de Mirana pra punir; o Blink Dagger dele (19,6 min) é o divisor de águas, porque a partir daí Hoof Stomp vira iniciação global de luta; desde o early ele já tem Vanguard (8,5 min) e dos 18 aos 21 min completa Pipe (18,1 min) e Crimson Guard (21,5 min), ficando tanque demais pro dano de auto-ataque e Arrow sozinha resolverem
- o que ele faz com você: Hoof Stomp (CD 18-12s) stuna e dana em área depois de um breve wind-up, suficiente pra pegar Mirana se ela blinkar pra perto sem ver; Stampede dá velocidade de atropelamento pro time dele inteiro, incluindo atravessar o terreno que Mirana usa pra fugir
- o que você faz com ele: antes do Blink (19,6 min), a Arrow pune qualquer tentativa de Double Edge de perto, porque ele não tem como fechar distância rápido; depois do Blink, o alcance de 3000 da Arrow ainda permite abrir a luta antes dele iniciar
- itens que viram: Blink Dagger é o item mais decisivo do confronto, já que sem ele Centaur não ameaça ninguém à distância; o Aghanim's Shard dele (29,1 min) faz o Double Edge desacelerar quem é atingido e ainda dá força extra pro próprio Centaur por herói acertado, tornando a perseguição depois do stun mais perigosa pra Mirana fugir
- como jogar: antes dos 20 min, puna todo momento sem Blink disponível; depois do Blink, não ande sozinha perto do fog dele; priorize detectar o Pipe/Crimson Guard antes de contar com dano puro pra fechar o kill
- fonte: pro_dados/mirana.json; pro_dados/centaur.json; constants_abilities.json (centaur_hoof_stomp, centaur_stampede); api.opendota.com/api/constants/aghs_desc (Centaur shard)

## Contra Winter Wyvern (winter_wyvern)

- placar: 42 vitórias em 86 partidas de Mirana contra Winter Wyvern, 48,8% (fonte: `pro_dados/mirana.json`)
- por que importa: rival direto de posição, suporte de safelane na maior parte das partidas pro (790 de 951 em safelane nos patches 7.40-7.41, OpenDota explorer), sétimo mais comum em pro (86 jogos); as duas são suportes frágeis que dependem de pegar o disável primeiro
- janelas: os dois lados ficam de Boots cru por bastante tempo (Mirana 5,8 min, Winter Wyvern 6,3 min); o Blink Dagger de Winter Wyvern (23,0 min) chega perto do Eul's de Mirana (22,3 min), ou seja as duas melhoram mobilidade quase junto; o verdadeiro divisor é o nível 6 de cada uma, porque Winter's Curse (CD 100-80s) é devastador em grupo mas tem cooldown enorme comparado à Arrow (19-16s)
- o que ele faz com você: Winter's Curse prende um alvo no lugar e faz quem está perto atacar ele, virando o próprio time de Mirana contra ela se for pega sozinha; Cold Embrace (CD 24-15s) cura e bloqueia dano físico num aliado, podendo salvar quem Mirana tentou isolar com Arrow
- o que você faz com ele: Sacred Arrow acerta de mais longe que qualquer coisa do kit dela, então Mirana pode abrir ou fugir da troca primeiro; depois de usar o Curse, Winter Wyvern fica sem disable por mais de 80s, janela boa pra caçar ela de volta
- itens que viram: Blink Dagger de Winter Wyvern é o item que permite o Curse pegar alguém isolado; o Aghanim's Scepter dela (não presente na amostra de 30 itens mais comprados, item situacional) vira Arctic Burn em toggle que dá mais velocidade, deixando-a mais difícil de alcançar quando sai
- como jogar: antes do nível 6, jogue vendo ward e pull como qualquer duelo pos5 espelhado; depois que ela usar o Curse, puna a janela de 80-100s sem disable; guarde o Eul's ou Leap pra não ser o alvo isolado quando ela tiver mana pro combo
- fonte: pro_dados/mirana.json; pro_dados/winter_wyvern.json; constants_abilities.json (winter_wyvern_winters_curse, winter_wyvern_cold_embrace); api.opendota.com/api/constants/aghs_desc (Winter Wyvern scepter); OpenDota explorer (lane_role, partidas de liga 7.40-7.41)

## Contra Clockwerk (rattletrap)

- placar: 42 vitórias em 79 partidas de Mirana contra Clockwerk, 53,2% (fonte: `pro_dados/mirana.json`)
- por que importa: rival de posição (pos4/5), um dos mais comuns em pro (79 jogos); os dois competem por quem rota mais rápido e pega o primeiro pick-off do jogo
- janelas: Clockwerk sai de Tranquil Boots aos 8,5 min, mais cedo que o Arcane Boots de Mirana (12,6 min), então ele costuma chegar primeiro nas rotações iniciais; o Hookshot dele melhora de nível com o tempo (CD caindo de 60 pra 30s), ficando uma ameaça constante de pegar Mirana no meio de um Leap de fuga; depois dos 24-30 min, o Aghanim's Shard dele (30,0 min) dá jetpack pra voar por cima de rio e trocar de lane rápido, competindo direto com a mobilidade dela
- o que ele faz com você: Hookshot (CD caindo até 30s) lança Clockwerk até Mirana à distância e estuna todo mundo num raio ao redor dela no impacto, cancelando o Leap antes dela se afastar; Power Cogs (CD 21-15s) forma um anel que prende quem estiver perto, útil pra travar ela no meio de uma troca
- o que você faz com ele: Sacred Arrow (alcance 3000) acerta antes do Hookshot conseguir ser lançado na maior parte das distâncias; Starstorm castigada em área pune Clockwerk se ele ficar parado usando Power Cogs perto demais
- itens que viram: o Aghanim's Scepter de Clockwerk aumenta raio e duração de quase todas as magias dele, inclusive o stun do Hookshot, tornando a captura de Mirana mais confiável depois que ele fecha; o Shard dá jetpack, deixando-o mais rápido pra fugir do contra-ataque dela
- como jogar: evite andar em linha reta e previsível no early, porque é exatamente isso que o Hookshot pune; ao ver ele sem Hookshot disponível, é a hora de engajar com Arrow; depois do Scepter dele, jogue mais em grupo pra não ser pega isolada
- fonte: pro_dados/mirana.json; pro_dados/rattletrap.json; constants_abilities.json (rattletrap_hookshot, rattletrap_power_cogs); api.opendota.com/api/constants/aghs_desc (Clockwerk scepter e shard)

## Contra Ursa (ursa)

- placar: 30 vitórias em 40 partidas de Mirana contra Ursa, 75,0%, a maior vantagem da lista com amostra de 30+ (fonte: `pro_dados/mirana.json`)
- por que importa: maior vantagem de Mirana com amostra confiável; não tem lane em comum (Ursa é carry safelane puro, gpm 624), mas é exatamente o tipo de alvo que ela foi feita pra caçar, um carry móvel que se engaja sozinho e não tem escape no kit
- janelas: até os 13-14 min Ursa só tem Battle Fury (13,7 min), puro farm sem ameaça de duelo; o Blink Dagger dele (16,8 min) é quando ele começa a tentar isolar alvos, mas antes do Black King Bar (24,4 min) ele ainda é vulnerável a stun; depois dos 24-27 min, com BKB e Basher (22,5 min) fechados, ele fica quase impossível de segurar numa troca direta
- o que ele faz com você: Overpower (CD 12-9s) dá várias atacadas rápidas que destroem a vida baixa de Mirana se ele conseguir chegar perto; Enrage (CD 60-30s) dá dispel forte e redução de dano, limpando o stun da Arrow se ele já estiver enrajado
- o que você faz com ele: antes do Black King Bar, Sacred Arrow seguida de Leap cancela o engajamento dele, porque Ursa não tem nenhum jump ou blink próprio no kit base; Starstorm já corta uma fatia boa da vida dele se ele estiver farmando perto
- itens que viram: Black King Bar é o item que decide o confronto, porque sem ele qualquer stun de longe neutraliza o Overpower; o Aghanim's Shard de Ursa aplica Fury Swipes extra pelo Earthshock, mas isso só importa depois que ele já sobreviveu à fase vulnerável
- como jogar: antes dos 20-24 min, puna todo momento que ele aparecer sem Black King Bar disponível; depois do BKB dele, pare de tentar stunar sozinha e jogue pra zonear com visão; guarde Leap pra não ficar parada no alcance do Overpower
- fonte: pro_dados/mirana.json; pro_dados/ursa.json; constants_abilities.json (ursa_overpower, ursa_enrage, mirana_arrow); api.opendota.com/api/constants/aghs_desc (Ursa shard)

## Contra Storm Spirit (storm_spirit)

- placar: 51 vitórias em 72 partidas de Mirana contra Storm Spirit, 70,8%, segunda maior vantagem da lista (fonte: `pro_dados/mirana.json`)
- por que importa: grande vantagem com amostra robusta (72 jogos); sem lane em comum (ele é mid puro), mas é o tipo de meia-lane móvel que ela precisa conseguir punir à distância pra justificar o roam dela
- janelas: Storm sai de Soul Ring e Boots cedo (4,7-6,1 min) e já está farmando com Ball Lightning; Kaya and Sange (20,1 min) é o power spike real dele, dano mágico mais sustain; antes do Black King Bar (26,1 min), qualquer stun de longe cancela o combo dele; durante o Ball Lightning ele não pode ser atingido por quase nada, incluindo a Arrow, então ela só acerta antes dele ativar ou assim que ele aterrissa
- o que ele faz com você: Electric Vortex (CD 20-14s) puxa Mirana pra perto dele, cancelando a distância que ela depende pra jogar com segurança; Static Remnant (CD 3,5s) bate dano em área se Mirana ficar parada perto
- o que você faz com ele: a jogada é mirar a Arrow no momento exato antes dele ativar o Ball Lightning ou no instante que ele aterrissa, porque durante o trajeto ele está invulnerável; Starstorm pune se ele estiver parado farmando perto de uma rota de jungle
- itens que viram: Black King Bar de Storm Spirit fecha a janela de stun da Arrow de vez, igual com Shadow Fiend; Aghanim's Scepter dele faz Electric Vortex puxar todo mundo ao redor, o que torna perigoso Mirana se aproximar demais pra tentar a Arrow de curta distância
- como jogar: não gaste Arrow no meio do voo de Ball Lightning, é desperdício garantido; procure ele parado farmando ou no instante de pouso; depois do Black King Bar dele, jogue pra zonear em vez de tentar o pick-off direto
- fonte: pro_dados/mirana.json; pro_dados/storm_spirit.json; constants_abilities.json (storm_spirit_ball_lightning, storm_spirit_electric_vortex); liquipedia.net/dota2/Storm_Spirit

## Contra Slardar (slardar)

- placar: 45 vitórias em 67 partidas de Mirana contra Slardar, 67,2%, terceira maior vantagem da lista (fonte: `pro_dados/mirana.json`)
- por que importa: vantagem grande com amostra sólida (67 jogos); Slardar costuma jogar offlane ou core, sem lane fixa em comum, mas o Amplify Damage dele é uma das poucas respostas diretas ao Moonlight Shadow de Mirana, então o confronto importa quando os times se encontram
- janelas: o Aghanim's Shard de Slardar sai cedo pros padrões da lista, 17,2 min, dando Corrosive Haze extra no Slithereen Crush; o Blink Dagger dele (13,3 min) ainda é mais cedo, momento em que ele começa a iniciar; apesar do spike cedo, Black King Bar só fecha aos 25,1 min, então entre os 13 e os 25 min ele ainda é vulnerável a stun de longe
- o que ele faz com você: Corrosive Haze (CD 5s) dá true sight e revela invisibilidade, cortando o esconderijo do Moonlight Shadow se Mirana estiver no alcance; Slithereen Crush (CD 7s) stuna em área depois do Blink, podendo pegar Mirana que tentou se aproximar demais
- o que você faz com ele: antes do Black King Bar, Sacred Arrow cancela a iniciação dele antes do Blink acontecer; depois de usar o Corrosive Haze, ele fica exposto fisicamente, boa janela pra focar ele de volta
- itens que viram: o Aghanim's Shard de Slardar faz a Slithereen Crush também aplicar Corrosive Haze (a mesma habilidade que reduz armadura e dá true sight), tornando a luta em grupo mais perigosa pro time de Mirana; Black King Bar dele neutraliza o stun da Arrow só depois dos 25 min
- como jogar: antes dos 25 min, trate Slardar como alvo prioritário de pick-off, já que ele não tem Black King Bar ainda; depois de ver o Corrosive Haze usado em alguém, não conte com Moonlight Shadow pra esconder esse aliado; evite ficar visível demais perto dele depois do Shard, porque o true sight acaba com o jogo de visão
- fonte: pro_dados/mirana.json; pro_dados/slardar.json; constants_abilities.json (slardar_amplify_damage, slardar_slithereen_crush); api.opendota.com/api/constants/aghs_desc (Slardar shard)

## Contra Sniper (sniper)

- placar: 14 vitórias em 35 partidas de Mirana contra Sniper, 40,0%, a maior desvantagem da lista com amostra de 30+ (fonte: `pro_dados/mirana.json`)
- por que importa: pior matchup de Mirana com amostra confiável; sem lane em comum (Sniper é carry/mid de longo alcance), mas é o oponente clássico de "quem vê primeiro, mata primeiro" contra uma suporte frágil que também joga à distância
- janelas: Sniper sai de Power Treads aos 5,9 min e já farma rápido; Maelstrom (12,5 min) e depois Hurricane Pike (23,4 min) ou Mjollnir (19,0 min) dão o alcance e o DPS que fazem dele perigoso de longe antes mesmo da Mirana chegar perto; o Aghanim's Shard dele (24,8 min) dá a ele a habilidade nova Concussive Grenade, que machuca em área, desarma e aplica knockback, cortando a fuga dela ainda mais
- o que ele faz com você: Assassinate (ultimate, CD 20-10s) mira de qualquer distância do mapa e mini-stuna no impacto, matando uma Mirana sem HP alto se ela for vista; Shrapnel (sem CD, com cargas) revela e zoneia área, tirando o esconderijo que ela precisa pra se aproximar
- o que você faz com ele: a Sacred Arrow ainda tem mais alcance bruto (3000) que o ataque básico dele, então a única jogada é abrir vendo ele primeiro, com ward ou Moonlight Shadow, antes dele te ver; depois do stun, Leap fecha rápido pra matar antes do alcance dele resolver de novo
- itens que viram: Aghanim's Scepter de Sniper faz o Assassinate disparar mais rápido e stunar, o que torna reagir a ele quase impossível se ele já tiver visão; o Aghanim's Shard de Mirana dá 3 cargas extra de Arrow enquanto o Leap está ativo, então empilhar Leap + Shard é a única forma de sobreviver chegando perto rápido o bastante
- como jogar: nunca ande visível no alcance dele sem saber se o Assassinate está disponível; priorize smoke e flanco em vez de abordagem direta; se tiver o Aghanim's Shard, use o combo de Leap com cargas extra pra fechar distância antes dele reagir
- fonte: pro_dados/mirana.json; pro_dados/sniper.json; constants_abilities.json (sniper_assassinate, sniper_shrapnel, mirana_leap); api.opendota.com/api/constants/aghs_desc (Sniper scepter, Mirana shard)

## Contra Zeus (zuus)

- placar: 17 vitórias em 40 partidas de Mirana contra Zeus, 42,5%, segunda maior desvantagem da lista (fonte: `pro_dados/mirana.json`)
- por que importa: desvantagem clara com amostra sólida; sem lane em comum (Zeus é mid de nuke global), mas o kit dele ignora completamente o jogo de visão que Mirana depende pra roaming, o que neutraliza boa parte do valor dela
- janelas: Zeus sai de Arcane Boots cedo (9,7 min) porque o custo de mana do kit dele é baixo; Aghanim's Shard dele (16,1 min) já é bem cedo e dá ataques com Arc Lightning; o Aghanim's Scepter (23,3 min) cria uma nuvem que lança Lightning Bolt sozinha, aumentando ainda mais o poke sem precisar de visão direta
- o que ele faz com você: Thundergod's Wrath (ultimate, CD 130s) dana todos os heróis inimigos não importa onde estejam no mapa, incluindo Mirana escondida fazendo Moonlight Shadow; Static Field dispara dano extra a cada magia ou ataque que ele acerta, o que soma rápido contra o HP baixo dela
- o que você faz com ele: a melhor abordagem é evitar ficar com vida baixa quando Zeus está em nível 6, porque o ultimate dele não depende de visão; fora disso, Sacred Arrow ainda pune ele parado farmando sem fugir, já que ele não tem blink nem dash
- itens que viram: Aghanim's Scepter de Zeus cria uma nuvem que ataca sozinha à distância, aumentando a pressão de poke sem exposição; não existe item de Mirana que anule o alcance global do Thundergod's Wrath, então a resposta é itens de vida e evitar ficar no gatilho de HP baixo
- como jogar: controle o HP do time sempre que Zeus estiver em nível 6 ou mais; evite depender só de Moonlight Shadow pra esconder um aliado baixo de vida perto do ultimate dele; puna ele só quando estiver exposto farmando sem backup
- fonte: pro_dados/mirana.json; pro_dados/zuus.json; constants_abilities.json (zuus_thundergods_wrath, zuus_static_field); api.opendota.com/api/constants/aghs_desc (Zeus scepter)

## Contra Tidehunter (tidehunter)

- placar: 27 vitórias em 62 partidas de Mirana contra Tidehunter, 43,5%, terceira maior desvantagem da lista com amostra de 30+ (fonte: `pro_dados/mirana.json`)
- por que importa: desvantagem com amostra robusta (62 jogos); Tidehunter é offlane/core, sem lane fixa em comum, mas o Kraken Shell dele literalmente apaga o stun da Arrow quando ativa, e o Ravage dele pune justamente o momento em que o time de Mirana se agrupa pra rotear com ela
- janelas: Tidehunter sai de Phase Boots e Soul Ring cedo (7,8 e 8,5 min); o Aghanim's Shard dele (23,1 min, "Dead in the Water") e o Blink Dagger (21,2 min) chegam quase juntos, por volta dos 21-23 min, momento em que ele vira ameaça de prender alguém à distância; Ravage (CD 150-140s) é raro mas decide luta inteira quando acontece
- o que ele faz com você: Kraken Shell (passivo) remove efeitos negativos quando o dano acumulado cruza um limiar, podendo limpar o stun da Sacred Arrow no meio da troca; Dead in the Water (Shard) prende um alvo com uma âncora, cortando o Leap de fuga de Mirana se ela for a presa
- o que você faz com ele: a Arrow ainda funciona bem antes do Kraken Shell acumular dano suficiente pra disparar, ou seja golpear logo no início da troca; Starstorm em área pune ele se estiver perto de outros heróis do time dele antes do Ravage sair
- itens que viram: Kraken Shell é o item/passivo que mais atrapalha Mirana aqui, porque limpa justamente o tipo de debuff que ela aplica; Aghanim's Scepter de Tidehunter transforma o Gush numa onda que acerta vários alvos em linha, reduzindo ainda mais a chance de Mirana escapar sozinha de uma emboscada
- como jogar: ataque Tidehunter antes dele tomar dano suficiente pra disparar o Kraken Shell; evite ficar agrupada perto demais quando ele tiver nível 6 pro risco do Ravage; se ele tiver o Shard, trate "Dead in the Water" como um stun de fato e jogue pra não ficar isolada nesse raio
- fonte: pro_dados/mirana.json; pro_dados/tidehunter.json; constants_abilities.json (tidehunter_kraken_shell, tidehunter_ravage); api.opendota.com/api/constants/aghs_desc (Tidehunter shard e scepter)
