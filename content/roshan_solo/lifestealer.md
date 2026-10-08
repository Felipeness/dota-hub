---
id: roshan-solo-lifestealer
titulo: "Solo de Roshan: Lifestealer"
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-roshan-solo/work/solo_roshan.md
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-imortal/work/ref/heroi-lifestealer/liq_lifestealer.wiki
- https://liquipedia.net/dota2/Lifestealer
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/lifestealer.json
heroi: Lifestealer
solos: 0
origem: recomendado
---

## Básico

Nos replays lidos pro 7.41 (1.245 partidas válidas, 2.577 mortes de Roshan), o Lifestealer não tem nenhum
solo confirmado, nenhum solo com suporte, e não aparece nem na lista de amostra pequena do projeto
(que inclui heróis com só 1 registro, como Morphling, Juggernaut e Meepo). Zero ocorrências: é o único
cenário possível, diferente de "poucos dados", é mesmo zero em 2.577 mortes analisadas.

A razão é mecânica, não de build. Dois pilares do herói ficam desligados contra Roshan, confirmado na
ficha de habilidades da Liquipedia (seção "Roshan Factor" de cada spell):
- Feast, a cura/dano por % do HP máximo do alvo que sustenta o herói no farm e na luta, diz
  explicitamente: "All ability components do not interact with Roshan". Contra Roshan ele não cura,
  não causa o dano bônus e não ganha stack de vida máxima.
- Infest (a ultimate, usada pra virar creep/herói e escapar) também não funciona: "Both Roshan and the
  Tormentor cannot be Infested".

Sem o heal do Feast, bater em Roshan fica igual a qualquer herói físico sem sustentação própria: só dano
de ataque, Ghoul Frenzy (velocidade de ataque passiva por nível) e Open Wounds (lifesteal dele e dos
aliados que também batem no alvo). Rage ainda funciona normalmente ali (resistência mágica e
debuff immunity), mas não cura ninguém.

## Avançado

O que ele faz no lugar, pelos dados do próprio projeto:
- Entra no Roshan em grupo. Das 2.577 mortes válidas analisadas, 2.088 foram "de time" (work/solo_roshan.md);
  é a categoria onde um herói sem padrão de solo cai, e é onde o Lifestealer está.
- O guia publicado do herói (lifestealer.json) não lista nenhum power spike nem rota de Roshan: o build é
  Radiance pra farm e depois teamfight físico (Armlet, Yasha, Assault Cuirass, Basher).

Por que ele ainda pesa no Roshan de grupo mesmo sem conseguir solar, com o porquê tático:
- Attack speed alto (Ghoul Frenzy escalando por nível, Armlet ligado, Yasha) dá DPS físico constante contra
  a armadura de Roshan.
- Assault Cuirass soma a própria aura de -5 de armadura ao seu dano físico contra Roshan (~40 de armadura),
  isso já está sourced no power spike do item no guia local.
- Open Wounds dá lifesteal pra quem também está batendo em Roshan, então ele pode entrar como "suporte de
  dano" do grupo em vez de tentar carregar o kill sozinho. Atenção: não achamos uma nota explícita dizendo
  que Open Wounds funciona normalmente em Roshan (só Feast e Infest têm a ressalva "Roshan Factor" na
  ficha da Liquipedia); tratamos isso como inferência pela ausência da ressalva, não como fato confirmado.

Comparado aos heróis que realmente solam no 7.41 (Huskar, Ursa), a diferença de kit explica o resultado:
Huskar tem Inner Fire e Life Break pra matar rápido e sobrevive no fio da vida ligando e desligando o
Armlet; Ursa tem Enrage (80% de redução de dano) e Earthshock (dano em área). Lifestealer não tem
redução de dano recebido contra Roshan nem cura que funcione nele, então falta justamente a peça que os
outros dois usam pra sobreviver ao burst de dano de Roshan sozinho.
