---
id: confrontos-dragon_knight
heroi: Dragon Knight
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/mars.json
- dota-hub-conteudo-novo/pro_dados/disruptor.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/ursa.json
- dota-hub-conteudo-novo/pro_dados/queenofpain.json
- dota-hub-conteudo-novo/pro_dados/morphling.json
- dota-hub-conteudo-novo/pro_dados/venomancer.json
- dota-hub-conteudo-novo/pro_dados/monkey_king.json
- dota-hub-conteudo-novo/pro_dados/bounty_hunter.json
- dota-hub-conteudo-novo/pro_dados/alchemist.json
- dota-hub-conteudo-novo/pro_dados/oracle.json
- dota-hub-conteudo-novo/pro_dados/phantom_lancer.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Como essa lista foi montada
Dragon Knight aparece mais como safelane (pos 1) do que como mid nas partidas pro 7.40-7.41: 707 de 1709 jogos (41%) são pos 1, 634 (37%) são mid e 368 (21%) são offlane (OpenDota explorer, lane_role). Os 15 oponentes abaixo cobrem quatro critérios: os 6 com mais jogos de pro contra ele (maior volume de dados), os 2 heróis da mesma função principal (carry/mid) mais comuns nessa base além dos que já entraram no top 6, os 3 confrontos com maior vantagem e os 3 com maior desvantagem em pro (só com 30+ jogos), e o Alchemist como representante do critério "carry que quase nunca divide lane mas importa igual", o mesmo exemplo citado no pedido original. As marcações de tempo do próprio Dragon Knight usam os três itens com timing verificado em pro: Power Treads (6,0 min mediana, p25 5,2), Blink Dagger (16,2 min, p25 12,7) e Black King Bar (23,3 min, p25 21,5), todos de pro_dados/dragon_knight.json.

## Contra Shadow Fiend (nevermore)
- placar: Dragon Knight venceu 192 de 411 partidas pro (46,7%, levemente desfavorável). Maior volume de jogos pro de toda a base de confrontos do Dragon Knight.
- por que importa: maior amostra da base inteira (411 jogos) e os dois competem pela mesma faixa de função hoje, dano físico/mágico sustentado de pos 1 ou pos 2, mesmo raramente dividindo lane no mesmo draft.
- janelas: até os 8 min o risco é o combo de Shadowraze: no nível 6 (mediana pro 6,5 min, p25 5,5, partidas pro 7.40-7.41 via OpenDota explorer) já aparece o combo de Raze com Requiem, e no nível 7 o raze de nível 4 já causa 280 de dano base mais até 80 por alma empilhada em 7s, numa área bem na frente dele, alcance de até 200 (constants_abilities.json, nevermore_shadowraze1). Dos 10 aos 16 min ele acelera o farm com Mask of Madness (10,2 min mediana, p25 9,0, pro_dados/nevermore.json; roubo de vida 22%, +100 de velocidade de ataque) enquanto você ainda fecha o Blink (16,2 min mediana). Depois do seu Blink a vantagem muda: ele tem pouca mobilidade própria contra iniciação. Depois do seu BKB (23,3 min), a Requiem of Souls perde efeito nele.
- o que ele faz com você: Shadowraze acerta em raio fixo ao redor dele sem seguir projétil, difícil de prever se você entrar sem visão perto de árvores; Requiem of Souls aplica medo de até 2,15s (delay de cast de 1,67s) e reduz sua resistência mágica em até 15% por alma acertada.
- o que você faz com ele: ele tem pouca vida e nenhum disable de verdade contra sua iniciação; Dragon Tail (alcance 150, depois do Blink) prende ele parado, e Breathe Fire reduz a armadura dele em até 32% por 11s, o que acelera a queda de um herói que já não tem muita vida base.
- itens que viram: seu Black King Bar bloqueia a Requiem inteira (fear e redução de resistência, bkbpierce: No) e o Shadowraze também cai pra BKB; um Linken's Sphere do lado dele bloqueia sua Dragon Tail uma vez a cada 14s (items.json, sphere), vale gastar outra magia antes de tentar prender.
- como jogar: não fique parado perto de árvores ou cantos dentro do alcance de 200 dele antes do nível 7, é onde o combo de raze mais rende abate. Depois do seu Blink e BKB, vá direto nele antes do time dele reagir.
- fonte: pro_dados/dragon_knight.json; pro_dados/nevermore.json; OpenDota explorer (nível 6); constants_abilities.json (nevermore_requiem, nevermore_shadowraze1, dragon_knight_dragon_tail, dragon_knight_breathe_fire); items.json (black_king_bar, sphere).

