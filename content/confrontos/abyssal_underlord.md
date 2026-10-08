---
id: confrontos-abyssal_underlord
heroi: Underlord
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/abyssal_underlord.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/mars.json
- dota-hub-conteudo-novo/pro_dados/tidehunter.json
- dota-hub-conteudo-novo/pro_dados/centaur.json
- dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- dota-hub-conteudo-novo/pro_dados/abaddon.json
- dota-hub-conteudo-novo/pro_dados/treant.json
- dota-hub-conteudo-novo/pro_dados/necrolyte.json
- dota-hub-conteudo-novo/pro_dados/drow_ranger.json
- dota-hub-conteudo-novo/pro_dados/terrorblade.json
- dota-hub-conteudo-novo/pro_dados/morphling.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Contra Tusk (tusk)
- placar: Underlord venceu 135 de 265 em pro, 50,9%. Fonte: `pro_dados/abyssal_underlord.json` (confrontos, hero_id 100).
- por que importa: é o confronto com mais jogos registrados na amostra inteira (265). Tusk é pos 4/5, então o que acontece aqui normalmente é ele rotacionando pra lane de 3 pra ajudar a travar o Underlord.
- janelas: até 8 min os dois estão na fase de sustain (Underlord com Soul Ring aos 7:12, mediana de 1676 jogos; Tusk com Tranquil Boots aos 8:24, de 1618). O Tusk só abre o combo de verdade depois do Blink Dagger, mediana 19:00 em 2655 jogos (90% das partidas compram). Depois dos 23:54, quando o Underlord fecha o Aghanim's Scepter (62,8% de taxa de compra em pro), a Pit de Malice dupla nos dois portais vira mais forte que o combo de iniciação do Tusk.
- o que ele faz com você: Snowball junta aliados e estoura dano crescente mais stun, e o Walrus Punch (nível 6+) é um crítico de até 300% que joga o alvo pro ar por 1s, suficiente pra cancelar uma Pit de Malice ou Firestorm no meio do cast.
- o que você faz com ele: Firestorm queima 1,5% a 3% do HP máximo por segundo, e isso pesa justamente contra builds de HP alto que o Tusk costuma fazer; a Pit de Malice (root de até 1,8s por aplicação, 12s de duração total) trava ele antes do combo de Snowball se o Underlord colocar a armadilha preventivamente, sem precisar reagir ao blink dele.
- itens que viram: Aghanim's Scepter transforma a ulti em duas Pit de Malice simultâneas nos dois portais, então um portal em cima do time do Tusk já nasce travando quem está lá. Shard do Underlord deixa a Firestorm seguir ele mesmo, segurando a queima em cima mesmo se o Tusk tentar puxar ele pra fora da área com Tag Team.
- como jogar: na lane, evite ficar parado tomando o combo completo de Snowball mais Walrus Punch, use Pit de Malice assim que ele se aproximar do raio de 325 que a Snowball usa pra juntar aliados. Depois do Scepter, jogue Fiend's Gate com um portal perto do Tusk pra prender ele antes que ele consiga juntar aliados pro Snowball.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/tusk.json`; `constants_abilities.json` (tusk_snowball, tusk_walrus_punch, tusk_ice_shards, abyssal_underlord_firestorm, abyssal_underlord_pit_of_malice); `aghs_desc` (abyssal_underlord, tusk).

