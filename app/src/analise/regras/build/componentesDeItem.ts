// Família build: cadeias de receita (item -> item final) que fazem a build consumir o item intermediário. Sem
// isso, duas regras tratam "nunca montou o componente" e "nunca montou o item final" como dois gaps
// independentes, quando é o mesmo gap de build contado duas vezes. Fonte: public/data/opendota/constants/items.json
// (campo "components" de cada item final), conferido à mão pros itens que aparecem como spike "chave" de herói
// ou em compras reais das 3 partidas de validação (9046905170, 9048125971, 9046871014).
export const ITEM_FINAL_DO_COMPONENTE: Readonly<Record<string, string>> = {
  lesser_crit: "greater_crit", // Crystalys -> Daedalus
  demon_edge: "greater_crit",
  basher: "abyssal_blade",
  sange: "abyssal_blade",
  diffusal_blade: "disperser",
  eagle: "disperser",
};
