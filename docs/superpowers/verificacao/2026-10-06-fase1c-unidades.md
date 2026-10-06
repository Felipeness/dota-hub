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
- Conferi visualmente a ficha completa do Roshan e o painel do mapa em 1280×800 e 390×844: modelo, grade de números em fonte mono, tabela de crescimento e habilidades. Não abri uma unidade de cada grupo de selva nem comparei lado a lado com `docs/design/v1/Main.dc.html`.

## Backlog (diferenças achadas)

1. Tabela de crescimento do Roshan (8 colunas, 744 px) estoura o painel do objetivo em 360, 390 e também em 1280 px: o painel inteiro ganha rolagem horizontal. Colocar a tabela num contêiner com `overflow-x: auto`.
2. Tempo do toque até o primeiro quadro do Roshan: 2,34 s no celular simulado, acima dos 2 s. Opções: pré-carregar o Cena3D quando o painel abre, ou mostrar o poster enquanto o modelo carrega.
3. O canvas do mapa aparece em 3,98 s no celular simulado, por causa dos 835 KB do `mapa_2048.jpg`. Vem da 1B, não da 1C, mas o critério de primeira tela em 3 s depende de qual marco conta.
4. Vistos no caminho, anteriores à 1C: em 1280 px o item "Mapa" do menu fica por cima do logo; em 390 px o seletor "Rota real de replay" passa da borda direita; `favicon.ico` dá 404.
5. Pendente de pessoa: os 10 pares do Roshan contra o jogo e um teste em celular de verdade.
