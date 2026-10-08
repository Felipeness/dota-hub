---
id: confrontos-nyx_assassin
heroi: Nyx Assassin
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/nyx_assassin.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/warlock.json
- dota-hub-conteudo-novo/pro_dados/disruptor.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/crystal_maiden.json
- dota-hub-conteudo-novo/pro_dados/lich.json
- dota-hub-conteudo-novo/pro_dados/void_spirit.json
- dota-hub-conteudo-novo/pro_dados/venomancer.json
- dota-hub-conteudo-novo/pro_dados/terrorblade.json
- dota-hub-conteudo-novo/pro_dados/kunkka.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/explorer (player_matches.lane_role, partidas de liga 7.40+7.41)
- https://api.opendota.com/api/heroStats (base_health, base_armor)
- https://api.opendota.com/api/constants/aghs_desc
- https://dotacoach.gg/en/heroes/counters/nyx-assassin
- https://liquipedia.net/dota2/Nyx_Assassin
- https://liquipedia.net/dota2/Version_7.41e
- https://dota2protracker.com/hero/Nyx+Assassin
- https://strategywiki.org/wiki/Dota_2/Nyx_Assassin
---

## Como essa lista foi montada

14 oponentes, em 3 grupos (critério do pedido; o item "carry sempre entra mesmo sem lane" não se aplica, Nyx Assassin joga como suporte na rota de off em 79,2% das partidas pro do patch, 733 de 925 jogos, OpenDota explorer):

1. **Mais jogos de pro contra o Nyx** (top 6 de `pro_dados/nyx_assassin.json`, campo `confrontos`): Rubick (166), Snapfire (141), Tusk (131), Tiny (123), Jakiro (106), Warlock (103). Cinco deles já são suporte pos 4/5 (Rubick, Snapfire, Tusk, Jakiro, Warlock); Tiny é carry pos 1 e não divide lane de verdade, mas aparece tanto nos dados porque farma rápido e o jogo entre os dois se decide por quem caça quem no meio, não na rota.
2. **Mesma posição principal (suporte 4/5), mais jogado em pro**, além dos 6 acima: Disruptor (94 jogos) e Hoodwink (88 jogos). Entre os dois grupos existem heróis com mais jogos (Shadow Fiend com 102, Ember Spirit com 97), mas nenhum dos dois é suporte 4/5, então ficam fora do critério de posição.
3. **Maior vantagem e maior desvantagem do Nyx (30+ jogos)**: por taxa de vitória, as duas maiores vantagens são Crystal Maiden (72,5% em 40 jogos) e Lich (71,7% em 46); a 3ª maior na verdade é Gyrocopter (71,1% em 38), que não entra nesta lista. Void Spirit (68,2% em 85) é a 4ª por taxa de vitória, mas tem a maior amostra entre as vantagens grandes do Nyx. Desvantagem: Venomancer (36,8% em 38), Terrorblade (37,5% em 48) e Kunkka (38,2% em 34), essas sim são as três piores por taxa de vitória. Void Spirit, Terrorblade e Kunkka não dividem lane com o Nyx (mid e offlane/carry), mas entram porque a diferença de poder entre os dois decide o jogo de qualquer forma, o mesmo raciocínio do exemplo Alchemist contra Morphling.

Os placares abaixo são sempre da perspectiva do Nyx Assassin (vitórias dele no confronto), fonte `pro_dados/nyx_assassin.json`, cruzados com o arquivo do oponente pra conferência. Vendetta: segundo `constants_abilities.json` e `aghs_desc`, a duração base foi reduzida de 60s (7.41) para 45/50/55s por nível no patch 7.41b, e o acerto que quebra a invisibilidade passou a desligar passivas do alvo por 4s; uso essa versão vigente em todo o arquivo.

## Contra Rubick (rubick)

