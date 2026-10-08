---
id: confrontos-muerta
heroi: Muerta
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/muerta.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/phoenix.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/windrunner.json
- dota-hub-conteudo-novo/pro_dados/luna.json
- dota-hub-conteudo-novo/pro_dados/medusa.json
- dota-hub-conteudo-novo/pro_dados/lina.json
- dota-hub-conteudo-novo/pro_dados/slark.json
- dota-hub-conteudo-novo/pro_dados/primal_beast.json
- dota-hub-conteudo-novo/pro_dados/alchemist.json
- dota-hub-conteudo-novo/pro_dados/morphling.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
- https://liquipedia.net/dota2/7.41e
- https://hawk.live/posts/valve-released-patch-741f-dota-2-full-list-changes
- https://www.dotabuff.com/heroes/morphling/counters
---

## Por que esses 15

A lista mistura 4 critérios, sempre citados no "por que importa" de cada bloco: os 6 oponentes com mais partidas de pro registradas contra ela (Shadow Fiend, Rubick, Tusk, Jakiro, Hoodwink, Phoenix, todos fonte `pro_dados/muerta.json`), os carries que mais aparecem contra ela em pro (Tiny, Windranger, Luna), os 2-3 de maior vantagem e maior desvantagem com 30+ jogos (Medusa e Lina a favor, Slark e Primal Beast contra) e, por ela ser carry, os dois carries mais jogados em pro que raramente dividem lane com ela (Alchemist e Morphling, o par citado como exemplo pra essa ficha).

## Contra Shadow Fiend (nevermore)
- placar: 110V/210 (52,4%) a favor da Muerta, em partidas de liga pro 7.40+7.41 (fonte: `pro_dados/muerta.json`, OpenDota `/heroes/138/matchups`).
- por que importa: maior amostra de pro contra ela (210 jogos). Não dividem lane de verdade (ele mid, ela safelane), mas os dois são cores de prioridade máxima no draft e se cruzam direto em rotação e disputa de Roshan.
- janelas: até os 10 min ele farma muito mais rápido (lh10 78 x 50 dela, fonte: `pro_dados`); aos 10,2 ele já tem Mask of Madness e caça, enquanto ela só fecha o primeiro item de DPS (Maelstrom) aos 13,8; dos 20 aos 28 min os dois correm pro mesmo spike de BKB (ele 25,2, ela 27,5) e crítico (Daedalus dele 28,3); quem fechar o combo primeiro dita a troca.
- o que ele faz com você: Shadowraze (85-280 de dano, cd 9 por raze, 3 razes diferentes) acerta mesmo à distância e empilha dano bônus (35-80 por stack) nela; se ele morrer, Requiem of Souls (80-160 de dano, raio 1000) dispara automático e fere quem estiver perto do corpo. Nenhum dos dois atravessa Black King Bar (fonte: `constants_abilities.json`, campo `bkbpierce: No` em `nevermore_shadowraze1` e `nevermore_requiem`).
- o que você faz com ele: Dead Shot (100-325 de dano, 1000 de alcance) interrompe o setup de raze antes dele se posicionar; The Calling silencia 1,5-3s e corta o cast de Requiem; nenhuma das duas atravessa BKB dele também (mesmo campo `bkbpierce: No`), então o duelo de controle vira literalmente "quem ficar sem BKB primeiro perde o CC".
- itens que viram: Black King Bar dela segura o combo de raze e o medo do Requiem; o Scepter dele reduz o cooldown do Requiem e cura ele pelo dano causado, o que muda a conta, se ele tiver Scepter o BKB dela vira prioridade sobre qualquer outro item (fonte: `aghs_desc`).
- como jogar: farmar igual ele até os 15 min sem forçar troca, atacar fora do raio de 250 do Shadowraze depois disso, e guardar BKB pro combo completo, não pro poke de raze solto.
- fonte: `pro_dados/muerta.json`; `pro_dados/nevermore.json`; `constants_abilities.json`; `aghs_desc`.

