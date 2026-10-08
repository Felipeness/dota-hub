---
id: confrontos-spirit_breaker
heroi: Spirit Breaker
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/spirit_breaker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/death_prophet.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/antimage.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/clinkz.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/wisp.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/treant.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mirana.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer
---

## Spirit Breaker no 7.41: o que define as janelas abaixo

No pro play atual Spirit Breaker é jogado quase só como pos 4 roamer, não como carry (a tag "Carry" do OpenDota é histórica). Mediana de 355 de ouro por minuto em 1.708 jogos de liga nos patches 7.40 e 7.41 (fonte: pro_dados/spirit_breaker.json, resumo). No 7.41 ele tem Bulldoze (velocidade e resistência a status enquanto carrega, pode ser usada durante o Charge) como habilidade base, e Planar Pocket (redireciona pra ele qualquer feitiço com alvo único que um inimigo lance no herói escolhido) só fica disponível com o Aghanim's Shard (fonte: https://api.opendota.com/api/constants/aghs_desc, shard_new_skill). Greater Bash segue passiva (17% de chance, 25 a 40% da velocidade de movimento como dano mágico, atravessa imunidade a magia) e com Aghanim's Scepter ganha mais empurrão: se o inimigo empurrado colidir com um segundo inimigo, esse segundo também é bashado (contra creep, só 25% do dano) e o alvo original leva mais 25% do dano do Bash de novo (fonte: constants_abilities.json, spirit_breaker_greater_bash e spirit_breaker_bulldoze e spirit_breaker_planar_pocket; https://api.opendota.com/api/constants/aghs_desc).

A linha do tempo de item dele nos jogos de pro: Magic Stick aos 5:18, Chainmail aos 7:36, Phase Boots aos 9:24, pacote de wards fechado por volta de 17-19 min, Blitz Knuckles aos 18:06, e o Shadow Blade fecha por volta dos 23 min (Shadow Amulet 21:18, Claymore 21:06, Invis Sword 22:54). Black King Bar é situacional e tardio (34:31 na mediana, n=200); Glimmer Cape é raro e ainda mais tardio (24:51 na mediana, amostra pequena, n=16); Spirit Vessel é situacional mas chega bem mais cedo, por volta dos 20:16 (n=104) (fonte: partidas pro 7.40-7.41, OpenDota explorer).

Importante sobre o Charge of Darkness: qualquer stun, root ou disable cancela a carga, e Linken's Sphere bloqueia o cast inteiro porque é um feitiço de alvo único (fonte: constants_abilities.json, spirit_breaker_charge_of_darkness, behavior Unit Target; items.json, sphere). Isso volta em quase todo confronto abaixo.

## Como os 14 oponentes foram escolhidos
- **Os 6 mais enfrentados em pro** (confrontos de spirit_breaker.json, 7.40+7.41): Shadow Fiend, Rubick, Snapfire, Tusk, Mars, Ogre Magi.
- **Suporte de gpm baixo, perfil parecido com o seu (355)**, fora os 6 acima: Lion (gpm 286) e Disruptor (gpm 279), que aparecem quase tanto quanto o top 6 nos confrontos (fonte: pro_dados/spirit_breaker.json; pro_dados/lion.json; pro_dados/disruptor.json, resumo).
- **Maior vantagem com 30+ jogos**: Death Prophet, Anti-Mage, Clinkz.
- **Maior desvantagem com 30+ jogos**: Io, Treant Protector, Mirana.

---

## Contra Shadow Fiend (nevermore)
- placar: 165 vitórias em 300 jogos de pro (55,0%) (fonte: pro_dados/spirit_breaker.json, confrontos).
- por que importa: é o oponente mais comum do Spirit Breaker em pro play, de longe. Raramente dividem lane (SF é mid, SB rouba), mas se cruzam o jogo inteiro em ganks e lutas, e os dois HC de farm rápido (SF é o carry de maior gpm da liga, 658, com 78 last hits aos 10 min) merecem comparação mesmo sem lane em comum.
- janelas: até os 10 min Shadow Fiend já upou Power Treads (5:54) e está empilhando almas com Shadowraze, puro potencial de farm e poke, enquanto você ainda está comprando wards e Chainmail. Dos 10 aos 18 min ele fecha Mask of Madness (10:12) e Dragon Lance (14:00), um pico de agressão sem fuga nenhuma: é a sua janela, Phase Boots prontas aos 9:24 e ele sem blink nem disable. Depois dos 23 min, com Shadow Blade fechado, você consegue se aproximar sem ser visto antes de ele acender Requiem; sem isso, um SF com Aghanim's ou itens de crítico tardios (claymore 24:12, demon edge 27:12) te deleta à distância antes de você chegar perto.
- o que ele faz com você: Shadowraze é corpo a corpo e instantâneo nas três direções, então se você carrega sozinho sem suporte ele estoura a raze na sua cara e foge andando (SF não tem blink nem disable, mas tem alcance de ataque longo pra kitar). Com Necromastery estocando almas, o burst dele cresce o jogo inteiro; perto do fim, Requiem com muita alma empilhada mata times inteiros, inclusive você se estiver sem Black King Bar.
- o que você faz com ele: Shadow Fiend não tem nenhum disable nem fuga garantida antes de completar item de mobilidade. Um Charge of Darkness limpo antes dos 10-12 min (ele ainda sem Treads completas) costuma ser kill fácil e atrasa o snowball dele a liga inteira. Greater Bash atravessa a imunidade a magia dele se ele comprar BKB cedo.
- itens que viram: Black King Bar nele reduz sua vantagem de engajar (ele fica livre pra te acertar Shadowraze sem medo do seu stun durar); Black King Bar em você neutraliza o burst de Requiem perto do fim de jogo; Shadow Blade seu ajuda a chegar nele antes de ele te ver chegando.
- como jogar: gankeie o mid dele antes dos 10 min, é a janela mais fácil. No meio de jogo, não inicie sozinho contra Shadowraze de perto sem Bulldoze ativa. No late, use o Shadow Blade pra pegá-lo fora de posição antes de ele soltar Requiem.
- fonte: pro_dados/spirit_breaker.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_necromastery, nevermore_requiem).

