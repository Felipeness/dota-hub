---
id: confrontos-meepo
heroi: Meepo
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/meepo.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/pudge.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/luna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ursa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/life_stealer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/necrolyte.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/alchemist.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/content/fichas/meepo.md
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/shadow_fiend.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/tiny.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/luna.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/lifestealer.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/alchemist.json
---

## Contra Rubick (rubick)
- placar: Meepo venceu 22 de 39 partidas pro (56,4%). Maior volume de jogos pro de toda a base de confrontos do Meepo.
- por que importa: suporte 4/5 que nunca divide lane com o Meepo, mas aparece em quase todo draft contra ele por causa de uma magia só, Spell Steal. É literalmente o seu próprio Earthbind ou Poof virado contra você.
- janelas: Rubick sobe Arcane Boots aos 10,3 min e Blink aos 21,6 min (pro_dados/rubick.json). Até os 11 min você ainda tem 1 a 2 corpos fechando Power Treads (5,6 min, pro_dados/meepo.json); ele passa essa fase tentando acertar Fade Bolt num corpo isolado. Dos 18 aos 22 min o seu Aghanim's Scepter (21,5 min) chega quase junto do Blink dele: se ele roubar o Earthbind simples antes do seu MegaMeepo estar de pé, perde a chance de copiar o Poof turbinado (50% a mais de dano por Meepo empilhado) que vem logo depois.
- o que ele faz com você: Spell Steal copia a última magia que qualquer um dos seus Meepos lançou, com até 1000 de alcance, e a recarga dela cai ainda mais conforme ele sobe de nível. Se roubar o Earthbind, prende você com a sua própria rede; se roubar o Poof já turbinado pelo MegaMeepo, teleporta com o bônus de dano que você mesmo criou.
- o que você faz com ele: Rubick tem vida baixa fixa e nenhuma mobilidade própria antes de comprar item (Blink dele só sai aos 21,6 min). Qualquer corpo seu sozinho com Earthbind pronto garante o abate se ele não tiver Force Staff ou Eul's por perto.
- itens que viram: não existe item que bloqueie o roubo em si, a defesa real é não gastar Earthbind ou o Poof já turbinado perto dele à toa. Aghanim's Shard seu (Dig) dispela qualquer debuff que ele tenha acabado de roubar e jogado em você antes de virar invulnerável por 3 s.
- como jogar: deixe ele gastar o Spell Steal numa magia fraca antes de soltar o combo de verdade; depois disso ele fica sem o roubo por 180 a 300 s dependendo do nível dele. Evite usar o Poof turbinado perto dele sem necessidade, é a magia mais valiosa da sua build pra ele copiar.
- fonte: pro_dados/meepo.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, meepo_earthbind, meepo_poof, meepo_megameepo).

## Contra Hoodwink (hoodwink)
- placar: Meepo venceu 23 de 36 partidas pro (63,9%). Segundo maior volume de jogos pro da base.
- por que importa: segundo oponente mais comum da base (36 jogos), suporte 4/5 que controla espaço com Bushwhack perto de árvore. O volume é alto mas o placar favorece bastante o Meepo.
- janelas: Hoodwink sobe Arcane Boots aos 12,2 min (pro_dados/hoodwink.json). Ela fecha Aghanim's Shard em 42% das partidas pro (mediana 23,8 min), mas Scepter nem aparece entre os itens mais comprados dela na base pro: o jogo dela é controle de posição, não power spike de item caro. Até lá você tem 1 a 2 corpos fechando Power Treads (5,6 min) enquanto ela zoneia de longe com Acorn Shot. Depois do seu Scepter (21,5 min) e do Shard (23,9 min, Dig pra escapar de uma raiz perto de árvore), a vantagem é toda sua.
- o que ela faz com você: Bushwhack prende (raio 265, stun de 1,5 a 2,1 s conforme o nível) e puxa pra árvore mais próxima qualquer corpo que passe perto de mata fechada, com dano ao longo do tempo somando até 360; Acorn Shot bate e pula entre corpos próximos, então corpos agrupados tomam o pulo do ataque dela mais de uma vez.
- o que você faz com ele: ela tem pouca vida e nenhum disable de longo alcance fora da árvore. Earthbind alcança até 1200 de velocidade de projétil e prende tudo num raio de 220, suficiente pra travar ela antes de usar Scurry (fase e anda em árvore por até 5 s, 2 cargas). Se ela gastar as 2 cargas fugindo, fica sem resposta de mobilidade até recarregar.
- itens que viram: Aghanim's Shard seu (Dig) dispela o stun do Bushwhack e tira o corpo da raiz por 3 s enquanto recupera 25% da vida máxima.
- como jogar: não ande perto de mata fechada sozinho antes de ter 2 ou mais corpos pra dividir o risco do Bushwhack. Depois do seu Scepter, ignore a Hoodwink nas trocas e vá direto no carry do time dela, ela sozinha não segura o dano do MegaMeepo.
- fonte: pro_dados/meepo.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_scurry, hoodwink_acorn_shot, meepo_petrify, meepo_earthbind).

