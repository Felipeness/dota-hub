---
id: confrontos-pangolier
heroi: Pangolier
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/pangolier.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/slardar.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/queenofpain.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lina.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/medusa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/juggernaut.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/antimage.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/terrorblade.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
---

## Como ler esta página

Todo placar é de partidas de liga profissional (7.40 e 7.41), vindo do matchup oficial do OpenDota pro Pangolier (hero_id 120). "Placar" sempre do ponto de vista do Pangolier: vitórias dele contra aquele herói. Os 14 oponentes abaixo foram escolhidos assim: os 6 com mais jogos de pro contra o Pangolier (Hoodwink, Rubick, Tusk, Snapfire, Slardar, Ember Spirit); mais 3 rivais da mesma posição (mid/offlane) com amostra grande (Queen of Pain, Mars, Storm Spirit); 2 confrontos favoráveis ao Pangolier com 30+ jogos, incluindo o de maior vantagem da base (Lina) e outro com interação direta de item (Medusa); e 3 carries sem lane em comum, incluindo 2 confrontos desfavoráveis com 30+ jogos (Juggernaut, Anti-Mage) e o carry mais jogado em pro no geral mesmo sem lane em comum (Terrorblade). Os minutos de item usados aqui são medianas de partida de liga, não médias.

## Contra Hoodwink (hoodwink)

- placar: 190V-225D em 415 partidas de pro (45,8% de vitória do Pangolier)
- por que importa: é o confronto com mais jogos de pro contra o Pangolier, o mais testado da lista
- janelas: do início até o seu Blink (mediana 19:12, pro_dados/pangolier.json): ela pode te snipar de até 3.000 de distância com o Sharpshooter carregado (até 1.350 de dano mágico aos 3s de carga, constants_abilities.json). Depois do seu Diffusal (12:24) e do Blink, você fecha a distância antes dela carregar o tiro inteiro
- o que ele faz com você: Sharpshooter é alcance 3.000, 3s de carga, até 1.350 de dano mágico, quebra e lentidão no alvo (não fura Black King Bar); Bushwhack estoura num raio de 265 perto de árvore, puxa e zera sua visão por até 2,1s, prende você nos camps de selva cheios de árvore
- o que você faz com ele: Swashbuckle fura Black King Bar (bkbpierce: Yes) e cada uma das 3 strikes ativa o Manabreak do seu Diffusal: com ela nascendo com 75 de mana e 0 de regen de mana (heroStats.json), uma dash sua já estressa o pool dela inteiro
- itens que viram: Linken's Sphere (bloqueia o Sharpshooter, que mira um herói inimigo só, constants_abilities.json); Black King Bar seu também bloqueia o Sharpshooter (bkbpierce: No)
- como jogar: não ande sozinho perto de árvore nem mesmo antes do seu Blink. Depois do Diffusal, procure trocar logo após ela gastar Bushwhack ou Boomerang, quando a mana dela já está baixa
- fonte: pro_dados/pangolier.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_sharpshooter, hoodwink_bushwhack, pangolier_swashbuckle); heroStats.json (hoodwink base_mana/base_mana_regen)

## Contra Rubick (rubick)

- placar: 165V-172D em 337 partidas de pro (49,0% de vitória do Pangolier)
- por que importa: 2º confronto com mais jogos de pro contra o Pangolier, um suporte de roam que tenta te travar antes de você fechar o combo
- janelas: antes do seu Blink (19:12): cuidado com o Telekinesis de longe (550-625 de alcance, constants_abilities.json). Depois, seu Swashbuckle (fura BKB) ainda conecta mesmo que ele tente te travar com Fade Bolt, que não fura BKB
- o que ele faz com você: Telekinesis levanta você e estuna todo mundo num raio de 300-375 quando você cai (não fura BKB); Fade Bolt reduz seu dano de ataque e de feitiço em até 24% por 10s, o que corta o dano físico das suas próprias strikes de Swashbuckle
- o que você faz com ele: Swashbuckle fura BKB, então mesmo que ele compre um Black King Bar pra se proteger (incomum: BKB nem aparece entre os itens mais frequentes do Rubick em pro, pro_dados/rubick.json), sua dash ainda acerta; Rolling Thunder, uma vez rolando, te deixa com imunidade a debuff e 80% de resistência mágica, o que esvazia boa parte do combo dele
- itens que viram: Linken's Sphere bloqueia a Telekinesis (feitiço de alvo único), mesma lógica do Hoodwink
- como jogar: bata nele de surpresa, sem dar linha de visão pro Telekinesis; depois que ele gasta Fade Bolt e Telekinesis, ele fica com pouco pra te segurar até a recarga voltar
- fonte: pro_dados/pangolier.json; pro_dados/rubick.json; constants_abilities.json (rubick_telekinesis, rubick_fade_bolt, pangolier_gyroshell)

