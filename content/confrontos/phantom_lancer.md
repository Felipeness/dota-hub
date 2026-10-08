---
id: confrontos-phantom_lancer
heroi: Phantom Lancer
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/phantom_lancer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/terrorblade.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/sven.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ursa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/slardar.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/drow_ranger.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/queenofpain.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/spirit_breaker.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/phantom_lancer.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/terrorblade.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/sven.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/drow_ranger.json
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/phantom_lancer.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/snapfire.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/ogre_magi.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/mars.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/tusk.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/rubick.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/ursa.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/slardar.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/queenofpain.md
- C:/Users/felip/Desktop/dota-hub/content/fichas/spirit_breaker.md
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
---

## Como foi escolhida essa lista

12 oponentes, cruzando 4 critérios com os dados de pro (pro_dados/phantom_lancer.json, campo confrontos, que vem do OpenDota `/heroes/12/matchups` filtrado pra partidas de liga):

- **Mais jogos registrados contra o PL em pro**: Shadow Fiend, Snapfire, Ogre Magi, Mars, Tusk e Rubick são os 6 com mais partidas na amostra (de 65 a 87 jogos cada). São os heróis que mais aparecem do outro lado do draft quando o PL é escolhido, geram volume de dado confiável e, no caso dos 4 últimos, rotacionam ou seguram sua lane direto.
- **Carry contra carry, mesmo sem dividir lane**: Terrorblade, Sven, Templar Assassin, Drow Ranger, Ursa e Slardar são os carries/offlaners com mais jogos de pro contra o PL (33 a 54 cada). Nenhum deles necessariamente lanea com o PL (times vão pra lados opostos do mapa), mas são exatamente o tipo de confronto que importa pro jogador: quem escala mais rápido, quem caça quem, com que item o duelo vira. É o caso citado no pedido original (tipo Alchemist x Morphling).
- **Maior vantagem com amostra grande**: Slardar (63,0% em 54 jogos) e Templar Assassin (58,8% em 34) são os dois melhores matchups do PL com 30+ partidas, batendo com a vantagem ajustada por força de herói do próprio guia do PL (phantom_lancer.json: Templar Assassin +4,3pp, e Slardar +3,2pp).
- **Maior desvantagem com amostra grande**: Queen of Pain (32,8% em 61 jogos) é o pior retrospecto da lista inteira com amostra relevante. Spirit Breaker (37,2% em 43) entra como contraponto: parece counter no bruto, mas o guia do PL mostra que, ajustado pela força do herói no Divine+, ele fica neutro, incluído justamente para explicar essa diferença entre WR bruta (viés de draft) e matchup real.

Terrorblade, Sven, Templar Assassin e Drow Ranger acumulam dois critérios ao mesmo tempo (carry mais jogado + vantagem/desvantagem relevante), o que confirma que são os confrontos mais substanciais da lista.

## Contra Shadow Fiend (nevermore)
- placar: 40 vitórias em 87 partidas de pro (46,0%). É o confronto com mais jogos registrados dos 127 heróis do projeto (pro_dados/phantom_lancer.json).
- por que importa: maior volume de dado contra o PL em pro; SF é o 2º carry de safelane mais escolhido do 7.41 (454 jogos pos1, 49,3% de vitória, fonte: guia do herói no Dota Hub) e disputa recursos de mapa com você mesmo sem lanear junto.
- janelas: até 7-8 min, SF puxa LH/min de 6 pra 8 na própria lane; sua rota só abre no nível 6 (mediano 7:53). Do seu Yasha (10:00) ao Manta (14:30-15:30) vocês dois sobem de corpo: Blade of Alacrity dele sai aos 12,7 min (pro_dados nevermore.json). Depois dos 35 min o PL vence 58,8-60,7% das partidas (guia do PL): SF prefere decidir antes disso.
- o que ele faz com você: Shadowraze (raio 250, alcance 200, 85-280 de dano) acerta numa faixa estreita na frente dele; Requiem of Souls (raio 1.000, converte alma de quem morre perto em dano extra por linha, até 20 linhas) é o que mais dói se você entrar em luta com várias ilusões grudadas nele.
- o que você faz com ele: nenhum Raze cobre área ampla (é uma linha de 250 de raio), então ilusões espalhadas em camps diferentes nunca tomam o mesmo Raze; Doppelganger te tira da janela antes do cast point de 1,67s do Requiem se usado a tempo.
- itens que viram: o Aghanim's Shard dele (reduz recarga do Raze por herói atingido, +12% de lentidão por stack, fonte: aghs_desc) perde força contra grupo espalhado, já que cada Raze só acerta 1-2 corpos por vez; seu Manta remove o slow de movimento de um Raze recente ao ativar.
- como jogar: não pare 2+ ilusões enfileiradas na frente dele antes do seu Manta. Espalhe a rota em 2-3 camps ao mesmo tempo pra que um Requiem, se vier, pegue no máximo 1-2 corpos.
- fonte: pro_dados/phantom_lancer.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem); aghs_desc; guia do herói no Dota Hub (phantom_lancer)

