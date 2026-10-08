---
id: confrontos-antimage
heroi: Anti-Mage
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/antimage.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/skywrath_mage.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ursa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/medusa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/spirit_breaker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/warlock.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/pangolier.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/luna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/faceless_void.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
---

Critério de escolha dos 16 confrontos: os 6 com mais jogos de pro contra o Anti-Mage (Storm Spirit, Skywrath Mage, Ogre Magi, Rubick, Disruptor, Mars), os carries que mais aparecem contra ele em pro (Shadow Fiend, Ursa, Templar Assassin, Medusa), os extremos de vitória com amostra de 30+ jogos (Tiny e Spirit Breaker como pior matchup, Warlock e Pangolier como melhor) e os carries mais jogados em pro no patch mesmo sem lane em comum (Luna, Faceless Void), porque os dois competem pelo mesmo papel de "quem fecha o jogo" mesmo sem nunca trocar hit na lane.

## Contra Storm Spirit (storm_spirit)
- placar: 47 vitórias em 92 jogos de pro, 51,1% (OpenDota explorer, matchups de Anti-Mage, patches 7.40/7.41)
- por que importa: é o herói que mais enfrenta Anti-Mage em pro, de longe. Storm ataca o ponto fraco do Anti-Mage, que é a falta de escape antes do Blink nível 4, e os dois competem pela mesma janela de poder de meio de jogo
- janelas: até os 8-9 min Storm já tem bota e Bottle (mediana 1,4 min), enquanto o Anti-Mage só fecha a bota aos 6,6. Dos 10 aos 14 min o Anti-Mage corre risco: Storm já tem Kaya (13,7) pra sustentar Ball Lightning, e o Anti-Mage ainda não fechou a Battle Fury (14,1). Depois dos 14-15 min o farm do Anti-Mage dispara e Storm ainda está montando item de mana (Kaya and Sange aos 20,1, Witch Blade aos 22,3, Black King Bar só aos 26,1)
- o que ele faz com você: Ball Lightning é alvo de ponto, não de unit, então o Counterspell do Anti-Mage não reflete; o custo escala com a distância percorrida e não tem recarga fixa, o que deixa Storm perseguir o Anti-Mage em qualquer parte do mapa sem depender de ficar no alcance curto do Blink. Overload soma dano e slow no próximo ataque depois de qualquer feitiço, o que pune uma troca mal calculada
- o que você faz com ele: Mana Break queima o mesmo recurso que sustenta o Ball Lightning de Storm, então cada ataque conectado encarece a perseguição dele. Electric Vortex é unit target (constants_abilities.json), então o Counterspell ativo do Anti-Mage reflete de volta: em vez de puxar o Anti-Mage, puxa o próprio Storm
- itens que viram: Orchid/Bloodthorn no Anti-Mage silencia Storm antes dele iniciar o combo de Static Remnant mais Ball Lightning. Scepter no Anti-Mage (queima 20% da mana máxima no primeiro golpe após o Blink) é brutal contra o pool de mana que Storm precisa pra qualquer rotação
- como jogar: evite farmar exposto no meio do mapa entre os 10 e 14 min, é a janela em que Storm pode punir sem Battle Fury pronta. Depois da Battle Fury, jogue pra forçar troca: um Blink em cima dele queima mana e tira a ameaça de perseguição pelo resto do fight
- fonte: pro_dados/antimage.json; pro_dados/storm_spirit.json; constants_abilities.json (storm_spirit_ball_lightning, storm_spirit_electric_vortex, storm_spirit_overload, antimage_counterspell, antimage_mana_break); aghs_desc (Anti-Mage)

