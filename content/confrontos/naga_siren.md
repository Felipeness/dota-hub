---
id: confrontos-naga_siren
heroi: Naga Siren
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/naga_siren.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/disruptor.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/puck.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/gyrocopter.json
- dota-hub-conteudo-novo/pro_dados/ursa.json
- dota-hub-conteudo-novo/pro_dados/terrorblade.json
- dota-hub-conteudo-novo/pro_dados/night_stalker.json
- dota-hub-conteudo-novo/pro_dados/void_spirit.json
- dota-hub-conteudo-novo/pro_dados/pudge.json
- dota-hub-conteudo-novo/pro_dados/queenofpain.json
- dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- dota-hub-conteudo-novo/pro_dados/morphling.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://dota2.fandom.com/wiki/Disable
---

## Contra Tusk (tusk)
- placar: Naga Siren venceu 45 de 79 partidas de pro (57,0%). Fonte: pro_dados/naga_siren.json (confrontos).
- por que importa: é o oponente com mais jogos contra ela no banco de pro (79), o mais comum de toda a lista. Tusk entra no draft como resposta de iniciação pra quem farma sozinho em duas rotas.
- janelas: até os 6:06 nenhum dos dois tem item de spike (ela só com Power Treads, mediana 6:06, pro_dados/naga_siren.json); dos 6 aos 19min é a janela perigosa pra ela, Tusk ainda sem Blink (mediana 19:00, pro_dados/tusk.json) mas já pode fechar Ice Shards + Snowball numa lane isolada; depois dos 14:36 ela tem Manta pra dividir farm em duas frentes e ficar difícil de pegar sozinha; dos 19min em diante, com Blink pronto, Tusk ganha alcance de iniciação, mas ela já está com Orchid (18:12) pra silenciar quem tenta prendê-la.
- o que ele faz com você: Ice Shards (constants_abilities.json: tusk_ice_shards) cria uma parede de 200 de raio que trava rota de fuga por até 7s; Snowball (tusk_snowball) soma dano e stun por aliado dentro da bola, ótimo pra fechar o combo em cima de quem está puxando farm sozinha longe do time; Walrus PUNCH! (tusk_walrus_punch, crítico de 200 a 300% com +60 a 120 de dano bônus) atravessa Black King Bar (bkbpierce: Yes) e pode te matar rápido se pegar isolada e sem vida.
- o que você faz com ele: Mirror Image multiplica alvos, então o combo de Tusk precisa escolher qual Naga é a real antes do Ensnare (naga_siren_ensnare, trava movimento e blink) virar Reel In (naga_siren_reel_in, puxa 1600 de raio quem está enredado) pra você fechar a luta antes dele; Rip Tide (passiva, dano bônus e redução de armadura a cada 6 ataques) ajuda a sangrar a vida dele numa troca direta.
- itens que viram: Orchid Malevolence dela (18:12, pro_dados/naga_siren.json) silencia Tusk antes do combo de CC dele sair; o Scepter dela (naga_siren_ensnare) aumenta alcance e velocidade do projétil e aplica Break no alvo, ótimo pra travar e desarmar ele antes do Walrus PUNCH!.
- como jogar: evite farmar sozinha perto de onde o time dele pode rotacionar antes dos 19min, quando o Blink dele ainda não saiu; depois que ela tem Manta e Orchid, a Song of the Siren (raio de 900 a 1400 conforme o nível, naga_siren_song_of_the_siren) te tira do alcance do combo até ele recarregar o Snowball.
- fonte: pro_dados/naga_siren.json; pro_dados/tusk.json; constants_abilities.json (naga_siren_ensnare, naga_siren_reel_in, naga_siren_rip_tide, naga_siren_song_of_the_siren, tusk_ice_shards, tusk_snowball, tusk_walrus_punch); constants_hero_abilities.json; https://api.opendota.com/api/constants/aghs_desc.

