---
id: confrontos-rubick
heroi: Rubick
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/skywrath_mage.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/magnataur.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/phantom_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/undying.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/earth_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/abaddon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lone_druid.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/rubick.md
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Como escolhemos os 15 oponentes desta página

Rubick é suporte 4/5 quase puro no 7.41 (ficha local: 90% das picks em pos 4, 10% em pos 5). A lista mistura quatro critérios: os 6 com mais jogos de pro contra ele no geral (Shadow Fiend, Hoodwink, Lion, Snapfire, Ogre Magi, Tusk); os suportes 4/5 que mais aparecem em pro depois desses (Jakiro, Disruptor, Skywrath Mage, mesma posição e mesmo papel de controle de área); os 2 com maior vantagem entre os confrontos com 30+ jogos de pro (Magnus e Phantom Assassin) e três casos de desvantagem robusta na mesma amostra (Earth Spirit, Abaddon e Lone Druid); e Undying entra como quarto caso de vantagem robusta (158 jogos, 60,1%). Magnus, Phantom Assassin e Lone Druid quase nunca dividem lane com Rubick, mas entram porque o choque de power spike entre eles decide lutas de time inteiras, o mesmo raciocínio do Alchemist contra Morphling: dois perfis sem lane em comum, mas o duelo pesa igual.

## Contra Shadow Fiend (nevermore)
- placar: 338 vitórias em 661 jogos de pro, 51,1% pra Rubick (fonte: pro_dados/rubick.json, confrontos)
- por que importa: é o confronto com mais jogos de pro contra Rubick (661) de toda a lista. Shadow Fiend é mid, raramente divide lane com o suporte, mas é um dos heróis mais pickados/banidos do jogo, e Rubick costuma ser o suporte que interrompe o combo de Shadowraze ou tenta roubar o Requiem.
- janelas: Shadow Fiend farma muito mais rápido (lh10 de 78 contra 17 do Rubick, pro_dados) e sobe Power Treads aos 5:54 e Mask of Madness aos 10:12, então antes dos 10 min ele já está puxando vantagem de gank sozinho. A partir do nível 6, Requiem of Souls (raio 1000, instantâneo) é a maior ameaça: não dá pra interromper depois do cast, só antes. Até o Black King Bar dele sair (25:12), ele está exposto a controle; o Blink do Rubick (21:36) chega quase 4 min antes disso, dando a janela de iniciar sem resistência.
- o que ele faz com você: Shadowraze (cd de 9s por raze, dano base até 280 mais bônus por stack de Necromastery, sem tempo de cast) explode à queima-roupa sem aviso; Requiem é instantâneo, então só dá pra evitar ficando fora do raio 1000 antes do cast.
- o que você faz com ele: Telekinesis interrompe a aproximação dele antes do Requiem (stun de até 1,5s); Fade Bolt reduz o dano de saída dele em até 24% por 10s, cortando tanto o físico quanto o mágico do combo seguinte. Spell Steal pode copiar o Requiem, mas sem os souls da Necromastery (que não são roubados, só a magia), a versão do Rubick sai com poucas linhas de energia, não compensa cedo.
- itens que viram: o Black King Bar dele (25:12) bloqueia Fade Bolt e Telekinesis, mas não Spell Steal, que fura imunidade a magia, então mesmo com BKB ligado ele ainda perde a última magia lançada pro Rubick.
- como jogar: force a troca antes dos 25 min, enquanto ele ainda não tem BKB; guarde Telekinesis pra interromper a aproximação antes do Requiem, não depois; não perca tempo roubando Requiem cedo, prefira Shadowraze como alvo de Spell Steal.
- fonte: pro_dados/rubick.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_requiem, nevermore_shadowraze1, nevermore_necromastery, rubick_fade_bolt, rubick_telekinesis, rubick_spell_steal)

