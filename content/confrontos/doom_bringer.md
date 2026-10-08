---
id: confrontos-doom_bringer
heroi: Doom
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/doom_bringer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/pangolier.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/centaur.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/axe.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tidehunter.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/life_stealer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/morphling.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/bounty_hunter.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/abaddon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
- https://liquipedia.net/dota2/Basic_dispel
- https://liquipedia.net/dota2/Strong_Dispel
- https://api.opendota.com/api/explorer (partidas de liga, patches 7.40/7.41)
---

## Contra Rubick (rubick)
- placar: Doom venceu 132 de 265 jogos de pro (49,8%). Fonte: pro_dados/doom_bringer.json (confrontos).
- por que importa: é o oponente com mais jogos contra o Doom no banco de pro (265), porque ele ameaça roubar a própria ultimate "Doom" com Spell Steal, que tem recarga de só 16/10/4s e é lançada em média 14,8 vezes por partida pelo Rubick (59.115 casts em 3.982 partidas de pro 7.40-7.41, OpenDota explorer).
- janelas: até os 7:0 (Phase Boots mediano do Doom, pro_dados/doom_bringer.json) nenhum dos dois fecha distância no outro; do nível 6 em diante o Rubick já é ameaça de roubo, mesmo sem item; a partir do Blink do Doom (19:7 mediano, pro_dados/doom_bringer.json) é o Doom quem decide quando a luta começa, e passa a valer mais pegar o Rubick isolado primeiro.
- o que ele faz com você: se ele te ver lançar Doom em alguém do time dele e sobreviver, ele rouba a magia e te dooma de volta; Fade Bolt (dano que salta entre inimigos, reduz dano a cada salto) e Telekinesis (levanta e estuna em área ao cair) seguram seu combo até o time dele reagir.
- o que você faz com ele: ele é muito mais frágil que você; se você fechar nele primeiro com Blink, a curse aplica 25/45/66 de dano puro por segundo (constants_abilities.json) e ele não consegue reagir, porque a curse bloqueia qualquer cast enquanto ativa.
- itens que viram: Linken's Sphere nele bloqueia sua curse de cara (absorve 300 de dano do próximo alvo único, recarga de 14s, items.json); com Aghanim's Scepter seu, a curse passa a aplicar Break e se espalhar 350 de raio pros aliados perto dele (fonte: aghs_desc), útil se o Rubick estiver agrupado com outro suporte.
- como jogar: nunca lance a ultimate perto de um Rubick vivo sem ter certeza de onde ele está; depois do Blink, priorize ele no engajamento antes de qualquer outro alvo, porque ele morre rápido e perde o jogo pro time dele se cair cedo.
- fonte: pro_dados/doom_bringer.json; pro_dados/rubick.json; constants_abilities.json; items.json; https://api.opendota.com/api/constants/aghs_desc; partidas pro 7.40-7.41 (OpenDota explorer, rubick_spell_steal)

## Contra Hoodwink (hoodwink)
- placar: Doom venceu 120 de 227 jogos de pro (52,9%). Fonte: pro_dados/doom_bringer.json (confrontos).
- por que importa: é o 2º oponente com mais jogos contra ele no pro (227); suporte com root de área (Bushwhack) e um nuke de longo alcance que aplica Break, capaz de desligar o kit do Doom antes da luta começar.
- janelas: 0-6min ela controla a troca de dano com Acorn Shot (bounce que desacelera) e Bushwhack perto de árvore (stun de 1,5 a 2,1s mais dano ao longo do tempo, constants_abilities.json); até os 7:0 (Phase Boots do Doom) a lane ainda é parelha porque nenhum dos dois tem item de spike; Sharpshooter (alcance 3000, carrega até 3s, dano até 1350 no nível 3) é a maior ameaça dela até o Doom ter BKB (24:0 mediano, pro_dados/doom_bringer.json) ou já estar cravando a curse de perto.
- o que ele faz com você: Bushwhack trava você perto de árvore pro time dela fechar; Sharpshooter aplica Break (desliga suas habilidades por um tempo) e dano alto se você ficar parado no alcance dela por 3s de carregamento.
- o que você faz com ele: Scurry não dá imunidade a magia, só velocidade e passagem por árvore (constants_abilities.json: hoodwink_scurry), então sua curse ainda gruda nela enquanto ela foge; ela é muito frágil, Infernal Blade (stun de 0,66s mais 1-4% da vida máxima por 4s) já é dano relevante numa suporte.
- itens que viram: BKB do Doom segura a Break do Sharpshooter se ele não tiver como evitar o tiro; Blink pra fechar antes dela terminar de carregar.
- como jogar: não fique parado no alcance dela pra não levar o Sharpshooter cheio; force ela a gastar Scurry cedo e persiga com Infernal Blade em autocast, que rende dano de graça.
- fonte: pro_dados/doom_bringer.json; pro_dados/hoodwink.json; constants_abilities.json

