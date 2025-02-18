// Crie um array com três comidas favoritas. Peça para o usuário digitar um nome de comida e verifique se está na lista.

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização do array comidaFav
let comidaFav = [];

// Estrutura de repetição para armazenar o input do usuário no array comidaFav
for(let i = 0; i < 3; i++){
    comidaFav[i] = prompt("Informe o nome de uma comida que você gosta: ");
}

// Inicialização da variável busca que guarda uma string que será usado como parâmetro para realizar a busca
let busca = prompt("Informe o nome de uma comida para ver se está na lista: ");
// Inicialização de variável posicao que recebe o valor do indice do array comidaFav com valor igual ao da variável busca
let posicao = comidaFav.indexOf(busca);

//Exibe na tela o valor da variável posicao
console.log(`A comida que você busca está na posição: ${posicao+1}`);

// Saida:
// Informe o nome de uma comida que você gosta: Hamburguer
// Informe o nome de uma comida que você gosta: Pizza
// Informe o nome de uma comida que você gosta: Cachorro quente
// Informe o nome de uma comida para ver se está na lista: Pizza
// A comida que você busca está na posição: 2