---
id: confrontos-chaos_knight
heroi: Chaos Knight
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/chaos_knight.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- dota-hub-conteudo-novo/pro_dados/luna.json
- dota-hub-conteudo-novo/pro_dados/pudge.json
- dota-hub-conteudo-novo/pro_dados/skywrath_mage.json
- dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- dota-hub-conteudo-novo/pro_dados/skeleton_king.json
- dota-hub-conteudo-novo/pro_dados/life_stealer.json
- dota-hub-conteudo-novo/pro_dados/lich.json
- dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- dota-hub-conteudo-novo/pro_dados/techies.json
- dota-hub-conteudo-novo/pro_dados/mars.json
- dota-hub-conteudo-novo/pro_dados/morphling.json
- dota-hub-conteudo-novo/pro_dados/terrorblade.json
- dota-hub-conteudo-novo/pro_dados/faceless_void.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Como escolhi os confrontos

Chaos Knight é quase sempre pos 1, às vezes pos 2 (6 das 7 partidas pro de 7.41 no Atlas Tier1 foram pos 1, partidas pro 7.40-7.41 via OpenDota). A lista mistura quatro critérios: os 6 heróis com mais jogos contra ele em pro (Rubick, Shadow Fiend, Ogre Magi, Luna, Pudge, Skywrath Mage), os outros carries de mesma função que mais aparecem em pro além da Luna (Dragon Knight, Wraith King, Lifestealer), os maiores contrastes de taxa de vitória com amostra de 30+ jogos pra cada lado (Lich e Templar Assassin favorecem o CK; Techies e Mars favorecem o oponente) e os hard carries mais jogados em pro mesmo sem lane em comum com o CK: Morphling, Terrorblade e Faceless Void quase nunca disputam a safelane com ele (cada time normalmente só tem um pos 1), mas são justamente o tipo de confronto que decide o jogo tarde, dois hypercarries cujo power spike relativo importa mais do que qualquer troca de lane. É o mesmo padrão de Alchemist contra Morphling: carries que raramente se enfrentam cedo, mas cujo 1x1 de poder no late é o que de fato manda no resultado.

## Contra Rubick (rubick)

- placar: Chaos Knight venceu 68 de 150 partidas pro, 45,3% (OpenDota matchups via pro_dados/chaos_knight.json).
- por que importa: é o oponente que mais jogou contra CK no banco pro, suporte clássico cuja ultimate rouba literalmente o Chaos Bolt ou o Reality Rift que o CK acabou de lançar.
- janelas: até os 11 min, CK já sustenta a lane com Helm of Iron Will (mediana 8,8 min, 538 jogos) enquanto Rubick ainda está pingando Fade Bolt sem Arcane Boots (10,3 min). Entre 17 e 22 min os dois correm pro Blink quase junto, Rubick aos 21,6 min contra 21,2 do CK, uma diferença de meio minuto só. Depois disso, o jogo é decidido por quem consegue se posicionar sem entregar o combo pro Spell Steal.
- o que ele faz com você: Spell Steal copia o último feitiço que o CK lançou perto dele, então um Chaos Bolt ou Reality Rift gasto à toa vira arma do time adversário por alguns minutos; Telekinesis (sem precisar de shard) joga o CK pro alto e o derruba com estardalhaço, interrompendo qualquer tentativa de reposicionar as ilusões do Phantasm.
- o que você faz com ele: Rubick é frágil e sem disjoint além do próprio Blink Dagger dele; uma vez que o Reality Rift puxa ele pra perto, os críticos do Chaos Strike resolvem rápido, já que ele não tem HP pra aguentar a troca.
- itens que viram: nenhum item do CK anula o Spell Steal diretamente, a resposta é de posicionamento: não gastar o combo perto da visão do Rubick quando ele está com mana cheia e sem compromisso.
- como jogar: evite lançar Chaos Bolt ou Reality Rift na cara do Rubick fora de uma luta de verdade, force ele a gastar Telekinesis primeiro. Em grupo, foque ele cedo, é o alvo mais fácil de matar da composição adversária.
- fonte: pro_dados/chaos_knight.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis, chaos_knight_reality_rift).