## Contra Rubick (rubick)
- placar: 128 vitórias em 267 jogos de pro (47,9%) (fonte: pro_dados/spirit_breaker.json, confrontos).
- por que importa: segundo oponente mais comum em pro e também suporte de gpm baixo (374 contra os seus 355), então divide lane e rotação com você na maioria dos jogos.
- janelas: nos primeiros 10 min os dois estão comprando sobi_mask/magic_wand e disputando a lane; não há vantagem clara de item ainda. Entre 15 e 21 min é a janela perigosa pra você: Rubick ainda sem Blink Dagger (ele fecha aos 21:36 na mediana) é lento, mas Spell Steal já está ativo desde o nível 6 dele. Depois dos 21 min, com blink pronto, ele passa a conseguir se desgrudar de uma carga sua ou reposicionar pra roubar seu Nether Strike com segurança.
- o que ele faz com você: Telekinesis é um pickup à distância que te deixa no ar e te stuna ao cair, cancelando qualquer Charge of Darkness em andamento (disable cancela a carga). Spell Steal copia o último feitiço lançado por um herói inimigo perto: se você usar Nether Strike perto dele antes de engajar, ele pode roubar o blink com bash e virar o jogo contra você.
- o que você faz com ele: Rubick tem pouquíssima vida (374 de gpm, perfil 100% suporte) e nenhuma fuga própria antes do Blink Dagger. Pegá-lo com Charge antes dos 21 min, antes do blink dele ficar pronto, costuma ser kill garantida se ele não tiver Force Staff ou Glimmer de aliado.
- itens que viram: Linken's Sphere nele bloqueia seu Charge of Darkness inteiro, já que é um feitiço de alvo único (fonte: constants_abilities.json, spirit_breaker_charge_of_darkness; items.json, sphere); evite iniciar nele se ele tiver Linken's, mire outro alvo. Do seu lado, não solte Nether Strike a menos de 1000 de distância dele sem necessidade (alcance do Spell Steal), pra não dar o roubo de graça.
- como jogar: na lane, jogue pela troca, não pela Telekinesis dele (ela tem alcance curto). Depois dos 6 dele, cuidado extra com qualquer engajada sua perto dele: guarde o Nether Strike pra fora do raio de steal. Antes do blink dele (21 min), é sua melhor janela de kill isolado.
- fonte: pro_dados/spirit_breaker.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis).

