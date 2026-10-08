---
id: confrontos-zuus
heroi: Zeus
patch: 7.41
fontes:
- pro_dados/zuus.json
- pro_dados/nevermore.json
- pro_dados/rubick.json
- pro_dados/ogre_magi.json
- pro_dados/snapfire.json
- pro_dados/crystal_maiden.json
- pro_dados/lion.json
- pro_dados/queenofpain.json
- pro_dados/invoker.json
- pro_dados/storm_spirit.json
- pro_dados/winter_wyvern.json
- pro_dados/faceless_void.json
- pro_dados/viper.json
- pro_dados/enchantress.json
- pro_dados/skeleton_king.json
- pro_dados/void_spirit.json
- constants_abilities.json
- constants_hero_abilities.json
- heroes.json
- herois_catalogo.json
- https://api.opendota.com/api/constants/aghs_desc
---

Zeus em pro (7.40+7.41): 1162 jogos, 429 gpm, 586 xpm, 27 lh10, nível final médio 18 (fonte: pro_dados/zuus.json). Build padrão: Boots aos 5.2 min, Arcane Boots aos 9.7, Aghanim's Shard aos 16.1 (vira Lightning Hands, ataque com bônus de velocidade e Arc Lightning no hit), Aghanim's Scepter aos 23.3 (vira Nimbus, a nuvem que casta Lightning Bolt automático). Nenhuma spell do Zeus atravessa Black King Bar: Arc Lightning, Lightning Bolt, Heavenly Jump, Nimbus, Lightning Hands, Thundergod's Wrath e Static Field têm todas `bkbpierce: No` (fonte: constants_abilities.json).

Os 15 oponentes abaixo cobrem os 6 com mais jogos de pro contra o Zeus, os heróis de mid que mais aparecem contra ele em pro, os 3 matchups de maior desvantagem e os 3 de maior vantagem (todos com 30+ jogos), e dois carries clássicos (Faceless Void e Wraith King) que decidem fight junto com ele mesmo sem nunca compartilhar lane.

## Contra Shadow Fiend (nevermore)
- placar: 123/263 vitórias do Zeus contra Shadow Fiend em pro, 46,8% (Shadow Fiend vence 53,2%). Fonte: pro_dados/zuus.json, confrontos.
- por que importa: mesma lane, o duelo de mid mais jogado contra o Zeus em pro (263 jogos).
- janelas: até 10 min o SF farma muito mais rápido na lane (lh10 78 contra 27 do Zeus, que não disputa last hit) usando Shadowraze pra csar; 10-16 min ele pressiona com Mask of Madness (10,2); 16-18 o Zeus pega Aghanim's Shard (16,1) e equilibra o trade de dano; depois dos 20 o SF vira Hurricane Pike via Dragon Lance (14,0) e kita de longe, enquanto o Zeus pega Scepter (23,3) pra empurrar lane com Nimbus.
- o que ele faz com você: 3 Shadowrazes em sequência (9s de CD cada, 85-280 de dano base crescendo com as almas de Necromastery) deletam seu HP baixo rápido; Presence of the Dark Lord reduz sua armadura em área e atravessa BKB.
- o que você faz com ele: Lightning Bolt (mini stun de 0,35s, 140-380 de dano) interrompe o combo ou canal de Requiem; Thundergod's Wrath acerta o SF em qualquer lugar do mapa.
- itens que viram: seu Aghanim's Shard ajuda a vencer a troca de farm; o BKB dele apaga seu kit inteiro (nenhuma spell sua tem bkbpierce), então depois que ele fecha BKB o 1x1 vira só auto-attack.
- como jogar: gaste a mana dele forçando raze, não fique alinhado pra levar 2-3 seguidas; corte o combo de Mask of Madness com Lightning Bolt; depois dos 20 min, se ele tiver BKB, jogue pela visão em vez de nuke direto.
- fonte: pro_dados/zuus.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1-3, nevermore_dark_lord, zuus_lightning_bolt, zuus_thundergods_wrath).