## Contra Shadow Fiend (nevermore)

- placar: Chaos Knight venceu 51 de 107 partidas pro, 47,7%.
- por que importa: segundo oponente com mais jogos no banco pro, mid clássico que sai na frente de farm cedo (78 LH aos 10 min contra 55 do CK) e cujo burst ameaça o CK antes dele ficar tanque.
- janelas: até os 10 min, Shadow Fiend já está bem à frente em last hit; o Helm of Iron Will do CK (8,8 min) segura a poke de Shadowraze nessa fase. Entre 10 e 14 min, ele monta Mask of Madness (10,2 min) e Dragon Lance (14,0 min), janela de maior perigo pro CK antes do Armlet (11,7) estabilizar de verdade. O Blink do CK (21,2) chega antes do Black King Bar do Shadow Fiend (25,2), dando uma margem de uns 4 minutos pra iniciar com o stun ainda funcionando.
- o que ele faz com você: Shadowraze bate instantaneamente em área na frente dele e empilha um amplificador de dano que aumenta cada raze seguinte, perigoso se o CK fica parado perto de árvore ou creep; Requiem of Souls em cima de um grupo de ilusões do Phantasm aplica medo e reduz resistência mágica em todo mundo que acertar, podendo espalhar o engajamento do CK.
- o que você faz com ele: Shadow Fiend não tem disjoint real; Reality Rift o puxa sem chance de desviar e o Chaos Strike crítico mata rápido um herói com HP baixo fora de itens.
- itens que viram: Black King Bar dos dois lados decide a troca tarde, já que Chaos Bolt é um stun comum e não atravessa imunidade a magia; depois dos 25 min, quem tiver o BKB pronto primeiro consegue iniciar ou resistir ao combo do outro sem medo do stun.
- como jogar: não force troca entre os 10 e 14 min, é quando o Mask of Madness dele mais machuca. Depois do seu Blink e do Echo Sabre (16,6 min), all-in antes do BKB dele sair.
- fonte: pro_dados/chaos_knight.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, chaos_knight_chaos_bolt).

## Contra Ogre Magi (ogre_magi)

- placar: Chaos Knight venceu 52 de 106 partidas pro, 49,1%.
- por que importa: terceiro oponente com mais jogos no banco, suporte tanque de força cujo Fire Blast pode travar o CK sozinho com Multicast, sem precisar de um segundo cast.
- janelas: Ogre tem Arcane Boots pronto aos 11,2 min, bem antes do CK ter qualquer resposta além do Helm of Iron Will (8,8); é a fase mais arriscada pro CK, preso em lane sem Armlet ainda (11,7). O Glimmer Cape dele (22,5 min) chega logo depois do Blink do CK (21,2), dando a ele uma saída de emergência justo quando o CK ganha iniciação de verdade.
- o que ele faz com você: Fire Blast atordoa e, com Multicast (chance escala com a força do Ogre), pode disparar duas ou três vezes seguidas na mesma luta, prendendo o CK sem ele conseguir reagir entre um stun e outro; Bloodlust dá velocidade de ataque pro carry aliado dele terminar o CK ou as ilusões mais rápido.
- o que você faz com ele: Ogre não tem disjoint nem escape antes do Glimmer Cape; uma vez puxado pelo Reality Rift, o Chaos Strike crítico resolve bem porque ele é força mas sem muito armor cedo.
- itens que viram: Glimmer Cape é o item que decide se ele sobrevive a uma investida isolada do CK; antes dele, qualquer engajamento limpo do CK mata o Ogre sozinho.
- como jogar: deixe ele gastar o Fire Blast numa ilusão ou num creep antes de comprometer o engajamento de verdade. Cace ele especificamente antes dos 22 min, antes do Glimmer.
- fonte: pro_dados/chaos_knight.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_multicast, ogre_magi_bloodlust).

## Contra Luna (luna)

