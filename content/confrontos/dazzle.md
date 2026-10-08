---
id: confrontos-dazzle
heroi: Dazzle
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dazzle.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/axe.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shadow_demon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/gyrocopter.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/abaddon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/slardar.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/skywrath_mage.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/clinkz.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/beastmaster.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/dazzle.md
- https://api.opendota.com/api/constants/aghs_desc
---

## Como esses 14 oponentes foram escolhidos

Dazzle é 100% pos 5 em pro no patch atual (`content/fichas/dazzle.md`, leitura de replay do Atlas tier 1). A lista mistura os 6 que mais jogam contra ele em pro, os suportes 4/5 que mais aparecem no mesmo papel, os extremos de vitória/derrota com amostra de 30+ jogos, e carries que quase nunca compartilham lane com ele mas pesam no resultado da partida de qualquer forma:

- **Mais jogos contra ele (top 6)**: Jakiro, Axe, Mars, Snapfire, Shadow Fiend, Hoodwink.
- **Mesma posição (suporte 4/5 em pro)**: Disruptor, Shadow Demon (os dois já aparecem com volume grande e caem também na categoria de desvantagem abaixo).
- **Maior desvantagem (30+ jogos)**: Gyrocopter, Abaddon, Slardar.
- **Maior vantagem (30+ jogos)**: Skywrath Mage, Clinkz, Beastmaster.

Todos os 14 têm 30 ou mais partidas de pro no confronto, então nenhum bloco abaixo precisa do aviso de amostra pequena.

## Contra Jakiro (jakiro)

- placar: 78 vitórias em 133 jogos de pro, 58,6% pra Dazzle (pro_dados/dazzle.json, confrontos hero_id 64)
- por que importa: é o oponente com mais jogos de pro contra Dazzle no patch, e joga a mesma função (suporte duro que cura e controla área)
- janelas: até os 12 min os dois seguem o mesmo ritmo, Arcane Boots praticamente junto (Dazzle mediana 11,9 min, Jakiro 11,7 min, pro_dados de cada um). Do nível 6 em diante o risco é o combo Ice Path (stun 1,25 a 2s) travando pra Dual Breath (slow de até 40% e dano) e Macropyre (ultimate, 100 a 200 de dano por segundo por 10s, constants_abilities.json); se pegar o Dazzle parado nisso ele morre sem cast nenhum. Depois dos 19 min, Holy Locket (mediana 19,2 min) muda o jogo pro lado do Dazzle: ele passa a ganhar qualquer troca que se arraste, porque amplifica 15% de toda cura, enquanto Jakiro não tem item de spike parecido (o item mais caro dele, Staff of Wizardry, só chega aos 25,1 min)
- o que ele faz com você: zonea com Dual Breath e Ice Path pra impedir Dazzle de chegar perto de curar, e se acertar o combo completo com Macropyre em cima de um Dazzle sem Grave de cooldown livre, mata antes de qualquer reação
- o que você faz com ele: Poison Touch já deixa Jakiro mais lento pra fugir do próprio combo dele, e como nenhuma magia dele impede cast, Shallow Grave sempre resolve se Dazzle reagir a tempo
- itens que viram: Holy Locket do seu lado garante a vitória em troca longa; do lado dele, qualquer item de cooldown reduction em Macropyre (Octarine, não aparece no top 30 de compra em pro) seria o que mudaria essa conta
- como jogar: não disputa poke direto até ter Locket, segura mana com Arcane Boots pro time todo, e sempre guarda Shallow Grave pro aliado que cair dentro do Macropyre
- fonte: pro_dados/dazzle.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre, jakiro_dual_breath, jakiro_ice_path)

## Contra Axe (axe)

