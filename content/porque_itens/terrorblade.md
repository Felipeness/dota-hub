---
id: porque-itens-terrorblade
titulo: "Por que cada item: Terrorblade"
heroi: Terrorblade
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/terrorblade.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/work/ref/mecanicas/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/work/ref/heroi-terrorblade/liq_terrorblade.wiki
- C:/Users/felip/Desktop/dota-imortal/work/ref/mecanicas/pn_7.41.txt
- C:/Users/felip/Desktop/dota-imortal/work/ref/mecanicas/pn_7.41e.txt
- C:/Users/felip/Desktop/dota-imortal/work/ref/mecanicas/pn_7.41f.txt
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
---

## Power Treads (power_treads)
- porque: Primeiro item: acelera o last hit e o movimento pra chegar na jungle cedo.
- detalhe: +10 Agilidade e +25 de velocidade de ataque no modo Agilidade, 370 de velocidade de movimento (bônus de 55 por ser corpo a corpo). Monta em Boots (500) + Gloves of Haste (450) + Boots of Elves (450). Antes dele o ritmo dos profissionais é de 6,3 last hits por minuto, depois sobe pra 9,3.
- combo: entra junto com o Falcon Blade no nível 6 pra abrir a mini jungle do pull.
- fonte: guia local (power spike Power Treads, nível 4, 5:00); dota-imortal/data/opendota/items.json

## Falcon Blade (falcon_blade)
- porque: Vida e regen de mana pra sustentar o Conjure Image em loop sem secar.
- detalhe: +200 de vida, +1,8 de mana por segundo e +14 de dano. O TB só tem 303 de mana e 0,95/s no nível 1, e cada Conjure Image custa 50 a 80; sem essa regen a rotina de ilusão trava rápido.
- combo: junto com o nível 6, é o gatilho da mini jungle (pull pequeno + grande entre waves, com 2 ilusões); ritmo sobe de 7,7 pra 12,0 last hits por minuto nos 3 min seguintes.
- fonte: guia local (power spike Nível 6 + Falcon Blade, 7:00-8:00)

## Yasha (yasha)
- porque: Agilidade e velocidade de ataque baratas pra acelerar o farm sozinho antes do Manta.
- detalhe: +16 Agilidade, +15 de velocidade de ataque e +10% de movimento. Monta em Blade of Alacrity + Boots of Elves. DPS efetivo sozinho sobe de 109 (min 10) pra 162 (min 12).
- combo: libera o loop A de jungle (6 camps, 2,4 min por volta) e é a base do Manta no 7.41.
- fonte: guia local (power spike Yasha, 11:30); dota-imortal/work/ref/mecanicas/items.json (componente do Manta)

## Manta Style (manta)
- porque: Maior salto de dano do herói: dobra o DPS sozinho e multiplica de novo com as 2 ilusões extras.
- detalhe: No 7.41 monta em Yasha + Diadem + receita (4.650 no total), não mais em Yasha + Ultimate Orb. Cria 2 imagens que, fora da Metamorphosis, batem com 33% do dano do TB (ele é melee); dentro da Metamorphosis a transformação também pega as ilusões a até 1200 de distância e elas passam a bater como ranged, 25% (era 28% antes do nerf do 7.41f). As imagens levam 300% de dano recebido. O cast é Basic Dispel com 0,1s de invulnerabilidade. DPS sozinho sobe de 171 (min 14) pra 256 (min 16); com 2 ilusões do Conjure Image mais as 2 do Manta, o guia estima 650 a 800.
- combo: libera o loop B de jungle (9 camps, 3,0 min) e o flooded Frog das 15:00; aparece em todos os 4 solos de Roshan confirmados do herói nos replays (ver roshan_solo/terrorblade.md).
- fonte: guia local (power spike Manta + Shard, 15:00-16:00); dota-imortal/data/opendota/items.json (dispel, custo); dota-imortal/work/ref/mecanicas/pn_7.41f.txt (nerf do dano ranged); dota-imortal/work/ref/heroi-terrorblade/liq_terrorblade.wiki (Metamorphosis afeta ilusões a 1200 de raio); dota-roshan-solo/data/solos.json

