---
id: confrontos-disruptor
heroi: Disruptor
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shadow_demon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/phantom_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/phantom_lancer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/muerta.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/broodmother.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/wisp.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/enigma.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer (partidas de liga 7.40-7.41, lane_role)
---

## Como essa lista foi montada

15 oponentes, escolhidos em 4 grupos (critério do pedido):

1. **Mais jogos de pro contra o Disruptor** (top 6 do `pro_dados/disruptor.json`, campo `confrontos`): Jakiro, Shadow Fiend, Tusk, Ogre Magi, Lion, Mars.
2. **Mesma posição principal (4/5), alto volume em pro**, além dos 6 acima: Rubick, Hoodwink, Shadow Demon (esse último também é a maior desvantagem com amostra grande).
3. **Maior vantagem e maior desvantagem do Disruptor (30+ jogos)**: vantagem (Phantom Assassin 62,2%, Phantom Lancer 58,6%, Muerta 56,8%); desvantagem (Broodmother 33,3%, Io 34,0%, Enigma 34,1%).
4. Disruptor é suporte (pos 5/4), não carry, então a regra "carry sempre entra mesmo sem lane em comum" não se aplica aqui; mas boa parte da lista (Shadow Fiend, Mars, Phantom Assassin, Phantom Lancer, Muerta, Broodmother, Enigma) não divide lane com ele e entra mesmo assim, porque joga o papel equivalente do Alchemist-vs-Morphling: dois heróis que não se cruzam na rota, mas cujo poder relativo (quem caça quem, quem farma mais rápido, que item vira o duelo) decide o jogo de qualquer forma.

Os placares abaixo são sempre da perspectiva do Disruptor (vitórias dele no confronto), fonte `pro_dados/disruptor.json`, cruzados com o arquivo do oponente pra conferência.

## Contra Jakiro (jakiro)

- placar: 236V/507 (46,5%) para o Disruptor; fonte pro_dados/disruptor.json, conferido contra pro_dados/jakiro.json (271V do Jakiro).
- por que importa: maior volume de jogos pro do confronto (507) e mesma posição principal (5); os dois competem pelo mesmo papel de disable de área no draft.
- janelas: os dois sobem Arcane Boots quase juntos (Jakiro 11,7 min, Disruptor 11,4); até o nível 6 nenhum tem a arma principal pronta (Static Storm de um lado, Ice Path + Macropyre do outro). Os dois também compram Glimmer Cape na mesma janela (Jakiro 22,8, Disruptor 22,7), sinal de que ambos passam o meio de jogo tentando se esconder do nuke do outro em vez de caçar.
- o que ele faz com você: Dual Breath (alcance 850, queima 20-80 de dano, slow de 25-40% em movimento e ataque por 5s) e Ice Path (alcance 1100, até 2s de stun) alcançam mais longe que Kinetic Field (900) e Static Storm (800); se o Jakiro acerta primeiro, ele trava ou desacelera o Disruptor antes da gaiola fechar. Macropyre (alcance 1400, 10s de queima de 100-200 por segundo) pode punir quem estiver preso dentro da própria Kinetic Field, dos dois lados.
- o que você faz com ele: Kinetic Field (raio 350, formação de 1s) prende o Jakiro antes dele posicionar a Macropyre direito; Static Storm (raio 550, 6s, não dispelável) silencia Dual Breath, Ice Path e Macropyre ao mesmo tempo enquanto ele estiver dentro. Glimpse devolve o Jakiro 4s no tempo, cancelando qualquer avanço que ele tenha feito até ali.
- itens que viram: o Blink do Disruptor (24,0 min) entra dentro dos 800-900 de alcance das duas magias de área antes do Jakiro reagir; Aghanim's Scepter do Disruptor (34,9) faz Static Storm silenciar também uso de item, tirando o Glimmer Cape do Jakiro como saída durante a tempestade.
- como jogar: não force entrada dentro dos 1100 de alcance do Ice Path sem vantagem de visão; espere o Jakiro errar a área ou gastar Static Storm fora de alcance antes de avançar o Dual Breath. Depois do nível 6, quem prender o outro primeiro numa área de 350-550 de raio fecha a troca.
- fonte: pro_dados/disruptor.json; pro_dados/jakiro.json; constants_abilities.json (disruptor_thunder_strike, disruptor_kinetic_field, disruptor_static_storm, disruptor_glimpse, jakiro_dual_breath, jakiro_ice_path, jakiro_macropyre)

