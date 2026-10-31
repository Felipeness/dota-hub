# Modelo de draft por 10 contas

Decisão de modelo para a tela em que o usuário cola 5 contas aliadas e 5 inimigas. Tudo aqui saiu de
`export/modelo_draft/` (`coletar.py`, `backtest.py`, `relatorio.py`, `treinar.py`) e pode ser refeito.

## Decisão

Modelo escolhido (f3 nas tabelas): **beta-binomial por jogador + tabela única de força dos heróis + um termo de
experiência**. Para a conta `j` no herói `h`:

```
media_j   = (vitorias_j + 1000 × 0,5056) / (jogos_j + 1000)
taxa_jh   = (vitorias_jh + 80 × media_j) / (jogos_jh + 80)
valor_jh  = 0,54 × [logit(taxa_jh) − logit(media_j)] + 0,051 × [ln(1 + jogos_jh) − 2,57] + forca_h
chance    = expit(soma dos 5 valores aliados − soma dos 5 valores inimigos)
pick_jh   = (contagem com meia-vida de 25 jogos + 10 × parcela_h) / (massa + 10)
ban       = soma por inimigo de pick_jh × (valor_jh − valor esperado dele sem o herói), menos o mesmo para os aliados
```

Com 10 históricos reais, a recomendação inteira levou cerca de 50 ms. Os coeficientes vêm de `content/modelo_draft.json` (3,5 KB).

Por que este e não outro, em ranqueada:

- Vence a logística com interações por 4,63 e a hierárquica esparsa por 2,25 milésimos de log-loss, com IC que não
  cruza zero. O mais simples não só não perde: ganha.
- A fórmula do concorrente fica 7,02 atrás. Mas o beta-binomial sozinho empata com ela (−0,32 [−1,04, +0,39]). Quem
  abre a distância é a tabela de heróis, não o encolhimento.
- O encolhimento acerta a escala: dentro da mesma conta, 1 pp de vantagem prevista vira 1,02 pp de vitória depois.
  O winrate bruto promete quase 7 vezes o que entrega (0,15).

## Dados

- **Ranqueada**: 230 contas tiradas de partidas públicas encerradas, até 40 por faixa de medalha, de Crusader a
  Immortal. **88 (38%) não têm nenhuma partida pública.** Sobram 142 contas e 98.911 partidas válidas, entre ranqueadas e normais (cerca de 30% das brutas são normais).
- **Pro**: as 177 contas do Atlas Tier 1, 174.531 partidas válidas, cerca de dois terços de liga.
- Uma chamada por conta em `/players/{id}/matches`, até 1.000 partidas, em série pelo `od.py`.
- Sem turbo, sem abandono, só modos balanceados.

Coleta de 31/10/2026. O cache fica em `dota-tier1/data/raw/od`, com a lista de contas em `export/.cache/modelo_draft`.

## Método

Walk-forward: cada partida só enxerga as anteriores da mesma conta. Oito janelas de 15 dias de 03/07 a 31/10/2026,
com coeficientes e hiperparâmetros ajustados só com o que veio antes de cada janela. Dá 34.645 partidas de teste em
138 contas de ranqueada e 17.523 em 175 de pro. IC95 por bootstrap de contas, 2.000 reamostras, porque partidas da
mesma conta não são independentes.

A fórmula do concorrente foi reconstruída: recência como meia-vida de 90 dias e frequência como parcela dos jogos,
porque esses dois termos não são publicados. Como ela não é uma probabilidade, passou por calibração de Platt no
treino. Esse é o melhor caso dela.

## Previsão de resultado, ranqueada

Δ em milésimos de log-loss contra a taxa constante. Negativo é melhor.

| Modelo | Log-loss | Brier | Δ | IC95 | ECE | Inclinação |
|---|---|---|---|---|---|---|
| Taxa constante | 0,6931 | 0,2500 | 0 | | 0,0075 | |
| Só linha de base do jogador | 0,6928 | 0,2498 | −0,29 | [−0,86, +0,15] | 0,0087 | 0,76 |
| (a) Winrate bruto | 0,8604 | 0,2810 | +167,22 | [+150,14, +185,42] | 0,1141 | 0,03 |
| (b) Concorrente, com Platt | 0,6919 | 0,2494 | −1,23 | [−1,90, −0,58] | 0,0119 | 1,13 |
| (c) Beta-binomial | 0,6916 | 0,2492 | −1,55 | [−2,52, −0,70] | 0,0105 | 0,94 |
| (c2) Beta-binomial com recência | 0,6915 | 0,2492 | −1,61 | [−2,52, −0,79] | 0,0110 | 0,99 |
| (d) Logística regularizada com adversário e recência | 0,6895 | 0,2482 | −3,62 | [−4,76, −2,53] | 0,0082 | 1,07 |
| (d2) Hierárquica esparsa, congelada na origem | 0,6871 | 0,2470 | −6,00 | [−7,15, −4,87] | 0,0115 | 1,24 |
| (f1) Beta-binomial + tabela de heróis | 0,6853 | 0,2461 | −7,83 | [−9,38, −6,29] | 0,0085 | 0,99 |
| **(f3) f1 + experiência** | **0,6849** | **0,2459** | **−8,25** | **[−9,76, −6,80]** | **0,0084** | **0,97** |
| (f5) f1 + pares de heróis de pro | 0,6853 | 0,2461 | −7,82 | [−9,27, −6,34] | 0,0084 | 0,99 |
| (f3c) f3 com a tabela congelada por 120 dias | 0,6865 | 0,2467 | −6,63 | [−7,98, −5,26] | 0,0123 | 0,91 |

