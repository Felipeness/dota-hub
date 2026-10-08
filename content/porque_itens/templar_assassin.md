---
id: porque-itens-templar_assassin
titulo: "Por que cada item: Templar Assassin"
heroi: Templar Assassin
patch: 7.41
fontes:
- app/public/data/herois/templar_assassin.json (guia.itens_core, itens_situacionais, power_spikes, depois_dos_20)
- dota-imortal/data/opendota/items.json
- https://liquipedia.net/dota2/Black_King_Bar
- https://dota2.fandom.com/wiki/Hurricane_Pike
- https://liquipedia.net/dota2/Hurricane_Pike
- https://liquipedia.net/dota2/Monkey_King_Bar
- https://dota2.fandom.com/wiki/Linken%27s_Sphere
- https://liquipedia.net/dota2/Templar_Assassin
---

## Power Treads (power_treads)
- porque: gatilho pra sair da lane: sem nível 4 + Treads o ganho dela sobre um carry comum some.
- detalhe: dá velocidade 355 (310 de base da TA + 45 de Treads em herói ranged) e troca de atributo. Com spill de Psi Blades a 500 de alcance a 80% do dano e alcance de ataque 350, ela limpa os 2 camps atrás da torre e depois o riacho externo muito mais rápido do que ficar puxando wave.
- combo: nível 4 (Meld 2 + Psi Blades 2) + Power Treads entre 4:00 e 5:30 é o power spike que abre a Rota 1 de jungle; meta do projeto é 6 Madstone e T1 neutro entre 5:30 e 7:30.
- fonte: app/public/data/herois/templar_assassin.json (power_spikes[0], itens_core[0])

## Dragon Lance (dragon_lance)
- porque: dobra o alcance de ataque e isso é o que de fato acelera o farm de jungle, não só o dano.
- detalhe: +15 agilidade, +10 força, +130 de alcance. Com Psi Blades em 3/4 pontos o alcance chega a 530, em 4/4 a 580. No modelo do projeto o DPS efetivo contra um camp sobe de ~180-235 (nível 4, só Treads) pra ~365-460, e um camp grande que levava ~9,6 s pra cair passa a cair em ~5,5 s.
- combo: feito junto com Meld 4/4 (nível 7) e Psi Blades 3/4 (nível 8), abre a Rota 2 (selva principal) e deixa o ancient viável com Refraction mais adiante.
- fonte: app/public/data/herois/templar_assassin.json (power_spikes[5], itens_core[1], condicao_para_farmar)

## Desolator (desolator)
- porque: a redução de armadura empilha com a do Meld e isso é o que libera tower dive e Roshan mais cedo.
- detalhe: +55 de dano e -6 de armadura por 7 s. Somado ao -8 do Meld (ou -12 com o talento de nível 20), a armadura do alvo cai até -18 no total. No modelo do projeto o DPS efetivo contra camp sobe pra ~900.
- combo: Desolator + Meld + talento de nível 20 = -18 de armadura no alvo; é o ponto em que o guia marca o primeiro tower dive em grupo e a primeira janela de Roshan à noite, sempre com 3 ou mais aliados.
- fonte: app/public/data/herois/templar_assassin.json (power_spikes[6], itens_core[2], depois_dos_20)

## Blink Dagger (blink)
- porque: dá entrada e saída pro Meld sem precisar correr até o alvo, o que ela não tem de outro jeito.
- detalhe: bloqueia por 3 s depois de tomar dano (igual qualquer Blink). Reduz o tempo de deslocamento do circuito de farm, que no modelo do projeto é ~75% do ciclo de um camp aos 14 min.
- combo: Blink + Meld é a entrada; a regra do guia é nunca blinkar de volta pro lado do inimigo sem BKB pronto, porque o Blink trava e ela fica presa no meio do time inimigo.
- fonte: app/public/data/herois/templar_assassin.json (power_spikes[7], itens_core[3])