## Contra Snapfire (snapfire)
- placar: Naga Siren venceu 36 de 76 (47,4%). Fonte: pro_dados/naga_siren.json.
- por que importa: 2º oponente com mais jogos contra ela (76) e uma das poucas desvantagens dela entre os picks mais comuns, mesmo com amostra grande.
- janelas: dos 10:36 aos 16:54 Snapfire já tem Arcane Boots (10:36) e logo depois o Aghanim's Shard (16:54, ambos pro_dados/snapfire.json), bem antes do Manta dela (14:36) consolidar o split push; é a pior janela pra Naga, porque Lil' Shredder já alcança e limpa clone sem gastar feitiço. Depois dos 20:42, quando Snapfire tem Blink, ela ainda ataca de longe; a resposta de Naga é não agrupar os clones no raio de ataque de Snapfire e usar o Orchid (18:12) pra calar antes do combo dela sair.
- o que ele faz com você: Lil' Shredder (snapfire_lil_shredder) é modificador de ataque, não feitiço, então Black King Bar não bloqueia: 5 ataques turbinados que derrubam armadura a cada acerto, e como os clones da Mirror Image tomam 350% do dano recebido (naga_siren_mirror_image), eles morrem em 1 ou 2 desses ataques; Mortimer Kisses (snapfire_mortimer_kisses) lança 8 globos de até 360 de dano em 5,5s numa área de 275 de raio, suficiente pra acertar vários clones agrupados de uma vez.
- o que você faz com ele: Ensnare trava Snapfire no lugar antes dela conseguir se afastar pra lançar Mortimer Kisses à distância segura; Rip Tide reduz a armadura dela a cada 6 ataques, o que acelera a troca direta se ela ficar perto o bastante pra usar Scatterblast.
- itens que viram: como Lil' Shredder é físico, Black King Bar da Naga não resolve; o jeito de neutralizar é não deixar os clones parados no raio dela e usar Song of the Siren pra travar o combo dela no meio da sequência (a stase impede qualquer ação, incluindo os 5 ataques do Shredder já em andamento contra você, mas não contra clones fora do raio).
- como jogar: depois dos 17min, quando ela já tem Shard, não force teamfight agrupando as duas imagens perto da Snapfire; prefira farmar em rotas separadas e só juntar os clones pra golpe de torre quando ela estiver visivelmente fora de alcance.
- fonte: pro_dados/naga_siren.json; pro_dados/snapfire.json; constants_abilities.json (naga_siren_mirror_image, naga_siren_ensnare, naga_siren_rip_tide, naga_siren_song_of_the_siren, snapfire_lil_shredder, snapfire_mortimer_kisses).

## Contra Disruptor (disruptor)
- placar: Naga Siren venceu 40 de 74 (54,1%). Fonte: pro_dados/naga_siren.json.
- por que importa: 3º oponente com mais jogos contra ela (74), suporte clássico de "trava e pune quem joga sozinho no mapa".
- janelas: dos 11:24 (Arcane Boots, pro_dados/disruptor.json) aos 20min Disruptor já tem mana pra Kinetic Field e Glimpse em qualquer troca de rota; o Manta dela (14:36) ajuda a sobreviver perdendo só um clone se ele acertar Glimpse. Depois dos 20min, quando o Static Storm (recarga 100 a 70s) já está disponível desde o nível 6, qualquer agrupamento de clones dentro dos 550 de raio queima rápido.
- o que ele faz com você: Glimpse (disruptor_glimpse) teleporta o alvo pra onde estava 4s atrás e mata ilusões instantaneamente (texto oficial: "Instantly kills illusions"), desfazendo de graça o split push que você acabou de iniciar; Kinetic Field (disruptor_kinetic_field) cria uma parede redonda de 350 de raio que te prende numa área fechada por até 4,4s; Static Storm (disruptor_static_storm) silencia e aplica dano crescente (até 350 por segundo) em área, mas nenhuma das três atravessa Black King Bar (bkbpierce: No nas três).
- o que você faz com ele: Ensnare trava ele parado antes de conseguir reposicionar com Glimpse em si mesmo; se ele gastar o Glimpse só pra matar um clone, isso já é lucro pra você, porque o clone custava menos que a recarga de 18 a 24s que ele perdeu.
- itens que viram: Black King Bar (situacional, fora do top 30 itens dela em pro_dados/naga_siren.json, ou seja raramente comprada, mas decisiva aqui) bloqueia Kinetic Field, Static Storm e o dano do Glimpse de uma vez; se Disruptor tem Scepter (disruptor_static_storm, aghs_desc: "Mutes items"), ele desliga seu Black King Bar e seu TP Scroll dentro da própria Static Storm, então o combo tem que ser evitado antes de começar, não durante.
- como jogar: não entre no alcance de 900 de Kinetic Field sem saber se ele já gastou o combo; se tiver Scepter, trate a Static Storm como zona proibida total, porque você não consegue reagir com item lá dentro.
- fonte: pro_dados/naga_siren.json; pro_dados/disruptor.json; constants_abilities.json (naga_siren_ensnare, disruptor_glimpse, disruptor_kinetic_field, disruptor_static_storm); https://api.opendota.com/api/constants/aghs_desc.

