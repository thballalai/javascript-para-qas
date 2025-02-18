// Pegue um array de cores ["Azul", "Verde", "Vermelho"] e transforme-o em uma string separada por vírgulas.

// Inicialização de array chamado cores que armazena 3 strings
let cores = ["Azul", "Verde", "Vermelho"];

// Inicialização de variável chamada newCores que armazena a concatenação dos valores no array cores com os valores separado por ", "
let newCores = cores.join(", ");

// Exibe na tela o array cores e a variável newCores
console.log(cores);
console.log(newCores);

// Saída:
// [ 'Azul', 'Verde', 'Vermelho' ]
// Azul, Verde, Vermelho