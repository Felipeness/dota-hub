> **PLANO CANCELADO em 06/10/2026 por decisão do Felipe. NÃO EXECUTAR.** O app roda só no PC dele (`npm run dev` ou build local); publicar fica para quando ele pedir. A fase 2 foi refeita sem backend (`docs/superpowers/plans/2026-10-06-dota-hub-fase2.md`), então este plano nem tem mais a base em que se apoiava (pacote `api/`, Lambda, DynamoDB). Nenhum recurso da AWS deve ser criado a partir dele. Fica só como histórico.

# Dota Hub, fase 3 (publicação na AWS com teto de custo) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Pôr o Dota Hub no ar com link aberto (site estático e busca ao vivo no mesmo endereço), custo estimado abaixo de US$ 1 por mês com teto de US$ 5, alarme e corte automático, comandos de publicar, voltar e religar, e aviso de patch novo.

**Architecture:** Terraform descreve tudo em `infra/` (estado no S3 criado por `infra/bootstrap/`). O site fica num bucket S3 privado, uma pasta por versão (`<versao>/`), servido pelo CloudFront com OAC; publicar é subir a pasta nova e trocar o `origin_path`, então a troca é inteira (nunca meio novo, meio velho) e voltar é trocar de novo. O mesmo CloudFront manda `/api/*` para o API Gateway HTTP, que chama a Lambda da fase 2 (cache e contadores no DynamoDB). O custo tem Budgets de US$ 5 por etiqueta, SNS com e-mail e uma Lambda de corte que zera o throttling da API no aviso de 100%. A API ganha `/api/v1/patch` e o app mostra a faixa de patch novo.

**Tech Stack:** Terraform 1.10+ (`hashicorp/aws` 6.x, `hashicorp/archive` 2.x, `terraform test` com `mock_provider`), AWS (S3, CloudFront, CloudFront Functions, API Gateway HTTP, Lambda Node 22 arm64, DynamoDB, SNS, Budgets, CloudWatch), bash, AWS CLI v2. Código da fase 2 (`api/`, `app/`).

**Spec:** `docs/superpowers/specs/2026-10-06-dota-hub-fase2-3-design.md` (fase 3). Decisão técnica: `docs/superpowers/decisions/2026-10-06-fase2-3-stack.md`. Depende da fase 2 mesclada.

## Global Constraints

- Conta AWS pessoal do Felipe, sempre com `--profile pessoal` (ou `AWS_PROFILE=pessoal` dentro dos scripts) e região `us-east-1` fixada no provider. Nunca rodar nada sem perfil: o `[default]` não existe de propósito.
- O RTK do PC filtra a saída do `aws` e do `terraform`. Rode esses comandos dentro de scripts `.sh` com `bash script.sh` ou com `rtk proxy <comando>`.
- **Nenhum `terraform apply` antes da Task 8 (aprovação).** Até lá só `init`, `fmt`, `validate`, `test` e `plan`.
- Terraform é a fonte única: nada do que ele cria é mexido pelo console. A única exceção é o corte automático, que muda o throttling de propósito; o próximo `apply` desfaz.
- Nenhum segredo no repositório. O e-mail de alerta fica em `infra/terraform.tfvars` (fora do git); o estado do Terraform fica no S3.
- Etiqueta `projeto = "dota-hub"` em todo recurso (`default_tags` do provider).
- Textos em português do Brasil, sem travessão. Commits `type: descrição em minúscula`, sem menção a IA.

## Review Focus

1. Bucket do site e do estado privados (Block Public Access ligado) e site só por HTTPS (teste `terraform test` na Task 4).
2. A Lambda da busca só lê e escreve na própria tabela; a de corte só pode mudar o stage da própria API (política mínima, Tasks 5 e 6).
3. O corte pausa a busca e o site continua no ar; `religar-busca.sh` volta ao throttling do código (Tasks 6, 7 e 9).
4. Publicar troca a versão de uma vez; `voltar.sh` volta à anterior (Task 7).
5. O passo de PARAR (Task 8) mostra a conta, a lista de recursos e o custo antes de qualquer criação.

---

## File Structure

```
dota-hub/
  .gitignore                      (modificar) estado e build do Terraform, tfvars
  README.md                       (modificar) seção "Publicar"
  api/src/patch/patch.ts          patchAtual (consulta /constants/patch)
  api/src/http/responder.ts       (modificar) rota /api/v1/patch
  api/src/corte/corte.ts          comandoDePausa, pausarBusca
  api/src/corte/lambda.ts         handler do SNS
  api/package.json                (modificar) build das duas Lambdas
  app/src/live/contrato.ts        (modificar) patchSchema
  app/src/layout/FaixaDePatch.tsx patchMudou + faixa
  app/src/layout/Shell.tsx        (modificar) mostra a faixa
  contrato/exemplos/patch.json    gerado pelo teste da API
  infra/bootstrap/main.tf         bucket do estado (estado local)
  infra/versoes.tf                Terraform, providers, backend
  infra/variaveis.tf
  infra/site.tf                   S3 do site, OAC, função de rotas, CloudFront
  infra/busca.tf                  DynamoDB, Lambda, IAM, API HTTP, política de origem
  infra/custo.tf                  SNS, Budgets, Lambda de corte, alarmes
  infra/saidas.tf
  infra/testes/infra.tftest.hcl   testes com mock_provider (sem AWS)
  infra/terraform.tfvars.example
  scripts/publicar.sh, scripts/voltar.sh, scripts/religar-busca.sh, scripts/previa.sh
```

---

### Task 1: Patch atual na API e faixa de patch novo no app

**Files:**
- Create: `api/src/patch/patch.ts`, `api/src/patch/patch.test.ts`, `app/src/layout/FaixaDePatch.tsx`, `app/src/layout/FaixaDePatch.test.tsx`
- Modify: `api/src/fonte/schemas.ts`, `api/src/contrato.ts`, `api/src/http/responder.ts`, `api/src/http/responder.test.ts`, `api/src/fonte/amostras/` (nova amostra), `app/src/live/contrato.ts`, `app/src/live/contrato.test.ts`, `app/src/layout/Shell.tsx`

**Interfaces:**
- Consumes: `Consultar`, `VALIDADE`, `useAoVivo`, `Meta`
- Produces: `patchesFonte` (schema); `type PatchAtual = { patch: string; data: string; frescor: Frescor }`; `patchAtual(consultar): Promise<Resultado<PatchAtual, ErroBusca>>`; rota `GET /api/v1/patch`; `patchSchema` no app; `patchMudou(patchDosDados, patchAtual): boolean` (compara só `maior.menor`, então 7.41 e 7.41f são o mesmo patch); `FaixaDePatch({ patchDosDados })`.

- [ ] **Step 1: Gravar a amostra**: `curl -s https://api.opendota.com/api/constants/patch > api/src/fonte/amostras/patches.json` e acrescente `["patches", s.patchesFonte]` à tabela de `amostras.test.ts` e `"/constants/patch": "patches"` a `ROTAS_DA_FONTE` em `responder.test.ts`.

- [ ] **Step 2: Testes que falham**

