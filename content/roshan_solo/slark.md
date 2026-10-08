---
id: roshan-solo-slark
titulo: "Solo de Roshan: Slark"
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- C:/Users/felip/Desktop/dota-roshan-solo/work/solo_roshan.md
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
heroi: Slark
solos: 0
origem: replay
replay: 8744200545, 8746310653, 8751867970, 8754710403, 8755904884, 8758979828, 8766245839, 8768379285, 8771176095, 8773679796, 8774759010, 9028005974, 9032097166
---
## Básico
Nos dados de replay (1.245 partidas válidas, sem Turbo nem Ability Draft, 2.577 mortes de Roshan), o Slark aparece em 15 dessas mortes (mais 1 em Turbo, fora da contagem oficial) e em **nenhuma delas é solo**. Ele não está nem na lista de 22 heróis com solo confirmado (`resumo_por_heroi.json`), nem na de 29 heróis com solo com suporte (`resumo_com_suporte.json`). Das 15 mortes válidas, 13 foram classificadas "time" e 2 "finalização" (Roshan já tinha levado dano de outra pessoa antes do Slark entrar).

O Slark não é um jogador passivo nesses Roshans: em 15 das 15 mortes ele é quem bate mais forte. Mediana de participação no dano: 46,8% (mínimo 34,5%, máximo 70,8%, esse pico numa "finalização" em que o Roshan já tinha levado dano de outra pessoa antes dele chegar), sempre com 2 a 4 aliados batendo dentro do fosso também. Mesmo no pico de 70,8% ele fica abaixo dos 85% de dano sozinho que definiriam solo. Minuto: mediana 28:32 entre as 15 mortes (faixa 22:41 a 39:48 nos 13 casos "time"; os 2 de "finalização" foram mais cedo, 17:50 e 28:25, mas aí o Roshan já estava ferido antes dele chegar).

O que ele faz no lugar: Roshan em grupo, no papel de maior dano do time, não como executor solo. É consistente com o herói ser um carry de meio de jogo (12 a 35 min é a faixa em que ele mais vence, segundo o guia publicado) que entra pra bater junto com quem já tem iniciação ou controle, em vez de abrir o fosso sozinho.

## Avançado
Por que o Slark não aparece como Huskar, Ursa ou Shadow Fiend na lista de solistas, mesmo sendo um herói de luta corpo a corpo com dispel e invisibilidade:

1. **Essence Shift não funciona no Roshan.** A própria descrição oficial da habilidade diz que ela "rouba a essência vital de heróis inimigos com seus ataques" (fonte: `constants_abilities.json`, `slark_essence_shift`). Roshan não é herói, então o Slark não ganha nenhum stack de Agilidade bonus batendo nele: o DPS dele contra Roshan é só o ataque básico mais o Saltwater Shiv, sem o multiplicador que ele acumula em luta de herói.
2. **Dark Pact é pouco dano pra pouca recarga.** No máximo 300 de dano em área a cada 6 s de recarga (50 de DPS extra), nada perto do burst que os heróis que realmente solam usam: o Huskar liga e desliga o Armlet repetidas vezes pra dobrar o próprio dano (mediana de 24 toggles por solo, segundo `work/solo_roshan.md`), e a Ursa empilha Overpower (bônus de dano por ataque) com Earthshock. O Slark não tem nada que multiplique o dano dele contra um alvo único.
3. **Shadow Dance não dá dano nem lifesteal.** O efeito passivo é só regeneração de vida e velocidade de movimento quando ninguém o vê; não aumenta o dano nem rouba vida, então ele não aguenta nem acelera uma luta longa contra o Roshan sozinho, do jeito que um herói com roubo de vida faria.
4. **Pounce não ajuda contra Roshan.** É uma prisão de alvo único em herói, sem dano relevante (0 de dano base) e sem efeito em criatura neutra: serve pra garantir o abate de um inimigo, não pra acelerar a queda do Roshan.

Combo sugerido pelo que os dados mostram: Slark entra no fosso junto com o time (ele faz o papel de maior dano, não de tanque nem de controle), de preferência depois do Scepter e com o Diffusal/Mage Slayer já montados (por volta dos 25 a 35 min, que é a janela em que ele de fato participa nos dados), deixando a prisão (Pounce) e o dispel (Dark Pact) pra defender o grupo de interrupção, não pra tentar ficar sozinho lá dentro.
