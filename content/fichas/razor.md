---
id: ficha-razor
titulo: "Razor"
heroi: Razor
patch: 7.41
posicoes: [3, 2, 1]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet
- C:/Users/felip/Desktop/dota-tier1/data/derivados/objetivos.parquet
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- https://api.opendota.com/api/heroes/15/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=15
- https://api.opendota.com/api/heroes/15/matchups
- https://dotacoach.gg/heroes/razor/builds/carry
- https://dota2protracker.com/hero/Razor
- https://dota2.fandom.com/wiki/Static_Link
---
## Resumo
Razor é um ranged de agilidade que vive de dano de ataque básico: Storm Surge dispara raio sozinho quando ele é atacado (chance) ou alvo de qualquer feitiço (sempre), Static Link rouba dano do herói linkado sem poder ser dispelado, Plasma Field limpa wave e camp em área e Eye of the Storm (ult) fecha em quem tem menos vida e reduz armadura. No 7.41f ele é jogado de verdade como offlane (pos 3): 48,2% de vitória em 1.194 jogos 7000+ MMR (últimos 8 dias) e vantagem de lane de +2,8%; a build mais jogada do patch aparece em 2.151 partidas com 49,7% de vitória (dota2protracker). No Atlas tier1 (replays de pro, 16 picks no período coberto) ele saiu pos 3 em 9 jogos (7V-2D), pos 2 (mid) em 4 (1V-3D) e pos 1 (carry) em 3 (1V-2D): joga as três, mas a base dele é offlane.

## Pos 3 (offlane)
- quando pegar: é a posição dominante do herói: 48,2% de vitória em 1.194 jogos 7000+ MMR no 7.41f (últimos 8 dias) e vantagem de lane de +2,8%, com a build mais jogada do patch em 49,7% de vitória sobre 2.151 partidas (dota2protracker). No Atlas tier1, 9 dos 16 picks pro de Razor no período foram pos 3 (7V-2D), contra 4 de pos 2 e 3 de pos 1.
- itens iniciais: tango, magic_stick, slippers, branches

### Build
#### Yasha (yasha)
- minuto: 15:38 (mediana de 8 dos 9 jogos pos 3 no Atlas tier1)
- porque: dá velocidade de ataque e de movimento pra proc mais Storm Surge e não perder o alcance do Static Link.
- detalhe: Static Link é cortado se a distância até o alvo passar do alcance de cast mais uma margem (a wiki cita o corte sendo checado a cada tick de dreno); o bônus de movimento do Yasha ajuda a ficar colado no herói linkado enquanto ele tenta fugir. É componente do Manta Style e do Sange and Yasha, os dois caminhos que saem dele.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://dota2.fandom.com/wiki/Static_Link

#### Black King Bar (black_king_bar)
- minuto: 18:52 (mediana de 8 dos 9 jogos pos 3)
- porque: Static Link e Eye of the Storm furam BKB (bkbpierce sim), então o item não protege o alvo; protege o Razor dos stuns/hex/silence que, aplicados nele, cortam o auto attack e o Storm Surge.
- detalhe: os 5 piores matchups medidos do herói (OpenDota, mínimo 50 jogos): Treant Protector 29%, Phoenix 36%, Shadow Shaman 41%, Lion 41%, Pudge 42% de vitória. Só 2 desses 5 têm o disable bloqueado pelo BKB: Shackles do Shadow Shaman e Hex do Lion não furam BKB. Overgrowth do Treant, Supernova da Phoenix e Dismember do Pudge furam BKB (bkbpierce sim nos três), então contra esses o item não evita a interrupção, só ajuda fora da janela do disable.
- contra: Shadow Shaman (Shackles) e Lion (Hex), os únicos 2 dos 5 piores matchups cujo disable o BKB bloqueia
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json; https://api.opendota.com/api/heroes/15/matchups

#### Manta Style (manta)
- minuto: 22:01 (mediana de 5 dos 9 jogos pos 3; caminho mais usado a partir do Yasha)
- porque: Dispel Type Basic Dispel limpa silence/hex/root que caem nele; as 2 imagens limpam uma wave ou empurram torre enquanto ele farma outro camp.
- detalhe: componentes são Yasha e Diadem (no 7.41 o Manta não sai mais do Yasha puro). Imagem ranged causa 28% do dano e toma 300%: serve pra empurrar e enganar, não pra lutar de frente.
- combo: usar o Manta no instante em que um disable dispelável acerta, pra manter o Static Link e o Storm Surge ativos
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