- placar: 58 vitórias em 111 jogos de pro, 52,3% pra Dazzle (pro_dados/dazzle.json, confrontos hero_id 2)
- por que importa: segundo oponente com mais jogos de pro contra Dazzle, é o offlaner clássico que caça suporte parado perto de creep
- janelas: antes dos 15 min Axe anda a pé, sem blink, então Berserker's Call (raio 315, dura até 3s, força ataque) só funciona se ele já estiver perto. A partir dos 15,7 min (mediana do Blink dele) ele fecha de qualquer ângulo; o jogo vira corrida entre o blink dele e a reação do Dazzle. Culling Blade (275 a 475 de dano puro fixo, não cresce com o HP do alvo) executa um suporte de HP baixo quase sempre, então tudo depende de quem reage primeiro no momento do blink
- o que ele faz com você: Blink + Call trava o Dazzle perto dele, e se ele não tiver Shallow Grave disponível, Culling Blade mata de graça por ser dano puro fixo
- o que você faz com ele: Shallow Grave ignora BKB e qualquer dano do combo (é imune a dispel também), então se Dazzle reage no instante do Call já sobrevive ao Culling Blade inteiro; Poison Touch desacelera o retorno dele pra fora da troca
- itens que viram: Aghanim's Shard do Axe (mediana 22,9 min) empilha Battle Hunger, reduzindo a regeneração do time de Dazzle e cortando parte do valor de Shadow Wave; Blink Dagger do Dazzle (mediana 30,4 min, bem mais tarde que o de Axe) é a resposta de longo prazo pra chegar no aliado puxado pelo Call antes da execução
- como jogar: na lane, nunca fica parado a até 315 de distância de árvore sem ver o Axe; depois dos 15 min guarda Shallow Grave de prontidão sempre que alguém do time avançar sozinho
- fonte: pro_dados/dazzle.json; pro_dados/axe.json; constants_abilities.json (axe_berserkers_call, axe_culling_blade); aghs_desc (axe shard)

## Contra Mars (mars)

- placar: 62 vitórias em 106 jogos de pro, 58,5% pra Dazzle (pro_dados/dazzle.json, confrontos hero_id 129)
- por que importa: terceiro oponente com mais jogos de pro contra Dazzle, outro offlaner que trava suporte em vez de focar lane
- janelas: Blink de Mars (mediana 15,2 min) chega praticamente junto do de Axe. Spear of Mars (100 a 325 de dano, empala contra parede e estuna até 2,2s) é a ferramenta de pick cedo; Arena of Blood (ultimate, nível 6, dura 5,5s, raio 550, cd de 100 a 90) tranca uma área inteira a partir da metade do jogo, impedindo o Dazzle de sair pra curar quem está fora do raio
- o que ele faz com você: Spear empala contra parede e prende por até 2,2s; se cair dentro da Arena of Blood, Dazzle fica preso junto do time inimigo sem conseguir alcançar o aliado que precisa salvar
- o que você faz com ele: Shallow Grave aguenta todo o dano da sequência Spear + Arena mesmo sob o stun, porque ignora BKB e não pode ser dispelada; só não resolve a prisão territorial da Arena
- itens que viram: Aghanim's Shard de Mars (mediana 21,5 min) deixa a Spear empalar dois heróis com rastro de queimadura, dobrando o risco de pick em cima de dois suportes ao mesmo tempo
- como jogar: evita ficar colado em parede/árvore na faixa de alcance da Spear (até 900 de distância), e se a Arena cair com Dazzle dentro, usa Shallow Grave em quem for focado em vez de tentar sair primeiro
- fonte: pro_dados/dazzle.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_arena_of_blood); aghs_desc (mars shard)

## Contra Snapfire (snapfire)

