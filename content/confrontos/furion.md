---
id: confrontos-furion
heroi: Nature's Prophet
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/furion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/windrunner.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/gyrocopter.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mirana.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/troll_warlord.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/clinkz.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/drow_ranger.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nyx_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/razor.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- https://api.opendota.com/api/constants/aghs_desc
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/natures_prophet.json
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/natures_prophet.md
- https://dota2.fandom.com/wiki/Nature%27s_Prophet
- https://dota2.fandom.com/wiki/Windranger
- https://liquipedia.net/dota2/Detection
- https://dotacoach.gg/en/heroes/counters/natures-prophet
---

## Contra Snapfire (snapfire)

- placar: Furion venceu 110 de 237 partidas pro (46,4%). É o oponente que mais aparece na base de confrontos do Furion.
- por que importa: maior volume de jogos pro contra o Furion de toda a base (237). Snapfire é a resposta padrão de suporte contra farm: poke de longa distância mais um disable que não depende de pegar o Furion na lane.
- janelas: até os 9:06 (nível 7, Nature's Call 4/4) o Furion ainda está na lane trocando Sprout; Snapfire sobe boots cedo (5,0 min) e já fica incomodando. Dos 9 aos 17 min o Furion entra no ciclo de jungle (Maelstrom às 10:42) enquanto Snapfire ainda não tem o Aghanim's Shard (mediana 16,9 min, pro_dados/snapfire.json): essa é a janela mais segura pro Furion puxar camp. De 17 a 25 min, com o shard pronto, Mortimer Kisses (8 glóbulos, 180 a 360 de dano cada um, alcance sem limite de mínimo de 600, pro_dados confirma mediana do shard aos 16,9) consegue acertar o Furion sozinho antes do BKB dele (mediana 24,8 min, pro_dados/furion.json).
- o que ela faz com você: Mortimer Kisses prende e queima por 5,5 s (burn de 60 a 100 por tick, slow de 15 a 25%), dano suficiente pra matar um Furion sem sustain pego isolado; Firesnap Cookie pula em cima de você pra abrir ou fugir; nenhuma das duas ignora Black King Bar (bkbpierce: No, constants_abilities.json).
- o que você faz com ele: Snapfire tem vida baixa fixa e zero mobilidade própria fora do Cookie; Sprout (até 250 de dano, prende por até 4 s) trava ela no lugar pro resto do seu combo, e seus Treants (5 unidades, 450 de vida cada) tankam o Scatterblast dela sem perder dano de Wrath of Nature.
- itens que viram: seu Black King Bar (mediana 24,8 min, pro_dados/furion.json) apaga Mortimer Kisses e Firesnap Cookie inteiros; antes disso, ficar perto de Treants ou trees reduz o risco porque ela precisa de linha livre pros glóbulos.
- como jogar: evite puxar camp isolado sem visão entre os 17 e os 25 min, é a janela de maior risco do shard dela. Depois do seu BKB, ela só te ameaça em grupo.
- fonte: pro_dados/furion.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_mortimer_kisses, snapfire_firesnap_cookie, furion_sprout); app/public/data/herois/natures_prophet.json (power_spikes).

## Contra Shadow Fiend (nevermore)

- placar: Furion venceu 111 de 229 partidas pro (48,5%). Segundo oponente mais comum da base, quase sempre sem dividir lane (Shadow Fiend é mid, Furion sai pra jungle).
- por que importa: os dois são dos farmadores mais eficientes do pool (gpm 658 do Shadow Fiend contra 652 do Furion, pro_dados/nevermore.json e pro_dados/furion.json), e é exatamente o tipo de confronto carry-contra-carry sem lane em comum que mais importa: quem fica forte primeiro dita o jogo.
- janelas: até os 10 min o Shadow Fiend farma mais rápido (78 LH aos 10:00 contra 69 do Furion, mesma fonte) porque Shadowraze limpa onda e camp quase instantâneo (3 variantes, 85 a 280 de dano, 0,55 s de cast, recarga de 3 s entre elas). Dos 10 aos 15 min o Furion vira o jogo com Maelstrom (10:42) e Nature's Call cheio (9:06, 5 Treants farmando em paralelo): a partir daí o Furion farma em duas ou três rotas ao mesmo tempo, algo que o Shadow Fiend não consegue fazer. Os BKBs saem perto um do outro (Furion 24,8 min, pro_dados/furion.json; Shadow Fiend 25,2 min, pro_dados/nevermore.json), então o Furion costuma chegar primeiro na janela de iniciar.
- o que ele faz com você: Shadowraze tem três variantes em raio 250 ao redor dele, então se aproximar demais pra farmar o mesmo camp é arriscado; Requiem of Souls (ult global em linha, converte abates em alcance e dano) pune Furion parado perto demais quando ele já é alvo prioritário.
- o que você faz com ele: Wrath of Nature (alcance global, dano cresce 10% por alvo acertado) e Teleportation 4/4 (recarga de 20 s a partir do nível 10) permitem punir rotações do Shadow Fiend em qualquer parte do mapa, algo que ele não tem resposta pronta cedo.
- itens que viram: nenhum dos dois ignora o BKB do outro em cima das habilidades principais; quem fecha o BKB primeiro ganha a janela de iniciar sem medo de combo mágico.
- como jogar: não dispute o mesmo camp de perto nos primeiros 10 min, ele limpa mais rápido ali; a partir dos 11 min, puxe pra farm paralelo em rotas diferentes e deixe o Wrath global fazer o trabalho de ameaça.
- fonte: pro_dados/furion.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, furion_wrath_of_nature, furion_teleportation); app/public/data/herois/natures_prophet.json (power_spikes).