## Contra Pudge (pudge)
- placar: Meepo venceu 16 de 34 partidas pro (47,1%). Pior saldo entre os seis oponentes com mais jogos pro contra o Meepo.
- por que importa: terceiro maior volume de jogos pro (34) e o pior resultado entre eles. Pudge é o clássico pick-off que ameaça qualquer corpo isolado mesmo sem dividir lane.
- janelas: Pudge sobe boots aos 3,8 min e Blink aos 19,5 min (pro_dados/pudge.json). A janela mais perigosa é cedo: entre o nível 3 (quando o segundo corpo nasce) e o seu Power Treads (5,6 min), cada corpo ainda tem pouca vida e costuma andar sozinho pra farmar a própria rota, exatamente o alvo que o Meat Hook (1300 de alcance) busca. Depois do seu Scepter (21,5 min) você já tem 3 a 4 corpos simultâneos, ele só consegue hookar um por vez.
- o que ele faz com você: Meat Hook (150 a 360 de dano, 1300 de alcance) e Dismember (80 a 120 de dano por segundo, canalizado, cura ele pelo total causado) deletam um corpo isolado rápido; Rot machuca o próprio Pudge também, então ele só entra em Rot perto de você quando já está vencendo a troca.
- o que você faz com ele: Earthbind prende tudo num raio de 220 antes dele reposicionar pro próximo hook. Como ele não tem fuga própria fora do item de Blink (19,5 min), um corpo isolado seu com Earthbind pronto geralmente segura até o resto do grupo chegar e virar a troca.
- itens que viram: Aghanim's Shard seu (Dig, dispel básico com 3 s de invulnerabilidade) sobrevive a um Dismember já começado se usado logo no início do canal; Disperser (mana burn de 40 por acerto, mais purge com raiz de 3 s) ajuda a limpar qualquer slow dele em cima de você.
- como jogar: nunca mande um corpo sozinho em área sem visão antes do nível 6 dele (quando Dismember libera). Depois disso, mantenha sempre 2 corpos próximos em rota exposta a hook, pra um puxar o outro de volta se for fisgado.
- fonte: pro_dados/meepo.json; pro_dados/pudge.json; constants_abilities.json (pudge_meat_hook, pudge_dismember, pudge_rot, meepo_earthbind, meepo_petrify).

