---
id: confrontos-pudge
heroi: Pudge
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/pudge.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/lion.json
- dota-hub-conteudo-novo/pro_dados/disruptor.json
- dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/mars.json
- dota-hub-conteudo-novo/pro_dados/axe.json
- dota-hub-conteudo-novo/pro_dados/tidehunter.json
- dota-hub-conteudo-novo/pro_dados/spirit_breaker.json
- dota-hub-conteudo-novo/pro_dados/morphling.json
- dota-hub-conteudo-novo/pro_dados/phantom_assassin.json
- dota-hub-conteudo-novo/pro_dados/drow_ranger.json
- dota-hub-conteudo-novo/pro_dados/doom_bringer.json
- dota-hub-conteudo-novo/pro_dados/magnataur.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://dota2.fandom.com/wiki/Pudge
---

## Contra Shadow Fiend (nevermore)
- placar: Pudge venceu 217 de 405 partidas de pro (53,6%). Fonte: pro_dados/pudge.json (confrontos).
- por que importa: é o oponente com mais jogos contra Pudge no banco de pro (405), de longe o mais comum. Shadow Fiend é mid na imensa maioria das partidas, então o confronto normalmente não é de lane, é Pudge roaming/puxando pull subindo pro meio pra gankear ele.
- janelas: até os 5:54 Shadow Fiend só tem Power Treads (pro_dados/nevermore.json), fase mais frágil dele; Pudge com Boots (3:48) e Magic Wand (5:48) já consegue caçar essa janela. Dos 10 aos 23min Shadow Fiend ainda sem Hurricane Pike (23:00) nem Black King Bar (25:12), então um Hook bem puxado nessa fase quase sempre vira Dismember livre, já que ele não tem distância nem imunidade pra escapar. Depois dos 23 a 25min ele ganha Hurricane Pike (ativo empurra e dá distância) e BKB, e a partir daí o Hook precisa vir de ângulo, não de frente.
- o que ele faz com você: Shadowraze acerta até 280 de dano mágico instantâneo numa de três distâncias fixas (perto/médio/longe), mais bônus por stack de Necromastery (constants_abilities.json: nevermore_shadowraze1, base 85 a 280 + 35 a 80 por stack). Se ele guardou almas, Requiem of Souls (raio 1000, automática mesmo se ele morrer) empurra e reduz sua resistência mágica, dificultando fechar o Dismember em cima dele logo depois.
- o que você faz com ele: Shadow Fiend tem pouca vida base e nenhum disable de escape, só Raze pra te afastar se acertar no seu pé; Meat Hook (dano Puro, bkbpierce: Yes, constants_abilities.json) o puxa de volta mesmo que ele tente recuar com Raze, e o Dismember (também ignora imunidade a magia do alvo, canaliza 2,75s, dreno de vida baseado na sua Força) praticamente garante a kill se ele não tiver save.
- itens que viram: o seu Aghanim's Scepter (mediana 17:12, p25 15:06) não ajuda muito aqui, é item de luta de grupo; o que decide é o seu Blink (mediana 19:30, p25 16:00) chegando antes do Hurricane Pike dele (23:00), te dando o ângulo certo pro Hook sem precisar correr até ele.
- como jogar: gankeie Shadow Fiend assim que tiver nível 6 e mana pro combo, de preferência antes dos 20min; depois que ele tiver Pike e BKB, só vá se tiver blink pronto e um jeito de cortar a rota de fuga dele.
- fonte: pro_dados/pudge.json; pro_dados/nevermore.json; constants_abilities.json (pudge_meat_hook, pudge_dismember, nevermore_shadowraze1, nevermore_requiem).