## Contra Shadow Fiend (nevermore)

- placar: 209V/461 (45,3%) para o Disruptor; conferido contra pro_dados/nevermore.json (252V do Shadow Fiend).
- por que importa: 2º maior volume de jogos pro do confronto (461); não divide lane (SF é mid, Disruptor é suporte), mas ronda muito e Requiem mata suporte squishy à distância, então vale saber o alcance dele mesmo sem duelar direto.
- janelas: SF sobe Power Treads aos 5,9 e Yasha aos 13,3, puxando farm e alcance de ataque rápido com Dragon Lance logo atrás (14,0). Até o Black King Bar dele (mediana 25,2) ele ainda é mais frágil que tanque, janela em que o Disruptor pode punir uma rotação mal calculada; depois do BKB, só silêncio em área (Static Storm) ainda segura o combo, já que nenhuma magia do SF fura BKB nem precisa furar.
- o que ele faz com você: Shadowraze bate 85 a 280 de dano instantâneo a só 200 de distância, sem precisar mirar unidade (recarga de 3s por raze individual), então se o Disruptor chegar perto demais pra formar Kinetic Field, SF pode razear antes da gaiola fechar. Requiem of Souls (raio 1000, dispara até 20 linhas de dano quando ele canaliza ou morre) causa medo e reduz resistência mágica em área, podendo acertar quem tentou iniciar perto dele.
- o que você faz com ele: Static Storm silencia Requiem of Souls (que precisa de cast) e os 3 Shadowraze enquanto ele estiver vivo dentro da área, mas não fura BKB; Glimpse devolve o SF 4s pra trás, cancelando reposicionamento ou puxando ele de volta pra fora da wave que acabou de razear.
- itens que viram: o Black King Bar do SF (25,2) remove o silêncio do Static Storm assim que ativado, então o Disruptor precisa acertar a área antes do SF comprar o item, ou junto de um disable físico que já esteja travando ele; o Blink do Disruptor (24,0) chega perto da mesma janela do BKB dele, corrida direta entre os dois itens.
- como jogar: não ande dentro dos 200 de alcance do Shadowraze sem visão da posição exata dele; use Static Storm assim que ele canalizar Requiem perto do grupo, porque ela ainda segura o resto do combo mesmo sem furar BKB. Depois dos 25 min, trate o SF com BKB como ameaça de burst instantâneo, não de duelo prolongado.
- fonte: pro_dados/disruptor.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, disruptor_static_storm, disruptor_glimpse)

## Contra Tusk (tusk)

- placar: 216V/427 (50,6%) para o Disruptor; conferido contra pro_dados/tusk.json (211V do Tusk).
- por que importa: 3º maior volume de jogos pro (427) e mesma posição (4/5); os dois disputam o papel de iniciador de área do suporte.
- janelas: Tusk sobe Blink aos 19,0, cerca de 5 min antes do Blink do Disruptor (24,0); o Disruptor responde com Arcane Boots mais cedo (11,4 contra a bota avançada do Tusk, phase 13,6 ou tranquil 8,4). Entre os 19 e os 24 min é a janela em que o Tusk pode iniciar Snowball antes do Disruptor ter mobilidade própria pra fugir ou contra-iniciar.
- o que ele faz com você: Snowball junta aliados num raio de 325 e rola até travar o alvo; Walrus Kick (alcance curto, só 250) chuta 1200 de distância, suficiente pra separar o Disruptor do próprio time antes dele formar Kinetic Field.
- o que você faz com ele: Kinetic Field (raio 350, formação de 1s) e Static Storm (raio 550, silencia 6s) travam o Tusk e qualquer aliado puxado pela Snowball antes dele conseguir usar o combo curto; como o kit do Tusk depende de alcance de 150-250, ficar preso atrás da parede do Kinetic Field cancela a iniciação dele por completo.
- itens que viram: o Blink do Tusk chega 5 minutos antes do Blink do Disruptor (19,0 contra 24,0), então nessa janela intermediária é o Tusk quem ataca primeiro; depois dos 24 min os dois têm blink prontos e vira corrida de quem reage mais rápido ao ver o outro se aproximar.
- como jogar: antes dos 19 min, evite ficar agrupado perto do Tusk pra Snowball não valer a pena; depois que ele tiver Blink, jogue perto de visão própria pra formar Kinetic Field assim que ele aparecer, antes dele fechar o Walrus Kick.
- fonte: pro_dados/disruptor.json; pro_dados/tusk.json; constants_abilities.json (disruptor_kinetic_field, disruptor_static_storm)

