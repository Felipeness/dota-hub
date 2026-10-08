---
id: confrontos-bounty_hunter
heroi: Bounty Hunter
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/bounty_hunter.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/chen.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/pudge.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/spirit_breaker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tidehunter.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dark_willow.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://liquipedia.net/dota2/Detection
- https://dota2.fandom.com/wiki/Pudge
---

Critério de escolha dos 14 oponentes: os 6 com mais jogos contra Bounty Hunter em pro (Tusk, Chen, Snapfire, Jakiro, Dragon Knight, Ember Spirit); mais 4 da mesma posição 4/5 com alto volume em pro (Rubick, Hoodwink, Pudge, Spirit Breaker); os 2 piores saldos do BH com 30+ jogos (Storm Spirit, Tidehunter); e os 2 melhores saldos do BH com 30+ jogos (Dark Willow, Templar Assassin), que não dividem lane com ele mas aparecem como os confrontos mais lopsided da lista. O motivo específico de cada um está no "por que importa" do bloco.

## Contra Tusk (tusk)
- placar: 46V/86 jogos (53.5%) em pro 7.40+7.41, fonte pro_dados/bounty_hunter.json (matchups OpenDota)
- por que importa: é o par mais frequente em pro contra Bounty Hunter (86 jogos), ambos pos 4 que vivem fora da própria lane, cruzando o mapa atrás do mesmo pick-off isolado
- janelas: até 15 min nenhum dos dois farma de verdade (lh10 do BH é 10, do Tusk é 6), o jogo é só sobre quem acha o primeiro kill; dos 16 aos 19 min o Tusk ganha Blink Dagger (mediana 19.0 min, p25 16.8) e passa a iniciar Tag Team em quem estiver fora de posição; a partir dos 24-25 min ele carrega Dust of Appearance (mediana 24.7) que varre o Shadow Walk puro; o Blink do próprio Bounty Hunter só chega aos 30.4 min (mediana, n=31, partidas pro 7.40-7.41 via OpenDota explorer), então entre o Blink dele e o seu existe uma janela de pouco mais de 11 minutos em que ele caça e você só foge ou usa Force Staff (mediana 25 min)
- o que ele faz com você: Ice Shards (300 de dano no nível 4, 7 cacos num raio de 200) cria terreno impassável que prende mesmo um alvo invisível, porque não precisa ver pra travar passagem; Walrus Punch (crítico de até 300%) fecha o combo com dano instantâneo se ele te alcançar
- o que você faz com ele: Shadow Walk seguido de Jinada (até 175 de dano bônus + 36 de ouro roubado no nível 4) é pick-off limpo contra ele antes do nível 6, já que o kit dele não tem stun confiável até ter Ice Shards disponível com frequência; Track amplifica até 16% o dano que ele toma quando se compromete com Tag Team sem saída
- itens que viram: Dust (dele) neutraliza o Shadow Walk puro; Aghanim's Scepter seu (Shuriken Toss aplica Jinada e ganha alcance até 525 no nível 4) resolve isso te dando o pick-off à distância sem precisar fechar os 150 de alcance do Jinada normal
- como jogar: force o pick-off antes dele ter Blink, ande sempre com Track pronto pra puxar o burst do time nele; depois que ele carregar Dust, troque pra Shard em aliado (Friendly Shadow) ou leve Scepter pra marcar e bater de longe
- fonte: pro_dados/bounty_hunter.json; pro_dados/tusk.json; constants_abilities.json (tusk_ice_shards, tusk_walrus_punch, bounty_hunter_jinada); OpenDota explorer (blink dagger do Bounty Hunter em partidas pro 7.40-7.41, n=31); aghs_desc (bounty hunter scepter)