## Contra Snapfire (snapfire)
- placar: 32 vitórias em 86 partidas de pro (37,2%). 2º maior volume de jogos contra o PL.
- por que importa: suporte/mid de roaming muito escolhido no 7.41 (ficha local: 28,9-38,4% dos jogos dela como suporte, 23,8% como mid nos times Tier 1 analisados), rotaciona tanto perto da sua lane quanto atrás de você na jungle.
- janelas: Firesnap Cookie (pulo + stun) ameaça desde o nível 1; a ultimate Mortimer Kisses (nível 6+, 8 projéteis de 180-360 de dano cada, raio de impacto 275) vira moeda de troca contra grupo de ilusões já a partir dos 7-10 min, bem na época do seu próprio nível 6. Depois do seu Manta, o dispel ao ativar remove o slow do Scatterblast e do chão em chamas.
- o que ela faz com você: Mortimer Kisses solta 8 impactos de 275 de raio cada com chão pegando fogo por 3,5s (60-100 de queimadura): qualquer grupo de ilusões parado na área toma dano repetido. Scatterblast à queima-roupa (dentro de 450) ganha +30% de dano e 100% de lentidão de movimento/ataque por 1s.
- o que você faz com ela: Mortimer Kisses tem alcance mínimo de 600 e tempo de voo de até 2s, dá pra ver vindo e espalhar antes do impacto. O dispel do Manta tira o slow do Scatterblast ao ativar, mas não desfaz um stun do Firesnap já aplicado antes.
- itens que viram: o Shard dela (Firesnap Cookie cura e lança um kiss extra com 40% de impacto) e o Scepter (Spit Out, estuna em área ao cuspir o alvo) chegam perto dos 16-20 min no pro (aghanims_shard dela mediano 16,9 min, pro_dados snapfire.json), coincidindo com o seu Manta: a partir daí ela caça com mais segurança, sozinha ou em grupo.
- como jogar: trate a ameaça dela como AoE o tempo todo. Depois do nível 6, nunca deixe 2+ ilusões paradas no mesmo ponto; use o Phantom Rush pra sair da área assim que o lob do Mortimer começar a subir.
- fonte: pro_dados/snapfire.json; ficha do herói no Dota Hub (snapfire); constants_abilities.json (snapfire_mortimer_kisses, snapfire_scatterblast); aghs_desc

## Contra Ogre Magi (ogre_magi)
- placar: 31 vitórias em 71 partidas de pro (43,7%).
- por que importa: suporte pos5 mais comum do 7.41 pra ele (ficha local: 54,7% dos jogos dele são pos5, 1.805 de 3.300), é quem acelera (Bloodlust) e trava (Fireblast) o carry que luta contra você, mesmo sem aparecer na sua lane.
- janelas: ele não acelera sua rota direto, mas acelera a do carry inimigo que te enfrenta. Desde o nível 1, Fireblast (525 de alcance, 1,2s de stun, 70-250 de dano) ameaça interromper um camp; a partir do nível 6 dele, Multicast (chance cresce 1% a cada 16 de Força) pode repetir qualquer feitiço de graça. Seu Manta não desfaz um Fireblast já aplicado.
- o que ele faz com você: Fireblast é alvo único, não pega grupo de ilusões; Ignite (AoE só quando multicasta, raio 1.400, queima 20-50 + lentidão de 25% por 5-8s) só vira ameaça de área se ele recastar perto de várias ilusões coladas.
- o que você faz com ele: ele não tem ferramenta própria pra limpar ilusão espalhada. Farme disperso e o combo dele nunca "varre" seu grupo de imagens de uma vez.
- itens que viram: o Scepter dele (Unrefined Fireblast, 150 + 1,5x Força, continua alvo único) não muda o padrão; o Shard (Fire Shield num aliado) é defensivo, não ofensivo contra você.
- como jogar: ele é perigoso pro seu suporte na troca, não pra sua rota de jungle sozinha. Siga a rota normal e preste atenção no combo dele só quando o carry inimigo entrar em luta direta com você.
- fonte: pro_dados/ogre_magi.json; ficha do herói no Dota Hub (ogre_magi); constants_abilities.json (ogre_magi_fireblast, ogre_magi_ignite); aghs_desc