## Contra Jakiro (jakiro)
- placar: Dragon Knight venceu 194 de 372 partidas pro (52,2%). Segundo maior volume de jogos pro da base.
- por que importa: segundo maior volume de jogos pro (372), suporte de controle de área que ameaça o Dragon Knight em luta de grupo mesmo sem nunca dividir lane com ele.
- janelas: Jakiro sobe Arcane Boots por volta dos 11,7 min (pro_dados/jakiro.json) e o Macropyre recicla rápido (recarga de 90 a 70s conforme o nível), então reaparece em quase toda luta prolongada depois do nível 6. Seu Blink (16,2 min mediana) permite pular direto nele antes do time dele formar o combo Ice Path + Dual Breath.
- o que ele faz com você: Macropyre causa até 200 de dano mágico por segundo durante 10s numa faixa de 500 de largura, dano que ignora sua armadura; Ice Path (stun de até 2s) encadeado com Dual Breath (slow de até 40% em ataque e movimento por 5s) trava você por bem mais de 3s somados se os dois acertarem.
- o que você faz com ele: Jakiro não tem fuga nem disable contra um gap-closer direto; Dragon Tail junto com Breathe Fire mata ele rápido, já que ele não tem nada parecido com a sua Dragon Blood pra sustentar.
- itens que viram: seu BKB bloqueia Macropyre e Ice Path inteiros (bkbpierce: No nos dois); o Aghanim's Scepter dele faz o Macropyre causar dano puro e soma paredes de gelo que desaceleram 60% nas bordas (aghs_desc), mas seu BKB ainda bloqueia o efeito completo da magia, não só o tipo de dano.
- como jogar: não agrupe dentro da área do Macropyre sem BKB ligado; espere ele gastar o Ice Path e vá com tudo em cima dele, ele não tem nenhuma defesa pessoal.
- fonte: pro_dados/dragon_knight.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre, jakiro_ice_path, jakiro_dual_breath, dragon_knight_dragon_tail); aghs_desc (Jakiro).

## Contra Snapfire (snapfire)
- placar: Dragon Knight venceu 159 de 345 partidas pro (46,1%, levemente desfavorável). Terceiro maior volume de jogos pro da base.
- por que importa: terceiro maior volume (345 jogos), suporte/offlane flexível cuja ultimate ameaça o Dragon Knight em qualquer luta de grupo, sem depender de lane.
- janelas: Snapfire sobe Aghanim's Shard cedo (16,9 min mediana) e o próprio Blink Dagger (20,7 min), mais tarde que o seu (16,2 min). Isso dá a você uma janela real entre os 16 e os 20 min pra iniciar nela antes dela conseguir reposicionar com Blink.
- o que ela faz com você: Mortimer Kisses lança 8 globs com até 360 de dano mágico cada num raio de impacto de 275, mais uma poça que queima 100 de dano por segundo e desacelera até 25% por 3,5s, pode apagar um time agrupado; Scatterblast à queima-roupa (alcance até 450) te imobiliza (100% de slow por 1s) se ela te pegar perto.
- o que você faz com ele: Snapfire tem pouca vida pra uma hero que precisa ficar perto pra usar Scatterblast; Dragon Tail e Breathe Fire derrubam ela rápido se você fechar antes dela montar a zona; a forma de dragão soma 350 de alcance de ataque, o que ajuda a pressionar ela de fora do raio de 450 do Scatterblast.
- itens que viram: seu BKB bloqueia Mortimer Kisses inteira (bkbpierce: No); como o Blink dela sai depois do seu, vale iniciar em cima dela antes dela completar o item.
- como jogar: não agrupe sem checar onde ela está antes de uma luta; com Blink pronto antes do dela, pule nela primeiro, ela morre rápido sem disable próprio de perto.
- fonte: pro_dados/dragon_knight.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_mortimer_kisses, snapfire_scatterblast, dragon_knight_dragon_tail, dragon_knight_elder_dragon_form).

