let itens = [
  { type: 1, name: "teste01" },
  { type: 2, name: "teste2" },
  { type: 3, name: "teste3" },
  { type: 4, name: "teste4" },
];

let itensASeremRemovidos = [
  { type: 3, name: "teste3" },
  { type: 4, name: "teste4" },
];

let newArrayItens = [];

for (let i = 0; i < itensASeremRemovidos.length; i++) {
  if (i == 0) {
    newArrayItens = itens.filter((x) => x.type != itensASeremRemovidos[i].type);
  } else {
    newArrayItens = newArrayItens.filter((x) => x.type != itensASeremRemovidos[i].type);
  }
}

console.log(newArrayItens);
