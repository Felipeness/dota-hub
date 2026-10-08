---
id: confrontos-tusk
heroi: Tusk
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shadow_demon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/spirit_breaker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/legion_commander.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/death_prophet.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/vengefulspirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/treant.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/venomancer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/muerta.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://liquipedia.net/dota2/Legion_Commander
- https://www.esportstales.com/dota-2/how-to-counter-spirit-breaker-items-heroes-and-tips
---

## Contra Jakiro (jakiro)

- placar: 224V-440J em pro (50,9%). Fonte: pro_dados/tusk.json (confrontos, OpenDota /heroes/100/matchups, 7.40+7.41).
- por que importa: é o oponente com mais jogos de pro junto do Tusk na base (440, empatado com Hoodwink). Mesma função, pos 5 de aura/zoneamento, suporte duro que trava teamfight tanto quanto Tusk.
- janelas: até os 9 min os dois só trocam Dual Breath contra Snowball em poke de lane, sem spike nenhum. Aos 18-20 min o Jakiro tira Ice Path (stun em área, alcance 1100, raio 150, até 2s no nível 4, fonte: constants_abilities.json) e Arcane Boots (11:42, mediana de 2.278 jogos), então ele já consegue travar o Tusk antes do blink dele sair (mediana de 19:00, 2.655 jogos, fonte: pro_dados/tusk.json). Dos 22 aos 26 min o Jakiro compra Glimmer Cape (22:48, 894 jogos) pra sobreviver ao combo e Force Staff (26:12, 817 jogos) pra fugir da Snowball. Depois dos 26, quem tiver Macropyre fechado (alcance 1400, 10s de queimada, 100-200 de dano por segundo, fonte: constants_abilities.json) controla o espaço da luta.
- o que ele faz com você: Ice Path (1100 de alcance) sai sem o Jakiro precisar se aproximar, diferente da sua Snowball (1150 de alcance de cast, mas precisa rolar até o alvo e demora pra chegar), então na prática ele ameaça de longe antes de você conseguir rolar em cima de alguém. Macropyre fechando a rota de fuga depois do seu combo falhar é a pior parte, porque o Jakiro não precisa acertar silêncio ou hex, só precisar zonear.
- o que você faz com ele: Jakiro tem HP baixo e zero mobilidade própria (sem blink, sem dash). Walrus Kick (alcance 250, empurra 1200, dano mágico de 550, atravessa BKB porque é bkbpierce, fonte: constants_abilities.json) fecha a distância sozinho; se tiver Blink Dagger, é só blinkar em cima dele antes do Ice Path sair, porque o cast time do Ice Path é 0,65s, mais lento que o seu combo.
- itens que viram: Blink Dagger seu entra antes do Force Staff dele em boa parte dos jogos (mediana de 19:00 contra 26:12), então a janela de matar o Jakiro sem ele conseguir fugir existe. Do lado dele, Glimmer Cape (invisibilidade + resistência mágica) é o item que mais atrapalha, porque reduz o dano mágico do seu Ice Shards e da sua Snowball.
- como jogar: antes dos 19 min, evite abrir combo sozinho contra o trilane do Jakiro, ele tira a Macropyre cedo se tiver mana. Depois do seu Blink, priorize matar o Jakiro primeiro no grupo, ele não tem como fugir sem Force Staff ou Glimmer. Se ele já tem os dois, force o combo em cima de outro alvo e deixe o Jakiro de fora.
- fonte: pro_dados/tusk.json; pro_dados/jakiro.json; constants_abilities.json (tusk_walrus_kick, jakiro_ice_path, jakiro_macropyre)

## Contra Hoodwink (hoodwink)

