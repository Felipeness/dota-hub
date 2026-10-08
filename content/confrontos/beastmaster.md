---
id: confrontos-beastmaster
heroi: Beastmaster
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/beastmaster.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/pangolier.json
- dota-hub-conteudo-novo/pro_dados/queenofpain.json
- dota-hub-conteudo-novo/pro_dados/mars.json
- dota-hub-conteudo-novo/pro_dados/juggernaut.json
- dota-hub-conteudo-novo/pro_dados/lone_druid.json
- dota-hub-conteudo-novo/pro_dados/alchemist.json
- dota-hub-conteudo-novo/pro_dados/obsidian_destroyer.json
- dota-hub-conteudo-novo/pro_dados/phantom_assassin.json
- dota-hub-conteudo-novo/pro_dados/life_stealer.json
- dota-hub-conteudo-novo/pro_dados/chaos_knight.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
- https://liquipedia.net/dota2/Outworld_Destroyer
---

## Contra Hoodwink (hoodwink)
- placar: Beastmaster venceu 138 de 282 partidas de pro (48,9%), levemente desfavorável. Amostra grande, fonte pro_dados/beastmaster.json.
- por que importa: é o oponente com mais jogos de pro contra ele no patch (282). Não é counter de lane, Hoodwink é pos 4/5 e aparece em quase todo draft do patch (fonte: pro_dados/hoodwink.json, n=2917 partidas no total dela).
- janelas: até os 10 min ela não tem power spike de item, o perigo é o nível 6 (Sharpshooter). Beastmaster nesse trecho só tá comprando Helm of Iron Will e nivelando Wild Axes, ninguém ganha nada ainda. Dos 15 aos 20 min ela fecha os wards de visão com Observer/Sentry (mediana 19,4 e 19,5 min, fonte pro_dados/hoodwink.json) bem perto de quando Beastmaster normalmente fecha o Scepter (14,6 min) e o Blink (18,6 min, fonte pro_dados/beastmaster.json): é a janela em que ela tenta te ver chegando antes do Roar.
- o que ele faz com você: Bushwhack puxa você pra árvore mais perto se tiver vegetação por perto e te deixa sem visão nenhuma por alguns segundos, corta sua iniciação. Sharpshooter aplica Break (desliga passivas, inclusive Inner Beast do seu bicho dominado) e dá dano alto se você ficar parado no alcance dela.
- o que você faz com ele: ela é squishy e sem disable em si mesma fora da árvore, Primal Roar nela é stun garantido (atravessa BKB, fonte constants_abilities.json: beastmaster_primal_roar, bkbpierce=Yes) e ela não tem escape de verdade além de Scurry, que não tira o stun já aplicado.
- itens que viram: Black King Bar seu cancela o Break do Sharpshooter em cima do seu bicho dominado (Dominate não é dispelável por Break comum, mas o BKB evita o silêncio residual se ela pegar outro alvo seu). Do lado dela, Glimmer Cape ajuda a sumir do seu Wild Axes.
- como jogar: não ande perto de árvore sozinho sem visão, é onde o Bushwhack acerta. Gankeie ela fora do range do Sharpshooter (ele carrega 0,75s e dispara sozinho se você ficar parado): entre com o boar ou o Roar antes dela montar o tiro.
- fonte: pro_dados/beastmaster.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, beastmaster_primal_roar)

