---
id: confrontos-faceless_void
heroi: Faceless Void
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/faceless_void.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/batrider.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/windrunner.json
- dota-hub-conteudo-novo/pro_dados/razor.json
- dota-hub-conteudo-novo/pro_dados/dawnbreaker.json
- dota-hub-conteudo-novo/pro_dados/ursa.json
- dota-hub-conteudo-novo/pro_dados/centaur.json
- dota-hub-conteudo-novo/pro_dados/viper.json
- dota-hub-conteudo-novo/pro_dados/juggernaut.json
- dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://liquipedia.net/dota2/Debuff_Immunity
- https://liquipedia.net/dota2/Spell_immunity
- https://liquipedia.net/dota2/Disabling_Orders
- https://liquipedia.net/dota2/Templar_Assassin
- https://dotacoach.gg/en/items/black-king-bar
---

## Como foram escolhidos os 15 oponentes

Os 6 primeiros são os que mais jogaram contra o Void em partida profissional (7.40 e 7.41, dados de `/heroes/41/matchups` da OpenDota): Tusk, Shadow Fiend, Batrider, Tiny, Snapfire e Jakiro. Depois entram dois carries que aparecem muito nas mesmas partidas mas não estão no top 6, Windranger e Razor, pra cobrir o confronto carry contra carry. Em seguida as duas maiores vantagens do Void com amostra de 30+ jogos, Dawnbreaker e Ursa, e as três maiores desvantagens, Centaur Warrunner, Viper e Juggernaut. Fecha com Dragon Knight e Templar Assassin, dois carries com alto volume de jogos em pro no patch atual (1.708 e 1.681 partidas each, fonte: contagem de `resumo.n` nos pro_dados de cada herói), que raramente dividem lane com o Void mas decidem o jogo contra ele do mesmo jeito que Alchemist decide contra Morphling.

## Contra Tusk (tusk)
- placar: 63 vitórias em 131 jogos de pro, 48,1% (fonte: OpenDota matchups, pro_dados/faceless_void.json)
- por que importa: é o herói que mais jogou contra o Void em pro no patch atual, de longe. Tusk é suporte/offlane e quase nunca compartilha lane com ele, mas aparece no draft dos dois lados o tempo todo porque os dois escalam bem com farm de aliado.
- janelas: até os 10 min Tusk não tem pico nenhum, só Ice Shards pra zonear o rio (lh10 de 6 contra 48 do Void, fonte: resumo dos dois pro_dados). Dos 15 aos 20 min ele junta o Blink Dagger (mediana 19:00, 2.655 jogos) e vira ameaça de iniciação; o Void nessa janela já tem Treads (6:18) e está construindo o Battle Fury (mediana 15:18, p25 13:54). Depois dos 25 min o jogo é sobre o time do Tusk conseguir isolar o Void antes da Chronosphere, porque sozinho ele não ganha a troca.
- o que ele faz com você: Snowball (dano base 80 a 260 mais bônus por aliado que entra na bola) pega o Void fora de posição e o arrasta pro resto do time; Ice Shards (300 de dano total, 7 segundos de barreira) corta sua rota de fuga pro Time Walk; Tag Team amplifica o dano físico que você toma de 25 a 100 por 6 segundos, então se você entrar auto-atacando em cima de um alvo marcado, o time dele te pune.
- o que você faz com ele: Time Walk (650 a 800 de alcance, invulnerável e desfaz o dano dos últimos 2s) escapa de Snowball se ativado a tempo. Chronosphere (raio 500, 3,75 a 4,75s, atravessa imunidade a feitiço) trava o Tusk e o resto do time dele junto, sem exceção pra Walrus Punch ou pra bola em movimento.
- itens que viram: Mjollnir (mediana 21:48) aumenta sua chance de acertar Time Lock contra um Tusk que não tem escape de verdade fora do Blink; Black King Bar (28:12) segura o stun da Snowball e o combo com o resto do time dele.
- como jogar: na lane só farme, Tusk não te ameaça sozinho. No meio de jogo, puxe a luta pra perto de onde seus aliados já estão, porque o maior perigo dele é o combo em grupo, não o 1x1. Guarde a Chrono pra quando ele já tiver gastado Snowball ou Ice Shards, assim ele entra na esfera sem recurso.
- fonte: pro_dados/tusk.json; pro_dados/faceless_void.json; constants_abilities.json (tusk_snowball, tusk_ice_shards, tusk_tag_team, faceless_void_chronosphere, faceless_void_time_walk)