## Contra Rubick (rubick)
- placar: 101V/205 (49,3%), quase par.
- por que importa: segunda maior amostra de pro (205 jogos). É o perfil clássico de suporte que faz dupla contra o pos 1 na safelane: Telekinesis + Fade Bolt formam o pick mais comum contra carry sem iniciação própria.
- janelas: 0-10 min ele é quase inofensivo em farm (lh10 17, gpm 374 x 584 dela); só ganha poder nível 6 quando rouba um ult relevante; aos 21,6 fecha Blink pra iniciar; aos 27,4 fecha Scepter, que rouba 2 feitiços em vez de 1 e upa pra versão Scepter do que roubar. Essa é a janela em que ele vira ameaça de verdade.
- o que ele faz com você: Telekinesis (lift 0,95-1,7s + stun 0,9-1,5s na queda, cd 22-13) tira ela do ataque básico; Fade Bolt (100-325 de dano, reduz 6-24% do próximo dano que ela causa) amortece o burst de Pierce the Veil; nenhum dos dois atravessa BKB dela (`bkbpierce: No` em ambos).
- o que você faz com ele: Dead Shot (1000 de alcance) acerta antes dele chegar no próprio range de cast; Spectral Slug reduz 20% do dano mágico que ele devolve, relevante se ele roubar um feitiço mágico dela.
- itens que viram: Linken's Sphere nela bloqueia o primeiro Telekinesis de cada ciclo (14s) e ainda nega o Spell Steal, porque o escudo consome o cast antes dele poder roubar; o Shard dele (Telekinesis em aliado, alcance 600, delay 0,5s) e o Scepter (rouba 2 feitiços com versão Scepter) tornam o pacote dele mais perigoso tarde (fonte: `aghs_desc`).
- como jogar: upar Dead Shot primeiro pra punir o posicionamento raso que ele precisa pro Fade Bolt; guardar Linken's pra iniciação, não pro poke de lane.
- fonte: `pro_dados/muerta.json`; `pro_dados/rubick.json`; `constants_abilities.json`; `aghs_desc`.

## Contra Tusk (tusk)
- placar: 114V/192 (59,4%) a favor da Muerta.
- por que importa: terceira maior amostra de pro (192 jogos). Iniciador clássico de safelane, Snowball fecha o combo de kill com o suporte parceiro contra o carry adversário.
- janelas: ele é quase todo utilidade cedo (gpm 300, lh10 6); fecha o primeiro pico defensivo com Tranquil/Phase Boots entre 8,4 e 13,6 e Blink aos 19,0 pra abrir gank; ela só fica perigosa depois do Maelstrom (13,8) e domina a janela 15-25 porque ele não tem dano de ataque pra acompanhar o DPS dela.
- o que ele faz com você: Ice Shards (75-300 de dano, pode te prender numa parede por 4-7s) trava a rota de fuga; Snowball (80-260 base + 40-115 por aliado dentro, stun crescente) é o engage; Walrus Kick (550 de dano fixo + slow 40% por 2s) é a única das três que atravessa Black King Bar dela (`bkbpierce: Yes` em `tusk_walrus_kick`, as outras duas são `No`).
- o que você faz com ele: Dead Shot tem mais alcance (1000) que o corredor de Ice Shards, dá pra kitar antes do shard fechar; The Calling silencia a janela de cast do Snowball se ele ainda não lançou.
- itens que viram: Force Staff escapa do corredor de Ice Shards antes do shard fechar; BKB nela segura Ice Shards e Snowball mas não o Walrus Kick, então contra Tusk o BKB resolve metade do combo, não o combo inteiro; o Scepter dele transforma o Walrus Kick num golpe sem alvo que acerta sozinho o inimigo mais próximo na direção escolhida e ainda causa dano em área perto do ponto de impacto (fonte: `aghs_desc`; `constants_abilities.json`).
- como jogar: respeitar o raio de 200 do Ice Shards antes do nível 6 dele, forçar a luta só depois de ter Maelstrom/Mjollnir rodando, e lembrar que BKB não anula o Walrus Kick.
- fonte: `pro_dados/muerta.json`; `pro_dados/tusk.json`; `constants_abilities.json`; `aghs_desc`.

