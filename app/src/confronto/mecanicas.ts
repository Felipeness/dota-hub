// Motor de regras do confronto: mecânica do inimigo -> por que importa -> itens e habilidades suas que respondem.
// Tudo sai do texto e dos campos das habilidades e itens do OpenDota; nada de número digitado à mão.
import { ehPassiva, temDano, temValor, type Habilidade, type Heroi, type Item, type MecanicaId } from "./modelo";
import { recursosContra, type Recurso } from "./respostas";

export type { MecanicaId };

/** De onde saiu a afirmação: um atributo da habilidade ou a frase da descrição. */
export type Evidencia = Readonly<{ habilidade: string; trecho: string }>;
export type ItemIndicado = Readonly<{ item: Item; motivo: string; prova: string }>;

export type Achado = Readonly<{
  id: MecanicaId;
  titulo: string;
  porque: string;
  evidencias: readonly Evidencia[];
  /** Fatos de BKB e dispel tirados dos campos bkbpierce e dispellable. */
  observacoes: readonly string[];
  itens: readonly ItemIndicado[];
  trunfos: readonly Evidencia[];
  /** Desvios no tempo certo e Shard/Scepter seus que respondem a esta mecânica. */
  recursos: readonly Recurso[];
}>;

/** `exceto` descarta a frase que fala do contrário (revelar invisível, por exemplo). */
type Detector = Readonly<{ atributo?: RegExp; texto?: RegExp; exceto?: RegExp; filtro?: (h: Habilidade) => boolean }>;
type Resposta = Readonly<{ item: string; motivo: string; prova: RegExp; quando?: (achadas: readonly Habilidade[], meu: Heroi) => boolean }>;

type Regra = Readonly<{
  id: MecanicaId;
  titulo: string;
  porque: string;
  detector: Detector;
  /** Quantas habilidades precisam bater para a mecânica contar. */
  minimo: number;
  respostas: readonly Resposta[];
  trunfo: Detector;
  trunfoMotivo: string;
}>;

const ativa = (h: Habilidade) => !ehPassiva(h);
const naoAtravessaBkb = (achadas: readonly Habilidade[]) => achadas.some((h) => h.atravessaBkb === false);
const saiComDispelBasico = (achadas: readonly Habilidade[]) => achadas.some((h) => h.dispel === "basico");
const temAlvoUnico = (achadas: readonly Habilidade[]) => achadas.some((h) => h.comportamento.includes("Unit Target"));

