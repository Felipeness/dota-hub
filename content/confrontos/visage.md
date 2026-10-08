---
id: confrontos-visage
heroi: Visage
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/visage.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/pudge.json
- dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- dota-hub-conteudo-novo/pro_dados/tidehunter.json
- dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- dota-hub-conteudo-novo/pro_dados/mars.json
- dota-hub-conteudo-novo/pro_dados/shredder.json
- dota-hub-conteudo-novo/pro_dados/dawnbreaker.json
- dota-hub-conteudo-novo/pro_dados/queenofpain.json
- dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- dota-hub-conteudo-novo/pro_dados/spirit_breaker.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/items.json
---

## Por que esses 14

Visage não tem posição fixa: joga tanto mid quanto offlane e suporte, dependendo do draft. Os confrontos de OpenDota (`pro_dados/visage.json`, partidas de liga 7.40+7.41) têm no máximo 36 jogos cada, então a régua de "30+ jogos" quase não é cumprida: só Shadow Fiend (36), Snapfire (36) e Rubick (33) passam dela. Por isso a lista mistura os quatro critérios pedidos: volume bruto contra Visage, rivais de posição parecida (mid, offlane ou suporte), os extremos de vitória disponíveis e, nos casos de amostra pequena, aviso explícito no texto.

## Contra Shadow Fiend (nevermore)
- placar: 17 vitórias em 36 jogos de pro para Visage, 47,2% (pro_dados/visage.json, confrontos)
- por que importa: é o confronto com mais jogos de pro no banco de dados do herói, e entre os três únicos com 30+ jogos é o pior resultado de Visage, a maior desvantagem "confirmada" da lista
- janelas: antes dos 10 min Shadow Fiend já ameaça de primeira, Necromastery rouba alma de quem ele mata (até 20 almas, 1,35 de dano cada) e Shadowraze bate 85 a 280 de dano num raio de 250 sem quase cast point (constants_abilities.json). Visage só tem sustain real por volta de 8 min (tranquil_boots, mediana de 140 jogos de pro) e o primeiro item de peso (Drum/ancient_janggo) sai aos 11,4 min. Dos 12 aos 20 min o Shadow Fiend de pro já fechou Power Treads (5,9 min), Boots of Elves (6,9) e Blade of Alacrity (12,7), puro dano de ataque; depois dos 22-23 min, com Aghanim's Shard (mediana 22,9 min) e Vladmir's (14,1 min) prontos, Visage vira o jogo em luta de grupo
- o que ele faz com você: Shadowraze repetido (cooldown de 3s por raze, 3 razes) controla o espaço de farm e pune Visage parado na lane; Requiem of Souls (até 20 linhas, cast de 1,67s) estoura mesmo que Shadow Fiend morra no processo, então ele não precisa sobreviver pra te acertar
- o que você faz com ele: Grave Chill rouba 25 a 70 de velocidade de ataque dele por 5s, cortando o DPS de auto-attack bem na hora que ele mais precisa fechar o farm; Soul Assumption ignora a mobilidade dele, já que é bolt de 1000 de velocidade
- itens que viram: Orchid Malevolence em Visage silencia o Shadow Fiend por 5s antes da Requiem (items.json); do lado dele, Linken's ou Lotus Orb neutralizam o pick-off de Soul Assumption/Stone Form
- como jogar: evite trocar auto-attack antes dos 10 min, deixe o Familiar tankar a primeira raze, e guarde Soul Assumption pra quando o time inimigo já tiver gastado follow-up nele
- fonte: pro_dados/visage.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, visage_grave_chill, visage_soul_assumption); items.json (orchid)