## Contra Skywrath Mage (skywrath_mage)
- placar: 38 vitórias em 81 jogos de pro, 46,9% (OpenDota explorer, matchups de Anti-Mage)
- por que importa: 2º herói que mais encara o Anti-Mage em pro. É o clássico suporte com dano mágico alto que ameaça matar o Anti-Mage sozinho antes do nível 8
- janelas: Skywrath não farma (lh10 de 7, contra 53 do Anti-Mage), então a ameaça dele é só kill threat desde o nível 6. A janela perigosa é antes do Blink 4/4 (nível 8); depois disso o Anti-Mage sobrevive ao engage e o jogo vira farm puro, porque Skywrath segue com gpm de 332 o jogo inteiro
- o que ele faz com você: Concussive Shot atinge o herói mais próximo automaticamente (comportamento No Target), então não precisa mirar e não pode ser refletido. Mystic Flare é dano em área concentrado que, sem Black King Bar, pode matar um Anti-Mage de level baixo pego sem Blink carregado
- o que você faz com ele: Ancient Seal é unit target (silencia e amplifica dano mágico), então o Counterspell reflete: o silêncio e o amplificador caem em cima do próprio Skywrath. Depois disso é só correr, porque o gpm de Skywrath nunca ameaça o farm do Anti-Mage
- itens que viram: Black King Bar no Anti-Mage cobre o Mystic Flare (skywrath_mage_mystic_flare não fura BKB, constants_abilities.json). O Aghanim's Shard de Skywrath (mediana 22,3 min, 3 Arcane Bolt em vez de 1) só aumenta o perigo se o Anti-Mage insistir em brigar sem spell immunity
- como jogar: não dê trade cedo sem saber onde está o Skywrath, ele só precisa de uma Mystic Flare limpa pra zerar sua vida antes do nível 8. Depois da Battle Fury, ignore ele e farme, o kill dele só existe numa janela que já passou
- fonte: pro_dados/antimage.json; pro_dados/skywrath_mage.json; constants_abilities.json (skywrath_mage_concussive_shot, skywrath_mage_ancient_seal, skywrath_mage_mystic_flare, antimage_counterspell); aghs_desc (Skywrath Mage)

## Contra Ogre Magi (ogre_magi)
- placar: 33 vitórias em 77 jogos de pro, 42,9% (OpenDota explorer, matchups de Anti-Mage)
- por que importa: 3º em volume de jogos contra o Anti-Mage em pro, e um dos poucos matchups de desvantagem com amostra grande. O Multicast dele fica mais perigoso quanto mais o jogo avança
- janelas: Ogre não compete em farm (gpm 315), a ameaça dele é o stun chain do Fireblast, que fica mais provável de multicastar conforme ele ganha força (cada ponto de Strength soma chance de Multicast). A janela crítica é qualquer fight sem Black King Bar: um Fireblast duplo tranca o Anti-Mage tempo suficiente pro time dele fechar a kill
- o que ele faz com você: Fireblast é unit target (dano e stun, recarga 11 a 8s conforme o nível). Com Multicast, pode sair 2 ou 3 vezes seguidas na mesma mana, prendendo o Anti-Mage mais tempo do que uma recarga normal sugere. O Aghanim's Shard de Ogre (Fire Shield) devolve uma bola de fogo em quem ataca o aliado protegido, o que pune o próprio Mana Break se o Anti-Mage bater no alvo errado
- o que você faz com ele: Fireblast sendo unit target, o Counterspell reflete e o próprio Ogre toma o stun. Mana Break esvazia um pool de mana pequeno (Fireblast custa de 70 a 115), então repetir o combo fica caro rápido
- itens que viram: Black King Bar é praticamente obrigatório assim que Ogre tem 2+ pontos em Fireblast com chance real de Multicast, porque aí um só feitiço pode travar o Anti-Mage 2 ou 3 vezes seguidas, equivalente a enfrentar vários disables ao mesmo tempo. O Aghanim's Scepter de Ogre (Unrefined Fireblast, dano e stun por 35% da mana atual, pode se auto-castar) vira ele mesmo numa ameaça de iniciação mais barata
- como jogar: não entre em troca prolongada sem BKB depois que Ogre tiver Multicast relevante (nível 15+ de Strength combinado). Antes disso, o Counterspell reflete o Fireblast e vira o jogo a seu favor
- fonte: pro_dados/antimage.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_multicast, antimage_counterspell); aghs_desc (Ogre Magi)

