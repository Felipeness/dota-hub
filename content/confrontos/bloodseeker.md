---
id: confrontos-bloodseeker
heroi: Bloodseeker
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/bloodseeker.json
- dota-hub-conteudo-novo/pro_dados/pangolier.json
- dota-hub-conteudo-novo/pro_dados/slark.json
- dota-hub-conteudo-novo/pro_dados/snapfire.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/disruptor.json
- dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- dota-hub-conteudo-novo/pro_dados/windrunner.json
- dota-hub-conteudo-novo/pro_dados/luna.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/terrorblade.json
- dota-hub-conteudo-novo/pro_dados/morphling.json
- dota-hub-conteudo-novo/pro_dados/alchemist.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://rdy.gg/en/dota2/heroes/bloodseeker
- https://liquipedia.net/dota2/Strong_Dispel
- https://dota.fandom.com/wiki/Morphling_(DotA_2)
- https://liquipedia.net/dota2/Invulnerability
---

## Por que esses 14 oponentes

Bloodseeker tem 166 partidas pro no 7.40-7.41, todas com build de carry (botas aos 3,0 min, Javelin aos 9,1, Maelstrom aos 12,4, partidas pro 7.40-7.41 via OpenDota), por isso a lista de oponentes é toda de pos 1. A lista mistura quatro critérios: os 6 heróis que mais jogaram contra ele em pro (Pangolier, Slark, Snapfire, Rubick, Disruptor, Ogre Magi), os carries de pos 1 que mais cruzam com ele nos dados (Shadow Fiend, Templar Assassin), e os carries mais jogados em pro no patch mesmo sem histórico de lane junto com ele (Windranger, Luna, Tiny, Terrorblade, Morphling, Alchemist), porque dois HCs decidem muita coisa fora da lane: quem farma mais rápido, quem caça quem depois dos 20 min. Dos confrontos registrados, só Pangolier (45 jogos) e Slark (32) passam de 30 jogos pro; todo o resto está marcado como amostra pequena, incluindo os de maior vantagem/desvantagem (Alchemist, Morphling, Terrorblade), que entram pela regra do carry mais jogado, não pelo placar.

## Contra Pangolier (pangolier)
- placar: 21V-24D em 45 partidas pro (46,7% de vitória do Bloodseeker). Maior amostra de todo o dataset dele.
- por que importa: é quem mais aparece contra o Bloodseeker em pro, mesmo sendo 2/3 (mid/offlane) contra o seu 1; o encontro normalmente não é de lane, é de gank/invade.
- janelas: até 6 min você já tem Phase Boots (mediana 6,0, 99 jogos) pra segurar a lane; 12-19 min é a janela dele: Diffusal Blade sai aos 12,4 min (1408 jogos, amostra enorme) e o Blink aos 19,2 (1544 jogos), então ele te acha e te queima mana antes de você fechar o Mjollnir; dos 17 aos 23 min o seu Maelstrom (12,4) já virou Mjollnir (17,2, 109 jogos) e você empata a força; do BKB (22,9, 94 jogos) em diante você ignora o stun da Gyroshell e o slow do Swashbuckle.
- o que ele faz com você: Swashbuckle (35-125 de dano, slow de 100% por 0,6s) zera sua perseguição a distância; Gyroshell dá 80% de resistência mágica e imunidade a debuff por até 12s, deixando ele quase impossível de parar no meio da fuga; Shield Crash (até 240 de dano em área) pune você se chegar perto sem iniciativa.
- o que você faz com ele: Rupture (alcance 800) trava o movimento dele antes da Gyroshell começar a rolar; e como o dano de movimento da Rupture é puro (ignora resistência mágica e atravessa BKB, confirmado em rdy.gg), rolar pra fugir com a Gyroshell ligada não limpa o dano se ele já estava rupturado antes de ativar; Thirst te dá velocidade e visão pra fechar o espaço que o Swashbuckle abriu.
- itens que viram: Black King Bar (seu) neutraliza o stun da Gyroshell e o slow do Swashbuckle; Aghanim's Shard (seu, Blood Mist) segura o burst do Shield Crash.
- como jogar: não brigue sem Phase Boots prontas, ele ataca com dash; depois do Maelstrom, puxe a luta pra perto de visão de time pra conseguir plantar a Rupture antes que ele saia rolando; guarde o BKB pra quando ele ativar a Gyroshell em cima de você.
- fonte: pro_dados/bloodseeker.json; pro_dados/pangolier.json; constants_abilities.json (pangolier_swashbuckle, pangolier_gyroshell, pangolier_shield_crash, bloodseeker_rupture); rdy.gg/en/dota2/heroes/bloodseeker (Rupture dano puro atravessa BKB)

