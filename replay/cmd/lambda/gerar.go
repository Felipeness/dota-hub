package main

import (
	"bytes"
	"compress/gzip"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log/slog"
	"net/http"
	"net/url"
	"regexp"
	"strconv"
	"time"

	"dotahub/replay/trajetos"

	"github.com/aws/aws-lambda-go/events"
)

const (
	openDotaURL     = "https://api.opendota.com/api/matches/"
	openDotaTimeout = 10 * time.Second
	attemptTimeout  = 50 * time.Second
	maxReplayBytes  = 400 << 20
	maxMatchBytes   = 8 << 20
)

// Only Valve's replay servers are ever downloaded from.
var valveReplayHost = regexp.MustCompile(`^replay[0-9]{1,4}\.valve\.net$`)

// Failures the client can act on; anything else maps to 500.
var (
	errNoReplay = errors.New("replay indisponível")
	errUpstream = errors.New("serviço externo falhou")
)

func upstream(op string, err error) error { return fmt.Errorf("%s: %w: %w", op, errUpstream, err) }

func errorResponse(err error) events.LambdaFunctionURLResponse {
	switch {
	case errors.Is(err, errNoReplay):
		return apiError(http.StatusNotFound, "replay_indisponivel", "o replay desta partida não está disponível (expirou ou o OpenDota ainda não tem o salt)")
	case errors.Is(err, errUpstream):
		return apiError(http.StatusBadGateway, "upstream", "OpenDota, Valve ou S3 falhou; tente de novo")
	}
	return apiError(http.StatusInternalServerError, "interno", "erro ao ler o replay")
}

type generator struct{ http *http.Client }

func newGenerator() generator {
	// Per-call timeouts come from contexts; this one is the outer bound.
	return generator{http: &http.Client{Timeout: attemptTimeout}}
}

// generate fetches the replay of a match and returns its gzipped trajectories.
// Download and parse run as one stream, so a retry repeats both.
func (g generator) generate(ctx context.Context, match string, log *slog.Logger) ([]byte, error) {
	replayURL, err := g.replayURL(ctx, match)
	if err != nil {
		return nil, err
	}
	id, _ := strconv.ParseInt(match, 10, 64) // match already matched ^[0-9]{1,12}$
	var lastErr error
	for attempt := 1; attempt <= 2; attempt++ {
		started := time.Now()
		tr, bytesRead, err := g.downloadAndParse(ctx, replayURL, id)
		log.Info("replay", "operation", "download_parse", "match", match, "attempt", attempt, "durationMs", time.Since(started).Milliseconds(), "bytes", bytesRead, "ok", err == nil)
		if err == nil {
			return gzipJSON(tr)
		}
		if errors.Is(err, errNoReplay) || ctx.Err() != nil {
			return nil, err
		}
		lastErr = err
	}
	return nil, lastErr
}

type openDotaMatch struct {
	ReplayURL  string `json:"replay_url"`
	Cluster    int    `json:"cluster"`
	ReplaySalt int64  `json:"replay_salt"`
}

func (g generator) replayURL(ctx context.Context, match string) (string, error) {
	ctx, cancel := context.WithTimeout(ctx, openDotaTimeout)
	defer cancel()
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, openDotaURL+match, nil)
	if err != nil {
		return "", fmt.Errorf("opendota request: %w", err)
	}
	resp, err := g.http.Do(req)
	if err != nil {
		return "", upstream("opendota", err)
	}
	defer resp.Body.Close()
	if resp.StatusCode == http.StatusNotFound {
		return "", fmt.Errorf("opendota 404: %w", errNoReplay)
	}
	if resp.StatusCode != http.StatusOK {
		return "", upstream("opendota", fmt.Errorf("status %d", resp.StatusCode))
	}
	var m openDotaMatch
	if err := json.NewDecoder(io.LimitReader(resp.Body, maxMatchBytes)).Decode(&m); err != nil {
		return "", upstream("opendota decode", err)
	}
	return validReplayURL(m, match)
}

func validReplayURL(m openDotaMatch, match string) (string, error) {
	raw := m.ReplayURL
	if raw == "" && m.Cluster > 0 && m.ReplaySalt > 0 {
		raw = fmt.Sprintf("http://replay%d.valve.net/570/%s_%d.dem.bz2", m.Cluster, match, m.ReplaySalt)
	}
	if raw == "" {
		return "", fmt.Errorf("opendota sem replay_url: %w", errNoReplay)
	}
	u, err := url.Parse(raw)
	if err != nil || u.Scheme != "http" || !valveReplayHost.MatchString(u.Hostname()) {
		return "", fmt.Errorf("replay fora dos servidores da Valve (%q): %w", raw, errNoReplay)
	}
	return raw, nil
}

func (g generator) downloadAndParse(ctx context.Context, replayURL string, match int64) (*trajetos.Trajetos, int64, error) {
	ctx, cancel := context.WithTimeout(ctx, attemptTimeout)
	defer cancel()
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, replayURL, nil)
	if err != nil {
		return nil, 0, fmt.Errorf("replay request: %w", err)
	}
	resp, err := g.http.Do(req)
	if err != nil {
		return nil, 0, upstream("valve", err)
	}
	defer resp.Body.Close()
	if resp.StatusCode == http.StatusNotFound || resp.StatusCode == http.StatusGone {
		return nil, 0, fmt.Errorf("valve %d: %w", resp.StatusCode, errNoReplay)
	}
	if resp.StatusCode != http.StatusOK {
		return nil, 0, upstream("valve", fmt.Errorf("status %d", resp.StatusCode))
	}
	counted := &countingReader{r: io.LimitReader(resp.Body, maxReplayBytes)}
	tr, err := trajetos.Ler(counted, match)
	if err != nil {
		return nil, counted.n, upstream("download/parse", err)
	}
	return tr, counted.n, nil
}

type countingReader struct {
	r io.Reader
	n int64
}

func (c *countingReader) Read(p []byte) (int, error) {
	n, err := c.r.Read(p)
	c.n += int64(n)
	return n, err
}

func gzipJSON(tr *trajetos.Trajetos) ([]byte, error) {
	var buf bytes.Buffer
	gz := gzip.NewWriter(&buf)
	if err := json.NewEncoder(gz).Encode(tr); err != nil {
		return nil, fmt.Errorf("encode json: %w", err)
	}
	if err := gz.Close(); err != nil {
		return nil, fmt.Errorf("gzip: %w", err)
	}
	return buf.Bytes(), nil
}