## Contra Chen (chen)
- placar: 35V/72 jogos (48.6%), fonte pro_dados/bounty_hunter.json
- por que importa: 2º mais comum em pro contra BH (72 jogos), também pos 4/5 puro, disputa o mesmo papel de visão, rotação e farm auxiliar fora da lane
- janelas: 8-11 min Chen monta Ring of Basilius (mediana 8.6) e Arcane Boots (10.7) pra sustentar mana; 13-16 min chegam Headdress (13.6) e Mekansm (15.8), quando o time dele já vence trocas de HP em grupo; 21-22 min fecha Guardian Greaves (21.6), virando suporte de teamfight puro. Bounty Hunter ganha a janela de 0-20 min se achar um kill isolado antes do Chen empurrar o time pra 5v5
- o que ele faz com você: Test of Faith (até 400 de dano ou 200 de cura) ameaça seu HP baixo de suporte à distância sem precisar de setup; Holy Persuasion dá velocidade e até 18% de dano bônus pros creeps dele, que podem escoltar o time até você
- o que você faz com ele: Chen tem HP e armadura baixos de suporte puro, Shadow Walk+Jinada o mata rápido se ele se isolar puxando creep; Track nele rende o bounty extra do Big Game Hunter nas vezes em que ele está entre os 3 maiores patrimônios do time, mais raro mas acontece tarde
- itens que viram: Mekansm/Guardian Greaves dele mudam o ritmo pra teamfight, então sua melhor janela é antes dos 20 min; Aghanim's Shard seu (Friendly Shadow) te deixa escoltar o carry sem perder a própria invisibilidade quando o Chen tentar iniciar em grupo
- como jogar: cace o Chen isolado nos primeiros 15-20 min antes do Mekansm; depois disso jogue em volta das lutas de 5, puxando Track no suporte dele assim que ele se comprometer com Test of Faith
- fonte: pro_dados/bounty_hunter.json; pro_dados/chen.json; constants_abilities.json (chen_test_of_faith, chen_holy_persuasion, bounty_hunter_big_game_hunter)

## Contra Snapfire (snapfire)
- placar: 42V/71 jogos (59.2%), fonte pro_dados/bounty_hunter.json
- por que importa: 3º mais jogado contra BH em pro (71 jogos), também pos 4/5, mesmo papel de pick-off a distância (Firesnap Cookie x Shadow Walk+Jinada)
- janelas: 10-11 min Snapfire tem Arcane Boots (10.6); aos 17 min (mediana) já carrega Aghanim's Shard, muito cedo pro item, sinal de como o pro prioriza o combo dela cedo; 20-22 min chegam Blink (20.7) e Glimmer Cape (21.9), o pacote completo de iniciação+proteção. Bounty Hunter ganha a janela de 0-10 min (ela ainda não tem Cookie pronto pra abrir), mas perde de 17-22 min quando ela já inicia de Firesnap+Scatterblast com Blink de apoio
- o que ele faz com você: Scatterblast (100% de lentidão por 1s em ponto, +30% de dano a queima-roupa) não precisa te ver pra acertar, é área; Mortimer Kisses (até 360 de dano por glob, 8 globs) cobre 275 de raio por glob, pode te acertar escondido numa sebe se você estiver no caminho
- o que você faz com ele: Shadow Walk entrando antes do Cookie dela resolve o pick-off cedo; Track nela amplifica o burst do time quando ela se compromete com a iniciação de Firesnap
- itens que viram: Aghanim's Shard dela (Firesnap cura mais forte e lança um Mortimer Kiss parcial) chega cedo (mediana 17 min) e muda o threat de iniciação; Force Staff seu ajuda a sair do raio de 275 do glob antes do segundo tick de Mortimer Kisses
- como jogar: pegue o pick-off antes dos 17 min; depois disso jogue com distância da linha de Mortimer Kisses e force ela a gastar o Cookie antes de você entrar com Shadow Walk
- fonte: pro_dados/bounty_hunter.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_mortimer_kisses, snapfire_firesnap_cookie); aghs_desc (snapfire shard)

