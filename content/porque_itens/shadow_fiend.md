---
id: porque-itens-shadow_fiend
titulo: "Por que cada item: Shadow Fiend"
heroi: Shadow Fiend
patch: 7.41
fontes:
- app/public/data/herois/shadow_fiend.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/work/solos_linha_a_linha.md
- https://dotacoach.gg/en/items/manta-style
- https://dotacoach.gg/en/items/mask-of-madness
- https://dotacoach.gg/en/items/satanic
- https://dotacoach.gg/en/items/butterfly
- https://dotacoach.gg/en/items/linkens-sphere
---

## Magic Wand (magic_wand)
- porque: Guarda carga de magia da lane pra virar vida e mana nos combos de Raze, sem gastar o farm em Treads cedo.
- detalhe: Cada feitiço inimigo lançado a até 1200 de distância dá 1 carga (até 20). Shadow Fiend gasta mana rápido na lane (3 Razes custam 225, e ele tem só 267 no nível 1), e o Wand devolve isso sem precisar voltar à base.
- combo: Comprado junto com 2 Faerie Fire e 1 Tango no início: foi a abertura em 18 dos 29 jogos dos pros analisados.
- fonte: guia local (itens_core.magic_wand); items.json

## Falcon Blade (falcon_blade)
- porque: Dá vida e regeneração de mana pra cobrar a lane com Raze sem secar o mana pool.
- detalhe: +200 de vida, +1,8 de regeneração de mana e +14 de dano (items.json). Com essa regen, Shadow Fiend consegue usar Raze em praticamente toda onda sem ficar sem mana entre uma troca e outra. Os pros compram na mediana de 4,8 min (28 de 29 jogos).
- fonte: guia local (power spike "Falcon Blade"); items.json

## Power Treads (power_treads)
- porque: Alterna entre força (mana pra enfileirar Raze) e agilidade (dano de ataque) o jogo inteiro.
- detalhe: +10 no atributo escolhido, +25 de velocidade de ataque e +45/+55 de movimento (items.json). O padrão dos pros é trocar pra INT antes de um combo de Raze e voltar pra AGI pra bater, cerca de 10 vezes por minuto.
- contra: jogo sem essa troca constante perde dano e farm. O guia local registra 1,9 troca por minuto do Felipe contra ~10 dos pros, e aponta isso como erro recorrente.
- fonte: guia local (itens_core, erros_comuns); items.json

## Mask of Madness (mask_of_madness)
- porque: Dá roubo de vida e velocidade de ataque pra sair da lane e farmar selva sem suporte.
- detalhe: 22% de roubo de vida e +100 de velocidade de ataque por 6 s no Berserk, recarga 16 s. O patch 7.41f cortou o lifesteal de 24% para 22% (confirmado em dotacoach.gg/en/items/mask-of-madness, que já está no patch 7.41f, e em coberturas independentes desse patch); o items.json deste projeto ainda registra o valor antigo de 24%, por isso vale o número do guia local e da internet, não o do items.json. É o item que libera a selva: os pros dobram o ritmo de last hit, de 8,2 para 16,8 por minuto, depois de comprá-lo (mediana 10,6 min).
- fonte: guia local (power spike "Mask of Madness"); dotacoach.gg/en/items/mask-of-madness (patch 7.41f); items.json (velocidade de ataque, duração e recarga do Berserk)

## Yasha (yasha)
- porque: É a metade do Manta Style no caminho, não um item parado: dá atributo e velocidade enquanto o farm sobe.
- detalhe: No 7.41, Manta Style é montado com Yasha + Diadem (antes era outra combinação de componentes). Comprar o Yasha já é comprar metade do Manta, então não atrasa o build final.
- fonte: items.json (components do item "manta")

## Manta Style (manta)
- porque: As ilusões limpam camp e empurram lane sozinhas enquanto o dono farma, e o dispel ao usar tira debuffs comuns.
- detalhe: Manta aplica um dispel básico no momento do cast (items.json: "many effects are removed upon using Manta"; dotacoach.gg confirma "Dispel Type: Basic Dispel"). As ilusões de alcance de Shadow Fiend causam 25% do dano (confirmado em dotacoach.gg/en/items/manta-style, patch 7.41f; antes desse nerf eram 28%, e o items.json deste projeto ainda mostra o valor antigo). Ilusão corpo a corpo seria 33%, mas não se aplica aqui porque Shadow Fiend é ranged. Por isso rendem mais empurrando torre e limpando wave do que lutando. Pros compram na mediana de 16,0 min.
- combo: no replay 8957890399 (Roshan solo, nível 21, ~28:45), o kit Hurricane Pike + Power Treads + Manta Style + Black King Bar foi o usado pra solar sem suporte do time (confirmado em work/solos_linha_a_linha.md, linha 71).
- fonte: items.json; dotacoach.gg/en/items/manta-style (patch 7.41f); dota-roshan-solo/work/solos_linha_a_linha.md (replay 8957890399)

