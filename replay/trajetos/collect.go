package trajetos

import (
	"fmt"
	"math"
	"strings"

	"github.com/dotabuff/manta"
	"github.com/dotabuff/manta/dota"
)

const (
	ticksPerSecond  = 30.0
	teamRadiant     = 2
	teamDire        = 3
	statePreGame    = 4
	stateInProgress = 5
	heroPrefix      = "npc_dota_hero_"
	nullHandle      = 16777215
	maxPlayerRows   = 24
	wardMatchWindow = 3.0
	unitsPerCell    = 128
	// clockOutlierS: a few combat log entries carry a stale timestamp; only
	// the first entry sets the offset, so outliers are simply ignored.
	clockOutlierS = 1.0
)

type player struct {
	id, team, teamSlot, slot int
	hero                     string
	handle                   uint64
	dataRow                  int
	track                    *track
}

// track is everything sampled for one hero, one entry per second.
type track struct {
	gx, gy    []float64
	alive     []bool
	levelUpAt []int
	level     int
	lh        []int
}

type wardSeen struct {
	gameStart, gameEnd float64
	kind               string
	team               int
	gx, gy             float64
	ended              bool
	slot               *int
}

type wardUse struct {
	gameTime float64
	pl       *player
}

type towerKill struct {
	gameTime float64
	name     string
}

type collector struct {
	p        *manta.Parser
	rules    *manta.Entity
	resource *manta.Entity
	teamData map[int]*manta.Entity
	players  []*player
	byHero   map[string]*player
	wards    map[int32]*wardSeen
	allWards []*wardSeen
	wardUses []wardUse
	towers   []towerKill
	firstT   int
	nextT    float64
	offset   float64
	synced   bool
}

func newCollector(p *manta.Parser) *collector {
	c := &collector{
		p:        p,
		teamData: map[int]*manta.Entity{},
		byHero:   map[string]*player{},
		wards:    map[int32]*wardSeen{},
		nextT:    math.Inf(-1),
	}
	p.OnEntity(c.onEntity)
	p.Callbacks.OnCNETMsg_Tick(func(*dota.CNETMsg_Tick) error { c.maybeSample(); return nil })
	p.Callbacks.OnCMsgDOTACombatLogEntry(c.onCombatLog)
	return c
}

// gameTime is the game clock in seconds (pauses excluded). Replay ticks run a
// constant offset behind the server clock used by m_flGameStartTime and the
// combat log (~10.4 s in 7.41); the first combat log entry gives the offset.
func (c *collector) gameTime() float64 { return c.tickTime() + c.offset }

func (c *collector) tickTime() float64 {
	if c.rules == nil {
		return 0
	}
	tick := float64(c.p.Tick)
	if paused, _ := c.rules.GetBool("m_pGameRules.m_bGamePaused"); paused {
		tick = num(c.rules, "m_pGameRules.m_nPauseStartTick")
	}
	return (tick - num(c.rules, "m_pGameRules.m_nTotalPausedTicks")) / ticksPerSecond
}

// hornTime is the game time of the 0:00 horn; during pre-game it is the
// pending state transition.
func (c *collector) hornTime() (float64, bool) {
	if start := num(c.rules, "m_pGameRules.m_flGameStartTime"); start > 0 {
		return start, true
	}
	if int(num(c.rules, "m_pGameRules.m_nGameState")) == statePreGame {
		return num(c.rules, "m_pGameRules.m_flStateTransitionTime"), true
	}
	return 0, false
}

func (c *collector) onEntity(e *manta.Entity, op manta.EntityOp) error {
	cls := e.GetClassName()
	switch {
	case cls == "CDOTAGamerulesProxy":
		c.rules = e
	case cls == "CDOTA_PlayerResource":
		c.resource = e
	case cls == "CDOTA_DataRadiant":
		c.teamData[teamRadiant] = e
	case cls == "CDOTA_DataDire":
		c.teamData[teamDire] = e
	case strings.HasPrefix(cls, "CDOTA_NPC_Observer_Ward"):
		c.onWard(e, op)
	}
	return nil
}

