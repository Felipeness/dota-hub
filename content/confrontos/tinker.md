---
id: confrontos-tinker
heroi: Tinker
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tinker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/queenofpain.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/pudge.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/invoker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/viper.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/sniper.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/razor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shredder.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/spirit_breaker.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer
---

Tinker joga de mid em 84,6% das partidas de liga 7.40-7.41 (373 de 441 jogos, partidas pro 7.40-7.41, OpenDota). 441 jogos de pro no patch 7.40+7.41, 614 gpm, 838 xpm, nível final médio 22 (pro_dados/tinker.json), e o kit inteiro gira em torno do Rearm: Laser cega, March of the Machines empurra wave e limpa camp, e o Rearm devolve os dois (cd 5,5 a 4,5s) antes do inimigo se recompor. Ele não compra Botas de Travel porque a própria Keen Conveyance teleporta pra estrutura, unidade e herói aliado conforme sobe de nível (tinker_keen_teleport, constants_abilities.json). Isso faz os confrontos dele terem dois formatos bem diferentes: suportes e gankers que rotacionam cedo pra matar o mid mais frágil do jogo antes dele crescer (Jakiro, Lion, Rubick, Pudge, Snapfire, Spirit Breaker), e outros carries/mids que nunca dividem lane com ele mas competem pelo mesmo mapa, pela mesma corrida de item e, mais cedo ou mais tarde, pelo mesmo 1x1 isolado (Shadow Fiend, Queen of Pain, Invoker, Dragon Knight, Ember Spirit, Viper, Storm Spirit, Sniper, Razor, Timbersaw).

## Contra Shadow Fiend (nevermore)
- placar: 44 vitórias em 97 jogos de pro, 45,4% (pro_dados/tinker.json, confrontos hero_id 11, maior amostra de todos os confrontos do Tinker)
- por que importa: é o oponente com mais jogos de pro contra o Tinker, mas os dois quase nunca dividem lane hoje. Nas partidas de liga 7.40-7.41 o Shadow Fiend divide entre safelane e mid (56,7% pos 1 contra 43,0% pos 2 em 3.990 jogos, partidas pro 7.40-7.41, OpenDota), então boa parte do confronto real não é de lane, é de corrida de farm e de quem fecha o próprio power spike primeiro no mapa.
- janelas: até 12 min nenhum dos dois ameaça o outro de verdade, lanes separadas. Dos 12 aos 24 min o Tinker tem a vantagem de mobilidade: Blink (11,5 min, pro_dados/tinker.json) e Kaya and Sange (16,8 min) dão pra ele rotacionar e punir o SF antes do Black King Bar dele. Depois dos 25 min a maré vira: SF fecha Black King Bar (25,2 min, pro_dados/nevermore.json) e Hurricane Pike (23,0 min), e a partir daí ele caminha pelo combo mágico inteiro do Tinker (Laser, March, Warp Flare são bkbpierce: No, constants_abilities.json) pra fechar o corpo a corpo.
- o que ele faz com você: Shadowraze (85 a 280 de dano, 80 de mana, cd de só 9s, alcance de 200 na frente dele) te afasta sem aviso; Feast of Souls dá attack speed e move speed por 8s pra ele te alcançar e puxar várias trocas seguidas; depois do BKB ele ignora Laser, March e Warp Flare por completo.
- o que você faz com ele: Laser cega 100% dos ataques físicos por 3 a 4,5s, que é tempo suficiente pra zerar qualquer troca de corpo a corpo antes dele comprar BKB; combine com March pra dano de área enquanto ele tenta reposicionar.
- itens que viram: o Black King Bar dele (25,2 min) anula seu combo mágico inteiro, incluindo Warp Flare; seu Shiva's Guard (25,6 min, Freezing Aura reduz 45 de attack speed num raio de 1200) ainda neutraliza o DPS físico dele mesmo com BKB puxado, porque é slow de aura, não disable.
- como jogar: evite a troca de corpo a corpo depois dos 25 min, é dele. Antes disso, cegue com Laser e farme mid/triangulo com March enquanto ele ainda tá fraco; se ele vier pra cima, Warp Flare mais Rearm te tira do alcance antes dele puxar o combo físico.
- fonte: pro_dados/tinker.json; pro_dados/nevermore.json; constants_abilities.json (tinker_laser, tinker_march_of_the_machines, nevermore_frenzy, nevermore_shadowraze1); OpenDota explorer