## Contra Ogre Magi (ogre_magi)

- placar: 203V/420 (48,3%) para o Disruptor; conferido contra pro_dados/ogre_magi.json (217V do Ogre Magi).
- por que importa: 4º maior volume de jogos pro (420) e mesma posição (5); o combo de Fireblast disputa o mesmo papel de travar o alvo que o Disruptor também cumpre.
- janelas: os dois sobem Arcane Boots quase juntos (Ogre 11,2, Disruptor 11,4). O Ogre investe cedo em Hand of Midas (18,9) pra converter farm em ouro, enquanto o Disruptor já está rumo ao Blink (24,0); o Aghanim's Shard do Ogre sai aos 26,1 (dá Fire Shield), pouco depois do Blink do Disruptor, fase em que os dois ganham ferramenta nova quase junto.
- o que ele faz com você: Fireblast (alcance 525, 1,2s de stun) pode travar o Disruptor antes dele formar Kinetic Field; com Multicast (chance de recast de graça que cresce 1% a cada 16 de Força do Ogre) o mesmo Fireblast pode repetir a cada 0,6s, reaplicando o stun sem gastar mais mana.
- o que você faz com ele: Kinetic Field prende o Ogre antes dele chegar nos 525 de alcance do Fireblast; Static Storm silencia os 6s inteiros, desligando Fireblast, Ignite e Bloodlust ao mesmo tempo, o que neutraliza o Multicast também, já que sem feitiço não tem o que recastar.
- itens que viram: o Shard do Ogre (Fire Shield, absorve 85% de 3 ataques físicos) protege ele de troca corpo a corpo, mas não ajuda contra o silêncio de Static Storm; o Blink do Disruptor chega na mesma janela do Shard do Ogre, então quem formar a própria área primeiro desarma o combo do outro.
- como jogar: evite ficar parado a até 525 de distância do Ogre sem vantagem numérica antes dos 26 min; depois que ele tiver o Shard, puxe a luta pra fora do alcance do Fireblast antes de iniciar, porque o Multicast pode reaplicar o stun em cadeia se a entrada for mal calculada.
- fonte: pro_dados/disruptor.json; pro_dados/ogre_magi.json; constants_abilities.json (disruptor_kinetic_field, disruptor_static_storm)

## Contra Lion (lion)

- placar: 204V/410 (49,8%) para o Disruptor; conferido contra pro_dados/lion.json (206V do Lion).
- por que importa: 5º maior volume de jogos pro (410) e mesma posição (4/5); os dois competem pelo papel de disable que fecha um alvo isolado, quem trava primeiro costuma ganhar o pick-off.
- janelas: Lion sobe Blink aos 18,2, quase 6 min antes do Blink do Disruptor (24,0), janela em que ele pode isolar e executar um suporte antes do Disruptor ter mobilidade pra responder. O Aghanim's Shard do Lion sai aos 25,8, logo depois do Blink do Disruptor.
- o que ele faz com você: Hex (alcance 575-650, desliga toda habilidade do alvo) seguido de Earth Spike (alcance 650, 1,3-2,2s de stun) é disable total; se ele acertar o Disruptor antes da Kinetic Field formar, cancela a iniciação por completo. Finger of Death (900 de alcance) fecha o combo com até 850 de dano.
- o que você faz com ele: Static Storm silencia o Lion, impedindo Hex, Earth Spike e Finger of Death enquanto ele estiver na área; nenhuma magia do Lion fura Black King Bar, então a troca é simétrica no quesito imunidade. Kinetic Field prende o Lion fora do alcance de 650 de Earth Spike antes dele puxar o combo.
- itens que viram: o Blink do Lion chega quase 6 min antes do Blink do Disruptor, então até os 24 min é ele quem ameaça iniciar primeiro; depois disso vira disputa de reação, já que os dois dependem do mesmo gap-closer pra acertar o próprio disable.
- como jogar: antes dos 18 min não há blink de nenhum lado, então a troca é de alcance direto (800-900 do Disruptor contra 575-650 do Lion), vantagem dele; depois que o Lion tiver Blink, ande em grupo e não se isole, porque Hex + Earth Spike não precisam de muito pra matar um suporte sozinho.
- fonte: pro_dados/disruptor.json; pro_dados/lion.json

