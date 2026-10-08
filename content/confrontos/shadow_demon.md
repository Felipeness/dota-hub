---
id: confrontos-shadow_demon
heroi: Shadow Demon
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shadow_demon.json e pro_dados dos 14 oponentes (resumo, itens e confrontos de partidas de liga, patches 7.40 e 7.41)
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/shadow_demon.md
- https://api.opendota.com/api/constants/aghs_desc
- https://dotacoach.gg/en/heroes/counters/shadow-demon
---

Shadow Demon é suporte de disable: Disruption bane o alvo por 2,75s (não fura BKB, não é dispelável), Shadow Poison empilha dano à distância (1500 de alcance), e a ultimate Demonic Purge remove buff positivo e desacelera até 100%, furando Black King Bar (constants_abilities.json, `bkbpierce: Yes` em `shadow_demon_demonic_purge`, `No` em `shadow_demon_disruption`). HP base de 120, o mais frágil do kit de suporte (content/fichas/shadow_demon.md). Mediana de pro (2.022 jogos, 7.40+7.41): boots 5,4min, Ring of Basilius 8,8min, Arcane Boots 11,3min, Blink Dagger 23,9min, Aghanim's Shard 25,4min (pro_dados/shadow_demon.json).

## Contra Jakiro (jakiro)
- placar: 202 vitórias em 382 jogos de pro (52,9%), fonte OpenDota /heroes/79/matchups.
- por que importa: é o oponente com mais jogos de pro contra Shadow Demon no recorte (382), os dois são suportes de área que vivem juntos nas mesmas drafts.
- janelas: até 10 min os dois estão em sustain puro (ambos compram Ring of Basilius perto do minuto 9); 7-10 min Jakiro liga o nível 6 e passa a ameaçar com Macropyre (100-200 de dano/s por 10s, 500 de largura, constants_abilities.json); Jakiro não compra Blink no top14 de itens dele (pro_dados/jakiro.json), então até os 20 min quem tem mais alcance de iniciação é você (Shadow Poison a 1500 contra Dual Breath e Ice Path, mais curtos); depois dos 24 min seu Blink (mediana 23,9min) fecha a distância que faltava.
- o que ele faz com você: Ice Path (cd 20-11s) estica um corredor de gelo que atordoa 1,25-2s quem pisa; Macropyre no nível 6 queima qualquer um parado no combo, e você tem só 120 de HP base.
- o que você faz com ele: Shadow Poison bate a 1500 de distância, fora do alcance de resposta de Jakiro (Dual Breath é mais curto); banir Jakiro com Disruption antes dele soltar Macropyre apaga o turno dele na troca.
- itens que viram: Aghanim's Scepter de Jakiro (se comprado) faz o Macropyre durar mais e bater dano puro, ignorando resistência mágica, o que piora muito seu 1x1 se ele fechar o combo; do seu lado, Demonic Purge ainda desacelera e fura BKB mesmo que ele tente correr do fogo.
- como jogar: na lane, poke com Shadow Poison fora do alcance do Dual Breath e evite ficar parado perto de crieps quando ele estiver com a ultimate pronta. Em teamfight, banir ou atordoar Jakiro antes dele canalizar o Macropyre vale mais que qualquer outro alvo.
- fonte: pro_dados/jakiro.json; pro_dados/shadow_demon.json; constants_abilities.json (jakiro_macropyre, jakiro_ice_path, shadow_demon_shadow_poison)

