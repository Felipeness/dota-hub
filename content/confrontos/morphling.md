---
id: confrontos-morphling
heroi: Morphling
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/morphling.json
- dota-hub-conteudo-novo/pro_dados/alchemist.json
- dota-hub-conteudo-novo/pro_dados/antimage.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/disruptor.json
- dota-hub-conteudo-novo/pro_dados/mars.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- dota-hub-conteudo-novo/pro_dados/ursa.json
- dota-hub-conteudo-novo/pro_dados/weaver.json
- dota-hub-conteudo-novo/pro_dados/medusa.json
- dota-hub-conteudo-novo/pro_dados/life_stealer.json
- dota-hub-conteudo-novo/pro_dados/luna.json
- dota-hub-conteudo-novo/pro_dados/pudge.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Contra Alchemist (alchemist)
- placar: Morphling venceu 9 de 31 partidas pro (29,0%). É o pior confronto de toda a base de Morphling, mesmo com a amostra no limite dos 30 jogos.
- por que importa: pedido direto do caso de uso, dois hard carries que quase nunca dividem lane (Alchemist joga pra jungle sozinho, Morphling pega lane de carry), mas competem pelo mesmo papel de right-click de late game. É também a pior taxa de vitória do Morphling contra qualquer herói na base.
- janelas: Alchemist fecha Soul Ring aos 6:00 (mediana pro, pro_dados/alchemist.json) e chega ao nível 6 (Chemical Rage) por volta do minuto 8 (partidas pro 7.40-7.41, OpenDota). Você só fecha Vladmir's aos 10:42 (pro_dados/morphling.json) e ainda está puxando camp sozinho. O Radiance dele fecha aos 13:54, bem antes do seu Manta (18:24): nessa janela o GPM dele na mediana dos pros (768, pro_dados/alchemist.json) já passou o seu (614, pro_dados/morphling.json). Dos 19:30 (Corrosive Weaponry 4/4) aos 23:00 (Blink + BKB dele) ele pode punir seu farm sozinho com Unstable Concoction antes de você ter Butterfly (25:48) ou BKB (30:54) pra responder.
- o que ele faz com você: Unstable Concoction carrega até 5s e estoura até 360 de dano em raio 250 com até 3,2s de stun (bkbpierce: No, constants_abilities.json); Corrosive Weaponry empilha até 16 vezes no auto-ataque dele e reduz seu dano base de ataque em até 4 por stack (bkbpierce: No também); Acid Spray reduz sua armadura em área enquanto você fica dentro.
- o que você faz com ele: Waveform fica invulnerável durante o trajeto, então sair da área antes da detonação do Unstable Concoction (5,5s depois do lançamento) anula o dano; Adaptive Strike é mágico e ignora a armadura dele; Butterfly dá 35% de evasão contra os auto-ataques dele, mas não ajuda contra Acid Spray nem Unstable Concoction porque nenhum dos dois é ataque básico.
- itens que viram: Black King Bar bloqueia o stun do Unstable Concoction e a aplicação do Corrosive Weaponry, mas precisa estar ligado antes do cast, não depois; Manta pra tentar igualar a corrida de farm, já que ele sai na frente em GPM.
- como jogar: não dependa de vencer a corrida de farm sozinho contra ele, puxe pra teamfight de time antes dele fechar o Radiance (13:54); se ele isolar você antes do seu BKB, jogue pra sobreviver com Waveform, não pra trocar dano parado.
- fonte: pro_dados/alchemist.json; pro_dados/morphling.json; constants_abilities.json (alchemist_unstable_concoction, alchemist_corrosive_weaponry, alchemist_acid_spray, morphling_waveform, morphling_adaptive_strike_agi); partidas pro 7.40-7.41 (OpenDota).