## Contra Shadow Fiend (nevermore)
- placar: 60 vitórias em 127 jogos de pro, 47,2% (fonte: OpenDota matchups, pro_dados/faceless_void.json)
- por que importa: 2º em jogos de pro contra o Void. É o farmador mais eficiente do patch (gpm 658, lh10 de 78 contra 48 do Void, fonte: resumo dos dois pro_dados), então os dois competem pelo mesmo recurso, tempo de jogo sem ser incomodado.
- janelas: até os 10 min Shadow Fiend já tem quase o dobro dos last hits do Void, mas é um mid raseiro que depende de Razes em creep, sem presença de lane contra o Void (que fica na safelane). Dos 20 aos 26 min os dois correm pro mesmo marco, Black King Bar (25:12 mediana do SF contra 28:12 do Void). Quem fecha o BKB primeiro dita quem pode iniciar sem medo do Requiem.
- o que ele faz com você: Requiem of Souls (raio 1000, até 20 almas, reduz 20 a 30% de velocidade e 5 a 15% de resistência mágica, medo de até 2,15s) atravessa BKB parcialmente pela quantidade de dano e pode te pegar isolado enquanto você está limpando camp sozinho.
- o que você faz com ele: Chronosphere trava o SF e todo mundo perto dele antes que ele consiga soltar o Requiem, e Time Dilation (raio 775, dano por stack de ability em recarga) pune justamente um herói que depende de muitas magias em sequência pra funcionar.
- itens que viram: Black King Bar é o item decisivo dos dois lados; quem chega primeiro define quem inicia a troca de BKB ligado sem medo do Requiem ou da Chrono.
- como jogar: evite farmar sozinho e isolado depois dos 20 min, é exatamente aí que o SF te pega com Requiem. Se seu BKB sair antes do dele, force a troca; se sair depois, jogue de around team até alcançar.
- fonte: pro_dados/nevermore.json; pro_dados/faceless_void.json; constants_abilities.json (nevermore_requiem, faceless_void_chronosphere, faceless_void_time_dilation)

## Contra Batrider (batrider)
- placar: 59 vitórias em 116 jogos de pro, 50,9% (fonte: OpenDota matchups, pro_dados/faceless_void.json)
- por que importa: 3º em jogos de pro contra o Void, e é o contador mais direto da Chronosphere entre os suportes/offlaners do jogo.
- janelas: Batrider é fraco até o Blink Dagger (mediana 17:42, 1.139 jogos), quando passa a conseguir se posicionar pro Flaming Lasso. O Void nessa hora já está perto do Battle Fury (15:18) e ganhando ritmo de farm.
- o que ele faz com você: Flaming Lasso (200 a 500 de dano total em 2,25 a 3,25s, quebra só com blink ou teleporte) agarra o Void especificamente e o arrasta pra fora, mesmo que você já tenha ativado a própria Chronosphere. A Chrono trava os inimigos no raio onde foi lançada, não segue o seu corpo, então um Lasso bem cronometrado te tira da área antes que você consiga bater em quem está preso lá dentro.
- o que você faz com ele: Time Walk desfaz dano recebido nos últimos 2 segundos, então se o Lasso te pegou mas o dano chegou depois do início do giro, parte dele volta; e a Chrono ainda trava o resto do time dele mesmo que você tenha sido puxado pra fora.
- itens que viram: Black King Bar (28:12 Void, 26:42 Batrider) não impede o Lasso, que não é feitiço de dano direto mas um agarrão; a defesa real é posicionamento, ficar fora do alcance de 200 do Lasso quando for cronar.
- como jogar: olhe o minimapa pro Blink Dagger do Batrider antes de soltar Chrono no meio do grupo dele; se ele já tem o item, jogue a Chrono num ângulo onde ele não tenha linha de visão limpa pra te lassar de fora.
- fonte: pro_dados/batrider.json; pro_dados/faceless_void.json; constants_abilities.json (batrider_flaming_lasso, faceless_void_chronosphere, faceless_void_time_walk)