## Contra Mars (mars)
- placar: 40 vitórias em 70 partidas de pro (57,1%). Bate com a vantagem ajustada de +4,2pp que o guia do PL calcula pro Divine+ (phantom_lancer.json).
- por que importa: offlaner quase exclusivo do 7.41 (ficha local: 30 de 30 picks em pos3 no recorte Tier 1 analisado), é quem segura sua rota no início e quem inicia contra você depois.
- janelas: até o seu nível 6 ele pressiona com Spear of Mars e Bulwark; a partir do seu nível 6 (7:53) e Yasha (10:00) você já farma mais rápido do que ele consegue punir sozinho. Arena of Blood (raio 550, 14 lanças de 80-240 de dano cada, 1 por segundo) só machuca quem fica parado dentro dela.
- o que ele faz com você: Spear of Mars é um projétil que para no PRIMEIRO alvo que acerta: se uma ilusão estiver na frente, ela absorve o stun no seu lugar. As lanças da Arena nascem da parede pra dentro; ilusão espalhada fora do raio de 550 não sofre nada.
- o que você faz com ele: deixe sempre uma ilusão na frente contra o Spear. Fora da Arena, ele não tem resposta nenhuma pra farm espalhado pelo mapa.
- itens que viram: o Shard dele (Spear agora empala até 2 heróis e deixa rastro de fogo) reduz o truque da "ilusão na frente", porque pode atravessar o primeiro corpo e pegar o PL real atrás; chega por volta dos 18-22 min no pro (aghanims_shard dele mediano 21,5 min, pro_dados mars.json), perto do seu próprio Aghanim's Scepter (20:30-21:30).
- como jogar: antes do Shard dele, ande com uma ilusão na frente em qualquer troca. Depois que ele tiver o item, o Spear pode furar 2 corpos: use o alcance maior do seu Rush com Scepter pra manter distância em vez de confiar só no bloqueio.
- fonte: pro_dados/mars.json; ficha do herói no Dota Hub (mars); constants_abilities.json (mars_arena_of_blood); aghs_desc; guia do herói no Dota Hub (phantom_lancer)

## Contra Tusk (tusk)
- placar: 30 vitórias em 69 partidas de pro (43,5%).
- por que importa: suporte de roaming quase puro no 7.41 (ficha local: 79 jogos pos4, 54 pos5, nenhum em pos1/2/3) com farm muito baixo (352 ouro/min, 1,6 last hit/min mediano): ele não compete por recursos com você, ele caça.
- janelas: Snowball (alcance de cast 1.150, velocidade 575-650) acha você sozinho na jungle a qualquer minuto desde o nível 1; o combo Snowball + Walrus Kick (550 de dano fixo, empurra 1.200) é possível cedo. Depois do seu Manta (14:30+), o dispel ao ativar não desfaz um empurrão em andamento, mas evita ficar preso de novo no próximo.
- o que ele faz com você: Walrus Kick é bkbpierce (250 de alcance de cast, empurra 1.200); sem Scepter é só o alvo que recebe o dano e o stun. Tag Team soma dano físico por 6s em quem o time ataca depois que ele prender você.
- o que você faz com ele: Phantom Rush (toggle, 800 de velocidade) ganha do Snowball se você reagir a tempo (visão à noite é curta, preste atenção no som da bola rolando). Sem Scepter, uma ilusão na frente também protege o corpo real do Kick.
- itens que viram: o Shard dele (Drinking Buddies, puxa um aliado) é pra sustentar o time em luta, não muda o duelo direto; o Scepter faz o Walrus Kick acertar todos os heróis num raio de 250 do ponto de aterrissagem, não só o alvo (aghs_desc).
- como jogar: trate toda rotação vinda de longe como possível Tusk. Antes do nível 6 fique perto da sua wave; depois, mantenha Doppelganger disponível sempre que for pra um camp isolado, principalmente à noite.
- fonte: pro_dados/tusk.json; ficha do herói no Dota Hub (tusk); constants_abilities.json (tusk_walrus_kick, tusk_snowball); aghs_desc