## Contra Tusk (tusk)
- placar: 192 vitórias em 344 jogos de pro (55,8%), fonte OpenDota /heroes/79/matchups.
- por que importa: segundo oponente com mais jogos de pro (344), Tusk é o suporte roamer mais comum do patch e cruza com Shadow Demon na rotação, não só na lane.
- janelas: 0-10 min Tusk ronda com Ice Shards (cd 23-14s, 7 fragmentos de 75-300 de dano) e Snowball (cd 21-15s) atrás de pick fácil contra você, que tem pouco HP pra reagir; Tusk pega Blink cedo (mediana 19,0min, p25 16,8min, pro_dados/tusk.json), bem antes do seu (23,9min), então até os 20 min ele tem mais mobilidade pra iniciar; depois dos 24 min o seu Blink equilibra o alcance.
- o que ele faz com você: Snowball te pega rolando junto com aliados e te estoura contra parede, aí Walrus Punch (crítico de 200-300%, empurra 1000 de distância) decide o 1x1 sozinho se você estiver sem Disruption disponível.
- o que você faz com ele: Disruption pode banir o próprio Tusk no meio da rolagem do Snowball, cancelando o combo antes do stun acontecer (banimento remove a unidade do mapa); Demonic Purge desacelera 100% e fura BKB, então mesmo com Walrus Punch pronto ele não escapa depois de errar a abertura.
- itens que viram: Aghanim's Shard de Tusk (Drinking Buddies) puxa um aliado e dá velocidade/armadura pros dois, então ele sustenta roam sem gastar o combo principal; fique de olho nisso pra não achar que ele está sem recursos.
- como jogar: trave a visão dele com Sentry perto da sua posição nos primeiros 10 min, é quando ele mais ronda. Guarde Disruption pra cancelar o Snowball quando ele vier com aliado grudado.
- fonte: pro_dados/tusk.json; pro_dados/shadow_demon.json; constants_abilities.json (tusk_snowball, tusk_walrus_punch, shadow_demon_disruption); https://api.opendota.com/api/constants/aghs_desc

## Contra Disruptor (disruptor)
- placar: 186 vitórias em 315 jogos de pro (59,0%), fonte OpenDota /heroes/79/matchups.
- por que importa: terceiro em jogos de pro (315) e mesma função exata, suporte de controle em área com ultimate de zona; os dois disputam o mesmo papel no draft.
- janelas: 0-10 min os dois ficam no farm de suporte (gpm muito parecido: você 314, ele 279, pro_dados); nível 6 (7-9 min) Disruptor liga Static Storm (cd 100-70s, silencia e cresce o dano por 6s), que apaga seu combo inteiro se te pegar dentro; Glimpse (cd 24-18s) te puxa pra posição de 4s atrás a qualquer momento, cancelando um avanço seu; depois do seu Blink (23,9min) você consegue abrir a troca antes dele reagir, já que ele raramente compra Blink (não aparece no top14 de itens dele, pro_dados/disruptor.json).
- o que ele faz com você: Static Storm te silencia por completo dentro do raio de 550, e Kinetic Field (cd 20-14s, raio 350) te prende do lado de dentro de uma troca ruim.
- o que você faz com ele: sua Shadow Poison (1500 de alcance) chega antes do alcance de Glimpse (600-1800 escalando); se ele canalizar algo perto de você primeiro, Disruption nele cancela a iniciação.
- itens que viram: Aghanim's Scepter de Disruptor faz Static Storm silenciar também o uso de itens, o que te tira até do Blink de fuga; o Aghanim's Shard dele (Kinetic Fence) cria uma segunda parede, perigoso pra te prender longe de ajuda.
- como jogar: não entre no raio de 550 da Static Storm sem Disruption ou Blink de resposta na mão. Priorize nukar ele primeiro em fight, o HP dele é ainda mais baixo que o seu (gpm 279, o menor dos 14 oponentes).
- fonte: pro_dados/disruptor.json; pro_dados/shadow_demon.json; constants_abilities.json (disruptor_static_storm, disruptor_glimpse, disruptor_kinetic_field); https://api.opendota.com/api/constants/aghs_desc

## Contra Mars (mars)
- placar: 182 vitórias em 307 jogos de pro (59,3%), fonte OpenDota /heroes/79/matchups.
- por que importa: quarto em jogos de pro (307), offlane fixo do patch que domina a lane contra suporte com Bulwark e costuma dividir trilane com Shadow Demon.
- janelas: 0-7 min Mars farma rápido (lh10 de 49 contra o seu 7, pro_dados), o Bulwark bloqueia boa parte do seu poke físico de criep; nível 6 (7-9 min) ele liga Arena of Blood (cd 100-90s, prende em área de 550 por 5,5s) e Spear (cd 14-11s, empala e empurra); Mars pega Blink muito cedo (mediana 15,2min, p25 13,5min) e Aghanim's Shard logo depois (21,5min), ficando perigoso fora da lane já nos 15-22 min; seu Blink só chega aos 23,9min, então até lá ele tem iniciativa.
- o que ele faz com você: Spear te empala e te puxa pra perto dele, Arena of Blood fecha a saída e as lanças da arena punem quem tenta sair pela borda, tudo isso em cima de 120 de HP.
- o que você faz com ele: Demonic Purge não é ataque básico, então passa direto pelo bloqueio do Bulwark; banir Mars com Disruption antes dele formar a Arena nega a iniciação inteira.
- itens que viram: Aghanim's Shard de Mars faz a Spear empalar até 2 heróis e deixar rastro de fogo que desacelera, perigoso se você estiver ao lado de um aliado; o Scepter dele reduz o cooldown da Arena e cura quem mata lá dentro, tornando cada troca na arena mais decisiva.
- como jogar: não force trade dentro do raio de 550 da Arena. Use Shadow Poison a distância pra chegar no nível 6 dele sem estar perto o suficiente pra ser empalado.
- fonte: pro_dados/mars.json; pro_dados/shadow_demon.json; constants_abilities.json (mars_spear, mars_arena_of_blood, mars_bulwark); https://api.opendota.com/api/constants/aghs_desc