## Contra Anti-Mage (antimage)
- placar: Morphling venceu 25 de 42 partidas pro (59,5%). Vantagem clara pro Morphling, apesar da fama de "contador clássico".
- por que importa: o duelo de hard carry mais citado do jogo, os dois dependem de farm rápido e de mana pra existir, mesmo quase nunca dividindo lane (AM costuma farmar sozinho, Morphling vai de carry). Exemplo direto de "dois HC que não se cruzam" mas que importam um pro outro.
- janelas: AM fecha Battle Fury por volta dos 14,1 (pro_dados/antimage.json) e Manta aos 20,9. Seu Manta sai antes, aos 18:24, justamente o ponto em que o AM ainda não tem Manta pronto. Depois dos 20 min os dois ficam de Manta e o jogo vira farm paralelo, quem fecha Butterfly ou BKB primeiro dita o ritmo (seu BKB sai aos 30:54).
- o que ele faz com você: Mana Break queima de 25 a 40 de mana por acerto (até 4% da mana máxima) e converte metade disso em dano; como você gasta 115 de mana por Waveform e 10 por segundo de Attribute Shift, cada auto-ataque dele que acerta drena o recurso que te mantém trocando entre Força e Agilidade. Mana Void (ultimate) causa dano proporcional à mana que está faltando no seu pool: se você sair de um combo seco de mana, o Void dói muito mais.
- o que você faz com ele: Counterspell dele reflete feitiços de alvo único enquanto ativo (constants_abilities.json), então evite jogar Adaptive Strike nele com o Counterspell ligado, o feitiço volta pra você; Waveform, por não ter alvo, não é refletido. Blink dele tem alcance curto (875 a 1100) e nenhum controle: se você acertar o Adaptive Strike antes dele blinkar em cima de você, o stun (até 2,6s) segura o combo do seu time.
- itens que viram: Manta seu farma tão rápido quanto o Battle Fury dele; Butterfly dá evasão contra os auto-ataques físicos dele, que é justamente onde mora o Mana Break; Eye of Skadi corta a vida dele se ele sustentar com lifesteal.
- como jogar: evite gastar mana à toa perto dele, Waveform de poke sem necessidade vira Mana Void maior depois; force trocas curtas com Adaptive Strike fora do alcance do Counterspell reativo dele.
- fonte: pro_dados/antimage.json; pro_dados/morphling.json; constants_abilities.json (antimage_mana_break, antimage_mana_void, antimage_counterspell, antimage_blink, morphling_waveform, morphling_adaptive_strike_agi).

## Contra Jakiro (jakiro)
- placar: Morphling venceu 77 de 152 partidas pro (50,7%, equilibrado). É o oponente que mais aparece na base de confrontos do Morphling.
- por que importa: maior volume de jogos pro contra o Morphling de toda a base (152), mesmo Jakiro sendo suporte 5 puro que raramente disputa a lane de carry. Aparece em quase todo draft pelo controle de área.
- janelas: Jakiro sobe Arcane Boots aos 11,7 e fecha o nível 6 (Macropyre) perto dos 7 min (pro_dados/jakiro.json; constants_abilities.json). Você ainda está no ciclo de Morbid Mask (7:54) e Vladmir's (10:42) nessa hora, território dele pra zonear com Dual Breath. Depois do seu Manta (18:24) você limpa wave sem se expor tanto ao Macropyre.
- o que ele faz com você: Macropyre 3/3 causa até 200 de dano por segundo durante 10s de fogo parado no chão, não é dispellable e bloqueia seu BKB se o fogo já estiver ativo quando você ligar (bkbpierce: No, então precisa estar ligado antes do cast); Ice Path atordoa de 1,25 a 2s e também não sai com Manta (dispellable: Strong Dispels Only); Dual Breath soma slow com dano em cone, esse sim o Manta dispela (dispellable: Yes).
- o que você faz com ele: Waveform atravessa o Macropyre sem tomar dano porque você fica invulnerável durante o trajeto; Adaptive Strike (mágico, stun de até 2,6s) interrompe o cast do Ice Path se você acertar primeiro.
- itens que viram: Black King Bar bloqueia Macropyre e Ice Path, mas precisa estar ligado antes do cast de qualquer um dos dois; Manta dispela só o Dual Breath, não os outros dois.
- como jogar: não force limpeza de wave sozinho perto de arbustos antes do seu Manta, o combo Ice Path + Macropyre mata rápido quem fica parado; depois do Manta, use as imagens pra absorver o Dual Breath e limpe por cima.
- fonte: pro_dados/jakiro.json; pro_dados/morphling.json; constants_abilities.json (jakiro_macropyre, jakiro_ice_path, jakiro_dual_breath, morphling_waveform, morphling_adaptive_strike_agi).

## Contra Shadow Fiend (nevermore)
- placar: Morphling venceu 67 de 149 partidas pro (45,0%).
- por que importa: segundo maior volume de jogos da base (149) e também o herói mais jogado em pro de toda a base (3.990 jogos no pro_dados dele), mesmo indo de mid na maioria das vezes enquanto o Morphling vai de carry. Resume o "farm race" entre dois right-clickers puros.
- janelas: Shadow Fiend chega ao nível 6 por volta do minuto 7 (partidas pro 7.40-7.41, OpenDota) e Shadowraze 4/4 (280 de dano, cooldown de só 9s) logo depois; Mask of Madness aos 10:12 (mediana pro, pro_dados/nevermore.json) acelera o farm dele. Seu Morbid Mask (7:54) e Vladmir's (10:42) competem direto por essa mesma janela. O Daedalus dele fecha aos 28:18 (mediana pro, pro_dados/nevermore.json), bem antes do seu BKB (30:54): nessa janela o Requiem dele pode te executar se você estiver com vida baixa.
- o que ele faz com você: Shadowraze zonea seu farm sem precisar te ver, três direções possíveis, cooldown de só 9s; Requiem of Souls (até 3 ondas, cooldown de 120 a 100s) causa dano em área ao redor dele, reduz sua resistência mágica e velocidade, e executa quem está com vida baixa sem precisar de visão direta.
- o que você faz com ele: Adaptive Strike (stun de até 2,6s) interrompe o canal dele antes do Requiem sair; Waveform escapa das três direções do Shadowraze porque você é invulnerável durante o trajeto.
- itens que viram: Black King Bar bloqueia Requiem e Shadowraze (os dois mágicos, bkbpierce: No); Butterfly dá evasão contra o auto-ataque dele quando ele não está com Frenzy ativo.
- como jogar: não fique parado nas linhas das três direções do Shadowraze antes do seu BKB; ele costuma fechar o Daedalus (28:18 nos pros) antes do seu BKB (30:54), então evite trocar dano cru nessa janela e espere seu BKB pra iniciar com segurança.
- fonte: pro_dados/nevermore.json; pro_dados/morphling.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, morphling_adaptive_strike_agi, morphling_waveform); partidas pro 7.40-7.41 (OpenDota).

