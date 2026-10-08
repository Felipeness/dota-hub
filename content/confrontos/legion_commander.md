---
id: confrontos-legion_commander
heroi: Legion Commander
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/legion_commander.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/pudge.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/axe.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shredder.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/luna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/pangolier.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/vengefulspirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/abaddon.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/legion_commander.md
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- https://api.opendota.com/api/constants/aghs_desc
- https://teamsmurf.com/how-to-counter-legion-commander-duel-discipline/
- https://vpesports.com/?p=191032
---

## Contra Rubick (rubick)
- placar: Legion Commander venceu 69 de 133 partidas de pro (51,9%). Fonte: pro_dados/legion_commander.json (confrontos).
- por que importa: é o oponente com mais jogos contra ela no banco de pro (133), suporte quase onipresente em qualquer composição que ela enfrenta.
- janelas: até os 15:18 ela já tem Blink (pro_dados/legion_commander.json) e Rubick ainda nem começou as Arcane Boots (10:18) nem o próprio Blink (21:36), então essa é a janela clássica pra isolar ele antes do time dele reagir. Dos 15:18 aos 21:36 ela tem reposicionamento e ele não, vantagem dela. Depois dos 21:36 Rubick também blinka e começa a kitar ou se reposicionar antes do Duel fechar.
- o que ele faz com você: Spell Steal copia o último feitiço lançado por qualquer herói inimigo visível; se ele vê você usar Duel, Overwhelming Odds ou Press the Attack e ativa o roubo logo depois, fica com essa habilidade por 180 a 300s dependendo do nível (constants_abilities.json: rubick_spell_steal).
- o que você faz com ele: Rubick tem o menor LH aos 10min (17) e o menor GPM (374) do grupo de suporte nesse recorte (pro_dados/rubick.json), então qualquer Duel que conecte nele mata rápido: Overwhelming Odds (100% de slow por 0,3s + bônus de velocidade de ataque, constants_abilities.json) e o lifesteal de 55 a 85% do Moment of Courage fecham a troca antes dele escapar.
- itens que viram: seu Blink (15:18) chega mais de 6min antes do dele (21:36), é a folga real da matchup; se você tiver o Aghanim's Scepter dela, vencer o Duel dispara Press the Attack automaticamente ao redor dela (campo trigger_pta_on_victory em constants_abilities.json, confirmado também pelo texto do scepter em aghs_desc), o que ajuda a sair vivo se o time dele reagir rápido depois da morte do Rubick.
- como jogar: gaste o blink pra isolar o Rubick antes dos 21min. Depois que ele tiver Aether Lens (22:54) e o próprio shard/scepter (27:00 / 27:24), ele passa a ter alcance e opções de kit emprestado, então prefira fechar antes disso.
- fonte: pro_dados/legion_commander.json; pro_dados/rubick.json; constants_abilities.json (legion_commander_duel, legion_commander_overwhelming_odds, legion_commander_moment_of_courage, rubick_spell_steal); https://api.opendota.com/api/constants/aghs_desc.

## Contra Ogre Magi (ogre_magi)
- placar: Legion Commander venceu 59 de 102 (57,8%). Fonte: pro_dados/legion_commander.json.
- por que importa: 2º oponente com mais jogos contra ela (102), suporte de stun e sustain que aparece em quase todo draft que a enfrenta.
- janelas: Ogre Magi não tem item de poder próprio: o maior item dele é Glimmer Cape aos 22:30 (pro_dados/ogre_magi.json), nada que mude uma troca de dano. Ela, com Chainmail (6:30), Phase Boots (6:42) e Blade Mail (12:42) já formada antes disso, domina a fase inteira do jogo contra ele.
- o que ele faz com você: Fireblast atordoa por 1,2s e causa 70 a 250 de dano (constants_abilities.json: ogre_magi_fireblast), pode zoná-la fora da wave antes dos 6min. Multicast dá chance de repetir o cast (1% a cada 16 de Força, sem teto documentado na fonte local), então em late game ele às vezes estende o stun em cadeia sem aviso.
- o que você faz com ele: 315 de GPM e 8 de LH aos 10min (pro_dados/ogre_magi.json) é o perfil mais fraco de farm do grupo; ela mata ele fácil com Moment of Courage e Overwhelming Odds se ele ficar isolado, e o Duel trava ele de lançar Fireblast em qualquer aliado durante a duração.
- itens que viram: Blade Mail dela (12:42) reflete o Fireblast se ele bater nela com o ativo ligado; depois disso ele não tem resposta de item nenhuma, Glimmer Cape é defensivo, não ofensivo.
- como jogar: se ele já gastou Fireblast, pode iniciar sem medo do segundo stun; se não gastou, pop a Blade Mail antes de chegar perto pra devolver o dano caso ele acerte.
- fonte: pro_dados/legion_commander.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_multicast); items.json (blade_mail).

