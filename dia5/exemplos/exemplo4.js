// Exemplo Prático 4
// Contagem Regressiva para um Evento

// Define a variável diasParaEvento com o número inicial de dias restantes
let diasParaEvento = 5;

// Enquanto diasParaEvento for maior que zero, o loop continuará rodando
while(diasParaEvento > 0){
    // Exibe no console quantos dias faltam para o evento
    console.log(`Faltam ${diasParaEvento} dias para o evento!`);
    // Diminui o valor de diasParaEvento em 1 a cada repetição
    diasParaEvento--;
}

// Exibe uma mensagem quando a contagem regressiva chega a zero
console.log("O grande dia chegou!");

// Saída:
// Faltam 5 dias para o evento!
// Faltam 4 dias para o evento!
// Faltam 3 dias para o evento!
// Faltam 2 dias para o evento!
// Faltam 1 dias para o evento!
// O grande dia chegou!