- placar: 54 vitórias em 101 jogos de pro, 53,5% pra Dazzle (pro_dados/dazzle.json, confrontos hero_id 128)
- por que importa: quarto oponente com mais jogos de pro, é outro suporte de zoneamento que disputa o mesmo espaço de lane
- janelas: até os 16 a 17 min os dois trocam poke parecido (Mortimer Kisses dela, 180 a 360 de impacto mais queima, contra Shadow Wave e Poison Touch do Dazzle). O Aghanim's Shard dela chega cedo pra um suporte (mediana 16,9 min) e deixa Firesnap Cookie curar mais e lançar um Mortimer Kiss extra no ponto de queda, no valor de 40% do impacto normal; o stun em área dela (Spit Out) é upgrade de Scepter, não de Shard, e Scepter nem aparece no top 30 de compra em pro nesse confronto, então não dá pra contar com ele
- o que ele faz com você: Firesnap Cookie estuna até 2,2s e Mortimer Kisses bombardeia área por 5,5s; depois do shard, o Mortimer Kiss extra do Firesnap Cookie soma dano que o Dazzle sozinho não aguenta sem Grave
- o que você faz com ele: Poison Touch acerta até 8 alvos em cone e atrapalha o reposicionamento dela; Shadow Wave cura em arco o suficiente pra compensar o DoT de Mortimer Kisses em trocas longas, o que explica a vantagem de 53,5%
- itens que viram: Aghanim's Shard dela (16,9 min) é o item que mais muda essa conta, pelo reforço em Firesnap Cookie, não por um stun em área (isso é Scepter, raro nesse confronto); Holy Locket do Dazzle (19,2 min) chega pouco depois e devolve a vantagem de cura em área
- como jogar: guarda Shallow Grave assim que ela tiver nível 6 e Shard pronto, porque o combo dela de controle em área é o mais perigoso que ela tem contra um suporte isolado
- fonte: pro_dados/dazzle.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_mortimer_kisses, snapfire_firesnap_cookie); aghs_desc (snapfire shard)

## Contra Shadow Fiend (nevermore)

- placar: 55 vitórias em 101 jogos de pro, 54,5% pra Dazzle (pro_dados/dazzle.json, confrontos hero_id 11)
- por que importa: quinto oponente com mais jogos de pro contra Dazzle mesmo sendo mid contra suporte de pos 5, ou seja, o confronto de fato não é de lane, é de quando os dois se cruzam em rotação e teamfight, e isso acontece com volume alto em pro
- janelas: nos primeiros 10 min Shadow Fiend está puro de nível e farm (lh10 de 78, o mais alto da lista), sem ameaçar ninguém fora da mid. Dos 10 aos 20 min, com Power Treads (5,9 min) e Yasha (13,3 min) ele já rotaciona rápido pra caçar suporte isolado. Depois do Black King Bar (mediana 25,2 min), Requiem of Souls (raio 1000, medo e lentidão crescente até 2,15s) vira uma arma de área que ignora Shallow Grave porque não mata direto, só desorganiza o time inteiro ao redor do Dazzle
- o que ele faz com você: se acertar Shadowraze ou Requiem em cima do Dazzle fora de posição, o medo e a lentidão tiram ele da troca mesmo sem matar, e o resto do combo físico com Yasha/BKB termina o trabalho
- o que você faz com ele: Poison Touch desacelera o Shadow Fiend antes dele puxar Requiem perto do próprio time, e Weave reduz a armadura dele pros aliados focarem mais rápido
- itens que viram: Black King Bar dele (25,2 min) anula o slow de Poison Touch durante a janela ativa; Glimmer Cape do Dazzle (23,9 min) tira o próprio suporte do raio de 1000 do Requiem antes dele cair
- como jogar: nunca fica parado perto do Shadow Fiend sem visão depois que ele bate nível 6, porque o Requiem automático na morte dele também pode punir quem estiver perto tentando reviver a troca
- fonte: pro_dados/dazzle.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_requiem)

## Contra Hoodwink (hoodwink)

- placar: 49 vitórias em 100 jogos de pro, 49% pra Dazzle (pro_dados/dazzle.json, confrontos hero_id 123)
- por que importa: sexto oponente com mais jogos de pro, e joga literalmente a mesma função (suporte 4/5), o que deixa esse confronto o mais equilibrado da lista
- janelas: os dois disputam ward e CS num ritmo parecido até o nível 6. Bushwhack (estuna até 2,1s perto de árvore, até 360 de dano total) compete direto com Shallow Grave pelo mesmo papel de travar a troca. Sharpshooter (ultimate, dano máximo de 600 a 1350, aplica break) é a ameaça real a partir do nível 6: contra um suporte de HP baixo como Dazzle, mesmo sob Shallow Grave ele sobrevive mas sai da troca com quase toda a vida perdida e sem conseguir salvar mais ninguém depois
- o que ele faz com você: Bushwhack trava perto de árvore e Sharpshooter aplica break, cortando a chance do Dazzle reagir com qualquer habilidade depois de ser focado
- o que você faz com ele: Shallow Grave sobrevive ao dano fixo do Sharpshooter porque ignora BKB e não pode ser dispelada, mas não evita o break nem o resto da sequência
- itens que viram: nenhum item do top 30 de Hoodwink muda o Sharpshooter diretamente; do lado do Dazzle, Glimmer Cape (23,9 min) ajuda a sair do alcance antes da carga da flecha completar
- como jogar: trata o duelo como espelho, prioriza visão de árvore pra não andar perto de Bushwhack, e guarda Shallow Grave pro primeiro aliado pego pelo break
- fonte: pro_dados/dazzle.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter)