Diferenças pareadas, em que o IC vale mais que a comparação das linhas acima:

| Comparação | Δ | IC95 | Leitura |
|---|---|---|---|
| f3 − (b) concorrente | −7,02 | [−8,37, −5,52] | real |
| f3 − (d) logística | −4,63 | [−5,87, −3,38] | real |
| f3 − (d2) hierárquica | −2,25 | [−3,34, −1,08] | real, mas d2 fica congelada por até 15 dias |
| f3 − f1 | −0,42 | [−0,81, −0,04] | real e pequena |
| (c) − (b) | −0,32 | [−1,04, +0,39] | ruído |
| (c2) − (c) | −0,06 | [−0,24, +0,12] | ruído: recência não paga |
| f2 (+ linha de base) − f1 | −0,03 | [−0,09, +0,03] | ruído: nível do jogador não paga |
| f5 (+ pares) − f1 | +0,01 | [−0,02, +0,04] | ruído: pares não pagam |
| f3c (congelada) − f3 | +1,62 | [+0,97, +2,24] | real: retreinar importa |

Mesmo o melhor modelo tira só 1,2% do log-loss de um cara ou coroa. Em ranqueada o matchmaking equilibra as
partidas, e a maior parte do resultado não está no que estas contas revelam. Qualquer site que mostre mais precisão
que isso está inventando.

## O que isso muda no draft

**Ranking de heróis de cada jogador.** Dentro da mesma conta, heróis com pelo menos 5 jogos:

| Nota | Inclinação | IC95 | Terço de cima − de baixo | IC95 |
|---|---|---|---|---|
| Winrate bruto | 0,15 | [0,10, 0,21] | +4,14 pp | [+2,45, +5,88] |
| Concorrente | 0,46 | [0,33, 0,63] | +4,71 pp | [+2,99, +6,45] |
| Beta-binomial | 1,02 | [0,76, 1,24] | +4,87 pp | [+3,02, +6,65] |

Para só ordenar, os três empatam. A diferença é a escala: só o beta-binomial diz um número que dá para somar. Por
medalha a inclinação vai de 0,60 até Legend a 1,17 em Divine+, com faixas pequenas.

**"Não dá para decidir" é a resposta certa quase sempre.** Vantagem é marcada acima ou abaixo da base quando o IC95
não cruza zero:

| Rótulo | Partidas | Vitória real sobre a base | IC95 |
|---|---|---|---|
| Acima da base | 1.161 | +7,12 pp | [+3,18, +11,15] |
| Abaixo da base | 35 | −13,01 pp | [−23,94, +4,79] |
| Indefinido | 33.449 (96,5%) | −0,30 pp | [−0,88, +0,29] |

O intervalo preditivo cobriu 94,9% de 1.027 pares jogador×herói, contra os 95% prometidos. O 4-2 do concorrente cai
em indefinido, como deve. "Abaixo da base" tem amostra pequena demais para sustentar conclusão.

**Experiência é real e entra como trava.** Vitória dentro da conta por jogos anteriores no herói:

| Jogos no herói | 0 | 1 a 4 | 5 a 19 | 20 a 59 | 60+ |
|---|---|---|---|---|---|
| Sobre a média da conta | −5,0 pp | −3,1 pp | −0,5 pp | +0,8 pp | +3,7 pp |

Por isso `picks` só lista herói com 5 jogos ou mais. É correlação: parte do efeito é o jogador insistir no que já
funciona para ele.

**Prever o pick.** A meia-vida curta ganha com folga, ao contrário do que acontece na taxa de vitória:

| Previsor | Log-loss | Top 1 | Top 3 | Top 5 | Top 10 | MRR |
|---|---|---|---|---|---|---|
| Pick rate global | 4,724 | 3,0% | 7,0% | 9,7% | 17,3% | 0,085 |
| Histórico inteiro | 3,717 | 16,1% | 30,8% | 40,4% | 55,1% | 0,284 |
| Concorrente (como ordem) | | 16,7% | 32,6% | 42,6% | 57,9% | 0,296 |
| **Meia-vida de 25 jogos** | **3,392** | **21,7%** | **41,2%** | **51,7%** | **64,5%** | **0,356** |

**Ban.** Lista de 3 por inimigo. "Excesso capturado" é a vitória acima da base do inimigo nas partidas em que o pick
caiu na lista, por partida:

