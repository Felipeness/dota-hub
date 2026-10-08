---
id: confrontos-huskar
heroi: Huskar
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/huskar.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/windrunner.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/queenofpain.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/puck.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/silencer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/razor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/monkey_king.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ancient_apparition.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/morphling.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/terrorblade.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://liquipedia.net/dota2/Terrorblade
---

## Contra Jakiro (jakiro)

- placar: Huskar vence 80 de 149 partidas pro, 53,7% (pro_dados/huskar.json, confrontos). É o oponente com mais jogos registrados contra o Huskar no dataset.
- por que importa: é o herói que mais aparece em jogos pro contra o Huskar. Não faz lane direta com ele (Jakiro é suporte, geralmente pos 4 ou 5), mas o kit dele ataca exatamente o que o Huskar precisa pra funcionar: velocidade de ataque e sustain.
- janelas: Jakiro não tem power spike de item, o dele é de nível de ult. Enquanto o Huskar já está puxando Armlet aos 9,1 min (pro_dados/huskar.json), o Jakiro ainda está de Arcane Boots (mediana 11,7) e Magic Wand (8,1), só virando ameaça de verdade quando bate level 6 pro Macropyre. Até lá o duelo é todo a favor do Huskar.
- o que ele faz com você: Liquid Fire soma dano em área e reduz a velocidade de ataque dos alvos atingidos, batendo direto no bônus de Berserker's Blood (constants_abilities.json, huskar_berserkers_blood escala attack speed com %HP perdido). Macropyre cria uma linha de fogo contínua que machuca muito um corpo a corpo parado em cima, e Ice Path pode travar você antes do Life Break sair.
- o que você faz com ele: Life Break fecha a distância direto no Jakiro, que não tem escape nenhum, e o Burning Spear acerta rápido demais pra ele conseguir kitar de volta pro time.
- itens que viram: Black King Bar (mediana 23,2 min, huskar.json) tira o Ice Path e o combo de stun do caminho; o Aghanim's Scepter de Huskar ("força o alvo a atacar o Huskar e aumenta o alcance de cast", aghs_desc) trava o Jakiro pra bater nele em vez de kitar pro time.
- como jogar: Na lane, ignore o Jakiro e puxe o Armlet o quanto antes, ele não vai te punir sozinho. Em teamfight, não sente dentro do Macropyre depois que ele sobe; feche o combo com Life Break assim que o perceber fora de posição. Com BKB pronto, ele perde praticamente todas as ferramentas de controle contra você.
- fonte: pro_dados/huskar.json (confrontos, itens); pro_dados/jakiro.json (resumo, itens); constants_abilities.json (jakiro_liquid_fire, jakiro_macropyre, jakiro_ice_path, huskar_berserkers_blood); aghs_desc (Huskar scepter)

## Contra Windranger (windrunner)

- placar: Huskar vence 59 de 121, 48,8% (pro_dados/huskar.json). Segundo em volume de jogos pro contra ele, e um dos poucos nomes de muito jogo onde o Huskar fica abaixo de 50%.
- por que importa: segundo maior volume de jogos pro contra o Huskar, e um dos poucos nomes de muito jogo em que ele fica abaixo de 50% de vitórias (pro_dados/huskar.json, confrontos).
- janelas: a curva dela é rápida: Power Treads aos 7,2 min, Maelstrom aos 13,4 (via Javelin 9,3), o que já dá poke e farm em área cedo. O Huskar ainda está no meio do Armlet (9,1) e do Sange (14,8) nesse momento, então até os 15 min o duelo é parelho, mas depois dos 20 (Blade of Alacrity 21,8 dela contra BKB 23,2 e Sange and Yasha 20,0 dele) o Huskar passa a aguentar mais a troca de dano.
- o que ele faz com você: nada, essa linha é dela. Windrun dá evasão contra ataque físico, que bloqueia parte do dano de autoataque do Huskar, mas não bloqueia o Burning Spear, que é mágico (constants_abilities.json, huskar_burning_spear, dmg_type Magical). Shackleshot pode prender o Huskar numa árvore ou unidade antes do Life Break sair.
- o que você faz com ele: Life Break ignora a distância que ela abre com Windrun, porque é um salto garantido no alvo, não um projétil que ela possa desviar. Uma vez colado, o Burning Spear continua acertando mesmo com a evasão ativa.
- itens que viram: o Aghanim's Scepter do Huskar, que força o alvo a atacar ele, anula de vez a estratégia dela de ficar hitando à distância.
- como jogar: evite trocar à distância antes do Armlet, ela ganha esse poke. Depois dos 9-10 min, force o combo corpo a corpo onde a evasão física dela não resolve contra o Burning Spear. Shackleshot é o maior risco: jogue perto de árvore ou unidade neutra com cuidado redobrado antes de iniciar.
- fonte: pro_dados/huskar.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_windrun, windrunner_shackleshot, huskar_burning_spear); aghs_desc