## Contra Mars (mars)
- placar: Dragon Knight venceu 159 de 305 partidas pro (52,1%). Quarto maior volume de jogos pro da base.
- por que importa: quarto maior volume (305 jogos), offlane físico que disputa o mesmo papel de iniciador corpo a corpo do Dragon Knight, ambos com stun de curto/médio alcance e perfil tanque.
- janelas: o Blink de Mars sai por volta dos 15,2 min (pro_dados/mars.json), um pouco antes do seu (16,2 min), então entre os 15 e os 16 min ele pode chegar primeiro na iniciação. Depois disso os dois têm a mesma ferramenta e vira questão de quem acerta o stun primeiro. O BKB dele (mediana 26,5 min, p25 23,8, pro_dados/mars.json) sai bem depois do seu (23,3 min), você chega imune primeiro na corrida pelo item.
- o que ele faz com você: Spear of Mars acerta em linha de até 1200 de distância (mais longe que sua Dragon Tail, 150), empala contra o primeiro obstáculo com até 325 de dano e até 2,2s de stun; dentro da própria Arena of Blood (zona de 550 de raio por 5,5s) a Spear dele ainda causa até 240 de dano extra.
- o que você faz com ele: Dragon Tail dura até 2,4s de stun, mais que o tempo de knockback do God's Rebuke dele (2,5s de slow depois); Breathe Fire reduz a armadura dele em até 32%, o que soma ao seu dano físico mesmo com o Bulwark dele reduzindo dano frontal.
- itens que viram: seu BKB bloqueia a Spear (bkbpierce: No) e o dano da Arena of Blood; o Aghanim's Shard dele (mediana 21,5 min) faz a Spear empalar até 2 heróis com um rastro de fogo, não fique colado num aliado quando ele tiver o item.
- como jogar: bait a Spear dele antes de comprometer seu próprio Blink, ela erra e fica até 14s sem stun; com BKB pronto, entre na Arena of Blood sem medo da zona.
- fonte: pro_dados/dragon_knight.json; pro_dados/mars.json; constants_abilities.json (mars_spear, mars_arena_of_blood, mars_bulwark, mars_gods_rebuke, dragon_knight_dragon_tail, dragon_knight_breathe_fire); aghs_desc (Mars).

## Contra Disruptor (disruptor)
- placar: Dragon Knight venceu 140 de 304 partidas pro (46,1%, levemente desfavorável). Quinto maior volume de jogos pro da base.
- por que importa: quinto maior volume (304 jogos), suporte de controle que ataca diretamente a sua forma de jogar, Blink seguido de Dragon Tail.
- janelas: Disruptor é puro suporte (gpm 279, xpm 431, pro_dados/disruptor.json), sem power spike de item relevante, a ameaça dele é de habilidade a partir do nível 6 (Static Storm) e se mantém constante a luta inteira por causa do cooldown baixo de Kinetic Field (20 a 14s).
- o que ele faz com você: Glimpse pode desfazer seu Blink, te teleportando de volta pra onde você estava há alguns segundos, com dano proporcional à distância percorrida (até 280); Kinetic Field prende você e quem estiver perto numa cúpula de 350 de raio por até 4,4s; Static Storm silencia por até 6s, trava toda sua kit incluindo o toggle da forma de dragão.
- o que você faz com ele: Disruptor tem pouca vida e nenhuma fuga além do próprio Glimpse nele mesmo; se você chegar nele antes de ele soltar os wards defensivos, Dragon Tail e Breathe Fire matam em dois golpes.
- itens que viram: seu BKB bloqueia Static Storm, Glimpse e Kinetic Field inteiros (bkbpierce: No nos três); o Aghanim's Scepter dele faz a Static Storm silenciar também o uso de itens, não confirmei localmente se esse efeito específico atravessa seu Black King Bar, então trate com cautela mesmo imune.
- como jogar: não blinke às cegas sem saber a posição dele, Glimpse pune exatamente isso; foque ele primeiro em luta de grupo se seu time tiver outra forma de engajar, ele não tem salvamento pra si mesmo.
- fonte: pro_dados/dragon_knight.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_glimpse, disruptor_kinetic_field, disruptor_static_storm, dragon_knight_dragon_tail); aghs_desc (Disruptor).