## Contra Snapfire (snapfire)
- placar: 19 vitórias em 36 jogos de pro para Visage, 52,8% (pro_dados/visage.json)
- por que importa: empatado com Shadow Fiend no volume de jogos, e as duas funcionam como suporte, papel que Visage também ocupa
- janelas: Snapfire tem curva parecida com a de Visage (gpm 413 contra 486, lh10 21 contra 34, pro_dados). O divisor é o nível 6: Mortimer Kisses já é ameaça por volta dos 7-10 min, 8 projéteis de 180 a 360 de dano cada num raio de 275 (constants_abilities.json), e o Shard dela sai cedo pra suporte, mediana de 16,9 min. Visage só tem resposta de verdade com Pipe of Insight, item de 3725 de ouro (items.json) que fica pronto tarde
- o que ela faz com você: Mortimer Kisses acerta os dois Familiares de uma vez se eles estiverem perto de Visage, porque o raio de 275 por impacto cobre o aglomerado inteiro; Firesnap Cookie (stun de 1 a 2,2s, recarga de 21 a 15s com carga) trava o combo antes que Visage reaja
- o que você faz com ela: Grave Chill rouba a velocidade dela bem na hora que ela precisa reposicionar depois da ultimate; Soul Assumption carrega rápido porque o combo dela (Scatterblast + Mortimer Kisses) já passa de 100 de dano em qualquer herói perto
- itens que viram: Pipe of Insight (barreira de 425 de dano mágico, raio 1200, items.json) é a resposta direta à Mortimer Kisses em área; separar os Familiares em vez de andar grudados em Visage reduz o dano por impacto
- como jogar: não agrupe os Familiares perto de Visage quando ela estiver com mana pra ultimate; puna a Snapfire fora da janela da Firesnap Cookie, logo depois dela usar
- fonte: pro_dados/visage.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_mortimer_kisses, snapfire_firesnap_cookie, visage_grave_chill, visage_soul_assumption); items.json (pipe)

## Contra Rubick (rubick)
- placar: 19 vitórias em 33 jogos de pro para Visage, 57,6% (pro_dados/visage.json)
- por que importa: terceiro em volume de jogos e, entre os três confrontos com 30+ jogos, o melhor resultado de Visage na lista inteira
- janelas: Rubick não tem power spike de dano, ele farma suporte (gpm 374, lh10 17, pro_dados) e só vira ameaça de pick-off depois do Blink Dagger, mediana de 21,6 min. Até lá Visage já passou pelas próprias janelas de 11 min (Drum) e 14 min (Vladmir's), então na maior parte do jogo Visage tem mais poder de combate
- o que ele faz com você: Spell Steal (constants_abilities.json) copia o último feitiço que Visage lançou, por 180 a 300s; se Visage estourar Soul Assumption perto de um Rubick vivo, ele pode roubar o próprio nuke de Visage e virar contra o time dele. Telekinesis (lift de até 1,7s, stun de até 1,5s) é o pick-off dele fora disso
- o que você faz com ele: Rubick tem vida baixa de suporte, então o combo Grave Chill (rouba fuga) + Stone Form do Familiar é suficiente pra matá-lo sozinho, sem precisar gastar Soul Assumption nele
- itens que viram: evitar lançar Soul Assumption dentro do alcance de 1000 do Spell Steal quando o Rubick estiver vivo e visível; se ele já gastou Fade Bolt ou Telekinesis, o roubo não pega o nuke grande
- como jogar: mate o Rubick primeiro em luta de grupo sempre que der, e force ele a gastar o feitiço antes de Visage soltar a ultimate perto dele
- fonte: pro_dados/visage.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis, visage_soul_assumption)

