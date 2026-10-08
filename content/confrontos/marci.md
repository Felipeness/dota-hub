---
id: confrontos-marci
heroi: Marci
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/marci.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/windrunner.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/phoenix.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shadow_demon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/pangolier.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/kunkka.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/earth_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/brewmaster.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/treant.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rattletrap.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer (partidas pro 7.40-7.41, lane_role)
---

## Como ler esta página

Marci é suporte all-around de iniciação: compra Ward Observer em 75% das partidas de pro e Ward Sentry em 76%, perfil de quem joga suporte, raramente carry (fonte: pro_dados/marci.json, itens). O combo dela não depende de item pra existir: Dispose (Grapple, puxa e desacelera 20 a 50%, dano 60 a 330, não atravessa BKB) mais Rebound (pulo de 450 a 750 de alcance, atordoa 0,8 a 1,7s, também não atravessa BKB) já funcionam no nível 2. O resto da build só torna o combo mais seguro: Phase Boots mediana 10:54, Black King Bar 24:18, Basher 29:42 e só depois Blink Dagger, mediana 31:00, porque o pulo do Rebound já serve de gap closer (fonte: pro_dados/marci.json, itens). Com Aghanim's Shard, Rebound pode ser lançado direto num inimigo, não só num aliado; com Scepter, Unleash fica com cooldown 10s menor e aplica dispel básico nela mesma (fonte: aghs_desc). Guarde esses dois fatos, eles voltam em quase todo confronto abaixo: **BKB inimigo anula o combo inteiro dela**, e o dela, quando sai (mediana 24:18), anula a maioria dos stuns físicos que listamos.

Os 16 oponentes abaixo foram escolhidos assim: os 6 com mais jogos de pro contra ela (Tusk, Jakiro, Mars, Shadow Fiend, Snapfire, Windranger); mais 4 heróis de pos 4/5 que mais aparecem contra ela sem já estar na lista de cima (Hoodwink, Phoenix, Shadow Demon, Disruptor); os 3 com maior vantagem pra Marci com 30+ jogos (Pangolier, Earth Spirit, Kunkka); e os 3 com maior desvantagem com 30+ jogos (Clockwerk, Treant Protector, Brewmaster). Todos vêm de `/heroes/{id}/matchups` da OpenDota filtrado pra partidas de liga pro 7.40 e 7.41 (fonte: pro_dados/marci.json, campo `fonte`).

## Contra Tusk (tusk)

- placar: 85 vitórias em 194 jogos de pro pra Marci, 43,8% (fonte: pro_dados/marci.json, confrontos). Amostra grande, desvantagem real mas não das piores.
- por que importa: é o confronto com mais jogos de pro contra Marci (194). Os dois são suportes str de iniciação sem dependência de item: nenhum joga no meio com frequência em pro, Tusk só 7% das partidas e Marci 10% (fonte: partidas pro 7.40-7.41, OpenDota), e brigam pela mesma coisa: quem abre o primeiro gank da partida.
- janelas: antes dos 10 min ninguém tem vantagem de farm clara, Tusk sai com Wind Lace (8:12) e Botas Tranquilas (8:24) quase junto com o Magic Wand de Marci (7:12). Dos 13 aos 19 min Tusk fica mais móvel que ela: Phase Boots dele sai 13:36 e o Blink mediana 19:00 (p25 16:48), bem antes do Blink dela (31:00), então nessa janela quem inicia um gank costuma ser ele. Depois dos 24 min o jogo vira: BKB dela sai 24:18 e passa a bloquear Snowball e Ice Shards (nenhum dos dois atravessa BKB, fonte: constants_abilities.json), sobrando só Walrus Punch pra furar.
- o que ele faz com você: Ice Shards (dano 75 a 300, cria uma parede de até 7s) corta sua rota de fuga ou de engajamento depois de jogada; Walrus Punch é autocast com crit e atravessa BKB (`bkbpierce: Yes`), então mesmo com BKB ativo ele ainda crita em cima de você; Snowball rola com aliados dentro e ganha dano por cada um, perigoso se seu time estiver agrupado.
- o que você faz com ele: Dispose arranca um alvo específico de perto dele, incluindo um aliado que ele já pegou no Snowball, o que tira a bola de gente antes dela bater em quem interessa; Rebound (stun 0,8 a 1,7s) costuma travar o combo dele antes do Ice Shards sair, já que seu cast time é só 0,1s.
- itens que viram: BKB seu (24:18) anula Snowball e Ice Shards, mas não o Walrus Punch; Basher (29:42) trava ele depois do Rebound antes dele conseguir Blink pra fugir.
- como jogar: disputa de rotação pura antes dos 13 min, não force sozinha; entre 13 e 19 min ele costuma chegar primeiro nas lanes porque o Blink dele sai bem antes do seu, jogue mais perto do seu carry nessa janela; depois do seu BKB, a troca 1x1 fica sua, só cuidado com Walrus Punch.
- fonte: pro_dados/marci.json; pro_dados/tusk.json; constants_abilities.json (tusk_snowball, tusk_ice_shards, tusk_walrus_punch, marci_grapple, marci_companion_run)

## Contra Jakiro (jakiro)

