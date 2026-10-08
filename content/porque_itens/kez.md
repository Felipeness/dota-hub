---
id: porque-itens-kez
titulo: "Por que cada item: Kez"
heroi: Kez
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/kez.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/content/roshan_solo (kez.md)
- https://liquipedia.net/dota2/Kez
- https://dotacoach.gg/en/heroes/kez
- https://liquipedia.net/dota2/Strong_dispel
- https://dota2.fandom.com/wiki/Axe
- https://liquipedia.net/dota2/Legion_Commander
---

## Power Treads (power_treads)
- porque: primeiro item, dá velocidade de ataque pra farmar rápido e alterna atributo pra não secar mana.
- detalhe: +25 de velocidade de ataque e +55 de movimento; alterne pra Intelecto antes de gastar mana no Echo Slash e volte pra Agilidade pra bater. Os pros fecham entre 5,0 e 6,0 min; Falcon Blade, recomendado por agregador, não apareceu em nenhum dos 28 jogos pro analisados.
- fonte: dota-hub/kez.json (guia.itens_core); OpenDota items.json

## Perseverance (pers)
- porque: sustenta vida e mana na lane pra não perder farm por pool de mana curto.
- detalhe: componente de 1.400 de ouro que vira Mage Slayer. Só regen de 5,5 de vida e 2,25 de mana no 7.41f, mas evita secar o pool de 315 de mana do nível 1 ao usar Echo Slash pra fechar last hit de creep ranged. Pros fecham aos 9,9 min (28 de 28 jogos).
- fonte: dota-hub/kez.json (guia.itens_core)

## Mage Slayer (mage_slayer)
- porque: primeiro item grande, limpa camp rápido e corta o nuke do offlaner inimigo.
- detalhe: +12 de dano, debuff de 35 de dano físico por segundo no alvo marcado, -40% de dano de feitiço do alvo e +18% de resistência mágica pra você. Fecha por volta dos 12 min, junto do nível 10 (Echo Slash rank 4); use pra limpar large e o Frog evoluído da jungle e pra pressionar quando o offlaner sair de lane.
- contra: heróis que dependem de burst mágico pra abrir luta (Zeus, Lion, Shadow Shaman) perdem 40% desse dano enquanto o debuff dura em você.
- fonte: dota-hub/kez.json (guia.itens_core, power spike "Mage Slayer e Echo Slash 4")

## Desolator (desolator)
- porque: derruba a armadura do alvo, incluindo prédio, pra emendar push direto depois de ganhar a luta.
- detalhe: -6 de armadura por 7 segundos e +55 de dano. A redução de armadura vale em construção (confirmado no datafeed oficial), então dá pra ir da luta pra torre sem perder o debuff. Pros fecham aos 16,6 min (22 de 28 jogos); Satanic, dos três pros analisados, só fez Desolator em 3 de 9 jogos, preferindo Yasha/Manta/Butterfly nos outros 6.
- combo: é o item mais cedo confirmado num Roshan solo do Kez por replay: nível 23, 35:48, junto de Satanic, Aghanim's Scepter, Black King Bar, Mage Slayer e Power Treads.
- fonte: dota-hub/kez.json (guia.itens_core); OpenDota items.json ("Armor reduction works on buildings"); dota-roshan-solo/data/solos.json (replay 9006604405)

## Black King Bar (black_king_bar)
- porque: sem ele você morre pro controle antes de conseguir bater: 15 das 31 mortes dos seus 4 jogos vieram antes de comprar o BKB.
- detalhe: imunidade a feitiço e remoção de debuffs básicos por 7 a 9 segundos (o tempo cai a cada uso, não a cada compra: comprar outro BKB não reseta a contagem). Pros fecham perto dos 25 min (Yatoro, o mais cedo, aos 20,0); antecipe contra 2 ou mais controles duros do time inimigo.
- contra: Call do Axe e Duel do Legion Commander atravessam o BKB: as duas são feitas pra ignorar imunidade a feitiço (confirmado por página oficial do herói e por descrição da habilidade). Contra Duel, quem bloqueia é Linken's Sphere, não o BKB; contra Call não existe bloqueio de item, só não ficar sozinho e visível.
- combo: está presente nos 6 de 6 solos de Roshan confirmados do Kez por replay, é a base de todo combo de Roshan dele.
- fonte: dota-hub/kez.json; dota-roshan-solo/data/solos.json; https://dota2.fandom.com/wiki/Axe ("Not blocked by Linken's Sphere"); https://liquipedia.net/dota2/Legion_Commander (Duel "blocked by Spell Block sources")

