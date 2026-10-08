---
id: confrontos-kunkka
heroi: Kunkka
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/kunkka.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/beastmaster.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/queenofpain.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/invoker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/marci.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shadow_demon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/enchantress.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/techies.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/bristleback.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/faceless_void.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
---

Kunkka joga um combo com delay: Torrent sobe depois de 1,6s de aviso (110 a 320 de dano, 1,4s de stun, raio 250) e Ghostship chega 3,1s depois de lançado (350 a 600 de dano, 1,2s de stun, alcance 2000). Nenhum dos dois atravessa Black King Bar (fonte: constants_abilities.json, campo bkbpierce). No dataset pro (893 partidas, patches 7.40 e 7.41, pro_dados/kunkka.json) ele sai de GPM 581, XPM 762, LH10 66, nível final 21, e o item que destrava o combo de verdade é o Black King Bar, mediana de 25,0min (p25 20,7min, 359 de 893 partidas). Antes disso ele vive de Phase Boots (mediana 7,0min, em 878 de 893 partidas) pra fechar distância e bater Tidebringer. Os 14 oponentes abaixo foram escolhidos assim: os 6 com mais partidas pro contra ele (Rubick, Beastmaster, Tiny, Shadow Fiend, Disruptor, Queen of Pain); os 2 que mais aparecem na mesma função que ele em pro sem já estar na lista (Invoker na mid, Mars na offlane); os 3 piores confrontos dele com 30+ partidas (Marci, Shadow Demon, Enchantress); e os 3 melhores confrontos dele com 30+ partidas (Techies, Bristleback, Faceless Void), esse último incluído mesmo sem lane em comum porque é o carry mais citado da lista.

## Contra Rubick (rubick)

- placar: 67/147 (45,6%) em pro, patches 7.40 e 7.41 (OpenDota matchups, pro_dados/kunkka.json). Maior amostra de toda a lista.
- por que importa: é o herói com mais partidas pro contra Kunkka (147) de todo o dataset. Rubick é pick quase universal em alto nível, não é da sua lane, mas aparece no confronto o tempo todo e pode devolver sua própria mágica contra você.
- janelas: Rubick não tem spike de item, ele reage ao seu. O momento perigoso dele é quando fecha Blink Dagger (mediana 21,6min, pro_dados/rubick.json) e consegue se posicionar perto o bastante pra roubar com segurança; antes disso ele só incomoda com Fade Bolt. Seu spike (BKB, ~25min) chega depois do Blink dele, então ele costuma ter mobilidade pra se armar primeiro.
- o que ele faz com você: Telekinesis (cast de 0,1s, 0,9 a 1,5s de stun) pode te travar bem na hora que você aperta Torrent (cast 0,4s) ou Ghostship (cast 0,3s) e cancelar o combo antes de sair. Fade Bolt (até 325 de dano) reduz seu dano em até 24% por 10s. Se ele roubar a última mágica sua com Spell Steal, ele reusa com o cooldown dele, não o seu.
- o que você faz com ele: Rubick tem pouco HP e nenhuma mobilidade própria sem Blink. Um Torrent (320 de dano) seguido de Ghostship (600 de dano) mata ele sozinho boa parte do jogo. Tidebringer cleava de graça qualquer coisa perto dele.
- itens que viram: nem Telekinesis nem Fade Bolt atravessam Black King Bar (bkbpierce não nos dois, constants_abilities.json), então ativar o BKB antes de chegar perto do alcance dele (550 a 625) anula as duas coisas e garante o combo inteiro.
- como jogar: ative o BKB antes de entrar no alcance de Telekinesis, não depois que ele já castou. Depois dos 21min ele costuma ter Blink pra se posicionar, então mire nele primeiro no Ghostship antes que ele recue pra roubar com segurança.
- fonte: pro_dados/kunkka.json; pro_dados/rubick.json; constants_abilities.json (kunkka_torrent, kunkka_ghostship, rubick_telekinesis, rubick_fade_bolt, rubick_spell_steal)