## Contra Hoodwink (hoodwink)
- placar: 302 vitórias em 626 jogos de pro, 48,2% pra Rubick (fonte: pro_dados/rubick.json, confrontos)
- por que importa: 2º confronto com mais jogos de pro (626) e mesma posição 4/5. Os dois disputam o mesmo papel de suporte de controle a distância com wards e setup de visão, então quem acerta o combo primeiro domina a troca.
- janelas: os dois sobem Arcane Boots perto (Hoodwink 12:12, Rubick 10:18, Rubick um pouco à frente). Hoodwink prioriza Aghanim's Shard cedo (23:48) pro combo de Hunter's Boomerang, enquanto Rubick só fecha Shard e Scepter perto dos 27 min. A partir do nível 6, Sharpshooter (até 1350 de dano no nível 3, 3000 de alcance, até 3s de carregamento) é a ameaça de execução a distância dela.
- o que ele faz com você: Bushwhack (stun de 1,5 a 2,1s perto de árvore) prende quem chega perto de mata fechada; Sharpshooter carregado executa quem fica parado no alcance dela depois de um combo errado.
- o que você faz com ele: Telekinesis tira ela do lugar antes do wind-up completo do Sharpshooter, cancelando o cast; Fade Bolt reduz o dano de saída dela, inclusive o bônus do tiro carregado. Spell Steal no Sharpshooter rouba um snipe de longo alcance, mas sem o recuo de 350 que ela sofre ao atirar, então o reposicionamento depois do tiro fica por sua conta.
- itens que viram: o Aghanim's Shard dela (23:48) faz o Hunter's Boomerang voltar e enfraquecer ainda mais quem for atingido; o Blink do Rubick (21:36) chega antes do Shard dela, então dá pra fechar distância e travar com Telekinesis antes do combo dela se formar.
- como jogar: ataque antes dela carregar o Sharpshooter, não durante; use visão pra não ficar parado no alcance de 3000 dela depois de errar seu próprio combo.
- fonte: pro_dados/rubick.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_sharpshooter, hoodwink_bushwhack, rubick_fade_bolt, rubick_telekinesis); aghs_desc (hoodwink shard)

## Contra Lion (lion)
- placar: 309 vitórias em 589 jogos de pro, 52,5% pra Rubick (fonte: pro_dados/rubick.json, confrontos)
- por que importa: 3º maior volume (589) e o confronto mais simétrico da lista inteira: os dois são disabler puro 4/5, com stun de alvo único mais ultimate de burst/disable, e o mesmo Blink Dagger como item-chave. É o espelho direto do papel de Rubick.
- janelas: Lion sobe Tranquil Boots aos 7:24, mais cedo que o Arcane Boots do Rubick (10:18), então ele tem mais mobilidade de lane cedo. O Blink de Lion sai aos 18:12, quase 3,5 min antes do Blink do Rubick (21:36); nessa janela intermediária ele costuma iniciar primeiro. Depois dos 25 min os dois convergem pro Aghanim's Shard quase junto (Lion 25:48, Rubick 27:00).
- o que ele faz com você: Hex (stun de alvo único de 2 a 3,2s, alcance até 650) desabilita antes do Telekinesis sair; Finger of Death (600 a 850 de dano, cd de até 30s no nível 3) executa quem está sem Linken's ou BKB.
- o que você faz com ele: Telekinesis também é stun de alvo único, então vira literalmente quem acerta primeiro; se Lion gastar Hex em outro alvo, Spell Steal copia o próprio Hex dele depois. Fade Bolt reduz o dano de saída dele, inclusive o Finger of Death.
- itens que viram: Linken's Sphere em qualquer um dos dois bloqueia o disable de alvo único do outro (Hex ou Telekinesis), mas não bloqueia Fade Bolt (é área) nem Spell Steal; Black King Bar bloqueia Hex e Telekinesis dos dois lados, já que nenhum dos dois fura imunidade a magia.
- como jogar: gaste visão pra saber quem sai na frente no Blink; se Lion sair primeiro (antes dos 21 min), jogue mais recuado até você também ter o seu; depois dos 25 min, com os dois de Shard, a troca vira sobre quem erra o combo primeiro.
- fonte: pro_dados/rubick.json; pro_dados/lion.json; constants_abilities.json (lion_voodoo, lion_finger_of_death, rubick_telekinesis, rubick_fade_bolt, rubick_spell_steal)

