---
id: confrontos-night_stalker
heroi: Night Stalker
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/night_stalker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/puck.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/axe.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/silencer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/winter_wyvern.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ursa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/batrider.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/undying.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/naga_siren.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/luna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/terrorblade.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer (lane_role por heroi, partidas de liga 7.40-7.41)
---

## Como essa lista foi montada

Night Stalker é quase mono posição 3 no pro atual: 91,5% das partidas dele em liga nos patches 7.40 e 7.41 foram na offlane, 6,8% no mid e 1,7% na safelane (fonte: OpenDota explorer, partidas de liga 7.40-7.41). Os 16 oponentes abaixo cobrem quatro critérios: os 6 com mais partidas contra ele na amostra pro (pro_dados/night_stalker.json, campo confrontos), os rivais diretos de offlane e mid que mais aparecem nessa amostra, os 3 de maior vantagem e os 3 de maior desvantagem (todos com 30+ partidas), e dois carries hardcore que quase nunca compartilham lane com ele mas aparecem demais na mesma partida pra ignorar. Em cada bloco o "por que importa" explica o critério.

O combo base do Night Stalker em todo confronto: Void (unit target, lentidão de 1,25s de dia, de noite ganha um mini-stun curto que interrompe channeling mais lentidão de 1,6 a 3,4s por nível) seguido de Crippling Fear (silêncio em área de 375 de raio, 3s de dia, 4,5-6s de noite, com dano por segundo enquanto o inimigo fica perto) e Echo Strike do Echo Sabre travando o alvo com 100% de lentidão por 0,8s (constants_abilities.json; items.json). A ultimate Dark Ascension força escuridão instantânea por 30s mesmo de dia, então ele não depende do relógio do jogo pra ligar o combo depois do nível 6 (constants_abilities.json).

## Contra Puck (puck)