// does_root (Sniper) e self_stun (Meat Hook) prendem o próprio herói, não o inimigo; unperched_stunned (Tree Dance) também.
// Mini-stun (Lightning Bolt, Mana Void) só interrompe, tombstone_stun_penalty é dano que a Tombstone toma e leash_radius
// (Escape Act) é a distância da caixa do próprio Ringmaster.
const DISABLE = /^(?!does_|self_|unperched_)(?!.*(mini|penalty|radius)).*(stun|hex|sleep|taunt|root|leash|fear|banish|cyclone|ensnare)/;
// O texto do OpenDota descreve muito controle sem a palavra "stun": Hex ("harmless creature"), Shackles ("cannot move
// or attack"), Frostbite ("prohibiting movement"), Fiend's Grip e Dismember ("disabling it"), Vacuum ("sucks in").
const CONTROLE_NO_TEXTO = new RegExp([
  /(?<!mini-?)\bstun(s|ned|ning)?\b|\bhex(es)?\b|\bsleep|\btaunt|\broot(s|ed)?\b|\bleash|\bbanish|trapping|\bstasis\b/.source,
  /\bfear(ed|ful)?\b|\bflee\b|hypnoti[sz]|unconscious|turn\w* to stone|harmless (creature|beast)/.source,
  /cannot (move|act)\b|prohibit\w* movement|disabling (it|them)\b|\band disabled\b|sucks in|pulls an enemy|\bdrag(s|ging|ged)?\b/.source,
  /(anchor|trap|freez)\w* (\w+ ){0,2}in place|prevent\w* [^.]{0,25}\b(moving|movement)\b|forced to attack|into the air|can'?t pass|cannot pass/.source,
].join("|"), "i");
// Howl "strikes fear" só tira armadura; Decrepify "banishing" deixa o alvo intocável, não preso; Tree Dance atordoa o próprio Monkey King.
const CONTROLE_QUE_NAO_PRENDE = /strikes fear|unable to attack or be attacked|falls and is stunned/i;
// Fuga é o herói tirar a si mesmo da luta: teleporte, salto, avanço, invisibilidade própria ou ficar intocável.
// Mover um inimigo (Glimpse, Nether Swap) ou um aliado (Relocate só leva junto) não conta.
const FUGA_NO_TEXTO = new RegExp([
  /\bblink(s)?\b|\bteleport(s|ation)?\b|\bleap(s|ing)?\b|\bjumps? (to|forward|onto|in the air)\b|\bhops?\b|\bdash(es)?\b|\bdives?\b|\brush(es)?\b|\brolls? (out|toward)/.source,
  /charging across|tunnels forward|hurtle themselves|launches (him|her|it)self|swings on a grappling|warps backward|takes to the skies|flying movement/.source,
  /\bbecom\w* invisible|\bturns? [^.]{0,40}\binvisible|moves invisibly|shifts out of visibility|conceals (him|her|it)self|impossible to see/.source,
  /immune from harm|untargetable|phases out|vanishes|fades into the aether|\bis invulnerable during/.source,
].join("|"), "i");
const FUGA_DE_OUTRO = /teleports the target|and the target unit|leaps (through|between)|jumps from target|dive-bomb/i;
// Cura de verdade: recupera vida de alguém do time. Frases que cortam ou adiam cura (Doom, Decrepify) ficam de fora.
const CURA_NO_TEXTO = /lifesteal|vampiric|\bheal(s|ing|ed)?\b|regain\w* (the )?(hp|health)|regenerate health|restor\w* [^.]{0,30}health|\b(hp|health)( and mana)? regen/i;
const CORTA_CURA = /(prevent|reduc|amplif|delay|increas|disabl)\w*[^.]{0,30}heal|heal\w* (on|amplification|that is delayed)/i;