## Contra Hoodwink (hoodwink)

- placar: Furion venceu 99 de 200 partidas pro (49,5%, equilibrado). Terceiro oponente mais comum da base.
- por que importa: terceiro maior volume de jogos pro contra o Furion (200). Suporte 4/5 cujo kit de controle (Bushwhack precisa de uma árvore por perto pra prender) acaba favorecido justamente pela floresta que o próprio Furion cria.
- janelas: Hoodwink farma pouco (lh10 de apenas 8, pro_dados/hoodwink.json) e passa a lane inteira zoneando com Acorn Shot. O Furion sai da lane aos 7:30 (nível 6) e entra em jungle tempo integral aos 9:06; a partir daí, com GPM muito maior, a diferença de farm cresce rápido. O Aghanim's Shard dela (Hunter's Boomerang, mediana 23,8 min) chega pouco antes do BKB do Furion (mediana 24,8 min, pro_dados/furion.json): há uma janela curta, de cerca de 1 minuto, em que ela já tem o item de poke e ele ainda não tem BKB.
- o que ela faz com você: Bushwhack (raiz e dano ao longo do tempo, 90 a 360 de dano total, cooldown de 15 a 12 s) puxa o alvo pra árvore mais próxima dentro do raio, e como o Furion vive cercado de árvore no jungle, o combo quase nunca erra por falta de árvore; o ultimate Sharpshooter (alcance global, dano alto, Break e slow) não atravessa Black King Bar (bkbpierce: No).
- o que você faz com ele: Sprout (duração de até 4 s, dano de até 250) prende Hoodwink sem chance de Scurry a tempo; seus Treants, com 450 de vida cada, aguentam o Acorn Shot dela sem perder dano de Wrath of Nature; ela tem pouca vida fixa e nenhuma forma própria de fechar distância além do Decoy.
- itens que viram: seu Black King Bar apaga o Sharpshooter inteiro (stun, break e slow); seu Aghanim's Shard (Curse of the Oldgrowth, 900 de alcance) revela ela em fog se tentar fugir com Decoy.
- como jogar: não fique parado perto de arbusto ou mata fechada sem visão antes dos 24 min, o Bushwhack sempre tem onde ancorar. Depois do seu BKB, ignore o combo dela e farme através.
- fonte: pro_dados/furion.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, furion_sprout); app/public/data/herois/natures_prophet.json (power_spikes).

## Contra Rubick (rubick)

- placar: Furion venceu 88 de 180 partidas pro (48,9%, equilibrado). Quarto oponente mais comum da base.
- por que importa: quarto maior volume de jogos pro contra o Furion (180). O risco real não é a lane, é o Spell Steal: Rubick pode roubar a última magia ativa que o Furion lançou.
- janelas: Rubick sobe Arcane Boots cedo (10,3 min, pro_dados/rubick.json) e fica de Fade Bolt zoneando de longe até ter Blink Dagger (21,6 min). O Furion já está puxando camp em paralelo desde os 9:06; a diferença de farm se abre rápido porque Rubick tem gpm de apenas 374 contra 652 do Furion. O Aghanim's Shard e o Scepter dele saem tarde (27,0 e 27,4 min), bem depois do BKB do Furion (mediana 24,8 min, pro_dados/furion.json).
- o que ele faz com você: Spell Steal copia a última magia ativa do Furion lançada nos últimos segundos e usa em você a até 1000 de distância, atravessando Black King Bar (Spell Steal ignora imunidade mágica); se ele roubar Teleportation ou Sprout bem cronometrado, ganha parte da sua mobilidade ou controle por uma rodada.
- o que você faz com ele: Rubick tem vida baixa fixa e nenhum blink antes dos 21,6 min; Sprout (dano de até 250, prende por até 4 s) ou um Wrath bem posicionado matam ele isolado antes que o time dele reaja.
- itens que viram: não existe item que bloqueie o roubo em si, já que Spell Steal ignora magic immunity; a defesa real é não lançar Sprout ou Teleportation perto dele à toa.
- como jogar: não gaste suas magias perto de um Rubick livre sem necessidade; depois que ele usar o roubo numa magia fraca, é a sua janela, porque ele fica sem o roubo por 16 a 4 s de recarga conforme o nível.
- fonte: pro_dados/furion.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, furion_sprout, furion_teleportation); app/public/data/herois/natures_prophet.json (power_spikes).

