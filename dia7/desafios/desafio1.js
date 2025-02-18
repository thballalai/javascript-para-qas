// Crie uma função que receba uma string e retorne o texto invertido.

// Declaração de função inverterTexto que recebe como parâmetro a variável texto
function inverterTexto(texto){
    // Inicialização de variável textoFormatado
    let textoFormatado = "";
    console.log("----------------------------------------")
    // Estrutura de repetição que salva na variável textoFormatado os caracteres da variável texto iniciando pelo último e retornando até o primeiro
    for(let i = 0; i < texto.length; i++){
        textoFormatado = textoFormatado + texto[texto.length-i-1];
    }
    // Declaração do que a função retorna como resultado
    return textoFormatado;
}

// Inicialização da constante que captura input do usuário
const prompt = require("prompt-sync")();
// inicialização da variável p que armazena input do usuário
let p = prompt("Informe o texto que você deseja ver de trás para frente: ");

// Exibe na tela o resultado da função inverterTexto recebendo como parâmetro a variável p
console.log(inverterTexto(p));

// Saída:
// Informe o texto que você deseja ver de trás para frente: Bora estudar Javascript!
// ----------------------------------------
// !tpircsavaJ radutse aroB