## Contra Snapfire (snapfire)
- placar: 124 vitórias em 231 jogos de pro (53,7%) (fonte: pro_dados/spirit_breaker.json, confrontos).
- por que importa: terceiro oponente mais comum em pro, pos 4/5 clássica contra você, com Aghanim's Shard presente em 1.919 dos 2.456 jogos de pro dela (78%), então é quase sempre parte do confronto.
- janelas: até os 10 min ela tem Scatterblast de ponto em branco pra trocar na lane, dano e slow aumentados em 30-50% colado em você. Entre 11 e 17 min ela completa Arcane Boots (10:36) e o Aghanim's Shard (16:54), ganhando mais controle de área. Sua janela é cedo: antes do Shard dela, uma troca com Firesnap Cookie gasta (stun curto, cooldown alto) deixa ela sem resposta pro seu Bash.
- o que ele faz com você: Firesnap Cookie salta e stuna na área de pouso, cancelando sua carga se acertada bem cronometrada. Mortimer's Kisses é um canalizado longo (5,5 s) que cria poças que atrasam seu reposicionamento, mas a reduz o giro dela, então ela fica vulnerável enquanto canaliza.
- o que você faz com ele: Snapfire não tem fuga própria além do Firesnap Cookie nela mesma, que recarrega em 15 a 21 s conforme o nível. Gastou o cookie pra escapar ou iniciar, ela fica exposta por esse tempo pro seu Charge.
- itens que viram: Força do Aghanim's Shard dela aumenta o controle de área, então depois dos 17 min evite lutar no meio do grupo dela sem Bulldoze pronta; do seu lado, Blitz Knuckles (18:06) ajuda a fechar o 1x1 rápido antes que ela reposicione.
- como jogar: pressione a lane antes do Shard dela (17 min). Depois disso, puxe lutas pra fora do alcance de Scatterblast/Mortimer's e force ela a gastar o cookie antes de engajar de verdade.
- fonte: pro_dados/spirit_breaker.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_firesnap_cookie, snapfire_scatterblast, snapfire_mortimer_kisses).

## Contra Tusk (tusk)
- placar: 104 vitórias em 219 jogos de pro (47,5%) (fonte: pro_dados/spirit_breaker.json, confrontos).
- por que importa: quarto em volume de pro e também pos 4/5, mas o confronto é ambíguo porque Tusk e Spirit Breaker também combam MUITO bem juntos (Snowball carrega aliados); quando estão em times opostos, o mesmo kit de iniciação vira uma corrida de quem inicia primeiro.
- janelas: antes dos 19 min (Blink Dagger dele, mediana 19:00) Tusk depende de perseguir a pé, e sua Bulldoze te dá resistência a status pra sair de perto. Depois do Blink, ele passa a conseguir Snowball você ou um aliado seu do nada, empurrando pra cima de Ice Shards e trocando o controle da luta. Seu Shadow Blade (23 min) chega pouco depois do blink dele, equilibrando outra vez.
- o que ele faz com você: Ice Shards cria uma barreira física que trava movimento no caminho, incluindo deslocamento forçado como o seu Charge of Darkness, cancelando sua carga se ela cruzar a parede. Walrus Punch é um critico pesado que, combinado com seu próprio Bash, vira stun-lock de dois golpes em cima de um único alvo (inclusive você).
- o que você faz com ele: Tusk não tem fuga própria antes do Blink Dagger; Charge limpo antes dos 19 min não tem resposta dele. Seu Bash interrompe o setup de Snowball dele se você bashar no meio da sequência.
- itens que viram: Blink Dagger dos dois lados decide quem inicia primeiro depois dos 19 min; depois disso o confronto vira "quem clica primeiro". Tag Team dele (debuff de dano físico bônus) combina mal com você levando dano extra se for alvo do combo do time dele.
- como jogar: force trocas antes do blink dele. Depois dos 19 min, jogue a iniciação pelo seu Nether Strike (ignora a parede de gelo) em vez do Charge, que pode ser bloqueado pelos Ice Shards.
- fonte: pro_dados/spirit_breaker.json; pro_dados/tusk.json; constants_abilities.json (tusk_ice_shards, tusk_snowball, tusk_walrus_punch, tusk_tag_team).

