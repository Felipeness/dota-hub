// Prancheta tática: o mapa do site como quadro para desenhar jogadas em passos. Diferente de uma prancheta comum,
// ela carrega um lance real de partida (heróis e wards do replay), mostra camadas com os dados do site e cabe
// inteira num link.
import { useCallback, useEffect, useMemo, useReducer, useRef, useState, type ChangeEvent } from "react";
import { useSearchParams } from "react-router";
import { heroisCatalogoSchema, objetivosSchema } from "../data/schemas";
import { dadosOuVazio, useData } from "../data/useData";
import { pedirTrajetos } from "../replay/trajetos";
import { prefereMenosMovimento } from "../analise/componentes/movimento";
import { baixarArquivo, gerarImagem, podeCompartilhar } from "./exportarImagem";
import { CAMERA_INTEIRA, centroDaCamera, interpolarPassos, interpolarTracos, suavizar, zoomNoPonto, type Camera } from "./geometria";
import { iconesDoLance, lerTempo, tempoDoLance } from "./lance";
import { codificar, codigoDoHash, comSalvo, decodificar, gravarSalvos, hashDoQuadro, lerJson, lerSalvos, TAMANHO_MAXIMO_DO_LINK, type Salvo } from "./link";
import { BarraDeFerramentas, BotaoDeIcone, FormularioDoLance, PainelDeOpcoes, PainelDePecas, TECLA_DA_FERRAMENTA } from "./Paineis";
import type { Camadas } from "./Pecas";
import { estadoInicial, indiceAtual, passoAtual, reduzir, type Acao, type Cor, type Espessura, type Passo, type Quadro, type Time } from "./quadro";
import { Tabuleiro, type Ferramenta, type Opcoes } from "./Tabuleiro";
import { ROTA_DA_PRANCHETA } from "./rota";
import { carregarPontosDeWard, type PontoDeWard } from "./wardsDosPros";
import "./prancheta.css";

const TRANSICAO_MS = 1_100;
const PAUSA_ENTRE_PASSOS_MS = 600;
const PASSO_SEM_ANIMACAO_MS = 1_200;
const CAMADAS_INICIAIS: Camadas = { torres: true, estruturas: false, camps: false, runas: false, wards: false };
const OPCOES_INICIAIS: Opcoes = { raioDasWards: true, travarIcones: false, escala: 1 };

const MANTEM_A_SELECAO: ReadonlySet<Acao["tipo"]> = new Set(["transladar", "ajustar", "anotar"]);
/** Setas empurram o item selecionado 1 unidade do mapa; com Shift, 10. */
const EMPURRAO = 1;
const EMPURRAO_COM_SHIFT = 10;
const DIRECAO_DA_SETA: Readonly<Record<string, readonly [number, number]>> = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };

type QuadroDaReproducao = Readonly<{ de: number; f: number }>;
type Aviso = Readonly<{ texto: string; link?: string }>;
type EstadoDoLance = Readonly<{ estado: "parado" | "carregando" | "ok" | "erro"; texto: string }>;
type AbaDoCelular = "opcoes" | "herois" | "mapa";

const TIPOS_SEM_TEXTO = new Set(["checkbox", "radio", "range", "button", "file"]);
/** Campo onde a tecla vira texto; caixa de marcar e faixa não seguram os atalhos. */
const ehCampoDeTexto = (alvo: EventTarget | null) =>
  alvo instanceof HTMLTextAreaElement || alvo instanceof HTMLSelectElement || (alvo instanceof HTMLInputElement && !TIPOS_SEM_TEXTO.has(alvo.type));