## Contra Rubick (rubick)
- placar: 37 vitórias em 75 jogos de pro, 49,3% (OpenDota explorer, matchups de Anti-Mage)
- por que importa: 4º em volume de jogos contra o Anti-Mage em pro. Spell Steal rouba o que o Anti-Mage acabou de castar, o que muda a forma como você usa Blink e Mana Void perto dele
- janelas: Rubick não ameaça farm (gpm 374), o risco é pontual: o combo Fade Bolt mais Telekinesis trava qualquer um antes de uma luta. Depois que ele fecha o Aghanim's Scepter (mediana 27,4 min, 2 cargas de Spell Steal com versão scepter do feitiço roubado), o risco de um roubo valioso sobe
- o que ele faz com você: Fade Bolt e Telekinesis são unit target. Combinados, atrasam uma fuga ou abrem uma kill em cima do Anti-Mage perto do time dele. Spell Steal pega o último feitiço castado: se o Anti-Mage usar Blink ou Mana Void perto de Rubick sem necessidade, ele pode roubar e devolver
- o que você faz com ele: como Fade Bolt e Telekinesis são unit target, o Counterspell reflete os dois, o que significa que o próprio Rubick toma a redução de dano e vai pro alto em vez do Anti-Mage. Evitar castar Mana Void ou Blink na cara de Rubick sem necessidade nega o Spell Steal
- itens que viram: depois do Scepter de Rubick, ele consegue 2 roubos e em versão upgradada, o que pune ainda mais um Mana Void gastado à toa perto dele. Black King Bar no Anti-Mage não impede o roubo (Spell Steal lê o último cast, não interage com imunidade a feitiço), então a defesa real é timing, não item
- como jogar: guarde o Counterspell ativo pra quando Rubick usar Fade Bolt ou Telekinesis, o retorno costuma valer mais que a economia de mana. Não desperdice Mana Void perto dele fora de uma kill garantida
- fonte: pro_dados/antimage.json; pro_dados/rubick.json; constants_abilities.json (rubick_fade_bolt, rubick_telekinesis, rubick_spell_steal, antimage_counterspell); aghs_desc (Rubick)

## Contra Disruptor (disruptor)
- placar: 41 vitórias em 70 jogos de pro, 58,6% (OpenDota explorer, matchups de Anti-Mage)
- por que importa: 5º em volume de jogos contra o Anti-Mage em pro, e também o melhor saldo do Anti-Mage entre os 6 mais jogados. Static Storm silencia mas não para o ataque básico, que é o que sustenta o Mana Break
- janelas: Disruptor é suporte puro (gpm 279, lh10 de 4), então não existe janela de farm pra disputar, só a ameaça pontual de Glimpse cancelando um engage e Static Storm silenciando um combo de feitiço
- o que ele faz com você: Glimpse (unit target) teleporta o Anti-Mage pra onde ele estava 4s atrás, cancelando um Blink de entrada mal calculado. Static Storm silencia a área e sobe o dano ao longo da duração, mas não impede ataques básicos, então o DPS de Mana Break continua passando
- o que você faz com ele: Glimpse e Thunder Strike são unit target, então o Counterspell reflete os dois, mandando Disruptor de volta no tempo em vez do Anti-Mage. Como Static Storm não trava ataque, o Anti-Mage segue batendo (e queimando mana) mesmo dentro da nuvem
- itens que viram: como o silêncio de Disruptor não para o ataque básico, não vale correr pra Black King Bar só por causa dele, prioridade continua Manta e Butterfly. Scepter no Anti-Mage ainda garante o burn de 20% de mana máxima depois do Blink, que nocauteia o pool pequeno de Disruptor
- como jogar: não cancele o seu próprio engage com medo de Glimpse, o Counterspell resolve isso direto; siga comprando o build padrão de farm, porque esse é um dos melhores saldos do Anti-Mage entre os matchups de alto volume
- fonte: pro_dados/antimage.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_glimpse, disruptor_static_storm, disruptor_thunder_strike, antimage_counterspell)

## Contra Mars (mars)
- placar: 34 vitórias em 66 jogos de pro, 51,5% (OpenDota explorer, matchups de Anti-Mage)
- por que importa: 6º em volume de jogos contra o Anti-Mage em pro. É o único dos 6 principais com um stun de skillshot que o Counterspell não reflete, o que muda a forma de jogar contra ele
- janelas: Mars farma razoável pra um offlaner/suporte (gpm 487, lh10 de 49), então ele não é só ameaça de disable, também disputa espaço de mapa. O Blink dele (mediana 15,2 min) chega perto da Battle Fury do Anti-Mage (14,1), então os 14-16 min são a janela de maior risco de iniciação
- o que ele faz com você: Spear of Mars é alvo de ponto (constants_abilities.json), não unit target, então o Counterspell não reflete essa. Se acertar e empalar o Anti-Mage contra uma parede atrás dele, o stun estende. Arena of Blood cria uma zona que bloqueia ataque e movimento de quem está fora, prendendo o Anti-Mage dentro da briga do time de Mars
- o que você faz com ele: Mana Break pune o pool de mana baixo de Mars (Spear custa de 100 a 130, Arena de 150 a 250), então ele fica sem rotação de feitiço rápido depois de 2-3 trocas de ataque. Blink continua sendo a saída mais rápida se usado antes do Spear carregar
- itens que viram: Black King Bar cobre o stun do Spear quando ele acerta (mars_spear não fura BKB, constants_abilities.json), mas não ajuda contra ficar preso dentro da Arena, que bloqueia movimento físico, não é feitiço. Aghanim's Shard de Mars (mediana 21,5 min) adiciona um segundo alvo empalado e um rastro de fogo, então o risco de pegar dois heróis no mesmo Spear sobe depois desse ponto
- como jogar: fique de olho no posicionamento antes do nível 6 de Mars, a Spear é skillshot e dá pra desviar lendo o cast. Depois que ele tiver Arena, não force teamfight em corredor fechado onde a zona cerca o grupo inteiro
- fonte: pro_dados/antimage.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_arena_of_blood, antimage_mana_break); aghs_desc (Mars)

