// Escreva uma função que formate um CPF no formato 000.000.000-00, garantindo que os separadores sejam aplicados corretamente.

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();

// Inicialização da variável chamada cpf
let cpf = "";

// Estrutura de repetição para receber um input válido do usuário e armazenar na variável cpf
do {
    cpf = prompt("Informe o seu cpf: (somente números) ");
    if(cpf.length != 11) console.log("Número inválido! Digite novamente.");
} while(cpf.length != 11);

// Declaração de uma função anônima que realiza o processamento da variável cpf e retorna o cpf na formatação correta
const formatarCpf = function(cpf){
    let cpfFormatado = [];
    for(let i = 0; i < cpf.length; i++){
        if(i == 3 || i == 6) {
            cpfFormatado.push(".");
            cpfFormatado.push(cpf[i]);
        } else if( i == 9){
            cpfFormatado.push("-");
            cpfFormatado.push(cpf[i]);
        } else {
            cpfFormatado.push(cpf[i]);
        } 
    }
    for(let i = 0; i < cpfFormatado.length; i++){
    }
    return cpfFormatado.join("");
}

// Exibe o valor de retorno da função anônima formatarCPF
console.log(`O cpf no formato correto é: ${formatarCpf(cpf)}`);