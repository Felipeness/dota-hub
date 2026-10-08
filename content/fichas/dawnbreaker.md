---
id: ficha-dawnbreaker
titulo: "Dawnbreaker"
heroi: Dawnbreaker
patch: 7.41
posicoes: [3]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv (picks de Dawnbreaker, posicao_replay)
- C:/Users/felip/Desktop/dota-tier1/data/partidas/<match_id>/eventos.jsonl (75 partidas pos 3 confirmadas por replay)
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- https://api.opendota.com/api/heroes/135/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=135
---

## Resumo

Dawnbreaker é melee de Força e o OpenDota a classifica como Carry/Durable, mas nos times tier 1 ela é quase só offlaner: 75 das 78 picks dela confirmadas por replay no 7.41 foram na pos 3, contra só 2 na pos 1 e 1 na pos 5, amostra baixa demais pra contar como função real (Atlas tier1, `draft.csv` + `partidas/*/eventos.jsonl`). Ela joga pela sobrevivência, não pelo farm: ganho de Força alto (3,4 por nível), a cura em área da Luminosity a cada 3º ataque e o combo de giro e stun do Starbreaker dão espaço pra ela sair de uma troca 2 contra 1 na lane sem depender de muito ouro. Nessa amostra ela fecha com 42,7% de vitórias na pos 3 (32V-43D em 75 partidas).

## Pos 3 (offlane)

- quando pegar: time quer um offlaner tanque que sobrevive à lane sozinho, cura perto do inimigo com a passiva e já chega ao meio-jogo com Black King Bar e iniciação prontos. É a escolha de 75 das 78 picks dela nos replays do Atlas tier1 (7.41), 42,7% de vitória (32V-43D).
- itens iniciais: tango, flask, branches

### Build

#### Bracer (bracer)
- minuto: 2,6
- porque: vida e Força baratas já na primeira volta à loja, sem gastar o slot de bota.
- detalhe: Bracer (circlet + gauntlets, 505 de ouro) dá +5 Força, +2 Agilidade, +2 Inteligência, +50 de vida e 0,75 de regen. Primeiro item comprado em praticamente todas as 75 partidas da amostra (muitos compram um segundo mais tarde). Sustenta a troca de dano nos primeiros minutos de lane.
- fonte: Atlas tier1, replay local (mediana 2,6 min, 75 partidas pos 3); items.json (Bracer)

#### Soul Ring (soul_ring)
- minuto: 8,2
- porque: mana própria pro combo de Starbreaker, sem depender de regen ou de item de equipe.
- detalhe: Soul Ring (ring_of_protection + 2 gauntlets, 805) dá +6 Força, +2 de armadura e converte vida em 170 de mana por 10s (Sacrifice). Celestial Hammer custa mana crescente por nível (100 a 130) e Starbreaker tem custo fixo de 100; sem fonte de mana ela fica sem o combo em metade das trocas. Mediana 8,22 min na amostra.
- fonte: Atlas tier1, replay local (mediana 8,22 min, 75 partidas pos 3); items.json (Soul Ring)

#### Phase Boots (phase_boots)
- minuto: 8,3
- porque: a Fase atravessa unidades e fecha distância antes do inimigo conseguir fugir do Starbreaker.
- detalhe: Phase Boots (boots + chainmail + blades_of_attack, 1.450) dá +18 de dano corpo a corpo, +4 de armadura e a ativa Phase (20% de velocidade de movimento, atravessa unidades por 3s). É a única bota comprada nessa amostra: 75 de 75 partidas (100%). Mediana 8:25.
- fonte: Atlas tier1, replay local (mediana 8,25 min, 75 de 75 partidas pos 3); items.json (Phase Boots)