## Contra Shadow Fiend (nevermore)
- placar: 30 vitórias em 64 jogos de pro, 46,9% (OpenDota explorer, matchups de Anti-Mage)
- por que importa: o carry/mid que mais aparece contra o Anti-Mage em pro, clássico duelo de hiper carry contra hiper carry disputando farm
- janelas: até o nível 6-7, Shadow Fiend é a ameaça: Requiem of Souls (dano de 80 a 160 na base, mais bônus por alma, até 20 almas) pode zerar um Anti-Mage pego sem Blink carregado. O Anti-Mage não tem burst nenhum antes da Battle Fury (14,1), enquanto Shadow Fiend segue um build de crítico mais lento (Demon Edge 27,2, Greater Crit 28,3)
- o que ele faz com você: Shadowraze bate em 3 direções e escala com almas de Necromastery, empurrando o Anti-Mage pra fora da lane de farm. Requiem é dano em área sem alvo fixo (No Target), então o Counterspell não reflete, só a resistência passiva de Spell Shield ajuda
- o que você faz com ele: Mana Break não tem o que queimar de especial aqui, já que os nukes de Shadow Fiend custam pouco; o jogo se resolve em farm puro depois dos 15 min, onde o Anti-Mage historicamente sai na frente se não morrer antes
- itens que viram: Black King Bar cobre o Requiem e o Shadowraze como qualquer dano mágico (nevermore_requiem e nevermore_shadowraze1 não furam BKB, constants_abilities.json). Linken's Sphere não ajuda aqui, porque nenhum dos nukes principais de Shadow Fiend é unit target
- como jogar: jogue defensivo contra gank até o nível 8, é a janela em que o Requiem mata sem resposta. Depois da Battle Fury, dispute farm direto, o ritmo joga a seu favor
- fonte: pro_dados/antimage.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_requiem, nevermore_shadowraze1, nevermore_necromastery)

## Contra Ursa (ursa)
- placar: 24 vitórias em 44 jogos de pro, 54,5% (OpenDota explorer, matchups de Anti-Mage)
- por que importa: maior volume de confronto carry contra carry do Anti-Mage em pro depois de Shadow Fiend. Os dois competem pelo título de melhor duelista 1x1 do patch, mesmo raramente dividindo lane
- janelas: as Battle Fury saem quase juntas (Ursa 13,7, Anti-Mage 14,1), então os 14-20 min são o teste real de quem farma mais rápido. Ursa tem Enrage de graça (custo de mana 0) desde cedo, o que dá imunidade a slow/dispel em qualquer fase do jogo sem depender de item
- o que ele faz com você: Fury Swipes soma dano a cada ataque consecutivo no mesmo alvo, então uma troca prolongada escala contra quem está sendo focado. Enrage dá redução de dano, resistência a status e dispel forte de graça, o que remove qualquer slow ou o mini-stun do Mana Void no meio da troca
- o que você faz com ele: Mana Break ainda pune o gasto de mana de Overpower e Earthshock (95 de custo), mesmo sem afetar o Enrage, que não usa mana. Blink continua sendo a única saída limpa de um 1x1 que está indo mal, já que o Anti-Mage não tem redução de dano própria
- itens que viram: Butterfly pesa mais que Skadi nesse confronto especificamente, porque Ursa não depende de lifesteal ou regen pra vencer a troca, e 35% de evasão nega uma fatia real do DPS de auto-ataque dele, que não tem true strike de base. O Aghanim's Shard de Ursa (Earthshock aplica 3 Fury Swipes de uma vez) acelera o stack de dano se ele pegar você no Earthshock primeiro
- como jogar: não entre no 1x1 puro se Ursa já tiver 3+ stacks de Fury Swipes em você, é melhor resetar com Blink do que continuar a troca. Prioridade de farm é a mesma, só que aqui vale fechar Butterfly antes do normal se o confronto direto for provável
- fonte: pro_dados/antimage.json; pro_dados/ursa.json; constants_abilities.json (ursa_fury_swipes, ursa_enrage, ursa_earthshock, antimage_mana_break); aghs_desc (Ursa); items.json (butterfly, skadi)

