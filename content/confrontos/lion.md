---
id: confrontos-lion
heroi: Lion
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/lion.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/disruptor.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- dota-hub-conteudo-novo/pro_dados/pudge.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/grimstroke.json
- dota-hub-conteudo-novo/pro_dados/sven.json
- dota-hub-conteudo-novo/pro_dados/spectre.json
- dota-hub-conteudo-novo/pro_dados/treant.json
- dota-hub-conteudo-novo/pro_dados/bane.json
- dota-hub-conteudo-novo/pro_dados/enigma.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://api.opendota.com/api/heroStats
- https://api.opendota.com/api/explorer (partidas de liga patches 7.40/7.41: nível por XP acumulado, primeiro abate, ritmo de last hits, vitórias por duração de partida, timing de itens fora do top 30)
- dota2.fandom.com/wiki/Disable (stuns/hex interrompem canalização)
- dota2.fandom.com/wiki/Spell_Steal (quais magias podem ser roubadas)
---

## Contra Rubick (rubick)
- placar: Lion venceu 280 de 589 partidas pro (47,5%). Maior volume de jogos pro de toda a base de confrontos do Lion.
- por que importa: maior volume de jogos pro contra o Lion (589), mesma função direta (suporte roamer de inteligência, pos4/5) e o contra clássico de kit: Spell Steal rouba exatamente o combo que você depende pra existir.
- janelas: Lion sobe Tranquil Boots aos 7,4 min (pro_dados/lion.json) enquanto Rubick sobe Arcane Boots aos 10,3 min de mediana (pro_dados/rubick.json). Rubick não precisa se aproximar pra ameaçar: a passiva Arcane Supremacy já dá alcance de conjuração crescente (+60 a +240) e ele fica de Fade Bolt a distância. Seu Blink (18,2 min, pro_dados/lion.json) chega bem antes do dele (21,6 min de mediana, pro_dados/rubick.json): dos 18 aos 21,6 min a iniciação é sua, ele ainda não fecha distância sozinho. Os Aghanim's Shard saem quase juntos (seu aos 25,8 min, o dele aos 27,0 min, ambos pro_dados).
- o que ele faz com você: Spell Steal rouba a última magia lançada por você a até 1000 de distância e fura Black King Bar (`bkbpierce: Yes`, constants_abilities.json). Se você gastar Hex perto de um Rubick livre, ele pode guardar e usar o próprio Hex (2 a 3,2s de disable total) em você ou em um aliado; magias ativas de alvo único como a sua são roubáveis por Spell Steal (dota2.fandom.com/wiki/Spell_Steal). Com Aghanim's Scepter ele rouba 2 magias e na versão potencializada: roubar seu Finger of Death com o Scepter dele dá a versão com dano em área.
- o que você faz com ele: Rubick tem vida baixa fixa e nenhum blink inato cedo (mediana de 21,6 min, pro_dados/rubick.json); Earth Spike viaja a 2800 de velocidade (quase instantâneo) e junto com o Hex (575-650 de alcance) trava ele antes de reagir. Finger of Death (600-850 de dano, 900 de alcance) mata ele sozinho fora do nível 6 em diante.
- itens que viram: não existe item que impeça o roubo em si, Spell Steal ignora imunidade mágica. A defesa real é não gastar Hex ou Earth Spike perto de um Rubick livre sem necessidade, ou matá-lo antes dele guardar uma magia roubável. Seu Aghanim's Shard (Mana Drain com 2 alvos extras e você debuff immune durante o canal) não ajuda contra o Spell Steal, que acerta de longe, fora do seu canal.
- como jogar: não gaste Hex perto de um Rubick livre à toa; se ele já usou Spell Steal numa magia fraca, essa é sua janela (recarga de 16 a 4s conforme o nível dele). Priorize ele quando os dois tiverem Blink, ele morre fácil sem apoio do time.
- fonte: pro_dados/lion.json; pro_dados/rubick.json; constants_abilities.json (lion_voodoo, lion_impale, rubick_spell_steal, rubick_arcane_supremacy); aghs_desc (Rubick Scepter/Shard, Lion Shard/Scepter); dota2.fandom.com/wiki/Spell_Steal (mecânica de roubo de magia).