- placar: 82V/166 (49,4%) para o Nyx; fonte pro_dados/nyx_assassin.json, conferido contra pro_dados/rubick.json (84V do Rubick).
- por que importa: maior volume de jogos pro do confronto (166) e mesma posição principal (4/5); os dois competem pelo papel de disable de pick-off, e o Rubick ainda pode roubar o próprio combo do Nyx com Spell Steal.
- janelas: os dois sobem Arcane Boots quase juntos (Rubick 10,3 min, Nyx 10,3 min). Até os 20 min nenhum tem item de nível: Nyx só fecha Blink aos 23,4 e Aghanim's Shard aos 25,2, Rubick fecha Blink aos 21,6 e Aghanim's Scepter aos 27,4. Dos 21 aos 27 min os dois chegam no pico quase juntos, janela em que quem iniciar primeiro ganha a troca.
- o que ele faz com você: Fade Bolt (alcance 800, dano até 325, reduz 6-24% do dano de ataque e mágico do alvo por 10s) alcança um pouco mais longe que o Impale (750), deixando o Rubick abrir a troca primeiro se estiver de frente; Spell Steal (alcance 1000, recarga 16/10/4s por nível de ultimate) rouba a última magia que o Nyx lançou, inclusive Impale ou Vendetta, e com Aghanim's Scepter ele rouba 2 magias já na versão de scepter; Telekinesis (alcance até 625, stun de até 1,5s) levanta o Nyx no ar e pode cancelar a Vendetta se ele for pego durante a invisibilidade.
- o que você faz com ele: Vendetta dá a entrada invisível que o Fade Bolt não alcança (precisa de alvo visível) e fecha a distância pro Impale sem o Rubick ver chegando; o acerto que quebra a invisibilidade desliga passiva por 4s, neutralizando a Arcane Supremacy dele (alcance de conjuração e spell amp) durante a troca. Spiked Carapace reflete e estuna quem acertar o Nyx, incluindo o próprio Fade Bolt.
- itens que viram: o Blink do Nyx (23,4) entra na mesma janela do Blink do Rubick (21,6), corrida direta de quem pega o outro fora de posição primeiro; o Aghanim's Shard do Nyx (25,2, reduz a recarga da Vendetta em 10s e dá hasted + colisão livre nos primeiros 15s) ajuda a fechar distância antes do Rubick upar pro Scepter (27,4), que rouba 2 magias.
- como jogar: não gaste Impale ou Vendetta perto do Rubick enquanto ele tiver Spell Steal disponível, ou ele devolve o combo; procure acertar a abertura dele (Telekinesis, Fade Bolt) com Spiked Carapace de pé antes de engajar, e force o primeiro erro na janela dos 21-27 min.
- fonte: pro_dados/nyx_assassin.json; pro_dados/rubick.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_vendetta, nyx_assassin_spiked_carapace, rubick_spell_steal, rubick_telekinesis, rubick_fade_bolt); aghs_desc (nyx_assassin, rubick)

## Contra Snapfire (snapfire)

- placar: 71V/141 (50,4%) para o Nyx; conferido contra pro_dados/snapfire.json (70V da Snapfire).
- por que importa: 2º maior volume de jogos pro (141); ela também joga suporte 4/5 em boa parte das partidas (catálogo lista posições 2/3/4/5), então os dois disputam o mesmo papel de iniciação travada em área.
- janelas: Arcane Boots sai quase junto (Snapfire 10,6, Nyx 10,3). O Aghanim's Shard dela chega bem mais cedo que o do Nyx (16,9 contra 25,2), dando reposicionamento de aliado ainda no meio do laning; dos 17 aos 21 min é janela dela, Shard pronto e Blink ainda não (20,7). Depois dos 21-25 min os dois têm Blink (ela 20,7, ele 23,4) e o jogo vira sobre quem inicia visão primeiro.
- o que ele faz com você: Firesnap Cookie (alcance 650, recarga 18-15s, stun de até 2,2s) e Scatterblast (dano até 280, slow de 100% por 1s em ponto-cego de 450) travam o Nyx antes dele fechar o Impale; Mortimer's Kisses (alcance 3000, dano 180-360 por glob) persegue de longe e, com Shard, reposiciona quem está dentro da boca do Mortimer.
- o que você faz com ele: Impale (750 de alcance) chega mais longe que o Scatterblast em ponto-cego (450) e que o Firesnap (650), então o Nyx consegue abrir à distância com segurança; Vendetta quebra invisibilidade em cima de uma Snapfire sem detecção própria, e o bônus de até 500 de dano some rápido com a vida baixa dela.
- itens que viram: o Aghanim's Shard da Snapfire (16,9) chega bem antes do Shard do Nyx (25,2), dando mais ferramenta de iniciação pra ela nos primeiros 20 min; depois dos 23-24 min, com Blink e Shard prontos dos dois lados, o 1x1 pende mais pro Nyx porque a Vendetta tira a necessidade de perseguir.
- como jogar: antes dos 17 min jogue reativo, ela tem o kit pronto primeiro; depois dos 23 min, com Blink e Shard, procure iniciar você pela invisibilidade da Vendetta em vez de esperar o combo dela.
- fonte: pro_dados/nyx_assassin.json; pro_dados/snapfire.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_vendetta, snapfire_firesnap_cookie, snapfire_scatterblast, snapfire_mortimer_kisses); aghs_desc (nyx_assassin, snapfire)

## Contra Tusk (tusk)