func (c *collector) onWard(e *manta.Entity, op manta.EntityOp) {
	if op&manta.EntityOpCreated != 0 {
		kind := "obs"
		if strings.HasSuffix(e.GetClassName(), "TrueSight") {
			kind = "sen"
		}
		w := &wardSeen{gameStart: c.gameTime(), kind: kind, team: int(num(e, "m_iTeamNum")), gx: posX(e), gy: posY(e)}
		c.wards[e.GetIndex()] = w
		c.allWards = append(c.allWards, w)
		return
	}
	if op&manta.EntityOpDeleted == 0 {
		return
	}
	if w, ok := c.wards[e.GetIndex()]; ok {
		w.gameEnd, w.ended = c.gameTime(), true
		delete(c.wards, e.GetIndex())
	}
}

func (c *collector) onCombatLog(m *dota.CMsgDOTACombatLogEntry) error {
	gt := float64(m.GetTimestamp())
	if c.rules != nil && !c.synced {
		c.offset, c.synced = gt-c.tickTime(), true
	}
	switch m.GetType() {
	case dota.DOTA_COMBATLOG_TYPES_DOTA_COMBATLOG_DEATH:
		if target := c.clName(m.GetTargetName()); m.GetIsTargetBuilding() && strings.Contains(target, "tower") {
			c.towers = append(c.towers, towerKill{gameTime: gt, name: target})
		}
	case dota.DOTA_COMBATLOG_TYPES_DOTA_COMBATLOG_ITEM:
		pl := c.byHero[c.clName(m.GetAttackerName())]
		if pl != nil && strings.Contains(c.clName(m.GetInflictorName()), "ward") {
			c.wardUses = append(c.wardUses, wardUse{gameTime: gt, pl: pl})
		}
	}
	return nil
}

func (c *collector) clName(idx uint32) string {
	s, _ := c.p.LookupStringByIndex("CombatLogNames", int32(idx))
	return s
}

func (c *collector) maybeSample() {
	if c.rules == nil || c.resource == nil || !c.synced {
		return
	}
	state := int(num(c.rules, "m_pGameRules.m_nGameState"))
	if state != statePreGame && state != stateInProgress {
		return
	}
	horn, ok := c.hornTime()
	if !ok {
		return
	}
	t := c.gameTime() - horn
	if math.IsInf(c.nextT, -1) {
		c.nextT = math.Ceil(t)
	}
	if t < c.nextT {
		return
	}
	if len(c.players) == 0 && !c.loadPlayers() {
		return
	}
	if c.players[0].track.gx == nil {
		c.firstT = int(c.nextT)
	}
	c.sampleHeroes(int(c.nextT))
	c.nextT++
}

func (c *collector) loadPlayers() bool {
	var found []*player
	for i := 0; i < maxPlayerRows; i++ {
		pd := fmt.Sprintf("m_vecPlayerData.%04d.", i)
		ptd := fmt.Sprintf("m_vecPlayerTeamData.%04d.", i)
		team := int(num(c.resource, pd+"m_iPlayerTeam"))
		handle := u64(c.resource.Get(ptd + "m_hSelectedHero"))
		hero := c.p.FindEntityByHandle(handle)
		if (team != teamRadiant && team != teamDire) || hero == nil {
			continue
		}
		teamSlot := int(num(c.resource, ptd+"m_iTeamSlot"))
		pl := &player{
			id: i, team: team, teamSlot: teamSlot, slot: teamSlot,
			hero:   strings.TrimPrefix(c.entityName(hero), heroPrefix),
			handle: handle, dataRow: -1, track: &track{level: 1},
		}
		if team == teamDire {
			pl.slot = 128 + teamSlot
		}
		found = append(found, pl)
	}
	if len(found) < 10 {
		return false
	}
	for _, pl := range found {
		c.byHero[heroPrefix+pl.hero] = pl
	}
	c.players = found
	return true
}