## Contra Shadow Fiend (nevermore)
- placar: Legion Commander venceu 47 de 97 (48,5%). Fonte: pro_dados/legion_commander.json.
- por que importa: 3º oponente com mais jogos (97), o mid laner mais forte em farm puro que ela enfrenta nesse recorte (78 de LH aos 10min, pro_dados/nevermore.json, quase 50% mais que o dela).
- janelas: Shadow Fiend puxa almas na lane e já chega nos 10min com quase 50% mais last hit que ela (78 contra 53, pro_dados/legion_commander.json vs pro_dados/nevermore.json), então o risco cresce cedo mesmo sem item de spike. O Black King Bar dele sai aos 25:12, antes do dela (26:24); entre o Blink dela (15:18) e o Force Staff dele (22:30) é a janela mais segura pra isolar.
- o que ele faz com você: Shadowraze causa 85 a 280 de dano base dependendo do nível, mais até 80 de bônus por alma acumulada em Necromastery (constants_abilities.json: nevermore_shadowraze1). Requiem of Souls (raio 1000, medo por até 2,15s e redução de resistência mágica) dispara sozinho quando ele morre, então se ele cai dentro do Duel, o estouro ainda pega você e seu time por perto.
- o que você faz com ele: Duel atravessa o Black King Bar dele (bkbpierce: Yes, constants_abilities.json), então o BKB protege contra o resto do kit, não contra ser puxado pro Duel. Sem Force Staff (antes dos 22:30) ele não tem fuga nenhuma.
- itens que viram: seu Blink (15:18) fecha a distância antes do Force Staff dele (22:30); Blade Mail baita uma Shadowraze ou segura o burst se ele decidir lutar de perto.
- como jogar: force o engage antes dos 22min; se ele morrer dentro do Duel, afaste-se do corpse rápido antes do Requiem estourar no raio de 1000.
- fonte: pro_dados/legion_commander.json; pro_dados/nevermore.json; constants_abilities.json (legion_commander_duel, nevermore_shadowraze1, nevermore_requiem).

## Contra Jakiro (jakiro)
- placar: Legion Commander venceu 50 de 96 (52,1%). Fonte: pro_dados/legion_commander.json.
- por que importa: 4º oponente com mais jogos (96), suporte de zona que segura grupo com dano em área.
- janelas: igual Ogre Magi, Jakiro não tem item de poder: Glimmer Cape (22:48) e Force Staff (26:12) são defensivos (pro_dados/jakiro.json). Ela já está com Blade Mail e Blink prontos (12:42 / 15:18) bem antes disso.
- o que ele faz com você: Macropyre cobre uma linha por 10s com 100 a 200 de dano por segundo (constants_abilities.json: jakiro_macropyre), então se ele conseguir alinhar o ground da luta embaixo do seu time travado num Duel, o dano em área pune todo mundo parado, inclusive você. Ice Path atordoa e some pra combo com o resto do time.
- o que você faz com ele: Duel é single target, então o valor de área do Jakiro desaparece pros 4 a 5s da duração: ele não ajuda ninguém enquanto está sendo duelado, e não pode lançar Macropyre em cima de si mesmo pra se salvar.
- itens que viram: seu Blink decide se você chega antes dele conseguir posicionar o Macropyre; depois do Force Staff dele (26:12) ele escapa do seu alcance de perseguição a pé.
- como jogar: não inicie em cima do chão onde ele já tem Macropyre armado; feche de ângulo e isole antes dele ter mana pra zonear a área.
- fonte: pro_dados/legion_commander.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre).