## Contra Tusk (tusk)

- placar: Furion venceu 97 de 180 partidas pro (53,9%). Empatado como quarto oponente mais comum da base, com vantagem clara pro Furion.
- por que importa: um dos maiores volumes de jogos pro contra o Furion (180). Ganker clássico de 4/5 que gira o mapa com Ice Shards e Snowball pra punir quem farma sozinho, exatamente o perfil que o Furion precisa respeitar no jungle.
- janelas: Tusk sobe Blink Dagger por volta dos 19,0 min (pro_dados/tusk.json); antes disso, ele ganka a pé. O Furion já tem Maelstrom (10:42) e Teleportation 4/4 (13:12) muito antes disso, então consegue fugir de gank ruim via TP ou reposicionar entre camps. Depois dos 19 min, com o Blink Dagger dele pronto e o BKB do Furion saindo aos 24,8 min (pro_dados/furion.json), o duelo vira quem inicia primeiro.
- o que ele faz com você: Ice Shards cria uma parede de 7 estilhaços que prende quem está do lado errado (cooldown de 23 a 14 s conforme o nível); Walrus Punch (dano crítico de 200 a 300%) é a única habilidade dele que atravessa Black King Bar (bkbpierce: Yes, constants_abilities.json), então mesmo com BKB ligado o combo físico dele ainda machuca.
- o que você faz com ele: Sprout prende ele antes do Snowball sair do lugar; seus Treants dão vigia extra no jungle contra o gank a pé, e o alcance global do Wrath of Nature ameaça punir a rotação dele se ele errar o timing.
- itens que viram: seu Black King Bar apaga o Ice Shards e o stun do combo, mas não o Walrus Punch em si; respeitar esse detalhe evita morrer achando que está seguro.
- como jogar: não ande sozinho sem visão nos primeiros 19 min, o gank dele não avisa. Depois do seu BKB, cuidado só com o Walrus Punch isolado, o resto do combo já não te prende mais.
- fonte: pro_dados/furion.json; pro_dados/tusk.json; constants_abilities.json (tusk_ice_shards, tusk_walrus_punch, furion_sprout); app/public/data/herois/natures_prophet.json (power_spikes).

## Contra Dragon Knight (dragon_knight)

- placar: Furion venceu 82 de 168 partidas pro (48,8%, equilibrado). Sexto oponente mais comum da base.
- por que importa: sexto maior volume de jogos pro contra o Furion (168). Offlaner tanque que farma rápido sozinho (lh10 de 63) e aguenta trocar dano mágico, o oposto do perfil que o Furion gosta de caçar.
- janelas: Dragon Knight sobe Power Treads cedo (6,0 min) e Blink Dagger aos 16,2 min (pro_dados/dragon_knight.json), bem antes do Furion ter Hurricane Pike (por volta dos 20 min). Até ali o Furion farma mais rápido (gpm 652 contra 583); depois do Blink dele, Dragon Knight consegue fechar distância em cima de quem está isolado puxando camp. O BKB dele (23,3 min) chega antes do Furion (mediana 24,8 min, pro_dados/furion.json): entre 23 e 25 min, o Furion ainda não tem a resposta contra o Dragon Tail dele.
- o que ele faz com você: Breathe Fire (80 a 320 de dano em cone, reduz armadura em 20 a 32%) limpa Treants em volume e machuca o Furion se ele ficar na frente; Dragon Tail (stun) e Breathe Fire não atravessam Black King Bar (bkbpierce: No).
- o que você faz com ele: Sprout e Wrath ignoram a resistência física dele, já que são dano mágico; o alcance global do Wrath of Nature ameaça ele mesmo depois que ele vira Elder Dragon Form (nível 16+, forma com dano em área).
- itens que viram: seu Black King Bar apaga o combo de controle dele inteiro (Dragon Tail e o debuff de armadura do Breathe Fire); o Hurricane Pike ajuda a manter distância se ele fechar via Blink, já que ele é melee.
- como jogar: não troque Treants contra o cone do Breathe Fire à toa, ele limpa em volume; depois do seu BKB, farme sem medo do combo físico dele.
- fonte: pro_dados/furion.json; pro_dados/dragon_knight.json; constants_abilities.json (dragon_knight_breathe_fire, dragon_knight_dragon_tail, furion_wrath_of_nature); app/public/data/herois/natures_prophet.json (power_spikes).