## Contra Jakiro (jakiro)
- placar: Naga Siren venceu 37 de 66 (56,1%). Fonte: pro_dados/naga_siren.json.
- por que importa: 4º oponente com mais jogos contra ela (66), suporte de área que vive de queimar grupo.
- janelas: dos 11:42 (Arcane Boots, pro_dados/jakiro.json) até o nível 6 dele (recarga de Macropyre 90 a 70s), Jakiro ainda não tem o ultimate pronto, então a melhor hora pra splitar é antes disso; depois que ele tem Macropyre disponível, qualquer momento em que os clones ficam parados numa rota virando torre é risco. Pelo lado dela, o Orchid (18:12) silencia antes do combo de Dual Breath + Macropyre sair.
- o que ele faz com você: Macropyre (jakiro_macropyre) é uma linha de 500 de largura que causa 100 a 200 de dano por segundo durante 10s, dano mágico que não atravessa Black King Bar; como os clones tomam 350% de qualquer dano, uma passada de Macropyre limpa um grupo de ilusões parado em cima da linha quase de imediato; Dual Breath (jakiro_dual_breath) desacelera 25 a 40% de movimento e ataque antes disso, prendendo você no fogo.
- o que você faz com ele: Ensnare interrompe o cast dele a qualquer momento, inclusive durante o Macropyre, e Rip Tide reduz a armadura dele numa troca de ataque direta, já que Jakiro tem pouca vida pra suporte.
- itens que viram: Black King Bar bloqueia o dano e o slow de Dual Breath e Ice Path, mas não ajuda os clones; se Jakiro tem Scepter (jakiro_macropyre, aghs_desc: Macropyre passa a causar dano Puro e ganha paredes de gelo que desaceleram 60% quem tenta atravessar), o combo vira inescapável mesmo pra você com BKB, porque dano Puro ignora a resistência mágica do item; evite esse confronto depois que ele tiver Scepter sem abrir com Song of the Siren primeiro.
- como jogar: puxe farm fora da linha de visão dele antes do nível 6; depois disso, não deixe os dois clones e você alinhados na mesma rota reta, porque é exatamente o formato que o Macropyre precisa.
- fonte: pro_dados/naga_siren.json; pro_dados/jakiro.json; constants_abilities.json (naga_siren_ensnare, naga_siren_rip_tide, jakiro_macropyre, jakiro_dual_breath); https://api.opendota.com/api/constants/aghs_desc.

## Contra Puck (puck)
- placar: Naga Siren venceu 37 de 57 (64,9%). Fonte: pro_dados/naga_siren.json.
- por que importa: 5º oponente com mais jogos contra ela (57) e uma das maiores vantagens dela entre os picks de alto volume, mid que vive de rotação pra caçar quem farma sozinho.
- janelas: até os 8:18 (Power Treads, pro_dados/puck.json) Puck ainda está resolvendo a lane de mid; dos 8 aos 17:36 (Blink dele, mesma fonte) é a janela em que ele rotaciona a pé ou com Illusory Orb pra tentar achar você isolada, mas sem Blink ainda ele depende de prever sua rota; depois dos 17:36, com Blink e Dream Coil disponíveis, ele ganha alcance de pick-off, só que a essa altura você já tem Manta (14:36) rodando em duas rotas, dificultando o achado.
- o que ele faz com você: Dream Coil (puck_dream_coil) prende e, se você tentar fugir e estica a corda além de 600 de raio, estoura 200 a 400 de dano extra com stun de até 2,5s; Waning Rift (puck_waning_rift) silencia em área de 400, podendo cortar sua Song of the Siren ou Reel In no meio do cast; nenhuma das duas atravessa Black King Bar.
- o que você faz com ele: Ensnare trava ele antes dele conseguir carregar outro Phase Shift ou Blink de saída, se você acertar a tempo; como Puck tem pouca vida, uma troca direta com Rip Tide ativo geralmente fecha rápido.
- itens que viram: Black King Bar neutraliza Dream Coil e Waning Rift ao mesmo tempo; se você não tem BKB ainda, a Song of the Siren cobre a janela (900 a 1400 de raio conforme o nível) até ele gastar o combo em outro alvo.
- como jogar: depois dos 17:36, quando ele tem Blink, não fique parada limpando uma rota sem visão do mapa; antes disso, farme livre, porque ele ainda está decidindo lane.
- fonte: pro_dados/naga_siren.json; pro_dados/puck.json; constants_abilities.json (naga_siren_ensnare, naga_siren_song_of_the_siren, puck_dream_coil, puck_waning_rift, puck_phase_shift).

## Contra Hoodwink (hoodwink)
- placar: Naga Siren venceu 34 de 53 (64,2%). Fonte: pro_dados/naga_siren.json.
- por que importa: fecha o top 6 por volume (53 jogos) e é a 2ª maior vantagem dela entre os picks mais comuns, suporte de longo alcance feito pra acertar quem farma isolado.
- janelas: dos 12:12 (Arcane Boots, pro_dados/hoodwink.json) em diante ela pode ser sniperizada de até 3000 de distância a qualquer momento, porque a recarga do Sharpshooter é fixa em 45s desde o nível 1 (constants_abilities.json); seu Orchid (18:12) silencia antes do tiro carregar, já que Sharpshooter tem até 3s de wind-up; depois do seu Manta (14:36) rodando, Hoodwink precisa escolher qual imagem acertar, o que atrasa o tiro certo.
- o que ele faz com você: Sharpshooter (hoodwink_sharpshooter) carrega até 3s e acerta até 600 a 1350 de dano com slow de até 50% e Break no alvo, de até 3000 de distância; Bushwhack (hoodwink_bushwhack) estuna perto de árvore e some com sua visão por até 2,1s, útil pra prender você enquanto farma jungle perto de mata.
- o que você faz com ele: Ensnare trava ela no lugar durante o wind-up do tiro, cancelando o combo antes de sair; Rip Tide corta a vida baixa dela numa troca direta, já que Hoodwink depende de distância pra sobreviver.
- itens que viram: Black King Bar bloqueia Sharpshooter e Bushwhack (bkbpierce: No nas duas), tirando o maior risco dela contra você; se ela tem Scepter (hoodwink_sharpshooter, aghs_desc: aumenta velocidade da flecha e do slow), o tiro fica mais difícil de dodgear andando, então o combo de BKB ou Ensnare precisa vir antes do wind-up terminar.
- como jogar: ao ouvir o som de carregamento do Sharpshooter, Ensnare nela imediatamente ou saia da linha reta; depois que você tem BKB, ignore o tiro e force a troca direta, porque ela perde no corpo a corpo.
- fonte: pro_dados/naga_siren.json; pro_dados/hoodwink.json; constants_abilities.json (naga_siren_ensnare, naga_siren_rip_tide, hoodwink_sharpshooter, hoodwink_bushwhack); https://api.opendota.com/api/constants/aghs_desc.