## Contra Rubick (rubick)
- placar: 129/260, 49,6% (Rubick vence 50,4%). Fonte: pro_dados/zuus.json.
- por que importa: suporte mais jogado contra o Zeus em pro (260 jogos) e o contra mais perigoso pro kit dele: Spell Steal rouba a última spell que o Zeus lançou.
- janelas: Rubick não disputa lane direta (pos 4/5), farma wards até os 15-20 min; depois do Blink (21,6) passa a flanquear pra roubar spell. O momento crítico é sempre que o Zeus lança algo visível perto dele.
- o que ele faz com você: Spell Steal (ignora BKB) rouba literalmente a última spell do Zeus, inclusive Thundergod's Wrath, pagando só 25 de mana pra copiar; Telekinesis (0,9-1,5s de stun) trava o Zeus pro combo do time.
- o que você faz com ele: disciplina de cast é a resposta, não roubo; Static Field (3,45% do HP atual por ataque/spell) machuca o Rubick mesmo sem dano direto.
- itens que viram: nenhum item seu desarma o Spell Steal; o jeito é timing, gastar o ult antes de engajar perto dele ou forçá-lo a roubar outra coisa primeiro.
- como jogar: trate toda spell como pública quando o Rubick estiver vivo e visível por perto; puna ele quando avançar pra roubar, ele é muito mais frágil que você na troca direta.
- fonte: pro_dados/zuus.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis).

## Contra Ogre Magi (ogre_magi)
- placar: 93/222, 41,9% (Ogre Magi vence 58,1%). Fonte: pro_dados/zuus.json.
- por que importa: 3º oponente mais jogado contra o Zeus em pro (222 jogos), apesar de nunca compartilhar lane: o combo clássico de stun em teamfight.
- janelas: Ogre não tem spike de farm (gpm 315, lh10 8), seu poder é todo em nível de habilidade. A partir do 10-12 (Arcane Boots 11,2) ele vira um stunlock quase infinito em quem não tem magic resistance, e o Zeus não tem nenhuma forma própria de dispel.
- o que ele faz com você: Fireblast (1,2s de stun fixo, dano de 70 a 250) te segura pro combo do time; Multicast pode disparar 2-3x o Fireblast de uma vez, chance crescente com a força dele.
- o que você faz com ele: Lightning Bolt e Arc Lightning punem o Ogre se ele avançar sem suporte, ele tem pouco HP pra um pos4/5; Thundergod's Wrath não dá chance de escape via blink ou TP.
- itens que viram: o Aghanim's Shard dele (Fire Shield) absorve dano físico, não ajuda contra seu burst mágico; Force Staff ou Glimmer Cape no seu lado ajudam a saltar fora do range do Fireblast antes dele conectar.
- como jogar: jogue a lane focado em XP e farm de camp, ele não vai disputar; em teamfight, se ele gastar o stun em outro aliado, essa é sua janela pra queimar o ult nele.
- fonte: pro_dados/zuus.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_multicast).

## Contra Snapfire (snapfire)
- placar: 83/189, 43,9% (Snapfire vence 56,1%). Fonte: pro_dados/zuus.json.
- por que importa: 4º em jogos contra o Zeus em pro (189), suporte de zoneamento comum na mesma composição de nukers.
- janelas: Snapfire pega Aghanim's Shard cedo (16,9 mediana) pra turbinar Firesnap Cookie com Mortimer Kisses; o pico dela é o ult (CD 100-120s), globs de 180 a 360 de dano em área que precisam ser dodgados manualmente.
- o que ele faz com você: Scatterblast (100-280 de dano em cone + slow de 100% de attack speed por 1s) trava seu posicionamento pro combo; Lil' Shredder reduz sua armadura em stacks, facilitando o resto do time fechar o burst.
- o que você faz com ele: Lightning Bolt interrompe o cast dela se acertar o mini stun antes do Firesnap Cookie saltar; Static Field também machuca o Mortimer (a criatura), então seu Arc Lightning em área limpa os dois juntos.
- itens que viram: o Aghanim's Shard dela (Mortimer Kiss extra no Firesnap Cookie, fonte aghs_desc) aumenta muito o dano combado; nenhuma das spells dela ou do Mortimer Kisses tem bkbpierce, então BKB cedo no seu time tira o combo do caminho.
- como jogar: não fique parado no alcance do cone dela esperando trade; force ela a gastar o Firesnap Cookie errado posicionando longe dos aliados antes do fight.
- fonte: pro_dados/zuus.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_lil_shredder); aghs_desc (OpenDota).