- placar: 223V-440J em pro (50,7%). Fonte: pro_dados/tusk.json.
- por que importa: 2º maior volume de jogos de pro contra o Tusk (440, empatado com Jakiro). Mesma função, pos 4/5 de armadilha e visão, disputa o mesmo espaço de roaming no mapa.
- janelas: nos primeiros 10 min a Hoodwink poka com Acorn Shot (alcance até 750 no nível 4, ricocheteia até 5 vezes, fonte: constants_abilities.json) enquanto você ainda não tem Blink. Dos 15 aos 20 min ela fecha Wizard Hat (12:24, 1.909 jogos) e o Aghanim's Shard (23:48, 1.224 jogos) que faz o Hunter's Boomerang voltar e enfraquecer você contra dano mágico. Seu Blink sai nessa mesma janela (mediana de 19:00, pro_dados/tusk.json). Dos 23 aos 26 min ela ainda tira Force Staff (26:06, 1.061 jogos) pra escapar.
- o que ele faz com você: Bushwhack (alcance 1100, raio 265, até 2,1s de stun no nível 4, dano total até 360, fonte: constants_abilities.json) tem mais alcance que qualquer coisa sua pra iniciar e ainda stunda em área, então ela consegue abrir luta em cima de você antes do seu kit ter alcance pra responder. Scurry dá evasão alta por alguns segundos, então ela pode esquivar do seu auto-ataque final de Walrus Punch logo depois de um Bushwhack acertado.
- o que você faz com ele: Walrus Kick ignora a evasão da Scurry porque não é um ataque, é dano de habilidade direto, e atravessa magic immunity. Se você blinka em cima dela antes do Bushwhack sair (cast time 0,2s, rápido, então precisa ser antes dela te ver), o combo sai sem ela conseguir reagir.
- itens que viram: o Aghanim's Shard dela (23:48) é o item que mais perturba, porque o Boomerang volta duas vezes e cada passada aplica o debuff de vulnerabilidade a dano mágico, piorando o seu Ice Shards nela mas melhorando o efeito do seu Walrus Kick mágico nela. Do seu lado, Blink Dagger antes dos 20 min é a corrida que você precisa vencer.
- como jogar: não force engajamento de frente, ela vê o Bushwhack vindo de 1100 de distância. Jogue pelo flanco ou espere ela gastar Bushwhack em outro alvo antes de blinkar. Depois que ela tiver o Shard, puna o cast dela: Walrus Kick funciona mesmo com o debuff de vulnerabilidade mágica nela, só que a favor do seu dano.
- fonte: pro_dados/tusk.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_scurry, tusk_walrus_kick); https://api.opendota.com/api/constants/aghs_desc (shard da Hoodwink)

## Contra Rubick (rubick)

- placar: 230V-430J em pro (53,5%). Fonte: pro_dados/tusk.json.
- por que importa: 3º maior volume de jogos de pro (430). Mesma função, pos 4/5, e os dois competem por quem inicia primeiro a luta, Rubick à distância com Fade Bolt e Telekinesis, você no corpo a corpo.
- janelas: até os 10 min o Rubick fica na defensiva, poucos itens além de Sobi Mask e Ring of Basilius. O Blink dele sai aos 21:36 (2.782 jogos), bem perto do seu (mediana de 19:00), então a corrida pelo primeiro blink costuma ser apertada. Dos 22 aos 27 min ele fecha Aether Lens (22:54) e depois Aghanim's Shard (27:00) ou Scepter (27:24, 1.119 jogos), que aumenta o alcance de roubo de feitiço e upgrada o que ele rouba.
- o que ele faz com você: Fade Bolt (alcance 800, dano até 325, reduz seu dano de saída em até 24% por 10s, fonte: constants_abilities.json) poka de mais longe que seu kit consegue responder sem blink. Telekinesis (alcance até 625, voa o alvo e stunda na queda) te tira do controle do seu próprio engajamento se ele acertar primeiro.
- o que você faz com ele: Rubick tem pouco HP e nenhum escape próprio além do Blink genérico. Se você fecha a distância antes dele usar Fade Bolt, o combo Snowball + Walrus Kick mata rápido, porque ele não tem defesa além dos itens. A corrida de Blink entre os dois decide quem inicia em quem.
- itens que viram: o Scepter dele (27:24) é o que mais perturba depois do meio-jogo, porque ele pode roubar duas habilidades em vez de uma. Antes disso, vencer a corrida do seu Blink (19:00) contra o dele (21:36) é o que decide a maioria dos confrontos diretos.
- como jogar: não gaste o seu blink pra engajar de longe, deixe o Rubick vir pra perto primeiro ou espere ele gastar Fade Bolt em outro alvo. Se ele tiver Scepter, cuidado com qual habilidade sua ele já tem disponível pra roubar de novo, e troque a ordem do seu combo se possível.
- fonte: pro_dados/tusk.json; pro_dados/rubick.json; constants_abilities.json (rubick_fade_bolt, rubick_telekinesis, rubick_spell_steal); https://api.opendota.com/api/constants/aghs_desc (scepter do Rubick)

## Contra Snapfire (snapfire)