func (c *collector) entityName(e *manta.Entity) string {
	name, _ := c.p.LookupStringByIndex("EntityNames", int32(num(e, "m_pEntity.m_nameStringTableIndex")))
	return name
}

// dataRowFor finds the player's row in CDOTA_DataRadiant/Dire. This build
// stores 2*playerID in m_nPlayerID; older builds stored playerID.
func (c *collector) dataRowFor(pl *player) int {
	data := c.teamData[pl.team]
	for _, want := range []int{2 * pl.id, pl.id} {
		for j := 0; j < 5 && data != nil; j++ {
			if int(num(data, fmt.Sprintf("m_vecDataTeam.%04d.m_nPlayerID", j))) == want {
				return j
			}
		}
	}
	return -1
}

func (c *collector) sampleHeroes(t int) {
	for _, pl := range c.players {
		tr := pl.track
		hero := c.p.FindEntityByHandle(pl.handle)
		if hero == nil {
			tr.repeatLast()
			continue
		}
		tr.gx = append(tr.gx, posX(hero))
		tr.gy = append(tr.gy, posY(hero))
		tr.alive = append(tr.alive, num(hero, "m_lifeState") == 0)
		for lvl := int(num(hero, "m_iCurrentLevel")); tr.level < lvl; tr.level++ {
			tr.levelUpAt = append(tr.levelUpAt, t)
		}
		if t >= 0 && t%60 == 0 {
			tr.lh = append(tr.lh, c.lastHits(pl))
		}
	}
}

// repeatLast keeps every hero's arrays aligned when an entity is briefly missing.
func (tr *track) repeatLast() {
	n := len(tr.gx)
	if n == 0 {
		tr.gx, tr.gy, tr.alive = append(tr.gx, 0), append(tr.gy, 0), append(tr.alive, true)
		return
	}
	tr.gx, tr.gy, tr.alive = append(tr.gx, tr.gx[n-1]), append(tr.gy, tr.gy[n-1]), append(tr.alive, tr.alive[n-1])
}

func (c *collector) lastHits(pl *player) int {
	if pl.dataRow < 0 {
		pl.dataRow = c.dataRowFor(pl)
	}
	data := c.teamData[pl.team]
	if data == nil || pl.dataRow < 0 {
		return 0
	}
	return int(num(data, fmt.Sprintf("m_vecDataTeam.%04d.m_iLastHitCount", pl.dataRow)))
}

// creditWardPlacers credits each ward to the nearest-in-time ward item use of
// the same team: ward entities carry no usable owner handle.
func (c *collector) creditWardPlacers() {
	for _, w := range c.allWards {
		best := wardMatchWindow
		for _, u := range c.wardUses {
			dt := math.Abs(u.gameTime - w.gameStart)
			if u.pl.team == w.team && dt < best {
				w.slot, best = &u.pl.slot, dt
			}
		}
	}
}

func num(e *manta.Entity, field string) float64 {
	if e == nil {
		return 0
	}
	switch v := e.Get(field).(type) {
	case int32:
		return float64(v)
	case int64:
		return float64(v)
	case uint32:
		return float64(v)
	case uint64:
		return float64(v)
	case uint8:
		return float64(v)
	case int8:
		return float64(v)
	case float32:
		return float64(v)
	case bool:
		if v {
			return 1
		}
	}
	return 0
}

func u64(v any) uint64 {
	switch x := v.(type) {
	case uint64:
		return x
	case uint32:
		return uint64(x)
	case int32:
		return uint64(x)
	}
	return nullHandle
}

// posX and posY give the OpenDota grid coordinate (cell of 128 units).
func posX(e *manta.Entity) float64 {
	return num(e, "CBodyComponent.m_cellX") + num(e, "CBodyComponent.m_vecX")/unitsPerCell
}

func posY(e *manta.Entity) float64 {
	return num(e, "CBodyComponent.m_cellY") + num(e, "CBodyComponent.m_vecY")/unitsPerCell
}