/** Reproduzir: passo a passo, com os ícones andando entre passos; com prefers-reduced-motion, só troca de passo. */
function useReproducao(total: number, despachar: (a: Acao) => void) {
  const [tocando, setTocando] = useState(false);
  const [quadro, setQuadro] = useState<QuadroDaReproducao | null>(null);
  const reduzir = prefereMenosMovimento();
  useEffect(() => {
    if (!tocando) return;
    const ultimo = total - 1;
    const terminar = () => { setQuadro(null); setTocando(false); despachar({ tipo: "irAoPasso", indice: ultimo }); };
    if (reduzir) {
      let indice = 0;
      despachar({ tipo: "irAoPasso", indice });
      const relogio = setInterval(() => {
        indice += 1;
        if (indice > ultimo) return terminar();
        despachar({ tipo: "irAoPasso", indice });
      }, PASSO_SEM_ANIMACAO_MS);
      return () => clearInterval(relogio);
    }
    const inicio = performance.now();
    let pedido = 0;
    const desenhar = (agora: number) => {
      const decorrido = agora - inicio;
      const de = Math.floor(decorrido / (TRANSICAO_MS + PAUSA_ENTRE_PASSOS_MS));
      if (de >= ultimo) return terminar();
      setQuadro({ de, f: Math.min(1, (decorrido - de * (TRANSICAO_MS + PAUSA_ENTRE_PASSOS_MS)) / TRANSICAO_MS) });
      pedido = requestAnimationFrame(desenhar);
    };
    pedido = requestAnimationFrame(desenhar);
    return () => cancelAnimationFrame(pedido);
  }, [tocando, total, reduzir, despachar]);
  return { tocando, quadro, alternar: () => { setQuadro(null); setTocando((t) => !t && total > 1); } };
}

/** Camada "Wards dos pros": só baixa as partidas quando a camada é ligada. */
function usePontosDeWard(ligada: boolean) {
  const [estado, setEstado] = useState<{ pontos: PontoDeWard[]; aviso: string | null; pedido: boolean }>({ pontos: [], aviso: null, pedido: false });
  useEffect(() => {
    if (!ligada || estado.pedido) return;
    setEstado({ pontos: [], aviso: "Somando as wards das partidas pro…", pedido: true });
    carregarPontosDeWard()
      .then((pontos) => setEstado({ pontos, aviso: `${pontos.length} pontos com 3+ wards nas partidas pro do site.`, pedido: true }))
      .catch((erro: unknown) => setEstado({ pontos: [], aviso: `Sem os pontos de ward: ${String(erro)}`, pedido: false }));
  }, [ligada, estado.pedido]);
  return { pontos: ligada ? estado.pontos : [], aviso: ligada ? estado.aviso : null };
}