## Contra Tiny (tiny)
- placar: 58 vitórias em 115 jogos de pro, 50,4% (fonte: OpenDota matchups, pro_dados/faceless_void.json)
- por que importa: 4º em jogos de pro contra o Void e também carry pos 1, então entra tanto pelo volume de partidas quanto pela função.
- janelas: Tiny junta Blink Dagger cedo (mediana 15:54, 2.546 jogos) pra combar Toss com Avalanche, ainda antes do Battle Fury do Void (15:18, praticamente empatado). Dos 17 aos 26 min ele soma Invis Sword (17:36) e Black King Bar (26:42), período em que consegue iniciar escondido e travar o Void com burst antes da Chrono dele sair pronta de novo.
- o que ele faz com você: Avalanche (até 360 de dano em área, com stun) seguido de Toss (até 360 de dano) forma o combo clássico de iniciação dele; Craggy Exterior aplica até 10 stacks de redução de dano em quem bate nele, o que penaliza direto o seu kit de right-click.
- o que você faz com ele: Chronosphere trava o combo de Tiny antes que ele consiga empilhar Avalanche e Toss; e como Tiny é frágil fora do Grow, qualquer troca de dano sustentado via Time Lock favorece você depois dos 20 min.
- itens que viram: Time Dilation castiga o Blink Dagger de recarga curta do Tiny, cada recarga em andamento vira um stack de dano e lentidão; do lado dele, Invis Sword serve pra achar o ângulo de iniciação sem ser visto antes da sua Chrono.
- como jogar: respeite o nível 6 do Tiny como o primeiro momento de risco real, Avalanche mais Toss mata rápido. Depois do seu Battle Fury, você farma mais rápido que ele em terreno aberto; force o jogo pra lá.
- fonte: pro_dados/tiny.json; pro_dados/faceless_void.json; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_craggy_exterior, faceless_void_chronosphere, faceless_void_time_dilation)

## Contra Snapfire (snapfire)
- placar: 58 vitórias em 112 jogos de pro, 51,8% (fonte: OpenDota matchups, pro_dados/faceless_void.json)
- por que importa: 5º em jogos de pro contra o Void, suporte que aparece em quase todo draft pela versatilidade de Mortimer Kisses e Firesnap Cookie.
- janelas: o grande marco dela é o Aghanim's Shard, mediana 16:54 (1.919 de 2.456 jogos, a maioria das partidas compra). Isso cai bem na janela em que o Void ainda está completando o Battle Fury (15:18) e é mais vulnerável a ser pego parado numa camp.
- o que ele faz com você: Mortimer Kisses (8 globos de 180 a 360 de dano em 5,5s) e Scatterblast (100 a 280 de dano em cone) formam dano de área que te tira de farm; com o Shard, o Firesnap Cookie vira um segundo estouro de controle.
- o que você faz com ele: Chronosphere anula toda a utilidade dela de uma vez, Snapfire não tem nenhum escape individual fora de Firesnap Cookie nela mesma, que também fica presa se lançada contra ela própria dentro do raio.
- itens que viram: Black King Bar seu não bloqueia o Spit Out do Scepter porque é dano de impacto mais stun que aplica antes da sua janela de reação; o retorno é farmar rápido o bastante pra não depender de lane contra ela.
- como jogar: evite ficar parado limpando camp perto de onde ela pode te alcançar com Scatterblast depois do nível 7. Puxe fights pra longe da visão dela, Snapfire perde quase todo o valor sem conseguir mirar.
- fonte: pro_dados/snapfire.json; pro_dados/faceless_void.json; constants_abilities.json (snapfire_mortimer_kisses, snapfire_scatterblast); aghs_desc (snapfire shard)

