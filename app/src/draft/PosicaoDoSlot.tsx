import { ehPosicaoId, POSICOES, ROTULO_DA_LANE, ROTULO_DA_POSICAO, type PosicaoId, type SlotDeHeroi } from "./posicoesPro";

const pct = (fracao: number) => `${Math.round(fracao * 100)}%`;

/** Posição e lane prováveis de um herói no tabuleiro, com a % de pro que sustenta e um seletor para trocar à mão. */
export function PosicaoDoSlot({ slot, onTrocar }: { slot: SlotDeHeroi; onTrocar: (posicao: PosicaoId) => void }) {
  return (
    <span className="draft-posicao-slot">
      <select
        className="draft-posicao-select"
        aria-label={`Posição de ${ROTULO_DA_POSICAO[slot.posicao]}`}
        value={slot.posicao}
        onChange={(e) => {
          const valor = Number(e.target.value);
          if (ehPosicaoId(valor)) onTrocar(valor);
        }}
      >
        {POSICOES.map((p) => <option key={p} value={p}>{ROTULO_DA_POSICAO[p]}</option>)}
      </select>
      <span className="draft-posicao-lane">
        {ROTULO_DA_LANE[slot.lane]}
        {slot.fracaoPro !== null && ` · ${pct(slot.fracaoPro)} dos pros nessa posição`}
      </span>
    </span>
  );
}