- placar: 84 vitórias em 159 jogos de pro pra Marci, 52,8% (fonte: pro_dados/marci.json, confrontos). Levemente favorável, amostra grande.
- por que importa: segundo confronto com mais jogos de pro (159). Jakiro é suporte de área pos 5 puro, e a arma dele (Liquid Fire, que reduz velocidade de ataque) ataca em cheio o ponto forte de Marci, que é o Unleash corpo a corpo.
- janelas: até 12 min a fase de farm empata, Jakiro sai com Arcane Boots 11:42 (p25 9:42) e Marci com Phase Boots 10:54. A partir do nível 6 (Macropyre, dano por segundo 100 a 200 numa linha larga por 10s) Jakiro zoneia qualquer combo corpo a corpo dela se ela ficar parada batendo; mas a Macropyre é um point target com cast visível, dá pra Marci entrar com Rebound antes do cast terminar. Depois dos 22 min Jakiro chega em Glimmer Cape (22:48), ferramenta de escape que atrasa exatamente quando o Basher dela (29:42) ficaria pronto pra travar ele.
- o que ele faz com você: Liquid Fire (autocast, reduz velocidade de ataque em 30 a 60%, dano de queima 15 a 45 por segundo, raio 300) corta a vantagem de attack speed que o Unleash te dá; Ice Path (stun até 2s, raio 150, dura até 4,5s no chão) prende você antes do Rebound sair se ele acertar primeiro.
- o que você faz com ele: Rebound (stun 0,8 a 1,7s, alcance até 750) fecha a distância rápido o bastante pra interromper o cast da Macropyre, que tem alcance 1400 mas precisa ficar parado pra conjurar; Dispose te dá outro gancho de engajamento se ele tentar fugir depois do primeiro stun.
- itens que viram: Glimmer Cape dele (22:48) anula sua janela de iniciação por 5s de invisibilidade mais resistência mágica, jogue o combo antes dele comprar ou espere a invisibilidade cair; seu BKB (24:18) bloqueia Ice Path e o dano da Macropyre, sobrando só a queima física do Liquid Fire.
- como jogar: ataque o Jakiro assim que ele estiver sozinho fora do alcance do time, antes dele conseguir formar a Macropyre; depois do nível 6 dele, não troque auto ataque parado dentro do fogo, pulse o combo e saia.
- fonte: pro_dados/marci.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_liquid_fire, jakiro_macropyre, jakiro_ice_path, marci_unleash, marci_companion_run)

## Contra Mars (mars)

- placar: 90 vitórias em 157 jogos de pro pra Marci, 57,3% (fonte: pro_dados/marci.json, confrontos). Favorável pra Marci, apesar dele ser considerado um counter clássico de iniciador.
- por que importa: terceiro confronto com mais jogos de pro (157), mesmo sem dividir lane quase nunca (Mars jogou na offlane em 96% das partidas de pro 7.40-7.41, fonte: partidas pro 7.40-7.41, OpenDota). Os dois são iniciadores, e o combo de controle dele (Spear + Arena of Blood) é o tipo de coisa desenhada pra travar justamente heróis mobile como ela.
- janelas: Mars farma rápido pra offlane, Soul Ring 7:54 e Phase Boots 8:30 saem bem antes do Wand dela (7:12 é parecido, mas ele já está na linha de frente enquanto ela ainda está de rotação). O Blink dele (mediana 15:12, p25 13:30) chega 16 min antes do dela, então no meio de jogo ele inicia mais rápido que ela consegue reagir. A partir dos 21 min o Aghanim's Shard dele (21:30, melhora o Spear pra acertar até 2 heróis com rastro de fogo) vira ameaça de combo de longo alcance; o BKB dela sai 3 min antes do dele (24:18 contra 26:30), janela em que ela pode iniciar sem medo do stun do Spear.
- o que ele faz com você: Spear of Mars (dano 100 a 325, alcance até 1200, empurra o primeiro herói acertado) te empala numa árvore ou parede se bater, stun de 1,3 a 2,2s; Arena of Blood (ultimate, raio 550, 5,5s) bloqueia ataques e movimento de quem está perto da borda, prendendo você dentro da luta mesmo se tentar recuar andando (fonte: constants_abilities.json, descrição oficial da habilidade).
- o que você faz com ele: Dispose te dá uma forma de arrancar um aliado puxado pelo Spear antes dele bater na parede; Rebound (alcance até 750) ainda funciona pra fechar nele de fora do alcance de 1200 do Spear, já que o cast time do Spear é mais lento (ponto fraco é reagir rápido quando ele erra o primeiro tiro).
- itens que viram: seu BKB (24:18) sai antes do dele (26:30) e bloqueia o stun do Spear e o dano da Arena, use essa janela de quase 3 min pra iniciar sem risco; depois que ele tiver BKB também, nenhum dos dois stuns funciona no outro, a troca vira dano puro e quem tem Basher trava primeiro.
- como jogar: evite correr em linha reta perto de parede ou árvore contra ele antes do seu BKB, é onde o Spear mais mata; depois dos 24 min, é sua janela de iniciar, ele ainda não tem BKB nem Shard pronto pra impalar dois.
- fonte: pro_dados/marci.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_arena_of_blood, mars_bulwark); aghs_desc (mars shard); partidas pro 7.40-7.41 (OpenDota)