- placar: 67V/131 (51,1%) para o Nyx; conferido contra pro_dados/tusk.json (64V do Tusk).
- por que importa: 3º maior volume de jogos pro (131) e mesma posição (4/5); os dois disputam o papel de iniciador da dupla de suporte.
- janelas: Tusk sobe bota rápida (Tranquil 8,4) antes do Arcane do Nyx (10,3), ganhando velocidade cedo. O Blink dele sai bem antes do Nyx (19,0 contra 23,4): dos 19 aos 23 min é a janela de risco, ele pode iniciar Snowball ou Walrus Kick sem o Nyx ter mobilidade própria pra fugir ou contra-iniciar. Depois dos 23-25 min o Nyx junta Blink e Aghanim's Shard (25,2) e equilibra.
- o que ele faz com você: Walrus Kick (alcance curto de 250, mas chuta 1200 de distância, 550 de dano, slow de 40% por 2s) separa o Nyx do grupo antes dele formar o Impale; Snowball rola em linha reunindo até 4 aliados num raio de 325 e pode acertar o Nyx mesmo em Vendetta, porque é colisão física na trajetória, não precisa mirar um alvo visível.
- o que você faz com ele: Impale (stun de até 2s, 750 de alcance) trava o Tusk antes dele terminar de carregar o Snowball (tempo de lançamento de 3s, visível e cancelável por stun); Spiked Carapace reflete e estuna quem acertar o corpo a corpo do Tusk, que depende de Ice Shards e combo físico de perto.
- itens que viram: o Blink do Tusk (19,0) chega de 4 a 5 min antes do Blink do Nyx (23,4), vantagem de iniciação clara nessa janela; o Aghanim's Shard do Nyx (25,2) dá mobilidade extra em Vendetta que ajuda a equilibrar a partir daí.
- como jogar: evite ficar isolado entre os 19 e os 23 min, quando o Tusk já tem Blink e o Nyx ainda não; depois disso, use o alcance do Impale (750) pra abrir a troca antes do Tusk chegar nos 250 de alcance do Walrus Kick.
- fonte: pro_dados/nyx_assassin.json; pro_dados/tusk.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_vendetta, nyx_assassin_spiked_carapace, tusk_walrus_kick, tusk_snowball)

## Contra Tiny (tiny)

- placar: 68V/123 (55,3%) para o Nyx; conferido contra pro_dados/tiny.json (55V do Tiny).
- por que importa: 4º maior volume de jogos pro (123); não divide lane fixa (Tiny não tem posição única em pro no patch, 36,7% das partidas na safelane, 33,4% mid e 29,5% offlane por lane_role, OpenDota explorer; Nyx joga de suporte na rota de off), mas é o caso do grupo 1 que mais se parece com Alchemist contra Morphling: os dois raramente se cruzam na rota e ainda assim decidem o jogo um pelo outro, Tiny puxa a janela de farm e o Nyx é quem tenta isolar ele fora da lane.
- janelas: Tiny sobe Power Treads aos 6,1 e Echo Sabre aos 12,1, bem antes de qualquer item de nível do Nyx. Até os 15-16 min é a janela dele, já com o bônus de dano do Grow (nível 6) e sem precisar de Blink pra ameaçar. O Blink dele sai aos 15,9, bem antes do Nyx (23,4): dos 16 aos 23 min é a janela de risco pra quem jogar sozinho perto de ward.
- o que ele faz com você: Toss (alcance até 1100 no nível 4, dano até 360 mais o bônus do Grow) arremessa qualquer unidade perto, inclusive o próprio Nyx se pego sem Carapace de pé; Avalanche (raio até 370, dano total até 360 em 5 ticks) atordoa em área e é o setup clássico do combo Avalanche-Toss, que ignora a Vendetta porque é efeito de área, não de alvo único.
- o que você faz com ele: Impale trava o Tiny antes dele soltar o Toss, que é instantâneo mas exige estar perto; Vendetta desliga passivas do alvo por 4s no hit que quebra a invisibilidade, e isso inclui o bônus de dano do Grow, interação já documentada na comunidade com itens de break como Silver Edge. Jolt queima 25-40% da mana máxima, incômodo pra um Tiny que depende de mana pra Toss e Avalanche com recargas baixas.
- itens que viram: o Blink do Tiny (15,9) chega bem antes de o Nyx ter qualquer resposta de nível, então evitar lane sozinha contra um Tiny com Blink é prioridade; depois dos 23-25 min, com Blink e Shard, o Nyx consegue abrir o combo Impale-Vendetta antes do Tiny reagir com Toss.
- como jogar: não ande sozinho perto de visão do Tiny entre os 16 e os 23 min; depois disso, Spiked Carapace de pé antes de se aproximar anula o primeiro Toss ou ataque dele e abre a troca pro Nyx.
- fonte: pro_dados/nyx_assassin.json; pro_dados/tiny.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_vendetta, nyx_assassin_jolt, nyx_assassin_spiked_carapace, tiny_toss, tiny_avalanche, tiny_grow); OpenDota explorer (lane_role do Tiny)

## Contra Jakiro (jakiro)