## Contra Rubick (rubick)

- placar: Huskar vence 52 de 112, 46,4% (pro_dados/huskar.json). Terceiro em volume e um matchup levemente desfavorável pro Huskar.
- por que importa: é o suporte com mais jogos pro contra o Huskar no dataset, e tem a ferramenta mais perigosa do jogo contra ele: Spell Steal.
- janelas: Rubick não escala pra duelo, o item dele é tudo suporte (Aether Lens 22,9, Blink 21,6, Aghanim's Shard 27,0). O risco dele não vem de power spike, vem do nível 6 em diante, quando ele já pode roubar o Life Break se o Huskar usar perto dele.
- o que ele faz com você: Spell Steal pega o último feitiço que o Huskar lançou, inclusive o Life Break, e devolve o gap-close contra o próprio Huskar; Telekinesis levanta e arremessa o Huskar no ar, interrompendo qualquer combo que ele esteja montando.
- o que você faz com ele: o Burning Spear acerta rápido demais pra um suporte sem mobilidade segurar, e o Huskar não precisa de mana pra funcionar (Blood Magic converte custo de mana em vida), então Fade Bolt, que reduz dano e dano de feitiço, machuca menos quem não depende de nuke.
- itens que viram: evitar usar Life Break perto do Rubick quando ele está vivo e com a ultimate disponível é o item invisível dessa partida; Black King Bar (23,2 min) segura a Telekinesis e qualquer coisa que ele tenha roubado de outro herói.
- como jogar: controle quando usa o Life Break perto dele, forçar o combo longe do Rubick evita o roubo do seu próprio gap-close. Depois disso é 1x1 direto, ele não aguenta o Burning Spear sustentado.
- fonte: pro_dados/huskar.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis, rubick_fade_bolt, huskar_blood_magic)

## Contra Ember Spirit (ember_spirit)

- placar: Huskar vence 58 de 109, 53,2% (pro_dados/huskar.json).
- por que importa: é um dos rivais com mais jogos pro contra o Huskar no dataset (109 partidas, pro_dados/huskar.json e ember_spirit.json, confrontos).
- janelas: no 7.41, o build pro do Ember não passa por Battle Fury (não aparece entre os 30 itens mais comprados, pro_dados/ember_spirit.json), ele foca Aghanim's Shard (25,3 min) e depois Ultimate Scepter (31,6 min). Isso deixa o Ember fraco justo na janela em que o Huskar já fechou Armlet (9,1) e está subindo pro Sange and Yasha (20,0) e BKB (23,2). Até os 25 min, o power spike é todo do Huskar.
- o que ele faz com você: Sleight of Fist acerta e some antes do Burning Spear estourar de verdade; Flame Guard absorve uma % do dano mágico recebido, incluindo parte do Burning Spear, enquanto ativo. Fire Remnant dá escape garantido mesmo sem mana.
- o que você faz com ele: Life Break tira uma fatia grande da vida atual dele de cara, mesmo que o Flame Guard absorva uma parte desse dano mágico como absorve qualquer outro; com o Burning Spear sustentado, o Flame Guard quebra rápido e para de absorver.
- itens que viram: Black King Bar (23,2 min) segura o burst de Searing Chains; se o Ember já tem Flame Guard ligado, prefira abrir com Life Break em vez de autoataque pra não gastar o escudo dele à toa.
- como jogar: na lane, pressione cedo, antes dos 25 min o Ember não tem ferramenta de verdade pra responder ao seu dano. Depois do Aghanim's Scepter dele (31,6 min), ele ganha mais remanescentes e alcance, então force o jogo antes disso se puder.
- fonte: pro_dados/huskar.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_sleight_of_fist, ember_spirit_flame_guard, ember_spirit_fire_remnant, huskar_life_break)