## Contra Jakiro (jakiro)
- placar: 105V/192 (54,7%) a favor da Muerta.
- por que importa: quarta maior amostra de pro (192 jogos). Suporte de zoneamento de lane, Dual Breath e Macropyre tiram ela de perto da wave.
- janelas: ele trava esperando mana pra Macropyre (300-500 de custo) até o nível 6; 0-11 min some de impacto de farm (lh10 8); depois dos 25 tenta o combo Force Staff + Macropyre de perto. Muerta domina 15-25 min com Maelstrom rodando contra o burst fraco dele nessa fase.
- o que ele faz com você: Dual Breath (burn 20-80 + slow de ataque e movimento) empurra da wave e reduz seu DPS; Ice Path (stun até 2s em área) e Macropyre (100-200 de dano por segundo por 10s numa linha) punem parado. Nenhum dos dois atravessa Black King Bar dela (`bkbpierce: No`).
- o que você faz com ele: Dead Shot interrompe o setup antes do Macropyre carregar; Spectral Slug corta 20% do dano mágico dele de volta, relevante se ela ficar presa no fogo.
- itens que viram: BKB nela segura o pacote Ice Path + Macropyre inteiro; o Scepter dele (Macropyre com dano puro e paredes de gelo que reduzem 60% a velocidade de quem cruzar) ignora a armadura dela, então mesmo com BKB o dano do fogo ainda conta se ela entrar na área por engano depois do stun (fonte: `aghs_desc`).
- como jogar: farmar fora do raio de Dual Breath (300), nunca ficar parada numa área quando ele já tiver mana pra Macropyre (300+).
- fonte: `pro_dados/muerta.json`; `pro_dados/jakiro.json`; `constants_abilities.json`; `aghs_desc`.

## Contra Hoodwink (hoodwink)
- placar: 84V/191 (44,0%), leve desvantagem.
- por que importa: quinta maior amostra de pro (191 jogos). Suporte de poke e zoneamento de longo alcance, empurra ela pra fora da wave com Acorn Shot e prende com Bushwhack.
- janelas: ele farma pouco (lh10 8) mas tem alcance de poke desde o minuto 1 (Acorn Shot chega a 750 de alcance de cast no nível 4, fonte: `constants_abilities.json`); aos 23,8 fecha o Shard, que transforma o Hunter's Boomerang num projétil de ida e volta com slow de dano mágico, essa é a janela em que ele passa a punir engage de longe; antes dos 15 min ela não tem alcance pra responder no mesmo range (Dragon Lance só fecha aos 19,6).
- o que ele faz com você: Acorn Shot (45-180 de dano bônus + slow total por 0,3s) atrasa o farm; Bushwhack (90-360 de dano total + stun até 2,1s em raio 265) prende o combo; Sharpshooter (até 1350 de dano que cresce com a distância percorrida) ameaça de longe a partir do nível 6.
- o que você faz com ele: The Calling silencia a área onde ele está escondido, cortando Scurry/Decoy, que dependem de cast; Spectral Slug reduz 20% do dano mágico dele, relevante contra o burst do Sharpshooter.
- itens que viram: Dragon Lance/Hurricane Pike dão o alcance pra trocar poke sem entrar no raio de 265 do Bushwhack; BKB nela segura o combo (nenhuma das três dele atravessa, campo `bkbpierce` ausente/`No` nas três); o Shard dele (Boomerang ida-e-volta) ameaça mesmo fora de alcance direto, por isso o BKB continua sendo a resposta mais segura ao combo completo (fonte: `aghs_desc`; `constants_abilities.json`).
- como jogar: respeitar os até 750 de alcance do Acorn Shot antes de fechar Dragon Lance, guardar BKB pro combo Bushwhack + Sharpshooter, não pro poke solto.
- fonte: `pro_dados/muerta.json`; `pro_dados/hoodwink.json`; `constants_abilities.json`; `aghs_desc`.

