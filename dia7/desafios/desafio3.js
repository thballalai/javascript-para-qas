// Implemente uma função que receba um array de números e retorne o maior valor presente nele.

// Declaração de função maiorN que recebe array para determinar o maior número presente no array
function maiorN(array){
    let maiorNum = 0;
    for(let i = 0; i < array.length; i++){
        if(maiorNum < array[i]) maiorNum = array[i];
    }
    return maiorNum;
}

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização da variável chamada num e do array chamado arrayNum
let num = 0;
let arrayNum = [];
// Estrutura de repetição que armazena o input do usuário na variável num e depois armazena no arrayNum
do {
    num = parseInt(prompt("Informe um número positivo: (0 interrompe) "))
    if (num != 0) arrayNum.push(num);
} while(num != 0);

// Inicialização da variável chamada maiorNum que recebe o retorno da função maiorN do arrayNum
let maiorNum = maiorN(arrayNum);

// Exibe na tela o valor de maiorNum
console.log(`O maior número digitado foi: ${maiorNum}`);

// Saída
// Informe um número positivo: (0 interrompe) 5
// Informe um número positivo: (0 interrompe) 10
// Informe um número positivo: (0 interrompe) 15
// Informe um número positivo: (0 interrompe) 2
// Informe um número positivo: (0 interrompe) 4
// Informe um número positivo: (0 interrompe) 19
// Informe um número positivo: (0 interrompe) 5
// Informe um número positivo: (0 interrompe) 15
// Informe um número positivo: (0 interrompe) 0
// O maior número digitado foi: 19