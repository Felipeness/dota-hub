---
id: confrontos-lina
heroi: Lina
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lina.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/queenofpain.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/invoker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/sand_king.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/void_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dazzle.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/keeper_of_the_light.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/muerta.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/leshrac.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer (lane_role e patch de partidas de liga 7.40-7.41)
- liquipedia.net (Stun, Invulnerable, Hide, mecânicas gerais de disable e invulnerabilidade)
---

## Escolha dos oponentes

Lina é essencialmente mid em pro (85% das partidas, partidas de liga 7.40-7.41, OpenDota explorer por lane_role), então a maioria dos confrontos abaixo já é lane direta. Critério de escolha, com a fonte de cada grupo:

- **Mais jogados em pro (top 6 por volume)**: Shadow Fiend, Rubick, Ogre Magi, Snapfire, Dragon Knight, Lion. Fonte: OpenDota `/heroes/25/matchups`, partidas de liga 7.40+7.41 (pro_dados/lina.json).
- **Mesma posição principal (mid puro, posição 2) mais jogados contra ela**: Queen of Pain, Invoker, Storm Spirit. Fonte: OpenDota explorer, lane_role de partidas de liga 7.40-7.41 (Queen of Pain 88% mid, Invoker 94% mid, Storm Spirit 96% mid) cruzado com pro_dados/lina.json.
- **Maior vantagem dela, só com 30+ jogos**: Sand King (63,3%), Void Spirit (58,3%), Dazzle (58,1%).
- **Maior desvantagem dela, só com 30+ jogos**: Keeper of the Light (31,6%), Muerta (36,4%), Leshrac (37,1%).

Void Spirit e Storm Spirit também são mid puro, então aparecem reforçando dois critérios ao mesmo tempo (mesma posição e vantagem/volume).

## Contra Shadow Fiend (nevermore)

- placar: 199 vitórias em 394 jogos de pro, 50,5% (fonte: OpenDota `/heroes/25/matchups`, liga 7.40-7.41)
- por que importa: o par de mid mais jogado contra ela no cenário pro (394 partidas). Os dois vivem de poke em linha reta com dano que cresce ao longo da partida.
- janelas: até os 10 min os dois trocam Dragon Slave contra Shadowraze em cima da wave; Shadow Fiend ganha dano por alma empilhada (Necromastery, +1,35 por alma), Lina soma 64% de queimadura extra do Slow Burn. Aos 11-13 min ela sai na frente em rotação com Kaya (11,6 min) e Travel Boots (12,2 min) contra o Yasha dele (13,3 min). Dos 19 aos 25 min é a maior janela dela: Scepter (19,2 min) dá Flame Cloak pra turbinar o combo, e ele ainda não fechou BKB (25,2 min). Depois dos 25 min ele vira right-click puro com BKB mais Crystalys (24,2 min), e o combo mágico dela deixa de matar numa troca só.
- o que ele faz com você: Shadowraze (85 a 280 de dano, acerta até 200 de distância na frente dele numa área de raio 250, não precisa mirar nela especificamente) pune qualquer posicionamento perto da linha; se ela errar o LSA, ele fecha com raze mais autoataque. Requiem of Souls no late é fear em área: não atravessa BKB dela (bkbpierce: não), mas o fear por si só já quebra o combo ao empurrá-la fora de alcance.
- o que você faz com ele: LSA tem 700 de alcance e 0,5s de cast delay, o suficiente pra travar ele antes de ele fechar um raze de perto. Sem BKB, o combo completo (LSA 200 + Dragon Slave 245+burn + Laguna Blade 750) passa de 1300 de dano mágico e mata ele limpo antes dos 20 min.
- itens que viram: Black King Bar nela é o item que mais importa no confronto, porque nenhuma magia dela atravessa BKB e ele compra o dele aos 25,2 min, fechando a janela de kill limpo. Do lado dele, Linken's Sphere bloqueia um Laguna Blade isolado.
- como jogar: até os 15 min jogue a troca de poke, o burn do Slow Burn deixa o dano total dela maior mesmo com o Shadowraze dele recarregando mais rápido (9s contra 11s do Dragon Slave no nível 1). Guarde o combo completo pra matar ele antes do BKB dele fechar aos 25 min. Depois disso, ele vira tanque de magia, e só dano físico resolve.
- fonte: OpenDota /heroes/25/matchups; pro_dados/lina.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, nevermore_necromastery, lina_laguna_blade, lina_light_strike_array)

## Contra Rubick (rubick)

