// Command lambda serves hero trajectories per match: GET /?match=<id> returns
// the gzipped JSON, from S3 when already generated, otherwise it downloads the
// Valve replay, parses it and stores the result first.
package main

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/json"
	"errors"
	"log/slog"
	"net/http"
	"os"
	"regexp"
	"time"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/aws/aws-sdk-go-v2/service/s3/types"
)

const (
	keyPrefix    = "data/replays/"
	s3Timeout    = 10 * time.Second
	cacheForever = "public,max-age=31536000,immutable"
)

var matchIDPattern = regexp.MustCompile(`^[0-9]{1,12}$`)

type server struct {
	s3     *s3.Client
	bucket string
	log    *slog.Logger
	gen    generator
}

func main() {
	cfg, err := config.LoadDefaultConfig(context.Background())
	if err != nil {
		slog.Error("load aws config", "err", err)
		os.Exit(1)
	}
	srv := &server{
		s3:     s3.NewFromConfig(cfg),
		bucket: os.Getenv("BUCKET"),
		log:    slog.New(slog.NewJSONHandler(os.Stdout, nil)),
		gen:    newGenerator(),
	}
	lambda.Start(srv.handle)
}

func (s *server) handle(ctx context.Context, req events.LambdaFunctionURLRequest) (events.LambdaFunctionURLResponse, error) {
	started := time.Now()
	match := req.QueryStringParameters["match"]
	if req.RequestContext.HTTP.Method != http.MethodGet {
		return apiError(http.StatusMethodNotAllowed, "metodo", "use GET"), nil
	}
	if !matchIDPattern.MatchString(match) {
		return apiError(http.StatusBadRequest, "match_invalido", "match deve ter só dígitos"), nil
	}
	body, origin, err := s.trajetos(ctx, match)
	log := s.log.With("operation", "trajetos", "match", match, "origin", origin, "durationMs", time.Since(started).Milliseconds())
	if err != nil {
		resp := errorResponse(err)
		log.Error("trajetos", "status", resp.StatusCode, "err", err.Error())
		return resp, nil
	}
	log.Info("trajetos", "status", http.StatusOK, "bytes", len(body))
	return events.LambdaFunctionURLResponse{
		StatusCode:      http.StatusOK,
		Headers:         map[string]string{"Content-Type": "application/json", "Content-Encoding": "gzip", "Cache-Control": "public,max-age=86400"},
		Body:            base64.StdEncoding.EncodeToString(body),
		IsBase64Encoded: true,
	}, nil
}

// trajetos returns the gzipped JSON and where it came from ("s3" or "replay").
func (s *server) trajetos(ctx context.Context, match string) ([]byte, string, error) {
	key := keyPrefix + match + ".json"
	cached, err := s.get(ctx, key)
	if err == nil {
		return cached, "s3", nil
	}
	if !errors.Is(err, errNotStored) {
		return nil, "s3", err
	}
	body, err := s.gen.generate(ctx, match, s.log)
	if err != nil {
		return nil, "replay", err
	}
	return body, "replay", s.put(ctx, key, body)
}

var errNotStored = errors.New("not stored")

func (s *server) get(ctx context.Context, key string) ([]byte, error) {
	ctx, cancel := context.WithTimeout(ctx, s3Timeout)
	defer cancel()
	out, err := s.s3.GetObject(ctx, &s3.GetObjectInput{Bucket: &s.bucket, Key: &key})
	var noKey *types.NoSuchKey
	if errors.As(err, &noKey) {
		return nil, errNotStored
	}
	if err != nil {
		return nil, upstream("s3 get", err)
	}
	defer out.Body.Close()
	var buf bytes.Buffer
	if _, err := buf.ReadFrom(out.Body); err != nil {
		return nil, upstream("s3 read", err)
	}
	return buf.Bytes(), nil
}

func (s *server) put(ctx context.Context, key string, gz []byte) error {
	ctx, cancel := context.WithTimeout(ctx, s3Timeout)
	defer cancel()
	_, err := s.s3.PutObject(ctx, &s3.PutObjectInput{
		Bucket: &s.bucket, Key: &key, Body: bytes.NewReader(gz),
		ContentType: aws.String("application/json"), ContentEncoding: aws.String("gzip"), CacheControl: aws.String(cacheForever),
	})
	if err != nil {
		return upstream("s3 put", err)
	}
	return nil
}

type apiErrorBody struct {
	Code    string `json:"code"`
	Message string `json:"message"`
}

func apiError(status int, code, message string) events.LambdaFunctionURLResponse {
	body, _ := json.Marshal(apiErrorBody{Code: code, Message: message}) // marshal of two strings cannot fail
	return events.LambdaFunctionURLResponse{
		StatusCode: status,
		Headers:    map[string]string{"Content-Type": "application/json", "Cache-Control": "no-store"},
		Body:       string(body),
	}
}