## Contra Gyrocopter (gyrocopter)
- placar: Naga Siren venceu 21 de 39 (53,8%). Fonte: pro_dados/naga_siren.json.
- por que importa: um dos carries mais jogados contra ela no banco de pro (39 jogos, empatado com Tiny), mesma função de farm por ataque (pos 1), mesmo raramente dividindo lane com ela, que farma isolada em duas rotas.
- janelas: até os 7:30 (Power Treads, pro_dados/gyrocopter.json) os dois estão no mesmo ritmo de boots (ela aos 6:06); dos 7:30 aos 14:36 Gyrocopter puxa farm de right-click normal enquanto ela ainda não tem Manta, então nessa janela ele farma mais rápido num ponto fixo; depois dos 14:36, com Manta rodando em duas rotas, o farm total dela supera o de uma única linha dele, mesmo sem Blink nem Flak Cannon de raio alto cedo (recarga 20 a 26s desde o nível 1, constants_abilities.json).
- o que ele faz com você: Flak Cannon (gyrocopter_flak_cannon) é modificador de ataque físico que atravessa Black King Bar (bkbpierce: Yes) e acerta todo mundo num raio de 1250 por até 7 ataques, o suficiente pra apagar um grupo de clones mesmo com BKB ativo; Call Down (gyrocopter_call_down) despeja 3 impactos de até 500 de dano mágico cada, também efetivo contra ilusões agrupadas.
- o que você faz com ele: Ensnare trava ele parado antes do combo de Homing Missile (atordoa 1,3 a 2,5s) mais Call Down fechar; como Gyrocopter não tem escape no kit, uma troca direta com Rip Tide ativo tende a favorecer você se ele não tiver espaço pra Flak Cannon primeiro.
- itens que viram: como Flak Cannon é ataque, não feitiço, seu Black King Bar não resolve; o jeito de neutralizar é não agrupar os clones dentro do raio de 1250 dele quando ele já tiver mana (50 a 80) pra ativar.
- como jogar: puxe as duas rotas de farm longe uma da outra depois do seu Manta, pra que ele nunca tenha os dois clones e você no mesmo raio de Flak Cannon ao mesmo tempo.
- fonte: pro_dados/naga_siren.json; pro_dados/gyrocopter.json; constants_abilities.json (naga_siren_ensnare, naga_siren_rip_tide, gyrocopter_flak_cannon, gyrocopter_call_down, gyrocopter_homing_missile).

## Contra Ursa (ursa)
- placar: Naga Siren venceu 24 de 38 (63,2%). Fonte: pro_dados/naga_siren.json.
- por que importa: 2º carry mais jogado contra ela no pro (38 jogos) e o confronto de maior vantagem dela entre os carries com volume relevante (30+ jogos), apesar do Fury Swipes dele ser desenhado contra ilusão.
- janelas: ambos saem rápido de boots (ela 6:06, Ursa 2:12, pro_dados/ursa.json); dos 11:18 (Broadsword) aos 13:42 (Battle Fury) Ursa já ataca em área na jungle, perigoso se cruzar com um clone seu por acidente; seu Manta (14:36) chega quase junto do Blink dele (16:48), então a corrida de farm fica parelha até aí; depois dos 16:48, quando ele tem Blink pra fechar luta, o seu Orchid (18:12) já está pronto pra silenciar o combo.
- o que ele faz com você: Fury Swipes (ursa_fury_swipes) soma 12 a 36 de dano físico a cada ataque consecutivo no mesmo alvo e reseta só depois de 8 a 20s sem bater nele, então contra clones de baixa vida ele estoura rápido; Enrage (ursa_enrage) dá 80% de redução de dano e dispel forte, útil pra ele ignorar seu Ensnare e Rip Tide numa troca already em andamento.
- o que você faz com ele: o Scepter da sua Ensnare (naga_siren_ensnare, aghs_desc: "Ensnare applies Break") desliga a passiva Fury Swipes no momento do combo, porque Break desativa habilidades passivas (dota2.fandom.com/wiki/Disable); sem isso, Rip Tide ainda reduz a armadura dele a cada 6 ataques, o que ajuda seus clones a sobreviver mais um pouco.
- itens que viram: o Scepter dela é o item que decide essa troca, porque sem Break o Fury Swipes acumulado mata clone atrás de clone rápido; Black King Bar dele (bkbpierce: Yes no Enrage) não é bloqueado pelo seu BKB, então a defesa real contra ele é o timing do combo, não item passivo.
- como jogar: não deixe ele bater 6 vezes seguidas no mesmo clone sem reagir; se tiver Scepter, abra a troca com Ensnare nele primeiro pra remover o Fury Swipes antes de focar dano.
- fonte: pro_dados/naga_siren.json; pro_dados/ursa.json; constants_abilities.json (naga_siren_ensnare, naga_siren_rip_tide, ursa_fury_swipes, ursa_enrage); https://api.opendota.com/api/constants/aghs_desc; https://dota2.fandom.com/wiki/Disable.

