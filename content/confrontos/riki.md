---
id: confrontos-riki
heroi: Riki
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/riki.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/puck.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shadow_demon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/warlock.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/mars.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lich.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/luna.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ursa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/juggernaut.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- https://api.opendota.com/api/constants/aghs_desc
- https://dota2.fandom.com/wiki/Riki
---

## Como essa lista foi montada
8 oponentes são os que mais enfrentaram Riki em partidas de pro (Rubick, Puck, Shadow Demon, Warlock, Shadow Fiend, Mars, Lion e Lich, OpenDota `/heroes/32/matchups` via `pro_dados/riki.json`). Desses, só Rubick passa dos 30 jogos (32), então é o único matchup sem a ressalva de amostra pequena; nenhum outro confronto do Riki no banco de dados chega a esse volume, então o critério de "maior vantagem/desvantagem com 30+ jogos" não rendeu nomes além do próprio Rubick. Os outros 5 são carries pos 1 (critério de mesma posição principal, `herois_catalogo.json`) ordenados pelo volume de partidas de pro no patch 7.40+7.41 (`resumo.n` de cada `pro_dados/<slug>.json`): Tiny (3127), Luna (1970), Templar Assassin (1681), Ursa (1641) e Juggernaut (963), incluídos mesmo quando a amostra direta contra Riki é pequena, porque são os carries que mais aparecem no cenário competitivo e comparar o power spike dos dois sempre vale, mesmo sem lane em comum.

## Contra Rubick (rubick)
- placar: 12 vitórias em 32 partidas de pro, 37,5% (OpenDota /heroes/32/matchups, pro_dados/riki.json)
- por que importa: é quem mais pegou Riki em partidas de pro (32 jogos) e o pior resultado seu com amostra robusta na lista inteira.
- janelas: Rubick sai em Arcane Boots aos 10:18 (mediana, pro_dados/rubick.json) sem ameaça isolada; seu Diffusal Blade fecha aos 14:18 (pro_dados/riki.json) e esse é o seu auge pra caçar ele sozinho; dos 17:06 (Observer Ward) aos 18:18 (Sentry Ward) ele consolida visão em área; seu Manta Style (25:12) e Aghanim's Shard (25:24) chegam só depois dessa janela de visão, então o jogo vira sobre furar sentry, não sobre ficar invisível perto dela.
- o que ele faz com você: Spell Steal (Unit Target, constants_hero_abilities.json) rouba Smoke Screen ou Blink Strike se você usar perto dele e devolve a própria ferramenta contra seu time; Telekinesis (Unit Target) te levanta no ar e, se pega durante o canal de Tricks of the Trade, interrompe a ultimate.
- o que você faz com ele: ele não tem fuga própria; Blink Strike (dano bônus de 15 a 60 por nível, slow de 100% por 0,75s, constants_abilities.json) fecha a distância e Backstab (0,55x da sua agilidade por ataque) mata rápido fora da visão do time dele.
- itens que viram: Diffusal Blade seca o mana dele antes que consiga Spell Steal de novo; Aghanim's Shard reduz 5 de armadura no alvo enfumaçado e o torna impossível de ser alvo dos próprios aliados (aghs_desc), isolando ele quando pego sozinho.
- como jogar: não use Smoke Screen nem Blink Strike perto do Rubick fora de combate, ele rouba o que você mostrar; cace ele isolado antes dos 17-18 minutos, depois disso jogue em volta da visão dele, não contra ela.
- fonte: pro_dados/riki.json; pro_dados/rubick.json; constants_abilities.json; constants_hero_abilities.json; https://api.opendota.com/api/constants/aghs_desc

