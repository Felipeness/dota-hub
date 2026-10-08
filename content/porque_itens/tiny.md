---
id: porque-itens-tiny
titulo: "Por que cada item: Tiny"
heroi: Tiny
patch: 7.41
fontes:
- app/public/data/herois/tiny.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/work/ref/heroi-tiny/patch_7.40.json
- dota-imortal/work/ref/heroi-tiny/patch_7.41.json
- dota-imortal/work/ref/heroi-tiny/patch_7.41b.json
- dota-imortal/work/ref/heroi-tiny/patch_7.41c.json
- dota-imortal/work/ref/heroi-tiny/patch_7.41e.json
- dota-imortal/work/ref/heroi-tiny/patch_7.41f.json
- https://liquipedia.net/dota2/Tiny
---

## Power Treads (power_treads)
- porque: Troca de atributo cedo, pra aguentar o mana alto da lane (279 no nível 1) e trocar pra Força na hora de bater.
- detalhe: Power Treads dão +10 no atributo trocado (Força, Agilidade ou Inteligência) e 45/55 de velocidade de movimento. O guia do projeto fecha a compra em 100% dos 505 jogos pro, mediana 6,0 min; comprar até 7,5 min dá 53% de vitória contra 38% entre 7,5 e 10 min (OpenDota, todas as faixas). O Tiny troca pra Inteligência antes de gastar o Avalanche (105 de mana no nível 1) e pra Força antes de bater.
- combo: nenhum combo específico confirmado.
- fonte: tiny.json guia.itens_core; items.json power_treads.

## Echo Sabre (echo_sabre)
- porque: Dobra o ataque com lentidão, dano e Força; cada minuto de atraso entre 10 e 13 min custa ~10 pontos de vitória no campo pro.
- detalhe: Echo Strike faz o ataque sair em dobro a cada 5 s, com 0,8 s de lentidão no 1º golpe; soma +20 de dano, +15 de Força e 1,75 de regen de mana. É o puxão de força do meio-jogo: no campo pro (505 jogos) 99% compram, mediana 11,8 min, e a vitória cai de 75% (antes de 10 min) pra 29% (13 a 15 min) conforme atrasa.
- combo: é a base do Harpoon (Echo Sabre + Diadem), que dobra a entrada.
- fonte: tiny.json guia.itens_core; items.json echo_sabre.

## Shadow Blade (invis_sword)
- porque: Invisibilidade de 17 s com +175 de dano no ataque que a termina; abre os primeiros pickoffs e a 1ª torre inimiga.
- detalhe: Além do bônus de ataque, dá +25 de dano e +35 de velocidade de ataque fixos, e 20% de velocidade de movimento enquanto invisível (0,3 s de fade). Se a invisibilidade acabar sem atacar, o bônus de dano se perde. No campo pro 85% compram, mediana 17,6 min; a vitória cai de 71% (14 a 16 min) pra 37% (18 a 20 min) se atrasar.
- combo: evolui pra Silver Edge (Shadow Blade + Demon Edge), que soma 300 de dano e quebra passiva.
- fonte: tiny.json guia.itens_core; items.json invis_sword.

## Silver Edge (silver_edge)
- porque: Entrada invisível com 300 de dano e quebra de passivas por 5 s; separa o Tiny que inicia do que só reage.
- detalhe: 17 s de invisibilidade, move 20% mais rápido (caiu de 25% pra 22% no 7.41c e de 22% pra 20% no 7.41f), recarga de 23 s (subiu de 20 s pra 22 s no 7.41c e de 22 s pra 23 s no 7.41f). O golpe que termina a invisibilidade causa 300 de dano físico, desativa passivas do alvo por 5 s e trava a velocidade de movimento dele em 200 por um tempo. No campo pro 72% compram, mediana 25,6 min; sem Silver Edge a vitória cai pra 27%.
- contra: a quebra de passiva (5 s) desliga qualquer passiva do alvo enquanto durar; é mecânica do item (items.json), não um achado específico de matchup do Tiny.
- combo: abertura clássica (guia do projeto): Silver Edge pra entrar invisível + Blink pro Toss.
- fonte: tiny.json guia.itens_core e guia.erros_comuns; items.json silver_edge; patch_7.41c.json; patch_7.41f.json.