## Contra Tiny (tiny)
- placar: 168 vitórias em 305 jogos de pro (55,1%), fonte OpenDota /heroes/79/matchups.
- por que importa: quinto em jogos de pro (305) e sem lane fixa em comum com Shadow Demon (Tiny é carry pos 1 no catálogo atual), mas aparece demais em pro pra ignorar; é também o matchup que a dotacoach.gg lista como favorável pra você (+3,9% de vantagem na contagem deles, fonte secundária).
- janelas: 0-7 min cada um na sua lane, Tiny já com lh10 de 44 contra o seu 7 (pro_dados), bem mais forte em farm; nível 6 (7-8 min) ele liga Grow e o combo Toss + Avalanche vira ameaça de kill instantâneo; Tiny pega Blink aos 15,9min, antes do seu; dos 16 aos 23 min ele tem mais mobilidade que você pra iniciar o combo.
- o que ele faz com você: Toss (cd 20-11s) te pega num raio de 300 e te joga em cima de Avalanche (cd 23-14s, 1,5s de pancadas), e com Grow o dano de ambos escala muito.
- o que você faz com ele: se ele te pegar no Toss, Disruption em você mesmo ou no aliado agarrado não é possível (Disruption não se auto-alveja), mas Disruption nele antes do cast cancela o combo inteiro; Demonic Purge desacelera 100% e fura BKB, ótimo pra impedir ele de reposicionar depois de errar o combo.
- itens que viram: o Aghanim's Shard de Tiny faz a unidade jogada pelo Toss (você, nesse combo) bater mais forte e desacelerar uma área maior no ponto de aterrissagem, piorando ainda mais o combo com Avalanche contra você; seu Blink (23,9min) te dá a mesma mobilidade que ele já tem desde os 16 min, equalizando o 1x1 na metade do jogo.
- como jogar: fique fora dos 300 de raio do Toss sempre que ele estiver perto do nível 6. Depois do seu Blink, você pode banir ele de longe antes do combo começar.
- fonte: pro_dados/tiny.json; pro_dados/shadow_demon.json; constants_abilities.json (tiny_toss, tiny_avalanche, tiny_grow); https://dotacoach.gg/en/heroes/counters/shadow-demon

## Contra Snapfire (snapfire)
- placar: 154 vitórias em 294 jogos de pro (52,4%), fonte OpenDota /heroes/79/matchups.
- por que importa: sexto em jogos de pro (294) e mesma posição principal de suporte (4/5), outro suporte de controle em área que disputa o mesmo espaço de draft.
- janelas: 0-10 min os dois fazem lane de controle, Snapfire com lh10 de 21 contra o seu 7, farma mais rápido mesmo sendo suporte; nível 6 (7-9 min) ela liga Mortimer Kisses (cd 120-100s, 8 globos em 5,5s com poça de dano e lentidão); ela compra Aghanim's Shard muito cedo (mediana 16,9min, p25 15,2min), bem antes do seu (25,4min), o que te deixa em desvantagem de kit dos 15 aos 25 min.
- o que ela faz com você: Firesnap Cookie (cd 18-15s) atordoa à distância antes de você conseguir reagir, e Mortimer Kisses zoneia toda a área onde você precisaria ficar pra acertar Shadow Poison.
- o que você faz com ele: seu Shadow Poison (1500) tem mais alcance que o Lil Shredder dela (ataque à distância turbinado, bônus de alcance de 160 a 400 conforme o nível, constants_abilities.json); Disruption nela cancela a preparação de um Firesnap Cookie contra um aliado.
- itens que viram: o Aghanim's Shard dela faz o Firesnap Cookie curar mais e lançar um Mortimer Kiss adicional com 40% do impacto, dobrando o valor do mesmo cast; não force trade corpo a corpo depois que ela tiver esse item.
- como jogar: respeite o alcance do Firesnap Cookie desde cedo, ela não precisa estar perto pra te atordoar. Use seu alcance maior de Shadow Poison pra vencer a troca de poke antes do nível 6 dela.
- fonte: pro_dados/snapfire.json; pro_dados/shadow_demon.json; constants_abilities.json (snapfire_firesnap_cookie, snapfire_mortimer_kisses); https://api.opendota.com/api/constants/aghs_desc