- placar: Night Stalker venceu 78 de 132 partidas profissionais (59,1%), fonte: pro_dados/night_stalker.json confrontos.
- por que importa: é o oponente mais comum da amostra inteira, mesmo sem lane em comum. Puck joga mid em 99,1% das partidas de liga 7.40-7.41 e Night Stalker offlane em 91,5% (fonte: OpenDota explorer, partidas de liga 7.40-7.41): os dois aparecem juntos simplesmente por serem picks frequentes no mesmo meta pro.
- janelas: Puck sai de Witch Blade cedo (mediana 13,7min, n=1758, pro_dados/puck.json) e consegue poke com Illusory Orb antes de Night Stalker ter qualquer spike. O primeiro spike real do NS só fecha com Echo Sabre aos 14,0min (n=329) e Blink aos 17,1min (n=578): até lá Puck tem iniciativa. Dos 17 aos 22min (antes do Aghanim's Shard de Puck aos 22,5min, n=1346) é a janela de NS, porque ele já pode fechar distância com Blink enquanto Puck ainda não tem o shard que faz o Phase Shift bater em área.
- o que ele faz com você: Phase Shift tem cast point de 0,01s e dá imunidade total por 1 a 3,25s por nível (constants_abilities.json): Puck sai de qualquer stun melee de NS de graça, sem gastar item. Dream Coil (ulti) prende NS num raio de 600; se ele tentar sair rompendo a coleira leva 200 a 400 de dano mágico e mais 1,5 a 2,5s de stun, cancelando a iniciação.
- o que você faz com ele: Void não é dispelado pelo Phase Shift, só adiado: quando Puck reaparece, a Crippling Fear em área ainda está ligada porque é passiva de proximidade e não precisa recast. De noite a lentidão do Void dura 1,6 a 3,4s por nível, mais que o Phase Shift em nível baixo. Dá tempo de perseguir Puck quando ele reaparecer, mesmo sem travá-lo de novo: o mini-stun do Void é breve, só serve pra interromper channel.
- itens que viram: Blink de NS é o item decisivo, fecha distância antes de Puck reagir com Phase Shift. Black King Bar de NS bloqueia o stun da quebra do Dream Coil enquanto durar (a quebra não ultrapassa imunidade a debuff) e ainda reduz 60% do dano mágico que passa (items.json). O Aghanim's Shard de Puck (ataques em área ao sair do Phase Shift) pune quem fica perto tentando interromper.
- como jogar: não force 1x1 sem Blink pronto, Puck sai de graça de qualquer stun melee. De noite a troca fica sua, void e crippling fear em sequência rápida não dão tempo do Phase Shift resetar. Depois dos 25min, BKB primeiro.
- fonte: pro_dados/night_stalker.json; pro_dados/puck.json; constants_abilities.json (puck_phase_shift, puck_dream_coil, night_stalker_void, night_stalker_crippling_fear); aghs_desc (puck).

## Contra Rubick (rubick)

- placar: Night Stalker venceu 53 de 122 partidas profissionais (43,4%), fonte: pro_dados/night_stalker.json confrontos.
- por que importa: segundo oponente mais comum da amostra e o pior resultado entre os seis mais frequentes. Suporte 4/5 que rouba a última spell lançada, o contra-pick clássico de herói com combo de poucas skills.
- janelas: Rubick não tem spike de item cedo (lh10 de 17, pro_dados/rubick.json, típico de suporte puro). O risco dele é posicional: ficar perto o bastante pra roubar Void ou Crippling Fear assim que Night Stalker lançar primeiro. O blink de Rubick só sai aos 21,6min (n=2782), bem depois do blink de NS (17,1min): até lá a iniciativa de posicionamento é de Night Stalker, mas ela vira pó se Rubick simplesmente devolve o que ele lançou.
- o que ele faz com você: Spell Steal copia o último feitiço de NS por 180 a 300s dependendo do nível (constants_abilities.json) e devolve contra o time; Telekinesis levanta NS no ar e estoura no chão com 0,9 a 1,5s de stun antes do combo dele sequer sair.
- o que você faz com ele: Void é rápido de lançar; se Rubick reagir tarde, NS consegue acertar antes do Steal compensar. De noite o mini-stun do Void interrompe o channel de Telekinesis se Rubick tentar levantar um aliado; a lentidão que acompanha dura até 3,4s.
- itens que viram: Blink de NS permite iniciar em cima de Rubick antes dele ter distância pra roubar e recuar. Black King Bar anula qualquer disable mágico que ele tenha roubado de outro aliado. Aghanim's Shard de Rubick (self-cast Telekinesis) dá outra forma dele se safar do combo.
- como jogar: não gaste Void ou Crippling Fear à toa perto de Rubick fora de luta, cada cast vira munição pra ele roubar. Rode pra ângulos sem linha livre pra Telekinesis. Force a troca de noite, quando seu Void dura mais que o stun dele.
- fonte: pro_dados/night_stalker.json; pro_dados/rubick.json; constants_abilities.json (rubick_telekinesis, rubick_spell_steal, night_stalker_void); aghs_desc (rubick).

## Contra Snapfire (snapfire)

- placar: Night Stalker venceu 64 de 117 partidas profissionais (54,7%), fonte: pro_dados/night_stalker.json confrontos.
- por que importa: terceiro oponente mais comum da amostra. Flex que aparece em quase todas as lanes no pro atual: 54,9% offlane, 23,9% safelane e 21,1% mid em partidas de liga 7.40-7.41 (fonte: OpenDota explorer, partidas de liga 7.40-7.41), por isso costuma dividir trilane com a offlane e encontra NS com frequência mesmo não sendo um 4/5 fixo.
- janelas: Snapfire fecha Aghanim's Shard cedo, mediana de 16,9min (n=1919, pro_dados/snapfire.json), bem antes do shard de NS (20,8min). Entre 7 e 17min ela controla a lane com Firesnap Cookie (stun) e Lil' Shredder (reduz armadura em 5 ataques), que corta o sustain de Night Stalker na troca de dia. Depois dos 17min, quando NS tem Echo Sabre e Blink prontos, a vantagem vira dele: Snapfire só pega blink próprio aos 20,7min.
- o que ele faz com você: Mortimer Kisses (ulti) lança 8 projéteis à distância, 180 a 360 de dano por impacto, com poças que dão lentidão e dano ao longo do tempo (constants_abilities.json): dá pra punir Night Stalker de longe sem entrar no alcance do combo dele. Firesnap Cookie estuna 1 a 2,2s por nível e recarrega rápido (15 a 21s), interrompendo qualquer iniciação.
- o que você faz com ele: Crippling Fear silencia em área, cortando o cast de Mortimer Kisses e Firesnap Cookie se ela estiver perto o bastante quando o combo começa. De noite o Void mini-estuna e segura ela no lugar pro resto da sequência.
- itens que viram: Blink de NS fecha a distância antes do alcance de 3000 do Mortimer Kisses virar relevante. Black King Bar passa pelo stun do Firesnap (mágico) e reduz o dano das poças. O shard dela (Mortimer Kiss bônus) é o que faz ela bater cedo, então matar essa janela (16-20min) evita o pico dela.
- como jogar: evite ficar no range dela entre 15 e 20min, é a janela do shard. Depois dos 17min force a troca perto, seu Blink chega antes do dela.
- fonte: pro_dados/night_stalker.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_mortimer_kisses, snapfire_firesnap_cookie, snapfire_lil_shredder); aghs_desc (snapfire).