- placar: 52V/106 (49,1%) para o Nyx; conferido contra pro_dados/jakiro.json (54V do Jakiro).
- por que importa: 5º maior volume de jogos pro (106) e mesma posição principal (5); os dois competem pelo papel de disable e dano de área do time.
- janelas: ambos sobem Arcane Boots quase juntos (Jakiro 11,7, Nyx 10,3). Até o nível 6 nenhum tem a arma principal pronta (Macropyre de um lado, Vendetta em nível alto do outro). O Glimmer Cape do Jakiro (22,8) cai perto da janela em que o Nyx finaliza Blink (23,4) e Shard (25,2), fase em que os dois tentam se esconder do nuke do outro em vez de caçar de frente.
- o que ele faz com você: Dual Breath (alcance 850, queima de 20 a 80 por nível ao longo de 5s, slow de 25-40% em ataque e movimento) e Ice Path (alcance 1100, até 2s de stun em área) alcançam mais longe que o Impale (750); se o Jakiro acerta primeiro, trava o Nyx antes do combo sair. Macropyre (alcance 1400, 10s de queima de 100-200 por segundo) pune quem ficar parado perto demais.
- o que você faz com ele: Impale estuna mais rápido (tempo de conjuração 0,3s contra 0,65s do Ice Path) se o Nyx chegar primeiro nos 750 de alcance; Vendetta dá a abertura invisível pra entrar nesse alcance sem o Jakiro ver chegando, e o bônus de até 500 de dano é significativo contra a vida baixa de um suporte puro.
- itens que viram: o Aghanim's Shard do Nyx (25,2) encurta a recarga da Vendetta em 10s, dando mais janelas de pick-off do que o Jakiro consegue reagir; o Force Staff dele (26,2) é a principal saída quando pego de surpresa, então o Nyx precisa fechar o combo antes dessa janela.
- como jogar: não force entrada dentro dos 1100 de alcance do Ice Path sem vantagem de visão; use a invisibilidade da Vendetta pra entrar nos 750 do Impale sem ser visto primeiro, e priorize o Jakiro antes dele ter Force Staff pronto.
- fonte: pro_dados/nyx_assassin.json; pro_dados/jakiro.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_vendetta, jakiro_dual_breath, jakiro_ice_path, jakiro_macropyre)

## Contra Warlock (warlock)

- placar: 54V/103 (52,4%) para o Nyx; conferido contra pro_dados/warlock.json (49V do Warlock).
- por que importa: 6º maior volume de jogos pro (103) e mesma posição (5); ambos disputam o papel de suporte de área que também inicia.
- janelas: Arcane Boots sai quase junto (Warlock 10,7, Nyx 10,3). Warlock é mais lento pra montar dano de área, Fatal Bonds só fica forte em nível alto (recarga cai de 42 pra 18s do nível 1 ao 4), enquanto o Nyx já ameaça pick-off isolado desde o nível 6 com Vendetta. Dos 20 aos 22 min o Warlock finaliza Glimmer Cape (20,5) e Solar Crest (22,2), ferramentas de proteção pro carry dele.
- o que ele faz com você: Fatal Bonds (raio 700, liga até 6 inimigos, compartilha 15-24% do dano entre eles por 18s) pune o Nyx se ele brigar perto de aliados ligados; Upheaval (canal de até 16s, slow crescente até 100%) prende o Nyx no lugar se ele não tiver Carapace de pé pra cancelar; o Golem da ultimate estuna na queda, fora do alcance do Spiked Carapace se o Nyx não estiver perto.
- o que você faz com ele: Impale trava o Warlock antes dele canalizar Upheaval, que exige ficar parado; Vendetta pune o burst instantâneo do bônus de dano (até 500) melhor do que a cura por tick do Shadow Word consegue acompanhar.
- itens que viram: o Aghanim's Shard do Nyx (25,2) encurta a recarga da Vendetta, dando mais chances de pick-off antes do Warlock upar Scepter próprio (2 Golems em vez de 1); o Solar Crest do Warlock (22,2) dá armadura e pode ser usado no alvo do Nyx pra reduzir o dano físico do combo.
- como jogar: evite brigar perto de aliados visivelmente ligados por Fatal Bonds; use Spiked Carapace de pé se o Warlock começar a canalizar Upheaval perto do Nyx, cancelando o canal com o stun do reflexo.
- fonte: pro_dados/nyx_assassin.json; pro_dados/warlock.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_vendetta, nyx_assassin_spiked_carapace, warlock_fatal_bonds, warlock_upheaval, warlock_shadow_word); aghs_desc (nyx_assassin, warlock)

## Contra Disruptor (disruptor)