## Contra Shadow Fiend (nevermore)
- placar: Doom venceu 85 de 182 jogos de pro (46,7%), leve desvantagem. Fonte: pro_dados/doom_bringer.json (confrontos).
- por que importa: é o carry/mid com mais jogos contra ele em pro (182) e o exemplo claro de dois cores que quase nunca dividem lane, mas cujo duelo de poder de luta decide o jogo quando se cruzam.
- janelas: Shadow Fiend farma mais rápido que o Doom cedo (658 de gpm médio dele contra 606 do Doom, resumo de cada um em pro_dados) e ganha dano permanente por alma coletada (Necromastery); sem blink entre os itens mais comprados dele (pro_dados/nevermore.json), ele depende de ficar de longe raseando; a partir do Blink do Doom (19:7 mediano, pro_dados/doom_bringer.json) é ele quem consegue fechar distância antes do Shadow Fiend carregar Requiem of Souls parado.
- o que ele faz com você: Shadowraze (3 direções, sem precisar de alvo) dá dano antecipado que cresce com as almas acumuladas; Requiem of Souls (até 20 almas) é um nuke em área grande se você estiver perto dele, mas exige ele ficar parado durante o cast.
- o que você faz com ele: ele não tem disable duro nem fuga própria além da distância das razes; se você fecha com Blink e crava a curse, ele não cura nem lança Requiem, porque a curse bloqueia cast de magia.
- itens que viram: seu BKB segura o stun/control que o time dele monta em cima enquanto você fecha; Linken's nele bloqueia sua curse de cara.
- como jogar: não dê oportunidade pra ele acumular alma te raseando de graça na lane; gaste o Blink pra fechar nele assim que ele abrir o Requiem, já que ele fica parado no cast.
- fonte: pro_dados/doom_bringer.json; pro_dados/nevermore.json; constants_abilities.json

## Contra Pangolier (pangolier)
- placar: Doom venceu 104 de 182 jogos de pro (57,1%), boa vantagem. Fonte: pro_dados/doom_bringer.json (confrontos).
- por que importa: é um dos oponentes com mais jogos contra o Doom (182, empatado com Shadow Fiend, só atrás de Rubick e Hoodwink) e domina a posição de mid em pro, 63,7% dos jogos dele no pro 7.40-7.41 são de mid (1.169 de 1.836, lane_role OpenDota explorer), contra 35,7% de offlane; mesmo sem lane garantida, é um dos combatentes de meio de jogo mais agressivos do patch.
- janelas: desde o nível 6 ele já ameaça iniciar com Rolling Thunder; o Blink dele sai em 19:2 (pro_dados/pangolier.json), quase junto do Doom (19:7, pro_dados/doom_bringer.json), então quem fecha primeiro tende a vencer a troca, já que os dois têm alcance curto.
- o que ele faz com você: durante Rolling Thunder ele fica debuff immune e com 80% de resistência mágica (constants_abilities.json: pangolier_gyroshell), então sua curse não gruda nele enquanto ele estiver rolando; Swashbuckle (dash mais 3 ataques rápidos) ainda conecta nele mesmo que ele esteja te atacando.
- o que você faz com ele: fora da Rolling Thunder ele não tem HP extra de sobra; sua curse mais o Infernal Blade (% da vida máxima por segundo) cortam ele rápido, e se você doomar ele antes de rolar, ele perde acesso à própria ultimate enquanto a curse durar.
- itens que viram: tente cravar a curse antes da Rolling Thunder, nunca durante; Shiva's Guard reduz a velocidade de ataque dele, que é a arma real do combo (Swashbuckle vira ataques e aciona Lucky Shot).
- como jogar: espere o Rolling Thunder acabar ou pegue ele ainda carregando pra lançar a curse; depois disso ele não tem fuga própria contra seu dano contínuo.
- fonte: pro_dados/doom_bringer.json; pro_dados/pangolier.json; constants_abilities.json; partidas pro 7.40-7.41 (OpenDota explorer, lane_role)