## Aghanim's Shard (aghanims_shard)
- porque: Desbloqueia o Demon Zeal, que fecha o loop de jungle grande e dá velocidade pra perseguir na luta.
- detalhe: Demon Zeal dá +100 de velocidade de ataque, +60 de movimento e +20 de regeneração por 25s a Terrorblade e ilusões a até 1200 de distância, custando 20% da vida atual (recarga 45s no 7.41, caiu de 60s). Não funciona dentro da Metamorphosis, e usar Metamorphosis ou Terror Wave cancela o Demon Zeal antes da hora.
- combo: mesmo spike do Manta (15:00-16:00); juntos liberam o loop de 9 camps grandes em ~3 min (276 de ouro e 511 de XP por minuto).
- fonte: guia local; dota-imortal/data/opendota/constants_abilities.json (terrorblade_demon_zeal); dota-imortal/work/ref/mecanicas/pn_7.41.txt (recarga 60s->45s, duração 30s->25s)

## Dragon Lance (dragon_lance)
- porque: Agilidade e Força que virou alcance de verdade na Metamorphosis, pra bater torre e herói de mais longe.
- detalhe: +15 Agilidade e +10 Força. Custa 2.000 no 7.41 (subiu de 1.900 por mudança no preço do componente). O bônus de alcance só conta pra unidade ranged; dentro da Metamorphosis o ataque passa de 600 pra 730 de alcance. Ritmo sobe de 16,2 pra 18,3 last hits por minuto depois da compra.
- combo: com Metamorphosis 4/4 (600 de alcance) somando os 130 do Dragon Lance, dá pra bater torre e herói sem entrar no alcance de resposta deles.
- fonte: guia local (power spike Dragon Lance, nível 14); dota-imortal/work/ref/mecanicas/items.json (custo 2.000); dota-imortal/work/ref/mecanicas/pn_7.41f.txt (alta de preço do componente)

## Eye of Skadi (skadi)
- porque: Vida e lentidão pra aguentar a frente da luta depois que o burst de dano já tá pronto.
- detalhe: +35 em tudo (~770 de vida), lentidão de 25% no movimento de alvo melee (50% contra ranged), 25% na velocidade de ataque do alvo e -50% na restauração de vida dele por 3s a cada hit. O 7.41e subiu a lentidão de ataque de 20% pra 25%, e o 7.41 base subiu a redução de restauração de 40% pra 50%.
- combo: aparece em 3 dos 4 solos de Roshan confirmados do TB nos replays, sempre com Manta.
- fonte: guia local (power spike Eye of Skadi, 25:00-26:00); dota-imortal/work/ref/mecanicas/pn_7.41.txt e pn_7.41e.txt; dota-roshan-solo/data/solos.json

## Black King Bar (black_king_bar)
- porque: Sem ele, um time com 3 ou mais controles mata o TB antes de ele bater.
- detalhe: Basic Dispel + 60% de resistência mágica + imunidade a dano refletido e puro por 9/8/7 segundos (cai a cada BKB extra comprado). Durante o Avatar nenhum efeito negativo de feitiço inimigo funciona; mas o próprio Sunder e a própria Reflection do TB não passam pelo BKB do inimigo.
- contra: Earth Spirit, Sand King, Elder Titan, Outworld Destroyer, Lich e Doom (regra geral: comprar com 3 ou mais desses no time inimigo). No jogo 2 do Felipe as 6 mortes depois dos 26 min vieram contra os 4 primeiros desse grupo (Earth Spirit, Sand King, Elder Titan e Outworld Destroyer), com o BKB comprado só aos 41:16.
- fonte: guia local (erros_comuns, depois_dos_20, power spike BKB); dota-imortal/data/opendota/items.json (duração do Avatar)