## Contra Mars (mars)

- placar: 200V/395 (50,6%) para o Disruptor; conferido contra pro_dados/mars.json (195V do Mars).
- por que importa: 6º maior volume de jogos pro (395) mesmo sem dividir lane (Mars é offlane, Disruptor é suporte); é o iniciador físico mais comum que o time do Disruptor enfrenta, então vale saber como a Arena of Blood dele lida com a área do Disruptor.
- janelas: Mars sobe Blink cedo, aos 15,2, quase 9 min antes do Blink do Disruptor (24,0); até lá ele já pode lançar Spear (alcance de 900 a 1200 conforme o nível) de fora da visão do Disruptor. O Aghanim's Shard dele sai aos 21,5, ainda bem antes do Blink do Disruptor.
- o que ele faz com você: Spear (dano 100-325, empurra o primeiro herói atingido, stun 1,3-2,2s) alcança até 1200 no nível 4, mais que os 800-900 do Disruptor, então o Mars pode acertar o combo de longe antes do Disruptor reagir; Arena of Blood (raio 550, 5,5s, lançada a 400 de alcance) bloqueia movimento de quem estiver na borda, competindo direto com a função de prender área do Kinetic Field.
- o que você faz com ele: Kinetic Field prende o Mars (e os aliados dele) antes da Arena of Blood formar no lugar certo; Static Storm silencia qualquer magia que o Mars precise lançar depois de entrar, embora o Spear já disparado antes não seja cancelado por isso.
- itens que viram: o Blink do Mars chega quase 9 min antes do Blink do Disruptor, então até os 24 min é o Mars quem ameaça iniciar de surpresa; o Black King Bar do Mars (26,5) sai pouco depois do Blink do Disruptor e remove o silêncio de Static Storm, encerrando a vantagem do Disruptor nessa troca.
- como jogar: antes dos 15 min o Mars não tem blink, então mantenha distância segura de 1200 (alcance máximo do Spear) sem ficar parado; depois que ele tiver Blink e principalmente depois do BKB (26,5), trate a Arena of Blood como ameaça de grupo e não tente segurar sozinho dentro dela.
- fonte: pro_dados/disruptor.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_arena_of_blood)

## Contra Rubick (rubick)

- placar: 162V/354 (45,8%) para o Disruptor; conferido contra pro_dados/rubick.json (192V do Rubick).
- por que importa: um dos maiores volumes de jogos pro da lista (354) e mesma posição (4/5); além de concorrerem pelo papel de suporte de área com stun, Rubick pode roubar a última magia do Disruptor com Spell Steal, o que muda o cálculo de quem inicia primeiro.
- janelas: Rubick sobe Arcane Boots aos 10,3 (um pouco antes do Disruptor, 11,4) e o próprio Blink aos 21,6, quase 2,5 min antes do Blink do Disruptor (24,0); o Aghanim's Shard dele sai aos 27,0, logo depois do Blink do Disruptor.
- o que ele faz com você: Telekinesis (alcance base 550-625, mais o bônus de alcance da passiva Arcane Supremacy) levanta o alvo e estuna a área quando ele cai; Spell Steal rouba a última magia lançada pelo Disruptor e fura Black King Bar, então se o Disruptor usar Static Storm ou Kinetic Field perto do Rubick sem necessidade, ele pode devolver a mesma magia.
- o que você faz com ele: Kinetic Field e Static Storm travam o Rubick antes dele chegar no alcance curto de Telekinesis; como Fade Bolt e Telekinesis não furam BKB (igual ao Static Storm do Disruptor, que também não fura), a troca de controle entre os dois é simétrica, decide quem acerta a área primeiro.
- itens que viram: o Blink do Rubick sai antes do Blink do Disruptor (21,6 contra 24,0), dando a ele a primeira janela de iniciação; o Aghanim's Scepter do Disruptor (34,9) faz Static Storm silenciar uso de item também, o que bloqueia o próprio Spell Steal do Rubick se ele tentar usar durante a tempestade.
- como jogar: não gaste Static Storm ou Kinetic Field perto do Rubick sem necessidade, porque ele pode devolver a mesma magia com Spell Steal; priorize acertar a área nele antes dele ter Blink (antes dos 21-22 min) pra não enfrentar o combo de Telekinesis primeiro.
- fonte: pro_dados/disruptor.json; pro_dados/rubick.json