- placar: Chaos Knight venceu 47 de 103 partidas pro, 45,6%.
- por que importa: quarto em volume de jogos e também a maior rival de função na lista, as duas disputam a mesma prioridade de farm na safelane; critério de mesma posição e de maior volume ao mesmo tempo.
- janelas: Luna limpa onda mais rápido desde o nível 1 com Moon Glaive, e o LH aos 10 min dela (69) é bem maior que o do CK (55). Antes do Manta dela (17,2 min), Luna é frágil e sem dispel; o Blink do CK (21,2) chega pouco depois disso, então quando ele finalmente consegue puxar ela pra luta, ela já tem Manta pronto. O Black King Bar dela (25,5 min) neutraliza o Chaos Bolt de vez no late.
- o que ela faz com você: Moon Glaive salta entre unidades próximas sem distinguir corpo real de ilusão, então numa luta com Phantasm ativo o dano se espalha por todas as cópias em vez de focar o CK de verdade; Eclipse chove feixes aleatórios perto dela, o mesmo problema, diluído entre as ilusões.
- o que você faz com ela: antes do Manta, Luna não tem como dispelar ou escapar do Reality Rift, e o Chaos Strike crítico mata rápido porque ela não tem survivability própria, só dano.
- itens que viram: Manta Style do lado da Luna é o item que decide, ele remove vários efeitos ao ativar (descrição do próprio item) e ainda cria ilusões dela pra confundir o foco do CK; a resposta é não gastar Chaos Bolt nela depois que o Manta estiver pronto, preferir o Reality Rift, que não depende de alcance de projétil.
- como jogar: pressione a lane cedo, antes do Manta dela, já que as duas disputam a mesma rota de farm. Depois dos 25 min, não agrupe as ilusões do Phantasm em cima dela, o Moon Glaive e o Eclipse comem todas ao mesmo tempo.
- fonte: pro_dados/chaos_knight.json; pro_dados/luna.json; constants_abilities.json (luna_moon_glaive, luna_eclipse); items.json (Manta Style).

## Contra Pudge (pudge)

- placar: Chaos Knight venceu 54 de 102 partidas pro, 52,9%.
- por que importa: quinto em volume de jogos, ganker clássico cujo Meat Hook pode puxar o CK isolado antes dele sequer ter Blink.
- janelas: Pudge costuma montar o Aghanim's Scepter (17,2 min) antes do próprio Blink (19,5), ritmo de hook ameaçador entre os 15 e 19 min, exatamente a fase em que o CK ainda está farmando rumo ao seu próprio Blink (21,2). Depois disso, com Echo Sabre (16,6) e Blink prontos, é o CK que consegue fechar a distância nele e não o contrário.
- o que ele faz com você: Meat Hook causa dano e puxa o CK de longe, isolando ele do time antes dele ter escape (o hook não atordoa, só arrasta); Dismember prende e drena vida, curando o Pudge com o próprio dano que causa, perigoso justamente contra um herói com HP alto como o CK.
- o que você faz com ele: Pudge é surpreendentemente frágil fora da pilha de Flesh Heap; se ele erra o hook ou o CK alcança ele primeiro, o Chaos Strike crítico resolve rápido, já que ele não tem velocidade de ataque nem dano consistente de volta.
- itens que viram: nenhum item do CK desvia o Meat Hook (não é um dash que disjunta projétil); a resposta real é visão de rio e das rotas de hook antes de farmar sozinho.
- como jogar: carregue ward nas rotas onde o Pudge costuma se esconder e evite ficar sozinho fora de alcance de socorro antes do seu Blink. Depois dele, vire o jogo: é você que caça o Pudge.
- fonte: pro_dados/chaos_knight.json; pro_dados/pudge.json; constants_abilities.json (pudge_meat_hook, pudge_dismember).

## Contra Skywrath Mage (skywrath_mage)

