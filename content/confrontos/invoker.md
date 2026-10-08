---
id: confrontos-invoker
heroi: Invoker
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/invoker.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/lion.json
- dota-hub-conteudo-novo/pro_dados/disruptor.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/queenofpain.json
- dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- dota-hub-conteudo-novo/pro_dados/void_spirit.json
- dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- dota-hub-conteudo-novo/pro_dados/tinker.json
- dota-hub-conteudo-novo/pro_dados/monkey_king.json
- dota-hub-conteudo-novo/pro_dados/naga_siren.json
- dota-hub-conteudo-novo/pro_dados/magnataur.json
- dota-hub-conteudo-novo/pro_dados/obsidian_destroyer.json
- dota-hub-conteudo-novo/pro_dados/chaos_knight.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/explorer (player_matches.lane_role, partidas de liga 7.40+7.41)
- https://api.opendota.com/api/constants/aghs_desc
---

Invoker joga de pos 2 em 94,4% das partidas de pro do patch 7.40+7.41 (1919 de 2033 jogos com lane_role mid, OpenDota explorer). Isso explica dois padrões nos confrontos abaixo: os heróis com mais jogos contra ele nem sempre dividem lane, muitos são suportes que rotacionam cedo porque Invoker é um dos mids mais fracos do jogo antes do nível 7 (sem Invoke maduro, sem burst, vida baixa); e quando o jogo estica, ele também decide duelos contra carries que nunca o enfrentaram na lane, só depois, em teamfight ou pick tardio.

## Contra Shadow Fiend (nevermore)
- placar: 220 vitórias do Invoker em 431 jogos de pro, 51,0% (pro_dados/invoker.json, patches 7.40+7.41)
- por que importa: maior amostra de todos os confrontos do Invoker em pro. Os dois costumam dividir a mesma lane de mid.
- janelas: até 10 min SF ataca mais: Shadowraze é dano fixo (85 a 280 conforme o nível, cooldown de só 3s, fonte: constants_abilities.json) sem precisar de combo, e ele fecha Power Treads aos 5,9 min (pro_dados/nevermore.json) pra sustentar trade físico. Dos 10 aos 18 min o jogo empata: Invoker pega Cold Snap e Tornado (QW) por volta do nível 6/7 e passa a trocar feitiço por Raze. Depois dos 20 min, com Rod of Atos (16,8 min) e Ultimate Scepter (20,2 min, pro_dados/invoker.json), Invoker ganha a troca isolada porque consegue plantar o combo antes do SF reagir.
- o que ele faz com você: Shadowraze te afasta da lane sem gastar mana, Requiem of Souls (até 20 almas, 2,15s de fear acumulado) é o combo de kill dele se te pegar sem Ghost Walk, e Feast of Souls dá attack speed pra ele puxar múltiplos kills em teamfight.
- o que você faz com ele: Sun Strike é dano puro e ignora BKB (bkbpierce: Yes, constants_abilities.json), então mesmo com Black King Bar (25,2 min, pro_dados/nevermore.json) ele ainda toma o burst; Cold Snap trava ele parado pra EMP e auto-attacks acertarem; EMP drena o mana dele, que já é curto pra manter Raze espalhado.
- itens que viram: BKB dele neutraliza Cold Snap e Tornado físico-dependente, mas não Sun Strike; seu Aghanim's Scepter (Ice Wall vira Ice Floe, vector targeted: quem fica na área por mais de 2,5s é enraizado e leva dano mágico de Quas, aghs_desc) ajuda a prender ele parado pro combo completo.
- como jogar: na lane, jogue de Quas/Wex puro pra ter Cold Snap cedo e não ficar parado no alcance do Raze. Depois dos 16-18 min, puxe a troca você: Atos prende, EMP drena mana, Sun Strike fecha antes dele soltar Requiem.
- fonte: pro_dados/invoker.json; pro_dados/nevermore.json; constants_abilities.json