## Contra Jakiro (jakiro)
- placar: 37 vitórias em 85 jogos de pro, 43,5% (pro_dados/tinker.json, confrontos hero_id 64)
- por que importa: segunda maior amostra de confrontos do Tinker em pro. Jakiro joga majoritariamente na safelane como suporte (80,5% das partidas de liga 7.40-7.41, partidas pro 7.40-7.41, OpenDota) e rotaciona pra cima do mid com frequência (12,2% dos jogos marcados como rotação), então o volume alto vem de gank, não de lane fixa.
- janelas: até 11 min o Tinker farma livre, Jakiro ainda não tem Arcane Boots (11,7 min, pro_dados/jakiro.json) nem mana pra sustentar o combo de controle. Dos 12 aos 20 min o risco é de gank pontual com Dual Breath mais Ice Path. Depois dos 20 min, se o Jakiro fechar Aghanim's Scepter (upgrade de Macropyre: duração maior, dano Puro e paredes de gelo que reduzem 60% de velocidade nas bordas, aghs_desc), uma Macropyre bem posicionada em cima de você é risco de morte mesmo com Blink pronto, porque a parede de gelo trava a rota de fuga.
- o que ele faz com você: Dual Breath desacelera e causa dano ao longo do tempo, Ice Path estuna se formar embaixo de você, e Macropyre (100 a 200 de dano por segundo, 10s de duração, largura de 500) é a ameaça real de teamfight, seu HP de mid não aguenta ficar parado dentro dela.
- o que você faz com ele: Laser cego não ajuda contra ele porque Jakiro briga à distância, mas March of the Machines e o combo de Rearm dão dano de área suficiente pra matar ele rápido se ele errar o posicionamento; ele não tem fuga própria além de Boots.
- itens que viram: seu Warp Flare (shard, 24,5 min) te tira da área da Macropyre com o root/teleporte; o Black King Bar dele chegaria tarde demais (ele não é o perfil de herói que compra), então o seu combo mágico continua funcionando nele o jogo inteiro.
- como jogar: respeite o raio de 900 da sua própria March perto dele (serve pra limpar a Macropyre que ele solta em cima de wave), mas nunca fique parado perto de onde ele pode formar Ice Path. Gank ele fora de posição, ele não tem resposta de 1x1.
- fonte: pro_dados/tinker.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre, jakiro_dual_breath, jakiro_ice_path); aghs_desc (OpenDota); OpenDota explorer

## Contra Lion (lion)
- placar: 33 vitórias em 78 jogos de pro, 42,3% (pro_dados/tinker.json, confrontos hero_id 26)
- por que importa: terceira maior amostra. Lion joga de suporte na offlane (67,7% das partidas de liga 7.40-7.41, partidas pro 7.40-7.41, OpenDota) e é ganker clássico, com o maior burst de alvo único do jogo, e seu HP baixo de mid é alvo fácil pro combo dele a qualquer momento da partida.
- janelas: até 6 min ele já pode te matar com Hex mais Earth Spike mesmo sem nível 6, porque Finger of Death de nível 1 (se ele pular pra lá) já causa 600. Na prática ele fecha Finger of Death só no 6, então o risco grande começa aí; depois disso ele é uma ameaça constante até o fim, já que Blink dele (18,2 min, pro_dados/lion.json) fecha a distância pra qualquer combo.
- o que ele faz com você: Hex (lion_voodoo, até 3,2s de duração) te desliga tudo, Earth Spike estuna em área e Finger of Death causa 600 a 850 de dano fixo, mais que o suficiente pra zerar seu HP de uma vez se ele acertar o combo completo.
- o que você faz com ele: Laser cega ele e tira o DPS físico de perto; antes do Blink dele, ele depende de caminhar até o alcance de Hex (cast range curto), então farmar longe da visão do time dele é a defesa mais simples.
- itens que viram: nem Hex nem Finger of Death são bkbpierce (constants_abilities.json), então seu Black King Bar (mediana de 28,0 min, 115 jogos, partidas pro 7.40-7.41, OpenDota) anula o combo inteiro dele; Linken's Sphere (situacional, mediana de 33,4 min, 30 jogos, partidas pro 7.40-7.41, OpenDota) bloqueia a primeira magia de alvo único, Hex ou Finger of Death, o que sobrar.
- como jogar: trate presença de Lion como gatilho pra recuar da lane, não pra testar. Depois que você tiver BKB, pode voltar a farmar perto dele sem medo do combo de kill, só o físico dele continua valendo.
- fonte: pro_dados/tinker.json; pro_dados/lion.json; constants_abilities.json (lion_voodoo, lion_finger_of_death, lion_impale); OpenDota explorer