## Contra Snapfire (snapfire)
- placar: 247 vitórias em 515 jogos de pro, 48,0% pra Rubick (fonte: pro_dados/rubick.json, confrontos)
- por que importa: 4º maior volume (515). Snapfire é suporte flexível no catálogo (pos 2 a 5), majoritariamente 4/5 no 7.41, e farma bem mais rápido que Rubick cedo (lh10 de 21 contra 17), o que dá a ela uma janela early real.
- janelas: Snapfire sobe Aghanim's Shard cedo, aos 16:54, bem antes de qualquer item de luxo do Rubick, e entra pronta pro combo Firesnap Cookie mais Mortimer Kisses ainda na metade do laning stage. O Blink do Rubick (21:36) só chega quase 5 min depois do Shard dela, então até lá ele joga reativo. Snapfire já tem o próprio Blink aos 20:42, antes mesmo do Rubick; só perto dos 27:00, quando o Rubick fecha Shard e Scepter, os dois voltam a ficar parelhos em itens de luxo.
- o que ele faz com você: Scatterblast à queima-roupa (até 280 de dano, mais 30% perto) e o stun de Firesnap Cookie (até 2,2s no nível 4) formam a iniciação dela; se ela acertar primeiro, Mortimer Kisses (8 projéteis, até 360 de dano cada no nível 3, alcance mínimo 600) limpa a vida de longe.
- o que você faz com ele: Telekinesis interrompe o salto do Firesnap Cookie se acertado antes dela pousar; Fade Bolt reduz o dano de saída dela, incluindo o combo completo. Spell Steal em Mortimer Kisses rouba um nuke de área grande, mas só compensa depois que ela já tiver gasto o Aghanim's Scepter (que faz ela cuspir a unidade engolida com dano e stun em área).
- itens que viram: o Aghanim's Shard dela (16:54) chega cedo e muda o jogo antes do Blink do Rubick; priorizar o próprio Shard/Scepter equilibra a utilidade, porque até lá ela está sempre um passo à frente.
- como jogar: não ande sozinho perto da boca dela depois dos 17 min; jogue Telekinesis assim que ela lançar o Cookie, não depois dela pousar; evite ficar parado no alcance de 3000 da Mortimer Kisses sem Glimmer ou invisibilidade.
- fonte: pro_dados/rubick.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_firesnap_cookie, snapfire_mortimer_kisses, rubick_telekinesis, rubick_fade_bolt); aghs_desc (snapfire scepter)

## Contra Ogre Magi (ogre_magi)
- placar: 244 vitórias em 456 jogos de pro, 53,5% pra Rubick (fonte: pro_dados/rubick.json, confrontos)
- por que importa: 5º maior volume (456) e mesma posição 5. Ogre Magi é o único suporte da lista sem ultimate ativo de verdade (Multicast é passivo), o que muda o que Spell Steal consegue fazer contra ele.
- janelas: os dois sobem Arcane Boots perto (Ogre 11:12, Rubick 10:18). Ogre costuma priorizar Hand of Midas (18:54) em vez de item de combate, então ele farma pra escalar em vez de brigar cedo. Depois dos 25 min os dois convergem pro Aghanim's Shard quase junto (Ogre 26:06, Rubick 27:00).
- o que ele faz com você: Fireblast (stun de 1,2s, cd de 8 a 11s, dano até 250) pode procar 2, 3 ou 4 vezes seguidas via Multicast (chance de dois casts até 75%, cresce com Força), virando múltiplos stuns de surpresa num único botão.
- o que você faz com ele: Fade Bolt reduz o dano de saída dele, inclusive os stuns múltiplos já aplicados; Telekinesis interrompe antes dele fechar o Fireblast. Spell Steal no Fireblast dá um stun curto e barato (cd 8-11s), mas sem o bônus de Multicast (passiva do Ogre, não é roubável), então sai single-cast.
- itens que viram: nenhum item muda o combo de forma decisiva aqui; o Aghanim's Shard de Ogre (26:06) dá um escudo que devolve bola de fogo em quem bate no aliado protegido, então evite trocar ataque básico parado com um alvo escudado por ele.
- como jogar: respeite a janela de double/triple Fireblast perto do nível 6-7; não brigue parado perto dele sem saber se o Multicast já procou.
- fonte: pro_dados/rubick.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_multicast, rubick_fade_bolt, rubick_telekinesis, rubick_spell_steal)

