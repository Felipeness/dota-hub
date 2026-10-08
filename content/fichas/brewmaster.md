---
id: ficha-brewmaster
titulo: "Brewmaster"
heroi: Brewmaster
patch: 7.41
posicoes: [3]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-tier1/work/equipes/xtreme/analise.md
- dota-tier1/work/equipes/aurora/analise.md
- https://api.opendota.com/api/heroes/78/itemPopularity
---
## Resumo

Brewmaster é um tanque de todos os atributos que abre luta com Thunder Clap e Cinder Brew (dano e slow em área) e fecha com Primal Split, se dividindo em 3 elementais que seguram espaço e dano por um tempo. No lote de partidas pro do Atlas Tier 1, ele apareceu 48 vezes e o replay confirmou pos 3 em 47 delas, com 52% de vitória: é praticamente um herói exclusivo de offlane nesse recorte. Também é um dos mais banidos do lote (67 bans em 115 aparições) e costuma ser escolhido nas fases 2 e 3 do draft, depois que o time já viu parte da composição inimiga.

## Pos 3 (offlane)

- quando pegar: entra como iniciador puro depois de ver parte do time inimigo (39 das 48 picks do Atlas Tier 1 vieram nas fases 2 e 3 do draft, não na 1ª). A Xtreme Gaming, por exemplo, trata ele junto com Doom e Dark Seer como o pacote de "offlaner de iniciação" do time pós-TI (4 picks, 75% de vitória na amostra).
- itens iniciais: quelling_blade, tango, branches, circlet, gauntlets, magic_stick

### Build

#### Phase Boots (phase_boots)
- porque: fecha a distância pra iniciar; Phase dá 20% de velocidade e atravessa unidades por 3s.
- detalhe: também soma +4 de armadura e +18 de dano corpo a corpo direto no inventário. É a bota mais coerente com quem quer chegar primeiro no grupo em vez de focar em farm de lane.
- combo: Phase ativo + Thunder Clap: entra no meio do aglomerado e já solta o Thunder Clap em cima de todo mundo.
- fonte: items.json (local)

#### Bracer (bracer)
- porque: stat barato que fecha a fase de lane sem atrasar o Aghanim's Scepter.
- detalhe: +5 de força, +2 de agilidade, +2 de inteligência, +50 de vida e regen. Não é power spike, é só não perder ritmo de curva.
- fonte: items.json (local)

#### Hand of Midas (hand_of_midas)
- porque: acelera o farm pra chegar mais rápido no Aghanim's Scepter sem depender de kill.
- detalhe: +35 de velocidade de ataque e transforma um last hit (ou jungle kill) em 160 de ouro não-confiável. O XP do Transmute não é compartilhado com o time, então puxa o herói pra farmar em vez de ficar na lane.
- fonte: items.json (local); OpenDota itemPopularity (API)

#### Aghanim's Scepter (ultimate_scepter)
- porque: é o item-alvo do herói, sobe um nível no Primal Split e deixa os 3 elementais maiores.
- detalhe: construído com Point Booster, Staff of Wizardry, Ogre Axe e Blade of Alacrity, que são exatamente os 4 itens mais compactados no meio de jogo dele no OpenDota (90 a 96 contagens cada, de um total de 100 jogos amostrados). O ganho de nível do Primal Split está direto nas constantes do jogo (scepter_bonus_levels = 1).
- combo: Scepter pronto + nível 6/12/18 do Primal Split: cada elemental sobe de HP e dano junto com o nível normal da ult, não só com o item.
- fonte: items.json (local); constants_abilities.json (local); OpenDota itemPopularity (API)

#### Blink Dagger (blink)
- porque: sem ele o combo de iniciação não existe, é o que leva o Brewmaster pro meio do time inimigo.
- detalhe: teleporte instantâneo de curto alcance. Cuidado ao usar em si mesmo por engano: ele te leva na direção da fonte do seu time.
- combo: Blink + Thunder Clap: entra no meio do grupo e já solta o Thunder Clap, que atinge 400 de raio com até 60% de slow de movimento e até 60 de attack speed a menos (valor fixo, não percentual).
- fonte: items.json (local); constants_abilities.json (local, Thunder Clap)