## Contra Rubick (rubick)
- placar: 39 vitórias em 75 jogos de pro, 52,0% (pro_dados/tinker.json, confrontos hero_id 86)
- por que importa: quarta maior amostra, e o único confronto da lista em que o adversário ataca o seu próprio kit em vez de só o seu HP: Spell Steal copia a última magia que você lançou, Rearm incluso.
- janelas: até 20 min Rubick é reativo, só vira ameaça se roubar um Laser ou March bem posicionado. Dos 21 aos 27 min, com Blink (21,6 min, pro_dados/rubick.json) e Aether Lens (22,9 min), ele passa a iniciar de longe. Depois do Aghanim's Scepter dele (27,4 min, guarda 2 feitiços roubados em vez de 1, aghs_desc), qualquer magia sua perto dele vira risco dobrado.
- o que ele faz com você: Spell Steal rouba o último feitiço que você lançou (se for Rearm, ele ganha um reset de cooldown dos feitiços dele, não dos seus, mas ainda assim tira uma ferramenta de combo sua do ar); Telekinesis te levanta e estuna no pouso, interrompendo Rearm ou Keen Conveyance se acertar durante o canal; Fade Bolt reduz seu dano mágico por 10s.
- o que você faz com ele: Laser e March ainda fazem dano normal nele, ele não tem fuga própria cedo; evite soltar seu feitiço mais caro (Warp Flare depois do shard) perto dele sem necessidade, é Spell Steal de graça.
- itens que viram: o Scepter dele dobra o risco de perto dele; seu próprio Aghanim's Scepter (turrets ativam e disparam mais rápido, aghs_desc) não depende de magia roubável como Laser ou March, então ele continua funcionando mesmo se Rubick tiver acabado de roubar algo seu.
- como jogar: controle a ordem dos seus feitiços perto de um Rubick vivo, gaste o combo caro só quando ele já tiver gasto o Spell Steal recente ou estiver morto. Se ele tentar Telekinesis em cima do seu canal, Black King Bar (bkbpierce: No pra Telekinesis, constants_abilities.json) resolve.
- fonte: pro_dados/tinker.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis, rubick_fade_bolt); aghs_desc (OpenDota)

## Contra Queen of Pain (queenofpain)
- placar: 28 vitórias em 68 jogos de pro, 41,2% (pro_dados/tinker.json, confrontos hero_id 39)
- por que importa: é o confronto mid contra mid de maior volume na lista (ela joga mid em 88,5% das partidas de liga 7.40-7.41, partidas pro 7.40-7.41, OpenDota), e também a maior amostra entre os heróis que de fato dividem a mesma lane com o Tinker.
- janelas: até 11 min os dois trocam poke à distância, ela tem Shadow Strike (cd de só 13 a 4s) pra zerar seu HP aos poucos. Dos 11 aos 17 min vira corrida de Blink: a dela (cd 12 a 6s) é mais barata e mais rápida de recarregar que a sua (11,5 min pro_dados/tinker.json, cd único de item). Depois dos 20 min, com Scepter dela (23,5 min, pro_dados/queenofpain.json), Sonic Wave vira ameaça de burst em área que ignora Black King Bar.
- o que ele faz com você: Shadow Strike aplica slow e dano ao longo de 16s sem gastar muito mana; Sonic Wave (325 a 625 de dano, bkbpierce: Yes, constants_abilities.json) atravessa seu BKB inteiro, então ela ainda te mata mesmo você imune a magia.
- o que você faz com ele: Laser cega e ainda causa dano Puro, que não é reduzido por nada dela; vença a troca antes do nível 6 dela, antes do Sonic Wave existir, farmando agressivo com March.
- itens que viram: Sonic Wave sendo bkbpierce muda o seu plano de defesa, BKB não resolve contra o ultimate dela; Shiva's Guard (25,6 min) ajuda porque reduz attack speed dela em teamfight, mas não bloqueia o Sonic Wave em si.
- como jogar: pressione antes do nível 6 dela, é sua melhor janela. Depois que ela tiver ultimate, trate Sonic Wave como dano garantido mesmo com BKB e jogue a distância, não dentro do raio de 450 dela.
- fonte: pro_dados/tinker.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_sonic_wave, queenofpain_shadow_strike, queenofpain_blink); OpenDota explorer