## Contra Rubick (rubick)
- placar: Pudge venceu 186 de 375 partidas (49,6%), praticamente parelho. Fonte: pro_dados/pudge.json.
- por que importa: 2º oponente com mais jogos contra Pudge (375), suporte pos 4/5 que disputa exatamente a mesma função de roam e visão, muitas vezes do lado oposto do mapa puxando pull ou cravando ward.
- janelas: antes dos 10:18 Rubick ainda não tem Arcane Boots (pro_dados/rubick.json), fase em que ele é lento pra fugir de um gank. Dos 10 aos 21:36 ele segue sem Blink, então se Pudge chega perto com Hook, Rubick não tem reposicionamento próprio. Depois dos 21:36 ele ganha Blink e passa a conseguir se afastar ou flanquear antes do Hook sair.
- o que ele faz com você: Spell Steal (cd 16/10/4, constants_abilities.json) copia o último feitiço lançado por qualquer herói inimigo visível; se ele vir você usar Dismember de perto (alcance de roubo cobre boa área), ele fica com uma cópia do seu próprio combo por até 300s em nível 3. Telekinesis (110 de mana, estuna 0,9 a 1,5s) pode interromper seu channel de Dismember de longe se ele perceber a tempo.
- o que você faz com ele: Rubick tem pouquíssima vida de suporte; o Hook (pure damage, atravessa BKB em dano e puxão) o pega de qualquer lugar visível em 1300 de alcance, e o Dismember fecha a kill antes dele conseguir fugir, principalmente antes do Blink dele sair.
- itens que viram: se Rubick já tem Aghanim's Scepter dele (mediana 27:24, pro_dados/rubick.json), o Spell Steal vira duas cópias de feitiço com alcance maior, o que o torna perigoso perto de você depois de ver seu combo uma vez; antes disso, ele só rouba uma coisa por vez.
- como jogar: gankeie Rubick antes do Blink dele (21:36); se for usar Dismember perto dele, prefira já ter matado ou cegado a visão dele antes, pra ele não copiar o seu próprio combo.
- fonte: pro_dados/pudge.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis); https://api.opendota.com/api/constants/aghs_desc (rubick scepter).

## Contra Lion (lion)
- placar: Pudge venceu 169 de 336 partidas (50,3%). Fonte: pro_dados/pudge.json.
- por que importa: 3º mais jogado contra Pudge (336), outro suporte pos 4/5 clássico de kill lane, direto rival de função: os dois vivem de acertar um disable e fechar um combo de burst sozinhos.
- janelas: até os 7:24 nenhum dos dois tem item de spike real (Lion só com Tranquil Boots, pro_dados/lion.json); é fase de poke com Impale. Dos 7 aos 18:12 Lion ainda não tem Blink, então ele depende de alcance de 650 do Impale (point/unit target) pra conectar o combo; Pudge com Phase Boots (6:54) consegue fechar essa distância a pé. Depois dos 18:12 Lion ganha blink próprio e passa a iniciar sozinho em qualquer alvo isolado, inclusive em você.
- o que ele faz com você: Hex (24 a 12s de cd, transforma por 2 a 3,2s) te impede de usar Hook/Dismember se acertar primeiro; Finger of Death causa 600 a 850 de dano mágico instantâneo (constants_abilities.json), dano que sozinho ameaça te matar no early/mid se você não tiver vida de Flesh Heap acumulada.
- o que você faz com ele: Lion tem pouquíssima vida; Hook te garante o alcance (1300) pra chegar nele antes dele alinhar o Impale (650), e o Dismember fecha mesmo que ele tente Hex alguém do seu time pra atrasar.
- itens que viram: seu Aghanim's Scepter (17:12) não muda muito esse 1x1, é item de grupo; o que decide é quem acerta o disable primeiro, Hook (instantâneo na saída, mas precisa de linha livre) contra Hex (precisa alcance curto). Depois dos 25:48 ele tem Aghanim's Shard e Glimmer Cape (pro_dados/lion.json), ganhando mais sustain de cast e um save de invisibilidade pra escapar do seu gank.
- como jogar: gankeie Lion antes do Blink dele; se ele já gastou Hex recentemente, essa é a janela segura pra iniciar o combo.
- fonte: pro_dados/pudge.json; pro_dados/lion.json; constants_abilities.json (lion_voodoo, lion_finger_of_death, lion_impale).

