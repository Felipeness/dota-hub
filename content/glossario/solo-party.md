---
id: solo-party
titulo: "solo"
patch: 7.41
categoria: estatistica
fontes:
- dota-imortal/src/comparacao/build_compare.py (SAMPLE_CRITERIA: party_size 1 / party_size > 1)
sinonimos:
- solo
- party
- em grupo
---
## Básico
Solo = o jogador entrou sozinho na fila; party = entrou em grupo com outros jogadores.

## Avançado
A separação usa o campo party_size do OpenDota: partidas com party_size = 1 viram a amostra 'solo', e party_size > 1 vira 'party'. A ideia é separar o jogo em que o jogador decide tudo sozinho do jogo em que já entra combinado com amigos (call, build, rota), porque isso muda o comportamento mesmo sendo o mesmo jogador.