```ts
// api/src/patch/patch.test.ts
import { ok } from "../resultado";
import type { Consultar } from "../consulta";
import { patchAtual } from "./patch";

const frescor = { buscadoEm: 1, vencido: false };

it("o patch atual é o último da lista da fonte", async () => {
  const consultar: Consultar = async () => ok({ dados: [{ name: "7.40", date: "2025-12-15" }, { name: "7.41", date: "2026-03-24" }] as never, frescor });
  expect(await patchAtual(consultar)).toEqual({ ok: true, valor: { patch: "7.41", data: "2026-03-24", frescor } });
});

it("lista vazia é erro de formato da fonte", async () => {
  const consultar: Consultar = async () => ok({ dados: [] as never, frescor });
  expect(await patchAtual(consultar)).toMatchObject({ ok: false, erro: { codigo: "FONTE_FORMATO" } });
});
```

Acrescente `["patch", "/api/v1/patch"]` à tabela `it.each` de exemplos em `responder.test.ts`.

```tsx
// app/src/layout/FaixaDePatch.test.tsx
import { render, screen } from "@testing-library/react";
import { FaixaDePatch, patchMudou } from "./FaixaDePatch";

afterEach(() => vi.unstubAllGlobals());

it.each([
  ["7.41", "7.41", false], ["7.41", "7.41f", false], ["7.41", "7.42", true], ["7.41", "8.0", true],
])("dados %s e jogo %s mudou = %s", (dados, atual, mudou) => {
  expect(patchMudou(dados, atual)).toBe(mudou);
});

it("mostra a faixa quando o patch do jogo é outro", async () => {
  vi.stubGlobal("fetch", async () => new Response(JSON.stringify({ dados: { patch: "7.42", data: "2026-11-01", frescor: { buscadoEm: 0, vencido: false } } })));
  render(<FaixaDePatch patchDosDados="7.41" />);
  expect(await screen.findByRole("status")).toHaveTextContent("Saiu o patch 7.42. Os dados deste app são do 7.41.");
});

it("não mostra nada quando a consulta falha", async () => {
  vi.stubGlobal("fetch", async () => new Response("", { status: 502 }));
  const { container } = render(<FaixaDePatch patchDosDados="7.41" />);
  await new Promise((r) => setTimeout(r, 0));
  expect(container).toBeEmptyDOMElement();
});
```

- [ ] **Step 3: Rodar e ver falhar**: `cd api && npm test` e `cd app && npm test` → FAIL.

- [ ] **Step 4: Implementação**

Em `api/src/fonte/schemas.ts`: `export const patchesFonte = z.array(z.object({ name: z.string(), date: z.string() }));`. Em `api/src/contrato.ts`: `export type PatchAtual = { patch: string; data: string; frescor: Frescor };`.

```ts
// api/src/patch/patch.ts
import { VALIDADE } from "../contas/contas";
import type { Consultar } from "../consulta";
import type { PatchAtual } from "../contrato";
import { erroBusca, type ErroBusca } from "../erros";
import { patchesFonte } from "../fonte/schemas";
import { falha, ok, type Resultado } from "../resultado";

export async function patchAtual(consultar: Consultar): Promise<Resultado<PatchAtual, ErroBusca>> {
  const patches = await consultar({ caminho: "/constants/patch", schema: patchesFonte, validadeS: VALIDADE.constantes });
  if (!patches.ok) return patches;
  const ultimo = patches.valor.dados.at(-1);
  if (!ultimo) return falha(erroBusca("FONTE_FORMATO", "A fonte não listou nenhum patch."));
  return ok({ patch: ultimo.name, data: ultimo.date, frescor: patches.valor.frescor });
}
```

Em `responder.ts`, acrescente à tabela `ROTAS`: `{ nome: "patch", padrao: /^\/api\/v1\/patch$/, executar: (_, __, consultar) => patchAtual(consultar) }`.

Em `app/src/live/contrato.ts`: `export const patchSchema = z.object({ patch: z.string(), data: z.string(), frescor: frescorSchema });` e, em `contrato.test.ts`, a linha `["patch", comDados(patchSchema)]`.

```tsx
// app/src/layout/FaixaDePatch.tsx
import { patchSchema } from "../live/contrato";
import { useAoVivo } from "../live/useAoVivo";

const MAIOR_MENOR = /^\d+\.\d+/;

export function patchMudou(patchDosDados: string, patchAtual: string): boolean {
  const dados = patchDosDados.match(MAIOR_MENOR)?.[0];
  const atual = patchAtual.match(MAIOR_MENOR)?.[0];
  return Boolean(dados && atual && dados !== atual);
}

export function FaixaDePatch({ patchDosDados }: { patchDosDados: string }) {
  const atual = useAoVivo("/patch", patchSchema);
  if (atual.estado !== "ok" || !patchMudou(patchDosDados, atual.dados.patch)) return null;
  return <p role="status" className="faixa-patch">Saiu o patch {atual.dados.patch}. Os dados deste app são do {patchDosDados}.</p>;
}
```

Em `Shell.tsx`, logo abaixo do topo: `{meta.estado === "ok" && <FaixaDePatch patchDosDados={meta.dados.patch} />}`. Em `styles.css`, `.faixa-patch` de largura total, fundo âmbar escuro, texto claro, uma linha.

- [ ] **Step 5: Rodar e ver passar**: `cd api && npx vitest run -u src/http && npm test` (cria `contrato/exemplos/patch.json`) e `cd app && npm test` → passam.
- [ ] **Step 6: Commit**: `git add api app contrato && git commit -m "feat: warn when a new game patch is out"`

---

### Task 2: Lambda de corte da busca

**Files:**
- Create: `api/src/corte/corte.ts`, `api/src/corte/corte.test.ts`, `api/src/corte/lambda.ts`
- Modify: `api/package.json`

**Interfaces:**
- Consumes: `Registrar`, `registrarJson`
- Produces: `type ClienteApi = { send(comando: UpdateStageCommand): Promise<unknown> }`; `comandoDePausa(idDaApi): UpdateStageCommand` (throttling 0 no stage `$default`); `pausarBusca(cliente, idDaApi, registrar): Promise<void>`; `handler(evento: SNSEvent)`; bundle `api/dist/corte/index.mjs`.

- [ ] **Step 1: Teste que falha**

```ts
// api/src/corte/corte.test.ts
import type { UpdateStageCommand } from "@aws-sdk/client-apigatewayv2";
import { comandoDePausa, pausarBusca } from "./corte";

it("o comando zera o throttling da rota padrão do stage $default", () => {
  expect(comandoDePausa("abc123").input).toEqual({
    ApiId: "abc123", StageName: "$default", DefaultRouteSettings: { ThrottlingBurstLimit: 0, ThrottlingRateLimit: 0 },
  });
});

it("pausa a busca e registra o corte", async () => {
  const enviados: UpdateStageCommand[] = [];
  const registros: string[] = [];
  await pausarBusca({ send: async (c) => { enviados.push(c); return {}; } }, "abc123", (r) => registros.push(r.operacao));
  expect(enviados).toHaveLength(1);
  expect(registros).toEqual(["corte"]);
});
```

- [ ] **Step 2: Rodar e ver falhar**: `npm i @aws-sdk/client-apigatewayv2 && npm i -D @types/aws-lambda && npm test` → FAIL.

- [ ] **Step 3: Implementação**

