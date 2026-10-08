---
id: confrontos-skeleton_king
heroi: Wraith King
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/skeleton_king.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/lion.json
- dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- dota-hub-conteudo-novo/pro_dados/pudge.json
- dota-hub-conteudo-novo/pro_dados/skywrath_mage.json
- dota-hub-conteudo-novo/pro_dados/luna.json
- dota-hub-conteudo-novo/pro_dados/chaos_knight.json
- dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- dota-hub-conteudo-novo/pro_dados/zuus.json
- dota-hub-conteudo-novo/pro_dados/abaddon.json
- dota-hub-conteudo-novo/pro_dados/shredder.json
- dota-hub-conteudo-novo/pro_dados/grimstroke.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/alchemist.json
- dota-hub-conteudo-novo/pro_dados/morphling.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://esportstales.com/dota-2/rubick-spell-interactions-how-steal-and-use-strength-spells
---

## Como escolhi os confrontos

Wraith King é quase sempre pos1 puro no cenário profissional atual. A lista mistura quatro critérios: os 6 heróis com mais jogos contra ele em pro (Rubick, Shadow Fiend, Lion, Ogre Magi, Pudge, Skywrath Mage), que na prática são quase todos suportes muito escalados no pro play atual, não uma rivalidade de lane específica; os outros carries pos1 que mais aparecem em pro além do Shadow Fiend (Luna, Chaos Knight, Templar Assassin); os maiores contrastes de taxa de vitória com amostra de 30 ou mais jogos pra cada lado (Zeus, Abaddon e Timbersaw favorecem o Wraith King; Grimstroke e Tusk favorecem o oponente); e os hard carries mais jogados em pro mesmo sem lane em comum com ele, Alchemist e Morphling, o par que motivou esse documento. Os dois raramente disputam a safelane com o Wraith King, cada time normalmente só escala um pos1 ali, mas são justamente o tipo de confronto que decide o jogo tarde: dois carries cujo power spike relativo (quando cada um fica forte, com que item) importa mais do que qualquer troca de lane. A amostra desses dois é pequena (12 e 16 jogos de pro no período coberto), sinal de que o confronto direto é raro mesmo no cenário profissional, mas o resultado (50% e 56,2% a favor do Wraith King) ainda indica quem sai na frente quando os caminhos cruzam.

## Contra Rubick (rubick)

- placar: Wraith King venceu 63 de 125 partidas pro, 50,4% (pro_dados/skeleton_king.json).
- por que importa: oponente com mais jogos no banco contra o Wraith King, mas isso reflete sobretudo o Rubick ser o suporte mais escalado do pro play atual (3.990 partidas no acumulado dele, teto do próprio dataset), não uma rivalidade de lane. Ele é pos4/5 do time adversário e aparece contra praticamente todo carry.
- janelas: o Wraith King fecha Phase Boots aos 6,3 min (494 jogos) enquanto o Rubick ainda está pingando Fade Bolt sem Arcane Boots (10,3 min, 3.072 jogos). O Rubick só fecha o próprio Blink aos 21,6 min (2.782 jogos), quase um minuto depois do Blink do Wraith King (20,7 min, 397 jogos), então nas primeiras entradas dele o Rubick ainda está sem a mobilidade.
- o que ele faz com você: Spell Steal copia o último feitiço ativo que o Wraith King lançou perto dele, e a única habilidade do kit atual realmente roubável é o Wraithfire Blast (o stun). Mortal Strike é passivo e não entra no Spell Steal; Reincarnation dispara sozinho na morte, não é um cast manual que o Rubick consiga copiar. Gastar o Q perto de um Rubick com mana cheia dá um stun de graça pro time adversário por até 3 minutos (duração do roubo no nível 1 do Spell Steal).
- o que você faz com ele: Rubick não tem HP de suporte tanque nem disjoint além do próprio item dele; puxado pro alcance do Wraithfire Blast, morre rápido pro crítico de Mortal Strike.
- itens que viram: nenhum item do Wraith King anula o Spell Steal diretamente, a resposta é de posicionamento, não gastar o Wraithfire Blast perto da visão de um Rubick com mana cheia fora de uma troca de verdade.
- como jogar: segure o stun até o momento de matar, não pra abrir espaço, se o Rubick estiver perto e com mana cheia. Depois que ele gastar Fade Bolt ou Telekinesis, fica sem feitiço pra copiar até recarregar.
- fonte: pro_dados/skeleton_king.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, skeleton_king_hellfire_blast); esportstales.com (Rubick spell interactions, status de Reincarnate e Mortal Strike como não roubáveis).