## Contra Mars (mars)
- placar: 108 vitórias em 202 jogos de pro (53,5%) (fonte: pro_dados/spirit_breaker.json, confrontos).
- por que importa: quinto em volume de pro. Mars é offlane (pos 3), raramente na sua lane, mas os dois são iniciadores corpo a corpo que decidem luta pela primeira entrada, então comparar os power spikes vale mesmo sem lane em comum.
- janelas: até os 8-9 min os dois estão com Chainmail/Phase Boots (seus aos 9:24, dele aos 8:30), parelho. Entre 15 e 21 min Mars fecha Blink Dagger (15:12) e depois Aghanim's Shard (21:30), ganhando iniciação própria e engajando antes de você chegar perto. Seu Shadow Blade (23 min) empata essa corrida de novo no fim de jogo.
- o que ele faz com você: Arena of Blood forma um círculo de 550 de raio por 5,5 s que bloqueia ataques e movimento vindo de fora (fonte: constants_abilities.json, mars_arena_of_blood); se ele fechar a arena com você do lado de fora e o alvo dentro, sua carga não consegue completar a aproximação. Spear of Mars empurra e stuna mais tempo se encostar você em árvore, construção ou penhasco, cancelando o Charge de qualquer jeito.
- o que você faz com ele: Mars não tem fuga própria fora do Blink Dagger; antes dos 15 min um Charge limpo custa caro pra ele. Greater Bash ignora o Bulwark dele por completo: Bulwark só reduz dano físico de ataque, e o seu bash é dano mágico, então passa direto sem redução.
- itens que viram: BKB dele (26:30 na mediana) tira seu Bash do dano importante do pacote dele; do seu lado, posicionar o Charge pra pegar o alvo fora do raio da Arena of Blood evita ficar travado do lado de fora.
- como jogar: evite carregar direto pro meio do time dele quando ele tiver o ultimate pronto (cooldown 90-100 s); prefira flanquear antes dele fechar a arena. Na lane, ele não tem gap closer antes do blink, então sua rotação de 10-15 min é livre.
- fonte: pro_dados/spirit_breaker.json; pro_dados/mars.json; constants_abilities.json (mars_arena_of_blood, mars_spear, mars_bulwark).

## Contra Ogre Magi (ogre_magi)
- placar: 96 vitórias em 195 jogos de pro (49,2%) (fonte: pro_dados/spirit_breaker.json, confrontos).
- por que importa: sexto em volume de pro e suporte pos 5 que aparece direto na sua rota de gank nos primeiros 10 min.
- janelas: cedo, os dois trocam poder de controle: seu Bash passivo contra o Fireblast dele (1,2 s de stun, recarga de 8-11 s). Depois dos 11 min ele fecha Arcane Boots (11:12), ganhando sustentação de mana pra spammar Fireblast; pelos 19 min ele pode ter Hand of Midas (18:54) numa amostra menor, farmando em vez de brigar.
- o que ele faz com você: Fireblast cancela seu Charge de longe e, com a ultimate Multicast, tem chance de disparar duas ou três vezes seguidas, suficiente pra stun-lock sozinho. Ignite queima e reduz sua velocidade, cortando o dano extra que seu Bash tira de movimento.
- o que você faz com ele: Ogre tem pouquíssima vida pra um suporte (gpm 315) e nenhuma fuga própria; se você fechar a distância antes dele acertar o Fireblast, ele não tem resposta.
- itens que viram: Magic Wand/Stick dele reduz o risco de você zerar ele de mana antes da troca; do seu lado, Bulldoze (resistência a status) ajuda a atravessar um Fireblast sem perder toda a velocidade de carga.
- como jogar: inicie de ângulos onde ele não tem linha de visão pro Fireblast antes de você chegar. Depois do nível 6 dele (Multicast), evite ficar parado perto demais sem BKB numa luta prolongada.
- fonte: pro_dados/spirit_breaker.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_ignite).