## Contra Crystal Maiden (crystal_maiden)
- placar: 76/160, 47,5% (Crystal Maiden vence 52,5%). Fonte: pro_dados/zuus.json.
- por que importa: 5º mais jogado contra o Zeus (160 jogos), suporte clássico que compete por presença de área com slow e disable.
- janelas: CM pega Tranquil Boots cedo (8,4) pra sobreviver; o pico dela é o ult Freezing Field (channel de 10s, até 250 de dano por explosão em 810 de raio). Depois dos 17-18 min pega Aghanim's Shard (17,7), que dá Crystal Clone pra confundir posicionamento.
- o que ele faz com você: Frostbite prende e impede movimento/ataque por até 3s com dano por segundo, cancelando qualquer cast seu se você estiver parado no range; Freezing Field sem interrupção te mata de longe.
- o que você faz com ele: Lightning Bolt interrompe o channel do Freezing Field na hora (mini stun quebra canalização); Thundergod's Wrath ignora a Crystal Clone (não é herói de verdade) e acerta a CM direto.
- itens que viram: o Aghanim's Shard dela é só evasão de posicionamento, não aumenta dano; do seu lado, interromper canal vale mais que dano puro contra ela, e seu próprio Lightning Bolt já cumpre esse papel.
- como jogar: puna toda tentativa de canalizar Freezing Field sem proteção, um Lightning Bolt cancela o ult e ainda causa dano cheio; fora disso ela não ameaça seu HP no 1x1.
- fonte: pro_dados/zuus.json; pro_dados/crystal_maiden.json; constants_abilities.json (crystal_maiden_frostbite, crystal_maiden_freezing_field).

## Contra Lion (lion)
- placar: 81/151, 53,6% (Lion vence 46,4%, o Zeus é levemente favorito). Fonte: pro_dados/zuus.json.
- por que importa: 6º mais jogado contra o Zeus (151 jogos) e o maior disable single-target contra ele, sem spell que responda de dentro do Hex.
- janelas: o pico do Lion é cedo e simples: Earth Spike (stun de 1,3 a 2,2s) into Hex (desliga tudo por até 3,2s) into Finger of Death (600 a 850 de dano fixo) já mata um Zeus sem Shard. Depois dos 20 min, se ele não fechar o kill, o Zeus com Shard (16,1) e Scepter (23,3) farma e empurra lane mais rápido, já que o Lion não tem spike de item (gpm 286).
- o que ele faz com você: Hex desliga sua kit inteira pelo tempo necessário pro Finger of Death fechar; To Hell and Back dá 20% de amplificação de magia pro Lion por 90s depois de ressuscitar ou pegar kill/assist, deixando sequências de morte ainda piores.
- o que você faz com ele: seu alcance de Lightning Bolt (700-850) é maior que o Earth Spike dele sem bônus, então você pune o engajamento se reagir rápido; Thundergod's Wrath mata ele de longe se ele gastar Blink sem mana pra fugir.
- itens que viram: Linken's Sphere bloqueia o Hex automaticamente (é single target), sendo a resposta mais direta; o Aghanim's Shard do Lion (Mana Drain em 2 alvos extras + imunidade a debuff e resistência mágica no canal, fonte aghs_desc) não muda o combo de kill, só ajuda ele a sustar mana em lane longa.
- como jogar: trate o Lion como prioridade de kill sempre que ele errar o combo sem Blink e sem mana; considere Linken's Sphere se ele estiver fechando o jogo sozinho com Hex into Finger of Death.
- fonte: pro_dados/zuus.json; pro_dados/lion.json; constants_abilities.json (lion_voodoo, lion_finger_of_death, lion_to_hell_and_back); aghs_desc (OpenDota).

