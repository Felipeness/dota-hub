---
id: confrontos-wisp
heroi: Io
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/wisp.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/queenofpain.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/phoenix.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/spirit_breaker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/bristleback.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/puck.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/warlock.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/wisp.md
- https://api.opendota.com/api/constants/aghs_desc
---

## Como esses 14 oponentes foram escolhidos

Io é majoritariamente suporte em pro no patch atual: 23 de 62 picks reais de Tier 1 saem pos4 (65% de vitória) e 14 pos5 (29%), contra só 16 pos1 "funil" (`content/fichas/wisp.md`, leitura de replay). A lista mistura os 6 adversários com mais jogos de pro contra Io, os suportes que mais disputam o mesmo papel, os extremos de vitória e derrota com amostra de 30 ou mais jogos, e o carry mais jogado contra Io mesmo sem dividir lane com ele:

- **Mais jogos contra ele (top 6)**: Hoodwink, Rubick, Snapfire, Tusk, Queen of Pain, Phoenix.
- **Mesma posição (suporte 4/5 em pro)**: Disruptor, Lion (os dois já entram também nos extremos de vitória/derrota abaixo).
- **Maior vantagem (30+ jogos)**: Spirit Breaker, Bristleback.
- **Maior desvantagem (30+ jogos)**: Storm Spirit, Puck, Warlock.
- **Carry mais jogado em pro mesmo sem lane em comum**: Tiny.

Todos os 14 têm 30 ou mais partidas de pro no confronto, então nenhum bloco abaixo precisa do aviso de amostra pequena.

## Contra Hoodwink (hoodwink)

- placar: 45 vitórias em 80 jogos de pro, 56,2% pra Io (pro_dados/wisp.json, confrontos hero_id 123)
- por que importa: é o oponente com mais jogos de pro contra Io no patch, e divide o mesmo papel (suporte 4/5), então a disputa é literal por controle de mapa e visão
- janelas: os dois saem pra roam cedo; Magic Wand de Io (mediana 6,8 min) chega perto do Arcane Boots de Hoodwink (12,2 min, pro_dados/hoodwink.json). Até os 15 min o risco real é Bushwhack perto de árvore (estuna até 2,1s, 90 a 360 de dano total, constants_abilities.json), que também zera a visão do alvo durante o stun, perigoso porque os dois roam pela mesma selva. Mekansm de Io (14,7) e os wards dos dois chegam quase no mesmo minuto. Depois dos 23-24 min, Aghanim's Shard de Hoodwink (23,8) dá o boomerang que aplica vulnerabilidade a dano mágico, bem perto do Black King Bar de Io (25,5)
- o que ele faz com você: Bushwhack perto de árvore prende e cega por até 2,1s, e se acertar o alvo tetherado, Sharpshooter carregado (até 3s, até 1350 de dano, aplica break e slow) executa quem estiver preso
- o que você faz com ele: Sharpshooter é bloqueado por Black King Bar (bkbpierce: No, constants_abilities.json), então a resposta existe e é definitiva quando o BKB está pronto; o slow do Tether (15 a 60% conforme o nível, aplica a quem encosta na corda) atrapalha Hoodwink se ele cruzar a corda tentando fugir depois de usar Scurry
- itens que viram: Black King Bar de Io (25,5) anula Sharpshooter por completo quando pronto; Aghanim's Shard de Hoodwink (23,8) muda a conta ao adicionar vulnerabilidade de dano mágico, machucando mais quem está tetherado e recebendo Spirits
- como jogar: evita ficar parado perto de árvore sem checar Bushwhack, guarda Relocate de prontidão assim que Hoodwink ganha nível 6, e prioriza Black King Bar no meio-jogo se ele estiver puxando pick-offs com Sharpshooter
- fonte: pro_dados/wisp.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, wisp_tether, wisp_relocate); aghs_desc (hoodwink shard)

## Contra Rubick (rubick)