## Contra Shadow Fiend (nevermore)

- placar: Wraith King venceu 59 de 121 partidas pro, 48,8%.
- por que importa: segundo mais jogado contra o Wraith King no banco pro e o carry de mid mais picado da base, mesma função de dano físico sustentado tarde, mas com início de jogo muito mais rápido (78 LH aos 10 min contra 56 do Wraith King, pro_dados).
- janelas: até os 10 min o Shadow Fiend já abriu vantagem grande de farm (Power Treads 5,9 min, Boots of Elves 6,9 min); o Wraith King ainda está fechando o Phase Boots (6,3 min). Entre 12 e 19 min ele monta Blade of Alacrity (12,7) e Staff of Wizardry (18,9) rumo a um item de burst, janela em que o Wraith King ainda não tem Radiance (16,3) nem Blink (20,7) pra responder. O Black King Bar dele sai aos 25,2 min (1.554 jogos), bem na faixa em que o Wraith King também costuma montar o próprio; quem fecha primeiro dita quem inicia a troca sem medo do combo do outro.
- o que ele faz com você: Shadowraze bate instantaneamente em área na frente, atrás ou do lado dele e ganha dano extra a cada raze empilhada (até 7s de stack), perigoso se o Wraith King avançar sem contar o alcance de 250. Requiem of Souls aplica medo em até 1000 de raio, que pode espalhar e atrasar a entrada numa luta de grupo.
- o que você faz com ele: Shadow Fiend não tem disjoint real; o Wraithfire Blast trava ele parado e o crítico de Mortal Strike (até 280%) mata um herói sem HP alto fora de itens defensivos.
- itens que viram: Black King Bar dos dois lados decide a troca tarde, nem Shadowraze nem Requiem atravessam BKB (bkbpierce: No nos dois, constants_abilities.json); quem tiver o próprio BKB pronto primeiro consegue iniciar ou segurar o combo do outro sem medo.
- como jogar: evite abrir a luta sozinho contra um Shadow Fiend com Blade of Alacrity pronto e sem o seu BKB. Depois do seu Blink, feche a distância focando ele primeiro, ele não aguenta a troca corpo a corpo.
- fonte: pro_dados/skeleton_king.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem).

## Contra Lion (lion)

- placar: Wraith King venceu 59 de 102 partidas pro, 57,8%, o melhor resultado entre os seis mais jogados.
- por que importa: terceiro mais jogado no banco pro, suporte com o maior pico de burst single-target do jogo, mas cujo kit inteiro é bloqueado pelo Black King Bar do Wraith King.
- janelas: Lion sai Tranquil Boots aos 7,4 min e wards por volta dos 17-18 min, suporte padrão. O Wraith King chega no Radiance aos 16,3 min; antes do Blink do Wraith King (20,7), o Lion já tem o próprio pronto (18,2 min, 2.412 jogos) e pode tentar iniciar Hex mais Impale primeiro.
- o que ele faz com você: Earth Spike atordoa até 2,2s e Hex transforma por até 3,2s, mas os dois são "Strong Dispels Only" e bloqueados por BKB; Finger of Death causa até 850 de dano mágico instantâneo, também bloqueado por BKB (bkbpierce: No, constants_abilities.json). Sem BKB, Hex mais Finger of Death mata o Wraith King sozinho numa troca isolada.
- o que você faz com ele: Lion tem HP baixo e nenhum disjoint; travado pelo Wraithfire Blast, o crítico de Mortal Strike resolve rápido.
- itens que viram: Black King Bar é o item que decide. Com ele ativo, o kit inteiro do Lion (Hex, Impale, Finger of Death) para de fazer efeito no Wraith King; sem BKB, é a morte mais rápida possível pro herói.
- como jogar: antes do seu BKB, nunca entre no alcance de Hex (até 650) de um Lion com mana cheia. Depois do BKB, pode iniciar nele sem medo, ele não tem como impedir o combo.
- fonte: pro_dados/skeleton_king.json; pro_dados/lion.json; constants_abilities.json (lion_finger_of_death, lion_voodoo, lion_impale).