- placar: 209V-428J em pro (48,8%, amostra robusta mas Tusk levemente atrás). Fonte: pro_dados/tusk.json.
- por que importa: 4º maior volume de jogos de pro (428). Suporte flex (2 a 5) com combo de stun e dano explosivo que compete diretamente com o seu papel de iniciador.
- janelas: a Snapfire chega ao Aghanim's Shard absurdamente cedo pro padrão de suporte, mediana de 16:54 em 1.919 jogos (de 2.456 totais), bem antes do seu Blink (mediana de 19:00). Com o Shard, Firesnap Cookie (alcance 650, cura e stun de até 2,2s em 300 de raio) também lança um Mortimer Kiss que bate 40% do dano de impacto, dando dano e controle a distância antes de você sequer ter blink pra responder. Dos 18 aos 21 min ela ainda fecha Kaya (18:06) e tem acesso ao Blink dela mesma (20:42, 1.171 jogos) como alternativa de iniciação.
- o que ele faz com você: com o Shard cedo, ela consegue stunar e machucar de longe sem se expor, e ainda tem Scatterblast (alcance 800, desacelera 100% por até 1,5s em ponto-em-branco) pra te atrasar se você fechar a distância antes do combo dela.
- o que você faz com ele: Snapfire tem HP alto pro padrão de suporte mas pouca saída depois que o combo dela falha. Walrus Kick atravessa magic immunity, então mesmo que ela tenha BKB defensivo (raro nela), ainda te alcança. Se você sobreviver à abertura dela, o corpo a corpo favorece você.
- itens que viram: o Shard dela (16:54) é o item que mais antecipa o confronto, porque chega quase 3 minutos antes do seu Blink. Do seu lado, Blink Dagger ainda é o item que fecha a conta: sem ele, você está sempre reagindo ao combo dela, nunca iniciando o seu.
- como jogar: não ande exposto perto dela depois dos 15 min, o Shard já pode estar pronto. Jogue pra forçar ela a gastar o Cookie em outro alvo primeiro, ou espere ela ficar sem carga (recarrega em 15-21s) antes de se aproximar.
- fonte: pro_dados/tusk.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_firesnap_cookie, snapfire_scatterblast, tusk_walrus_kick); https://api.opendota.com/api/constants/aghs_desc (shard da Snapfire)

## Contra Disruptor (disruptor)

- placar: 211V-427J em pro (49,4%). Fonte: pro_dados/tusk.json.
- por que importa: 5º maior volume de jogos de pro (427). Mesma função, pos 5, e o kit dele é desenhado especificamente contra iniciação com blink, exatamente o que você faz.
- janelas: Disruptor é o suporte de pior economia da lista (279 de ouro/min, nível final mediano 15, os dois piores da amostra, fonte: pro_dados/disruptor.json), então ele raramente vence a corrida de item. O Blink dele sai só aos 24:00 (1.128 jogos), depois do seu. Mas Glimpse já está disponível desde o nível 1 (alcance até 1800 no nível 4, manda o alvo de volta pra onde estava 4 segundos atrás, fonte: constants_abilities.json), então ele não precisa de item pra te contra-atacar. Static Storm (ultimate, raio 550, até 350 de dano por segundo em 6s) fecha o kit a partir do nível 6.
- o que ele faz com você: Glimpse desfaz qualquer blink ou snowball que você tenha feito nos últimos 4 segundos, te devolvendo pra posição anterior, isso anula fisicamente a sua iniciação. Static Storm em cima do seu time agrupado depois de um Tag Team é o pior cenário, porque pune justamente o momento em que vocês ficaram parados brigando.
- o que você faz com ele: ele é o suporte mais fraco em HP e dano da lista inteira. Se você entra matando o Disruptor primeiro, antes dele conseguir reposicionar o resto do time com Glimpse, o combo dele nunca chega a acontecer. Walrus Kick nele mesmo (dano mágico 550, atravessa magic immunity) o mata rápido no early game.
- itens que viram: nenhum item dele muda o padrão cedo, o Blink só sai aos 24:00 e o Scepter dele (que silencia itens com Static Storm) só aos 34:54, tarde demais pra early/mid game. O que decide é a habilidade base: Glimpse sem cooldown relevante (18-24s) está sempre disponível.
- como jogar: finja um blink, deixe ele gastar o Glimpse em você, e só então faça a iniciação de verdade. Ou simplesmente foque o Disruptor primeiro em qualquer troca, ele morre rápido e some a ameaça de Glimpse/Static Storm pro resto da luta.
- fonte: pro_dados/tusk.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_glimpse, disruptor_static_storm, tusk_walrus_kick)

## Contra Tiny (tiny)