## Contra Templar Assassin (templar_assassin)
- placar: 21 vitórias em 44 jogos de pro, 47,7% (OpenDota explorer, matchups de Anti-Mage)
- por que importa: 3º carry mais jogado contra o Anti-Mage em pro. Os dois disputam farm e, diferente de Ursa, Templar Assassin vira ataque à distância depois do item certo
- janelas: até os 14 min é corrida de farm parelha (Desolator de TA aos 14,3, Battle Fury do Anti-Mage aos 14,1). A virada acontece com o Dragon Lance dela (14,2 min), que transforma TA numa atiradora à distância bem na mesma janela em que o Anti-Mage ainda não tem Manta pra fechar distância rápido (20,9)
- o que ele faz com você: Desolator reduz a armadura do alvo, somando dano físico de toda a equipe em cima do Anti-Mage. Refraction dá instâncias extras de dano que, combinadas com alcance de Dragon Lance, deixam ela kitar um Anti-Mage melee sem Blink carregado. Meld invisível pune quem anda sem detecção pela lane
- o que você faz com ele: Blink fecha a distância que o Dragon Lance abriu instantaneamente. Mana Break queima o pool de mana dela, e cada Refraction custa 95, carregar o combo fica caro depois de 2-3 castadas seguidas
- itens que viram: Sentry/dust resolve o Meld, que é a abertura mais comum dela contra um Anti-Mage parado na lane. Butterfly segue valendo quando ela já tem crítico (Demon Edge 26,9, Greater Crit 26,5), porque reduz o impacto dos hits de crítico tanto quanto os normais
- como jogar: não force troca à distância depois do Dragon Lance dela sem Blink carregado, você perde o kite. Depois de fechar Battle Fury e Manta, o confronto corpo a corpo volta a favorecer o Anti-Mage
- fonte: pro_dados/antimage.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_refraction, templar_assassin_meld, antimage_mana_break)

## Contra Medusa (medusa)
- placar: 18 vitórias em 42 jogos de pro, 42,9% (OpenDota explorer, matchups de Anti-Mage)
- por que importa: é o par que melhor ilustra "dois carries que não trocam hit na lane mas decidem o jogo igual": Medusa raramente divide rota com o Anti-Mage, mas os dois competem pelo mesmo papel de hiper carry que fecha o jogo sozinho, e esse é um dos piores saldos do Anti-Mage com amostra de 30+ jogos
- janelas: a Manta de Medusa sai bem antes da do Anti-Mage (15,0 contra 20,9), o que dá a ela uma janela de mobilidade e dispel 5-6 min mais cedo. O Butterfly dela também chega antes (22,2 contra 27,7 do Anti-Mage), então até os 25 min Medusa costuma estar um passo à frente em item, mesmo com gpm levemente menor (684 dela contra 643 dele, amostra pequena de Medusa, só 503 jogos)
- o que ele faz com você: Mystic Snake pula de herói em herói, sobe de dano a cada salto e devolve mana pra Medusa, então numa troca ela se cura de recurso enquanto machuca. Stone Gaze pune quem fica encarando ela de perto por 2s acumulados, o que inclui qualquer Anti-Mage parado batendo
- o que você faz com ele: Mana Break ataca o ponto fraco real do kit dela, porque Mana Shield (passiva que absorve 98% do dano recebido usando mana) depende do mesmo pool que o Mana Break queima. Drenar a mana de Medusa não é só cortar feitiço, é estourar o escudo que a mantém viva. Mana Void fica maior ainda contra um pool já drenado
- itens que viram: quem fecha Manta primeiro domina a pequena janela de skirmish entre os 15 e 20 min, e aqui é ela. Orchid/Bloodthorn no Anti-Mage silencia Medusa e corta o ciclo de recarga de mana do Mystic Snake justamente quando ela mais precisa castar
- como jogar: evite trocar olhar/auto-ataque longo sem Blink de saída pronto, por causa do Stone Gaze. Gaste Mana Break antes da troca grande, não durante, pra já chegar com o escudo dela mais fraco. Priorize abater ela antes do Skadi (28,4) fechar, depois disso a troca de dano vira a favor dela
- fonte: pro_dados/antimage.json; pro_dados/medusa.json; constants_abilities.json (medusa_mana_shield, medusa_mystic_snake, medusa_stone_gaze, antimage_mana_break)