## Contra Rubick (rubick)
- placar: 106 vitórias em 229 jogos de pro (46,3%, amostra grande mas desvantagem leve), fonte OpenDota /heroes/79/matchups.
- por que importa: maior número de jogos de pro entre os suportes de mesma posição (4/5) que não entraram no top 6 geral; é o espelho mais direto de Shadow Demon, outro suporte int frágil que vive de acertar o disable primeiro.
- janelas: 0-10 min farm parecido (ele 374 de gpm contra seus 314, mais alto porque Rubick também farma Telekinesis em creep pra setup); Rubick pega Blink aos 21,6min, perto do seu 23,9min, então até lá o duelo é de quem posiciona melhor pra não dar Spell Steal de graça; depois dos 22 min os dois têm a mesma mobilidade.
- o que ele faz com você: Telekinesis (cd 22-13s) te joga no ar e te estoura no chão perto de aliados dele; Spell Steal pode roubar seu último cast, e se for seu Demonic Purge, ele devolve furando BKB do seu próprio time.
- o que você faz com ele: Shadow Poison de 1500 de alcance acerta antes dele chegar perto o bastante pra roubar algo útil; gaste primeiro um spell barato (Disseminate) perto dele pra não deixar Purge ou Disruption disponíveis pro roubo.
- itens que viram: o Aghanim's Scepter de Rubick guarda 2 spells roubados com a versão Scepter deles, então contra você o risco é ele roubar sua Demonic Purge já com o bônus de Scepter dela: 2 cargas da habilidade em vez de 1 (constants_abilities.json: scepter de `shadow_demon_demonic_purge`).
- como jogar: nunca gaste Demonic Purge perto de um Rubick sem abafar (Disruption nele primeiro, ou distância). Prefira vencer a troca de poke à distância antes de entrar em alcance de Telekinesis (375).
- fonte: pro_dados/rubick.json; pro_dados/shadow_demon.json; constants_abilities.json (rubick_telekinesis, rubick_spell_steal); https://api.opendota.com/api/constants/aghs_desc

## Contra Lion (lion)
- placar: 107 vitórias em 202 jogos de pro (53,0%), fonte OpenDota /heroes/79/matchups.
- por que importa: segundo maior em jogos de pro entre suportes da mesma posição (202), o nuker de pick mais clássico do jogo e concorrente direto de função.
- janelas: nível 6 (6-8 min) é o ponto mais perigoso: Finger of Death (cd 110-30s, escala com kills, 600-850 de dano) mais Impale (cd 14-11s) matam você de um combo só, já que você tem 120 de HP base; Lion só compra Blink aos 18,2min, então nos primeiros 18 min ele depende de Impale (650 de alcance) pra chegar perto, enquanto sua Shadow Poison já ameaça de 1500.
- o que ele faz com você: Impale te atordoa até 2,2s e Finger of Death fecha a kill mesmo de muito HP; Voodoo (cd 24-12s, até 3,2s) te transforma e desliga qualquer resposta sua.
- o que você faz com ele: Disruption nele antes do cast de Impale ou Voodoo cancela a tentativa; Demonic Purge desacelera 100% e fura BKB, útil pra impedir ele de reposicionar pro próximo Impale.
- itens que viram: o Aghanim's Shard de Lion dá imunidade a debuff e 60% de resistência mágica enquanto ele canaliza Mana Drain, então ele passa a aguentar seu Shadow Poison e seu Purge durante o dreno; o Scepter dá dano em área no Finger of Death, perigoso se você estiver perto de um aliado quando ele puxar o gatilho.
- como jogar: respeite 650 de alcance do Impale antes do nível 6 dele. Depois disso, vença pelo alcance maior do seu Shadow Poison e não entre em linha reta pra ele acertar os dois stuns juntos.
- fonte: pro_dados/lion.json; pro_dados/shadow_demon.json; constants_abilities.json (lion_impale, lion_finger_of_death, lion_voodoo); https://api.opendota.com/api/constants/aghs_desc