- placar: 193V-410J em pro (47,1%). Fonte: pro_dados/tusk.json.
- por que importa: 6º maior volume de jogos de pro (410) e o exemplo claro de confronto sem lane em comum: Tiny é pos 1 de safelane/offlane, você é suporte, mas os dois rodam o mapa com o mesmo tipo de combo (agarra e lança), então encontro é constante em pro.
- janelas: Tiny chega ao próprio combo de grab-and-burst muito antes do seu: Blink Dagger aos 15:54 (2.546 jogos) e Echo Sabre aos 12:06 (1.317 jogos), ambos bem antes do seu Blink (mediana de 19:00). Entre os 15 e 20 min, se o Tiny tiver Avalanche + Toss fechado, ele combo qualquer suporte sozinho sem precisar do time. Black King Bar dele sai aos 26:42 (1.148 jogos), te tirando a vantagem do Tag Team físico a partir daí.
- o que ele faz com você: Toss (alcance até 1100 no nível 4, pega você e joga em outro ponto, dano até 360) combina com Avalanche (raio até 370, 5 tiques de stun curto) pra te prender e estourar antes de você reagir. Como ele chega no combo 4 a 6 minutos antes de você, a janela de risco é maior pro seu lado no early-mid.
- o que você faz com ele: Walrus Kick (dano mágico, atravessa BKB) ainda acerta o Tiny depois do BKB dele, diferente da sua Snowball e Ice Shards, que são mágicos sem bkbpierce e param de funcionar contra ele com BKB ativo. Fora do BKB, Tiny tem HP relativamente baixo pro tanto dano que carrega, então um combo seu bem cronometrado também o mata rápido.
- itens que viram: Echo Sabre + Blink dele (12:06-15:54) é o item spike que você precisa respeitar antes dos 16 minutos, não ande sozinho sem visão nessa janela. Depois do BKB dele (26:42), só Walrus Kick continua confiável; guarde Snowball e Ice Shards pra antes do BKB ou pra outros alvos.
- como jogar: antes dos 16 min, jogue com visão de onde o Tiny está, ele pode combar sozinho. Depois do BKB dele, não force Snowball nele, puxe o combo pelo Walrus Kick e deixe o time focar o resto.
- fonte: pro_dados/tusk.json; pro_dados/tiny.json; constants_abilities.json (tiny_toss, tiny_avalanche, tusk_walrus_kick, tusk_snowball)

## Contra Shadow Demon (shadow_demon)

- placar: 152V-344J em pro (44,2%). Fonte: pro_dados/tusk.json.
- por que importa: 344 jogos de pro, mesma função pos 4/5, e o kit dele (banimento) é o counter mais limpo de iniciação curta depois do Disruptor.
- janelas: até os 15 min ele farma Shadow Poison (dano acumulado, recarrega em 2,5s) de longe. O Blink dele sai aos 23:54 (1.318 jogos), um pouco depois do seu. O Aghanim's Shard (25:24, 788 jogos) dá Demonic Cleanse, que limpa debuffs negativos de um aliado por vez, incluindo qualquer coisa que o seu Tag Team ou Ice Shards tenham aplicado.
- o que ele faz com você: Disruption (alcance 675, banimento de 2,75s, fonte: constants_abilities.json) te impede de usar qualquer item ou habilidade durante o efeito, cancelando o combo no meio se ele acertar entre o Snowball e o Walrus Kick. Demonic Purge (ultimate, dreno de até 600 de dano e lentidão de 100% a 20%, dura 5s) ainda dispela qualquer buff positivo que você tenha pego de Drinking Buddies ou de item.
- o que você faz com ele: ele tem pouco HP e nenhuma forma de fugir além do Blink. Se você fecha a distância antes da Disruption sair (cast time 0,3s), o combo acontece normalmente; depois disso, ele só tem Demonic Purge pra tentar salvar o aliado perseguido.
- itens que viram: o Shard dele (25:24) muda o jogo em teamfight porque limpa o debuff físico do seu Tag Team de um aliado por vez, então depois desse ponto prefira focar burst único em vez de depender do Tag Team pra vencer a troca prolongada.
- como jogar: force a Disruption a ser gasta em outro alvo antes de iniciar, ou blinka em cima dele primeiro, porque sem Disruption ele não tem resposta no corpo a corpo.
- fonte: pro_dados/tusk.json; pro_dados/shadow_demon.json; constants_abilities.json (shadow_demon_disruption, shadow_demon_demonic_purge); https://api.opendota.com/api/constants/aghs_desc (shard do Shadow Demon)

## Contra Lion (lion)