## Black King Bar (black_king_bar)
- porque: Sem BKB pronto o Tiny não aguenta entrar em luta dos 20 aos 30 min; é o item que libera o all-in.
- detalhe: Avatar dá 60% de resistência mágica, imunidade a dano refletido/puro e dispel básico ao ativar; a duração é fixa em 9/8/7 s por nível (o 4º nível foi removido no 7.41, e desde o 7.41b a duração não é mais afetada por amplificação de buff). No campo pro 83% compram, mediana 25,5 min; sem BKB a vitória cai pra 40%.
- contra: times com muito controle mágico (stuns, silences e slows de feitiço) ficam sem efeito nesses 9/8/7 s, por definição do item.
- combo: nenhum combo específico confirmado.
- fonte: tiny.json guia.itens_core e guia.erros_comuns; items.json black_king_bar.

## Harpoon (harpoon)
- porque: Puxa quem está fugindo pra dentro do alcance e dobra o Echo Strike; fecha o alvo que o Tiny não alcançaria sozinho.
- detalhe: Upgrade de Echo Sabre + Diadem. Draw Forth puxa o Tiny e o alvo em até 35% da distância entre eles (sempre fica em alcance corpo a corpo se o Tiny for melee); desde o 7.41 também pode jogar em árvore. Soma +25 de dano e +25 de Força. No campo pro 77% compram, mediana 27,5 min.
- contra: alvos que fogem da luta: a puxada neutraliza a distância, segundo a descrição do próprio item.
- combo: nenhum combo adicional confirmado além da puxada.
- fonte: tiny.json guia.itens_core; items.json harpoon; patch_7.41.json; patch_7.41c.json.

## Blink Dagger (blink)
- porque: Toss e Avalanche de fora do alcance de resposta; é o jeito de iniciar sem levar o primeiro golpe.
- detalhe: Teleporta até 1.200 de distância (bloqueado por 3 s após levar dano de herói ou Roshan). A sequência recomendada pelo guia do projeto é Avalanche, pausa de ~1,3 s (1,5 s de stun + 1,1 s de voo) e Toss, somando ~2,5 s de controle. No campo pro 74% compram, mas o timing varia muito (p25 15,1 min, p75 29,3 min).
- combo: Toss no nível 4 com Grow 3 causa 710 de dano (dado do próprio guia do herói); é o burst de abertura depois do Blink.
- fonte: tiny.json guia.itens_core e guia.erros_comuns; items.json blink.

## Wraith Band / Magic Wand (wraith_band / magic_wand)
- porque: Stat barato pra lane de troca de magia; o Wand devolve vida e mana quando o inimigo conjura perto.
- detalhe: Wraith Band dá +5 Agilidade, +2 Força, +2 Inteligência, +6 de velocidade de ataque e 1,75 de armadura por 505 de ouro. Magic Wand (460) acumula carga (até 20) cada vez que um inimigo visível a 1.200 de distância usa habilidade, e cada carga restaura 15 de vida e mana.
- contra: lane com troca de magia ou sem regen própria.
- combo: nenhum confirmado.
- fonte: tiny.json guia.itens_situacionais; items.json wraith_band, magic_wand.

## Monkey King Bar (monkey_king_bar)
- porque: Contra evasão alta, o Tiny simplesmente erra sem ele.
- detalhe: 5.000 de ouro, +50 de dano, +50 de velocidade de ataque e 80% de chance de furar evasão com 70 de dano mágico extra por acerto; desde o 7.41 também dá +50 de alcance de ataque pra heróis corpo a corpo, o que ajuda o Tiny.
- contra: Phantom Assassin, Windranger, Butterfly e qualquer evasão alta.
- combo: nenhum confirmado.
- fonte: tiny.json guia.itens_situacionais; items.json monkey_king_bar; patch_7.41.json.

## Satanic (satanic)
- porque: Sustain em luta longa contra dano físico; sem ele o Tiny não tem lifesteal nenhum no kit.
- detalhe: +25 Força, +25 de dano e 25% de lifesteal passivo (reduzido de 30% no patch 7.41f). Unholy Rage soma mais lifesteal por 6 s (total de ~170%), com recarga de 40 s (subiu de 30 s no 7.41e).
- contra: lutas longas (33 a 45 min) contra burst físico, quando a cura chega mais rápido que o dano.
- combo: nenhum confirmado.
- fonte: tiny.json guia.itens_situacionais; items.json satanic; patch_7.41e.json; patch_7.41f.json.