## Contra Queen of Pain (queenofpain)

- placar: Huskar vence 63 de 109, 57,8% (pro_dados/huskar.json), um dos melhores retornos dele entre os nomes de muito volume.
- por que importa: rival direto de mid em 7.41, com um dos melhores retornos de vitória do Huskar entre os nomes de muito volume (57,8%, pro_dados/huskar.json, confrontos).
- janelas: QoP sobe rápido no início (Robe 9,6, Kaya 13,9) mas o burst dela é quase todo mágico (Scream of Pain, Sonic Wave), e o Berserker's Blood do Huskar escala resistência mágica até 30% conforme a vida cai (constants_abilities.json, huskar_berserkers_blood, maximum_magic_resist). Isso significa que o combo dela fica mais fraco exatamente quando o Huskar já está baixo de vida, o momento em que ela mais quer acertar o burst. Scepter dela sai aos 23,5 e Shard aos 27,5, já depois do BKB do Huskar (23,2).
- o que ele faz com você: Shadow Strike aplica dano inicial alto e depois dano ao longo do tempo, e o Blink dela permite entrar e sair rápido pra evitar o Burning Spear sustentado.
- o que você faz com ele: Life Break ignora o Blink curto dela, porque é um salto garantido, e a resistência mágica do Berserker's Blood reduz justo a parte mágica do combo dela, que é praticamente todo o dano que ela tem.
- itens que viram: Black King Bar (23,2 min) bloqueia Scream of Pain e Sonic Wave inteiros enquanto ativo; Sange and Yasha (20,0 min) já está no corpo antes do Scepter dela sair, então o Huskar chega na luta com mais vida de sobra pra tankar o combo.
- como jogar: evite ficar parado tomando o combo dela sem BKB nos primeiros 20 min, é a única janela em que ela realmente ameaça. Depois disso, ignore o burst dela e feche com Life Break, o dano mágico já não rende o suficiente.
- fonte: pro_dados/huskar.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_shadow_strike, queenofpain_blink, queenofpain_scream_of_pain, huskar_berserkers_blood)

## Contra Tusk (tusk)

- placar: Huskar vence 52 de 104, exatos 50% (pro_dados/huskar.json). Matchup parelho e com bastante volume.
- por que importa: quarto em jogos pro contra o Huskar. É um iniciador de offlane que costuma ganhar o Huskar como alvo de gank, já que ele fica muito exposto na lane de mid.
- janelas: Tusk não escala item, ele é todo suporte/iniciação (Tranquil Boots 8,4, Dust 24,7). O risco dele é de nível de habilidade: Snowball com aliados junto pode aparecer a qualquer momento do jogo pra fechar um gank. O Huskar só fica realmente seguro contra gank depois do Armlet (9,1) e do BKB (23,2).
- o que ele faz com você: Ice Shards cria uma parede de dano e trava o caminho de fuga; Snowball com aliados estoura stun e dano em cima, abrindo pro combo do time; Walrus Punch é um crítico que lança o alvo pro ar.
- o que você faz com ele: Life Break fura o posicionamento dele e, com 60% de resistência mágica e debuff immune durante o salto (constants_abilities.json, huskar_life_break), o Huskar atravessa boa parte do controle dele pra chegar no kill.
- itens que viram: Black King Bar (23,2 min) segura Ice Shards e Snowball, que são mágicos; depois disso, Tusk vira presa fácil pro Burning Spear.
- como jogar: antes do Armlet, jogue perto de visão de aliados, é a janela mais perigosa pra um gank dele. Depois do BKB, inverta a lógica, cace o Tusk quando ele tentar isolar outro aliado.
- fonte: pro_dados/huskar.json; pro_dados/tusk.json; constants_abilities.json (tusk_ice_shards, tusk_snowball, tusk_walrus_punch, huskar_life_break)