- placar: 135V-262J em pro (51,5%). Fonte: pro_dados/tusk.json.
- por que importa: 262 jogos de pro, mesma função pos 4/5, e carrega a ameaça de matar você sozinho com Finger of Death antes do seu combo sair.
- janelas: o Lion costuma sair na frente na corrida de blink: mediana de 18:12 (2.412 jogos) contra 19:00 do seu. Tranquil Boots sai cedo (7:24) pra sustentar a lane. A partir do nível 6 (normalmente antes dos 10 min em pro), Finger of Death (dano de 600 a 850, alcance 900) já é uma ameaça de morte instantânea pra você, que tem HP baixo nesse ponto do jogo.
- o que ele faz com você: Voodoo (Hex, alcance até 650, 2 a 3,2s sem poder atacar nem usar habilidade) tira o seu Walrus Punch do jogo (ele é autocast, não funciona hexado) e cancela qualquer combo em andamento. Impale (alcance 650, stun até 2,2s, dano até 300) ainda combina com o hex pra travar você em sequência.
- o que você faz com ele: Lion tem pouquíssimo HP, é um dos supports mais frágeis do jogo. Se você fecha a distância antes do Impale/Hex saírem, o combo seu (Snowball + Walrus Kick + Punch) mata ele de uma vez, principalmente antes dele ter os itens de sobrevivência (Glimmer, Aether Lens, ambos só depois dos 25 min pra ele).
- itens que viram: o Blink dele saindo mais cedo (18:12) é o que mais pesa, porque ele consegue iniciar em você antes de você iniciar nele. Depois disso, cuidado especial com o Aghanim's Shard dele (25:48, 723 jogos), que deixa o Lion imune a debuff e com 60% de resistência mágica enquanto canaliza Mana Drain, dificultando interromper ele no meio da luta.
- como jogar: não ande sem Tag Team / aliado por perto depois do nível 6 dele, o Finger of Death mata sozinho. Priorize blinkar nele assim que ver a oportunidade, antes do blink dele sair primeiro.
- fonte: pro_dados/tusk.json; pro_dados/lion.json; constants_abilities.json (lion_voodoo, lion_impale, lion_finger_of_death, tusk_walrus_punch); https://api.opendota.com/api/constants/aghs_desc (shard do Lion)

## Contra Spirit Breaker (spirit_breaker)

- placar: 115V-219J em pro (52,5%). Fonte: pro_dados/tusk.json.
- por que importa: 219 jogos de pro. Mesma posição de roaming (pos 4), os dois competem literalmente pelo mesmo trabalho no time: quem inicia caçando pelo mapa.
- janelas: Spirit Breaker monta o próprio combo rápido: Phase Boots aos 9:24 (1.628 jogos), Ancient Janggo aos 17:24 (699), Blitz Knuckles aos 18:06 (1.103) a caminho de Echo Sabre, e já tenta Shadow Amulet/Shadow Blade (21:18, 22:54) pra charges furtivas. Isso é mais cedo que o seu Blink (mediana de 19:00), então ele costuma ter o próprio spike de gank primeiro.
- o que ele faz com você: Charge of Darkness te persegue de qualquer distância do mapa (sem alcance de lançamento, ele só precisa te ver) e o Greater Bash (17% de chance, atordoa 0,9 a 1,5s e empurra) te deixa preso em sequência de ataques.
- o que você faz com ele: um Charge é interrompido por qualquer stun ou disable (confirmado: stun cancela a carga, fonte: esportstales.com). Walrus Kick acertado nele no meio da carga cancela o gank antes dele chegar, e como o Walrus Kick atravessa BKB, funciona até contra o Shadow Blade dele.
- itens que viram: o Ancient Janggo + Blitz Knuckles dele (17:24-18:06) é o spike que chega antes do seu Blink, respeite essa janela sem aliado por perto. Depois que você tem Blink e consegue reagir com Walrus Kick a distância, a vantagem muda de lado, dados os 52,5% de vitória do Tusk na amostra.
- como jogar: antes dos 18 min, não ande sozinho e sem visão de onde ele está carregando. Depois do seu Blink, guarde o Walrus Kick especificamente pra cancelar a carga dele assim que ele aparecer vindo em alguém do seu time.
- fonte: pro_dados/tusk.json; pro_dados/spirit_breaker.json; constants_abilities.json (spirit_breaker_charge_of_darkness, spirit_breaker_greater_bash, tusk_walrus_kick); https://www.esportstales.com/dota-2/how-to-counter-spirit-breaker-items-heroes-and-tips

## Contra Ember Spirit (ember_spirit)