export function PranchetaPage() {
  const [estado, despacharBruto] = useReducer(reduzir, undefined, () => estadoInicial());
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const despachar = useCallback((acao: Acao) => {
    despacharBruto(acao);
    if (!MANTEM_A_SELECAO.has(acao.tipo)) setSelecionado(null);
  }, []);
  const [ferramenta, setFerramenta] = useState<Ferramenta>({ tipo: "selecionar" });
  const [cor, setCor] = useState<Cor>("ouro");
  const [espessura, setEspessura] = useState<Espessura>("media");
  const [camadas, setCamadas] = useState<Camadas>(CAMADAS_INICIAIS);
  const [opcoes, setOpcoes] = useState<Opcoes>(OPCOES_INICIAIS);
  const [camera, setCamera] = useState<Camera>(CAMERA_INTEIRA);
  const [time, setTime] = useState<Time>("radiant");
  const [abaDasPecas, setAbaDasPecas] = useState<"herois" | "mapa">("herois");
  const [abaDoCelular, setAbaDoCelular] = useState<AbaDoCelular>("herois");
  const [aviso, setAviso] = useState<Aviso | null>(null);
  const [lance, setLance] = useState<EstadoDoLance>({ estado: "parado", texto: "" });
  const svg = useRef<SVGSVGElement>(null);
  const raiz = useRef<HTMLDivElement>(null);

  const objetivos = dadosOuVazio(useData("/data/objetivos.json", objetivosSchema));
  const catalogo = dadosOuVazio(useData("/data/herois_catalogo.json", heroisCatalogoSchema));
  const idDoRetrato = useMemo(() => {
    const porInterno = new Map(catalogo.map((h) => [h.nome_interno, h.id]));
    return (interno: string) => porInterno.get(interno) ?? interno;
  }, [catalogo]);
  const wards = usePontosDeWard(camadas.wards);

  const passos = estado.presente.passos;
  const atual = indiceAtual(estado);
  const passo = passoAtual(estado);
  const reproducao = useReproducao(passos.length, despachar);
  const onCamera = useCallback((mudar: (c: Camera) => Camera) => setCamera(mudar), []);

  const carregarLance = useCallback(async (partida: string, tempo: string) => {
    const t = lerTempo(tempo);
    if (t === null) return setLance({ estado: "erro", texto: "Tempo inválido: use min:seg, como 28:33." });
    setLance({ estado: "carregando", texto: "Lendo o replay (até ~10 s na primeira vez)…" });
    const resultado = await pedirTrajetos(partida.trim());
    if (!resultado.ok) return setLance({ estado: "erro", texto: `Sem o replay: ${resultado.detalhe || resultado.erro}.` });
    const icones = iconesDoLance(resultado.trajetos, t, idDoRetrato);
    despachar({ tipo: "carregarLance", icones, nota: `Partida ${partida.trim()} aos ${tempoDoLance(t)}.` });
    const herois = icones.filter((i) => i.peca.tipo === "heroi").length;
    setLance({ estado: "ok", texto: `${herois} heróis e ${icones.length - herois} wards aos ${tempoDoLance(t)}.` });
  }, [despachar, idDoRetrato]);

  // Entradas pela URL: #q= abre um quadro compartilhado; ?partida=&t= (vindo da análise) carrega o lance.
  useEffect(() => {
    const codigo = codigoDoHash(location.hash);
    if (!codigo) return;
    void decodificar(codigo).then((r) => (r.ok ? despachar({ tipo: "abrir", quadro: r.quadro }) : setAviso({ texto: `Não deu para abrir o link: ${r.motivo}.` })));
  }, [despachar]);
  const [params] = useSearchParams();
  const lanceDaUrlLido = useRef(false);
  useEffect(() => {
    const partida = params.get("partida");
    const t = params.get("t");
    if (lanceDaUrlLido.current || catalogo.length === 0 || !partida || !t) return;
    lanceDaUrlLido.current = true;
    void carregarLance(partida, t);
  }, [catalogo.length, params, carregarLance]);

  const zoom = (fator: number) => setCamera((c) => zoomNoPonto(c, fator, centroDaCamera(c)));
  const telaCheia = () => {
    if (document.fullscreenElement) void document.exitFullscreen();
    else void raiz.current?.requestFullscreen?.();
  };

  useEffect(() => {
    const atalhos: Readonly<Record<string, () => void>> = {
      Escape: () => { setSelecionado(null); setFerramenta({ tipo: "selecionar" }); },
      Delete: () => { if (selecionado) despachar({ tipo: "remover", id: selecionado }); },
      Backspace: () => { if (selecionado) despachar({ tipo: "remover", id: selecionado }); },
      "+": () => zoom(1.5), "=": () => zoom(1.5), "-": () => zoom(1 / 1.5), f: telaCheia,
    };
    const aoTeclar = (e: KeyboardEvent) => {
      if (ehCampoDeTexto(e.target) || e.altKey) return;
      const tecla = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (e.ctrlKey || e.metaKey) {
        const historico = tecla === "z" ? (e.shiftKey ? "refazer" : "desfazer") : tecla === "y" ? "refazer" : null;
        if (!historico) return;
        e.preventDefault();
        return despachar({ tipo: historico });
      }
      const direcao = DIRECAO_DA_SETA[tecla];
      if (direcao && selecionado) {
        e.preventDefault();
        const empurrao = e.shiftKey ? EMPURRAO_COM_SHIFT : EMPURRAO;
        return despachar({ tipo: "transladar", id: selecionado, dx: direcao[0] * empurrao, dy: direcao[1] * empurrao });
      }
      const tipo = TECLA_DA_FERRAMENTA[tecla];
      const acao = tipo ? () => setFerramenta({ tipo }) : atalhos[tecla];
      if (!acao) return;
      e.preventDefault();
      acao();
    };
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  });

  const compartilhar = async () => {
    const link = `${location.origin}${ROTA_DA_PRANCHETA}${hashDoQuadro(await codificar(estado.presente))}`;
    if (link.length > TAMANHO_MAXIMO_DO_LINK) {
      return setAviso({ texto: `O quadro ficou grande demais para um link (${link.length.toLocaleString("pt-BR")} caracteres). Use Salvar ou Exportar .json.` });
    }
    history.replaceState(null, "", link);
    const copiou = await navigator.clipboard?.writeText(link).then(() => true, () => false);
    setAviso({ texto: copiou ? "Link copiado. Quem abrir vê todos os passos, ícones, traços e notas." : "Copie o link abaixo.", link });
  };

  const [imagem, setImagem] = useState<File | null>(null);
  const baixar = () => {
    if (!svg.current) return;
    gerarImagem(svg.current, `prancheta-passo-${atual + 1}`).then(setImagem, (erro: unknown) => setAviso({ texto: `Não deu para gerar a imagem: ${String(erro)}` }));
  };

  const exibido = reproducao.quadro;
  const de = exibido ? passos[exibido.de] : undefined;
  const para = exibido ? passos[exibido.de + 1] : undefined;
  const iconesNaTela = de && para && exibido ? interpolarPassos(de, para, suavizar(exibido.f)) : passo.icones.map((icone) => ({ icone, opacidade: 1 }));
  const passoNaTela: Passo = de && para && exibido ? (exibido.f < 1 ? { ...de, tracos: interpolarTracos(de, para, suavizar(exibido.f)) } : para) : passo;
  const passoDestacado = exibido ? exibido.de + (exibido.f >= 1 ? 1 : 0) : atual;

  const escolherAbaDoCelular = (aba: AbaDoCelular) => {
    setAbaDoCelular(aba);
    if (aba !== "opcoes") setAbaDasPecas(aba);
  };

  return (
    <div className="prancheta" ref={raiz} data-aba={abaDoCelular}>
      <h1 className="pr-oculto">Prancheta tática</h1>
      <BarraDeFerramentas ferramenta={ferramenta} onFerramenta={setFerramenta}
        podeDesfazer={estado.passado.length > 0} podeRefazer={estado.futuro.length > 0}
        onDesfazer={() => despachar({ tipo: "desfazer" })} onRefazer={() => despachar({ tipo: "refazer" })} onZoom={zoom} onTelaCheia={telaCheia} />
      <PainelDeOpcoes cor={cor} onCor={setCor} espessura={espessura} onEspessura={setEspessura}
        onLimpar={(alvo) => despachar({ tipo: "limpar", alvo })}
        camadas={camadas} onCamada={(c, ligada) => setCamadas((atuais) => ({ ...atuais, [c]: ligada }))} avisoDasWards={wards.aviso}
        opcoes={opcoes} onOpcoes={setOpcoes}
        lance={<FormularioDoLance estado={lance} onCarregar={(p, t) => void carregarLance(p, t)} />} />
      <section className="pr-centro" aria-label="Quadro">
        <BarraDePassos total={passos.length} atual={passoDestacado} tocando={reproducao.tocando} despachar={despachar}
          onReproduzir={reproducao.alternar} onCompartilhar={() => void compartilhar()} onBaixar={baixar}
          quadro={estado.presente} onAbrir={(q) => despachar({ tipo: "abrir", quadro: q })} onAviso={setAviso} />
        {aviso && (
          <div className="pr-aviso" role="status">
            <p>{aviso.texto}</p>
            {aviso.link && <input readOnly aria-label="Link da prancheta" value={aviso.link} onFocus={(e) => e.currentTarget.select()} />}
            <button type="button" className="link" onClick={() => setAviso(null)}>Fechar</button>
          </div>
        )}
        <Tabuleiro passo={passoNaTela} icones={iconesNaTela} ferramenta={ferramenta} cor={cor} espessura={espessura} opcoes={opcoes}
          camadas={camadas} objetivos={objetivos} pontosDeWard={wards.pontos} camera={camera} onCamera={onCamera}
          selecionado={selecionado} onSelecionar={setSelecionado} despachar={despachar} svgRef={svg} bloqueado={reproducao.tocando} />
        <label className="pr-nota">
          <span className="sobretitulo">Passo {atual + 1}</span>
          <textarea placeholder="O que acontece neste passo?" value={passo.nota} maxLength={2000} rows={3}
            onChange={(e) => despachar({ tipo: "anotar", nota: e.currentTarget.value })} />
        </label>
      </section>
      <div className="pr-abas-celular abas-pilula" role="tablist" aria-label="Painéis">
        {([["opcoes", "Opções"], ["herois", "Heróis"], ["mapa", "Mapa"]] as const).map(([aba, nome]) => (
          <button key={aba} type="button" role="tab" aria-selected={abaDoCelular === aba} onClick={() => escolherAbaDoCelular(aba)}>{nome}</button>
        ))}
      </div>
      {imagem && <PreviaDaImagem arquivo={imagem} onFechar={() => setImagem(null)} onAviso={setAviso} />}
      <PainelDePecas herois={catalogo} aba={abaDasPecas} onAba={(a) => { setAbaDasPecas(a); setAbaDoCelular(a); }} time={time} onTime={setTime}
        ferramenta={ferramenta} onPeca={(peca) => setFerramenta({ tipo: "colocar", peca })} />
    </div>
  );
}