## Contra Ogre Magi (ogre_magi)

- placar: Wraith King venceu 46 de 97 partidas pro, 47,4%.
- por que importa: quarto mais jogado contra o Wraith King, suporte de disable curto e barato que também sai como pos5 de farm rápido (Hand of Midas aos 18,9 min em 768 jogos).
- janelas: Ogre Magi fecha Arcane Boots aos 11,2 min, mas o Fireblast já está disponível desde o nível 1; o Wraith King nessa fase ainda está só com Phase Boots (6,3 min). Multicast é passivo desde o início do kit (constants_hero_abilities.json), não um talento de meio de jogo, então mesmo cedo o segundo Fireblast pode disparar de graça, dando dois stuns seguidos antes do Wraith King fechar o Blink (20,7 min).
- o que ele faz com você: Fireblast atordoa 1,2s por cast e, com Multicast, pode vir dobrado sem custo extra de mana; é dano mágico e bloqueado por BKB (bkbpierce: No).
- o que você faz com ele: Ogre Magi tem pouco HP cedo e nenhuma forma de fugir fora de item próprio; travado pelo Wraithfire Blast, não sobrevive ao crítico.
- itens que viram: Black King Bar neutraliza o Fireblast mesmo dobrado pelo Multicast; antes disso, o Magic Wand ajuda a absorver a poke dele na lane.
- como jogar: cuidado com o Multicast mesmo cedo, pode custar dois stuns seguidos antes do seu BKB. Depois do BKB, ele é um dos alvos mais fáceis de focar.
- fonte: pro_dados/skeleton_king.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast).

## Contra Pudge (pudge)

- placar: Wraith King venceu 35 de 92 partidas pro, 38,0%, o pior resultado entre os seis mais jogados.
- por que importa: quinto mais jogado contra o Wraith King e o único do grupo de "mais jogos" com desvantagem clara de verdade. Pudge costuma ser offlane ou roamer, não compartilha lane com o Wraith King, mas Meat Hook e Dismember atravessam o BKB dele.
- janelas: Pudge sai Phase Boots aos 6,9 min (861 jogos) e o próprio Blink aos 19,5 min, pouco antes do Blink do Wraith King (20,7). A partir daí ele caça em vez de farmar; a janela de maior perigo pro Wraith King é antes do Radiance (16,3 min), quando ele ainda não tem HP alto pra sobreviver a um hook puxado da jungla.
- o que ele faz com você: Meat Hook causa dano puro (até 360) e Dismember prende e drena vida por até 2,75s; os dois têm bkbpierce: Yes (constants_abilities.json), ou seja, o BKB do Wraith King não bloqueia nem o puxão nem o canal.
- o que você faz com ele: Pudge tem pouco dano fora do combo; travado pelo Wraithfire Blast, o crítico resolve rápido, mas atenção que o Dismember dele também cura com o próprio dano causado.
- itens que viram: nenhum item padrão do Wraith King bloqueia Dismember ou Meat Hook. A resposta real é visão (observer/sentry) pra não ser hookado fora de posição, e vida alta cedo (Soul Ring ou Armlet) pra sobreviver ao canal caso seja pego.
- como jogar: não ande sem visão em corredor estreito contra um Pudge com Meat Hook pronto (recarga de 12 a 18s). Se for pego, gaste o Wraithfire Blast nele assim que o Dismember soltar, pra matar antes dele se curar de novo.
- fonte: pro_dados/skeleton_king.json; pro_dados/pudge.json; constants_abilities.json (pudge_meat_hook, pudge_dismember).

## Contra Skywrath Mage (skywrath_mage)

