---
id: ficha-huskar
titulo: "Huskar"
heroi: Huskar
patch: 7.41
posicoes: [2, 3]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- dota-tier1/data/draft.csv
- dota-tier1/data/jogadores_partida.csv
- dota-tier1/data/derivados/itens_chave.parquet
- https://api.opendota.com/api/heroes/59/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=59
---

## Resumo
Huskar é um carry/durable de força que fica mais forte perdendo vida: o Berserker's Blood sobe velocidade de ataque (até +320), regen (até 70% da força) e resistência mágica (até 30%) conforme o %HP cai, e ele mesmo se fere com o Burning Spear e com o dreno do Armlet ligado. No Atlas (dota-tier1), dos 35 picks de Huskar com posição confirmada pelo replay no 7.41, 26 foram pos 2 (mid, 65,4% de vitória) e 7 pos 3 (offlane, 85,7% de vitória, amostra pequena); pos 4 e pos 5 aparecem só 1 vez cada e não contam como papel real. Ele soloa Roshan de verdade: nos 58 duelos solo do dataset local de Roshan, o Armlet está em 100% dos casos, nível mediano 11 (8 a 23), início mediano aos 15:02, entrando no duelo com 49% de vida e saindo com 14%.

## Pos 2 (mid)
- quando pegar: é o papel confirmado em 26 dos 35 picks de Huskar no Atlas (draft.csv + jogadores_partida.csv, times como LGD, PARIVISION, BetBoom, Natus Vincere, Team Falcons e Nigma), com 65,4% de vitória. É a rota padrão do herói no patch.
- itens iniciais: tango, gauntlets, faerie_fire, branches

### Build
#### Armlet of Mordiggian (armlet)
- minuto: 9,0 (mediana de 26 jogos pos 2 no Atlas; faixa 7,4 a 11,2)
- porque: liga o dreno de vida que empurra o %HP pra baixo e destrava o teto do Berserker's Blood.
- detalhe: Unholy Strength dá +25 de força e +4 de armadura enquanto ativo, mas drena 45 de vida por segundo. Isso baixa o %HP atual, e o Berserker's Blood usa esse %HP pra escalar velocidade de ataque, regen e resistência mágica até o teto, alcançado a 10% de vida ou menos. Componentes: Helm of Iron Will + Gloves of Haste + Blades of Attack.
- combo: Burning Spear já custa 2% da vida máxima por acerto; com o Armlet ligado, cada troca de ataque te deixa mais perto do teto do Berserker's Blood, então o próprio dano que você causa acelera o seu próprio bônus.
- fonte: items.json (armlet, attrib e components); constants_abilities.json (huskar_berserkers_blood, huskar_burning_spear); dota-tier1/data/derivados/itens_chave.parquet (26/26 jogos pos 2, mediana 9,0 min); dota-roshan-solo/data/resumo_por_heroi.json (armlet em 58/58 solos)

#### Power Treads (power_treads)
- porque: velocidade de ataque crua e troca de atributo pra força quando precisa aguentar.
- detalhe: substitui as botas iniciais; trocar pra força nas trocas de dano soma 22 de vida por ponto, o que ajuda a não derrubar o %HP rápido demais antes da hora.
- fonte: items.json (power_treads); https://api.opendota.com/api/heroes/59/itemPopularity (power_treads aparece em early e mid game, contagem 24 e 26, confirmado via fetch nesta revisão); 22 de vida por ponto de força no patch 7.41 confirmado via web (dotacoach.gg/en/strength)

#### Hurricane Pike (hurricane_pike, via Force Staff + Dragon Lance)
- minuto: 20,7 (mediana de 16 jogos pos 2; faixa 16,6 a 37,8; o Force Staff componente completa quase junto, mediana 20,1)
- porque: dá +130 de alcance de ataque; usado no alvo inimigo, empurra os dois 425 de distância e libera 5 ataques sem limite de alcance e com +100% de velocidade; usado em si mesmo, só empurra o próprio Huskar 600 na direção que está olhando, sem gastar mana, que ele não tem.
- detalhe: upgrade de Dragon Lance + Force Staff. O cast custa 150 de "mana", que o Blood Magic converte em custo de vida. No alvo inimigo, o empurrão de 425 vem com 5 ataques bônus por 6s contra aquele alvo, sem restrição de alcance e com +100% de velocidade de ataque; em si mesmo (self-cast), o ativo só reposiciona (empurrão de 600), sem os ataques bônus.
- contra: inimigos de corpo a corpo que precisam ficar colados nele pra bater; o empurrão cria distância, e o alcance extra ajuda a manter.
- combo: usar no alvo inimigo logo depois do Life Break mantém o inimigo na mira e entrega os 5 ataques bônus à queima-roupa, turbinando o Burning Spear; o self-cast serve só pra reposicionar, não dá os ataques extras.
- fonte: items.json (hurricane_pike, abilities, components, mc); constants_abilities.json (huskar_blood_magic); dota-tier1/data/derivados/itens_chave.parquet (16/26 jogos pos 2, force_staff e hurricane_pike mediana 20,1 e 20,7 min)