## Contra Rubick (rubick)
- placar: Beastmaster venceu 129 de 275 (46,9%), levemente desfavorável. Fonte pro_dados/beastmaster.json.
- por que importa: segundo oponente com mais jogos de pro contra ele (275). Suporte mais picado do patch pra travar iniciação com Fade Bolt e Telekinesis, e o único da lista que pode literalmente virar seu Primal Roar contra você via Spell Steal.
- janelas: Rubick não tem spike de item (arcane_boots com mediana 10,3 min é o único relevante, fonte pro_dados/rubick.json), o perigo dele é por nível e por oportunidade: ele precisa te ver castar algo pra roubar. Depois que você soltar Primal Roar numa escaramuça e sobreviver, ele pode guardar esse roubo pra te usar de volta minutos depois.
- o que ele faz com você: Fade Bolt reduz seu dano de feitiço e de ataque por alguns segundos (pior pros seus hawks, que já têm resistência mágica própria mas perdem dano de ataque). Telekinesis te joga no ar e te deixa aberto pra engajar antes de você soltar o Roar. E o Spell Steal: se ele guardar seu Primal Roar, ele ganha um stun que atravessa BKB igual ao seu, mirado em você.
- o que você faz com ele: ele é squishérrimo e sem disable de verdade sem um steal pronto. Pegue ele cedo, antes dele acumular uma magia boa pra roubar, e mate rápido pra ele não ter chance de usar o que roubou.
- itens que viram: evite castar seu Primal Roar perto dele sem necessidade quando ele já tiver visão de linha: dê preferência pra soltar o Roar só quando o combo já for garantir a luta, porque se ele roubar e sobreviver, ele devolve o stun. BKB seu ainda bloqueia o stun dele se ele usar magia normal (não roubada, já que a roubada herda bkbpierce do Primal Roar original).
- como jogar: force ele a gastar Fade Bolt ou Telekinesis fora de posição antes de iniciar; se ele já tiver seu Roar guardado, espere o timer dele passar (ele só guarda por alguns minutos) antes de entrar de novo.
- fonte: pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_fade_bolt, beastmaster_primal_roar)

## Contra Tusk (tusk)
- placar: Beastmaster venceu 118 de 263 (44,9%), levemente desfavorável. Fonte pro_dados/beastmaster.json.
- por que importa: terceiro mais jogado contra ele (263). Os dois são iniciadores de blink que disputam quem engaja primeiro a luta.
- janelas: Tusk fecha o Blink Dagger com mediana 19,0 min (fonte pro_dados/tusk.json), quase junto com o seu (18,6 min). Antes disso, dos 6 aos 10 min, ele tem Ice Shards pra te travar na lane sem precisar de item nenhum. Depois dos 20 min os dois têm blink prontos: quem erra o engajamento primeiro perde a luta.
- o que ele faz com você: Ice Shards cria uma parede que te prende se você bater nela ao tentar perseguir, e o combo Snowball (pode te pegar junto se você tiver perto de um aliado dele, não o contrário) seguido de Walrus Kick te empurra e atordoa antes de você chegar a 600 de distância pro seu Roar.
- o que você faz com ele: seu Primal Roar tem 600 de alcance contra o blink dele de distância menor; se você reagir rápido ao blink dele, consegue stunar ele no ar antes do combo começar. Seus hawks (Summon Raptor) prendem (root) ele junto, o que atrapalha o posicionamento do Ice Shards dele.
- itens que viram: BKB seu neutraliza o Ice Shards (stun mágico comum, bkbpierce=No em constants_abilities.json), mas não o Walrus Kick: ele tem bkbpierce=Yes, então o combo Snowball + Kick atravessa seu Black King Bar. Do lado dele, Shard de Tusk puxa aliado pra perto, o que pode tirar o alvo do seu Roar antes de você soltar.
- como jogar: não force trade sem BKB contra ele depois dos 15 min, é exatamente a fase que ele fecha item pra iniciar. Prefira puxar ele pra perto do seu time com o hawk antes de engajar sozinho.
- fonte: pro_dados/tusk.json; pro_dados/beastmaster.json; constants_abilities.json (tusk_ice_shards, tusk_walrus_kick, beastmaster_primal_roar); api.opendota.com/api/constants/aghs_desc (shard de Tusk)

## Contra Shadow Fiend (nevermore)
- placar: Beastmaster venceu 136 de 255 (53,3%), leve vantagem. Fonte pro_dados/beastmaster.json.
- por que importa: quarto mais jogado (255). É o confronto de lane mais direto da lista quando Beastmaster joga de pos 2: os dois competem pelo meio.
- janelas: até os 10 min Shadow Fiend farma muito mais rápido (last hit mediano aos 10 min de 78 contra 63 do Beastmaster, fonte pro_dados/nevermore.json e pro_dados/beastmaster.json), porque Shadowraze zera onda sem gastar mana de verdade. Dos 12 aos 17 min ele fecha Blade of Alacrity (12,7 min) rumo a item de crítico e já ameaça kill isolado. Beastmaster só emparelha em poder de luta depois do Scepter (14,6 min) e principalmente do Blink (18,6 min), quando o Roar pesa mais que o Raze dele numa troca de 1x1.
- o que ele faz com você: Shadowraze (as três versões, perto/médio/longe) te tira de lane sem te deixar chegar perto, e ele ganha dano bônus por Necromastery a cada herói que mata, o que vira bola de neve rápido se ele abrir vantagem cedo.
- o que você faz com ele: ele não tem disable nem escape de verdade (Requiem of Souls é a única ameaça real, dano em linhas retas ao redor dele). Seu Primal Roar atravessa o BKB dele e te deixa 600 de distância pra pegar ele antes do Requiem carregar.
- itens que viram: Black King Bar seu primeiro: sem isso você não sobrevive pra chegar nos 600 de alcance do Roar contra o Raze dele. Do lado dele, Shard de Shadow Fiend reduz cooldown por herói acertado, então ele empilha Raze mais rápido se o seu time ficar agrupado.
- como jogar: na lane, jogue de fora do alcance do Raze médio e deixe o boar segurar a wave. Depois dos 20 min, gankeie ele com visão prévia: sem TP ele fica isolado e o Roar fecha a kill sozinho.
- fonte: pro_dados/nevermore.json; pro_dados/beastmaster.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, beastmaster_primal_roar); api.opendota.com/api/constants/aghs_desc (shard de Shadow Fiend)