## Contra Tusk (tusk)
- placar: 200 vitórias em 430 jogos de pro, 46,5% pra Rubick (fonte: pro_dados/rubick.json, confrontos)
- por que importa: 6º maior volume (430) e o pior placar do Rubick entre os suportes de alto volume da lista. Tusk é iniciador físico puro, o oposto do kit mágico de Rubick, então o duelo é sobre quem trava quem primeiro.
- janelas: Tusk sobe Blink cedo pro padrão dele, aos 19:00, quase 2,5 min antes do Blink do Rubick (21:36); nessa janela intermediária ele costuma iniciar primeiro com Ice Shards mais Snowball. A partir do nível 6, Walrus Punch (crítico de até 300% de dano, cd 10-16s, fura imunidade a magia) ameaça qualquer alvo isolado.
- o que ele faz com você: Ice Shards (barreira de até 7s, raio 200) corta rota de fuga ou aproximação; Snowball pega quem está perto de aliados (dano e stun crescem por herói carregado na bola); Walrus Punch executa quem está sem resistência física.
- o que você faz com ele: Telekinesis interrompe o Snowball ou o avanço antes do Walrus Punch; Fade Bolt reduz o dano de ataque dele por 10s, cortando direto o valor do crítico. Spell Steal no Walrus Punch rouba um finalizador físico que fura BKB, fora do perfil mágico de Rubick, mas útil como remate de perseguição.
- itens que viram: Walrus Punch fura imunidade a magia, mas Ice Shards e Snowball não furam, então um Black King Bar do Rubick neutraliza o combo de controle dele, só não o soco final.
- como jogar: não ande perto de mata fechada sem visão depois dos 15-16 min (onde a bola de neve ganha trajeto livre); gaste Telekinesis assim que ele começar a rolar, antes do impacto.
- fonte: pro_dados/rubick.json; pro_dados/tusk.json; constants_abilities.json (tusk_walrus_punch, tusk_ice_shards, tusk_snowball, rubick_telekinesis, rubick_fade_bolt, rubick_spell_steal)

## Contra Jakiro (jakiro)
- placar: 223 vitórias em 403 jogos de pro, 55,3% pra Rubick (fonte: pro_dados/rubick.json, confrontos)
- por que importa: 7º maior volume (403) e mesma posição 4/5; é o melhor placar do Rubick entre os suportes de alto volume. Os dois são suportes de área com ultimate de controle/dano em zona, então o duelo decide quem estoura o combo primeiro.
- janelas: os dois sobem Arcane Boots perto (Jakiro 11:42, Rubick 10:18). A partir do nível 6, Macropyre (até 200 de dano por segundo em área, até 2000 no total se alguém ficar os 10s inteiros dentro, cd 70-90s) ameaça qualquer agrupamento, mas não é instantânea, dá pra interromper o cast. Depois dos 23-25 min os dois convergem pro Staff of Wizardry (Jakiro 25:06, Rubick 23:30).
- o que ele faz com você: Dual Breath (alcance 850, slow de até 40% em movimento e ataque) reduz mobilidade antes do combo fechar; Ice Path (stun de até 2s) trava Rubick antes do próprio Telekinesis (que estuna só até 1,5s).
- o que você faz com ele: Telekinesis interrompe o cast de Macropyre; Fade Bolt reduz o dano de saída dele, inclusive o DPS da própria Macropyre. Spell Steal na Macropyre rouba uma das maiores áreas de dano contínuo do jogo, mas só compensa se guardada pro momento de agrupamento do time adversário.
- itens que viram: lançar Macropyre só depois do Spell Steal dele (se ele tiver) já ter sido usado evita que ele devolva a mesma magia contra o seu time.
- como jogar: evite agrupar em cima de área já telegrafada; use Telekinesis assim que ele começar o cast da Macropyre, não depois dela sair.
- fonte: pro_dados/rubick.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre, jakiro_dual_breath, jakiro_ice_path, rubick_telekinesis, rubick_fade_bolt, rubick_spell_steal)