type PropsDaBarra = Readonly<{
  total: number; atual: number; tocando: boolean; despachar: (a: Acao) => void;
  onReproduzir: () => void; onCompartilhar: () => void; onBaixar: () => void;
  quadro: Quadro; onAbrir: (q: Quadro) => void; onAviso: (a: Aviso) => void;
}>;

function BarraDePassos(p: PropsDaBarra) {
  return (
    <div className="pr-passos">
      <div className="pr-lista-passos" role="group" aria-label="Passos">
        <span className="sobretitulo">Passos</span>
        {Array.from({ length: p.total }, (_, i) => (
          <button key={i} type="button" className="pr-passo" aria-pressed={i === p.atual} aria-label={`Passo ${i + 1}`} disabled={p.tocando}
            onClick={() => p.despachar({ tipo: "irAoPasso", indice: i })}>{i + 1}</button>
        ))}
        <BotaoDeIcone rotulo="Novo passo (com os mesmos ícones)" desligado={p.tocando} onClick={() => p.despachar({ tipo: "novoPasso" })}><path d="M12 5v14M5 12h14" /></BotaoDeIcone>
        <BotaoDeIcone rotulo="Duplicar passo" desligado={p.tocando} onClick={() => p.despachar({ tipo: "duplicarPasso" })}><rect x={8} y={8} width={12} height={12} rx={2} /><path d="M16 8V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3" /></BotaoDeIcone>
        <BotaoDeIcone rotulo="Apagar passo" desligado={p.tocando} onClick={() => p.despachar({ tipo: "removerPasso" })}><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" /></BotaoDeIcone>
      </div>
      <div className="pr-acoes">
        <button type="button" className="pr-reproduzir" aria-pressed={p.tocando} disabled={p.total < 2} onClick={p.onReproduzir}
          title={p.total < 2 ? "Crie um segundo passo para reproduzir" : "Anima os ícones de passo em passo"}>
          {p.tocando ? "Parar" : "Reproduzir"}
        </button>
        <button type="button" onClick={p.onCompartilhar}>Compartilhar link</button>
        <button type="button" onClick={p.onBaixar} title="JPEG 2048×2048, cerca de 1 MB">Baixar imagem</button>
        <Salvos quadro={p.quadro} onAbrir={p.onAbrir} onAviso={p.onAviso} />
      </div>
    </div>
  );
}