## Contra Disruptor (disruptor)

- placar: 50 vitórias em 93 jogos de pro, 53,8% pra Dazzle (pro_dados/dazzle.json, confrontos hero_id 87)
- por que importa: mesma posição (suporte 5), mas o motivo real de estar na lista é mecânico: Static Storm silencia, e silêncio é a única coisa no jogo que de fato desliga o Dazzle por completo
- janelas: antes do nível 6 de Disruptor (Static Storm é o ultimate dele) o confronto é equilibrado, os dois trocam ward e harass leve. A partir daí, toda vez que uma troca cai dentro do raio 550 da Static Storm (6s de duração, dano crescente até 350), o Dazzle simplesmente não consegue lançar Shallow Grave nem Shadow Wave enquanto estiver dentro
- o que ele faz com você: Static Storm silencia área inteira por 6s; se o Dazzle estiver dentro no momento de salvar alguém, perde a janela inteira sem poder reagir
- o que você faz com ele: a única resposta é não entrar no raio, ou lançar Shallow Grave antes da Storm cair; depois que ela já está ativa não tem contra-jogo possível além de esperar passar
- itens que viram: Aghanim's Shard de Disruptor (Kinetic Fence) separa fisicamente o Dazzle do aliado que ele quer alcançar; Glimmer Cape do Dazzle (23,9 min) ajuda a sumir antes da Storm formar, já que ela tem atraso de formação
- como jogar: mapeia a ultimate do Disruptor (nível 6) e nunca entra em teamfight sem checar se ele já tem mana e cooldown pra Storm; se tiver, reage pré-emptivamente com Grave antes do engajamento
- fonte: pro_dados/dazzle.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm); aghs_desc (disruptor shard e scepter)

## Contra Shadow Demon (shadow_demon)

- placar: 35 vitórias em 89 jogos de pro, 39,3% pra Dazzle (pro_dados/dazzle.json, confrontos hero_id 79), amostra grande
- por que importa: mesma posição (suporte 4/5) e também uma das maiores desvantagens do Dazzle com volume de jogos relevante, o que indica que não é acaso de amostra pequena
- janelas: até os 20 min o Dazzle ainda segura bem com Shadow Wave em área. Dos 20 min em diante, Shadow Demon com nível de ultimate (Disruption, banimento de 2,75s) consegue isolar justamente o aliado que o Dazzle quer proteger: o alvo some do campo por quase 3s e volta exposto, enquanto Shadow Poison empilhado (dano retardado de 1x a 16x o valor base conforme as cargas) detona tudo de uma vez quando libera
- o que ele faz com você: bane o alvo que você quer salvar por quase 3s, tirando o timing do seu Shallow Grave, e o Shadow Poison empilhado pode somar um dano retardado grande demais pra sua cura segurar sozinha
- o que você faz com ele: Shallow Grave ainda funciona assim que o aliado volta do banimento, mas o problema é justamente a demora, não a proteção em si; Weave reduz a armadura dele se ele entrar em combate corpo a corpo
- itens que viram: Aghanim's Scepter de Shadow Demon dá 2 cargas de Demonic Purge, removendo buffs positivos do time de Dazzle (não remove Shallow Grave, que é imune a dispel, mas tira outros buffs como o da ativa de Holy Locket)
- como jogar: não gasta Shallow Grave no instante do banimento, espera o aliado voltar pra reposicionar primeiro, e tenta negar o combo de Shadow Poison interrompendo o fight antes dele empilhar 5 cargas
- fonte: pro_dados/dazzle.json; pro_dados/shadow_demon.json; constants_abilities.json (shadow_demon_disruption, shadow_demon_shadow_poison, shadow_demon_demonic_purge); aghs_desc (shadow demon scepter)

