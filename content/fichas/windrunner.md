---
id: ficha-windrunner
titulo: "Windranger"
heroi: Windranger
patch: 7.41
posicoes: [1, 4]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_patch.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- https://dota2protracker.com/hero/Windranger
---

## Resumo

Windranger é uma disabler de curto alcance (Shackleshot prende, Powershot atravessa a lane inteira, Windrun dá 100% de evasão e Focus Fire rouba attack speed de um alvo só). No pro play do patch 7.41 ela não é a suporte clássica que a wiki sugere: nas 220 partidas do recorte Tier 1 em que foi picada, saiu pos 1 em 118 (53,6%, 44,1% de vitórias) e pos 4 em 84 (38,2%, 52,4% de vitórias); pos 2, 3 e 5 juntas somam só 18 partidas, amostra pequena pra afirmar um padrão de build (fonte: draft.csv, posicao_replay). Pos 4 ela joga do jeito tradicional, Shackleshot pra abrir kill, Windrun pra escapar. Pos 1 ela vira right-click puro com Maelstrom/Mjollnir, porque Focus Fire transforma attack speed comprada em dano auto que o Chain Lightning do Mjollnir ainda espalha pra wave e camp.

## Pos 1 (carry)

- quando pegar: quando o time quer uma farmer que não depende de mana pra limpar onda (Focus Fire é só attack speed) e ainda entra em teamfight com Shackleshot prendendo o iniciador do time adversário. Em 118 partidas do recorte Tier 1 ela venceu 44,1% como pos 1 (fonte: draft.csv).
- itens iniciais: tango, circlet, bracer, gauntlets

### Build
#### Null Talisman (null_talisman)
- minuto: 3:18 (87% das 118 partidas, mediana de compras.parquet)
- porque: dá intelligence pra mana de Shackleshot/Powershot na lane sem gastar em boots ainda.
- detalhe: é o 1º item "de verdade" comprado, antes até da bota virar Power Treads. Windranger não tem nenhum escalonamento de intelligence no kit, então o Null Talisman é só sustento de mana barato pra não ficar sem Powershot na troca de lane.
- fonte: dota-tier1/data/derivados/compras.parquet

#### Power Treads (power_treads)
- minuto: 7:18 (100% das 118 partidas)
- porque: attack speed pro Focus Fire bater mais vezes e troca de atributo pra Força quando precisa de HP.
- detalhe: comprada por 100% da amostra, é o item mais consistente do build. Serve de base pro farm de Maelstrom: mais ataques por segundo também é mais chance de proc do Chain Lightning do Mjollnir mais tarde.
- fonte: dota-tier1/data/derivados/compras.parquet

#### Mjollnir (mjollnir)
- minuto: 17:55 (via Maelstrom aos 13:12; 95% chegam no Maelstrom, 87% completam o Mjollnir)
- porque: Chain Lightning (25% de chance, pula em até 12 alvos) limpa wave e camp jungle em 1 ou 2 ataques e ainda ajuda no farm de pos 1.
- detalhe: o proc de Chain Lightning "atravessa evasão" (pierce), então continua acertando mesmo contra Windrun de outra Windranger ou Butterfly. Combinado com Focus Fire, o Mjollnir também rende dano em área grátis numa troca.
- combo: Focus Fire no alvo principal + ataques com Mjollnir ativo gera Chain Lightning em até 12 unidades ao redor, ótimo pra abrir teamfight em grupo.
- fonte: dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Black King Bar (black_king_bar)
- minuto: 24:59 (87% das partidas)
- porque: enquanto ela gasta os 20s de Focus Fire batendo num alvo só, precisa sobreviver ao resto do time inimigo em cima dela, e o BKB resolve isso.
- detalhe: dá dispel básico ao ativar e imunidade a magia por 9s. Como Windrun já dá evasão, o combo BKB + Windrun deixa a Windranger quase impossível de abater em splitpush por um tempo curto. Focus Fire em si já ignora BKB alheio (bkbpierce sim), então o BKB dela é puramente defensivo, não serve pra furar o BKB do alvo.
- contra: silence/stun em sequência que a impede de focar o Focus Fire (ex. combos de disable mágico, já que físico puro BKB não resolve sozinho sem a evasão do Windrun).
- fonte: dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json