## Contra Windranger (windrunner)

- placar: Furion venceu 67 de 140 partidas pro (47,9%). Um dos oponentes mais comuns da base (140 jogos, mesmo total de Mars), e o carry de right-click puro mais jogado em pro contra o Furion mesmo sem dividir lane quase nunca.
- por que importa: mesmo papel de farmador flexível (posição 1 ou 4), e o kit dela tem duas respostas específicas contra árvore e evasão que miram justamente o que o Furion usa.
- janelas: Windranger sobe Maelstrom (13,4 min) e Mjollnir (18,3 min, pro_dados/windrunner.json), quase junto com os mesmos itens do próprio Furion (Maelstrom 10:42, Mjollnir 14:30), então os dois correm literalmente a mesma build de farm em paralelo. Quem chega primeiro em cada item puxa mais camp até o outro alcançar.
- o que ela faz com você: Shackleshot só dá o stun cheio (1,75 a 3,25 s) se tiver uma árvore ou unidade atrás do alvo pra prender junto, e como o Furion cria e atravessa floresta o jogo inteiro, ela quase sempre tem onde ancorar o stun completo nele; Powershot é um tiro canalizado que atravessa o caminho em linha e machuca mais quanto mais carregado.
- o que você faz com ele: Sprout e Wrath são dano mágico e ignoram o Windrun dela por completo, já que evasão só bloqueia ataque básico; seu Monkey King Bar (Pierce ignora evasão, itens_situacionais do guia) é a resposta direta ao Windrun quando ela tenta kitar no corpo a corpo de right-click.
- itens que viram: seu Black King Bar apaga o Shackleshot (bkbpierce: No); se o jogo for de right-click contra ela, Monkey King Bar garante que seu ataque conecte apesar do Windrun (contra: Windranger, citado no guia de itens do Furion).
- como jogar: evite ficar parado perto de árvore isolada sem BKB antes dos 25 min, é onde o Shackleshot cheio dói mais; depois disso, dispute o farm direto, o Maelstrom e o Mjollnir dos dois saem quase juntos.
- fonte: pro_dados/furion.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_windrun, windrunner_powershot); C:/Users/felip/Desktop/dota-hub/content/porque_itens/natures_prophet.md (Monkey King Bar); app/public/data/herois/natures_prophet.json (power_spikes).

## Contra Tiny (tiny)

- placar: Furion venceu 72 de 130 partidas pro (55,4%, vantagem clara). Carry pos1 bastante comum contra o Furion no pro, quase nunca dividindo lane.
- por que importa: segundo carry mais jogado em pro contra o Furion. Os dois competem pelo mesmo papel de farmador que vira força de iniciação; o detalhe que mais importa é que o kit atual do Tiny literalmente usa árvore como arma.
- janelas: Tiny sobe Blink Dagger aos 15,9 min e Black King Bar só aos 26,7 min (pro_dados/tiny.json), bem depois do BKB do Furion (mediana 24,8 min, pro_dados/furion.json). Até lá o Furion farma mais rápido (gpm 652 contra 514) e tem Teleportation 4/4 pronta (13:12) pra fugir de qualquer tentativa de combo.
- o que ele faz com você: Tree Grab deixa o próximo ataque dele com alcance, dano e respingo bônus usando uma árvore, e Tree Volley joga várias árvores próximas na sua direção; como o mapa (e o próprio Furion) está cheio de árvore, ele nunca fica sem munição pra esse combo. Avalanche (90 a 360 de dano, atordoa) não atravessa Black King Bar (bkbpierce: No).
- o que você faz com ele: Sprout prende ele antes do Toss sair; seus Treants (450 de vida) seguram o combo Avalanche e ainda tankam Grow quando ele ativa o ultimate.
- itens que viram: seu Black King Bar apaga o combo Toss mais Avalanche inteiro; o Hurricane Pike afasta ele 600 de distância se fechar via Blink, já que Tiny é melee.
- como jogar: não fique parado perto de árvore isolada sem BKB nos primeiros 25 min, é onde o combo de árvore dele machuca mais; depois do seu BKB e Pike, ele não tem resposta pra te alcançar.
- fonte: pro_dados/furion.json; pro_dados/tiny.json; constants_abilities.json (tiny_tree_grab, tiny_avalanche, furion_sprout); C:/Users/felip/Desktop/dota-hub/content/porque_itens/natures_prophet.md (Hurricane Pike); app/public/data/herois/natures_prophet.json (power_spikes).

