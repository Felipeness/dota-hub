---
id: ficha-bloodseeker
titulo: "Bloodseeker"
heroi: Bloodseeker
patch: 7.41
posicoes: [1]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-tier1/data/draft.csv
- dota-tier1/data/derivados/itens_chave.parquet
- dota-tier1/data/partidas/8745947296/meta.json
- dota-tier1/data/partidas/8783863589/meta.json
- dota-tier1/data/partidas/8889524021/meta.json
- dota-tier1/data/partidas/8943466067/meta.json
- dota-tier1/data/partidas/9023339084/meta.json
- https://dotacoach.gg/en/heroes/bloodseeker
- https://dota2protracker.com/hero/Bloodseeker
- https://dota2.fandom.com/wiki/Phase_Boots
---

## Resumo
Bloodseeker é um carry de agilidade melee que trava o inimigo com Rupture (dano por distância andada) e farma rápido com Maelstrom/Mjollnir. No 7.41 ele só aparece como pos 1: nos 5 jogos pros do dataset local do Atlas (dota-tier1), as 5 vezes que foi picado a posição confirmada pelo replay foi 1, e no agregado de público do Dota Coach o papel de carry responde por 62,9% de seleção com 51,1% de vitória no patch 7.41f (mid, offlane e as duas posições de suporte somam o resto, bem atrás). O que sustenta restringir esta ficha ao pos 1 é o dataset local de pros: 100% dos picks (5/5) foram jogados exatamente nessa posição.

## Pos 1 (carry)
- quando pegar: contra linha sem silence/stun forte no early, pra conseguir plantar Rupture, perseguir com Thirst e sair na frente sem precisar do time; é o papel dominante do herói (62,9% de seleção, 51,1% de vitória no 7.41f, Dota Coach) e o único confirmado nos jogos pros locais (5/5 picks como pos 1 no draft.csv do Atlas).
- itens iniciais: tango, quelling_blade, circlet, branches, magic_stick

### Build
#### Phase Boots (phase_boots)
- minuto: ~6
- porque: dá dano fixo e velocidade pra alcançar o alvo antes de precisar de Rupture ou Thirst.
- detalhe: substitui as botas base assim que farma; a ativação (Phase) deixa o herói atravessar outras unidades (menos construção e árvore) por 3s, o que fecha distância na lane ou na fuga.
- fonte: dota2protracker.com/hero/Bloodseeker (build mais jogada do papel carry, item em 6 min); items.json (phase_duration 3.0); dota2.fandom.com/wiki/Phase_Boots (mecânica de atravessar unidades)

#### Maelstrom (maelstrom)
- minuto: ~12-14
- porque: Chain Lightning limpa wave e camp rápido e dá +25 de dano e +25 de velocidade de ataque pra acelerar o farm.
- detalhe: é o primeiro power spike do herói; com Bloodrage ativo (attack speed de +60 a +150 por nível) o clear de camp fica bem mais rápido, o que é o motor do pos 1.
- combo: Bloodrage + Maelstrom no camp grande puxa o próximo item (Mjollnir) mais rápido.
- fonte: itens_chave.parquet (5/5 jogos pros, minuto 11,2 a 14,3); dota2protracker.com/hero/Bloodseeker (build mais jogada do papel carry, mediana 13 min); items.json (bonus_damage 25, bonus_attack_speed 25); constants_abilities.json (Bloodrage attack_speed)

#### Mjollnir (mjollnir, via hyperstone)
- minuto: ~15-23
- porque: mantém o Chain Lightning do Maelstrom (25% de chance) e soma Static Charge, um proc separado de 20% de chance (não dispara mais de uma vez por segundo) que estoura dano mágico em área ao redor do Bloodseeker, além de +90 de velocidade de ataque; isso vira o farm em dano de luta.
- detalhe: compra-se primeiro o Hyperstone (componente) e completa o Mjollnir; vira o item que sustenta tanto o clear quanto o dano em grupo até trocar por Abyssal/Butterfly no fim.
- fonte: itens_chave.parquet (5/5 jogos pros, Hyperstone 14,0 a 22,4 min, Mjollnir completo 15,2 a 23,0 min); dota2protracker.com/hero/Bloodseeker (mediana 18 min); items.json (static_chance 20, static_damage 225, chain_chance 25, bonus_attack_speed 90; nota: "Static Charge cannot trigger more than once per second")