- placar: 33 vitórias em 71 jogos de pro, 46,5% pra Io (pro_dados/wisp.json, confrontos hero_id 86), desvantagem
- por que importa: segundo oponente com mais jogos de pro contra Io, mesma posição (suporte 4/5), e é a maior desvantagem da lista entre os confrontos de alto volume, por um motivo mecânico específico: ele pode roubar a última magia que qualquer herói do time de Io lançou, inclusive Relocate
- janelas: Arcane Boots de Rubick (10,3) e Magic Wand de Io (6,8) definem o early. Até o Blink dele (21,6) ele é lento pra zonear sozinho; depois disso, Telekinesis (joga o alvo no ar, 0,95 a 1,7s, aterrissa estunando em área, alcance de até 625) vira ameaça de pick a distância. Holy Locket de Io (19,7) chega perto do Blink de Rubick
- o que ele faz com você: Telekinesis joga o alvo tetherado longe e estuna em área na aterrissagem; se Rubick rouba o último feitiço do time de Io (Spell Steal, ignora BKB, bkbpierce: Yes) no momento certo, ele pode roubar o próprio Relocate de Io e usar como fuga ou iniciação pro time dele
- o que você faz com ele: o Tether desacelera Rubick se ele cruzar a corda tentando fechar o Telekinesis; Spirits (30 a 90 de dano por partícula) incomodam de longe sem expor Io a arremesso; evitar lançar Relocate perto dele sem necessidade reduz a munição que ele pode roubar
- itens que viram: Aghanim's Scepter de Rubick (27,4) deixa ele roubar 2 feitiços ao mesmo tempo; Black King Bar de Io (25,5) bloqueia Telekinesis (bkbpierce: No) mas não impede o Spell Steal em si
- como jogar: evita lançar feitiços vistosos (Relocate, Spirits) perto de Rubick sem necessidade, porque cada cast dá munição pro Spell Steal; guarda BKB pra anular o Telekinesis quando ele tentar isolar o tetherado
- fonte: pro_dados/wisp.json; pro_dados/rubick.json; constants_abilities.json (rubick_telekinesis, rubick_spell_steal, wisp_tether, wisp_relocate); aghs_desc (rubick scepter)

## Contra Snapfire (snapfire)

- placar: 41 vitórias em 66 jogos de pro, 62,1% pra Io (pro_dados/wisp.json, confrontos hero_id 128), vantagem
- por que importa: terceiro oponente com mais jogos de pro contra Io, joga suporte flexível (pos 2 a 5 em pro) e disputa o mesmo espaço de zoneamento em área
- janelas: até os 15-16 min os dois trocam poke de área parecido, Scatterblast dela (cone, 100 a 280 de dano mais slow) contra Spirits de Io. Aghanim's Shard de Snapfire chega cedo pra suporte (16,9) e faz Firesnap Cookie curar o alvo e lançar um Mortimer Kiss extra na aterrissagem (40% do dano de impacto); é quase junto do Ultimate Scepter de Io (16,8), que faz Spirits nascerem sozinhos e somarem mais poke passivo. Depois dos 19-20 min, Holy Locket de Io (19,7) garante sustain maior que o dela em troca prolongada
- o que ele faz com você: Firesnap Cookie salta e estuna até 2,2s na aterrissagem; Mortimer Kisses bombardeia área por 5,5s com dano contínuo (bloqueado por BKB, bkbpierce: No), então sem Black King Bar numa troca de grupo o DoT soma rápido
- o que você faz com ele: o Tether desacelera ela se tentar fechar distância pra lançar Scatterblast ponto-a-ponto (bônus de 30% de dano e 50% de debuff a curta distância); Overcharge (até 110 de velocidade de ataque) ajuda a punir ela de perto quando erra o posicionamento do Mortimer
- itens que viram: Aghanim's Shard dela (16,9) muda o jogo cedo, mas o Ultimate Scepter de Io chega praticamente no mesmo minuto e devolve o favor em poke passivo; Black King Bar de Io (25,5) anula Mortimer Kisses por completo quando pronto
- como jogar: evita o alcance de ponto-cego de Scatterblast (450 de distância), guarda Relocate pra tirar o aliado da área do Mortimer assim que ela começa o cast
- fonte: pro_dados/wisp.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_mortimer_kisses, snapfire_firesnap_cookie, wisp_overcharge); aghs_desc (snapfire shard)

## Contra Tusk (tusk)

