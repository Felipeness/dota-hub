// Package trajetos reads a Dota 2 replay and returns every hero's position
// per second in a compact JSON made for the browser (see ../README.md).
package trajetos

import (
	"bufio"
	"bytes"
	"compress/bzip2"
	"errors"
	"fmt"
	"io"
	"math"
	"sort"

	"github.com/dotabuff/manta"
	"github.com/klauspost/compress/zstd"
)

// Versao is bumped on any breaking change of the JSON format.
const Versao = 1

// Escala: coordinates are OpenDota grid cells times Escala, rounded (32 units).
const Escala = 4

type Trajetos struct {
	V       int     `json:"v"`
	Match   int64   `json:"match"`
	Build   uint32  `json:"build"`
	Escala  int     `json:"escala"`
	T0      int     `json:"t0"`
	Duracao int     `json:"duracao"`
	Herois  []Heroi `json:"herois"`
	Wards   []Ward  `json:"wards"`
	Torres  []Torre `json:"torres"`
}

type Heroi struct {
	Slot  int    `json:"slot"`
	Heroi string `json:"heroi"`
	Time  int    `json:"time"`
	// XY is x0,y0 then dx,dy per second, all scaled by Escala.
	XY []int `json:"xy"`
	// Mortes holds [died, respawned) intervals in seconds since the horn.
	Mortes [][2]int `json:"mortes"`
	// Niveis[i] is when level i+2 was reached.
	Niveis []int `json:"niveis"`
	// LH is last hits (neutrals included) at minutes 0, 1, 2...
	LH []int `json:"lh"`
}

type Ward struct {
	T    int    `json:"t"`
	Fim  *int   `json:"fim,omitempty"`
	Tipo string `json:"tipo"`
	Time int    `json:"time"`
	X    int    `json:"x"`
	Y    int    `json:"y"`
	Slot *int   `json:"slot,omitempty"`
}

type Torre struct {
	T    int    `json:"t"`
	Nome string `json:"nome"`
}

var (
	magicZstd  = []byte{0x28, 0xb5, 0x2f, 0xfd}
	magicBzip2 = []byte("BZh")
	// ErrReplayIncompleto marks a replay without players or game start.
	ErrReplayIncompleto = errors.New("replay sem jogadores ou sem buzina")
)

// Ler parses a replay stream (.dem, or .dem.bz2 that is bzip2 or zstd).
func Ler(r io.Reader, match int64) (*Trajetos, error) {
	dem, err := decompressed(bufio.NewReaderSize(r, 1<<20))
	if err != nil {
		return nil, err
	}
	p, err := manta.NewStreamParser(dem)
	if err != nil {
		return nil, fmt.Errorf("start parser: %w", err)
	}
	c := newCollector(p)
	if err := p.Start(); err != nil {
		return nil, fmt.Errorf("parse: %w", err)
	}
	return c.result(match)
}

// decompressed sniffs the magic bytes: Valve serves ".dem.bz2" files that are
// zstd nowadays, so the extension is not trusted.
func decompressed(br *bufio.Reader) (io.Reader, error) {
	magic, err := br.Peek(4)
	if err != nil {
		return nil, fmt.Errorf("read replay header: %w", err)
	}
	switch {
	case bytes.Equal(magic, magicZstd):
		zr, err := zstd.NewReader(br)
		if err != nil {
			return nil, fmt.Errorf("zstd: %w", err)
		}
		return zr, nil
	case bytes.HasPrefix(magic, magicBzip2):
		return bzip2.NewReader(br), nil
	}
	return br, nil
}

func (c *collector) result(match int64) (*Trajetos, error) {
	start := num(c.rules, "m_pGameRules.m_flGameStartTime")
	if c.rules == nil || len(c.players) == 0 || start <= 0 {
		return nil, ErrReplayIncompleto
	}
	c.creditWardPlacers()
	sec := func(gameTime float64) int { return int(math.Round(gameTime - start)) }

	out := &Trajetos{V: Versao, Match: match, Build: c.p.GameBuild, Escala: Escala, T0: c.firstT,
		Duracao: c.firstT + len(c.players[0].track.gx) - 1, Wards: []Ward{}, Torres: []Torre{}}
	for _, pl := range c.players {
		out.Herois = append(out.Herois, heroiFrom(pl, c.firstT))
	}
	sort.Slice(out.Herois, func(i, j int) bool { return out.Herois[i].Slot < out.Herois[j].Slot })
	for _, w := range c.allWards {
		ward := Ward{T: sec(w.gameStart), Tipo: w.kind, Time: w.team, X: scaled(w.gx), Y: scaled(w.gy), Slot: w.slot}
		if w.ended {
			fim := sec(w.gameEnd)
			ward.Fim = &fim
		}
		out.Wards = append(out.Wards, ward)
	}
	for _, k := range c.towers {
		out.Torres = append(out.Torres, Torre{T: sec(k.gameTime), Nome: k.name})
	}
	return out, nil
}

func heroiFrom(pl *player, t0 int) Heroi {
	tr := pl.track
	return Heroi{
		Slot: pl.slot, Heroi: pl.hero, Time: pl.team,
		XY:     deltaXY(tr.gx, tr.gy),
		Mortes: deathIntervals(tr.alive, t0),
		Niveis: append([]int{}, tr.levelUpAt...),
		LH:     append([]int{}, tr.lh...),
	}
}

func scaled(g float64) int { return int(math.Round(g * Escala)) }

// deltaXY quantizes first, then takes differences, so decoding has no drift.
func deltaXY(gx, gy []float64) []int {
	out := make([]int, 0, 2*len(gx))
	px, py := 0, 0
	for i := range gx {
		x, y := scaled(gx[i]), scaled(gy[i])
		out = append(out, x-px, y-py)
		px, py = x, y
	}
	return out
}

func deathIntervals(alive []bool, t0 int) [][2]int {
	out := [][2]int{}
	for i := 0; i < len(alive); i++ {
		if alive[i] {
			continue
		}
		j := i
		for j < len(alive) && !alive[j] {
			j++
		}
		out = append(out, [2]int{t0 + i, t0 + j})
		i = j
	}
	return out
}
