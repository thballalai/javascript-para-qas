// Crie uma lista contendo 5 produtos de supermercado e utilize um loop for para exibir cada produto precedido por um número indicando a posição na lista.

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização de array chamado lista
let lista = [];

// Loop para armazenar 5 inputs do usuário no array lista
for(let i = 0; i < 5; i++){
    let produto = prompt("Informe um produto de supermecado: ");
    lista.push(produto);
}

// Loop para exibir na tela as strings contidas no array lista separadamente
for(let i = 0; i< lista.length; i++){
    console.log(`Produto ${i+1}: ${lista[i]}`);
}

// Saída:
// Informe um produto de supermecado: Arroz
// Informe um produto de supermecado: Trigo
// Informe um produto de supermecado: Cafe
// Informe um produto de supermecado: Feijao
// Informe um produto de supermecado: Acucar
// Produto 1: Arroz
// Produto 2: Trigo
// Produto 3: Cafe
// Produto 4: Feijao
// Produto 5: Acucar