## Contra Rubick (rubick)
- placar: 26 vitórias em 65 partidas de pro (40,0%).
- por que importa: suporte pos4 quase exclusivo no 7.41 (ficha local: 215 de 239 picks em pos4, 90%), rouba a ÚLTIMA magia lançada por qualquer inimigo visível, incluindo a sua.
- janelas: ele ameaça do nível 6 em diante (Telekinesis, 550-625 de alcance de cast, raio de queda 300-375) pegando você fora de posição; Spell Steal (recarga 16/10/4s, fura BKB) rouba Doppelganger ou Manta se você usar primeiro perto dele. Depois do seu Aghanim's (20:30+), ele pode roubar o Phantom Rush com alcance se você castar perto.
- o que ele faz com você: Telekinesis levanta e estuna (0,9-1,5s) tudo dentro de 300-375 de raio de onde o alvo cai: se suas ilusões estiverem coladas, todas tomam o controle junto; Fade Bolt salta entre alvos reduzindo ataque/dano mágico de cada um que acerta.
- o que você faz com ele: não gaste sua melhor magia perto dele sem necessidade; ele lança a própria ultimate em média 16,6 vezes por partida (fonte: ficha do herói), então costuma estar sem munição de Spell Steal guardada pra você. Telekinesis não fura BKB.
- itens que viram: o Scepter dele (rouba 2 magias e upgrada pra versão Scepter) dobra o risco de perder Doppelganger e Manta pro mesmo Rubick; evite castar os dois seguidos perto dele depois que ele tiver o item.
- como jogar: mantenha distância do alcance de conjuração dele (Arcane Supremacy soma até +240 de alcance com o nível) antes de ativar Doppelganger ou Manta em luta. Se ele gastar a própria ultimate primeiro, suas magias ficam seguras até a recarga dele liberar de novo.
- fonte: pro_dados/rubick.json; ficha do herói no Dota Hub (rubick); constants_abilities.json (rubick_telekinesis); aghs_desc

## Contra Spirit Breaker (spirit_breaker)
- placar: 16 vitórias em 43 partidas de pro (37,2%), parece desvantagem clara. O guia do PL qualifica isso: no Divine+ ajustado pela força do herói, Spirit Breaker fica neutro (-0,7 a -1,3pp), não é counter real, é só um herói forte (fonte: guia do herói no Dota Hub, phantom_lancer.json).
- por que importa: suporte de roaming puro no 7.41 (ficha local: só aparece em pos4 no recorte de pro) com Charge of Darkness global: ele te acha sozinho na jungle de qualquer ponto do mapa, mesmo sem lanear com você.
- janelas: o perigo começa assim que ele tem Charge disponível, desde o nível 1. Seu nível 6 chega em média aos 7:53, dentro da "noite 1" (5:00-10:00) que o próprio guia do PL aponta como janela de risco pra rotação com stun. Depois do seu Manta (14:30+), o dispel não ajuda contra Greater Bash (passivo, bkbpierce) nem contra um Charge já em andamento.
- o que ele faz com você: Greater Bash é passivo (17% de chance por ataque, bkbpierce, 0,9-1,5s de stun com empurrão): cada ataque normal dele pode te travar de novo. Charge of Darkness (velocidade crescente até 425, raio de bash de 300 na chegada) te acha onde você estiver.
- o que você faz com ele: ele tem pouco dano de magia fora do combo físico; Doppelganger te tira do alcance de Nether Strike (700, bkbpierce, 150-350 de dano) se usado a tempo. Ele persegue um alvo por vez, sem resposta pra ilusão espalhada.
- itens que viram: o Shard dele (Planar Pocket, redireciona magias de alvo único dele pra ele mesmo) pode desviar seu Spirit Lance se ele ficar marcado. Sem dado de pro confiável pro timing exato do Shard dele (pro_dados spirit_breaker.json não tem esse item na amostra).
- como jogar: sempre deixe Doppelganger disponível quando for farmar um camp isolado. Se ele vier com Charge, fugir é melhor do que lutar corpo a corpo contra o bash bkbpierce.
- fonte: pro_dados/spirit_breaker.json; ficha do herói no Dota Hub (spirit_breaker); constants_abilities.json (spirit_breaker_charge_of_darkness, spirit_breaker_greater_bash, spirit_breaker_nether_strike); aghs_desc; guia do herói no Dota Hub (phantom_lancer)