## Contra Jakiro (jakiro)
- placar: Beastmaster venceu 118 de 239 (49,4%), praticamente parelho. Fonte pro_dados/beastmaster.json.
- por que importa: empatado como quinto mais jogado (239). Suporte de controle de área que atrapalha tanto o seu bicho dominado quanto a sua iniciação em grupo.
- janelas: sem spike de item (arcane_boots mediana 11,7 min é o auge dele, fonte pro_dados/jakiro.json), o perigo dele escala só por nível: Macropyre (nível 6) já é uma parede de dano que nega teamfight inteira, inclusive a sua.
- o que ele faz com você: Dual Breath e Ice Path zoneiam seu boar e seus hawks da luta, e Macropyre queima qualquer coisa parada em cima, incluindo o creep que você dominou.
- o que você faz com ele: ele é lento e sem disable de curto alcance pra te impedir de chegar nos 600 do Roar. Pegue ele isolado antes do nível 6, antes do Macropyre virar ameaça de área.
- itens que viram: BKB seu segura o Ice Path (stun mágico comum) até você soltar o Roar. Do lado dele, Scepter de Jakiro deixa o Macropyre com dano puro e mais longo, o que ignora qualquer resistência mágica sua ou do seu bicho dominado.
- como jogar: não agrupe seu time em cima de árvore ou vegetação perto dele depois do nível 6, é onde o Macropyre compensa. Gankeie ele antes disso, de preferência antes dos 6 min.
- fonte: pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre, jakiro_ice_path); api.opendota.com/api/constants/aghs_desc (scepter de Jakiro)

## Contra Snapfire (snapfire)
- placar: Beastmaster venceu 125 de 239 (52,3%), leve vantagem. Fonte pro_dados/beastmaster.json.
- por que importa: empatado como quinto/sexto mais jogado (239). Suporte com papéis de Nuker e Disabler em comum com o Beastmaster (fonte heroes.json), então às vezes é rival direto de rota.
- janelas: o item que mais importa nela é o Aghanim's Shard (mediana 16,9 min, n=1919 de 2456 partidas, fonte pro_dados/snapfire.json), bem antes do seu BKB (23,6 min). Entre os 15 e 20 min ela já tem Firesnap Cookie turbinado, enquanto você ainda tá fechando Blink.
- o que ele faz com você: Scatterblast e Lil' Shredder reduzem a sua armadura e a do seu bicho dominado, então ele morre mais rápido pra creep wave do que o normal. Firesnap Cookie com Shard ainda cura o alvo e manda um Mortimer Kiss extra, o que sustenta ela numa troca longa.
- o que você faz com ele: ela não tem blink nem disjoint de projétil, então Wild Axes acerta fácil e o Roar fecha o combo sem ela conseguir sair.
- itens que viram: seu Assault Cuirass reduz a armadura dela ainda mais em área (raio 1200, fonte items.json) e acelera o contador de Drums of Slom, compensando o Break que ela não tem mas o Shredder reduz sua defesa igual.
- como jogar: respeite o alcance do Scatterblast em ponto cego (point-blank dá +30% de dano e +50% de duração do slow, fonte constants_abilities.json), não entre de frente nela. Flanqueie com o hawk antes do boar.
- fonte: pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_firesnap_cookie); items.json (assault)