## Contra Beastmaster (beastmaster)

- placar: 76/136 (55,9%) em pro, patches 7.40 e 7.41 (pro_dados/kunkka.json).
- por que importa: segundo maior volume de jogos pro contra Kunkka (136), atrás só de Rubick. Os dois compartilham as roles oficiais Initiator e Disabler (heroes.json), kits de iniciação e controle que colidem direto em teamfight.
- janelas: Beastmaster fecha Aghanim's Scepter cedo, mediana de 14,6min (pro_dados/beastmaster.json), antes até do Blink Dagger dele (18,6min), porque o upgrade dá um boar extra e reduz cooldown do Wild Axes. Ele fica perigoso perto dos 15min, bem antes do seu BKB (25min). GPM dele é 616 contra seu 581, ele farma um pouco mais rápido.
- o que ele faz com você: Primal Roar atravessa Black King Bar (bkbpierce sim, constants_abilities.json) e stuna + empurra por até 4s no nível 3, é a única forma confiável de travar você mesmo depois que o BKB já está ativo.
- o que você faz com ele: Tidebringer cleava o Boar e o Raptor dele de graça, são unidades e tomam cleave igual. Torrent (320) + Ghostship (600) somam mais de 900 de dano, mais que o suficiente pra matar ele mesmo com a vida que ele monta.
- itens que viram: Primal Roar é alvo único (behavior Unit Target, constants_abilities.json), então Linken's Sphere bloqueia o primeiro cast dele mesmo ele ignorando BKB. Não é item padrão do seu build, mas vale como resposta pontual se ele virar a maior ameaça do time inimigo.
- como jogar: não conte com o BKB pra sobreviver ao ulti dele. Foque matar ele primeiro no seu combo antes que ele feche o Roar, ou jogue em cima do time dele e ignore a ameaça individual se ele não tiver o ulti pronto.
- fonte: pro_dados/kunkka.json; pro_dados/beastmaster.json; heroes.json (roles); constants_abilities.json (beastmaster_primal_roar, kunkka_torrent, kunkka_ghostship, kunkka_tidebringer)

## Contra Tiny (tiny)

- placar: 73/123 (59,3%) em pro, patches 7.40 e 7.41 (pro_dados/kunkka.json). Um dos melhores confrontos de volume alto da lista.
- por que importa: terceiro maior volume de jogos pro contra Kunkka (123). Tiny é carry nas roles oficiais do jogo (heroes.json), e os dois disputam farm de early/mid game mesmo sem dividir lane fixa.
- janelas: Tiny monta Blink Dagger cedo, mediana 15,9min (pro_dados/tiny.json), pra fechar o combo Avalanche + Toss. Esse é o spike dele, bem antes do seu BKB (25min). LH10 dele é 44 contra o seu 66, ele puxa menos farm cedo, mas o Grow (ulti, disponível desde o nível 6) dá dano bruto que compensa rápido.
- o que ele faz com você: Avalanche + Toss é o próprio combo de stun-e-burst dele (Avalanche trava, Toss te joga de volta pro meio da pancada); o Toss não é bloqueado por BKB porque é deslocamento, não desabilitação (bkbpierce sem valor aplicável, behavior inclui Unit Target, constants_abilities.json), então ele pode te arrastar mesmo com imunidade ativa.
- o que você faz com ele: Torrent já stuna ele antes do combo dele sair (cast mais rápido que o dele reagir), e Ghostship bate em cima de qualquer posicionamento que o Toss tente. Tidebringer cleava o dano bônus dele de volta, já que Tiny também depende de trocar perto.
- itens que viram: seu BKB (25min) chega sempre antes do Grow completo dele virar relevante em luta de time; já o Toss dele passa por cima do seu BKB, então o jogo se decide em quem inicia primeiro, não em quem tem imunidade.
- como jogar: não relaxe achando que o BKB te protege do Toss. Jogue pra iniciar primeiro com Torrent antes dele fechar o Avalanche, porque depois dos 16min ele tem o combo pronto pra te arrastar de volta pro meio do time dele.
- fonte: pro_dados/kunkka.json; pro_dados/tiny.json; heroes.json (roles); constants_abilities.json (tiny_avalanche, tiny_toss, tiny_grow)