## Contra Shadow Fiend (nevermore)

- placar: 73 vitórias em 143 jogos de pro pra Marci, 51,0% (fonte: pro_dados/marci.json, confrontos). Equilibrado, mas o exemplo clássico de confronto sem lane em comum: ele é core, 57% das partidas de pro na rota segura e 43% no meio, quase nunca offlane (fonte: partidas pro 7.40-7.41, OpenDota).
- por que importa: quarto confronto com mais jogos de pro (143) mesmo os dois quase nunca dividindo lane. Shadow Fiend é mid/safelane puro, Marci é suporte roaming: eles se encontram em rotação, não em troca de creep. É o caso que motivou esta página ter entradas assim: dois heróis que nunca se enxergam na lane, mas cujo 1x1 decide o jogo.
- janelas: antes dos 10 min Shadow Fiend sobe muito mais rápido que ela (Power Treads 5:54, Mask of Madness 10:12), porque ele é core de farm e ela é suporte. Essa é a janela perigosa pra Marci: se ela tentar roam na lane dele cedo, Shadowraze (dano 85 a 280 mais bônus por alma acumulada, raio 250, cooldown de só 3s entre as 3 razes) pune qualquer aproximação a pé. Depois dos 14 min, com Yasha (13:18) e Dragon Lance (14:00), ele ganha alcance e velocidade que dificultam o gank dela. A partir do nível 6 o Requiem dele (até 20 linhas de medo, não atravessa BKB, fonte: constants_abilities.json) é a resposta dele se ela errar o combo perto dele.
- o que ele faz com você: Shadowraze acerta em quem estiver a até 250 de distância dele em qualquer uma das 3 direções, sem precisar mirar em você, então aproximação a pé é arriscada; Requiem (medo de até 2,15s total, dano escalando com alma acumulada) deleta suporte sem BKB se ele tiver farmado alma suficiente, mas não atravessa BKB.
- o que você faz com ele: Dispose e Rebound (ambos sem bkbpierce) só funcionam se ele não tiver BKB; como ele é carry de farm alto, ele costuma comprar BKB tarde (mediana geral dele de itens caros vem perto dos 20+ min), então a janela de gankar ele sem resposta é do nível 6 dela até ele fechar BKB.
- itens que viram: seu BKB (24:18) bloqueia o medo e o dano do Requiem; se ele tiver Linken's Sphere ou Lotus Orb, seu Dispose nele é anulado no primeiro cast, troque a ordem e puxe um aliado dele em vez disso.
- como jogar: não entre a pé na Shadowraze, rotacione por trás ou com Rebound direto nele; gankar ele cedo (antes dos 10 min, antes do Mask of Madness) é muito mais seguro que depois que ele tiver alma acumulada pro Requiem.
- fonte: pro_dados/marci.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, nevermore_necromastery); partidas pro 7.40-7.41 (OpenDota)

## Contra Snapfire (snapfire)

- placar: 79 vitórias em 136 jogos de pro pra Marci, 58,1% (fonte: pro_dados/marci.json, confrontos). Favorável pra Marci, amostra grande.
- por que importa: quinto confronto com mais jogos de pro (136, empatado com Windranger). Snapfire é a outra suporte roaming do patch, flexível entre pos 2 a 5 mas competindo direto pelo mesmo papel de iniciar gank cedo.
- janelas: os dois sobem rápido no início, Arcane Boots dela sai 10:36 contra o Phase Boots de Marci 10:54, fase parelha. O Aghanim's Shard de Snapfire (16:54, transforma Firesnap Cookie num pulo que também cura e dispara um Mortimer Kiss) chega bem antes do BKB de Marci (24:18), então entre 17 e 24 min ela tem uma ferramenta extra de iniciar ou salvar aliado que Marci ainda não tem resposta de BKB pronta. Depois dos 24 min o jogo vira pra Marci: BKB dela bloqueia o knockback de Scatterblast e o stun do Firesnap Cookie.
- o que ela faz com você: Scatterblast (dano 100 a 280 em cone, slow de até 100% em movimento e ataque à queima-roupa) empurra você pra longe do seu time antes de fechar o combo; Firesnap Cookie salva um aliado perseguido pulando ele pra fora do alcance do seu Dispose.
- o que você faz com ele: Dispose e Rebound não atravessam BKB nela também, mas Snapfire raramente compra BKB cedo por ser suporte puro, então a janela de travar ela é praticamente a partida toda; Rebound fecha a distância rápido o bastante pra interromper a janela de cast do Scatterblast (alcance 800).
- itens que viram: seu BKB (24:18) anula o knockback do Scatterblast e o stun do Firesnap Cookie; o Shard dela (16:54) sai cedo, então até os 17 min ela ainda está sem a versão melhorada da fuga em grupo.
- como jogar: gankue ela antes dos 17 min, quando o Shard ainda não saiu e o Firesnap Cookie sozinho não salva um aliado perseguido; depois do seu BKB, o combo dela deixa de te travar e a troca é sua.
- fonte: pro_dados/marci.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_firesnap_cookie); aghs_desc (snapfire shard)

## Contra Windranger (windrunner)

