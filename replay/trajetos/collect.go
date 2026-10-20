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
	clockOutlierS    = 1.0
	smokeItem        = "item_smoke_of_deceit"
	smokeModifier    = "modifier_smoke_of_deceit"
	smokeJoinWindow  = 40.0 // smoke lasts 35 s; later modifier adds belong to the same cast
	wardKillWindow   = 1.5
	dayStart, dayEnd = 0.25, 0.75
	timeOfDayScale   = 65536
	invisibleBit     = 7 // MODIFIER_STATE_INVISIBLE in m_nUnitState64
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
	seen      []bool // seen by the enemy team (estimate, see visionSources)
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

// smokeCast is one Smoke of Deceit use; heroes are who got the modifier.
type smokeCast struct {
	gameTime float64
	pl       *player
	gx, gy   float64
	heroes   []*smokedHero
}

type smokedHero struct {
	pl                 *player
	gameStart, gameEnd float64
	ended              bool
}

type heroKill struct {
	gameTime    float64
	victim      *player
	killer      *player
	killerName  string
	reincarnate bool
}

type wardKill struct {
	gameTime float64
	team     int
	kind     string
	killer   *player
	used     bool
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
	smokes   []*smokeCast
	kills    []heroKill
	wardDead []*wardKill
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
	w, ok := c.wards[e.GetIndex()]
	if !ok {
		return
	}
	// A dead ward entity lingers ~7.7 s before deletion; the ward is gone
	// from the map at the death, which is also when the combat log logs it.
	if !w.ended && num(e, "m_lifeState") != 0 {
		w.gameEnd, w.ended = c.gameTime(), true
	}
	if op&manta.EntityOpDeleted != 0 {
		if !w.ended {
			w.gameEnd, w.ended = c.gameTime(), true
		}
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
		c.onDeath(m, gt)
	case dota.DOTA_COMBATLOG_TYPES_DOTA_COMBATLOG_ITEM:
		c.onItem(m, gt)
	case dota.DOTA_COMBATLOG_TYPES_DOTA_COMBATLOG_MODIFIER_ADD:
		c.onSmokeModifier(m, gt, true)
	case dota.DOTA_COMBATLOG_TYPES_DOTA_COMBATLOG_MODIFIER_REMOVE:
		c.onSmokeModifier(m, gt, false)
	}
	return nil
}

func (c *collector) onDeath(m *dota.CMsgDOTACombatLogEntry, gt float64) {
	target := c.clName(m.GetTargetName())
	attacker := c.clName(m.GetAttackerName())
	switch {
	case m.GetIsTargetHero() && !m.GetIsTargetIllusion():
		victim := c.byHero[target]
		if victim == nil {
			return
		}
		k := heroKill{gameTime: gt, victim: victim, killer: c.heroOf(m, attacker), reincarnate: m.GetWillReincarnate()}
		if k.killer == nil {
			k.killerName = attacker
		}
		c.kills = append(c.kills, k)
	case m.GetIsTargetBuilding() && strings.Contains(target, "tower"):
		c.towers = append(c.towers, towerKill{gameTime: gt, name: target})
	case strings.Contains(target, "_wards") && attacker != target:
		// an expired ward is logged as killed by itself; anything else dewarded it
		c.wardDead = append(c.wardDead, &wardKill{gameTime: gt, team: int(m.GetTargetTeam()), kind: wardKind(target), killer: c.heroOf(m, attacker)})
	}
}

// heroOf credits summons (zombies, treants...) to their hero through the
// damage source, as OpenDota does.
func (c *collector) heroOf(m *dota.CMsgDOTACombatLogEntry, attacker string) *player {
	if pl := c.byHero[attacker]; pl != nil {
		return pl
	}
	return c.byHero[c.clName(m.GetDamageSourceName())]
}

func (c *collector) onItem(m *dota.CMsgDOTACombatLogEntry, gt float64) {
	pl := c.byHero[c.clName(m.GetAttackerName())]
	item := c.clName(m.GetInflictorName())
	if pl == nil {
		return
	}
	if item == smokeItem {
		cast := &smokeCast{gameTime: gt, pl: pl}
		if hero := c.p.FindEntityByHandle(pl.handle); hero != nil {
			cast.gx, cast.gy = posX(hero), posY(hero)
		}
		c.smokes = append(c.smokes, cast)
		return
	}
	if strings.Contains(item, "ward") {
		c.wardUses = append(c.wardUses, wardUse{gameTime: gt, pl: pl})
	}
}