- placar: 161V-370J em pro (43,5%, uma das piores marcas da lista). Fonte: pro_dados/tusk.json.
- por que importa: 370 jogos de pro, sem lane em comum (Ember é mid, você é suporte), mas é exatamente o tipo de confronto que importa sem estar na mesma lane: ele é um dos carries de mid mais jogados do patch e o seu roaming cruza o caminho dele o jogo inteiro.
- janelas: Ember farma rápido (558 de ouro/min, a 2ª maior gpm da lista, atrás só da Muerta, 53 de last hit aos 10 min). Boots aos 4:36, Urn of Shadows aos 7:18 (1.889 jogos), Flame Guard disponível desde o nível 4. Kaya sai aos 19:12 (1.666), já na janela do seu Blink. Black King Bar aos 27:06 (1.130) e Aghanim's Scepter aos 31:36 fecham o kit dele de late-game.
- o que ele faz com você: Flame Guard (barreira que absorve até 300 de dano mágico, 70% do que ultrapassa o limite) reduz bastante o seu Walrus Kick (550 de dano mágico) e a sua Snowball, mesmo sem contar como imunidade. Fire Remnant (alcance 1400, pode plantar até 3 cargas) deixa ele se teleportar pra fora do caminho da sua Snowball com facilidade.
- o que você faz com ele: Walrus Kick é bkbpierce, então depois dos 27 min, quando o Ember já tem BKB, ainda é a única ferramenta sua que continua acertando ele em cheio; Snowball e Ice Shards (mágicos sem bkbpierce) param de funcionar nessa hora.
- itens que viram: antes do Flame Guard dele (desde o nível 4, custo baixo), o seu dano mágico rende cheio; depois, prefira abrir com Walrus Kick primeiro pra gastar a barreira dele antes da Snowball. Depois do BKB dele (27:06), praticamente só o Walrus Kick continua valendo contra ele.
- como jogar: não dependa de Snowball/Ice Shards como combo principal contra um Ember com Flame Guard ativo, puxe pelo Walrus Kick. Gank ele antes dos 19 min, antes do Kaya/Flame Guard consolidados, é a janela mais fácil.
- fonte: pro_dados/tusk.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_flame_guard, ember_spirit_fire_remnant, tusk_walrus_kick, tusk_snowball)

## Contra Legion Commander (legion_commander)

- placar: 26V-36J em pro (72,2%, amostra pequena). Fonte: pro_dados/tusk.json.
- por que importa: a maior vantagem do Tusk em pro entre os oponentes com 30+ jogos, mas com amostra pequena (36 jogos), então leve como indício, não como lei.
- janelas: Legion Commander também corre pro Blink cedo (15:18, 567 jogos) e Blade Mail (12:42), chegando ao próprio spike de duelo antes do seu Blink (mediana de 19:00). Black King Bar (26:24) e Aghanim's Scepter/Shard (25:48, empatados) fecham o kit dela no fim do jogo.
- o que ele faz com você: Duel força um 1x1 isolado por até 5s; nenhum dos dois pode usar item durante o Duel, mas só o alvo (você) fica impedido de usar habilidades, a Legion Commander continua podendo lançar o próprio kit (fonte: constants_abilities.json, legion_commander_duel). Se ela te pega sozinho num Duel, o seu combo de habilidades fica bloqueado no meio da duração.
- o que você faz com ele: você é suporte de dano baixo e Legion Commander ganha bônus permanente de dano só vencendo o Duel, então ela raramente tem motivo pra duelar você: o prêmio é pequeno. Fora do Duel, Walrus Kick (bkbpierce) ainda acerta ela depois do BKB dela, e o seu combo derruba o HP relativamente baixo dela rápido se ela chegar sem o time por perto.
- itens que viram: nenhum item muda o padrão aqui, o fator decisivo é ela preferir duelar carries/cores de HP alto em vez de um suporte de baixo valor. A vantagem do Tusk provavelmente reflete isso mais do que uma interação de kit específica.
- como jogar: não entre em pânico se ela tiver Duel disponível perto de você, o alvo normal dela é outro herói. Se mesmo assim ela duelar você, continue atacando: Walrus Punch (ataque modificado, não "uso de habilidade" convencional) ainda pode conectar durante o Duel.
- fonte: pro_dados/tusk.json; pro_dados/legion_commander.json; https://liquipedia.net/dota2/Legion_Commander (mecânica do Duel); constants_abilities.json (legion_commander_duel, tusk_walrus_punch)

## Contra Death Prophet (death_prophet)

- placar: 29V-46J em pro (63,0%, amostra pequena-média). Fonte: pro_dados/tusk.json.
- por que importa: 2ª maior vantagem do Tusk em pro com 30+ jogos. Death Prophet tem o silêncio mais perigoso contra o seu combo na lista, então vale entender por que mesmo assim o Tusk vence mais.
- janelas: Death Prophet é rara em pro (572 jogos no total da base) mas quando jogada escala rápido: 531 de ouro/min, Power Treads aos 6:48, e um Aghanim's Scepter muito cedo pro padrão, mediana de 18:18 (221 jogos), quase junto com o seu Blink.
- o que ele faz com você: Silence (raio 450, alcance 900, até 5s de duração no nível 4) impede você de lançar Snowball, Ice Shards ou Walrus Kick inteiro, deixando só os ataques básicos.
- o que você faz com ele: Death Prophet tem pouquíssimo HP e nenhuma mobilidade, é toda dependente de ficar parada canalizando dano. Se você fecha a distância antes do Silence sair (cast range 900, mas cast time 0,2s é rápido, então precisa surpreender), o combo mata ela rápido, e mesmo silenciado, Walrus Punch (autocast, ataque, não habilidade) continua funcionando.
- itens que viram: o Scepter cedo dela (18:18) e o Cyclone (14:54) adicionam zoneamento e kiting, mas não mudam o fato de que ela não tem escape de verdade. Walrus Punch continuar ativo durante o Silence é o que mais pesa a seu favor nessa conta.
- como jogar: se ela te silenciar, não entre em pânico, continue atacando normalmente, o Punch ainda crita. Tente blinkar nela antes do Silence disponível (cooldown 12-15s) resetar.
- fonte: pro_dados/tusk.json; pro_dados/death_prophet.json; constants_abilities.json (death_prophet_silence, tusk_walrus_punch)

