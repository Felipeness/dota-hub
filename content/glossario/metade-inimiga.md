---
id: metade-inimiga
titulo: território inimigo
patch: 7.41
categoria: mapa
fontes:
- dota-tier1/work/sintese/definicoes.md (seção 4, Visão/mapa/farm)
sinonimos:
- território inimigo
- metade inimiga
- zona inimiga
---
## Básico
Metade inimiga é a zona rotulada do lado do adversário (jungle, triângulo etc.), não a metade geométrica do mapa.

## Avançado
O Hub usa a zona rotulada do mapa (jungle, triângulo, stream, lanes além do rio, base) para decidir o que é 'metade inimiga', e não a divisão geométrica por coordenadas: a geométrica erra porque a wave da offlane empurrada já parece 'inimiga' nela, mesmo perto da própria torre (dota-tier1/work/sintese/definicoes.md, seção 4). 'Território inimigo' mede a fração do tempo que o time passou vivo dentro dessas zonas, separada em antes e depois dos 15 minutos. Ex.: 'tempo na metade inimiga: 29% nas vitórias' é a fração do tempo de jogo que o time passou nessas zonas quando venceu.
