---
id: confrontos-weaver
heroi: Weaver
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/weaver.json (resumo, itens, confrontos)
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json, shadow_demon.json, jakiro.json, nevermore.json, queenofpain.json, batrider.json, tiny.json, razor.json, ursa.json, crystal_maiden.json, leshrac.json, gyrocopter.json, morphling.json, doom_bringer.json, monkey_king.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/weaver.md, tusk.md, shadow_demon.md, jakiro.md, queenofpain.md, batrider.md, razor.md, ursa.md, crystal_maiden.md, leshrac.md, gyrocopter.md, doom_bringer.md
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/shadow_fiend.md, tiny.md, morphling.md, monkey_king.md
- https://api.opendota.com/api/constants/aghs_desc
- https://liquipedia.net/dota2/Toss (mecânica de debuff immunity pós 7.33: Toss não agarra alvo com Black King Bar ativo)
---

## Contra Tusk (tusk)
- placar: 95V-194J em pro, 49,0% de vitória do Weaver (OpenDota /heroes/63/matchups via pro_dados/weaver.json)
- por que importa: é o oponente com mais jogos de pro contra o Weaver (194); suporte roamer clássico que vive de caçar farmer isolado antes dos 20 min.
- janelas: até os 10 min o Weaver ainda não tem Power Treads (mediana 7,8 min, p25 6,4) nem nenhum item de burst, a pior janela pra levar um gank de Ice Shards mais Snowball. Dos 15 aos 19 min o Weaver fecha Desolator (15,6) e Aghanim's Shard (18,5), o primeiro poder de luta real, enquanto o Tusk só fecha o próprio Blink aos 19,0 (p25 16,8); nessa faixa o Weaver já ameaça de volta se pegar o Tusk sozinho. Depois do BKB do Weaver (27,6) a maior parte do kit do Tusk para de funcionar nele.
- o que ele faz com você: Ice Shards cria uma barreira que dura 4s e corta rota de fuga; Snowball ganha dano e stun por aliado dentro dele, o combo clássico de pegar um farmer isolado. Com nível 6 e Aghanim's Shard (Drinking Buddies), ele também puxa aliado pra perto pra reforçar o gank; se te acertar, Walrus Punch é crítico com empurrão e atravessa Black King Bar (bkbpierce sim).
- o que você faz com ele: Threads of Fate rende dano bônus se você ficar a até 700 dele por 1,5s depois de acertar, e o Geminate Attack (autocast, também atravessa BKB) soma dano rápido se ele tentar bater em você de volta; Time Lapse desfaz os últimos 5s de vida se o combo dele já tiver conectado.
- itens que viram: seu BKB (27,6 min) bloqueia Ice Shards e Snowball, nenhum dos dois atravessa imunidade mágica (constants_abilities.json); não bloqueia o Walrus Punch, mas esse exige alcance de 150, corpo a corpo.
- como jogar: não fique parado pra last hit sem visão do Tusk antes do seu Power Treads; depois do seu Desolator e Shard, você já pode trocar de volta se ele errar o Snowball sozinho.
- fonte: pro_dados/weaver.json; pro_dados/tusk.json; content/fichas/weaver.md; content/fichas/tusk.md; constants_abilities.json (tusk_ice_shards, tusk_snowball, tusk_walrus_punch, weaver_threads_of_fate, weaver_geminate_attack); api.opendota.com/api/constants/aghs_desc