## Contra Templar Assassin (templar_assassin)

- placar: Furion venceu 65 de 115 partidas pro (56,5%, vantagem clara). Terceiro carry mais jogado em pro contra o Furion.
- por que importa: TA quase nunca divide lane com o Furion (ela puxa mid ou safelane dela), mas é um dos carries mais picados em pro no geral, e o kit atual dela tem armadilhas que anulam justamente o jogo de mapa do Furion.
- janelas: Templar Assassin sobe Desolator cedo (14,3 min) e tem o farm mais alto da lista (gpm 680, lh10 de 73, pro_dados/templar_assassin.json), correndo quase de igual pra igual com o Furion (gpm 652) até os 15 min. O BKB dela só sai aos 28,1 min, bem depois do Furion (mediana 24,8 min, pro_dados/furion.json).
- o que ela faz com você: Psionic Trap espalha armadilhas que monitoram movimento inimigo em silêncio e revelam a posição de quem passar perto, o que anula boa parte do controle de mapa que o Furion ganha com Teleportation; Psionic Projection teleporta ela até uma armadilha carregada e detona 400 de dano bônus na chegada, dando um gap-close rápido pra puxar o Meld (50 a 200 de dano bônus, reduz sua armadura em até 8) numa emboscada.
- o que você faz com ele: Sprout prende ela antes do Meld conectar; o alcance global do Wrath of Nature ameaça ela em qualquer parte do mapa, já que ela depende de ficar parada pra montar armadilha.
- itens que viram: seu Black King Bar não apaga o Meld (bkbpierce: Yes, constants_abilities.json), então mesmo com BKB ligado o bônus de dano da emboscada dela ainda conecta; Sentry perto de camp isolado ajuda a enxergar a armadilha antes de cair nela.
- como jogar: evite rotas previsíveis sabendo que ela pode ter armadilha espalhada pelo mapa; respeite o Meld mesmo depois do seu BKB, porque ele atravessa.
- fonte: pro_dados/furion.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_psionic_trap, templar_assassin_trap_teleport, templar_assassin_meld, furion_wrath_of_nature); app/public/data/herois/natures_prophet.json (power_spikes).

## Contra Gyrocopter (gyrocopter)

- placar: Furion venceu 57 de 100 partidas pro (57,0%, vantagem clara). Quarto carry mais jogado em pro contra o Furion, o exemplo mais puro de "dois farmadores que quase nunca se cruzam na lane mas competem pelo mesmo papel".
- por que importa: Gyrocopter é farmador puro de right-click com AoE próprio (Flak Cannon limpa onda e camp inteiros), exatamente o tipo de carry que precisa vencer a corrida de farm porque não tem iniciação forte.
- janelas: Gyrocopter farma rápido (gpm 643, lh10 62, pro_dados/gyrocopter.json) usando Flak Cannon pra limpar camp em segundos, só que o BKB dele sai tarde (24,6 min) e ele não tem blink nem fuga própria, já que Homing Missile é uma habilidade ofensiva (mira no inimigo, não protege o Gyrocopter). O Furion, com Teleportation 4/4 pronta aos 13:12, consegue reposicionar entre rotas muito antes dele ter qualquer resposta de mobilidade.
- o que ele faz com você: Flak Cannon (AoE de 1250 de raio por até 4 a 7 ataques) limpa seus Treants rápido se eles ficarem agrupados; Homing Missile (90 a 360 de dano, atordoa) não atravessa Black King Bar (bkbpierce: No).
- o que você faz com ele: o alcance global do Wrath of Nature e a Teleportation permitem punir ele isolado puxando camp, já que ele não tem blink nem disable de fuga própria; Sprout prende ele parado pro resto do combo.
- itens que viram: seu Black King Bar apaga o Homing Missile; farmar em rotas separadas (não um do lado do outro) evita que o Flak Cannon dele limpe seus Treants de graça.
- como jogar: não agrupe os cinco Treants num camp só perto dele; use Teleportation pra punir ele sozinho antes dos 24 min, janela em que ele ainda não tem BKB.
- fonte: pro_dados/furion.json; pro_dados/gyrocopter.json; constants_abilities.json (gyrocopter_flak_cannon, gyrocopter_homing_missile, furion_teleportation, furion_wrath_of_nature); app/public/data/herois/natures_prophet.json (power_spikes).