#### Sange (sange) até Sange and Yasha (sange_and_yasha)
- minuto: Sange mediana 21,5 (10 jogos; faixa 15,1 a 30,4); upgrade pra Sange and Yasha mediana 27,6 (8 jogos; faixa 18,3 a 41,6)
- porque: +16 de força crua e 16-20% de regeneração de vida somam direto no teto de cura do Berserker's Blood.
- detalhe: o regen do Berserker's Blood é uma fração da força (até 70% dela no nível 4); mais força bruta vira mais vida de volta quando esse bônus procar. A versão completa (Sange and Yasha) ainda soma 16% de resistência a status, encurtando a duração de stuns e silences.
- fonte: items.json (sange, sange_and_yasha); constants_abilities.json (huskar_berserkers_blood, maximum_health_regen); dota-tier1/data/derivados/itens_chave.parquet (10 e 8 jogos pos 2)

#### Black King Bar (black_king_bar)
- minuto: 24,3 (mediana de 24 jogos pos 2; faixa 14,2 a 34,4)
- porque: imunidade a feitiço dá a janela pra Life Break e Burning Spear sem levar um disable de alvo único no meio.
- detalhe: dura 9/8/7 segundos (cai por uso na mesma partida). O cast custa 50 de "mana" que o Blood Magic transforma em vida, então até ligar o BKB já te deixa um pouco mais perto do teto do Berserker's Blood.
- contra: stuns, hexes e silences comuns de alvo único, que a imunidade bloqueia; não impede dano em área nem os poucos feitiços que atravessam BKB (lista não confirmada nestas fontes, omitida de propósito).
- fonte: items.json (black_king_bar, attrib, mc); constants_abilities.json (huskar_blood_magic); dota-tier1/data/derivados/itens_chave.parquet (24/26 jogos pos 2, mediana 24,3 min)

#### Satanic (satanic, via Reaver)
- minuto: 32,7 (mediana de 13 jogos pos 2; faixa 23,2 a 61,5); Reaver, componente, em 16 jogos, mediana 31,1
- porque: 30% de lifesteal (vira 175% por 6s no ativo) devolve vida rápido o bastante pra manter o %HP baixo sem morrer.
- detalhe: componente de Reaver (+25 força) + Claymore + Morbid Mask. O ativo de 6 segundos deixa o lifesteal brutal bem na troca de ataques que o Burning Spear e o Armlet já estão sustentando.
- contra: jogos com bastante dano físico sustentado vindo do time inimigo; o lifesteal devolve esse tipo de dano, não o mágico.
- fonte: items.json (satanic, reaver, attrib e components); dota-tier1/data/derivados/itens_chave.parquet (13 e 16 jogos pos 2)

### Situacionais
#### Blink Dagger (blink)
- minuto: 13,8 (mediana de 6 jogos pos 2; faixa 12,2 a 36,6)
- porque: fecha a distância antes mesmo do Life Break estar disponível, pra iniciar a troca mais cedo.
- contra: times que kitam (mantêm distância) enquanto o Life Break ainda está de recarga.
- fonte: items.json (blink); dota-tier1/data/derivados/itens_chave.parquet (6/26 jogos pos 2)

#### Heaven's Halberd (heavens_halberd)
- porque: o disarm da ativa trava quem depende de bater em você pra fazer dano.
- contra: carries de ataque básico puro, cujo dano principal vem do auto-attack.
- fonte: items.json (heavens_halberd, disarm_range/disarm_melee); dota-roshan-solo/data/resumo_por_heroi.json (presente em 3 dos 58 solos)

#### Linken's Sphere (sphere)
- minuto: 24,2 (1 jogo pos 2 no Atlas; dado isolado)
- porque: bloqueia a primeira habilidade de alvo único que travaria o combo de Life Break.
- contra: um disable crítico de alvo único concentrado numa única luta.
- fonte: items.json (sphere, damage_absorb); dota-tier1/data/derivados/itens_chave.parquet (1/26 jogos pos 2)

## Pos 3 (offlane)
- quando pegar: é o papel confirmado em 7 dos 35 picks de Huskar no Atlas, com 85,7% de vitória (6V-1D); amostra pequena, concentrada em Team Falcons e Team Yandex.
- itens iniciais: tango, gauntlets, faerie_fire, bracer (bracer aparece com mais frequência nessa posição no dataset local de Roshan solo: 7 de 58 jogos)

