// Declare uma variável precoProduto com o preço inicial de um produto e imposto com o percentual de imposto aplicado (por exemplo, 0.2 para 20%).
// Calcule o valor total (preço inicial + imposto) e exiba o resultado.
const prompt = require('prompt-sync')();



let precoProduto = [parseInt(prompt('Qual o valor do produto? ')), parseInt(prompt('Qual o percentual do imposto? '))];
let valorTotal = precoProduto[0]*(1+(precoProduto[1]/100));
console.log(valorTotal);