export const REGRAS: readonly Regra[] = [
  {
    id: "invisibilidade", titulo: "Fica invisível", minimo: 1,
    porque: "Invisível ele escolhe quando a luta começa e foge quando quer. Detecção tira essa escolha dele.",
    detector: { texto: /\binvisib|impossible to see|immune to detection|out of visibility/i, exceto: /reveal|true sight|cannot (become|turn) invisible/i },
    respostas: [
      { item: "dust", motivo: "Revela e deixa lento quem está invisível na área, na hora da luta.", prova: /invisib/i },
      { item: "ward_sentry", motivo: "Dá visão verdadeira (true sight) fixa na área onde ele costuma andar.", prova: /true sight/i },
      { item: "gem", motivo: "Visão verdadeira que anda com você; cai se você morrer.", prova: /true sight/i },
    ],
    trunfo: { texto: /reveal|true sight/i }, trunfoMotivo: "revela",
  },
  {
    id: "silencio", titulo: "Silencia", minimo: 1,
    porque: "Silenciado você não usa habilidade. Se o seu jogo depende de um botão para entrar ou fugir, isso decide a luta.",
    detector: { atributo: /silence/, texto: /\bsilenc(e|es|ing)\b|prevent\w*[^.]{0,40}from casting/i, filtro: ativa },
    respostas: [
      { item: "black_king_bar", motivo: "Imunidade a magia: o silêncio não pega.", prova: /immun/i, quando: naoAtravessaBkb },
      { item: "manta", motivo: "Dispel básico: tira o silêncio de você.", prova: /dispel/i, quando: saiComDispelBasico },
      { item: "lotus_orb", motivo: "Dispel básico e devolve o feitiço com alvo.", prova: /dispel/i, quando: saiComDispelBasico },
    ],
    trunfo: { texto: /\bdispel|purge|remov\w* (any |all )?(negative|debuff)/i }, trunfoMotivo: "tira debuff de você",
  },
  {
    id: "controle", titulo: "Prende ou atordoa", minimo: 1,
    porque: "Enquanto você está preso ou atordoado, o time dele bate de graça. Saber o que segura você define a hora de entrar.",
    detector: { atributo: DISABLE, texto: CONTROLE_NO_TEXTO, exceto: CONTROLE_QUE_NAO_PRENDE, filtro: ativa },
    respostas: [
      { item: "black_king_bar", motivo: "Imunidade a magia contra o controle que não atravessa BKB.", prova: /immun/i, quando: naoAtravessaBkb },
      { item: "sphere", motivo: "Bloqueia um feitiço com alvo a cada recarga.", prova: /block/i, quando: temAlvoUnico },
      { item: "lotus_orb", motivo: "Devolve o feitiço com alvo para quem lançou.", prova: /reflect|dispel/i, quando: temAlvoUnico },
      { item: "manta", motivo: "Dispel básico: sai do controle que aceita dispel.", prova: /dispel/i, quando: saiComDispelBasico },
    ],
    trunfo: { texto: /\bdispel|purge|remov\w* (any |all )?(negative|debuff)/i }, trunfoMotivo: "tira debuff de você",
  },
  {
    id: "magico", titulo: "Dano mágico em rajada", minimo: 2,
    porque: "Duas ou mais habilidades de dano mágico juntas matam antes de você reagir. Resistência mágica e barreira compram esse tempo.",
    detector: { filtro: (h) => ativa(h) && h.tipoDeDano === "Magical" && temDano(h) },
    respostas: [
      { item: "pipe", motivo: "Barreira contra dano mágico para você e quem está perto.", prova: /magic/i },
      { item: "glimmer_cape", motivo: "Barreira mágica e invisibilidade para sair da rajada.", prova: /magic/i },
      { item: "eternal_shroud", motivo: "Resistência mágica que cresce com o dano que você toma.", prova: /magic/i },
      { item: "black_king_bar", motivo: "Imunidade a magia contra o dano que não atravessa BKB.", prova: /magic|immun/i, quando: naoAtravessaBkb },
    ],
    trunfo: { atributo: /magic_resist/, texto: /magic resistance|debuff immun|spell immun/i }, trunfoMotivo: "resistência mágica",
  },
  {
    id: "puro", titulo: "Dano puro", minimo: 1,
    porque: "Dano puro ignora armadura e resistência mágica. Vida a mais e imunidade são o que segura.",
    detector: { filtro: (h) => ativa(h) && h.tipoDeDano === "Pure" && temDano(h) },
    respostas: [
      { item: "black_king_bar", motivo: "Imunidade a dano puro de feitiço que não atravessa BKB.", prova: /pure/i, quando: naoAtravessaBkb },
    ],
    trunfo: { texto: /debuff immun|spell immun/i }, trunfoMotivo: "imunidade",
  },
  {
    id: "ilusoes", titulo: "Cria ilusões", minimo: 1,
    porque: "Ilusão morre rápido para dano em área. Bater em uma por vez é perder tempo e vida.",
    detector: { atributo: /^(illusion_duration|images_count|max_illusions)$/, texto: /creat\w*[^.]{0,60}(illusion|images)|phantasmal copies/i },
    respostas: [
      { item: "bfury", motivo: "Parte do seu ataque vira dano em cone em volta do alvo.", prova: /in a cone/i, quando: (_, meu) => meu.corpoACorpo },
      { item: "mjollnir", motivo: "O raio pula entre vários alvos em volta.", prova: /leaps between/i },
      { item: "radiance", motivo: "Queima tudo em volta sem você precisar mirar.", prova: /damage per second/i },
    ],
    trunfo: { filtro: (h) => ativa(h) && h.comportamento.includes("AOE") && temDano(h) }, trunfoMotivo: "dano em área",
  },
  {
    id: "cura", titulo: "Se cura ou rouba vida", minimo: 1,
    porque: "Se ele recupera vida no meio da luta, o seu dano some. Corte de cura faz o dano ficar.",
    detector: {
      atributo: /^(lifesteal\w*|hp_leech\w*|health_regen|bonus_health_regen|bonus_regen|regen|heal|heal_amount|max_health_regen|maximum_health_regen)$/,
      texto: CURA_NO_TEXTO, exceto: CORTA_CURA,
    },
    respostas: [
      { item: "spirit_vessel", motivo: "Corta a recuperação de vida do alvo enquanto dura.", prova: /health restoration/i },
      { item: "skadi", motivo: "Cada ataque seu corta a recuperação de vida dele.", prova: /health restoration/i },
    ],
    trunfo: { texto: /(reduc|prevent|disabl)\w*[^.]{0,30}(heal|regen|restoration)/i }, trunfoMotivo: "corta cura",
  },
  {
    id: "evasao", titulo: "Faz você errar o ataque", minimo: 1,
    porque: "Com evasão parte dos seus ataques erra. Ataque que não erra devolve o seu dano.",
    detector: { atributo: /evasion/ },
    respostas: [
      { item: "monkey_king_bar", motivo: "Dá chance de cada ataque atravessar a evasão.", prova: /evasion/i },
      { item: "bloodthorn", motivo: "Contra o alvo silenciado, seus ataques não erram (True Strike).", prova: /true strike/i },
    ],
    trunfo: { texto: /true strike|cannot miss|can't miss|pierce[sd]? (through )?evasion/i }, trunfoMotivo: "ataque que não erra",
  },
  {
    id: "fuga", titulo: "Escapa com salto ou blink", minimo: 1,
    porque: "Se ele sai da luta com um botão, o abate escapa. Silêncio ou controle antes do seu dano segura ele.",
    detector: { texto: FUGA_NO_TEXTO, exceto: FUGA_DE_OUTRO, filtro: ativa },
    respostas: [
      { item: "orchid", motivo: "Silencia: sem botão de fuga.", prova: /silenc/i },
      { item: "sheepstick", motivo: "Vira bicho: sem habilidade e sem item.", prova: /critter/i },
      { item: "abyssal_blade", motivo: "Atordoa através de quase tudo.", prova: /stun/i },
    ],
    trunfo: { atributo: /silence|stun|hex|root|leash/, filtro: ativa }, trunfoMotivo: "segura antes da fuga",
  },
  {
    id: "passivas", titulo: "Depende de passivas", minimo: 2,
    porque: "Boa parte da força dele vem de passivas. Break desliga essas passivas por alguns segundos.",
    detector: { filtro: (h) => ehPassiva(h) && h.atributos.length > 0 },
    respostas: [
      { item: "silver_edge", motivo: "O golpe de saída da invisibilidade desliga as passivas do alvo.", prova: /passive/i },
    ],
    trunfo: { texto: /\bbreak\b|disable[sd]? (their |its )?passive/i }, trunfoMotivo: "desliga passivas",
  },
];

const frases = (texto: string) => texto.split(/(?<=[.!?])\s+|\n+/).map((f) => f.trim()).filter(Boolean);
const valoresLegiveis = (a: { rotulo: string; valores: readonly string[] }) => `${a.rotulo}: ${a.valores.join(" / ")}`;

/** Por que esta habilidade bate no detector, ou null. A prova vem de um atributo, se houver; senão, da frase. */
export function provar(h: Habilidade, detector: Detector): Evidencia | null {
  if (detector.filtro && !detector.filtro(h)) return null;
  const atributo = detector.atributo ? h.atributos.find((a) => detector.atributo?.test(a.chave) && temValor(a)) : undefined;
  if (atributo) return { habilidade: h.nome, trecho: valoresLegiveis(atributo) };
  const frase = detector.texto ? frases(h.descricao).find((f) => detector.texto?.test(f) && !detector.exceto?.test(f)) : undefined;
  if (frase) return { habilidade: h.nome, trecho: frase };
  if (detector.atributo || detector.texto) return null;
  const destaque = h.atributos.find((a) => /damage/.test(a.chave) && temValor(a)) ?? h.atributos.find(temValor);
  return { habilidade: h.nome, trecho: destaque ? valoresLegiveis(destaque) : frases(h.descricao)[0] ?? h.nome };
}

/** Só das ativas: BKB e dispel decidem o que fazer quando ele aperta o botão. */
function observacoes(achadas: readonly Habilidade[]): string[] {
  const nomes = (filtro: (h: Habilidade) => boolean) => achadas.filter((h) => ativa(h) && filtro(h)).map((h) => h.nome).join(", ");
  const atravessa = nomes((h) => h.atravessaBkb === true);
  const semDispel = nomes((h) => h.dispel === "nao");
  const soForte = nomes((h) => h.dispel === "so-forte");
  return [
    atravessa && `Atravessa BKB: ${atravessa}.`,
    semDispel && `Não sai com dispel: ${semDispel}.`,
    soForte && `Só sai com dispel forte: ${soForte}.`,
  ].filter((t): t is string => Boolean(t));
}

type Contexto = Readonly<{ achadas: readonly Habilidade[]; meu: Heroi; itens: ReadonlyMap<string, Item> }>;

function indicar(resposta: Resposta, { achadas, meu, itens }: Contexto): ItemIndicado | null {
  if (resposta.quando && !resposta.quando(achadas, meu)) return null;
  const item = itens.get(resposta.item);
  const prova = item && frases(item.texto).find((f) => resposta.prova.test(f));
  return item && prova ? { item, motivo: resposta.motivo, prova } : null;
}

const provas = (habilidades: readonly Habilidade[], detector: Detector) =>
  habilidades.flatMap((h) => {
    const prova = provar(h, detector);
    return prova ? [{ habilidade: h, prova }] : [];
  });

export function analisarMecanicas(meu: Heroi, inimigo: Heroi, itens: ReadonlyMap<string, Item>): Achado[] {
  return REGRAS.flatMap((regra) => {
    const encontradas = provas(inimigo.habilidades, regra.detector);
    if (encontradas.length < regra.minimo) return [];
    const achadas = encontradas.map((e) => e.habilidade);
    return [{
      id: regra.id, titulo: regra.titulo, porque: regra.porque,
      evidencias: encontradas.map((e) => e.prova),
      observacoes: observacoes(achadas),
      itens: regra.respostas.flatMap((r) => indicar(r, { achadas, meu, itens }) ?? []),
      trunfos: provas(meu.habilidades, regra.trunfo).map((e) => ({ ...e.prova, trecho: `${regra.trunfoMotivo}. ${e.prova.trecho}` })),
      recursos: recursosContra({ mecanica: regra.id, achadas, meu, itens }),
    }];
  });
}

/** Itens de todas as mecânicas, sem repetir: o primeiro motivo que indicou o item fica. */
export function itensDoConfronto(achados: readonly Achado[]): Array<ItemIndicado & { mecanica: string }> {
  const vistos = new Map<string, ItemIndicado & { mecanica: string }>();
  for (const achado of achados) {
    for (const indicado of achado.itens) {
      if (!vistos.has(indicado.item.chave)) vistos.set(indicado.item.chave, { ...indicado, mecanica: achado.titulo });
    }
  }
  return [...vistos.values()];
}