## Contra Jakiro (jakiro)
- placar: 52 vitórias em 107 jogos de pro, 48,6% (fonte: OpenDota matchups, pro_dados/faceless_void.json)
- por que importa: 6º em jogos de pro contra o Void, suporte duplo de dano de área que raramente lanea contra ele mas entra quase sempre no mesmo draft do patch.
- janelas: Jakiro não tem pico de item, o pico dele é de nível, Macropyre no 6. Dos 10 aos 20 min, se ele consegue acertar Macropyre numa rota de farm do Void, cancela o ciclo de camps inteiro (10 segundos de queima em linha de 500 de largura).
- o que ele faz com você: Macropyre (100 a 200 de dano por segundo em área, 10s de duração) te expulsa de qualquer camp ou lane onde for lançado; Ice Path (até 2s de stun) abre a sequência pra isso.
- o que você faz com ele: Jakiro não tem mobilidade nenhuma fora de Flying Courier, então uma Chrono bem posicionada o prende sem chance de resposta, e o Macropyre dele nem sai se ele for travado antes.
- itens que viram: nenhum item seu neutraliza Macropyre diretamente, a resposta é posicional: nunca farme uma camp inteira parado se o Jakiro tiver visão dela.
- como jogar: olhe pra visão do time dele antes de entrar numa camp grande. Se ele não tem Macropyre disponível (recarga alta), a rota é segura; se tem, pule pra outra camp.
- fonte: pro_dados/jakiro.json; pro_dados/faceless_void.json; constants_abilities.json (jakiro_macropyre, jakiro_ice_path)

## Contra Windranger (windrunner)
- placar: 46 vitórias em 90 jogos de pro, 51,1% (fonte: OpenDota matchups, pro_dados/faceless_void.json)
- por que importa: não está no top 6 de jogos, mas é o carry/suporte híbrido mais recorrente contra o Void fora dele, cobrindo o confronto carry contra carry mesmo quando ela joga de pos 4.
- janelas: os dois constroem a mesma árvore de dano, Windranger sai com Maelstrom aos 13:24 e vira Mjollnir aos 18:18; o Void sai de Battle Fury (15:18) pra Mjollnir (21:48). Até os 18 min ela ataca mais rápido que você; depois dos 22, quando os dois já têm Mjollnir, o combate vira sobre quem consegue isolar o outro.
- o que ele faz com você: Shackleshot prende você numa árvore ou creep perto se você andar perto de linha reta com algo atrás; Powershot (170 a 470 de dano, reduz conforme atravessa unidades) ameaça de longe antes de qualquer troca corpo a corpo.
- o que você faz com ele: Chronosphere trava ela antes que consiga usar Windrun pra escapar, já que Windrun dá evasão a ataque físico mas não remove a prisão da Chrono.
- itens que viram: Black King Bar (24:24 dela, 28:12 seu) é quem resolve o Shackleshot; os dois correndo pro mesmo Mjollnir faz a troca de dano direta decidir quem sobra vivo primeiro.
- como jogar: ataque em linha reta sem árvore ou creep logo atrás pra não deixar o Shackleshot pegar; depois do seu Battle Fury, você tem mais HP e sustenta melhor a troca prolongada que ela.
- fonte: pro_dados/windrunner.json; pro_dados/faceless_void.json; constants_abilities.json (windrunner_shackleshot, windrunner_powershot, windrunner_windrun, faceless_void_time_lock)