## Contra Queen of Pain (queenofpain)
- placar: 20 vitórias em 61 partidas de pro (32,8%), o pior retrospecto da lista com amostra relevante.
- por que importa: mid quase exclusiva no 7.41 (ficha local: 78,7% das partidas dela são mid, 93% dos picks de pro em pos2), não divide lane com você, mas o burst dela atravessa qualquer grupo de ilusões em luta.
- janelas: ela farma rápido de bottle (1,6 min mediano) e Blink cedo; o primeiro pico forte chega com Kaya (13,9 min no pro, pro_dados queenofpain.json), bem no meio da sua janela pro Manta (14:30-15:30). Depois disso, Sonic Wave (dano puro, atravessa BKB) e Scream of Pain seguem fortes o jogo inteiro.
- o que ela faz com você: Sonic Wave (raio inicial 100 crescendo até 450, viaja 900 de distância, 325-625 de dano puro) atravessa qualquer grupo de ilusões no caminho e ignora Black King Bar; Scream of Pain (raio 600 ao redor dela, 90-345 de dano) limpa quem estiver perto dela em luta.
- o que você faz com ela: dano puro não é reduzido por armadura, então evasão (Butterfly) não ajuda aqui. O jeito é não agrupar ilusões na frente dela em teamfight e usar o Phantom Rush pra fechar distância rápido antes dela soltar o combo de 700-900 de alcance.
- itens que viram: o Shard dela (explosão sônica no blink, 125 de dano em 300 de raio + silêncio de 1,75s nos dois pontos do blink) vira outra fonte de área pra limpar ilusões; chega perto dos 16-18 min no pro.
- como jogar: evite lutar perto dela antes do seu Manta/Aghanim's. Depois dos 20 min, puxe ela pra fora do alcance de Sonic Wave antes de abrir as ilusões; o dano puro é a única coisa no kit dela que seu dispel não resolve.
- fonte: pro_dados/queenofpain.json; ficha do herói no Dota Hub (queenofpain); constants_abilities.json (queenofpain_sonic_wave, queenofpain_scream_of_pain); aghs_desc

## Contra Terrorblade (terrorblade)
- placar: 21 vitórias em 41 partidas de pro (51,2%, praticamente parelho). O guia do PL lista o Terrorblade como confronto favorável pro PL, vantagem ajustada de +4,7pp no Divine+ 7.41f (app/public/data/herois/phantom_lancer.json), e o guia do Terrorblade confirma o Phantom Lancer na própria lista de counters reais dele: ele entra num grupo de 12 heróis (Dark Seer, Axe, Warlock, Brewmaster, PL, Winter Wyvern, Phoenix, Keeper of the Light, Techies, Tinker, Lich, Primal Beast) cuja presença no time inimigo custa -3 a -6pp pro TB, mas esse intervalo é do grupo inteiro, não um número isolado do PL (app/public/data/herois/terrorblade.json).
- por que importa: é o confronto carry-contra-carry mais jogado da lista, mesmo sem dividir lane (os dois vão de safelane, em lados opostos do mapa). É exatamente o tipo de duelo pedido: dois heróis de farm por ilusão, nenhum com limpeza de área própria, decidido por quem escala mais rápido.
- janelas: a rota de jungle dele abre no nível 6 (~7:30 no pro), quase junto com a sua (7:53). Yasha dele sai aos 11,5 min; Manta dele aos 15,0; Dragon Lance aos 20,0. Até os 25 min ele vence 61-64% das partidas (guia do Terrorblade), caindo pra 47,5% aos 30-35 e 44-45% aos 45-55: você fica mais forte justo quando ele cai.
- o que ele faz com você: Metamorphosis (35-50s, vira ranged com +300-450 de alcance e +20-80 de dano) é o pico de luta dele, batendo à distância sem seu Doppelganger quebrar linha de visão com facilidade. As ilusões dele (Conjure Image) causam 25-40% do dano dele cada mas tomam 250% de dano recebido, mais frágeis que o padrão.
- o que você faz com ele: fora da Metamorphosis ele é corpo a corpo como você, sem AoE pra limpar suas ilusões; se ele ainda não tiver Manta e você já tiver, você tem mais corpos na troca. Juxtapose não se importa com o alcance dele, só com a quantidade de ilusões vivas.
- itens que viram: o Scepter dele (Terror Wave, medo em todas as direções + Metamorphosis grátis) é a resposta dele contra grupo de ilusões, mas chega tarde. Seu Butterfly ajuda só quando ele está fora da Metamorphosis, já que virando ranged a evasão corpo a corpo não se aplica igual.
- como jogar: force trocas antes da Metamorphosis dele estar disponível de novo e antes dele ter Manta. Depois dos 25-30 min, jogue pelo jogo longo: é aí que a curva vira a seu favor.
- fonte: pro_dados/terrorblade.json; guia do herói no Dota Hub (terrorblade); constants_abilities.json (terrorblade_metamorphosis, terrorblade_conjure_image); aghs_desc; guia do herói no Dota Hub (phantom_lancer)