## Contra Shadow Demon (shadow_demon)
- placar: 61V-168J, 36,3% de vitória do Weaver, a pior taxa dele entre os 6 oponentes com mais jogos de pro (pro_dados/weaver.json)
- por que importa: 2º maior volume de jogos (168) e pior porcentagem do grupo de maior amostra; suporte de disable cuja ultimate ignora Black King Bar.
- janelas: ele fecha Arcane Boots aos 11,3 min e o Aghanim's Shard aos 25,4 (pro_dados/shadow_demon.json). O ponto crítico é a ultimate Demonic Purge, disponível desde o nível 6: mesmo depois do seu BKB (27,6) ela ainda remove seu buff positivo e desacelera até 100%, cortando a fuga.
- o que ele faz com você: Disruption bane você do campo por 2,75s e, ao voltar, cria 2 ilusões suas que tomam 300% de dano mas ainda ocupam espaço na luta; Demonic Purge (bkbpierce sim, não dispelável) remove buff positivo e desacelera até 100%, o pior cenário pra quem depende de velocidade pra viver.
- o que você faz com ele: ele é suporte puro, sem sustain própria; Geminate Attack e The Swarm acabam com ele rápido se você fechar a distância antes da Disruption.
- itens que viram: BKB não resolve a Demonic Purge; sua melhor resposta é Linken's Sphere, já que Disruption e Demonic Purge são de alvo único e o Linken's bloqueia o primeiro cast de alvo único a cada ciclo.
- como jogar: trate o nível 6 dele como o ponto de virada, antes disso ele só tem Disruption e Shadow Poison; abra distância antes de engajar, não depois.
- fonte: pro_dados/weaver.json; pro_dados/shadow_demon.json; content/fichas/shadow_demon.md; content/fichas/weaver.md; constants_abilities.json (shadow_demon_disruption, shadow_demon_demonic_purge, weaver_shukuchi)

## Contra Jakiro (jakiro)
- placar: 63V-151J, 41,7% de vitória do Weaver (pro_dados/weaver.json)
- por que importa: 3º maior volume de jogos de pro contra o Weaver (151); suporte de área que trava a rota de farm dele com stun e DPS contínuo.
- janelas: Jakiro fecha Arcane Boots aos 11,7 min e tem Macropyre disponível desde o nível 6 (pro_dados/jakiro.json); ele é squishy e de farm baixo o jogo inteiro (GPM 315), então não cresce como ameaça 1x1. O Weaver fecha o primeiro item de poder (Desolator, 15,6) ainda dentro da janela em que o Jakiro só tem Dual Breath e Ice Path.
- o que ele faz com você: Ice Path estuna até 2s em área se você atravessar o caminho de gelo; Macropyre aplica dano contínuo numa faixa longa (10s) e não é dispelável, mas nenhuma das duas atravessa Black King Bar.
- o que você faz com ele: ele não tem fuga própria nem vida alta; Shukuchi fecha a distância rápido e Geminate Attack mais Desolator matam ele antes que o time consiga proteger.
- itens que viram: seu BKB (27,6) anula o kit inteiro do Jakiro, nenhuma habilidade dele atravessa imunidade mágica (constants_abilities.json); o Aghanim's Shard dele só libera Liquid Fire sem custo de mana, não muda o duelo direto.
- como jogar: evite ficar no alcance de 850 do Dual Breath antes do seu BKB; depois dele, force a troca se ele estiver sozinho, porque ele não tem como fugir.
- fonte: pro_dados/weaver.json; pro_dados/jakiro.json; content/fichas/jakiro.md; content/fichas/weaver.md; constants_abilities.json (jakiro_ice_path, jakiro_macropyre, jakiro_dual_breath)