## Contra Lion (lion)
- placar: 97 vitórias em 194 jogos de pro (50,0%) (fonte: pro_dados/spirit_breaker.json, confrontos).
- por que importa: suporte de gpm baixo como o seu (286 contra 355), um dos suportes de maior volume em pro contra o Spirit Breaker mesmo não entrando no top 6 por uma diferença mínima de jogos.
- janelas: na lane, Earth Spike (Impale) tem alcance de linha longo e te acerta antes de você chegar perto, então os primeiros 10 min são dele. Depois dos 18 min, com Blink Dagger pronto (18:12), ele reposiciona e combina Hex com Finger of Death pra queimar um alvo isolado, geralmente você se pegar sozinho.
- o que ele faz com você: Hex (Voodoo) te transforma por 2 a 3,2 s conforme o nível, cancelando Charge e qualquer ativo; Finger of Death bate de 600 a 850 de dano mágico (não é pure, seu Black King Bar bloqueia), o suficiente pra matar um Spirit Breaker sem BKB e sem muito item sozinho. Mana Drain seca seu mana cedo, dificultando pagar o custo do Charge (90 a 120 conforme o nível).
- o que você faz com ele: Lion tem pouca vida e nenhuma fuga própria antes do Blink (18 min); gankeado antes disso, ele não sobrevive a um Charge limpo.
- itens que viram: Black King Bar seu neutraliza o Hex dele perto do fim de jogo (hex forte exige dispel forte, BKB básico não resolve sozinho, mas reduz a dependência de reagir a tudo); do lado dele, Aether Lens/Blink aumentam o alcance efetivo do combo Impale+Hex+Finger.
- como jogar: na lane, jogue de ângulo, fora da linha reta do Impale. Depois do nível 6 dele, não entre sozinho no alcance de Finger of Death sem vida de sobra.
- fonte: pro_dados/spirit_breaker.json; pro_dados/lion.json; constants_abilities.json (lion_impale, lion_voodoo, lion_finger_of_death, lion_mana_drain, spirit_breaker_charge_of_darkness).

## Contra Disruptor (disruptor)
- placar: 103 vitórias em 190 jogos de pro (54,2%) (fonte: pro_dados/spirit_breaker.json, confrontos).
- por que importa: suporte de gpm baixo como o seu (279 contra 355) e dono do contador mecânico mais direto do seu kit: Glimpse.
- janelas: até os 11 min a troca é de poke, Thunder Strike reduz sua velocidade de ataque e movimento em 100% por 1,75 s a cada golpe. Depois dos 11-19 min ele tem Arcane Boots (11:24) pra sustentar o combo Glimpse e Kinetic Field. Blink dele é tardio e raro nesta amostra (24:00, poucos jogos), então antes disso ele depende de alcance pra te travar.
- o que ele faz com você: Glimpse teleporta o alvo de volta pra posição de 4 segundos atrás, o que, usado no meio de um Charge, zera todo o progresso e te joga de volta pro ponto de partida, cancelando a carga por completo (fonte: constants_abilities.json, disruptor_glimpse). Kinetic Field prende você e aliados num círculo que nenhum dos dois atravessa; Static Storm silencia, travando Nether Strike e Bulldoze.
- o que você faz com ele: Disruptor não tem fuga própria além de andar; é um dos suportes mais lentos do jogo (gpm 279, a pé a maior parte da partida). Pegar ele antes de gastar o Glimpse nele mesmo (ele pode usar em si pra reposicionar) costuma ser kill fácil.
- itens que viram: Bulldoze ativa antes de iniciar reduz o impacto do Glimpse (o Glimpse ainda te reposiciona, mas a resistência a status ajuda a sobreviver ao que vier depois); do lado dele, Force Staff permite escapar da Kinetic Field que ele mesmo criou.
- como jogar: não inicie o Charge sem saber se o Glimpse dele está disponível (recarga 18-24 s); se ele acabou de usar em outra luta, essa é sua janela. Evite lutar dentro do raio onde ele pode formar Kinetic Field em cima de você.
- fonte: pro_dados/spirit_breaker.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_glimpse, disruptor_kinetic_field, disruptor_static_storm, disruptor_thunder_strike).

