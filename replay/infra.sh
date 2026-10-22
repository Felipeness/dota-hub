#!/usr/bin/env bash
# Cria ou atualiza a Lambda de trajetos (conta pessoal, us-east-2) e a rota /api/replay* no CloudFront do site.
# Idempotente. A Function URL é AWS_IAM: só o CloudFront (OAC assinando em sigv4) chama.
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
DIST=E2HBYA8DQ0PFFO
DIST_ARN=arn:aws:cloudfront::$ACCOUNT:distribution/$DIST
OAC_NAME=$FN-oac
CACHE_POLICY_NAME=$FN-match
WAF="--profile pessoal --region us-east-1 --scope CLOUDFRONT" # web ACL de CloudFront só existe em us-east-1
WEB_ACL=dota-hub-rate
ALL_VIEWER_EXCEPT_HOST=b689b0a8-53d0-40ab-baf2-68738e2966ac # política gerenciada: sem Host, a assinatura sigv4 vale
BUILD=$(mktemp -d)
command -v cygpath >/dev/null && BUILD=$(cygpath -m "$BUILD") # Go e Python do Windows não entendem /tmp
trap 'rm -r "$BUILD"' EXIT
BACKUP_DIR=${BACKUP_DIR:-$BUILD/..} # cópia do config da distribuição antes de editar

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

echo "== function URL (AWS_IAM, sem CORS: o site chama pela mesma origem)"
if aws lambda get-function-url-config --function-name "$FN" $P >/dev/null 2>&1; then
  aws lambda update-function-url-config --function-name "$FN" --auth-type AWS_IAM --cors '{}' $P >/dev/null
else
  aws lambda create-function-url-config --function-name "$FN" --auth-type AWS_IAM $P >/dev/null
fi
FN_HOST=$(aws lambda get-function-url-config --function-name "$FN" $P --query FunctionUrl --output text | sed -E 's#^https://##; s#/$##')

echo "== permissões: só a distribuição do site"
STATEMENTS=$(aws lambda get-policy --function-name "$FN" $P --query Policy --output text 2>/dev/null || echo "")
for old in public-url public-invoke; do
  if [[ "$STATEMENTS" == *"\"$old\""* ]]; then aws lambda remove-permission --function-name "$FN" --statement-id "$old" $P; fi
done
# A CloudFront exige as duas: InvokeFunctionUrl e InvokeFunction (esta só via function URL).
if [[ "$STATEMENTS" != *cloudfront-url* ]]; then
  aws lambda add-permission --function-name "$FN" --statement-id cloudfront-url --action lambda:InvokeFunctionUrl \
    --principal cloudfront.amazonaws.com --source-arn "$DIST_ARN" $P >/dev/null
fi
if [[ "$STATEMENTS" != *cloudfront-invoke* ]]; then
  aws lambda add-permission --function-name "$FN" --statement-id cloudfront-invoke --action lambda:InvokeFunction \
    --principal cloudfront.amazonaws.com --source-arn "$DIST_ARN" --invoked-via-function-url $P >/dev/null
fi

echo "== OAC (lambda, sigv4, sempre assina)"
OAC_ID=$(aws cloudfront list-origin-access-controls $P --query "OriginAccessControlList.Items[?Name=='$OAC_NAME'].Id | [0]" --output text)
if [[ "$OAC_ID" == "None" ]]; then
  OAC_ID=$(aws cloudfront create-origin-access-control $P --query OriginAccessControl.Id --output text \
    --origin-access-control-config "Name=$OAC_NAME,SigningProtocol=sigv4,SigningBehavior=always,OriginAccessControlOriginType=lambda")
fi

echo "== cache policy (chave = só ?match; 200 fica 1 ano, erro vem com no-store e não fica)"
CACHE_POLICY_ID=$(aws cloudfront list-cache-policies --type custom $P --query "CachePolicyList.Items[?CachePolicy.CachePolicyConfig.Name=='$CACHE_POLICY_NAME'].CachePolicy.Id | [0]" --output text)
if [[ "$CACHE_POLICY_ID" == "None" ]]; then
  CACHE_POLICY_ID=$(aws cloudfront create-cache-policy $P --query CachePolicy.Id --output text --cache-policy-config "{
    \"Name\":\"$CACHE_POLICY_NAME\",\"MinTTL\":0,\"DefaultTTL\":31536000,\"MaxTTL\":31536000,
    \"ParametersInCacheKeyAndForwardedToOrigin\":{\"EnableAcceptEncodingGzip\":false,\"EnableAcceptEncodingBrotli\":false,
      \"HeadersConfig\":{\"HeaderBehavior\":\"none\"},\"CookiesConfig\":{\"CookieBehavior\":\"none\"},
      \"QueryStringsConfig\":{\"QueryStringBehavior\":\"whitelist\",\"QueryStrings\":{\"Quantity\":1,\"Items\":[\"match\"]}}}}")
fi