## Contra Pangolier (pangolier)
- placar: Beastmaster venceu 84 de 205 (41,0%), desvantagem com amostra grande. Fonte pro_dados/beastmaster.json.
- por que importa: é o rival mais jogado contra ele em pro que compartilha todos os papéis do Beastmaster (Initiator, Disabler, Durable, Nuker, fonte heroes.json). Os dois competem pela mesma rota e pelo mesmo papel de iniciador saltitante.
- janelas: Pangolier depende de item pra fazer qualquer coisa de longe: Blink mediana 19,2 min (fonte pro_dados/pangolier.json), bem depois do seu (18,6 min). Até lá ele só tem Swashbuckle de curto alcance. Depois dos 20 min, quando ele já rola com Rolling Thunder, a diferença é que o Roll Up dele (imunidade a debuff e 80% de resistência mágica) bloqueia seu stun enquanto ativo, mas não dura pra sempre.
- o que ele faz com você: Rolling Thunder acerta e atordoa todo mundo no caminho, inclusive seu bicho dominado, e ele pode cancelar o rolê com Roll Up se perceber que vai tomar o Roar, ficando imune por alguns segundos.
- o que você faz com ele: fora do Roll Up ele não tem imunidade a debuff nenhuma, e como ele depende de blink pra iniciar, qualquer disable seu antes do Blink dele (nível baixo, antes dos 6) trava o jogo dele inteiro.
- itens que viram: espere ele sair do Roll Up/Gyroshell pra soltar o Roar, caçar o momento certo rende mais que tentar atravessar a imunidade. Seu BKB segura o Shield Crash dele até você devolver o combo.
- como jogar: pressione ele antes dos 19 min, é a janela em que ele não tem blink nem bola pra fugir. Depois disso, jogue reativo: deixe ele gastar o Rolling Thunder primeiro.
- fonte: pro_dados/pangolier.json; constants_abilities.json (pangolier_gyroshell, pangolier_rollup, pangolier_shield_crash, beastmaster_primal_roar)

## Contra Queen of Pain (queenofpain)
- placar: Beastmaster venceu 111 de 199 (55,8%), vantagem. Fonte pro_dados/beastmaster.json.
- por que importa: é o melhor saldo do Beastmaster entre os rivais de mid de verdade com amostra grande (199 jogos).
- janelas: Queen of Pain já nasce com Blink (habilidade própria, não item) e usa Scream of Pain pra farmar onda e te poquear ao mesmo tempo desde o nível 1. Ela fecha Kaya mediana 13,9 min (fonte pro_dados/queenofpain.json) pra virar o próprio spell amp, bem antes do seu Scepter (14,6 min) fazer diferença de verdade em luta.
- o que ele faz com você: ela te poqueia de longe com Scream sem precisar chegar nos seus 600 de Roar, e usa o Blink dela pra sair assim que você fecha distância. Sonic Wave (ult) te empurra pra longe, exatamente o oposto do que o Roar faz com ela.
- o que você faz com ele: ela não tem disable de verdade, só o slow do Shadow Strike. Se você fechar os 600 de distância com o próprio blink antes dela reagir, o Roar nela é quase garantido porque ela não tem ferramenta pra sair de um unit-target.
- itens que viram: seu Blink precisa vir antes do dela reagir (cast time do Roar é só 0,3s de blink + 0,5s do Roar, fonte constants_abilities.json), senão ela sai com o blink próprio e sobra só o slow do Wild Axes. Shiva's Guard seu reduz o attack speed dela, o que corta o DPS de auto-ataque entre os nukes.
- como jogar: não troque à distância com ela, o Scream poqueia de graça. Jogue pelo gank: force ela a gastar o blink fugindo de outra pessoa primeiro, depois feche com o seu, é aí que o saldo favorável do Beastmaster nesse confronto se confirma.
- fonte: pro_dados/queenofpain.json; pro_dados/beastmaster.json; constants_abilities.json (queenofpain_blink, beastmaster_primal_roar)