## Contra Tiny (tiny)
- placar: 11 vitórias em 37 jogos de pro, 29,7% (OpenDota explorer, matchups de Anti-Mage), pior saldo do Anti-Mage com amostra de 30+ jogos
- por que importa: maior desvantagem do Anti-Mage entre os matchups com amostra relevante. O combo Avalanche mais Toss é um stun-lock que o Anti-Mage não tem como quebrar antes do nível 8
- janelas: o perigo concentra nos primeiros 15-20 min, antes do Blink 4/4 (nível 8, recarga de 6s) do Anti-Mage. Com Grow nível 3, o combo Toss sozinho já causa 660 de dano no nível 4 (360 do Toss mais 300 de bônus do Grow, constants_abilities.json), o suficiente pra ameaçar um Anti-Mage de lane sem sustain
- o que ele faz com você: Avalanche (chuva de pedras com dano e stun em área) seguido de Toss (agarra o alvo mais próximo e arremessa) é um combo de stun quase garantido contra quem não tem imunidade a feitiço. Sem Blink carregado, o Anti-Mage simplesmente não tem resposta de mobilidade pra esse combo
- o que você faz com ele: Toss é unit target mais área, então o Counterspell reflete, jogando o próprio Tiny em vez do Anti-Mage, se o timing permitir. Fora isso, a resposta real é posicionamento: ficar fora do raio de 300 do Toss até ter Blink nível 4 ou Black King Bar
- itens que viram: Black King Bar é quase obrigatório antes de disputar qualquer fight contra um Tiny com Avalanche e Toss prontos, o combo é mágico e cai inteiro pra fora da luta com spell immunity. Linken's Sphere também bloqueia o Toss especificamente, por ser a primeira instância de unit target que bate no Anti-Mage
- como jogar: farme longe do alcance de combo até o nível 8. Depois do Blink 4/4 e com BKB ou Linken's fechado, o 1x1 vira a seu favor: Mana Break esvazia o pool pequeno de Tiny e ele não sustenta uma segunda rodada de combo
- fonte: pro_dados/antimage.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_grow, antimage_counterspell)

## Contra Spirit Breaker (spirit_breaker)
- placar: 10 vitórias em 32 jogos de pro, 31,2% (OpenDota explorer, matchups de Anti-Mage), 2º pior saldo do Anti-Mage com amostra de 30+ jogos
- por que importa: 2º pior matchup do Anti-Mage com amostra relevante. Diferente dos outros contras, a ameaça não é só na lane, é o mapa inteiro
- janelas: a ameaça de Spirit Breaker não tem "janela" de farm, é constante do nível 6 em diante: Charge of Darkness trava no Anti-Mage de qualquer ponto do mapa e acelera até ele, então mesmo um Anti-Mage já farmado pode ser pego sozinho numa rota isolada
- o que ele faz com você: Charge of Darkness persegue sem precisar de visão contínua e ignora a distância normal de gank. Greater Bash tem chance de atordoar e empurrar a cada ataque, inclusive no impacto do Charge, então o combo de chegada já vem com stun embutido
- o que você faz com ele: Blink é a resposta mais direta depois que o Charge acerta, porque a resistência a status de Spirit Breaker não impede o Anti-Mage de usar item; não adianta tentar correr em linha reta, ele acelera com a distância. Mana Break ainda pune o uso de Charge (90 a 120 de custo) e Nether Strike (125 a 175)
- itens que viram: Greater Bash é proc de ataque, não feitiço, então Black King Bar não bloqueia, a defesa real é observador perto da rota de farm e atenção ao minimapa, não item. TP de volta na primeira visão do Charge evita o pior cenário
- como jogar: compre Observer Ward cobrindo sua rota de farm cedo contra Spirit Breaker, porque ele não tem flash farm nenhum, o risco dele é 100% o gank global. Ao ver o Charge, TP, não corra
- fonte: pro_dados/antimage.json; pro_dados/spirit_breaker.json; constants_abilities.json (spirit_breaker_charge_of_darkness, spirit_breaker_greater_bash, antimage_mana_break)