#### Black King Bar (black_king_bar)
- minuto: ~19-24
- porque: imunidade a magia pra sobreviver no meio da luta enquanto conecta os hits que o Sanguivore transforma em vida.
- detalhe: a duração cai por nível usado na mesma luta (9s na 1ª vez, 8s na 2ª, 7s na 3ª), então o ideal é ativar só quando for de fato entrar no corpo a corpo.
- contra: lineups de controle mágico em sequência (silence, stun, root encadeados) que travariam o herói antes de ele conectar os ataques.
- fonte: itens_chave.parquet (5/5 jogos pros, 19,3 a 24,3 min); items.json (duration 9/8/7, max_level 3)

### Situacionais
#### Skull Basher (basher) -> Abyssal Blade (abyssal_blade)
- porque: bash garante que o alvo rupturado fique parado no corpo a corpo em vez de fugir sem levar dano extra.
- detalhe: Abyssal Blade troca o bash por um stun de 1,6s em range corpo a corpo, então vira um segundo lockdown depois do BKB.
- contra: heróis de fuga por blink ou dash (ex. Anti-Mage, Weaver) que normalmente escapariam do alcance de ataque corpo a corpo do Bloodseeker.
- fonte: itens_chave.parquet (basher em 3/5 jogos pros, abyssal_blade em 2/5); items.json

#### Butterfly (butterfly)
- porque: 35% de evasão segura o Bloodseeker contra quem depende de acertar auto-ataque pra fazer dano.
- contra: carries de right-click puro (ex. Phantom Assassin, Spectre, Faceless Void) cujo dano principal vem do ataque básico.
- fonte: itens_chave.parquet (1/5 jogos pros, 35,1 min); items.json (bonus_evasion 35%)

#### Monkey King Bar (monkey_king_bar)
- porque: True Strike garante que o ataque não erre contra quem tem evasão.
- contra: heróis com evasão de verdade (ex. Windranger com Windrun ativo), onde o Butterfly do time inimigo ou a evasão da habilidade faria o Bloodseeker errar hit.
- fonte: itens_chave.parquet (1/5 jogos pros, 45,8 min); items.json (bonus_chance 80%, True Strike)

#### Aghanim's Shard (aghanims_shard)
- porque: dá Blood Mist, que soma slow em área e transforma o overheal do Sanguivore num escudo de dano.
- detalhe: o escudo chega a 50% da vida máxima e decai 0,5% por segundo; a cura do Sanguivore aumenta enquanto o Blood Mist está ativo.
- contra: times de poke/burst mágico, porque o escudo de overheal absorve parte desse dano à distância antes da luta corpo a corpo.
- fonte: dota2protracker.com/hero/Bloodseeker (build mais jogada do papel carry, item em 28 min); constants_abilities.json (bloodseeker_blood_mist: barreira até 50% da vida máxima, decaimento 0,5%/s, cura do Sanguivore +50%)

#### Sange and Yasha (sange_and_yasha)
- porque: 16% de resistência a status encurta stuns e roots que travariam o combo de ataque.
- contra: lineups com disable longo e dano ao longo do tempo (DoTs), onde o regen amp de 20% soma com o Sanguivore pra sustentar vida.
- fonte: itens_chave.parquet (1/5 jogos pros, 28,9-30,4 min); items.json (status_resistance 16%, hp_regen_amp 20%)

## Roshan
Sem dado de Roshan solo (Bloodseeker não aparece em nenhuma das heroi-entries de resumo_por_heroi.json do dataset local de Roshan solo).