## Contra Shadow Fiend (nevermore)
- placar: Lion venceu 257 de 533 partidas pro (48,2%). Segundo maior volume de jogos pro da base.
- por que importa: segundo maior volume (533); raramente compartilha lane com o Lion (Shadow Fiend é mid/carry), mas o Lion ganha roamando pro mid dele cedo, antes do farm absurdo dele (658 de GPM médio, pro_dados/nevermore.json) virar bola de neve.
- janelas: Shadow Fiend fecha nível 6 (Requiem nível 1) numa mediana de 7 min e dá o primeiro abate mediano pro aos 8 min (partidas pro 7.40-7.41, OpenDota, resolução de 1 min). Seu Tranquil (7,4 min) chega bem na hora de aguentar esse primeiro gank dele. Mask of Madness dele (10,2 min de mediana, pro_dados/nevermore.json) dobra o ritmo de farm (de 9,9 para 12,3 last hits por minuto, partidas pro 7.40-7.41, OpenDota); depois disso ele sai de lane pra selva. O Hurricane Pike dele sai aos 23,0 min de mediana (pro_dados/nevermore.json), bem depois do seu Blink (18,2 min): dos 18 aos 23 min é a sua janela de iniciar antes dele ganhar mobilidade pra escapar. O BKB dele (25,2 min de mediana, pro_dados/nevermore.json) bloqueia Hex e Earth Spike (ambos `bkbpierce: No`).
- o que ele faz com você: Shadowraze (até 280 de dano base no nível 7, recarga de só 9s, três direções) zonea sem telegraph, perigoso pra você que tem pouca vida; Requiem of Souls executa à distância, com dano que escala conforme as almas acumuladas por Necromastery, e mata você sozinho se estiver exposto com vida baixa.
- o que você faz com ele: Shadow Fiend tem vida baixa fixa; Earth Spike (quase instantâneo, 2800 de velocidade) mais Hex travam ele antes dele acertar 3 razes seguidos. Finger of Death mata ele sozinho enquanto ele não tiver muito HP de item.
- itens que viram: o BKB dele (25,2 min) bloqueia seu Hex e Earth Spike, depois disso você precisa de disable do time pra travar ele. Seu Aghanim's Shard (debuff immune durante o canal de Mana Drain) ajuda a secar a mana dele sem ser interrompido se ele tentar fugir no meio do canal (break distance de 1100, maior ainda com o Shard).
- como jogar: gankeie ele antes do nível 6/Mask of Madness se puder, ele ainda não tem sustain pra responder; depois do BKB dele (25,2 min), não force sozinho, puxe pro time.
- fonte: pro_dados/lion.json; pro_dados/nevermore.json; constants_abilities.json (lion_impale, lion_voodoo, nevermore_shadowraze1, nevermore_requiem); partidas pro 7.40-7.41 (OpenDota explorer: nível 6 e primeiro abate por XP/kills_log, ritmo de last hits).

## Contra Disruptor (disruptor)
- placar: Lion venceu 206 de 410 partidas pro (50,2%, equilibrado). Terceiro maior volume de jogos pro da base.
- por que importa: terceiro maior volume (410); espelho direto de função (suporte pos4/5 de disable em área), mas o kit dele é o contra clássico de roam: Glimpse desfaz o que você acabou de fazer.
- janelas: Disruptor sobe Arcane Boots aos 11,4 min de mediana (pro_dados/disruptor.json), você sobe Tranquil aos 7,4 min. O Blink dele sai bem depois do seu (24,0 min contra 18,2 min, pro_dados), mas ele nem precisa de Blink pra ameaçar: Static Storm já tem 800 de alcance de conjuração desde o nível 6. Entre os 18 e os 24 min a iniciação de contato é sua; depois disso ele passa a poder entrar na troca sozinho.
- o que ele faz com você: Glimpse (recarga de 24 a 18s, alcance até 1800 no nível 4) puxa você de volta pro lugar de 4s atrás, desfazendo seu Blink ou avanço, é a resposta direta contra sua iniciação. Kinetic Field prende num raio de 350 (não dá dano, só prende). Static Storm (raio 550, alcance 800) sila em área por até 6s, cala seu combo inteiro de uma vez.
- o que você faz com ele: Disruptor tem pouca vida; ele não tem disable de alvo único que trave você primeiro (Glimpse só reposiciona, não estuna), então Earth Spike mais Hex fecham ele rápido, e Finger of Death mata ele fora de BKB.
- itens que viram: o Aghanim's Scepter dele muda Static Storm pra silenciar também o uso de item, travando seu Blink e seu TP dentro da tempestade. Seu Aghanim's Shard não ajuda contra o Glimpse, que é reposicionamento puro, não debuff.
- como jogar: não inicie o Hex em alguém se o Disruptor ainda está livre com Glimpse pronto, ele desfaz o gank puxando o alvo de volta; mate o Disruptor primeiro se ele aparecer sozinho, ele não tem saída rápida de perto.
- fonte: pro_dados/lion.json; pro_dados/disruptor.json; constants_abilities.json (lion_impale, lion_voodoo, disruptor_glimpse, disruptor_kinetic_field, disruptor_static_storm); aghs_desc (Disruptor Scepter).

