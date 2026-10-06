import { useState } from "react";
import { useParams } from "react-router";
import { Cena3D } from "./Cena3D";
import { urlDoModelo } from "./ficha";

// Só o script das imagens paradas abre esta página: modelo parado, sem giro, e o aviso "pronto" depois de carregar.
export function PaginaPoster() {
  const { modelo = "" } = useParams();
  const [pronto, setPronto] = useState(false);
  return (
    <div style={{ width: 512, height: 512, background: "var(--cor-fundo)" }}>
      <Cena3D url={urlDoModelo(modelo)} girarSozinho={false} aoCarregar={() => setPronto(true)} />
      {pronto && <output>pronto</output>}
    </div>
  );
}