## Contra Shadow Fiend (nevermore)

- placar: 56/114 (49,1%) em pro, patches 7.40 e 7.41 (pro_dados/kunkka.json). Confronto parelho.
- por que importa: quarto maior volume de jogos pro contra Kunkka (114). Shadow Fiend é carry nas roles oficiais do jogo (heroes.json), e ainda disputa espaço de farm cedo quando as lanes ficam próximas.
- janelas: Shadow Fiend tem o farm mais rápido da lista inteira: GPM 658, XPM 813, LH10 78 (pro_dados/nevermore.json), bem acima do seu 581/762/66. O spike dele é por volta dos 20-25min, quando fecha Black King Bar (mediana 25,2min) pra poder castar Requiem no meio da luta sem ser interrompido.
- o que ele faz com você: Shadowraze (qualquer das três) não atravessa seu BKB (bkbpierce não, constants_abilities.json), mas acerta rápido e de graça (9s de cooldown) antes de você ativar o BKB. Requiem of Souls tem um delay curto antes de soltar (1,67s de cast, constants_abilities.json) e ganha dano por alma coletada, pode acabar com boa parte da sua vida se você estiver perto quando ele solta.
- o que você faz com ele: ele é mais frágil que você e não tem disable de longo alcance pra fugir do seu Ghostship (2000 de alcance). Se seu Torrent travar ele antes do Requiem sair, o combo mata ele antes que ele consiga soltar o ulti.
- itens que viram: BKB é decisivo dos dois lados aqui, quem ativa primeiro e inicia primeiro geralmente ganha a troca, porque nenhum dos combos atravessa a imunidade do outro.
- como jogar: antes dos 25min evite trocar Shadowraze à queima-roupa, ele farma mais rápido que você nessa fase. Depois que os dois têm BKB, o jogo vira quem inicia primeiro: Torrent trava ele antes que ele consiga soltar o Requiem.
- fonte: pro_dados/kunkka.json; pro_dados/nevermore.json; heroes.json (roles); constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, kunkka_torrent)

## Contra Disruptor (disruptor)

- placar: 62/110 (56,4%) em pro, patches 7.40 e 7.41 (pro_dados/kunkka.json).
- por que importa: quinto maior volume de jogos pro contra Kunkka (110). É um suporte de lane que carrega um silence em área, a ferramenta mais direta pra desligar seu combo inteiro.
- janelas: Disruptor não tem item de poder, ele é utilidade pura (GPM 279, o mais baixo da lista). O perigo dele é o nível 6 (Static Storm) somado ao nível 1 de Kinetic Field, disponíveis bem antes do seu BKB.
- o que ele faz com você: Static Storm (silence de 6s em raio 550) te impede de castar Torrent ou Ghostship enquanto durar, e não atravessa BKB (bkbpierce não, constants_abilities.json), mas se pegar você sem BKB ativo (antes dos 20min) desliga seu combo por completo. Kinetic Field forma uma barreira que te prende dentro ou fora de uma área por até 4,4s, útil pra isolar você do time antes do Ghostship cair. Glimpse só mira herói inimigo (target_team Enemy, constants_abilities.json) e te devolve pra posição de 4s atrás, ele usa em você mesmo pra desfazer o engajamento que você acabou de fazer, inclusive te tirando do alcance do seu próprio Ghostship antes dele bater.
- o que você faz com ele: ele tem pouquíssima vida (o LH10 dele é 4, não farma quase nada). Qualquer pedaço do seu combo que acerte ele é suficiente pra matar.
- itens que viram: BKB resolve o Static Storm, mas só se já estiver ativo antes do silence cair; depois de silenciado você não consegue mais ativar o item. A resposta é reagir antes, não depois.
- como jogar: fique de olho no cooldown do Static Storm dele (100s no nível 1) e evite se comprometer no combo se ele ainda tiver o ulti disponível e você sem BKB. Com BKB pronto, a prioridade de alvo é matar ele primeiro, porque ele não tem como fugir nem se proteger.
- fonte: pro_dados/kunkka.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm, disruptor_kinetic_field, disruptor_glimpse)