## Contra Disruptor (disruptor)
- placar: Meepo venceu 16 de 32 partidas pro (50,0%, equilibrado).
- por que importa: quarto maior volume de jogos pro (32), suporte 4/5 cujo ultimate ameaça o grupo de corpos inteiro de uma vez, não só um.
- janelas: Disruptor sobe Arcane Boots aos 11,4 min (pro_dados/disruptor.json). Antes do nível 6 dele (quando Static Storm libera, como qualquer ultimate) ele só tem Thunder Strike e Glimpse pra incomodar à distância, sua janela boa pra farmar espalhado. A partir do nível 6, toda vez que seus corpos lutarem agrupados dentro de Static Storm (raio 550, 6 s), nenhum consegue usar Poof pra sair, estão todos silenciados ao mesmo tempo.
- o que ele faz com você: Static Storm silencia e causa dano crescente (até 350 por segundo no fim dos 6 s) em toda a área; Glimpse reposiciona um corpo pra onde ele estava 4 s atrás e causa dano (até 280), mas atenção: Glimpse só mata ilusões instantaneamente, e os seus clones não são ilusões, então ele não te instakilla com essa magia, só reposiciona e machuca.
- o que você faz com ele: Disruptor tem vida baixa e nenhuma fuga própria fora do Glimpse nele mesmo. Se você isolar ele fora do alcance da Static Storm (800), Earthbind prende ele sozinho e qualquer corpo fecha a troca rápido.
- itens que viram: Aghanim's Shard seu (Dig) não te tira do silêncio enquanto você ainda está dentro da área, o importante é sair do raio de 550 assim que a tempestade começar a formar. Blink Dagger ajuda a tirar pelo menos um corpo de dentro antes dela estourar de vez.
- como jogar: ao ver o cast de Static Storm, mova os corpos pra fora do raio imediatamente, ficar dentro tentando responder com magia é pior que sair. Fora da ultimate, ele é frágil e qualquer pick-off isolado nele garante a troca.
- fonte: pro_dados/meepo.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_static_storm, disruptor_glimpse, meepo_earthbind, meepo_poof, meepo_petrify).

## Contra Mars (mars)
- placar: Meepo venceu 18 de 30 partidas pro (60,0%). Favorável pro Meepo apesar do volume alto.
- por que importa: quinto maior volume de jogos pro (30), offlaner que tranca o campo de batalha inteiro com a ultimate. Mesmo assim o saldo favorece o Meepo.
- janelas: Mars sobe Phase Boots aos 8,5 min e Blink aos 15,2 min (pro_dados/mars.json), bem antes do seu Scepter (21,5 min). Na janela intermediária, dos 15 aos 21 min, ele já pode abrir Arena of Blood em cima de um grupo de corpos seus. Depois do seu Scepter, mesmo preso na arena dele, MegaMeepo empilha os corpos secundários em cima do principal, trocando vários alvos pequenos espalhados por um alvo grande só, mais fácil de proteger.
- o que ele faz com você: Arena of Blood (raio 550, 5,5 s) cria uma parede que bloqueia movimento e ataque de quem fica do lado de fora, prendendo o grupo lá dentro com guerreiros batendo nele; Spear of Mars empala só 1 herói por vez (máximo 1 alvo), então ele escolhe focar o corpo mais isolado.
- o que você faz com ele: Earthbind prende ele antes da Arena fechar em cima do grupo, já que a formação dela leva só 0,1 s mas o cast da Spear tem 0,25 s de ponto de lançamento. Se um corpo pegar a Spear sozinho, os corpos ainda livres respondem rápido, ele fica exposto depois de gastar os dois cooldowns.
- itens que viram: Aghanim's Shard seu (Dig) protege o corpo principal se ele virar alvo da Spear ou ficar preso sozinho contra a parede da Arena; Blink Dagger tira pelo menos 1 corpo de dentro da Arena antes dela fechar de vez, já que ela não bloqueia blink.
- como jogar: não agrupe todos os corpos no mesmo ponto quando o Mars tiver mana pra Arena pronta. Se ele formar a Arena em cima de um grupo, decida rápido entre lutar dentro (MegaMeepo empilhado fica mais forte) ou blincar um corpo pra fora antes da parede fechar.
- fonte: pro_dados/meepo.json; pro_dados/mars.json; constants_abilities.json (mars_arena_of_blood, mars_spear, meepo_earthbind, meepo_megameepo).