- placar: 31 vitórias em 56 jogos de pro, 55,4% pra Io (pro_dados/wisp.json, confrontos hero_id 100), vantagem
- por que importa: quarto oponente em volume, mesma posição (suporte 4/5), e o combo clássico dele (Snowball + Walrus Punch) foi desenhado justamente pra pegar suporte isolado como Io
- janelas: Blink de Tusk (19,0) e Holy Locket de Io (19,7) chegam quase juntos. Antes disso, Ice Shards (barreira que bloqueia passagem, 75 a 300 de dano) e Tag Team (aura ativa ao redor de Tusk, 6s, que aplica dano físico bônus e slow em quem é atacado dentro dela) são as ferramentas de pico cedo; Snowball (junta aliados, rola até 3s, ganha dano por aliado dentro) normalmente vira o combo de iniciação a partir do nível 6
- o que ele faz com você: Snowball gruda em Tusk e nos aliados, rola até acertar, estuna e solta todos que estavam dentro; Walrus Punch (crítico com bônus de dano de 60 a 120, ignora BKB, bkbpierce: Yes) joga o alvo no ar e aplica a maior parte do burst físico
- o que você faz com ele: o slow do Tether (15 a 60%) atrasa Tusk se ele cruzar a corda rolando a Snowball; Relocate tira o aliado puxado antes do Walrus Punch conectar, já que o combo dele depende de alcance corpo a corpo (150 de cast range)
- itens que viram: Blink de Tusk (19,0) é o item que decide a janela de iniciação; Black King Bar de Io (25,5) reduz o impacto de Ice Shards e Tag Team mas não do Walrus Punch em si, que ignora imunidade
- como jogar: mantém distância do alcance da Snowball (1150) quando Tusk já tem nível 6, e guarda Relocate assim que ele começa a rolar pra tirar o alvo do caminho
- fonte: pro_dados/wisp.json; pro_dados/tusk.json; constants_abilities.json (tusk_snowball, tusk_walrus_punch, tusk_ice_shards, wisp_tether, wisp_relocate)

## Contra Queen of Pain (queenofpain)

- placar: 34 vitórias em 56 jogos de pro, 60,7% pra Io (pro_dados/wisp.json, confrontos hero_id 39), vantagem
- por que importa: quinto oponente em volume mesmo sendo mid contra suporte, ou seja, o confronto de fato não acontece na lane, acontece quando ela rotaciona pra cima do suporte isolado, e isso pesa muito no resultado em pro
- janelas: até os 8 min QoP está puro de farm e nível (lh10 de 56, bem acima da média da lista, pro_dados/queenofpain.json), sem ameaçar ninguém fora da mid. Com Power Treads (8,3) e Kaya (13,9) ela já rotaciona rápido. A partir do nível 6, Sonic Wave (325 a 625 de dano, ignora BKB, bkbpierce: Yes) ameaça qualquer suporte de HP baixo sozinho, mesmo com Black King Bar
- o que ele faz com você: Blink fecha distância sem aviso, Scream of Pain bate em área (90 a 345) e Sonic Wave finaliza ignorando imunidade a feitiço, então o combo completo mata um suporte isolado mesmo depois do BKB de Io
- o que você faz com ele: Spirits e o slow do Tether atrapalham o reposicionamento dela quando erra o blink; Relocate é a resposta real porque remove o alvo do mapa antes do combo completar, já que não há defesa de item contra o Sonic Wave
- itens que viram: Aghanim's Shard dela (27,5) dá um silêncio em área junto do blink, que pode travar o cast de Relocate (3 a 3,5s) se cair antes dele terminar; Ultimate Scepter dela (23,5) faz Shadow Strike acertar em área também
- como jogar: evita ficar sozinho e visível perto da mid depois que ela bate nível 6; guarda Relocate de prontidão, porque é a única ferramenta que sobrevive ao Sonic Wave
- fonte: pro_dados/wisp.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_sonic_wave, queenofpain_blink, queenofpain_scream_of_pain, wisp_relocate); aghs_desc (queen of pain shard e scepter)

## Contra Phoenix (phoenix)