## Contra Queen of Pain (queenofpain)

- placar: 61/109 (56,0%) em pro, patches 7.40 e 7.41 (pro_dados/kunkka.json).
- por que importa: sexto maior volume de jogos pro contra Kunkka (109). As duas são carries nas roles oficiais do jogo (heroes.json), rivais de farm quando aparecem na mesma lane.
- janelas: Queen of Pain é mobilidade pura desde o nível 1 com Blink (cooldown de 6 a 12s), ela reposiciona o tempo todo e consegue sair da área antes do seu Torrent (1,6s de aviso) ou do seu Ghostship (3,1s de aviso) acertarem. O item dela que muda o jogo é Aghanim's Scepter, mediana 23,5min (pro_dados/queenofpain.json), bem perto do seu próprio spike de BKB/Aghs (22-25min).
- o que ela faz com você: Sonic Wave (até 625 de dano) empurra pra trás e atravessa Black King Bar (bkbpierce sim, constants_abilities.json), então ela pode te tirar de posição ou te separar do time mesmo com sua imunidade ativa.
- o que você faz com ela: ela tem pouco HP pra ser carry de dano mágico. Se você conseguir acertar o Torrent nela antes do Blink dela sair (cooldown curto, mas tem cast), o Ghostship que vem atrás costuma ser suficiente pra matar.
- itens que viram: o Blink dela anula a vantagem de alcance do seu combo, então Linken's Sphere não ajuda (Sonic Wave é Point Target, não é bloqueado por Linken's) e seu BKB não impede o empurrão do Sonic Wave; a resposta real é focar ela primeiro, antes que ela acumule mana pro Scepter.
- como jogar: trave o Blink dela com Torrent sempre que possível, ele não tem como escapar do raio depois que o aviso aparece. Depois dos 23min, cuidado com o Sonic Wave te empurrando pra fora do grupo do seu time bem na hora do combo.
- fonte: pro_dados/kunkka.json; pro_dados/queenofpain.json; heroes.json (roles); constants_abilities.json (queenofpain_sonic_wave, queenofpain_blink, kunkka_torrent, kunkka_ghostship)

## Contra Invoker (invoker)

- placar: 42/91 (46,2%) em pro, patches 7.40 e 7.41 (pro_dados/kunkka.json). Amostra de 91 partidas, acima do corte de 30.
- por que importa: décimo maior volume de jogos pro contra Kunkka (91 partidas, acima do corte de 30 adotado na lista). Invoker é carry nas roles oficiais do jogo (heroes.json), com kit baseado em mágicas de cast com delay, parecido na estrutura com o do próprio Kunkka.
- janelas: Invoker também vive de mágicas com delay: EMP detona 2,9s depois de lançado, parecido com o aviso do seu Torrent. O item que destrava o kit completo dele é Aghanim's Scepter, mediana 20,2min (pro_dados/invoker.json), chegando um pouco antes do seu BKB (25min).
- o que ele faz com você: Sun Strike (até 675 de dano) atravessa Black King Bar (bkbpierce sim, constants_abilities.json), então mesmo com imunidade ativa ele te acerta em cheio se souber sua posição. Tornado + EMP (os dois bloqueados por BKB, bkbpierce não) é o combo de controle dele pra te prender antes que você solte o seu.
- o que você faz com ele: Invoker é frágil fora do combo dele. Tidebringer cleava os Forge Spirits que ele invoca, e seu Torrent trava ele antes que ele consiga alinhar o combo próprio, que também depende de cast sequencial.
- itens que viram: BKB neutraliza o controle dele (Tornado, Cold Snap, EMP), mas não o Sun Strike; ele pode mandar o Sun Strike de longe sem nem precisar estar perto da luta, então vigiar o mapa importa mais que o item.
- como jogar: ative o BKB antes de entrar na luta pra anular o combo de controle dele, mas não baixe a guarda contra o Sun Strike à distância. Inicie o Torrent nele assim que possível, antes que ele consiga castar a própria sequência.
- fonte: pro_dados/kunkka.json; pro_dados/invoker.json; heroes.json (roles); constants_abilities.json (invoker_sun_strike, invoker_tornado, invoker_emp, invoker_cold_snap)