## Contra Disruptor (disruptor)
- placar: 192 vitórias em 354 jogos de pro, 54,2% pra Rubick (fonte: pro_dados/rubick.json, confrontos)
- por que importa: 8º maior volume (354) e mesma posição 4/5; é o espelho mais parecido de controle em área, Static Storm dele contra Telekinesis mais Fade Bolt do Rubick, os dois disputam o papel de travar o inimigo numa zona.
- janelas: Disruptor sobe Arcane Boots quase junto (11:24, Rubick 10:18). O Blink dele sai bem depois do Rubick (24:00 contra 21:36), dando ao Rubick a janela de iniciação quase 2,5 min antes. Disruptor só busca Aghanim's Scepter tarde (34:54), bem depois do Shard e Scepter do Rubick (27:00/27:24).
- o que ele faz com você: Kinetic Field (raio 350, até 4,4s) e Static Storm (raio 550, até 350 de dano por segundo mais silêncio, até 2100 no total ao longo dos 6s) travam Rubick numa área antes dele chegar no alcance curto do Telekinesis; como Fade Bolt e Telekinesis não furam BKB, igual Static Storm, a troca de controle entre os dois é simétrica.
- o que você faz com ele: Fade Bolt reduz o dano de saída dele; Spell Steal rouba a última magia lançada por ele e fura BKB, então se ele usar Static Storm ou Kinetic Field perto de Rubick sem necessidade, dá pra devolver a mesma magia.
- itens que viram: o Blink do Rubick sai antes do dele (21:36 contra 24:00), dando a primeira janela de iniciação; se Disruptor tiver Aghanim's Scepter (muda tarde, 34:54), Static Storm silencia uso de item também, bloqueando o Spell Steal de Rubick se tentado durante a tempestade.
- como jogar: não gastar Static Storm ou Kinetic Field perto do Rubick sem necessidade, se ele puder ter Spell Steal disponível; priorizar acertar a área nele antes dele ter Blink (antes dos 24 min).
- fonte: pro_dados/rubick.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm, disruptor_kinetic_field, disruptor_glimpse, rubick_fade_bolt, rubick_telekinesis, rubick_spell_steal)

## Contra Skywrath Mage (skywrath_mage)
- placar: 172 vitórias em 339 jogos de pro, 50,7% pra Rubick (fonte: pro_dados/rubick.json, confrontos)
- por que importa: 9º maior volume (339) e mesma posição 4/5. Skywrath é o nuker mágico puro mais parecido com o perfil do próprio Rubick (os dois vivem de spell amp e alcance de conjuração), então a troca é uma questão de alcance e timing de mana.
- janelas: Skywrath sobe Null Talisman cedo (4:24) pra sustentar mana de poke; ele prioriza Aghanim's Shard (22:18) quase no mesmo tempo do Aether Lens do Rubick (22:54). A partir do nível 6, Mystic Flare (até 1600 de dano somado entre heróis na área, cd 20-60s) é a maior ameaça de burst mágico do confronto inteiro.
- o que ele faz com você: Ancient Seal (silêncio de 3 a 6s, mais até 35% de dano mágico recebido) cala Rubick antes do combo e ainda amplifica o resto do burst; Mystic Flare pode matar sozinho quem está com vida baixa.
- o que você faz com ele: Fade Bolt reduz o dano de saída dele, inclusive o próprio Mystic Flare; Telekinesis interrompe o cast dela, que não é instantânea. Spell Steal em Mystic Flare rouba um dos maiores nukes de alvo único do jogo, mas sem o bônus de intelecto dele o dano sai menor.
- itens que viram: Arcane Supremacy (passiva do Rubick, +60 a +240 de alcance de conjuração conforme o nível) supera o alcance base do Ancient Seal dele (700-850); Black King Bar nos dois bloqueia o kit mágico inteiro, já que nenhuma das magias listadas fura imunidade.
- como jogar: não entrar no alcance de silêncio dele sem saber se Mystic Flare está disponível; interromper o cast dela com Telekinesis assim que a animação começar.
- fonte: pro_dados/rubick.json; pro_dados/skywrath_mage.json; constants_abilities.json (skywrath_mage_mystic_flare, skywrath_mage_ancient_seal, rubick_fade_bolt, rubick_telekinesis, rubick_spell_steal, rubick_arcane_supremacy)