- placar: Chaos Knight venceu 46 de 93 partidas pro, 49,5%.
- por que importa: sexto em volume de jogos, suporte de burst mágico puro cujo combo Ancient Seal mais Mystic Flare é o nuke mais perigoso da lista contra um herói de força sem resistência mágica no kit.
- janelas: o power spike do Skywrath é mais de nível que de item, Mystic Flare destrava no nível 6, geralmente bem antes do CK ter qualquer buffer de vida além do Helm of Iron Will (8,8 min). O Aghanim's shard dele (22,3 min) chega logo depois do Blink do CK (21,2) e transforma o Arcane Bolt em três projéteis, um no alvo original e dois em outros inimigos próximos, dano extra se o CK brigar perto de aliados (quem dobra o Mystic Flare em dois alvos é o Aghanim's Scepter, não o shard).
- o que ele faz com você: Ancient Seal silencia e aumenta o dano de feitiço recebido (confirmado na descrição da habilidade); Mystic Flare canaliza um dano mágico altíssimo dividido entre os heróis atingidos, e se o CK estiver sozinho, ele recebe o burst inteiro sem diluir com aliados.
- o que você faz com ele: Skywrath tem HP baixíssimo e nenhuma forma de disjoint; o Reality Rift puxa ele pra perto e o Chaos Strike crítico mata antes dele conseguir se reposicionar.
- itens que viram: o CK não roda nenhum item de resistência mágica no build core (pro_dados/chaos_knight.json), então a resposta é de posicionamento, sair andando assim que ver a animação de canalização do Mystic Flare, já que não é uma raiz.
- como jogar: não fique parado perto do Skywrath depois do nível 6 dele. Em luta, ele morre rápido a um Reality Rift bem lido, foque ele primeiro sempre que possível.
- fonte: pro_dados/chaos_knight.json; pro_dados/skywrath_mage.json; constants_abilities.json (skywrath_mage_ancient_seal, skywrath_mage_mystic_flare).

## Contra Dragon Knight (dragon_knight)

- placar: Chaos Knight venceu 43 de 81 partidas pro, 53,1%.
- por que importa: maior rival de mesma função na lista depois da Luna, outro carry corpo a corpo de força com build muito parecida (Helm of Iron Will, Armlet, Blink), comparação direta de dois bruisers.
- janelas: até os 13 min o Armlet do CK (11,7) sai antes do dele (13,3), pequena vantagem cedo. O Blink de Dragon Knight (16,2) chega quase 5 minutos antes do blink do CK (21,2), dando a ele prioridade de iniciação nessa janela, e a Elder Dragon Form (nível 6, normalmente por volta dos 10-12 min) o transforma num atacante à distância com dano em área que atrapalha o CK de chegar perto. Depois do Blink e do Phantasm do CK (mesmo nível da forma de dragão), a luta tende a virar pro lado das ilusões.
- o que ele faz com você: Dragon Tail atordoa instantaneamente e pode interromper o CK no meio de um engajamento; a forma de dragão dá dano em área que acerta todas as cópias do Phantasm ao mesmo tempo, diluindo o exército de ilusões rápido.
- o que você faz com ele: o stun do Chaos Bolt (até 3,25s no nível máximo) dura mais que o Dragon Tail; o Reality Rift reduz a armadura dele em até 7 pontos por 6s, somando com os críticos do Chaos Strike contra um herói sem evasão nem dispel próprio.
- itens que viram: o Black King Bar dele (23,3 min) chega antes de qualquer BKB do CK (que não é item core no build pro), então depois desse ponto ele pode iniciar através do Chaos Bolt com segurança; a resposta é baitar o BKB com uma ilusão antes de comprometer o corpo real.
- como jogar: evite ficar no alcance da forma de dragão depois do nível 6 dele. Force a troca antes dos 16 min, enquanto nenhum dos dois tem Blink ainda.
- fonte: pro_dados/chaos_knight.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_dragon_tail, dragon_knight_elder_dragon_form, chaos_knight_chaos_bolt, chaos_knight_reality_rift).

## Contra Wraith King (skeleton_king)

