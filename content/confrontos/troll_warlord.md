---
id: confrontos-troll_warlord
heroi: Troll Warlord
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/troll_warlord.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/slardar.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ursa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/windrunner.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/luna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/gyrocopter.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dark_willow.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/bristleback.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/abaddon.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://dotacoach.gg/en/heroes/counters/troll-warlord
- https://vcgamers.com/news/en/hero-counter-troll-warlord-dota-2
---

## Como os oponentes foram escolhidos

Troll Warlord é pos 1 (carry) e pos 2 (mid) no patch 7.41, papel que bate com a curva de item de `pro_dados/troll_warlord.json`: Battle Fury mediano aos 13,4 min (perfil de farm de carry) com Boots of the Elves e Blade of Alacrity cedo (perfil de mid com Yasha). A lista de 16 junta quatro critérios: os 6 heróis com mais jogos de pro contra ele, não importa a posição (Slardar, Snapfire, Shadow Fiend, Rubick, Ursa, Disruptor); os heróis de pos 1/pos 2 com mais jogos de pro contra ele, carry contra carry e mid contra mid (Dragon Knight, Windranger, Storm Spirit, Luna, Gyrocopter, Tiny, que também entram no critério 1 quando se repetem); os maiores desvios de winrate com amostra de 30+ jogos, pra cima (Dark Willow, Bristleback) e pra baixo (Templar Assassin, Abaddon); e os carries mais picados em pro no geral mesmo sem lane garantida com o Troll, que no caso dele já caem dentro dos critérios anteriores (Shadow Fiend, Tiny, Windranger e Luna estão todos entre os 5 carries com mais jogos de pro no patch). Cada bloco abaixo explica de novo, de forma específica, por que aquele herói está na lista.

Os winrates abaixo são sempre do ponto de vista do Troll Warlord (% de vitórias do time dele nos jogos em que enfrentou aquele herói), tirados de `pro_dados/troll_warlord.json` (campo `confrontos`, fonte original OpenDota `/heroes/95/matchups`, partidas de liga).

## Contra Shadow Fiend (nevermore)

- placar: 73 vitórias em 128 jogos de pro, 57,0% a favor do Troll.
- por que importa: terceira maior amostra entre os 16 confrontos e os dois são carries clássicos de ataque básico que disputam o mesmo papel de hiper carry, mesmo raramente dividindo lane.
- janelas: até os 10 min Shadow Fiend ganha a troca à distância com Shadowraze (CD 9s, sem contato) sem depender de last hit perfeito, e fecha Blade of Alacrity aos 12,7 min (mediana de 3859 jogos de pro). O Troll só fecha o primeiro item grande, Battle Fury, aos 13,4 min (mediana de 430 jogos). Dos 13 aos 20 min o cleave do Bfury acelera seu farm, mas só com Yasha (17,2 min) você vira perseguidor de verdade. Depois dos 24,7 min, quando o BKB do Troll fecha, o duelo vira: nenhuma das 3 Shadowraze nem o Requiem of Souls atravessam imunidade a magia.
- o que ele faz com você: 3 Shadowraze (85 a 280 de dano base, mais bônus por alma acumulada em Necromastery) te acerta de longe sem precisar de contato, e o Requiem solta linhas de energia em área com até 20 almas se ele te pegar perto dele.
- o que você faz com ele: Berserker's Rage (ensnare no corpo a corpo) atravessa o BKB dele, então mesmo imune a magia ele fica preso; sem dash, Shadow Fiend não escapa do seu Fervor empilhado depois que o root prende.
- itens que viram: seu BKB (24,7 min) nega as duas Shadowraze e o Requiem, porque nenhuma delas pierca imunidade a magia; Skull Basher trava o alvo pro combo de ataque.
- como jogar: evite ficar parado tomando raze de longe antes de fechar o Bfury, farme fora do alcance de 3 razes empilhadas e só force o 1x1 solo depois do BKB, quando o dano mágico dele some e o seu root físico continua funcionando.
- fonte: pro_dados/troll_warlord.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, troll_warlord_berserkers_rage).

