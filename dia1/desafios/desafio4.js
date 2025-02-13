// Crie um objeto smartphone com as propriedades marca, modelo e anoLancamento. Exiba o modelo e o ano de lançamento no console.
const prompt = require("prompt-sync")();

let marca = prompt("Qual a marca do celular? ");
let modelo = prompt("Qual o modelo do celular? ");
let anoLancamento = parseInt(prompt('Qual o ano de lançamento do celular? '));

let smartphone = [marca, modelo, anoLancamento];

console.log("modelo: " + smartphone[1]);
console.log("Ano de lançamento: " + smartphone[2]);