## Contra Shadow Fiend (nevermore)
- placar: Underlord venceu 118 de 260 em pro, 45,4%. Fonte: `pro_dados/abyssal_underlord.json` (hero_id 11).
- por que importa: segundo maior volume de jogos (260) entre os confrontos do Underlord. No 7.41 os pros jogam Shadow Fiend sobretudo como carry de safelane, não mid. Quase nunca lana com o Underlord, mas o burst de Requiem of Souls é a maior ameaça de kill solo contra um offlane que fica sozinho puxando onda ou farmando camp.
- janelas: até 6 min o Shadow Fiend já fechou Power Treads (5:54, mediana de 3701 jogos, 93% de compra) e está puxando lane com Shadowraze. O Underlord só tem Soul Ring e boots prontos por volta dos 7-8 min. O Black King Bar do SF sai aos 25:12 (1554 jogos, 39%), bem perto do Scepter do Underlord aos 23:54, então nessa janela o combo de root do Underlord ainda funciona porque o BKB dele não bloqueia a Pit (ela não é mágica em si, é root físico de unidade).
- o que ele faz com você: Necromastery acumula almas a cada kill (4 por herói morto) e cada Shadowraze ganha 3 de dano bônus por alma. Depois de abater um ou dois aliados, Requiem of Souls solta linhas de até 160 de dano cada (nível 3) saindo da posição dele, então ficar perto do Shadow Fiend depois que ele farmou kills é risco de morte instantânea pro Underlord, que não tem resistência mágica bônus no kit.
- o que você faz com ele: a Atrophy Aura reduz entre 8% e 32% do dano base dos inimigos a até 900 de distância (passiva, nem precisa acertar feitiço), o que corta o dano de auto-attack do SF se ele tentar farmar perto do Underlord. Mas isso não evita o nuke mágico do Requiem, então a defesa real é distância, não dano reduzido.
- itens que viram: Black King Bar do Shadow Fiend não impede a Pit de Malice (ela não tem a tag de magia que o BKB bloqueia), então mesmo com BKB ativo ele pode ser preso. Do lado do Underlord, nenhum item específico resolve contra o burst do Requiem, é mais questão de posicionamento.
- como jogar: evite ficar sozinho perto da mid lane do SF depois que ele já tiver 2+ kills. Use o alcance de 675 da Pit de Malice pra travar ele de longe se ele vier puxar sua lane, e force ele a gastar Shadowraze cedo pra não acumular stack de dano bônus.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/nevermore.json`; `constants_abilities.json` (nevermore_requiem, nevermore_necromastery, nevermore_shadowraze1, abyssal_underlord_atrophy_aura).

## Contra Hoodwink (hoodwink)
- placar: Underlord venceu 90 de 222 em pro, 40,5%. Fonte: `pro_dados/abyssal_underlord.json` (hero_id 123).
- por que importa: terceiro maior volume (222 jogos). Hoodwink é suporte 4/5 que costuma vir junto na lane de 3 pra ajudar a segurar o offlane, e o kit dela de root em árvore disputa área diretamente com Pit of Malice.
- janelas: Arcane Boots da Hoodwink sai aos 12:12 (2147 jogos), ainda na fase de laning. O Sharpshooter (nível 6+) é o ponto de virada, um canalização de até 3s que acerta até 1350 de dano em alvo único a 3000 de alcance, mas com cooldown de 45s fixo. O Aghanim's Shard dela sai aos 23:48 (1224 jogos, 42%) e dá um bumerangue que amplifica dano mágico recebido, bem na mesma janela em que o Underlord fecha o Scepter (23:54).
- o que ele faz com você: Bushwhack prende perto de árvore por até 2,1s com dano ao longo do tempo, e o Sharpshooter aplica Break (quebra habilidades passivas) junto com lentidão de até 50%. O Break desliga a Atrophy Aura do Underlord por até 5s, cortando o dano bônus e a redução de dano dele bem no momento que ele mais precisa.
- o que você faz com ele: Hoodwink é um dos alvos mais fáceis pra Pit of Malice porque tem pouco HP, então mesmo as ondas de Firestorm (até 105 de dano por onda, 6 ondas) já ameaçam matar ela sozinha se ela ficar presa. A Scurry (mobilidade+fase) dela tem cooldown de recarga de 12 a 30s por carga, então fora dessa janela ela não tem saída rápida da Pit.
- itens que viram: o Shard da Hoodwink (bumerangue com debuff de vulnerabilidade a dano mágico) faz a Firestorm bater mais forte nela depois de acertado, então vale tentar fechar o combo logo depois que ela usar esse item nela mesma como defesa.
- como jogar: não force a troca sozinho dentro do alcance de 3000 do Sharpshooter sem cobertura. Prefira empurrar ela pra dentro da Pit de Malice assim que a Scurry estiver de cooldown, já que sem a mobilidade dela a troca é toda sua.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/hoodwink.json`; `constants_abilities.json` (hoodwink_bushwhack, hoodwink_sharpshooter, hoodwink_scurry, abyssal_underlord_firestorm, abyssal_underlord_atrophy_aura); `aghs_desc` (hoodwink).