## Contra Terrorblade (terrorblade)
- placar: Naga Siren venceu 15 de 37 (40,5%). Fonte: pro_dados/naga_siren.json.
- por que importa: 3º carry mais jogado contra ela (37 jogos) e o 2º pior confronto dela com amostra de 30+ jogos, atrás só de Queen of Pain. É um confronto raro de duas carries que praticamente não dividem lane, cada uma vivendo de ilusão e farm isolado, parecido com Alchemist contra Morphling.
- janelas: até os 5:48 os dois saem de boots quase junto (Terrorblade 5:48, ela 6:06, pro_dados/terrorblade.json); dos 12:30 (Yasha) aos 17:06 (Manta dele) Terrorblade já farma com 2 ilusões de Conjure Image tocando wave e camp ao mesmo tempo, empatando o ritmo de 2 rotas que só a Naga tinha até então; a virada real é a Metamorphosis dele (recarga 130 a 145s, ataque à distância e +20 a 80 de dano), que não tem timing mediano de pro por depender de nível e não de compra, mas assim que ele atinge nível 6 com itens rodando, ele passa a vencer troca direta e farm de torre ao mesmo tempo.
- o que ele faz com você: Sunder (terrorblade_sunder) troca uma porcentagem da vida atual dele com a sua (mínimo 25 a 35% deve restar em cada lado), então se você empilhou vida com Heart ou Ring of Tarrasque enquanto ele ficou baixo caçando, ele literalmente rouba sua vida de volta num clique; Metamorphosis vira ele em atacante à distância com alcance de 450 a 600, fora do seu alcance de resposta corpo a corpo.
- o que você faz com ele: Ensnare trava ele no lugar antes do Sunder ter alcance (475) pra puxar sua vida; Song of the Siren (raio de até 1400) tira ele e o time dele do jogo por 7s se ele tentar fechar Sunder dentro desse raio.
- itens que viram: Orchid e depois Bloodthorn (28:42, pro_dados/naga_siren.json) silenciam antes do Sunder saltar; pelo lado dele, Manta (17:06) e Metamorphosis são os dois pontos de virada, porque ele passa a farmar tão rápido quanto você e ainda ataca de longe.
- como jogar: não deixe sua vida ficar muito acima da dele sem um jeito de fugir do alcance de Sunder; depois que ele tem Metamorphosis, puxe a luta pra perto de árvore ou estrutura onde ele perde o ângulo de tiro.
- fonte: pro_dados/naga_siren.json; pro_dados/terrorblade.json; constants_abilities.json (naga_siren_ensnare, naga_siren_song_of_the_siren, terrorblade_sunder, terrorblade_metamorphosis, terrorblade_conjure_image).