## Contra Mars (mars)

- placar: 50/97 (51,5%) em pro, patches 7.40 e 7.41 (pro_dados/kunkka.json).
- por que importa: nono maior volume de jogos pro contra Kunkka (97 partidas). Mars é carry nas roles oficiais do jogo (heroes.json: Carry, Initiator, Disabler, Durable), com iniciação pesada parecida com a do próprio Kunkka.
- janelas: Mars monta Blink Dagger cedo, mediana 15,2min (pro_dados/mars.json), antes de qualquer spike seu. Depois disso o ulti dele (nível 6, disponível junto com o seu) vira o verdadeiro divisor: Arena of Blood prende tudo dentro de uma arena por 5,5s.
- o que ele faz com você: Spear of Mars (até 325 de dano, 2,2s de stun no nível 4) é bloqueado por BKB (bkbpierce não, constants_abilities.json) mas não por Linken's Sphere, porque é skillshot em linha (Point Target), não alvo único. Bulwark reduz seu dano físico de frente em até 70% no nível 4, então Tidebringer cleave e seus ataques básicos rendem bem menos se ele estiver de frente pra você.
- o que você faz com ele: Ghostship (2000 de alcance) acerta mesmo que ele tente se esconder atrás da Arena of Blood dele, porque o navio já está em rota antes da arena se formar. Se o Torrent travar ele antes do Blink, o combo passa por cima do escudo frontal.
- itens que viram: contra o Bulwark, ataque pelo lado ou pelas costas quando possível (a redução cai de 70% pra 20-35% fora do ângulo frontal de 140°); BKB ativo resolve a Spear dele, mas não ajuda contra a redução de dano do escudo.
- como jogar: não brigue de frente no corpo a corpo contra o escudo dele sem necessidade, prefira abrir com Torrent à distância. Depois dos 15min, cuidado com o Blink dele fechando a Spear antes que você consiga iniciar.
- fonte: pro_dados/kunkka.json; pro_dados/mars.json; heroes.json (roles); constants_abilities.json (mars_spear, mars_bulwark, mars_arena_of_blood, kunkka_ghostship)

## Contra Marci (marci)