## Contra Disruptor (disruptor)
- placar: Morphling venceu 69 de 149 partidas pro (46,3%).
- por que importa: empatado como segundo maior volume de jogos da base (149), suporte de controle que aparece em quase todo draft pela Static Storm, mesmo não disputando lane com o Morphling na maioria dos jogos.
- janelas: Disruptor sobe Arcane Boots aos 11,4 e fecha o nível 6 (Static Storm) por volta dos 7-8 min (pro_dados/disruptor.json). Antes do seu Manta (18:24), Glimpse (teleporta você de volta pra onde estava 4s atrás) pode te puxar pra dentro de uma luta ruim ou matar instantaneamente uma imagem do Manta já criada; depois do seu Manta, qualquer imagem perto dele vira alvo fácil do Glimpse.
- o que ele faz com você: Static Storm silencia e causa dano crescente em área por 6s, cooldown de 100 a 70s, não é dispellable (constants_abilities.json) e desliga tanto o Waveform quanto o Adaptive Strike enquanto durar; Glimpse te puxa pra posição de 4s atrás, mata imagem do Manta na hora e ainda causa dano proporcional à distância puxada.
- o que você faz com ele: Waveform tem alcance de até 1.175 com o talento de nível 15 (925 sem ele, constants_abilities.json), suficiente pra forçar ele a gastar Kinetic Field antes de chegar perto; Adaptive Strike interrompe o cast do Static Storm se você acertar antes dele soltar.
- itens que viram: Black King Bar precisa estar ligado ANTES do Static Storm pousar, porque depois de ativo o silêncio não é removível nem pelo BKB; Manta não ajuda contra o silêncio (Static Storm não é dispellable), mas o Glimpse mata imagem de graça se ele tiver mira.
- como jogar: não entre na área da Static Storm sem BKB já ligado; fique de olho no Kinetic Field antes de iniciar, ele prende seu grupo pro combo do time dele.
- fonte: pro_dados/disruptor.json; pro_dados/morphling.json; constants_abilities.json (disruptor_static_storm, disruptor_glimpse, disruptor_kinetic_field, morphling_waveform, morphling_adaptive_strike_agi).

## Contra Mars (mars)
- placar: Morphling venceu 85 de 147 partidas pro (57,8%). Vantagem clara pro Morphling.
- por que importa: quarto maior volume de jogos da base (147), offlaner de iniciação em área que aparece em quase todo draft, mesmo raramente dividindo a lane de carry.
- janelas: Mars sobe Phase Boots aos 8,5 e Blink Dagger aos 15,2 (pro_dados/mars.json). Antes do Blink dele, ele não tem como fechar distância rápido contra o seu farm; depois dos 15 min, ele pode iniciar com Spear direto. Seu Manta (18:24) chega 3 min depois do Blink dele. O Aghanim's Shard dele (21,5, pro_dados/mars.json) adiciona um segundo alvo ao Spear, perigoso em teamfight.
- o que ele faz com você: Spear of Mars empala e empurra pra trás até você bater em algo sólido, dano de até 325 no nível 4, cooldown de 14 a 11s; Arena of Blood (ultimate) prende todo mundo dentro, os guerreiros da arena atacam quem está perto da borda.
- o que você faz com ele: Waveform escapa do empurrão do Spear porque a invulnerabilidade dura o trajeto inteiro; Adaptive Strike (mágico) ignora o Bulwark dele, que só reduz dano físico de frente e de lado.
- itens que viram: Black King Bar bloqueia Spear e Arena of Blood (os dois mágicos, bkbpierce: No); Butterfly não ajuda contra nenhum dos dois porque nenhum é auto-ataque.
- como jogar: não fique de costas pra parede ou árvore perto dele antes do seu BKB, o Spear empurra até bater em algo sólido e isso aumenta o dano; depois do BKB, ignore a Arena e force através dela se precisar.
- fonte: pro_dados/mars.json; pro_dados/morphling.json; constants_abilities.json (mars_spear, mars_arena_of_blood, mars_bulwark, morphling_waveform, morphling_adaptive_strike_agi); aghs_desc (Mars).