## Contra Jakiro (jakiro)
- placar: Underlord venceu 114 de 220 em pro, 51,8%. Fonte: `pro_dados/abyssal_underlord.json` (hero_id 64).
- por que importa: quarto maior volume (220 jogos). Jakiro é suporte 5 que frequentemente segura a lane de 3, e tanto Ice Path quanto Macropyre competem de área com o combo de root do Underlord, então quem controla o terreno primeiro ganha a troca.
- janelas: Arcane Boots do Jakiro sai aos 11:42 (2278 jogos), ainda em laning. O Macropyre só destrava no nível 6 e é relativamente fraco de início (cooldown de 90s no nível 1), então até lá a vantagem de poke é do Underlord, que já está com Firestorm pronta desde o nível 1. Force Staff do Jakiro sai tarde, aos 26:12 (817 jogos), já na fase de teamfight consolidada.
- o que ele faz com você: Ice Path cria um caminho de gelo que atordoa por até 2s qualquer um que toque, boa pra travar o Underlord antes dele fechar Pit of Malice. Macropyre causa até 200 de dano por segundo numa faixa de 10s, dano mágico que a Atrophy Aura do Underlord não reduz (ela só reduz dano base de ataque).
- o que você faz com ele: a Firestorm sozinha (até 105 por onda, 6 ondas em 7s, mais queima de até 3% do HP máximo por segundo) sai mais cedo que qualquer coisa do Jakiro e vence a troca de poke na lane antes do nível 6, porque o Dual Breath dele é a única ferramenta de dano que ele tem até lá.
- itens que viram: nenhum item do Jakiro muda fundamentalmente essa troca, o duelo é mais sobre quem acerta a área primeiro. Do lado do Underlord, o Aghanim's Shard (Firestorm seguindo um aliado) ajuda a manter a queima em cima do time mesmo se o Jakiro tentar empurrar o grupo pra fora da área com Macropyre.
- como jogar: pegue o combo de poke cedo, antes do nível 6 do Jakiro, pra tirar vantagem de lane antes da Macropyre existir. Depois disso, não entre em luta junto com ele sem saber onde vai cair a faixa de fogo, porque ela sozinha compete dano por dano com a sua Firestorm.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/jakiro.json`; `constants_abilities.json` (jakiro_macropyre, jakiro_ice_path, jakiro_dual_breath, abyssal_underlord_firestorm, abyssal_underlord_atrophy_aura).

## Contra Ember Spirit (ember_spirit)
- placar: Underlord venceu 106 de 212 em pro, 50,0%. Fonte: `pro_dados/abyssal_underlord.json` (hero_id 106).
- por que importa: quinto maior volume (212 jogos) e um dos mids mais soltos do patch. A mobilidade do Fire Remnant faz ele ignorar completamente a necessidade de lane em comum, ele pode flanquear o offlane a qualquer momento e sumir antes do combo de root fechar.
- janelas: Phase Boots do Ember saem aos 9:06 (2173 jogos). O item mais comprado dele de longe é o Aghanim's Shard, aos 25:18 (1882 jogos, 70% de taxa, o mais alto entre os itens finalizados dele), que recupera carga de Fire Remnant quando um herói inimigo morre perto, deixando ele ainda mais móvel no meio-fim de jogo. O Scepter dele só sai aos 31:36 (1372 jogos, 51%), já no fim de jogo.
- o que ele faz com você: Sleight of Fist é um dash de ataque em área (até 550 de raio no nível 4) com bônus de dano contra heróis, cast range de 650. Fire Remnant dá a ele uma saída instantânea que atravessa a Pit de Malice sem ficar preso, já que ele se teleporta pro remnant em vez de andar pela área.
- o que você faz com ele: a Firestorm queima percentual de HP máximo, e o Ember Spirit tem HP relativamente baixo pro tanto de dano que precisa receber pra morrer, então a queima por si só já ameaça ele numa troca prolongada. Se o Underlord conseguir prender ele num momento sem Remnant disponível (cooldown de recarga de cada carga é de 35s), a Pit segura ele de verdade.
- itens que viram: o próprio Aghanim's Shard do Ember (recarrega Fire Remnant com kill perto) significa que depois que o time dele começa a abater gente, ele fica com mobilidade quase infinita, então o combo de root do Underlord precisa acontecer antes disso, não depois.
- como jogar: tente iniciar em cima do Ember Spirit quando ele não tiver Fire Remnant plantado por perto. Depois que ele tiver o Shard e o time dele estiver abatendo gente, não vale a pena perseguir, foque em segurar território com Firestorm em vez de caçar.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/ember_spirit.json`; `constants_abilities.json` (ember_spirit_sleight_of_fist, ember_spirit_fire_remnant, abyssal_underlord_firestorm, abyssal_underlord_pit_of_malice); `aghs_desc` (ember_spirit).