## Contra Shadow Fiend (nevermore)
- placar: 74V-140J, 52,9% de vitória do Weaver (pro_dados/weaver.json)
- por que importa: 4º maior volume de jogos de pro (140) e também carry de posição 1; um dos rivais de mesma função mais comuns contra o Weaver mesmo sem lane em comum.
- janelas: o Shadow Fiend farma muito mais rápido no early (LH10 de 78 contra 44 do Weaver, pro_dados): fecha Power Treads antes dos 6 min e Blade of Alacrity aos 12,7. Dos 15 aos 20 min o Weaver já fecha Desolator (15,6) e Shard (18,5), enquanto o Shadow Fiend ainda só tem itens de atributo; nessa janela os dois trocam dano à distância, e quem acerta o combo primeiro decide. Perto dos 25-27 min os dois ficam prontos quase juntos (BKB do Shadow Fiend aos 25,2, Demon Edge aos 27,2, BKB do Weaver aos 27,6), e a luta vira ataque básico puro, onde o Desolator do Weaver pesa mais.
- o que ele faz com você: Shadowraze bate mais forte quanto mais almas ele tiver acumulado (Necromastery, até 20, +1,35 de dano cada); se você ficar parado numa das três zonas na frente dele, leva o nuke cheio. O Requiem no fim de uma troca ainda dispara mesmo que ele morra primeiro.
- o que você faz com ele: Threads of Fate aplicado rende dano bônus persistente se você ficar perto, e o Geminate Attack atravessa o BKB dele (bkbpierce sim) quando o combate já estiver travado; Time Lapse desfaz o burst do Shadowraze se você acertar o timing.
- itens que viram: seu BKB (27,6) bloqueia Shadowraze e Requiem, nenhum atravessa imunidade mágica (constants_abilities.json); o Dragon Lance dele (14,0) aumenta o alcance pra bater de mais longe e evitar ficar perto do seu Geminate.
- como jogar: não troque ataque básico parado na frente dele antes do seu Desolator; com Desolator e Shard prontos, use Shukuchi pra fechar distância rápido e sair da zona das três Razes.
- fonte: pro_dados/weaver.json; pro_dados/nevermore.json; content/porque_itens/shadow_fiend.md; content/fichas/weaver.md; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, nevermore_necromastery, weaver_threads_of_fate, weaver_geminate_attack)

## Contra Queen of Pain (queenofpain)
- placar: 69V-125J, 55,2% de vitória do Weaver, a melhor taxa dele entre os 6 oponentes com mais jogos de pro (pro_dados/weaver.json)
- por que importa: 5º maior volume de jogos (125) e a melhor porcentagem do grupo de maior amostra; mage de burst mid cuja ultimate atravessa BKB.
- janelas: Queen of Pain fecha Power Treads aos 8,3 min e Kaya and Sange aos 20,8 (pro_dados/queenofpain.json), um power spike de burst que só fecha depois do Weaver já ter Desolator (15,6) pronto. O Weaver também fecha o Shard (18,5) antes do Aghanim's Shard dela (27,5) ou do Scepter (23,5); entre 15 e 23 min o Weaver já ameaça matar de volta se ela errar o Blink.
- o que ela faz com você: Shadow Strike aplica dano inicial mais dano ao longo de 16s e desacelera; Sonic Wave (ultimate) é dano em linha que empurra e atravessa Black King Bar (bkbpierce sim), então mesmo com imunidade mágica você leva o dano e o empurrão.
- o que você faz com ele: ela tem vida baixa pra uma mid; Shukuchi fecha a distância do Blink dela, e Geminate Attack mais Desolator fazem dano rápido o bastante pra matar antes do combo dela reaplicar.
- itens que viram: seu BKB (27,6) bloqueia Shadow Strike e Scream of Pain, mas não a Sonic Wave (as duas primeiras não atravessam imunidade mágica, a Sonic Wave sim); o Linken's Sphere dela, se vier, bloquearia só o seu próximo cast de alvo único.
- como jogar: evite ficar no alcance do Scream of Pain em grupo antes do seu BKB; depois dele, force a troca isolada, já que o único dano real que sobra é a Sonic Wave, de recarga alta.
- fonte: pro_dados/weaver.json; pro_dados/queenofpain.json; content/fichas/queenofpain.md; content/fichas/weaver.md; constants_abilities.json (queenofpain_shadow_strike, queenofpain_scream_of_pain, queenofpain_sonic_wave, queenofpain_blink)

