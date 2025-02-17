// Exemplo Prático 1
// Verificando se um número é positivo ou negativo

// Declaramos uma variável número
let numero = -3;

// Avaliamos se o valor da variável numero é maior que zero, se for imprime "O número é positivo."
// Caso não seja maior que zero, mas que seja menor que zero, imprime "O número é negativo."
// Caso não seja maior que zero, nem menor que zero, imprime "O número é zero."
if(numero>0){
    console.log("O número é positivo.");
} else if(numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

// Saída: O número é negativo.