## Contra Magnus (magnataur)
- placar: 65 vitórias em 103 jogos de pro, 63,1% pra Rubick (fonte: pro_dados/rubick.json, confrontos; amostra ok, acima do mínimo de 30)
- por que importa: maior vantagem do Rubick entre os confrontos com 30+ jogos. Magnus é core 2/3, quase nunca divide lane com um suporte 4/5, mas Reverse Polarity é um dos ultimates mais valiosos de se roubar do jogo inteiro, o mesmo caso do Alchemist contra Morphling citado no pedido: sem lane em comum, mas o choque pesa em toda luta de time.
- janelas: Magnus sobe Blink cedo pro padrão dele (13:36), bem antes do Rubick (21:36), então ele tem a janela de iniciação física sozinho até o suporte conseguir o próprio Blink. Depois dos 25 min, se ele tiver Aghanim's Scepter (25:12) ou Black King Bar (26:12), o combo físico fica mais seguro, mas é também quando Rubick já pode ter Blink e responder.
- o que ele faz com você: Reverse Polarity (raio de puxão 430, stun de 2,5 a 3,5s, fura BKB) agrupa e estuna o time inteiro de uma vez; Skewer arrasta pra perto dele e dos aliados dele.
- o que você faz com ele: se Reverse Polarity for a última magia lançada, Spell Steal copia o próprio combo de iniciação do Magnus contra o time dele; com Aghanim's Scepter do Rubick, a versão roubada também ganha o upgrade de Scepter do Magnus (que altera Horn Toss). Fade Bolt reduz o dano de saída dele antes do combo físico.
- itens que viram: Spell Steal fura BKB, então mesmo se Magnus comprar BKB (26:12) pra proteger o combo, ainda dá pra roubar a última magia dele antes da ativação; Reverse Polarity também fura BKB, então imunidade a magia não impede o puxão original dele.
- como jogar: ficar de olho no cast de Reverse Polarity pra roubar com Spell Steal assim que ele usar; não agrupar o time em bola se ele tiver ultimate disponível, mesmo fora da lane.
- fonte: pro_dados/rubick.json; pro_dados/magnataur.json; constants_abilities.json (magnataur_reverse_polarity, magnataur_skewer, rubick_spell_steal, rubick_fade_bolt); aghs_desc (magnus scepter)

## Contra Phantom Assassin (phantom_assassin)
- placar: 53 vitórias em 84 jogos de pro, 63,1% pra Rubick (fonte: pro_dados/rubick.json, confrontos; amostra pequena pro padrão pro, mas acima do mínimo de 30)
- por que importa: carry pos 1 muito jogado em pro mesmo sem lane em comum com um suporte 4/5, o caso clássico citado no pedido de dois papéis que quase não se cruzam na lane mas se encontram em toda luta. É também o único confronto da lista contra um herói cujo ultimate é passivo, o que muda o que dá pra roubar com Spell Steal.
- janelas: PA farma muito mais rápido que qualquer suporte (lh10 de 53, gpm de 601) e já puxa Power Treads aos 6:00 e Battle Fury aos 14:24. A partir do nível 6, Coup de Grace é passivo (17% de chance de crítico de até 400%, sem cast, sem cooldown pra interromper), então não existe janela de cast pra travar, só mitigar com evasão ou redução de dano.
- o que ele faz com você: Stifling Dagger (slow de até 50%, dano baseado no ataque dela) atrasa antes dela fechar com Phantom Strike (teleporte mais bônus de velocidade de ataque, fura BKB); como Coup de Grace é passivo, qualquer ataque básico pode virar execução sem aviso.
- o que você faz com ele: Telekinesis interrompe o avanço antes do Phantom Strike; Fade Bolt reduz o dano de saída dela, o que não muda a chance de crítico mas corta o valor final do dano. Como não existe ultimate ativo pra roubar, o melhor alvo de Spell Steal é Stifling Dagger (slow barato) ou Blur, se ela já tiver ativado.
- itens que viram: Blur (invisibilidade parcial mais disjoint de projéteis) faz Fade Bolt (é projétil) errar se ativado antes do impacto; Black King Bar nela (23:30) bloqueia Telekinesis e Fade Bolt, mas não Spell Steal.
- como jogar: não trocar ataque básico parado com ela sem saber se Coup de Grace vai procar; travar com Telekinesis durante o avanço do Phantom Strike, antes dela chegar no alcance de ataque.
- fonte: pro_dados/rubick.json; pro_dados/phantom_assassin.json; constants_abilities.json (phantom_assassin_coup_de_grace, phantom_assassin_phantom_strike, phantom_assassin_blur, rubick_telekinesis, rubick_fade_bolt, rubick_spell_steal)