- placar: 68 vitórias em 136 jogos de pro pra Marci, 50,0% (fonte: pro_dados/marci.json, confrontos). Equilibrado, amostra grande, empatado em jogos com Snapfire.
- por que importa: sexto confronto com mais jogos de pro (136). Windranger joga quase metade das partidas de pro na offlane (47%) e quase metade na rota segura (44%), raramente no meio (9%, fonte: partidas pro 7.40-7.41, OpenDota); na offlane ela briga pelo mesmo papel de abrir espaço que Marci, e na rota segura ela aparece muito porque Shackleshot e Windrun são ferramentas de anti-gank que Marci enfrenta direto.
- janelas: ela farma rápido de qualquer posição, Power Treads 7:12 e Maelstrom 13:24 saem num ritmo de carry. Entre 13 e 18 min (Mjollnir 18:18) ela já bate forte o suficiente pra vencer uma troca de auto ataque se Marci chegar sem vantagem de level. Focus Fire (bônus de velocidade de ataque 350 a 500 contra um único alvo, atravessa BKB) é a resposta dela pra um combo que durou demais. O BKB dela (24:24) sai quase junto com o dela (24:18), então depois dos 24 min nenhum stun físico funciona no outro.
- o que ela faz com você: Shackleshot (stun até 3,25s se acertar você junto de uma árvore ou unidade atrás) cancela seu Rebound antes dele sair se ela reagir rápido; Windrun (50% de velocidade de movimento e esquiva total de ataques físicos por até 6s) deixa ela fugir do seu Unleash, que é baseado em auto ataque.
- o que você faz com ele: Dispose te dá um gancho garantido que não depende de acerto físico (então Windrun não evita o Dispose, só os ataques); Rebound fecha a distância antes dela conseguir se afastar o bastante pra abrir um Powershot.
- itens que viram: seu BKB (24:18) bloqueia o stun do Shackleshot; o dela (24:24) bloqueia seu Dispose e Rebound logo em seguida, praticamente ao mesmo tempo, então essa fase do jogo vira disputa de quem tem o item ativo primeiro numa luta específica, não vantagem fixa.
- como jogar: ataque ela fora do alcance de árvore ou de um aliado atrás dela, pra tirar o Shackleshot da equação; não persiga durante o Windrun, espere acabar (dura até 6s) antes de tentar o combo de novo.
- fonte: pro_dados/marci.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_windrun, windrunner_focusfire, marci_grapple); partidas pro 7.40-7.41 (OpenDota)

## Contra Hoodwink (hoodwink)

- placar: 57 vitórias em 118 jogos de pro pra Marci, 48,3% (fonte: pro_dados/marci.json, confrontos). Levemente desfavorável, amostra grande.
- por que importa: suporte pos 4/5 que mais aparece contra Marci depois de Tusk e Jakiro (118 jogos). Mesma função de roam, e o kit dela (Bushwhack) é desenhado pra punir exatamente quem inicia andando em cima.
- janelas: fase de farm parecida, Arcane Boots dela 12:12 contra Phase Boots de Marci 10:54. Bushwhack (disponível desde o nível 1) já ameaça qualquer aproximação perto de árvore desde o início de jogo, então a vantagem de poder de controle é dela cedo. Depois dos 23 min o Shard dela (23:48, Hunter's Boomerang) chega quase junto com o BKB de Marci (24:18). Scepter não tem volume suficiente na amostra de pro pra cravar um minuto mediano, mas quando ela compra, ele aumenta a velocidade da flecha e o slow do Sharpshooter, e a ameaça de longe fica maior mesmo com Marci imune a magia.
- o que ela faz com você: Bushwhack (raio 265, stun de 1,5 a 2,1s perto de árvore, puxa pra árvore mais próxima, cega) te prende antes do seu Rebound sair, se você estiver perto de vegetação, o que é quase sempre no mapa; Sharpshooter (dano até 1350 no nível 3, alcance 3000) te executa de longe se você ficar isolada depois de um combo que não matou.
- o que você faz com ele: Dispose te dá um gancho que não depende de árvore perto, então lute longe de vegetação quando possível; Rebound fecha distância rápido o bastante pra interromper o canalizar do Sharpshooter (ela fica parada carregando o tiro).
- itens que viram: seu BKB (24:18) não bloqueia o Sharpshooter dela (não atravessa BKB tecnicamente, mas o alcance de 3000 significa que ela ataca de fora da luta, então BKB ajuda pouco ali); o que resolve é matar ela rápido ou ficar fora da linha de visão.
- como jogar: puxe a troca pra fora de árvore sempre que possível; depois que ela upar Sharpshooter (nível 6), não fique parada isolada depois de um combo, ela pune exatamente essa situação.
- fonte: pro_dados/marci.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, hoodwink_scurry); aghs_desc (hoodwink scepter e shard)

## Contra Phoenix (phoenix)