- placar: Chaos Knight venceu 35 de 73 partidas pro, 47,9%.
- por que importa: outro carry de força rival direto, com uma ultimate (Reincarnation) que literalmente anula a primeira tentativa de abate do CK.
- janelas: o Radiance de Wraith King (16,3 min) chega bem antes do Blink do CK (21,2), queimando qualquer cópia do Phantasm que ficar perto dele; os dois Blinks saem quase juntos (20,7 contra 21,2), então depois dos 21 min a luta é decidida por quem inicia primeiro.
- o que ele faz com você: Wraithfire Blast atordoa e aplica queimadura contínua pra começar a troca; sua vampiria passiva (Vampiric Spirit) sustenta ele durante o combo do CK, e a Reincarnation faz o primeiro abate do CK virar só um atraso de alguns segundos, não uma morte real.
- o que você faz com ele: o lifesteal do Chaos Strike (até 60% no nível máximo) compete direto com o sustain dele, e a redução de armadura do Reality Rift ajuda as ilusões a derrubar o HP dele antes do timer de Reincarnation acabar.
- itens que viram: o Radiance dele é o item que mais importa pro CK gerenciar, nunca agrupe as cópias do Phantasm em cima de um Wraith King com Radiance, o dano passivo acerta todas.
- como jogar: espalhe as ilusões em vez de clumar nele. Depois de matar ele a primeira vez, continue focando em vez de andar embora, ele ainda tem que sobreviver à reincarnação.
- fonte: pro_dados/chaos_knight.json; pro_dados/skeleton_king.json; constants_abilities.json (skeleton_king_hellfire_blast, skeleton_king_reincarnation, skeleton_king_vampiric_spirit).

## Contra Lifestealer (life_stealer)

- placar: Chaos Knight venceu 34 de 68 partidas pro, 50,0%.
- por que importa: terceiro carry de força rival na lista, com uma ultimate (Rage) que bloqueia justamente o stun do CK e um passivo (Feast) desenhado pra punir heróis de HP alto como ele.
- janelas: o Armlet do CK (11,7 min) sai bem antes do dele (18,1), vantagem cedo de dano e força. Lifestealer também monta Radiance (16,2 min), mesma lógica do Wraith King, queimando ilusões perto. Sem Blink no build pro dele, o gap-close de Lifestealer depende do boost de velocidade da própria Rage, então o Reality Rift do CK segue sendo a ferramenta que fecha distância primeiro até os 21,2 min.
- o que ele faz com você: Open Wounds reduz a velocidade do CK e deixa o time dele curar em cima do sangramento; Feast causa dano e cura Lifestealer baseado na vida máxima do alvo, o que escala muito contra um herói de HP alto como o CK.
- o que você faz com ele: Lifestealer não tem stun próprio, então o Chaos Bolt costuma acertar livre; a redução de armadura do Reality Rift mais os críticos do Chaos Strike derrubam ele antes da Rage mais o Feast estabilizarem.
- itens que viram: a Rage dele (ultimate) dá imunidade a debuff, bloqueando o Chaos Bolt na hora; a resposta é acertar o bolt antes dele ativar a Rage, não durante ou depois.
- como jogar: abra a troca com Chaos Bolt cedo, antes dele conseguir ativar a Rage. Se ele tiver Radiance, espalhe as ilusões do Phantasm do mesmo jeito que contra Wraith King.
- fonte: pro_dados/chaos_knight.json; pro_dados/life_stealer.json; constants_abilities.json (life_stealer_rage, life_stealer_feast, chaos_knight_chaos_bolt).

## Contra Lich (lich)

- placar: Chaos Knight venceu 31 de 43 partidas pro, 72,1%, o maior contraste de vantagem da lista com amostra de 30+ jogos.
- por que importa: suporte de área cujo kit é feito pra atrapalhar grupos e ondas, resposta ruim contra um carry isolado e pior ainda contra um aglomerado de ilusões do Phantasm.
- janelas: Lich não tem nenhum disable ou burst confiável antes do nível 6; o Helm of Iron Will mais o Armlet do CK seguram a poke de Frost Blast sem esforço. O único item defensivo dele, Glimmer Cape, só sai aos 19,8 min, pouco antes do Blink do CK (21,2).
- o que ele faz com você: Frost Blast é um nuke de área que lentifica, não um stun, fácil de andar pra fora dele; Chain Frost salta entre unidades próximas (até 10 vezes), e contra um grupo de Phantasm os saltos se espalham entre as ilusões em vez de focar o CK de verdade, o oposto do que o Lich precisa.
- o que você faz com ele: Lich tem HP baixíssimo; um Reality Rift bem lido mais um crítico do Chaos Strike mata antes da lentidão da Frost Blast sequer importar.
- itens que viram: Glimmer Cape é a única saída real dele; antes dos 20 min não existe resposta de item pra uma investida limpa do CK.
- como jogar: cace o Lich direto sempre que ele estiver sozinho, os números não pedem sutileza aqui.
- fonte: pro_dados/chaos_knight.json; pro_dados/lich.json; constants_abilities.json (lich_frost_nova, lich_chain_frost).