## Contra Hoodwink (hoodwink)

- placar: 157V/341 (46,0%) para o Disruptor; conferido contra pro_dados/hoodwink.json (184V da Hoodwink).
- por que importa: também entre os maiores volumes de jogos pro da lista (341) e mesma posição (4/5); ambos são suportes de pick-off em área (Bushwhack prende perto de árvore, Kinetic Field prende em qualquer lugar), a troca é sobre quem trava o outro primeiro fora de visão.
- janelas: Hoodwink sobe Arcane Boots aos 12,2 (perto dos 11,4 do Disruptor) e o Aghanim's Shard aos 23,8 (dá Hunter's Boomerang), pouco antes do Blink do Disruptor (24,0); até o Disruptor ter Blink, Hoodwink já ameaça de longe com o Boomerang.
- o que ela faz com você: Bushwhack (raio 265) estoura perto de árvore e some com a visão do alvo por até 2,1s; Hunter's Boomerang (do Shard, alcance de lançamento 1100, velocidade 900) marca o alvo com +20% de dano de feitiço recebido por 7s.
- o que você faz com ela: Static Storm silencia Acorn Shot e Bushwhack por 6s; Kinetic Field prende a Hoodwink fora do alcance de qualquer árvore próxima, tirando a ferramenta de pick-off dela enquanto durar a parede.
- itens que viram: o Shard da Hoodwink (23,8) chega pouco antes do Blink do Disruptor (24,0), dando a ela ameaça extra de longe nessa janela; depois que o Disruptor tiver Blink, ele consegue fechar a distância antes dela se posicionar perto de árvore.
- como jogar: ande longe de árvores isoladas contra ela antes dos 24 min; depois que o Disruptor tiver Blink, use a mobilidade pra acertar a área nela antes que consiga plantar o próprio combo perto de vegetação.
- fonte: pro_dados/disruptor.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_hunters_boomerang)

## Contra Shadow Demon (shadow_demon)

- placar: 129V/315 (41,0%) para o Disruptor; conferido contra pro_dados/shadow_demon.json (186V do Shadow Demon). Maior desvantagem entre os oponentes de amostra grande (315 jogos).
- por que importa: mesma posição (4/5) e a maior desvantagem estatística entre os oponentes com volume alto; Demonic Purge fura Black King Bar, o que neutraliza justamente o item que tiraria o Disruptor do silêncio dele.
- janelas: os dois sobem Arcane Boots quase juntos (Shadow Demon 11,3, Disruptor 11,4); Shadow Demon tira o Blink aos 23,9, pouco antes do Disruptor (24,0), e o Aghanim's Shard dele sai aos 25,4, logo depois.
- o que ele faz com você: Disruption bane o alvo por 2,75s e cria 2 ilusões dele quando o efeito acaba, atrapalhando a leitura de quem está perto; Demonic Purge remove buff positivo e desacelera até 100%, e fura Black King Bar, então mesmo com o Disruptor numa posição segura ele ainda é desacelerado igual.
- o que você faz com ele: Kinetic Field e Static Storm prendem e silenciam o Shadow Demon normalmente, já que nenhuma magia dele atravessa a área; mas como ele não depende de BKB inimigo pra funcionar, a janela de segurança do Disruptor contra ele é menor que contra outros suportes da lista.
- itens que viram: o Demonic Cleanse do Shard do Shadow Demon (só em aliado, fura BKB, cura 450 ao fim) protege o time dele de qualquer debuff que o Disruptor aplicar, mesmo antes do Scepter do Disruptor (34,9) silenciar item; é por isso que o confronto pesa contra o Disruptor mesmo com os dois tendo timings de item quase idênticos até os 24 min.
- como jogar: trate o Demonic Purge como ameaça mesmo atrás de Black King Bar; priorize isolar ou afastar o Shadow Demon antes dele comprar o Shard (25,4), porque depois disso ele limpa qualquer controle que o time aplicar nos aliados dele.
- fonte: pro_dados/disruptor.json; pro_dados/shadow_demon.json; constants_abilities.json (shadow_demon_demonic_cleanse)

## Contra Phantom Assassin (phantom_assassin)