## Contra Pudge (pudge)
- placar: 25 vitórias em 62 jogos de pro, 40,3% (pro_dados/tinker.json, confrontos hero_id 14)
- por que importa: sexta maior amostra. Pudge joga sobretudo na offlane como suporte móvel (59,4% das partidas de liga 7.40-7.41, com rotação cedo registrada em 7,0% delas, partidas pro 7.40-7.41, OpenDota), com o Hook ameaçando lane a lane por causa da rotação, e seu Hook mais Dismember ignoram Black King Bar, exatamente o item que você mais depende pra sobreviver a combo.
- janelas: até 17 min o risco é pontual, de gank de Hook. Depois dos 17-19 min, com Ultimate Scepter (17,2 min, pro_dados/pudge.json) e Blink (19,5 min), ele aumenta o alcance efetivo de onde consegue te puxar, inclusive de dentro da sua própria base quando você teleporta via Keen Conveyance pra perto da linha de frente.
- o que ele faz com você: Meat Hook (150 a 360 de dano, bkbpierce: Yes) te puxa pra perto dele mesmo com BKB ativo; Dismember (bkbpierce: Yes também) te prende e cura ele com o dano, letal pro seu HP baixo de mid.
- o que você faz com ele: Laser cega e ainda causa dano Puro nele; March limpa o Rot dele na wave; sua melhor defesa não é item, é visão, Pudge sem vision de você não acerta Hook.
- itens que viram: nem Hook nem Dismember são bloqueados por BKB, então ele não precisa de nenhum item específico pra te matar, só de visão; seu Warp Flare (shard) só ajuda depois que você já sobreviveu ao hook inicial, não antes.
- como jogar: compre Observer/Sentry cedo nas rotas que ele costuma gankar e evite ficar parado sem visão de retorno. Se ele acertar o Hook, seu Rearm não salva, o disable dele pierce BKB; o jeito de vencer é não deixar ele acertar.
- fonte: pro_dados/tinker.json; pro_dados/pudge.json; constants_abilities.json (pudge_meat_hook, pudge_dismember); OpenDota explorer

## Contra Invoker (invoker)
- placar: 30 vitórias em 50 jogos de pro, 60,0% (pro_dados/tinker.json, confrontos hero_id 74)
- por que importa: Invoker joga mid em 94,7% das partidas de liga 7.40-7.41 (partidas pro 7.40-7.41, OpenDota), mesma posição do Tinker, e é um dos confrontos mais favoráveis da lista com volume relevante: os dois são mids de dano mágico que dependem de mana e cooldown pra tudo, mas o Tinker tem dano de área constante via Rearm e o Invoker depende de acertar um combo isolado.
- janelas: até 7 min o Invoker é mais fraco em lane, sem Invoke maduro ele não tem burst nem fuga própria. Dos 11 aos 16 min, com seu Blink (11,5 min) contra o combo QW dele crescendo, o jogo fica parelho. Depois dos 20 min, com Ultimate Scepter do Invoker (20,2 min, pro_dados/invoker.json) e Rod of Atos (16,8 min), ele passa a conseguir prender você antes de soltar o combo, mas seu Shiva's (25,6 min) ainda segura teamfight melhor que o kit reativo dele.
- o que ele faz com você: Sun Strike (dano baseado em Exort, bkbpierce: Yes) te mata de longe mesmo com Black King Bar, sem aviso visual até o impacto; EMP drena sua mana, que você precisa pra manter o ciclo de Rearm; qualquer stun dele (Tornado, Deafening Blast) cancela seu Rearm ou sua Keen Conveyance se acertar durante o canal.
- o que você faz com ele: Laser e March funcionam nele o jogo inteiro, ele não tem HP alto; se ele não tiver Ghost Walk ativo, seu combo de área mais Rearm mata ele antes dele montar o combo de Invoke completo.
- itens que viram: Sun Strike sendo bkbpierce é o único jeito dele te matar isolado mesmo com seu BKB; seu Aghanim's Shard (Warp Flare) ajuda a sair do raio de EMP e Tornado antes dele conseguir prender você.
- como jogar: pressione a lane cedo, antes do nível 7 dele. Depois dos 20 min, respeite Sun Strike mesmo com BKB ligado e não fique parado sem necessidade; fora isso, farm race favorece você, seu clear de wave com March é mais rápido.
- fonte: pro_dados/tinker.json; pro_dados/invoker.json; constants_abilities.json (invoker_sun_strike, invoker_emp, invoker_tornado); OpenDota explorer