## Contra Slark (slark)
- placar: 15V-17D em 32 partidas pro (46,9% de vitória do Bloodseeker). Segunda maior amostra do dataset.
- por que importa: é o outro carry (pos 1) com mais jogos pro contra você nos dados; a disputa é literalmente farm race e duelo 1x1 entre dois HCs de agilidade.
- janelas: 0-12 min é sua janela: lh10 do Bloodseeker é 58 contra farm lento do Slark no início (ele depende de Essence Shift, que só rende com auto-ataque); aos 12,4 min seu Maelstrom já está pronto contra o Diffusal Blade dele (12,8 min, 663 jogos), praticamente empatado; dos 20 aos 27 min ele steta: Ultimate Scepter (22,3, 545 jogos) estende a Shadow Dance e o Aghanim's Shard (27,4, 459 jogos) soma um slow em área; depois dos 25-28 min, com stacks de Essence Shift acumulados em cima do seu time inteiro, ele vira um duelista mais perigoso que você no 1x1 puro.
- o que ele faz com você: Pounce (leash de até 400 de raio por até 3,25s) te prende no lugar pra iniciar a luta nos termos dele; Dark Pact é dispel forte (confirmado em Liquipedia) e limpa debuffs negativos nele, mas não remove uma Rupture já aplicada, só o que vier depois; Shadow Dance dá velocidade e regen quando ele fica invisível pro seu time.
- o que você faz com ele: Blood Bath silencia Slark e desliga Pounce e Dark Pact pelos 2,9s de ritual mais a duração do silence; Rupture pune a reposição dele, já que Pounce é o único jeito de ele fechar distância rápido e isso conta como movimento; Thirst te dá True Sight em cima dele abaixo de 25% de vida, furando a invisibilidade da Shadow Dance bem na hora que ele tenta sumir pra curar.
- itens que viram: Diffusal Blade dele queima seu mana pool, que você precisa pra Rupture e Blood Bath; seu Black King Bar não resolve nada do kit físico dele, o duelo lategame é decidido por armadura e itens de ataque, não por magia.
- como jogar: brigue cedo, antes dos 20 min, onde seu farm e seu dano já estão prontos e o dele ainda não; silencie antes de ele iniciar com Pounce; não gaste BKB achando que resolve Slark, ele é dano físico.
- fonte: pro_dados/bloodseeker.json; pro_dados/slark.json; constants_abilities.json (slark_pounce, slark_dark_pact, slark_essence_shift, slark_shadow_dance); liquipedia.net/dota2/Strong_Dispel (Dark Pact é strong dispel)