## Aghanim's Scepter (ultimate_scepter)
- porque: libera a troca de arma pra encadear duas habilidades (uma de cada arma) na mesma luta.
- detalhe: normalmente trocar de arma bota a habilidade gêmea em recarga; com o Scepter isso não acontece se for a primeira habilidade usada em até 3 segundos depois da troca. Dá pra fazer Raven's Veil + Raptor Dance, ou Echo Slash + Falcon Rush, sem esperar a recarga de 30 a 40 s dividida entre elas. Pros fecham aos 24,8 min (22 de 28 jogos); Watson, o mais cedo, aos 19,5.
- combo: apareceu em 3 dos 6 solos de Roshan confirmados do Kez (35:48, 47:48 e 57:11), sempre junto de BKB.
- fonte: dota-hub/kez.json; https://liquipedia.net/dota2/Kez (Scepter upgrades Switch Discipline); dota-roshan-solo/data/solos.json

## Daedalus (greater_crit)
- porque: dano puro de crítico pra fechar luta rápido; não ajuda a derrubar prédio.
- detalhe: 30% de chance de 225% de dano; o crítico não funciona contra construção (só os +88 de dano e o -6 de armadura do Desolator contam pra torre). Compre antes do Blink se o time inimigo tem pouco alcance. Pros fecham o Crystalys aos 29,2 min e o Daedalus aos 33,5.
- fonte: dota-hub/kez.json; OpenDota items.json ("Critical Strike does not work against buildings")

## Blink Dagger -> Swift Blink (blink)
- porque: fecha a iniciação, colocando você em cima do alvo marcado pelo Raven's Veil pra garantir o golpe crítico.
- detalhe: Raven's Veil marca a área e cega por 4 s; Blink te leva pro alvo marcado; o primeiro golpe nele é crítico garantido com stun de 0,5 a 0,8 s. Swift Blink some bônus de dano/velocidade no teleporte, mas a sequência já funciona com o Blink comum. Nos solos confirmados por replay, quando aparece é sempre como Swift Blink (nunca Blink puro).
- combo: apareceu em 3 dos 6 solos de Roshan confirmados do Kez (50:49, 67:53 e 67:07).
- fonte: dota-hub/kez.json; dota-roshan-solo/data/solos.json

## Linken's Sphere (sphere)
- porque: bloqueia a primeira habilidade direcionada contra você, a resposta real pra travas de alvo único que o BKB não resolve.
- detalhe: 4.800 de ouro; bloqueia um alvo direcionado por vez, com recarga própria. Watson comprou aos 25,3 min contra Doom e Bane, Satanic aos 30,6.
- contra: bloqueia o Duel do Legion Commander (confirmado: a habilidade é parada por Spell Block). Não bloqueia Call do Axe, que ignora Spell Block (confirmado na página oficial do herói).
- fonte: dota-hub/kez.json; https://liquipedia.net/dota2/Legion_Commander; https://dota2.fandom.com/wiki/Axe

## Monkey King Bar (monkey_king_bar)
- porque: garante que seus golpes acertam quem tem evasão alta, como Windranger em Windrun ou outro Kez/Butterfly inimigo.
- detalhe: 5.000 de ouro; True Strike ignora evasão, e no 7.41 o item dá +50 de alcance pra quem bate de perto, além de +50 de dano e +50 de velocidade de ataque (valor fixo, não percentual). Pros usam em só 5 dos 28 jogos, tarde (32,8 a 41,0 min).
- contra: Windranger: a Windrun dela dá evasão alta por alguns segundos; sem MKB seus ataques erram contra ela nesse tempo.
- fonte: dota-hub/kez.json

## Nullifier (nullifier)
- porque: tira proteção do alvo (Ghost Scepter, Ethereal, Glimmer, Lotus) e ainda atordoa junto do slow.
- detalhe: 4.350 de ouro; dispela o alvo e deixa 4 segundos sob dispel contínuo com 10% de slow, e funciona até em unidade invulnerável. Pros usam em 4 dos 28 jogos, entre 30,4 e 53,5 min.
- combo: apareceu em 3 dos 6 solos de Roshan confirmados do Kez (57:11, 67:53 e 67:07), quase sempre junto de Manta e BKB.
- fonte: dota-hub/kez.json; dota-roshan-solo/data/solos.json

## Satanic (satanic)
- porque: lifesteal grande pra sobreviver em luta prolongada sem suporte do lado, ou solando Roshan.
- detalhe: 5.050 de ouro; +25% de lifesteal passivo e +145% por 6 segundos no ativo (recarga 40 s, nerfado no 7.41e e no 7.41f). Pros compram entre 37,3 e 56,4 min.
- combo: apareceu em 2 dos 6 solos de Roshan confirmados do Kez (35:48 e 67:07), os dois com BKB; no de 67:07 ele entrou com 3.640/3.640 de vida e saiu com 3.224/3.420, fazendo 100% do dano sozinho.
- fonte: dota-hub/kez.json; dota-roshan-solo/data/solos.json