## Contra Lion (lion)
- placar: Legion Commander venceu 42 de 87 (48,3%). Fonte: pro_dados/legion_commander.json.
- por que importa: 5º oponente com mais jogos (87) e o maior burst de dano único do grupo de suporte nessa lista.
- janelas: antes dos 18:12 Lion não tem Blink próprio (pro_dados/lion.json), então depende de alcance curto de Earth Spike pra conectar o combo; ela, já com Blink aos 15:18, chega primeiro nessa janela. Depois dos 18:12 ele inicia luta sozinho, inclusive nela.
- o que ele faz com você: Finger of Death causa 600 a 850 de dano mágico instantâneo, com recarga de 110 a 30s dependendo do nível e +30 de dano permanente a cada herói que a habilidade (ou o punho que ela libera) mata (constants_abilities.json: lion_finger_of_death), dano que sozinho ameaça matar ela cedo se ele acertar primeiro.
- o que você faz com ele: Lion tem o menor LH aos 10min do grupo inteiro empatado com Tusk (6, pro_dados/lion.json), e nenhuma fuga além do blink comprado; Overwhelming Odds e o lifesteal de Moment of Courage matam ele rápido se ela chegar perto antes do Finger of Death sair.
- itens que viram: Blade Mail (ativo reflete 85% do dano recebido por 5,5s, items.json) devolve o Finger of Death inteiro nele se ele acertar enquanto o item está ligado, o suficiente pra matar um suporte dessa faixa de vida.
- como jogar: pop Blade Mail antes de se aproximar se ele ainda não gastou o Finger of Death; depois que ele gastar, pode fechar o Duel sem medo do burst principal até a recarga voltar.
- fonte: pro_dados/legion_commander.json; pro_dados/lion.json; constants_abilities.json (lion_finger_of_death); items.json (blade_mail).

## Contra Pudge (pudge)
- placar: Legion Commander venceu 42 de 76 (55,3%). Fonte: pro_dados/legion_commander.json.
- por que importa: 6º oponente com mais jogos (76) e o espelho mais direto da lista: os dois são travadores de alvo único na mesma posição 3, cada um tentando isolar o outro primeiro.
- janelas: os dois saem parecido na lane (Chainmail dela 6:30, dele 6:42), mas Pudge acelera um Aghanim's Scepter cedo, 17:12 em quase metade das partidas (809 de 1764, pro_dados/pudge.json), bem antes do scepter situacional dela (25:48). Entre os 17:12 e o Blink dela (que ela já tem desde 15:18, antes do Blink dele aos 19:30) é a janela em que ela pode fechar o Duel primeiro e anular a vantagem de item dele.
- o que ele faz com você: Meat Hook puxa de até 1300 de distância causando 150 a 360 de dano (constants_abilities.json: pudge_meat_hook), pode te pegar fora de posição antes do blink. Rot causa 30 a 120 de dano e até 32% de slow na área, machucando os dois ao mesmo tempo (ele também toma dano do próprio Rot). Dismember é canalizado e trava o alvo, mas ele só consegue lançar se você não travou ele primeiro.
- o que você faz com ele: Duel tira a habilidade de lançar Dismember nele (alvo não pode usar habilidades durante o Duel, constants_abilities.json), então quem trava primeiro geralmente decide a troca. Moment of Courage e Press the Attack sustentam ela contra o slow e o dano do Rot.
- itens que viram: seu Blink (15:18) chega cerca de 4min antes do dele (19:30), a vantagem real nessa corrida de quem inicia primeiro; Blade Mail reflete o dano do canal de Dismember inteiro se ele conseguir lançar em você.
- como jogar: feche o Duel assim que entrar nos 200 de alcance se ele hookar você de longe, isso anula o Dismember dele; tente iniciar antes dos 17min, antes do scepter dele mudar a troca de Rot.
- fonte: pro_dados/legion_commander.json; pro_dados/pudge.json; constants_abilities.json (legion_commander_duel, pudge_meat_hook, pudge_rot, pudge_dismember); items.json (blade_mail).