## Contra Queen of Pain (queenofpain)
- placar: 55/124, 44,4% (Queen of Pain vence 55,6%). Fonte: pro_dados/zuus.json.
- por que importa: mesma função (mid, nuker de inteligência), o 2º duelo de mid mais comum contra o Zeus em pro depois do Shadow Fiend.
- janelas: ela tem Blink desde o nível 1 (CD 6-12s), então engaja e sai antes do combo terminar. Até os 10 min a troca de spell é parelha; aos 13-15 ela fecha Kaya (13,9) pro burst, quase junto do Shard do Zeus (16,1); depois dos 20, Ultimate Scepter dela (23,5, Shadow Strike em área) e Scepter do Zeus (23,3, Nimbus) chegam quase no mesmo minuto.
- o que ele faz com você: Blink seguido de Scream of Pain (até 345 de dano em área) pega você perto de creeps; Shadow Strike (slow de até 55% por 16s) impede fuga depois do combo.
- o que você faz com ele: Lightning Bolt interrompe ela no meio do blink-in se você reagir rápido; Static Field passivo (3,45% do HP atual por ataque) machuca uma mid de HP baixo como ela a cada troca.
- itens que viram: o Aghanim's Shard dela (silence de 1,75s nos pontos de origem e destino do Blink, fonte aghs_desc) desliga seu combo se você estiver no raio quando ela blinka; seu próprio Aghanim's Shard ajuda a vencer a troca de farm quando ela não tem mana pra spamar spell.
- como jogar: depois que ela tiver o Shard, não fique parado perto da lane confirmando cast, o silence do blink pune isso; puna o cooldown do Blink dela (6-12s) com pressão de Arc Lightning na wave.
- fonte: pro_dados/zuus.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_blink, queenofpain_scream_of_pain); aghs_desc (OpenDota).

## Contra Invoker (invoker)
- placar: 53/108, 49,1% (Invoker vence 50,9%). Fonte: pro_dados/zuus.json.
- por que importa: mesma posição (mid) e um dos combos de burst mais temidos do jogo quando ele chega no nível certo de orbs (108 jogos contra o Zeus em pro).
- janelas: o pico do Invoker não é por item, é por orbs. Com Exort alto (nível 10) e Sun Strike (175 a 675 de dano) ele burst de longe sem estar visível na lane. Ele fecha Null Talisman (2,4) e Blade of Alacrity (19,3) rápido, mas o spike real é a troca pra Quas-Exort no nível 6-7 pro combo Cold Snap + Sun Strike.
- o que ele faz com você: Sun Strike (ignora BKB, até 675 de dano em área) te mata de qualquer ponto do mapa sem aviso; Cold Snap trava você em freezes repetidos enquanto o time dele fecha.
- o que você faz com ele: seu CD de Arc Lightning (1,6s) é muito menor que o das spells grandes do Invoker (Sun Strike 23s, Chaos Meteor 50s, Tornado 27s), então na troca prolongada de poke você vence pela frequência; Thundergod's Wrath acerta ele mesmo invisível no Ghost Walk.
- itens que viram: o Aghanim's Shard do Invoker (Sun Strike cria Forge Spirit se acertar herói, fonte aghs_desc) dá sustain extra de criatura; seu Shard (Lightning Hands) ajuda pouco aqui porque o duelo é todo de spell, não de ataque básico.
- como jogar: respeite o alcance global do Sun Strike, não fique parado num ponto previsível depois do nível 6 dele; gaste Arc Lightning nos creeps da lane dele pra negar farm de orb, ele precisa de nível pra ter Exort alto.
- fonte: pro_dados/zuus.json; pro_dados/invoker.json; constants_abilities.json (invoker_sun_strike, invoker_cold_snap); aghs_desc (OpenDota).

## Contra Storm Spirit (storm_spirit)
- placar: 44/90, 48,9% (Storm Spirit vence 51,1%, o duelo mais parelho da lista). Fonte: pro_dados/zuus.json.
- por que importa: mesma posição (mid), nukers de range contra mobilidade, 90 jogos em pro.
- janelas: Storm Spirit soul-farma com Kaya (13,7) e Soul Ring (6,1) pra sustentar o custo de mana do Ball Lightning. Nos primeiros 10 min troca Static Remnant + ataque com Overload; depois dos 13-15 (rumo a Kaya and Sange aos 20) vira bola de mana cruzando o mapa pra ganks. O Zeus não tem gap closer, então perde presença de mapa quando ele sai da lane, até o Scepter (23,3) dar Nimbus pra empurrar sem precisar estar lá.
- o que ele faz com você: Electric Vortex puxa você pra cima dele, e Overload (slow de 80% de movimento e 90 de attack speed por 0,8s) trava o posicionamento pro ataque dele; Ball Lightning permite fugir ou reengajar sem gastar spell de dano direto.
- o que você faz com ele: Lightning Bolt tem mais alcance (700-850) que o Electric Vortex dele, então você pune antes dele chegar perto; Thundergod's Wrath não depende dele estar visível, cobre toda a mobilidade dele.
- itens que viram: o Aghanim's Shard dele (cargas de Overload pro time, fonte aghs_desc) ajuda ele e aliados a ganksem junto; BKB num suporte do seu time corta o Electric Vortex dele, já que a spell não atravessa imunidade mágica.
- como jogar: evite ficar sozinho em lane sem visão de Ball Lightning chegando, ele ganka rápido depois dos 10 min; no 1x1 direto, seu alcance de Lightning Bolt vence o Electric Vortex se você castar primeiro.
- fonte: pro_dados/zuus.json; pro_dados/storm_spirit.json; constants_abilities.json (storm_spirit_electric_vortex, storm_spirit_overload, storm_spirit_ball_lightning); aghs_desc (OpenDota).