## Contra Rubick (rubick)
- placar: 163 vitórias do Invoker em 319 jogos, 51,1% (pro_dados/invoker.json)
- por que importa: segundo maior volume de jogos em pro contra o Invoker. Rubick joga majoritariamente na rota de off como suporte (lane_role 3 em 69,7% das partidas pro, OpenDota explorer) e não divide lane fixa com ele, mas rotaciona cedo pra matar o mid mais frágil do jogo, e Spell Steal rouba o último feitiço do combo dele em qualquer fase.
- janelas: até 15 min Rubick é reativo, só ameaça se roubar um Sun Strike ou EMP bem usado. A partir dos 17-21 min, com Blink Dagger (21,6 min, pro_dados/rubick.json) e Aether Lens (22,9 min), ele consegue iniciar de longe. Depois dos 27 min, com Aghanim's Scepter (27,4 min) ele guarda 2 feitiços roubados em vez de 1, o que multiplica o risco de qualquer combo seu virar arma dele.
- o que ele faz com você: Spell Steal copia seu último feitiço lançado (Sun Strike ou Tornado viram dele por até 5 minutos, duração escala com nível de Spell Steal), Telekinesis te levanta e estunta no pouso, Fade Bolt reduz seu dano mágico por 10s.
- o que você faz com ele: não solte seu feitiço mais forte perto dele sem necessidade, isso é Spell Steal de graça. Cold Snap e EMP têm menos valor como "feitiço roubável" pra ele do que Sun Strike, prefira abrir combo com eles quando ele estiver por perto.
- itens que viram: o Scepter dele (2 feitiços roubados) faz qualquer troca de combo seu virar risco dobrado; seu Aghanim's Shard (Sun Strike cria Forge Spirit no herói atingido) ainda compensa porque o Spirit não é copiável por Spell Steal.
- como jogar: controle quando lança o combo caro perto de um Rubick vivo. Se ele morreu ou gastou o Spell Steal recentemente, essa é sua janela segura pra ir all-in.
- fonte: pro_dados/invoker.json; pro_dados/rubick.json; constants_abilities.json; aghs_desc (OpenDota)

## Contra Lion (lion)
- placar: 141 vitórias do Invoker em 289 jogos, 48,8% (pro_dados/invoker.json)
- por que importa: terceiro maior volume de jogos. Suporte de trilane (pos 4/5) que ganka o mid fraco do Invoker nos primeiros 10 minutos, não por dividir lane.
- janelas: até 10-12 min é a janela de risco: Lion tem Earth Spike (stun de até 2,2s) e Finger of Death (600 a 850 de dano fixo, pro_dados/lion.json mostra Blink Dagger só aos 18,2 min, então antes disso ele depende de posicionamento e Earth Spike de curto alcance pra conectar). Depois dos 18-20 min, com Blink e Aghanim's Shard (25,8 min), ele volta a ameaçar de longe. No meio disso, dos 12 aos 18, Invoker com Cold Snap/Tornado já sobrevive à iniciação simples dele.
- o que ele faz com você: Earth Spike estuna em linha, Finger of Death mata sozinho em qualquer HP abaixo de 600-850 (nível do feitiço), e ainda ganha ataque corpo a corpo bônus depois de usar.
- o que você faz com ele: Ghost Walk te esconde e regenera vida/mana contra o poke dele, e seu stun (Tornado) ou slow (Cold Snap) interrompe o canal de Mana Drain se ele tentar te secar.
- itens que viram: o Shard dele (Finger of Death ganha AoE e dano em cleave) muda teamfight: não fique agrupado com aliados de vida baixa perto dele depois dos 25 min.
- como jogar: trave a visão da sua lane com Sentry/observador cedo, Lion precisa ficar parado pra acertar Earth Spike e você quer vê-lo chegando. Depois do nível 6, use Cold Snap pra negar o canal de Mana Drain dele.
- fonte: pro_dados/invoker.json; pro_dados/lion.json; constants_abilities.json; aghs_desc (OpenDota)