- placar: 46V/74 (62,2%) para o Disruptor; conferido contra pro_dados/phantom_assassin.json (28V da Phantom Assassin). Maior vantagem da lista, amostra pequena (74 jogos).
- por que importa: maior vantagem estatística do Disruptor com 30+ jogos; não divide lane, mas é o carry mais comum nesse confronto no recorte pro, e Phantom Strike furando BKB dos dois lados muda o cálculo de proteção.
- janelas: Phantom Assassin sobe Power Treads aos 6,0 e Battle Fury por volta dos 14,4, tentando farmar rápido antes do meio de jogo; o pico dela chega com Black King Bar (23,5) e Desolator (20,7), pouco antes do Blink do Disruptor (24,0).
- o que ela faz com você: Coup de Grace dá crítico de 200 a 400% em qualquer ataque, incluindo o primeiro que acertar o Disruptor se ele ficar exposto sem disable nela primeiro; Phantom Strike e Coup de Grace furam Black King Bar, então o BKB da própria PA não impede ela de continuar acertando enquanto ativo.
- o que você faz com ela: Static Storm silencia Phantom Strike, cortando o teleporte de ataque que ela usa pra reposicionar durante a tempestade; Kinetic Field prende ela antes de chegar perto o bastante pra bater. Nenhuma das duas magias do Disruptor revela invisibilidade, então contra Shadow Blade ou Silver Edge dela o time ainda precisa de Sentry ou Gem à parte.
- itens que viram: o Black King Bar da PA (23,5) sai pouco antes do Blink do Disruptor (24,0), então entre os 20 e 24 min ela já pode entrar imune a magia numa luta em que o Disruptor ainda não tem Blink pra reagir; depois dos 24 min o Disruptor ganha mobilidade pra formar a área antes dela se aproximar.
- como jogar: não dê visão fácil de perto dela antes do Disruptor ter Blink; depois que tiver, prenda ela de longe com Kinetic Field antes que o Coup de Grace acerte alguém squishy, porque uma vez que ela conecta um crítico, BKB no alvo não ajuda.
- fonte: pro_dados/disruptor.json; pro_dados/phantom_assassin.json; constants_abilities.json (phantom_assassin_coup_de_grace, phantom_assassin_phantom_strike)

## Contra Phantom Lancer (phantom_lancer)

- placar: 34V/58 (58,6%) para o Disruptor; conferido contra pro_dados/phantom_lancer.json (24V do Phantom Lancer). Segunda maior vantagem, amostra pequena (58 jogos).
- por que importa: dois carries que raramente dividem lane direta, mas o Disruptor tem uma resposta mecânica rara contra kit de ilusão: Glimpse mata ilusão na hora.
- janelas: Phantom Lancer sobe Yasha/Diadem entre 11,7 e 12,5 e fecha Manta aos 16,5, bem antes do Blink do Disruptor (24,0); o Aghanim's Scepter dele sai aos 21,9, em 74% das partidas da amostra (371 de 499), dando Phantom Rush (dash que cria ilusões de Juxtapose ao passar por inimigos).
- o que ele faz com você: Juxtapose (passivo, 40-50% de chance por ataque de herói, até 10 ilusões no máximo) multiplica o número de alvos que o Disruptor precisa identificar; com o Scepter, Phantom Rush cria ilusão extra toda vez que ele atravessa um inimigo correndo, inclusive durante a fuga.
- o que você faz com ele: Glimpse mata ilusão instantaneamente (efeito confirmado no texto da própria habilidade), então usar Glimpse no PL real cancela a diferença de farm ou posição que ele monta com Spirit Lance; Static Storm silencia Spirit Lance e Doppelwalk, cortando a criação de ilusão nova e a fuga por invisibilidade.
- itens que viram: o Scepter do PL (21,9) sai bem antes do Blink do Disruptor, então na janela de 22 a 24 min ele já cria ilusão extra em fuga sem o Disruptor ter mobilidade pra perseguir; depois que o Disruptor tem Blink, ele consegue alcançar o PL real antes de Doppelwalk ativar.
- como jogar: gaste Sentry perto da luta pra separar o PL real do grupo de ilusões antes de mirar qualquer disable nele; use Glimpse assim que identificar o real, porque ela mata a ilusão mais próxima de graça e ainda devolve o PL de verdade pra trás.
- fonte: pro_dados/disruptor.json; pro_dados/phantom_lancer.json; constants_abilities.json (phantom_lancer_juxtapose, phantom_lancer_phantom_edge, phantom_lancer_doppelwalk, disruptor_glimpse); OpenDota constants/aghs_desc (efeito do Scepter)

