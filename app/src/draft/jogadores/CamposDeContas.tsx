import { mensagemDoErro } from "../../live/erros";
import type { EstadoDaBusca, IdentidadeDaConta } from "./buscas";
import { CONTAS_POR_TIME, camposCompletos, espalharColagem, type CampoDeConta } from "./contasDoDraft";
import { ContaNaLista } from "./ContaNaLista";

type Props = Readonly<{
  textos: readonly string[];
  campos: readonly CampoDeConta[];
  identidades: ReadonlyMap<number, EstadoDaBusca<IdentidadeDaConta>>;
  onMudar: (textos: readonly string[]) => void;
  onAnalisar: () => void;
}>;

const TIMES = [
  { id: "aliados", titulo: "Seu time", rotulo: "Aliado", inicio: 0 },
  { id: "inimigos", titulo: "Time inimigo", rotulo: "Inimigo", inicio: CONTAS_POR_TIME },
] as const;

function Confirmacao({ campo, identidade }: { campo: CampoDeConta; identidade: EstadoDaBusca<IdentidadeDaConta> | undefined }) {
  if (campo.estado !== "valido") return null;
  if (!identidade || identidade.estado === "carregando") return <p className="draft-nota">Buscando a conta…</p>;
  if (identidade.estado === "erro") return <p className="draft-nota">{mensagemDoErro(identidade.erro, "conta")}</p>;
  const { nome, avatar } = identidade.dados;
  if (nome === null) return <p className="draft-nota">Conta {campo.conta} sem nome público: perfil privado ou conta nova.</p>;
  return <ContaNaLista nome={nome} avatar={avatar} />;
}

function Campo({ indice, rotulo, props }: { indice: number; rotulo: string; props: Props }) {
  const { textos, campos, identidades, onMudar } = props;
  const campo = campos[indice] ?? { estado: "vazio" as const };
  const idDoErro = `jog-erro-${indice}`;
  const trocar = (texto: string) => onMudar(textos.map((atual, i) => (i === indice ? texto : atual)));
  return (
    <div className="jog-campo">
      <label htmlFor={`jog-campo-${indice}`}>{rotulo}</label>
      <input
        id={`jog-campo-${indice}`} type="text" value={textos[indice] ?? ""} autoComplete="off" spellCheck={false}
        placeholder="Friend ID, Steam64 ou link"
        aria-invalid={campo.estado === "erro"} aria-describedby={campo.estado === "erro" ? idDoErro : undefined}
        onChange={(e) => trocar(e.target.value)}
        onPaste={(e) => {
          const espalhado = espalharColagem(textos, indice, e.clipboardData.getData("text"));
          if (!espalhado) return;
          e.preventDefault();
          onMudar(espalhado);
        }}
      />
      {campo.estado === "erro" && <p id={idDoErro} className="jog-erro-campo">{campo.mensagem}</p>}
      <Confirmacao campo={campo} identidade={campo.estado === "valido" ? identidades.get(campo.conta) : undefined} />
    </div>
  );
}

export function CamposDeContas(props: Props) {
  const completo = camposCompletos(props.campos);
  return (
    <form className="jog-formulario" onSubmit={(e) => { e.preventDefault(); if (completo) props.onAnalisar(); }}>
      <p className="draft-nota">Cole um ID, ou os dez de uma vez separados por espaço, vírgula ou linha: eles preenchem os campos em sequência.</p>
      <div className="jog-times">
        {TIMES.map(({ id, titulo, rotulo, inicio }) => (
          <fieldset key={id} className={`jog-time draft-fileira draft-${id}`}>
            <legend>{titulo}</legend>
            {Array.from({ length: CONTAS_POR_TIME }, (_, i) => (
              <Campo key={i} indice={inicio + i} rotulo={`${rotulo} ${i + 1}`} props={props} />
            ))}
          </fieldset>
        ))}
      </div>
      <button type="submit" className="jog-analisar" disabled={!completo}>Analisar o draft</button>
      {!completo && <p className="draft-nota">Preencha as 10 contas, sem repetir, para analisar.</p>}
    </form>
  );
}