## Hurricane Pike (hurricane_pike)
- porque: Empurra e dá alcance temporário pra alcançar o alvo do Sunder sem gastar Blink.
- detalhe: Afasta você e o alvo 425 de distância e por 6s libera 5 ataques sem restrição de alcance e +100 de velocidade de ataque. Monta em Dragon Lance (2.000) + Force Staff (2.200) + receita. Custa 4.550 no 7.41f (subiu de 4.450 pela alta do Dragon Lance).
- combo: fecha a distância até o alvo de 475 do Sunder quando falta Blink, ou escapa de gank sem precisar de TP.
- fonte: guia local (itens_situacionais, 13 de 19 profissionais); dota-imortal/data/opendota/items.json; dota-imortal/work/ref/mecanicas/pn_7.41f.txt

## Butterfly (butterfly)
- porque: Evasão e dano de carry físico pra quando o time já tem BKB e Skadi prontos.
- detalhe: +30 Agilidade e +30 de dano no 7.41e (era +35 Agilidade e +25 de dano antes; o patch trocou parte da Agilidade por dano puro). Monta em Eaglesong (2.800) + Claymore + Talisman of Evasion. A evasão empilha de forma decrescente com outras fontes.
- contra: carries físicos de right-click, cuja chance de acerto cai bastante contra a evasão.
- combo: aparece em 3 dos 4 solos de Roshan confirmados do TB, junto com Manta e Skadi.
- fonte: guia local (itens_situacionais, 11 de 19 profissionais); dota-imortal/work/ref/mecanicas/pn_7.41e.txt; dota-roshan-solo/data/solos.json

## Daedalus (greater_crit)
- porque: Dano puro pra fechar jogo depois dos 35 min, quando falta burst em herói.
- detalhe: 30% de chance de causar 225% de dano por ataque; não funciona contra construções, então ajuda a matar herói, não a derrubar torre. Custa 5.200 no 7.41f.
- fonte: guia local (itens_situacionais, 6 de 19 profissionais); dota-imortal/work/ref/mecanicas/items.json

## Monkey King Bar (monkey_king_bar)
- porque: Fura evasão quando o inimigo tem Phantom Assassin, Butterfly ou Brood Mother.
- detalhe: 80% de chance de furar evasão e causar 70 de dano mágico bônus por ataque, +50 de alcance corpo a corpo e +50 de dano e velocidade de ataque. Compra reativa, não proativa.
- contra: Phantom Assassin, Butterfly inimigo e Broodmother: times de alta evasão anulam quase todo o DPS físico do TB sem isso.
- fonte: guia local (itens_situacionais: "contra evasão: Phantom Assassin, Butterfly inimigo, Brood"); dota-imortal/data/opendota/items.json

## Bloodthorn (bloodthorn)
- porque: Silencia e garante acerto certo pra fechar kill em herói que escapa com espaço ou invisibilidade.
- detalhe: Silencia por 5s e no final devolve 60% do dano recebido no período como dano mágico, mais True Strike e 40% de chance de furar evasão contra o alvo silenciado. Monta em Oblivion Staff (1.625) no lugar de Hyperstone desde o 7.41. Custa 6.400.
- contra: heróis de escape como Storm Spirit e Puck, que o silêncio prende antes de saírem da luta.
- fonte: guia local (itens_situacionais: "contra alvos que escapam: Storm Spirit, Puck"); dota-imortal/data/opendota/items.json; dota-imortal/work/ref/mecanicas/pn_7.41.txt

## Satanic (satanic)
- porque: Sustain de vida no 6º slot quando a luta já é de troca prolongada.
- detalhe: Unholy Rage dá 175% de lifesteal por 6s (Basic Dispel no cast). O 7.41e aumentou a recarga de 30 pra 40s e o 7.41f cortou o lifesteal de 30% pra 25% (15% contra creep), então rende menos sustain contínuo que antes.
- combo: no único solo de Roshan dos replays em que o TB saiu com a vida praticamente intacta, o item no inventário era o Satanic.
- fonte: guia local (itens_situacionais: "nerfado em 7.41e/f"); dota-imortal/work/ref/mecanicas/pn_7.41e.txt, pn_7.41f.txt; dota-roshan-solo/data/solos.json