## Contra Snapfire (snapfire)
- placar: Lion perdeu a maioria, 175 de 408 partidas pro vencidas (42,9%). Quarto maior volume de jogos pro e o pior saldo entre os de alto volume.
- por que importa: quarto maior volume (408) e pior confronto entre os suportes de amostra grande; ela acumula os papéis Suporte, Nocauteador, Desabilitador e Fuga (heroes.json, dota-imortal/data/opendota) mas aparece com frequência na mesma rota de roam que você, disputando o mesmo papel de pick-off.
- janelas: Snapfire sobe Blink aos 20,7 min de mediana (pro_dados/snapfire.json) e o Aghanim's Shard dela aparece em 1.919 das 2.456 partidas pro da amostra (78%, pro_dados/snapfire.json), o item mais comprado fora de botas e wards. Seu Blink (18,2 min) chega um pouco antes do dela. Firesnap Cookie (stun no pouso de até 2,2s no nível 4) compete direto com seu combo: quem abre primeiro ganha a troca.
- o que ela faz com você: Firesnap Cookie salta e atordoa no pouso, seguida de Scatterblast (cone que dá +30% de dano e +50% de duração do slow em quem está a até 450 de distância), abrindo e fechando o combo antes de você reagir. Durante a própria ultimate (Mortimer Kisses) ela fica 5,5s com o giro reduzido, quase parada.
- o que você faz com ele: Snapfire tem pouca vida fixa; Earth Spike (650 de alcance) acerta antes dela fechar o salto de ponto-cego do Firesnap, se você antecipar a aproximação; e o giro reduzido durante o canal da Mortimer Kisses é a janela de ouro pro seu combo completo.
- itens que viram: o Black King Bar dela (fora do top 30 de itens mais comprados da amostra do herói, não é prioridade, mas aparece em late) bloqueia Hex e Earth Spike quando sair, ataque antes disso. Seu Aghanim's Shard (Mana Drain em 2 alvos extras) seca a mana dela e de um aliado perto numa troca de grupo.
- como jogar: ataque ela durante o canal da Mortimer Kisses, ela quase não se move nesses 5,5s; antes disso, respeite o Firesnap Cookie perto de você, ele abre o combo dela sozinho.
- fonte: pro_dados/lion.json; pro_dados/snapfire.json; constants_abilities.json (lion_impale, snapfire_firesnap_cookie, snapfire_scatterblast, snapfire_mortimer_kisses); heroes.json (papéis, dota-imortal/data/opendota).

## Contra Ogre Magi (ogre_magi)
- placar: Lion venceu 170 de 352 partidas pro (48,3%). Quinto maior volume de jogos pro da base.
- por que importa: quinto maior volume (352); suporte pos5 puro como você, mesma função de travar e explodir um alvo, só que via Fireblast mais Multicast em vez do seu combo de dois feitiços.
- janelas: Ogre sobe Boots of Speed aos 5,8 min de mediana (pro_dados/ogre_magi.json) e Soul Ring aos 5,9 min de mediana (partidas pro 7.40-7.41, OpenDota explorer; item fora do top 30 de pro_dados/ogre_magi.json), sustain de mana via Dumb Luck, que converte Força. Seu Tranquil (7,4 min) chega antes. O Blink dele sai aos 25,1 min de mediana (partidas pro 7.40-7.41, OpenDota explorer), bem depois do seu (18,2 min): há uma janela grande de 18 a 25 min em que você inicia e ele não tem como fechar distância sozinho.
- o que ele faz com você: Fireblast (alcance 525, stun de 1,2s) com Multicast (chance crescente com Força, até 75%/30%/15% de 2x/3x/4x) pode repetir o cast e dobrar o stun sem gastar mais mana. Ignite queima e reduz 25% da sua velocidade de movimento.
- o que você faz com ele: Ogre tem Força alta mas pouca mobilidade cedo (Blink só sai aos 25,1 min de mediana); Earth Spike mais Hex fecham ele de longe antes dele reagir, e Finger of Death mata ele enquanto ele não tiver muito dano de resposta à distância.
- itens que viram: o Scythe of Vyse do Ogre (37,3 min de mediana, partidas pro 7.40-7.41, OpenDota explorer; item fora do top 30 de pro_dados/ogre_magi.json) hexa você de volta, troca direta de disable. Seu Aghanim's Shard (debuff immune durante o canal de Mana Drain) segura o Fireblast dele se vier durante o canal.
- como jogar: force a luta antes do Blink dele (mediana 25,1 min, quando ele tiver); depois disso, cuidado com o Multicast repetindo o Fireblast em cadeia.
- fonte: pro_dados/lion.json; pro_dados/ogre_magi.json; constants_abilities.json (lion_impale, lion_voodoo, ogre_magi_fireblast, ogre_magi_multicast); partidas pro 7.40-7.41 (OpenDota explorer: timing de Soul Ring, Blink e Scythe of Vyse fora do top 30).