## Contra Muerta (muerta)

- placar: 84V/148 (56,8%) para o Disruptor; conferido contra pro_dados/muerta.json (64V da Muerta). Vantagem robusta, maior amostra entre os carries da lista (148 jogos).
- por que importa: ela joga a safelane (lane_role 1) em 954 de 1.377 partidas pro 7.40-7.41 (OpenDota, 69,3%), e a vantagem aqui tem volume suficiente pra confiar mais que Phantom Assassin e Phantom Lancer; Static Storm segura The Calling e Dead Shot, as duas magias de controle dela.
- janelas: Muerta sobe Power Treads aos 7,5 e Maelstrom aos 13,8, puxando farm cedo; o pico dela chega com Mjollnir (19,7) e Black King Bar (27,5), já depois do Blink do Disruptor (24,0) mas ainda antes do Scepter dele (34,9).
- o que ela faz com você: Dead Shot desacelera o alvo inicial e o ricochete amedronta quem for atingido em seguida; Pierce the Veil transforma o dano dela em mágico por alguns segundos, útil contra armadura alta, mas sem efeito contra quem já tem imunidade mágica.
- o que você faz com ela: Pierce the Veil causa dano mágico puro, então o Black King Bar do time anula o burst dela por completo durante o efeito; Static Storm silencia The Calling e Dead Shot, cortando o combo de controle que ela usa pra abrir antes de atirar.
- itens que viram: o Black King Bar da Muerta (27,5) sai depois do Blink do Disruptor (24,0), então entre os 24 e 27 min o Disruptor tem janela de mobilidade antes dela comprar a resposta de imunidade; depois do BKB dela, o Static Storm ainda segura Dead Shot e The Calling porque nenhum dos dois fura imunidade mágica.
- como jogar: antes dos 24 min, prenda ela de longe com Kinetic Field pra atrapalhar o farm rápido de Maelstrom/Mjollnir; depois que ela tiver BKB, concentre o controle em Dead Shot e The Calling em vez de tentar prender ela parada, porque esses dois não furam imunidade.
- fonte: pro_dados/disruptor.json; pro_dados/muerta.json; OpenDota explorer (lane_role, partidas de liga 7.40-7.41)

## Contra Broodmother (broodmother)

- placar: 14V/42 (33,3%) para o Disruptor; conferido contra pro_dados/broodmother.json (28V da Broodmother). Maior desvantagem da lista; amostra pequena (42 jogos), tratar com cautela.
- por que importa: pior resultado medido do Disruptor contra qualquer herói do confronto; Spin Web dá mobilidade que escapa do alcance curto do kit do Disruptor, e Insatiable Hunger cura ela de qualquer poke à distância.
- janelas: Broodmother sobe Wraith Band aos 1,9 e Power Treads aos 6,6, puxando farm de jungle cedo; fecha Manta aos 17,6 (via Yasha 13,9 + Diadem 15,1), bem antes do Blink do Disruptor (24,0). O Black King Bar dela sai aos 24,1, quase junto do Blink do Disruptor.
- o que ela faz com você: Spin Web dá até 40% de velocidade de movimento dentro da própria rede, deixando ela fugir do alcance de 800-900 do Disruptor antes dele reagir; Insatiable Hunger dá lifesteal de até 100% do dano causado (não é cura por vida máxima), então dano isolado de Thunder Strike não sustenta a troca sozinho.
- o que você faz com ela: Kinetic Field prende a Broodmother (e qualquer Spiderling perto) antes dela alcançar a própria rede; Static Storm silencia Spin Web e Insatiable Hunger enquanto ela estiver na área, cortando fuga e cura ao mesmo tempo.
- itens que viram: o Manta da Broodmother (17,6) sai bem antes do Blink do Disruptor, então ela já farma rápido com imagens muito antes dele ter mobilidade; o Black King Bar dela (24,1) chega quase junto do Blink do Disruptor, o que significa que ela costuma ter a resposta de imunidade pronta assim que o Disruptor ganha capacidade de iniciar.
- como jogar: não entre no raio de ação de uma web sem conseguir fechar a distância antes; priorize prender ela longe da própria rede com Kinetic Field, porque uma vez que ela alcança a teia a perseguição praticamente acaba.
- fonte: pro_dados/disruptor.json; pro_dados/broodmother.json

## Contra Io (wisp)