- placar: 29 vitórias em 55 jogos de pro, 52,7% pra Io (pro_dados/wisp.json, confrontos hero_id 110), levemente favorável
- por que importa: sexto oponente em volume, mesma posição (suporte 5 puro), o confronto mais parecido em função dessa lista inteira
- janelas: os dois seguem ritmo parecido de suporte até o nível 6. Tranquil Boots dela (8,8) e Magic Wand de Io (6,8) definem o early. A partir do nível 6, Supernova (ignora BKB, bkbpierce: Yes, estuna 1,6 a 2,4s em raio de 1200 ao explodir) é a ameaça real em qualquer troca de grupo
- o que ele faz com você: Icarus Dive atravessa com dano e slow; Supernova estuna em área mesmo com Black King Bar ligado e ainda cura e ressuscita a própria Phoenix
- o que você faz com ele: Spirits e o poke constante punem Phoenix tentando segurar Sun Ray parada, já que ela perde HP própria pra manter o canal; Relocate tira o aliado focado do raio de 1200 da Supernova antes da explosão
- itens que viram: Aghanim's Shard dela (23,3) permite Sun Ray durante a própria Supernova, dificultando separar as duas ameaças; Black King Bar de Io (25,5) não ajuda contra a Supernova em si porque ela ignora imunidade, então a resposta tem que ser distância, não BKB
- como jogar: mantém distância de 1200 de qualquer Phoenix com ultimate pronta numa troca de grupo, porque nem BKB resolve; usa Relocate preventivamente assim que ela inicia a sequência de Icarus Dive
- fonte: pro_dados/wisp.json; pro_dados/phoenix.json; constants_abilities.json (phoenix_supernova, phoenix_icarus_dive, phoenix_sun_ray, wisp_relocate); aghs_desc (phoenix shard)

## Contra Disruptor (disruptor)

- placar: 33 vitórias em 50 jogos de pro, 66,0% pra Io (pro_dados/wisp.json, confrontos hero_id 87), maior vantagem com volume grande
- por que importa: mesma posição (suporte 5/4), vantagem grande (66,0%) mesmo com Static Storm silenciando área inteira
- janelas: até o nível 6 de Disruptor (Static Storm é a ultimate), os dois trocam ward e harass leve, ritmo parecido. A diferença real aparece quando a troca cai dentro da Static Storm (raio 550, 6s, dano até 350 por segundo): ela é bloqueada por Black King Bar (bkbpierce: No), então o BKB de Io (25,5) resolve de vez a partir do meio-jogo
- o que ele faz com você: Static Storm silencia a área inteira e impede qualquer cast novo de Io ou do aliado tetherado durante os 6s; Glimpse puxa o alvo de volta 4s no tempo, cancelando avanços recentes
- o que você faz com ele: o Tether já está ativo antes da Storm cair, então os bônus de velocidade e Overcharge continuam valendo mesmo em silêncio, porque são buffs contínuos, não casts novos; isso ajuda o aliado tetherado a sair da área mesmo sem conseguir lançar nada
- itens que viram: Black King Bar de Io (25,5) anula Static Storm por completo quando pronto, o que explica boa parte da vantagem no meio-jogo pra frente; Aghanim's Shard de Disruptor (Kinetic Fence) separa fisicamente o aliado tetherado de Io, mas não quebra o Tether em si
- como jogar: antes do BKB, nunca entra em troca sem checar se Disruptor já tem Static Storm disponível; depois dele pronto, a troca vira seguramente favorável
- fonte: pro_dados/wisp.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm, disruptor_glimpse, wisp_tether, wisp_overcharge); aghs_desc (disruptor shard)

## Contra Lion (lion)

- placar: 22 vitórias em 45 jogos de pro, 48,9% pra Io (pro_dados/wisp.json, confrontos hero_id 26), levemente desfavorável
- por que importa: mesma posição (suporte 4/5), e o confronto mais parelho entre os suportes rivais da lista, decidido por quem acerta o combo primeiro
- janelas: Tranquil Boots dele (7,4) e Magic Wand de Io (6,8) seguem ritmo parecido. A partir do nível 6, Finger of Death (600 a 850 de dano, bloqueado por BKB, bkbpierce: No) ameaça executar um suporte de HP baixo; Blink dele (18,2) chega quase junto do Holy Locket de Io (19,7)
- o que ele faz com você: Impale estuna em linha (1,3 a 2,2s) e Finger of Death finaliza se Io estiver abaixo do limite de vida, mas é bloqueado por BKB quando pronto
- o que você faz com ele: Relocate tira o aliado alvo do Impale antes do Finger of Death conectar; Spirits incomodam Lion tentando canalizar Mana Drain (5s de canal, quebra a 1100 de distância), interrompendo o dreno de mana dele
- itens que viram: Black King Bar de Io (25,5) anula Finger of Death quando pronto; Aghanim's Shard de Lion (25,8) faz Mana Drain acertar 2 alvos extras, ameaçando também o aliado tetherado
- como jogar: prioriza Black King Bar assim que Lion bate nível 6, porque o dano dele é o maior risco de execução single-target da lista até esse ponto; interrompe o Mana Drain com Spirits sempre que possível
- fonte: pro_dados/wisp.json; pro_dados/lion.json; constants_abilities.json (lion_finger_of_death, lion_impale, lion_mana_drain, wisp_relocate); aghs_desc (lion shard)