## Contra Disruptor (disruptor)
- placar: Pudge venceu 176 de 331 partidas (53,2%). Fonte: pro_dados/pudge.json.
- por que importa: 4º mais jogado contra Pudge (331), suporte pos 5 quase onipresente nas composições atuais, direto concorrente de visão e controle de rune no mapa.
- janelas: até os 11:24 Disruptor ainda não tem Arcane Boots (pro_dados/disruptor.json), fase lenta pra ele reagir. O item que mais importa pro duelo é o ult dele: Static Storm (cd 100/85/70, disponível a partir do nível 6) silencia 6s numa área de 550 de raio, então a partir do momento em que ele tem ult, qualquer engage seu dentro dessa área trava seu Hook e Dismember no meio.
- o que ele faz com você: Static Storm silencia todo mundo na área por 6s e o dano cresce ao longo da duração (até 350 de dano por segundo no pico, nível 3); se ele jogar em cima de você no meio de um combo, seu Hook/Rot/Dismember ficam bloqueados pelo silêncio inteiro. Glimpse (cd 24 a 18, dano baseado em % da distância teleportada) te puxa de volta 4s no tempo se você tiver avançado muito com Rot.
- o que você faz com ele: Disruptor tem pouca vida; o Hook o pega de qualquer ângulo visível e, fora do alcance do Static Storm dele mesmo, o Dismember fecha sem resistência.
- itens que viram: seu Aghanim's Scepter (17:12) ajuda bastante aqui porque aumenta o raio e o dano do Rot (mais 200 de raio, mais 90 de dano, -20% de cura no alvo, segundo o changelog da habilidade e https://api.opendota.com/api/constants/aghs_desc), então mesmo se ele te silenciar dentro da nuvem, o Rot já ativado continua batendo nele; o Aghanim's Scepter dele (mediana 34:54, pro_dados/disruptor.json) é tardio, então a maior parte do jogo ele não tem a versão turbinada de Static Storm.
- como jogar: ligue o Rot antes de entrar no alcance do Static Storm, assim o dano de área continua mesmo silenciado; gankeie Disruptor antes dele ter ult (nível 6) sempre que possível.
- fonte: pro_dados/pudge.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm, disruptor_glimpse); https://api.opendota.com/api/constants/aghs_desc (pudge scepter).

## Contra Ogre Magi (ogre_magi)
- placar: Pudge venceu 144 de 308 partidas (46,8%), levemente desfavorável. Fonte: pro_dados/pudge.json.
- por que importa: 5º mais jogado contra Pudge (308), suporte pos 5 tanque que aguenta o combo de Pudge melhor que a média dos outros suportes, por isso o winrate cai um pouco abaixo de 50%.
- janelas: até os 11:12 Ogre Magi ainda não tem Arcane Boots (pro_dados/ogre_magi.json); mas já desde o nível 1 ele tem Fireblast, então mesmo sem item ele consegue interromper um Dismember cedo. A fase mais perigosa pra ele é antes do nível 6 (sem Multicast relevante); depois disso, Multicast dá chance de dobrar ou triplicar o Fireblast, o que pode te travar duas vezes seguidas.
- o que ele faz com você: Fireblast (cd 11 a 8s, 1,2s de stun, 70 a 250 de dano) interrompe seu Dismember ou seu cast de Hook se ele reagir rápido; Multicast dá até 30% de chance de triplicar esse stun (constants_abilities.json), o que no pior caso trava você quase 2,4s seguidos. Ogre tem Força alta e HP acima da média de suporte, então ele aguenta mais hits de Rot antes de precisar recuar.
- o que você faz com ele: o Hook ainda o pega de longe e o puxa pra perto mesmo com a vida alta dele; o problema é segurar o Dismember até o fim sem ser interrompido, porque ele tem o próprio stun pra cortar seu combo. Se você conseguir landar o Hook fora do alcance de reação dele, o Dismember passa limpo.
- itens que viram: seu Aghanim's Scepter (17:12) ajuda em grupo porque o Rot maior cobre mais área de suporte parado dando Bloodlust; do lado dele, o Aghanim's Shard (26:06, pro_dados/ogre_magi.json) dá um escudo de dano pra aliado que absorve parte do seu combo em luta de 5, mas chega tarde pro duelo isolado.
- como jogar: gankeie Ogre Magi antes do nível 6, enquanto Multicast ainda não ameaça dobrar o Fireblast; se ele já reagiu ao seu Hook com Fireblast, não insista no Dismember sozinho, puxe aliado.
- fonte: pro_dados/pudge.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_multicast).