## Contra Warlock (warlock)
- placar: 29 vitórias em 46 jogos de pro, 63,0% (OpenDota explorer, matchups de Anti-Mage), melhor saldo do Anti-Mage com amostra de 30+ jogos entre os suportes
- por que importa: um dos melhores saldos do Anti-Mage no patch com amostra relevante, mostra o que acontece quando o inimigo não tem como escalar dano contra um carry que farma sem parar
- janelas: Warlock é suporte puro sem farm pra disputar (gpm 329, lh10 de 9), a ameaça dele é pontual e rara: Chaotic Offering tem recarga fixa de 165s, então fora dessa janela específica ele não ameaça nada sozinho
- o que ele faz com você: Chaotic Offering atordoa e invoca Golems (2 com Scepter), uma iniciação forte mas que só acontece uma vez a cada 165s. Fatal Bonds liga o dano entre alvos, o que machuca mais em teamfight de 5 que em 1x1
- o que você faz com ele: Mana Break pune um pool de mana pequeno e feitiços caros (Fatal Bonds custa de 120 a 150), então Warlock fica sem recurso rápido numa troca prolongada. Depois de Manta/Butterfly, o Anti-Mage atravessa o time dele, porque não existe dano sustentado nem segundo disable no kit
- itens que viram: Black King Bar não impede o stun de Chaotic Offering, que fura imunidade a feitiço (warlock_rain_of_chaos, constants_abilities.json), mas segue cobrindo o resto do kit mágico de Warlock. Ainda assim, BKB não precisa ser prioridade aqui, porque o resto do kit dele não ameaça
- como jogar: jogue o seu build padrão de farm, esse confronto se resolve pelo resto do draft, não pelo Warlock sozinho. Só tome cuidado com a janela de Chaotic Offering quando perto de Golems
- fonte: pro_dados/antimage.json; pro_dados/warlock.json; constants_abilities.json (warlock_fatal_bonds, warlock_rain_of_chaos, antimage_mana_break); aghs_desc (Warlock)

## Contra Pangolier (pangolier)
- placar: 22 vitórias em 35 jogos de pro, 62,9% (OpenDota explorer, matchups de Anti-Mage)
- por que importa: outro dos melhores saldos do Anti-Mage com amostra de 30+. Pangolier disputa farm mas o dano dele depende de itens de amplificação mágica, que não afetam um kit majoritariamente físico como o do Anti-Mage
- janelas: os itens de Pangolier (Diffusal 12,4, Mage Slayer 12,3) são de suporte/utilidade, enquanto a Battle Fury do Anti-Mage (14,1) já é farm puro. O Scepter dele só fecha aos 24,9, depois que o Anti-Mage normalmente já tem Manta (20,9) e está à frente em ouro
- o que ele faz com você: Rolling Thunder transforma Pangolier numa bola com 80% de resistência mágica que rola e bate em quem estiver no caminho, empurrando e atordoando por 1,2s no impacto, o que pode pegar um Anti-Mage de vida baixa de surpresa no meio da rota. Swashbuckle dá um dash com golpes rápidos que corta HP cedo no jogo
- o que você faz com ele: nem Swashbuckle nem Shield Crash são unit target, então não tem o que refletir com Counterspell, a resposta é ler a linha do dash e desviar. Mana Break não pesa muito aqui porque Pangolier já não depende de mana pra sustentar dano físico depois do meio de jogo
- itens que viram: o Diffusal de Pangolier queima a mana do Anti-Mage, mas isso importa pouco depois do nível 8, já que o DPS do Mana Break não depende de gastar mana própria. Butterfly segue como resposta padrão pro lado físico do kit dele
- como jogar: evite ficar preso em corredor fechado contra um Pangolier com Rolling Thunder pronto. Fora isso, o confronto se resolve pela corrida de farm, que historicamente favorece bastante o Anti-Mage
- fonte: pro_dados/antimage.json; pro_dados/pangolier.json; constants_abilities.json (pangolier_gyroshell, pangolier_swashbuckle, antimage_mana_break); aghs_desc (Pangolier)