## Contra Snapfire (snapfire)
- placar: 13V-16D em 29 partidas pro (44,8% de vitória do Bloodseeker). Amostra pequena (abaixo de 30).
- por que importa: terceira maior amostra do dataset; é o suporte (4/5) que mais aparece travando o Bloodseeker em pro.
- janelas: o spike dela é no nível 6 (libera Mortimer Kisses, zona de queimadura em área); em itens ela segue o ritmo de suporte (Arcane Boots aos 10,6 min, 1782 jogos) até o Aghanim's Shard aos 16,9 min (1919 jogos), que upa o kit inteiro bem na janela em que seu Maelstrom (12,4) já devia estar pronto pra você reagir.
- o que ela faz com você: Scatterblast (slow de 100% em movimento e ataque num cone, bônus a queima roupa) te tira da perseguição guiada pelo Thirst; Firesnap Cookie (stun de até 2,2s) prepara ganks em cima de você; Mortimer Kisses transforma seus camps de farm em zona de risco.
- o que você faz com ele: Blood Bath silencia Snapfire e desliga o kit inteiro dela de uma vez, já que todo o dano dela é de habilidade; depois de silenciada ela não tem jeito de te zonear ou peelar.
- itens que viram: o Aghanim's Shard dela (16,9 min) é a janela crítica: ou você já tem Maelstrom pra brigar nessa hora ou evita a luta até fechar o item.
- como jogar: respeite o nível 6 dela na lane, é quando o Mortimer Kisses aparece; silencie primeiro em qualquer engajada; não ignore os wards dela, ela é quem mais planta visão contra você nesses dados.
- fonte: pro_dados/bloodseeker.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_mortimer_kisses, snapfire_firesnap_cookie)

## Contra Rubick (rubick)
- placar: 7V-22D em 29 partidas pro (24,1% de vitória do Bloodseeker). Amostra pequena, mas é a pior taxa entre os 6 oponentes mais comuns.
- por que importa: maior desvantagem entre os heróis que mais jogam contra você em pro; vale a pena entender o porquê mesmo com amostra pequena.
- janelas: ele poka cedo com Fade Bolt; a partir do nível 6 ganha Spell Steal, que rouba a última habilidade não-ultimate conjurada pelo herói que ele mirar, então toda vez que você solta Bloodrage ou Blood Bath com ele por perto o suficiente pra te mirar, está entregando o combo pra ele; itens de Rubick são de suporte, o spike real é de nível, não de minuto de item.
- o que ele faz com você: Spell Steal pode levar seu Bloodrage (velocidade de ataque + amplificação de dano) ou seu Blood Bath (silence em área), e ele pode mirar qualquer herói do seu time, não só você, pra roubar a última habilidade não-ultimate que esse herói conjurou; Telekinesis (stun de até 1,5s) e Fade Bolt (até 325 de dano + redução de dano) te travam a distância sem precisar chegar perto.
- o que você faz com ele: Rupture não pode ser roubada: ela é sua ultimate, e Spell Steal só pega habilidades não-ultimate, então o item mais perigoso do seu kit nunca vira arma dele; Blood Bath silencia Rubick e corta Spell Steal e Telekinesis no meio do cast.
- itens que viram: nenhum item de Rubick muda o duelo; o que decide é disciplina de quando você solta Bloodrage/Blood Bath perto dele.
- como jogar: não gaste Bloodrage ou Blood Bath à toa com Rubick por perto depois do nível 6; priorize silenciá-lo primeiro em qualquer troca; lembre que Rupture está sempre segura dele.
- fonte: pro_dados/bloodseeker.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, rubick_telekinesis, rubick_fade_bolt, bloodseeker_rupture)