## Contra Disruptor (disruptor)
- placar: 132 vitórias do Invoker em 277 jogos, 47,7% (pro_dados/invoker.json)
- por que importa: quarto maior volume de jogos. Outro suporte de rotação (pos 4/5) que prende o combo do Invoker em vez de dividir lane com ele.
- janelas: o perigo dele é constante em qualquer fase porque Kinetic Field (até 4,4s de duração em nível 4) não depende de farm, só de nível. A partir dos 24 min, com Blink Dagger (24,0 min, pro_dados/disruptor.json), ele consegue plantar a prisão de longe antes de um teamfight.
- o que ele faz com você: Kinetic Field cria uma parede que te tranca dentro da área de dano do time dele; Static Storm silencia e cresce de dano ao longo de 6s (até 350 de dano por segundo no pico, nível 3); Glimpse te devolve pra posição de 4s atrás, cancelando qualquer avanço ou combo em andamento.
- o que você faz com ele: Ghost Walk ajuda a escapar da Kinetic Field se você sair antes da formação completa (1s de delay pra formar a parede); Sun Strike ignora a prisão porque não depende de linha de visão direta, só de posição no mapa.
- itens que viram: o Scepter dele (Static Storm muta itens) tira seu TP scroll e qualquer ativo durante o silêncio; o Shard (Kinetic Fence) adiciona uma segunda prisão, dobre o cuidado ao entrar em teamfight.
- como jogar: não force engajamento dentro do alcance de 800 do Kinetic Field sem saber onde o Disruptor está. Se for travado, gaste os feitiços de longo alcance (Sun Strike, EMP) em vez de tentar sair correndo.
- fonte: pro_dados/invoker.json; pro_dados/disruptor.json; constants_abilities.json; aghs_desc (OpenDota)

