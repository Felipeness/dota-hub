---
id: ficha-pugna
titulo: "Pugna"
heroi: Pugna
patch: 7.41
posicoes: [5]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/solos.json
- dota-roshan-solo/data/resumo_com_suporte.json
- dota-tier1/data/draft.csv
- dota-tier1/data/jogadores_partida.csv
- dota-tier1/data/derivados/itens_chave.parquet
- https://api.opendota.com/api/heroes/45/itemPopularity
- https://dotacoach.gg/heroes/pugna/builds/support
---

## Resumo
Pugna é nuker/pusher de inteligência (roles no heroes.json): Decrepify trava o alvo (não ataca, não é atacado) e amplia em 20-50% o dano mágico que ele recebe, Nether Ward pune quem lança feitiço perto dele, e Life Drain canaliza vida do inimigo pro próprio Pugna enquanto ele continua podendo lançar outras magias e usar itens (passiva Oblivion Savant). No dataset local de pro play (dota-tier1/draft.csv e jogadores_partida.csv), as 4 picks confirmadas dele em 2026 foram todas como pos 5, GPM baixo (275-420) e XPM 384-746, perfil de suporte duro que não depende de farm pra funcionar; ganhou 1 das 4 (amostra pequena). Não há dado local de nenhuma pick dele como pos 1 a 4.

## Pos 5 (suporte duro)
- quando pegar: é a única posição com dado real confirmado no pro play local: 4 das 4 partidas rastreadas (dota-tier1/draft.csv e jogadores_partida.csv, campo posicao=5 e od_lane_role=1). O combo Decrepify + Life Drain funciona sem precisar de item nem de farm, o que cobre a rota de suporte que não vai puxar criatura.
- itens iniciais: tango, branches, ward_dispenser, blood_grenade, magic_stick (itens de abertura mais comprados pelo herói no OpenDota itemPopularity, fase start_game_items; mesma lista de abertura do guia de suporte do Dota Coach)

### Build
#### Arcane Boots (arcane_boots)
- porque: regen de mana de graça pra sustentar Nether Blast e Decrepify na lane sem gastar ouro em clarity toda hora.
- detalhe: é a bota mais comprada do herói no OpenDota itemPopularity na fase mid_game_items (61 compras, a maior contagem entre todas as botas do herói, e o maior número geral da fase) e primeiro item "core" no guia de suporte do Dota Coach de TORTE DE LINI (7.41e); o guia de PingstaH (7.41b) não lista Arcane Boots, usa Boots of Speed como core.
- fonte: https://api.opendota.com/api/heroes/45/itemPopularity (mid_game_items); https://dotacoach.gg/heroes/pugna/builds/support

#### Glimmer Cape (glimmer_cape)
- minuto: ~23 (21:03 a 25:52 nas 4 partidas pro locais)
- porque: invisibilidade curta mais 20% de resistência mágica pra Pugna chegar no alcance de Decrepify sem ser visto e sobreviver ao primeiro burst.
- detalhe: único item comprado nas 4 das 4 partidas pos5 rastreadas localmente (dota-tier1/derivados/itens_chave.parquet), o mais consistente da build.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (4/4 partidas pos5); items.json

#### Blink Dagger (blink)
- minuto: ~35 (30:57 e 39:32 nas 2 partidas que compraram)
- porque: fecha a distância pro alcance de 550-700 do Decrepify e 700 do Life Drain antes do inimigo reagir ou fugir.
- detalhe: comprado em 2 das 4 partidas pos5 rastreadas (dota-tier1/derivados/itens_chave.parquet).
- combo: Decrepify trava o alvo (não pode atacar nem ser atacado por ninguém, só por feitiço) e amplia o dano mágico que ele recebe; com o alvo preso, Life Drain canaliza sem risco de ser interrompido por ataque básico, e a passiva Oblivion Savant deixa Pugna lançar Nether Blast ou usar item no meio do canal.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (2/4 partidas pos5); constants_abilities.json (pugna_decrepify: cast range 550-700, dispellable; pugna_life_drain: cast range 700; pugna_oblivion_savant: cast durante o canal)

