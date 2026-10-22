# Decisão técnica: unidades em 3D (adendo da fase 1)

Data: 06/10/2026. Decidido sozinho, com as decisões liberadas pelo Felipe ("liberou todas as decisões"; uso dos arquivos do jogo autorizado). Spec: `docs/superpowers/specs/2026-10-06-dota-hub-unidades-3d-design.md`. Plano: `docs/superpowers/plans/2026-10-06-dota-hub-fase1c.md`.

## Escolha

- **Extrair**: Source 2 Viewer CLI (projeto ValveResourceFormat), versão **20.0**, `cli-windows-x64.zip` do GitHub Releases oficial, SHA-256 `d32ab327b8bbb42a2528866afb03bb582bdb779d0005488da32b90292afd3ff5`. Fica em `export/ferramentas/vrf/` (fora do git), instalado por `python -m dota_export.ferramentas`, que confere o hash. Lê `pak01_dir.vpk` do Dota instalado (só leitura), achado pelo `libraryfolders.vdf` do Steam ou pela variável `DOTA_VPK`.
  - Modelo: `-i pak01_dir.vpk -f <modelo>.vmdl_c -o <saida>.glb -d --gltf_export_format glb --gltf_export_materials --gltf_textures_adapt --gltf_export_animations --gltf_animation_list <idle>`. Duas passadas: a primeira exporta tudo só para ler os nomes das animações no bloco JSON do `.glb`; a segunda leva só a animação parada.
  - Textos: `scripts/npc/npc_units.txt`, `npc_abilities.txt`, `resource/localization/abilities_brazilian.txt` (português do Brasil oficial do jogo) e `abilities_english.txt` (reserva), lidos por um leitor de KeyValues de 30 linhas no próprio export.
  - Ícones: `panorama/images/spellicons/<habilidade>_png.vtex_c`, decodificados para PNG e gravados em webp 64 px com o Pillow que o export já usa.
- **Otimizar**: `npx -y @gltf-transform/cli@4.5.1 optimize <bruto> <final> --compress meshopt --texture-compress webp --texture-size 512`; se passar de 400 KB, de novo com `--texture-size 256`. Meshopt e não Draco porque o decodificador de meshopt já vem no Three.js/drei (sem baixar decodificador de outro site) e porque dá o mesmo tamanho (317 KB contra 320 KB no Roshan). KTX2 ficou de fora: precisa do `ktx` (KTX-Software) instalado no Windows e o webp já deixou as texturas em 5 a 60 KB cada.
- **Guardar**: `.glb` em `app/public/data/modelos/`, ícones em `app/public/data/icones/`, imagens paradas em `app/public/data/posters/`. Tudo fora do git (a pasta `app/public/data/` já é ignorada) e gerado de novo pelo export a partir do jogo instalado, como os outros dados. Um manifesto (`modelos/_manifesto.json`) guarda o CRC de cada modelo no VPK: o export só refaz o que mudou num patch.
- **Mostrar no app**: o React Three Fiber e o drei que o app já tem (`useGLTF` com meshopt, `useAnimations`, `Bounds`, `OrbitControls` com giro automático). Atrás de um componente só (`VisualizadorUnidade`), carregado sob demanda, como a `MapView` faz com o mapa.
- **Imagem parada (aparelho sem 3D)**: gerada uma vez por modelo com o Playwright (dependência de desenvolvimento), abrindo uma página do próprio app que mostra o modelo parado e fotografando o canvas. Navegador único, fechado em `finally`.

## Teste de viabilidade (06/10/2026, pasta `~/Desktop/dota-hub-spike-3d/`)