## Contra Axe (axe)
- placar: Legion Commander venceu 29 de 60 (48,3%). Fonte: pro_dados/legion_commander.json.
- por que importa: o rival de posição 3 com mais jogos contra ela (60, catálogo de posições em herois_catalogo.json), outro iniciador de Força que também trava alvo único, e o único confronto dessa lista com um bug documentado de interação entre as duas ultimates.
- janelas: o build dos dois é quase espelhado: Chainmail dela 6:30 contra 6:54 dele, Phase Boots 6:42 contra 7:12, Blink 15:18 contra 15:42, BKB 26:24 contra 25:54 (pro_dados/legion_commander.json vs pro_dados/axe.json). Com itens tão parecidos, a corrida de gold quase não decide a troca, quem trava primeiro decide.
- o que ele faz com você: Berserker's Call força unidades próximas a atacar o Axe por 2,1 a 3s num raio de 315, com 12 a 15 de armadura bônus pra ele (constants_abilities.json: axe_berserkers_call). Um relato sobre bugs do patch 7.41 (vpesports.com, análise do time Spirit) lista o Call entre as habilidades de taunt que, se acertarem a Legion Commander já dentro de um Duel em andamento, fazem ela "trocar de aggro" pra outro alvo e perder o foco no alvo real do Duel, bug sem correção anunciada pela Valve até a publicação do relato. Counter Helix ainda devolve 100 a 160 de dano puro a cada 4 a 7 ataques recebidos, cortando o dano físico dela em qualquer troca.
- o que você faz com ele: Duel atravessa o Black King Bar do Axe (bkbpierce: Yes, mesma regra vale pro dela), então o BKB dele não impede ser puxado pro Duel; sem o Call ativo, Overwhelming Odds e o lifesteal de Moment of Courage decidem a favor dela na maioria das trocas.
- itens que viram: nenhum item resolve a interação do Call, é timing puro de habilidade; Blade Mail de ambos os lados serve só pra sobreviver à troca, não pra evitar o bug.
- como jogar: nunca inicie o Duel com o Call do Axe disponível, segundo o relato é a jogada que mais risco de dar errado tem; deixe ele gastar o Call num creep ou aliado primeiro (recarga de 12 a 18s dependendo do nível) e só então feche o Duel.
- fonte: pro_dados/legion_commander.json; pro_dados/axe.json; constants_abilities.json (legion_commander_duel, axe_berserkers_call, axe_counter_helix); https://vpesports.com/?p=191032; https://teamsmurf.com/how-to-counter-legion-commander-duel-discipline/.

## Contra Mars (mars)
- placar: Legion Commander venceu 28 de 58 (48,3%). Fonte: pro_dados/legion_commander.json.
- por que importa: 2º rival de posição 3 com mais jogos (58, herois_catalogo.json), outro iniciador de Força que também disputa o mesmo espaço de farm e engajamento na offlane.
- janelas: build quase igual de novo: Blink dela 15:18 contra 15:12 dele, BKB 26:24 contra 26:30 (pro_dados/legion_commander.json vs pro_dados/mars.json), praticamente empatado. A diferença real é o Aghanim's Shard do Mars, que sai aos 21:30 (pro_dados/mars.json), bem antes do scepter/shard situacional dela (25:48), dando a ele uma ferramenta a mais nessa janela de 21 a 26min.
- o que ele faz com você: Spear of Mars (100 a 325 de dano, alcance de 900 a 1200, atordoa de 1,3 a 2,2s se encostar em terreno, constants_abilities.json: mars_spear) pode interromper o cast dela antes do Duel fechar. Arena of Blood bloqueia movimento e ataque num raio de 550 por 5,5s, forçando a luta a acontecer dentro da zona dele.
- o que você faz com ele: Duel atravessa a resistência mágica e não é bloqueado pela parede da Arena contra quem já está dentro dela; sem regeneração própria, o God's Rebuke dele (cleave corpo a corpo) não troca dano melhor que o lifesteal de 55 a 85% do Moment of Courage dela num combate direto.
- itens que viram: Blade Mail baita a Lança antes dele conseguir te prender na Arena; a corrida de Blink (15:18 contra 15:12) é tão próxima que decide pouco, o resto da luta é quem usa a habilidade certa primeiro.
- como jogar: não entre andando na Arena of Blood pra iniciar, espere o cooldown dela e da Lança (14 a 11s / 100 a 90s) cair antes de se aproximar.
- fonte: pro_dados/legion_commander.json; pro_dados/mars.json; constants_abilities.json (legion_commander_duel, mars_spear, mars_arena_of_blood, mars_gods_rebuke).