- placar: 138 vitórias em 316 jogos, 43,7% (amostra grande, fonte: OpenDota /heroes/25/matchups)
- por que importa: segundo oponente mais comum em pro (316 jogos) e ela perde a maioria dessas partidas. Ele rouba a última magia forte que ela lançou, geralmente o Laguna Blade.
- janelas: na lane ele é quase todo suporte fraco em dano (gpm 374, lh10 17 contra 75 dela), então ela domina até os 10 min. A partir dos 17-19 min, com wards e Arcane Boots (10,3 min) prontos, o perigo dele não é dano próprio, é roubar o combo dela numa troca em grupo. O Blink dele (21,6 min) entra na faixa em que o jogo já virou teamfight, onde ele pode devolver o Laguna Blade roubado nela ou em outro aliado.
- o que ele faz com você: Spell Steal copia a última magia lançada por ela (geralmente o Laguna Blade, 750 de dano) e devolve com o cooldown reduzido em até 30%. Fade Bolt reduz a amplificação de feitiço dela em até 24% por 10s, cortando o burst do combo. Telekinesis trava ela no ar e atordoa ao cair, tempo de sobra pro time dele fechar.
- o que você faz com ele: puna ele isolado, 374 de gpm e 17 de last hit aos 10 min é o pior farm da lista, ele morre fácil pro combo fora de posição. O Fade Bolt dele não atravessa BKB, então com BKB ela ainda executa o combo limpo nele.
- itens que viram: Black King Bar nela corta o Fade Bolt e a Telekinesis dele. Pra ele, Ultimate Scepter (27,4 min) deixa o Spell Steal roubar até 2 magias de uma vez, com mais alcance e já na versão Scepter da magia roubada. O Aghanim's Shard (27,0 min) não afeta o Spell Steal, melhora a Telekinesis, que passa a poder ser usada nele mesmo ou em aliados, com mais distância de arremesso e menos delay até cair.
- como jogar: puna o lane dele cedo, o farm dele é o pior da lista. Evite lançar o combo completo perto dele até saber o que ele já tem guardado no Spell Steal. Se ele já roubou o Laguna Blade, seu combo vira LSA mais Dragon Slave, ainda mata suporte mas não carry com vida alta.
- fonte: pro_dados/lina.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_fade_bolt, rubick_telekinesis); aghs_desc (Rubick)

## Contra Ogre Magi (ogre_magi)

- placar: 110 vitórias em 216 jogos, 50,9% (fonte: OpenDota /heroes/25/matchups)
- por que importa: terceiro oponente mais jogado (216 jogos). Suporte puro que estabiliza a lane do parceiro com Bloodlust e ainda atordoa ela em 1,2s fixo pra abrir espaço de kill.
- janelas: cedo ele é puramente nível-dependente: Fireblast (70 a 250 de dano, 1,2s de stun fixo em qualquer nível) já ameaça kill a partir do nível 2. O farm dele é baixo (gpm 315), então o poder dele vem de nível e do talento Multicast (chance de castar a magia 2x, 3x ou até 4x), não de item. A partir dos 18-19 min, quando ela fecha Scepter (19,2 min), ela sobrevive melhor ao stun porque Flame Cloak dá 35% de resistência mágica.
- o que ele faz com você: Fireblast interrompe qualquer movimento ou canalização dela antes do LSA saber, e 1,2s é tempo de sobra pro parceiro dele fechar o combo nela. Com Multicast, o Fireblast pode sair 2 ou até 3 vezes na mesma troca se ele tiver Força suficiente.
- o que você faz com ele: ele não tem fuga nenhuma (sem blink, sem invisibilidade própria), então o combo completo mata ele fácil fora de posição. Ele não tem item de burst pra competir no 1x1, é puramente utilidade de suporte.
- itens que viram: Aghanim's Shard dele (26,1 min, Fire Shield) absorve os próximos 3 ataques inimigos no aliado protegido e devolve bola de fogo em quem acertar, então o combo dela pode não matar quem ele acabou de blindar. Pra ela, qualquer coisa que aumente alcance ou mobilidade evita o stun de 525 de distância do Fireblast.
- como jogar: respeite o Fireblast desde o nível 2, ele interrompe sua rotação de combo. Puna ele fora de posição, sem fuga ele é alvo fácil. Depois do Shard dele, não gaste o combo completo em quem ele acabou de proteger com Fire Shield.
- fonte: pro_dados/lina.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_multicast); aghs_desc (shard do Ogre Magi)

## Contra Snapfire (snapfire)

