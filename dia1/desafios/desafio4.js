// Crie um objeto smartphone com as propriedades marca, modelo e anoLancamento. Exiba o modelo e o ano de lançamento no console.

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização da variavel marca responsável por guardar o input do usuário da marca do celular
let marca = prompt("Qual a marca do celular? ");

// Inicialização da variavel modelo responsável por guardar o input do usuário do modelo do celular
let modelo = prompt("Qual o modelo do celular? ");

// Inicialização da variavel anoLancamento responsável por guardar o input do usuário do ano de lancamento do celular
let anoLancamento = parseInt(prompt('Qual o ano de lançamento do celular? '));

// Inicialização de array smartphone vinculando as informações das variaveis: marca, modelo e anoLancamento
let smartphone = [marca, modelo, anoLancamento];

// Exibe no console as informações do modelo e ano de lançamento do celular
console.log("modelo: " + smartphone[1]);
console.log("Ano de lançamento: " + smartphone[2]);

// Saída:
// Qual a marca do celular? apple
// Qual o modelo do celular? iPhone 14
// Qual o ano de lançamento do celular? 2022
// modelo: iPhone 14
// Ano de lançamento: 2022