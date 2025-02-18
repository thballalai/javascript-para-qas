// Crie uma variável usuario para armazenar seu nome e outra idade para sua idade. 
// Exiba no console: "O usuário [nome] tem [idade] anos."

// Inicialização da constante que captura input do usuário
const prompt = require('prompt-sync')();

// Inicialização de array chamado user para armazenar os dados de nome e idade do usuário
let user = [prompt('Informe o seu nome: '), prompt('informe a sua idade: ')];

// Exibe no console o nome e a idade do usuário
console.log("O usuário " + user[0] + " tem " + user[1] + " anos.");

// Saída:
// Informe o seu nome: João
// Informe a sua idade: 50
// O usuário João tem 50 anos.