// Declare uma variável precoProduto com o preço inicial de um produto e imposto com o percentual de imposto aplicado (por exemplo, 0.2 para 20%).
// Calcule o valor total (preço inicial + imposto) e exiba o resultado.

// Inicialização da constante que captura input do usuário
const prompt = require('prompt-sync')();

// Inicialização de array chamado precoProduto para armazenar o preco do produto e o percentual do imposto.
// metodo parseInt foi utilizado para transformar o valor recebido pelo prompt de string para inteiro
let precoProduto = [parseInt(prompt('Qual o valor do produto? ')), parseInt(prompt('Qual o percentual do imposto? '))];

// Inicialização da variavel precoTotal para armazenar o resultado do calculo do preco do produto com imposto
let precoTotal = precoProduto[0]*(1+(precoProduto[1]/100));

// Exibe no console o preco do produto com imposto
console.log(precoTotal);

// Saída:
// Qual o valor do produto? 150
// Qual o percentual do imposto? 20 
// 180