## Contra Slardar

- placar: 81 vitórias em 154 jogos de pro, 52,6% a favor do Troll.
- por que importa: maior volume de partidas de pro contra o Troll entre todos os heróis do jogo, mesmo sendo offlane/pos 3, porque aparece como inimigo em praticamente qualquer draft com pos 1.
- janelas: Slardar fecha a bota aos 4,1 min e o Blink Dagger aos 13,3 min (mediana de 1987 jogos), então o gank com Slithereen Crush (stun de 0,8s + slow) já ameaça por volta dos 13-15 min, antes do Bfury do Troll (13,4 min) estar pronto. O Aghanim's Shard dele fecha aos 17,2 min e soma Corrosive Haze (redução de armadura) ao stun. Depois do Mithril Hammer do Troll (22,6 min) e do BKB (24,7 min), o Troll já tem dano pra ganhar a troca, porque o disable de Slardar não sobrevive à imunidade a magia.
- o que ele faz com você: Slithereen Crush revela e atordoa por 0,8s com dano e slow depois; Corrosive Haze (shard) reduz sua armadura durante o stun; Bash of the Deep (passiva, a cada 3 ataques) soma dano físico extra na troca.
- o que você faz com ele: Berserker's Rage atravessa o BKB dele se ele comprar um; Battle Trance aplica dispel básico em você mesmo no cast, limpando o slow da Crush antes do fight decisivo.
- itens que viram: seu BKB nega a Slithereen Crush, que não pierca imunidade a magia; o Bash dele empilha independente do seu Basher, é dano físico extra somado, não uma disputa de proc.
- como jogar: não troque corpo a corpo contra Slardar com o stun dele disponível (CD 7s) antes de ter BKB; depois que ele gasta o disable, a troca de ataque básico é sua, principalmente com Fervor já empilhado.
- fonte: pro_dados/troll_warlord.json; pro_dados/slardar.json; constants_abilities.json (slardar_slithereen_crush, slardar_bash); aghs_desc (shard de Slardar).

## Contra Snapfire

- placar: 69 vitórias em 139 jogos de pro, 49,6% a favor do Troll.
- por que importa: segundo maior volume de partidas de pro contra o Troll (139 jogos); suporte de lane que aparece contra praticamente qualquer carry agi do patch.
- janelas: Snapfire sobe Arcane Boots aos 10,6 min e o Aghanim's Shard aos 16,9 min (dá heal e um Mortimer Kiss extra no Firesnap Cookie), então o pico de harass dela é cedo, antes do Bfury do Troll fechar. Depois dos 16-18 min, com o cleave já rodando, o Scatterblast dela (dano em cone, mais forte à queima-roupa) ainda machuca em teamfight, mas não trava o farm solo do Troll em outra parte do mapa.
- o que ele faz com você: Scatterblast desacelera e dá dano em cone, mais forte perto; Firesnap Cookie com Shard cura o aliado que pulou e manda um Mortimer Kiss extra no pouso; Lil' Shredder reduz sua armadura por 5 ataques seguidos.
- o que você faz com ele: Whirling Axes ranged (cone de 950 de alcance) acerta ela tão de longe quanto ela acerta você; Berserker's Rage prende ela sem dash pra escapar.
- itens que viram: seu BKB nega o stun do Firesnap Cookie e o dano do Scatterblast; Diffusal Blade/Disperser secam a mana dela, atrasando o combo de wards e Cookie.
- como jogar: não fique parado perto dela sem espaço pra sair do cone do Scatterblast; farme longe da visão de sentry e force a troca com Whirling Axes de volta (CD 9s) pra contestar o pull do Cookie.
- fonte: pro_dados/troll_warlord.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_firesnap_cookie); aghs_desc (shard de Snapfire).

## Contra Rubick