- placar: Wraith King venceu 44 de 88 partidas pro, 50,0%.
- por que importa: sexto mais jogado no banco pro, suporte do maior dano mágico puro do jogo, mas sem mobilidade nem disable que sobreviva ao BKB do Wraith King.
- janelas: Skywrath Mage sai Arcane Boots cedo e tem Mystic Flare desde o nível 6. Até o Radiance (16,3 min), Ancient Seal mais a poke básica ainda doem; depois disso o Wraith King já tem HP e lifesteal suficientes pra ignorar boa parte do dano mágico dele.
- o que ele faz com você: Ancient Seal aumenta o dano mágico recebido em até 35% por até 6s e silencia; Mystic Flare soma até 1.600 de dano numa área pequena (170 de raio) se o alvo ficar parado dentro. As duas são bloqueadas por BKB (bkbpierce: No).
- o que você faz com ele: Skywrath Mage tem o menor HP da lista; travado pelo Wraithfire Blast, morre de um crítico só, mesmo sem Ancient Seal nele (o Seal amplifica dano mágico recebido, não afeta o físico do Wraith King).
- itens que viram: Black King Bar apaga o combo inteiro dele; antes disso, é questão de não ficar parado dentro do raio da Mystic Flare.
- como jogar: cuidado com Ancient Seal mais Mystic Flare antes do seu BKB, principalmente sozinho. Depois do BKB, ele é alvo prioritário, não aguenta nem um golpe normal com crítico.
- fonte: pro_dados/skeleton_king.json; pro_dados/skywrath_mage.json; constants_abilities.json (skywrath_mage_ancient_seal, skywrath_mage_mystic_flare).

## Contra Luna (luna)

- placar: Wraith King venceu 39 de 83 partidas pro, 47,0%.
- por que importa: carry pos1 mais jogado contra o Wraith King depois do Shadow Fiend. Raramente compartilha lane (cada time só põe um pos1 por vez, geralmente em lanes opostas), mas é o confronto de power spike que decide quem fecha o jogo primeiro: Luna farma bem mais rápido, 695 de GPM médio em pro contra 556 do Wraith King (pro_dados).
- janelas: até os 10 min os dois correm botas quase junto (Luna 5,6 min, Wraith King 6,3 min). Dos 10 aos 18 min Luna monta Yasha (13,7) e Diadem (14,9) rumo a Manta Style (17,2 min, mediano em 1.862 jogos), antes do Radiance do Wraith King (16,3) terminar de valer sozinho. O Blink dele (20,7) chega antes do Black King Bar dela (25,5) e do Butterfly (26,1), uma janela de 5 a 6 minutos pra pegá-la sem evasão alta.
- o que ela faz com você: Moon Glaives ricocheteiam em até 500 de raio e atravessam BKB (bkbpierce: Yes), então mesmo com o seu BKB ativo ela continua acertando os esqueletos do Bone Guard perto de você; Eclipse dispara estrelinhas com o dano do Lucent Beam atual dela (até 300 por acerto no nível 4, constants_abilities.json), bloqueado por BKB (bkbpierce: No).
- o que você faz com ela: antes do Manta (17,2 min), Luna não tem disjoint nenhum; o Wraithfire Blast trava e o crítico resolve rápido. Depois do Manta e principalmente do Butterfly (35% de evasão), seus ataques físicos começam a errar sem Monkey King Bar.
- itens que viram: Monkey King Bar é o item que resolve depois do Butterfly dela; antes disso, é corrida de farm pura, quem fecha o próprio pico primeiro decide.
- como jogar: cace a Luna antes dos 17 min, ela não tem escape de verdade. Se o jogo passar dos 26 min sem vantagem de torre, leve MKB antes de forçar a troca 1x1.
- fonte: pro_dados/skeleton_king.json; pro_dados/luna.json; constants_abilities.json (luna_eclipse, luna_moon_glaive).

## Contra Chaos Knight (chaos_knight)