## Contra Winter Wyvern (winter_wyvern)
- placar: 29/42, 69,0% (Winter Wyvern vence só 31,0%, o melhor matchup da lista para o Zeus). Fonte: pro_dados/zuus.json.
- por que importa: maior vantagem entre os oponentes com 30+ jogos, mesmo ela tendo a ferramenta mais direta do jogo pra matar um herói de HP baixo como o Zeus.
- janelas: Winter Wyvern não compete em farm (gpm 307, lh10 7), seu pico é todo em nível do ult: a partir do 6, toda vez que Winter's Curse estiver disponível (CD de 80 a 100s), qualquer fight perto dela é fatal pro Zeus.
- o que ele faz com você: Winter's Curse (raio 525, atravessa BKB) te prende, te torna imune a todo dano que não seja do time dela, e força os inimigos próximos a atacar você com velocidade de ataque bônus de 50 a 80: é execução garantida se o time dela estiver junto, e o HP baixo do Zeus não aguenta nem a duração mínima de 2s, muito menos até 6s com heróis extras perto.
- o que você faz com ele: a única resposta real é nunca ficar perto de aliados quando o ult dela estiver pronto; Thundergod's Wrath segue útil no resto do time dela fora da curse.
- itens que viram: nem Aghanim's Shard nem Scepter dela mudam a curse (melhoram Cold Embrace e Arctic Burn, fonte aghs_desc); Linken's Sphere não ajuda porque Winter's Curse é em área, não single target. A defesa real é BKB ativo antes da curse cair.
- como jogar: trate o cooldown do ult dela como relógio, depois de uma curse usada você tem essa janela livre; evite ficar perto de aliados em fight quando o ult dela estiver disponível, ela escolhe você primeiro.
- fonte: pro_dados/zuus.json (42 jogos); pro_dados/winter_wyvern.json; constants_abilities.json (winter_wyvern_winters_curse); aghs_desc (OpenDota).

## Contra Faceless Void (faceless_void)
- placar: 24/38, 63,2% (Faceless Void vence 36,8%). Fonte: pro_dados/zuus.json.
- por que importa: 2ª maior vantagem com 30+ jogos; não compartilha lane (Void é carry safelane, Zeus é mid), mas Chronosphere mais Black King Bar é o pesadelo clássico de qualquer nuker sem escape, e é por isso que o pro play pega o Void nessas composições.
- janelas: o pico do Void não é tanto de item aqui (sem Battle Fury ou Butterfly aparecendo no topo, mais Maelstrom e itens de attack speed), é de nível: Chronosphere no 6 já troca fight. Até os 15-18 min o Zeus pode tentar vencer pela farm de XP/kill solo, mas depois que o Void fecha Black King Bar (padrão no herói mesmo sem aparecer no top itens listados), toda spell do Zeus para de funcionar nele.
- o que ele faz com você: Chronosphere (raio 500, 3,75 a 4,75s) trava o time junto pra confirmar o kill, e BKB zera seu kit inteiro nele (nenhuma spell sua tem bkbpierce); Time Lock ainda rouba trades de auto-attack.
- o que você faz com ele: force o combate antes dele fechar BKB, seu dano de nuke cedo (Arc Lightning + Lightning Bolt passam de 300 em poucos segundos) é boa parte do HP dele nas fases iniciais; depois do BKB, sua contribuição em fight é Thundergod's Wrath nos outros 4, porque nele não faz nada.
- itens que viram: BKB do Void anula literalmente tudo que você tem, e não existe item seu que ignore isso. A resposta é de time: iniciar antes do BKB estar pronto ou focar os outros 4 quando ele chronar.
- como jogar: pressione o jogo antes dos 20-25 min, quando o Void ainda não tem Black King Bar pronto; depois disso, trate Chronosphere como sinal pra focar fora dele, seu ult ainda mata o resto do time dentro da esfera.
- fonte: pro_dados/zuus.json (38 jogos); pro_dados/faceless_void.json; constants_abilities.json (faceless_void_chronosphere, zuus abilities bkbpierce).

