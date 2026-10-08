---
id: confrontos-necrolyte
heroi: Necrophos
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/necrolyte.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/axe.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/luna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/terrorblade.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/abyssal_underlord.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/bristleback.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/night_stalker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shadow_demon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ancient_apparition.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/crystal_maiden.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/necrolyte.md
- https://api.opendota.com/api/constants/aghs_desc
---
## Contra Rubick (rubick)
- placar: 90/200 em pro, 45,0% de vitória pra você (pro_dados/necrolyte.json, confrontos).
- por que importa: é o herói que mais aparece junto com você em partida pro (200 jogos). Não é rival de lane, é support 4/5 que rouba sua ultimate.
- janelas: até 15 min ele fica no mapa controlando ward e usando Fade Bolt/Telekinesis pra zonear, sem power spike de item (Arcane Boots aos 10:18 é só suporte). Aos 17:48 seu Aghanim's Shard e aos 13:42 seu Radiance já estão prontos (pro_dados/necrolyte.json), mas o Rubick também pega Blink aos 21:36 (pro_dados/rubick.json) e nessa janela ele consegue iniciar em você antes de você conectar o combo.
- o que ele faz com você: Spell Steal copia a última magia que você lançou, incluindo Reaper's Scythe, por até 300s com cooldown reduzido em até 30% (constants_abilities.json, rubick_spell_steal). Se ele rouba o Scythe, ele executa SEU time com a mesma conta de dano por vida faltante que você usa nos outros.
- o que você faz com ele: Heartstopper Aura corrói % de vida máxima dele o jogo inteiro e ignora Black King Bar (bkbpierce sim, constants_abilities.json), então mesmo que ele rouba uma magia sua, ele não escapa da sua aura ficando perto. Death Pulse cura seu time no exato momento em que ele tenta zonear com Fade Bolt.
- itens que viram: Linken's Sphere bloqueia de graça o primeiro Fade Bolt ou Telekinesis de alvo único a cada 14s (items.json, sphere), protegendo seu combo de ser cortado antes de sair.
- como jogar: na lane, não lance Reaper's Scythe perto do Rubick a menos que seja pra matar ali; espere ele gastar o Spell Steal roubado ou morrer antes de soltar sua ultimate de novo. Depois do seu Radiance (13:42) e Shard (17:48), force fight: sua aura já está rendendo e ele não tem power spike de item pra acompanhar.
- fonte: pro_dados/necrolyte.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, necrolyte_heartstopper_aura); items.json (sphere)

## Contra Shadow Fiend (nevermore)
- placar: 90/170 em pro, 52,9% de vitória pra você (pro_dados/necrolyte.json, confrontos).
- por que importa: 2º oponente mais comum em pro (170 jogos) e os dois são carries que puxam farm pro próprio lado: a clássica corrida de power spike entre dois core sem precisar de lane em comum.
- janelas: SF sai na frente rápido: Power Treads aos 5:54 e Mask of Madness aos 10:12 (pro_dados/nevermore.json) já dão attack speed e lifesteal pra ele puxar camp e ganhar troca cedo, com Necromastery empilhando 1,35 de dano por alma acumulada (constants_abilities.json). Seu primeiro spike real como pos 1 é o Radiance aos 12:43 (ficha necrolyte.md, pos 1), então até os 12-13 min ele farma e troca melhor. Dos 13 aos 18 min o jogo empata: SF está fechando Yasha (13:18) e Dragon Lance (14:00) enquanto você finaliza Shard (16:43 na ficha, pos 1) e sua aura começa a render. Depois dos 18-20, com SF ainda montando pro Octarine/Scepter (Staff of Wizardry 18:54) e você com Heart (28:42) ou Shiva's (31:43) a caminho, a vantagem de atrito é sua.
- o que ele faz com você: Shadowraze (três variantes) e Requiem of Souls são dano mágico sem bkbpierce (constants_abilities.json), ou seja, seu BKB (27:30 agregado) bloqueia a Requiem se você vestir a tempo; o problema é que ela cresce com o número de almas e pode te zerar antes disso se ele estiver fechando build muito mais rápido.
- o que você faz com ele: Heartstopper Aura drena % de vida dele mesmo com ele parado farmando longe de você, e furou BKB; se ele vestir King Bar tarde pra te matar de perto, sua aura continua rendendo.
- itens que viram: seu Shiva's Guard (armadura + slow em área) neutraliza o DPS de ataque básico dele numa troca prolongada; o Black King Bar dele anula sua Reaper's Scythe (bkbpierce não), então contra SF com BKB a execução precisa vir da aura, não da ultimate.
- como jogar: evite trocar ataque básico com ele antes do seu Radiance; depois disso, jogue pra atrito longo (Heartstopper + Death Pulse), não pra all-in rápido, porque ele ainda vence burst cru até sua aura ter tempo de render.
- fonte: pro_dados/necrolyte.json; pro_dados/nevermore.json; content/fichas/necrolyte.md; constants_abilities.json (nevermore_requiem, nevermore_necromastery, necrolyte_heartstopper_aura)