- placar: 38 vitórias em 114 jogos de pro pra Marci, 33,3% (fonte: pro_dados/marci.json, confrontos). Pior confronto de Marci com amostra grande (114 jogos) da lista inteira.
- por que importa: maior desvantagem de Marci com volume realmente confiável. Os dois são suporte puro no pro: Phoenix jogou no meio só 5% das partidas de pro 7.40-7.41, o resto dividido entre rota segura e offlane (fonte: partidas pro 7.40-7.41, OpenDota), mas o kit de Phoenix nega o ponto mais forte do combo dela: Supernova estuna em área mesmo contra quem está de BKB (`bkbpierce: Yes`, diferente de Icarus Dive e Fire Spirits, que não atravessam BKB).
- janelas: fase de farm parecida, Urn of Shadows dele 7:48 contra Wand dela 7:12. Até os 15 min (Spirit Vessel dele, 15:06) o jogo é sobre iniciação normal, sem Supernova pronta. A partir do nível 6 tudo muda: se Phoenix abrir Supernova (raio 1200, dura 6s, estuna 1,6 a 2,4s na explosão) bem no meio de uma iniciação de Marci, o BKB dela (24:18) não impede o stun final.
- o que ele faz com você: Icarus Dive (dano por segundo 20 a 80, slow de até 25%, volta pro ponto de origem) corta sua aproximação e ainda desacelera a fuga; Supernova estuna toda a área perto dele quando explode, inclusive você de BKB, cancelando qualquer combo que você tenha acabado de iniciar.
- o que você faz com ele: Dispose e Rebound funcionam normal nele fora da Supernova, e como Phoenix é squishy (120 de vida base), um combo limpo antes dele upar nível 6 mata rápido; depois do nível 6, o ideal é focar o ovo da Supernova com dano físico, já que ele pode ser destruído antes de explodir.
- itens que viram: seu BKB não resolve a explosão da Supernova (ela atravessa), então o counter real é dano de burst no ovo ou Basher pra travar ele antes dele conseguir ativar a ultimate; Aghanim's Scepter dele aumenta o número de ataques necessários pra destruir o ovo, dificultando ainda mais focar ele a tempo.
- como jogar: gankue Phoenix antes do nível 6, é a janela limpa; depois disso, nunca inicie uma troca de grupo perto dele sem saber se a Supernova está disponível, porque BKB não te salva do stun final dela.
- fonte: pro_dados/marci.json; pro_dados/phoenix.json; constants_abilities.json (phoenix_icarus_dive, phoenix_supernova, campo bkbpierce); partidas pro 7.40-7.41 (OpenDota); aghs_desc (phoenix scepter e shard)

## Contra Shadow Demon (shadow_demon)

- placar: 51 vitórias em 113 jogos de pro pra Marci, 45,1% (fonte: pro_dados/marci.json, confrontos). Desfavorável, amostra grande.
- por que importa: suporte pos 4/5 com bastante volume contra ela (113 jogos). O kit dele é todo construído em cima de remover um alvo da luta por alguns segundos, exatamente o tipo de ferramenta que cancela a iniciação de Marci sem precisar vencer ela no dano.
- janelas: fase de farm parecida (Arcane Boots dele 11:18, Phase Boots dela 10:54). O Blink dele (23:54) chega quase junto com o BKB dela (24:18), então a partir dos 24 min os dois ficam com ferramenta de engajamento/anti-engajamento prontas quase ao mesmo tempo. O Shard dele (25:24, Demonic Cleanse) sai logo depois, dando mais um dispel/cura pro time dele bem na janela em que Marci devia estar fechando combo.
- o que ele faz com você: Disruption (banimento de 2,75s, cria duas ilusões suas com dano incoming 300% ao voltar) te tira da luta no momento exato em que você ia iniciar, e ainda te expõe a dano extra quando volta; Demonic Purge (300 a 600 de dano, atravessa BKB, remove buffs positivos e desacelera) te limpa qualquer buff de item mesmo com BKB ativo.
- o que você faz com ele: Dispose e Rebound funcionam normal nele (sem BKB próprio cedo, ele é squishy); o ideal é focar ele rápido antes dele conseguir banir você, já que Disruption tem cast range curto e ele precisa estar perto.
- itens que viram: seu BKB (24:18) não impede o Demonic Purge dele, então se ele tiver Scepter (2 cargas de Purge) a luta fica dura mesmo imune a magia; Basher trava ele rápido antes dele conseguir o segundo cast de Disruption.
- como jogar: mate Shadow Demon primeiro em qualquer luta de grupo, ele não aguenta troca direta; cuidado com o momento do Disruption nele, se ele te banir no meio do combo, o Rebound ou Unleash em andamento é cancelado.
- fonte: pro_dados/marci.json; pro_dados/shadow_demon.json; constants_abilities.json (shadow_demon_disruption, shadow_demon_demonic_purge, campo bkbpierce); aghs_desc (shadow demon scepter)

## Contra Disruptor (disruptor)