## Manta Style (manta)
- porque: as imagens limpam wave e camp em paralelo, e o cast dispela/dá invulnerabilidade pra escapar de uma raiz comum.
- detalhe: 4.650 de ouro; imagens corpo a corpo causam 33% do seu dano. O cast tem 0,1 s de invulnerabilidade e remove a maior parte dos debuffs (datafeed oficial: "many effects are removed upon using Manta"), incluindo silêncio genérico e raízes como Frostbite, Searing Chains e Ensnare. NÃO remove Call do Axe nem Shackleshot da Windranger: as duas estão fora do alcance do dispel básico (confirmado como undispellable/strong-dispel-only), então não entre nelas esperando escapar com o Manta.
- combo: linha alternativa ao Desolator (Yasha -> Manta -> Butterfly), usada por um dos três pros analisados em 6 jogos no 7.41c/d, 6 vitórias. Apareceu em 4 dos 6 solos de Roshan confirmados do Kez (47:48 e 67:53 no inventário, 57:11 na mochila, e 67:07 no inventário).
- fonte: dota-hub/kez.json; OpenDota items.json ("0.1 second cast time during which you are invulnerable. Many effects are removed upon using Manta."); https://liquipedia.net/dota2/Strong_dispel; dota-roshan-solo/data/solos.json

## Butterfly (butterfly)
- porque: evasão alta pra sobreviver a dano físico repetido sem precisar de suporte do lado.
- detalhe: 5.450 de ouro; 35% de evasão (diminui ao empilhar com outras fontes de evasão) e +30 de dano e Agilidade. Mudou no 7.41e (Agilidade 35 -> 30, dano 25 -> 30, nerf). Pros usam entre 22,6 e 44,4 min.
- combo: apareceu em 3 dos 6 solos de Roshan confirmados do Kez (47:48, 57:11 e 67:53), sempre junto de BKB; não achamos fonte confirmando se o ataque do Roshan pode ser evadido, então tratamos esse combo como sobrevivência geral, não como interação específica contra o chefe.
- fonte: dota-hub/kez.json; dota-roshan-solo/data/solos.json

## Eye of Skadi (skadi)
- porque: pacote fechado de vida e atributos pra quem já está no late, com corte de cura do inimigo.
- detalhe: 5.900 de ouro; corta 50% da restauração de vida e mana do alvo marcado, bom contra time que cura muito. Satanic comprou aos 34 min, Watson aos 50.
- fonte: dota-hub/kez.json

## Aghanim's Blessing (ultimate_scepter_2)
- porque: fecha o bônus do Scepter de item e libera o slot pra outro item.
- detalhe: +1.600 de ouro sobre o Scepter (5.800 no total); 6 dos 28 jogos dos pros fizeram essa transição, entre 32 e 52 min.
- fonte: dota-hub/kez.json

## Aghanim's Shard (aghanims_shard)
- porque: baixa prioridade; só vale se já tem o resto do build e quer mais lifesteal no impalar da Katana.
- detalhe: 1.400 de ouro; na Katana dá 100% de lifesteal no impalar e stun por trás, na Sai reforça a marca do parry. Vem de graça do Tormentor às 20:00 antes de precisar comprar. Só 5,9% dos jogos 7000+ compram, aos 42 min.
- fonte: dota-hub/kez.json

## Abyssal Blade (abyssal_blade)
- porque: evite; nenhum dado confirma que vale a pena nesse herói.
- detalhe: 6.250 de ouro; nenhum dos 28 jogos dos pros nem os 4 jogos analisados compraram Skull Basher ou Abyssal Blade. O datafeed antigo diz que o ataque da Sai não ativa o bash, e a patch note mais recente do 7.41 diz que isso deixou de valer. Mesmo assim ninguém está comprando.
- fonte: dota-hub/kez.json

## Falcon Blade / Battle Fury (falcon_blade / bfury)
- porque: evite; aparece em agregador e em pub, mas em nenhum jogo pro analisado.
- detalhe: Falcon Blade (1.125, mana, regen e dano por Intelecto) e Battle Fury (3.900, cleave que atravessa imunidade a feitiço) aparecem em guias de agregador (dotacoach.gg, hotspawn); o Battle Fury sozinho tem 38 jogos de pub registrados, com 42,1% de vitória (o Falcon Blade não aparece nem nesse recorte). Mesmo assim, nenhum dos 28 jogos dos pros nem o topo do D2PT usa qualquer um dos dois.
- fonte: dota-hub/kez.json; OpenDota items.json