## Contra Tiny (tiny)
- placar: Underlord venceu 96 de 199 em pro, 48,2%. Fonte: `pro_dados/abyssal_underlord.json` (hero_id 19).
- por que importa: sexto maior volume (199 jogos). Tiny é carry 1 clássico mas também pega offlane às vezes, e mesmo sem lane em comum o combo Avalanche mais Toss é um dos maiores riscos de kill em grupo contra um Underlord parado lançando Pit.
- janelas: Tiny mistura Power Treads (6:06, mas só 45% das partidas, muita gente vai de bota crua com Grow) com Blink Dagger aos 15:54 (2546 jogos, 81%), que é o item que destrava o combo de verdade. O Black King Bar dele sai aos 26:42 (1148 jogos, 37%), logo depois do Scepter do Underlord (23:54).
- o que ele faz com você: Avalanche atordoa em pancadas por 1,5s de duração total com até 360 de dano, e o Toss (grab radius 300) joga um aliado ou inimigo em cima do alvo causando mais até 360. O combo completo chega perto de 700-800 de dano mais quase 1,5s de controle, o suficiente pra abrir o Underlord antes dele reagir se ele for pego sem Pit de Malice disponível.
- o que você faz com ele: o cast range da Pit de Malice (675) é maior que o grab radius do Toss (300) e próximo do alcance máximo dele (até 1100 no nível 4), então o Underlord consegue prender o Tiny de longe antes dele conseguir fechar o combo corpo a corpo. A tankiness natural do Underlord (HP alto, armadura por itens de força) também segura melhor o burst do combo do que a maioria dos heróis.
- itens que viram: o Black King Bar do Tiny não ajuda contra a Pit de Malice (ela não é mágica), então mesmo com BKB ativo ele fica preso se for pego na área.
- como jogar: mantenha distância de 1100+ do Tiny quando ele tiver Blink pronto, porque isso é o alcance total do combo dele. Se o time dele tentar iniciar em cima do Underlord com Avalanche, jogue Pit de Malice reativamente assim que possível pra travar quem entrou.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/tiny.json`; `constants_abilities.json` (tiny_avalanche, tiny_toss, abyssal_underlord_pit_of_malice).

## Contra Mars (mars)
- placar: Underlord venceu 110 de 198 em pro, 55,6%. Fonte: `pro_dados/abyssal_underlord.json` (hero_id 129). Maior confronto pos 3 contra pos 3 da amostra.
- por que importa: offlane contra offlane mais comum do patch, os dois disputam a mesma lane e o mesmo papel de iniciador tanque, com builds quase idênticas no timing.
- janelas: os dois saem de Soul Ring quase junto (Underlord 7:12, Mars 7:54) e de Phase Boots também (Mars 8:30, Underlord via Power Treads 7:42, build mista entre os dois). O Aghanim's Shard do Mars sai aos 21:30 em 1743 jogos (75% de taxa de compra, item quase obrigatório pra ele), bem perto do Scepter do Underlord (23:54), então essa janela dos 21-24 min é onde os dois ficam mais fortes ao mesmo tempo.
- o que ele faz com você: Spear of Mars empala o primeiro herói que acerta contra árvore, prédio ou penhasco, parando o Underlord no lugar por até 2,2s. A Arena of Blood (ult) cria um anel que bloqueia ataques e movimento de fora, e o Bulwark reduz de 40% a 70% o dano físico recebido pela frente, cortando boa parte do dano de auto-attack que a Atrophy Aura dá ao Underlord.
- o que você faz com ele: a Pit of Malice (raio 400) é menor que a Arena of Blood do Mars (raio 550), mas sai na hora, enquanto a Arena ainda precisa de um instante pra se formar, então o Underlord consegue negar o posicionamento do combo de Mars se travar ele antes da ultimate acabar de formar. A queima percentual da Firestorm também ignora a redução de dano físico do Bulwark, já que é dano mágico puro.
- itens que viram: o Shard do Mars (Spear empalando até 2 heróis com rastro de fogo) aumenta o alcance de controle dele em grupo, então depois que ele tiver isso o Underlord precisa respeitar mais distância antes de avançar.
- como jogar: na lane, dispute os camps de jungle e a wave com Firestorm, que sai mais cedo que qualquer coisa do Mars. Em grupo, evite ficar alinhado numa linha reta onde a Spear pode te empalar contra terreno, e tente travar ele com Pit antes da Arena of Blood formar.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/mars.json`; `constants_abilities.json` (mars_spear, mars_bulwark, mars_arena_of_blood, abyssal_underlord_pit_of_malice, abyssal_underlord_firestorm); `aghs_desc` (mars).

