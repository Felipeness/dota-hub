# Auditoria visual e de usabilidade do Dota Hub (main, 06/10/2026)

App da branch `main` (commit `bad6abd`) rodando em `http://localhost:5174` a partir da worktree `C:\Users\felip\Desktop\dota-hub-teste`. Telas abertas pelo Playwright MCP (Chromium com 3D ligado) em 1440×900 e 390×844, mais 800, 1024 e 1280 de largura no mapa. Capturas em `C:\Users\felip\Desktop\dota-hub-auditoria\` (o número da captura aparece entre colchetes). Linhas citadas são do `main`.

Medições feitas na própria página: largura rolável contra largura visível (`scrollWidth` e `clientWidth`), tamanho de cada alvo de toque (`getBoundingClientRect`), contraste de cada texto contra o fundo real (fórmula WCAG) e mensagens do console.

## Resumo

| # | Problema relatado | Confirmado | Causa raiz |
|---|---|---|---|
| 1 | Avançado do objetivo ilegível | Sim | classe `.cartoes` definida duas vezes no CSS |
| 2 | Logotipo sobre a navegação; mapa minúsculo | Sim | classe `.marca` definida duas vezes; `Canvas` ignora a proporção; três colunas fixas abaixo de 1180 px |
| 3 | Rotas: mapa não aparece, lista de 872, busca vaza | Sim, com ressalva | mapa abaixo da primeira tela; lista sem filtro nem paginação; busca do topo cobre o logo |
| 4 | Ficha de herói com paredão de texto | Sim | resumo de 1.853 caracteres inteiro no topo |
| 5 | Lista de heróis sem ícone | Sim | export não traz retrato; card só tem texto |
| 6 | Rotas do herói: faixa quebrada, marcadores demais, texto ruim, pouca variação | Sim, os quatro | textura esticada no export; mapa recebe os 92 objetivos; passo em coluna de 56 px; uma rota por fase |
| 7 | Cartões dos amigos com uma letra por linha | Sim | mesma colisão da `.cartoes` do item 1 |
| 8 | Glossário só texto | Sim | termo mostra só markdown; ícone, unidade e lugar no mapa não são usados |

Outros 21 defeitos achados estão na seção "Outros defeitos".

## Problemas relatados

### 1. Aba Avançado do objetivo ilegível
Confirmado [03, 05, 33, 35]. Os cartões ficam em três colunas de cerca de 100 px e o texto quebra uma palavra por linha. No celular viram duas colunas de 160 px.

Causa: `app/src/styles.css` define `.cartoes` duas vezes. A linha 276 é a do painel do objetivo (coluna única, `display: flex`). A linha 446 é a dos cartões de jogadores (`display: grid` com 2 colunas, e 3 colunas a partir de 900 px na linha 473). A segunda vence. Somado a `.cartoes > li` (linha 277, grade de `40px` mais o texto), cada cartão fica estreito demais. O componente que usa a classe é `Cartoes` em `app/src/objectives/ObjectivePanel.tsx:93-101`.

### 2. Logotipo sobre a navegação e mapa minúsculo
Logotipo: confirmado em todas as telas [01, 10, 17, 22]. "Mapa" e "Rotas" ficam por cima de "DOTA HUB". No celular a busca do topo cobre o logotipo inteiro [31, 37].

Causa: `.marca` é a classe do bloco do logotipo em `app/src/layout/Shell.tsx:18` e `app/src/styles.css:95`, e também a classe da marca de ward e morte do replay em `styles.css:220` e `styles.css:225` (`position: absolute; width: 8px; height: 8px; transform: translate(-50%, -50%)`). A regra do replay vem depois e vence: o bloco do logotipo vira um quadrado absoluto de 8 por 8 px (medido: x 12, y 31, 8×8) e sai do fluxo.

Mapa: confirmado entre 721 e 1179 px de largura [40-mapa-roshan-800, 40-mapa-roshan-1024]. Em 800 px a coluna de camadas tem 240 px, o painel 320 px e sobram 225 px para o mapa; o canvas 3D fica com 177×716 px, esticado na vertical. Em 1440 o mapa cabe [01], mas o quadro 3D deixa uma faixa vazia de uns 110 px em cima e corta o título "Clique num objetivo" na base das letras.

Causas:
- `app/src/map/Map3D.tsx:112`: a classe `mapa-3d` vai no próprio `<Canvas>`, que põe `height: 100%` em linha no elemento. O `aspect-ratio: 1` de `styles.css:171` não vale e o canvas toma a altura da coluna.
- `styles.css:137-168`: a página do mapa é sempre `display: flex` com três colunas (`240px`, mapa, painel com `min-width: 320px`) até 721 px. Não existe passo intermediário.
- `styles.css:166`: o título do mapa é `position: absolute` e o canvas, com fundo próprio, passa por cima dele.
- No celular a coluna vira uma faixa com rolagem lateral (`styles.css:414-417`). O seletor de replay vem primeiro e ocupa a largura toda; os 13 botões de camada ficam fora da tela, à direita [31].

### 3. Rotas: mapa não aparece, lista enorme, busca vaza
Confirmado com ressalva [06, 08, 09b, 36, 37, 38, 39].
- O mapa aparece, mas fora da primeira tela. Em 1440 começa em y = 700, abaixo do título, das 11 pílulas de situação e da nota. Em 390 fica a mais de 1.100 px do topo [37]: escolher a situação não mostra nada novo na tela, só a nota.
- Antes de escolher, a tela é a lista das 872 rotas em duas colunas (`styles.css:331`, `columns: 2 360px`), com 2.659 px de altura mesmo depois de filtrar (43 rotas em lado e minuto). Rotas de herói (AL, DR, FV...) aparecem misturadas às gerais [39].
- Busca: o campo "Procurar rota" cabe (343 px em 375). O que vaza é a busca global do topo, que cobre o logotipo (item 2). Na linha de minutos, 28, 29 e 30 ficam escondidos atrás de uma barra de rolagem lateral (`styles.css:299`) [06].

Causa: `app/src/routes/RoutesPage.tsx:57-66` põe a rota aberta e a lista completa em sequência numa coluna, sem paginação; `RouteDetail` (linhas 27-34) põe o mapa depois do título e da pergunta. Clicar na situação com lado ou minuto faltando não faz nada e não avisa (`RoutesPage.tsx:36`). Toda a tela espera `rotas.json` (5,3 MB, cerca de 1 MB com gzip) carregar inteiro.

### 4. Ficha de herói com paredão de texto
Confirmado [11, 12, 42]. O resumo do Anti-Mage tem 1.853 caracteres e ocupa 530 px de altura antes das abas; no celular empurra as abas para a segunda tela. O rodapé de fontes tem mais um paredão em fonte monoespaçada [25, 46].

Causa: `app/src/heroes/FichaHeroi.tsx:133` imprime `heroi.resumo` inteiro num `<p>`, e `FichaHeroi.tsx:140` imprime todas as fontes. O guia (linhas 21-44) é uma sequência de nove seções sempre abertas.

### 5. Lista de heróis sem ícone
Confirmado [10, 41]. Cada card tem nome e 120 caracteres do resumo.

Causa: `app/src/heroes/HeroesPage.tsx:21` só tem texto; o export (`export/dota_export/herois.py`) não grava imagem. O jogo instalado tem `panorama/images/heroes/npc_dota_hero_<nome>_png.vtex_c` (conferido com o Source 2 Viewer da 1C: `npc_dota_hero_antimage_png.vtex_c`, 19,6 KB) e o nome interno sai do `hero_id` pelo `dota-imortal/data/opendota/heroes.json` (127 heróis, `1 → npc_dota_hero_antimage`).

### 6. Rotas do herói
Os quatro pontos confirmados [16, 45, 48].
- **Faixa quebrada na base da textura**: confirmada no mapa principal e em todos os mapas 3D [01, 16]. Nas 56 últimas linhas da `mapa_2048.jpg` cada linha repete a de cima (diferença média 0,1 contra 13 no resto). Causa: `export/dota_export/mapa.py:25` usa `np.clip` nas coordenadas fora da imagem de origem e estica a última linha (e a última coluna, no canto de cima à direita) até a borda.
- **Marcadores demais**: `app/src/heroes/FichaHeroi.tsx:90` passa os 92 objetivos para o mapa da fase, que só precisa dos alvos dos seus passos.
- **Texto difícil de ler**: `FichaHeroi.tsx:91-92` monta cada passo com dois filhos (número e texto), mas `.passos > li` (`styles.css:315-316`) é uma grade de três colunas (`34px 56px 1fr`). O texto cai na coluna de 56 px (medido: 56 px) e sai uma sílaba por linha [48]. O passo do herói vem do export com `minuto: ""` e `risco: "objetivo"` fixo (`export/dota_export/herois.py:113`): o mapa desenha uma pílula preta vazia ao lado de cada número (`app/src/map/MapFlat.tsx:25`, `Map3D.tsx:74`) e o texto mostra "()" (`FichaHeroi.tsx:92`).
- **Pouca variação**: cada lado tem de 4 a 8 fases e uma rota por fase (Anti-Mage: 5 por lado). Ao mesmo tempo existem 11 rotas `AM-R-*` do PDF 05 (entre elas `AM-R-11`, lane impossível) e as 11 situações do índice minuto × situação, e nada disso aparece na ficha: `rotas_relacionadas` do Anti-Mage está vazio. Para sete heróis o mesmo campo traz 128 ids impressos como links soltos num parágrafo [25] (`FichaHeroi.tsx:97`).

### 7. Cartões dos amigos com uma letra por linha
Confirmado [17, 49, 20, 52]. Também nos times.

Causa: a mesma colisão do item 1. `.cartoes > li` (`styles.css:277`) aplica a grade `40px minmax(0, 1fr)` também nos `<li>` de `app/src/players/PlayersPage.tsx:7` e `:25`. O link cai na coluna de 40 px (medido: `<a>` com 40 px dentro de um `<li>` de 337 px) e `overflow-wrap: anywhere` (`styles.css:444`) quebra letra por letra.

### 8. Glossário só texto
Confirmado [21, 22, 53, 54]. Os 50 termos de item já têm o nome do item no jogo (`extras.item`, por exemplo `abyssal_blade`), e o jogo tem `panorama/images/items/abyssal_blade_png.vtex_c`. 45 termos apontam para objetivos do mapa (`aegis → roshan`, `ancient → rad_ancient`). A 1C traz a ficha 3D do Roshan, do Tormentor e dos creeps com ícone de habilidade. Nada disso é usado.

Causa: `TermoAberto` em `app/src/glossary/GlossaryPage.tsx:49-63` mostra título, selo, markdown e pílulas.

## Outros defeitos

| # | Tela | Defeito | Medição | Causa |
|---|---|---|---|---|
| A | Glossário (celular) | Rolagem lateral de 779 px na página toda | `scrollWidth` 1.154 em 375 [53] | `.glossario-lista` (`styles.css:338`) é item flex com `min-width: auto` e a faixa de categorias é `nowrap` (`styles.css:435`) |
| B | Glossário | Botões de categoria com 32 px de altura | 15 botões de 51 a 103 × 32 px | `styles.css:357` |
| C | Todas | Texto de exemplo dos campos com contraste 3,85:1 | `#757575` sobre `#111920` | nenhum `::placeholder` no CSS (`styles.css:32-41`) |
| D | Rotas | Link de rota dentro de "Se o mapa mudar" com 57×21 px | alvo de toque | `button.link` com `min-height: 0` (`styles.css:30`) |
| E | Mapa (celular) | Botões de camada fora da tela, seletor de replay cortado na borda | [31] | `styles.css:414-417` |
| F | Mapa | Rótulos crus na grade de números: "area", "anfibio", "confianca posicao", "perto de: rad_bot_t1" | [04, 34] | `numerosDoObjetivo` usa a chave do JSON como rótulo e não troca id por nome (`ObjectivePanel.tsx:21-26`) |
| G | Mapa | Título "Clique num objetivo" cortado embaixo | [01] | título absoluto sob o canvas (`styles.css:166`) |
| H | Rotas | Minutos 28 a 30 escondidos atrás de rolagem lateral | [06] | `styles.css:299` |
| I | Rotas | Escolher a situação sem lado ou minuto não faz nada e não avisa | | `RoutesPage.tsx:36` |
| J | Rotas, busca, termo | Arquivo de 5,3 MB (1 MB gzip) baixado inteiro para listar ids e títulos | 882 ms no PC local; no 4G passa de 3 s | `RoutesPage.tsx:16`, `SearchBox.tsx:47`, `GlossaryPage.tsx:31` |
| K | Busca | A lista de resultados não fecha com Esc nem ao clicar fora | [24, 56] | `setAtiva(true)` no foco e nunca `false` (`SearchBox.tsx:32`) |
| L | Busca | Resultados de duas linhas sem respiro, etiqueta desalinhada | [23, 55] | `.busca li` com `padding: 0` vertical (`styles.css:130`) |
| M | Herói, Rotas | Pílula preta vazia ao lado do número do passo | [16, 45] | `minuto` vazio desenhado sem checar (`MapFlat.tsx:25`, `Map3D.tsx:74`) |
| N | Herói | 128 links de rota num parágrafo só | [25] | `FichaHeroi.tsx:97` |
| O | Herói, Jogador | Fontes num paredão monoespaçado | [25, 46] | `FichaHeroi.tsx:140`, `PainelJogador.tsx:33` |
| P | Herói | Conteúdo da aba abaixo da primeira tela | [11, 42] | resumo inteiro no topo (item 4) |
| Q | Console | `favicon.ico` 404 em toda página | 1 erro por página | `app/index.html` sem ícone |
| R | Console | "Attempted to synchronously unmount a root while React was already rendering", 6 vezes ao trocar de aba ou fase com o mapa 3D de rota aberto | 6 erros | rótulos `Html` do drei desmontados no meio do render (`Map3D.tsx:73`) |
| S | Console | Aviso `THREE.Clock` obsoleto | 6 avisos | vem do `@react-three/fiber` 9.8 com three 0.186; sem efeito visível |
| T | Mapa 3D | Mapa ocupa só 60% do quadro, faixa vazia em cima | [01, 16] | câmera em `[0, 100, 78]` com `fov 45` (`Map3D.tsx:112`) |
| U | Herói (Pros) | Coluna Vitórias com "sem dado" em todas as linhas do Anti-Mage | [14, 46] | dado da fonte; não é bug de tela, fica registrado |

Sem problema: contraste de todo texto sobre fundo sólido (nenhum abaixo de 4,5:1; `--cor-texto-3` dá 5,33 a 5,79:1), rolagem lateral nas outras telas (zero em 390), alvos de toque fora dos casos B e D (todos com 44 px ou mais, inclusive os marcadores do mapa plano pelo `::after`), estado vazio da busca ("Nada encontrado.") e do painel do mapa.

## Por que passou nos testes

Os testes da 1A e da 1B rodam no jsdom, que não aplica CSS nem mede layout. As colisões de classe, a grade de três colunas com dois filhos, a proporção do canvas e a rolagem lateral só aparecem num navegador de verdade. O plano da fase 1D (`docs/superpowers/plans/2026-10-06-dota-hub-fase1d-ux.md`) fecha isso com um teste que recusa classe definida em dois lugares do CSS e com captura obrigatória em 1440×900 e 390×844 antes de cada commit de tela.