## Contra Templar Assassin (templar_assassin)

- placar: Chaos Knight venceu 43 de 76 partidas pro, 56,6%, segunda maior vantagem da lista e com a maior amostra entre os confrontos favoráveis.
- por que importa: outra carry rival de alto dano físico, historicamente farma mais rápido que o CK e chega em itens de iniciação bem antes dele.
- janelas: o Desolator dela (14,3 min) e o Blink (17,4 min) chegam bem antes do Blink do CK (21,2), janela em que ela pode ambuscar com Meld e matar um CK isolado sozinho. Depois dos 21 min, quando o CK tem Blink e, a partir do nível 6, o Phantasm, a luta vira: o Psi Blades dela espalha dano entre as cópias do Phantasm em vez de focar o corpo real, enquanto os críticos do CK focam o HP único dela.
- o que ela faz com você: Meld mais Psi Blades rende uma emboscada de dano bônus e redução de armadura contra um CK pego sozinho antes dos 17 min; Refraction dá instâncias de dano e uma barreira que aguenta algumas trocas, inclusive um Chaos Bolt inteiro se tiver carga sobrando.
- o que você faz com ela: o Reality Rift a arrasta pra dentro do alcance de melee, onde os críticos do Chaos Strike corroem as cargas do Refraction rápido; depois que a barreira acaba, ela não tem outro escape além do próprio Blink, normalmente gasto.
- itens que viram: o Desolator dela reduz a armadura do CK e das ilusões, mas não muda a corrida central, quem tiver o Blink ou a ultimate pronta na janela fraca do outro ganha a abertura.
- como jogar: farme atrás de creep antes dos 17 min, ela pune muito uma vítima isolada com Meld. Depois do seu Blink, force a luta, o Phantasm clumado sofre menos do splash do Psi Blades do que um corpo sozinho sofreria.
- fonte: pro_dados/chaos_knight.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_meld, templar_assassin_refraction, templar_assassin_psi_blades).

## Contra Techies (techies)

- placar: Chaos Knight venceu só 12 de 36 partidas pro, 33,3%, o pior confronto da lista com amostra de 30+ jogos.
- por que importa: o único herói da lista cujo kit inteiro é feito pra punir quem anda sozinho pelo mapa, exatamente o que um CK pos 1 farmando precisa fazer o jogo inteiro.
- janelas: o power spike do Techies não é de item, é de mapa minado desde cedo; Land Mines ficam plantadas em rotas de farm e jungle antes mesmo dos 10 min. O risco cai conforme o time do CK acumula Observer e Sentry suficiente pra varrer rotas, normalmente por volta dos 15-20 min, quando o CK também já tem Helm of Iron Will mais Armlet pra sobreviver a uma mina que detona sem aviso.
- o que ele faz com você: Land Mines detona em área e reduz resistência mágica de quem pisar; Sticky Bomb gruda e lentifica antes de explodir; Blast Off é um dash suicida que ainda assim entrega dano em área alto e atordoa, útil pra interromper a farm ou o blink do CK.
- o que você faz com ele: Techies tem HP baixíssimo e nenhuma forma de trocar de perto; se o CK alcançar ele sem pisar em mina, o Chaos Strike mata rápido, e o Reality Rift funciona nele sem ressalva, já que ele não tem disjoint.
- itens que viram: Sentry Ward e Dust do lado do CK são os itens que realmente resolvem esse confronto, não existe resposta de build própria pra mina invisível.
- como jogar: carregue sentry sempre que esse herói estiver no time adversário antes de abrir qualquer rota nova de farm. Avise o time pra varrer antes de levar push de torre.
- fonte: pro_dados/chaos_knight.json; pro_dados/techies.json; constants_abilities.json (techies_land_mines, techies_sticky_bomb, techies_suicide).

## Contra Mars (mars)