## Contra Phoenix (phoenix)
- placar: 72V/162 (44,4%), leve desvantagem.
- por que importa: sexta maior amostra de pro (162 jogos). Suporte tanque de lane que aguenta troca e carrega o hard counter de ultimate (Supernova) contra o burst dela.
- janelas: ele é lento pra farmar (lh10 23, gpm 406) até os 15 min; ganha o primeiro pico defensivo com Tranquil Boots (8,8) e Spirit Vessel (15,1, reduz regen dela); depois dos 23 fecha Shard + Shiva's Guard e fica difícil de queimar com DPS sustentado. Supernova (cd 120, 60-120 de dano por segundo em raio 1200) é a resposta direta a qualquer all-in dela.
- o que ele faz com você: Icarus Dive (burn 20-80 por segundo por 4s) e Fire Spirits zonam a lane; Supernova dura 6s imortal e ainda atordoa 1,6-2,4s quando estoura. É a única habilidade dele que atravessa Black King Bar (`bkbpierce: Yes` em `phoenix_supernova`).
- o que você faz com ele: Pierce the Veil (dano mágico por 8s) ignora a resistência física natural do ovo; Dead Shot interrompe o Icarus Dive antes dele pousar, cortando o slow.
- itens que viram: Black King Bar segura o burn de Icarus Dive e Fire Spirits, mas não protege do estouro de Supernova, que pierça BKB (fonte: `constants_abilities.json`).
- como jogar: guardar o all-in pra depois do cooldown de 120s da Supernova, ou forçar ele gastar o ovo antes de engajar de verdade.
- fonte: `pro_dados/muerta.json`; `pro_dados/phoenix.json`; `constants_abilities.json`.

## Contra Tiny (tiny)
- placar: 68V/155 (43,9%), desvantagem.
- por que importa: pos 1 carry mais jogado contra ela em pro depois do Shadow Fiend (155 jogos). Raramente na mesma lane exata, mas disputam prioridade de farm e costumam ser o alvo de iniciação do time adversário.
- janelas: Tiny farma mais rápido nos primeiros 10 min (lh10 44, gpm 514); fecha Echo Sabre aos 12,1 pra farm e burst, e Blink aos 15,9 pra iniciar o combo Toss + Avalanche. Essa é a pior janela pra Muerta, antes do Maelstrom dela (13,8) ela não tem DPS de volta; depois dos 20 (Mjollnir/Dragon Lance ~19,6-19,7) ela equilibra e sustenta dano melhor em troca longa.
- o que ele faz com você: Avalanche (90-360 de dano em área, atordoa 0,3s por partícula) + Toss (90-360 de dano, pode jogar aliado ou inimigo pra combar) é o combo clássico de kill instantâneo em quem não tem Linken's ou BKB. Nenhuma das duas atravessa Black King Bar dela (`bkbpierce: No`/ausente em ambas).
- o que você faz com ele: The Calling silencia antes do combo Avalanche-Toss sair; Dead Shot (1000 de alcance) acerta fora do grab radius de 300 do Toss.
- itens que viram: Linken's Sphere bloqueia o primeiro Toss ou Avalanche a cada 14s, e como o combo depende de acertar os dois, travar um já quebra a sequência; BKB segura o resto se ele vier com Blink; o Shard dele (Grow com área maior no Toss) aumenta o raio de erro que ela precisa respeitar (fonte: `aghs_desc`).
- como jogar: guardar Linken's pro combo de iniciação, não gastar o bloqueio em poke; farmar fora do alcance de Blink (1200) quando ele já tiver nível 6+.
- fonte: `pro_dados/muerta.json`; `pro_dados/tiny.json`; `constants_abilities.json`; `aghs_desc`.