## Contra Jakiro (jakiro)
- placar: 35V/69 jogos (50.7%), fonte pro_dados/bounty_hunter.json
- por que importa: 4º mais comum em pro contra BH (69 jogos), pos 5 puro, disputa a mesma função de controle de área e visão no mapa
- janelas: 9-12 min Jakiro monta Ring of Basilius (8.9) e Arcane Boots (11.7); 19-23 min chegam Fluffy Hat (19.1, componente de Pipe) e Dust (23.7); 25 min fecha o componente de Octarine (staff_of_wizardry, 25.1). O ultimate Macropyre (200 de dano/s no nível 3, 10s) só existe depois do nível 6, então antes disso BH tem liberdade de pick-off; depois, qualquer luta prolongada em área pequena pune muito quem fica parado, BH incluso
- o que ele faz com você: Macropyre e Ice Path são Point Target, não precisam te ver pra acertar, então se o Jakiro adivinhar sua rota (bush, caminho de gank) o dano e o stun (até 2s) acontecem mesmo com Shadow Walk ativo; Dust de time remove a invisibilidade de vez
- o que você faz com ele: Jakiro tem HP relativamente baixo pro grupo de suportes de magia, pick-off de Shadow Walk+Jinada no early resolve rápido antes dele ter Ice Path disponível com frequência; Track amplifica o burst em cima dele quando ele canaliza perto do próprio Macropyre
- itens que viram: Dust (dele) neutraliza seu Shadow Walk puro; Glimmer Cape (22.8 min) te obriga a confirmar visão antes de engajar ele tarde
- como jogar: cace ele isolado antes do nível 6; depois disso evite cruzar bushes/rotas óbvias contra um Jakiro com Macropyre pronto, e puxe Track assim que ele canalizar
- fonte: pro_dados/bounty_hunter.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre, jakiro_ice_path)

## Contra Dragon Knight (dragon_knight)
- placar: 44V/68 jogos (64.7%), melhor saldo do BH entre os 6 mais comuns, fonte pro_dados/bounty_hunter.json
- por que importa: 5º mais comum em pro contra BH (68 jogos), principal mid que ele rotaciona pra ganksar, mesmo sem dividir lane com ele quando joga pos 4
- janelas: 6 min (mediana) DK já tem Power Treads, farm rápido de mid (lh10 de 63, 6x o do BH); 15-16 min chega Blink (16.2); 24 min fecha componente de Sange (claymore). O nível 6 (Elder Dragon Form) é o spike real: até 40 de velocidade bônus, splash de 100% e 350 de alcance extra, mas com cooldown alto no early. Até o nível 6 ele é vulnerável a pick-off isolado; depois, numa troca 1x1 ele ganha com Dragon Tail (até 150 de dano + 2.4s de stun)
- o que ele faz com você: Dragon Tail (até 2.4s de stun, 150 de alcance) fecha o combo se ele tiver Blink; Elder Dragon Form com splash de 100% castiga se você entrar junto de creeps ou aliados perto dele
- o que você faz com ele: antes do nível 6, Shadow Walk+Jinada o mata rápido porque ele não tem stun nem fuga própria; Track nele costuma render o maior bounty do Big Game Hunter boa parte do jogo, porque DK fica entre os 3 maiores patrimônios do time com frequência
- itens que viram: Blink dele (16.2 min) é quando ele passa a iniciar em vez de só farmar; Scepter dele (nível extra de Elder Dragon Form com dragão adicional) muda o patamar de dano em grupo tarde
- como jogar: pressione o pick-off antes do nível 6 e antes do Blink dele; depois disso jogue por trás, Track nele pra render ouro extra do time quando ele morrer, e evite ficar no raio de 350 do Dragon Form
- fonte: pro_dados/bounty_hunter.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_dragon_tail, dragon_knight_elder_dragon_form); aghs_desc (dragon knight scepter)

## Contra Ember Spirit (ember_spirit)
- placar: 33V/66 jogos (50.0%), fonte pro_dados/bounty_hunter.json
- por que importa: 6º mais comum em pro contra BH (66 jogos), mid que ele ganksa cedo pra travar o farm; o duelo real não é lane, é corrida de quem acha o pick-off primeiro, BH ou Ember com Fire Remnant
- janelas: minuto 1.5 ele já tem Bottle; 7-10 min chegam Urn of Shadows (7.3) e Phase Boots (9.1); lh10 dele é 53 contra 10 do BH, se ninguém morre cedo ele dispara em farm. O spike real é o nível 6 com Fire Remnant (3 cargas, 35s de recarga), reposicionamento + burst instantâneo
- o que ele faz com você: Sleight of Fist (até 170 de dano bônus em herói, raio de até 550) ataca tudo na área incluindo quem estiver parado numa gank; Searing Chains prende até 2 unidades por até 2.75s, cancelando seu Shadow Walk se você for pego no cast
- o que você faz com ele: antes do nível 6, Shadow Walk+Jinada acerta um mid sem fuga de verdade; Track nele amplifica o burst do time quando ele se compromete com um remnant de engajo, já que o alcance de 1400 do remnant não ajuda se ele já estiver marcado e focado assim que aparecer
- itens que viram: Urn of Shadows cedo (7.3 min) dá sustain contra seu poke; Blink ou Aghanim's Shard seu dão a mesma velocidade de reposicionamento que ele tem com Remnant, equilibrando quem chega primeiro na troca
- como jogar: gankeie o mid antes do nível 6 dele; depois disso não entre sozinho no raio de 450-550 do Sleight of Fist, espere ele gastar remnants antes de confirmar o Shadow Walk
- fonte: pro_dados/bounty_hunter.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_sleight_of_fist, ember_spirit_searing_chains, ember_spirit_fire_remnant); aghs_desc (ember spirit shard)