## Hurricane Pike (hurricane_pike)
- porque: ela não tem fuga própria, então o empurrão + alcance do Pike é o jeito de manter distância de melee.
- detalhe: construído em cima do Dragon Lance (Force Staff + receita). Dá +20 agi, +15 for, +15 int, +200 de vida e +130 de alcance; o ativo empurra o inimigo a 425 de distância e o aliado a 600, e dá +100 de velocidade de ataque por 5 golpes no alvo (CD 19 s, 150 de mana). O empurrão não interrompe as ações do alvo e não funciona contra quem está em Chronosphere, Duel ou Black Hole.
- contra: contra melee que depende de chegar perto para causar dano (ex. qualquer stun-and-stick), o empurrão de 425 some com o alcance do inimigo por um instante; use pra sair, nunca pra entrar, porque ele não cancela a mobilidade do próprio alvo.
- combo: soma ao alcance de Psi Blades (580 no nível 9) e mantém o kite contra melee enquanto o Refraction recarrega.
- fonte: app/public/data/herois/templar_assassin.json (itens_core[4], depois_dos_20); https://dota2.fandom.com/wiki/Hurricane_Pike; https://liquipedia.net/dota2/Hurricane_Pike (distância de empurrão 425/600 e exceções de Chronosphere/Duel/Black Hole)

## Black King Bar (black_king_bar)
- porque: sem BKB ela é o alvo que o time inimigo trava primeiro; com ele, ela entra na primeira luta de 5v5 sem morrer parada.
- detalhe: Avatar dá imunidade à maioria dos feitiços e também a dano puro e refletido durante o buff (9/8/7 s no 7.41, CD 95 s). Isso cobre até o próprio Psi Blades: se o INIMIGO estiver com Avatar ativa, o spill dela (dano puro) não passa.
- contra: lane ou luta com stun em cadeia e burst (Pudge, Night Stalker, Lion, Dark Seer, Doom): sem BKB pronto ela morre travada antes de dar o 1º Meld; com ele, aguenta o primeiro disable e ainda ataca.
- combo: BKB + Blink + Pike é o que o guia chama de "assassino de backline"; sem BKB ela é só o alvo que o time trava.
- fonte: app/public/data/herois/templar_assassin.json (power_spikes[11], itens_core[5], depois_dos_20); https://liquipedia.net/dota2/Black_King_Bar (imunidade a dano puro e refletido)

## Daedalus (greater_crit)
- porque: é o maior spike de dano puro pra fechar o jogo antes dos 35 min, quando a taxa de vitória dela ainda está em 49,5%.
- detalhe: Crystalys (2.000) evolui pra Daedalus (5.100-5.200 dependendo da revisão do patch): +88 de dano e 30% de chance de crítico a 225%. É dano físico normal multiplicado, então passa pelas mesmas regras de acerto/esquiva de qualquer ataque.
- contra: herói ou item de evasão alta (Butterfly, Windrun da Windranger, Blur da Phantom Assassin, Primal Split do Brewmaster) reduz o valor do crítico porque o ataque pode simplesmente errar; nesse caso o Monkey King Bar resolve melhor.
- combo: Daedalus + Swift Blink é o 5º e 6º item do pool local; o jogo precisa fechar perto dos 35 min, porque depois disso a vitória cai pra 42,1%.
- fonte: app/public/data/herois/templar_assassin.json (power_spikes[13], itens_core[7]); dota-imortal/data/opendota/items.json

## Monkey King Bar (monkey_king_bar)
- porque: contra alvo com chance alta de esquivar ataques, o dano físico dela simplesmente erra sem o MKB.
- detalhe: a passiva Pierce dá 80% de chance por ataque de ignorar a esquiva do alvo (o ataque não pode falhar nesse proc) e soma +70 de dano mágico; não funciona contra estrutura nem contra ward. Dá ainda +50 de dano e +50 de velocidade de ataque.
- contra: Phantom Assassin (Blur/Coup de Grace), Windranger (Windrun), Butterfly e Brewmaster (Primal Split) são os casos em que o dano físico dela falharia sem o item; vale a troca pelo Daedalus quando o time inimigo tem evasão.
- fonte: app/public/data/herois/templar_assassin.json (itens_core[8]); https://liquipedia.net/dota2/Monkey_King_Bar (mecânica de Pierce, 80% de chance, ignora evasão)

## Swift Blink (swift_blink)
- porque: +25 de agilidade e +40 de velocidade de movimento deixam o circuito de reposicionamento mais rápido no fim de jogo, somando dano e mobilidade no mesmo slot do Blink.
- detalhe: evolução do Blink Dagger com Eaglesong; mantém a mecânica de bloqueio de 3 s do Blink normal.
- combo: junto do Daedalus é o 5º/6º item padrão do pool local; os dois fecham perto dos 30-32 min, antes da janela em que a vitória cai.
- fonte: app/public/data/herois/templar_assassin.json (power_spikes[13], itens_core[9])