## Contra Gyrocopter (gyrocopter)

- placar: 17 vitórias em 47 jogos de pro, 36,2% pra Dazzle (pro_dados/dazzle.json, confrontos hero_id 72), a maior desvantagem da lista
- por que importa: é o exemplo clássico de confronto que não acontece na lane (Gyrocopter é carry de posição 1, Dazzle é suporte de posição 5) mas que pesa demais no resultado, porque o kit de um ataca exatamente o que o outro não tem defesa pra segurar
- janelas: Gyrocopter compra Ultimate Scepter cedo pra um item desse nível, mediana de 18,5 min (p25 de 17,1), bem antes do Blink Dagger do Dazzle (30,4 min). A partir disso, Call Down (3 mísseis que causam 200 a 500 de dano cada, slow de 50% por 4s, raio 400) e Flak Cannon (atinge tudo num raio de 1250 por 12s) alcançam um suporte de HP baixo de longe, sem precisar entrar em alcance de Shallow Grave
- o que ele faz com você: Call Down cai de longe e já desacelera e machuca antes de qualquer reação, e Flak Cannon continua acertando o Dazzle mesmo se ele tentar se afastar da luta principal
- o que você faz com ele: Shallow Grave no aliado pego pelo Call Down segura a morte, mas não existe resposta direta pro alcance dele, então o jogo é sobre nunca ficar dentro dos 1250 de raio do Flak
- itens que viram: Ultimate Scepter dele (18,5 min) é o item que decide esse confronto; Black King Bar dele (24,6 min) ainda anula o slow de Poison Touch durante o combo
- como jogar: mantém distância de 1250+ de qualquer teamfight que o Gyrocopter já comprou Flak Cannon, e guarda Glimmer Cape pra tirar o Dazzle do alcance do Call Down assim que ele for lançado
- fonte: pro_dados/dazzle.json; pro_dados/gyrocopter.json; constants_abilities.json (gyrocopter_call_down, gyrocopter_flak_cannon)

## Contra Abaddon (abaddon)

- placar: 21 vitórias em 53 jogos de pro, 39,6% pra Dazzle (pro_dados/dazzle.json, confrontos hero_id 102), desvantagem grande
- por que importa: os dois são heróis de sustain, mas em pro o Abaddon costuma jogar de posição 3 tanque agressivo, farmando itens de carry em vez de só proteger, e isso vira uma corrida de quem sustenta mais
- janelas: até a Radiance dele (mediana 16,3 min) o Dazzle ainda ganha troca de cura eficiente num grupo pequeno. Depois da Manta (23,6 min), Abaddon farma mais rápido com o splash da Radiance e vira um tanque físico que o time do Dazzle não consegue abater em atrito, porque Borrowed Time ativa sozinho sempre que ele cai abaixo de 400 de vida, sem precisar de reação nenhuma do lado dele, ao contrário do Shallow Grave que depende do Dazzle estar livre e acertar o timing
- o que ele faz com você: Curse of Avernus desacelera e aplica dano contínuo em quem o time dele focar, e sozinho ele sobrevive praticamente qualquer burst de single-target graças ao Borrowed Time automático
- o que você faz com ele: Mist Coil dele também pode ser usado como dano contra o Dazzle (95 a 320), mas Shallow Grave ainda segura o aliado que ele tentar executar, só que a disputa de sustain é desigual porque o dele independe de reação
- itens que viram: Radiance e Manta (farm de carry) viram o ritmo da partida a favor do Abaddon a partir dos 16 a 23 min; do lado do Dazzle, Mekansm (24,4 min) ajuda a equilibrar cura em área contra o dano constante da Curse
- como jogar: evita trocar dano contínuo direto com o Abaddon depois da Radiance, porque ele sustenta mais; foca em salvar o resto do time e deixar o Abaddon pra focar por último numa teamfight, já que matá-lo primeiro é caro
- fonte: pro_dados/dazzle.json; pro_dados/abaddon.json; constants_abilities.json (abaddon_borrowed_time, abaddon_frostmourne, abaddon_death_coil); aghs_desc (abaddon scepter e shard)

