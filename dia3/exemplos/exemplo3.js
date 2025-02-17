// Exemplo Prático 3
// Sistema de descontos em uma loja

// Declaramos uma variável para armazenar o valor da compra
let valorCompra = 150;
// Declaramos uma variável para armazenar se o cliente tem cupom de desconto
let temCupomDesconto = true;

// Avaliamos se o valor da compra for maior ou igual a 200 OU se ele tem cupom de desconto
// Imprime "Desconto aplicado!"
// Se não, imprime "Nenhum desconto disponível."
if(valorCompra >= 200||temCupomDesconto){
    console.log("Desconto aplicado!");
} else { 
    console.log("Nenhum desconto disponível.");
}

// Saída: Desconto Aplicado!