## Contra Pudge (pudge)
- placar: Lion venceu 167 de 336 partidas pro (49,7%, equilibrado). Sexto maior volume de jogos pro da base.
- por que importa: sexto maior volume (336); outro roamer de pick-off, com papéis Desabilitador, Iniciador e Durável (heroes.json, dota-imortal/data/opendota), disputa a mesma função de "andar sozinho caçando ângulo" que você.
- janelas: Pudge sobe Phase Boots aos 6,9 min de mediana ou Tranquil Boots aos 5,3 min (ambos pro_dados/pudge.json), e Blink aos 19,5 min de mediana, quase junto do seu (18,2 min). Ele fecha Aghanim's Scepter numa mediana de 17,2 min (p25 em 15,1 min), deixando o Rot maior e mais forte pra limpar wave; o BKB dele sai aos 27,6 min de mediana (partidas pro 7.40-7.41, OpenDota explorer; item fora do top 30 de pro_dados/pudge.json), protegendo o canal do Dismember.
- o que ele faz com você: Meat Hook (1300 de alcance, `bkbpierce: Yes`) atravessa qualquer Black King Bar e puxa você de longe mesmo fora do alcance normal, interrompendo o que você estiver fazendo. Dismember (canalizado, também `bkbpierce: Yes`) drena vida e prende, ignorando imunidade mágica sua se você tiver BKB.
- o que você faz com ele: Pudge tem pouca mobilidade fora do Hook; Earth Spike mais Hex o travam antes dele acertar o gancho. Se Pudge canalizar o Dismember em você e um aliado tiver qualquer disable rápido livre, usar nele quebra o canal na hora, porque é Pudge (o conjurador) quem precisa ficar parado canalizando, vulnerável a stun.
- itens que viram: nenhum BKB seu segura o Hook (`bkbpierce: Yes`), a defesa real é não ficar em linha reta exposto sem necessidade. Seu Aghanim's Shard não ajuda contra o Hook, que é posicional, não debuff.
- como jogar: não ande sozinho em linha reta por áreas que ele costuma ganchar; se ele te prender com Dismember, peça pro time gastar qualquer stun nele imediatamente, interromper o canal vale mais que qualquer outra coisa.
- fonte: pro_dados/lion.json; pro_dados/pudge.json; constants_abilities.json (pudge_meat_hook, pudge_dismember, lion_impale, lion_voodoo); heroes.json (papéis, dota-imortal/data/opendota); partidas pro 7.40-7.41 (OpenDota explorer: BKB fora do top 30); dota2.fandom.com/wiki/Disable (stuns interrompem canalização do conjurador).

