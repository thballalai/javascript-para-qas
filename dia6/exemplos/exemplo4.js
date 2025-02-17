// Exemplo Prático 4
// Extraindo uma Parte do Array

// Declara um array chamado temperaturas com valores númericos
let temperaturas = [22, 24, 26, 28, 30];

// Usa o método slice para obter os dois primeiros elementos do array slice funciona assim: slice(inicio, fim) sendo o inicio inclusivo e fim exclusivo, por isso ele não é obtido na resposta
let ultimos = temperaturas.slice(0,2);

// Exibe no console a parte obtida do array
console.log(ultimos);

//Saída: [22, 24]