## Contra Lion (lion)

- placar: Night Stalker venceu 50 de 104 partidas profissionais (48,1%), fonte: pro_dados/night_stalker.json confrontos.
- por que importa: quarto oponente mais comum. Hex desliga Void, Crippling Fear e Dark Ascension no meio do cast, não importa o nível da partida (constants_abilities.json), o que faz de Lion um dos contra-picks mais diretos do combo de Night Stalker.
- janelas: Lion não tem spike de farm (gpm de 286, lh10 de 6, pro_dados/lion.json), o perigo dele é todo de nível e mana. Com Hex disponível desde o nível 6, ele desliga Night Stalker em qualquer ponto da partida, não só na lane. O blink de Lion sai aos 18,2min, próximo do de NS (17,1min): os dois correm pro mesmo item quase junto.
- o que ele faz com você: Hex transforma NS num bicho inofensivo por 2 a 3,2s por nível, cancelando Void, Crippling Fear ou Dark Ascension antes do cast completar (constants_abilities.json). Finger of Death (ulti) causa 600 a 850 de dano direto, o suficiente pra matar NS sem item de vida antes dos 20min.
- o que você faz com ele: Crippling Fear silencia Lion e corta o Hex e o Finger of Death se ele estiver no raio de 375 quando o silêncio começa; a janela é apertada porque os dois castam rápido (cast point de 0 e 0,3s respectivamente).
- itens que viram: Black King Bar é obrigatório contra Lion, sem ele qualquer Hex cancela o combo de NS de graça; o shard de Lion (Mana Drain em 2 alvos extras com imunidade a debuff) complica ainda mais lutas em grupo.
- como jogar: não inicie em Lion sem BKB depois do nível 6 dele. Prefira focar outro alvo primeiro e deixar o Hex gasto antes de engajar Lion diretamente.
- fonte: pro_dados/night_stalker.json; pro_dados/lion.json; constants_abilities.json (lion_voodoo, lion_finger_of_death, lion_mana_drain, night_stalker_crippling_fear); aghs_desc (lion).

## Contra Mars (mars)

- placar: Night Stalker venceu 55 de 100 partidas profissionais (55,0%), fonte: pro_dados/night_stalker.json confrontos.
- por que importa: quinto mais comum e o rival direto de offlane: Mars joga offlane em 96,5% das partidas de liga 7.40-7.41, Night Stalker em 91,5% (mesma fonte: OpenDota explorer), então é o confronto de lane mais provável dentre os majoritários.
- janelas: Mars sai na frente no item que decide iniciação, Blink aos 15,2min (n=2136, pro_dados/mars.json) contra o 17,1min de NS. Entre 15 e 17min Mars pode abrir Arena of Blood primeiro. Depois dos 17min os dois correm pro mesmo pacote (BKB e Aghanim's Shard), e aí o combo de silêncio de NS pesa mais numa troca prolongada.
- o que ele faz com você: Spear of Mars empala e atordoa 1,3 a 2,2s por nível, com alcance de até 1200 no nível 4 (constants_abilities.json), cancelando qualquer aproximação. Arena of Blood (ulti) prende Night Stalker numa arena de 550 de raio por 5,5s: tentar sair leva dano de lança repetido, então o combo de NS precisa terminar dentro da arena.
- o que você faz com ele: Void atordoa à noite e a Crippling Fear silencia antes do Spear sair, se NS castar primeiro. Bulwark de Mars reduz 40 a 70% do dano físico frontal, então ataques básicos de NS rendem pouco de frente: é melhor focar pelo lado ou costas.
- itens que viram: quem fecha o Blink primeiro dita quem inicia a troca, então farm de lane importa mais nesse confronto do que em qualquer outro da lista. Black King Bar nega o stun do Spear; o Aghanim's Shard de NS (Void em área) ajuda a acertar Mars mesmo escondido atrás do Bulwark.
- como jogar: não force a lane sem saber o cooldown do Spear do Mars (bem alto nos primeiros níveis). Priorize farmar o seu Blink mais rápido que ele, é isso que decide quem abre a luta.
- fonte: pro_dados/night_stalker.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_bulwark, mars_arena_of_blood, night_stalker_void); aghs_desc (mars).

## Contra Hoodwink (hoodwink)