## Contra Tusk (tusk)
- placar: Morphling venceu 74 de 145 partidas pro (51,0%, equilibrado).
- por que importa: quinto maior volume de jogos da base (145), ganker que gira o mapa cedo e ameaça o Morphling mesmo sem dividir lane na maioria dos jogos.
- janelas: Tusk sobe Blink Dagger por volta dos 19,0 (pro_dados/tusk.json); antes disso ele ganka a pé com Ice Shards + Snowball. Você ainda está no ciclo de farm (Vladmir's 10:42, Yasha 14:36) nessa fase, alvo fácil se pego isolado sem Waveform de recarga pronta. Depois do Blink dele (19,0) e do seu Manta (18:24), os dois ficam móveis: ele caça, você foge.
- o que ele faz com você: Ice Shards cria uma parede que te prende se você estiver do lado errado (cooldown de 23 a 14s); Snowball rola e atinge com stun de até 1,2s mais dano crescente por aliado dentro da bola; Walrus PUNCH! é crítico com bônus de dano que te lança pro alto e atravessa Black King Bar (bkbpierce: Yes, constants_abilities.json), um dos poucos "true hits" do jogo.
- o que você faz com ele: Waveform atravessa a parede de Ice Shards sem ficar preso, porque você é invulnerável durante o trajeto; Adaptive Strike interrompe ele antes de rolar o Snowball se você acertar primeiro.
- itens que viram: Black King Bar bloqueia Ice Shards e o stun do Snowball, mas NÃO bloqueia o Walrus PUNCH! (bkbpierce: Yes); contra o Punch, a resposta é distância ou Butterfly pra evasão física.
- como jogar: não ande sozinho sem visão antes do seu Manta, o gank dele não avisa; depois do Manta e do BKB, ele perde a iniciativa, mas cuidado com o Punch mesmo imune a magia.
- fonte: pro_dados/tusk.json; pro_dados/morphling.json; constants_abilities.json (tusk_ice_shards, tusk_snowball, tusk_walrus_punch, morphling_waveform, morphling_adaptive_strike_agi).

## Contra Snapfire (snapfire)
- placar: Morphling venceu 63 de 140 partidas pro (45,0%).
- por que importa: sexto maior volume de jogos da base (140), suporte de controle que aparece em quase todo draft pela Mortimer Kisses, mesmo raramente disputando lane de carry.
- janelas: Snapfire sobe Arcane Boots aos 10,6 e Aghanim's Shard aos 16,9 (pro_dados/snapfire.json), cedo pro padrão de suporte. Antes do seu Manta (18:24), Scatterblast e Firesnap Cookie zoneiam seu farm de perto; o Shard dela (16,9) chega antes do seu Manta e deixa o Firesnap curar o aliado além de lançar um Mortimer Kiss extra.
- o que ela faz com você: Scatterblast empurra pra trás e desacelera em cone, dano maior em quem está colado na origem; Firesnap Cookie salta Mortimer (ou um aliado) até você, atordoando e causando dano na aterrissagem; Mortimer Kisses chove glóbulos de fogo em área por 5,5s, deixando poças que desaceleram e causam dano contínuo.
- o que você faz com ela: Waveform atravessa a área do Mortimer Kisses sem tomar dano, você é invulnerável no trajeto; Adaptive Strike interrompe o canal do Mortimer Kisses se acertar durante os 5,5s de lançamento.
- itens que viram: Black King Bar bloqueia Scatterblast e Mortimer Kisses (bkbpierce: No) e também o stun de aterrissagem do Firesnap Cookie, mas precisa estar ligado antes do cast.
- como jogar: não fique parado nas poças de firespit depois do Mortimer Kisses, elas continuam causando dano; force a luta rápido depois do seu BKB, antes dela reposicionar com o Scatterblast.
- fonte: pro_dados/snapfire.json; pro_dados/morphling.json; constants_abilities.json (snapfire_scatterblast, snapfire_firesnap_cookie, snapfire_mortimer_kisses, morphling_waveform, morphling_adaptive_strike_agi).

## Contra Tiny (tiny)
- placar: Morphling venceu 43 de 97 partidas pro (44,3%, leve desvantagem).
- por que importa: carry pos1 mais jogado em pro de toda a base (3.127 jogos no pro_dados dele) e um dos mais comuns contra o Morphling entre os carries puros (97 jogos), mesmo raramente dividindo a mesma lane, Tiny costuma ir de offlane ou mid.
- janelas: Tiny chega ao nível 6 (Grow 1) por volta do minuto 8 (partidas pro 7.40-7.41, OpenDota), fecha Echo Sabre aos 12:06, Blink Dagger aos 15:54 e BKB aos 26:42 (mediana pro, pro_dados/tiny.json). Seu Vladmir's (10:42) e Yasha (14:36) ainda estão em andamento quando o Echo Sabre dele já está pronto; até o Blink dele (15:54), ele depende de perseguição a pé, então você escapa de Waveform com folga. A partir dos 15:54 ele fica móvel antes do seu Manta (18:24), uma janela de quase 3 min em que ele pode iniciar sem resposta sua. O BKB dele (26:42) chega antes do seu (30:54): nessa janela ele pode iniciar sem medo do seu Adaptive Strike.
- o que ele faz com você: Avalanche atordoa em área por curto tempo e Toss te lança pra cima do time dele logo em seguida, combo de abertura clássico; Grow aumenta o alcance de ataque e o dano das árvores jogadas, o que estica o poke dele à distância antes mesmo de chegar perto.
- o que você faz com ele: Waveform atravessa a Avalanche sem tomar o stun, se você sair da área a tempo, porque é invulnerável no trajeto; Adaptive Strike (mágico) ignora a armadura alta que ele ganha com Grow.
- itens que viram: Black King Bar bloqueia o combo Avalanche + Toss inteiro (os dois mágicos), mas o dele sai antes do seu (26:42 contra 30:54), então ele pode te pegar sem resposta nessa janela de uns 4 min; Butterfly dá evasão contra o auto-ataque físico dele.
- como jogar: não dê visão solo antes do seu BKB (30:54); depois disso, iniciar nele compensa mais que esperar, o combo dele depende de pegar alguém parado e sem resposta.
- fonte: pro_dados/tiny.json; pro_dados/morphling.json; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_grow, morphling_waveform, morphling_adaptive_strike_agi); partidas pro 7.40-7.41 (OpenDota).

