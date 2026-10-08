---
id: roshan-solo-natures_prophet
titulo: "Solo de Roshan: Nature's Prophet"
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- C:/Users/felip/Desktop/dota-roshan-solo/work/solo_roshan.md
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/natures_prophet.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- replay 8944553935
- replay 9010850705
- replay 9027558607
heroi: Nature's Prophet
solos: 1
origem: replay
replay: 8944553935, 9010850705, 9027558607
---
## Básico
Nature's Prophet quase não sola Roshan no 7.41. Do levantamento de 1.245 partidas válidas lidas quadro a quadro (111 solos
confirmados de todos os heróis), ele tem **1 solo confirmado** (com ajuda curta de um aliado). Nas outras vezes que ele foi
o herói com mais dano numa morte de Roshan: 2 com suporte fixo no fosso o tempo todo, 3 finalizações (o Roshan já tinha
levado dano de outro herói antes) e 61 como parte de um Roshan de time de verdade. Ele está na lista de "amostra pequena,
não dá pra falar em padrão" do levantamento.

Juntando o solo confirmado com os 2 com suporte (n = 3, os únicos 3 em que ele fez 85% ou mais do dano):
- Minuto: mediana 35:42. O mais cedo foi 28:42.
- Nível: mediana 24. O mais baixo foi 19.
- Itens (no início de cada tentativa): Mjollnir em 3 de 3, Hurricane Pike em 3 de 3, Butterfly em 3 de 3, Satanic em 2, Greater Crit (Daedalus) em 2, Manta em 1 (só no solo confirmado).
- Tempo: mediana de 34,8 s (faixa 31,1 a 36,8 s). Entra com a vida cheia; termina entre 71% e 94%.
- Com suporte vs sozinho: num dos 2 com suporte (9027558607), o Dazzle ficou 38 s no fosso numa luta de 36,8 s, ou seja, a
  luta quase inteira. No outro (9010850705), não teve um suporte fixo: Pangolier (19 s), Bounty Hunter (11 s) e Viper (1 s)
  passaram por perto, mas nenhum carregou a luta. No único solo confirmado, o Rattletrap só passou 8 s dos 34,8 s no fosso
  (ajuda curta, não carregou a luta).

O que ele faz no lugar: Roshan em grupo. Nos 26 jogos de pro do guia do herói, o time do NP leva o primeiro Roshan em
14 de 25 vezes, mediana aos 22,6 min, e venceu 13 dessas 14 (correlação, não causa). Em jogo de elo mais baixo o mesmo time
levou em 8 de 20, aos 28,9 min. O poço de baixo (lado Radiant) fica ativo de 15:00 a 20:00 e o de cima (lado Dire) de 20:00
a 25:00, alternando a cada 5 min; a recomendação do guia é ir com Mjollnir, BKB e os Treants cheios, não sozinho.

## Avançado
Passo a passo do único solo confirmado (8944553935, nível 28, 46:53 a 47:28, patrimônio 44.770, item: Greater Crit, Mjollnir,
Hurricane Pike, Butterfly, Satanic, Manta):
1. Nature's Call (Treants) 8,6 s antes de entrar no fosso, para já ter árvore e Treant por perto (bônus de dano do Spirit
   of the Forest, que soma 2% por árvore e o dobro por Treant).
2. TP scroll para o fosso 3 s antes.
3. Dentro do fosso: Teleportation (feitiço próprio) aos 10,4 s e Sprout direto no Roshan aos 11,7 s (o Sprout bateu 113 de
   dano nessa luta: ele também causa dano de área quando lançado em cima de uma criatura).
4. Nature's Call de novo aos 12,5 s, pra repor Treants.
5. O resto do dano veio de ataque básico (10.235) e do proc do Mjollnir (1.215 de chain lightning, que conta mesmo em
   alvo único).

Nos 2 com suporte, dois detalhes a mais aparecem: em 9010850705 ele troca para Black King Bar só perto do fim da luta
(28,4 s de uma luta de 31,1 s), igual ao padrão do herói de ligar o BKB tarde numa luta de time. Em 9027558607 ele usa
Medallion of Courage no Roshan logo no início (reduz a armadura do alvo), bem na linha de "farme com Mjollnir e tire
armadura antes do golpe forte".

Depois da morte, nos 3 casos: Aegis ficou com o Nature's Prophet nas 3 vezes, nenhuma foi roubada. O time dele derrubou
torre nos 3 minutos seguintes em 2 das 3 (3 torres em 8944553935, 1 torre em 9027558607; 9010850705 não derrubou nenhuma);
ele morreu nos 3 minutos seguintes em 1 das 3 (9010850705, duas mortes em seguida: Monkey King e depois Abyssal Underlord).
O ganho real não é uma torre imediata garantida, é a Aegis guardada pra sobreviver a um pickoff ou forçar uma luta de time depois.

Por que esses itens fazem sentido no Roshan (mecânica, não replay): Mjollnir, Hurricane Pike e Butterfly aparecem nos 3 porque
são o "farm core" padrão do herói (chain lightning + alcance de 730 pra não precisar ficar corpo a corpo com o Roshan). Satanic
(2 de 3) soma lifesteal físico pra sustentar a vida enquanto o Roshan bate de volta. Manta Style apareceu só no solo confirmado
(1 de 3), mas é a razão mecânica mais forte desse caso específico: o Maelstrom/Mjollnir do herói tem `illusion_multiplier_pct = 100`
nas constantes do jogo, ou seja, as ilusões do Manta procam chain lightning com a mesma chance e o mesmo dano do herói real,
multiplicando o DPS no Roshan sem gastar nenhuma skill. Butterfly (3 de 3) soma evasão, que por regra geral do jogo funciona
contra qualquer ataque básico (não achei fonte que confirme se vale especificamente contra o ataque do Roshan, então trate
como hipótese, não como fato).