## Contra Undying (undying)
- placar: 95 vitórias em 158 jogos de pro, 60,1% pra Rubick (fonte: pro_dados/rubick.json, confrontos)
- por que importa: 3ª maior vantagem do Rubick com amostra robusta (158 jogos). Undying é suporte 3/5 que também vive de controlar zona e sustentar o time, entrando na mesma lógica dos espelhos de suporte da lista, com o diferencial do Flesh Golem como ultimate físico de transformação.
- janelas: os dois sobem Arcane Boots perto (Undying 11:00, Rubick 10:18). Undying é mais lento pra chegar no Blink (28:18) do que Rubick (21:36), dando a ele a janela de iniciação primeiro por quase 7 minutos no recorte. O Aghanim's Shard dele (24:24) sai em timing parecido com o do Rubick (27:00).
- o que ele faz com você: Decay (rouba Força de todos os heróis inimigos na área, dano crescente por stack) reduz resistência física antes da luta; Tombstone (cd de 80s) spawna zumbis que desaceleram e aplicam dano contínuo em quem fica perto.
- o que você faz com ele: Telekinesis interrompe o avanço antes do Flesh Golem virar relevante; Fade Bolt reduz o dano de saída dele, inclusive o bônus de ataque do Flesh Golem ativo. Spell Steal no Flesh Golem (transformação física, +40 a 60% de Força, slow e dano amplificado no ataque) é um dos poucos casos em que Rubick rouba um buff físico, útil como pânico defensivo, mas foge do perfil mágico dele.
- itens que viram: o Aghanim's Shard dele permite esconder um aliado dentro da Tombstone; se Undying tiver shard, não assumir que o aliado sumiu da luta.
- como jogar: evitar ficar parado perto da zona de zumbis da Tombstone; usar o Blink mais cedo que ele pra abrir a luta antes do Flesh Golem estar pronto.
- fonte: pro_dados/rubick.json; pro_dados/undying.json; constants_abilities.json (undying_decay, undying_tombstone, undying_flesh_golem, rubick_telekinesis, rubick_fade_bolt, rubick_spell_steal); aghs_desc (undying shard)

## Contra Earth Spirit (earth_spirit)
- placar: 56 vitórias em 138 jogos de pro, 40,6% pra Rubick (fonte: pro_dados/rubick.json, confrontos)
- por que importa: uma das piores % de vitória do Rubick entre os confrontos com 30+ jogos. Earth Spirit tem mobilidade e disable suficientes pra punir Rubick antes dele soltar qualquer coisa do combo, o que explica o placar ruim.
- janelas: Earth Spirit farma rápido pro papel (lh10 de 39, quase o dobro do Rubick) e sobe Power Treads cedo (9:18) pra rotacionar com Stone Remnants pelo mapa. A partir do nível 6, Magnetize (até 135 de dano por segundo em área por 6s, até 810 no total, fura BKB) ameaça qualquer agrupamento perto de pedras.
- o que ele faz com você: Rolling Boulder (stun ao colidir, mais rápido e longo se rolar sobre uma Stone Remnant) fecha distância antes de reagir; Geomagnetic Grip (silêncio de 2,3 a 3,5s em quem é atingido pela pedra puxada) cala no meio do próprio combo; Magnetize (até 135 de dano por segundo por 6s, até 810 no total) fura imunidade a magia, então nem BKB protege do dano em área.
- o que você faz com ele: Fade Bolt reduz o dano de saída dele, mas não impede a mobilidade (Rolling Boulder não é afetado por redução de dano); Telekinesis interrompe ele no ar durante o Rolling Boulder, cancelando a sequência antes do impacto. Spell Steal no Magnetize rouba um dano em área que fura BKB, raro no kit de Rubick, mas só funciona se ele lançar por último, difícil já que costuma ser combo de abertura.
- itens que viram: como Magnetize fura BKB, Linken's Sphere (bloqueia só alvo único) também não ajuda contra ela; a melhor resposta é distância, não item de imunidade.
- como jogar: não ficar perto de Stone Remnants espalhadas no mapa sem checar visão; travar o Rolling Boulder com Telekinesis assim que ele virar pedra, antes da colisão.
- fonte: pro_dados/rubick.json; pro_dados/earth_spirit.json; constants_abilities.json (earth_spirit_magnetize, earth_spirit_rolling_boulder, earth_spirit_geomagnetic_grip, rubick_fade_bolt, rubick_telekinesis, rubick_spell_steal)

