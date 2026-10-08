---
id: confrontos-templar_assassin
heroi: Templar Assassin
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ursa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/luna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/troll_warlord.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/phantom_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/kunkka.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/bounty_hunter.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/bane.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/morphling.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Contra Shadow Fiend (nevermore)
- placar: Templar Assassin venceu 212 de 431 partidas pro (49,2%). É o oponente que mais aparece na base de confrontos dela.
- por que importa: maior volume de jogos pro de toda a lista (431). É o rival clássico de mid: os dois disputam a mesma lane na maioria das partidas, e os dois vivem de puxar farm rápido pra virar burst físico de meio de jogo.
- janelas: até os 10 min Shadow Fiend é mais agressivo, com Mask of Madness pronta por volta dos 10:12 (pro_dados/nevermore.json) pra forçar troca cedo. Dos 13 aos 14 min os dois emparelham em item de poder: ele com Blade of Alacrity/Yasha (12:42-13:18), você com Mithril Hammer (13:18) virando Desolator aos 14:18 (pro_dados/templar_assassin.json). Aos 17:24 você abre vantagem de mobilidade com o Blink, que ele não compra nessa amostra. Depois dos 25:12 ele tem Black King Bar, bem depois do seu pico.
- o que ele faz com você: Shadowraze (85 a 280 de dano mágico numa das três direções, recarga de só 3 s) soma dano por stack de Necromastery (1,35 por alma guardada, até 20 almas). Requiem of Souls, a ultimate, solta até 20 linhas de energia que amedrontam e reduzem resistência mágica, e dispara sozinha mesmo se ele morrer no processo.
- o que você faz com ele: Meld emboscado (bônus de 50 a 200 de dano e -2 a -8 de armadura por 6 s, dividido entre quem estiver atrás via Psi Blades) seguido do Desolator resolve ele rápido, porque ele não tem blink nem disable de longo alcance pra fugir. Refraction, com as instâncias certas, bloqueia por inteiro as linhas do Requiem se você já estiver com a barreira ativa quando ele soltar.
- itens que viram: Desolator (-6 de armadura por 7 s) somado ao Mithril Hammer acelera o burst antes do Black King Bar dele (25:12) ficar pronto; Blink Dagger garante a emboscada do Meld sem ele ver você chegando.
- como jogar: não troque corpo a corpo com ele enquanto a Mask of Madness estiver ativa sem ter Refraction de prontidão; a partir dos 14 min, com Desolator fechado, procure o combo assim que ele gastar um Shadowraze perto da wave, antes do Black King Bar dele consolidar aos 25 min.
- fonte: pro_dados/templar_assassin.json (confrontos, itens); pro_dados/nevermore.json (itens); constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, nevermore_necromastery, templar_assassin_refraction, templar_assassin_meld).

## Contra Rubick (rubick)
- placar: Templar Assassin venceu 140 de 280 partidas pro (50,0%, equilibrado). Segundo oponente mais comum da base.
- por que importa: segundo maior volume de jogos pro (280). GPM baixo (374, resumo de pro_dados/rubick.json) confirma o perfil de suporte roamer, que aparece em quase todo draft mesmo sem dividir lane fixa com ela.
- janelas: Rubick não tem pico de farm (GPM médio 374, bem abaixo do dela); o pico dele é de ultimate, Spell Steal recarrega em só 16 a 4 s conforme o nível. Você fecha Desolator aos 14:18 e Blink aos 17:24, bem antes do Blink dele (21:36 mediano, partidas pro 7.40-7.41 (OpenDota)) e do Aghanim's Shard dele (27:00, partidas pro 7.40-7.41 (OpenDota)).
- o que ele faz com você: Telekinesis levanta um alvo e estuna em área quando ele cai, trava seu combo mesmo com Refraction ativa, já que a barreira bloqueia dano, não disable. Spell Steal fura imunidade a magia (bkbpierce: Yes, constants_abilities.json) e rouba a última magia que você lançou, inclusive a Refraction, devolvendo a barreira contra você.
- o que você faz com ele: Rubick tem pouca vida fixa e nenhuma fuga própria antes do Blink dele (21:36 mediano, partidas pro 7.40-7.41 (OpenDota)). Meld emboscado com Blink resolve ele rápido, porque ele depende só de acertar o Telekinesis primeiro pra ter chance.
- itens que viram: seu Blink (17:24) chega cerca de 4 minutos antes do dele (21:36 mediano), então na maior parte do jogo você escolhe o momento da luta; cuidado ao lançar Refraction perto dele sem necessidade, é exatamente o tipo de magia que o Spell Steal rouba.
- como jogar: não ative Refraction só pra farmar perto de um Rubick livre achando que está segura; priorize matá-lo assim que achar brecha, antes dele consolidar o combo de Telekinesis no nível 6.
- fonte: pro_dados/templar_assassin.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal bkbpierce Yes; templar_assassin_refraction bkbpierce Yes).

