// Crie um array filmes com o nome de três filmes que você adoraria assistir.
// Mostre o terceiro filme na lista usando o índice correto do array.
const prompt = require("prompt-sync")();

let favMovies = [prompt('[1/3]Informe o nome de um filme que gosta: '), prompt('[2/3]Informe o nome de um segundo filme que gosta: '), prompt('[3/3]Informe o nome de um terceiro filme que gosta: ')];
console.log(favMovies[2]); 