## Contra Mirana (mirana)

- placar: Furion venceu 22 de 57 partidas pro (38,6%, desvantagem clara). Um dos piores confrontos da base, com amostra confiável (57 jogos).
- por que importa: Mirana tem o kit de caça mais direto contra um farmador que anda sozinho: flecha de longo alcance que atordoa e Leap pra fechar distância, exatamente o perfil que pune o Furion pego isolado no jungle.
- janelas: Mirana farma pouco por conta própria (gpm 375, lh10 16, pro_dados/mirana.json) porque gasta o jogo rondando o mapa. Antes dos 20 min, qualquer momento em que o Furion fica parado puxando camp sem Treants por perto é risco de flecha; depois do BKB dele (mediana 24,8 min, pro_dados/furion.json) essa ameaça específica cai bastante, mas a flecha ainda acerta porque ela consegue reposicionar com Leap em paralelo.
- o que ela faz com você: Sacred Arrow viaja até 3000 de distância e atordoa de 2,6 a 5 s dependendo do tempo voado (quanto mais longe acerta, mais atordoa, até 180 de dano bônus); não atravessa Black King Bar (bkbpierce: No), mas o alcance gigante faz ela acertar antes mesmo de você perceber que ela estava perto.
- o que você faz com ele: Sprout prende ela se ela se aproximar demais pra confirmar a flecha de perto; seus Treants dão visão extra no jungle, que é a principal defesa contra o combo dela, já que a flecha precisa de linha livre.
- itens que viram: seu Black King Bar apaga o stun da flecha se ela acertar depois que ele já estiver ligado; manter Treants e Sentry espalhados pelas rotas de farm reduz a chance dela acertar a flecha certeira.
- como jogar: farme perto de Treants ou de visão própria sempre que possível, nunca em corredor aberto sem nada por perto; se ela errar a flecha, a janela dela acabou por um bom tempo (ela não tem engajamento forte sem o stun).
- fonte: pro_dados/furion.json; pro_dados/mirana.json; constants_abilities.json (mirana_arrow, mirana_leap, furion_sprout); app/public/data/herois/natures_prophet.json (power_spikes).

## Contra Troll Warlord (troll_warlord)

- placar: Furion venceu 32 de 50 partidas pro (64,0%, vantagem grande). Um dos melhores confrontos da base, com amostra confiável (50 jogos).
- por que importa: carry pos1/2 de right-click puro, sem disable ou mobilidade própria além da troca de postura; é o tipo de farmador que o Furion consegue evitar via Teleportation e punir isolado.
- janelas: Troll Warlord farma rápido no início (Battle Fury aos 13,4 min, gpm 623, pro_dados/troll_warlord.json) mas só tem Aghanim's Shard tarde (31,2 min). O Furion já tem Teleportation 4/4 (13:12) pronta bem antes, mas o BKB dele (mediana 24,8 min, pro_dados/furion.json) sai praticamente junto com o de Troll Warlord (24,7 min, pro_dados/troll_warlord.json): a vantagem real nessa janela é a mobilidade da Teleportation, não o BKB.
- o que ele faz com você: Berserker's Rage dá chance de Ensnare (0,8 a 2 s) ou Maim ao atacar, e esses procs atravessam Black King Bar (bkbpierce: Yes, constants_abilities.json), então mesmo com BKB ligado o right-click dele ainda te prende um pouco; Battle Trance (ult, até 80% de lifesteal e 200 de velocidade de ataque) é o pico de dano físico dele em luta.
- o que você faz com ele: o alcance global do Wrath of Nature e a Teleportation punem ele isolado farmando, já que ele não tem blink nem fuga própria cedo; Sprout prende ele parado antes dele ativar Battle Trance.
- itens que viram: seu Black King Bar não impede os procs do Berserker's Rage, que atravessam imunidade mágica (bkbpierce: Yes); a defesa real contra o combo físico dele é distância, não o BKB. Hurricane Pike ajuda porque ele é um atacante corpo a corpo quando troca pra postura melee.
- como jogar: não dispute troca de ataque básico direto com ele sem vantagem de item; use a mobilidade global pra punir ele sozinho antes dos 24 min, quando ele ainda não tem BKB.
- fonte: pro_dados/furion.json; pro_dados/troll_warlord.json; constants_abilities.json (troll_warlord_berserkers_rage, troll_warlord_battle_trance, furion_teleportation); app/public/data/herois/natures_prophet.json (power_spikes).