## Contra Luna (luna)
- placar: 14 vitórias em 31 jogos de pro, 45,2% (OpenDota explorer, matchups de Anti-Mage), amostra no limite de 30 jogos
- por que importa: um dos carries mais jogados em pro no patch (1.970 jogos registrados), mesmo raramente dividindo lane com o Anti-Mage. Os dois competem pelo mesmo papel de "quem farma mais rápido e fecha o jogo", o Moon Glaive dela ataca vários alvos de uma vez desde o nível 1, então na teoria ela farma onda e jungle mais rápido que o Anti-Mage nos primeiros minutos
- janelas: a Manta de Luna (17,2) chega antes da do Anti-Mage (20,9), mas o Butterfly dele chega primeiro depois (27,7 contra 26,1 dela, bem próximos). O gpm dela no patch (695) é o mais alto entre os carries levantados, até acima do Anti-Mage (643), o que mostra que ela disputa farm de verdade mesmo sem lane em comum
- o que ele faz com você: Eclipse (ultimate) chove feixes de dano mágico, mais forte à noite, e pode queimar metade da vida de um Anti-Mage sem resistência mágica. Lucent Beam dá um stun curto que abre uma kill se o Anti-Mage já estiver baixo
- o que você faz com ele: Mana Break reduz a frequência de Eclipse, que custa de 150 a 250 de mana, cortando recast em sequência. Depois do nível 8, o Anti-Mage tem mais ferramenta de iniciação/fuga que Luna, que não tem disable fora do Lucent Beam
- itens que viram: Black King Bar cobre o Eclipse como qualquer burst mágico de área. Butterfly responde ao lado físico do kit dela (Moon Glaive, crítico) do mesmo jeito que responde a qualquer carry de auto-ataque
- como jogar: dispute os camps de jungle cedo, o Moon Glaive dela farma onda e creep ao mesmo tempo, então ignorar isso cede vantagem de ouro de graça. Depois da Battle Fury, a vantagem de farm vira pro Anti-Mage e ela passa a ser quem evita a troca
- fonte: pro_dados/antimage.json; pro_dados/luna.json; constants_abilities.json (luna_eclipse, luna_lucent_beam, antimage_mana_break)

## Contra Faceless Void (faceless_void)
- placar: 15 vitórias em 31 jogos de pro, 48,4% (OpenDota explorer, matchups de Anti-Mage), amostra no limite de 30 jogos
- por que importa: o clássico "quem vence o late game" sem precisar de lane em comum. Chronosphere é o único feitiço do jogo que anula o Blink do Anti-Mage por completo, então esse confronto é mais sobre teamfight que sobre farm
- janelas: as Battle Fury saem perto uma da outra (Faceless Void 15,3, Anti-Mage 14,1), então a corrida de farm é parelha até os 20 min. A partir do nível 6 de Void, toda luta precisa considerar a janela de Chronosphere (recarga de 155 a 135s), que zera qualquer vantagem de item que o Anti-Mage tenha acumulado
- o que ele faz com você: Chronosphere trava todo mundo dentro da esfera, inclusive o Anti-Mage; mesmo com Blink pronto, ele não sai, porque fica congelado como qualquer outra unidade. Time Walk dá a Void um reposicionamento rápido parecido com o Blink do Anti-Mage, o que iguala a mobilidade dos dois fora do ultimate
- o que você faz com ele: Mana Break pune o Time Walk, que custa 40 de mana com recarga baixa no nível 4, e corta o pool que sustenta um Chronosphere de custo mais alto (até 275). Fora da esfera, o 1x1 cru favorece o Anti-Mage, porque Void não tem dano sustentado fora de Time Lock e dos ataques básicos
- itens que viram: Black King Bar não tira ninguém de dentro do Chronosphere, mas quem está com spell immunity ativa continua podendo se mover e atacar dentro da esfera, só não sai dela, então BKB ainda vale pra não ficar completamente parado lá dentro. Fora isso, não existe item que anule a prisão, só não se agrupar quando Void estiver por perto
- como jogar: espalhe a posição em teamfight pra limitar quantos heróis um Chronosphere pega de uma vez. Com BKB ativo dentro da esfera, use o tempo pra limpar quem também ficou preso, em vez de tentar sair
- fonte: pro_dados/antimage.json; pro_dados/faceless_void.json; constants_abilities.json (faceless_void_chronosphere, faceless_void_time_walk, antimage_mana_break); aghs_desc (Faceless Void)