- placar: 61 vitórias em 110 jogos de pro pra Marci, 55,5% (fonte: pro_dados/marci.json, confrontos). Favorável pra Marci.
- por que importa: suporte pos 5/4 com bastante volume contra ela (110 jogos). Glimpse e Static Storm são as duas ferramentas que mais cancelam um combo físico de BKB no jogo, então é teste direto de timing.
- janelas: fase de farm parecida, Arcane Boots dele 11:24 contra Phase Boots dela 10:54. O Blink dele (24:00) sai praticamente junto com o BKB dela (24:18), e o Scepter dele (34:54, muta itens na Static Storm) só chega bem tarde, de modo que a maior parte do jogo Marci joga sem essa versão turbinada contra ela.
- o que ele faz com você: Glimpse (alcance até 1800 no nível 4) te teleporta de volta pra onde você estava 4s atrás, cancelando um Dispose ou Rebound que você acabou de dar; Static Storm (raio 550, até 350 de dano no nível 3, silencia) te impede de recastar o combo se você ficar dentro da área.
- o que você faz com ele: ele é extremamente frágil e sem fuga própria além do Blink, um combo limpo de Dispose + Rebound + Unleash mata ele rápido se você chegar antes dele usar Glimpse; Rebound fecha a distância antes dele formar a Kinetic Field (raio 350, dura até 4,4s) que te prenderia longe dele.
- itens que viram: seu BKB (24:18) bloqueia o silêncio e o dano da Static Storm, mas não impede o Glimpse te puxando de volta no tempo (ele não é dano nem debuff tradicional); se ele tiver Scepter (muta item ativo dentro da Static Storm), jogue BKB ou Blink antes dele fechar a área, não depois.
- como jogar: force a troca rápido, antes dele formar Static Storm; se ele usar Glimpse em você no meio do combo, não insista na mesma rota, ele já sabe que você vem.
- fonte: pro_dados/marci.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_glimpse, disruptor_static_storm, disruptor_kinetic_field); aghs_desc (disruptor scepter)

## Contra Pangolier (pangolier)

- placar: 57 vitórias em 90 jogos de pro pra Marci, 63,3% (fonte: pro_dados/marci.json, confrontos). Maior vantagem de Marci da lista com amostra grande (90 jogos).
- por que importa: maior vantagem com volume confiável. Pangolier é quase só mid/offlane no pro (64% no meio, 36% offlane, fonte: partidas pro 7.40-7.41, OpenDota), não divide lane com ela, e ainda assim é o confronto onde Marci mais vence: ela ataca a lane dele cedo enquanto ele ainda não tem nenhuma das ferramentas de escape prontas.
- janelas: antes dos 12 min (Mage Slayer 12:18, Diffusal Blade 12:24) ele ainda está puramente de farm de lane, sem Blink (19:12) nem Rollup/Gyroshell com item de suporte, janela boa pra Marci rotacionar e punir. A partir dos 19 min ele ganha mobilidade própria; o Scepter dele (24:54, Shield Crash ganha 4 Swashbuckle em direções ao redor) chega quase junto com o BKB dela (24:18), equilibrando a luta de grupo.
- o que ele faz com você: Gyroshell/Rollup (debuff immune, 80% de resistência mágica) te ignora completamente enquanto ele estiver rolando, nenhum dos seus stuns pega ele nesse estado; Swashbuckle (dano 35 a 125 por golpe, atravessa BKB) ainda machuca mesmo com você imune a magia.
- o que você faz com ele: antes do nível 6 dele ou antes do Rollup estar pronto, Dispose e Rebound pegam ele normal, e como ele é mid puro, raramente tem suporte perto pra salvar; depois que ele entra no estado de bola, espere passar antes de tentar o combo de novo, já que ele é imune a debuff ali.
- itens que viram: seu BKB (24:18) bloqueia o knockback e stun do Shield Crash/Rollup, mas o Swashbuckle (bkbpierce sim) ainda passa; Basher trava ele fora do estado de bola, mas não funciona enquanto ele estiver rolando.
- como jogar: ataque cedo, antes dos 19 min, é onde a vantagem é maior; depois que ele tiver o combo de bola pronto, não force o stun durante o Rollup, espere ele sair do estado pra fechar.
- fonte: pro_dados/marci.json; pro_dados/pangolier.json; constants_abilities.json (pangolier_gyroshell, pangolier_rollup, pangolier_swashbuckle, campo bkbpierce); partidas pro 7.40-7.41 (OpenDota); aghs_desc (pangolier scepter e shard)

## Contra Earth Spirit (earth_spirit)

- placar: 23 vitórias em 36 jogos de pro pra Marci, 63,9% (fonte: pro_dados/marci.json, confrontos). Maior vantagem percentual da lista, mas amostra menor (36 jogos, perto do mínimo de 30).
- por que importa: maior vantagem percentual de Marci com amostra válida. Earth Spirit também é iniciador de Força mobile, concorrendo pelo mesmo papel de abrir luta com deslocamento, e o confronto decide quem consegue puxar o combo primeiro.
- janelas: ele farma rápido pra um suporte, Urn of Shadows 6:24 e Power Treads 9:18 saem antes do Phase Boots dela (10:54), fase de farm levemente a favor dele. O BKB dele (22:36) sai antes do dela (24:18), janela de quase 2 min em que ele pode iniciar sem medo do combo dela; depois disso, o cast time de 0,2s do Unleash dela importa mais que o item em si.
- o que ele faz com você: Geomagnetic Grip (silencia 2,3 a 3,5s quem é atingido pelo remnant puxado) corta seu Dispose ou Rebound no meio se ele acertar primeiro; Magnetize (dano por segundo 45 a 135, atravessa BKB) ainda machuca mesmo com você imune a magia.
- o que você faz com ele: Dispose e Rebound (sem bkbpierce) não atravessam o BKB dele se ele comprar primeiro, mas o cast rápido das suas duas habilidades costuma vencer a corrida se vocês dois chegarem juntos na troca; interromper o Rolling Boulder dele (ele para se colidir com herói ou tomar stun) com Rebound bem cedo cancela o combo dele antes de começar.
- itens que viram: o BKB dele sai 1 min 42s antes do seu (22:36 contra 24:18), use isso contra você mesma: não inicie nessa janela sem saber se ele já tem o item pronto; depois do seu BKB, seu stun físico não funciona nele, mas o Magnetize dele também passa pelo seu, então vira troca de dano puro.
- como jogar: puxe a troca pra depois dos 24 min, quando os BKBs ficam parelhos e seu combo tem cast mais rápido; se ele acertar Geomagnetic Grip em você primeiro, recue, o silêncio cobre o tempo do Dispose inteiro.
- fonte: pro_dados/marci.json; pro_dados/earth_spirit.json; constants_abilities.json (earth_spirit_geomagnetic_grip, earth_spirit_magnetize, earth_spirit_rolling_boulder, campo bkbpierce)