## Contra Batrider (batrider)
- placar: 48V-124J, 38,7% de vitória do Weaver (pro_dados/weaver.json)
- por que importa: 6º maior volume de jogos de pro (124); iniciador cujo travamento (Flaming Lasso) atravessa BKB e bloqueia qualquer resposta, incluindo o Time Lapse.
- janelas: Batrider fecha Blink aos 17,7 min e BKB aos 26,7 (pro_dados/batrider.json), pouco antes do BKB do Weaver (27,6). Entre 17 e 27 min ele já consegue iniciar com Blink mais Flaming Lasso antes do Weaver ter qualquer imunidade mágica própria.
- o que ele faz com você: Flaming Lasso prende por até 3,25s, impede mover, atacar ou usar qualquer habilidade (incluindo Time Lapse e Shukuchi) e atravessa Black King Bar (bkbpierce sim); Sticky Napalm desacelera e amplifica o dano das habilidades seguintes dele.
- o que você faz com ele: ele não tem fuga própria depois de usar o Lasso, precisa ficar parado segurando você; se um aliado o mata durante o Lasso, o efeito quebra e você escapa. Geminate Attack atravessa o BKB dele se a troca já estiver travada.
- itens que viram: nem BKB nem Time Lapse resolvem o Flaming Lasso sozinho, porque a habilidade ignora imunidade mágica e impede qualquer cast; a resposta real é matar o Batrider rápido enquanto ele segura você, ou contar com um aliado pra isso.
- como jogar: mantenha mais de 200 de distância (alcance de cast do Lasso) sempre que ele estiver perto sem visão clara do time dele; se for pego, chame o time pra focar nele, esperar o Lasso acabar sozinho não é opção.
- fonte: pro_dados/weaver.json; pro_dados/batrider.json; content/fichas/batrider.md; content/fichas/weaver.md; constants_abilities.json (batrider_flaming_lasso, batrider_sticky_napalm)

## Contra Tiny (tiny)
- placar: 40V-111J, 36,0% de vitória do Weaver (pro_dados/weaver.json)
- por que importa: carry de posição 1 mais jogado contra o Weaver em pro depois do Shadow Fiend (111 jogos), rival direto de mesma função mesmo sem lane em comum.
- janelas: Tiny fecha Blink aos 15,9 min e constrói pro Echo Sabre/Harpoon; seu power spike real é o combo Blink mais Avalanche mais Toss, disponível desde o nível 6. O Weaver fecha Desolator (15,6) quase junto com o Blink do Tiny, mas o Tiny tem vantagem de iniciação, ele entra primeiro. O BKB do Tiny (26,7) sai um pouco antes do do Weaver (27,6), então até lá ele consegue abrir a luta sem risco de interrupção.
- o que ele faz com você: Avalanche estuna em pulsos por 1,5s numa área (até 370 de raio), seguido de Toss, que arremessa um alvo agarrado por até 300 de raio e causa dano que cresce muito com o Grow; com Grow nível 16+, o combo sozinho já tira boa parte da sua vida.
- o que você faz com ele: Threads of Fate rende dano bônus persistente, e o Shukuchi te tira do raio do Avalanche antes que ele feche o combo; Time Lapse desfaz o dano do combo se você acertar o timing.
- itens que viram: seu BKB (27,6) bloqueia o stun do Avalanche; pela debuff immunity atual do jogo, você também não pode ser agarrado pelo Toss enquanto o BKB estiver ativo, então sem BKB o combo Avalanche-Toss conecta inteiro, com BKB o Tiny não consegue nem te pegar pra jogar.
- como jogar: fique fora do alcance de 600 do Avalanche quando ele tiver Blink pronto e sumir de visão; depois do seu BKB, ele perde o combo de abertura inteiro contra você.
- fonte: pro_dados/weaver.json; pro_dados/tiny.json; content/porque_itens/tiny.md; content/fichas/weaver.md; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_grow, weaver_threads_of_fate); liquipedia.net/dota2/Toss (debuff immunity bloqueia o agarrão do Toss)

