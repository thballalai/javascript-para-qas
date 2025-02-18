// Dado um array de números, utilize um loop para percorrê-lo e exiba apenas os números menores que 50.

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização de array num e variável getNum
let num = [];
let getNum = 0;

// Estrutura de repetição que força a primeira execução até receber o usuário fornecer o input = 0
do{
    // Armazenamento do input do usuário na variável getNum
    getNum = parseInt(prompt(`${num.length+1}- Me informe um número: (0 interrompe) `));
    // Adição do valor de getNum no array num
    num.push(getNum);
} while(getNum != 0)

// Estrutura de repetição que percorre o array num e informa o indice e o valor dos valores menores que 50
for(let i = 0; i < num.length-1; i++){
    if(num[i]<50){
        console.log(`O número digitado na posição ${i+1} foi ${num[i]} e é menor que 50`)
    }
}

// Saída:
// 1- Me informe um número: (0 interrompe) 30
// 2- Me informe um número: (0 interrompe) 1
// 3- Me informe um número: (0 interrompe) 55
// 4- Me informe um número: (0 interrompe) 65
// 5- Me informe um número: (0 interrompe) 18
// 6- Me informe um número: (0 interrompe) 94
// 7- Me informe um número: (0 interrompe) 2
// 8- Me informe um número: (0 interrompe) 1
// 9- Me informe um número: (0 interrompe) 50
// 10- Me informe um número: (0 interrompe) 0
// O número digitado na posição 1 foi 30 e é menor que 50
// O número digitado na posição 2 foi 1 e é menor que 50
// O número digitado na posição 5 foi 18 e é menor que 50
// O número digitado na posição 7 foi 2 e é menor que 50
// O número digitado na posição 8 foi 1 e é menor que 50