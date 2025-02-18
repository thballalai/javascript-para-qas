// Escreva uma função que receba um número e determine se ele é múltiplo de 5.

// Declaração de função multiplo5 que verifica se um número é múltiplo de 5
function multiplo5(num){
    if(num % 5 == 0) return true;
    return false;
}

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização de variável num que recebe input do usuário
let num = parseInt(prompt("Informe o número que deseja: "));

// Operador ternário que utiliza o retorno da função multiplo5 com parâmetro num para determinar o que será exibido na tela
multiplo5(num) ? console.log(`O número ${num} é multiplo de 5!`) : console.log(`O número ${num} não é multiplo de 5!`);

// Saída
// Informe o número que deseja: 15
// O número 15 é multiplo de 5!