## Contra Windranger (windrunner)
- placar: 64V/134 (47,8%), leve desvantagem.
- por que importa: terceiro carry mais jogado contra ela em pro (134 jogos), flex entre mid e pos 1. Compartilha literalmente a mesma rota de item (Maelstrom → Mjollnir), então quando aparece como rival de posição é uma corrida de farm direta.
- janelas: os dois correm o mesmo caminho de item; ela fecha Maelstrom um pouco antes (13,4 x 13,8 da Muerta) e Mjollnir também (18,3 x 19,7), dando a Windranger uma janela de farm mais rápido entre 13 e 19 min. Depois dos 20 ficam parecidos, mas ela tem Windrun (evasão total) pra sobreviver ao burst, o que ajuda a explicar a desvantagem de 47,8% da Muerta.
- o que ela faz com você: Windrun dá evasão total por alguns segundos, então ataque básico simples não resolve; Shackleshot prende contra árvore ou unidade por até 3,25s; Powershot (170-470 de dano em linha) e Focus Fire (+350-500% de velocidade de ataque por 20s) são o burst real. Shackleshot não atravessa Black King Bar (`bkbpierce: No`).
- o que você faz com ele: Dead Shot e The Calling são feitiço, não ataque básico, então ignoram a evasão de Windrun por completo; The Calling silencia antes do Focus Fire ligar.
- itens que viram: Monkey King Bar é a resposta direta ao Windrun, porque perfura evasão; Black King Bar segura o combo Shackleshot + Focus Fire se ela vier com Blink (fonte: `constants_abilities.json`).
- como jogar: guardar silêncio/stun pro momento antes do Focus Fire, nunca durante o Windrun; upar MKB assim que a build dela já tiver Mjollnir rodando.
- fonte: `pro_dados/muerta.json`; `pro_dados/windrunner.json`; `constants_abilities.json`.

## Contra Luna (luna)
- placar: 72V/126 (57,1%) a favor da Muerta.
- por que importa: quarto carry mais jogado contra ela em pro (126 jogos). Farmer de wave clear que historicamente perde o 1x1 de burst pra ela, mesmo puxando a frente no early.
- janelas: Luna farma mais rápido no início (lh10 69, gpm 695 x 584 dela) e fecha Manta aos 17,2; Muerta alcança o próprio pico (Mjollnir/Dragon Lance ~19,6-19,7) quase na mesma hora, mas o clear de Moon Glaives dela não é o que decide a troca de herói. O que define os 57,1% é o duelo direto: BKB dela (25,5) chega perto do Butterfly de Luna (26,1) e, sem evasão alta o bastante, Luna não tem resposta pro burst mágico de Pierce the Veil.
- o que ela faz com você: Lucent Beam (75-300 de dano + stun 0,6s) inicia a troca; Eclipse (dano por batida, até 5 vezes no mesmo alvo, em raio 675) é o burst de grupo, mas precisa de noite ou Scepter pra render o máximo. Lucent Beam não atravessa Black King Bar (`bkbpierce: No`).
- o que você faz com ele: Pierce the Veil converte o dano físico dela em mágico, furando a resistência mágica baixa de Luna; Dead Shot interrompe antes do Lucent Beam sair.
- itens que viram: Black King Bar segura o stun do Lucent Beam e grande parte do burst de Eclipse; o Scepter de Luna (Eclipse em área ou seguindo um alvo, com mais feixes) só muda o cálculo em luta de grupo, no 1x1 raramente compensa o investimento (fonte: `aghs_desc`).
- como jogar: evitar trocar durante a noite, quando Eclipse é mais forte, e forçar o 1x1 fora da wave, onde o clear dela não conta.
- fonte: `pro_dados/muerta.json`; `pro_dados/luna.json`; `constants_abilities.json`; `aghs_desc`.