## Contra Templar Assassin (templar_assassin)
- placar: Morphling venceu 52 de 98 partidas pro (53,1%, vantagem leve).
- por que importa: carry pos1 muito jogado em pro (1.681 jogos no pro_dados dela) e um dos mais comuns contra o Morphling entre os pos1 puros (98 jogos), mesmo quase nunca dividindo lane, ela costuma farmar sozinha com suporte fixo.
- janelas: Templar Assassin fecha Dragon Lance aos 14:12, Desolator aos 14:18 e Blink Dagger aos 17:24 (mediana pro, pro_dados/templar_assassin.json). Seu Manta (18:24) sai pouco depois do Blink dela; antes disso, ela ataca de Meld (invisível, parada) ou de longe com o Desolator reduzindo sua armadura. O BKB dela sai aos 28:06 (pro_dados/templar_assassin.json), antes do seu (30:54), então ela chega na imunidade mágica primeiro.
- o que ela faz com você: Psi Blades (passiva, dano puro, atravessa BKB porque bkbpierce: Yes) faz o ataque dela respingar em quem está atrás do alvo; Meld deixa ela invisível parada e dá bônus de dano no próximo ataque (até 200 no nível 4) com redução de armadura; Refraction dá barreiras e dano bônus por instância, também atravessa BKB (bkbpierce: Yes).
- o que você faz com ela: Adaptive Strike (mágico, stun de até 2,6s) interrompe o combo dela antes do próximo auto-ataque saído do Meld; Waveform escapa do alcance curto de perseguição dela se usado a tempo.
- itens que viram: Black King Bar seu NÃO bloqueia Psi Blades nem Refraction (as duas atravessam, bkbpierce: Yes), então o BKB não resolve o duelo sozinho contra ela; Butterfly dá evasão contra o auto-ataque dela, mas o respingo do Psi Blades ainda acerta quem está atrás do alvo principal.
- como jogar: evite ficar colado em aliados quando ela está por perto, o respingo do Psi Blades pune grupo; force a luta antes do BKB dela (28:06 nos pros), sua vantagem de burst mágico desaparece depois disso.
- fonte: pro_dados/templar_assassin.json; pro_dados/morphling.json; constants_abilities.json (templar_assassin_psi_blades, templar_assassin_meld, templar_assassin_refraction, morphling_adaptive_strike_agi, morphling_waveform).