## Contra Shadow Fiend (nevermore)

- placar: Huskar vence 50 de 95, 52,6% (pro_dados/huskar.json), com sample grande pra um rival clássico de mid.
- por que importa: é o duelo de mid mais tradicional do jogo. Os dois disputam a mesma lane e os dois escalam rápido.
- janelas: Shadow Fiend poka de longe com Shadowraze antes dos 6 (nível de ult), fase em que o Huskar ainda não tem Armlet e perde a troca à distância. A partir dos 9-10 min (Armlet do Huskar, 9,1; Mask of Madness do SF, 10,2), o jogo vira: o MoM reduz a própria armadura em 7 enquanto ativo (items.json, mask_of_madness, berserk_armor_reduction), o que entrega mais dano físico pro Huskar justo quando ele está puxando o Burning Spear.
- o que ele faz com você: Shadowraze acerta de longe sem precisar de linha de visão direta, e cada Raze acumula um amplificador de dano no alvo; Necromastery soma dano fixo pra cada alma presa, deixando o late game dele mais forte conforme mata.
- o que você faz com ele: uma vez que o SF troca pra MoM pra brigar de perto, a redução de armadura dele conta a favor do Burning Spear; Life Break fecha a distância da Raze antes de ele conseguir recarregar e poka de novo.
- itens que viram: Black King Bar (23,2 min) do Huskar sai perto do BKB dele (25,2), então quem fecha primeiro ganha a janela de iniciar sem medo de disable; o próprio SF costuma comprar Hurricane Pike (23,0 min, pro_dados/nevermore.json) pra abrir distância, mas o Life Break é um salto garantido no alvo, não um projétil, então o alcance extra do Pike não ajuda o SF a escapar dele.
- como jogar: evite trocar Raze à distância antes do Armlet, feche a lane assim que puder. Depois dos 10 min, puxe pra luta corpo a corpo sempre que ele tiver MoM ativo.
- fonte: pro_dados/huskar.json; pro_dados/nevermore.json; items.json (mask_of_madness); constants_abilities.json (nevermore_shadowraze1, nevermore_necromastery)

## Contra Storm Spirit (storm_spirit)

- placar: Huskar vence 45 de 71, 63,4% (pro_dados/huskar.json), a maior vantagem do Huskar entre os rivais de mid com volume relevante.
- por que importa: rival de mid e também um dos dois ou três com maior vantagem (30+ jogos) do Huskar em todo o dataset.
- janelas: Storm sobe Kaya and Sange por volta dos 20 min (19,9 a 20,1) e só parte pro Parasma (mystic_staff 32,4 e devastator 31,8) depois dos 30 min, bem depois do Huskar já ter fechado Armlet (9,1), Sange and Yasha (20,0) e BKB (23,2).
- o que ele faz com você: Ball Lightning dá mobilidade pra fugir ou entrar, Static Remnant detona se alguém chegar perto, Electric Vortex puxa o alvo pra cima dele, o que pode ser usado contra o próprio Huskar se ele tentar fugir.
- o que você faz com ele: Life Break é um salto garantido no alvo, não um skillshot, então o Ball Lightning não ajuda o Storm a desviar dele; uma vez colado, o Burning Spear continua acertando independente da mana que sobrou pro Storm fugir de novo.
- itens que viram: Black King Bar (23,2 min do Huskar contra 26,1 min do Storm) chega primeiro no Huskar na maioria dos jogos, travando o combo de burst do Storm antes dele conseguir reagir.
- como jogar: deixe o Storm gastar mana perseguindo farm, ele não tem ferramenta de burst de verdade cedo. Assim que o BKB sair, procure o combo, ele não aguenta o Burning Spear sustentado sem conseguir fugir de vez.
- fonte: pro_dados/huskar.json; pro_dados/storm_spirit.json; constants_abilities.json (storm_spirit_ball_lightning, storm_spirit_electric_vortex, huskar_life_break)

