import { detalheDaAmostraCompleta } from "../../analise/amostras/amostraCompleta";
import { tempoDaPartida } from "./detalhe";
import { estaMorto, nivelNoTempo, respawnDoNivel, wardAtiva, type MorteNoPanorama, type WardNoPanorama } from "./panorama";

const XP_POR_NIVEL = [0, 240, 640, 1160, 1760, 2440, 3200, 4000, 4900, 5900, 7000, 8200, 9500];

describe("respawn por nível", () => {
  it.each([
    { nivel: 1, segundos: 12 }, { nivel: 5, segundos: 24 }, { nivel: 6, segundos: 26 }, { nivel: 12, segundos: 44 },
    { nivel: 18, segundos: 65 }, { nivel: 25, segundos: 100 }, { nivel: 30, segundos: 100 },
  ])("nível $nivel volta em $segundos s", ({ nivel, segundos }) => {
    expect(respawnDoNivel(nivel)).toBe(segundos);
  });

  it.each([
    { caso: "buzina", xpT: [0, 300], t: 0, nivel: 1 },
    { caso: "meio do minuto 1 interpola 0→640", xpT: [0, 640], t: 30, nivel: 2 },
    { caso: "depois do fim da curva usa o último ponto", xpT: [0, 640, 1200], t: 600, nivel: 4 },
    { caso: "sem curva", xpT: [], t: 60, nivel: null },
  ])("nivelNoTempo: $caso", ({ xpT, t, nivel }) => {
    expect(nivelNoTempo(xpT, XP_POR_NIVEL, t)).toBe(nivel);
  });
});

describe("instante", () => {
  const morte: MorteNoPanorama = { t: 100, voltaEm: 130, matador: null, ponto: null };
  const ward: WardNoPanorama = { tipo: "observer", lado: "radiant", ponto: [0.5, 0.5], de: 60, ate: 420 };
  it.each([
    { t: 99, morto: false, ativa: true }, { t: 100, morto: true, ativa: true }, { t: 129, morto: true, ativa: true },
    { t: 130, morto: false, ativa: true }, { t: 420, morto: false, ativa: false }, { t: 59, morto: false, ativa: false },
  ])("t=$t: morto $morto, ward ativa $ativa", ({ t, morto, ativa }) => {
    expect(estaMorto(morte, t)).toBe(morto);
    expect(wardAtiva(ward, t)).toBe(ativa);
  });

  it("morte sem respawn conhecido não conta como morto (não inventa tempo)", () => {
    expect(estaMorto({ ...morte, voltaEm: null }, 110)).toBe(false);
  });
});

describe("panorama da partida 9046905170", () => {
  const { panorama } = detalheDaAmostraCompleta();
  const jogador = (nome: string) => panorama.jogadores.find((j) => j.heroi.nome === nome);

  it("traz os 10 heróis com o respawn real (time_dead) de cada morte", () => {
    expect(panorama.jogadores).toHaveLength(10);
    const axe = jogador("Axe")?.mortes.find((m) => m.t === 31 * 60 + 4);
    expect(axe && tempoDaPartida(axe.voltaEm ?? 0)).toBe("31:56");
    const medusa = jogador("Medusa")?.mortes.map((m) => tempoDaPartida(m.t));
    expect(medusa).toEqual(["8:34", "11:01", "16:06", "18:50", "24:58", "28:33", "31:38", "46:10", "49:51"]);
  });

  it("estruturas viram ids do mapa e nomes legíveis, com o dono certo", () => {
    expect(panorama.estruturas[0]).toMatchObject({ t: 698, lado: "radiant", id: "rad_bot_t1", nome: "T1 de baixo" });
    expect(panorama.estruturas.find((e) => e.t === 1547)).toMatchObject({ id: "rad_mid_t2", nome: "T2 do meio" });
    expect(panorama.estruturas.find((e) => e.t === 3040)).toMatchObject({ id: "rad_bot_rax", nome: "Barracks de baixo" });
    expect(panorama.estruturas.at(-1)).toMatchObject({ id: "rad_ancient", nome: "Ancient" });
  });

  it("Roshan do Dire com Aegis até a morte do portador ou 5 min", () => {
    expect(panorama.roshans.map((r) => r.lado)).toEqual(["dire", "dire", "dire"]);
    const [primeiro] = panorama.roshans;
    // Ursa pegou às 26:23 e só morreu às 30:06, então a Aegis vai até 31:23 (expira) ou até essa morte.
    expect(primeiro && tempoDaPartida(primeiro.aegisAte ?? 0)).toBe("30:06");
  });

  it("wards dos dois times saem pelo left_log quando há, senão duram o tempo da ward", () => {
    const radiant = panorama.wards.filter((w) => w.lado === "radiant");
    const dire = panorama.wards.filter((w) => w.lado === "dire");
    expect(radiant.length).toBeGreaterThan(0);
    expect(dire.length).toBeGreaterThan(0);
    // Primeira observer do Earth Spirit: -0:59 até 5:01 (obs_left_log, ehandle 852932).
    expect(panorama.wards[0]).toMatchObject({ tipo: "observer", lado: "radiant", de: -59, ate: 301 });
    expect(panorama.wards.every((w) => w.ate > w.de)).toBe(true);
  });
});