### Build
#### Armlet of Mordiggian (armlet)
- minuto: 11,6 (mediana de 7 jogos pos 3; faixa 10,3 a 12,4; 7/7 dos jogos têm Armlet)
- porque: mesmo mecanismo do pos 2: liga o dreno de vida que destrava o teto do Berserker's Blood, só que um pouco mais tarde por sair de uma lane de 3 ao invés de mid 1x1.
- detalhe: Unholy Strength (+25 força, +4 armadura, dreno de 45 de vida por segundo) empurra o %HP pra baixo, escalando a velocidade de ataque, o regen e a resistência mágica do Berserker's Blood.
- fonte: items.json (armlet); constants_abilities.json (huskar_berserkers_blood); dota-tier1/data/derivados/itens_chave.parquet (7/7 jogos pos 3, mediana 11,6 min)

#### Hurricane Pike (hurricane_pike, via Force Staff + Dragon Lance)
- minuto: 18,5 (mediana de 6 jogos pos 3; faixa 17,7 a 24,3; Force Staff componente mediana 18,1)
- porque: alcance extra e empurrão ativo pra sair da lane de 3 sem precisar de mana; usado no alvo inimigo ainda dá 5 ataques bônus sem limite de alcance.
- detalhe: upgrade de Dragon Lance + Force Staff, cast de 150 convertido em vida pelo Blood Magic; sai mais cedo que no pos 2 (18,5 contra 20,7 min) porque o offlane precisa da ferramenta de espaço mais rápido.
- contra: inimigos de corpo a corpo que precisam ficar colados nele.
- fonte: items.json (hurricane_pike, abilities); constants_abilities.json (huskar_blood_magic); dota-tier1/data/derivados/itens_chave.parquet (6/7 jogos pos 3)

#### Black King Bar (black_king_bar)
- minuto: 20,7 (mediana de 5 jogos pos 3; faixa 17,6 a 26,1)
- porque: mesma janela de imunidade a feitiço do pos 2, pra entrar na luta sem ser travado por disable de alvo único.
- contra: stuns, hexes e silences comuns de alvo único.
- fonte: items.json (black_king_bar); constants_abilities.json (huskar_blood_magic); dota-tier1/data/derivados/itens_chave.parquet (5/7 jogos pos 3)

#### Heart of Tarrasque (heart, via Reaver)
- minuto: 27,6 (mediana de 5 jogos pos 3; faixa 24,0 a 38,9); Reaver, componente, mediana 26,4
- porque: regen bruto e vida máxima alta sustentam o offlane sem depender de reagir com lifesteal ativo.
- detalhe: +40 de força, +1% de regen de vida máxima por segundo (base), mais 1,5% da vida que falta como regen extra: quanto mais baixo o %HP, maior esse adicional. Diferente do pos 2 (que fecha em Satanic), a amostra pos 3 não registra nenhuma compra de Satanic: todo Reaver dessa posição vira Heart.
- fonte: items.json (heart, reaver, attrib e components); dota-tier1/data/derivados/itens_chave.parquet (5/7 jogos pos 3 com Heart, 0 com Satanic)

### Situacionais
#### Heaven's Halberd (heavens_halberd)
- porque: o disarm da ativa trava o carry inimigo que depende de bater em você.
- contra: carries de ataque básico puro na lane de 3.
- fonte: items.json (heavens_halberd, disarm_range/disarm_melee)

## Roshan
Huskar soloa Roshan de verdade, sem precisar do time: no dataset local de Roshan solo (resumo_por_heroi.json) ele aparece em 58 duelos solo "puros", com Armlet em 100% dos casos (58/58), Power Treads em 27, Sange em 16 e Black King Bar em só 3 (a maioria dos duelos resolve sem precisar da imunidade a feitiço). Início mediano do duelo aos 15:02 (faixa 9:20 a 40:48), nível mediano 11 (8 a 23), patrimônio mediano 7.092 de ouro. Ele entra no duelo com 49% de vida (mediana) e sai com 14%, batendo o mínimo de vida em 94,5 (mediana) durante o combate: o próprio dreno do Armlet e o Burning Spear bancam boa parte do dano que ele mesmo toma, e o Berserker's Blood, que fica mais forte justo quando a vida cai, é o que sustenta o DPS pra fechar o Roshan sem apoio. Com suporte no duelo (resumo_com_suporte.json, 16 casos), o perfil é parecido: Armlet também em 100% (16/16), início mediano um pouco mais tarde (16:23) e nível mediano 12.
