// Crie um array chamado animais com três animais de sua escolha. Adicione um novo animal ao final e remova o primeiro da lista.

const prompt = require("prompt-sync")();

let animais = [];

for(let i = 0; i < 3; i++){
    animais[i] = prompt("Informe o nome de um animal: ");
}

console.log(`A lista de animais é: ${animais}`);

let newAnimal = prompt("Informe o nome de um novo animal: ");
animais.shift();
animais.push(newAnimal);

console.log(`A nova lista de animais é: ${animais}`);