## Contra Tusk (tusk)

- placar: 166V-160D em 326 partidas de pro (50,9% de vitória do Pangolier)
- por que importa: 3º confronto com mais jogos de pro, outro iniciador de all-in curto que disputa a mesma janela de pick-off que você
- janelas: o Blink dele sai mediana 19:00 (pro_dados/tusk.json), bem perto do seu (19:12): quem blinka primeiro geralmente inicia a troca
- o que ele faz com você: Walrus Kick fura Black King Bar (bkbpierce: Yes), 550 de dano e empurra 1.200 de distância; mesmo com seu BKB ligado, ele ainda te chuta e te trava se chegar a 250 de distância
- o que você faz com ele: Ice Shards e Snowball não furam BKB, então seu próprio BKB (ou a imunidade de debuff do Rolling Thunder) bloqueia as duas; Swashbuckle também fura BKB, então é uma troca onde os dois conseguem furar a defesa do outro, decide quem chega primeiro
- itens que viram: Black King Bar bloqueia Ice Shards e Snowball, mas não o Walrus Kick; fique de olho no raio curto (250) do Kick mesmo de BKB ligado
- como jogar: evite ficar parado perto da selva dele depois que ele tiver nível 6; sua mobilidade (dash de até 800 e Rolling Thunder de 10-12s rolando) geralmente supera o alcance curto do kit dele (250-1.200), então não precisa aceitar a troca perto da torre dele
- fonte: pro_dados/pangolier.json; pro_dados/tusk.json; constants_abilities.json (tusk_walrus_kick, tusk_ice_shards, tusk_snowball)

## Contra Snapfire (snapfire)

- placar: 129V-159D em 288 partidas de pro (44,8% de vitória do Pangolier)
- por que importa: 4º confronto com mais jogos de pro e também joga mid/offlane como você em parte dos jogos, rival direto de posição em boa parte das partidas
- janelas: o Blink dela sai mediana 20:42 (pro_dados/snapfire.json), depois do seu (19:12): você costuma chegar no Blink primeiro, por pouco
- o que ele faz com você: Scatterblast (cone, +30% de dano a até 450 de distância), Firesnap Cookie (stun de 1-2,2s no pouso) e Mortimer Kisses (barragem de 5,5s) formam um combo de travar e queimar; nenhuma das três fura Black King Bar
- o que você faz com ele: seu BKB (ou a imunidade do Rolling Thunder) anula o combo inteiro dela, já que nenhuma das peças fura; Swashbuckle fura BKB, então mesmo que ela se proteja com um, sua dash ainda acerta
- itens que viram: Black King Bar é o item decisivo dos dois lados: quem tiver primeiro anula o combo do outro
- como jogar: não entre no alcance de 450 do Scatterblast sem BKB ou sem já estar rolando; depois que ela gasta a ultimate (5,5s em que ela fica com giro reduzido e exposta), é a sua janela de cima pra iniciar
- fonte: pro_dados/pangolier.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_firesnap_cookie, snapfire_mortimer_kisses)

## Contra Slardar (slardar)