## Contra Viper (viper)
- placar: 29/46, 63,0% (Viper vence 37,0%). Fonte: pro_dados/zuus.json.
- por que importa: 3ª maior vantagem com 30+ jogos; Viper é um dos poucos carries/mid com ataque à distância que pune a troca de poke sem precisar fechar item.
- janelas: Viper também joga mid em parte dos jogos (posições 2/3 no catálogo). Poison Attack (autocast, stack até 6x) já pressiona desde o nível 1 sem gastar mana relevante. O pico dele chega com Aghanim's Scepter (18,2 mediana, desbloqueia Nosedive) e itens de alcance como Dragon Lance (15,6), quando ele passa a aplicar o combo de área de longe.
- o que ele faz com você: Poison Attack empilha slow de movimento e reduz resistência mágica a cada stack, mas Nethertoxin (dano crescente em área, até 125 dps no pico) é o que te mantém preso enquanto ele kita; Viper Strike desliga seus passivos por 6s.
- o que você faz com ele: Arc Lightning em área limpa o stack de Poison Attack que ele aplicou nos creeps; Lightning Bolt interrompe o posicionamento dele se ele tentar Nosedive (depende do Scepter, CD de 20s) pra reaplicar Corrosive Skin em área.
- itens que viram: o Aghanim's Scepter do Viper (Nosedive, fonte aghs_desc) aumenta o alcance de pressão dele em teamfight; do seu lado, o que importa mais é não ficar dentro do raio de Nethertoxin (400) por muito tempo.
- como jogar: na troca de poke, não aceite ficar no range de ataque dele sem resposta, Poison Attack empilha de graça; use Thundergod's Wrath pra punir o farm dele de longe sem se expor ao Nethertoxin.
- fonte: pro_dados/zuus.json (46 jogos); pro_dados/viper.json; constants_abilities.json (viper_poison_attack, viper_nethertoxin, viper_viper_strike); aghs_desc (OpenDota).

## Contra Enchantress (enchantress)
- placar: 9/31, 29,0% (Enchantress vence 71,0%, o pior matchup da lista para o Zeus). Fonte: pro_dados/zuus.json.
- por que importa: maior desvantagem entre os oponentes com 30+ jogos, mesmo sendo suporte sem disable duro (só um slow/dispel de 3,5s), o oposto do Lion ou da Crystal Maiden que desligam o Zeus de verdade.
- janelas: Enchantress farma neutro cedo com Enchant, mas sem HP alto nem disable duro ela não tem janela de confronto direto contra um nuker de range. O pico dela é em controle de mapa com Little Friends (via Scepter), não em 1x1.
- o que ele faz com você: Enchant (slow de movimento até 60%, dispel básico) te atrasa mas não te prende; Untouchable só importa se você estiver trocando ataque básico, raramente o seu plano.
- o que você faz com ele: Lightning Bolt (até 380 de dano + mini stun) já é mais da metade do HP dela nas fases iniciais; Static Field some com o HP dela rápido se ela tentar sustar perto de você.
- itens que viram: o Aghanim's Shard dela (Sproink, dash de fuga + 2 ataques de Impetus) é defesa, não ataque, então não muda o resultado do combo; nenhum item especial é necessário do seu lado, o duelo já é favorável pelo kit puro.
- como jogar: pressione a lane dela sem medo de punição dura, o pior que ela faz é atrasar com o slow do Enchant; gaste spell nela sempre que tentar roubar neutro perto de você.
- fonte: pro_dados/zuus.json (31 jogos); pro_dados/enchantress.json; constants_abilities.json (enchantress_enchant, enchantress_untouchable).