## Contra Medusa (medusa)
- placar: 21V/30 (70,0%) a favor da Muerta. Amostra dentro do mínimo de 30 jogos, mas baixa perto das outras (pick raro em pro: só 503 partidas registradas no total do herói).
- por que importa: maior vantagem percentual entre os confrontos com 30+ jogos. Farmer passivo que no papel deveria vencer no late game pela evasão alta, mas o kit dela não tem resposta pro dano mágico de Muerta.
- janelas: Medusa fecha Manta aos 15,0 e Butterfly aos 22,2, a janela em que ela teoricamente fica "intocável" por ataque básico; isso não resolve contra Muerta porque Dead Shot e The Calling são feitiço de alvo/área, não ataque. Mana Shield (2 de dano absorvido por ponto de mana) é a defesa real dela, e cada Dead Shot que acerta drena parte dessa reserva.
- o que ela faz com você: Stone Gaze (petrifica quem olha de frente, +35-55% de dano físico recebido enquanto ativo) é o pânico de ultimate, e é a única habilidade do kit dela que atravessa Black King Bar (`bkbpierce: Yes` em `medusa_stone_gaze`); Mystic Snake rouba mana e salta entre unidades.
- o que você faz com ele: Pierce the Veil (dano mágico) é absorvido pela Mana Shield, mas drena a mana dela rápido, o que corta o fôlego pra Mystic Snake e pro próprio Mana Shield continuar; Dead Shot e The Calling ignoram Butterfly por completo, por não serem ataque básico.
- itens que viram: Monkey King Bar não resolve nada aqui, porque o problema real não é evasão, é a reserva de mana da Mana Shield; o item que de fato ajuda Medusa é Eul's ou Linken's pra bloquear o primeiro Dead Shot do combo (fonte: `constants_abilities.json`).
- como jogar: focar feitiço, não ataque básico, pra ignorar o investimento dela em evasão; gastar Dead Shot assim que possível pra drenar Mana Shield antes da luta decisiva, e nunca olhar de frente pra Stone Gaze mesmo com BKB ativo.
- fonte: `pro_dados/muerta.json`; `pro_dados/medusa.json`; `constants_abilities.json`.

## Contra Lina (lina)
- placar: 21V/33 (63,6%) a favor da Muerta.
- por que importa: segunda maior vantagem entre os confrontos com 30+ jogos. Nuker de burst que no papel deveria ganhar a troca de dano à distância, mas não tem mobilidade pra fugir do alcance dela depois do mid game.
- janelas: Lina farma rápido no early (lh10 75, gpm 628) e fecha Maelstrom aos 11,1 e Scepter (upgrade de Flame Cloak, não de Laguna Blade) aos 19,2; essa é a pior janela pra Muerta, antes do Dragon Lance (19,6) Lina ataca de mais longe com Dragon Slave e Light Strike Array. Depois dos 20 Muerta empata o alcance e aguenta mais tempo de luta, porque Lina é frágil.
- o que ela faz com você: Laguna Blade (380-750 de dano, o Shard dá stacks de Fiery Soul quando acerta) é o nuke de pick isolado; Light Strike Array (80-200 de dano + stun até 2,4s) abre o combo. Nenhuma das duas atravessa Black King Bar (`bkbpierce: No` em ambas).
- o que você faz com ele: Dead Shot (1000 de alcance) chega nela antes dela entrar no próprio alcance de cast; Spectral Slug reduz 20% do dano mágico que ela devolve, relevante contra o burst de Laguna Blade.
- itens que viram: Linken's Sphere bloqueia a primeira Light Strike Array ou Laguna Blade a cada 14s, essencial porque os dois feitiços dela formam o combo inteiro; Black King Bar segura ambos, então contra Lina o BKB da Muerta praticamente neutraliza o kit dela por completo (fonte: `constants_abilities.json`).
- como jogar: upar Dead Shot cedo pra interromper o setup; guardar Linken's ou BKB pro all-in dela, não pro poke de Dragon Slave.
- fonte: `pro_dados/muerta.json`; `pro_dados/lina.json`; `constants_abilities.json`; `aghs_desc`.

