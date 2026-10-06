# Post-Spec Gate: Dota Hub fases 2 e 3

Spec: `docs/superpowers/specs/2026-10-06-dota-hub-fase2-3-design.md`. Data: 06/10/2026 (refeito depois da decisão do Felipe: fase 3 cancelada, fase 2 sem serviço próprio). Constitution: não existe (checagem pulada).

## Content Quality
- ✅ Sem detalhe de implementação: a varredura com os padrões da skill (frameworks, bancos, linguagens, nuvem e infraestrutura, protocolos), mais "AWS", "Lambda", "IndexedDB", "CORS", "HTTP", "fetch", "zod", "React" e "API", deu 0 ocorrências. A escolha técnica está em `docs/superpowers/decisions/2026-10-06-fase2-sem-backend.md`. "OpenDota" aparece como fonte de dados (decisão de produto) e "navegador" como lugar onde o app roda, não como tecnologia.
- ✅ Seções obrigatórias presentes: cenários de uso (Objetivo, Telas e jornadas), requisitos (Guardado e limite da fonte, Estados de erro, Requisitos não funcionais), critérios de sucesso (8 da fase 2).
- ✅ Fase 3 marcada como cancelada no topo, com data, motivo e onde ficou o conteúdo antigo.
- ✅ Nenhuma seção vazia.

## Requirement Quality
- ✅ Requisitos testáveis: 4 s e 1 s em 95% de 40 buscas; 5 contas conferidas; 9 de 10 rotas; 50 chamadas por janela de 60 s e 0,2 s entre chamadas em 200 consultas; esperas de 5, 10 e 20 s; zero chamadas ao reabrir dentro da validade; só a fonte na aba de rede.
- ✅ Critérios sem tecnologia.
- ✅ Critérios mensuráveis.
- ✅ Sem marcadores TBD, TODO ou NEEDS CLARIFICATION.

## Clarification Coverage
- ✅ Escopo: objetivo da fase 2, fora do escopo (inclui publicar, fotos e logos), usuário (o Felipe, no PC dele).
- ✅ Domínio e dados: 6 entidades e as relações (saíram Contador de uso por visitante e Versão publicada, que eram da fase 3).
- ✅ Interação e UX: 4 telas, tabela com 13 situações de erro e a mensagem de cada uma (limite da fonte, limite do dia, fonte fora do ar, conta privada, conta e time inexistentes, sem internet, guardado bloqueado).
- ✅ Não funcionais: desempenho, sem chave no cliente, limite da fonte respeitado pelo app, privacidade (nada sai do navegador além das chamadas à fonte, sem imagem de outro endereço, sem cookie), segurança da entrada, observabilidade local, rastreabilidade.

## Readiness
- ✅ A mudança veio do Felipe (06/10/2026): fase 3 cancelada, fase 2 no navegador.
- ⚠️ Uma decisão tomada sem perguntar e que pede o olho dele: tirar foto de conta e logo de time das telas, porque essas imagens vêm de servidores da Steam e quebrariam a regra "nada sai do navegador além das chamadas ao OpenDota".

## Decisão: WARN (não crítico)
Varreduras automáticas passam. O aviso é só a confirmação da decisão sobre fotos e logos.
