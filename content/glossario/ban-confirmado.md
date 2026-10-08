---
id: ban-confirmado
titulo: ban confirmado
patch: 7.41
categoria: partida
fontes:
- dota-tier1/work/CONTRATO_CHAVES.md (linhas 29 e 38)
- app/src/times/ComoVencer.tsx (SELO_DO_BAN)
sinonimos:
- ban confirmado
- ban não confirmado
- ban não testado
- ban_confirma
---
## Básico
Selo do ban: confirmado passou no teste completo, não confirmado foi testado e falhou, não testado tem poucos jogos.

## Avançado
ban_confirma é true (confirmado) só se o herói foi banido contra o time em 15+ jogos, o win rate dele cai pelo menos 5 pp quando banido, o time aproveita bem o herói no próprio pick, e a queda passa no teste estatístico (p corrigido < 0,05, ver 'p corrigido'). É false (não confirmado) quando foi testado mas não passou nesses critérios, e fica null/'não testado' quando o herói foi banido contra o time menos de 8 vezes, pouco demais para testar. Em 07/10/2026 nenhum herói das 12 equipes atingiu 'confirmado': todos os bans sugeridos hoje são 'indício pelo pick', com confiança baixa.