- placar: 13/35 (37,1%) em pro, patches 7.40 e 7.41 (pro_dados/kunkka.json). Pior confronto de volume relevante (35 partidas) da lista.
- por que importa: um dos três piores winrates do Kunkka com amostra de 30+ partidas. Marci é suporte nas roles oficiais do jogo (heroes.json), com kit corpo a corpo agressivo que resolve a lane cedo, exatamente a fase em que o Kunkka ainda não tem BKB.
- janelas: Marci sobe rápido: GPM 365 pra um suporte é alto, e ela fecha Black King Bar cedo, mediana 24,3min (pro_dados/marci.json), quase junto com o seu. O problema é que o ulti dela já está pronto desde o nível 6 e o kit inteiro dela é corpo a corpo, então ela ganha todas as trocas antes dos 20min.
- o que ela faz com você: Unleash dá até 1150% de velocidade de ataque bônus em rajada e desacelera quem ela bate; se ela te pegar sem BKB, a sequência de golpes dela te mata antes do seu próprio combo terminar de cair (Torrent com 1,6s de aviso, Ghostship com 3,1s). Grapple te puxa pra perto dela e não atravessa BKB (bkbpierce não, constants_abilities.json), mas se usar antes de você ativar o item, te trava de qualquer jeito.
- o que você faz com ela: se você sobreviver até ter Phase Boots (7min) e ativar BKB primeiro, ela perde a vantagem de velocidade porque Tidebringer cleave bate mais forte em troca única do que a sequência dela em alvo único.
- itens que viram: BKB ativo antes dela te pegar no Grapple é a diferença entre vencer e morrer essa troca; depois dos 24min, quando ela também tem BKB, o confronto fica mais parelho.
- como jogar: evite trocar corpo a corpo com ela antes dos 7min (Phase Boots) e não ande sozinho perto dela sem BKB disponível depois do nível 6. Se ela abrir o Grapple, ative o BKB na hora, antes do primeiro golpe do Unleash.
- fonte: pro_dados/kunkka.json; pro_dados/marci.json; heroes.json (roles); constants_abilities.json (marci_unleash, marci_grapple)

## Contra Shadow Demon (shadow_demon)

- placar: 22/58 (37,9%) em pro, patches 7.40 e 7.41 (pro_dados/kunkka.json).
- por que importa: segundo pior winrate do Kunkka com amostra de 30+ partidas (58 jogos). É um suporte de setup que ou te tira da luta ou salva o alvo que você estava prestes a matar.
- janelas: Shadow Demon não busca item de poder (GPM 314), ele vive de mana e utilidade. O perigo dele é constante desde o nível 1 com Shadow Poison e cresce com Aghanim's Shard, mediana 25,4min (pro_dados/shadow_demon.json).
- o que ele faz com você: Disruption te bane do campo por 2,75s, cast de alvo único que não atravessa BKB (bkbpierce não, constants_abilities.json) mas te tira do jogo se usado antes de você ativar o item. O uso mais perigoso pra você não é em cima de você, é em cima de um aliado dele que você ia matar: Disruption em aliado funciona como salvamento, deixando o alvo invulnerável e fora do mapa pelos mesmos 2,75s, driblando o stun do seu Torrent ou o dano do Ghostship (banimento do campo de batalha confirmado em constants_abilities.json, target_team inclui Friendly). Demonic Purge atravessa BKB (bkbpierce sim) e remove seus buffs positivos enquanto te desacelera.
- o que você faz com ele: ele tem pouca vida e nenhuma defesa própria. Tidebringer cleave ou um Torrent isolado já ameaçam matar ele se ele ficar exposto.
- itens que viram: Demonic Purge e Disruption são de alvo único (behavior Unit Target, constants_abilities.json), então Linken's Sphere bloqueia o primeiro cast dele em você, incluindo o Purge que ignora BKB.
- como jogar: espere o Disruption dele gastar antes de comprometer o combo completo em cima do alvo principal, porque ele pode salvar o herói que você está prestes a matar. Se seu time tiver Linken's em algum carry, use esse herói como isca pro Disruption dele.
- fonte: pro_dados/kunkka.json; pro_dados/shadow_demon.json; constants_abilities.json (shadow_demon_disruption, shadow_demon_demonic_purge)

## Contra Enchantress (enchantress)