- placar: Night Stalker venceu 43 de 94 partidas profissionais (45,7%), fonte: pro_dados/night_stalker.json confrontos.
- por que importa: sexto oponente mais comum e um contra pouco óbvio: o alcance dela desliga justamente a passiva que define o Night Stalker noturno.
- janelas: Hoodwink é suporte puro (lh10 de 8, gpm 343, pro_dados/hoodwink.json) sem spike de farm, mas Sharpshooter (ulti) já ameaça de longe desde o nível 6. O Aghanim's Shard dela sai aos 23,8min, parecido com o de NS (20,8min): a diferença é que o shard dela (bumerangue que volta) dá outra forma de poke à distância.
- o que ele faz com você: Sharpshooter aplica Break no impacto, removendo a passiva Hunter in the Night (velocidade de movimento e ataque bônus à noite) exatamente na hora em que Night Stalker mais depende dela (constants_abilities.json). Bushwhack estuna 1,5 a 2,1s perto de árvore, interrompendo o cast do combo.
- o que você faz com ele: Crippling Fear silencia e corta o Sharpshooter se Night Stalker fechar distância antes do cast de até 3s carregar; de noite o mini-stun do Void também cancela o charge.
- itens que viram: Blink de NS é a resposta direta ao alcance de 3000 do Sharpshooter, fecha antes do charge completar. Black King Bar bloqueia o Sharpshooter por completo, Break incluso (constants_abilities.json, campo bkbpierce), então sem BKB a defesa real é matar Hoodwink rápido ou evitar ficar na linha de tiro.
- como jogar: jogue em zigue-zague quando ouvir o som de carregamento do Sharpshooter, ele tem indicador visual. Depois do Break, ainda dá pra lutar: a passiva volta sozinha em alguns segundos.
- fonte: pro_dados/night_stalker.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_sharpshooter, hoodwink_bushwhack, night_stalker_hunter_in_the_night); aghs_desc (hoodwink).

## Contra Axe (axe)

- placar: Night Stalker venceu 34 de 71 partidas profissionais (47,9%), fonte: pro_dados/night_stalker.json confrontos.
- por que importa: clássico duelo de offlane força contra força, os dois pos 3 str que mais dependem de blink pra iniciar sozinhos.
- janelas: Axe tem lh10 alto (63, pro_dados/axe.json) e fecha Blink aos 15,7min, de novo antes do 17,1min de NS. Entre 15 e 22min (antes do Aghanim's Shard de Axe aos 22,9min) é a janela dele pra forçar Berserker's Call e vencer a troca no corpo a corpo puro.
- o que ele faz com você: Berserker's Call força Night Stalker a atacar Axe por 2,1 a 3s por nível, cancelando Void ou Crippling Fear no meio do cast (constants_abilities.json). Counter Helix dispara a cada 4 a 7 ataques recebidos (menos ataques necessários em nível alto) e causa dano puro em área, ignorando a resistência mágica que NS tem por ser força.
- o que você faz com ele: Crippling Fear silencia Axe e impede o Call de sair primeiro, se Night Stalker castar antes. De noite o Void atordoa, dando tempo de bater em Axe sem ativar o Counter Helix dele (cada ataque de NS conta pro contador de Axe também).
- itens que viram: Blink Dagger decide quem inicia; Black King Bar não impede o Call, a taunt é projetada pra ignorar imunidade a feitiço (constants_abilities.json, campo bkbpierce); Culling Blade não tem stun nenhum, só dano puro, que também ignora BKB. O Aghanim's Shard de Axe (Battle Hunger empilhável) acelera o desgaste em lutas longas.
- como jogar: não troque ataque corpo a corpo contra Axe sem saber quantos stacks de Counter Helix ele já tomou, o estouro pega NS em cheio. Prefira abrir com Crippling Fear antes de chegar perto.
- fonte: pro_dados/night_stalker.json; pro_dados/axe.json; constants_abilities.json (axe_berserkers_call, axe_counter_helix, night_stalker_crippling_fear); aghs_desc (axe).

## Contra Ember Spirit (ember_spirit)

- placar: Night Stalker venceu 36 de 74 partidas profissionais (48,6%), fonte: pro_dados/night_stalker.json confrontos.
- por que importa: rival direto de mid, o outro pos 2 mais comum da amostra depois do Puck, com farm ainda mais rápido (gpm de 558, lh10 de 53, pro_dados/ember_spirit.json).
- janelas: Ember continua escalando bem depois da lane e chega no Aghanim's Shard aos 25,3min, perto do Ultimate Scepter aos 31,6min: ele escala rápido e continua escalando. O blink funcional dele (Fire Remnant) está disponível desde o nível 6, bem antes do Blink físico de NS (17,1min), então ele consegue reposicionar cedo demais pra ser pego parado.
- o que ele faz com você: Sleight of Fist dá um dash de ataque em área com até 170 de dano bônus por nível (constants_abilities.json), recarregando em 7 a 13s: pune NS toda vez que ele fica perto de creeps ou do próprio Ember. Searing Chains prende Night Stalker por até 2,75s e causa 100 de dano por segundo, cancelando a fuga ou a iniciação.
- o que você faz com ele: Flame Guard absorve dano mágico (60 a 300 por nível), então o burst de Void e Crippling Fear rende menos contra Ember com o escudo ativo; vale gastar o combo só depois que o Flame Guard cair. De noite o Void estuna, interrompendo o channel que ele precisa pra reposicionar com os Remnants.
- itens que viram: Black King Bar de NS evita ficar preso pela Searing Chains (é mágica); o Kaya/Sange and Yasha de Ember aumenta o dano mágico dele, então essa é a janela (19 a 25min) pra evitar troca prolongada sem BKB pronto.
- como jogar: não force a luta enquanto o Flame Guard estiver ativo, o escudo absorve boa parte do seu combo. Espere o cooldown dele ou foque primeiro o remnant mais perto.
- fonte: pro_dados/night_stalker.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_sleight_of_fist, ember_spirit_flame_guard, ember_spirit_searing_chains, night_stalker_void).

