// Escreva um código que calcule o fatorial de 5 (5! = 5 × 4 × 3 × 2 × 1).

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização das variáveis fatorial e resultado
let fatorial = 0;
let resultado = 1;

// Estrutura de repetição para armazenar um input válido do usuário na variável fatorial
do {
    fatorial = parseInt(prompt("Você deseja descobrir o fatorial de qual número? "));
    if(fatorial <= 0){
        console.log("Por favor, informe um número positivo");
    }
}while(fatorial <= 0);

// Estrutura de repetição para realizar o calculo do fatorial do numero armazenado na variavel fatorial
for(let i = fatorial; i >= 1; i--){
    resultado *= i;
}

// Exibe na tela o resultado do fatorial
console.log(`${fatorial}! = ${resultado}`);

// Saída
// Você deseja descobrir o fatorial de qual número? 5
// 5! = 120