## Contra Vengeful Spirit (vengefulspirit)

- placar: 40V-64J em pro (62,5%). Fonte: pro_dados/tusk.json.
- por que importa: 3ª maior vantagem do Tusk em pro com 30+ jogos, e mesma função, pos 4/5, suporte de iniciação com stun próprio parecido com o seu.
- janelas: Vengeful Spirit farma devagar pro padrão de suporte (314 de ouro/min). Magic Missile disponível desde o nível 1 pra poke e stun curto. Nether Swap (ultimate, alcance até 1100 no nível 3) fica disponível a partir do nível 6, trocando posição com um alvo a distância. Aghanim's Scepter sai aos 22:54 (190 jogos), fazendo a versão ilusória dela continuar lutando se ela morrer.
- o que ele faz com você: Nether Swap pode te puxar pra perto do time dela (te trocando de posição com um aliado dela mais fraco) ou tirar um aliado seu perseguido da sua Snowball/combo, anulando a iniciação. Magic Missile (alcance 650, stun até 1,8s) briga diretamente com o seu próprio stun em choque de suportes.
- o que você faz com ele: Vengeful Spirit tem HP baixo e, sem o Scepter, morre de uma vez num combo bem cronometrado. Walrus Kick bkbpierce ainda funciona se ela tiver algum dispel/imune temporário.
- itens que viram: o Scepter dela (22:54) é o que mais atrapalha depois do meio-jogo, porque a morte dela vira uma ilusão que ainda ataca e lança magia por um tempo. Antes disso, a vantagem é inteiramente sua em HP e burst.
- como jogar: trate o confronto como choque direto de suportes: quem acerta o próprio stun primeiro (Walrus Kick vs Magic Missile) geralmente fecha a troca. Depois do Scepter dela, finalize rápido pra não deixar a ilusão continuar lutando.
- fonte: pro_dados/tusk.json; pro_dados/vengefulspirit.json; constants_abilities.json (vengefulspirit_nether_swap, vengefulspirit_magic_missile, tusk_walrus_kick); https://api.opendota.com/api/constants/aghs_desc (scepter da Vengeful Spirit)

## Contra Treant Protector (treant)

- placar: 58V-178J em pro (32,6%, a maior desvantagem do Tusk na lista, amostra robusta). Fonte: pro_dados/tusk.json.
- por que importa: maior desvantagem do Tusk em pro entre oponentes com 30+ jogos (178 jogos), mesma função pos 5, e o kit dele responde quase ponto a ponto o seu.
- janelas: Treant Protector tem um dos piores farms da lista (301 de ouro/min, nível final mediano 17, só Disruptor e Lion farmam mais devagar entre os suportes da lista, mas isso não importa pro papel dele). O diferencial é o Aghanim's Shard cedo: mediana de 19:00 em 660 jogos, quase junto do seu Blink (mediana de 19:00), que já dá Eyes in the Forest, visão por 6 minutos em árvores que denuncia qualquer rota de roaming sua.
- o que ele faz com você: Overgrowth (ultimate, raio 800, root de até 5s no nível 3) é a maior janela de disable de curto alcance do jogo e cobre uma área enorme, prendendo você e seu time inteiro antes do combo sair. Leech Seed (raiz + desarme no alvo, cura em pulso pros aliados dele) sustenta ele e a lane contra o seu harass.
- o que você faz com ele: Treant Protector tem pouco dano de saída fora do Overgrowth, então se você sobreviver ao root e ele não converter em kill do time, a luta vira a seu favor. Walrus Kick bkbpierce ainda acerta ele mesmo debaixo de qualquer resistência mágica que ele tenha.
- itens que viram: o Shard dele (19:00), com visão por 6 minutos em árvores plantadas, é o que mais prejudica especificamente o seu jogo de roaming furtivo, ele sabe onde você está antes de você chegar. Overgrowth (ultimate) é o item/habilidade que decide a maioria dos confrontos diretos.
- como jogar: evite rotas óbvias de árvore depois que ele tiver o Shard, use fumaça pra cruzar áreas que ele pode ter plantado olho. Não agrupe o time perto dele sem saber se Overgrowth está disponível (cooldown 90-110s), é dano e controle em área que ele usa antes de você fechar o combo.
- fonte: pro_dados/tusk.json; pro_dados/treant.json; constants_abilities.json (treant_overgrowth, treant_leech_seed, tusk_walrus_kick); https://api.opendota.com/api/constants/aghs_desc (shard do Treant Protector)

