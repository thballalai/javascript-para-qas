// Pegue o array [100, 200, 300, 400, 500] e extraia os três primeiros números.

// Inicialização de array chamado numeros com 5 valores inteiros
let numeros = [100, 200, 300, 400, 500];

// Inicialização de array chamado novoNumeros para armazenas os valores dos 3 primeiros indices do array numeros
let novoNumeros = numeros.slice(0,3);

// Exibir na tela o array novoNumeros
console.log(novoNumeros);

// Saída: [ 100, 200, 300 ]