## Contra Silencer (silencer)

- placar: Night Stalker venceu 30 de 43 partidas profissionais (69,8%), fonte: pro_dados/night_stalker.json confrontos. A maior vantagem da lista com amostra robusta.
- por que importa: maior taxa de vitória entre os confrontos com 30+ partidas. Suporte de mana que teoricamente deveria incomodar um herói que depende de mana pra manter o combo, mas na prática perde o confronto direto.
- janelas: Silencer não tem spike de dano cedo (gpm de 304, lh10 de 6, pro_dados/silencer.json): o perigo dele é todo de controle de área com Global Silence, disponível só a partir do nível 6. Night Stalker atinge o primeiro power spike dele (Echo Sabre + Blink, 14-17min) antes de Silencer ter qualquer item relevante de combate (Force Staff só sai aos 22,3min).
- o que ele faz com você: Global Silence (ulti) silencia o mapa inteiro por 4,5 a 6s, cancelando Void, Crippling Fear e Dark Ascension se castado antes; Curse of the Silent estende a própria duração toda vez que o alvo lança feitiço, punindo NS por manter o combo ativo.
- o que você faz com ele: Crippling Fear silencia Silencer primeiro, negando o Global Silence dele antes mesmo da ultimate carregar (desde que NS reaja rápido); de noite o Void mini-estuna e interrompe qualquer canalização.
- itens que viram: Black King Bar não impede o Global Silence (ele ignora imunidade a feitiço, constants_abilities.json), mas nega a Curse of the Silent; como Silencer tem pouco dano de item, mesmo sem travar o silêncio o resto do combate fica muito mais fácil pra NS, o que ajuda a explicar os 69,8%.
- como jogar: gaste o combo antes do nível 6 dele sempre que puder. Depois disso, BKB ainda deixa o Global Silence te pegar, mas nega a Curse of the Silent, e o pouco dano de Silencer resolve o resto da troca.
- fonte: pro_dados/night_stalker.json; pro_dados/silencer.json; constants_abilities.json (silencer_global_silence, silencer_curse_of_the_silent, night_stalker_crippling_fear).

## Contra Winter Wyvern (winter_wyvern)

- placar: Night Stalker venceu 21 de 32 partidas profissionais (65,6%), fonte: pro_dados/night_stalker.json confrontos.
- por que importa: segunda maior vantagem da lista com 30+ partidas, apesar do Winter's Curse parecer, no papel, um contra duro pro combo de NS.
- janelas: Winter Wyvern é suporte de late (gpm 307, lh10 de 7, pro_dados/winter_wyvern.json) e só pega Blink aos 23,0min, bem depois do de NS (17,1min). Isso significa que Night Stalker tem uma janela de 6 minutos (17-23min) pra forçar a troca antes dela conseguir reposicionar sozinha.
- o que ele faz com você: Winter's Curse dispela e congela um alvo por até 6s (escala com heróis próximos atingidos), forçando aliados a atacar o alvo com bônus de velocidade de ataque: se usado em Night Stalker, cancela o combo dele por completo (constants_abilities.json). Cold Embrace bloqueia dano físico por 4s enquanto cura, então salva um aliado dos ataques de NS, mas não do dano mágico de Void e Crippling Fear.
- o que você faz com ele: Crippling Fear silencia antes do Winter's Curse sair, se Night Stalker reagir rápido; de noite o Void mini-estuna, cancelando a canalização de Cold Embrace em um aliado dela.
- itens que viram: Black King Bar não bloqueia o Winter's Curse (ele dispela debuff immunity antes de aplicar, conforme a descrição), então a resposta real é matar Winter Wyvern antes dela ter ângulo de longo alcance pra castar.
- como jogar: priorize focar Winter Wyvern cedo nas lutas, ela não tem mobilidade própria até o Blink sair (23min). Antes disso, qualquer gank bem posicionado a pega sem resposta.
- fonte: pro_dados/night_stalker.json; pro_dados/winter_wyvern.json; constants_abilities.json (winter_wyvern_winters_curse, winter_wyvern_cold_embrace, night_stalker_crippling_fear).