### Situacionais
#### Sange and Yasha (sange_and_yasha)
- minuto: 24:37 (3 dos 9 jogos pos 3; alternativa ao Manta saindo do mesmo Yasha)
- porque: 16% de resistência a status encurta a duração de qualquer disable que pegar nele, incluindo os que furam BKB.
- detalhe: componentes Sange e Yasha; ganha ainda 20% de restauração de vida e 30% de resistência a slow, então troca o dispel do Manta por mais sobrevivência contínua.
- contra: os 5 piores matchups medidos do herói (Treant Protector, Phoenix, Shadow Shaman, Lion, Pudge), já que a resistência a status reduz a janela de disable mesmo nos 3 que furam BKB (Overgrowth, Supernova, Dismember)
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Linken's Sphere (sphere)
- minuto: 31:21 (via Ultimate Orb aos 31:21; 5 dos 9 jogos pos 3)
- porque: bloqueia de graça o primeiro feitiço de alvo único que cair nele a cada 14s.
- detalhe: componentes Perseverance e Ultimate Orb. Não bloqueia feitiço em área (Impale do Nyx, Berserker's Call do Axe não contam como alvo único direto), só o de alvo único.
- contra: Lion (Hex/Earth Spike), Shadow Shaman (Shackles), Doom (Doom), Rubick (qualquer feitiço roubado de alvo único)
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Satanic (satanic)
- minuto: 32:12 (via Reaver aos 30:19; 4 dos 9 jogos pos 3)
- porque: Unholy Rage sobe o lifesteal pra 175% por 6s, o suficiente pra sobreviver trocando auto attack numa luta prolongada.
- detalhe: componentes Reaver, Claymore e Morbid Mask (lifesteal). O buff também é Basic Dispel, então limpa silence/hex como o Manta.
- combo: ativar o Satanic junto com o Static Link numa troca de dano físico sustenta a vida enquanto ele continua drenando
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Butterfly (butterfly)
- minuto: 33:32 (1 dos 9 jogos pos 3)
- porque: evasão de 35% e mais velocidade de ataque, pro jogo que já virou troca de auto attack contra outro right-clicker.
- contra: carries de dano físico puro sem Monkey King Bar
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet

#### Hurricane Pike (hurricane_pike)
- minuto: 37:02 (1 dos 9 jogos pos 3)
- porque: empurra o alvo e dá 5 ataques sem restrição de alcance, útil pra manter o Static Link em quem tenta kitar.
- detalhe: componentes Force Staff e Dragon Lance.
- contra: heróis de fuga corpo a corpo que tentam sair do alcance do Static Link
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Eul's Scepter of Divinity (cyclone)
- minuto: 12:29 (3 dos 9 jogos pos 3, compra precoce)
- porque: dispel em si mesmo e 2,5s tirando alguém de ação (invulnerável e preso no ciclone, não consegue atacar nem castar), barato pra lane difícil.
- contra: lane com disable ou kill pesado antes do nível 7
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet

## Pos 2 (mid)
- quando pegar: 4 dos 16 picks pro no Atlas tier1 foram mid (1V-3D), amostra pequena; o kit (Plasma Field limpa wave rápido, Storm Surge punibilidade em trade de auto attack) é o mesmo motivo que sustenta o offlane, só que disputando a wave do meio.
- itens iniciais: tango, magic_stick, slippers, branches

### Build
#### Black King Bar (black_king_bar)
- minuto: 20:23 (4 de 4 jogos pos 2)
- porque: mesmo motivo do offlane, só que ainda mais cedo: no mid ele costuma estar no alvo prioritário de disable do time inimigo.
- contra: Shadow Shaman (Shackles) e Lion (Hex), os 2 dos 5 piores matchups medidos do herói cujo disable não fura BKB (ver detalhe completo na seção pos 3)
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; https://api.opendota.com/api/heroes/15/matchups

#### Yasha (yasha)
- minuto: 22:51 (3 de 4 jogos pos 2)
- porque: mesma lógica do offlane, velocidade pra proc e pra não perder alcance do link.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet

### Situacionais
#### Manta Style (manta)
- minuto: 29:15 (2 de 4 jogos pos 2)
- porque: dispel e split push, igual no offlane.
- contra: disable dispelável (stun, silence, hex comuns)
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet

#### Linken's Sphere (sphere)
- minuto: 28:44 (via Ultimate Orb aos 26:11; 1 de 4 jogos pos 2)
- porque: bloqueio gratuito de feitiço de alvo único, mesmo raciocínio do offlane.
- contra: Lion, Shadow Shaman, Doom, Rubick
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet

#### Hurricane Pike (hurricane_pike)
- minuto: 41:27 (via Force Staff aos 40:55; 1 de 4 jogos pos 2)
- porque: empurra e garante 5 ataques sem limite de alcance pra manter o link.
- contra: heróis de fuga corpo a corpo
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet

#### Eul's Scepter of Divinity (cyclone)
- minuto: 13:41 (1 de 4 jogos pos 2)
- porque: dispel em si mesmo e 2,5s tirando alguém de ação (invulnerável e preso no ciclone), barato pra lane de mid disputada.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet

## Pos 1 (carry)
- quando pegar: só 3 dos 16 picks pro no Atlas tier1 foram carry (1V-2D), a menor amostra das três; dos 3 jogos, 2 seguiram Yasha para Manta (igual ao offlane) e 1 seguiu um caminho de right-click puro (Maelstrom para Mjollnir).
- itens iniciais: tango, magic_stick, slippers, branches

### Build
#### Yasha (yasha)
- minuto: 16:23 (2 dos 3 jogos pos 1)
- porque: mesmo motivo das outras posições, velocidade de ataque e de movimento.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet

#### Black King Bar (black_king_bar)
- minuto: 22:35 (3 de 3 jogos pos 1)
- porque: sobrevive aos disables que cortam o auto attack, igual nas outras posições.
- contra: Shadow Shaman (Shackles) e Lion (Hex), os 2 dos 5 piores matchups medidos do herói cujo disable não fura BKB (ver detalhe completo na seção pos 3)
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; https://api.opendota.com/api/heroes/15/matchups

#### Manta Style (manta)
- minuto: 25:04 (2 dos 3 jogos pos 1)
- porque: dispel mais split push farmando como carry.
- contra: disable dispelável
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet

### Situacionais
#### Maelstrom (maelstrom)
- minuto: 15:47 (1 dos 3 jogos pos 1, caminho alternativo de right-click puro)
- porque: 25% de chance de Chain Lightning que fura evasão, empilha com os procs do Storm Surge pra limpar camp e jungle mais rápido.
- combo: evolui pra Mjollnir (28:05), que dá Static Charge além da Chain Lightning
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Mjollnir (mjollnir)
- minuto: 28:05 (1 dos 3 jogos pos 1, evolução do Maelstrom)
- porque: mantém a Chain Lightning e soma o Static Charge, mais dano de farm e de luta vindo do auto attack.
- contra: jogo que precisa de dano em área além do Plasma Field
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Hyperstone (hyperstone)
- minuto: 26:17 (mediana de 2 dos 3 jogos pos 1; componente de Mjollnir num jogo e de Assault Cuirass no outro)
- porque: velocidade de ataque crua pra engatar mais procs de Storm Surge e de Chain Lightning por segundo.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet

#### Assault Cuirass (assault)
- minuto: 28:03 (1 dos 3 jogos pos 1, pelo caminho Hyperstone)
- porque: aura de velocidade de ataque e armadura pro time, reduz armadura do inimigo perto.
- detalhe: componentes Buckler, Hyperstone e Platemail.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Satanic (satanic)
- minuto: 37:43 (via Reaver aos 36:25; 1 dos 3 jogos pos 1)
- porque: sustenta vida numa troca de auto attack prolongada, igual no offlane.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet

#### Heart of Tarrasque (heart)
- minuto: 35:57 (via Reaver aos 33:32; 1 dos 3 jogos pos 1)
- porque: vida máxima e regeneração pra carregar sem Satanic no mesmo jogo.
- detalhe: componentes Reaver e Ring of Tarrasque.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet

#### Nullifier (nullifier)
- minuto: 32:57 (via Sacred Relic no mesmo minuto; 1 dos 3 jogos pos 1)
- porque: o Nullify dispela e atrasa a fuga de quem depende de buff de mobilidade ou evasão pra escapar do alcance do Static Link.
- contra: heróis com buff de fuga ou evasão (o item remove o buff e desacelera)
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Swift Blink (swift_blink)
- minuto: 52:53 (via Blink Dagger aos 50:58; 1 dos 3 jogos pos 1)
- porque: reposicionar pra engatar o Static Link em quem está fora de alcance, com bônus de agilidade e velocidade na saída.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

## Roshan
Sem registro de Roshan solo: nos dados de replay local (dota-roshan-solo/data/solos.json), Razor nunca aparece com classificação "solo" e aparece 5 vezes com classificação "time" (dano e presença compartilhados com o grupo, não abate sozinho). No Atlas tier1, dos 16 jogos pro em que foi pick, Razor ficou com o último golpe em Roshan em 2 (um jogando pos 1, por volta dos 29min, e um pos 3, por volta dos 24min), sempre como evento de time, não solo.