## Contra Shadow Shaman (shadow_shaman)
- placar: 67 vitórias em 142 jogos de pro (47,2%, leve desvantagem), fonte OpenDota /heroes/79/matchups.
- por que importa: terceiro maior em jogos de pro entre suportes da mesma posição (142) e o outro nuker de área int clássico do patch, rival histórico de arquétipo (controle em área vs controle em área).
- janelas: nível 6 (7-9 min) ele liga Mass Serpent Ward (cd 110-100s, 10 wards por 45s) pra zonear a lane inteira; Shackles (cd 14-11s, canalizado) prende por até 4,2s quem for pego; ele compra Blink aos 19,3min, um pouco antes do seu (23,9min), então entre os 19 e 24 min ele tem mais iniciativa.
- o que ele faz com você: Shackles te prende no lugar enquanto os Serpent Wards acertam de longe, um combo que seu 120 de HP não aguenta se não houver resposta.
- o que você faz com ele: Disruption nele cancela o canal de Shackles (banir interrompe canalização), negando o combo inteiro antes do drain acontecer; Shadow Poison a 1500 chega antes dele formar os wards perto de você.
- itens que viram: o Aghanim's Scepter dele aumenta o alcance de Shackles e permite usar em aliados e nos próprios wards dentro de 2000, então ele passa a te ameaçar de muito mais longe do que os 450 de alcance base.
- como jogar: guarde Disruption especificamente pro momento que ele começa a canalizar Shackles em você ou num aliado. Evite ficar parado perto de criep wave depois do nível 6 dele, é onde os Serpent Wards fazem mais dano.
- fonte: pro_dados/shadow_shaman.json; pro_dados/shadow_demon.json; constants_abilities.json (shadow_shaman_shackles, shadow_shaman_mass_serpent_ward, shadow_demon_disruption); https://api.opendota.com/api/constants/aghs_desc

## Contra Dazzle (dazzle)
- placar: 54 vitórias em 89 jogos de pro (60,7%), fonte OpenDota /heroes/79/matchups.
- por que importa: uma das maiores vantagens do herói com amostra relevante (89 jogos, acima do corte de 30), e também mesma posição principal de suporte (4/5), então entra duas vezes no critério.
- janelas: Dazzle não tem burst de kill, o jogo contra ele é de atrito: Shadow Wave (cd 10-7s) cura e dá poke em área toda lane; Shallow Grave (cd 30-18s, 4-5,5s de duração) impede a morte de um aliado, inclusive negando seu combo de kill se usado a tempo.
- o que ele faz com você: pouco dano direto em você, a ameaça real é ele salvar o alvo que você já gastou Shadow Poison e Purge pra matar.
- o que você faz com ele: Shadow Poison empilha dano que estoura depois do Shallow Grave acabar (a duração é só 4-5,5s, o veneno pode continuar contando), então o kill ainda sai se você esperar o grave cair; Demonic Purge não remove Shallow Grave (não é dispelável, constants_abilities.json: `dispellable: No` em `dazzle_shallow_grave`), não perca o combo tentando.
- itens que viram: o Aghanim's Scepter de Dazzle faz Shadow Wave ricochetear também em inimigos, dando a ele uma fonte de dano que não existia antes, preste atenção se ele comprar.
- como jogar: não gaste o combo inteiro no primeiro Shallow Grave, espere a duração acabar antes de confirmar a morte. Foque o carry protegido por ele em vez do próprio Dazzle.
- fonte: pro_dados/dazzle.json; pro_dados/shadow_demon.json; constants_abilities.json (dazzle_shallow_grave, dazzle_shadow_wave); https://api.opendota.com/api/constants/aghs_desc

