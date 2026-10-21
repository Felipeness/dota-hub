#!/usr/bin/env bash
# Cria ou atualiza a Lambda de trajetos (conta pessoal, us-east-2). Idempotente.
# Uso, de dentro de replay/: bash infra.sh
# Precisa de Go e Python no PATH. Com o RTK, rode via `bash infra.sh` (ele filtra a saída do aws direto).
set -euo pipefail
export MSYS_NO_PATHCONV=1 AWS_PAGER=""

P="--profile pessoal --region us-east-2"
ACCOUNT=968000946695
BUCKET=dota-hub-$ACCOUNT
FN=dota-hub-replay
ROLE=$FN-role
LOG_GROUP=/aws/lambda/$FN
MEMORY_MB=${MEMORY_MB:-1024}
ORIGINS='["https://d22phpj0gnvpfs.cloudfront.net","http://localhost:5173"]'
BUILD=$(mktemp -d)
command -v cygpath >/dev/null && BUILD=$(cygpath -m "$BUILD") # Go e Python do Windows não entendem /tmp
trap 'rm -r "$BUILD"' EXIT

echo "== build"
GOOS=linux GOARCH=arm64 CGO_ENABLED=0 go build -tags lambda.norpc -trimpath -ldflags="-s -w" -o "$BUILD/bootstrap" ./cmd/lambda
# zip feito em Python para gravar o bit de execução do bootstrap (o zip do Windows não grava)
python -I -c "
import sys, zipfile
info = zipfile.ZipInfo('bootstrap'); info.external_attr = 0o755 << 16; info.compress_type = zipfile.ZIP_DEFLATED
with zipfile.ZipFile(sys.argv[1] + '/function.zip', 'w') as z, open(sys.argv[1] + '/bootstrap', 'rb') as f: z.writestr(info, f.read())
" "$BUILD"

echo "== log group (14 dias)"
aws logs create-log-group --log-group-name "$LOG_GROUP" $P 2>/dev/null || true
aws logs put-retention-policy --log-group-name "$LOG_GROUP" --retention-in-days 14 $P

echo "== papel IAM"
TRUST='{"Version":"2012-10-17","Statement":[{"Effect":"Allow","Principal":{"Service":"lambda.amazonaws.com"},"Action":"sts:AssumeRole"}]}'
POLICY=$(cat <<JSON
{"Version":"2012-10-17","Statement":[
 {"Effect":"Allow","Action":["s3:GetObject","s3:PutObject"],"Resource":"arn:aws:s3:::$BUCKET/data/replays/*"},
 {"Effect":"Allow","Action":"s3:ListBucket","Resource":"arn:aws:s3:::$BUCKET","Condition":{"StringLike":{"s3:prefix":"data/replays/*"}}},
 {"Effect":"Allow","Action":["logs:CreateLogStream","logs:PutLogEvents"],"Resource":"arn:aws:logs:us-east-2:$ACCOUNT:log-group:$LOG_GROUP:*"}
]}
JSON
)
if ! aws iam get-role --role-name "$ROLE" $P >/dev/null 2>&1; then
  aws iam create-role --role-name "$ROLE" --assume-role-policy-document "$TRUST" $P >/dev/null
  echo "papel criado; esperando propagar"
  sleep 10
fi
aws iam put-role-policy --role-name "$ROLE" --policy-name replays --policy-document "$POLICY" $P
ROLE_ARN=arn:aws:iam::$ACCOUNT:role/$ROLE

echo "== função"
CONFIG=(--runtime provided.al2023 --handler bootstrap --timeout 120 --memory-size "$MEMORY_MB"
  --environment "Variables={BUCKET=$BUCKET}" --role "$ROLE_ARN")
if aws lambda get-function --function-name "$FN" $P >/dev/null 2>&1; then
  aws lambda update-function-code --function-name "$FN" --zip-file "fileb://$BUILD/function.zip" $P >/dev/null
  aws lambda wait function-updated --function-name "$FN" $P
  aws lambda update-function-configuration --function-name "$FN" "${CONFIG[@]}" $P >/dev/null
else
  aws lambda create-function --function-name "$FN" --architectures arm64 --zip-file "fileb://$BUILD/function.zip" "${CONFIG[@]}" $P >/dev/null
fi
aws lambda wait function-updated --function-name "$FN" $P
# teto de custo: no máximo 2 replays sendo lidos ao mesmo tempo. Conta nova tem limite de 10 execuções
# simultâneas e a AWS exige 10 livres, então a reserva só entra quando a cota subir; até lá o teto é o da conta.
if ! aws lambda put-function-concurrency --function-name "$FN" --reserved-concurrent-executions 2 $P >/dev/null 2>&1; then
  echo "AVISO: sem reserva de concorrência (limite da conta: $(aws lambda get-account-settings $P --query AccountLimit.ConcurrentExecutions --output text))"
fi

echo "== function URL"
CORS="{\"AllowOrigins\":$ORIGINS,\"AllowMethods\":[\"GET\"],\"MaxAge\":86400}"
if aws lambda get-function-url-config --function-name "$FN" $P >/dev/null 2>&1; then
  aws lambda update-function-url-config --function-name "$FN" --auth-type NONE --cors "$CORS" $P >/dev/null
else
  aws lambda create-function-url-config --function-name "$FN" --auth-type NONE --cors "$CORS" $P >/dev/null
fi
STATEMENTS=$(aws lambda get-policy --function-name "$FN" $P --query Policy --output text 2>/dev/null || echo "")
if [[ "$STATEMENTS" != *public-url* ]]; then
  aws lambda add-permission --function-name "$FN" --statement-id public-url --action lambda:InvokeFunctionUrl \
    --principal "*" --function-url-auth-type NONE $P >/dev/null
fi
if [[ "$STATEMENTS" != *public-invoke* ]]; then
  aws lambda add-permission --function-name "$FN" --statement-id public-invoke --action lambda:InvokeFunction \
    --principal "*" --invoked-via-function-url $P >/dev/null
fi
aws lambda get-function-url-config --function-name "$FN" $P --query FunctionUrl --output text