## Contra Snapfire (snapfire)
- placar: Pudge venceu 139 de 297 partidas (46,8%), levemente desfavorável. Fonte: pro_dados/pudge.json.
- por que importa: 6º mais jogado contra Pudge (297), suporte pos 4 clássico da meta atual, direto concorrente de função: os dois vivem fora da lane fixa, caçando e controlando zona.
- janelas: ela compra Aghanim's Shard muito cedo pros padrões do item, mediana 16:54 (pro_dados/snapfire.json), bem antes do Blink (20:42) ou do Glimmer Cape (21:54). Antes dos 16:54 ela ainda não tem o Shard de Firesnap Cookie turbinado; é a janela em que seu Hook puro tem mais chance de pegá-la isolada, já que depois disso ela ganha mais utilidade de save.
- o que ele faz com você: Mortimer Kisses lança 8 globos de até 360 de dano cada ao longo de 5,5s numa área de 275 de raio por impacto, com queima de 60 a 100 por segundo; se ela acertar essa ult em cima de você durante um Dismember (você fica parado canalizando), o dano de área some boa parte da sua vida mesmo com Flesh Heap acumulado.
- o que você faz com ele: Snapfire tem HP inicial relativamente alto pra suporte, mas sem disable de escape forte cedo; o Hook ainda o alcança de longe (1300) e o Dismember fecha, principalmente antes do Glimmer Cape dela (invisibilidade + resistência mágica) sair.
- itens que viram: o Aghanim's Shard dela (16:54) dá ao Firesnap Cookie um segundo impacto (via Mortimer) com cura pro alvo e 40% do dano de impacto no destino, o que pode salvar aliado perto dela do seu combo; seu Aghanim's Scepter (17:12) compete em timing quase igual, então quem completa o item primeiro geralmente domina a troca em grupo.
- como jogar: gankeie Snapfire antes dos 17min, enquanto o Shard dela ainda não está pronto; depois disso, cuidado ao parar perto dela pra canalizar Dismember, o raio da Mortimer Kisses cobre bastante área.
- fonte: pro_dados/pudge.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_mortimer_kisses, snapfire_firesnap_cookie); https://api.opendota.com/api/constants/aghs_desc (snapfire shard).

## Contra Mars (mars)
- placar: Pudge venceu 125 de 242 partidas (51,7%). Fonte: pro_dados/pudge.json.
- por que importa: mesma posição principal (offlane), o rival de offlane mais jogado contra Pudge em pro (242 jogos). Os dois disputam a mesma rota e o mesmo papel de iniciador de força.
- janelas: os dois correm pro item de spike quase junto: Mars com Blink mediana 15:12 (pro_dados/mars.json) contra o seu Blink em 19:30 (p25 16:00), então na prática Mars costuma chegar primeiro no reposicionamento. Antes disso, dos 8:30 aos 15min, Spear of Mars (alcance 900 a 1200, bem maior que o seu Hook de perto) ameaça iniciar à distância antes de você alinhar o gancho.
- o que ele faz com você: Spear of Mars te acerta a até 1200 de distância e, se você bater numa árvore, estrutura ou penhasco, fica preso e estunado (1,3 a 2,2s); Arena of Blood cria uma arena de 550 de raio por 5,5s com lanceiros batendo em quem fica perto da borda, o que pode te prender dentro sem alcançar o alvo certo pro Hook.
- o que você faz com ele: Mars tem bastante Força e Bulwark reduz 40 a 70% do dano físico de frente, mas Dismember e Rot são mágicos/puros, então o escudo dele não ajuda contra seu combo; o Hook ainda o puxa mesmo com Bulwark ativo, já que não é dano físico de ataque.
- itens que viram: o Aghanim's Shard dele (21:30, pro_dados/mars.json) faz o Spear impalar até 2 heróis com rastro de fogo, o que pode te pegar junto se você estiver alinhado atrás do alvo principal; seu próprio Blink (19:30) é o que te dá o ângulo pra evitar ficar na linha da lança dele.
- como jogar: não fique alinhado atrás de um aliado perto de Mars depois dos 21min, o Spear com Shard pode te pegar de brinde; prefira iniciar você primeiro, antes do Blink dele estar pronto.
- fonte: pro_dados/pudge.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_arena_of_blood, mars_bulwark); https://api.opendota.com/api/constants/aghs_desc (mars shard).