- placar: 46V/94 (48,9%) para o Nyx; conferido contra pro_dados/disruptor.json (48V do Disruptor).
- por que importa: suporte pos 4/5 mais jogado em pro depois do grupo de maior volume bruto (94 jogos); os dois competem pelo papel de disable e silêncio de área, e Disruptor tem a ferramenta que mais incomoda o combo do Nyx, Static Storm, que não é dispelável.
- janelas: Arcane Boots sai quase junto (Disruptor 11,4, Nyx 10,3). Disruptor não tem item de nível antes dos 22 min (Glimmer Cape 22,7, Blink 24,0); o Nyx também só fecha Blink aos 23,4, então até lá o jogo é de poke com Impale contra Thunder Strike. Dos 24 aos 35 min o Disruptor fecha Blink e, se o jogo chegar lá, Aghanim's Scepter (34,9), que muda o duelo.
- o que ele faz com você: Static Storm (raio 550, 6s, até 350 de dano por segundo, não dispelável) silencia Impale, Vendetta, Jolt e Spiked Carapace se o Nyx estiver dentro; com Aghanim's Scepter, ela também desliga uso de item, cortando Shard ou Blink durante a tempestade. Glimpse (alcance até 1800) devolve o Nyx 4s no tempo, cancelando avanço ou recuo.
- o que você faz com ele: Impale (750 de alcance) trava o Disruptor antes dele reposicionar com a Kinetic Field (formação de 1s antes de fechar); Vendetta dá a entrada invisível pra fechar distância sem ativar o Glimpse dele, que precisa ver o Nyx pra mirar.
- itens que viram: o Aghanim's Shard do Nyx (25,2) dá hasted e colisão livre nos primeiros 15s de Vendetta, ajudando a fechar os 800 de alcance do Static Storm antes do Disruptor reagir; o Aghanim's Scepter do Disruptor (34,9, raro de ver fechado) é o item que mais vira o confronto tarde de jogo.
- como jogar: não entre dentro dos 550 de raio do Static Storm sem Carapace de pé ou sem já ter iniciado o combo; use Vendetta pra chegar perto do Disruptor antes dele formar a Kinetic Field.
- fonte: pro_dados/nyx_assassin.json; pro_dados/disruptor.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_vendetta, disruptor_static_storm, disruptor_kinetic_field, disruptor_glimpse); aghs_desc (nyx_assassin, disruptor)

## Contra Hoodwink (hoodwink)

- placar: 50V/88 (56,8%) para o Nyx; conferido contra pro_dados/hoodwink.json (38V da Hoodwink).
- por que importa: 2º suporte pos 4/5 mais jogado em pro fora do grupo de maior volume (88 jogos), e também a maior vantagem do Nyx entre os suportes de lane.
- janelas: Hoodwink sobe Urn of Shadows aos 11,0 e Arcane Boots aos 12,2, um pouco atrás do Nyx (10,3). O Aghanim's Shard dela sai aos 23,8, quase junto do Shard do Nyx (25,2): dos 23 aos 26 min os dois ganham upgrade ao mesmo tempo, mas o do Nyx dá mobilidade pra caçar enquanto o dela melhora o Hunter's Boomerang, item de poke, não de iniciação.
- o que ele faz com você: Bushwhack (alcance 1100, dano até 360, stun de até 2,1s) tem mais alcance que o Impale e acerta de trás de árvore; Sharpshooter (alcance 3000, dano até 1350) ameaça de muito longe, mas leva até 3s de carregamento visível, tempo suficiente pro Nyx interromper com Impale ou fugir com Vendetta.
- o que você faz com ele: Impale (conjuração de 0,3s) é quase instantâneo comparado ao tempo de mira do Sharpshooter; Vendetta dá a entrada invisível que o Scurry dela não detecta (só dá velocidade e evasão, não visão real), permitindo fechar distância antes dela carregar o tiro longo.
- itens que viram: o Aghanim's Shard da Hoodwink (23,8) troca o Hunter's Boomerang por uma versão que atravessa e atordoa, útil pra retirada, mas não ajuda a interromper a iniciação do Nyx; o Aghanim's Shard do Nyx (25,2) é o item que decide, mais mobilidade de Vendetta pra fechar a distância antes dela carregar o Sharpshooter.
- como jogar: interrompa qualquer carregamento de Sharpshooter com Impale assim que ver a animação; não dê flanco livre pra Bushwhack, que acerta de trás de árvore sem aviso.
- fonte: pro_dados/nyx_assassin.json; pro_dados/hoodwink.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_vendetta, hoodwink_bushwhack, hoodwink_sharpshooter, hoodwink_scurry); aghs_desc (nyx_assassin, hoodwink)

## Contra Crystal Maiden (crystal_maiden)