- placar: 95 vitórias em 197 jogos, 48,2% (fonte: OpenDota /heroes/25/matchups)
- por que importa: quarto oponente mais jogado (197 jogos). Suporte com CC pesado em área que também pica de item muito cedo, quase junto com ela.
- janelas: até os 10 min ela precisa fugir do raio de 300 do Firesnap Cookie e do cone do Scatterblast. Aos 16,9 min (mediana do item mais comprado pela Snapfire no 7.41) ela fecha o Shard, que faz o Firesnap Cookie também lançar uma Mortimer Kiss no ponto de impacto com 40% do dano da ultimate, além do stun que ela já usa pra abrir a troca, e o Maelstrom de Lina (11,1 min) já tá rodando há um tempo. Depois dos 20 min o Blink da Snapfire (20,7 min) permite iniciar de surpresa.
- o que ele faz com você: Firesnap Cookie salta e atordoa (1 a 2,2s) numa área de 300, suficiente pra prender ela fora do alcance de reagir, e depois do Shard ainda lança uma Mortimer Kiss extra no local do impacto. Scatterblast é em cone, então ela precisa ficar de lado pra não ser pega junto com o time. O Scepter da Snapfire tira o alcance mínimo de 600 da Mortimer Kisses (a ultimate), mas não aparece entre os itens mais comprados em pro, não é prioridade de build.
- o que você faz com ele: ela farma mais rápido no early (last hit 75 aos 10 min contra 21 da Snapfire) e chega no combo de burst primeiro. O kit dela é todo setup, sem fuga própria fora do Blink (20,7 min), então fora de posição ela morre pro combo completo antes de reagir.
- itens que viram: Black King Bar nela quebra o Firesnap Cookie e o Scatterblast, nenhum dos dois atravessa BKB. Glimmer Cape da Snapfire (21,9 min) dá invisibilidade e resistência mágica de surpresa, atrapalha o combo se ela ativar antes do LSA saber.
- como jogar: puna o farm dela cedo, last hit 21 aos 10 min é baixo pra um suporte com esse kit. Depois do Shard dela (16,9 min), respeite o dano extra da Mortimer Kiss que sai junto do Firesnap Cookie que abre a troca dela. Depois do seu Scepter (19,2 min) a resistência mágica adicional ajuda a sobreviver ao burst dela.
- fonte: pro_dados/lina.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_firesnap_cookie, snapfire_scatterblast, snapfire_mortimer_kisses); aghs_desc (Snapfire)

## Contra Dragon Knight (dragon_knight)

- placar: 81 vitórias em 163 jogos, 49,7% (fonte: OpenDota /heroes/25/matchups)
- por que importa: quinto oponente mais jogado (163 jogos). Carry tanque que sobrevive ao poke dela na lane graças à regeneração do Dragon Blood.
- janelas: até os 10 min ele aguenta o poke dela por causa do +2 de regen e +2 de armadura do Dragon Blood (aumenta 50% na Elder Dragon Form). Aos 16,2 min o Blink dele destrava iniciação, enquanto ela só tem rotação plena aos 12,2 min (Travel Boots). Dos 19 aos 23 min ela está com Scepter (19,2 min) e ele ainda sem BKB (23,3 min): é a janela dela matar ele fora de posição antes dele virar um tanque resistente a magia.
- o que ele faz com você: Dragon Tail (stun de 1,8 a 2,4s em área) trava o combo dela antes de sair. Breathe Fire reduz o dano de ataque dela por 11s, cortando o DPS se ela precisar do bônus de velocidade de ataque do Fiery Soul. Na Elder Dragon Form nível 3 ele ganha resistência a lentidão de gelo, dificulta kitar.
- o que você faz com ele: ele não tem fuga além do Blink, então LSA mais o combo completo trava e mata ele fora da defesa do time. Antes do Dragon Blood escalar em nível, ela tem vantagem clara de burst mágico contra a resistência mágica baixa dele.
- itens que viram: Black King Bar nela segura o Dragon Tail. Scythe of Vyse hexa ele fora da Elder Dragon Form, ele perde a transformação enquanto hexado. Pro lado dele, BKB (23,3 min) o deixa imune ao combo completo dela por 9, 8 ou 7 segundos conforme o nível.
- como jogar: puna ele antes dos 10 min, antes do Dragon Blood escalar. Guarde o combo pra matar ele antes do BKB dele fechar aos 23,3 min. Depois disso, prefira disable que não seja dano mágico puro, tipo Hex, pra tirar ele da forma dragão.
- fonte: pro_dados/lina.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_dragon_tail, dragon_knight_dragon_blood, dragon_knight_elder_dragon_form)