## Contra Weaver (weaver)
- placar: 107 vitórias em 168 jogos de pro (63,7%), fonte OpenDota /heroes/79/matchups.
- por que importa: a maior vantagem do herói com amostra grande (168 jogos, 63,7%), mesmo sem dividir lane (Weaver é carry pos 1 no catálogo atual), exatamente o tipo de confronto entre dois heróis sem rota em comum que o pro play decide por mecânica, não por lane.
- janelas: Weaver farma muito rápido (gpm 558, lh10 44, o terceiro maior gpm dos 14 oponentes, atrás de Alchemist e Gyrocopter) e escala sozinho com Geminate Attack; ele não compra Blink nem Aghanim's Scepter no top14 de itens (pro_dados/weaver.json), prioriza Power Treads e itens de ataque, então sua rota de combate com ele costuma ser ele vindo até você depois de já ter vantagem de farm.
- o que ele faz com você: Shukuchi (cd 15-6s) te atravessa, causa dano e some, difícil de acompanhar com seu kit de alcance fixo.
- o que você faz com ele: Demonic Purge te garante o slow de 100% e o dano furando BKB bem na hora que ele tenta sair de Shukuchi, mas o próprio Shukuchi não é dispelável (`dispellable: No`, constants_abilities.json), então a visibilidade não volta com o Purge; conte com Shadow Poison de longo alcance pra acertar antes dele reiniciar o ataque.
- itens que viram: o Aghanim's Shard de Weaver marca quem ele atravessa no Shukuchi e aplica um Geminate Attack adicional depois, então um Weaver com shard faz mais dano no primeiro contato do que parece.
- como jogar: priorize Sentry perto de onde ele costuma rondar com Shukuchi. Gaste Demonic Purge assim que ele aparecer visível, não espere ele sumir de novo.
- fonte: pro_dados/weaver.json; pro_dados/shadow_demon.json; constants_abilities.json (weaver_shukuchi, weaver_geminate_attack, shadow_demon_demonic_purge); https://api.opendota.com/api/constants/aghs_desc

## Contra Gyrocopter (gyrocopter)
- placar: 115 vitórias em 190 jogos de pro (60,5%), fonte OpenDota /heroes/79/matchups; a dotacoach.gg também lista Gyrocopter como matchup bom pra você (+4,9% na contagem deles, fonte secundária).
- por que importa: terceira maior vantagem do herói com amostra grande (190 jogos, 60,5%, atrás de Weaver e Dazzle), outro carry sem lane fixa em comum (pos 1 no catálogo) que aparece demais em pro pra ficar de fora, o par certo pro exemplo que o dono citou (dois heróis sem lane, mas que se cruzam o jogo todo).
- janelas: Gyrocopter tem o segundo maior gpm dos 14 oponentes (643, atrás só do Alchemist com 768) e lh10 de 62, puro farm; a ameaça dele liga no nível 6 com Call Down (cd 90-60s, 3 mísseis aéreos sequenciais, até 500 de dano cada, que desaceleram, constants_abilities.json) e Flak Cannon (cd 26-20s) pra limpar onda e acertar área; ele não compra Blink no top14 de itens (pro_dados/gyrocopter.json), então até ele ter Boots of Travel ou algo parecido, sua mobilidade de Blink (23,9min) é maior que a dele.
- o que ele faz com você: Call Down cobre uma área grande e te pega mesmo fora de combate corpo a corpo, Flak Cannon acerta qualquer um perto dele em teamfight.
- o que você faz com ele: Demonic Purge fura BKB e desacelera 100%, ótimo pra travar ele no lugar antes do segundo míssil do Call Down cair; Shadow Poison empilhado estoura rápido nele porque Gyrocopter não tem fonte de regen alta pra sustentar o veneno.
- itens que viram: o Aghanim's Shard dele faz Homing Missile disparar junto com Rocket Barrage, dobrando o dano do combo à distância, mas isso não muda o 1x1 corpo a corpo onde seu Purge decide.
- como jogar: não fique parado dentro do raio do Call Down depois do nível 6. Aproveite a falta de mobilidade dele pra te posicionar e abrir com Shadow Poison antes dele reagir.
- fonte: pro_dados/gyrocopter.json; pro_dados/shadow_demon.json; constants_abilities.json (gyrocopter_call_down, gyrocopter_flak_cannon); https://dotacoach.gg/en/heroes/counters/shadow-demon