## Contra Dragon Knight (dragon_knight)
- placar: 27 vitórias em 49 jogos de pro, 55,1% (pro_dados/tinker.json, confrontos hero_id 49)
- por que importa: Dragon Knight tem a posição mais flexível da lista (41,4% safelane, 37,1% mid e 21,5% offlane nas partidas de liga 7.40-7.41, partidas pro 7.40-7.41, OpenDota), então parte desses 49 jogos é lane direta e parte é farm race com ele na safelane; entra na lista pelo volume alto e por ser um dos "mesma posição" mais comuns em pro.
- janelas: até 16 min ele é só um tanque físico comum, seu combo mágico (Laser mais March) ainda funciona bem porque ele não tem resistência mágica alta nessa fase. Dos 16 aos 23 min, com Blink dele (16,2 min, pro_dados/dragon_knight.json) e Elder Dragon Form no nível 6, ele ganha alcance e dano em área que competem direto com o seu poke. Depois dos 23 min, com Black King Bar dele (23,3 min), seu combo para de funcionar nele por 7 a 9s.
- o que ele faz com você: Breathe Fire reduz o dano dos seus ataques básicos (pouco relevante, você não autoataca pra dano), mas em forma de dragão ele ganha splash e um debuff de frost que reduz sua velocidade de movimento e de ataque; Dragon Tail estuna e cancela seu canal se acertar.
- o que você faz com ele: antes do Elder Dragon Form (nível 6) ele não tem alcance pra te alcançar; Laser mais March ainda causam dano cheio nele até ele comprar resistência mágica, que não é prioridade usual no build físico dele.
- itens que viram: Black King Bar dele (23,3 min) anula seu combo mágico por completo durante a duração; seu Shiva's Guard ajuda contra o DPS físico dele em forma de dragão, já que reduz attack speed por aura.
- como jogar: pressione antes do nível 6, antes da forma de dragão. Depois do BKB dele, evite a troca isolada e jogue pelo farm, seu clear de wave ainda é mais rápido que o dele.
- fonte: pro_dados/tinker.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_elder_dragon_form, dragon_knight_breathe_fire, dragon_knight_dragon_tail); OpenDota explorer

## Contra Ember Spirit (ember_spirit)
- placar: 16 vitórias em 44 jogos de pro, 36,4% (pro_dados/tinker.json, confrontos hero_id 106)
- por que importa: mesma posição (mid em 96,5% das partidas de liga 7.40-7.41, partidas pro 7.40-7.41, OpenDota) e uma das maiores desvantagens da lista com amostra relevante: os dois rotacionam o mapa inteiro, mas a mobilidade dele (Fire Remnant) compete direto com a sua (Keen Conveyance) e ele sai na frente.
- janelas: até 9 min a lane é parelha, os dois farmam com bottle. Dos 9 aos 19 min ele ganha a corrida: Phase Boots (9,1 min, pro_dados/ember_spirit.json) mais Sleight of Fist já fazem dano de troca que você não iguala nessa fase. Depois dos 20 min, com Kaya (19,2 min) e Black King Bar (27,1 min) dele, ele consegue entrar, bater e sair antes do seu combo completo.
- o que ele faz com você: Sleight of Fist (50 a 170 de dano bônus contra herói) ataca todo mundo numa área e volta pro remnant antes de você reagir; Searing Chains prende até 2 alvos por até 2,75s, interrompendo seu canal se acertar; Fire Remnant dá fuga e iniciação instantânea que seu Warp Flare não alcança pra interromper a tempo.
- o que você faz com ele: Laser cega os ataques dele, mas ele ataca pouco fora do Sleight of Fist; seu dano de área (March) ainda machuca se ele errar o posicionamento do remnant.
- itens que viram: Flame Guard dele absorve 70% do seu dano mágico incluindo Laser e March por alguns segundos, então gaste o combo antes dele ativar; Black King Bar dele anula o resto.
- como jogar: não brigue a troca isolada de remnant contra remnant, você perde a corrida de mobilidade. Jogue pelo farm e pelo grupo, puxe ele pra perto do seu time antes de engajar sozinho.
- fonte: pro_dados/tinker.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_sleight_of_fist, ember_spirit_searing_chains, ember_spirit_flame_guard); OpenDota explorer

## Contra Viper (viper)
- placar: 23 vitórias em 43 jogos de pro, 53,5% (pro_dados/tinker.json, confrontos hero_id 47)
- por que importa: mesma posição em parte dos jogos (mid em 63,3% e offlane em 26,8% das partidas de liga 7.40-7.41, partidas pro 7.40-7.41, OpenDota) e o único confronto da lista em que o oponente desliga sua passiva mesmo com Black King Bar ligado, o que o torna mecanicamente perigoso apesar do seu favoritismo no placar.
- janelas: até 12 min a lane é de poke longo dos dois lados. Dos 13 aos 20 min, com Ultimate Scepter do Viper (18,2 min, pro_dados/viper.json), Nosedive vira um gap closer de 700 de alcance que aplica Nethertoxin e Corrosive Skin numa área de 500 ao redor de onde ele aterrissa; depois dos 20 min seu Kaya and Sange (16,8 min) e Scepter (20,3 min) já estão prontos e o seu dano de área passa a punir mais forte do que o DPS passivo dele.
- o que ele faz com você: Viper Strike (bkbpierce: Yes, constants_abilities.json) desacelera, reduz attack speed e desliga suas passivas mesmo com BKB ativo, o que inclui a redução de cooldown da sua Eureka; Nethertoxin zona uma área e dificulta sua fuga.
- o que você faz com ele: Laser cega os ataques físicos dele (ele é majoritariamente auto-attack à distância); March causa dano de área que ele não tem resposta rápida pra sair.
- itens que viram: Viper Strike pierce BKB muda a forma de jogar contra ele, BKB não te protege do slow nem do disable de passiva; Shiva's Guard ajuda porque reduz a velocidade de ataque dele por aura, sem depender de magia bloqueável.
- como jogar: evite ficar dentro do alcance de auto-attack dele por muito tempo, mesmo com BKB o Viper Strike ainda te atrasa; use seu alcance de Laser (600) pra manter distância e vencer pelo poke, não pela troca corpo a corpo.
- fonte: pro_dados/tinker.json; pro_dados/viper.json; constants_abilities.json (viper_viper_strike, viper_nethertoxin); OpenDota explorer