```ts
// api/src/corte/corte.ts
import { UpdateStageCommand } from "@aws-sdk/client-apigatewayv2";
import type { Registrar } from "../registro";

export type ClienteApi = { send(comando: UpdateStageCommand): Promise<unknown> };

export function comandoDePausa(idDaApi: string): UpdateStageCommand {
  return new UpdateStageCommand({
    ApiId: idDaApi, StageName: "$default",
    DefaultRouteSettings: { ThrottlingBurstLimit: 0, ThrottlingRateLimit: 0 },
  });
}

export async function pausarBusca(cliente: ClienteApi, idDaApi: string, registrar: Registrar): Promise<void> {
  await cliente.send(comandoDePausa(idDaApi));
  registrar({ nivel: "warn", operacao: "corte", detalhe: `busca ao vivo pausada pelo teto de custo (API ${idDaApi})` });
}
```

```ts
// api/src/corte/lambda.ts
import { ApiGatewayV2Client } from "@aws-sdk/client-apigatewayv2";
import type { SNSEvent } from "aws-lambda";
import { z } from "zod";
import { registrarJson } from "../registro";
import { pausarBusca } from "./corte";

const ambiente = z.object({ ID_DA_API: z.string().min(1) }).parse(process.env);
const cliente = new ApiGatewayV2Client({});

// o tópico de corte só recebe o aviso de 100% do orçamento: qualquer mensagem nele pausa a busca
export async function handler(_evento: SNSEvent): Promise<void> {
  await pausarBusca(cliente, ambiente.ID_DA_API, registrarJson);
}
```

Em `api/package.json`, troque o script `build` por:

```json
"build:busca": "esbuild src/http/lambda.ts --bundle --platform=node --target=node22 --format=esm --outfile=dist/busca/index.mjs --banner:js=\"import{createRequire}from'module';const require=createRequire(import.meta.url);\"",
"build:corte": "esbuild src/corte/lambda.ts --bundle --platform=node --target=node22 --format=esm --outfile=dist/corte/index.mjs --banner:js=\"import{createRequire}from'module';const require=createRequire(import.meta.url);\"",
"build": "npm run build:busca && npm run build:corte"
```

- [ ] **Step 4: Rodar e ver passar**: `npm test && npm run typecheck && npm run build` → passa e existem `dist/busca/index.mjs` e `dist/corte/index.mjs`.
- [ ] **Step 5: Commit**: `git add api && git commit -m "feat: add cost cutoff lambda that pauses live search"`

---

### Task 3: Terraform do estado (bootstrap) e base do projeto Terraform

**Files:**
- Create: `infra/bootstrap/main.tf`, `infra/versoes.tf`, `infra/variaveis.tf`, `infra/saidas.tf`, `infra/terraform.tfvars.example`, `infra/testes/infra.tftest.hcl`
- Modify: `.gitignore`

**Interfaces:**
- Produces: bucket de estado `dota-hub-tfstate-<account_id>` (versionado, privado, `prevent_destroy`); backend S3 parcial em `infra/` (o nome do bucket entra por `-backend-config`); variáveis `email_alertas`, `versao_do_site` (padrão `"inicial"`), `teto_mensal_usd` (5), `vazao_rps` (5), `rajada` (10).

- [ ] **Step 1: Código**

```hcl
# infra/bootstrap/main.tf
# Cria só o bucket do estado do Terraform. Estado local, rodado uma vez.
terraform {
  required_version = ">= 1.10"
  required_providers {
    aws = { source = "hashicorp/aws", version = "~> 6.0" }
  }
}

provider "aws" {
  region  = "us-east-1"
  profile = "pessoal"
  default_tags { tags = { projeto = "dota-hub" } }
}

data "aws_caller_identity" "atual" {}

resource "aws_s3_bucket" "estado" {
  bucket = "dota-hub-tfstate-${data.aws_caller_identity.atual.account_id}"
  lifecycle { prevent_destroy = true }
}

resource "aws_s3_bucket_versioning" "estado" {
  bucket = aws_s3_bucket.estado.id
  versioning_configuration { status = "Enabled" }
}

resource "aws_s3_bucket_public_access_block" "estado" {
  bucket                  = aws_s3_bucket.estado.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

output "bucket_do_estado" { value = aws_s3_bucket.estado.bucket }
```

```hcl
# infra/versoes.tf
terraform {
  required_version = ">= 1.10"
  required_providers {
    aws     = { source = "hashicorp/aws", version = "~> 6.0" }
    archive = { source = "hashicorp/archive", version = "~> 2.0" }
  }
  backend "s3" {
    key          = "dota-hub/infra.tfstate"
    region       = "us-east-1"
    profile      = "pessoal"
    encrypt      = true
    use_lockfile = true
  }
}

provider "aws" {
  region  = "us-east-1"
  profile = "pessoal"
  default_tags { tags = { projeto = "dota-hub" } }
}

data "aws_caller_identity" "atual" {}
data "aws_region" "atual" {}
```

```hcl
# infra/variaveis.tf
variable "email_alertas" {
  type        = string
  description = "E-mail que recebe os alarmes de custo e de erro (fica em terraform.tfvars, fora do git)."
}

variable "versao_do_site" {
  type        = string
  default     = "inicial"
  description = "Pasta do bucket que o CloudFront serve. O publicar.sh troca."
}

variable "teto_mensal_usd" {
  type    = number
  default = 5
}

variable "vazao_rps" {
  type        = number
  default     = 5
  description = "Requisições por segundo na API da busca (todas as pessoas juntas)."
}

variable "rajada" {
  type    = number
  default = 10
}
```

```hcl
# infra/saidas.tf
output "url_do_site" { value = "https://${aws_cloudfront_distribution.site.domain_name}" }
output "bucket_do_site" { value = aws_s3_bucket.site.bucket }
output "id_da_distribuicao" { value = aws_cloudfront_distribution.site.id }
output "id_da_api" { value = aws_apigatewayv2_api.busca.id }
```

```hcl
# infra/terraform.tfvars.example
# Copie para terraform.tfvars (fora do git) e preencha.
email_alertas = "seu-email@exemplo.com"
```

```hcl
# infra/testes/infra.tftest.hcl
# Testes do plano sem tocar na AWS (providers falsos). Rodar: terraform -chdir=infra init -backend=false && terraform -chdir=infra test
# command = apply com provider falso: nada vai para a AWS e os atributos calculados ganham valores falsos conhecidos.
mock_provider "aws" {}
mock_provider "archive" {}

variables {
  email_alertas  = "teste@exemplo.com"
  versao_do_site = "v1"
}
```

Acrescente ao `.gitignore`:

```gitignore
.terraform/
*.tfstate
*.tfstate.*
infra/.build/
infra/terraform.tfvars
infra/versao.auto.tfvars
infra/backend_override.tf
scripts/versoes.txt
```

(O `.terraform.lock.hcl` de cada pasta vai para o git.)

- [ ] **Step 2: Validar sem criar nada**

```bash
cat > /tmp/validar-bootstrap.sh <<'EOF'
set -euo pipefail
terraform -chdir=infra/bootstrap init
terraform -chdir=infra/bootstrap validate
terraform -chdir=infra/bootstrap plan
EOF
bash /tmp/validar-bootstrap.sh
```