## Contra Kunkka (kunkka)

- placar: 22 vitórias em 35 jogos de pro pra Marci, 62,9% (fonte: pro_dados/marci.json, confrontos). Vantagem forte, amostra pequena pra padrão de pro mas acima do mínimo de 30 jogos.
- por que importa: terceira maior vantagem com amostra válida, e outro exemplo de confronto sem lane fixa em comum: Kunkka joga offlane em 98% das partidas de pro 7.40-7.41, quase nunca no meio (fonte: partidas pro 7.40-7.41, OpenDota), Marci é suporte. Eles se cruzam em rotação e em luta de grupo, não em troca de creep.
- janelas: Kunkka sobe Phase Boots cedo (7:00) e Blade Mail (13:00), ritmo de core de lane. Marci chega no nível 6 antes dele conseguir qualquer item relevante de controle, e como o combo dela não depende de farm, ela consegue pressionar a lane dele bem antes do Ghostship (ultimate dele) estar relevante em luta de grupo. Os BKBs saem perto (24:18 dela, 25:00 dele), então a vantagem real é de quem chega na luta com nível mais alto, que tende a ser ela por rotacionar e pegar kill em outras lanes.
- o que ele faz com você: Tidebringer (autocast, bônus de dano 35 a 140, cleave de 150% numa área grande) ainda machuca o seu time inteiro numa troca de grupo; Torrent (dano 110 a 320, stun 1,4s, tem aviso visual antes de estourar) pode travar você se você ficar parada no combo.
- o que você faz com ele: Dispose e Rebound não atravessam BKB dele, mas como ele costuma comprar BKB mais tarde que ela (25:00 contra 24:18), a diferença é pequena; a vantagem real é de nível, Marci rotaciona e chega em luta de grupo mais forte relativamente ao que Kunkka consegue puramente de lane.
- itens que viram: X Marks the Spot dele pode te puxar de volta pra longe do time se ele marcar você antes da luta, atenção ao ícone; seu BKB (24:18) bloqueia Torrent e o stun do Ghostship.
- como jogar: pressione a lane dele cedo com rotação, ele não tem resposta de mobilidade antes do Blink de item; em luta de grupo, cuidado pra não ficar parada no meio do aviso visual do Torrent.
- fonte: pro_dados/marci.json; pro_dados/kunkka.json; constants_abilities.json (kunkka_tidebringer, kunkka_torrent, kunkka_x_marks_the_spot, campo bkbpierce); partidas pro 7.40-7.41 (OpenDota)

## Contra Brewmaster (brewmaster)

- placar: 11 vitórias em 30 jogos de pro pra Marci, 36,7% (fonte: pro_dados/marci.json, confrontos). Desvantagem forte, amostra no mínimo aceito (30 jogos), tratar como indicativo e não definitivo.
- por que importa: uma das maiores desvantagens de Marci da lista. Brewmaster é offlane tanque de iniciação, e o ultimate dele (Primal Split) simplesmente supera em poder de luta qualquer coisa que o combo dela consiga fazer sozinha.
- janelas: ele farma rápido pra offlane (Hand of Midas 11:30), e o Aghanim's Scepter dele (19:54, dá um nível extra pro Primal Split) chega bem antes do BKB dela (24:18). A partir do nível 6, cada luta de grupo em que ele consegue ativar Primal Split (3 Brewlings: Terra, Tempestade e Fogo, cada um com seu próprio Drunken Brawler) vira 3 unidades extras de controle e dano contra o time dela.
- o que ele faz com você: Cinder Brew (slow de movimento até 36%, raio 400; se você levar dano mágico ou puro enquanto molhada, pega fogo e o efeito se estende por mais 3s com queima) atrasa sua fuga ou seu engajamento; Thunder Clap (dano em área, raio 400, slow de movimento até 60% e de ataque até 60%, sem stun) trava seu ritmo de perseguição e soma ao controle que os Brewlings do Primal Split trazem.
- o que você faz com ele: antes do nível 6, ele é só um offlane tanque comum, Dispose e Rebound funcionam normal; o problema é que depois disso cada troca de grupo passa a ter 3 unidades extras dele, então a janela boa pra focar ele é isolado, antes da luta de time começar.
- itens que viram: seu BKB (24:18) bloqueia o dano e o slow do Thunder Clap e do Cinder Brew, mas não resolve o volume de dano dos 3 Brewlings somados numa luta de grupo cheia.
- como jogar: evite lutas de grupo cheias contra o Primal Split sem vantagem numérica clara; gankue ele isolado antes do nível 6, ou depois que o Primal Split já tiver sido gasto e estiver em cooldown.
- fonte: pro_dados/marci.json; pro_dados/brewmaster.json; constants_abilities.json (brewmaster_primal_split, brewmaster_cinder_brew, brewmaster_thunder_clap); constants_hero_abilities.json (kit atual do herói); aghs_desc (brewmaster scepter)

