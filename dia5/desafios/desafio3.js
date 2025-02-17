// Dado um array de números, utilize um loop para percorrê-lo e exiba apenas os números menores que 50.

const prompt = require("prompt-sync")();

let num = [];
let getNum = 0;
do{
    getNum = parseInt(prompt(`${num.length+1}- Me informe um número: (0 interrompe) `));
    num.push(getNum);
} while(getNum != 0)

for(let i = 0; i < num.length-1; i++){
    if(num[i]<50){
        console.log(`O número digitado na posição ${i+1} foi ${num[i]} e é menor que 50`)
    }
}