## Contra Slardar (slardar)

- placar: 24 vitórias em 60 jogos de pro, 40% pra Dazzle (pro_dados/dazzle.json, confrontos hero_id 28), desvantagem grande
- por que importa: outro core que raramente compartilha lane de verdade com um suporte 5 puro, mas que caça exatamente o perfil de HP baixo que o Dazzle representa, e o Blink dele chega muito cedo
- janelas: Blink do Slardar (mediana 13,3 min) é o mais cedo de toda essa lista de oponentes, antes até do Holy Locket do Dazzle (19,2 min). Entre os 13 e os 19 min é a janela mais perigosa: Slardar já fecha ângulo em qualquer suporte isolado, e o Dazzle ainda não tem o item que amplifica a cura. Depois do Aghanim's Shard dele (17,2 min), Slithereen Crush passa a aplicar Corrosive Haze (-10 a -20 de armadura) em área, destruindo a armadura do time inteiro, não só de um alvo
- o que ele faz com você: Blink fecha a distância sem aviso, Bash (a cada 3 ataques) soma dano físico extra, e depois do shard o stun em área já vem com redução de armadura embutida
- o que você faz com ele: Shallow Grave segura a execução inicial, mas a Corrosive Haze em área depois do shard afeta o time todo, não só quem foi salvo, então a resposta tem que ser coletiva (Glimmer Cape, Mekansm), não só individual
- itens que viram: Blink (13,3 min) e Aghanim's Shard (17,2 min) do Slardar são os dois itens que decidem a janela do meio-jogo contra o Dazzle
- como jogar: evita ficar isolado antes dos 19 min, que é quando o Dazzle ainda não tem Locket pra compensar o dano dele; depois disso, segura em grupo porque a troca de sustain vira mais equilibrada
- fonte: pro_dados/dazzle.json; pro_dados/slardar.json; constants_abilities.json (slardar_bash, slardar_amplify_damage); aghs_desc (slardar shard)

## Contra Skywrath Mage (skywrath_mage)

- placar: 36 vitórias em 55 jogos de pro, 65,5% pra Dazzle (pro_dados/dazzle.json, confrontos hero_id 101), a maior vantagem da lista
- por que importa: é o espelho direto de suporte mágico de burst, mas pela amostra de pro, quando Dazzle vence esse confronto costuma vencer de goleada; vale entender por que, já que no papel Skywrath parece mais perigoso
- janelas: antes do nível 6 (Mystic Flare é a ultimate) os dois são zoneadores fracos, equilibrado. A partir daí, Mystic Flare no nível máximo distribui 1600 de dano em 2s num raio de só 170; contra um suporte isolado isso é quase sempre morte certa, e Ancient Seal (silêncio de 3 a 6s) bloqueia Shallow Grave e Shadow Wave por completo se vier antes do cast. Apesar disso, o winrate favorece o Dazzle, porque o Skywrath também é frágil e qualquer troca que não mate o Dazzle de primeira vira punição pesada pro time dele
- o que ele faz com você: Ancient Seal silencia e deixa o Dazzle sem resposta nenhuma, e Mystic Flare é dano suficiente pra matar um suporte de HP baixo sozinho
- o que você faz com ele: Poison Touch já ameaça o combo dele de longe (alcance de até 800 com os talentos), e como Skywrath também tem HP baixo, qualquer engajamento que ele erre o timing vira kill fácil pro time do Dazzle
- itens que viram: Aghanim's Scepter dele faz Mystic Flare acertar um segundo alvo aleatório, então mesmo se o foco não for o Dazzle ele pode ser pego de brinde; Glimmer Cape do Dazzle (23,9 min) é a principal defesa contra o combo de burst dele
- como jogar: trata esse confronto como corrida de quem silencia ou estuna primeiro; segura Glimmer Cape pronto assim que o Skywrath atinge nível 6 e nunca entra em visão dele sozinho
- fonte: pro_dados/dazzle.json; pro_dados/skywrath_mage.json; constants_abilities.json (skywrath_mage_mystic_flare, skywrath_mage_ancient_seal); aghs_desc (skywrath mage scepter)