## Contra Spirit Breaker (spirit_breaker)

- placar: 25 vitórias em 32 jogos de pro, 78,1% pra Io (pro_dados/wisp.json, confrontos hero_id 71), a maior vantagem da lista
- por que importa: maior vantagem de Io na lista inteira com amostra de 30+ jogos, e também joga suporte de posição 4, então a disputa de roaming é direta
- janelas: Phase Boots dele (9,4) e os componentes de armadura (Chainmail 7,6, Blades of Attack 8,4) definem um early agressivo. Antes do nível 6, Charge of Darkness (ganha velocidade progressiva, atinge o máximo em 1,5s) já ameaça, mas sem o alcance global de Nether Strike. Magic Wand de Io (6,8) e Mekansm (14,7) seguem o ritmo normal de suporte
- o que ele faz com você: Charge atravessa o mapa e aplica Greater Bash (ignora BKB, bkbpierce: Yes) no alvo e em quem estiver no caminho; Nether Strike (ultimate, também ignora BKB) teleporta pra cima do alvo com bash incluso
- o que você faz com ele: cruzar a corda do Tether desacelera Spirit Breaker em até 60% enquanto ele carrega, o que atrasa a chegada da Charge; Overcharge (até 110 de velocidade de ataque) ajuda o aliado tetherado a revidar rápido quando ele erra o engajamento
- itens que viram: nenhum item de Io anula Greater Bash ou Nether Strike porque os dois ignoram BKB; a defesa real é velocidade de movimento e visão de mapa pra não ser pego sozinho, exatamente o que o Tether oferece
- como jogar: evita andar sozinho longe do aliado tetherado quando Spirit Breaker está fora de visão, porque a Charge não é bloqueada por BKB; usa a velocidade extra do Tether pra sair de linha de visão antes dele travar o alvo
- fonte: pro_dados/wisp.json; pro_dados/spirit_breaker.json; constants_abilities.json (spirit_breaker_charge_of_darkness, spirit_breaker_greater_bash, spirit_breaker_nether_strike, wisp_tether, wisp_overcharge)

## Contra Bristleback (bristleback)

- placar: 21 vitórias em 31 jogos de pro, 67,7% pra Io (pro_dados/wisp.json, confrontos hero_id 99), segunda maior vantagem
- por que importa: segunda maior vantagem de Io com amostra de 30+ jogos, um offlaner tanque que raramente compartilha lane com um suporte 4/5 mas que pesa no resultado por puro atrito em teamfight
- janelas: Power Treads dele (8,7) e Belt of Strength (11,2) alimentam o farm cedo. Aghanim's Shard (18,4) e Lotus Orb (17,7) chegam perto do Ultimate Scepter de Io (16,8). Bristleback precisa ficar perto do time pra estocar Warpath (dano e velocidade por feitiço lançado recentemente), mas Quill Spray dele soma dano por acerto dentro de uma janela de 14s
- o que ele faz com você: Quill Spray em área (até 500 de dano máximo empilhado) acerta todo mundo perto, inclusive quem está tetherado; Viscous Nasal Goo reduz armadura e velocidade por 5s, facilitando o resto do time focar
- o que você faz com ele: Relocate tira o aliado alvo da área de 700 de raio do Quill Spray antes do dano empilhar; como Bristleback depende de ficar de frente pro time pra reduzir dano (redução de 16 a 40% nas costas, constants_abilities.json), ele raramente ameaça Io sozinho, que não tem motivo pra brigar de perto com ele
- itens que viram: Lotus Orb dele (17,7) devolve feitiço de alvo único, então jogar Spirits direto nele é pior que deixar explodir perto; Ultimate Scepter de Io (16,8) reduz a exposição de Io porque Spirits passam a nascer sozinhos
- como jogar: evita trocar dano contínuo de perto com Bristleback, porque ele sustenta mais; foca em tirar o resto do time do alcance de Quill Spray em vez de tentar vencer ele no atrito
- fonte: pro_dados/wisp.json; pro_dados/bristleback.json; constants_abilities.json (bristleback_quill_spray, bristleback_warpath, bristleback_bristleback, wisp_relocate); aghs_desc (bristleback shard)