## Contra Shadow Fiend (nevermore)
- placar: Meepo venceu 17 de 29 partidas pro (58,6%).
- por que importa: sexto maior volume de jogos pro contra Meepo (29) e também o rival mais direto de posição: Shadow Fiend costuma ir mid no pro, a mesma lane física mais comum do Meepo mesmo quando a prioridade de draft é pos 1.
- janelas: Requiem nível 1 do Shadow Fiend libera por volta dos 7,2 min e Shadowraze nível 4 (280 de dano base) por volta dos 8 min (app/public/data/herois/shadow_fiend.json), bem no meio da fase em que seu segundo corpo ainda está se formando. Seu Power Treads (5,6 min) sai antes do dele (5,9 min, pro_dados/nevermore.json). Dos 16 aos 22 min, com Manta Style dele (16,0 min) pronto, ele ganha mobilidade pra caçar corpo isolado; seu Scepter (21,5 min) chega quase junto, e a partir daí 3 a 4 corpos simultâneos pesam mais do que o Requiem consegue punir de uma vez.
- o que ele faz com você: Requiem of Souls (raio 1000, até 20 linhas de energia) pune um grupo de corpos agrupados mesmo sem visão direta, se ele tiver alma acumulada; cada linha que acerta aplica medo e reduz resistência mágica e velocidade, com a duração desse efeito crescendo até 2,15 s conforme mais linhas acertam o mesmo corpo. Shadowraze zoneia rotas de farm inteiras com 3 direções diferentes e recarga de só 3 s.
- o que você faz com ele: Earthbind prende ele antes do Requiem carregar de verdade (1,67 s de atraso no cast). Ele tem pouca vida fixa e nenhum disable de controle, só dano, então pegando ele fora do range de fuga (sem Manta ativo), qualquer corpo fecha a troca.
- itens que viram: Disperser não ajuda aqui, a Manabreak dele não queima mana de ilusão nenhuma (0 de queima contra ilusão, melee ou ranged); Aghanim's Shard seu (Dig) sobrevive ao primeiro Requiem se usado a tempo.
- como jogar: não agrupe os corpos parados dentro do alcance de 1000 do Requiem quando ele estiver com alma alta (visível no contador dele). Ataque ele fora da janela de Manta, sem ilusão ele não tem pra onde fugir de um Earthbind bem lançado.
- fonte: pro_dados/meepo.json; pro_dados/nevermore.json; app/public/data/herois/shadow_fiend.json (power_spikes); constants_abilities.json (nevermore_requiem, nevermore_shadowraze1, meepo_earthbind, meepo_petrify); items.json (disperser attrib).

## Contra Tiny (tiny)
- placar: Meepo venceu 7 de 23 partidas pro (30,4%). Pior confronto de toda a lista.
- por que importa: o carry pos1 mais frequente contra Meepo no pro (23 jogos) e o pior saldo de toda a base de confrontos dele. O combo Avalanche + Toss é feito sob medida pra punir corpos agrupados.
- janelas: Tiny sobe Power Treads aos 6,1 min e Blink Dagger aos 15,9 min (pro_dados/tiny.json); Grow (nível 6) libera aos 7:42 (app/public/data/herois/tiny.json). Antes do nível 6 ele não tem combo de iniciação, só farm; a partir daí qualquer grupo de 2 ou mais corpos seus parado dentro do raio 325 a 370 do Avalanche vira stun em cadeia seguido de um Toss que arremessa um deles pra cima do resto, multiplicando o dano recebido. Seu Scepter (21,5 min) chega bem depois do Blink dele (15,9 min), uma janela longa em que ele já inicia fight antes de você ter o MegaMeepo pronto pra responder.
- o que ele faz com você: Avalanche bombardeia uma área (325 a 370 de raio conforme o nível) com 5 tiques de dano e stun curto cada, pega todo corpo que estiver perto; Toss pega a unidade mais próxima (300 de raio, pode ser um dos seus próprios corpos) e arremessa pra cima do alvo, somando dano de impacto ao do Avalanche.
- o que você faz com ele: Tiny não tem fuga própria antes do item de Blink (15,9 min). Se um corpo pegar ele isolado antes disso com Earthbind pronto, ele não escapa. O dano dele é direto de ataque (não dilui tanto quanto outras coisas entre os seus corpos), então Skadi (slow de até -50% em alvo à distância) ajuda a segurar uma troca que já começou mal.
- itens que viram: espalhar os corpos em vez de agrupar reduz o valor do combo Avalanche + Toss, que precisa de pelo menos 2 corpos próximos pra compensar o cast; Aghanim's Shard seu (Dig) salva o corpo principal se ele virar alvo do Toss logo depois do Avalanche.
- como jogar: depois do nível 6 dele, nunca deixe 2 ou mais corpos parados no mesmo ponto fora de combate planejado. Force a troca antes do Blink dele (15,9 min) ou espere o seu Scepter (21,5 min) pra brigar com MegaMeepo pronto.
- fonte: pro_dados/meepo.json; pro_dados/tiny.json; app/public/data/herois/tiny.json (power_spikes); constants_abilities.json (tiny_avalanche, tiny_toss, meepo_earthbind, meepo_petrify).

