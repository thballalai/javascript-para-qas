// Crie uma string com uma frase desorganizada (exemplo: " ola MUNDO! "). Corrija o formato, removendo espaços extras e deixando a primeira letra maiúscula.

// Inicialização da constante que captura input do usuário
const prompt = require('prompt-sync')();

// Inicialização de variável texto para armazenar input do usuário
let texto = prompt("Digite aqui um texto curto: (até 200 caracteres) ");

// Inicialização de variável textoFormatado
let textoFormatado = "";

// Verificação se string tem o número máximo de caracteres para determinar se o aplicativa continuará sendo executado
if(texto.length < 200) {
    // Remoção dos espaços vazios nos extremos da variável texto e transformação de todos os caracteres em minusculo
    textoFormatado = texto.trim().toLowerCase();
    // Transformação do primeiro caractere da string textoFormatado em maiuscula
    textoFormatado = textoFormatado.charAt(0).toUpperCase() + textoFormatado.slice(1);
    // Exibir na tela o texto formatado
    console.log(`Texto após a formatação: ${textoFormatado}`);
} else {
    console.log("Texto muito longo!");
}

// Saída:
// Digite aqui um texto curto: (até 200 caracteres) eu Gosto MUITO de estudar JAVASCRIPT!
// Texto após a formatação: Eu gosto muito de estudar javascript!