## Contra Puck (puck)

- placar: Huskar vence 39 de 66, 59,1% (pro_dados/huskar.json).
- por que importa: rival de mid e um matchup de vantagem clara pelos números (59,1%, pro_dados/huskar.json, confrontos).
- janelas: o Puck só chega no Aghanim's Shard dele aos 22,5 min e no Parasma (mystic_staff 27,1, devastator 27,3) depois dos 27. Até lá, o Huskar já passou pelo Armlet (9,1), Sange and Yasha (20,0) e está perto do BKB (23,2).
- o que ele faz com você: Phase Shift dá invulnerabilidade curta pra escapar de combo, Dream Coil prende e estoura se o alvo tentar fugir, Illusory Orb dá reposicionamento rápido.
- o que você faz com ele: Phase Shift é curto e, assim que acaba, o Life Break já pode cair em cima; o Burning Spear continua acumulando dano mesmo que o Puck use Illusory Orb pra fugir, porque o salto do Life Break fecha de novo.
- itens que viram: Black King Bar (23,2 min) segura o Dream Coil; o Aghanim's Scepter do Huskar, que força o alvo a atacar ele, impede o Puck de ficar kitando com Illusory Orb em vez de brigar.
- como jogar: force o combo assim que o Phase Shift dele estiver de recarga. Não gaste o Life Break achando que vai acertar durante o Phase Shift, ele é invulnerável nesse momento, espere a janela fechar.
- fonte: pro_dados/huskar.json; pro_dados/puck.json; constants_abilities.json (puck_phase_shift, puck_dream_coil, puck_illusory_orb); aghs_desc

## Contra Silencer (silencer)

- placar: Huskar vence 30 de 45, 66,7% (pro_dados/huskar.json). Maior vitória percentual do Huskar entre os nomes com 30+ jogos.
- por que importa: é um dos dois ou três oponentes com maior vantagem (30+ jogos) do Huskar no dataset, e o motivo mecânico é claro no próprio kit do Huskar.
- janelas: Silencer no 7.41 pro vem itemizado como suporte (Wizard Hat 11,6, Force Staff 22,3, Dust 22,5; nenhum item de escala pesada entre os 30 mais comprados), então ele não desenvolve power spike de carry. O Huskar segue a curva normal dele, Armlet aos 9,1, BKB aos 23,2, sem resistência real pra enfrentar.
- o que ele faz com você: Global Silence impede qualquer feitiço, inclusive o Life Break, por alguns segundos; Glaives of Wisdom rouba inteligência do alvo a cada acerto e causa dano extra baseado nessa inteligência.
- o que você faz com ele: Berserker's Blood é passivo e Burning Spear é um modificador de ataque em autocast (constants_abilities.json, behavior Passive e Attack Modifier/Autocast), então os dois continuam funcionando normalmente mesmo sob Global Silence, diferente da maioria dos carries que dependem de feitiço ativo pra escalar.
- itens que viram: nenhum item específico muda esse duelo, o que decide é o próprio kit: enquanto Silencer trava o cast de outros heróis, o Huskar segue batendo e sangrando normalmente.
- como jogar: não dependa do Life Break pra iniciar se o Global Silence estiver de pé, espere ele cair pra fechar o combo com segurança. Fora isso, ignore a ameaça dele, o output dele sozinho não segura o Burning Spear.
- fonte: pro_dados/huskar.json; pro_dados/silencer.json; constants_abilities.json (silencer_global_silence, silencer_glaives_of_wisdom, huskar_berserkers_blood, huskar_burning_spear)

## Contra Razor (razor)