## Contra Disruptor (disruptor)
- placar: Templar Assassin venceu 129 de 248 partidas pro (52,0%). Terceiro oponente mais comum da base.
- por que importa: terceiro maior volume de jogos (248). Suporte duro de disable em área, GPM baixíssimo (279, resumo de pro_dados/disruptor.json) confirma o perfil, funciona como contra-pick funcional de qualquer herói de blink/mobilidade, mesmo sem dividir lane.
- janelas: GPM baixo dele (279) não dá pico de farm; o pico é nível 6 com Static Storm, seguido de Blink (24:00) e Aghanim's Scepter (34:54, deixa o Static Storm silenciar também o uso de item). Você fecha Desolator aos 14:18 e Blink aos 17:24, bem antes do combo completo dele ficar pronto.
- o que ele faz com você: Kinetic Field forma uma parede redonda que impede saída (unidade imune a debuff passa direto). Static Storm silencia tudo num raio de 550 por 6 s com 20 pulsos de dano crescente (até 350 de dano por segundo no nível 3, constants_abilities.json), consumindo rapidinho as instâncias da sua Refraction, já que cada pulso conta como uma instância de dano separada. Como Refraction e Meld são magias, mesmo instantâneas, um silence bem cronometrado impede as duas de serem lançadas.
- o que você faz com ele: Disruptor não tem fuga além do Glimmer Cape (22:42) e não tem Blink antes dos 24 min; uma emboscada de Meld cedo, antes do nível 6 dele, resolve sozinha porque ele depende 100% de acertar o combo primeiro.
- itens que viram: seu Black King Bar (28:06, tardio) é a resposta direta quando o jogo estica, mas antes disso a única defesa real é matá-lo rápido ou saber onde ele está antes de entrar em luta.
- como jogar: cace Disruptor antes do nível 6, quando possível; depois disso, não entre em teamfight sem checar a posição dele, porque Kinetic Field seguido de Static Storm cancela sua defesa de Refraction e Meld num cast só.
- fonte: pro_dados/templar_assassin.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_kinetic_field, disruptor_static_storm: pulses 20, damage_max 200/275/350).

## Contra Ogre Magi (ogre_magi)
- placar: Templar Assassin venceu 108 de 229 partidas pro (47,2%, leve desvantagem). Quarto oponente mais comum da base.
- por que importa: quarto maior volume de jogos (229). Suporte de GPM baixo (315, resumo de pro_dados/ogre_magi.json) com o disable mais simples do jogo contra combo de melee, o Fireblast.
- janelas: o pico dele é nível 6-7, quando Multicast (chance de repetir Fireblast/Ignite/Bloodlust de graça, escala com Força) começa a procar com frequência; os itens dele chegam devagar, Soul Ring entre 11:23 e 13:03, Blink só entre 25:50 e 28:57. Você fecha Desolator aos 14:18 e Blink aos 17:24, bem antes do combo dele ficar consistente.
- o que ele faz com você: Fireblast (1,2 s de stun, alcance 525) trava você antes de puxar a Refraction. Com Multicast, o mesmo Fireblast pode repetir no mesmo alvo a cada 0,6 s, reaplicando o stun de graça; Ignite ainda desacelera 25% e queima, dificultando fugir depois.
- o que você faz com ele: Ogre Magi tem pouquíssima mobilidade e nenhuma fuga antes do Blink dele (25:50 em diante); Meld emboscado antes do nível 6-7, quando o Multicast ainda não proca direito, resolve ele rápido.
- itens que viram: Desolator acelera o kill antes do Multicast virar ameaça de verdade; seu Blink garante a emboscada do Meld antes do dele estar pronto.
- como jogar: ataque Ogre Magi antes do nível 6-7; depois disso, cuidado redobrado com o Fireblast podendo repetir e travar você duas vezes seguidas sem custo extra de mana pra ele.
- fonte: pro_dados/templar_assassin.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_multicast).

