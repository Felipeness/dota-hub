import type { AreaDoPlacar, Selo } from "../placarPorArea";

const ROTULO_DO_SELO: Readonly<Record<Selo, string>> = {
  ponto_forte: "ponto forte", dentro_da_faixa: "dentro da faixa do pro", abaixo_do_pro: "abaixo do pro", sem_benchmark: "sem benchmark",
};

export function PlacarPorArea({ areas }: { areas: readonly AreaDoPlacar[] }) {
  return (
    <ul className="placar-por-area" aria-label="Placar por área, comparado a pro">
      {areas.map((area) => (
        <li key={area.area} className={`placar-area placar-area-${area.selo}`}>
          <p className="placar-area-nome">{area.area}</p>
          <p className="placar-area-valor">{area.valor === null ? "sem dado" : area.valor.toLocaleString("pt-BR")} <span>{area.unidade}</span></p>
          <p className="placar-area-selo">{ROTULO_DO_SELO[area.selo]}</p>
          <p className="placar-area-comparacao">{area.comparacao}</p>
        </li>
      ))}
    </ul>
  );
}