## Contra Razor (razor)
- placar: 53V-103J, 51,5% de vitória do Weaver (pro_dados/weaver.json)
- por que importa: outro herói de ataque básico que farma rápido como o Weaver (jogado hoje mais como pos 3, com histórico de pos 1), um dos rivais mais comuns de troca de dano contra ele em pro.
- janelas: Razor fecha Boots of Elves cedo (9,1) e Yasha aos 17,8; o BKB dele sai aos 24,7, antes do do Weaver. O ponto de virada é o Static Link, disponível desde o nível 1: nos primeiros 10-15 min, antes do Desolator do Weaver, qualquer troca corpo a corpo favorece o Razor.
- o que ele faz com você: Static Link rouba dano de ataque básico enquanto o link durar (até 18s de buff, não dispelável) e permite que ele ataque andando; Eye of the Storm (ult) busca sozinho quem está com menos vida num raio de 500 e reduz armadura.
- o que você faz com ele: Threads of Fate e Geminate Attack dão dano de longe; o Shukuchi quebra a distância do link mais rápido do que ele consegue recastar, já que o Static Link tem alcance de 550 e um buffer de 250 antes de romper.
- itens que viram: seu BKB (27,6) não bloqueia Static Link nem Eye of the Storm (os dois têm bkbpierce sim); a resposta real é distância, não imunidade mágica. O Desolator (15,6) ajuda a vencer a troca de ataque básico mesmo com o link ativo, já que reduz a armadura dele.
- como jogar: evite ficar parado dentro de 550 de alcance dele sem necessidade; se ele conectar o link, recue em vez de trocar ataque básico, o roubo de dano é fixo por segundo, não algo pra tankar.
- fonte: pro_dados/weaver.json; pro_dados/razor.json; content/fichas/razor.md; content/fichas/weaver.md; constants_abilities.json (razor_static_link, razor_eye_of_the_storm)

## Contra Ursa (ursa)
- placar: 44V-92J, 47,8% de vitória do Weaver (pro_dados/weaver.json)
- por que importa: 3º carry de posição 1 mais jogado contra o Weaver em pro (92 jogos), outro farmer agressivo de ataque básico; a própria ficha do Ursa descreve ele como pick tardio de counter no draft.
- janelas: Ursa fecha Battle Fury aos 13,7, antes do Desolator do Weaver (15,6), e Blink aos 16,8, com iniciação cedo contra alvo isolado. O Aghanim's Shard dele (26,1) sai pouco antes do BKB do Weaver (27,6): se pegar o Weaver sozinho nessa janela, Earthshock com o Shard aplica 3 stacks de Fury Swipes de uma vez.
- o que ele faz com você: Overpower dá +400% de velocidade de ataque por 3 a 6 ataques, um buff nele mesmo que nenhum item seu bloqueia; Fury Swipes empilha dano extra a cada acerto consecutivo no mesmo alvo (reseta se parar de bater por 8s) e atravessa Black King Bar (bkbpierce sim). Contra a vida baixa do Weaver, isso mata rápido mesmo com BKB ativo.
- o que você faz com ele: Shukuchi te tira do alcance dele antes que o Overpower complete os ataques; Threads of Fate rende dano bônus se você conseguir ficar perto o suficiente pra bater primeiro.
- itens que viram: seu BKB não impede o Overpower (buff nele mesmo) nem o dano extra do Fury Swipes (bkbpierce sim); contra ele, Linken's Sphere bloqueia o cast do Earthshock (salto de alvo único), cortando o início do combo antes do Overpower.
- como jogar: não troque ataque básico parado com ele sem vantagem clara de vida, mesmo com BKB; prefira bater e sair com Shukuchi em vez de ficar na frente dele.
- fonte: pro_dados/weaver.json; pro_dados/ursa.json; content/fichas/ursa.md; content/fichas/weaver.md; constants_abilities.json (ursa_overpower, ursa_fury_swipes, ursa_earthshock)