## Contra Jakiro (jakiro)
- placar: Templar Assassin venceu 100 de 224 partidas pro (44,6%, pior confronto do grupo de maior volume). Quinto oponente mais comum da base.
- por que importa: quinto maior volume de jogos (224) e a menor taxa de vitória dela entre os seis oponentes mais frequentes, vale o aviso mesmo sendo suporte fixo (GPM 315, LH10 8, resumo de pro_dados/jakiro.json).
- janelas: o pico de Jakiro é o nível 6, quando a ultimate Macropyre fica disponível; os itens dele são lentos, Arcane Boots aos 11:42, Aghanim's Scepter tarde e sem minuto claro na amostra. Você chega no seu pico de Desolator (14:18) e Blink (17:24) bem antes disso, mas se ele lançar Macropyre em cima da sua rota de farm, nega seu ritmo mesmo sem te matar.
- o que ele faz com você: Macropyre, lançada numa faixa longa, aplica dano contínuo não dispelável por até 10 s (100 a 200 de dano por segundo), consumindo instâncias da sua Refraction a cada tick. Ice Path (stun de até 2 s no nível 4) trava você antes de reagir, e o combo Ice Path mais Macropyre é quase impossível de limpar.
- o que você faz com ele: Jakiro tem baixíssima mobilidade e vida de suporte puro; ele depende 100% de acertar o Ice Path primeiro, então ficar fora da visão de ward dele ou matá-lo antes do nível 6 evita o combo inteiro.
- itens que viram: não existe item seu que resolva o combo dele sozinho, já que Macropyre não é dispelável; a resposta é posicionamento (sair da área assim que ela cai) e timing (matar antes do nível 6).
- como jogar: evite lanes ou jungle onde ele tem visão de ward antes do nível 6; depois disso, saia da área assim que a Macropyre cair, a Refraction sozinha não aguenta os ticks inteiros dela.
- fonte: pro_dados/templar_assassin.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_macropyre dispellable No; combo com Ice Path).

## Contra Lion (lion)
- placar: Templar Assassin venceu 122 de 216 partidas pro (56,5%, a melhor taxa entre os seis oponentes mais frequentes). Sexto oponente mais comum da base.
- por que importa: sexto maior volume de jogos (216) e a maior vantagem dela entre os suportes mais jogados contra ela, mostra onde ela realmente domina mesmo sendo um suporte caçador clássico.
- janelas: o pico dele é o nível 6 com Finger of Death (600 a 850 de dano), mas ele precisa travar primeiro com Earth Spike e Hex; o Blink dele sai cedo, mediana 18:12 (partidas pro 7.40-7.41, OpenDota). Você fecha Desolator aos 14:18, antes disso, e seu Blink (17:24) chega quase junto do dele.
- o que ele faz com você: Hex transforma você numa fera por 2,8 s, sem habilidade nem ataque, seguido de Earth Spike (1,3 a 2,2 s de stun) abre caminho pro Finger of Death. Como Hex não fura Black King Bar, se você tiver BKB pronto o combo falha, mas na maior parte do jogo ele ainda não chegou nos 28:06 do seu BKB mediano.
- o que você faz com ele: Lion tem pouquíssima vida e nenhuma fuga própria antes do Blink dele (18:12 mediano, partidas pro 7.40-7.41 (OpenDota)); Meld emboscado ou Desolator com crítico cedo mata ele antes dele sequer ter alcance pro combo (Earth Spike e Hex ficam entre 575 e 650 de alcance).
- itens que viram: Refraction absorve o dano fixo do Finger of Death, mas não impede Hex nem Earth Spike, que são disable e não dano; o item que realmente resolve é o seu Blink, pra matar ele antes dele reagir.
- como jogar: cace Lion sempre que ele aparecer sozinho, antes do nível 6; depois disso, trate o Hex dele como indefensável e evite ficar isolada quando ele tiver os dois disables prontos.
- fonte: pro_dados/templar_assassin.json; pro_dados/lion.json; constants_abilities.json (lion_voodoo bkbpierce No).