## Contra Tusk (tusk)
- placar: 12 vitórias em 26 jogos de pro para Visage, 46,2%, amostra média (pro_dados/visage.json)
- por que importa: quarto em volume de jogos, e divide com Visage o papel de suporte que inicia troca em vez de farmar
- janelas: Tusk é perigoso de nível 1, Ice Shards e Walrus Punch não dependem de item, mas o grande salto dele é o Blink Dagger próprio, mediana de 19 min (pro_dados/tusk.json). Antes disso, dos 0 aos 10 min, é a pior janela de Visage na lane, sem sustain ainda (tranquil só sai aos 8,4 min de mediana)
- o que ele faz com você: Snowball (stun de 0,6 a 1,2s, dano crescente com aliado embarcado, alcance de 1150) fecha roam de longe; Walrus Punch é crítico de 200 a 300% com empurrão de 1000 de distância, alto risco pra Visage sem Familiar perto pra bloquear
- o que você faz com ele: Grave Chill rouba a velocidade dele no corpo a corpo, reduzindo o dano por segundo do Walrus Punch; Soul Assumption carrega rápido porque Tusk troca vida de perto; os Familiares bloqueiam fisicamente o caminho do Snowball
- itens que viram: Wind Lace e Tranquil Boots cedo em Visage (mediana de 8 e 8,4 min) reduzem a chance de um roam pré-Blink pegar ele parado; depois dos 19 min, BKB em Visage ignora o stun chain de Ice Shards + Snowball
- como jogar: na lane, fique perto de creep e torre antes do nível 6; depois que o Blink do Tusk sair, jogue em grupo
- fonte: pro_dados/visage.json; pro_dados/tusk.json; constants_abilities.json (tusk_snowball, tusk_walrus_punch, tusk_tag_team, visage_grave_chill)

## Contra Pudge (pudge)
- placar: 10 vitórias em 25 jogos de pro para Visage, 40%, a pior porcentagem entre os confrontos de alto volume (pro_dados/visage.json)
- por que importa: quinto em volume de jogos e divide lane com Visage em boa parte dos drafts
- janelas: Pudge ameaça desde o minuto 0, Meat Hook (150 a 360 de dano, alcance de 1300, sem custo de item) não precisa de build pra acertar. Visage é alvo fácil de hook até sair da fase solo, porque não tem blink nem dash próprio. Depois dos 15-16 min os dois convergem pra Blink Dagger (Pudge mediana 19,5 min) e a luta vira mais sobre posicionamento em grupo do que sobre a lane
- o que ele faz com você: um hook conectado seguido de Dismember (canalizado 2,75s, 80 a 120 de dano por tick x6 ticks, cura o Pudge pelo total) mata Visage sozinho antes do nível 6 se ele estiver sem Familiar perto; Rot (dano em área, também machuca o próprio Pudge) pune Visage parado junto dos Familiares
- o que você faz com ele: depois de hookado, Grave Chill trava a fuga via Rot-kite dele; Stone Form do Familiar mais Soul Assumption completam o combo de abate se o time seguir rápido, já que Dismember cura mas não evita stun
- itens que viram: não existe item que bloqueie o hook em si (não é alvo de Lotus Orb do jeito usual), então a resposta é posição: ficar atrás da wave de creep e fora de 1300 de alcance sem visão
- como jogar: trave a rota de hook com ward/Familiar antes de farmar perto do rio, e não force trade de perto contra um Pudge com mana pra Rot
- fonte: pro_dados/visage.json; pro_dados/pudge.json; constants_abilities.json (pudge_meat_hook, pudge_dismember, pudge_rot)

## Contra Ember Spirit (ember_spirit)
- placar: 12 vitórias em 24 jogos de pro para Visage, 50%, equilibrado (pro_dados/visage.json)
- por que importa: mesma rota de Visage quando ele joga de mid, e um dos seis confrontos mais jogados
- janelas: Ember farma rápido (gpm 558, lh10 53, pro_dados/ember_spirit.json) e ganha mobilidade pelo Fire Remnant desde o nível 6 (3 cargas, recarga de 35s cada), então a janela de pick-off dele começa cedo e se repete a cada troca de carga. Visage só equilibra o duelo depois do Drum (11,4 min) e principalmente do Vladmir's (14,1 min), quando os Familiares aguentam mais o combo de Sleight of Fist
- o que ele faz com você: Sleight of Fist ataca tudo num raio de até 550 com bônus de 50 a 170 de dano contra herói (constants_abilities.json), dano instantâneo que os Familiares (450 a 750 de vida) sentem rápido; Searing Chains prende Visage parado pro resto do combo
- o que você faz com ele: Grave Chill rouba a fuga dele bem no momento em que ele tenta sair depois de um remnant; o dash de Ember não tem imunidade a debuff, então Stone Form bem cronometrado interrompe a sequência antes do Sleight
- itens que viram: BKB nos dois lados decide essa troca, quem tiver primeiro ignora o stun/chain do outro; Pipe em Visage reduz o burst de área de Sleight of Fist no grupo
- como jogar: espalhe os Familiares em vez de andar colados em Visage perto de onde Ember tem remnant plantado
- fonte: pro_dados/visage.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_sleight_of_fist, ember_spirit_fire_remnant)

