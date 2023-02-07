const readline = require("readline-sync");

let atributo = "";
const categoria = [];

while (atributo != "exit") {
  categoria.push(atributo);
  atributo = readline.question("Adicione um atributo do CSS: ").toLocaleLowerCase();
}
console.log((`${categoria.sort().join('\n')}`));