## Contra Tusk (tusk)
- placar: Doom venceu 80 de 162 jogos de pro (49,4%). Fonte: pro_dados/doom_bringer.json (confrontos).
- por que importa: é o suporte roamer com mais jogos contra ele no pro (162); no 7.41 ele tem gpm baixo no pro (300, pro_dados/tusk.json), compatível com suporte, e ataca em janelas de gank cedo, antes de qualquer item grande.
- janelas: 0-10min ele ganka com Snowball (rola buscando aliado pelo caminho) e Walrus Kick (lança o alvo 1200 de distância e o trava); como o Doom não tem fuga própria, esse é o período mais perigoso; depois do Blink dele (19:0, pro_dados/tusk.json), bem antes do Blink do Doom (19:7, pro_dados/doom_bringer.json), ele ainda consegue iniciar primeiro em quase qualquer luta aberta.
- o que ele faz com você: Snowball te tira da lane sem aviso prévio; Walrus Kick te lança longe e te deixa travado pro time dele fechar o combo.
- o que você faz com ele: ele é baixo de HP e de farm (300 de gpm médio no pro 7.40-7.41, pro_dados/tusk.json); se você sobreviver ao gank inicial, sua curse nele desliga o cast de Tag Team e ele não tem segundo disable forte sozinho.
- itens que viram: Wind Lace/botas cedo ajudam a sobreviver ao primeiro Snowball; depois do seu BKB, o combo dele sozinho fica bem mais fraco contra você.
- como jogar: jogue a lane pedindo visão de longe nos primeiros 10 minutos, que é a janela onde ele decide o jogo; depois disso ele perde força relativa porque farma pouco.
- fonte: pro_dados/doom_bringer.json; pro_dados/tusk.json; constants_abilities.json