Expected: `validate` ok e `plan` com "4 to add" (bucket, versionamento, bloqueio público e nada mais). **Não rode `apply`.** Guarde a saída do `plan` para a Task 8.

- [ ] **Step 3: Commit**: `git add infra .gitignore && git commit -m "chore: add terraform state bootstrap and base config"`

---

### Task 4: Terraform do site (S3, OAC, função de rotas, CloudFront)

**Files:**
- Create: `infra/site.tf`
- Modify: `infra/testes/infra.tftest.hcl`

**Interfaces:**
- Consumes: `var.versao_do_site`, `aws_apigatewayv2_api.busca` (Task 5), `aws_cloudfront_origin_request_policy.busca` (Task 5)
- Produces: `aws_s3_bucket.site`, `aws_cloudfront_distribution.site` (padrão: S3 em `/<versao>` com a função de rotas e cabeçalhos de segurança; `/api/*`: API sem cache), `aws_cloudfront_function.rotas_do_app`.

- [ ] **Step 1: Testes que falham** (acrescente ao `infra.tftest.hcl`)

```hcl
run "site_privado_so_https_e_servindo_a_versao" {
  command = apply

  assert {
    condition     = aws_s3_bucket_public_access_block.site.block_public_policy && aws_s3_bucket_public_access_block.site.restrict_public_buckets
    error_message = "o bucket do site não pode ser público"
  }
  assert {
    condition     = aws_cloudfront_distribution.site.default_cache_behavior[0].viewer_protocol_policy == "redirect-to-https"
    error_message = "o site precisa redirecionar para HTTPS"
  }
  assert {
    condition     = one([for o in aws_cloudfront_distribution.site.origin : o.origin_path if o.origin_id == "site"]) == "/v1"
    error_message = "a origem do site precisa apontar para a pasta da versão"
  }
  assert {
    condition     = aws_cloudfront_distribution.site.ordered_cache_behavior[0].path_pattern == "/api/*"
    error_message = "a busca ao vivo precisa estar em /api/* no mesmo endereço"
  }
  assert {
    condition     = aws_cloudfront_distribution.site.price_class == "PriceClass_All"
    error_message = "sem PriceClass_All os pontos da América do Sul ficam de fora"
  }
}
```

- [ ] **Step 2: Rodar e ver falhar**: `bash -c "terraform -chdir=infra init -backend=false && terraform -chdir=infra test"` → FAIL (recursos não existem).

- [ ] **Step 3: Código**

```hcl
# infra/site.tf
resource "aws_s3_bucket" "site" {
  bucket = "dota-hub-site-${data.aws_caller_identity.atual.account_id}"
}

resource "aws_s3_bucket_public_access_block" "site" {
  bucket                  = aws_s3_bucket.site.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_cloudfront_origin_access_control" "site" {
  name                              = "dota-hub-site"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# Caminho sem extensão (/herois/medusa) vira /index.html: o react-router desenha a tela.
# Arquivo que falta (/data/x.json) continua 404, e o app mostra "dados indisponíveis".
resource "aws_cloudfront_function" "rotas_do_app" {
  name    = "dota-hub-rotas-do-app"
  runtime = "cloudfront-js-2.0"
  publish = true
  code    = <<-JS
    function handler(event) {
      var request = event.request;
      var ultimo = request.uri.split("/").pop();
      if (ultimo.indexOf(".") === -1) request.uri = "/index.html";
      return request;
    }
  JS
}

data "aws_cloudfront_cache_policy" "otimizado" { name = "Managed-CachingOptimized" }
data "aws_cloudfront_cache_policy" "sem_cache" { name = "Managed-CachingDisabled" }
data "aws_cloudfront_response_headers_policy" "seguranca" { name = "Managed-SecurityHeadersPolicy" }

resource "aws_cloudfront_distribution" "site" {
  enabled             = true
  comment             = "dota-hub"
  default_root_object = "index.html"
  price_class         = "PriceClass_All"
  http_version        = "http2and3"
  is_ipv6_enabled     = true

  origin {
    origin_id                = "site"
    domain_name              = aws_s3_bucket.site.bucket_regional_domain_name
    origin_path              = "/${var.versao_do_site}"
    origin_access_control_id = aws_cloudfront_origin_access_control.site.id
  }

  origin {
    origin_id   = "busca"
    domain_name = replace(aws_apigatewayv2_api.busca.api_endpoint, "https://", "")
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "https-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  default_cache_behavior {
    target_origin_id           = "site"
    viewer_protocol_policy     = "redirect-to-https"
    allowed_methods            = ["GET", "HEAD"]
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    cache_policy_id            = data.aws_cloudfront_cache_policy.otimizado.id
    response_headers_policy_id = data.aws_cloudfront_response_headers_policy.seguranca.id
    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.rotas_do_app.arn
    }
  }

  ordered_cache_behavior {
    path_pattern             = "/api/*"
    target_origin_id         = "busca"
    viewer_protocol_policy   = "redirect-to-https"
    allowed_methods          = ["GET", "HEAD", "OPTIONS"]
    cached_methods           = ["GET", "HEAD"]
    compress                 = true
    cache_policy_id          = data.aws_cloudfront_cache_policy.sem_cache.id
    origin_request_policy_id = aws_cloudfront_origin_request_policy.busca.id
  }

  restrictions {
    geo_restriction { restriction_type = "none" }
  }

  viewer_certificate { cloudfront_default_certificate = true }
}

data "aws_iam_policy_document" "site" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.site.arn}/*"]
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.site.arn]
    }
  }
  # ListBucket faz o S3 responder 404 (e não 403) para arquivo que falta
  statement {
    actions   = ["s3:ListBucket"]
    resources = [aws_s3_bucket.site.arn]
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [aws_cloudfront_distribution.site.arn]
    }
  }
}

resource "aws_s3_bucket_policy" "site" {
  bucket = aws_s3_bucket.site.id
  policy = data.aws_iam_policy_document.site.json
}
```

- [ ] **Step 4: Rodar**: o teste só passa depois da Task 5 (a distribuição referencia a API). Rode `terraform -chdir=infra fmt -check` e siga para a Task 5; o `terraform test` desta task roda no fim da Task 5.
- [ ] **Step 5: Commit**: `git add infra && git commit -m "chore: add terraform for the static site and cdn"`

---

### Task 5: Terraform da busca ao vivo (DynamoDB, Lambda, API HTTP)

**Files:**
- Create: `infra/busca.tf`
- Modify: `infra/testes/infra.tftest.hcl`

**Interfaces:**
- Consumes: `api/dist/busca/index.mjs` (Task 2), `var.vazao_rps`, `var.rajada`
- Produces: `aws_dynamodb_table.cache` (`pk`, TTL em `ttl`), `aws_lambda_function.busca` (Node 22, arm64, 256 MB, 10 s, `TABELA_CACHE`), `aws_apigatewayv2_api.busca` com rota `GET /api/{proxy+}` e stage `$default` com throttling, `aws_cloudfront_origin_request_policy.busca` (repassa `CloudFront-Viewer-Address` e a query), log de 7 dias.

- [ ] **Step 1: Testes que falham**