- placar: 56 vitórias em 111 jogos de pro, 50,5% a favor do Troll.
- por que importa: quarto maior volume de partidas de pro (111 jogos); suporte global que aparece contra praticamente qualquer carry, então mede bem o risco de Spell Steal pro Troll.
- janelas: Rubick fecha Arcane Boots aos 10,3 min e o Blink Dagger aos 21,6 min (mediana de 2782 jogos), então o Telekinesis já ronda o mapa cedo. O risco real é o Spell Steal: se ele copiar algo que você castou perto dele (inclusive Whirling Axes), ele usa na sua cara depois. Fora isso, o seu farm com Bfury (13,4 min) já deixa você à frente em gold, porque Rubick sozinho não tem dano de herói relevante.
- o que ele faz com você: Telekinesis te joga no ar e atordoa a área ao pousar; Fade Bolt reduz seu dano de ataque e de spell por alguns segundos; Spell Steal pode copiar qualquer habilidade sua que ele veja de perto.
- o que você faz com ele: evite castar perto dele sem necessidade, pra não dar munição ao Spell Steal; depois que ele gasta o Telekinesis (CD 22 a 13s), Berserker's Rage prende ele sem chance de blink.
- itens que viram: seu BKB nega o stun do Telekinesis no pouso; Force Staff seu ajuda a sair do raio da Fade Bolt antes de engajar.
- como jogar: não jogue habilidade perto de Rubick à toa cedo, pra não virar Spell Steal; puna ele fora de posição, porque sem a ultimate roubada ele não tem burst pra te segurar sozinho.
- fonte: pro_dados/troll_warlord.json; pro_dados/rubick.json; constants_abilities.json (rubick_telekinesis, rubick_spell_steal, rubick_fade_bolt).

## Contra Ursa

- placar: 51 vitórias em 107 jogos de pro, 47,7% a favor do Troll.
- por que importa: top 5 em volume de pro (107 jogos) e mesma posição principal, carry pos 1, caso clássico de dois hc que raramente lanam juntos mas disputam o mesmo papel no time.
- janelas: Ursa fecha Battle Fury aos 13,7 min (mediana de 1596 jogos), quase empatado com o do Troll (13,4 min). A diferença é o Blink Dagger dele (16,8 min): Ursa pode fechar distância e começar Fury Swipes (dano crescente por ataque consecutivo no mesmo alvo) antes do Troll ter Yasha (17,2 min) pra perseguir de volta. Depois dos 21-25 min, o duelo depende de quem engaja primeiro: o Enrage dele (dispel forte + redução de dano, 4 a 5s) ignora o maim do Troll durante a janela, mas Overpower não tem alcance, então o Whirling Axes ranged do Troll acerta antes do Blink dele fechar distância.
- o que ele faz com você: Earthshock (leap + slow) fecha distância e dá dano; Fury Swipes empilha dano alto em alvo único; Enrage dá redução de dano e status resistance por alguns segundos, inclusive dispelando o ensnare que você já tiver aplicado.
- o que você faz com ele: Whirling Axes ranged ameaça antes do Blink dele chegar; fora da janela do Enrage, o maim de Berserker's Rage reduz o attack speed que alimenta o Fury Swipes dele.
- itens que viram: seu Basher ainda soma valor fora da janela do Enrage (status resistance reduz a chance efetiva só durante o Enrage); o BKB dele, se comprar, nega o stun do seu Whirling Axes.
- como jogar: não troque corpo a corpo bem na janela do Enrage (CD 60 a 30s); puna antes do Blink dele estar pronto ou depois que o Enrage já foi gasto.
- fonte: pro_dados/troll_warlord.json; pro_dados/ursa.json; constants_abilities.json (ursa_fury_swipes, ursa_enrage, ursa_earthshock).

## Contra Disruptor