## Contra Hoodwink (hoodwink)
- placar: Lion venceu 168 de 330 partidas pro (50,9%, levemente favorável). Sétimo maior volume de jogos pro da base.
- por que importa: sétimo maior volume (330) e o suporte pos4/5 mais jogado contra o Lion fora do top 6 geral, mesma função de controle à distância perto de obstáculo (árvore no caso dela).
- janelas: o Aghanim's Shard da Hoodwink (Hunter's Boomerang) sai aos 23,8 min de mediana (pro_dados/hoodwink.json); Force Staff é o item de meio-jogo mais comprado da amostra (1.061 de 2.917 partidas pro, 36,4%, mediana 26,1 min, partidas pro 7.40-7.41 via OpenDota explorer), e o Blink dela aparece em 744 partidas (25,5%, mediana 28,9 min). Seu Blink (18,2 min) chega bem antes dessa janela dela.
- o que ela faz com você: Bushwhack (raio 265, puxa pra árvore mais próxima, zera sua visão por até 2,1s) prende você perto de árvore; Scurry (até 5s) não dá evasão, o tooltip oficial é velocidade de movimento, movimento fantasma e capacidade de atravessar árvore, além de dobrar o redirect chance passivo da inata Mistwoods Wayfarer (de 14% pra 28%, chance de jogar parte do ataque recebido pra árvore mais próxima). Earth Spike e Finger of Death continuam acertando normal durante o Scurry, porque o redirect só mexe com ataque, não com magia.
- o que você faz com ele: Earth Spike acerta ela mesmo durante o Scurry, já que não é ataque básico; Hex trava ela antes de plantar a árvore do combo.
- itens que viram: o Black King Bar dela bloqueia Hex e Earth Spike. Seu Aghanim's Shard ajuda a secar a mana dela, que é baixa de base (75 inicial, OpenDota heroStats).
- como jogar: evite ficar perto de árvore sem visão contra ela; force a luta antes dela fechar o Scythe of Vyse (361 de 2.917 partidas pro, 12,4%, mediana 41,7 min, partidas pro 7.40-7.41 via OpenDota explorer), que hexaria você de volta.
- fonte: pro_dados/lion.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_scurry, hoodwink_mistwoods_wayfarer, lion_impale, lion_voodoo); OpenDota heroStats (base_mana); partidas pro 7.40-7.41 (OpenDota explorer: Blink, Force Staff e Scythe of Vyse fora do top 30).

## Contra Jakiro (jakiro)
- placar: Lion venceu 168 de 317 partidas pro (53,0%). Oitavo maior volume de jogos pro e o melhor saldo entre os suportes de amostra grande.
- por que importa: oitavo maior volume (317) e melhor saldo entre os heróis de alto volume contra o Lion; outro pos5 puro de controle em área, mas lento, dá pra evitar com posicionamento.
- janelas: Jakiro sobe Arcane Boots por volta dos 11-12 min e fecha o nível 6 (Macropyre) cedo. Seu Tranquil (7,4 min) chega antes. Jakiro não tem blink no kit; com o seu Blink pronto (18,2 min) você ataca de surpresa sem ele conseguir reagir a tempo.
- o que ele faz com você: Ice Path (stun de até 2s no nível 4, alcance de conjuração 1100, 0,65s de cast) e Dual Breath (cone de dano e slow) travam de longe; Macropyre (300 a 500 de mana, raio 500, 100 a 200 de dano por segundo por 10s) deleta quem fica parado dentro.
- o que você faz com ele: Jakiro tem pouca mobilidade; Earth Spike (quase instantâneo em voo) acerta antes do Ice Path formar (0,65s de cast time dele); Hex cancela o cast da Macropyre se acertado durante os 0,4s de conjuração dela.
- itens que viram: o Aghanim's Scepter do Jakiro aumenta a duração da Macropyre e vira dano puro, além de criar paredes de gelo que lentificam 60% quem cruza (aghs_desc); mesmo assim Macropyre não é `bkbpierce` (constants_abilities.json), então um Black King Bar do seu time ainda bloqueia o combo depois do Scepter, igual bloqueava antes. Seu Aghanim's Shard (Mana Drain em 2 alvos) seca a mana dele e de um aliado perto numa troca.
- como jogar: acerte o combo antes dele upar o Scepter; depois disso, não fique parado na área da Macropyre nem com BKB ligado, pois sem imunidade o dano vira puro.
- fonte: pro_dados/lion.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_macropyre, lion_impale, lion_voodoo); aghs_desc (Jakiro Scepter).

## Contra Grimstroke (grimstroke)
- placar: Lion venceu 68 de 110 partidas pro (61,8%). Melhor confronto entre os suportes com amostra de 30 ou mais jogos.
- por que importa: melhor saldo entre os suportes de amostra relevante (61,8% em 110 jogos); mesma função pos4/5, mas o combo dele (Soulbind) precisa de alcance e canal pra valer, o que o deixa exposto ao seu combo rápido.
- janelas: Grimstroke sobe Arcane Boots aos 10,9 min de mediana e o Blink dele sai aos 22,4 min de mediana (ambos pro_dados/grimstroke.json), bem depois do seu (18,2 min): uma janela de cerca de 4 min de vantagem de iniciação pra você.
- o que ele faz com você: Soulbind (`bkbpierce: Yes`, raio de 600, 6 a 8s de duração) amarra você ao aliado mais próximo, mas não estuna sozinho, serve pro time dele focar junto. Stroke of Fate (slow de até 80%, alcance 1400) desacelera antes de qualquer troca.
- o que você faz com ele: Grimstroke tem pouca vida fixa e nenhum disable de alvo único rápido fora do Soulbind (recarga alta, 60 a 70s); Earth Spike mais Hex o travam de longe antes dele reagir, e Finger of Death mata ele fora de itens defensivos.
- itens que viram: o Aghanim's Shard dele dá dispel básico via Ink Swell, mas seu Hex é "Strong Dispels Only" (constants_abilities.json), então esse dispel não solta o Hex nele mesmo que ele use em si. Seu Aghanim's Shard (debuff immune durante Mana Drain) segura o Soulbind se vier durante o canal.
- como jogar: pegue ele antes do Blink dele estar pronto (mediana 22,4 min); seu Hex nele não sai nem com o dispel básico do Shard dele, force a troca sem medo desse item.
- fonte: pro_dados/lion.json; pro_dados/grimstroke.json; constants_abilities.json (grimstroke_soul_chain, grimstroke_dark_artistry, lion_voodoo).