echo "== WAF: limite por IP (20 análises de replay e 2000 requisições em 5 min)"
visibility() { echo "{\"SampledRequestsEnabled\":true,\"CloudWatchMetricsEnabled\":true,\"MetricName\":\"$1\"}"; }
# SearchString é blob: o AWS CLI v2 espera base64 ("L2FwaS9yZXBsYXk=" = "/api/replay").
WAF_RULES=$(cat <<JSON
[{"Name":"replay-rate","Priority":0,"VisibilityConfig":$(visibility replay-rate),
  "Action":{"Block":{"CustomResponse":{"ResponseCode":429,"CustomResponseBodyKey":"muitas-analises"}}},
  "Statement":{"RateBasedStatement":{"Limit":20,"EvaluationWindowSec":300,"AggregateKeyType":"IP",
    "ScopeDownStatement":{"ByteMatchStatement":{"SearchString":"L2FwaS9yZXBsYXk=","FieldToMatch":{"UriPath":{}},
      "TextTransformations":[{"Priority":0,"Type":"NONE"}],"PositionalConstraint":"STARTS_WITH"}}}}},
 {"Name":"site-rate","Priority":1,"VisibilityConfig":$(visibility site-rate),"Action":{"Block":{}},
  "Statement":{"RateBasedStatement":{"Limit":2000,"EvaluationWindowSec":300,"AggregateKeyType":"IP"}}}]
JSON
)
WAF_BODIES='{"muitas-analises":{"ContentType":"APPLICATION_JSON","Content":"{\"code\":\"muitas_analises\",\"message\":\"muitas análises de replay, tente em alguns minutos\"}"}}'
WAF_ID=$(aws wafv2 list-web-acls $WAF --query "WebACLs[?Name=='$WEB_ACL'].Id | [0]" --output text)
if [[ "$WAF_ID" == "None" ]]; then
  aws wafv2 create-web-acl $WAF --name "$WEB_ACL" --default-action Allow={} --rules "$WAF_RULES" \
    --custom-response-bodies "$WAF_BODIES" --visibility-config "$(visibility "$WEB_ACL")" >/dev/null
  WAF_ID=$(aws wafv2 list-web-acls $WAF --query "WebACLs[?Name=='$WEB_ACL'].Id | [0]" --output text)
else
  LOCK=$(aws wafv2 get-web-acl $WAF --name "$WEB_ACL" --id "$WAF_ID" --query LockToken --output text)
  aws wafv2 update-web-acl $WAF --name "$WEB_ACL" --id "$WAF_ID" --lock-token "$LOCK" --default-action Allow={} \
    --rules "$WAF_RULES" --custom-response-bodies "$WAF_BODIES" --visibility-config "$(visibility "$WEB_ACL")" >/dev/null
fi
WAF_ARN=arn:aws:wafv2:us-east-1:$ACCOUNT:global/webacl/$WEB_ACL/$WAF_ID

echo "== distribuição: origem lambda + comportamento /api/replay* + WAF"
aws cloudfront get-distribution-config --id "$DIST" $P > "$BUILD/dist.json"
cp "$BUILD/dist.json" "$BACKUP_DIR/dist-$DIST-$(date +%Y%m%d%H%M%S).json"
# Edita o JSON: troca (ou cria) a origem "replay", o comportamento /api/replay* e o WebACLId, sem mexer no resto.
# Grava dist-new.json só quando muda, para não gerar deploy à toa.
python -I - "$BUILD" "$FN_HOST" "$OAC_ID" "$CACHE_POLICY_ID" "$ALL_VIEWER_EXCEPT_HOST" "$WAF_ARN" <<'PY'
import json, sys
build, host, oac, cache_policy, request_policy, web_acl = sys.argv[1:]
current = json.load(open(build + "/dist.json"))
config = current["DistributionConfig"]
origin = {
    "Id": "replay", "DomainName": host, "OriginPath": "", "CustomHeaders": {"Quantity": 0},
    "CustomOriginConfig": {"HTTPPort": 80, "HTTPSPort": 443, "OriginProtocolPolicy": "https-only",
        "OriginSslProtocols": {"Quantity": 1, "Items": ["TLSv1.2"]},
        "OriginReadTimeout": 60, "OriginKeepaliveTimeout": 5},  # partida nova leva ~10 s; 60 s é o teto sem pedir cota
    "ConnectionAttempts": 3, "ConnectionTimeout": 10, "OriginShield": {"Enabled": False},
    "OriginAccessControlId": oac,
}
behavior = {
    "PathPattern": "/api/replay*", "TargetOriginId": "replay", "ViewerProtocolPolicy": "https-only",
    "AllowedMethods": {"Quantity": 2, "Items": ["HEAD", "GET"], "CachedMethods": {"Quantity": 2, "Items": ["HEAD", "GET"]}},
    "Compress": False,  # a Lambda já devolve gzip
    "CachePolicyId": cache_policy, "OriginRequestPolicyId": request_policy,
    "TrustedSigners": {"Enabled": False, "Quantity": 0}, "TrustedKeyGroups": {"Enabled": False, "Quantity": 0},
    "SmoothStreaming": False, "LambdaFunctionAssociations": {"Quantity": 0}, "FunctionAssociations": {"Quantity": 0},
    "FieldLevelEncryptionId": "", "GrpcConfig": {"Enabled": False},
}
def upsert(section, item, key):
    items = [i for i in section.get("Items", []) if i[key] != item[key]] + [item]
    section["Items"], section["Quantity"] = items, len(items)
before = json.dumps(config, sort_keys=True)
upsert(config["Origins"], origin, "Id")
upsert(config["CacheBehaviors"], behavior, "PathPattern")
config["WebACLId"] = web_acl
if json.dumps(config, sort_keys=True) != before:
    json.dump(config, open(build + "/dist-new.json", "w"))
PY
if [[ -f "$BUILD/dist-new.json" ]]; then
  ETAG=$(python -I -c "import json,sys; print(json.load(open(sys.argv[1]))['ETag'])" "$BUILD/dist.json")
  aws cloudfront update-distribution --id "$DIST" --if-match "$ETAG" --distribution-config "file://$BUILD/dist-new.json" $P >/dev/null
  echo "distribuição atualizada; propaga em alguns minutos"
else
  echo "distribuição já estava certa"
fi