## Contra Timbersaw (shredder)
- placar: Legion Commander venceu 26 de 38 (68,4%, amostra moderada, mas é o maior % de vitória dela com 30+ jogos nesse recorte). Fonte: pro_dados/legion_commander.json.
- por que importa: outro rival de posição 3 (herois_catalogo.json) e a maior vantagem registrada dela contra qualquer oponente com amostra de 30 jogos ou mais.
- janelas: Timbersaw tem o spike mais atrasado do grupo todo: Blink só aos 22:30 e BKB aos 26:36 (pro_dados/shredder.json), contra 15:18 e 26:24 dela. Isso deixa uma janela de 7min (15 a 22min) em que ela tem mobilidade e ele não tem nenhuma.
- o que ele faz com você: Reactive Armor empilha armadura e regeneração a cada vez que ele é atacado, contando ataque de herói como 4x (0,4 a 0,7 de armadura e regen por stack, até 40 stacks, constants_abilities.json: shredder_reactive_armor). Em teoria, cada golpe dela dentro de um Duel longo deveria deixar ele mais tanque com o tempo.
- o que você faz com ele: na prática o placar de pro não mostra ela ganhando no desgaste contra a armadura empilhada; o padrão é ela iniciar antes dos 22min, quando ele ainda não tem Blink nem BKB, resolvendo o Duel rápido com Overwhelming Odds e Moment of Courage antes da armadura empilhar, ou simplesmente não duelar ele depois disso e focar o resto do time enquanto ele fica preso como tanque lento de teamfight.
- itens que viram: nenhum item dela neutraliza a Reactive Armor diretamente, a resposta é timing: duelar cedo ou não duelar.
- como jogar: se ele já estiver com stacks altos de Reactive Armor (farm de lane recente, torre), prefira Overwhelming Odds e caçar outro alvo em vez de insistir num Duel longo.
- fonte: pro_dados/legion_commander.json; pro_dados/shredder.json; constants_abilities.json (shredder_reactive_armor, legion_commander_overwhelming_odds, legion_commander_moment_of_courage).

## Contra Luna (luna)
- placar: Legion Commander venceu 38 de 60 (63,3%). Fonte: pro_dados/legion_commander.json.
- por que importa: não é rival de lane (Luna é pos 1 de safelane, ela é pos 3 de offlane, herois_catalogo.json), mas é a carregadora de dano mais jogada contra ela nesse recorte (60 partidas) e uma das maiores vantagens com amostra boa: exatamente o tipo de matchup "sem lane em comum mas importa" que todo bom hard carry representa pra uma travadora de alvo único.
- janelas: até os 17:12 Luna não tem Manta Style (pro_dados/luna.json), praticamente sem defesa contra ser isolada; o Blink dela sai aos 15:18, quase 2min antes disso, janela curta mas real pra iniciar antes da Manta. Depois dos 17:12 ela ganha ilusão e dispel pra se safar; depois dos 26:06 Luna soma Butterfly (35 de evasão, 30 de ataque e velocidade de ataque, catálogo padrão do item), dificultando qualquer troca de ataque físico puro contra ela.
- o que ele faz com você: Eclipse chove de 6 a 12 feixes de Lucent Beam (75 a 300 de dano por feixe, intervalo de 0,6s entre feixes, constants_abilities.json: luna_eclipse), mas só funciona de noite e não ajuda nada dentro de um Duel, já que o alvo não pode lançar habilidade. Moon Glaive (cleave do ataque básico) também não serve pra nada contra um alvo único forçado pelo Duel.
- o que você faz com ele: o Duel anula a única vantagem de Luna contra um alvo isolado (o cleave) e trava ela pra só trocar ataque básico; antes da Manta, o lifesteal de Moment of Courage e o slow total de 0,3s do Overwhelming Odds decidem a troca.
- itens que viram: feche o Duel antes dos 17:12 (Manta dela); depois dos 26:06 (Butterfly), a evasão dela passa a fazer o ataque básico da Legion Commander falhar com mais frequência, dificultando fechar a troca golpe a golpe.
- como jogar: procure a janela antes dos 17min; depois da Butterfly dela, não force Duel sem vantagem de item clara, a evasão sozinha já vira boa parte da troca.
- fonte: pro_dados/legion_commander.json; pro_dados/luna.json; constants_abilities.json (legion_commander_duel, luna_eclipse, luna_lucent_beam).