- placar: 49 vitórias em 100 jogos de pro, 49,0% a favor do Troll.
- por que importa: sexto maior volume de pro (100 jogos) e citado por fontes externas como contador específico do Troll, porque Static Storm silencia e bloqueia heal durante a Battle Trance.
- janelas: Disruptor sobe Arcane Boots aos 11,4 min, antes do Bfury do Troll (13,4 min), e o harass de Thunder Strike (dano em área, slow de 100% em AS e MS) machuca a janela de farm cedo. O perigo maior vem depois dos 20 min, no nível 6+: Static Storm silencia e bloqueia heal por até 6s num raio de 550, e o dano dela cresce ao longo da duração.
- o que ele faz com você: Glimpse te teleporta de volta pra onde você estava 4s atrás, cancelando qualquer avanço; Kinetic Field prende você numa área; Static Storm silencia e bloqueia heal, inclusive o lifesteal da Battle Trance.
- o que você faz com ele: Berserker's Rage atravessa o BKB dele se comprar; fora da silence, seu dano de ataque básico sozinho já supera qualquer coisa que Disruptor entrega no 1x1.
- itens que viram: seu BKB nega Thunder Strike e Kinetic Field, que não pierçam magia; comprar BKB e entrar antes da Static Storm cair evita ficar preso nela sem imunidade.
- como jogar: inicie o fight fora do alcance de cast do Glimpse e do Kinetic Field, e gaste BKB assim que ele começar a canalizar a Static Storm pra entrar imune antes do silence.
- fonte: pro_dados/troll_warlord.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm, disruptor_glimpse, disruptor_kinetic_field); dotacoach.gg (listagem de contadores sugeridos pro Troll Warlord, via busca web).

## Contra Dragon Knight

- placar: 36 vitórias em 90 jogos de pro, 40,0% a favor do Troll (desvantagem).
- por que importa: mesma posição principal (Troll pos 1/2, Dragon Knight pos 2/1) e desvantagem real mesmo com amostra grande (90 jogos).
- janelas: Dragon Knight fecha Power Treads aos 6,0 min, bem antes do Bfury do Troll, e usa Breathe Fire (dano + redução do dano de ataque do alvo por 11s) pra atrapalhar o farm cedo. O pico dele é a Elder Dragon Form (nível 6+, CD 100s), que muda pra ataque à distância com dano misto; nos dados de pro ele fecha Blink Dagger aos 16,2 min pra engajar nessa forma. Até o BKB do Troll fechar (24,7 min), o Dragon Tail (stun de 1,8 a 2,4s) decide a troca se acertar primeiro.
- o que ele faz com você: Dragon Tail atordoa e dá dano em área; Breathe Fire reduz seu dano de ataque por 11s inteiros, cortando o DPS do Fervor bem na hora que ele mais importa; na Elder Dragon Form ele bate à distância com dano misto.
- o que você faz com ele: Berserker's Rage atravessa o BKB dele; fora da forma de dragão, Dragon Knight não tem como fugir do seu maim/ensnare corpo a corpo.
- itens que viram: seu BKB nega o Dragon Tail e o Breathe Fire, nenhum dos dois pierca imunidade a magia.
- como jogar: evite trocar ataque corpo a corpo sem BKB enquanto o Dragon Tail dele estiver de pé (CD 16 a 10s); depois que ele gasta o stun, seu Fervor empilhado vence a troca de ataque básico.
- fonte: pro_dados/troll_warlord.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_breathe_fire, dragon_knight_dragon_tail, dragon_knight_elder_dragon_form).

## Contra Windranger (windrunner)