## Contra Storm Spirit (storm_spirit)

- placar: 12 vitórias em 33 jogos de pro, 36,4% pra Io (pro_dados/wisp.json, confrontos hero_id 17), a maior desvantagem da lista
- por que importa: maior desvantagem de Io com amostra de 30+ jogos, um mid que não compartilha lane mas cuja mobilidade global (Ball Lightning) alcança um suporte roaming tão fácil quanto o próprio Io alcança aliados
- janelas: com Bottle (1,4) e os componentes de int (Robe 11,1, Staff of Wizardry 13,0, Kaya 13,7), Storm já farma muito rápido (lh10 de 67 e XPM de 787, os maiores da lista toda, pro_dados/storm_spirit.json). A partir daí ele rotaciona o mapa inteiro gastando mana em Ball Lightning, exatamente nas janelas em que Io está sozinho fazendo deward ou salvando aliado longe
- o que ele faz com você: Ball Lightning aparece do nada em cima de Io isolado; Static Remnant (100 a 280 de dano, bloqueado por BKB, bkbpierce: No) soma burst, e Overload (slow de até 90% de velocidade de ataque e 80% de movimento por 0,8s) trava o alvo pro resto do combo
- o que você faz com ele: Black King Bar de Io (25,5) bloqueia o dano de Static Remnant, mas chega bem depois do pico de rotação de Storm; a defesa real é não ficar sozinho e visível em áreas abertas depois que ele tem Bottle e nível 6
- itens que viram: Black King Bar dele (mediana 26,1, pro_dados/storm_spirit.json) neutraliza o slow do Tether durante o combo; antes disso, o Tether ainda atrasa a fuga dele se ele errar o Ball Lightning
- como jogar: evita rotas previsíveis de roaming sozinho depois que Storm bate nível 6 com mana suficiente pro Ball Lightning; anda sempre perto de visão de time nessa janela
- fonte: pro_dados/wisp.json; pro_dados/storm_spirit.json; constants_abilities.json (storm_spirit_ball_lightning, storm_spirit_static_remnant, storm_spirit_overload, wisp_tether)

## Contra Puck (puck)

- placar: 15 vitórias em 35 jogos de pro, 42,9% pra Io (pro_dados/wisp.json, confrontos hero_id 13), segunda maior desvantagem
- por que importa: segunda maior desvantagem de Io com amostra de 30+ jogos, outro mid sem lane em comum mas com um combo de controle que ameaça qualquer suporte de HP baixo isolado
- janelas: Blink dela (17,6) chega perto do Ultimate Scepter de Io (16,8). Antes do nível 6, Illusory Orb já poka de longe (75 a 300 de dano); a partir do nível 6, o combo Waning Rift (silencia 2 a 3,5s, bloqueado por BKB, bkbpierce: No) seguido de Dream Coil (prende e estuna se o alvo se afastar, também bloqueado por BKB) é o que mata suporte isolado
- o que ele faz com você: Waning Rift silencia antes de Io reagir com Relocate, e se o cast já estava em andamento, Dream Coil ainda prende e estuna quando o alvo tenta fugir da corda
- o que você faz com ele: Black King Bar de Io (25,5) anula o combo inteiro, já que Rift e Coil são os dois bloqueados por imunidade, mas chega bem depois do Blink dela (17,6), então a janela de risco real é o meio-jogo antes do BKB
- itens que viram: Aghanim's Scepter dela faz todo mundo preso no Dream Coil ser atacado automaticamente (90% da taxa de ataque de Puck); o Shard dela (22,5) dá dano mágico bônus nos ataques e acerta todo mundo no alcance quando ela usa Phase Shift, bem perto do Black King Bar de Io; depois dos 25-26 min a troca fica muito mais segura pro lado de Io
- como jogar: evita ficar sozinho e visível entre os 17 e os 25 min, a janela entre o Blink dela e o BKB de Io; depois disso, o combo simplesmente não aplica mais
- fonte: pro_dados/wisp.json; pro_dados/puck.json; constants_abilities.json (puck_waning_rift, puck_dream_coil, puck_illusory_orb); aghs_desc (puck shard e scepter)