## Contra Night Stalker (night_stalker)
- placar: Naga Siren venceu 27 de 40 (67,5%). Fonte: pro_dados/naga_siren.json.
- por que importa: maior vantagem dela entre todos os confrontos com 30+ jogos (67,5%), apesar do kit dele ser desenhado pra caçar farmador isolado à noite.
- janelas: dos 7:18 (Phase Boots, pro_dados/night_stalker.json) até os 17:06 (Blink dele) é a janela de maior risco, porque ele já pode fechar distância rápido à noite; o Manta dela (14:36) chega antes do Blink dele, dando uma segunda rota pra sumir; depois dos 17:06, quando ele some atrás de Blink e Darkness, o Orchid dela (18:12) já está pronto pra silenciar o combo de Void e Crippling Fear.
- o que ele faz com você: Void (night_stalker_void) desacelera 50% sempre, e à noite também aplica um mini-stun que corta canalização, com duração de até 3,4s; Crippling Fear (night_stalker_crippling_fear) silencia em área de 375 por até 6s à noite; Dark Ascension (night_stalker_darkness, ultimate) dá voo, +50 a 150 de dano e visão irrestrita por 30s pra caçar o mapa inteiro, de dia ou de noite.
- o que você faz com ele: Song of the Siren te tira do alcance de qualquer uma dessas três assim que ele engaja, porque a estase impede ser atacada mesmo sem Black King Bar; Rip Tide corta a vida dele numa troca direta, já que ele depende mais de burst de CC do que de dano sustentado.
- itens que viram: nenhum item dela precisa ser novo aqui, Song of the Siren já resolve a janela de burst; se ele tem Scepter (night_stalker_hunter_in_the_night, aghs_desc: reseta recarga das básicas ao matar herói), evite ser o primeiro abate da noite, porque isso turbina a caçada pelo resto da Darkness.
- como jogar: reaja ao Void ou ao Crippling Fear com Song of the Siren no mesmo segundo, antes do combo dele continuar; de dia, ele perde quase todo o pacote de duração extra, então farme livre.
- fonte: pro_dados/naga_siren.json; pro_dados/night_stalker.json; constants_abilities.json (naga_siren_song_of_the_siren, naga_siren_rip_tide, night_stalker_void, night_stalker_crippling_fear, night_stalker_darkness, night_stalker_hunter_in_the_night); https://api.opendota.com/api/constants/aghs_desc.

## Contra Void Spirit (void_spirit)
- placar: Naga Siren venceu 20 de 30 (66,7%). Fonte: pro_dados/naga_siren.json.
- por que importa: 2ª maior vantagem dela com 30+ jogos (66,7%), mid de mobilidade alta feito pra achar quem farma sozinho em qualquer parte do mapa.
- janelas: dos 5:36 (boots, pro_dados/void_spirit.json) até os 17min, quando ele ainda não tem o Aghanim's Shard (17:00, mesma fonte), o alcance de iniciação dele fica mais previsível, limitado ao Astral Step (800 a 1000) e Aether Remnant; o Manta dela (14:36) chega antes disso, dando uma segunda rota pra se esconder. Depois dos 17min, com Shard, Resonant Pulse passa a ter barreira extra, mas isso não muda o alcance de achar você no mapa.
- o que ele faz com você: Astral Step (void_spirit_astral_step) atravessa Black King Bar (bkbpierce: Yes) e teleporta ele até 1000 de distância, aplicando uma marca que desacelera 40 a 80% e detona 130 a 330 de dano; Aether Remnant (void_spirit_aether_remnant) puxa quem cruza o caminho dele, útil pra fechar distância numa rota de split push.
- o que você faz com ele: Song of the Siren te tira do jogo por 7s mesmo que ele já tenha chegado com Astral Step, porque a estase não depende de Black King Bar pra funcionar; Ensnare trava ele no lugar durante o Dissimilate (fase de 1,1s), cancelando o reposicionamento se você acertar a tempo.
- itens que viram: como Astral Step atravessa BKB, o item que resolve aqui é a própria Song of the Siren; Orchid silencia antes de qualquer combo dele sair, já que Void Spirit depende 100% de feitiço pra fazer dano.
- como jogar: ao ouvir o som de Astral Step chegando, pressione Song of the Siren antes de tentar fugir correndo, a estase é mais rápida que qualquer caminho de escape a pé.
- fonte: pro_dados/naga_siren.json; pro_dados/void_spirit.json; constants_abilities.json (naga_siren_song_of_the_siren, naga_siren_ensnare, void_spirit_astral_step, void_spirit_aether_remnant, void_spirit_dissimilate).

## Contra Pudge (pudge)
- placar: Naga Siren venceu 28 de 44 (63,6%). Fonte: pro_dados/naga_siren.json.
- por que importa: uma das maiores vantagens dela com 30+ jogos (63,6%, empatado com Rubick, mas com mais volume de partidas), suporte de gancho feito pra punir quem joga isolado.
- janelas: dos 3:48 (boots, pro_dados/pudge.json) até os 19:30 (Blink dele) ele ainda depende só do alcance de 1300 do Meat Hook pra te achar; seu Manta (14:36) chega antes do Blink dele, então a rota de fuga some antes dele ganhar reposicionamento rápido. Depois dos 19:30, com Blink, ele consegue se aproximar antes de ganchar, mas o seu Orchid (18:12) já está pronto.
- o que ele faz com você: Meat Hook (pudge_meat_hook) causa dano Puro que atravessa Black King Bar (bkbpierce: Yes) e te puxa pra ele a 1600 de velocidade; Rot (pudge_rot) é dano em área que também machuca os seus clones perto dele; Dismember (pudge_dismember, canalizado) cura ele com o dano causado, perigoso numa troca longa.
- o que você faz com ele: como o Hook é pure damage e atravessa BKB, a defesa não é item, é posicionamento: farme fora do alcance de 1300 dele quando não tiver visão da posição dele; se ele ganchar um clone em vez de você, a troca já foi favorável, porque o clone custa muito menos que a recarga de 12 a 18s do Hook.
- itens que viram: Black King Bar não resolve aqui, porque Hook e Dismember são os dois bkbpierce: Yes (constants_abilities.json); o item real é Boots of Travel ou qualquer coisa que aumente velocidade de movimento, pra ficar fora do alcance de reposicionamento dele antes do Blink sair.
- como jogar: mantenha visão (observer ward ou aliado) nas rotas que você farma sozinha; Pudge sem visão prévia da sua posição não consegue acertar o Hook de 1300 de distância.
- fonte: pro_dados/naga_siren.json; pro_dados/pudge.json; constants_abilities.json (pudge_meat_hook, pudge_rot, pudge_dismember).