## Contra Clinkz (clinkz)

- placar: Furion venceu 15 de 42 partidas pro (35,7%, pior confronto da base). Amostra confiável (42 jogos).
- por que importa: Clinkz é o caçador clássico de farmador isolado, invisível a maior parte do tempo e com dano que ignora evasão; é o perfil que mais pune o Furion sozinho no jungle.
- janelas: Clinkz farma rápido (gpm 628, lh10 62, pro_dados/clinkz.json) e sobe Desolator cedo (14,3 min, reduz armadura em área) e Aghanim's Shard aos 16,7 min, bem antes do BKB do Furion (mediana 24,8 min, pro_dados/furion.json). Essa janela de 14 a 25 min, com Desolator e shard prontos mas sem BKB do seu lado, é a mais perigosa do confronto inteiro.
- o que ele faz com você: Skeleton Walk deixa ele invisível andando entre unidades até atacar ou usar item, então ele aparece do nada em cima de quem está puxando camp sozinho; Searing Arrows adiciona dano físico bônus ao ataque básico (bkbpierce: Yes, constants_abilities.json); Strafe (bônus de velocidade e alcance de ataque) atravessa Black King Bar (bkbpierce: Yes).
- o que você faz com ele: Clinkz tem vida baixa fixa; se você o pegar fora da invisibilidade (Sentry, Treants ou visão de Teleportation chegando), Sprout prende ele sem chance de escapar antes do combo do seu time.
- itens que viram: seu Black King Bar não afeta o Strafe, que é um buff no próprio Clinkz, nem bloqueia o bônus do Searing Arrows (bkbpierce: Yes); a defesa real contra o combo de ataque básico dele é distância e visão, não imunidade mágica. Sentry espalhada nas rotas de farm é a defesa mais direta contra a invisibilidade dele.
- como jogar: não puxe camp isolado sem Sentry ou Treants de guarda entre os 14 e os 25 min, é a janela mais perigosa; depois do seu BKB, ele perde boa parte da vantagem de burst, mas a invisibilidade ainda ameaça se você ficar sozinho.
- fonte: pro_dados/furion.json; pro_dados/clinkz.json; constants_abilities.json (clinkz_wind_walk, clinkz_searing_arrows, clinkz_strafe, furion_sprout); app/public/data/herois/natures_prophet.json (power_spikes).

## Contra Drow Ranger (drow_ranger)

- placar: Furion venceu 26 de 41 partidas pro (63,4%, vantagem grande). Amostra confiável (41 jogos).
- por que importa: carry de right-click à distância sem mobilidade própria além do Dragon Lance; o Furion consegue evitar a lane dela e punir pelo mapa antes dela se organizar.
- janelas: Drow Ranger sobe Dragon Lance cedo (14,2 min), bem antes do mesmo item no próprio Furion (18,5 min, pro_dados/furion.json), mas o Black King Bar dela só sai aos 30,8 min, bem depois do Furion (mediana 24,8 min, pro_dados/furion.json). Isso dá uma janela longa, dos 25 aos 31 min, em que o Furion já pode lutar sem medo de disable mágico e ela ainda não.
- o que ela faz com você: Frost Arrows aplica slow constante no ataque básico (15 a 45%), dificultando fuga; Gust (silêncio de 3 a 6 s e empurrão) revela invisibilidade e não atravessa Black King Bar (bkbpierce: No, constants_abilities.json), mas se acertar antes do BKB ligado trava seu combo de Teleportation.
- o que você faz com ele: o alcance global do Wrath of Nature e a mobilidade da Teleportation permitem punir ela isolada, já que ela depende de ficar parada atirando; Sprout prende ela antes do Gust sair.
- itens que viram: seu Black King Bar apaga o Gust e o silêncio; farmar fora do alcance de visão dela evita o Frost Arrows à distância.
- como jogar: use a janela dos 25 aos 31 min (seu BKB pronto, o dela não) pra forçar luta; fora dessa janela, mantenha distância e deixe o farm decidir.
- fonte: pro_dados/furion.json; pro_dados/drow_ranger.json; constants_abilities.json (drow_ranger_wave_of_silence, drow_ranger_frost_arrows, furion_wrath_of_nature); app/public/data/herois/natures_prophet.json (power_spikes).

