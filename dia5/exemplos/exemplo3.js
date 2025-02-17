// Exemplo Prático 3
// Verificando se um produto está em estoque

// Cria um array chamado produtos contendo diferentes itens
let produtos = ["Teclado", "Webcam", "Monitor", "Headset"];
// Define a variável busca com o nome do produto que queremos encontrar
let busca = "Monitor";

// Inicia um loop que percorre o array produtos
for (let i = 0; i < produtos.length; i++) {
    // Verifica se o produto atual é igual ao que estamos buscando
    if(produtos[i] === busca){
        // Exibe no console que o produto foi encontrado
        console.log(`Produto encontrado: ${busca}`);
        // Interrompe o loop assim que o produto for encontrado
        break;
    }
}

// Saída: Produto encontrado: Monitor