| Lista | Acerto do pick | Excesso capturado | IC95 | p×valor menos esta | IC95 |
|---|---|---|---|---|---|
| Winrate bruto | 7,1% | +0,15 pp | [−0,01, +0,35] | +1,09 | [+0,75, +1,46] |
| Frequência | 41,2% | +0,74 pp | [+0,34, +1,13] | +0,51 | [+0,28, +0,73] |
| Concorrente | 32,6% | +0,96 pp | [+0,60, +1,32] | +0,28 | [+0,06, +0,50] |
| p × vantagem | 30,1% | +1,11 pp | [+0,74, +1,48] | +0,13 | [−0,07, +0,34] |
| **p × valor** | **34,6%** | **+1,24 pp** | **[+0,91, +1,61]** | | |

Chance de pegar × vantagem sustenta a ideia, e com o valor completo ganha do concorrente de forma pareada.

## Pro é outro jogo

| Modelo, 17.523 partidas | Δ vs constante | IC95 |
|---|---|---|
| (b) Concorrente | +0,44 | [+0,16, +0,72] |
| (c) Beta-binomial | −1,11 | [−1,75, −0,46] |
| (f3) Escolhido | −5,27 | [−7,37, −3,21] |
| (f3c) Tabela congelada | −0,48 | [−2,56, +1,37] |
| (d2) Hierárquica | −7,82 | [−9,27, −6,37] |

- Sem matchmaking, o nível do time vale muito. Nas 2.616 partidas com as 10 contas na amostra, metade final como
  teste, só o nível dos jogadores tira 26,0 ± 4,8 milésimos do log-loss, com 59,4% de acerto.
- O conforto no herói vale pouco: inclinação 0,59 [−0,14, 1,29] dentro da conta. Sozinho na partida inteira, ele
  ainda tira 5,9 ± 2,2.
- A tabela de heróis congelada não sobrevive: no pro a meta anda mais rápido.
- A f5 sobe para −8,44 no pro, mas `confrontos_pares.json` contém as próprias partidas de teste, então esse número
  está contaminado e foi descartado.

O módulo foi calibrado em ranqueada. Conta com histórico público majoritariamente de liga recebe aviso.

## Limites

- **Chance não validada na ranqueada.** O teste de partida inteira com as 10 contas só existe no pro: a amostra de
  ranqueada não tem nenhuma partida com as 10 contas, e medir isso custaria centenas de chamadas para poucas partidas. A parte dos 10 heróis
  está calibrada (inclinação 0,97 linha a linha). A soma das vantagens das 10 contas é extrapolação aditiva.
- **Não enxerga bans.** O histórico por conta não diz quantas vezes o herói foi banido contra aquele jogador, então a
  chance de pick está condicionada a estar livre, e um herói sempre banido parece menos jogado. Falta ban rate de
  ranqueada: `picks_bans` só vem em partida analisada.
- **Causalidade.** Tudo isso é observacional. O jogador escolhe o herói olhando o draft, então "vantagem" inclui
  escolher bem a hora. O número mede o que aconteceu quando ele pegou, não o que aconteceria se ele fosse obrigado.
- **Counters ficaram de fora.** Na ranqueada, pares do pro não acrescentam nada mensurável, com coeficiente 0,007.
  Pares medidos na própria amostra entraram na logística (d), que ficou em −3,62 contra −3,49 do modelo equivalente
  sem pares, sem teste pareado. O inimigo pesa no draft por três caminhos: bans, heróis negados e a chance.
- **Sem sinergia e sem lane.** Fora do modelo.
- **Conta sem dados.** Esperar 4 em cada 10 sem histórico público. Elas não geram ban nem pick, e entram na chance
  pela média do público, mesmo quando o melhor draft sugere um herói para elas. Immortal Draft acima de 8.500 MMR é
  privado desde a 7.41d e esse bloqueio não é contornado.
- **Posição é inferência.** Vem dos heróis jogados pela conta cruzados com `pro_posicoes.json`, e carrega o viés do
  pro para pos 4 e 5. `lane_role` só veio em 13% das partidas da amostra de ranqueada.
- **Intervalo da nota de ban.** Considera a incerteza do valor, não a da chance de pick.
- **Amostra.** 142 contas, inflacionada por quem joga muito e por quem deixa o perfil público.
- **Retreino.** Rodar `treinar.py` a cada patch. Congelar a tabela por 120 dias custou 1,62 milésimo na ranqueada.

## Refazer

```bash
python export/modelo_draft/coletar.py --tier1 C:/caminho/dota-tier1
python export/modelo_draft/backtest.py --tier1 C:/caminho/dota-tier1 --pares app/public/data/confrontos_pares.json --saida resultado.json
python export/modelo_draft/relatorio.py resultado.json
python export/modelo_draft/treinar.py --tier1 C:/caminho/dota-tier1
```

Dependências além do `pyproject.toml`: scipy e scikit-learn.