## Contra Warlock (warlock)

- placar: 15 vitórias em 33 jogos de pro, 45,5% pra Io (pro_dados/wisp.json, confrontos hero_id 37), terceira maior desvantagem
- por que importa: mesma posição (suporte 5) e terceira maior desvantagem de Io com amostra de 30+ jogos, porque o Golem dele ignora BKB e persegue o time inteiro por 60s seguidos
- janelas: Arcane Boots dele (10,7) e Magic Wand de Io (6,8) seguem ritmo parecido. A partir do nível 6, Rain of Chaos (estuna 0,8s na queda, ignora BKB, bkbpierce: Yes) solta um Golem com Immolation permanente e 100 a 200 de dano por ataque, que persegue por 60s inteiros
- o que ele faz com você: o estuno de queda do Golem pega todo mundo perto, mesmo com Black King Bar, e o Golem em si continua perseguindo e batendo o tempo todo que sobrevive; Fatal Bonds espalha uma fração do dano levado por um alvo pros outros amarrados, incluindo o aliado tetherado
- o que você faz com ele: Relocate tira o time do raio de 600 da queda do Golem antes do estuno, mas não resolve o Golem em si, que persegue por conta própria; Tether e Overcharge dão velocidade extra pra fugir da perseguição
- itens que viram: Aghanim's Scepter de Warlock chama 2 Golems ao mesmo tempo, dobrando a ameaça de perseguição; Black King Bar de Io (25,5) não ajuda contra o estuno nem contra o próprio Golem, que ignoram imunidade
- como jogar: trata o Golem como uma ameaça de 60s inteiros, não como um cast único, e usa Relocate pra sair do raio de queda em vez de tentar sobreviver com BKB
- fonte: pro_dados/wisp.json; pro_dados/warlock.json; constants_abilities.json (warlock_rain_of_chaos, warlock_fatal_bonds, wisp_relocate, wisp_tether); aghs_desc (warlock scepter)

## Contra Tiny (tiny)

- placar: 29 vitórias em 50 jogos de pro, 58,0% pra Io (pro_dados/wisp.json, confrontos hero_id 19), vantagem
- por que importa: é o carry mais jogado em pro contra Io mesmo sem lane em comum (Tiny é pos1, Io é suporte 4/5), porque o combo Toss + Avalanche executa suporte de HP baixo de qualquer lane, e o volume de 50 jogos mostra que esse confronto pesa de verdade no resultado
- janelas: Blink de Tiny (15,9) fica perto do Holy Locket de Io (19,7). Antes do Blink dele, Tiny farma puro (lh10 de 44, GPM alto, pro_dados/tiny.json). Depois, Avalanche (estuna em pulsos, 90 a 360 de dano total) seguido de Toss (joga o alvo, 90 a 360 de dano) é o combo de pick clássico, e piora depois do Grow (nível 6, mais dano de arremesso)
- o que ele faz com você: Avalanche prende em área e Toss arremessa o alvo preso pra longe, deixando ele exposto pro resto do time; com Grow, o dano do arremesso sobe bastante (até 300 de bônus)
- o que você faz com ele: Relocate tira o aliado preso no Avalanche antes do Toss completar o combo, desde que o cast de 3 a 3,5s já esteja em andamento quando o Avalanche começar; Spirits incomodam Tiny tentando segurar posição pra acertar o combo certo
- itens que viram: Blink de Tiny (15,9) é o item que decide a iniciação; Black King Bar de Io (25,5) bloqueia o estuno de Avalanche (bkbpierce: No, constants_abilities.json), então BKB pronto evita o combo completo, mas chega bem depois do Blink dele
- como jogar: mantém distância do alcance do Avalanche (600) de qualquer Tiny com nível 6 e Blink pronto, e guarda Relocate pra reagir ao combo assim que ele começa, não depois
- fonte: pro_dados/wisp.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_grow, wisp_relocate)