## Contra Treant Protector (treant)

- placar: 13 vitórias em 35 jogos de pro pra Marci, 37,1% (fonte: pro_dados/marci.json, confrontos). Desvantagem forte, amostra acima do mínimo (35 jogos).
- por que importa: segunda maior desvantagem de Marci com amostra válida. Treant é suporte pos 5 puro, assim como ela pode ser, mas o ultimate dele (Overgrowth) é desenhado especificamente pra anular o tipo de combo mobile que ela joga.
- janelas: fase de farm parecida, Arcane Boots dele 12:00 contra Phase Boots dela 10:54. O Shard dele (19:00, Eyes in the Forest, visão numa árvore por 360s) já ajuda a prever rotação dela bem cedo. O ponto decisivo é o nível 6: Overgrowth (raio 800, até 5s de duração) atravessa BKB (`bkbpierce: Yes`, confirmado em constants_abilities.json) e impede mover, atacar, ficar invisível ou usar Blink, ou seja, mesmo com o BKB dela pronto (24:18), o root dele ainda prende ela inteira.
- o que ele faz com você: Overgrowth prende você e seu time inteiro num raio de 800 por até 5s, sem dispel possível mesmo com BKB; Leech Seed (rota e desarma quem é atingido, cura aliados perto) ainda soma controle fora do ultimate.
- o que você faz com ele: antes do nível 6 ele não tem resposta nenhuma pro combo dela, Dispose e Rebound pegam ele normal, já que ele é lento (280 de velocidade de movimento, fonte: heroStats.json) e corpo a corpo; o problema real só aparece depois que ele consegue upar o ultimate.
- itens que viram: nenhum item seu resolve o Overgrowth, ele atravessa BKB; a única saída é matar ele antes dele castar, ou vencer a luta rápido o bastante pra sair do raio de 800 quando o efeito acabar (até 5s).
- como jogar: gankue ele antes do nível 6 sempre que puder, é a única janela limpa; depois disso, não force luta de grupo perto dele sem saber se o Overgrowth está disponível, porque não existe contra-item pra esse root específico.
- fonte: pro_dados/marci.json; pro_dados/treant.json; constants_abilities.json (treant_overgrowth, treant_leech_seed, campo bkbpierce); heroStats.json (velocidade de movimento); aghs_desc (treant shard)

## Contra Clockwerk (rattletrap)

- placar: 15 vitórias em 39 jogos de pro pra Marci, 38,5% (fonte: pro_dados/marci.json, confrontos). Terceira maior desvantagem da lista, amostra acima do mínimo (39 jogos).
- por que importa: suporte pos 4/5 igual a ela, mas com uma ferramenta que neutraliza justamente o estilo de jogo solo roaming dela: Hookshot engancha de longe, atravessa BKB e inicia o combate antes dela conseguir reagir.
- janelas: fase de farm parecida, Botas Tranquilas dele 8:30 contra Phase Boots dela 10:54. Hookshot já está disponível desde o nível 6 dele, bem cedo pra um suporte, então a ameaça de ser puxada de longe existe desde o início/meio de jogo, independente de item. O Blink dele (24:48) e o BKB dela (24:18) saem quase juntos; o Shard dele (30:00, Jetpack) só chega bem depois.
- o que ele faz com você: Hookshot (atravessa BKB, estuna num raio de 175 ao redor de quem ele engancha) te puxa de longe e te prende mesmo com BKB ativo, geralmente antes de você perceber que ele estava por perto; Power Cogs (atravessa BKB, dura até 8s) te prende numa gaiola se você for pega perto dele, sem conseguir sair andando.
- o que você faz com ele: antes dele conseguir te enganchar, Dispose e Rebound funcionam normal nele, e como ele costuma rotacionar sozinho igual você, é literalmente uma corrida de quem vê o outro primeiro; se ele errar o Hookshot (tem recarga alta), essa é a janela de punir ele isolado.
- itens que viram: seu BKB (24:18) não resolve nem o Hookshot nem os Power Cogs, os dois atravessam; a defesa real é visão de ward nas rotas de flanco pra não ser pega de surpresa.
- como jogar: ande com ward sentry ativa nas rotas onde ele costuma se esconder pra enganchar; não rotacione sozinha sem saber onde ele está, porque o alcance longo do Hookshot inverte quem gankeia quem.
- fonte: pro_dados/marci.json; pro_dados/rattletrap.json; constants_abilities.json (rattletrap_hookshot, rattletrap_power_cogs, campo bkbpierce); aghs_desc (clockwerk shard)
