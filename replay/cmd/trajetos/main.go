// Command trajetos parses a local replay into the browser JSON (gzipped when
// -out ends in .gz).
//
// Usage: trajetos -replay 9046905170.dem.bz2 -match 9046905170 -out 9046905170.json
package main

import (
	"compress/gzip"
	"encoding/json"
	"errors"
	"flag"
	"fmt"
	"io"
	"os"
	"strings"
	"time"

	"dotahub/replay/trajetos"
)

func main() {
	replayPath := flag.String("replay", "", "replay (.dem ou .dem.bz2)")
	match := flag.Int64("match", 0, "id da partida")
	out := flag.String("out", "", "arquivo JSON de saída (.gz grava comprimido)")
	flag.Parse()
	if *replayPath == "" || *out == "" {
		flag.Usage()
		os.Exit(2)
	}
	if err := run(*replayPath, *match, *out); err != nil {
		fmt.Fprintln(os.Stderr, "trajetos:", err)
		os.Exit(1)
	}
}

func run(replayPath string, match int64, outPath string) error {
	started := time.Now()
	in, err := os.Open(replayPath)
	if err != nil {
		return fmt.Errorf("open replay: %w", err)
	}
	defer in.Close()
	tr, err := trajetos.Ler(in, match)
	if err != nil {
		return err
	}
	f, err := os.Create(outPath)
	if err != nil {
		return fmt.Errorf("create out: %w", err)
	}
	if err := errors.Join(writeJSON(f, tr, strings.HasSuffix(outPath, ".gz")), f.Close()); err != nil {
		return fmt.Errorf("write %s: %w", outPath, err)
	}
	fmt.Printf("ok: %d herois, t %d..%d, %d wards, %s\n", len(tr.Herois), tr.T0, tr.Duracao, len(tr.Wards), time.Since(started).Round(time.Millisecond))
	return nil
}

func writeJSON(w io.Writer, tr *trajetos.Trajetos, gzipped bool) error {
	if !gzipped {
		return json.NewEncoder(w).Encode(tr)
	}
	gz := gzip.NewWriter(w)
	if err := json.NewEncoder(gz).Encode(tr); err != nil {
		return fmt.Errorf("write json: %w", err)
	}
	return gz.Close()
}