## Contra Tusk (tusk)
- placar: Dragon Knight venceu 161 de 297 partidas pro (54,2%). Sexto maior volume de jogos pro da base, e o melhor percentual entre os seis mais jogados.
- por que importa: sexto maior volume (297 jogos), ganker que depende da mesma ferramenta que você, o Blink, pra iniciar, e aqui o Dragon Knight leva a vantagem.
- janelas: o Blink de Tusk sai bem depois do seu na mediana (19,0 min contra 16,2 min, pro_dados/tusk.json), então você chega na fase de iniciação primeiro na maior parte dos jogos.
- o que ele faz com você: Walrus Kick causa 550 de dano fixo e te empurra 1200 de distância, e atravessa Black King Bar (bkbpierce: Yes), é uma das poucas coisas que ainda te acerta cheio mesmo imune; Ice Shards pode te prender contra uma parede por até 7s se você estiver do lado errado.
- o que você faz com ele: seu Blink chega primeiro, então você escolhe o momento da luta na maioria das vezes; Tusk tem pouca vida pro quanto ele se expõe, Dragon Tail e Breathe Fire punem forte uma leitura errada de Ice Shards.
- itens que viram: como o Walrus Kick ignora BKB, a defesa real é posição, não imunidade; seu BKB ainda bloqueia Ice Shards e o stun do Snowball em grupo (bkbpierce: No nos dois).
- como jogar: não fique de costas pra parede ou penhasco perto dele, é onde o Ice Shards mais rende; com seu Blink pronto antes do dele, puna qualquer rotação solo que ele fizer.
- fonte: pro_dados/dragon_knight.json; pro_dados/tusk.json; constants_abilities.json (tusk_walrus_kick, tusk_ice_shards, tusk_snowball, dragon_knight_dragon_tail).

## Contra Ursa (ursa)
- placar: Dragon Knight venceu 131 de 266 partidas pro (49,2%, equilibrado). Carry corpo a corpo mais jogado em pro contra o Dragon Knight (mesma função principal).
- por que importa: critério de mesma posição, o carry corpo a corpo mais comum contra o Dragon Knight nessa base (266 jogos), e o motivo mecânico direto é o Fury Swipes dele, que ignora seu Black King Bar (constants_abilities.json, ursa_fury_swipes).
- janelas: o Blink de Ursa sai perto do seu (16,8 min contra 16,2 min, pro_dados/ursa.json). Antes disso ele já ameaça lane com Battle Fury (13,7 min) farmando rápido; depois dos 20 min ambos têm Blink e o Basher dele (22,5 min mediana) vira o item que decide a troca de ataque corpo a corpo.
- o que ele faz com você: Fury Swipes empilha dano físico extra a cada ataque dele (12 a 36 por golpe, só reseta se ele parar de atacar por 8 a 20s) e atravessa imunidade mágica (bkbpierce: Yes), então uma troca prolongada só piora pra você; Enrage também atravessa BKB (80% de redução de dano, 50% de resistência a status por até 5s), ele sobrevive seu stun durante o efeito.
- o que você faz com ele: Dragon Blood soma armadura e regeneração que reduzem justamente o dano físico empilhado dele; Breathe Fire reduz a armadura dele em até 32%, acelerando a queda se o time focar enquanto o Enrage estiver em cooldown (até 60s no nível 1).
- itens que viram: nenhum item seu bloqueia Fury Swipes ou Enrage, os dois atravessam BKB; a defesa real é não prolongar troca de ataque corpo a corpo sem vantagem clara de vida.
- como jogar: evite trocar ataque direto com um Ursa que já ativou Overpower, ele ganha a corrida quase sempre; ataque ele quando o Enrage estiver em cooldown, é a sua janela real de vantagem.
- fonte: pro_dados/dragon_knight.json; pro_dados/ursa.json; constants_abilities.json (ursa_fury_swipes, ursa_enrage, ursa_overpower, dragon_knight_breathe_fire).