function Salvos({ quadro, onAbrir, onAviso }: { quadro: Quadro; onAbrir: (q: Quadro) => void; onAviso: (a: Aviso) => void }) {
  const [salvos, setSalvos] = useState<Salvo[]>([]);
  const [nome, setNome] = useState("");
  const gravar = (lista: Salvo[]) => {
    if (gravarSalvos(lista)) return setSalvos(lista);
    onAviso({ texto: "O navegador recusou salvar (armazenamento cheio ou bloqueado). Use Exportar .json." });
  };
  const salvar = () => {
    const limpo = nome.trim() || `Prancheta ${new Date().toLocaleString("pt-BR")}`;
    gravar(comSalvo(lerSalvos(), { nome: limpo, em: new Date().toISOString(), quadro }));
    setNome("");
  };
  const importar = async (e: ChangeEvent<HTMLInputElement>) => {
    const arquivo = e.currentTarget.files?.[0];
    e.currentTarget.value = "";
    if (!arquivo) return;
    const leitura = lerJson(await arquivo.text());
    if (leitura.ok) onAbrir(leitura.quadro);
    else onAviso({ texto: `Arquivo recusado: ${leitura.motivo}.` });
  };
  return (
    <details className="pr-salvos" onToggle={(e) => { if (e.currentTarget.open) setSalvos(lerSalvos()); }}>
      <summary>Abrir / salvar</summary>
      <div className="pr-salvos-corpo">
        <div className="pr-linha-de-botoes">
          <input aria-label="Nome da prancheta" placeholder="Nome (ex.: smoke no Roshan)" value={nome} maxLength={60} onChange={(e) => setNome(e.currentTarget.value)} />
          <button type="button" onClick={salvar}>Salvar</button>
        </div>
        {salvos.length === 0 ? <p className="pr-dica">Nada salvo neste navegador ainda.</p> : (
          <ul className="pr-lista-salvos">
            {salvos.map((s) => (
              <li key={s.nome}>
                <button type="button" className="link" onClick={() => onAbrir(s.quadro)}>{s.nome}</button>
                <button type="button" className="link" aria-label={`Apagar ${s.nome}`} onClick={() => gravar(salvos.filter((o) => o.nome !== s.nome))}>apagar</button>
              </li>
            ))}
          </ul>
        )}
        <div className="pr-linha-de-botoes">
          <button type="button" onClick={() => baixarArquivo(new Blob([JSON.stringify(quadro)], { type: "application/json" }), "prancheta.json")}>Exportar .json</button>
          <label className="pr-importar">Importar .json<input type="file" accept="application/json,.json" onChange={(e) => void importar(e)} /></label>
        </div>
      </div>
    </details>
  );
}