## Contra Axe (axe)
- placar: Pudge venceu 108 de 200 partidas (54,0%). Fonte: pro_dados/pudge.json.
- por que importa: mesma posição principal (offlane), outro clássico iniciador de força disputando a mesma rota, com 200 jogos de amostra.
- janelas: Axe fica pronto pro combo cedo, com Phase Boots em 7:12 e Blink em 15:42 (pro_dados/axe.json), ligeiramente antes do seu Blink (19:30). A fase mais perigosa pra você é entre o nível 6 dele (Culling Blade liberado) e antes do seu Aghanim's Scepter (17:12), porque Culling Blade reseta a recarga toda vez que mata um herói, e se Axe pegar uma kill fácil ele já está pronto pra outra troca.
- o que ele faz com você: Berserker's Call força você (e quem estiver perto) a atacar nele por 2,1 a 3s, mas não te impede de castar Hook ou Dismember, só tira o alvo do seu ataque básico; Culling Blade causa 275 a 475 de dano Puro (igual tipo de dano do seu Hook) e mata direto se sua vida já estiver baixa pelo combo dele.
- o que você faz com ele: o Hook (pure damage) ainda acerta cheio mesmo durante o Call, já que não é um ataque básico; o problema real é que Axe tem bastante vida e armadura cedo (Chainmail, Phase Boots), então o Dismember demora mais pra fechar nele do que num suporte, dando tempo do Counter Helix dele (100 a 160 de dano puro a cada 4 a 7 ataques recebidos) descontar parte do seu combo se vocês trocarem auto-ataque.
- itens que viram: seu Aghanim's Scepter (17:12) dá mais sobrevida de grupo com o corte de cura do Rot, bom porque Axe também se cura via itens situacionais; o Black King Bar dele (25:54, pro_dados/axe.json) não impede seu Hook nem seu Dismember, já que os dois atravessam imunidade a magia (bkbpierce: Yes, constants_abilities.json).
- como jogar: evite trocar auto-ataque dentro do Call dele, deixe o Dismember fazer o trabalho; lembre que o BKB dele não resolve seu combo, então ele ainda está vulnerável mesmo imune a magia.
- fonte: pro_dados/pudge.json; pro_dados/axe.json; constants_abilities.json (pudge_meat_hook, pudge_dismember, axe_berserkers_call, axe_culling_blade, axe_counter_helix).

## Contra Tidehunter (tidehunter)
- placar: Pudge venceu 104 de 191 partidas (54,5%). Fonte: pro_dados/pudge.json.
- por que importa: mesma posição principal (offlane), outro tanque iniciador de área que compete pela mesma rota e pelo mesmo papel de abrir luta de grupo.
- janelas: Tidehunter farma rápido pro Blink (21:12) e pro Aghanim's Scepter dele (22:18, pro_dados/tidehunter.json), mas antes disso, dos 7:48 (Phase Boots) até os 22min, ele ainda não tem Ravage disponível com upgrade nem reposicionamento, só o nível do ult (a partir do 6). Essa janela de meio de jogo é quando um Hook bem puxado nele vale mais, porque ele ainda não tem como fugir de um combo isolado.
- o que ele faz com você: Gush (100 a 280 de dano, -40% de velocidade, -3 a -6 de armadura por 4,5s) pode te alcançar de longe pra cortar sua fuga depois de um Hook errado; Ravage estuna tudo num raio de 1250, então se ele ravagear o seu time antes de você hookar, seu combo perde a prioridade de quem inicia.
- o que você faz com ele: Kraken Shell bloqueia uma fatia fixa de dano Físico (15 a 75) a cada ataque recebido, mas o Hook é dano Puro e o Rot é Mágico, então o escudo dele não reduz nada do seu combo; o Dismember ainda estuna e drena vida normalmente, já que atravessa imunidade a magia.
- itens que viram: o Aghanim's Scepter dele (22:18) transforma o Gush numa onda em linha que afeta vários alvos, perigoso se seu time estiver agrupado depois de um engage seu; o seu (17:12) ajuda a segurar a troca em grupo com o corte de cura do Rot em cima dele.
- como jogar: force o combo antes do nível 6 dele (antes do Ravage existir) sempre que possível; depois disso, cuidado pra não ficar parado dando Dismember bem no meio do grupo dele.
- fonte: pro_dados/pudge.json; pro_dados/tidehunter.json; constants_abilities.json (tidehunter_kraken_shell, tidehunter_ravage, tidehunter_gush).