## Contra Rubick (rubick)
- placar: 30V/57 jogos (52.6%), fonte pro_dados/bounty_hunter.json
- por que importa: mesma posição 4/5, o suporte dessa função com maior volume de pro no geral (3990 jogos em pro_dados/rubick.json), e tem uma interação direta rara: pode roubar seu Track com Spell Steal
- janelas: 7-10 min Rubick monta Ring of Basilius (7.6) e Arcane Boots (10.3); 21-23 min chega Blink (21.6) junto de Wizard Hat (10.3, componente cedo de Octarine) e Void Stone (20.2); ele é um suporte de utilidade sem spike de dano próprio, o spike dele é roubar o spell certo na hora certa
- o que ele faz com você: Spell Steal copia a última magia inimiga lançada; se ele estiver perto quando você usar Track, pode roubá-lo e aplicar True Sight + amplificação de dano em você mesmo; Telekinesis (lift de até 1.7s) te tira do chão e cancela qualquer cast nesse intervalo, Shadow Walk incluso
- o que você faz com ele: Rubick tem HP baixo de suporte, Shadow Walk+Jinada cedo é pick-off limpo antes dele ter Blink (21.6 min); evite lançar Track perto dele quando possível, ou espere ele já ter gasto o Spell Steal em outra magia do seu time
- itens que viram: Blink dele (21.6 min) muda o jogo de utilidade pra iniciação; Force Staff seu ajuda a sair do alcance de 625 da Telekinesis antes do lift
- como jogar: cace ele isolado no early; depois dos 20 min, controle quando lança Track perto dele e puxe o Spell Steal pra um aliado antes de confirmar seu próprio combo
- fonte: pro_dados/bounty_hunter.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis, bounty_hunter_track)

## Contra Hoodwink (hoodwink)
- placar: 30V/63 jogos (47.6%), pior saldo do BH entre os matchups de alto volume, fonte pro_dados/bounty_hunter.json
- por que importa: 3º pos 4/5 mais jogado em pro no geral (2917 jogos em pro_dados/hoodwink.json, atrás só de Rubick e Tusk), 8º mais comum contra BH (63 jogos), e dá desvantagem direta porque o kit dela ignora boa parte da sua invisibilidade
- janelas: 10-12 min Hoodwink monta Arcane Boots (12.2); 23-25 min chegam Dust (25.1) e Aghanim's Shard (23.8); o spike real é o ultimate Sharpshooter (até 1350 de dano no nível 3, alcance 3000), que acerta de muito longe se ela tiver tempo de carregar o tiro (até 3s)
- o que ele faz com você: Bushwhack (até 360 de dano total + 2.1s de stun, raio 265) é Point Target, não precisa te ver pra acertar quem estiver na área, então ela pode blind-cast num chokepoint onde você costuma entrar invisível; Sharpshooter de longo alcance ameaça seu HP baixo mesmo fora da luta; Scurry dá evasão (2x) e até 35% de velocidade pra ela reagir ao seu combo antes do dano bater
- o que você faz com ele: ela tem HP baixo e pouca defesa contra pick-off isolado antes do nível 6; Track nela funciona melhor depois que o Scurry dela (2 cargas, recarga de até 30s) estiver gasto
- itens que viram: Dust dela (25.1 min) neutraliza seu Shadow Walk puro; Aghanim's Shard dela (bumerangue que atravessa e aplica vulnerabilidade a dano mágico, 23.8 min) pune se você tentar o combo Track+Shuriken Toss depois que ela tiver o item
- como jogar: pick-off cedo, antes do nível 6 e antes do Dust dela; depois disso jogue fora do alcance de 1100 do Bushwhack e evite rotas previsíveis de bush
- fonte: pro_dados/bounty_hunter.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, hoodwink_scurry); aghs_desc (hoodwink shard)