## Contra Tidehunter (tidehunter)
- placar: 10 vitórias em 23 jogos de pro para Visage, 43,5%, amostra média, não chega nos 30 jogos (pro_dados/visage.json)
- por que importa: uma das piores taxas da lista fora do grupo de 30+ jogos, e rival direto de offlane, lane que Visage também disputa
- janelas: Tide farma bem na solo (lh10 56, pro_dados/tidehunter.json) e vira iniciador depois do próprio Blink, mediana de 21,2 min. Antes disso o confronto é de poke: Gush dele (100 a 280 de dano, -40% de velocidade, 700 de alcance) contra o Grave Chill de Visage. Visage junta sustain (tranquil 8,4 min) e depois o Shard (22,9 min) perto da mesma época do Blink dele, então mesmo com o placar desfavorável o fim de jogo fica mais parelho do que a diferença de posição sugere
- o que ele faz com você: Ravage (stun de 2 a 2,4s, raio de 1250) organiza o time inteiro em cima de Visage se ele estiver mal posicionado; Anchor Smash é cleave físico, bom contra os Familiares agrupados
- o que você faz com ele: Gravekeeper's Cloak reduz justamente o tipo de dano que Tide mais usa (físico, Anchor Smash), até 80% com as 4 camadas no talento máximo (20% por camada, constants_abilities.json); Soul Assumption ignora Kraken Shell, que só bloqueia dano físico
- itens que viram: Pipe of Insight em Visage neutraliza boa parte do combo de Ravage em área; Kraken Shell ativo (dobra o bloqueio, -40% de velocidade por 4s) é a resposta dele a um Visage que tenta kitar com Grave Chill
- como jogar: não pare perto da bola de Ravage em grupo, e puna o Kraken Shell ativo, Tide fica lento 4s inteiros
- fonte: pro_dados/visage.json; pro_dados/tidehunter.json; constants_abilities.json (tidehunter_ravage, tidehunter_gush, tidehunter_kraken_shell, visage_gravekeepers_cloak)

## Contra Templar Assassin (templar_assassin)
- placar: 10 vitórias em 23 jogos de pro para Visage, 43,5% (pro_dados/visage.json)
- por que importa: um dos herois mais jogados contra Visage em pro (23 jogos) e um dos carries mais presentes no jogo profissional em geral (1.681 partidas no recorte 7.40+7.41 do próprio herói, pro_dados/templar_assassin.json), do tipo que aparece mesmo sem dividir lane direto com Visage
- janelas: TA tem o farm mais alto da lista (gpm 680, lh10 73, nível final 22) e fecha Desolator aos 14,3 min, ponto em que já causa dano físico amplificado em qualquer Familiar. Blink dela sai aos 17,4 min, antes do Shard de Visage (22,9 min), então a maior parte do meio de jogo favorece a TA se ela conseguir se isolar pra usar Meld
- o que ela faz com você: Meld (invisível parada) seguido de ataque dá 50 a 200 de dano bônus e reduz 2 a 8 de armadura por 6s (constants_abilities.json), o suficiente pra abrir um Familiar sozinho; Refraction (3 a 6 instâncias, escudo de 30 por instância) segura o dano dos Familiares sem gastar item
- o que você faz com ela: Grave Chill rouba 25 a 70 de velocidade de ataque, direto no que sustenta o DPS dela e atrasa quanto tempo ela leva pra gastar as instâncias de Refraction; Stone Form não é dano, então passa direto pelo escudo da Refraction (ele só absorve dano, não desabilita stun)
- itens que viram: gaste os primeiros golpes dos Familiares pra estourar a Refraction antes de soltar Soul Assumption nela; Orchid/Bloodthorn em Visage silenciam a resposta dela depois do combo
- como jogar: não brigue com ela melada e sem visão; use Stone Form pra travar o combo assim que ela aparecer, já que o escudo dela não bloqueia stun
- fonte: pro_dados/visage.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_meld, templar_assassin_refraction, visage_grave_chill, visage_stone_form_self_cast)