## Contra Snapfire (snapfire)
- placar: 67/146 em pro, 45,9% de vitória pra você (pro_dados/necrolyte.json, confrontos).
- por que importa: 3º oponente mais comum em pro (146 jogos). Support 2/3/4/5 flex que te interrompe com cookie e burst de Mortimer antes do seu combo saír.
- janelas: ela não tem spike de dano cedo de item (Arcane Boots 10:36 é defensivo); o primeiro ponto de virada é o Aghanim's Shard aos 16:54 (pro_dados/snapfire.json, 1919 dos ~2456 jogos, quase universal), que melhora o Firesnap Cookie com cura e um Mortimer Kiss extra. Isso cai quase junto do seu Shard (17:48) e Radiance (13:42) já ativos, então a partir dos 17 min os dois estão no pico e quem inicia primeiro ganha a troca.
- o que ela faz com você: Mortimer Kisses (8 globs em 5,5s, dano total até 2880 em área) te interrompe um Death Pulse/Scythe em andamento se você não tiver BKB; Firesnap Cookie com Shard estuna 1-2,2s e ainda cura o aliado lançado.
- o que você faz com ele (Mortimer): Heartstopper Aura corrói % de vida do Mortimer e da Snapfire ao mesmo tempo se os dois ficarem perto, e ignora o BKB que ela não tem de qualquer forma (ela é suporte, raramente carrega King Bar).
- itens que viram: seu BKB (27:30) segura o stun do Firesnap Cookie/Shard pra você fechar a Scythe sem ser interrompido; Linken's Sphere bloqueia o primeiro Lucent... (não aplicável aqui) bloqueia o Firesnap Cookie de alvo único.
- como jogar: force o combo antes dela ter o Shard pronto (antes dos 17 min); depois disso, espere ela gastar o Mortimer Kisses pra avançar, porque o cooldown alto da habilidade te dá uma janela livre.
- fonte: pro_dados/necrolyte.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_mortimer_kisses, snapfire_firesnap_cookie); https://api.opendota.com/api/constants/aghs_desc (snapfire shard)

