---
id: confrontos-ancient_apparition
heroi: Ancient Apparition
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ancient_apparition.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/largo.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/warlock.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/necrolyte.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/sniper.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/leshrac.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/spirit_breaker.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/clinkz.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/explorer (partidas de liga, patches 7.40-7.41)
---

## Como essa lista foi montada

9 confrontos vêm do critério de volume: os 6 com mais partidas de pro contra o AA (`confrontos` do `pro_dados`) mais os suportes de posição 4/5 que mais aparecem em pro contra ele (Rubick, Largo, Warlock entram por aí, Jakiro/Ogre Magi/Disruptor já entram pelo volume). Os outros 6 vêm do critério de vantagem/desvantagem: Necrophos e Sniper são os 2 maiores win rates do AA entre confrontos com 30+ jogos (62,9% e 60,0%); Mars completa o trio de vantagem como o confronto de maior amostra (88 jogos, 58,0% de vitórias) entre os heróis que ainda não entraram na lista por volume. Leshrac, Spirit Breaker e Clinkz são as 3 maiores derrotas com 30+ jogos. Nenhum dos 15 tem amostra abaixo de 30 jogos. AA tem gpm mediano baixo (312, `ancient_apparition.json` resumo) típico de suporte puro, então o critério "sempre incluir os carries mais jogados mesmo sem lane em comum" não se aplica a ele; Shadow Fiend e Sniper entram por volume e vantagem, não por regra de carry.

## Contra Jakiro (jakiro)

- placar: 54/120 pro AA (45,0%), fonte: `ancient_apparition.json` (confrontos, hero_id 64)
- por que importa: maior amostra de pro do confronto (120 jogos). Mesma função: os dois são suportes de área e controle que disputam a mesma rota de ward e os mesmos itens de suporte.
- janelas: até 11-12min os dois estão emparelhados em bota (AA arcane boots mediana 11,7min, Jakiro 11,7min também). No nível 2, Ice Path de Jakiro (cast point 0,65s, stun até 2s em área) já acerta mais rápido do que o Cold Feet do AA consegue fechar (precisa de 4s de curse rodando sem o alvo sair da distância de quebra). Com nível 6 (13-20min), Macropyre (100 a 200 de dano por segundo, 10s, não dispelável) vence qualquer troca parada porque é dano em área sustentado contra o dano de alvo único do Cold Feet. Depois dos 20min, com Aghanim's Shard do AA (mediana 24,4min, p25 19,8) pronto antes do item de luxo do Jakiro, o AA volta a fechar stun mesmo contra fuga.
- o que ele faz com você: Macropyre sozinho mata um suporte sem sustain como o AA se ele ficar parado dentro da área depois que o Ice Path já travou o grupo.
- o que você faz com ele: Ice Vortex (1200 de alcance de cast, até 12s de slow e +25% de dano mágico recebido no nível 4) marca o alvo de longe pra Chilling Touch (30-120 de dano no ataque, 100% de slow por quase 1s) sem precisar se aproximar; Jakiro precisa ficar parado pra lançar Macropyre, e nesse momento ele está dentro da distância de quebra do Cold Feet.
- itens que viram: Aghanim's Shard do AA, porque congela o alvo por 50% da duração do stun completo mesmo que ele fuja da distância de quebra do Cold Feet, fechando o problema de velocidade contra o Ice Path mais rápido do Jakiro.
- como jogar: na lane, poke de longe com Ice Vortex e evite ficar parado perto do Jakiro depois do nível 6. Depois dos 20min, jogue o Cold Feet de fora dos 1400 de alcance de cast do Macropyre antes de avançar junto com o time.
- fonte: ancient_apparition.json (confrontos); jakiro.json (resumo, itens); constants_abilities.json (ancient_apparition_cold_feet, ancient_apparition_ice_vortex, ancient_apparition_chilling_touch, jakiro_ice_path, jakiro_macropyre)

## Contra Shadow Fiend (nevermore)

