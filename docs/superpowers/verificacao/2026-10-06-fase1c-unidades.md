# Verificação da fase 1C: unidades em 3D

Data: 06/10/2026. Patch dos dados: 7.41. Branch feat/fase-1c, commit 72320f5.

Aparelho: notebook Windows 11 (Ultra 9 185H, 32 GB). O celular foi simulado no Chromium do Playwright, com viewport 360×800, rede Fast 4G (latência 165 ms, 9 Mbps de descida, 1,5 Mbps de subida) e CPU 4× mais lenta, via CDP. Não houve teste em celular de verdade.

## Suítes e export

- `python -m dota_export`: `modelos: 59, 12141 KB`. O total fica abaixo do teto de 15.360 KB (critério 3).
- `python -m pytest -q`: 125 passed.
- `npm test`: 33 arquivos, 109 testes, todos passam.
- `npm run build`: passa. O aviso de pedaço acima de 500 kB é o mesmo da 1B (index e three.js).

### Tamanho por modelo (KB)

| Modelo | KB | Modelo | KB |
|---|---|---|---|
| creep_bad_flagbearer | 286,8 | n_creep_harpy_b | 171,8 |
| creep_bad_flagbearer_mega | 162,6 | n_creep_kobold_a | 131,4 |
| creep_bad_melee | 286,7 | n_creep_kobold_b | 157,7 |
| creep_bad_melee_mega | 162,5 | n_creep_kobold_c | 138,2 |
| creep_bad_siege | 111,0 | n_creep_ogre_lrg | 151,8 |
| creep_good_siege | 263,7 | n_creep_ogre_med | 180,1 |
| divine_sentinel_cube | 236,4 | n_creep_satyr_a | 171,7 |
| ice_giant01 | 375,2 | n_creep_satyr_b | 182,9 |
| lane_dire_ranged | 162,6 | n_creep_satyr_c | 175,1 |
| lane_dire_ranged_mega | 146,0 | n_creep_satyr_spawn_a | 289,7 |
| n_creep_ancient_frog | 356,9 | n_creep_satyr_spawn_b | 280,1 |
| n_creep_ancient_frog_mage | 388,1 | n_creep_tadpole_c | 154,3 |
| n_creep_beast | 178,1 | n_creep_tadpole_ranged_v2 | 297,3 |
| n_creep_black_dragon | 200,5 | n_creep_tadpole_v2 | 299,9 |
| n_creep_black_drake | 149,4 | n_creep_thunder_lizard_big | 177,7 |
| n_creep_centaur_lrg | 239,2 | n_creep_thunder_lizard_small | 175,3 |
| n_creep_centaur_med | 194,6 | n_creep_troll_dark_a | 166,2 |
| n_creep_forest_troll_berserker | 177,2 | n_creep_troll_dark_b | 168,0 |
| n_creep_forest_troll_high_priest | 249,2 | n_creep_vulture_a | 210,8 |
| n_creep_froglet | 325,8 | n_creep_vulture_b | 196,5 |
| n_creep_froglet_mage | 363,3 | n_creep_worg_large | 165,1 |
| n_creep_frostbitten_swollen01 | 238,3 | n_creep_worg_small | 134,9 |
| n_creep_furbolg_disrupter | 176,1 | neutral_creep_golem_a | 155,6 |
| n_creep_ghost_a | 174,5 | pine_cone | 152,6 |
| n_creep_ghost_b | 137,6 | radiant_flagbearer | 188,6 |
| n_creep_gnoll | 218,4 | radiant_flagbearer_mega | 187,0 |
| n_creep_golem_b | 132,5 | radiant_melee | 188,2 |
| n_creep_harpy_a | 160,0 | radiant_melee_mega | 188,3 |
| roshan | 317,0 | radiant_ranged | 129,6 |
| | | radiant_ranged_mega | 204,9 |

Total: 12.141,8 KB em 59 modelos. Maior: n_creep_ancient_frog_mage, 388,1 KB. Menor: creep_bad_siege, 111,0 KB.

## Critério 2: números do Roshan contra o jogo

Pendente. Não abri o Dota. O `test_conferencia_unidades.py` confere 260 números da selva contra os arquivos do jogo e passa. Para a conferência na tela do jogo (Aprender > Glossário > Roshan), estes são os 10 números da ficha do app em `/glossario/unidades/roshan`:

| # | Número | App | Jogo |
|---|---|---|---|
| 1 | Vida | 6.000 | a conferir |
| 2 | Regeneração | 20 | a conferir |
| 3 | Armadura | 30 | a conferir |
| 4 | Resistência mágica | 55% | a conferir |
| 5 | Dano | 75 | a conferir |
| 6 | Intervalo de ataque | 2,0 | a conferir |
| 7 | Alcance de ataque | 150 | a conferir |
| 8 | Velocidade | 270 | a conferir |
| 9 | Ouro | 200 a 290 | a conferir |
| 10 | XP | 400 | a conferir |

## Critérios 4 e 5: celular e primeira tela