- placar: 128V-142D em 270 partidas de pro (47,4% de vitória do Pangolier)
- por que importa: 5º confronto com mais jogos de pro e rival direto de posição: ele também joga offlane e mid do mesmo jeito que você, com o mesmo plano de Blink pra iniciar
- janelas: o Blink dele sai mediana 13:18 (pro_dados/slardar.json), bem antes do seu (19:12): até os 19 min ele costuma ter a iniciativa. Depois do seu Diffusal (12:24), seu Manabreak já pode ter drenado parte da mana que ele reservaria pra Crush e Corrosive Haze
- o que ele faz com você: Slithereen Crush atordoa 0,8s em área e deixa poça de slow; Corrosive Haze reduz sua armadura em 10-20 e fura BKB (bkbpierce: Yes); Bash of the Deep (a cada 3 ataques) também fura BKB
- o que você faz com ele: Swashbuckle fura BKB igual o Bash dele, troca simétrica; suas 3 strikes com Diffusal queimam a mana que ele precisa pra Crush (100) antes mesmo dele iniciar
- itens que viram: nenhum BKB resolve Corrosive Haze nem o Bash dele (os dois furam); a corrida real é de Blink e de mana, não de imunidade
- como jogar: antes dos 13 min, jogue com cautela perto da selva dele, porque o Blink dele chega primeiro; depois do seu Diffusal, procure brigar logo após ele gastar Crush ou Haze, quando a mana dele já caiu
- fonte: pro_dados/pangolier.json; pro_dados/slardar.json; constants_abilities.json (slardar_slithereen_crush, slardar_amplify_damage, slardar_bash)

## Contra Ember Spirit (ember_spirit)

- placar: 136V-133D em 269 partidas de pro (50,6% de vitória do Pangolier)
- por que importa: 6º confronto com mais jogos de pro e o rival de posição mais estrito da lista: Ember Spirit é quase sempre mid em pro, exatamente a posição principal do Pangolier
- janelas: o BKB dele sai mediana 27:06 e o seu Scepter mediana 24:54: os dois picos de meio de jogo ficam próximos, então o 1x1 nessa janela costuma ser decidido por quem ataca primeiro, não por item
- o que ele faz com você: Sleight of Fist fura Black King Bar (bkbpierce: Yes), dano bônus de até 170 em herói; mesmo com seu BKB ligado ele ainda te acerta com o dash dele
- o que você faz com ele: Swashbuckle também fura BKB (troca simétrica), mas seu alcance de dash no nível 4 (800) é maior que o alcance de cast do Sleight dele (650), o que te dá uma margem pra abrir primeiro; Flame Guard dele absorve dano mágico, então sua Swashbuckle e Shield Crash (ambas físicas) passam direto por cima do escudo
- itens que viram: Mage Slayer (item do seu próprio core situacional) reduz 40% do dano de feitiço dele por 3s a cada acerto, o que corta bastante o Searing Chains e o Fire Remnant, os dois mágicos
- como jogar: abra a troca você primeiro quando puder, já que seu alcance de dash supera o dele; depois do Diffusal, o Manabreak em 3 instâncias estressa a mana que ele precisa pra Flame Guard e Fire Remnant
- fonte: pro_dados/pangolier.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_sleight_of_fist, ember_spirit_flame_guard, pangolier_swashbuckle)

## Contra Queen of Pain (queenofpain)

- placar: 149V-108D em 257 partidas de pro (58,0% de vitória do Pangolier)
- por que importa: rival de mid com grande amostra entre os confrontos favoráveis ao Pangolier, bom exemplo de por que ele ganha de magos sem disable
- janelas: ela não tem nenhum stun ou root, só o Blink (deslocamento puro, sem invulnerabilidade): do nível 6 dela em diante ela pode te queimar de longe com Sonic Wave (dano puro, fura BKB), mas sem conseguir te prender no lugar
- o que ele faz com você: Sonic Wave é dano puro (325-625) e fura Black King Bar; Scream of Pain e Shadow Strike somam mais burst mágico, mas nenhuma das quatro habilidades dela tem stun ou root
- o que você faz com ele: Rolling Thunder estuna 1,2s ao pousar e Swashbuckle desacelera 100% por 0,6s a cada strike: como ela não tem ferramenta de fuga além do Blink curto, uma vez que você fecha a distância ela fica presa no combo
- itens que viram: Mage Slayer reduz 40% do dano de feitiço dela por 3s, cortando o burst de Sonic Wave e Scream, que são praticamente todo o dano dela
- como jogar: não entre na troca de longe esperando ela errar o burst; feche a distância rápido (dash + blink), porque uma vez que ela gasta o combo sem matar você, ela fica sem resposta até reciclar os feitiços
- fonte: pro_dados/pangolier.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_sonic_wave, queenofpain_blink)

