---
id: ficha-obsidian_destroyer
titulo: "Outworld Destroyer"
heroi: Outworld Destroyer
patch: 7.41
posicoes: [2]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-tier1/data/heroes.json
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/76/itemPopularity
- https://dotacoach.gg/en/heroes/outworld-devourer/builds/mid
- https://dotacoach.gg/en/heroes/counters/outworld-devourer
- https://dotacoach.gg/en/items/witch-blade
---

## Resumo
Outworld Destroyer é um nuker de inteligência que transforma mana em dano: o inato Ominous Discernment dá +2,5 de mana extra por ponto de int (fora o ganho normal) e o inato Essence Flux tem 30% de chance de devolver 40% da mana máxima (25% se o feitiço só modifica ataque) a cada habilidade usada, enchendo o pool que vira dano puro no Arcane Orb (% da mana atual) e dano mágico na Sanity's Eclipse (diferença de mana contra o alvo) (constants_abilities.json). Ele joga praticamente só de pos 2 (mid): nas 16 partidas de pro confirmadas por replay no lote do Atlas (dota-tier1/data/draft.csv), 100% foram mid, incluindo 2 picks que o draft etiquetou como pos 3 e o replay corrigiu pra pos 2.

## Pos 2 (mid)
- quando pegar: de meio pra fim do draft, pra evitar os contra-picks difíceis: Templar Assassin (Refraction bloqueia boa parte do Arcane Orb e da Sanity's Eclipse), Sniper (kita na lane), Nyx Assassin (Mind Flare pune a int alta e Spiked Carapace reflete a Sanity's Eclipse), Arc Warden, Broodmother, Lone Druid, Visage, Wraith King, Beastmaster e Silencer (Global Silence corta o combo todo). Ele é bom contra Oracle, Axe, Legion Commander, Winter Wyvern, Timbersaw, Ancient Apparition, Abaddon, Omniknight, Troll Warlord, Slark e Tidehunter (fonte: dotacoach counters).
- itens iniciais: tango, null_talisman, ward_observer (alternativa: mantle, circlet, circlet, branches, branches)

### Build
#### Null Talisman (null_talisman)
- porque: mana e regen pra sustentar Astral Imprisonment e Arcane Orb na troca de lane sem gastar um slot melhor.
- detalhe: +5 de int, +2 de força e agilidade, +3% de mana máxima, +1 de regen de mana. Feito de Circlet + Mantle of Intelligence. É o item mais comprado por Outworld Destroyer na fase inicial no OpenDota, com a maior contagem de toda a fase "early".
- fonte: items.json; itemPopularity (OpenDota)

#### Power Treads (power_treads)
- porque: velocidade de ataque e atributo extra fazem o Arcane Orb procar mais vezes por minuto.
- detalhe: +25 de velocidade de ataque, +10 no atributo trocado. Fica em inteligência pra mais mana e troca pra força quando é iniciado. Segundo item mais comum da fase early no OpenDota.
- fonte: items.json; itemPopularity (OpenDota)

#### Witch Blade (witch_blade)
- porque: veneno que soma 0,75x a sua int como dano mágico por ataque, empilhando com o Arcane Orb que já é dano puro.
- detalhe: +40 de velocidade de ataque, +12 de int, +5 de armadura. O próximo ataque aplica veneno de 4s (25% de slow, true strike); não acumula, só reinicia a duração. Montado com Oblivion Staff (Blitz Knuckles + Robe + Sobi Mask) + Chainmail + Orb of Venom.
- combo: o veneno do Witch Blade soma com o dano puro do Arcane Orb pra abrir buraco na vida do alvo antes da Sanity's Eclipse; a própria página do item na dotacoach cita Witch Blade como peça pra "burst down enemy heroes with Arcane Orb and Sanity's Eclipse" (não cita o Astral Imprisonment nessa junção).
- fonte: items.json; itemPopularity (OpenDota); dotacoach (item Witch Blade)

#### Blink Dagger (blink)
- porque: fecha distância pra prender o alvo certo com Astral Imprisonment antes de abrir a luta.
- detalhe: 1.200 de alcance de blink, fica inutilizável por 3s se tomar dano de herói inimigo ou Roshan. É o item mais comprado por Outworld Destroyer na fase mid do OpenDota, a maior contagem da fase.
- combo: Blink Dagger seguido de Astral Imprisonment isola o alvo (o disable não é dispelável) antes do time inimigo reagir.
- fonte: items.json; itemPopularity (OpenDota)