## Contra Spirit Breaker (spirit_breaker)
- placar: Pudge venceu 83 de 159 partidas (52,2%). Fonte: pro_dados/pudge.json.
- por que importa: mesma posição principal (pos 4) e o rival de roam mais direto da lista: os dois vagam pelo mapa sozinhos caçando gank em vez de ficar numa lane fixa, então é comum os dois se encontrarem longe de qualquer rota.
- janelas: Spirit Breaker normalmente sai caçando assim que tem nível 2 (Charge of Darkness já disponível desde cedo); o item que mais muda o duelo é o Shadow Blade dele, mediana 22:54 (pro_dados/spirit_breaker.json), que dá invisibilidade pra ele iniciar de surpresa. Antes disso, dos 9:24 (Phase Boots) até os 22min, é ele puramente dependendo do Charge pra fechar, sem furtividade.
- o que ele faz com você: Charge of Darkness (não atravessa imunidade a magia, bkbpierce: No, constants_abilities.json) persegue você em linha reta ganhando velocidade por até 1,5s antes de acertar um Greater Bash (esse sim atravessa BKB, bkbpierce: Yes); diferente do seu Hook, o Charge não erra, ele segue o alvo até acertar ou ser interrompido.
- o que você faz com ele: Hook tem alcance fixo de 1300 mas precisa de linha livre; contra alguém que também caça sozinho, geralmente quem avista primeiro vence a troca, porque Spirit Breaker tem pouca forma de escapar de um Hook puxado a tempo (ele só tem Bulldoze, que dá velocidade e resistência a status, não invulnerabilidade).
- itens que viram: o Shadow Blade dele (22:54) muda o jogo porque ele passa a iniciar de invisível, cortando a chance de você avistar primeiro; antes disso, warding (seu Observer/Sentry, medianas 15:12/17:00) ajuda bastante a evitar ser pego de surpresa pelo Charge.
- como jogar: cheque sempre se ele já gastou o Charge (cd 22 a 13s) antes de andar sozinho por áreas sem visão; depois do Shadow Blade dele, mantenha ward perto de rota pra não ser pego no escuro.
- fonte: pro_dados/pudge.json; pro_dados/spirit_breaker.json; constants_abilities.json (spirit_breaker_charge_of_darkness, spirit_breaker_greater_bash, spirit_breaker_bulldoze).

## Contra Morphling (morphling)
- placar: Pudge venceu 60 de 91 partidas (65,9%), a maior vantagem da lista com amostra boa. Fonte: pro_dados/pudge.json.
- por que importa: os dois quase nunca dividem lane, Morphling é carry de safelane e Pudge é offlane/roam, mas é o maior winrate de Pudge contra qualquer carry com 30+ jogos. O motivo é mecânico: Morphling não tem nenhum escape de verdade contra um Hook bem puxado.
- janelas: antes dos 18:24 Morphling só tem Power Treads (6:00) e Vladmir's Offering (10:42, pro_dados/morphling.json), fase extremamente frágil; é a janela ideal pro gank. Só com Manta Style (18:24) ele ganha dispel e ilusões pra confundir alvo, e só com Butterfly (25:48) ele de fato vira a troca de evasão a favor dele.
- o que ele faz com você: Waveform te atinge no caminho e deixa Morphling invulnerável durante o próprio dash, mas é uma linha reta e tem recarga de 21 a 12s (constants_abilities.json); fora dessa janela de invulnerabilidade, ele não tem mais nenhuma defesa própria contra disable.
- o que você faz com ele: Meat Hook não é um ataque, é dano Puro de feitiço, então evasão e Blur (que ele nem tem) não bloqueiam; ele é puxado igual a qualquer outro alvo, e como a build dele prioriza dano e não vida, o Dismember costuma fechar a kill rápido, principalmente antes do Manta sair.
- itens que viram: o seu Blink (mediana 19:30, p25 16:00) chega antes do Manta dele (18:24) numa parte relevante das partidas, dando a chance de pegá-lo isolado fora da base; depois do Butterfly (25:48) ele ganha evasão alta contra ataque básico, mas isso não ajuda contra o Hook nem contra o Dismember, que não são ataques.
- como jogar: gankeie Morphling o quanto antes, de preferência antes dos 18min; mesmo depois do Manta e do Butterfly, o combo Hook + Dismember continua funcionando igual, porque nenhum dos dois é bloqueado por evasão.
- fonte: pro_dados/pudge.json; pro_dados/morphling.json; constants_abilities.json (pudge_meat_hook, pudge_dismember, morphling_waveform).