## Contra Disruptor (disruptor)
- placar: 9V-19D em 28 partidas pro (32,1% de vitória do Bloodseeker). Amostra pequena.
- por que importa: quinto maior volume de jogos contra você em pro; suporte desenhado pra desfazer exatamente o que o Bloodseeker faz, que é perseguir.
- janelas: spike de nível 6 (Static Storm libera); itens de suporte padrão (Arcane Boots 11,4 min, 2248 jogos); não há item que vire sozinho o duelo, é controle de habilidade do início ao fim.
- o que ele faz com você: Glimpse te teleporta de volta pra onde você estava 4 segundos atrás e causa dano proporcional à distância desfeita, cancelando um dive ou uma perseguição inteira; Kinetic Field/Kinetic Fence prendem você dentro de um círculo e impedem de alcançar quem está com vida baixa, anulando o sentido do Thirst; Static Storm silencia e causa até 350 de dano num raio de 550 por 6s, desligando Bloodrage e Blood Bath em teamfight.
- o que você faz com ele: Blood Bath silencia o Disruptor antes que ele consiga abrir Glimpse ou Static Storm, se você chegar primeiro; fora isso, ele não tem nenhum escape próprio contra uma Rupture em cima dele, porque Glimpse só puxa o alvo que ele mira, nunca ele mesmo.
- itens que viram: nenhum item muda o duelo; tudo é timing de silêncio.
- como jogar: tente forçar a troca de silêncio antes dele (Blood Bath tem alcance de 1500 e 0,3s de cast); se ele abrir Glimpse em você, já perdeu a perseguição daquela vez, recue em vez de insistir.
- fonte: pro_dados/bloodseeker.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_glimpse, disruptor_kinetic_field, disruptor_kinetic_fence, disruptor_static_storm)

## Contra Ogre Magi (ogre_magi)
- placar: 12V-15D em 27 partidas pro (44,4% de vitória do Bloodseeker). Amostra pequena.
- por que importa: sexto maior volume de jogos contra você em pro, fecha o grupo dos 6 oponentes mais comuns.
- janelas: spike de nível 1 (Fireblast já stuna) e depois escalada constante por Multicast, que cresce com a Força dele (cada 16 de Força soma 1% de chance de conjurar 2x ou 3x); não há item-chave, build é padrão de suporte.
- o que ele faz com você: Fireblast (até 250 de dano + 1,2s de stun, com chance de Multicast dobrar ou triplicar isso) trava sua perseguição do nada; Bloodlust acelera um aliado fugindo de você; conforme ele fica mais forte (mais Força, mais Multicast), o Fireblast vira um combo de stun repetido que nenhum BKB sozinho resolve se vier em dobro ou triplo antes de você ativar.
- o que você faz com ele: Blood Bath silencia o Ogre e impede qualquer combo de Fireblast/Multicast; Rupture pune qualquer aliado que ele tente salvar com Bloodlust, porque fugir mais rápido também conta como movimento pra quem está rupturado.
- itens que viram: nenhum, o duelo é decidido por quem silencia primeiro e por quanta Força (logo quanto Multicast) o Ogre já acumulou.
- como jogar: trate o Fireblast como uma ameaça de nível 1; depois dos 15-20 min, assuma que ele pode conjurar 2x e jogue com folga de vida; silencie antes de engajar.
- fonte: pro_dados/bloodseeker.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_multicast, ogre_magi_bloodlust)

## Contra Shadow Fiend (nevermore)
- placar: 9V-11D em 20 partidas pro (45,0% de vitória do Bloodseeker). Amostra pequena.
- por que importa: é o carry pos 1 com mais jogos pro contra você, e também o herói mais jogado como pos 1 em todo o patch (3990 jogos de pro no dataset local), então a comparação de power spike entre dois HCs vale mais do que o histórico direto de lane.
- janelas: 0-10 min é a pior janela do confronto pra você: Shadow Fiend tem o melhor lh10 de todo o pool de oponentes (78, contra seu 58), já sai de bota aos 3,1 min (3990 jogos) e fecha os itens base de carry entre 5,9 e 12,7 min; seu Maelstrom (12,4) fecha quase no mesmo minuto da Blade of Alacrity dele (12,7, 3859 jogos), sem folga real de nenhum dos dois lados; a partir de Requiem of Souls, que escala com as almas de Necromastery, ele vira ameaça de teamfight mesmo sem te caçar direto.
- o que ele faz com você: Shadowraze (até 280 de dano em 3 direções, mais dano empilhado por alma) te ameaça à distância sem precisar de corpo a corpo; Requiem of Souls lança linhas de dano em área ao redor dele, proporcional às almas coletadas (até 20), e pode te pegar fora de alcance de Rupture.
- o que você faz com ele: Rupture trava a fuga dele, que não tem nenhum escape de verdade; Blood Bath silencia Shadow Fiend bem no meio do cast de Requiem (0,3s de cast point do seu lado contra um canal que ele precisa terminar), cancelando o combo inteiro; Sanguivore te deixa sustentar dano corpo a corpo que ele não tem resposta nenhuma pra sustentar de volta.
- itens que viram: seu Black King Bar (22,9 min) anula Shadowraze e Requiem por inteiro, já que os dois são mágicos; priorize fechar ele antes do nível em que ele costuma ter 15+ almas.
- como jogar: não dispute farm direto nos primeiros 10 min, ele ganha essa corrida; espere o BKB pra brigar de perto; silencie assim que ele começar a reunir pra Requiem.
- fonte: pro_dados/bloodseeker.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, nevermore_necromastery)