## Contra Queen of Pain (queenofpain)
- placar: Dragon Knight venceu 126 de 238 partidas pro (52,9%). Mid mágica mais jogada em pro contra o Dragon Knight (mesma função principal).
- por que importa: critério de mesma posição, a mid mais comum contra o Dragon Knight nessa base (238 jogos), concorrência direta pelo papel de mid no draft.
- janelas: Queen of Pain sobe Power Treads por volta dos 8,3 min e o primeiro Kaya perto dos 13,9 min (pro_dados/queenofpain.json); ela tem o nível 16 (Sonic Wave liberada) como spike real, sem timing isolado verificado localmente.
- o que ela faz com você: Sonic Wave causa dano puro de até 625 e atravessa Black King Bar (bkbpierce: Yes), é a única magia dela que ainda te acerta cheio depois do seu BKB; Shadow Strike reduz sua velocidade de movimento em até 55% por 16s se acertar antes da luta.
- o que você faz com ele: ela tem vida baixa fixa e nenhum disable de verdade fora do slow do Shadow Strike; Dragon Tail prende ela antes dela reposicionar com o Blink curto dela (recarga de até 6s no nível 4, mas sem invulnerabilidade).
- itens que viram: seu BKB bloqueia Shadow Strike e Scream of Pain, mas não o Sonic Wave; não existe item seu que pare o Sonic Wave em si, a defesa real é matar ela antes do nível 16 ou ficar fora do raio de 450 quando ela abrir a luta.
- como jogar: não agrupe parado perto dela depois do nível 16; antes disso, puna o Blink curto dela, ele não dá distância nem invulnerabilidade suficiente pra escapar do seu Dragon Tail.
- fonte: pro_dados/dragon_knight.json; pro_dados/queenofpain.json; constants_abilities.json (queenofpain_sonic_wave, queenofpain_shadow_strike, queenofpain_blink, dragon_knight_dragon_tail).

## Contra Morphling (morphling)
- placar: Dragon Knight venceu 52 de 86 partidas pro (60,5%). Terceira maior vantagem do Dragon Knight com amostra relevante (86 jogos).
- por que importa: um dos três confrontos com maior vantagem (30+ jogos), e um carry que se compara direto ao Dragon Knight em farm e resistência mesmo quase nunca dividindo lane.
- janelas: Morphling libera o Replicate (nível 9) em mediana aos 12,1 min nas partidas pro 7.40-7.41 (p25 11,2, OpenDota explorer). Seu Blink (16,2 min mediana) sai depois disso, então a janela real de vantagem é a fase de laning, antes do nível 9, quando ele ainda não tem a ult pra reagir ao seu Dragon Tail.
- o que ele faz com você: Adaptive Strike escala com a agilidade dele comparada à sua força, pode chegar perto do multiplicador máximo (até 2,5x os 110 de dano base) e travar você por até 2,6s se ele estiver na frente em nível; Waveform te dá invulnerabilidade durante o trajeto, uma janela de fuga se ele reagir a tempo.
- o que você faz com ele: Breathe Fire e Dragon Tail derrubam a vida baixa dele antes do nível 9, quando o Replicate ainda não existe; Dragon Blood sustenta seu lado da troca contra o auto-ataque dele, que não tem burst real sem Adaptive Strike.
- itens que viram: o Manta Style dele (mediana 18,4 min) limpa debuff só do próprio Morphling, não das ilusões; seu BKB bloqueia Adaptive Strike e Waveform, mas não o Replicate dele (bkbpierce: Yes), uma ilusão dele ainda pode copiar magias enquanto você estiver imune.
- como jogar: pressione antes do nível 9, ele não tem saída real contra Blink mais Dragon Tail; depois disso, cuidado com o Replicate roubando seu próprio combo contra seu time.
- fonte: pro_dados/dragon_knight.json; pro_dados/morphling.json; OpenDota explorer (nível 9); constants_abilities.json (morphling_adaptive_strike_agi, morphling_waveform, morphling_replicate, dragon_knight_dragon_tail, dragon_knight_breathe_fire).