## Contra Ursa (ursa)
- placar: Morphling venceu 41 de 93 partidas pro (44,1%, leve desvantagem).
- por que importa: carry pos1 muito jogado em pro (1.641 jogos no pro_dados dele) e um dos mais comuns contra o Morphling entre os pos1 puros (93 jogos), mesmo raramente dividindo lane, ele costuma farmar jungle cedo com Fury Swipes.
- janelas: Ursa fecha Battle Fury aos 13,7 e Blink Dagger aos 16,8 (pro_dados/ursa.json). Ele farma rápido fora da lane assim que acumula Fury Swipes contra creeps grandes; seu Vladmir's (10:42) ainda não fechou quando o Battle Fury dele já está pronto. Depois do Blink dele (16,8), ele pode isolar você antes do seu Manta (18:24). O Basher dele fecha aos 22,5, antes do seu BKB (30:54): nessa janela ele estoura burst alto com Overpower mais auto-ataques.
- o que ele faz com você: Overpower dá até 400% de velocidade de ataque e resistência a slow por alguns hits, usado pra estourar burst rápido; Fury Swipes empilha dano a cada acerto consecutivo no mesmo alvo (até 36 por stack), cada vez mais perigoso quanto mais tempo você fica perto dele; Enrage reduz 80% do dano recebido e dá 50% de resistência a status, é dispel forte nele mesmo e não depende do seu BKB.
- o que você faz com ele: Adaptive Strike (mágico, stun de até 2,6s) interrompe o burst antes dele empilhar Fury Swipes; Waveform escapa do alcance curto dele, que é melee, se usado antes do Overpower conectar.
- itens que viram: Black King Bar NÃO impede Fury Swipes nem Overpower, os dois são ligados a dano físico de ataque, não a feitiço (Fury Swipes com bkbpierce: Yes), só a parte mágica dele some; Butterfly dá evasão contra os auto-ataques dele, o que também reseta o acúmulo do Fury Swipes quando erra.
- como jogar: não troque auto-ataque prolongado com ele sem Butterfly pronto, o Fury Swipes cresce rápido; use Adaptive Strike pra abrir distância antes dele fechar o combo com Overpower.
- fonte: pro_dados/ursa.json; pro_dados/morphling.json; constants_abilities.json (ursa_overpower, ursa_fury_swipes, ursa_enrage, morphling_adaptive_strike_agi, morphling_waveform).

## Contra Weaver (weaver)
- placar: Morphling venceu 48 de 62 partidas pro (77,4%). Maior vantagem de toda a base de confrontos do Morphling.
- por que importa: maior vantagem do Morphling entre todos os confrontos com 30 ou mais jogos, mesmo os dois raramente dividindo lane, Weaver costuma farmar sozinho e evitar embate direto cedo.
- janelas: Weaver evita confronto direto cedo com Shukuchi e sobe itens de sustain leve nos primeiros minutos (sobi_mask 3,6; falcon_blade 5,0, pro_dados/weaver.json). Seu Vladmir's (10:42) e Manta (18:24) chegam enquanto ele ainda está construindo Mithril Hammer (14,7) e TP scroll (21,1): ele não tem iniciação forte nem burst de área, então sua janela de farm paralelo quase nunca é interrompida.
- o que ele faz com você: The Swarm lança 12 unidades que grudam em você, reduzindo sua armadura a cada ataque delas (até 12 pontos ao longo da duração) e revelando sua posição mesmo invisível; Shukuchi causa dano de passagem e dá velocidade máxima, serve pra fugir ou reposicionar, não pra abrir combo de dano alto; Time Lapse volta ele 5s no tempo recuperando vida e mana, difícil de punir num 1x1 direto.
- o que você faz com ele: Adaptive Strike (até 2,6s de stun) pega ele fora do Shukuchi, que não dá imunidade a controle; Waveform atravessa o enxame de The Swarm sem perder velocidade porque você é invulnerável no trajeto.
- itens que viram: Black King Bar não é prioridade aqui, Weaver não tem disable forte em área; Butterfly já resolve boa parte do duelo porque ele depende de Geminate Attack (auto-ataque dobrado) pra fazer dano, e ela dá 35% de evasão contra auto-ataques físicos.
- como jogar: não ignore ele parado numa lane, The Swarm reduz sua armadura rápido se deixar grudar; se ele tentar fugir com Shukuchi, Adaptive Strike à distância ainda alcança porque é feitiço, não auto-ataque.
- fonte: pro_dados/weaver.json; pro_dados/morphling.json; constants_abilities.json (weaver_the_swarm, weaver_shukuchi, weaver_time_lapse, weaver_geminate_attack, morphling_adaptive_strike_agi, morphling_waveform).