- placar: 29V/40 (72,5%) para o Nyx; conferido contra pro_dados/crystal_maiden.json (11V da Crystal Maiden).
- por que importa: maior vantagem do Nyx entre os suportes com 30+ jogos; ela é a hard support mais frágil do jogo (120 de vida base, 0 de armadura, OpenDota heroStats) e sem mobilidade própria, o perfil que a Vendetta mais pune.
- janelas: CM sobe Tranquil Boots aos 8,4, antes do Arcane do Nyx (10,3), mas isso só ajuda ela a andar, não a lutar. Ela não tem item de nível antes dos 17-18 min (Aghanim's Shard 17,7, Shadow Amulet 18,4); o Nyx também está sem item forte nessa fase, então é janela de poke com Impale contra Frostbite. Dos 21 aos 23 min ela finaliza Glimmer Cape (21,1) e Blink (23,1), ferramentas de sobrevivência, mas sem conseguir caçar de volta.
- o que ele faz com você: Frostbite (alcance 600, até 3s travando o alvo, dano por segundo) impede o Nyx de fechar o Impale se ela acertar primeiro; Freezing Field (canal de 10s, raio 810) ameaça em área, mas exige ficar parada o tempo todo, janela perfeita pro Impale cancelar o canal.
- o que você faz com ele: Impale (750 de alcance) chega mais longe que o Frostbite (600) e cancela o canal da Freezing Field assim que acerta; Vendetta entra invisível direto nos 120 de vida dela, e o bônus de até 500 de dano sozinho já mata ou deixa perto da morte uma CM sem Glimmer Cape ativo.
- itens que viram: o Aghanim's Shard da CM (17,7, gera um clone que desvia projétil e aplica Frostbite ao morrer) pode salvar ela de um primeiro Impale, mas não do bônus de dano da Vendetta se o Nyx já estiver colado; o Shard do Nyx (25,2) multiplica as janelas de pick-off contra uma CM que farma pouco e não tem mobilidade própria.
- como jogar: priorize fechar o alcance de 750 do Impale antes dela usar o Frostbite de 600; depois do nível 6, a Vendetta sozinha já ameaça matar a CM se ela estiver fora de visão dos aliados.
- fonte: pro_dados/nyx_assassin.json; pro_dados/crystal_maiden.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_vendetta, crystal_maiden_frostbite, crystal_maiden_freezing_field); aghs_desc (nyx_assassin, crystal_maiden); heroStats.json (base_health, base_armor)

## Contra Lich (lich)

- placar: 33V/46 (71,7%) para o Nyx; conferido contra pro_dados/lich.json (13V do Lich).
- por que importa: 2ª maior vantagem do Nyx entre os suportes com 30+ jogos; Lich também não tem mobilidade própria (nenhuma magia dá dash ou blink), o mesmo perfil da Crystal Maiden que a Vendetta mais pune.
- janelas: Lich sobe Tranquil Boots aos 8,3, antes do Arcane do Nyx (10,3). Ele não tem item de nível antes dos 22-25 min (Aghanim's Shard 22,9, Blink 25,4), atrás da curva do Nyx (Blink 23,4, Shard 25,2 quase junto). Entre os 10 e os 22 min é a janela mais perigosa pro Lich, só tem Frost Nova e Frost Shield pra se defender, sem escape.
- o que ele faz com você: Sinister Gaze (canal de até 2s, puxa o alvo até 50% da distância e drena 20% de mana por segundo) pode interromper uma aproximação do Nyx, mas o canal é visível e cancelável por stun; Chain Frost (10 saltos, até 550 de dano por salto) ameaça em grupo, mas o projétil inicial é lento (1050 de velocidade).
- o que você faz com ele: Impale (750 de alcance) chega antes do Lich reagir com Frost Blast (alcance 575-650); Vendetta entra na invisibilidade e o bônus de até 500 de dano é suficiente pra abater um suporte com vida baixa e sem fuga própria; Spiked Carapace reflete o Frost Blast se ele tentar zonear o Nyx de longe.
- itens que viram: o Aghanim's Shard do Lich (22,9, gera um Ice Spire que desacelera perto) ajuda a segurar território, mas não protege ele de um pick-off; o Shard do Nyx (25,2) encurta a recarga da Vendetta, e como o Lich não tem blink nem dispel de movimento, cada janela de invisibilidade vira ameaça real de kill.
- como jogar: evite ficar parado tentando zonear com Frost Blast quando o Nyx já tem Vendetta disponível; use o alcance do Impale pra abrir antes do Lich decidir entre Frost Nova e fugir, porque ele não tem como fugir de verdade.
- fonte: pro_dados/nyx_assassin.json; pro_dados/lich.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_vendetta, nyx_assassin_spiked_carapace, lich_sinister_gaze, lich_chain_frost, lich_frost_nova); aghs_desc (nyx_assassin, lich)

## Contra Void Spirit (void_spirit)