#### Echo Sabre (echo_sabre)
- minuto: 15,4
- porque: o ataque duplo do Echo Strike enche o contador da Luminosity quase duas vezes mais rápido.
- detalhe: Echo Sabre (ogre_axe + broadsword + void_stone, 2.700) dá +20 de dano, +15 Força e +1,75 de regen de mana, e a passiva Echo Strike faz o ataque corpo a corpo bater duas vezes em sequência, com 100% de lentidão por 0,8s no primeiro golpe do ataque duplo (texto oficial do item). Luminosity precisa de 3 ataques pra curar e bater mais forte; o ataque duplo acelera esse ciclo. Mediana 15,35 min na amostra.
- contra: heróis que tentam dar o primeiro passo de fuga assim que são acertados: a lentidão total de 0,8s no primeiro golpe do Echo Strike trava essa saída.
- fonte: Atlas tier1, replay local (mediana 15,35 min); items.json (Echo Sabre); constants_abilities.json (Luminosity, attack_count 3)

#### Black King Bar (black_king_bar)
- minuto: 22,1
- porque: Avatar bloqueia a maioria dos disables de alvo único antes de ela girar o Starbreaker.
- detalhe: Black King Bar (mithril_hammer + ogre_axe, 4.050) dá +10 Força, +24 de dano e Avatar: dispel básico, 60% de resistência mágica e imunidade a efeitos negativos de feitiço por 9/8/7s (a duração cai a cada recompra). Como offlaner que precisa fechar distância e canalizar 1,1s de combo, ela é alvo fácil de disable antes do BKB. Comprado em 71 das 75 partidas (95%), mediana 22:14.
- contra: stuns, silences e a maioria dos debuffs de alvo único; não bloqueia dano puro nem os efeitos que o próprio item lista como exceção à imunidade.
- fonte: Atlas tier1, replay local (mediana 22,14 min, n=71/75); items.json (Black King Bar)

#### Aghanim's Shard (aghanims_shard)
- minuto: 24,0
- porque: Starbreaker sai quase instantâneo e sem perder velocidade de movimento durante o giro.
- detalhe: o Shard de Dawnbreaker reduz o tempo de lançamento do Starbreaker pra 0,1s e zera a penalidade de velocidade de movimento do combo (constants_abilities.json: shard_cast_point 0,1 / shard_movement_penalty 0). Isso deixa iniciar e perseguir dentro do mesmo combo, sem o "congelamento" normal de quem gira o martelo. Comprado em 71 das 75 partidas (95%): nessa amostra é praticamente item core, não situacional. Mediana 24,01 min.
- fonte: Atlas tier1, replay local (mediana 24,01 min, n=71/75); constants_abilities.json (dawnbreaker_fire_wreath, atributos de shard)

#### Harpoon (harpoon)
- minuto: 24,6
- porque: puxa o alvo pro corpo a corpo e mantém o ataque duplo, pra travar quem foge do Starbreaker.
- detalhe: Harpoon (Echo Sabre + Diadem, 4.700) dá +25 de dano, +25 Força, +10 Agilidade, +10 Inteligência e +2 de regen de mana, mantém o Echo Strike do Echo Sabre e ganha Draw Forth: puxa ela e o alvo até ficarem a distância de corpo a corpo. Em uma heroína sem fuga própria, é o jeito de garantir o alvo antes de fechar o combo. Comprado em 63 das 75 partidas (84%), mediana 24,57 min.
- contra: heróis que dependem de manter distância pra usar a habilidade principal (kiters sem disable de retorno): o puxão anula o reposicionamento antes do stun do Starbreaker.
- fonte: Atlas tier1, replay local (mediana 24,57 min, n=63/75); items.json (Harpoon)

### Situacionais

#### Assault Cuirass (assault)
- minuto: 33,6
- detalhe: Assault Cuirass (buckler + hyperstone + platemail, 5.125) dá +10 de armadura, +30 de velocidade de ataque e aura em 1200 de raio (+30 de velocidade de ataque e +5 de armadura pros aliados, -5 de armadura pros inimigos), atravessando Black King Bar inimigo. Comprado em 38 das 75 partidas (51%), mediana 33:38.
- contra: times com dano físico pesado e pouco dano mágico (vários carries de auto-ataque): a redução de armadura inimiga reforça o dano físico do time inteiro, e o buff ajuda quem está lutando perto dela.
- fonte: Atlas tier1, replay local (mediana 33,63 min, n=38/75); items.json (Assault Cuirass)