## Contra Storm Spirit (storm_spirit)
- placar: 22 vitórias em 41 jogos de pro, 53,7% (pro_dados/tinker.json, confrontos hero_id 17)
- por que importa: mesma posição (mid em 96,7% das partidas de liga 7.40-7.41, partidas pro 7.40-7.41, OpenDota), outro mid squishy de int que também gira em torno de mana e mobilidade; entra pela combinação de volume e de ser o espelho mais direto do seu próprio arquétipo (dano mágico, HP baixo, decide pela rotação).
- janelas: até 10 min os dois farmam com bottle, ele sem Ball Lightning relevante ainda. Dos 10 aos 20 min, com Kaya (13,7 min, pro_dados/storm_spirit.json) e Kaya and Sange (20,1 min), ele ganha burst de Ball Lightning mais Overload que ameaça te matar isolado se ele fechar com mana sobrando. Depois dos 25 min, com Black King Bar dele (26,1 min), ele ignora seu combo inteiro durante a duração.
- o que ele faz com você: Ball Lightning fecha qualquer distância gastando mana, Electric Vortex puxa você pra perto dele (interrompe seu canal se usado durante o Rearm ou a Keen Conveyance), e Overload soma dano e slow em cada feitiço que ele solta em sequência.
- o que você faz com ele: Laser cega e ainda causa dano Puro; se ele errar o cálculo de mana no Ball Lightning, ele fica preso sem conseguir sair, e seu March de área pune isso.
- itens que viram: Black King Bar dele anula seu Laser, March e Warp Flare durante a janela; drene a mana dele antes disso, sem mana ele não tem Ball Lightning pra fugir nem pra fechar.
- como jogar: controle a mana dele com pressão constante de lane, ele precisa de mana sobrando pros dois lados (fuga e iniciação). Depois do BKB dele, não brigue a troca isolada, puxe pro farm.
- fonte: pro_dados/tinker.json; pro_dados/storm_spirit.json; constants_abilities.json (storm_spirit_ball_lightning, storm_spirit_electric_vortex, storm_spirit_overload); OpenDota explorer

## Contra Sniper (sniper)
- placar: 19 vitórias em 31 jogos de pro, 61,3% (pro_dados/tinker.json, confrontos hero_id 35)
- por que importa: a maior vantagem do Tinker na lista com 30+ jogos. Sniper joga sobretudo de mid ou safelane (76,7% mid e 20,9% safelane nas partidas de liga 7.40-7.41, partidas pro 7.40-7.41, OpenDota) mas em qualquer uma delas tem pouco HP e zero mobilidade própria, exatamente o perfil que o combo de Rearm mais pune.
- janelas: o jogo inteiro favorece você. Seu Laser (alcance 600) e March (alcance de cast 300, raio 900) alcançam mais longe do que o Take Aim dele cedo; mesmo depois do Scepter dele (upgrade de Assassinate: atira mais rápido e estuna, aghs_desc), ele ainda precisa ficar parado pra mirar, janela boa pra Warp Flare.
- o que ele faz com você: Assassinate (300 a 500 de dano, 2s de mira, bkbpierce: No) ameaça de longe, mas é cancelável se você sair da linha de visão ou ficar fora do alcance; Headshot dá chance de knockback nos ataques normais dele.
- o que você faz com ele: Laser cega os ataques dele por completo durante a duração; March limpa ele de perto se ele errar o posicionamento; ele não tem fuga além de Boots, então uma vez que você fecha com Warp Flare, ele morre.
- itens que viram: seu Black King Bar bloqueia Assassinate (não é bkbpierce), então depois dele você pode farmar perto do Sniper sem medo da execução de longa distância.
- como jogar: caçe ele fora da visão do time dele, ele não tem resposta de 1x1. Se ele tentar Assassinate, quebre a linha de visão ou feche a distância com Warp Flare antes do disparo completar.
- fonte: pro_dados/tinker.json; pro_dados/sniper.json; constants_abilities.json (sniper_assassinate, sniper_take_aim); aghs_desc (OpenDota)

