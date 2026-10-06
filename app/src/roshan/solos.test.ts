import type { ConteudoItem } from "../data/schemas";
import { ordenarSolos, quantosSolos, replaysDoSolo } from "./solos";

const solo = (id: string, extras: Record<string, string>, replays: string[] = []): ConteudoItem => ({
  id, titulo: id, patch: "7.41", fontes: replays.map((r) => `replay ${r}`), secoes: { basico: "b", avancado: "a" },
  origem: { basico: { tipo: "replay", replays }, avancado: { tipo: "replay", replays } }, links: [], extras,
});

it.each<{ extras: Record<string, string>; esperado: number }>([
  { extras: { solos: "58" }, esperado: 58 },
  { extras: { solos: "abc" }, esperado: 0 },
  { extras: {}, esperado: 0 },
])("quantosSolos lê $extras como $esperado", ({ extras, esperado }) => {
  expect(quantosSolos(solo("x", extras))).toBe(esperado);
});

it("ordena do herói com mais solos para o com menos, sem mudar a lista recebida", () => {
  const lista = [solo("ursa", { solos: "8" }), solo("huskar", { solos: "58" }), solo("kez", { solos: "4" })];
  expect(ordenarSolos(lista).map((s) => s.id)).toEqual(["huskar", "ursa", "kez"]);
  expect(lista[0]?.id).toBe("ursa");
});

it("conta os replays da marca do básico", () => {
  expect(replaysDoSolo(solo("huskar", {}, ["1", "2", "3"]))).toBe(3);
});
