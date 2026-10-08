---
id: ficha-troll_warlord
titulo: "Troll Warlord"
heroi: Troll Warlord
patch: 7.41
posicoes: [1, 2]
fontes:
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/heroes.json
- dota-tier1/data/draft.csv
- dota-tier1/data/derivados/itens_chave.parquet
- dota-tier1/data/derivados/objetivos.parquet
- dota-tier1/data/derivados/compras.parquet
- https://api.opendota.com/api/heroes/95/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=95
---

## Resumo

Troll Warlord é um agi ranged que troca pra melee na hora (Battle Stance), farma rápido com Battle Fury e vira uma máquina de ataque com Fervor (ataque fica mais rápido a cada acerto seguido no mesmo alvo) e Berserker's Rage (maim à distância, ensnare no corpo a corpo). No recorte de partidas de Tier 1 rastreadas localmente ele apareceu 5 vezes: 3 como pos 1 carry (Nigma Galaxy, Team Liquid, MOUZ) e 2 como pos 2 mid (LGD Gaming, OG), com 3 vitórias em 5 (fonte: dota-tier1/data/draft.csv). Não há amostra dele como pos 3/4/5 nesses dados, então a ficha cobre só pos 1 e pos 2.

## Pos 1 (carry)

- quando pegar: time quer um farmer rápido (cleave do Battle Fury) que converte em hiper carry de ataque básico com bash no late, sem depender de setup de aliado. Fonte: 3 picks pos 1 no recorte Tier 1, 2 vitórias em 3 (draft.csv).
- itens iniciais: quelling_blade, tango, branches, circlet (combinação mais comprada pro herói no agregado público OpenDota: quelling_blade 67, tango 69, branches 179, circlet 37 ocorrências)

### Build

#### Battle Fury (bfury)
- minute: 13
- porque: cleave de 60% em heróis e 40% em creep limpa wave e camp num golpe só, puxando o farm rápido que o pos 1 precisa.
- detalhe: também dá 7.5 de regen de vida e 2.75 de mana por segundo, então sustenta a lane/jungle sem voltar à base. O cleave atravessa imunidade a magia.
- fonte: dota-tier1/itens_chave.parquet (comprado nas 3 partidas pos 1, entre 12.75min e 14.2min); items.json

#### Power Treads (power_treads)
- porque: alterna força/agilidade e dá 25 de ataque veloz, o que acelera a rampa do Fervor (mais stacks de ataque por segundo no mesmo alvo).
- detalhe: é a bota mais comprada pro herói no agregado público (84 ocorrências contra 12 da Phase Boots).
- fonte: https://api.opendota.com/api/heroes/95/itemPopularity; items.json

#### Yasha (yasha)
- minute: 17
- porque: attack speed e movement speed cedo ajudam a perseguir o alvo do Fervor sem perder stack.
- detalhe: componente de Manta Style ou de Sange and Yasha, as duas rotas mais vistas depois do Battle Fury.
- fonte: dota-tier1/itens_chave.parquet (16.4min e 17.1min em 2 das 3 partidas pos 1); items.json

### Situacionais

#### Manta Style (manta)
- minute: 20
- porque: aplica Dispel Básico e cria 2 ilusões, então limpa debuff e ainda ajuda a empurrar lane/torre enquanto você segue farmando.
- detalhe: ilusão melee causa 33% do dano e a ranged 28%; dura 18 segundos. A invulnerabilidade de 0.1s do cast também evita que um stun chegue bem na troca de item.
- contra: ajuda contra debuffs comuns jogados em você pouco antes da troca, porque o Dispel Básico limpa esses efeitos no próprio cast; não limpa stuns nem debuffs marcados como imunes a dispel básico.
- combo: cast de Manta + Whirling Axes (ranged ou melee) pelas ilusões acelera o clear de wave pra split push solo.
- fonte: items.json; dota-tier1/itens_chave.parquet (1 das 3 partidas pos 1, 19.7min)

#### Black King Bar (black_king_bar)
- minute: 22
- porque: dá imunidade à maioria dos efeitos negativos de feitiço por até 9s, abrindo espaço pra ativar Battle Trance sem ser interrompido no meio do canal.
- detalhe: também aplica Dispel Básico no cast e reduz 60% do dano mágico recebido durante a duração.
- contra: resolve contra line-ups com disable/nuke mágico pesado que tentam te travar antes do Battle Trance.
- combo: BKB (dispel + imunidade) seguido de Battle Trance (outro dispel básico + lifesteal) deixa Troll praticamente impossível de controlar por alguns segundos.
- fonte: items.json; dota-tier1/itens_chave.parquet (1 das 3 partidas pos 1, 22min)

#### Skull Basher (basher) → Abyssal Blade (abyssal_blade)
- minute: 24
- porque: 25% de chance de stun em ataque melee (10% ranged) trava o alvo do Fervor, e a versão Abyssal ainda fura imunidade a debuff no ativo.
- detalhe: Abyssal Blade sobe o stun pra 1.6s no ativo e dá 26 de força e 30% de resistência a slow; nenhuma das duas versões funciona em Spirit Breaker, Faceless Void, Slardar ou Kez em modo Sai.
- contra: perde valor contra Spirit Breaker, Faceless Void, Slardar e Kez (Sai), já que o bash não ativa nesses heróis; nesses casos preferir Diffusal/Disperser pelo slow.
- combo: Fervor empilhado (mais ataques por segundo) + bash = chance de stun quase constante no 1x1.
- fonte: items.json (nota explícita de exceção de bash); dota-tier1/itens_chave.parquet (24.1min e 28.1min)