```hcl
run "busca_com_throttling_cache_com_ttl_e_politica_minima" {
  command = apply

  assert {
    condition     = aws_apigatewayv2_stage.padrao.default_route_settings[0].throttling_rate_limit == 5 && aws_apigatewayv2_stage.padrao.default_route_settings[0].throttling_burst_limit == 10
    error_message = "a API precisa de throttling (5 por segundo, rajada 10)"
  }
  assert {
    condition     = aws_dynamodb_table.cache.billing_mode == "PAY_PER_REQUEST" && aws_dynamodb_table.cache.ttl[0].attribute_name == "ttl"
    error_message = "a tabela precisa ser sob demanda e apagar sozinha pelo atributo ttl"
  }
  assert {
    condition     = aws_lambda_function.busca.runtime == "nodejs22.x" && aws_lambda_function.busca.timeout == 10
    error_message = "a busca roda em Node 22 com 10 s de tempo máximo"
  }
  assert {
    condition     = aws_cloudwatch_log_group.busca.retention_in_days == 7
    error_message = "log da busca guardado por 7 dias"
  }
  assert {
    condition     = aws_apigatewayv2_route.busca.route_key == "GET /api/{proxy+}"
    error_message = "a API só aceita GET em /api/*"
  }
}
```

- [ ] **Step 2: Rodar e ver falhar**: `bash -c "terraform -chdir=infra test"` → FAIL.

- [ ] **Step 3: Código**

```hcl
# infra/busca.tf
resource "aws_dynamodb_table" "cache" {
  name         = "dota-hub-cache"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "pk"
  attribute {
    name = "pk"
    type = "S"
  }
  ttl {
    attribute_name = "ttl"
    enabled        = true
  }
}

resource "aws_cloudwatch_log_group" "busca" {
  name              = "/aws/lambda/dota-hub-busca"
  retention_in_days = 7
}

data "aws_iam_policy_document" "assumir_lambda" {
  statement {
    actions = ["sts:AssumeRole"]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "busca" {
  name               = "dota-hub-busca"
  assume_role_policy = data.aws_iam_policy_document.assumir_lambda.json
}

data "aws_iam_policy_document" "busca" {
  statement {
    actions   = ["dynamodb:GetItem", "dynamodb:PutItem", "dynamodb:UpdateItem"]
    resources = [aws_dynamodb_table.cache.arn]
  }
  statement {
    actions   = ["logs:CreateLogStream", "logs:PutLogEvents"]
    resources = ["${aws_cloudwatch_log_group.busca.arn}:*"]
  }
}

resource "aws_iam_role_policy" "busca" {
  role   = aws_iam_role.busca.id
  policy = data.aws_iam_policy_document.busca.json
}

data "archive_file" "busca" {
  type        = "zip"
  source_file = "${path.module}/../api/dist/busca/index.mjs"
  output_path = "${path.module}/.build/busca.zip"
}

resource "aws_lambda_function" "busca" {
  function_name    = "dota-hub-busca"
  role             = aws_iam_role.busca.arn
  runtime          = "nodejs22.x"
  architectures    = ["arm64"]
  handler          = "index.handler"
  filename         = data.archive_file.busca.output_path
  source_code_hash = data.archive_file.busca.output_base64sha256
  memory_size      = 256
  timeout          = 10
  environment {
    variables = { TABELA_CACHE = aws_dynamodb_table.cache.name }
  }
  depends_on = [aws_cloudwatch_log_group.busca]
}

resource "aws_apigatewayv2_api" "busca" {
  name          = "dota-hub-busca"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_integration" "busca" {
  api_id                 = aws_apigatewayv2_api.busca.id
  integration_type       = "AWS_PROXY"
  integration_uri        = aws_lambda_function.busca.invoke_arn
  payload_format_version = "2.0"
  timeout_milliseconds   = 10000
}

resource "aws_apigatewayv2_route" "busca" {
  api_id    = aws_apigatewayv2_api.busca.id
  route_key = "GET /api/{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.busca.id}"
}

# O corte automático (custo.tf) zera este throttling fora do Terraform, de propósito.
# Religar = terraform apply, que devolve os valores daqui.
resource "aws_apigatewayv2_stage" "padrao" {
  api_id      = aws_apigatewayv2_api.busca.id
  name        = "$default"
  auto_deploy = true
  default_route_settings {
    throttling_rate_limit  = var.vazao_rps
    throttling_burst_limit = var.rajada
  }
}

resource "aws_lambda_permission" "api" {
  statement_id  = "api-gateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.busca.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.busca.execution_arn}/*/*"
}

resource "aws_cloudfront_origin_request_policy" "busca" {
  name = "dota-hub-busca"
  cookies_config { cookie_behavior = "none" }
  headers_config {
    header_behavior = "whitelist"
    headers { items = ["CloudFront-Viewer-Address"] }
  }
  query_strings_config { query_string_behavior = "all" }
}
```

- [ ] **Step 4: Rodar e ver passar**: `bash -c "terraform -chdir=infra fmt -check && terraform -chdir=infra validate && terraform -chdir=infra test"` → os 2 `run` passam.
- [ ] **Step 5: Commit**: `git add infra && git commit -m "chore: add terraform for live search lambda, api and cache"`

---

### Task 6: Terraform do custo (orçamento, alarmes, corte automático)

**Files:**
- Create: `infra/custo.tf`
- Modify: `infra/testes/infra.tftest.hcl`

**Interfaces:**
- Consumes: `api/dist/corte/index.mjs`, `aws_apigatewayv2_api.busca`, `aws_cloudwatch_log_group.busca`, `var.email_alertas`, `var.teto_mensal_usd`
- Produces: tópicos SNS `dota-hub-alertas` (e-mail) e `dota-hub-corte` (Lambda de corte); `aws_budgets_budget.projeto` (US$ 5 por mês, etiqueta `projeto=dota-hub`, avisos de 40% e 80% reais e 100% previsto no tópico de alertas; 100% real nos dois tópicos); `aws_lambda_function.corte`; alarmes de erro da busca.

- [ ] **Step 1: Testes que falham**

```hcl
run "teto_de_5_dolares_com_quatro_avisos_e_corte" {
  command = apply

  assert {
    condition     = aws_budgets_budget.projeto.limit_amount == "5.00" && aws_budgets_budget.projeto.time_unit == "MONTHLY"
    error_message = "o teto é de US$ 5 por mês"
  }
  assert {
    condition     = length(aws_budgets_budget.projeto.notification) == 4
    error_message = "avisos de 40%, 80%, 100% previsto e 100% real"
  }
  assert {
    condition     = anytrue([for f in aws_budgets_budget.projeto.cost_filter : contains(f.values, "user:projeto$dota-hub")])
    error_message = "o orçamento precisa contar só este projeto"
  }
  assert {
    condition     = aws_sns_topic_subscription.corte.protocol == "lambda" && aws_sns_topic_subscription.email.protocol == "email"
    error_message = "o corte é a Lambda e o alerta vai por e-mail"
  }
}
```

- [ ] **Step 2: Rodar e ver falhar**: `bash -c "terraform -chdir=infra test"` → FAIL.

- [ ] **Step 3: Código**

