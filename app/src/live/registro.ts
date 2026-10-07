export type Registro = Readonly<{
  nivel: "info" | "warn" | "error";
  operacao: string;
  duracaoMs?: number;
  codigo?: string | null;
  detalhe?: string;
}>;
export type Registrar = (registro: Registro) => void;

const METODO = { info: "debug", warn: "warn", error: "error" } as const;

export const registrarNoConsole: Registrar = (registro) => {
  console[METODO[registro.nivel]](JSON.stringify({ momento: new Date().toISOString(), ...registro }));
};