## Contra Mars (mars)
- placar: Beastmaster venceu 101 de 199 (50,8%), praticamente parelho. Fonte pro_dados/beastmaster.json.
- por que importa: compartilha os papéis de Initiator, Disabler e Durable com o Beastmaster (fonte heroes.json), e é o confronto de offlane iniciador contra offlane iniciador mais jogado da lista.
- janelas: Mars fecha Blink mais cedo que você (mediana 15,2 min contra 18,6 min seu, fonte pro_dados/mars.json e pro_dados/beastmaster.json), então nos primeiros 15 a 18 min ele ameaça iniciar primeiro. Depois que seu Blink e BKB saem (18,6 e 23,6 min), a troca fica mais equilibrada: os dois têm engajamento forte e tanque.
- o que ele faz com você: Spear of Mars te empala e te arrasta pra trás se bater em parede ou árvore, te tirando da luta antes dela começar. Arena of Blood prende seu time (e os hawks, se estiverem dentro) numa arena que nega fuga e cura.
- o que você faz com ele: God's Rebuke tem acerto garantido mas não disable longo; seu Roar, que atravessa BKB dele, ainda funciona mesmo se ele ativar Bulwark (o escudo é contra ataque físico frontal, não contra feitiço).
- itens que viram: BKB seu segura o Spear dele até o Roar sair. Do lado dele, Scepter de Mars cura ele e os aliados dentro da própria Arena e dá bônus de dano de ataque (empilhável) se matar alguém lá dentro, o que vira bola de neve se a luta demorar.
- como jogar: não entre em linha reta com ele à vista, a Lança é de longo alcance. Prefira iniciar você primeiro: quem engaja primeiro geralmente ganha esse confronto.
- fonte: pro_dados/mars.json; pro_dados/beastmaster.json; constants_abilities.json (mars_spear, mars_arena_of_blood, mars_gods_rebuke, mars_bulwark, beastmaster_primal_roar); api.opendota.com/api/constants/aghs_desc (scepter de Mars)

## Contra Juggernaut (juggernaut)
- placar: Beastmaster venceu 24 de 63 (38,1%), desvantagem grande. Fonte pro_dados/beastmaster.json.
- por que importa: um dos carries mais jogados contra ele em pro (63 jogos) mesmo sem dividir lane: Juggernaut é farmador solo de safelane, Beastmaster normalmente nem está na rota dele. Entra na lista porque dois core fortes se cruzam no mapa e no poder de luta mesmo sem trocar hit na lane.
- janelas: até os 13-14 min os dois só farmam (Juggernaut fecha Battle Fury mediana 13,6 min, fonte pro_dados/juggernaut.json; você fecha o Scepter aos 14,6). Dos 15 aos 20 min ele já ameaça pickoff com Blade Fury, mas sem disable pra te travar primeiro. Depois dos 23 min, com seu BKB pronto, você consegue aguentar o Omnislash (cooldown 120s, fonte constants_abilities.json) até seu time focar ele.
- o que ele faz com você: Blade Fury te acerta à distância enquanto ele fica com 80% de resistência mágica e imune a debuff por 5s (fonte constants_abilities.json), ou seja, enquanto o spin tá ativo, nem seu Primal Roar (que atravessa BKB) consegue te travar ele. Omnislash (120s de cooldown) te pula em cima com invulnerabilidade durante o salto.
- o que você faz com ele: ele não tem fuga nenhuma fora do Blade Fury. Se você soltar o Roar antes do spin começar ou depois dele acabar, ele fica preso: sem blink, sem invisibilidade.
- itens que viram: cace a janela fora do Blade Fury (ele gira 5s, cooldown de 18 a 36s dependendo do nível) pra soltar seu combo. Scythe of Vyse seu desarma ele de vez, o hex não é quebrado nem pelo Omnislash em andamento se você acertar antes do cast.
- como jogar: não tente travar ele durante o spin, é perda de mana. Gankeie ele fora da jungle, antes do Battle Fury: sem farm rápido ele não escala pra sustentar o time sozinho.
- fonte: pro_dados/juggernaut.json; pro_dados/beastmaster.json; constants_abilities.json (juggernaut_blade_fury, juggernaut_omni_slash, beastmaster_primal_roar)