```hcl
# infra/custo.tf
resource "aws_sns_topic" "alertas" { name = "dota-hub-alertas" }
resource "aws_sns_topic" "corte" { name = "dota-hub-corte" }

resource "aws_sns_topic_subscription" "email" {
  topic_arn = aws_sns_topic.alertas.arn
  protocol  = "email"
  endpoint  = var.email_alertas
}

locals {
  topicos = { alertas = aws_sns_topic.alertas.arn, corte = aws_sns_topic.corte.arn }
}

data "aws_iam_policy_document" "publicar_no_topico" {
  for_each = local.topicos
  statement {
    actions   = ["sns:Publish"]
    resources = [each.value]
    principals {
      type        = "Service"
      identifiers = ["budgets.amazonaws.com", "cloudwatch.amazonaws.com"]
    }
  }
}

resource "aws_sns_topic_policy" "publicar_no_topico" {
  for_each = local.topicos
  arn      = each.value
  policy   = data.aws_iam_policy_document.publicar_no_topico[each.key].json
}

resource "aws_budgets_budget" "projeto" {
  name         = "dota-hub-mensal"
  budget_type  = "COST"
  limit_amount = format("%.2f", var.teto_mensal_usd)
  limit_unit   = "USD"
  time_unit    = "MONTHLY"

  cost_filter {
    name   = "TagKeyValue"
    values = ["user:projeto$dota-hub"]
  }

  dynamic "notification" {
    for_each = [40, 80]
    content {
      comparison_operator       = "GREATER_THAN"
      threshold                 = notification.value
      threshold_type            = "PERCENTAGE"
      notification_type         = "ACTUAL"
      subscriber_sns_topic_arns = [aws_sns_topic.alertas.arn]
    }
  }

  notification {
    comparison_operator       = "GREATER_THAN"
    threshold                 = 100
    threshold_type            = "PERCENTAGE"
    notification_type         = "FORECASTED"
    subscriber_sns_topic_arns = [aws_sns_topic.alertas.arn]
  }

  notification {
    comparison_operator       = "GREATER_THAN"
    threshold                 = 100
    threshold_type            = "PERCENTAGE"
    notification_type         = "ACTUAL"
    subscriber_sns_topic_arns = [aws_sns_topic.alertas.arn, aws_sns_topic.corte.arn]
  }
}

resource "aws_cloudwatch_log_group" "corte" {
  name              = "/aws/lambda/dota-hub-corte"
  retention_in_days = 30
}

resource "aws_iam_role" "corte" {
  name               = "dota-hub-corte"
  assume_role_policy = data.aws_iam_policy_document.assumir_lambda.json
}

data "aws_iam_policy_document" "corte" {
  statement {
    actions   = ["apigateway:PATCH"]
    resources = ["arn:aws:apigateway:${data.aws_region.atual.region}::/apis/${aws_apigatewayv2_api.busca.id}/stages/*"]
  }
  statement {
    actions   = ["logs:CreateLogStream", "logs:PutLogEvents"]
    resources = ["${aws_cloudwatch_log_group.corte.arn}:*"]
  }
}

resource "aws_iam_role_policy" "corte" {
  role   = aws_iam_role.corte.id
  policy = data.aws_iam_policy_document.corte.json
}

data "archive_file" "corte" {
  type        = "zip"
  source_file = "${path.module}/../api/dist/corte/index.mjs"
  output_path = "${path.module}/.build/corte.zip"
}

resource "aws_lambda_function" "corte" {
  function_name    = "dota-hub-corte"
  role             = aws_iam_role.corte.arn
  runtime          = "nodejs22.x"
  architectures    = ["arm64"]
  handler          = "index.handler"
  filename         = data.archive_file.corte.output_path
  source_code_hash = data.archive_file.corte.output_base64sha256
  memory_size      = 128
  timeout          = 10
  environment {
    variables = { ID_DA_API = aws_apigatewayv2_api.busca.id }
  }
  depends_on = [aws_cloudwatch_log_group.corte]
}

resource "aws_lambda_permission" "sns" {
  statement_id  = "sns-corte"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.corte.function_name
  principal     = "sns.amazonaws.com"
  source_arn    = aws_sns_topic.corte.arn
}

resource "aws_sns_topic_subscription" "corte" {
  topic_arn = aws_sns_topic.corte.arn
  protocol  = "lambda"
  endpoint  = aws_lambda_function.corte.arn
}

# Erro da busca: a Lambda escreve nivel "error" com console.error, que sai com ERROR na linha do log.
resource "aws_cloudwatch_log_metric_filter" "erro_da_busca" {
  name           = "dota-hub-erro-da-busca"
  log_group_name = aws_cloudwatch_log_group.busca.name
  pattern        = "ERROR"
  metric_transformation {
    name          = "ErrosDaBusca"
    namespace     = "DotaHub"
    value         = "1"
    default_value = "0"
  }
}

resource "aws_cloudwatch_metric_alarm" "erro_da_busca" {
  alarm_name          = "dota-hub-erro-da-busca"
  namespace           = "DotaHub"
  metric_name         = "ErrosDaBusca"
  statistic           = "Sum"
  period              = 300
  evaluation_periods  = 1
  threshold           = 1
  comparison_operator = "GreaterThanOrEqualToThreshold"
  treat_missing_data  = "notBreaching"
  alarm_actions       = [aws_sns_topic.alertas.arn]
}

resource "aws_cloudwatch_metric_alarm" "lambda_falhando" {
  alarm_name          = "dota-hub-lambda-falhando"
  namespace           = "AWS/Lambda"
  metric_name         = "Errors"
  dimensions          = { FunctionName = aws_lambda_function.busca.function_name }
  statistic           = "Sum"
  period              = 300
  evaluation_periods  = 1
  threshold           = 1
  comparison_operator = "GreaterThanOrEqualToThreshold"
  treat_missing_data  = "notBreaching"
  alarm_actions       = [aws_sns_topic.alertas.arn]
}
```

- [ ] **Step 4: Rodar e ver passar**: `bash -c "terraform -chdir=infra fmt -check && terraform -chdir=infra validate && terraform -chdir=infra test"` → os 3 `run` passam (site, busca e custo).
- [ ] **Step 5: Commit**: `git add infra && git commit -m "chore: add cost budget, alerts and automatic search cutoff"`

---

### Task 7: Scripts de publicar, voltar, religar e prévia

**Files:**
- Create: `scripts/publicar.sh`, `scripts/voltar.sh`, `scripts/religar-busca.sh`, `scripts/previa.sh`, `scripts/comum.sh`
- Modify: `README.md`

**Interfaces:**
- Produces: `bash scripts/previa.sh` (plano com backend local, sem criar nada); `bash scripts/publicar.sh` (testes, build, upload da pasta nova, troca de versão, espera, invalidação, teste de fumaça, guarda as 5 últimas versões); `bash scripts/voltar.sh` (volta à versão anterior); `bash scripts/religar-busca.sh` (devolve o throttling depois de um corte).

- [ ] **Step 1: Código**