## Contra Shadow Demon (shadow_demon)
- placar: 10 vitórias em 27 partidas de pro, 37% (amostra pequena)
- por que importa: segundo suporte que mais aparece contra você em pro (27 jogos), função clássica de visão e disrupção contra invisível.
- janelas: Shadow Demon fecha Sentry Ward e Observer Ward quase juntos, mediana perto dos 18:48-19:00 (pro_dados/shadow_demon.json); antes disso ele é majoritariamente nuke fraco; seu Diffusal (14:18) já te dá pressão antes da visão dele fechar, então 14-18 min é sua melhor janela pra iniciar sem ser visto.
- o que ele faz com você: Disruption (Unit Target, precisa te ver) te bane do mapa por alguns segundos e, quando você volta, cria duas ilusões suas sob o controle dele, que lutam contra seu time enquanto você ainda tá fora do combate; Shadow Poison (AOE Point Target) causa dano em área mesmo que você esteja invisível dentro do raio, porque não precisa travar em alvo.
- o que você faz com ele: ele tem a menor vida do grupo de suportes da lista; Blink Strike + Backstab deleta ele em um ou dois ataques se pego sozinho antes da visão em área estar pronta.
- itens que viram: Aghanim's Shard isola ele de heal/peel quando enfumaçado; Diffusal Blade seca o mana antes que consiga castar Disruption de novo.
- como jogar: cace o Shadow Demon antes dos 18 minutos, antes da visão em área ficar pronta; depois disso, jogue em volta das wards.
- fonte: pro_dados/riki.json; pro_dados/shadow_demon.json; constants_abilities.json; constants_hero_abilities.json

## Contra Warlock (warlock)
- placar: 9 vitórias em 26 partidas de pro, 34,6% (amostra pequena), pior % entre os suportes da lista
- por que importa: é quem mais compra Sentry Ward cedo entre todos os seus oponentes (2136 sentries em pro_dados/warlock.json, mediana 19:06), clássico pick estacionário pra sustentar visão contra invisível.
- janelas: Warlock fecha Arcane Boots aos 10:42 e a primeira leva de wards perto dos 18:48-19:06; seu Diffusal (14:18) já está pronto antes disso, então as melhores trocas ficam entre os 14 e os 18 minutos, antes da visão dele se consolidar.
- o que ele faz com você: Upheaval (CHANNELED, AOE Point Target, raio de 575 a 650, constants_abilities.json) te atinge e desacelera mesmo invisível se você estiver dentro do raio, porque é área e não alvo travado; Chaotic Offering (AOE Point Target, raio de impacto 600) stuna por 0,8s e também não precisa de visão direta sua.
- o que você faz com ele: ele é parado e sem fuga própria; Blink Strike fecha a distância e Smoke Screen (miss rate de 40% a 70% por nível) faz ele errar os ataques do Golem contra seu time.
- itens que viram: Aghanim's Shard isola ele de heal, mas não anula Upheaval nem Chaotic Offering porque são área; Diffusal seca o mana antes do combo dele.
- como jogar: não dependa só da invisibilidade perto do Warlock, as duas habilidades principais dele são em área; ataque antes da visão consolidar ou force ele a gastar mana cedo.
- fonte: pro_dados/riki.json; pro_dados/warlock.json; constants_abilities.json; constants_hero_abilities.json

## Contra Lion (lion)
- placar: 9 vitórias em 23 partidas de pro, 39,1% (amostra pequena)
- por que importa: suporte com disable duro (Hex) que anula sua fuga por completo, e o 3º suporte que mais te enfrentou em pro.
- janelas: Lion sai em Tranquil Boots aos 7:24 e completa a primeira leva de wards perto dos 17:12-18:18 (pro_dados/lion.json); seu Diffusal (14:18) chega antes dessa visão, então a janela de 14 aos 17 min é onde você ataca com menos risco de ser hexado às cegas.
- o que ele faz com você: Hex (Unit Target, precisa te ver) desabilita todas as suas habilidades por alguns segundos, incluindo Blink Strike e Cloak and Dagger; Earth Spike é em linha e pode te acertar mesmo invisível se você estiver no caminho, já que é skillshot e não alvo travado.
- o que você faz com ele: ele é frágil e sem escape além de Teleport; Blink Strike fecha a distância antes que ele consiga castar Hex, e Smoke Screen silencia pra impedir qualquer resposta.
- itens que viram: seu Aghanim's Shard isola ele de peel; o item dele que mais importa contra você é Sentry Ward (não listado como item fechado, mas é o item de maior volume dele), já que sem ele Lion precisa acertar Hex às cegas.
- como jogar: inicie em cima do Lion antes que ele consiga virar de frente pra você, Hex exige visão e cast time; depois dos 18 minutos, jogue em volta das wards dele.
- fonte: pro_dados/riki.json; pro_dados/lion.json; constants_abilities.json; constants_hero_abilities.json