- placar: 44 vitórias em 88 jogos de pro, 50,0% a favor do Troll.
- por que importa: mesma posição principal (carry pos 1, às vezes pos 4) e um dos carries mais picados em pro no geral (2596 partidas na amostra dela), entra na lista mesmo sem lane garantida.
- janelas: Windranger prioriza utilidade cedo (Clarity aos 12,2 min, TP Scroll aos 20,7 min); o pico dela é o combo Shackleshot (stun de até 3,25s se prender você numa árvore ou unidade) seguido de Powershot (dano crescente conforme carrega), perigoso justamente na janela em que o Troll ainda não fechou Bfury. Depois dos 13-17 min, com Bfury e Yasha, o farm e a velocidade de perseguição do Troll superam a dela, que não tem mobilidade própria além do Windrun.
- o que ele faz com você: Shackleshot te prende numa árvore ou unidade nas costas, com stun maior se prender em algo; Powershot entra forte carregado no máximo; Windrun dá evasão total contra ataque físico, negando o DPS do Fervor durante a janela.
- o que você faz com ele: Whirling Axes ranged ignora a evasão do Windrun porque é dano de habilidade, não ataque básico; Berserker's Rage prende ela sem Windrun disponível.
- itens que viram: seu BKB nega o Shackleshot; contra o Windrun ativo, prefira castar Whirling Axes em vez de confiar só no ataque básico.
- como jogar: não fique parado perto de árvore ou unidade com o Shackleshot dela disponível (CD 16 a 10s); force a troca com Whirling Axes quando ela ativar Windrun, já que evasão não bloqueia dano de magia.
- fonte: pro_dados/troll_warlord.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_windrun, windrunner_powershot).

## Contra Storm Spirit

- placar: 29 vitórias em 69 jogos de pro, 42,0% a favor do Troll (desvantagem).
- por que importa: mesma posição principal, já que o Troll também joga pos 2 mid, e um dos picks de mid mais agressivos do patch.
- janelas: Storm fecha o primeiro Kaya/Staff of Wizardry por volta dos 13 min, cedo pro padrão dele, e usa Ball Lightning (custo em % de mana) pra ganhar lane sem se expor. O pico dele é dos 13 aos 18 min, antes de qualquer BKB existir no jogo, quando Electric Vortex (puxão) somado a Overload (dano em área no próximo ataque após castar) dá burst rápido. Depois do BKB (24,7 min) e do Basher (27,6 min) do Troll, Storm perde valor porque fica sem iniciar com segurança: Electric Vortex não atravessa BKB e ele não sobrevive trocando ataque corpo a corpo com Fervor empilhado.
- o que ele faz com você: Electric Vortex te puxa pra perto dele; Overload soma dano em área a cada spell antes do próximo ataque; Ball Lightning permite engajar e fugir pagando mana.
- o que você faz com ele: seu BKB nega o Electric Vortex; depois disso ele só tem o ataque básico dele pra lutar, que perde pro Fervor empilhado.
- itens que viram: Diffusal Blade/Disperser (Manabreak) seca a mana dele rápido, o que corta o Ball Lightning junto, já que ele depende de mana pra se mover.
- como jogar: evite lane passiva demais contra ele cedo; depois do seu BKB, force o fight, porque sem o puxão ele não tem follow-up pra te segurar.
- fonte: pro_dados/troll_warlord.json; pro_dados/storm_spirit.json; constants_abilities.json (storm_spirit_electric_vortex, storm_spirit_overload, storm_spirit_ball_lightning).

## Contra Luna

- placar: 32 vitórias em 67 jogos de pro, 47,8% a favor do Troll.
- por que importa: mesma posição principal (carry pos 1) e um dos carries mais picados em pro no geral (1970 partidas na amostra dela), o tipo de confronto hc contra hc sem lane garantida (como Alchemist contra Morphling).
- janelas: Luna fecha Manta Style aos 17,2 min (mediana de 1862 jogos), quase no mesmo tempo do Yasha do Troll (17,2 min) e perto do Sange and Yasha (20,2 min). Até lá, os dois correm farm: Bfury do Troll (13,4 min) contra os Moon Glaives dela, que fazem o ataque dela saltar entre creeps e limpar camp rápido desde cedo. O pico dela é o Eclipse (nível 6, CD 105s), que soma strikes de Lucent Beam em área à noite sem precisar mirar.
- o que ele faz com você: Lucent Beam atordoa 0,6s e dá dano; Eclipse soma vários desses strikes em área à noite, sem precisar mirar especificamente em você; Moon Glaives faz ela limpar wave/camp rápido, competindo pelo mesmo farm.
- o que você faz com ele: Whirling Axes ranged (950 de alcance) acerta ela antes dela chegar perto o bastante; Berserker's Rage prende ela sem Manta ativo pra escapar.
- itens que viram: seu BKB nega o Eclipse e o Lucent Beam, nenhum dos dois pierca imunidade a magia.
- como jogar: evite ficar parado de noite perto dela sem BKB, na janela do Eclipse; force a troca de dia, quando o Eclipse fica mais fraco e previsível.
- fonte: pro_dados/troll_warlord.json; pro_dados/luna.json; constants_abilities.json (luna_eclipse, luna_lucent_beam, luna_moon_glaive).