## Contra Ogre Magi (ogre_magi)
- placar: 62/124 em pro, 50,0% de vitória pra você (pro_dados/necrolyte.json, confrontos).
- por que importa: 4º mais comum em pro (124 jogos), hard support (pos 5) que stun-locka com Fireblast + Ignite desde o nível 6.
- janelas: ele não tem item de power spike (GPM 315, Arcane Boots 11:12 é o auge do build dele); o spike dele é de nível, não de item: Multicast (2x aos 75% de chance no nível 1 do talento, melhora com Força) passivo pode dobrar o Fireblast em qualquer ponto do jogo. Seu Radiance (13:42) e Shard (17:48) chegam muito antes de qualquer coisa parecida de item dele.
- o que ele faz com você: Fireblast estuna 1,2s e Ignite tira -25% de velocidade de movimento por até 8s (constants_abilities.json); combinados no nível 6 (~8-10 min) ele te trava tempo suficiente pra o time fechar antes do seu Radiance sair.
- o que você faz com ele: depois dos 14 min, sua Heartstopper Aura já está corroendo % de vida dele e do time dele em qualquer troca perto de torre; seu Death Pulse cura mais rápido que o DPS baixo dele consegue acompanhar.
- itens que viram: Linken's Sphere bloqueia de graça um Fireblast de alvo único a cada 14s; Black King Bar segura o stun pra você completar o combo.
- como jogar: evite ficar no alcance de stun dele antes do seu nível 6/Shard; depois dos 14-17 min, force troca prolongada, porque o DPS dele não acompanha sua aura nem seu Death Pulse.
- fonte: pro_dados/necrolyte.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_ignite, ogre_magi_multicast)

## Contra Hoodwink (hoodwink)
- placar: 63/123 em pro, 51,2% de vitória pra você (pro_dados/necrolyte.json, confrontos).
- por que importa: 5º mais comum em pro (123 jogos), support/mid flex com execução de longo alcance (Sharpshooter) que ameaça seu HP baixo de int ranged.
- janelas: o spike dela também é de nível: Sharpshooter (ultimate, nível 6, ~8-10 min) já causa até 600 de dano carregado nesse nível, crescendo pra 1350 no 18 (constants_abilities.json, hoodwink_sharpshooter). Ela não tem item de burst (Arcane Boots 12:12, Staff of Wizardry 22:48 rumo a Octarine). Até seu Radiance (13:42) sair, um Sharpshooter bem lançado te mata de longe; depois disso sua vida/regen do Death Pulse absorve melhor o nuke.
- o que ela faz com você: Bushwhack estuna 1,5-2,1s perto de árvore e tira sua visão a zero; Sharpshooter quebra (break) e aplica slow além do dano, cortando seu Death Pulse de curar se o break pegar antes.
- o que você faz com ele: sua Heartstopper Aura obriga ela a manter distância (700 de raio), e ela tem pouquíssimo HP pra ficar perto trocando; seu Death Pulse cura o dano do Acorn Shot dela com facilidade.
- itens que viram: Black King Bar segura o Bushwhack (stun) pra você fechar o combo sem ser interrompido; ele não bloqueia o break do Sharpshooter em si, então cuidado com a sequência.
- como jogar: fique fora da distância de árvore no early game e evite ficar parado no alcance do Sharpshooter antes do seu nível 6; depois do Radiance, a troca de atrito é sua.
- fonte: pro_dados/necrolyte.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter)

## Contra Axe (axe)
- placar: 66/122 em pro, 54,1% de vitória pra você (pro_dados/necrolyte.json, confrontos).
- por que importa: 6º mais comum em pro (122 jogos) e é a rival de offlane mais direta: os dois disputam pos 3 em pro (44 jogos seus de pos 3, ficha necrolyte.md) e Culling Blade executa exatamente do mesmo jeito que sua Reaper's Scythe, só que em pure damage.
- janelas: Axe tem spike cedo: Blink aos 15:42 (pro_dados/axe.json) liga o combo Call + Culling Blade bem antes do padrão de outros offlaners. Seu Radiance (13:42-15:31 dependendo da posição) chega quase junto; a partir dos 15-16 min quem conecta primeiro na troca decide. Depois dos 22-23 min ele tem Aghanim's Shard (22:54) turbinando Counter Helix e BKB (25:54); seu BKB sai antes (27:30 agregado é mais tarde, mas sua Heart/Shiva's na faixa 28-31 min reequilibram pela sustentação).
- o que ele faz com você: Berserker's Call (bkbpierce sim) te obriga a atacar ele por até 3s, te impedindo de lançar Death Pulse/Scythe mesmo com BKB vestido; Culling Blade é pure damage com bkbpierce sim e executa quem está com pouca vida igual sua Scythe faz com o time dele.
- o que você faz com ele: Heartstopper Aura ignora o BKB dele e corrói % de vida contínua enquanto ele tenta Call+Helix em você; se ele errar o timing do Culling Blade, sua vida regenera rápido com Death Pulse + Sadist.
- itens que viram: Blade Mail dele reflete seu Death Pulse/Scythe de volta se ele ativar no momento certo, então não acerte ultimate nele com Blade Mail ligado; do seu lado, Shiva's Guard (armadura + slow em área) neutraliza o DPS dele numa troca de ataque básico forçada pelo Call.
- como jogar: carregue vida alta antes de entrar no alcance do Call (315 de raio) e só solte a Scythe nele se tiver certeza que o HP dele já está baixo o bastante pra não virar um Culling Blade de volta; depois do seu Radiance, vença pelo atrito, não pelo all-in.
- fonte: pro_dados/necrolyte.json; pro_dados/axe.json; content/fichas/necrolyte.md; constants_abilities.json (axe_berserkers_call, axe_culling_blade, necrolyte_heartstopper_aura)

