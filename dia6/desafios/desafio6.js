// Crie um array com três comidas favoritas. Peça para o usuário digitar um nome de comida e verifique se está na lista.

const prompt = require("prompt-sync")();

let comidaFav = [];

for(let i = 0; i < 3; i++){
    comidaFav[i] = prompt("Informe o nome de uma comida que você gosta: ");
}

let busca = prompt("Informe o nome de uma comida para ver se está na lista: ");
let posicao = comidaFav.indexOf(busca);

console.log(`A comida que você busca está na posição: ${posicao+1}`);