## Contra Sven (sven)
- placar: 19 vitórias em 38 partidas de pro (50,0%, parelho). Mas o guia do PL aponta Sven como o 2º maior counter ajustado no Divine+ (-4,9pp), por causa do Great Cleave: vale ficar de olho mesmo com o retrospecto de pro parelho.
- por que importa: carry pos1 puro no 7.41, pico de força entre 12 e 45 min (66% de vitória em pro entre 25-35 min, 65% entre 35-45, guia do Sven), e é o único carry da lista com cone de dano em área no kit básico.
- janelas: o degrau dele começa no nível 5 (6:10, Great Cleave 3/4) junto com Power Treads (5:50 mediano pro); nível 6 (7:30, God's Strength) e Mask of Madness (9:40) abrem a jungle dele. LH/min mediano pro: 6 até o 6, 8 no 7, 11 no 8, 13 no 10. Até aí vocês dois sobem de nível em ritmo parecido (seu nível 6 é 7:53). Do seu Manta (14:30+) até o BKB dele (21:46 mediano), é a janela mais perigosa pra você: ele já cleava forte e você ainda não tem Aghanim's.
- o que ele faz com você: Great Cleave (60-90% do dano do ataque, cone de 400-700 de alcance e 150-360 de largura) acerta TODAS as ilusões na frente dele a cada ataque; God's Strength (110-190% de dano bônus por 30s) multiplica esse cleave. É a explicação mecânica direta do -4,9pp do guia.
- o que você faz com ele: ele não tem disable em área nem fuga rápida fora do Storm Hammer (600 de alcance, stun 1-1,6s em raio 250-310, NÃO fura BKB). Espalhando as ilusões em vez de agrupar na frente dele, o cone de cleave só pega 1-2 por vez.
- itens que viram: o Scepter dele (Storm Hammer com mais alcance e dispel básico no alvo, modo alt viaja junto) pode tirar seu Manta ativo; chega tarde no plano de itens dele (prioriza Echo Sabre, Blink, BKB antes). Seu Butterfly ajuda pouco contra o cleave, porque é dano em área, não dano único.
- como jogar: nunca pare um grupo de ilusões de frente pra ele parado. Prefira trocar em ângulo ou puxando ele pra uma ilusão isolada, deixando o resto da rota de farm longe do cone.
- fonte: pro_dados/sven.json; guia do herói no Dota Hub (sven); constants_abilities.json (sven_great_cleave, sven_gods_strength, sven_storm_bolt); aghs_desc; guia do herói no Dota Hub (phantom_lancer)

## Contra Templar Assassin (templar_assassin)
- placar: 20 vitórias em 34 partidas de pro (58,8%), confirmando a vantagem ajustada de +4,3pp do guia do PL (phantom_lancer.json).
- por que importa: carry pos1 de burst no 7.41, mas sem nenhuma ferramenta de área. É o tipo de duelo carry-contra-carry que o pedido original cita: cada um puxando pro seu lado do mapa, sem compartilhar lane.
- janelas: o gatilho de jungle dela é o nível 4 com Meld 2 + Psi Blades 2 (build mais jogada no 7000+, 47,5% de vitória, guia da TA), junto com Power Treads (5,0 min numa referência de elite). Seu nível 6 (7:53) chega um pouco depois do gatilho dela, mas o seu Yasha (10:00) e Manta (14:30-15:30) seguem o cronograma normal enquanto ela ainda está indo pro BKB (21,4 min de referência de elite).
- o que ela faz com você: Refraction dá 3-6 cargas que bloqueiam dano e somam 15-60 de dano no próximo ataque dela, mas cada carga só gasta contra UM alvo que bate nela, não limpa grupo. Psionic Trap (raio 400 por armadilha, até 5-11 armadilhas) reduz sua velocidade de movimento em 20-50% se você pisar em cima.
- o que você faz com ela: sem AoE, ela mata uma ilusão de cada vez; mande a ilusão mais fraca na frente e deixe ela gastar Refraction nela antes de engajar com o corpo real. Meld (invisibilidade + bônus de dano no próximo golpe) é a única surpresa real do kit; o Phantom Rush com 20% de evasão ajuda a sobreviver ao primeiro ataque.
- itens que viram: o Shard dela (Refraction castável enquanto desabilitada, mais dano bônus) remove a brecha de castar Spirit Lance como abertura contra ela. O Scepter dela (armadilhas agora silenciam) impede você de castar Doppelganger se pisar numa trap ativa.
- como jogar: gaste as cargas de Refraction dela com uma ilusão barata antes de entrar com o corpo real. Evite pisar em área suspeita de armadilha perto dos itens dela; o Psionic Trap sai tarde, mas vira zona de contenção quando sai.
- fonte: pro_dados/templar_assassin.json; guia do herói no Dota Hub (templar_assassin); constants_abilities.json (templar_assassin_refraction, templar_assassin_psionic_trap); aghs_desc; guia do herói no Dota Hub (phantom_lancer)

## Contra Drow Ranger (drow_ranger)
- placar: 19 vitórias em 33 partidas de pro (57,6%). O próprio guia da Drow Ranger lista Phantom Lancer entre os heróis que tornam o pick dela ruim de escolher ("sem Earth Spirit, Dark Seer, Zeus, Phantom Lancer ou Spectre", app/public/data/herois/drow_ranger.json), confirmando a vantagem do lado de cá.
- por que importa: carry pos1 quase exclusiva no pro (22 de 22 picks dos pros analisados foram pos1, nunca mid), outro duelo carry-contra-carry direto, com motivo mecânico claro: Marksmanship.
- janelas: ela ganha a lane cedo (+3,8% de ouro aos 10 min, guia da Drow), mas o 7.41e cortou o Multishot (dano de 100-160% pra 80-140%, alcance reduzido) na época em que a vantagem dela devia aparecer. Seu nível 6 e Yasha seguem o cronograma normal; a partir do seu Manta (14:30+) você tem corpo suficiente pra ficar perto dela o jogo inteiro.
- o que ela faz com você: Multishot é canalizado (1,75s, cone com 1,75x o alcance normal) e pode acertar várias ilusões enfileiradas; Gust (silêncio de 3-6s + empurrão) trava o PL real se acertar, mas é alvo único.
- o que você faz com ela: Marksmanship (30-40% de chance, +50-90 de dano) DESLIGA a até 325 de distância de qualquer herói inimigo. Encostar com qualquer ilusão a menos de 325 dela já derruba metade do DPS que o kit dela promete.
- itens que viram: o Shard dela (Glacier, terreno elevado com alcance e dano bônus pra quem está em cima, empurra quem está embaixo) é a resposta dela pro problema do Marksmanship: reabre distância sozinha. Antes desse item ela não tem jeito de se afastar de novo depois que você fecha o espaço.
- como jogar: force distância curta sempre que puder, com ilusão ou com o corpo real, antes dela comprar o Shard. Depois que ela tiver o Glacier, evite ficar embaixo do morro: ela ganha dano extra batendo de cima.
- fonte: pro_dados/drow_ranger.json; guia do herói no Dota Hub (drow_ranger); constants_abilities.json (drow_ranger_marksmanship, drow_ranger_multishot); aghs_desc

## Contra Ursa (ursa)
- placar: 14 vitórias em 37 partidas de pro (37,8%).
- por que importa: pick quase exclusivo de counter-pick no 7.41 (ficha local: pick médio 4,2 de 5 fases no draft analisado da NAVI, 67% de vitória nesses jogos). Times escolhem Ursa tarde no draft justamente pra caçar o carry inimigo, e PL é um alvo clássico pra esse plano.
- janelas: ele precisa igualar farm até o nível 6, quando Overpower libera o kit de duelo single-target; depois disso, Enrage (dispel + 80% de redução de dano) o deixa resistente ao seu kit de controle por 4-5s. Ele busca a primeira luta decisiva assim que tiver Blink pronto (mediano pro 16,8 min, pro_dados ursa.json).
- o que ele faz com você: Earthshock (raio 385, instantâneo, 22-40% de lentidão) é o único pedaço de área do kit básico dele e pega qualquer ilusão perto; Overpower (3-6 ataques com +400% de velocidade de ataque) é feito pra explodir UM corpo rápido, então ele busca identificar e focar o PL real.
- o que você faz com ele: Enrage dura só 4-5s e tem recarga alta sem Scepter; aguentando essa janela com ilusões repondo dano, ele fica exposto depois. Doppelganger desvia o primeiro ataque de um Overpower se usado a tempo (o dispel ocorre no reaparecimento).
- itens que viram: o Shard dele (Earthshock agora aplica 3 stacks de Fury Swipes nos atingidos) transforma o Earthshock de slow fraco em dano crescente contra grupo: depois que ele tiver isso, parar ilusões juntas fica bem mais caro. O Scepter dele (Enrage com recarga menor, usável enquanto desabilitado) tira quase toda a sua janela de controle sobre ele.
- como jogar: evite ficar parado perto dele sem Manta pronto (o dispel ajuda contra o que ele aplicar antes do Enrage). Depois que ele tiver o Shard, trate Earthshock como área de verdade e não agrupe ilusões perto dele.
- fonte: pro_dados/ursa.json; ficha do herói no Dota Hub (ursa); constants_abilities.json (ursa_earthshock, ursa_overpower, ursa_enrage); aghs_desc

## Contra Slardar (slardar)
- placar: 34 vitórias em 54 partidas de pro (63,0%), a maior amostra entre as vantagens da lista e consistente com os +3,2pp ajustados do guia do PL.
- por que importa: offlaner principal no 7.41 (ficha local: 84 picks pos3 contra 41 pos2, 61,9% de vitória na pos3), segura sua rota de lane direto, mesmo perdendo espaço depois.
- janelas: ele inicia rápido (Guardian Sprint fecha distância, Blink mediano aos 13,3 min no pro), mas o stack de Bash (35-200 de dano bônus + 1s de stun a cada 3º ataque, bkbpierce) só funciona se ele conseguir bater em VOCÊ, não em ilusões aleatórias. A partir do seu nível 6/Yasha, você já tem corpo suficiente pra absorver os ataques dele com ilusões.
- o que ele faz com você: Bash of the Deep é bkbpierce e ativa a cada 3 ataques reais, não importa se ele erra o alvo nas trocas; Corrosive Haze reduz armadura e revela invisibilidade, útil contra o seu Aghanim's Shard (invisibilidade de 8s) se ele te acertar antes de você sumir.
- o que você faz com ele: ele não tem nenhuma ferramenta de área, toda ameaça dele é single-target. Ande sempre com 2+ ilusões ativas perto dele pra "gastar" os ataques dele em corpos que não importam.
- itens que viram: o Shard dele (Slithereen Crush agora também aplica Corrosive Haze) soma redução de armadura ao stun inicial, mas continua preso ao alvo único que ele acertar primeiro com o stun. Seu Butterfly ajuda contra os ataques normais dele, já que ele não tem true strike.
- como jogar: deixe uma ilusão "de escudo" sempre que ele tiver Blink pronto (13 min+). Fora da offlane direta ele raramente te acha sozinho, sem gap closer de longo alcance, então a rota de farm corre tranquila.
- fonte: pro_dados/slardar.json; ficha do herói no Dota Hub (slardar); constants_abilities.json (slardar_bash); aghs_desc; guia do herói no Dota Hub (phantom_lancer)
