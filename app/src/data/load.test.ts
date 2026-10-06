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