## Contra Pudge (pudge)
- placar: 17V/30 jogos (56.7%), amostra na faixa mínima de 30 jogos, fonte pro_dados/bounty_hunter.json
- por que importa: clássico pos 4 de roaming como BH, disputam o mesmo espaço de rio/bush e a mesma função de gank cedo; é o exemplo mais direto do critério "mesma posição" da lista
- janelas: 6-7 min Pudge monta Phase Boots (6.9) e o componente Chainmail (6.7); 14-16 min chegam Point Booster (14.3, componente de Aether Lens) e Staff of Wizardry (16.1, componente de Octarine/Aghanim's); 19-20 min fecha Blink (19.5). O spike dele é por kill: cada Meat Hook (até 360 de dano no nível 4) acertado garante iniciação ou abate isolado a qualquer momento, não depende de item
- o que ele faz com você: Meat Hook é skillshot point-target, acerta mesmo um alvo invisível ou fora de visão porque não precisa travar numa unidade, só precisa que você esteja no caminho; isso anula seu Shadow Walk como defesa contra o hook em si, mesmo que ele ainda te esconda de ataques normais
- o que você faz com ele: Pudge tem pouca mobilidade fora do Hook, se você sobreviver ao primeiro, Shadow Walk+Jinada cedo pune rápido porque ele é melee e dependente de um único combo; Track nele garante visão e dano amplificado assim que ele errar o Hook e ficar exposto no cooldown
- itens que viram: Blink dele (19.5 min) muda o alcance de iniciação pra além dos 1300 do Hook; posicionamento fora de corredores estreitos (rio, bush) reduz o ângulo de acerto do Hook mesmo com você invisível
- como jogar: jogue fora de linha reta de rio/bush contra ele; depois que ele errar um Hook, essa é sua janela de pick-off, entre com Shadow Walk antes do cooldown dele acabar
- fonte: pro_dados/bounty_hunter.json; pro_dados/pudge.json; constants_abilities.json (pudge_meat_hook); liquipedia.net/dota2/Detection; dota2.fandom.com (Pudge)

## Contra Spirit Breaker (spirit_breaker)
- placar: 25V/51 jogos (49.0%), fonte pro_dados/bounty_hunter.json
- por que importa: outro pos 4 de roaming clássico, 51 jogos em pro contra BH, representa bem dois roamers que não compartilham lane mas se perseguem o mapa inteiro
- janelas: 8-9 min SB monta Phase Boots (9.4) e o componente Chainmail (7.6); 21-23 min chegam Shadow Blade (22.9) e Claymore (21.1, componente de crítico). O spike dele é por nível de Greater Bash (17% de chance fixa, dano igual a uma % da velocidade de movimento) somado ao Charge of Darkness, que ele pode ativar a qualquer momento do jogo assim que tiver vantagem numérica
- o que ele faz com você: Charge of Darkness tem 1.5s de windup antes de sair andando, dá pra reagir, mas uma vez em movimento ele atravessa árvore, penhasco e unidade (até 425 de bônus de velocidade) até bater em você; Greater Bash então aplica stun (até 1.5s) e empurra
- o que você faz com ele: SB tem HP alto mas pouco burst fora do bash, Shadow Walk+Jinada cedo funciona se você achar ele sozinho antes da carga; Track nele garante que o time veja e foque assim que ele se comprometer com uma Charge longa
- itens que viram: Shadow Blade dele (22.9 min) muda de perseguidor óbvio pra ameaça furtiva; Aghanim's Shard dele (Planar Pocket) redireciona pra ele mesmo qualquer magia unit-target que você lançar num aliado protegido, Track incluso, então depois que ele tiver o shard não adianta tentar marcar quem ele está escudando
- como jogar: reaja ao windup de 1.5s saindo da linha reta dele; depois que ele tiver Shadow Blade, confirme visão antes de se isolar, e não tente Track num aliado que ele esteja protegendo se ele já tiver Shard
- fonte: pro_dados/bounty_hunter.json; pro_dados/spirit_breaker.json; constants_abilities.json (spirit_breaker_charge_of_darkness, spirit_breaker_greater_bash); aghs_desc (spirit breaker shard, Planar Pocket)

## Contra Storm Spirit (storm_spirit)
- placar: 13V/43 jogos (30.2%), pior winrate do BH entre os matchups com 30+ jogos, fonte pro_dados/bounty_hunter.json
- por que importa: não compartilha lane com BH (ele é mid), mas é o pior confronto dele em pro com amostra relevante; é exatamente o caso de dois heróis sem lane em comum que decidem a partida um pro outro
- janelas: minuto 1.4 Storm já tem Bottle; 8-9 min Power Treads (8.5) e Kaya (13.7, componente de Octarine/Kaya and Sange); lh10 dele é 67 contra 10 do BH, ele sai na frente em farm sempre que não morre cedo. O spike real é Ball Lightning: fica mais barato (% de mana por 100 de distância) e mais rápido (até 2300 de velocidade no nível 3, o máximo da habilidade) a cada ponto, então depois do nível 6-7 ele alcança e mata um suporte roaming em qualquer parte do mapa
- o que ele faz com você: Electric Vortex puxa você pra cima dele (até 300 de distância) e cancela Shadow Walk se você estiver no meio do cast; Ball Lightning fecha distância instantânea, então mesmo invisível você não sai da rota de perseguição se ele já tiver visão de onde você estava
- o que você faz com ele: antes do nível 6, ele não tem Ball Lightning pra fechar distância, pick-off de Shadow Walk+Jinada funciona bem; depois disso, Track nele (True Sight) ajuda o time a prever a rota de Ball Lightning antes dele aparecer puro
- itens que viram: Kaya/Octarine dele reduz custo e cooldown de Ball Lightning, acelerando o ciclo de perseguição; do seu lado não há item que negue Ball Lightning direto, a defesa real é visão de ward e nunca ficar isolado depois do nível 6 dele
- como jogar: force o pick-off antes do nível 6; depois disso nunca fique parado isolado sem ward perto, porque ele alcança você de qualquer ponto do mapa
- fonte: pro_dados/bounty_hunter.json; pro_dados/storm_spirit.json; constants_abilities.json (storm_spirit_ball_lightning, storm_spirit_electric_vortex)

## Contra Tidehunter (tidehunter)
- placar: 16V/37 jogos (43.2%), 2ª pior amostra relevante do BH, fonte pro_dados/bounty_hunter.json
- por que importa: offlaner que também não divide lane com BH, mas tem Kraken Shell, que pode limpar o seu Track assim que o dano físico acumulado estourar, uma interação mecânica direta que vale a pena jogar em volta
- janelas: 6-8 min Tide monta Phase Boots (7.8) e Soul Ring (8.5); 21-23 min chegam Blink (21.2) e Aghanim's Shard (23.1); o spike dele é todo em volta do Ravage, que ele consegue acertar com Blink assim que tiver os dois prontos
- o que ele faz com você: Gush (até 280 de dano, -6 de armadura por 4.5s) é unit target de 700 de alcance e lento o bastante pra te pegar saindo de Shadow Walk se você atacar perto dele; Kraken Shell é Strong Dispel sempre que o dano físico acumulado cruza o teto (desce de 600 pra 450 conforme o nível), o que limpa o debuff de amplificação do seu Track se ele ainda estiver ativo quando o shell estourar
- o que você faz com ele: ele tem pouco burst fora do Ravage, Shadow Walk+Jinada cedo funciona contra ele isolado antes do nível 6; depois disso, Track nele só rende se o debuff ficar ativo até ele morrer, já que Kraken Shell pode limpar no meio da luta
- itens que viram: Aghanim's Shard dele (Dead in the Water, 23.1 min) ancora um herói inimigo e derruba a velocidade pra 100 se ele se afastar demais, o que inclui você fugindo de Shadow Walk; isso muda o jogo tarde, porque sua fuga de suporte fica condicionada a quebrar a âncora com 4 ataques
- como jogar: pick-off cedo antes do Shell virar relevante; depois dos 23 min evite ficar perto o bastante pra ele te ancorar, e não confie no Track pra render kill se ele puder estourar o Shell no meio da troca
- fonte: pro_dados/bounty_hunter.json; pro_dados/tidehunter.json; constants_abilities.json (tidehunter_gush, tidehunter_kraken_shell); aghs_desc (tidehunter shard, Dead in the Water)

## Contra Dark Willow (dark_willow)
- placar: 28V/40 jogos (70.0%), melhor saldo do BH com 30+ jogos, fonte pro_dados/bounty_hunter.json
- por que importa: mesma posição 4/5, e ilustra um contraponto de kit direto: ela fica untargetable com Shadow Realm, o que anula o seu combo físico por alguns segundos, mesmo assim o saldo é o melhor da lista pra você
- janelas: 9-10 min Dark Willow monta Tranquil Boots (9.6); 17-21 min chegam Void Stone (17.1) e Cyclone (21.2, Eul's); 25-29 min fecha Blink (25.9) e Aghanim's Shard (29.2). O spike dela é o combo Cursed Crown (stun com 4s de delay) + Bramble Maze (raízes em área), que precisa de setup, diferente do seu pick-off instantâneo
- o que ele faz com você: Shadow Realm te deixa impossível de alvejar por até 5s (3s pro dano máximo de 360), nem Jinada nem ataque básico acertam ela nessa janela; se ela encerrar atacando, o dano é instantâneo
- o que você faz com ele: ela tem HP baixo e nenhuma fuga própria além do Shadow Realm (que tem cooldown), fora dessa janela Shadow Walk+Jinada cedo funciona bem; Track nela amplifica o combo do time quando ela gasta o Shadow Realm cedo demais
- itens que viram: Scepter dela (atacar não encerra mais o Shadow Realm) tira de você qualquer chance de acertar ela durante o efeito; do seu lado, espere o Shadow Realm acabar ou force ela a gastar fora de hora antes de entrar com Shadow Walk
- como jogar: identifique se ela já tem Shadow Realm disponível antes de iniciar; sem o buff ativo, pick-off cedo funciona bem, com o buff ativo espere passar
- fonte: pro_dados/bounty_hunter.json; pro_dados/dark_willow.json; constants_abilities.json (dark_willow_shadow_realm, dark_willow_cursed_crown); aghs_desc (dark willow scepter)

## Contra Templar Assassin (templar_assassin)
- placar: 25V/36 jogos (69.4%), 2ª melhor vitória do BH com amostra relevante, fonte pro_dados/bounty_hunter.json
- por que importa: não compartilha lane com BH (ela é carry), mas é um dos melhores saldos dele em pro, e é o exemplo clássico pedido: dois heróis sem lane em comum onde o kit e o power spike de um atropelam o outro; Track literalmente revela o Meld dela pro seu time
- janelas: 6 min TA já tem Power Treads; 13-14 min chegam Desolator (14.3) e o componente Dragon Lance de Hurricane Pike (14.2); lh10 dela é 73, a maior da lista, ela farma rápido e sozinha. O spike dela é em cima do Blink (17.4 min) + Meld, onde ela ganha bônus de dano (até 200) e redução de armadura (-8) em quem emboscar
- o que ele faz com você: Meld te deixa invisível pra ela enquanto ela ficar parada, e o primeiro ataque depois dele carrega bônus de dano e reduz armadura em área (Psi Blades); contra um suporte de HP baixo como BH isso costuma ser letal se ela pegar a emboscada
- o que você faz com ele: Track nela dá True Sight do alvo pro seu time (constants_abilities.json confirma: "granting True Sight of the target"), então mesmo com Meld ativo, uma vez tracked seu time enxerga e pode focar ela antes da emboscada render; lançar Track não é uma ação dela, não quebra o Meld sozinho, mas tira o elemento surpresa
- itens que viram: Scepter dela (Psionic Trap também silencia) ameaça seu Shadow Walk/Track se você entrar na área das armadilhas; Track proativo seu, lançado assim que ela sumir do radar, neutraliza boa parte do valor do Meld contra o seu time
- como jogar: mantenha Track pronto pra lançar assim que ela sumir do radar; evite caçar ela sozinho depois que ela tiver Blink e Desolator, prefira ganksar em dupla
- fonte: pro_dados/bounty_hunter.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_meld, bounty_hunter_track); aghs_desc (templar assassin scepter)
