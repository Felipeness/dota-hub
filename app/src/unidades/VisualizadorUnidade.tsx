import { Component, lazy, Suspense, useState, type ReactNode } from "react";
import { hasWebGL } from "../map/webgl";
import { urlDoModelo, urlDoPoster } from "./ficha";

const Cena3D = lazy(() => import("./Cena3D").then((m) => ({ default: m.Cena3D })));

export type VisualizadorProps = { modelo: string | null; nome: string };

type LimiteProps = { fallback: ReactNode; children: ReactNode };

// Limite de erro só existe como classe no React.
class LimiteDeErro extends Component<LimiteProps, { falhou: boolean }> {
  state = { falhou: false };
  static getDerivedStateFromError() {
    return { falhou: true };
  }
  componentDidCatch(erro: unknown) {
    console.error("modelo 3D:", erro);
  }
  render() {
    return this.state.falhou ? this.props.fallback : this.props.children;
  }
}

function Aviso({ onTentar }: { onTentar?: () => void }) {
  return (
    <div role="status" className="modelo-aviso">
      <p>Modelo indisponível.</p>
      {onTentar && <button className="pilula" onClick={onTentar}>Tentar de novo</button>}
    </div>
  );
}

export function VisualizadorUnidade({ modelo, nome }: VisualizadorProps) {
  const [tentativa, setTentativa] = useState(0);
  if (modelo === null) return <figure className="modelo"><Aviso /></figure>;
  const poster = <img className="modelo-poster" src={urlDoPoster(modelo)} alt={`Imagem do modelo de ${nome}`} />;
  if (!hasWebGL()) return <figure className="modelo">{poster}</figure>;
  return (
    <figure className="modelo" aria-label={`Modelo 3D de ${nome}, girando`}>
      <LimiteDeErro key={tentativa} fallback={<Aviso onTentar={() => setTentativa((n) => n + 1)} />}>
        <Suspense fallback={poster}>
          <Cena3D url={urlDoModelo(modelo, tentativa)} />
        </Suspense>
      </LimiteDeErro>
    </figure>
  );
}
