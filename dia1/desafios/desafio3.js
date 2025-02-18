// Crie um array filmes com o nome de três filmes que você adoraria assistir.
// Mostre o terceiro filme na lista usando o índice correto do array.

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização do array favMovies para armazenar o nome dos filmes favoritos
let favMovies = [prompt('[1/3]Informe o nome de um filme que gosta: '), prompt('[2/3]Informe o nome de um segundo filme que gosta: '), prompt('[3/3]Informe o nome de um terceiro filme que gosta: ')];

// Exibe no console o nome do terceiro filme informado
console.log(favMovies[2]); 

// Saída:
// [1/3]Informe o nome de um filme que gosta: Procurando Nemo
// [2/3]Informe o nome de um filme que gosta: Clube da Luta
// [3/3]Informe o nome de um filme que gosta: Titanic
// Titanic