## Contra Mars (mars)

- placar: 124V-105D em 229 partidas de pro (54,1% de vitória do Pangolier)
- por que importa: rival direto de offlane com alta amostra, e um confronto de iniciador contra iniciador
- janelas: o Blink dele sai mediana 15:12 (pro_dados/mars.json), antes do seu (19:12): até ali ele pode te prender na Arena of Blood primeiro
- o que ele faz com você: Arena of Blood cerca uma área de raio 550 por 5,5s com 14 guerreiros que atacam quem está perto da borda (80-240 de dano por lança, constants_abilities.json); o campo "pierces_debuff_immunity" da habilidade está marcado como 0 no dado local, ou seja, nada confirma que a jaula em si atravessa imunidade a debuff
- o que você faz com ele: por isso, entrar na Arena já rolando (Rolling Thunder ou Roll Up, os dois com imunidade a debuff e 80% de resistência mágica) é sua melhor chance de atravessar a cerca antes dela acabar; Swashbuckle fura BKB, então mesmo que ele se proteja, sua dash ainda acerta
- itens que viram: nenhum item seu muda a Arena diretamente; a resposta é a própria imunidade do Rolling Thunder/Roll Up, não um item
- como jogar: se ele te pegar dentro da Arena, ative Rolling Thunder ou Roll Up na hora pra tentar atravessar a cerca antes do fim dos 5,5s; evite ficar parado perto da borda, onde as lanças batem
- fonte: pro_dados/pangolier.json; pro_dados/mars.json; constants_abilities.json (mars_arena_of_blood, pangolier_gyroshell, pangolier_rollup)

## Contra Storm Spirit (storm_spirit)

- placar: 108V-99D em 207 partidas de pro (52,2% de vitória do Pangolier)
- por que importa: outro rival estrito de mid, confronto de mobilidade contra mobilidade
- janelas: o BKB dele sai mediana 26:06 (pro_dados/storm_spirit.json), perto do seu Scepter (24:54): se ele não tiver BKB ainda, seu combo resolve; se tiver, o Overload dele continua sem furar o seu
- o que ele faz com você: Electric Vortex te puxa pra cima dele (300 de alcance) e Overload soma dano no próximo ataque dele; nenhuma das duas fura Black King Bar
- o que você faz com ele: seu BKB (ou a imunidade do Rolling Thunder) anula o Vortex e o Overload por completo, já que nenhuma das duas fura Black King Bar (constants_abilities.json)
- itens que viram: Black King Bar seu é o item que mais pesa aqui: sem ele, o combo dele te puxa e queima; com ele, o combo dele simplesmente não acontece
- como jogar: priorize seu BKB se ele estiver rotacionando muito pra cima de você; sem BKB nenhum dos dois lados, quem abrir primeiro geralmente ganha, porque o Vortex-puxão dele é rápido mas Swashbuckle tem mais alcance de abertura
- fonte: pro_dados/pangolier.json; pro_dados/storm_spirit.json; constants_abilities.json (storm_spirit_electric_vortex, storm_spirit_overload)

## Contra Lina (lina)