## Contra Razor (razor)
- placar: 46 vitórias em 82 jogos de pro, 56,1% (fonte: OpenDota matchups, pro_dados/faceless_void.json)
- por que importa: outro carry recorrente contra o Void fora do top 6, com vantagem clara pro Void na amostra de pro.
- janelas: Razor é forte cedo (lh10 de 54, quase igual ao do Void) e constrói Manta aos 21:18, quase junto com o Manta do Void (23:24). A arma dele, Static Link, perde força justamente contra ilusão, então a corrida de Manta favorece você.
- o que ele faz com você: Static Link (rouba de 6 a 24 de dano por segundo; o link em si dura 10s, mas o bônus de dreno em cima dele segue ativo por até 18s) drena seu dano enquanto ele foge; Eye of the Storm persegue quem está com menos vida no raio, o que pode te alcançar se você entrar baixo de vida numa troca.
- o que você faz com ele: Manta Style divide o alvo do Static Link entre você e as ilusões, cortando o quanto ele realmente drena; e a Chrono trava o Razor antes que ele consiga manter o link a distância segura.
- itens que viram: Manta é literalmente o item que anula o kit principal dele, por isso o confronto pende pro Void depois dos 20 min.
- como jogar: se ele linkar você, ative Manta na hora pra dividir o dreno; evite correr em linha reta longe dele enquanto o link estiver ativo, isso só aumenta o tempo de drenagem.
- fonte: pro_dados/razor.json; pro_dados/faceless_void.json; constants_abilities.json (razor_static_link, razor_eye_of_the_storm)

## Contra Dawnbreaker (dawnbreaker)
- placar: 58 vitórias em 91 jogos de pro, 63,7%, uma das maiores vantagens do Void em pro (fonte: OpenDota matchups, pro_dados/faceless_void.json)
- por que importa: offlaner de luta recorrente contra o Void e a maior vantagem dele com amostra grande (91 jogos).
- janelas: Dawnbreaker farma rápido cedo (lh10 de 51) e tem pico de nível 6 a 9 com o combo Starbreaker mais Celestial Hammer. Mas ela precisa lutar pra valer o pick, e lutar cedo contra um Void que só farma não rende presença suficiente; dos 20 min em diante, quando o Void já tem Broadsword (11:12) e está perto do Battle Fury, ela perde relevância de dano sozinho.
- o que ele faz com você: Starbreaker (3 golpes mais smash final, até 70 de dano bônus por golpe) te pune se você ficar parado perto dela; Solar Guardian precisa de um aliado como âncora pra ativar, então raramente te pega isolado no meio do mapa.
- o que você faz com ele: você simplesmente farma mais rápido e escala mais que ela sem precisar reagir a nada específico do kit dela; quando a Chrono sai, ela não tem nenhum escape individual fora de Celestial Hammer, que a puxa de volta na direção do item, não pra longe da esfera.
- itens que viram: o seu Broadsword cedo (11:12) já dá HP suficiente pra aguentar o combo dela sem morrer; o Shard dela (20:48, imunidade a debuff durante Starbreaker) ajuda ela a sobreviver mas não resolve o problema de farm.
- como jogar: não brigue com ela na fase de linha à toa, deixe o jogo chegar nos 20 min. Depois disso o confronto já pende forte pro seu lado só de continuar farmando.
- fonte: pro_dados/dawnbreaker.json; pro_dados/faceless_void.json; constants_abilities.json (dawnbreaker_fire_wreath, dawnbreaker_solar_guardian); aghs_desc (dawnbreaker shard)