## Dragon Lance (dragon_lance)
- porque: Dá alcance de ataque pra bater de mais longe e evitar troca corpo a corpo.
- detalhe: +130 de alcance (items.json), chegando a 655 de alcance total com Power Treads. Junto com o Manta, sobe o DPS de ataque pra ~280 aos 15 min (416 com Feast of Souls aberto). Pros compram na mediana de 16,3 min, sempre antes do Hurricane Pike.
- fonte: items.json; guia local (power spike "Manta Style e Dragon Lance")

## Hurricane Pike (hurricane_pike)
- porque: Empurra quem te pega de perto ou te joga 600 pra trás, a fuga que Shadow Fiend não tem sozinho.
- detalhe: 425 de empurrão no inimigo preso (ou 600 em si mesmo), +100 de velocidade de ataque nos 5 ataques seguintes por 5 s, recarga 19 s, alcance de cast 425 (items.json). Com só 538 de vida no nível 1 e nenhuma fuga própria, o Pike é a saída até ter Black King Bar. Pros compram na mediana de 21,5 min.
- fonte: items.json; guia local (power spike "Hurricane Pike", seção depois_dos_20)

## Black King Bar (black_king_bar)
- porque: Segura a luta decisiva, dando tempo de ligar Raze e Requiem sem ser interrompido ou stunado.
- detalhe: 9/8/7 s de imunidade a magia por nível, recarga 95 s, e reduz em 60% o dano dos feitiços que ainda acertam através dele (items.json). Pros morrem em média 2,4 vezes nas vitórias e 5,0 nas derrotas; o BKB é o que fecha essa diferença. Vale comprar antes dos ~22 min (e não na mediana de 26,4) se o time inimigo já tiver 2 ou mais disables.
- contra: Lion, Nyx Assassin, Invoker e Dawnbreaker. No jogo do Felipe com 13 mortes e sem BKB, esse era o line-up inimigo, segundo o guia local.
- fonte: items.json; guia local (power spike "Black King Bar", itens_situacionais, erros_comuns)

## Silver Edge (silver_edge)
- porque: Entra invisível pra acertar o combo de Raze e Requiem sem o inimigo ver chegando.
- detalhe: 17 s de invisibilidade (Shadow Walk, 23 s de recarga), +70 de dano, +35 de velocidade de ataque, e o próximo ataque saindo da invisibilidade quebra passivas do alvo e causa +300 de dano bônus por 5 s (items.json). Pros compram na mediana de 26,9 min.
- combo: a alternativa no mesmo slot é Blink ou Swift Blink quando a entrada precisa ser mais certa que uma invisibilidade de 17 s.
- fonte: items.json; guia local (itens_core, itens_situacionais "blink")

## Daedalus (greater_crit)
- porque: Dobra o dano de ataque com crítico, a peça que fecha a luta depois do nível 20.
- detalhe: +88 de dano e 30% de chance de crítico com 225% de dano (items.json); o crítico não funciona contra construções, então não ajuda a cobrar torre. Pros ganham 7 de 7 jogos até 35 min e só 4 de 8 depois de 50 min: Daedalus (mediana 32,5 min) é o marco que separa esses dois grupos.
- fonte: items.json; guia local (power spike "Daedalus")

## Satanic (satanic)
- porque: Cura no corpo a corpo e sustenta Shadow Fiend em luta prolongada de late game.
- detalhe: 25% de roubo de vida passivo e Unholy Rage ativo somando até 175% de roubo de vida por 6 s, recarga 40 s. O patch 7.41f cortou o lifesteal passivo de 30% para 25% (confirmado em dotacoach.gg/en/items/satanic, patch 7.41f, e em coberturas independentes do patch); a recarga de 40 s já vinha do 7.41e. O items.json deste projeto ainda mostra os valores antigos (30% e 30 s). No talento de nível 25, cada Shadowraze passa a aplicar um ataque físico no alvo atingido, o que faz o combo de Raze limpar onda e camp inteiros, e o Satanic devolve vida por esse dano extra.
- combo: o talento é real e foi usado em replay (special_bonus_unique_nevermore_raze_procsattacks, replay 8960577698 de Roshan solo), não é suposição.
- fonte: guia local (power spike "Satanic", seção depois_dos_20); dotacoach.gg/en/items/satanic (patch 7.41f); items.json (duração do Unholy Rage); dota-roshan-solo/work/solos_linha_a_linha.md (replay 8960577698)