## Contra Tiny (tiny)
- placar: 60/111 em pro, 54,1% de vitória pra você (pro_dados/necrolyte.json, confrontos).
- por que importa: carry contra carry clássico mesmo sem lane em comum (igual Alchemist x Morphling): os dois puxam farm pro próprio lado e o confronto se decide no momento em que as builds se cruzam numa luta, não na lane.
- janelas: Tiny monta Blink aos 15:54 (pro_dados/tiny.json), ligando o combo Toss + Avalanche bem na janela em que seu Radiance (12:43 como pos 1, ficha necrolyte.md) já saiu mas seu Shard (16:43) ainda não. Entre 14 e 17 min ele consegue iniciar o combo em você antes da sua aura render; depois dos 17-18, com Shard pronto, a sua Heartstopper já está corroendo e o Avalanche dele (dano fixo) não acompanha.
- o que ele faz com você: Avalanche + Toss combinados chegam a mais de 700 de dano físico/mágico num só combo no nível 4 de cada (constants_abilities.json), suficiente pra matar você antes do Death Pulse curar se pegar os dois.
- o que você faz com ele: Heartstopper Aura corrói % de vida dele continuamente mesmo ele tankando com Grow (bônus de armadura e dano, mas não de resistência mágica); seu Death Pulse cura o burst do combo se você sobreviver ao estouro inicial.
- itens que viram: Black King Bar seu segura o stun do Avalanche (não furou BKB, constants_abilities.json) e o impede de te tossar com segurança; do lado dele, Ogre Axe (18:30) e Blink seguem sendo os itens que habilitam o combo, sem resposta direta pra sua aura.
- como jogar: mantenha distância de 275+ (raio do Toss) até ter BKB ou Shard pronto; depois disso, jogue pra atrito longo, já que o burst dele é tudo-ou-nada por combo.
- fonte: pro_dados/necrolyte.json; pro_dados/tiny.json; content/fichas/necrolyte.md; constants_abilities.json (tiny_avalanche, tiny_toss)