## Contra Gyrocopter

- placar: 29 vitórias em 64 jogos de pro, 45,3% a favor do Troll.
- por que importa: mesma posição principal (carry pos 1) e farmer de cleave à distância parecido em conceito com o Troll, os dois competem por quem farma mais rápido com dano em área.
- janelas: Gyro fecha Power Treads aos 7,5 min e Blade of Alacrity aos 13,2 min, perto do Bfury do Troll (13,4 min). O pico de poke dele é Rocket Barrage (CD baixo, 7 a 5,5s, dano em área ao redor dele) somado a Homing Missile (stun de 1,3 a 2,5s que persegue e pode ser destruído antes de chegar). Flak Cannon (ultimate) faz ele acertar todo mundo ao redor por 12s, machucando mais em grupo do que no 1x1 puro.
- o que ele faz com você: Homing Missile persegue e atordoa se não for destruído a tempo; Rocket Barrage dá dano em área ao redor dele; Flak Cannon vira cada ataque dele num hit em todo mundo perto.
- o que você faz com ele: Whirling Axes (ranged ou melee) destrói o Homing Missile antes dele chegar, já que o míssil pode ser abatido; Berserker's Rage prende ele fora do Call Down (CD alto) pra zonear.
- itens que viram: seu BKB nega o stun do Homing Missile; destruir o míssil com qualquer dano em área (inclusive Whirling Axes) evita o stun sem gastar BKB.
- como jogar: fique de olho no míssil vindo e estoure com Whirling Axes antes dele chegar; force o 1x1 fora de teamfight, onde o Flak Cannon dele não escala tanto.
- fonte: pro_dados/troll_warlord.json; pro_dados/gyrocopter.json; constants_abilities.json (gyrocopter_homing_missile, gyrocopter_flak_cannon, gyrocopter_rocket_barrage).

## Contra Tiny

- placar: 28 vitórias em 53 jogos de pro, 52,8% a favor do Troll.
- por que importa: mesma posição principal (carry, às vezes mid, igual o Troll) e um dos carries mais picados em pro no geral (3127 partidas na amostra dele), outro caso de hc sem lane garantida em comum.
- janelas: Tiny prioriza Void Stone aos 15,2 min e Blink Dagger aos 15,9 min, focando burst mágico com Avalanche mais Toss antes de crescer fisicamente com Grow. O combo Avalanche (stun em área com dano por intervalo) seguido de Toss (arremessa uma unidade, dano no pouso) é o pico de burst dele, geralmente logo após o Blink. Depois disso, com Grow empilhado (mais dano, menos attack speed), ele vira um tanque físico mais lento, o que favorece o Fervor empilhado do Troll no ataque básico puro.
- o que ele faz com você: Avalanche prende em área com dano contínuo; Toss te arremessa (ou arremessa você em cima de outra unidade), causando dano no local do pouso; combinados, tiram uma fatia grande de HP antes de qualquer troca de ataque.
- o que você faz com ele: Berserker's Rage atravessa o BKB dele se comprar; depois do combo Avalanche + Toss gasto, Tiny ataca mais devagar por causa do Grow, então o Fervor empilhado vence a troca pura de DPS.
- itens que viram: seu BKB nega o Avalanche e também o Toss, porque Tiny não consegue agarrar um alvo já imune a magia; sem BKB, fique fora do alcance de 300 de agarre dele.
- como jogar: mantenha distância do alcance de 300 do Toss antes de ter BKB; depois do combo dele gasto (CD 23 a 14s no Avalanche), force o 1x1 de ataque básico.
- fonte: pro_dados/troll_warlord.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_grow).