## Contra Queen of Pain (queenofpain)
- placar: Naga Siren venceu 14 de 37 (37,8%). Fonte: pro_dados/naga_siren.json.
- por que importa: maior desvantagem dela com 30+ jogos (37,8%), mid de burst e mobilidade que fecha distância rápido demais pra uma carry sem escape no kit.
- janelas: dos 8:18 (Power Treads, pro_dados/queenofpain.json) até os 13:54 (Kaya) ela já farma rápido e começa a ganhar poder de feitiço; seu Manta (14:36) sai quase junto, mas não ajuda muito contra o problema real, que é o blink dela (recarga 6 a 12s) fechando distância em qualquer rota isolada; é a pior fase do confronto pra você, porque ela consegue fazer hit-and-run repetido sem dar tempo de reagir.
- o que ele faz com você: Blink (queenofpain_blink) reposiciona até 1300 de distância com recarga de só 6s no nível 4, ideal pra achar e sair de rotas de farm; Sonic Wave (queenofpain_sonic_wave) causa dano Puro que atravessa Black King Bar (bkbpierce: Yes) e empurra 350 de distância, limpando clones agrupados de uma vez; Shadow Strike (queenofpain_shadow_strike) desacelera 25 a 55% por 16s, prendendo você perto dela pro combo seguinte.
- o que você faz com ele: Ensnare trava ela parada antes do Blink de saída, mas só se você acertar antes dela reagir, porque a recarga curta dela compete direto com a sua; Song of the Siren tira você do alcance do combo se usada no instante do engage, antes do Sonic Wave saltar.
- itens que viram: como Sonic Wave é dano Puro e atravessa BKB, seu Black King Bar não resolve essa troca; Linken's Sphere bloqueia de graça o Shadow Strike (feitiço de alvo único), cortando a parte do combo que prende você pro resto da sequência.
- como jogar: evite farmar isolada perto de onde ela já tem visão (ward ou Dust) antes do nível 6 dela; depois que ela tem Sonic Wave, não agrupe os clones numa linha reta na frente dela.
- fonte: pro_dados/naga_siren.json; pro_dados/queenofpain.json; constants_abilities.json (naga_siren_ensnare, naga_siren_song_of_the_siren, queenofpain_blink, queenofpain_sonic_wave, queenofpain_shadow_strike).

## Contra Ember Spirit (ember_spirit)
- placar: Naga Siren venceu 15 de 36 (41,7%). Fonte: pro_dados/naga_siren.json.
- por que importa: 3ª maior desvantagem dela com 30+ jogos (41,7%), atrás de Queen of Pain e Terrorblade, mid de alta mobilidade que limpa clone sem nem precisar mirar em qual é a real.
- janelas: dos 9:06 (Phase Boots, pro_dados/ember_spirit.json) até o momento em que ele tem Fire Remnant pronto (recarga fixa de 35s pra recarregar carga, disponível desde o nível 1) ele já consegue emboscar qualquer rota isolada; seu Manta (14:36) ajuda pouco aqui, porque Sleight of Fist acerta todos os inimigos numa área, não um alvo só. É uma desvantagem que dura praticamente o jogo inteiro, não uma janela específica.
- o que ele faz com você: Sleight of Fist (ember_spirit_sleight_of_fist) ataca todos os inimigos num raio de até 550 (incluindo clones) com bônus de 50 a 170 de dano contra heróis, atravessando Black King Bar (bkbpierce: Yes); Fire Remnant (ember_spirit_fire_remnant) planta até 3 marcadores no mapa e te acha de qualquer rota com alcance de 1400; Searing Chains (ember_spirit_searing_chains) prende por até 2,75s os inimigos mais próximos, sem precisar de alvo fixo.
- o que você faz com ele: Ensnare trava ele parado antes do próximo Fire Remnant reposicionar; como Sleight of Fist não é feitiço direcionado único, Linken's Sphere não ajuda aqui, então a defesa real é não deixar clones amontoados dentro do raio dele.
- itens que viram: Black King Bar não resolve, Sleight of Fist atravessa; o que funciona é Orchid, silenciando antes dele conseguir usar Searing Chains pra te prender pro combo seguinte.
- como jogar: farme rotas mais afastadas do territorio dele depois que ele tem 3 cargas de Fire Remnant (meio de jogo em diante); se ele te achar, não tente fugir em linha reta, ele alcança mais rápido que você sem Blink.
- fonte: pro_dados/naga_siren.json; pro_dados/ember_spirit.json; constants_abilities.json (naga_siren_ensnare, ember_spirit_sleight_of_fist, ember_spirit_fire_remnant, ember_spirit_searing_chains).