## Contra Lion (lion)

- placar: 72 vitórias em 162 jogos, 44,4% (fonte: OpenDota /heroes/25/matchups)
- por que importa: sexto oponente mais jogado (162 jogos) e ela perde a maioria (44,4%). Outro disabler de inteligência, compete pelo mesmo papel de "quem atordoa primeiro".
- janelas: no early os dois trocam pelo alcance. Earth Spike tem 650 de alcance de mira mas continua 275 além do ponto clicado, cerca de 925 no total, então alcança mais longe que o LSA dela (700) mesmo com mira mais curta. A partir do nível 6, Finger of Death (600 a 850 de dano de alvo único) rivaliza direto com o Laguna Blade dela. Aos 18,2 min o Blink dele dá mobilidade de combo que ela só alcança aos 19,2 min com o Scepter.
- o que ele faz com você: Earth Spike atordoa numa distância efetiva maior que o alcance do LSA dela, então ele inicia primeiro se acertar. Finger of Death mata ela limpo se ela estiver com vida baixa, o que é comum cedo no jogo. Hex desliga o combo dela por até 3,2s, tempo de sobra pro time dele fechar.
- o que você faz com ele: ele é tão ou mais frágil que ela, sem fuga própria fora do Blink. Se ela acertar o LSA nele antes dele castar, o combo completo (quase 1200 de dano somado) mata ele de longe. Flame Cloak (35% de resistência mágica) ajuda a sobreviver ao Finger of Death dele.
- itens que viram: Black King Bar nela bloqueia o Hex e o Earth Spike. Scepter dela (Flame Cloak) corta boa parte do dano mágico do Finger of Death pela resistência extra. Pro lado dele, Aghanim's Shard (25,8 min) dá debuff immunity no Mana Drain, dificulta controlar ele de volta.
- como jogar: respeite o alcance efetivo maior do Earth Spike no early, não fique parada no meio da wave. Acerte o LSA primeiro se possível, ele morre pro combo sem fuga. Depois do nível 6 dos dois, jogue em volta de visão, o combo que sair primeiro geralmente fecha a troca.
- fonte: pro_dados/lina.json; pro_dados/lion.json; constants_abilities.json (lion_impale, lion_finger_of_death, lion_voodoo)

## Contra Queen of Pain (queenofpain)

- placar: 70 vitórias em 140 jogos, 50,0% (fonte: OpenDota /heroes/25/matchups)
- por que importa: a mid pura de intelecto mais jogada contra ela depois dos nomes de maior volume geral. Os dois são nukers com burst de alvo único e em área, concorrendo pelo mesmo papel.
- janelas: do nível 1 ao 6 ela sai na frente em dano bruto, porque Laguna Blade no nível 3 (750) bate mais forte que Sonic Wave no nível 3 (625) e custa menos pra setar. Queen of Pain compensa com Blink de recarga baixa (12 a 6s conforme nível) pra entrar e sair da troca. Aos 13,9 min ela já tem Kaya pro primeiro spike de amplificação, antes dos 11,6 min dela mesma da Lina (mais cedo na real). Dos 20 aos 23 min os dois picam junto: Scepter da Lina (19,2 min) contra Kaya and Sange (20,8 min) e Scepter da Queen of Pain (23,5 min).
- o que ele faz com você: Scream of Pain não atravessa BKB (só o Sonic Wave, a ulti, é bkbpierce). Shadow Strike aplica lentidão de até 55% por 16s, perigoso pra quem precisa kitar. Blink permite entrar e sair sem dar brecha pro LSA pegar.
- o que você faz com ele: ela tem mais burst de alvo único (Laguna 750 contra Sonic Wave 625, que ainda empurra em vez de focar matar). LSA trava o Blink dela se acertar antes dela sumir. No mesmo nível de item, a troca de 1x1 tende a favorecer quem acerta o primeiro stun.
- itens que viram: Black King Bar nela bloqueia Scream of Pain e Shadow Strike, mas não o Sonic Wave (bkbpierce). Pra ela, Eul's Scepter de Divindade manda o Blink dela pro ar, cortando o escape. Pro lado dele, Linken's Sphere bloqueia um Laguna Blade isolado.
- como jogar: controle o timing do Blink dela, o cooldown reduz com nível. Mire o LSA antes dela blinkar pra fora, sem isso ela escapa de quase tudo. Guarde o combo completo pros momentos em que ela já gastou o Blink numa troca anterior.
- fonte: pro_dados/lina.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_blink, queenofpain_scream_of_pain, queenofpain_sonic_wave)