## Contra Phantom Assassin (phantom_assassin)
- placar: Pudge venceu 37 de 57 partidas (64,9%), 2ª maior vantagem da lista com amostra boa. Fonte: pro_dados/pudge.json.
- por que importa: outro carry sem lane em comum (ela é safelane 1) mas com um dos maiores winrates de Pudge contra qualquer herói com 30+ jogos, pela mesma razão de Morphling: o kit dela de evasão e furtividade não funciona contra feitiço.
- janelas: antes dos 14:24 ela só tem Power Treads (6:00, pro_dados/phantom_assassin.json), fase muito frágil pra uma carry; o Battle Fury dela completa em 14:24, dando sustain de farm mas ainda nenhuma defesa contra disable. Só com Black King Bar (23:30) ela ganha imunidade a magia de verdade.
- o que ele faz com você: Blur deixa ela invisível a mais de 500 de distância de herói inimigo e disjunta projéteis, útil pra se esconder de um gank visual, mas não impede o Hook de acertar se você já tiver linha de visão no momento do cast; Coup de Grace dá chance de crítico de até 400% no auto-ataque, perigoso se ela te pegar primeiro numa troca corpo a corpo.
- o que você faz com ele: Meat Hook é feitiço, não ataque básico, então Blur (evasão) não bloqueia; antes do BKB dela (23:30), o Dismember fecha a kill quase sem resistência, já que ela não tem nenhum disable ou escape próprio além do Blur furtivo.
- itens que viram: seu Blink (19:30) chega bem antes do BKB dela (23:30) na maior parte das partidas, dando a janela certa pra fechar o combo; depois do BKB dela, o Dismember ainda assim estuna e causa dano normalmente (bkbpierce: Yes, pudge_dismember em constants_abilities.json), então ela continua vulnerável mesmo imune a magia.
- como jogar: gankeie antes do Battle Fury dela consolidar farm rápido; não se preocupe com o BKB dela quando for fechar o combo, ele não impede o Dismember.
- fonte: pro_dados/pudge.json; pro_dados/phantom_assassin.json; constants_abilities.json (pudge_dismember, phantom_assassin_blur, phantom_assassin_coup_de_grace).

## Contra Drow Ranger (drow_ranger)
- placar: Pudge venceu 25 de 73 partidas (34,2%), a maior desvantagem da lista com amostra boa. Fonte: pro_dados/pudge.json.
- por que importa: outra carry sem lane em comum, mas o pior resultado de Pudge contra qualquer herói com 30+ jogos. O motivo é mecânico: o kit dela foi desenhado pra nunca deixar ninguém chegar perto.
- janelas: Drow joga de longe o jogo inteiro; o item que mais importa pro duelo é o Gust (Wave of Silence), disponível desde o nível 2 a 3. Hurricane Pike dela sai aos 22:48 (pro_dados/drow_ranger.json), dando ainda mais distância ativa depois do meio de jogo.
- o que ele faz com você: Gust silencia por 3 a 6s e empurra pra trás numa largura de 250, o que corta seu cast de Hook se ela ver você chegando e ainda te afasta do alcance de 1300; Marksmanship dá chance de 30 a 40% de dano bônus ignorando armadura base, então numa troca de longa distância ela sangra muito dano sem você conseguir revidar.
- o que você faz com ele: o Hook ainda pega ela de 1300 de distância se você conseguir se posicionar sem ser visto primeiro; o problema é justamente chegar perto o bastante pra lançar sem ela perceber e silenciar você antes.
- itens que viram: nenhum item seu resolve isso sozinho, é puramente timing e visão; do lado dela, o Aghanim's Shard (33:06, pro_dados/drow_ranger.json) e o Scepter (20:54) chegam cedo em relação ao resto da build e reforçam ainda mais a distância que ela já mantém naturalmente.
- como jogar: nunca ande visível na direção dela sem fumaça ou ângulo cego; prefira flanquear por trás da visão dela em vez de andar de frente, porque o Gust bloqueia o Hook antes mesmo dele sair.
- fonte: pro_dados/pudge.json; pro_dados/drow_ranger.json; constants_abilities.json (drow_ranger_wave_of_silence, drow_ranger_marksmanship).