## Contra Death Prophet (death_prophet)
- placar: 33 vitórias em 48 jogos de pro (68,8%, melhor confronto do Spirit Breaker com amostra de 30+) (fonte: pro_dados/spirit_breaker.json, confrontos).
- por que importa: maior vantagem do Spirit Breaker entre os confrontos com 30 ou mais jogos. Ela joga mid/offlane (pos 2/3), raramente divide lane com você, mas é um carry mágico sem disable nem fuga, o perfil mais fácil pra um iniciador de alcance global.
- janelas: até os 14 min ela está nivelando Carrion Swarm e Spirit Siphon pra farm, sem ameaça real de 1x1. Entre 14 e 20 min ela monta peças de um item de amplificação (Staff of Wizardry 14:06, Ogre Axe 19:24), sempre jogando pelo canal de Exorcism em vez de troca direta. Sua janela é o jogo inteiro até ela ter Black King Bar ou um suporte junto: sem isso, ela morre pra qualquer Charge limpo.
- o que ele faz com você: Exorcism cura ela proporcionalmente ao dano causado quando os espíritos voltam, então lutas longas favorecem ela se você não fechar rápido. Silence impede seus feitiços (Charge, Nether Strike, Bulldoze, Planar Pocket) por alguns segundos se acertar antes do seu cast, mas não impede o Greater Bash passivo.
- o que você faz com ele: Death Prophet não tem nenhum disable nem fuga própria, só Silence como controle indireto. Um Charge limpo nela antes dos 14-20 min quase sempre é kill garantida, e atrasa o farm dela a liga inteira.
- itens que viram: Black King Bar nela neutraliza seu Bash e te obriga a lutar o cerco de Exorcism; do seu lado, Blitz Knuckles (18:06) ajuda a fechar o 1x1 rápido antes do Silence dela.
- como jogar: gankeie ela isolada sempre que possível, antes dos itens de amplificação mágica dela ficarem prontos. Evite canalizar luta longa perto de Exorcism ativa, ela cura de volta o que você tira.
- fonte: pro_dados/spirit_breaker.json; pro_dados/death_prophet.json; constants_abilities.json (death_prophet_exorcism, death_prophet_silence, death_prophet_spirit_siphon).

## Contra Anti-Mage (antimage)
- placar: 22 vitórias em 32 jogos de pro (68,8%, empatado como melhor confronto do Spirit Breaker com amostra de 30+) (fonte: pro_dados/spirit_breaker.json, confrontos).
- por que importa: o carry mais farmador do jogo (643 de gpm, 53 last hits aos 10 min) entra como representante direto da regra "mesmo sem lane em comum, dois HC merecem comparação". Anti-Mage é pos 1 puro, você é pos 4, quase nunca dividem rota, mas ele é o teste definitivo do seu poder de pick-off contra um carry de farm puro.
- janelas: até os 14 min Anti-Mage só tem Power Treads (6:36) e Blink, sem resposta real a gank. Entre 14 e 21 min ele fecha Battlefury (14:06), explodindo o farm dele em camps grandes, e Manta Style (20:54) chega logo depois, dando dash de ilusões pra escapar. Antes do Manta, é a sua janela: ele não tem nenhum disable nem jeito de reverter uma iniciação, só o Blink pra sumir.
- o que ele faz com você: Mana Void causa dano baseado em quanto mana falta no alvo e ministuna; você gasta pouco mana (Bash é passivo), então o combo dele rende menos em cima de você do que em cima de um suporte de mana cheia. Counterspell (escudo de 1,3 s) pode bloquear o bônus de dano do seu Nether Strike se ele ativar no tempo certo, mas não impede o Bash.
- o que você faz com ele: Anti-Mage não tem nenhum disable, só Blink pra fugir (cooldown baixo, mas sem invulnerabilidade). Um Charge bem cronometrado antes do Manta dele (21 min) raramente falha, porque ele só tem uma chance de blinkar pra fora.
- itens que viram: Manta Style dele (ilusões) dá uma saída extra depois dos 21 min, dificultando prender o AM real; do seu lado, Blitz Knuckles e Shadow Blade ajudam a fechar antes do blink dele resetar.
- como jogar: gankeie cedo, antes do Battlefury (14 min); farm de jungle grande é quando ele está mais vulnerável e previsível. Depois do Manta, prefira iniciar em grupo pra cobrir as duas direções de fuga.
- fonte: pro_dados/spirit_breaker.json; pro_dados/antimage.json; constants_abilities.json (antimage_mana_void, antimage_counterspell, antimage_blink).