## Contra Lich (lich)
- placar: 12 vitórias em 22 partidas de pro, 54,5% (amostra pequena), melhor resultado seu entre os suportes de maior amostra
- por que importa: suporte de visão e controle como os outros, mas o único em que você tem vantagem clara mesmo com amostra pequena.
- janelas: Lich completa Tranquil Boots aos 8:18 e a leva de wards perto dos 18:36-19:00; seu Diffusal (14:18) chega bem antes, e como Lich não tem nenhum nuke de alto dano cedo, a janela 14-18 min é tranquila pra você forçar trocas.
- o que ele faz com você: Frost Blast (Unit Target no alvo primário, mas com dano em área ao redor, precisa te ver pra travar em você) desacelera e causa dano; Sinister Gaze (CHANNELED, puxa em linha) te interrompe se acertar, mas exige visão direta e tempo de canal.
- o que você faz com ele: ele é o suporte mais lento e com menos resposta de escape da lista; Blink Strike + Backstab mata rápido antes de ele reagir.
- itens que viram: Aghanim's Shard isola ele de heal/peel; Diffusal seca o mana que ele usaria pra reagir.
- como jogar: trate o Lich como alvo fácil até os 18 minutos; depois disso, respeite a visão em área como com os outros suportes.
- fonte: pro_dados/riki.json; pro_dados/lich.json; constants_abilities.json; constants_hero_abilities.json