Medido no `vite preview` com o celular simulado descrito acima.

- Primeira tela (mapa): primeira pintura em 0,94 s; o canvas do mapa aparece em 3,98 s. A página baixou 1.384 KB, dos quais 835 KB são o `mapa_2048.jpg`. Nenhum `.glb` e nenhum `Cena3D-*.js` foram baixados. No bundle, o Cena3D só entra por `import()` dinâmico.
- Peso de JavaScript da primeira tela (gzip, saída do build): antes (main, bad6abd) 432,4 KB (index 145,8 + useData 30,8 + Map3D 255,8); depois 438,0 KB (index 154,3 + jsx-runtime 3,4 + hooks 23,7 + Map3D 10,0 + three.js 246,5). Diferença: +5,6 KB de JS e +0,5 KB de CSS.
- Toque no Roshan (navegação para `/mapa/roshan_pit_top` com o mapa já aberto): 2,34 s até o primeiro quadro desenhado no canvas do modelo. Passa do alvo de 2 s em 0,34 s nessa simulação. Baixa só `roshan.glb` (317 KB) e o pedaço do Cena3D (23,5 KB gzip).
- Giro: 77 quadros por segundo no canvas do modelo, com a CPU 4× mais lenta (igual ao ritmo do requestAnimationFrame da máquina). Alvo de 30 cumprido.
- Memória em `/glossario/unidades`, trocando entre roshan, tormentor, creep_badguys_melee, kobold e centaur_khan: depois do aquecimento, quatro voltas de 5 trocas com coleta de lixo forçada deram heap de 10,4, 11,7, 11,8 e 11,9 MB. Nós do DOM ficaram em 2.132 e ouvintes em 291 da segunda volta em diante. Sempre um canvas só. Não cresce a cada troca. Memória de GPU não foi medida.
- Movimento reduzido emulado: o botão "Girar" some, e duas capturas com 1,5 s de intervalo saem idênticas (modelo parado).

## Critérios 1 e 6: cobertura

- `/glossario/unidades` mostra: Roshan e Tormentor 2; Creeps de lane 24 (12 Radiant, 12 Dire); Selva pequeno 10, médio 10, grande 8, ancient 10, anfíbio 7, total 45 na selva.
- Roshan: 6 habilidades, 5 com ícone do jogo. Força do Imortal mostra o ícone neutro com a inicial "F", como esperado.
- Conferi visualmente a ficha completa do Roshan e o painel do mapa em 1280×800 e 390×844: modelo, grade de números em fonte mono, tabela de crescimento e habilidades.

### Uma unidade de cada grupo e de cada lado

Aberta em `/glossario/unidades/<id>` no `vite preview`, Chromium do Playwright em 1280×800, sem limitação de rede. Para cada uma: captura de tela do modelo, conferência de 6 números da tela (vida, armadura, dano, alcance de ataque, velocidade, XP) contra `app/public/data/unidades/<id>.json`, e checagem de que cada ícone de habilidade carregou (imagem com largura natural acima de zero).