## Contra Clinkz (clinkz)

- placar: 24 vitórias em 37 jogos de pro, 64,9% pra Dazzle (pro_dados/dazzle.json, confrontos hero_id 56), vantagem grande
- por que importa: outro carry que raramente compartilha lane com um suporte 5, mas entra na lista porque é o segundo maior winrate do Dazzle entre os extremos, e o motivo é mecânico: Shallow Grave anula exatamente o que o Clinkz faz
- janelas: antes do Desolator dele (mediana 14,3 min) o Clinkz ainda bate fraco contra armadura alta. Depois disso ele tenta pick-offs solo saindo da invisibilidade (Wind Walk), mas contra um Dazzle com Shallow Grave de cooldown livre, o combo completo dele (Strafe + Searing Arrows + Death Pact) gasta tudo e o alvo simplesmente não morre
- o que ele faz com você: sai da invisibilidade, usa Strafe pra bater mais rápido e tenta executar o alvo mais fraco antes dele reagir
- o que você faz com ele: Shallow Grave anula o burst inteiro dele, porque é imune a dispel e ignora BKB; Weave reduz a armadura dele se ele ficar perto demais tentando confirmar o kill
- itens que viram: Aghanim's Shard do Clinkz (16,7 min, Burning Barrage) dá uma forma de dano em área que passa por cima de unidades, mas ainda não mata através de Shallow Grave
- como jogar: guarda sempre uma Shallow Grave de prontidão pro carry mais visado quando o Clinkz já tem nível pra engajar sozinho, porque isso sozinho já neutraliza a maior parte do valor dele
- fonte: pro_dados/dazzle.json; pro_dados/clinkz.json; constants_abilities.json (dazzle_shallow_grave, clinkz_strafe, clinkz_death_pact); aghs_desc (clinkz shard)

## Contra Beastmaster (beastmaster)

- placar: 35 vitórias em 56 jogos de pro, 62,5% pra Dazzle (pro_dados/dazzle.json, confrontos hero_id 38), vantagem grande
- por que importa: fecha a lista como o terceiro maior winrate do Dazzle; Beastmaster é core de iniciação de área e quase nunca compartilha lane com o suporte 5, mas o confronto mostra como Shallow Grave neutraliza justamente o que ele tenta fazer
- janelas: Primal Roar (stun em área, empurra e desacelera) já ameaça desde o nível 6, bem antes de qualquer item grande. Beastmaster ainda rusha Ultimate Scepter muito cedo pra um item desse nível (mediana de 14,6 min, mais cedo até que o do Gyrocopter), mas o Scepter dele vira Drums of Slom (dano e cura em área por ataque) e não tem nada a ver com o Roar. O problema do Roar pra ele é que ele não mata ninguém sozinho (150 a 300 de dano, mais o mesmo no empurrão lateral), então o payoff depende do time converter, e isso dá tempo pro Dazzle reagir
- o que ele faz com você: Primal Roar abre o time inteiro pra iniciação em área, inclusive o Dazzle se estiver no caminho
- o que você faz com ele: Shallow Grave no alvo pego pelo Roar segura o dano e o stun inteiro (é imune a BKB e dispel), anulando o motivo de Beastmaster ter iniciado
- itens que viram: nenhum item do top 30 de Beastmaster muda o Primal Roar diretamente, nem o Scepter, que vira Drums of Slom e não o Roar; do lado do Dazzle, Arcane Boots (11,9 min) garante mana suficiente pra reagir toda vez que ele iniciar
- como jogar: assim que ver Beastmaster com nível 6 e scepter pronto, mantém Shallow Grave sempre disponível antes de qualquer engajamento de grupo, porque é a resposta direta ao Primal Roar
- fonte: pro_dados/dazzle.json; pro_dados/beastmaster.json; constants_abilities.json (beastmaster_primal_roar); aghs_desc (beastmaster scepter)