## Contra Tidehunter (tidehunter)
- placar: Underlord venceu 85 de 174 em pro, 48,9%. Fonte: `pro_dados/abyssal_underlord.json` (hero_id 29).
- por que importa: outro offlane direto disputando a mesma lane e o mesmo papel de tanque iniciador. Kraken Shell e Ravage negam boa parte do combo de root do Underlord, então quem estoura o combo primeiro ganha a troca em grupo.
- janelas: builds quase idênticas no early (Tide com Phase Boots 7:48 e Soul Ring 8:30, Underlord com Power Treads 7:42 e Soul Ring 7:12). O Aghanim's Scepter do Tidehunter sai aos 22:18 (1310 jogos, 53%) quase junto com o do Underlord (23:54), e o Blink dele aos 21:12 é o que destrava o combo de Ravage de verdade.
- o que ele faz com você: Ravage é um stun em área de 1250 de raio com até 475 de dano, mas é cast point zero e alcance zero, ele precisa estar no meio do grupo pra acertar. Gush reduz 3 a 6 de armadura e desacelera 40%, facilitando o time dele fechar em cima do Underlord depois.
- o que você faz com ele: a Kraken Shell do Tide é um dispel forte automático quando ele cruza um limiar de dano (entre 450 e 600 conforme o nível), o que significa que a Pit of Malice sozinha pode não segurar ele se o time do Underlord não aplicar dano junto, porque esse limiar limpa o root. Em compensação, a Firestorm bate em área antes do Tide conseguir chegar perto o bastante pra Ravagear, cortando a aproximação dele.
- itens que viram: o Shard do Tidehunter (âncora que prende um herói numa coleira, precisa de 4 ataques pra destruir) é defensivo contra perseguição, então se o Underlord for caçar ele sozinho depois disso, pode ficar preso em vez de prender.
- como jogar: mantenha distância do Tide quando ele tiver Blink pronto, porque Ravage só funciona em cima de você. Se for travar ele com Pit of Malice, traga dano junto pra estourar o limiar da Kraken Shell antes dela limpar o root.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/tidehunter.json`; `constants_abilities.json` (tidehunter_ravage, tidehunter_kraken_shell, tidehunter_gush, abyssal_underlord_pit_of_malice, abyssal_underlord_firestorm); `aghs_desc` (tidehunter).

## Contra Centaur Warrunner (centaur)
- placar: Underlord venceu 72 de 158 em pro, 45,6%. Fonte: `pro_dados/abyssal_underlord.json` (hero_id 96).
- por que importa: terceiro offlane contra offlane mais comum da amostra (158 jogos). Os dois são tanques de força alta disputando iniciação, e o Stampede do Centaur é uma das poucas ferramentas que furam a área de controle do Underlord sem ficar preso nela.
- janelas: o Centaur vai por um caminho de sustain diferente do Underlord, Helm of Iron Will cedo (4:48) e depois Vanguard (8:30) em vez de Soul Ring. O Blink dele sai aos 19:36 (1741 jogos). O Pipe of Insight do Centaur (18:06) e o Crimson Guard (21:30) são itens que bloqueiam justamente o tipo de dano físico em rajada que a Atrophy Aura do Underlord dá.
- o que ele faz com você: Stampede faz o time dele atravessar unidades em velocidade máxima, o que significa que não é travado pela Pit of Malice do jeito que uma iniciação normal seria. Double Edge causa dano baseado em 60% a 150% da força do Centaur, que é um número alto porque os dois são heróis de força pura, então a troca corpo a corpo favorece quem tiver mais HP no momento.
- o que você faz com ele: a Firestorm (queima percentual de HP máximo) é um dos poucos tipos de dano que ignora completamente a redução de dano físico que o Crimson Guard e o Bulwark dele dão, então ela é a ferramenta certa pra desgastar um Centaur bem itemizado. A Pit de Malice ainda segura ele fora da janela de Stampede (cooldown de 90 a 100s), que é quando ele realmente precisa dela pra iniciar.
- itens que viram: Crimson Guard do Centaur bloqueia uma fatia do dano em rajada que viria de um combo físico do Underlord, forçando ele a depender mais da queima mágica da Firestorm do que do dano de auto-attack bônus da Atrophy Aura.
- como jogar: evite trocar Double Edge contra Double Edge numa guerra de atrito corpo a corpo cedo, já que os dois escalam igual com força. Prefira vencer pela Firestorm, que ignora a redução de dano físico dele, e guarde a Pit de Malice pra fora da janela do Stampede.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/centaur.json`; `constants_abilities.json` (centaur_stampede, centaur_double_edge, centaur_hoof_stomp, abyssal_underlord_firestorm, abyssal_underlord_atrophy_aura).