## Contra Crystal Maiden (crystal_maiden)
- placar: 22V-34J, 64,7% de vitória do Weaver, a melhor taxa dele entre todos os oponentes com 30+ jogos de pro (pro_dados/weaver.json)
- por que importa: maior vantagem medida do Weaver com amostra relevante (34 jogos); suporte duro, sem mobilidade própria e com a menor vida base do jogo.
- janelas: Crystal Maiden é puro suporte, fecha Tranquil Boots aos 8,4 e nunca chega perto de um item de dano real. O Weaver, mesmo antes do Desolator, já farma mais rápido que ela em qualquer ponto do jogo.
- o que ela faz com você: Frostbite prende e impede movimento e ataque por até 3s; Crystal Nova desacelera em área; a ultimate Freezing Field é canalizada (10s parada no lugar) e fácil de interromper ou fugir com Shukuchi.
- o que você faz com ele: ela tem 120 de vida base e 0 de armadura, a menor do jogo (ficha dela); Geminate Attack mais Desolator matam ela em 1-2 trocas se você chegar perto.
- itens que viram: seu BKB (27,6) bloqueia Frostbite e Crystal Nova; qualquer Freezing Field vira risco pra ela se você estiver com imunidade mágica por perto, e mesmo sem BKB o Shukuchi já tira você do alcance do kit dela antes do combo completar.
- como jogar: ignore a presença dela na lane adversária e farme normal; se ela tentar Frostbite sozinha, puna com Geminate Attack, ela não tem como revidar.
- fonte: pro_dados/weaver.json; pro_dados/crystal_maiden.json; content/fichas/crystal_maiden.md; content/fichas/weaver.md; constants_abilities.json (crystal_maiden_frostbite, crystal_maiden_crystal_nova, crystal_maiden_freezing_field)

## Contra Leshrac (leshrac)
- placar: 25V-42J, 59,5% de vitória do Weaver, a 2ª melhor taxa dele entre oponentes com 30+ jogos de pro (pro_dados/weaver.json)
- por que importa: mage mid de dano puro que fica mais forte sozinho conforme farma, mas sem sobrevivência própria, uma das maiores vantagens do Weaver com amostra relevante.
- janelas: Leshrac fecha Arcane Boots aos 7,1 e Kaya aos 15,9; é frágil o jogo inteiro, sem item de sobrevivência no core. O Weaver cruza o Desolator (15,6) quase junto do Kaya dele, e a partir daí já ameaça fechar a distância antes de qualquer combo mágico render.
- o que ele faz com você: Split Earth estuna em área (até 1,7s); Diabolic Edict causa dano Puro ao redor dele mesmo, que atravessa Black King Bar (bkbpierce sim), mas é fraco sozinho sem o resto do combo; Lightning Storm salta entre alvos próximos e desacelera.
- o que você faz com ele: ele não tem fuga própria além de distância e itens; Shukuchi fecha rápido e Geminate Attack mata antes que ele consiga reaplicar o combo mágico.
- itens que viram: seu BKB (27,6) bloqueia Split Earth e Lightning Storm, nenhum atravessa imunidade mágica; o Diabolic Edict ainda machuca através do BKB, mas o dano sozinho não é suficiente pra matar.
- como jogar: force a troca direta assim que tiver Desolator; ele depende de acertar o stun em área pra começar o combo, fique fora de grupo quando ele estiver com mana cheia.
- fonte: pro_dados/weaver.json; pro_dados/leshrac.json; content/fichas/leshrac.md; content/fichas/weaver.md; constants_abilities.json (leshrac_split_earth, leshrac_diabolic_edict, leshrac_lightning_storm)

## Contra Gyrocopter (gyrocopter)
- placar: 41V-69J, 59,4% de vitória do Weaver, a 3ª melhor taxa dele entre oponentes com 30+ jogos de pro (pro_dados/weaver.json)
- por que importa: também carry de posição 1, outro rival de mesma função sem lane fixa em comum, com boa vantagem medida do Weaver.
- janelas: Gyrocopter fecha Power Treads aos 7,5 e Ultimate Scepter aos 18,5, um power spike de área (Side Gunner) bom pra limpar wave, mas não burst de duelo direto. O Weaver fecha Desolator quase junto (15,6) e o Shard (18,5) no mesmo minuto do Scepter dele, o ponto em que já vence uma troca 1x1.
- o que ele faz com você: Homing Missile persegue e estuna até 2,5s (pode ser destruído antes de chegar); Flak Cannon acerta todo mundo num raio de 1250 e atravessa Black King Bar (bkbpierce sim), mas é dano dividido, não burst de alvo único; Call Down (ult) cai em área fixa e desacelera.
- o que você faz com ele: ele não tem fuga própria nem alta mobilidade; Shukuchi fecha a distância antes do Homing Missile completar o voo (2,5s de pré-voo), e Geminate Attack mais Desolator vencem a troca de ataque básico.
- itens que viram: seu BKB (27,6) bloqueia Homing Missile e Call Down, nenhum atravessa imunidade mágica; o Flak Cannon dele ainda te acerta mesmo com BKB, mas é dano dividido entre todos no raio, não focado em você.
- como jogar: desvie do Homing Missile andando em zigue-zague ou perto de um aliado; depois do seu Desolator e Shard, force o 1x1 antes dele ter o Scepter pronto.
- fonte: pro_dados/weaver.json; pro_dados/gyrocopter.json; content/fichas/gyrocopter.md; content/fichas/weaver.md; constants_abilities.json (gyrocopter_homing_missile, gyrocopter_flak_cannon, gyrocopter_call_down)