## Contra Storm Spirit (storm_spirit)
- placar: Naga Siren venceu 18 de 41 (43,9%). Fonte: pro_dados/naga_siren.json.
- por que importa: uma das maiores desvantagens dela com 30+ jogos (43,9%), mid que atravessa o mapa inteiro em segundos pra caçar farmador isolado.
- janelas: dos 8:30 (Power Treads, pro_dados/storm_spirit.json) até os 13:42 (Kaya) ele já farma rápido e ganha poder de feitiço pra sustentar Ball Lightning; a partir daí, com mana suficiente, ele consegue atravessar o mapa pra qualquer rota onde você esteja puxando farm sozinha, sem limite de recarga fixa (o custo é mana, não cooldown).
- o que ele faz com você: Ball Lightning (storm_spirit_ball_lightning) o leva até qualquer ponto do mapa gastando mana proporcional à distância, sem recarga; Electric Vortex (storm_spirit_electric_vortex) te puxa pra cima dele a até 300 de distância; Overload (storm_spirit_overload, passiva) soma 25 a 100 de dano mágico em área no próximo ataque depois de qualquer feitiço, útil pra acabar com clones agrupados.
- o que você faz com ele: Electric Vortex não atravessa Black King Bar (bkbpierce: No), então o seu BKB cancela a parte de puxar você pra luta; Ensnare trava ele parado antes dele conseguir carregar outro Ball Lightning de saída.
- itens que viram: Black King Bar bloqueia Electric Vortex e o Overload (ambos bkbpierce: No), tirando a trava dele; sem o puxão, Storm Spirit perde o jeito mais confiável de fechar a troca contra você.
- como jogar: depois que ele tem Kaya e mana de sobra pra Ball Lightning, farme perto de rota com saída rápida pro seu time; com Black King Bar pronto, a troca direta fica mais parelha, porque ele perde o puxão inicial.
- fonte: pro_dados/naga_siren.json; pro_dados/storm_spirit.json; constants_abilities.json (naga_siren_ensnare, storm_spirit_ball_lightning, storm_spirit_electric_vortex, storm_spirit_overload).

## Contra Morphling (morphling)
- placar: Naga Siren venceu 10 de 18 (55,6%, amostra pequena). Fonte: pro_dados/naga_siren.json.
- por que importa: é um confronto raro de duas carries que quase nunca dividem lane, cada uma vivendo de ilusão e farm isolado, parecido com Alchemist contra Morphling. Mesmo com amostra pequena (18 jogos), a corrida de farm entre as duas é real: quem farma mais rápido e fecha o item de virada primeiro domina o 1x1.
- janelas: até os 6:00 os dois saem de boots quase junto (Morphling 6:00, ela 6:06, pro_dados/morphling.json); dos 14:36 (Manta dela) aos 18:24 (Manta dele) é a janela mais parelha, as duas rodando ilusão pra farmar em paralelo; depois dos 18:24, Morphling pode alternar Attribute Shift pra Força e virar tanque numa troca direta, ou pra Agilidade e vencer dano por segundo, dependendo do que ele precisa no momento.
- o que ele faz com você: Waveform (morphling_waveform) é invulnerável durante o dash, atravessando qualquer coisa que você tente travar nele nesse instante; Adaptive Strike (morphling_adaptive_strike_agi) atordoa e empurra com dano que escala pela Agilidade dele (até 2,5x o bônus), achando você mesmo de longe; Replicate (morphling_replicate, ultimate) transforma o próprio Morphling numa cópia do herói alvo dentro do alcance, ganhando uma das habilidades básicas dele; não cria uma unidade separada, é ele mesmo trocando de forma.
- o que você faz com ele: Ensnare trava ele fora do Waveform (não funciona durante o dash, mas sim antes ou depois); como ele não tem disable em área, Song of the Siren serve mais pra proteger seus clones reais de um burst de Adaptive Strike do que pra travar ele.
- itens que viram: a corrida de Manta decide a maior parte do confronto, quem fecha primeiro consegue dividir farm e defender rota ao mesmo tempo; Eye of Skadi nela (situacional, fora do top 30 de pro_dados/naga_siren.json) desacelera 25% o movimento dele no corpo a corpo, útil porque ele não tem blink, só o dash de Waveform com recarga de 12 a 21s.
- como jogar: trate isso como corrida de farm, não como troca direta cedo; só force 1x1 depois que seu Manta estiver rodando e o Orchid pronto pra silenciar o próximo Adaptive Strike dele.
- fonte: pro_dados/naga_siren.json; pro_dados/morphling.json; constants_abilities.json (naga_siren_ensnare, naga_siren_song_of_the_siren, morphling_waveform, morphling_adaptive_strike_agi, morphling_replicate).