## Contra Medusa (medusa)
- placar: Morphling venceu 24 de 35 partidas pro (68,6%). Segunda maior vantagem da base entre confrontos com 30 ou mais jogos.
- por que importa: mesma posição (carry pos1), segunda maior vantagem do Morphling na base inteira, com amostra pequena mas consistente (35 jogos). Os dois competem pelo mesmo papel de right-click sustentado de late.
- janelas: Medusa fecha Power Treads aos 6:30 e Manta aos 15:00 (mediana pro, pro_dados/medusa.json), cedo pro padrão dela, mas a curva de farm em área (Split Shot) só acelera de verdade depois do nível 7, que ela atinge por volta do minuto 10 (partidas pro 7.40-7.41, OpenDota). Seu Vladmir's (10:42) te dá a mesma eficiência de farm fora da lane bem antes da Stone Gaze dela (nível 10, por volta do minuto 13, partidas pro 7.40-7.41, OpenDota). Seu Manta (18:24) chega cerca de 3 min depois do dela. O Eye of Skadi dela fecha aos 28:24 (mediana pro, pro_dados/medusa.json), depois do seu Butterfly (25:48).
- o que ela faz com você: Mystic Snake pula entre alvos causando dano crescente e devolve mana pra ela no último alvo, o que alimenta a Mana Shield (absorve 98% de qualquer dano, físico ou mágico, trocando por mana, constants_abilities.json); Stone Gaze desacelera quem olha pra ela e petrifica depois de 2s acumulados de contato visual.
- o que você faz com ela: Waveform evita acumular os 2s de Stone Gaze porque você fica invulnerável durante o trajeto; Adaptive Strike (dano alto, até 2,6s de stun) é a melhor forma de furar a Mana Shield, porque obriga ela a gastar mana rápido pra sobreviver a um golpe só.
- itens que viram: Black King Bar bloqueia a Mystic Snake (mágica, bkbpierce: No) mas NÃO bloqueia Stone Gaze (bkbpierce: Yes); a resposta real contra Stone Gaze é não encarar ela por 2s seguidos em grupo, não o BKB. Butterfly ajuda depois que a Mana Shield cai (ela fica sem mana), antes disso a evasão não resolve o problema de furar o escudo.
- como jogar: não troque olhar fixo com ela em luta prolongada sem cobertura, os 2s de Stone Gaze acumulam rápido em grupo; gaste Adaptive Strike cedo na troca, antes dela acumular mana de volta com a Mystic Snake.
- fonte: pro_dados/medusa.json; pro_dados/morphling.json; constants_abilities.json (medusa_mystic_snake, medusa_stone_gaze, medusa_mana_shield, morphling_adaptive_strike_agi, morphling_waveform); partidas pro 7.40-7.41 (OpenDota).

## Contra Lifestealer (life_stealer)
- placar: Morphling venceu 33 de 52 partidas pro (63,5%). Terceira maior vantagem da base.
- por que importa: mesma função de carry sustain, terceira maior vantagem do Morphling entre os confrontos com 30 ou mais jogos. Os dois competem pelo mesmo papel de farm rápido fora da lane com sustain próprio.
- janelas: Lifestealer fecha Phase Boots aos 6:00, chega ao nível 6 (Infest) por volta do minuto 9 (partidas pro 7.40-7.41, OpenDota), fecha Radiance aos 16:12 e Armlet aos 18:06 (mediana pro, pro_dados/life_stealer.json). Seu Vladmir's (10:42) chega bem antes do Radiance dele; até lá, a vantagem de farm eficiente é sua. Do Armlet (18:06) até o Aghanim's Scepter dele, aos 29:54 (pro_dados/life_stealer.json), ele vira o 1x1 com sustain físico puro. Seu Butterfly (25:48) chega antes do Aghanim's dele.
- o que ele faz com você: Open Wounds desacelera e faz todo aliado perto curar uma % do dano causado em você (até 50% no nível 4), mas bkbpierce: No, então o BKB bloqueia a aplicação; Rage dá imunidade a debuff e 80% de resistência mágica por alguns segundos sem bloquear dano físico, não interrompe seu Waveform se ele já estiver no ar; Feast (passivo) cura ele por % da sua vida máxima a cada acerto, quanto mais vida você tem, mais ele cura.
- o que você faz com ele: Butterfly (35% de evasão) corta direto o Feast, porque ele só cura quando o auto-ataque acerta; Adaptive Strike (mágico) ainda estuna mesmo se ele ligar Rage no meio do cast, porque a resistência mágica do Rage (80%) só reduz o dano, não remove o controle.
- itens que viram: Black King Bar bloqueia Open Wounds inteiro se ligado antes do cast; Eye of Skadi corta 50% da cura do Feast e do lifesteal dele; Butterfly já reduz boa parte do dano físico recebido.
- como jogar: evite ficar com vida cheia perto dele sem necessidade, Feast cura mais quanto mais vida você tem; force a troca antes do Armlet dele (18:06), sua vantagem de farm é maior nessa fase.
- fonte: pro_dados/life_stealer.json; pro_dados/morphling.json; constants_abilities.json (life_stealer_open_wounds, life_stealer_rage, life_stealer_feast, morphling_adaptive_strike_agi, morphling_waveform); partidas pro 7.40-7.41 (OpenDota).