- placar: 12/31 (38,7%) em pro, patches 7.40 e 7.41 (pro_dados/kunkka.json). Amostra pequena (31 jogos, bem no limite dos 30), tratar como indicativo.
- por que importa: terceiro pior winrate do Kunkka com amostra de 30+ partidas. É suporte nas roles oficiais do jogo (heroes.json), mas a passiva dela corta especificamente o que faz o Kunkka forte: velocidade de ataque em combate corpo a corpo prolongado.
- janelas: Enchantress não tem spike de item cedo (GPM 341, time de farm lento). O perigo dela é a passiva Untouchable, ativa desde o nível 1, e o Impetus, que fica mais forte com alcance (Scepter dela, mediana 26,9min, pro_dados/enchantress.json, estende o kit pro late).
- o que ela faz com você: Untouchable desacelera sua velocidade de ataque toda vez que ela é atacada, e isso atravessa Black King Bar (bkbpierce sim, constants_abilities.json), então mesmo com imunidade ativa, bater nela repetidamente com Tidebringer rende cada vez menos.
- o que você faz com ela: Untouchable é passiva (behavior Passive, constants_abilities.json), então Silver Edge quebra ela por 5s depois do golpe que sai da invisibilidade, zerando o efeito justamente na hora que você mais precisa bater nela sem perder velocidade.
- itens que viram: Silver Edge é a resposta direta pra esse confronto, já que BKB não resolve a passiva dela mas o Break resolve. Vale priorizar ele quando ela aparecer na lane adversária.
- como jogar: evite ficar batendo nela repetidamente sem Break ativo, a cada golpe seu fica mais lento. Prefira acertar o combo de Torrent + Ghostship nela de uma vez em vez de trocar corpo a corpo prolongado.
- fonte: pro_dados/kunkka.json; pro_dados/enchantress.json; heroes.json (roles); constants_abilities.json (enchantress_untouchable, enchantress_impetus)

## Contra Techies (techies)

- placar: 21/33 (63,6%) em pro, patches 7.40 e 7.41 (pro_dados/kunkka.json). Melhor confronto da lista com amostra de 30+ partidas, ainda assim amostra justa (33 jogos), tratar como indicativo forte.
- por que importa: é o herói contra quem o Kunkka mais ganha no dataset com volume relevante. Dá pra entender o porquê pelo kit: Techies depende de dano explosivo em área, e o Kunkka é tanque o bastante pra sobreviver ao estouro inicial.
- janelas: Techies não tem spike de combate, ele planta minas o jogo inteiro (GPM 365, o mais baixo entre os carries/semi-carries da lista). O perigo dele é fixo desde cedo: Remote Mines e Land Mines causam de 300 a 750 de dano continuamente, não dependem de item.
- o que ele faz com você: Remote Mines (até 600 de dano) e Land Mines (até 750 de dano) não atravessam BKB (bkbpierce não nos dois, constants_abilities.json), então ativar o item antes de entrar num campo suspeito anula o estouro. Stasis Trap (raiz de até 5s) também é bloqueada por BKB.
- o que você faz com ele: seu HP alto (vem de Bracer, Chainmail, BKB) absorve o estouro de uma mina isolada sem morrer, o que a maioria dos heróis da sua posição não aguenta. Tidebringer cleava ele fácil se ele tentar plantar perto.
- itens que viram: BKB sozinho já neutraliza quase todo o kit ofensivo dele (minas e Stasis Trap), então o confronto se resume a: ative o item antes de atravessar território dele.
- como jogar: ative o BKB preventivamente ao entrar em áreas onde ele pode ter plantado minas, mesmo sem confirmação visual. Seu HP alto te dá margem pra errar uma vez, mas não duas.
- fonte: pro_dados/kunkka.json; pro_dados/techies.json; constants_abilities.json (techies_remote_mines, techies_land_mines, techies_stasis_trap)

## Contra Bristleback (bristleback)