## Hydra's Breath (hydras_breath)
- porque: Dentro da Metamorphosis o TB fica ranged e ganha o splitshot, então o item rende mais ataques espalhados pra limpar grupo.
- detalhe: Ataques aplicam veneno (2,5% da vida máxima do alvo por 3s) e, em ataque ranged, 30% de chance de disparar projéteis extras em até 3 inimigos próximos. Dá +25 de dano, +30 Agilidade, +15 Força e +150 de alcance só pra unidade ranged. Custa 5.900 no 7.41f (a receita caiu de 1.100 pra 1.000 pra compensar a alta do Dragon Lance, que é componente).
- contra: o veneno não pode ser aplicado a Roshan nem por ilusões, então contra ele o ganho real é só o dano e os atributos do item, não o splitshot.
- combo: aparece em 3 dos 4 solos de Roshan confirmados do TB, sempre junto com Manta e Power Treads.
- fonte: guia local (itens_situacionais); dota-imortal/work/ref/mecanicas/pn_7.41.txt (item novo do patch), pn_7.41f.txt (ajuste de receita); dota-roshan-solo/data/solos.json

## Orchid Malevolence (orchid)
- porque: Silêncio barato pra abrir uma kill em suporte ou carry fujão antes de ter o Bloodthorn.
- detalhe: Silencia por 5s e devolve 30% do dano recebido no período como dano mágico extra ao fim. Dá +35 de velocidade de ataque e +20 de dano. Monta em Claymore (1.350) no 7.41, no lugar de Cornucopia.
- contra: suportes de pick-off ou carry com escape que o time precisa abater antes de fugir.
- fonte: guia local (itens_situacionais: "pra matar suporte ou carry que escapa"); dota-imortal/data/opendota/items.json; dota-imortal/work/ref/mecanicas/pn_7.41.txt

## Blink Dagger (blink)
- porque: Fecha a distância pra entrar com o Sunder (alcance 475) sem gastar o Hurricane Pike.
- detalhe: Teleporta até 1200 de distância e trava por 3s depois de levar dano de herói ou Roshan. Pouco usado pelo TB (2 de 19 profissionais): o Pike já cobre boa parte dessa função com menos risco de ficar travado perto do inimigo.
- fonte: guia local (itens_situacionais: 2 de 19, 4,5% dos pubs); dota-imortal/data/opendota/items.json

## Aghanim's Scepter (ultimate_scepter)
- porque: Dá Terror Wave: fear em área e Metamorphosis de graça, bom só quando o jogo já passou dos 40 min.
- detalhe: Onda que causa Fear por 2s (desarma, silencia e restringe comando) e 200 de dano em raio de até 1600, e dá 15s de Metamorphosis mesmo fora da forma de demônio, ou estende a duração se já estiver transformado. Custa 4.200. Pouco comprado pelos profissionais (3 de 19, 43,8 a 50,2 min).
- combo: entra como item de "esticar" o jogo: libera Metamorphosis instantâneo sem gastar o cooldown da habilidade base.
- fonte: guia local (itens_situacionais); dota-imortal/data/opendota/constants_abilities.json (terrorblade_terror_wave); dota-imortal/work/ref/heroi-terrorblade/liq_terrorblade.wiki

## Infused Raindrop (infused_raindrop)
- porque: Protege a lane contra o nuke de suporte de dano mágico sem gastar slot de verdade.
- detalhe: 6 cargas que bloqueiam 120 de dano mágico cada vez que uma instância de dano passa de 75. Custa 225, disponível a partir dos 3:00.
- contra: Lich, Lina, Skywrath Mage e outros suportes de dano mágico na lane.
- fonte: guia local (itens_situacionais: "contra suporte de dano mágico na lane: Lich, Lina, Skywrath"); dota-imortal/data/opendota/items.json

## Dust of Appearance (dust)
- porque: Revela herói invisível pra que as ilusões do TB consigam bater nele.
- detalhe: Cria uma área de 1.050 de raio por 12s que revela e reduz 20% de velocidade de invisíveis, com o debuff ficando mais 8s depois de saírem da área. As ilusões do Conjure Image e do Manta não atacam o que não têm visão.
- contra: Bounty Hunter, Riki, Clinkz e Weaver: heróis invisíveis que as ilusões simplesmente ignoram sem revelação.
- fonte: guia local (itens_situacionais: "as ilusões não batem no que não veem"); dota-imortal/data/opendota/items.json