## Contra Luna (luna)
- placar: Meepo venceu 13 de 21 partidas pro (61,9%). Favorável pro Meepo.
- por que importa: segundo carry pos1 mais frequente contra Meepo no pro (21 jogos). Ela farma rápido com Moon Glaives e tem Eclipse como AoE de grupo, mas o saldo favorece o Meepo mesmo assim.
- janelas: Luna sobe Power Treads aos 5,6 min, praticamente junto do seu, e Mask of Madness aos 10,0 min (pro_dados/luna.json), quando passa a limpar camp rápido com Moon Glaives, competindo direto pelo seu espaço de farm espalhado. Eclipse 3/3 dela só fecha por volta dos 24 min, nível 18 (app/public/data/herois/luna.json), depois do seu Scepter (21,5 min); até lá o problema real não é a ultimate dela, é a velocidade de farm.
- o que ela faz com você: Lucent Beam atordoa por 0,6 s e inicia a troca; Moon Glaives faz o ataque dela saltar entre corpos próximos (até 6 saltos no nível 4), então corpos agrupados tomam dano repetido do mesmo golpe; Eclipse chove raios aleatórios num raio de 675, cada corpo pode levar até 5 raios.
- o que você faz com ele: Luna tem pouca vida fora de item e depende quase 100% de autoataque pra valer o pick. Earthbind prende ela antes do Lucent Beam sair, e com os corpos espalhados (não um do lado do outro) o Moon Glaives perde o valor de saltar entre eles.
- itens que viram: Skadi seu (slow em alvo à distância) corta a mobilidade dela numa troca prolongada, já que ela não tem fuga própria fora de item; Disperser rende bem se ela comprar Manta Style pra escapar, já que ilusão não tem mana pra perder.
- como jogar: espalhe os corpos em vez de deixar 2 ou mais perto um do outro quando ela tiver Moon Glaives maxado. Force a luta antes do Eclipse 3/3 dela (24 min), ela ainda não tem AoE forte o bastante pra punir um grupo de 3 a 4 corpos sozinha.
- fonte: pro_dados/meepo.json; pro_dados/luna.json; app/public/data/herois/luna.json (power_spikes); constants_abilities.json (luna_lucent_beam, luna_eclipse, luna_moon_glaive, meepo_earthbind).

## Contra Dragon Knight (dragon_knight)
- placar: Meepo venceu 10 de 20 partidas pro (50,0%, equilibrado).
- por que importa: carry/mid mais frequente na lista depois de Tiny e Luna (20 jogos). Tem um cone de dano em área que pune grupo, mas sem mobilidade pra caçar corpo isolado.
- janelas: Dragon Knight sobe Power Treads aos 6,0 min, perto do seu (5,6 min), mas o Blink dele só sai aos 16,2 min (pro_dados/dragon_knight.json), então até lá ele não alcança corpo nenhum se você espalhar bem. Elder Dragon Form (nível 6) vira ele de melee pra ranged, com splash a partir do segundo nível da forma. Depois do seu Scepter (21,5 min), MegaMeepo empilhado em 1 alvo esquiva melhor do cone do Breathe Fire do que vários corpos espalhados esquivariam sozinhos.
- o que ele faz com você: Breathe Fire é um cone (150 a 250 de raio ao longo de 750 de alcance) que queima e reduz o dano de quem é atingido; Elder Dragon Form dá splash em corpos próximos a partir do nível 2 da forma (75%), chegando a 100% no nível 4, perigoso se vários corpos estiverem colados.
- o que você faz com ele: ele não tem disable de controle além do próprio dano, e zero mobilidade antes do Blink item (16,2 min). Earthbind prende ele parado pra um corpo fechar o abate sem risco de fuga.
- itens que viram: espalhar os corpos reduz o valor do cone e do splash dele; Skadi seu (slow em alvo à distância) segura ele numa troca prolongada depois que ele vira Elder Dragon ranged.
- como jogar: evite agrupar 2 ou mais corpos na frente dele quando estiver em Elder Dragon Form. Antes do Blink dele (16,2 min), qualquer corpo isolado seu caça ele sem medo de fuga.
- fonte: pro_dados/meepo.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_breathe_fire, dragon_knight_elder_dragon_form, meepo_earthbind).