- placar: Wraith King venceu 38 de 73 partidas pro, 52,1%.
- por que importa: outro pos1/pos2 clássico com um stun longo que parece perigoso, mas boa parte do kit dele é bloqueada por BKB, o que explica o Wraith King ficar levemente favorito.
- janelas: os dois correm botas rápido (Chaos Knight 6,1 min, Wraith King 6,3 min). Chaos Knight monta Armlet cedo (11,7 min) pra farmar mais rápido, enquanto o Wraith King só pega ritmo de farm de verdade no Radiance (16,3). Os Blinks chegam quase juntos, 21,2 min dele contra 20,7 do Wraith King; dali em diante é questão de quem puxa a luta primeiro.
- o que ele faz com você: Chaos Bolt atordoa até 3,25s no nível 4, o maior stun single-target da lista, e com Aghanim's Shard cria uma ilusão de Phantasm que ataca o alvo durante o stun. Reality Rift reduz armadura em até 7 e puxa o Chaos Knight pra perto. Nenhuma das duas atravessa BKB (bkbpierce: No nas duas, constants_abilities.json).
- o que você faz com ele: sem Chaos Bolt, ele não tem como travar o Wraith King; o Wraithfire Blast trava ele e o crítico de Mortal Strike ignora boa parte do HP extra que o Armlet dá.
- itens que viram: Black King Bar apaga o Chaos Bolt mesmo com Shard, e a Reality Rift; depois disso vira troca de crítico contra crítico, decidida por quem tem mais HP e lifesteal, geralmente o Wraith King.
- como jogar: force a troca depois do seu BKB, ele perde o único jeito de travar você. Antes disso, cuidado com Chaos Bolt vindo de longe (até 750 de alcance com talento).
- fonte: pro_dados/skeleton_king.json; pro_dados/chaos_knight.json; constants_abilities.json (chaos_knight_chaos_bolt, chaos_knight_reality_rift); https://api.opendota.com/api/constants/aghs_desc (Chaos Knight Aghanim's Shard).

## Contra Templar Assassin (templar_assassin)

- placar: Wraith King venceu 36 de 61 partidas pro, 59,0%, o melhor resultado entre os carries pos1 "puros" da lista.
- por que importa: terceiro carry mais jogado contra o Wraith King e a prova de que Refraction sozinha não resolve contra um herói de crítico único e grande.
- janelas: Templar Assassin sai muito mais rápido no early (73 LH aos 10 min contra 56 do Wraith King); Desolator (14,3 min) e Blink (17,4 min) chegam bem antes do Blink dele (20,7). A corrida muda de lado depois disso: o Radiance (16,3) e o Shard (23,7) do Wraith King dão sustentação e burst que a Templar Assassin não responde fácil sem o próprio BKB, que sai tarde (28,1 min).
- o que ela faz com você: Refraction absorve um número fixo de instâncias de dano físico e mágico por 17s e, com Aghanim's Shard, pode ser recastada mesmo enquanto atordoada, ou seja, ela pode reaplicar Refraction durante o seu Wraithfire Blast. Psi Blades causam dano puro em linha, ignorando a armadura alta que o Wraith King acumula tarde.
- o que você faz com ela: Templar Assassin tem HP baixo fora de itens; um crítico de Mortal Strike costuma gastar as cargas de Refraction de uma vez, e a maldição do seu Aghanim's Shard (75% do crítico, dano puro 3s depois) ainda chega mesmo que ela tenha absorvido o golpe inicial, porque a maldição é aplicada como debuff no momento do crítico, não depois.
- itens que viram: o seu Aghanim's Shard pesa mais aqui, porque a maldição ignora o que a Refraction consumiu; do lado dela, o Desolator ajuda a furar a sua armadura mais cedo, mas não resolve contra o burst duplo de crítico mais maldição.
- como jogar: gaste um ataque qualquer nela antes do combo de verdade, pra consumir uma carga de Refraction sem desperdiçar o crítico real. Depois disso, Wraithfire Blast mais crítico com Shard costuma resolver a luta sozinho.
- fonte: pro_dados/skeleton_king.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_refraction, templar_assassin_psi_blades); https://api.opendota.com/api/constants/aghs_desc (Templar Assassin e Wraith King Aghanim's Shard).

## Contra Zeus (zuus)