## Contra Invoker (invoker)

- placar: 56 vitórias em 133 jogos, 42,1% (fonte: OpenDota /heroes/25/matchups)
- por que importa: um dos piores matchups de mid dela com volume real (133 jogos). Rival direto de controle de mana e poke à distância, e ela perde a maioria.
- janelas: no early ele é mais fraco em dano direto, mas E.M.P. (queima até 850 de mana no nível máximo de Wex) seca a mana dela antes do combo saber. Aos 10,6 min o Meteor Hammer dele dá poke em área que ela não tem resposta direta. Dos 18 aos 22 min ele pica forte: Scepter (20,2 min) upgrada Ice Wall pra prender em área, Shard (22,0 min) dá Forge Spirit no Sun Strike.
- o que ele faz com você: E.M.P. queima a mana dela em área, sem mana ela não solta o combo. Tornado atordoa suspendendo no ar e desloca, quebra o posicionamento do LSA. Sun Strike (bkbpierce, até 675 de dano) ignora BKB dela e tem 1,7s de delay, então ele pune posição previsível, não reação.
- o que você faz com ele: o combo de confirmação dele (Cold Snap mais Deafening Blast) tem cast point alto o suficiente pra dar tempo de reagir se ela estiver de olho. LSA interrompe o Invoke dele no meio da troca se acertar antes dele soltar a combinação.
- itens que viram: Black King Bar nela não bloqueia Sun Strike (bkbpierce), então contra essa magia o que resolve é posição, não item. Pra ele, Linken's Sphere bloqueia o Laguna Blade. Force Staff nela ajuda a sair do raio do E.M.P. antes da detonação, que tem 2,9s de delay.
- como jogar: jogue a lane com cautela de mana, ele seca ela com E.M.P. assim que tiver Wex alto. Aproveite a janela antes do Scepter dele (20,2 min) pra fechar o combo limpo. Depois disso, cuidado com Sun Strike: ele acerta onde você vai estar, não onde você está.
- fonte: pro_dados/lina.json; pro_dados/invoker.json; constants_abilities.json (invoker_emp, invoker_sun_strike, invoker_tornado, invoker_deafening_blast, invoker_cold_snap)

## Contra Storm Spirit (storm_spirit)

- placar: 61 vitórias em 108 jogos, 56,5% (fonte: OpenDota /heroes/25/matchups)
- por que importa: par de mid puro (posição 2) com volume real (108 jogos) e um dos melhores matchups dela, porque o combo trava justamente a mobilidade dele.
- janelas: até os 10 min ele farma rápido com Bottle e rotação de Ball Lightning desde o nível 6, mas o combo dela acerta antes dele conseguir entrar em cast range, já que LSA tem 700 de alcance e ele só fica perigoso DEPOIS de decidir viajar. Aos 13,7 min ele tem Kaya contra os 11,6 min dela. Dos 20 aos 22 min os dois picam quase junto (Kaya and Sange dele, 20,1 min, Scepter dela, 19,2 min), mas ele só fica seguro de verdade com BKB (26,1 min), bem depois da janela de maior risco dela.
- o que ele faz com você: Ball Lightning não dá invulnerabilidade, mas a velocidade (1400 a 2300, conforme nível) torna quase impossível acertar LSA ou Laguna Blade nele no meio do voo, só antes de ativar ou depois de pousar. Static Remnant detona se ela chegar perto, bom pra zonear. Electric Vortex puxa ela pra perto dele à força.
- o que você faz com ele: o ponto fraco é que ele precisa pousar pra castar qualquer coisa, então um LSA pré-emptivo, lançado ANTES dele ativar o Ball Lightning, trava o combo inteiro. Sem Kaya ele é extremamente frágil, Laguna Blade sozinho (750) mata ele cedo.
- itens que viram: Black King Bar nela não resolve nada contra o Ball Lightning em si, o problema é a velocidade dele no meio do voo, não imunidade a magia. Pra ela, qualquer ganho de alcance (Dragon Lance, Force Staff) ajuda a acertar o LSA antes dele sumir voando. Pro lado dele, BKB (26,1 min) o deixa imune ao resto do combo dela depois de pousar.
- como jogar: tente acertar o LSA antes dele ativar o Ball Lightning, a velocidade do voo torna o acerto quase impossível depois que ele já partiu. Puna ele parado logo após pousar, é a janela de maior vulnerabilidade. Depois do BKB dele (26,1 min), mude de prioridade, o combo mágico para de matar ele limpo.
- fonte: pro_dados/lina.json; pro_dados/storm_spirit.json; constants_abilities.json (storm_spirit_ball_lightning, storm_spirit_electric_vortex, storm_spirit_static_remnant)

