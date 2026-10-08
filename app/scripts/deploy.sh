#!/usr/bin/env bash
# Publica o build no S3 (conta pessoal, us-east-2) e limpa o cache do CloudFront.
# Uso, de dentro de app/: bash scripts/deploy.sh
set -euo pipefail
P="--profile pessoal"
B=s3://dota-hub-968000946695
DIST=E2HBYA8DQ0PFFO

node scripts/espelhar-constantes.mjs
npm run build
aws s3 sync dist/assets $B/assets $P --only-show-errors --cache-control "public,max-age=31536000,immutable"
aws s3 sync dist/data $B/data $P --only-show-errors --cache-control "public,max-age=3600" --delete
aws s3 cp dist/favicon.svg $B/favicon.svg $P --only-show-errors --cache-control "public,max-age=86400"
aws s3 cp dist/index.html $B/index.html $P --only-show-errors --cache-control "no-cache"
MSYS_NO_PATHCONV=1 aws cloudfront create-invalidation $P --distribution-id $DIST --paths "/index.html" "/data/*" --query Invalidation.Id --output text
echo "https://d22phpj0gnvpfs.cloudfront.net"