## Contra Razor (razor)
- placar: 18 vitórias em 30 jogos de pro, 60,0%, amostra no limite mínimo (pro_dados/tinker.json, confrontos hero_id 15)
- por que importa: segunda maior vantagem da lista com amostra válida (30 jogos). Razor tem posição flexível (42,4% offlane, 38,8% safelane e 18,9% mid nas partidas de liga 7.40-7.41, partidas pro 7.40-7.41, OpenDota), mas sem iniciação própria além de Static Link, e seu Rearm permite kitar ele a distância o jogo inteiro.
- janelas: até 17 min ele é lento e sem fuga, sua janela mais segura pra pressionar. Dos 17 aos 21 min, com Yasha (17,8 min, pro_dados/razor.json) e Manta (21,3 min), ele ganha velocidade pra fechar distância; Static Link (bkbpierce: Yes) continua funcionando mesmo depois do seu BKB.
- o que ele faz com você: Static Link drena seu dano de ataque pra ele enquanto durar o link (você não autoataca muito, então o impacto principal é ele ficar mais forte em troca de corpo a corpo); Plasma Field causa dano e slow em área, pior quanto mais longe ele estiver de você; Eye of the Storm (ultimate, bkbpierce: Yes) foca o alvo com menos vida.
- o que você faz com ele: Laser cega os ataques dele; ele não tem gap closer além de velocidade de movimento, então manter distância com March e Laser já neutraliza boa parte do kit dele.
- itens que viram: Static Link e Eye of the Storm pierce BKB, então seu Black King Bar não resolve contra ele sozinho; Shiva's Guard ajuda mais: a Freezing Aura reduz a velocidade de ataque dele por área o tempo todo, e o Arctic Blast ainda desacelera o movimento dele por 4s quando você ativa.
- como jogar: mantenha distância o jogo inteiro, ele depende de chegar perto pra Static Link valer alguma coisa. Se ele fechar o link, ainda dá pra kitar com Warp Flare, ele fica mais lento sem Manta pronto de novo.
- fonte: pro_dados/tinker.json; pro_dados/razor.json; constants_abilities.json (razor_static_link, razor_plasma_field, razor_eye_of_the_storm); OpenDota explorer

## Contra Timbersaw (shredder)
- placar: 24 vitórias em 42 jogos de pro, 57,1% (pro_dados/tinker.json, confrontos hero_id 98; arquivo de dados de pro sob o nome interno shredder.json)
- por que importa: terceira maior vantagem da lista. Timbersaw joga sobretudo de offlane (85,8% das partidas de liga 7.40-7.41, partidas pro 7.40-7.41, OpenDota), então o volume alto contra o Tinker vem de farm race e de gank cruzado, não de lane direta; mesmo com a armadura extra que ele acumula ao ser atacado (Reactive Armor), o dado mostra o Tinker favorecido.
- janelas: até 14 min ele farma a própria lane sem te ameaçar. Dos 14 aos 22 min, com Soul Ring (7,6 min, pro_dados/shredder.json) e Kaya and Sange (18,1 min), ele ganha a mobilidade de Timber Chain pra rotacionar; depois dos 22 min, com Blink dele (22,5 min), ele consegue te alcançar de surpresa, mas sem o burst de kill que os outros gankers da lista têm.
- o que ele faz com você: Timber Chain fecha distância rápido em cima de árvore e causa dano; Whirling Death reduz seu atributo primário (Int) por 11 a 14s, o que corta seu spell amp e sua regen de mana durante a duração; Chakram zona uma área, mas custa mana contínua.
- o que você faz com ele: Laser cega os ataques dele; Reactive Armor só dá armadura física e regen, não reduz dano mágico, então seu Laser e seu March passam cheios nele; ele também não tem burst de kill isolado como Lion ou Pudge, então a troca de poke tende a favorecer você.
- itens que viram: Black King Bar dele (26,6 min) bloqueia seu combo, mas chega tarde; Kaya and Sange dele dá resistência a slow e regen, não resistência mágica, então seu combo mágico continua acertando cheio nele mesmo depois dos 18 min.
- como jogar: pressione antes do Timber Chain dele render mobilidade de verdade (Soul Ring aos 7,6 min já libera isso). Depois do Blink dele (22,5 min), jogue mais pelo farm e pelo grupo, ele pode te alcançar de surpresa mesmo sem burst de kill isolado.
- fonte: pro_dados/tinker.json; pro_dados/shredder.json; constants_abilities.json (shredder_whirling_death, shredder_timber_chain, shredder_reactive_armor); OpenDota explorer