## Contra Venomancer (venomancer)
- placar: Dragon Knight venceu 28 de 78 partidas pro (35,9%). Segunda maior desvantagem do Dragon Knight com amostra válida (78 jogos).
- por que importa: um dos três confrontos com maior desvantagem (30+ jogos), um suporte que ataca justamente o que sustenta o Dragon Knight, a regeneração.
- janelas: Venomancer não tem power spike de item, o risco dela é constante a partir do nível 1 (Poison Sting é passiva inata). A ameaça cresce com Aghanim's Scepter dela, que reduz a recarga da Noxious Plague em 35s.
- o que ela faz com você: Poison Sting aplica 9 de dano por segundo por 4,5s a cada ataque dela, reaplica se ela te acertar de novo antes de acabar, e esse dano não é reduzido pela sua armadura; Venomous Gale soma até 100 de dano inicial mais um DoT de até 100 ao longo de 15s e desacelera até 50%, dificulta fechar distância.
- o que você faz com ele: ela tem pouca vida e nenhuma fuga própria além dos Plague Wards defensivos; se você fechar com Blink antes dela espalhar veneno, Dragon Tail e Breathe Fire matam rápido.
- itens que viram: um Spirit Vessel do lado dela ativado em você reduz sua restauração de vida (Dragon Blood incluída) em 70% por 8s a cada ativação de Soul Release (items.json, spirit_vessel), essa é a razão real por trás da desvantagem numa troca prolongada; seu BKB bloqueia Venomous Gale e Noxious Plague (bkbpierce: No nos dois), mas não remove o Poison Sting que já estiver ativo em você, isso precisa de dispel, não de imunidade.
- como jogar: não troque dano corpo a corpo prolongado com ela sem BKB, o veneno empilha mais rápido do que sua regen aguenta; feche a distância rápido e mate antes dela reaplicar o Poison Sting mais de uma vez.
- fonte: pro_dados/dragon_knight.json; pro_dados/venomancer.json; constants_abilities.json (venomancer_poison_sting, venomancer_venomous_gale, venomancer_noxious_plague); aghs_desc (Venomancer); items.json (spirit_vessel).

## Contra Monkey King (monkey_king)
- placar: Dragon Knight venceu 28 de 77 partidas pro (36,4%). Terceira maior desvantagem do Dragon Knight com amostra válida (77 jogos), e também carry corpo a corpo, reforça o critério de "mesma função mesmo sem lane em comum".
- por que importa: um dos três confrontos com maior desvantagem (30+ jogos) e ao mesmo tempo um dos carries corpo a corpo mais jogados em pro contra o Dragon Knight.
- janelas: o BKB de Monkey King sai um pouco depois do seu na mediana pro (24,9 min contra 23,3 min, pro_dados/monkey_king.json), então você tem uma pequena janela de imunidade antes dele.
- o que ele faz com você: Jingu Mastery dá bônus de dano (até 180) e roubo de vida (até 80%) a cada 4º ataque dele, e atravessa seu BKB (bkbpierce: Yes), então uma troca de ataque prolongada o favorece mesmo com você imune; Boundless Strike acerta em linha de até 1100 de distância com crítico de até 180% no caminho, pode te pegar saindo de uma árvore com o Tree Dance.
- o que você faz com ele: seu BKB sai primeiro na mediana, então você tem a janela de iniciar com imunidade antes dele; Dragon Tail interrompe o combo dele antes do 4º golpe da Jingu Mastery se você acertar primeiro.
- itens que viram: não existe item seu que bloqueie Jingu Mastery; Heaven's Halberd desarma ataque corpo a corpo por 3,5s (items.json, heavens_halberd), o que zera justamente o combo de ataques dele.
- como jogar: não troque ataque corpo a corpo direto com ele sem vantagem clara de vida, ele ganha a troca prolongada; use sua janela de BKB mais cedo pra iniciar antes dele, e considere Heaven's Halberd se ele estiver puxando a luta pro corpo a corpo.
- fonte: pro_dados/dragon_knight.json; pro_dados/monkey_king.json; constants_abilities.json (monkey_king_jingu_mastery, monkey_king_boundless_strike); items.json (heavens_halberd).