## Contra Templar Assassin

- placar: 21 vitórias em 54 jogos de pro, 38,9% a favor do Troll (desvantagem).
- por que importa: mesma posição principal (carry pos 1) e uma das maiores desvantagens reais do Troll entre carries com amostra boa; fonte externa (dotacoach, dados de patch anterior) já apontava TA entre os piores matchups do herói, direção que bate com os dados de pro usados aqui.
- janelas: TA usa Meld (invisibilidade parada, bônus de dano e redução de armadura no primeiro golpe depois de sair da invisibilidade) pra emboscar antes do Bfury do Troll estar pronto (13,4 min). O problema persiste depois: Refraction dá instâncias que absorvem dano (até 30 de barreira por instância, ataque ou spell), e Psi Blades (dano em linha ao atacar) atravessa imunidade a magia, então nem o BKB do Troll nega esse dano.
- o que ele faz com você: Meld emboscar com bônus de dano e redução de armadura por 6s; Refraction bloqueia várias instâncias de dano seu, ataque básico ou spell; Psi Blades atravessa BKB.
- o que você faz com ele: Berserker's Rage atravessa a BKB dela se comprar, mas cada instância de Refraction ainda absorve um golpe seu (de ataque ou de Whirling Axes) antes do root valer.
- itens que viram: Diffusal Blade/Disperser seca a mana dela, cortando o recast de Meld e Refraction.
- como jogar: não entre na troca contando com o primeiro golpe pra ferir, as instâncias de Refraction absorvem tanto ataque quanto Whirling Axes; gaste algumas trocas antes pra estourar a barreira, depois force o corpo a corpo.
- fonte: pro_dados/troll_warlord.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_refraction, templar_assassin_meld, templar_assassin_psi_blades); dotacoach.gg (via busca web, patch anterior).

## Contra Dark Willow

- placar: 20 vitórias em 30 jogos de pro, 66,7% a favor do Troll. Amostra no limite mínimo (30 jogos), maior vantagem percentual da lista.
- por que importa: maior vantagem percentual do Troll com amostra válida, mesmo sendo um suporte fora da lane direta dele.
- janelas: Dark Willow sobe Shadow Realm (fica untargetable até o próximo ataque, que vem com bônus de dano mágico) e Bramble Maze (raízes que prendem e causam dano ao longo do tempo) desde cedo, mas sem alcance pra acertar um Troll já farmado com Whirling Axes de longe (950 de alcance contra os 500 de alcance de colocação da Bramble Maze). Depois do Bfury do Troll (13,4 min), o farm dele supera qualquer harass, e o Cursed Crown (stun em área com delay) é fácil de evitar fora de teamfight.
- o que ele faz com você: Bramble Maze prende e causa dano contínuo se você pisar numa raiz; Cursed Crown atordoa em área depois de um delay; Shadow Realm deixa ela untargetable até o próximo ataque, que vem com dano mágico bônus.
- o que você faz com ele: Whirling Axes ranged acerta ela antes dela chegar perto o bastante pro combo; Berserker's Rage prende ela sem Shadow Realm ativo pra escapar.
- itens que viram: seu BKB nega o Cursed Crown e o dano contínuo da Bramble Maze; Whirling Axes melee (AoE curto) limpa as raízes se você estiver preso nelas.
- como jogar: farme fora do alcance de visão dela, force o fight fora do delay do Cursed Crown e puna o cast do Shadow Realm, já que ela fica vulnerável até completar o próximo ataque.
- fonte: pro_dados/troll_warlord.json; pro_dados/dark_willow.json; constants_abilities.json (dark_willow_bramble_maze, dark_willow_cursed_crown, dark_willow_shadow_realm).

## Contra Bristleback