## Contra Morphling (morphling)
- placar: 14V-62J, 22,6% de vitória do Weaver, a pior taxa dele entre todos os oponentes com 30+ jogos de pro (pro_dados/weaver.json)
- por que importa: o pior confronto do Weaver no pro play, dois carries de posição 1 sem lane em comum, o tipo de duelo "farm contra farm" que decide a partida nos 20-30 min, com amostra robusta de 62 jogos.
- janelas: até os 10 min o Morphling farma mais rápido, fechando Lifesteal (7,9) e Vladmir's (10,7), limpando camp grande sem perder vida; o Weaver só fecha Treads aos 7,8 e ainda depende do sobi_mask pra sustain. Dos 14 aos 18 min o Morphling fecha Yasha (14,6) e Manta (18,4), farmando em paralelo com as ilusões, bem quando o Weaver fecha Desolator (15,6) e Shard (18,5): os dois crescem juntos, mas o Manta já dá ao Morphling uma saída rápida se o Weaver tentar engajar. Dos 24 aos 30 min o Morphling fecha Butterfly (25,8, 35% de evasão) antes do BKB do Weaver (27,6): nessa janela parte dos ataques básicos do Weaver erram.
- o que ele faz com você: Waveform deixa o Morphling invulnerável enquanto atravessa a área, então ele entra, bate e sai sem levar dano de volta; Adaptive Strike estuna e empurra, com dano que escala com a Agilidade dele; Manta Style dá ilusões pra farmar em paralelo enquanto foge de você.
- o que você faz com ele: ele troca pra Força quando é iniciado, então pegar ele distraído farmando, sem a troca de atributo pronta, é o melhor momento; Threads of Fate rende dano persistente se você ficar perto por 1,5s, e Geminate Attack soma dano rápido contra a vida baixa dele no início do jogo.
- itens que viram: o Butterfly dele (25,8, 35% de evasão) chega antes do seu BKB e faz parte dos seus ataques básicos errarem; Monkey King Bar resolve isso (80% de acerto certeiro), mas raramente compensa o slot no Weaver. O BKB dele (30,9, tarde) sai bem depois do seu: dos 27 aos 31 min você tem imunidade mágica e ele não.
- como jogar: não brigue no farm dele cedo, ele sempre sai na frente até os 15 min; espere seu Desolator e Shard pra forçar a troca, e use Shukuchi pra reposicionar em vez de perseguir uma Waveform que você não alcança.
- fonte: pro_dados/weaver.json; pro_dados/morphling.json; content/porque_itens/morphling.md; content/fichas/weaver.md; constants_abilities.json (morphling_waveform, morphling_adaptive_strike_agi, weaver_threads_of_fate, weaver_geminate_attack); api.opendota.com/api/constants/aghs_desc