## Contra Pangolier (pangolier)
- placar: Legion Commander venceu 21 de 34 (61,8%). Fonte: pro_dados/legion_commander.json.
- por que importa: outro core sem lane fixa em comum com ela (Pangolier joga 2 ou 3, herois_catalogo.json) mas com volume de jogos relevante (34) e uma das maiores vantagens da lista, interessante por ser o único oponente aqui com uma ferramenta de barreira pensada pra encurtar burst.
- janelas: Pangolier só tem Blink aos 19:12 (pro_dados/pangolier.json), 4min depois do dela (15:18); Diffusal Blade cedo (12:24) ajuda na lane mas não serve de defesa contra ser isolado num Duel.
- o que ele faz com você: Shield Crash dá uma barreira que absorve dano por um tempo curto depois de acertar um herói (constants_abilities.json: pangolier_shield_crash, barreira escalando com o nível), então se ele ativar bem antes do Duel começar, os primeiros golpes dela batem na barreira em vez da vida dele.
- o que você faz com ele: a barreira não dura o Duel inteiro e a recarga de Shield Crash (15 a 6s) não é rápida o bastante pra reaplicar sempre; depois que ela cai, o lifesteal de Moment of Courage e o dano de Overwhelming Odds fecham a troca como em qualquer outro core sem fuga própria antes do Blink dele.
- itens que viram: seu Blink (15:18) fecha a janela de quase 4min antes do dele; Blade Mail pune ele se usar Shield Crash em cima de você de forma ofensiva, já que o retorno conta o dano recebido.
- como jogar: duele ele antes dos 19min; se ele já ativou Shield Crash recentemente, espere a barreira cair antes de comprometer o Duel de verdade.
- fonte: pro_dados/legion_commander.json; pro_dados/pangolier.json; constants_abilities.json (pangolier_shield_crash).

## Contra Tusk (tusk)
- placar: Legion Commander venceu 10 de 36 (27,8%, 30+ jogos), a pior taxa de vitória dela nesse recorte inteiro. Fonte: pro_dados/legion_commander.json.
- por que importa: maior desvantagem registrada com amostra de 30 jogos ou mais, entra na lista justamente pra marcar isso, mesmo sendo um suporte roamer e não um rival direto de lane.
- janelas: Tusk não tem item de poder individual: só Tranquil Boots (8:24) e um Blink tardio (19:00, pro_dados/tusk.json), gold por minuto de 300, um dos mais baixos do grupo (só Lion, com 286, fica abaixo). O placar ruim não vem de um spike de item dele.
- o que ele faz com você: Ice Shards cria uma parede de gelo que bloqueia caminho por alguns segundos e causa 75 a 300 de dano (constants_abilities.json: tusk_ice_shards); Snowball soma dano e stun por aliado que entra na bola (80 a 260 de dano base, 0,6 a 1,2s de stun, mais por aliado). Isolado, nenhuma das duas habilidades é grande o bastante pra matar ela sozinha; o problema é o combo em grupo, Tusk precisa de um aliado junto pra puni-la de verdade.
- o que você faz com ele: 6 de LH aos 10min (pro_dados/tusk.json), empatado com o pior farm da lista; num Duel isolado 1 contra 1, Overwhelming Odds e Moment of Courage matam ele rápido como qualquer suporte fraco.
- itens que viram: não tem item específico que decida essa matchup, ela é sobre visão e posicionamento, não sobre build.
- como jogar: leia essa estatística como "não se deixe pegar sozinha por Tusk mais um aliado", não como "evite duelar o Tusk". Isolado, o Duel 1 contra 1 ainda favorece ela; o problema é ser pega de surpresa pela parede de gelo junto com o resto do time dele.
- fonte: pro_dados/legion_commander.json; pro_dados/tusk.json; constants_abilities.json (tusk_ice_shards, tusk_snowball).