- placar: Huskar vence 29 de 46, 63,0% (pro_dados/huskar.json).
- por que importa: outro dos nomes com maior vantagem (30+ jogos) do Huskar, e um carry melee que teoricamente deveria competir pelo mesmo espaço de HP alto, mas perde a troca.
- janelas: Razor sobe Boots of Elves (9,1), Mithril Hammer (19,7) e BKB (24,7, amostra pequena de 747 jogos), ficando pouco atrás do Huskar na curva de item, mas o kit dele depende de ficar parado perto do alvo linkado, o que o Huskar usa a favor assim que fecha com Life Break.
- o que ele faz com você: Static Link rouba uma fatia do dano de ataque do alvo enquanto o link dura, e permite atacar enquanto se move; Plasma Field bate duas vezes (ida e volta) em quem estiver no caminho.
- o que você faz com ele: o Burning Spear é um dano mágico separado do autoataque, então o que o Static Link rouba não afeta essa parte do dano do Huskar; durante o salto do Life Break, o Huskar fica debuff immune (constants_abilities.json, huskar_life_break), o que impede o Razor de reestabelecer o link bem na hora que o Huskar está fechando o kill.
- itens que viram: Black King Bar (23,2 min) do Huskar tira o que resta de controle do Razor; Sange and Yasha (20,0 min) soma força crua que o roubo de dano do Static Link não consegue compensar.
- como jogar: evite ficar parado trocando autoataque com o link ativo por muito tempo, puxe o combo com Life Break pra encurtar a janela. O Burning Spear sozinho já corrói mais rápido do que o Static Link consegue devolver.
- fonte: pro_dados/huskar.json; pro_dados/razor.json; constants_abilities.json (razor_static_link, razor_plasma_field, huskar_life_break, huskar_burning_spear)

## Contra Hoodwink (hoodwink)

- placar: Huskar perde feio, vence só 32 de 83, 38,6% (pro_dados/huskar.json). É a pior porcentagem do Huskar entre todos os oponentes com amostra grande (80+ jogos).
- por que importa: maior desvantagem do Huskar com sample realmente grande no dataset, e o motivo está escrito na própria descrição da habilidade dela.
- janelas: Hoodwink não compra item de escala cedo (Wizard Hat 12,4, Aghanim's Shard 23,8), o problema dela pro Huskar não é power spike de item, é a ultimate em si, disponível desde o nível 6.
- o que ele faz com você: Sharpshooter "causa dano pesado, Break e lentidão" (constants_abilities.json, hoodwink_sharpshooter) num alvo único. O Break desativa habilidades passivas por um tempo, e isso inclui o Berserker's Blood inteiro, o bônus de velocidade de ataque, regen e resistência mágica some justo na hora que o Huskar mais precisa dele. Bushwhack estuna perto de árvore, e Scurry deixa ela correr de árvore em árvore fugindo do combo.
- o que você faz com ele: pouca coisa enquanto o Break está ativo, o Life Break continua funcionando (é dano, não depende do passivo), mas sem o Berserker's Blood o Huskar perde a sustentação que normalmente ganha nessa troca.
- itens que viram: Heaven's Halberd (Disarm impede atacar por 3,5s, items.json, heavens_halberd) não resolve o Break; o melhor é evitar ficar no alcance do Sharpshooter carregando, já que ele é de alvo único e dá pra fugir da mira antes do disparo.
- como jogar: jogue de fora do alcance dela quando o Sharpshooter estiver disponível, a carga é visível e dá tempo de reagir. Não force o combo contra ela sozinho sem suporte, o Break tira justo a parte do seu kit que ganha a troca.
- fonte: pro_dados/huskar.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_sharpshooter, hoodwink_bushwhack, hoodwink_scurry, huskar_berserkers_blood); items.json (heavens_halberd)

## Contra Monkey King (monkey_king)