## Contra Alchemist (alchemist)
- placar: 20 vitórias em 52 jogos de pro (38,5%), fonte OpenDota /heroes/79/matchups; a maior desvantagem do herói com amostra acima de 30 jogos.
- por que importa: é exatamente o tipo de confronto que o dono pediu pra não ficar de fora: dois heróis sem lane fixa em comum (Alchemist é carry pos 1), mas com o pior número do Shadow Demon contra qualquer oponente da lista, o que só se enxerga olhando os dois pro_dados juntos, não o draft de lane.
- janelas: Alchemist tem o maior gpm e xpm dos 14 oponentes (768 gpm, 792 xpm, lh10 63, nível final 22), a diferença de farm já é brutal sozinha; ele liga Chemical Rage no nível 6 (cd 60s) e nunca mais para de farmar, com Radiance saindo em mediana de 13,9min (p25 12,9min, pro_dados/alchemist.json), bem cedo pra um item de 5350 de ouro.
- o que ele faz com você: a diferença de farm vira diferença de item tão rápido que seus disables não compensam o gold lead; Unstable Concoction (cd 17s, até 3,2s de stun) te atordoa à queima-roupa se você chegar perto pra tentar o combo.
- o que você faz com ele: Demonic Purge dissipa Chemical Rage (é Basic Dispel, constants_abilities.json: "DISPEL TYPE: Basic Dispel" em `alchemist_chemical_rage`), tirando o attack speed e o regen dele bem na troca, e ainda fura BKB se ele tiver.
- itens que viram: o Aghanim's Shard de Alchemist (Berserk Potion) dá a um aliado attack speed, movimento, regen e um basic dispel de brinde, ou seja, ele consegue limpar seu próprio Demonic Purge de um aliado puxando esse item, fique de olho se ele estiver comprando.
- como jogar: não tente vencer pelo farm, vença pela janela de nível 6 a 15 min antes do Radiance dele estabilizar o jogo. Gaste Demonic Purge assim que ele ligar Chemical Rage, não espere o pico do buff.
- fonte: pro_dados/alchemist.json; pro_dados/shadow_demon.json; constants_abilities.json (alchemist_chemical_rage, alchemist_unstable_concoction, shadow_demon_demonic_purge); https://api.opendota.com/api/constants/aghs_desc

## Contra Zeus (zuus)
- placar: 23 vitórias em 55 jogos de pro (41,8%), fonte OpenDota /heroes/79/matchups; segunda maior desvantagem do herói com amostra acima de 30 jogos.
- por que importa: mid clássico sem lane em comum com um suporte 4/5, mas segunda pior desvantagem do Shadow Demon na lista inteira, outro caso de confronto que só aparece olhando os dois pro_dados juntos.
- janelas: Zeus farma rápido pra mid (gpm 429, xpm 586, lh10 27) e escala puro dano mágico; Lightning Bolt (cd 6s fixo, 140-380 de dano) é barato e constante, machuca seu 120 de HP em poucas trocas; a partir do nível 6 Thundergod's Wrath (cd 130s, 300-650 de dano global) ameaça mesmo quando você está fora de visão.
- o que ele faz com você: Static Field (passivo) soma 3,45% do seu HP atual a cada ataque ou spell que ele acerta em você, então qualquer troca prolongada já sangra uma fatia extra; Lightning Bolt dá true sight, cancelando seu Shukuchi-like de fuga via fog.
- o que você faz com ele: seu Shadow Poison empilha e estoura rápido, Zeus não tem forma de reduzir dano mágico no kit base; Demonic Purge fura BKB e ainda desacelera, importante porque ele não tem gap closer, se você sobreviver ao poke inicial, ele não te alcança de volta.
- itens que viram: o Aghanim's Shard de Zeus (Lightning Hands) dá bônus de attack speed com raios em cada ataque, aumentando o dano sustentado dele em lane; o Scepter cria uma nuvem que conjura Lightning Bolt sozinha, perigoso se você ficar parado perto da área marcada.
- como jogar: evite ficar no alcance de visão dele, Lightning Bolt dá true sight e cancela qualquer jogada no fog. Jogue pra matar ele rápido se conseguir fechar a distância, ele não tem fuga própria.
- fonte: pro_dados/zuus.json; pro_dados/shadow_demon.json; constants_abilities.json (zuus_lightning_bolt, zuus_static_field, zuus_thundergods_wrath); https://api.opendota.com/api/constants/aghs_desc
