// Exemplo Prático 2
// Somando números pares de 1 a 20

// Inicializa uma variável soma com o valor 0
let soma = 0;

// Inicia um loop que começa em 2 e soma apenas os números pares até 20
for (let num=2; num <=20; num += 2) {
    // Adiciona o valor de num à variável soma
    soma += num;
}

// Exibe no console o valor final da soma dos números pares
console.log(`Soma dos números pares: ${soma}`);

// Saída: Soma dos númeroes pares: 110