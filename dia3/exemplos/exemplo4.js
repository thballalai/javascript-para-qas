// Exemplo Prático 4
// Controle de estoque

// Declaramos uma variável para armazenar a quantidade de produtos no estoque
let estoque = 0;
// Declaramos uma variável para armazenar a informação se podemos repor o produto
let podeRepor = true;

// Avaliamos se a quantidade de produtos no estoque for igual a zero E se puder repor o estoque
// Imprime "Repondo o estoque..."
// Se não, imprime "Estoque suficiente!"
if (estoque === 0 && podeRepor){
    console.log("Repondo o estoque...");
} else {
    console.log("Estoque suficiente!");
}

// Saída: Repondo o estoque...