## Contra Ursa (ursa)
- placar: Templar Assassin venceu 112 de 203 partidas pro (55,2%). Carry pos1 mais jogado contra ela em pro, entre os heróis de mesma posição principal.
- por que importa: os dois são carries puros pos1 (heroes.json, role Carry) e o confronto mais jogado em pro entre eles (203 jogos), mesmo raramente dividindo lane, porque disputam o mesmo papel de farm rápido e burst de 1x1.
- janelas: até os 14 min os dois emparelham em item de poder, Ursa com Battle Fury quase pronto (13:42, pro_dados/ursa.json) pro farm de cleave, você com Desolator (14:18) pro burst. Aos 17 min o Blink dos dois chega quase junto (Ursa 16:48, você 17:24): quem iniciar primeiro ganha a troca. Depois dos 22 min, Ursa tem Basher (22:30) pra travar, e o Overpower dele (3 a 6 ataques com +400% de velocidade de ataque) vira ameaça de kill puro, só limitado pelo Enrage no nível 6.
- o que ele faz com você: Overpower acertando você consome as instâncias da Refraction em menos de um segundo, porque são muitos golpes muito rápidos; depois o dano cru passa direto. Earthshock (salto de 250, slow de 22 a 40%, dano em área) evita que você fuja em seguida.
- o que você faz com ele: Ursa não tem defesa contra burst de alvo único fora do Enrage (nível 6 em diante); se você acertar o primeiro golpe com Meld e Psi Blades fora da janela do Overpower dele, o Enrage ainda limpa debuff mas não desfaz o dano já aplicado.
- itens que viram: seu Desolator reduz a armadura dele, empurrando o burst inicial antes do Overpower começar; do lado dele, Basher trava você pra não fugir do Overpower, e Monkey King Bar (situacional na build dele) garante acerto contra a evasão que vem de Butterfly ou de Refraction.
- como jogar: evite trocar corpo a corpo quando ele já tiver Overpower disponível (recarga curta no nível 4); use o Blink pra abrir o combo antes dele abrir o dele, quem inicia o Overpower primeiro geralmente ganha a troca.
- fonte: pro_dados/templar_assassin.json; pro_dados/ursa.json; constants_abilities.json (templar_assassin_refraction, instances 3-6).

## Contra Luna (luna)
- placar: Templar Assassin venceu 97 de 191 partidas pro (50,8%, equilibrado). Segundo carry pos1 mais jogado contra ela.
- por que importa: segundo maior volume entre os oponentes de mesma posição principal (191 jogos). Farm race clássico entre duas carries de agilidade que escalam rápido com crítico e burst.
- janelas: até os 14 min os dois emparelham, Luna com Yasha e Diadem (13:42-14:54, pro_dados/luna.json) pro farm com Moon Glaives, você com Desolator (14:18). Aos 17-18 min as duas têm mobilidade pronta, Luna com Manta (17:12), você com Blink (17:24). O nível 6 dela (Eclipse) é o pico de burst em área, mais forte à noite.
- o que ele faz com você: Eclipse chove de 6 a 12 raios do nível atual de Lucent Beam (até 5 por alvo) num raio de 675; cada raio é uma instância de dano separada.
- o que você faz com ele: Refraction no nível 4 dá 6 instâncias de barreira, suficiente pra absorver por inteiro os até 5 raios de Eclipse que acertariam você, se ativada um instante antes do cast dela. Fora da ultimate, Meld emboscado mata Luna rápido, porque ela tem pouca vida de agilidade pura.
- itens que viram: Refraction bem cronometrada é literalmente a resposta pra Eclipse; do lado dela, Butterfly (26:06) dá evasão que atrapalha seu acerto sem Monkey King Bar.
- como jogar: se perceber que ela vai ligar a Eclipse, ative Refraction um instante antes pra absorver os raios de graça. Fora da ultimate dela, é uma troca de farm normal, puxe pelo Desolator e Blink antes dela fechar o Manta.
- fonte: pro_dados/templar_assassin.json; pro_dados/luna.json; constants_abilities.json (luna_eclipse: beams 6/9/12, hit_count 5, radius 675; templar_assassin_refraction: instances 3/4/5/6, duration 17).

