# Dota Hub — design da fase 1

Data: 06/10/2026. Autor: Felipe (Ness). Status: aguardando revisão.

## Objetivo

Um app web interativo que junta tudo o que já foi produzido nos projetos de análise de Dota (GPS de farm, rotas minuto a minuto, guias de herói, análises de jogadores e de profissionais) com um mapa 2.5D clicável e um glossário. Usuários: o Felipe e os amigos dele, pelo navegador do PC e do celular. Sucesso da fase 1: dá para abrir, achar uma rota, um herói, um jogador ou um termo em poucos segundos, clicar nos objetivos do mapa e ler o básico e o avançado, e o Felipe e um amigo conseguem usar sem explicação e dar opinião sobre o visual.

## Decisões tomadas com o Felipe

| Tema | Decisão |
|---|---|
| Quem usa | Felipe e amigos; link aberto, sem login (login talvez depois). |
| Mapa | 2.5D agora, com a camada do mapa isolada para trocar por um mapa mais detalhado depois. |
| Dados | Fase 1: retrato estático do que já existe. Fase 2 (fora deste spec): busca ao vivo no OpenDota com backend. |
| Stack | React + Vite + TypeScript + Three.js (react-three-fiber). Site estático. |
| Imagens e textos do jogo | Uso liberado pelo Felipe. |
| AWS, deploy, infra | Fora desta fase; fica para depois. A fase 1 roda local (`npm run dev` e build estático). |

## Fora do escopo da fase 1

Busca ao vivo, backend, login, AWS, mapa 3D detalhado, contas de usuário, edição de conteúdo pelo app.

## Telas

1. **Mapa** — mapa 7.41 em 2.5D (imagem real calibrada em plano com relevo de high ground, rio e rampas), câmera que gira e aproxima. Objetos clicáveis: Roshan (os dois fossos e a regra de dia e noite), Tormentors, torres, barracks, camps (com tipo e código R1..R14 / D1..D14), runas, lotus pools, watchers, outposts, lojas, twin gates. Clique abre um painel com abas **Básico** (números do 7.41, como o glossário do jogo) e **Avançado** (uso para ganhar: timings, para que serve cada Roshan, como solar por herói, com fonte). Camadas ligáveis por cima: rotas do GPS, rotas reais de replay animadas no tempo, wards e mortes das partidas analisadas.
2. **Rotas** — busca por minuto (4 a 30), situação (as 11 colunas do índice do PDF 06), herói e lado. A rota abre no mapa com os passos ①②③, minuto, fuga, interrupções e o link da próxima rota. Fontes: specs do PDF 03 e do PDF 06.
3. **Heróis** — ficha de cada herói com conteúdo do PDF 05 (quando pegar, build, itens, power spikes), rotas do herói e números dos profissionais naquele herói.
4. **Jogadores e times** — painéis interativos com as análises feitas: Felipe, Leonardo, Hane, Yuma (v2), e os profissionais (Satanic, Yatoro, Watson, Skiter e times tier 1 usados nas análises). Gráficos interativos em vez das imagens dos PDFs.
5. **Glossário** — 150 a 250 termos em português (mecânicas, itens-chave, gírias), com busca; cada termo liga ao mapa, à rota ou ao herói quando fizer sentido.
6. **Busca global** — uma caixa só que acha herói, jogador, time, rota, objetivo ou termo.

O app é em português do Brasil e funciona no celular (layout responsivo, mapa com toque).

## Arquitetura

- **Repositório**: `Desktop/dota-hub`, git privado (GitHub privado depois, quando o Felipe quiser).
- **`export/` (Python)**: lê os projetos `Desktop/dota-imortal`, `dota-hane`, `dota-leonardo`, `dota-yuma` e gera `app/public/data/*.json` com formato fixo, validado por JSON Schema (`export/schemas/`). Nenhum dado é digitado à mão no app. Trajetórias de replay são reduzidas (amostragem e simplificação de linha) para ficarem leves no celular.
- **`content/` (Markdown com frontmatter)**: textos escritos do glossário e do básico e avançado de cada objetivo, versionados, cada número com fonte e patch, cada recomendação marcada como "recomendado" ou "visto em replay <id>".
- **`app/` (React + Vite + TS)**: só lê os JSON e o conteúdo. Módulos por domínio: `map/`, `routes/`, `heroes/`, `players/`, `glossary/`, `search/`.
- **Camada do mapa isolada**: o resto do app só fala com o mapa por uma interface pequena (coordenadas normalizadas do mapa, lista de objetos, lista de camadas, evento de clique). Trocar o 2.5D por um mapa detalhado depois não muda as telas.
- **Coordenadas**: as mesmas normalizadas já calibradas nos projetos (`basemap.py`; grade do OpenDota x=(gx−57)/142).

## Conteúdo novo a produzir

- **Objetivos**: básico e avançado de Roshan, Tormentor, torres, barracks, runas (poder, bounty, sabedoria, água), lotus, watchers, outposts, twin gates, lojas, camps por tipo. Conferido no 7.41 (Liquipedia, notas do patch, constantes do jogo) e com os replays já lidos (por exemplo, quando os profissionais fazem o 1º Roshan e o que fazem depois).
- **Solo de Roshan por herói**: Ursa, Huskar, Morphling e outros que solam no 7.41: nível, itens, minuto, passo a passo, conferidos, com o rótulo de origem.
- **Glossário**: 150 a 250 termos.

## Qualidade e testes

- Schemas validam todo JSON exportado; a exportação falha se algo não bater.
- Testes do app: unidade nas funções puras (busca, filtros de rota, conversão de coordenadas) e alguns testes de tela das buscas e dos painéis.
- Conferência visual: o mapa e cada tela conferidos no navegador do PC e em tamanho de celular antes de mostrar ao Felipe.
- Texto em português do Brasil com acentos, frases curtas.

## Próximas fases (fora deste spec)

Fase 2: busca ao vivo (OpenDota) com backend. Depois: AWS (site estático e backend), login se precisar, mapa 3D detalhado, ideias novas do Felipe e do amigo depois de usar a versão semi pronta.