## Contra Clinkz (clinkz)
- placar: 37 vitórias em 55 jogos de pro (67,3%) (fonte: pro_dados/spirit_breaker.json, confrontos).
- por que importa: terceiro melhor confronto do Spirit Breaker com amostra de 30+, e outro carry puro (pos 1, 628 de gpm) sem lane em comum, representando o mesmo tipo de comparação entre dois perfis de farm/pick-off que não se cruzam na rota mas decidem o jogo nas lutas.
- janelas: até os 14 min ele está farmando atrás do Wind Walk, sem estar presente nas lutas do time. Entre 14 e 17 min ele fecha Desolator (14:18) e o Aghanim's Shard (16:42), virando um sniper de alcance longo que ataca escondido e desaparece. Sua janela é fora da invisibilidade dele: enquanto ele caça sozinho, está exposto a um Charge se você tiver visão.
- o que ele faz com você: Wind Walk deixa ele invisível andando até atacar ou usar item, então ele escolhe quando engajar; se ele atirar Searing Arrows em você de longe antes de você chegar perto, perde vida sem conseguir revidar. Strafe dá alcance e velocidade de ataque bônus, aumentando a distância em que ele consegue te kitar.
- o que você faz com ele: Clinkz não tem nenhum disable, só a invisibilidade como defesa. Sem Observer Ward ou Sentry cobrindo ele, um Charge certeiro assim que ele é revelado (atacando ou usando item) costuma matar, porque ele não tem fuga além de reentrar em Wind Walk (recarga 18-24 s).
- itens que viram: Sentry Ward do seu lado anula a vantagem dele de escolher o momento da luta; do lado dele, Aghanim's Shard (presente em 990 dos 1.137 jogos de pro, 87%) aumenta a pressão dele à distância, então depois dos 17 min evite ficar parado no alcance dele sem cobertura.
- como jogar: priorize visão (sentry) na sua rota de farm dele. Se ele atacar e sair de Wind Walk, esse é o momento de carregar, ele fica visível e vulnerável por alguns segundos.
- fonte: pro_dados/spirit_breaker.json; pro_dados/clinkz.json; constants_abilities.json (clinkz_wind_walk, clinkz_strafe, clinkz_searing_arrows).

## Contra Io (wisp)
- placar: 7 vitórias em 32 jogos de pro (21,9%, pior confronto do Spirit Breaker com amostra de 30+) (fonte: pro_dados/spirit_breaker.json, confrontos).
- por que importa: a pior desvantagem do Spirit Breaker entre os confrontos com 30 ou mais jogos, de longe. Io é suporte com gpm moderado (364, contra os seus 355) e o kit dele anula justamente a ideia central do seu herói, que é prender um alvo específico.
- janelas: o jogo inteiro é dela, não existe janela sua clara. Até os 15 min ela já tem Magic Wand (6:48) e está tetherando o carry, compartilhando cura e velocidade. Relocate (teleporte global com o aliado tetherado) está disponível desde o nível 6 e vira a resposta padrão pra qualquer gank seu.
- o que ele faz com você: Relocate teleporta Io e o aliado tetherado pra qualquer lugar do mapa, inclusive de volta depois, então mesmo um Charge perfeito pode terminar com o alvo simplesmente sumindo antes do Bash acertar. Tether dá velocidade de movimento extra pro aliado puxado, dificultando a perseguição mesmo sem usar a ultimate.
- o que você faz com ele: pouco. Greater Bash ainda funciona se você conseguir acertar antes do Relocate, e, se você tiver o Aghanim's Shard, Planar Pocket pode redirecionar um Tether pra você em vez do alvo original (Spirits não entra nessa conta, é um feitiço sem alvo único). O timing é apertado de qualquer forma porque Relocate não é um feitiço de alvo único redirecionável (ele afeta Io e o tetherado junto).
- itens que viram: nenhum item seu resolve sozinho; o que muda o confronto é cronometrar a carga pra quando o Relocate dela estiver em recarga, ou travar ela e o aliado tetherado numa Kinetic Field de aliado antes de carregar.
- como jogar: não gaste o Charge de longe contra o par Io e carry, é previsível demais pro Relocate. Prefira forçar lutas em grupo onde ela precisa escolher entre salvar o carry ou lutar, e cheque se ela já gastou a ultimate antes de iniciar.
- fonte: pro_dados/spirit_breaker.json; pro_dados/wisp.json; constants_abilities.json (wisp_relocate, wisp_tether).