## Contra Tiny (tiny)
- placar: Templar Assassin venceu 97 de 181 partidas pro (53,6%). Terceiro carry pos1 mais jogado contra ela.
- por que importa: terceiro maior volume entre os de mesma posição principal (181 jogos). Os dois dependem de iniciação e burst de curto alcance, não de kite longo, então o confronto decide rápido.
- janelas: até os 15 min os dois ainda montam o combo, Tiny com Avalanche e Toss já disponíveis desde cedo mas sem item grande; aos 16 min o Blink dos dois chega quase junto (Tiny 15:54, você 17:24). O nível 6 dele (Grow) dá até +165 de dano e +15 de armadura, mas reduz 35% a velocidade de ataque, trocando DPS por dano por golpe.
- o que ele faz com você: Avalanche (5 tiques de dano e stun em 1,5 s) seguido de Toss (arremessa você em cima de outro alvo, 90 a 360 de dano) é o combo clássico de iniciação; cada tique da Avalanche consome uma instância da sua Refraction.
- o que você faz com ele: Grow reduz a velocidade de ataque dele em 35%, então numa troca prolongada sem o combo de Toss, você, mais rápida, sai na frente. Meld e Psi Blades antes dele ter Blink deixam a emboscada sem resposta.
- itens que viram: seu Desolator acelera o kill antes do BKB dele (26:42, tardio); seu Blink garante que você ataca primeiro, antes do combo Avalanche e Toss se formar.
- como jogar: não fique parada perto de aliados no raio de 300 do grab do Toss dele; depois que o combo dele for gasto, a troca corpo a corpo favorece você pela velocidade de ataque maior.
- fonte: pro_dados/templar_assassin.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_grow).

## Contra Troll Warlord (troll_warlord)
- placar: Templar Assassin venceu 33 de 54 partidas pro (61,1%, a maior vantagem da lista). Maior taxa de vitória entre os confrontos com 30 ou mais jogos.
- por que importa: outro carry pos1/pos2 de farm rápido (heroes.json, role Carry), e o melhor matchup registrado da lista, mostra onde a Templar Assassin realmente domina mesmo contra outro hiper carry físico.
- janelas: até os 13 min os dois emparelham em item de farm, Troll com Battle Fury quase pronto (13:24, pro_dados/troll_warlord.json), você com Desolator (14:18). Aos 17 min as duas têm mobilidade parecida, Troll com Yasha (17:12), você com Blink (17:24). Battle Trance, a ultimate dele, só vira ameaça séria depois do Black King Bar (24:42), bem depois do seu pico.
- o que ele faz com você: Fervor empilha velocidade de ataque a cada golpe seguido no mesmo alvo, então numa troca longa ele acelera; Berserker's Rage dá maim à distância e ensnare quando ele vira melee (Battle Stance).
- o que você faz com ele: numa troca curta e explosiva, o forte da Templar Assassin com Meld, Psi Blades e crítico, o Fervor dele não tem tempo de empilhar o suficiente antes do seu burst decidir a luta; Desolator reduz a armadura dele, amplificando ainda mais o dano inicial.
- itens que viram: Skull Basher dele (mediana 27:36, pro_dados/troll_warlord.json) tenta travar você pro Fervor empilhar, mas chega tarde se você já tiver Blink e Desolator prontos desde os 17 min; seu Blink garante o primeiro golpe antes dele reagir.
- como jogar: busque o confronto cedo, antes dele ter o Basher; se ele já tiver Fervor empilhado numa troca longa, recue, a vantagem dela é no burst inicial, não na troca prolongada.
- fonte: pro_dados/templar_assassin.json; pro_dados/troll_warlord.json.