/**
 * A imagem fica pronta segundos depois do clique, quando o navegador já esqueceu o gesto; o botão daqui é um clique
 * novo, então o download (e o compartilhar do celular) não é barrado.
 */
function PreviaDaImagem({ arquivo, onFechar, onAviso }: { arquivo: File; onFechar: () => void; onAviso: (a: Aviso) => void }) {
  // A URL nasce e morre no mesmo efeito: no StrictMode o efeito roda duas vezes e a prévia não fica com URL revogada.
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    const criada = URL.createObjectURL(arquivo);
    setUrl(criada);
    return () => URL.revokeObjectURL(criada);
  }, [arquivo]);
  const abrir = (dialogo: HTMLDialogElement | null) => {
    if (dialogo && !dialogo.open) dialogo.showModal();
  };
  const compartilhar = () => {
    navigator.share({ files: [arquivo], title: "Prancheta" }).catch((erro: unknown) => {
      if (erro instanceof DOMException && erro.name === "AbortError") return;
      onAviso({ texto: `Não deu para compartilhar: ${String(erro)}. Use Baixar imagem.` });
    });
  };
  return (
    <dialog className="pr-previa" ref={abrir} onClose={onFechar} aria-label="Imagem da prancheta">
      {url && <img src={url} alt="Prévia da imagem exportada da prancheta" width={2048} height={2048} />}
      <p className="pr-dica">JPEG 2048×2048, {(arquivo.size / 1_048_576).toFixed(1).replace(".", ",")} MB. No celular, se o botão não salvar, toque e segure a imagem para salvar.</p>
      <div className="pr-linha-de-botoes">
        <button type="button" onClick={() => baixarArquivo(arquivo, arquivo.name)}>Baixar imagem</button>
        {podeCompartilhar(arquivo) && <button type="button" onClick={compartilhar}>Compartilhar</button>}
        <button type="button" className="link" onClick={onFechar}>Fechar</button>
      </div>
    </dialog>
  );
}
