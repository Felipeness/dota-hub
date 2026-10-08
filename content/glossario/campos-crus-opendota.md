---
id: campos-crus-opendota
titulo: lane_role
patch: 7.41
categoria: estatistica
fontes:
- dota-imortal/src/comparacao/build_compare.py (SAMPLE_CRITERIA)
- app/src/players/PainelJogador.tsx (seção 'Fontes dos destaques')
sinonimos:
- lane_role
- party_size
- LH@10
---
## Básico
Campos brutos do OpenDota (posição na lane, tamanho do grupo) e abreviação do Hub (last hits aos 10 min) usados pra filtrar partidas.

## Avançado
lane_role é o código de posição que o OpenDota atribui à partida (1 = carry/safe lane); party_size é quantos jogadores daquele time entraram juntos na fila (1 = sozinho, >1 = em grupo); LH@10 é abreviação do próprio Hub para 'last hits até o minuto 10', usada como filtro de qualidade de amostra. Esses nomes aparecem crus na seção 'Fontes dos destaques' do painel de jogador, sem traduzir.