## Contra Lone Druid (lone_druid)
- placar: Beastmaster venceu 12 de 35 (34,3%), pior saldo da lista. Amostra pequena (35 jogos), levar com ressalva. Fonte pro_dados/beastmaster.json.
- por que importa: carry raro em pro mas com o maior desequilíbrio contra o Beastmaster entre confrontos com 30+ jogos, e os dois disputam exatamente o mesmo recurso no mapa: jungle. Lone Druid farma com o Spirit Bear enquanto fica exposto em outra rota, igual Beastmaster farma com o bicho dominado.
- janelas: até os 15 min Lone Druid tá espalhado em duas rotas (ele numa, o urso na outra), ambos vulneráveis a gank isolado. Ele fecha Mithril Hammer mediana 15,0 min e Maelstrom 12,1 min (fonte pro_dados/lone_druid.json), itens de farm pro urso, não de luta. Beastmaster com Scepter (14,6) e Blink (18,6) já consegue punir qualquer um dos dois lados sozinho nessa fase.
- o que ele faz com você: True Form transforma ele num urso grande com mais dano e armadura, perigoso em luta direta se já estiver nessa forma, mas lento pra reagir a um gank rápido no herói original, que fica fraco e sem disable.
- o que você faz com ele: Lone Druid base não tem escape nem disable de verdade (Entangle precisa de stacks acumulados), e isolado ele ou o urso caem rápido pro Roar. Ainda assim o placar de pro favorece o Lone Druid por boa margem (amostra pequena, levar com ressalva), então essa vantagem teórica de isolamento parece não se converter em vitória com a frequência que o kit sugere.
- itens que viram: seus hawks (Summon Raptor) acham e prendem o Spirit Bear exposto numa rota vazia, exatamente o papel deles. BKB seu neutraliza o Entangle se ele já tiver stacks o suficiente pra prender você.
- como jogar: olhe o mapa antes de forçar luta: ele e o urso raramente estão juntos antes dos 20 min. Mate o lado mais exposto primeiro, geralmente o urso sozinho numa lane.
- fonte: pro_dados/lone_druid.json; pro_dados/beastmaster.json; constants_abilities.json (lone_druid_true_form, lone_druid_entangle)

## Contra Alchemist (alchemist)
- placar: Beastmaster venceu 27 de 63 (42,9%), desvantagem. Fonte pro_dados/beastmaster.json.
- por que importa: é o confronto que o pedido original citou como exemplo: dois carries que raramente dividem lane (Alchemist é safelane puro, Beastmaster joga mid ou offlane) mas competem pelo mesmo recurso, jungle e ritmo de jogo, e cujo choque de power spike decide o jogo mesmo sem 1x1 direto.
- janelas: Alchemist é o farmador mais rápido da lista (GPM 768 contra 616 do Beastmaster, fonte pro_dados/alchemist.json e pro_dados/beastmaster.json) e fecha Radiance cedo, mediana 13,9 min (n=672 de 796 partidas). Até os 14 min ele já pressiona torre e jungle sozinho com o aura de fogo. Mas Beastmaster fecha Scepter praticamente junto (14,6 min) e Blink logo depois (18,6): dos 15 aos 20 min, se Beastmaster achar ele sozinho na jungle, Alchemist não tem nenhuma ferramenta de fuga.
- o que ele faz com você: Unstable Concoction, se bem carregado (até 3,2s de stun e 360 de dano, fonte constants_abilities.json), inicia luta nele mesmo sem close range. Chemical Rage dá regeneração e velocidade enormes, difícil de abater em troca prolongada se ele já estiver ativo.
- o que você faz com ele: Alchemist não tem escape nenhum, só velocidade de movimento do Chemical Rage e do Berserk Potion. Seu Primal Roar (atravessa BKB) é execução garantida se você achar ele sozinho puxando camp, porque ele não tem como sair do unit-target, mas na prática o placar de pro é desfavorável ao Beastmaster (42,9%): o GPM mais alto do Alchemist (768 contra 616) costuma garantir que ele já esteja forte ou protegido pelo time antes de ficar isolado o bastante pra esse combo acontecer.
- itens que viram: cace ele na jungle antes dos 14 min, antes do Radiance sair: é a janela em que ele ainda não tem o item que define o farm dele. BKB seu segura o Unstable Concoction até você devolver o combo.
- como jogar: use seus hawks pra escanear a jungle inimiga atrás dele isolado. Se ele já tiver Chemical Rage ativo, não entre sem o seu time, a regeneração dele é alta demais pra 1x1.
- fonte: pro_dados/alchemist.json; pro_dados/beastmaster.json; constants_abilities.json (alchemist_unstable_concoction, alchemist_chemical_rage, beastmaster_primal_roar)