#### Hurricane Pike (hurricane_pike)
- minuto: 30:30 (passa por Dragon Lance aos 24:30 antes de virar Pike; 52% completam o Pike, os outros ficam só no Dragon Lance)
- porque: cria distância de melee carry que fecha em cima dela e ainda garante 5 ataques sem restrição de alcance.
- detalhe: usado no inimigo empurra os dois 425 de distância um do outro; usado em si mesma empurra 600 na direção que ela está olhando, sem precisar de alvo. Como Windranger não tem nenhum gap-closer próprio além de Shackleshot (que precisa de alvo atrás), o Pike é o jeito de criar e manter distância contra quem entra nela.
- contra: qualquer herói de melee que cola nela pra bater sem spell de gap-close instantâneo depois do push, porque os 425 de distância do empurrão desfazem o posicionamento na hora.
- fonte: dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Crystalys (lesser_crit)
- minuto: 32:10 (76% das partidas)
- porque: dano crítico físico puro, sem gastar em outro slot de utilidade porque ela já resolveu controle com Shackleshot/BKB.
- detalhe: entra como item de dano puro depois que o kit de sobrevivência (BKB/Pike) já está pronto, tipicamente o primeiro passo rumo a Daedalus.
- fonte: dota-tier1/data/derivados/compras.parquet

### Situacionais

#### Satanic (satanic)
- minuto: 41:04 (36% das partidas)
- porque: Unholy Rage (175% de lifesteal por 6s) é dispel básico e sustento num confronto 1x1 prolongado.
- detalhe: componente de Reaver (40:03) + Claymore (36:19) + Lifesteal (37:53). Dá sobrevida contra bursts físicos porque o lifesteal de 175% compensa o próprio Focus Fire gastando HP em troca de dano.
- contra: duelos alongados contra outro carry físico, ou contra silence/hex que corta o Unholy Rage no meio (ela perde o dispel se for stunada de novo depois que a ativa).
- fonte: dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Linken's Sphere (sphere)
- minuto: 35:20 (22% das partidas)
- porque: bloqueia o próximo feitiço "unit target" inimigo a cada 14s, o que inclui qualquer Shackleshot, Hex ou outro disable targeted contra ela.
- detalhe: Shackleshot é "Unit Target" pela própria constante do jogo, então Linken's resolve especificamente contra heróis que também shackleiam ou contra inicadores de combo single-target.
- contra: heróis com disable "unit target" pra abrir em cima dela primeiro, como Hex do Lion ou Shackles do Shadow Shaman (ambos unit target pela constante do jogo); não resolve contra Fissure do Earthshaker, que é point target, não unit target.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 45:48 (28% das partidas, luxo de jogo longo)
- porque: upgrade de late game pra times que já ganharam a partida e sobrou ouro depois do kit principal.
- detalhe: comprado só por 1 em cada 4 Windranger pos 1, sempre depois dos 40 minutos; não há dado local confiável sobre o efeito exato do upgrade neste patch pra detalhar aqui.
- fonte: dota-tier1/data/derivados/compras.parquet

#### Blink Dagger (blink)
- minuto: 33:05 (19% das partidas como pos 1)
- porque: compensa o alcance curto de Shackleshot (800) quando ela precisa iniciar sozinha em vez de prender um inimigo que já veio em cima dela.
- detalhe: minoria dos pos 1 (a maioria prefere Pike pra kite em vez de blink pra engajar), mais comum quando o time precisa que ela seja quem abre a luta.
- fonte: dota-tier1/data/derivados/compras.parquet

## Pos 4 (suporte de roaming)

- quando pegar: quando o time quer uma dupla de lane que já sai matando no early, Shackleshot (alcance 800, prende em até 575 de distância) mais Powershot é o combo de kill de lane clássico. Em 84 partidas do recorte Tier 1 ela venceu 52,4% como pos 4, melhor taxa das posições com amostra grande (fonte: draft.csv).
- itens iniciais: tango, flask, blood_grenade, ward_observer, ward_sentry, smoke_of_deceit

### Build
#### Urn of Shadows (urn_of_shadows)
- minuto: 10:51 (87% das 84 partidas)
- porque: os 25 de dano por segundo fecham kills de lane que Shackleshot + Powershot deixam o inimigo vivo por pouco.
- detalhe: item clássico de roam, ganha carga nova a cada herói inimigo que morre perto (até 1500 de raio), então se paga em kills no early antes dos 10 minutos.
- fonte: dota-tier1/data/derivados/compras.parquet

#### Essence Distiller (essence_distiller)
- minuto: 16:46 (60% das partidas)
- porque: +150 de mana e regen pra spamar Shackleshot/Powershot em rotação sem secar, além de armor pra sobreviver no roam.
- detalhe: a ativa (Soul Release) ainda dá truesight e 25 de dano por segundo por 8s se ficar presa num inimigo que passar perto, útil pra achar e ferir quem se esconde do roam.
- fonte: dota-tier1/data/derivados/compras.parquet

#### Blink Dagger (blink)
- minuto: 27:14 (69% das partidas, item mais comprado depois dos iniciais e do Urn)
- porque: fecha o alcance de 800 do Shackleshot em cima de quem o time quer prender primeiro.
- detalhe: blink nela é muito mais comum como pos 4 (69%) do que como pos 1 (19%), porque aqui ela é quem inicia a troca, não quem sobrevive a ela.
- fonte: dota-tier1/data/derivados/compras.parquet