### Situacionais
#### Solar Crest (solar_crest)
- quando: 1 das 4 partidas pos5 locais, minuto 30:31.
- porque: a ativa (Shine) dá a um carry aliado +5 de armadura, +60 de velocidade de ataque, +15% de velocidade de movimento e uma barreira de 350 de dano físico por 7s; Pugna como portador também ganha +7 de armadura passiva do próprio item. Só pode ser usado em aliado (Shine é "Friendly"), não existe versão pra reduzir armadura de inimigo.
- contra: lineups em que o time de Pugna depende de dano físico de um carry pra converter a trava de Decrepify em abate.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (1/4 partidas pos5); items.json

#### Force Staff (force_staff)
- quando: 1 das 4 partidas pos5 locais, minuto 29:17.
- porque: reposiciona Pugna pra fora do alcance de quem veio matá-lo no meio do Life Drain, ou empurra um aliado pro combo.
- contra: iniciações de alcance curto (gap closer melee) que depois de um Force Staff perdem o ângulo de chegar em Pugna a tempo.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (1/4 partidas pos5); items.json

#### Pipe of Insight (pipe)
- quando: 1 das 4 partidas pos5 locais, minuto 42:36.
- porque: barreira e resistência mágica em área pro time inteiro, pra aguentar burst em grupo antes de Pugna fechar o combo.
- contra: lineups com várias fontes de dano mágico em área ao mesmo tempo (nukes/ultimates em área que o time de Pugna não sobrevive sem barreira coletiva).
- fonte: dota-tier1/data/derivados/itens_chave.parquet (1/4 partidas pos5); items.json

#### Aether Lens (aether_lens)
- quando: 1 das 4 partidas pos5 locais, minuto 33:56.
- porque: +225 de alcance em todas as magias, deixando Pugna acertar Decrepify e Nether Ward de mais longe com menos risco.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (1/4 partidas pos5); items.json

#### Linken's Sphere (sphere)
- quando: 2 das 4 partidas pos5 locais, componente Ultimate Orb aos 46:46 e 54:53, item pronto aos 47:25 e 54:58.
- porque: bloqueia (Spellblock) a primeira magia de alvo único lançada em Pugna, protegendo o suporte de baixa vida de um disable garantido.
- contra: heróis de disable de alvo único forte (hex, stun longo de alcance) que dependiam de acertar essa magia específica pra abrir o combo neles.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (2/4 partidas pos5); items.json (nota "Targeted abilities from neutral items do not trigger Spellblock" confirma o mecanismo de Spellblock no item)

#### Scythe of Vyse (sheepstick)
- quando: 1 das 4 partidas pos5 locais, componente Mystic Staff aos 41:35, item pronto aos 43:29.
- porque: dá a Pugna o próprio hex de alvo único (2,8s), a mesma trava do Decrepify mas num alvo que já dispelou o Decrepify.
- contra: iniciadores ou carries inimigos que precisam ativar uma habilidade pra virar a luta: hexados, não atacam nem lançam nada por 2,8s.
- fonte: dota-tier1/data/derivados/itens_chave.parquet (1/4 partidas pos5); items.json

## Roshan
Sem dado de Roshan solo. Pugna não aparece em nenhuma entrada de resumo_por_heroi.json, early_rosh_pro.json nem late_rosh_pro.json do dataset local de Roshan solo. No dataset bruto (solos.json), Pugna aparece 11 vezes causando dano registrado em eventos de Roshan de outros heróis (ursa, troll_warlord, life_stealer, huskar, meepo, muerta, juggernaut), mas em nenhuma dessas entradas ele é o herói com o último golpe; como suporte duro de baixo dano físico e sem farm, não é um perfil esperado de Rosh solo.