#### Skull Basher (basher)
- minuto: 32,9
- detalhe: Skull Basher (mithril_hammer + belt_of_strength, 2.875) dá +30 de dano, +10 Força e 25% de chance de bash em corpo a corpo (atordoa 1,2s e causa 100 de dano extra), atravessando BKB. Comprado em 41 das 75 partidas (55%), mediana 32,94 min; 24 dessas 41 completam o Abyssal Blade depois.
- contra: heróis difíceis de prender (alta mobilidade, dash ou blink próprio) ganham um atordoador confiável; não funciona contra Spirit Breaker, Faceless Void, Slardar nem Kez em modo Sai, que bloqueiam bash por regra do próprio item.
- fonte: items.json (Skull Basher); Atlas tier1, replay local (mediana 32,94 min, n=41/75)

#### Abyssal Blade (abyssal_blade)
- minuto: 39,8
- detalhe: Abyssal Blade (Skull Basher + Sange, 6.250) soma +35 de dano, +26 Força, 30% de resistência a lentidão e um Overwhelm ativo (atordoa 1,6s, atravessa imunidade a debuff). Upgrade de luxo pra quando o bash passivo não basta contra quem some da luta. Comprado em 24 das 75 partidas (32%), mediana 39:45.
- contra: heróis que dependem de uma janela de fuga ou invulnerabilidade comum pra sobreviver (o Overwhelm ignora imunidade a debuff, mas não imunidade a feitiço tipo BKB).
- fonte: items.json (Abyssal Blade); Atlas tier1, replay local (mediana 39,75 min, n=24/75)

#### Nullifier (nullifier)
- minuto: 35,6
- detalhe: Nullifier (Sacred Relic + Splintmail, 4.350) aplica dispel básico e um debuff de 4s que redispela e desacelera continuamente, além de +75 de dano e +10 de armadura; pode ser lançado em unidades invulneráveis. Comprado em 19 das 75 partidas (25%), mediana 35:38.
- contra: heróis que dependem de um buff de fuga ou invisibilidade recorrente, ou de canalizações: o dispel contínuo reaplica a cada intervalo, então o alvo não consegue manter o buff nem terminar a canalização em paz.
- fonte: items.json (Nullifier); Atlas tier1, replay local (mediana 35,63 min, n=19/75)

#### Satanic (satanic)
- minuto: 45,6
- detalhe: Satanic (Reaver + Claymore + Morbid Mask, 5.050) dá +25 Força, +25 de dano, 30% de lifesteal passivo e Unholy Rage (175% de lifesteal por 6s, recarga 30s). Item de jogo já decidido no corpo a corpo, raro nessa amostra: 11 das 75 partidas (15%), mediana 45:38.
- fonte: items.json (Satanic); Atlas tier1, replay local (mediana 45,63 min, n=11/75)

#### Overwhelming Blink (overwhelming_blink)
- minuto: 60,1
- detalhe: Overwhelming Blink (Blink Dagger + Reaver, 6.800) dá blink de 1.200 de distância com uma onda de dano em área na chegada, pra iniciar de longe quando o time não precisa mais dela chegar a pé. Item de jogo muito longo: 9 das 75 partidas (12%), mediana 60,09 min.
- fonte: items.json (Overwhelming Blink); Atlas tier1, replay local (mediana 60,09 min, n=9/75)

## Roshan

Nos replays locais do dota-roshan-solo (1.328 partidas na base `solos.json`), Dawnbreaker nunca aparece como `solo_puro`, `solo_com_suporte` nem `solo_ajuda_curta`: ela não consta em `resumo_por_heroi.json`, que só lista heróis com pelo menos um Roshan solo registrado. Ela aparece em 8 quedas de Roshan classificadas como `time` ou `finalizacao` (dano dividido com o grupo, ela fechando ou perto de fechar o golpe final), entre os minutos 16 e 66, com 27% a 47% do dano total do abate (mediana por volta de 39%). Ou seja: ela ajuda a derrubar Roshan em grupo, puxando uma fatia relevante do dano, mas não é um herói que o time deixa sozinho pra fazer isso.