- placar: Wraith King venceu 41 de 59 partidas pro, 69,5%, o melhor resultado de toda a lista com 30 ou mais jogos.
- por que importa: o matchup mais favorável ao Wraith King na amostra inteira. Zeus é um mid de dano mágico global sem nenhum disable, e tudo que ele tem é bloqueado por BKB.
- janelas: Zeus sai Arcane Boots (9,7 min) e empurra lane com Arc Lightning desde cedo, incomodando sem impedir o farm. O Wraith King sobe a curva normal (Radiance 16,3, Blink 20,7, Shard 23,7) enquanto Zeus ainda está montando Aghanim's Shard (16,1 min) ou Scepter (23,3 min).
- o que ele faz com você: Thundergod's Wrath causa até 650 de dano mágico global e dá visão verdadeira por 3s no mapa inteiro, útil pra achar o Wraith King escondido, mas sozinho não mata contra o lifesteal inato dele. Static Field soma dano passivo a cada feitiço acertado. Nenhum dos dois atravessa BKB (bkbpierce: No).
- o que você faz com ele: Zeus tem HP baixo e nenhum disable; travado pelo Wraithfire Blast, não tem como fugir, e o crítico resolve rápido.
- itens que viram: Black King Bar apaga o kit inteiro dele; mesmo sem BKB, o dano mágico de Zeus raramente compete com o lifesteal inato do Wraith King (Vampiric Spirit, 14% de vampirismo, constants_abilities.json: skeleton_king_vampiric_spirit).
- como jogar: não tenha medo de caçar o Zeus cedo, ele não tem como impedir. A única atenção real é a visão verdadeira do ultimate, que pode revelar sua posição pro time inteiro.
- fonte: pro_dados/skeleton_king.json; pro_dados/zuus.json; constants_abilities.json (zuus_thundergods_wrath, zuus_static_field).

## Contra Abaddon (abaddon)

- placar: Wraith King venceu 23 de 34 partidas pro, 67,6% (amostra pequena, segundo melhor resultado da lista).
- por que importa: suporte de sustentação pura, sem disable de verdade, entra pelo contraste de vantagem (30 ou mais jogos) e mostra que proteção sem controle não segura o Wraith King.
- janelas: Abaddon sai Phase Boots (6,5 min) e Relic (13,7 min) rumo a um Radiance próprio (16,3 min, igual ao timing do Wraith King), perfil de semi-carry. Isso significa que ele costuma estar ocupado farmando no meio do jogo em vez de proteger o aliado principal o tempo todo.
- o que ele faz com você: Aphotic Shield absorve até 210 de dano e estoura em área ao expirar ou ser quebrado; Borrowed Time transforma o dano recebido dele em cura por até 6s quando a vida cai abaixo de 400, e com Aghanim's Scepter dispara Mist Coil automático pros aliados perto dele que levarem mais de 550 de dano. Nenhuma das duas trava o Wraith King, é defesa, não controle.
- o que você faz com ele: sem disable, Abaddon só atrasa a morte de quem você está focando; o Wraithfire Blast mais o crítico resolvem o alvo real enquanto o Aphotic Shield dele só adia por alguns segundos.
- itens que viram: nenhum item seu precisa mudar por causa do Abaddon especificamente; o problema dele é estrutural, falta de controle, não um item que o Wraith King precise responder.
- como jogar: ignore o Abaddon e foque o alvo que você já escolheu, ele não consegue impedir o combo, só atrasar.
- fonte: pro_dados/skeleton_king.json; pro_dados/abaddon.json; constants_abilities.json (abaddon_aphotic_shield, abaddon_borrowed_time); https://api.opendota.com/api/constants/aghs_desc (Abaddon Aghanim's Scepter).

## Contra Timbersaw (shredder)

- placar: Wraith King venceu 20 de 30 partidas pro, 66,7% (amostra pequena, terceiro melhor resultado da lista).
- por que importa: offlane de dano puro que escala bem, mas sem nenhum stun; entra pelo contraste de vantagem com 30 ou mais jogos.
- janelas: Timbersaw sai Soul Ring cedo (7,6 min) e monta Kaya and Sange (18,1 min) como item central, bastante dano mágico sustentado, mas nenhum controle. O Wraith King sobe a curva normal e, a partir do Radiance (16,3), já tem HP e lifesteal suficientes pra ignorar boa parte do dano dele.
- o que ele faz com você: Whirling Death e Chakram causam dano puro, ignorando armadura, e Timber Chain dá mobilidade pra chegar perto ou fugir rápido. Nenhuma das três é um stun, só dano e um leve slow.
- o que você faz com ele: sem disable, o Wraithfire Blast trava o Timbersaw sem resposta; o crítico de Mortal Strike resolve mesmo com a Reactive Armor dele reduzindo um pouco o dano físico.
- itens que viram: nenhum item específico muda o confronto; o dano dele é puro e ignora armadura, então BKB não ajuda contra isso, mas também não precisa, já que ele não tem controle pra travar o Wraith King primeiro.
- como jogar: não entre em troca prolongada parado perto de árvore (Whirling Death bate mais forte nelas), mas pode iniciar nele sem medo de ficar preso, ele não tem stun.
- fonte: pro_dados/skeleton_king.json; pro_dados/shredder.json; constants_abilities.json (shredder_whirling_death, shredder_chakram, shredder_timber_chain).