## Contra Doom (doom_bringer)
- placar: 12V-40J, 30,0% de vitória do Weaver, a 2ª pior taxa dele entre oponentes com 30+ jogos de pro (pro_dados/weaver.json)
- por que importa: um dos piores confrontos do Weaver no pro play; a ultimate dele é o único efeito do patch que bloqueia Shukuchi e Time Lapse ao mesmo tempo, mesmo contra Black King Bar.
- janelas: Doom fecha Phase Boots aos 7,0 e o combo Devour mais Blink aos 19,7 (pro_dados/doom_bringer.json), ficando pronto pra caçar isolado a partir dos 18-20 min, pouco depois do Shard do Weaver (18,5). O Aghanim's Shard dele (18,7) dá 2 cargas de Devour, roubando habilidade de creep com mais frequência nessa fase. O BKB dele sai aos 24,0, antes do do Weaver (27,6): entre 20 e 27 min ele já inicia protegido enquanto o Weaver ainda não.
- o que ele faz com você: Doom (ultimate, desde o nível 6) dispela, impede qualquer cast de feitiço ou cura por até 16s e causa dano contínuo, atravessando Black King Bar (bkbpierce sim). Como Shukuchi e Time Lapse são casts de habilidade, o Doom bloqueia os dois ao mesmo tempo, mesmo com BKB ativo.
- o que você faz com ele: antes do nível 6 dele, ou se ele gastar o Doom em outro alvo, ele não tem mais disable real; Geminate Attack atravessa o próprio BKB dele depois, e Threads of Fate rende dano se você ficar perto.
- itens que viram: seu BKB (27,6) não resolve o Doom, a habilidade ignora imunidade mágica por desenho (bkbpierce sim, constants_abilities.json); a resposta real é não deixar ele chegar perto o bastante pra castar antes do nível 6-10, depois de aplicado não existe item que reverta o efeito em você.
- como jogar: não farme sozinho e visível perto de onde o Doom costuma rotacionar antes do seu nível 6 estar seguro; se ele gastar o Doom em outro herói do seu time, é a janela pra você forçar a luta sem medo do silence.
- fonte: pro_dados/weaver.json; pro_dados/doom_bringer.json; content/fichas/doom_bringer.md; content/fichas/weaver.md; constants_abilities.json (doom_bringer_doom, weaver_shukuchi, weaver_time_lapse)

## Contra Monkey King (monkey_king)
- placar: 15V-48J, 31,3% de vitória do Weaver, a 3ª pior taxa dele entre oponentes com 30+ jogos de pro (pro_dados/weaver.json)
- por que importa: 3º pior confronto do Weaver no pro play; também carry historicamente de posição 1 (539 partidas de liga como safelane no patch 7.41, das quais 332 antes do 7.41c), outro duelo de carry sem lane fixa em comum, com os ataques dele atravessando Black King Bar.
- janelas: Monkey King fecha Power Treads aos 6,0 e Echo Sabre aos 13,5 (pro_dados/monkey_king.json), um power spike de ataque básico que chega antes do Desolator do Weaver (15,6). Dos 18 aos 26 min ele fecha BKB (24,9) e Aghanim's Shard (25,9), pronto pra uma troca prolongada; o Weaver só fecha o próprio BKB aos 27,6, cerca de 3 min depois.
- o que ele faz com você: Boundless Strike estuna em linha com True Strike (ignora evasão) e dano crítico; Jingu Mastery dá 4 ataques bônus com dano e lifesteal depois do 4º acerto no mesmo alvo, e esse efeito atravessa Black King Bar (bkbpierce sim), então mesmo com imunidade mágica ele continua roubando vida de você numa troca prolongada.
- o que você faz com ele: Threads of Fate e Geminate Attack dão dano à distância, fora do alcance corpo a corpo dele; se você mantém distância, ele nunca completa os 4 acertos do Jingu Mastery.
- itens que viram: seu BKB (27,6) bloqueia Boundless Strike (Strong Dispels Only, então BKB impede o cast nele), mas não o Jingu Mastery, que continua funcionando mesmo contra você com imunidade mágica; a resposta real contra ele é distância, não item defensivo único.
- como jogar: evite trocar ataque básico corpo a corpo com ele sem necessidade, cada acerto dele soma pro combo do Jingu Mastery; use Shukuchi e o alcance do Geminate Attack pra vencer de longe em vez de bater de perto.
- fonte: pro_dados/weaver.json; pro_dados/monkey_king.json; content/porque_itens/monkey_king.md; app/public/data/herois/monkey_king.json (539 partidas de liga safelane); content/fichas/weaver.md; constants_abilities.json (monkey_king_boundless_strike, monkey_king_jingu_mastery, weaver_threads_of_fate, weaver_geminate_attack)
