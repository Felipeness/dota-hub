# Pre-Implementation Audit: Dota Hub fase 1D (correções de visual e de uso)

Requisitos: auditoria `docs/superpowers/verificacao/2026-10-06-auditoria-ux.md` e o pedido do orquestrador (regra de verificação visual, textura, ícones de herói, ficha reformatada, rotas com mapa sempre visível e lista paginada, mais variações por fase usando as situações dos specs, glossário visual).

## Requisito → tarefa
| Requisito | Tarefa |
|---|---|
| 1. Avançado do objetivo legível | 1 (`.cartoes-texto`), 4 (verificação no painel) |
| 2. Logotipo fora da navegação | 1 (`.topo-marca`) |
| 2. Mapa quadrado, camadas sem tomar a tela | 4 (`div.mapa-3d`, camadas recolhíveis abaixo de 1180 px, duas colunas) |
| 3. Rotas: mapa à vista ao escolher | 7 (mapa preso à direita em tela larga, rolagem até o mapa no celular) |
| 3. Rotas: lista filtrada e paginada | 7 (`filtrarRotas` com lado, minuto e texto; 20 por vez; contagem) |
| 3. Rotas: busca que vaza | 1 (busca do topo volta ao lado do logotipo) |
| 4. Ficha de herói: resumo curto, números em destaque, resto recolhível | 9 (`dividirResumo`, `destaquesDoHeroi`, `<details>` no guia e nas fontes) |
| 5. Ícone do herói na lista | 8 (`retratos.atualizar_herois`), 9 (`urlDoRetrato` na lista e na ficha) |
| 6. Faixa quebrada na base da textura | 2 (`FORA_DO_MAPA` no `mapa.py`) |
| 6. Marcadores demais | 10 (`objetivosDosPassos`) |
| 6. Texto do passo difícil de ler | 10 (`ListaPassos` de três colunas; minuto vazio sem pílula) |
| 6. Mais variações por fase com as situações dos specs | 5 (campo `heroi` nas rotas), 10 (`variacoesDaFase` com as rotas do PDF 05 e as 11 colunas do índice) |
| 7. Cartões dos amigos legíveis | 1 |
| 8. Glossário visual: ícone de item | 8 (`retratos.atualizar_itens`), 11 (`IconeDoItem`, ícone na lista) |
| 8. Glossário visual: ícone de habilidade e unidade 3D | 11 (`UnidadeDoTermo` com `VisualizadorUnidade` e ícones das habilidades da 1C) |
| 8. Glossário visual: miniatura do lugar no mapa | 11 (`lugaresDoTermo` e `MapView` plano) |
| Verificação visual em 1440×900 e 390×844 antes do commit | Global Constraints, roteiro, passo em 1, 2, 3, 4, 6, 7, 9, 10, 11, 12; Task 13 |
| Conferir os arquivos que a 1C mudou | Pré-requisito do plano |
| Defeito A (rolagem lateral do glossário) | 1 |
| B (categorias com 32 px) | 1 |
| C (contraste do texto de exemplo) | 1 |
| D (link de rota com 21 px) | 1 |
| E (camadas fora da tela no celular) | 4 |
| F (rótulos crus na grade) | 3 |
| G (título do mapa cortado) | 4 |
| H (minutos escondidos) | 7 |
| I (situação sem aviso) | 7 |
| J (5,3 MB para listar rotas) | 5, 6, 7 |
| K (busca não fecha) | 12 |
| L (resultados sem respiro) | 12 |
| M (pílula de minuto vazia) | 10 |
| N (128 links soltos) | 10 |
| O (paredão de fontes) | 9 |
| P (aba abaixo da primeira tela) | 9 |
| Q (`favicon.ico` 404) | 1 |
| T (mapa 3D com faixa vazia) | 4 |
| R, S, U | 13 (registrados, fora do escopo) |

## Tarefa → requisito
Todas as 13 tarefas remetem a requisitos acima. A Task 3 (rótulos da grade) e a Task 12 (busca) vêm de defeitos achados na auditoria, não de pedido do Felipe; ambas são pequenas e mexem em telas que a fase já toca. Nenhuma tarefa fantasma.

## Nomes entre tarefas
Export: `mapa.FORA_DO_MAPA`, `mapa.textura_alinhada`; `rotas.CAMPOS_RESUMO`, `rotas.resumo`, `rotas._heroi_do_arquivo`, campo `heroi`; `__main__._gravar_rotas` (criada na 5, ganha validação e apaga o `rotas.json` na 7); `fontes.HEROIS_OPENDOTA`; `retratos.nomes_no_jogo`, `retratos.atualizar_herois`, `retratos.atualizar_itens`, `retratos.TAMANHO_RETRATO`, `retratos.TAMANHO_ITEM`; schemas `rotas_resumo`. App: `rotaResumoSchema`, `rotasResumoSchema`, `RotaResumo` (6, usados em 7 e 10); `minutoDaJanela`, `filtrarRotas` genérico, `rotaDaCelula`, `Lado` (6, usados em 7 e 10); `ListaPassos({ passos, fuga })` (10, de `RouteDetail.tsx`); `numerosDoObjetivo(detalhes, nomes)` e prop `nomes` (3, usada em 4); `urlDoRetrato`, `dividirResumo`, `destaquesDoHeroi` (9); `objetivosDosPassos`, `variacoesDaFase`, `Variacao` (10); `lugaresDoTermo`, `urlDoIconeDeItem`, `IconeDoItem`, `VisualDoTermo` (11). Classes novas: `.topo-marca`, `.cartoes-texto`, `.botao-camadas`, `.camadas`, `.grupo-camadas`, `.rotas-escolha`, `.rotas-mapa`, `.rotas-lista`, `.rotas-dica`, `.contagem`, `.retrato`, `.heroi-texto`, `.ficha-topo`, `.abertura`, `.recolhivel`, `.icone-item`, `.icone-item-lista`, `.termo-visual`, `.mini-mapa`, `.unidade-do-termo`, `.habilidades-curtas`; cada uma definida numa seção só, como o teste da Task 1 exige.

Mesma assinatura em quem define e em quem usa. O caminho dos arquivos bate entre export e app: `rotas_resumo.json`, `rotas/<id>.json`, `retratos/herois/<id>.webp`, `retratos/itens/<item>.webp`, `icones/<habilidade>.webp` (1C), `unidades/<id>.json` (1C).

## Consistência com as fases anteriores
- `ObjectivePanel` só ganha a prop opcional `nomes`; quem não passa continua compilando (o default é um mapa vazio).
- `filtrarRotas` passa a ser genérica e aceita tanto `Rota` quanto `RotaResumo`; os testes da 1A continuam com `Rota`.
- `construirIndice` passa a pedir só `id`, `pergunta` e `titulo` das rotas; o resumo tem os três.
- A troca de `rotas.json` por `rotas_resumo.json` e `rotas/<id>.json` tem ordem: a Task 5 grava os novos sem apagar o antigo, a 6 muda busca e glossário, a 7 muda a tela de Rotas e só então apaga o antigo. Nenhum commit intermediário deixa tela sem dado.
- A rota `/rotas/:id` continua a mesma; links antigos para rota funcionam.
- O teste de classe repetida pega o `.tabela-rolavel` que a 1C repete em `unidades.css`; a Task 1 já tira a cópia.
- Os textos novos de interface seguem a regra da fase 1 (nada de dado digitado à mão): rótulos de interface ("Selva a partir do", "Plano do guia", "Distância da torre") são texto de tela; todo número vem do export.

## Resultado
Sem inconsistência crítica. Execução liberada depois da 1C mesclada no `main`, na ordem das tarefas.