- placar: 25 vitórias em 42 jogos de pro, 59,5% a favor do Troll.
- por que importa: uma das maiores vantagens do Troll com amostra boa (42 jogos), apesar de Bristleback ser tanque de offlane e raramente dividir lane com um pos 1.
- janelas: Bristleback fecha Power Treads aos 8,7 min e o Aghanim's Shard aos 18,4 min (ganha um Hairball à distância), priorizando tankar de frente em vez de farmar rápido. O problema dele contra o Troll é mecânico: Quill Spray (dano em área) atravessa BKB, mas Viscous Nasal Goo (redução de armadura e velocidade) não, então uma vez com BKB o slow dele não segura o Troll, e ele ainda toma dano de ataque físico cheio se atacado de frente, sem o bônus de redução que tem de lado ou de costas.
- o que ele faz com você: Quill Spray dá dano em área que cresce a cada vez que acerta o mesmo alvo em 14s; Viscous Nasal Goo reduz sua armadura e velocidade; a passiva dele reduz o dano recebido se atingido pela lateral ou por trás (de frente ele toma dano cheio).
- o que você faz com ele: ataque e persiga ele de frente sempre que possível, já que a mitigação de dano dele só vale de lado ou pelas costas; Berserker's Rage prende ele fora da Goo dele.
- itens que viram: seu BKB nega a Goo, que não pierca imunidade a magia, mas não o Quill Spray, que pierca; Diffusal Blade/Manabreak seca a mana dele, que ele gasta rápido castando Goo e Hairball.
- como jogar: force o fight de frente pra ele antes de engajar, gaste BKB só se precisar negar a Goo, e puna o farm dele, porque de frente ele não tanka tanto quanto parece.
- fonte: pro_dados/troll_warlord.json; pro_dados/bristleback.json; constants_abilities.json (bristleback_quill_spray, bristleback_viscous_nasal_goo, bristleback_bristleback).

## Contra Abaddon

- placar: 12 vitórias em 41 jogos de pro, 29,3% a favor do Troll. Maior desvantagem da lista.
- por que importa: maior desvantagem percentual do Troll com amostra boa (41 jogos); fonte externa (busca web) já aponta Abaddon como contador específico da Battle Trance.
- janelas: Abaddon sobe o kit cedo (Chainmail aos 5,6 min, Phase Boots aos 6,5 min) priorizando sobreviver em vez de farmar rápido, então ele não compete por item com o Troll. O problema aparece quando você tenta fechar o 1x1 com Battle Trance: Aphotic Shield dá uma barreira de dano no aliado dele que absorve ataque antes de chegar ao HP real, e Borrowed Time converte todo o dano recebido em cura por 4 a 6s, incluindo o burst da sua Battle Trance.
- o que ele faz com você: Curse of Avernus desacelera e dá dano ao longo do tempo quando ele te ataca, além de dar bônus de velocidade de ataque pra quem bate em você depois; Aphotic Shield blinda o alvo dele (geralmente não você) contra o seu dano; Borrowed Time, se ativo nele, transforma o burst da sua Battle Trance em cura.
- o que você faz com ele: force o fight só depois do Borrowed Time estar gasto (CD 85 a 65s) e antes dele recarregar o Aphotic Shield (CD 12 a 6s); Berserker's Rage prende ele fora da barreira.
- itens que viram: Diffusal Blade/Disperser (Manabreak) seca a mana dele, atrasando o recast de Aphotic Shield; o seu BKB ajuda pouco aqui, porque o problema não é disable, é a cura e a barreira.
- como jogar: não gaste Battle Trance em cima de um Borrowed Time ativo, porque ele vira seu burst em cura; espere o cooldown passar ou drene a mana dele antes de forçar o 1x1.
- fonte: pro_dados/troll_warlord.json; pro_dados/abaddon.json; constants_abilities.json (abaddon_aphotic_shield, abaddon_borrowed_time, abaddon_frostmourne); vcgamers.com (via busca web, cita Abaddon como contador de Battle Trance).