## Contra Ursa (ursa)

- placar: Night Stalker venceu 36 de 57 partidas profissionais (63,2%), fonte: pro_dados/night_stalker.json confrontos.
- por que importa: boa vantagem na amostra (63,2%) e um carry pos 1 com volume relevante de jogos contra NS (57 partidas, pro_dados/night_stalker.json confrontos): raramente compartilham lane, mas aparecem juntos o suficiente pra valer o confronto, igual o par carry contra carry que gerou essa lista.
- janelas: Ursa tem gpm alto (624, pro_dados/ursa.json) e fecha Battle Fury aos 13,7min, puro farm de jungle antes de qualquer contato. O Blink dele sai aos 16,8min, quase junto do de NS (17,1min), mas o Basher só completa aos 22,5min e o Aghanim's Shard aos 26,1min: até lá Night Stalker já passou pelo próprio spike (Echo Sabre 14min) e pode caçar Ursa sozinho no mapa antes dele ter resposta de controle.
- o que ele faz com você: Fury Swipes empilha dano a cada ataque consecutivo no mesmo alvo (12 a 36 de dano extra por stack, reset em 8 a 20s), então uma troca prolongada corpo a corpo escala contra NS. Enrage (ulti) dá 80% de redução de dano e dispel forte por 4 a 5s, limpando Void e Crippling Fear de uma vez.
- o que você faz com ele: Void atordoa à noite antes do Enrage sair (cast point curto dos dois lados, então depende de quem reage primeiro); Crippling Fear silencia Ursa e impede o farm de jungle perto dele, cortando o gpm que é a força real do herói.
- itens que viram: Black King Bar de NS segura o burst do Overpower (400% de velocidade de ataque bônus); o Aghanim's Shard de Ursa (Earthshock com Fury Swipes em área) é perigoso só depois dos 26min, então a janela de NS é justamente antes disso.
- como jogar: cace Ursa no jungle antes dele ter Blink e Basher prontos (antes dos 17-22min), é onde ele está mais vulnerável. Depois disso, espere o Enrage ser gasto antes de engajar de novo.
- fonte: pro_dados/night_stalker.json; pro_dados/ursa.json; constants_abilities.json (ursa_fury_swipes, ursa_enrage, night_stalker_void).

## Contra Batrider (batrider)

- placar: Night Stalker venceu 10 de 32 partidas profissionais (31,2%), fonte: pro_dados/night_stalker.json confrontos. A maior desvantagem da lista.
- por que importa: pior resultado entre os confrontos com 30+ partidas, e o motivo é mecânico: Batrider tem exatamente as ferramentas que furam o combo de NS.
- janelas: Batrider sai de Blink cedo, 17,7min (n=1139, pro_dados/batrider.json), bem perto do 17,1min de NS: os dois chegam juntos no primeiro spike, mas o dele rende mais porque Flaming Lasso desliga qualquer resposta. O Black King Bar dele sai aos 26,7min, parecido com o de NS (25,8min).
- o que ele faz com você: Flaming Lasso (ulti) arrasta Night Stalker e bloqueia movimento, ataque e feitiços por 2,25 a 3,25s, só quebrando se NS piscar ou usar TP (constants_abilities.json): cancela Dark Ascension e qualquer resposta no meio da luta. Flamebreak empurra, desacelera e causa dano ao longo do tempo, separando NS do time antes da lasso.
- o que você faz com ele: Crippling Fear silencia Batrider e impede a Flaming Lasso de sair primeiro, se Night Stalker reagir a tempo; de noite o Void mini-estuna, mas o alcance curto da lasso (200) faz Batrider preferir ficar fora do range de Void até ter o combo pronto.
- itens que viram: Black King Bar não impede a Flaming Lasso (é mágica, mas projetada pra ignorar imunidade a feitiço, constants_abilities.json): a única saída real é Blink ou TP pra quebrar o agarrão. Linken's Sphere (fora da build usual de NS) seria a resposta ideal, mas não aparece na amostra de itens do herói.
- como jogar: mantenha distância de Batrider fora de luta, o alcance de cast da lasso é curto (200). Se for lassado, use Blink ou TP imediatamente pra quebrar, não espere o combo completar.
- fonte: pro_dados/night_stalker.json; pro_dados/batrider.json; constants_abilities.json (batrider_flaming_lasso, batrider_flamebreak, night_stalker_crippling_fear).