## Contra Nyx Assassin (nyx_assassin)

- placar: Furion venceu 15 de 39 partidas pro (38,5%, desvantagem clara). Amostra confiável (39 jogos).
- por que importa: Nyx Assassin é feito pra emboscar quem anda sozinho pelo mapa, com stun de cast quase instantâneo e, com Aghanim's Scepter, a própria Burrow (ficar invisível e imóvel no chão) pra armar tocaia perto de camp de jungle.
- janelas: Nyx farma muito pouco por conta própria (gpm 322, lh10 10, pro_dados/nyx_assassin.json) e vive de emboscada. Antes do nível 6 (Vendetta, gap-close invisível com até 500 de dano bônus) ele ainda não tem o combo completo; depois disso, qualquer momento isolado do Furion puxando camp é risco, inclusive depois do BKB dele (mediana 24,8 min, pro_dados/furion.json), porque o Impale inicial é rápido e o Spiked Carapace reflete dano se você tentar estourar ele.
- o que ele faz com você: Impale (100 a 280 de dano, atordoa até 2 s, 0,3 s de cast) e Spiked Carapace (reflete 140% do dano recebido e atordoa quem acerta) não atravessam Black King Bar (bkbpierce: No); Vendetta dá invisibilidade e bônus de dano pra ele se aproximar sem ser visto primeiro.
- o que você faz com ele: Nyx tem vida baixa fixa; se você vir ele chegando (Sentry, Treants de vigia), Sprout prende ele antes do Impale sair, e seus Treants aguentam o combo inicial sem perder presença no camp.
- itens que viram: seu Black King Bar apaga o Impale e o Spiked Carapace; Sentry nas rotas de farm é a defesa mais direta contra Vendetta e, se ele tiver Scepter, contra a Burrow.
- como jogar: não reaja com ataque básico contra algo que pode ser Spiked Carapace, ele reflete; mantenha visão nas bordas do jungle, porque o combo dele depende de chegar sem ser visto.
- fonte: pro_dados/furion.json; pro_dados/nyx_assassin.json; constants_abilities.json (nyx_assassin_impale, nyx_assassin_spiked_carapace, nyx_assassin_vendetta, nyx_assassin_burrow); https://api.opendota.com/api/constants/aghs_desc (Nyx Assassin); app/public/data/herois/natures_prophet.json (power_spikes).

## Contra Razor (razor)

- placar: Furion venceu 21 de 32 partidas pro (65,6%, melhor confronto da base). Amostra no limite mínimo (32 jogos).
- por que importa: Razor é um carry de right-click que depende de ficar perto do alvo pra puxar Static Link; o alcance e a mobilidade do Furion (Wrath global, Dragon Lance, Teleportation) tornam difícil pra ele sustentar esse contato.
- janelas: Razor sobe Manta Style (21,3 min) e Black King Bar (24,7 min, pro_dados/razor.json), praticamente no mesmo minuto que o BKB do Furion (mediana 24,8 min, pro_dados/furion.json). Até lá, o Furion farma mais rápido (gpm 652 contra 570) e evita ficar perto o suficiente pro Link conectar.
- o que ele faz com você: Static Link puxa seus atributos por até 10 s de ligação (dreno de 6 a 24 de dano por segundo), e o efeito atravessa Black King Bar (bkbpierce: Yes, constants_abilities.json); Plasma Field (35 a 185 de dano, slow de até 40%) machuca Treants agrupados.
- o que você faz com ele: o alcance de 600 de ataque com Dragon Lance (730 total) e o Wrath of Nature global permitem bater nele ou puni-lo de longe sem deixar o Link conectar; Sprout prende ele antes dele chegar perto o suficiente.
- itens que viram: Static Link ignora seu BKB, então o item que mais ajuda aqui é distância, não imunidade mágica; Hurricane Pike afasta ele 600 de distância se ele conseguir linkar.
- como jogar: evite lutas corpo a corpo prolongadas com ele sem vantagem de item; use o alcance e a mobilidade pra nunca deixar o Link se sustentar os 10 s inteiros.
- fonte: pro_dados/furion.json; pro_dados/razor.json; constants_abilities.json (razor_static_link, razor_plasma_field, furion_wrath_of_nature); C:/Users/felip/Desktop/dota-hub/content/porque_itens/natures_prophet.md (Dragon Lance, Hurricane Pike); app/public/data/herois/natures_prophet.json (power_spikes).
