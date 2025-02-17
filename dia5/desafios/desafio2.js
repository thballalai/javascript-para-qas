// Crie uma lista contendo 5 produtos de supermercado e utilize um loop for para exibir cada produto precedido por um número indicando a posição na lista.
const prompt = require("prompt-sync")();

let lista = ["","","","",""];

for(let i = 0; i < 5; i++){
    lista[i]=prompt("Informe um produto de supermecado: ");
}

let c = 0;
while (c < lista.length) {
    console.log(`Produto ${c+1}: ${lista[c]}`);
    c++
}