## Contra Bounty Hunter (bounty_hunter)
- placar: Dragon Knight venceu 24 de 68 partidas pro (35,3%). Maior desvantagem de toda a base com amostra válida (68 jogos).
- por que importa: a maior desvantagem do Dragon Knight nessa base, um ganker furtivo que ataca justamente a sua janela mais fraca, antes do Blink ou do BKB prontos.
- janelas: Bounty Hunter ronda o mapa desde cedo com Shadow Walk (invisibilidade desde o nível 1), bem antes do seu Blink (16,2 min mediana) te dar qualquer resposta de mobilidade.
- o que ele faz com você: Shadow Walk te dá invisibilidade por até 35s, ele consegue ficar te rondando sem você ver chegando; Jinada rouba até 36 de ouro no crítico seguinte e atravessa seu BKB (bkbpierce: Yes), então toda vez que ele acerta esse combo ele fica mais forte, mesmo com você imune.
- o que você faz com ele: ele tem pouca vida fixa e nenhuma defesa contra burst corpo a corpo direto; se você pegar ele sem Shadow Walk disponível (recarga de até 18s no nível 1), Dragon Tail e Breathe Fire matam rápido.
- itens que viram: seu BKB bloqueia Shuriken Toss e o stun do Shadow Walk, mas não impede o roubo de ouro da Jinada.
- como jogar: evite ficar sozinho sem visão nos primeiros 10 min, ele não avisa antes de atacar; depois do seu Blink, ele perde a vantagem de iniciativa, vire a caça pra cima dele quando ele estiver sem Shadow Walk.
- fonte: pro_dados/dragon_knight.json; pro_dados/bounty_hunter.json; constants_abilities.json (bounty_hunter_jinada, bounty_hunter_wind_walk, bounty_hunter_shuriken_toss, dragon_knight_dragon_tail).