- placar: 58V/85 (68,2%) para o Nyx; conferido contra pro_dados/void_spirit.json (27V do Void Spirit).
- por que importa: não é a 3ª maior vantagem do Nyx por taxa de vitória (Gyrocopter tem 71,1% em 38 jogos, fora desta lista), mas é a vantagem grande com a maior amostra do patch (85 jogos); não divide lane (Void Spirit é mid em 91,2% dos jogos pro do patch, 1475 de 1618 jogos por lane_role, OpenDota explorer; Nyx é suporte), mas o kit do Nyx interrompe justamente o que o Void Spirit mais depende: Impale e o reflexo do Spiked Carapace cancelam o Astral Step em cast, e a Vendetta desliga a Intrinsic Edge por 4s.
- janelas: Void Spirit é o herói mais rápido da lista: Power Treads aos 9,7, Diadem aos 11,0, com 50 last hits aos 10 min (fonte pro_dados/void_spirit.json). Até os 17 min ele farma livre; o Aghanim's Shard dele (17,0) só adiciona um segundo caminho de visão que gira ao redor do Aether Remnant, não é a ferramenta de duelo. Quem silencia é o Aghanim's Scepter (25,1, dá silêncio e 2 cargas ao Resonant Pulse), que chega quase junto do Shard do Nyx (25,2). Mesmo assim o Nyx não precisa de item pra punir o Astral Step, o combo funciona desde o nível 6.
- o que ele faz com você: Aether Remnant (alcance 850, puxa quem tocar o retorno do orbe) e Resonant Pulse (raio 500, com Scepter silencia e dá 2 cargas) ameaçam se ele vier com iniciativa; Dissimilate (ultimate) ataca em anel ao redor de onde ele reaparece, dano alto se o Nyx estiver perto do teleporte.
- o que você faz com ele: Astral Step (blink com 2 cargas) não pode ser lançado se o Void Spirit estiver atordoado no momento do cast, e tanto o Impale quanto o reflexo do Spiked Carapace estunam; Vendetta desliga passivas do alvo por 4s no hit que tira a invisibilidade, o que inclui a Intrinsic Edge (a passiva que converte atributo em dano de ataque), cortando justamente o que mais dá dano pro Void Spirit.
- itens que viram: o Aghanim's Scepter dele (25,1, silêncio no Resonant Pulse) é perigoso, mas o Spiked Carapace não é mágico, é reflexo físico de ativação instantânea, e continua estunando quem acertar o Nyx mesmo em silêncio; o Aghanim's Shard do Nyx (25,2) chega quase junto e dá a mobilidade extra que fecha o que falta pra alcançar um herói rápido como ele.
- como jogar: puna qualquer Astral Step feito perto do Nyx com Impale ou Carapace de pé, cortando o blink antes dele completar; evite ficar parado perto de onde o Void Spirit pode reaparecer com Dissimilate.
- fonte: pro_dados/nyx_assassin.json; pro_dados/void_spirit.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_vendetta, nyx_assassin_spiked_carapace, void_spirit_aether_remnant, void_spirit_resonant_pulse, void_spirit_dissimilate); aghs_desc (void_spirit); OpenDota explorer (lane_role)

## Contra Venomancer (venomancer)

- placar: 14V/38 (36,8%) para o Nyx; conferido contra pro_dados/venomancer.json (24V do Venomancer).
- por que importa: maior desvantagem do Nyx entre suportes com 30+ jogos; mesma função (suporte de área), mas Venomancer ganha a troca de dano ao longo do tempo que ignora a invisibilidade da Vendetta.
- janelas: Venomancer sobe Urn of Shadows aos 9,0 e Arcane Boots aos 11,8, perto do Nyx (10,3). O Spirit Vessel dele (17,2) e o Mekansm (20,2) chegam numa janela em que o Nyx só tem Diadem (14,1) ou, se priorizar, Cyclone (20,5). A Venomous Gale com Poison Sting já poka desde o nível 1-2, bem antes de qualquer item de nível dos dois.
- o que ele faz com você: Venomous Gale (alcance 800, slow de 35-50% por 15s, dano ao longo do tempo) gruda no Nyx e continua causando dano mesmo depois dele entrar em Vendetta, porque é um debuff já aplicado, não um alvo que precisa de visão contínua; Poison Sting (passivo, ativa a cada ataque) acumula mais dano numa troca prolongada, o oposto do burst rápido que o Nyx quer.
- o que você faz com ele: Impale trava o Venomancer antes dele aplicar o Snakebite; Vendetta com o bônus de até 500 de dano pode abater ele rápido se o burst inicial acontecer antes do slow da Venomous Gale acumular, mas a janela é curta porque ele aplica o debuff de 800 de alcance antes do Nyx alcançar os 750 do Impale.
- itens que viram: se o Venomancer tiver Spirit Vessel (17,2, reduz cura e causa dano ao longo do tempo) ativo no Nyx, o burst da Vendetta perde força porque ele já está sangrando sem cura própria pra compensar; o Nyx precisa fechar o Impale antes da Venomous Gale aplicar, ou a troca vira disputa de dano contínuo que o Venomancer ganha.
- como jogar: não entre nos 800 de alcance da Venomous Gale achando que a Vendetta resolve sozinha, o debuff continua acumulando; priorize abrir com Impale a 750 de distância antes dele aplicar o slow.
- fonte: pro_dados/nyx_assassin.json; pro_dados/venomancer.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_vendetta, venomancer_venomous_gale, venomancer_poison_sting)

## Contra Terrorblade (terrorblade)