```bash
# scripts/comum.sh
# Configuração comum dos scripts. Sempre a conta pessoal; nunca o perfil padrão.
set -euo pipefail
export AWS_PROFILE=pessoal
export AWS_REGION=us-east-1
RAIZ="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
INFRA="$RAIZ/infra"
VERSOES="$RAIZ/scripts/versoes.txt"

saida() { terraform -chdir="$INFRA" output -raw "$1"; }

trocar_versao() {
  echo "versao_do_site = \"$1\"" > "$INFRA/versao.auto.tfvars"
  terraform -chdir="$INFRA" apply
  aws cloudfront wait distribution-deployed --id "$(saida id_da_distribuicao)"
  aws cloudfront create-invalidation --distribution-id "$(saida id_da_distribuicao)" --paths "/*" > /dev/null
}

testar_no_ar() {
  local url
  url="$(saida url_do_site)"
  curl -fsS -o /dev/null "$url/" && echo "site ok: $url"
  curl -fsS -o /dev/null "$url/herois" && echo "rota do app ok"
  curl -sS "$url/api/v1/patch" | head -c 200 && echo
}
```

```bash
# scripts/publicar.sh
# Publica uma versão nova inteira: só troca o site depois que a pasta nova está toda no S3.
source "$(dirname "$0")/comum.sh"
VERSAO="$(date -u +%Y%m%dT%H%M%S)-$(git -C "$RAIZ" rev-parse --short HEAD)"

(cd "$RAIZ/export" && python -m pytest -q && python -m dota_export)
(cd "$RAIZ/api" && npm test && npm run build)
(cd "$RAIZ/app" && npm test && npm run build)

BUCKET="$(saida bucket_do_site)"
aws s3 sync "$RAIZ/app/dist" "s3://$BUCKET/$VERSAO" --exclude "index.html" --cache-control "public,max-age=300"
aws s3 sync "$RAIZ/app/dist/assets" "s3://$BUCKET/$VERSAO/assets" --cache-control "public,max-age=31536000,immutable"
aws s3 cp "$RAIZ/app/dist/index.html" "s3://$BUCKET/$VERSAO/index.html" --cache-control "no-cache"

trocar_versao "$VERSAO"
echo "$VERSAO" >> "$VERSOES"
testar_no_ar

# guarda as 5 últimas versões para poder voltar; apaga as mais velhas
head -n -5 "$VERSOES" | while read -r velha; do aws s3 rm "s3://$BUCKET/$velha" --recursive > /dev/null; done
tail -n 5 "$VERSOES" > "$VERSOES.tmp" && mv "$VERSOES.tmp" "$VERSOES"
echo "publicado: $VERSAO"
```

```bash
# scripts/voltar.sh
# Volta o site para a versão publicada antes da atual.
source "$(dirname "$0")/comum.sh"
ANTERIOR="$(tail -n 2 "$VERSOES" | head -n 1)"
ATUAL="$(tail -n 1 "$VERSOES")"
[ "$ANTERIOR" != "$ATUAL" ] || { echo "não há versão anterior em $VERSOES"; exit 1; }
trocar_versao "$ANTERIOR"
head -n -1 "$VERSOES" > "$VERSOES.tmp" && mv "$VERSOES.tmp" "$VERSOES"
testar_no_ar
echo "voltou para: $ANTERIOR"
```

```bash
# scripts/religar-busca.sh
# Depois de um corte por custo: devolve o throttling escrito no Terraform.
source "$(dirname "$0")/comum.sh"
terraform -chdir="$INFRA" apply -target=aws_apigatewayv2_stage.padrao
echo "busca ao vivo religada"
```

```bash
# scripts/previa.sh
# Mostra o que seria criado, sem criar nada: estado local temporário e só leituras na AWS.
source "$(dirname "$0")/comum.sh"
aws sts get-caller-identity --query "Account" --output text
(cd "$RAIZ/api" && npm run build)
terraform -chdir="$INFRA/bootstrap" init -input=false > /dev/null
terraform -chdir="$INFRA/bootstrap" plan -input=false -no-color
printf 'terraform {\n  backend "local" {}\n}\n' > "$INFRA/backend_override.tf"
trap 'rm -f "$INFRA/backend_override.tf"' EXIT
terraform -chdir="$INFRA" init -input=false -reconfigure > /dev/null
terraform -chdir="$INFRA" plan -input=false -no-color
```

No `README.md`, seção "Publicar": pré-requisitos (Terraform 1.10+, AWS CLI v2, perfil `pessoal`, `infra/terraform.tfvars` com o e-mail), primeira vez (Task 9), `bash scripts/publicar.sh`, `bash scripts/voltar.sh`, `bash scripts/religar-busca.sh`, e "Patch novo": rodar os projetos de análise no patch novo, conferir os PDFs, depois `bash scripts/publicar.sh` (o rodapé e a faixa mostram o patch dos dados).

- [ ] **Step 2: Conferir os scripts**: `bash -n scripts/*.sh` (sintaxe) e, se houver `shellcheck`, `shellcheck scripts/*.sh`. Nada mais roda nesta task.
- [ ] **Step 3: Commit**: `git add scripts README.md && git commit -m "chore: add publish, rollback and re-enable scripts"`

---

### Task 8: PARAR e mostrar recursos e custo ao orquestrador

**Files:**
- Create: `docs/superpowers/verificacao/2026-10-06-fase3-aprovacao.md`

Esta task não cria nada na AWS. O executor **para aqui** e só segue para a Task 9 depois que o orquestrador responder "aprovado" (ele confirma com o Felipe).

- [ ] **Step 1: Prévia real**

`cp infra/terraform.tfvars.example infra/terraform.tfvars`, preencha `email_alertas` com o e-mail que o orquestrador passar, e rode `bash scripts/previa.sh > /tmp/previa.txt 2>&1`. A prévia só lê (conta, políticas gerenciadas do CloudFront) e não grava estado remoto.

- [ ] **Step 2: Escrever o pedido de aprovação**

Em `docs/superpowers/verificacao/2026-10-06-fase3-aprovacao.md`:

1. **Conta e região**: o número da conta que `aws sts get-caller-identity` devolveu (tem que ser a pessoal, não a de trabalho) e `us-east-1`.
2. **Recursos**: tabela com cada recurso dos dois `plan` (tipo e nome), copiados de `/tmp/previa.txt`. Esperado: 4 do bootstrap e cerca de 37 do `infra/` (S3, OAC, função, CloudFront, política de origem, DynamoDB, 2 Lambdas, 2 papéis IAM com políticas, 2 grupos de log, API, integração, rota, stage, 2 permissões de Lambda, 2 tópicos SNS com políticas e assinaturas, orçamento, filtro de log e 2 alarmes). Qualquer recurso fora dessa lista: explique.
3. **Custo estimado por mês** (uso da spec: até 10 pessoas, 3.000 páginas, 5.000 buscas):

| Item | Uso estimado | Custo |
|---|---|---|
| CloudFront (dados e requisições) e CloudFront Functions | cerca de 10 GB, 100 mil requisições | US$ 0 (nível gratuito permanente: 1 TB, 10 milhões e 2 milhões de funções) |
| S3 (site com 5 versões e estado) | cerca de 200 MB | US$ 0,01 |
| API Gateway HTTP | 5.000 requisições | US$ 0,01 |
| Lambda (busca e corte) | 5.000 execuções de 0,3 s com 256 MB | US$ 0 (nível gratuito permanente) |
| DynamoDB sob demanda | cerca de 30 mil escritas e 25 mil leituras | US$ 0,05 |
| CloudWatch (logs de 7 dias, 1 métrica, 2 alarmes) | menos de 50 MB | US$ 0 (nível gratuito: 5 GB, 10 métricas, 10 alarmes) |
| SNS e Budgets | e-mails e 1 orçamento a mais | US$ 0 (o 2º orçamento da conta é gratuito) |
| **Total** | | **cerca de US$ 0,10** |