## Aghanim's Shard (aghanims_shard)
- porque: Só compensa depois que Silver Edge e BKB já estão prontos; aumenta o alcance e o dano do combo de controle.
- detalhe: O Shard é um efeito só, que vale igual pra área de Toss, Tree Throw e Tree Volley: +125 de raio (Toss vai de 275 pra 400), +20% de dano na área (não no alvo agarrado/jogado em si) e 25% de lentidão de movimento mais 45 de lentidão de ataque por 2,5 s em quem estiver na área. No campo pro só 14% compram (mediana 41,6 min).
- combo: só entra depois de Silver Edge e BKB prontos, segundo o próprio guia do herói.
- fonte: tiny.json guia.itens_situacionais; items.json aghanims_shard.

## Aghanim's Scepter (ultimate_scepter)
- porque: Dá o Tree Volley, uma habilidade nova de dano em área a distância; raramente compensa o custo.
- detalhe: Canaliza por 2,5 s, lança 1 árvore a cada 0,5 s (5 no total), custa 200 de mana e tem 17 s de recarga. No campo pro só 6% compram (mediana 55,5 min) e nos pubs a taxa de vitória de quem compra é 34,5%.
- contra: nenhuma situação específica confirmada; o próprio guia descreve como "quase nunca".
- combo: nenhum confirmado.
- fonte: tiny.json guia.itens_situacionais; items.json ultimate_scepter.

## Overwhelming Blink (overwhelming_blink)
- porque: Alternativa ao Swift Blink quando o time precisa de mais Força e dano em área na entrada, não só de velocidade.
- detalhe: Teleporta até 1.200 de distância e, na aterrissagem, causa 100 + 50% da Força do Tiny em dano numa área de 800, mais o mesmo valor ao longo do tempo, com lentidão de 50% em movimento e ataque por 6 s. Bloqueado por 3 s após levar dano de herói ou Roshan. Raro: 7 compras em 505 jogos pro, mediana 38,8 min.
- combo: nenhum confirmado.
- fonte: tiny.json guia.itens_situacionais; items.json overwhelming_blink.

## Sange and Yasha / Manta Style (sange_and_yasha / manta)
- porque: Quando lentidão e silence decidem a luta, Status Resistance e o dispel do Manta dão a janela que falta.
- detalhe: Sange and Yasha dá +16 Força, +16 Agilidade, +20 de velocidade de ataque, 16% de Status Resistance, 30% de Resistência a Lentidão e 16% de cura recebida (reduzido de 20% no 7.41b). Manta Style (Yasha + Diadem no 7.41, não mais o Mask of Madness de patches antigos) cria 2 ilusões que causam 33% de dano corpo a corpo (ranged caiu pra 25% no 7.41f, mas isso não afeta o Tiny, que é melee) e aplica dispel básico ao usar.
- contra: composições com muita lentidão e silence de feitiço.
- combo: nenhum confirmado além do dispel ao ativar.
- fonte: tiny.json guia.itens_situacionais; items.json sange_and_yasha, manta; patch_7.41.json; patch_7.41b.json; patch_7.41f.json.

## Nullifier / Boots of Travel (nullifier / travel_boots)
- porque: Nullifier anula quem já fugiu com Ghost Scepter ou Glimmer; Boots of Travel só compensa em jogo muito longo.
- detalhe: Nullifier dispela o alvo e aplica um debuff de 4 s que continua dispelando e desacelerando (10% de lentidão); soma +75 de dano e +10 de armadura. Boots of Travel dão 90 de velocidade de movimento e TP sem gastar carga; o projeto só viu compra acima de 60 min (3% dos jogos pro, mediana 64,0 min).
- contra: Nullifier resolve contra fuga e contra Ghost Scepter/Glimmer, segundo o próprio guia do herói.
- combo: nenhum confirmado.
- fonte: tiny.json guia.itens_situacionais; items.json nullifier, travel_boots.

## Neutros (itens neutros, sem slug único)
- porque: Força de graça; o 7.41 oferece Quickened, Brawny e Tough em quase todos os tiers, que encaixam no perfil de Força do Tiny.
- detalhe: No campo pro o T1 mais comum é Duelist Gloves (21%), Chipped Vest (16%) ou Weighted Dice (13%); T2 Tumbler's Toy (28%) ou Mana Draught (18%); T3 Gunpowder Gauntlet (39%) ou Serrated Shiv (27%); T4 Giant's Maul (31%) ou Flayer's Bota (26%); T5 Stygian Desolator (quase só depois dos 60 min). Liberação no 7.41: T2 aos 15:00, T3 aos 25:00, T4 aos 35:00.
- contra: Greedy tira 30/60 de dano fixo, por isso é ruim pra um carry de dano como o Tiny.
- combo: nenhum confirmado.
- fonte: tiny.json guia.itens_situacionais.