## Contra Treant Protector (treant)
- placar: 17 vitórias em 58 jogos de pro (29,3%) (fonte: pro_dados/spirit_breaker.json, confrontos).
- por que importa: segunda pior desvantagem do Spirit Breaker com amostra de 30+, e suporte pos 5 que divide lane direto com você na maioria dos jogos.
- janelas: desde o nível 6 (geralmente antes dos 10 min em pro) ele já tem Overgrowth disponível, uma resposta pronta pra qualquer iniciação sua. Entre 12 e 19 min ele fecha Arcane Boots (12:00) e, numa parte da amostra, Aghanim's Shard (19:00, 660 de 1.402 jogos, 47%).
- o que ele faz com você: Overgrowth cria uma raiz em área de 800 de raio por 3 a 5 segundos conforme o nível, que prende, desarma e impede blink de todo mundo dentro, inclusive você assim que chega perto; é basicamente uma resposta pronta pra sua entrada (fonte: constants_abilities.json, treant_overgrowth). Leech Seed desarma no ataque, cortando o seu Bash de atacar por um tempo. Living Armor absorve e cura parte do dano, então seus Bashes rendem menos nos aliados protegidos.
- o que você faz com ele: Treant tem pouca mobilidade própria (gpm 301, sem fuga ativa além de Overgrowth em si mesmo) e nenhum dano real de 1x1; se você conseguir isolar ele longe de Overgrowth pronto, ele não tem resposta.
- itens que viram: Bulldoze ativa antes de entrar na Overgrowth reduz o tempo preso (resistência a status), mas não zera; do lado dele, Blink Dagger (26:24, tardio e raro) dá reposicionamento extra só no fim de jogo.
- como jogar: confira a recarga da Overgrowth (110 a 90 s) antes de carregar; se ele acabou de usar em outra luta, essa é sua brecha. Evite iniciar logo depois do nível 6 dele sem saber se a ultimate está disponível.
- fonte: pro_dados/spirit_breaker.json; pro_dados/treant.json; constants_abilities.json (treant_overgrowth, treant_leech_seed, treant_living_armor).

## Contra Mirana (mirana)
- placar: 14 vitórias em 40 jogos de pro (35,0%) (fonte: pro_dados/spirit_breaker.json, confrontos).
- por que importa: terceira pior desvantagem com 30+ jogos e também perfil parecido de suporte com farm baixo (gpm 375 e 16 last hits aos 10 min, contra seus 355 e 14), então o confronto junta "oponente direto de lane" com "matchup ruim pra você".
- janelas: na lane, Sacred Arrow tem alcance de mapa inteiro e stuna de longe antes de você chegar perto; é sempre a janela dela. Do nível 6 em diante, Moonlight Shadow (invisibilidade pro time inteiro) é a resposta padrão dela a qualquer rotação sua.
- o que ele faz com você: Sacred Arrow pode te acertar de qualquer lugar do mapa, cancelando sua aproximação antes mesmo de você começar a carregar, com stun de até 2,6 s dependendo da distância percorrida. Leap dá ela velocidade de ataque e movimento bônus por 5 s, o suficiente pra correr de uma carga sem precisar de item. Moonlight Shadow deixa o time dela invisível bem na hora que você inicia, tirando a visão que seu Charge precisa pra manter o alvo.
- o que você faz com ele: Mirana tem pouca vida (375 de gpm) e, fora o Leap, nenhuma fuga garantida contra um gank bem posicionado; se você aparecer fora do alcance de visão dela antes da flecha, ela não tem tempo de reagir.
- itens que viram: Sentry do seu lado anula o Moonlight Shadow dela bem na hora da luta; do lado dela, Blink Dagger de aliado combinado com a arrow aumenta o alcance efetivo de punir sua entrada.
- como jogar: aproxime-se fora da linha de visão dela, pela floresta, pra evitar a flecha. Se ela usar Moonlight Shadow, tenha sentry pronta ou espere o efeito acabar antes de comprometer o Charge.
- fonte: pro_dados/spirit_breaker.json; pro_dados/mirana.json; constants_abilities.json (mirana_arrow, mirana_leap, mirana_invis).