## Contra Slark (slark)
- placar: 14V/44 (31,8%), a maior desvantagem entre os confrontos com 30+ jogos.
- por que importa: pior percentual de vitória da Muerta com amostra relevante (44 jogos). Carry de jungle/offlane flex que farma rápido e vira caçador assim que tem Essence Shift acumulado, sem precisar de lane direta contra ela.
- janelas: Slark fecha Diffusal Blade aos 12,8 (rouba mana e desacelera a cada ataque) e Scepter aos 22,3; Essence Shift (rouba atributo por ataque, dura cerca de 12,5s por stack e renova a cada novo acerto) é cumulativo enquanto ele mantém o ataque, então quanto mais a luta se arrasta mais forte ele fica em cima de quem ele já bateu antes. Isso inverte a lógica normal: contra Slark, lutas curtas favorecem Muerta, lutas longas favorecem ele.
- o que ele faz com você: Pounce (prende em leash por até 3,25s) fecha a distância; Dark Pact (75-300 de dano em pulso, também se autoaplica) limpa debuff e ainda causa dano; Essence Shift rouba atributo a cada acerto de ataque, incluindo o Gunslinger duplo dela, o que paradoxalmente acelera o roubo quando ela ataca mais rápido. Pounce e Dark Pact não atravessam Black King Bar (`bkbpierce: No` em ambos).
- o que você faz com ele: Dead Shot (slow total de impacto por 1s) atrasa o gap-close antes do Pounce; The Calling silencia a janela de Dark Pact/Pounce.
- itens que viram: Black King Bar nela segura o combo de iniciação, mas não impede Essence Shift continuar roubando enquanto ele ataca; o Shard dele (Depth Shroud vira nuvem que esconde aliados com efeito de Shadow Dance) e o Scepter (mais cargas e alcance de Pounce) tornam ele ainda mais difícil de isolar depois dos 25 min (fonte: `aghs_desc`).
- como jogar: terminar a troca rápido, antes do Essence Shift acumular; evitar luta prolongada depois que ele já roubou atributo de alguém do time; Linken's Sphere bloqueia um Pounce de iniciação inteiro.
- fonte: `pro_dados/muerta.json`; `pro_dados/slark.json`; `constants_abilities.json`; `aghs_desc`.

## Contra Primal Beast (primal_beast)
- placar: 27V/68 (39,7%), segunda maior desvantagem com 30+ jogos.
- por que importa: offlane de iniciação (pos 3/2) que ameaça a lane dela desde o nível 1 com Rock Throw, mesmo sem ser carry rival direto.
- janelas: Primal Beast fecha Phase Boots aos 6,9 e Blink aos 13,7, o pico de iniciação cedo contra lane; depois dos 19 fecha BKB (22,0) e Shard (23,0) pra virar iniciador que também aguenta o combo de volta. A pior janela pra Muerta é 0-15 min, quando o Rock Throw (325 de dano fixo, stun 1,4s) já ameaça lane sem ela ter alcance de resposta.
- o que ele faz com você: Onslaught (empurra e atordoa até 1,6s, correndo por cima) abre o combo; Trample (dano em área por 5,5s, multiplicador de dano de ataque) prende quem ficar no caminho; Pulverize (ultimate, até 250 de dano por impacto + bônus por hit) é a única habilidade dele que atravessa Black King Bar (`bkbpierce: Yes` em `primal_beast_pulverize`), as outras três não atravessam.
- o que você faz com ele: Dead Shot interrompe o Rock Throw antes dele carregar, porque o alcance dela (1000) é maior; The Calling silencia a sequência Onslaught-Trample antes dela sair.
- itens que viram: Black King Bar segura Onslaught, Trample e Rock Throw, mas não segura Pulverize; contra Primal Beast o BKB resolve a iniciação, não o ultimate; o Shard dele (Rock Throw se parte em 3 fragmentos e soma stack de Uproar) aumenta a área que ela precisa respeitar no laning (fonte: `aghs_desc`).
- como jogar: ficar fora do raio de 225 do Rock Throw antes do nível 6 dele, e lembrar que BKB não resolve o Pulverize, então gastar vida antes de cruzar o raio de 575 do ultimate.
- fonte: `pro_dados/muerta.json`; `pro_dados/primal_beast.json`; `constants_abilities.json`; `aghs_desc`.