## Contra Mars (mars)
- placar: 11 vitórias em 21 jogos de pro para Visage, 52,4% (pro_dados/visage.json)
- por que importa: rival direto de offlane, os dois competindo pela mesma lane solo em boa parte dos drafts de 7.41
- janelas: Mars tem o Blink mais cedo de toda essa lista, mediana de 15,2 min (pro_dados/mars.json), bem antes do Shard de Visage (22,9 min). Entre os 15 e os 23 min é a janela de risco de Visage pra uma iniciação de Arena of Blood. Na lane antes disso, Spear of Mars (900 a 1200 de alcance, empala em árvore/parede, stun de 1,3 a 2,2s) já ameaça desde o nível 1
- o que ele faz com você: Arena of Blood (raio de 550, 5,5s, lanças de 80 a 240 de dano nas bordas) prende Visage e os Familiares juntos, sem espaço pra escapar o cerco; Bulwark bloqueia 40 a 70% do dano físico de frente, então ele aguenta bem o Familiar
- o que você faz com ele: o kit de Visage é todo mágico (Soul Assumption, dano do Stone Form), e Bulwark só reduz dano físico, não faz nada contra isso; Grave Chill nega a perseguição dele depois de uma Spear errada
- itens que viram: Shard de Visage reforça o Stone Form (stun de 0,8 a 1,2s em 375 de raio, dano 60/100/140, constants_abilities.json), o que ajuda a sobrepor o único stun de Mars numa troca longa
- como jogar: não force troca perto de árvore ou penhasco antes do nível 6 dele; depois que ele tiver Blink, mantenha distância de 1200 do que puder virar Arena of Blood
- fonte: pro_dados/visage.json; pro_dados/mars.json; constants_abilities.json (mars_arena_of_blood, mars_spear, mars_bulwark, visage_soul_assumption, visage_stone_form_self_cast)

## Contra Timbersaw (shredder)
- placar: 13 vitórias em 18 jogos de pro para Visage, 72,2%, amostra pequena (pro_dados/visage.json)
- por que importa: maior vantagem de toda a lista, mesmo com amostra pequena, e também rival de offlane
- janelas: Timbersaw escala com árvore, Whirling Death ganha dano extra por árvore destruída (9 a 30 por árvore, constants_abilities.json) e Reactive Armor empilha armadura só contra ataque (4x o valor por acerto de herói). Isso não ajuda em nada contra o kit 100% mágico de Visage. O item de defesa dele, Kaya and Sange (mediana 18,1 min), dá resistência a status, que encurta o stun de Visage mas não apaga o dano mágico
- o que ele faz com você: Whirling Death rouba atributo (13% do primário, 5% universal) e dói em área, boa troca contra Familiar agrupado; Timber Chain fecha distância rápido se tiver árvore por perto
- o que você faz com ele: Soul Assumption e o dano do Stone Form ignoram tanto a Reactive Armor (só reduz físico) quanto boa parte da resistência a status do Kaya and Sange (ela encurta duração de debuff, não elimina dano); Gravekeeper's Cloak reduz o dano mágico dele de volta
- itens que viram: Orchid/Bloodthorn em Visage furam a resistência a status dele na janela de kill; do lado dele, só item de escudo mágico puro (tipo Pipe) ajuda de verdade, já que Kaya and Sange é parcial
- como jogar: brigue fora de área com muita árvore, puna antes dele empilhar Reactive Armor, e priorize o nuke de Soul Assumption nele em vez de gastar tudo nos aliados
- fonte: pro_dados/visage.json; pro_dados/shredder.json; constants_abilities.json (shredder_whirling_death, shredder_reactive_armor, visage_soul_assumption, visage_gravekeepers_cloak)