## Contra Ursa (ursa)
- placar: Meepo venceu 11 de 20 partidas pro (55,0%). Levemente favorável pro Meepo.
- por que importa: carry pos1 de farm rápido e 1x1 forte, empatado em volume com Dragon Knight (20 jogos). Interessante justamente por não compartilhar lane (Ursa costuma ir jungle ou safelane) e ainda assim competir pelo mesmo papel de "fecha o jogo sozinho".
- janelas: Ursa fecha Battle Fury aos 13,7 min e Blink Dagger aos 16,8 min (pro_dados/ursa.json), ambos antes do seu Scepter (21,5 min). Essa é a janela de maior risco: ele já farma rápido com o cleave do Battle Fury e tem mobilidade pra caçar corpo isolado, enquanto você ainda tem só 2 a 3 corpos sem MegaMeepo. Depois do seu Scepter, e principalmente do Shard (23,9 min), o risco cai: Dig tira o corpo principal de um 1x1 perdido.
- o que ele faz com você: Overpower dá acerto garantido e até 400% de bônus de velocidade de ataque por um número de golpes crescente (3 a 6 conforme o nível), focado num único corpo; Fury Swipes soma dano extra a cada ataque consecutivo no MESMO alvo, mas reseta (8 a 20 s) se ele trocar de alvo, então ele não empilha bônus contra vários corpos diferentes ao mesmo tempo, precisa escolher 1 e manter o foco.
- o que você faz com ele: como o Fury Swipes só rende contra o mesmo alvo, trocar qual corpo recebe o foco (saindo de combate e voltando com outro) zera o progresso dele. Earthbind prende ele parado antes do Overpower render os ataques bônus.
- itens que viram: Aghanim's Shard seu (Dig) salva o corpo que ele estiver focando no meio do Overpower, cortando a sequência de ataques consecutivos; Skadi (slow em alvo à distância) ajuda a manter distância dele, que depende de ficar colado no alvo pra valer o DPS.
- como jogar: se ele focar um corpo com Overpower, tire esse corpo do alcance dele em vez de tentar salvar trocando dano, o Fury Swipes dele zera e ele perde a vantagem empilhada.
- fonte: pro_dados/meepo.json; pro_dados/ursa.json; constants_abilities.json (ursa_overpower, ursa_fury_swipes, ursa_enrage, meepo_earthbind, meepo_petrify).

## Contra Templar Assassin (templar_assassin)
- placar: Meepo venceu 7 de 14 partidas pro (50,0%, equilibrado, amostra mediana).
- por que importa: um dos carries agi mais jogados em pro no geral (1.681 partidas pro no acumulado dela, pro_dados/templar_assassin.json), entra na lista por ser um dos carries mais populares mesmo com pouquíssima lane em comum com o Meepo (ela costuma ir pos1 ou pos2, geralmente sem dividir a mesma rota).
- janelas: Templar Assassin fecha Desolator aos 14,3 min e Blink aos 17,4 min (pro_dados/templar_assassin.json); Psionic Trap (nível 6) libera entre 6 e 9 min (app/public/data/herois/templar_assassin.json). Antes do Desolator ela ainda depende de farmar sozinha com Meld + Psi Blades; seu Power Treads (5,6 min) sai bem antes, então cedo você farma mais rápido. Dos 14 aos 21 min, com Desolator e Blink prontos, ela consegue caçar corpo isolado com burst alto; seu Scepter (21,5 min) fecha quase junto do Blink dela, e a partir daí o grupo de corpos pesa mais que o burst dela sozinha.
- o que ela faz com você: Psionic Trap monitora movimento de forma invisível e, ao ser ativada, desacelera (até 50%) e causa dano em área de 400 de raio, perigoso se um corpo passar sem perceber; Refraction dá instâncias de escudo e dano bônus que tornam qualquer 1x1 contra ela mais lento de fechar.
- o que você faz com ele: ela tem pouca vida fixa fora de item. Earthbind prende ela antes de ativar as traps ou entrar em Refraction, e como ela depende de ficar perto pro Meld (dano em melee), um corpo com a rede pronta evita que ela chegue perto o bastante.
- itens que viram: Aghanim's Shard (Dig) sobrevive a um burst de Meld + Psi Blades se usado a tempo.
- como jogar: cheque passagens estreitas antes de atravessar com corpo sozinho, as traps são invisíveis. Depois do seu Scepter, prefira brigar em grupo, ela ainda é melhor no 1x1 isolado do que contra 3 a 4 corpos ao mesmo tempo.
- fonte: pro_dados/meepo.json; pro_dados/templar_assassin.json; app/public/data/herois/templar_assassin.json (power_spikes); constants_abilities.json (templar_assassin_psionic_trap, templar_assassin_refraction, meepo_earthbind, meepo_petrify).