## Contra Grimstroke (grimstroke)

- placar: Wraith King venceu 11 de 30 partidas pro, 36,7%, o pior resultado de toda a lista com 30 ou mais jogos.
- por que importa: um dos poucos confrontos da lista em que o controle do oponente atravessa o Black King Bar do Wraith King por completo.
- janelas: Grimstroke é um suporte padrão (wards perto dos 19 min, Arcane Boots 10,9 min) que segura mana até o nível 6 pra garantir o Soulbind na hora certa; o perigo real dele não depende de item, é o ultimate em si, disponível desde o nível 6 com recarga de 70s.
- o que ele faz com você: Soulbind amarra o Wraith King a um aliado por até 8s, fazendo parte do dano que um dos dois toma ser espelhado no outro, e atravessa BKB por completo (bkbpierce: Yes, constants_abilities.json). Com Aghanim's Shard, Ink Swell ainda cura e protege o aliado dentro da troca.
- o que você faz com ele: Grimstroke tem HP baixo; se o Wraithfire Blast acerta ele antes do Soulbind sair, o combo nem acontece, mas ele costuma lançar o ultimate de longe (700 a 900 de alcance) antes de se expor.
- itens que viram: nenhum item seu bloqueia Soulbind, nem BKB; a resposta é matar o Grimstroke primeiro ou focar o aliado amarrado junto com você pra zerar o espelhamento rápido, não arrastar a troca.
- como jogar: trate o Grimstroke como prioridade de kill assim que ele aparecer na luta, o seu BKB não resolve o Soulbind.
- fonte: pro_dados/skeleton_king.json; pro_dados/grimstroke.json; constants_abilities.json (grimstroke_soul_chain); https://api.opendota.com/api/constants/aghs_desc (Grimstroke Aghanim's Shard).

## Contra Tusk (tusk)

- placar: Wraith King venceu 12 de 31 partidas pro, 38,7%, segundo pior resultado da lista com 30 ou mais jogos.
- por que importa: suporte de iniciação e pick-off cujo próprio crítico atravessa o BKB do Wraith King, quase um "Wraith King dentro do kit do inimigo".
- janelas: Tusk sai Blood Grenade cedo (6,1 min) e monta Blink aos 19,0 min, pouco antes do Blink do Wraith King (20,7); ele costuma iniciar antes dele conseguir responder.
- o que ele faz com você: Snowball inicia em grupo e atordoa, Ice Shards corta rota de fuga. Walrus PUNCH! é um modificador de ataque autocast com até 300% de dano crítico no nível 3, e atravessa BKB (bkbpierce: Yes, constants_abilities.json), então mesmo com o seu BKB ativo o crítico dele continua acertando igual.
- o que você faz com ele: Tusk tem HP razoável mas nenhum disjoint de verdade fora do próprio Snowball; travado pelo Wraithfire Blast, o seu crítico ainda bate mais forte que o dele.
- itens que viram: Black King Bar ajuda contra Snowball e Ice Shards, mas não contra o Walrus PUNCH!. A diferença real é terreno, Ice Shards corta uma rota só, então sempre deixe uma segunda saída aberta antes de entrar em troca perto dele.
- como jogar: não fique parado numa linha reta de parede potencial entre você e ele. Se for pego pelo combo Snowball mais Ice Shards, gaste a Reincarnation em vez de tentar fugir, ela segura a morte.
- fonte: pro_dados/skeleton_king.json; pro_dados/tusk.json; constants_abilities.json (tusk_walrus_punch, tusk_snowball, tusk_ice_shards).

## Contra Alchemist (alchemist)