- placar: 57V-35D em 92 partidas de pro (62,0% de vitória do Pangolier, o maior confronto favorável com 30+ jogos)
- por que importa: maior amostra entre os confrontos mais favoráveis ao Pangolier (62% de vitória), e ela também costuma jogar mid, rival de posição também
- janelas: ela não tem blink nem dash própria: do início ao fim da partida sua vantagem de mobilidade (Swashbuckle com até 800 de alcance e Rolling Thunder) é constante, não só numa janela
- o que ele faz com você: Light Strike Array tem 0,5s de delay antes de estourar (dá pra fugir vendo o indicador) e Laguna Blade causa 380-750 de dano de alvo único, mas não fura Black King Bar
- o que você faz com ele: como ela não tem nenhuma forma de fugir de perto além de andar, Swashbuckle (100% de slow por strike) e Rolling Thunder (stun ao pousar) a prendem assim que você fecha a distância
- itens que viram: Black King Bar seu bloqueia a Laguna Blade inteira (bkbpierce: No, confirmado em constants_abilities.json), a única coisa dela capaz de te matar rápido
- como jogar: force a troca de perto sempre que puder; ela depende de acertar o combo à distância, e sem escape nenhum ela perde praticamente toda troca corpo a corpo contra você
- fonte: pro_dados/pangolier.json; pro_dados/lina.json; constants_abilities.json (lina_laguna_blade, lina_light_strike_array)

## Contra Medusa (medusa)

- placar: 25V-16D em 41 partidas de pro (61,0% de vitória do Pangolier; amostra pequena, mas acima do corte de 30 jogos)
- por que importa: carry sem lane em comum com o Pangolier, mas com um dos maiores confrontos favoráveis da lista; o Mana Shield dela cria uma interação direta com o Manabreak do seu Diffusal
- janelas: até o Manta dela (mediana 15:00, pro_dados/medusa.json): ela não tem nenhuma forma de fugir ou se defender de perto, e seu Diffusal (12:24) já está pronto bem antes disso
- o que ele faz com você: Split Shot é farm, não ameaça direta em 1x1 antes do nível 20; Mystic Snake é mais sustento de mana (devolve 15% da mana máxima de cada alvo) do que burst contra herói sozinho
- o que você faz com ele: o Mana Shield dela absorve 98% do dano trocando por mana (2 de mana por ponto de dano, constants_abilities.json); cada strike de Swashbuckle com Diffusal queima a mana dela pelo Manabreak, que é exatamente o recurso que sustenta o escudo. Drenada a mana, o resto do seu dano passa direto, sem o desconto de 98%
- itens que viram: Diffusal Blade é o item chave aqui, pela interação Manabreak contra Mana Shield, não só pelo dano bruto
- como jogar: ataque antes do Manta dela (15:00) e principalmente antes do Eye of Skadi (28:24, quando ela ganha corpo de verdade); gaste o combo justamente quando a mana dela já estiver baixa, pra tirar o desconto do escudo
- fonte: pro_dados/pangolier.json; pro_dados/medusa.json; constants_abilities.json (medusa_mana_shield, pangolier_swashbuckle)

## Contra Juggernaut (juggernaut)

- placar: 40V-70D em 110 partidas de pro (36,4% de vitória do Pangolier, a maior desvantagem da lista com 30+ jogos)
- por que importa: maior amostra entre os confrontos desfavoráveis ao Pangolier, carry sem lane em comum, mas com 2 ferramentas de imunidade a debuff que anulam boa parte do kit dele
- janelas: Blade Fury já dá imunidade a debuff e 80% de resistência mágica por 5s assim que ele a ativa; Omnislash (ultimate, sempre nível 6) te dá o aviso: a partir do nível 6 ele tem fuga garantida (invulnerável durante o slash) em qualquer troca que esteja perdendo
- o que ele faz com você: Blade Fury bloqueia o stun do seu Rolling Thunder e o slow 100% do seu Swashbuckle enquanto ele está girando (debuff immunity); Omnislash (fura BKB) deixa ele sair de uma troca ruim ficando invulnerável
- o que você faz com ele: seu dano físico (Swashbuckle e Shield Crash) não é reduzido pela resistência mágica de 80% do Blade Fury, já que ela só vale contra dano mágico; o combo precisa acertar antes dele ativar Blade Fury ou Omnislash, não durante
- itens que viram: Abyssal Blade (já no seu core situacional) tem o ativo Overwhelm, que segundo items.json atravessa imunidade a debuff; é o jeito de travar um Juggernaut que já está girando ou já ativou Omnislash
- como jogar: trave o stun (Rolling Thunder ou Swashbuckle) antes dele reagir com Blade Fury; depois disso, ou você tem Abyssal pra furar, ou espera a janela de 5s passar
- fonte: pro_dados/pangolier.json; pro_dados/juggernaut.json; constants_abilities.json (juggernaut_blade_fury, juggernaut_omni_slash); items.json (abyssal_blade: Overwhelm pierces debuff immunity)