## Contra Luna (luna)
- placar: 56/108 em pro, 51,9% de vitória pra você (pro_dados/necrolyte.json, confrontos).
- por que importa: outro carry contra carry sem lane em comum: ela é a safelane farmer mais jogada em pro contra você (108 jogos) e os dois correm pra fechar item primeiro.
- janelas: Luna é rápida: Power Treads aos 5:36 e Yasha aos 13:42 (pro_dados/luna.json) já dão attack speed alto pra ela puxar camp com Moon Glaive; Manta sai aos 17:12, quase junto do seu Shard (17:48). Até os 17 min ela farma mais rápido (GPM 695 no pro_dados dela contra seus 639); depois disso sua aura já está rendendo em qualquer troca perto, mesmo ela mais rica.
- o que ela faz com você: Eclipse dispara até 12 feixes de Lucent Beam em área (nível 3), e nenhum desses feixes estuna (constants_abilities.json, luna_eclipse), mas o dano somado é suficiente pra te queimar boa vida à distância se ela pegar você sozinho de noite.
- o que você faz com ela: Heartstopper Aura corrói % de vida dela mesmo com Moon Glaive ricocheteando em creep; se ela entrar no raio de 700 pra trocar ataque básico, ela perde a troca de atrito contra sua regen.
- itens que viram: Black King Bar seu bloqueia o stun do Lucent Beam (0,6s, não furou, constants_abilities.json) e o burst do Eclipse concentrado; Shiva's Guard reduz o DPS de ataque básico dela numa troca prolongada.
- como jogar: não fique parado no alcance dela à noite antes do seu nível 6/BKB; force a luta onde sua aura já teve tempo de corroer, de preferência perto dos 17-20 min quando os itens dos dois emparelham.
- fonte: pro_dados/necrolyte.json; pro_dados/luna.json; constants_abilities.json (luna_eclipse, luna_lucent_beam, necrolyte_heartstopper_aura)

## Contra Terrorblade (terrorblade)
- placar: 22/32 em pro, 68,8% de vitória pra você, amostra pequena (32 jogos, abaixo do corte de 30+ usado pros outros filtros, mas é a maior vantagem medida; pro_dados/necrolyte.json, confrontos).
- por que importa: o par carry contra carry mais parecido com o exemplo Alchemist x Morphling: os dois são farmers puros sem lane em comum, e é onde sua vantagem é maior.
- janelas: Terrorblade fecha Manta aos 17:06 e Aghanim's Shard aos 17:24 (pro_dados/terrorblade.json), quase no mesmo minuto do seu Shard (17:48). O problema dele é que Metamorphosis (nível 6, ~8-10 min) e Sunder (disponível desde o nível 1 da ultimate) competem direto com sua Heartstopper Aura: Sunder troca % de vida atual entre os dois, e sua aura já deixou ele com menos vida máxima pra trocar de volta.
- o que ele faz com você: Metamorfoseado ele ataca a distância com dano bônus de até 80 e vira sua maior ameaça de DPS cru; Sunder pode salvá-lo trocando vida contigo quando ele está baixo, mas se você já corroeu % de vida dele com a aura, a troca sai pior pra ele.
- o que você faz com ele: Heartstopper Aura corrói % de vida máxima dele o jogo inteiro (até das ilusões dele que ficarem perto, já que a aura pega todo inimigo no raio); Reaper's Scythe calcula dano pela vida faltante, então um TB que levou Sunder malsucedido fica com HP% baixo e vulnerável à execução.
- itens que viram: Linken's Sphere do lado dele bloqueia sua Scythe uma vez a cada 14s, então ele costuma guardar isso como resposta direta à sua ultimate; do seu lado, Shiva's Guard atrasa o DPS dele metamorfoseado.
- como jogar: deixe sua aura corroer antes de qualquer troca de ataque básico contra ele; se ele sunderar em você, ele já perde valor pela sua aura ter drenado % antes. Não gaste a Scythe nele enquanto ele tiver Sphere disponível.
- fonte: pro_dados/necrolyte.json; pro_dados/terrorblade.json; constants_abilities.json (terrorblade_sunder, terrorblade_metamorphosis, necrolyte_heartstopper_aura, necrolyte_reapers_scythe)