## Contra Dawnbreaker (dawnbreaker)
- placar: 13 vitórias em 18 jogos de pro para Visage, 72,2%, amostra pequena, mesma vantagem de Timbersaw (pro_dados/visage.json)
- por que importa: segunda maior vantagem da lista, e rival de offlane/suporte, lane que Visage também disputa
- janelas: Dawnbreaker é mais perigosa corpo a corpo antes dos 10 min, quando Luminosity (a cada 3º ataque, 125 a 200 de dano bônus mais cura) já rende trade. Phase Boots dela saem aos 8,2 min, perto da própria janela de sustain de Visage (tranquil 8,4 min). O Shard dela (mediana 20,8 min) reforça a Solar Guardian perto da mesma época do Shard de Visage (22,9), então os dois picos coincidem
- o que ela faz com você: no corpo a corpo, Luminosity come os Familiares rápido, baixa armadura deles; Solar Guardian pode estourar e atordoar Visage de qualquer ponto do mapa se um aliado dela estiver a até 350 de distância dele
- o que você faz com ele: Grave Chill rouba a velocidade de ataque que alimenta os procs de Luminosity, atrasando a cura dela; Soul Assumption é um nuke só, mais rápido que a cura percentual dela consegue repor cedo no jogo
- itens que viram: Gravekeeper's Cloak absorve o dano repetido dos ataques dela, melhor resposta que qualquer item pontual; Visage não precisa de item especial aqui, só jogar o combo antes dela sustentar
- como jogar: evite troca longa de auto-attack com ela antes dos 10 min, e force o fim da troca rápido com Soul Assumption em vez de brigar no corpo a corpo
- fonte: pro_dados/visage.json; pro_dados/dawnbreaker.json; constants_abilities.json (dawnbreaker_luminosity, dawnbreaker_solar_guardian, visage_grave_chill, visage_soul_assumption)

## Contra Queen of Pain (queenofpain)
- placar: 12 vitórias em 24 jogos de pro para Visage, 50% (pro_dados/visage.json)
- por que importa: rival de mid, confronto parelho mesmo com o kit de burst dela mais forte no early/mid game
- janelas: QoP farma rápido (gpm 572, lh10 56) e já fecha Kaya aos 13,9 min, item que amplifica o nuke dela bem antes do Shard de Visage (22,9 min). Sonic Wave (325 a 625 de dano, raio final de 450) já ameaça desde o nível 6, e o Blink dela não depende de item, só de cast point (0,33s). Até Visage chegar no próprio pico dos 22-23 min, ela está na frente na maioria das janelas
- o que ela faz com você: Blink mais Sonic Wave aperta um Familiar inteiro (450 a 750 de vida) numa tacada só; Shadow Strike (50 a 140 de dano inicial mais DoT, slow de até 55%) prende Visage pra ela ou pro time fechar
- o que você faz com ela: Grave Chill rouba a velocidade dela durante os 5s de duração, atrasando o reposicionamento depois de um Blink gasto; Stone Form, se vier primeiro, interrompe o combo antes do Sonic Wave sair
- itens que viram: BKB em Visage é quase obrigatório aqui, sem ele o Sonic Wave sozinho já ameaça matar; Linken's Sphere segura especificamente o Shadow Strike, que é alvo único
- como jogar: não fique parado no alcance de 600 da Shadow Strike sem necessidade, e jogue perto dos Familiares pra dividir o alvo do Sonic Wave
- fonte: pro_dados/visage.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_sonic_wave, queenofpain_shadow_strike, visage_grave_chill, visage_stone_form_self_cast)