## Contra Luna (luna)
- placar: Morphling venceu 20 de 59 partidas pro (33,9%). Segunda maior desvantagem da base.
- por que importa: mesma posição (carry pos1), segunda pior taxa de vitória do Morphling na base (59 jogos), e o motivo aparece no próprio kit dela: farma mais rápido em grupo com Moon Glaives e tem uma das janelas de 1x1 mais fortes do jogo entre os 18 e 24 min.
- janelas: Luna fecha Mask of Madness aos 10:00 e Manta Style aos 17:12 (mediana pro, pro_dados/luna.json); Eclipse 3/3 acompanha o nível 18, que ela atinge por volta do minuto 25 (partidas pro 7.40-7.41, OpenDota). Seu Vladmir's (10:42) ainda chega antes do Manta dela, mas o Moon Glaives, que ricocheteia entre alvos próximos, recupera a diferença de farm rápido em grupo de creep. O Manta dela (17:12) sai antes do seu (18:24): dos 18 aos 24 min ela ganha o 1x1, Lucent Beam abre e Moon Glaives multiplica o dano em troca de grupo.
- o que ela faz com você: Lucent Beam atordoa por 0,6s e causa dano crescente por nível, cooldown de só 9 a 6s; Moon Glaives faz o ataque dela ricochetear pra unidades próximas, incluindo suas imagens do Manta, o que desperdiça parte do dano nas imagens mas também estica o alcance efetivo do combo dela num grupo; Eclipse (ultimate) chove feixes aleatórios em área por alguns segundos, pode te matar sozinho se você ficar parado perto dela de noite.
- o que você faz com ela: Adaptive Strike (até 2,6s de stun) interrompe o combo antes dela acertar o segundo Lucent Beam; Waveform atravessa a área do Eclipse sem tomar os feixes porque você é invulnerável no trajeto, se usado a tempo.
- itens que viram: Black King Bar bloqueia Lucent Beam e Eclipse (os dois mágicos, bkbpierce: No); Butterfly reduz o dano dos Moon Glaives nos seus auto-ataques recebidos, mas não ajuda contra Lucent Beam nem Eclipse porque nenhum dos dois é auto-ataque.
- como jogar: evite lutar perto de criaturas suas, suas imagens de Manta incluídas, quando ela está por perto antes do seu BKB, o Moon Glaives pune agrupamento; puxe a luta pra depois do seu BKB (30:54) e do Butterfly (25:48), a vantagem dela cai bastante depois disso.
- fonte: pro_dados/luna.json; pro_dados/morphling.json; constants_abilities.json (luna_eclipse, luna_lucent_beam, luna_moon_glaive, morphling_adaptive_strike_agi, morphling_waveform); partidas pro 7.40-7.41 (OpenDota).

## Contra Pudge (pudge)
- placar: Morphling venceu 31 de 91 partidas pro (34,1%). Terceira maior desvantagem da base e a maior amostra entre as piores (91 jogos).
- por que importa: terceira pior taxa de vitória do Morphling na base inteira, com a maior amostra entre as desvantagens (91 jogos). Suporte/meio de controle que não divide lane com o Morphling na maioria dos jogos, mas o Meat Hook ameaça o farm dele fora da lane.
- janelas: Pudge sobe Blink aos 19,5 (pro_dados/pudge.json). Antes do seu Manta (18:24), você fica exposto puxando camp sozinho, alvo perfeito pro Meat Hook de longe (alcance 1300). Depois do Blink dele (19,5), ele pode fechar a distância mesmo se o Hook errar.
- o que ele faz com você: Meat Hook causa dano puro, ignora qualquer redução de armadura ou resistência, e atravessa BKB (bkbpierce: Yes), então nem a imunidade mágica te salva do puxão; Dismember é canalizado, atordoa e drena vida proporcional à Força dele enquanto dura, também atravessa BKB (bkbpierce: Yes); Rot causa dano contínuo em área e desacelera, inclusive o próprio Pudge.
- o que você faz com ele: Waveform escapa do alcance do Hook se usado antes do puxão conectar, porque você vira invulnerável assim que ativa; Adaptive Strike (até 2,6s de stun) interrompe o canal do Dismember se acertar antes dele começar a puxar.
- itens que viram: Black King Bar NÃO bloqueia Meat Hook nem Dismember, os dois atravessam (bkbpierce: Yes), então a resposta certa é distância e visão, não imunidade mágica; Linken's Sphere bloqueia o Hook porque é feitiço de alvo único, a mesma ressalva que vale contra Lion e Shadow Shaman.
- como jogar: não ande sozinho sem visão em corredor estreito ou perto de rio, onde o Hook tem linha livre; se for puxado, gaste Adaptive Strike nele antes do Dismember começar, interromper o canal corta a maior parte do dano.
- fonte: pro_dados/pudge.json; pro_dados/morphling.json; constants_abilities.json (pudge_meat_hook, pudge_dismember, pudge_rot, morphling_adaptive_strike_agi, morphling_waveform).
