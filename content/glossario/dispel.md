---
id: dispel
titulo: Dispel
patch: 7.41
categoria: combate
fontes:
- Termo de uso comum no jogo (definição, sem número no texto)
- https://api.opendota.com/api/constants/abilities (campo dispellable)
- app/src/confronto/mecanicas.ts
- app/public/data/unidades/roshan.json (Dissipar: dissipação básica)
- app/public/data/glossario.json (entrada Dispel)
sinonimos:
- dispel básico
- dispel forte
- dispelável
- dissipação básica
- basic dispel
links:
- manta-style
- lotus-orb
---
## Básico
Remover efeitos do herói. O dispel básico tira slows e buffs; o forte também tira stun. Manta Style faz um dispel básico em si mesmo.

## Avançado
Dispel básico remove a maioria dos debuffs (slows, controles leves); dispel forte remove também os que resistem ao básico, como Hex. Cada habilidade tem um campo próprio (dispellable) dizendo se some com básico, só com forte, ou nunca, como o Nightmare.

Dois níveis de dissipação: a básica remove slows, buffs e a maioria dos debuffs leves, mas não remove stun, root, silence nem hex; a forte remove tudo isso também. O Manta Style faz uma dissipação básica em si mesmo ao ser ativado.