## Aghanim's Shard (aghanims_shard)
- porque: deixa você conjurar Refraction mesmo travada por um disable, quando o Meld já não ajuda.
- detalhe: custa 1.400 e fica disponível na loja a partir de 16:30 no 7.41f. Dá +30 de dano bônus na Refraction e permite conjurá-la enquanto disabled (confirmado para stun; a fonte não deixa explícito se cobre silence).
- contra: contra lane ou pickoff com stun forte (Pudge, Night Stalker, Lion), o Shard resolve parte do problema de ficar travada sem conseguir reagir, mas não troca o BKB: ela ainda toma o dano todo durante o disable, só ganha o Refraction de volta.
- fonte: app/public/data/herois/templar_assassin.json (itens_situacionais[0]); https://liquipedia.net/dota2/Templar_Assassin (upgrade do Shard: Refraction pode ser conjurada enquanto disabled)

## Satanic (satanic)
- porque: dá sustain pra jogo que passou dos 35 min e o time não fechou, quando a vitória dela já caiu pra 42,1%.
- detalhe: 5.050 de ouro: +25 de força, +25 de dano, 25% de lifesteal (15% em creep desde o nerf do 7.41f), CD 40 s.
- fonte: app/public/data/herois/templar_assassin.json (itens_situacionais[1])

## Linken's Sphere (sphere)
- porque: protege de um nuke ou disable de alvo único quando o BKB já caiu ou ainda não saiu.
- detalhe: Spellblock bloqueia o próximo feitiço de alvo único que te atinge, uma vez a cada 14 s; feitiço de projétil é bloqueado no impacto, não no cast; não bloqueia feitiço de área nem de aliado.
- contra: herói com um único nuke forte de alvo único e pouca coisa barata pra gastar o cooldown antes (Lion, Doom, Razor) é quem mais perde valor contra o Sphere, porque não tem como "gastar" o bloqueio antes do feitiço que importa.
- fonte: app/public/data/herois/templar_assassin.json (itens_situacionais[2]); https://dota2.fandom.com/wiki/Linken%27s_Sphere

## Butterfly (butterfly)
- porque: contra time com dano físico pesado e jogo que passa dos 35 min, a evasão reduz quanto ela morre travada no meio da luta.
- detalhe: +35 agilidade, +25 de dano, 35% de evasão (5.450).
- combo: nos dados do projeto ela sempre saiu tarde demais (40 a 46 min) pra decidir o jogo; o próprio guia marca que o ouro dos 25-35 min rende mais em MKB ou Daedalus.
- fonte: app/public/data/herois/templar_assassin.json (itens_situacionais[3], erros_comuns); dota-imortal/data/opendota/items.json

## Nullifier (nullifier)
- porque: remove o que te impede de alcançar o alvo (Ghost Scepter, Eul's, Glimmer, Aeon Disk).
- detalhe: 4.350 de ouro. É item de nicho mesmo no 7000+: 5,0% das builds do D2PT, comprado perto dos 36 min.
- fonte: app/public/data/herois/templar_assassin.json (itens_situacionais[4])

## Silver Edge (silver_edge)
- porque: dá break (remove passiva defensiva do alvo) junto do bônus de invisibilidade, pra um pickoff mais limpo.
- detalhe: 5.700 de ouro. Item de nicho: só 2,8% das builds do D2PT e nenhum dos jogos de referência do projeto comprou.
- fonte: app/public/data/herois/templar_assassin.json (itens_situacionais[5])

## Aghanim's Scepter (ultimate_scepter)
- porque: só compensa quando o plano é pickoff com várias traps plantadas, porque o upgrade depende de ter trap no lugar certo.
- detalhe: 4.200 de ouro. Psionic Trap passa a silenciar de 0,25 a 3 s ao disparar e libera a Psionic Projection: teleporte até uma trap, canal de 2 s, 400 de dano, CD 10 s, 50 de mana.
- combo: só vale a pena com traps plantadas nas rotas de gank (crossing_stream, bounty, poço do Roshan); sem isso o upgrade não tem o que silenciar.
- fonte: app/public/data/herois/templar_assassin.json (itens_situacionais[6], depois_dos_20)

## Hydra's Breath (hydras_breath)
- porque: aproveita o Dragon Lance já comprado, mas o próprio projeto não tem base de elite pra recomendar ele como padrão.
- detalhe: 5.900 de ouro. Apareceu em 3 jogos do projeto (27,4 a 34,2 min) e em 2 dos jogos de Immortal de referência (17,7 e 33,0 min), sem um padrão claro de quando compensa.
- fonte: app/public/data/herois/templar_assassin.json (itens_situacionais[7])