- placar: Chaos Knight venceu 17 de 47 partidas pro, 36,2%, segundo pior confronto da lista com amostra boa.
- por que importa: outro iniciador de força que trava o CK à distância antes dele sequer blinkar, o inverso do padrão em que o CK costuma vencer trocas de força contra força.
- janelas: o Blink de Mars (15,2 min) chega quase 6 minutos antes do Blink do CK (21,2), dando a ele prioridade de iniciação na maior parte da partida; o Aghanim's shard dele (21,5 min) sai logo depois disso, permitindo que o Spear empale dois alvos ao mesmo tempo. O Black King Bar dele (26,5 min) neutraliza o Chaos Bolt tarde.
- o que ele faz com você: Spear trava e empurra o CK pra trás de parede, árvore ou prédio, interrompendo o engajamento antes dele começar de verdade; Arena of Blood bloqueia a rota de fuga do CK e das ilusões, prendendo o grupo inteiro dentro da arena pra apanhar dos guerreiros.
- o que você faz com ele: Reality Rift é instantâneo e sem projétil, então Mars não tem como desviar dele como desviaria de um Spear de longo alcance; o Chaos Strike crítico é físico e some parte do bônus de redução do Bulwark se o ataque vier pelos lados ou por trás, não de frente.
- itens que viram: quem blinka primeiro geralmente abre a troca, e isso favorece Mars na maior parte do jogo; o Black King Bar dele no late neutraliza o Chaos Bolt.
- como jogar: não ande sozinho em linha reta perto de parede ou árvore antes do seu Blink, é onde o Spear dele rende mais. Depois dos 21 min, force a troca fora da Arena of Blood dele.
- fonte: pro_dados/chaos_knight.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_arena_of_blood, mars_bulwark).

## Contra Morphling (morphling)

- placar: Chaos Knight venceu 17 de 27 partidas pro, 63,0% (amostra pequena).
- por que importa: hard carry clássico que raramente compartilha lane com o CK, cada time geralmente só tem um pos 1, mas com uma ultimate (Morph) capaz de clonar o próprio Chaos Knight; é exatamente o tipo de confronto que o pedido original citou, dois hypercarries cujo power spike relativo decide mais do que qualquer troca de lane.
- janelas: até os 14 min Morphling é frágil e sem escape de verdade, Waveform tem curto alcance e cooldown alto cedo. O Manta dele (18,4 min) chega pouco antes do Blink do CK (21,2), dando a ele dispel e ilusões próprias bem na janela em que o CK finalmente consegue puxar a luta. Depois do Butterfly dele (25,8 min), ele já tem evasão alta contra os ataques físicos do CK.
- o que ele faz com você: Adaptive Strike atordoa e empurra à distância, podendo travar o CK antes dele chegar perto; Morph pode copiar o próprio CK ou outro herói com atributos altos, criando uma cópia que briga com as mesmas armas dele; Waveform dá invulnerabilidade durante o dash, útil pra escapar de um Reality Rift se usado no tempo certo.
- o que você faz com ele: antes do Manta, Morphling não tem como remover o Chaos Bolt, e o Chaos Strike crítico mata rápido um herói sem HP alto pra sustentar a troca.
- itens que viram: o Manta Style do lado dele é o item que decide, remove vários efeitos ao ativar (descrição do item) e ainda cria ilusões próprias pra confundir o foco do CK; a corrida real é o Blink do CK contra o Manta dele.
- como jogar: cace o Morphling antes dos 18 min, ele não tem disjoint de verdade cedo. Depois do Manta dele, não force Chaos Bolt sozinho, feche com Reality Rift e brigue com o Chaos Strike.
- fonte: pro_dados/chaos_knight.json; pro_dados/morphling.json; constants_abilities.json (morphling_waveform, morphling_replicate, morphling_adaptive_strike_agi); items.json (Manta Style).

## Contra Terrorblade (terrorblade)