## Contra Undying (undying)

- placar: Night Stalker venceu 12 de 37 partidas profissionais (32,4%), fonte: pro_dados/night_stalker.json confrontos. Segunda maior desvantagem da lista.
- por que importa: suporte de zoneamento que nega justamente a arma principal de NS fora da noite: espaço livre pra caçar e iniciar.
- janelas: Undying não tem spike de dano (gpm 379, lh10 de 21, pro_dados/undying.json): a força dele é todo de controle de área com Tombstone, disponível desde o nível 6. O Aghanim's Shard dele sai aos 24,4min, perto do blink de NS (17,1min) já estar velho: a partir da metade do jogo, Tombstone + shard passam a travar lutas em grupo inteiras.
- o que ele faz com você: Tombstone (ulti) cria zumbis num raio de 1200 por 30s, lotando a área de alvos que distraem o Crippling Fear de NS (ela afeta quem está perto, zumbis incluso) e atrasando a chegada nele mesmo. Decay rouba força de Night Stalker e cura Undying, reduzindo o dano físico do combo.
- o que você faz com ele: Crippling Fear silencia Undying e corta o recast de Tombstone; de noite o Void atordoa e permite destruir a Tombstone mais rápido (ela tem HP escalando por nível, 20 a 32).
- itens que viram: Black King Bar não resolve o problema de espaço do Tombstone, só o dano dos zumbis; a resposta real é ter dano em área (não é o forte de NS) ou simplesmente ignorar a zona e focar outro alvo.
- como jogar: não brigue dentro do raio da Tombstone, destrua ela de fora ou puxe a luta pra outro ponto do mapa. Gaste o combo em Undying antes dele conseguir recastar perto de você.
- fonte: pro_dados/night_stalker.json; pro_dados/undying.json; constants_abilities.json (undying_tombstone, undying_decay, night_stalker_crippling_fear).

## Contra Naga Siren (naga_siren)

- placar: Night Stalker venceu 13 de 40 partidas profissionais (32,5%), fonte: pro_dados/night_stalker.json confrontos.
- por que importa: terceira maior desvantagem da lista e o outro carry hardcore que raramente compartilha lane com NS (Naga é farmadora solo, NS offlane), exatamente o tipo de par que o dono pediu pra não ficar de fora.
- janelas: Naga tem o melhor gpm da lista entre os carries (702, pro_dados/naga_siren.json) mas a amostra pro é pequena (307 partidas no total do herói). Ela fecha Manta Style aos 14,6min, bem antes de qualquer item de controle de NS, e Song of the Siren está disponível desde o nível 6 pra travar lutas inteiras.
- o que ele faz com você: Song of the Siren (ulti) coloca todos num raio de até 1400 em estase por 7s, negando completamente o burst de Night Stalker (nenhum dano ou feitiço funciona nos dois lados); Ensnare prende e impede blink, cancelando a fuga ou a iniciação por até 5s no nível 4.
- o que você faz com ele: Void atordoa à noite antes da Song of the Siren sair, se NS reagir rápido; Crippling Fear silencia e corta o Ensnare, mas Naga só precisa sobreviver até o Manta Style (18 de agilidade bônus mais ilusões) pra fugir da troca.
- itens que viram: Black King Bar de NS protege contra a Song of the Siren, ela não ignora imunidade a feitiço (constants_abilities.json); sem BKB, a resposta real é atacar Naga fora do raio da ultimate ou focar as ilusões de Manta primeiro (elas tomam 200% de dano a mais, items.json).
- como jogar: não gaste o combo achando que vai matar Naga numa troca única, a Song of the Siren reseta a luta. Prefira caçar ela isolada, longe de onde a ultimate salva o time inteiro dela.
- fonte: pro_dados/night_stalker.json; pro_dados/naga_siren.json; constants_abilities.json (naga_siren_song_of_the_siren, naga_siren_ensnare, night_stalker_void); items.json (manta).

## Contra Luna (luna)