## Contra Venomancer (venomancer)

- placar: 47V-125J em pro (37,6%, 2ª maior desvantagem do Tusk na lista). Fonte: pro_dados/tusk.json.
- por que importa: 2ª maior desvantagem do Tusk em pro com 30+ jogos (125). Venomancer ganha a troca prolongada de lane com dano passivo constante, o oposto do seu kit de burst pontual.
- janelas: Venomancer sustenta dano desde o nível 1 com Poison Sting (passivo em todo ataque, 4,5s de dano por segundo + 10% de lentidão). Mekansm sai aos 20:12 (253 jogos), Spirit Vessel aos 17:12 (348), ambos fortalecendo ele e o time em troca sustentada, não em burst.
- o que ele faz com você: Poison Sting empilha dano e lentidão em todo ataque básico, então qualquer troca que se arraste favorece ele, especialmente porque você não tem lifesteal ou sustain próprio no kit. Venomous Gale (alcance 800, lentidão de até 50%, dano ao longo de 15s) ainda atrapalha a sua tentativa de fechar distância antes do combo.
- o que você faz com ele: Venomancer tem pouco HP e nenhuma defesa contra burst instantâneo. Se você fecha o combo rápido (Snowball + Walrus Kick + Punch) antes da troca virar prolongada, o burst seu ainda vence, porque ele não aguenta dano concentrado.
- itens que viram: nenhum item dele muda isso cedo, o problema é o kit base: dano passivo de longa duração bate de frente com o seu combo de burst pontual. Depois do Mekansm/Vessel dele (17-20 min), a troca de time inteira passa a favorecer ainda mais o time dele.
- como jogar: não entre em troca prolongada contra ele, feche o combo rápido e recue, ou ganhe com número (traga aliados) pra reduzir o tempo de exposição ao Poison Sting. Evite lane fixa contra ele sem suporte, prefira caçar ele isolado em vez de brigar na lane dele.
- fonte: pro_dados/tusk.json; pro_dados/venomancer.json; constants_abilities.json (venomancer_poison_sting, venomancer_venomous_gale)

## Contra Muerta (muerta)

- placar: 78V-192J em pro (40,6%, 3ª maior desvantagem do Tusk na lista). Fonte: pro_dados/tusk.json.
- por que importa: 192 jogos de pro, 3ª maior desvantagem com amostra robusta. Muerta é carry de alta prioridade no 7.41 (584 de ouro/min, o maior item spike de toda a lista) e, mesmo sem lane em comum quase sempre, a diferença de ritmo econômico pune qualquer Tusk que role tarde demais.
- janelas: Muerta farma rápido desde cedo: Power Treads aos 7:30, Mjollnir aos 19:42 (762 jogos) e Hyperstone aos 20:24 (789), já com dois itens de dano em área/attack speed prontos quase junto do seu Blink (mediana de 19:00). Hurricane Pike (25:30) e Black King Bar (27:30) fecham a mobilidade e a defesa dela pouco depois.
- o que ele faz com você: pelo tempo que o seu Blink sai (mediana de 19:00), a Muerta já pode ter Mjollnir fechado, dano em área por proc de ataque que destrói suportes de HP baixo em poucos hits, sem precisar gastar habilidade nenhuma em você.
- o que você faz com ele: antes dos 19 min, Muerta ainda não tem o spike de item pronto, é a janela mais segura pra gankar ela. Walrus Kick bkbpierce segue valendo depois do BKB dela (27:30).
- itens que viram: o combo Mjollnir + Hyperstone dela (19:42-20:24) é o spike que você precisa respeitar, se a luta ocorrer depois desse ponto sem vantagem numérica clara pro seu time, ela ganha a troca sozinha.
- como jogar: gank ela antes dos 19 min, quando ela ainda não tem o item core pronto. Depois disso, não entre sozinho nela, puxe presença de time ou simplesmente evite a lane dela até conseguir itens de resposta (BKB, Force Staff pro time).
- fonte: pro_dados/tusk.json; pro_dados/muerta.json; tusk_walrus_kick (constants_abilities.json)