## Contra Phantom Assassin (phantom_assassin)
- placar: Templar Assassin venceu 25 de 41 partidas pro (61,0%, segunda maior vantagem da lista).
- por que importa: segunda maior vantagem entre os confrontos com 30 ou mais jogos, e é o duelo de carry crítico contra carry crítico mais citado pelo público, bom contraste de dois assassinas de burst.
- janelas: até os 14 min você chega no Desolator (14:18) antes dela ter qualquer burst pronto (Battle Fury, 14:24, é item de farm, não de 1x1). Aos 17 min seu Blink está pronto; ela não tem gap closer próprio fora do Phantom Strike, que depende de atacar alguém primeiro. PA só fica perigosa de verdade depois do Desolator dela (20:42) e do Black King Bar (23:30).
- o que ele faz com você: Coup de Grace dá 17% de chance de crítico de 200 a 400% em qualquer ataque, inclusive o do Phantom Strike, que também atravessa Black King Bar. Um crítico bem cronometrado consome uma instância inteira da sua Refraction de uma vez, mesmo que o dano passe de 30.
- o que você faz com ele: PA não tem fuga própria antes da mobilidade dela consolidar; Meld emboscado com Psi Blades mata ela antes do crítico dela decidir, porque seu burst é mais consistente, sem depender de chance.
- itens que viram: seu Blink (17:24) chega bem antes de qualquer resposta de mobilidade dela; Monkey King Bar seria a resposta dela à sua evasão, mas é item situacional, raro de ver pronto a tempo nessa amostra (não está entre os 30 itens mais comprados em pro_dados/phantom_assassin.json).
- como jogar: ataque PA antes dela ter Desolator e BKB (20-23 min); depois disso, cuidado com o crítico do Coup de Grace, prefira abrir a luta você mesma em vez de deixá-la bater primeiro.
- fonte: pro_dados/templar_assassin.json; pro_dados/phantom_assassin.json.

## Contra Kunkka (kunkka)
- placar: Templar Assassin venceu 36 de 60 partidas pro (60,0%, terceira maior vantagem da lista).
- por que importa: terceira maior vantagem entre os confrontos com 30 ou mais jogos; Kunkka é mid/offlane com combo de longo alcance mas delay grande, bom contraste com a mobilidade dela.
- janelas: aos 7 min Kunkka já tem Phase Boots (7:00, pro_dados/kunkka.json) pra fechar distância; aos 14-17 min você tem Desolator e Blink prontos, bem antes do Black King Bar dele (25:00 mediano, pro_dados/kunkka.json). O combo dele, Torrent com 1,6 s de delay mais Ghostship chegando 3,1 s depois, exige chegar perto sem ser vista primeiro.
- o que ele faz com você: Torrent empurra pra cima e atordoa, Ghostship chega 3,1 s depois e estoura quem ainda está preso. O delay inteiro do combo, quase 5 s do Torrent até o Ghostship, dá tempo de sobra pra reagir com Refraction ou fugir com Blink antes do estouro.
- o que você faz com ele: Kunkka tem pouquíssima mobilidade, Shadow Blade e Silver Edge nem aparecem entre os itens mais comprados em pro_dados/kunkka.json; Meld emboscado ou Blink com Psi Blades mata ele fácil enquanto ele ainda depende de Phase Boots pra perseguir.
- itens que viram: sua mobilidade (Blink aos 17:24) chega muito antes da dele, que não tem item de blink ou invisibilidade entre os mais comprados em pro_dados/kunkka.json, então você controla o tempo da troca; Silver Edge dele quebraria uma passiva sua, mas não existe passiva relevante no kit dela pra quebrar, Psi Blades é dano, não evasão.
- como jogar: puna Kunkka cedo, antes do Black King Bar dele (25:00 mediano); se ele acertar o Torrent, afaste-se o suficiente pra não estar perto quando o Ghostship cair, 3 segundos depois.
- fonte: pro_dados/templar_assassin.json; pro_dados/kunkka.json; constants_abilities.json (kunkka_torrent delay 1.6; kunkka_ghostship tooltip_delay 3.1).