// onSmokeModifier tracks who carried the smoke: the modifier add names the
// caster as attacker, the remove (broken or expired) closes the interval.
func (c *collector) onSmokeModifier(m *dota.CMsgDOTACombatLogEntry, gt float64, added bool) {
	if c.clName(m.GetInflictorName()) != smokeModifier {
		return
	}
	target := c.byHero[c.clName(m.GetTargetName())]
	if target == nil || m.GetIsTargetIllusion() {
		return
	}
	if added {
		if cast := c.lastSmokeBy(c.byHero[c.clName(m.GetAttackerName())], gt); cast != nil {
			cast.heroes = append(cast.heroes, &smokedHero{pl: target, gameStart: gt})
		}
		return
	}
	if h := c.openSmoke(target); h != nil {
		h.gameEnd, h.ended = gt, true
	}
}

func (c *collector) lastSmokeBy(caster *player, gt float64) *smokeCast {
	for i := len(c.smokes) - 1; i >= 0; i-- {
		s := c.smokes[i]
		if gt-s.gameTime > smokeJoinWindow {
			return nil
		}
		if s.pl == caster {
			return s
		}
	}
	return nil
}

func (c *collector) openSmoke(pl *player) *smokedHero {
	for i := len(c.smokes) - 1; i >= 0; i-- {
		for _, h := range c.smokes[i].heroes {
			if h.pl == pl && !h.ended {
				return h
			}
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
	vision := c.visionSources()
	for _, pl := range c.players {
		tr := pl.track
		hero := c.p.FindEntityByHandle(pl.handle)
		if hero == nil {
			tr.repeatLast()
			continue
		}
		tr.gx = append(tr.gx, posX(hero))
		tr.gy = append(tr.gy, posY(hero))
		alive := num(hero, "m_lifeState") == 0
		tr.alive = append(tr.alive, alive)
		canBeSeen := alive && !isInvisible(hero)
		tr.seen = append(tr.seen, canBeSeen && vision[enemyOf(pl.team)].sees(posX(hero), posY(hero)))
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
		tr.gx, tr.gy, tr.alive, tr.seen = append(tr.gx, 0), append(tr.gy, 0), append(tr.alive, true), append(tr.seen, false)
		return
	}
	tr.gx, tr.gy = append(tr.gx, tr.gx[n-1]), append(tr.gy, tr.gy[n-1])
	tr.alive, tr.seen = append(tr.alive, tr.alive[n-1]), append(tr.seen, tr.seen[n-1])
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

// dewarder finds the combat log ward death matching a removed ward, if any.
func (c *collector) dewarder(w *wardSeen) (*wardKill, bool) {
	for _, k := range c.wardDead {
		if !k.used && k.team == w.team && k.kind == w.kind && math.Abs(k.gameTime-w.gameEnd) <= wardKillWindow {
			k.used = true
			return k, true
		}
	}
	return nil, false
}

func wardKind(unitName string) string {
	if strings.Contains(unitName, "sentry") {
		return "sen"
	}
	return "obs"
}

func enemyOf(team int) int {
	if team == teamRadiant {
		return teamDire
	}
	return teamRadiant
}

// circle is one unit's vision on the grid.
type circle struct{ x, y, r2 float64 }

type visionSet []circle

func (v visionSet) sees(x, y float64) bool {
	for _, c := range v {
		dx, dy := x-c.x, y-c.y
		if dx*dx+dy*dy <= c.r2 {
			return true
		}
	}
	return false
}

// visionSources lists every living unit's vision circle per team.
// ponytail: plain radius, no trees, high ground or true sight; good enough to
// fade unseen enemies, upgrade to a fog-of-war grid if exact visibility matters.
func (c *collector) visionSources() map[int]visionSet {
	night := c.isNight()
	sources := map[int]visionSet{}
	for _, e := range c.p.FilterEntity(func(e *manta.Entity) bool { return e != nil }) {
		team := int(num(e, "m_iTeamNum"))
		if team != teamRadiant && team != teamDire {
			continue
		}
		r := num(e, "m_iDayTimeVisionRange")
		if night {
			r = num(e, "m_iNightTimeVisionRange")
		}
		if r <= 0 || num(e, "m_lifeState") != 0 {
			continue
		}
		cells := r / unitsPerCell
		sources[team] = append(sources[team], circle{posX(e), posY(e), cells * cells})
	}
	return sources
}

func (c *collector) isNight() bool {
	frac := num(c.rules, "m_pGameRules.m_iNetTimeOfDay") / timeOfDayScale
	return frac < dayStart || frac >= dayEnd
}

func isInvisible(e *manta.Entity) bool {
	state, _ := e.GetUint64("m_nUnitState64")
	return state&(1<<invisibleBit) != 0
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