## Contra Outworld Destroyer (obsidian_destroyer)
- placar: Beastmaster venceu 23 de 31 (74,2%), melhor saldo da lista. Amostra pequena (31 jogos, bem no limite dos 30), levar com ressalva. Fonte pro_dados/beastmaster.json.
- por que importa: é o maior desequilíbrio a favor do Beastmaster entre confrontos com 30 ou mais jogos de pro, o que surpreende: Outworld Destroyer é feito pra punir herói de mana baixa, e Beastmaster, apesar de atributo universal, não empilha mana como os magos que o OD costuma enfrentar. Mesmo assim, nessa amostra pequena, é o confronto mais favorável da lista pra ele, provavelmente porque OD é frágil fisicamente e cai rápido pro Roar antes do mana gap virar problema.
- janelas: Essence Flux dele cresce com nível, não com item de luta, então o perigo dele já existe desde a lane. Beastmaster só começa a competir depois do Scepter (14,6 min) dar sustentação via Drums of Slom, mas isso não resolve o problema de mana baixa contra o Sanity's Eclipse dele.
- o que ele faz com você: Arcane Orb soma dano puro a cada ataque baseado na mana atual dele (10% a 13% do pool, cooldown que cai pra 0 no nível 4, fonte constants_abilities.json), o que faz o right-click dele doer cada vez mais sem gastar nada. Sanity's Eclipse soma dano base (200/300/400) mais 40% da diferença entre a mana dele e a sua: como Beastmaster não empilha mana, essa diferença cresce sozinha com o nível do OD e pode te explodir numa magia só. Astral Imprisonment ainda te tira da luta por até 4s enquanto rouba uma fatia do seu mana pool.
- o que você faz com ele: ele é frágil fisicamente e sem fuga além de se esconder lançando a própria Astral Imprisonment nele mesmo (a magia pode mirar aliados). Seu Primal Roar, que atravessa BKB, ainda garante o stun nele, mas o problema é sobreviver até os 600 de alcance sem levar um Eclipse antes.
- itens que viram: Pipe of Insight seu (barreira de 425 de dano mágico por aliado) amortece o Eclipse em luta de grupo. Items de mana (Null Talisman, Bracer) ajudam a fechar a diferença que o Sanity's Eclipse usa como gatilho de dano.
- como jogar: não entre no alcance de 700 do Eclipse sem BKB ativo ou sem barreira. Gankeie ele cedo, antes do nível 6, antes da ultimate virar ameaça de uma magia só.
- fonte: pro_dados/obsidian_destroyer.json; pro_dados/beastmaster.json; constants_abilities.json (obsidian_destroyer_sanity_eclipse, obsidian_destroyer_arcane_orb, obsidian_destroyer_astral_imprisonment); liquipedia.net/dota2/Outworld_Destroyer

## Contra Phantom Assassin (phantom_assassin)
- placar: Beastmaster venceu 26 de 41 (63,4%), vantagem forte. Fonte pro_dados/beastmaster.json.
- por que importa: carry clássico sem lane em comum com Beastmaster (ela é safelane, ele mid ou offlane), mas entre os melhores saldos com 30+ jogos. É o caso típico de "dois core que nunca trocam hit mas um power spike anula o outro".
- janelas: Phantom Assassin fecha Battle Fury mediana 14,4 min (fonte pro_dados/phantom_assassin.json) e a partir daí farma sozinha rápido demais pra ser pega sem gank coordenado. Em tese o farm dela escala melhor que o dele pro final de jogo, mas o placar de pro favorece o Beastmaster: ele caça ela isolada antes da Battle Fury virar bola de neve.
- o que ele faz com você: Blur deixa ela invisível (buffer de 0,8s fora de combate, fonte constants_abilities.json) sempre que não está perto de herói ou torre, difícil de flanquear com hawk ou boar porque eles contam como unidade inimiga perto o suficiente pra revelar ela, mas só quando já é tarde. Coup de Grace dá crítico de até 400% de dano (fonte constants_abilities.json) que explode qualquer um que ela pegue sem BKB.
- o que você faz com ele: ela não tem disable nem fuga além da própria Blur (que é invisibilidade, não imunidade a stun). Se você já tiver visão nela quando castar, o Primal Roar acerta normalmente mesmo ela estando "invisível" de Blur, porque a invisibilidade cai assim que ela é vista de novo em combate.
- itens que viram: seu Shiva's Guard reduz o attack speed dela em área, o que corta o DPS que sustenta os críticos de Coup de Grace. Sentry Ward/Gem no seu time ajuda a manter visão permanente, tirando o valor do Blur.
- como jogar: não ande sozinho sem visão de sentry depois dos 15 min, ela farma rápido e pune isolamento. Gankeie com o time quando possível, mas o Primal Roar sozinho já é favorito nesse 1x1 enquanto ela não tiver vantagem de item grande.
- fonte: pro_dados/phantom_assassin.json; constants_abilities.json (phantom_assassin_blur, phantom_assassin_coup_de_grace)

