// "Manta dodge": Manta Style conta como desvio contra habilidade que resolve com atraso (Laguna Blade, Finger of
// Death) ou com projétil em voo (Assassinate, Storm Hammer, Viper Strike, Noxious Plague), igual ao Berserker's
// Call do Axe. Uma habilidade que não foi confirmada (sem entrada em interacoes.ts) não gera o desvio.
import { ITENS, heroi } from "./amostras/gravadas";
import { habilidade, type Habilidade, type MecanicaId } from "./modelo";
import { recursosContra } from "./respostas";

const meu = heroi("antimage"); // "meu" não importa para o tipo "desvio": só achadas e itens entram na conta.

const manta = (mecanica: MecanicaId, achadas: Habilidade[]) =>
  recursosContra({ mecanica, achadas, meu, itens: ITENS }).find((r) => r.id === "item:manta");

it("Lina: Manta dodga a Laguna Blade no atraso pós-conjuração, sem a janela automática de fim de cast", () => {
  const lagunaBlade = habilidade("lina_laguna_blade", {
    dname: "Laguna Blade", behavior: "Unit Target", dmg_type: "Magical", bkbpierce: "No",
    desc: "Fires off a bolt of lightning at a single enemy unit, dealing massive damage.",
    attrib: [
      { key: "damage_delay", header: "DAMAGE DELAY:", value: "0.25" },
      { key: "abilitycastpoint", header: "CAST TIME:", value: "0.3" },
    ],
  });
  const recurso = manta("magico", [lagunaBlade]);
  expect(recurso?.resumo).toBe("Manta durante o atraso da Laguna Blade: você some e o dano não acontece.");
  expect(recurso?.detalhes.join(" ")).toMatch(/0,25s depois/);
  expect(recurso?.detalhes.some((d) => d.startsWith("Janela:"))).toBe(false);
});

it("Sniper: Manta dodga o Assassinate disjointando a bala em voo, sem a janela automática de fim de cast", () => {
  const assassinate = habilidade("sniper_assassinate", {
    dname: "Assassinate", behavior: "Unit Target", dmg_type: "Magical", bkbpierce: "No", dispellable: "No",
    desc: "Sniper locks onto a target enemy unit and, after a short aiming duration, fires a devastating shot.",
    attrib: [
      { key: "projectile_speed", header: "PROJECTILE SPEED:", value: "2500" },
      { key: "abilitycastpoint", header: "AIM DURATION:", value: "2" },
    ],
  });
  const recurso = manta("magico", [assassinate]);
  expect(recurso?.resumo).toBe("Manta durante o voo da bala do Assassinate: o tiro perde o alvo.");
  expect(recurso?.detalhes.join(" ")).toMatch(/2500 de velocidade/);
  expect(recurso?.detalhes.some((d) => d.startsWith("Janela:"))).toBe(false);
  // dispellable "No" ainda gera o aviso genérico de pós-acerto, que continua verdadeiro pro disjoint.
  expect(recurso?.detalhes).toContain("Depois que o Assassinate pegou, o dispel do Manta Style não tira: ele não sai com dispel.");
});

it("habilidade recusada (sem verificação em duas fontes) não gera o desvio do Manta", () => {
  const shackles = habilidade("shadow_shaman_shackles", {
    dname: "Shackles", behavior: ["Unit Target", "Channeled"], dmg_type: "Magical", bkbpierce: "No", dispellable: "Strong Dispels Only",
    desc: "Magically binds an enemy unit so that it cannot move or attack.",
    attrib: [{ key: "abilitycastpoint", header: "CAST TIME:", value: "0.3" }],
  });
  expect(manta("controle", [shackles])).toBeUndefined();
});

it("ainda calcula a janela automática pro Berserker's Call, que resolve no fim da conjuração", () => {
  const call = habilidade("axe_berserkers_call", {
    dname: "Berserker's Call", behavior: "No Target", bkbpierce: "Yes", dispellable: "No",
    desc: "Axe taunts nearby enemy units.",
    attrib: [{ key: "abilitycastpoint", header: "CAST TIME:", value: "0.3" }],
  });
  const recurso = manta("controle", [call]);
  expect(recurso?.detalhes.some((d) => d.startsWith("Janela:"))).toBe(true);
});