| Grupo | Unidade | Modelo baixado e desenhado | Números da tela | Habilidades |
|---|---|---|---|---|
| pequeno | Troll da Montanha Sacerdote | n_creep_forest_troll_high_priest.glb, girando | vida 450, armadura 0, dano 28 a 34, alcance 600, velocidade 290, XP 28: iguais ao JSON | 3 de 3 com ícone (Curar, Aura de Amplificação de Cura, Perfurante) |
| médio | Ogro Mago de Gelo | n_creep_ogre_lrg.glb, girando | 600, 0, 18 a 20, 100, 270, 48: iguais | 1 de 1 com ícone (Armadura de Gelo) |
| grande | Sátiro Atormentador | n_creep_satyr_a.glb, girando | 1.100, 2, 49 a 55, 100, 290, 90: iguais | 2 de 2 com ícone (Onda de Choque, Aura Profana) |
| ancient | Dragão Negro Ancestral | n_creep_black_dragon.glb, girando | 2.000, 4, 62 a 68, 300, 300, 124: iguais | 3 de 3 com ícone (Bola de Fogo, Ataque Explosivo, Aura do Couro de Dragão) |
| anfíbio | Mago Pantanoso Ancestral | n_creep_ancient_frog_mage.glb, girando | 1.250, 5, 58 a 62, 500, 300, 104: iguais | 2 de 2 com ícone (Bolha d'Água (Grande), Aura Ribeirinha) |
| Radiant | Criatura Maga | radiant_ranged.glb, girando | 300, 0, 21 a 26, 500, 325, 69: iguais | 1 de 1 com ícone (Perfurante) |
| Dire | Criatura Porta-Bandeira | creep_bad_flagbearer.glb, girando | 550, 2, 19 a 23, 100, 325, 57: iguais | 2 de 2 com ícone (Acanhada, Aura de Inspiração) |

Nas 7 fichas o sobretítulo traz o papel certo (monstro da selva; creep à distância, normal, Radiant; creep porta-bandeira, normal, Dire), o botão "Parar o giro" aparece e o console só mostra o aviso do three.js sobre `THREE.Clock` obsoleto, sem erro. Nenhuma delas usa o ícone neutro: todas as habilidades dessas unidades têm ícone do jogo. O ícone neutro só aparece na Força do Imortal do Roshan, como já conferido acima.

### Painel do mapa contra `docs/design/v1/Main.dc.html`

Aberto `/mapa/roshan_pit_top` em 1280×800 e em 390×844. Medido com `getComputedStyle` e comparado com os estilos escritos no design.

| Item | Design | App em 1280×800 | App em 390×844 |
|---|---|---|---|
| Posição do painel | coluna à direita, 380 a 460 px, borda à esquerda #1f2a31, fundo #0e151a, padding 28 px | coluna à direita, 420 px, borda e fundo iguais, padding 28 px | folha fixa embaixo, 390×473 px, sobre o mapa |
| Sobretítulo | Saira Condensed 13 px, espaçamento .14em, cor de destaque #f2b544 | Saira Condensed 13 px, 1,82 px (.14em), cor roxa #b08cff ("Neutro") | igual ao PC |
| Título do objetivo | Saira Condensed 700, 44 px | Saira Condensed 700, 40 px | 34 px |
| Título da ficha ("Roshan") | (não existe no design) | Saira Condensed 44 px | 34 px |
| Abas Básico e Avançado | duas abas, Básico ativa em #f2b544 | iguais | iguais |
| Grade de números | 2 colunas, 1 px entre células, raio 12 px, célula 12×14 px, rótulo 12 px #8b968f, valor JetBrains Mono 18 px #e9e4d8 | 2 colunas de 172 px, 1 px, raio 12 px, célula 12×14 px, rótulo 12 px #8b968f, valor JetBrains Mono 18 px #c8c2b5 | 2 colunas de 168 px, resto igual |
| Ordem no Básico | grade logo abaixo das abas | abas, modelo 3D (cerca de 345 px de altura), título "Roshan", grade, tabela de crescimento, habilidades | igual, com o modelo em 337×337 px ocupando a folha inteira antes dos números |
| Rodapé de fonte | JetBrains Mono 11 px | JetBrains Mono 11 px | igual |
| Rolagem horizontal | nenhuma | o painel rola 10 px na horizontal (scrollWidth 414, clientWidth 404) | 29 px (404 contra 375) |

A rolagem horizontal não vem mais da tabela de crescimento, que já fica num contêiner com `overflow-x: auto`. Vem das habilidades: a coluna de texto de 4 das 6 habilidades do Roshan (Rugido Vingativo, Porrada, Força do Imortal, Arremessar) fica com 292 px onde cabem 237, porque a grade de condições (`dl.condicoes`, 2 colunas de 145 px) não encolhe.

## Backlog (diferenças achadas)

1. Diagnóstico corrigido na rodada de correção: a tabela de crescimento do Roshan (744 px) já fica dentro de `.tabela-rolavel` com `overflow-x: auto` e rola sozinha. A rolagem horizontal do painel vem das habilidades; ver o item 6.
2. Tempo do toque até o primeiro quadro do Roshan: 2,34 s no celular simulado, acima dos 2 s. Opções: pré-carregar o Cena3D quando o painel abre, ou mostrar o poster enquanto o modelo carrega.
3. O canvas do mapa aparece em 3,98 s no celular simulado, por causa dos 835 KB do `mapa_2048.jpg`. Vem da 1B, não da 1C, mas o critério de primeira tela em 3 s depende de qual marco conta.
4. Vistos no caminho, anteriores à 1C: em 1280 px o item "Mapa" do menu fica por cima do logo; em 390 px o seletor "Rota real de replay" passa da borda direita; `favicon.ico` dá 404.
5. Pendente de pessoa: os 10 pares do Roshan contra o jogo e um teste em celular de verdade.
6. Habilidades com grade de condições estouram o painel do objetivo: 10 px de rolagem horizontal em 1280 e 29 px em 390. Dar `min-width: 0` à coluna de texto da habilidade e deixar a `dl.condicoes` cair para 1 coluna quando faltar largura.
7. Valores da grade no painel do mapa em #c8c2b5; o design pede #e9e4d8. Título do objetivo em 40 px no PC; o design pede 44 px.
8. Sobretítulo do painel em roxo (cor de neutro) em vez do dourado de destaque do design. Vem da 1B; decidir se a cor por lado é a regra nova e atualizar o design.
9. No celular (390×844) o modelo 3D ocupa a folha inteira (337 px) antes do título e dos números; no design os números vêm logo abaixo das abas. Avaliar modelo menor ou números antes do modelo no celular.
10. Enquadramento: a Criatura Porta-Bandeira Dire sai cortada embaixo no visualizador, e o Dragão Negro Ancestral fica escuro demais contra o fundo escuro. Ajustar o enquadramento pela caixa do modelo e a luz.