- placar: 31/49 (63,3%) em pro, patches 7.40 e 7.41 (pro_dados/kunkka.json). Segundo melhor confronto da lista com amostra de 30+ partidas.
- por que importa: Bristleback é carry nas roles oficiais do jogo (heroes.json), com kit de tankar e devolver dano, e o winrate alto mostra que o spike cedo do Kunkka (Phase Boots aos 7min) chega antes do spike lento do Bristleback.
- janelas: Bristleback é fraco cedo e fica forte tarde: ele só começa a virar ameaça perto dos 18-22min, quando fecha Aghanim's Shard (mediana 18,4min, pro_dados/bristleback.json). Seu próprio spike (Phase Boots, 7min) chega bem antes, então a fase de lane favorece você.
- o que ele faz com você: Quill Spray atravessa Black King Bar (bkbpierce sim, constants_abilities.json) e ganha dano bônus a cada vez que acerta o mesmo alvo nos últimos 14s, então ele pode te acertar repetidamente mesmo com sua imunidade ativa.
- o que você faz com ele: a passiva dele que reduz dano pelas costas e laterais (16-40% atrás, 8-20% lateral) é uma passiva de verdade (behavior Passive, constants_abilities.json), então Silver Edge quebra ela por 5s, fazendo seus ataques e o Tidebringer renderem o valor cheio não importa o ângulo.
- itens que viram: Silver Edge é o item que resolve esse confronto, porque remove a única defesa real dele (a redução de dano) bem na hora que você mais precisa bater nele de perto.
- como jogar: pressione cedo, antes dele ter o Aghanim's Shard (18min). Depois disso, prioriza Silver Edge se ele for a maior ameaça do time inimigo, pra anular a passiva dele durante o combo.
- fonte: pro_dados/kunkka.json; pro_dados/bristleback.json; heroes.json (roles); constants_abilities.json (bristleback_bristleback, bristleback_quill_spray)

## Contra Faceless Void (faceless_void)

- placar: 20/32 (62,5%) em pro, patches 7.40 e 7.41 (pro_dados/kunkka.json). Amostra justa (32 jogos), tratar como indicativo.
- por que importa: os dois são farmadores de dano físico que raramente dividem lane (Faceless Void é carry nas roles oficiais do jogo, heroes.json), mas esse confronto importa demais porque Chronosphere é a única coisa do jogo que neutraliza por completo o seu combo, mesmo com BKB ativo.
- janelas: Faceless Void farma rápido no early (GPM 567, LH10 48, bem perto do seu 581/66) com Maelstrom, mediana 16,3min, e segue pro Manta (23,4min) antes do BKB dele (28,2min, pro_dados/faceless_void.json). Seu próprio spike (BKB, 25min) chega no meio desse caminho, antes do BKB dele.
- o que ele faz com você: Chronosphere atravessa Black King Bar (bkbpierce sim, constants_abilities.json) e congela tudo ao redor por até 4,75s, exceto ele e as unidades dele; se ele te pegar dentro, seu combo para no meio e você fica preso levando dano. Time Walk também atravessa BKB e deixa ele voltar pra posição de 2s atrás cancelando o dano recebido, inclusive o do seu Torrent se ele reagir rápido.
- o que você faz com ele: antes dos 20-25min ele é tão frágil quanto qualquer carry sem item; Torrent + Ghostship times certo o mata fácil nessa janela, antes do Chronosphere virar ameaça constante (ele só sai no nível 6, igual o seu Ghostship).
- itens que viram: não existe item que resolva Chronosphere (ignora BKB e dispel), a única resposta é posicional: não ficar agrupado perto dele depois que ele tem mana pro ulti (125 a 275 de custo de mana).
- como jogar: pressione a janela de farm early, antes dos 20min, enquanto ele ainda não tem Chronosphere relevante em teamfight. Depois disso, espalhe o time em vez de densificar perto dele, porque um Chronosphere bem posicionado apaga seu combo inteiro.
- fonte: pro_dados/kunkka.json; pro_dados/faceless_void.json; heroes.json (roles); constants_abilities.json (faceless_void_chronosphere, faceless_void_time_walk)
