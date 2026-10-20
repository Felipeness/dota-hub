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
	Smokes  []Smoke `json:"smokes"`
	Mortes  []Morte `json:"mortes"`
	Torres  []Torre `json:"torres"`
	Totais  Totais  `json:"totais"`
}

type Totais struct {
	Wards  int `json:"wards"`
	Smokes int `json:"smokes"`
	Mortes int `json:"mortes"`
}

// Smoke is one Smoke of Deceit use: who used it, where, and every hero that
// carried the modifier from ini to fim (fim absent: lasted until the end).
type Smoke struct {
	T      int          `json:"t"`
	Slot   int          `json:"slot"`
	Time   int          `json:"time"`
	X      int          `json:"x"`
	Y      int          `json:"y"`
	Herois []SmokeHeroi `json:"herois"`
}

type SmokeHeroi struct {
	Slot int  `json:"slot"`
	Ini  int  `json:"ini"`
	Fim  *int `json:"fim,omitempty"`
}

// Morte is a hero death for the kill feed. Assassino is the killer's slot;
// when a creep, tower or neutral killed, Por has its unit name instead.
type Morte struct {
	T         int    `json:"t"`
	Vitima    int    `json:"vitima"`
	Assassino *int   `json:"assassino,omitempty"`
	Por       string `json:"por,omitempty"`
	X         int    `json:"x"`
	Y         int    `json:"y"`
	Aegis     bool   `json:"aegis,omitempty"`
}

type Heroi struct {
	Slot  int    `json:"slot"`
	Heroi string `json:"heroi"`
	Time  int    `json:"time"`
	// XY is x0,y0 then dx,dy per second, all scaled by Escala.
	XY []int `json:"xy"`
	// Mortes holds [died, respawned) intervals in seconds since the horn.
	Mortes [][2]int `json:"mortes"`
	// Visto holds [from, to) intervals when the enemy team probably saw the hero.
	Visto [][2]int `json:"visto"`
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
	// Destruida: the ward was killed (dewarded) rather than expired; Por is
	// the hero who killed it when it was a hero.
	Destruida bool `json:"destruida,omitempty"`
	Por       *int `json:"por,omitempty"`
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
		Duracao: c.firstT + len(c.players[0].track.gx) - 1}
	for _, pl := range c.players {
		out.Herois = append(out.Herois, heroiFrom(pl, c.firstT))
	}
	sort.Slice(out.Herois, func(i, j int) bool { return out.Herois[i].Slot < out.Herois[j].Slot })
	out.Wards = c.wardsOut(sec)
	out.Smokes = c.smokesOut(sec)
	out.Mortes = c.killsOut(sec)
	out.Torres = []Torre{}
	for _, k := range c.towers {
		out.Torres = append(out.Torres, Torre{T: sec(k.gameTime), Nome: k.name})
	}
	out.Totais = Totais{Wards: len(out.Wards), Smokes: len(out.Smokes), Mortes: len(out.Mortes)}
	return out, nil
}

func (c *collector) wardsOut(sec func(float64) int) []Ward {
	out := []Ward{}
	for _, w := range c.allWards {
		ward := Ward{T: sec(w.gameStart), Tipo: w.kind, Time: w.team, X: scaled(w.gx), Y: scaled(w.gy), Slot: w.slot}
		if w.ended {
			ward.Fim = ptr(sec(w.gameEnd))
		}
		if k, ok := c.dewarder(w); ok {
			ward.Destruida = true
			if k.killer != nil {
				ward.Por = ptr(k.killer.slot)
			}
		}
		out = append(out, ward)
	}
	return out
}

func (c *collector) smokesOut(sec func(float64) int) []Smoke {
	out := []Smoke{}
	for _, s := range c.smokes {
		smoke := Smoke{T: sec(s.gameTime), Slot: s.pl.slot, Time: s.pl.team, X: scaled(s.gx), Y: scaled(s.gy), Herois: []SmokeHeroi{}}
		for _, h := range s.heroes {
			sh := SmokeHeroi{Slot: h.pl.slot, Ini: sec(h.gameStart)}
			if h.ended {
				sh.Fim = ptr(sec(h.gameEnd))
			}
			smoke.Herois = append(smoke.Herois, sh)
		}
		out = append(out, smoke)
	}
	return out
}

// killsOut places each death where the victim stood at that second: the
// broadcast combat log has no death location.
func (c *collector) killsOut(sec func(float64) int) []Morte {
	out := []Morte{}
	for _, k := range c.kills {
		t := sec(k.gameTime)
		gx, gy := k.victim.track.at(t - c.firstT)
		m := Morte{T: t, Vitima: k.victim.slot, Por: k.killerName, X: scaled(gx), Y: scaled(gy), Aegis: k.reincarnate}
		if k.killer != nil {
			m.Assassino = ptr(k.killer.slot)
		}
		out = append(out, m)
	}
	return out
}

// at returns the sampled position at index i, clamped to the samples taken.
func (tr *track) at(i int) (float64, float64) {
	if len(tr.gx) == 0 {
		return 0, 0
	}
	i = max(0, min(i, len(tr.gx)-1))
	return tr.gx[i], tr.gy[i]
}

func ptr[T any](v T) *T { return &v }

func heroiFrom(pl *player, t0 int) Heroi {
	tr := pl.track
	return Heroi{
		Slot: pl.slot, Heroi: pl.hero, Time: pl.team,
		XY:     deltaXY(tr.gx, tr.gy),
		Mortes: intervals(tr.alive, false, t0),
		Visto:  intervals(tr.seen, true, t0),
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

// intervals returns the [from, to) runs of seconds where flags[i] == want.
func intervals(flags []bool, want bool, t0 int) [][2]int {
	out := [][2]int{}
	for i := 0; i < len(flags); i++ {
		if flags[i] != want {
			continue
		}
		j := i
		for j < len(flags) && flags[j] == want {
			j++
		}
		out = append(out, [2]int{t0 + i, t0 + j})
		i = j
	}
	return out
}