## Contra Abaddon (abaddon)
- placar: 55 vitórias em 136 jogos de pro, 40,4% pra Rubick (fonte: pro_dados/rubick.json, confrontos)
- por que importa: 2ª maior desvantagem com amostra robusta (136 jogos). Abaddon é suporte/core de sustentação que vira quase impossível de matar sozinho com Borrowed Time, o tipo de alvo que o burst de Rubick não resolve bem.
- janelas: Abaddon sobe Phase Boots cedo (6:30) pra engajar, e o item de poder dele muda conforme a posição: Radiance aparece em meados do recorte (16:18) quando ele joga mais carry. O Blink dele (24:54) sai bem depois do Rubick (21:36), dando ao suporte a janela de abrir a luta primeiro.
- o que ele faz com você: Mist Coil (dano ou cura de até 320, custa vida própria) pressiona de longe; se a vida dele cair rápido demais, Borrowed Time ativa sozinho abaixo de 400 de vida e transforma todo dano em cura por até 6s, cancelando o burst inteiro.
- o que você faz com ele: Fade Bolt reduz o dano de saída dele; Telekinesis interrompe o avanço antes do combo físico. Spell Steal em Borrowed Time é a jogada mais valiosa aqui, se ele ativar manualmente (não pelo gatilho automático): copiar a própria sobrevivência dele é especialmente útil porque Rubick é frágil.
- itens que viram: Spirit Vessel ou Oblivion Staff (redução de cura) no time de Rubick corta a eficácia do Borrowed Time e do Mist Coil de cura; sem isso, burst único contra ele raramente fecha a luta.
- como jogar: não gastar tudo num único burst, ele sobrevive com Borrowed Time; se ele já tiver gasto a defensiva, aí sim forçar o all-in com Telekinesis mais Fade Bolt.
- fonte: pro_dados/rubick.json; pro_dados/abaddon.json; constants_abilities.json (abaddon_borrowed_time, abaddon_death_coil, rubick_fade_bolt, rubick_telekinesis, rubick_spell_steal)

## Contra Lone Druid (lone_druid)
- placar: 34 vitórias em 85 jogos de pro, 40,0% pra Rubick (fonte: pro_dados/rubick.json, confrontos)
- por que importa: pior % de vitória do Rubick na lista com amostra confiável (85 jogos). Lone Druid é carry pos 1 que quase nunca compartilha lane com um suporte 4/5, mas entra pelo mesmo critério do Alchemist contra Morphling citado no pedido: dois perfis sem lane em comum, mas o choque de power spike entre o Urso somado ao herói e o combo de Rubick decide lutas inteiras.
- janelas: Lone Druid farma absurdamente rápido (lh10 de 60, gpm de 685, o maior da lista inteira) porque o Urso soma farm em paralelo; ele sobe Maelstrom aos 12:06 e Mjollnir aos 16:30, então antes dos 17 min já tem dano em área com chance de raio. True Form (nível 6) transforma o próprio herói num urso com +500 a 1500 de vida bônus, difícil de abater com nuke mágico puro.
- o que ele faz com você: com dois corpos (Lone Druid mais Urso) batendo ao mesmo tempo, qualquer um dos dois mata rápido quem estiver fora de posição; Savage Roar assusta e afasta o time, quebrando a formação pro combo.
- o que você faz com ele: Telekinesis e Fade Bolt afetam só um dos dois corpos por cast, então o combo de Rubick rende menos valor contra um herói que luta em dupla; Spell Steal em True Form rouba a transformação física, estranha pro kit mágico de Rubick, mas pode ajudar a sobreviver num aperto.
- itens que viram: como ele ataca com dois corpos, item de dano em área rende mais que disable de alvo único; o Aghanim's Shard de Rubick (Telekinesis em si mesmo ou aliado) ajuda a escapar do dano duplo em vez de tentar vencer a troca de frente.
- como jogar: não brigar 1x1 contra o combo duplo sem apoio de área do time; focar controle em grupo, não tentar resolver o Lone Druid sozinho com um combo de alvo único.
- fonte: pro_dados/rubick.json; pro_dados/lone_druid.json; constants_abilities.json (lone_druid_true_form, lone_druid_spirit_bear, lone_druid_savage_roar, rubick_telekinesis, rubick_fade_bolt, rubick_spell_steal)