- placar: Huskar vence só 12 de 37, 32,4% (pro_dados/huskar.json). É a pior porcentagem do Huskar em todo o dataset entre oponentes com 30 ou mais jogos.
- por que importa: maior desvantagem percentual do Huskar no dataset inteiro (30+ jogos), mesmo com amostra mais enxuta que a de Hoodwink.
- janelas: Monkey King sobe Aghanim's Shard (25,9) e Desolator (18,3), uma curva parecida em timing com a do Huskar, mas o kit dele é desenhado pra evitar justamente o tipo de troca sustentada que o Huskar quer.
- o que ele faz com você: Boundless Strike tem True Strike, não erra mesmo contra evasão, e estuna em linha; Jingu Mastery dá quatro ataques carregados com dano bônus e lifesteal no quarto acerto no mesmo alvo, sustentando ele na troca; Tree Dance e Primal Spring dão posição alta e reengajamento, fugindo do corpo a corpo prolongado que o Huskar precisa pra render o Burning Spear.
- o que você faz com ele: Life Break ainda ignora a distância e tira uma fatia da vida atual dele de cara, mas sem conseguir prender o combate por tempo suficiente, o Burning Spear não acumula o bastante antes do Monkey King reposicionar de novo.
- itens que viram: Black King Bar (23,2 min) segura o stun do Boundless Strike, mas não resolve o reposicionamento por árvore; Heaven's Halberd (Disarm impede atacar por 3,5s, items.json, heavens_halberd) trava quem depende de autoataque, o que reduz o valor do Jingu Mastery dele.
- como jogar: evite trocas longas, force o combo rápido com Life Break antes dele conseguir subir numa árvore. Jogue perto de visão de torre ou aliado, perder o Monkey King de vista é dar o reposicionamento de graça.
- fonte: pro_dados/huskar.json; pro_dados/monkey_king.json; constants_abilities.json (monkey_king_boundless_strike, monkey_king_jingu_mastery, monkey_king_tree_dance, monkey_king_primal_spring); items.json (heavens_halberd)

## Contra Ancient Apparition (ancient_apparition)

- placar: Huskar vence 17 de 41, 41,5% (pro_dados/huskar.json).
- por que importa: é um dos piores matchups do Huskar no dataset pro (41,5% de vitórias em 41 jogos, pro_dados/huskar.json, confrontos). O motivo é mecânico, Huskar é o único herói sem reserva de mana (constants_abilities.json, huskar_blood_magic), o que deixa o Ice Blast da AA, que bloqueia cura e regeneração, especialmente forte contra ele.
- janelas: AA é suporte puro, GPM 312 (pro_dados/ancient_apparition.json), e não escala item nenhum relevante além do Aghanim's Shard (24,4 min). A ameaça dele não é de item, é de nível 6 em diante, quando a ultimate fica disponível.
- o que ele faz com você: Ice Blast marca uma área e deixa quem é atingido "Frostbitten", tomando dano ao longo do tempo e impedido de regenerar ou curar vida enquanto durar (constants_abilities.json, ancient_apparition_ice_blast). Isso anula na prática o regen do Berserker's Blood, que é a peça central do sustain do Huskar. E se a vida cair abaixo de certa porcentagem sob efeito do Frostbite, o alvo "estilhaça" na hora, o que é especialmente perigoso pra um herói que já joga de propósito com pouca vida.
- o que você faz com ele: Life Break ainda fecha a distância rápido o bastante pra matar o AA antes dele conseguir acertar o combo de longe, já que ele não tem fuga nenhuma de verdade.
- itens que viram: Black King Bar (23,2 min) bloqueia o Cold Feet e o Ice Blast enquanto ativo; evitar ficar muito tempo com a vida baixa perto de um AA vivo é o cuidado que nenhum item resolve sozinho.
- como jogar: respeite a ultimate dele a partir do nível 6, não jogue de vida baixa dentro do alcance de Ice Blast sem BKB. Depois que o BKB sobe, a lógica inverte, cace o AA primeiro em qualquer luta.
- fonte: pro_dados/huskar.json; pro_dados/ancient_apparition.json; constants_abilities.json (ancient_apparition_ice_blast, ancient_apparition_cold_feet, huskar_blood_magic)

## Contra Morphling (morphling)