## Contra Sven (sven)
- placar: Lion venceu 62 de 102 partidas pro (60,8%). Segundo melhor confronto da base com 30 ou mais jogos.
- por que importa: segundo melhor saldo (60,8% em 102 jogos); carry físico que raramente compartilha lane com você, incluído porque Sven precisa ficar parado farmando pra escalar, e você ganha gankando ele cedo, antes do primeiro power spike dele.
- janelas: Sven liga Warcry no nível 2 numa mediana de 2 min, fecha Power Treads aos 5,9 min (pro_dados/sven.json) e passa os níveis 4 e 5 nas medianas de 5 e 7 min (primeiro pico de farm real), e pega God's Strength no nível 6 numa mediana de 9 min, com +110% de dano por 30s (partidas pro 7.40-7.41, OpenDota explorer, resolução de 1 min). Seu Tranquil (7,4 min) chega bem nessa janela: é o momento certo pra gankear ele ANTES do God's Strength valer a pena. O Blink dele sai aos 17,1 min de mediana (pro_dados/sven.json); o seu já está pronto aos 18,2 min, mas ele ainda depende do Storm Hammer (600 de alcance) pra iniciar, contra os 650 do seu Earth Spike.
- o que ele faz com você: Storm Hammer (até 320 de dano, 1,6s de stun no nível 4, recarga de só 12s) atordoa e abre a troca; God's Strength multiplica o dano físico dele em até 190%, qualquer autoataque vira quase fatal pra você sem sustain.
- o que você faz com ele: Sven tem pouca mobilidade antes do Blink (mediana 17,1 min); Earth Spike mais Hex o travam de longe (650 contra os 600 de alcance do Storm Hammer dele) antes dele chegar perto o bastante pra bater; Finger of Death mata ele cedo, antes dele upar vida com itens de força.
- itens que viram: o Black King Bar dele sai aos 22,7 min de mediana (pro_dados/sven.json) e bloqueia Hex e Earth Spike; nas partidas pro Lion-Sven 7.40-7.41 (OpenDota explorer) que terminam até os 23 min, antes do BKB dele, o Lion vence 6 de 8 (75%, amostra pequena), e isso cai pra 62,1% em 58 jogos que passam dos 23 min, sinal de quão valiosa é a pressão cedo contra ele. Seu Aghanim's Shard (break distance maior) ajuda a segurar ele se tentar fugir durante o canal de Mana Drain.
- como jogar: gankeie ele antes do nível 6 (God's Strength) ou entre o nível 6 e o Blink dele (mediana de 9 a 17,1 min), essa é a janela mais vulnerável dele; depois do BKB dele, evite o 1x1 sem apoio do time.
- fonte: pro_dados/lion.json; pro_dados/sven.json; constants_abilities.json (sven_storm_bolt, sven_gods_strength, lion_impale, lion_voodoo); partidas pro 7.40-7.41 (OpenDota explorer: níveis por XP acumulado, vitórias do Lion por duração de partida).

## Contra Spectre (spectre)
- placar: Lion venceu 24 de 36 partidas pro (66,7%). Melhor saldo bruto de toda a base, mas amostra pequena (36 jogos), trate o número com cautela.
- por que importa: melhor saldo bruto de toda a base de confrontos do Lion; outro carry que raramente compartilha lane, incluído porque é um confronto claro de farm contra controle: Spectre é devagar e frágil cedo, antes do Radiance.
- janelas: Spectre pega nível 6 (Haunt) numa mediana pro de 9 min (partidas pro 7.40-7.41, OpenDota explorer, resolução de 1 min), mas o Radiance só sai aos 18,2 min de mediana (pro_dados/spectre.json), o maior pico de farm dela (de 7,3 para 10,7 last hits por minuto, partidas pro 7.40-7.41, OpenDota explorer). Antes disso ela não tem defesa real, só Urn of Shadows e Magic Wand. Seu Tranquil (7,4 min) e seu Blink (18,2 min) chegam bem antes do Manta dela (24,7 min de mediana, pro_dados/spectre.json). A Dispersion (passiva, reflete 8 a 20% do dano, `bkbpierce: Yes`) já funciona desde o nível 4, mas só devolve parte do dano recebido, não impede seu combo de controle.
- o que ela faz com você: Haunt cria uma ilusão em cada herói inimigo (30% do dano dela no primeiro nível) por 125 de mana, usado mais como fuga ou reposição que ameaça direta cedo; antes do Radiance ela não tem burst real contra você.
- o que você faz com ele: Spectre é extremamente frágil antes dos itens (Radiance só aos 18,2 min); Earth Spike mais Hex a travam antes de qualquer resposta, e Finger of Death mata ela sozinho até o meio do jogo. Mana Drain (break distance de 1100) seca a mana dela cedo, quando ela ainda depende de Urn/Wand pra sobreviver na lane.
- itens que viram: a Dispersion reflete parte do dano físico do seu combo de volta (8% no nível 1), mas não impede o disable em si, Earth Spike e Hex continuam travando normal. O BKB dela só fica pronto aos 36,4 min de mediana (partidas pro 7.40-7.41, OpenDota explorer; item fora do top 30 de pro_dados/spectre.json), uma janela enorme de 7 a 36 min pra você.
- como jogar: amostra pequena (36 jogos), trate o placar com cautela, mas a lógica mecânica é sólida: gankeie ela antes do Radiance (18,2 min), ela não tem resposta nem fuga de verdade até lá.
- fonte: pro_dados/lion.json; pro_dados/spectre.json; constants_abilities.json (spectre_dispersion, spectre_haunt, lion_mana_drain, lion_impale, lion_voodoo); partidas pro 7.40-7.41 (OpenDota explorer: nível 6 por XP acumulado, ritmo de last hits, BKB fora do top 30).

## Contra Treant Protector (treant)
- placar: Lion perdeu a maioria, 37 de 105 partidas pro vencidas (35,2%). Pior confronto entre os suportes com amostra de 30 ou mais jogos.
- por que importa: pior saldo entre os suportes de amostra relevante (35,2% em 105 jogos); mesmos papéis Suporte, Iniciador e Durável (heroes.json, dota-imortal/data/opendota), mas o kit dele é contra direto do seu: Overgrowth prende em área e ignora o seu Black King Bar.
- janelas: Treant sobe Arcane Boots aos 12,0 min e Aghanim's Shard aos 19,0 min (pro_dados/treant.json), perto do seu Blink (18,2 min). O Blink dele só sai aos 26,4 min, bem depois do seu.
- o que ele faz com você: Overgrowth (ultimate, `bkbpierce: Yes`, raio 800, até 5s de raiz) prende todo mundo perto, incluindo você mesmo com BKB ligado; Nature's Guise dá invisibilidade perto de árvore e +10% de velocidade, escondendo a aproximação dele até ele estar quase em cima de você.
- o que você faz com ele: Treant tem pouca mobilidade cedo; Earth Spike mais Hex o travam de longe antes dele chegar perto o bastante pro Overgrowth, que precisa estar literalmente perto (raio de 800) pra pegar você.
- itens que viram: nenhum item seu segura o Overgrowth (`bkbpierce: Yes`), mesmo seu Aghanim's Shard (60% de resistência mágica durante Mana Drain) não impede a raiz, só reduz um pouco o dano dentro dela. A resposta real é não ficar perto de árvore sem visão quando ele está livre.
- como jogar: mantenha distância de árvores sem ward quando o Treant está solto no mapa; gankeie ele antes do Shard dele (19 min) e antes do nível da ultimate, quando ele ainda não tem resposta de área.
- fonte: pro_dados/lion.json; pro_dados/treant.json; constants_abilities.json (treant_overgrowth, treant_natures_guise, lion_impale, lion_voodoo); heroes.json (papéis, dota-imortal/data/opendota); aghs_desc (Treant Shard/Scepter).

## Contra Bane (bane)
- placar: Lion perdeu a maioria, 22 de 60 partidas pro vencidas (36,7%). Terceiro pior confronto da base com 30 ou mais jogos, atrás de Enigma (29,7%) e Treant Protector (35,2%).
- por que importa: terceiro pior saldo (36,7% em 60 jogos, atrás de Enigma e Treant); espelho de pesadelo, outro suporte pos4/5 de disable de alvo único, mas o combo dele (Nightmare mais Fiend's Grip) neutraliza justamente a liberdade de iniciar da qual você depende.
- janelas: Bane sobe Boots aos 6,1 min e Aether Lens aos 22,6 min de mediana (pro_dados/bane.json), item que dá alcance extra pro combo. Seu Blink (18,2 min) chega antes do Aether Lens dele, mas Bane não depende de Blink pra funcionar: Fiend's Grip já tem 625 de alcance base.
- o que ele faz com você: Nightmare (recarga de 25 a 16s) coloca você pra dormir, zerando sua reação por até 6,5s; Fiend's Grip (canalizado, `bkbpierce: Yes`, atravessa seu BKB, 625 de alcance) drena mana e causa até 150 de dano por tick durante 4,75 a 5,75s de canal, mata você sozinho sem fuga pronta.
- o que você faz com ele: Bane tem pouca vida fixa; Earth Spike mais Hex o travam de longe antes dele acertar o Nightmare. Se um aliado tiver disable rápido livre quando ele começar o Fiend's Grip, usar nele interrompe o canal na hora, é ele quem precisa ficar parado quase 5s canalizando.
- itens que viram: o Aghanim's Scepter do Bane (mediana 35,8 min, pro_dados/bane.json) cria ilusões que também canalizam Fiend's Grip, dificultando cancelar os dois ao mesmo tempo. Seu Aghanim's Shard não ajuda aqui, Fiend's Grip fura imunidade mágica mesmo assim (`bkbpierce: Yes`).
- como jogar: não ande sozinho perto de onde o Bane pode estar escondido antes do nível 6; se ele começar o Fiend's Grip em você, peça pro time interromper com qualquer stun disponível, ele é o alvo fácil nesse momento, parado canalizando.
- fonte: pro_dados/lion.json; pro_dados/bane.json; constants_abilities.json (bane_nightmare, bane_fiends_grip, lion_impale, lion_voodoo).

## Contra Enigma (enigma)
- placar: Lion perdeu a maioria, 11 de 37 partidas pro vencidas (29,7%). Pior confronto de toda a base, amostra pequena (37 jogos), trate o número com cautela.
- por que importa: pior saldo de toda a base de confrontos do Lion; o motivo mecânico é claro mesmo com amostra pequena: Black Hole ignora Black King Bar e prende a área toda, e você é um dos alvos mais fáceis de puxar pra dentro por ter pouca vida.
- janelas: Enigma sobe Blink Dagger aos 15,8 min de mediana, antes do seu (18,2 min), e Aghanim's Shard aos 17,1 min de mediana (ambos pro_dados/enigma.json). É a pior janela do confronto todo: ele chega pronto pra iniciar com Black Hole antes de você ter Blink pra responder.
- o que ele faz com você: Black Hole (canalizado por 4s, `bkbpierce: Yes`, raio 420, puxa unidades pro centro) prende você mesmo com BKB ligado, sem chance de fuga durante os 4s; Malefice (stun por tick, 3 instâncias de até 0,9s cada, mais 0,9s extra de stun total com o Shard dele) trava antes mesmo do Black Hole começar.
- o que você faz com ele: Enigma tem vida moderada e nenhuma fuga própria; se você ou um aliado tiver Hex ou qualquer stun livre quando ele começar a canalizar o Black Hole, interromper o canal é a prioridade da luta, stuns interrompem canalização (dota2.fandom.com, tabela de disables) e cancelam o Black Hole inteiro antes dele prender o time.
- itens que viram: Black King Bar não ajuda contra o Black Hole (`bkbpierce: Yes`); a única resposta real é um disable rápido nele antes ou durante o canal. Seu Aghanim's Shard (debuff immune durante Mana Drain) não segura a puxada do Black Hole.
- como jogar: amostra pequena (37 jogos), mas a lógica é sólida: nunca force grupo contra um Enigma com Blink pronto sem ter disable rápido de volta; se ele canalizar o Black Hole, gaste Hex ou qualquer stun nele imediatamente, cancelar o canal vale mais que qualquer outra ação na luta.
- fonte: pro_dados/lion.json; pro_dados/enigma.json; constants_abilities.json (enigma_black_hole, enigma_malefice, lion_voodoo); dota2.fandom.com/wiki/Disable (stuns interrompem canalização).