## Contra Doom (doom_bringer)
- placar: Pudge venceu 41 de 110 partidas (37,3%), 2ª maior desvantagem da lista com amostra boa. Fonte: pro_dados/pudge.json.
- por que importa: mesma posição principal (offlane) e o pior resultado de Pudge entre os heróis que de fato dividem a mesma rota, porque o ult de Doom desliga o seu kit inteiro.
- janelas: até os 19:42 Doom ainda não tem Blink (pro_dados/doom_bringer.json), então ele depende de alcance de ataque ou Devour pra chegar perto; o Aghanim's Shard dele (18:42) sai antes do Blink e já melhora o Devour. A partir do nível 6, a qualquer momento que ele tiver mana, o Doom (feitiço) pode virar o confronto independente de item.
- o que ele faz com você: Doom (dano Puro, bkbpierce: Yes, não removível por dispel, constants_abilities.json) te impede de lançar qualquer feitiço, inclusive Hook, Rot e Dismember, por 12 a 16s, além de causar 25 a 66 de dano por segundo; se ele acertar isso em você antes do seu combo sair, você vira um herói sem habilidades pelo resto da luta.
- o que você faz com ele: fora da janela de Doom, Doom (o herói) tem Força razoável mas nenhuma defesa própria contra disable; o Hook ainda o pega de longe e o Dismember fecha normal, desde que você consiga agir antes dele te acertar com o próprio ult.
- itens que viram: Aghanim's Scepter dele (não aparece no top 30 de compras, pro_dados/doom_bringer.json) e Black King Bar (24:00) chegam no mid/late e dão mais sobrevida a ele, mas o que decide o 1x1 é sempre o Doom, não item; do seu lado, não existe item que livre você do efeito do Doom uma vez acertado, nem BKB ajuda já que o Doom atravessa imunidade a magia e o efeito não é removível por dispel algum.
- como jogar: gankeie Doom antes do nível 6 sempre que possível; depois disso, tente abrir o combo antes dele, porque se ele te acertar o Doom primeiro, você perde toda a utilidade da luta.
- fonte: pro_dados/pudge.json; pro_dados/doom_bringer.json; constants_abilities.json (doom_bringer_doom).

## Contra Magnus (magnataur)
- placar: Pudge venceu 29 de 74 partidas (39,2%), 3ª maior desvantagem da lista com amostra boa. Fonte: pro_dados/pudge.json.
- por que importa: outro iniciador de força que compete em parte pela mesma rota (offlane/mid) e uma das piores taxas de Pudge com amostra confiável, porque o combo dele estoura antes do Hook sequer sair.
- janelas: Magnus corre pro Blink cedo, mediana 13:36 (pro_dados/magnataur.json), bem antes do seu (19:30); essa é a fase mais perigosa, porque ele pode iniciar Reverse Polarity em cima do seu time antes de você conseguir se posicionar pra um Hook. Echo Sabre dele sai aos 16:12, dando ainda mais iniciação com Empower.
- o que ele faz com você: Reverse Polarity (dano Mágico mas atravessa imunidade a magia, bkbpierce: Yes, cd fixo de 115s) puxa todo mundo num raio de 430 e estuna 2,5 a 3,5s instantaneamente, sem precisar de alinhamento como o Hook; Skewer te arrasta 800 a 1100 de distância na direção que ele mirar, podendo te tirar de uma posição segura no meio de um Rot ou Dismember.
- o que você faz com ele: Magnus não tem HP excepcionalmente alto pra um iniciador; o Hook ainda o pega de longe, mas como ele tem Blink mais cedo que o seu, geralmente ele consegue reposicionar ou iniciar antes de você montar o combo completo.
- itens que viram: seu Aghanim's Scepter (17:12) chega antes do Scepter dele (25:12, pro_dados/magnataur.json), então na maior parte do mid game você tem mais utilidade de grupo que ele; mas o Blink dele (13:36) chegando bem antes do seu é o que realmente define quem abre a luta primeiro.
- como jogar: não agrupe seu time perto de um Magnus com Blink pronto, o raio de 430 do Reverse Polarity pega todo mundo junto; prefira iniciar você primeiro ou force o engage antes do Blink dele estar pronto.
- fonte: pro_dados/pudge.json; pro_dados/magnataur.json; constants_abilities.json (magnataur_reverse_polarity, magnataur_skewer).
