import { retratoDoCdn, retratoLocal } from "./dados";
import type { HeroiDraft } from "./pontuacao";

/** Retrato do export; herói novo que o export ainda não baixou cai no CDN da Valve. */
export function Retrato({ heroi, className = "draft-retrato" }: { heroi: Pick<HeroiDraft, "nome" | "npc">; className?: string }) {
  return (
    <img
      className={className}
      src={retratoLocal(heroi.nome)}
      alt=""
      width={64}
      height={36}
      loading="lazy"
      onError={(e) => {
        const cdn = retratoDoCdn(heroi.npc);
        if (e.currentTarget.src !== cdn) e.currentTarget.src = cdn;
      }}
    />
  );
}
