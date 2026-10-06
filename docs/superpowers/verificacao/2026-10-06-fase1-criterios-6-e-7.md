# Fase 1: critérios 6 e 7

Data: 2026-10-06. Branch: feat/fase-1b. Patch dos dados: 7.41.

## Critério 6: os números batem com os relatórios

Teste: `export/tests/test_conferencia.py` (20 destaques, o melhor horário do Leonardo, LH10 de Yatoro e Watson, Medusa do Felipe no guia).

```
$ cd export && python -m pytest tests/test_conferencia.py -q
.......................                                                  [100%]
23 passed in 58.73s
```

Resultado: passa. Os 23 números batem com os relatórios de origem, sem ajuste no export.

## Desempenho (passo 3 do plano)

Medido com `vite preview` num navegador Playwright em 360×800, no PC, **sem** limitar rede e CPU (o Playwright daqui não simula Fast 4G nem CPU 4×). Os números servem de referência, não fecham a meta de celular.

| Checagem | Resultado |
|---|---|
| Primeira tela (mapa) sem `chart.js` | ok: o chart.js fica só no chunk lazy `PlayerPage`, que não carrega no mapa |
| Peso da primeira tela | cerca de 2 MB: `mapa_2048.jpg` 1,37 MB, `Map3D` 248 KB gzip, `index` 146 KB gzip |
| Mapa parado, fps | 120 (PC) |
| Replay 9027486175 tocando a 16×, fps | 120 (PC) |
| `/herois/juggernaut` abre | cerca de 1,1 s (carga completa, sem limite de rede) |
| `/jogadores/leonardo` abre com gráficos | cerca de 1,3 s, 4 gráficos |
| Busca: medusa, skiter, team spirit, bkb | acha os quatro, menos de 10 ms por tecla depois do índice pronto |
| Sem `jogadores/hane.json` | aparece "Dados indisponíveis", menu e resto do app funcionam; build refeito |

Pendente de medir no celular de verdade (ou DevTools com Fast 4G e CPU 4×): primeira tela abaixo de 3 s e mapa a 30 fps ou mais. O ponto de risco é o `mapa_2048.jpg` de 1,37 MB.

## Critério 7: Felipe e um amigo usam sem explicação

**Pendente de teste com usuário.** Um agente não consegue simular isso.

Como fazer: cada um no próprio celular ou PC, sem nenhuma explicação antes. Anotar para cada tarefa se achou, quantos toques e quanto tempo.

1. "Ache a rota do minuto 12 do Radiant quando a lane está perdida."
2. "Abra o Juggernaut e diga em que minuto ele começa a farmar a selva."
3. "O que é stack? Ache no app."
4. "Ache o painel do Leonardo e diga com qual herói ele mais ganha."
5. "Toque um replay no mapa e diga onde o herói em destaque estava aos 10 min."
6. Pergunta aberta: "O que achou do visual? O que faltou?"

Passa se os dois fazem 1, 2 e 3 sem ajuda.

### Resultado

| Quem | Aparelho | Tarefa | Achou? | Toques | Tempo |
|---|---|---|---|---|---|
| Felipe | | 1 | | | |
| Felipe | | 2 | | | |
| Felipe | | 3 | | | |
| Felipe | | 4 | | | |
| Felipe | | 5 | | | |
| Amigo | | 1 | | | |
| Amigo | | 2 | | | |
| Amigo | | 3 | | | |
| Amigo | | 4 | | | |
| Amigo | | 5 | | | |

### Opiniões sobre o visual

(preencher com as frases ditas)

## Backlog

(cada opinião vira um item aqui, sem mudar código nesta fase)