## Contra Wraith King (skeleton_king)
- placar: 18/59, 30,5% (Wraith King vence 69,5%). Fonte: pro_dados/zuus.json.
- por que importa: um dos carries mais jogados contra o Zeus em pro mesmo sem lane em comum (59 jogos), o clássico "dois hc que nunca se cruzam na lane mas decidem fight junto".
- janelas: Wraith King é carry puro de right click com Reincarnation como seguro de vida, sem burst de spell. Fecha Phase Boots (6,3) rápido e depois itens de sustain, com Radiance aparecendo no top (16,3 mediana) como opção de farm/anti-kite. Até ele ter Black King Bar ou resistência mágica, o burst de spell do Zeus (Arc Lightning + Lightning Bolt) sozinho já ameaça o HP dele, já que o WK não tem disable pra interromper primeiro.
- o que ele faz com você: Wraithfire Blast (stun de 1 a 1,6s + slow) é o único jeito dele te prender; Reincarnation deixa ele "imortal" uma vez por fight, então o burst do Zeus precisa ser o segundo kill, não o primeiro, pra realmente tirar ele do jogo.
- o que você faz com ele: Thundergod's Wrath ignora Reincarnation (ele volta com HP baixo e o ult recarrega rápido o bastante pra fechar); Static Field desgasta ele a cada ataque que leva do seu time.
- itens que viram: o Aghanim's Shard do Wraith King (maldição de dano puro atrasado no Mortal Strike, fonte aghs_desc) aumenta o DPS dele em troca prolongada; do seu lado, Lightning Bolt interrompe o Wraithfire Blast se você reagir no cast, cortando a única forma dele de te prender.
- como jogar: evite trocar auto-attack parado com ele depois que tiver itens de sustain, seu papel é nuke de burst, não troca prolongada; gaste Thundergod's Wrath pra garantir que ele não volta vivo da Reincarnation.
- fonte: pro_dados/zuus.json (59 jogos); pro_dados/skeleton_king.json; constants_abilities.json (skeleton_king_hellfire_blast, skeleton_king_reincarnation); aghs_desc (OpenDota).

## Contra Void Spirit (void_spirit)
- placar: 19/61, 31,1% (Void Spirit vence 68,9%). Fonte: pro_dados/zuus.json.
- por que importa: mesma posição (mid) e também entre as maiores desvantagens do Zeus (61 jogos): o contraste é mobilidade e burst misto contra alcance puro de poke.
- janelas: Void Spirit fecha itens de burst rápido (Blade of Alacrity 23,6, Diadem 11,0) e o spike real é o nível 6-7, com Astral Step pra reposicionar e Aether Remnant pra puxar. O Aghanim's Shard dele (17,0 mediana) dá um segundo remnant, aumentando a chance de acertar o combo. O Zeus vence a troca de poke antes disso porque Arc Lightning e Lightning Bolt têm alcance maior que o Resonant Pulse dele (raio de 500 ao redor do próprio corpo).
- o que ele faz com você: Aether Remnant puxa você pra um ponto fixo, e Astral Step (ataque com marca que desacelera até 80% e detona) fecha o combo, mas precisa acertar os dois em sequência contra o seu alcance maior; Resonant Pulse absorve dano físico, não ajuda contra seus nukes mágicos.
- o que você faz com ele: Lightning Bolt tem alcance maior (700-850) que o raio do Resonant Pulse e do que ele precisa pro Aether Remnant puxar, então você pune o engajamento primeiro; Thundergod's Wrath ignora o Dissimilate (fade/invisibilidade) dele.
- itens que viram: o Aghanim's Scepter do Void Spirit (silence no Resonant Pulse, fonte aghs_desc) é a única coisa que desliga você de verdade no 1x1; depois que ele tiver isso (25,1 mediana) o duelo fica mais parelho, antes disso seu alcance puro já define a troca.
- como jogar: vença a troca de poke antes do nível 6-7 dele usando seu alcance maior; depois do Scepter dele, respeite o silence do Resonant Pulse e não fique perto o bastante pro combo físico fechar.
- fonte: pro_dados/zuus.json (61 jogos); pro_dados/void_spirit.json; constants_abilities.json (void_spirit_aether_remnant, void_spirit_astral_step, void_spirit_resonant_pulse); aghs_desc (OpenDota).