## Contra Alchemist (alchemist)
- placar: 22V/49 (44,9%), leve desvantagem, amostra média (49 jogos vs. os 796 jogos totais do herói em pro, sinal de que raramente dividem lane).
- por que importa: um dos dois carries mais jogados em pro sem lane em comum com ela (796 jogos totais, quase 16x mais do que os 49 registrados direto contra Muerta). O confronto real não é de lane, é de farm e de quem vence o 1x1 quando os dois cruzam no mapa ou disputam Roshan.
- janelas: Alchemist é o farmer mais rápido do grupo inteiro (gpm 768, o maior de todos os 16 heróis desta ficha) e fecha Radiance aos 13,9, quase no mesmo minuto do Maelstrom dela (13,8, praticamente empatado, mas o aura de Radiance já clear sozinha); ele fecha Scepter aos 22,4 e BKB aos 25,1. Até os 20 min ele farma mais rápido que qualquer coisa que ela faça; depois dos 25, se os dois já tiverem BKB, a troca vira sobre quem tem mais dano sustentado, e aí o DPS dela (Mjollnir + Gunslinger) costuma superar o burst dele.
- o que ele faz com você: Unstable Concoction (150-360 de dano em explosão) é o burst de pick isolado; Acid Spray (25-40 de dano por segundo + reduz 3-6 de armadura em área) acelera farm e dano sustentado em luta de grupo. Unstable Concoction não atravessa Black King Bar (`bkbpierce: No`).
- o que você faz com ele: Dead Shot interrompe o cast do Unstable Concoction antes dele detonar; Pierce the Veil (dano mágico) ignora a armadura reduzida pelo Acid Spray de qualquer jeito, já que é bônus mágico, não físico.
- itens que viram: Black King Bar nela nega o burst do Unstable Concoction por completo; o Scepter dele (distribui upgrades de Scepter pros aliados) não afeta o 1x1 direto, mas muda a luta de grupo em volta, então o confronto real de item é corrida de Radiance x Maelstrom/Mjollnir, não um combo específico (fonte: `constants_abilities.json`; `aghs_desc`).
- como jogar: não tentar vencer a corrida de farm nos primeiros 15 min, focar em fechar o próprio build e só procurar o 1x1 depois de ter Mjollnir pronto, quando o DPS sustentado dela compensa o burst dele.
- fonte: `pro_dados/muerta.json`; `pro_dados/alchemist.json`; `constants_abilities.json`; `aghs_desc`.

## Contra Morphling (morphling)
- placar: 33V/63 (52,4%), praticamente parelho, amostra média (63 jogos vs. os 871 jogos totais do herói em pro).
- por que importa: o segundo carry mais jogado em pro sem lane em comum com ela, o par citado nesta ficha como exemplo de confronto que importa mesmo sem contato direto na lane. Os dois raramente se enfrentam cedo, mas competem pelo mesmo papel de "carry que a equipe precisa proteger" e se cruzam em Roshan e em troca de split push.
- janelas: Morphling fecha Manta aos 18,4 e Butterfly aos 25,8, bem depois do pico dela (Mjollnir/Dragon Lance ~19,6-19,7); até os 20 min ela tem mais DPS pronto, mas Morphling tem Waveform (dano + dash, cd 21-12) pra escapar de qualquer engage ruim. Depois dos 30 (BKB dele aos 30,9) os dois ficam parecidos em item, e o confronto vira sobre quem consegue isolar o outro primeiro.
- o que ele faz com você: Waveform (75-300 de dano em linha + dash) fecha ou abre distância; Adaptive Strike (50-110 de dano + knockback, escala com agilidade) empurra pra longe do grupo; Morph (ultimate) troca atributos pra tankar físico ou mágico, então ele pode se ajustar especificamente contra o dano mágico de Pierce the Veil trocando pra mais força/resistência mágica. Adaptive Strike não atravessa Black King Bar (`bkbpierce: No`).
- o que você faz com ele: Dead Shot (slow total de 1s no impacto) atrasa o Waveform de fuga; The Calling silencia antes dele conseguir reposicionar com Waveform.
- itens que viram: Black King Bar em qualquer um dos dois nega boa parte do kit de controle do outro (nenhuma habilidade relevante de ambos atravessa, mesmo campo `bkbpierce: No`), então o confronto real de item vira sobre quem fecha BKB primeiro; o Scepter dele (clone com as habilidades básicas do alvo que ele copia) é mais relevante em luta de 5, pouco muda no 1x1 direto (fonte: `aghs_desc`).
- como jogar: evitar engajar sozinha enquanto ele ainda tiver Waveform de cooldown livre; guardar The Calling pro momento exato em que ele precisa reposicionar, não pro poke de lane.
- fonte: `pro_dados/muerta.json`; `pro_dados/morphling.json`; `constants_abilities.json`; `aghs_desc`; [dotabuff.com/heroes/morphling/counters](https://www.dotabuff.com/heroes/morphling/counters).