## Contra Bounty Hunter (bounty_hunter)
- placar: Templar Assassin venceu 11 de 36 partidas pro (30,6%, pior confronto da lista).
- por que importa: pior taxa de vitória da lista entre os confrontos com 30 ou mais jogos. Bounty Hunter é o contra-pick funcional dela, porque o kit dele caça exatamente heróis invisíveis e móveis; o Gem of True Sight (items.json) dá visão de unidades invisíveis a até 900 de alcance pro time dele.
- janelas: até os 14 min você está na frente em item (Desolator pronto), mas BH já faz pick-off com Jinada e Shadow Walk desde os níveis iniciais, sem depender de build. Blink não aparece entre os itens mais comprados por ele em pro_dados/bounty_hunter.json, a ameaça dele vem da visão e da emboscada, não da mobilidade.
- o que ele faz com você: Track amplifica o dano que o alvo recebe e fura Black King Bar (bkbpierce Yes, constants_abilities.json). Shadow Walk dá invisibilidade pra emboscar, e Jinada (dano bônus mais roubo de ouro) pune exatamente o tipo de herói ágil e squishy que ela é. O Gem of True Sight é item situacional da build dele justamente pra achar heróis invisíveis, inclusive a Meld dela.
- o que você faz com ele: BH tem pouca vida própria e nenhuma defesa contra burst de alvo único; se você acertar o primeiro golpe fora da invisibilidade dele, ele morre rápido, mas o problema é justamente ser pega de surpresa primeiro.
- itens que viram: Sentry Ward ou Gem do seu lado anula o Shadow Walk antes dele ganhar a emboscada; Track nele fura seu Black King Bar, então BKB não resolve esse confronto específico.
- como jogar: peça ou compre Sentry nas rotas que ele costuma roamar; não ande sozinha sem visão enquanto ele estiver vivo e sem usar o Track, a vantagem toda dele é a surpresa.
- fonte: pro_dados/templar_assassin.json; pro_dados/bounty_hunter.json; items.json (gem); constants_abilities.json (bounty_hunter_track bkbpierce Yes).

## Contra Bane (bane)
- placar: Templar Assassin venceu 13 de 40 partidas pro (32,5%, segundo pior confronto da lista).
- por que importa: segundo pior confronto entre os de 30 ou mais jogos. Suporte de disable de alvo único que isola ela antes de reagir, sem precisar furar o kit dela com dano.
- janelas: até os 22 min você está na frente em item, mas Bane já tem Nightmare e Fiend's Grip disponíveis desde o nível 1/6, sem depender de build. Aos 22:36 o Aether Lens dele (pro_dados/bane.json) estende o alcance do combo bem além do que a mobilidade dela cobre sozinha.
- o que ele faz com você: Nightmare não fura Black King Bar (bkbpierce No), então com BKB ativo o sono não pega em você; sem BKB, ele tira você da luta por até 6,5 s. Fiend's Grip, a ultimate, fura Black King Bar (bkbpierce Yes) e canaliza até 5,75 s drenando mana e causando dano a cada tique, o suficiente pra esgotar as instâncias da Refraction (3 a 6 cargas) e ainda sobrar canal pra matar.
- o que você faz com ele: Bane tem pouca vida e nenhuma fuga antes do Blink dele (33:48 mediano, pro_dados/bane.json), bem tardio; se você matá-lo antes dele canalizar o Fiend's Grip, o combo nunca sai do papel.
- itens que viram: seu Black King Bar bloqueia o Nightmare, mas não o Fiend's Grip, que fura BKB mesmo assim; a resposta real é matar Bane primeiro ou não deixar ele isolar você longe do time.
- como jogar: não ande sozinha no meio do mapa contra um Bane vivo; priorize ele no alvo de teamfight, antes dele fechar o canal do Fiend's Grip em cima de você.
- fonte: pro_dados/templar_assassin.json; pro_dados/bane.json; constants_abilities.json (bane_nightmare bkbpierce No; bane_fiends_grip bkbpierce Yes).