## Contra Snapfire (snapfire)
- placar: Doom venceu 85 de 154 jogos de pro (55,2%). Fonte: pro_dados/doom_bringer.json (confrontos).
- por que importa: suporte flexível (2/3/4/5) que aparece bastante contra ele; o Aghanim's Shard dela sai cedo em pro, mediana 16,9min (pro_dados/snapfire.json), e muda o kit completamente bem perto do spike do Doom.
- janelas: 0-16min ela é suporte de poke padrão (Lil' Shredder, Firesnap Cookie); depois do Shard (16,9min), Firesnap Cookie passa a curar o alvo e lançar um Mortimer Kiss extra com 40% do dano de impacto, uma segunda janela de perigo que chega quase junto do Blink do Doom (19:7, pro_dados/doom_bringer.json).
- o que ele faz com você: Firesnap Cookie já estuna e causa dano na área de pouso mesmo sem Shard (desde o nível 1); com o Shard, ela ainda cura o alvo e manda um Mortimer Kiss extra em cima; Mortimer Kisses (barragem de 5,5s) pune quem fica parado perto dela.
- o que você faz com ele: ela é frágil fisicamente e sem fuga própria forte; sua curse bloqueia ela de reativar Firesnap Cookie ou curar o aliado que ela estiver protegendo.
- itens que viram: BKB segura o stun do Firesnap/Shard, já que o dano dela é mágico.
- como jogar: redobre o cuidado depois dos 17min, quando o Shard muda o combo dela; fora isso, ela não aguenta seu combo de perto.
- fonte: pro_dados/doom_bringer.json; pro_dados/snapfire.json; https://api.opendota.com/api/constants/aghs_desc

## Contra Centaur Warrunner (centaur)
- placar: Doom venceu 72 de 146 jogos de pro (49,3%), parelho. Fonte: pro_dados/doom_bringer.json (confrontos).
- por que importa: rival direto de mesma posição principal (offlane); os dois são iniciadores tanque de Força que disputam a mesma lane e o mesmo papel no time no 7.41.
- janelas: lane inicial equilibrada; Centaur costuma ter Vanguard cedo (8:5 mediano, pro_dados/centaur.json) pra segurar dano físico, enquanto o Doom depende do Scorched Earth pra sustentar; depois do Blink dele (19:6) e do Doom (19:7, pro_dados/doom_bringer.json), quem inicia primeiro ganha, porque Centaur quer Stampede em cima de alguém parado e o Doom quer a curse nele antes do Hoof Stomp.
- o que ele faz com você: Hoof Stomp estuna em área; Retaliate devolve uma % do dano que ele recebe de ataque, inclusive atravessando BKB (constants_abilities.json: centaur_return, bkbpierce Yes); Stampede empurra o time dele por cima de você.
- o que você faz com ele: Infernal Blade bate % da vida máxima por segundo, bom contra o HP alto dele; sua curse bloqueia qualquer cast dele, mas Retaliate é passiva de ataque recebido, então continua ativa mesmo com você doomando ele, a menos que a Break venha do seu Scepter.
- itens que viram: Aghanim's Scepter seu (aghs_desc: a curse passa a aplicar Break) desliga de fato o Retaliate dele; sem o Scepter, prefira bater nele com Infernal Blade em autocast em vez de ficar trocando soco a soco.
- como jogar: na lane, puna os momentos em que ele erra o Hoof Stomp; na late, feche a curse nele antes dele estourar o Stampede em cima do seu time.
- fonte: pro_dados/doom_bringer.json; pro_dados/centaur.json; constants_abilities.json; https://api.opendota.com/api/constants/aghs_desc

## Contra Axe (axe)
- placar: Doom venceu 58 de 124 jogos de pro (46,8%), leve desvantagem. Fonte: pro_dados/doom_bringer.json (confrontos).
- por que importa: outro rival direto de mesma posição, 97,7% dos jogos do Axe no pro 7.40-7.41 são na offlane (1.973 de 2.019, lane_role OpenDota explorer, 50,5% de vitória); clássico duelo de offlane tanque contra tanque.
- janelas: lane dura dos dois lados porque Counter Helix pune quem bate nele e sua curse sozinha não desliga essa passiva; Axe costuma ter Blink mais cedo (15:7, pro_dados/axe.json) que o Doom (19:7, pro_dados/doom_bringer.json), então ele tende a iniciar roam/pickoff primeiro nesse intervalo.
- o que ele faz com você: Berserker's Call obriga você a atacar ele (e ele ganha armadura), acionando Counter Helix de graça; Culling Blade executa baseado na vida que falta e reseta a recarga se matar, perigoso se ele te pegar com o Scorched Earth desligado.
- o que você faz com ele: Infernal Blade bate % da vida máxima dele por segundo, bom contra o HP alto; sua curse bloqueia qualquer cast dele, mas Counter Helix é passiva de ataque, não precisa de cast pra disparar, então continua funcionando mesmo com você doomando ele, sem Scepter.
- itens que viram: Aghanim's Scepter (aghs_desc: a curse passa a aplicar Break) desliga Counter Helix de vez; sem ele, evite ficar martelando nele corpo a corpo sem necessidade, use Infernal Blade em autocast à distância de ataque.
- como jogar: não aceite o Berserker's Call parado nele sem plano; feche a curse nele de preferência com Blink, antes dele plantar o combo.
- fonte: pro_dados/doom_bringer.json; pro_dados/axe.json; constants_abilities.json; https://api.opendota.com/api/constants/aghs_desc; partidas pro 7.40-7.41 (OpenDota explorer, lane_role)

## Contra Tidehunter (tidehunter)
- placar: Doom venceu 67 de 121 jogos de pro (55,4%), boa vantagem. Fonte: pro_dados/doom_bringer.json (confrontos).
- por que importa: 3º rival direto de mesma posição no volume de jogos; dupla clássica de iniciadores tanques de offlane do 7.41.
- janelas: lane parecida, os dois correm Soul Ring/sustain própria; Tidehunter tem Blink em 21:2 (pro_dados/tidehunter.json), um pouco depois do Doom (19:7, pro_dados/doom_bringer.json), então nesse intervalo o Doom costuma iniciar primeiro.
- o que ele faz com você: Kraken Shell bloqueia parte do dano físico e remove debuffs quando o dano acumulado cruza um limite (600/550/500/450, reseta em 7s), mas sua curse é dano puro (não é bloqueado por Kraken Shell) e, pela própria descrição dela em constants_abilities.json ("dispellable: No"), ela não sai nem com o reset do Kraken Shell; Ravage estuna em área enorme se ele acertar seu time agrupado.
- o que você faz com ele: seu Infernal Blade (% vida máxima) e a curse continuam batendo nele mesmo com Kraken Shell ativo, porque um é dano puro e o outro já está ligado quando ela dispara.
- itens que viram: Aghanim's Scepter seu (aghs_desc: aplica Break) desliga também o acionamento passivo do Kraken Shell; mesmo sem Scepter, a curse sozinha já ignora o block físico dele.
- como jogar: não espere a curse "ser limpa" pelo Kraken Shell, ela não sai; force a troca de dano puro contra ele em vez de brigar no ataque básico, onde o block dele reduz seu dps.
- fonte: pro_dados/doom_bringer.json; pro_dados/tidehunter.json; constants_abilities.json (doom_bringer_doom: dispellable No, dmg_type Pure); https://api.opendota.com/api/constants/aghs_desc; https://liquipedia.net/dota2/Basic_dispel

## Contra Lifestealer (life_stealer)
- placar: Doom venceu 43 de 61 jogos de pro (70,5%), a maior vantagem da lista; amostra razoável, mas abaixo de 100 jogos. Fonte: pro_dados/doom_bringer.json (confrontos).
- por que importa: é o exemplo direto do que o patch pede pra entender, dois carries que nem sempre dividem lane, mas cujo duelo de poder decide o jogo quando se cruzam; aqui o Doom tem a maior vantagem registrada contra um carry com volume de jogos.
- janelas: Lifestealer escala rápido com Radiance (16:2 mediano, pro_dados/life_stealer.json) e tem gpm alto (601, resumo pro_dados), ficando forte sozinho na selva/lane; o Blink do Doom (19:7, pro_dados/doom_bringer.json) chega pouco depois do Radiance dele, então o jogo decide quem fecha primeiro: ele caçando com Open Wounds, ou o Doom doomando ele antes.
- o que ele faz com você: Rage dá Debuff Immune, resistência mágica e velocidade (constants_abilities.json: life_stealer_rage); se ele ativar Rage antes da sua curse, ela não gruda nele, porque debuff immune bloqueia o cast de entrar; Open Wounds te deixa mais lento e cura o time dele com o dano que causam em você.
- o que você faz com ele: se você doomar ele antes dele ativar Rage, ele fica preso, sem cast, sem cura, sem fuga, levando dano puro contínuo (25 a 66 por segundo) enquanto seu time termina o trabalho; Infernal Blade (% vida máxima) corta bem o HP alto dele.
- itens que viram: ele precisa de Linken's Sphere ou de antecipar a curse ativando Rage antes pra sobreviver ao seu combo; do seu lado, Blink é o item que decide, porque sem ele você não alcança o timing de doomar antes do Rage.
- como jogar: nunca lance a ultimate depois dele já estar com Rage ativa; espere ele gastar em farm/fuga ou pegue ele desprevenido logo no início da luta.
- fonte: pro_dados/doom_bringer.json; pro_dados/life_stealer.json; constants_abilities.json (life_stealer_rage; doom_bringer_doom)

## Contra Morphling (morphling)
- placar: Doom venceu 24 de 37 jogos de pro (64,9%); amostra pequena, mas é exatamente o tipo de confronto citado como referência (dois carries sem lane garantida). Fonte: pro_dados/doom_bringer.json (confrontos).
- por que importa: Doom e Morphling raramente dividem lane, mas o que um pode fazer com o outro no meio/fim de jogo pesa muito, porque Morphling é um carry que depende de reagir com magia pra sobreviver, e o Doom é o pior cenário possível pra isso.
- janelas: Morphling escala rápido (614 de gpm, 60 de lh10, pro_dados/morphling.json) e o grande spike dele é o Manta Style (18:4 mediano), que dá dispel ativo e ilusões; antes disso, dos 0 aos 18min, ele é relativamente frágil contra iniciação; depois do Manta ele limpa debuffs comuns, mas não a curse do Doom.
- o que ele faz com você: Waveform deixa ele invulnerável durante o dash, ótimo pra escapar da perseguição corpo a corpo (o alcance de ataque e da curse do Doom são curtos); Adaptive Strike empurra e muda atributo, dando mais dano ou resistência sob demanda.
- o que você faz com ele: a curse bloqueia a troca de atributos dele (Attribute Shift é cast de magia) enquanto ativa, então ele fica preso no build que tinha no momento em que foi doomado; o dano puro da curse ignora a evasão alta que ele costuma montar.
- itens que viram: o Manta Style dele (18:4) limpa debuffs comuns, mas não a curse do Doom (pela descrição dela, "dispellable: No"); pelo lado do Doom, Blink é essencial porque o Waveform (invulnerável durante o dash) faz perder o timing se tentar pegar ele no meio do movimento.
- como jogar: não gaste a curse achando que ele vai sumir dela, ela gruda até o fim mesmo com o kit de fuga dele; priorize pegar ele fora da janela de Waveform, de preferência assim que aparecer visível.
- fonte: pro_dados/doom_bringer.json; pro_dados/morphling.json; constants_abilities.json (morphling_waveform; doom_bringer_doom)

## Contra Bounty Hunter (bounty_hunter)
- placar: Doom venceu 12 de 37 jogos de pro (32,4%), a maior desvantagem da lista; amostra pequena (37 jogos). Fonte: pro_dados/doom_bringer.json (confrontos).
- por que importa: é o pior matchup medido contra ele em pro; suporte ganker que se aproveita exatamente da falta de fuga do Doom.
- janelas: 0-6min ele ataca com Shadow Walk (invisibilidade) mais Jinada (dano bônus e ouro), roubando farm e kills antes do Doom montar qualquer item; depois disso ele segue rotacionando com Track (visão verdadeira) pra abrir caça em qualquer parte do mapa, o oposto do Doom, que não tem iniciação própria sem Blink (19:7 mediano, pro_dados/doom_bringer.json).
- o que ele faz com você: Shadow Walk deixa ele invisível perto de você sem aviso; o primeiro ataque depois da invisibilidade estuna; Track tira qualquer esconderijo seu e ainda dá ouro bônus pro time dele quando você morre.
- o que você faz com ele: ele é muito frágil; se você fechar nele com Blink e doomar antes dele atacar, ele morre rápido e sem conseguir reagir, porque a curse bloqueia cast; fora isso, você não tem resposta pra invisibilidade dele sem wards/Sentry do seu time.
- itens que viram: Sentry Ward ou Gem no seu time é a resposta real, porque o Doom não tem detecção própria; do lado dele, Shadow Walk é o que decide o engajamento.
- como jogar: peça visão do seu suporte nos primeiros 10-15min, que é a janela onde ele ganha o jogo; depois que ele perde a surpresa, ele não aguenta a curse de perto.
- fonte: pro_dados/doom_bringer.json; pro_dados/bounty_hunter.json; constants_abilities.json (bounty_hunter_wind_walk)

## Contra Abaddon (abaddon)
- placar: Doom venceu 30 de 79 jogos de pro (38%), desvantagem grande com amostra relevante (79 jogos). Fonte: pro_dados/doom_bringer.json (confrontos).
- por que importa: na teoria o Doom deveria contar o Abaddon, a própria descrição da curse diz que ela bloqueia cura "de qualquer jeito" (constants_abilities.json), o que incluiria a conversão de dano em cura da Borrowed Time; na prática pro o Abaddon ganha a maioria dessas partidas, um contraste que vale entender antes de confiar demais na teoria.
- janelas: Abaddon monta Radiance rápido (16:3 mediano, pro_dados/abaddon.json), igual ao Lifestealer, pra farmar e já chegar na luta com sustain; Borrowed Time ativa sozinha se a vida dele cair abaixo de 400, então ele raramente fica exposto por muito tempo sem a defesa ligada.
- o que ele faz com você: Aphotic Shield dá escudo que absorve dano e ainda estoura dano em área quando se rompe; Curse of Avernus desacelera e dá bônus de velocidade de ataque pra quem bate em você; Borrowed Time, quando ativa, transforma o dano que ele leva em cura, e o gatilho automático dela costuma disparar antes da curse do Doom conectar, porque ele ativa sozinho com 400 de vida.
- o que você faz com ele: se o Doom conseguir doomar ele antes da Borrowed Time disparar, a curse bloqueia a cura por completo enquanto durar; o problema na prática é o timing, o gatilho automático dele costuma ser mais rápido que a aproximação do Doom.
- itens que viram: só vale tentar a curse cedo na troca, antes dele cair pra faixa de vida que ativa a defesa automática; itens de burst/silêncio do time do Doom ajudam a adiantar esse timing.
- como jogar: não gaste a curse reativamente quando ele já estiver com Borrowed Time ligada, o efeito provavelmente já passou por cima; tente pegar ele fora de posição, longe da vida baixa que ativa a defesa.
- fonte: pro_dados/doom_bringer.json; pro_dados/abaddon.json; constants_abilities.json (abaddon_borrowed_time; doom_bringer_doom)

## Contra Tiny (tiny)
- placar: Doom venceu 76 de 152 jogos de pro (50,0%), parelho. Fonte: pro_dados/doom_bringer.json (confrontos).
- por que importa: outro carry de alto volume contra ele (152 jogos), incluído porque é um dos carries mais jogados em pro mesmo sem dividir lane fixa com o Doom; o duelo entre os dois gira em torno de quem fecha o alcance curto do outro primeiro.
- janelas: Tiny depende de Avalanche mais Toss pra combo à distância, sem precisar chegar perto; ele costuma ter Blink cedo (15:9, pro_dados/tiny.json), mais cedo que o Doom (19:7, pro_dados/doom_bringer.json), então nesse intervalo ele tende a iniciar o combo primeiro, de longe; depois disso os dois já têm blink e o jogo vira timing de quem vê o outro primeiro.
- o que ele faz com você: Avalanche (stun em área, dano ao longo do tempo) seguido de Toss (lança você ou um aliado) é burst alto sem precisar te encostar; Grow aumenta dano e armadura dele conforme sobe de nível.
- o que você faz com ele: sua curse bloqueia ele de lançar o próprio combo (Toss e Avalanche são cast de magia) enquanto ativa; o dano puro da curse ignora a armadura extra que ele ganha com Grow.
- itens que viram: Blink é o que resolve o alcance curto do Doom contra o combo à distância dele; BKB segura o stun do Avalanche se ele vier primeiro.
- como jogar: cuidado redobrado dos 15 aos 20min, quando ele já tem Blink e o Doom ainda não; depois que o Doom também tiver Blink, prefira doomar ele assim que aparecer, antes dele conseguir abrir o combo.
- fonte: pro_dados/doom_bringer.json; pro_dados/tiny.json; constants_abilities.json (tiny_toss; tiny_avalanche; doom_bringer_doom)