## Blink Dagger (blink)
- porque: Dá entrada ou fuga mais certa que o Silver Edge quando a luta não dá tempo de ficar invisível.
- detalhe: 1200 de alcance de blink, recarga 15 s; se Shadow Fiend levar dano de herói inimigo ou do Roshan, o Blink Dagger fica impossível de usar por 3 s (não é o alcance que encolhe, é o item que trava) (items.json). Usado em 8 dos 29 jogos dos pros no lugar do Silver Edge, em média aos 45 min.
- fonte: items.json; guia local (itens_situacionais "blink")

## Monkey King Bar (monkey_king_bar)
- porque: Garante acerto contra evasão alta, como a de um Butterfly inimigo.
- detalhe: +50 de dano, +50 de velocidade de ataque e 80% de chance de acerto certeiro com +70 de dano bônus mágico no proc (items.json). Entrou em 11 dos 29 jogos dos pros, mediana de 34,8 min, sempre como resposta a evasão.
- contra: Butterfly e outras fontes de evasão no time inimigo.
- fonte: items.json; guia local (itens_situacionais)

## Butterfly (butterfly)
- porque: Dá evasão e velocidade de ataque contra times com muito dano físico.
- detalhe: 35% de evasão, +20% de velocidade de ataque base e +30 de dano (dotacoach.gg/en/items/butterfly, patch 7.41f; o items.json deste projeto ainda mostra +25, valor anterior a um ajuste do item). Entrou em 10 dos 29 jogos dos pros, mediana de 42,7 min.
- fonte: dotacoach.gg/en/items/butterfly (patch 7.41f); items.json (evasão e velocidade de ataque); guia local (itens_situacionais)

## Linken's Sphere (sphere)
- porque: Bloqueia a primeira habilidade direcionada contra Shadow Fiend a cada 14 s.
- detalhe: Bloqueia 1 feitiço de alvo único por ciclo de 14 s (Spellblock; confirmado em dotacoach.gg/en/items/linkens-sphere, patch 7.41f: o item não tem valor de dano absorvido, só bloqueia o feitiço). Só 1 dos 29 jogos dos pros comprou (34,5 min), como resposta a um disable específico do inimigo.
- fonte: dotacoach.gg/en/items/linkens-sphere (patch 7.41f); items.json (recarga); guia local (itens_situacionais)

## Nullifier (nullifier)
- porque: Remove escudos e proteções do alvo (Ghost, Aeon Disk, Glimmer) antes do combo.
- detalhe: 4 s de silêncio e 10% de lentidão, aplicáveis até em unidade invulnerável (items.json), o que tira o inimigo do estado protegido na hora de entrar. Só 1 dos 29 jogos dos pros comprou (46,6 min).
- contra: Ghost Scepter, Aeon Disk e Glimmer Cape no inimigo, segundo o guia local.
- fonte: items.json; guia local (itens_situacionais)

## Eye of Skadi (skadi)
- porque: Corta a cura do alvo em times que dependem de regeneração.
- detalhe: Reduz em 50% a restauração de vida do alvo lentificado, além de +35 em todos os atributos (items.json). Só apareceu em 1 jogo dos pros, numa derrota: não é padrão, é resposta a uma composição específica de cura.
- fonte: items.json; guia local (itens_situacionais)

## Hydra's Breath (hydras_breath)
- porque: Dá alcance e dano em área quando a luta precisa acertar mais de um inimigo ao mesmo tempo.
- detalhe: +150 de alcance de ataque à distância e 30% de chance de acertar até 3 alvos secundários com dano extra (items.json). Usado em 3 dos 29 jogos (2 pros, 1 do Felipe); o guia local marca que não é o padrão de build.
- fonte: items.json; guia local (itens_situacionais)

## Aghanim's Scepter (ultimate_scepter)
- porque: Reduz a recarga do Requiem e cura Shadow Fiend quando as linhas voltam, mas quase ninguém compra.
- detalhe: Segundo o guia local do herói, o Scepter corta 30 s da recarga do Requiem of Souls e faz as linhas que retornam curar em vez de penalizar, no 7.41. Só apareceu em 1 dos 29 jogos dos pros (partida de 94 min): opção de jogo muito longo, não padrão de build.
- fonte: guia local (itens_situacionais "ultimate_scepter")

## Aghanim's Shard (aghanims_shard)
- porque: Faz cada Shadowraze reduzir a própria recarga e lentificar quem foi atingido.
- detalhe: Segundo o guia local do herói, o Shard reduz a recarga do Shadowraze em 2 s por herói atingido e aplica 12% de lentidão por stack, com a mesma duração do stack (6 s). Só 7 dos 29 jogos dos pros terminaram com o Shard, e quase sempre veio do Tormentor, não foi comprado.
- fonte: guia local (itens_situacionais "aghanims_shard")