## Contra Sand King (sand_king)

- placar: 19 vitórias em 30 jogos, 63,3% (amostra no limite do mínimo, fonte: OpenDota /heroes/25/matchups)
- por que importa: a maior vantagem dela com amostra válida (exatamente 30 jogos). Ele é um ganker de burrow que depende de pegar ela desprevenida, e o combo dela mata de volta rápido demais.
- janelas: ele ganha mobilidade de gank muito cedo, Blink aos 11,7 min, o mais rápido da lista inteira. O risco dele é maior entre 12 e 18 min, antes do Scepter dele (20,5 min) deixar o Epicenter mais forte. Ela tem Kaya (11,6 min) e Travel Boots (12,2 min) praticamente no mesmo instante, então a rotação dela chega junto com o Blink dele.
- o que ele faz com você: Burrowstrike (stun de 1,2 a 1,8s) pega ela enquanto ele reaparece do túnel em linha reta. Epicenter, depois de 2s de cast point, é dano em área crescente que pune ficar parada numa troca longa. Caustic Finale explode quando algo morre perto, machuca em teamfight.
- o que você faz com ele: ele é frágil sem itens (bom gpm, pouca vida), o combo completo mata ele de longe mesmo com Blink, porque o Burrowstrike tem cast point e ele precisa reaparecer pra stunar. Se ela sobreviver ao Burrowstrike inicial, o resto do kit dele tem recarga alta (Epicenter de 100 a 120s).
- itens que viram: Black King Bar nela segura o Burrowstrike. Pra ela, atenção a visão de fog, ele precisa sair da invisibilidade do túnel pra castar. Pro lado dele, Scepter (Epicenter com ataques extras de Stinger) aumenta o dano total da ulti.
- como jogar: cuidado com ganks entre 12 e 18 min, é quando o Blink dele mais ameaça. Puna ele se errar o Burrowstrike, ele fica exposto sem fuga. Depois dos 20 min o combo ainda mata rápido, mas atenção ao Epicenter em grupo se ele já tiver o Scepter.
- fonte: pro_dados/lina.json; pro_dados/sand_king.json; constants_abilities.json (sandking_burrowstrike, sandking_epicenter)

## Contra Void Spirit (void_spirit)

- placar: 28 vitórias em 48 jogos, 58,3% (fonte: OpenDota /heroes/25/matchups)
- por que importa: outro par de mid puro (posição 2) e um dos melhores matchups dela com amostra razoável (48 jogos). Ele pica de item muito cedo (Shard aos 17,0 min), mas isso ainda não resolve o problema dele contra ela.
- janelas: cedo os dois trocam poke mágico parecido (Resonant Pulse contra Dragon Slave). Aos 11,0 min ele já tem Diadem pra farm e gank rápido. O Shard dele (17,0 min) melhora o Aether Remnant, a sentinela que ele combina com o Dissimilate pra ganhar visão e puxar quem cruzar o caminho, não o Resonant Pulse. O silence no Resonant Pulse só existe depois do Scepter (25,1 min), bem depois da janela de maior risco da Lina. Depois disso ela reassume com Flame Cloak.
- o que ele faz com você: Dissimilate deixa ele invulnerável durante a fase, 1,1s, então ela não acerta LSA ou Laguna nele nesse instante. Astral Step é bkbpierce e aplica lentidão, atravessa qualquer BKB dela. Resonant Pulse sozinho não silencia nada, é escudo contra físico mais dano em área; o silence só aparece depois do Scepter dele.
- o que você faz com ele: ele é tão frágil quanto ela, sem fuga real fora do Dissimilate, que dura só 1,1s e deixa ele exposto ao reaparecer. LSA bem posicionado pega ele assim que sai do portal.
- itens que viram: Black King Bar nela não segura o Astral Step (bkbpierce). Pra ela, Scythe of Vyse hexa ele antes dele ativar o Dissimilate (que é instantâneo, por isso precisa de reação rápida). Pro lado dele, o Scepter (25,1 min) é o que dá silence e 2 cargas ao Resonant Pulse, mas chega tarde o bastante pra não pesar na janela de maior risco da Lina.
- como jogar: não gaste o combo no instante exato em que ele ativa o Dissimilate, espere ele reaparecer. Antes do Scepter dele (25,1 min), o Resonant Pulse é só dano e escudo, sem corte no seu combo. Depois do seu Scepter (19,2 min) a troca já favorece você e segue favorecendo até ele fechar o dele.
- fonte: pro_dados/lina.json; pro_dados/void_spirit.json; constants_abilities.json (void_spirit_dissimilate, void_spirit_astral_step, void_spirit_resonant_pulse, void_spirit_aether_remnant); aghs_desc (Void Spirit); liquipedia.net (invulnerabilidade do Dissimilate)

