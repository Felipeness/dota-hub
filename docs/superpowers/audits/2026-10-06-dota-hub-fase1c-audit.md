# Pre-Implementation Audit: Dota Hub fase 1C (unidades em 3D)

## Requisito → tarefa
| Requisito do adendo | Tarefa |
|---|---|
| Origem: arquivos do jogo instalado, nada à mão | 1 (leitor, VPK, ferramenta com hash), 3, 4, 5 |
| Texto oficial em português, inglês como reserva marcada | 2 (`Textos.buscar`, `texto_em_ingles`), 9 (selo "texto em inglês") |
| Só a animação parada | 4 (`escolher_parada`, segunda exportação só com ela) |
| Versões de creep por aparência (normal, super e mega dos dois lados, com cerco) | 3 (`ids_de_lane`, 24 unidades) |
| Unidade sem modelo: ficha sem 3D com aviso | 3 (`modelo: null`), 8 (aviso sem botão) |
| Glossário: seção Unidades agrupada (chefes, lane, selva por tamanho e anfíbio) | 7 (`agruparUnidades`), 10 |
| Ficha: modelo animado, gira sozinho, arrastar e pinça | 8 (`OrbitControls` com giro automático) |
| Ficha: nome, papel, grade de números como o jogo | 3 (`numeros`), 7 (`gradeDeNumeros`), 9 |
| Habilidades: ícone, nome, descrição, condições e valores | 2, 4 (ícones), 9 |
| "O que isso muda para você" com fonte e origem, ou "ainda não escrito" | 3 (`_com_o_que_muda`), 6, 9 |
| Crescimento: selva a cada 7:30; Roshan e Tormentor em tabela; Tormentor sem vida fixa | 3 (`_crescimento_por_nivel`, `_tabela`, `vida: None`), 7, 9 |
| Painel do mapa: Roshan e Tormentor com a ficha; camp com os tipos possíveis | 7 (`tiposDoCamp`), 11 |
| Busca por unidade e habilidade em português e inglês | 3 (`indice` com habilidades), 12 |
| Critério 1 (cobertura) | 3, 14 |
| Critério 2 (números) | 3, 5, 14 |
| Critério 3 (400 KB, 15 MB) | 4, 5, 14 |
| Critério 4 (2 s no celular, 30 quadros) | 8, 14 |
| Critério 5 (primeira tela sem modelo) | 8 (import sob demanda), 10 (rota `lazy`), 14 |
| Critério 6 (habilidades visíveis completas, internas fora) | 2, 3 |
| Erro: sem 3D, imagem parada | 8, 13 |
| Erro: modelo que não carrega, nova tentativa | 8 |
| Erro: dados ausentes | 10, 11 (`Indisponivel`) |
| Erro: habilidade sem ícone | 9 (inicial do nome) |
| Erro: menos movimento | 8 (giro e animação parados), 9 (CSS) |
| Erro: jogo não instalado, sem apagar dados antigos | 1 (`DotaNaoEncontrado` antes de gravar qualquer coisa) |
| Um modelo por vez na memória | 8 (`useGLTF.clear` ao desmontar), 14 (medição) |
| Acessibilidade: texto alternativo, pausa por teclado | 8 (`aria-label` da figura, botão "Parar o giro") |
| Rastreabilidade: patch e fonte na ficha | 3 (`patch`, `fontes`), 9 (rodapé) |

## Tarefa → requisito
As 14 tarefas remetem a requisitos acima. Nenhuma tarefa fantasma. A Task 13 (imagem parada) atende só ao estado de erro "sem 3D", que o orquestrador pediu.

## Nomes entre tarefas
Export: `kv.ler`; `jogo.DotaNaoEncontrado/VRF/bibliotecas/vpk/vrf/listar/extrair/textos` (chaves `unidades`, `habilidades`, `textos_pt`, `textos_en`); `ferramentas.conferir/instalar`; `habilidades.Textos/numero/por_nivel/valores_brutos/descricao/condicoes/valores/habilidade`; `fontes.FARM/farm`; `unidades.Jogo/ids_de_lane/tipos_de_camp/numeros/ficha/todas/indice/icones_usados/caminhos_de_modelo`; `icones.disponiveis/atualizar`; `modelos.LIMITE_BYTES/LIMITE_TOTAL_BYTES/nome/animacoes/escolher_parada/exportar/otimizar/atualizar/conferir_tamanhos`. App: `habilidadeSchema`, `numerosSchema`, `crescimentoSchema`, `unidadeSchema`, `unidadeResumoSchema`, `unidadesSchema`, `tipoCampSchema`, `campsSchema`; `gradeDeNumeros`, `textoDoCrescimento`, `tiposDoCamp`, `agruparUnidades`, `urlDoModelo`, `urlDoPoster` (em `ficha.ts`); `foscar` (em `materiais.ts`); `VisualizadorUnidade`, `Cena3D`, `FichaUnidade`, `UnidadesPage`, `UnidadeDoObjetivo`, `PaginaPoster`, `docsDeUnidades`. Mesma assinatura em quem define e em quem usa (conferido rodando os blocos do plano numa cópia: 44 testes do export e 75 do app passam, `tsc -b` limpo).

Formatos JSON do export batem com os schemas zod campo a campo: unidade (17 números com 5 que aceitam nulo, crescimento com os dois formatos discriminados por `tipo`), resumo (com `camps` e `habilidades`), tipo de camp (`ouro` com dois números).

## Consistência com a 1A e a 1B
- `ObjectivePanel` só ganha a prop opcional `unidade` e passa a exportar `GradeNumeros`; toda chamada da 1A e da 1B continua compilando.
- `construirIndice` ganha a fonte opcional `unidades`, no mesmo formato das fontes opcionais da 1B; `Achado["tipo"]` ganha dois valores e o `ETIQUETA` do `SearchBox` ganha as duas chaves (sem elas o `tsc` falha, e o plano diz isso).
- `__main__.py` só acrescenta o bloco de unidades antes da gravação dos pacotes; os arquivos da 1B não mudam.
- A rota `/glossario/unidades/:id?` entra antes de `/glossario/:id`; a rota `/poster/:modelo` fica fora do `Shell`.
- A Task 6 usa o mesmo formato de conteúdo (`conteudo.carregar`, `origem`, `fontes`) e a mesma regra de "sem fonte não entra" da 1B.

## Resultado
Sem inconsistência crítica. Execução liberada depois da 1B mesclada no `main`.
