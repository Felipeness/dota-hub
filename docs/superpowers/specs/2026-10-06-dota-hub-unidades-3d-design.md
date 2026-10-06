# Dota Hub: unidades em 3D (adendo à fase 1)

Data: 06/10/2026. Autor: Felipe (Ness). Status: aprovado pelo Felipe por delegação ("liberou todas as decisões"). Adendo a `docs/superpowers/specs/2026-10-06-dota-hub-design.md`; vale tudo o que está lá, mais o que segue.

## Objetivo

O Felipe quer ver as unidades do jogo como no glossário do próprio Dota (Aprender > Glossário > Roshan): o modelo 3D da unidade girando, os números dela, as habilidades com ícone e texto, e as condições de cada habilidade. Vale para o Roshan, o Tormentor, os creeps de lane e todos os monstros da selva. Sucesso: abrir o Roshan no mapa e ver o modelo animado com os mesmos números do jogo (vida 6.000, regeneração 20, ouro 200 a 290, XP 400, intervalo de ataque 2,0, dano 75, alcance 150, velocidade 270, armadura 30, resistência mágica 55%) e as habilidades dele, e achar qualquer monstro de qualquer camp do 7.41 do mesmo jeito.

## Decisões tomadas

| Tema | Decisão |
|---|---|
| Origem dos modelos, números e textos | Os arquivos do jogo instalado no PC do Felipe (uso autorizado por ele). Nada é digitado à mão. |
| Idioma dos textos das habilidades | Português do Brasil, a tradução oficial do jogo. Se faltar um texto em português, usa o inglês do jogo e marca "texto em inglês". |
| Animação | Só a animação parada (respiração, a "idle"). Ataque, morte e corrida ficam fora. |
| Versões de creep | Uma por aparência: corpo a corpo, à distância, porta-bandeira e cerco, de cada lado, normal e mega. O super usa a mesma aparência do normal e muda só os números. |
| Unidade sem modelo próprio | Não acontece no 7.41 (todos os 59 modelos existem). Se acontecer num patch novo, a ficha aparece sem o 3D e com o aviso "modelo indisponível". |

## Fora do escopo

Animações de ataque, de habilidade e de morte; efeitos de partícula (fogo, raios); sons; heróis em 3D; comparar duas unidades lado a lado; modelos de cosméticos e de eventos (Diretide, Frostivus).

## O que muda nas telas

1. **Glossário: seção "Unidades"**. Uma lista agrupada em Roshan e Tormentor, Creeps de lane, e Selva (Pequeno, Médio, Grande, Ancient, Anfíbio). Cada unidade abre a ficha da unidade.
2. **Ficha da unidade** (no glossário e no painel do mapa, mesmo conteúdo):
   - O modelo 3D animado, girando sozinho; o usuário arrasta para girar e aproxima com pinça ou roda do mouse.
   - Nome, papel (por exemplo, "chefe neutro", "creep de lane Radiant", "camp grande") e uma frase do que ela é.
   - A grade de números como no jogo: vida, regeneração de vida, mana (quando tem), armadura, resistência mágica, dano, intervalo de ataque, alcance de ataque, velocidade de movimento, ouro, XP, visão de dia e de noite.
   - As habilidades, cada uma com ícone, nome, descrição e as condições: o que ativa (passiva, ativa, aura, ao atacar), recarga, custo de mana, alcance, raio, duração, tipo de dano, se atravessa imunidade a magia, se pode ser removida (dissipar) e se é desligada por quebra. Os valores numéricos de cada habilidade aparecem em lista ("Raio: 350", "Duração do retardo: 4 s").
   - "O que isso muda para você": um texto curto por habilidade que importa para a decisão do jogador (por exemplo, "Bloqueio de Magias: gaste uma magia barata antes do seu atordoamento"), com fonte e marca "recomendado" ou "visto em replay", como o resto do conteúdo. Sem texto conferido, aparece "ainda não escrito".
   - Como a unidade fica mais forte com o tempo: para os monstros da selva, uma linha diz quanto ganham a cada 7:30; para o Roshan e o Tormentor, uma tabela por minuto (vida, armadura e dano do Roshan; escudo, reflexão e aura do Tormentor). O Tormentor não tem vida fixa no jogo, só o escudo da tabela.