## Contra Underlord (abyssal_underlord)
- placar: 43/64 em pro, 67,2% de vitória pra você (pro_dados/necrolyte.json, confrontos).
- por que importa: offlane tanque que também vive de aura e drenagem de dano, uma das maiores vantagens medidas com 30+ jogos.
- janelas: Underlord fecha Soul Ring aos 7:12 e sobe pra Aghanim's Scepter aos 23:54 (pro_dados/abyssal_underlord.json, 1186 dos ~1889 jogos, quase padrão), o que adiciona Pit of Malice nos dois portais do Fiend's Gate. Seu Radiance (13:42) e Shard (17:48) chegam bem antes do Scepter dele; até os 23-24 min você já está rendendo dano de aura enquanto ele ainda monta a utilidade do time.
- o que ele faz com você: Pit of Malice prende e dá dano em área por até 12s de duração total, intervalo de 3,6s (constants_abilities.json), te atrasando pra conectar o combo; Atrophy Aura reduz seu dano base em até 32% perto dele.
- o que você faz com ele: Heartstopper Aura corrói % de vida dele mesmo ele parado numa pit; Death Pulse cura seu time no exato raio onde o Pit of Malice castigaria.
- itens que viram: Black King Bar seu segura o root do Pit (não furou, constants_abilities.json); do lado dele, o Scepter (Fiend's Gate com Pit nos dois portais) vira zoneamento de mapa, não dano direto, então não ameaça sua vida tanto quanto atrasa sua rota.
- como jogar: evite entrar em pit sem BKB; force fight antes do Scepter dele (antes dos 23-24 min), já que depois disso ele controla espaço de mapa melhor que você consegue furar.
- fonte: pro_dados/necrolyte.json; pro_dados/abyssal_underlord.json; constants_abilities.json (abyssal_underlord_pit_of_malice, abyssal_underlord_atrophy_aura)

## Contra Bristleback (bristleback)
- placar: 39/63 em pro, 61,9% de vitória pra você (pro_dados/necrolyte.json, confrontos).
- por que importa: outro tanque de aura/stack que deveria ser pesadelo de atrito, mas sua Heartstopper (% de vida máxima) ignora a redução de dano dele contra ataque básico, por isso a vantagem é grande.
- janelas: ele fecha Aghanim's Shard aos 18:24 (pro_dados/bristleback.json, 1196 dos ~1380 jogos, quase universal), que dá Hairball em área. Isso é só meio minuto depois do seu Shard (17:48); a diferença é que o dano dele (Quill Spray) empilha com Warpath, enquanto o seu já está corroendo % fixo desde o Radiance (13:42).
- o que ele faz com você: Quill Spray é físico com bkbpierce sim (constants_abilities.json) e empilha dano por hit recente, então mesmo com seu BKB ele continua te acertando; Bristleback (passivo) reduz o dano que ele recebe por trás/lado, mas isso não reduz dano mágico percentual da sua aura.
- o que você faz com ele: Heartstopper Aura corrói % de vida máxima dele, e essa % não é reduzida pela resistência física do passivo dele (a aura é dano mágico direto); Death Pulse cura seu time contra o DPS físico constante dele.
- itens que viram: Shiva's Guard seu (armadura + slow em área) reduz o volume de ataques físicos que viram Quill Spray nele; do lado dele, Sange (21:42, rumo a Sange & Yasha) ajuda a sustentar, mas não resolve a % que ele perde pra sua aura.
- como jogar: não tente vencer ele numa troca de ataque básico de frente cedo; deixe a Heartstopper Aura corroer e force o fim da luta com Reaper's Scythe quando ele já estiver com % de vida baixo.
- fonte: pro_dados/necrolyte.json; pro_dados/bristleback.json; constants_abilities.json (bristleback_quill_spray, bristleback_bristleback, necrolyte_heartstopper_aura)

## Contra Night Stalker (night_stalker)
- placar: 11/31 em pro, 35,5% de vitória pra você, pior matchup medido com 30+ jogos (pro_dados/necrolyte.json, confrontos; confirma o pior-matchups já listado em content/fichas/necrolyte.md).
- por que importa: um dos piores confrontos medidos do herói: silence de área que te impede de lançar Death Pulse/Scythe justo na janela em que você ainda não tem Radiance pronto.
- janelas: Night Stalker não depende de item pra ser forte: Crippling Fear (silence em área) e Void já estão disponíveis desde o nível 6 (~8-10 min), bem antes do seu Radiance (13:42-15:31 dependendo da posição). De noite a duração do silence sobe pra até 6s (constants_abilities.json) e ele some de dia, voltando ameaçador a cada ciclo. Mesmo com Blink dele saindo só aos 17:06 (pro_dados/night_stalker.json), o gank pré-15min sem blink já é suficiente contra um Necrophos sem itens.
- o que ele faz com você: Crippling Fear silencia e causa dano contínuo por segundo (até 40, escalando com nível) enquanto você fica perto; Void slow 50% de movimento e ataque, com mini-stun de noite, te impedindo de kitar ou de castar a tempo.
- o que você faz com ele: depois do seu Radiance e Shard, sua aura já está corroendo % de vida dele, mas a janela de perigo real (pré-15min) é toda dele, não sua; seu Ghost Shroud ajuda a sobreviver ao físico dele mas não ao silence.
- itens que viram: Black King Bar bloqueia Crippling Fear e Void (bkbpierce não nos dois, constants_abilities.json), ao contrário do que acontece contra Axe/Bristleback, então aqui o BKB resolve de verdade; Linken's Sphere bloqueia o Void de alvo único uma vez a cada 14s como alternativa mais barata.
- como jogar: evite farmar sozinho de noite antes do seu nível 6/BKB; priorize Arcane Boots/Wand cedo pra sustentar e peça gank do seu time contra ele antes dos 15 min, porque depois do seu Radiance o jogo vira a seu favor.
- fonte: pro_dados/necrolyte.json; pro_dados/night_stalker.json; content/fichas/necrolyte.md; constants_abilities.json (night_stalker_crippling_fear, night_stalker_void)

## Contra Shadow Demon (shadow_demon)
- placar: 14/39 em pro, 35,9% de vitória pra você, amostra média, confirma pior-matchup já listado em content/fichas/necrolyte.md (pro_dados/necrolyte.json, confrontos).
- por que importa: um dos piores confrontos medidos: ele te bane da luta no momento exato em que você ia lançar o combo.
- janelas: ele não depende de item (GPM 314); Disruption e Demonic Purge já ameaçam desde o nível 6 (~8-10 min), bem antes do seu Radiance. Blink dele sai tarde (23:54, pro_dados/shadow_demon.json), então o perigo real é early/mid, não um spike de item específico.
- o que ele faz com você: Disruption te bane do campo de batalha por 2,75s e cria duas ilusões suas com dano bônus quando você volta (constants_abilities.json), interrompendo seu Death Pulse/Scythe no momento do cast; Demonic Purge remove seus buffs positivos (incluindo Ghost Shroud) e causa até 600 de dano mágico furando BKB (bkbpierce sim).
- o que você faz com ele: Heartstopper Aura corrói % de vida dele enquanto ele fica perto tentando acertar o combo; Sadist te dá regen extra se você conseguir uma kill no meio da troca, compensando o tempo perdido banido.
- itens que viram: Black King Bar bloqueia o Disruption (bkbpierce não, constants_abilities.json) mas não o dano do Demonic Purge depois (bkbpierce sim); Linken's Sphere bloqueia o Disruption de alvo único uma vez a cada 14s, o que é a resposta mais direta que você tem contra o cast inicial.
- como jogar: jogue Linken's Sphere como prioridade situacional contra ele; evite engajar sozinho fora do alcance do seu time, porque o Disruption sozinho já cancela seu combo inteiro.
- fonte: pro_dados/necrolyte.json; pro_dados/shadow_demon.json; content/fichas/necrolyte.md; constants_abilities.json (shadow_demon_disruption, shadow_demon_demonic_purge); items.json (sphere)

## Contra Ancient Apparition (ancient_apparition)
- placar: 13/35 em pro, 37,1% de vitória pra você, amostra média, confirma pior-matchup já listado em content/fichas/necrolyte.md (pro_dados/necrolyte.json, confrontos).
- por que importa: o contra-argumento direto do seu plano de jogo tardio: Ice Blast impede regeneração/cura e executa quem cai abaixo de ~12-14% de vida, o que anula Heart of Tarrasque, Sadist e até o Death Pulse no alvo marcado.
- janelas: o spike dela é de nível, não de item: Ice Blast (ultimate, nível 6, ~8-10 min) já é ameaça de execução desde o early game. O único item de impacto é o Aghanim's Shard aos 24:24 (pro_dados/ancient_apparition.json, 384 dos ~761 jogos), que congela quem já estiver sob Cold Feet. Isso significa que o período perigoso dela é o jogo inteiro, não uma janela específica: mesmo depois do seu Heart (30:30), um Frostbitten te deixa sem curar.
- o que ela faz com você: Ice Blast é dano mágico com bkbpierce sim (constants_abilities.json) que te impede de regenerar/curar por até 12s e te mata instantaneamente se sua vida cair abaixo de ~12-14% enquanto Frostbitten; nenhum BKB resolve isso.
- o que você faz com ela: Heartstopper Aura corrói % de vida dela desde o início, e ela tem HP baixo de suporte; sua melhor resposta é matar ela antes que ela acerte o Ice Blast, não sobreviver depois de acertado.
- itens que viram: Linken's Sphere bloqueia o Cold Feet de alvo único (ele não furou, constants_abilities.json), cortando a combinação que trava o Ice Blast; contra o Ice Blast em si (ele é AoE e furou BKB) a única resposta real é distância e timing, não item defensivo.
- como jogar: nunca jogue vida baixa perto dela depois que o Ice Blast estiver disponível; priorize focá-la primeiro em teamfight, já que seu plano de regen tardio simplesmente não funciona enquanto ela estiver viva.
- fonte: pro_dados/necrolyte.json; pro_dados/ancient_apparition.json; content/fichas/necrolyte.md; constants_abilities.json (ancient_apparition_ice_blast); items.json (sphere)

## Contra Crystal Maiden (crystal_maiden)
- placar: 31/82 em pro, 37,8% de vitória pra você, pior matchup com mais jogos medidos (82 jogos, pro_dados/necrolyte.json, confrontos; confirma pior-matchup já listado em content/fichas/necrolyte.md).
- por que importa: é o pior confronto com amostra grande o suficiente pra confiar: ela te interrompe com root e nuke bem antes do seu primeiro item.
- janelas: Frostbite (nível 1) já está disponível na lane, prendendo você sem poder atacar ou se mover por até 3s; Freezing Field (ultimate, nível 6, ~8-10 min) é um channel de dano em área que pode te queimar boa vida antes do seu Radiance (13:42). O item de impacto dela é o Aghanim's Shard aos 17:42 (pro_dados/crystal_maiden.json, 719 dos ~1341 jogos), quase no mesmo minuto do seu Shard (17:48): ambos ficam mais fortes juntos.
- o que ela faz com você: Frostbite imobiliza e causa dano contínuo (100 por segundo contra a maioria dos alvos), cortando sua rota de farm/combo cedo; Freezing Field com Aghanim's Scepter permite ela se mover e atacar durante o channel, aumentando o risco de ela te acertar em cheio sem precisar ficar parada.
- o que você faz com ela: Heartstopper Aura corrói % de vida dela desde o primeiro contato, e ela tem o HP mais baixo da lista (hard support); se você sobreviver ao root inicial, Death Pulse cura o que ela queimou.
- itens que viram: Black King Bar bloqueia Freezing Field inteira se você já estiver com ele ativo quando ela começar a canalizar (bkbpierce não, constants_abilities.json); Linken's Sphere bloqueia o Frostbite de alvo único uma vez a cada 14s, resposta mais barata pra lane.
- como jogar: jogue a lane com cautela de posicionamento contra o Frostbite; depois do seu nível 6/Shard, force o confronto antes dela conseguir setup de Freezing Field num espaço fechado, porque seu plano de atrito simplesmente não tem tempo de render se ela te prender primeiro.
- fonte: pro_dados/necrolyte.json; pro_dados/crystal_maiden.json; content/fichas/necrolyte.md; constants_abilities.json (crystal_maiden_frostbite, crystal_maiden_freezing_field); items.json (sphere)