#### Dragon Lance (dragon_lance)
- porque: +130 de alcance de ataque mantém o Arcane Orb procando de longe sem precisar entrar no corpo a corpo.
- detalhe: +15 de agilidade, +10 de força. Vira componente do Hurricane Pike.
- fonte: items.json; itemPopularity (OpenDota)

#### Hurricane Pike (hurricane_pike)
- porque: empurra o alvo e garante 5 ataques com +100 de velocidade de ataque, cada um procando o Arcane Orb.
- detalhe: feito de Dragon Lance + Force Staff. Empurra 425 (no inimigo) ou 600 (em si ou aliado); os 5 ataques saem sem restrição de alcance por 6s.
- combo: usado no próprio Outworld Destroyer, cria distância de uma iniciação; usado no inimigo, afasta e ainda garante os 5 ataques com o Arcane Orb procando em cada um.
- fonte: items.json; itemPopularity (OpenDota)

#### Black King Bar (black_king_bar)
- porque: imunidade a magia bloqueia justamente os disables de alvo que mais o atrapalham.
- detalhe: 9/8/7s de imunidade (3 cargas), +24 de dano, +10 de força.
- contra: Silencer (Global Silence impede Astral Imprisonment e Sanity's Eclipse), Nyx Assassin (Mind Flare e Impale).
- fonte: items.json; itemPopularity (OpenDota); dotacoach counters

#### Scythe of Vyse (sheepstick)
- porque: hex não dispelável prende o alvo decisivo pra fechar a troca com a Sanity's Eclipse.
- detalhe: +30 de int, +8,5 de regen de mana. Hex de 2,8s que trava a velocidade de movimento em 140. Feito de Mystic Staff + Tiara of Selemene.
- fonte: items.json; itemPopularity (OpenDota, item mais comprado da fase late)

#### Aghanim's Scepter (ultimate_scepter)
- porque: +10 em todos os atributos e +175 de mana dão sobrevida e mais mana pro Arcane Orb e pra Sanity's Eclipse.
- detalhe: feito de Point Booster + Staff of Wizardry + Ogre Axe + Blade of Alacrity. Não encontrei, nas constantes locais, nenhum upgrade de habilidade específico do Scepter pra Outworld Destroyer: é só o bônus de atributos genérico do item.
- fonte: items.json; itemPopularity (OpenDota)

#### Parasma (devastator)
- porque: upgrade do Witch Blade que reduz 20% da resistência mágica do alvo por 4s a cada ataque, destravando mais dano mágico depois.
- detalhe: feito de Witch Blade + Mystic Staff. Mantém o veneno (true strike) do Witch Blade e soma Magic Corruption, que atravessa BKB.
- contra: heróis com resistência mágica alta, que é exatamente o que a Magic Corruption do item reduz.
- fonte: items.json (descrição oficial do item)

### Situacionais
#### Linken's Sphere (sphere)
- quando: contra Legion Commander ou outro herói de feitiço de alvo único que tenta anular a vantagem de dano puro.
- porque: bloqueia o primeiro feitiço de alvo único a cada 14s.
- detalhe: +16 em todos os atributos, +6,5 de regen de vida, +4,25 de regen de mana.
- contra: Legion Commander: Astral Imprisonment já salva um aliado do Duel e o Arcane Orb bate pesado nele, mas Outworld Destroyer fica frágil se for pego primeiro (dotacoach counters); não achei fonte local nem externa aberta nesta checagem confirmando que o Spellblock do Linken's bloqueia Duel especificamente, então fiquei só no bloqueio genérico de alvo único.
- fonte: items.json; dotacoach counters

#### Refresher Orb (refresher)
- quando: jogo que passa de uns 40min e vai se decidir numa troca só por um objetivo (Roshan, Aegis, torre).
- porque: reseta o cooldown de tudo, dobrando Astral Imprisonment e Sanity's Eclipse na mesma luta.
- detalhe: +14 de regen de vida, +7 de regen de mana. Feito de Ring of Tarrasque + Tiara of Selemene.
- contra: times que fecham o jogo rápido não dão tempo de farmar os 5.000 de ouro extra; melhor guardar pra confronto de late.
- fonte: items.json; itemPopularity (OpenDota)

## Roshan
Sem dado de Roshan solo.