## Contra Templar Assassin (templar_assassin)
- placar: 6V-8D em 14 partidas pro (42,9% de vitória do Bloodseeker). Amostra pequena.
- por que importa: segundo carry pos 1 mais comum contra você nos dados e o 5º pos 1 mais jogado em pro no patch (1681 jogos); outro duelo de farm e timing de item.
- janelas: ela tem o segundo melhor lh10 do pool (73); Desolator sai aos 14,3 min (1609 jogos) bem perto do seu Maelstrom (12,4), então os dois chegam com power spike quase junto; Blink Dagger aos 17,4 min (1504 jogos) dá o pick-off que você não tem resposta de alcance; seu Mjollnir (17,2) e seu BKB (22,9) são as janelas em que você reequilibra.
- o que ela faz com você: Meld te ataca na emboscada (invisível parada, bônus de até 200 de dano ao quebrar); Psi Blades atravessam pra unidades atrás de você; Refraction dá até 6 instâncias de dano extra + redução de dano recebido, que seguram bem as suas trocas de auto-ataque.
- o que você faz com ele: Rupture ignora a invisibilidade do Meld, porque o debuff já está no alvo e não depende de visão pra continuar correndo, então toda vez que ela precisa se reposicionar pra re-meldar, está pagando dano de movimento; Thirst te dá True Sight nela abaixo de 25% de vida, revelando mesmo um Meld ativo; Sanguivore sustenta mais rodadas de troca do que as instâncias limitadas de Refraction aguentam.
- itens que viram: Desolator dela reduz sua armadura bastante, perigoso porque sua sobrevivência depende de vencer a troca de auto-ataque.
- como jogar: não ignore o nível em que ela pega Blink; jogue perto de visão de time pra não ser pega de emboscada; puxe a briga pro seu BKB, Refraction não segura dano puro da Rupture.
- fonte: pro_dados/bloodseeker.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_meld, templar_assassin_refraction, templar_assassin_psi_blades)

## Contra Windranger (windrunner)
- placar: 12V-13D em 25 partidas pro (48,0% de vitória do Bloodseeker). Amostra pequena, mas é o confronto mais equilibrado do pool.
- por que importa: pos 1/4 flex e 3º herói mais jogado em pro no patch (2596 jogos); o item-espelho com Maelstrom faz dela a comparação de farm mais direta da lista.
- janelas: os dois correm pro mesmo item: seu Maelstrom sai aos 12,4 min contra o dela aos 13,4 (1452 jogos), praticamente empatado; o Mjollnir dela sai aos 18,3 min (979 jogos) contra o seu aos 17,2, levinha vantagem sua; Shackleshot dela ameaça desde o nível 1 de lane.
- o que ela faz com você: Shackleshot prende você a uma árvore ou unidade atrás dele por até 3,25s, trava total pra quem não tem escape, que é o seu caso; Windrun dá 100% de evasão a ataques físicos por até 6s, fazendo seus auto-ataques errarem sem parar durante a janela; Powershot ameaça à distância com dano alto e slow, mesmo fora de combo.
- o que você faz com ele: Blood Bath silencia Windranger e desliga Shackleshot, Windrun e Powershot de uma vez, já que as três dependem de conjurar; Rupture pune a fuga dela mesmo com Windrun ativo, porque velocidade e evasão não cortam o dano de movimento, só esquivam de ataque físico.
- itens que viram: Monkey King Bar (seu, situacional) garante acerto contra o Windrun; o Mjollnir de cada um decide quem chega primeiro na janela de clear mais rápido.
- como jogar: trave o silêncio antes dela abrir Shackleshot; não gaste muitos auto-ataques durante a Windrun dela, espere passar; corra a build de Maelstrom igual, quem fecha Mjollnir primeiro ganha o meio de jogo.
- fonte: pro_dados/bloodseeker.json; pro_dados/windrunner.json; constants_abilities.json (windrunner_shackleshot, windrunner_windrun, windrunner_powershot)