## Contra Ursa (ursa)
- placar: 39 vitórias em 65 jogos de pro, 60%, 2ª maior vantagem do Void em pro com amostra de 30+ (fonte: OpenDota matchups, pro_dados/faceless_void.json)
- por que importa: também carry, com uma das maiores vantagens do Void no patch.
- janelas: Ursa precisa de alvo isolado pra empilhar Fury Swipes (dano crescente a cada acerto seguido no mesmo alvo) e usar Overpower. Ele junta Blink Dagger aos 16:48 pra caçar, mas é justamente isso que a Chronosphere (disponível desde o nível 6) neutraliza: ela trava ele no meio do pulo.
- o que ele faz com você: Overpower (3 a 6 ataques com até 400 de velocidade de ataque bônus) mais Fury Swipes empilhado mata rápido quem fica parado trocando com ele; Earthshock (slow de até 40%) corta sua fuga de Time Walk se usado a tempo.
- o que você faz com ele: Chronosphere trava o pulo de isolamento dele antes que o combo comece. Com Aghanim's Scepter, Ursa ganha o direito de usar Enrage mesmo desabilitado (fonte: aghs_desc), o que ajuda ele a sobreviver dentro da esfera, mas pros raramente fecham esse item antes da fase decisiva, e mesmo enragado ele continua sem poder se mover ou atacar lá dentro.
- itens que viram: seu Battle Fury (15:18) te dá HP e DPS suficiente pra não precisar entrar na queda de Fury Swipes dele; o Basher dele (22:30) é o item que mais ameaça se ele te pegar fora da Chrono.
- como jogar: nunca farme uma camp sozinho e visível depois que ele tiver Blink Dagger; se ele vier pra cima, Chrono assim que ele estiver no alcance, antes de ele acumular Overpower.
- fonte: pro_dados/ursa.json; pro_dados/faceless_void.json; constants_abilities.json (ursa_overpower, ursa_fury_swipes, ursa_enrage, faceless_void_chronosphere); aghs_desc (ursa scepter)

## Contra Centaur Warrunner (centaur)
- placar: 16 vitórias em 48 jogos de pro, 33,3%, a maior desvantagem do Void em pro com amostra de 30+ (fonte: OpenDota matchups, pro_dados/faceless_void.json)
- por que importa: pior matchup registrado do Void com amostra confiável.
- janelas: Centaur farma rápido cedo com Helm of Iron Will (4:48) e Helm of the Dominator (8:48), e o pico dele é de nível, Hoof Stomp disponível desde o 1. Entre os 15 e 25 min, com Blink Dagger (19:36), ele consegue iniciar fights antes que o Void tenha Battle Fury pronto e tankado o suficiente.
- o que ele faz com você: Hoof Stomp (até 2,2s de stun) abre qualquer troca; Stampede (slow de 100% ao atropelar, dano por força) ignora seu Time Walk se você tentar fugir em linha reta pela frente da carga; Double Edge causa dano alto baseado em força, que escala igual ou mais rápido que seu HP.
- o que você faz com ele: Chronosphere trava ele e o time dele, mas Centaur não é o core do time dele, perder ele isolado na esfera não quebra o jogo do jeito que quebraria com um carry; ele raramente se importa em ser trocado pela Chrono.
- itens que viram: Vanguard cedo (8:30) dá a ele bloqueio de dano que atrapalha seu farm de right-click contra ele; do seu lado, Black King Bar (28:12) é o que segura o Hoof Stomp pra você poder fechar a luta.
- como jogar: não dependa só da Chrono pra vencer essa, ela não desarma o time dele sozinha porque Centaur é descartável. Jogue pra evitar o Hoof Stomp em zonas apertadas e force o jogo pro farm puro, onde ele não tem resposta.
- fonte: pro_dados/centaur.json; pro_dados/faceless_void.json; constants_abilities.json (centaur_hoof_stomp, centaur_stampede, centaur_double_edge)