#### Force Staff (force_staff)
- minuto: 28:56 (37% das partidas)
- porque: reposiciona aliado pra fora de alcance de um combo inimigo ou ela mesma pra fora de Focus Fire tomado.
- detalhe: item de peel puro, comprado depois do blink porque o blink já cobriu a parte de iniciar.
- fonte: dota-tier1/data/derivados/compras.parquet

#### Aghanim's Shard (aghanims_shard)
- minuto: 31:07 (31% das partidas)
- porque: dá Gale Force, uma rajada vector target (900 de raio, empurra por 3s) que ela não tem sem o Shard.
- detalhe: Gale Force é uma habilidade "oculta" no kit dela até comprar o Shard (consta como hidden nas constantes do jogo). Empurra todos os inimigos numa área de 900 de raio na direção escolhida.
- combo: Gale Force empurra o grupo inimigo pra uma direção, se o alvo acabar alinhado com uma árvore ou unidade atrás dele vira Shackleshot garantido na sequência (Shackleshot prende no primeiro unidade/árvore em linha atrás do alvo).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json; C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json; https://dota2protracker.com/hero/Windranger

### Situacionais

#### Glimmer Cape (glimmer_cape)
- minuto: 24:57 (20% das partidas)
- porque: invisibilidade mais uma barreira que absorve até 375 de dano mágico, pra tirar ela ou um aliado de mira de nuke.
- detalhe: comprado antes do blink em quem prioriza sobrevivência de roam sobre iniciação. A barreira dura 5s e some se o dano acabar com ela antes.
- contra: burst mágico de até 375 de dano total mirado nela ou no aliado perto, porque a barreira absorve e o invisível tira a visão do alvo.
- fonte: dota-tier1/data/derivados/compras.parquet

#### Eul's Scepter of Divinity (cyclone)
- minuto: 35:01 (14% das partidas)
- porque: dispel ao lançar mais um ciclone de 2,5s pra tirar ela ou um aliado de uma janela de burst, ou pra guardar o Shackleshot certo.
- detalhe: minoria do build, entra quando o time precisa de mais um dispel/dodge além do que o kit dela já dá.
- contra: janelas de burst físico ou mágico de curta duração (o ciclone segura 2,5s de invulnerabilidade, suficiente pra esvaziar um combo de nuke).
- fonte: dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Lotus Orb (lotus_orb)
- minuto: 37:36 (13% das partidas)
- porque: reflete feitiço targeted de volta no inimigo, mais um bloqueio além do que o kit dela já tem.
- detalhe: item raro no dataset, aparece em jogos onde o time adversário tem muito disable single-target pra devolver.
- contra: heróis que dependem de 1 feitiço targeted forte pra abrir em cima dela ou de um aliado.
- fonte: dota-tier1/data/derivados/compras.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Vladmir's Offering (vladmir)
- minuto: 34:44 (21% das partidas)
- porque: aura de dano/lifesteal/armor pro time quando ela não precisa mais gastar em itens de iniciação.
- detalhe: item de late game pra quando o jogo não fechou nos primeiros 30 minutos e ela sobra ouro de suporte.
- fonte: dota-tier1/data/derivados/compras.parquet

#### Black King Bar (black_king_bar)
- minuto: 44:17 (11% das partidas, raro)
- porque: mesmo como pos 4, times com muito disable mágico em cima dela às vezes precisam do dispel + resistência.
- detalhe: muito mais raro aqui (11%) do que em pos 1 (87%), porque o 4 não costuma ficar no meio da luta tempo suficiente pra precisar.
- contra: lockdown mágico encadeado que mira ela direto antes de abrir Shackleshot.
- fonte: dota-tier1/data/derivados/compras.parquet

## Roshan

Dado direto de replay é raro (1 solo puro no dataset local), mas consistente com o build de pos 1 medido em pro: no único solo registrado ela fez aos 32:53, nível 18, com Dragon Lance, Falcon Blade, Mjollnir, Crystalys, Power Treads, Magic Wand e Black King Bar, o mesmo esqueleto de right-click + BKB do build de pos 1 (fonte: resumo_por_heroi.json). Mecanicamente isso bate: Focus Fire é um alvo único que aceita "Basic" (inclui Roshan) e dá um bônus grande de attack speed, e Windrun dá 100% de evasão contra os ataques físicos de Roshan enquanto ela bate (fonte: constants_abilities.json). Com o time, há 4 partidas no dataset (resumo_com_suporte.json) em que ela chega ao Roshan por volta dos 22-24 de nível com Mjollnir, Aghanim's Scepter, Dragon Lance e BKB, ou seja, o mesmo kit de luta, não um kit dedicado a farm solo. N é pequeno demais (1 e 4 partidas) pra tratar como padrão confirmado, só como indício que aponta na mesma direção da amostra de pro picks.