## Contra Dazzle (dazzle)

- placar: 25 vitórias em 43 jogos, 58,1% (fonte: OpenDota /heroes/25/matchups)
- por que importa: suporte de cura que, na teoria, deveria neutralizar o burst dela, mas não consegue. Entra pela maior vantagem dela com amostra razoável (43 jogos).
- janelas: ele não tem spike de item relevante cedo, as compras iniciais são só wards e boots. Aos 19,2 min ele fecha Holy Locket, que amplifica cura e dano do Shadow Wave. Mas o Laguna Blade dela (750 no nível 3, disponível desde o nível 6) já é maior do que qualquer cura pontual de Shadow Wave (85 a 145) consegue cobrir sozinha.
- o que ele faz com você: Shallow Grave (bkbpierce) impede o alvo de morrer por 4 a 5,5s, então um Laguna Blade sozinho não fecha o kill se ele proteger antes. Poison Touch aplica lentidão e dano ao longo do tempo, atrapalha ela kitar depois do combo.
- o que você faz com ele: ele não tem disable de verdade (sem stun, sem silence, sem root), então o combo dela acerta sem obstáculo. Ele é frágil e sem fuga além de um Blink raríssimo (30,4 min, amostra mínima). LSA mais Dragon Slave já matam ele cedo, sem precisar do Laguna.
- itens que viram: pra ela, o que importa não é item, é timing: soltar o Laguna Blade só DEPOIS que ele já gastou o Shallow Grave num aliado, nunca antes. Pro lado dele, Holy Locket (19,2 min) e o Aghanim's Scepter (Shadow Wave batendo em inimigos) dão resposta de dano, mas tarde.
- como jogar: puna ele e o carry dele na lane, sem resposta de dano real cedo. Guarde o combo completo pra depois dele gastar o Shallow Grave. Se ele proteger o alvo, espere os 4 a 5,5s acabarem antes de tentar fechar o kill de novo.
- fonte: pro_dados/lina.json; pro_dados/dazzle.json; constants_abilities.json (dazzle_shallow_grave, dazzle_poison_touch); aghs_desc (Dazzle)

## Contra Keeper of the Light (keeper_of_the_light)

- placar: 18 vitórias em 57 jogos, 31,6% (fonte: OpenDota /heroes/25/matchups)
- por que importa: o pior matchup dela com amostra boa (57 jogos). Poke em linha longuíssima que ganha a guerra de alcance e nunca entra no alcance dela.
- janelas: do minuto 0 aos 10, Illuminate (alcance 1550) acerta antes dela sequer chegar perto, já que o Dragon Slave dela tem 1075 de alcance de cast e o LSA só 700. Ele não ganha item de poder cedo (é suporte, foca wards), o spike dele é de nível e mana via Chakra Magic (restaura até 300 de mana e reduz recarga em 3 a 6s). Aos 22,4 min ele tem Force Staff pra se afastar ainda mais se ela tentar fechar distância.
- o que ele faz com você: Illuminate, canalizado até 3s, acerta até 500 de dano numa faixa de 400 de largura a 1550 de distância, bem mais do que ela consegue responder na mesma distância. Se ela aproxima pra alcançar o LSA, ele já bateu o Illuminate e recuou. Blinding Light empurra e cega, atrapalha o acerto do combo.
- o que você faz com ele: ele é o suporte mais frágil fisicamente da lista e não tem disable de confirmação de kill fora do empurrão do Blinding Light. Se ela conseguir fechar distância, com visão ou flanco do time, o combo mata ele fácil, mas sozinha na lane ela nunca alcança.
- itens que viram: Dragon Lance ou Travel Boots cedo ajudam ela a competir em alcance e fechar distância mais rápido. Force Staff nela também ajuda a saltar a última distância antes do LSA. Black King Bar não resolve nada aqui, o problema é alcance, não disable.
- como jogar: não tente vencer a troca de poke 1x1 na lane reta, o alcance dele é maior. Jogue pra forçar ele a gastar mana em Illuminate errado, puxando a wave ou trocando de posição. Peça gank do time pra fechar a distância, sozinha você não alcança ele.
- fonte: pro_dados/lina.json; pro_dados/keeper_of_the_light.json; constants_abilities.json (keeper_of_the_light_illuminate, keeper_of_the_light_chakra_magic, lina_dragon_slave, lina_light_strike_array)