## Contra Storm Spirit (storm_spirit)
- placar: Templar Assassin venceu 52 de 139 partidas pro (37,4%, pior confronto entre os de maior volume de amostra).
- por que importa: pior confronto dela entre os de amostra grande (139 jogos). Storm Spirit é mid de mobilidade que ignora as armadilhas de posicionamento dela, o tipo de rival que vence pela corrida de mobilidade, não pelo item.
- janelas: até os 8 min Storm já sustenta a lane com Bottle e Soul Ring, farmando rápido com Ball Lightning desde o nível 1. Aos 14-17 min você tem Desolator e Blink prontos, mas Storm, com Kaya (13:42), já amplifica o próprio combo mágico. Aos 20 min o Witch Blade dele garante acerto mesmo contra evasão e ainda desacelera.
- o que ele faz com você: Ball Lightning fecha distância instantaneamente ignorando terreno, então as suas Psionic Traps (slow de 20 a 50%) não seguram ele. Electric Vortex puxa você pra perto dele mesmo se tentar fugir, e depois Static Remnant com o ataque carregado de Overload fecham o burst.
- o que você faz com ele: Refraction absorve parte do burst, mas o problema é a mobilidade: você não tem gap closer melhor que o Blink dele, então a troca costuma ser nos termos dele, não nos seus.
- itens que viram: seu Black King Bar (28:06, tardio) ajuda pouco aqui, porque o próprio Overload do Storm não fura BKB de ninguém (bkbpierce No, constants_abilities.json), então BKB dos dois lados cancela o combo mágico igual; o que decide é quem inicia primeiro.
- como jogar: evite ficar isolada no mapa contra um Storm com mana cheia; jogue em grupo nos primeiros 20 min, sozinha você perde a corrida de mobilidade pro Ball Lightning dele.
- fonte: pro_dados/templar_assassin.json; pro_dados/storm_spirit.json; constants_abilities.json (storm_spirit_overload bkbpierce No).

## Contra Morphling (morphling)
- placar: Templar Assassin venceu 46 de 98 partidas pro (46,9%, levemente desfavorável). Entra na lista mesmo sem dividir lane na maioria das partidas.
- por que importa: os dois são carries puros de agilidade que raramente dividem rota (ela costuma ir mid ou safelane, Morphling geralmente safelane), mas como duas hiper carries, o que uma pode fazer com a outra no meio e fim de jogo importa mais do que o contato de lane, o mesmo raciocínio de Alchemist contra Morphling.
- janelas: até os 15 min você está na frente, com GPM maior (680 contra 614 de Morphling) e item de burst pronto primeiro (Desolator 14:18 contra Diadem 15:42 dele). Aos 17-18 min as duas têm mobilidade parecida, você com Blink (17:24), ele com Manta (18:24). Depois dos 25-30 min o jogo vira pro lado dele, que escala melhor no late via Attribute Shift (puxa pontos de Força pra Agilidade) e evasão natural de agilidade empilhada.
- o que ele faz com você: Adaptive Strike (dano de 50 a 110 mais multiplicador de agilidade, empurra e atordoa) é o único disable real do kit dele, mas de curto alcance. Waveform (invulnerável durante o uso, 75 a 300 de dano) serve pra escapar e engajar ao mesmo tempo, dificultando pegar ele parado.
- o que você faz com ele: no early e no mid, você farma mais rápido e pode fechar o jogo antes dele ficar relevante; Meld com Psi Blades funciona bem, já que Morphling não tem defesa contra burst de alvo único além do próprio Waveform de fuga.
- itens que viram: Monkey King Bar seria necessário dos dois lados no late, já que os dois acumulam evasão e crítico (ele via agilidade pura, você via Crystalys e Daedalus); quem tiver o item primeiro vence a troca de acerto garantido.
- como jogar: pressione o jogo antes dos 25-30 min, janela em que a vantagem de farm e burst é sua; evite esticar até o late puro contra um Morphling bem itemizado, aí ele escala melhor que você.
- fonte: pro_dados/templar_assassin.json; pro_dados/morphling.json; constants_abilities.json (morphling_adaptive_strike_agi, morphling_waveform, morphling_morph_agi).
