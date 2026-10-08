---
id: roshan-solo-lone_druid
titulo: "Solo de Roshan: Lone Druid"
patch: 7.41
fontes:
- replay 8987082716
- replay 8943364918
- replay 8750066183
- dota-roshan-solo/data/solos.json
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- dota-roshan-solo/work/solo_roshan.md
- dota-roshan-solo/work/solos_linha_a_linha.md
- app/public/data/herois/lone_druid.json
- https://dota2.fandom.com/wiki/Lone_Druid
heroi: Lone Druid
solos: 2
origem: replay
replay: 8987082716, 8943364918, 8750066183
---
## Básico
Lone Druid quase não sola Roshan de verdade: 2 solos confirmados em 1.245 partidas válidas lidas (2.577 mortes de
Roshan no total da base). É amostra pequena, mas os dois casos reais mostram o mesmo padrão.

Solo confirmado (n = 2, amostra pequena, ambos "ajuda curta": 85%+ do dano, sem aliado parado no fosso):
- Minuto: mediana 43:26. O mais cedo foi 37:25.
- Nível: mediana 24. O mais baixo foi 22.
- Tempo: mediana de 17,5 s (de 15,4 a 19,6 s).
- Vida: entra com 81% da vida cheia (mediana) e sai com 96%, ou seja, sai mais cheio do que entrou (Spirit Link
  repassando lifesteal pro Druid e True Form somando vida máxima).
- Net worth: mediana 42.840 (faixa dos 2 casos: 36.211 e 49.469).
- Item: Mjollnir no urso nos 2 de 2. Nos dois casos o chain lightning do Mjollnir sozinho fez entre 1.134 e 1.296 de
  dano no Roshan (10% a 13% do dano total do LD em cada caso); o resto é ataque básico do urso (6.196 e 10.094 de
  dano).
- True Form: usado no Druid 1 ou 2 s antes ou depois do primeiro golpe no Roshan, nos 2 casos.
- Inventário do Druid: branches (galhos) nos 2 casos. O urso é quem carrega os itens de combate, o Druid fica com o
  mínimo.

O que ele faz em vez de solar: pelo guia local, o time do LD matou 22 Roshans em 20 jogos pro (11 jogos com pelo
menos 1), o primeiro entre 20,9 e 36,0 min em 10 deles. Roshan em time, não sozinho, é o padrão; o solo é excepcional
e sai tarde (depois dos 37 min), quando o urso já tem Mjollnir e a vida dele já escalou bastante com o nível do
Druid (1.500 de vida base no nível 1, +HP fixo por nível, 25% de resistência mágica; guia local e Dota 2 Wiki).

Com suporte (não entra na contagem de solo confirmado, 1 caso isolado, n = 1): aos 69:08, nível 29, com Tidehunter,
Queen of Pain e Disruptor parados no fosso durante boa parte da tentativa (12 s, 11 s e 5 s), o LD fez 86,6% do dano
e levou 14,3 s pra matar o Roshan. Também tinha Mjollnir no urso.

## Avançado
Passo a passo do solo confirmado:
1. Chega no fosso já com Mjollnir montado no urso (item mais caro dos dois casos; o Druid carrega só galhos).
2. True Form no Druid bem no início do combate (1 a 2 s antes ou depois do 1º golpe nos 2 casos).
3. Urso bate: o ataque básico dele é a maior fatia do dano do próprio LD (62% no caso 1, 86% no caso 2), e o chain
   lightning do Mjollnir soma mais 13% e 10%. Juntando Druid, urso e Entangle, o LD sozinho faz 89% e 92% do dano
   total do Roshan nos dois casos (dano de aliados e de outros heróis é o resto).
4. Em ambos, um 2º personagem (um aliado no 1º caso, um herói marcado como morto no registro do 2º) aparece no log de
   dano ou no último golpe, mas com participação pequena; por isso a classificação é "ajuda curta" e não "solo puro".

Exemplo, 8987082716 (pro, Satanic na conta gotthejuice): de 37:25 a 37:44 (19,6 s), nível 22. Vida 2.056/2.056 no
início e 3.272/3.556 no fim (mínima 1.956). Itens do Druid: só galhos e 1 Faerie Fire; o urso tinha o Mjollnir (dano
por fonte: 6.196 de ataque do urso, 1.900 de ataque do Druid, 1.296 de chain lightning do Mjollnir, 612 do Entangle).
True Form lançado aos 37:26, 1,6 s depois do início. Dark Seer (aliado) ficou só 4 s no fosso e levou o último golpe.
Um inimigo viu a morte: o LD ficou visível pro time inimigo por 21 s durante a tentativa (campo inimigo_viu_a_morte:
true nos dados do projeto), mesmo sem nenhum inimigo por perto no mapa. Sem Aegis coletada por ninguém no registro.

Exemplo, 8943364918 (pasta yuma, conta de Satanic): de 49:27 a 49:42 (15,4 s), nível 26. Vida 1.431/2.298 no início e
3.798/3.798 no fim (cheia). Itens do Druid: só 3 galhos; dano por fonte do urso: 10.094 de ataque, 1.134 de chain
lightning do Mjollnir, 480 do Entangle. True Form lançado 1 s antes do início da tentativa. Nenhum aliado ficou no
fosso (aliados_no_fosso_s vazio). A Aegis não ficou com o Lone Druid: foi pro Ember Spirit do time.

Por que o urso aguenta sozinho (porquê, não do replay): o Spirit Bear é uma unidade "universal" sem atributo
primário, que ganha vida e dano fixos a cada nível do Druid, e começa com 1.500 de vida e 25% de resistência mágica
(guia local; Dota 2 Wiki, seção Spirit Bear). Combinado com o Mjollnir (chain lightning de 180 em 12 alvos,
ignorando evasão) isso dá DPS alto e vida suficiente pra tanque o próprio Roshan sem precisar de BKB: nenhum dos 2
solos confirmados tinha Black King Bar no inventário.

O que fazer com a Aegis: nos 2 solos confirmados, a Aegis não ficou claramente com o Lone Druid (1 caso sem registro
de quem pegou, 1 caso foi pro Ember Spirit aliado). Isso é esperado: o Spirit Bear não pode carregar a Aegis of the
Immortal (Dota 2 Wiki, seção Spirit Bear, Item Interactions: "Cannot pick up Aegis of the Immortal"), então mesmo
fazendo quase todo o dano, quem recolhe a Aegis depende de quem está mais perto na hora da morte, não do urso.

Risco de solar cedo: os 2 casos confirmados foram depois dos 37 min e com net worth de 36 a 49 mil. Não há dado local
de alguém tentando (e falhando) solar antes disso; a leitura prática é que o LD só tenta quando já tem Mjollnir e
nível alto o bastante pro urso aguentar sozinho.