4. **Teto e pior caso**: teto de US$ 5 com avisos em 40%, 80%, 100% previsto e 100% real. Ataque à busca: o throttling de 5 por segundo limita a cerca de 430 mil chamadas por dia (cerca de US$ 1 por dia) até o corte automático, que roda quando o Budgets publica o aviso (o Budgets atualiza o gasto algumas vezes por dia). Risco aceito e documentado: ataque ao site estático (não à API) não tem corte automático, só os avisos por e-mail.
5. **O que acontece depois da aprovação**: `terraform apply` do bootstrap, `init` do `infra/` com o bucket de estado, `terraform apply` do `infra/` (o mesmo plano mostrado), confirmação da assinatura de e-mail do SNS (o Felipe clica no link que chega), primeira publicação e ativação da etiqueta de custo.

- [ ] **Step 3: Parar**

Mande ao orquestrador o caminho do arquivo e a frase: "Fase 3 pronta para o primeiro apply na conta pessoal <número>. Recursos e custo em docs/superpowers/verificacao/2026-10-06-fase3-aprovacao.md. Aguardo aprovado para criar." Não rode nenhum `apply` até a resposta.

- [ ] **Step 4: Commit**: `git add docs/superpowers/verificacao && git commit -m "docs: add phase 3 resources and cost for approval"`

---

### Task 9: Primeiro apply e primeira publicação (só depois do "aprovado")

**Files:**
- Modify: `infra/.terraform.lock.hcl`, `infra/bootstrap/.terraform.lock.hcl` (gerados)

- [ ] **Step 1: Criar o estado**

```bash
cat > /tmp/primeiro-apply.sh <<'EOF'
source scripts/comum.sh
terraform -chdir=infra/bootstrap apply
BUCKET_ESTADO="$(terraform -chdir=infra/bootstrap output -raw bucket_do_estado)"
rm -f infra/backend_override.tf
terraform -chdir=infra init -reconfigure -backend-config="bucket=$BUCKET_ESTADO"
terraform -chdir=infra apply
EOF
bash /tmp/primeiro-apply.sh
```

Confira que o `plan` mostrado pelo `apply` do `infra/` tem os mesmos recursos aprovados na Task 8. Se aparecer recurso a mais, responda "no" e volte ao orquestrador.

- [ ] **Step 2: Confirmar o e-mail e publicar**

Peça ao orquestrador que o Felipe confirme a assinatura do SNS (e-mail "AWS Notification - Subscription Confirmation"). Depois: `bash scripts/publicar.sh`. Expected: termina com "publicado: <versao>" e o teste de fumaça mostra "site ok" e a resposta de `/api/v1/patch`.

- [ ] **Step 3: Ativar a etiqueta de custo**

A etiqueta `projeto` aparece para ativação até 24 h depois do primeiro recurso. No dia seguinte:

```bash
cat > /tmp/etiqueta.sh <<'EOF'
source scripts/comum.sh
aws ce update-cost-allocation-tags-status --cost-allocation-tags-status TagKey=projeto,Status=Active
aws ce list-cost-allocation-tags --tag-keys projeto
EOF
bash /tmp/etiqueta.sh
```

Expected: `"Status": "Active"`. Até lá, o orçamento do projeto mostra zero e vale o orçamento geral da conta.

- [ ] **Step 4: Commit**: `git add infra/.terraform.lock.hcl infra/bootstrap/.terraform.lock.hcl && git commit -m "chore: lock terraform providers after first apply"`

---

### Task 10: Verificação de fora (critérios 1 a 7 da fase 3)

**Files:**
- Create: `docs/superpowers/verificacao/2026-10-06-fase3.md`

- [ ] **Step 1: Site e HTTPS (critério 1)**: num celular com 4G (ou DevTools "Fast 4G", 360×800, cache limpo), abra a URL de `terraform output url_do_site`: primeira tela em menos de 3 s. `curl -sI http://<dominio>/` → `301` para `https://`. `curl -sI https://<dominio>/herois/medusa` → `200` (rota do app). `curl -sI https://<dominio>/data/nao-existe.json` → `404`.
- [ ] **Step 2: Publicar e voltar (critério 2)**: cronometre `bash scripts/publicar.sh` (até 15 min) e `bash scripts/voltar.sh` (até 10 min). Depois publique de novo para ficar na versão mais nova.
- [ ] **Step 3: Limite do visitante (critério 5)**: `for i in $(seq 1 100); do curl -s -o /dev/null -w "%{http_code}\n" "https://<dominio>/api/v1/busca?q=teste$i"; done | sort | uniq -c` → depois de 20 no minuto, 429.
- [ ] **Step 4: Alarme e corte (critério 4)**: com o Felipe avisado, publique uma mensagem de teste no tópico de corte e cronometre:

```bash
cat > /tmp/teste-corte.sh <<'EOF'
source scripts/comum.sh
TOPICO="$(aws sns list-topics --query "Topics[?ends_with(TopicArn, ':dota-hub-corte')].TopicArn" --output text)"
aws sns publish --topic-arn "$TOPICO" --message "teste de corte do dota-hub"
sleep 60
curl -s -o /dev/null -w "%{http_code}\n" "$(saida url_do_site)/api/v1/patch"
curl -s -o /dev/null -w "%{http_code}\n" "$(saida url_do_site)/"
EOF
bash /tmp/teste-corte.sh
```

Expected: a API responde 429 (o app mostra "A busca ao vivo está pausada agora…") e o site responde 200. Se o API Gateway recusar throttling 0 (erro no log `/aws/lambda/dota-hub-corte`), troque em `comandoDePausa` para `ThrottlingBurstLimit: 1, ThrottlingRateLimit: 0.01`, ajuste o teste da Task 2, publique de novo e repita. Depois `bash scripts/religar-busca.sh` e confira `200` em `/api/v1/patch`. Para o e-mail: publique uma mensagem no tópico de alertas (`dota-hub-alertas`) e confirme com o Felipe que chegou.
- [ ] **Step 5: Patch novo (critério 6)**: abra o site e, no DevTools, mude a resposta de `/api/v1/patch` (Overrides) para `"patch":"7.42"`: a faixa "Saiu o patch 7.42. Os dados deste app são do 7.41." aparece. Sem override, ela não aparece.
- [ ] **Step 6: Segredos (critério 7)**: `git grep -nE "AKIA|aws_secret|api_key|password"` e `curl -s https://<dominio>/assets/*.js` (os arquivos listados no `index.html`) com `grep -iE "AKIA|secret|api_key"` → nada.
- [ ] **Step 7: Custo (critério 3)**: 7 dias depois da publicação, Cost Explorer filtrado por `projeto = dota-hub` (ou `aws ce get-cost-and-usage` num script): anote o gasto. Abaixo de US$ 0,25 na semana está dentro da estimativa.
- [ ] **Step 8: Registro e commit**

Grave em `docs/superpowers/verificacao/2026-10-06-fase3.md` cada critério com o número medido e a data. Commit:

```bash
git add docs/superpowers/verificacao
git commit -m "test: verify phase 3 publication criteria"
```