## Contra Templar Assassin (templar_assassin)
- placar: Underlord venceu 53 de 93 em pro, 57,0%. Fonte: `pro_dados/abyssal_underlord.json` (hero_id 46). Maior vantagem do Underlord com amostra de 30+ jogos entre os carries puros.
- por que importa: um dos carries de maior gpm do patch (680 de média em pro) e a maior vantagem registrada do Underlord com amostra boa. Raramente lanam juntos (TA geralmente na safelane, Underlord na offlane), mas o duelo de farm e de poder decide boa parte do jogo quando se cruzam.
- janelas: até 14 min a TA já fechou Power Treads (6:00) e está no caminho pro Desolator (14:18, 1609 jogos, 96% de taxa, praticamente obrigatório). O Blink dela sai aos 17:24. O Underlord está numa fase mais lenta nesse ponto, ainda perto do Soul Ring, e só fica realmente perigoso perto dos 21-24 min com Shard e Scepter.
- o que ele faz com você: Meld dá invisibilidade parada, e ao sair do Meld atacando ela causa até 200 de dano bônus mais redução de até 8 de armadura por 6s, um burst forte contra quem está sozinho pushando lane. Refraction dá até 6 instâncias de barreira (30 de bloqueio cada) mais bônus de dano, deixando ela tankar várias ondas da Firestorm sem perder vida de verdade.
- o que você faz com ele: a Atrophy Aura reduz de 8% a 32% o dano base de ataque dela a até 900 de distância, o que corta justamente o tipo de dano que uma carry de auto-attack como a TA mais precisa. Como o Underlord tem HP alto, o burst de Meld raramente mata ele sozinho, então a troca estendida tende a favorecer quem tem mais fôlego, e isso é o Underlord.
- itens que viram: o Desolator da TA (quase sempre comprado, 96%) reduz a armadura do Underlord em cima do dano físico dela, competindo diretamente com a Atrophy Aura que reduz o dano dela. Quem tiver o item primeiro ganha a corrida de armadura.
- como jogar: não ignore uma TA sumida com Meld perto da sua lane, ela pode estar esperando o auto-attack bônus. Em compensação, não tenha medo de ficar perto dela em teamfight prolongado, a Atrophy Aura corta o DPS dela ao longo do tempo.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/templar_assassin.json`; `constants_abilities.json` (templar_assassin_meld, templar_assassin_refraction, abyssal_underlord_atrophy_aura).

## Contra Abaddon (abaddon)
- placar: Underlord venceu 32 de 53 em pro, 60,4%. Fonte: `pro_dados/abyssal_underlord.json` (hero_id 102). Segunda maior vantagem do Underlord com amostra de 30+ jogos.
- por que importa: segunda maior vantagem registrada do Underlord com amostra decente. Abaddon costuma jogar na mesma lane de 3 como suporte defensivo, e o kit dele de sobrevivência é desenhado pra bursts, não pro dano sustentado que o Underlord entrega.
- janelas: Abaddon sai de Phase Boots cedo (6:30) e caminha pro Radiance, mediana 16:18 em 552 jogos (77% de taxa, item praticamente padrão pra ele). O Manta dele sai só aos 23:36, já perto do Scepter do Underlord (23:54).
- o que ele faz com você: Borrowed Time converte todo dano recebido em cura por 4 a 6s, e ativa sozinho se a vida dele cair abaixo de 400. Aphotic Shield dá um dispel forte numa aliado, podendo remover o root da Pit de Malice antes da hora.
- o que você faz com ele: a Firestorm é dano ao longo do tempo (queima a cada segundo por 2s depois de cada onda), e dano contínuo é exatamente o que mais escapa da lógica de Borrowed Time, que só vira cura enquanto está ativo, não anula o que já foi aplicado antes nem depois da janela. A dica prática é não estourar burst durante a janela de Borrowed Time, e sim manter a queima rodando antes e depois dela.
- itens que viram: o Radiance do Abaddon dá queima própria que compete por farm contra a Atrophy Aura do Underlord, mas não ajuda na sobrevivência dele contra a queima percentual da Firestorm, que ignora regeneração.
- como jogar: bait a Borrowed Time antes de tentar o burst de verdade, jogue Pit of Malice primeiro pra forçar ele a gastar a defensiva, e só então solte o resto do combo. Evite gastar tudo de uma vez só pra ver a cura dele anular o dano.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/abaddon.json`; `constants_abilities.json` (abaddon_borrowed_time, abaddon_aphotic_shield, abyssal_underlord_firestorm).

## Contra Treant Protector (treant)
- placar: Underlord venceu 29 de 97 em pro, 29,9%. Fonte: `pro_dados/abyssal_underlord.json` (hero_id 83). Maior desvantagem do Underlord com amostra de 30+ jogos.
- por que importa: a maior desvantagem registrada do Underlord com uma amostra boa (97 jogos). Treant é suporte 5 que frequentemente joga na mesma lane de 3, e Overgrowth desliga o combo inteiro do Underlord antes dele conseguir lançar qualquer coisa.
- janelas: Treant sai de Arcane Boots aos 12:00, ainda sustentando mana pra Leech Seed na lane. O Aghanim's Shard dele sai aos 19:00 (660 jogos, 47%), dando uma segunda árvore de visão, útil pra enxergar rotações do Underlord via Fiend's Gate. O Blink dele só sai tarde, aos 26:24, então até lá ele depende de posicionamento, não de iniciação própria.
- o que ele faz com você: Overgrowth (desbloqueado no nível 6, raio grande de 800 e até 5s de duração nos níveis mais altos) trava quem está na área: não dá pra andar, dar blink, ficar invisível nem atacar. Não silencia, então o Underlord continua conseguindo lançar feitiço preso lá dentro.
- o que você faz com ele: a Firestorm ainda assim causa dano à distância antes do Overgrowth existir (nível 6+), então na lane o Underlord tem vantagem de poke pura. Se for pego dentro do Overgrowth, o Underlord não consegue fugir nem blincar, mas ainda solta Pit of Malice ou Firestorm em quem estiver por perto enquanto espera o efeito passar.
- itens que viram: Eyes in the Forest do Treant (base ou via Shard) dá visão de longo alcance em pontos de árvore, o que atrapalha splitpush e rotação via Fiend's Gate, já que ele enxerga o Underlord chegando.
- como jogar: na lane, pegue vantagem de poke com Firestorm antes do nível 6 dele. Depois disso, cheque se o Overgrowth está de cooldown antes de iniciar qualquer coisa em grupo, porque cair dentro dele tranca sua fuga, mesmo que ainda dê pra soltar feitiço de dentro.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/treant.json`; `constants_abilities.json` (treant_overgrowth, treant_eyes_in_the_forest, abyssal_underlord_firestorm, abyssal_underlord_pit_of_malice, abyssal_underlord_dark_portal); `aghs_desc` (treant).

## Contra Necrophos (necrolyte)
- placar: Underlord venceu 21 de 64 em pro, 32,8%. Fonte: `pro_dados/abyssal_underlord.json` (hero_id 36). Quarta maior desvantagem do Underlord com amostra de 30+ jogos.
- por que importa: quarta maior desvantagem com amostra ok (64 jogos). Necrophos é o espelho direto do Underlord, os dois tiram vida em percentual de HP máximo, só que o dele é mais eficiente.
- janelas: o Necrophos é um dos itens mais rápidos da lista, Aghanim's Shard aos 17:48 (951 jogos, 92% de taxa, quase universal) e Radiance aos 13:42 (862 jogos, 84%). Isso é bem antes do Underlord terminar o Scepter dele (23:54), então o Necro chega na janela de poder antes.
- o que ele faz com você: Heartstopper Aura reduz de 0,8% a 2,3% do HP máximo por segundo numa área de 700 de raio, passiva, sem precisar acertar feitiço algum, e cobre um raio maior que a Firestorm do Underlord (425). Reaper's Scythe é um execute que causa dano proporcional ao HP que falta no alvo, ignorando completamente o quanto o Underlord acumulou de vida máxima.
- o que você faz com ele: a Firestorm também queima percentual de HP, mas em pulso (6 ondas mais 2s de queima por onda) em vez de contínuo, então numa troca de atrito direta o Necrophos, com área maior e sem precisar acertar nada, tende a vencer. O ponto forte do Underlord aqui é atordoar ele com Pit antes que ele consiga alcance pra bater a aura por tempo suficiente.
- itens que viram: o Aghanim's Shard do Necrophos (vira um Death Pulse grande que se espalha ao chegar no alvo) aumenta o alcance efetivo do combo de dano dele, tornando ainda mais difícil pro Underlord ficar fora da aura.
- como jogar: não entre em troca de atrito parado contra o Necrophos, a aura dele é passiva e cobre mais área que a sua. Jogue Pit de Malice nele de longe assim que possível e tente fechar a luta rápido, antes da Reaper's Scythe virar ameaça de execução pela vida que você já perdeu pra aura dele.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/necrolyte.json`; `constants_abilities.json` (necrolyte_heartstopper_aura, necrolyte_reapers_scythe, abyssal_underlord_firestorm); `aghs_desc` (necrolyte).