## Contra Snapfire (snapfire)
- placar: 16 vitórias em 51 jogos de pro, 31,4% (pro_dados/tinker.json, confrontos hero_id 128)
- por que importa: a maior desvantagem da lista com amostra relevante (51 jogos). Snapfire tem posição flexível (54,9% offlane, 23,9% safelane e 21,1% mid nas partidas de liga 7.40-7.41, partidas pro 7.40-7.41, OpenDota) e o kit dela zona exatamente o espaço que o Tinker precisa pra poke de longe sem ser alcançado.
- janelas: o jogo inteiro favorece ela. Firesnap Cookie (alcance 650) e Scatterblast (alcance 800, bônus de 30% de dano até 450 de distância) alcançam mais longe do que o espaço que você tem pra fugir; ela fecha Aghanim's Shard aos 16,9 min (pro_dados/snapfire.json), bem antes do seu (24,5 min), o que amplia o kit dela muito antes do seu upgrade.
- o que ele faz com você: Firesnap Cookie estuna por 1 a 2,2s e fecha distância de surpresa (alcance de salto 425); Mortimer Kisses chove 8 globs de dano por 5,5s numa área maior do que o seu alcance de fuga, e Scatterblast ainda desacelera 100% se ela te pegar perto.
- o que você faz com ele: Laser cega os ataques dela, mas ela é majoritariamente mago à distância, então o impacto é menor do que contra um right-clicker; sua melhor arma aqui é farmar fora do alcance dela, não brigar o poke.
- itens que viram: fora o Rearm (reseta cooldown, não é escape de posição), você não tem nenhum dispel ou blink reposicionável rápido o bastante pra fugir do alcance dela; seu Shard (Warp Flare, 24,5 min) é a única resposta de controle real que você ganha, e chega bem depois do Shard dela.
- como jogar: evite a troca de poke à distância, você perde. Farme fora da visão do time dela e feche combo só quando ela estiver sem Firesnap Cookie disponível (cd 21 a 15s) ou fora de posição.
- fonte: pro_dados/tinker.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_firesnap_cookie, snapfire_scatterblast, snapfire_mortimer_kisses)

## Contra Spirit Breaker (spirit_breaker)
- placar: 13 vitórias em 39 jogos de pro, 33,3% (pro_dados/tinker.json, confrontos hero_id 71)
- por que importa: segunda maior desvantagem da lista com amostra relevante. Spirit Breaker joga de suporte na offlane com o maior índice de rotação da lista (70,8% offlane e 21,5% dos jogos marcados como rotação nas partidas de liga 7.40-7.41, partidas pro 7.40-7.41, OpenDota) e Charge of Darkness é um feitiço global que persegue você em qualquer lugar do mapa, inclusive depois de uma Keen Conveyance.
- janelas: o risco existe desde o nível 6 dele. Charge of Darkness (cd 22 a 13s) acompanha você onde quer que você teleporte, e Greater Bash mais Nether Strike são bkbpierce: Yes (constants_abilities.json), então mesmo com Black King Bar pronto, o stun ainda acerta e cancela seu Rearm no meio do canal.
- o que ele faz com você: Charge of Darkness persegue e acelera com a distância, culminando num Greater Bash garantido no impacto; se ele te pegar no meio do canal do Rearm, o Rearm é cancelado e o cooldown é perdido; Nether Strike dá um segundo bash com dano bônus pra fechar o kill.
- o que você faz com ele: Laser cega os ataques dele fora da carga; fora isso, o kit dele é feito pra ignorar o seu controle de distância, e o combo mágico seu raramente mata ele antes dele fechar o bash.
- itens que viram: Black King Bar não resolve, Greater Bash e Nether Strike pierce spell immunity; a defesa real é visão de onde ele está no mapa antes de se expor sozinho, e um Force Staff ou Wind Waker (situacional, mediana de 42,1 min para o Wind Waker, 20 jogos, partidas pro 7.40-7.41, OpenDota) pra interromper a carga antes do impacto.
- como jogar: trate a presença dele no mapa (não só na sua lane) como motivo pra não ficar sozinho em lugar aberto. Farme perto de visão de aliado sempre que ele estiver livre pra carregar.
- fonte: pro_dados/tinker.json; pro_dados/spirit_breaker.json; constants_abilities.json (spirit_breaker_charge_of_darkness, spirit_breaker_greater_bash, spirit_breaker_nether_strike); OpenDota explorer