## Contra Lifestealer (life_stealer)
- placar: Beastmaster venceu 40 de 65 (61,5%), vantagem. Fonte pro_dados/beastmaster.json.
- por que importa: outro carry sem lane em comum (ele é safelane) mas que, igual Beastmaster, farma via jungle agressiva com o próprio kit (Feast cura em cima de cada ataque). Os dois competem pelo mesmo espaço de mapa cedo.
- janelas: Lifestealer fecha Radiance mediana 16,2 min (fonte pro_dados/life_stealer.json), pouco depois do seu Blink (18,6, mas ele sai antes). Rage, a defesa dele, tem cooldown de 17 a 20s dependendo do nível e dura de 3 a 6s com imunidade total a debuff (fonte constants_abilities.json): enquanto ativo, nem seu Roar, que atravessa BKB, consegue travar ele.
- o que ele faz com você: Open Wounds marca o alvo e cura o time dele a cada dano causado nele, então uma luta longa favorece ele se o seu time focar errado. Feast cura ele a cada ataque baseado na vida máxima do alvo, o que o deixa difícil de abater em troca direta.
- o que você faz com ele: fora do Rage ele não tem fuga nenhuma, e o Rage tem cooldown real. Se você esperar o Rage cair e soltar o Roar nesse intervalo, o stun pega e ele não tem resposta.
- itens que viram: cronometre o Rage dele (17 a 20s de cooldown, 3 a 6s de duração) antes de soltar seu combo. Do lado dele, Satanic ou Skadi aumentam ainda mais a sustentação, então quanto mais cedo você pegar ele isolado, melhor.
- como jogar: não entre durante o Rage, espere passar. Gankeie ele cedo antes do Radiance, depois disso o farm dele acelera demais pra ficar exposto.
- fonte: pro_dados/life_stealer.json; constants_abilities.json (life_stealer_rage, life_stealer_open_wounds, beastmaster_primal_roar)

## Contra Chaos Knight (chaos_knight)
- placar: Beastmaster venceu 23 de 37 (62,2%), vantagem. Fonte pro_dados/beastmaster.json.
- por que importa: carry sem lane fixa em comum (ele também é flex 1/2) mas entre os melhores saldos do Beastmaster com 30+ jogos, e escala pro mesmo papel de "tanque de luta" que o Beastmaster quer ocupar, só que com ilusões que farmam mais rápido.
- janelas: até os 15 min Chaos Knight fecha Armlet (mediana 11,7 min, fonte pro_dados/chaos_knight.json) e já briga de perto. Depois dos 20 min, com Phantasm (cooldown 75s, dá até 3 ilusões que tomam 350% de dano mas causam 100%, fonte constants_abilities.json), ele multiplica o dano de time inteiro numa luta só, o que o seu Roar, que é unit-target, não resolve sozinho.
- o que ele faz com você: Chaos Bolt tem stun de duração e dano aleatórios (até 3,25s e 410 de dano, fonte constants_abilities.json), imprevisível mas forte. Reality Rift te puxa pra perto dele e reduz sua armadura por 6s, ótimo setup pro time dele.
- o que você faz com ele: ele não tem fuga de verdade fora de Chaos Strike (crítico com lifesteal, não é escape). Seu Roar pega ele isolado, mas numa luta de 5 com Phantasm ativo, travar só o Chaos Knight original não impede as ilusões de baterem.
- itens que viram: Scythe of Vyse seu destrói as ilusões do Phantasm na hora além de hexar o original, é o item que mais pesa contra esse combo. BKB seu segura o Chaos Bolt até você devolver.
- como jogar: cuidado em troca prolongada depois do Armlet, a sustentação dele ajuda, mas o Roar ainda é o jeito mais confiável de fechar nele antes da troca esticar. Em luta de grupo, prioridade de alvo é nele mesmo, as ilusões morrem fácil (tomam 350% de dano) assim que o original cai.
- fonte: pro_dados/chaos_knight.json; constants_abilities.json (chaos_knight_chaos_bolt, chaos_knight_phantasm, chaos_knight_reality_rift)