## Contra Vengeful Spirit (vengefulspirit)
- placar: Legion Commander venceu 10 de 32 (31,2%, amostra pequena, a menor de todo o recorte de confrontos dela, 766 jogos de pro no total pra Vengeful Spirit). Fonte: pro_dados/legion_commander.json.
- por que importa: 2ª pior taxa de vitória com 30+ jogos; entra na lista pela desvantagem, mas com a ressalva de que é a amostra mais curta do grupo, então o número é mais ruidoso que os outros.
- janelas: Vengeful Spirit também não tem item de combate próprio cedo, só Ring of Regen (6:54) e Tranquil Boots (7:24); o Aghanim's Scepter dela (22:54) muda o mecanismo de morte dela em teamfight, não afeta um Duel direto.
- o que ele faz com você: Nether Swap troca posição com qualquer herói, aliado ou inimigo, mas não interrompe um Duel já em andamento (a habilidade não é dispellable, constants_abilities.json: legion_commander_duel); o valor dela é salvar o alvo real antes do Duel começar ou reposicionar o time dela antes do engajamento. Magic Missile atordoa de 1,2 a 1,8s e pode interromper o cast da Duel se acertar bem no tempo de conjuração de 0,3s, mas é uma janela curta.
- o que você faz com ele: 13 de LH aos 10min e 314 de GPM (pro_dados/vengefulspirit.json), quase sem ameaça de item; isolada, ela morre num Duel tão rápido quanto Lion ou Ogre Magi.
- itens que viram: nenhum item específico, de novo o número parece refletir escolha de draft e timing de Nether Swap, não uma fraqueza de build.
- como jogar: não leia essa estatística como "evite duelar Vengeful Spirit"; fique de olho é no Nether Swap puxando seu alvo real pra longe ou reposicionando o time dela antes de você comprometer o engajamento.
- fonte: pro_dados/legion_commander.json; pro_dados/vengefulspirit.json; constants_abilities.json (legion_commander_duel, vengefulspirit_nether_swap, vengefulspirit_magic_missile).

## Contra Abaddon (abaddon)
- placar: Legion Commander venceu 13 de 38 (34,2%, 30+ jogos). Fonte: pro_dados/legion_commander.json.
- por que importa: outro rival de posição 3 (Abaddon também joga 4 e 5, herois_catalogo.json) e o confronto mais explicável mecanicamente da lista: um contador quase literal pro Duel.
- janelas: o Blink de Abaddon só sai aos 24:54 (pro_dados/abaddon.json), quase 10min depois do dela (15:18), então no papel ela deveria dominar a janela inicial inteira. O placar mostra o contrário, porque o problema não é mobilidade, é o que acontece no instante em que o Duel começa.
- o que ele faz com você: Borrowed Time ativa sozinho sempre que a vida dele cai abaixo de 400, mesmo com a habilidade bloqueada pelo "alvo não pode usar habilidades" do Duel, porque é um gatilho automático, não um cast manual (constants_abilities.json: abaddon_borrowed_time, limiar de 400, duração de 4 a 6s dependendo do nível). Uma vez ativo, todo golpe dela cura ele em vez de machucar, virando o Duel de cabeça pra baixo. Aphotic Shield lançada por um aliado nele antes da troca (barreira de 120 a 210 de dano, 12s de duração) amortece a abertura do Duel da mesma forma.
- o que você faz com ele: o Duel ainda tira dele a habilidade de lançar Aphotic Shield em outro aliado enquanto está travado; se ela pegar ele cedo, antes do Chainmail e Phase Boots dele fecharem (5:36 / 6:30, pro_dados/abaddon.json), ele morre como qualquer outro alvo sem a vida alta que o Borrowed Time precisa pra compensar.
- itens que viram: não existe resposta de item direta pro autocast do Borrowed Time; a jogada prática é gastar o Duel só depois que a recarga dele estiver visivelmente gasta (85 a 65s dependendo do nível) ou simplesmente não duelar Abaddon e usar Overwhelming Odds e pressão de time em vez disso.
- como jogar: baite o Borrowed Time com poke antes de comprometer o Duel de verdade, ou pule o duelo nesse alvo específico, principalmente depois que ele já tiver vida alta o bastante pra deixar o gatilho de 400 valer a pena.
- fonte: pro_dados/legion_commander.json; pro_dados/abaddon.json; constants_abilities.json (legion_commander_duel, abaddon_borrowed_time, abaddon_aphotic_shield); https://teamsmurf.com/how-to-counter-legion-commander-duel-discipline/.
