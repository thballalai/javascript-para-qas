// Crie uma constante lado = 6 e calcule a área de um quadrado usando a fórmula lado * lado. Exiba o resultado no console.

// Inicialização da constante que captura input do usuário
const prompt = require('prompt-sync')();

// Inicialização de variável lado para armazenar a informação do lado do quadrado
// Considerando que o prompt retorna um valor do tipo string, o metodo parseInt foi utilizado para converter o input do usuário para inteiro
let lado = parseInt(prompt('Qual o valor do lado do quadrado? '));

// Calculo da área de um quadrado
let area = lado^2;

// Exibe no console o resultado do calculo
console.log("A área é: " + area);

// Saída:
// Qual o valor do lado do quadrado? 6
// A área é: 36