---
id: semaforo-confianca
titulo: Semáforo de confiança (🟢🟡🔴)
patch: 7.41
categoria: estatistica
fontes:
- dota-tier1/work/sintese/lanes_perdidas.md (linha 13, critério de confiança)
- dota-tier1/work/sintese/scripts/lanes_relatorio.py (N_MINIMO = 10)
- app/src/times/schemas.ts (SEMAFORO, confiancaDaLane)
sinonimos:
- 🟢
- 🟡
- 🔴
- semáforo de confiança
---
## Básico
Mesma escala de confiança do Hub, só que vem como semáforo nos dados brutos das lanes perdidas.

## Avançado
Nos arquivos de lanes perdidas, a confiança chega como emoji (🟢 🟡 🔴) em vez de texto, e o app converte: 🟢 vira 'alta' (n ≥ 30 jogos com a lane perdida), 🟡 vira 'média' (12 a 29) e 🔴 vira 'baixa' (menos de 12); abaixo de 10, o Hub prefere nem concluir e chama de 'amostra pequena'. É a mesma ideia de confiança do resto do site, só representada diferente na origem dos dados.
