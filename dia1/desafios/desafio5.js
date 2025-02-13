// Crie uma constante lado = 6 e calcule a área de um quadrado usando a fórmula lado * lado. Exiba o resultado no console.
const prompt = require('prompt-sync')();

let lado = parseInt(prompt('Qual o valor do lado do quadrado? '));
let area = lado^2;

console.log("A área é: " + area);