## Contra Puck (puck)
- placar: 15 vitórias em 29 partidas de pro, 51,7% (amostra pequena)
- por que importa: é o mid roamer que mais apareceu contra você em pro (29 jogos), com rotações cedo que disputam o mesmo tempo de jogo mesmo sem lane em comum.
- janelas: Puck sai em Power Treads aos 8:18 e sua primeira grande ferramenta ofensiva, Witch Blade, fecha aos 13:42 (pro_dados/puck.json); seu Diffusal (14:18) chega quase junto, então os primeiros 14 minutos são de Puck roamando e punindo rotas isoladas, e dos 14 aos 22 min (Aghanim's Shard dele, 22:30) o jogo é mais parelho.
- o que ele faz com você: Waning Rift (AOE Point Target, raio 400, dano 60 a 240) te silencia e causa dano mesmo invisível se você estiver dentro do raio, porque é área; Dream Coil pode te prender se você estiver perto de outro herói enroscado.
- o que você faz com ele: Puck tem pouca vida e depende de Phase Shift pra sobreviver; Blink Strike com o slow de 100% evita que ele escape antes do Backstab acertar, mas cuidado porque Phase Shift o torna invulnerável por um instante mesmo sob ataque.
- itens que viram: seu Diffusal Blade (Inhibit) desacelera ele depois que Phase Shift acaba, evitando que ele reengaje; o Aghanim's Shard do Puck (22:30) dá dano mágico bônus nos ataques e faz ele atacar todos os inimigos no alcance toda vez que ele usa Phase Shift, então depois disso cada troca perto dele dói mais mesmo você pegando ele saindo da invulnerabilidade (https://api.opendota.com/api/constants/aghs_desc).
- como jogar: evite lutar perto de aliados enroscados em Dream Coil; ataque Puck fora do alcance de Waning Rift sempre que possível, e puna rotas isoladas dele antes dos 14 minutos.
- fonte: pro_dados/riki.json; pro_dados/puck.json; constants_abilities.json; constants_hero_abilities.json; https://api.opendota.com/api/constants/aghs_desc

## Contra Mars (mars)
- placar: 13 vitórias em 25 partidas de pro, 52% (amostra pequena), melhor % entre os oponentes com amostra razoável
- por que importa: offlane tanque de early game que também busca 1x1, e o único matchup com amostra de dois dígitos em que você está favorecido com folga.
- janelas: Mars sai em Phase Boots aos 8:30 e Soul Ring aos 7:54, ameaça desde muito cedo; seu Power Treads (7:30) sai quase junto, então os primeiros 10 minutos são parelhos; a partir dos 14:18 (seu Diffusal) você passa a ganhar a maioria das trocas, e o Blink Dagger dele (mediana 15:12, pro_dados/mars.json) só devolve o jogo parcialmente porque ele ainda depende de acertar Spear antes de engajar.
- o que ele faz com você: Spear of Mars (Point Target, skillshot em linha) pode te acertar mesmo invisível se você estiver no caminho, porque não precisa travar em alvo; Arena of Blood (AOE Point Target, raio 550) prende você dentro da arena mesmo sem visão direta, já que é a geometria da arena que bloqueia, não um alvo selecionado.
- o que você faz com ele: Smoke Screen silencia e reduz o acerto dele antes que consiga lançar Spear; Backstab aproveita o fato de Mars ser corpo a corpo e precisar virar de costas em algum momento pra reposicionar.
- itens que viram: seu Diffusal Blade reduz a regeneração de mana dele, encurtando quantas vezes ele consegue usar Spear por fight; o Aghanim's Shard do Mars (21:30) faz a Spear atravessar e empalar até 2 heróis, deixando um rastro de fogo que causa dano contínuo e desacelera, então depois disso até acertar de raspão vira punição em área (https://api.opendota.com/api/constants/aghs_desc).
- como jogar: evite ficar alinhado com aliados perto do Mars depois dos 21 minutos, por causa do rastro de fogo do shard dele; antes disso, vença a troca com Smoke Screen + Backstab enquanto ele ainda depende de acertar a Spear.
- fonte: pro_dados/riki.json; pro_dados/mars.json; constants_abilities.json; constants_hero_abilities.json; https://api.opendota.com/api/constants/aghs_desc

## Contra Shadow Fiend (nevermore)
- placar: 11 vitórias em 26 partidas de pro, 42,3% (amostra pequena)
- por que importa: é o carry pos 1 mais jogado em pro no patch 7.40+7.41 (3990 partidas, pro_dados/nevermore.json) e também quem mais te enfrentou direto entre os carries da lista.
- janelas: Shadow Fiend farma muito mais rápido que você: 78 last hits aos 10 min contra os seus 47 (resumo lh10, pro_dados), com Power Treads prontas aos 5:54; mesmo assim, seu Diffusal (14:18) chega bem antes do primeiro item grande dele, Dragon Lance (14:00) e Yasha (13:18), então até os 14 min a troca é parelha; depois dos 24:12 (Crystalys) e 27:12 (Demon Edge), o dano dele à distância passa a doer mais do que o seu Backstab consegue responder sem iniciar perfeito.
- o que ele faz com você: Shadowraze (três versões, AOE sem alvo travado, "deals damage to enemy units in the area") te acerta mesmo invisível se você estiver na área, porque é uma raze no chão, não um alvo; Requiem of Souls (ultimate, raio 1000, linhas) também é em área e pode te atingir mesmo sem visão direta.
- o que você faz com ele: ele é extremamente frágil e sem fuga além de Teleport; Blink Strike fecha a distância antes que ele consiga alinhar uma Raze, e Backstab mata em poucos ataques fora de visão do time dele.
- itens que viram: Diffusal Blade seca o mana que ele usaria pra combo de Razes; cuidado com Requiem depois dos 25 min, Manta Style (25:12) não dispensa o fato de a ultimate ser em área, só ajuda a reposicionar depois do primeiro hit.
- como jogar: não dependa só de ficar invisível perto do Shadow Fiend, as Razes e a Requiem são em área; pegue ele isolado antes dele conseguir alinhar as três Razes, o farm dele é muito mais rápido que o seu nos primeiros 10 minutos.
- fonte: pro_dados/riki.json; pro_dados/nevermore.json; constants_abilities.json; constants_hero_abilities.json

## Contra Templar Assassin (templar_assassin)
- placar: 7 vitórias em 13 partidas de pro, 53,8% (amostra pequena)
- por que importa: segundo carry mais jogado em pro (1681 partidas) e o rival mais direto em função: ela também vive de ficar escondida (Meld) e punir quem se aproxima.
- janelas: Templar Assassin farma muito mais rápido que você (73 last hits aos 10 min contra seus 47) e fecha Power Treads aos 6:00; o primeiro item grande dela, Desolator, sai aos 14:18, quase no mesmo minuto do seu Diffusal (14:18), então essa é a janela mais parelha; depois dos 22:42 (Crystalys) e 26:54 (Demon Edge) o dano físico dela supera o que você aguenta sem Manta pronto.
- o que ele faz com você: Meld (ficar parada = invisível) nega seu Backstab enquanto ela espera parada, e o bônus de dano de Meld (50 a 200 conforme nível, constants_abilities.json) ao sair do Meld pode te matar de surpresa; Refraction dá instâncias de redução de dano (3 a 6, 30 de barreira cada) que absorvem seus primeiros hits de Backstab inteiros.
- o que você faz com ele: Blink Strike ignora o fato de ela estar parada porque você escolhe o alvo; Smoke Screen reduz o acerto dela enquanto Refraction ainda não foi gasta, forçando ela a usar as instâncias antes da hora.
- itens que viram: seu Diffusal Blade reduz a regeneração de mana dela; o Desolator dela (14:18) reduz sua armadura em -6 por 7 segundos (items.json), tornando qualquer troca corpo a corpo depois disso pior pra você sem Manta Style pronto.
- como jogar: não entre em combate até esgotar as instâncias de Refraction dela, geralmente com um primeiro ataque de teste; depois dos 22 minutos ela farma e ataca mais rápido que você, então prefira trocas rápidas de pick antes disso.
- fonte: pro_dados/riki.json; pro_dados/templar_assassin.json; constants_abilities.json; constants_hero_abilities.json

## Contra Luna (luna)
- placar: 5 vitórias em 12 partidas de pro, 41,7% (amostra pequena)
- por que importa: terceiro carry mais jogado em pro entre os pos 1 que te enfrentaram (1970 partidas), farm altíssimo via Moon Glaives.
- janelas: Luna é a que mais farma rápido entre os carries da lista (69 last hits aos 10 min, GPM 695) e fecha Power Treads aos 5:36; seu Diffusal (14:18) chega bem antes do Manta dela (17:12), então 14-17 min é sua melhor janela pra pegar ela sozinha; depois dos 24:36 (Eaglesong) e 26:06 (Butterfly) ela farma rápido demais pra você acompanhar sem iniciativas certeiras.
- o que ele faz com você: Lucent Beam (Unit Target, precisa te ver) stuna e causa dano; Eclipse (ultimate) dispara feixes aleatórios pros inimigos próximos e pode te acertar mesmo invisível se você estiver perto o bastante, porque mira em unidades na área, não exclusivamente visíveis.
- o que você faz com ele: ela é frágil fora de Moon Glaives; Blink Strike + Backstab mata rápido se pega isolada, especialmente antes do Manta Style (17:12) dela, que seria a principal forma de escapar.
- itens que viram: Diffusal Blade reduz a regeneração de mana dela; cuidado com Manta Style dela depois dos 17 min, ele dispensa seu Smoke Screen e cria ilusões que confundem o Blink Strike.
- como jogar: force a troca antes dos 17 minutos, antes do Manta dela; depois disso, cheque ilusões antes de usar Blink Strike nela.
- fonte: pro_dados/riki.json; pro_dados/luna.json; constants_abilities.json; constants_hero_abilities.json

## Contra Tiny (tiny)
- placar: 4 vitórias em 9 partidas de pro, 44,4% (amostra pequena)
- por que importa: quarto carry mais jogado em pro (3127 partidas) e o único da lista cujo combo principal (Avalanche + Toss) é inteiramente em área, ignorando sua invisibilidade.
- janelas: Tiny não farma tão rápido quanto os outros carries da lista (44 last hits aos 10 min, mais perto do seu patamar), mas o Blink Dagger dele (mediana 15:54, pro_dados/tiny.json) muda tudo: antes disso ele é lento pra te alcançar, e seu Diffusal (14:18) chega antes; depois dos 15:54 ele pode iniciar o combo Avalanche+Toss de qualquer ângulo.
- o que ele faz com você: Avalanche (AOE Point Target) te acerta e stuna mesmo invisível se você estiver dentro do raio, porque é uma área no chão; Toss pega o aliado ou inimigo mais próximo dele, então se você estiver perto de um aliado dele no momento errado pode virar o projétil do combo.
- o que você faz com ele: Blink Strike fecha a distância antes do Blink dele estar pronto; Smoke Screen silencia e reduz o acerto antes de Avalanche sair.
- itens que viram: Diffusal Blade seca o mana que ele usaria pro combo Avalanche+Toss; depois do Blink Dagger dele (15:54), mantenha distância de aliados que possam virar alvo de Toss.
- como jogar: ataque o Tiny antes dos 16 minutos, antes do Blink dele; depois disso, não fique agrupado perto de aliados pequenos que sirvam de arremesso.
- fonte: pro_dados/riki.json; pro_dados/tiny.json; constants_abilities.json; constants_hero_abilities.json

## Contra Ursa (ursa)
- placar: 4 vitórias em 12 partidas de pro, 33,3% (amostra pequena), pior % entre os carries da lista
- por que importa: duelista 1x1 por excelência, assim como você, com amostra de 1641 jogos em pro; o confronto é literalmente sobre quem vence a troca corpo a corpo.
- janelas: Ursa fecha Phase Boots aos 5:48 e Battle Fury aos 13:42, bem antes do seu Diffusal (14:18); Overpower (3 a 6 ataques com 400 de bônus de velocidade de ataque, constants_abilities.json) é uma das primeiras habilidades que ele sobe, então mesmo cedo ele ganha qualquer troca prolongada; sua melhor janela é hit-and-run com Blink Strike antes dos 14 minutos, não troca direta.
- o que ele faz com você: Overpower aumenta a velocidade de ataque dele em qualquer troca prolongada, e Fury Swipes acumula dano a cada ataque consecutivo no mesmo alvo, te punindo por ficar perto demais; nenhuma das duas depende de te ver primeiro, só de te acertar uma vez.
- o que você faz com ele: Smoke Screen reduz o acerto dele logo no início da troca, antes que Overpower acumule ataques; Blink Strike com o slow de 100% ajuda a desengajar se a troca começar a virar.
- itens que viram: Diffusal Blade reduz a regeneração de mana dele; o Aghanim's Shard dele (26:06) faz Earthshock aplicar 3 cargas de Fury Swipes de uma vez (https://api.opendota.com/api/constants/aghs_desc), então depois disso o primeiro gap-close já deixa a próxima troca bem mais perigosa pra você.
- como jogar: nunca entre em troca prolongada com Ursa, é a especialidade dele; use Smoke Screen no início pra reduzir o dano antes de Overpower estabilizar, e prefira hit-and-run.
- fonte: pro_dados/riki.json; pro_dados/ursa.json; constants_abilities.json; constants_hero_abilities.json; https://api.opendota.com/api/constants/aghs_desc

## Contra Juggernaut (juggernaut)
- placar: 7 vitórias em 11 partidas de pro, 63,6% (amostra pequena), melhor % entre todos os carries da lista
- por que importa: clássico carry de farm e split push como você, e o rival mais direto em "quem vence o 1x1 tardio" via Omnislash.
- janelas: Juggernaut fecha Power Treads aos 5:30 e Battle Fury aos 13:36, perto do seu Diffusal (14:18); até os 17:12 (Yasha dele) a troca é parelha; depois dos 20:42 (Manta Style dele) ele ganha mobilidade extra, mas seu Aghanim's Shard (25:24) chega antes do Manta dele virar decisivo, então a janela dos 20 aos 25 min ainda favorece você se já tiver o Shard.
- o que ele faz com você: Omnislash (dispel 0, não remove debuff, cast range 450) te pega mesmo invisível se ele conseguir selecionar você no instante do cast, então o risco é todo no momento exato em que ele te vê; fora disso, Blade Fury (debuff immune, 80% de resistência mágica) o torna imune ao seu Smoke Screen enquanto ativo.
- o que você faz com ele: Blink Strike + Backstab mata rápido fora de Blade Fury; evite atacar durante a janela de Blade Fury, já que Smoke Screen não o afeta nesse estado.
- itens que viram: Diffusal Blade reduz a regeneração de mana dele; cuidado com o momento exato em que ele pode te ver pra Omnislash, perder visão um segundo antes do cast anula a ultimate dele.
- como jogar: ataque fora da janela de Blade Fury; quebre a visão dele antes que consiga confirmar o alvo do Omnislash, e puna o farm dele com ganks enquanto ele ainda depende de Battle Fury pra crescer.
- fonte: pro_dados/riki.json; pro_dados/juggernaut.json; constants_abilities.json; constants_hero_abilities.json
