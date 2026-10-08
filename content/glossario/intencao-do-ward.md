---
id: intencao-do-ward
titulo: Intenção do ward
patch: 7.41
categoria: visao
fontes:
- C:/Users/felip/Desktop/dota-tier1/work/CONTRATO_HUB.md (campo mapa.wards[].intencao)
- C:/Users/felip/Desktop/dota-tier1/work/PLANO.md (seção Limitações registradas)
- C:/Users/felip/Desktop/dota-tier1/tools/mapa_equipes.py (função _intent, valores reais encontrados nos dados: roshan, tormentor, push, smoke, defesa, controle)
- app/src/times/leitura.ts (LEITORES.wards)
sinonimos:
- intenção
- intenção dos wards
- intenção da ward
---
## Básico
Motivo mais provável de uma ward, deduzido pelo que o time fez depois dela, não a intenção real do jogador.

## Avançado
No Atlas dos Times, cada ward recebe um rótulo de intenção calculado a partir do que a equipe fez nos minutos seguintes a ela: se um Roshan ou Tormentor morreu em até 180s vira 'roshan'/'tormentor'; se uma torre ou prédio caiu nesse intervalo vira 'push'; senão, se saiu um Smoke em até 90s vira 'smoke'; senão, se a ward está do lado do próprio time vira 'defesa'; o resto cai em 'controle' (fallback genérico, não 'farm': esse valor não existe no código, só aparecia como exemplo num rascunho de contrato). Não é a intenção real do jogador, o replay não traz comunicação nem chat, é uma leitura do padrão de jogo depois do fato. O próprio método do projeto lista isso como limitação: 'intenção de uma ward (só o que veio depois dela)' não é algo diretamente mensurável.