#### Diffusal Blade (diffusal_blade) → Disperser (disperser)
- minute: 22
- porque: Manabreak queima 40 de mana por ataque e converte em dano, secando quem depende de mana pra lutar ou escapar.
- detalhe: Disperser soma o ativo Suppress, que dispensa (Dispel Básico) você e o alvo e aplica um slow decrescente de 100% a 0% em 5s no inimigo.
- contra: resolve contra heróis com pool de mana alto que precisam gastar mana pra lutar ou fugir, e o Suppress serve pra travar um alvo que está fugindo de slow comum.
- combo: Suppress (Disperser) pra travar a fuga + Whirling Axes pra manter o slow enquanto o Fervor sobe.
- fonte: items.json; dota-tier1/itens_chave.parquet (22.2min diffusal, 31.85min disperser)

## Pos 2 (mid)

- quando pegar: draft quer um mid agressivo que prioriza Aghanim's Scepter como item grande logo depois da bota e ainda vira o farmer principal do time no late. Fonte: 2 picks pos 2 no recorte Tier 1 (LGD Gaming venceu, OG perdeu) (draft.csv).
- itens iniciais: mesma base do agregado público do herói (tango, branches, circlet/slippers), sem amostra local específica de pos 2.

### Build

#### Aghanim's Scepter (ultimate_scepter)
- minute: 14
- porque: nas 2 partidas pos 2 do recorte, foi o item grande de maior prioridade depois da bota, comprado antes até de Consecrated Wraps, sinal de prioridade máxima no mid.
- detalhe: dá 10 de todos os atributos e 175 de vida/mana. O efeito específico que ele muda nas habilidades do Troll Warlord não tem texto preenchido nas constantes locais; uma busca na web indicou que ele daria dispel ao Whirling Axes (a versão à distância dispelaria o inimigo, a corpo a corpo dispelaria o próprio Troll) e reduziria custo/cooldown, mas não foi possível abrir a fonte primária pra confirmar (Liquipedia, dota2protracker e dota2 fandom bloquearam o fetch também nesta verificação), então esse efeito não é afirmado aqui.
- fonte: dota-tier1/data/derivados/compras.parquet (as duas partidas já tinham bota básica e Power Treads prontos bem antes do scepter, por volta de 6min; o scepter veio em 13.3min e 15.8min, ainda antes de Consecrated Wraps nas duas); items.json (custo e stats genéricos)

#### Consecrated Wraps (consecrated_wraps)
- minute: 18
- porque: dá vida, resistência mágica e uma barreira de dano por stack, segurando a troca de dano cedo no mid sem precisar recuar.
- detalhe: ganha 1 stack a cada 3s (máx. 3) e ao levar dano de herói/Roshan consome tudo pra uma barreira de até 360 de dano; o bônus de movimento só vale depois de encher os stacks pela primeira vez.
- fonte: items.json; dota-tier1/itens_chave.parquet (17.8min e 18.9min nas 2 partidas pos 2)

### Situacionais

#### Heart of Tarrasque (heart)
- minute: 24
- porque: regen de vida percentual sustenta o Troll em fights longos puxados pela Battle Trance (lifesteal) sem precisar de Satanic cedo.
- contra: resolve contra composições de poke/magia sustentada que tentam ganhar pelo desgaste em vez de burst.
- fonte: dota-tier1/itens_chave.parquet (1 das 2 partidas pos 2, 24.2min); items.json

#### Blink Dagger (blink) → Overwhelming Blink (overwhelming_blink)
- minute: 33
- porque: fecha distância pra entrar com Battle Trance em cima do alvo certo antes de ele escapar.
- detalhe: a versão Overwhelming soma stats de Reaver (força) ao blink.
- contra: resolve contra heróis com alto dano de magia à distância que, de outro jeito, nunca deixariam o Troll chegar perto.
- fonte: dota-tier1/itens_chave.parquet (33.1min blink, 38.5min overwhelming_blink, 1 das 2 partidas pos 2); items.json

#### Satanic (satanic)
- minute: 43
- porque: lifesteal ativo some com o risco de burst justamente quando a Battle Trance já está dando lifesteal passivo, dobrando a sustentação no fight decisivo.
- contra: resolve contra composições de burst/pick-off que tentam matar o Troll antes dele conseguir devolver vida.
- fonte: dota-tier1/itens_chave.parquet (1 das 2 partidas pos 2, 42.7min); items.json

## Roshan

Não há registro de Troll Warlord no dataset dedicado de Roshan solo (dota-roshan-solo/data/resumo_por_heroi.json não lista o herói), então ele não aparece ali como um dos heróis-referência pra matar Roshan sozinho.

Ainda assim, no recorte de partidas Tier 1 rastreadas localmente (objetivos.parquet), Troll Warlord foi o herói que desferiu o último golpe em Roshan em 4 das 5 partidas em que foi pickado, tanto como pos 1 quanto como pos 2:
- Team Liquid (pos 1, vitória): Roshan aos 18.2min e aos 29.6min
- MOUZ (pos 1, vitória): Roshan aos 23.2min
- OG (pos 2, derrota): Roshan aos 21.6min e aos 43.7min
- LGD Gaming (pos 2, vitória): Roshan aos 49min
- Na partida da Nigma Galaxy (pos 1, derrota) o Roshan daquele jogo foi finalizado pelo Meepo adversário, não pelo Troll.

Os dados não dizem se essas mortes de Roshan foram solo ou com o time por perto (não há registro de teamfight bem no instante da morte na maioria dos casos), então fica só o fato confirmado: ele costuma ser quem fecha o Roshan do time quando está no time, nas duas posições.