- placar: 17V/50 (34,0%) para o Disruptor; conferido contra pro_dados/wisp.json (33V do Io). Segunda maior desvantagem; amostra pequena (50 jogos), tratar com cautela.
- por que importa: segundo pior resultado medido do Disruptor; o Io dessa amostra joga como suporte (build de wards, Holy Locket, Mekansm), concorrência direta de papel, e Relocate ignora qualquer prisão de área que o Disruptor tente formar.
- janelas: Io sobe Magic Wand aos 6,8 e Mekansm aos 14,7, perfil de suporte de proteção; o Aghanim's Scepter dele sai cedo, aos 16,8 (em 27% das partidas da amostra, 117 de 438), bem antes do Blink do Disruptor (24,0).
- o que ele faz com você: Tether (alcance 1600, fura Black King Bar) conecta Io a um aliado, transfere parte da cura ou mana recebida e dá bônus de velocidade aos dois, além de desacelerar quem tocar o fio; Relocate teleporta Io e o aliado tetherado pra qualquer ponto do mapa, ignorando Kinetic Field e Static Storm porque é teleporte, não movimento.
- o que você faz com ele: Static Storm silencia Overcharge e cancela o cast de Relocate se ele for pego no meio da canalização; Glimpse funciona nele como em qualquer herói, devolvendo-o 4s pra trás mesmo logo depois de usar Tether.
- itens que viram: o Scepter do Io (16,8) sai muito antes do Blink do Disruptor (24,0), dando a ele ferramenta extra de proteção numa janela em que o Disruptor ainda só tem Arcane Boots e Glimmer Cape; é por isso que a troca pesa contra o Disruptor mesmo sem os dois dividirem lane direta.
- como jogar: não gaste Static Storm torcendo pra prender o Io sozinho, porque Relocate ignora a área; mire o combo no aliado tetherado em vez do próprio Io, e use Glimpse se ele começar a canalizar Relocate perto de você pra tentar cancelar a rota de fuga.
- fonte: pro_dados/disruptor.json; pro_dados/wisp.json; constants_abilities.json (wisp_tether, wisp_relocate, wisp_overcharge, disruptor_static_storm, disruptor_glimpse)

## Contra Enigma (enigma)

- placar: 15V/44 (34,1%) para o Disruptor; conferido contra pro_dados/enigma.json (29V do Enigma). Terceira maior desvantagem; amostra pequena (44 jogos), tratar com cautela.
- por que importa: terceiro pior resultado medido do Disruptor; Black Hole fura Black King Bar e compete direto pelo papel de "prender o grupo inteiro" que o Disruptor também cumpre, quem canaliza primeiro costuma vencer a luta de 5.
- janelas: Enigma sobe Blink aos 15,8, quase 9 min antes do Blink do Disruptor (24,0); o Aghanim's Shard dele sai aos 17,1 (soma stun no Malefice) e o Black King Bar aos 25,7, logo depois do Blink do Disruptor.
- o que ele faz com você: Black Hole é canalizado por 4s, prende tudo num raio de 420 e fura Black King Bar, então mesmo o Disruptor com BKB ainda fica preso dentro; Malefice aplica 3 instâncias de stun, e o Aghanim's Shard aumenta a duração de cada instância em 0,3s e cria um Eidolon por instância, perigoso se o Disruptor for pego sozinho antes de formar a própria área.
- o que você faz com ele: Static Storm silencia o Enigma, mas o Black Hole, uma vez já em canalização, só é interrompido por stun ou silence que acerte ele durante os 4s; Kinetic Field pode travar o Enigma antes dele entrar no alcance de 275 de lançamento do Black Hole, já que ele precisa estar perto pra canalizar.
- itens que viram: o Blink do Enigma (15,8) chega quase 9 min antes do Blink do Disruptor, então até os 24 min é o Enigma quem ameaça abrir a luta primeiro com Black Hole; o Black King Bar dele (25,7) sai pouco depois do Blink do Disruptor, fechando a resposta dele ao silêncio do Static Storm logo na sequência.
- como jogar: trate qualquer aproximação do Enigma como ameaça de Black Hole, mesmo sem ver o Blink Dagger dele, porque o alcance de lançamento é só 275 e ele precisa estar perto; se ele começar a canalizar, jogue todo stun ou silence disponível nele antes dos 4s passarem, porque depois disso o dano já caiu.
- fonte: pro_dados/disruptor.json; pro_dados/enigma.json