- placar: 63/117 pro AA (53,8%), fonte: `ancient_apparition.json` (confrontos, hero_id 11)
- por que importa: 2ª maior amostra de pro do confronto (117 jogos). É mid carregador de jogo (gpm mediano 658, xpm 813, fonte `nevermore.json`), não divide lane com o AA, mas é um dos picks mais comuns do patch e sem fuga própria até o meio de jogo, exatamente o perfil que o kit do AA pune.
- janelas: até 21min Shadow Fiend não tem nenhuma forma de fuga: a sequência mediana de pro é Falcon Blade aos 6,2min, Power Treads aos 5,9min, Mask of Madness aos 10,2min e Manta Style aos 18,5min (partidas pro 7.40-7.41, OpenDota), nenhum desses dá escape. O primeiro item de saída só chega com Hurricane Pike aos 23,0min (mediana `nevermore.json`) ou Black King Bar aos 25,2min. É exatamente a janela em que o Ice Blast do AA (disponível desde o nível 6, mediana de Aghanim's Shard do AA aos 24,4min pra reforçar o combo) executa sem resposta: sem blink, sem invisibilidade, sem dispel até o BKB.
- o que ele faz com você: Shadowraze (85-280 de dano, cast point 0,55s, 3 variantes de curto alcance) e Requiem of Souls (cast point 1,67s, até 20 almas convertidas em slow e redução de resistência em área de 1000) acabam com o HP baixo do AA (vida base baixa de int puro) numa única rodada se o AA for pego sem Cold Feet ativo primeiro.
- o que você faz com ele: Ice Blast ignora BKB e bloqueia toda cura/regen por até 12s, cortando o sustain que viria de Satanic (item de late game do SF); o cast point longo de Requiem (1,67s) dá tempo de interromper com Cold Feet se a curse já estiver rodando perto do fim dos 4s.
- itens que viram: Rod of Atos do AA (root de 2,0s, mediana 19,7min nos dados de pro do herói) cai bem antes do Hurricane Pike do SF (23,0min) ficar pronto, fechando a janela de fuga que ele ainda não tem.
- como jogar: gankar o SF antes dos 20min é onde o AA ganha o confronto, porque ele não tem recurso de escape nenhum até lá. Depois do Hurricane Pike e do BKB, o AA precisa gastar os dois (Cold Feet pro stun, Ice Blast pro corte de cura) na mesma rodada, porque separado o SF escapa ou atravessa o BKB sem sentir a curse.
- fonte: ancient_apparition.json (confrontos); nevermore.json (resumo, itens); partidas pro 7.40-7.41 (OpenDota, item manta); constants_abilities.json (ancient_apparition_ice_blast, nevermore_requiem, nevermore_shadowraze1)

## Contra Ogre Magi (ogre_magi)

- placar: 53/112 pro AA (47,3%), fonte: `ancient_apparition.json` (confrontos, hero_id 84)
- por que importa: 3ª maior amostra de pro do confronto (112 jogos). Mesma posição principal (pos 5), confronto direto de suporte duro contra suporte duro.
- janelas: até 10-11min a troca é parelha, os dois com Magic Wand e bota cedo. A partir do nível 2, Fireblast de Ogre Magi (cast range 525, stun 1,2s, cast point 0,45s) é mais curto de alcance que o Cold Feet do AA (até 1000 no nível 4), então o AA pode poke de fora do alcance do stun do Ogre. O perigo do Ogre cresce com Multicast (chance de repetir qualquer feitiço de graça, escala com Força): depois do nível 6-7, um Fireblast ou Ignite multicastado dobra o dano sem custo extra de mana, e aí a troca vira ruim pro AA se ele ficar perto. Depois dos 20min, Aghanim's Shard do Ogre (Fire Shield, absorve 85% dos 3 próximos ataques e devolve bola de fogo, mediana 26,1min, p25 23,2) protege o carry do Ogre do Chilling Touch do AA.
- o que ele faz com você: Fireblast com Multicast pode travar o AA duas vezes seguidas (a cada 0,6s de delay de multicast) antes dele completar o Cold Feet.
- o que você faz com ele: Cold Feet alcança mais longe que o Fireblast em todos os níveis (700-1000 contra 525 fixo), então o AA pune qualquer avanço do Ogre antes dele chegar perto o bastante pra stunar.
- itens que viram: Blink Dagger de qualquer um dos dois decide quem fecha a distância primeiro, já que nenhum herói tem mobilidade própria no kit.
- como jogar: fique sempre fora dos 525 de alcance do Fireblast enquanto farma visão, e puna o Ogre com Cold Feet assim que ele tentar se aproximar pra castar. Depois do nível 6-7 dele, não troque feitiço de perto, porque o Multicast vira a moeda contra você.
- fonte: ancient_apparition.json (confrontos); ogre_magi.json (resumo, itens); constants_abilities.json (ancient_apparition_cold_feet, ogre_magi_fireblast)

## Contra Snapfire (snapfire)

- placar: 39/103 pro AA (37,9%), fonte: `ancient_apparition.json` (confrontos, hero_id 128)
- por que importa: 4ª maior amostra de pro do confronto (103 jogos) e também uma das maiores desvantagens do AA no recorte: é a iniciadora que mais fecha distância em cima dele antes do Cold Feet funcionar.
- janelas: a janela que mais importa é a de iniciação: Blink Dagger entra por volta dos 20min (pico de compra entre 15-30min, `snapfire.json`) e Aghanim's Shard é o item mais comprado dela no meio de jogo (mediana 16,9min). Com Shard pronto, Firesnap Cookie (alcance 650, cast point 0,2s) cura o alvo e ainda solta uma Mortimer Kisses fraca no pouso: ela ataca em dois tempos rápidos, mais rápido que o combo de 4s do Cold Feet.
- o que ela faz com você: Blink + Firesnap Cookie salta e atordoa quem aterrissa, fechando o gap que o AA não tem recurso pra evitar sozinho; dentro de 450 de distância, Scatterblast ainda dá 30% mais dano e 50% mais duração de slow (bônus point-blank), punindo o AA se ele for pego perto.
- o que você faz com ele: Ice Vortex de 1200 de alcance marca o combo de Blink da Snapfire antes dela chegar perto, e o Cold Feet, se já estiver rodando quando ela aterrissa o Firesnap Cookie, ainda fecha o stun porque a curse não depende do estado do AA, só da distância do alvo.
- itens que viram: Black King Bar da Snapfire (comprado em boa parte das partidas no fim de jogo) atravessa o Cold Feet, já que a habilidade não tem `bkbpierce`; o Ice Blast do AA, que tem `bkbpierce: Yes`, segue acertando mesmo assim.
- como jogar: mantenha distância de mais de 1200 (fora do blink dela) sempre que possível e não ande sozinho perto de arbustos depois dos 15min. Depois que ela tiver Shard e Blink prontos, jogue o Cold Feet preventivo em vez de reativo, porque reagir ao salto geralmente é tarde.
- fonte: ancient_apparition.json (confrontos); snapfire.json (resumo, itens); constants_abilities.json (ancient_apparition_cold_feet, ancient_apparition_ice_blast, snapfire_firesnap_cookie)

## Contra Tusk (tusk)

- placar: 39/99 pro AA (39,4%), fonte: `ancient_apparition.json` (confrontos, hero_id 100)
- por que importa: 5ª maior amostra de pro do confronto (99 jogos). Dupla de suporte que usa o mesmo papel de roam e visão que o AA, mas com um combo de burst físico rápido.
- janelas: até 19-21min nenhum dos dois tem o item-chave pronto: Blink Dagger do Tusk tem mediana de 19,0min (p25 16,8), quase no mesmo tempo do Aghanim's Shard do AA (24,4min, um pouco depois). Antes disso, o combo do Tusk (Ice Shards pra bloquear, Snowball, Walrus Kick a 250 de alcance e 550 de dano fixo) depende de perseguição a pé, que o Cold Feet já pune de longe. Depois do Blink, o Tusk fecha o combo inteiro (Snowball com aliados dentro, Tag Team, Walrus Kick) em menos de 2s, rápido demais pro AA reagir se for pego primeiro.
- o que ele faz com você: Blink no meio do grupo, Snowball arrastando aliados, Walrus Kick de 550 de dano fixo: é dano físico alto e instantâneo, perigoso pro HP baixo do AA.
- o que você faz com ele: Cold Feet alcança 700-1000 contra os 250 do Walrus Kick, então o AA controla a distância do poke antes do Tusk fechar o combo corpo a corpo.
- itens que viram: Rod of Atos do AA (root de 2,0s, mediana 19,7min) trava o Tusk antes do Blink dele ficar pronto na maioria das partidas, zerando a vantagem de iniciação; depois dos 20min, quem tiver o próprio Blink pronto primeiro dita quem inicia.
- como jogar: evite ficar isolado perto de arbustos depois dos 15min, porque é quando o Blink do Tusk costuma ficar pronto. Use o Cold Feet assim que ele se aproximar a pé, antes do nível 6 dele, pra negar o combo inteiro de uma vez.
- fonte: ancient_apparition.json (confrontos); tusk.json (resumo, itens); constants_abilities.json (ancient_apparition_cold_feet, tusk_walrus_kick)

## Contra Disruptor (disruptor)

- placar: 58/97 pro AA (59,8%), fonte: `ancient_apparition.json` (confrontos, hero_id 87)
- por que importa: maior vantagem do AA entre os confrontos de volume (97 jogos) e mesma posição principal (pos 5), os dois suportes de área e controle mais comuns do patch.
- janelas: até 11min os dois priorizam Arcane Boots (AA 11,7min, Disruptor 11,4min) pela mesma razão: mana curta pra sustentar feitiço. Kinetic Field (900 de alcance, jaula de 350 de raio) só fica forte com Static Storm no nível 6 (silêncio em área de 550 por 6s), e até lá o Disruptor não tem resposta de dano pro poke de longo alcance do Ice Vortex do AA (1200 de alcance). Depois do nível 6, a jaula do Disruptor trava o grupo, mas não dispela uma curse de Cold Feet que já esteja rodando: se o AA already tiver acertado o Cold Feet antes da jaula fechar, o stun ainda dispara normalmente lá dentro.
- o que ele faz com você: Glimpse (alcance 600-1800 conforme o nível, puxa o alvo pra posição de 4s atrás) pode te arrastar de volta se você avançar demais pra fechar o Cold Feet, e Static Storm silencia o grupo inteiro, incluindo o AA, impedindo novos casts.
- o que você faz com ele: Ice Vortex alcança mais longe que todo o kit ofensivo do Disruptor (Thunder Strike 800, Kinetic Field 900, Static Storm 800), então o AA inicia a troca de poke sem risco de resposta.
- itens que viram: Aghanim's Shard do AA garante o stun parcial mesmo se o Disruptor tentar puxar o alvo pra fora da distância de quebra com Glimpse, fechando a única saída defensiva real do kit dele.
- como jogar: mantenha o poke a mais de 900 de distância antes do nível 6 do Disruptor, onde ele não tem resposta. Depois do nível 6, lance o Cold Feet antes dele fechar a Kinetic Field, porque a curse continua valendo mesmo com o alvo preso lá dentro.
- fonte: ancient_apparition.json (confrontos); disruptor.json (resumo, itens); constants_abilities.json (ancient_apparition_ice_vortex, ancient_apparition_cold_feet, disruptor_kinetic_field, disruptor_static_storm, disruptor_glimpse, disruptor_thunder_strike)

## Contra Rubick (rubick)

- placar: 42/97 pro AA (43,3%), fonte: `ancient_apparition.json` (confrontos, hero_id 86)
- por que importa: mesma posição principal (pos 4/5) e um risco mecânico direto: Spell Steal (bkbpierce sim, alcance 1000) rouba a última magia lançada pelo AA, incluindo o próprio Ice Blast.
- janelas: até 10-11min os dois jogam bota e Magic Wand cedo (Rubick arcane boots 10,3min, AA 11,7min). Rubick usa a ultimate em média 14,8 vezes por partida (partidas pro 7.40-7.41, OpenDota), e cada cast perto do AA é risco de perder o próprio Ice Blast ou Cold Feet pro inimigo pelo resto da duração do roubo (180-300s). Depois do nível 6 do AA, Telekinesis do Rubick (alcance 550-625, stun 0,9-1,5s) ainda é mais curto que o Cold Feet, então o AA pode poke de fora antes do Rubick chegar perto o bastante pra roubar algo.
- o que ele faz com você: Spell Steal rouba o Cold Feet ou o Ice Blast do próprio AA assim que um dos dois é lançado perto dele, e Telekinesis interrompe qualquer canalização.
- o que você faz com ele: Cold Feet (até 1000 de alcance no nível 4) acerta o Rubick de fora do alcance de Telekinesis dele (máximo 625), então o AA pode poke sem risco de perder o próprio combo pro Spell Steal, desde que não lance o Ice Blast perto demais do Rubick antes de precisar.
- itens que viram: nenhum item resolve o roubo de feitiço; a única resposta é sequência (gastar o Ice Blast só quando o Rubick já castou algo diferente há pouco, porque Spell Steal pega sempre a última magia vista).
- como jogar: não lance Ice Blast ou Cold Feet perto do Rubick sem necessidade, porque qualquer um dos dois vira arma dele por até 5 minutos. Prefira acertar o Cold Feet de fora do alcance de Telekinesis e force ele a gastar mana cedo antes de você precisar do seu combo principal.
- fonte: ancient_apparition.json (confrontos); rubick.json (resumo, itens); partidas pro 7.40-7.41 (OpenDota, ability_uses rubick_spell_steal); constants_abilities.json (ancient_apparition_cold_feet, rubick_spell_steal, rubick_telekinesis)

## Contra Largo (largo)

- placar: 33/82 pro AA (40,2%), fonte: `ancient_apparition.json` (confrontos, hero_id 155)
- por que importa: suporte flexível (3/4/5) com 82 jogos de pro, controle físico corpo a corpo que ameaça o HP baixo do AA mais do que os outros suportes mágicos da lista.
- janelas: até 17-18min Largo gasta em Soul Ring e bota (`largo.json`), sem o core de control pronto. O risco cresce com Ultimate Scepter (mediana local 18,4min) e Aghanim's Shard (26,4min), que destravam a ultimate em "canções" de buff/dano/cura. Catchy Lick (alcance 700, puxa 235-325 de distância) é o gancho que fecha a distância antes do Cold Feet conseguir completar os 4s de curse.
- o que ele faz com você: Catchy Lick puxa o AA pra perto e Frogstomp (alcance 800, raio 350) trava o grupo em área, abrindo espaço pro resto do time físico fechar.
- o que você faz com ele: Cold Feet alcança mais longe que o Catchy Lick (700-1000 contra 700 fixo) na maior parte dos níveis, então o AA pune a aproximação antes do gancho sair; Ice Blast bloqueia a cura que Largo e o time dele dependem pra sustentar troca prolongada.
- itens que viram: Rod of Atos do AA (root 2,0s) nega o escape físico do Largo antes dele puxar com Catchy Lick; Black King Bar do Largo não bloqueia o Ice Blast, que tem `bkbpierce: Yes`.
- como jogar: mantenha distância maior que 700 enquanto ele não tiver Scepter/Shard prontos, e jogue o Cold Feet assim que ele se aproximar pra tentar o gancho. Depois dos 20min, cuidado redobrado perto de arbustos, porque a sequência de ganchos físicos dele mata o AA rápido se acertar primeiro.
- fonte: ancient_apparition.json (confrontos); largo.json (resumo, itens); constants_abilities.json (ancient_apparition_cold_feet, ancient_apparition_ice_blast, largo_catchy_lick, largo_frogstomp, largo_croak_of_genius, largo_amphibian_rhapsody)

## Contra Warlock (warlock)

- placar: 34/78 pro AA (43,6%), fonte: `ancient_apparition.json` (confrontos, hero_id 37)
- por que importa: único suporte puro de pos 5 do mesmo peso de amostra que entra na lista, disputa de área contra área.
- janelas: até 10-11min a troca é de poke a distância (AA Ice Vortex 1200 de alcance x Shadow Word de Warlock, 650-800 de alcance). O risco de Warlock cresce no nível 6 com Chaotic Offering (alcance 900, convoca Golem de 1500-3000 HP que tanka e atordoa na queda), e no meio de jogo com Fatal Bonds (alcance 1000, amarra até 6 inimigos visíveis por 18s, compartilhando parte do dano recebido entre eles).
- o que ele faz com você: Shadow Word à distância dilacera o AA sem precisar se expor, e o Golem da ultimate tanka qualquer troca direta que o AA tente sozinho.
- o que você faz com ele: Ice Blast (dano contínuo que bloqueia cura por até 12s) se torna ainda mais forte contra um grupo marcado por Fatal Bonds, porque o dano que o alvo direto sofre também é sentido pelos aliados amarrados, espalhando o corte de cura pelo grupo inteiro.
- itens que viram: Aghanim's Shard do AA garante o stun parcial do Cold Feet mesmo que o Warlock tente recuar atrás do próprio Golem; Glimmer Cape de qualquer lado decide quem sobrevive à primeira rodada de poke.
- como jogar: evite lutar perto do Golem de Warlock sem motivo, porque ele tanka e ainda atordoa. Se o time inimigo estiver com Fatal Bonds ativo, jogue o Ice Blast no alvo certo pra espalhar o corte de cura pelo grupo inteiro, não só no alvo direto.
- fonte: ancient_apparition.json (confrontos); warlock.json (resumo, itens); constants_abilities.json (ancient_apparition_ice_blast, ancient_apparition_cold_feet, warlock_shadow_word, warlock_fatal_bonds, warlock_rain_of_chaos)

## Contra Necrophos (necrolyte)

- placar: 22/35 pro AA (62,9%), fonte: `ancient_apparition.json` (confrontos, hero_id 36)
- por que importa: maior vantagem do AA entre os confrontos com 30+ jogos. Necrophos joga carry/offlane/mid no 7.41, não divide lane com o AA, mas é o exemplo mais direto do "dois heróis que não se enfrentam na lane mas um anula o outro": ele vive de cura (Death Pulse) e o Ice Blast bloqueia cura por até 12s.
- janelas: o build de pro passa por Radiance (mediana 13,7min, p25 12,3) pro clear rápido e aura de dano, depois Aghanim's Shard (mediana 17,8min) e itens de vida alta como Heart (30,5min) e Shiva's Guard (31,4min) pro late game (`necrolyte.json`). O AA não precisa esperar o próprio Ice Blast pronto cedo pra incomodar: desde o nível 6 (geralmente antes dos 15min), qualquer Ice Blast que acerte o Necrophos corta o Death Pulse como forma de sustain por até 12s, uma janela enorme pro resto do time acabar o kill.
- o que ele faz com você: Heartstopper Aura (corrói % da vida máxima de quem está perto, ignora Black King Bar) é perigosa se o AA blinkar perto demais tentando fechar Cold Feet; Reaper's Scythe (alcance 600, cast point 0,45s, stun 1,5s) executa o AA se ele estiver com pouco HP.
- o que você faz com ele: Ice Blast bloqueia o Death Pulse como fonte de cura e, se o HP do Necrophos já estiver abaixo do limiar de 12-14% (shatter health threshold), o Ice Blast sozinho fecha o kill sem precisar de dano extra do time.
- itens que viram: Ice Blast do AA é o item/skill que mais vira esse confronto, porque anula o único jeito de sustain do Necrophos em luta prolongada; Ghost Shroud dele não dispensa a curse do Cold Feet nem o corte de cura do Ice Blast.
- como jogar: guarde o Ice Blast pra quando o Necrophos já estiver engajado em luta, não pra abrir, porque o valor dele aqui é negar a cura durante a troca, não o dano inicial. Fique fora do alcance de 600 do Reaper's Scythe quando estiver com HP baixo.
- fonte: ancient_apparition.json (confrontos); necrolyte.json (resumo, itens); constants_abilities.json (ancient_apparition_ice_blast, necrolyte_reapers_scythe, necrolyte_ghost_shroud, necrolyte_heartstopper_aura)

## Contra Sniper (sniper)

- placar: 21/35 pro AA (60,0%), fonte: `ancient_apparition.json` (confrontos, hero_id 35)
- por que importa: 2ª maior vantagem do AA entre os confrontos com 30+ jogos. Sniper é mid no 7.41, sem lane com o AA, mas é o segundo exemplo claro de "carry sem mobilidade que o kit do AA executa à distância".
- janelas: o build de pro sobe Power Treads (5,9min), Maelstrom/Mjollnir (12,5min/19,0min) e Dragon Lance (16,5min) pra farmar e bater de longe, sem nenhum item de escape até Force Staff (22,8min) ou Hurricane Pike (23,4min) (`sniper.json`). É a mesma janela de execução do Shadow Fiend: antes dos ~23min, Sniper não tem recurso nenhum pra escapar do Cold Feet ou do Ice Blast.
- o que ele faz com você: Assassinate (3000 de alcance, cast point 2s, 300-500 de dano) outranga qualquer coisa do kit do AA e pode abrir uma troca de longe, mas o cast point de 2s é tempo de sobra pra interromper com Cold Feet se a curse já estiver perto de fechar o stun.
- o que você faz com ele: Cold Feet e Ice Vortex alcançam mais do que o Take Aim básico de Sniper nos primeiros níveis, e o Ice Blast executa o HP baixo dele (12-14% de limiar) sem o Sniper conseguir correr, já que ele não tem fuga própria no kit.
- itens que viram: Rod of Atos do AA (root 2,0s, mediana 19,7min) cai bem antes do Hurricane Pike ou Force Staff do Sniper ficarem prontos, fechando a única saída que ele teria.
- como jogar: gankar o Sniper antes dos 20min é onde essa vantagem se confirma, porque ele não tem como fugir. Cuidado com o cast de Assassinate à distância: ele consegue abrir dano de muito longe mesmo sem visão direta prévia do alvo marcado.
- fonte: ancient_apparition.json (confrontos); sniper.json (resumo, itens); constants_abilities.json (ancient_apparition_cold_feet, ancient_apparition_ice_blast, sniper_assassinate, sniper_take_aim)

## Contra Mars (mars)

- placar: 51/88 pro AA (58,0%), fonte: `ancient_apparition.json` (confrontos, hero_id 129)
- por que importa: vantagem do AA com a maior amostra do grupo (88 jogos, 58,0% de vitórias). Mars é offlane no 7.41, geralmente não compartilha lane direta com o AA suporte, mas o motivo mecânico da vantagem é específico: Bulwark só reduz dano físico, não mágico, então o escudo que faz Mars ser tanque contra carries não funciona contra o Cold Feet nem o Ice Blast do AA.
- janelas: build de pro sobe Phase Boots (8,5min), Blink Dagger (15,2min) e depois itens de sobrevivência física (Black King Bar 26,5min). Spear of Mars (alcance até o nível 4, dano 100-325, stun 1,3-2,2s) é a ameaça real cedo, mas Arena of Blood (ultimate, raio 550, prende sem dispensar magia) não impede o Ice Blast de acertar dentro da arena, porque é um ponto lançado de fora, não precisa entrar.
- o que ele faz com você: Spear trava o AA de longe e Arena of Blood prende o grupo inteiro pra luta corpo a corpo, onde o Bulwark dele brilha contra dano físico.
- o que você faz com ele: Cold Feet e Ice Blast atravessam o Bulwark normalmente, porque ele só reduz físico (40-70% de frente, 20-35% dos lados); Ice Blast dentro da própria Arena of Blood ainda acerta Mars e o time dele sem escape, já que a arena impede saída, não impede dano mágico de entrar.
- itens que viram: nenhum item de Mars resolve isso, porque o problema é a própria habilidade passiva dele (Bulwark) não cobrir dano mágico; o AA só precisa evitar ser pego pelo Spear antes de lançar o próprio combo.
- como jogar: jogue o Cold Feet antes dele fechar a Spear em você, e não hesite em lançar o Ice Blast dentro da Arena of Blood, porque ela não bloqueia magia vinda de fora.
- fonte: ancient_apparition.json (confrontos); mars.json (resumo, itens); constants_abilities.json (ancient_apparition_cold_feet, ancient_apparition_ice_blast, mars_spear, mars_arena_of_blood, mars_bulwark)

## Contra Leshrac (leshrac)

- placar: 9/31 pro AA (29,0%), fonte: `ancient_apparition.json` (confrontos, hero_id 52)
- por que importa: maior desvantagem do AA entre todos os confrontos com 30+ jogos. Leshrac é mid de burst mágico puro que estoura o próprio HP baixo do AA antes dele completar qualquer combo.
- janelas: até 15min Leshrac já tem Staff of Wizardry (14,9min) e Kaya (15,9min) prontos, poke de dano mágico alto e barato (Lightning Storm recarrega em 4s). Blink Dagger (mediana 15,0min) chega cedo e dá o fechamento de distância que o AA depende de manter aberta. Diabolic Edict (raio 450, dano puro que ignora Black King Bar e magia) soma com Split Earth (alcance 650, stun em área) num combo que atravessa qualquer defesa mágica do AA.
- o que ele faz com você: Split Earth trava o grupo, Diabolic Edict aplica dano puro que nenhum item do AA bloqueia (nem BKB, porque dano puro ignora resistência mágica e física), e o Blink fecha a distância que o AA normalmente usaria pra kitar.
- o que você faz com ele: Cold Feet e Ice Vortex alcançam mais longe que o Split Earth (650) antes do Blink de Leshrac estar pronto, então a janela de vantagem do AA é só nos primeiros 15min, antes do blink e do burst mágico escalarem.
- itens que viram: nenhum item defensivo do AA resolve o Diabolic Edict, porque é dano puro; a única resposta é distância (ficar fora dos 450 de raio) ou abater o Leshrac antes dele ter mana pra repetir o combo.
- como jogar: evite lutas corpo a corpo depois dos 15min de Leshrac, porque o combo Blink + Split Earth + Diabolic Edict mata o AA antes dele conseguir reagir. Gankar ele antes do Blink Dagger ficar pronto é a janela real de vantagem.
- fonte: ancient_apparition.json (confrontos); leshrac.json (resumo, itens); constants_abilities.json (ancient_apparition_cold_feet, leshrac_diabolic_edict, leshrac_split_earth)

## Contra Spirit Breaker (spirit_breaker)

- placar: 19/58 pro AA (32,8%), fonte: `ancient_apparition.json` (confrontos, hero_id 71)
- por que importa: 2ª maior desvantagem do AA com amostra robusta (58 jogos). Spirit Breaker é suporte de roaming (pos 4) com gap-closer global, o perfil que mais ameaça um suporte parado plantando ward como o AA.
- janelas: até 9min já tem Phase Boots (9,4min) e começa a roamar com Charge of Darkness (alcance global, cast point 0,1s). Greater Bash (17% de chance, dano de 25-40% da velocidade de movimento e stun 0,9-1,5s) vira letal a partir do nível 6-7. Nether Strike (alcance 700, 150-350 de dano, fade 1s) chega como combo de burst extra no meio de jogo.
- o que ele faz com você: Charge of Darkness ignora a maioria dos slows enquanto acelera, então o Cold Feet não impede o avanço dele até o impacto; Greater Bash na chegada é dano alto e instantâneo contra o HP baixo do AA.
- o que você faz com ele: depois que a Charge termina e ele está parado atacando, Cold Feet funciona normalmente (a distância de quebra já não importa, ele já chegou), e o Ice Blast corta qualquer sustain que ele tente puxar durante a luta.
- itens que viram: Glimmer Cape ou Force Staff do AA são as únicas respostas reais, porque nenhum item impede a Charge de chegar; o objetivo é sobreviver ao impacto, não evitá-lo.
- como jogar: ward os caminhos de Charge e não fique sozinho de ward a pé fora de posição, porque a Charge vê o AA de qualquer distância do mapa. Se for pego, gaste o Cold Feet durante o Bash, não antes, porque antes da chegada ele não ajuda.
- fonte: ancient_apparition.json (confrontos); spirit_breaker.json (resumo, itens); constants_abilities.json (ancient_apparition_cold_feet, ancient_apparition_ice_blast, spirit_breaker_charge_of_darkness, spirit_breaker_greater_bash, spirit_breaker_nether_strike)

## Contra Clinkz (clinkz)

- placar: 15/43 pro AA (34,9%), fonte: `ancient_apparition.json` (confrontos, hero_id 56)
- por que importa: 3ª maior desvantagem do AA com 30+ jogos. Clinkz é carry ranged de ataque básico que ganha o duelo porque a invisibilidade dele quebra justamente a condição do Cold Feet: o AA não consegue acertar nem manter o stun em quem ele não vê.
- janelas: build de pro passa por Power Treads (6,6min) e Desolator (14,3min) pro dano de ataque, com Aghanim's Shard (16,7min) somando o nuke em linha de Burning Barrage ao combo de dano à distância. Skeleton Walk dá invisibilidade quase instantânea (fade time 0,6s) desde o nível 1, então mesmo cedo o Clinkz pode recusar qualquer tentativa de Cold Feet simplesmente sumindo.
- o que ele faz com você: Strafe (alcance 1200, dobra velocidade de ataque sem quebrar a invisibilidade) deixa o Clinkz atirando de longe sem o AA conseguir ver de onde vem o dano, e Skeleton Walk cancela qualquer perseguição.
- o que você faz com ele: sem Sentry Ward no raio certo, o AA não consegue nem mirar o Cold Feet; com visão (Sentry ou Dust), o Cold Feet ainda alcança mais longe do que o Clinkz precisa pra manter distância, e o Ice Blast corta a cura que ele puxaria de Death Pact.
- itens que viram: Sentry Ward e Dust of Appearance são os itens que realmente viram esse confronto, não um item de combate; sem visão garantida, nenhuma habilidade do AA acerta o Clinkz escondido.
- como jogar: plante Sentry nos arbustos perto da lane e carregue Dust sempre que o Clinkz sumir do radar. Sem visão, não gaste Cold Feet tentando adivinhar onde ele está, porque o cast falha e desperdiça a mana.
- fonte: ancient_apparition.json (confrontos); clinkz.json (resumo, itens); constants_abilities.json (ancient_apparition_cold_feet, ancient_apparition_ice_blast, clinkz_wind_walk, clinkz_strafe, clinkz_death_pact)