3. **Painel do objetivo no mapa**. Roshan e Tormentor mostram a ficha da unidade na aba Básico, acima do texto que já existe. Um camp mostra os tipos que podem nascer nele (os camps secos sorteiam entre os tipos do mesmo tamanho; os anfíbios seguem a linha dos sapos), cada tipo com as unidades e a quantidade, e cada unidade abre a ficha.
4. **Busca global**. Acha unidade e habilidade pelo nome em português e em inglês ("Roshan", "Porrada", "Slam", "kobold").

## Entidades

- **Unidade**: id do jogo, nome, papel, lado, números, habilidades, crescimento com o tempo, modelo (ou ausente), fonte e patch.
- **Habilidade**: id do jogo, nome, ícone, descrição, condições, valores, texto "o que muda" (ou ausente).
- **Tipo de camp**: nome, tamanho, terreno (seco ou anfíbio), unidades com quantidade, ouro e XP do camp.
- Um camp do mapa aponta para os tipos que podem nascer nele; um tipo de camp aponta para unidades; uma unidade aponta para habilidades.

## Critérios de sucesso (mensuráveis)

1. Cobertura: 100% dos 26 tipos de camp do 7.41 (pequeno, médio, grande, ancient e anfíbio), as 45 unidades da selva, os 24 creeps de lane (corpo a corpo, à distância, porta-bandeira e cerco; normal, super e mega; dos dois lados), o Roshan e o Tormentor têm ficha com números e habilidades; 100% das 59 aparências têm modelo 3D.
2. Os números da ficha do Roshan batem com o glossário do jogo nos 10 valores do objetivo acima; mais 10 números de outras unidades conferidos por amostra contra o jogo.
3. Cada modelo pesa no máximo 400 KB para baixar; o total de todos os modelos fica abaixo de 15 MB.
4. No celular intermediário com 4G, o modelo aparece animado em até 2 s depois do toque, e gira a pelo menos 30 quadros por segundo.
5. A primeira tela do app continua abrindo em menos de 3 s em 4G: nenhum modelo nem o visualizador é baixado antes de alguém abrir uma ficha.
6. 100% das habilidades visíveis no jogo têm nome, ícone e descrição; as escondidas pelo jogo e sem texto (crescimento interno) não aparecem como habilidade, só na linha de crescimento.

## Estados de erro e situações de borda

- Aparelho sem suporte a 3D: no lugar do modelo aparece uma imagem parada da unidade (gerada do mesmo modelo); números e habilidades continuam iguais.
- Modelo que não carrega (arquivo ausente, rede caiu): o quadro do modelo mostra "modelo indisponível" e um botão "tentar de novo"; o resto da ficha continua.
- Arquivo de unidades ausente ou fora do formato: a seção mostra "dados indisponíveis" e o resto do app funciona, como na fase 1.
- Habilidade sem ícone no jogo: aparece um ícone neutro com a inicial do nome.
- Usuário que prefere menos movimento (configuração do sistema): o modelo não gira sozinho e a animação fica parada no primeiro quadro.
- Jogo não instalado no PC de quem exporta: a exportação para com a mensagem "Dota 2 não encontrado" e o caminho procurado; os dados antigos não são apagados.

## Requisitos não funcionais

- Desempenho: critérios 3, 4 e 5. Só um modelo por vez fica na memória; trocar de unidade libera o anterior.
- Acessibilidade: o modelo tem texto alternativo ("Modelo 3D do Roshan, girando"); o botão de pausar o giro é alcançável por teclado; números e habilidades são texto, não imagem.
- Direitos: arquivos do jogo usados com autorização do Felipe; os modelos gerados não entram no repositório, são gerados de novo a partir do jogo instalado, como os dados.
- Rastreabilidade: cada ficha mostra o patch e a data da exportação; o texto "o que muda" cita a fonte.
- Texto em português do Brasil com acentos, frases curtas.

## Conteúdo novo a produzir

"O que isso muda para você" das habilidades que pesam na decisão: Roshan (Bloqueio de Magias, Pancada, Porrada, Rugido Vingativo, Arremessar, Força do Imortal), Tormentor (Reflexão, escudo), e os monstros da selva que mudam como se farma ou se empilha (por exemplo, purga do Sátiro, Bola de Fogo do Dragão, aura de vida do Golem). Cada texto com fonte (notas do patch 7.41, Liquipedia, replays já lidos).