## Contra Viper (viper)
- placar: 14 vitórias em 40 jogos de pro, 35%, 2ª maior desvantagem do Void em pro (fonte: OpenDota matchups, pro_dados/faceless_void.json)
- por que importa: o kit dele ataca justamente o que sustenta o Void, velocidade de ataque e o proc de Time Lock.
- janelas: Viper monta Aghanim's Scepter cedo pros padrões dele, mediana 18:12 (742 de 1.427 jogos), que dá um Nethertoxin em área ao redor dele mesmo. Isso cai bem antes do Battle Fury do Void estar pronto o bastante pra ele tankar uma troca prolongada.
- o que ele faz com você: Nethertoxin (45 a 125 de dano por segundo crescente, reduz 30 a 60% de velocidade de ataque) desliga seu DPS de right-click; Viper Strike aplica Break, que desativa habilidades passivas, incluindo o Time Lock do Void enquanto o debuff durar (mecânica confirmada em fontes públicas, ver liquipedia Disabling Orders).
- o que você faz com ele: Chronosphere ainda trava ele, mas sem reduzir o dano que o Nethertoxin já tiver aplicado antes de ele ser pego; o melhor uso da Chrono aqui é antecipar o combo dele, não reagir depois.
- itens que viram: Black King Bar não limpa o Break do Viper Strike (debuffs de ultimate costumam atravessar imunidade a feitiço), então a resposta real é posicionamento e dodge, não item; Manta ajuda a dividir o alvo do Nethertoxin entre ilusões.
- como jogar: evite trocar com ele parado, o Nethertoxin é área e dano crescente; se ele soltar Viper Strike em você, Time Lock para de proc, então jogue essa troca pelo dano bruto do Battle Fury, não pelo proc.
- fonte: pro_dados/viper.json; pro_dados/faceless_void.json; constants_abilities.json (viper_nethertoxin, viper_viper_strike, faceless_void_time_lock); aghs_desc (viper scepter); liquipedia.net/dota2/Disabling_Orders

## Contra Juggernaut (juggernaut)
- placar: 13 vitórias em 37 jogos de pro, 35,1%, 3ª maior desvantagem do Void em pro (fonte: OpenDota matchups, pro_dados/faceless_void.json)
- por que importa: o outro hard carry clássico do patch sem lane em comum, e o pior resultado do Void entre os carries puros.
- janelas: os dois correm a mesma receita, Battle Fury cedo (Jugg 13:36 contra 15:18 do Void) seguido de Manta (Jugg 20:42, Void 23:24). Jugg chega mais rápido nos dois marcos, então na maior parte do jogo médio ele está um passo à frente em DPS bruto.
- o que ele faz com você: Blade Fury (80 a 170 de dano por segundo, imune a feitiço e dispel forte no fim) escapa de Time Dilation e ainda ameaça quem tenta te zonear; Omnislash (3 a 3,5s invulnerável, pulando entre alvos próximos) ameaça matar um Void baixo de vida antes de ele conseguir reagir, já que você não tem nenhum escape instantâneo além de Time Walk, que tem recarga.
- o que você faz com ele: Chronosphere trava ele fora de Blade Fury (que dá imunidade a feitiço, logo não é travado) e fora de um Omnislash já em andamento; a janela boa é cronar antes de ele ativar qualquer um dos dois.
- itens que viram: Butterfly dele (26:12) sobe muito a evasão contra seu right-click; do seu lado, Mjollnir (21:48) ajuda a furar evasão com o proc de raio, que não depende de acerto físico garantido.
- como jogar: não entre em troca de right-click parado contra ele sem vantagem de nível ou item, ele sai na frente na corrida de item. Guarde a Chrono pra abrir a luta, nunca pra reagir depois que ele já ativou Blade Fury ou Omnislash.
- fonte: pro_dados/juggernaut.json; pro_dados/faceless_void.json; constants_abilities.json (juggernaut_blade_fury, juggernaut_omni_slash, faceless_void_time_dilation)

