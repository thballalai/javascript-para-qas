// Exemplo Prático 1
// Verificar se um número é primo

//Declara uma função chamada ehPrimo que verifica se um número é primo
function ehPrimo(numero){
    // Se o número for menor que 2, não é primo
    if (numero < 2) return false;

    // Percorre de 2 até o número -1 para verificar divisibilidade
    for (let i = 2; i < numero; i++){
        if(numero % 2 === 0) return false;
    }

    // Se passou pelo loop, o número é primo
    return true;
}

// Chama a função e exibe o resultado no console
console.log(ehPrimo(7));

// Saída: true