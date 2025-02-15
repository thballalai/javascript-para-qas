// Escreva um código que verifique se uma string contém a palavra "QA". Se encontrar, exiba "Este texto menciona QA!", senão, "Nenhuma referência a QA encontrada.".

const prompt = require('prompt-sync')();

let texto = prompt("Digite aqui um texto curto: (200caracteres)");


if(texto.length < 200) {
    if(texto.includes("QA")) {
        console.log("Este texto menciona QA!");
    } else {
        console.log("Nenhuma referência a QA encontrada.");
    }
} else {
    console.log("Texto muito longo!");
}