- placar: Huskar vence 24 de 42, 57,1% (pro_dados/huskar.json).
- por que importa: os dois não disputam lane (Huskar é pos 2/3, Morphling é pos 1 puro), mas é o confronto clássico de "quem fica forte primeiro" entre dois core que escalam rápido, o tipo de pergunta que todo jogador de Huskar já se fez.
- janelas: até os 15 min: o Huskar sai na frente com Armlet (9,1) contra o Morphling ainda comprando Diadem (15,7) e Yasha (14,6). Dos 15 aos 25: o Morphling sobe Manta (18,4) e segue pra Talisman of Evasion (25,1) rumo a Butterfly (25,8), enquanto o Huskar fecha Sange and Yasha (20,0) e BKB (23,2). Depois dos 25: o Butterfly dele só fica pronto quando o Huskar já está pronto pra engajar há um bom tempo, com o power spike inteiro do Huskar já consumido antes do pico de evasão do Morphling existir.
- o que ele faz com você: Adaptive Strike estuna e empurra, interrompendo a sequência de ataques do Burning Spear; Waveform dá invulnerabilidade curta pra fugir do corpo a corpo.
- o que você faz com ele: Adaptive Strike escala dano, stun e empurrão com a agilidade do Morphling (constants_abilities.json, morphling_adaptive_strike_agi), fica mais forte quanto mais ele desloca atributo pra agilidade; Life Break ignora o Waveform, que só protege durante o cast, não depois.
- itens que viram: Black King Bar (23,2 min) bloqueia o Adaptive Strike; o Aghanim's Scepter do Huskar ("força o alvo a atacar o Huskar"), bom contra quem depende de distância, trava o Morphling corpo a corpo onde a evasão da Butterfly ainda não compensa o Burning Spear sustentado.
- como jogar: force a troca antes dos 25 min, antes do Butterfly dele ficar pronto. Se ele deslocar pra agilidade visando evasão, respeite mais o Adaptive Strike, o combo dele fica mais forte, não mais fraco.
- fonte: pro_dados/huskar.json; pro_dados/morphling.json; constants_abilities.json (morphling_adaptive_strike_agi, morphling_waveform, huskar_life_break); items.json (butterfly, 35% evasão); aghs_desc

## Contra Terrorblade (terrorblade)

- placar: Huskar vence 21 de 40, 52,5% (pro_dados/huskar.json).
- por que importa: outro carry (pos 1) sem lane em comum com o Huskar, mas com a interação mecânica mais específica da lista inteira: o Sunder dele troca uma porcentagem da vida atual entre os dois heróis, e o Huskar joga de propósito com vida baixa.
- janelas: Terrorblade não tem quase nada antes da Metamorphosis (nível 6), e no 7.41 pro ele sobe Dragon Lance (19,6) e Aghanim's Shard (17,4) antes de qualquer item de dano pesado, com Skadi só aos 28,2. O Huskar já passou pelo Armlet (9,1) e está no BKB (23,2) muito antes do Terrorblade começar a bater de verdade.
- o que ele faz com você: Sunder "troca uma porcentagem da vida atual" dos dois lados (constants_abilities.json, terrorblade_sunder). Pela pesquisa de liquipedia.net/dota2/Terrorblade, essa troca é de praticamente 100% da diferença percentual, com um piso mínimo de vida restante por talento. Usar Sunder custa risco pro próprio Terrorblade, porque um Huskar de propósito com vida baixa (Berserker's Blood escala com %HP perdido) pode puxar o Terrorblade pra perto da morte junto, em vez de salvar alguém.
- o que você faz com ele: durante o salto do Life Break, o Huskar fica debuff immune (constants_abilities.json, huskar_life_break), o que bloqueia o Sunder de alterar a vida dele enquanto estiver no ar; fora dessa janela, a vida baixa natural do Huskar faz o Sunder ser uma aposta arriscada pro próprio Terrorblade.
- itens que viram: Black King Bar (23,2 min) do Huskar garante a imunidade a feitiço que torna o Sunder ainda mais perigoso de usar contra ele, já que ele tanto bloqueia debuff quanto nega qualquer controle que viesse junto.
- como jogar: não tenha medo do Sunder quando estiver de vida baixa de propósito, ele tende a ser pior pro Terrorblade do que pra você. Pressione antes dos 20 min, antes da Metamorphosis render de verdade em farm e dano.
- fonte: pro_dados/huskar.json; pro_dados/terrorblade.json; constants_abilities.json (terrorblade_sunder, huskar_life_break); liquipedia.net/dota2/Terrorblade