- placar: 18V/48 (37,5%) para o Nyx; conferido contra pro_dados/terrorblade.json (30V do Terrorblade).
- por que importa: 2ª maior desvantagem do Nyx; não divide lane (TB é carry de safelane, Nyx é suporte), caso clássico de dois heróis que raramente se cruzam na rota e ainda assim decidem o jogo um pelo outro, TB puxa a janela de farm e o Nyx é quem tenta isolar ele fora da lane antes do item de nível.
- janelas: TB farma rápido desde cedo, 66 last hits aos 10 min (fonte pro_dados/terrorblade.json), com Power Treads (5,8) e Boots of Elves (7,5). O Yasha dele sai aos 12,5 e o Manta Style fecha aos 17,1, quase junto do Cyclone do Nyx (20,5) se ele priorizar esse item. Até os 17 min ele ainda não tem Metamorphosis relevante em combate solo por falta de nível e item; depois dos 17-20 min, com Manta e Aghanim's Shard (17,4), ele já cria ilusão de qualidade e vira ranged em teamfight.
- o que ele faz com você: Sunder (recarga 110-40s, troca de vida mínima 25-35%) pode virar a vida dele com a do Nyx numa emergência, mas o cooldown alto limita o uso; Metamorphosis dá alcance de ataque de até 600 e dano bônus de até 80, perigoso se ele virar ranged perto do Nyx numa troca prolongada.
- o que você faz com ele: Impale e Vendetta funcionam bem antes do Manta Style e do Metamorphosis, porque ilusões não confundem o foco do Impale (área, não alvo único) e o bônus de dano da Vendetta mira a unidade real que o Nyx marcar; Spiked Carapace reflete e estuna se o TB tentar trocar de perto antes de virar ranged.
- itens que viram: o Manta Style do TB (17,1) separa ele do foco de magia single-target, mas não protege de Impale em área; o Aghanim's Shard do Nyx (25,2) dá mais chances de pegar o TB sozinho antes dele farmar o item que fecha o 1x1 dele, geralmente Hurricane Pike (27,8), pra manter distância.
- como jogar: ataque o TB antes dos 17 min, quando ainda não tem Manta nem Metamorphosis de qualidade; depois disso, prefira Impale em área a perseguir uma ilusão específica, e feche o combo antes dele comprar o Hurricane Pike.
- fonte: pro_dados/nyx_assassin.json; pro_dados/terrorblade.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_vendetta, nyx_assassin_spiked_carapace, terrorblade_sunder, terrorblade_metamorphosis)

## Contra Kunkka (kunkka)

- placar: 13V/34 (38,2%) para o Nyx; conferido contra pro_dados/kunkka.json (21V do Kunkka).
- por que importa: 3ª maior desvantagem do Nyx com amostra mínima de 30+ jogos; não divide lane fixa (Kunkka é mid ou offlane no patch, Nyx é suporte), mas farma rápido e tem dano em área que ignora boa parte do kit de controle do Nyx.
- janelas: Kunkka sobe Phase Boots aos 7,0 e já farma puxado por Tidebringer (cleave passivo de 150-650 de alcance, mais dano por nível), chegando a 66 last hits aos 10 min. Blade Mail aos 13,0 é a primeira resposta defensiva dele contra combo físico; o Aghanim's Scepter dele (22,5, melhora X Marks the Spot e Torrent) chega bem antes de qualquer item de nível do Nyx, que só fecha Blink aos 23,4.
- o que ele faz com você: Torrent (alcance 1300, delay de 1,6s antes de 1,4s de stun) ameaça de longe e detona em área, podendo punir onde o Nyx tentou se esconder pra iniciar; Blade Mail (mediana 13,0) reflete o dano recebido por alguns segundos, então qualquer combo acertado nele durante o item volta pro Nyx; Tidebringer soma dano de cleave alto pra quem chegar perto depois disso.
- o que você faz com ele: Impale trava o Kunkka antes dele reagir com X Marks the Spot (delay de 3 a 6s pra puxar de volta); Vendetta dá a entrada invisível que evita o aviso prévio do Torrent, que precisa de linha de visão pros 1300 de alcance. Contra Blade Mail ativo, o ideal é esperar passar antes de fechar qualquer combo, já que o item reflete o que for recebido nesses segundos.
- itens que viram: o puxão de volta do X Marks the Spot já existe desde o nível 1, não depende de item; o Aghanim's Scepter do Kunkka (22,5) não melhora essa marca, só dá 2 navios no Ghostship (ultimate) em vez de 1; o Aghanim's Shard do Nyx (25,2) chega bem depois, então a janela de poder do Kunkka é mais cedo nessa curva.
- como jogar: não avance sozinho perto de um Kunkka com X Marks the Spot disponível, a marca cancela a iniciação mesmo sem Scepter; priorize abrir com Impale a 750 de distância antes do alcance de 1300 do Torrent virar ameaça.
- fonte: pro_dados/nyx_assassin.json; pro_dados/kunkka.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_vendetta, nyx_assassin_spiked_carapace, kunkka_torrent, kunkka_tidebringer, kunkka_x_marks_the_spot)