- placar: Chaos Knight venceu 9 de 18 partidas pro, 50,0% (amostra pequena).
- por que importa: o hard carry com maior presença geral em pro entre os sem lane em comum (887 partidas no patch, resumo do pro_dados), e como o CK, constrói o jogo inteiro em cima de ilusões, o que torna o confronto um espelho direto de quem usa melhor o próprio exército de cópias.
- janelas: Conjure Image dá a Terrorblade ilusões desde cedo na lane dele, mas ele é extremamente frágil fora da Metamorfose. O Manta (17,1 min) e o Aghanim's shard (17,4 min) dele chegam quase juntos, um pouco antes do Blink do CK (21,2), dando a ele ferramentas de ataque à distância bem na janela em que o CK ainda não consegue fechar a distância de verdade.
- o que ele faz com você: Metamorphosis transforma Terrorblade num atacante à distância e transforma junto as ilusões dele que estiverem a até 1200 de distância, multiplicando o dano antes do CK alcançar; Sunder troca uma % da vida atual dos dois, podendo salvar ele de um combo já em andamento ou virar contra ele se o CK estiver com mais vida no momento certo.
- o que você faz com ele: fora da Metamorfose ele não aguenta troca; uma vez que o CK fecha a distância com o Reality Rift, o Chaos Strike crítico mata rápido antes dela virar sustentável. As próprias ilusões do Phantasm competem direto com as dele numa guerra de clones, e o crítico do CK (até 260% de bônus no nível máximo) costuma bater mais forte por ilusão do que o dano reduzido das cópias do Terrorblade.
- itens que viram: o Aghanim's shard dele (Demon Zeal) troca parte do HP atual por velocidade de movimento, regeneração e velocidade de ataque pra ele e as ilusões por perto, mas não funciona durante a Metamorfose; antes dos 17 min, sem esse shard nem o Manta prontos, uma investida limpa do CK ainda vence a troca.
- como jogar: pressione a jungle do Terrorblade antes do Manta e do shard dele, antes dos 17 min. Depois disso, não persiga se ele usar Sunder, ele já pagou o preço em vida.
- fonte: pro_dados/chaos_knight.json; pro_dados/terrorblade.json; constants_abilities.json (terrorblade_metamorphosis, terrorblade_sunder, terrorblade_conjure_image, chaos_knight_chaos_strike).

## Contra Faceless Void (faceless_void)

- placar: Chaos Knight venceu 16 de 21 partidas pro, 76,2% (amostra pequena, mas é o maior contraste de toda a lista).
- por que importa: outro hard carry sem lane obrigatória com o CK, mas com uma ultimate (Chronosphere) capaz de prender o time inteiro, incluindo todas as cópias do Phantasm, dentro da esfera; exatamente o tipo de confronto que decide o jogo mesmo sem brigar de lane.
- janelas: antes dos 16 min, Faceless Void é frágil e sem escape real além de Time Walk, que desfaz o dano recebido nos últimos 2s mas não impede um dano instantâneo. O Maelstrom dele (16,3 min) chega perto do Blink do CK (21,2), bem no meio da janela em que ele ainda não tem Mjollnir (21,8) nem Black King Bar (28,2) pra entrar numa luta de grupo com segurança.
- o que ele faz com você: Time Walk pode salvar ele de um combo lento do CK, mas não de um crítico instantâneo do Chaos Strike; Chronosphere (raio 500, até 4,75s) prende o time inteiro do CK, incluindo cada cópia do Phantasm, impedindo todas de agir durante a esfera inteira.
- o que você faz com ele: antes dele ter Maelstrom ou Mjollnir, Void não tem vida pra trocar; o Reality Rift mais o Chaos Strike crítico matam rápido, porque o Time Walk sozinho não desfaz dano que já acertou fora da janela de 2s.
- itens que viram: o Blink Dagger do CK é o que decide, sem ele o Void nem precisa reagir rápido; depois que ele tiver Chronosphere pronto, nunca agrupe as ilusões perto dele sem saber onde ele está, a esfera prende todas de uma vez.
- como jogar: pressione a jungle do Void antes dos 16 min pra atrasar o item core dele. Depois que ele tiver nível 6, não agrupe o time nem as cópias do Phantasm sem visão, Chronosphere trava todo mundo igual.
- fonte: pro_dados/chaos_knight.json; pro_dados/faceless_void.json; constants_abilities.json (faceless_void_time_walk, faceless_void_chronosphere); https://api.opendota.com/api/constants/aghs_desc.