## Contra Luna (luna)
- placar: 4V-8D em 12 partidas pro (33,3% de vitória do Bloodseeker). Amostra pequena.
- por que importa: 4º carry pos 1 mais jogado em pro no patch (1970 jogos) e um dos maiores gpm da lista (695, atrás só de Alchemist e Terrorblade); mesmo sem lane junto, ela é um dos carries que mais aparecem no draft pra comparar com você.
- janelas: ela tem o farm de wave/camp mais rápido do pool via Moon Glaive (ricochete) e Lunar Blessing (dano passivo em área, dobrado pra ela); seu Maelstrom (12,4) ainda assim limpa onda/camp rápido o bastante pra não ficar pra trás nos primeiros 15 min; o spike de duelo dela só chega com Manta aos 17,2 min (1862 jogos), perto do seu Mjollnir (17,2); Eclipse (ultimate) vira uma ameaça de teamfight a partir do nível 6, mas só com itens ela sustenta a luta.
- o que ela faz com você: Lucent Beam (até 300 de dano + 0,6s de stun) interrompe sua perseguição ou seu combo; Moon Glaive faz ela farmar onda mais rápido que você em alguns momentos; Eclipse chove feixes aleatórios em quem estiver perto, dano alto se ela estiver bem de itens.
- o que você faz com ele: Rupture é a resposta clássica pra Luna porque ela não tem nenhuma ferramenta de escape ou blink, então uma vez tagueada ela corre e sangra; Blood Bath silencia o Eclipse e o Lucent Beam.
- itens que viram: seu Black King Bar (22,9) anula o dano mágico do Eclipse e do Lucent Beam.
- como jogar: priorize pegá-la isolada, sem o time perto pra proteger, já que ela não corre sozinha; não brigue perto de torre onde ela pode kitar com Moon Glaive; use Rupture assim que ela se comprometer com uma luta.
- fonte: pro_dados/bloodseeker.json; pro_dados/luna.json; constants_abilities.json (luna_lucent_beam, luna_moon_glaive, luna_eclipse, bloodseeker_rupture)

## Contra Tiny (tiny)
- placar: 7V-5D em 12 partidas pro (58,3% de vitória do Bloodseeker). Amostra pequena, vantagem sua.
- por que importa: 2º carry pos 1 mais jogado em pro no patch (3127 jogos); entra pela regra do carry mais comum, não por cruzar lane com você.
- janelas: o Tiny é fraco sem Blink Dagger; ele sai aos 15,9 min (2546 jogos), bem depois do seu Maelstrom (12,4) e pouco antes do seu Mjollnir (17,2); antes disso ele só tem Avalanche + Toss pra combo, sem blink pra aplicar de surpresa; Grow (passivo) soma dano fixo grande nos níveis 6/12/18, então o corpo a corpo dele fica pesado mesmo sem muito item.
- o que ele faz com você: Avalanche (até 360 de dano + stun) seguido de Toss (até 360 de dano) é um combo de burst alto, mas o seu HP e o Sanguivore aguentam melhor que a maioria dos suportes; Toss pode te arremessar pra cima do time dele ou numa rune, perdendo sua posição.
- o que você faz com ele: Rupture pune exatamente o ponto fraco dele, que é depender do Blink pra iniciar: se ele blinka em cima de você já rupturado, o próprio engajamento dele é que gera o dano de movimento; Thirst te dá velocidade pra alcançá-lo depois, já que o Blink tem cooldown longo e ele não tem outro escape.
- itens que viram: seu Black King Bar (22,9) anula Avalanche/Toss; o Blink dele (15,9) é a única coisa que você precisa jogar em volta.
- como jogar: jogue com folga de vida perto do nível em que ele pega Blink; se ele errar o combo, é sua chance; não force a luta sem BKB contra o combo completo.
- fonte: pro_dados/bloodseeker.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_grow)