- placar: Wraith King venceu 6 de 12 partidas pro, 50,0% (amostra pequena, só 12 jogos de pro no período coberto).
- por que importa: os dois raramente disputam a mesma lane, cada time normalmente escala um pos1 só, mas são o tipo de confronto que decide o jogo tarde sozinho, dois carries str de farm rápido com Radiance no núcleo. É o par que motivou esse arquivo: Alchemist farma mais rápido, 768 de GPM médio em pro contra 556 do Wraith King (pro_dados), e tira o Radiance cerca de 2 minutos antes, 13,9 min mediano contra 16,3.
- janelas: até os 13-14 min Alchemist já está puxando a frente de farm puro, ajudado por Goblin's Greed e Soul Ring (6,0 min). O Radiance dele sai primeiro, então se o jogo chegar aos 20 min parado, ele provavelmente tem mais itens que o Wraith King. Depois disso o Wraith King alcança com o Shard (23,7 min) e o crítico de Mortal Strike, que o Alchemist não tem disable pra evitar.
- o que ele faz com você: Unstable Concoction atordoa até 3,2s em área, mas é bloqueado por BKB (bkbpierce: No); Chemical Rage dá sustentação e velocidade por 30s, útil pra correr do combo ou perseguir durante o farm, mas não impede o stun nem o crítico do Wraith King.
- o que você faz com ele: sem BKB, o Unstable Concoction do Alchemist trava o Wraith King primeiro, então a ordem da troca importa. Uma vez que o Wraithfire Blast acerta, ele não tem fuga real fora do Chemical Rage, e o crítico resolve rápido porque não é um herói de armadura alta.
- itens que viram: a corrida de Radiance decide até os 20 min, quem fecha primeiro farma mais rápido no meio do mapa; depois disso, a maldição de dano puro do seu Shard ignora qualquer sustentação que o Chemical Rage ofereça.
- como jogar: não brigue de farm puro contra um Alchemist que já tem Radiance, vá atrás dele com o Wraithfire Blast antes que ele feche Scepter (22,4 min) ou BKB (25,1 min) próprios. Depois do seu Shard, a troca 1x1 já favorece o Wraith King.
- fonte: pro_dados/skeleton_king.json; pro_dados/alchemist.json; constants_abilities.json (alchemist_unstable_concoction, alchemist_chemical_rage).

## Contra Morphling (morphling)

- placar: Wraith King venceu 9 de 16 partidas pro, 56,2% (amostra pequena, só 16 jogos de pro no período coberto).
- por que importa: o outro par citado na origem do pedido, dois hard carries que quase nunca brigam de lane, mas cujo 1x1 de poder tarde decide. Morphling farma rápido no início (Power Treads 6,0 min), mas depende de evasão e sustentação pra sobreviver ao crítico do Wraith King, não de controle.
- janelas: até os 14 min os dois estão em ritmo parecido de botas e itens de agilidade ou força. Morphling monta Yasha (14,6 min) rumo a Manta Style (18,4 min), que dá dispel e ilusões, quase junto com o Blink do Wraith King (20,7). Depois disso, o Morphling de alto nível busca Butterfly (25,8 min) pra ganhar evasão alta contra os ataques físicos dele, que ainda não tem Monkey King Bar nessa fase.
- o que ele faz com você: Adaptive Strike atordoa até 2,6s e empurra à distância, podendo travar o Wraith King antes dele chegar perto; Waveform dá um dash curto, útil pra escapar do alcance do Wraithfire Blast se usado no tempo certo. Nenhuma das duas atravessa BKB (bkbpierce: No nas duas).
- o que você faz com ele: antes do Manta (18,4 min), Morphling não tem resposta pro combo; depois do Butterfly (25,8 min, evasão alta), os ataques normais do Wraith King passam a errar com mais frequência, o que também reduz a chance do crítico de Mortal Strike conectar.
- itens que viram: Monkey King Bar é o item que resolve depois do Butterfly dele, furando a evasão e garantindo que o crítico acerte; antes disso, o Blink do Wraith King decide, pegando o Morphling fora de posição antes do Manta ficar pronto.
- como jogar: cace o Morphling antes dos 18 min, ele não tem disjoint de verdade cedo. Se o jogo passar dos 25 min sem vantagem, leve MKB antes de forçar o 1x1 final.
- fonte: pro_dados/skeleton_king.json; pro_dados/morphling.json; constants_abilities.json (morphling_adaptive_strike_agi, morphling_waveform).