| O quê | Resultado |
|---|---|
| Dota instalado | `D:\SteamLibrary\steamapps\common\dota 2 beta\game\dota\pak01_dir.vpk` (achado pelo `libraryfolders.vdf`; não está na biblioteca padrão do C:) |
| Roshan, todas as 20 animações | `.glb` de 4,0 MB mais 2,4 MB de texturas PNG soltas |
| Roshan, só `roshan_idle` | 3,42 MB (glb 791 KB mais texturas) |
| Roshan otimizado | webp 1024 px + meshopt: 469 KB; webp 512 px + meshopt: **317 KB**; webp 512 px + Draco: 320 KB |
| Render no navegador | three.js 0.186.1, meshopt, animação parada tocando (tempo do mixer avançando), giro automático; carregou em 104 a 212 ms local (`npx serve`, PC). Captura em `dota-hub-spike-3d/captura-roshan-fosco.png` |
| Materiais | escuros como saem do jogo (máscara de metal sem mapa de ambiente); com metal 0 e sem mapa de brilho próprio, o Roshan fica como no jogo. Vira a função `foscar` |
| Os 59 modelos das 71 unidades | todos exportam; 692 s no total (11,7 s por modelo); brutos 144 MB, otimizados 12,0 MB; maior 502 KB, menor 110 KB |
| Acima de 400 KB | só os 4 sapos (malha de 13.800 vértices): com textura de 256 px ficam entre 334 e 397 KB. Total final perto de 11,6 MB |
| Nome da animação parada | 56 de 59 seguem `idle` ou `*_idle`; os 3 outros (Ice Shaman com animações reaproveitadas, Froglet, Wildwing) têm variações (`witchdoctor_idle_anim`, `tadpole_idle_var1`, `n_creep_vulture_a_idle_02`). Regra: `idle` exato, senão a variação de nome mais curto, sem retrato, captura, morte ou canal |
| Dados das unidades | 71 unidades (2 chefes, 24 creeps de lane, 45 da selva em 26 tipos de camp do `farm_mechanics_corrigido.json`) com nome em português; 260 números da selva (vida, armadura, resistência, XP, ouro) batem com o `farm_mechanics`; Roshan bate com o glossário do jogo nos 10 números |
| Habilidades | 73 ids; 70 com descrição em português (as 3 sem texto são internas: `neutral_upgrade`, `roshan_inherent_buffs`, `miniboss_inherent_buffs`); nenhuma `%variavel%` sem valor; ícone para todas as visíveis menos `roshan_devotion` (Força do Imortal) |
| Tormentor | modelo `divine_sentinel_cube` existe e anima; vida no arquivo é 1 (o jogo calcula), então a ficha usa a tabela do escudo por minuto do `farm_mechanics` |
| Exportação com o código do plano | 59 modelos em 871 s na primeira vez (inclui a passada que lê as animações), **12.141 KB** no total, maior 397 KB (Ancient Frog mage, com textura de 256 px), 69 ícones; segunda rodada em 4 s pelo manifesto |
| App com o código do plano | `/glossario/unidades/<id>` e o painel do Roshan no mapa mostram o modelo animado girando, os números e as 6 habilidades em português; o Roshan (317 KB) carregou em 5 ms local; o camp anfíbio mostra a linha dos 4 sapos; em 390 px de largura não há rolagem lateral. Mapa 3D e modelo 3D abertos juntos funcionam. Capturas em `dota-hub-spike-3d/captura-painel-roshan.png`, `captura-ficha-creep.png` e `captura-ficha-celular.png` |
| Código do plano | os blocos de código da 1C, copiados para uma cópia do repositório: 44 testes do export passam contra o jogo instalado; 75 testes do app passam, `tsc -b` e `oxlint` limpos; o `Cena3D` sai num pedaço separado de 23 KB gzip |

O que não deu certo e a saída: o VPK não estava no caminho padrão (achado pela lista de bibliotecas); os 4 sapos passaram de 400 KB (textura menor); 3 modelos sem `idle` exato (regra de variação); KTX2 não testado (sem a ferramenta `ktx` no Windows; webp bastou).

## Por quê

- Source 2 Viewer é a ferramenta aberta de referência para Source 2, com CLI que exporta glTF com textura e animação; o export continua em Python e só chama o binário, como a 1A chama o motor do GPS.
- Gerar do jogo instalado, e não baixar de um site de terceiros, segue a regra do projeto (nada digitado à mão, fonte rastreável) e acompanha o patch: o CRC no VPK diz o que mudou.
- Fora do git porque são arquivos binários grandes (12 MB) e derivados; o repositório guarda só o código que os gera.
- O visualizador atrás de uma interface pequena repete a decisão do mapa: trocar a forma de mostrar o 3D depois não muda as telas.
- Playwright só para a imagem parada porque a única forma de ter uma foto fiel do modelo é renderizar o próprio modelo; o jogo não tem retrato das unidades da selva.