## Contra Muerta (muerta)

- placar: 12 vitórias em 33 jogos, 36,4% (amostra razoável, fonte: OpenDota /heroes/25/matchups)
- por que importa: segundo pior matchup da lista. Outra mid de dano mágico que também vira right-click forte, concorrendo pelo mesmo papel e vencendo a troca de burst.
- janelas: cedo os dois trocam poke mágico (Dead Shot contra Dragon Slave). O spike grande dela é o Maelstrom aos 13,8 min, virando Mjollnir aos 19,7 min, dano em área de autoataque na mesma janela do Scepter da Lina (19,2 min). The Calling, que silencia quem atravessa os espectros, é o diferencial que quebra o combo da Lina no meio da troca.
- o que ele faz com você: The Calling silencia quem passa pelos espectros, desligando o combo dela se ela estiver posicionada dentro da área. Dead Shot acerta o alvo com dano e lentidão e depois ricocheteia, causando fear em quem for atingido pelo ricochete. Pierce the Veil faz os ataques da Muerta virarem dano mágico por 8s, então armadura não ajuda nessa janela, só resistência mágica ou disable cortam o DPS dela.
- o que você faz com ele: fora da área de silence do The Calling, o LSA trava Muerta normalmente. O combo mágico completo não depende de dano físico, então o burst do Laguna Blade mata ela normalmente mesmo com Pierce the Veil ativo.
- itens que viram: Black King Bar nela segura o silence do The Calling. Pra ela, manter distância do raio dos espectros vale mais que qualquer item. Pro lado dele, Mjollnir (19,7 min) e Black King Bar (27,5 min) dão sobrevivência e dano de longo prazo.
- como jogar: evite ficar na área dos espectros do The Calling antes de soltar o combo. Aproveite que o combo mágico ainda funciona mesmo com a ult dela ativa, já que não depende de dano físico. Puna antes dela fechar Mjollnir aos 19,7 min, depois disso ela farma e luta melhor.
- fonte: pro_dados/lina.json; pro_dados/muerta.json; constants_abilities.json (muerta_the_calling, muerta_dead_shot, muerta_pierce_the_veil)

## Contra Leshrac (leshrac)

- placar: 13 vitórias em 35 jogos, 37,1% (amostra razoável, fonte: OpenDota /heroes/25/matchups)
- por que importa: terceiro pior matchup da lista. Outro nuker de área que ganha a troca de dano mágico total contra ela.
- janelas: cedo ele já tem Split Earth (stun de 1,7s) e Lightning Storm (recarga de só 4s, 90 a 240 de dano) pra trocar sem parar. Aos 15,0 min ele já tem Blink, quase junto com a rotação completa dela (Travel Boots, 12,2 min). Aos 15,9 min ele tem Kaya, perto do momento dela (11,6 min), mas o kit dele bate em área, não em alvo único, o que facilita vencer teamfight.
- o que ele faz com você: Split Earth atordoa em área antes dela conseguir reagir. Pulse Nova dá dano contínuo por segundo enquanto ele tiver mana, ótimo pra zonear o combo dela. Lightning Storm, de recarga baixíssima, permite spam constante e desgasta ela na lane sem parar.
- o que você faz com ele: ele é tão frágil quanto ela e sem fuga própria fora do Blink. LSA bem posicionado trava o combo dele assim que ele aparecer. Laguna Blade sozinho já mata ele cedo, antes do Kaya dele (15,9 min).
- itens que viram: Black King Bar nela segura o Split Earth e o Pulse Nova. Pra ela, Blink Dagger ajuda a fechar distância mais rápido que ele, já que ele também tem Blink cedo (15,0 min). Pro lado dele, Aghanim's Scepter (Nihilism) deixa inimigos próximos etéreos, reduzindo a velocidade de ataque dela.
- como jogar: respeite o Lightning Storm de recarga baixa, ele spamma sem parar. Feche o combo nele antes do Blink dele (15,0 min) virar rotina de gank. Depois disso, cuidado com o Pulse Nova em teamfight, ele dura enquanto tiver mana.
- fonte: pro_dados/lina.json; pro_dados/leshrac.json; constants_abilities.json (leshrac_split_earth, leshrac_pulse_nova, leshrac_lightning_storm); aghs_desc (Leshrac)
