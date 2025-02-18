// Crie um array chamado animais com três animais de sua escolha. Adicione um novo animal ao final e remova o primeiro da lista.

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização do array animais
let animais = [];

// Estrutura de repetição que adiciona a um array o nome de 3 animais
for(let i = 0; i < 3; i++){
    animais[i] = prompt("Informe o nome de um animal: ");
}

// Exibir na tela a lista dos 3 animais escolhidos
console.log(`A lista de animais é: ${animais}`);

// Inicialização da variável newAnimal para armazenar novo input do usuário
let newAnimal = prompt("Informe o nome de um novo animal: ");
// Remoção do primeiro item (indice 0) do array animais
animais.shift();
// Adicionar o valor da variável newAnimal ao final do array animais
animais.push(newAnimal);

// Exibir na tela a lista de animais atualizada
console.log(`A nova lista de animais é: ${animais}`);

// Saída:
// Informe o nome de um animal: Vaca
// Informe o nome de um animal: Cabra
// Informe o nome de um animal: Cavalo
// A lista de animais é: Vaca,Cabra,Cavalo
// Informe o nome de um novo animal: Porco
// A nova lista de animais é: Cabra,Cavalo,Porco