## Contra Drow Ranger (drow_ranger)
- placar: Underlord venceu 22 de 66 em pro, 33,3%. Fonte: `pro_dados/abyssal_underlord.json` (hero_id 6). Uma das maiores desvantagens do Underlord com amostra de 30+ jogos (empatada perto do quinto lugar).
- por que importa: uma das maiores desvantagens (66 jogos, 33,3%), e é o caso clássico de duas cores que raramente lanam juntas mas cujo duelo de poder importa demais: Drow é carry 1 que fica atrás do grupo com ataque à distância altíssimo, e o Underlord não tem alcance nem mobilidade pra fechar nela antes de morrer pro DPS dela.
- janelas: Drow sai de Power Treads aos 6:36 e caminha pro Dragon Lance (14:12, bônus de alcance) e depois Hurricane Pike (22:48, mais alcance e um dash de fuga), formando um kit todo sobre distância. Até os 23:54, quando o Underlord fecha o Scepter, a Drow já consolidou um perfil de ataque a longa distância que o Underlord não alcança sem fechar o espaço primeiro.
- o que ele faz com você: Gust silencia e empurra pra trás, impedindo o Underlord de lançar Firestorm ou Pit à distância antes de fechar nela. Marksmanship (ou Precision Aura, dependendo do facet) dá dano que ignora armadura base, cortando parte da mitigação que o Underlord tem por itens de força.
- o que você faz com ele: o Underlord não tem gap closer no kit, então a resposta não é mecânica dele sozinho, é de iniciação do time, prender a Drow com disable de longo alcance de um aliado antes de entrar. Uma vez travada pela Pit (alcance 675), a Firestorm em cima dela (HP baixo de carry agility) mata rápido.
- itens que viram: Hurricane Pike da Drow (dash de distância mais alcance) é a resposta dela pra qualquer tentativa de aproximação, tanto ofensiva quanto defensiva, então depois desse item a janela de perseguição do Underlord praticamente fecha.
- como jogar: não tente caçar a Drow sozinho sem disable de longo alcance de outro aliado. Se o time conseguir travar ela, a Pit de Malice e a Firestorm resolvem rápido, já que ela não tem muito HP pra aguentar.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/drow_ranger.json`; `constants_abilities.json` (drow_ranger_wave_of_silence, drow_ranger_marksmanship, abyssal_underlord_pit_of_malice, abyssal_underlord_firestorm).

## Contra Terrorblade (terrorblade)
- placar: Underlord venceu 30 de 67 em pro, 44,8%. Fonte: `pro_dados/abyssal_underlord.json` (hero_id 109).
- por que importa: outro carry que raramente lana com o Underlord mas que empata na identidade de controlar o mapa sem lutar: Fiend's Gate splitpusha abrindo rota de teleporte, Metamorphosis mais Sunder faz o Terrorblade farmar e trocar vida à distância. Quem sai na frente no farm decide o jogo sem nunca se encontrarem na lane.
- janelas: Terrorblade sai de Power Treads aos 5:48 e fecha Manta Style aos 17:06, dobrando o número de ilusões dele bem cedo pro patch. O Aghanim's Shard sai quase junto, aos 17:24 (664 jogos, 75% de taxa de compra), dando velocidade, regeneração e velocidade de ataque extra pras ilusões. Isso é bem antes do Underlord terminar o Scepter (23:54), então o Terrorblade entra na janela forte dele primeiro.
- o que ele faz com você: Sunder troca uma porcentagem da vida atual entre os dois heróis, dos dois lados. Contra um Underlord que acumulou HP alto justamente pra ser difícil de matar, Sunder é a resposta direta, ele troca a vida cheia do Underlord pela vida baixa do Terrorblade, resetando toda a vantagem de tankiness de uma vez.
- o que você faz com ele: antes do Metamorphosis (nível 6+), o Terrorblade é frágil corpo a corpo, então se o Underlord pegar ele sem forma de demônio ativa, Pit de Malice mais Firestorm fazem o trabalho rápido. Depois do Metamorphosis ele vira ataque à distância, e a Atrophy Aura reduz o dano de ataque dele, mas só a até 900 de distância.
- itens que viram: o Shard do Terrorblade (custa HP próprio pra dar velocidade, regeneração e velocidade de ataque pras ilusões) acelera o farm dele ainda mais, então deixar ele sem pressão cedo significa perder a corrida de item pra Metamorphosis mais rápido do que o Underlord fecha o Scepter.
- como jogar: pressione o Terrorblade cedo na jungle ou nas lanes próximas antes dele destravar Metamorphosis, já que ele é bem mais fraco sem a ultimate. Se ele já estiver com Sunder disponível, não acumule HP demais achando que isso resolve a troca, planeje em torno da troca de vida.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/terrorblade.json`; `constants_abilities.json` (terrorblade_sunder, terrorblade_metamorphosis, abyssal_underlord_atrophy_aura, abyssal_underlord_pit_of_malice, abyssal_underlord_dark_portal); `aghs_desc` (terrorblade).

