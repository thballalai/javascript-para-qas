// Crie uma variável usuario para armazenar seu nome e outra idade para sua idade. 
// Exiba no console: "O usuário [nome] tem [idade] anos."
const prompt = require('prompt-sync')();

let user = [prompt('Informe o seu nome: '), prompt('informe a sua idade: ')];

console.log("O usuário " + user[0] + " tem " + user[1] + " anos.");