## Contra Dragon Knight (dragon_knight)
- placar: 10 vitórias em 17 jogos de pro para Visage, 58,8%, amostra pequena a média (pro_dados/visage.json)
- por que importa: rival de mid/offlane flex, cruza com as partidas de Visage no mid
- janelas: DK é tanque, não burst. Dragon Blood dá regen e armadura passiva (dobrada em Elder Dragon Form) desde cedo, e ele vira atirador de longo alcance com splash a partir do nível 6, mas sem dano mágico de verdade. O Blink dele sai aos 16,2 min, perto da própria curva de Visage. Como o kit dele é físico e sustentado, não burst mágico, Visage aguenta melhor essa troca do que o nome "carry" sugere
- o que ele faz com você: Dragon Tail (stun de 1,8 a 2,4s) trava Visage pro resto do time; em Elder Dragon Form, o splash do ataque dele já é 75% em área de 275 no nível 3 (vai a 100% em 350 só com Aghanim's Scepter, constants_abilities.json) e atinge os Familiares agrupados
- o que você faz com ele: Soul Assumption ignora armadura e regen, que é toda a defesa dele; Grave Chill rouba a velocidade de ataque dele, cortando justamente o DPS sustentado que é a força principal de DK
- itens que viram: Pipe em Visage absorve o dano em área da forma de dragão; não existe item que resolva o Dragon Tail além de BKB, já que é stun mágico de alvo único
- como jogar: puna ele fora da Elder Dragon Form antes do nível 6, e depois disso evite ficar na linha de ataque em splash dele com os Familiares colados
- fonte: pro_dados/visage.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_dragon_tail, dragon_knight_dragon_blood, dragon_knight_elder_dragon_form, visage_soul_assumption)

## Contra Spirit Breaker (spirit_breaker)
- placar: 10 vitórias em 21 jogos de pro para Visage, 47,6% (pro_dados/visage.json)
- por que importa: rival direto de suporte iniciador, o tipo de herói cuja função inteira é caçar um alvo solo como Visage
- janelas: Charge of Darkness tem alcance global e não depende de item, então a ameaça começa assim que ele sobe de nível, bem antes de qualquer power spike de Visage. Phase Boots dele saem aos 9,4 min (pro_dados/spirit_breaker.json), o maior salto de item da curva dele. Depois disso o jogo dele é sobre achar brecha pra engajar, não sobre itemização
- o que ele faz com você: Charge termina em Greater Bash garantido (stun de 1,3 a 2,2s) em cima de Visage se ele estiver sozinho na lane; depois disso, o proc passivo de 17% de Greater Bash em cada ataque mantém o stun-chain
- o que você faz com ele: Grave Chill rouba a velocidade dele assim que a Charge termina, reduzindo a chance de perseguição seguinte; posicionar um Familiar na frente faz o bash inicial da Charge acertar o Familiar em vez de Visage
- itens que viram: Wind Lace e Tranquil Boots cedo em Visage (mediana 8 e 8,4 min) ajudam a sair da rota de Charge antes dela render; depois dos 23 min, o Shard de Visage dá o segundo stun pra punir um Spirit Breaker que errou o engajamento
- como jogar: não farme isolado e sem visão de rio antes do nível 6 dele, e sempre deixe um Familiar como "escudo" na frente quando atravessar área aberta
- fonte: pro_dados/visage.json; pro_dados/spirit_breaker.json; constants_abilities.json (spirit_breaker_charge_of_darkness, spirit_breaker_greater_bash, visage_grave_chill)