## Contra Alchemist (alchemist)
- placar: Dragon Knight venceu 26 de 46 partidas pro (56,5%). Amostra pequena (46 jogos), mas é o oponente que o pedido original citou como exemplo de "carry que não divide lane mas importa igual".
- por que importa: Alchemist puxa a jungle sozinho e Dragon Knight joga mid ou às vezes pos 1, os dois quase nunca dividem lane, mas competem pelo mesmo espaço de farm rápido e power spike de item; nas partidas pro 7.40-7.41 isso aparece no placar favorável ao Dragon Knight (56,5%).
- janelas: Alchemist farma rápido cedo, Radiance sai aos 13,9 min (pro_dados/alchemist.json) bem antes do seu Blink (16,2 min); mas o Blink dele só sai aos 21,4 min e o Scepter aos 22,4 min, depois do seu BKB (23,3 min). A fase de 16 a 23 min é a sua janela real.
- o que ele faz com você: Unstable Concoction pode causar até 360 de dano em raio 250 com stun de até 3,2s se ele carregar o tempo certo, abre luta sozinho se pegar você antes do seu Blink; Radiance soma 60 de dano por segundo em fogo ao redor dele, queima quem bater nele de perto.
- o que você faz com ele: no nível mais alto da sua forma de dragão, seus ataques desaceleram o alvo em até 45% de movimento e 65 de velocidade de ataque (constants_abilities.json, dragon_knight_elder_dragon_form), o que corta justamente a corrida de regeneração e combate do Chemical Rage dele; Breathe Fire reduz a armadura dele em até 32%, e o Dragon Tail trava ele parado antes dele conseguir ativar o Chemical Rage e fugir (constants_abilities.json, dragon_knight_dragon_tail).
- itens que viram: seu BKB bloqueia o stun do Unstable Concoction; o Scepter dele (Greevil's Greed) pode melar um Scepter inteiro pra outro aliado do time dele, mas não muda o 1x1 direto contra você.
- como jogar: não tente queimar vida dentro do fogo do Radiance, você perde a troca sustentada; feche a distância com Blink antes dele ativar Chemical Rage e use o stun pra travar ele parado, sem a corrida de regen ele não aguenta seu burst.
- fonte: pro_dados/dragon_knight.json; pro_dados/alchemist.json; constants_abilities.json (alchemist_chemical_rage, alchemist_unstable_concoction, dragon_knight_elder_dragon_form, dragon_knight_breathe_fire, dragon_knight_dragon_tail); aghs_desc (Alchemist).

## Contra Oracle (oracle)
- placar: Dragon Knight venceu 22 de 36 partidas pro (61,1%). Segunda maior vantagem do Dragon Knight, amostra pequena (36 jogos, levar com cautela).
- por que importa: um dos três confrontos com maior vantagem (30+ jogos), um suporte de proteção que normalmente defende o carry inimigo contra você e perde feio nesse recorte.
- janelas: Oracle é puro suporte (gpm 288, xpm 428, pro_dados/oracle.json), sem power spike de item relevante pra essa troca; o kit dele é defensivo, não tem nada que impeça fisicamente sua iniciação.
- o que ele faz com você: False Promise pode salvar o aliado dele perto da morte por até 10s, e atravessa seu Black King Bar (bkbpierce: Yes), não adianta travar o save com imunidade; fora isso, ele não ameaça seu 1x1 diretamente.
- o que você faz com ele: Fate's Edict nele ou em você não desfaz sua Dragon Tail já lançada, e ele tem pouca vida própria; se o alvo salvo pela False Promise não aguentar os 10s, seu time só espera e remata.
- itens que viram: nenhum item seu bloqueia a False Promise; o valor real está em focar o alvo protegido primeiro ou esperar o efeito acabar, já que o dano retido explode no alvo depois.
- como jogar: amostra pequena (36 jogos), não confie cegamente no 61%, mas o padrão faz sentido, Oracle não ameaça seu 1x1. Jogue em volta da False Promise esperando o timer, não force através dela com BKB.
- fonte: pro_dados/dragon_knight.json; pro_dados/oracle.json; constants_abilities.json (oracle_false_promise, oracle_fates_edict, oracle_purifying_flames).

## Contra Phantom Lancer (phantom_lancer)
- placar: Dragon Knight venceu 21 de 34 partidas pro (61,8%). Maior vantagem de toda a base, amostra pequena (34 jogos, a menor amostra válida da lista).
- por que importa: a maior vantagem percentual do Dragon Knight nessa base, e a razão mecânica é direta: a forma de dragão causa dano em área que limpa as ilusões dele rápido (constants_abilities.json, dragon_knight_elder_dragon_form; phantom_lancer_juxtapose). Também é um carry corpo a corpo que quase nunca divide lane.
- janelas: Phantom Lancer acelera o ritmo de farm a cada marco: Power Treads em mediana aos 6,2 min (p25 5,4, pro_dados/phantom_lancer.json), nível 6 com Juxtapose aos 8,2 min (p25 7,6, partidas pro 7.40-7.41 via OpenDota explorer) e Yasha aos 11,7 min (p25 10,3, pro_dados/phantom_lancer.json). Seu nível 6 (forma de dragão) chega perto do mesmo período e já muda o resultado da troca.
- o que ele faz com você: Spirit Lance cria uma ilusão dele que ataca você junto e desacelera seu movimento em até 35% por quase 4s, mas o dano direto é baixo (até 280) pra um herói que depende de volume de ataques, não de um nuque único.
- o que você faz com ele: na forma de dragão, seus ataques causam dano em área (até 100% de splash, raio até 350, constants_abilities.json) que mata as ilusões dele em um ou dois hits, já que elas tomam 600% de dano extra (phantom_lancer_juxtapose), a razão mecânica direta por trás do seu 61,8% nessa base.
- itens que viram: o Aghanim's Scepter dele (mediana 21,9 min, cedo pra essa base) só compensa numa luta prolongada com Phantom Rush, mas se você já está matando as ilusões em splash, o investimento não rende; Breathe Fire tem área suficiente pra acertar várias ilusões de uma vez antes delas se espalharem.
- como jogar: não persiga uma ilusão individual fora da forma de dragão, é perda de tempo; depois do nível 6, lute em cima dele mesmo cercado de cópias, a área do seu ataque resolve sozinha.
- fonte: pro_dados/dragon_knight.json; pro_dados/phantom_lancer.json; OpenDota explorer (nível 6); constants_abilities.json (phantom_lancer_juxtapose, phantom_lancer_spirit_lance, dragon_knight_elder_dragon_form); aghs_desc (Phantom Lancer).