## Contra Lifestealer (life_stealer)
- placar: Meepo venceu 3 de 11 partidas pro (27,3%, amostra pequena, menos de 30 jogos). Segundo pior confronto da lista.
- por que importa: carry pos1 de sustain que raramente compartilha lane (costuma ir safelane físico), mas entra na lista pelo saldo ruim e porque a Rage dele anula boa parte do kit de controle do Meepo.
- janelas: Lifestealer sobe Phase Boots aos 6,0 min e Radiance aos 16,2 min (pro_dados/life_stealer.json); Rage já está disponível desde o nível 4, por volta dos 4 a 5 min (app/public/data/herois/lifestealer.json). Dos 6 aos 16 min ele já pode anular qualquer tentativa sua de prender ou atordoar; depois do Radiance, que queima 60 de dano por segundo em 650 de raio e não é reduzido contra os seus corpos (eles não são ilusões), ele passa a punir qualquer corpo que farme perto demais dele.
- o que ele faz com você: Rage dá imunidade total a debuff e 80% de resistência mágica por 3 a 6 s (recarga de 17 a 20 s), anula o Earthbind inteiro durante a janela; Open Wounds sangra o alvo por 7 s e deixa o time dele curar em cima do dano causado nele, perigoso se um corpo ficar preso numa troca de grupo.
- o que você faz com ele: ele não tem disable nenhum, só sustain e dano. Se pegar ele fora da janela de Rage (que tem recarga visível), Earthbind garante que ele não escapa, a mobilidade dele vem só de velocidade de movimento, sem dash ou blink inato.
- itens que viram: Aghanim's Shard seu (Dig) tira o corpo principal de um Open Wounds já aplicado; Disperser rende pouco aqui, ele não depende de mana pra nada essencial.
- como jogar: olhe o ícone de recarga do Rage antes de engajar, gastar Earthbind durante a janela dele é magia jogada fora. Fora da Rage, qualquer corpo isolado fecha o abate.
- fonte: pro_dados/meepo.json; pro_dados/life_stealer.json; app/public/data/herois/lifestealer.json (power_spikes); constants_abilities.json (life_stealer_rage, life_stealer_open_wounds, meepo_earthbind, meepo_petrify); items.json (radiance attrib).

