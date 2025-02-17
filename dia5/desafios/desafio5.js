// Escreva um código que calcule o fatorial de 5 (5! = 5 × 4 × 3 × 2 × 1).


const prompt = require("prompt-sync")();

let fatorial = 0;
let resultado = 1;
let c = 0;

do {
    fatorial = parseInt(prompt("Você deseja descobrir o fatorial de qual número? "));
    if(fatorial <= 0){
        console.log("Por favor, informe um número positivo");
    }
}while(fatorial <= 0);

c = fatorial;
while(c>=1){
    resultado = resultado * c;
    c--;
}

console.log(`${fatorial}! = ${resultado}`);