import { loadJson } from "./load";
import { metaSchema } from "./schemas";

const resposta = (corpo: unknown, status = 200) =>
  (async () => new Response(JSON.stringify(corpo), { status })) as unknown as typeof fetch;

it("devolve os dados quando o formato bate", async () => {
  const r = await loadJson("/data/meta.json", metaSchema, resposta({ exportado_em: "2026-10-06T10:00:00+00:00", patch: "7.41", contagens: { rotas: 1, objetivos: 1, termos: 1 } }));
  expect(r.ok).toBe(true);
});

it("vira indisponível quando o arquivo falta", async () => {
  const r = await loadJson("/data/meta.json", metaSchema, resposta({}, 404));
  expect(r).toEqual({ ok: false, motivo: "arquivo /data/meta.json não encontrado (404)" });
});

it("vira indisponível quando o formato não bate", async () => {
  const r = await loadJson("/data/meta.json", metaSchema, resposta({ patch: 7 }));
  expect(r.ok).toBe(false);
});

it("vira indisponível quando o corpo não é JSON", async () => {
  const html = (async () => new Response("<!doctype html>", { status: 200 })) as unknown as typeof fetch;
  const r = await loadJson("/data/meta.json", metaSchema, html);
  expect(r).toEqual({ ok: false, motivo: "JSON inválido em /data/meta.json" });
});

it("página HTML no lugar do JSON conta como arquivo que falta", async () => {
  const spa = (async () => new Response("<!doctype html>", { status: 200, headers: { "content-type": "text/html" } })) as unknown as typeof fetch;
  const r = await loadJson("/data/times_atlas/nao-existe.json", metaSchema, spa);
  expect(r).toEqual({ ok: false, motivo: "arquivo /data/times_atlas/nao-existe.json não encontrado" });
});