## Contra Anti-Mage (antimage)

- placar: 13V-22D em 35 partidas de pro (37,1% de vitória do Pangolier; amostra pequena, no limite dos 30 jogos)
- por que importa: carry sem lane em comum, mas o Mana Break dele ataca exatamente o recurso que o combo do Pangolier mais precisa (mana), e isso aparece já nas primeiras trocas
- janelas: Battle Fury dele sai mediana 14:06 (pro_dados/antimage.json), pouco depois do seu Diffusal (12:24): até ali, se você fechar o combo primeiro, a troca é sua; depois, cada auto-ataque dele custa parte da sua mana
- o que ele faz com você: Mana Break queima 25-40 de mana por ataque e causa dano igual a 50% dessa mana queimada; como seu combo (Swashbuckle, Rolling Thunder, Shield Crash) depende de mana sem nenhuma fonte de sustain própria forte, dois ou três ataques dele já apertam seu pool
- o que você faz com ele: seu Diffusal também queima mana dele (Manabreak, 40 por hit × 3 strikes), e como Swashbuckle fura BKB, mesmo que ele se proteja o dano físico ainda passa; Mana Void dele (dano por mana que falta no alvo) rende menos se você já estiver com pouca mana por causa do próprio Mana Break dele, um efeito que se auto-limita
- itens que viram: nenhum item seu neutraliza o Mana Break diretamente; a resposta é administrar mana (Magic Wand, Clarity) antes de entrar na troca, não brigar com mana vazia
- como jogar: evite trocar auto-ataque à toa com ele; vá direto pro combo completo numa só investida, porque cada round de troca sem matar esvazia seu pool e facilita o Mana Void dele depois
- fonte: pro_dados/pangolier.json; pro_dados/antimage.json; constants_abilities.json (antimage_mana_break, antimage_mana_void, pangolier_swashbuckle)

## Contra Terrorblade (terrorblade)

- placar: 63V-85D em 148 partidas de pro (42,6% de vitória do Pangolier; maior amostra entre carries sem lane em comum)
- por que importa: o carry mais jogado em pro contra o Pangolier mesmo sem lane compartilhada, pedido explícito de comparação de 2 cores que raramente se cruzam cedo
- janelas: até o Manta dele (mediana 17:06, pro_dados/terrorblade.json): ele ainda é um corpo a corpo comum, e seu Diffusal (12:24) mais Blink (19:12) chegam quase junto. Depois do Aghanim's Shard (mediana 17:24, pro_dados/terrorblade.json), o Demon Zeal aumenta o dano das ilusões dele
- o que ele faz com você: Metamorphosis te torna alvo de um corpo a corpo que vira ranged (450-600 de alcance) por 35-50s; Sunder troca uma % da vida atual entre os dois, o que pode virar uma troca que você estava ganhando em vida bruta
- o que você faz com ele: antes do Manta, ele é só mais um corpo a corpo sem fuga própria forte (Metamorphosis não é blink); pegue ele parado nessa janela, de preferência durante a transformação de 0,35s
- itens que viram: Black King Bar bloqueia o Sunder dele (bkbpierce: No, constants_abilities.json), tirando a ferramenta que mais equilibra uma troca de vida contra você
- como jogar: force o 1x1 antes do Manta/Shard dele (por volta dos 17 min); depois disso, evite ficar parado trocando, use Rolling Thunder pra hit-and-run em vez de duelo direto
- fonte: pro_dados/pangolier.json; pro_dados/terrorblade.json; constants_abilities.json (terrorblade_metamorphosis, terrorblade_sunder)
