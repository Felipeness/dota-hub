# Dota Hub

App que junta o mapa 7.41, as rotas dos PDFs 03 e 06 e o glossário. Os dados vêm dos projetos de análise em `Desktop/dota-imortal` (somente leitura).

## Instalar

```bash
pip install -e export[dev]
cd app && npm i
```

## Gerar os dados

```bash
cd export && python -m dota_export
```

Os JSON saem em `app/public/data/`. Nada de conteúdo é digitado à mão no app.

## Rodar

```bash
cd app && npm run dev
```

## Testar

```bash
cd export && python -m pytest -q
cd app && npm test && npm run build
```