#### Assault Cuirass (assault)
- porque: amplifica o time inteiro na luta que o próprio Brewmaster abriu.
- detalhe: aura de +30 de velocidade de ataque e +5 de armadura pros aliados, e -5 de armadura pros inimigos ao redor. Foi o item de late game mais comprado nele no lote do OpenDota (56 de 100 jogos).
- combo: Assault + Thunder Clap: o Thunder Clap já reduz a velocidade de ataque do time inimigo, e a aura do Assault ainda tira 5 de armadura deles. O time bate mais forte e recebe menos dano ao mesmo tempo.
- fonte: items.json (local); OpenDota itemPopularity (API)

#### Refresher Orb (refresher)
- porque: reseta o cooldown de tudo, inclusive do Primal Split.
- detalhe: construído com Ring of Tarrasque e Tiara of Selemene. Apareceu pronto em 42 das partidas do lote do OpenDota no late game.
- combo: Primal Split, luta, Refresher, Primal Split de novo: dobra o tempo com 3 elementais em campo numa mesma teamfight prolongada.
- fonte: items.json (local); OpenDota itemPopularity (API)

### Situacionais

#### Black King Bar (black_king_bar)
- porque: deixa qualquer efeito negativo de feitiço inimigo sem efeito por 9s, inclusive stun e hex.
- detalhe: também dá 60% de resistência mágica e imunidade a dano refletido e puro durante a duração, e aplica um dispel básico ao ativar.
- contra: linhas com disable mágico de alvo único ou em área (Lion, Shadow Shaman, Disruptor, Skywrath Mage): o efeito do feitiço simplesmente não aplica enquanto o Avatar durar.
- fonte: items.json (local)

#### Aeon Disk (aeon_disk)
- porque: quando a vida cai abaixo de 70%, aplica um dispel forte e zera o dano por 2,5s.
- detalhe: gatilho passivo (Combo Breaker); o cooldown aumenta cada vez que ativa e só conta dano vindo de herói.
- contra: combos de burst num alvo só (Lion stun + nuke, Tiny toss + avalanche): o dispel mais a janela de dano zero quebra o combo no meio.
- fonte: items.json (local)

#### Pipe of Insight (pipe)
- porque: cobre o time inteiro com uma barreira de 425 de dano mágico antes de um nuke em área.
- detalhe: também dá 8% de resistência mágica em aura permanente, que empilha de forma multiplicativa com outras fontes (ex. Black King Bar).
- contra: times com dano mágico em área concentrado (Zeus, Lina, Tidehunter no Ravage, Enigma no Black Hole): a Barrier absorve o primeiro estouro inteiro.
- fonte: items.json (local)

#### Crimson Guard (crimson_guard)
- porque: bloqueia uma fatia fixa de cada ataque recebido pelo time por 7s.
- detalhe: a passiva sozinha já bloqueia, por chance, 75 de dano corpo a corpo ou 50 à distância; não acumula com outra fonte de bloqueio de dano.
- contra: times de dano físico repetido num alvo ou summons fracos em quantidade (Phantom Assassin, Lone Druid, Broodmother): cada ataque perde uma parte fixa do dano.
- fonte: items.json (local)

#### Lotus Orb (lotus_orb)
- porque: devolve pro inimigo o próprio feitiço de alvo único que ele lançou em você.
- detalhe: escudo de 5s que reflete a maioria dos feitiços direcionados; o alvo ainda toma o dano do feitiço, só o efeito que volta.
- contra: disables de alvo único (Doom, hex do Lion ou do Bane): o controle é devolvido pro próprio lançador.
- fonte: items.json (local)

#### Octarine Core (octarine_core)
- porque: 25% de redução de recarga deixa o Thunder Clap e o Primal Split saindo de novo bem mais rápido.
- detalhe: também dá 450 de vida e 450 de mana, segurando o custo de mana do combo de feitiços em sequência.
- fonte: items.json (local)

#### Skull Basher / Abyssal Blade (basher)
- porque: 25% de chance de stun em cada ataque corpo a corpo trava quem tentaria fugir do Primal Split.
- detalhe: o upgrade pra Abyssal Blade soma um stun ativo de alcance corpo a corpo; nenhum dos dois acumula com outra fonte de bash.
- contra: carries de fuga ou alta mobilidade sem imunidade a stun (Weaver, Storm Spirit sem Black King Bar, Ember Spirit): o bash trava o reposicionamento no momento em que ele tenta escapar.
- fonte: items.json (local)

## Roshan

Sem dado de Roshan solo.