## Contra Terrorblade (terrorblade)
- placar: 10V-2D em 12 partidas pro (83,3% de vitória do Bloodseeker). Amostra pequena, grande vantagem sua.
- por que importa: hypercarry pos 1 clássico, 887 jogos de pro no patch; entra pela regra do carry mais jogado mesmo sem cruzar lane, e o placar (ainda que em poucos jogos) mostra por que esse tipo de confronto importa.
- janelas: Terrorblade é fraquíssimo antes do nível 6 e antes do Manta (17,1 min, 850 jogos): sem Metamorphosis ele ataca corpo a corpo fraco e sem alcance, e sem Manta não tem ilusão de qualidade pra puxar farm; isso bate direto com a janela em que você já tem Maelstrom (12,4) pronto pra pressionar; só depois dos 25-30 min, com Manta + Skadi (28,2 min, 455 jogos) ele vira ameaça real.
- o que ele faz com você: Sunder troca uma porcentagem da vida atual dele com a sua, de qualquer HP, o único resgate de verdade que ele tem contra uma ameaça de kill; Reflection (habilidade básica, sem precisar de Aghanim's) troca Terrorblade por uma ilusão quando ele tomaria dano alto, e essa ilusão ainda desacelera quem bateu nele.
- o que você faz com ele: a janela de 0 a 20 min é sua, ele não tem mobilidade nenhuma pra fugir de uma Rupture antes do Manta; Thirst acha ele mesmo se tentar se esconder pra farmar sozinho; Sunder salva a vida dele uma vez, mas não limpa o dano de movimento já em andamento se ele continuar se mexendo depois da troca.
- itens que viram: pressione antes do Manta dele (17,1 min); depois disso ele ganha opções de kite que mudam o duelo.
- como jogar: ataque a janela de 10-17 min sem dó; se ele usar Sunder, recue em vez de insistir, porque ele volta com HP alto; não deixe o jogo passar dos 30 min sem converter essa vantagem.
- fonte: pro_dados/bloodseeker.json; pro_dados/terrorblade.json; constants_abilities.json (terrorblade_sunder, terrorblade_metamorphosis, terrorblade_reflection)

## Contra Morphling (morphling)
- placar: 9V-1D em 10 partidas pro (90,0% de vitória do Bloodseeker). Amostra pequena, mas é o exemplo clássico de "dois HCs sem lane em comum, mas com interação de verdade".
- por que importa: carry pos 1 com 871 jogos de pro no patch; é o duelo onde a mecânica da Rupture realmente é testada contra um escape de alto nível, por isso entra mesmo com poucos jogos diretos.
- janelas: Morphling é frágil até o Manta (18,4 min, 716 jogos) ou o Butterfly (25,8 min, 421 jogos); antes disso ele é um right-clicker fraco que seu Maelstrom (12,4) já pressiona; a partir do Ebb and Flow escalando com os atributos que ele puxa via Morph, ele fica cada vez mais resistente a slow e debuff com o passar do jogo.
- o que ele faz com você: Waveform faz ele ficar invulnerável durante o dash (confirmado no wiki do Morphling); isso é relevante porque uma Rupture já aplicada causa dano baseado em distância, e dano em cima de um alvo invulnerável não deveria valer (regra geral de invulnerabilidade em Dota), então, em teoria, um Waveform bem cronometrado escapa do dano de movimento de uma Rupture já ativa; Adaptive Strike (até 110 de dano base + bônus por Agilidade) empurra e stuna à distância.
- o que você faz com ele: na prática, o placar pro (9 de 10) mostra que essa fuga teórica não está salvando o Morphling nos jogos registrados: ele precisa de mana sobrando e timing perfeito pra usar Waveform bem na hora em que a Rupture é lançada, e o cast da sua Rupture é rápido (0,4s) e tem 800 de alcance, o que não dá muito tempo de reação; Blood Bath silencia e impede o Waveform de sair durante o ritual e o silêncio; Thirst te dá True Sight nele.
- itens que viram: pressione antes do Manta/Butterfly dele; se ele já tiver mana pra Waveform de sobra, não desperdice a Rupture tentando acertar, espere ele gastar mana em outra coisa.
- como jogar: ataque cedo e sem mana-war, ele precisa de mana livre pra escapar da Rupture; não jogue a Rupture de longe só torcendo, chegue perto o bastante pra garantir o cast antes dele reagir.
- fonte: pro_dados/bloodseeker.json; pro_dados/morphling.json; constants_abilities.json (morphling_waveform, morphling_adaptive_strike_agi, bloodseeker_rupture); dota.fandom.com/wiki/Morphling_(DotA_2) (Waveform invulnerável); liquipedia.net/dota2/Invulnerability

## Contra Alchemist (alchemist)
- placar: 1V-7D em 8 partidas pro (12,5% de vitória do Bloodseeker). Amostra muito pequena, mas é o pior confronto de toda a lista e o exemplo que motivou essa seção: dois carries de farm rápido que quase nunca compartilham lane.
- por que importa: carry pos 1 com 796 jogos de pro no patch e o maior gpm de qualquer oponente desta lista (768 contra os seus 604); o confronto não é de lane nem de habilidade direta, é literalmente quem ganha a corrida de farm.
- janelas: Alchemist já está pronto pra fazer camp grande sozinho desde o Soul Ring (6,0 min); Radiance sai aos 13,9 min (672 jogos), um item de farm que a maioria dos carries só pega depois dos 20; Chemical Rage (desde o nível 6) dá 30s de velocidade de ataque alta, +40 de movimento e regen, suficiente pra fazer dois camps grandes seguidos; dos 20 aos 25 min ele converte isso em Black King Bar (25,1 min, 443 jogos) e Ultimate Scepter (22,4 min, 612 jogos), chegando ao meio de jogo muito à frente em ouro.
- o que ele faz com você: Unstable Concoction (até 360 de dano + stun que cresce quanto mais tempo preparado) é o único combo de controle dele, usado pra zonear ou pra abrir uma troca; fora isso, ele simplesmente te atropela em itens: se o jogo passa dos 20-25 min parado, ele sai na frente em todo slot.
- o que você faz com ele: sua única resposta real é terminar o jogo antes do Radiance/Scepter dele (antes dos 14-22 min), usando Rupture pra forçar kills enquanto ele ainda está construindo o motor de farm; depois disso, a corrida de gpm (768 contra 604) já não está do seu lado.
- itens que viram: nenhum item seu resolve sozinho uma vantagem de farm dessa magnitude; a decisão é de timing de jogo, não de build.
- como jogar: jogue agressivo cedo, force trocas antes dos 15 min; se o jogo empacar e virar late, Alchemist tende a estar na frente nesse confronto específico segundo os dados pro; priorize objetivos de mapa em vez de duelo direto depois dos 25 min.
- fonte: pro_dados/bloodseeker.json; pro_dados/alchemist.json; constants_abilities.json (alchemist_unstable_concoction, alchemist_chemical_rage, alchemist_goblins_greed)