## Contra Jakiro (jakiro)
- placar: 129 vitórias do Invoker em 250 jogos, 51,6% (pro_dados/invoker.json)
- por que importa: quinto maior volume de jogos, suporte de dupla lane que estica poke e controla área contra o combo do Invoker.
- janelas: do início até os 15-16 min o incômodo é constante via Dual Breath e Ice Path, dano de poke que corrói a vida do Invoker na lane. Depois dos 25-26 min, com Macropyre (fecha junto com Aghanim's Scepter em builds que priorizam duração maior) e Force Staff (26,2 min, pro_dados/jakiro.json), ele vira ameaça de área em teamfight, não mais de poke isolado.
- o que ele faz com você: Ice Path estuna em área ao detonar (até 2s), Macropyre é uma linha de fogo que fica queimando por 10s (100 a 200 de dano por segundo) e com Scepter passa a dano puro, o que ignora seu Magic Resistance de Quas.
- o que você faz com ele: EMP drena o mana pool dele, que gasta rápido em Dual Breath espalhado; Tornado tira ele da Macropyre antes do dano acumular; Cold Snap trava ele parado, útil porque Jakiro tem pouca mobilidade própria.
- itens que viram: o Shard dele (Liquid Frost sem custo de mana e sem cooldown compartilhado) aumenta o dano de poke sustentado na sua lane, considere Ghost Walk mais cedo se sentir a pressão.
- como jogar: evite ficar parado dentro de áreas que ele já telegrafa (ele precisa mirar Macropyre em linha reta). Depois do nível 6, troque feitiço por feitiço: seu burst instantâneo supera o dano sustentado dele em uma troca isolada.
- fonte: pro_dados/invoker.json; pro_dados/jakiro.json; constants_abilities.json; aghs_desc (OpenDota)

## Contra Snapfire (snapfire)
- placar: 126 vitórias do Invoker em 248 jogos, 50,8% (pro_dados/invoker.json)
- por que importa: sexto maior volume de jogos, e a única das posições de suporte que também aparece como mid em pro (posições 2 a 5 no catálogo), o que explica o volume alto mesmo sendo flexível.
- janelas: o Aghanim's Shard dela sai muito cedo em pro, mediana de 16,9 min com 1.919 compras (pro_dados/snapfire.json), bem antes do seu Scepter (20,2 min). Entre 15 e 20 min ela ganha uma janela de iniciação forte com Firesnap Cookie + Scatterblast. Depois dos 21-22 min, quando você tem Scepter e Shard rodando, a troca vira sua: seu combo mata mais rápido do que o kit de controle dela consegue negar.
- o que ela faz com você: Firesnap Cookie estuna com o pulo (dano e stun na área de pouso), Scatterblast dá slow de até 100% em ponto cego, Mortimer Kisses chove dano de longe (8 globs, 180-360 de dano cada) enquanto você tenta fechar combo.
- o que você faz com ela: ela tem pouco HP pra um suporte físico, Sun Strike + EMP já tiram boa parte da vida dela sem precisar de follow-up; Ghost Walk nega o alcance mínimo de 600 do Mortimer Kisses porque ela some do seu raio.
- itens que viram: o Shard dela (Firesnap Cookie cura e lança um glob bônus) a torna mais resiliente em troca de recursos; combine seu combo com um stun de aliado pra garantir o burst antes dela reagir com Scatterblast.
- como jogar: respeite o range de 800 do Scatterblast perto da sua lane. Se ela gastou Firesnap Cookie recente (recarga de 15 a 21s conforme o nível), é sua janela pra pressionar.
- fonte: pro_dados/invoker.json; pro_dados/snapfire.json; constants_abilities.json; aghs_desc (OpenDota)

## Contra Queen of Pain (queenofpain)
- placar: 109 vitórias do Invoker em 246 jogos, 44,3% (pro_dados/invoker.json)
- por que importa: rival de mid mais comum em pro depois do Shadow Fiend, e o confronto mais desfavorável entre os mids que de fato dividem lane com ele.
- janelas: até 8-9 min QoP já tem Power Treads (8,3 min, pro_dados/queenofpain.json) e Blink pra trocar com mobilidade total, enquanto Invoker ainda está em Quas/Wex básico. Dos 13 aos 21 min ela fecha Kaya and Sange (20,8 min) e Scepter (23,5 min), ficando mais forte em sustain e burst do que o Invoker nessa fase. Só depois dos 28-29 min, com Octarine Core (28,9 min, pro_dados/invoker.json) rodando feitiço em cima de feitiço, Invoker volta a ganhar a troca isolada.
- o que ela faz com você: Shadow Strike aplica slow de até 55% e dano ao longo do tempo, Scream of Pain acerta área em cone, e Sonic Wave (325 a 625 de dano) é um nuke instantâneo que te empurra pra trás, quebrando seu posicionamento pro combo.
- o que você faz com ela: seu Sun Strike não tem limite de alcance (pode cair em qualquer ponto do mapa já revelado, constants_abilities.json), então nem o blink dela (até 1300 no nível 4) garante fuga depois que o combo for lançado; seu EMP (950 de alcance) seca a mana que ela precisa pra viver de blink; Tornado interrompe o canal dela se ela tentar um blink combo.
- itens que viram: o Shard dela (sonic boom ao usar Blink, 125 de dano + silêncio de 1,75s) vira o blink num poke adicional contra você; Linken's Sphere ou Lotus Orb no seu time ajuda a negar o Scream of Pain/Sonic Wave em teamfight.
- como jogar: na lane evite trocar auto-attack livre, o blink dela te pune. Priorize farmar mana pra EMP e vença a troca isolada depois dos 25-28 min, quando seu Octarine entra em rotação.
- fonte: pro_dados/invoker.json; pro_dados/queenofpain.json; constants_abilities.json; aghs_desc (OpenDota)

## Contra Ember Spirit (ember_spirit)
- placar: 92 vitórias do Invoker em 190 jogos, 48,4% (pro_dados/invoker.json)
- por que importa: outro rival direto de mid (posição 2 nos dois catálogos), com mobilidade que estressa a falta de escape do Invoker antes do nível 6.
- janelas: até 12 min Ember farma rápido (Urn of Shadows aos 7,3 min, Spirit Vessel aos 12,8 min, pro_dados/ember_spirit.json) e troca pouco, só poka com Searing Chains. Dos 12 aos 25 ele ganha mobilidade total com Fire Remnant, enquanto Invoker ainda depende de item pra ter alcance de fuga. Depois dos 27-31 min, com Black King Bar (27,1 min) e Ultimate Scepter (31,6 min) dele rodando junto do seu próprio Scepter e Shard, o combo vira uma corrida de quem solta o burst primeiro, e seu Sun Strike ignora o BKB dele.
- o que ele faz com você: Sleight of Fist ataca todo mundo numa área e volta pro ponto inicial, puxa kill rápido se você estiver sem Ghost Walk; Searing Chains prende você parado por até 2,75s enquanto o time dele chega; Fire Remnant garante posicionamento e fuga que você não tem no early.
- o que você faz com ele: Sun Strike (pure, bkb pierce) acerta mesmo com BKB ativo; Cold Snap trava ele no lugar, anulando a vantagem de mobilidade por alguns segundos; EMP drena o mana que ele precisa pra reposicionar Fire Remnants.
- itens que viram: o Shard dele (recarrega Fire Remnant ao matar herói perto) o deixa perigoso demais em teamfights vencidos, mate ele rápido antes disso snowbolar; seu Rod of Atos prende ele parado pro combo fechar.
- como jogar: evite lanes largas onde Searing Chains alcança fácil. Depois dos 20 min, puxe engajamentos isolados: você ganha a troca 1x1 se acertar o combo primeiro.
- fonte: pro_dados/invoker.json; pro_dados/ember_spirit.json; constants_abilities.json

## Contra Void Spirit (void_spirit)
- placar: 93 vitórias do Invoker em 186 jogos, 50,0% (pro_dados/invoker.json)
- por que importa: rival direto de mid mais recente do pool competitivo, mecânica de combo que lembra a do próprio Invoker (posicionamento + burst mágico).
- janelas: até 17 min o jogo é parelho na lane, os dois têm pouca mobilidade antes do Aghanim's Shard (17,0 min pra ele, pro_dados/void_spirit.json, contra 22,0 min do seu). Dos 17 aos 25 ele ganha vantagem: Aether Remnant puxa você pro combo dele e Dissimilate garante o followup. Depois dos 25 min, com seu Scepter (20,2) e Shard (22,0) já rodando antes do dele (25,1 min pro Scepter), Invoker tem a janela de burst primeiro.
- o que ele faz com você: Aether Remnant te puxa na direção dele, Resonant Pulse te acerta e ainda dá escudo de dano físico pra ele, Dissimilate reposiciona com dano em área na saída, um combo que te tira do lugar antes de você reagir.
- o que você faz com ele: Tornado tira ele do controle do próprio combo (ele perde o momento de reposicionar); Sun Strike acerta mesmo que ele tente sumir com Dissimilate, porque o alvo é o chão, não o herói; EMP seca o mana que ele precisa pra repetir o combo.
- itens que viram: o Shard dele (Aether Remnant ganha segundo caminho com true sight) aumenta o alcance de iniciação dele, cuidado em lanes com árvore pra ele rotear; o seu Rod of Atos cancela o blink efetivo da fuga dele.
- como jogar: jogue menos agressivo antes dos 17 min, é quando ele é mais perigoso proporcionalmente. Depois disso, force trocas: seu burst chega primeiro.
- fonte: pro_dados/invoker.json; pro_dados/void_spirit.json; constants_abilities.json; aghs_desc (OpenDota)

## Contra Storm Spirit (storm_spirit)
- placar: 81 vitórias do Invoker em 168 jogos, 48,2% (pro_dados/invoker.json)
- por que importa: rival clássico de mid, os dois dependem de mana pra existir, o que torna EMP e Ball Lightning armas espelhadas.
- janelas: até 13 min ele é fraco, Ball Lightning gasta % do mana pool que ainda é pequeno. Dos 13 aos 26 ele cresce rápido: Kaya and Sange (20,1 min, pro_dados/storm_spirit.json) dá o mana pool e a regen pra viajar e trocar livre, e Black King Bar (26,1 min) o deixa quase impossível de controlar em teamfight isolado. Depois dos 28-29, com seu Octarine rodando Sun Strike em cima de Sun Strike, Invoker volta a ameaçar de longe, fora do alcance físico do combo dele.
- o que ele faz com você: Ball Lightning fecha distância instantânea pra cima de você, Static Remnant detona se você chegar perto (até 280 de dano), Overload adiciona dano e slow em cada feitiço que ele solta durante o combo.
- o que você faz com ele: EMP drena justamente o mana que ele precisa pra viajar com Ball Lightning, é a melhor forma de cortar a mobilidade dele; Sun Strike ignora o BKB dele; Cold Snap trava ele parado, zerando a vantagem de mobilidade.
- itens que viram: o Scepter dele (Electric Vortex em área) ameaça seu time inteiro perto dele; o seu Rod of Atos impede ele de sair com Ball Lightning depois de fechar.
- como jogar: controle seu próprio mana pool, EMP bem aplicado tira o jogo dele de vez. Evite lanes abertas sem árvores perto pra não facilitar o posicionamento do Ball Lightning dele.
- fonte: pro_dados/invoker.json; pro_dados/storm_spirit.json; constants_abilities.json; aghs_desc (OpenDota)

## Contra Tinker (tinker)
- placar: 30 vitórias do Invoker em 50 jogos, 60,0%, amostra pequena (pro_dados/invoker.json)
- por que importa: um dos confrontos mais favoráveis ao Invoker com volume relevante, outro mid de magia pura que também depende 100% de mana e cooldown, mas sem burst de kill isolado.
- janelas: Tinker é fraco em troca direta a qualquer momento, ele joga pra farmar e pra Rearm, não pra ganhar 1x1. O risco dele cresce só com Blink Dagger (11,5 min, muito cedo pra um mid, pro_dados/tinker.json) combinado com March of the Machines em cima de creeps ou de você parado. Depois dos 20-25 min, com Shiva's Guard (25,6 min) e Dagon (22,5 min), ele vira ameaça de poke contínuo em teamfight, mas ainda sem resposta pro seu burst isolado.
- o que ele faz com você: Laser cega seus ataques básicos e causa dano, March of the Machines dói se você ficar parado perto, e Rearm reseta tudo isso em segundos, então o incômodo é constante mesmo sem kill potencial direto.
- o que você faz com ele: Sun Strike mata ele sozinho em boa parte do jogo (ele tem pouco HP pro nível), EMP seca o mana que ele precisa pra manter o ciclo de Rearm, e qualquer stun seu (Tornado, Deafening Blast) cancela o Rearm se acertado durante o canal.
- itens que viram: o Shard dele (Warp Flare, root + teleporte) é a única ferramenta de kill real que ele ganha, ainda assim curta pra fechar sozinho contra seu alcance de Sun Strike.
- como jogar: pressione a lane cedo, ele não tem resposta física nem mágica pra uma troca direta. Gaste Sun Strike nele sempre que aparecer sozinho no mapa, farm solo é raridade dele sobreviver.
- fonte: pro_dados/invoker.json; pro_dados/tinker.json; constants_abilities.json; aghs_desc (OpenDota)

## Contra Monkey King (monkey_king)
- placar: 49 vitórias do Invoker em 82 jogos, 59,8% (pro_dados/invoker.json)
- por que importa: carry físico (posição 1) que não compartilha lane com o Invoker na maioria dos drafts, mas é um dos mais jogados em pro entre os que erram a vantagem contra ele, por isso entra mesmo sem contato direto cedo.
- janelas: até 18-20 min Monkey King farma rápido na safelane (Power Treads 6,0 min, Desolator 18,3 min, pro_dados/monkey_king.json), fase em que ele raramente cruza com o Invoker. A partir dos 20-25, com Wukong's Command e Black King Bar (24,9 min), ele entra em teamfight como dano físico puro, sem resposta mágica pra área do seu combo. Invoker, com Scepter (20,2) e Shard (22,0) prontos antes disso, costuma decidir o confronto no momento em que os dois finalmente se encontram.
- o que ele faz com você: Boundless Strike estuna em linha com True Strike (não erra nem com evasão), Jingu Mastery acelera o dano físico dele contra você se ele conseguir 4 ataques seguidos, e Wukong's Command cria soldados que focam heróis, inclusive você, em área.
- o que você faz com ele: Chaos Meteor e Deafening Blast são feitiços em área que atravessam os soldados de Wukong's Command e ainda acertam ele; Cold Snap trava ele parado, cancelando o acesso fácil a Jingu Mastery; seu dano mágico ignora a armadura que ele empilha pra física.
- itens que viram: o Shard dele (Boundless Strike aplica Primal Spring, controle adicional) aumenta o risco de ele te prender sozinho; Black King Bar dele neutraliza seus stuns físicos mas não o dano puro do Sun Strike.
- como jogar: evite duelo físico direto, jogue a área: Chaos Meteor e Ice Wall contra o kit de melee dele valem mais que trocar auto-attack.
- fonte: pro_dados/invoker.json; pro_dados/monkey_king.json; constants_abilities.json; aghs_desc (OpenDota)

## Contra Naga Siren (naga_siren)
- placar: 22 vitórias do Invoker em 35 jogos, 62,9%, amostra pequena (pro_dados/invoker.json)
- por que importa: o exemplo mais puro de confronto sem lane em comum da lista. Naga joga carry (posição 1) e vive em fase de farm isolado, mas quando o jogo estica os dois acabam sendo as duas maiores ameaças de late game do mapa, só que resolvendo o jogo de jeitos opostos.
- janelas: até 25 min praticamente não há contato, Naga farma Manta Style (14,6 min, pro_dados/naga_siren.json) e depois itens de sustain como Ring of Tarrasque (24,8 min). A partir dos 25-28, quando ela fecha Butterfly (28,1 min) ou Heart (24,8 min), ela vira ameaça de teamfight prolongado via ilusões e Song of the Siren. Invoker, com Octarine (28,9 min) rodando, tem justamente o burst instantâneo que não dá tempo dela reagir com o Song.
- o que ela faz com você: Song of the Siren te tira da fight por até 7s (estase, ninguém pode agir), negando seu combo inteiro se mal cronometrado; Rip Tide reduz sua armadura a cada 6 ataques das ilusões dela; Ensnare impede fuga ou blink.
- o que você faz com ela: seu combo de burst (Sun Strike + Chaos Meteor + Deafening Blast) ignora ilusões de verdade porque você mira a herói real, e Song of the Siren não protege contra feitiços já em voo antes da estase; EMP drena mana que ela raramente repõe rápido.
- itens que viram: o Shard dela (Song cura % de vida e mana por segundo) vira o teamfight em guerra de atrito, você precisa decidir o fight rápido, antes da estase regenerar o time dela; seu Aghanim's Scepter (Ice Wall vira Ice Floe, enraíza quem fica parado na área por mais de 2,5s, aghs_desc) ajuda a isolar ela das ilusões antes do Song.
- como jogar: não gaste seu combo cedo demais num engajamento, espere ela ativar Song ou gastar Ensnare primeiro. Se o jogo empata farm, você quer forçar fights antes dela fechar os itens de sustain de carry puro.
- fonte: pro_dados/invoker.json; pro_dados/naga_siren.json; constants_abilities.json; aghs_desc (OpenDota)

## Contra Magnus (magnataur)
- placar: 21 vitórias do Invoker em 58 jogos, 36,2%, maior desvantagem da lista com amostra relevante (pro_dados/invoker.json)
- por que importa: o pior confronto do Invoker entre os que têm 30+ jogos. Magnus joga mid ou offlane (posições 2 e 3) e Reverse Polarity é desenhado pra punir exatamente a vida baixa e a falta de escape do Invoker no early.
- janelas: o risco é maior cedo, antes dos 15-18 min, quando Invoker ainda não tem Ghost Walk maduro nem itens de vida. Magnus tem Blink Dagger aos 13,6 min (pro_dados/magnataur.json), bem antes da média de outros iniciadores, justamente pra fechar Reverse Polarity o quanto antes. Depois dos 25-26, com Black King Bar (26,2 min) dele e seu Octarine (28,9) rodando, o confronto se equilibra mais, mas o favoritismo de Magnus continua porque ele só precisa acertar um RP pra vencer a fight.
- o que ele faz com você: Reverse Polarity estuna em área por até 3,5s e puxa todo mundo perto, inclusive você, pro centro, onde o time dele finaliza; Skewer te arrasta pra posição ruim (até 1100 de distância) e ainda causa dano crescente com a distância percorrida; Empower aumenta o dano físico de quem bate em você durante o combo.
- o que você faz com ele: Ghost Walk e posicionamento são sua única defesa real, você precisa nunca ficar agrupado perto de um Magnus com Blink pronto; se sobreviver ao RP, seu burst em área (Chaos Meteor, Deafening Blast) pune o time dele parado no centro do próprio combo.
- itens que viram: Black King Bar seu (se a build permitir) ou de um aliado é a resposta mais direta ao RP; o Shard dele (Skewer com mais alcance e dano) aumenta o raio de perigo antes mesmo da iniciação em grupo.
- como jogar: trate Magnus como prioridade de visão total, Dust e Sentry no território dele valem mais que contra qualquer outro herói da lista. Nunca agrupe perto de áreas sem visão depois que ele atinge nível 6.
- fonte: pro_dados/invoker.json; pro_dados/magnataur.json; constants_abilities.json; aghs_desc (OpenDota)

## Contra Outworld Destroyer (obsidian_destroyer)
- placar: 17 vitórias do Invoker em 46 jogos, 37,0%, segunda maior desvantagem da lista (pro_dados/invoker.json)
- por que importa: o counter mais direto e estrutural da lista. OD joga mid (posição 2 nos dois catálogos) e compartilha o mesmo arquétipo do Invoker (int, burst mágico, depende de mana), mas o kit dele ataca justamente a mana que o combo do Invoker precisa pra existir.
- janelas: o perigo é constante desde a lane. Astral Imprisonment já rouba mana desde o nível 1 (16% a 25% da mana máxima, constants_abilities.json), e sem mana o Invoker não solta combo nenhum. Dos 10 aos 20 min OD farma rápido com Arcane Orb (dano extra em cada ataque baseado na própria mana) e chega em Witch Blade aos 13,7 min (pro_dados/obsidian_destroyer.json). Depois dos 20, Sanity's Eclipse pune ainda mais um Invoker com mana pool grande (dano escala com a diferença de mana entre os dois), a pior combinação possível pro seu kit.
- o que ele faz com você: Astral Imprisonment te tira da fight e rouba sua mana ao mesmo tempo; Sanity's Eclipse causa mais dano quanto maior seu mana pool em relação ao dele, e Invoker costuma ter mana alta justamente pelos itens que compra; Arcane Orb pune qualquer troca de auto-attack na lane.
- o que você faz com ele: Cold Snap trava ele parado, útil porque ele não tem escape próprio além de Blink Dagger comprado; Tornado tira ele do alcance de Sanity's Eclipse antes que ele feche o combo; gerenciar seu próprio mana pool (gastar antes de entrar em fight) reduz o dano que Sanity's Eclipse causa em você.
- itens que viram: o Scepter dele (Objurgation, barreira de dano baseada na mana máxima) o torna quase impossível de matar enquanto a mana estiver alta, foque o combo nele cedo na fight, antes da barreira se formar de novo (recarrega a cada 80s); evite comprar itens de mana puro demais (tipo Octarine muito cedo) se ele estiver fechando Sanity's Eclipse.
- como jogar: na lane, jogue mais pelo Exort (Sun Strike/Meteor) do que pelo mana pool alto do Wex, você é menos punido por Sanity's Eclipse com menos mana reservada. Priorize matar ele rápido, ele não tem sustain fora dos itens.
- fonte: pro_dados/invoker.json; pro_dados/obsidian_destroyer.json; constants_abilities.json; aghs_desc (OpenDota)

## Contra Chaos Knight (chaos_knight)
- placar: 20 vitórias do Invoker em 53 jogos, 37,7%, terceira maior desvantagem da lista (pro_dados/invoker.json)
- por que importa: carry que às vezes vai mid (posições 1 e 2 no catálogo), então nem sempre divide lane, mas quando o jogo chega em teamfight o combo de controle dele é um dos piores matchups do Invoker entre os heróis com amostra relevante.
- janelas: até 11-12 min CK já tem Armlet (11,7 min, pro_dados/chaos_knight.json), item que sozinho resolve trade físico contra o Invoker frágil do early. Dos 12 aos 21 ele farma rápido pelo lane, pouco contato direto. Depois dos 21, com Blink Dagger (21,2 min) e Orchid Malevolence (19,3 min), ele ganha iniciação garantida: Chaos Bolt estuna por até 3,25s no nível 4, tempo mais que suficiente pro time dele fechar o kill antes de você reagir.
- o que ele faz com você: Chaos Bolt tem stun longo e aleatório (1,25 a 3,25s) que isola você do resto do seu time; Reality Rift te puxa pra perto dele e reduz sua armadura por 6s, abrindo pra Phantasm (ilusões que imitam todo o time, inclusive você, dificultando o foco certo).
- o que você faz com ele: Sun Strike ignora qualquer ilusão de Phantasm porque mira o chão, não depende de target; Cold Snap trava ele ou uma ilusão perigosa no lugar; gaste seu combo em área (Chaos Meteor) contra o grupo de ilusões, dano em área pune Phantasm melhor que feitiço de alvo único.
- itens que viram: o Shard dele (Chaos Bolt cria uma ilusão extra que ataca o alvo) aumenta ainda mais o dano garantido do stun; o Scepter dele (chance de ilusão extra + Phantasm global) complica identificar o CK real em teamfight, prepare detecção (True Sight, Gem) se o jogo empatar.
- como jogar: não ande sozinho depois que ele tiver Blink Dagger, o Chaos Bolt sozinho já é suficiente pra abrir um kill. Em teamfight, jogue área em vez de focar alvo único contra as ilusões.
- fonte: pro_dados/invoker.json; pro_dados/chaos_knight.json; constants_abilities.json; aghs_desc (OpenDota)