- placar: Night Stalker venceu 36 de 70 partidas profissionais (51,4%), fonte: pro_dados/night_stalker.json confrontos.
- por que importa: um dos carries pos 1 mais jogados em pro contra Night Stalker (70 partidas, pro_dados/night_stalker.json confrontos), mesmo sem lane em comum na maioria das vezes: Luna é hard carry de safelane, NS é offlane. É o par "dois carries que não se cruzam na lane mas competem pelo jogo inteiro" que o dono pediu explicitamente.
- janelas: até 15min Luna sai na frente em farm puro (lh10 de 69, o melhor da lista, gpm 695, pro_dados/luna.json), puxando Moon Glaives nos creeps. Dos 17 aos 20min (Manta Style de Luna aos 17,2min contra o Blink de NS aos 17,1min) os dois chegam praticamente juntos no primeiro spike de mobilidade. Depois dos 20min, antes do Dragon Lance dela (19,3min) virar Butterfly (26,1min), é a janela de NS: ele já tem Echo Sabre e Blink prontos pra caçar Luna isolada antes dela ter evasão alta.
- o que ele faz com você: Eclipse (ulti) chove 6 a 12 feixes aleatórios em inimigos próximos; a duração normal escala por nível (2,4 a 6s), mas à noite vira 10s fixos (constants_abilities.json, campo night_duration): se Night Stalker forçar escuridão com Dark Ascension perto de uma Luna com Eclipse pronta, ele pode sem querer aumentar o próprio castigo.
- o que você faz com ele: Crippling Fear silencia Luna antes da Eclipse sair; de noite o Void mini-estuna e trava ela no lugar, o que é decisivo porque Luna não tem nenhum disable ou escape no kit, só Moon Glaives e dano.
- itens que viram: Black King Bar de NS ignora o dano mágico da Eclipse; o Butterfly de Luna (35% de evasão, items.json) reduz muito o dano de auto-ataque de NS depois dos 26min, então a janela de caçar ela é antes disso.
- como jogar: ataque Luna antes dos 26min, antes da evasão do Butterfly entrar. Nunca force escuridão com Dark Ascension perto de uma Luna com ulti pronta, isso estende a janela da Eclipse dela.
- fonte: pro_dados/night_stalker.json; pro_dados/luna.json; constants_abilities.json (luna_eclipse, night_stalker_crippling_fear, night_stalker_darkness); items.json (butterfly).

## Contra Terrorblade (terrorblade)

- placar: Night Stalker venceu 30 de 65 partidas profissionais (46,2%), fonte: pro_dados/night_stalker.json confrontos.
- por que importa: segundo carry hardcore da lista sem lane em comum (65 partidas), e o contraste mais claro de power spike da lista inteira: Night Stalker é forte no meio do jogo, Terrorblade é o herói que mais escala depois dele.
- janelas: até os 20min Terrorblade está atrás na maioria das métricas (lh10 de 66, mas sem dano de combate ainda, pro_dados/terrorblade.json): essa é a janela de ouro de Night Stalker, que já tem Echo Sabre (14min) e Blink (17min) prontos enquanto Terrorblade só tem Manta (17,1min) pra escapar. Dos 28min em diante (Eye of Skadi pronto) e principalmente depois dos 35-40min com Metamorphosis maxado, a curva inverte: Terrorblade vira hard carry capaz de vencer qualquer 1x1 sozinho.
- o que ele faz com você: Sunder troca a vida atual entre os dois, com mínimo garantido de até 35% no nível 1, menos nos níveis seguintes (constants_abilities.json): se Terrorblade estiver quase morrendo, ele pode trocar vida com Night Stalker full e sobreviver ao burst inteiro. Metamorphosis (ulti) dá ataque à distância e bônus de dano, fazendo ele vencer trocas que perderia corpo a corpo.
- o que você faz com ele: antes do Sunder estar disponível de forma segura (ele machuca o próprio Terrorblade se usado errado), o combo de Void mais Crippling Fear ainda mata Terrorblade cedo, porque ele tem pouca vida própria nesse trecho do jogo. De noite o Void atordoa e não dá tempo dele reagir com Reflection.
- itens que viram: o shard de Terrorblade (17,4min, antes até do Aghs de NS) acelera o escape dele com velocidade de movimento às custas de vida própria, o que combina mal contra o burst de NS se usado cedo demais. Black King Bar de NS ignora o slow de Reflection.
- como jogar: force a luta antes dos 20min, é a sua janela real. Depois dos 28-30min evite 1x1 contra Terrorblade sozinho, ele já escalou pra outro patamar e o Sunder neutraliza boa parte do seu burst.
- fonte: pro_dados/night_stalker.json; pro_dados/terrorblade.json; constants_abilities.json (terrorblade_sunder, terrorblade_metamorphosis, night_stalker_void); aghs_desc (terrorblade).