## Contra Dragon Knight (dragon_knight)
- placar: 29 vitórias em 49 jogos de pro, 59,2% (fonte: OpenDota matchups, pro_dados/faceless_void.json)
- por que importa: carry com alto volume de jogos em pro no patch (1.708 partidas no total, fonte: resumo.n de pro_dados/dragon_knight.json), e um confronto claro de hard carry contra hard carry mesmo sem lane em comum, como o Alchemist contra o Morphling.
- janelas: Dragon Knight farma parecido com o Void (lh10 de 63 contra 48) e não tem nenhum disable de longo alcance além de Dragon Tail (stun curto, até 2,4s). Até os 20 min a troca é de right-click puro; depois disso, sem iniciação própria forte, ele fica refém de o time dele abrir a luta, e é justamente aí que a Chronosphere do Void decide sozinha.
- o que ele faz com você: Breathe Fire (até 320 de dano em cone, reduz seu dano de ataque) enfraquece sua troca de DPS; Dragon Tail trava você por até 2,4s, tempo suficiente pro time dele burstar em cima.
- o que você faz com ele: Chronosphere trava ele sem nenhuma resposta, DK não tem blink nem escape instantâneo fora de Elder Dragon Form, que só dá alcance e velocidade, não imunidade a controle.
- itens que viram: o Battle Fury seu (15:18) sobe DPS mais rápido do que o Power Treads dele (6:00) sozinho resolve; Black King Bar dos dois (23:18 dele, 28:12 seu) decide quem pode iniciar sem medo do stun do outro.
- como jogar: evite ficar no alcance do Dragon Tail sem iniciar primeiro; depois que a Chrono estiver disponível, qualquer troca prolongada tende a favorecer você.
- fonte: pro_dados/dragon_knight.json; pro_dados/faceless_void.json; constants_abilities.json (dragon_knight_dragon_tail, dragon_knight_breathe_fire, faceless_void_chronosphere)

## Contra Templar Assassin (templar_assassin)
- placar: 16 vitórias em 30 jogos de pro, 53,3%, amostra no limite mínimo de 30 jogos (fonte: OpenDota matchups, pro_dados/faceless_void.json)
- por que importa: outro carry com alto volume de jogos em pro no patch (1.681 partidas, fonte: resumo.n de pro_dados/templar_assassin.json), hard carry sem lane compartilhada que decide o jogo pelo item contra o seu kit de right-click.
- janelas: TA é o carry mais rápido do patch em farm (lh10 de 73, gpm de 680, os maiores da lista), com Desolator pronto aos 14:18. O Void só alcança ritmo parecido depois do próprio Battle Fury (15:18); até lá, TA está sempre um passo à frente.
- o que ele faz com você: Refraction dá de 3 a 6 instâncias de bloqueio total de dano por ataque, o que absorve parte direta dos seus acertos de right-click e do bônus de Time Lock; Desolator reduz sua armadura já baixa, acelerando o quanto você morre numa troca aberta depois que o Refraction dela acabar (mecânica do bloqueio confirmada via liquipedia.net/dota2/Templar_Assassin).
- o que você faz com ele: Chronosphere trava ela sem Refraction ajudar em nada, porque a esfera é controle, não dano, e Refraction só bloqueia dano; Manta Style ajuda a dividir o foco das Psi Blades dela em cima de você.
- itens que viram: contra o bloqueio do Refraction, dano de longo prazo (Mjollnir, que acerta várias vezes) gasta as instâncias dela mais rápido do que um nuque único; do lado dela, Desolator é o item que mais pesa contra sua sobrevivência.
- como jogar: não troque ataque por ataque contra ela logo que o Refraction estiver ativo, espere as instâncias de bloqueio acabarem. Prepare a Chrono pra quando ela avançar pro farm, já que ela não tem disable nenhum pra te impedir de cronar primeiro.
- fonte: pro_dados/templar_assassin.json; pro_dados/faceless_void.json; constants_abilities.json (templar_assassin_refraction, faceless_void_chronosphere); liquipedia.net/dota2/Templar_Assassin