## Contra Necrophos (necrolyte)
- placar: Meepo venceu 5 de 8 partidas pro (62,5%, amostra pequena, menos de 30 jogos).
- por que importa: entra pela ameaça mecânica mais específica da lista, não pelo volume. Reaper's Scythe causa dano proporcional à vida que falta no alvo, e um corpo seu sozinho, com dano, velocidade de ataque, regeneração, queima de mana e chance de proc diluídos entre os corpos pela Divided We Stand, costuma ter menos vida máxima que um herói normal no mesmo nível, o alvo perfeito pro execute dele.
- janelas: Necrophos também monta Radiance (13,7 min) e fecha Aghanim's Shard cedo, aos 17,8 min (pro_dados/necrolyte.json), antes do seu Scepter (21,5 min). Dos 14 aos 21 min ele já tem o nível 6 (Reaper's Scythe disponível) e Radiance queimando 60 de dano por segundo em 500 de raio, cheio contra os seus corpos porque eles não são ilusões; essa é a janela mais perigosa pra deixar um corpo com vida baixa sozinho perto dele.
- o que ele faz com você: Reaper's Scythe causa de 0,7 a 0,9 de dano por cada 1% de vida que falta no alvo, atordoa por 1,5 s e, se matar, cura HP e mana permanente pra ele. Como "se qualquer Meepo morrer, todos morrem" (Divided We Stand), um corpo com vida baixa executado por essa magia mata o resto do grupo junto.
- o que você faz com ele: ele é frágil fora de Death Pulse (cura 70 a 130 nos aliados dele, 100 a 280 de dano em área nos inimigos) e tem pouca mobilidade. Earthbind prende ele antes de alinhar o Scythe, que tem 600 de alcance, menor que o 750 a 1200 do seu net.
- itens que viram: manter todo corpo acima de uns 60 a 70% de vida antes de entrar no alcance dele neutraliza o cálculo do Scythe, que é baseado na vida FALTANTE; Aghanim's Shard seu (Dig) é a resposta direta, invulnerabilidade de 3 s cancela o execute no corpo principal, desde que usado antes do Scythe acertar, não depois.
- como jogar: nunca deixe um corpo ferido (abaixo de uns 40% de vida) sozinho dentro de 600 de distância dele. Se perceber o cast do Scythe carregando, Dig no corpo principal primeiro, os corpos secundários são mais descartáveis.
- fonte: pro_dados/meepo.json; pro_dados/necrolyte.json; constants_abilities.json (necrolyte_reapers_scythe, necrolyte_death_pulse, meepo_divided_we_stand, meepo_earthbind, meepo_petrify); items.json (radiance attrib).

## Contra Alchemist (alchemist)
- placar: Meepo venceu 1 de 6 partidas pro (16,7%, amostra pequena, menos de 30 jogos, não dá pra tirar conclusão estatística forte daqui).
- por que importa: o exemplo mais claro de confronto que não acontece em lane nenhuma (Alchemist é jungle farmer puro, Meepo normalmente vai mid), mas que importa demais: os dois competem pelo mesmo recurso, velocidade de farm, e chegam ao meio-jogo com itens caros em janelas quase idênticas.
- janelas: Alchemist fecha Radiance aos 13,9 min e Aghanim's Scepter aos 22,4 min (pro_dados/alchemist.json), praticamente emparelhado com o seu próprio Scepter (21,5 min). Chemical Rage libera no nível 6, por volta dos 7 a 8 min (app/public/data/herois/alchemist.json), e já deixa ele puxar camp atrás de camp sem parar pra regenerar, a mesma corrida de farm que você corre com Power Treads (5,6 min). Nenhum dos dois ameaça o outro de perto nessa fase, o jogo é indireto: quem fecha o próximo item relevante primeiro empurra mais mapa.
- o que ele faz com você: Acid Spray reduz a armadura em área (raio de 350 a 500, -3 a -6 de armadura) e causa dano contínuo, perigoso se seus corpos cruzarem a zona dele sem perceber; Unstable Concoction atordoa até 3,2 s num raio de 250, suficiente pra isolar e matar um corpo pego sozinho numa rota de farm.
- o que você faz com ele: Earthbind prende ele antes do Unstable Concoction carregar (ele precisa ficar parado "fermentando" até 5 s pra dano e stun máximos, fácil de interromper prendendo ele no meio do processo). Fora da Chemical Rage, ele não tem fuga própria, então pegando ele cedo numa rota isolada, qualquer corpo fecha o abate.
- itens que viram: Aghanim's Shard seu (Dig) dispela o stun do Unstable Concoction se usado a tempo; Disperser rende pouco aqui, ele não depende de mana alta pra nada essencial.
- como jogar: não assuma que, por ele ser jungler, vocês nunca vão se cruzar, ele invade camp perto da sua rota de farm o jogo inteiro. Se cruzar com ele isolado antes do nível 6 dele (Chemical Rage), a vantagem é sua, prenda e force a troca.
- fonte: pro_dados/meepo.json; pro_dados/alchemist.json; app/public/data/herois/alchemist.json (power_spikes); constants_abilities.json (alchemist_chemical_rage, alchemist_acid_spray, alchemist_unstable_concoction, meepo_earthbind, meepo_petrify).