## Contra Morphling (morphling)
- placar: Underlord venceu 22 de 49 em pro, 44,9%. Fonte: `pro_dados/abyssal_underlord.json` (hero_id 10).
- por que importa: é o caso clássico de dois hc que quase nunca se cruzam na lane mas cujo confronto de poder pesa no jogo: Morphling é carry que raramente lana com o Underlord, mas Adaptive Strike e a capacidade de virar atributo pra força fazem dele um dos piores alvos pro combo de root do Underlord quando o jogo empata em farm.
- janelas: Morphling sai de Power Treads aos 6:00 e Manta aos 18:24, formando o kit de sustentação e evasão dele. O Butterfly (evasão alta) sai mais tarde, aos 25:48, já depois do Scepter do Underlord (23:54), então a janela de 20-26 min é onde o Underlord tem a melhor chance de fechar o combo antes da evasão subir.
- o que ele faz com você: Adaptive Strike atordoa e empurra, com dano e duração de stun que crescem conforme a força dele (até 2,6s se a força estiver 50% acima da agilidade), ou seja, um Morphling que vira força fica mais perigoso nesse disable justamente contra um Underlord que também depende de disable corpo a corpo. Waveform dá invulnerabilidade durante o dash, então ele atravessa a Pit de Malice sem tomar dano nem ficar preso.
- o que você faz com ele: a queima percentual de HP máximo da Firestorm não se importa com quanto de força ou agilidade o Morphling acumulou, ela sempre tira a mesma fatia proporcional, o que neutraliza parte da estratégia dele de virar tanque pra aguentar troca. Pit de Malice ainda funciona normalmente fora da janela de Waveform (cooldown de 12 a 21s conforme o nível).
- itens que viram: o Butterfly do Morphling (alta evasão) reduz a chance dos ataques básicos do Underlord acertarem nele. Isso só corta o dano bônus que o Underlord ganharia pessoalmente ao acertar um ataque, a redução de dano e o bônus por kill da Atrophy Aura continuam passivos e não dependem disso.
- como jogar: tente prender o Morphling logo após ele usar Waveform, quando a invulnerabilidade já passou e o cooldown está rodando. Depois do Butterfly dele, não dependa do seu auto-attack pra fechar a troca, use a queima da Firestorm, que não erra.
- fonte: `pro_dados/abyssal_underlord.json`; `pro_dados/morphling.json`; `constants_abilities.json` (morphling_adaptive_strike_agi, morphling_waveform, abyssal_underlord_firestorm, abyssal_underlord_pit_of_malice).
